var Utils = require('cloud/UtilitiesCC.js');
var V2Utils = require('cloud/ConversionUtilsCC.js');
exports.setE07 = function (TheCall)
{   
    var TC = TheCall;
    if (typeof TC.ePayment == 'undefined')
    {

        var E07 = {};
        E07.IsUndefined = true;
        return E07;
    }
    else {
        
        var pObj = {};
        pObj = TC.ePayment;
        var E7 = {};

        if (typeof pObj["ePayment.01"] != 'undefined') {
            E7.E07_01 = "";
            if (pObj["ePayment.01"].IsNull == false)
            {
                if (pObj["ePayment.01"].vSet[0] == '2601001')
                {
                    TheCall.PaymentType = "Insurance";
                };
                E7.E07_01 = V2Utils.setV2("ePayment.01", pObj["ePayment.01"].vSet[0]);
            }
        };

        if (typeof pObj["ePayment.02"] != 'undefined') {
            E7.E07_02 = "";
            if (pObj["ePayment.02"].IsNull == false) {
                E7.E07_02 = V2Utils.setV2("ePayment.02", pObj["ePayment.02"].vSet[0]);
            }
        };

        if (typeof TC.ePayment["InsuranceGroup"] != 'undefined') {
            var E07030 = [];
            for (var x = 0; x < TC.ePayment["InsuranceGroup"].length; x++) {
                var pObj = {}
                var E0703 = {};


                pObj = TC.ePayment["InsuranceGroup"][x];
                if (typeof pObj["ePayment.09"] != 'undefined') {
                    E0703.E07_03 = "";
                    if (pObj["ePayment.09"].IsNull == false) {
                        E0703.E07_03 = pObj["ePayment.09"].vSet[0];
                    }
                };

                if (typeof pObj["ePayment.11"] != 'undefined') {
                    E0703.E07_04 = "";
                    if (pObj["ePayment.11"].IsNull == false) {
                        E0703.E07_04 = pObj["ePayment.11"].vSet[0];
                    }
                };

                if (typeof pObj["ePayment.12"] != 'undefined') {
                    E0703.E07_05 = "";
                    if (pObj["ePayment.12"].IsNull == false) {
                        E0703.E07_05 = pObj["ePayment.12"].vSet[0];
                    }
                };

                if (typeof pObj["ePayment.13"] != 'undefined') {
                    E0703.E07_06 = "";
                    if (pObj["ePayment.13"].IsNull == false) {
                        E0703.E07_06 = pObj["ePayment.13"].vSet[0];
                    }
                };

                if (typeof pObj["ePayment.14"] != 'undefined') {
                    E0703.E07_07 = "";
                    if (pObj["ePayment.14"].IsNull == false) {
                        E0703.E07_07 = pObj["ePayment.14"].vSet[0];
                    }
                };

                if (typeof pObj["ePayment.15"] != 'undefined') {
                    E0703.E07_08 = "";
                    if (pObj["ePayment.15"].IsNull == false) {
                        E0703.E07_08 = pObj["ePayment.15"].vSet[0];
                    }
                };

                if (typeof pObj["ePayment.17"] != 'undefined') {
                    E0703.E07_09 = "";
                    if (pObj["ePayment.17"].IsNull == false) {
                        E0703.E07_09 = pObj["ePayment.17"].vSet[0];
                    }
                };

                if (typeof pObj["ePayment.14"] != 'undefined') {
                    E0703.E07_10 = "";
                    if (pObj["ePayment.14"].IsNull == false) {
                        E0703.E07_10 = pObj["ePayment.18"].vSet[0];
                    }
                };


                if (typeof pObj["ePayment.19"] != 'undefined') {
                    E0703.E07_11 = "";
                    if (pObj["ePayment.19"].IsNull == false) {
                        E0703.E07_11 = pObj["ePayment.19"].vSet[0];
                    }
                };


                if (typeof pObj["ePayment.20"] != 'undefined') {
                    E0703.E07_12 = "";
                    if (pObj["ePayment.20"].IsNull == false) {
                        E0703.E07_12 = pObj["ePayment.20"].vSet[0];
                    }
                };


                if (typeof pObj["ePayment.21"] != 'undefined') {
                    E0703.E07_13 = "";
                    if (pObj["ePayment.21"].IsNull == false) {
                        E0703.E07_13 = pObj["ePayment.21"].vSet[0];
                    }
                };


                if (typeof pObj["ePayment.22"] != 'undefined') {
                    E0703.E07_14 = "";
                    if (pObj["ePayment.22"].IsNull == false) {
                        E0703.E07_14 = V2Utils.setV2("ePayment.22", pObj["ePayment.22"].vSet[0]);
                    }
                };
                E07030.push(E0703)
            }//for
        };
        E7.E07_03_0 = E07030;

        E7.E07_15 = "";
        if (typeof TC.eSituation != 'undefined')
        {
            if (typeof TC.eSituation["eSituation.14"] != 'undefined')
            {
                E7.E07_15 = "";
                if (TC.eSituation["eSituation.14"].IsNull == false)
                {
                    E7.E07_15 = TC.eSituation["eSituation.14"].vSet[0];
                }
            };

            if (typeof TC.eSituation != 'undefined')
            {
                if (typeof TC.eSituation["eSituation.15"] != 'undefined')
                {
                    E7.E07_16 = "";
                    E7.E07_16 = V2Utils.setV2("eSituation.15", TC.eSituation["eSituation.15"].vSet[0]);
                }
            };
            if (typeof TC.eSituation["eSituation.16"] != 'undefined')
            {
                E7.E07_17 = "";
                if (TC.eSituation["eSituation.16"].IsNull == false)
                {

                    E7.E07_17 = V2Utils.setV2("eSituation.16", TC.eSituation["eSituation.16"].vSet[0]);
                }
            }
        };

        //closest relative
        //closest relative Name

        if (typeof TC.ePayment["ePayment.23"] != 'undefined') {
            E7.E07_18 = "";
            if (TC.ePayment["ePayment.23"].IsNull == false) {
                E7.E07_18 = TC.ePayment["ePayment.23"].vSet[0];
            }
        };


        if (typeof TC.ePayment["ePayment.24"] != 'undefined') {
            E7.E07_19 = "";
            if (TC.ePayment["ePayment.24"].IsNull == false) {
                E7.E07_19 = TC.ePayment["ePayment.24"].vSet[0];
            }
        };


        if (typeof TC.ePayment["ePayment.25"] != 'undefined') {
            E7.E07_20 = "";
            if (TC.ePayment["ePayment.25"].IsNull == false) {
                E7.E07_20 = TC.ePayment["ePayment.25"].vSet[0];
            }
        };


        //closest relative Address

        if (typeof TC.ePayment["ePayment.26"] != 'undefined') {
            E7.E07_21 = "";
            if (TC.ePayment["ePayment.26"].IsNull == false) {
                E7.E07_21 = TC.ePayment["ePayment.26"].vSet[0];
            }
        };


        if (typeof TC.ePayment["ePayment.27"] != 'undefined') {
            E7.E07_22 = "";
            if (TC.ePayment["ePayment.26"].IsNull == false) {
                E7.E07_22 = TC.ePayment["ePayment.27"].vSet[0];
            }
        };

        E7.E07_23 = "";
        if (typeof TC.ePayment["ePayment.28"] != 'undefined') {
            if (TC.ePayment["ePayment.28"].IsNull == false) {
                E7.E07_23 = TC.ePayment["ePayment.28"].vSet[0];
            }
        };
        

        if (typeof TC.ePayment["ePayment.29"] != 'undefined') {
            E7.E07_24 = "";
            if (TC.ePayment["ePayment.29"].IsNull == false) {
                E7.E07_24 = TC.ePayment["ePayment.29"].vSet[0];
            }
        };


        if (typeof TC.ePayment["ePayment.31"] != 'undefined') {
            E7.E07_25 = "";
            if (TC.ePayment["ePayment.31"].IsNull == false) {
                E7.E07_25 = TC.ePayment["ePayment.31"].vSet[0];
            }
        };

        if (typeof TC.ePayment["ePayment.32"] != 'undefined') {
            E7.E07_26 = "";
            if (TC.ePayment["ePayment.32"].IsNull == false) {
                E7.E07_26 = V2Utils.setV2("ePayment.32", TC.ePayment["ePayment.32"].vSet[0]);
            }
        };

        //Employer        
        if (typeof TC.ePayment["ePayment.33"] != 'undefined') {
            E7.E07_27 = "";
            if (TC.ePayment["ePayment.33"].IsNull == false) {
                E7.E07_27 = V2Utils.setV2("ePayment.33", TC.ePayment["ePayment.33"].vSet[0]);
            }
        };

        //Employer Address        
        if (typeof TC.ePayment["ePayment.34"] != 'undefined') {
            E7.E07_28 = "";
            if (TC.ePayment["ePayment.34"].IsNull == false) {
                E7.E07_28 = V2Utils.setV2("ePayment.34", TC.ePayment["ePayment.34"].vSet[0]);
            }
        };


        if (typeof TC.ePayment["ePayment.35"] != 'undefined') {
            E7.E07_29 = "";
            if (TC.ePayment["ePayment.35"].IsNull == false) {
                E7.E07_29 = V2Utils.setV2("ePayment.35", TC.ePayment["ePayment.35"].vSet[0]);
            }
        };


        if (typeof TC.ePayment["ePayment.36"] != 'undefined') {
            E7.E07_30 = "";
            if (TC.ePayment["ePayment.36"].IsNull == false) {
                E7.E07_30 = V2Utils.setV2("ePayment.36", TC.ePayment["ePayment.36"].vSet[0]);
            }
        };


        if (typeof TC.ePayment["ePayment.37"] != 'undefined') {
            E7.E07_31 = "";
            if (TC.ePayment["ePayment.37"].IsNull == false) {
                E7.E07_31 = V2Utils.setV2("ePayment.37", TC.ePayment["ePayment.37"].vSet[0]);
            }
        };
        
        if (typeof TC.ePayment["ePayment.39"] != 'undefined')
        {
            E7.E07_32 = "";
            if (TC.ePayment["ePayment.39"].IsNull == false) {
                E7.E07_32 = TC.ePayment["ePayment.39"].vSet[0];
            }
        };

        if (typeof TC.ePayment["ePayment.40"] != 'undefined') {
            E7.E07_33 = "";
            if (TC.ePayment["ePayment.40"].IsNull == false) {
                E7.E07_33 = V2Utils.setV2("ePayment.40", TC.ePayment["ePayment.40"].vSet[0]);
            }
        };


        if (typeof TC.ePayment["ePayment.50"] != 'undefined') {
            E7.E07_34 = "";
            if (TC.ePayment["ePayment.50"].IsNull == false) {
                E7.E07_34 = V2Utils.setV2("ePayment.50", TC.ePayment["ePayment.50"].vSet[0]);
            }
        };


        if (typeof TC.ePayment["ePayment.51"] != 'undefined') {
            var E07_35 = [];
            if (TC.ePayment["ePayment.51"].IsNull == false) {
                for (var aa = 0; aa < TC.ePayment["ePayment.51"].vSet.length; aa++) {
                    //E07_35.push(V2Utils.setV2("ePayment.51", TC.ePayment["ePayment.51"].vSet[aa]));
                    E07_35.push(TC.ePayment["ePayment.51"].vSet[aa]);
                };
                E7.E07_35 = E07_35;
            }
        };


        if (typeof TC.ePayment["ePayment.52"] != 'undefined') {
            E07_37 = [];
            if (TC.ePayment["ePayment.51"].IsNull == false) {
                for (var aa = 0; aa < TC.ePayment["ePayment.52"].length; aa++) {
                    E07_37.push(V2Utils.setV2("ePayment.52", TC.ePayment["ePayment.52"][aa].vSet[aa]));
                }
            };
            E7.E07_37 = E07_37;
        };
        //The Rules
        var E07 = {};
        // if (TheCall.HasPatient == false) {
        //     E07.E07_01 = NOTAPPLICABLE;
        //     E07.E07_02 = NOTAPPLICABLE;
        //     E07.E07_03 = NOTAPPLICABLE;
        // }
        // else {
        if ((typeof E7.E07_01 != 'undefined') && (Utils.IsGo(E7.E07_01) == true)) {
            E07.E07_01 = E7.E07_01;
        }
        else {
            E07.E07_01 = "-20";
        };

        if ((typeof E7.E07_02 != 'undefined') && (Utils.IsGo(E7.E07_02) == true)) {
            E07.E07_02 = E7.E07_02;
        }
        else {
            E07.E07_02 = "-20";
        };
        if (typeof TheCall.PaymentType != "undefined")
            //if (TheCall.PaymentType = "Insurance")
        {
            var E07_03_0 = {};
            var E07_05_0 = {};
            var E07_11_0 = {};
            E07.E07_01 = "-25";
            E07.E07_02 = "-25";
            E07_03_0.E07_03 = "-25";
            E07_03_0.E07_04 = "-25";
            E07_03_0.E07_09 = "-25";
            E07_03_0.E07_10 = "-25";
            E07_03_0.E07_14 = "-25";

            E07_05_0.E07_05 = "-25";
            E07_05_0.E07_06 = "-25";
            E07_05_0.E07_07 = "-25";
            E07_05_0.E07_08 = "-25";
            E07_11_0.E07_11 = "-25";
            E07_11_0.E07_12 = "-25";
            E07_11_0.E07_13 = "-25";
            E07.E07_03_0 = E07_03_0;
            E07_03_0.E07_05_0 = E07_05_0;
            E07_03_0.E07_11_0 = E07_11_0;
            E07.E07_03_0 = E07_03_0;
        }
        else
        {
            var e07 = {};
            if ((typeof E7.E07_01 != 'undefined') && (Utils.IsGo(E7.E07_01) == true))
            {
                e07.E07_01 = E7.E07_01;
            }
            else
            {
                e07.E07_01 = "-20";
            };

            if ((typeof E7.E07_02 != 'undefined') && (Utils.IsGo(E7.E07_02) == true))
            {
                e07.E07_02 = E7.E07_02;
            }
            else
            {
                e07.E07_02 = "-20";
            };


            var E07030 = [];
            if (typeof E7.E07_03_0 != 'undefined')
            {
                if (E7.E07_03_0.length > 0)
                {
                    for (var x = 0; x < E7.E07_03_0.length ; x++)
                    {
                        var e07 = {};

                        var E0703 = false;
                        if ((typeof E7.E07_03_0[x].E07_03 != 'undefined') && (Utils.IsGo(E7.E07_03_0[x].E07_03) == true))
                        {
                            e07.E07_03 = E7.E07_03_0[x].E07_03;
                            E0703 = true;
                        }
                        else
                        {
                            e07.E07_03 = "-20";
                        };

                        if ((typeof E7.E07_03_0[x].E07_04 != 'undefined') && (Utils.IsGo(E7.E07_03_0[x].E07_04) == true))
                        {
                            e07.E07_04 = E7.E07_03_0[x].E07_04;
                            E0703 = true;
                        }
                        else
                        {
                            e07.E07_04 = "-20";
                        };

                        var E0705 = false;
                        var e075 = {};
                        if ((typeof E7.E07_03_0[x].E07_05 != 'undefined') && (Utils.IsGo(E7.E07_03_0[x].E07_05) == true))
                        {
                            e075.E07_05 = E7.E07_03_0[x].E07_05;
                            E0705 = true;
                        }
                        else
                        {
                            e075.E07_05 = "-20";
                        };

                        if ((typeof E7.E07_03_0[x].E07_06 != 'undefined') && (Utils.IsGo(E7.E07_03_0[x].E07_06) == true))
                        {
                            e075.E07_06 = E7.E07_03_0[x].E07_06;
                            E0705 = true;
                        }
                        else
                        {
                            e075.E07_06 = "-20";
                        };

                        if ((typeof E7.E07_03_0[x].E07_07 != 'undefined') && (Utils.IsGo(E7.E07_03_0[x].E07_07) == true))
                        {
                            e075.E07_07 = E7.E07_03_0[x].E07_07;
                            E0705 = true;
                        }
                        else
                        {
                            e075.E07_07 = "-20";
                        };

                        if ((typeof E7.E07_03_0[x].E07_08 != 'undefined') && (Utils.IsGo(E7.E07_03_0[x].E07_08) == true))
                        {
                            e075.E07_08 = E7.E07_03_0[x].E07_08;
                            E0705 = true;
                        }
                        else
                        {
                            e075.E07_08 = "-20";
                        };
                        if (E0703 == true)
                        {
                            if (E0705 == true)
                            {
                                var E07_05_0 = {};
                                E07_05_0.E07_05 = e075.E07_05;
                                E07_05_0.E07_06 = e075.E07_06;
                                E07_05_0.E07_07 = e075.E07_07;
                                E07_05_0.E07_08 = e075.E07_08;

                            };

                            if ((typeof E7.E07_03_0[x].E07_09 != 'undefined') && (Utils.IsGo(E7.E07_03_0[x].E07_09) == true))
                            {
                                e07.E07_09 = E7.E07_03_0[x].E07_09;
                                E0703 = true;
                            }
                            else
                            {
                                e07.E07_09 = "-20";
                            };

                            if ((typeof E7.E07_03_0[x].E07_10 != 'undefined') && (Utils.IsGo(E7.E07_03_0[x].E07_10) == true))
                            {
                                e07.E07_10 = E7.E07_03_0[x].E07_10;
                                E0703 = true;
                            }
                            else
                            {
                                E07.E07_10 = "-20";
                            };


                            var E0711 = false;
                            var e711 = false;
                            if ((typeof E7.E07_03_0[x].E07_11 != 'undefined') && (Utils.IsGo(E7.E07_03_0[x].E07_11) == true))
                            {
                                e711.E07_11 = E7.E07_03_0[x].E07_11;
                                E0711 = true;
                            }
                            else
                            {
                                e711.E07_11 = "-20";
                            };

                            if ((typeof E7.E07_03_0[x].E07_12 != 'undefined') && (Utils.IsGo(E7.E07_03_0[x].E07_12) == true))
                            {
                                e711.E07_12 = E7.E07_12;
                                E0711 = true;
                            }
                            else
                            {
                                e711.E07_12 = "-20";
                            };

                            if ((typeof E7.E07_03_0[x].E07_13 != 'undefined') && (Utils.IsGo(E7.E07_03_0[x].E07_13) == true))
                            {
                                e711.E07_13 = E7.E07_03_0[x].E07_13;
                                E0711 = true;
                            }
                            else
                            {
                                e711.E07_13 = "-20";
                            };

                            if (E0711 == true)
                            {
                                var E07_11_0 = {};
                                E07_11_0.E07_11 = e711.E07_11;
                                E07_11_0.E07_12 = e711.E07_12;
                                E07_11_0.E07_13 = e711.E07_13;
                                E07_05_0.E07_11_0 = E07_05_0;

                            }
                        };


                        if ((typeof E7.E07_14 != 'undefined') && (Utils.IsGo(E7.E07_14) == true))
                        {
                            E07.E07_14 = E7.E07_14;
                            E0703 = true;
                        }
                        else
                        {
                            E07.E07_14 = "-20";
                        };
                        if (E0703 == true)
                        {
                            var E07_03_0 = {};
                            E07_03_0.E07_03 = e07.E07_03;
                            E07_03_0.E07_04 = e07.E07_04;
                            E07_03_0.E07_14 = e07.E07_14;
                            if (typeof E07_05_0 != 'undefined')
                            {
                                E07_03_0.E07_05_0 = E07_05_0;
                            };

                            if (typeof E07_11_0 != 'undefined')
                            {
                                E07_03_0.E07_11_0 = E07_11_0;
                            };

                            E07030.push(E07_03_0)
                        };
                    };
                    var E07_03_0 = []
                    E07_03_0 = E07030
                    E07.E07_03_0 = E07_03_0;
                }
            }
        };//INSURANCE
            
            if ((typeof E7.E07_15 != 'undefined') && (Utils.IsGo(E7.E07_15) == true)) {
                E07.E07_15 = E7.E07_15;
            }
            else {
                E07.E07_15 = "-20";
            };

            if ((typeof E7.E07_16 != 'undefined') && (Utils.IsGo(E7.E07_16) == true)) {
                E07.E07_16 = E7.E07_16;
            }
            else {
                E07.E07_16 = "-20";
            };

            if ((typeof E7.E07_17 != 'undefined') && (Utils.IsGo(E7.E07_17) == true)) {
                E07.E07_17 = E7.E07_17;
            }
            else {
                E07.E07_17 = "-20";
            };
            var E718 = false;
            var e718 = {};
            if ((typeof E7.E07_18 != 'undefined') && (Utils.IsGo(E7.E07_18) == true)) {
                E718.E07_18 = E7.E07_18;
                e718 = true;
            }
            else {
                E718.E07_18 = "-20";
            };

            if ((typeof E7.E07_19 != 'undefined') && (Utils.IsGo(E7.E07_19) == true)) {
                E718.E07_19 = E7.E07_19;
                e718 = true;
            }
            else {
                E718.E07_19 = "-20";
            };

            if ((typeof E7.E07_20 != 'undefined') && (Utils.IsGo(E7.E07_20) == true)) {
                E718.E07_20 = E7.E07_20;
                e718 = true;
            }
            else {
                E718.E07_20 = "-20";
            };


            if (e718 == true)
            {
                var E0721 = false;
                var E721 = {};
                if ((typeof E7.E07_21 != 'undefined') && (Utils.IsGo(E7.E07_21) == true))
                {
                    E721.E07_21 = E7.E07_21;
                    E0721 = true;
                }
                else
                {
                    E721.E07_21 = "-20";
                };

                if ((typeof E7.E07_22 != 'undefined') && (Utils.IsGo(E7.E07_22) == true))
                {
                    E721.E07_22 = E7.E07_22;
                    E0721 = true;
                }
                else
                {
                    E721.E07_22 = "-20";
                };

                if ((typeof E7.E07_23 != 'undefined') && (Utils.IsGo(E7.E07_23) == true))
                {
                    E721.E07_23 = E7.E07_23;
                    E0721 = true;
                }
                else
                {
                    E721.E07_23 = "-20";
                };

                if ((typeof E7.E07_24 != 'undefined') && (Utils.IsGo(E7.E07_24) == true))
                {
                    E721.E07_24 = E7.E07_24;
                    E0721 = true;
                }
                else
                {
                    E721.E07_24 = "-20";
                };

                if (E0721 == true)
                {
                    var E07_21_0 = {};
                    E07_21_0.E07_21 = E721.E07_21;
                    E07_21_0.E07_22 = E721.E07_22;
                    E07_21_0.E07_23 = E721.E07_23;
                    E07_21_0.E07_24 = E721.E07_24;
                    E07_21_0 = E07_21_0;
                }
            };

            if ((typeof E7.E07_25 != 'undefined') && (Utils.IsGo(E7.E07_25) == true)) {
                e718.E07_25 = E7.E07_25;
                e718 = true;
            }
            else {
                e718.E07_25 = "-20";
            };

            if ((typeof E7.E07_26 != 'undefined') && (Utils.IsGo(E7.E07_26) == true)) {
                e718.E07_26 = E7.E07_26;
                e718 = true;
            }
            else {
                e718.E07_26 = "-20";
            };
            if (e718 == true)
            {
                var E07_18_0 = {};
                if (typeof E07_21_0 != 'undefined')
                {
                    E07_18_0.E07_21_0 = E07_21_0
                };

                E07_18_0.E07_18 = E721.E07_18;
                E07_18_0.E07_19 = E721.E07_22;
                E07_18_0.E07_20 = E721.E07_23;
                E07.E07_18_0 = E07_18_0;
            };


            var E0727 = false;
            var e727 = false;
            if ((typeof E7.E07_27 != 'undefined') && (Utils.IsGo(E7.E07_27) == true)) {
                e727.E07_27 = E7.E07_27;
                E0727 = true;
            }
            else {
                e727.E07_27 = "-20";
            };

            var E0728 = false;
            var e728 = {};
            if ((typeof E7.E07_28 != 'undefined') && (Utils.IsGo(E7.E07_28) == true)) {
                e728.E07_28 = E7.E07_28;
                E0728 = true;
            }
            else {
                e728.E07_28 = "-20";
            };

            if ((typeof E7.E07_29 != 'undefined') && (Utils.IsGo(E7.E07_29) == true)) {
                e728.E07_29 = E7.E07_29;
                E0728 = true;
            }
            else {
                e728.E07_29 = "-20";
            };

            if ((typeof E7.E07_30 != 'undefined') && (Utils.IsGo(E7.E07_30) == true)) {
                e728.E07_30 = E7.E07_30;
                E0728 = true;
            }
            else {
                e728.E07_30 = "-20";
            };

            if ((typeof E7.E07_31 != 'undefined') && (Utils.IsGo(E7.E07_31) == true)) {
                e728.E07_31 = E7.E07_31;
                E0728 = true;
            }
            else {
                e728.E07_31 = "-20";
            };

            if (E0728 == true)
            {
                var E07_28_0 = {};
                E07_28_0.E07_28 = e728.E07_28;
                E07_28_0.E07_29 = e728.E07_29;
                E07_28_0.E07_30 = e728.E07_30;
                E07_28_0.E07_31 = e728.E07_31;

            };


            if (E0727 == true)
            {
                var E07_27_0 = {};
                E07_27_0.E07_27 = E07.E07_27;
                if (typeof E07_28_0 != 'undefined')
                {
                    E07_27_0.E07_28_0 = E07_28_0;
                };
                E07.E07_27_0 = E07_27_0;
            };


            if ((typeof E7.E07_32 != 'undefined') && (Utils.IsGo(E7.E07_32) == true)) {
                E07.E07_32 = E7.E07_32;
            }
            else {
                E07.E07_32 = "-20";
            };

            if ((typeof E7.E07_33 != 'undefined') && (Utils.IsGo(E7.E07_33) == true)) {
                E07.E07_33 = E7.E07_33;
            }
            else {
                E07.E07_33 = "-20";
            };

            if ((typeof E7.E07_34 != 'undefined') && (Utils.IsGo(E7.E07_34) == true)) {
                E07.E07_34 = E7.E07_34;
            }
            else {
                E07.E07_34 = "-20";
            };

            var E0735 = false;
            var e735 = {};
            if ((typeof E7.E07_35 != 'undefined') && (Utils.IsGo(E7.E07_35) == true)) {
                e735.E07_35 = E7.E07_35;
                E0735 = true;
            }
            else {
                e735.E07_35 = "-20";
            };
            if ((typeof E7.E07_36 != 'undefined') && (Utils.IsGo(E7.E07_36) == true)) {
                e735.E07_36 = E7.E07_36;
                E0735 = true;
            }
            else {
                e735.E07_36 = "-20";
            };

            if (E0735 == true)
            {
                var E07_35_0 = {};
                E07_35_0.E07_35 = e735.E07_35;
                E07_35_0.E07_36 = e735.E07_36;
                E07.E07_35_0 = E07_35_0;
            };
            var E07_37 = [];
            if ((typeof E7.E07_37 != 'undefined') && (Utils.IsGo(E7.E07_37) == true))
            {
                E07_37=E7.E07_37;
            }
            else
            {
                E07_37.push("-20");
            };
            E07.E07_37 = E07_37
        //};
        E07.IsUndefined = false;
        E07.ErrorList = ErrorList;
       
        return E07
    }
};

