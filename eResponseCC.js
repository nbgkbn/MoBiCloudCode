var Utils = require('cloud/UtilitiesCC.js');
var NOTRECORDED = '7701003';
var NOTREPORTING = '7701005';
var NOTAPPLICABLE = '7701001';
exports.seteResponse = function (TheCall) {

    pResponse = TheCall.pResponse;
    console.log(pResponse)
    var eResponse = new Object();
    var Error = new Object();
    var ErrorList = [];
    if (pResponse.HasDataSet == false) {
        var Error = new Object();
        Error.Level = "SECTION";
        Error.Type = "MAN";
        Error.Text = " eResponse Null or Undefined"
        ErrorList.push(Error);
        eResponse.Errors = ErrorList;
        return eResponse;
    };
    if (typeof pResponse.attributes.sections == 'undefined') {
        var Error = new Object();
        Error.Level = "SECTION";
        Error.Type = "MAN";
        Error.Text = " SECTIONS Null or Undefined"
        ErrorList.push(Error);
        eResponse.Errors = ErrorList

    }
    else {
        var _eSG = [];
        _eSG = Utils.getSectionIndex(pResponse, "eResponse.ServiceGroup");
        var _SG = [];
        if (_eSG[0] == -1) {
            var Error = new Object();
            Error.Level = "SECTION";
            Error.Type = "MAN";
            Error.Att = "eResponse.05"
            Error.Text = " ServiceGroup Undefined or Null"
            ErrorList.push(Error);
        }
        else {
            _SG = pResponse.attributes.sections[_eSG].attributes.elements;
            if (_SG.length == 0) {
                var Error = new Object();
                Error.Level = "SECTION";
                Error.Type = "MAN";
                Error.Text = " Service Group Undefined or Null"
                ErrorList.push(Error);
            }
            else {
                var _RSG = new Object();
                //////////////////////eResponse.05    

                var _response = [];
                var _text = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _response = Utils.getValue(_SG, "eResponse.05");
                if (_response.IsNull != true) {
                    _val.push(_response.ValueArray[0].val);
                    _text.push(_response.ValueArray[0].text);
                    valObj.IsNull = false;
                    valObj.CodeText = _text.slice(0);
                    valObj.vSet = _val.slice(0);
                    _RSG["eResponse.05"] = valObj;
                    delete valObj;
                }
                else {
                    var Error = new Object();
                    Error.Level = "ELEM";
                    Error.Type = "MAN";
                    Error.Att = "eResponse.05"
                    Error.Text = " Type of Service Requested Undefined or Null"
                    ErrorList.push(Error);
                };


                //////////////////////eResponse.06
                var _response = [];
                var _text = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;

                _response = Utils.getValue(_SG, "eResponse.06");
                if (_response.IsNull != true) {
                    _val.push(_response.ValueArray[0].val);
                    valObj.IsNull = false;
                    _text.push(_response.ValueArray[0].text);

                    valObj.CodeText = _text.slice(0);
                    valObj.vSet = _val.slice(0);
                    _RSG["eResponse.06"] = valObj;
                    delete valObj;
                }

                eResponse.ServiceGroup = _RSG;

            }
        };

        ///////////////AgencyGroup
        var _cRG = [];
        _cRG = Utils.getSectionIndex(pResponse, "eResponse.AgencyGroup")
        if (_cRG[0] == -1) {
            var Error = new Object();
            Error.Level = "SECTION";
            Error.Type = "MAN";
            Error.Text = " Null or Missing Type of Service Request"
            ErrorList.push(Error)
        }
        else {
            var _eRG = [];
            _eRG = pResponse.attributes.sections[_cRG].attributes.elements;
            var _RAG = new Object();

            if (_RAG.length == 0) {
                var Error = new Object();
                Error.Level = "ELEMENT";
                Error.Type = "MAN";
                Error.Att = "eResponse.01"
                Error.Text = " Agency Name Null or Undefined"
                ErrorList.push(Error)

            }
            else {
                //////////////////////eResponse.01
                var _response = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;

                _response = Utils.getValue(_eRG, "eResponse.01");
                if (_response.IsNull == false) {
                    _val.push(_response.ValueArray[0].val);
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                    _RAG["eResponse.01"] = valObj;
                    delete valObj;
                }
                else {
                    var Error = new Object();
                    Error.Level = "ELEM";
                    Error.Type = "MAN";
                    Error.Att = "eResponse.01"
                    Error.Text = " EMS Agency NumberUndefined or Null"
                    ErrorList.push(Error);
                };

                //////////////////////eResponse.02
                var _response = [];
                var _val = [];
                var _text = [];
                var valObj = {};
                valObj.IsNull = true;
                _response = Utils.getValue(_eRG, "eResponse.02");
                if (_response.IsNull == false) {
                    _val.push(_response.ValueArray[0].val);
                    valObj.IsNull = false;
                }
                else {

                    if (Utils.ReportingRequired("eResponse.02") == true) {
                        _val.push(NOTRECORDED);
                        _text.push("Not Recorded");
                        valObj.NV = true;
                    }
                    else {
                        _val.push(NOTREPORTING);
                        valObj.NV = true;
                    }
                };
                valObj.vSet = _val.slice(0);
                valObj.CodeText = _text.slice(0);
                _RAG["eResponse.02"] = valObj;
                delete valObj;

                eResponse.AgencyGroup = _RAG;
            }
        }
    }

    ////////////////////////eResponse Elements

    var _eL = [];
    _eL = pResponse.attributes.elements;
    if (_eL.length == 0) {
        var Error = new Object();
        Error.Level = "SECTION";
        Error.Type = "MAN";
        Error.Text = " eResponse Null or Undefined"
        ErrorList.push(Error);
        eResponse.Errors = ErrorList

    }
    else {
        //////////////////////eResponse.03
        var _response = [];
        var _val = [];
        var _text = [];
        var valObj = {};
        valObj.IsNull = true;
        _response = Utils.getValue(_eL, "eResponse.03");
        if (_response.IsNull == false) {
            _val.push(_response.ValueArray[0].val);
            valObj.IsNull = false;
        }
        else {
            if (TheCall.IsCancelled == true) {
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
        eResponse["eResponse.03"] = valObj;
        delete valObj;

        //////////////////////eResponse.04
        var _response = [];
        var _val = [];
        var valObj = {};
        var _text = [];
        valObj.IsNull = true;
        _response = Utils.getValue(_eL, "eResponse.04");
        if (_response.IsNull == false) {
            _val.push(_response.ValueArray[0].val);
            valObj.IsNull = false;
        }
        else {
            if (TheCall.IsCancelled == true) {
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
        eResponse["eResponse.04"] = valObj;
        delete valObj;

        //////////////////////eResponse.07
        var _response = [];
        var _text = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = false;
        _response = Utils.getValue(_eL, "eResponse.07");
        if (_response.IsNull == false) {
            _val.push(_response.ValueArray[0].val);
            valObj.IsNull = false;
            _text.push(_response.ValueArray[0].text);
            valObj.CodeText = _text.slice(0);
            valObj.vSet = _val.slice(0);
            eResponse["eResponse.07"] = valObj;
            delete valObj;
        }
        else {
            var Error = new Object();
            Error.Level = "ELEM";
            Error.Type = "MAN";
            Error.Att = "eResponse.07"
            Error.Text = "  Primary Role of the Unit Undefined or Null"
            ErrorList.push(Error);
        };


        var _response = [];
        var _text = [];
        var _val = [];
        var valObj = {};
        _response = Utils.getValue(_eL, "eResponse.08");

        if (_response.IsNull == false) {
            valObj.IsNull = false;
            for (var i = 0; i < _response.ValueArray.length; i++) {
                if ((_response.ValueArray[i].HasValue == true) && (_val.indexOf(_response.ValueArray[i].val) == -1)) {
                    _val.push(_response.ValueArray[i].val)
                    _text.push(_response.ValueArray[i].text);
                }
            }
        }
        else {
            if (TheCall.IsCancelled == true) {
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
        eResponse["eResponse.08"] = valObj;
        delete valObj;


        //////////////////////eResponse.09
        var _response = [];
        var _val = [];
        var _text = [];
        var valObj = {};
        valObj.IsNull = true;
        _response = Utils.getValue(_eL, "eResponse.09");
        if (_response.IsNull == false) {
            valObj.IsNull = false;
            for (var i = 0; i < _response.ValueArray.length; i++) {
                if ((_response.ValueArray[i].HasValue == true) && (_val.indexOf(_response.ValueArray[i].val) == -1)) {
                    _val.push(_response.ValueArray[i].val)
                    _text.push(_response.ValueArray[i].text);
                }
            }
        }
        else {
            if (TheCall.IsCancelled == true) {
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
        eResponse["eResponse.09"] = valObj;
        delete valObj;

        var _response = [];
        var _val = [];
        var _text = [];
        var valObj = {};
        valObj.IsNull = true;
        _response = Utils.getValue(_eL, "eResponse.10");
        if (_response.IsNull == false) {
            valObj.IsNull = false;
            for (var i = 0; i < _response.ValueArray.length; i++) {
                if ((_response.ValueArray[i].HasValue == true) && (_val.indexOf(_response.ValueArray[i].val) == -1)) {
                    _val.push(_response.ValueArray[i].val);
                    _text.push(_response.ValueArray[i].text);
                    if (_val[0] == '2210017') {
                        eResponse.HasDelay = false;
                    }
                }
            };
        }
        else {
            if (TheCall.IsCancelled == true) {
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
        eResponse["eResponse.10"] = valObj;
        delete valObj;

        //////////////////////eResponse.11
        var _response = [];
        var _val = [];
        var _text = [];
        var valObj = {};
        valObj.IsNull = true;
        _response = Utils.getValue(_eL, "eResponse.11");
        if (_response.IsNull == false) {
            for (var i = 0; i < _response.ValueArray.length; i++) {
                if ((_response.ValueArray[i].HasValue == true) && (_val.indexOf(_response.ValueArray[i].val) == -1)) {
                    _val.push(_response.ValueArray[i].val);
                    _text.push(_response.ValueArray[i].text);
                    valObj.IsNull = false;
                }
            };
        }
        else {
            if (TheCall.IsCancelled == true) {
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
        eResponse["eResponse.11"] = valObj;
        delete valObj;

        //////////////////////eResponse.12
        var _response = [];
        var _val = [];
        var _text = [];
        var valObj = {};
        valObj.IsNull = true;
        _response = Utils.getValue(_eL, "eResponse.12");
        if (_response.IsNull == false) {
            valObj.IsNull = false;
            for (var i = 0; i < _response.ValueArray.length; i++) {
                if ((_response.ValueArray[i].HasValue == true) && (_val.indexOf(_response.ValueArray[i].val) == -1)) {
                    _val.push(_response.ValueArray[i].val);
                    _text.push(_response.ValueArray[i].text);
                }
            }
        }
        else {
            if (TheCall.IsCancelled == true) {
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
        valObj.vSet = _val.slice(0);
        valObj.CodeText = _text.slice(0);
        eResponse["eResponse.12"] = valObj;
        delete valObj

        //////////////////////eResponse.13
        var _response = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _response = Utils.getValue(_eL, "eResponse.13");
        if (_response.IsNull == false) {
            _val.push(_response.ValueArray[0].val);
            valObj.IsNull = false;

            valObj.vSet = _val.slice(0);
            eResponse["eResponse.13"] = valObj;
            delete valObj
        }
        else {
            var Error = new Object();
            Error.Level = "ELEM";
            Error.Type = "MAN";
            Error.Att = "eResponse.13"
            Error.Text = "EMS Vehicle (Unit) Number Undefined or Null"
            ErrorList.push(Error);
        };


        //////////////////////eResponse.14
        var _response = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;

        _response = Utils.getValue(_eL, "eResponse.14");
        if (_response.IsNull == false) {
            _val.push(_response.ValueArray[0].val);
            valObj.IsNull = false;
            valObj.vSet = _val.slice(0);
            eResponse["eResponse.14"] = valObj;
            delete valObj;
        }
        else {
            var Error = new Object();
            Error.Level = "ELEM";
            Error.Type = "MAN";
            Error.Att = "eResponse.14"
            Error.Text = "EMS Vehicle (Unit) Call Sign Undefined or Null"
            ErrorList.push(Error);
        };
        //////////////////////eResponse.15
        var _response = [];
        var _val = [];
        var _text = [];
        var valObj = {};
        valObj.IsNull = true;
        _response = Utils.getValue(_eL, "eResponse.15");
        if (_response.IsNull == false) {
            _val.push(_response.ValueArray[0].val);
            _text.push(_response.ValueArray[0].text);
            valObj.CodeText = _text.slice(0);
            valObj.vSet = _val.slice(0);
            valObj.IsNull = false;
            eResponse["eResponse.15"] = valObj;
            delete valObj
        }
        else {
            var Error = new Object();
            Error.Level = "ELEM";
            Error.Type = "MAN";
            Error.Att = "eResponse.15"
            Error.Text = "Level of Care of This Unit Undefined or Null"
            ErrorList.push(Error);
        };
        7

        //////////////////////eResponse.16
        var _response = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _response = Utils.getValue(_eL, "eResponse.16");
        if (_response.IsNull == false) {
            _val.push(_response.ValueArray[0].val);
            valObj.IsNull = false;

            valObj.vSet = _val.slice(0);
            eResponse["eResponse.16"] = valObj;
            delete valObj
        };

        //////////////////////eResponse.17
        var _response = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _response = Utils.getValue(_eL, "eResponse.17");
        if (_response.IsNull == false) {
            _val.push(_response.ValueArray[0].val);
            valObj.IsNull = false;

            valObj.vSet = _val.slice(0);
            eResponse["eResponse.17"] = valObj;
            delete valObj
        };

        //////////////////////eResponse.18
        var _response = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _response = Utils.getValue(_eL, "eResponse.18");
        if (_response.IsNull == false) {
            _val.push(_response.ValueArray[0].val);
            valObj.IsNull = false;
            valObj.vSet = _val.slice(0);
            eResponse["eResponse.18"] = valObj;
            delete valObj;
        };

        //////////////////////eResponse.19
        var _response = [];
        var _val = [];
        var _text = [];
        var valObj = {};
        valObj.IsNull = true;
        _response = Utils.getValue(_eL, "eResponse.19");
        if (_response.IsNull == false) {
            _val.push(_response.ValueArray[0].val);
            valObj.IsNull = false;
        }
        else {
            if (Utils.ReportingRequired("eResponse.19") == true) {
                _val.push(NOTRECORDED);
                _text.push("Not Recorded");
                valObj.NV = true;
            }
            else {
                _val.push(NOTREPORTING);
                valObj.NV = true;
            }
        };
        valObj.CodeText = _text.slice(0);
        valObj.vSet = _val.slice(0);
        eResponse["eResponse.19"] = valObj;
        delete valObj

        //////////////////////eResponse.20
        var _response = [];
        var _val = [];
        var _text = [];
        var valObj = {};
        valObj.IsNull = true;
        _response = Utils.getValue(_eL, "eResponse.20");
        if (_response.IsNull == false) {
            valObj.IsNull = false;
            _val.push(_response.ValueArray[0].val);
        }
        else {
            if (Utils.ReportingRequired("eResponse.20") == true) {
                _val.push(NOTRECORDED);
                _text.push("Not Recorded");
                valObj.NV = true;
            }
            else {
                _val.push(NOTREPORTING);
                valObj.NV = true;
            }
        };
        valObj.CodeText = _text.slice(0);
        valObj.vSet = _val.slice(0);
        eResponse["eResponse.20"] = valObj;
        delete valObj

        //////////////////////eResponse.21
        var _response = [];
        var _text = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _response = Utils.getValue(_eL, "eResponse.21");
        if (_response.IsNull == false) {
            _val.push(_response.ValueArray[0].val);
            valObj.IsNull = false;
        }
        else {
            if (Utils.ReportingRequired("eResponse.21") == true) {
                _val.push(NOTRECORDED);
                _text.push("Not Recorded");
                valObj.NV = true;
            }
            else {
                _val.push(NOTREPORTING);
                valObj.NV = true;
            }
        };
        valObj.CodeText = _text.slice(0);
        valObj.vSet = _val.slice(0);
        eResponse["eResponse.21"] = valObj;
        delete valObj


        //////////////////////eResponse.22
        var _response = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;

        _response = Utils.getValue(_eL, "eResponse.22");
        if (_response.IsNull == false) {
            _val.push(_response.ValueArray[0].val);
            valObj.IsNull = false;
        }
        else {
            if (Utils.ReportingRequired("eResponse.22") == true) {
                _val.push(NOTRECORDED);
                _text.push("Not Recorded");
                valObj.NV = true;
            }
            else {
                _val.push(NOTREPORTING);
                valObj.NV = true;
            }
        };
        valObj.CodeText = _text.slice(0);
        valObj.vSet = _val.slice(0);
        eResponse["eResponse.22"] = valObj;
        delete valObj


        //////////////////////eResponse.23
        var _response = [];
        var _text = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;

        _response = Utils.getValue(_eL, "eResponse.23");
        if (_response.IsNull == false) {
            _val.push(_response.ValueArray[0].val);
            valObj.IsNull = false;
            _text.push(_response.ValueArray[0].text);

        }
        else {
            var Error = new Object();
            Error.Level = "ELEM";
            Error.Type = "MAN";
            Error.Att = "eResponse.23"
            Error.Text = " Response Mode to Scene Undefined or Null"
            ErrorList.push(Error)
        };
        valObj.CodeText = _text.slice(0);
        valObj.vSet = _val.slice(0);
        eResponse["eResponse.23"] = valObj;
        delete valObj


        //////////////////////eResponse.24

        var _response = [];
        var _text = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _response = Utils.getValue(_eL, "eResponse.24");
        if (_response.IsNull == false) {
            valObj.IsNull = false;
            for (var i = 0; i < _response.ValueArray.length; i++) {
                if ((_response.ValueArray[i].HasValue == true) && (_val.indexOf(_response.ValueArray[i].val) == -1)) {
                    _val.push(_response.ValueArray[i].val);
                    _text.push(_response.ValueArray[i].text);
                }
            };
            valObj.CodeText = _text.slice(0);
        }
        else {
            if (TheCall.IsCancelled == true) {
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
        eResponse["eResponse.24"] = valObj;
        delete valObj;
    };
    eResponse.Errors = ErrorList;
    return eResponse;
};
