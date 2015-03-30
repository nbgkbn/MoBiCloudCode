var Utils = require('cloud/UtilitiesCC.js');
var V2Utils = require('cloud/ConversionUtilsCC.js');
exports.setE03 = function (TheCall)
{
    var TC = TheCall;
    var ErrorList = [];
    if (typeof TC.eDispatch == 'undefined') {
        var E03 = {};
        E03.IsUndefined = true;
        return E03;
    }
    else
    {        
        var E3 = {};
        
        var eDS = {};
        eDS = TC.eDispatch;

        if (typeof eDS["eDispatch.01"] != 'undefined')
        {
            E3.E03_01 = "";
            if (eDS["eDispatch.01"].IsNull == false)
            {
                E3.E03_01 = V2Utils.setV2("eDispatch.01", eDS["eDispatch.01"].vSet[0]);
            }
        };

        if (typeof eDS["eDispatch.02"] != 'undefined')
        {
            E3.E03_02 = "";
            if (eDS["eDispatch.02"].IsNull == false)
            {
                E3.E03_02 = V2Utils.setV2("eDispatch.02", eDS["eDispatch.02"].vSet[0]);
            }
        };

        if (typeof eDS["eDispatch.03"] != 'undefined')
        {
            E3.E03_03 = "";
            if (eDS["eDispatch.03"].IsNull == false)
            {
                E3.E03_03 = eDS["eDispatch.03"].vSet[0];
            }
        };
    

        ///////The Rules
        /////////////////////////////
    if (typeof E3 == 'undefined') {

        Error.Level = "SECT";
        Error.Type = "MAN";
        Error.Att = "E03"
        Error.Text = "E03 Undefined"
        ErrorList.push(Error)
    }
    else {
        //COMPLAINT REPORTED BY DISPATCH
        var E03 = {};
        if (TheCall.StandBy == true) {
            E03.E03_01 = "-25";
        }
        else if ((TheCall.Cancelled == true) && (TheCall.CancelType == "Prior")) {
            E03.E03_01 = "-20";
        }
        else if ((typeof E3.E03_01 != 'undefined') && (Utils.IsGo(E3.E03_01) == true)) {
            E03.E03_01 = E3.E03_01;
        }
        else {
            Error.Level = "MAN";
            Error.Type = "ELEM";
            Error.Att = "E03_01"
            Error.Text = "COMPLAINT REPORTED BY DISPATCH Undefined or Null"
            ErrorList.push(Error)
        };


        //EMD PERFORMED
        if (TheCall.StandBy == true) {
            E03.E03_02 = "-25";
        }
        else if ((typeof E3.E03_02 != 'undefined') && (Utils.IsGo(E3.E03_02) == true))
        {
            E03.E03_02 = E3.E03_02;
        }
        else
        {
            E03.E03_02 = "-20";
        };

        //EMD CARD NUMBER
        if ((typeof E3.E03_03 != 'undefined') && (Utils.IsGo(E03.E3_03) == true)) {
            E03.E03_03 = E3.E03_03;
        }
        else {
            E03.E03_03 = "-20";
        }
    }
    E03.IsUndefined = false;
    E03.ErrorList = ErrorList
    return E03;
    }
};