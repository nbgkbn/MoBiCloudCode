var ErrorList = [];
var v3NOT_REPORTING = " NV=\"7701005\"";
var v3NOT_RECORDED = " NV=\"7701003\"";
var v2NOT_AVAILABLE = "-5";
var v2NOT_REPORTING = "-15";
var v2NOT_APPLICABLE = "-25"
var v2NOT_RECORDED = "-20";
var v2NOT_KNOWN = "-10";
var NIL_V3NOT_RECORDED = "NV=\"7701003\" xsi:nil=\"true\"/>";
var NIL_V3NOT_REPORTING = "NV=\"7701005\" xsi:nil=\"true\"/>";
var NIL_V3NOT_APPLICABLE = "NV=\"7701001\" xsi:nil=\"true\"/>";
var PN_REFUSED_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801019\"/>";
var PN_UNABLE_TO_COMPLETE_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801023\"/>";
PN_FINDING_NOT_PRESENT_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801005\"/>";


var seteScene = function (businessObject)
{

    var isNotApplicableFlag = true;  //once I have real data, set to False    
    console.log(businessObject);

    //////////////////////eScene.01
    _val = getValue(businessObject.elements, "eScene.01");
    if (_val == null)
    {
        eScene["FirstEMSUnitonScene"] = NOT_RECORDED;
        eScene["eScene.01"] = v3NOT_RECORDED;
    }
    else
    {
        isNotApplicableFlag = false;
        eScene["eScene.01"] = _val[0];
        eScene["FirstEMSUnitonScene"] = setCodeText("eScene.01", _val[0]);
    };

    ///////////////////////////////////    
    _sectionIndex = getSectionIndex(businessObject.sections.attributes, "eScene.ResponderGroup");
    for (var i = 0; i < _sectionIndex.length; i++)
    {

        var elementList = businessObject.sections[i].attributes.elements;


        //////////////////////eScene.02
        _val = getValue(elementList, "eScene.02");
        if (_val == null)
        {
            ResponderGroup["eScene.02"] = null;
            ResponderGroup["OtherEMSorPublicSafetyAgenciesatScene"] = null;
            v2Array.push({ section: "E08", element: "E08_01", val: v2NOT_KNOWN });
        }
        else
        {
            isNotApplicableFlag = false;
            v2Array.push({ section: "E08", element: "E08_01", val: _val[0] });
            ResponderGroup["eScene.02"] = _val[0];
            ResponderGroup["OtherEMSorPublicSafetyAgenciesatScene"] = _val[0];
        };

        //////////////////////eScene.03
        _val = getValue(elementList, "eScene.03");
        if (_val == null)
        {
            ResponderGroup["eScene.02"] = null;
            ResponderGroup["OtherEMSorPublicSafetyAgencyIDNumber"] = null;
        }
        else
        {
            isNotApplicableFlag = false;
            ResponderGroup["eScene.02"] = _val[0];
            ResponderGroup["OtherEMSorPublicSafetyAgencyIDNumber"] = _val[0];
        };

        //////////////////////eScene.04
        _val = getValue(elementList, "eScene.04");
        if (_val == null)
        {
            ResponderGroup["eScene.04"] = null;
            ResponderGroup["TypeofOtherServiceatScene"] = null;
            v2Array.push({ section: "E08", element: "E08_02", val: v2NOT_KNOWN });
        }
        else
        {
            isNotApplicableFlag = false;
            ResponderGroup["eScene.04"] = _val[0];
            ResponderGroup["TypeofOtherServiceatScene"] = setCodeText("eScene.04", _val[0]);
            v2Array.push({ section: "E08", element: "E08_02", val: setV2("eScene.04", _val[0]) });
        };
    };
    ///////////////////////////////
    //////////////////////eScene.05
    _val = getValue(businessObject.elements, "eScene.05");
    if (_val == null)
    {
        eScene["eScene.04"] = null;
        eScene["eScene.04"] = DateTimeInitialResponderArrivedonScene;
        v2Array.push({ section: "E08", element: "E08_04", val: null });
    }
    else
    {
        isNotApplicableFlag = false;
        eScene["eScene.04"] = _val[0];
        eScene["DateTimeInitialResponderArrivedonScene"] = _val[0];
        v2Array.push({ section: "E08", element: "E08_04", val: _val[0] });
    };

    //////////////////////eScene.06
    if (getValue(businessObject.elements, "eScene.06") == null)
    {
        v2Array.push({ section: "E08", element: "E08_05", val: v2NOT_RECORDED });
        eScene["eScene.06"] = V3NOT_RECORDED;
        eScene["NumberofPatientsatScene"] = NOT_RECORDED;
    }
    else
    {
        isNotApplicableFlag = false;
        eScene["NumberofPatientsatScene"] = setCodeText("eScene.06", _val[0]);
        v2Array.push({ section: "E08", element: "E08_05", val: setV2("eScene.06", _val[0]) });
        eScene["eScene.06"] = _val[0];
    };


    //////////////////////eScene.07
    _val = getValue(businessObject.elements, "eScene.07");
    if (_val == null)
    {
        v2Array.push({ section: "E08", element: "E08_06", val: v2NOT_RECORDED });
        eScene["eScene.07"] = V3NOT_RECORDED;
        eScene["MassCasualtyIncident"] = NOT_RECORDED;
    }
    else
    {
        isNotApplicableFlag = false;
        v2Array.push({ section: "E08", element: "E08_06", val: setV2("eScene.07", _val[0]) });
        eScene["eScene.07"] = _val[0];
        eScene["eScene.07"] = setCodeText("eScene.07", _val[0]);
    };

    //////////////////////eScene.08
    _val = getValue(businessObject.elements, "eScene.08");
    if (_val == null)
    {       
        eScene["eScene.08"] = V3NOT_RECORDED;
        eScene["TriageClassificationforMCIPatient"] = NOT_RECORDED;
    }
    else
    {
        isNotApplicableFlag = false;
        eScene["TriageClassificationforMCIPatient"] = setCodeText("eScene.08", _val[0]);
        eScene["eScene.08"] = _val[0];
    };

    //////////////////////eScene.09
    _val = getValue(businessObject.elements, "eScene.09");
    if (_val == null)
    {
        v2Array.push({ section: "E08", element: "E08_07", val: v2NOT_RECORDED });
        eScene["eScene.09"] = V3NOT_RECORDED;
        eScene["IncidentLocationType"] = NOT_RECORDED;
    }
    else
    {
        isNotApplicableFlag = false;
        v2Array.push({ section: "E08", element: "E08_07", val: setV2("eScene.09", _val[0]) });
        eScene["IncidentLocationType"] = setCodeText("eScene.09", _val[0]);
        eScene["eScene.09"] = _val[0];
    };

    //////////////////////eScene.10
    _val = getValue(businessObject.elements, "eScene.10");
    if (_val == null)
    {
        if (isRequiredStateElement("eScene.10") == true)
        {
            v2Array.push({ section: "E08", element: "E08_08", val: v2NOT_RECORDED });
            eScene["eScene.10"] = V3NOT_RECORDED;
            eScene["IncidentFacilityCode"] = NOT_RECORDED;
        }
        else
        {
            v2Array.push({ section: "E08", element: "E08_08", val: v2NOT_REPORTING });
            eScene["eScene.10"] = V3NOT_REPORTING;
            eScene["IncidentFacilityCode"] = NOT_REPORTING;
        }
    }
    else
    {
        isNotApplicableFlag = false;
        v2Array.push({ section: "E08", element: "E08_08", val: _val[0] });
        eScene["eScene.10"] = _val[0];
        eScene["IncidentFacilityCode"] = _val[0];
    };


    //////////////////////eScene.11
    _val = getValue(businessObject.elements, "eScene.11");
    if (_val == null) {
        if (isRequiredStateElement("eScene.11") == true)
        {            
            v2Array.push({ section: "E08", element: "E08_10", val: null });
            eScene["eScene.11"] = null;
            eScene["GPSLocation"] = null;
        }
    }
    else
    {
        isNotApplicableFlag = false;
        v2Array.push({ section: "E08", element: "E08_10", val: _val[0] });
        eScene["eScene.11"] = _val[0];
        eScene["GPSLocation"] = _val[0];
    };


    //////////////////////eScene.12
    _val = getValue(businessObject.elements, "eScene.12");
    if (_val == null)
    {
        if (isRequiredStateElement("eScene.12") == true)
        {         
            eScene["eScene.12"] = null;
            eScene["NationalGridCoordinates"] = null;
        }
    }
    else
    {
        isNotApplicableFlag = false;
        eScene["eScene.12"] = _val[0];
        eScene["NationalGridCoordinates"] = _val[0];        
    };

    //////////////////////eScene.13
    _val = getValue(businessObject.elements, "eScene.13");
    if (_val == null) {
        eScene["eScene.13"] = null;
        eScene["IncidentFacilityorLocationName"] = null;
    }
    else {
        isNotApplicableFlag = false;
        eScene["eScene.13"] = _val[0];
        eScene["IncidentFacilityorLocationName"] = _val[0];
    };

    //////////////////////eScene.14
    _val = getValue(businessObject.elements, "eScene.14");
    if (_val == null) {
        eScene["eScene.14"] = null;
        eScene["MilePostorMajorRoadway"] = null;
    }
    else {
        isNotApplicableFlag = false;
        eScene["eScene.14"] = _val[0];
        eScene["MilePostorMajorRoadway"] = _val[0];
    };

    //////////////////////eScene.15
    _val = getValue(businessObject.elements, "eScene.15");
    if (_val == null)
    {
        if (isRequiredStateElement("eScene.15") == true)
        {
            v2Array.push({ section: "E08", element: "E08_11", val: v2NOT_RECORDED });
            eScene["eScene.15"] = V3NOT_RECORDED;
            eScene["IncidentStreetAddress"] = NOT_RECORDED;
        }
        else  //if it isn't required, is nillable
        {
            v2Array.push({ section: "E08", element: "E08_11", val: v2NOT_KNOWN });
            eScene["eScene.15"] = null;
            eScene["IncidentStreetAddress"] = null;
        }
    }
    else
    {
        isNotApplicableFlag = false;
        v2Array.push({ section: "E08", element: "E08_11", val: _val[0] });
        eScene["eScene.15"] = _val[0];
        eScene["IncidentStreetAddress"] = _val[0];
    };

    //////////////////////eScene.16
    _val = getValue(businessObject.elements, "eScene.16");
    if (_val == null)
    {
        if (isRequiredStateElement("eScene.16") == true)
        {
            eScene["eScene.16"] = V3NOT_RECORDED;
            eScene["IncidentApartmentSuiteorRoom"] = V3NOT_RECORDED;
        }
        else {
            eScene["eScene.16"] = null;
            eScene["IncidentApartmentSuiteorRoom"] = null;
        }
    }
    else
    {
        isNotApplicableFlag = false;
        eScene["eScene.16"] = _val[0];
        eScene["IncidentApartmentSuiteorRoom"] = _val[0];
    };

    //////////////////////eScene.17
    _val = getValue(businessObject.elements, "eScene.17");
    if (_val == null)
    {
        if (isRequiredStateElement("eScene.17") == true)
        {
            v2Array.push({ section: "E08", element: "E08_12", val: v2NOT_RECORDED });
            eScene["eScene.17"] = v3NOT_RECORDED;
            eScene["IncidentCity"] = NOT_RECORDED;
        }
        else
        {
            v2Array.push({ section: "E08", element: "E08_12", val: v2NOT_REPORTING });
            eScene["eScene.17"] = v3NOT_REPORTING;
            eScene["IncidentCity"] = NOT_REPORTING;
        }
    }
    else
    {
        isNotApplicableFlag = false;
        v2Array.push({ section: "E08", element: "E08_12", val: _val[0] });
        eScene["eScene.17"] = _val[0];
        eScene["IncidentCity"] = _val[0];
    };


    //////////////////////eScene.18
    _val = getValue(businessObject.elements, "eScene.18");
    if (_val == null)
    {
        v2Array.push({ section: "E08", element: "E08_14", val: v2NOT_RECORDED });
        eScene["eScene.18"] = v3NOT_RECORDED;
        eScene["IncidentState"] = NOT_RECORDED;
    }
    else
    {
        isNotApplicableFlag = false;
        v2Array.push({ section: "E08", element: "E08_14", val: _val[0] });
        eScene["eScene.18"] = _val[0];
        eScene["IncidentState"] = _val[0];
    };

    //////////////////////eScene.19
    _val = getValue(businessObject.elements, "eScene.19");
    if (_val == null)
    {
        v2Array.push({ section: "E08", element: "E08_15", val: v2NOT_RECORDED });
        eScene["eScene.19"] = v3NOT_RECORDED;
        eScene["IncidentZip"] = NOT_RECORDED;
    }
    else
    {
        v2Array.push({ section: "E08", element: "E08_15", val: _val[0] });
        eScene["eScene.19"] = _val[0];
        eScene["IncidentZip"] = _val[0];
        isNotApplicableFlag = false;
    };


    //////////////////////eScene.20
    _val = getValue(businessObject.elements, "eScene.20");
    if (_val == null)
    {
        if (isRequiredStateElement("eScene.20") == true)
        {
            eScene["eScene.20"] = v3NOT_RECORDED;
            eScene["SceneCrossStreetorDirections"] = NOT_RECORDED;
        }
        else
        {
            eScene["eScene.20"] = v3NOT_REPORTING;
            eScene["SceneCrossStreetorDirections"] = NOT_REPORTING;
        }
    }
    else
    {
        eScene["eScene.20"] = _val[0];
        eScene["SceneCrossStreetorDirections"] = _val[0];
        isNotApplicableFlag = false;
    };


    //////////////////////eScene.21
    _val = getValue(businessObject.elements, "eScene.21");
    if (_val == null)
    {
        if (isRequiredStateElement("eScene.21") == true)
        {
            v2Array.push({ section: "E08", element: "E08_13", val: v2NOT_RECORDED });
            eScene["eScene.21"] = v3NOT_RECORDED;
            eScene["IncidentCounty"] = NOT_RECORDED;
        }
        else
        {
            v2Array.push({ section: "E08", element: "E08_13", val: v2NOT_KNOWN });
            eScene["eScene.21"] = null;
            eScene["IncidentCounty"] = null;
        }
    }
    else
    {
        v2Array.push({ section: "E08", element: "E08_13", val: _val[0] });
        eScene["eScene.21"] = _val[0];
        eScene["IncidentCounty"] = _val[0];
        isNotApplicableFlag = false;
    };

    //////////////////////eScene.22
    _val = getValue(businessObject.elements, "eScene.22");
    if (_val == null)
    {
        eScene["eScene.22"] = null;
        eScene["IncidentCountry"] = null;
    }
    else
    {
        eScene["IncidentCountry"] = _val[0];
        eScene["eScene.22"] = _val[0];
        isNotApplicableFlag = false;
    }

    //////////////////////eScene.22
    _val = getValue(businessObject.elements, "eScene.23");
    if (_val == null)
    {
        eScene["eScene.23"] = null;
        eScene["IncidentCensusTract"] = null;
    }
    else
    {
        eScene["eScene.23"] = _val[0];
        eScene["IncidentCensusTract"] = _val[0];
        isNotApplicableFlag = false;
    };
    return _retArray;
};


