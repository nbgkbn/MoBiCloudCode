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
var PN_FINDING_NOT_PRESENT_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801005\"/>";

var eResponse = new Object();
var seteResponseGroup = function (businessObject) {
    var isNotApplicableFlag = true;  //once I have real data, set to False    

    //////////////////////eResponse.01
    //<!-- This pattern verifies that the EMS Agency Number in eResponse.01 matches the EMS Agency Number in dAgency.02. -->
    _val = getValue(businessObject.elements, "eResponse.01");
    if (_val == null)
    {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.01", Description: "EMS Agency Number  MANDATORY" })
        eResponse["EMSAgencyNumber"] = null;
        eResponse["eResponse.01"] = null;
    }
    else
    {
        v2Array.push({ section: "E02", element: "E02_01", val: _val[0] });
        eResponse["eResponse.01"] = _val[0];
        eResponse["EMSAgencyNumber"] = _val[0];
        isNotApplicableFlag = false;
    };

    //////////////////////eResponse.02
    _val = getValue(elementList, "eResponse.02");
    if (_val == null)
    {
        if (isRequiredStateElement("eResponse.02"))
        {
            eResponse["eResponse.02"] = V3NOT_RECORDED;
            eResponse["EMSAgencyName"] = NOT_RECORDED;
        }
        else
        {
            eResponse["EMSAgencyName"] = NOT_REPORTING;
            eResponse["eResponse.02"] = v3NOT_REPORTING;
        }
    }
    else
    {
        eResponse["eResponse.02"] = _val[0];
        eResponse["EMSAgencyName"] = _val[0];
        isNotApplicableFlag = false;
    };

    //////////////////////eResponse.03
    _val = getValue(businessObject.elements, "eResponse.03");
    if (_val == null)
    {
        if (isRequiredStateElement("eResponse.02") == true)
        {
            v2Array.push({ section: "E02", element: "E02_02", val: v2NOT_RECORDED });
            eResponse["eResponse.03"] = V3NOT_RECORDED;
            eResponse["IncidentNumber"] = NOT_RECORDED;
        }
    }
    else
    {
        v2Array.push({ section: "E02", element: "E02_02", val: _val[0] });
        eResponse["eResponse.03"] = _val[0];
        eResponse["IncidentNumber"] = _val[0];
        isNotApplicableFlag = false;
    };


    //////////////////////eResponse.04
    _val = getValue(businessObject.elements, "eResponse.04");
    if (_val == null)
    {
        v2Array.push({ section: "E02", element: "E02_03", val: v2NOT_RECORDED });
        eResponse["eResponse.04"] = v3NOT_RECORDED;
        eResponse["ResponseNumber"] = NOT_RECORDED;
    }
    else
    {
        v2Array.push({ section: "E02", element: "E02_03", val: _val[0] });
        eResponse["eResponse.04"] = _val[0];
        eResponse["eResponse.04"] = _val[0];
        isNotApplicableFlag = false;
    };

    //////////////////////eResponse.05

    _val = getValue(businessObject.elements, "eResponse.05");
    if (_val == null)
    {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.05", Description: "Type of Service Request  MANDATORY" })

        eResponse["eResponse.05"] = null;
        eResponse["TypeofServiceRequested"] = null;
        v2Array.push({ section: "E02", element: "E02_04", val: null });
    }
    else
    {
        v2Array.push({ section: "E02", element: "E02_04", val: setV2("eResponse.05", _val) });
        eResponse["eResponse.05"] = _val[0];
        eResponse["TypeofServiceRequested"] = setCodeText("eResponse.05", _val[0]);
        isNotApplicableFlag = false;
    };

    //////////////////////eResponse.06
    _val = getValue(businessObject.elements, "eResponse.06");
    if (_val == null)
    {
        eResponse["eResponse.06"] = null;
        eResponse["StandbyPurpose"] = null;
    }
    else
    {
        isNotApplicableFlag = false;
        eResponse["eResponse.06"] = _val[0];
        eResponse["StandbyPurpose"] = setCodeText("eResponse.06", _val[0]);
    };


    //////////////////////eResponse.07
    _val = getValue(businessObject.elements, "eResponse.07");
    if (_val == null)
    {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.07", Description: "Primary Role of the Unit MANDATORY" })
        v2Array.push({ section: "E02", element: "E02_05", val: SetV2("eResponse.07", null) });
        eResponse["eResponse.07"] = null;
        eResponse["PrimaryRoleoftheUnit"] = null;
    }
    else
    {
        isNotApplicableFlag = false;
        eResponse["PrimaryRoleoftheUnit"] = setCodeText("eResponse.07", _val[0]);
        eResponse["eResponse.07"] = _val[0];
    };

    alert("A dispatch delay is any time delay that occurs from the time of PSAP call (eTimes.01) to the time the unit is notified by dispatch (eTimes.03).")
    //////////////////////eResponse.08
    //When a delay for a particular phase of a response is "None/No Delay", no other 
    //delays should be recorded for that phase.
    //eResponse.08[. = '2208013'

    _val = getValue(businessObject.elements, "eResponse.08");
    if (_val == null)
    {
        v2Array.push({ section: "E02", element: "E02_05", val: v2NOT_RECORDED });
        eResponse["eResponse.08"] = v3NOT_RECORDED;
        eResponse["TypeofDispatchDelay"] = NOT_RECORDED;
    }
    else
    {
        var arr1 = [];
        var arr2 = [];
        var arr3 = [];
        for (var i = 0; i < _val.length; i++) {
            arr1.push(_val[i]);
            arr2.push(setD2("eResponse.08", _val[i]));
            arr3.push(setCodeText("eResponse.08", _val[i]));
        };
        isNotApplicableFlag = false;
        eResponse["TypeofDispatchDelay"] =arr3.slice(0);
        v2Array.push({ section: "E02", element: "E02_05", val: arr2.slice(0) });
        eResponse["eResponse.08"] = arr1.slice(0);

        //////////////////////eResponse.09
        //context="nem:eResponse.09[. = '2209011']">
        //This rule fires when there is an instance of eResponse.09 Type of Response Delay 
        //set to "None/No Delay".

    alert("A response delay is any time delay that occurs from the time the unit is notified by dispatch (eTimes.03) to the time the unit arrived on scene (eTimes.06).")
    _val = getValue(businessObject.elements, "eResponse.09");
    if (_val == null)
    {
        v2Array.push({ section: "E02", element: "E02_07", val: v2NOT_RECORDED });
        eResponse["eResponse.09"] = v3NOT_RECORDED;
        eResponse["TypeofResponseDelay"] = NOT_RECORDED;
    }
    else
    {
        var arr1 = [];
        var arr2 = [];
        var arr3 = [];
        for (var i = 0; i < _val.length; i++) {
            arr1.push(_val[i]);
            arr2.push(setD2("eResponse.09", _val[i]));
            arr3.push(setCodeText("eResponse.09", _val[i]));
        };
        v2Array.push({ section: "E02", element: "E02_07", val:  arr1.slice(0) });
        eResponse["eResponse.09"] = arr1.slice(0);
        eResponse["TypeofResponseDelay"]  =arr3.slice(0);
        isNotApplicableFlag = false;
    };


    alert("A scene delay is any time delay that occurs from the time the unit arrived on scene (eTimes.06) to the time the unit left the scene (eTimes.09).")
    //////////////////////eResponse.10
    //eResponse.10" context="nem:eResponse.10[. = '2210017']">
    //This rule fires when there is an instance of eResponse.10 Type of Scene Delay set to 
    //"None/No Delay". -->

    _val = getValue(businessObject.elements, "eResponse.10");
    if (_val == null)
    {
        v2Array.push({ section: "E02", element: "E02_08", val: v2NOT_RECORDED });
        eResponse["eResponse.10"] = v3NOT_RECORDED;
        eResponse["TypeofSceneDelay"] = NOT_RECORDED;
    }
    else
    {
        var arr1 = [];
        var arr2 = [];
        var arr3 = [];
        for (var i = 0; i < _val.length; i++) {
            arr1.push(_val[i]);
            arr2.push(setD2("eResponse.10", _val[i]));
            arr3.push(setCodeText("eResponse.10", _val[i]));
        };
        v2Array.push({ section: "E02", element: "E02_08", val:  arr1.slice(0) });
        eResponse["eResponse.10"] = arr1.slice(0);
        eResponse["TypeofSceneDelay"]  =arr3.slice(0);       
        isNotApplicableFlag = false;
    };

    //////////////////////eResponse.11
    //nem:eResponse.11[. = '2211011']">
    //This rule fires when there is an instance of eResponse.11 Type of Transport Delay set to 
    //"None/No Delay".

    alert("A transport delay is any time delay that occurs from the time the unit left the scene (eTimes.09) to the time the patient arrived at the destination (eTimes.10).")
    _val = getValue(businessObject.elements, "eResponse.11");
    if (_val == null)
    {
        v2Array.push({ section: "E02", element: "E02_09", val: v2NOT_RECORDED });
        eResponse["eResponse.11"] = v2NOT_RECORDED;
        eResponse["TypeofTransportDelay"] = NOT_RECORDED;
    }
    else
    {        
        var arr1 = [];
        var arr2 = [];
        var arr3 = [];
        for (var i = 0; i < _val.length; i++) {
            arr1.push(_val[i]);
            arr2.push(setD2("eResponse.11", _val[i]));
            arr3.push(setCodeText("eResponse.11", _val[i]));
        };
        isNotApplicableFlag = false;
        v2Array.push({ section: "E02", element: "E02_09", val:  arr1.slice(0) });
        eResponse["eResponse.11"] = arr1.slice(0);
        eResponse["TypeofTransportDelay"]  =arr3.slice(0);       
    };

    //////////////////////eResponse.12
    
        //nem:eResponse.12[. = '2212015']">
    //This rule fires when there is an instance of eResponse.12 Type of Turn-Around Delay set to "None/No Delay". -->
    alert("If a patient is being transported by the unit, turn-around delay is any time delay that occurs from the time the patient arrived at the destination (eTimes.10) until the time the unit is back in service (eTimes.13) or unit back at the home location (eTimes15) [whichever is the greater of the two times]");
    //If no patient is being transported by the unit, turn-around delay is any time delay that occurs from the time the unit arrived on scene (eTimes.06) until the unit is back in service (eTimes.13) or the unit back at the home location (eTimes.15) [whichever is the greater of the two times].")
    
    alert("A transport delay is any time delay that occurs from the time the unit left the scene (eTimes.09) to the time the patient arrived at the destination (eTimes.10).")
    _val = getValue(businessObject.elements, "eResponse.12");
    if (_val == null) {
        v2Array.push({ section: "E02", element: "E02_10", val: v2NOT_RECORDED });
        eResponse["eResponse.12"] = v2NOT_RECORDED;
        eResponse["TypeofTurnAroundDelay"] = NOT_RECORDED;
    }
    else {
        var arr1 = [];
        var arr2 = [];
        var arr3 = [];
        for (var i = 0; i < _val.length; i++) {
            arr1.push(_val[i]);
            arr2.push(setD2("eResponse.12", _val[i]));
            arr3.push(setCodeText("eResponse.12", _val[i]));
        };
        isNotApplicableFlag = false;
        v2Array.push({ section: "E02", element: "E02_10", val:  arr1.slice(0) });
        eResponse["eResponse.12"] = arr1.slice(0);
        eResponse["TypeofTurnAroundDelay"]  =arr3.slice(0);       
    };


    //////////////////////eResponse.13
    _val = getValue(businessObject.elements, "eResponse.13");
    if (_val == null)
    {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.13", Description: "EMS Unit number MANDATORY" })
        v2Array.push({ section: "E02", element: "E02_11", val: null });
        eResponse["eResponse.13"] = null;
        eResponse["EMSVehicleUnitNumber"] = null;
    }
    else
    {
        isNotApplicableFlag = false;
        v2Array.push({ section: "E02", element: "E02_11", val: _val[0] });
        eResponse["EMSVehicleUnitNumber"] = _val[0];
        eResponse["eResponse.13"] = _val[0];
    }

    //////////////////////eResponse.14
    _val = getValue(businessObject.elements, "eResponse.14");
    if (_val == null) {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.14", Description: "EMS Unit Call Sign MANDATORY" })
        eResponse["eResponse.14"] = null;
        eResponse["EMSUnitCallSign"] = null;
    }
    else
    {
        isNotApplicableFlag = false;
        v2Array.push({ section: "E02", element: "E02_12", val: _val[0] });
        eResponse["eResponse.14"] = _val[0];
        eResponse["EMSUnitCallSign"] = _val[0];
    };


    //////////////////////eResponse.15
    _val = getValue(businessObject.elements, "eResponse.15");
    if (_val == null)
    {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.15", Description: "Unit Level of Care MANDATORY" })
        eResponse["eResponse.15"] = null;
        eResponse["LevelofCareofThisUnit"] = null;
    }
    else {
        isNotApplicableFlag = false;
        eResponse["LevelofCareofThisUnit"] = setCodeText("eResponse.15", _val[0]);;
        eResponse["eResponse.15"] = _val[0];
    };


    //////////////////////eResponse.16
    _val = getValue(businessObject.elements, "eResponse.16");
    if (_val == null)
    {
        v2Array.push({ section: "E02", element: "E02_13", val: v2NOT_KNOWN });
        eResponse["eResponse.16"] = null;
        eResponse["VehicleDispatchLocation"] = null;
    }
    else
    {
        isNotApplicableFlag = false;
        v2Array.push({ section: "E02", element: "E02_13", val: _val[0] });
        eResponse["VehicleDispatchLocation"] = _val[0];
        eResponse["eResponse.16"] = _val[0];
    };


    //////////////////////eResponse.17
    _val = getValue(businessObject.elements, "eResponse.17");
    if (_val == null)
    {
        v2Array.push({ section: "E02", element: "E02_15", val: v2NOT_KNOWN });
        eResponse["eResponse.17"] = null;
        eResponse["VehicleDispatchGPSLocation"] = null;
    }
    else
    {        
        isNotApplicableFlag = false;
        eResponse["VehicleDispatchGPSLocation"] = _val[0];
        eResponse["eResponse.17"] = _val[0];
    };

    //////////////////////eResponse.18
    _val = getValue(businessObject.elements, "eResponse.18");
    if (_val == null)
    {
        eResponse["eResponse.18"] = null;
        eResponse["VehicleDispatchUSNationalGridLocation"] = null;
    }
    else
    {
        isNotApplicableFlag = false;
        eResponse["VehicleDispatchUSNationalGridLocation"] = _val[0];
        eResponse["eResponse.18"] = _val[0];
    };

    //////////////////////eResponse.19
    _val = getValue(businessObject.elements, "eResponse.19");
    if (_val == null)
    {
        if (isRequiredStateElement("eResponse.19") == true) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.19", Description: "Beginning Odometer MANDATORY" })
            v2Array.push({ section: "E02", element: "E02_17", val: null });
            eResponse["eResponse.19"] = null;
            eResponse["BeginningOdometerReadingofRespondingVehicle"] = null;
        }
        else {

            v2Array.push({ section: "E02", element: "E02_16", val: null });
            eResponse["eResponse.19"] = null;
            eResponse["BeginningOdometerReadingofRespondingVehicle"] = null;
        }
    }
    else
    {
        isNotApplicableFlag = false;
        eResponse["BeginningOdometerReadingofRespondingVehicle"] = _val[0];        
        v2Array.push({ section: "E02", element: "E02_16", val: _val[0] });
        eResponse["eResponse.19"] = _val[0];
    };


    //////////////////////eResponse.20
    _val = getValue(businessObject.elements, "eResponse.20");
    if (_val == null)
    {
        if (isRequiredStateElement("eResponse.20") == true) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.20", Description: "On-scene Odometer MANDATORY" })
            v2Array.push({ section: "E02", element: "E02_17", val: null });
            eResponse["eResponse.20"] = null;
            eResponse["OnSceneOdometerReadingofRespondingVehicle"] = null;
        }
        else
        {
            v2Array.push({ section: "E02", element: "E02_17", val: null });
            eResponse["OnSceneOdometerReadingofRespondingVehicle"] = null;
            eResponse["eResponse.20"] = null;
        }
    }
    else {
        isNotApplicableFlag = false;
        v2Array.push({ section: "E02", element: "E02_16", val: _val[0] });
        eResponse["eResponse.20"] = _val[0];
        eResponse["OnSceneOdometerReadingofRespondingVehicle"] = _val[0];
    };


    //////////////////////eResponse.21
    _val = getValue(businessObject.elements, "eResponse.21");
    if (_val == null) {
        if (isRequiredStateElement("eResponse.21") == true) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.21", Description: "On-scene Odometer MANDATORY" })
            eResponse["eResponse.21"] = null;
            eResponse["PatientDestinationOdometerReadingofRespondingVehicle"] = null;
            v2Array.push({ section: "E02", element: "E02_18", val: null });
        }
        else {
            eResponse["PatientDestinationOdometerReadingofRespondingVehicle"] = null;
            v2Array.push({ section: "E02", element: "E02_18", val: null });           
            eResponse["eResponse.21"] = null;
        }
    }
    else {
        isNotApplicableFlag = false;
        v2Array.push({ section: "E02", element: "E02_18", val: _val[0] });
        eResponse["eResponse.21"] = _val[0];
        eResponse["PatientDestinationOdometerReadingofRespondingVehicle"] = _val[0];
    };

    //////////////////////eResponse.22
    _val = getValue(businessObject.elements, "eResponse.22");
    if (_val == null) {
        if (isRequiredStateElement("eResponse.22") == true) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.22", Description: "Ending Odometer MANDATORY" })
            v2Array.push({ section: "E02", element: "E02_19", val: null });
            eResponse["eResponse.22"] = null;
            eResponse["EndingOdometerReadingofRespondingVehicle"] = null;
        }
        else {
            v2Array.push({ section: "E02", element: "E02_19", val: null });
            eResponse["eResponse.22"] = null;
            eResponse["EndingOdometerReadingofRespondingVehicle"] = null;
        }
    }
    else {
        isNotApplicableFlag = false;
        v2Array.push({ section: "E02", element: "E02_19", val: _val[0] });
        eResponse["eResponse.22"] = _val[0];
        eResponse["EndingOdometerReadingofRespondingVehicle"] = _val[0];
    };


    //////////////////////eResponse.23
    _val = getValue(businessObject.elements, "eResponse.22");
    if (_val == null)
    {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.23", Description: "Response Mode to Scene MANDATORY" })
        eResponse["eResponse.23"] = null;
        eResponse["ResponseModetoScene"] = null;
    }
    else
    {
        isNotApplicableFlag = false;
        v2Array.push({ section: "E02", element: "E02_20", val: setV2("eResponse.23", _val[0]) });
        eResponse["ResponseModetoScene"] = setCodeText("eResponse.23", _val[0]);
        eResponse["eResponse.23"] = _val[0];
    };


    //////////////////////eResponse.24
    _val = getValue(businessObject.elements, "eResponse.24");
    if (_val == null) {
        if (isRequiredStateElement("eResponse.24") == true)
        {
            eResponse["eResponse.24"] = V3NOT_RECORDED;
            eResponse["AdditionalResponseModeDescriptors"] = NOT_RECORDED;
        }
    }
    else 
    {
        var arr1 = [];
        var arr2 = [];
        var arr3 = [];
        for (var i = 0; i < _val.length; i++) {
            arr1.push(_val[i]);            
            arr3.push(setCodeText("eResponse.24", _val[i]));
        };
        eResponse["eResponse.12"] = arr1.slice(0);
        eResponse["AdditionalResponseModeDescriptors"]  =arr3.slice(0);      
        isNotApplicableFlag = false;
    };


};

