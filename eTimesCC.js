var Utils = require('cloud/UtilitiesCC.js');
var NOTRECORDED = '7701003';
var NOTREPORTING = '7701005';
var NOTAPPLICABLE = '7701001';
exports.seteTimes = function (TheCall) {


    var eTimes = new Object();
    var pTimes = TheCall.pTimes;


    var ErrorList = [];
    if (typeof TheCall.pTimes == 'undefined') {
        var Error = new Object();
        Error.Level = "SECTION";
        Error.Type = "MAN";
        Error.Att = "eTimes"
        Error.Text = " eTimesNull or Undefined"
        ErrorList.push(Error);
        eTimes.Errors = ErrorList;
        return eTimes;
    };
    if (pTimes.HasDataSet == false) {
        var Error = new Object();
        Error.Level = "SECTION";
        Error.Type = "MAN";
        Error.Att = "eTimes"
        Error.Text = " eTimesNull or Undefined"
        ErrorList.push(Error);
        eTimes.Errors = ErrorList;
        return eTimes;
    };

    if (typeof pTimes.attributes.elements == 'undefined') {
        var Error = new Object();
        Error.Level = "SECTION";
        Error.Type = "MAN";
        Error.Att = "eTimes"
        Error.Text = " eTimesNull or Undefined"
        ErrorList.push(Error);
        eTimes.Errors = ErrorList;
        return eTimes;
    };
    var _el = pTimes.attributes.elements;
    if (_el.length == 0) {
        var Error = new Object();
        Error.Level = "SECTION";
        Error.Type = "MAN";
        Error.Att = "eTimes"
        Error.Text = " eTimes has 0 Elements"
        ErrorList.push(Error);
        eTimes.Errors = ErrorList;
        return eTimes;
    };

    //eTimes.01//////////////////      
    var _val = [];
    var _times = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;

    _times = Utils.getValue(_el, "eTimes.01");
    if (_times.IsNull == false) {
        _val.push(_times.ValueArray[0].val);
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
    eTimes["eTimes.01"] = valObj;
    delete valObj;


    //eTimes.02/////////////////////////////////////////////////////////
    var _val = [];
    var _times = [];
    var valObj = {};
    valObj.IsNull = true;
    _times = Utils.getValue(_el, "eTimes.02");
    if (_times.IsNull == false) {
        _val.push(_times.ValueArray[0].val);
        valObj.IsNull = false;
        valObj.vSet = _val.slice(0);
        eTimes["eTimes.02"] = valObj;
        delete valObj;
    };

    //eTimes.03//////////////////////////////////////////////////////
    var _val = [];
    var _times = [];
    var valObj = {};
    valObj.IsNull = true;

    _times = Utils.getValue(_el, "eTimes.03");
    if (_times.IsNull == false) {
        _val.push(_times.ValueArray[0].val);
        valObj.IsNull = false;
        valObj.vSet = _val.slice(0);
        eTimes["eTimes.03"] = valObj;
        delete valObj;
    }
    else {
        var Error = new Object();
        Error.Level = "SECTION";
        Error.Type = "MAN";
        Error.Att = "eTimes.03"
        Error.Text = " Unit Notified by Dispatch Required";
        ErrorList.push(Error);
    };


    //eTimes.04//////////////////////////////////////////////////
    var _val = [];
    var _times = [];
    var valObj = {};
    valObj.IsNull = true;
    _times = Utils.getValue(_el, "eTimes.04");
    if (_times.IsNull == false) {
        _val.push(_times.ValueArray[0].val);
        valObj.IsNull = false;

        valObj.vSet = _val.slice(0);
        eTimes["eTimes.04"] = valObj;
        delete valObj;
    };

    //eTimes.05//////////////////////////////////////////////////
    var _val = [];
    var _times = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;

    _times = Utils.getValue(_el, "eTimes.05");
    if (_times.IsNull == false) {
        _val.push(_times.ValueArray[0].val);
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
    eTimes["eTimes.05"] = valObj;
    delete valObj;

    //eTimes.06/////////////////////////////////////////////////        
    var _val = [];
    var _times = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;
    _times = Utils.getValue(_el, "eTimes.06");
    if (_times.IsNull == false) {
        _val.push(_times.ValueArray[0].val);
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
    eTimes["eTimes.06"] = valObj;
    delete valObj;

    //eTimes.07//////////////////
    var _val = [];
    var _times = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;

    _times = Utils.getValue(_el, "eTimes.07");
    if (_times.IsNull == false) {
        _val.push(_times.ValueArray[0].val);
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
    eTimes["eTimes.07"] = valObj;
    delete valObj;

    //eTimes.08//////////////////
    var _val = [];
    var _times = [];
    var valObj = {};
    valObj.IsNull = true;
    _times = Utils.getValue(_el, "eTimes.08");
    //alert("Transfer of Care")
    if (_times.IsNull == false) {
        _val.push(_times.ValueArray[0].val);
        valObj.IsNull = false;
    }
    else {
        if (TheCall.IsCancelled == true) {
            _val.push(NOTAPPLICABLE);
            _text.push("Not Applicable")
            valObj.NV = true;
        }
        else if (Utils.ReportingRequired("eTimes.08") == true) {
            _val.push(NOTREPORTING);
            _text.push("Not Reporting")
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
    eTimes["eTimes.08"] = valObj;
    delete valObj;

    //eTimes.09//////////////////
    var _val = [];
    var _times = [];
    var valObj = {};
    valObj.IsNull = true;
    _times = Utils.getValue(_el, "eTimes.09");
    if (_times.IsNull == false) {
        _val.push(_times.ValueArray[0].val);
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
    eTimes["eTimes.09"] = valObj;
    delete valObj;


    //eTimes.10//////////////////////////////////////////////////////////////////////
    var _val = [];
    var _times = [];
    var valObj = {};
    valObj.IsNull = true;
    _times = Utils.getValue(_el, "eTimes.10");
    if (_times.IsNull == false) {
        valObj.IsNull = false;
        valObj.vSet = _val.slice(0);
        eTimes["eTimes.10"] = valObj;
        delete valObj;
    };

    //eTimes.11////////////////////////////////////////////////////////////////
    var _val = [];
    var _times = [];
    var valObj = {};
    valObj.IsNull = true;
    _times = Utils.getValue(_el, "eTimes.11");
    if (_times.IsNull == false) {
        _val.push(_times.ValueArray[0].val);
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
    eTimes["eTimes.11"] = valObj;
    delete valObj;


    //eTimes.12///////////////////////////////////////////////////////////////////////        
    var _val = [];
    var _times = [];
    var valObj = {};
    valObj.IsNull = true;
    _times = Utils.getValue(_el, "eTimes.12");
    if (_times.IsNull == false) {
        _val.push(_times.ValueArray[0].val);
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
    eTimes["eTimes.12"] = valObj;
    delete valObj

    //eTimes.13//////////////////////////////////////////////////////////////////////
    var _val = [];
    var _times = [];
    var valObj = {};
    valObj.IsNull = true;
    _times = Utils.getValue(_el, "eTimes.13");
    if (_times.IsNull == false) {
        _val.push(_times.ValueArray[0].val);
        valObj.IsNull = false;
        valObj.vSet = _val.slice(0);
        eTimes["eTimes.13"] = valObj;
        delete valObj;
    }
    else {
        var Error = new Object();
        Error.Level = "SECTION";
        Error.Type = "MAN";
        Error.Att = "eTimes.13"
        Error.Text = " Unit Back in Service Date/Time";
        ErrorList.push(Error);
    };


    //eTimes.14//////////////////
    var _val = [];
    var _times = [];
    var valObj = {};
    valObj.IsNull = true;

    _times = Utils.getValue(_el, "eTimes.14");
    if (_times.IsNull == false) {
        _val.push(_times.ValueArray[0].val);
        valObj.IsNull = false;
    }
    else {
        if (Utils.ReportingRequired("eTimes.14") == false) {
            _val.push(NOTREPORTING);
            _text.push("Not Reporting")
            valObj.NV = true;
        }
        else if (TheCall.IsCancelled == true) {
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
    eTimes["eTimes.14"] = valObj;
    delete valObj;


    //eTimes.15//////////////////
    var _val = [];
    var _times = [];
    var valObj = {};
    valObj.IsNull = true;

    _times = Utils.getValue(_el, "eTimes.15");
    if (_times.IsNull == false) {
        _val.push(_times.ValueArray[0].val);
        valObj.IsNull = false;

        valObj.vSet = _val.slice(0);
        eTimes["eTimes.15"] = valObj;
        delete valObj;
    };

    //eTimes.16/////////////////
    var _val = [];
    var _times = [];
    var valObj = {};
    valObj.IsNull = true;

    _times = Utils.getValue(_el, "eTimes.16");
    if (_times.IsNull == false) {
        _val.push(_times.ValueArray[0].val);
        valObj.IsNull = false;

        valObj.vSet = _val.slice(0);
        eTimes["eTimes.16"] = valObj;
        delete valObj;
    };

    eTimes.Errors = ErrorList;
    return eTimes;
};
