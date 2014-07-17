ErrorList = [];
var v3NOT_REPORTING = " NV=\"7701005\"";
var v3NOT_RECORDED = " NV=\"7701003\"";

var v2NOT_AVAILABLE = "-5";
var v2NOT_REPORTING = "-15";
var v2NOT_APPLICABLE = "-25"
var v2NOT_RECORDED = "-20";
var v2NOT_KNOWN = "-10";
var NIL_V3NOT_RECORDED = " NV=\"7701003\" xsi:nil=\"true\"/>";
var NIL_V3NOT_REPORTING = " NV=\"7701005\" xsi:nil=\"true\"/>";
var NIL_V3NOT_APPLICABLE = " NV=\"7701001\" xsi:nil=\"true\"/>";
var PN_REFUSED_IS_NILLABLE = " xsi:nil=\"true\" PN=\"8801019\"/>";
var PN_UNABLE_TO_COMPLETE_IS_NILLABLE = " xsi:nil=\"true\" PN=\"8801023\"/>";
var PN_FINDING_NOT_PRESENT_IS_NILLABLE = " xsi:nil=\"true\" PN=\"8801005\"/>";
var FAX = "PhoneNumberType=\"9913001\"";
var HOME = "PhoneNumberType=\"9913003\"";
var MOBILE = "PhoneNumberType=\"9913005\"";
var PAGER = "PhoneNumberType=\"9913007\"";
var WORKPHONE = "PhoneNumberType=\"9913009\"";
var PERSONALEMAIL = "EmailAddressType=\"9904001\"";
var WORKEMAIL = "EmailAddressType=\"9904003\"";

var dAgency = new Object;
var AgencyServiceGroup = [];
var AgencyYearGroup = [];
var AgencyServiceGroupArray = [];
var AgencyYearGroupArray = [];
var _retArray = [];
var _OLAPArray = [];
var OLAPXML = new XMLWriter();
var V3XML = new XMLWriter();
var XMLString = "";
var _v2Array = [];
var DemographicsObject = Object();

var dTotalYearArray = [];
//////////////////////////////////
var dFacility = new Object;
var dFacilityGroup = new Object;



var getSectionIndex = function (sectionObject, sectionName) {
    console.log(sectionObject);
    var intObjects = sectionObject.length;
    //console.log(intObjects)
    var _retValue = [];
    for (var d = 0; d < intObjects ; d++) {
        if (sectionObject[d].attributes.name == sectionName) {
            _retValue.push(d);
        }
    }
    if (_retValue.length == 0) {
        _retValue.push(-1);
    }
    return _retValue;
};

