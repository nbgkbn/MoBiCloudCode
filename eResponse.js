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


var seteResponseGroup = function (businessObject) {
    if (typeof businessObject == undefined) {
        SetNotApplicable();
        return _retArray;
    }
    var _retArray = [];
    var OLAPArray = [];

    _retArray.push("<eResponse>" + '\n');
    OLAPArray.push("<eResponse>" + '\n');

    _retArray.push('\t' + "<eResponse.AgencyGroup>+ '\n'");
    OLAPArray.push('\t' + "<eResponse.AgencyGroup>+ '\n'");

    //////////////////////eResponse.01
    _val = getValue(businessObject.elements, "eResponse.01");
    if (_val == null) {
        ErrorList.push("eResponse.01 Mandatory");
    }
    else
    {
        OLAPArray.push('\t\t' + "<EMSAgencyNumber>" + _val + "</EMSAgencyNumber>" + '\n');
        _retArray.push('\t\t' + "<eResponse.01>" + _val + "</eResponse.01>" + '\n')
        v2Array.push({ section: "E02", element: "E02_01", val: _val });
        AgencyGroup["eResponse.01"] = _val;
    };

    //////////////////////eResponse.02
    _val = getValue(elementList, "eResponse.02");
    if (_val == null)
    {
        if (isRequiredStateElement("eResponse.02"))
        {
            OLAPArray.push('\t\t' + "<EMSAgencyName>" + "NOT RECORDED" + "</EMSAgencyNumber>" + '\n');
            _retArray.push('\t\t' + "<eResponse.02" + NIL_V3NOT_RECORDED + '\n');
            AgencyGroup["eResponse.02"] = V3NOT_RECORDED;
        }
        else
        {
            OLAPArray.push('\t\t' + "<EMSAgencyName>" + "NOT REPORTING" + "</EMSAgencyNumber>" + '\n');
            _retArray.push('\t\t' + "<eResponse.02" + NIL_V3NOT_REPORTING + '\n');
            AgencyGroup["eResponse.02"] = v3NOT_REPORTING;
        }
    }
    else
    {
        OLAPArray.push('\t\t' + "<EMSAgencyName>" + _val + "</EMSAgencyNumber>" + '\n');
        AgencyGroup["eResponse.02"] = _val;
        _retArray.push('\t\t' + "<eResponse.02>" + _val + "</eResponse.02>" + '\n');
    };

    //////////////////////eResponse.02
    _val = getValue(businessObject.elements, "eResponse.03");
    if (_val == null)
    {
        if (isRequiredStateElement("eResponse.02") == true)
        {
            OLAPArray.push('\t\t' + "<IncidentNumber>" + "NOT RECORDED" + "</IncidentNumber>" + '\n');
            _retArray.push('\t\t' + "<eResponse.02" + NIL_V3NOT_RECORDED + '\n');
            v2Array.push({ section: "E02", element: "E02_01", val: v2NOT_RECORDED });
            AgencyGroup["eResponse.02"] = V3NOT_RECORDED;
        }
    }
    else
    {
        OLAPArray.push('\t\t' + "<IncidentNumber>" + "NOT RECORDED" + "</IncidentNumber>" + '\n');
        _retArray.push('\t\t' + "<eResponse.02>" + _val + "</eResponse.02>" + '\n');
        v2Array.push({ section: "E02", element: "E02_02", val: _val });
        AgencyGroup["eResponse.02"] = _val;
    };

    _retArray.push('\t' + "</eResponse.AgencyGroup>" + '\n');
    OLAPArray.push('\t' + "</eResponse.AgencyGroup>" + '\n');


    //////////////////////eResponse.03
    _val = getValue(businessObject.elements, "eResponse.03");
    if (_val == null)
    {
        OLAPArray.push('\t' + "<IncidentNumber>" + "NOT RECORDED" + "</IncidentNumber>" + '\n');
        _retArray.push('\t' + "<eResponse.03" + NIL_V3NOT_RECORDED + '\n');
        v2Array.push({ section: "E02", element: "E02_02", val: v2NOT_RECORDED });
        eResponse["eResponse.03"] = _val;
    }
    else
    {
        OLAPArray.push('\t' + "<IncidentNumber>" + "NOT RECORDED" + "</IncidentNumber>" + '\n');
        _retArray.push('\t' + "<eResponse.03>" + _val + "</eResponse.03>" + '\n');
        v2Array.push({ section: "E02", element: "E02_02", val: _val });
        eResponse["eResponse.03"] = _val;
    };


    //////////////////////eResponse.04
    _val = getValue(businessObject.elements, "eResponse.04");
    if (_val == null)
    {
        OLAPArray.push('\t' + "<EMSResponseNumber>" + "NOT RECORDED" + "</EMSResponseNumber>" + '\n');
        _retArray.push('\t' + "<eResponse.04" + NIL_V3NOT_RECORDED+ '\n');
        v2Array.push({ section: "E02", element: "E02_03", val: v2NOT_RECORDED });
        eResponse["eResponse.04"] = null;
    }
    else
    {
        OLAPArray.push('\t' + "<EMSResponseNumber>" + _val + "</EMSResponseNumber>" + '\n');
        _retArray.push('\t' + "<eResponse.04>" + _val + "</eResponse.04>" + '\n');
        v2Array.push({ section: "E02", element: "E02_03", val: _val });
        eResponse["eResponse.04"] = _val;
    };

    //////////////////////eResponse.05
    _retArray.push('\t' + "<eResponse.ServiceGroup>" + '\n');
    OLAPArray.push('\t' + "<eResponse.ServiceGroup>" + '\n');

    _val = getValue(businessObject.elements, "eResponse.05");
    if (_val == null)
    {
        ErrorList.push("eResponse.01 Mandatory");
    }
    else
    {
        OLAPArray.push('\t\t' + "<TypeofServiceRequested>" + setCodeText("eResponse.05", _val) + "</TypeofServiceRequested>" + '\n');
        _retArray.push('\t\t' + "<eResponse.05>" + _val + "</eResponse.05>" + '\n')
        v2Array.push({ section: "E02", element: "E02_04", val: setV2("eResponse.05", _val) });
        eResponse["eResponse.05"] = _val;
    };

    //////////////////////eResponse.06
    _val = getValue(businessObject.elements, "eResponse.06");
    if (_val == null)
    {
        OLAPArray.push('\t' + "<StandbyPurpose>" + "NOT RECORDED" + "</StandbyPurpose>" + '\n');
        _retArray.push('\t' + "<eResponse.06" + NIL_V3NOT_RECORDED + '\n');
        eResponse["eResponse.06"] = null;
    }
    else
    {
        OLAPArray.push('\t\t' + "<StandbyPurpose>" + setCodeText("eResponse.06", _val) + "</StandbyPurpose>" + '\n');
        _retArray.push('\t\t' + "<eResponse.06>" + _val + "</eResponse.06>" + '\n')
        eResponse["eResponse.06"] = _val;
    };


    OLAPArray.push('\t' + "</eResponse.ServiceGroup>" + '\n');
    _retArray.push('\t' + "</eResponse.ServiceGroup>")+ '\n';


    //////////////////////eResponse.07
    _val = getValue(businessObject.elements, "eResponse.07");
    if (_val == null)
    {
        ErrorList.push("eResponse.07 Mandatoruy");
    }
    else
    {
        OLAPArray.push('\t' + "<PrimaryRoleoftheUnit>" + setCodeText("eResponse.07", _val) + "</PrimaryRoleoftheUnit>" + '\n');
        _retArray.push('\t' + "<eResponse.07>" + _val + "</eResponse.07>" + '\n')
        v2Array.push({ section: "E02", element: "E02_05", val: SetV2("eResponse.07", _val) });
        eResponse["eResponse.07"] = _val;
    };

    alert("A dispatch delay is any time delay that occurs from the time of PSAP call (eTimes.01) to the time the unit is notified by dispatch (eTimes.03).")
    //////////////////////eResponse.08
    _val = getValue(businessObject.elements, "eResponse.08");
    if (_val == null)
    {
        OLAPArray.push('\t' + "<TypeofDispatchDelay>" + "NOT RECORDED" + "</TypeofDispatchDelay>" + '\n');
        v2Array.push({ section: "E02", element: "E02_05", val: v2NOT_RECORDED });
        _retArray.push('\t' + "<eResponse.08" + NIL_V3NOT_RECORDED + '\n');
        eResponse["eResponse.08"] = v3NOT_RECORDED;
    }
    else
    {
        OLAPArray.push('\t' + "<TypeofDispatchDelay>" + setCodeText("eResponse.08", _val) + "</TypeofDispatchDelay>" + '\n');
        _retArray.push('\t' + "<eResponse.08>" + _val + "</eResponse.08>" + '\n');
        v2Array.push({ section: "E02", element: "E02_05", val: SetD2("eResponse.08", _val) });
        eResponse["eResponse.08"] = _val;
    };

    //////////////////////eResponse.09
    alert("A response delay is any time delay that occurs from the time the unit is notified by dispatch (eTimes.03) to the time the unit arrived on scene (eTimes.06).")
    _val = getValue(businessObject.elements, "eResponse.09");
    if (_val == null)
    {
        OLAPArray.push('\t' + "<TypeofResponseDelay>" + "NOT RECORDED" + "</TypeofResponseDelay>" + '\n');
        v2Array.push({ section: "E02", element: "E02_07", val: v2NOT_RECORDED });
        _retArray.push('\t' + "<eResponse.09" + NIL_V3NOT_RECORDED + '\n');
        eResponse["eResponse.09"] = v3NOT_RECORDED;
    }
    else
    {
        OLAPArray.push('\t' + "<TypeofResponseDelay>" + setCodeText("eResponse.09", _val) + "</TypeofResponseDelay>" + '\n');
        _retArray.push('\t' + "<eResponse.09>" + _val + "</eResponse.09>" + '\n');
        v2Array.push({ section: "E02", element: "E02_07", val: SetD2("eResponse.09", _val) });
        eResponse["eResponse.09"] = _val;
    };


    alert("A scene delay is any time delay that occurs from the time the unit arrived on scene (eTimes.06) to the time the unit left the scene (eTimes.09).")
    //////////////////////eResponse.10
    _val = getValue(businessObject.elements, "eResponse.10");
    if (_val == null)
    {
        OLAPArray.push('\t' + "<TypeofSceneDelay>" + "NOT RECORDED" + "</TypeofSceneDelay>" + '\n');
        _retArray.push('\t' + "<eResponse.10" + NIL_V3NOT_RECORDED + '\n');
        v2Array.push({ section: "E02", element: "E02_08", val: v2NOT_RECORDED });
        eResponse["eResponse.10"] = v3NOT_RECORDED;
    }
    else
    {
        OLAPArray.push('\t' + "<TypeofSceneDelay>" + setCodeText("eResponse.09", _val) + "</TypeofSceneDelay>" + '\n');
        _retArray.push('\t' + "<eResponse.10>" + _val + "</eResponse.10>" + '\n')
        v2Array.push({ section: "E02", element: "E02_08", val: SetD2("eResponse.10", _val) });
        eResponse["eResponse.10"] = _val;
    };

    //////////////////////eResponse.11
    alert("A transport delay is any time delay that occurs from the time the unit left the scene (eTimes.09) to the time the patient arrived at the destination (eTimes.10).")
    _val = getValue(businessObject.elements, "eResponse.11");
    if (_val == null)
    {
        OLAPArray.push('\t' + "<TypeofSceneDelay>" + "NOT RECORDED" + "</TypeofSceneDelay>" + '\n');
        v2Array.push({ section: "E02", element: "E02_09", val: v2NOT_RECORDED });
        _retArray.push('\t' + "<eResponse.11" + NIL_V3NOT_RECORDED + '\n');
        eResponse["eResponse.11"] = v2NOT_RECORDED;
    }
    else
    {
        OLAPArray.push('\t' + "<TypeofSceneDelay>" + setCodeText("eResponse.11", _val) + "</TypeofSceneDelay>" + '\n');
        _retArray.push('\t' + "<eResponse.11>" + _val + "</eResponse.11>" + '\n')
        eResponse["eResponse.11"] = _val;
        v2Array.push({ section: "E02", element: "E02_09", val: SetD2("eResponse.11", _val) });
    };

    //////////////////////eResponse.12
    alert("If a patient is being transported by the unit, turn-around delay is any time delay that occurs from the time the patient arrived at the destination (eTimes.10) until the time the unit is back in service (eTimes.13) or unit back at the home location (eTimes15) [whichever is the greater of the two times]");
    //If no patient is being transported by the unit, turn-around delay is any time delay that occurs from the time the unit arrived on scene (eTimes.06) until the unit is back in service (eTimes.13) or the unit back at the home location (eTimes.15) [whichever is the greater of the two times].")
    
    //////////////////////eResponse.12
    _val = getValue(businessObject.elements, "eResponse.12");
    if (_val == null) 
    {
        OLAPArray.push('\t' + "<TypeofTurnAroundDelay>" + "NOT RECORDED" + "</TypeofTurnAroundDelay>" + '\n');
        v2Array.push({ section: "E02", element: "E02_10", val: v2NOT_RECORDED });
        _retArray.push('\t' + "<eResponse.12" + NIL_V3NOT_RECORDED + '\n');
        eResponse["eResponse.12"] = v2NOT_RECORDED;
    }
    else
    {
        OLAPArray.push('\t' + "<TypeofTurnAroundDelay>" + setCodeText("eResponse.12", _val) + "</TypeofTurnAroundDelay>" + '\n');
        _retArray.push('\t' + "<eResponse.12>" + _val + "</eResponse.12>" + '\n')
        v2Array.push({ section: "E02", element: "E02_10", val: SetD2("eResponse.12", _val) });
        eResponse["eResponse.12"] = _val;
    };


    //////////////////////eResponse.13
    _val = getValue(businessObject.elements, "eResponse.13");
    if (_val == null)
    {
        ErrorList.push("eResponse.13 Mandatory");
        v2Array.push({ section: "E02", element: "E02_11", val: null });
        eResponse["eResponse.13"] = null;
    }
    else
    {
        OLAPArray.push('\t' + "<EMSVehicleUnitNumber>" + _val + "</EMSVehicleUnitNumber>" + '\n');
        _retArray.push('\t' + "<eResponse.13>" + _val + "</eResponse.13>" + '\n');
        v2Array.push({ section: "E02", element: "E02_11", val: _val });
        eResponse["eResponse.13"] = _val;
    }

    //////////////////////eResponse.14
    _val = getValue(businessObject.elements, "eResponse.14");
    if (_val == null) {
        ErrorList.push("eResponse.14 Mandatory");

    }
    else
    {
        OLAPArray.push('\t' + "<EMSUnitCallSign>" + _val + "</EMSUnitCallSign>" + '\n');
        _retArray.push('\t' + "<eResponse.14>" + _val + "</eResponse.14>" + '\n');
        v2Array.push({ section: "E02", element: "E02_12", val: _val });
        eResponse["eResponse.14"] = _val;
    };


    //////////////////////eResponse.15
    _val = getValue(businessObject.elements, "eResponse.15");
    if (_val == null)
    {
        ErrorList.push("eResponse.15 Mandatory");
    }
    else {
        OLAPArray.push('\t' + "<LevelofCareofThisUnit>" + _val + "</LevelofCareofThisUnit>" + '\n');
        _retArray.push('\t' + "<eResponse.15>" + _val + "</eResponse.15>" + '\n');
        eResponse["eResponse.15"] = _val;
    };


    //////////////////////eResponse.16
    _val = getValue(businessObject.elements, "eResponse.16");
    if (_val == null)
    {
        OLAPArray.push('\t' + "<VehicleDispatchLocation>" + null + "</VehicleDispatchLocation>" + '\n');
        v2Array.push({ section: "E02", element: "E02_13", val: v2NOT_KNOWN });
        _retArray.push('\t' + "<eResponse.16>" + null + "</eResponse.16>" + '\n');
        eResponse["eResponse.16"] = null;
    }
    else
    {
        OLAPArray.push('\t' + "<VehicleDispatchLocation>" + _val + "</VehicleDispatchLocation>" + '\n');
        v2Array.push({ section: "E02", element: "E02_13", val: _val });
        _retArray.push('\t' + "<eResponse.16>" + _val + "</eResponse.16>" + '\n');
        eResponse["eResponse.16"] = _val;
    };


    //////////////////////eResponse.17
    _val = getValue(businessObject.elements, "eResponse.17");
    if (_val == null)
    {
        OLAPArray.push('\t' + "<VehicleDispatchGPSLocation>" + null + "</VehicleDispatchGPSLocation>" + '\n');
        v2Array.push({ section: "E02", element: "E02_15", val: v2NOT_KNOWN });
        _retArray.push('\t' + "<eResponse.17>" + null + "</eResponse.17>" + '\n');
        eResponse["eResponse.17"] = null;
    }
    else
    {
        OLAPArray.push('\t' + "<VehicleDispatchGPSLocation>" + _val + "</VehicleDispatchGPSLocation>" + '\n');
        _retArray.push('\t' + "<eResponse.17>" + _val + "</eResponse.17>" + '\n')
        eResponse["eResponse.17"] = _val;
    };

    //////////////////////eResponse.18
    _val = getValue(businessObject.elements, "eResponse.18");
    if (_val == null)
    {
        OLAPArray.push('\t' + "<VehicleDispatchUSNationalGridLocation>" + null + "</VehicleDispatchUSNationalGridLocation>" + '\n');
        _retArray.push('\t' + "<eResponse.18>" + null + "</eResponse.18>" + '\n');
        eResponse["eResponse.18"] = null;
    }
    else
    {
        OLAPArray.push('\t' + "<VehicleDispatchUSNationalGridLocation>" + _val + "</VehicleDispatchUSNationalGridLocation>" + '\n');
        _retArray.push('\t' + "<eResponse.18>" + _val + "</eResponse.18>" + '\n');
        eResponse["eResponse.18"] = _val;

    };

    //////////////////////eResponse.19
    _val = getValue(businessObject.elements, "eResponse.19");
    if (_val == null) {
        if (isRequiredStateElement("eResponse.19") == true)
        {
            ErrorList.push("eResponse.19 Mandatory");
            v2Array.push({ section: "E02", element: "E02_16", val: null });       
        }
        else {
            OLAPArray.push('\t' + "<BeginningOdometerReadingofRespondingVehicle>" + null + "</BeginningOdometerReadingofRespondingVehicle>" + '\n');
            v2Array.push({ section: "E02", element: "E02_16", val: null });
            _retArray.push('\t' + "<eResponse.19>" + null + "</eResponse.19>" + '\n');
            eResponse["eResponse.19"] = null;
        }
    }
    else {
        OLAPArray.push('\t' + "<VehicleDispatchUSNationalGridLocation>" + _val + "</VehicleDispatchUSNationalGridLocation>" + '\n');
        _retArray.push('\t' + "<eResponse.19>" + _val + "</eResponse.19>" + '\n');
        v2Array.push({ section: "E02", element: "E02_16", val: _val });
        eResponse["eResponse.19"] = _val;
    };


    //////////////////////eResponse.20
    _val = getValue(businessObject.elements, "eResponse.20");
    if (_val == null)
    {
        if (isRequiredStateElement("eResponse.20") == true)
        {
            ErrorList.push("eResponse.20 Mandatory");
            v2Array.push({ section: "E02", element: "E02_17", val: null });            
        }
        else
        {
            OLAPArray.push('\t' + "<OnSceneOdometerReadingofRespondingVehicle>" + null + "</OnSceneOdometerReadingofRespondingVehicle>" + '\n');
            v2Array.push({ section: "E02", element: "E02_17", val: null });
            _retArray.push('\t' + "<eResponse.20>" + _val + "</eResponse.20>" + '\n');
            eResponse["eResponse.20"] = null;
        }
    }
    else {
        OLAPArray.push('\t' + "<OnSceneOdometerReadingofRespondingVehicle>" + _val + "</OnSceneOdometerReadingofRespondingVehicle>" + '\n');
        _retArray.push('\t' + "<eResponse.20>" + _val + "</eResponse.20>" + '\n');
        v2Array.push({ section: "E02", element: "E02_16", val: _val });
        eResponse["eResponse.20"] = _val;
    };


    //////////////////////eResponse.21
    _val = getValue(businessObject.elements, "eResponse.21");
    if (_val == null) {
        if (isRequiredStateElement("eResponse.21") == true) {
            ErrorList.push("eResponse.21 Mandatory");
            v2Array.push({ section: "E02", element: "E02_18", val: null });
        }
        else {
            OLAPArray.push('\t' + "<PatientDestinationOdometerReadingofRespondingVehicle>" + null + "</PatientDestinationOdometerReadingofRespondingVehicle>" + '\n');
            v2Array.push({ section: "E02", element: "E02_18", val: null });
            _retArray.push('\t' + "<eResponse.21>" + _val + "</eResponse.21>" + '\n');
            eResponse["eResponse.21"] = null;
        }
    }
    else {
        OLAPArray.push('\t' + "<PatientDestinationOdometerReadingofRespondingVehicle>" + _val + "</PatientDestinationOdometerReadingofRespondingVehicle>" + '\n');
        _retArray.push('\t' + "<eResponse.21>" + _val + "</eResponse.21>" + '\n');
        v2Array.push({ section: "E02", element: "E02_18", val: _val });
        eResponse["eResponse.21"] = _val;
    };

    //////////////////////eResponse.22
    _val = getValue(businessObject.elements, "eResponse.22");
    if (_val == null) {
        if (isRequiredStateElement("eResponse.22") == true) {
            ErrorList.push("eResponse.22 Mandatory");
            v2Array.push({ section: "E02", element: "E02_19", val: null });
        }
        else {
            OLAPArray.push('\t' + "<EndingOdometerReadingofRespondingVehicle>" + null + "</EndingOdometerReadingofRespondingVehicle>" + '\n');
            v2Array.push({ section: "E02", element: "E02_19", val: null });
            _retArray.push('\t' + "<eResponse.22>" + _val + "</eResponse.22>" + '\n');
            eResponse["eResponse.22"] = null;
        }
    }
    else {
        OLAPArray.push('\t' + "<EndingOdometerReadingofRespondingVehicle>" + _val + "</EndingOdometerReadingofRespondingVehicle>" + '\n');
        _retArray.push('\t' + "<eResponse.22>" + _val + "</eResponse.22>" + '\n');
        v2Array.push({ section: "E02", element: "E02_19", val: _val });
        eResponse["eResponse.22"] = _val;
    };


    //////////////////////eResponse.23
    _val = getValue(businessObject.elements, "eResponse.22");
    if (_val == null)
    {
        ErrorList.push("eResponse.23 Mandatory");
    }
    else
    {
        OLAPArray.push('\t' + "<ResponseModetoScene>" + _val + "</ResponseModetoScene>" + '\n');
        _retArray.push('\t' + "<eResponse.23>" + _val + "</eResponse.23>" + '\n');
        v2Array.push({ section: "E02", element: "E02_20", val: setV2("eResponse.23", _val) });
        eResponse["eResponse.23"] = _val;
    };


    //////////////////////eResponse.24
    _val = getValue(businessObject.elements, "eResponse.24");
    if (_val == null) {
        if (isRequiredStateElement("eResponse.24") == true)
        {
            OLAPArray.push('\t' + "<AdditionalResponseModeDescriptors>" + "NOT RECORDED" + "</AdditionalResponseModeDescriptors>" + '\n');
            _retArray.push('\t' + "<eResponse.24" + NIL_V3NOT_RECORDED + '\n');
            eResponse["eResponse.24"] = V3NOT_RECORDED;
        }
    }
    else 
    {
        OLAPArray.push('\t' + "<AdditionalResponseModeDescriptors>" + setCodeText("eResponse.24", _val) + "</AdditionalResponseModeDescriptors>" + '\n');
        _retArray.push('\t' + "<eResponse.24>" + _val + "</eResponse.24>" + '\n');
        v2Array.push({ section: "E02", element: "E02_02", val: setV2("eResponse.24", _val) });
        eResponse["eResponse.24"] = _val;
    };

   
    OLAPArray.push("/<eResponse>" + '\n');
    _retArray.push("/<eResponse>" + '\n');

    return _retArray;
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

var eResponse334_05 = {
    "2205001" : "911 Response (Scene)", 
    "2205003" : "Intercept", 
    "2205005" : "Interfacility Transport", 
    "2205007" : "Medical Transport", 
    "2205009" : "Mutual Aid", 
    "2205011" : "Public Assistance/Other Not Listed", 
    "2205013" : "Standby"
};
var eResponse334_06 = {
    "2206001" : "Disaster Event-Drill/Exercise", 
    "2206003" : "Disaster Event-Live Staging", 
    "2206005" : "Education", 
    "2206007" : "EMS Staging-Improve Coverage", 
    "2206009" : "Fire Support-Rehab", 
    "2206011" : "Fire Support-Standby", 
    "2206013" : "Mass Gathering-Concert/Entertainment Event", 
    "2206015" : "Mass Gathering-Fair/Community Event", 
    "2206017" : "Mass Gathering-Sporting Event", 
    "2206019" : "Other (Not Listed)", 
    "2206021" : "Public Safety Support"
};
var eResponse334_07 = {
    "2207001" : "Air Transport", 
    "2207003" : "Ground Transport", 
    "2207005" : "Non-Transport Administrative (e.g.; Supervisor)", 
    "2207007" : "Non-Transport Assistance", 
    "2207009" : "Non-Transport Rescue"
};
var eResponse334_08 = {
    "2208001" : "Caller (Uncooperative)", 
    "2208003" : "Diversion/Failure (of previous unit)", 
    "2208005" : "High Call Volume", 
    "2208007" : "Language Barrier", 
    "2208009" : "Location (Inability to Obtain)", 
    "2208011" : "No EMS Vehicles (Units) Available", 
    "2208013" : "None/No Delay", 
    "2208015" : "Other (Not Listed)", 
    "2208017" : "Technical Failure (Computer; Phone etc.)"
};
var eResponse334_09 = {
    "2209001" : "Crowd", 
    "2209003" : "Directions/Unable to Locate", 
    "2209005" : "Distance", 
    "2209007" : "Diversion (Different Incident)", 
    "2209009" : "HazMat", 
    "2209011" : "None/No Delay", 
    "2209013" : "Other (Not Listed)", 
    "2209015" : "Rendezvous Transport Unavailable", 
    "2209017" : "Route Obstruction (e.g.; train)", 
    "2209019" : "Scene Safety (Not Secure for EMS)", 
    "2209021" : "Staff Delay", 
    "2209023" : "Traffic", 
    "2209025" : "Vehicle Crash Involving this Unit", 
    "2209027" : "Vehicle Failure of this Unit", 
    "2209029" : "Weather"
};
var eResponse334_10 = {
    "2210001" : "Awaiting Air Unit", 
    "2210003" : "Awaiting Ground Unit", 
    "2210005" : "Crowd", 
    "2210007" : "Directions/Unable to Locate", 
    "2210009" : "Distance", 
    "2210011" : "Extrication", 
    "2210013" : "HazMat", 
    "2210015" : "Language Barrier", 
    "2210017" : "None/No Delay", 
    "2210019" : "Other (Not Listed)", 
    "2210021" : "Patient Access", 
    "2210023" : "Safety-Crew/Staging", 
    "2210025" : "Safety-Patient", 
    "2210027" : "Staff Delay", 
    "2210029" : "Traffic", 
    "2210031" : "Triage/Multiple Patients", 
    "2210033" : "Vehicle Crash Involving this Unit", 
    "2210035" : "Vehicle Failure of this Unit", 
    "2210037" : "Weather"
};

var eResponse334_11 = {
    "2211001" : "Crowd", 
    "2211003" : "Directions/Unable to Locate", 
    "2211005" : "Distance", 
    "2211007" : "Diversion", 
    "2211009" : "HazMat", 
    "2211011" : "None/No Delay", 
    "2211013" : "Other (Not Listed)", 
    "2211015" : "Rendezvous Transport Unavailable", 
    "2211017" : "Route Obstruction (e.g.; Train)", 
    "2211019" : "Safety", 
    "2211021" : "Staff Delay", 
    "2211023" : "Traffic", 
    "2211025" : "Vehicle Crash Involving this Unit", 
    "2211027" : "Vehicle Failure of this Unit", 
    "2211029" : "Weather"
};
var eResponse334_12 = {
    "2212001" : "Clean-up", 
    "2212003" : "Decontamination", 
    "2212005" : "Distance", 
    "2212007" : "Documentation", 
    "2212009" : "ED Overcrowding / Transfer of Care", 
    "2212011" : "Equipment Failure", 
    "2212013" : "Equipment/Supply Replenishment", 
    "2212015" : "None/No Delay", 
    "2212017" : "Other (Not Listed)", 
    "2212019" : "Rendezvous Transport Unavailable", 
    "2212021" : "Route Obstruction (e.g. Train)", 
    "2212023" : "Staff Delay", 
    "2212025" : "Traffic", 
    "2212027" : "Vehicle Crash of this Unit", 
    "2212029" : "Vehicle Failure of this Unit", 
    "2212031" : "Weather"
};
var eResponse334_15 = {
    "2215001" : "BLS-First Responder/EMR", 
    "2215003" : "BLS-Basic /EMT", 
    "2215005" : "BLS-AEMT", 
    "2215007" : "BLS-Intermediate", 
    "2215009" : "ALS-AEMT", 
    "2215011" : "ALS-Intermediate", 
    "2215013" : "ALS-Paramedic", 
    "2215015" : "ALS-Community Paramedicine", 
    "2215017" : "ALS-Nurse", 
    "2215019" : "ALS-Physician", 
    "2215021" : "Specialty Critical Care"
};
var eResponse334_23 = {
    "2223001" : "Emergent (Immediate Response)", 
    "2223003" : "Emergent Downgraded to Non-Emergent", 
    "2223005" : "Non-Emergent", 
    "2223007" : "Non-Emergent Upgraded to Emergent"
};

var eResponse334_24 = {
    "2224001": "Intersection Navigation-Against Normal Light  Patterns",
    "2224003": "Intersection Navigation-With Automated Light Changing Technology",
    "2224005": "Intersection Navigation-With Normal Light Patterns",
    "2224007": "Scheduled",
    "2224009": "Speed-Enhanced per Local Policy",
    "2224011": "Speed-Normal Traffic",
    "2224013": "Unscheduled"
};
function setCodeText(NEMSISElementNumber, codeVal) {
    var _return = [];


    switch (NEMSISElementNumber) {

        case "eResponse.05":
            if (eResponse334_05[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eResponse334_05[codeVal];
            }
            break;

        case "eResponse.06":
            if (eResponse334_06[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eResponse334_06[codeVal];
            }
            break;

        case "eResponse.07":
            if (eResponse334_07[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eResponse334_07[codeVal];
            }
            break;

        case "eResponse.08":
            if (eResponse334_08[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eResponse334_08[codeVal];
            }
            break;
        case "eResponse.09":
            if (eResponse334_09[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eResponse334_09[codeVal];
            }
            break;

        case "eResponse.10":
            if (eResponse334_10[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eResponse334_10[codeVal];
            }
            break;
        case "eResponse.11":
            if (eResponse334_11[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eResponse334_11[codeVal];
            }
            break;

        case "eResponse.12":
            if (eResponse334_12[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eResponse334_12[codeVal];
            }
            break;


        case "eResponse.15":
            if (eResponse334_15[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eResponse334_15[codeVal];
            }
            break;
        case "eResponse.23":
            if (eResponse334_23[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eResponse334_23[codeVal];
            }
            break;

        case "eResponse.24":
            if (eResponse334_24[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eResponse334_24[codeVal];
            }
            break;

        default:
            _return = " UNDEFINED";
    }
    return _return;

};