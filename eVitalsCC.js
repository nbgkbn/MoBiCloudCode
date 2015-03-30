var Utils = require('cloud/UtilitiesCC.js');
var NOTRECORDED = '7701003';
var NOTREPORTING = '7701005';
var NOTAPPLICABLE = '7701001';
exports.seteVitals = function (TheCall) {
    var eVitals = new Object();
    var pVitals = TheCall.pVitals


    var VitalGroupArray = new Array();
    eVitals.IsValid = false;

    if (pVitals.HasDataSet == false) {
        var VitalGroup = new Object();
        VitalGroup = seteVitalsGroupNull(TheCall)
        eVitals.VitalGroup = VitalGroup;
        return eVitals;
    };
    if (typeof pVitals.attributes.sections == 'undefined') {
        var VitalGroup = new Object();
        VitalGroup = seteVitalsGroupNull(TheCall)
        eVitals.VitalGroup = VitalGroup;
        return eVitals;
    }
    else {
        var _sI = [];
        _sI = Utils.getSectionIndex(pVitals, "eVitals.VitalGroup")
        if (_sI[0] == -1) {
            var VitalGroup = new Object();
            VitalGroup = seteVitalsGroupNull(TheCall)
            eVitals.VitalGroup = VitalGroup;
        }
        else {
            var VitalGroupArray = []
            for (var xx = 0; xx < _sI.length; xx++) {
                var _eL = [];
                _eL = pVitals.attributes.sections[xx].attributes.elements;
                if (_eL.length == 0) {
                    VitalGroup = seteVitalsGroupNull(TheCall);
                }
                else {
                    var VitalGroup = {};

                    //eVital.01/////////////////////////////
                    var _vitals = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _vitals = Utils.getValue(_eL, "eVitals.01");
                    if (_vitals.IsNull == true) {
                        if (TheCall.HasPatient == true) {
                            _val.push(NOTAPPLICABLE);
                            _text.push("Not Applicable");
                            valObj.NV = true;

                        }
                        else {
                            _val.push(NOTRECORDED);
                            _text.push("Not Recorded");
                            valObj.NV = true;
                        }
                    }
                    else {

                        _val.push(_vitals.ValueArray[0].val);
                        valObj.IsNull = false;
                    };
                    valObj.vSet = _val.slice(0);
                    VitalGroup["eVitals.01"] = valObj;
                    delete valObj;


                    //eVital.02/////////////////////////////
                    var _text = [];
                    var _val = [];
                    var _vitals = [];
                    var valObj = {};
                    var _text = [];
                    valObj.IsNull = true;
                    _vitals = Utils.getValue(_eL, "eVitals.02");
                    if (_vitals.IsNull == true) {
                        if (TheCall.HasPatient == true) {
                            _val.push(NOTAPPLICABLE);
                            _text.push("Not Applicable");
                            valObj.NV = true;

                        }
                        else {
                            _val.push(NOTRECORDED);
                            _text.push("Not Recorded");
                            valObj.NV = true;
                        }
                    }
                    else {
                        _text.push(_vitals.ValueArray[0].text);
                        _val.push(_vitals.ValueArray[0].val);
                        valObj.IsNull = false;
                    };

                    valObj.CodeText = _text.slice(0);
                    valObj.vSet = _val.slice(0);
                    VitalGroup["eVitals.02"] = valObj;
                    delete valObj;

                    //eVitals.12/////////////////////////////
                    var _text = [];
                    var _vitals = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _vitals = Utils.getValue(_eL, "eVitals.12");
                    if (_vitals.IsNull == true) {
                        if (TheCall.HasPatient == false) {
                            _val.push(NOTAPPLICABLE);
                            _text.push("Not Applicable");
                            valObj.NV = true;
                        }
                        else {
                            _val.push(NOTRECORDED);
                            _text.push("Not Recorded");
                            valObj.NV = true;
                        }
                    }
                    else {
                        if (_vitals.HasPN == true) {
                            if (_vitals.ValueArray[0].pn == "UnabletoComplete") {
                                _val.push("8801023")
                                _text.push("Unable to Complete");
                                valObj.PN = true;
                            }
                            else if (_vitals.ValueArray[0].pn == "Refused") {
                                _val.push("8801019");
                                _text.push("Refused");
                                valObj.PN = true;
                            }
                            else if (_vitals.ValueArray[0].pn == "ExamFindingNotPresent") {
                                _val.push("8801005");
                                _text.push("Exam Finding NotPresent");
                                valObj.PN = true;
                            }
                        }
                        else {
                            _val.push(_vitals.ValueArray[0].val);
                            valObj.IsNull = false;
                            _text.push(_vitals.ValueArray[0].text);
                        }
                    };


                    valObj.CodeText = _text.slice(0);
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                    VitalGroup["eVitals.12"] = valObj;
                    delete valObj;


                    //eVital.13/////////////////////////////
                    var _vitals = [];
                    var _val = [];
                    var valObj = {};
                    var _text = [];
                    valObj.IsNull = true;

                    _vitals = Utils.getValue(_eL, "eVitals.13");
                    if (_vitals.IsNull != true) {

                        valObj.CodeText = _text.slice(0);
                        valObj.vSet = _val.slice(0);
                        VitalGroup["eVitals.13"] = valObj;
                        delete valObj;
                    };


                    //eVitals.14/////////////////////////////
                    var _text = [];
                    var _vitals = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _vitals = Utils.getValue(_eL, "eVitals.14");
                    if (_vitals.IsNull == true) {
                        if (TheCall.HasPatient == false) {
                            _val.push(NOTAPPLICABLE);
                            _text.push("Not Applicable");
                            valObj.NV = true;
                        }
                        else {
                            _val.push(NOTRECORDED);
                            _text.push("Not Recorded");
                            valObj.NV = true;
                        }
                    }
                    else {
                        if (_vitals.HasPN == true) {
                            if (_vitals.ValueArray[0].pn == "UnabletoComplete") {
                                _val.push("8801023")
                                _text.push("Unable to Complete");
                                valObj.PN = true;
                            }
                            else if (_vitals.ValueArray[0].pn == "Refused") {
                                _val.push("8801019");
                                _text.push("Refused");
                                valObj.PN = true;
                            }
                            else if (_vitals.ValueArray[0].pn == "ExamFindingNotPresent") {
                                _val.push("8801005");
                                _text.push("Exam Finding NotPresent");
                                valObj.PN = true;
                            }
                        }
                        else {
                            _val.push(_vitals.ValueArray[0].val);
                            valObj.IsNull = false;
                            _text.push(_vitals.ValueArray[0].text);
                        }
                    };

                    valObj.CodeText = _text.slice(0);
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                    VitalGroup["eVitals.14"] = valObj;
                    delete valObj;


                    //eVital.15/////////////////////////////
                    var _vitals = [];
                    var _val = [];
                    var valObj = {};
                    var _text = [];
                    valObj.IsNull = true;
                    _vitals = Utils.getValue(_eL, "eVitals.15");
                    if (_vitals.IsNull != true) {
                        _val.push(_vitals.ValueArray[0].val);
                        valObj.IsNull = false;
                        _text.push(_vitals.ValueArray[0].text);

                        valObj.CodeText = _text.slice(0);
                        valObj.vSet = _val.slice(0);
                        VitalGroup["eVitals.15"] = valObj;
                        delete valObj;
                    };

                    /////////////eVital.16
                    var _vitals = [];
                    var _text = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _vitals = Utils.getValue(_eL, "eVitals.16");
                    if (_vitals.IsNull == true) {
                        if (TheCall.HasPatient == false) {
                            _val.push(NOTAPPLICABLE);
                            _text.push("Not Applicable");
                            valObj.NV = true;
                        }
                        else {
                            _val.push(NOTRECORDED);
                            _text.push("Not Recorded");
                            valObj.NV = true;
                        }
                    }
                    else {
                        if (_vitals.HasPN == true) {
                            if (_vitals.ValueArray[0].pn == "UnabletoComplete") {
                                _val.push("8801023")
                                _text.push("Unable to Complete");
                                valObj.PN = true;
                            }
                            else if (_vitals.ValueArray[0].pn == "Refused") {
                                _val.push("8801019");
                                _text.push("Refused");
                                valObj.PN = true;
                            }
                            else if (_vitals.ValueArray[0].pn == "ExamFindingNotPresent") {
                                _val.push("8801005");
                                _text.push("Exam Finding NotPresent");
                                valObj.PN = true;
                            }
                        }
                        else {
                            _val.push(_vitals.ValueArray[0].val);
                            valObj.IsNull = false;
                            _text.push(_vitals.ValueArray[0].text);
                        }
                    };

                    valObj.CodeText = _text.slice(0);
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                    VitalGroup["eVitals.16"] = valObj;
                    delete valObj;


                    //eVitals.17/////////////////////////////
                    var _vitals = [];
                    var _text = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _vitals = Utils.getValue(_eL, "eVitals.17");
                    if (_vitals.IsNull == true) {
                        if (TheCall.HasPatient == false) {
                            _val.push(NOTAPPLICABLE);
                            _text.push("Not Applicable");
                            valObj.NV = true;
                        }
                        else {
                            _val.push(NOTRECORDED);
                            _text.push("Not Recorded");
                            valObj.NV = true;
                        }
                    }
                    else {
                        if (_vitals.HasPN == true) {
                            if (_vitals.ValueArray[0].pn == "UnabletoComplete") {
                                _val.push("8801023")
                                _text.push("Unable to Complete");
                                valObj.PN = true;
                            }
                            else if (_vitals.ValueArray[0].pn == "Refused") {
                                _val.push("8801019");
                                _text.push("Refused");
                                valObj.PN = true;
                            }
                        }
                        else {
                            _val.push(_vitals.ValueArray[0].val);
                            valObj.IsNull = false;
                            _text.push(_vitals.ValueArray[0].text);
                        }
                    };

                    valObj.CodeText = _text.slice(0);
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                    VitalGroup["eVitals.17"] = valObj;
                    delete valObj;

                    //eVital.26/////////////////////////////   
                    var _vitals = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _vitals = Utils.getValue(_eL, "eVitals.26");
                    if (_vitals.IsNull != true) {
                        _val.push(_vitals.ValueArray[0].val);
                        _text.push(_vitals.ValueArray[0].text);
                        valObj.IsNull = false;

                        valObj.CodeText = _text.slice(0);
                        valObj.vSet = _val.slice(0);
                        VitalGroup["eVitals.26"] = valObj;
                        delete valObj;
                    };


                    //eVitals.18/////////////////////////////
                    var _vitals = [];
                    var _text = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _vitals = Utils.getValue(_eL, "eVitals.18");
                    if (_vitals.IsNull == true) {
                        if (TheCall.HasPatient == false) {
                            _val.push(NOTAPPLICABLE);
                            _text.push("Not Applicable");
                            valObj.NV = true;
                        }
                        else {
                            _val.push(NOTRECORDED);
                            _text.push("Not Recorded");
                            valObj.NV = true;
                        }
                    }
                    else {
                        if (_vitals.HasPN == true) {
                            if (_vitals.ValueArray[0].pn == "UnabletoComplete") {
                                _val.push("8801023")
                                _text.push("Unable to Complete");
                                valObj.PN = true;
                            }
                            else if (_vitals.ValueArray[0].pn == "Refused") {
                                _val.push("8801019");
                                _text.push("Refused");
                                valObj.PN = true;
                            }
                        }
                        else {
                            _val.push(_vitals.ValueArray[0].val);
                            valObj.IsNull = false;
                            _text.push(_vitals.ValueArray[0].text);
                        }
                    };

                    valObj.CodeText = _text.slice(0);
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                    VitalGroup["eVitals.18"] = valObj;
                    delete valObj;




                    ///////////////Cardiac Rhythm Group
                    if (typeof pVitals.attributes.sections[xx].attributes.sections == 'undefined') {
                        VitalGroup["CardiacRhythmGroup"] = setCardiacRhythmGroupNull(TheCall);
                        VitalGroup["BloodPressureGroup"] = setBloodPressureGroupNull(TheCall);
                        VitalGroup["HeartRateGroup"] = setHeartRateGroupNull(TheCall);
                        VitalGroup["GlasgowScoreGroup"] = setGCSGroupNull(TheCall);
                        VitalGroup["TemperatureGroup"] = setTempGroupNull(TheCall);
                        VitalGroup["PainScaleGroup"] = setPainScaleGroupNull(TheCall);
                        VitalGroup["StrokeScaleGroup"] = setStrokeScaleGroupNull(TheCall);
                    }
                    else {

                        var _cRG = [];
                        _cRG = Utils.getSectionIndex(pVitals.attributes.sections[xx], "eVitals.CardiacRhythmGroup")
                        var _CRG = new Object()
                        if (_cRG[0] == -1) {
                            _CRG = setCardiacRhythmGroupNull(TheCall);
                        }
                        else {
                            var _eRG = [];
                            _eRG = pVitals.attributes.sections[xx].attributes.sections[_cRG].attributes.elements;
                            var _CRG = new Object()
                            if (_eRG[0] != -1) {
                                _CRG = setCardiacRhythmGroupNull(TheCall);
                            }
                            else {
                                //eVital.03/////////////////////////////
                                var _vitals = [];
                                var _val = [];
                                var _text = [];
                                var valObj = {};
                                valObj.IsNull = true;
                                _vitals = Utils.getValue(_eRG, "eVitals.03");
                                if (_vitals.IsNull == true) {
                                    if (TheCall.HasPatient == false) {
                                        _val.push(NOTAPPLICABLE);
                                        _text.push("Not Applicable");
                                        valObj.NV = true;
                                    }
                                    else {
                                        _val.push(NOTRECORDED);
                                        _text.push("Not Recorded");
                                        valObj.NV = true;
                                    }
                                }
                                else {
                                    if (_vitals.HasPN == true) {
                                        if (_vitals.ValueArray[0].pn == "UnabletoComplete") {
                                            _val.push("8801023")
                                            _text.push("Unable to Complete");
                                            valObj.PN = true;
                                        }
                                        else if (_vitals.ValueArray[0].pn == "Refused") {
                                            _val.push("8801019");
                                            _text.push("Refused");
                                            valObj.PN = true;
                                        }
                                        else if (_vitals.ValueArray[0].pn == "ExamFindingNotPresent") {
                                            _val.push("8801005");
                                            _text.push("Exam Finding NotPresent");
                                            valObj.PN = true;
                                        }
                                    }
                                    else {
                                        for (var i = 0; i <= _vitals.ValueArray.length - 1; i++) {
                                            if ((_vitals.ValueArray[i].HasValue == true) && (_val.indexOf(_vitals.ValueArray[i].val) == -1)) {
                                                _val.push(_vitals.ValueArray[i].val);
                                                _text.push(_vitals.ValueArray[i].text);
                                                valObj.IsNull = false;
                                            }
                                        };
                                    }
                                };

                                valObj.CodeText = _text.slice(0);
                                valObj.IsNull = false;
                                valObj.vSet = _val.slice(0);
                                _CRG["eVitals.03"] = valObj;
                                delete valObj;


                                //eVital.04/////////////////////////////
                                var _vitals = [];
                                var _text = [];
                                var _val = [];
                                var valObj = {};
                                valObj.IsNull = true;
                                _vitals = Utils.getValue(_eRG, "eVitals.04");
                                if (_vitals.IsNull == true) {
                                    if (TheCall.HasPatient == false) {
                                        _val.push(NOTAPPLICABLE);
                                        _text.push("Not Applicable");
                                        valObj.NV = true;
                                    }
                                    else {
                                        _val.push(NOTRECORDED);
                                        _text.push("Not Recorded");
                                        valObj.NV = true;
                                    }
                                }
                                else {
                                    _val.push(_vitals.ValueArray[0].val);
                                    valObj.IsNull = false;
                                    _text.push(_vitals.ValueArray[0].text);
                                }
                            };
                            valObj.CodeText = _text.slice(0);
                            valObj.vSet = _val.slice(0);
                            eVitals["CardiacRhythmGroup"] = 1
                            _CRG["eVitals.04"] = valObj;
                            delete valObj;


                            //eVital.05/////////////////////////////
                            var _vitals = [];
                            var _val = [];
                            var valObj = {};
                            var _text = [];
                            valObj.IsNull = true;

                            _vitals = Utils.getValue(_eRG, "eVitals.05");
                            if (_vitals.IsNull != true) {
                                if (TheCall.HasPatient == false) {
                                    _val.push(NOTAPPLICABLE);
                                    _text.push("Not Applicable");
                                    valObj.NV = true;
                                }
                                else {
                                    _val.push(NOTRECORDED);
                                    _text.push("Not Recorded");
                                    valObj.NV = true;
                                }
                            }
                            else {
                                for (var i = 0; i <= _vitals.ValueArray.length - 1; i++) {
                                    if ((_vitals.ValueArray[i].HasValue == true) && (_val.indexOf(_vitals.ValueArray[i].val) == -1)) {
                                        _val.push(_vitals.ValueArray[i].val);
                                        _text.push(_vitals.ValueArray[i].text);
                                        valObj.IsNull = false;
                                    }
                                }
                            };
                            valObj.CodeText = _text.slice(0);
                            valObj.vSet = _val.slice(0);
                            eVitals["CardiacRhythmGroup"] = 1
                            _CRG["eVitals.05"] = valObj;
                            delete valObj;

                        }
                    };
                    VitalGroup["CardiacRhythmGroup"] = _CRG;

                    ///////////////////////////////////////////eVitals.BloodPressureGroup
                    var _BPG = new Object();
                    var _bPi = [];  //if no sections, NA values                        
                    _bPi = Utils.getSectionIndex(pVitals.attributes.sections[xx], "eVitals.BloodPressureGroup");
                    if (_bPi[0] == -1) {
                        _BPG = setBloodPressureGroupNull(TheCall)
                    }
                    else {
                        var _eBP = [];
                        _eBP = pVitals.attributes.sections[xx].attributes.sections[_bPi].attributes.elements;
                        if (_eBP.length == 0) {
                            _BPG = setBloodPressureGroupNull(TheCall)
                        }
                        else {
                            var _BPG = new Object();
                            //eVital.06/////////////////////////////
                            var _vitals = [];
                            var _text = [];
                            var _val = [];
                            var valObj = {};
                            valObj.IsNull = true;
                            _vitals = Utils.getValue(_eBP, "eVitals.06");
                            if (_vitals.IsNull == true) {
                                if (TheCall.HasPatient == false) {
                                    _val.push(NOTAPPLICABLE);
                                    _text.push("Not Applicable");
                                    valObj.NV = true;
                                }
                                else {
                                    _val.push(NOTRECORDED);
                                    _text.push("Not Recorded");
                                    valObj.NV = true;
                                }
                            }
                            else {
                                if (_vitals.HasPN == true) {
                                    if (_vitals.ValueArray[0].pn == "UnabletoComplete") {
                                        _val.push("8801023")
                                        _text.push("Unable to Complete");
                                        valObj.PN = true;
                                    }
                                    else if (_vitals.ValueArray[0].pn == "Refused") {
                                        _val.push("8801019");
                                        _text.push("Refused");
                                        valObj.PN = true;
                                    }
                                    else if (_vitals.ValueArray[0].pn == "ExamFindingNotPresent") {
                                        _val.push("8801005");
                                        _text.push("Exam Finding NotPresent");
                                        valObj.PN = true;
                                    }
                                }
                                else {
                                    _val.push(_vitals.ValueArray[0].val);
                                    valObj.IsNull = false;
                                    _text.push(_vitals.ValueArray[0].text);
                                }
                            };

                            valObj.CodeText = _text.slice(0);
                            valObj.IsNull = false;
                            valObj.vSet = _val.slice(0);
                            _BPG["eVitals.06"] = valObj;
                            delete valObj;


                            //eVitals.07/////////////////////////////
                            var _vitals = [];
                            var _val = [];
                            var _text = [];
                            var valObj = {};
                            valObj.IsNull = true;
                            _vitals = Utils.getValue(_eBP, "eVitals.07");
                            if (_vitals.IsNull == true) {
                                if (TheCall.HasPatient == false) {
                                    _val.push(NOTAPPLICABLE);
                                    _text.push("Not Applicable");
                                    valObj.NV = true;
                                }
                                else if (Utils.ReportingRequired("eVitals.07") == true) {
                                    _val.push(NOTRECORDED);
                                    _text.push("Not Reporting");
                                    valObj.NV = true;
                                }
                                else {

                                    _val.push(NOTRECORDED);
                                    _text.push("Not Recorded");
                                    valObj.NV = true;
                                }
                            }
                            else {
                                if (_vitals.HasPN == true) {
                                    if (_vitals.ValueArray[0].pn == "UnabletoComplete") {
                                        _val.push("8801023")
                                        _text.push("Unable to Complete");
                                        valObj.PN = true;
                                    }
                                    else if (_vitals.ValueArray[0].pn == "Refused") {
                                        _val.push("8801019");
                                        _text.push("Refused");
                                        valObj.PN = true;
                                    }
                                    else if (_vitals.ValueArray[0].pn == "ExamFindingNotPresent") {
                                        _val.push("8801005");
                                        _text.push("Exam Finding NotPresent");
                                        valObj.PN = true;
                                    }
                                }
                                else {
                                    _val.push(_vitals.ValueArray[0].val);
                                    valObj.IsNull = false;
                                    _text.push(_vitals.ValueArray[0].text);
                                }
                            };

                            valObj.CodeText = _text.slice(0);
                            valObj.IsNull = false;
                            valObj.vSet = _val.slice(0);
                            _BPG["eVitals.07"] = valObj;
                            delete valObj;

                            //eVital.08/////////////////////////////
                            var _vitals = [];
                            var _val = [];
                            var valObj = {};
                            var _text = [];
                            valObj.IsNull = true;

                            _vitals = Utils.getValue(_eBP, "eVitals.08");
                            if (_vitals.IsNull == true) {
                                if (TheCall.HasPatient == false) {
                                    _val.push(NOTAPPLICABLE);
                                    _text.push("Not Applicable");
                                    valObj.NV = true;
                                }
                                else {
                                    _val.push(NOTRECORDED);
                                    _text.push("Not Recorded");
                                    valObj.NV = true;
                                }
                            }
                            else {
                                _val.push(_vitals.ValueArray[0].val);
                                valObj.IsNull = false;
                                _text.push(_vitals.ValueArray[0].text);
                            };
                            valObj.CodeText = _text.slice(0);
                            valObj.vSet = _val.slice(0);
                            _BPG["eVitals.08"] = valObj;
                            delete valObj;

                            //eVital.09/////////////////////////////               
                            var _vitals = [];
                            var _val = [];
                            var valObj = {};
                            valObj.IsNull = true;
                            _vitals = Utils.getValue(_eBP, "eVitals.09");
                            if (_vitals.IsNull != true) {
                                valObj.vSet = _val.slice(0);
                                valObj.IsNull = false;
                                _BPG["eVitals.09"] = valObj;
                                delete valObj;
                            };
                        }
                    };
                    VitalGroup["BloodPressureGroup"] = _BPG;

                    ///////////////HeartRateGroup
                    var _bPI = [];
                    var _HRG = new Object();
                    _bPI = Utils.getSectionIndex(pVitals.attributes.sections[xx], "eVitals.HeartRateGroup")
                    if (_bPI[0] == -1) {
                        _HRG = setHeartRateGroupNull(TheCall);

                    }
                    else {
                        var _eHG = [];
                        _eHG = pVitals.attributes.sections[xx].attributes.sections[_bPI].attributes.elements;
                        if (eHG[0] != -1) {
                            _HRG = setHeartRateGroupNull(TheCall);
                        }
                        else {

                            //eVital.10/////////////////////////////               
                            var _vitals = [];
                            var _val = [];
                            var _text = [];
                            var valObj = {};
                            valObj.IsNull = true;
                            _vitals = Utils.getValue(_eHG, "eVitals.10");
                            if (_vitals.IsNull == true) {
                                if (TheCall.HasPatient == false) {
                                    _val.push(NOTAPPLICABLE);
                                    _text.push("Not Applicable");
                                    valObj.NV = true;
                                }
                                else {
                                    _val.push(NOTRECORDED);
                                    _text.push("Not Recorded");
                                    valObj.NV = true;
                                }
                            }
                            else {
                                if (_vitals.HasPN == true) {
                                    if (_vitals.ValueArray[0].pn == "UnabletoComplete") {
                                        _val.push("8801023")
                                        _text.push("Unable to Complete");
                                        valObj.PN = true;
                                    }
                                    else if (_vitals.ValueArray[0].pn == "Refused") {
                                        _val.push("8801019");
                                        _text.push("Refused");
                                        valObj.PN = true;
                                    }
                                    else if (_vitals.ValueArray[0].pn == "ExamFindingNotPresent") {
                                        _val.push("8801005");
                                        _text.push("Exam Finding NotPresent");
                                        valObj.PN = true;
                                    }
                                }
                                else {
                                    _val.push(_vitals.ValueArray[0].val);
                                    valObj.IsNull = false;
                                    _text.push(_vitals.ValueArray[0].text);
                                }
                            };

                            valObj.CodeText = _text.slice(0);
                            valObj.IsNull = false;
                            valObj.vSet = _val.slice(0);
                            _HRG["eVitals.10"] = valObj;
                            delete valObj;


                            //eVital.11/////////////////////////////               
                            var _vitals = [];
                            var _val = [];
                            var _text = [];
                            var valObj = {};
                            valObj.IsNull = true;
                            _vitals = Utils.getValue(_eHG, "eVitals.11");

                            if (_vitals.IsNull != true) {
                                _val.push(_vitals.ValueArray[0].val);
                                valObj.IsNull = false;
                                _text.push(_vitals.ValueArray[0].text);

                                valObj.CodeText = _text.slice(0);
                                valObj.vSet = _val.slice(0);
                                _HRG["eVitals.11"] = valObj;
                                delete valObj;
                            }
                        }
                    };
                    VitalGroup["HeartRateGroup"] = _HRG;


                    ///////////////////////////////////////////////////


                    var _GCS = new Object()
                    var _tG = [];
                    _tG = Utils.getSectionIndex(pVitals.attributes.sections[xx], "eVitals.GlasgowScoreGroup")
                    if (_tG[0] == -1) {
                        _GCS = setGCSGroupNull(TheCall)
                    }
                    else {
                        var _eGCS = [];
                        _eGCS = pVitals.attributes.sections[xx].attributes.sections[_tG].attributes.elements;
                        if (_eGCS[0] != -1) {
                            _GCS = setGCSGroupNull(TheCall)
                        }
                        else {

                            //eVitals.19/////////////////////////////
                            var _vitals = [];
                            var _val = [];
                            var _text = [];
                            var valObj = {};
                            valObj.IsNull = true;
                            _vitals = Utils.getValue(_eGCS, "eVitals.19");
                            if (_vitals.IsNull == true) {
                                if (TheCall.HasPatient == false) {
                                    _val.push(NOTAPPLICABLE);
                                    _text.push("Not Applicable");
                                    valObj.NV = true;
                                }
                                else {
                                    _val.push(NOTRECORDED);
                                    _text.push("Not Recorded");
                                    valObj.NV = true;
                                }
                            }
                            else {
                                if (_vitals.HasPN == true) {
                                    if (_vitals.ValueArray[0].pn == "UnabletoComplete") {
                                        _val.push("8801023")
                                        _text.push("Unable to Complete");
                                        valObj.PN = true;
                                    }
                                    else if (_vitals.ValueArray[0].pn == "Refused") {
                                        _val.push("8801019");
                                        _text.push("Refused");
                                        valObj.PN = true;
                                    }
                                }
                                else {
                                    _val.push(_vitals.ValueArray[0].val);
                                    valObj.IsNull = false;
                                    _text.push(_vitals.ValueArray[0].text);
                                }
                            };

                            valObj.CodeText = _text.slice(0);
                            valObj.IsNull = false;
                            valObj.vSet = _val.slice(0);
                            _GCS["eVitals.19"] = valObj;
                            delete valObj;



                            //eVital.20/////////////////////////////        
                            var _vitals = [];
                            var _val = [];
                            var _text = [];
                            var valObj = {};
                            valObj.IsNull = true;
                            _vitals = Utils.getValue(_eGCS, "eVitals.20");
                            if (_vitals.IsNull == true) {
                                if (TheCall.HasPatient == false) {
                                    _val.push(NOTAPPLICABLE);
                                    _text.push("Not Applicable");
                                    valObj.NV = true;
                                }
                                else {
                                    _val.push(NOTRECORDED);
                                    _text.push("Not Recorded");
                                    valObj.NV = true;
                                }
                            }
                            else {
                                if (_vitals.HasPN == true) {
                                    if (_vitals.ValueArray[0].pn == "UnabletoComplete") {
                                        _val.push("8801023")
                                        _text.push("Unable to Complete");
                                        valObj.PN = true;
                                    }
                                    else if (_vitals.ValueArray[0].pn == "Refused") {
                                        _val.push("8801019");
                                        _text.push("Refused");
                                        valObj.PN = true;
                                    }
                                }
                                else {
                                    _val.push(_vitals.ValueArray[0].val);
                                    valObj.IsNull = false;
                                    _text.push(_vitals.ValueArray[0].text);
                                }
                            };

                            valObj.CodeText = _text.slice(0);
                            valObj.IsNull = false;
                            valObj.vSet = _val.slice(0);
                            _GCS["eVitals.20"] = valObj;
                            delete valObj;


                            //eVital.21/////////////////////////////        
                            var _vitals = [];
                            var _text = [];
                            var _val = [];
                            var valObj = {};
                            valObj.IsNull = true;
                            _vitals = Utils.getValue(_eGCS, "eVitals.21");
                            if (_vitals.IsNull == true) {
                                if (TheCall.HasPatient == false) {
                                    _val.push(NOTAPPLICABLE);
                                    _text.push("Not Applicable");
                                    valObj.NV = true;
                                }
                                else {
                                    _val.push(NOTRECORDED);
                                    _text.push("Not Recorded");
                                    valObj.NV = true;
                                }
                            }
                            else {
                                if (_vitals.HasPN == true) {
                                    if (TheCall.HasPatient == false) {
                                        _val.push(NOTAPPLICABLE);
                                        _text.push("Not Applicable");
                                        valObj.NV = true;
                                    }
                                    else {
                                        _val.push(NOTRECORDED);
                                        _text.push("Not Recorded");
                                        valObj.NV = true;
                                    }
                                }
                                else {
                                    _val.push(_vitals.ValueArray[0].val);
                                    valObj.IsNull = false;
                                    _text.push(_vitals.ValueArray[0].text);
                                }
                            };

                            valObj.CodeText = _text.slice(0);
                            valObj.IsNull = false;
                            valObj.vSet = _val.slice(0);
                            _GCS["eVitals.21"] = valObj;
                            delete valObj;

                            //eVital.22/////////////////////////////        
                            var _vitals = [];
                            var _val = [];
                            var valObj = {};
                            valObj.IsNull = true;
                            _vitals = Utils.getValue(_eGCS, "eVitals.22");
                            if (_vitals.IsNull != true) {
                                _val.push(_vitals.ValueArray[0].val);
                                valObj.IsNull = false;

                                valObj.vSet = _val.slice(0);
                                _GCS["eVitals.22"] = valObj;
                                delete valObj;
                            };

                            //eVital.23/////////////////////////////        
                            var _vitals = [];
                            var _val = [];
                            var _text = [];
                            var valObj = {};
                            valObj.IsNull = true;
                            _vitals = Utils.getValue(_eGCS, "eVitals.23");
                            if (_vitals.IsNull == true) {
                                if (TheCall.HasPatient == false) {
                                    _val.push(NOTAPPLICABLE);
                                    _text.push("Not Applicable");
                                    valObj.NV = true;
                                }
                                else {
                                    _val.push(NOTRECORDED);
                                    _text.push("Not Recorded");
                                    valObj.NV = true;
                                }
                            }
                            else {
                                if (_vitals.HasPN == true) {
                                    if (_vitals.ValueArray[0].pn == "UnabletoComplete") {
                                        _val.push("8801023")
                                        _text.push("Unable to Complete");
                                        valObj.PN = true;
                                    }
                                    else if (_vitals.ValueArray[0].pn == "Refused") {
                                        _val.push("8801019");
                                        _text.push("Refused");
                                        valObj.PN = true;
                                    }
                                    else if (_vitals.ValueArray[0].pn == "ExamFindingNotPresent") {
                                        _val.push("8801005");
                                        _text.push("Exam Finding NotPresent");
                                        valObj.PN = true;
                                    }
                                }
                                else {
                                    _val.push(_vitals.ValueArray[0].val);
                                    valObj.IsNull = false;
                                    _text.push(_vitals.ValueArray[0].text);
                                }
                            };

                            valObj.CodeText = _text.slice(0);
                            valObj.IsNull = false;
                            valObj.vSet = _val.slice(0);
                            _GCS["eVitals.23"] = valObj;
                            delete valObj;


                        }
                    };
                    VitalGroup["GlasgowScoreGroup"] = _GCS;

                    var _tG = [];
                    _tG = Utils.getSectionIndex(pVitals.attributes.sections[xx], "eVitals.TemperatureGroup")
                    var _TMPG = new Object();
                    if (_tG[0] == -1) {
                        _TMPG = setTempGroupNull(TheCall);
                    }
                    else {
                        var _eTGP = [];
                        _eTGP = pVitals.attributes.sections[xx].attributes.sections[_tG].attributes.elements;
                        if (_eTGP.length == 0) {
                            _TMPG = setTempGroupNull(TheCall);
                        }
                        else {

                            //eVital.24/////////////////////////////        
                            var _vitals = [];
                            var _val = [];
                            var _text = [];
                            var valObj = {};
                            valObj.IsNull = true;
                            _vitals = Utils.getValue(_eTGP, "eVitals.24");
                            if (_vitals.IsNull == true) {
                                if (TheCall.HasPatient == false) {
                                    _val.push(NOTAPPLICABLE);
                                    _text.push("Not Applicable");
                                    valObj.NV = true;
                                }
                                else {
                                    _val.push(NOTRECORDED);
                                    _text.push("Not Recorded");
                                    valObj.NV = true;
                                }
                            }
                            else {
                                if (_vitals.HasPN == true) {
                                    if (_vitals.ValueArray[0].pn == "UnabletoComplete") {
                                        _val.push("8801023")
                                        _text.push("Unable to Complete");
                                        valObj.PN = true;
                                    }
                                    else if (_vitals.ValueArray[0].pn == "Refused") {
                                        _val.push("8801019");
                                        _text.push("Refused");
                                        valObj.PN = true;
                                    }
                                    else if (_vitals.ValueArray[0].pn == "ExamFindingNotPresent") {
                                        _val.push("8801005");
                                        _text.push("Exam Finding NotPresent");
                                        valObj.PN = true;
                                    }
                                }
                                else {
                                    _val.push(_vitals.ValueArray[0].val);
                                    valObj.IsNull = false;
                                    _text.push(_vitals.ValueArray[0].text);
                                }
                            };

                            valObj.CodeText = _text.slice(0);
                            _text.push(_vitals.ValueArray[0].text);
                            valObj.IsNull = false;
                            valObj.vSet = _val.slice(0);
                            _TMPG["eVitals.24"] = valObj;
                            delete valObj;



                            //eVital.25/////////////////////////////   
                            var _vitals = [];
                            var _val = [];
                            var _text = [];
                            var valObj = {};
                            valObj.IsNull = true;
                            _vitals = Utils.getValue(_eTGP, "eVitals.25");
                            if (_vitals.IsNull != true) {
                                _val.push(_vitals.ValueArray[0].val);
                                valObj.IsNull = false;
                                _text.push(_vitals.ValueArray[0].text);

                                valObj.CodeText = _text.slice(0);
                                valObj.vSet = _val.slice(0);
                                _TMPG["eVitals.25"] = valObj;
                                delete valObj;
                            };

                        }
                    };
                    VitalGroup["TemperatureGroup"] = _TMPG;

                    var _pSG = [];
                    var _PSG = new Object();
                    _pSG = Utils.getSectionIndex(pVitals.attributes.sections[xx], "eVitals.PainScaleGroup")
                    if (_pSG[0] == -1) {
                        _PSG = setPainScaleGroupNull(TheCall);
                    }
                    else {
                        var _ePSG = [];
                        _ePSG = pVitals.attributes.sections[xx].attributes.sections[_pSG].attributes.elements;
                        if (_ePSG[0] != -10) {
                            _ePSG = setPainScaleGroupNull(TheCall);
                        }
                        else {

                            //eVital.27/////////////////////////////   
                            var _vitals = [];
                            var _val = [];
                            var _text = [];
                            var valObj = {};
                            valObj.IsNull = true;
                            _vitals = Utils.getValue(_ePSG, "eVitals.27");
                            if (_vitals.IsNull == true) {
                                if (TheCall.HasPatient == false) {
                                    _val.push(NOTAPPLICABLE);
                                    _text.push("Not Applicable");
                                    valObj.NV = true;
                                }
                                else {
                                    _val.push(NOTRECORDED);
                                    _text.push("Not Recorded");
                                    valObj.NV = true;
                                }
                            }
                            else {
                                if (_vitals.HasPN == true) {
                                    if (_vitals.ValueArray[0].pn == "UnabletoComplete") {
                                        _val.push("8801023")
                                        _text.push("Unable to Complete");
                                        valObj.PN = true;
                                    }
                                    else if (_vitals.ValueArray[0].pn == "Refused") {
                                        _val.push("8801019");
                                        _text.push("Refused");
                                        valObj.PN = true;
                                    }
                                    else if (_vitals.ValueArray[0].pn == "ExamFindingNotPresent") {
                                        _val.push("8801005");
                                        _text.push("Exam Finding NotPresent");
                                        valObj.PN = true;
                                    }
                                }
                                else {
                                    _val.push(_vitals.ValueArray[0].val);
                                    valObj.IsNull = false;
                                    _text.push(_vitals.ValueArray[0].text);
                                }
                            };

                            valObj.CodeText = _text.slice(0);
                            valObj.vSet = _val.slice(0);
                            _PSG["eVitals.27"] = valObj;
                            delete valObj;



                            //eVital.28/////////////////////////////   
                            var _vitals = [];
                            var _val = [];
                            var _text = [];
                            var valObj = {};
                            valObj.IsNull = true;
                            _vitals = Utils.getValue(_ePSG, "eVitals.28");
                            if (_vitals.IsNull == true) {
                                if (TheCall.HasPatient == false) {
                                    _val.push(NOTAPPLICABLE);
                                    _text.push("Not Applicable");
                                    valObj.NV = true;
                                }
                                else {
                                    _val.push(NOTRECORDED);
                                    _text.push("Not Recorded");
                                    valObj.NV = true;
                                }
                            }
                            else {
                                _val.push(_vitals.ValueArray[0].val);
                                valObj.IsNull = false;
                                _text.push(_vitals.ValueArray[0].text);
                            };

                            valObj.CodeText = _text.slice(0);
                            valObj.vSet = _val.slice(0);
                            _PSG["eVitals.28"] = valObj;
                            delete valObj;
                        };

                    };

                    VitalGroup["PainScaleGroup"] = _PSG;

                    var _SSG = [];  //if no sections, NA values                        
                    _SSG = Utils.getSectionIndex(pVitals.attributes.sections[xx], "eVitals.StrokeScaleGroup");
                    if (_SSG[0] == -1) {
                        _SSG = setStrokeScaleGroupNull(TheCall);
                    }
                    else {
                        var _eSSG = [];
                        var _eSSG = pVitals.attributes.sections[xx].attributes.sections[_pSG].attributes.elements;
                        if (_eSSG[0] != -1) {
                            VitalGroup["StrokeScaleGroup"] = setStrokeScaleGroupNull(TheCall);
                        }
                        else {
                            var _SSG = new Object();
                            //eVital.29/////////////////////////////   
                            var _vitals = [];
                            var _val = [];
                            var _text = [];
                            var valObj = {};
                            valObj.IsNull = true;
                            _vitals = Utils.getValue(_eSSG, "eVitals.29");
                            if (_vitals.IsNull == true) {
                                if (TheCall.HasPatient == false) {
                                    _val.push(NOTAPPLICABLE);
                                    _text.push("Not Applicable");
                                    valObj.NV = true;
                                }
                                else {
                                    _val.push(NOTRECORDED);
                                    _text.push("Not Recorded");
                                    valObj.NV = true;
                                }
                            }
                            else {
                                if (_vitals.HasPN == true) {
                                    if (_vitals.ValueArray[0].pn == "UnabletoComplete") {
                                        _val.push("8801023")
                                        _text.push("Unable to Complete");
                                        valObj.PN = true;
                                    }
                                    else if (_vitals.ValueArray[0].pn == "Refused") {
                                        _val.push("8801019");
                                        _text.push("Refused");
                                        valObj.PN = true;
                                    }
                                    else if (_vitals.ValueArray[0].pn == "ExamFindingNotPresent") {
                                        _val.push("8801005");
                                        _text.push("Exam Finding NotPresent");
                                        valObj.PN = true;
                                    }
                                }
                                else {
                                    _val.push(_vitals.ValueArray[0].val);
                                    valObj.IsNull = false;
                                    _text.push(_vitals.ValueArray[0].text);
                                }
                            };

                            valObj.CodeText = _text.slice(0);
                            valObj.vSet = _val.slice(0);
                            _SSG["eVitals.29"] = valObj;
                            delete valObj;

                            //eVital.30/////////////////////////////   
                            var _vitals = [];
                            var _val = [];
                            var _text = [];
                            var valObj = {};
                            valObj.IsNull = true;
                            _vitals = Utils.getValue(_eSSG, "eVitals.30");
                            if (_vitals.IsNull != true) {
                                if (TheCall.HasPatient == false) {
                                    _val.push(NOTAPPLICABLE);
                                    _text.push("Not Applicable");
                                    valObj.NV = true;
                                }
                                else {
                                    _val.push(NOTRECORDED);
                                    _text.push("Not Recorded");
                                    valObj.NV = true;
                                }
                            }
                            else {

                                _val.push(_vitals.ValueArray[0].val);
                                valObj.IsNull = false;
                                _text.push(_vitals.ValueArray[0].text);
                            };
                            valObj.CodeText = _text.slice(0);
                            valObj.vSet = _val.slice(0);
                            _SSG["eVitals.30"] = valObj;
                            delete valObj;
                        }
                    };
                    VitalGroup["StrokeScaleGroup"] = _SSG;
                };


                //eVital.31/////////////////////////////   
                var _val = [];
                var _text = [];
                var valObj = {};
                valObj.IsNull = true;
                _vitals = Utils.getValue(_eL, "eVitals.31");
                if (_vitals.IsNull == true) {
                    if (TheCall.HasPatient == false) {
                        _val.push(NOTAPPLICABLE);
                        _text.push("Not Applicable");
                        valObj.NV = true;
                    }
                    else {
                        _val.push(NOTRECORDED);
                        _text.push("Not Recorded");
                        valObj.NV = true;
                    }
                }
                else {
                    if (_vitals.HasPN == true) {
                        if (_vitals.ValueArray[0].pn == "UnabletoComplete") {
                            _val.push("8801023")
                            _text.push("Unable to Complete");
                            valObj.PN = true;
                        }
                        else if (_vitals.ValueArray[0].pn == "Refused") {
                            _val.push("8801019");
                            _text.push("Refused");
                            valObj.PN = true;
                        }
                        else if (_vitals.ValueArray[0].pn == "ExamFindingNotPresent") {
                            _val.push("8801005");
                            _text.push("Exam Finding NotPresent");
                            valObj.PN = true;
                        }
                    }
                    else {
                        _val.push(_vitals.ValueArray[0].val);
                        valObj.IsNull = false;
                        _text.push(_vitals.ValueArray[0].text);
                    }
                };

                valObj.CodeText = _text.slice(0);
                valObj.vSet = _val.slice(0);
                VitalGroup["eVitals.31"] = valObj;
                delete valObj;

                //eVital.32/////////////////////////////   
                var _val = [];
                var _text = [];
                var valObj = {};
                valObj.IsNull = true;
                _vitals = Utils.getValue(_eL, "eVitals.32");
                if (_vitals.IsNull == true) {
                    if (TheCall.HasPatient == false) {
                        _val.push(NOTAPPLICABLE);
                        _text.push("Not Applicable");
                        valObj.NV = true;
                    }
                    else {
                        _val.push(NOTRECORDED);
                        _text.push("Not Recorded");
                        valObj.NV = true;
                    }
                }
                else {
                    if (_vitals.HasPN == true) {
                        if (_vitals.ValueArray[0].pn == "UnabletoComplete") {
                            _val.push("8801023")
                            _text.push("Unable to Complete");
                            valObj.PN = true;
                        }

                    }
                    else {
                        _val.push(_vitals.ValueArray[0].val);
                        valObj.IsNull = false;
                        _text.push(_vitals.ValueArray[0].text);
                    }
                };

                valObj.CodeText = _text.slice(0);
                valObj.vSet = _val.slice(0);
                VitalGroup["eVitals.32"] = valObj;
                delete valObj;

                //eVital.33/////////////////////////////   
                var _val = [];
                var _text = [];
                var valObj = {};
                valObj.IsNull = true;
                _vitals = Utils.getValue(_eL, "eVitals.33");
                if (_vitals.HasPN == true) {
                    if (_vitals.ValueArray[0].pn == "UnabletoComplete") {
                        _val.push("8801023")
                        _text.push("Unable to Complete");
                        valObj.PN = true;
                    }
                    else if (_vitals.ValueArray[0].pn == "Refused") {
                        _val.push("8801019");
                        _text.push("Refused");
                        valObj.PN = true;
                    }
                }
                else {
                    _val.push(_vitals.ValueArray[0].val);
                    valObj.IsNull = false;
                    _text.push(_vitals.ValueArray[0].text);
                }
            };
        };
        VitalGroupArray.push(VitalGroup);
    };
    eVitals.VitalGroup = VitalGroupArray.slice(0);
    return eVitals;
};


