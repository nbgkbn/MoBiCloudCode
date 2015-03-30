var Utils = require('cloud/UtilitiesCC.js');
var NOTRECORDED = '7701003';
var NOTREPORTING = '7701005';
var NOTAPPLICABLE = '7701001';
exports.seteSituation = function (TheCall) {
    var ErrorList = [];
    pSituation = TheCall.pSituation;
    var eSituation = new Object();

    if (pSituation.HasDataSet == false) {
        eSituation = this.seteSituationNull(TheCall);
        return eSituation;
    };
    //////////////////////////////////
    if (typeof pSituation.attributes.elements == 'undefined') {
        eSituation = this.seteSituationNull(TheCall);
        return eSituation;
    };

    var _eL = [];
    _eL = pSituation.attributes.elements;
    if (_eL.length == 0) {
        eSituation = this.seteSituationNull(TheCall);
        return eSituation;
    }
    else {
        var _situation = [];
        var _val = [];
        var _text = [];
        var valObj = {};
        valObj.IsNull = true;

        _situation = Utils.getValue(_eL, "eSituation.01");
        if (_situation.IsNull != true) {
            _val.push(_situation.ValueArray[0].val);
            valObj.IsNull = false;
        }
        else {
            if (TheCall.HasTreatment == false) {
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
        valObj.vSet = _val.slice(0);
        eSituation["eSituation.01"] = valObj;
        delete valObj;


        //////////////////////eSituation.02
        var _situation = [];
        var _text = [];
        var _val = [];
        var valObj = {};
        var _text = [];
        valObj.IsNull = true;
        _situation = Utils.getValue(_eL, "eSituation.02");
        if (_situation.IsNull != true) {
            _val.push(_situation.ValueArray[0].val);
            valObj.IsNull = false;
            _text.push(_situation.ValueArray[0].text);
            valObj.CodeText = _text.slice(0);
        }
        else {
            if (TheCall.HasTreatment == false) {
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
        valObj.vSet = _val.slice(0);
        eSituation["eSituation.02"] = valObj;
        delete valObj;

        ///////////////////////////////////////eSituation.PatientComplaintGroup

        if (typeof pSituation.attributes.sections == 'undefined') {
            eSituation["PatientComplaintGroup"] = setPatientComplainGroupNull(TheCall);
            eSituation["WorkRelatedGroup"] = setWorkRelatedGroupNull(TheCall);
        }
        else {
            var _pCG = [];
            _pCG = Utils.getSectionIndex(pSituation, "eSituation.PatientComplaintGroup");

            if (_pCG[0] == -1) {
                eSituation["PatientComplaintGroup"] = setPatientComplainGroupNull(TheCall);
            }
            else {

                var PGArray = [];
                for (var i = 0; i < _pCG.length; i++) {
                    var PCGroup = new Object();
                    var _eRG = [];
                    _eRG = pSituation.attributes.sections[_pCG[i]].attributes.elements

                    //////////////////////eSituation.03
                    var _situation = [];
                    var _val = [];
                    var _text = [];
                    var valObj = {};
                    valObj.IsNull = true;

                    _situation = Utils.getValue(_eRG, "eSituation.03");
                    if (_situation.IsNull != true) {

                        _val.push(_situation.ValueArray[0].val)
                        _text.push(_situation.ValueArray[0].text);
                        valObj.IsNull = false;
                    }
                    else {
                        if (TheCall.HasPatient == false) {
                            _val.push(NOTAPPLICABLE);
                            _text.push("Not Applicable")
                            valObj.NV = true;
                        }
                        else if (Utils.ReportingRequired("eSituation.03") == true) {
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
                    PCGroup["eSituation.03"] = valObj;
                    delete valObj;


                    //////////////////////eSituation.04
                    var _situation = [];
                    var _val = [];
                    var _text = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _situation = Utils.getValue(_eRG, "eSituation.04");
                    if (_situation.IsNull != true) {
                        _val.push(_situation.ValueArray[0].val)
                        valObj.IsNull = false;
                        _text.push(_situation.ValueArray[0].text);
                    }
                    else {
                        if (TheCall.HasPatient == false) {
                            _val.push(NOTAPPLICABLE);
                            _text.push("Not Applicable")
                            valObj.NV = true;
                        }
                        else if (Utils.ReportingRequired("eSituation.04") == true) {
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
                    PCGroup["eSituation.04"] = valObj;
                    delete valObj;

                    //////////////////////eSituation.05    
                    var _situation = [];
                    var _val = [];
                    var _text = [];
                    var valObj = {};
                    valObj.IsNull = true;

                    _situation = Utils.getValue(_eRG, "eSituation.05");
                    if (_situation.IsNull != true) {
                        _val.push(_situation.ValueArray[0].val)
                        valObj.IsNull = false;
                    }
                    else {
                        if (TheCall.HasPatient == false) {
                            _val.push(NOTAPPLICABLE);
                            _text.push("Not Applicable")
                            valObj.NV = true;
                        }
                        else if (Utils.ReportingRequired("eSituation.05") == true) {
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

                    valObj.vSet = _val.slice(0);
                    PCGroup["eSituation.05"] = valObj;
                    delete valObj;



                    //////////////////////eSituation.06
                    var _situation = [];
                    var _val = [];
                    var _text = [];
                    var valObj = {};
                    valObj.IsNull = true;

                    _situation = Utils.getValue(_eRG, "eSituation.06");
                    if (_situation.IsNull != true) {
                        _val.push(_situation.ValueArray[0].val)
                        valObj.IsNull = false;
                        _text.push(_situation.ValueArray[0].text);
                    }
                    else {
                        if (TheCall.HasPatient == false) {
                            _val.push(NOTAPPLICABLE);
                            _text.push("Not Applicable")
                            valObj.NV = true;
                        }
                        else if (Utils.ReportingRequired("eSituation.06") == true) {
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
                    PCGroup["eSituation.06"] = valObj;
                    delete valObj;

                    PGArray.push(PCGroup);
                };
                eSituation["PatientComplaintGroup"] = PGArray.slice();
            }

            ///////////////////////////////////////eSituation.WorkRelatedGroup

            var _wRG = [];
            _wRG = Utils.getSectionIndex(pSituation, "eSituation.WorkRelatedGroup");
            if (_wRG[0] == -1) {
                eSituation["WorkRelatedGroup"] = setWorkRelatedGroupNull(TheCall);
            }
            else {
                var _eWRG = [];
                _eWRG = pSituation.attributes.sections[_wRG[0]].attributes.elements;
                if (_eWRG.length == 0) {
                    eSituation["WorkRelatedGroup"] = setWorkRelatedGroupNull(TheCall);
                }
                else {
                    var _WRG = new Object();


                    //////////////////////eSituation.14
                    var _situation = [];
                    var _val = [];
                    var _text = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _situation = Utils.getValue(_eWRG, "eSituation.14");
                    if (_situation.IsNull != true) {
                        _val.push(_situation.ValueArray[0].val);
                        valObj.IsNull = false;
                        _text.push(_situation.ValueArray[0].text);
                    }
                    else {
                        if (TheCall.HasPatient == false) {
                            _val.push(NOTAPPLICABLE);
                            _text.push("Not Applicable")
                            valObj.NV = true;
                        }
                        else if (TheCall.HasTreatment == false) {
                            _val.push(NOTAPPLICABLE);
                            _text.push("Not Applicable")
                            valObj.NV = true;
                        }
                        else if (Utils.ReportingRequired("eSituation.14") == true) {
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
                    _WRG["eSituation.14"] = valObj;
                    delete valObj;


                    //////////////////////eSituation.15
                    var _situation = [];
                    var _val = [];
                    var valObj = {};
                    var _text = [];
                    valObj.IsNull = true;

                    _situation = Utils.getValue(_eWRG, "eSituation.15");
                    if (_situation.IsNull != true) {
                        _val.push(_situation.ValueArray[0].val)
                        valObj.IsNull = false;
                        _text.push(_situation.ValueArray[0].text);
                        valObj.CodeText = _text.slice(0);
                        valObj.vSet = _val.slice(0);
                        _WRG["eSituation.15"] = valObj;
                        delete valObj;
                    };

                    //////////////////////eSituation.16
                    var _situation = [];
                    var _val = [];
                    var valObj = {};
                    var _text = [];
                    valObj.IsNull = true;
                    _situation = Utils.getValue(_eWRG, "eSituation.16");
                    if (_situation.IsNull != true) {
                        _val.push(_situation.ValueArray[0].val)
                        valObj.IsNull = false;
                        _text.push(_situation.ValueArray[0].text);
                        valObj.CodeText = _text.slice(0);
                        valObj.vSet = _val.slice(0);
                        _WRG["eSituation.16"] = valObj;
                        delete valObj;
                    };
                    eSituation.WorkRelatedGroup = _WRG;
                }
            };
            var _situation = [];
            var _val = [];
            var valObj = {};
            var _text = [];
            valObj.IsNull = true;
            _situation = Utils.getValue(_eL, "eSituation.07");

            if (_situation.IsNull != true) {
                _val.push(_situation.ValueArray[0].val);
                valObj.IsNull = false;
                _text.push(_situation.ValueArray[0].text);
            }
            else {
                if (TheCall.HasPatient == false) {
                    _val.push(NOTAPPLICABLE);
                    _text.push("Not Applicable")
                    valObj.NV = true;
                }
                else if (TheCall.HasTreatment == false) {
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
            eSituation["eSituation.07"] = valObj;
            delete valObj;

            //////////////////////eSituation.08
            var _situation = [];
            var _val = [];
            var valObj = {};
            var _text = [];
            valObj.IsNull = true;
            _situation = Utils.getValue(_eL, "eSituation.08");
            if (_situation.IsNull != true) {
                _val.push(_situation.ValueArray[0].val);
                valObj.IsNull = false;
                _text.push(_situation.ValueArray[0].text);
            }
            else {
                if (TheCall.HasPatient == false) {
                    _val.push(NOTAPPLICABLE);
                    _text.push("Not Applicable")
                    valObj.NV = true;
                }
                else if (TheCall.HasTreatment == false) {
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
            eSituation["eSituation.08"] = valObj;
            delete valObj;

            //////////////////////eSituation.09

            var _situation = [];
            var _val = [];
            var valObj = {};
            var _text = [];
            valObj.IsNull = true;

            _situation = Utils.getValue(_eL, "eSituation.09");
            if (_situation.IsNull != true) {
                _val.push(_situation.ValueArray[0].val)
                valObj.IsNull = false;
                _text.push(_situation.ValueArray[0].text);
            }
            else {
                if (TheCall.HasPatient == false) {
                    _val.push(NOTAPPLICABLE);
                    _text.push("Not Applicable")
                    valObj.NV = true;
                }
                else if (TheCall.HasTreatment == false) {
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
            eSituation["eSituation.09"] = valObj;
            delete valObj;

            //////////////////////eSituation.10
            var _situation = [];
            var _val = [];
            var _text = [];
            var valObj = {};
            var _text = [];
            valObj.IsNull = true;
            _situation = Utils.getValue(_eL, "eSituation.10");
            if (_situation.IsNull != true) {
                for (var i = 0; i < _situation.ValueArray.length; i++) {
                    valObj.IsNull = false;
                    if ((_situation.ValueArray[i].HasValue == true) && (_val.indexOf(_situation.ValueArray[i].val) == -1)) {
                        _val.push(_situation.ValueArray[i].val);
                        _text.push(_situation.ValueArray[i].text);
                    }
                }
            }
            else {
                if (TheCall.HasPatient == false) {
                    _val.push(NOTAPPLICABLE);
                    _text.push("Not Applicable")
                    valObj.NV = true;
                }
                else if (TheCall.HasTreatment == false) {
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
            eSituation["eSituation.10"] = valObj;
            delete valObj;

            //////////////////////eSituation.11
            var _situation = [];
            var _val = [];
            var _text = [];
            var valObj = {};
            valObj.IsNull = true;
            _situation = Utils.getValue(_eL, "eSituation.11");
            if (_situation.IsNull != true) {
                _val.push(_situation.ValueArray[0].val);
                valObj.IsNull = false;
                _text.push(_situation.ValueArray[0].text);
            }
            else {
                if (TheCall.HasPatient == false) {
                    _val.push(NOTAPPLICABLE);
                    _text.push("Not Applicable")
                    valObj.NV = true;
                }
                else if (TheCall.HasTreatment == false) {
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
            eSituation["eSituation.11"] = valObj;
            delete valObj;


            //////////////////////eSituation.12
            var _situation = [];
            var _val = [];
            var _text = [];
            var valObj = {};
            valObj.IsNull = true;
            _situation = Utils.getValue(_eL, "eSituation.12");
            if (_situation.IsNull != true) {
                for (var i = 0; i < _situation.ValueArray.length; i++) {
                    valObj.IsNull = false;
                    if ((_situation.ValueArray[i].HasValue == true) && (_val.indexOf(_situation.ValueArray[i].val) == -1)) {
                        _val.push(_situation.ValueArray[i].val);
                        _text.push(_situation.ValueArray[i].text);
                    }
                }
            }
            else {
                if (TheCall.HasPatient == false) {
                    _val.push(NOTAPPLICABLE);
                    _text.push("Not Applicable")
                    valObj.NV = true;
                }
                else if (TheCall.HasTreatment == false) {
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
            eSituation["eSituation.12"] = valObj;
            delete valObj;

            //////////////////////eSituation.13
            var _situation = [];
            var _val = [];
            var _text = [];
            var valObj = {};
            valObj.IsNull = true;
            _situation = Utils.getValue(_eL, "eSituation.13");
            if (_situation.IsNull != true) {

                _val.push(_situation.ValueArray[0].val);
                valObj.IsNull = false;
                _text.push(_situation.ValueArray[0].text);
            }
            else {
                if (TheCall.HasPatient == false) {
                    _val.push(NOTAPPLICABLE);
                    _text.push("Not Applicable")
                    valObj.NV = true;
                }
                else if (TheCall.HasTreatment == false) {
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
            eSituation["eSituation.13"] = valObj;
            delete valObj;


            ///////////////eSituation.17
            var _situation = [];
            var _val = [];
            var _text = []
            var valObj = {};
            valObj.IsNull = true;
            _situation = Utils.getValue(_eL, "eSituation.17");
            if (_situation.IsNull != true) {
                for (var i = 0; i < _situation.ValueArray.length; i++) {
                    valObj.IsNull = false;
                    if ((_situation.ValueArray[i].HasValue == true) && (_val.indexOf(_situation.ValueArray[i].val) == -1)) {
                        _val.push(_situation.ValueArray[i]);
                        _text.push(_situation.ValueArray[i].text);
                    };
                }
            }
            else {
                if (TheCall.HasPatient == false) {
                    _val.push(NOTAPPLICABLE);
                    _text.push("Not Applicable")
                    valObj.NV = true;
                }
                else if (TheCall.HasTreatment == false) {
                    _val.push(NOTAPPLICABLE);
                    _text.push("Not Applicable")
                    valObj.NV = true;
                }
                else if (Utils.ReportingRequired("eSituation.14") == true) {
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
            eSituation["eSituation.17"] = valObj;
            delete valObj;
        };
        eSituation.Errors = ErrorList;
        return eSituation;
    };

    var seteSituationNull = function (TheCall) {

        var _situation = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;

        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable")
        valObj.NV = true;
        valObj.vSet = _val.slice(0);
        eSituation["eSituation.01"] = valObj;
        eSituation["eSituation.02"] = valObj;
        eSituation["eSituation.07"] = valObj;
        eSituation["eSituation.08"] = valObj;
        eSituation["eSituation.09"] = valObj;
        eSituation["eSituation.10"] = valObj;
        eSituation["eSituation.11"] = valObj;
        eSituation["eSituation.12"] = valObj;
        eSituation["eSituation.13"] = valObj;
        delete valObj;


        eSituation.PatientComplaintGroup = setPatientComplainGroupNull;
        eSituation.WorkRelatedGroup = setWorkRelatedGroupNull;
    }
    return eSituation;

};

var setPatientComplainGroupNull = function (TheCall) {

    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (TheCall.HasPatient == false) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable")
        valObj.NV = true;
    }
    else if (Utils.ReportingRequired("eSituation.03") == true) {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded")
        valObj.NV = true;
    }
    else {
        _val.push(NOTREPORTING);
        _text.push("Not Reporting")
        valObj.NV = true;
    };
    valObj.vSet = _val.slice(0);
    PCGroup["eSituation.03"] = valObj;
    delete valObj;
    //
    var PCGroup = new Object();
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (TheCall.HasPatient == false) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable")
        valObj.NV = true;
    }
    else if (Utils.ReportingRequired("eSituation.03") == true) {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded")
        valObj.NV = true;
    }
    else {
        _val.push(NOTREPORTING);
        _text.push("Not Reporting")
        valObj.NV = true;
    };
    valObj.vSet = _val.slice(0);
    PCGroup["eSituation.04"] = valObj;
    delete valObj;

    //
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (TheCall.HasPatient == false) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable")
        valObj.NV = true;
    }
    else if (Utils.ReportingRequired("eSituation.03") == true) {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded")
        valObj.NV = true;
    }
    else {
        _val.push(NOTREPORTING);
        _text.push("Not Reporting")
        valObj.NV = true;
    };
    valObj.vSet = _val.slice(0);
    PCGroup["eSituation.05"] = valObj;
    delete valObj;

    //
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (TheCall.HasPatient == false) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable")
        valObj.NV = true;
    }
    else if (Utils.ReportingRequired("eSituation.03") == true) {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded")
        valObj.NV = true;
    }
    else {
        _val.push(NOTREPORTING);
        _text.push("Not Reporting")
        valObj.NV = true;
    };
    valObj.vSet = _val.slice(0);
    PCGroup["eSituation.06"] = valObj;
    delete valObj;

    return PCGroup;
};

var setWorkRelatedGroupNull = function (TheCall) {

    ////////////////////
    var WRG = new Object();
    var _val = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;
    if (TheCall.HasPatient == false) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable")
        valObj.NV = true;
    }
    else if (Utils.ReportingRequired("eSituation.14") == true) {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded")
        valObj.NV = true;
    }
    else {
        _val.push(NOTREPORTING);
        _text.push("Not Reporting")
        valObj.NV = true;
    };
    valObj.vSet = _val.slice(0);
    WRG["eSituation.14"] = valObj;
    delete valObj;

    return WRG;
};



