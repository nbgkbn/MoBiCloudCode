var Utils = require('cloud/UtilitiesCC.js');
var NOTRECORDED = '7701003';
var NOTREPORTING = '7701005';
var NOTAPPLICABLE = '7701001';
var seteDisposition = function (TheCall) {
    var eDisposition = new Object();
    var ErrorList = [];
    //Returns The Call and Patient Disposition
    //CancellationType
    //PatientLiving Status
    //Treatment Status
    //Transport Status
    //Transfer Status
    //1:1 MAN
    var CallDisposition = new Object();
    var eDisposition = new Object();

    var HospitalTeamActivationGroup = new Object();
    var HospitalTeamActivationGroupArray = [];

    eDisposition["IsValid"] = false;  //prime object validation flag

    if (typeof TheCall.pDisposition == 'undefined') {
        var Error = new Object();
        Error.Level = "SECTION";
        Error.Type = "MAN";
        Error.Text = " eDisposition Null or Undefined"
        ErrorList.push(Error);
        eDisposition.Errors = ErrorList;
        return eDisposition;
    }
    else {
        var pDisposition = TheCall.pDisposition;
    };

    if (pDisposition.HasDataSet == false) {
        var Error = new Object();
        Error.Level = "SECTION";
        Error.Type = "MAN";
        Error.Text = " eDisposition Null or Undefined"
        ErrorList.push(Error);
        eDisposition.Errors = ErrorList;
        return eDisposition;
    };

    if (typeof pDisposition.attributes.elements == 'undefined') {
        var Error = new Object();
        Error.Level = "SECTION";
        Error.Type = "MAN";
        Error.Text = " eDisposition Null or Undefined"
        ErrorList.push(Error);
        eDisposition.Errors = ErrorList;
        return eDisposition;
    };

    var _eL = [];  //value element list
    _eL = pDisposition.attributes.elements;
    if (_eL.length == 0) {
        var Error = new Object();
        Error.Level = "SECTION";
        Error.Type = "MAN";
        Error.Text = " eDisposition Null or Undefined"
        ErrorList.push(Error);
        return eDisposition;
    };

    //////eDisposition.12    

    /*
    No Transport
    4212007 Canceled (Prior to Arrival At Scene)
    4212009 Canceled on Scene (No Patient Contact)
    4212011 Canceled on Scene (No Patient Found)
    4212015 Patient Dead at Scene-No Resuscitation Attempted (Without Transport)
    4212019 Patient Dead at Scene-Resuscitation Attempted (Without Transport)
    4212021 Patient Evaluated, No Treatment/Transport Required 
    4212023 Patient Refused Evaluation/Care (With Transport)
    4212025 Patient Refused Evaluation/Care (Without Transport)
    4212027 Patient Treated, Released (AMA)
    4212029 Patient Treated, Released (per protocol)
    4212035 Patient Treated, Transported by Law Enforcement
    4212037 Patient Treated, Transported by Private Vehicle
    4212039 Standby-No Services or Support Provided
    4212041 Standby-Public Safety, Fire, or EMS Operational Support Provided

    HasTransport
    4212013 Patient Dead at Scene-No Resuscitation Attempted (With Transport)
    4212017 Patient Dead at Scene-Resuscitation Attempted (With Transport)
    4212023 Patient Refused Evaluation/Care (With Transport)
    4212033 Patient Treated, Transported by this EMS Unit

    Transfer of Care
    4212031 Patient Treated, Transferred Care to Another EMS Unit
*/
    var _val = [];
    var _dispo = [];
    var _text = [];
    var valObj = {};
    _dispo = Utils.getValue(_eL, "eDisposition.12");
    if (_dispo.IsNull != true) {
        var transArray = ['4212013', '4212017', '4212023', '4212033'];

        _val.push(_dispo.ValueArray[0].val);
        eDisposition.Cancelled = false;
        if (transArray.indexOf(_dispo.ValueArray[0].val) == -1) {
            eDisposition.IsCancelled = true;
        };

        valObj.IsNull = false;
        var CallDisposition = new Object();
        _text.push(_dispo.ValueArray[0].text);

        valObj.CodeText = _text.slice(0);
        valObj.vSet = _val.slice(0);
        eDisposition["IsValid"] = true;
        eDisposition["eDisposition.12"] = valObj;
        delete valObj;
    }

    else {
        Error.Level = "ELEM";
        Error.Type = "MAN";
        Error.Att = "eDisposition.12"
        Error.Text = "Incident/Patient Disposition Undefined or Null"
        ErrorList.push(Error)
    };
    ///////////////////////eDisposition.DestinationGroup

    if (typeof pDisposition.attributes.sections == 'undefined') {
        eDisposition.DestinationGroup = setDestinationNull(eDisposition)
    }
    else {
        var _sI = [];
        _sI = Utils.getSectionIndex(pDisposition, "eDisposition.DestinationGroup");

        if (_sI[0] == -1) {
            eDisposition.DestinationGroup = setDestinationNull(eDisposition)
        }
        var _dEl = [];
        _dEl = pDisposition.attributes.sections[_sI[0]].attributes.elements;
        if (_dEl.length == 0) {
            eDisposition.DestinationGroup = setDestinationNull(eDisposition)
        }
        else {
            var DestinationGroup = new Object();

            //eDisposition.01///////////////////////////////////////////////////////////
            var _val = [];
            _text = [];
            var _dispo = [];
            var valObj = {};
            valObj.IsNull = true;

            _dispo = Utils.getValue(_dEl, "eDisposition.01");
            if (_dispo.IsNull != true) {
                _val.push(_dispo.ValueArray[0].val);

                valObj.IsNull = false;
            }
            else {
                if (Utils.ReportingRequired("eDisposition.01") == true) {
                    _val.push(NOTRECORDED);
                    valObj.NV = true;
                    _text.push("Not Recorded")
                }
                else {
                    _val.push(NOTREPORTING);
                    valObj.NV = true;
                    _text.push("Not Reporting")
                }
            };
            valObj.CodeText = _text.slice(0);
            valObj.vSet = _val.slice(0);
            DestinationGroup["eDisposition.01"] = valObj;
            delete valObj;

            //eDisposition.02//////////////////////////////////////////////////////////                
            var _val = [];
            var _text = [];
            var _dispo = [];
            var valObj = {};
            valObj.IsNull = true;
            _dispo = Utils.getValue(_dEl, "eDisposition.02");
            if (_dispo.IsNull == false) {
                _val.push(_dispo.ValueArray[0].val);
                valObj.IsNull = false;
            }
            else {
                if (Utils.ReportingRequired("eDisposition.02") == true) {
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
            valObj.CodeText = _text.slice(0);
            valObj.vSet = _val.slice(0);
            DestinationGroup["eDisposition.02"] = valObj;
            delete valObj;


            //eDisposition.03/////////////////////////////////////////////////////////////
            var _val = [];
            var _dispo = [];
            var _text = [];
            var valObj = {};
            valObj.IsNull = true;

            _dispo = Utils.getValue(_dEl, "eDisposition.03");
            if (_dispo.IsNull != true) {
                _val.push(_dispo.ValueArray[0].val);
                valObj.IsNull = false;
            }
            else {
                if (Utils.ReportingRequired("eDisposition.03") == true) {
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
            DestinationGroup["eDisposition.03"] = valObj;
            delete valObj;


            //eDisposition.04///////////////////////////////////////////////////////
            var _val = [];
            var _dispo = [];
            var _text = [];
            var valObj = {};
            valObj.IsNull = true;

            _dispo = Utils.getValue(_dEl, "eDisposition.04");
            if (_dispo.IsNull == false) {
                _val.push(_dispo.ValueArray[0].val);
                valObj.IsNull = false;

                valObj.vSet = _val.slice(0);
                DestinationGroup["eDisposition.04"] = valObj;
                delete valObj;
            };

            //eDisposition.05/////////////////////////////////////////////
            var _val = [];
            var _dispo = [];
            var _text = [];
            var valObj = {};
            valObj.IsNull = true;

            _dispo = Utils.getValue(_dEl, "eDisposition.05");
            if (_dispo.IsNull != true) {
                _val.push(_dispo.ValueArray[0].val);
                valObj.IsNull = false;
            }
            else {
                _val.push(NOTRECORDED);
                _text.push("Not Recorded")
                valObj.NV = true;
            };
            valObj.CodeText = _text.slice(0);
            valObj.vSet = _val.slice(0);
            DestinationGroup["eDisposition.05"] = valObj;
            delete valObj;


            //eDisposition.06//////////////////////////////////////////////////////
            var _val = [];
            var _dispo = [];
            var valObj = {};
            var _text = [];
            valObj.IsNull = true;

            _dispo = Utils.getValue(_dEl, "eDisposition.06");
            if (_dispo.IsNull != true) {
                _val.push(_dispo.ValueArray[0].val);
                valObj.IsNull = false;
            }
            else {
                _val.push(NOTRECORDED);
                _text.push("Not Recorded")
                valObj.NV = true;
            };

            valObj.CodeText = _text.slice(0);
            valObj.vSet = _val.slice(0);
            DestinationGroup["eDisposition.06"] = valObj;
            delete valObj;

            //eDisposition.07////////////////////////////////////////////////////
            var _val = [];
            var _dispo = [];
            var valObj = {};
            var _text = [];
            valObj.IsNull = true;

            _dispo = Utils.getValue(_dEl, "eDisposition.07");
            if (_dispo.IsNull != true) {
                _val.push(_dispo.ValueArray[0].val);
                valObj.IsNull = false;
            }
            else {
                if (TheCall.IsCancelled == true) {
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
            valObj.CodeText = _text.slice(0);
            valObj.vSet = _val.slice(0);
            DestinationGroup["eDisposition.07"] = valObj;
            delete valObj;

            //eDisposition.08///////////////////////////////////////////////////
            var _val = [];
            var _dispo = [];
            var valObj = {};
            var _text = [];
            valObj.IsNull != true;

            _dispo = Utils.getValue(_dEl, "eDisposition.08");
            if (_dispo.IsNull != true) {
                _val.push(_dispo.ValueArray[0].val);
                valObj.IsNull = false;

                valObj.vSet = _val.slice(0);
                DestinationGroup["eDisposition.08"] = valObj;
                delete valObj;
            };

            //eDisposition.09/////////////////////////////////////////
            var _val = [];
            var _dispo = [];
            var valObj = {};
            valObj.IsNull = true;
            _dispo = Utils.getValue(_dEl, "eDisposition.09");
            if (_dispo.IsNull != true) {
                _val.push(_dispo.ValueArray[0].val);
                valObj.IsNull = false;

                valObj.vSet = _val.slice(0);
                DestinationGroup["eDisposition.09"] = valObj;
                delete valObj;
            };

            //eDisposition.10//////////////////////////////////////////
            var _val = [];
            var _dispo = [];
            var valObj = {};
            valObj.IsNull = true;

            _dispo = Utils.getValue(_dEl, "eDisposition.10");
            if (_dispo.IsNull != true) {
                _val.push(_dispo.ValueArray[0].val);
                valObj.IsNull = false;

                valObj.vSet = _val.slice(0);
                DestinationGroup["eDisposition.10"] = valObj;
                delete valObj;
            }
            eDisposition.DestinationGroup = DestinationGroup;
        }
    };
    //eDisposition.11/////////////////////////////////////////////////
    var _val = [];
    var _dispo = [];
    var valObj = {};
    var _text = [];
    valObj.IsNull = true;

    _dispo = Utils.getValue(_eL, "eDisposition.11");
    if (_dispo.IsNull != true) {
        _val.push(_dispo.ValueArray[0].val);
        valObj.IsNull = false;
    }
    else {
        if (Utils.ReportingRequired("eDisposition.11") == true) {
            _val.push(NOTRECORDED);
            valObj.NV = true;
        }
        else {
            _val.push(NOTREPORTING);
            _text.push("Not Reporting")
            valObj.NV = true;
        }
    };
    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    eDisposition["eDisposition.11"] = valObj;
    delete valObj;


    //eDisposition.13/////////////////////////////////////////////////////
    var _val = [];
    var _text = [];
    var _dispo = [];
    var valObj = {};
    valObj.IsNull = true;

    _dispo = Utils.getValue(_eL, "eDisposition.13");
    if (_dispo.IsNull != true) {
        for (var i = 0; i <= _dispo.Count - 1; i++) {
            if ((_dispo.ValueArray[i].HasValue == true) && (_val.indexOf(_dispo.ValueArray[i].val) == -1)) {
                _val.push(_dispo.ValueArray[i].val);
                _text.push(_dispo.ValueArray[i].text);
            }
        }
        valObj.IsNull = false;
        valObj.CodeText = _text.slice(0);
        valObj.vSet = _val.slice(0);
        eDisposition["eDisposition.13"] = valObj;
        delete valObj;
    };

    //eDisposition.14//////////////////////////////////
    var _val = [];
    var _text = [];
    var _dispo = [];
    var valObj = {};
    valObj.IsNull = true;

    _dispo = Utils.getValue(_eL, "eDisposition.14");
    if (_dispo.IsNull != true) {
        for (var i = 0; i < _dispo.ValueArray.length; i++) {
            if ((_dispo.ValueArray[i].HasValue == true) && (_val.indexOf(_dispo.ValueArray[i].val) == -1)) {
                _val.push(_dispo.ValueArray[i].val);
                _text.push(_dispo.ValueArray[i].text);
            }
        };
        valObj.IsNull = false;
        valObj.CodeText = _text.slice(0);
        valObj.vSet = _val.slice(0);
        eDisposition["eDisposition.14"] = valObj;
        delete valObj;
    };

    //eDisposition.15////
    var _val = [];
    var _dispo = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;

    _dispo = Utils.getValue(_eL, "eDisposition.15");
    if (_dispo.IsNull != true) {
        _val.push(_dispo.ValueArray[0].val);
        valObj.IsNull = false;
        _text.push(_dispo.ValueArray[0].text);

        valObj.CodeText = _text.slice(0);
        valObj.vSet = _val.slice(0);
        eDisposition["eDisposition.15"] = valObj;
        delete valObj;
    };


    //eDisposition.16////
    var _val = [];
    var _text = [];
    var _dispo = [];
    var valObj = {};
    var _text = [];
    valObj.IsNull = true;

    _dispo = Utils.getValue(_eL, "eDisposition.16");
    if (_dispo.IsNull != true) {
        _val.push(_dispo.ValueArray[0].val);
        valObj.IsNull = false;
        _text.push(_dispo.ValueArray[0].text);
    }
    else {
        if (TheCall.IsCancelled == true) {
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
    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    eDisposition["eDisposition.16"] = valObj;
    delete valObj;


    //eDisposition.17////
    var _val = [];
    var _text = [];
    var _dispo = [];
    var valObj = {};
    var _text = [];
    valObj.IsNull = true;
    _dispo = Utils.getValue(_eL, "eDisposition.17");
    if (_dispo.IsNull != true) {
        _val.push(_dispo.ValueArray[0].val);
        valObj.IsNull = false;
        _text.push(_dispo.ValueArray[0].text);
    }
    else {
        if (TheCall.IsCancelled == true) {
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
    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    eDisposition["eDisposition.17"] = valObj;
    delete valObj;


    //eDisposition.18////
    var _val = [];
    var _text = [];
    var _dispo = [];
    var valObj = {};
    valObj.IsNull = true;
    _dispo = Utils.getValue(_eL, "eDisposition.18");
    if (_dispo.IsNull != true) {
        for (var i = 0; i < _dispo.ValueArray.length; i++) {
            if ((_dispo.ValueArray[i].HasValue == true) && (_val.indexOf(_dispo.ValueArray[i].val) == -1)) {
                _val.push(_dispo.ValueArray[i].val);
                _text.push(_dispo.ValueArray[i].text);
            }
        }
    }
    else {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded")
        valObj.NV = true;

    };
    valObj.CodeText = _text.slice(0);
    valObj.IsNull = false;
    valObj.vSet = _val.slice(0);
    eDisposition["eDisposition.18"] = valObj;
    delete valObj;

    //eDisposition.19////
    var _val = [];
    var _dispo = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;

    _dispo = Utils.getValue(_eL, "eDisposition.19");
    if (_dispo.IsNull != true) {
        _val.push(_dispo.ValueArray[0].val);
        valObj.IsNull = false;
        _text.push(_dispo.ValueArray[0].text);
    }
    else {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded")
        valObj.NV = true;

    };
    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    eDisposition["eDisposition.19"] = valObj;
    delete valObj;


    //eDisposition.20////
    var _val = [];
    var _text = [];
    var _dispo = [];
    var valObj = {};
    var _text = [];
    valObj.IsNull = true;

    _dispo = Utils.getValue(_eL, "eDisposition.20");
    if (_dispo.IsNull != true) {
        _val.push(_dispo.ValueArray[0].val);
        for (var i = 0; i < _dispo.ValueArray.length; i++) {
            if ((_dispo.ValueArray[i].HasValue == true) && (_val.indexOf(_dispo.ValueArray[i].val) == -1)) {
                _val.push(_dispo.ValueArray[i].val);
                _text.push(_dispo.ValueArray[i].text);
            }
        }
    }
    else {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded")
        valObj.NV = true;
    };
    _text.push(_dispo.ValueArray[0].text);
    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    eDisposition["eDisposition.20"] = valObj;
    delete valObj;

    //eDisposition.21////
    var valObj = {};
    var _val = [];
    var _text = [];
    var _dispo = [];
    valObj.IsNull = true;
    _dispo = Utils.getValue(_eL, "eDisposition.21");
    if (_dispo.IsNull != true) {
        _val.push(_dispo.ValueArray[0].val);
        valObj.IsNull = false;
        _text.push(_dispo.ValueArray[0].text);
    }
    else {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded")
        valObj.NV = true;
    };
    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    eDisposition["eDisposition.21"] = valObj;
    delete valObj;


    //eDisposition.22////
    var valObj = {};
    var _val = [];
    var _text = [];
    var _dispo = [];
    valObj.IsNull = true;
    _dispo = Utils.getValue(_eL, "eDisposition.22");
    if (_dispo.IsNull != true) {
        _val.push(_dispo.ValueArray[0].val);
        _text.push(_dispo.ValueArray[0].text);
    }
    else {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded")
        valObj.NV = true;
    };
    valObj.CodeText = _text.slice(0);
    valObj.IsNull = false;
    valObj.vSet = _val.slice(0);
    eDisposition["eDisposition.22"] = valObj;
    delete valObj;

    //eDisposition.23////
    var valObj = {};
    var _text = [];
    var _val = [];
    var _dispo = [];
    valObj.IsNull = true;
    _dispo = Utils.getValue(_eL, "eDisposition.23");
    if (_dispo.IsNull != true) {
        _val.push(_dispo.ValueArray[0].val);
        valObj.IsNull = false;
    }
    else {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded")
        valObj.NV = true;
    };
    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    eDisposition["eDisposition.23"] = valObj;
    delete valObj;


    //eDisposition.26////
    var _dispo = [];
    var _val = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;

    _dispo = Utils.getValue(_eL, "eDisposition.26");
    if (_dispo.IsNull != true) {
        for (var i = 0; i < _dispo.ValueArray.length; i++) {
            if ((_dispo.ValueArray[i].HasValue == true) && (_val.indexOf(_dispo.ValueArray[i].val) == -1)) {
                _val.push(_dispo.ValueArray[i].val);
                _text.push(_dispo.ValueArray[i].text);
            }
        };
        valObj.IsNull = false;
        valObj.CodeText = _text.slice(0);
        valObj.vSet = _val.slice(0);
        eDisposition["eDisposition.26"] = valObj;
        delete valObj;
    };



    var HTActivationArray = [];
    if (typeof pDisposition.attributes.sections != 'undefined') {
        var _TAG = new Object();
        _hTAG = Utils.getSectionIndex(pDisposition.attributes.sections[0], "eDisposition.HospitalTeamActivationGroup");
        if (_hTAG[0] == -1) {
            var _val = [];
            var _text = [];
            var valObj = {};
            valObj.IsNull = true;
            if (_dispo.IsNull == true) {
                if (TheCall.IsCancelled == true) {
                    _val.push(NOTAPPLICABLE);
                    valObj.NV = true;
                    _text.push("Not Applicable");
                }
                else {
                    _val.push(NOTRECORDED);
                    valObj.NV = true;
                    _text.push("Not Recorded");
                }

                valObj.vSet = _val.slice(0);
                valObj.CodeText = _text.slice(0);
                _TAG["eDisposition.24"] = valObj;
                _TAG["eDisposition.25"] = valObj;
                delete valObj;

                eDisposition.HospitalTeamActivationGroup = HTActivationArray.slice(0);
            }
        }
        else {
            for (var i = 0; i < _hTAG.length; i++) {
                var hTG = new Object();
                var _hTAGArray = []
                var _dataList = pDisposition.attributes.sections[_hTAG[i]].attributes.elements;

                //eDisposition.24////
                var _val = [];
                var _dispo = [];
                var _text = [];
                var valObj = {};
                valObj.IsNull = true;
                valObj.IsNull = true;
                _dispo = Utils.getValue(_dataList, "eDisposition.24");
                if (_dispo.IsNull == false) {
                    _val.push(_dispo.ValueArray[0].val);
                    valObj.IsNull = false;
                    _text.push(_dispo.ValueArray[0].text);
                    valObj.CodeText = _text.slice(0);
                }
                else {
                    _val.push(NOTRECORDED);
                    valObj.NV = true;
                    _text.push("Not Recorded");
                };

                valObj.CodeText = _text.slice(0);
                valObj.vSet = _val.slice(0);
                hTG["eDisposition.24"] = valObj;
                delete valObj;


                //eDisposition.25////
                var _dispo = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _dispo = Utils.getValue(_dataList, "eDisposition.25");
                if (_dispo.IsNull != true) {
                    _val.push(_dispo.ValueArray[0].val);
                    valObj.IsNull = false;
                }
                else {
                    _val.push(NOTRECORDED);
                    _text.push("Not Recorded");
                    valObj.NV = true;
                };

                valObj.vSet = _val.slice(0);
                hTG["eDisposition.25"] = valObj;
                delete valObj;
                HTActivationArray.push(hTG);
            }
        };
        if (HTActivationArray.length > 0) {
            var HospitalTeamActivationGroup = new Object();
            eDisposition.HospitalTeamActivationGroup = HTActivationArray.slice(0);
        }
    };


    eDisposition.Errors = ErrorList;
    return eDisposition;
};


var setDestinationNull = function (eDisp) {
    var _eDisposition = new Object()
    var _DSG = new Object();
    var _val = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;

    if (eDisp.Cancelled === true) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable");
        valObj.NV = true;
    }
    else if (Utils.ReportingRequired("eDisposition.01") == true) {
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
    _eDisposition["eDisposition.01"] = valObj;
    delete valObj;

    var _val = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;

    if (eDisp.Cancelled === true) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable");
        valObj.NV = true;
    }
    else if (Utils.ReportingRequired("eDisposition.02") == true) {
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
    _eDisposition["eDisposition.02"] = valObj;
    delete valObj;

    var _val = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;

    if (eDisp.Cancelled === true) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable");
        valObj.NV = true;
    }
    else if (Utils.ReportingRequired("eDisposition.03") == true) {
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
    _eDisposition["eDisposition.03"] = valObj;
    delete valObj;

    var _val = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;

    if (eDisp.Cancelled === true) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable");
        valObj.NV = true;
    }
    else if (Utils.ReportingRequired("eDisposition.04") == true) {
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
    _eDisposition["eDisposition.04"] = valObj;
    delete valObj;

    var _val = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;

    if (eDisp.Cancelled === true) {
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
    _eDisposition["eDisposition.05"] = valObj;
    _eDisposition["eDisposition.06"] = valObj;
    _eDisposition["eDisposition.07"] = valObj;
    delete valObj;

    _DSG = _eDisposition
    return _DSG;

};