var seteVitalsGroupNull = function (TheCall) {
    var VitalGroup = {};
    var _val = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;

    if (TheCall.HasPatient == true) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable");
        valObj.NV = true;

    }
    else {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded");
        valObj.NV = true;
    };


    valObj.vSet = _val.slice(0);
    valObj.CodeText = _text.slice(0);
    VitalGroup["eVitals.01"] = valObj;
    VitalGroup["eVitals.02"] = valObj;
    VitalGroup["eVitals.12"] = valObj;
    VitalGroup["eVitals.14"] = valObj;
    VitalGroup["eVitals.16"] = valObj;
    VitalGroup["eVitals.17"] = valObj;
    VitalGroup["eVitals.18"] = valObj;
    VitalGroup["eVitals.31"] = valObj;


    var CRG = setCardiacRhythmGroupNull(TheCall)
    var BG = setBloodPressureGroupNull(TheCall);
    var HRG = setHeartRateGroupNull(TheCall);
    var GCS = setGCSGroupNull(TheCall);
    var TG = setTempGroupNull(TheCall);
    var PSG = setPainScaleGroupNull(TheCall);
    var SSG = setStrokeScaleGroupNull(TheCall);

    VitalGroup.CardiacRhythmGroup = CRG;
    VitalGroup.BloodPressureGroup = BG;
    VitalGroup.HeartRateGroup = HRG;
    VitalGroup.GlasgowScoreGroup = GCS;
    VitalGroup.TemperatureGroup = TG;
    VitalGroup.PainScaleGroup = PSG;
    VitalGroup.StrokeScaleGroup = SSG;

    return VitalGroup;
    delete valObj;

};


