var Utils = require('cloud/UtilitiesCC.js');
var NOTRECORDED = '7701003';
var NOTREPORTING = '7701005';
var NOTAPPLICABLE = '7701001';
exports.seteAirway = function (TheCall) {
    var eAirway = new Object();
    var pAirway = new Object();
    var AirwayGroup = new Object();
    var AirwayGroupArray = new Array();
    var ConfirmationGroup = new Object();
    var ConfirmationGroupArray = new Array();
    var CGroupArray = [];

    pAirway = TheCall.pAirway;
    eAirway.IsValid = false;
    if (pAirway.HasDataSet == false) {
        eAirway = seteAirwayGroupNull();
    }
    else {
        if (typeof pAirway.attributes.sections == 'undefined') {
            eAirway = seteAirwayGroupNull();
        }
        else {
            var _eL = [];
            _eL = pAirway.attributes.sections[0].attributes.elements;
            if (_eL.length == 0) {
                eAirway = seteAirwayGroupNull();
            }
            else {
                eAirway.IsValid = true;
                var _hasAirway = false;
                /////eAirway.01
                var _airway = [];
                var _text = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;

                _airway = Utils.getValue(_eL, "eAirway.01");
                if (_airway.IsNull != true) {
                    for (var i = 0; i < _airway.ValueArray.length; i++) {
                        if ((_airway.ValueArray[i].HasValue == true) && (_val.indexOf(_airway.ValueArray[i].val) == -1)) {
                            _hasAirway = true;
                            _val.push(_airway.ValueArray[i].val);
                            _text.push(_response.ValueArray[i].text);
                        }
                    }
                }
                else {
                    if (TheCall.HasPatient != true) {
                        _val.push(NOTAPPLICABLE);
                        _text.push("Not Applicable");
                        valObj.NV = true;

                    }
                    else if (Utils.ReportingRequired("eAirway.01") == true) {
                        _val.push(NOTRECORDED);
                        _text.push("Not Recorded");
                        valObj.NV = true;
                    }
                }

                valObj.CodeText = _text.slice(0);
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
                AirwayGroup["eAirway.01"] = valObj;
                delete valObj;


                /////eAirway.10
                var _airway = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _airway = Utils.getValue(_eL, "eAirway.10");
                if (_airway.IsNull != true) {
                    _hasAirway = true;
                    _val.push(_airway.ValueArray[0].val);
                    valObj.IsNull = false;

                    valObj.vSet = _val.slice(0);
                    AirwayGroup["eAirway.10"] = valObj;
                    delete valObj;
                };

                /////eAirway.11
                var _airway = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _airway = Utils.getValue(_eL, "eAirway.11");
                if (_airway.IsNull != true) {
                    _hasAirway = true;
                    _val.push(_airway.ValueArray[0].val);
                    valObj.IsNull = false;

                    valObj.vSet = _val.slice(0);
                    AirwayGroup["eAirway.11"] = valObj;
                    delete valObj;
                }

                //////////////////////////////eAirway.ConfirmationGroup    

                //Assumption:  eAirway.02 defines the use of a Device.  
                if (typeof pAirway.attributes.sections[0].attributes == 'undefined') {
                    var CGroup = new Object();
                    CGroup = this.seteAirwayConfirmationGroupNull()
                }
                else {
                    var _sI = [];
                    _sI = Utils.getSectionIndex(pAirway.attributes.sections[0], "eAirway.ConfirmationGroup");
                    if (_sI.length == 0) {
                        var CGroup = new Object();
                        CGroup = this.seteAirwayConfirmationGroupNull()

                    }
                    else {
                        for (var y = 0; y < _sI.length; y++) {
                            var _hasAirwayDevice = false;
                            var _hasAirwayCG = false;
                            var _eCG = [];
                            var _eCG = pAirway.attributes.sections[0].attributes.sections[_sI[y]].attributes.elements;
                            var CGroup = new Object();

                            /////eAirway.02
                            var _airway = [];
                            var _val = [];
                            var valObj = {};
                            valObj.IsNull = true;
                            _airway = Utils.getValue(_eCG, "eAirway.02");
                            if (_airway.IsNull != true) {
                                _hasAirwayCG = true;
                                _val.push(_airway.ValueArray[0].val);
                                _hasAirwayDevice = true;
                                valObj.IsNull = false;
                            }
                            else {
                                if (TheCall.HasPatient != true) {
                                    _val.push(NOTAPPLICABLE);
                                    _text.push("Not Applicable");
                                    valObj.NV = true;

                                }
                                else if (Utils.ReportingRequired("eAirway.02") == true) {
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
                            valObj.vSet = _val.slice(0);
                            CGroup["eAirway.02"] = valObj;
                            delete valObj;


                            /////eAirway.03
                            var _airway = [];
                            var _val = [];
                            var _text = [];
                            var valObj = {};
                            valObj.IsNull = true;
                            _airway = Utils.getValue(_eCG, "eAirway.03");
                            if (_airway.IsNull != true) {
                                _hasAirwayCG = true;
                                _val.push(_airway.ValueArray[0].val);
                                valObj.IsNull = false;
                                _text.push(_dispatch.ValueArray[0].text);
                            }
                            else {
                                if (_hasAirwayDevice != true) {
                                    _val.push(NOTAPPLICABLE);
                                    _text.push("Not Applicable");
                                    valObj.NV = true;

                                }
                                else if (Utils.ReportingRequired("eAirway.03") == true) {
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
                            CGroup["eAirway.03"] = valObj;
                            delete valObj;


                            /////eAirway.04
                            var _airway = [];
                            var _val = [];
                            var _text = [];
                            var valObj = {};
                            valObj.IsNull = true;
                            _airway = Utils.getValue(_eCG, "eAirway.04");
                            if (_airway.IsNull != true) {
                                _hasAirwayCG = true;
                                for (var i = 0; i < _airway.ValueArray.length; i++) {
                                    if ((_airway.ValueArray[i].HasValue == true) && (_val.indexOf(_airway.ValueArray[i].val) == -1)) {
                                        _val.push(_airway.ValueArray[i].val);
                                        _text.push(_dispatch.ValueArray[i].text);
                                    }
                                }
                                valObj.CodeText = _text.slice(0);
                                valObj.IsNull = false;
                            }

                            else {
                                if (_hasAirwayDevice != true) {
                                    _val.push(NOTAPPLICABLE);
                                    _text.push("Not Applicable");
                                    valObj.NV = true;

                                }
                                else if (Utils.ReportingRequired("eAirway.04") == true) {
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
                            valObj.vSet = _val.slice(0);
                            CGroup["eAirway.04"] = valObj;
                            delete valObj;

                            /////eAirway.05
                            var _airway = [];
                            var _val = [];
                            var valObj = {};
                            valObj.IsNull = true;
                            _airway = Utils.getValue(_eCG, "eAirway.05");
                            if (_airway.IsNull != true) {
                                _hasAirwayCG = true;
                                _val.push(_airway.ValueArray[0].val);
                                valObj.IsNull = false;


                                valObj.vSet = _val.slice(0);
                                CGroup["eAirway.05"] = valObj;
                                delete valObj;
                            };

                            /////eAirway.06
                            var _airway = [];
                            var _val = [];
                            var _text = [];
                            var valObj = {};
                            valObj.IsNull = true;
                            _airway = Utils.getValue(_eCG, "eAirway.06");
                            if (_airway.IsNull != true) {
                                _hasAirwayCG = true;
                                valObj.IsNull = false;
                                _val.push(_airway.ValueArray[0].val);
                                valObj.vSet = _val.slice(0);
                                _text.push(_dispatch.ValueArray[0].text);
                            }
                            else {
                                if (_hasAirwayDevice != true) {
                                    _val.push(NOTAPPLICABLE);
                                    _text.push("Not Applicable");
                                    valObj.NV = true;

                                }
                                else if (Utils.ReportingRequired("eAirway.06") == true) {
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
                            CGroup["eAirway.06"] = valObj;
                            delete valObj;

                            /////eAirway.07
                            var _airway = [];
                            var _val = [];
                            var valObj = {};
                            valObj.IsNull = true;
                            _airway = Utils.getValue(_eCG, "eAirway.07");
                            if (_airway.IsNull != true) {
                                _hasAirwayCG = true;
                                _val.push(_airway.ValueArray[0].val);
                                valObj.IsNull = false;
                            }
                            else {
                                if (_hasAirwayDevice != true) {
                                    _val.push(NOTAPPLICABLE);
                                    _text.push("Not Applicable");
                                    valObj.NV = true;

                                }
                                else if (Utils.ReportingRequired("eAirway.07") == true) {
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
                            valObj.vSet = _val.slice(0);
                            CGroup["eAirway.07"] = valObj;
                            delete valObj;



                            /////eAirway.08
                            var _airway = [];
                            var _text = [];
                            var _val = [];
                            var valObj = {};
                            valObj.IsNull = true;
                            _airway = Utils.getValue(_eCG, "eAirway.08");
                            if (_airway.IsNull != true) {
                                _hasAirwayCG = true;
                                for (var i = 0; i < _airway.ValueArray.length; i++) {
                                    valObj.IsNull = false;
                                    if ((_airway.ValueArray[i].HasValue == true) && (_val.indexOf(_airway.ValueArray[i].val) == -1)) {
                                        _val.push(_airway.ValueArray[i].val)
                                        _text.push(_dispatch.ValueArray[i].text);
                                    }
                                }
                            }
                            else {
                                if (_hasAirwayDevice != true) {
                                    _val.push(NOTAPPLICABLE);
                                    _text.push("Not Applicable");
                                    valObj.NV = true;

                                }
                                else if (Utils.ReportingRequired("eAirway.08") == true) {
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
                            CGroup["eAirway.08"] = valObj;
                            delete valObj;


                            /////eAirway.09
                            var _airway = [];
                            var _text = [];
                            var _val = [];
                            var valObj = {};
                            valObj.IsNull = true;
                            _airway = Utils.getValue(_eCG, "eAirway.09");
                            if (_airway.IsNull != true) {
                                _hasAirwayCG = true;
                                for (var i = 0; i < _airway.ValueArray.length; i++) {
                                    valObj.IsNull = false;
                                    if ((_airway.ValueArray[i].HasValue == true) && (_val.indexOf(_airway.ValueArray[i].val) == -1)) {
                                        _val.push(_airway.ValueArray[i].val)
                                        _text.push(_dispatch.ValueArray[i].text);
                                    }
                                }
                            }
                            else {
                                if (_hasAirwayDevice != true) {
                                    _val.push(NOTAPPLICABLE);
                                    _text.push("Not Applicable");
                                    valObj.NV = true;

                                }
                                else if (Utils.ReportingRequired("eAirway.09") == true) {
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
                            CGroup["eAirway.09"] = valObj;
                            delete valObj;

                            CGroupArray.push(CGroup);
                        }
                    }
                }
            }
        };
        if (CGroupArray.length > 0) {
            AirwayGroup.ConfirmationGroup = CGroupArray;
            eAirway.AirwayGroup = AirwayGroup;
        }
    }
    return eAirway;
};

var seteAirwayGroupNull = function () {
    var AG = new Object();

    var _val = [];
    var valObj = {};
    valObj.IsNull = true;

    if (TheCall.HasPatient == false) {
        if (Utils.ReportingRequired("eAirway.01") == true) {
            _val.push(NOTAPPLICABLE);
            _text.push("Not Applicable");
            valObj.NV = true;
        }
        else {
            _val.push(NOTREPORTING);
            _text.push("Not Reporting");
            valObj.NV = true;
        }
    }

    else {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded");
        valObj.NV = true;
    };

    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    AG["eAirway.01"] = valObj;
    AG.ConfirmationGroup = seteAirwayConfirmationGroupNull();

};


var seteAirwayConfirmationGroupNull = function () {
    var ACG = new Object();

    var _val = [];
    var valObj = {};
    valObj.IsNull = true;

    if (TheCall.HasPatient == false) {
        if (Utils.ReportingRequired("eAirway.02") == true) {
            _val.push(NOTAPPLICABLE);
            _text.push("Not Applicable");
            valObj.NV = true;
        }
        else {
            _val.push(NOTREPORTING);
            _text.push("Not Reporting");
            valObj.NV = true;
        }
    }

    else {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded");
        valObj.NV = true;
    };

    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    ACG["eAirway.03"] = valObj;

    if (TheCall.HasPatient == false) {
        if (Utils.ReportingRequired("eAirway.02") == true) {
            _val.push(NOTAPPLICABLE);
            _text.push("Not Applicable");
            valObj.NV = true;
        }
        else {
            _val.push(NOTREPORTING);
            _text.push("Not Reporting");
            valObj.NV = true;
        }
    }

    else {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded");
        valObj.NV = true;
    };

    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    ACG["eAirway.03"] = valObj;

    if (TheCall.HasPatient == false) {
        if (Utils.ReportingRequired("eAirway.04") == true) {
            _val.push(NOTAPPLICABLE);
            _text.push("Not Applicable");
            valObj.NV = true;
        }
        else {
            _val.push(NOTREPORTING);
            _text.push("Not Reporting");
            valObj.NV = true;
        }
    }

    else {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded");
        valObj.NV = true;
    };

    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    ACG["eAirway.04"] = valObj;

    if (TheCall.HasPatient == false) {
        if (Utils.ReportingRequired("eAirway.06") == true) {
            _val.push(NOTAPPLICABLE);
            _text.push("Not Applicable");
            valObj.NV = true;
        }
        else {
            _val.push(NOTREPORTING);
            _text.push("Not Reporting");
            valObj.NV = true;
        }
    }

    else {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded");
        valObj.NV = true;
    };

    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    ACG["eAirway.06"] = valObj;


    if (TheCall.HasPatient == false) {
        if (Utils.ReportingRequired("eAirway.07") == true) {
            _val.push(NOTAPPLICABLE);
            _text.push("Not Applicable");
            valObj.NV = true;
        }
        else {
            _val.push(NOTREPORTING);
            _text.push("Not Reporting");
            valObj.NV = true;
        }
    }

    else {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded");
        valObj.NV = true;
    };

    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    ACG["eAirway.07"] = valObj;

    if (TheCall.HasPatient == false) {
        if (Utils.ReportingRequired("eAirway.08") == true) {
            _val.push(NOTAPPLICABLE);
            _text.push("Not Applicable");
            valObj.NV = true;
        }
        else {
            _val.push(NOTREPORTING);
            _text.push("Not Reporting");
            valObj.NV = true;
        }
    }

    else {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded");
        valObj.NV = true;
    };

    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    ACG["eAirway.08"] = valObj;


    if (TheCall.HasPatient == false) {
        if (Utils.ReportingRequired("eAirway.09") == true) {
            _val.push(NOTAPPLICABLE);
            _text.push("Not Applicable");
            valObj.NV = true;
        }
        else {
            _val.push(NOTREPORTING);
            _text.push("Not Reporting");
            valObj.NV = true;
        }
    }

    else {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded");
        valObj.NV = true;
    };

    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    ACG["eAirway.09"] = valObj;

    return ACG
}
