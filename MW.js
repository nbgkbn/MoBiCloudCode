var MW = {
    PCR: Parse.Object.extend("PCR"),
    Section: Parse.Object.extend("Section"),

    //***********************//
    // main function to call //
    //***********************//
    // returns a Parse.Promise with the pcr as the result
    getPCR: function (id) {
        var query = new Parse.Query(this.PCR);
        query.equalTo("objectId", id);
        query.limit(1);
        query.include("emsDataSet");
        query.include("demDataSet");

        var retPCR;

        return query.find().then(function (results) {
            var pcr = results[0];
            retPCR = pcr;
            var ems = pcr.get("emsDataSet");
            var dem = pcr.get("demDataSet");

            var emsSections = ems.get("sections");
            var demSections = dem.get("sections");

            var promises = [];

            // get all ems sections
            if (emsSections) {
                for (var i = 0; i < emsSections.length; i++) {
                    var sec = emsSections[i];
                    promises.push(MW.getFullSection(sec));
                }
            }

            // get all dem sections
            if (demSections) {
                for (var i = 0; i < demSections.length; i++) {
                    var sec = demSections[i];
                    promises.push(MW.getFullSection(sec));
                }
            }

            // Return a new promise that is resolved when all of the deletes are finished.
            return Parse.Promise.when(promises);

        }, function (error) {
            console.log("Error finding pcrs: " + error.code + " " + error.message);
        }).then(function (results) {
            return Parse.Promise.as(retPCR);
        }, function (error) {
            console.log("all tasks failed: " + error.code + " " + error.message);
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
}