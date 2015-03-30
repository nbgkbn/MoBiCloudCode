var Utils = require('cloud/UtilitiesCC.js');
var V2Utils = require('cloud/ConversionUtilsCC.js');
exports.setE14 = function (TheCall)
{
    var TC = TheCall;
    if (typeof TC.eVitals == 'undefined')
    {
        var E14 = {};
        E14.IsUndefined = true;
        return E14;
    }
    else
    {
        var E14Array = [];

        for (var xx = 0; xx < TC.eVitals.VitalGroup.length; xx++)
        {
            var e14 = {};

            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.01"] != 'undefined')
            {
                e14.E14_01 = "";
                if (TC.eVitals.VitalGroup[xx]["eVitals.01"].IsNull == false)
                {
                    e14.E14_01 = TC.eVitals.VitalGroup[xx]["eVitals.01"].vSet[0];
                }
            };

            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.02"] != 'undefined')
            {
                if (TC.eVitals.VitalGroup[xx]["eVitals.02"].IsNull == false)
                {
                    e14.E14_02 = V2Utils.setV2("eVitals.02", TC.eVitals.VitalGroup[xx]["eVitals.02"].vSet[0]);
                }
            };

            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.03"] != 'undefined')
            {
                var E14_03 = [];
                if (TC.eVitals.VitalGroup[xx]["eVitals.03"].IsNull == false)
                {
                    for (var i = 0; i < TC.eVitals.VitalGroup[xx]["eVitals.03"].vSet.length; i++)
                    {
                        E14_03.push(V2Utils.setV2("eVitals.03", TC.eVitals.VitalGroup[xx]["eVitals.03"].vSet[i]));
                    }
                };
                e14.E14_03 = E14_03
            };


            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.06"] != 'undefined')
            {
                e14.E14_04 = "";
                if (TC.eVitals.VitalGroup[xx]["eVitals.06"].IsNull == false)
                {
                    e14.E14_04 = TC.eVitals.VitalGroup[xx]["eVitals.06"].vSet[0];
                }
            };


            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.07"] != 'undefined')
            {
                e14.E14_05 = "";
                if (TC.eVitals.VitalGroup[xx]["eVitals.07"].IsNull == false)
                {
                    e14.E14_05 = TC.eVitals.VitalGroup[xx]["eVitals.07"].vSet[0];
                }
            };


            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.08"] != 'undefined')
            {
                e14.E14_06 = "";
                if (TC.eVitals.VitalGroup[xx]["eVitals.08"].IsNull == false)
                {
                    e14.E14_06 = V2Utils.setV2("eVitals.08", TC.eVitals.VitalGroup[xx]["eVitals.08"].vSet[0]);
                }
            };

            if (typeof TC.eVitals.VitalGroup["eVitals.10"] != 'undefined')
            {
                e14.E14_07 = "";
                if (TC.eVitals.VitalGroup[xx]["eVitals.10"].IsNull == false)
                {
                    e14.E14_07 = TC.eVitals.VitalGroup[xx]["eVitals.10"].vSet[0];
                }
            };


            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.12"] != 'undefined')
            {
                e14.E14_09 = "";
                if (TC.eVitals.VitalGroup[xx]["eVitals.12"].IsNull == false)
                {
                    e14.E14_09 = TC.eVitals.VitalGroup[xx]["eVitals.12"].vSet[0];
                }
            };


            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.13"] != 'undefined')
            {
                e14.E14_10 = "";
                if (TC.eVitals.VitalGroup[xx]["eVitals.13"].IsNull == false)
                {
                    e14.E14_10 = V2Utils.setV2("eVitals.13", TC.eVitals.VitalGroup[xx]["eVitals.13"].vSet[0]);
                }
            };


            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.14"] != 'undefined')
            {
                e14.E14_11 = "";
                if (TC.eVitals.VitalGroup[xx]["eVitals.14"].IsNull == false)
                {
                    e14.E14_11 = TC.eVitals.VitalGroup[xx]["eVitals.14"].vSet[0];
                }
            };


            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.15"] != 'undefined')
            {
                e14.E14_12 = "";
                if (TC.eVitals.VitalGroup[xx]["eVitals.15"].IsNull == false)
                {
                    e14.E14_12 = V2Utils.setV2("eVitals.15", TC.eVitals.VitalGroup[xx]["eVitals.15"].vSet[0]);
                }
            };


            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.16"] != 'undefined')
            {
                e14.E14_13 = "";
                if (TC.eVitals.VitalGroup[xx]["eVitals.16"].IsNull == false)
                {
                    e14.E14_13 = TC.eVitals.VitalGroup[xx]["eVitals.16"].vSet[0];
                }
            };


            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.18"] != 'undefined')
            {
                e14.E14_14 = "";
                if (TC.eVitals.VitalGroup[xx]["eVitals.18"].IsNull == false)
                {
                    e14.E14_14 = TC.eVitals.VitalGroup[xx]["eVitals.18"].vSet[0];
                }
            };


            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.19"] != 'undefined')
            {
                e14.E14_15 = "";
                if (TC.eVitals.VitalGroup[xx]["eVitals.19"].IsNull == false)
                {
                    e14.E14_15 = TC.eVitals.VitalGroup[xx]["eVitals.19"].vSet[0];
                }
            };


            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.20"] != 'undefined')
            {
                e14.E14_16 = "";
                if (TC.eVitals.VitalGroup[xx]["eVitals.20"].IsNull == false)
                {
                    e14.E14_16 = TC.eVitals.VitalGroup[xx]["eVitals.20"].vSet[0];
                }
            };


            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.21"] != 'undefined')
            {
                e14.E14_17 = "";
                if (TC.eVitals.VitalGroup[xx]["eVitals.21"].IsNull == false)
                {
                    e14.E14_17 = TC.eVitals.VitalGroup[xx]["eVitals.21"].vSet[0];
                }
            };

            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.22"] != 'undefined')
            {
                e14.E14_18 = "";
                if (TC.eVitals.VitalGroup[xx]["eVitals.22"].IsNull == false)
                {
                    e14.E14_18 = V2Utils.setV2("eVitals.22", TC.eVitals.VitalGroup[xx]["eVitals.22"].vSet[0]);
                }
            };

            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.23"] != 'undefined')
            {
                e14.E14_19 = "";
                if (TC.eVitals.VitalGroup[xx]["eVitals.23"].IsNull == false)
                {
                    e14.E14_19 = TC.eVitals.VitalGroup[xx]["eVitals.23"].vSet[0];
                }
            };



            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.24"] != 'undefined')
            {
                e14.E14_20 = "";
                if (TC.eVitals.VitalGroup[xx]["eVitals.24"].IsNull == false)
                {
                    e14.E14_20 = TC.eVitals.VitalGroup[xx]["eVitals.24"].vSet[0];
                }
            };


            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.25"] != 'undefined')
            {
                e14.E14_21 = "";
                if (TC.eVitals.VitalGroup[xx]["eVitals.25"].IsNull != true)
                {
                    e14.E14_21 = TC.eVitals.VitalGroup[xx]["eVitals.25"].vSet[0];
                }
            };


            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.26"] != 'undefined')
            {
                e14.E14_22 = "";
                if (TC.eVitals.VitalGroup[xx]["eVitals.26"].IsNull == false)
                {
                    e14.E14_22 = V2Utils.setV2("eVitals.26", TC.eVitals.VitalGroup[xx]["eVitals.26"].vSet[0]);
                }
            };


            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.27"] != 'undefined')
            {
                e14.E14_23 = "";
                if (TC.eVitals.VitalGroup[xx]["eVitals.27"].IsNull == false)
                {
                    e14.E14_23 = TC.eVitals.VitalGroup[xx]["eVitals.27"].vSet[0];
                }
            };


            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.29"] != 'undefined')
            {
                e14.E14_24 = "";
                if (TC.eVitals.VitalGroup[xx]["eVitals.29"].IsNull == false)
                {
                    e14.E14_24 = V2Utils.setV2("eVitals.29", TC.eVitals.VitalGroup[xx]["eVitals.29"].vSet[0]);
                }
            };


            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.31"] != 'undefined')
            {
                e14.E14_25 = "";
                if (TC.eVitals.VitalGroup[xx]["eVitals.31"].IsNull == false)
                {
                    e14.E14_25 = V2Utils.setV2("eVitals.31", TC.eVitals.VitalGroup[xx]["eVitals.31"].vSet[0]);
                }
            };


            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.32"] != 'undefined')
            {
                e14.E14_26 = "";
                if (TC.eVitals.VitalGroup[xx]["eVitals.32"].IsNull != true)
                {
                    e14.E14_26 = TC.eVitals.VitalGroup[xx]["eVitals.32"].vSet[0];
                }
            };

            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.33"] != 'undefined')
            {
                e14.E14_27 = "";
                if (TC.eVitals.VitalGroup[xx]["eVitals.33"].IsNull == false)
                {
                    e14.E14_27 = TC.eVitals.VitalGroup[xx]["eVitals.33"].vSet[0];
                }
            };
            E14Array.push(e14)
            delete e14;
        };
        var E14 = {};
        E14 = E14Array;
    };
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    //if ((TheCall.HasPatient == true) && (TheCall.HasTreatment == true))

    if (1==2)
    {

        e14a.E14_02 = "-25";
        e14a.E14_03 = "-25";
    }
    else
    {
        var e14array = [];
        for (var i = 0; i < E14.length; i++)
        {
            var e14 = E14[i];
            var e14a = {};
            var HasVitalDate = false;

            if ((typeof e14.E14_01 != 'undefined') && (Utils.IsGo(e14.E14_01) == true))
            {
                e14a.E14_01 = e14.E14_01;
                HasVitalDate = true;
            };

            if ((typeof e14.E14_02 != 'undefined') && (Utils.IsGo(e14.E14_02) == true))
            {
                e14a.E14_02 = e14.E14_02;
            };

            if ((typeof e14.E14_03 != 'undefined') && (Utils.IsGo(e14.E14_03) == true)) {
                e14a.E14_03 = e14.E14_03;
            };

            var E1404 = false;
            if ((typeof e14.E14_04 != 'undefined') && (Utils.IsGo(e14.E14_04) == true))
            {
                e14a.E14_04 = e14.E14_04;
                E1404 = true;
            };

            if ((typeof e14.E14_05 != 'undefined') && (Utils.IsGo(e14.E14_05) == true))
            {
                e14a.E14_05 = e14.E14_05;
                E1404 = true;
            };
            if (E1404 == true)
            {
                Error.Level = "ELEM";
                Error.Type = "MAN";
                Error.Att = "E14_05"
                Error.Text = "BP:  Missing Value. Distolic and Systalic Required"
                ErrorList.push(Error)
            }
        };

        if ((typeof e14.E14_06 != 'undefined') && (Utils.IsGo(e14.E14_06) == true))
        {
            e14a.E14_06 = e14.E14_06;
            E1404 = true;
        };

        if (E1404 == true) {
            var E14_04_0 = {};
            E14_04_0.E14_04 = E14.E14_04;
            E14_04_0.E14_05 = E14.E14_05;
            E14_04_0.E14_06 = E14.E14_06;
            E14.E14_04_0 = E14_04_0;
        };

        if ((typeof e14.E14_07 != 'undefined') && (Utils.IsGo(e14.E14_07) == true))
        {
            e14a.E14_07 = e14.E14_07;
        };

        if ((typeof e14.E14_08 != 'undefined') && (Utils.IsGo(e14.E14_08) == true))
        {
            e14a.E14_08 = e14.E14_08;
        };

        if ((typeof e14.E14_09 != 'undefined') && (Utils.IsGo(e14.E14_09) == true))
        {
            e14a.E14_09 = e14.E14_09;
        };

        if ((typeof e14.E14_10 != 'undefined') && (Utils.IsGo(e14.E14_10) == true)) {
            e14a.E14_10 = e14.E14_10;
        };

        if ((typeof e14.E14_11 != 'undefined') && (Utils.IsGo(e14.E14_11) == true))
        {
            e14a.E14_11 = e14.E14_11;
        };

        if ((typeof e14.E14_12 != 'undefined') && (Utils.IsGo(e14.E14_12) == true))
        {
            e14a.E14_12 = e14.E14_12;
        };

        if ((typeof e14.E14_13 != 'undefined') && (Utils.IsGo(e14.E14_13) == true))
        {
            e14a.E14_13 = e14.E14_13;
        };

        if ((typeof e14.E14_14 != 'undefined') && (Utils.IsGo(e14.E14_14) == true))
        {
            e14a.E14_14 = e14.E14_14;
        };
        /////////////////////////////////////////////
        //E14_15_0

        var E1415= true;
        if ((typeof e14.E14_15 != 'undefined') && (Utils.IsGo(e14.E14_15) == true)) {
            e14a.E14_15 = e14.E14_15;
            E1415 = false;
        };

        if ((typeof e14.E14_16 != 'undefined') && (Utils.IsGo(e14.E14_16) == true)) {
            e14a.E14_16 = e14.E14_16;
            E1415 = false;
        };

        if ((typeof e14.E14_17 != 'undefined') && (Utils.IsGo(e14.E14_17) == true)) {
            e14a.E14_17 = e14.E14_17;
            E1415 = false;
        };

        if ((typeof e14.E14_18 != 'undefined') && (Utils.IsGo(e14.E14_18) == true)) {
            e14a.E14_18 = e14.E14_18;
            E1415 = false;
        };
        

        if (E1415 == true) {
            var E14_15_0 = {};
            E14_15_0.E14_15 = E14.E14_15;
            E14_15_0.E14_16 = E14.E14_16;
            E14_15_0.E14_17 = E14.E14_17;
            E14_15_0.E14_18 = E14.E14_18;
            E14.E14_15_0 = E14_15_0;
        };
        //E14_15_0
        /////////////////////////////////////////////
        
        if ((typeof e14.E14_19 != 'undefined') && (Utils.IsGo(e14.E14_19) == true))
        {
            e14a.E14_19 = e14.E14_19;
        };

        /////////////////////////////////////////////
        //E14_20_0
        var E1420 = false;
        if ((typeof e14.E14_20 != 'undefined') && (Utils.IsGo(e14.E14_20) == true))
        {
            e14a.E14_20 = e14.E14_20;
            E1420 = true;
        };

        if ((typeof e14.E14_21 != 'undefined') && (Utils.IsGo(e14.E14_21) == true))
        {
            e14a.E14_21 = e14.E14_21;
            E1420 = true;
        };
        if (E1420 == true) {
            var E14_20_0 = {};
            E14_20_0.E14.E14_20 = E14.E14_20;
            E14_20_0.E14.E14_21 = E14.E14_21;
            E14.E14_20_0 = E14_20_0;
        };
        //E14_20_0
        /////////////////////////////////////////////

        if ((typeof e14.E14_22 != 'undefined') && (Utils.IsGo(e14.E14_22) == true)) {
            e14a.E14_22 = e14.E14_22;
        };
        if ((typeof e14.E14_23 != 'undefined') && (Utils.IsGo(e14.E14_23) == true))
        {
            e14a.E14_23 = e14.E14_23;
        };

        if ((typeof e14.E14_24 != 'undefined') && (Utils.IsGo(e14.E14_24) == true))
        {
            e14a.E14_24 = e14.E14_24;
        };

        if ((typeof e14.E14_25 != 'undefined') && (Utils.IsGo(e14.E14_25) == true))
        {
            e14a.E14_25 = e14.E14_25;
        };

        if ((typeof e14.E14_26 != 'undefined') && (Utils.IsGo(e14.E14_26) == true))
        {
            e14a.E14_26 = e14.E14_26;
        };

        if ((typeof e14.E14_27 != 'undefined') && (Utils.IsGo(e14.E14_27) == true))
        {
            e14a.E14_27 = e14.E14_27;
        };

        if ((typeof e14.E14_28 != 'undefined') && (Utils.IsGo(e14.E14_28) == true))
        {
            e14a.E14_28 = e14.E14_28;
        };

        e14array.push(e14a);

    };//for  
    var E14 = {};
    E14 = e14array;
    E14.IsUndefined = false;
    E14.ErrorList = ErrorList;
    return E14;
};