var setdFacility = function (facilityObject) {
    var _retArray = [];
    var _v2Array = [];
    var dFacilityGroup = new Object()
    var FacilityGroup = new Object()
    var dFacility = new Object()
    V3XML.BeginNode("dFacility");
    OLAPXML.BeginNode("dFacility");
    //  console.log(businessObject.sections.length);

    for (var a = 0; a < facilityObject.attributes.sections.length; a++) {

        _retArray.push('\t' + "<dFacilityGroup>" + '\n');
        _OLAPArray.push('\t' + "<dFacilityGroup>" + '\n');
        // console.log(businessObject.sections[a].attributes.name);
        var _elementList = facilityObject.attributes.sections[a].attributes.sections[0].attributes.elements;

        //dFacility.01/////////
        _val = getValue(_elementList, "dFacility.01");
        if (_val == null)
        {
            dFacilityGroup["dFacility.01"] = null;
            V3XML.Node("dFacility.01", null);
            OLAPXML.Node("FacilityType", null);
            dFacilityGroup["FacilityType"] = null;
            _v2Array.push({ section: "D04", element: "D04_15", val: null });
        }
        else
        {
            V3XML.Node("dFacility.01", _val[0]);
            OLAPXML.Node("FacilityType", setCodeText("dFacility.01", _val[0]));
            dFacilityGroup["FacilityType"] = setCodeText("dFacility.01", _val[0]);
            dFacilityGroup["dFacility.01"] = _val[0];
            _v2Array.push({ section: "D04", element: "D04_15", val: setD2("dFacility.01", _val[0]) });

        };

        //Verify Section and set dFacilityGroup        
        if (businessObject.sections[a].attributes.sections != undefined)
        {
            _sectionIndex = getSectionIndex(businessObject.sections[a].attributes.sections, "dFacility.FacilityGroup");

            for (var b = 0; b < _sectionIndex.length; b++) {
                //    console.log(businessObject.sections[a].attributes.sections[_sectionIndex[b]].attributes.elements)
                var _groupObject = businessObject.sections[a].attributes.sections[b].attributes.elements;
                V3XML.BeginNode("dFacility.FacilityGroup");
                OLAPXML.BeginNode("dFacility.FacilityGroup");



                //dFacility.02/////////
                _val = getValue(_groupObject, "dFacility.02");
                if (_val == null)
                {
                    dFacilityGroup["dFacility.02"] = null;
                    V3XML.Node("dFacility.02", null);
                    OLAPXML.Node("FacilityName", null);
                    dFacilityGroup["FacilityName"] = null;
                    _v2Array.push({ section: "D04", element: "D04_11", val: null });
                }
                else
                {
                    FacilityGroup["dFacility.02"] = _val[0];
                    V3XML.Node("dFacility.02", _val[0]);
                    OLAPXML.Node("FacilityName", _val[0]);
                    dFacilityGroup["FacilityName"] = _val[0];
                    _v2Array.push({ section: "D04", element: "D04_11", val: _val[0] });
                };

                //dFacility.03/////////
                _val = getValue(_groupObject, "dFacility.03");
                if (_val == null)
                {
                    dFacilityGroup["dFacility.03"] = null;
                    V3XML.Node("dFacility.03", null);
                    OLAPXML.Node("LocationCode", null);
                    dFacilityGroup["LocationCode"] = null;
                    _v2Array.push({ section: "D04", element: "D04_12", val: null });
                }
                else
                {
                    dFacilityGroup["dFacility.03"] = _val[0];
                    V3XML.Node("dFacility.03", _val[0]);
                    OLAPXML.Node("LocationCode", _val[0]);
                    dFacilityGroup["LocationCode"] = _val[0];
                    _v2Array.push({ section: "D04", element: "D04_12", val: _val[0] });

                };

                //dFacility.04/////////
                _val = getValue(_groupObject, "dFacility.04");
                if (_val == null)
                {
                    dFacilityGroup["dFacility.04"] = null;
                    V3XML.Node("dFacility.04", null);
                    OLAPXML.Node("HospitalDesignations", null);
                    dFacilityGroup["HospitalDesignations"] = null;

                }
                else
                {
                    var arr = [];
                    var arr2 = [];
                    for (var t = 0; t < _val.length; t++)
                    {
                        arr.push(_val[t]);
                        arr2.push(setCodeText("dFacility.04", _val[t]));
                        V3XML.Node("dFacility.04", _val[t]);                 
                        OLAPXML.Node("HospitalDesignations", setCodeText("dFacility.04", _val[t]));
                    }
                    FacilityGroup["dFacility.04"] = arr.slice(0);
                    FacilityGroup["HospitalDesignations"] = arr2.slice(0);
                };

                //dFacility.05/////////
                _val = getValue(_groupObject, "dFacility.05");
                if (_val == null)
                {
                    dFacilityGroup["dFacility.05"] = null;
                    V3XML.Node("dFacility.05", null);
                    OLAPXML.Node("NationalProviderIdentifier", null);
                    dFacilityGroup["NationalProviderIdentifier"] = null;
                }
                else
                {
                    dFacilityGroup["dFacility.05"] = _val[0];
                    V3XML.Node("dFacility.05", _val[0]);
                    OLAPXML.Node("NationalProviderIdentifier", _val[0]);
                    dFacilityGroup["NationalProviderIdentifier"] = _val[0];
                };


                //dFacility.06/////////
                _val = getValue(_groupObject, "dFacility.06");
                if (_val == null)
                {
                    dFacilityGroup["dFacility.06"] = null;
                    V3XML.Node("dFacility.06", null);
                    OLAPXML.Node("Room", null);
                    dFacilityGroup["Room"] = null;
                }
                else
                {
                    dFacilityGroup["dFacility.06"] = _val[0];
                    V3XML.Node("dFacility.06", _val[0]);
                    OLAPXML.Node("Room", _val[0]);
                    dFacilityGroup["Room"] = _val[0];
                };

                //dFacility.07/////////
                _val = getValue(_groupObject, "dFacility.07");
                if (_val == null)
                {
                    dFacilityGroup["dFacility.07"] = null;
                    V3XML.Node("dFacility.07", null);
                    OLAPXML.Node("StreetAddress", null);
                    dFacilityGroup["StreetAddress"] = null;

                }
                else
                {
                    dFacilityGroup["dFacility.07"] = _val[0];
                    V3XML.Node("dFacility.07", _val[0]);
                    OLAPXML.Node("StreetAddress", _val[0]);
                    dFacilityGroup["StreetAddress"] = _val[0];

                };

                //dFacility.08/////////
                _val = getValue(_groupObject, "dFacility.08");
                if (_val == null)
                {
                    dFacilityGroup["dFacility.08"] = null;
                    V3XML.Node("dFacility.08", null);
                    OLAPXML.Node("City", null);
                    dFacilityGroup["City"] = null;
                }
                else
                {
                    dFacilityGroup["dFacility.08"] = _val[0];
                    V3XML.Node("dFacility.08", _val[0]);
                    OLAPXML.Node("City", _val[0]);
                    dFacilityGroup["City"] = _val[0];
                };

                //dFacility.09/////////
                _val = getValue(_groupObject, "dFacility.09");
                if (_val == null)
                {
                    dFacilityGroup["dFacility.09"] = null;
                    V3XML.Node("dFacility.09", null);
                    OLAPXML.Node("State", null);
                    dFacilityGroup["State"] = null;
                }
                else
                {
                    dFacilityGroup["dFacility.09"] = _val[0];
                    V3XML.Node("dFacility.09", _val[0]);
                    OLAPXML.Node("State", _val[0]);
                    dFacilityGroup["State"] = _val[0];
                };

                //dFacility.10/////////
                _val = getValue(_groupObject, "dFacility.10");
                if (_val == null)
                {
                    dFacilityGroup["dFacility.10"] = null;
                    V3XML.Node("dFacility.10", null);
                    OLAPXML.Node("Zip", null);
                    dFacilityGroup["Zip"] = null;
                }
                else
                {
                    dFacilityGroup["dFacility.10"] = _val[0];
                    V3XML.Node("dFacility.10", _val[0]);
                    OLAPXML.Node("Zip", _val[0]);
                    dFacilityGroup["Zip"] = _val[0];
                };

                //dFacility.11/////////
                _val = getValue(_groupObject, "dFacility.11");
                if (_val == null)
                {
                    dFacilityGroup["dFacility.11"] = null;
                    V3XML.Node("dFacility.11", null);
                    OLAPXML.Node("County", null);
                    dFacilityGroup["County"] = null;
                }
                else
                {
                    dFacilityGroup["dFacility.11"] = _val[0];
                    V3XML.Node("dFacility.11", _val[0]);
                    OLAPXML.Node("County", _val[0]);
                    dFacilityGroup["County"] = _val[0];
                };

                //dFacility.12/////////
                _val = getValue(_groupObject, "dFacility.12");
                if (_val == null)
                {
                    dFacilityGroup["dFacility.12"] = null;
                    V3XML.Node("dFacility.12", null);
                    OLAPXML.Node("Country", null);
                    dFacilityGroup["Country"] = null;
                }
                else
                {
                    dFacilityGroup["dFacility.12"] = _val[0];
                    V3XML.Node("dFacility.12", _val[0]);
                    OLAPXML.Node("Country", setCodeText("dFacility.12", _val[0]));
                    dFacilityGroup["Country"] = setCodeText("dFacility.12", _val[0]);
                };

                _val = getValue(_groupObject, "dFacility.13");
                if (_val == null)
                {
                    dFacilityGroup["dFacility.13"] = null;
                    V3XML.Node("dFacility.13", null);
                    OLAPXML.Node("GPS", null);
                    dFacilityGroup["GPS"] = null;
                }
                else
                {
                    dFacilityGroup["dFacility.13"] = _val[0];
                    V3XML.Node("dFacility.13", _val[0]);
                    OLAPXML.Node("GPS", _val[0]);
                    dFacilityGroup["GPS"] = _val[0];
                };

                _val = getValue(_groupObject, "dFacility.14");
                if (_val == null)
                {
                    dFacilityGroup["dFacility.14"] = null;
                    V3XML.Node("dFacility.14", null);
                    OLAPXML.Node("NationalGridLocation", null);
                    dFacilityGroup["NationalGridLocation"] = null;
                }
                else
                {
                    dFacilityGroup["dFacility.14"] = _val[0];
                    V3XML.Node("dFacility.14", _val[0]);
                    OLAPXML.Node("NationalGridLocation", _val[0]);
                    dFacilityGroup["NationalGridLocation"] = _val[0];
                };
                V3XML.EndNode();
                OLAPXML.EndNode();
            }
        }
    };

    V3XML.EndNode();
    OLAPXML.EndNode();

  
    dFacilityGroup.FacilityGroup = FacilityGroup;
    dFacility.dFacilityGroup = dFacilityGroup


};    //end of function   