var setNotApplicable = function (elementID)
{

    _retArray.push("<eScene.01" + NIL_V3NOT_APPLICABLE);
    eScene["eScene.01"] = v3NOT_APPLICABLE;


    v2Array.push({ section: "E08", element: "E18_01", val: v2NOT_APPLICABLE });
    v2Array.push({ section: "E08", element: "E18_02", val: v2NOT_APPLICABLE });
    v2Array.push({ section: "E08", element: "E18_03", val: v2NOT_APPLICABLE });
    

    _retArray.push("<eScene.06" + NIL_V3NOT_APPLICABLE);
    eScene["eScene.06"] = v3NOT_APPLICABLE;
    v2Array.push({ section: "E18", element: "E18_05", val: v2NOT_APPLICABLE });
    
    _retArray.push("<eScene.07" + NIL_V3NOT_APPLICABLE);
    eScene["eScene.07"] = v3NOT_APPLICABLE;
    v2Array.push({ section: "E08", element: "E08_06", val: v2NOT_APPLICABLE });


    _retArray.push("<eScene.08" + NIL_V3NOT_APPLICABLE);
    eScene["eScene.08"] = v3NOT_APPLICABLE;

    _retArray.push("<eScene.09" + NIL_V3NOT_APPLICABLE);
    eScene["eScene.09"] = v3NOT_APPLICABLE;
    v2Array.push({ section: "E08", element: "E08_07", val: v2NOT_APPLICABLE });

    _retArray.push("<eScene.10" + NIL_V3NOT_APPLICABLE);
    eScene["eScene.10"] = v3NOT_APPLICABLE;
    v2Array.push({ section: "E08", element: "E08_08", val: v2NOT_APPLICABLE });
    
    _retArray.push("<eScene.11" + NIL_V3NOT_APPLICABLE);
    eScene["eScene.11"] = v3NOT_APPLICABLE;
    v2Array.push({ section: "E08", element: "E08_10", val: v2NOT_APPLICABLE });
   

    _retArray.push("<eScene.12" + NIL_V3NOT_APPLICABLE);
    eScene["eScene.12"] = v3NOT_APPLICABLE;
    
    _retArray.push("<eScene.13" + NIL_V3NOT_APPLICABLE);
    eScene["eScene.13"] = v3NOT_APPLICABLE;

    _retArray.push("<eScene.14" + NIL_V3NOT_APPLICABLE);
    eScene["eScene.14"] = v3NOT_APPLICABLE;

    _retArray.push("<eScene.15" + NIL_V3NOT_APPLICABLE);
    eScene["eScene.15"] = v3NOT_APPLICABLE;
    v2Array.push({ section: "E08", element: "E08_11", val: v2NOT_APPLICABLE });

    _retArray.push("<eScene.16" + NIL_V3NOT_APPLICABLE);
    eScene["eScene.16"] = v3NOT_APPLICABLE;

    _retArray.push("<eScene.17" + NIL_V3NOT_APPLICABLE);
    eScene["eScene.17"] = v3NOT_APPLICABLE;
    v2Array.push({ section: "E08", element: "E08_12", val: v2NOT_APPLICABLE });
    
    _retArray.push("<eScene.18" + NIL_V3NOT_APPLICABLE);
    eScene["eScene.18"] = v3NOT_APPLICABLE;
    v2Array.push({ section: "E08", element: "E08_14", val: v2NOT_APPLICABLE });
    

    _retArray.push("<eScene.19" + NIL_V3NOT_APPLICABLE);
    eScene["eScene.19"] = v3NOT_APPLICABLE;
    v2Array.push({ section: "E08", element: "E08_15", val: v2NOT_APPLICABLE });

    _retArray.push("<eScene.20" + NIL_V3NOT_APPLICABLE);
    eScene["eScene.20"] = v3NOT_APPLICABLE;

    _retArray.push("<eScene.21" + NIL_V3NOT_APPLICABLE);
    eScene["eScene.21"] = v3NOT_APPLICABLE;
    v2Array.push({ section: "E08", element: "E08_13", val: v2NOT_APPLICABLE });
    
};
var isRequiredStateElement = function (elementID) {
    return true;
};
var getValue = function (businessObject, valueObject) {
    //console.log(businessObject.length);
    var _retValue = null;
    var _bFound = false;
    i = 0;
    while (i < businessObject.length) {
        if (_bFound == false) {
            if (businessObject[i].attributes.title == valueObject) {
                _bFound = true;
                if (businessObject[i].attributes.value == undefined) {

                    _retVal = null;
                }
                else {
                    _retVal = businessObject[i].attributes.value;
                }
            }
        }
        i++;
    }
    return _retVal;
}

