var Utils = require('cloud/UtilitiesCC.js');
var NOTRECORDED = '7701003';
var NOTREPORTING = '7701005';
var NOTAPPLICABLE = '7701001';
exports.seteProcedures = function (TheCall) {
    var eProcedures = new Object();
    var pProcedures = new Object();
    pProcedures = TheCall.pProcedures;

    var eProcedureGroup = new Object();
    var ProcedureGroupArray = new Array();
    eProcedureGroup.IsValid = false;
    if (pProcedures.HasDataSet == false) {

        eProcedureGroup = seteProcedureGroupNull(TheCall);
        ProcedureGroupArray.push(eProcedureGroup);
        eProcedures.ProcedureGroup = ProcedureGroupArray;
        return eProcedures;
    };

    if (typeof pProcedures.attributes.sections == 'undefined') {
        eProcedureGroup = seteProcedureGroupNull(TheCall);
        ProcedureGroupArray.push(eProcedureGroup);
        eProcedures.ProcedureGroup = ProcedureGroupArray;
        return eProcedures;
    };


    var _sI = [];
    _sI = Utils.getSectionIndex(pProcedures, "eProcedures.ProcedureGroup")

    if (_sI[0] == -1) {
        eProcedureGroup = seteProcedureGroupNull(TheCall);
        eProcedures.ProcedureGroup = eProcedureGroup;
        return eProcedures;
    }
    else {
        var ProcedureGroupArray = [];
        var ProcDateTime = [];
        for (var xx = 0; xx < _sI.length; xx++) {

            var procDateTime = {};
            var ProcedureGroup = new Object();
            var elementList = [];
            var elementList = pProcedures.attributes.sections[xx].attributes.elements;

            if (elementList.length == 0) {
                eProcedureGroup = seteProcedureGroupNull(TheCall);
                ProcedureGroupArray.push(eProcedureGroup);
                eProcedures.ProcedureGroup = ProcedureGroupArray;
            }
            else {
                //eProcedures.03////////////
                var _procedures = [];
                var _val = [];
                var _text = [];
                var valObj = {};
                valObj.IsNull = true;
                var _PN = [];
                _procedures = Utils.getValue(elementList, "eProcedures.03");
                if (_procedures.HasPN == true) {
                    if (_procedures.pn == "ContraindicationNoted") {
                        _val.push("8801001");
                        _text.push("Contraindication Noted");
                        valObj.PN = true;
                    }
                    else if (_procedures.pn == "DeniedByOrder") {
                        _val.push("8801003");
                        _text.push("Denied By Order");
                        valObj.PN = true;
                    }
                    else if (_procedures.pn == "Refused") {
                        _val.push("8801019");
                        _text.push("Refused");
                        valObj.PN = true;

                    }
                    else if (_procedures.pn == "UnabletoComplete") {
                        _val.push("8801023")
                        _text.push("Unable to Complete");
                        valObj.PN = true;
                    }
                };
                if (_procedures.IsNull == true) {

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

                }
                else {
                    _val.push(_procedures.ValueArray[0].val);
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                    _text.push(_procedures.ValueArray[0].text);

                };


                valObj.CodeText = _text.slice(0);
                valObj.vSet = _val.slice(0);
                ProcedureGroup["eProcedures.03"] = valObj;
                delete valObj;

                //eProcedures.01////////////
                var _procedures = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _procedures = Utils.getValue(elementList, "eProcedures.01");
                if (_procedures.IsNull == false) {
                    _val.push(_procedures.ValueArray[0].val);
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                }
                else {
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
                };
                valObj.CodeText = _text.slice(0);
                valObj.vSet = _val.slice(0);
                ProcedureGroup["eProcedures.01"] = valObj;
                procDateTime = procDateTime + "  " + _val[0];
                delete valObj;



                //eProcedures.02////////////
                var _procedures = [];
                var _val = [];
                var _text = [];
                var valObj = {};
                valObj.IsNull = true;
                _procedures = Utils.getValue(elementList, "eProcedures.02");
                if (_procedures.IsNull == false) {
                    _val.push(_procedures.ValueArray[0].val);
                    valObj.IsNull = false;
                    _text.push(_procedures.ValueArray[0].text);
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
                    };
                };
                valObj.CodeText = _text.slice(0);
                valObj.vSet = _val.slice(0);
                ProcedureGroup["eProcedures.02"] = valObj;
                delete valObj;


                //eProcedures.04////////////
                var _procedures = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _procedures = Utils.getValue(elementList, "eProcedures.04");
                if (_procedures.IsNull != true) {
                    _val.push(_procedures.ValueArray[0].val);
                    valObj.IsNull = false;

                    valObj.vSet = _val.slice(0);
                    ProcedureGroup["eProcedures.04"] = valObj;
                    delete valObj;
                };

                //eProcedures.05////////////
                var _procedures = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;

                _procedures = Utils.getValue(elementList, "eProcedures.05");
                if (_procedures.IsNull != true) {

                    _val.push(_procedures.ValueArray[0].val);
                    valObj.IsNull = false;
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
                    };

                };
                valObj.vSet = _val.slice(0);
                valObj.CodeText = _text.slice(0);
                ProcedureGroup["eProcedures.05"] = valObj;
                delete valObj;

                //eProcedures.06////////////
                var _procedures = [];
                var _val = [];
                var valObj = {};
                var _text = [];
                valObj.IsNull = true;
                _procedures = Utils.getValue(elementList, "eProcedures.06");
                if (_procedures.IsNull != true) {
                    _val.push(_procedures.ValueArray[0].val);
                    valObj.IsNull = false;
                    _text.push(_procedures.ValueArray[0].text);
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
                    };

                };
                valObj.CodeText = _text.slice(0);
                valObj.vSet = _val.slice(0);
                ProcedureGroup["eProcedures.06"] = valObj;
                delete valObj;



                //eProcedures.07////////////
                var _procedures = [];
                var _val = [];
                var _text = [];
                var valObj = {};
                valObj.IsNull = true;
                if (_procedures.IsNull != true) {
                    _procedures = Utils.getValue(elementList, "eProcedures.07");
                    for (var i = 0; i < _procedures.ValueArray.length; i++) {
                        if ((_procedures.ValueArray[i].HasValue == true) && (_val.indexOf(_procedures.ValueArray[i].val) == -1)) {
                            _val.push(_procedures.ValueArray[i].val);
                            _text.push(_procedures.ValueArray[i].text);
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
                    };

                };
                valObj.CodeText = _text.slice(0);
                valObj.vSet = _val.slice(0);
                ProcedureGroup["eProcedures.07"] = valObj;
                delete valObj;


                //eProcedures.08////////////
                var _procedures = [];
                var _val = [];
                var _text = [];
                var valObj = {};
                valObj.IsNull = true;
                _procedures = Utils.getValue(elementList, "eProcedures.08");
                if (_procedures.IsNull != true) {
                    _val.push(_procedures.ValueArray[0].val);
                    valObj.IsNull = false;
                    _text.push(_procedures.ValueArray[0].text);
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
                    };

                };
                valObj.CodeText = _text.slice(0);
                valObj.vSet = _val.slice(0);
                ProcedureGroup["eProcedures.08"] = valObj;
                delete valObj;

                //eProcedures.09////////////
                var _procedures = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _procedures = Utils.getValue(elementList, "eProcedures.09");
                if (_procedures.IsNull != true) {
                    _val.push(_procedures.ValueArray[0].val);
                    valObj.IsNull = false;
                }
                else {
                    if (TheCall.HasPatient == false) {
                        _val.push(NOTAPPLICABLE);
                        _text.push("Not Applicable");
                        valObj.NV = true;
                    }
                    else if (Utils.ReportingRequired("eProcedures.09") == true) {
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
                ProcedureGroup["eProcedures.09"] = valObj;
                delete valObj;

                //eProcedures.10////////////
                var _procedures = [];
                var _val = [];
                var valObj = {};
                var _text = [];
                valObj.IsNull = true;
                _procedures = Utils.getValue(elementList, "eProcedures.10");
                if (_procedures.IsNull != true) {
                    _val.push(_procedures.ValueArray[0].val);
                    valObj.IsNull = false;
                    _text.push(_procedures.ValueArray[0].text);
                    valObj.CodeText = _text.slice(0);
                    valObj.vSet = _val.slice(0);
                    ProcedureGroup["eProcedures.10"] = valObj;
                    delete valObj;
                };

                //eProcedures.11////////////
                var _procedures = [];
                var _val = [];
                var _text = [];
                var valObj = {};
                valObj.IsNull = true;
                _procedures = Utils.getValue(elementList, "eProcedures.11");
                if (_procedures.IsNull != true) {
                    _val.push(_procedures.ValueArray[0].val);
                    valObj.IsNull = false;
                    _text.push(_procedures.ValueArray[0].text);
                    valObj.CodeText = _text.slice(0);
                    valObj.vSet = _val.slice(0);
                    ProcedureGroup["eProcedures.11"] = valObj;
                    delete valObj;
                };

                //eProcedures.12////////////
                var _procedures = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _procedures = Utils.getValue(elementList, "eProcedures.12");
                if (_procedures.IsNull != true) {
                    _val.push(_procedures.ValueArray[0].val);
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                    ProcedureGroup["eProcedures.12"] = valObj;
                    delete valObj;
                };

                //eProcedures.13////////////
                var _procedures = [];
                var _val = [];
                var _text = [];
                var valObj = {};
                valObj.IsNull = true;
                _procedures = Utils.getValue(elementList, "eProcedures.13");
                if (_procedures.IsNull != true) {
                    _val.push(_procedures.ValueArray[0].val);
                    valObj.IsNull = false;
                    _text.push(_procedures.ValueArray[0].text);
                }
                else {
                    if (TheCall.HasPatient == false) {
                        _val.push(NOTAPPLICABLE);
                        _text.push("Not Applicable");
                        valObj.NV = true;
                    }
                    else if (Utils.ReportingRequired("eProcedures.09") == true) {
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
                ProcedureGroup["eProcedures.13"] = valObj;
                delete valObj;

                ProcedureGroupArray.push(ProcedureGroup);
            }
        }
    };
    if (ProcedureGroupArray.length > 0) {
        eProcedures.ProcedureGroup = ProcedureGroupArray;
    }
    return eProcedures;
};

var seteProcedureGroupNull = function (TheCall) {
    var PROCG = new Object()

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
    PROCG["eProcedures.01"] = valObj;
    PROCG["eProcedures.02"] = valObj;
    PROCG["eProcedures.03"] = valObj;
    PROCG["eProcedures.05"] = valObj;
    PROCG["eProcedures.06"] = valObj;
    PROCG["eProcedures.07"] = valObj;
    PROCG["eProcedures.08"] = valObj;
    PROCG["eProcedures.10"] = valObj;


    var _val = [];
    var valObj = {};
    var _text = [];
    valObj.IsNull = true;

    if (TheCall.HasPatient == false) {
        if (Utils.ReportingRequired("eProcedures.09") == true) {
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
    PROCG["eProcedures.09"] = valObj;

    var _val = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;

    if (TheCall.HasPatient == false) {
        if (Utils.ReportingRequired("eProcedures.13") == true) {
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
    PROCG["eProcedures.13"] = valObj;

    return PROCG;
};