var isRequiredStateElement = function (elementID) {
    return true;
};
var getValue = function (businessObject, valueObject) {
    //console.log(businessObject.length);
    var _retValue = null;
    var _bFound = false;
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
        case "eResponse.05":

            if (eResponse05[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eResponse05[valueArray[0]]);
            }
            break;

        case "eResponse.07":
            if (eResponse07[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eResponse07[valueArray[0]]);
            }
            break;
        case "eResponse.08":
            if (eResponse08[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eResponse08[valueArray[0]]);
            }
            break;

        case "eResponse.09":
            if (eResponse09[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eResponse09[valueArray[0]]);
            }
            break;
        case "eResponse.10":
            if (eResponse10[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eResponse10[valueArray[0]]);
            }
            break;
        case "eResponse.11":
            if (eResponse11[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eResponse11[valueArray[0]]);
            }
            break;
        case "eResponse.12":
            if (eResponse12[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eResponse12[valueArray[0]]);
            }
            break;

        case "eResponse.23":
            if (eResponse23[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eResponse23[valueArray[0]]);
            }
            break;

        default:
            _retArray.push(NEMSISElementNumber = " version 2 not found");
    }

    return _retArray;
};
var eResponse05 = {
    "2205001": "30",
    "2205003": "35",
    "2205005": "40",
    "2205007": "45",
    "2205009": "50",
    "2205013": "55"

};

