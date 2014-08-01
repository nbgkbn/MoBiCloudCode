var ErrorList = [];
var v3NOT_REPORTING = "7701005";
var v3NOT_RECORDED = "7701003";
var v3NOT_APPLICABLE = "7701001";
var v2NOT_AVAILABLE = "-5";
var v2NOT_REPORTING = "-15";
var v2NOT_APPLICABLE = "-25"
var v2NOT_RECORDED = "-20";
var v2NOT_KNOWN = "-10";
var NIL_v3NOT_RECORDED = "NV=\"7701003\" xsi:nil=\"true\"/>";
var NIL_V3NOT_REPORTING = "NV=\"7701005\" xsi:nil=\"true\"/>";
var NIL_V3NOT_APPLICABLE = "NV=\"7701001\" xsi:nil=\"true\"/>";
var PN_REFUSED_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801019\"/>";
var PN_UNABLE_TO_COMPLETE_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801023\"/>";
var PN_FINDING_NOT_PRESENT_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801005\"/>";
var FAX = "PhoneNumberType=\"9913001\"";
var HOME = "PhoneNumberType=\"9913003\"";
var MOBILE = "PhoneNumberType=\"9913005\"";
var PAGER = "PhoneNumberType=\"9913007\"";
var WORK = "PhoneNumberType=\"9913009\"";
var PERSONALEMAIL = "EmailAddressType=\"9904001\"";
var WORKEMAIL = "EmailAddressType=\"9904003\"";
var KPH = "VelocityUnit=\"9921001\"";
var MPH = "VelocityUnit=\"9921003\"";
var DELTA_VELOCITY_ORDINAL = "DeltaVelocityOrdinal=";
var MPH = "VelocityUnit=\"9921003\"";


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

var getNEMSISSection = function (businessObject, sectionName)
    //Returns an array of index values for a given sectionName within a sectionObject
    // if sectionName does not exist within the sectionObject, return -1
{
    var _retValue = new Object();
    _retValue = "undefined"
    for (var d = 0; d < businessObject.length ; d++) {
        if (businessObject[d].attributes.name == sectionName) {
            _retValue = businessObject[d];
        }
    };
    return _retValue;
};


