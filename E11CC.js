var Utils = require('cloud/UtilitiesCC.js');
var V2Utils = require('cloud/ConversionUtilsCC.js');
exports.setE11 = function (TheCall) {
    var TC = TheCall;
    if (typeof TC.eArrest == 'undefined')
    {
        var E11 = {};
        E11.IsUndefined = true;
        return E11
    }
    else
    {
        var e11 = {};
        if (typeof TC.eArrest["eArrest.01"] != 'undefined') {
            e11.E11_01 = "";
            if (TC.eArrest["eArrest.01"].IsNull == false) {
                e11.E11_01 = V2Utils.setV2("eArrest.01", TC.eArrest["eArrest.01"].vSet[0]);
            }
        };
        if (typeof TC.eArrest["eArrest.02"] != 'undefined') {
            e11.E11_02 = "";
            if (TC.eArrest["eArrest.02"].IsNull == false) {
                e11.E11_02 = V2Utils.setV2("eArrest.02", TC.eArrest["eArrest.02"].vSet[0]);
            }
        };


        if (typeof TC.eArrest["eArrest.03"] != 'undefined') {
            var E11_03 = []
            if (TC.eArrest["eArrest.03"].IsNull == false) {
                for (var i = 0; i < TC.eArrest["eArrest.03"].vSet.length; i++) {
                    E11_03.push(V2Utils.setV2("eArrest.03", TC.eArrest["eArrest.03"].vSet[i]));
                };
                e11.E11_03 = E11_03;
            }
        };


        if (typeof TC.eArrest["eArrest.04"] != 'undefined') {
            e11.E11_04 = "";
            if (TC.eArrest["eArrest.04"].IsNull == false) {
                e11.E11_04 = V2Utils.setV2("eArrest.04", TC.eArrest["eArrest.04"].vSet[0]);
            }
        };

        if (typeof TC.eArrest["eArrest.11"] != 'undefined') {
            e11.E11_05 = "";
            if (TC.eArrest["eArrest.11"].IsNull == false) {
                e11.E11_05 = V2Utils.setV2("eArrest.11", TC.eArrest["eArrest.11"].vSet[0]);
            }
        };


        if (typeof TC.eArrest["eArrest.12"] != 'undefined') {
            e11.E11_06 = "";
            if (TC.eArrest["eArrest.12"].IsNull == false) {
                e11.E11_06 = V2Utils.setV2("eArrest.12", TC.eArrest["eArrest.12"].vSet[0]);
            }
        };

        if (typeof TC.eArrest["eArrest.13"] != 'undefined') {
            e11.E11_07 = "";
            if (TC.eArrest["eArrest.13"].IsNull != true) {
                e11.E11_07 = V2Utils.setV2("eArrest.13", TC.eArrest["eArrest.13"].vSet[0]);
            }
        };


        if (typeof TC.eArrest["eArrest.14"] != 'undefined') {
            e11.E11_08 = "";
            if (TC.eArrest["eArrest.14"].IsNull == false) {
                e11.E11_08 = TC.eArrest["eArrest.14"].vSet[0];
            }
        };


        if (typeof TC.eArrest["eArrest.15"] != 'undefined') {
            e11.E11_09 = "";
            if (TC.eArrest["eArrest.15"].IsNull == false) {
                e11.E11_09 = TC.eArrest["eArrest.15"].vSet[0];
            }
        };


        if (typeof TC.eArrest["eArrest.16"] != 'undefined') {
            e11.E11_10 = "";
            if (TC.eArrest["eArrest.16"].IsNull == false) {
                e11.E11_10 = V2Utils.setV2("eArrest.16", TC.eArrest["eArrest.16"].vSet[0]);
            }
        };

        if (typeof TC.eArrest["eArrest.17"] != 'undefined')
        {
            var E11_11 = [];
            if (TC.eArrest["eArrest.17"].IsNull == false) {                
                for (var i = 0; i < TC.eArrest["eArrest.17"].vSet.length; i++)
                {
                    E11_11.push(V2Utils.setV2("eArrest.17", TC.eArrest["eArrest.17"].vSet[i]));
                };
                e11.E11_11 = E11_11
            }
        };
        var E11 = {};
        /*if (TheCall.HasArrest == true) {
            e11.E11_01 = "-25"
            e11.E11_02 = "-25"
            e113 = [];
            e113.push("-25");
            e11.E11_03 = e113;

            e11.E11_04 = "-25"
            e11.E11_05 = "-25"
        //}
        else 
        
            {
            */
            if ((typeof e11.E11_01 != 'undefined') && (Utils.IsGo(e11.E11_01) == true)) {
                E11.E11_01 = e11.E11_01;
            }
            else {
                E11.E11_01 = "-10";
            };

            if ((typeof e11.E11_02 != 'undefined') && (Utils.IsGo(e11.E11_02) == true)) {
                E11.E11_02 = e11.E11_02;
            }
            else {
                E11.E11_02 = "-10";
            };

            e113 = [];
            if ((typeof e11.E11_03 != 'undefined') && (Utils.IsGo(e11.E11_03) == true)) {
                e113=e11.E11_03;
            }
            else {
                e113.push("-10");

            };
            E11.E11_03 = e113;

            if ((typeof e11.E11_04 != 'undefined') && (Utils.IsGo(e11.E11_04) == true)) {
                E11.E11_04 = e11.E11_04;
            }
            else {
                E11.E11_04 = "-10";
            };

            if ((typeof e11.E11_05 != 'undefined') && (Utils.IsGo(e11.E11_05) == true)) {
                E11.E11_05 = e11.E11_05;
            }
            else {
                E11.E11_05 = "-10";
            };

            if ((typeof e11.E11_06 != 'undefined') && (Utils.IsGo(e11.E11_06) == true)) {
                E11.E11_06 = e11.E11_06;
            }
            else {
                E11.E11_06 = "-10";
            };

            if ((typeof e11.E11_07 != 'undefined') && (Utils.IsGo(e11.E11_07) == true)) {
                E11.E11_07 = e11.E11_07;
            }
            else {
                E11.E11_07 = "-10";
            };

            if ((typeof e11.E11_08 != 'undefined') && (Utils.IsGo(e11.E11_08) == true)) {
                E11.E11_08 = e11.E11_08;
            }
            else {
                E11.E11_08 = "-10";
            };

            if ((typeof e11.E11_09 != 'undefined') && (Utils.IsGo(e11.E11_09) == true)) {
                E11.E11_09 = e11.E11_09;
            }
            else {
                E11.E11_09 = "-10";
            };

            if ((typeof e11.E11_10 != 'undefined') && (Utils.IsGo(e11.E11_10) == true)) {
                E11.E11_10 = e11.E11_10;
            }
            else {
                E11.E11_10 = "-10";
            };

            e11a = [];
            if ((typeof e11.E11_11 != 'undefined') && (Utils.IsGo(e11.E11_11) == true)) {
                e11a = e11.E11_11;
            }
            else {
                e11a.push("-10");
            };
            E11.E11_11 = e11a;
        //}
    };
    E11.IsUndefined = false;
    E11.ErrorList = ErrorList;
    return E11;
};

