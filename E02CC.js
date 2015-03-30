var Utils = require('cloud/UtilitiesCC.js');
var V2Utils = require('cloud/ConversionUtilsCC.js');
exports.setE02 = function (TheCall)
{
    
    if (typeof TheCall.eResponse == 'undefined')
    {
        var E02 = {};
        E02.IsUndefined = true;
        return E02;
    }
    else {
        
        var E2 = {};
        var eR = {};
        eR = TheCall.eResponse;        
        if (typeof eR.AgencyGroup != 'undefined')
        {
            if (typeof eR.AgencyGroup["eResponse.01"] != 'undefined')
            {
                E2.E02_01 = eR.AgencyGroup["eResponse.01"].vSet[0];
            }
        };

        if (typeof eR["eResponse.03"] != 'undefined')
        {
            if (eR["eResponse.03"].IsNull == false)
            {
                E2.E02_02 = eR["eResponse.03"].vSet[0];
            }
        };
        if (typeof eR["eResponse.04"] != 'undefined')
        {
            if (eR["eResponse.04"].IsNull == false)
            {
                E2.E02_03 = eR["eResponse.04"].vSet[0];
            }
        };

        if (typeof eR.ServiceGroup != 'undefined')
        {
            if (typeof eR.ServiceGroup["eResponse.05"] != 'undefined')
            {
                if (eR.ServiceGroup["eResponse.05"].IsNull == false)
                {
                    E2.E02_04 = V2Utils.setV2("eResponse.05", eR.ServiceGroup["eResponse.05"].vSet[0]);
                }
            }
        };

        if (typeof eR["eResponse.07"] != 'undefined')
        {
            if (eR["eResponse.07"].IsNull == false)
            {
                E2.E02_05 = V2Utils.setV2("eResponse.07", eR["eResponse.07"].vSet[0]);
            }
        };

        if (typeof eR["eResponse.08"] != 'undefined')
        {
            var E02_06 = []
            if (eR["eResponse.08"].IsNull == false)
            {
                for (var i = 0; i < eR["eResponse.08"].vSet.length; i++)
                {
                    E02_06.push(V2Utils.setV2("eResponse.08", eR["eResponse.08"].vSet[i]));
                }
            }
            E2.E02_06 = E02_06;
        };

        if (typeof eR["eResponse.09"] != 'undefined')
        {
            if (eR["eResponse.09"].IsNull == false)
            {
                var E02_07 = [];
                for (var i = 0; i < eR["eResponse.09"].vSet.length; i++)
                {
                    E02_07.push(V2Utils.setV2("eResponse.09", eR["eResponse.09"].vSet[i]));
                }
            };
            E2.E02_07 = E02_07;
        };
        if (typeof eR["eResponse.10"] != 'undefined')
        {
            if (eR["eResponse.10"].IsNull == false)
            {
                var E02_08 = [];
                for (var i = 0; i < eR["eResponse.10"].vSet.length; i++)
                {
                    E02_08.push(V2Utils.setV2("eResponse.10", eR["eResponse.10"].vSet[i]));
                };
                E2.E02_08 = E02_08;
            }
        };

        if (typeof eR["eResponse.11"] != 'undefined')
        {
            if (eR["eResponse.11"].IsNull == false)
            {
                var E02_09 = [];
                for (var i = 0; i < eR["eResponse.11"].vSet.length; i++)
                {
                    E02_09.push(V2Utils.setV2("eResponse.11", eR["eResponse.11"].vSet[i]));
                };
                E2.E02_09 = E02_09;
            }
        };

        if (typeof eR["eResponse.12"] != 'undefined')
        {
            if (eR["eResponse.12"].IsNull == false)
            {
                var E02_10 = [];
                for (var i = 0; i < eR["eResponse.12"].vSet.length; i++)
                {
                    E02_10.push(V2Utils.setV2("eResponse.12", eR["eResponse.12"].vSet[i]));
                }
                E2.E02_10 = E02_10;
            };
        };

        if (typeof eR["eResponse.13"] != 'undefined')
        {
            if (eR["eResponse.13"].IsNull == false)
            {
                E2.E02_11 = eR["eResponse.13"].vSet[0];
            }
        };

        if (typeof eR["eResponse.14"] != 'undefined')
        {
            if (eR["eResponse.14"].IsNull == false)
            {
                E2.E02_12 = eR["eResponse.14"].vSet[0];
            }
        };

        if (typeof eR["eResponse.16"] != 'undefined')
        {
            if (eR["eResponse.16"].IsNull == false)
            {
                E2.E02_13 = eR["eResponse.16"].vSet[0];
            }
        };

        if (typeof eR["eResponse.17"] != 'undefined')
        {
            if (eR["eResponse.17"].IsNull == false)
            {
                E2.E02_15 = eR["eResponse.17"].vSet[0];
            }
        };


        if (typeof eR["eResponse.19"] != 'undefined')
        {
            if (eR["eResponse.19"].IsNull == false)
            {
                E2.E02_16 = eR["eResponse.19"].vSet[0];
            }
        };

        if (typeof eR["eResponse.20"] != 'undefined')
        {
            if (eR["eResponse.20"].IsNull == false)
            {
                E2.E02_17 = eR["eResponse.20"].vSet[0];
            }
        };

        if (typeof eR["eResponse.21"] != 'undefined')
        {
            if (eR["eResponse.21"].IsNull == false)
            {
                E2.E02_18 = eR["eResponse.21"].vSet[0];
            }
        };

        if (typeof eR["eResponse.22"] != 'undefined')
        {
            if (eR["eResponse.22"].IsNull == false)
            {
                E2.E02_19 = eR["eResponse.22"].vSet[0];
            }
        };

        if (typeof eR["eResponse.23"] != 'undefined')
        {
            if (eR["eResponse.23"].IsNull == false)
            {
                E2.E02_20 = V2Utils.setV2("eResponse.23", eR["eResponse.23"].vSet[0]);
            }
        };
    };

    //The Rules:  Rather than embedding exceptional processes, I've created individual process paths
    //for Calls of particular type: namely Cancel and StandBy.
    if (typeof E2 == 'undefined')
    {
        Error.Level = "SECTION";
        Error.Type = "MAN";
        Error.Att = ""
        Error.Text = "E02 Undefined"
        ErrorList.push(Error)
    }
    else
    {        
        var E02 = {};
        if ((typeof E2.E02_01 != 'undefined') && (Utils.IsGo(E2.E02_01) == true))
        {
            E02.E02_01 = E2.E02_01;
        }
        else
        {
            Error.Level = "ELEM";
            Error.Type = "MAN";
            Error.Att = "E02_01"
            Error.Text = "EMS Agency Number Undefined or Null"
            ErrorList.push(Error)
        };

        if ((typeof E2.E02_02 != 'undefined') && (Utils.IsGo(E2.E02_02) == true))
        {
            if (TheCall.IsCancelled == true)
            {
                E02.E02_02 = "-25"
            }
            else
            {
                E02.E02_02 = E2.E02_02
            }
        }
        else
        {
            E02.E02_02 = "-20";
        };
        
        if ((typeof E2.E02_03 != 'undefined') && (Utils.IsGo(E2.E02_03) == true))
        {
            if (TheCall.IsCancelled == true)
            {
                E02.E02_03 = "-25"
            }
            else
            {
                E02.E02_03 = E2.E02_03
            }
        }
        else
        {
            E02.E02_03 = "-20"
        };

        if ((typeof E2.E02_04 != 'undefined') && (Utils.IsGo(E2.E02_04) == true))
        {
            E02.E02_04 = E2.E02_04;
        }
        else
        {
            Error.Level = "ELEM";
            Error.Type = "MAN";
            Error.Att = "E02_04"
            Error.Text = "TYPE OF SERVICE REQUESTED Undefined or Null"
            ErrorList.push(Error)
        };

        if ((typeof E2.E02_05 != 'undefined') && (Utils.IsGo(E2.E02_05) == true))
        {
            E02.E02_05 = E2.E02_05;
        }
        else
        {
            Error.Level = "ELEM";
            Error.Type = "MAN";
            Error.Att = "E02_05"
            Error.Text = "PRIMARY ROLE OF THE UNIT Undefined or Null"
            ErrorList.push(Error)
        };

        if (TheCall.StandBy == true) {
            E02.E02_06 = "-20";
        }
        else if (TheCall.IsCancelled == true) {
            E02.E02_06 = "-20";
        }
        else if ((typeof E2.E02_06 != 'undefined') && (Utils.IsGo(E2.E02_06) == true))
        {
            E02.E02_06 = E2.E02_06;
        }
        else
        {            
            var tmp = [];
            tmp.push('105');  //none
            E02.E02_06 = tmp;
            //E2.E02_06 = NOTKNOWN;
        };

        ///E07
        if (TheCall.StandBy == true) {
            E02.E02_07 = "-20";
        }
        else if (TheCall.IsCancelled == true) {
            E02.E02_07 = "-20";
        }
        else if ((typeof E2.E02_07 != 'undefined') && (Utils.IsGo(E2.E02_07) == true))
            {
            E02.E02_07 = E2.E02_07
            }
        else
        {
            var tmp1 = [];
            tmp1.push('150');  //none
            E02.E02_07 = tmp;
            //E2.E02_07 = NOTKNOWN
        };


        //E08
        if (TheCall.StandBy == true)
        {
            E02.E02_08 = "-20";
        }
        else if (TheCall.IsCancelled == true)
        {
            E02.E02_08 = "-20";
        }
        else if ((typeof E2.E02_08 != 'undefined') && (Utils.IsGo(E2.E02_08) == true))
        {
            E02.E02_08 = E2.E02_08
        }
        else
        {
            var tmp2 = [];
            tmp2.push("225")
            E02.E02_08 = tmp2;
            // E2.E02_08 = NOTAPPLICABLE
        };

        //E09
        if (TheCall.StandBy == true) {
            E02.E02_09 = "-20";
        }
        else if (TheCall.IsCancelled == true) {
            E02.E02_09 = "-20";
        }
        else if ((typeof E2.E02_09 != 'undefined') && (Utils.IsGo(E2.E02_09) == true))
        {
            E02.E02_09 = E2.E02_09            
        }
        else
        {
            //E2.E02_09 = NOTAPPLICABLE   
            var tmp9 = [];
            tmp9.push("290")
            E02.E02_09 = tmp9;
        };

        //E10
        if (TheCall.StandBy == true) {
            E02.E02_10 = "-20";
        }
        else if (TheCall.IsCancelled == true) {
            E02.E02_10 = "-20";
        }
        else if ((typeof E2.E02_10 != 'undefined') && (Utils.IsGo(E2.E02_10) == true))
        {
            E02.E02_10 = E2.E02_10
        }
        else
        {
            var tmp3 = [];
            //E02.E02_10 = NOTKNOWN
            tmp3.push("360");
            E02.E02_10 = tmp3;
        };


        if ((typeof E2.E02_11 != 'undefined') && (Utils.IsGo(E2.E02_11) == true))
        {
            E02.E02_11 = E2.E02_11        
        };

        if ((typeof E2.E02_12 != 'undefined') && (Utils.IsGo(E2.E02_12) == true))
        {
            E02.E02_12 = E2.E02_12
        }
        else
        {
            Error.Level = "ELEM";
            Error.Type = "MAN";
            Error.Att = "E02_12"
            Error.Text = "EMS UNIT CALL SIGN (RADIO NUMBER) Undefined or Null"
            ErrorList.push(Error)
        };

        if ((typeof E2.E02_13 != 'undefined') && (Utils.IsGo(E2.E02_13) == true))
        {
            E02.E02_13 = E2.E02_13
        }

        if ((typeof E2.E02_14 != 'undefined') && (Utils.IsGo(E2.E02_14) == true))
        {
            E02.E02_14 = E2.E02_14
        }

        if ((typeof E2.E02_15 != 'undefined') && (Utils.IsGo(E2.E02_15) == true))
        {
            E02.E02_15 = E2.E02_15
        };

        if ((typeof E2.E02_16 != 'undefined') && (Utils.IsGo(E2.E02_16) == true))
        {
            E02.E02_16 = E2.E02_16
        };

        if ((typeof E2.E02_17 != 'undefined') && (Utils.IsGo(E2.E02_17) == true))
        {
            E02.E02_17 = E2.E02_17
        };

        if ((typeof E2.E02_18 != 'undefined') && (Utils.IsGo(E2.E02_18) == true))
        {
            E02.E02_18 = E2.E02_18
        }

        if ((typeof E2.E02_19 != 'undefined') && (Utils.IsGo(E2.E02_19) == true))
        {
            E02.E02_19 = E2.E02_19
        };

        if ((typeof E2.E02_20 != 'undefined') && (Utils.IsGo(E2.E02_20) == true))
        {
            E02.E02_20 = E2.E02_20
        }
        else
        {
            Error.Level = "ELEM";
            Error.Type = "MAN";
            Error.Att = "E02_20"
            Error.Text = "RESPONSE MODE TO SCENE Undefined or Null"
            ErrorList.push(Error)
        }
    };
    E02.IsUndefined = false;
    E02.ErrorList = ErrorList;
    return E02
};
