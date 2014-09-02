//Create the highest level Object:  Call
//Call.PCR:  PCR Object
//Call.Name Call Date/Time/Rig
//Call.PCR.V334XML = EMS XMLWriter Object
//Call.PCR.V221XML = EMS XMLWriter Object
//Call.PCR.eCAD = CAD XMLWriter Object
//Call.PCR.eMED = eMED XMLWriter Object
//Call.PCRStatus:  Complete/Incomplete
//Call.Status[]: Cancelled, InProgress, 
/*
ALS Emergency
ALS Non Emergency
BLS Emergency
BLS Non-Emergency
RMA
Wheelchair
Paramedic Intercept
Contract Standby
Standby

NEED TREATMENT INVENTORY - HasAirway, HasArrest

*/

var createThePatient = function (parseObject, TheCall) {
    var Call = new Object();
    console.log(parseObject)


    /////////////////////////////////
    /////////////////////////////////
    var d = new Date();
    var d2 = new Date();
    var d3 = new Date();
    d2.setHours(d.getHours() - 2);
    d3.setHours(d.getHours() - 1);
    Call.StartAirwayTime = d2;
    Call.EndAirwayTime = d3;
    /////////////////////////////////
    /////////////////////////////////
    var eDispatchObject = new Object();
    var eDispositionObject = new Object();
    var eRecordObject = new Object();
    var eTimesObject = new Object();
    var eScenebject = new Object();
    var v221Array = [];
    var v334Array = [];


    Call.AirTransport = false;
    Call.PatientTransfer = false;
    Call.isCancelled = false; //eDisposition["eDisposition.12"] !="4212007")  //if Cancelled prior to arrival on Scene, no data
    Call.HasPatient = true;
    Call.isCancelled = false;
    Call.isEmergent = true;
    //console.log(Call)


    ///////////////////////////////////ePatient
    ePatientObject = getObjectFromOLTPExtract(parseObject, "ePatient");
    var _ePatientObject = new Object();
    ePatientObject.HasDataSet = false;
    if (ePatientObject.IsUndefined != true) {
        ePatientObject.HasDataSet = true;
    };
    _ePatientObject = setePatient(ePatientObject, Call);
    ////////////////////////////////////////////////////////////////

    ///////////////////////////////////eHistory
    ePatientObject = getObjectFromOLTPExtract(parseObject, "ePatient");
    var _ePatientObject = new Object();
    ePatientObject.HasDataSet = false;
    if (ePatientObject.IsUndefined != true) {
        ePatientObject.HasDataSet = true;
    };
    _ePatientObject = setePatient(ePatientObject, Call);
    ////////////////////////////////////////////////////////////////


    ///////////////////////////////////ePayment
    ePaymentsObject = getObjectFromOLTPExtract(parseObject, "ePayment");
    var _ePaymentsObject = new Object();
    ePaymentsObject.HasDataSet = false;
    if (ePaymentsObject.IsUndefined != true) {
        ePaymentsObject.HasDataSet = true;
    };
    _ePaymentsObject = setePayment(ePaymentsObject, Call);
    ////////////////////////////////////////////////////////////////


    ///////////////////////////////////eScene
    eSceneObject = getObjectFromOLTPExtract(parseObject, "eScene");
    var _eSceneObject = new Object();
    eSceneObject.HasDataSet = false;
    if (eSceneObject.IsUndefined != true) {
        eSceneObject.HasDataSet = true;
    };
    _eSceneObject = seteScene(eSceneObject, Call);
    ////////////////////////////////////////////////////////////////

    ///////////////////////////////////eSituation
    eSituationObject = getObjectFromOLTPExtract(parseObject, "eSituation");
    var _eSituationObject = new Object();
    eSituationObject.HasDataSet = false;
    if (eSituationObject.IsUndefined != true) {
        eSituationObject.HasDataSet = true;
    };
    _eSituationObject = seteSituation(eSituationObject, Call);
    ////////////////////////////////////////////////////////////////

    ///////////////////////////////////eInjury
    eInjuryObject = getObjectFromOLTPExtract(parseObject, "eInjury");
    var _eInjuryObject = new Object();
    eInjuryObject.HasDataSet = false;
    if (eInjuryObject.IsUndefined != true) {
        eInjuryObject.HasDataSet = true;
    };
    _eInjuryObject = seteInjury(eInjuryObject, Call);
    ////////////////////////////////////////////////////////////////


};
var setePatient = function (pPatient, Call) {
    var ePatient = new Object();
    var _patient = new Object();

    var ePatientObject = new Object()

    if (pPatient.HasDataSet == true) {
        pPatient.IsValid = true;
        /*   ////////Check for cancelled calls, Standby, non-patient
           if ((Call.HasPatient == true) && (Call.HasTreatment == true) && (eResponse.StandBy == false)) {
               eVitals.IsValid = true;
           }
           else {
               setnA
               return eVitals;
           };
          */

        var _eL = []
        _eL = getSectionIndex(pPatient, "ePatient")

        //////////////////////ePatient.01
        var _ePatient = new Object();
        _ePatient.HasErrors = false;
        _ePatient.HasData = false;
        _ePatient.Name = "ePatient.01";

        _patient = getValue(elementList, "ePatient.01");
        if (ePatient.HasPatient == true) {
            if (_patient.IsNull != true) {
                _val = _patient.ValueArray[0].val;
                _ePatient.HasData = true;
                _ePatient.Value = _val;
            }
        };
        _vg.push(_ePatient);
        delete _ePatient;


        ///////////ePatient.05////////
        _val = getValue(elementList, "ePatient.05");
        var _ePatient = new Object();
        _ePatient.HasErrors = false;
        _ePatient.HasData = false;
        _ePatient.Name = "ePatient.05";

        if (Call.HasPatient == true) {
            if (_patient.IsNull == true) {
                _ePatient.HasErrors = true;
                _ePatient.Error = "Patient Address Required";
            }
            else {
                _val = _patient.ValueArray[0].val;
                _protocol.HasData = true;
                _protocol.Value = _val;
                v2Array.push({ section: "E06", element: "E06_04", val: _val });
            }
        }
        else {
            _ePatient.HasErrors = true;
            _ePatient.Error = "Call/Transport does not include Patient";
        };
        _vg.push(_ePatient);
        delete _ePatient;

        ///////////ePatient.06////////
        var _ePatient = new Object();
        _ePatient.HasErrors = false;
        _ePatient.HasData = false;
        _ePatient.Name = "ePatient.06";

        _patient = getValue(elementList, "ePatient.06");
        if (Call.HasPatient == true) {
            if (_patient.IsNull == true) {
                _ePatient.HasErrors = true;
                _ePatient.Error = "Patient Address Required";
                v2Array.push({ section: "E06", element: "E06_05", val: v2NOT_RECORDED });
            }
            else {
                _val = _patient.ValueArray[0].val;
                _protocol.HasData = true;
                _protocol.Value = _val;
                v2Array.push({ section: "E06", element: "E06_05", val: _val });
            }
        }
        else {
            _ePatient.HasErrors = true;
            _ePatient.Error = "Call/Transport does not include Patient";
        };
        _vg.push(_ePatient);
        delete _ePatient;

        ///////////ePatient.07////////
        var _ePatient = new Object();
        _ePatient.HasErrors = false;
        _ePatient.HasData = false;
        _ePatient.Name = "ePatient.07";

        _patient = getValue(elementList, "ePatient.07");
        if (Call.HasPatient == true) {
            if (_patient.IsNull == true) {
                if (isRequiredStateElement("ePatient.07")) {
                    _ePatient.NV = "7701003";
                    v2Array.push({ section: "E06", element: "E06_06", val: v2NOT_RECORDED });
                }
            }
            else {
                _val = _patient.ValueArray[0].val;
                _protocol.HasData = true;
                _protocol.Value = _val;
                v2Array.push({ section: "E06", element: "E06_06", val: _val });
            }
        }
        else
            v2Array.push({ section: "E06", element: "E06_06", val: v2NOT_APPLICABLE });
        _ePatient.NV = "7701001";
    };
    _vg.push(_ePatient);
    delete _ePatient;

    ///////////ePatient.08////////
    var _ePatient = new Object();
    _ePatient.HasErrors = false;
    _ePatient.HasData = false;
    _ePatient.Name = "ePatient.08";

    _patient = getValue(elementList, "ePatient.08");
    if (Call.HasPatient == true) {
        if (_patient.IsNull == true) {
            if (isRequiredStateElement("ePatient.08")) {
                _ePatient.NV = "7701003";
                v2Array.push({ section: "E06", element: "E06_07", val: v2NOT_RECORDED });
            }
        }
        else {
            _val = _patient.ValueArray[0].val;
            _protocol.HasData = true;
            _protocol.Value = _val;
            v2Array.push({ section: "E06", element: "E06_07", val: _val });
        }
    }
    else {
        _ePatient.NV = "7701001";
        v2Array.push({ section: "E06", element: "E06_07", val: v2NOT_APPLICABLE });
    };
    _vg.push(_ePatient);
    delete _ePatient;


    ///////////ePatient.09////////
    var _ePatient = new Object();
    _ePatient.HasErrors = false;
    _ePatient.HasData = false;
    _ePatient.Name = "ePatient.09";

    _patient = getValue(elementList, "ePatient.09");
    if (Call.HasPatient == true) {
        if (_patient.IsNull == true) {
            if (isRequiredStateElement("ePatient.09")) {
                _ePatient.NV = "7701003";
                v2Array.push({ section: "E06", element: "E06_08", val: v2NOT_RECORDED });
            }
        }
        else {
            _val = _patient.ValueArray[0].val;
            _protocol.HasData = true;
            _protocol.Value = _val;
            v2Array.push({ section: "E06", element: "E06_08", val: _val });
        }
    }
    else {
        _ePatient.NV = "7701001";
        v2Array.push({ section: "E06", element: "E06_08", val: v2NOT_APPLICABLE });
    };
    _vg.push(_ePatient);
    delete _ePatient;


    ///////////ePatient.10////////
    var _ePatient = new Object();
    _ePatient.HasErrors = false;
    _ePatient.HasData = false;
    _ePatient.Name = "ePatient.10";

    _patient = getValue(elementList, "ePatient.10");
    if (Call.HasPatient == true) {
        if (_patient.IsNull != true) {
            _val = _patient.ValueArray[0].val;
            _protocol.HasData = true;
            _protocol.Value = _val;
            v2Array.push({ section: "E06", element: "E06_09", val: _val });
        }
    };
    _vg.push(_ePatient);
    delete _ePatient;


    ///////////ePatient.11////////
    var _ePatient = new Object();
    _ePatient.HasErrors = false;
    _ePatient.HasData = false;
    _ePatient.Name = "ePatient.11";

    _patient = getValue(elementList, "ePatient.11");
    if (Call.HasPatient == true) {
        if (_patient.IsNull != true) {
            _val = _patient.ValueArray[0].val;
            _protocol.HasData = true;
            _protocol.Value = _val;

        }
    };

    _vg.push(_ePatient);
    delete _ePatient;

    ///////////ePatient.12////////
    var _ePatient = new Object();
    _ePatient.HasErrors = false;
    _ePatient.HasData = false;
    _ePatient.Name = "ePatient.12";

    _patient = getValue(elementList, "ePatient.12");
    if (Call.HasPatient == true) {
        if (_patient.IsNull != true) {
            _val = _patient.ValueArray[0].val;
            _protocol.HasData = true;
            _protocol.Value = _val;
        }
    };
    _vg.push(_ePatient);
    delete _ePatient;


    ///////////ePatient.13////////
    var _ePatient = new Object();
    _ePatient.HasErrors = false;
    _ePatient.HasData = false;
    _ePatient.Name = "ePatient.13";

    _patient = getValue(elementList, "ePatient.13");
    if (Call.HasPatient == true) {
        if (_patient.IsNull == true) {
            if (isRequiredStateElement("ePatient.13")) {
                _ePatient.NV = "7701003";
                v2Array.push({ section: "E06", element: "E06_11", val: v2NOT_REPORTING });
            }
        }
        else {
            _val = _patient.ValueArray[0].val;
            _protocol.HasData = true;
            _protocol.Value = _val;
            v2Array.push({ section: "E06", element: "E06_11", val: setV2("ePatient.13", _val) });
        }
    }
    else {
        _ePatient.NV = "7701001";
        v2Array.push({ section: "E06", element: "E06_11", val: v2NOT_APPLICABLE });
    };
    _vg.push(_ePatient);
    delete _ePatient;


    ///////////ePatient.14////////
    var _ePatient = new Object();
    _ePatient.HasErrors = false;
    _ePatient.HasData = false;
    _ePatient.Name = "ePatient.14";

    _patient = getValue(elementList, "ePatient.14");
    if (Call.HasPatient == true) {
        if (_patient.IsNull == true) {
            if (isRequiredStateElement("ePatient.14")) {
                _ePatient.NV = "7701003";
                v2Array.push({ section: "E06", element: "E06_12", val: v2NOT_RECORDED });
            }
        }
        else {
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _patient.ValueArray.length; i++) {
                if ((_patient.ValueArray[i].HasValue == true) && (arr1.indexOf(_patient.ValueArray[i].val) == -1)) {
                    _val = _patient.ValueArray[i].val
                    arr1.push(_val);
                    _meds.HasData = true;
                    _patient.Value = _val;

                    arr2.push(SetV2("eMedications.08", _val))
                }
            };

            v2Array.push({ section: "E06", element: "E06_12", val: arr2.slice(0) });
            _ePatient.Value = arr1.slice(0);
        }
    }
    else {
        _ePatient.NV = "7701001";
        v2Array.push({ section: "E06", element: "E06_12", val: v2NOT_APPLICABLE });
    };
    _vg.push(_ePatient);
    delete _ePatient;


    ///////////ePatient.17////////
    var _ePatient = new Object();
    _ePatient.HasErrors = false;
    _ePatient.HasData = false;
    _ePatient.Name = "ePatient.17";

    _patient = getValue(elementList, "ePatient.17");
    if (Call.HasPatient == true) {
        if (_patient.HasPN == true) {
            v2Array.push({ section: "E06", element: "E06_16", val: v2NOT_KNOWN });
            if (PNValue != null) {
                if (_patient.pn == "DeniedByOrder") {
                    _patient.PN = "8801003"
                }
                else if (_patient.pn == "Refused") {
                    _patient.PN = "8801019"
                }
                else {
                    _eMeds.PN = "8801023"
                    v2Array.push({ section: "E19", element: "E19_03", val: v2NOT_KNOWN });
                }
            }
            else {
                if (isRequiredStateElement("ePatient.17")) {
                    _meds.NV = "7701003";
                    v2Array.push({ section: "E06", element: "E06_16", val: v2NOT_RECORDED });
                }
                else {
                    _meds.NV = "7701005";
                    v2Array.push({ section: "E06", element: "E06_16", val: v2NOT_REPORTING });
                }
            }
        }
        else {
            _val = _patient.ValueArray[0].val;
            _patient.HasData = true;
            _patient.Value = _val;
            v2Array.push({ section: "E06", element: "E06_16", val: _val });
        }
    }
    else {
        _meds.NV = "7701001";
        v2Array.push({ section: "E06", element: "E06_16", val: v2NOT_APPLICABLE });
    };
    _vg.push(_ePatient);
    delete _ePatient;


    //ePatient.18////////////
    var _ePatient = new Object();
    _ePatient.HasErrors = false;
    _ePatient.HasData = false;
    _ePatient.Name = "ePatient.17";

    _patient = getValue(elementList, "ePatient.18");
    if (Call.HasPatient == true) {
        if (_patient.IsNull != true) {
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _patient.ValueArray[0].length; i++) {
                _val = _meds.ValueArray[i].val;
                arr1.push(_val);
            }
        };
        _ePatient.NV = arr1.slice(0);
        v2Array.push({ section: "E06", element: "E06_17", val: sPatHomeNum });
    };
    _vg.push(_ePatient);
    delete _ePatient;

    //ePatient.19////////////
    var _ePatient = new Object();
    _ePatient.HasErrors = false;
    _ePatient.HasData = false;
    _ePatient.Name = "ePatient.19";

    _patient = getValue(elementList, "ePatient.19");
    if (Call.HasPatient == true) {
        if (_patient.IsNull != true) {
            if (_patient.IsNull != true) {
                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _patient.ValueArray[0].length; i++) {
                    _val = _patient.ValueArray[i].val;
                    arr1.push(_val);
                }
            };
            _ePatient.NV = arr1.slice(0);
        }
    };
    _vg.push(_ePatient);
    delete _ePatient;

    //ePatient.20////////////
    var _ePatient = new Object();
    _ePatient.HasErrors = false;
    _ePatient.HasData = false;
    _ePatient.Name = "ePatient.20";

    _patient = getValue(elementList, "ePatient.20");
    if (Call.HasPatient == true) {
        if (_patient.IsNull != true) {
            _val = _patient.ValueArray[0].val;
            _patient.HasData = true;
            _patient.Value = _val;
            v2Array.push({ section: "E06", element: "E06_18", val: setV2("ePatient.19", _val) });
        };
        _vg.push(_ePatient);
        delete _ePatient;

        //ePatient.21////////////
        var _ePatient = new Object();
        _ePatient.HasErrors = false;
        _ePatient.HasData = false;
        _ePatient.Name = "ePatient.21";

        _patient = getValue(elementList, "ePatient.21");
        if (Call.HasPatient == true) {
            if (_patient.IsNull != true) {
                _val = _patient.ValueArray[0].val;
                _patient.HasData = true;
                _patient.Value = _val;
                v2Array.push({ section: "E06", element: "E06_19", val: _val });
            }
        };
        _vg.push(_ePatient);
        delete _ePatient;

        ////////////////////////////////////NAME GROUP////////////////////////////
        if (pPatient.HasDataSet == true) {
            _sectionIndex = getSectionIndex(pPatient, "ePatient.PatientNameGroup");
            if (_sectionIndex != -1) {
                _PNG = []
                var _PNG = pExam.attributes.sections[_sectionIndex].attributes.elements;

                //////////////////////ePatient.02
                var _ePatient = new Object();
                _ePatient.HasErrors = false;
                _ePatient.HasData = false;
                _ePatient.Name = "ePatient.02";

                _patient = getValue(_PNG, "ePatient.02");
                if (Call.HasPatient == true) {
                    if (_patient.IsNull == true) {
                        if (_patient.HasPN == true) {
                            v2Array.push({ section: "E06", element: "E06_01", val: v2NOT_KNOWN });
                            if (_patient.pn == "Refused") {
                                _patient.PN = "8801019";
                                _pArr2.push({ section: "E14", element: "E14_04", val: v2NOT_KNOWN });
                            }
                            else {
                                _patient.PN = "8801023";
                                _pArr2.push({ section: "E14", element: "E14_04", val: v2NOT_KNOWN });
                            }
                        }
                        else {
                            if (isRequiredStateElement("ePatient.02")) {
                                _ePatient.NV = "7701003";
                                v2Array.push({ section: "E06", element: "E06_01", val: v2NOT_RECORDED });
                            }
                            else {
                                _ePatient.NV = "7701005";
                                v2Array.push({ section: "E06", element: "E06_01", val: v2NOT_REPORTING });
                            }
                        }
                    }
                    else {
                        _val = _patient.ValueArray[0].val;
                        _patient.HasData = true;
                        _patient.Value = _val;
                        v2Array.push({ section: "E06", element: "E06_01", val: _val });
                    }
                }
                else {
                    _ePatient.NV = "7701001";
                    v2Array.push({ section: "E06", element: "E06_01", val: v2NOT_APPLICABLE });

                };
                _vg.push(_ePatient);
                delete _ePatient;



                ///////////ePatient.03////////
                var _ePatient = new Object();
                _ePatient.HasErrors = false;
                _ePatient.HasData = false;
                _ePatient.Name = "ePatient.03";

                _patient = getValue(_PNG, "ePatient.03");
                if (Call.HasPatient == true) {
                    if (_patient.IsNull == true) {
                        if (_patient.HasPN == true) {
                            v2Array.push({ section: "E06", element: "E06_02", val: v2NOT_KNOWN });
                            if (_vitals.pn == "Refused") {
                                _patient.PN = "8801019";
                            }
                            else {
                                _patient.PN = "8801023";

                            }
                        }
                        else {
                            if (isRequiredStateElement("ePatient.03")) {
                                _ePatient.NV = "7701003";
                                v2Array.push({ section: "E06", element: "E06_02", val: v2NOT_RECORDED });
                            }
                            else {
                                _ePatient.NV = "7701005";
                                v2Array.push({ section: "E06", element: "E06_02", val: v2NOT_REPORTING });
                            }
                        }
                    }
                    else {
                        _val = _patient.ValueArray[0].val;
                        _patient.HasData = true;
                        _patient.Value = _val;
                        v2Array.push({ section: "E06", element: "E06_02", val: _val });
                    }
                }
                else {
                    _ePatient.NV = "7701001";
                    v2Array.push({ section: "E06", element: "E06_02", val: v2NOT_APPLICABLE });
                };
                _vg.push(_ePatient);
                delete _ePatient;


                ///////////ePatient.04////////
                var _ePatient = new Object();
                _ePatient.HasErrors = false;
                _ePatient.HasData = false;
                _ePatient.Name = "ePatient.04";

                _patient = getValue(_PAG, "ePatient.04");
                if (Call.HasPatient == true) {
                    if (_patient.IsNull != true) {
                        _val = _patient.ValueArray[0].val;
                        _patient.HasData = true;
                        _patient.Value = _val;
                        v2Array.push({ section: "E06", element: "E06_03", val: _val });
                    }
                };
            };
            //////////////////////AGE GROUP
            ////////////////////////////////////NAME GROUP////////////////////////////
            if (pPatient.HasDataSet == true) {
                _sectionIndex = getSectionIndex(pPatient, "ePatient.AgeGroup");
                _PAG = []
                var _PAG = pExam.attributes.sections[_sectionIndex].attributes.elements;

                ///////////ePatient.15////////
                _patient = getValue(elementList, "ePatient.15");
                if (Call.HasPatient == true) {
                    if (_patient.IsNull == true) {
                        if (isRequiredStateElement("ePatient.15")) {
                            _ePatient.NV = "7701003";
                            v2Array.push({ section: "E06", element: "E06_14", val: v2NOT_RECORDED });
                        }
                    }
                    else {
                        _val = _patient.ValueArray[0].val;
                        _patient.HasData = true;
                        _patient.Value = _val;
                        v2Array.push({ section: "E06", element: "E06_14", val: _val });
                    }
                }
                else {
                    _ePatient.NV = "7701001";
                    v2Array.push({ section: "E06", element: "E06_14", val: v2NOT_APPLICABLE });

                };
                _vg.push(_ePatient);
                delete _ePatient;
            };
            ///////////ePatient.16////////
            _patient = getValue(elementList, "ePatient.16");
            if (Call.HasPatient == true) {
                if (_patient.IsNull == true) {
                    if (isRequiredStateElement("ePatient.16")) {
                        _ePatient.NV = "7701003";
                        v2Array.push({ section: "E06", element: "E06_14", val: v2NOT_RECORDED });
                    }
                }
                else {
                    _val = _patient.ValueArray[0].val;
                    _patient.HasData = true;
                    _patient.Value = _val;
                    v2Array.push({ section: "E06", element: "E06_14", val: SetV2("ePatient.16", _val) });
                }
            }
            else {
                _ePatient.NV = "7701001";
                v2Array.push({ section: "E06", element: "E06_14", val: v2NOT_APPLICABLE });
            };
        }
    };

    return ePatient;
};
var seteHistory = function (pHistory) {
    var eHistory = new Object();

    ////////eHistory.01
    var _eHistory = new Object();
    _eHistory.Errors = false;
    _eHistory.HasData = false;
    _eHistory.Name = "eHistory.01";
    var _eL = [];
    var _eL = pHistory.attributes.elements;

    _history = getValue(_eL, "eHistory.01");
    if (eHistory.IsValid == true) {
        if (_history.IsNull == true)
            if (isRequiredStateElement("eHistory.01") == true) {
                v2Array.push({ section: "E12", element: "E12_01", val: v2NOT_RECORDED });
            }
            else {
                v2Array.push({ section: "E12", element: "E12_01", val: v2NOT_REPORTING });
                _eHistory.NV = "7701003";
            }
        else {
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _history.ValueArray.length; i++) {
                if ((_history.ValueArray[i].HasValue == true) && (arr1.indexOf(_history.ValueArray[i].val) == -1)) {
                    _val = _history.ValueArray[0].val;
                    arr1.push(_val)
                    v2Array.push({ section: "E12", element: "E12_11", val: _val });
                    arr2.push(setV2("eHistory.01", _val));
                }
            };
            v2Array.push({ section: "E12", element: "E12_01", val: arr2.slice(0) });
            _eHistory.HasData = true;
            _eHistory.Value = arr1.slice(0);
        }
    }
    else {
        v2Array.push({ section: "E12", element: "E12_01", val: v2NOT_APPLICABLE });
        _eHistory.NV = "7701001";
    };
    _vg.push(_eHistory);
    delete _eHistory;

    ////////eHistory.05
    var _eHistory = new Object();
    _eHistory.Errors = false;
    _eHistory.HasData = false;
    _eHistory.Name = "eHistory.05";

    _history = getValue(_eL, "eHistory.05");
    if (eHistory.IsValid == false) {
        if (_history.IsNull == true)
            if (isRequiredStateElement("eHistory.05") == true) {
                _eHistory.NV = "7701003";
                v2Array.push({ section: "E12", element: "E12_07", val: v2NOT_RECORDED });
            }
            else {
                _eHistory.NV = "7701005";
                v2Array.push({ section: "E12", element: "E12_07", val: v2NOT_REPORTING });
            }
        else {
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _history.ValueArray.length; i++) {
                if ((_history.ValueArray[i].HasValue == true) && (arr1.indexOf(_history.ValueArray[i].val) == -1)) {
                    _val = _history.ValueArray[i].val
                    arr1.push(_val);
                    arr2.push(setV2("eHistory.06", _val));
                }
            };
            _eHistory.HasData = true;
            _eHistory.Value = arr1.slice(0);
            v2Array.push({ section: "E12", element: "E12_07", val: arr2.slice(0) });
        }
    }
    else {
        v2Array.push({ section: "E12", element: "E12_07", val: v2NOT_APPLICABLE });
        _eHistory.NV = "7701001";
    };
    _vg.push(_eHistory);
    delete _eHistory;

    ////////eHistory.06
    var _eHistory = new Object();
    _eHistory.Errors = false;
    _eHistory.HasData = false;
    _eHistory.Name = "eHistory.06";

    _history = getValue(_eL, "eHistory.06");
    if (eHistory.IsValid == true) {
        if (_history.IsNull == true) {
            if (_vitals.HasPN == true) {
                if (_history.pn == "Refused") {
                    _eHistory.PN = "8801019"
                    _pArr2.push({ section: "E14", element: "E14_03", val: v2NOT_KNOWN });
                }
                else if (_history.pn == "UnableToComplete") {
                    _eHistory.PN = "8801013 "
                    _pArr2.push({ section: "E14", element: "E14_03", val: v2NOT_KNOWN });
                }
                else {
                    _eHistory.PN = "8801023"
                    _pArr2.push({ section: "E14", element: "E14_03", val: v2NOT_KNOWN });
                }
            }
            else
                if (isRequiredStateElement("eHistory.05") == true) {
                    _eHistory.NV = "7701003";
                    v2Array.push({ section: "E12", element: "E12_07", val: v2NOT_RECORDED });
                }
                else {
                    _eHistory.NV = "7701005";
                    v2Array.push({ section: "E12", element: "E12_07", val: v2NOT_REPORTING });
                }
        }

        else {
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _history.ValueArray.length; i++) {
                if ((_history.ValueArray[i].HasValue == true) && (arr1.indexOf(_history.ValueArray[i].val) == -1)) {
                    _val = _history.ValueArray[i].val
                    arr1.push(_val);
                    arr2.push(setV2("eHistory.06", _val));
                }
            };
            _eHistory.Value = arr1.slice(0);
            _eHistory.HasData = true;
            v2Array.push({ section: "E12", element: "E12_08", val: arr2.slice(0) });
        }
    }
    else {
        _eHistory.NV = "7701001";
        v2Array.push({ section: "E12", element: "E12_08", val: v2NOT_APPLICABLE });
    };

    _vg.push(_eHistory);
    delete _eHistory;

    ////////eHistory.07
    var _eHistory = new Object();
    _eHistory.Errors = false;
    _eHistory.HasData = false;
    _eHistory.Name = "eHistory.07";

    _history = getValue(_eL, "eHistory.07");
    if (eHistory.IsValid == false) {
        if (_history.IsNull != true) {
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _history.ValueArray.length; i++) {
                if ((_history.ValueArray[i].HasValue == true) && (arr1.indexOf(_history.ValueArray[i].val) == -1)) {
                    _val = _history.ValueArray[i].val
                    arr1.push(_val);
                    arr2.push(setV2("eHistory.07", _val));
                    arr3.push(setCodeText("eHistory.07", _val));
                }
            }
            _eHistory.Value = arr2.slice(0);
            _eHistory.HasData = true;
            v2Array.push({ section: "E12", element: "E12_09", val: arr3.slice(0) });
        }
    };
    _vg.push(_eHistory);
    delete _eHistory;

    ////////eHistory.08
    var _eHistory = new Object();
    _eHistory.Errors = false;
    _eHistory.HasData = false;
    _eHistory.Name = "eHistory.08";

    _history = getValue(_eL, "eHistory.08");
    if (eHistory.IsValid == false) {
        if (_history.IsNull == true) {
            if (isRequiredStateElement("eHistory.08") == true) {
                _eHistory.NV = "7701003";
                v2Array.push({ section: "E12", element: "E12_10", val: v2NOT_RECORDED });
            }
            else {
                _eHistory.NV = "7701005";
                v2Array.push({ section: "E12", element: "E12_10", val: v2NOT_REPORTING });
            }
        }
        else {
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _history.ValueArray.length; i++) {
                if ((_history.ValueArray[i].HasValue == true) && (arr1.indexOf(_history.ValueArray[i].val) == -1)) {
                    _val = _history.ValueArray[i].val
                    arr1.push(_val);
                    arr2.push(setV2("eHistory.08", _val));
                }
            }
            _eHistory.Value = arr1.slice(0);
            _eHistory.HasData = true;
            v2Array.push({ section: "E12", element: "E12_10", val: v2NOT_REPORTING });
        }
    }
    else {
        _eHistory.NV = "7701001";
        v2Array.push({ section: "E12", element: "E12_10", val: v2NOT_APPLICABLE });

    };
    _vg.push(_eHistory);
    delete _eHistory;

    alert("Business Rules for History/History Obtained From")

    ////////eHistory.09
    var _eHistory = new Object();
    _eHistory.Errors = false;
    _eHistory.HasData = false;
    _eHistory.Name = "eHistory.09";

    _history = getValue(_eL, "eHistory.09");
    if (eHistory.IsValid == false) {
        if (_history.IsNull != true) {
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _history.ValueArray.length; i++) {
                if ((_history.ValueArray[i].HasValue == true) && (arr1.indexOf(_history.ValueArray[i].val) == -1)) {
                    _val = _history.ValueArray[i].val
                    arr1.push(_val);
                    arr2.push(setV2("eHistory.09", _val));
                }
            };
            v2Array.push({ section: "E12", element: "E12_11", val: arr2.slice(0) });
            _eHistory.Value = arr1.slice(0);
            _eHistory.HasData = true;
        }
    };
    _vg.push(_eHistory);
    delete _eHistory;

    ////////eHistory.16
    var _eHistory = new Object();
    _eHistory.Errors = false;
    _eHistory.HasData = false;
    _eHistory.Name = "eHistory.16";

    _history = getValue(businessObject.elements, "eHistory.16");
    if ((eHistory.IsValid == false)) {
        if (_history.IsNull != true) {
            _val = _history.ValueArray[0].val;
            _eHistory.Value = _val;
            _eHistory.HasData = true;
            v2Array.push({ section: "E12", element: "E12_18", val: setV2("eHistory.16", _val) });
        }
    };
    _vg.push(_eHistory);
    delete _eHistory;


    ////////eHistory.17
    var _eHistory = new Object();
    _eHistory.Errors = false;
    _eHistory.HasData = false;
    _eHistory.Name = "eHistory.17";

    _history = getValue(businessObject.elements, "eHistory.17");
    if ((eHistory.IsValid == false)) {
        if (_history.IsNull == true) {
            if (isRequiredStateElement("eHistory.17") == true) {
                _eHistory.NV = "7701003";
                v2Array.push({ section: "E12", element: "E12_18", val: v2NOT_RECORDED });
            }
            else {
                _eHistory.NV = "7701005";
                v2Array.push({ section: "E12", element: "E12_18", val: v2NOT_REPORTING });
            }
        }
        else {
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _history.ValueArray.length; i++) {
                if ((_history.ValueArray[i].HasValue == true) && (arr1.indexOf(_history.ValueArray[i].val) == -1)) {
                    _val = _history.ValueArray[i].val;
                    arr1.push(_val);
                    arr2.push(setV2("eHistory.17", _val));
                }
            };
            _eHistory.Value = arr1.slice(0);
            v2Array.push({ section: "E12", element: "E12_18", val: arr3.slice(0) });
        }
    }
    else {
        _eHistory.NV = "7701001";
        v2Array.push({ section: "E12", element: "E12_18", val: v2NOT_APPLICABLE });
    };
    _vg.push(_eHistory);
    delete _eHistory;


    ////////eHistory.18
    var _eHistory = new Object();
    _eHistory.Errors = false;
    _eHistory.HasData = false;
    _eHistory.Name = "eHistory.18";

    _history = getValue(businessObject.elements, "eHistory.18");
    if ((eHistory.IsValid == true)) {
        if (_history.IsNull == true) {
            if (_vitals.HasPN == true) {
                if (_history.pn == "Refused") {
                    _eHistory.PN = "8801019"
                    _pArr2.push({ section: "E14", element: "E14_03", val: v2NOT_KNOWN });
                }
                else (_history.pn == "UnableToComplete")
                {
                    _eHistory.PN = "8801013 "
                    _pArr2.push({ section: "E14", element: "E14_03", val: v2NOT_KNOWN });
                }
            }
        }
        else {
            _val = _history.ValueArray[0].val;
            _eHistory.HasData = true;
            _eHistory.Value = _val;
            v2Array.push({ section: "E12", element: "E12_20", val: setV2("eHistory.18", _val) });
        }
    };
    _vg.push(_eHistory);
    delete _eHistory;

    ////////eHistory.19
    var _eHistory = new Object();
    _eHistory.Errors = false;
    _eHistory.HasData = false;
    _eHistory.Name = "eHistory.19";

    _history = getValue(businessObject.elements, "eHistory.19");
    if ((eHistory.IsValid == false)) {

        if (_history.IsNull != true) {
            _val = _history.ValueArray[0].val;
            _eHistory.HasData = true;
            _eHistory.Value = _val;
        };
        _vg.push(_eHistory);
        delete _eHistory;


        _sectionIndex = getSectionIndex(pHistory.attributes.sections[xx].attributes, "eHistory.PractitionerGroup");
        if ((eHistory.IsValid == true) && _sectionIndex.length > 0) {
            var _pGRP = [];
            var _pGRP = pHistory.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements
            for (var x = 0; x < _sectionIndex.length; x++) {
                /////////eHistory.02
                var _eHistory = new Object();
                _eHistory.Errors = false;
                _eHistory.HasData = false;
                _eHistory.Name = "eHistory.02";

                _history = getValue(_pGRP, "eHistory.02");
                if (eHistory.IsValid == false) {
                    if (_history.IsNull != true) {
                        _val = _history.ValueArray[0].val;
                        _eHistory.Value = _val;
                        _eHistory.HasData = true;
                        v2Array.push({ section: "E12", element: "E12_01", val: _val });
                    }
                };
                _vg.push(_eHistory);
                delete _eHistory;

                /////////eHistory.03
                var _eHistory = new Object();
                eHistory.Errors = false;
                eHistory.HasData = false;
                eHistory.Name = "eHistory.03";

                _history = getValue(_pGRP, "eHistory.03");
                if (eHistory.IsValid == false) {
                    if (_history.IsNull != true) {
                        _val = _history.ValueArray[0].val;
                        _eHistory.Value = _val;
                        _eHistory.HasData = true;
                        v2Array.push({ section: "E12", element: "E12_04", val: _val });
                    }
                };
                _vg.push(_eHistory);
                delete _eHistory;

                /////////eHistory.04
                var _eHistory = new Object();
                eHistory.Errors = false;
                eHistory.HasData = false;
                eHistory.Name = "eHistory.04";

                _history = getValue(_pGRP, "eHistory.04");
                if (eHistory.IsValid == false) {
                    if (_history.IsNull != true) {
                        _val = _history.ValueArray[0].val;
                        _eHistory.Value = _val;
                        _eHistory.HasData = true;
                        v2Array.push({ section: "E12", element: "E12_05", val: _val });
                    }
                };
                _vg.push(_eHistory);
                delete _eHistory;

            }
        };

        ////////////////////////////////                    
        _sectionIndex = getSectionIndex(pHistory.attributes.sections[xx].attributes, "eHistory.ImmunizationsGroup");
        if ((eHistory.IsValid == false) && _sectionIndex.length > 0) {
            for (var x = 0; x < _sectionIndex.length; x++) {
                var _eIMG = [];
                var _eIMG = pHistory.attributes.sections[xx].attributes.section[x];
                /////////eHistory.10
                var _eHistory = new Object();
                _eHistory.Errors = false;
                _eHistory.HasData = false;
                _eHistory.Name == "eHistory.10";

                _history = getValue(_eIMG, "eHistory.10");
                if (_history.IsNull != true) {
                    _val = _history.ValueArray[0].val;
                    _eHistory.Value = _val;
                    _eHistory.HasData = true;
                    v2Array.push({ section: "E12", element: "E12_12", val: setV2("eHistory.10", _val) });

                };
                _vg.push(_eHistory);
                delete _eHistory;

                /////////eHistory.11
                var _eHistory = new Object();
                _eHistory.Errors = false;
                _eHistory.HasData = false;
                _eHistory.Name = "eHistory.11";

                _history = getValue(_eIMG, "eHistory.11");
                if (_history.IsNull != true) {
                    _val = _history.ValueArray[0].val;
                    _eHistory.Value = _val;
                    _eHistory.HasData = true;
                    v2Array.push({ section: "E12", element: "E12_13", val: _val });
                };
            }
        };
        _vg.push(_eHistory);
        delete _eHistory;
        ////////////////////////////////

        _sectionIndex = getSectionIndex(pHistory.attributes.sections[xx].attributes, "eHistory.CurrentMedsGroup");
        if ((eHistory.IsValid == false) && _sectionIndex.length > 0) {
            for (var x = 0; x < _sectionIndex.length; x++) {
                var _eCMG = [];
                var _eCMG = pHistory.attributes.sections[xx].attributes.section[x];
                ////////eHistory.12
                var _eHistory = new Object();
                _eHistory.Errors = false;
                _eHistory.HasData = false;
                _eHistory.Name = "eHistory.12";

                _history = getValue(_eCMG, "eHistory.12");
                if (_history.IsNull == true) {
                    if (isRequiredStateElement("eHistory.12") == true) {
                        _eHistory.NV = "7701003";
                        v2Array.push({ section: "E14", element: "E12_13", val: null });
                    }
                    else {
                        _eHistory.NV = "7701005";
                        v2Array.push({ section: "E12", element: "E12_14", val: null });
                    }
                }

                else {
                    _val = _history.ValueArray[0].val;
                    _eHistory.Value = _val;
                    _eHistory.HasData = true;
                    v2Array.push({ section: "E12", element: "E12_11", val: _val });
                }
            };
            _vg.push(_eHistory);
            delete _eHistory;

            ////////eHistory.13
            var _eHistory = new Object();
            _eHistory.Errors = false;
            _eHistory.HasData = false;
            _eHistory.Name = "eHistory.13";

            _history = getValue(_eCMG, "eHistory.13");
            if (_history.IsNull != true) {
                _val = _history.ValueArray[0].val;
                _eHistory.Value = _val;
                _eHistory.HasData = true;

                v2Array.push({ section: "E12", element: "E12_15", val: _val });
            };
            _vg.push(_eHistory);
            delete _eHistory;

            ////////eHistory.14
            var _eHistory = new Object();
            eHistory.Errors = false;
            eHistory.HasData = false;
            eHistory.Name = "eHistory.14";

            _history = getValue(_eCMG, "eHistory.14");
            if (_history.IsNull != true) {
                _val = _history.ValueArray[0].val;
                _eHistory.Value = _val;
                _eHistory.HasData = true;
                v2Array.push({ section: "E12", element: "E12_17", val: setV2("eHistory.14", _val) });
            };
            _vg.push(_eHistory);
            delete _eHistory;

            ////////eHistory.15
            var _eHistory = new Object();
            eHistory.Errors = false;
            eHistory.HasData = false;
            eHistory.Name = "eHistory.15";

            _history = getValue(_eCMG, "eHistory.15");
            if (_history.IsNull != true) {
                _val = _history.ValueArray[0].val;
                _eHistory.Value = _val;
                _eHistory.HasData = true;
                v2Array.push({ section: "E12", element: "E12_17", val: setV2("eHistory.15", _val) });
            };
            _vg.push(_eHistory);
            delete _eHistory;
        }
    }
    return eHistory;
};
var setePayment = function (pPayment, Call) {
    console.log(pPayment)


    var pArr = [];
    var pArr2 = [];

    var ePayment = new Object();

    ///////////ONLY BILLING TRANSPORT CALLS
    ePayment["isInsurance"] = false;
    ePayment["isMedicaid"] = false;
    ePayment["isMedicare"] = false;
    ePayment["isNotBilled"] = false;

    //////////////////ePayment.01   
    var _Payment = new Object();
    _Payment.Name = "ePayment.01";
    _Payment.HasErrors = false;
    _Payment.HasData = false;

    _elementList = pPayment.attributes.elements;


    var _payment = new Object;
    //if (Call.HasTransport == true) 
    //{
    _payment = getValue(_elementList, "ePayment.01");
    if (_payment.IsNull == true) {
        pArr2.push({ section: "E07", element: "E07_01", val: v2NOT_RECORDED });
        _Payment.NV = v3NOT_RECORDED;
    }
    else {
        _val = _payment.ValueArray[0].val;
        if (_val in ["2601001", "2601013"]) {
            PaymentType = "Insurance"
            ePayment["isInsurance"] = true;
        };
        if (_val = "2601003") {
            ePayment.PaymentType = "Medicaid"
            ePayment["isMedicaid"] = true;
        };
        if (_val = "2601005") {
            ePayment["isMedicare"] = true;
            ePayment.PaymentType = "Medicare"
        };
        if (_val = "2601007") {
            ePayment.PaymentType = "Not Billed"
            ePayment["isNotBilled"] = true;
        };
        _val = _payment.ValueArray[0].val;
        _Payment.value = _val;
        _Payment.HasData = true;
        pArr2.push({ section: "E07", element: "E07_01", val: setV2("ePayment.01", _val) });
    };
    pArr.push(_Payment);
    delete _Payment;

    _sectionIndex = getSectionIndex(pPayment, "ePayment.CertificateGroup");
    var _cel = [];
    var _cel = pPayment.attributes.sections[_sectionIndex].attributes.elements


    //////////////////ePayment.02
    var _Payment = new Object();
    _Payment.Name = "ePayment.02";
    _Payment.HasErrors = false;
    _Payment.HasData = false;
    _payment = getValue(_cel, "ePayment.02");

    if (_payment.IsNull != true) {
        _val = _payment.ValueArray[0].val;
        if (_val == "9922001") // If Phsysicans Certification is No, Check for Medicaide/air.
        {
            if ((Call.isEmergent == false && ePayment.isMedicaid == true && ePayment.isMedicare == true)) {
                _Payment.HasErrors = true;
                _Payment.Errors = "PCS required for Payment Type (Medicare/Medicaid";
            }
        }
        else {
            _val = _payment.ValueArray[0].val;
            _Payment.value = _val;
            _Payment.HasData = true;
            pArr2.push({ section: "E07", element: "E07_02", val: setV2("ePayment.02", _val) });
        }
    };
    pArr.push(_Payment);
    delete _Payment;

    //////////////////ePayment.03
    var _Payment = new Object();
    _Payment.Name = "ePayment.03";
    _Payment.HasErrors = false;
    _Payment.HasData = false;

    _payment = getValue(_cel, "ePayment.03");
    if (_payment.IsNull != true) {
        _val = _payment.ValueArray[0].val;
        if ((ePayment["ePayment.02"] == null && ePayment["ePayment.02"] == "9922001")) //if No PCS
        {
            _Payment.Error = "Certification Date Provided with null Certification";
            _Payment.HasErrors = true;
        }
        else {
            _val = _payment.ValueArray[0].val;
            _Payment.value = _val;
            _Payment.HasData = true;
        }
    };

    pArr.push(_Payment);
    delete _Payment;

    //ePayment.04////////////
    var _Payment = new Object();
    _Payment.Name = "ePayment.04";
    _Payment.HasErrors = false;
    _Payment.HasData = false;

    _payment = getValue(_cel, "ePayment.04");
    if (_payment.IsNull != true) {
        if ((ePayment["ePayment.02"] == null && ePayment["ePayment.02"] == "9922001")) //if No PCS
        {
            _Payment.Error = "Certification Reason Provided with null Certification";
            _Payment.HasErrors = true;
        }
        else {
            var arr1 = [];
            var arr3 = [];
            for (var i = 0; i < _payment.ValueArray.length; i++) {
                if ((_payment.ValueArray[i].HasValue == true) && (arr1.indexOf(_payment.ValueArray[i].val) == -1)) {
                    _val = _payment.ValueArray[i].val
                    arr1.push(_val);
                }
            };
            _Payment.value = arr1.slice(0);
        }
    };
    pArr.push(_Payment);
    delete _Payment;

    //////////////////ePayment.05
    var _Payment = new Object();
    _Payment.Name = "ePayment.05";
    _Payment.HasErrors = false;
    _Payment.HasData = false;

    _payment = getValue(_cel, "ePayment.05");
    if (_payment.IsNull != true) {
        _val = _payment.ValueArray[0].val;
        _Payment.value = _val;
        _Payment.HasData = true;
    };
    pArr.push(_Payment);
    delete _Payment;

    //////////////////ePayment.06
    var _Payment = new Object();
    _Payment.Name = "ePayment.06";
    _Payment.HasErrors = false;
    _Payment.HasData = false;

    _payment = getValue(_cel, "ePayment.06");
    if (_payment.IsNull != true) {
        _val = _payment.ValueArray[0].val;

        if ((ePayment["ePayment.02"] == null && ePayment["ePayment.02"] == "9922001")) //if No PCS
        {
            _Payment.Error = "Certification Provider Type with null Certification";
            _Payment.HasErrors = true;
        }
        else if ((ePayment["ePayment.02"] == null && ePayment["ePayment.02"] == "9922001")) //if No PCS
        {
            _Payment.Error = "Certification Provider Type with null Certification";
            _Payment.HasErrors = true;
        }
        else {
            _val = _payment.ValueArray[0].val;
            _Payment.value = _val;
            _Payment.HasData = true;
        }
    }
    pArr.push(_Payment);
    delete _Payment;

    // };

    //////////////////ePayment.07
    var _Payment = new Object();
    _Payment.Name = "ePayment.07";
    _Payment.HasErrors = false;
    _Payment.HasData = false;

    _payment = getValue(_cel, "ePayment.07");
    if (_payment.IsNull != true) {
        _val = _payment.ValueArray[0].val;
        if ((ePayment["ePayment.02"] == null && ePayment["ePayment.02"] == "9922001")) //if No PCS
        {
            _Payment.Error = "Certification Provider Type with null Certification";
            _Payment.HasErrors = true;
        }
        else {
            _val = _payment.ValueArray[0].val;
            _Payment.value = _val;
            _Payment.HasData = true;
        }
    };
    pArr.push(_Payment);
    delete _Payment;

    //////////////////ePayment.08
    var _Payment = new Object();
    _Payment.Name = "ePayment.08";
    _Payment.HasErrors = false;
    _Payment.HasData = false;

    _payment = getValue(_elementList, "ePayment.08");
    if (_payment.IsNull != true) {
        _val = _payment.ValueArray[0].val;
        _Payment.value = _val;
        _Payment.HasData = true;
    };
    pArr.push(_Payment);
    delete _Payment;

    // IF NOT INSURED, SET TO NA!~

    ///////////////////////////////////////////////ePayment.InsuranceGroup
    _sectionIndex = getSectionIndex(pPayment, "ePayment.InsuranceGroup");


    for (var x = 0; x < _sectionIndex.length; x++) {
        var igArr = [];
        var listOfElements = pPayment.attributes.sections[_sectionIndex[x]].attributes.elements
        //////////////////ePayment.09
        var _Payment = new Object();
        _Payment.Name = "ePayment.09";
        _Payment.HasErrors = false;
        _Payment.HasData = false;

        _payment = getValue(listOfElements, "ePayment.09");
        if (_payment.IsNull != true) {
            _val = _payment.ValueArray[0].val;
            if (ePayment["isInsurance"] == true) {
                {
                    _Payment.Error = "Insurance Not selected Payment type"
                    _Payment.HasErrors = true;
                }
            };
            _val = _payment.ValueArray[0].val;
            _Payment.value = _val;
            _Payment.HasData = true;
        };
        igArr.push(_Payment);
        delete _Payment;

        //////////////////ePayment.10
        var _Payment = new Object();
        _Payment.Name = "ePayment.10";
        _Payment.HasErrors = false;
        _Payment.HasData = false;

        _payment = getValue(listOfElements, "ePayment.10");
        if (_payment.IsNull != true) {
            _val = _payment.ValueArray[0].val;
            if (ePayment["isInsurance"] == false) {
                {
                    _Payment.Error = "Insurance Not selected Payment type"
                    _Payment.HasErrors = true;
                }
            };
            _val = _payment.ValueArray[0].val;
            _Payment.value = _val;
            _Payment.HasData = true;
        };
        igArr.push(_Payment);
        delete _Payment;

        //////////////////ePayment.11
        var _Payment = new Object();
        _Payment.Name = "ePayment.11";
        _Payment.HasErrors = false;
        _Payment.HasData = false;

        _payment = getValue(listOfElements, "ePayment.11");
        if (_payment.IsNull == true) {
            pArr2.push({ section: "E07", element: "E07_04", val: v2NOT_KNOWN });
            _Payment.HasData = false;

        }
        else {
            _val = _payment.ValueArray[0].val;
            if (ePayment["isInsurance"] == false) {
                {
                    _Payment.Error = "Insurance Not selected Payment type"
                    _Payment.HasErrors = true;
                }
            };

            pArr2.push({ section: "E07", element: "E07_04", val: setV2("ePayment.11", _val) });
            _val = _payment.ValueArray[0].val;
            _Payment.value = _val;
            _Payment.HasData = true;
        };
        igArr.push(_Payment);
        delete _Payment;


        //////////////////ePayment.12
        var _Payment = new Object();
        _Payment.Name = "ePayment.12";
        _Payment.HasErrors = false;
        _Payment.HasData = false;

        _payment = getValue(listOfElements, "ePayment.12");
        if (_payment.IsNull != true) {
            _val = _payment.ValueArray[0].val;
            if (ePayment["isInsurance"] == false) {
                {
                    _Payment.Error = "Insurance Not selected Payment type"
                    _Payment.HasErrors = true;
                }
            };

            v2Array.push({ section: "E07", element: "E07_05", val: _val });
            _val = _payment.ValueArray[0].val;
            _Payment.value = _val;
            _Payment.HasData = true;
        };
        igArr.push(_Payment);
        delete _Payment;

        //////////////////ePayment.13
        var _Payment = new Object();
        _Payment.Name = "ePayment.13";
        _Payment.HasErrors = false;
        _Payment.HasData = false;

        _payment = getValue(listOfElements, "ePayment.13");
        if (_payment.IsNull != true) {
            _val = _payment.ValueArray[0].val;
            if (ePayment["isInsurance"] == false) {
                {
                    _Payment.Error = "Insurance Not selected Payment type"
                    _Payment.HasErrors = true;
                }
            };


            pArr2.push({ section: "E07", element: "E07_06", val: setV2("ePayment.13", _val) });
            _val = _payment.ValueArray[0].val;
            _Payment.value = _val;
            _Payment.HasData = true;
        };

        igArr.push(_Payment);
        delete _Payment;


        //////////////////ePayment.14
        var _Payment = new Object();
        _Payment.Name = "ePayment.14";
        _Payment.HasErrors = false;
        _Payment.HasData = false;

        _payment = getValue(listOfElements, "ePayment.14");
        if (_payment.IsNull != true) {
            _val = _payment.ValueArray[0].val;
            if (ePayment["isInsurance"] == false) {
                {
                    _Payment.Error = "Insurance Not selected Payment type"
                    _Payment.HasErrors = true;
                }
            };

            pArr2.push({ section: "E07", element: "E07_07", val: setV2("ePayment.14", _val) });
            _val = _payment.ValueArray[0].val;
            _Payment.value = _val;
            _Payment.HasData = true;
        };
        igArr.push(_Payment);
        delete _Payment;

        //////////////////ePayment.15
        var _Payment = new Object();
        _Payment.Name = "ePayment.15";
        _Payment.HasErrors = false;
        _Payment.HasData = false;

        _payment = getValue(listOfElements, "ePayment.15");
        if (_payment.IsNull != true) {
            _val = _payment.ValueArray[0].val;
            if (ePayment["isInsurance"] == false) {
                {
                    _Payment.Error = "Insurance Not selected Payment type";
                    _Payment.HasErrors = true;
                }
            };

            pArr2.push({ section: "E07", element: "E07_08", val: _val });
            _val = _payment.ValueArray[0].val;
            _Payment.value = _val;
            _Payment.HasData = true;
        };
        igArr.push(_Payment);
        delete _Payment;

        //////////////////ePayment.16
        var _Payment = new Object();
        _Payment.Name = "ePayment.16";
        _Payment.HasErrors = false;
        _Payment.HasData = false;

        _payment = getValue(listOfElements, "ePayment.16");
        if (_payment.IsNull != true) {
            _val = _payment.ValueArray[0].val;
            if (ePayment["isInsurance"] == false)
            {
                _Payment.Error = "Insurance Not selected Payment type"
                _Payment.HasErrors = true;
            };

            _val = _payment.ValueArray[0].val;
            _Payment.value = _val;
            _Payment.HasData = true;
        };
        igArr.push(_Payment);
        delete _Payment;


        //////////////////ePayment.17

        var _Payment = new Object();
        _Payment.Name = "ePayment.17";
        _Payment.HasErrors = false;
        _Payment.HasData = false;


        _payment = getValue(listOfElements, "ePayment.17");
        if (_payment.IsNull != true) {
            _val = _payment.ValueArray[0].val;
            if (ePayment["isInsurance"] == false) {
                {
                    _Payment.Error = "Insurance Not selected Payment type"
                }
            };

            _val = _payment.ValueArray[0].val;
            _Payment.value = _val;
            _Payment.HasData = true;
            v2Array.push({ section: "E07", element: "E07_09", val: _val });
        };
        igArr.push(_Payment);
        delete _Payment;

        //////////////////ePayment.18   
        var _Payment = new Object();
        _Payment.Name = "ePayment.18";
        _Payment.HasErrors = false;
        _Payment.HasData = false;

        _payment = getValue(listOfElements, "ePayment.18");
        if (_payment.IsNull != true) {
            _val = _payment.ValueArray[0].val;
            if (ePayment["isInsurance"] == false) {
                {
                    _Payment.Error = "Insurance Not selected Payment type"
                }
            };


            _val = _payment.ValueArray[0].val;
            _Payment.value = _val;
            _Payment.HasData = true;

            pArr2.push({ section: "E07", element: "E07_11", val: _val });
        };
        igArr.push(_Payment);
        delete _Payment;

        //////////////////ePayment.19.
        var _Payment = new Object();
        _Payment.Name = "ePayment.19";
        _Payment.HasErrors = false;
        _Payment.HasData = false;

        _payment = getValue(listOfElements, "ePayment.19");
        if (_payment.IsNull != true) {
            _val = _payment.ValueArray[0].val;
            if (ePayment["isInsurance"] == false) {
                {
                    _Payment.Error = "Insurance Not selected Payment type"
                }
            };

            _val = _payment.ValueArray[0].val;
            _Payment.value = _val;
            _Payment.HasData = true;
            pArr2.push({ section: "E07", element: "E07_11", val: _val });
        };
        igArr.push(_Payment);
        delete _Payment;

        //////////////////ePayment.20
        var _Payment = new Object();
        _Payment.Name = "ePayment.20";
        _Payment.HasErrors = false;
        _Payment.HasData = false;

        _payment = getValue(listOfElements, "ePayment.20");
        if (_payment.IsNull != true) {
            _val = _payment.ValueArray[0].val;
            if (ePayment["isInsurance"] == false) {
                {
                    _Payment.Error = "Insurance Not selected Payment type"
                }
            };

            _val = _payment.ValueArray[0].val;
            _Payment.value = _val;
            _Payment.HasData = true;
            pArr2.push({ section: "E07", element: "E07_12", val: _val });
        };
        igArr.push(_Payment);
        delete _Payment;

        //////////////////ePayment.21
        var _Payment = new Object();
        _Payment.Name = "ePayment.21";
        _Payment.HasErrors = false;
        _Payment.HasData = false;

        _payment = getValue(listOfElements, "ePayment.21");
        if (_payment.IsNull != true) {
            _val = _payment.ValueArray[0].val;
            if (ePayment["isInsurance"] == false) {
                {
                    _Payment.Error = "Insurance Not selected Payment type"
                }
            };

            _val = _payment.ValueArray[0].val;
            _Payment.value = _val;
            _Payment.HasData = true;
            pArr2.push({ section: "E07", element: "E07_13", val: _val });
        };
        igArr.push(_Payment);
        delete _Payment;

        //////////////////ePayment.22
        var _Payment = new Object();
        _Payment.Name = "ePayment.22";
        _Payment.HasErrors = false;
        _Payment.HasData = false;

        _payment = getValue(listOfElements, "ePayment.22");
        if (_payment.IsNull != true) {
            _val = _payment.ValueArray[0].val;
            if (ePayment["isInsurance"] == false) {
                {
                    _Payment.Error = "Insurance Not selected Payment type"
                }
            };

            _val = _payment.ValueArray[0].val;
            _Payment.value = _val;
            _Payment.HasData = true;
            pArr2.push({ section: "E07", element: "E07_14", val: setV2("ePayment.22", _val) });
        };
        igArr.Name = "InsuranceGroup"
        igArr.Item = x
        pArr.push(igArr)
    };

    _sectionIndex = getSectionIndex(pPayment, "ePayment.ClosestRelativeGroup");

    if (_sectionIndex >= 0) {
        var _clrg = pPayment.attributes.sections[_sectionIndex].attributes.elements

        ePayment["hasClosestLivingRelative"] = false;

        //////////////////ePayment.23
        var _Payment = new Object();
        _Payment.Name = "ePayment.23";
        _Payment.HasErrors = false;
        _Payment.HasData = false;

        _payment = getValue(_clrg, "ePayment.23");
        if (_payment.IsNull != true) {
            _val = _payment.ValueArray[0].val;
            _Payment.value = _val;
            _Payment.HasData = true;

            pArr2.push({ section: "E07", element: "E07_18", val: _val });
        };
        pArr.push(_Payment);
        delete _Payment;

        //////////////////ePayment.24
        var _Payment = new Object();
        _Payment.Name = "ePayment.24";
        _Payment.HasErrors = false;
        _Payment.HasData = false;

        _payment = getValue(_clrg, "ePayment.24");
        if (_payment.IsNull != true) {
            _val = _payment.ValueArray[0].val;
            _Payment.value = _val;
            _Payment.HasData = true;
        };
        pArr.push(_Payment);
        delete _Payment;

        //////////////////ePayment.25
        var _Payment = new Object();
        _Payment.Name = "ePayment.25";
        _Payment.HasErrors = false;
        _Payment.HasData = false;

        _payment = getValue(_clrg, "ePayment.25");
        if (_payment.IsNull != true) {
            if (ePayment["hasClosestLivingRelative"] == false) {
                _Payment.Error = "Closest Living Relative Not Identified - No Name"
            }
            else {
                _val = _payment.ValueArray[0].val;
                _Payment.value = _val;
                _Payment.HasData = true;
            }
        };
        pArr.push(_Payment);
        delete _Payment;

        //////////////////ePayment.26
        var _Payment = new Object();
        _Payment.Name = "ePayment.26";
        _Payment.HasErrors = false;
        _Payment.HasData = false;

        _payment = getValue(_clrg, "ePayment.26");
        if (_payment.IsNull != true) {
            _val = _payment.ValueArray[0].val;
            if (ePayment["hasClosestLivingRelative"] == false) {
                _Payment.Error = "Closest Living Relative Not Identified - No Name"
            }
            else {
                _val = _payment.ValueArray[0].val;
                _Payment.value = _val;
                _Payment.HasData = true;
                pArr2.push({ section: "E07", element: "E07_21", val: _val });
            }
        };
        pArr.push(_Payment);
        delete _Payment;

        //////////////////ePayment.27
        var _Payment = new Object();
        _Payment.Name = "ePayment.27";
        _Payment.HasErrors = false;
        _Payment.HasData = false;

        _payment = getValue(_clrg, "ePayment.27");
        if (_payment.IsNull != true) {
            _val = _payment.ValueArray[0].val;
            if (ePayment["hasClosestLivingRelative"] == false) {
                _Payment.Error = "Closest Living Relative Not Identified - No Name"
            }
            else {
                _val = _payment.ValueArray[0].val;
                _Payment.value = _val;
                _Payment.HasData = true;
                pArr2.push({ section: "E07", element: "E07_22", val: setV2("ePayment.27", _val) });
            }
        };
        pArr.push(_Payment);
        delete _Payment;

        //////////////////ePayment.28
        var _Payment = new Object();
        _Payment.Name = "ePayment.28";
        _Payment.HasErrors = false;
        _Payment.HasData = false;

        _payment = getValue(_clrg, "ePayment.28");
        if (_payment.IsNull != true) {
            _val = _payment.ValueArray[0].val;
            if (ePayment["hasClosestLivingRelative"] == false) {
                _Payment.Error = "Closest Living Relative Not Identified - No Name"
            }
            else {
                pArr2.push({ section: "E07", element: "E07_23", val: setV2("ePayment.28", _val) });
                _val = _payment.ValueArray[0].val;
                _Payment.value = _val;
                _Payment.HasData = true;
            }
        };
        pArr.push(_Payment);
        delete _Payment;

        //////////////////ePayment.29
        var _Payment = new Object();
        _Payment.Name = "ePayment.29";
        _Payment.HasErrors = false;
        _Payment.HasData = false;

        _payment = getValue(_clrg, "ePayment.29");
        if (_payment.IsNull != true) {
            _val = _payment.ValueArray[0].val;
            if (ePayment["hasClosestLivingRelative"] == false) {
                _Payment.Error = "Closest Living Relative Not Identified - No Name"
            }
            else {
                _val = _payment.ValueArray[0].val;
                _Payment.value = _val;
                _Payment.HasData = true;
                pArr2.push({ section: "E07", element: "E07_24", val: _val });
            }
        };
        pArr.push(_Payment);
        delete _Payment;

        //////////////////ePayment.30
        var _Payment = new Object();
        _Payment.Name = "ePayment.30";
        _Payment.HasErrors = false;
        _Payment.HasData = false;

        _payment = getValue(_clrg, "ePayment.30");
        if (_payment.IsNull != true) {
            _val = _payment.ValueArray[0].val;
            if (ePayment["hasClosestLivingRelative"] == false) {
                _Payment.Error = "Closest Living Relative Not Identified - No Name"
            }
            else {

                _val = _payment.ValueArray[0].val;
                _Payment.value = _val;
                _Payment.HasData = true;
            }
        };
        pArr.push(_Payment);
        delete _Payment;

        //////////////////ePayment.31
        var _Payment = new Object();
        _Payment.Name = "ePayment.31";
        _Payment.HasErrors = false;
        _Payment.HasData = false;

        _payment = getValue(_clrg, "ePayment.31");

        if (_payment.IsNull != true) {
            //  if (ePayment["hasClosestLivingRelative"] == false) {
            //      _Payment.Error = "Closest Living Relative Not Identified - No Name"
            //  }
            //  else {
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _payment.ValueArray.length; i++) {
                _phoneType = "";
                if ((_payment.ValueArray[i].HasValue == true) && (arr1.indexOf(_payment.ValueArray[i].val) == -1)) {
                    var _pObj = new Object();
                    _val = _payment.ValueArray[i].val
                    _phoneType = _payment.ValueArray[i].PhoneNumberType
                    if (_payment.ValueArray[i].val != null) {
                        _pObj.value = _val;
                        _Payment.HasData = true;
                        _pObj.PhoneNumberType = _phoneType;
                    };

                    arr1.push(_pObj);
                    arr2.push(_val);
                };
            }
            //};

            _Payment.HasData = true;
            _Payment.Value = arr1.slice(0);
            pArr2.push({ section: "E07", element: "E07_25", val: arr1[0] });
        };
        pArr.push(_Payment);
        delete _Payment;

        //////////////////ePayment.32
        var _Payment = new Object();
        _Payment.Name = "ePayment.32";
        _Payment.HasErrors = false;
        _Payment.HasData = false;

        _payment = getValue(_clrg, "ePayment.32");
        if (_payment.IsNull != true) {
            _val = _payment.ValueArray[0].val;
            _Payment.value = _val;
            _Payment.HasData = true;
            pArr2.push({ section: "E07", element: "E07_26", val: setV2("ePayment.32", _val) });
        };
        pArr.push(_Payment);
        delete _Payment;
    };//ClosestRelativeGroup



    _sectionIndex = getSectionIndex(pPayment, "ePayment.EmployerGroup");
    if (_sectionIndex >= 0) {
        var _eg = pPayment.attributes.sections[_sectionIndex].attributes.elements
        //////////////////ePayment.33
        var _Payment = new Object();
        _Payment.Name = "ePayment.33";
        _Payment.HasErrors = false;
        _Payment.HasData = false;

        _payment = getValue(_eg, "ePayment.33");
        if (_payment.IsNull != true) {
            _val = _payment.ValueArray[0].val;
            _Payment.value = _val;
            _Payment.HasData = true;
            pArr2.push({ section: "E07", element: "E07_27", val: _val });
        };
        pArr.push(_Payment);
        delete _Payment;

        //////////////////ePayment.34
        var _Payment = new Object();
        _Payment.Name = "ePayment.34";
        _Payment.HasErrors = false;
        _Payment.HasData = false;

        _payment = getValue(_eg, "ePayment.34");
        if (_payment.IsNull != true) {
            _val = _payment.ValueArray[0].val;
            _Payment.value = _val;
            _Payment.HasData = true;
            pArr2.push({ section: "E07", element: "E07_28", val: _val });
        };
        pArr.push(_Payment);
        delete _Payment;

        //////////////////ePayment.35
        var _Payment = new Object();
        _Payment.Name = "ePayment.35";
        _Payment.HasErrors = false;
        _Payment.HasData = false;

        _payment = getValue(_eg, "ePayment.35");
        if (_payment.IsNull != true) {
            _val = _payment.ValueArray[0].val;
            _Payment.value = _val;
            _Payment.HasData = true;
            pArr2.push({ section: "E07", element: "E07_29", val: setV2("ePayment.35", _val) });
        };
        pArr.push(_Payment);
        delete _Payment;

        //////////////////ePayment.36
        var _Payment = new Object();
        _Payment.Name = "ePayment.36";
        _Payment.HasErrors = false;
        _Payment.HasData = false;

        _payment = getValue(_eg, "ePayment.36");
        if (_payment.IsNull != true) {
            _val = _payment.ValueArray[0].val;
            _Payment.value = _val;
            _Payment.HasData = true;
            pArr2.push({ section: "E07", element: "E07_30", val: setV2("ePayment.35", _val) });
        };
        pArr.push(_Payment);
        delete _Payment;

        //////////////////ePayment.37
        var _Payment = new Object();
        _Payment.Name = "ePayment.37";
        _Payment.HasErrors = false;
        _Payment.HasData = false;

        _payment = getValue(_eg, "ePayment.37");

        if (_payment.IsNull != true) {
            _val = _payment.ValueArray[0].val;
            pArr2.push({ section: "E07", element: "E07_31", val: _val });
            _Payment.value = _val;
            _Payment.HasData = true;
        };
        pArr.push(_Payment);
        delete _Payment;

        //////////////////ePayment.38
        var _Payment = new Object();
        _Payment.Name = "ePayment.38";
        _Payment.HasErrors = false;
        _Payment.HasData = false;

        _payment = getValue(_eg, "ePayment.38");
        if (_payment.IsNull != true) {
            _val = _payment.ValueArray[0].val;
            _Payment.value = _val;
            _Payment.HasData = true;

        };
        pArr.push(_Payment);
        delete _Payment;


        //////////////////ePayment.39
        var _Payment = new Object();
        _Payment.Name = "ePayment.39";
        _Payment.HasErrors = false;
        _Payment.HasData = false;

        _payment = getValue(_eg, "ePayment.39");
        if (_payment.IsNull != true) {
            //  if (ePayment["hasClosestLivingRelative"] == false) {
            //      _Payment.Error = "Closest Living Relative Not Identified - No Name"
            //  }
            //  else {
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _payment.ValueArray.length; i++) {
                _phoneType = "";
                if ((_payment.ValueArray[i].HasValue == true) && (arr1.indexOf(_payment.ValueArray[i].val) == -1)) {
                    var _pObj = new Object();
                    _val = _payment.ValueArray[i].val
                    _phoneType = _payment.ValueArray[i].PhoneNumberType
                    if (_payment.ValueArray[i].val != null) {
                        _pObj.value = _val;
                        _Payment.HasData = true;
                        _pObj.PhoneNumberType = _phoneType;
                    };

                    arr1.push(_pObj);
                    arr2.push(_val);
                };
            }
            //};

            _Payment.HasData = true;
            _Payment.Value = arr1.slice(0);
            pArr2.push({ section: "E07", element: "E07_32", val: arr1[0] });
        };
        pArr.push(_Payment);
        delete _Payment;
    };

    //////////////////ePayment.40
    var _Payment = new Object();
    _Payment.Name = "ePayment.40";
    _Payment.HasErrors = false;
    _Payment.HasData = false;

    _payment = getValue(_elementList, "ePayment.40");
    if (_payment.IsNull != true) {
        _val = _payment.ValueArray[0].val;
        pArr2.push({ section: "E07", element: "E07_33", val: setV2("ePayment.40", _val) });
        _Payment.value = _val;
        _Payment.HasData = true;

    };
    pArr.push(_Payment);
    delete _Payment;

    //////////////////ePayment.41
    var _Payment = new Object();
    _Payment.Name = "ePayment.41";
    _Payment.HasErrors = false;
    _Payment.HasData = false;

    _payment = getValue(_elementList, "ePayment.41");
    if (_payment.IsNull != true) {
        var arr1 = [];
        for (var i = 0; i < _payment.ValueArray.length; i++) {
            if ((_payment.ValueArray[i].HasValue == true) && (arr1.indexOf(_payment.ValueArray[i].val) > -1)) {
                _val = _payment.ValueArray[i].val
                arr1.push(_val);
            }
        }
        _Payment.HasData = true;
        _Payment.Value = arr1.slice(0);

    };
    pArr.push(_Payment);
    delete _Payment;

    //////////////////ePayment.42
    var _Payment = new Object();
    _Payment.Name = "ePayment.42";
    _Payment.HasErrors = false;
    _Payment.HasData = false;

    _payment = getValue(_elementList, "ePayment.42");
    if (_payment.IsNull != true) {
        var arr1 = [];
        var arr3 = [];
        for (var i = 0; i < _payment.ValueArray.length; i++) {
            if ((_payment.ValueArray[i].HasValue == true) && (arr1.indexOf(_dispo.ValueArray[i].val) > -1)) {
                _val = _payment.ValueArray[i].val
                arr1.push(_val);

            }
        };
        _Payment.HasData = true;
        _ePayment.Value = arr1.slice(0);

    };
    pArr.push(_Payment);
    delete _Payment;

    //////////////////ePayment.43
    var _Payment = new Object();
    _Payment.Name = "ePayment.43";
    _Payment.HasErrors = false;
    _Payment.HasData = false;

    _payment = getValue(_elementList, "ePayment.43");
    if (_payment.IsNull != true) {
        _val = _payment.ValueArray[0].val;
        _Payment.value = _val;
        _Payment.HasData = true;
    };
    pArr.push(_Payment);
    delete _Payment;

    //////////////////ePayment.44
    var _Payment = new Object();
    _Payment.Name = "ePayment.44";
    _Payment.HasErrors = false;
    _Payment.HasData = false;

    _payment = getValue(_elementList, "ePayment.44");
    if (_payment.IsNull != true) {
        _val = _payment.ValueArray[0].val;
        _Payment.value = _val;
        _Payment.HasData = true;

    };
    pArr.push(_Payment);
    delete _Payment;

    //////////////////ePayment.45
    var _Payment = new Object();
    _Payment.Name = "ePayment.45";
    _Payment.HasErrors = false;
    _Payment.HasData = false;

    _payment = getValue(_elementList, "ePayment.45");
    if (_payment.IsNull != true) {
        _val = _payment.ValueArray[0].val;
        _Payment.value = _val;
        _Payment.HasData = true;

    };
    pArr.push(_Payment);
    delete _Payment;

    //////////////////ePayment.46
    var _Payment = new Object();
    _Payment.Name = "ePayment.46";
    _Payment.HasErrors = false;
    _Payment.HasData = false;

    _payment = getValue(_elementList, "ePayment.46");
    if (_payment.IsNull != true) {
        _val = _payment.ValueArray[0].val;
        _Payment.value = _val;
        _Payment.HasData = true;
    };
    pArr.push(_Payment);
    delete _Payment;

    //////////////////ePayment.47
    var _Payment = new Object();
    _Payment.Name = "ePayment.47";
    _Payment.HasErrors = false;
    _Payment.HasData = false;

    _payment = getValue(_elementList, "ePayment.47");
    if (_payment.IsNull != true) {
        _val = _payment.ValueArray[0].val;
        _Payment.value = _val;
        _Payment.HasData = true;
    };
    pArr.push(_Payment);
    delete _Payment;

    //////////////////ePayment.48
    var _Payment = new Object();
    _Payment.Name = "ePayment.48";
    _Payment.HasErrors = false;
    _Payment.HasData = false;

    _payment = getValue(_elementList, "ePayment.48");
    if (_payment.IsNull != true) {
        _val = _payment.ValueArray[0].val;
        _Payment.value = _val;
        _Payment.HasData = true;
    };
    pArr.push(_Payment);
    delete _Payment;

    //////////////////ePayment.49
    var _Payment = new Object();
    _Payment.Name = "ePayment.49";
    _Payment.HasErrors = false;
    _Payment.HasData = false;

    _payment = getValue(_elementList, "ePayment.49");
    if (_payment.IsNull != true) {
        _val = _payment.ValueArray[0].val;
        _Payment.value = _val;
        _Payment.HasData = true;

    };
    pArr.push(_Payment);
    delete _Payment;

    // IF CANCELLED, NOT APPLICABLE
    //////////////////ePayment.50
    var _Payment = new Object();
    _Payment.Name = "ePayment.50";
    _Payment.HasErrors = false;
    _Payment.HasData = false;

    _payment = getValue(_elementList, "ePayment.50");
    if (Call.IsCancelled != true) {
        if (_payment.IsNull == true) {
            if (isRequiredStateElement("ePayment.50")) {
                v2Array.push({ section: "E05", element: "E5_34", val: v2NOT_RECORDED });
                _Payment.NV = v3NOT_RECORDED;
            }
        }

        else {
            pArr2.push({ section: "E05", element: "E5_34", val: setV2("ePayment.50", _val) });
            _val = _payment.ValueArray[0].val;
            _Payment.value = _val;
            _Payment.HasData = true;
        }
    }
    else {
        _Payment.NV = V3_NOT_APPLICABLE;
    };
    pArr.push(_Payment);
    delete _Payment;

    //////////////////ePayment.51
    var _Payment = new Object();
    _Payment.Name = "ePayment.51";
    _Payment.HasErrors = false;
    _Payment.HasData = false;

    _payment = getValue(_elementList, "ePayment.51");
    if (_payment.IsNull != true) {
        _val = _payment.ValueArray[0].val;
        _Payment.value = _val;
        _Payment.HasData = true;

    };
    pArr.push(_Payment);
    delete _Payment;

    //////////////////ePayment.52
    var _Payment = new Object();
    _Payment.Name = "ePayment.52";
    _Payment.HasErrors = false;
    _Payment.HasData = false;

    _payment = getValue(_elementList, "ePayment.52");
    if (_payment.IsNull != true) {
        pArr2.push({ section: "E05", element: "E5_37", val: setV2("ePayment.52", _val) });
        _val = _payment.ValueArray[0].val;
        _Payment.value = _val;
        _Payment.HasData = true;

    };
    pArr.push(_Payment);
    delete _Payment;

    //////////////////ePayment.53
    var _Payment = new Object();
    _Payment.Name = "ePayment.53";
    _Payment.HasErrors = false;
    _Payment.HasData = false;

    _payment = getValue(_elementList, "ePayment.53");
    if (_payment.IsNull != true) {
        _val = _payment.ValueArray[0].val;
        _Payment.value = _val;
        _Payment.HasData = true;
    };
    pArr.push(_Payment);
    delete _Payment;

    //////////////////ePayment.54
    var _Payment = new Object();
    _Payment.Name = "ePayment.54";
    _Payment.HasErrors = false;
    _Payment.HasData = false;

    _payment = getValue(_elementList, "ePayment.54");
    if (_payment.IsNull != true) {
        _val = _payment.ValueArray[0].val;
        _Payment.value = _val;
        _Payment.HasData = true;
    };

    pArr.push(_Payment);
    delete _Payment;

    ///////////////////

    _sectionIndex = getSectionIndex(pPayment, "ePayment.SupplyItemGroup");
    console.log(_sectionIndex)
    //console.log( pPayment.attributes.sections[5].attributes.elements);
    if (_sectionIndex != -1) {
        console.log(_sectionIndex.length)
        for (var x = 0; x < _sectionIndex.length; x++) {
            console.log(_sectionIndex[x])
            var _lsp = pPayment.attributes.sections[_sectionIndex[x]].attributes.elements;
            console.log(_lsp)
            //////////////////ePayment.55
            var _Payment = new Object();
            _Payment.Name = "ePayment.55";
            _Payment.HasErrors = false;
            _Payment.HasData = false;
            sgArr = [];
            _payment = getValue(_lsp, "ePayment.55");
            if (_payment.IsNull == true) {
                _val = _payment.ValueArray[0].val;
                _Payment.value = _val;
                _Payment.HasData = true;
            };
            sgArr.push(_Payment);
            delete _Payment;

            //////////////////ePayment.56
            var _Payment = new Object();
            _Payment.Name = "ePayment.56";
            _Payment.HasErrors = false;
            _Payment.HasData = false;

            _payment = getValue(_lsp, "ePayment.56");
            if (_payment.IsNull != true) {
                _val = _payment.ValueArray[0].val;
                _Payment.value = _val;
                _Payment.HasData = true;
            }
            sgArr.push(_Payment);
            delete _Payment;

            sgArr.Name = "SupplyItemGroup"
            sgArr.Item = x
            console.log(sgArr)
            pArr.push(sgArr)
        }
    };

    ePayment.Version3 = pArr.slice(0);
    console.log(ePayment)
    return ePayment;
}
var seteOutcome = function (pOutcome, Call) {

    var eInjury = new Object();
    var _vg = [];
    if (pOutcome.HasDataSet == false) {
        eOutcome.IsValid = false;
    }
    else {
        eOutcome.IsValid = true;
    }
    var v2Array = [];
    var _outcome = new Object();

    if (pOutcome.HasDataSet == true) {
        var _eL = [];
        _eL = pOutcome.attributes.elements;

    };
    // console.log(elementList)


    if (eInjury.IsValid == true) //if have a transport, forgot the data, 
    {
        var ExternalDataGroup = new Object();
        var v2Array = [];


        //eOutcome.01/////////
        var _eOutcome = new Object();
        _eOutcome.Errors = false;
        _eOutcome.HasData = false;
        _eOutcome.Name = "eOutcome.01";

        _outcome = getValue(_eL, "eOutcome.01");
        if (eOutcome.IsValid == true) {
            if (_outcome.IsNull == true) {
                _eOutcome.NV = "7701003";
                v2Array.push({ section: "E22", element: "E22_01", val: v2NOT_RECORDED });
            }
            else {
                _val = _outcome.ValueArray[0].val;
                _eOutcome.Value = _val;
                _eOutcome.HasData = true;
                v2Array.push({ section: "E22", element: "E22_01", val: setV2("eOutcome.01", _val) });

            }
        }
        else {
            _eOutcome.NV = "7701001";
            v2Array.push({ section: "E22", element: "E22_01", val: v2NOT_APPLICABLE });
        };
        _vg.push(_eOutcome);
        delete _eOutcome;

        //eOutcome.02/////////
        var _eOutcome = new Object();
        _eOutcome.Errors = false;
        _eOutcome.HasData = false;
        _eOutcome.Name = "eOutcome.02";

        _outcome = getValue(_eL, "eOutcome.02");
        if (eOutcome.IsValid == true) {
            if (_outcome.IsNull == true) {
                _eOutcome.NV = "7701003";
                v2Array.push({ section: "E22", element: "E22_02", val: v2NOT_RECORDED });
            }
            else {
                _val = _outcome.ValueArray[0].val;
                _eOutcome.Value = _val;
                _eOutcome.HasData = true;
            }
        }
        else {
            _eOutcome.NV = "7701003";
            v2Array.push({ section: "E22", element: "E22_02", val: v2NOT_APPLICABLE });
        };
        _vg.push(_eOutcome);
        delete _eOutcome;


        /////////////////////////////////
        if (eOutcome.IsValid == true) {


            _s1 = getSectionIndex(pExam.attributes.sections[xx], "eOutcome.ExternalDataGroup");
            if (_s1 != -1) {
                var OutcomeGroupArray = [];
                for (var x = 0; x <= _s1.length - 1; x++) {
                    var _eDG = []
                    _ex1 = pOutcome.attributes.sections[_s1[x]].attributes.elements;

                    //eOutcome.03/////////
                    var _eOutcome = new Object();
                    _eOutcome.Errors = false;
                    _eOutcome.HasData = false;
                    _eOutcome.Name = "eOutcome.03";

                    _outcome = getValue(_ex1, "eOutcome.03");
                    if (_outcome.IsNull != true) {
                        _val = _outcome.ValueArray[0].val;
                        _eOutcome.Value = _val;
                        _eOutcome.HasData = true;
                    };
                    _eDG.push(_eOutcome);
                    delete _eOutcome;


                    //eOutcome.04/////////
                    var _eOutcome = new Object();
                    _eOutcome.Errors = false;
                    _eOutcome.HasData = false;
                    _eOutcome.Name = "eOutcome.04";

                    _outcome = getValue(_ex1, "eOutcome.04");
                    if (_outcome.IsNull != true) {
                        _val = _outcome.ValueArray[0].val;
                        _eOutcome.Value = _val;
                        _eOutcome.HasData = true;
                    };
                    _eDG.push(_eOutcome);
                    delete _eOutcome;


                    //eOutcome.05/////////
                    var _eOutcome = new Object();
                    _eOutcome.Errors = false;
                    _eOutcome.HasData = false;
                    _eOutcome.Name = "eOutcome.05";

                    _outcome = getValue(_ex1, "eOutcome.05");
                    if (_outcome.IsNull != true) {
                        _val = _outcome.ValueArray[0].val;
                        _eOutcome.Value = _val;
                        _eOutcome.HasData = true;
                    };
                    _eDG.push(_eOutcome);
                    delete _eOutcome;

                    OutcomeGroupArray.push(_eDG);
                }
            };
            //////////////////////////////////////////

            //eOutcome.06/////////
            var _eOutcome = new Object();
            _eOutcome.Errors = false;
            _eOutcome.HasData = false;
            _eOutcome.Name = "eOutcome.06";

            _outcome = getValue(_eL, "eOutcome.06");
            if (eOutcome.IsValid == true) {
                if (_outcome.IsNull != true)
                    _val = _outcome.ValueArray[0].val;
                _eOutcome.Value = _val;
                _eOutcome.HasData = true;

            };
            _vg.push(_eOutcome);
            delete _eOutcome;


            //eOutcome.07/////////
            var _eOutcome = new Object();
            _eOutcome.Errors = false;
            _eOutcome.HasData = false;
            _eOutcome.Name = "eOutcome.07";
            _outcome = getValue(_eL, "eOutcome.07");
            if (eOutcome.IsValid == true) {
                if (_outcome.IsNull != true) {
                    _val = _outcome.ValueArray[0].val;
                    _eOutcome.Value = _val;
                    _eOutcome.HasData = true;
                }
            };
            _vg.push(_eOutcome);
            delete _eOutcome;

            //eOutcome.08/////////
            var _eOutcome = new Object();
            _eOutcome.Errors = false;
            _eOutcome.HasData = false;
            _eOutcome.Name = "eOutcome.08";
            _outcome = getValue(_eL, "eOutcome.08");
            if (eOutcome.IsValid == true) {
                if (_outcome.IsNull != true) {
                    _val = _outcome.ValueArray[0].val;
                    _eOutcome.Value = _val;
                    _eOutcome.HasData = true;
                }
            };
            _vg.push(_eOutcome);
            delete _eOutcome;

            //eOutcome.09/////////
            var _eOutcome = new Object();
            _eOutcome.Errors = false;
            _eOutcome.HasData = false;
            _eOutcome.Name = "eOutcome.09";
            _outcome = getValue(_eL, "eOutcome.09");
            if (eOutcome.IsValid == true) {
                if (_outcome.IsNull != true) {
                    _val = _outcome.ValueArray[0].val;
                    _eOutcome.Value = _val;
                    _eOutcome.HasData = true;
                }
            };
            _vg.push(_eOutcome);
            delete _eOutcome;

            //eOutcome.10/////////
            var _eOutcome = new Object();
            _eOutcome.Errors = false;
            _eOutcome.HasData = false;
            _eOutcome.Name = "eOutcome.10";
            _outcome = getValue(_eL, "eOutcome.10");
            if (eOutcome.IsValid == true) {
                if (_outcome.IsNull != true) {
                    var arr1 = [];
                    var arr2 = [];
                    for (var i = 0; i < _exam.ValueArray.length; i++) {
                        if ((_exam.ValueArray[i].HasValue == true) && (arr1.indexOf(_exam.ValueArray[i].val) == -1)) {
                            _val = _exam.ValueArray[i].val
                            arr1.push(_val);
                        }
                    }
                    eOutcome.Value = arr1.slice(0);
                }
            };
            _vg.push(_eOutcome);
            delete _eOutcome;


            //eOutcome.11/////////
            var _eOutcome = new Object();
            _eOutcome.Errors = false;
            _eOutcome.HasData = false;
            _eOutcome.Name = "eOutcome.11";

            _outcome = getValue(_eL, "eOutcome.11");
            if (eOutcome.IsValid == true) {
                if (_outcome.IsNull != true) {
                    _val = _outcome.ValueArray[0].val;
                    _eOutcome.Value = _val;
                    _eOutcome.HasData = true;
                }
            };
            _vg.push(_eOutcome);
            delete _eOutcome;

            //eOutcome.12/////////
            var _eOutcome = new Object();
            _eOutcome.Errors = false;
            _eOutcome.HasData = false;
            _eOutcome.Name = "eOutcome.12";

            _outcome = getValue(_eL, "eOutcome.12");
            if (eOutcome.IsValid == true) {
                if (_outcome.IsNull != true) {
                    var arr1 = [];
                    var arr2 = [];
                    for (var i = 0; i < _exam.ValueArray.length; i++) {
                        if ((_exam.ValueArray[i].HasValue == true) && (arr1.indexOf(_exam.ValueArray[i].val) == -1)) {
                            _val = _exam.ValueArray[i].val
                            arr1.push(_val);
                        }
                    };
                    _eOutcome.Value = arr1.slice(0);
                }
            };
            _vg.push(_eOutcome);
            delete _eOutcome;

            //eOutcome.13/////////
            var _eOutcome = new Object();
            _eOutcome.Errors = false;
            _eOutcome.HasData = false;
            _eOutcome.Name = "eOutcome.13";

            _outcome = getValue(_eL, "eOutcome.13");
            if (eOutcome.IsValid == true) {
                if (_outcome.IsNull != true) {
                    var arr1 = [];
                    var arr2 = [];
                    var arr1 = [];
                    var arr2 = [];
                    for (var i = 0; i < _exam.ValueArray.length; i++) {
                        if ((_exam.ValueArray[i].HasValue == true) && (arr1.indexOf(_exam.ValueArray[i].val) == -1)) {
                            _val = _exam.ValueArray[i].val
                            arr1.push(_val);
                        }
                    };
                    _eOutcome.Value = arr1.slice(0);
                }
            };
            _vg.push(_eOutcome);
            delete _eOutcome;

            //eOutcome.14/////////
            var _eOutcome = new Object();
            _eOutcome.Errors = false;
            _eOutcome.HasData = false;
            _eOutcome.Name = "eOutcome.14";

            _outcome = getValue(_eL, "eOutcome.14");
            if (eOutcome.IsValid == true) {
                if (_outcome.IsNull != true) {
                    _val = _outcome.ValueArray[0].val;
                    _eOutcome.Value = _val;
                    _eOutcome.HasData = true;
                }
            };
            _vg.push(_eOutcome);
            delete _eOutcome;

            //eOutcome.15/////////
            var _eOutcome = new Object();
            _eOutcome.Errors = false;
            _eOutcome.HasData = false;
            _eOutcome.Name = "eOutcome.15";
            _outcome = getValue(_eL, "eOutcome.15");
            if (eOutcome.IsValid == true) {
                if (_outcome.IsNull != true) {
                    _val = _outcome.ValueArray[0].val;
                    _eOutcome.Value = _val;
                    _eOutcome.HasData = true;
                }
            };
            _vg.push(_eOutcome);
            delete _eOutcome;

            //eOutcome.16/////////
            var _eOutcome = new Object();
            _eOutcome.Errors = false;
            _eOutcome.HasData = false;
            _eOutcome.Name = "eOutcome.16";

            _outcome = getValue(elementList, "eOutcome.16");
            if (eOutcome.IsValid == true) {
                if (_outcome.IsNull != true) {
                    _val = _outcome.ValueArray[0].val;
                    _eOutcome.Value = _val;
                    _eOutcome.HasData = true;
                }
            };

            //eOutcome.17/////////
            var _eOutcome = new Object();
            _eOutcome.Errors = false;
            _eOutcome.HasData = false;
            _eOutcome.Name = "eOutcome.17";
            _outcome = getValue(elementList, "eOutcome.17");
            if (eOutcome.IsValid == true) {
                if (_outcome.IsNull != true) {
                    _val = _outcome.ValueArray[0].val;
                    _eOutcome.Value = _val;
                    _eOutcome.HasData = true;
                }
            }
        }
    };
    return eOutcome;
};
var seteOther = function (pOther, Call) {
    var eOther = new Object();


    if (pOther.HasDataSet == false) {
        eOther = setNotApplicableAll();
        return eAirway;
    };





    if (eOther.HasDataSet == true) {
        var _eL = pOther.attributes.sections[a].attributes.elements

        //eOther.01////////
        var _eOther = new Object();
        _eOther.HasData = false;
        _eOther.HasErrors = false;
        _eOther.Name = "eOther.01";

        _other = getValue(_eL, "eOther.01");
        if (_other.IsNull != true) {
            _val = _other.ValueArray[0].val;
            _eExam.HasData = true;
            _eExam.Value = _val;
            v2Array.push({ section: "E23", element: "E23_01", val: setV2("eOther.01", _val) });
        };
        _vg.push(_eOther);
        delete _eOther;

        //eOther.02//////////
        var _eOther = new Object();
        _eOther.HasData = false;
        _eOther.HasErrors = false;
        _eOther.Name = "eOther.02";
        _other = getValue(_eL, "eOther.02");

        if (_other.IsNull != true) {
            var arr1 = [];
            var arr2 = [];

            for (var i = 0; i < _other.ValueArray.length; i++) {
                if ((_other.ValueArray[i].HasValue == true) && (arr1.indexOf(_other.ValueArray[i].val) == -1)) {
                    _val = _other.ValueArray[i].val
                    arr1.push(_val);
                    arr2.push(setV2("eOther.02", _val));
                }
            }

            _eOther.Value = arr1.slice(0);
            v2Array.push({ section: "E23", element: "E23_02", val: arr2.slice(0) });
        };
        _vg.push(_eOther);
        delete _eOther;


        ///////////////////eOther.EMSCrewMemberGroup
        _sectionIndex = getSectionIndex(pOther.attributes.sections[i].attributes, "eOther.EMSCrewMemberGroup");
        if (_sectionIndex > -1) {
            for (var x = 0; x < _sectionIndex.length; x++) {
                var _EMSC = pOther.attributes.sections[_sectionIndex[x]].attributes.elements

                //eOther.03//////////
                var _eOther = new Object();
                _eOther.HasData = false;
                _eOther.HasErrors = false;
                _eOther.Name = "eOther.03";
                _other = getValue(_EMSC, "eOther.03");

                if (_other.IsNull != true) {
                    for (var i = 0; i < _other.ValueArray.length; i++) {
                        if ((_other.ValueArray[i].HasValue == true) && (arr1.indexOf(_other.ValueArray[i].val) == -1)) {
                            _val = _other.ValueArray[i].val
                            arr1.push(_val);
                            arr2.push(setV2("eOther.03", _val));
                        }
                    };
                };
                _eOther.Value = arr1.slice(0);
                v2Array.push({ section: "E23", element: "E23_03", val: arr2.slice(0) });
            }
        };
        _vg.push(_eOther);
        delete _eOther;

        //eOther.04///////////
        var _eOther = new Object();
        _eOther.HasData = false;
        _eOther.HasErrors = false;
        _eOther.Name = "eOther.04";

        _other = getValue(_EMSC, "eOther.04");
        if (_other.IsNull != true) {
            _val = _other.ValueArray[0].val;
            _eExam.Value = _val;
            _eExam.HasData = true;
        }
        _vg.push(_eOther);
        delete _eOther;

        //eOther.05/////////
        var _eOther = new Object();
        _eOther.HasData = false;
        _eOther.HasErrors = false;
        _eOther.Name = "eOther.05";

        _other = getValue(_EMSC, "eOther.05");
        eOther["WorkInjury"] = false;

        if (_other.IsNull == true) {
            _eOther.NV = "7701003";
            v2Array.push({ section: "E23", element: "E23_05", val: V2NOT_RECORDED });
        }
        else {
            _val = _other.ValueArray[0].val;
            eOther["WorkInjury"] = true;
            _eOther.HasData = true;
            _eOther.Value = _val;
            v2Array.push({ section: "E23", element: "E23_05", val: setV2("eOther.05", _val) });
        }
    }
    else {
        v2Array.push({ section: "E23", element: "E23_05", val: v2NOT_APPLICABLE });
        _eOther.NV = "7701001";
    };
    _vg.push(_eOther);
    delete _eOther;

    //eOther.06/////////
    var _eOther = new Object();
    _eOther.HasData = false;
    _eOther.HasErrors = false;
    _eOther.Name = "eOther.06";

    _other = getValue(_EMSC, "eOther.06");
    if (eOther.WorkInjury == true) {
        if (_other.IsNull == true) {
            if (isRequiredStateElement("eOther.06")) {
                _eOther.NV = "7701003";
                v2Array.push({ section: "E23", element: "E23_06", val: V2NOT_RECORDED });
            }
            else {
                _eOther.NV = "7701005";
                v2Array.push({ section: "E23", element: "E23_06", val: v2NOT_REPORTING });
            }
        }
        else {
            for (var i = 0; i < _other.ValueArray.length; i++) {
                if ((_other.ValueArray[i].HasValue == true) && (arr1.indexOf(_other.ValueArray[i].val) == -1)) {
                    _val = _other.ValueArray[i].val
                    arr1.push(_val);
                    arr2.push(setV2("eOther.06", _val));
                }
            };
            _eOther.Value = arr1.slice(0);
            v2Array.push({ section: "E23", element: "E23_06", val: arr2.slice(0) });
        }
    }
    else {
        _eOther.NV = "7701001";
        v2Array.push({ section: "E23", element: "E23_06", val: v2NOT_APPLICABLE });
    };
    _vg.push(_eOther);
    delete _eOther;

    ///////////////////////////
    //eOther.07////////
    var _eOther = new Object();
    _eOther.HasData = false;
    _eOther.HasErrors = false;
    _eOther.Name = "eOther.07";

    _other = getValue(businessObject.elements, "eOther.07");
    if (eOther.IsCallValid == true) {
        if (_other.IsNull != true) {
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _other.ValueArray.length; i++) {
                if ((_other.ValueArray[i].HasValue == true) && (arr1.indexOf(_other.ValueArray[i].val) == -1)) {
                    _val = _other.ValueArray[i].val
                    arr1.push(_val);
                    arr2.push(setV2("eOther.07", _val));
                }
            };
            _eOther.Value = arr1.slice(0);
            v2Array.push({ section: "E23", element: "E23_04", val: arr2.slice(0) });
        }
    };
    _vg.push(_eOther);
    delete _eOther;

    //eOther..08//////////
    var _eOther = new Object();
    _eOther.HasData = false;
    _eOther.HasErrors = false;
    _eOther.Name = "eOther.08";
    _other = getValue(businessObject.elements, "eOther.08");
    if (eOther.IsCallValid == true)  //Wouldn't use protective equipment on a no call
    {
        if (_other.IsNull == true) {
            if (isRequiredStateElement("eOther.08")) {
                _eOther.NV = "7701003";
                v2Array.push({ section: "E23", element: "E23_10", val: v2NOT_RECORDED });

            }
            else {
                _eOther.NV = "7701005";
                v2Array.push({ section: "E23", element: "E23_10", val: v2NOT_REPORTING });
            }
        }
        else {
            _val = _other.ValueArray[0].val;
            _eOther.HasData = true;
            _eOther.Value = _val;
            v2Array.push({ section: "E23", element: "E23_10", val: D2Val("eOther.08", _val) });
        }
    }
    else {
        _eOther.NV = "7701001";
        v2Array.push({ section: "E23", element: "E23_10", val: v2NOT_APPLICABLE });
    };
    _vg.push(_eOther);
    delete _eOther;


    ///////////////////eOther.FileGroup
    if (eOther.IsCallValid == true) {
        _sectionIndex = getSectionIndex(pOther.attributes.sections[i].attributes, "eOther.FileGroup");
        if (_sectionIndex > -1) {
            for (var x = 0; x < _sectionIndex.length; x++) {
                var _fg = [];
                var _eFG = [];
                _eFG = pOther.attributes.sections[_sectionIndex[x]].attributes.elements

                //eOther.09//////////
                var _eOther = new Object();
                _eOther.HasData = false;
                _eOther.HasErrors = false;
                _eOther.Name = "eOther.09";

                _other = getValue(_eFG, "eOther.09");
                if (_other.IsNull != true) {
                    _val = _other.ValueArray[0].val;
                    _eExam.Value = _val;
                    _eExam.HasData = true;
                };
                _fg.push(_eOther);
                delete _eOther;

                //eOther.10//////////
                var _eOther = new Object();
                _eOther.HasData = false;
                _eOther.HasErrors = false;
                _eOther.Name = "eOther.10";

                _other = getValue(_eFG, "eOther.10");
                if (_other.IsNull == true) {
                    _val = _other.ValueArray[0].val;
                    _eExam.Value = _val;
                    _eExam.HasData = true;
                };
                _fg.push(_eOther);
                delete _eOther;


                //eOther.11//////////
                var _eOther = new Object();
                _eOther.HasData = false;
                _eOther.HasErrors = false;
                _eOther.Name = "eOther.11";

                _other = getValue(_eFG, "eOther.11");
                if (_other.IsNull != true) {
                    _val = _other.ValueArray[0].val;
                    _eExam.Value = _val;
                    _eExam.HasData = true;
                }
                _fg.push(_eOther);
                delete _eOther;
            };

            if (Call.HasPatient == true)
            {
                _sectionIndex1 = getSectionIndex(pOther.attributes.sections, "eOther.SignatureGroup");
                if (_sectionIndex1 > -1)
                {
                    for (var x = 0; x < _sectionIndex.length; x++)
                    {
                        var _sig = []
                        var _eSG = pOther.attributesbusinessObject.sections[_sectionIndex[x]].attributes.elements

                        //Other.12////////
                        var _eOther = new Object();
                        _eOther.HasData = false;
                        _eOther.HasErrors = false;
                        _eOther.Name = "eOther.12";

                        _other = getValue(_eSG, "eOther.12");
                        if (_other.IsNull == true) {
                            _val = _other.ValueArray[0].val;
                            _eExam.Value = _val;
                            _eExam.HasData = true;
                        };
                        _sig.push(_eOther);
                        delete _eOther;

                        //eOther.13
                        var _eOther = new Object();
                        _eOther.HasData = false;
                        _eOther.HasErrors = false;
                        _eOther.Name = "eOther.13";

                        _other = getValue(_eSG, "eOther.13");
                        if (_other.IsNull == true) {
                            _val = _other.ValueArray[0].val;
                            _eExam.Value = _val;
                            _eExam.HasData = true;
                        };
                        _sig.push(_eOther);
                        delete _eOther;


                        //ether.14/////////
                        var _eOther = new Object();
                        _eOther.HasData = false;
                        _eOther.HasErrors = false;
                        _eOther.Name = "eOther.14";

                        _other = getValue(_eSG, "eOther.14");
                        if (_other.IsNull != true) {
                            _val = _other.ValueArray[0].val;
                            _eExam.Value = _val;
                            _eExam.HasData = true;
                        };
                        _sig.push(_eOther);
                        delete _eOther;

                        //eOther.15//////
                        var _eOther = new Object();
                        _eOther.HasData = false;
                        _eOther.HasErrors = false;
                        _eOther.Name = "eOther.15";

                        _other = getValue(_eSG, "eOther.15");
                        if (_other.IsNull == true) {
                            _val = _other.ValueArray[0].val;
                            _eExam.Value = _val;
                            _eExam.HasData = true;
                        };
                        _sig.push(_eOther);
                        delete _eOther;

                        //eOther.16/////////
                        var _eOther = new Object();
                        _eOther.HasData = false;
                        _eOther.HasErrors = false;
                        _eOther.Name = "eOther.16";
                        _other = getValue(_eSG, "eOther.16");
                        if (_other.IsNull == true) {
                            _val = _other.ValueArray[0].val;
                            _eExam.Value = _val;
                            _eExam.HasData = true;
                        };
                        _sig.push(_eOther);
                        delete _eOther;

                        //eOther.17////////
                        var _eOther = new Object();
                        _eOther.HasData = false;
                        _eOther.HasErrors = false;
                        _eOther.Name = "eOther.16";

                        _other = getValue(_eSG, "eOther.17");
                        if (_other.IsNull == true)
                        {
                            _val = _other.ValueArray[0].val;
                            _eExam.Value = _val;
                            _eExam.HasData = true;
                        };
                        _sig.push(_eOther);
                        delete _eOther;

                        //eOther.18///////
                        var _eOther = new Object();
                        _eOther.HasData = false;
                        _eOther.HasErrors = false;
                        _eOther.Name = "eOther.18";

                        _other = getValue(_eSG, "eOther.18");
                        if (_other.IsNull == true) {
                            _val = _other.ValueArray[0].val;
                            _eExam.Value = _val;
                            _eExam.HasData = true;
                        };
                        _sig.push(_eOther);
                        delete _eOther;

                        //eOther.19//////////
                        var _eOther = new Object();
                        _eOther.HasData = false;
                        _eOther.HasErrors = false;
                        _eOther.Name = "eOther.19";

                        _other = getValue(_eSG, "eOther.19");
                        if (_other.IsNull == true) {
                            _val = _other.ValueArray[0].val;
                            _eExam.Value = _val;
                            _eExam.HasData = true;
                        };
                        _sig.push(_eOther);
                        delete _eOther;

                        //eOther.20///////
                        var _eOther = new Object();
                        _eOther.HasData = false;
                        _eOther.HasErrors = false;
                        _eOther.Name = "eOther.20";

                        _other = getValue(_eSG, "eOther.20");
                        if (_other.IsNull == true) {
                            _val = _other.ValueArray[0].val;
                            _eExam.Value = _val;
                            _eExam.HasData = true;
                        };
                        _sig.push(_eOther);
                        delete _eOther;

                        //eOther.21/////////
                        var _eOther = new Object();
                        _eOther.HasData = false;
                        _eOther.HasErrors = false;
                        _eOther.Name = "eOther.21";

                        _other = getValue(_eSG, "eOther.21");
                        if (_other.IsNull == true) {
                            _val = _other.ValueArray[0].val;
                            _eExam.Value = _val;
                            _eExam.HasData = true;
                        };
                        _sig.push(_eOther);
                        delete _eOther;
                    }
                }
            };
        }
    }
    return eOther;
};
