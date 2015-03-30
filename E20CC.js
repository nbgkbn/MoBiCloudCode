var Utils = require('cloud/UtilitiesCC.js');
var V2Utils = require('cloud/ConversionUtilsCC.js');
exports.setE20 = function (TheCall)
{
    var TC = TheCall;
    if (typeof TC.eDisposition == 'undefined')
    {
        var E20 = {};
        E20.IsUndefined = true;
        return E20;
    }
    else
    {
        if (typeof TC.eDisposition.DestinationGroup != 'undefined')
        {
            var obj = TC.eDisposition.DestinationGroup
            var e20={};
            if (typeof obj["eDisposition.01"] != 'undefined')
            {
                e20.E20_01 = "";
                if (obj["eDisposition.01"].IsNull == false)
                {
                    e20.E20_01 = obj["eDisposition.01"].vSet[0];
                }
            };


            if (typeof obj["eDisposition.02"] != 'undefined')
            {
                e20.E20_02 = "";
                if (obj["eDisposition.02"].IsNull == false)
                {
                    e20.E20_02 = obj["eDisposition.02"].vSet[0];
                }
            };
            var E20_03_0 = false;
            if (typeof obj["eDisposition.03"] != 'undefined')
            {
                e20.E20_03 = "";
                if (obj["eDisposition.03"].IsNull != true)
                {
                    e20.E20_03 = obj["eDisposition.03"].vSet[0];
                    E20_03_0 = true;
                }
            };


            if (typeof obj["eDisposition.04"] != 'undefined')
            {
                e20.E20_04 = "";
                if (obj["eDisposition.04"].IsNull != true)
                {
                    e20.E20_04 = obj["eDisposition.04"].vSet[0];
                    E20_03_0 = true;
                }
            };


            if (typeof obj["eDisposition.05"] != 'undefined')
            {
                e20.E20_05 = "";
                if (obj["eDisposition.05"].IsNull == false)
                {
                    e20.E20_05 = obj["eDisposition.05"].vSet[0];
                    E20_03_0 = true;
                }
            };

            if (typeof obj["eDisposition.06"] != 'undefined')
            {
                e20.E20_06 = "";
                if (obj["eDisposition.06"].IsNull == false)
                {
                    e20.E20_06 = obj["eDisposition.06"].vSet[0];
                    E20_03_0 = true;
                }
            };

            if (typeof obj["eDisposition.07"] != 'undefined')
            {
                e20.E20_07 = "";
                if (obj["eDisposition.07"].IsNull == false)
                {
                    e20.E20_07 = obj["eDisposition.07"].vSet[0];
                    E20_03_0 = true;
                }
            };

            if (typeof obj["eDisposition.09"] != 'undefined')
            {
                e20.E20_08 = "";
                if (obj["eDisposition.09"].IsNull != true)
                {
                    e20.E20_08 = TC.eDisposition["eDisposition.09"].vSet[0];
                }
            }
        };
        if (typeof TC.eDisposition["eDisposition.12"] != 'undefined') {
            e20.E20_10 = "";
            if (TC.eDisposition["eDisposition.12"].IsNull == false) {
                e20.E20_10 = V2Utils.setV2("eDisposition.12", TC.eDisposition["eDisposition.12"].vSet[0]);
            }
        };

        if (typeof TC.eDisposition["eDisposition.13"] != 'undefined') {
            e20.E20_11 = "";
            if (TC.eDisposition["eDisposition.13"].IsNull != true) {
                e20.E20_11 = V2Utils.setV2("eDisposition.13", TC.eDisposition["eDisposition.13"].vSet[0]);
            };
        };

        if (typeof TC.eDisposition["eDisposition.14"] != 'undefined') {
            e20.E20_12 = "";
            if (TC.eDisposition["eDisposition.14"].IsNull != true) {
                e20.E20_12 = V2Utils.setV2("eDisposition.14", TC.eDisposition["eDisposition.14"].vSet[0]);
            }
        };

        if (typeof TC.eDisposition["eDisposition.15"] != 'undefined') {
            e20.E20_13 = "";
            if (TC.eDisposition["eDisposition.15"].IsNull != true) {
                e20.E20_13 = V2Utils.setV2("eDisposition.15", TC.eDisposition["eDisposition.15"].vSet[0]);
            }
        };

        if (typeof TC.eDisposition["eDisposition.17"] != 'undefined') {
            e20.E20_14 = "";
            if (TC.eDisposition["eDisposition.17"].IsNull == false) {

                e20.E20_14 = V2Utils.setV2("eDisposition.17", TC.eDisposition["eDisposition.17"].vSet[0]);
            }
        };

        if (typeof TC.eDisposition["eDisposition.19"] != 'undefined') {
            e20.E20_15 = "";
            if (TC.eDisposition["eDisposition.19"].IsNull == false) {
                e20.E20_15 = V2Utils.setV2("eDisposition.19", TC.eDisposition["eDisposition.19"].vSet[0]);
            }
        };


        if (typeof TC.eDisposition["eDisposition.20"] != 'undefined') {
            e20.E20_16 = "";
            if (TC.eDisposition["eDisposition.20"].IsNull == false) {
                e20.E20_16 = V2Utils.setV2("eDisposition.20", TC.eDisposition["eDisposition.20"].vSet[0]);

            }
        };

        if (typeof TC.eDisposition["eDisposition.21"] != 'undefined') {
            e20.E20_17 = "";
            if (TC.eDisposition["eDisposition.21"].IsNull == false) {
                e20.E20_17 = V2Utils.setV2("eDisposition.21", TC.eDisposition["eDisposition.21"].vSet[0]);
            }
        };
    }
    var E20={};
    if (TheCall.HasTransport == false)
    {
        E20.E20_01 = "-25";
        E20.E20_02 = "-25";
        E20.E20_03 = "-25";
        E20.E20_04 = "-25";
        E20.E20_05 = "-25";
        E20.E20_06 = "-25";
        E20.E20_07 = "-25";
        E20.E20_09 = "-25";
        E20.E20_11 = "-25";
        E20.E20_12 = "-25";
        E20.E20_13 = "-25";
        E20.E20_14 = "-25";
        E20.E20_15 = "-25";
        E20.E20_16 = "-25";
        E20.E20_17 = "-25";
    }
    else
    {
        if ((typeof e20.E20_01 != 'undefined') && (Utils.IsGo(e20.E20_01) == true)) {
            E20.E20_01 = e20.E20_01;
        }
        else
        {
            E20.E20_01 = "-10";
        };

        if ((typeof e20.E20_02 != 'undefined') && (Utils.IsGo(e20.E20_02) == true))
        {
            E20.E20_02 = e20.E20_02;
        }
        else
        {
            E20.E20_02 = "-10";
        };
        var E2003 = false;
        if ((typeof e20.E20_03 != 'undefined') && (Utils.IsGo(e20.E20_03) == true))
        {
            E20.E20_03 = e20.E20_03;
            E2003 = false
        }
        else
        {
            E20.E20_03 = "-10";
        };

        if ((typeof e20.E20_04 != 'undefined') && (Utils.IsGo(e20.E20_04) == true))
        {
            E20.E20_04 = e20.E20_04;
            E2003 = false
        }
        else
        {
            E20.E20_04 = "-10";
        };

        if ((typeof e20.E20_05 != 'undefined') && (Utils.IsGo(e20.E20_05) == true))
        {
            E20.E20_05 = e20.E20_05;
            E2003 = false
        }
        else
        {
            E20.E20_05 = "-10";
        };

        if ((typeof e20.E20_06 != 'undefined') && (Utils.IsGo(e20.E20_06) == true))
        {
            E20.E20_06 = e20.E20_06;
            E2003 = false
        }
        else
        {
            E20.E20_06 = "-10";
        };

        if ((typeof e20.E20_07 != 'undefined') && (Utils.IsGo(e20.E20_07) == true))
        {
            E20.E20_07 = e20.E20_07;
            E2003 = false
        }
        else
        {
            E20.E20_07 = "-10";
        };

        if (E2003 == true) {
            var E20_03_0 = {};
            E20_03_0.E20.E20_03 = E20.E20_03;
            E20_03_0.E20.E20_04 = E20.E20_04;
            E20_03_0.E20.E20_05 = E20.E20_05;
            E20_03_0.E20.E20_06 = E20.E20_06;
            E20.E20_03_0 = E20_03_0;
        };


        if ((typeof e20.E20_08 != 'undefined') && (Utils.IsGo(e20.E20_08) == true))
        {
            E20.E20_08 = e20.E20_08;
        };

        if ((typeof e20.E20_09 != 'undefined') && (Utils.IsGo(e20.E20_09) == true))
        {
            E20.E20_09 = e20.E20_09;
        }
        else
        {
            E20.E20_09 = "-10";
        };


        if ((typeof e20.E20_10 != 'undefined') && (Utils.IsGo(e20.E20_10) == true))
        {
            E20.E20_10 = e20.E20_10;
        };

        if ((typeof e20.E20_11 != 'undefined') && (Utils.IsGo(e20.E20_11) == true))
        {
            E20.E20_11 = e20.E20_11;
        }
        else
        {
            E20.E20_11 = "-10";
        };

        if ((typeof e20.E20_12 != 'undefined') && (Utils.IsGo(e20.E20_12) == true))
        {
            E20.E20_12 = e20.E20_12;
        }
        else
        {
            E20.E20_12 = "-10";
        };


        if ((typeof e20.E20_13 != 'undefined') && (Utils.IsGo(e20.E20_13) == true))
        {
            E20.E20_13 = e20.E20_13;
        }
        else
        {
            E20.E20_13 = "-10";
        };

        if ((typeof e20.E20_14 != 'undefined') && (Utils.IsGo(e20.E20_14) == true))
        {
            E20.E20_14 = e20.E20_14;
        }
        else
        {
            E20.E20_14 = "-10";
        };

        if ((typeof e20.E20_15 != 'undefined') && (Utils.IsGo(e20.E20_15) == true))
        {
            E20.E20_15 = e20.E20_15;
        }
        else
        {
            E20.E20_15 = "-10";
        };

        if ((typeof e20.E20_16 != 'undefined') && (Utils.IsGo(e20.E20_16) == true))
        {
            E20.E20_16 = e20.E20_16;
        }
        else
        {
            E20.E20_16 = "-10";
        };

        if ((typeof e20.E20_17 != 'undefined') && (Utils.IsGo(e20.E20_17) == true))
        {
            E20.E20_17 = e20.E20_17;
        }
        else
        {
            E20.E20_17 = "-10";
        }
    };

    E20.IsUndefined = false;
    E20.ErrorList = ErrorList;
    return E20
};