var seteInjury = function (businessObject) {
    //NEMSISEMSObject = complete NEMSIS Object from OLTP object
    //This function converts NEMSISEMSObject to both Version 2.2.1 and Version 3.3.4 NEMSIS Objects
    //Creates qualified JSON objects
    //Imposes localized business rules (within a given section/attribute)
    //If NEMSISObject does not contain this Section (isUndefined == true), function assigns appropriate
    //values to attribute/elements based upon State/Agency Configuration.
    var eInjury = new Object();
    var SeatGroup = new Object();
    var SeatGroupArray = new Array();
    var bHasInjury = false;
    var v2Array = [];


    var eInjuryObject = new Object()
    eInjuryObject = getNEMSISSection(businessObject, "eInjury")
    console.log(eInjuryObject)

    var elementList = "";
    elementList = eInjuryObject.attributes.elements;
   // console.log(elementList)

    //eInjury.01///////////////////

   // alert("If No Value in Injury.01, might set all content to Not Applicable?")
    _val = getValue(elementList, "eInjury.01");
    if (_val == null) {
        eInjury["eInjury.01"] = v3NOT_RECORDED;
        eInjury["CauseofInjury"] = v3NOT_RECORDED;
        v2Array.push({ section: "E10", element: "E10_01", val: v2NOT_RECORDED });
    }
    else {
        var arr1 = [];
        var arr2 = [];
        var arr3 = [];
        for (var i = 0; i < _val.length; i++) {
            arr1.push(_val[i]);
            arr2.push(setV2("eInjury.01", _val[i]));
            arr3.push(setCodeText("eInjury.01", _val[i]));
        };
        bHasInjury = true;
        eInjury["eInjury.01"] = arr1.slice(0);
        eInjury["CauseofInjury"] = arr3.slice(0);
        v2Array.push({ section: "E10", element: "E10_01", val: arr2.slice(0) });
    };
    
    //eInjury.02///////////////////
    _val = getValue(elementList, "eInjury.02");
    if (_val == null) {
        if (isRequiredStateElement("eInjury.02")) {
            eInjury["eInjury.01"] = v3NOT_RECORDED;
            eInjury["MechanismofInjury"] = v3NOT_RECORDED;
            v2Array.push({ section: "E10", element: "E10_03", val: v2NOT_RECORDED });
        }
        else {
            eInjury["eInjury.02"] = v3NOT_REPORTING;
            eInjury["MechanismofInjury"] = v3NOT_REPORTING;
            v2Array.push({ section: "E10", element: "E10_03", val: v2NOT_REPORTING });
        }
    }
    else {
        var arr1 = [];
        var arr2 = [];
        var arr3 = [];
        for (var i = 0; i < _val.length; i++) {
            arr1.push(_val[i]);
            arr2.push(setV2("eInjury.02", _val[i]));
            arr3.push(setCodeText("eInjury.02", _val[i]));
        };
        bHasInjury = true;
        eInjury["MechanismofInjury"] = arr3.slice(0);
        eInjury["eInjury.02"] = arr1.slice(0);
        v2Array.push({ section: "E10", element: "E10_03", val: arr2.slice(0) });
    };

    
    //eInjury.03///////////////////
    _val = getValue(elementList, "eInjury.03");
    if (_val == null) {
        if (isRequiredStateElement("eInjury.03")) {
            eInjury["eInjury.03"] = v3NOT_RECORDED;
            eInjury["TraumaCenterCriteria"] = v3NOT_RECORDED;
        }
    }
    else {
        var arr1 = [];
        var arr3 = [];
        for (var i = 0; i < _val.length; i++) {
            arr1.push(_val[i]);
            arr3.push(setCodeText("eInjury.03", _val[i]));
        };
        bHasInjury = true;
        eInjury["eInjury.03"] = arr1.slice(0);
        eInjury["TraumaCenterCriteria"] = arr3.slice(0);
    };


    //eInjury.04///////////////////
    _val = getValue(elementList, "eInjury.04");
    PNValue = getPertinentNegative("eInjury.04")
    if (PNValue != null) {
        if (PNValue == "8801005") {
            eInjury["eInjury.04"] = PN_FINDING_NOT_PRESENT_IS_NILLABLE;
            eInjury["VehicularPedestrianorOtherInjuryRiskFactor"] = "8801005";
            v2Array.push({ section: "E10", element: "E10_04", val: v2NOT_RECORDED });
        }
    }
    if (_val == null) {
        eInjury["eInjury.04"] = v3NOT_RECORDED;
        eInjury["VehicularPedestrianorOtherInjuryRiskFactor"] = v3NOT_RECORDED;
        v2Array.push({ section: "E10", element: "E10_04", val: v2NOT_RECORDED });
    }
    else {
        var arr1 = [];
        var arr2 = [];
        var arr3 = [];
        for (var i = 0; i < _val.length; i++) {
            arr1.push(_val[i]);
            arr2.push(setV2("eInjury.04", _val[i]));
            arr3.push(setCodeText("eInjury.04", _val[i]));
        };
        bHasInjury = true;
        eInjury["eInjury.04"] = arr1.slice(0);
        eInjury["VehicularPedestrianorOtherInjuryRiskFactor"] = arr3.slice(0);
        v2Array.push({ section: "E10", element: "E10_04", val: arr2.slice(0) });
    };

    ///eInjury.05////////////
    _val = getValue(elementList, "eInjury.05");
    if (_val == null) {
        if (isRequiredStateElement("eInjury.05")) {
            eInjury["eInjury.05"] = null;
            eInjury["MainAreaoftheVehicleImpactedbytheCollision"] = null;
            v2Array.push({ section: "E10", element: "E10_05", val: v2NOT_RECORDED });
        }
    }
    else {
        bHasInjury = true;
        eInjury["eInjury.05"] = _val[0];
        eInjury["MainAreaoftheVehicleImpactedbytheCollision"] = _val[0];
        v2Array.push({ section: "E10", element: "E10_05", val: setV2("eInjury.05", _val) });
    };

    //eInjury.06///////////
    _val = getValue(elementList, "eInjury.06");
    if (_val == null) {
        eInjury["eInjury.06"] = null;
        eInjury["LocationofPatientinVehicle"] = null;
        v2Array.push({ section: "E10", element: "E10_06", val: null });

    }
    else {
        bHasInjury = true;
        eInjury["eInjury.06"] = _val[0];
        eInjury["LocationofPatientinVehicle"] = _val[0];
        v2Array.push({ section: "E10", element: "E10_06", val: setV2("eInjury.06", _val) });
    };

    //eInjury.07/////////
    _val = getValue(elementList, "eInjury.07");
    if (_val == null) {
        if (isRequiredStateElement("eInjury.07")) {
            eInjury["eInjury.07"] = v3NOT_RECORDED;
            eInjury["UseofOccupantSafetyEquipment"] = v3NOT_RECORDED;
            v2Array.push({ section: "E10", element: "E10_08", val: v2NOT_RECORDED });
        }
        else {
            eInjury["eInjury.07"] = v3NOT_REPORTING;
            eInjury["UseofOccupantSafetyEquipment"] = NOT_REPORTING;
            v2Array.push({ section: "E10", element: "E10_08", val: v2NOT_REPORTING });
        }
    }
    else {
        var arr1 = [];
        var arr2 = [];
        var arr3 = [];
        for (var i = 0; i < _val.length; i++) {
            arr1.push(_val[i]);
            arr2.push(setV2("eInjury.07", _val[i]));
            arr3.push(setCodeText("eInjury.07", _val[i]));
        };
        bHasInjury = true;
        eInjury["eInjury.07"] = arr1.slice(0);
        eInjury["UseofOccupantSafetyEquipment"] = arr3.slice(0);
        v2Array.push({ section: "E10", element: "E10_08", val: arr2.slice(0) });
    };

    //eInjury.08//////////
    _val = getValue(elementList, "eInjury.08");
    if (_val == null) {
        eInjury["eInjury.08"] = null;
        eInjury["AirbagDeployment"] = null;
        v2Array.push({ section: "E10", element: "E10_09", val: v2NOT_KNOWN });
    }
    else {

        var arr1 = [];
        var arr2 = [];
        var arr3 = [];
        for (var i = 0; i < _val.length; i++) {
            arr1.push(_val[i]);
            arr2.push(setV2("eInjury.08", _val[i]));
            arr3.push(setCodeText("eInjury.08", _val[i]));
        };
        bHasInjury = true;
        v2Array.push({ section: "E10", element: "E10_09", val: arr2.slice(0) });
        eInjury["eInjury.08"] = arr1.slice(0);
        eInjury["AirbagDeployment"] = arr3.slice(0);
    };


    //eInjury.09/////////////
    _val = getValue(elementList, "eInjury.09");
    if (_val == null) {
        eInjury["eInjury.09"] = null;
        eInjury["HeightofFall"] = null;
        v2Array.push({ section: "E10", element: "E10_10", val: null });
    }
    else {
        bHasInjury = true;
        eInjury["eInjury.09"] = _val[0];
        eInjury["HeightofFall"] = _val[0];
        v2Array.push({ section: "E10", element: "E10_10", val: _val[0] });
    };

    //eInjury.10///////////////
    _val = getValue(elementList, "eInjury.10");
    if (_val == null) {
        eInjury["eInjury.10"] = null;
        eInjury["OSHAPersonalProtectiveEquipmentUsed"] = null;
    }
    else {
        var arr1 = [];
        var arr3 = [];
        for (var i = 0; i < _val.length; i++) {
            arr1.push(_val[i]);
            arr3.push(setCodeText("eInjury.10", _val[i]));
        };
        bHasInjury = true;
        eInjury["OSHAPersonalProtectiveEquipmentUsed"] = arr3.slice(0);
        eInjury["eInjury.10"] = arr1.slice(0);
    };

    //eInjury.11///////
    _val = getValue(elementList, "eInjury.11");
    if (_val == null) {
        eInjury["eInjury.11"] = null;
        eInjury["ACNSystemCompanyProvidingACNData"] = null;
    }
    else {
        bHasInjury = true;
        eInjury["ACNSystemCompanyProvidingACNData"] = _val[0];
        eInjury["eInjury.11"] = _val[0];
    };

    //////////////////////////////

    //alert("PhoneNumber")

    //eInjury.12///////////
    _val = getValue(elementList, "eInjury.12");
    if (_val == null) {
        eInjury["eInjury.12"] = null;
        eInjury["ACNIncidentID"] = null;
    }
    else {
        bHasInjury = true;
        eInjury["eInjury.12"] = _val[0];
        eInjury["ACNIncidentID"] = _val[0];
    };

    //eInjury.13/////////////
    _val = getValue(elementList, "eInjury.13");
    if (_val == null) {
        eInjury["eInjury.13"] = null;
        eInjury["ACNCallBackPhoneNumber"] = null;
    }
    else {
        sPatHomeNum = "";
        var arr1 = [];
        var arr2 = [];
        for (var i = 0; i < _val.length; i++) {
            var PhoneNumberType = setPhoneNumberType("ePatient.18", _val[i]);

            if (PhoneNumberType == "9913001") {
                arr1.push("FAX  " + _val[i]);
                arr2.push("9913001  " + _val[i]);
            }
            else if (PhoneNumberType == "9913003") {
                arr1.push("HOME  " + _val[i]);
                arr1.push("9913003  " + _val[i]);
                sPatNum = _val[i];

            }
            else if (PhoneNumberType == "9913005") {
                arr1.push("MOBILE  " + _val[i]);
                arr2.push("9913005  " + _val[i]);
            }
            else if (PhoneNumberType == "9913007") {
                arr1.push("PAGER " + _val[i]);
                arr2.push("9913007 " + _val[i]);
            }
            else if (PhoneNumberType == "9913009") {
                arr1.push("WORK " + _val[i]);
                arr2.push("9913009 " + _val[i]);
            }
            else {
                arr1.push(_val[i]);
                arr2.push(_val[i]);
            }
        };
        if (sPatHomeNum == null) {
            for (var i = 0; i < _val.length; i++) {
                if (val[i] != null) {
                    sPatHomeNum = _val[i]

                }
            }
        };
        bHasInjury = true;
        eInjury["eInjury.10"] = arr1.slice(0);
        eInjury["ACNCallBackPhoneNumber"] = arr2.slice(0);
    };
    //eInjury.14///////////////
    _val = getValue(elementList, "eInjury.14");
    if (_val == null) {
        eInjury["eInjury.14"] = null;
        eInjury["DateTimeofACNIncident"] = null;
    }
    else {
        bHasInjury = true;
        eInjury["eInjury.14"] = _val[0];
        eInjury["DateTimeofACNIncident"] = _val[0];
    };

    //eInjury.15//////////////  
    _val = getValue(elementList, "eInjury.15");
    if (_val == null) {
        eInjury["eInjury.15"] = null;
        eInjury["ACNIncidentLocation"] = null;

    }
    else {
        bHasInjury = true;
        eInjury["ACNIncidentLocation"] = _val[0];
        eInjury["eInjury.15"] = _val[0];
    };

    //eInjury.16//////////////
    _val = getValue(elementList, "eInjury.16");
    if (_val == null) {
        eInjury["eInjury.16"] = null;
        eInjury["ACNIncidentVehicleBodyType"] = null;
    }
    else {
        bHasInjury = true;
        eInjury["eInjury.16"] = _val[0];
        eInjury["ACNIncidentVehicleBodyType"] = _val[0];
    };

    //eInjury.17//////////////
    _val = getValue(elementList, "eInjury.17");
    if (_val == null) {
        eInjury["ACNIncidentVehicleManufacturer"] = null;
        eInjury["eInjury.17"] = null;

    }
    else {
        bHasInjury = true;
        eInjury["eInjury.17"] = _val[0];
        eInjury["ACNIncidentVehicleManufacturer"] = _val[0];
    };

    //eInjury.18//////////////
    _val = getValue(elementList, "eInjury.18");
    if (_val == null) {
        eInjury["eInjury.18"] = null;
        eInjury["ACNIncidentVehicleMake"] = null;
    }
    else {
        bHasInjury = true;
        eInjury["ACNIncidentVehicleMake"] = _val[0];
        eInjury["eInjury.18"] = _val[0];
    };

    //eInjury.19//////////////
    _val = getValue(elementList, "eInjury.19");
    if (_val == null) {
        eInjury["eInjury.19"] = null;
        eInjury["ACNIncidentVehicleModel"] = null;
    }
    else {
        bHasInjury = true;
        eInjury["eInjury.19"] = _val[0];
        eInjury["ACNIncidentVehicleModel"] = _val[0];
    };


    //eInjury.20//////////////
    _val = getValue(elementList, "eInjury.20");
    if (_val == null) {
        eInjury["eInjury.20"] = null;
        eInjury["ACNIncidentVehicleModelYear"] = null;
    }
    else {
        bHasInjury = true;
        eInjury["ACNIncidentVehicleModelYear"] = _val[0];
        eInjury["eInjury.20"] = _val[0];
    };

    //eInjury.21//////////////
    _val = getValue(elementList, "eInjury.21");
    if (_val == null) {
        eInjury["eInjury.21"] = null;
        eInjury["ACNIncidentMultipleImpacts"] = null;
    }
    else {
        bHasInjury = true;
        eInjury["eInjury.21"] = _val[0];
        eInjury["ACNIncidentMultipleImpacts"] = _val[0];
    };


    //alert("Deltas")
    //eInjury.22//////////////
    _val = getValue(elementList, "eInjury.22");
    if (_val == null) {
        eInjury["eInjury.22"] = null;
        eInjury["ACNIncidentDeltaVelocity"] = null;
    }
    else {
        var arr1 = [];
        for (var i = 0; i < _val.length; i++) {
            _velocityUnit = getVelocityUnit(_val[i]);
            arr1.push(_val[i]);
            if (_velocityUnit == "9921001") {
                if (_deltaVelocityUnit != null) {
                    arr1[i].push("KPH" + "||" + _val[i]);
                }
                else {
                    arr1[i].push("MPH" + "||" + _val[i]);
                }
            }
            else {
                if (_deltaVelocityUnit != null) {
                    _retArray.push('/t/t' + "<eInjury.22" + MPH + ">/" + _val[0] + "</eInjury.22")
                    CollisionGroup["eInjury.22"] = MPH + _val[0];
                    arr1[i] = MPH + " " + DELTA_VELOCITY_ORDINAL + "/" + _deltaVelocity + "/" + _val[0];
                }
                else {
                    _retArray.push('/t/t' + "<eInjury.22" + MPH + ">/" + _val[0] + "</eInjury.22>")
                    CollisionGroup["eInjury.22"] = MPH + _val[0];
                }
            }
        };
        bHasInjury = true;
        eInjury["eInjury.22"] = arr1.slice(0);
        eInjury["ACNIncidentDeltaVelocity"] = arr1.slice(0);
    };



    //eInjury.23///////////
    _val = getValue(elementList, "eInjury.23");
    if (_val == null) {
        eInjury["eInjury.22"] = null;
        eInjury["ACNHighProbabilityofInjury"] = null;
    }
    else {
        bHasInjury = true;
        eInjury["eInjury.23"] = _val[0];
        eInjury["ACNHighProbabilityofInjury"] = _val[0];
    };

    //eInjury.24/////////////
    _val = getValue(elementList, "eInjury.24");
    if (_val == null) {
        eInjury["eInjury.22"] = null;
        eInjury["ACNHighProbabilityofInjury"] = null;
    }
    else {
        bHasInjury = true;
        eInjury["eInjury.24"] = _val[0];
        eInjury["ACNHighProbabilityofInjury"] = _val[0];
    };

    //eInjury.25////////
    _val = getValue(elementList, "eInjury.25");
    if (_val == null) {
        eInjury["ACNIncidentRollover"] = null;
        eInjury["eInjury.25"] = null;
    }
    else {
        bHasInjury = true;
        eInjury["ACNIncidentRollover"] = _val[0];
        eInjury["eInjury.25"] = _val[0];
    };


    _sectionIndex = getSectionIndex(eInjuryObject.sections.attributes, "eInjury.SeatGroup");
    for (var x = 0; x < _sectionIndex.length; x++) {
        _elementList = businessObject.sections[i].attributes.elements;


        //eInjury.26////////                        
        _val = getValue(_elementList, "eInjury.26");
        if (_val == null) {
            SeatGroup["eInjury.26"] = null;
            SeatGroup["ACNVehicleSeatLocation"] = null;
        }
        else {
            bHasInjury = true;
            SeatGroup["eInjury.26"] = _val[0];
            SeatGroup["ACNVehicleSeatLocation"] = _val[0];
        };



        //eInjury.27////////
        _val = getValue(_elementList, "eInjury.27");
        if (_val == null) {
            SeatGroup["SeatOccupied"] = null;
            SeatGroup["eInjury.27"] = null;

        }
        else {
            bHasInjury = true;
            SeatGroup["eInjury.27"] = _val[0];
            if (_val[0] == "Y") {
                SeatGroup["SeatOccupied"] = "Yes";
            };
            if (_val[0] == "N") {
                SeatGroup["SeatOccupied"] = "No";
            };

        };

        //eInjury.28////////
        _val = getValue(_elementList, "eInjury.29");
        if (_val == null) {
            SeatGroup["eInjury.28"] = null;
            SeatGroup["ACNIncidentSeatbeltUse"] = null;
        }
        else {
            bHasInjury = true;
            SeatGroup["ACNIncidentSeatbeltUse"] = _val[0];
            SeatGroup["eInjury.29"] = _val[0];
        };

    }
   
    console.log(eInjury)
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

var getPertinentNegative = function(elementID)
{
    return null;
}
function SetNotApplicableAll() {
    var eInjury = new Object();
    v2Array = [];
    eInjury["eInjury.01"] = v3NOT_APPLICABLE
    v2Array.push({ section: "E10", element: "E10_01", val: v2NOT_APPLICABLE });


    eInjury["eInjury.02"] = v3NOT_APPLICABLE
    v2Array.push({ section: "E10", element: "E10_03", val: v2NOT_APPLICABLE });


    eInjury["eInjury.03"] = v3NOT_APPLICABLE

    eInjury["eInjury.04"] = v3NOT_APPLICABLE
    v2Array.push({ section: "E10", element: "E10_04", val: v2NOT_APPLICABLE });


    eInjury["eInjury.05"] = v3NOT_APPLICABLE
    v2Array.push({ section: "E10", element: "E10_05", val: v2NOT_APPLICABLE });


    eInjury["eInjury.06"] = v3NOT_APPLICABLE
    v2Array.push({ section: "E10", element: "E10_06", val: v2NOT_APPLICABLE });

    eInjury["eInjury.07"] = v3NOT_APPLICABLE
    v2Array.push({ section: "E10", element: "E10_08", val: v2NOT_APPLICABLE });


    eInjury["eInjury.08"] = v3NOT_APPLICABLE
    v2Array.push({ section: "E10", element: "E10_09", val: v2NOT_APPLICABLE });


    eInjury["eInjury.09"] = v3NOT_APPLICABLE
    v2Array.push({ section: "E10", element: "E10_10", val: v2NOT_APPLICABLE });
    eInjury.V2Array = v2Array;
    return eInjury;

};
function setV2(NEMSISElementNumber, valueArray) {
    //    console.log(NEMSISElementNumber);
    var _retArray = [];
    //    console.log(valueArray);
    switch (NEMSISElementNumber) {
        case "eInjury.01":

            if (eInjury01[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eInjury01[valueArray[0]]);
            }
            break;
        case "eInjury.02":
            for (i = 0; i < valueArray.length; i++) {
                if (eInjury02[valueArray[i]] == undefined) {
                    _retArray.push(valueArray[i] + "UNDEFINED");
                }
                else {
                    _retArray.push(eInjury02[valueArray[i]]);
                }
            }
            break;
        case "eInjury.04":

            if (eInjury04[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eInjury04[valueArray[0]]);
            }
            break;
        case "eInjury.05":

            if (eInjury05[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eInjury05[valueArray[0]]);
            }
            break;

        case "eInjury.06":
            alert("DO IT");
            if (eInjury06[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eInjury06[valueArray[0]]);
            }
            break;
        case "eInjury.07":
            if (eInjury07[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eInjury07[valueArray[0]]);
            }
            break;
        case "eInjury.08":
            if (eInjury08[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eInjury08[valueArray[0]]);
            }
            break;


        default:
            _retArray.push(NEMSISElementNumber = " version 2 not found");
    }

    return _retArray;

};

var eInjury01 = {
    "V95.9": "9500",
    "V97": "9500",
    "V97.2": "9500",
    "V95.9": "9500",
    "V96.9": "9500",
    "V00.8": "9505",
    "V19.3": "9505",
    "V19.9": "9505",
    "W50": "9510",
    "W54": "9510",
    "W55": "9510",
    "W53": "9510",
    "W64": "9510",
    "T50.90": "9515",
    "T64": "9515",
    "T58.9": "9515",
    "T63": "9515",
    "T55": "9515",
    "T51.9": "9515",
    "T59.9": "9515",
    "T57.9": "9515",
    "T62.9": "9515",
    "T60.9": "9515",
    "T61.9": "9515",
    "T65.9": "9515",
    "T54.9": "9515",
    "T53.9": "9515",
    "T56.9": "9515",
    "T52.9": "9515",
    "T76.9": "9520",
    "W65": "9525",
    "W69": "9525",
    "V92": "9525",
    "V90": "9525",
    "V92": "9525",
    "V90": "9525",
    "X38": "9525",
    "X37.0": "9525",
    "X71.9": "9525",
    "W74": "9525",
    "Y21.9": "9525",
    "W85": "9535",
    "T75.4": "9535",
    "X37.2": "9540",
    "W93": "9540",
    "X31": "9540",
    "X11": "9545",
    "X11.0": "9545",
    "X19": "9545",
    "X12": "9545",
    "X18": "9545",
    "W92": "9545",
    "X30": "9545",
    "X32": "9545",
    "X77.9": "9545",
    "X35": "9545",
    "Y27.9": "9550",
    "W52": "9550",
    "X34": "9550",
    "W10.9": "9550",
    "W06": "9550",
    "W07": "9550",
    "W15": "9550",
    "W05": "9550",
    "W18.1": "9550",
    "W08": "9550",
    "W14": "9550",
    "W13.9": "9550",
    "W13.2": "9550",
    "W13.4": "9550",
    "W18.2": "9550",
    "W11": "9550",
    "W09": "9550",
    "W12": "9550",
    "W01": "9550",
    "W04": "9550",
    "W16": "9550",
    "Y30": "9550",
    "Y31": "9550",
    "X75": "9550",
    "X80": "9550",
    "17": "9550",
    "18": "9550",
    "W18.4": "9550",
    "V00.31": "9550",
    "V00.32": "9550",
    "W00.9": "9550",
    "X37.1": "9550",
    "W39": "9555",
    "W38": "9555",
    "W40.9": "9555",
    "X02": "9555",
    "X03": "9555",
    "X04": "9555",
    "X06": "9555",
    "X00": "9555",
    "X01": "9555",
    "X75": "9555",
    "X75": "9555",
    "W34": "9565",
    "W32": "9565",
    "Y24.9": "9565",
    "X74.9": "9570",
    "T75.0": "9575",
    "Y25": "9580",
    "X14": "9580",
    "X10": "9580",
    "X17": "9580",
    "X16": "9580",
    "X15": "9580",
    "W94": "9580",
    "W42": "9580",
    "W89.9": "9580",
    "W28": "9580",
    "V00.1": "9580",
    "V00.812": "9580",
    "T71.23": "9585",
    "T71.22": "9585",
    "T71.13": "9585",
    "T71.29": "9585",
    "T71.21": "9585",
    "T71.16": "9585",
    "T71.1": "9585",
    "T71.19": "9585",
    "T71.12": "9585",
    "T71.15": "9585",
    "T71.14": "9585",
    "T71.11": "9585",
    "T71.20": "9585",
    "T71.9": "9585",
    "X36": "9585",
    "W99": "9585",
    "W22.8": "9585",
    "W21": "9585",
    "V69.3": "9590",
    "V69.9": "9590",
    "V59.3": "9590",
    "V59.9": "9590",
    "V39.3": "9590",
    "V39.9": "9590",
    "V81.9": "9590",
    "V82.9": "9590",
    "V81.9": "9590",
    "V86.99": "9590",
    "V84.9": "9590",
    "V85.9": "9590",
    "V83.9": "9590",
    "V79.3": "9595",
    "V79.9": "9595",
    "V49.3": "9595",
    "V49.9": "9595",
    "Y32": "9595",
    "X82": "9595",
    "V40.9": "9595",
    "V86.31": "9595",
    "V70.9": "9595",
    "V60.9": "9595",
    "V86.94": "9595",
    "V86.34": "9595",
    "V86.39": "9595",
    "V50.9": "9595",
    "V86.92": "9595",
    "V86.32": "9595",
    "V30.9": "9595",
    "V99": "9595",
    "V29.3": "9600",
    "V29.9": "9600",
    "V20.9": "9600",
    "V89.9": "9605",
    "V80.9": "9610",
    "V00.8": "9610",
    "V00.8": "9610",
    "Y03.0": "9610",
    "V00.2": "9610",
    "X81": "9610",
    "V19.3": "9610",
    "V19.9": "9610",
    "V03.0": "9610",
    "V03.1": "9610",
    "V03.9": "9610",
    "V04.0": "9610",
    "V04.1": "9610",
    "V04.9": "9610",
    "V06.9": "9610",
    "V01": "9610",
    "V05.9": "9610",
    "V02.9": "9610",
    "V09.9": "9610",
    "V00.0": "9610",
    "V00.38": "9610",
    "V00.13": "9610",
    "W88": "9615",
    "W90": "9615",
    "X02.1": "9625",
    "X03.1": "9625",
    "X00.1": "9625",
    "X01.1": "9625",
    "Y26": "9625",
    "X76": "9625",
    "W23": "9630",
    "Y29": "9630",
    "W25": "9630",
    "Y28.9": "9630",
    "W45": "9630",
    "Y35": "9630",
    "X78.9": "9630",
    "W49.0": "9630",
    "W46": "9635",
    "X79": "9635",
    "X83": "9635",
    "Y37.9": "9635",
    "Y36.9": "9635",
    "T14.91": "9635",
    "Y38": "9635",
    "Y38.6": "9635",
    "Y38.7": "9635",
    "W26": "9640",
    "W20": "9640",
    "X37.9": "9640",
    "W24": "9645",
    "T50.90": "9645",
    "W60": "9650",
    "V93": "9650",
    "V91": "9650",
    "V94.9": "9650",
    "Y04.1": "1885",
    "Y03.0": "9595",
    "Y00": "9640",
    "Y04": "9635",
    "Y03": "9600",
    "X92.9": "9635",
    "Y04.1": "1885",
    "Y08": "9635",
    "Y01": "9635",
    "Y02": "9635",
    "X97": "9635",
    "X96.9": "9635",
    "X95.9": "9635",
    "X98.9": "9635",
    "X99.9": "9635",
    "Y09": "9635",
    "Y38": "9635",
    "Y38.6": "9635",
    "X74": "9570",
    "X75": "9625",
    "X74.9": "9570",
    "X76": "9625",
    "X77.9": "9625",
    "X78.9": "9635",
    "X79": "9640",
    "X80": "9550",
    "X81": "9595",
    "X82": "9595",
    "X83": "-10",
    "T14.91": "-10"
};
var eInjury02 = {
    "2902001": "2035",
    "2902003": "2040",
    "2902005": "2045",
    "2902007": "2050"
};

var eInjury04 =
        {
            "2904001": "2085",
            "2904003": "-10",
            "2904005": "-10",
            "2904007": "2060",
            "2904009": "2065",
            "2904011": "2075",
            "2904013": "2055",
            "2904015": "-10",
            "2904017": "-10",
            "2904019": "-10",
            "2904021": "-10",
            "2904023": "-10"
        };
var eInjury05 = {
    "0": "2140",
    "1": "2125",
    "2": "2135",
    "3": "2135",
    "4": "2135",
    "5": "2130",
    "6": "2105",
    "7": "2115",
    "8": "2120",
    "9": "2120",
    "10": "2120",
    "11": "2110",
    "12": "2100"
};

/*
  var eInjury06 = {
      if(eInjury06 == "2906001")
      {
          "E10_06":"1",
          "E10_07":"2145"
  }
};

  if(eInjury06 = "2906003")
{
      "E10_06":"1",
      "E10_07":"2155"
}

  if(eInjury06 = "2906005")
{
      "E10_06":"1"
      "E10_07":"2165"
}

  if(eInjury06 = "2906007")
{
      "E10_06":"50"
      "E10_07":"2160"
}

  if(eInjury06 = "2906009")
{
      "E10_06":"50"
      "E10_07":"2160"
}


  if(eInjury06 = "2906011")
{
      "E10_06":"50"
      "E10_07":"2160"
}

  if(eInjury06 = "2906013")
{
      "E10_06":"2"
      "E10_07":"2150"
}

  if(eInjury06 = "2906015")
{
      "E10_06":"2"
      "E10_07":"2155"
}

   if(eInjury06 = "2906017")
{
      "E10_06":"2"
      "E10_07":"2165"
}

  if(eInjury06 = "2906019")
{
      "E10_06":"50"
      "E10_07":"2160"
}

  if(eInjury06 = "2906021")
{
      "E10_06":"3"
      "E10_07":"2150"
}
  if(eInjury06 = "2906023")
{
      "E10_06":"3"
      "E10_07":"2155"
}

  if(eInjury06 = "2906023")
{
      "E10_06":"3"
      "E10_07":"2165"
}

  if(eInjury06 = "2906023")
{
      "E10_06":"50"
      "E10_07":"2160"
}

  if(eInjury06 = "2906023")
{
      "E10_06":"50"
      "E10_07":"-10"
}
*/

var eInjury07 = {
    "2907001": "2170",
    "2907003": "2175",
    "2907005": "2180",
    "2907007": "2170",
    "2907009": "2170",
    "2907015": "2187",
    "2907017": "2190",
    "2907019": "2195",
    "2907021": "2200",
    "2907027": "2210",
    "2907029": "2185",
    "2907031": "2210"
};

var eInjury08 = {
    "2908001": "2225",
    "2908003": "2230",
    "2908005": "2235",
    "2908007": "2220",
    "2908009": "2215"
};



var eInjury334_02 = {
    "2902001": "Blunt",
    "2902003": "Burn",
    "2902005": "Other",
    "2902007": "Penetrating"
};
var eInjury334_03 = {
    "2903001": "Amputation proximal to wrist or ankle",
    "2903003": "Crushed; degloved; mangled; or pulseless extremity",
    "2903005": "Chest wall instability or deformity (e.g.; flail chest)",
    "2903007": "Glasgow Coma Score < 14",
    "2903009": "Open or depressed skull fracture",
    "2903011": "Paralysis",
    "2903013": "Pelvic fractures",
    "2903015": "All penetrating injuries to  head; neck; torso; and extremities proximal to elbow or knee",
    "2903017": "Respiratory Rate  <10 or >29 breaths per minute (<20 in infants aged <1 year) or need for ventilatory support",
    "2903019": "Systolic Blood Pressure <90 mmHg",
    "2903021": "Two or more proximal long-bone fractures"
};

var eInjury334_04 = {
    "2904001": "Auto v. Pedestrian/Bicyclist Thrown; Run Over; or > 20 MPH Impact",
    "2904003": "Fall Adults: > 20 ft. (one story is equal to 10 ft.)",
    "2904005": "Fall Children: > 10 ft. or 2-3 times the height of the child",
    "2904007": "Crash Death in Same Passenger Compartment",
    "2904009": "Crash Ejection (partial or complete) from vehicle",
    "2904011": "Crash Intrusion; including roof: > 12 in. occupant site; > 18 in. any site",
    "2904013": "Crash Vehicle Telemetry Data (AACN) Consistent with High Risk of Injury",
    "2904015": "Motorcycle Crash > 20 MPH",
};

var eInjury334_06 = {
    "2906001": "Front Seat-Left Side (or motorcycle driver)",
    "2906003": "Front Seat-Middle",
    "2906005": "Front Seat-Right Side",
    "2906007": "Passenger in other enclosed passenger or cargo area (non-trailing unit such as a bus; etc.)",
    "2906009": "Passenger in unenclosed passenger or cargo area (non-trailing unit such as a pickup; etc.)",
    "2906011": "Riding on Vehicle Exterior (non-trailing unit)",
    "2906013": "Second Seat-Left Side (or motorcycle passenger)",
    "2906015": "Second Seat-Middle",
    "2906017": "Second Seat-Right Side",
    "2906019": "Sleeper Section of Cab (truck)",
    "2906021": "Third Row-Left Side (or motorcycle passenger)",
    "2906023": "Third Row-Middle",
    "2906025": "Third Row-Right Side",
    "2906027": "Trailing Unit",
    "2906029": "Unknown"
};

var eInjury334_07 = {
    "2907001": "Child Booster Seat",
    "2907003": "Eye Protection",
    "2907005": "Helmet Worn",
    "2907007": "Infant Car Seat Forward Facing",
    "2907009": "Infant Car Seat Rear Facing",
    "2907011": "Lap Belt With Shoulder Belt",
    "2907013": "Lap Belt Without Shoulder Belt",
    "2907015": "None",
    "2907017": "Other",
    "2907019": "Personal Floatation Device",
    "2907021": "Protective Clothing",
    "2907023": "Protective Non-Clothing Gear",
    "2907025": "Shoulder Belt"
};
var eInjury334_08 = {
    "2908001": "Airbag Deployed Front",
    "2908003": "Airbag Deployed Side",
    "2908005": "Airbag Deployed Other (knee; Air belt; etc.)",
    "2908007": "No Airbag Deployed",
    "2908009": "No Airbag Present",
    "2908011": "Other"
};
var eInjury334_10 = {
    "2910001": "Eye and Face Protection",
    "2910003": "Foot Protection",
    "2910005": "Head Protection",
    "2910007": "Hearing Protection",
    "2910009": "Respiratory Protection",
    "2910011": "Safety Belts; lifelines; and lanyards",
    "2910013": "Safety Nets"
};

var eInjury334_21 = {
    "9923001": "No",
    "9923003": "Yes"
};

var eInjury334_23 = {
    "9923001": "No",
    "9923003": "Yes"
};
var eInjury334_25 = {
    "Y": "Yes",
    "N": "No"
};

var eInjury334_26 = {
    "2926001": "Driver Front Seat",
    "2926003": "Front Row Middle Seat",
    "2926005": "Passenger Front Seat",
    "2926007": "Second Row Left Seat",
    "2926009": "Second Row Middle Seat",
    "2926011": "Second Row Right Seat",
    "2926013": "Third Row Left Seat",
    "2926015": "Third Row Middle Seat",
    "2926017": "Third Row Right Seat"
};
var eInjury334_27 = {
    "Y": "Yes",
    "N": "No"
};
var eInjury334_28 = {
    "Y": "Yes",
    "N": "No"
};

var eInjury334_29 = {
    "Y": "Yes",
    "N": "No"
};
function setCodeText(NEMSISElementNumber, valueArray) {
    var _return = [];
    switch (NEMSISElementNumber) {
        case "eInjury.02":
            if (eInjury334_02[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eInjury334_02[valueArray];
            }
            break;
        case "eInjury.03":
            if (eInjury334_03[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eInjury334_03[valueArray];
            }
            break;

        case "eInjury.04":
            if (eInjury334_04[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eInjury334_04[valueArray];
            }
            break;

        case "eInjury.06":
            if (eInjury334_06[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eInjury334_06[valueArray];
            }
            break;

        case "eInjury.07":
            if (eInjury334_07[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eInjury334_07[valueArray];
            }
            break;

        case "eInjury.08":
            if (eInjury334_08[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eInjury334_08[valueArray];
            }
            break;

        case "eInjury.10":
            if (eInjury334_10[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eInjury334_10[valueArray];
            }
            break;

        case "eInjury.21":
            if (eInjury334_21[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eInjury334_21[valueArray];
            }
            break;

        case "eInjury.20":
            if (eInjury334_20[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eInjury334_20[valueArray];
            }
            break;

        case "eInjury.23":
            if (eInjury334_23[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eInjury334_23[valueArray];
            }
            break;

        case "eInjury.25":
            if (eInjury334_25[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eInjury334_25[valueArray];
            }
            break;


        case "eInjury.26":
            if (eInjury334_26[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eInjury334_26[valueArray];
            }
            break;

        case "eInjury.27":
            if (eInjury334_27[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eInjury334_27[valueArray];
            }
            break;

        case "eInjury.28":
            if (eInjury334_28[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eInjury334_28[valueArray];
            }
            break;
        case "eInjury.29":
            if (eInjury334_29[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eInjury334_29[valueArray];
            }
            break;
        default:
            _return = " UNDEFINED";
    }
    return _return;

};
/*

  <!-- This pattern validates consistency between the presence of possible injury and the 
       presence of elements that are only collected in possible injury cases. The elements in 
       the eInjury section should only be recorded when (and only when) eSituation.02 Possible 
       Injury is "Yes". -->

  <sch:title>When eSituation.02 Possible Injury is "Yes", elements in the eInjury section are recorded, and when eSituation.02 Possible Injury is not "Yes", elements in the eInjury section are not recorded.</sch:title>

  <sch:rule id="nemSch_consistency_eInjury_all" context="nem:eInjury[../nem:eSituation/nem:eSituation.02 = '9922005']">

    <!-- This rule fires when eSituation.02 Possible Injury is "Yes". -->

        <!-- Flag each of the following elements if it is empty. -->

    <sch:let name="eInjury.01" value="if(nem:eInjury.01 != '') then '' else key('nemSch_key_elements', 'eInjury.01', $nemSch_elements)"/>

    <sch:let name="nemsisElements" value="(../nem:eSituation/nem:eSituation.02, (nem:eInjury.01)[. = ''])"/>

    <!-- Assert that none of the elements above should be flagged. If the assert fails, list the flagged elements.  -->

    <sch:assert id="nemSch_consistency_eInjury_all_present" role="[WARNING]" diagnostics="nemsisDiagnostic" test="not($eInjury.01)">
      When <sch:value-of select="key('nemSch_key_elements', 'eSituation.02', $nemSch_elements)"/> is "Yes", the following information related to injury should be recorded:
      <sch:value-of select="string-join(($eInjury.01)[. != ''], ', ')"/>
    </sch:assert>

  </sch:rule>

  <sch:rule id="nemSch_consistency_eInjury_eSituation.02" context="nem:eInjury[some $element in .//* satisfies normalize-space($element) != '']">

    <!-- This rule fires when eSituation.02 Possible Injury is not "Yes" and the eInjury section has a value recorded in any element. -->

    <sch:let name="nemsisElements" value="(../nem:eSituation/nem:eSituation.02, *[. != ''])"/>

    <sch:assert id="nemSch_consistency_eInjury.01_yes" role="[WARNING]" diagnostics="nemsisDiagnostic" test="false()">
      Information related to injury should be recorded only when <sch:value-of select="key('nemSch_key_elements', 'eSituation.02', $nemSch_elements)"/> is "Yes".


 
 
 */