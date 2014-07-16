// JavaScript source code
var ErrorList = [];
var v3NOT_REPORTING = " NOT REPORTING";
var v3NOT_RECORDED = " NOT RECORDED "
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
var V3BigArray = [];
////////////////////////////////////////////////////////
//Instrumentation Section


var setEMSObjects = function (parseObject)
    //Loops through raw Parse Object
    //Finds each NEMSIS Object
{
    var eAirwayParseObject = new Object();
    var eArrestParseObject = new Object();
    var eCrewParseObject = new Object();
    var eDeviceParseObject = new Object();
    var eDispatchParseObject = new Object();
    var eDispositionParseObject = new Object();
    var eExamParseObject = new Object();
    var eHistoryParseObject = new Object();
    var eInjuryParseObject = new Object();
    var eLabsParseObject = new Object()
    var eMedicationsParseObject = new Object();
    var eNarrativeParseObject = new Object();
    var eOtherParseObject = new Object();
    var ePatientParseObject = new Object();
    var ePaymentParseObject = new Object();
    var eProceduresParseObject = new Object();
    var eProtocolsParseObject = new Object();
    var eRecordParseObject = new Object();
    var eResponseParseObject = new Object();
    var eSceneParseObject = new Object();
    var eSituationParseObject = new Object();
    var eStateParseObject = new Object();
    var eTimesParseObject = new Object();
    var eVitalsParseObject = new Object();
    
    for (var i = 0; i < parseObject.length; i++) {
        switch (parseObject[i].attributes.name) {
            case "eAirway":
                PCRObject.eAirwayParseObject = parseObject[i];
                break;
            default:
                "UNDEFINED";
        }
    };
    seteAirway(PCRObject.eAirwayParseObject);


    return EMSObject;
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

var seteAirwayGroup = function (eAirwayParseObject) {
    var _retArray = [];
    _retArray.push("<eAirway>" + '\n');
    _OLAPArray.push("<eAirway>" + '\n');

    for (var a = 0; a < eAirwayParseObject.attributes.sections.length; a++) {
        _retArray.push('\t' + "<eAirway.AirwayGroup>");
        _OLAPArray.push('\t' + "<eAirway.AirwayGroup>");
        console.log(eAirwayParseObject.attributes);

        /////eAirway.01
        _val = getValue(eAirwayParseObject.attributes.sections[a].attributes.elements, "eAirway.01");
        if (_val == null) {
            if (isRequiredStateElement("eAirway.01") == true) {
                _retArray.push('\t\t' + "<eAirway.01>" + NIL_V3NOT_RECORDED + '\n');
                AirwayGroup["eAirway.01"] = v3NOT_RECORDED;
                _OLAPArray.push('\t\t' + "<IndicationsforInvasiveAirway>" + "NOT RECORDED" + "</IndicationsforInvasiveAirway>" + '\n');
            }
            else {
                AirwayGroup["eAirway.01"] = v3NOT_REPORTING;
                _retArray.push('\t\t' + "<eAirway.01>" + NIL_V3NOT_REPORTING + '\n');
                _OLAPArray.push('\t\t' + "<IndicationsforInvasiveAirway>" + "NOT REPORTING" + "</IndicationsforInvasiveAirway>" + '\n');
            }
        }
        else {
            AirwayGroup["eAirway.01"] = setCodeText("eAirway.01", _val);
            _retArray.push('\t\t' + "<eAirway.01>" + _val + "</eAirway.01>" + '\n');
            _OLAPArray.push('\t\t' + "<IndicationsforInvasiveAirway>" + setCodeText("eAirway.01", _val) + "</IndicationsforInvasiveAirway>" + '\n');
        };
        V3BigArray.push({ element: "eAirway.01", val: AirwayGroup["eAirway.01"] });

        //////////////////////////////
        _sectionIndex = getSectionIndex(eAirwayParseObject.attributes.sections[a].attributes, "dAgency.AgencyServiceGroup");
        for (var x = 0; x < _sectionIndex.length; x++) {
            _retArray.push('\t\t\t' + "<eAirway.ConfirmationGroup>" + '\n')
            _OLAPArray.push('\t\t\t' + "<eAirway.ConfirmationGroup>" + '\n')

            _elementList = eAirwayParseObject.attributes.sections[a].attributes[_sectionIndex]

            /////eAirway.02
            _val = getValue(_elementList, "eAirway.02");
            if (_val == null) {
                if (isRequiredStateElement("eAirway.02") == true) {
                    _retArray.push('\t\t\t\t' + "<eAirway.02>" + NIL_V3NOT_RECORDED + '\n');
                    ConfirmationGroup["eAirway.02"] = v3NOT_RECORDED;
                    _OLAPArray.push('\t\t\t\t' + "<DateTimeAirwayDevicePlacementConfirmation>" + "NOT RECORDED" + "</DateTimeAirwayDevicePlacementConfirmation>" + '\n');
                }
                else {
                    _retArray.push('\t\t\t\t' + "<eAirway.02>" + NIL_V3NOT_REPORTING + '\n');
                    ConfirmationGroup["eAirway.02"] = v3NOT_REPORTING;
                    _OLAPArray.push('\t\t\t\t' + "<DateTimeAirwayDevicePlacementConfirmation>" + "NOT REPORTING" + "</DateTimeAirwayDevicePlacementConfirmation>" + '\n');
                }
            }
            else {
                ConfirmationGroup["eAirway.02"] = setCodeText("eAirway.02", _val);
                _retArray.push('\t\t\t\t' + "<eAirway.02>" + _val + "</eAirway.02>" + '\n');
                _OLAPArray.push('\t\t\t\t' + "<DateTimeAirwayDevicePlacementConfirmation>" + setCodeText("eAirway.02", _val) + "</DateTimeAirwayDevicePlacementConfirmation>" + '\n');
            };

            V3BigArray.push({ element: "eAirway.02", val: ConfirmationGroup["eAirway.02"] });
            /////eAirway.03
            _val = getValue(_elementList, "eAirway.03");
            if (_val == null) {
                if (isRequiredStateElement("eAirway.03") == true) {
                    _retArray.push('\t\t\t\t' + "<eAirway.03>" + NIL_V3NOT_RECORDED + '\n');
                    _OLAPArray.push('\t\t\t\t' + "<AirwayDeviceBeingConfirmed>" + "NOT RECORDED" + "</AirwayDeviceBeingConfirmed>" + '\n');
                    ConfirmationGroup["eAirway.03"] = v3NOT_RECORDED;
                }
                else {
                    _retArray.push('\t\t\t\t' + "<eAirway.03>" + NIL_V3NOT_REPORTING + '\n');
                    ConfirmationGroup["eAirway.03"] = v3NOT_REPORTING;
                    _OLAPArray.push('\t\t\t\t' + "<AirwayDeviceBeingConfirmed>" + "NOT REPORTING" + "</AirwayDeviceBeingConfirmed>" + '\n');
                }
            }
            else
            {
                ConfirmationGroup["eAirway.03"] = setCodeText("eAirway.03", _val);
                _retArray.push('\t\t\t\t' + "<eAirway.03>" + _val + "</eAirway.03>" + '\n');
                _OLAPArray.push('\t\t\t\t' + "<AirwayDeviceBeingConfirmed>" + setCodeText("eAirway.03", _val) + "</AirwayDeviceBeingConfirmed>" + '\n');
            };
            V3BigArray.push({ element: "eAirway.03", val: ConfirmationGroup["eAirway.03"] });

            /////eAirway.04
            _val = getValue(_elementList, "eAirway.04");
            if (_val == null) {
                if (isRequiredStateElement("eAirway.04") == true) {
                    _retArray.push('\t\t\t\t\t' + "<eAirway.04>" + NIL_V3NOT_RECORDED + '\n');
                    _OLAPArray.push('\t\t\t\t' + "<AirwayDevicePlacementConfirmedMethod>" + "NOT RECORDED" + "</AirwayDevicePlacementConfirmedMethod>" + '\n');
                    ConfirmationGroup["eAirway.04"] = v3NOT_RECORDED;
                }
                else {
                    _retArray.push('\t\t\t\t\t' + "<eAirway.04>" + NIL_V3NOT_REPORTING + '\n');
                    ConfirmationGroup["eAirway.04"] = v3NOT_REPORTING;
                    _OLAPArray.push('\t\t\t\t' + "<AirwayDevicePlacementConfirmedMethod>" + "NOT REPORTING" + "</AirwayDevicePlacementConfirmedMethod>" + '\n');
                }
            }
            else {                
                for (var i = 0; i < _val.length; i++) {
                    arr1.push = (setCodeText("eAirway.04", _val[i]));
                    _retArray.push('\t\t\t\t' + "<eAirway.04>" + _val[i] + "<eAirway.04>" + '\n');
                    _OLAPArray.push('\t\t\t\t' + "<AirwayDevicePlacementConfirmedMethod>" + setCodeText("eAirway.04", _val[i]) + "</AirwayDevicePlacementConfirmedMethod>" + '\n');
                }
                ConfirmationGroup["eAirway.04"] = arr1.slice(0);
            };
            V3BigArray.push({ element: "eAirway.04", val: ConfirmationGroup["eAirway.04"] });

            /////eAirway.05
            _val = getValue(_elementList, "eAirway.05");
            if (_val == null) {
                ConfirmationGroup["eAirway.04"] = null;
                _OLAPArray.push('\t\t\t\t' + "<TubeDepth>" + null + "</TubeDepth>" + '\n');
                _retArray.push('\t\t\t\t' + "<eAirway.05>" + null + "</eAirway.05>" + '\n');
            }
            else {
                ConfirmationGroup["eAirway.04"] = _val;
                _OLAPArray.push('\t\t\t\t' + "<TubeDepth>" + setCodeText("eAirway.05", _val) + "</TubeDepth>" + '\n');
                _retArray.push('\t\t\t\t' + "<eAirway.05>" + _val + "</eAirway.05>" + '\n');
            };
            V3BigArray.push({ element: "eAirway.05", val: ConfirmationGroup["eAirway.05"] });

            /////eAirway.06
            _val = getValue(_elementList, "eAirway.06");
            if (_val == null) {
                if (isRequiredStateElement("eAirway.06") == true) {
                    _retArray.push('\t\t\t\t' + "<eAirway.06>" + NIL_V3NOT_RECORDED + '\n');
                    ConfirmationGroup["eAirway.06"] = v3NOT_RECORDED;
                    _OLAPArray.push('\t\t\t\t' + "<TypeofIndividualConfirmingAirwayDevicePlacement>" + "NOT RECORDED" + "</TypeofIndividualConfirmingAirwayDevicePlacement>" + '\n');
                }
                else {
                    _retArray.push('\t\t\t\t' + "<eAirway.06>" + NIL_V3NOT_REPORTING + '\n');
                    ConfirmationGroup["eAirway.06"] = v3NOT_REPORTING;
                    _OLAPArray.push('\t\t\t\t' + "<TypeofIndividualConfirmingAirwayDevicePlacement>" + "NOT REPORTING" + "</TypeofIndividualConfirmingAirwayDevicePlacement>" + '\n');
                }
            }
            else {
                ConfirmationGroup["eAirway.06"] = _val;
                _OLAPArray.push('\t\t\t\t' + "<TypeofIndividualConfirmingAirwayDevicePlacement>" + setCodeText("eAirway.06", _val) + "</TypeofIndividualConfirmingAirwayDevicePlacement>" + '\n');
                _retArray.push('\t\t\t\t' + "<eAirway.06>" + _val + "</eAirway.06>" + '\n');
            };
            V3BigArray.push({ element: "eAirway.06", val: ConfirmationGroup["eAirway.06"] });

            /////eAirway.07
            _val = getValue(_elementList, "eAirway.07");
            if (_val == null) {
                if (isRequiredStateElement("eAirway.07") == true) {
                    _retArray.push('\t\t\t\t' + "<eAirway.07>" + NIL_V3NOT_RECORDED + '\n');
                    ConfirmationGroup["eAirway.07"] = v3NOT_RECORDED;
                    _OLAPArray.push('\t\t\t\t' + "<CrewMemberID>" + "NOT RECORDED" + "</CrewMemberID>" + '\n');
                }
                else {
                    _OLAPArray.push('\t\t\t\t' + "<CrewMemberID>" + "NOT REPORTING" + "</CrewMemberID>" + '\n');
                    _retArray.push('\t\t\t\t' + "<eAirway.07>" + NIL_V3NOT_REPORTING + '\n');
                    ConfirmationGroup["eAirway.07"] = v3NOT_REPORTING;
                }
            }
            else {
                ConfirmationGroup["eAirway.07"] = _val;
                _retArray.push('\t\t\t\t' + "<eAirway.07>" + _val + "</eAirway.07>" + '\n');
                _OLAPArray.push('\t\t\t\t' + "<CrewMemberID>" + setCodeText("eAirway.07", _val) + "</CrewMemberID>" + '\n');
            };
            V3BigArray.push({ element: "eAirway.07", val: ConfirmationGroup["eAirway.07"] });

            /////eAirway.08
            _val = getValue(_elementList, "eAirway.08");
            if (_val == null)
            {
                if (isRequiredStateElement("eAirway.08") == true) {
                    _retArray.push('\t\t\t\t\t' + "<eAirway.08>" + NIL_V3NOT_RECORDED + '\n');
                    ConfirmationGroup["eAirway.08"] = v3NOT_RECORDED;
                    _OLAPArray.push('\t\t\t\t' + "<AirwayComplicationsEncountered>" + "NOT RECORDED" + "</AirwayComplicationsEncountered>" + '\n');
                }
                else {
                    _OLAPArray.push('\t\t\t\t' + "<AirwayComplicationsEncountered>" + "NOT REPORTING" + "</AirwayComplicationsEncountered>" + '\n');
                    _retArray.push('\t\t\t\t\t' + "<eAirway.08>" + NIL_V3NOT_REPORTING + '\n');
                    ConfirmationGroup["eAirway.08"] = v3NOT_REPORTING;
                }
            }
            else
            {
                arr1 = _val;
                for (var i = 0; i < _val.length; i++)
                {
                    arr1.push(setCodeText("eAirway.08", _val[i]))
                    _retArray.push('\t\t\t\t' + "<eAirway.08>" + _val[i] + "<eAirway.08>" + '\n');
                    _OLAPArray.push('\t\t\t\t' + "<AirwayComplicationsEncountered>" + setCodeText("eAirway.08", _val[i]) + "</AirwayComplicationsEncountered>" + '\n');
                }
                ConfirmationGroup["eAirway.08"] = arr1.slice(0);
            };
            V3BigArray.push({ element: "eAirway.08", val: ConfirmationGroup["eAirway.08"] });

            /////eAirway.09
            _val = getValue(_elementList, "eAirway.09");
            if (_val == null) {
                if (isRequiredStateElement("eAirway.09") == true) {
                    _retArray.push('\t\t\t\t' + "<eAirway.09>" + NIL_V3NOT_RECORDED + '\n');
                    ConfirmationGroup["eAirway.09"] = v3NOT_RECORDED;
                    _OLAPArray.push('\t\t\t\t' + "<SuspectedReasonsforFailedAirwayProcedure>" + "NOT RECORDED" + "</SuspectedReasonsforFailedAirwayProcedure>" + '\n');
                }
                else {
                    _retArray.push('\t\t\t\t' + "<eAirway.09>" + NIL_V3NOT_REPORTING + '\n');
                    _OLAPArray.push('\t\t\t\t' + "<SuspectedReasonsforFailedAirwayProcedure>" + "NOT REPORTING" + "</SuspectedReasonsforFailedAirwayProcedure>" + '\n');
                    ConfirmationGroup["eAirway.09"] = v3NOT_REPORTING;
                }
            }
            else {
                arr1 = _val;
                for (var i = 0; i < _val.length; i++) {
                    arr1.push(setCodeText("eAirway.09", _val[i]))
                    _retArray.push('\t\t\t\t' + "<eAirway.09>" + _val[i] + "<eAirway.09>" + '\n');
                    _OLAPArray.push('\t\t\t\t' + "<SuspectedReasonsforFailedAirwayProcedure>" + setCodeText("eAirway.09", _val[i]) + "</SuspectedReasonsforFailedAirwayProcedure>" + '\n');
                }
                ConfirmationGroup["eAirway.09"] = arr1.slice(0);
            };
            V3BigArray.push({ element: "eAirway.09", val: ConfirmationGroup["eAirway.09"] });

            _retArray.push('\t\t\t' + "</eAirway.ConfirmationGroup>" + '\n')
            _OLAPArray.push('\t\t\t' + "</eAirway.ConfirmationGroup>" + '\n')
        };

        ///////////////////////////


        /////eAirway.10
        _val = getValue(eAirwayParseObject.attributes.sections[a].attributes.elements, "eAirway.10");
        if (_val == null) {
            AirwayGroup["eAirway.10"] = null;
            _retArray.push('\t\t\t' + "<eAirway.10>" + null + "</eAirway.10>" + '\n');
            _OLAPArray.push('\t\t\t' + "<DateTimeDecisiontoManagethePatientwithanInvasiveAirway>" + null + "</DateTimeDecisiontoManagethePatientwithanInvasiveAirway>" + '\n');
        }
        else {
            AirwayGroup["eAirway.10"] = _val;
            _OLAPArray.push('\t\t\t' + "<DateTimeDecisiontoManagethePatientwithanInvasiveAirway>" + setCodeText("eAirway.10", _val) + "</DateTimeDecisiontoManagethePatientwithanInvasiveAirway>" + '\n');
            _retArray.push('\t\t\t' + "<eAirway.10>" + _val + "</eAirway.10>" + '\n');
        };
        V3BigArray.push({ element: "eAirway.10", val: AirwayGroup["eAirway.10"] });

        /////eAirway.11
        _val = getValue(eAirwayParseObject.attributes.sections[a].attributes.elements, "eAirway.11");
        if (_val == null) {
            AirwayGroup["eAirway.11"] = null;
            _OLAPArray.push('\t\t\t' + "<DateTimeInvasiveAirwayPlacementAttemptsAbandoned>" + null + "</DateTimeInvasiveAirwayPlacementAttemptsAbandoned>" + '\n');
            _retArray.push('\t\t\t' + "<eAirway.11>" + null + "</eAirway.11>" + '\n');
        }
        else {
            AirwayGroup["eAirway.11"] = _val;
            _OLAPArray.push('\t\t\t' + "<DateTimeInvasiveAirwayPlacementAttemptsAbandoned>" + _val + "</DateTimeInvasiveAirwayPlacementAttemptsAbandoned>" + '\n');
            _retArray.push('\t\t\t' + "<eAirway.11>" + _val + "</eAirway.11>" + '\n');
        };
        V3BigArray.push({ element: "eAirway.11", val: AirwayGroup["eAirway.11"] });

        _retArray.push('\t' + "</eAirway.AirwayGroup>");
        _OLAPArray.push('\t' + "</eAirway.AirwayGroup>");
        _retArray.push("</eAirway>" + '\n');
        _OLAPArray.push("</eAirway>" + '\n');

    };

    
     
    var eAirwayConfirmationGroup = new Object;


    return dAirwayv3XMLArray;

};

var seteAirwayNotApplicable = function (businessObject) {
    _retArray.push("<eAirway>" + '\n');
    _retArray.push('\t' + "<eAirway.AirwayGroup>" + '\n');

    if (isRequiredStateElement("eAirway.01") == true) {
        _retArray.push('\t\t' + "<eAirway.01>" + NIL_V3NOT_APPLICABLE + '\n');
    }

    if (isRequiredStateElement("eAirway.02") == true) {
        _retArray.push('\t\t' + "<eAirway.02>" + NIL_V3NOT_APPLICABLE + '\n');
    }

    if (isRequiredStateElement("eAirway.03") == true) {
        _retArray.push('\t\t' + "<eAirway.03>" + NIL_V3NOT_APPLICABLE + '\n');
    }

    if (isRequiredStateElement("eAirway.04") == true) {
        _retArray.push('\t\t' + "<eAirway.04>" + NIL_V3NOT_APPLICABLE + '\n');
    }

    if (isRequiredStateElement("eAirway.06") == true) {
        _retArray.push('\t\t' + "<eAirway.06>" + NIL_V3NOT_APPLICABLE + '\n');
    }

    if (isRequiredStateElement("eAirway.07") == true) {
        _retArray.push('\t\t' + "<eAirway.07>" + NIL_V3NOT_APPLICABLE + '\n');
    }

    if (isRequiredStateElement("eAirway.08") == true) {
        _retArray.push('\t\t' + "<eAirway.81>" + NIL_V3NOT_APPLICABLE + '\n');
    }

    if (isRequiredStateElement("eAirway.09") == true) {
        _retArray.push('\t\t' + "<eAirway.09>" + NIL_V3NOT_APPLICABLE + '\n');
    }

    _retArray.push('\t' + "</eAirway.AirwayGroup>" + '\n');
    _retArray.push("</eAirway>" + '\n');
    // console.log(_retArray);
    return _retArray;
}


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
                _arr.push(elementList[i].attributes.value);
            }
        }
    };
    return _arr;
};

