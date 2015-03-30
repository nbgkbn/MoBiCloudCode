exports.getPCR = function (id) {
    var query = new Parse.Query("PCR");
    query.equalTo("objectId", "lWIgOkhaKw");
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
        promises.push("value")
        // get all ems sections
        if (emsSections) {
            for (var i = 0; i < emsSections.length-1; i++) {            
                var sec = emsSections[i];
                console.log(sec)
                promises.push(getFullSection(sec));
            }
        }
        
        return Parse.Promise.when(promises);
    }, function (error) {
        console.log("Error finding pcrs: " + error.code + " " + error.message);
    }).then(function (results) {
        //console.log("Agency")
        //var agencyId = retPCR.get('agencyId');
        //var q = new Parse.Query("Agency");
        //q.equalTo("objectId", agencyId);
        //return q.first();
    }, function (error) {
        console.log("all tasks failed: " + error.code + " " + error.message);
    }).then(function (object) {
        // Successfully retrieved the object.
        //console.log("Successfully retrieved the object")
        //Uconsole.log(object)
        //agency = object;
        //console.log("agency=object")
        //var promises = [];
        //console.log("Return")
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

        console.log("OtherReturn")
        console.log(retPCR)
        return Parse.Promise.as(retPCR);
    }, function (err) {

        console.log("failed to get dem set from agency");

    });
};


var getFullSection= function (obj) {
    return getSection(obj).then(function (res) {
        return getElements(res);
    }).then(function (res) {
        var promises = [];
        if (res != null) {
            var sections = res.get('sections');
            if (sections) {
                for (var i = 0; i < sections.length; i++) {
                    var s = sections[i];
                    promises.push(getFullSection(s));
                }
            }
        }
        return Parse.Promise.when(promises);
    });
};

// returns a promise with the single section fetched from the server as the result
var getSection= function (section) {
    return section.fetch();
};

// returns a promise with section as a result after fetching all of its elements from the server
var getElements= function (section) {
    var els = section.get('elements');
    if (els) {
        return Parse.Object.fetchAllIfNeeded(els).then(function (obj) {
            return Parse.Promise.as(section);
        });
    } else {
        return Parse.Promise.as(section);
    }
};