var setCardiacRhythmGroupNull = function (TheCall) {
    var CRG = {};
    var _val = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;

    if (TheCall.HasPatient == true) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable");
        valObj.NV = true;

    }
    else {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded");
        valObj.NV = true;
    };


    valObj.vSet = _val.slice(0);
    valObj.CodeText = _text.slice(0);
    CRG["eVitals.03"] = valObj;
    CRG["eVitals.04"] = valObj;
    CRG["eVitals.05"] = valObj;
    delete valObj;

    return CRG
};


var setBloodPressureGroupNull = function (TheCall) {
    var BPG = {};
    var _val = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;

    if (TheCall.HasPatient == true) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable");
        valObj.NV = true;

    }
    else {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded");
        valObj.NV = true;
    };


    valObj.vSet = _val.slice(0);
    valObj.CodeText = _text.slice(0);
    BPG["eVitals.06"] = valObj;
    BPG["eVitals.07"] = valObj;
    BPG["eVitals.08"] = valObj;
    BPG["eVitals.09"] = valObj;
    delete valObj;

    return BPG
};


var setHeartRateGroupNull = function (TheCall) {
    var HRG = {};
    var _val = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;

    if (TheCall.HasPatient == true) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable");
        valObj.NV = true;

    }
    else {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded");
        valObj.NV = true;
    };

    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    HRG["eVitals.10"] = valObj;
    HRG["eVitals.11"] = valObj;
    delete valObj;

    return HRG
};