function setCodeText(NEMSISElementNumber, valueArray) {
    var _return = [];
    switch (NEMSISElementNumber) {
        case "eAirway.01":
            if (eAirway334_01[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eAirway334_01[valueArray];
            }
            break;
        case "eAirway.03":
            if (eAirway334_03[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eAirway334_03[valueArray];
            }
            break;
        case "eAirway.04":
            if (eAirway334_04[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eAirway334_04[valueArray];
            }
            break;
        case "eAirway.06":
            if (eAirway334_06[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eAirway334_06[valueArray];
            }
            break;
        case "eAirway.08":
            if (eAirway334_08[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eAirway334_08[valueArray];
            }
            break;
        case "eAirway.09":
            if (eAirway334_09[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eAirway334_09[valueArray];
            }
            break;

        default:
            _return = " UNDEFINED";
    }
    return _return;

}

var eAirway334_01 = {
    "4001001": "Adequate Airway Reflexes/Effort; Potential for Compromise",
    "4001003": "Airway Reflex Compromised",
    "4001005": "Apnea or Agonal Respirations",
    "4001007": "Illness Involving Airway",
    "4001009": "Injury Involving Airway",
    "4001011": "Other (Not Listed)",
    "4001013": "Ventilatory Effort Compromised"
};
var eAirway334_03 = {
    "4003001": "Cricothyrotomy Tube",
    "4003003": "Endotracheal Tube",
    "4003005": "Other-Invasive Airway",
    "4003007": "SAD-Combitube",
    "4003009": "SAD-King",
    "4003011": "SAD-LMA",
    "4003013": "SAD-Other",
    "4003015": "Tracheostomy Tube"
}

var eAirway334_04 = {
    "4004001": "Auscultation",
    "4004003": "Bulb/Syringe Aspiration",
    "4004005": "Colorimetric ETCO2",
    "4004007": "Condensation in Tube",
    "4004009": "Digital (Numeric) ETCO2",
    "4004011": "Direct Re-Visualization of Tube in Place",
    "4004013": "Endotracheal Tube Whistle (BAAM; etc)",
    "4004015": "Other (Not Listed)",
    "4004017": "Visualization of Vocal Cords",
    "4004019": "Waveform ETCO2"
};

var eAirway334_06 = {
    "4006001": "Another Person on the Same Crew",
    "4006003": "Other (Not Listed)",
    "4006005": "Person Performing Intubation",
    "4006007": "Receiving Air Medical/EMS Crew",
    "4006009": "Receiving Hospital Team"
};

var eAirway334_08 = {
    "4008001": "Adverse Event from Facilitating Drugs",
    "4008003": "Bradycardia (<50)",
    "4008005": "Cardiac Arrest",
    "4008007": "Esophageal Intubation-Delayed Detection (After Tube Secured)",
    "4008009": "Esophageal Intubation-Detected in Emergency Department",
    "4008011": "Failed Intubation Effort",
    "4008013": "Injury or Trauma to Patient from Airway Management Effort",
    "4008015": "Other (Not Listed)",
    "4008017": "Oxygen Desaturation (<90%)",
    "4008019": "Patient Vomiting/Aspiration",
    "4008021": "Tube Dislodged During Transport/Patient Care",
    "4008023": "Tube Was Not in Correct Position when EMS Crew/Team Assumed Care of the Patient"
};

var eAirway334_09 = {
    "4009001": "Difficult Patient Airway Anatomy",
    "4009003": "ETI Attempted; but Arrived At Destination Facility Before Accomplished",
    "4009005": "Facial or Oral Trauma",
    "4009007": "Inability to Expose Vocal Cords",
    "4009009": "Inadequate Patient Relaxation/Presence of Protective Airway Reflexes",
    "4009011": "Jaw Clenched (Trismus)",
    "4009013": "Other (Not Listed)",
    "4009015": "Poor Patient Access",
    "4009017": "Secretions/Blood/Vomit",
    "4009019": "Unable to Position or Access Patient",
}