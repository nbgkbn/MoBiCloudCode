var ErrorList = [];
var v3NOT_REPORTING = "7701005";
var v3NOT_RECORDED = "7701003";
var v3NOT_APPLICABLE = "7701001";
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

var eArrest = new Object;
var E11 = new Object;
var _retArray = [];
var XMLString = ""
/////////////////////////////////
var getNEMSISSection = function (businessObject, sectionName)
    //Returns an array of index values for a given sectionName within a sectionObject
    // if sectionName does not exist within the sectionObject, return -1
{
    var _retValue = new Object();
    _retValue = "undefined"
    for (var d = 0; d < businessObject.length; d++) {
        if (businessObject[d].attributes.name == sectionName) {
            _retValue = businessObject[d];
        }
    };
    return _retValue;
};

var getSectionIndex = function (sectionObject, sectionName)
    //Returns an array of index values for a given sectionName within a sectionObject
    // if sectionName does not exist within the sectionObject, return -1
{
    var _retValue = [];
    for (var d = 0; d < sectionObject.sections.length; d++) {
        if (sectionObject.sections[d].attributes.name == sectionName) {
            _retValue.push(d);
        }
    }
    if (_retValue.length == 0) {
        _retValue.push(-1);
    }
    return _retValue;
};
//////////////////////////////////////////////////



var seteCrew = function (businessObject) {
    var v2Array = [];
    var eCrewGroupArray = new Array();
    var eCrew = new Object();
    var eCrewGroup = new Object();
    var CrewGroup = new Object();

    var eCrewObject = new Object()
    eCrewObject = getNEMSISSection(businessObject, "eCrew")

    if (eCrewObject != "undefined")
    {
        console.log(eCrewObject)
        _sectionIndex = getSectionIndex(eCrewObject.attributes, "eCrew.CrewGroup");
        console.log(_sectionIndex)
    }

    var bHasData = false;  //once I have real data, set to False

    
    for (var i = 0; i < _sectionIndex.length; i++) {
        //eCrew.01/////////////

        var _elementList = [];
        _elementList = eCrewObject.attributes.sections[_sectionIndex[i]].attributes.elements;
        _val = getValue(_elementList, "eCrew.01");
        if (_val == null) {
            if (isRequiredStateElement("eCrew.01") == true) {
                eCrewGroup["eCrew.01"] = v3NOT_RECORDED;
                eCrewGroup["CrewMemberID"] = v3NOT_RECORDED;
                v2Array.push({ section: "E04", element: "E04_01", val: v2NOT_RECORDED });
            }
            else 
            {
                eCrewGroup["eCrew.01"] = v3NOT_REPORTING;
                eCrewGroup["CrewMemberID"] = "NOT REPORTING";
                v2Array.push({ section: "E04", element: "E04_01", val: v2NOT_REPORTING });
            }
        }
        else
        {
            bHasData = true;
            v2Array.push({ section: "E04", element: "E04_01", val: _val[0] });
            eCrewGroup["eCrew.01"] = _val[0];
            eCrewGroup["CrewMemberID"] = _val[0];            
        };

        //eCrew.02/////////////
        _val = getValue(_elementList, "eCrew.02");
        if (_val == null)
        {
            if (isRequiredStateElement("eCrew.02") == true)
            {
                eCrewGroup["eCrew.02"] = v3NOT_RECORDED;
                eCrewGroup["CrewMemberLevel"] = v3NOT_RECORDED;
                v2Array.push({ section: "E04", element: "E04_03", val: v2NOT_RECORDED });
            }
            else
            {
                eCrewGroup["eCrew.02"] = v3NOT_REPORTING;
                eCrewGroup["CrewMemberLevel"] = v3NOT_REPORTING;
                v2Array.push({ section: "E04", element: "E04_03", val: v2NOT_REPORTING });
            }
        }
        else
        {
            bHasData = true;
            v2Array.push({ section: "E04", element: "E04_03", val: setV2("eCrew.02", _val[0]) });
            eCrewGroup["eCrew.02"] = _val;
            eCrewGroup["CrewMemberLevel"] = setCodeText("eCrew.02", _val[0]);
        };

        //eCrew.03/////////////
        _val = getValue(_elementList, "eCrew.03");
        if (_val == null)
        {
            if (isRequiredStateElement("eCrew.03") == true)
            {
                eCrewGroup["eCrew.03"] = v3NOT_RECORDED;
                eCrewGroup["CrewMemberResponseRole"] = v3NOT_RECORDED;
                v2Array.push({ section: "E04", element: "E04_02", val: v2NOT_RECORDED });
            }
            else
            {
                v2Array.push({ section: "E04", element: "E04_02", val: v2NOT_REPORTING });
                eCrewGroup["CrewMemberResponseRole"] = v3NOT_REPORTING;
                eCrewGroup["eCrew.03"] = v3NOT_REPORTING;
            }
        }
        else
        {

            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _val.length; i++)
            {
                arr1.push(_val[i]);
                arr2.push(setV2("eCrew.03", _val[i]));
                arr3.push(setCodeText("eCrew.03", _val[i]));
            };
            bHasData = true;
            eCrewGroup["eCrew.03"] = arr1.slice(0);
            v2Array.push({ section: "E04", element: "E04_02", val: arr1.slice(0) });
            eCrewGroup["CrewMemberResponseRole"] = arr3.slice(0);
        };
        eCrewGroupArray.push(eCrewGroup)
        
    };
 //   if (bHasData == false) {
        //if (eCrewGroupArray.length == 0) {
          //  eCrew = seteCrewNotApplicableAll()
        //}
    //}

        eCrew.V2Array = v2Array;
        eCrew.CrewGroup = eCrewGroupArray;
        console.log(eCrew);

    return eCrew;
};

