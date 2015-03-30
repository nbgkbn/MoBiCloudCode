var Utils = require('cloud/UtilitiesCC.js');
var NOTRECORDED = '7701003';
var NOTREPORTING = '7701005';
var NOTAPPLICABLE = '7701001';
exports.seteInjury = function (TheCall) {
    //1:1
    var SeatGroupArray = new Array();
    var eInjury = new Object();
    var pInjury = new Object();
    var Errors = [];


    eInjury.IsValid = false;
    pInjury = TheCall.pInjury;

    var VehicleIncident = false;
    if (pInjury.HasDataSet == false) {
        eInjury = seteInjuryNull(TheCall);
        eInjury.ErrorList = Errors;
        return eInjury;
    };
    var _eL = [];
    _eL = pInjury.attributes.elements;
    if (_eL.length == 0) {
        eInjury.ErrorList = Errors;
        eInjury = seteInjuryNull(TheCall);
        return eInjury;
    }
    else {

        //eInjury.01///////////////////
        var _injury = [];
        var _val = [];
        var _text = [];
        var valObj = {};
        valObj.IsNull = true;
        _injury = Utils.getValue(_eL, "eInjury.01");
        if (_injury.IsNull != true) {
            for (var i = 0; i < _injury.ValueArray.length; i++) {
                if ((_injury.ValueArray[i].HasValue == true) && (_val.indexOf(_injury.ValueArray[i].val) == -1)) {
                    _val.push(_injury.ValueArray[i].val);
                    _text.push(_injury.ValueArray[i].text);
                    valObj.IsNull = false;
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
        eInjury["eInjury.01"] = valObj;
        delete valObj;




        //eInjury.02///////////////////
        var _injury = [];
        var _val = [];
        var _text = [];
        var valObj = {};
        valObj.IsNull = true;
        _injury = Utils.getValue(_eL, "eInjury.02");
        if (_injury.IsNull != true) {
            for (var i = 0; i < _injury.ValueArray.length; i++) {
                if ((_injury.ValueArray[i].HasValue == true) && (_val.indexOf(_injury.ValueArray[i].val) == -1)) {
                    _val.push(_injury.ValueArray[i].val);
                    _text.push(_injury.ValueArray[i].text);
                    valObj.IsNull = false;
                }
            }
        }
        else {
            if (TheCall.IsCancelled == true) {
                if (TheCall.Cancelled == 'Prior') {
                    _val.push(NOTAPPLICABLE);
                    _text.push("Not Applicable");
                    valObj.NV = true;
                }
            }
            else if (Utils.ReportingRequired("eInjury.02") == true) {
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
        eInjury["eInjury.02"] = valObj;
        delete valObj;


        //eInjury.03///////////////////
        var _injury = [];
        var _val = [];
        var _text = [];
        var valObj = {};
        valObj.IsNull = true;

        _injury = Utils.getValue(_eL, "eInjury.03");
        if (_injury.IsNull != true) {
            for (var i = 0; i < _injury.ValueArray.length; i++) {
                if ((_injury.ValueArray[i].HasValue == true) && (_val.indexOf(_injury.ValueArray[i].val) == -1)) {
                    _val.push(_injury.ValueArray[i].val);
                    _text.push(_injury.ValueArray[i].text);
                    valObj.IsNull = false;
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
        eInjury["eInjury.03"] = valObj;
        delete valObj;

        //eInjury.04///////////////////
        var _injury = [];
        var _val = [];
        var valObj = {};
        var _text = [];
        valObj.IsNull = true;
        _injury = Utils.getValue(_eL, "eInjury.04");
        if (_injury.IsNull == true) {
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
        else {
            if (_injury.HasPN == true) {
                _val.push("8801005");
                _text.push("Exam Finding Not Present");
                valObj.PN = true;
            }
            else {
                for (var i = 0; i < _injury.ValueArray.length; i++) {
                    if ((_injury.ValueArray[i].HasValue == true) && (_val.indexOf(_injury.ValueArray[i].val) == -1)) {
                        if (_injury.ValueArray[i].val == "2904001") //Auto v. Pedestrian/Bicyclist Thrown, Run Over, or > 20 MPH Impact
                        {
                            TheCall.isVehicleInjury = true;
                        }
                        else if (_injury.ValueArray[i].val == "2904007") //Crash Death in Same Passenger Compartment
                        {
                            TheCall.isVehicleInjury = true;
                        }
                        else if (_injury.ValueArray[i].val == "2904009") //Crash Ejection (partial or complete) from vehicle
                        {
                            TheCall.isVehicleInjury = true;
                        }
                        else if (_injury.ValueArray[i].val == "2904011") //	2904011	Crash Intrusion, including roof: > 12 in. occupant site; > 18 in. any site
                        {
                            TheCall.isVehicleInjury = true;
                        }
                        else if (_injury.ValueArray[i].val == "2904013") //2904013	Crash Vehicle Telemetry Data (AACN) Consistent with High Risk of Injury
                        {
                            TheCall.isVehicleInjury = true;
                        }
                        else if (_injury.ValueArray[i].val == "2904015") //2904015	Motorcycle Crash > 20 MPH
                        {
                            TheCall.isVehicleInjury = true;
                        };
                        _val.push(_injury.ValueArray[i].val);
                        _text.push(_injury.ValueArray[i].text);
                        valObj.IsNull = false;
                    }
                }
            }
        };
        valObj.CodeText = _text.slice(0);
        valObj.vSet = _val.slice(0);
        eInjury["eInjury.04"] = valObj;
        delete valObj;



        ///eInjury.05////////////    
        var _injury = [];
        var _text = [];

        var valObj = {};
        valObj.IsNull = true;

        _injury = Utils.getValue(_eL, "eInjury.05");
        if (_injury.IsNull != true) {
            _val.push(_injury.ValueArray[0].val);
            valObj.IsNull = false;

            valObj.vSet = _val.slice(0);
            eInjury["eInjury.05"] = valObj;
            delete valObj;
        };

        //eInjury.06///////////
        var _injury = [];
        var _val = [];
        var _text = [];
        var valObj = {};
        valObj.IsNull = true;

        _injury = Utils.getValue(_eL, "eInjury.06");
        if (_injury.IsNull != true) {
            _val.push(_injury.ValueArray[0].val);
            valObj.IsNull = false;
            _text.push(_injury.ValueArray[0].text);
            valObj.CodeText = _text.slice(0);
            valObj.vSet = _val.slice(0);
            eInjury["eInjury.06"] = valObj;
            delete valObj;
        };
        //eInjury.07/////////
        var _injury = [];
        var _val = [];
        var _text = [];
        var valObj = {};
        valObj.IsNull = true;

        _injury = Utils.getValue(_eL, "eInjury.07");
        if (_injury.IsNull != true) {
            for (var i = 0; i < _injury.ValueArray.length; i++) {
                if ((_injury.ValueArray[i].HasValue == true) && (_val.indexOf(_injury.ValueArray[i].val) == -1)) {
                    _val.push(_injury.ValueArray[i].val);
                    _text.push(_injury.ValueArray[i].text);
                }
            }
        }
        else {
            if (TheCall.IsCancelled == true) {
                _val.push(NOTAPPLICABLE);
                _text.push("Not Applicable");
                valObj.NV = true;
            }
            else if (TheCall.isVehicleInjury == false) {
                _val.push(NOTAPPLICABLE);
                _text.push("Not Applicable");
                valObj.NV = true;
            }
            else if (Utils.ReportingRequired("eInjury.07") == true) {
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
        valObj.IsNull = false;
        valObj.vSet = _val.slice(0);
        eInjury["eInjury.07"] = valObj;
        delete valObj;



        //eInjury.08//////////
        var _injury = [];
        var _text = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;

        _injury = Utils.getValue(_eL, "eInjury.08");
        if (_injury.IsNull != true) {
            for (var i = 0; i < _injury.ValueArray.length; i++) {
                if ((_injury.ValueArray[i].HasValue == true) && (_val.indexOf(_injury.ValueArray[i].val) == -1)) {
                    _val.push(_injury.ValueArray[i].val);
                    _text.push(_injury.ValueArray[i].text);
                    valObj.IsNull = false;
                }
            };
            valObj.CodeText = _text.slice(0);
            valObj.vSet = _val.slice(0);
            eInjury["eInjury.08"] = valObj;
            delete valObj;
        };


        //eInjury.09/////////////
        var _injury = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _injury = Utils.getValue(_eL, "eInjury.09");
        if (_injury.IsNull != true) {
            _val.push(_injury.ValueArray[0].val);
            valObj.IsNull = false;

            valObj.vSet = _val.slice(0);
            eInjury["eInjury.09"] = valObj;
            delete valObj;
        };

        //eInjury.10///////////////
        var _injury = [];
        var _text = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _injury = Utils.getValue(_eL, "eInjury.10");
        if (_injury.IsNull != true) {
            for (var i = 0; i < _injury.ValueArray.length; i++) {
                if ((_injury.ValueArray[i].HasValue == true) && (_val.indexOf(_injury.ValueArray[i].val) == -1)) {
                    _val.push(_injury.ValueArray[i].val);
                    _text.push(_injury.ValueArray[i].text);
                    valObj.IsNull = false;
                }
            };
            valObj.CodeText = _text.slice(0);
            valObj.vSet = _val.slice(0);
            eInjury["eInjury.10"] = valObj;
            delete valObj;
        };


        ///////////////////////////////////////////            
        if (typeof pInjury.attributes.sections != 'undefined') {
            var _cCG = [];  //if no sections, NA values                        
            _cCG = Utils.getSectionIndex(pInjury, "eInjury.CollisionGroup");
            if (_cCG[0] != -1) {

                var _eCCG = [];
                var _eCCG = pInjury.attributes.sections[_cCG].attributes.elements;
                var _ICG = new Object();
                if (_eCCG.length > 0) {

                    //eInjury.11///////
                    var _injury = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _injury = Utils.getValue(_eCCG, "eInjury.11");
                    if (_injury.IsNull != true) {
                        _val.push(_injury.ValueArray[0].val);
                        valObj.IsNull = false;

                        valObj.vSet = _val.slice(0);
                        _ICG["eInjury.11"] = valObj;
                        delete valObj;
                    };

                    //eInjury.12///////////
                    var _injury = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _injury = Utils.getValue(_eCCG, "eInjury.12");
                    if (_injury.IsNull != true) {

                        _val.push(_injury.ValueArray[0].val);
                        valObj.IsNull = false;

                        valObj.vSet = _val.slice(0);
                        _ICG["eInjury.12"] = valObj;
                        delete valObj;
                    };

                    //eInjury.13/////////////
                    var _injury = [];
                    var _val = [];
                    var valObj = {};

                    valObj.IsNull = true;
                    _injury = Utils.getValue(_eCCG, "eInjury.13");
                    if (_injury.IsNull != true) {
                        for (var i = 0; i < _injury.ValueArray.length; i++) {
                            var PhoneNumber = {};
                            PhoneNumber.val = _injury.ValueArray[i].val
                            if (typeof _injury.ValueArray[i].PhoneNumberType != 'undefined') {
                                if (_injury.ValueArray[i].PhoneNumberType != null) {
                                    PhoneNumber.Type = _injury.ValueArray[i].PhoneNumberType;
                                }
                            }
                            _val.push(PhoneNumber)
                            delete PhoneNumber;
                        };
                        valObj.IsNull = false;
                    };
                    valObj.vSet = _val.slice(0);
                    _ICG["eInjury.13"] = valObj;
                    delete valObj;


                    //eInjury.14///////////////
                    var _injury = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _injury = Utils.getValue(_eCCG, "eInjury.14");
                    if (_injury.IsNull != true) {
                        _val.push(_injury.ValueArray[0].val);
                        valObj.IsNull = false;

                        valObj.vSet = _val.slice(0);
                        _ICG["eInjury.14"] = valObj;
                        delete valObj;
                    };

                    //eInjury.15//////////////  
                    var _injury = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _injury = Utils.getValue(_eCCG, "eInjury.15");
                    if (_injury.IsNull != true) {
                        _val.push(_injury.ValueArray[0].val);
                        valObj.IsNull = false;

                        valObj.vSet = _val.slice(0);
                        _ICG["eInjury.15"] = valObj;
                        delete valObj;
                    };

                    //eInjury.16//////////////
                    var _injury = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _injury = Utils.getValue(_eCCG, "eInjury.16");
                    if (_injury.IsNull != true) {
                        _val.push(_injury.ValueArray[0].val);
                        valObj.IsNull = false;

                        valObj.vSet = _val.slice(0);
                        _ICG["eInjury.16"] = valObj;
                        delete valObj;
                    };

                    //eInjury.17//////////////

                    var _injury = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;

                    _injury = Utils.getValue(_eCCG, "eInjury.17");
                    if (_injury.IsNull != true) {
                        _val.push(_injury.ValueArray[0].val);
                        valObj.IsNull = false;
                        valObj.vSet = _val.slice(0);
                        _ICG["eInjury.17"] = valObj;
                        delete valObj;
                    };

                    //eInjury.18//////////////
                    var _injury = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _injury = Utils.getValue(_eCCG, "eInjury.18");
                    if (_injury.IsNull != true) {
                        _val.push(_injury.ValueArray[0].val);
                        valObj.IsNull = false;

                        valObj.vSet = _val.slice(0);
                        _ICG["eInjury.18"] = valObj;
                        delete valObj;
                    };
                    //eInjury.19//////////////
                    var _injury = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;

                    _injury = Utils.getValue(_eCCG, "eInjury.19");
                    if (_injury.IsNull != true) {
                        _val.push(_injury.ValueArray[0].val);
                        valObj.IsNull = false;

                        valObj.vSet = _val.slice(0);
                        eInjury["eInjury.19"] = valObj;
                        delete valObj;
                    };

                    //eInjury.20//////////////
                    var _injury = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _injury = Utils.getValue(_eCCG, "eInjury.20");
                    if (_injury.IsNull != true) {
                        _val.push(_injury.ValueArray[0].val);
                        valObj.IsNull = false;

                        valObj.vSet = _val.slice(0);
                        eInjury["eInjury.20"] = valObj;
                        delete valObj;
                    };

                    //eInjury.21//////////////
                    var _injury = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _injury = Utils.getValue(_eCCG, "eInjury.21");
                    if (_injury.IsNull != true) {
                        _val.push(_injury.ValueArray[0].val);
                        valObj.IsNull = false;

                        valObj.vSet = _val.slice(0);
                        eInjury["eInjury.21"] = valObj;
                        delete valObj;
                    };
                    //eInjury.22//////////////
                    var _injury = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _injury = Utils.getValue(_eCCG, "eInjury.22");
                    if (_injury.IsNull != true) {
                        for (var i = 0; i < _injury.ValueArray.length; i++) {
                            var DeltaVelocity = {};
                            DeltaVelocity.val = _injury.ValueArray[i].val

                            if (typeof _injury.ValueArray[i].Params != 'undefined') {

                                if (typeof _injury.ValueArray[i].Params.VelocityUnit != 'undefined') {
                                    if (_injury.ValueArray[i].Params.VelocityUnit != null) {
                                        DeltaVelocity.VelocityUnit = _injury.ValueArray[i].Params.VelocityUnit.value;
                                    }
                                };

                                if (typeof _injury.ValueArray[i].Params.DeltaVelocityOrdinal != 'undefined') {
                                    if (_injury.ValueArray[i].Params.DeltaVelocityOrdinal != null) {
                                        DeltaVelocity.DeltaVelocityOrdinal = _injury.ValueArray[i].Params.DeltaVelocityOrdinal.value;
                                    }
                                };
                            }
                            valObj.IsNull = false;
                            _val.push(DeltaVelocity)
                            delete DeltaVelocity;
                        }
                        valObj.vSet = _val.slice(0);
                        eInjury["eInjury.22"] = valObj;
                        delete valObj;
                    };

                    //eInjury.23///////////
                    var _injury = [];
                    var _text = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _injury = Utils.getValue(_eCCG, "eInjury.23");
                    if (_injury.IsNull != true) {
                        _val.push(_injury.ValueArray[0].val);
                        _text.push(_injury.ValueArray[0].text);
                        valObj.CodeText = _text.slice(0);

                        valObj.IsNull = false;
                        valObj.vSet = _val.slice(0);
                        eInjury["eInjury.23"] = valObj;
                        delete valObj;
                    };


                    //eInjury.24/////////////
                    var _injury = [];
                    var _val = [];
                    var valObj = {};
                    _injury = Utils.getValue(_eCCG, "eInjury.24");
                    if (_injury.IsNull != true) {
                        _val.push(_injury.ValueArray[0].val);
                        valObj.IsNull = false;

                        valObj.vSet = _val.slice(0);
                        eInjury["eInjury.24"] = valObj;
                        delete valObj;
                    };

                    //eInjury.25////////
                    var _injury = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;

                    _injury = Utils.getValue(_eCCG, "eInjury.25");
                    if (_injury.IsNull != true) {
                        _val = _einjury.ValueArray[0].val;
                        valObj.IsNull = false;
                        valObj.vSet = _val.slice(0);
                        eInjury["eInjury.25"] = valObj;
                        delete valObj;
                    };


                    if (typeof pInjury.attributes.sections != 'undefined') {
                        var _eSG = -1;  //if no sections, NA values   
                        _eSG = Utils.getSectionIndex(pInjury.attributes.sections[0], "eInjury.SeatGroup");
                        if (_eSG != -1) {
                            //var _eSG = [];
                            //var _eSG = pInjury.attributes.sections[0].attributes.sections[_cSG].attributes.elements;    
                            for (var x = 0; x <= _eSG.length - 1; x++) {
                                var _elementList = [];
                                _elementList = pInjury.attributes.sections[0].attributes.sections[_eSG[x]].attributes.elements;
                                var SG = new Object();

                                //eInjury.26////////     
                                var _injury = [];
                                var _val = [];
                                var _text = [];
                                var valObj = {};
                                valObj.IsNull = true;
                                _injury = Utils.getValue(_elementList, "eInjury.26");
                                if (_injury.IsNull != true) {
                                    _val.push(_injury.ValueArray[0].val);
                                    valObj.IsNull = false;
                                    _text.push(_injury.ValueArray[0].text);
                                    valObj.CodeText = _text.slice(0);
                                    valObj.vSet = _val.slice(0);
                                    SG["eInjury.26"] = valObj;
                                    delete valObj;
                                };

                                //eInjury.27////////
                                var _injury = [];
                                var _val = [];
                                var _text = [];
                                var valObj = {};
                                valObj.IsNull = true;
                                _injury = Utils.getValue(_elementList, "eInjury.27");
                                if (_injury.IsNull != true) {
                                    _val.push(_injury.ValueArray[0].val);
                                    _text.push(_injury.ValueArray[0].text);
                                    valObj.CodeText = _text.slice(0);
                                    valObj.IsNull = false;

                                    valObj.vSet = _val.slice(0);
                                    SG["eInjury.27"] = valObj;
                                    delete valObj;
                                };

                                //eInjury.28////////
                                var _injury = [];
                                var _val = [];
                                var _text = [];
                                var valObj = {};
                                valObj.IsNull = true;

                                _injury = Utils.getValue(_elementList, "eInjury.28");
                                if (_injury.IsNull != true) {
                                    _val.push(_injury.ValueArray[0].val);
                                    valObj.IsNull = false;
                                    _text.push(_injury.ValueArray[0].text);
                                    valObj.CodeText = _text.slice(0);
                                    valObj.vSet = _val.slice(0);
                                    SG["eInjury.28"] = valObj;
                                    delete valObj;
                                };

                                //eInjury.29////////
                                var _injury = [];
                                var _val = [];
                                var valObj = {};
                                valObj.IsNull = true;
                                var _text = [];
                                _injury = Utils.getValue(_elementList, "eInjury.29");
                                if (_injury.IsNull != true) {
                                    _val.push(_injury.ValueArray[0].val);
                                    valObj.IsNull = false;
                                    _text.push(_injury.ValueArray[0].text);
                                    valObj.CodeText = _text.slice(0);

                                    valObj.vSet = _val.slice(0);
                                    SG["eInjury.29"] = valObj;
                                    delete valObj;
                                };
                                SeatGroupArray.push(SG)
                            };
                            eInjury.SeatGroup = SeatGroupArray.slice(0)
                        }
                    }
                }
            }
        }
    };

    return eInjury;
};

var seteInjuryNull = function (TheCall) {
    var eInjury = {};

    var _val = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;
    if (TheCall.IsCancelled == true) {
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
    eInjury["eInjury.01"] = valObj;
    eInjury["eInjury.03"] = valObj;
    eInjury["eInjury.04"] = valObj;
    delete valObj;

    var _injury = [];
    var _val = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;
    if (TheCall.IsCancelled == true) {
        if (TheCall.Cancelled == 'Prior') {
            _val.push(NOTAPPLICABLE);
            _text.push("Not Applicable");
            valObj.NV = true;
        }
    }
    else if (Utils.ReportingRequired("eInjury.02") == true) {
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
    eInjury["eInjury.02"] = valObj;
    delete valObj;

    var _injury = [];
    var _val = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;
    if (TheCall.IsCancelled == true) {
        if (TheCall.Cancelled == 'Prior') {
            _val.push(NOTAPPLICABLE);
            _text.push("Not Applicable");
            valObj.NV = true;
        }
    }
    else if (Utils.ReportingRequired("eInjury.07") == true) {
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
    eInjury["eInjury.07"] = valObj;
    delete valObj;

    return eInjury();
};
