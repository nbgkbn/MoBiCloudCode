var Utils = require('cloud/UtilitiesCC.js');
var V2Utils = require('cloud/ConversionUtilsCC.js');
exports.setE06 = function (TheCall)
{
    var TC = TheCall;
    if (typeof TC.ePatient == 'undefined')
    {

        var E06 = {};
        E06.IsUndefined = true;
        return E06;
    }
    else
        var E6 = {};
    if (typeof TC.ePatient.PatientNameGroup != 'undefined')
    {
        if (typeof TC.ePatient.PatientNameGroup["ePatient.02"] != 'undefined')
        {
            E6.E06_01 = "";
            if (TC.ePatient.PatientNameGroup["ePatient.02"].IsNull != true)
            {
                E6.E06_01 = TC.ePatient.PatientNameGroup["ePatient.02"].vSet[0];
            }
        };

        if (typeof TC.ePatient.PatientNameGroup["ePatient.03"] != 'undefined')
        {
            E6.E06_02 = "";
            if (TC.ePatient.PatientNameGroup["ePatient.03"].IsNull == false)
            {
                E6.E06_02 = TC.ePatient.PatientNameGroup["ePatient.03"].vSet[0];
            }
        };

        if (typeof TC.ePatient.PatientNameGroup["ePatient.04"] != 'undefined')
        {
            E6.E06_03 = "";
            if (TC.ePatient.PatientNameGroup["ePatient.04"].IsNull == false)
            {
                E6.E06_03 = TC.ePatient.PatientNameGroup["ePatient.04"].vSet[0];
            }
        }
    };

    if (typeof TC.ePatient["ePatient.05"] != 'undefined')
    {
        E6.E06_04 = "";
        if (TC.ePatient["ePatient.05"].IsNull == false)
        {
            E6.E06_04 = TC.ePatient["ePatient.05"].vSet[0];
        }
    };

    if (typeof TC.ePatient["ePatient.06"] != 'undefined')
    {
        E6.E06_05 = "";
        if (TC.ePatient["ePatient.06"].IsNull == false)
        {
            E6.E06_05 = TC.ePatient["ePatient.06"].vSet[0];
        }
    };

    if (typeof TC.ePatient["ePatient.07"] != 'undefined')
    {
        E6.E06_06 = "";
        if (TC.ePatient["ePatient.07"].IsNull == false)
        {
            E6.E06_06 = TC.ePatient["ePatient.07"].vSet[0];
        }
    };

    if (typeof TC.ePatient["ePatient.08"] != 'undefined')
    {
        E6.E06_07 = "";
        if (TC.ePatient["ePatient.08"].IsNull == false)
        {
            E6.E06_07 = TC.ePatient["ePatient.08"].vSet[0];
        }
    };

    if (typeof TC.ePatient["ePatient.09"] != 'undefined')
    {
        E6.E06_08 = "";
        if (TC.ePatient["ePatient.09"].IsNull == false)
        {
            E6.E06_08 = TC.ePatient["ePatient.09"].vSet[0];
        }
    };

    if (typeof TC.ePatient["ePatient.10"] != 'undefined')
    {
        E6.E06_09 = "";
        if (TC.ePatient["ePatient.10"].IsNull == false)
        {
            E6.E06_09 = TC.ePatient["ePatient.10"].vSet[0];
        }
    };

    if (typeof TC.ePatient["ePatient.12"] != 'undefined')
    {
        E6.E06_10 = "";
        if (TC.ePatient["ePatient.12"].IsNull == false)
        {
            E6.E06_10 = TC.ePatient["ePatient.12"].vSet[0];
        }
    };

    if (typeof TC.ePatient["ePatient.13"] != 'undefined')
    {
        E6.E06_11 = "";
        if (TC.ePatient["ePatient.13"].IsNull == false)
        {
            E6.E06_11 = V2Utils.setV2("ePatient.13", TC.ePatient["ePatient.13"].vSet[0]);
        }
    };


    if (typeof TC.ePatient["ePatient.14"] != 'undefined')
    {
        E6.E06_12 = "";
        E6.E06_13 = "";
        if (TC.ePatient["ePatient.14"].IsNull == false)
        {
            E6.E06_12 = V2Utils.setV2("ePatient.14", TC.ePatient["ePatient.14"].vSet[0]);

            if (TC.ePatient["ePatient.14"].vSet.indexOf("2514007") != -1)
            {
                E6.E06_13 = "690";
            }
            else
            {
                E6.E06_13 = "695";
            };
        }
    };

    if (typeof TC.ePatient.AgeGroup != 'undefined')
    {
        if (typeof TC.ePatient.AgeGroup["ePatient.15"] != 'undefined')
        {
            E6.E06_14 = ""
            if (TC.ePatient.AgeGroup["ePatient.15"].IsNull == false)
            {
                E6.E06_14 = V2Utils.setV2("ePatient.15", TC.ePatient.AgeGroup["ePatient.15"].vSet[0]);
            }
        };


        if (typeof TC.ePatient.AgeGroup["ePatient.16"] != 'undefined')
        {
            E6.E06_15 = "";
            if (TC.ePatient.AgeGroup["ePatient.16"].IsNull == false)
            {
                E6.E06_15 = V2Utils.setV2("ePatient.16", TC.ePatient.AgeGroup["ePatient.16"].vSet[0]);
            }
        }
    };

    if (typeof TC.ePatient["ePatient.17"] != 'undefined')
    {
        E6.E06_16 = "";
        if (TC.ePatient["ePatient.17"].IsNull == false)
        {
            E6.E06_16 = TC.ePatient["ePatient.17"].vSet[0];
        }
    };

    if (typeof TC.ePatient["ePatient.18"] != 'undefined')
    {
        E6.E06_17 = "";
        if (TC.ePatient["ePatient.18"].IsNull == false)
        {

            E6.E06_17 = TC.ePatient["ePatient.18"].vSet[0].val;
        }
    };

    if (typeof TC.ePatient["ePatient.20"] != 'undefined')
    {
        E6.E06_18 = "";
        if (TC.ePatient["ePatient.20"].IsNull == false)
        {
            E6.E06_18 = TC.ePatient["ePatient.20"].vSet[0];
        }
    };

    if (typeof TC.ePatient["ePatient.21"] != 'undefined')
    {
        E6.E06_19 = "";
        if (TC.ePatient["ePatient.21"].IsNull == false)
        {
            E6.E06_19 = TC.ePatient["ePatient.21"].vSet[0];
        }
    };



    /////////////////////////////////////////
    /////////////////////////////////////////

    var E06 = {};

    if (TheCall.HasPatient == false)
    {
        E06.E06_01 = "-25";
        E06.E06_02 = "-25";
        E06.E06_03 = "-25";
        E06.E06_04 = "-25";
        E06.E06_05 = "-25";
        E06.E06_06 = "-25";
        E06.E06_07 = "-25";
        E06.E06_08 = "-25";
        E06.E06_09 = "-25";
        E06.E06_10 = "-25";
        E06.E06_11 = "-25";
        E06.E06_12 = "-25";
        E06.E06_13 = "-25";
        E06.E06_15 = "-25";
        E06.E06_17 = "-25";
        E06.E06_18 = "-25";
    }
    else
    {
        var E0601 = false;
        var e6 = {};
        if ((typeof E6.E06_01 != 'undefined') && (Utils.IsGo(E6.E06_01) == true))
        {
            e6.E06_01 = E6.E06_01;
            E0601 = true;
        }
        else
        {
            e6.E06_01 = "-20";
        };

        if ((typeof E6.E06_02 != 'undefined') && (Utils.IsGo(E6.E06_02) == true))
        {
            e6.E06_02 = E6.E06_02;
            E0601 = true;
        }
        else
        {
            e6.E06_02 = "-20";
        };
        if ((typeof E6.E06_03 != 'undefined') && (Utils.IsGo(E6.E06_03) == true))
        {
            e6.E06_03 = E6.E06_03;
            E0601 = true;
        }
        else
        {
            e6.E06_03 = "-20";
        };

        if (E0601 == true)
        {
            var E06_01_0 = {}
            E06_01_0.E06_01 = e6.E06_01;
            E06_01_0.E06_02 = e6.E06_02;
            E06_01_0.E06_03 = e6.E06_03;
            E06.E06_01_0 = E06_01_0;
        };


        var E0604 = false;
        var e64 = {};
        if ((typeof E6.E06_04 != 'undefined') && (Utils.IsGo(E6.E06_04) == true))
        {
            e64.E06_04 = E6.E06_04;
            E0604 = true;
        }
        else
        {
            e64.E06_04 = "-20";
        };

        if ((typeof E6.E06_05 != 'undefined') && (Utils.IsGo(E6.E06_05) == true))
        {
            e64.E06_05 = E6.E06_05;
            E0604 = true;
        }
        else
        {
            e64.E06_05 = "-20";
        };

        if ((typeof E6.E06_06 != 'undefined') && (Utils.IsGo(E6.E06_06) == true))
        {
            e64.E06_06 = E6.E06_06;
            E0604 = true;
        }
        else
        {
            e64.E06_06 = "-20";
        };

        if ((typeof E6.E06_07 != 'undefined') && (Utils.IsGo(E6.E06_07) == true))
        {
            e64.E06_07 = E6.E06_07;
            E0604 = true;
        }
        else
        {
            e64.E06_07 = "-20";
        };


        if ((typeof E6.E06_08 != 'undefined') && (Utils.IsGo(E6.E06_08) == true))
        {
            e64.E06_08 = E6.E06_08;
            E0604 = true;
        }
        else
        {
            e64.E06_08 = "-20";
        };

        if (E0604 == true)
        {
            var E06_04_0 = {}
            E06_04_0.E06_04 = e64.E06_04;
            E06_04_0.E06_05 = e64.E06_05;
            E06_04_0.E06_06 = e64.E06_06;
            E06_04_0.E06_07 = e64.E06_07;
            E06_04_0.E06_08 = e64.E06_08;
            E06.E06_04_0 = E06_04_0;
        };

        //////////////////
        if ((typeof E6.E06_09 != 'undefined') && (Utils.IsGo(E6.E06_09) == true))
        {
            E06.E06_09 = E6.E06_09;
        }
        else
        {
            E06.E06_09 = "-20";
        };

        if ((typeof E6.E06_10 != 'undefined') && (Utils.IsGo(E6.E06_10) == true))
        {
            E06.E06_10 = E6.E06_10;
        }
        else
        {
            E06.E06_10 = "-20";
        };


        if ((typeof E6.E06_11 != 'undefined') && (Utils.IsGo(E6.E06_11) == true))
        {
            E06.E06_11 = E6.E06_11;
        }
        else
        {
            E06.E06_11 = "-20";
        };

        if ((typeof E6.E06_12 != 'undefined') && (Utils.IsGo(E6.E06_12) == true))
        {
            E06.E06_12 = E6.E06_12;
        }
        else
        {
            E06.E06_12 = "-20";
        };


        if ((typeof E6.E06_13 != 'undefined') && (Utils.IsGo(E6.E06_13) == true))
        {
            E06.E06_13 = E6.E06_13;
        }
        else
        {
            E06.E06_13 = "-20";
        };

        var E0614 = false;
        var e1614 = {};
        if ((typeof E6.E06_14 != 'undefined') && (Utils.IsGo(E6.E06_14) == true))
        {
            e1614.E06_14 = E6.E06_14;
            E0614 = true;
        }
        else
        {
            e1614.E06_14 = "";
        };


        if ((typeof E6.E06_15 != 'undefined') && (Utils.IsGo(E6.E06_15) == true))
        {
            e1614.E06_15 = E6.E06_15;
            E0614 = true;
        }
        else
        {
            e1614.E06_15 = "-20";
        };

        if (E0614 == true)
        {
            var E06_14_0 = {}
            E06_14_0.E06_14 = e1614.E06_14;
            E06_14_0.E06_15 = e1614.E06_15;
            E06.E06_14_0 = E06_14_0;
        };


        if ((typeof E6.E06_16 != 'undefined') && (Utils.IsGo(E6.E06_16) == true))
        {
            E06.E06_16 = E6.E06_16;
        };


        if ((typeof E6.E06_17 != 'undefined') && (Utils.IsGo(E6.E06_17) == true))
        {
            E06.E06_17 = E6.E06_17;
        }
        else
        {
            E06.E06_17 = "-20";
        };

        var E0619 = false;
        var e619 = {};
        if ((typeof E6.E06_18 != 'undefined') && (Utils.IsGo(E6.E06_18) == true))
        {
            e619.E06_18 = E6.E06_18;
            E0619 = true;
        }
        else
        {
            e619.E06_18 = "-20";
        };

        if ((typeof E6.E06_19 != 'undefined') && (Utils.IsGo(E6.E06_19) == true))
        {
            e619.E06_19 = E6.E06_19;
            E0619 = true;
        };
        if (E0619 == true)
        {
            var E06_19_0 = {}
            E06_19_0.E06_18 = e619.E06_18;
            E06_19_0.E06_19 = e619.E06_19;
            E06.E06_19_0 = E06_19_0;
        };
    }


    E06.IsUndefined = false;
    E06.ErrorList = ErrorList;
    return E06
};



