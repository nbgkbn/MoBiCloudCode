var Utils = require('cloud/UtilitiesCC.js');

var NOTRECORDED = '7701003';
var NOTREPORTING = '7701005';
var NOTAPPLICABLE = '7701001';
var seteCrew = function (TheCall) {
    //0:1
    var eCrew = new Object();
    var pCrew = new Object();
    pCrew = TheCall.pCrew;

    if (pCrew.HasDataSet == false) {
        var CG = this.setCrewNull(TheCall)
        eCrew.CrewGroup = CG;
        return eCrew;
    }
    else {
        var CrewGroup = new Object();
        if (typeof pCrew.attributes != 'undefined') {

            var _sI = [];
            _sI = Utils.getSectionIndex(pCrew, "eCrew.CrewGroup")
            if (_sI[0] == -1) {
                var CG = this.setCrewNull(TheCall)
                eCrew.CrewGroup = CG;
            }
            else {

                var _vg = [];
                for (var xx = 0; xx < _sI.length; xx++) {
                    var _eL = []
                    _eL = pCrew.attributes.sections[_sI[xx]].attributes.elements;
                    var CrewGroupArray = [];
                    if (_eL.length > 0) {

                        ///////////Crew.01////////
                        var _crew = [];
                        var _val = [];
                        var valObj = {};
                        valObj.IsNull = true;
                        _crew = Utils.getValue(_eL, "eCrew.01");
                        if (_crew.IsNull != true) {
                            _val.push(_crew.ValueArray[0].val);
                            valObj.IsNull = false;
                        }
                        else {
                            if (Utils.ReportingRequired("eCrew.01") == true) {
                                _val.push(NOTRECORDED);
                                valObj.NV = true;
                            }
                            else {
                                _val.push(NOTREPORTING);
                                valObj.NV = true;
                            }
                        };
                        valObj.vSet = _val.slice(0);
                        CrewGroup["eCrew.01"] = valObj;
                        delete valObj;


                        ///////////Crew.02////////
                        var _crew = [];
                        var _val = [];
                        var _text = [];
                        var valObj = {};
                        valObj.IsNull = true;
                        _crew = Utils.getValue(_eL, "eCrew.02");
                        if (_crew.IsNull != true) {
                            _val.push(_crew.ValueArray[0].val);
                            valObj.IsNull = false;
                        }
                        else {
                            if (Utils.ReportingRequired("eCrew.02") == true) {
                                _val.push(NOTRECORDED);
                                valObj.NV = true;
                            }
                            else {
                                _val.push(NOTREPORTING);
                                valObj.NV = true;
                            }
                        };
                        valObj.CodeText = _text.slice(0);
                        valObj.vSet = _val.slice(0);
                        CrewGroup["eCrew.02"] = valObj;
                        delete valObj;

                        ///////////Crew.03////////
                        var _crew = [];
                        var _val = [];
                        var _text = [];
                        var valObj = {};
                        valObj.IsNull = true;
                        _crew = Utils.getValue(_eL, "eCrew.03");
                        if (_crew.IsNull != true) {
                            for (var i = 0; i < _crew.ValueArray.length; i++) {
                                if ((_crew.ValueArray[i].HasValue == true) && (_val.indexOf(_crew.ValueArray[i].val) == -1)) {
                                    _val.push(_crew.ValueArray[i]);
                                    _text.push(_crew.ValueArray[i].text);
                                }
                            };
                            valObj.IsNull = false;
                        }
                        else {
                            if (Utils.ReportingRequired("eCrew.03") == true) {
                                _val.push(NOTRECORDED);
                                valObj.NV = true;
                            }
                            else {
                                _val.push(NOTREPORTING);
                                valObj.NV = true;
                            }
                        };
                        valObj.CodeText = _text.slice(0);
                        valObj.vSet = _val.slice(0);
                        CrewGroup["eCrew.03"] = valObj;
                        delete valObj;

                        CrewGroupArray.push(CrewGroup)

                        if (CrewGroupArray.length > 0) {
                            eCrew.CrewGroup = CrewGroupArray.slice(0);
                        }
                    }
                }
            }
        }
    };

    return eCrew;
};
var setCrewNull = function (TheCall) {
    ECG = new Object();
    //When would Crew be Not Applicable?
    //Set Null Values
    if (Utils.ReportingRequired("eCrew.01") == true) {
        _val.push(NOTRECORDED);
        valObj.NV = true;
    }
    else {
        _val.push(NOTREPORTING);
        valObj.NV = true;
    }
    valObj.vSet = _val.slice(0);
    ECG["eCrew.01"] = valObj;
    delete valObj;

    if (Utils.ReportingRequired("eCrew.02") == true) {
        _val.push(NOTRECORDED);
        valObj.NV = true;
    }
    else {
        _val.push(NOTREPORTING);
        valObj.NV = true;
    }
    valObj.vSet = _val.slice(0);
    ECG["eCrew.02"] = valObj;
    delete valObj;

    if (Utils.ReportingRequired("eCrew.03") == true) {
        _val.push(NOTRECORDED);
        valObj.NV = true;
    }
    else {
        _val.push(NOTREPORTING);
        valObj.NV = true;
    }
    valObj.vSet = _val.slice(0);
    ECG["eCrew.03"] = valObj;
    delete valObj;

    return ECG;
};