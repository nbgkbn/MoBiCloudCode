var Utils = require('cloud/UtilitiesCC.js');
var V2Utils = require('cloud/ConversionUtilsCC.js');
exports.setE08 = function (TheCall)
{
    var TC = TheCall;

    if (typeof TC.eScene == 'undefined') {

        var E08 = {};
        E08.IsUndefined = true;
        return E08;
    }
    else {
        var E8 = {};
        if (typeof TC.eScene.ResponderGroup != 'undefined') {
            for (var xx = 0; xx < TC.eScene.ResponderGroup.length; xx++) {
                if (typeof TC.eScene.ResponderGroup[xx]["eScene.02"] != 'undefined') {
                    var E08_01 = [];
                    if (TC.eScene.ResponderGroup[xx]["eScene.02"].IsNull != true) {
                        E08_01.push(TC.eScene.ResponderGroup[xx]["eScene.02"].vSet[0]);
                    }
                    E8.E08_01 = E08_01;
                };

                //RESPONDER GROUP

                if (typeof TC.eScene.ResponderGroup[xx]["eScene.04"] != 'undefined') {
                    var E08_02 = [];
                    if (TC.eScene.ResponderGroup[xx]["eScene.04"].IsNull == false) {
                        E08_02.push(V2Utils.setV2("eScene.04", TC.eScene.ResponderGroup[xx]["eScene.04"].vSet));
                    }
                };
                E8.E08_02 = E08_02;
            }
        };


        //The date/time differential between the initial responder and the EMS unit arriving on the scene, if applicable.


        if (typeof TC.eScene["eScene.05"] != 'undefined') {
            E8.E08_04 = "";
            if (TC.eScene["eScene.05"].IsNull == false) {
                E8.E08_04 = TC.eScene["eScene.05"].vSet[0];
            }
        };

        if (typeof TC.eScene["eScene.06"] != 'undefined') {
            E8.E08_05 = "";
            if (TC.eScene["eScene.06"].IsNull == false) {
                E8.E08_05 = V2Utils.setV2("eScene.06", TC.eScene["eScene.06"].vSet[0]);
            }
        };

        if (typeof TC.eScene["eScene.07"] != 'undefined') {
            E8.E08_06 = "";
            if (TC.eScene["eScene.07"].IsNull == false) {
                E8.E08_06 = V2Utils.setV2("eScene.07", TC.eScene["eScene.07"].vSet[0]);
            }
        };

        if (typeof TC.eScene["eScene.09"] != 'undefined') {
            E8.E08_07 = "";
            if (TC.eScene["eScene.09"].IsNull == false) {
                E8.E08_07 = TC.eScene["eScene.09"].vSet[0];
            }
        };

        if (typeof TC.eScene["eScene.10"] != 'undefined') {
            E8.E08_08 = "";
            if (TC.eScene["eScene.10"].IsNull == false) {
                E8.E08_08 = TC.eScene["eScene.10"].vSet[0];
            }
        };

        if (typeof TC.eScene["eScene.07"] != 'undefined') {
            E8.E08_10 = "";
            if (TC.eScene["eScene.07"].IsNull == false) {
                E8.E08_10 = V2Utils.setV2("eScene.07", TC.eScene["eScene.07"].vSet[0]);
            }
        };

        if (typeof TC.eScene["eScene.15"] != 'undefined') {
            E8.E08_11 = "";
            if (TC.eScene["eScene.15"].IsNull == false) {
                E8.E08_11 = TC.eScene["eScene.15"].vSet[0];
            }
        };

        if (typeof TC.eScene["eScene.17"] != 'undefined') {
            E8.E08_12 = "";
            if (TC.eScene["eScene.17"].IsNull == false) {
                E8.E08_12 = TC.eScene["eScene.17"].vSet[0];
            }
        };

        if (typeof TC.eScene["eScene.21"] != 'undefined') {
            E8.E08_13 = "";
            if (TC.eScene["eScene.21"].IsNull == false) {
                E8.E08_13 = TC.eScene["eScene.21"].vSet[0];
            }
        };

        if (typeof TC.eScene["eScene.18"] != 'undefined') {
            E8.E08_14 = "";
            if (TC.eScene["eScene.18"].IsNull == false) {
                E8.E08_14 = TC.eScene["eScene.18"].vSet[0];
            }
        };

        if (typeof TC.eScene["eScene.19"] != 'undefined') {
            E8.E08_15 = "";
            if (TC.eScene["eScene.19"].IsNull == false) {
                E8.E08_15 = TC.eScene["eScene.19"].vSet[0];
            }
        }
        ////////////////////////
        //The Rules

        if (TheCall.IsCancelled == true) {
            E08.E08_06 = "-25"
            if (TheCall.CancelType == 'Prior') {
                E08.E08_01 = "-25"
                E08.E08_02 = "-25"
                E08.E08_03 = "-25"
                E08.E08_05 = "-25"
                E08.E08_07 = "-25"
                E08.E08_08 = "-25"
                E08.E08_11 = "-25"
                E08.E08_12 = "-25"
                E08.E08_13 = "-25"
                E08.E08_14 = "-25"
                E08.E08_15 = "-25"
            }
        }
        else {
            var E08 = {};

            E8_01 = [];
            E08_01 = [];
            if ((typeof E8.E08_01 != 'undefined') && (Utils.IsGo(E8.E08_01) == true)) {

                for (var i = 0; i < E8.E08_01.length; i++) {
                    E8_01.push(E8.E08_01[i])
                }
                E08_01 = E8_01
            }
            else {
                E8_01.push("-20")
            };
            E08.E08_01 = E8_01;

            E8_02 = [];
            E08_02 = [];

            if ((typeof E8.E08_02 != 'undefined') && (Utils.IsGo(E8.E08_02) == true)) {
                E8_02 = [];
                for (var i = 0; i < E8.E08_02.length; i++) {
                    E8_02.push(E8.E08_02[i])
                }
                E08_02 = E8_02
            }
            else {
                E8_02.push("-20")
            };
            E08.E08_02 = E8_02;


            if ((typeof E8.E08_03 != 'undefined') && (Utils.IsGo(E8.E08_03) == true)) {
                E08.E08_03 = E8.E08_03
            }
            else {
                E08.E08_03 = "-20"
            };

            if ((typeof E8.E08_04 != 'undefined') && (Utils.IsGo(E8.E08_04) == true)) {
                E08.E08_04 = E8.E08_04
            };

            if ((typeof E8.E08_03 != 'undefined') && (Utils.IsGo(E8.E08_03) == true)) {
                E08.E08_03 = E8.E08_03
            }
            else {
                E08.E08_03 = "-20"
            };

            if ((typeof E8.E08_04 != 'undefined') && (Utils.IsGo(E8.E08_04) == true)) {
                E08.E08_04 = E8.E08_04
            };

            if ((typeof E8.E08_05 != 'undefined') && (Utils.IsGo(E8.E08_05) == true)) {
                E08.E08_05 = E8.E08_05
            }
            else {
                E08.E08_05 = "-20"
            };

            if ((typeof E8.E08_06 != 'undefined') && (Utils.IsGo(E8.E08_06) == true)) {
                E08.E08_06 = E8.E08_06
            }
            else {
                E08.E08_05 = "-20"
            };


            if ((typeof E8.E08_07 != 'undefined') && (Utils.IsGo(E8.E08_07) == true)) {
                E08.E08_07 = E8.E08_07
            }
            else {
                E08.E08_07 = "-20"
            };

            if ((typeof E8.E08_08 != 'undefined') && (Utils.IsGo(E8.E08_08) == true)) {
                E08.E08_08 = E8.E08_08
            }
            else {
                E08.E08_08 = "-20"
            };

            if ((typeof E8.E08_09 != 'undefined') && (Utils.IsGo(E8.E08_09) == true)) {
                E08.E08_09 = E8.E08_09
            }
            else {
                E08.E08_09 = "-20"
            };

            if ((typeof E8.E08_10 != 'undefined') && (Utils.IsGo(E8.E08_10) == true)) {
                E08.E08_10 = E8.E08_10
            };

            
            var E0811_0 = new Object();
            if ((typeof E8.E08_11 != 'undefined') && (Utils.IsGo(E8.E08_11) == true))
            {
                var ct = E8.E08_11.indexOf("&")
                if (ct != -1)
                {
                    var res = E8.E08_11.replace("&", '&amp;')
                    E0811_0.E08_11 = res
                }
                else
                {
                    E0811_0.E08_11 = E8.E08_11
                }
            }
            else {
                E0811_0.E08_11 = "-20"
            };
            
            if ((typeof E8.E08_12 != 'undefined') && (Utils.IsGo(E8.E08_12) == true))
            {
                E0811_0.E08_12 = E8.E08_12;
            }
            else {
                E0811_0.E08_12 = "-20";
            };

            if ((typeof E8.E08_13 != 'undefined') && (Utils.IsGo(E8.E08_13) == true))
            {
                E0811_0.E08_13 = E8.E08_13;
            }
            else {
                E0811_0.E08_13 = "-20";
            };
            
            if ((typeof E8.E08_14 != 'undefined') && (Utils.IsGo(E8.E08_14) == true))
            {
                E0811_0.E08_14 = E8.E08_14;
            }
            else {
                E0811_0.E08_14 = "-20"
            };
            if ((typeof E8.E08_15 != 'undefined') && (Utils.IsGo(E8.E08_15) == true))
            {
                E0811_0.E08_15 = E8.E08_15;
            }
            else
            {
                E0811_0.E08_15 = "-20"
            };
            E08.E08_11_0=E0811_0
       

        }
        
    };
    E08.IsUndefined = false;
    E08.ErrorList = ErrorList;
    return E08
};

