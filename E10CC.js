var Utils = require('cloud/UtilitiesCC.js');
var V2Utils = require('cloud/ConversionUtilsCC.js');
exports.setE10 = function (TheCall) {
    var TC = TheCall;
    var ErrorList = {};
    
    if (typeof TC.eInjury == 'undefined') {
        var E10 = {};
        E10.IsUndefined = true;
        return E10;
    }
    else
    {
        var e10 = {};
        if (typeof TC.eInjury["eInjury.01"] != 'undefined') {
            e10.E10_01 = "";
            if (TC.eInjury["eInjury.01"].IsNull == false) {
                e10.E10_01 = (TC.eInjury["eInjury.01"].vSet[0]);                
            }
        };


        if (typeof TC.eInjury["eInjury.02"] != 'undefined') {
            var E10_03 = [];
            if (TC.eInjury["eInjury.02"].IsNull == false) {
                for (var i = 0; i < TC.eInjury["eInjury.02"].vSet.length; i++) {
                    var arr1002 = []
                    var retValue = "";
                    retValue = sete10_02(TC.eInjury["eInjury.02"].vSet[i]);

                    if (arr1002.indexOf(retValue) == -1) {
                        arr1002.push(retValue)
                    };
                };

                for (var i = 0; i < arr1002.length; i++) {
                    E10_03.push(arr1002[i]);
                }
            }
        };
        e10.E10_03 = E10_03;

        if (typeof TC.eInjury["eInjury.04"] != 'undefined') {
            var E10_04 = [];
            if (TC.eInjury["eInjury.04"].IsNull == false) {
                for (var i = 0; i < TC.eInjury["eInjury.04"].vSet.length; i++) {
                    E10_04.push(V2Utils.setV2("eInjury.04", TC.eInjury["eInjury.04"].vSet[i]));
                };
                e10.E10_04 = E10_04;
            }
        };

        if (typeof TC.eInjury["eInjury.05"] != 'undefined') {
            var E10_05 = [];
            for (var i = 0; i < TC.eInjury["eInjury.05"].vSet.length; i++) {
                E10_05.push(V2Utils.setV2("eInjury.05", TC.eInjury["eInjury.05"].vSet[i]));
            };
            e10.E10_05 = E10_05;
        };

        if (typeof TC.eInjury["eInjury.06"] != 'undefined') {
            e10.E10_06 = "";
            e10.E10_07 = "";
            if (TC.eInjury["eInjury.06"].vSet[0] == "2906001") {
                e10.E10_06 = "1";
                e10.E10_07 = "2150";
            };
            if (TC.eInjury["eInjury.06"].vSet[0] == "2906003") {
                e10.E10_06 = "1";
                e10.E10_07 = "2155";

            };
            if (TC.eInjury["eInjury.06"].vSet[0] == "2906005") {
                e10.E10_06 = "1";
                e10.E10_07 = "2165";
            };
            if (TC.eInjury["eInjury.06"].vSet[0] == "2906007") {

                e10.E10_06 = "50";
                e10.E10_07 = "2160";

            };

            if (TC.eInjury["eInjury.06"].vSet[0] == "2906009") {
                e10.E10_06 = "50";
                e10.E10_07 = "2160";

            };

            if (TC.eInjury["eInjury.06"].vSet[0] == "2906011") {
                e10.E10_06 = "50";
                e10.E10_07 = "2160";
            };
            if (TC.eInjury["eInjury.06"].vSet[0] == "2906013") {
                e10.E10_06 = "2";
                e10.E10_07 = "2155";
            };
            if (TC.eInjury["eInjury.06"].vSet[0] == "2906015") {
                e10.E10_06 = "2";
                e10.E10_07 = "2165";
            };
            if (TC.eInjury["eInjury.06"].vSet[0] == "2906017") {
                e10.E10_06 = "2";
                e10.E10_07 = "2165";
            };
            if (TC.eInjury["eInjury.06"].vSet[0] == "2906019") {
                e10.E10_06 = "2";
                e10.E10_07 = "2160";
            };

            if (TC.eInjury["eInjury.06"].vSet[0] == "2906021") {
                e10.E10_06 = "3";
                e10.E10_07 = "2160";
            };
            if (TC.eInjury["eInjury.06"].vSet[0] == "2906023") {
                e10.E10_06 = "3";
                e10.E10_07 = "2155";
            };
            if (TC.eInjury["eInjury.06"].vSet[0] == "2906025") {
                e10.E10_06 = "3";
                e10.E10_07 = "2165";
            };

            if (TC.eInjury["eInjury.06"].vSet[0] == "2906019") {
                e10.E10_06 = "50";
                e10.E10_07 = "2160";
            };

            if (TC.eInjury["eInjury.06"].vSet[0] == "2906019") {
                e10.E10_06 = "50";
                e10.E10_07 = "2160";
            };


            if (typeof TC.eInjury["eInjury.07"] != 'undefined') {
                var E10_08 = [];
                for (var i = 0; i < TC.eInjury["eInjury.08"].vSet.length; i++) {
                    E10_08.push(V2Utils.setV2("eInjury.08", TC.eInjury["eInjury.08"].vSet[i]));
                };
                e10.E10_08 = E10_08;
            }
        };


        if (typeof TC.eInjury["eInjury.08"] != 'undefined') {
            var E10_09 = [];
            if (TC.eInjury["eInjury.08"].IsNull == false) {
                for (var i = 0; i < TC.eInjury["eInjury.08"].vSet.length; i++) {
                    E10_09.push(V2Utils.setV2("eInjury.08", TC.eInjury["eInjury.08"].vSet[i]));
                };
                e10.E10_09 = E10_09
            }
        };



        if (typeof TC.eInjury["eInjury.09"] != 'undefined') {
            e10.E10_10 = "";
            if (TC.eInjury["eInjury.09"].IsNull == false) {
                e10.E10_10 = TC.eInjury["eInjury.09"].vSet[0];
            }
        }
    
    var E10 = {};
    if (TheCall.HasPatient == false)
    {
        E10.E10_01 = "-25";
        E10.E10_02 = "-25";
        var E103=[];
        E103.push("-25")
        
        E10.E10_03= E103
        E10.E10_04 = "-25";
    }
    else {
        if ((typeof e10.E10_01 != 'undefined') && (Utils.IsGo(e10.E10_01) == true)) {
            E10.E10_01 = e10.E10_01;
        }
        else {
            E10.E10_01 = "-10";
        };

        if ((typeof e10.E10_02 != 'undefined') && (Utils.IsGo(e10.E10_02) == true)) {
            E10.E10_02 = e10.E10_02;
        }
        else {
            E10.E10_02 = "-10";
        };

        var e10_3 = [];
        if ((typeof e10.E10_03 != 'undefined') && (Utils.IsGo(e10.E10_03) == true)) {
            e10_3 = e10.E10_03;
        }
        else {
            e10_3.push("-10");
        };
        E10.E10_03 = e10_3;

        var e10_4 = [];
        if ((typeof e10.E10_04 != 'undefined') && (Utils.IsGo(e10.E10_04) == true)) {
            E10.E10_04 = e10.E10_04;
        }
        else {
            e10_4.push("-10")
        };
        E10.E10_04 = e10_4;

        var e10_5 = [];
        if ((typeof e10.E10_05 != 'undefined') && (Utils.IsGo(e10.E10_05) == true)) {
            E10.E10_05 = e10.E10_05;
        }
        else {
            e10_5.push("-10")
        };
        E10.E10_05 = e10_5;

        var E1006 = false;
        if ((typeof e10.E10_06 != 'undefined') && (Utils.IsGo(e10.E10_06) == true)) {
            E10.E10_06 = e10.E10_06;
            E1006 = true;
        };


        if ((typeof e10.E10_07 != 'undefined') && (Utils.IsGo(e10.E10_07) == true)) {
            E10.E10_07 = e10.E10_07;
            E1006 = true;
        }
        else {
            E10.E10_07 = "-10";
        };

        if (E1006 == true) {
            var E10_06_0 = {};
            E10_06_0.E10_06 = E10.E10_06;
            E10_06_0.E10_07 = E10.E10_07;
            E10.E10_06_0 = E10_06_0;
        };

        var e10_8 = [];
        if ((typeof e10.E10_08 != 'undefined') && (Utils.IsGo(e10.E10_08) == true)) {
            E10.E10_08 = e10.E10_08;
        }
        else {
            e10_8.push("-10")
        };
        E10.E10_08 = e10_8;

        var e10_9 = [];
        if ((typeof e10.E10_09 != 'undefined') && (Utils.IsGo(e10.E10_09) == true)) {
            E10.E10_09 = e10.E10_09;
        }
        else {
            e10_9.push("-10")
        };
        E10.E10_09 = e10_9;

        if ((typeof e10.E10_10 != 'undefined') && (Utils.IsGo(e10.E10_10) == true)) {
            E10.E10_10 = e10.E10_10;
        }
        else {
            E10.E10_10 = "-10";
        };
    }
    E10.IsUndefined = false;
    E10.ErrorList = ErrorList;
    return E10
    }
};
