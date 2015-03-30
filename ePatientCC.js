var Utils = require('cloud/UtilitiesCC.js');
var NOTRECORDED = '7701003';
var NOTREPORTING = '7701005';
var NOTAPPLICABLE = '7701001';
exports.setePatient = function (TheCall) {

    //1:1

    var pPatient = new Object()

    pPatient = TheCall.pPatient;
    var ePatient = new Object()
    var ErrorList = [];

    if (pPatient.HasDataSet == false) {
        //Set NV
        var NameGroup = this.setNameGroupNull(TheCall);
        var AgeGroup = this.setAgeGroupNull(TheCall);
        ePatient.NameGroup = NameGroup;
        ePatient.AgeGroup = AgeGroup;
        //////////////////ePatient.07
        var _val = [];
        var valObj = {};
        var _text = [];
        valObj.IsNull = true;
        if (TheCall.IsCancelled == true) {
            _val.push(NOTAPPLICABLE);
            valObj.NV = true;
        }
        else {
            _val.push(NOTRECORDED);
            _text.push("Not Recorded")
            valObj.NV = true;
        };

        valObj.vSet = _val.slice(0);
        ePatient["ePatient.07"] = valObj;
        delete valObj;


        //////////////////ePatient.08
        var _val = [];
        var valObj = {};
        var _text = [];
        valObj.IsNull = true;
        if (TheCall.IsCancelled == true) {
            _val.push(NOTAPPLICABLE);
            _text.push("Not Applicable")
            valObj.NV = true;
        }
        else {
            _val.push(NOTRECORDED);
            _text.push("Not Recorded")
            valObj.NV = true;
        };

        valObj.vSet = _val.slice(0);
        ePatient["ePatient.08"] = valObj;
        delete valObj;


        //////////////////ePatient.09
        var _val = [];
        var valObj = {};
        var _text = [];
        valObj.IsNull = true;
        if (TheCall.IsCancelled == true) {
            _val.push(NOTAPPLICABLE);
            _text.push("Not Applicable")
            valObj.NV = true;
        }
        else {
            _val.push(NOTRECORDED);
            _text.push("Not Recorded")
            valObj.NV = true;
        };
        valObj.CodeText = _text.slice(0);
        valObj.vSet = _val.slice(0);
        ePatient["ePatient.09"] = valObj;
        delete valObj;


        //////////////////ePatient.13
        var _val = [];
        var valObj = {};
        var _text = [];
        valObj.IsNull = true;
        if (TheCall.IsCancelled == true) {
            _val.push(NOTAPPLICABLE);
            _text.push("Not Applicable")
            valObj.NV = true;
        }
        else {
            _val.push(NOTRECORDED);
            _text.push("Not Recorded")
            valObj.NV = true;
        };

        valObj.CodeText = _text.slice(0);
        valObj.vSet = _val.slice(0);
        ePatient["ePatient.13"] = valObj;
        delete valObj;

        //////////////////ePatient.14
        var _val = [];
        var valObj = {};
        var _text = [];
        valObj.IsNull = true;
        if (TheCall.IsCancelled == true) {
            _val.push(NOTAPPLICABLE);
            _text.push("Not Applicable")
            valObj.NV = true;
        }
        else {
            _val.push(NOTRECORDED);
            _text.push("Not Recorded")
            valObj.NV = true;
        };
        valObj.CodeText = _text.slice(0);
        valObj.vSet = _val.slice(0);
        ePatient["ePatient.14"] = valObj;
        delete valObj;


        //////////////////ePatient.17
        var _val = [];
        var valObj = {};
        var _text = [];
        valObj.IsNull = true;
        if (TheCall.IsCancelled == true) {
            _val.push(NOTAPPLICABLE);
            _text.push("Not Applicable")
            valObj.NV = true;
        }
        else if (Utils.ReportingRequired("ePatient.17") == true) {
            _val.push(NOTRECORDED);
            _text.push("Not Recorded")
            valObj.NV = true;
        }
        else {
            _val.push(NOTREPORTING);
            _text.push("Not Reporting")
            valObj.NV = true;
        };
        valObj.CodeText = _text.slice(0);
        valObj.vSet = _val.slice(0);
        ePatient["ePatient.17"] = valObj;
        delete valObj;
        return ePatient;
    };
    /////////////////////////////////////////////
    /////////////////////////////////////////////

    var _eL = []
    _eL = pPatient.attributes.elements;
    if (_eL.length == 0) {
        var Error = new Object();
        Error.Level = "SECTION";
        Error.Type = "MAN";
        Error.Att = "ePatient"
        Error.Text = " ePatient Null or Undefined"
        ErrorList.push(Error);
        ePatient.Errors = ErrorList;

    }
    else {
        //////////////////////ePatient.01
        var _patient = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _patient = Utils.getValue(_eL, "ePatient.01");
        if (_patient.IsNull == false) {
            valObj.IsNull = false;
            _val.push(_patient.ValueArray[0].val);
            valObj.vSet = _val.slice(0);
            ePatient["ePatient.01"] = valObj;
            delete valObj;
        };

        ///////////ePatient.05////////
        var _patient = [];
        var _val = [];
        var valObj = {};
        valObj.NV = false;
        valObj.IsNull = true;

        _patient = Utils.getValue(_eL, "ePatient.05");
        if (_patient.IsNull == false) {
            _val.push(_patient.ValueArray[0].val);
            valObj.IsNull = false;

            valObj.vSet = _val.slice(0);
            ePatient["ePatient.05"] = valObj;
            delete valObj;
        };


        ///////////ePatient.06////////
        var _patient = [];
        var _text = [];
        var _val = [];
        var valObj = {};
        valObj.NV = false;
        valObj.IsNull = true;
        if (_patient.IsNull == false) {
            _patient = Utils.getValue(_eL, "ePatient.06");
            _val.push(_patient.ValueArray[0].val);
            valObj.IsNull = false;
        }
        else {
            if (TheCall.HasPatient == false) {
                _val.push(NOTAPPLICABLE);
                _text.push("Not Applicable")
                valObj.NV = true;
            }
            else if (Utils.ReportingRequired("ePatient.06") == true) {
                _val.push(NOTRECORDED);
                _text.push("Not Recorded")
                valObj.NV = true;
            }
            else {
                _val.push(NOTREPORTING);
                _text.push("Not Reporting")
                valObj.NV = true;
            }
        };
        valObj.CodeText = _text.slice(0);
        valObj.vSet = _val.slice(0);
        ePatient["ePatient.06"] = valObj;
        delete valObj;

        ///////////ePatient.07////////
        var _patient = [];
        var _val = [];
        var _text = [];
        var valObj = {};
        valObj.IsNull = true;
        valObj.NV = false;
        _patient = Utils.getValue(_eL, "ePatient.07");
        if (_patient.IsNull == false) {
            _val.push(_patient.ValueArray[0].val);
            valObj.IsNull = false;
        }
        else {
            if (TheCall.HasPatient == false) {
                _val.push(NOTAPPLICABLE);
                _text.push("Not Applicable")
                valObj.NV = true;
            }
            else {
                _val.push(NOTRECORDED);
                _text.push("Not Recorded")
                valObj.NV = true;
            }
        };
        valObj.CodeText = _text.slice(0);
        valObj.vSet = _val.slice(0);
        ePatient["ePatient.07"] = valObj;
        delete valObj;

        ///////////ePatient.08////////
        var _patient = [];
        var _val = [];
        var _text = [];
        var valObj = {};
        valObj.IsNull = true;
        valObj.NV = false;
        _patient = Utils.getValue(_eL, "ePatient.08");
        if (_patient.IsNull == false) {
            _val.push(_patient.ValueArray[0].val);
            valObj.IsNull = false;
        }
        else {
            if (TheCall.HasPatient == false) {
                _val.push(NOTAPPLICABLE);
                _text.push("Not Applicable")
                valObj.NV = true;
            }
            else {
                _val.push(NOTRECORDED);
                _text.push("Not Recorded")
                valObj.NV = true;
            }
        };
        valObj.CodeText = _text.slice(0);
        valObj.vSet = _val.slice(0);
        ePatient["ePatient.08"] = valObj;
        delete valObj;

        ///////////ePatient.09////////
        var _patient = [];
        var _val = [];
        var _text = [];
        var valObj = {};
        valObj.IsNull = true;
        valObj.NV = false;
        _patient = Utils.getValue(_eL, "ePatient.09");
        if (_patient.IsNull == false) {
            _val.push(_patient.ValueArray[0].val);
            valObj.IsNull = false;
        }
        else {
            if (TheCall.HasPatient == false) {
                _val.push(NOTAPPLICABLE);
                _text.push("Not Applicable")
                valObj.NV = true;
            }
            else {
                _val.push(NOTRECORDED);
                _text.push("Not Recorded")
                valObj.NV = true;
            }
        };
        valObj.CodeText = _text.slice(0);
        valObj.vSet = _val.slice(0);
        ePatient["ePatient.09"] = valObj;
        delete valObj;

        ///////////ePatient.10////////
        var _patient = [];
        var _val = [];
        var valObj = {};
        valObj.NV = false;
        valObj.IsNull = true;
        _patient = Utils.getValue(_eL, "ePatient.10");
        if (_patient.IsNull == false) {
            _val.push(_patient.ValueArray[0].val);
            valObj.IsNull = false;
            valObj.vSet = _val.slice(0);
            ePatient["ePatient.10"] = valObj;
            delete valObj;
        };


        ///////////ePatient.11////////
        var _patient = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _patient = Utils.getValue(_eL, "ePatient.11");
        if (_patient.IsNull == false) {
            _val.push(_patient.ValueArray[0].val);
            valObj.IsNull = false;
            valObj.vSet = _val.slice(0);
            ePatient["ePatient.11"] = valObj;
            delete valObj;
        };

        ///////////ePatient.12////////
        var _patient = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _patient = Utils.getValue(_eL, "ePatient.12");
        if (_patient.IsNull == false) {
            _val.push(_patient.ValueArray[0].val);
            valObj.IsNull = false;
            valObj.vSet = _val.slice(0);
            ePatient["ePatient.12"] = valObj;
            delete valObj;
        };


        ///////////ePatient.13////////
        var _patient = [];
        var _val = [];
        var _text = [];
        var valObj = {};
        valObj.NV = false;
        valObj.IsNull = true;
        _patient = Utils.getValue(_eL, "ePatient.13");

        if (_patient.IsNull == false) {
            _val.push(_patient.ValueArray[0].val);
            valObj.IsNull = false;
        }
        else {
            if (TheCall.HasPatient == false) {
                _val.push(NOTAPPLICABLE);
                _text.push("Not Applicable")
                valObj.NV = true;
            }
            else {
                _val.push(NOTRECORDED);
                _text.push("Not Recorded")
                valObj.NV = true;
            }
        };
        _text.push(_patient.ValueArray[0].text);
        valObj.CodeText = _text.slice(0);
        valObj.vSet = _val.slice(0);
        ePatient["ePatient.13"] = valObj;
        delete valObj;



        ///////////ePatient.14////////
        var _patient = [];
        var _val = [];
        var _text = [];
        var valObj = {};
        valObj.NV = false;
        valObj.IsNull = true;
        _patient = Utils.getValue(_eL, "ePatient.14");
        if (_patient.IsNull == false) {
            for (var i = 0; i < _patient.ValueArray.length; i++) {
                if ((_patient.ValueArray[i].HasValue == true) && (_val.indexOf(_patient.ValueArray[i].val) == -1)) {
                    _val.push(_patient.ValueArray[i].val);
                    _text.push(_patient.ValueArray[i].text);

                    valObj.IsNull = false;
                }
            }
        }
        else {
            if (TheCall.HasPatient == false) {
                _val.push(NOTAPPLICABLE);
                _text.push("Not Applicable")
                valObj.NV = true;
            }
            else {
                _val.push(NOTRECORDED);
                _text.push("Not Recorded")
                valObj.NV = true;
            }
        };
        valObj.CodeText = _text.slice(0);
        valObj.vSet = _val.slice(0);
        ePatient["ePatient.14"] = valObj;
        delete valObj;


        ///////////ePatient.17////////           
        var _patient = [];
        var _val = [];
        var _text = [];
        var valObj = {};
        valObj.NV = false;
        valObj.IsNull = true;
        _patient = Utils.getValue(_eL, "ePatient.17");
        if (_patient.IsNull == true) {
            if (typeof _patient.HasPN != 'undefined') {
                if (typeof _patient.HasPN == true) {
                    if (_patient.ValueArray[0].pn == "UnabletoComplete") {
                        if (_patient.pn == "Refused") {
                            _val.push("8801023")
                            _text.push("Unable to Complete");
                            valObj.PN = true;
                        }
                        else {
                            _val.push("8801019");
                            _text.push("Refused");
                            valObj.PN = true;
                        }
                    }
                }
                else {
                    if (TheCall.IsCancelled == true) {
                        _val.push(NOTAPPLICABLE);
                        _text.push("Not Applicable")
                        valObj.NV = true;
                    }
                    else if (Utils.ReportingRequired("ePatient.17") == true) {
                        _val.push(NOTRECORDED);
                        _text.push("Not Recorded")
                        valObj.NV = true;
                    }
                    else {
                        _val.push(NOTREPORTING);
                        _text.push("Not Reporting")
                        valObj.NV = true;
                    }
                }
            }
        }

        else {
            _val.push(_patient.ValueArray[0].val);
            valObj.IsNull = false;
        };
        valObj.CodeText = _text.slice(0);
        valObj.vSet = _val.slice(0);
        ePatient["ePatient.17"] = valObj;
        delete valObj;

        //ePatient.18////////////
        var _patient = [];
        var _val = [];
        var valObj = {};
        ph = [];
        valObj.IsNull = true;
        _patient = Utils.getValue(_eL, "ePatient.18");
        if (_patient.IsNull == false) {
            for (var i = 0; i < _patient.ValueArray.length; i++) {
                if (typeof _patient.ValueArray[i].PhoneNumberType != 'undefined') {
                    PhoneNumberType = _patient.ValueArray[i].PhoneNumberType;
                }
                else {
                    PhoneNumberType = "9913003";
                };
                var ph = new Object();
                ph.val = _patient.ValueArray[i].val;
                ph.PhoneType = PhoneNumberType
                valObj.IsNull = false;
                _val.push(ph)
            }
        };
        valObj.vSet = _val.slice(0);
        ePatient["ePatient.18"] = valObj;
        delete valObj;


        //ePatient.19////////////
        var _patient = [];
        var _val = [];
        var valObj = {};
        ph = [];
        valObj.IsNull = true;
        _patient = Utils.getValue(_eL, "ePatient.19");
        if (_patient.IsNull == false) {
            for (var i = 0; i < _patient.ValueArray.length; i++) {
                if (typeof _patient.ValueArray[i].EMailType != 'undefined') {
                    EmailType = _patient.ValueArray[i].EMailType;
                }
                else {
                    EmailType = "9904001";
                }
                ph.val = _patient.ValueArray[i].val;
                ph.EmailType = EmailType
                valObj.IsNull = false;
                _val.push(ph)
            }
        };
        valObj.vSet = _val.slice(0);
        ePatient["ePatient.19"] = valObj;
        delete valObj;

        //ePatient.20////////////
        var _patient = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;

        _patient = Utils.getValue(_eL, "ePatient.20");
        if (_patient.IsNull == false) {
            _val.push(_patient.ValueArray[0].val);
            valObj.IsNull = false;

            valObj.vSet = _val.slice(0);
            ePatient["ePatient.20"] = valObj;
            delete valObj;
        };

        //ePatient.21////////////
        var _patient = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _patient = Utils.getValue(_eL, "ePatient.21");
        if (_patient.IsNull == false) {
            _val.push(_patient.ValueArray[0].val);
            valObj.IsNull = false;
            valObj.vSet = _val.slice(0);
            ePatient["ePatient.21"] = valObj;
            delete valObj;
        };

        ////////////////////////////////////NAME GROUP////////////////////////////
        var PatientName = new Object();
        var AgeGroup = new Object();
        if (typeof pPatient.attributes.sections == 'undefined') {
            NameGroup = setNameGroupNull(TheCall);
            AgeGroup = setAgeGroupNull(TheCall);
        }
        else {
            var _nI = [];
            _nI = Utils.getSectionIndex(pPatient, "ePatient.PatientNameGroup");
            if (_nI[0] == -1) {
                PatientName = setNameGroupNull(TheCall);
            }
            else {
                var _PNG = []
                _PNG = pPatient.attributes.sections[_nI].attributes.elements;
                if (_PNG.length == 0) {
                    PatientName = setNameGroupNull(TheCall);
                }
                else {

                    //////////////////////ePatient.02
                    var _patient = [];
                    var _val = [];
                    var _text = []
                    var valObj = {};
                    valObj.IsNull = true;
                    valObj.NV = false;
                    _patient = Utils.getValue(_PNG, "ePatient.02");
                    if (_patient.HasPN == true) {
                        if (_patient.pn == "Refused") {
                            _val.push("8801019");
                            _text.push("Refused");
                            valObj.PN = true;
                        }
                        else if (_patient.pn == "Unable to Complete") {
                            _val.push("8801023")
                            _text.push("Unable to Complete");
                            valObj.PN = true;
                        };
                    }

                    if (_patient.IsNull == true) {
                        if (_patient.HasPN != true) {
                            if (TheCall.IsCancelled == true) {
                                _val.push(NOTAPPLICABLE);
                                _text.push("Not Applicable")
                                valObj.NV = true;
                            }
                            else if (Utils.ReportingRequired("ePatient.02") == true) {
                                _val.push(NOTRECORDED);
                                _text.push("Not Recorded");
                                valObj.NV = true;
                            }
                            else {
                                _val.push(NOTREPORTING);
                                _text.push("Not Reporting");
                                valObj.NV = true;
                            }
                        }
                    }

                    else {
                        _val.push(_patient.ValueArray[0].val);
                        valObj.IsNull = false;
                    };
                    valObj.CodeText = _text.slice(0);
                    valObj.vSet = _val.slice(0);
                    PatientName["ePatient.02"] = valObj;
                    delete valObj;


                    //////////////////////ePatient.03
                    var _patient = [];
                    var _val = [];
                    var _text = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    valObj.NV = false;
                    _patient = Utils.getValue(_PNG, "ePatient.03");
                    if (_patient.HasPN == true) {
                        if (_patient.pn == "Refused") {
                            _val.push("8801019");
                            _text.push("Refused");
                            valObj.PN = true;
                        }
                        else if (_patient.pn == "Unable to Complete") {
                            _val.push("8801023")
                            _text.push("Unable to Complete");
                            valObj.PN = true;
                        };
                    }

                    if (_patient.IsNull == true) {
                        if (_patient.HasPN != true) {
                            if (TheCall.IsCancelled == true) {
                                _val.push(NOTAPPLICABLE);
                                _text.push("Not Applicable")
                                valObj.NV = true;
                            }
                            else if (Utils.ReportingRequired("ePatient.03") == true) {
                                _val.push(NOTRECORDED);
                                _text.push("Not Recorded")
                                valObj.NV = true;
                            }
                            else {
                                _val.push(NOTREPORTING);
                                _text.push("Not Reporting")
                                valObj.NV = true;
                            }
                        }
                    }

                    else {
                        _val.push(_patient.ValueArray[0].val);
                        valObj.IsNull = false;
                    };
                    valObj.CodeText = _text.slice(0);
                    valObj.vSet = _val.slice(0);
                    PatientName["ePatient.03"] = valObj;
                    delete valObj;


                    ///////////ePatient.04////////
                    var _patient = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;

                    _patient = Utils.getValue(_PNG, "ePatient.04");
                    if ((typeof _patient.IsNull != 'undefined') && (_patient.IsNull != true)) {
                        _val.push(_patient.ValueArray[0].val);
                        valObj.IsNull = false;

                        valObj.vSet = _val.slice(0);
                        PatientName["ePatient.04"] = valObj;
                        delete valObj;
                    }
                    ePatient.PatientNameGroup = PatientName;
                }
            }
        };

        //////////////////////AGE GROUP
        var _sI = [];
        _sI = Utils.getSectionIndex(pPatient, "ePatient.AgeGroup");
        if (_sI[0] == -1) {
            AgeGroup = setAgeGroupNull(TheCall);
        }
        else {
            _PAG = []
            var _PAG = pPatient.attributes.sections[_sI].attributes.elements;
            if (_PAG.length == 0) {
                AgeGroup = setAgeGroupNull(TheCall);
            }
            else {
                ///////////ePatient.15////////
                var _patient = [];
                var _val = [];
                var valObj = {};
                valObj.NV = false;
                valObj.IsNull = true;
                _patient = Utils.getValue(_PAG, "ePatient.15");
                if (_patient.IsNull != true) {
                    _val.push(_patient.ValueArray[0].val);

                    valObj.IsNull = false;
                }
                else {
                    if (TheCall.HasPatient == false) {
                        _val.push(NOTAPPLICABLE);
                        _text.push("Not Applicable")
                        valObj.NV = true;
                    }
                    else {
                        _val.push(NOTRECORDED);
                        _text.push("Not Recorded")
                        valObj.NV = true;
                    }
                };
                valObj.CodeText = _text.slice(0);
                valObj.vSet = _val.slice(0);
                AgeGroup["ePatient.15"] = valObj;
                delete valObj;

                ///////////ePatient.16////////
                var _patient = [];
                var _val = [];
                var _text = [];
                var valObj = {};
                valObj.NV = false;
                valObj.IsNull = true;
                _patient = Utils.getValue(_PAG, "ePatient.16");
                if (_patient.IsNull != true) {
                    _val.push(_patient.ValueArray[0].val);
                    valObj.IsNull = false;
                    _text.push(_patient.ValueArray[0].text);
                    valObj.CodeText = _text.slice(0);
                }
                else {
                    if (TheCall.HasPatient == false) {
                        _val.push(NOTAPPLICABLE);
                        _text.push("Not Applicable")
                        valObj.NV = true;
                    }
                    else {
                        _val.push(NOTRECORDED);
                        _text.push("Not Recorded")
                        valObj.NV = true;
                    }
                };
                valObj.CodeText = _text.slice(0);
                valObj.vSet = _val.slice(0);
                AgeGroup["ePatient.16"] = valObj;
                delete valObj;

                ePatient.AgeGroup = AgeGroup;
            }
        }
    };
    ePatient.ErrorList = ErrorList;
    return ePatient;
};

