var Utils = require('cloud/UtilitiesCC.js');

var NOTRECORDED = '7701003';
var NOTREPORTING = '7701005';
var NOTAPPLICABLE = '7701001';
exports.seteArrest = function (TheCall) {
    var eArrest = new Object();
    var ErrorList = [];
    var pArrest = TheCall.pArrest;
    if (pArrest.HasDataSet == false) {
        eArrest.ErrorList = Errors;
        eArrest = this.seteArrestNull()
    };

    /////////////eArrest.01
    var _hasCardiac = false;
    var _hasTreatment = false;
    var _resuctAttempted = false;
    var _cprProvided = false;
    var _aedProvided = false;
    if (typeof pArrest.attributes != 'undefined') {
        _eL = [];
        _eL = pArrest.attributes.elements;
        if (_eL.length == 0) {
            eArrest.ErrorList = Errors;
            eArrest = this.seteArrestNull()
        }
        else {
            var _arrest = [];
            var _val = [];
            var _text = [];
            var valObj = {};
            valObj.IsNull = true;

            /////////////eArrest.01
            _arrest = Utils.getValue(_eL, "eArrest.01");
            if (_arrest.IsNull != true) {
                if (_arrest.ValueArray[0].val == '3001001') {
                    _hasCardiac = false;
                }
                else {
                    _hasCardiac = true;
                }
                _val.push(_arrest.ValueArray[0].val);
                valObj.IsNull = false;
                _text.push(_arrest.ValueArray[0].text);
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

            valObj.CodeText = _text.slice(0);
            valObj.vSet = _val.slice(0);
            eArrest["eArrest.01"] = valObj;
            delete valObj;

            /////////////eArrest.02
            var _arrest = [];
            var _text = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;

            _arrest = Utils.getValue(_eL, "eArrest.02");
            if (_arrest.IsNull != true) {
                _val.push(_arrest.ValueArray[0].val);
                valObj.IsNull = false
                _text.push(_arrest.ValueArray[0].text);
            }
            else {
                if (_hasCardiac == false) {
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
            valObj.CodeText = _text.slice(0);
            valObj.vSet = _val.slice(0);
            eArrest["eArrest.02"] = valObj;
            delete valObj;


            /////////////eArrest.03
            var _arrest = [];
            var _val = [];
            var _text = [];
            var valObj = {};
            valObj.IsNull = true;
            _arrest = Utils.getValue(_eL, "eArrest.03");
            if (_arrest.IsNull != true) {
                //Need a List of Attempted Codes for Resuscitation rules
                var _noResuscitation = ["3003007", "3003009", "3003011"];
                _hasTreatment = false;
                valObj.IsNull = false;
                for (var i = 0; i < _arrest.ValueArray.length; i++) {
                    if (_noResuscitation.indexOf(_arrest.ValueArray[i].val) == -1) {
                        //If not in the List, must be they attempted resusc.
                        _resuctAttempted = true;
                    };

                    if ((_resuctAttempted == true) && (_noResuscitation.indexOf(_arrest.ValueArray[i].val) != -1)) {
                        Error.Level = "Rules";
                        Error.Type = "Conflict";
                        Error.Att = "eArrest.03"
                        Error.Text = " Both Attempt and Non Attempt to Resuscitate selected"
                        ErrorList.push(Error)
                    }
                    if (_arrest.ValueArray[i].HasValue)
                        if ((_arrest.ValueArray[i].HasValue == true) && (_val.indexOf(_arrest.ValueArray[i].val) == -1)) {
                            _val.push(_arrest.ValueArray[i].val);
                            _text.push(_arrest.ValueArray[i].text);
                        }
                }
            }
            else {
                if (_hasCardiac == false) {
                    _val.push(NOTAPPLICABLE);
                    _text.push("Not Applicable");
                    valObj.NV = true;

                }
                else if (_resuctAttempted == false) {
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

            valObj.CodeText = _text.slice(0);
            valObj.vSet = _val.slice(0);
            eArrest["eArrest.03"] = valObj;
            delete valObj;


            /////////////eArrest.04
            var _arrest = [];
            var _val = [];
            var _text = [];
            var valObj = {};
            valObj.IsNull = true;
            _arrest = Utils.getValue(_eL, "eArrest.04");
            if (_arrest.IsNull != true) {
                for (var i = 0; i < _arrest.ValueArray.length; i++) {
                    valObj.IsNull = false;
                    if ((_arrest.ValueArray[i].HasValue == true) && (_val.indexOf(_arrest.ValueArray[i].val) == -1)) {
                        _val.push(_arrest.ValueArray[i].val);
                        _text.push(_arrest.ValueArray[i].text);
                    }
                }
            }
            else {
                if (_hasCardiac == false) {
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

            valObj.CodeText = _text.slice(0);
            valObj.vSet = _val.slice(0);
            eArrest["eArrest.04"] = valObj;
            delete valObj;

            /////////////eArrest.05
            var _arrest = [];
            var _val = [];
            var _text = [];
            var valObj = {};
            valObj.IsNull = true;
            _arrest = Utils.getValue(_eL, "eArrest.05");
            if (_arrest.IsNull != true) {
                valObj.IsNull = false
                _cprProvided = true;
                _val.push(_arrest.ValueArray[0].val);
                _text.push(_arrest.ValueArray[0].text);
            }
            else {
                if (_hasCardiac == false) {
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
            valObj.CodeText = _text.slice(0);
            valObj.vSet = _val.slice(0);
            eArrest["eArrest.05"] = valObj;
            delete valObj;


            /////////////eArrest.06
            var _arrest = [];
            var _val = [];
            var _text = [];
            var valObj = {};
            valObj.IsNull = true;
            _arrest = Utils.getValue(_eL, "eArrest.06");
            if (_arrest.IsNull != true) {
                _cprProvided = true;
                for (var i = 0; i < _arrest.ValueArray.length; i++) {
                    if ((_arrest.ValueArray[i].HasValue == true) && (_val.indexOf(_arrest.ValueArray[i].val) == -1)) {
                        _val.push(_arrest.ValueArray[i].val);
                        _text.push(_arrest.ValueArray[i].text);

                    }
                };
                valObj.IsNull = false;
                valObj.CodeText = _text.slice(0);
                valObj.vSet = _val.slice(0);
                eArrest["eArrest.06"] = valObj;
                delete valObj;
            };

            /////////////eArrest.07
            var _arrest = [];
            var _val = [];
            var _text = [];
            var valObj = {};
            valObj.IsNull = true;
            _arrest = Utils.getValue(_eL, "eArrest.07");
            if (_arrest.IsNull != true) {
                _aedProvided = true;
                _val.push(_arrest.ValueArray[0].val);
                valObj.IsNull = false
                _text.push(_arrest.ValueArray[0].text);
            }
            else {
                if (_hasCardiac == false) {
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
            valObj.CodeText = _text.slice(0);
            valObj.vSet = _val.slice(0);
            eArrest["eArrest.07"] = valObj;
            delete valObj;


            /////////////eArrest.08
            var _arrest = [];
            var _val = [];
            var _text = [];
            var valObj = {};
            valObj.IsNull = true;
            _arrest = Utils.getValue(_eL, "eArrest.08");
            if (_arrest.IsNull != true) {
                valObj.IsNull = false;
                for (var i = 0; i < _arrest.ValueArray.length; i++) {
                    if ((_arrest.ValueArray[i].HasValue == true) && (_val.indexOf(_arrest.ValueArray[i].val) == -1)) {
                        _val.push(_arrest.ValueArray[i].val);
                        _text.push(_arrest.ValueArray[i].text);
                    }
                };

            }

            else {
                if (_hasCardiac == false) {
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
            valObj.CodeText = _text.slice(0);
            valObj.vSet = _val.slice(0);
            eArrest["eArrest.08"] = valObj;
            delete valObj;


            /////////////eArrest.09
            var _arrest = [];
            var _val = [];
            var _text = [];
            var valObj = {};
            valObj.IsNull = true;
            _arrest = Utils.getValue(_eL, "eArrest.09");
            if (_arrest.IsNull != true) {
                for (var i = 0; i < _arrest.ValueArray.length; i++) {
                    valObj.IsNull = false;
                    if ((_arrest.ValueArray[i].HasValue == true) && (_val.indexOf(_arrest.ValueArray[i].val) == -1)) {
                        _val.push(_arrest.ValueArray[i].val);
                        _text.push(_arrest.ValueArray[i].text);
                    }
                }
            }
            else {
                if (_cprProvided == false) {
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

            valObj.CodeText = _text.slice(0);
            valObj.vSet = _val.slice(0);
            eArrest["eArrest.09"] = valObj;
            delete valObj;



            /////////////eArrest.10
            var _arrest = [];
            var _val = [];
            var _text = [];
            var valObj = {};
            valObj.IsNull = true;

            _arrest = Utils.getValue(_eL, "eArrest.10");
            if (_arrest.IsNull != true) {
                _val.push(_arrest.ValueArray[0].val);
                valObj.IsNull = false
                _text.push(_arrest.ValueArray[0].text);
            }
            else {
                if (_hasCardiac == false) {
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

            valObj.CodeText = _text.slice(0);
            valObj.vSet = _val.slice(0);
            eArrest["eArrest.10"] = valObj;
            delete valObj;

            /////////////eArrest.11
            var _arrest = [];
            var _val = [];
            var _text = [];
            var valObj = {};
            valObj.IsNull = true;
            _arrest = Utils.getValue(_eL, "eArrest.11");
            if (_arrest.IsNull != true) {
                _val.push(_arrest.ValueArray[0].val);
                valObj.IsNull = false
                _text.push(_arrest.ValueArray[0].text);
            }
            else {
                if (_hasCardiac == false) {
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
            valObj.CodeText = _text.slice(0);
            valObj.vSet = _val.slice(0);
            eArrest["eArrest.11"] = valObj;
            delete valObj;


            /////////////eArrest.12
            var _arrest = [];
            var _val = [];
            var _text = [];
            var valObj = {};
            valObj.IsNull = true;
            _arrest = Utils.getValue(_eL, "eArrest.12");
            if (_arrest.IsNull != true) {
                for (var i = 0; i < _arrest.ValueArray.length; i++) {
                    if ((_arrest.ValueArray[i].HasValue == true) && (_val.indexOf(_arrest.ValueArray[i].val) == -1)) {
                        _val.push(_arrest.ValueArray[i].val);
                        _text.push(_arrest.ValueArray[i].text);
                    };
                    valObj.CodeText = _text.slice(0);
                    valObj.IsNull = false;
                }
            }
            else {
                if (_hasCardiac == false) {
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
            eArrest["eArrest.12"] = valObj;
            delete valObj;

            /////////////eArrest.13
            var _arrest = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _arrest = Utils.getValue(_eL, "eArrest.13");
            if (_arrest.IsNull != true) {
                _val.push(_arrest.ValueArray[0].val);
                valObj.IsNull = false

                valObj.vSet = _val.slice(0);
                eArrest["eArrest.13"] = valObj;
                delete valObj;
            };

            /////////////eArrest.14
            var _arrest = [];
            var _val = [];
            var _text = [];
            var valObj = {};
            valObj.IsNull = true;
            _arrest = Utils.getValue(_eL, "eArrest.14");
            if (_arrest.IsNull != true) {
                _val.push(_arrest.ValueArray[0].val);
                valObj.IsNull = false
            }
            else {
                if (_hasCardiac == false) {
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
            valObj.CodeText = _text.slice(0);
            valObj.vSet = _val.slice(0);
            eArrest["eArrest.14"] = valObj;
            delete valObj;


            /////////////eArrest.15
            var _arrest = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _arrest = Utils.getValue(_eL, "eArrest.15");
            if (_arrest.IsNull != true) {
                _val.push(_arrest.ValueArray[0].val);
                valObj.IsNull = false;
            }

            else {
                if (_hasCardiac == false) {
                    _val.push(NOTAPPLICABLE);
                    _text.push("Not Applicable");
                    valObj.NV = true;
                }
                else if (Utils.ReportingRequired("eArrest.15") == true) {
                    _val.push(NOTRECORDED);
                    _text.push("Not Recorded");
                    valObj.NV = true;
                }
                else {
                    _val.push(NOTRECORDED);
                    _text.push("Not Recorded");
                    valObj.NV = true;
                }
            };
            valObj.vSet = _val.slice(0);
            eArrest["eArrest.15"] = valObj;
            delete valObj;


            /////////////eArrest.16
            var _arrest = [];
            var _val = [];
            var _text = [];
            var valObj = {};
            valObj.IsNull = true;
            _arrest = Utils.getValue(_eL, "eArrest.16");
            if (_arrest.IsNull != true) {
                _val.push(_arrest.ValueArray[0].val);
                valObj.CodeText = _text.slice(0);
                valObj.IsNull = false;
            }
            else {
                if (_hasCardiac == false) {
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
            eArrest["eArrest.16"] = valObj;
            delete valObj;

            /////////////eArrest.17
            var _arrest = [];
            var _val = [];
            var valObj = {};
            var _text = [];
            valObj.IsNull = true;
            _arrest = Utils.getValue(_eL, "eArrest.17");
            if (_arrest.IsNull != true) {
                valObj.IsNull = false;
                for (var i = 0; i < _arrest.ValueArray.length; i++) {
                    if ((_arrest.ValueArray[i].HasValue == true) && (_val.indexOf(_arrest.ValueArray[i].val) == -1)) {
                        _val.push(_arrest.ValueArray[i].val);
                        _text.push(_arrest.ValueArray[i].text);
                    }
                };
                valObj.CodeText = _text.slice(0);

            }
            else {
                _val.push(NOTRECORDED);
                _text.push("Not Recorded");
                valObj.NV = true;
            };
            valObj.vSet = _val.slice(0);
            eArrest["eArrest.17"] = valObj;
            delete valObj;


            /////////////eArrest.18
            var _arrest = [];
            var _val = [];
            var _text = [];
            var valObj = {};
            valObj.IsNull = true;
            _arrest = Utils.getValue(_eL, "eArrest.18");
            if (_arrest.IsNull != true) {
                _val.push(_arrest.ValueArray[0].val);
                valObj.IsNull = false;
            }

            else {
                if (_hasCardiac == false) {
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
            valObj.CodeText = _text.slice(0);
            valObj.vSet = _val.slice(0);
            eArrest["eArrest.18"] = valObj;
            delete valObj;
        }
    };
    eArrest.Errors = ErrorList;
    return eArrest;
};

var seteArrestNull = function () {
    var eArrest = new Object();

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
    eArrest["eArrest.01"] = valObj;
    eArrest["eArrest.02"] = valObj;
    eArrest["eArrest.03"] = valObj;
    eArrest["eArrest.04"] = valObj;
    eArrest["eArrest.05"] = valObj;
    eArrest["eArrest.07"] = valObj;
    eArrest["eArrest.09"] = valObj;
    eArrest["eArrest.10"] = valObj;
    eArrest["eArrest.11"] = valObj;
    eArrest["eArrest.12"] = valObj;
    eArrest["eArrest.14"] = valObj;
    eArrest["eArrest.16"] = valObj;
    eArrest["eArrest.17"] = valObj;
    eArrest["eArrest.18"] = valObj;
    delete valObj;


    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (TheCall.HasPatient == false) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable");
        valObj.NV = true;
    }
    else if (TheCall.HasTreatment == false) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable");
        valObj.NV = true;
    }
    else if (Utils.ReportingRequired("eArrest.15") == true) {
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
    eArrest["eArrest.15"] = valObj;
    delete valObj;

}