var isRequiredStateElement = function (elementID) {
    return true;
};
var getdFacilityValue = function (payload, valueObject) {
    var _retVal = [];
    i = 0;

    for (var i = 0; i < payload.length ; i++) {
        if (payload[i].attributes.title == valueObject) {
//                   console.log(valueObject)
//                   console.log(payload[i].attributes.value)
            if (payload[i].attributes.value == undefined) {
                _retVal.push(null);
            }
            else {
                _retVal.push(payload[i].attributes.value);
            }
        }
    }
    return _retVal;
};

function setV2(NEMSISElementNumber, valueArray) {
    //  console.log(NEMSISElementNumber);
    var _retArray = [];
    //console.log(valueArray);
    switch (NEMSISElementNumber) {
        case "dFacility.01":

            if (dFacility01[[0]] == undefined) {
                _retArray.push(valueArray + "UNDEFINED");
            }
            else {
                _retArray.push(dFacility01[valueArray[0]]);
            }
            break;
        default:
            _retArray.push(NEMSISElementNumber = " version 2 not found");
    }

    return _retArray;

}
var dFacility01 = {

    "1701001": "7320",
    "1701005": "7280",
    "1701003": "7290",
    "1701009": "7300",
    "1701007": "7320",
    "1701011": "7280",

};


