var Utils = require('cloud/UtilitiesCC.js');
var V2Utils = require('cloud/ConversionUtilsCC.js');
exports.setE21 = function (TheCall)
{
    var TC = TheCall;
    if (typeof TC.eDevice == 'undefined')
    {
        var E21 = {};
        E21.IsUndefined = true;
        return E21;
    }
    else
    {
        
        var E21Array = [];
        for (var xx = 0; xx < TC.Device.length; xx++)
        {
            var e21 = {};

            if (typeof TC.Device[xx]["eDevice.02"] != 'undefined')
            {
                e21.E21_01 = "";
                if (TC.Device[xx]["eDevice.02"].IsNull == false)
                {
                    e21.E21_01 = TC.eDevice[xx]["eDevice.02"].vSet[0];
                }
            };

            if (typeof TC.Device[xx]["eDevice.03"] != 'undefined')
            {
                e21.E21_02 = "";
                if (TC.Device[xx]["eDevice.03"].IsNull == false)
                {
                    e21.E21_02 = V2Utils.setV2("eDevice.03", TC.eDevice[xx]["eDevice.03"].vSet[0]);
                }
            };

            if (typeof TC.Device[xx]["eDevice.04"] != 'undefined')
            {
                e21.E21_03 = "";
                if (TC.Device[xx]["eDevice.04"].IsNull == false)
                {
                    e21.E21_03 = V2Utils.setV2("eDevice.04", TC.eDevice[xx]["eDevice.04"].vSet[0]);
                }
            };


            if (typeof TC.Device[xx]["eDevice.05"] != 'undefined')
            {
                e21.E21_04 = "";
                if (TC.Device[xx]["eDevice.05"].IsNull == false)
                {
                    e21.E21_04 = V2Utils.setV2("eDevice.05", TC.eDevice[xx]["eDevice.05"].vSet[0]);
                }
            };

            if (typeof TC.Device[xx]["eDevice.06"] != 'undefined')
            {
                e21.E21_05 = "";
                if (TC.Device[xx]["eDevice.06"].IsNull == false)
                {
                    e21.E21_05 = V2Utils.setV2("eDevice.06", TC.eDevice[xx]["eDevice.06"].vSet[0]);
                }
            };

            if (typeof TC.Device[xx]["eDevice.07"] != 'undefined')
            {
                e21.E21_06 = "";
                if (TC.Device[xx]["eDevice.07"].IsNull == false)
                {
                    e21.E21_06 = V2Utils.setV2("eDevice.07", TC.eDevice[xx]["eDevice.07"].vSet[0]);
                }
            };

            if (typeof TC.Device[xx]["eDevice.08"] != 'undefined')
            {
                e21.E21_07 = "";
                if (TC.Device[xx]["eDevice.08"].IsNull == false)
                {
                    e21.E21_07 = V2Utils.setV2("eDevice.08", TC.eDevice[xx]["eDevice.08"].vSet[0]);
                }
            };

            if (typeof TC.Device[xx]["eDevice.09"] != 'undefined')
            {
                e21.E21_08 = "";
                if (TC.Device[xx]["eDevice.09"].IsNull == false)
                {
                    e21.E21_08 = V2Utils.setV2("eDevice.09", TC.eDevice[xx]["eDevice.09"].vSet[0]);
                }
            };

            if (typeof TC.Device[xx]["eDevice.10"] != 'undefined')
            {
                e21.E21_09 = "";
                if (TC.Device[xx]["eDevice.10"].IsNull == false)
                {
                    e21.E21_09 = V2Utils.setV2("eDevice.10", TC.eDevice[xx]["eDevice.10"].vSet[0]);
                }
            };


            if (typeof TC.Device[xx]["eDevice.11"] != 'undefined')
            {
                e21.E21_10 = "";
                if (TC.Device[xx]["eDevice.11"].IsNull == false)
                {
                    e21.E21_10 = V2Utils.setV2("eDevice.11", TC.eDevice[xx]["eDevice.11"].vSet[0]);
                }
            };

            if (typeof TC.Device[xx]["eDevice.12"] != 'undefined')
            {
                e21.E21_11 = "";
                if (TC.Device[xx]["eDevice.12"].IsNull == false)
                {
                    e21.E21_11 = V2Utils.setV2("eDevice.12", TC.eDevice[xx]["eDevice.12"].vSet[0]);
                }
            };
        }
        E21Array.push(e21)


        var E21 = [];
        for (var i = 0; i < E21Array.length; i++) {
            var _e21 = {}
            if ((typeof E21Array[i].e21.E21_01 != 'undefined') && (Utils.IsGo(E21Array[i].e21.E21_01) == true)) {
                _e21.E21_01 = E21Array[i].e21.E21_01;
            };

            if ((typeof E21Array[i].e21.E21_02 != 'undefined') && (Utils.IsGo(E21Array[i].e21.E21_02) == true)) {
                _e21.E21_02 = E21Array[i].e21.E21_02;
            };

            var E2103 = false;
            if ((typeof E21Array[i].e21.E21_03 != 'undefined') && (Utils.IsGo(E21Array[i].e21.E21_03) == true)) {
                _e21.E21_03 = E21Array[i].e21.E21_03;
                E2103 = true;
            };

            if ((typeof E21Array[i].e21.E21_04 != 'undefined') && (Utils.IsGo(E21Array[i].e21.E21_04) == true)) {
                _e21.E21_04 = E21Array[i].e21.E21_04;
                E2103 = true;
            };
            if (E2103 == true) {
                var E21_03_0 = {};
                E21_03_0.E21.E21_03 = E21.E21_03;
                E21_03_0.E21.E21_04 = E21.E21_04;
                e21.E21_03_0 = E21_03_0;
            };
            

            if ((typeof E21Array[i].e21.E21_05 != 'undefined') && (Utils.IsGo(E21Array[i].e21.E21_05) == true)) {
                _e21.E21_05 = E21Array[i].e21.E21_05;
            };

            if ((typeof E21Array[i].e21.E21_06 != 'undefined') && (Utils.IsGo(E21Array[i].e21.E21_06) == true)) {
                _e21.E21_06 = E21Array[i].e21.E21_06;
            };

            if ((typeof E21Array[i].e21.E21_07 != 'undefined') && (Utils.IsGo(E21Array[i].e21.E21_07) == true)) {
                _e21.E21_07 = E21Array[i].e21.E21_07;
            };

            if ((typeof E21Array[i].e21.E21_08 != 'undefined') && (Utils.IsGo(E21Array[i].e21.E21_08) == true)) {
                _e21.E21_08 = E21Array[i].e21.E21_08;
            };

            if ((typeof E21Array[i].e21.E21_09 != 'undefined') && (Utils.IsGo(E21Array[i].e21.E21_09) == true)) {
                _e21.E21_09 = E21Array[i].e21.E21_09;
            };

            if ((typeof E21Array[i].e21.E21_10 != 'undefined') && (Utils.IsGo(E21Array[i].e21.E21_10) == true)) {
                _e21.E21_10 = E21Array[i].e21.E21_10;
            };

            if ((typeof E21Array[i].e21.E21_11 != 'undefined') && (Utils.IsGo(E21Array[i].e21.E21_11) == true)) {
                _e21.E21_11 = E21Array[i].e21.E21_11;
            };

            if ((typeof E21Array[i].e21.E21_12 != 'undefined') && (Utils.IsGo(E21Array[i].e21.E21_12) == true)) {
                _e21.E21_12 = E21Array[i].e21.E21_12;
            };

            if ((typeof E21Array[i].e21.E21_13 != 'undefined') && (Utils.IsGo(E21Array[i].e21.E21_13) == true)) {
                _e21.E21_13 = E21Array[i].e21.E21_13;
            };

            if ((typeof E21Array[i].e21.E21_14 != 'undefined') && (Utils.IsGo(E21Array[i].e21.E21_14) == true)) {
                _e21.E21_14 = E21Array[i].e21.E21_14;
            };

            if ((typeof E21Array[i].e21.E21_15 != 'undefined') && (Utils.IsGo(E21Array[i].e21.E21_15) == true)) {
                _e21.E21_15 = E21Array[i].e21.E21_15;
            };

            if ((typeof E21Array[i].e21.E21_16 != 'undefined') && (Utils.IsGo(E21Array[i].e21.E21_16) == true)) {
                _e21.E21_16 = E21Array[i].e21.E21_16;
            };

            if ((typeof E21Array[i].e21.E21_17 != 'undefined') && (Utils.IsGo(E21Array[i].e21.E21_17) == true)) {
                _e21.E21_17 = E21Array[i].e21.E21_17;
            };

            var E2118 = false;
            if ((typeof E21Array[i].e21.E21_18 != 'undefined') && (Utils.IsGo(E21Array[i].e21.E21_18) == true)) {
                _e21.E21_18 = E21Array[i].e21.E21_18;
                E2118 = true;
            };

            if ((typeof E21Array[i].e21.E21_19 != 'undefined') && (Utils.IsGo(E21Array[i].e21.E21_19) == true)) {
                _e21.E21_19 = E21Array[i].e21.E21_19;
                E2118 = true;
            };

            if ((typeof E21Array[i].e21.E21_20 != 'undefined') && (Utils.IsGo(E21Array[i].e21.E21_20) == true)) {
                _e21.E21_20 = E21Array[i].e21.E21_20;
            };

            if (E2118 == true) {
                var E21_18_0 = {};
                E21_18_0.E21.E21_18 = E21.E21_18;
                E21_18_0.E21.E21_19 = E21.E21_19;
                e21.E21_18_0 = E21_18_0;
            };
            
            E21.push(_e21)
        }

    };
    E21.IsUndefined = false;
    E21.ErrorList = ErrorList;
    return E21;
};