var seteCrewNotApplicableAll = function () {
    var eCrew = new Object()
    var CrewGroup = new Object();

    v2Array.push({ section: "E04", element: "E04_01", val: v2NOT_APPLICABLE });
    v2Array.push({ section: "E04", element: "E04_02", val: v2NOT_APPLICABLE });
    v2Array.push({ section: "E04", element: "E04_03", val: v2NOT_APPLICABLE });

    CrewGroup["eCrew.01"] = V3NOT_APPLICABLE;
    CrewGroup["eCrew.02"] = V3NOT_APPLICABLE;
    CrewGroup["eCrew.03"] = V3NOT_APPLICABLE;

    eCrew.V2Array = v2Array;
    eCrew.CrewGroup = CrewGroup;
    // console.log(_retArray);
    return eCrew;

};



var isRequiredStateElement = function (elementID) {
    return true;
};
var getValue = function (elementList, valueObject) {
    var _arr = [];
    for (var i = 0; i < elementList.length; i++) {
        if (elementList[i].attributes.title == valueObject) {
            if (elementList[i].attributes.value == undefined) {
                return null;
            }
            else {
                if (elementList[i].attributes.value.trim().length != 0)  //Can't trust data.  
                {
                    _arr.push(elementList[i].attributes.value);
                }
            }
        }
    };
    if (_arr.length == 0) {
        return null;  //handle nulls on an attribute-by attribute level
    }
    else {
        return _arr;
    }
};
function setD2(NEMSISElementNumber, valueArray) {
    //    console.log(NEMSISElementNumber);
    var _retArray = [];
    //    console.log(valueArray);
    switch (NEMSISElementNumber) {
        case "eCrew.01":

            if (eCrew02[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eCrew01[valueArray[0]]);
            }
            break;
        case "eCrew.02":
            for (i = 0; i < valueArray.length; i++) {
                if (eCrew02[valueArray[i]] == undefined) {
                    _retArray.push(valueArray[i] + "UNDEFINED");
                }
                else {
                    _retArray.push(eCrew02[valueArray[i]]);
                }
            }
            break;
        case "eCrew.03":
            if (eCrew03[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eCrew03[valueArray[0]]);
            }
            break;

        default:
            _retArray.push(NEMSISElementNumber = " version 2 not found");
    }

    return _retArray;
};

    var eCrew03 = {
        "2403001":"580",
        "2403003":"580",
        "2403005":"595",
        "2403007":"590",
        "2403009":"600",	
        "2403011":"585",
        "2403013":"590"	};	
	
    var eCrew02 = {
        "9925001":"6110",
        "9925003":"6100",
        "9925005":"6090",
        "9925007":"6110",
        "9925013":"	6120",
        "9925015":"	6090",
        "9925017":"	6100",
        "9925019":"	6110",
        "9925021":"	6111",
        "9925023":"	640",
        "9925025":"	645",
        "9925027":"	6112",
        "9925031":"635",
        "9925033":"6110",
        "9925034":"610",
        "9925037":"611",
        "9925039":"6110",
        "9925041":"6111",
        "9925043":"6111"
    };

    var eCrew334_02 = {
        "2402001" : "2009 Advanced Emergency Medical Technician (AEMT)", 
        "2402003" : "2009 Emergency Medical Responder (EMR)", 
        "2402005" : "2009 Emergency Medical Technician (EMT)", 
        "2402007" : "2009 Paramedic", 
        "2402009" : "First Responder", 
        "2402011" : "EMT-Basic", 
        "2402013" : "EMT-Intermediate", 
        "2402015" : "EMT-Paramedic", 
        "2402017" : "Nurse", 
        "2402019" : "Other Healthcare Professional", 
        "2402021" : "Other Non-Healthcare Professional", 
        "2402023" : "Physician", 
        "2402025" : "Respiratory Therapist", 
        "2402027" : "Student", 
        "2402029" : "Critical Care Paramedic", 
        "2402031" : "Community Paramedicine"
    };

    var eCrew334_03 = {
        "2403001": "Driver/Pilot-Response",
        "2403003": "Driver/Pilot-Transport",
        "2403005": "Other (Not Listed)",
        "2403007": "Other Patient Caregiver-At Scene",
        "2403009": "Other Patient Caregiver-Transport",
        "2403011": "Primary Patient Caregiver-At Scene",
        "2403013": "Primary Patient Caregiver-Transport"
    };

    function setCodeText(NEMSISElementNumber, valueArray) {
        var _return = [];
        switch (NEMSISElementNumber) {
            case "eCrew.02":
                if (eCrew334_03[valueArray] == undefined) {
                    _return = valueArray + " UNDEFINED";
                }
                else {
                    _return = eCrew334_03[valueArray];
                }
                break;
            case "eCrew.03":
                if (eCrew334_03[valueArray] == undefined) {
                    _return = valueArray + " UNDEFINED";
                }
                else {
                    _return = eCrew334_03[valueArray];
                }
                break;


            default:
                _return = " UNDEFINED";
        }
        return _return;

    };
