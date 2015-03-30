var Utils = require('cloud/UtilitiesCC.js');
var NOTRECORDED = '7701003';
var NOTREPORTING = '7701005';
var NOTAPPLICABLE = '7701001';
exports.seteOther = function (TheCall) {

    var eOther = new Object();

    var pOther = new Object();

    pOther = TheCall.pOther
    eOther.IsValid = false;

    if (pOther.HasDataSet == false) {
        eOther = seteOtherNull(TheCall)
        return eOther;
    }
    else {
        if (typeof pOther.attributes.elements != 'undefined') {
            var _eL = []
            _eL = pOther.attributes.elements
            if (_eL.length > 0) {
                eOther.IsValid = true;

                //eOther.01////////
                var _other = []
                var _val = [];
                var _text = [];
                var valObj = {};
                valObj.IsNull = true;
                _other = Utils.getValue(_eL, "eOther.01");
                if (_other.IsNull != true) {
                    _val = _other.ValueArray[0].val;
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                    _text.push(_other.ValueArray[0].text);
                }
                else {
                    _val = "9923001";
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                    _text.push("No");
                };
                valObj.CodeText = _text.slice(0);
                valObj.vSet = _val.slice(0);
                eOther["eOther.01"] = valObj;
                delete valObj;


                //eOther.02//////////
                var _other = []
                var _val = [];
                var _text = [];
                var valObj = {};
                valObj.IsNull = true;
                _other = Utils.getValue(_eL, "eOther.02");
                if (_other.IsNull != true) {
                    for (var i = 0; i < _other.ValueArray.length; i++) {
                        if ((_other.ValueArray[i].HasValue == true) && (_val.indexOf(_other.ValueArray[i].val) == -1)) {
                            _val.push(_other.ValueArray[i].val);
                            _text.push(_other.ValueArray[i].text);
                            valObj.IsNull = false;
                        }
                    };
                    valObj.CodeText = _text.slice(0);
                    valObj.vSet = _val.slice(0);
                    valObj.vSet = _val.slice(0);
                    eOther["eOther.02"] = valObj;
                    delete valObj;
                };

                //eOther.07////////
                var _other = []
                var _val = [];
                var _text = [];
                var valObj = {};
                valObj.IsNull = true;
                _other = Utils.getValue(_eL, "eOther.07");
                if (_other.IsNull != true) {
                    for (var i = 0; i < _other.ValueArray.length; i++) {
                        if ((_other.ValueArray[i].HasValue == true) && (_val.indexOf(_other.ValueArray[i].val) == -1)) {
                            _val.push(_other.ValueArray[i].val);
                            _text.push(_other.ValueArray[i].text);
                            valObj.IsNull = false;
                        }
                    };
                    valObj.CodeText = _text.slice(0);
                    valObj.vSet = _val.slice(0);
                    eOther["eOther.07"] = valObj;
                    delete valObj;
                }


                //eOther..08//////////
                var _other = []
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;

                _other = Utils.getValue(_eL, "eOther.08");
                if (_other.IsNull != true) {

                    _val = _other.ValueArray[0].val;
                    valObj.IsNull = false;
                    _text.push(_other.ValueArray[0].text);
                    valObj.CodeText = _text.slice(0);
                    valObj.vSet = _val.slice(0);
                    eOther["eOther.08"] = valObj;
                    delete valObj;
                }
            }
        }
    };

    var EMSCrewMemberGroupArray = []
    ///////////////////eOther.EMSCrewMemberGroup

    if (typeof pOther.attributes.sections != 'undefined') {
        _sectionIndex = [];

        _sectionIndex = Utils.getSectionIndex(pOther, "eOther.EMSCrewMemberGroup");
        if (_sectionIndex[0] != -1) {
            for (var x = 0; x < _sectionIndex.length; x++) {
                var EMSCrewMemberGP = new Object();

                var _EMSC = [];
                _EMSC = pOther.attributes.sections[_sectionIndex[x]].attributes.elements;

                //eOther.03//////////
                var _other = []
                var _val = [];
                var _text = [];
                var valObj = {};
                valObj.IsNull = true;

                _other = Utils.getValue(_EMSC, "eOther.03");
                if (_other.IsNull != true) {
                    for (var i = 0; i < _other.ValueArray.length; i++) {
                        if ((_other.ValueArray[i].HasValue == true) && (_val.indexOf(_other.ValueArray[i].val) == -1)) {
                            _val.push(_other.ValueArray[i].val);
                            _text.push(_other.ValueArray[i].text);
                            valObj.IsNull = false;
                        }
                    };
                    valObj.CodeText = _text.slice(0);
                    valObj.vSet = _val.slice(0);
                    EMSCrewMemberGP["eOther.03"] = valObj;
                    delete valObj;
                };

                //eOther.04///////////
                var _other = []
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _other = Utils.getValue(_EMSC, "eOther.04");
                if (_other.IsNull != true) {
                    _val = _other.ValueArray[0].val;
                    valObj.IsNull = false;

                    valObj.vSet = _val.slice(0);
                    EMSCrewMemberGP["eOther.04"] = valObj;
                    delete valObj;
                };

                //eOther.05/////////
                var _other = []
                var _val = [];
                var _text = [];
                var valObj = {};
                valObj.IsNull = true;
                _other = Utils.getValue(_EMSC, "eOther.05");

                if (_other.IsNull != true) {
                    _val = _other.ValueArray[0].val;
                    valObj.IsNull = false;
                    EMSCrewMemberGP["WorkInjury"] = true;
                    _text.push(_other.ValueArray[0].text);
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
                eOther["eOther.05"] = valObj;
                delete valObj;

                //eOther.06/////////
                var _other = []
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _other = Utils.getValue(_EMSC, "eOther.06");
                if (_other.IsNull != true) {
                    for (var i = 0; i < _other.ValueArray.length; i++) {
                        if ((_other.ValueArray[i].HasValue == true) && (_val.indexOf(_other.ValueArray[i].val) == -1)) {
                            _val.push(_other.ValueArray[i].val);
                            valObj.IsNull = false;
                        }
                    };
                    valObj.vSet = _val.slice(0);
                    EMSCrewMemberGP["eOther.06"] = valObj;
                    delete valObj;
                };
                EMSCrewMemberGroupArray.push(EMSCrewMemberGP);
            };
            eOther.EMSCrewMemberGroup = EMSCrewMemberGroupArray.slice();
        }
    };

    ///////////////////eOther.FileGroup
    var _sI = [];
    _sI = Utils.getSectionIndex(pOther, "eOther.FileGroup");
    if (_sI[0] != -1) {
        var FGArray = [];
        for (var x = 0; x < _sI.length; x++) {
            var _eFG = [];
            _eFG = pOther.attributes.sections[_sectionIndex[x]].attributes.elements

            var FileGroup = new Object();

            //eOther.09//////////
            var _other = []
            var _val = [];
            var _text = [];
            var valObj = {};
            valObj.IsNull = true;

            _other = Utils.getValue(_eFG, "eOther.09");
            if (_other.IsNull != true) {
                _val = _other.ValueArray[0].val;
                valObj.IsNull = false;
                _text.push(_other.ValueArray[0].text);
                valObj.CodeText = _text.slice(0);
                valObj.vSet = _val.slice(0);
                FileGroup["eOther.09"] = valObj;
                delete valObj;
            };

            //eOther.10//////////
            var _other = []
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;

            _other = Utils.getValue(_eFG, "eOther.10");
            if (_other.IsNull != true) {
                _val = _other.ValueArray[0].val;
                valObj.IsNull = false;

                valObj.vSet = _val.slice(0);
                FileGroup["eOther.10"] = valObj;
                delete valObj;
            };


            //eOther.11//////////
            var _other = []
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _other = Utils.getValue(_eFG, "eOther.11");
            if (_other.IsNull != true) {
                _val = _other.ValueArray[0].val;
                valObj.IsNull = false;

                valObj.vSet = _val.slice(0);
                FileGroup["eOther.11"] = valObj;
                delete valObj;
            };
            FGArray.push(FileGroup)
        };
        eOther.FileGroup = FGArray.slice(0);
    };


    /////////////////////////////
    var sigGroupArray = [];
    var _s2 = [];
    _s2 = Utils.getSectionIndex(pOther, "eOther.SignatureGroup");
    if (_s2[0] != -1) {
        for (var x = 0; x < _s2.length; x++) {
            var _eSG = []
            _eSG = pOther.attributes.sections[_s2[x]].attributes.elements
            var SignatureGroup = {};

            //Other.12////////
            var _other = []
            var _val = [];
            var _text = [];
            var valObj = {};
            valObj.IsNull = true;

            _other = Utils.getValue(_eSG, "eOther.12");
            if (_other.IsNull != true) {
                _val = _other.ValueArray[0].val;
                valObj.IsNull = false;
                _text.push(_other.ValueArray[0].text);
                valObj.CodeText = _text.slice(0);
                valObj.vSet = _val.slice(0);
                SignatureGroup["eOther.12"] = valObj;
                delete valObj;
            };


            //eOther.13
            var _other = []
            var _val = [];
            var _text = [];
            var valObj = {};
            valObj.IsNull = true;

            _other = Utils.getValue(_eSG, "eOther.13");
            if (_other.IsNull != true) {
                _val = _other.ValueArray[0].val;
                valObj.IsNull = false;
                _text.push(_other.ValueArray[0].text);
                valObj.CodeText = _text.slice(0);
                valObj.vSet = _val.slice(0);
                SignatureGroup["eOther.13"] = valObj;
                delete valObj;
            };


            //ether.14/////////
            var _other = [];
            var _text = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;

            _other = Utils.getValue(_eSG, "eOther.14");
            if (_other.IsNull != true) {
                _val = _other.ValueArray[0].val;
                valObj.IsNull = false;
                _text.push(_other.ValueArray[0].text);
                valObj.CodeText = _text.slice(0);
                valObj.vSet = _val.slice(0);
                SignatureGroup["eOther.14"] = valObj;
                delete valObj;

            };
            //eOther.15//////
            var _other = [];
            var _text = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;

            _other = Utils.getValue(_eSG, "eOther.15");
            if (_other.IsNull != true) {
                _val = _other.ValueArray[0].val;
                valObj.IsNull = false;
                _text.push(_other.ValueArray[0].text);
                valObj.CodeText = _text.slice(0);
                valObj.vSet = _val.slice(0);
                SignatureGroup["eOther.15"] = valObj;
                delete valObj;
            };

            //eOther.16/////////
            var _other = []
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;

            _other = Utils.getValue(_eSG, "eOther.16");
            if (_other.IsNull != true) {
                _val = _other.ValueArray[0].val;
                valObj.IsNull = false;

                valObj.vSet = _val.slice(0);
                SignatureGroup["eOther.16"] = valObj;
                delete valObj;
            };

            //eOther.17////////
            var _other = []
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;

            _other = Utils.getValue(_eSG, "eOther.17");
            if (_other.IsNull != true) {
                _val = _other.ValueArray[0].val;
                valObj.IsNull = false;

                valObj.vSet = _val.slice(0);
                SignatureGroup["eOther.17"] = valObj;
                delete valObj;
            };

            //eOther.18///////
            var _other = []
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;

            _other = Utils.getValue(_eSG, "eOther.18");
            if (_other.IsNull != true) {
                _val = _other.ValueArray[0].val;
                valObj.IsNull = false;

                valObj.vSet = _val.slice(0);
                SignatureGroup["eOther.18"] = valObj;
                delete valObj;
            };

            //eOther.19//////////
            var _other = []
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;

            _other = Utils.getValue(_eSG, "eOther.19");
            if (_other.IsNull != true) {
                _val = _other.ValueArray[0].val;
                valObj.IsNull = false;

                valObj.vSet = _val.slice(0);
                SignatureGroup["eOther.19"] = valObj;
                delete valObj;
            };

            //eOther.20///////
            var _other = []
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;

            _other = Utils.getValue(_eSG, "eOther.20");
            if (_other.IsNull != true) {
                _val = _other.ValueArray[0].val;
                valObj.IsNull = false;

                valObj.vSet = _val.slice(0);
                SignatureGroup["eOther.20"] = valObj;
                delete valObj;
            };
            //eOther.21/////////
            var _other = []
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;

            _other = Utils.getValue(_eSG, "eOther.21");
            if (_other.IsNull != true) {
                _val = _other.ValueArray[0].val;
                valObj.IsNull = false;

                valObj.vSet = _val.slice(0);
                SignatureGroup["eOther.21"] = valObj;
                delete valObj;
            };
            sigGroupArray.push(SignatureGroup)
        };
        eOther.SignatureGroup = sigGroupArray;
    };

    return eOther;
};
var seteOtherNull = function (TheCall) {
    var eo = new Object();
    var EMSCrewMemberGroup = new Object();


    //EMSCrewMemberGroup.eOther.05
    var _val = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;

    if (TheCall.IsCancelled == false) {
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
    EMSCrewMemberGroup["Other.05"] = valObj;
    delete valObj;


    //EMSCrewMemberGroup.eOther.08
    var _val = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;

    if (TheCall.IsCancelled == false) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable");
        valObj.NV = true;
    }
    else if (Utils.ReportingRequired("eOther.06") == true) {
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
    EMSCrewMemberGroup["eOther.06"] = valObj;
    delete valObj;

    //eOther.08
    var _val = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;

    if (TheCall.IsCancelled == false) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable");
        valObj.NV = true;
    }
    else if (Utils.ReportingRequired("eOther.08") == true) {
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
    eo["eOther.08"] = valObj;
    delete valObj;

    eo.EMSCrewMemberGroup = EMSCrewMemberGroup;
    return eo;
}