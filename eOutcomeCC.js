var Utils = require('cloud/UtilitiesCC.js');
var NOTRECORDED = '7701003';
var NOTREPORTING = '7701005';
var NOTAPPLICABLE = '7701001';
exports.seteOutcome = function (TheCall) {
    //1:1
    var pOutcome = new Object();
    var eOutcome = new Object();
    pOutcome = TheCall.pOutcome

    if (pOutcome.HasDataSet == false) {
        eOutcome = this.seteOutcomeNull(TheCall)
        return eOutcome;
    };

    if (typeof pOutcome.attributes.elements == 'undefined') {
        eOutcome = this.seteOutcomeNull(TheCall)
        return eOutcome;
    }
    else {
        var _eL = [];
        _eL = pOutcome.attributes.elements;
        if (_eL.length == 0) {
            eOutcome = this.seteOutcomeNull(TheCall)
            return eOutcome;
        }
        else {

            //eOutcome.01/////////
            var _outcome = [];
            var _val = [];
            var _text = [];
            var valObj = {};
            valObj.IsNull = true;

            _outcome = Utils.getValue(_eL, "eOutcome.01");
            if (_outcome.IsNull != true) {
                _val.push(_outcome.ValueArray[0].val);
                valObj.IsNull = false;
                _text.push(_outcome.ValueArray[0].text);
            }
            else {
                if (TheCall.HasTransport == false) {
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
            eOutcome["eOutcome.01"] = valObj;
            delete valObj;


            //eOutcome.02/////////
            var _outcome = [];
            var _val = [];
            var _text = [];
            var valObj = {};
            valObj.IsNull = true;

            _outcome = Utils.getValue(_eL, "eOutcome.02");
            if (_outcome.IsNull != true) {
                _val.push(_outcome.ValueArray[0].val);
                valObj.IsNull = false;

                _text.push(_outcome.ValueArray[0].text);
            }
            else {
                if (TheCall.HasTransport == false) {
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
            eOutcome["eOutcome.02"] = valObj;
            delete valObj;


            /////////////////////////////////

            if (typeof pOutcome.attributes.sections != 'undefined') {
                _s1 = Utils.getSectionIndex(pOutcome, "eOutcome.ExternalDataGroup");
                if (_s1[0] != -1) {
                    var OutcomeGroupArray = [];
                    for (var x = 0; x <= _s1.length - 1; x++) {

                        var ExternalDataGroup = new Object();
                        var _eDG = []
                        _eDG = pOutcome.attributes.sections[_s1[x]].attributes.elements;
                        //eOutcome.03/////////
                        var _outcome = [];
                        var _val = [];
                        var _text = [];
                        var valObj = {};
                        valObj.IsNull = true;

                        _outcome = Utils.getValue(_eDG, "eOutcome.03");
                        if (_outcome.IsNull != true) {
                            _val.push(_outcome.ValueArray[0].val);
                            valObj.IsNull = false;
                            valObj.vSet = _val.slice(0);
                            _text.push(_outcome.ValueArray[0].text);
                            valObj.CodeText = _text.slice(0);
                            ExternalDataGroup["eOutcome.03"] = valObj;
                            delete valObj;
                        };


                        //eOutcome.04/////////
                        var _outcome = [];
                        var _val = [];
                        var valObj = {};
                        valObj.IsNull = true;
                        _outcome = Utils.getValue(_eDG, "eOutcome.04");
                        if (_outcome.IsNull != true) {
                            _val.push(_outcome.ValueArray[0].val);
                            valObj.IsNull = false;
                            valObj.vSet = _val.slice(0);
                            ExternalDataGroup["eOutcome.04"] = valObj;
                            delete valObj;

                        };

                        //eOutcome.05/////////
                        var _outcome = [];
                        var _val = [];
                        var valObj = {};
                        valObj.IsNull = true;
                        _outcome = Utils.getValue(_eDG, "eOutcome.05");
                        if (_outcome.IsNull != true) {
                            _val.push(_outcome.ValueArray[0].val);
                            valObj.IsNull = false;

                            valObj.vSet = _val.slice(0);
                            ExternalDataGroup["eOutcome.05"] = valObj;
                            delete valObj;
                        };
                        OutcomeGroupArray.push(ExternalDataGroup);
                    }
                    eOutcome.ExternalDataGroup = OutcomeGroupArray.slice(0);
                }
            };

            //////////////////////////////////////////
            //eOutcome.06/////////
            var _outcome = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;

            _outcome = Utils.getValue(_eL, "eOutcome.06");
            if (_outcome.IsNull != true) {
                _val.push(_outcome.ValueArray[0].val);
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);

                eOutcome["eOutcome.06"] = valObj;
                delete valObj;
            };

            //eOutcome.07/////////
            var _outcome = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _outcome = Utils.getValue(_eL, "eOutcome.07");
            if (_outcome.IsNull != true) {
                _val.push(_outcome.ValueArray[0].val);
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);

                eOutcome["eOutcome.07"] = valObj;
                delete valObj;
            };

            //eOutcome.08/////////
            var _outcome = [];
            var _val = [];
            var _text = [];
            var valObj = {};
            valObj.IsNull = true;

            _outcome = Utils.getValue(_eL, "eOutcome.08");
            if (_outcome.IsNull != true) {
                _val.push(_outcome.ValueArray[0].val);
                valObj.IsNull = false;
                _text.push(_outcome.ValueArray[0].text);
                valObj.CodeText = _text.slice(0);
                valObj.vSet = _val.slice(0);
                eOutcome["eOutcome.08"] = valObj;
                delete valObj;
            };

            //eOutcome.09/////////
            var _outcome = [];
            var _val = [];
            var valObj = {};
            var _text = [];
            valObj.IsNull = true;
            _outcome = Utils.getValue(_eL, "eOutcome.09");

            if (_outcome.IsNull != true) {
                for (var i = 0; i < _outcome.ValueArray.length; i++) {
                    if ((_outcome.ValueArray[i].HasValue == true) && (_val.indexOf(_outcome.ValueArray[i].val) == -1)) {
                        _val.push(_outcome.ValueArray[i].val);
                        _text.push(_outcome.ValueArray[i].text);
                        valObj.IsNull = false;
                    }
                };
                valObj.CodeText = _text.slice(0);
                valObj.vSet = _val.slice(0);
                eOutcome["eOutcome.09"] = valObj;
                delete valObj;
            };

            //eOutcome.10/////////
            var _outcome = [];
            var _val = [];
            var _text = [];
            var valObj = {};
            valObj.IsNull = true;
            _outcome = Utils.getValue(_eL, "eOutcome.10");
            if (_outcome.IsNull != true) {
                for (var i = 0; i < _outcome.ValueArray.length; i++) {
                    if ((_outcome.ValueArray[i].HasValue == true) && (_val.indexOf(_outcome.ValueArray[i].val) == -1)) {
                        _val.push(_outcome.ValueArray[i].val);
                        _text.push(_outcome.ValueArray[i].text);
                        valObj.IsNull = false;
                    }
                };
                valObj.CodeText = _text.slice(0);
                valObj.vSet = _val.slice(0);
                eOutcome["eOutcome.11"] = valObj;
                delete valObj;
            };

            //eOutcome.11/////////
            var _outcome = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;

            _outcome = Utils.getValue(_eL, "eOutcome.11");
            if (_outcome.IsNull != true) {
                _val.push(_outcome.ValueArray[0].val);
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
                eOutcome["eOutcome.11"] = valObj;
                delete valObj;
            };



            //eOutcome.12/////////
            var _outcome = [];
            var _val = [];
            var valObj = {};
            var _text = [];
            valObj.IsNull = true;

            _outcome = Utils.getValue(_eL, "eOutcome.12");
            if (_outcome.IsNull != true) {
                for (var i = 0; i < _outcome.ValueArray.length; i++) {
                    if ((_outcome.ValueArray[i].HasValue == true) && (_val.indexOf(_outcome.ValueArray[i].val) == -1)) {
                        _val.push(_outcome.ValueArray[i].val);
                        _text.push(_outcome.ValueArray[i].text);
                        valObj.IsNull = false;
                    }
                };
                valObj.CodeText = _text.slice(0);
                valObj.vSet = _val.slice(0);
                eOutcome["eOutcome.12"] = valObj;
                delete valObj;
            };



            //eOutcome.13/////////
            var _outcome = [];
            var _val = [];
            var valObj = {};
            var _text = [];
            valObj.IsNull = true;

            _outcome = Utils.getValue(_eL, "eOutcome.13");
            if (_outcome.IsNull != true) {
                for (var i = 0; i < _outcome.ValueArray.length; i++) {
                    if ((_outcome.ValueArray[i].HasValue == true) && (_val.indexOf(_outcome.ValueArray[i].val) == -1)) {
                        _val.push(_outcome.ValueArray[i].val);
                        _text.push(_outcome.ValueArray[i].text);
                        valObj.IsNull = false;
                    }
                };
                valObj.CodeText = _text.slice(0);
                valObj.vSet = _val.slice(0);
                eOutcome["eOutcome.13"] = valObj;
                delete valObj;
            };



            //eOutcome.14/////////
            var _outcome = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _outcome = Utils.getValue(_eL, "eOutcome.14");
            if (_outcome.IsNull != true) {
                _val.push(_outcome.ValueArray[0].val);
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);

                eOutcome["eOutcome.14"] = valObj;
                delete valObj;
            };



            //eOutcome.15/////////
            var _outcome = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _outcome = Utils.getValue(_eL, "eOutcome.15");
            if (_outcome.IsNull != true) {
                _val.push(_outcome.ValueArray[0].val);
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);

                eOutcome["eOutcome.15"] = valObj;
                delete valObj;
            };


            //eOutcome.16/////////
            var _outcome = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _outcome = Utils.getValue(_eL, "eOutcome.16");
            if (_outcome.IsNull != true) {
                _val.push(_outcome.ValueArray[0].val);
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);

                eOutcome["eOutcome.16"] = valObj;
                delete valObj;
            };


            //eOutcome.17/////////
            var _outcome = [];
            var _val = [];
            var _text = [];
            var valObj = {};
            valObj.IsNull = true;
            _outcome = Utils.getValue(_eL, "eOutcome.17");
            if (_outcome.IsNull != true) {
                _val.push(_outcome.ValueArray[0].val);
                valObj.IsNull = false;
                _text.push(_outcome.ValueArray[0].text);
                valObj.CodeText = _text.slice(0);
                valObj.vSet = _val.slice(0);

                eOutcome["eOutcome.17"] = valObj;
                delete valObj;
            }
        }
    };

    return eOutcome;

};


var seteOutcomeNull = function (TheCall) {
    var eo = new Object()
    var _val = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;

    if (TheCall.HasTransport == false) {
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
    eo["eOutcome.01"] = valObj;
    eo["eOutcome.02"] = valObj;
    delete valObj;

    return eo;
}