var setGCSGroupNull = function (TheCall) {
    var GCS = {};
    var _val = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;

    if (TheCall.HasPatient == true) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable");
        valObj.NV = true;

    }
    else {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded");
        valObj.NV = true;
    };


    valObj.vSet = _val.slice(0);
    valObj.CodeText = _text.slice(0);
    GCS["eVitals.19"] = valObj;
    GCS["eVitals.20"] = valObj;
    GCS["eVitals.21"] = valObj;
    GCS["eVitals.22"] = valObj;
    GCS["eVitals.23"] = valObj;
    delete valObj;

    /////////////eVitals.23
    var _val = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;

    if (TheCall.HasPatient == false) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable");
        valObj.NV = true;
    }
    else if (Utils.ReportingRequired("eVitals.23") == true) {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded");
        valObj.NV = true;
    }
    else {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded");
        valObj.NV = true;
    };

    valObj.vSet = _val.slice(0);
    valObj.CodeText = _text.slice(0);
    GCS["eVitals.23"] = valObj;
    delete valObj;


    return GCS;
};


var setTempGroupNull = function (TheCall) {
    var TG = {};
    var _val = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;

    if (TheCall.HasPatient == true) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable");
        valObj.NV = true;

    }
    else {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded");
        valObj.NV = true;
    };


    valObj.vSet = _val.slice(0);
    valObj.CodeText = _text.slice(0);
    TG["eVitals.24"] = valObj;
    delete valObj;

    return TG
};

var setPainScaleGroupNull = function (TheCall) {
    var PSG = {};
    var _val = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;

    if (TheCall.HasPatient == true) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable");
        valObj.NV = true;

    }
    else {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded");
        valObj.NV = true;
    };

    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    PSG["eVitals.27"] = valObj;
    delete valObj;

    /////////////eVitals.28
    var _val = [];
    var valObj = {};
    var _text = [];
    valObj.IsNull = true;

    if (TheCall.HasPatient == false) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable");
        valObj.NV = true;
    }
    else if (Utils.ReportingRequired("eVitals.28") == true) {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded");
        valObj.NV = true;
    }
    else {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded");
        valObj.NV = true;
    };

    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    PSG["eVitals.28"] = valObj;
    delete valObj;
    return PSG
};


var setStrokeScaleGroupNull = function (TheCall) {
    var SSG = {};
    var _val = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;

    if (TheCall.HasPatient == true) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable");
        valObj.NV = true;

    }
    else {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded");
        valObj.NV = true;
    };

    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    SSG["eVitals.29"] = valObj;
    SSG["eVitals.30"] = valObj;
    delete valObj;
    return SSG
};
