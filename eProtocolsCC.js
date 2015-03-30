var Utils = require('cloud/UtilitiesCC.js');
var NOTRECORDED = '7701003';
var NOTREPORTING = '7701005';
var NOTAPPLICABLE = '7701001';
exports.seteProtocols = function (TheCall) {
    //1:1
    var eProtocols = new Object()
    var pProtocols = new Object()
    var ProtocolGroupArray = new Array()
    pProtocols = TheCall.pProtocols;


    if (pProtocols.HasDataSet == false) {
        var ProtocolGroup = new Object();
        ProtocolGroup = seteProtocolsNull(TheCall)
        eProtocols.ProtocolGroup = ProtocolGroup;
        return eProtocols;
    };
    var _sI = [];
    _sI = Utils.getSectionIndex(pProtocols, "eProtocols.ProtocolGroup")
    if (_sI[0] == -1) {
        var ProtocolGroup = new Object();
        ProtocolGroup = seteProtocolsNull(TheCall)
        eProtocols.ProtocolGroup = ProtocolGroup;
        return eProtocols;
    }

    for (var xx = 0; xx < _sI.length; xx++) {
        var ProtocolGroup = new Object();
        ProtocolGroup = seteProtocolsNull(TheCall)
        eProtocols.ProtocolGroup = ProtocolGroup;


        var ProtocolGroup = new Object();
        var _eL = [];
        if (typeof pProtocols.attributes.sections != 'undefined') {
            var _eL = pProtocols.attributes.sections[_sI[xx]].attributes.elements;

            ///////////eProtocols.01////////
            var _protocol = [];
            var _val = [];
            var _text = [];
            var valObj = {};
            valObj.IsNull = true;
            _protocol = Utils.getValue(_eL, "eProtocols.01");
            if (_protocol.IsNull == false) {

                _val.push(_protocol.ValueArray[0].val);
                valObj.IsNull = false;
                _text.push(_protocol.ValueArray[0].text);

            }
            else {
                if (TheCall.HasTreatment == false) {
                    _val.push(NOTAPPLICABLE);
                    _text.push("Not Applicable");
                    valObj.NV = true;
                }
                else {
                    _val.push(NOTRECORDED);
                    _text.push("Not Recorded");
                    valObj.NV = true;
                };

            };
            valObj.CodeText = _text.slice(0);
            valObj.vSet = _val.slice(0);
            ProtocolGroup["eProtocols.01"] = valObj;
            delete valObj;

            ///////////eProtocols.02////////
            var _protocol = [];
            var _val = [];
            var valObj = {};
            var _text = [];
            valObj.IsNull = true;
            _protocol = Utils.getValue(_eL, "eProtocols.02");
            if (_protocol.IsNull != true) {
                _val.push(_protocol.ValueArray[0].val);
                valObj.IsNull = false;
                _text.push(_protocol.ValueArray[0].text);

            }
            else {
                if (TheCall.HasTreatment == false) {
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
            ProtocolGroup["eProtocols.02"] = valObj;
            delete valObj;

            ProtocolGroupArray.push(ProtocolGroup)
        }
    };
    if (ProtocolGroupArray.length > 0) {
        eProtocols.ProtocolGroup = ProtocolGroupArray.slice(0);
    };
    return eProtocols;
};

var seteProtocolsNull = function (TheCall) {
    var eP = new Object();
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
        _text.push("Not Recorded");
        valObj.NV = true;
    };

    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    eP["eProtocols.01"] = valObj;

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
        _text.push("Not Recorded");
        valObj.NV = true;
    };

    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    eP["eProtocols.02"] = valObj;

    return eP;

};