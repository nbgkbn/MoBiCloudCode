var ErrorList = [];
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


var seteAirwayGroup = function (NEMSISEMSObject) {
    //NEMSISEMSObject = complete NEMSIS Object from OLTP object
    //This function converts NEMSISEMSObject to both Version 2.2.1 and Version 3.3.4 NEMSIS Objects
    //Creates qualified JSON objects
    //Imposes localized business rules (within a given section/attribute)
    //If NEMSISObject does not contain this Section (isUndefined == true), function assigns appropriate
    //values to attribute/elements based upon State/Agency Configuration.
    var eAirway = new Object();
    var AirwayGroup = new Object();
    var ConfirmationGroup = new Object();
    var ConfirmationGroupArray = new Array();

    // GET AirwayGroup.
    //If -1, set to NOT APPLICABLT
    var eAirwayGroupCount = [];
    eAirwayGroupCount = getSectionIndex(NEMSISEMSObject, "AirwayGroup")
    if (eAirwayGroupCount[0] == -1) {
        eAirway = setNotApplicableAll();
        return eAirway;
    };


    for (var a = 0; a < eAirwayGroupCount.length; a++) {
        console.log(businessObject);
        var bAirwayPerformed = false;
        /////eAirway.01
        var eAirwayElements = NEMSISEMSObject.sections[a].attributes.elements
        _val = getValue(listElements, "eAirway.01");
        if (_val == null) {
            if (isRequiredStateElement("eAirway.01") == true) {
                AirwayGroup["IndicationsforInvasiveAirway"] = v3NOT_RECORDED;
                AirwayGroup["eAirway.01"] = v3NOT_RECORDED;
            }
        }
        else {
            bAirwayPerformed = true;
            AirwayGroup["eAirway.01"] = _val[0];
            AirwayGroup["IndicationsforInvasiveAirway"] = setCodeText("eAirway.01", _val[0]);

        };

        //////////////////////////////
        _sectionIndex = getSectionIndex(businessObject, "dAgency.AgencyServiceGroup");
        for (var x = 0; x < _sectionIndex.length; x++) {

            var groupObject = NEMSISEMSObject.sections[a].attributes.sections[_sectionIndex].elements
            var ConfirmationGroupArray = [];
            /////eAirway.02
            _val = getValue(groupObject, "eAirway.02");
            if (_val == null) {
                if (isRequiredStateElement("eAirway.02") == true) {
                    ConfirmationGroup["eAirway.02"] = v3NOT_RECORDED;
                    ConfirmationGroup["DateTimeAirwayDevicePlacementConfirmation"] = v3NOT_RECORDED;
                }
                else {
                    ConfirmationGroup["eAirway.02"] = v3NOT_REPORTING;
                    ConfirmationGroup["DateTimeAirwayDevicePlacementConfirmation"] = v3NOT_REPORTING;
                }
            }
            else {
                bAirwayPerformed = true;
                ConfirmationGroup["eAirway.02"] = _val[0];
                ConfirmationGroup["DateTimeAirwayDevicePlacementConfirmation"] = setCodeText("eAirway.02", _val[0]);
            };

            /////eAirway.03
            _val = getValue(groupObject, "eAirway.03");
            if (_val == null) {
                if (isRequiredStateElement("eAirway.03") == true) {
                    ConfirmationGroup["eAirway.03"] = v3NOT_RECORDED;
                    ConfirmationGroup["AirwayDeviceBeingConfirmed"] = v3NOT_RECORDED;
                }
                else {
                    ConfirmationGroup["eAirway.03"] = v3NOT_REPORTING;
                    ConfirmationGroup["AirwayDeviceBeingConfirmed"] = v3NOT_REPORTING;
                }
            }
            else {
                bAirwayPerformed = true;
                ConfirmationGroup["eAirway.03"] = _val[0];
                ConfirmationGroup["AirwayDeviceBeingConfirmed"] = setCodeText("eAirway.03", _val[0]);
            };

            /////eAirway.04
            _val = getValue(groupObject, "eAirway.04");
            if (_val == null) {
                if (isRequiredStateElement("eAirway.04") == true) {
                    ConfirmationGroup["eAirway.04"] = v3NOT_RECORDED;
                    ConfirmationGroup["AirwayDevicePlacementConfirmedMethod"] = v3NOT_RECORDED;
                }
                else {
                    ConfirmationGroup["eAirway.04"] = v3NOT_REPORTING;
                    ConfirmationGroup["AirwayDevicePlacementConfirmedMethod"] = v3NOT_REPORTING;
                }
            }
            else {
                arr1 = _val;
                arr2 = _val;
                for (var i = 0; i < _val.length; i++) {
                    arr1.push(_val[i]);
                    arr2.push(setCodeText("eAirway.04", _val[i]));
                }
                bAirwayPerformed = true;
                ConfirmationGroup["eAirway.04"] = arr1.slice(0);
                ConfirmationGroup["AirwayDevicePlacementConfirmedMethod"] = arr2.slice(0);
            };

            /////eAirway.05
            _val = getValue(groupObject, "eAirway.05");
            if (_val == null) {
                ConfirmationGroup["eAirway.04"] = null;
                ConfirmationGroup["TubeDepth"] = null;
            }
            else {
                bAirwayPerformed = true;
                ConfirmationGroup["eAirway.04"] = _val[0];
                ConfirmationGroup["TubeDepth"] = _val[0];
            };

            /////eAirway.06
            _val = getValue(groupObject, "eAirway.06");
            if (_val == null) {
                if (isRequiredStateElement("eAirway.06") == true) {
                    ConfirmationGroup["eAirway.06"] = v3NOT_RECORDED;
                    ConfirmationGroup["TypeofIndividualConfirmingAirwayDevicePlacement"] = v3NOT_RECORDED;
                }
                else {
                    ConfirmationGroup["eAirway.06"] = v3NOT_REPORTING;
                    ConfirmationGroup["TypeofIndividualConfirmingAirwayDevicePlacement"] = v3NOT_REPORTING;
                }
            }
            else {
                bAirwayPerformed = true;
                ConfirmationGroup["eAirway.06"] = _val[0];
                ConfirmationGroup["TypeofIndividualConfirmingAirwayDevicePlacement"] = _val[0];
            };

            /////eAirway.07
            _val = getValue(groupObject, "eAirway.07");
            if (_val == null) {
                if (isRequiredStateElement("eAirway.07") == true) {
                    ConfirmationGroup["eAirway.07"] = v3NOT_RECORDED;
                    ConfirmationGroup["CrewMemberID"] = v3NOT_RECORDED;
                }
                else {
                    ConfirmationGroup["eAirway.07"] = v3NOT_REPORTING;
                    ConfirmationGroup["CrewMemberID"] = v3NOT_REPORTING;
                }
            }
            else {
                bAirwayPerformed = true;
                ConfirmationGroup["eAirway.07"] = _val[0];
                ConfirmationGroup["CrewMemberID"] = setCodeText("eAirway.07", _val[0]);
            };

            /////eAirway.08
            _val = getValue(groupObject, "eAirway.08");
            if (_val == null) {
                if (isRequiredStateElement("eAirway.08") == true) {
                    ConfirmationGroup["eAirway.08"] = v3NOT_RECORDED;
                    ConfirmationGroup["AirwayComplicationsEncountered"] = v3NOT_RECORDED;
                }
                else {
                    ConfirmationGroup["eAirway.08"] = v3NOT_REPORTING;
                    ConfirmationGroup["AirwayComplicationsEncountered"] = v3NOT_REPORTING;
                }
            }
            else {
                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _val.length; i++) {
                    arr1.push(_val[i]);
                    arr2.push(setCodeText("eAirway.08", _val[i]));
                };
                bAirwayPerformed = true;
                ConfirmationGroup["eAirway.08"] = arr1.slice(0);
                ConfirmationGroup["AirwayComplicationsEncountered"] = arr2.slice(0);
            };

            /////eAirway.09
            _val = getValue(groupObject, "eAirway.09");
            if (_val == null) {
                if (isRequiredStateElement("eAirway.09") == true) {
                    ConfirmationGroup["eAirway.09"] = v3NOT_RECORDED;
                    ConfirmationGroup["SuspectedReasonsforFailedAirwayProcedure"] = v3NOT_RECORDED;
                }
                else {
                    ConfirmationGroup["eAirway.09"] = v3NOT_REPORTING;
                    ConfirmationGroup["SuspectedReasonsforFailedAirwayProcedure"] = v3NOT_REPORTING;
                }
            }
            else {
                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _val.length; i++) {
                    arr1.push(_val[i]);
                    arr2.push(setCodeText("eAirway.09", _val[i]));
                };
                bAirwayPerformed = true;
                ConfirmationGroup["eAirway.09"] = arr1.slice(0);
                ConfirmationGroup["SuspectedReasonsforFailedAirwayProcedure"] = arr2.slice(0);
            };
            ConfirmationGroupArray.push(ConfirmationGroup);
        };  //ConfirmationGroup Loop

        ///////////////////////////


        /////eAirway.10
        _val = getValue(eAirwayElements, "eAirway.10");
        if (_val == null) {
            AirwayGroup["eAirway.10"] = null;
            AirwayGroup["DateTimeDecisiontoManagethePatientwithanInvasiveAirway"] = null;
        }
        else {
            /*
            Date does not appear to be required
            if (eAirwayGroup["eAirway.01"] != null) {
                if (eAirwayGroup["eAirway.10"] <= _val[0]) {
                    ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eAirway.11", Description: "Validation Error: eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Date/Time Decision to Manage the Patient with an Invasive Airway, " })
                }
            };
            */
            bAirwayPerformed = true;
            AirwayGroup["eAirway.10"] = _val[0];
            AirwayGroup["DateTimeDecisiontoManagethePatientwithanInvasiveAirway"] = _val;

        };

        /////eAirway.11
        // eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: 
        // Date/Time Decision to Manage the Patient with an Invasive Airway, 

        _val = getValue(eAirwayElements, "eAirway.11");
        if (_val == null) {
            AirwayGroup["eAirway.11"] = null;
            AirwayGroup["DateTimeInvasiveAirwayPlacementAttemptsAbandoned"] = null;
        }
        else {
            if (eAirwayGroup["eAirway.01"] != null) {
                if (eAirwayGroup["eAirway.10"] <= _val[0]) {
                    ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eAirway.11", Description: "Validation Error: eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Date/Time Decision to Manage the Patient with an Invasive Airway, " })
                }
            };
            bAirwayPerformed = true;
            AirwayGroup["eAirway.11"] = _val[0];
            AirwayGroup["DateTimeInvasiveAirwayPlacementAttemptsAbandoned"] = _val[0];
        };

        if (bAirwayPerformed == true) {
            AirwayGroup.push(ConfirmationGroup);
            AirwayGroupArray.push(AirwayGroup);

        }
    };  //AirwayGroup Loop


    if (bAirwayPerformed == false) {
        eAirway = setNotApplicableAll()
    }
    else {
        eAirway.push(AirwayGroupArray);
    };
    return eAirway;

};

