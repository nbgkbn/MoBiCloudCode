var Utils = require('cloud/UtilitiesCC.js');
exports.setE01 = function (TC)
{
    if (typeof TC.eRecord == 'undefined')
    {
        var E01 = {};
        E01.IsUndefined = true;
        return E01
    }
    else
    {
        var E1 = {};
        if (typeof TC.eRecord["eRecord.01"] != 'undefined') {
            E1.E01_01 = TC.eRecord["eRecord.01"].vSet[0];
        };
        if (typeof TC.eRecord["eRecord.02"] != 'undefined') {
            E1.E01_02 = TC.eRecord["eRecord.02"].vSet[0];
        };
        if (typeof TC.eRecord["eRecord.03"] != 'undefined') {
            E1.E01_03 = TC.eRecord["eRecord.03"].vSet[0];
        };
        if (typeof TC.eRecord["eRecord.04"] != 'undefined') {
            E1.E01_04 = TC.eRecord["eRecord.04"].vSet[0];
        };
    }


    ////////////////////////////////////
    if (typeof E1 == 'undefined') {
        Error.Level = "SECTION";
        Error.Type = "MAN";
        Error.Att = ""
        Error.Text = "E01 Undefined"
        ErrorList.push(Error)
    }
    else {
        var E01 = {};
        if ((typeof E1.E01_01 != 'undefined') && (IsGo(E1.E01_01) == true)) {
            E01.E01_01 = E1.E01_01;
        }
        else {
            Error.Level = "ELEM";
            Error.Type = "MAN";
            Error.Att = "E01_01"
            Error.Text = "E01_01 Undefined or Null"
            ErrorList.push(Error)
        };

        if ((typeof E1.E01_02 != 'undefined') && (IsGo(E1.E01_02) == true)) {
            E01.E01_02 = E1.E01_02
        }
        else {
            Error.Level = "ELEM";
            Error.Type = "MAN";
            Error.Att = "E01_02"
            Error.Text = "E01_02 Undefined or Null"
            ErrorList.push(Error)
        };

        if ((typeof E1.E01_03 != 'undefined') && (IsGo(E1.E01_03) == true)) {
            E01.E01_03 = E1.E01_03
        }
        else {
            Error.Level = "ELEM";
            Error.Type = "MAN";
            Error.Att = "E01_03"
            Error.Text = "E01_03 Undefined or Null"
            ErrorList.push(Error)
        };
        if ((typeof E1.E01_04 != 'undefined') && (IsGo(E1.E01_04) == true)) {
            E01.E01_04 = E1.E01_04
        }
        else {
            Error.Level = "ELEM";
            Error.Type = "MAN";
            Error.Att = "E01_04"
            Error.Text = "E01_04 Undefined or Null"
            ErrorList.push(Error)
        }
    };
    E01.IsUndefined = false;
    E01.ErrorList = ErrorList;
    return E01
};