var eResponse07 = {
    "2207007": "60",
    "2207009": "65",
    "2207005": "70",
    "2207003": "75"
};

var eResponse08 = {
    "2208001": "80",
    "2208005": "85",
    "2208007": "90",
    "2208009": "95",
    "2208011": "100",
    "2208013": "105",
    "2208015": "110",
    "2208009": "115",
    "2208017": "120"
};
var eResponse09 = {
    "2209001": "125",
    "2209003": "130",
    "2209005": "135",
    "2209007": "140",
    "2209009": "145",
    "2209011": "150",
    "2209013": "155",
    "2209019": "160",
    "2209021": "165",
    "2209023": "170",
    "2209025": "175",
    "2209027": "180",
    "2209029": "185"
};

var eResponse10 = {

    "2210005": "190",
    "2210007": "195",
    "2210009": "200",
    "2210019": "205",
    "2210011": "210",
    "2210013": "215",
    "2210015": "220",
    "2210017": "225",
    "2210019": "230",
    "2210025": "235",
    "2210027": "240",
    "2210029": "245",
    "2210033": "250",
    "2210035": "255",
    "2210037": "260"
}
var eResponse11 = {
    "2211001": "265",
    "2211003": "270",
    "2211005": "275",
    "2211007": "280",
    "2211009": "285",
    "2211011": "290",
    "2211013": "295",
    "2211019": "300",
    "2211021": "305",
    "2211023": "310",
    "2211025": "315",
    "2211027": "320",
    "2211029": "325"
};
var eResponse12 = {
"2212001":	"330",
"2212003":	"335",
"2212007":	"340",
"2212009":	"345",
"2212011":	"350",
"2212011":	"355",
"2212015":	"360",
"2212017":	"365",
"2212023":	"370",
"2212029":	"375"
}
var eResponse23 = {
    "2223007": "385",
    "2223001": "390",
    "2223005": "395"
};

    /*
     
When a delay for a particular phase of a response is "None/No Delay", no other delays should be recorded for that phase.</sch:title>
"None/No Delay" should be the only value recorded for the delay. 
nem:eResponse.08[. = '2208013']"
This rule fires when there is an instance of eResponse.08 Type of Dispatch Delay set to "None/No Delay". 
nem:eResponse.09[. = '2209011']"
This rule fires when there is an instance of eResponse.09 Type of Response Delay set to "None/No Delay". 
nem:eResponse.10[. = '2210017']"
This rule fires when there is an instance of eResponse.10 Type of Scene Delay set to "None/No Delay".
nem:eResponse.11[. = '2211011']">
This rule fires when there is an instance of eResponse.11 Type of Transport Delay set to "None/No Delay". 
nem:eResponse.12[. = '2212015']"

This rule fires when there is an instance of eResponse.12 Type of Turn-Around Delay set to "None/No Delay". -

     */