var setNotApplicableAll = function () {
    var _AirwayGroup = new Object();
    var _ConfirmationGroup = new Object();
    var _eAirway = new Object();
    if (isRequiredStateElement("eAirway.01") == true) {
        _AirwayGroup["eAirway.01"] = NIL_V3NOT_APPLICABLE;
    };

    if (isRequiredStateElement("eAirway.02") == true) {
        _ConfirmationGroup["eAirway.02"] = NIL_V3NOT_APPLICABLE;
    };

    if (isRequiredStateElement("eAirway.03") == true) {
        _ConfirmationGroup["eAirway.03"] = NIL_V3NOT_APPLICABLE;
    };

    if (isRequiredStateElement("eAirway.04") == true) {
        _ConfirmationGroup["eAirway.04"] = NIL_V3NOT_APPLICABLE;
    };

    if (isRequiredStateElement("eAirway.06") == true) {
        _ConfirmationGroup["eAirway.05"] = NIL_V3NOT_APPLICABLE;
    };

    if (isRequiredStateElement("eAirway.07") == true) {
        _ConfirmationGroup["eAirway.07"] = NIL_V3NOT_APPLICABLE;
    };

    if (isRequiredStateElement("eAirway.08") == true) {
        _ConfirmationGroup["eAirway.08"] = NIL_V3NOT_APPLICABLE;
    };

    if (isRequiredStateElement("eAirway.09") == true) {
        _ConfirmationGroup["eAirway.09"] = NIL_V3NOT_APPLICABLE;
    };

    _AirwayGroup.ConfirmationGroup = _ConfirmationGroup;
    _eAirway.eAirwayGroup = _AirwayGroup;
    return _eAirway;

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