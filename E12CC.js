var Utils = require('cloud/UtilitiesCC.js');
var V2Utils = require('cloud/ConversionUtilsCC.js');
exports.setE12 = function (TheCall) {
    var TC = TheCall;
    if (typeof TC.eHistory == 'undefined')
    {

        var E12 = {};
        E12.IsUndefined = true;
        return E12
    
    }
    else
    {
        var e12 = {};
        if (typeof TC.eHistory["eHistory.01"] != 'undefined')
        {
            var E12_01 = [];
            if (TC.eHistory["eHistory.01"].IsNull == false)
            {
                for (var i = 0; i < TC.eHistory["eHistory.01"].vSet.length; i++)
                {
                    E12_01.push(V2Utils.setV2("eHistory.01", TC.eHistory["eHistory.01"].vSet[i]));
                };
                e12.E12_01 = E12_01;
            }
        };

        
        if (typeof TC.eHistory.PractitionerGroup != 'undefined')
        {
            var PractArray = [];
            if (TC.eHistory.PractitionerGroup.length > 0)
            {
                //for (var i = 0; i < TC.eHistory.PractitionerGroup.length; i++) {
                var E12_04 = ""
                if (typeof TC.eHistory.PractitionerGroup[0]["eHistory.02"] != 'undefined')
                {
                    e12.E12_04 = "";
                    if (TC.eHistory.PractitionerGroup[0]["eHistory.02"].IsNull != true)
                    {
                        e12.E12_04 = TC.eHistory.PractitionerGroup[0]["eHistory.02"].vSet[0];
                    }
                };

                if (typeof TC.eHistory.PractitionerGroup[0]["eHistory.03"] != 'undefined')
                {
                    e12.E12_05 = "";
                    if (TC.eHistory.PractitionerGroup[0]["eHistory.03"].IsNull == false)
                    {
                        e12.E12_05 = TC.eHistory.PractitionerGroup[0]["eHistory.03"].vSet[0];
                    }
                };

                if (typeof TC.eHistory.PractitionerGroup[0]["eHistory.04"] != 'undefined')
                {
                    e12.E12_06 = "";
                    if (TC.eHistory.PractitionerGroup[0]["eHistory.04"].IsNull == false)
                    {
                        e12.E12_06 = TC.eHistory.PractitionerGroup[0]["eHistory.04"].vSet[0];
                    }
                };

                //}
            }
        };
        
        
        if (typeof TC.eHistory["eHistory.05"] != 'undefined')
        {
            var E12_07 = [];
            if (TC.eHistory["eHistory.05"].IsNull == false)
            {

                for (var i = 0; i < TC.eHistory["eHistory.05"].vSet.length; i++)
                {
                    E12_07.push(V2Utils.setV2("eHistory.05", TC.eHistory["eHistory.05"].vSet[i]));
                }
                e12.E12_07 = E12_07;
            }
        };


        if (typeof TC.eHistory["eHistory.06"] != 'undefined')
        {
            var E12_08 = [];
            if (TC.eHistory["eHistory.06"].IsNull == false)
            {
                for (var i = 0; i < TC.eHistory["eHistory.06"].vSet.length; i++)
                {
                    E12_08.push(TC.eHistory["eHistory.06"].vSet[i]);
                }
            };
            e12.E12_08 = E12_08;
        };

        if (typeof TC.eHistory["eHistory.07"] != 'undefined')
        {
            var E12_09 = [];
            if (TC.eHistory["eHistory.07"].IsNull == false)
            {
                for (var i = 0; i < TC.eHistory["eHistory.07"].vSet.length; i++)
                {
                    E12_09.push(TC.eHistory["eHistory.07"].vSet[i]);
                };
                e12.E12_09 = E12_09;
            }
        };

        if (typeof TC.eHistory["eHistory.08"] != 'undefined')
        {
            var E12_10 = [];
            if (TC.eHistory["eHistory.08"].IsNull == false)
            {
                for (var i = 0; i < TC.eHistory["eHistory.08"].vSet.length; i++)
                {
                    E12_10.push(TC.eHistory["eHistory.08"].vSet[i]);
                };
                e12.E12_10 = E12_10;
            }
        };


        if (typeof TC.eHistory["eHistory.09"] != 'undefined')
        {
            var E12_11 = [];
            if (TC.eHistory["eHistory.09"].IsNull == false)
            {
                for (var i = 0; i < TC.eHistory["eHistory.09"].vSet.length; i++)
                {
                    e12.E12_11 = V2Utils.setV2("eHistory.09", TC.eHistory["eHistory.09"].vSet[i]);
                };
                e12.E12_11 = E12_11;
            }
        };

        var ImmunArray = []
        
        if (typeof TC.eHistory["ImmunizationsGroup"] != 'undefined')
        {
            var E12_12_0=[];
                for (var i = 0; i < TC.eHistory["ImmunizationsGroup"].length; i++)
                {
                    var e12_12_0 = {};

                    if (typeof TC.eHistory["ImmunizationsGroup"][i]["eHistory.10"] != 'undefined') {
                        var E12_12 = {};
                        if (TC.eHistory["ImmunizationsGroup"][i]["eHistory.10"].IsNull == false) {
                            e12_12_0.E12_12 = V2Utils.setV2("eHistory.10", TC.eHistory["ImmunizationsGroup"][i]["eHistory.10"].vSet[0]);
                        }
                    };
                    

                    if (typeof TC.eHistory["ImmunizationsGroup"][i]["eHistory.11"] != 'undefined') {
                        var E12_13 = "";
                        if (TC.eHistory["ImmunizationsGroup"][i]["eHistory.11"].IsNull != true) {
                            e12_12_0.E12_13 = TC.eHistory["ImmunizationsGroup"][i]["eHistory.11"].vSet[0];
                        };
                        e12_12_0.E12_13 = E12_13
                    };
                    
                    E12_12_0.push(e12_12_0)
                }
            
            e12.E12_12_0 = E12_12_0;
        };

        
        var CurrMedsArray = [];
        if (typeof TC.eHistory["CurrentMedsGroup"] != 'undefined')
        {
            if (TC.eHistory["CurrentMedsGroup"] != -1) {
                var E12_14_0 = {};
                for (var i = 0; i < TC.eHistory["CurrentMedsGroup"].length; i++) {


                    if (typeof TC.eHistory["CurrentMedsGroup"][i]["eHistory.12"] != 'undefined') {
                        var E12_14 = "";
                        if (TC.eHistory["CurrentMedsGroup"][i]["eHistory.12"].IsNull == false) {
                            E12_14 = TC.eHistory["CurrentMedsGroup"][i]["eHistory.12"].vSet[0];
                        }
                        E12_14_0.E12_14 = E12_14;
                    };

                    if (typeof TC.eHistory["CurrentMedsGroup"][i]["eHistory.13"] != 'undefined') {
                        var E12_15_0 = {};
                        e12.E12_15 = "";
                        if (TC.eHistory["CurrentMedsGroup"][i]["eHistory.13"].IsNull == false) {
                            e12.E12_15 = TC.eHistory["CurrentMedsGroup"][i]["eHistory.13"].vSet[0];
                        };
                        E12_15_0.E12_15 = E12_15;
                    };



                    if (typeof TC.eHistory["CurrentMedsGroup"][i]["eHistory.14"] != 'undefined') {
                        e12.E12_16 = "";
                        var E12_15_0 = {};

                        if (TC.eHistory["CurrentMedsGroup"][i]["eHistory.14"].IsNull == false) {
                            e12.E12_16 = V2Utils.setV2("eHistory.14", TC.eHistory["CurrentMedsGroup"][i]["eHistory.14"].vSet[0]);
                        };
                        E12_15_0.E12_16 = E12_16;
                    };


                    if (typeof TC.eHistory["CurrentMedsGroup"][i]["eHistory.15"] != 'undefined') {
                        e12.E12_17 = "";
                        if (TC.eHistory["CurrentMedsGroup"][i]["eHistory.15"].IsNull == false) {
                            e12.E12_17 = V2Utils.setV2("eHistory.15", TC.eHistory["CurrentMedsGroup"][i]["eHistory.15"].vSet[0]);
                        };
                        E12_14_0.E12_17 = E12_17;
                    };
                    if (typeof E12_15_0 != 'undefined') {
                        E12_14_0.E12_15_0 = E12_15_0.E12_15_0
                    }
                    CurrMedsArray.push(E12_14_0)
                }
            };
            e12.E12_14_0 = CurrMedsArray;
        };

        
        e12.E12_20 = "";
        if (typeof TC.eHistory["eHistory.16"] != 'undefined')
        {
            e12.E12_18 = "";
            if (TC.eHistory["eHistory.16"].IsNull == false)
            {
                e12.E12_18 = V2Utils.setV2("eHistory.16", TC.eHistory["eHistory.16"].vSet[0]);
            }
        };

        
        if (typeof TC.eHistory["eHistory.17"] != 'undefined')
        {
            var E12_19 = [];
            if (TC.eHistory["eHistory.17"].IsNull == false)
            {
                for (var i = 0; i < TC.eHistory["eHistory.17"].vSet.length; i++)
                {
                    E12_19.push(V2Utils.setV2("eHistory.17", TC.eHistory["eHistory.17"].vSet[i]));
                };
                e12.E12_19 = E12_19;
            }
        };

        /*
        if (typeof TC.eHistory["eHistory.18"] != 'undefined')
        {
            if (TC.eHistory["eHistory.18"].IsNull == false)
            {
                    e12.E12_20 = TC.eHistory["eHistory.18"].vSet[0];
            }            
        }
        */
        
    };
    /////////////////////////////////////////////////////////////
    var E12 = {};
    if (typeof TheCall.HasPatient == false)
    {
        e121 = [];

        e121.push("-25");
        E12.E12_01 = e121;
        E12.E12_02 = "-25";
        E12.E12_03 = "-25";
        var E12_4_0 = {};
        E12_4_0.E12_04 = "-25";
        E12_4_0.E12_05 = "-25";
        E12_4_0.E12_06 = "-25";
        E12.E12_4_0 = E12_4_0;
        E12.E12_07 = "-25";
        E12.E12_08 = "-25";
        E12.E12_09 = "-25";
        E12.E12_10 = "-25";
        E12.E12_11 = "-25";
        var E12_4_0 = {};
        E12_12_0.E12_12 = "-25";
        E12_12_0.E12_13 = "-25";

        var E12_14_0 = {};
        E12_14_0.E12_14 = "-25";

        var E12_15_0 = {};
        E12_15_0.E12_15 = "-25";
        E12_15_0.E12_16 = "-25";
        E12_14_0.E12_13 = "-25";
        E12_14_0.E12_15_0 = E12_15_0;
        E12.E12_18 = "-25";
        E12.E12_19 = "-25";
        E12.E12_20 = "-25";

    }
    else
    {
        
        var e121 = [];
        
        if ((typeof e12.E12_01 != 'undefined') && (Utils.IsGo(e12.E12_01) == true))
        {
            e121 = e12.E12_01;
        }
        else
        {
            e121.push("-10")
        };
        E12.E12_01 = e121;

        var e122 = {}
        if ((typeof e12.E12_02 != 'undefined') && (Utils.IsGo(e12.E12_02) == true))
        {
            e122= e12.E12_02;
        }
        else
        {
            e122 = "-10";
        };
        E12.E12_02 =e122;

        var e123 = {}
        if ((typeof e12.E12_03 != 'undefined') && (Utils.IsGo(e12.E12_03) == true))
        {
            e123 = e12.E12_03;
        }
        else
        {
            e123= "-10";
        };
        E12.E12_03 = e123;
        var _E12 = {}
        //////////////////////////////////////////////////
        //E12_4_0

        var E12_4_0 = {};
        if ((typeof e12.E12_04 != 'undefined') && (Utils.IsGo(e12.E12_04) == true))
        {
            E12_4_0.E12_04 = e12.E12_04;
        }
        else
        {
            E12_4_0.E12_04 = "-10";
        };

        if ((typeof e12.E12_05 != 'undefined') && (Utils.IsGo(e12.E12_05) == true))
        {
            E12_4_0.E12_05 = e12.E12_05;
        }
        else
        {
            E12_4_0.E12_05 = "-10";
        };

        if ((typeof e12.E12_06 != 'undefined') && (Utils.IsGo(e12.E12_06) == true))
        {
            E12_4_0.E12_06 = e12.E12_06;
        }
        else
        {
            E12_4_0.E12_06 = "-10";
        };

        E12.E12_4_0 = E12_4_0;

        //End of E12_4_0
        //////////////////////////////////////////////////
        
        var e127 = [];
        if ((typeof e12.E12_07 != 'undefined') && (Utils.IsGo(e12.E12_07) == true))
        {
            e127 = e12.E12_07;
        }
        else
        {
            e127.push("-10");

        };
        E12.E12_07 = e127;


        var e128 = [];
        if ((typeof e12.E12_08 != 'undefined') && (Utils.IsGo(e12.E12_08) == true))
        {
            e128 = e12.E12_08;
        }
        else
        {
            e128.push("-10");
        };
        
        E12.E12_08 = e128;

        var e129 = [];
        if ((typeof e12.E12_09 != 'undefined') && (Utils.IsGo(e12.E12_09) == true))
        {
            e129 = e12.E12_09;
        }
        else
        {
            e129.push("-10");
        };
        E12.E12_09 = e129;

        var e1210 = [];
        if ((typeof e12.E12_10 != 'undefined') && (Utils.IsGo(e12.E12_10) == true))
        {
            e1210 = e12.E12_10;
        }
        else
        {
            e1210.push("-10");

        };
        E12.E12_10 = e1210;
        
        var e1211 = {};
        if ((typeof e12.E12_11 != 'undefined') && (Utils.IsGo(e12.E12_11) == true))
        {
            E12.E12_11 = e12.E12_11;
        }
        else
        {
            E12.E12_11 = "-10";
        };


        ///////////////////////////////////////////////////
        //E12_12_0 Repeating Group
        if (typeof e12.E12_12_0 != 'undefined') {
            if (e12.E12_12_0.length == 0) {
                var E12_12_0 = [];
                var E12120 = {};
                E12120.E12_12 = "-25";
                E12120.E12_13 = "-25";
                E12_12_0.push(E12120);
                E12.E12_12_0 = E12_12_0;
            }
            else {
                var _E12_12 = [];
                for (var i = 0; i < e12.E12_12_0.length; i++) {
                    var _tmp12 = {}
                    var _hasE12 = false;
                    if ((typeof e12.E12_12_0[i].E12_12 != 'undefined') && (Utils.IsGo(e12.E12_12_0[i].E12_12) == true)) {
                        E12_12 = e12.E12_12_0[i].E12_12;
                        _hasE12 = true;
                    }
                    else {
                        E12_12 = "-10";
                    };

                    
                    if ((typeof e12.E12_12_0[i].E12_13 != 'undefined') && (Utils.IsGo(e12.E12_12_0[i].E12_13) == true)) {
                        E12_13 = e12.E12_12_0[i].E12_13;
                        _hasE12 = true;
                    }
                    else {
                        E12_13 = "-10";
                    };


                    if (_hasE12 == true) {
                        var E12 = {};
                        E12_12.E12_12 = E12_12;
                        E12_12.E12_13 = E12_13;
                        E12_12.E12_15 = E12_12;

                        _E12_12.push(E12_12)
                    }
                };

                if (_E12_12.length > 0) {
                    var E12_12_0 = {}
                    E12.E12_12_0 = _E12_12
                }                   
            }
        };
        ///////////////////////////////////////////
        //E12_14_0 Repeater
        var _E12_14 = [];
        if (typeof e12.E12_14_0 != 'undefined') {
            for (var i = 0; i < e12.E12_14_0.length; i++) {
                var _tmpE14 = {};


                if ((typeof e12.E12_14_0[i].E12_14 != 'undefined') && (Utils.IsGo(e12.E12_14_0[i].E12_14) == true)) {
                    _tmpE14 = e12.E12_14_0[i].E12_14;

                }
                else {
                    _tmpE14 = "-10";
                };

                var _tmpE17 = {};
                if ((typeof e12.E12_14_0[i].E12_17 != 'undefined') && (Utils.IsGo(e12.E12_14_0[i].E12_17) == true)) {
                    _tmpE17 = e12.E12_15_0[i].E12_17;
                }
                else {
                    _tmpE17 = "-10";
                };

                ////////////////////////////////////
                //E12_15_0
                
                if (typeof e12.E12_14_0[i].E12_15_0 != 'undefined')
                {
                    var _tmpE15 = {};
                    if ((typeof e12.E12_14_0[i].E12_15_0.E12_15 != 'undefined') && (Utils.IsGo(e12.E12_14_0[i].E12_15_0.E12_15) == true)) {
                        _tmpE15 = e12.E12_14_0[i].E12_15_0.E12_15;
                    }
                    else {
                        _tmpE15 = "-10";
                    };

                    var _tmpE16 = {};
                    if ((typeof e12.E12_14_0[i].E12_15_0.E12_16 != 'undefined') && (Utils.IsGo(e12.E12_14_0[i].E12_15_0.E12_16) == true)) {
                        _tmpE16 = e12.E12_14_0[i].E12_15_0.E12_16;

                    }
                    else {
                        _tmpE16 = "-10";
                    }
                }
                else
                {
                    _tmpE15 = "-25";
                    _tmpE16 = "-25";
                };

                var E12_15_0 = {};
                E12_15_0.E12_15 = _tmpE15;
                E12_15_0.E12_16 = _tmpE16;
                E12_14_0.E12_15_0 = E12_15_0;

                //E12_15_0
                /////////////////////////////////////////////                

                E12_14_0.E12_14 = _tmpE14;
                E12_14_0.E12_17 = _tmpE17;
                E12_14_0.E12_17 = _tmpE17;
                _E12_14.push(E12_14_0);
            }
        };
        if (_E12_14.length > 0) {
            var E12_14_0 = {}
            E12_14_0 = _E12_14
            E12.E12_14_0 = E12_14_0
        };

        /////////////////////////////////////////////
        /////////////////////////////////////////////
        /////////////////////////////////////////////

        if ((typeof e12.E12_18 != 'undefined') && (Utils.IsGo(e12.E12_18) == true))
        {
            E12.E12_18 = e12.E12_18;
        }
        else
        {
            E12.E12_18 = "-10";
        };

        
        var e1219 = []
        if ((typeof e12.E12_19 != 'undefined') && (Utils.IsGo(e12.E12_19) == true))
        {
            e1219 = e12.E12_19;
        }
        else
        {
            e1219.push("-10");
        };
        E12.E12_19 = e1219;

        if ((typeof e12.E12_20 != 'undefined') && (Utils.IsGo(e12.E12_20) == true))
        {
            E12.E12_20 = e12.E12_20;
        }
        else
        {
            E12.E12_20 = "-10";
        }

  };
    E12.IsUndefined = false;
    E12.ErrorList = ErrorList;
    return E12;
};

