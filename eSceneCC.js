var Utils = require('cloud/UtilitiesCC.js');
var NOTRECORDED = '7701003';
var NOTREPORTING = '7701005';
var NOTAPPLICABLE = '7701001';
exports.seteScene = function (TheCall) {
    pScene = TheCall.pScene;
    var eScene = new Object();
    var Errors = [];

    //If No Data, set NV codes
    if (pScene.HasDataSet == false) {
        eScene = seteSceneNull(TheCall);
        return eScene
    };

    //If Not Data, set NV codes
    if (typeof pScene.attributes.elements == 'undefined') {
        eScene = seteSceneNull(TheCall);
        return eScene
    };

    var _eL = [];
    _eL = pScene.attributes.elements;
    if (_eL.length == 0) {
        eScene = seteSceneNull(TheCall);
        return eScene
    }
    else {
        //////////////////////eScene.01
        var _scene = [];
        var _val = [];
        var valObj = {};
        var _text = [];
        valObj.IsNull = true;
        _scene = Utils.getValue(_eL, "eScene.01");
        if (_scene.IsNull != true) {

            _val.push(_scene.ValueArray[0].val);
            valObj.IsNull = false;
            _text.push(_scene.ValueArray[0].text);
        }
        else {
            if (TheCall.IsCancelled == true) {
                if (TheCall.Cancelled == 'Prior') {
                    _val.push(NOTAPPLICABLE);
                    _text.push("Not Applicable");

                    valObj.NV = true;
                }
            }
            else {
                _val.push(NOTRECORDED);
                _text.push("Not Recorded");
                valObj.NV = true;
            }
        };

        valObj.CodeText = _text.slice(0);
        valObj.vSet = _val.slice(0);
        eScene["eScene.01"] = valObj;
        delete valObj;
    };

    ///////////////////////////////////////eScene.ResponderGroup
    if (typeof pScene.attributes.sections != 'undefined') {
        var _sRG = [];
        _sRG = Utils.getSectionIndex(pScene, "eScene.ResponderGroup");
        if (_sRG[0] != -1) {
            var RpdrGrpArray = [];
            for (var i = 0; i < _sRG.length; i++) {
                var ResponderGroup = new Object();
                var _eRG = [];
                _eRG = pScene.attributes.sections[_sRG[i]].attributes.elements

                //////////////////////eScene.02
                var _scene = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _scene = Utils.getValue(_eRG, "eScene.02");
                if (_scene.IsNull != true) {
                    _val.push(_scene.ValueArray[0].val);
                    valObj.IsNull = false;

                    valObj.vSet = _val.slice(0);
                    ResponderGroup["eScene.02"] = valObj;
                    delete valObj;
                };

                //////////////////////eScene.03
                var _scene = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _scene = Utils.getValue(_eRG, "eScene.03");
                if (_scene.IsNull != true) {
                    _val.push(_scene.ValueArray[0].val);
                    valObj.IsNull = false;

                    valObj.vSet = _val.slice(0);
                    ResponderGroup["eScene.03"] = valObj;
                    delete valObj;
                };

                //////////////////////eScene.04
                var _scene = [];
                var _val = [];
                var _text = [];
                var valObj = {};
                valObj.IsNull = true;
                _scene = Utils.getValue(_eRG, "eScene.04");
                if (_scene.IsNull != true) {
                    _val.push(_scene.ValueArray[0].val);
                    valObj.IsNull = false;
                    _text.push(_scene.ValueArray[0].text);
                    valObj.CodeText = _text.slice(0);
                    valObj.vSet = _val.slice(0);
                    ResponderGroup["eScene.04"] = valObj;
                    delete valObj;
                };
                RpdrGrpArray.push(ResponderGroup);
            };
            eScene.ResponderGroup = RpdrGrpArray;
        }
    };


    //////////////////////eScene.05    
    var _scene = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    _scene = Utils.getValue(_eL, "eScene.05");
    if (_scene.IsNull != true) {
        _val.push(_scene.ValueArray[0].val);
        valObj.IsNull = false;

        valObj.vSet = _val.slice(0);

        eScene["eScene.05"] = valObj;
        delete valObj;
    };


    //////////////////////eScene.06
    var _scene = [];
    var _val = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;
    _scene = Utils.getValue(_eL, "eScene.06");

    if (_scene.IsNull != true) {
        _val.push(_scene.ValueArray[0].val)
        valObj.IsNull = false;

        _text.push(_scene.ValueArray[0].text);
    }
    else {
        if (TheCall.IsCancelled == true) {
            if (TheCall.Cancelled == 'Prior') {
                _val.push(NOTAPPLICABLE);
                _text.push("Not Applicable");

                valObj.NV = true;
            }
        }
        else {
            _val.push(NOTRECORDED);
            _text.push("Not Recorded");
            valObj.NV = true;
        }
    };
    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    eScene["eScene.06"] = valObj;
    delete valObj;


    //////////////////////eScene.07
    var _scene = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    var _text = [];
    _scene = Utils.getValue(_eL, "eScene.07");
    if (_scene.IsNull != true) {
        _val.push(_scene.ValueArray[0].val)
        valObj.IsNull = false;
        _text.push(_scene.ValueArray[0].text);
    }
    else {
        if (TheCall.IsCancelled == true) {
            if (TheCall.Cancelled == 'Prior') {
                _val.push(NOTAPPLICABLE);
                _text.push("Not Applicable");

                valObj.NV = true;
            }
        }
        else {
            _val.push(NOTRECORDED);
            _text.push("Not Recorded");
            valObj.NV = true;
        }
    };
    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    eScene["eScene.07"] = valObj;
    delete valObj;


    //////////////////////eScene.08
    var _scene = [];
    var _val = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;
    _scene = Utils.getValue(_eL, "eScene.08");
    if (_scene.IsNull != true) {
        _val.push(_scene.ValueArray[0].val)
        _text.push(_scene.ValueArray[0].text);
        valObj.IsNull = false;
    }
    else {
        if (TheCall.IsCancelled == true) {
            if (TheCall.Cancelled == 'Prior') {
                _val.push(NOTAPPLICABLE);
                _text.push("Not Applicable");

                valObj.NV = true;
            }
        }
        else {
            _val.push(NOTRECORDED);
            _text.push("Not Recorded");
            valObj.NV = true;
        }
    };

    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    eScene["eScene.08"] = valObj;
    delete valObj;

    //////////////////////eScene.09
    var _scene = [];
    var _val = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;
    _scene = Utils.getValue(_eL, "eScene.09");
    if (_scene.IsNull != true) {
        _val.push(_scene.ValueArray[0].val)
        valObj.IsNull = false;
        _text.push(_scene.ValueArray[0].text);
    }
    else {
        if (TheCall.IsCancelled == true) {
            if (TheCall.Cancelled == 'Prior') {
                _val.push(NOTAPPLICABLE);
                _text.push("Not Applicable");

                valObj.NV = true;
            }
        }
        else {
            _val.push(NOTRECORDED);
            _text.push("Not Recorded");
            valObj.NV = true;
        }
    };
    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    eScene["eScene.09"] = valObj;
    delete valObj;

    //////////////////////eScene.10
    var _scene = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;

    _scene = Utils.getValue(_eL, "eScene.10");
    if (_scene.IsNull != true) {
        _val.push(_scene.ValueArray[0].val)
        valObj.IsNull = false;
    }
    else {
        if (TheCall.IsCancelled == true) {
            if (TheCall.Cancelled == 'Prior') {
                _val.push(NOTAPPLICABLE);
                _text.push("Not Applicable");

                valObj.NV = true;
            }
        }
        else if (Utils.ReportingRequired("eScene.10") == true) {
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
    eScene["eScene.10"] = valObj;
    delete valObj;


    //////////////////////eScene.11
    var _scene = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;

    _scene = Utils.getValue(_eL, "eScene.11");
    if (_scene.IsNull != true) {
        _val.push(_scene.ValueArray[0].val)
        valObj.IsNull = false;
    }
    else {
        if (TheCall.IsCancelled == true) {
            if (TheCall.Cancelled == 'Prior') {
                _val.push(NOTAPPLICABLE);
                _text.push("Not Applicable");

                valObj.NV = true;
            }
        }
        else if (Utils.ReportingRequired("eScene.11") == true) {
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
    eScene["eScene.11"] = valObj;
    delete valObj;


    //////////////////////eScene.12
    var _scene = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    _scene = Utils.getValue(_eL, "eScene.12");
    if (_scene.IsNull != true) {
        _val.push(_scene.ValueArray[0].val)
        valObj.IsNull = false;
        valObj.vSet = _val.slice(0);
        eScene["eScene.12"] = valObj;
        delete valObj;
    };

    //////////////////////eScene.13
    var _scene = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    _scene = Utils.getValue(_eL, "eScene.13");
    if (_scene.IsNull != true) {
        _val.push(_scene.ValueArray[0].val)
        valObj.IsNull = false;

        valObj.vSet = _val.slice(0);
        eScene["eScene.13"] = valObj;
        delete valObj;
    }

    //////////////////////eScene.14
    var _scene = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;

    _scene = Utils.getValue(_eL, "eScene.14");
    if (_scene.IsNull != true) {
        _val.push(_scene.ValueArray[0].val)
        valObj.IsNull = false;
    }
    else {
        if (TheCall.IsCancelled == true) {
            if (TheCall.Cancelled == 'Prior') {
                _val.push(NOTAPPLICABLE);
                _text.push("Not Applicable");

                valObj.NV = true;
            }
        }
        else if (Utils.ReportingRequired("eScene.14") == true) {
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
    eScene["eScene.14"] = valObj;
    delete valObj;


    //////////////////////eScene.15
    var _scene = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    _scene = Utils.getValue(_eL, "eScene.15");
    if (_scene.IsNull != true) {
        _val.push(_scene.ValueArray[0].val)
        valObj.IsNull = false;

    }
    else {
        if (TheCall.IsCancelled == true) {
            if (TheCall.Cancelled == 'Prior') {
                _val.push(NOTAPPLICABLE);
                _text.push("Not Applicable");

                valObj.NV = true;
            }
        }
        else if (Utils.ReportingRequired("eScene.15") == true) {
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
    //valObj.CodeText = _text.slice(0);
    eScene["eScene.15"] = valObj;
    delete valObj;


    //////////////////////eScene.16
    var _scene = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    _scene = Utils.getValue(_eL, "eScene.16");
    if (_scene.IsNull != true) {
        _val.push(_scene.ValueArray[0].val)
        valObj.IsNull = false;
    }
    else {
        if (TheCall.IsCancelled == true) {
            if (TheCall.Cancelled == 'Prior') {
                _val.push(NOTAPPLICABLE);
                _text.push("Not Applicable");
                valObj.NV = true;
            }
        }
        else if (Utils.ReportingRequired("eScene.16") == true) {
            _val.push(NOTRECORDED);
            _text.push("Not Recorded");
            valObj.NV = true;
        }
    };
    //if (vSet.length > 0) {
    //    valObj.vSet = _val.slice(0);
    //    eScene["eScene.16"] = valObj;
    //};
    valObj.vSet = _val.slice(0);
    eScene["eScene.16"] = valObj;
    delete valObj;


    //////////////////////eScene.17
    var _scene = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    _scene = Utils.getValue(_eL, "eScene.17");
    if (_scene.IsNull != true) {
        _val.push(_scene.ValueArray[0].val)
        valObj.IsNull = false;
    }
    else {
        if (TheCall.IsCancelled == true) {
            if (TheCall.Cancelled == 'Prior') {
                _val.push(NOTAPPLICABLE);
                _text.push("Not Applicable");
                valObj.NV = true;
            }
        }
        else if (Utils.ReportingRequired("eScene.17") == true) {
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
    eScene["eScene.17"] = valObj;
    delete valObj;


    //////////////////////eScene.18
    var _scene = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    _scene = Utils.getValue(_eL, "eScene.18");
    if (_scene.IsNull != true) {
        _val.push(_scene.ValueArray[0].val)
        valObj.IsNull = false;
    }
    else {
        if (TheCall.IsCancelled == true) {
            if (TheCall.Cancelled == 'Prior') {
                _val.push(NOTAPPLICABLE);
                _text.push("Not Applicable");
                valObj.NV = true;
            }
        }
        else {
            _val.push(NOTRECORDED);
            _text.push("Not Recorded");
            valObj.NV = true;
        }
    };
    valObj.vSet = _val.slice(0);
    eScene["eScene.18"] = valObj;
    delete valObj;


    //////////////////////eScene.19
    var _scene = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    _scene = Utils.getValue(_eL, "eScene.19");
    if (_scene.IsNull != true) {
        _val.push(_scene.ValueArray[0].val)
        valObj.IsNull = false;
    }
    else {
        if (TheCall.IsCancelled == true) {
            if (TheCall.Cancelled == 'Prior') {
                _val.push(NOTAPPLICABLE);
                _text.push("Not Applicable");
                valObj.NV = true;
            }
        }
        else {
            _val.push(NOTRECORDED);
            _text.push("Not Recorded");
            valObj.NV = true;
        }
    };
    valObj.vSet = _val.slice(0);
    eScene["eScene.19"] = valObj;
    delete valObj;


    //////////////////////eScene.20
    var _scene = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;

    _scene = Utils.getValue(_eL, "eScene.20");
    if (_scene.IsNull != true) {
        _val.push(_scene.ValueArray[0].val)
        valObj.IsNull = false;
    }
    else {
        if (TheCall.IsCancelled == true) {
            if (TheCall.Cancelled == 'Prior') {
                _val.push(NOTAPPLICABLE);
                _text.push("Not Applicable");
                valObj.NV = true;
            }
        }
        else if (Utils.ReportingRequired("eScene.20") == true) {
            _val.push(NOTRECORDED);
            _text.push("Not Recorded")
            valObj.NV = true;
        }
        else {
            _val.push(NOTREPORTING);
            _text.push("Not Reporting");
            valObj.NV = true;
        }
    };
    valObj.vSet = _val.slice(0);
    eScene["eScene.20"] = valObj;
    delete valObj;

    //////////////////////eScene.21
    var _scene = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    _scene = Utils.getValue(_eL, "eScene.21");
    if (_scene.IsNull != true) {
        _val.push(_scene.ValueArray[0].val)
        valObj.IsNull = false;
    }
    else {
        if (TheCall.IsCancelled == true) {
            if (TheCall.Cancelled == 'Prior') {
                _val.push(NOTAPPLICABLE);
                _text.push("Not Applicable");
                valObj.NV = true;
            }
        }
        else {
            _val.push(NOTRECORDED);
            _text.push("Not Recorded");
            valObj.NV = true;
        }
    };
    valObj.vSet = _val.slice(0);
    eScene["eScene.21"] = valObj;
    delete valObj;


    //////////////////////eScene.22
    var _scene = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    _scene = Utils.getValue(_eL, "eScene.22");
    if (_scene.IsNull != true) {
        _val.push(_scene.ValueArray[0].val)
        valObj.IsNull = false;
        valObj.vSet = _val.slice(0);
        eScene["eScene.22"] = valObj;
        delete valObj;
    };

    //////////////////////eScene.23
    var _scene = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;


    _scene = Utils.getValue(_eL, "eScene.23");
    if (_scene.IsNull != true) {
        _val.push(_scene.ValueArray[0].val)
        valObj.IsNull = false;
        valObj.vSet = _val.slice(0);
        eScene["eScene.23"] = valObj;
        delete valObj;

    };

    return eScene;
};

var seteSceneNull = function () {
    var eScene = new Object();

    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (TheCall.IsCancelled == true) {
        if (TheCall.Cancelled == 'Prior') {
            _val.push(NOTAPPLICABLE);
            _text.push("Not Applicable");
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
    eScene["eScene.01"] = valObj;
    eScene["eScene.06"] = valObj;
    eScene["eScene.07"] = valObj;
    eScene["eScene.08"] = valObj;
    eScene["eScene.09"] = valObj;
    eScene["eScene.14"] = valObj;
    eScene["eScene.15"] = valObj;
    eScene["eScene.16"] = valObj;
    eScene["eScene.18"] = valObj;
    eScene["eScene.19"] = valObj;
    eScene["eScene.21"] = valObj;
    delete valObj;


    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (TheCall.IsCancelled == true) {
        if (TheCall.Cancelled == 'Prior') {

            if (Utils.ReportingRequired("eScene.10") == true) {
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
    }
    else {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded");
        valObj.NV = true;
    };

    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    eScene["eScene.10"] = valObj;


    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (TheCall.IsCancelled == true) {
        if (TheCall.Cancelled == 'Prior') {
            if (Utils.ReportingRequired("eScene.17") == true) {
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
    }
    else {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded");
        valObj.NV = true;
    };

    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    eScene["eScene.17"] = valObj;


    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (TheCall.IsCancelled == true) {
        if (TheCall.Cancelled == 'Prior') {
            if (Utils.ReportingRequired("eScene.20") == true) {
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
    }
    else {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded");
        valObj.NV = true;
    };

    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    eScene["eScene.20"] = valObj;


    eScene.ErrorList = Errors;
    return eScene;
};
