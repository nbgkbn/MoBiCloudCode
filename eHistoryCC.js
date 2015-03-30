var Utils = require('cloud/UtilitiesCC.js');
var NOTRECORDED = '7701003';
var NOTREPORTING = '7701005';
var NOTAPPLICABLE = '7701001';
exports.seteHistory = function (TheCall) {
    //1:1
    var eHistory = new Object();
    var pHistory = new Object();
    pHistory = TheCall.pHistory;

    if (pHistory.HasDataSet == false) {
        eHistory = seteHistoryNull(TheCall)
        return eHistory;
    }
    if (typeof pHistory.attributes.elements == 'undefined') {
        eHistory = seteHistoryNull(TheCall)
        return eHistory;
    };
    var _eL = [];
    _eL = pHistory.attributes.elements;

    if (_eL.length == 0) {
        eHistory = seteHistoryNull(TheCall)
    }
    else {

        ////////eHistory.01
        var _history = [];
        var _val = [];
        var _text = [];
        var valObj = {};
        valObj.IsNull = true;
        _history = Utils.getValue(_eL, "eHistory.01");
        if (_history.IsNull != true) {
            for (var i = 0; i < _history.ValueArray.length; i++) {
                if ((_history.ValueArray[i].HasValue == true) && (_val.indexOf(_history.ValueArray[i].val) == -1)) {
                    _val.push(_history.ValueArray[i].val);
                    _text.push(_history.ValueArray[0].text);
                    valObj.IsNull = false;
                }
            }
        }
        else {
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
        };
        valObj.vSet = _val.slice(0);
        valObj.CodeText = _text.slice(0);
        eHistory["eHistory.01"] = valObj;
        delete valObj;


        ////////eHistory.05
        var _history = [];
        var _val = [];
        var _text = [];
        var valObj = {};
        valObj.IsNull = true;
        _history = Utils.getValue(_eL, "eHistory.05");
        if (_history.IsNull != true) {

            for (var i = 0; i < _history.ValueArray.length; i++) {
                if ((_history.ValueArray[i].HasValue == true) && (_val.indexOf(_history.ValueArray[i].val) == -1)) {
                    _val.push(_history.ValueArray[i].val);
                    _text.push(_history.ValueArray[i].text);
                    valObj.IsNull = false;
                }
            }
        }
        else {
            if (TheCall.HasPatient == false) {
                _val.push(NOTAPPLICABLE);
                _text.push("Not Applicable");
                valObj.NV = true;
            }
            else if (Utils.ReportingRequired("eHistory.05") == true) {
                _val.push(NOTRECORDED);
                _text.push("Not Recorded");
                valObj.NV = true;
            }
            else {
                _val.push(NOTREPORTING);
                _text.push("Not Reporting");
                valObj.NV = true;
            }
        };
        valObj.CodeText = _text.slice(0);
        valObj.vSet = _val.slice(0);
        eHistory["eHistory.05"] = valObj;
        delete valObj;


        ////////eHistory.06
        var _history = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        valObj.NV = false;
        _history = Utils.getValue(_eL, "eHistory.06");
        if (_history.HasPN == true) {
            if (_history.pn == "Refused") {
                _val.push("8801019");
                _text.push("Refused");
                valObj.PN = true;
            }
            else if (_history.pn == "UnabletoComplete") {
                _val.push("8801023")
                _text.push("Unable to Complete");
                valObj.PN = true;
            }
            else if (_history.pn == "No Known Drug Allergy") {
                _val.push("8801023")
                _text.push("No Known Drug Allergy");
                valObj.PN = true;
            };
        }

        if (_history.IsNull == true) {
            if (_history.HasPN != true) {
                if (TheCall.IsCancelled == true) {
                    _val.push(NOTAPPLICABLE);
                    _text.push("Not Applicable");
                    valObj.NV = true;
                }
                else if (Utils.ReportingRequired("eHistory.06") == true) {
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
            _val.push(_history.ValueArray[0].val);
            valObj.IsNull = false;
        };
        valObj.CodeText = _text.slice(0);
        valObj.vSet = _val.slice(0);
        eHistory["eHistory.06"] = valObj;
        delete valObj;



        ////////eHistory.07
        var _history = [];
        var _val = [];
        var _text = [];
        var valObj = {};
        valObj.IsNull = true;

        _history = Utils.getValue(_eL, "eHistory.07");
        if (_history.IsNull != true) {
            for (var i = 0; i < _history.ValueArray.length; i++) {
                if ((_history.ValueArray[i].HasValue == true) && (_val.indexOf(_history.ValueArray[i].val) == -1)) {
                    _val.push(_history.ValueArray[i].val);
                    _text.push(_history.ValueArray[i].text);
                    valObj.IsNull = false;
                }
            };
            valObj.CodeText = _text.slice(0);
            valObj.vSet = _val.slice(0);
            eHistory["eHistory.07"] = valObj;
            delete valObj;
        };


        ////////eHistory.08
        var _history = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        valObj.NV = false;
        _history = Utils.getValue(_eL, "eHistory.08");
        if (_history.HasPN == true) {
            if (_history.pn == "Refused") {
                _val.push("8801019");
                _text.push("Refused");
                valObj.PN = true;
            }
            else if (_history.pn == "Unable to Complete") {
                _val.push("8801023");
                valObj.PN = true;
                _text.push("Unable to Complete");
            }
            else if (_history.pn == "None Reported") {
                _val.push("8801015");
                valObj.PN = true;
                _text.push("None Reported");
            }
            else if (_history.pn == "Unresponsive") {
                _text.push("Unresponsive");
                valObj.PN = true;
                _val.push("8801021")
            }
        }

        if (_history.IsNull == true) {
            if (_history.HasPN != true) {
                if (TheCall.IsCancelled == true) {
                    _val.push(NOTAPPLICABLE);
                    _text.push("Not Applicable");
                    valObj.NV = true;
                }
                else if (Utils.ReportingRequired("eHistory.08") == true) {
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
            _val.push(_history.ValueArray[0].val);
            valObj.IsNull = false;
        };
        valObj.CodeText = _text.slice(0);
        valObj.vSet = _val.slice(0);
        eHistory["eHistory.08"] = valObj;
        delete valObj;

        ////////eHistory.09
        var _history = [];
        var _val = [];
        var _text = [];
        var valObj = {};
        valObj.IsNull = true;
        _history = Utils.getValue(_eL, "eHistory.09");
        if (_history.IsNull != true) {
            for (var i = 0; i < _history.ValueArray.length; i++) {
                if ((_history.ValueArray[i].HasValue == true) && (_val.indexOf(_history.ValueArray[i].val) == -1)) {
                    _val.push(_history.ValueArray[i].val);
                    _text.push(_history.ValueArray[i].text);
                    valObj.IsNull = false;
                }
            };
            valObj.CodeText = _text.slice(0);
            valObj.vSet = _val.slice(0);
            eHistory["eHistory.09"] = valObj;
            delete valObj;
        };


        ////////eHistory.16
        var _history = [];
        var _val = [];
        var _text = [];
        var valObj = {};
        valObj.IsNull = true;
        if ((eHistory.IsValid == true) && (TheCall["HasPatient"] == true)) {
            _history = Utils.getValue(_eL, "eHistory.16");
            if (_history.IsNull != true) {
                _val.push(_history.ValueArray[0].val)
                valObj.IsNull = false;
                _text.push(_history.ValueArray[0].text);

                valObj.CodeText = _text.slice(0);
                valObj.vSet = _val.slice(0);
                eHistory["eHistory.16"] = valObj;
                delete valObj;
            }
        };



        ////////eHistory.17
        var _history = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        valObj.NV = false;
        _history = Utils.getValue(_eL, "eHistory.17");
        if (_history.HasPN == true) {
            if (_history.pn == "Refused") {
                _val.push("8801019")
                valObj.PN = true;
                _text.push("Refused");
            }
            else if (_history.pn == "Unable to Complete") {
                valObj.PN = true;
                _val.push("8801023")
                _text.push("Unable to Complete");
            }
            else if (_history.pn == "None Reported") {
                _val.push("8801015")
                _text.push("None Reported");
                valObj.PN = true;
            }
            else if (_history.pn == "Unresponsive") {
                _val.push("8801021")
                valObj.PN = true;
                _text.push("Unresponsive");
            };
        }

        if (_history.IsNull == true) {
            if (_history.HasPN != true) {
                if (TheCall.IsCancelled == true) {
                    _val.push(NOTAPPLICABLE);
                    _text.push("Not Applicable");
                    valObj.NV = true;
                }
                else if (Utils.ReportingRequired("eHistory.17") == true) {
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
            _val.push(_history.ValueArray[0].val);
            _text.push(_history.ValueArray[0].text);
            valObj.IsNull = false;
        };
        valObj.CodeText = _text.slice(0);
        valObj.vSet = _val.slice(0);
        eHistory["eHistory.17"] = valObj;
        delete valObj;

        ////////eHistory.18
        var _history = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        valObj.NV = false;
        _history = Utils.getValue(_eL, "eHistory.18");
        if (_history.IsNull == false) {
            valObj.IsNull = false;
            if (_history.HasPN == true) {
                if (_history.pn == "Refused") {
                    val.push("8801019");
                    _text.push("Refused");
                    valObj.PN = true;
                }
                else {
                    (_history.pn == "Unable to Complete")
                    _val.push("8801023")
                    _text.push("Unable to Complete");
                    valObj.PN = true;
                }
            };
            _val.push(_history.ValueArray[0].val);
            _text.push(_history.ValueArray[0].text);

            valObj.CodeText = _text.slice(0);
            valObj.vSet = _val.slice(0);
            eHistory["eHistory.17"] = valObj;
            delete valObj;
        };

        ////////eHistory.19
        var _history = [];
        var _val = [];
        var _text = [];
        var valObj = {};
        valObj.IsNull = true;
        _history = Utils.getValue(_eL, "eHistory.19");
        if (_history.IsNull != true) {
            _val.push(_history.ValueArray[0].val)
            valObj.IsNull = false;
            valObj.vSet = _val.slice(0);
            _val.push(_history.ValueArray[0].val);

            valObj.CodeText = _text.slice(0);
            _text.push(_history.ValueArray[0].text);
            eHistory["eHistory.19"] = valObj;
            delete valObj;
        };

        //////////////////////////////////////////////////////////

        if (typeof pHistory.attributes.sections != 'undefined') {
            PractitionerGroupArray = [];
            _sectionIndex = Utils.getSectionIndex(pHistory, "eHistory.PractitionerGroup");
            if (_sectionIndex[0] != -1) {
                for (var x = 0; x < _sectionIndex.length; x++) {
                    var PractitionerGroup = new Object();
                    var _pGRP = [];
                    _pGRP = pHistory.attributes.sections[_sectionIndex[x]].attributes.elements;

                    /////////eHistory.02
                    var _history = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;

                    _history = Utils.getValue(_pGRP, "eHistory.02");
                    if (_history.IsNull != true) {
                        _val.push(_history.ValueArray[0].val)
                        valObj.IsNull = false;


                        valObj.vSet = _val.slice(0);
                        PractitionerGroup["eHistory.02"] = valObj;
                        delete valObj;
                    };

                    /////////eHistory.03
                    var _history = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;

                    _history = Utils.getValue(_pGRP, "eHistory.03");

                    if (_history.IsNull != true) {
                        _val.push(_history.ValueArray[0].val)
                        valObj.IsNull = false;

                        valObj.vSet = _val.slice(0);
                        PractitionerGroup["eHistory.03"] = valObj;
                        delete valObj;
                    };

                    /////////eHistory.04
                    var _history = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;

                    _history = Utils.getValue(_pGRP, "eHistory.04");
                    if (_history.IsNull != true) {
                        _val.push(_history.ValueArray[0].val)
                        valObj.IsNull = false;
                        valObj.vSet = _val.slice(0);
                        PractitionerGroup["eHistory.04"] = valObj;
                        delete valObj;
                    };
                    PractitionerGroupArray.push(PractitionerGroup)
                }
                eHistory["PractitionerGroup"] = PractitionerGroupArray;
            }

            ////////////////////////////////                    
            ImmunGroupArray = [];
            _sI = Utils.getSectionIndex(pHistory, "eHistory.ImmunizationsGroup");

            if (_sI[0] != -1) {
                for (var x = 0; x < _sI.length; x++) {
                    var ImmunizationsGroup = new Object();
                    var _eIMG = [];
                    var _eIMG = pHistory.attributes.sections[_sI[x]].attributes.elements;
                    /////////eHistory.10
                    var _history = [];
                    var _val = [];
                    var _text = [];
                    var valObj = {};
                    valObj.IsNull = true;

                    _history = Utils.getValue(_eIMG, "eHistory.10");
                    if (_history.IsNull != true) {
                        _val.push(_history.ValueArray[0].val)
                        _text.push(_history.ValueArray[0].text);

                        valObj.IsNull = false;
                    };
                    valObj.CodeText = _text.slice(0);
                    valObj.vSet = _val.slice(0);
                    ImmunizationsGroup["eHistory.10"] = valObj;
                    delete valObj;


                    /////////eHistory.11
                    var _history = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _history = Utils.getValue(_eIMG, "eHistory.11");
                    if (_history.IsNull != true) {
                        _val.push(_history.ValueArray[0].val)
                        valObj.IsNull = false;
                    };

                    valObj.vSet = _val.slice(0);
                    ImmunizationsGroup["eHistory.11"] = valObj;
                    delete valObj;

                    ImmunGroupArray.push(ImmunizationsGroup)
                }
                eHistory.ImmunizationsGroup = ImmunGroupArray;
            }

            CurrentMedsGroup = new Object();
            eHistory.CurrentMedsGroup = seteCurrentMedsNull(TheCall)
        }
        else {
            var _sectionIndex = [];
            _sectionIndex = Utils.getSectionIndex(pHistory, "eHistory.CurrentMedsGroup");
            if (_sectionIndex[0] == -1) {
                CurrentMedsGroup = new Object();
                eHistory.CurrentMedsGroup = seteCurrentMedsNull(TheCall)
            }
            else {
                var CurrentMedsGroupArray = [];
                for (var x = 0; x < _sectionIndex.length; x++) {
                    var _eCMG = [];
                    var _eCMG = pHistory.attributes.sections[_sectionIndex[x]].attributes.elements;
                    CurrentMedsGroup = new Object();

                    ////////eHistory.12
                    var _history = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    valObj.NV = false;
                    _history = Utils.getValue(_PNG, "eHistory.12");
                    if (_history.HasPN == true) {
                        if (_history.pn == "Refused") {
                            _val.push("8801019");
                            _text.push("Refused");
                            valObj.PN = true;
                        }
                        else if (_history.pn == "Unable to Complete") {
                            _val.push("8801023")
                            _text.push("Unable to Complete");
                            valObj.PN = true;
                        }
                        else if (_history.pn == "None Reported") {
                            _val.push("8801015");
                            valObj.PN = true;
                            _text.push("None Reported");
                        }
                        else if (_history.pn == "Unresponsive") {
                            _val.push("8801021");
                            valObj.PN = true;
                            _text.push("Unresponsive");
                        }
                    }

                    if (_history.IsNull == true) {
                        if (_history.HasPN != true) {
                            if (TheCall.IsCancelled == true) {
                                _val.push(NOTAPPLICABLE);
                                _text.push("Not Applicable");
                                valObj.NV = true;
                            }
                            else if (Utils.ReportingRequired("eHistory.12") == true) {
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
                        _val.push(_history.ValueArray[0].val);
                        valObj.IsNull = false;
                    };
                    valObj.vSet = _val.slice(0);
                    eHistory["eHistory.12"] = valObj;
                    delete valObj;


                    ////////eHistory.13
                    var _history = [];
                    var _val = [];
                    var _text = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _history = Utils.getValue(_eCMG, "eHistory.13");
                    if (_history.IsNull != true) {
                        _val.push(_history.ValueArray[0].val)
                        valObj.IsNull = false;

                        valObj.vSet = _val.slice(0);
                        CurrentMedsGroup["eHistory.13"] = valObj;
                        delete valObj;
                    };

                    ////////eHistory.14
                    var _history = [];
                    var _val = [];
                    var _text = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _history = Utils.getValue(_eCMG, "eHistory.14");
                    if (_history.IsNull != true) {
                        _val.push(_history.ValueArray[0].val);
                        _text.push(_history.ValueArray[0].text);

                        valObj.CodeText = _text.slice(0);
                        valObj.IsNull = false;
                        valObj.vSet = _val.slice(0);
                        CurrentMedsGroup["eHistory.14"] = valObj;
                        delete valObj;
                    };

                    ////////eHistory.15
                    var _history = [];
                    var _val = [];
                    var _text = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _history = Utils.getValue(_eCMG, "eHistory.15");
                    if (_history.IsNull != true) {
                        _val.push(_history.ValueArray[0].val)
                        valObj.IsNull = false;
                        _text.push(_history.ValueArray[0].text);

                        valObj.CodeText = _text.slice(0);
                        valObj.vSet = _val.slice(0);
                        CurrentMedsGroup["eHistory.15"] = valObj;
                        delete valObj;
                    };
                    CurrentMedsGroupArray.push(CurrentMedsGroup)
                };
                eHistory.CurrentMedsGroup = CurrentMedsGroupArray
            }
        }
    };
    return eHistory;
};

var seteHistoryNull = function (TheCall) {
    var eHistory = new Object();
    var _val = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;
    if (TheCall.HasPatient == false) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable");
        valObj.NV = true;
    }
    else {
        _val.push(NOTRECORDED);
        _text = "Not Recorded"
        valObj.NV = true;
    };
    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    eHistory["eHistory.01"] = valObj;
    eHistory["eHistory.17"] = valObj;
    eHistory["eHistory.01"] = valObj;
    eHistory["eHistory.17"] = valObj;
    delete valObj;



    ////////eHistory.05

    var _val = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;
    if (TheCall.HasPatient == false) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable");
        valObj.NV = true;
    }
    else if (Utils.ReportingRequired("eHistory.05") == true) {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded");
        valObj.NV = true;
    }
    else {
        _val.push(NOTREPORTING);
        _text.push("Not Reporting");
        valObj.NV = true;
    };

    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    eHistory["eHistory.05"] = valObj;
    delete valObj;

    ////////eHistory.06

    var _val = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;
    if (TheCall.HasPatient == false) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Recorded");
        valObj.NV = true;
    }
    else if (Utils.ReportingRequired("eHistory.06") == true) {
        _val.push(NOTRECORDED);
        _text.push("Not Applicable");
        valObj.NV = true;
    }
    else {
        _val.push(NOTREPORTING);
        valObj.NV = true;
        _text.push("Not Reporting");
    };

    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    eHistory["eHistory.06"] = valObj;
    delete valObj;

    ////////eHistory.05

    var _val = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;
    if (TheCall.HasPatient == false) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable");
        valObj.NV = true;
    }
    else if (Utils.ReportingRequired("eHistory.08") == true) {
        _val.push(NOTRECORDED);
        _text.push("Not Applicable");
        valObj.NV = true;
    }
    else {
        _val.push(NOTREPORTING);
        _text.push("Not Reporting");
        valObj.NV = true;
    };

    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    eHistory["eHistory.08"] = valObj;
    delete valObj;

    eHistory.CurrentMedsGroup = seteCurrentMedsNull(TheCall)
};

var seteCurrentMedsNull = function (TheCall) {
    ////////eHistory.05
    var CM = new Object();
    var _val = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;
    if (TheCall.HasPatient == false) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable");
        valObj.NV = true;
    }
    else if (Utils.ReportingRequired("eHistory.12") == true) {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded");
        valObj.NV = true;
    }
    else {
        _val.push(NOTREPORTING);
        _text.push("Not Reporting");
        valObj.NV = true;
    };

    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    CM["eHistory.12"] = valObj;
    delete valObj;

    return CM;
}