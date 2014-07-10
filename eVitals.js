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

var eVitals = new Object;
var _retArray = [];
var OLAPArray = [];
var _PNValue = "";

_retArray.push("<eVitals>" + '\n');
OLAPArray.push("<eVitals>" + '\n');
var seteVitals = function (businessObject) {
    if (typeof businessObject == undefined) {
        SetNotApplicable();
        return;
    };

    OLAPArray.push('\t' + "<eVitals.VitalsGroup>" + '\n');
    _retArray.push('\t' + "<eVitals.VitalsGroup>" + '\n');

    if (typeof businessObject["eVitals.VitalsGroup"] != undefined) {
        console.log(businessObject);
        console.log(businessObject["eVitals.VitalsGroup"].length);

        for (var xx = 0; xx < businessObject["eVitals.VitalsGroup"].length; xx++) {
            console.log(businessObject["eVitals.VitalsGroup"][xx]);

            //eVital.01/////////////////////////////
            _val = getValue(businessObject.elements, "eVitals.01");
            if (_val == null) {
                OLAPArray.push('\t\t' + "<DateTimeVitalSignsTaken>" + "NOT RECORDED" + "</DateTimeVitalSignsTaken>" + '\n');
                v2Array.push({ section: "E14", element: "E14_01", val: v2NOT_RECORDED });
                _retArray.push('\t\t' + "<eVitals.01" + NIL_V3NOT_RECORDED + '\n');
                VitalsGroup["eVitals.01"] = v3NOT_RECORDED;
            }
            else {
                OLAPArray.push('\t\t' + "<DateTimeVitalSignsTaken>" + _val + "</DateTimeVitalSignsTaken>" + '\n');
                v2Array.push({ section: "E14", element: "E14_01", val: _val });
                _retArray.push('\t\t' + "<eVitals.01>" + val + "</eVitals.01>" + '\n');
                VitalsVitalsGroup["eVitals.01"] = _val;

            };


            //eVital.02/////////////////////////////
            _val = getValue(businessObject.elements, "eVitals.02");
            if (_val == null) {
                OLAPArray.push('\t\t' + "<ObtainedPriortothisUnitsEMSCare>" + "NOT RECORDED" + "</ObtainedPriortothisUnitsEMSCare>" + '\n');
                v2Array.push({ section: "E14", element: "E14_02", val: v2NOT_RECORDED });
                _retArray.push('\t\t' + "<eVitals.02" + NIL_V3NOT_RECORDED + '\n');
                VitalsGroup["eVitals.02"] = v3NOT_RECORDED;
            }
            else {
                OLAPArray.push('\t\t' + "<ObtainedPriortothisUnitsEMSCare>" + setCodeText("eVitals.02", _val) + "</ObtainedPriortothisUnitsEMSCare>" + '\n');
                v2Array.push({ section: "E14", element: "E14_02", val: setV2("eVitals.02", _val) });
                VitalsGroup["eVitals.02"] = _val;
                _retArray.push('\t\t' + "<eVitals.02>" + _val + "</eVitals.02>" + '\n');
            };

            _retArray.push('\t\t' + "<CardiacRhythmGroup>" + '\n');
            OLAPArray.push('\t\t' + "<CardiacRhythmGroup>" + '\n');

            //eVital.03/////////////////////////////
            _val = getValue(businessObject.elements, "eVitals.03");
            if (_val == null) {
                if (isRequiredStateElement("eVitals.03")) {
                    if (_val == 8801019) {
                        OLAPArray.push('\t\t\t' + "<CardiacRhythmECG>" + "REFUSED" + "</CardiacRhythmECG>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.03" + PN_REFUSED_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_03", val: v2NOT_AVAILABLE });
                        VitalsGroup["eVitals.03"] = _val;
                    }
                    else if (_val == 8801023) {
                        OLAPArray.push('\t\t\t' + "<CardiacRhythmECG>" + "Unable to Complete" + "</CardiacRhythmECG>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.03" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_03", val: v2NOT_AVAILABLE });
                        VitalsGroup["eVitals.03"] = _val;
                    }
                    else {
                        OLAPArray.push('\t\t\t' + "<CardiacRhythmECG>" + "NOT RECORDED" + "</CardiacRhythmECG>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.03" + v3NOT_RECORDED + '\n');
                        VitalsGroup["eVitals.03"] = v3NOT_RECORDED;
                        v2Array.push({ section: "E14", element: "E14_03", val: v2NOT_RECORDED });
                    }
                }
                else {
                    var arr1 = [];
                    var arr2 = [];
                    VitalsGroup["eVitals.03"] = _val;
                    for (var i = 0; i < businessObject.elements; i++) {
                        OLAPArray.push('\t\t\t' + "<CardiacRhythmECG>" + setCodeText("eVitals.03", _val[i]) + "</CardiacRhythmECG>" + '\n');
                        arr1.push(val[i]);
                        v2Array.push({ section: "E14", element: "E14_03", val: setV2("eVitals.03", _val) });
                        _retArray.push('\t\t\t' + "<eVitals.03>" + val[i] + "</eVitals.03>" + '\n');
                    }
                    VitalsGroup["eVitals.03"] = arr1.slice(0);
                };


                //eVital.04/////////////////////////////
                console.log("business rule required")
                _val = getValue(businessObject.elements, "eVitals.04");
                if (_val == null) {
                    if (isRequiredStateElement("eVitals.04")) {
                        OLAPArray.push('\t\t\t' + "<ECGType>" + "NOT RECORDED" + "</ECGType>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.04" + v3NOT_RECORDED + '\n');
                        VitalsGroup["eVitals.04"] = v3NOT_RECORDED;
                    }
                }
                else {
                    OLAPArray.push('\t\t\t' + "<ECGType>" + setCodeText("eVitals.04", _val[i]) + "</ECGType>" + '\n');
                    _retArray.push('\t\t\t' + "<eVitals.04>" + val[i] + "</eVitals.04>" + '\n');
                    VitalsGroup["eVitals.04"] = _val;
                };


                //eVital.05/////////////////////////////
                _val = getValue(businessObject.elements, "eVitals.05");
                if (_val == null) {
                    OLAPArray.push('\t\t\t' + "<MethodofECGInterpretation>" + "NOT RECORDED" + "</MethodofECGInterpretation>" + '\n');
                    _retArray.push('\t\t\t' + "<eVitals.05" + v3NOT_RECORDED + '\n');
                    VitalsGroup["eVitals.05"] = v3NOT_RECORDED;
                }
                else {
                    var arr1 = [];
                    for (var i = 0; i < businessObject.elements; i++) {
                        arr1.push(val[i]);
                        OLAPArray.push('\t\t\t' + "<MethodofECGInterpretation>" + setCodeText("eVitals.05", _val[i]) + "</MethodofECGInterpretation>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.05" + _val[i] + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.05>" + val[i] + "</eVitals.05>" + '\n');
                    }
                    VitalsGroup["eVitals.05"] = arr1.slice(0);
                };

                _retArray.push('\t\t' + "</CardiacRhythmGroup>" + '\n');
                OLAPArray.push('\t\t' + "</CardiacRhythmGroup>" + '\n');

                _retArray.push('\t\t' + "<BloodPressureGroup>" + '\n');
                OLAPArray.push('\t\t' + "<BloodPressureGroup>" + '\n');



                //eVital.06/////////////////////////////
                _val = getValue(businessObject.elements, "eVitals.06");
                if (_val == null) {
                    _PNValue = getPN("eVitals.06");
                    if (_PNValue != null) {
                        if (_PNValue == "8801019") {
                            OLAPArray.push('\t\t\t' + "<SBP>" + "REFUSED" + "</SBP>" + '\n');
                            _retArray.push('\t\t\t' + "<eVitals.06" + PN_REFUSED_IS_NILLABLE + '\n');
                            v2Array.push({ section: "E14", element: "E14_04", val: v2NOT_KNOWN });
                            VitalsGroup["eVitals.06"] = _PNValue;

                        }
                        else if (_PNValue == "8801023") {
                            OLAPArray.push('\t\t\t' + "<SBP>" + "Unable to Complete" + "</SBP>" + '\n');
                            _retArray.push('\t\t\t' + "<eVitals.06" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE + '\n');
                            v2Array.push({ section: "E14", element: "E14_04", val: v2NOT_KNOWN });
                            VitalsGroup["eVitals.06"] = _PNValue;
                        }
                        else if (_PNValue == "8801005") {
                            OLAPArray.push('\t\t\t' + "<SBP>" + "Exam Finding Not Present" + "</SBP>" + '\n');
                            _retArray.push('\t\t\t' + "<eVitals.06" + PN_FINDING_NOT_PRESENT_IS_NILLABLE + '\n');
                            v2Array.push({ section: "E14", element: "E14_04", val: v2NOT_KNOWN });
                            VitalsGroup["eVitals.06"] = _PNValue;
                        }
                        else {
                            if (isRequiredStateElement("eVitals.06")) {
                                OLAPArray.push('\t\t\t' + "<SBP>" + "NOT RECORDED" + "</SBP>" + '\n');
                                _retArray.push('\t\t\t' + "<eVitals.06" + v3NOT_RECORDED + '\n');
                                v2Array.push({ section: "E14", element: "E14_04", val: v2RECORDED });
                                VitalsGroup["eVitals.06"] = v3NOT_RECORDED;
                            }
                            else {
                                OLAPArray.push('\t\t\t' + "<SBP>" + "NOT REPORTING" + "</SBP>" + '\n');
                                _retArray.push('\t\t\t' + "<eVitals.06" + v3NOT_REPORTING + '\n');
                                v2Array.push({ section: "E14", element: "E14_04", val: v2NOT_REPORTING });
                                VitalsGroup["eVitals.06"] = v3NOT_REPORTING;
                            }
                        }
                    }
                }
                else {
                    OLAPArray.push('\t\t\t' + "<SBP>" + _val + "</SBP>" + '\n');
                    VitalsGroup["eVitals.06"] = _val;
                    v2Array.push({ section: "E14", element: "E14_04", val: _val });
                    _retArray.push('\t\t\t' + "<eVitals.06>" + val + "</eVitals.06>" + '\n');
                };


                //eVitals.07/////////////////////////////
                _val = getValue(businessObject.elements, "eVitals.07");

                if (_val == null) {
                    var _pn = getPN("eVitals.07");
                    if (_PNValue != null) {
                        if (_PNValue == "8801019") {
                            OLAPArray.push('\t\t\t' + "<DBP>" + "REFUSED" + "</DBP>" + '\n');
                            _retArray.push('\t\t\t' + "<eVitals.07" + PN_REFUSED_IS_NILLABLE + '\n');
                            v2Array.push({ section: "E14", element: "E14_05", val: v2NOT_KNOWN });
                            VitalsGroup["eVitals.07"] = _PNValue;
                        }
                        else if (_PNValue == "8801023") {
                            OLAPArray.push('\t\t\t' + "<DBP>" + "Unable to Complete" + "</DBP>" + '\n');
                            _retArray.push('\t\t\t' + "<eVitals.07" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE + '\n');
                            v2Array.push({ section: "E14", element: "E14_05", val: v2NOT_KNOWN });
                            VitalsGroup["eVitals.07"] = _PNValue;
                        }
                        else if (_PNValue == "8801005") {
                            OLAPArray.push('\t\t\t' + "<DBP>" + "Exam Finding Not Present" + "</DBP>" + '\n');
                            _retArray.push('\t\t\t' + "<eVitals.07" + PN_FINDING_NOT_PRESENT_IS_NILLABLE + '\n');
                            v2Array.push({ section: "E14", element: "E14_05", val: v2NOT_KNOWN });
                            VitalsGroup["eVitals.07"] = _PNValue;
                        }
                    }
                    else {
                        if (isRequiredStateElement("eVitals.07")) {
                            OLAPArray.push('\t\t\t' + "<DBP>" + "NOT RECORDED" + "</DBP>" + '\n');
                            _retArray.push('\t\t\t' + "<eVitals.07" + v3NOT_RECORDED + '\n');
                            v2Array.push({ section: "E14", element: "E14_05", val: v2NOT_RECORDED });
                            VitalsGroup["eVitals.07"] = v3NOT_RECORDED;
                        }
                        else {
                            OLAPArray.push('\t\t\t' + "<DBP>" + "NOT REPORTING" + "</DBP>" + '\n');
                            _retArray.push('\t\t\t' + "<eVitals.07" + v3NOT_REPORTING + '\n');
                            v2Array.push({ section: "E14", element: "E14_05", val: v2NOT_REPORTING });
                            VitalsGroup["eVitals.07"] = v3NOT_RECORDED;
                        }
                    }
                }
                else {
                    OLAPArray.push('\t\t\t' + "<DBP>" + _val + "</DBP>" + '\n');
                    _retArray.push('\t\t\t' + "<eVitals.07>" + _val + "</eVitals.07>" + '\n');
                    v2Array.push({ section: "E14", element: "E14_05", val: _val });
                    VitalsGroup["eVitals.07"] = _val;
                };


                //eVital.08/////////////////////////////
                _val = getValue(businessObject.elements, "eVitals.08");
                if (_val == null)
                    if (isRequiredStateElement("eVitals.08")) {
                        OLAPArray.push('\t\t\t' + "<MethodofBloodPressureMeasurement>" + "NOT RECORDED" + "</MethodofBloodPressureMeasurement>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.08>" + NIL_V3NOT_RECORDED + '\n');
                        VitalsGroup["eVitals.08"] = v3NOT_RECORDED;
                        v2Array.push({ section: "E14", element: "E14_05", val: v2NOT_RECORDED });
                    }
                    else {
                        OLAPArray.push('\t\t\t' + "<MethodofBloodPressureMeasurement>" + null + "</MethodofBloodPressureMeasurement>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.08>" + null + "</eVitals.08>" + '\n');
                        VitalsGroup["eVitals.08"] = null;
                        v2Array.push({ section: "E14", element: "E14_05", val: null });
                    }
            }
            else {
                OLAPArray.push('\t\t\t' + "<MethodofBloodPressureMeasurement>" + "NOT RECORDED" + "</MethodofBloodPressureMeasurement>" + '\n');
                _retArray.push('\t\t\t' + "<eVitals.08>" + NIL_V3NOT_RECORDED + '\n');
                VitalsGroup["eVitals.08"] = _val;
                _retArray.push('\t\t\t' + "<eVitals.08>" + _val + "</eVitals.08>" + '\n');
            }


            //eVital.09/////////////////////////////               
            _val = getValue(businessObject.elements, "eVitals.09");
            if (_val == null) {
                OLAPArray.push('\t\t\t' + "<MeanArterialPressure>" + null + "</MeanArterialPressure>" + '\n');
                _retArray.push('\t\t\t' + "<eVitals.09>" + null + "</eVitals.09>" + '\n');
                VitalsGroup["eVitals.09"] = null;
            }
            else {
                OLAPArray.push('\t\t\t' + "<MeanArterialPressure>" + _val + "</MeanArterialPressure>" + '\n');
                _retArray.push('\t\t\t' + "<eVitals.09>" + _val + "</eVitals.09>" + '\n');
                VitalsGroup["eVitals.09"] = _val;
            };

            _retArray.push('\t\t' + "</BloodPressureGroup>" + '\n');
            OLAPArray.push('\t\t' + "</BloodPressureGroup>" + '\n');

            OLAPArray.push('\t\t' + "<HeartRateGroup>" + '\n');
            _retArray.push('\t\t' + "<HeartRateGroup>" + '\n');

            //eVital.10/////////////////////////////               
            _val = getValue(businessObject.elements, "eVitals.10");
            if (_val == null) {
                _PNValue = getPN("eVitals.10");
                if (_PNValue != null) {

                    if (_PNValue == "8801019") {
                        OLAPArray.push('\t\t\t' + "<HeartRate>" + "REFUSED" + "</HeartRate>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.10" + PN_REFUSED_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_07", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.10"] = _PNValue;

                    }
                    else if (_PNValue == "8801023") {
                        OLAPArray.push('\t\t\t' + "<HeartRate>" + "Unable to Complete" + "</HeartRate>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.10" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_07", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.10"] = _PNValue;
                    }
                    else if (_PNValue == "8801005") {
                        OLAPArray.push('\t\t\t' + "<HeartRate>" + "Exam Finding Not Present" + "</HeartRate>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.10" + PN_FINDING_NOT_PRESENT_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_07", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.10"] = _PNValue;
                    }
                    else {
                        if (isRequiredStateElement("eVitals.10")) {
                            OLAPArray.push('\t\t\t' + "<HeartRate>" + "NOT RECORDED" + "</HeartRate>" + '\n');
                            _retArray.push('\t\t\t' + "<eVitals.10" + v3NOT_RECORDED + '\n');
                            v2Array.push({ section: "E14", element: "E14_07", val: v2RECORDED });
                            VitalsGroup["eVitals.10"] = v3NOT_RECORDED;
                        }
                        else {
                            OLAPArray.push('\t\t\t' + "<HeartRate>" + "NOT REPORTING" + "</HeartRate>" + '\n');
                            _retArray.push('\t\t\t' + "<eVitals.10" + v3NOT_REPORTING + '\n');
                            v2Array.push({ section: "E14", element: "E14_07", val: v2NOT_REPORTING });
                            VitalsGroup["eVitals.10"] = v3NOT_REPORTING;
                        }
                    }
                }
            }
            else {
                OLAPArray.push('\t\t\t' + "<HeartRate>" + _val + "</HeartRate>" + '\n');
                VitalsGroup["eVitals.10"] = _val;
                v2Array.push({ section: "E14", element: "E14_07", val: _val });
                _retArray.push('\t\t\t' + "<eVitals.10>" + val + "</eVitals.10>" + '\n');
            };

            //eVital.11/////////////////////////////               
            _val = getValue(businessObject.elements, "eVitals.11");
            if (_val == null) {
                OLAPArray.push('\t\t\t' + "<MethodofHeartRateMeasurement>" + null + "</MethodofHeartRateMeasurement>" + '\n');
                _retArray.push('\t\t\t' + "<eVitals.11>" + null + "</eVitals.11>" + '\n');
                VitalsGroup["eVitals.11"] = null;
            }
            else {
                OLAPArray.push('\t\t\t' + "<MethodofHeartRateMeasurement>" + setCodeText("eVitals.11", _val) + "</MethodofHeartRateMeasurement>" + '\n');
                _retArray.push('\t\t\t' + "<eVitals.11>" + _val + "</eVitals.11>" + '\n');
                VitalsGroup["eVitals.11"] = _val;
            };

            OLAPArray.push('\t\t' + "</HeartRateGroup>" + '\n');
            _retArray.push('\t\t' + "</HeartRateGroup>" + '\n');

            //eVitals.12/////////////////////////////
            _val = getValue(businessObject.elements, "eVitals.12");
            if (_val == null) {
                _PNValue = getPN("eVitals.12");
                if (_PNValue != null) {
                    if (_PNValue == "8801019") {
                        OLAPArray.push('\t\t' + "<PulseOximetry>" + "REFUSED" + "</PulseOximetry>" + '\n');
                        _retArray.push('\t\t' + "<eVitals.12" + PN_REFUSED_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_09", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.12"] = _PNValue;
                    }
                    else if (_PNValue == "8801023") {
                        OLAPArray.push('\t\t' + "<PulseOximetry>" + "Unable to Complete" + "</PulseOximetry>" + '\n');
                        _retArray.push('\t\t' + "<eVitals.12" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_09", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.12"] = _PNValue;
                    }
                    else if (_PNValue == "8801005") {
                        OLAPArray.push('\t\t' + "<PulseOximetry>" + "Exam Finding Not Present" + "</PulseOximetry>" + '\n');
                        _retArray.push('\t\t' + "<eVitals.12" + PN_FINDING_NOT_PRESENT_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_09", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.12"] = _PNValue;
                    }
                }
                else {
                    if (isRequiredStateElement("eVitals.12")) {
                        OLAPArray.push('\t\t' + "<PulseOximetry>" + "NOT RECORDED" + "</PulseOximetry>" + '\n');
                        _retArray.push('\t\t' + "<eVitals.12" + v3NOT_RECORDED + '\n');
                        v2Array.push({ section: "E14", element: "E14_09", val: v2NOT_RECORDED });
                        VitalsGroup["eVitals.12"] = v3NOT_RECORDED;
                    }
                    else {
                        OLAPArray.push('\t\t' + "<PulseOximetry>" + "NOT REPORTING" + "</PulseOximetry>" + '\n');
                        _retArray.push('\t\t' + "<eVitals.12" + v3NOT_REPORTING + '\n');
                        v2Array.push({ section: "E14", element: "E14_09", val: v2NOT_REPORTING });
                        VitalsGroup["eVitals.12"] = v3NOT_RECORDED;
                    }
                }
            }
            else {
                OLAPArray.push('\t\t' + "<PulseOximetry>" + _val + "</PulseOximetry>" + '\n');
                _retArray.push('\t\t' + "<eVitals.12>" + _val + "</eVitals.12>" + '\n');
                v2Array.push({ section: "E14", element: "E14_09", val: _val });
                VitalsGroup["eVitals.12"] = _val;
            };

            //eVital.13/////////////////////////////
            _val = getValue(businessObject.elements, "eVitals.13");
            if (_val == null) {
                OLAPArray.push('\t\t' + "<PulseRhythm>" + null + "</PulseRhythm>" + '\n');
                v2Array.push({ section: "E14", element: "E14_10", val: null });
                _retArray.push('\t\t' + "<eVitals.13>" + null + "</eVitals.13>" + '\n');
                VitalsGroup["eVitals.13"] = null;
            }
            else {
                v2Array.push({ section: "E14", element: "E14_10", val: _val });
                OLAPArray.push('\t\t' + "<PulseRhythm>" + setCodeText("eVitals.13", _val) + "</PulseRhythm>" + '\n');
                _retArray.push('\t\t' + "<eVitals.13>" + _val + "</eVitals.13>" + '\n');
                VitalsGroup["eVitals.13"] = _val;
            };


            //eVitals.14/////////////////////////////
            _val = getValue(businessObject.elements, "eVitals.14");
            if (_val == null) {
                _PNValue = getPN("eVitals.14");
                if (_PNValue != null) {
                    if (_PNValue == "8801019") {
                        OLAPArray.push('\t\t' + "<RespiratoryRate>" + "REFUSED" + "</RespiratoryRate>" + '\n');
                        _retArray.push('\t\t' + "<eVitals.14" + PN_REFUSED_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_11", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.14"] = _PNValue;
                    }
                    else if (_PNValue == "8801023") {
                        OLAPArray.push('\t\t' + "<RespiratoryRate>" + "Unable to Complete" + "</RespiratoryRate>" + '\n');
                        _retArray.push('\t\t' + "<eVitals.14" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_11", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.14"] = _PNValue;
                    }
                    else if (_PNValue == "8801005") {
                        OLAPArray.push('\t\t' + "<RespiratoryRate>" + "Exam Finding Not Present" + "</RespiratoryRate>" + '\n');
                        _retArray.push('\t\t' + "<eVitals.14" + PN_FINDING_NOT_PRESENT_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_11", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.14"] = _PNValue;
                    }
                }
                else {
                    if (isRequiredStateElement("eVitals.14")) {
                        OLAPArray.push('\t\t' + "<RespiratoryRate>" + "NOT RECORDED" + "</RespiratoryRate>" + '\n');
                        _retArray.push('\t\t' + "<eVitals.14" + v3NOT_RECORDED + '\n');
                        v2Array.push({ section: "E14", element: "E14_11", val: v2NOT_RECORDED });
                        VitalsGroup["eVitals.14"] = v3NOT_RECORDED;
                    }
                    else {
                        OLAPArray.push('\t\t' + "<RespiratoryRate>" + "NOT REPORTING" + "</RespiratoryRate>" + '\n');
                        _retArray.push('\t\t' + "<eVitals.14" + v3NOT_REPORTING + '\n');
                        v2Array.push({ section: "E14", element: "E14_11", val: v2NOT_REPORTING });
                        VitalsGroup["eVitals.14"] = v3NOT_RECORDED;
                    }
                }
            }
            else {
                OLAPArray.push('\t\t' + "<RespiratoryRate>" + _val + "</RespiratoryRate>" + '\n');
                _retArray.push('\t\t' + "<eVitals.14>" + _val + "</eVitals.14>" + '\n');
                v2Array.push({ section: "E14", element: "E14_11", val: _val });
                VitalsGroup["eVitals.14"] = _val;
            };


            //eVital.13/////////////////////////////
            _val = getValue(businessObject.elements, "eVitals.13");
            if (_val == null) {
                OLAPArray.push('\t\t' + "<RespiratoryEffort>" + null + "</RespiratoryEffort>" + '\n');
                v2Array.push({ section: "E14", element: "E14_12", val: null });
                _retArray.push('\t\t' + "<eVitals.15>" + null + "</eVitals.15>" + '\n');
                VitalsGroup["eVitals.15"] = null;
            }
            else {
                v2Array.push({ section: "E14", element: "E14_12", val: setV2("eVitals.15", _val) });
                OLAPArray.push('\t\t' + "<RespiratoryEffort>" + setCodeText("eVitals.15", _val) + "</RespiratoryEffort>" + '\n');
                _retArray.push('\t\t' + "<eVitals.15>" + _val + "</eVitals.15>" + '\n');
                VitalsGroup["eVitals.15"] = _val;
            };

            //eVitals.16/////////////////////////////
            _val = getValue(businessObject.elements, "eVitals.16");
            if (_val == null) {
                _PNValue = getPN("eVitals.16");
                if (_PNValue != null) {
                    if (_PNValue == "8801019") {
                        OLAPArray.push('\t\t' + "<CO2>" + "REFUSED" + "</CO2>" + '\n');
                        _retArray.push('\t\t' + "<eVitals.16" + PN_REFUSED_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_13", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.16"] = _PNValue;
                    }
                    else if (_PNValue == "8801023") {
                        OLAPArray.push('\t\t' + "<CO2>" + "Unable to Complete" + "</CO2>" + '\n');
                        _retArray.push('\t\t' + "<eVitals.16" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_13", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.16"] = _PNValue;
                    }
                }
                else {
                    if (isRequiredStateElement("eVitals.16")) {
                        OLAPArray.push('\t\t' + "<CO2>" + "NOT RECORDED" + "</CO2>" + '\n');
                        _retArray.push('\t\t' + "<eVitals.16" + NIL_V3NOT_RECORDED + '\n');
                        v2Array.push({ section: "E14", element: "E14_13", val: v2NOT_RECORDED });
                        VitalsGroup["eVitals.16"] = v3NOT_RECORDED;
                    }
                    else {
                        OLAPArray.push('\t\t' + "<CO2>" + "NOT REPORTING" + "</CO2>" + '\n');
                        _retArray.push('\t\t' + "<eVitals.16" + v3NOT_REPORTING + '\n');
                        v2Array.push({ section: "E14", element: "E14_13", val: v2NOT_REPORTING });
                        VitalsGroup["eVitals.16"] = v3NOT_RECORDED;
                    }
                }
            }
            else {
                OLAPArray.push('\t\t' + "<CO2>" + _val + "</CO2>" + '\n');
                _retArray.push('\t\t' + "<eVitals.16>" + _val + "</eVitals.16>" + '\n');
                v2Array.push({ section: "E14", element: "E14_13", val: _val });
                VitalsGroup["eVitals.16"] = _val;
            };


            //eVitals.17/////////////////////////////
            _val = getValue(businessObject.elements, "eVitals.17");
            if (_val == null) {
                _PNValue = getPN("eVitals.17");
                if (_PNValue != null) {
                    if (_PNValue == "8801019") {
                        OLAPArray.push('\t\t' + "<CarbonMonoxide>" + "REFUSED" + "</CarbonMonoxide>" + '\n');
                        _retArray.push('\t\t' + "<eVitals.17" + PN_REFUSED_IS_NILLABLE + '\n');
                        VitalsGroup["eVitals.17"] = _PNValue;
                    }
                    else if (_PNValue == "8801023") {
                        OLAPArray.push('\t\t' + "<CarbonMonoxide>" + "Unable to Complete" + "</CarbonMonoxide>" + '\n');
                        _retArray.push('\t\t' + "<eVitals.17" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE + '\n');
                        VitalsGroup["eVitals.17"] = _PNValue;
                    }
                }
                else {
                    if (isRequiredStateElement("eVitals.17")) {
                        OLAPArray.push('\t\t' + "<CarbonMonoxide>" + "NOT RECORDED" + "</CarbonMonoxide>" + '\n');
                        _retArray.push('\t\t' + "<eVitals.17" + v3NOT_RECORDED + '\n');
                        VitalsGroup["eVitals.17"] = v3NOT_RECORDED;
                    }
                    else {
                        OLAPArray.push('\t\t' + "<CarbonMonoxide>" + "NOT REPORTING" + "</CarbonMonoxide>" + '\n');
                        _retArray.push('\t\t' + "<eVitals.17" + v3NOT_REPORTING + '\n');
                        VitalsGroup["eVitals.17"] = v3NOT_RECORDED;
                    }
                }
            }
            else {
                OLAPArray.push('\t\t' + "<CarbonMonoxide>" + _val + "</CarbonMonoxide>" + '\n');
                _retArray.push('\t\t' + "<eVitals.17>" + _val + "</eVitals.17>" + '\n');
                VitalsGroup["eVitals.17"] = _val;
            };

            //eVitals.18/////////////////////////////
            _val = getValue(businessObject.elements, "eVitals.18");
            if (_val == null) {
                _PNValue = getPN("eVitals.18");
                if (_PNValue != null) {
                    if (_PNValue == "8801019") {
                        OLAPArray.push('\t\t' + "<BloodGlucoseLevel>" + "REFUSED" + "</BloodGlucoseLevel>" + '\n');
                        _retArray.push('\t\t' + "<eVitals.18" + PN_REFUSED_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_14", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.18"] = _PNValue;
                    }
                    else if (_PNValue == "8801023") {
                        OLAPArray.push('\t\t' + "<BloodGlucoseLevel>" + "Unable to Complete" + "</BloodGlucoseLevel>" + '\n');
                        _retArray.push('\t\t' + "<eVitals.18" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_14", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.18"] = _PNValue;
                    }
                }
                else {
                    if (isRequiredStateElement("eVitals.18")) {
                        OLAPArray.push('\t\t' + "<BloodGlucoseLevel>" + "NOT RECORDED" + "</BloodGlucoseLevel>" + '\n');
                        _retArray.push('\t\t' + "<eVitals.18" + v3NOT_RECORDED + '\n');
                        v2Array.push({ section: "E14", element: "E14_14", val: v2NOT_RECORDED });
                        VitalsGroup["eVitals.18"] = v3NOT_RECORDED;
                    }
                    else {
                        OLAPArray.push('\t\t' + "<BloodGlucoseLevel>" + null + "</BloodGlucoseLevel>" + '\n');
                        _retArray.push('\t\t' + "<eVitals.18>" + null + "</eVitals.18>" + '\n');
                        v2Array.push({ section: "E14", element: "E14_14", val: null });
                        VitalsGroup["eVitals.18"] = null;
                    }
                }
            }
            else {
                v2Array.push({ section: "E14", element: "E14_14", val: _val });
                OLAPArray.push('\t\t' + "<BloodGlucoseLevel>" + _val + "</BloodGlucoseLevel>" + '\n');
                _retArray.push('\t\t' + "<eVitals.18>" + _val + "</eVitals.18>" + '\n');
                VitalsGroup["eVitals.18"] = _val;
            };

            OLAPArray.push('\t\t' + "<GlasgowScoreGroup>" + '\n');
            _retArray.push('\t\t' + "<GlasgowScoreGroup>" + '\n');


            //eVitals.19/////////////////////////////
            _val = getValue(businessObject.elements, "eVitals.19");
            if (_val == null) {
                _PNValue = getPN("eVitals.19");
                if (_PNValue != null) {
                    if (_PNValue == "8801019") {
                        OLAPArray.push('\t\t\t' + "<GlasgowComaScoreEye>" + "REFUSED" + "</GlasgowComaScoreEye>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.19" + PN_REFUSED_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_15", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.19"] = _PNValue;
                    }
                    else if (_PNValue == "8801023") {
                        OLAPArray.push('\t\t\t' + "<GlasgowComaScoreEye>" + "Unable to Complete" + "</GlasgowComaScoreEye>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.19" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_15", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.19"] = _PNValue;
                    }
                }
                else {
                    if (isRequiredStateElement("eVitals.19")) {
                        OLAPArray.push('\t\t\t' + "<GlasgowComaScoreEye>" + "NOT RECORDED" + "</GlasgowComaScoreEye>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.19" + v3NOT_RECORDED + '\n');
                        v2Array.push({ section: "E14", element: "E14_15", val: v2NOT_RECORDED });
                        VitalsGroup["eVitals.19"] = v3NOT_RECORDED;
                    }
                    else {
                        OLAPArray.push('\t\t\t' + "<GlasgowComaScoreEye>" + null + "</GlasgowComaScoreEye>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.19>" + null + "</eVitals.19>" + '\n');
                        v2Array.push({ section: "E14", element: "E14_15", val: null });
                        VitalsGroup["eVitals.19"] = null;
                    }
                }
            }
            else {
                v2Array.push({ section: "E14", element: "E14_15", val: _val });
                OLAPArray.push('\t\t\t' + "<GlasgowComaScoreEye>" + setCodeText("eVitals.19", _val) + "</GlasgowComaScoreEye>" + '\n');
                _retArray.push('\t\t\t' + "<eVitals.19>" + _val + "</eVitals.19>" + '\n');
                VitalsGroup["eVitals.19"] = _val;
            };

            //eVital.20/////////////////////////////        
            _val = getValue(businessObject.elements, "eVitals.20");
            if (_val == null) {
                _PNValue = getPN("eVitals.20");
                if (_PNValue != null) {
                    if (_PNValue == "8801019") {
                        OLAPArray.push('\t\t\t' + "<GlasgowComaScoreVerbal>" + "REFUSED" + "</GlasgowComaScoreVerbal>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.20" + PN_REFUSED_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_16", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.20"] = _PNValue;
                    }
                    else if (_PNValue == "8801023") {
                        OLAPArray.push('\t\t\t' + "<GlasgowComaScoreVerbal>" + "Unable to Complete" + "</GlasgowComaScoreVerbal>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.20" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_16", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.20"] = _PNValue;
                    }
                }
                else {
                    if (isRequiredStateElement("eVitals.20")) {
                        OLAPArray.push('\t\t\t' + "<GlasgowComaScoreVerbal>" + "NOT RECORDED" + "</GlasgowComaScoreVerbal>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.20" + v3NOT_RECORDED + '\n');
                        v2Array.push({ section: "E14", element: "E14_16", val: v2NOT_RECORDED });
                        VitalsGroup["eVitals.20"] = v3NOT_RECORDED;
                    }
                    else {
                        OLAPArray.push('\t\t\t' + "<GlasgowComaScoreVerbal>" + null + "</GlasgowComaScoreVerbal>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.20>" + null + "</eVitals.20>" + '\n');
                        v2Array.push({ section: "E14", element: "E14_16", val: null });
                        VitalsGroup["eVitals.20"] = null;
                    }
                }
            }
            else {
                v2Array.push({ section: "E14", element: "E14_16", val: _val });
                OLAPArray.push('\t\t\t' + "<GlasgowComaScoreVerbal>" + setCodeText("eVitals.20", _val) + "</GlasgowComaScoreVerbal>" + '\n');
                _retArray.push('\t\t\t' + "<eVitals.20>" + _val + "</eVitals.20>" + '\n');
                VitalsGroup["eVitals.20"] = _val;
            };



            //eVital.21/////////////////////////////        
            _val = getValue(businessObject.elements, "eVitals.21");
            if (_val == null) {
                _PNValue = getPN("eVitals.21");
                if (_PNValue != null) {
                    if (_PNValue == "8801019") {
                        OLAPArray.push('\t\t\t' + "<GlasgowComaScoreMotor>" + "REFUSED" + "</GlasgowComaScoreMotor>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.21" + PN_REFUSED_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_23", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.21"] = _PNValue;
                    }
                    else if (_PNValue == "8801023") {
                        OLAPArray.push('\t\t\t' + "<GlasgowComaScoreMotor>" + "Unable to Complete" + "</GlasgowComaScoreMotor>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.21" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_23", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.21"] = _PNValue;
                    }
                }
                else {
                    if (isRequiredStateElement("eVitals.21")) {
                        OLAPArray.push('\t\t\t' + "<GlasgowComaScoreMotor>" + "NOT RECORDED" + "</GlasgowComaScoreMotor>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.21" + v3NOT_RECORDED + '\n');
                        v2Array.push({ section: "E14", element: "E14_23", val: v2NOT_RECORDED });
                        VitalsGroup["eVitals.21"] = v3NOT_RECORDED;
                    }
                    else {
                        OLAPArray.push('\t\t\t' + "<GlasgowComaScoreMotor>" + null + "</GlasgowComaScoreMotor>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.21>" + null + "</eVitals.21>" + '\n');
                        v2Array.push({ section: "E14", element: "E14_23", val: null });
                        VitalsGroup["eVitals.21"] = null;
                    }
                }
            }
            else {
                v2Array.push({ section: "E14", element: "E14_23", val: _val });
                OLAPArray.push('\t\t\t' + "<GlasgowComaScoreMotor>" + setCodeText("eVitals.21", _val) + "</GlasgowComaScoreMotor>" + '\n');
                _retArray.push('\t\t\t' + "<eVitals.21>" + _val + "</eVitals.21>" + '\n');
                VitalsGroup["eVitals.21"] = _val;
            };

            //eVital.22/////////////////////////////        
            _val = getValue(businessObject.elements, "eVitals.22");
            if (_val == null) {
                _PNValue = getPN("eVitals.22");
                if (_PNValue != null) {
                    if (_PNValue == "8801019") {
                        OLAPArray.push('\t\t\t' + "<GlasgowComaScoreQualifier>" + "REFUSED" + "</GlasgowComaScoreQualifier>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.22" + PN_REFUSED_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_18", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.22"] = _PNValue;
                    }
                    else if (_PNValue == "8801023") {
                        OLAPArray.push('\t\t\t' + "<GlasgowComaScoreQualifier>" + "Unable to Complete" + "</GlasgowComaScoreQualifier>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.22" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_18", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.22"] = _PNValue;
                    }
                }
                else {
                    if (isRequiredStateElement("eVitals.22")) {
                        OLAPArray.push('\t\t\t' + "<GlasgowComaScoreQualifier>" + "NOT RECORDED" + "</GlasgowComaScoreQualifier>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.22" + v3NOT_RECORDED + '\n');
                        v2Array.push({ section: "E14", element: "E14_18", val: v2NOT_RECORDED });
                        VitalsGroup["eVitals.22"] = v3NOT_RECORDED;
                    }
                    else {
                        OLAPArray.push('\t\t\t' + "<GlasgowComaScoreQualifier>" + null + "</GlasgowComaScoreQualifier>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.22>" + null + "</eVitals.22>" + '\n');
                        v2Array.push({ section: "E14", element: "E14_18", val: null });
                        VitalsGroup["eVitals.22"] = null;
                    }
                }
            }
            else {
                v2Array.push({ section: "E14", element: "E14_18", val: _val });
                OLAPArray.push('\t\t\t' + "<GlasgowComaScoreQualifier>" + setCodeText("eVitals.22", _val) + "</GlasgowComaScoreQualifier>" + '\n');
                _retArray.push('\t\t\t' + "<eVitals.22>" + _val + "</eVitals.22>" + '\n');
                VitalsGroup["eVitals.22"] = _val;
            };

            //eVital.23/////////////////////////////        

            _val = getValue(businessObject.elements, "eVitals.23 ");
            if (_val == null) {
                _PNValue = getPN("eVitals.23 ");
                if (_PNValue != null) {
                    if (_PNValue == "8801019") {
                        OLAPArray.push('\t\t' + "<GlasgowComaScoreScore>" + "REFUSED" + "</GlasgowComaScoreScore>" + '\n');
                        _retArray.push('\t\t' + "<eVitals.23 " + PN_REFUSED_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_19", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.23 "] = _PNValue;
                    }
                    else if (_PNValue == "8801023") {
                        OLAPArray.push('\t\t' + "<GlasgowComaScoreScore>" + "Unable to Complete" + "</GlasgowComaScoreScore>" + '\n');
                        _retArray.push('\t\t' + "<eVitals.23 " + PN_UNABLE_TO_COMPLETE_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_19", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.23 "] = _PNValue;
                    }
                }
                else {
                    if (isRequiredStateElement("eVitals.23 ")) {
                        OLAPArray.push('\t\t' + "<GlasgowComaScoreScore>" + "NOT RECORDED" + "</GlasgowComaScoreScore>" + '\n');
                        _retArray.push('\t\t' + "<eVitals.23 " + NIL_V3NOT_RECORDED + '\n');
                        v2Array.push({ section: "E14", element: "E14_19", val: v2NOT_RECORDED });
                        VitalsGroup["eVitals.23 "] = v3NOT_RECORDED;
                    }
                    else {
                        OLAPArray.push('\t\t' + "<GlasgowComaScoreScore>" + "NOT REPORTING" + "</GlasgowComaScoreScore>" + '\n');
                        _retArray.push('\t\t' + "<eVitals.23 " + NIL_V3NOT_REPORTING + '\n');
                        v2Array.push({ section: "E14", element: "E14_19", val: v2NOT_REPORTING });
                        VitalsGroup["eVitals.23 "] = v3NOT_REPORTING;
                    }
                }
            }
            else {
                v2Array.push({ section: "E14", element: "E14_19", val: _val });
                OLAPArray.push('\t\t' + "<GlasgowComaScoreScore>" + setCodeText("eVitals.23 ", _val) + "</GlasgowComaScoreScore>" + '\n');
                _retArray.push('\t\t' + "<eVitals.23 >" + _val + "</eVitals.23 >" + '\n');
                VitalsGroup["eVitals.23 "] = _val;
            };

            OLAPArray.push('\t\t' + "</GlasgowScoreGroup>" + '\n');
            _retArray.push('\t\t' + "</GlasgowScoreGroup>" + '\n');

            OLAPArray.push('\t\t' + "<TemperatureGroup>" + '\n');
            _retArray.push('\t\t' + "<TemperatureGroup>" + '\n');

            //eVital.24/////////////////////////////        
            _val = getValue(businessObject.elements, "eVitals.24  ");
            if (_val == null) {
                _PNValue = getPN("eVitals.24  ");
                if (_PNValue != null) {
                    if (_PNValue == "8801019") {
                        OLAPArray.push('\t\t\t' + "<Temperature>" + "REFUSED" + "</Temperature>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.24  " + PN_REFUSED_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_20", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.24  "] = _PNValue;
                    }
                    else if (_PNValue == "8801023") {
                        OLAPArray.push('\t\t\t' + "<Temperature>" + "Unable to Complete" + "</Temperature>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.24  " + PN_UNABLE_TO_COMPLETE_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_20", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.24  "] = _PNValue;
                    }
                }
                else {
                    if (isRequiredStateElement("eVitals.24  ")) {
                        OLAPArray.push('\t\t\t' + "<Temperature>" + "NOT RECORDED" + "</Temperature>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.24  " + NIL_V3NOT_RECORDED + '\n');
                        v2Array.push({ section: "E14", element: "E14_20", val: v2NOT_RECORDED });
                        VitalsGroup["eVitals.24  "] = v3NOT_RECORDED;
                    }
                    else {
                        OLAPArray.push('\t\t\t' + "<Temperature>" + "NOT REPORTING" + "</Temperature>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.24  " + NIL_V3NOT_REPORTING + '\n');
                        v2Array.push({ section: "E14", element: "E14_20", val: v2NOT_REPORTING });
                        VitalsGroup["eVitals.24  "] = v3NOT_REPORTING;
                    }
                }
            }
            else {
                v2Array.push({ section: "E14", element: "E14_20", val: _val });
                OLAPArray.push('\t\t\t' + "<Temperature>" + setCodeText("eVitals.24  ", _val) + "</Temperature>" + '\n');
                _retArray.push('\t\t\t' + "<eVitals.24  >" + _val + "</eVitals.24  >" + '\n');
                VitalsGroup["eVitals.24  "] = _val;
            };

            //eVital.25/////////////////////////////   

            _val = getValue(businessObject.elements, "eVitals.25");
            if (_val == null) {
                OLAPArray.push('\t\t\t' + "<TemperatureMethod>" + null + "</TemperatureMethod>" + '\n');
                v2Array.push({ section: "E14", element: "E14_21", val: null });
                _retArray.push('\t\t\t' + "<eVitals.25>" + null + "</eVitals.25>" + '\n');
                VitalsGroup["eVitals.25"] = null;
            }
            else {
                v2Array.push({ section: "E14", element: "E14_21", val: setV2("eVitals.25", _val) });
                OLAPArray.push('\t\t\t' + "<TemperatureMethod>" + setCodeText("eVitals.25", _val) + "</TemperatureMethod>" + '\n');
                _retArray.push('\t\t\t' + "<eVitals.25>" + _val + "</eVitals.25>" + '\n');
                VitalsGroup["eVitals.25"] = _val;
            };


            OLAPArray.push('\t\t' + "</TemperatureGroup>" + '\n');
            _retArray.push('\t\t' + "</TemperatureGroup>" + '\n');


            //eVital.26/////////////////////////////   
            _val = getValue(businessObject.elements, "eVitals.26");
            if (_val == null) {
                OLAPArray.push('\t\t' + "<LevelofResponsiveness>" + "NOT RECORDED" + "</LevelofResponsiveness>" + '\n');
                _retArray.push('\t\t' + "<eVitals.26  " + NIL_V3NOT_RECORDED + '\n');
                v2Array.push({ section: "E14", element: "E14_22", val: v2NOT_RECORDED });
                VitalsGroup["eVitals.26"] = v3NOT_RECORDED;

            }
            else {
                v2Array.push({ section: "E14", element: "E14_22", val: setV2("eVitals.26", _val) });
                OLAPArray.push('\t\t\t' + "<LevelofResponsiveness>" + setCodeText("eVitals.26", _val) + "</LevelofResponsiveness>" + '\n');
                _retArray.push('\t\t\t' + "<eVitals.26>" + _val + "</eVitals.26>" + '\n');
                VitalsGroup["eVitals.26"] = _val;
            };

            OLAPArray.push('\t\t' + "<PainScaleGroup>" + '\n');
            _retArray.push('\t\t' + "<PainScaleGroup>" + '\n');

            //eVital.27/////////////////////////////   
            _val = getValue(businessObject.elements, "eVitals.27 ");
            if (_val == null) {
                _PNValue = getPN("eVitals.27");
                if (_PNValue != null) {
                    if (_PNValue == "8801019") {
                        OLAPArray.push('\t\t\t' + "<PainScaleScore>" + "REFUSED" + "</PainScaleScore>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.27 " + PN_REFUSED_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_23", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.27"] = _PNValue;
                    }
                    else if (_PNValue == "8801023") {
                        OLAPArray.push('\t\t\t' + "<PainScaleScore>" + "Unable to Complete" + "</PainScaleScore>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.27 " + PN_UNABLE_TO_COMPLETE_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_23", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.27"] = _PNValue;
                    }
                }
                else {
                    if (isRequiredStateElement("eVitals.27")) {
                        OLAPArray.push('\t\t\t' + "<PainScaleScore>" + "NOT RECORDED" + "</PainScaleScore>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.27" + NIL_V3NOT_RECORDED + '\n');
                        v2Array.push({ section: "E14", element: "E14_23", val: v2NOT_RECORDED });
                        VitalsGroup["eVitals.27"] = v3NOT_RECORDED;
                    }
                    else {
                        OLAPArray.push('\t\t\t' + "<PainScaleScore>" + null + "</PainScaleScore>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.27>" + null + "</eVitals.27 >" + '\n');
                        v2Array.push({ section: "E14", element: "E14_23", val: null });
                        VitalsGroup["eVitals.27"] = null;
                    }
                }
            }
            else {
                v2Array.push({ section: "E14", element: "E14_23", val: _val });
                OLAPArray.push('\t\t\t' + "<PainScaleScore>" + setCodeText("eVitals.27 ", _val) + "</PainScaleScore>" + '\n');
                _retArray.push('\t\t\t' + "<eVitals.27>" + _val + "</eVitals.27>" + '\n');
                VitalsGroup["eVitals.27"] = _val;
            };
            //eVital.28/////////////////////////////   
            _val = getValue(businessObject.elements, "eVitals.28");
            if (_val == null) {
                if (isRequiredStateElement("eVitals.28")) {
                    OLAPArray.push('\t\t\t' + "<PainScaleType>" + "NOT RECORDED" + "</PainScaleType>" + '\n');
                    _retArray.push('\t\t\t' + "<eVitals.28" + NIL_V3NOT_RECORDED + '\n');
                    VitalsGroup["eVitals.28"] = v3NOT_RECORDED;
                }
                else {
                    OLAPArray.push('\t\t\t' + "<PainScaleType>" + "NOT REPORTING" + "</PainScaleType>" + '\n');
                    _retArray.push('\t\t\t' + "<eVitals.28" + NIL_V3NOT_REPORTING + '\n');
                    v2Array.push({ section: "E14", element: "E14_23", val: null });
                    VitalsGroup["eVitals.27"] = null;
                }
            }
            else {
                OLAPArray.push('\t\t\t' + "<PainScaleType>" + setCodeText("eVitals.28", _val) + "</PainScaleType>" + '\n');
                _retArray.push('\t\t\t' + "<eVitals.28>" + _val + "</eVitals.28>" + '\n');
                VitalsGroup["eVitals.28"] = _val;
            };

            OLAPArray.push('\t\t' + "</PainScaleGroup>" + '\n');
            _retArray.push('\t\t' + "</PainScaleGroup>" + '\n');

            OLAPArray.push('\t\t' + "<StrokeScaleGroup>" + '\n');
            _retArray.push('\t\t' + "<StrokeScaleGroup>" + '\n');


            //eVital.29/////////////////////////////   
            _val = getValue(businessObject.elements, "eVitals.29 ");
            if (_val == null) {
                _PNValue = getPN("eVitals.29");
                if (_PNValue != null) {
                    if (_PNValue == "8801019") {
                        OLAPArray.push('\t\t\t' + "<StrokeScaleScore>" + "REFUSED" + "</StrokeScaleScore>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.29 " + PN_REFUSED_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_24", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.29"] = _PNValue;
                    }
                    else if (_PNValue == "8801023") {
                        OLAPArray.push('\t\t\t' + "<StrokeScaleScore>" + "Unable to Complete" + "</StrokeScaleScore>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.29 " + PN_UNABLE_TO_COMPLETE_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_24", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.29"] = _PNValue;
                    }
                }
                else {
                    if (isRequiredStateElement("eVitals.29")) {
                        OLAPArray.push('\t\t\t' + "<StrokeScaleScore>" + "NOT RECORDED" + "</StrokeScaleScore>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.29" + NIL_V3NOT_RECORDED + '\n');
                        v2Array.push({ section: "E14", element: "E14_24", val: v2NOT_RECORDED });
                        VitalsGroup["eVitals.29"] = v3NOT_RECORDED;
                    }
                    else {
                        OLAPArray.push('\t\t\t' + "<StrokeScaleScore>" + null + "</StrokeScaleScore>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.29>" + null + "</eVitals.29 >" + '\n');
                        v2Array.push({ section: "E14", element: "E14_24", val: null });
                        VitalsGroup["eVitals.29"] = null;
                    }
                }
            }
            else {
                v2Array.push({ section: "E14", element: "E14_24", val: _val });
                OLAPArray.push('\t\t\t' + "<StrokeScaleScore>" + setCodeText("eVitals.29 ", _val) + "</StrokeScaleScore>" + '\n');
                _retArray.push('\t\t\t' + "<eVitals.29>" + _val + "</eVitals.29>" + '\n');
                VitalsGroup["eVitals.29"] = _val;
            };

            //eVital.30/////////////////////////////   
            _val = getValue(businessObject.elements, "eVitals.30");
            if (_val == null) {
                if (isRequiredStateElement("eVitals.30")) {
                    OLAPArray.push('\t\t\t' + "<StrokeScaleType>" + "NOT RECORDED" + "</StrokeScaleType>" + '\n');
                    _retArray.push('\t\t\t' + "<eVitals.30" + NIL_V3NOT_RECORDED + '\n');
                    VitalsGroup["eVitals.30"] = v3NOT_RECORDED;
                }
                else {
                    OLAPArray.push('\t\t\t' + "<StrokeScaleType>" + "NOT REPORTING" + "</StrokeScaleType>" + '\n');
                    _retArray.push('\t\t\t' + "<eVitals.30" + NIL_V3NOT_REPORTING + '\n');
                    VitalsGroup["eVitals.30"] = null;
                }
            }
            else {
                OLAPArray.push('\t\t\t' + "<StrokeScaleType>" + setCodeText("eVitals.30", _val) + "</StrokeScaleType>" + '\n');
                _retArray.push('\t\t\t' + "<eVitals.30>" + _val + "</eVitals.30>" + '\n');
                VitalsGroup["eVitals.30"] = _val;
            };
            OLAPArray.push('\t\t' + "<StrokeScaleGroup>" + '\n');
            _retArray.push('\t\t' + "<StrokeScaleGroup>" + '\n');


            //eVital.31/////////////////////////////   
            _val = getValue(businessObject.elements, "eVitals.31 ");
            if (_val == null) {
                _PNValue = getPN("eVitals.31");
                if (_PNValue != null) {
                    if (_PNValue == "8801019") {
                        OLAPArray.push('\t\t\t' + "<ReperfusionChecklist>" + "REFUSED" + "</ReperfusionChecklist>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.31 " + PN_REFUSED_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_25", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.31"] = _PNValue;
                    }
                    else if (_PNValue == "8801023") {
                        OLAPArray.push('\t\t\t' + "<ReperfusionChecklist>" + "Unable to Complete" + "</ReperfusionChecklist>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.31 " + PN_UNABLE_TO_COMPLETE_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_25", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.31"] = _PNValue;
                    }
                }
                else {
                    if (isRequiredStateElement("eVitals.31")) {
                        OLAPArray.push('\t\t\t' + "<ReperfusionChecklist>" + "NOT RECORDED" + "</ReperfusionChecklist>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.31" + NIL_V3NOT_RECORDED + '\n');
                        v2Array.push({ section: "E14", element: "E14_25", val: v2NOT_RECORDED });
                        VitalsGroup["eVitals.31"] = v3NOT_RECORDED;
                    }
                    else {
                        OLAPArray.push('\t\t\t' + "<ReperfusionChecklist>" + null + "</ReperfusionChecklist>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.31>" + null + "</eVitals.31 >" + '\n');
                        v2Array.push({ section: "E14", element: "E14_25", val: null });
                        VitalsGroup["eVitals.31"] = null;
                    }
                }
            }
            else {
                v2Array.push({ section: "E14", element: "E14_25", val: _val });
                OLAPArray.push('\t\t\t' + "<ReperfusionChecklist>" + setCodeText("eVitals.31 ", _val) + "</ReperfusionChecklist>" + '\n');
                _retArray.push('\t\t\t' + "<eVitals.31>" + _val + "</eVitals.31>" + '\n');
                VitalsGroup["eVitals.31"] = _val;
            };

            //eVital.32/////////////////////////////   
            _val = getValue(businessObject.elements, "eVitals.32 ");
            if (_val == null) {
                _PNValue = getPN("eVitals.32");
                if (_PNValue != null) {
                    if (_PNValue == "8801023") {
                        OLAPArray.push('\t\t\t' + "<APGAR>" + "Unable to Complete" + "</APGAR>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.32 " + PN_UNABLE_TO_COMPLETE_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_26", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.32"] = _PNValue;
                    }
                }
                else {
                    if (isRequiredStateElement("eVitals.32")) {
                        OLAPArray.push('\t\t\t' + "<APGAR>" + "NOT RECORDED" + "</APGAR>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.32" + NIL_V3NOT_RECORDED + '\n');
                        v2Array.push({ section: "E14", element: "E14_26", val: v2NOT_RECORDED });
                        VitalsGroup["eVitals.32"] = v3NOT_RECORDED;
                    }
                    else {
                        OLAPArray.push('\t\t\t' + "<APGAR>" + null + "</APGAR>" + '\n');
                        _retArray.push('\t\t\t' + "<eVitals.32>" + null + "</eVitals.32 >" + '\n');
                        v2Array.push({ section: "E14", element: "E14_26", val: null });
                        VitalsGroup["eVitals.32"] = null;
                    }
                }
            }
            else {
                v2Array.push({ section: "E14", element: "E14_26", val: _val });
                OLAPArray.push('\t\t\t' + "<APGAR>" + _val + "</APGAR>" + '\n');
                _retArray.push('\t\t\t' + "<eVitals.32>" + _val + "</eVitals.32>" + '\n');
                VitalsGroup["eVitals.32"] = _val;
            };

            //eVital.33/////////////////////////////   
            _val = getValue(businessObject.elements, "eVitals.33 ");
            if (_val == null) {
                _PNValue = getPN("eVitals.33");
                if (_PNValue != null) {
                    if (_PNValue == "8801019") {
                        OLAPArray.push('\t\t' + "<RevisedTraumaScore>" + "REFUSED" + "</RevisedTraumaScore>" + '\n');
                        _retArray.push('\t\t' + "<eVitals.33 " + PN_REFUSED_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_27", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.33"] = _PNValue;
                    }
                    else if (_PNValue == "8801023") {
                        OLAPArray.push('\t\t' + "<RevisedTraumaScore>" + "Unable to Complete" + "</RevisedTraumaScore>" + '\n');
                        _retArray.push('\t\t' + "<eVitals.31 " + PN_UNABLE_TO_COMPLETE_IS_NILLABLE + '\n');
                        v2Array.push({ section: "E14", element: "E14_27", val: v2NOT_KNOWN });
                        VitalsGroup["eVitals.33"] = _PNValue;
                    }
                }
                else {
                    OLAPArray.push('\t\t' + "<RevisedTraumaScore>" + null + "</RevisedTraumaScore>" + '\n');
                    _retArray.push('\t\t' + "<eVitals.33>" + null + "</eVitals.33 >" + '\n');
                    v2Array.push({ section: "E14", element: "E14_27", val: null });
                    VitalsGroup["eVitals.33"] = null;
                }
            }
            else {
                v2Array.push({ section: "E14", element: "E14_27", val: _val });
                OLAPArray.push('\t\t\t' + "<RevisedTraumaScore>" + _val + "</RevisedTraumaScore>" + '\n');
                _retArray.push('\t\t\t' + "<eVitals.33>" + _val + "</eVitals.33>" + '\n');
                VitalsGroup["eVitals.31"] = _val;
            };
        }
    }
    _retArray.push("</VitalsGroup>+ '\n'");
    OLAPArray.push("</VitalsGroup>+ '\n'");
}



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

function SetNotApplicable() {
    VitalsGroup["eVitals.01"] = V3NOT_APPLICABLE
    E14.E14_01 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.01" + NIL_V3NOT_APPLICABLE);

    VitalsGroup["eVitals.02"] = NIL_V3NOT_APPLICABLE
    E14.E14_02 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.02" + NIL_V3NOT_APPLICABLE);

    _retArray.push("<eVitals.03" + NIL_V3NOT_APPLICABLE);
    CardiacRhythmGroup["eVitals.03"] = v3NOT_APPLICABLE;
    E14.E14_03 = v2NOT_APPLICABLE;

    _retArray.push("<eVitals.04" + NIL_V3NOT_APPLICABLE);
    CardiacRhythmGroup["eVitals.04"] = v3NOT_APPLICABLE;

    _retArray.push("<eVitals.05" + NIL_V3NOT_APPLICABLE);
    CardiacRhythmGroup["eVitals.05"] = v3NOT_APPLICABLE;

    BloodPressureGroup["eVitals.06"] = V3NOT_APPLICABLE
    E14.E14_04 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.06" + NIL_V3NOT_APPLICABLE);

    BloodPressureGroup["eVitals.07"] = V3NOT_APPLICABLE
    E14.E14_05 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.07" + NIL_V3NOT_APPLICABLE);

    BloodPressureGroup["eVitals.08"] = V3NOT_APPLICABLE
    E14.E14_06 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.08" + NIL_V3NOT_APPLICABLE);

    HeartRateGroup["eVitals.10"] = V3NOT_APPLICABLE
    E14.E14_07 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.10" + NIL_V3NOT_APPLICABLE);

    VitalsGroup["eVitals.12"] = V3NOT_APPLICABLE
    E14.E14_09 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.12" + NIL_V3NOT_APPLICABLE);

    VitalsGroup["eVitals.14"] = V3NOT_APPLICABLE
    E14.E14_11 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.14" + NIL_V3NOT_APPLICABLE);

    VitalsGroup["eVitals.16"] = V3NOT_APPLICABLE
    E14.E14_13 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.16" + NIL_V3NOT_APPLICABLE);

    VitalsGroup["eVitals.17"] = V3NOT_APPLICABLE
    _retArray.push("<eVitals.17" + NIL_V3NOT_APPLICABLE);

    VitalsGroup["eVitals.18"] = V3NOT_APPLICABLE
    E14.E14_14 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.18" + NIL_V3NOT_APPLICABLE);

    GlasgowScoreGroup["eVitals.19"] = V3NOT_APPLICABLE
    E14.E14_15 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.19" + NIL_V3NOT_APPLICABLE);

    GlasgowScoreGroup["eVitals.20"] = V3NOT_APPLICABLE
    E14.E14_16 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.20" + NIL_V3NOT_APPLICABLE);

    GlasgowScoreGroup["eVitals.21"] = V3NOT_APPLICABLE
    E14.E14_23 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.21" + NIL_V3NOT_APPLICABLE);

    GlasgowScoreGroup["eVitals.22"] = V3NOT_APPLICABLE
    E14.E14_18 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.22" + NIL_V3NOT_APPLICABLE);

    GlasgowScoreGroup["eVitals.23"] = V3NOT_APPLICABLE
    E14.E14_19 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.23" + NIL_V3NOT_APPLICABLE);

    TemperatureGroup["eVitals.24"] = V3NOT_APPLICABLE
    E14.E14_20 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.24" + NIL_V3NOT_APPLICABLE);

    VitalsGroup["eVitals.26"] = V3NOT_APPLICABLE
    E14.E14_22 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.26" + NIL_V3NOT_APPLICABLE);

    PainScaleGroup["eVitals.27"] = V3NOT_APPLICABLE
    E14.E14_23 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.27" + NIL_V3NOT_APPLICABLE);


    StrokeScaleGroup["eVitals.29"] = V3NOT_APPLICABLE
    E14.E14_24 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.29" + NIL_V3NOT_APPLICABLE);

    StrokeScaleGroup["eVitals.30"] = V3NOT_APPLICABLE
    _retArray.push("<eVitals.30" + NIL_V3NOT_APPLICABLE);

    VitalsGroup["eVitals.31"] = V3NOT_APPLICABLE
    E14.E14_25 = v2NOT_APPLICABLE;
    _retArray.push("<eVitals.31" + NIL_V3NOT_APPLICABLE);

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
    "9901023": "3005",
    "9901025": "3010",
    "9901027": "3015",
    "9901001": "3020",
    "9901005": "3025",
    "9901003": "3030",
    "9901007": "3035",
    "9901011": "3040",
    "9901013": "3045",
    "9901015": "3050",
    "9901017": "3055",
    "9901019": "3060",
    "9901021": "3065",
    "9901047": "3070",
    "9901031": "3075",
    "9901033": "3080",
    "9901035": "3085",
    "9901037": "3090",
    "9901039": "3095",
    "9901041": "3100",
    "9901043": "3105",
    "9901045": "3110",
    "9901049": "3115",
    "9901059": "3120",
    "9901061": "3125",
    "9901063": "3130",
    "9901065": "3135",
    "9901067": "3140",
    "9901031": "3145"
};

eVitals08Map = {
    "3308001": "3150",
    "3308003": "3150",
    "3308005": "3155",
    "3308007": "3160",
    "3308009": "3165",
    "3308011": "3170"
};

eVitals13Map = {
    "3313003": "3175",
    "3313001": "3180"
};

eVitals15Map = {
    "3315001": "3195",
    "3315003": "3190",
    "3315005": "3200",
    "3315007": "3185",
    "3315009": "3190",
    "3315011": "3195",
    "3315013": "3195"
};

eVitals19Map = {
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4"
};

eVitals20Map = {
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5"
};

eVitals21Map = {
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6"
};

eVitals22Map = {
    "3322001": "-5",
    "3322003": "3210",
    "3322005": "3225",
    "3322007": "3215",
    "3322009": "3220"
};

eVitals25Map = {
    "3325001": "3230",
    "3325003": "3230",
    "3325005": "3230",
    "3325007": "3235",
    "3325009": "3240",
    "3325013": "3245",
    "3325015": "3250"
};

eVitals26Map = {
    "3326001": "3255",
    "3326003": "3260",
    "3326005": "3265",
    "3326007": "3270"
};

eVitals29Map = {
    "3329001": "3275",
    "3329003": "3280",
    "3329005": "3285"
};

eVitals31Map = {
    "3331001": "3305",
    "3331003": "3310",
    "3331005": "3315"
};

var eVitals334_02 = {

 "9923001" : "No", 
 "9923003" : "Yes", 
}
var eVitals334_03 = {

    "9901001" : "Agonal/Idioventricular", 
    "9901003" : "Asystole", 
    "9901005" : "Artifact", 
    "9901007" : "Atrial Fibrillation", 
    "9901009" : "Atrial Flutter", 
    "9901011" : "AV Block-1st Degree", 
    "9901013" : "AV Block-2nd Degree-Type 1", 
    "9901015" : "AV Block-2nd Degree-Type 2", 
    "9901017" : "AV Block-3rd Degree", 
    "9901019" : "Junctional", 
    "9901021" : "Left Bundle Branch Block", 
    "9901023" : "Non-STEMI Anterior Ischemia", 
    "9901025" : "Non-STEMI Inferior Ischemia", 
    "9901027" : "Non-STEMI Lateral Ischemia", 
    "9901029" : "Non-STEMI Posterior Ischemia", 
    "9901031" : "Other (Not Listed)", 
    "9901033" : "Paced Rhythm", 
    "9901035" : "PEA", 
    "9901037" : "Premature Atrial Contractions", 
    "9901039" : "Premature Ventricular Contractions", 
    "9901041" : "Right Bundle Branch Block", 
    "9901043" : "Sinus Arrhythmia", 
    "9901045" : "Sinus Bradycardia", 
    "9901047" : "Sinus Rhythm", 
    "9901049" : "Sinus Tachycardia", 
    "9901051" : "STEMI Anterior Ischemia", 
    "9901053" : "STEMI Inferior Ischemia", 
    "9901055" : "STEMI Lateral Ischemia", 
    "9901057" : "STEMI Posterior Ischemia", 
    "9901059" : "Supraventricular Tachycardia", 
    "9901061" : "Torsades De Points", 
    "9901063" : "Unknown AED Non-Shockable Rhythm", 
    "9901065" : "Unknown AED Shockable Rhythm", 
    "9901067" : "Ventricular Fibrillation", 
    "9901069" : "Ventricular Tachycardia (With Pulse)", 
    "9901071" : "Ventricular Tachycardia (Pulseless)"
};
var eVitals334_04 = {
    "3304001" : "3 Lead", 
    "3304003" : "4 Lead", 
    "3304005" : "5 Lead", 
    "3304007" : "12 Lead-Left Sided (Normal)", 
    "3304009" : "12 Lead-Right Sided", 
    "3304011" : "15 Lead", 
    "3304013" : "18 Lead", 
    "3304015" : "Other (Not Listed)"
};
var eVitals334_05 = {
    "3305001" : "Computer Interpretation", 
    "3305003" : "Manual Interpretation", 
    "3305005" : "Transmission with No Interpretation", 
    "3305007" : "Transmission with Remote Interpretation"
};
var eVitals334_08 = {
    "3308001" : "Arterial Line", 
    "3308003" : "Doppler", 
    "3308005" : "Cuff-Automated", 
    "3308007" : "Cuff-Manual Auscultated", 
    "3308009" : "Cuff-Manual Palpated Only", 
    "3308011" : "Venous Line"
};
var eVitals334_11 = {
    "3311001" : "Auscultated", 
    "3311003" : "Doppler", 
    "3311005" : "Electronic Monitor - Cardiac", 
    "3311007" : "Electronic Monitor - Pulse Oximeter", 
    "3311009" : "Electronic Monitor (Other)", 
    "3311011" : "Palpated" 
};
var eVitals334_13 = {
    "3313001" : "Irregularly Irregular", 
    "3313003" : "Regular", 
    "3313005" : "Regularly Irregular"
};
var eVitals334_15 = {
    "3315001" : "Apneic", 
    "3315003" : "Labored", 
    "3315005" : "Mechanically Assisted (BVM; CPAP;etc)", 
    "3315007" : "Normal", 
    "3315009" : "Rapid", 
    "3315011" : "Shallow", 
    "3315013" : "Weak/Agonal"
};
var eVitals334_19 = {
    "1" : "No eye movement when assessed (All Age Groups)", 
    "2" : "Opens Eyes to painful stimulation (All Age Groups)", 
    "3" : "Opens Eyes to verbal stimulation (All Age Groups)", 
    "4" : "Opens Eyes spontaneously (All Age Groups)"
};
var eVitals334_20 = {
    "1" : "No verbal/vocal response (All Age Groups)", 
    "2" : "Incomprehensible sounds (>2 Years); Inconsolable; agitated", 
    "3" : "Inappropriate words (>2 Years); Inconsistently consolable; moaning", 
    "4" : "Confused (>2 Years); Cries but is consolable; inappropriate interactions", 
    "5" : "Oriented (>2 Years); Smiles; oriented to sounds; follows objects; interacts"
};
var eVitals334_21 = {
    "1" : "No Motor Response (All Age Groups)", 
    "2" : "Extension to pain (All Age Groups)", 
    "3" : "Flexion to pain (All Age Groups)", 
    "4" : "Withdrawal from pain (All Age Groups)", 
    "5" : "Localizing pain (All Age Groups)", 
    "6" : "Obeys commands (>2Years); Appropriate response to stimulation"
};
var eVitals334_22 = {
    "3322001" : "Eye Obstruction Prevents Eye Assessment", 
    "3322003" : "Initial GCS has legitimate values without interventions such as intubation and sedation", 
    "3322005" : "Patient Chemically Paralyzed", 
    "3322007" : "Patient Chemically Sedated", 
    "3322009" : "Patient Intubated"
};
var eVitals334_25 = {
    "3325001": "Axillary",
    "3325003": "Central (Venous or Arterial)",
    "3325005": "Esophageal",
    "3325007": "Oral",
    "3325009": "Rectal",
    "3325011": "Temporal Artery",
    "3325013": "Tympanic",
    "3325015": "Urinary Catheter"
};
var eVitals334_26 = {
    "3326001": "Alert",
    "3326003": "Verbal",
    "3326005": "Painful",
    "3326007": "Unresponsive"
};
var eVitals334_28 = {
    "3328001": "FLACC (Face; Legs; Activity; Cry; Consolability)",
    "3328003": "Numeric (0-10)",
    "3328005": "Other (Not Listed)",
    "3328007": "Wong-Baker (FACES)"
};
var eVitals334_29 = {
    "3329001": "Negative",
    "3329003": "Non-Conclusive",
    "3329005": "Positive"
};
var eVitals334_30 = {
    "3330001": "Cincinnati",
    "3330003": "Los Angeles",
    "3330005": "Massachusetts",
    "3330007": "Miami Emergency Neurologic Deficit (MEND)",
    "3330009": "NIH",
    "3330011": "Other Stoke Scale Type"
};

var eVitals334_31 = {
    "3331001": "Definite Contraindications to Thrombolytic Use",
    "3331003": "No Contraindications to Thrombolytic Use",
    "3331005": "Possible Contraindications to Thrombolytic Use"
};



function setCodeText(NEMSISElementNumber, codeVal) {
    var _return = [];


    switch (NEMSISElementNumber) {

        case "eVitals.02":
            if (eVitals334_02[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_02[codeVal];
            }
            break;

        case "eVitals.03":
            if (eVitals334_03[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_03[codeVal];
            }
            break;

        case "eVitals.06":
            if (eVitals334_06[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_06[codeVal];
            }
            break;

        case "eVitals.07":
            if (eVitals334_07[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_07[codeVal];
            }
            break;
        case "eVitals.08":
            if (eVitals334_08[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_08[codeVal];
            }
            break;

        case "eVitals.13":
            if (eVitals334_13[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_13[codeVal];
            }
            break;

        case "eVitals.14":
            if (eVitals334_14[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_14[codeVal];
            }
            break;
        case "eVitals.15":
            if (eVitals334_15[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_15[codeVal];
            }
            break;

        case "eVitals.19":
            if (eVitals334_19[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_19[codeVal];
            }
            break;

        case "eVitals.20":
            if (eVitals334_20[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_20[codeVal];
            }
            break;

        case "eVitals.21":
            if (eVitals334_21[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_21[codeVal];
            }
            break;
        case "eVitals.22":
            if (eVitals334_22[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_22[codeVal];
            }
            break;

        case "eVitals.25":
            if (eVitals334_25[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_25[codeVal];
            }
            break;

        case "eVitals.26":
            if (eVitals334_26[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_26[codeVal];
            }
            break;

        case "eVitals.28":
            if (eVitals334_28[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_28[codeVal];
            }
            break;
        case "eVitals.29":
            if (eVitals334_29[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_29[codeVal];
            }
            break;

        case "eVitals.30":
            if (eVitals334_30[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_30[codeVal];
            }
            break;
        case "eVitals.31":
            if (eVitals334_31[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_31[codeVal];
            }
            break;
        default:
            _return = " UNDEFINED";
    }
    return _return;

};