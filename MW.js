
var MW = {
    PCR: Parse.Object.extend("PCR"),
    Section: Parse.Object.extend("Section"),
    //***********************//

    // main function to call //

    //***********************//

    // returns a Parse.Promise with the pcr as the result

    getPCR: function (id) {
        var query = new Parse.Query("PCR");
        query.equalTo("objectId", id);
        query.limit(1);
        query.include("emsDataSet");        
        var retPCR;
        var agency;
        return query.find().then(function (results) {
            var pcr = results[0];
            retPCR = pcr;
            var ems = pcr.get("emsDataSet");
            var emsSections = ems.get("sections");

            var promises = [];

            // get all ems sections
            if (emsSections) {
                for (var i = 0; i < emsSections.length; i++) {
                    var sec = emsSections[i];
                    promises.push(MW.getFullSection(sec));
                }
            }

            return Parse.Promise.when(promises);
        }, function (error) {
            console.log("Error finding pcrs: " + error.code + " " + error.message);
        }).then(function (results) {
            var agencyId = retPCR.get('agencyId');
            var q = new Parse.Query("Agency");
            q.equalTo("objectId", agencyId);
            return q.first();
        }, function (error) {
            console.log("all tasks failed: " + error.code + " " + error.message);
        }).then(function (object) {
            // Successfully retrieved the object.
            console.log("Successfully retrieved the object")
            //Uconsole.log(object)
            agency = object;            
            var promises = [];
            /* 
           promises.push(MW.getFullSection(object.get("dAgency")));
           promises.push(MW.getFullSection(object.get("dConfiguration")));
           promises.push(MW.getFullSection(object.get("dContact")));
           promises.push(MW.getFullSection(object.get("dCustomConfiguration")));
           promises.push(MW.getFullSection(object.get("dCustomResults")));          
           promises.push(MW.getFullSection(object.get("dDevice")));           
           promises.push(MW.getFullSection(object.get("dFacility")));           
           promises.push(MW.getFullSection(object.get("dLocation")));           
           promises.push(MW.getFullSection(object.get("dPersonnel")));           
           promises.push(MW.getFullSection(object.get("dState")));           
           promises.push(MW.getFullSection(object.get("dVehicle")));
           
           */
            return Parse.Promise.when(promises);
        }, function (error) {
            console.log("failed to find agency with ID: " + agencyId + " err: " + error.code + ":" + error.message);
        }).then(function (object) {
            /*var dem = retPCR.get("demDataSet");
            var demSections = dem.get("sections");
            if (!demSections) {
                demSections = [];
                dem.set("sections", demSections);
            }
            */

            return Parse.Promise.as(retPCR);
        }, function (err) {

            console.log("failed to get dem set from agency");

        });
    },

    // return a promise that concludes after all of the subsections and elements are fetched

    getFullSection: function (obj) {
        return MW.getSection(obj).then(function (res) {
            return MW.getElements(res);
        }).then(function (res) {
            var promises = [];
            if (res != null) {
                var sections = res.get('sections');
                if (sections) {
                    for (var i = 0; i < sections.length; i++) {
                        var s = sections[i];
                        promises.push(MW.getFullSection(s));
                    }
                }
            }
            return Parse.Promise.when(promises);
        });
    },

    // returns a promise with the single section fetched from the server as the result
    getSection: function (section) {
        return section.fetch();
    },

    // returns a promise with section as a result after fetching all of its elements from the server
    getElements: function (section) {
        var els = section.get('elements');
        if (els) {
            return Parse.Object.fetchAllIfNeeded(els).then(function (obj) {
                return Parse.Promise.as(section);
            });
        } else {
            return Parse.Promise.as(section);
        }
    }
};
exports.MW = MW;
