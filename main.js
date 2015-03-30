var Tst = require("cloud/MW.js").MW;
var TC = require("cloud/TheCall.js");
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:

/*
    MW.getPCR("lWIgOkhaKw").then(function (result) {
            console.log(result)
            /////////////////
            var derek = require("cloud/derek.js").MW;

Parse.Cloud.afterSave("PCR", function(request) {
    var id = request.object.id;
    var promise = derek.getPCR(id);

    promise.then(function(results){
        //results = pcr
    }, function(error){
        //Handle error here
    });
});


            */
Parse.Cloud.define("hello", function (request, response) {

    var promise = Tst.getPCR("yRohC0wdBN");
    promise.then(function (results) {
        response.success(results)
        var obj = TC.createTheCall(results.attributes.emsDataSet);        
    }, function (error) {
        //Handle error here
    });
});





/*
var lookupXByID = function ()
    // Must fulfill with an error when this lookup fails
    // Sucessful returns must return X
{
    console.log("lookupXByID.entry");
    var objectid = "MjZkRuTOeB";
    var X = Parse.Object.extend("TestObject");
    var query = new Parse.Query(X);

    
    query.equalTo("objectId", objectid);
    var promise0 = query.first();
    var promise1 = promise0.then(
        function (result) {
            console.log("lookupXByID.promise0.success");
            if (typeof result === "undefined") {
                return utilMod.promiseerror(10004, "No matching X ID");
            } else {
                // We have a match
                return result;
            };
        }
    );
    console.log("lookupXByID.exit");
    return promise1;
};
*/