var setNameGroupNull = function (TheCall) {
    var _val = [];
    var _text = [];
    var valObj = {};
    if (TheCall.IsCancelled == false) {
        if (TheCall.Cancelled == 'Prior') {
            _val.push(NOTAPPLICABLE);
            _text.push("Not Applicable")
            valObj.NV = true;
        }
    }
    else if (Utils.ReportingRequired("ePatient.02") == true) {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded")
        valObj.NV = true;
    }
    else {
        _val.push(NOTREPORTING);
        _text.push("Not Reporting")
        valObj.NV = true;
    };
    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    PatientName["ePatient.02"] = valObj;
    delete valObj;

    ///////ePatient.03
    var _val = [];
    var _text = [];
    var valObj = {};
    if (TheCall.IsCancelled == false) {
        if (TheCall.Cancelled == 'Prior') {
            _val.push(NOTAPPLICABLE);
            _text.push("Not Applicable")
            valObj.NV = true;
        }
    }
    else if (Utils.ReportingRequired("ePatient.02") == true) {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded")
        valObj.NV = true;
    }
    else {
        _val.push(NOTREPORTING);
        _text.push("Not Reporting")
        valObj.NV = true;
    };
    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    PatientName["ePatient.03"] = valObj;
    delete valObj;

    ePatient.PatientNameGroup = PatientName;
};

var setAgeGroupNull = function (TheCall) {
    var AgeGroup = new Object();
    ///////ePatient.15
    var _val = [];
    var _text = [];
    var valObj = {};
    if (TheCall.HasPatient == false) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable")
        valObj.NV = true;
    }
    else {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded")
        valObj.NV = true;
    };

    valObj.vSet = _val.slice(0);
    AgeGroup["ePatient.15"] = valObj;
    AgeGroup["ePatient.16"] = valObj;
    delete valObj;

    return AgeGroup;
};