function setD2(NEMSISElementNumber, valueArray) {
    //    console.log(NEMSISElementNumber);
    var _retArray = [];
    //    console.log(valueArray);
    switch (NEMSISElementNumber) {
        case "eScene.04":

            if (eScene04[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eScene04[valueArray[0]]);
            }
            break;

        case "eScene.06":

            if (eScene06[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eScene06[valueArray[0]]);
            }
            break;

        case "eScene.07":

            if (eScene07[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eScene07[valueArray[0]]);
            }
            break;

        case "eScene.09":
            if (eScene09[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eScene09[valueArray[0]]);
            }
            break;

        default:
            _retArray.push(NEMSISElementNumber = " version 2 not found");
    }

    return _retArray;
};

var eScene04 = {
    "1060": "2704001",
    "1065": "2704003",
    "1070": "2704007",
    "1075": "2704009",
    "1080": "2704015",
    "1085": "2704011",
    "1090": "2704017",
    "1095": "2704019"
};

var eScene09 = {
    "Y92.00":"1135",
    "Y92.01":"1135",
    "Y92.015":"1135",
    "Y92.016":"1135",
    "Y92.02":"1135",
    "Y92.03":"1135",
    "Y92.10":"1135",
    "Y92.7":"1140",
    "Y92.64":"1145",	
    "Y92.61":"1150",
    "Y92.62":"1150",
    "Y92.63":"1150",
    "Y92.65":"1150",
    "Y92.69":"1150",
    "Y92.31":"1155",
    "Y92.32":"1155",
    "Y92.33":"1155",
    "Y92.34":"1155",
    "Y92.39":"1155", 
    "Y92.82":"1155",
    "Y92.830":"1155",
    "Y92.831":"1155",
    "Y92.832":"1155",
    "Y92.833":"1155",
    "Y92.834":"1155",
    "Y92.838":"1155",
    "Y92.41":"1160",
    "Y92.48":"1160",
    "Y92.85":"1160",
    "Y92.12":"1165",
    "Y92.13":"1165",
    "Y92.14":"1165",
    "Y92.16":"1165",
    "Y92.210":"1165",
    "Y92.211":"1165",
    "Y92.212":"1165",
    "Y92.213":"1165",
    "Y92.214":"1165",
    "Y92.215":"1165",
    "Y92.219":"1165", 
    "Y92.22":"1165", 
    "Y92.24":"1165",
    "Y92.51":"1165",
    "Y92.52":"1165",
    "Y92.520":"1165",
    "Y92.24":"1170",
    "Y92.25":"1170",
    "Y92.26":"1170",
    "Y92.29":"1170", 
    "Y92.51":"1170",
    "Y92.12":"1175",
    "Y92.13":"1175",
    "Y92.14":"1175",
    "Y92.23":"1175", 
    "Y92.531":"1175",
    "Y92.532":"1175",
    "Y92.538":"1175",

}
