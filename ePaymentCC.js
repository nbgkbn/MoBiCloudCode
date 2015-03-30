var Utils = require('cloud/UtilitiesCC.js');
var NOTRECORDED = '7701003';
var NOTREPORTING = '7701005';
var NOTAPPLICABLE = '7701001';
exports.setePayment = function (TheCall) {

    var ePayment = new Object();
    var pPayment = new Object();
    pPayment = TheCall.pPayment;
    var Errors = [];

    if (pPayment.HasDataSet == false) {
        ePayment = setPaymentNull(TheCall);
    }
    else {
        if (typeof pPayment.attributes.elements != 'undefined') {
            ePayment = setPaymentNull(TheCall);
        }
        else {
            var _eP = [];
            _eP = pPayment.attributes.elements;
            if (_eP.length == 0) {
                ePayment = setPaymentNull(TheCall);
            }
            else {

                //////////////////ePayment.01   
                var _payment = [];
                var _val = [];
                var valObj = {};
                var _text = [];
                valObj.IsNull = true;
                _payment = Utils.getValue(_eP, "ePayment.01");
                if (_payment.IsNull != true) {
                    valObj.IsNull = false;
                    _val.push(_payment.ValueArray[0].val);
                    _text.push(_payment.ValueArray[0].text);
                    valObj.CodeText = _text.slice(0);
                }
                else {
                    if (TheCall.HasPatient == false) {
                        _val.push(NOTAPPLICABLE);
                        _text.push("Not Applicable")
                        valObj.NV = true;
                    }
                    else {
                        _val.push(NOTRECORDED);
                        _text.push("Not Recorded")
                        valObj.NV = true;
                    }
                };
                valObj.vSet = _val.slice(0);
                ePayment["ePayment.01"] = valObj;
                delete valObj;
                //////////////////ePayment.08
                var _payment = [];
                var _val = [];
                var _text = [];
                var valObj = {};
                valObj.IsNull = true;
                _payment = Utils.getValue(_eP, "ePayment.08");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);
                    _text.push(_payment.ValueArray[0].text);
                    valObj.CodeText = _text.slice(0);
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                    ePayment["ePayment.08"] = valObj;
                    delete valObj;
                };


                //////////////////ePayment.40
                var _payment = [];
                var _val = [];
                var _text = [];
                var valObj = {};
                valObj.IsNull = true;
                _payment = Utils.getValue(_eP, "ePayment.40");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);
                    valObj.IsNull = false;
                    _text.push(_payment.ValueArray[0].text);
                    valObj.CodeText = _text.slice(0);
                    valObj.vSet = _val.slice(0);
                    ePayment["ePayment.40"] = valObj;
                    delete valObj;
                };


                //////////////////ePayment.41
                var _payment = [];
                var _val = [];
                var _text = [];
                var valObj = {};
                valObj.IsNull = true;
                _payment = Utils.getValue(_eP, "ePayment.41");
                if (_payment.IsNull != true) {
                    for (var i = 0; i < _payment.ValueArray.length; i++) {
                        if ((_payment.ValueArray[i].HasValue == true) && (_val.indexOf(_payment.ValueArray[i].val) == -1)) {
                            _val.push(_payment.ValueArray[i].val);
                            _text.push(_payment.ValueArray[i].text);

                            valObj.IsNull = false;
                        }
                    };
                    valObj.CodeText = _text.slice(0);
                    valObj.vSet = _val.slice(0);
                    ePayment["ePayment.41"] = valObj;
                    delete valObj;
                };

                //////////////////ePayment.42
                var _payment = [];
                var _text = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _payment = Utils.getValue(_eP, "ePayment.42");
                if (_payment.IsNull != true) {
                    for (var i = 0; i < _payment.ValueArray.length; i++) {
                        if ((_payment.ValueArray[i].HasValue == true) && (_val.indexOf(_payment.ValueArray[i].val) == -1)) {
                            _val.push(_payment.ValueArray[i].val);
                            _text.push(_payment.ValueArray[i].text);
                            valObj.IsNull = false;
                        }
                    };
                    valObj.CodeText = _text.slice(0);
                    valObj.vSet = _val.slice(0);
                    ePayment["ePayment.42"] = valObj;
                    delete valObj;
                };


                //////////////////ePayment.43
                var _payment = [];
                var _val = [];
                var _text = [];
                var valObj = {};
                valObj.IsNull = true;
                _payment = Utils.getValue(_eP, "ePayment.43");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);
                    valObj.IsNull = false;
                    _text.push(_payment.ValueArray[0].text);
                    valObj.CodeText = _text.slice(0);
                    valObj.vSet = _val.slice(0);
                    ePayment["ePayment.43"] = valObj;
                    delete valObj;
                };


                //////////////////ePayment.44
                var _val = [];
                var _text = [];
                var valObj = {};
                valObj.IsNull = true;
                _payment = Utils.getValue(_eP, "ePayment.44");
                if (_payment.IsNull != true) {
                    for (var i = 0; i < _payment.ValueArray.length; i++) {
                        if ((_payment.ValueArray[i].HasValue == true) && (_val.indexOf(_payment.ValueArray[i].val) == -1)) {
                            _val.push(_payment.ValueArray[i].val);
                            _text.push(_payment.ValueArray[i].text);

                            valObj.IsNull = false;
                        }
                    };
                    valObj.CodeText = _text.slice(0);
                    valObj.vSet = _val.slice(0);
                    ePayment["ePayment.44"] = valObj;
                    delete valObj;
                };



                //////////////////ePayment.45
                var _payment = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _payment = Utils.getValue(_eP, "ePayment.45");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                    ePayment["ePayment.45"] = valObj;
                    delete valObj;
                };


                //////////////////ePayment.46
                var _payment = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _payment = Utils.getValue(_eP, "ePayment.46");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                    ePayment["ePayment.46"] = valObj;
                    delete valObj;
                };

                //////////////////ePayment.47
                var _payment = [];
                var _val = [];
                var _text = [];
                var valObj = {};
                valObj.IsNull = true;
                _payment = Utils.getValue(_eP, "ePayment.47");
                if (_payment.IsNull != true) {
                    for (var i = 0; i < _payment.ValueArray.length; i++) {
                        if ((_payment.ValueArray[i].HasValue == true) && (_val.indexOf(_payment.ValueArray[i].val) == -1)) {
                            _val.push(_payment.ValueArray[i].val);
                            _text.push(_payment.ValueArray[i].text);
                            valObj.IsNull = false;
                        }
                    };
                    valObj.CodeText = _text.slice(0);
                    valObj.vSet = _val.slice(0);
                    ePayment["ePayment.47"] = valObj;
                    delete valObj;
                };

                //////////////////ePayment.48
                var _payment = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _payment = Utils.getValue(_eP, "ePayment.48");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                    ePayment["ePayment.48"] = valObj;
                    delete valObj;
                };

                //////////////////ePayment.49
                var _payment = [];
                var _val = [];
                var valObj = {};
                var _text = [];
                valObj.IsNull = true;
                _payment = Utils.getValue(_eP, "ePayment.49");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);
                    valObj.IsNull = false;
                    _text.push(_payment.ValueArray[0].text);
                    valObj.CodeText = _text.slice(0);

                    valObj.vSet = _val.slice(0);
                    ePayment["ePayment.49"] = valObj;
                    delete valObj;
                };


                // IF CANCELLED, NOT APPLICABLE
                //////////////////ePayment.50
                var _payment = [];
                var _val = [];
                var valObj = {};
                var _text = [];
                valObj.IsNull = true;
                _payment = Utils.getValue(_eP, "ePayment.50");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);
                    valObj.IsNull = false;
                    _text.push(_payment.ValueArray[0].text);
                    valObj.CodeText = _text.slice(0);
                }
                else {
                    if (TheCall.HasPatient == false) {
                        _val.push(NOTAPPLICABLE);
                        _text.push("Not Applicable")
                        valObj.NV = true;
                    }
                    else {
                        _val.push(NOTRECORDED);
                        _text.push("Not RECORDED")
                        valObj.NV = true;
                    }
                };
                valObj.vSet = _val.slice(0);
                ePayment["ePayment.50"] = valObj;
                delete valObj;


                //////////////////ePayment.51
                var _payment = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _payment = Utils.getValue(_eP, "ePayment.51");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                    ePayment["ePayment.51"] = valObj;
                    delete valObj;
                };


                //////////////////ePayment.47
                var _payment = [];
                var _val = [];
                var _text = [];
                var valObj = {};
                valObj.IsNull = true;
                _payment = Utils.getValue(_eP, "ePayment.52");
                if (_payment.IsNull != true) {
                    for (var i = 0; i < _payment.ValueArray.length; i++) {
                        if ((_payment.ValueArray[i].HasValue == true) && (_val.indexOf(_payment.ValueArray[i].val) == -1)) {
                            _val.push(_payment.ValueArray[i].val);
                            _text.push(_payment.ValueArray[i].text);
                            valObj.IsNull = false;
                        }
                    };
                    valObj.CodeText = _text.slice(0);
                    valObj.vSet = _val.slice(0);
                    ePayment["ePayment.52"] = valObj;
                    delete valObj;
                };


                //////////////////ePayment.53
                var _payment = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;

                _payment = Utils.getValue(_eP, "ePayment.53");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                    ePayment["ePayment.53"] = valObj;
                    delete valObj;
                };


                //////////////////ePayment.54
                var _payment = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _payment = Utils.getValue(_eP, "ePayment.54");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);
                    valObj.IsNull = false;

                    valObj.vSet = _val.slice(0);
                    ePayment["ePayment.54"] = valObj;
                    delete valObj;
                }
            }
        }
    };

    ////////////////////////////////

    if (typeof pPayment.attributes.sections != 'undefined') {
        var _sI = [];
        _sI = Utils.getSectionIndex(pPayment, "ePayment.CertificateGroup");
        if (_sI[0] != -1) {
            var CGr = new Object()
            var _cel = [];
            _cel = pPayment.attributes.sections[_sI[0]].attributes.elements;
            if (_cel.length != 0) {
                //////////////////ePayment.02
                var _payment = [];
                var _val = [];
                var _text = [];
                var valObj = {};
                valObj.IsNull = true;
                _payment = Utils.getValue(_cel, "ePayment.02");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);
                    valObj.IsNull = false;
                    _text.push(_payment.ValueArray[0].text);
                    valObj.CodeText = _text.slice(0);
                    valObj.vSet = _val.slice(0);
                    CGr["ePayment.02"] = valObj;
                    delete valObj;
                };


                //////////////////ePayment.03
                var _payment = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _payment = Utils.getValue(_cel, "ePayment.03");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                    CGr["ePayment.03"] = valObj;
                    delete valObj;;
                };

                //ePayment.04////////////
                var _payment = [];
                var _val = [];
                var _text = [];
                var valObj = {};
                valObj.IsNull = true;
                _payment = Utils.getValue(_cel, "ePayment.04");
                if (_payment.IsNull != true) {
                    for (var i = 0; i < _payment.ValueArray.length; i++) {
                        if ((_payment.ValueArray[i].HasValue == true) && (_val.indexOf(_payment.ValueArray[i].val) == -1)) {
                            _val.push(_payment.ValueArray[i].val);
                            _text.push(_payment.ValueArray[i].text);

                            valObj.IsNull = false;
                        }
                    };
                    valObj.CodeText = _text.slice(0);
                    valObj.vSet = _val.slice(0);
                    CGr["ePayment.04"] = valObj;
                    delete valObj;
                };

                //////////////////ePayment.05
                var _payment = [];
                var _val = [];
                var valObj = {};
                var _text = [];
                valObj.IsNull = true;
                _payment = Utils.getValue(_cel, "ePayment.05");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);
                    valObj.IsNull = false;
                    _text.push(_payment.ValueArray[0].text);
                    valObj.CodeText = _text.slice(0);
                    valObj.vSet = _val.slice(0);
                    CGr["ePayment.05"] = valObj;
                    delete valObj;
                };


                //////////////////ePayment.06
                var _payment = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;

                _payment = Utils.getValue(_cel, "ePayment.06");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);
                    valObj.IsNull = false;

                    valObj.vSet = _val.slice(0);
                    CGr["ePayment.06"] = valObj;
                    delete valObj;
                };


                //////////////////ePayment.07
                var _payment = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _payment = Utils.getValue(_cel, "ePayment.07");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);
                    valObj.IsNull = false;

                    valObj.vSet = _val.slice(0);
                    CGr["ePayment.07"] = valObj;
                    delete valObj;
                };
                ePayment.CertificateGroup = CGr;
            }
        };

        // IF NOT INSURED, SET TO NA!~
        ///////////////////////////////////////////////ePayment.InsuranceGroup
        var _sING = [];
        _sING = Utils.getSectionIndex(pPayment, "ePayment.InsuranceGroup");
        if (_sING[0] != -1) {
            InsGrpArray = [];
            for (var i = 0; i < _sING.length; i++) {
                var InsuranceGroup = new Object();
                var listOfElements = pPayment.attributes.sections[_sING[i]].attributes.elements

                //////////////////ePayment.09
                var _payment = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _payment = Utils.getValue(listOfElements, "ePayment.09");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                    InsuranceGroup["ePayment.09"] = valObj;
                    delete valObj;

                };


                //////////////////ePayment.10
                var _payment = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _payment = Utils.getValue(listOfElements, "ePayment.10");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                    InsuranceGroup["ePayment.10"] = valObj;
                    delete valObj;

                };

                //////////////////ePayment.11
                var _payment = [];
                var _val = [];
                var _text = [];
                var valObj = {};
                valObj.IsNull = true;
                _payment = Utils.getValue(listOfElements, "ePayment.11");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);
                    _text.push(_payment.ValueArray[0].text);
                    valObj.CodeText = _text.slice(0);
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                    InsuranceGroup["ePayment.11"] = valObj;
                    delete valObj;
                };


                //////////////////ePayment.12
                var _payment = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;

                _payment = Utils.getValue(listOfElements, "ePayment.12");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);

                    valObj.vSet = _val.slice(0);
                    InsuranceGroup["ePayment.12"] = valObj;
                    delete valObj;

                };

                //////////////////ePayment.13
                var _payment = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;

                _payment = Utils.getValue(listOfElements, "ePayment.13");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);

                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                    InsuranceGroup["ePayment.13"] = valObj;
                    delete valObj;
                };

                //////////////////ePayment.14
                var _payment = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;

                _payment = Utils.getValue(listOfElements, "ePayment.14");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);

                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                    InsuranceGroup["ePayment.14"] = valObj;
                    delete valObj;
                };


                //////////////////ePayment.15
                var _payment = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;

                _payment = Utils.getValue(listOfElements, "ePayment.15");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                    InsuranceGroup["ePayment.15"] = valObj;
                    delete valObj;
                };


                //////////////////ePayment.16
                var _payment = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;

                _payment = Utils.getValue(listOfElements, "ePayment.16");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);

                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                    InsuranceGroup["ePayment.16"] = valObj;
                    delete valObj;
                };


                //////////////////ePayment.17        
                var _payment = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;

                _payment = Utils.getValue(listOfElements, "ePayment.17");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                    InsuranceGroup["ePayment.17"] = valObj;
                    delete valObj;
                };


                //////////////////ePayment.18   
                var _payment = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;

                _payment = Utils.getValue(listOfElements, "ePayment.18");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                    InsuranceGroup["ePayment.18"] = valObj;
                    delete valObj;
                };


                //////////////////ePayment.19.
                var _payment = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _payment = Utils.getValue(listOfElements, "ePayment.19");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                    InsuranceGroup["ePayment.19"] = valObj;
                    delete valObj;
                };


                //////////////////ePayment.20
                var _payment = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;

                _payment = Utils.getValue(listOfElements, "ePayment.20");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                    InsuranceGroup["ePayment.20"] = valObj;
                    delete valObj;
                };


                //////////////////ePayment.21
                var _payment = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;

                _payment = Utils.getValue(listOfElements, "ePayment.21");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                    InsuranceGroup["ePayment.21"] = valObj;
                    delete valObj;
                };

                //////////////////ePayment.22
                var _payment = [];
                var _val = [];
                var valObj = {};
                var _text = [];
                valObj.IsNull = true;

                _payment = Utils.getValue(listOfElements, "ePayment.22");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);
                    _text.push(_payment.ValueArray[0].text);
                    valObj.CodeText = _text.slice(0);
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                    InsuranceGroup["ePayment.22"] = valObj;
                    delete valObj;
                };
                InsGrpArray.push(InsuranceGroup)
            };
            ePayment.InsuranceGroup = InsGrpArray.slice(0);
        };

        ///////////////////////////////////////////////ePayment.ClosestRelativeGroup

        var _cRG = [];
        _cRG = Utils.getSectionIndex(pPayment, "ePayment.ClosestRelativeGroup");
        if (_cRG[0] != -1) {
            var _clrg = [];
            var _CLR = new Object();
            _clrg = pPayment.attributes.sections[_cRG].attributes.elements;

            //////////////////ePayment.23
            var _payment = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;

            _payment = Utils.getValue(_clrg, "ePayment.23");
            if (_payment.IsNull != true) {
                _val.push(_payment.ValueArray[0].val);
                valObj.IsNull = false;

                valObj.vSet = _val.slice(0);
                _CLR["ePayment.23"] = valObj;
                delete valObj;
            };

            //////////////////ePayment.24
            var _payment = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;

            _payment = Utils.getValue(_clrg, "ePayment.24");
            if (_payment.IsNull != true) {
                _val.push(_payment.ValueArray[0].val);
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
                _CLR["ePayment.24"] = valObj;
                delete valObj;
            };


            //////////////////ePayment.25
            var _payment = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;

            _payment = Utils.getValue(_clrg, "ePayment.25");
            if (_payment.IsNull != true) {
                _val.push(_payment.ValueArray[0].val);
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
                _CLR["ePayment.25"] = valObj;
                delete valObj;
            };


            //////////////////ePayment.26
            var _payment = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _payment = Utils.getValue(_clrg, "ePayment.26");
            if (_payment.IsNull != true) {
                _val.push(_payment.ValueArray[0].val);
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
                _CLR["ePayment.26"] = valObj;
                delete valObj;
            };


            //////////////////ePayment.27
            var _payment = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;

            _payment = Utils.getValue(_clrg, "ePayment.27");
            if (_payment.IsNull != true) {
                _val.push(_payment.ValueArray[0].val);
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
                _CLR["ePayment.27"] = valObj;
                delete valObj;

            };

            //////////////////ePayment.28
            var _payment = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _payment = Utils.getValue(_clrg, "ePayment.28");
            if (_payment.IsNull != true) {
                _val.push(_payment.ValueArray[0].val);
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
                _CLR["ePayment.28"] = valObj;
                delete valObj;
            };

            //////////////////ePayment.29
            var _payment = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;

            _payment = Utils.getValue(_clrg, "ePayment.29");
            if (_payment.IsNull != true) {
                _val.push(_payment.ValueArray[0].val);
                valObj.IsNull = false;

                valObj.vSet = _val.slice(0);
                _CLR["ePayment.29"] = valObj;
                delete valObj;
            };


            //////////////////ePayment.30
            var _payment = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _payment = Utils.getValue(_clrg, "ePayment.30");
            if (_payment.IsNull != true) {
                _val.push(_payment.ValueArray[0].val);
                valObj.IsNull = false;

                valObj.vSet = _val.slice(0);
                _CLR["ePayment.30"] = valObj;
                delete valObj;

            };


            //////////////////ePayment.31
            var _payment = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _payment = Utils.getValue(_clrg, "ePayment.31");


            if (_payment.IsNull != true) {
                for (var i = 0; i < _payment.ValueArray.length; i++) {
                    _phoneType = "";
                    if ((_payment.ValueArray[i].HasValue == true) && (_val.indexOf(_payment.ValueArray[i].val) == -1)) {
                        var _pObj = new Object();
                        _val.push(_payment.ValueArray[i].val);

                    };
                }

                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
                _CLR["ePayment.31"] = valObj;
                delete valObj;
            };

            //////////////////ePayment.32
            var _payment = [];
            var _val = [];
            var valObj = {};
            var _text = [];
            valObj.IsNull = true;

            _payment = Utils.getValue(_clrg, "ePayment.32");
            if (_payment.IsNull != true) {
                _val.push(_payment.ValueArray[0].val);
                valObj.IsNull = false;
                _text.push(_payment.ValueArray[0].text);
                valObj.CodeText = _text.slice(0);
                valObj.vSet = _val.slice(0);
                _CLR["ePayment.32"] = valObj;
                delete valObj;
            };
            ePayment["ClosestRelativeGroup"] = _CLR;
        };

        /////////////////////////////ePayment.EmployerGroup

        _sectionIndex = Utils.getSectionIndex(pPayment, "ePayment.EmployerGroup");
        if (_sectionIndex[0] != -1) {
            var _eg = [];
            var _EMP = new Object();
            _eg = pPayment.attributes.sections[_sectionIndex].attributes.elements

            //////////////////ePayment.33
            var _payment = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _payment = Utils.getValue(_eg, "ePayment.33");
            if (_payment.IsNull != true) {
                _val.push(_payment.ValueArray[0].val);
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
                _EMP["ePayment.33"] = valObj;
                delete valObj;
            };

            //////////////////ePayment.34
            var _payment = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _payment = Utils.getValue(_eg, "ePayment.34");
            if (_payment.IsNull != true) {
                _val.push(_payment.ValueArray[0].val);
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
                _EMP["ePayment.34"] = valObj;
                delete valObj;
            };


            //////////////////ePayment.35
            var _payment = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _payment = Utils.getValue(_eg, "ePayment.35");
            if (_payment.IsNull != true) {
                _val.push(_payment.ValueArray[0].val);
                valObj.IsNull = false;

                valObj.vSet = _val.slice(0);
                _EMP["ePayment.35"] = valObj;
                delete valObj;
            };


            //////////////////ePayment.36
            var _payment = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _payment = Utils.getValue(_eg, "ePayment.36");
            if (_payment.IsNull != true) {
                _val.push(_payment.ValueArray[0].val);
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
                _EMP["ePayment.36"] = valObj;
                delete valObj;
            };


            //////////////////ePayment.37
            var _payment = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _payment = Utils.getValue(_eg, "ePayment.37");
            if (_payment.IsNull != true) {
                _val.push(_payment.ValueArray[0].val);
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
                _EMP["ePayment.37"] = valObj;
                delete valObj;
            };


            //////////////////ePayment.38
            var _payment = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _payment = Utils.getValue(_eg, "ePayment.38");
            if (_payment.IsNull != true) {
                _val.push(_payment.ValueArray[0].val);
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
                _EMP["ePayment.38"] = valObj;
                delete valObj;
            };


            //////////////////ePayment.39
            var _payment = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _payment = Utils.getValue(_eg, "ePayment.39");
            if (_payment.IsNull != true) {
                valObj.IsNull = false;
                for (var i = 0; i < _payment.ValueArray.length; i++) {
                    var _pObj = new Object();
                    _val.push(_payment.ValueArray[i].val)
                    //_phoneType = _payment.ValueArray[i].PhoneNumberType

                };
                valObj.vSet = _val.slice(0);
                _EMP["ePayment.39"] = valObj;
                delete valObj;
            }
            ePayment["EmployerGroup"] = _EMP;

        };

        ///////////////////////////////////////////////ePayment.SupplyItemGroup

        var _sIG = [];
        _sIG = Utils.getSectionIndex(pPayment, "ePayment.SupplyItemGroup");
        if (_sIG[0] != -1) {
            SupplyGrpArray = [];
            for (var i = 0; i < _sIG.length; i++) {
                var _lsp = pPayment.attributes.sections[_sIG[i]].attributes.elements;
                if (_lsp.length != 0) {
                    var SupplyGroup = new Object();

                    //////////////////ePayment.55
                    var _payment = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;

                    _payment = Utils.getValue(_lsp, "ePayment.55");
                    if (_payment.IsNull != true) {
                        _val.push(_payment.ValueArray[0].val);
                        valObj.IsNull = false;

                        valObj.vSet = _val.slice(0);
                        SupplyGroup["ePayment.55"] = valObj;
                        delete valObj;
                    };


                    //////////////////ePayment.56
                    var _payment = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _payment = Utils.getValue(_lsp, "ePayment.56");
                    if (_payment.IsNull != true) {
                        _val.push(_payment.ValueArray[0].val);
                        valObj.IsNull = false;
                        valObj.vSet = _val.slice(0);
                        SupplyGroup["ePayment.56"] = valObj;
                        delete valObj;
                    };
                    SupplyGrpArray.push(SupplyGroup);
                };
                if (SupplyGrpArray.length != 0) {
                    ePayment.SupplyItemGroup = SupplyGrpArray;
                }
            }
        }
    };
    return ePayment;
};


var setPaymentNull = function (TheCall) {
    var ePayment = new Object();
    //////////////////ePayment.01           
    var _val = [];
    var valObj = {};
    var _text = [];
    valObj.IsNull = true;
    if (TheCall.HasPatient == false) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable")
        valObj.NV = true;
    }
    else {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded")
        valObj.NV = true;
    }
    valObj.vSet = _val.slice(0);
    ePayment["ePayment.01"] = valObj;
    delete valObj;


    var _val = [];
    var valObj = {};
    var _text = [];
    valObj.IsNull = true;
    if (TheCall.HasPatient == false) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable")
        valObj.NV = true;
    }
    else {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded")
        valObj.NV = true;
    }

    valObj.vSet = _val.slice(0);
    ePayment["ePayment.50"] = valObj;
    delete valObj;

    return ePayment;
};
7