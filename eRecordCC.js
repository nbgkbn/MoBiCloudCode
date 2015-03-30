var Utils = require('cloud/UtilitiesCC.js');
exports.seteRecord= function (param) {
    //Strip Rules 12/19
    if (typeof param.pRecord == 'undefined') {
        var Error = new Object();
        Error.Level = "SECTION";
        Error.Type = "MAN";
        Error.Att = "eRecord"
        Error.Text = " eRecord Null or Undefined"
        eRecordErrorList.push(Error);
        eRecord.Errors = eRecordErrorList;
        return eRecord
    }
    else
    {
        var pRecord = param.pRecord;
    };
    
    //////////////////////eRecord.01
    if (pRecord.HasDataSet == false)
    {
        var Error = new Object();
        Error.Level = "SECTION";
        Error.Type = "MAN";
        Error.Att = "eRecord"
        Error.Text = " eRecord Null or Undefined"
        eRecordErrorList.push(Error);
        eRecord.Errors = eRecordErrorList;
        return eRecord
    };
    
    if (pRecord.attributes.elements == 'undefined')
    {
        var Error = new Object();
        Error.Level = "SECTION";
        Error.Type = "MAN";
        Error.Att = "eRecord"
        Error.Text = " eRecord Null or Undefined"
        eRecordErrorList.push(Error);
        eRecord.Errors = eRecordErrorList;
        return eRecord
    };
    var eRecordErrorList = [];
    var eRecord = new Object();

    //Element Array List
    var _el = [];
    _el = (pRecord.attributes.elements);
    if (_el.length == 0)
    {
        var Error = new Object();
        Error.Level = "SECTION";
        Error.Type = "MAN";
        Error.Att = "eRecord"
        Error.Text = " eRecord Null or Undefined"
        eRecordErrorList.push(Error);
        eRecord.Errors = eRecordErrorList;
        return eRecord
    };
    if (typeof pRecord.attributes.sections == 'undefined')
    {
        var Error = new Object();
        Error.Level = "SECTION";
        Error.Type = "MAN";
        Error.Att = "eRecord";
        Error.Text = " eRecord Null or Undefined";
        eRecordErrorList.push(Error);
        return eRecord
    };

    var _val = [];
    var _record = []
    var valObj = {};
    //eRecord.01  MANDATORY
    _record = Utils.getValue(_el, "eRecord.01");
    if (_record.IsNull != true)
    {
        _val.push(_record.ValueArray[0].val);
        valObj.IsNull = false;
        valObj.vSet = _val.slice(0);
        eRecord["eRecord.01"] = valObj;
        delete valObj;
    }
    else
    {
        var Error = new Object();
        Error.Level = "ELEMENT";
        Error.Type = "MAN";
        Error.Att = "eRecord.01"
        Error.Text = " eRecord.01 Null or Undefined"
        eRecordErrorList.push(Error);
    };

    //Extract Software Application Group section
    //SECTION:  MANDATORY
    
    _sI =Utils.getSectionIndex(pRecord, "eRecord.SoftwareApplicationGroup");
    if (_sI[0] == -1)
    {
        var Error = new Object();
        Error.Level = "SECTION";
        Error.Type = "MAN";
        Error.Att = "eRecord"
        Error.Text = " eRecord Null or Undefined"
        eRecordErrorList.push(Error);
    }
    else
    {
        var _dataList = [];  //section element array.  Item[0]==-1 indicates empty set
        var _dataList = pRecord.attributes.sections[_sI].attributes.elements;
        if (_dataList.length == 0)
        {
            var Error = new Object();
            Error.Level = "SECTION";
            Error.Type = "MAN";
            Error.Att = "eRecord"
            Error.Text = " eRecord Null or Undefined"
            eRecordErrorList.push(Error);
        }
        else
        {
            //eRecord["SoftwareApplicationGroup"].eRecord.02 MANDATORY
            var _val = [];
            var _record = []
            var valObj = {};

            _record = Utils.getValue(_dataList, "eRecord.02");
            if (_record.IsNull == false)
            {
                _val.push(_record.ValueArray[0].val);
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
                eRecord["eRecord.02"] = valObj;
                delete valObj;
            }
            else
            {
                var Error = new Object();
                Error.Level = "ELEMENT";
                Error.Type = "MAN";
                Error.Att = "eRecord.02"
                Error.Text = " eRecord.02 Null or Undefined"
                eRecordErrorList.push(Error);
            };

            //eRecord["SoftwareApplicationGroup"].eRecord.03 MANDATORY

            var _val = [];
            var _record = [];
            var valObj = {};

            _record = Utils.getValue(_dataList, "eRecord.03");
            if (_record.IsNull == false)
            {
                _val.push(_record.ValueArray[0].val);
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
                eRecord["eRecord.03"] = valObj;
                delete valObj;

            }
            else
            {
                var Error = new Object();
                Error.Level = "ELEMENT";
                Error.Type = "MAN";
                Error.Att = "eRecord.03"
                Error.Text = " eRecord.03 Null or Undefined"
                eRecordErrorList.push(Error);
            };

            //eRecord["SoftwareApplicationGroup"].eRecord.04 MANDATORY
            var _val = [];
            var _record = [];
            var valObj = {};
            _record = Utils.getValue(_dataList, "eRecord.04");

            if (_record.IsNull == false)
            {
                _val.push(_record.ValueArray[0].val);
                valObj.IsNull = false;

                valObj.vSet = _val.slice(0);
                eRecord["eRecord.04"] = valObj;
                delete valObj;
            }
            else
            {
                var Error = new Object();
                Error.Level = "ELEMENT";
                Error.Type = "MAN";
                Error.Att = "eRecord.04"
                Error.Text = " eRecord.04 Null or Undefined"
                eRecordErrorList.push(Error);
            }
        }
    };
    eRecord.Errors = eRecordErrorList;
    return eRecord;
};
