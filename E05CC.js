var Utils = require('cloud/UtilitiesCC.js');
var V2Utils = require('cloud/ConversionUtilsCC.js');
exports.setE05 = function (TheCall)
{
    var TC = TheCall;
    if (typeof TC.eTimes == 'undefined')
    {
        var E05 = {};
        E05.IsUndefined = true;
        return E05;
    }
    else {
        var E05 = {};
        E05.IsUndefined = false;
        var E5 = {};
        
        if (typeof TC.eSituation != 'undefined')
        {
            if (typeof TC.eSituation["eSituation.01"] != 'undefined')
            {
                if (TC.eSituation["eSituation.01"].IsNull == false)
                {
                    E5.E05_01 = TC.eSituation["eSituation.01"].vSet[0];
                }
            }
        };
        if (typeof TC.eTimes["eTimes.01"] != 'undefined')
        {
            if (TC.eTimes["eTimes.01"].IsNull == false)
            {
                E5.E05_02 = TC.eTimes["eTimes.01"].vSet[0];
            }
        };

        if (typeof TC.eTimes["eTimes.02"] != 'undefined')
        {
            if (TC.eTimes["eTimes.02"].IsNull != true)
            {
                E5.E05_03 = TC.eTimes["eTimes.02"].vSet[0];
            }
        };

        if (typeof TC.eTimes["eTimes.03"] != 'undefined')
        {
            if (TC.eTimes["eTimes.03"].IsNull != true)
            {
                E5.E05_04 = TC.eTimes["eTimes.03"].vSet[0];
            }
        };

        if (typeof TC.eTimes["eTimes.05"] != 'undefined')
        {
            if (TC.eTimes["eTimes.05"].IsNull != true)
            {
                E5.E05_05 = TC.eTimes["eTimes.05"].vSet[0];
            }
        };

        if (typeof TC.eTimes["eTimes.06"] != 'undefined')
        {
            if (TC.eTimes["eTimes.06"].IsNull != true)
            {
                E5.E05_06 = TC.eTimes["eTimes.06"].vSet[0];
            }
        };

        if (typeof TC.eTimes["eTimes.07"] != 'undefined')
        {
            if (TC.eTimes["eTimes.07"].IsNull != true)
            {

                E5.E05_07 = TC.eTimes["eTimes.07"].vSet[0];
            }
        };

        if (typeof TC.eTimes["eTimes.08"] != 'undefined')
        {
            if (TC.eTimes["eTimes.08"].IsNull != true)
            {
                E5.E05_08 = TC.eTimes["eTimes.08"].vSet[0];
            }
        };

        if (typeof TC.eTimes["eTimes.09"] != 'undefined')
        {
            if (TC.eTimes["eTimes.09"].IsNull != true)
            {
                E5.E05_09 = TC.eTimes["eTimes.09"].vSet[0];
            }
        };


        if (typeof TC.eTimes["eTimes.11"] != 'undefined')
        {
            if (TC.eTimes["eTimes.11"].IsNull != true)
            {
                E5.E05_10 = TC.eTimes["eTimes.11"].vSet[0];
            }
        };

        if (typeof TC.eTimes["eTimes.13"] != 'undefined')
        {
            if (TC.eTimes["eTimes.13"].IsNull != true)
            {
                E5.E05_11 = TC.eTimes["eTimes.13"].vSet[0];
            }
        };

        if (typeof TC.eTimes["eTimes.14"] != 'undefined')
        {
            if (TC.eTimes["eTimes.14"].IsNull != true)
            {
                E5.E05_12 = TC.eTimes["eTimes.14"].vSet[0];
            }
        };

        if (typeof TC.eTimes["eTimes.15"] != 'undefined')
        {
            if (TC.eTimes["eTimes.15"].IsNull == false)
            {
                E5.E05_13 = "";
            }
            else
            {
                E5.E05_13 = TC.eTimes["eTimes.15"].vSet[0];
            }
        }
    };
    
    if ((typeof E5.E05_01 != 'undefined') && (Utils.IsGo(E5.E05_01) == true))
    {
        E05.E05_01 = E5.E05_01
    };

    if ((typeof E5.E05_02 != 'undefined') && (Utils.IsGo(E5.E05_02) == true))
    {
        E05.E05_02 = E5.E05_02
    }
    else
    {
        E05.E05_02 = ""
    };

    if ((typeof E5.E05_03 != 'undefined') && (Utils.IsGo(E5.E05_03) == true))
    {
        E05.E05_03 = E5.E05_03
    }

    if ((typeof E5.E05_04 != 'undefined') && (Utils.IsGo(E5.E05_04) == true))
    {
        E05.E05_04 = E5.E05_04;
    }
    else
    {
        Error.Level = "ELEM";
        Error.Type = "MAN";
        Error.Att = "E05_04"
        Error.Text = "UNIT NOTIFIED BY DISPATCH DATE/TIME  Undefined or Null"
        ErrorList.push(Error)
    };

    if ((typeof E5.E05_05 != 'undefined') && (Utils.IsGo(E5.E05_05) == true))
    {
        E05.E05_05 = E5.E05_05
    }
    else
    {
        E05.E05_05 = ""
    };

    if ((typeof E5.E05_06 != 'undefined') && (Utils.IsGo(E5.E05_06) == true))
    {
        E05.E05_06 = E5.E05_06
    }
    else
    {
        E05.E05_06 = ""
    };

    if ((typeof E5.E05_07 != 'undefined') && (Utils.IsGo(E5.E05_07) == true))
    {
        if (TheCall.CancelType == "Prior")
        {
            E05.E05_07 = ""
        }
        else
        {
            E05.E05_07 = E5.E05_07
        }
    }
    else
    {
        E05.E05_07 = E5.E05_07
    };

    if ((typeof E5.E05_08 != 'undefined') && (Utils.IsGo(E5.E05_08) == true))
    {
        if (TheCall.IsCancelled ==true)
        {
            E05.E05_08 = ""
        }
        else
        {
            E05.E05_08 = E5.E05_08
        }
    }
    else
    {
        E05.E05_08 = ""
    };

    if ((typeof E5.E05_09 != 'undefined') && (Utils.IsGo(E5.E05_09) == true))
    {
        if (TheCall.CancelType == "Prior")
        {
            E05.E05_09 = ""
        }
        else
        {
            E05.E05_09 = E5.E05_09
        }
    }
    else
    {
        E05.E05_09 = ""
    };

    if ((typeof E5.E05_10 != 'undefined') && (Utils.IsGo(E5.E05_10) == true))
    {
        if (TheCall.IsCancelled == true)
        {
            E05.E05_10 = ""
        }
        else
        {
            E05.E05_10 = E5.E05_10
        }
    }
    else
    {
        E05.E05_10 = E5.E05_10
    };

    if ((typeof E5.E05_11 != 'undefined') && (Utils.IsGo(E5.E05_11) == true))
    {
        if (TheCall.IsCancelled == true)
        {
            E05.E05_11 = ""
        }
        else
        {
            E05.E05_11 = E5.E05_11
        }
    }
    else
    {
        E05.E05_11 = E5.E05_11
    };


    if ((typeof E5.E05_12 != 'undefined') && (Utils.IsGo(E5.E05_12) == true))
    {
        if (TheCall.IsCancelled == true)
        {
            E05.E05_12 = E5.E05_12
        }
        else
        {
            E05.E05_12 = ""
        }
    }
    else
    {
        E05.E05_12 = "";
    };

    if ((typeof E5.E05_13 != 'undefined') && (Utils.IsGo(E5.E05_13) == true))
    {
            E05.E05_13 = E5.E05_13
    }
    else
    {
        E05.E05_13 = ""
    };
    E05.ErrorList = ErrorList;
    return E05
};

