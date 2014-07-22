var ErrorList = [];
var v3NOT_REPORTING = " NV=\"7701005\"";
var v3NOT_RECORDED = " NV=\"7701003\"";
var v2NOT_AVAILABLE = "-5";
var v2NOT_REPORTING = "-15";
var v2NOT_APPLICABLE = "-25"
var v2NOT_RECORDED = "-20";
var v2NOT_KNOWN = "-10";
var NIL_V3NOT_RECORDED =  "NV=\"7701003\" xsi:nil=\"true\"/>" ;
var NIL_V3NOT_REPORTING = "NV=\"7701005\" xsi:nil=\"true\"/>" ;
var NIL_V3NOT_APPLICABLE ="NV=\"7701001\" xsi:nil=\"true\"/>" ;
var PN_REFUSED_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801019\"/>";
var PN_UNABLE_TO_COMPLETE_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801023\"/>";
var PN_FINDING_NOT_PRESENT_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801005\"/>";

var eVitals = new Object;
var _retArray = [];
var OLAPArray = [];
var _PNValue = "";

_retArray.push("<eVitals>" + '\n');
OLAPArray.push("<eVitals>" + '\n');
var seteVitals = function (businessObject) {
    var isNotApplicableFlag = true;  //once I have real data, set to False    

    if (typeof businessObject["eVitals.VitalsGroup"] != undefined) {

        for (var xx = 0; xx < businessObject["eVitals.VitalsGroup"].length; xx++) {
            console.log(businessObject["eVitals.VitalsGroup"][xx]);

            //eVital.01/////////////////////////////
            _val = getValue(businessObject.elements, "eVitals.01");
            if (_val == null) {
                v2Array.push({ section: "E14", element: "E14_01", val: null });
                VitalsGroup["DateTimeVitalSignsTaken"] = NOT_RECORDED;
                VitalsGroup["eVitals.01"] = v3NOT_RECORDED;
            }
            else {
                isNotApplicableFlag = false;
                VitalsGroup["DateTimeVitalSignsTaken"] = _val[0];
                v2Array.push({ section: "E14", element: "E14_01", val: _val[0] });
                VitalsVitalsGroup["eVitals.01"] = _val[0];
            };


            //eVital.02/////////////////////////////
            _val = getValue(businessObject.elements, "eVitals.02");
            if (_val == null) {
                v2Array.push({ section: "E14", element: "E14_02", val: v2NOT_RECORDED });
                VitalsGroup["eVitals.02"] = v3NOT_RECORDED;
                VitalsGroup["ObtainedPriortothisUnitsEMSCare"] = NOT_RECORDED;
            }
            else
            {
                isNotApplicableFlag = false;
                v2Array.push({ section: "E14", element: "E14_02", val: setV2("eVitals.02", _val[0]) });
                VitalsGroup["ObtainedPriortothisUnitsEMSCare"] = setCodeText("eVitals.02", _val[0]);
                VitalsGroup["eVitals.02"] = _val[0];
            };


            //eVital.03/////////////////////////////
            _val = getValue(businessObject.elements, "eVitals.03");
            if (_val == null) {
                PNValue = getPertinentNegative("eVitals.03")
                if (PNValue != null) {
                    if (PNValue == "8801019") {
                        VitalsGroup["CardiacRhythmECG"] = "REFUSED";
                        VitalsGroup["eVitals.03"] = PN_REFUSED_IS_NILLABLE;
                        v2Array.push({ section: "E14", element: "E14_03", val: v2NOT_KNOWN });
                    }
                    else if (PNValue == "8801023") {
                        VitalsGroup["CardiacRhythmECG"] = "UNABLE TO COMPLETE";
                        VitalsGroup["eVitals.03"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                        v2Array.push({ section: "E14", element: "E14_03", val: v2NOT_KNOWN });
                    }
                }
                else {
                    if (isRequiredStateElement("eExam.02") == true) {
                        VitalsGroup["CardiacRhythmECG"] = NOT_RECORDED;
                        VitalsGroup["eVitals.03"] = v3NOT_RECORDED;
                        v2Array.push({ section: "E14", element: "E14_03", val: v2NOT_RECORDED });
                    }
                }
            }
            else
            {                
                var arr1 = [];
                var arr2 = [];
                var arr3 = [];
                VitalsGroup["eVitals.03"] = _val[0];
                for (var i = 0; i < businessObject.elements; i++) {
                    arr1.push(val[i]);
                    arr2.push(setV2("eVitals.03", _val[i]));
                    arr3.push(setCodeText("eVitals.03", _val[0][i]));
                }
                isNotApplicableFlag = false;
                VitalsGroup["eVitals.03"] = arr1.slice(0);
                VitalsGroup["eVitals.03"] = arr1.slice(0);
                v2Array.push({ section: "E14", element: "E14_03", val: arr2.slice(0) });
            };


            //eVital.04/////////////////////////////
            console.log("business rule required")
            _val = getValue(businessObject.elements, "eVitals.04");
            if (_val == null) {
                if (isRequiredStateElement("eVitals.04")) {
                    VitalsGroup["ECGType"] = NOT_RECORDED;
                    VitalsGroup["eVitals.04"] = v3NOT_RECORDED;
                }
                else {
                    VitalsGroup["ECGType"] = null;
                    VitalsGroup["eVitals.04"] = null;
                }
            }
            else
            {
                isNotApplicableFlag = false;
                VitalsGroup["ECGType"] = setCodeText("eVitals.04", _val[0]);
                VitalsGroup["eVitals.04"] = _val[0];
            };


            //eVital.05/////////////////////////////
            _val = getValue(businessObject.elements, "eVitals.05");
            if (_val == null) {
                VitalsGroup["eVitals.05"] = v3NOT_RECORDED;
                VitalsGroup["MethodofECGInterpretation"] = NOT_RECORDED;
            }
            else
            {
             
                var arr1 = [];
                var arr3 = [];
                for (var i = 0; i < businessObject.elements; i++)
                {
                    arr1.push(val[i]);
                    arr3.push(val + setCodeText("eVitals.05", _val[i]));
                    OLAPArray.push('\t\t\t' + "<MethodofECGInterpretation>" + "</MethodofECGInterpretation>" + '\n');
                }
                isNotApplicableFlag = false;
                VitalsGroup["eVitals.05"] = arr1.slice(0);
                VitalsGroup["MethodofECGInterpretation"] = arr2.slice(0);
            };


            //eVital.06/////////////////////////////
            _val = getValue(businessObject.elements, "eVitals.06");
            if (_val == null) {
                _PNValue = getPN("eVitals.06");
                if (_PNValue != null) {
                    if (_PNValue == "8801019") {
                        v2Array.push({ section: "E14", element: "E14_04", val: v2NOT_KNOWN });
                        VitalsGroup["SBP"] = _PNValue;
                        VitalsGroup["eVitals.06"] = PN_REFUSED_IS_NILLABLE;

                    }
                    else if (_PNValue == "8801023") {
                        v2Array.push({ section: "E14", element: "E14_04", val: v2NOT_KNOWN });
                        VitalsGroup["SBP"] = _PNValue;
                        VitalsGroup["eVitals.06"] = _PNValue;
                    }
                    else if (_PNValue == "8801005") {

                        v2Array.push({ section: "E14", element: "E14_04", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.06"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                        VitalsGroup["SBP"] = _PNValue;
                    }
                    else {
                        if (isRequiredStateElement("eVitals.06")) {
                            VitalsGroup["SBP"] = NOT_RECORDED;
                            v2Array.push({ section: "E14", element: "E14_04", val: v2RECORDED });
                            VitalsGroup["eVitals.06"] = v3NOT_RECORDED;
                        }
                        else {
                            VitalsGroup["SBP"] = NOT_REPORTING;
                            v2Array.push({ section: "E14", element: "E14_04", val: v2NOT_REPORTING });
                            VitalsGroup["eVitals.06"] = v3NOT_REPORTING;
                        }
                    }
                }
            }
            else
            {
                VitalsGroup["eVitals.06"] = _val[0];
                VitalsGroup["SBP"] = _val[0];
                v2Array.push({ section: "E14", element: "E14_04", val: _val[0] });
                isNotApplicableFlag = false;
            };


            //eVitals.07/////////////////////////////
            _val = getValue(businessObject.elements, "eVitals.07");
            if (_val == null) {
                var _pn = getPN("eVitals.07");
                if (_PNValue != null) {
                    if (_PNValue == "8801019") {
                        v2Array.push({ section: "E14", element: "E14_05", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.07"] = PN_REFUSED_IS_NILLABLE;
                        VitalsGroup["DBP"] = _PNValue;
                    }
                    else if (_PNValue == "8801023") {
                        v2Array.push({ section: "E14", element: "E14_05", val: v2NOT_KNOWN });
                        VitalsGroup["DBP"] = _PNValue;
                        VitalsGroup["eVitals.07"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                    }
                    else if (_PNValue == "8801005") {
                        VitalsGroup["DBP"] = _PNValue;
                        v2Array.push({ section: "E14", element: "E14_05", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.07"] = PN_FINDING_NOT_PRESENT_IS_NILLABLE;
                    }
                }
                else {
                    if (isRequiredStateElement("eVitals.07")) {
                        VitalsGroup["DBP"] = NOT_RECORDED;
                        v2Array.push({ section: "E14", element: "E14_05", val: v2NOT_RECORDED });
                        VitalsGroup["eVitals.07"] = v3NOT_RECORDED;
                    }
                    else {
                        VitalsGroup["DBP"] = NOT_REPORTING;
                        v2Array.push({ section: "E14", element: "E14_05", val: v2NOT_REPORTING });
                        VitalsGroup["eVitals.07"] = v3NOT_RECORDED;
                    }
                }
            }
            else
            {
                VitalsGroup["DBP"] = _val[0];
                v2Array.push({ section: "E14", element: "E14_05", val: _val[0] });
                VitalsGroup["eVitals.07"] = _val[0];
                isNotApplicableFlag = false;
            };


            //eVital.08/////////////////////////////
            _val = getValue(businessObject.elements, "eVitals.08");
            if (_val == null) {
                if (isRequiredStateElement("eVitals.08")) {
                    VitalsGroup["MethodofBloodPressureMeasurement"] = NOT_RECORDED;
                    VitalsGroup["eVitals.08"] = v3NOT_RECORDED;
                    v2Array.push({ section: "E14", element: "E14_05", val: v2NOT_RECORDED });
                }
                else {
                    VitalsGroup["MethodofBloodPressureMeasurement"] = NOT_REPORTING;
                    VitalsGroup["eVitals.08"] = null;
                    v2Array.push({ section: "E14", element: "E14_05", val: null });
                }
            }
            else {
                VitalsGroup["MethodofBloodPressureMeasurement"] = setCodeText("eVitals.08", _val[0]);
                VitalsGroup["eVitals.08"] = _val[0];
                v2Array.push({ section: "E14", element: "E14_05", val: setV2("eVitals.08", _val[0]) });
                isNotApplicableFlag = false;
            };


            //eVital.09/////////////////////////////               
            _val = getValue(businessObject.elements, "eVitals.09");
            if (_val == null) {
                OLAPArray.push('\t\t\t' + "<>" + null + "</MeanArterialPressure>" + '\n');
                VitalsGroup["MeanArterialPressure"] = null;
                VitalsGroup["eVitals.09"] = null;
            }
            else {
                VitalsGroup["MeanArterialPressure"] = _val[0];
                VitalsGroup["eVitals.09"] = _val[0];
                isNotApplicableFlag = false;
            };


            //eVital.10/////////////////////////////               
            _val = getValue(businessObject.elements, "eVitals.10");
            if (_val == null) {
                _PNValue = getPN("eVitals.10");
                if (_PNValue != null) {

                    if (_PNValue == "8801019") {
                        v2Array.push({ section: "E14", element: "E14_07", val: v2NOT_KNOWN });
                        VitalsGroup["HeartRate"] = _PNValue;
                        VitalsGroup["eVitals.10"] = _PNValue;

                    }
                    else if (_PNValue == "8801023") {
                        VitalsGroup["HeartRate"] = _PNValue;
                        v2Array.push({ section: "E14", element: "E14_07", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.10"] = _PNValue;
                    }
                    else if (_PNValue == "8801005") {
                        VitalsGroup["HeartRate"] = _PNValue;
                        v2Array.push({ section: "E14", element: "E14_07", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.10"] = _PNValue;
                    }
                    else {
                        if (isRequiredStateElement("eVitals.10")) {
                            VitalsGroup["HeartRate"] = NOT_RECORDED;
                            v2Array.push({ section: "E14", element: "E14_07", val: v2RECORDED });
                            VitalsGroup["eVitals.10"] = v3NOT_RECORDED;
                        }
                        else {
                            VitalsGroup["HeartRate"] = NOT_REPORTING;
                            v2Array.push({ section: "E14", element: "E14_07", val: v2NOT_REPORTING });
                            VitalsGroup["eVitals.10"] = v3NOT_REPORTING;
                        }
                    }
                }
            }
            else {
                VitalsGroup["HeartRate"] = _val[0];
                VitalsGroup["eVitals.10"] = _val[0];
                v2Array.push({ section: "E14", element: "E14_07", val: _val[0] });
                isNotApplicableFlag = false;
            };

            //eVital.11/////////////////////////////               
            _val = getValue(businessObject.elements, "eVitals.11");
            if (_val == null) {
                VitalsGroup["MethodofHeartRateMeasurement"] = null;
                VitalsGroup["eVitals.11"] = null;
            }
            else {
                VitalsGroup["MethodofHeartRateMeasurement"] = _val[0];
                VitalsGroup["eVitals.11"] = _val[0];
                isNotApplicableFlag = false;
            };

            //eVitals.12/////////////////////////////
            _val = getValue(businessObject.elements, "eVitals.12");
            if (_val == null) {
                _PNValue = getPN("eVitals.12");
                if (_PNValue != null) {
                    if (_PNValue == "8801019") {
                        VitalsGroup["PulseOximetry"] = _PNValue;
                        v2Array.push({ section: "E14", element: "E14_09", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.12"] = PN_FINDING_NOT_PRESENT_IS_NILLABLE;
                    }
                    else if (_PNValue == "8801023") {
                        VitalsGroup["PulseOximetry"] = _PNValue;
                        v2Array.push({ section: "E14", element: "E14_09", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.12"] = PN_REFUSED_IS_NILLABLE;
                    }
                    else if (_PNValue == "8801005") {
                        VitalsGroup["PulseOximetry"] = _PNValue;
                        v2Array.push({ section: "E14", element: "E14_09", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.12"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                    }
                }
                else {
                    if (isRequiredStateElement("eVitals.12")) {
                        VitalsGroup["PulseOximetry"] = NOT_RECORDED;
                        v2Array.push({ section: "E14", element: "E14_09", val: v2NOT_RECORDED });
                        VitalsGroup["eVitals.12"] = v3NOT_RECORDED;
                    }
                    else {
                        VitalsGroup["PulseOximetry"] = NOT_REPORTING;
                        v2Array.push({ section: "E14", element: "E14_09", val: v2NOT_REPORTING });
                        VitalsGroup["eVitals.12"] = v3NOT_RECORDED;
                    }
                }
            }
            else {
                VitalsGroup["PulseOximetry"] = _val[0];
                v2Array.push({ section: "E14", element: "E14_09", val: _val[0] });
                VitalsGroup["eVitals.12"] = _val[0];
                isNotApplicableFlag = false;
            };

            //eVital.13/////////////////////////////
            _val = getValue(businessObject.elements, "eVitals.13");
            if (_val == null) {
                v2Array.push({ section: "E14", element: "E14_10", val: null });
                VitalsGroup["PulseRhythm"] = null;
                VitalsGroup["eVitals.13"] = null;
            }
            else {
                v2Array.push({ section: "E14", element: "E14_10", val: _val[0] });
                VitalsGroup["eVitals.13"] = _val[0];
                VitalsGroup["PulseRhythm"] = setCodeText("eVitals.13", _val[0]);
                isNotApplicableFlag = false;
            };


            //eVitals.14/////////////////////////////
            _val = getValue(businessObject.elements, "eVitals.14");
            if (_val == null) {
                _PNValue = getPN("eVitals.14");
                if (_PNValue != null) {
                    if (_PNValue == "8801019") {
                        VitalsGroup["RespiratoryRate"] = _PNValue;
                        v2Array.push({ section: "E14", element: "E14_11", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.14"] = PN_REFUSED_IS_NILLABLE;
                    }
                    else if (_PNValue == "8801023") {
                        VitalsGroup["RespiratoryRate"] = _PNValue;
                        v2Array.push({ section: "E14", element: "E14_11", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.14"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                    }
                    else if (_PNValue == "8801005") {
                        VitalsGroup["RespiratoryRate"] = _PNValue;
                        v2Array.push({ section: "E14", element: "E14_11", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.14"] = PN_FINDING_NOT_PRESENT_IS_NILLABLE;
                    }
                }
                else {
                    if (isRequiredStateElement("eVitals.14")) {
                        VitalsGroup["RespiratoryRate"] = NOT_RECORDED;
                        v2Array.push({ section: "E14", element: "E14_11", val: v2NOT_RECORDED });
                        VitalsGroup["eVitals.14"] = v3NOT_RECORDED;
                    }
                    else {
                        VitalsGroup["RespiratoryRate"] = NOT_REPORTING;
                        v2Array.push({ section: "E14", element: "E14_11", val: v2NOT_REPORTING });
                        VitalsGroup["eVitals.14"] = v3NOT_RECORDED;
                    }
                }
            }
            else {
                VitalsGroup["RespiratoryRate"] = _val[0];
                v2Array.push({ section: "E14", element: "E14_11", val: _val[0] });
                VitalsGroup["eVitals.14"] = _val[0];
                isNotApplicableFlag = false;
            };


            //eVital.15/////////////////////////////
            _val = getValue(businessObject.elements, "eVitals.15");
            if (_val == null) {
                v2Array.push({ section: "E14", element: "E14_12", val: null });
                VitalsGroup["RespiratoryEffort"] = null;
                VitalsGroup["eVitals.15"] = null;
            }
            else {
                VitalsGroup["RespiratoryEffort"] = setCodeText("eVitals.15", _val[0])
                v2Array.push({ section: "E14", element: "E14_12", val: setV2("eVitals.15", _val[0]) });
                VitalsGroup["eVitals.15"] = _val[0];
                isNotApplicableFlag = false;
            };

            //eVitals.16/////////////////////////////
            _val = getValue(businessObject.elements, "eVitals.16");
            if (_val == null) {
                _PNValue = getPN("eVitals.16");
                if (_PNValue != null) {
                    if (_PNValue == "8801019") {
                        v2Array.push({ section: "E14", element: "E14_13", val: v2NOT_KNOWN });
                        VitalsGroup["CO2"] = _PNValue;
                        VitalsGroup["eVitals.16"] = PN_REFUSED_IS_NILLABLE;
                    }
                    else if (_PNValue == "8801023") {
                        v2Array.push({ section: "E14", element: "E14_13", val: v2NOT_KNOWN });
                        VitalsGroup["CO2"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                        VitalsGroup["eVitals.16"] = _PNValue;
                    }
                }
                else {
                    if (isRequiredStateElement("eVitals.16")) {
                        VitalsGroup["CO2"] = NOT_RECORDED;
                        v2Array.push({ section: "E14", element: "E14_13", val: v2NOT_RECORDED });
                        VitalsGroup["eVitals.16"] = v3NOT_RECORDED;
                    }
                    else {
                        VitalsGroup["CO2"] = v3NOT_REPORTING;
                        v2Array.push({ section: "E14", element: "E14_13", val: v2NOT_REPORTING });
                        VitalsGroup["eVitals.16"] = v3NOT_RECORDED;
                    }
                }
            }
            else {
                VitalsGroup["CO2"] = _val[0];
                v2Array.push({ section: "E14", element: "E14_13", val: _val[0] });
                VitalsGroup["eVitals.16"] = _val[0];
                isNotApplicableFlag = false;
            };


            //eVitals.17/////////////////////////////
            _val = getValue(businessObject.elements, "eVitals.17");
            if (_val == null) {
                _PNValue = getPN("eVitals.17");
                if (_PNValue != null) {
                    if (_PNValue == "8801019") {
                        VitalsGroup["CarbonMonoxide"] = _PNValue;
                        VitalsGroup["eVitals.17"] = PN_REFUSED_IS_NILLABLE;
                    }
                    else if (_PNValue == "8801023") {
                        VitalsGroup["eVitals.17"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                        VitalsGroup["CarbonMonoxide"] = _PNValue;
                    }
                }
                else {
                    if (isRequiredStateElement("eVitals.17")) {
                        VitalsGroup["CarbonMonoxide"] = NOT_RECORDED;
                        VitalsGroup["eVitals.17"] = v3NOT_RECORDED;
                    }
                    else {
                        VitalsGroup["CarbonMonoxide"] = null;
                        VitalsGroup["eVitals.17"] = null;
                    }
                }
            }
            else
            {
                VitalsGroup["CarbonMonoxide"] = _val[0];
                VitalsGroup["eVitals.17"] = _val[0];
                isNotApplicableFlag = false;
            };

            //eVitals.18/////////////////////////////
            _val = getValue(businessObject.elements, "eVitals.18");
            if (_val == null) {
                _PNValue = getPN("eVitals.18");
                if (_PNValue != null) {
                    if (_PNValue == "8801019") {
                        VitalsGroup["BloodGlucoseLevel"] = _PNValue;
                        v2Array.push({ section: "E14", element: "E14_14", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.18"] = PN_REFUSED_IS_NILLABLE;
                    }
                    else if (_PNValue == "8801023") {
                        VitalsGroup["BloodGlucoseLevel"] = _PNValue;
                        v2Array.push({ section: "E14", element: "E14_14", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.18"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                    }
                }
                else {
                    if (isRequiredStateElement("eVitals.18")) {
                        v2Array.push({ section: "E14", element: "E14_14", val: v2NOT_RECORDED });
                        VitalsGroup["BloodGlucoseLevel"] = NOT_RECORDED;
                        VitalsGroup["eVitals.18"] = v3NOT_RECORDED;
                    }
                    else {
                        VitalsGroup["BloodGlucoseLevel"] = null;
                        v2Array.push({ section: "E14", element: "E14_14", val: null });
                        VitalsGroup["eVitals.18"] = null;
                    }
                }
            }
            else {
                v2Array.push({ section: "E14", element: "E14_14", val: _val[0] });
                VitalsGroup["BloodGlucoseLevel"] = _val[0];
                VitalsGroup["eVitals.18"] = _val[0];
                isNotApplicableFlag = false;
            };



            //eVitals.19/////////////////////////////
            _val = getValue(businessObject.elements, "eVitals.19");
            if (_val == null) {
                _PNValue = getPN("eVitals.19");
                if (_PNValue != null) {
                    if (_PNValue == "8801019") {
                        v2Array.push({ section: "E14", element: "E14_15", val: v2NOT_KNOWN });
                        VitalsGroup["GlasgowComaScoreEye"] = _PNValue;
                        VitalsGroup["eVitals.19"] = PN_REFUSED_IS_NILLABLE;
                    }
                    else if (_PNValue == "8801023") {
                        VitalsGroup["GlasgowComaScoreEye"] = _PNValue;
                        v2Array.push({ section: "E14", element: "E14_15", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.19"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                    }
                }
                else {
                    if (isRequiredStateElement("eVitals.19")) {
                        VitalsGroup["GlasgowComaScoreEye"] = NOT_RECORDED;
                        v2Array.push({ section: "E14", element: "E14_15", val: v2NOT_RECORDED });
                        VitalsGroup["eVitals.19"] = v3NOT_RECORDED;
                    }
                    else {
                        v2Array.push({ section: "E14", element: "E14_15", val: null });
                        VitalsGroup["eVitals.19"] = null;
                        VitalsGroup["GlasgowComaScoreEye"] = null;
                    }
                }
            }
            else {
                v2Array.push({ section: "E14", element: "E14_15", val: _val[0] });
                VitalsGroup["GlasgowComaScoreEye"] = _val[0];
                VitalsGroup["eVitals.19"] = _val[0];
                isNotApplicableFlag = false;
            };

            //eVital.20/////////////////////////////        
            _val = getValue(businessObject.elements, "eVitals.20");
            if (_val == null) {
                _PNValue = getPN("eVitals.20");
                if (_PNValue != null) {
                    if (_PNValue == "8801019") {
                        v2Array.push({ section: "E14", element: "E14_16", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.20"] = PN_REFUSED_IS_NILLABLE;
                        VitalsGroup["GlasgowComaScoreVerbal"] = _PNValue;
                    }
                    else if (_PNValue == "8801023") {
                        v2Array.push({ section: "E14", element: "E14_16", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.20"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                        VitalsGroup["GlasgowComaScoreVerbal"] = _PNValue;
                    }
                }
                else {
                    if (isRequiredStateElement("eVitals.20")) {
                        v2Array.push({ section: "E14", element: "E14_16", val: v2NOT_RECORDED });
                        VitalsGroup["eVitals.20"] = v3NOT_RECORDED;
                        VitalsGroup["GlasgowComaScoreVerbal"] = NOT_RECORDED;
                    }
                    else {
                        VitalsGroup["GlasgowComaScoreVerbal"] = null;
                        v2Array.push({ section: "E14", element: "E14_16", val: null });
                        VitalsGroup["eVitals.20"] = null;
                    }
                }
            }
            else {
                v2Array.push({ section: "E14", element: "E14_16", val: _val[0] });
                VitalsGroup["GlasgowComaScoreVerbal"] = setCodeText("eVitals.20", _val[0]);
                VitalsGroup["eVitals.20"] = _val[0];
                isNotApplicableFlag = false;
            };



            //eVital.21/////////////////////////////        
            _val = getValue(businessObject.elements, "eVitals.21");
            if (_val == null) {
                _PNValue = getPN("eVitals.21");
                if (_PNValue != null) {
                    if (_PNValue == "8801019") {
                        v2Array.push({ section: "E14", element: "E14_23", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.21"] = PN_REFUSED_IS_NILLABLE;
                        VitalsGroup["eVitals.GlasgowComaScoreMotor"] = _PNValue;
                    }
                    else if (_PNValue == "8801023") {
                        v2Array.push({ section: "E14", element: "E14_23", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.21"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                        VitalsGroup["eVitals.GlasgowComaScoreMotor"] = _PNValue;
                    }
                }
                else {
                    if (isRequiredStateElement("eVitals.21")) {
                        v2Array.push({ section: "E14", element: "E14_23", val: v2NOT_RECORDED });
                        VitalsGroup["eVitals.21"] = v3NOT_RECORDED;
                        VitalsGroup["eVitals.GlasgowComaScoreMotor"] = NOT_RECORDED;
                    }
                    else {
                        v2Array.push({ section: "E14", element: "E14_23", val: null });
                        VitalsGroup["eVitals.21"] = null;
                        VitalsGroup["eVitals.GlasgowComaScoreMotor"] = null;
                    }
                }
            }
            else {
                v2Array.push({ section: "E14", element: "E14_23", val: _val[0] });
                VitalsGroup["eVitals.21"] = _val[0];
                VitalsGroup["eVitals.GlasgowComaScoreMotor"] = _val[0];
                isNotApplicableFlag = false;
            };

            //eVital.22/////////////////////////////        
            _val = getValue(businessObject.elements, "eVitals.22");
            if (_val == null) {
                _PNValue = getPN("eVitals.22");
                if (_PNValue != null) {
                    if (_PNValue == "8801019") {
                        v2Array.push({ section: "E14", element: "E14_18", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.22"] = PN_REFUSED_IS_NILLABLE;
                        VitalsGroup["GlasgowComaScoreQualifier"] = _PNValue;
                    }
                    else if (_PNValue == "8801023") {
                        v2Array.push({ section: "E14", element: "E14_18", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.22"] = PN_REFUSED_IS_NILLABLE;
                        VitalsGroup["GlasgowComaScoreQualifier"] = _PNValue;
                    }
                }
                else {
                    if (isRequiredStateElement("eVitals.22")) {
                        v2Array.push({ section: "E14", element: "E14_18", val: v2NOT_RECORDED });
                        VitalsGroup["eVitals.22"] = v3NOT_RECORDED;
                        VitalsGroup["GlasgowComaScoreQualifier"] = NOT_RECORDED;
                    }
                    else {
                        v2Array.push({ section: "E14", element: "E14_18", val: null });
                        VitalsGroup["eVitals.22"] = null;
                        VitalsGroup["GlasgowComaScoreQualifier"] = null;
                    }
                }
            }
            else {
                v2Array.push({ section: "E14", element: "E14_18", val: setD2("eVitals.22", _val[0]) });
                VitalsGroup["GlasgowComaScoreQualifier"] = setCodeText("eVitals.22", _val[0]);
                VitalsGroup["eVitals.22"] = _val[0];
                isNotApplicableFlag = false;
            };

            //eVital.23/////////////////////////////        

            _val = getValue(businessObject.elements, "eVitals.23");
            if (_val == null) {
                _PNValue = getPN("eVitals.23");
                if (_PNValue != null) {
                    if (_PNValue == "8801019") {
                        v2Array.push({ section: "E14", element: "E14_19", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.23"] = PN_REFUSED_IS_NILLABLE;
                        VitalsGroup["GlasgowComaScoreScore"] = _PNValue;
                    }
                    else if (_PNValue == "8801023") {
                        v2Array.push({ section: "E14", element: "E14_19", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.23"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                        VitalsGroup["GlasgowComaScoreScore"] = _PNValue;
                    }
                }
                else {
                    if (isRequiredStateElement("eVitals.23")) {
                        OLAPArray.push('\t\t' + "<GlasgowComaScoreScore>" + "NOT RECORDED" + "</GlasgowComaScoreScore>" + '\n');
                        VitalsGroup["GlasgowComaScoreScore"] = NOT_RECORDED;
                        v2Array.push({ section: "E14", element: "E14_19", val: v2NOT_RECORDED });
                        VitalsGroup["eVitals.23"] = v3NOT_RECORDED;
                    }
                    else {
                        v2Array.push({ section: "E14", element: "E14_19", val: v2NOT_REPORTING });
                        VitalsGroup["eVitals.23"] = v3NOT_REPORTING;
                        VitalsGroup["GlasgowComaScoreScore"] = NOT_REPORTING;
                    }
                }
            }
            else {
                v2Array.push({ section: "E14", element: "E14_19", val: setD2("eVitals.23 ", _val[0]) });
                VitalsGroup["GlasgowComaScoreScore"] = setCodeText("eVitals.23", _val[0]);
                VitalsGroup["eVitals.23"] = _val[0];
                isNotApplicableFlag = false;
            };


            //eVital.24/////////////////////////////        
            _val = getValue(businessObject.elements, "eVitals.24  ");
            if (_val == null) {
                _PNValue = getPN("eVitals.24 ");
                if (_PNValue != null) {
                    if (_PNValue == "8801019") {
                        v2Array.push({ section: "E14", element: "E14_20", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.24 "] = PN_REFUSED_IS_NILLABLE;
                        VitalsGroup["Temperature"] = _PNValue;
                    }
                    else if (_PNValue == "8801023") {
                        v2Array.push({ section: "E14", element: "E14_20", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.24"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                        VitalsGroup["Temperature"] = _PNValue;
                    }
                }
                else {
                    if (isRequiredStateElement("eVitals.24  ")) {
                        v2Array.push({ section: "E14", element: "E14_20", val: v2NOT_RECORDED });
                        VitalsGroup["Temperature"] = NOT_RECORDED;
                        VitalsGroup["eVitals.24"] = v3NOT_RECORDED;
                    }
                    else {
                        v2Array.push({ section: "E14", element: "E14_20", val: v2NOT_REPORTING });
                        VitalsGroup["eVitals.24"] = v3NOT_REPORTING;
                        VitalsGroup["Temperature"] = NOT_REPORTING;
                    }
                }
            }
            else {
                v2Array.push({ section: "E14", element: "E14_20", val: _val[0] });
                VitalsGroup["eVitals.24"] = _val[0];
                VitalsGroup["Temperature"] = _val[0];
                isNotApplicableFlag = false;
            };

            //eVital.25/////////////////////////////   

            _val = getValue(businessObject.elements, "eVitals.25");
            if (_val == null) {
                v2Array.push({ section: "E14", element: "E14_21", val: null });
                VitalsGroup["TemperatureMethod"] = null;
                VitalsGroup["eVitals.25"] = null;
            }
            else {
                v2Array.push({ section: "E14", element: "E14_21", val: setV2("eVitals.25", _val[0]) });
                VitalsGroup["TemperatureMethod"] = setCodeText("eVitals.25", _val[0]);
                _retArray.push('\t\t\t' + "<eVitals.25>" + _val[0] + "</eVitals.25>" + '\n');
                VitalsGroup["eVitals.25"] = _val[0];
                isNotApplicableFlag = false;
            };


            //eVital.26/////////////////////////////   
            _val = getValue(businessObject.elements, "eVitals.26");
            if (_val == null) {
                v2Array.push({ section: "E14", element: "E14_22", val: v2NOT_RECORDED });
                VitalsGroup["eVitals.26"] = v3NOT_RECORDED;
                VitalsGroup["LevelofResponsiveness"] = NOT_RECORDED;

            }
            else {
                v2Array.push({ section: "E14", element: "E14_22", val: setV2("eVitals.26", _val[0]) });
                VitalsGroup["eVitals.26"] = _val[0];
                VitalsGroup["LevelofResponsiveness"] = setCodeText("eVitals.26", _val[0]);;
                isNotApplicableFlag = false;
            };


            //eVital.27/////////////////////////////   
            _val = getValue(businessObject.elements, "eVitals.27 ");
            if (_val == null) {
                _PNValue = getPN("eVitals.27");
                if (_PNValue != null) {
                    if (_PNValue == "8801019") {
                        v2Array.push({ section: "E14", element: "E14_23", val: v2NOT_KNOWN });
                        VitalsGroup["PainScaleScore"] = _PNValue;
                        VitalsGroup["eVitals.27"] = PN_REFUSED_IS_NILLABLE;
                    }
                    else if (_PNValue == "8801023") {
                        v2Array.push({ section: "E14", element: "E14_23", val: v2NOT_KNOWN });
                        VitalsGroup["PainScaleScore"] = _PNValue;
                        VitalsGroup["eVitals.27"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                    }
                }
                else {
                    if (isRequiredStateElement("eVitals.27")) {
                        v2Array.push({ section: "E14", element: "E14_23", val: v2NOT_RECORDED });
                        VitalsGroup["eVitals.27"] = v3NOT_RECORDED;
                        VitalsGroup["PainScaleScore"] = NOT_RECORDED;
                    }
                    else {
                        v2Array.push({ section: "E14", element: "E14_23", val: null });
                        VitalsGroup["eVitals.27"] = null;
                        VitalsGroup["PainScaleScore"] = null;
                    }
                }
            }
            else {
                v2Array.push({ section: "E14", element: "E14_23", val: _val[0] });
                VitalsGroup["eVitals.27"] = _val[0];
                VitalsGroup["PainScaleScore"] = _val[0];
                isNotApplicableFlag = false;
            };
            //eVital.28/////////////////////////////   
            _val = getValue(businessObject.elements, "eVitals.28");
            if (_val == null) {
                if (isRequiredStateElement("eVitals.28")) {
                    VitalsGroup["eVitals.28"] = v3NOT_RECORDED;
                    VitalsGroup["PainScaleType"] = NOT_RECORDED;
                }
                else {
                    VitalsGroup["eVitals.28"] = null;
                    VitalsGroup["PainScaleType"] = null;
                }
            }
            else {
                VitalsGroup["eVitals.28"] = _val[0];
                VitalsGroup["PainScaleType"] = setCodeText("eVitals.28", _val[0]);
                isNotApplicableFlag = false;
            };



            //eVital.29/////////////////////////////   
            _val = getValue(businessObject.elements, "eVitals.29 ");
            if (_val == null) {
                _PNValue = getPN("eVitals.29");
                if (_PNValue != null) {
                    if (_PNValue == "8801019") {
                        v2Array.push({ section: "E14", element: "E14_24", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.29"] = PN_REFUSED_IS_NILLABLE;
                        VitalsGroup["StrokeScaleScore"] = _PNValue;
                    }
                    else if (_PNValue == "8801023") {
                        v2Array.push({ section: "E14", element: "E14_24", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.29"] = _PNValue;
                        VitalsGroup["StrokeScaleScore"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                    }
                }
                else {
                    if (isRequiredStateElement("eVitals.29")) {
                        v2Array.push({ section: "E14", element: "E14_24", val: v2NOT_RECORDED });
                        VitalsGroup["eVitals.29"] = v3NOT_RECORDED;
                        VitalsGroup["StrokeScaleScore"] = NOT_RECORDED;
                    }
                    else {
                        v2Array.push({ section: "E14", element: "E14_24", val: null });
                        VitalsGroup["eVitals.29"] = null;
                        VitalsGroup["StrokeScaleScore"] = null;
                    }
                }
            }
            else {
                v2Array.push({ section: "E14", element: "E14_24", val: _val[0] });
                VitalsGroup["eVitals.29"] = _val[0];
                VitalsGroup["StrokeScaleScore"] = setCodeText("eVitals.29 ", _val[0]);
                isNotApplicableFlag = false;
            };

            //eVital.30/////////////////////////////   
            _val = getValue(businessObject.elements, "eVitals.30");
            if (_val == null) {
                if (isRequiredStateElement("eVitals.30")) {
                    VitalsGroup["eVitals.30"] = v3NOT_RECORDED;
                    VitalsGroup["StrokeScaleType"] = NOT_RECORDED;
                }
                else {
                    VitalsGroup["eVitals.30"] = null;
                    VitalsGroup["StrokeScaleType"] = NOT_REPORTING;
                }
            }
            else {
                VitalsGroup["eVitals.30"] = _val[0];
                VitalsGroup["StrokeScaleType"] = setCodeText("eVitals.30", _val[0]);
                isNotApplicableFlag = false;
            };


            //eVital.31/////////////////////////////   
            _val = getValue(businessObject.elements, "eVitals.31 ");
            if (_val == null) {
                _PNValue = getPN("eVitals.31");
                if (_PNValue != null) {
                    if (_PNValue == "8801019") {
                        v2Array.push({ section: "E14", element: "E14_25", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.31"] = PN_REFUSED_IS_NILLABLE;
                        VitalsGroup["ReperfusionChecklist"] = _PNValue;
                    }
                    else if (_PNValue == "8801023") {
                        v2Array.push({ section: "E14", element: "E14_25", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.31"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                        VitalsGroup["ReperfusionChecklist"] = _PNValue;
                    }
                }
                else {
                    if (isRequiredStateElement("eVitals.31")) {
                        v2Array.push({ section: "E14", element: "E14_25", val: v2NOT_RECORDED });
                        VitalsGroup["ReperfusionChecklist"] = NOT_RECORDED;
                        VitalsGroup["eVitals.31"] = v3NOT_RECORDED;
                    }
                    else {
                        v2Array.push({ section: "E14", element: "E14_25", val: null });
                        VitalsGroup["eVitals.31"] = null;
                        VitalsGroup["ReperfusionChecklist"] = null;
                    }
                }
            }
            else {
                v2Array.push({ section: "E14", element: "E14_25", val: setD2("eVitals.31", _val[0]) });
                VitalsGroup["eVitals.31"] = _val[0];
                VitalsGroup["ReperfusionChecklist"] = setCodeText("eVitals.31 ", _val[0]);
                isNotApplicableFlag = false;
            };

            //eVital.32/////////////////////////////   
            _val = getValue(businessObject.elements, "eVitals.32 ");
            if (_val == null) {
                _PNValue = getPN("eVitals.32");
                if (_PNValue != null) {
                    if (_PNValue == "8801023") {
                        v2Array.push({ section: "E14", element: "E14_26", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.32"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                        VitalsGroup["APGAR"] = _PNValue;
                    }
                }
                else {
                    if (isRequiredStateElement("eVitals.32")) {
                        v2Array.push({ section: "E14", element: "E14_26", val: v2NOT_RECORDED });
                        VitalsGroup["eVitals.32"] = NIL_V3NOT_RECORDED;
                        VitalsGroup["APGAR"] = _PNValue;
                    }
                    else {
                        v2Array.push({ section: "E14", element: "E14_26", val: null });
                        VitalsGroup["eVitals.32"] = null;
                        VitalsGroup["APGAR"] = null;
                    }
                }
            }
            else {
                isNotApplicableFlag = false;
                v2Array.push({ section: "E14", element: "E14_26", val: _val[0] });
                VitalsGroup["eVitals.32"] = _val[0];
                VitalsGroup["APGAR"] = _val[0];
            };

            //eVital.33/////////////////////////////   
            _val = getValue(businessObject.elements, "eVitals.33 ");
            if (_val == null) {
                _PNValue = getPN("eVitals.33");
                if (_PNValue != null) {
                    if (_PNValue == "8801019") {
                        v2Array.push({ section: "E14", element: "E14_27", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.33"] = PN_REFUSED_IS_NILLABLE;
                        VitalsGroup["RevisedTraumaScore"] = _PNValue;
                    }
                    else if (_PNValue == "8801023") {
                        v2Array.push({ section: "E14", element: "E14_27", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.33"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                        VitalsGroup["RevisedTraumaScore"] = _PNValue;
                    }
                }
                else {
                    v2Array.push({ section: "E14", element: "E14_27", val: null });
                    VitalsGroup["eVitals.33"] = null;
                    VitalsGroup["RevisedTraumaScore"] = null;
                }
            }
            else {
                isNotApplicableFlag = false;
                _retArray.push('\t\t\t' + "<eVitals.33>" + _val[0] + "</eVitals.33>" + '\n');
                VitalsGroup["eVitals.31"] = _val[0];
                VitalsGroup["RevisedTraumaScore"] = _val[0];
            };
        }
    }
};
   


var isRequiredStateElement = function (elementID) {
    return true;
};
var getValue = function (payload, valueObject) {


    var _retValue = null;
    var _bFound = false;
    i = 0;
    while (i < payload.length) {
        if (_bFound == false) {
            _retVal = null;
            if (payload[i].name == valueObject) {
                _bFound = true;
                if (payload[i].values == undefined) {

                    _retVal = null;
                }
                else {
                    _retVal = payload[i].values;
                }
            }
        }
        i++;
    }
    return _retVal;
};

function SetNotApplicable() 
{
    VitalsGroup["eVitals.01"] = V3NOT_APPLICABLE
    E14.E14_01 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.01" + NIL_V3NOT_APPLICABLE );

    VitalsGroup["eVitals.02"] = NIL_V3NOT_APPLICABLE
    E14.E14_02 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.02" + NIL_V3NOT_APPLICABLE );
    
    _retArray.push("<eVitals.03" + NIL_V3NOT_APPLICABLE );
    CardiacRhythmGroup["eVitals.03"] = v3NOT_APPLICABLE;
    E14.E14_03 = v2NOT_APPLICABLE;

    _retArray.push("<eVitals.04" + NIL_V3NOT_APPLICABLE );
    CardiacRhythmGroup["eVitals.04"] = v3NOT_APPLICABLE;

    _retArray.push("<eVitals.05" + NIL_V3NOT_APPLICABLE );
    CardiacRhythmGroup["eVitals.05"] = v3NOT_APPLICABLE;

    BloodPressureGroup["eVitals.06"] = V3NOT_APPLICABLE
    E14.E14_04 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.06" + NIL_V3NOT_APPLICABLE );

    BloodPressureGroup["eVitals.07"] = V3NOT_APPLICABLE
    E14.E14_05 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.07" + NIL_V3NOT_APPLICABLE );

    BloodPressureGroup["eVitals.08"] = V3NOT_APPLICABLE
    E14.E14_06 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.08" + NIL_V3NOT_APPLICABLE );

    HeartRateGroup["eVitals.10"] = V3NOT_APPLICABLE
    E14.E14_07 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.10" + NIL_V3NOT_APPLICABLE );

    VitalsGroup["eVitals.12"] = V3NOT_APPLICABLE
    E14.E14_09 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.12" + NIL_V3NOT_APPLICABLE );

    VitalsGroup["eVitals.14"] = V3NOT_APPLICABLE
    E14.E14_11 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.14" + NIL_V3NOT_APPLICABLE );

    VitalsGroup["eVitals.16"] = V3NOT_APPLICABLE
    E14.E14_13 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.16" + NIL_V3NOT_APPLICABLE );

    VitalsGroup["eVitals.17"] = V3NOT_APPLICABLE
    _retArray.push("<eVitals.17" + NIL_V3NOT_APPLICABLE );

    VitalsGroup["eVitals.18"] = V3NOT_APPLICABLE
    E14.E14_14 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.18" + NIL_V3NOT_APPLICABLE );

    GlasgowScoreGroup["eVitals.19"] = V3NOT_APPLICABLE
    E14.E14_15 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.19" + NIL_V3NOT_APPLICABLE );

    GlasgowScoreGroup["eVitals.20"] = V3NOT_APPLICABLE
    E14.E14_16 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.20" + NIL_V3NOT_APPLICABLE );

    GlasgowScoreGroup["eVitals.21"] = V3NOT_APPLICABLE
    E14.E14_23 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.21" + NIL_V3NOT_APPLICABLE );

    GlasgowScoreGroup["eVitals.22"] = V3NOT_APPLICABLE
    E14.E14_18 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.22" + NIL_V3NOT_APPLICABLE );

    GlasgowScoreGroup["eVitals.23"] = V3NOT_APPLICABLE
    E14.E14_19 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.23" + NIL_V3NOT_APPLICABLE );

    TemperatureGroup["eVitals.24"] = V3NOT_APPLICABLE
    E14.E14_20 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.24" + NIL_V3NOT_APPLICABLE );

    VitalsGroup["eVitals.26"] = V3NOT_APPLICABLE
    E14.E14_22 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.26" + NIL_V3NOT_APPLICABLE );

    PainScaleGroup["eVitals.27"] = V3NOT_APPLICABLE
    E14.E14_23 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.27" + NIL_V3NOT_APPLICABLE );
    

    StrokeScaleGroup["eVitals.29"] = V3NOT_APPLICABLE
    E14.E14_24 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.29" + NIL_V3NOT_APPLICABLE );

    StrokeScaleGroup["eVitals.30"] = V3NOT_APPLICABLE
    _retArray.push("<eVitals.30" + NIL_V3NOT_APPLICABLE );

    VitalsGroup["eVitals.31"] = V3NOT_APPLICABLE
    E14.E14_25 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.31" + NIL_V3NOT_APPLICABLE );

}



    
    function setD2(NEMSISElementNumber, valueArray) {
    //    console.log(NEMSISElementNumber);
    var _retArray = [];
    //    console.log(valueArray);
    switch (NEMSISElementNumber) {
        case "eVitals.02":

            if (eVitals02[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eVitals02[valueArray[0]]);
            }
            break;
        case "eVitals.03":
            for (i = 0; i < valueArray.length; i++) {
                if (eVitals03[valueArray[i]] == undefined) {
                    _retArray.push(valueArray[i] + "UNDEFINED");
                }
                else {
                    _retArray.push(eVitals03[valueArray[i]]);
                }
            }
            break;
        case "eVitals.08":
            if (eVitals08[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eVitals08[valueArray[0]]);
            }
            break;
        case "eVitals.13":
            if (eVitals13[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eVitals13[valueArray[0]]);
            }
            break;
        case "eVitals.15":
            if (eVitals15[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eVitals15[valueArray[0]]);
            }
            break;
        case "eVitals.19":
            if (eVitals19[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eVitals19[valueArray[0]]);
            }
            break;
        case "eVitals.20":
            if (eVitals20[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eVitals20[valueArray[0]]);
            }
            break;
        case "eVitals.21":
            if (eVitals21[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eVitals21[valueArray[0]]);
            }
            break;
        case "eVitals.22":
            if (eVitals22[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eVitals22[valueArray[0]]);
            }
            break;
        case "eVitals.25":
            if (eVitals25[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eVitals25[valueArray[0]]);
            }
            break;
        case "eVitals.26":
            if (eVitals26[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eVitals26[valueArray[0]]);
            }
            break;
        case "eVitals.29":
            if (eVitals29[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eVitals29[valueArray[0]]);
            }
            break;
        case "eVitals.31":
            if (eVitals31[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eVitals31[valueArray[0]]);
            }
            break;
        default:
            _retArray.push(NEMSISElementNumber = " version 2 not found");
    }

    return _retArray;

}
eVitals02 = {
    "9923001": "0",	
    "9923003": "1"
};


eVitals03Map = {
    "9901023":	"3005",
    "9901025":	"3010",	
    "9901027":	"3015",	
    "9901001":	"3020",	
    "9901005":	"3025",
    "9901003":	"3030",	
    "9901007":	"3035",	
    "9901011":	"3040",	
    "9901013":	"3045",	
    "9901015":	"3050",	
    "9901017":	"3055",	
    "9901019":	"3060",	
    "9901021":	"3065",	
    "9901047":	"3070",	
    "9901031":	"3075",	
    "9901033":	"3080",	
    "9901035":	"3085",	
    "9901037":	"3090",	
    "9901039":	"3095",	
    "9901041":	"3100",	
    "9901043":	"3105",
    "9901045":	"3110",	
    "9901049":	"3115",	
    "9901059":	"3120",	
    "9901061":	"3125",	
    "9901063":	"3130",
    "9901065":	"3135",	
    "9901067":	"3140",	
    "9901031":	"3145"};

eVitals08Map = {
    "3308001":"3150",
    "3308003":"3150",
    "3308005":"3155",
    "3308007":"3160",
    "3308009":"3165",
    "3308011":"3170"};

eVitals13Map = {
    "3313003":"3175",
    "3313001":"3180"};

eVitals15Map = {
    "3315001":"3195",	
    "3315003":"3190",	
    "3315005":"3200",	
    "3315007":"3185",
    "3315009":"3190",
    "3315011":"3195",	
    "3315013":"3195"};

eVitals19Map = {
    "1":"1",	
    "2":"2",	
    "3":"3",	
    "4":"4"};

eVitals20Map = {
    "1":"1",	
    "2":"2",	
    "3":"3",	
    "4":"4",
    "5":"5"};

eVitals21Map = {
    "1":"1",	
    "2":"2",	
    "3":"3",	
    "4":"4",
    "5":"5",
    "6":"6"
};
	
eVitals22Map = {
    "3322001": "-5",
    "3322003":	"3210",
    "3322005":	"3225",
    "3322007":	"3215",	
    "3322009":	"3220"};

eVitals25Map = {
    "3325001":	"3230",
    "3325003":	"3230",
    "3325005":	"3230",
    "3325007":	"3235",
    "3325009":	"3240",	
    "3325013":	"3245",	
    "3325015":	"3250"};

eVitals26Map = {
    "3326001":	"3255",	
    "3326003":	"3260",	
    "3326005":	"3265",	
    "3326007":	"3270"};

eVitals29Map = {
    "3329001":	"3275",	
    "3329003":	"3280",
    "3329005":	"3285"};

eVitals31Map = {
    "3331001":"3305",	
    "3331003":"3310",
    "3331005":"3315"};