function setCodeText(NEMSISElementNumber, codeVal) {
    var _return = [];


    switch (NEMSISElementNumber) {
        case "dFacility.01":
            if (dFacility334_01[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dFacility334_01[codeVal];
            }
            break;

        case "dFacility.04":
            if (dFacility334_04[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dFacility334_04[codeVal];
            }
            break;

        case "dFacility.12":
            if (dFacility334_12[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dFacility334_12[codeVal];
            }
            break;

        default:
            _return = " UNDEFINED";
    }
    return _return;

}



var dFacility334_01 = {
    "1701001": "Assisted Living Facility",
    "1701003": "Clinic",
    "1701005": "Hospital",
    "1701007": "Nursing Home",
    "1701009": "Other (Not Listed)",
    "1701011": "Urgent Care"
};

var dFacility334_04 = {
    "9908001": "Behavioral Health",
    "9908003": "Burn Center",
    "9908005": "Critical Access Hospital",
    "9908007": "Hospital (General)",
    "9908009": "Neonatal Center",
    "9908011": "Pediatric Center",
    "9908013": "STEMI",
    "9908015": "STEMI Center (24/7)",
    "9908017": "Stroke Center",
    "9908019": "Rehab Center",
    "9908021": "Trauma Center Level 1",
    "9908023": "Trauma Center Level 2",
    "9908025": "Trauma Center Level 3",
    "9908027": "Trauma Center Level 4",
    "9908029": "Trauma Center Level 5"
};