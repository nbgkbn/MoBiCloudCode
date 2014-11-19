
setV2OM = function (TC) {

    var EMSDataSet = {};
    var sM = {
        "7701001": "-5",
        "7701003": "-15",
        "7701005": "-20",
        "8801005": "-10",
        "8801013": "-10",
        "8801015": "-10",
        "8801017": "-10",
        "8801019": "-10",
        "8801021": "-10",
        "8801023": "-10"
    };
    var sV = ["7701001", "7701003", "7701005", "8801005", "8801013", "8801015", "8801017", "8801019", "8801021", "8801023"];

    /*   var v3NOT_RECORDED = "7701003";
       var v3NOT_APPLICABLE = "7701001";
       var v2NOT_AVAILABLE = "-5";
       var v2NOT_REPORTING = "-15";
       var v2NOT_APPLICABLE = "-25"
       var v2NOT_RECORDED = "-20";
       var v2NOT_KNOWN = "-10";
       var v2obj ={};;
       var v2Object ={};;
       */
    //v2obj = getVersion221Values(ArrayOfVersion2Objects, "E01_01");

    console.log(TC)
    if (typeof TC.eRecord != 'undefined') {
        var E01 = {};
        if (typeof TC.eRecord["eRecord.01"] != 'undefined') {
            E01.E01_01 = TC.eRecord["eRecord.01"].vSet[0];
        };

        if (typeof TC.eRecord["eRecord.02"] != 'undefined') {
            E01.E01_02 = TC.eRecord["eRecord.02"].vSet[0];
        };
        if (typeof TC.eRecord["eRecord.03"] != 'undefined') {
            E01.E01_03 = TC.eRecord["eRecord.03"].vSet[0];
        };
        if (typeof TC.eRecord["eRecord.04"] != 'undefined') {
            E01.E01_04 = TC.eRecord["eRecord.04"].vSet[0];
        };
        EMSDataSet.E01 = E01;
    };
    if (typeof TC.eResponse != 'undefined') {
        console.log(TC.eResponse)
        var E02 = {};
        var eR = {};
        eR = TC.eResponse;


        if (typeof eR["eResponse.01"] != 'undefined') {
            if (eR["eResponse.01"].IsNull != true) {
                E02.E02_01 = eR["eResponse.01"].vSet[0];
            }
        };

        if (typeof eR["eResponse.03"] != 'undefined') {
            if (eR["eResponse.03"].IsNull == true) {
                if (sV.indexOf(eR["eResponse.03"].vSet[0]) != -1) {
                    E02.E02_02, sM[eR["eResponse.03"].vSet[0]];
                }
            }
            else {
                E02.E02_02 = eR["eResponse.03"].vSet[0];
            }
        };
        console.log(eR["eResponse.04"])
        if (typeof eR["eResponse.04"] != 'undefined') {
            if (eR["eResponse.04"].IsNull == true) {
                if (sV.indexOf(eR["eResponse.04"].vSet[0]) != -1) {
                    E02.E02_03, sM[eR["eResponse.04"].vSet[0]];
                }
            }
            else {
                E02.E02_03 = eR["eResponse.04"].vSet[0];
            }
        };

        if (typeof eR["eResponse.05"] != 'undefined') {
            if (eR["eResponse.05"].IsNull != true) {
                E02.E02_04 = setV2("eResponse.05", eR["eResponse.05"].vSet[0]);
            }
        };

        if (typeof eR["eResponse.07"] != 'undefined') {
            if (eR["eResponse.07"].IsNull == false) {
                E02.E02_05 = setV2("eResponse.07", eR["eResponse.07"].vSet[0]);
            }
        };


        if (typeof eR["eResponse.08"] != 'undefined') {
            var E02_06 = [];
            if (eR["eResponse.08"].IsNull == true) {

                if (sV.indexOf(eR["eResponse.08"].vSet[0]) != -1) {
                    E02_06.push(sM[eR["eResponse.08"].vSet[0]]);
                }
            }
            else {
                for (var i = 0; i < eR["eResponse.08"].vSet.length; i++) {
                    E02_06.push(setV2("eResponse.08", eR["eResponse.08"].vSet[i]));
                }
            };
            E02.E02_06 = E02_06;
        };



        if (typeof eR["eResponse.09"] != 'undefined') {
            var E02_07 = [];
            if (eR["eResponse.09"].IsNull == true) {
                if (sV.indexOf(eR["eResponse.09"].vSet[0]) != -1) {
                    E02_07.push(sM[eR["eResponse.09"].vSet[0]]);
                }
            }
            else {
                for (var i = 0; i < eR["eResponse.09"].vSet.length; i++) {
                    E02_07.push(setV2("eResponse.09", eR["eResponse.09"].vSet[i]));
                }
            };
            E02.E02_07 = E02_07;
        };



        if (typeof eR["eResponse.10"] != 'undefined') {
            var E02_08 = [];
            if (eR["eResponse.10"].IsNull == true) {
                if (sV.indexOf(eR["eResponse.10"].vSet[0]) != -1) {
                    E02_08.push(sM[eR["eResponse.10"].vSet[0]]);
                }
            }
            else {
                for (var i = 0; i < eR["eResponse.10"].vSet.length; i++) {
                    E02_08.push(setV2("eResponse.10", eR["eResponse.10"].vSet[i]));
                }
            };
            E02.E02_08 = E02_08;
        };



        if (typeof eR["eResponse.11"] != 'undefined') {
            var E02_09 = [];
            if (eR["eResponse.11"].IsNull == true) {
                if (sV.indexOf(eR["eResponse.11"].vSet[0]) != -1) {
                    E02_09.push(sM[eR["eResponse.11"].vSet[0]]);
                }
            }
            else {
                for (var i = 0; i < eR["eResponse.11"].vSet.length; i++) {
                    E02_09.push(setV2("eResponse.11", eR["eResponse.11"].vSet[i]));
                }
            };
            E02.E02_09 = E02_09;
        };


        if (typeof eR["eResponse.12"] != 'undefined') {
            var E02_10 = [];
            if (eR["eResponse.12"].IsNull == true) {
                if (sV.indexOf(eR["eResponse.12"][0]) != -1) {
                    E02_10.push(sM[eR["eResponse.12"].vSet[0]]);
                }
            }
            else {
                for (var i = 0; i < eR["eResponse.12"].vSet.length; i++) {
                    E02_10.push(setV2("eResponse.12", eR["eResponse.12"].vSet[i]));
                }
                E02.E02_10 = E02_10;
            };
            E02.E02_10 = E02_10;
        };


        if (typeof eR["eResponse.13"] != 'undefined') {
            if (eR["eResponse.13"].IsNull == true) {
                E02.E02_11 = "-5";
            }
            else {
                E02.E02_11 = eR["eResponse.13"].vSet[0];
            }
        }
        else {
            E02.E02_11 = "-10";
        };

        if (typeof eR["eResponse.14"] != 'undefined') {
            if (eR["eResponse.14"].IsNull == false) {
                E02.E02_12 = eR["eResponse.14"].vSet[0];
            }
        };

        if (typeof eR["eResponse.16"] != 'undefined') {
            if (eR["eResponse.16"].IsNull == true) {
                E02.E02_13 = "-5";
            }
            else {
                E02.E02_13 = eR["eResponse.16"].vSet[0];
            }
        };
        E02.E02_14 = "-10";

        if (typeof eR["eResponse.17"] != 'undefined') {
            if (eR["eResponse.17"].IsNull == false) {
                E02.E02_15 = eR["eResponse.17"].vSet[0];
            }
        };


        if (typeof eR["eResponse.19"] != 'undefined') {
            if (eR["eResponse.19"].IsNull == false) {
                E02.E02_16 = eR["eResponse.19"].vSet[0];
            }
        };

        if (typeof eR["eResponse.20"] != 'undefined') {
            if (eR["eResponse.20"].IsNull == false) {
                E02.E02_17 = eR["eResponse.20"].vSet[0];
            }
        };

        if (typeof eR["eResponse.21"] != 'undefined') {
            if (eR["eResponse.21"].IsNull == false) {
                E02.E02_18 = eR["eResponse.21"].vSet[0];
            }
        };

        if (typeof eR["eResponse.22"] != 'undefined') {
            if (eR["eResponse.22"].IsNull == false) {
                E02.E02_19 = eR["eResponse.22"].vSet[0];
            }
        };

        if (typeof eR["eResponse.23"] != 'undefined') {
            if (eR["eResponse.23"].IsNull == false) {
                E02.E02_20 = setV2("eResponse.23", eR["eResponse.23"].vSet[0]);
            }
        };

        ////////////////////////////////////////////////////
        EMSDataSet.E02 = E02;
    };
    if (typeof TC.eDispatch != 'undefined') {
        var E03 = new Object();
        var eD = {};
        eD = TC.eDispatch;
        E03.E03_01 = "";
        if (typeof eD["eDispatch.01"] != 'undefined') {
            if (eD["eDispatch.01"].IsNull == true) {
                if (sV.indexOf(eD["eDispatch.01"].vSet[0]) != -1) {
                    E03.E03_01 = sM[eD["eDispatch.01"].vSet[0]];
                }
            }

            else {
                E03.E03_01 = setV2("eDispatch.01", eD["eDispatch.01"].vSet[0]);
            }
        };
        E03.E03_02 = "";
        if (typeof eD["eDispatch.02"] != 'undefined') {
            if (eD["eDispatch.02"].IsNull == true) {
                if (sV.indexOf(eD["eDispatch.02"].vSet[0]) != -1) {
                    E03.E03_02 = sM[eD["eDispatch.02"].vSet[0]];
                }
            }

            else {
                E03.E03_02 = setV2("eDispatch.02", eD["eDispatch.02"].vSet[0]);
            }
        };

        E03.E03_03 = "";
        if (typeof eD["eDispatch.03"] != 'undefined') {
            if (eD["eDispatch.03"].IsNull == true) {
                E03.E03_03 = "";
            }
            else {
                E03.E03_03 = eD["eDispatch.03"].vSet[0];
            }
        };
        EMSDataSet.E03 = E03;
    };
    if (typeof TC.eCrew != 'undefined') {
        console.log(TC.eCrew)
        var E4Array = [];
        for (var i = 0; i < TC.eCrew.CrewGroup.length; i++) {
            var eCG = {};
            eCG = TC.eCrew.CrewGroup[i];
            var E04 = new Object();
            E04.E04_01 = "";

            if (typeof eCG["eCrew.01"] != 'undefined') {
                if (TC.eCrew.CrewGroup[i]["eCrew.01"].IsNull == true) {
                    if (sV.indexOf(eCG["eCrew.01"].vSet[0]) != -1) {
                        E04.E04_01 = sM[eCG["eCrew.01"].vSet[0]];
                    }
                }
                else {
                    E04.E04_01 = eCG["eCrew.01"].vSet[0];
                }
            };

            E04.E04_03 = "";
            if (typeof eCG["eCrew.02"] != 'undefined') {
                if (eCG["eCrew.02"].IsNull == true) {
                    if (sV.indexOf(eCG["eCrew.02"].vSet[0]) != -1) {
                        E04.E04_03 = sM[eCG["eCrew.02"].vSet[0]];
                    }
                }
                else {
                    E04.E04_03 = setV2("eCrew.02", eCG["eCrew.02"].vSet[0]);
                }
            };
            var E04_02 = [];
            if (typeof eCG["eCrew.03"] != 'undefined') {
                if (eCG["eCrew.03"].IsNull == true) {
                    if (sV.indexOf(eCG["eCrew.03"].vSet[0]) != -1) {
                        E04.E04_02.push(sM[eCG["eCrew.03"].vSet[0]]);
                    }
                }
                else {                    
                    for (var x = 0; x < eCG["eCrew.03"].vSet.length; x++) {
                        E04_02.push(setV2("eCrew.03", eCG["eCrew.03"].vSet[x].val));
                    }
                    E04.E04_02 = E04_02;
                }
            };
            E4Array.push(E04)
        };
        EMSDataSet.E04 = E4Array.slice(0);
    };
    if (typeof TC.eTimes != 'undefined') {
        var E05 = {};
        console.log(TC.eTimes)

        if (typeof TC.eSituation != 'undefined') {
            if (typeof TC.eSituation["eSituation.01"] != 'undefined') {
                if (TC.eSituation["eSituation.01"].IsNull == true) {
                    if (sV.indexOf(TC.eSituation["eSituation.01"].vSet[0]) != -1) {
                        E05.E05_01 = sM[TC.eSituation["eSituation.01"].vSet[0]];
                    }
                }
                else {
                    E05.E05_01 = TC.eSituation["eSituation.01"].vSet[0];
                }
            }
        };


        if (typeof TC.eTimes["eTimes.01"] != 'undefined') {
            if (TC.eTimes["eTimes.01"].IsNull == true) {
                if (sV.indexOf(TC.eTimes["eTimes.01"].vSet[0]) != -1) {
                    E05.E05_02 = sM[TC.eTimes["eTimes.01"].vSet[0]];
                }
                else {
                    E05.E05_02 = TC.eTimes["eTimes.01"].vSet[0];
                }
            }
        };

        if (typeof TC.eTimes["eTimes.02"] != 'undefined') {
            if (TC.eTimes["eTimes.02"].IsNull != true) {
                E05.E05_03 = TC.eTimes["eTimes.02"].vSet[0];
            }
        };


        if (typeof TC.eTimes["eTimes.03"] != 'undefined') {
            if (TC.eTimes["eTimes.02"].IsNull != true) {
                E05.E05_04 = TC.eTimes["eTimes.03"].vSet[0];
            }
        };


        if (typeof TC.eTimes["eTimes.05"] != 'undefined') {
            if (TC.eTimes["eTimes.05"].IsNull == true) {
                if (sV.indexOf(TC.eTimes["eTimes.05"].vSet[0]) != -1) {
                    E05.E05_05 = sM[TC.eTimes["eTimes.05"].vSet[0]];
                }
                else {
                    E05.E05_05 = TC.eTimes["eTimes.05"].vSet[0];
                }
            }
        };


        if (typeof TC.eTimes["eTimes.06"] != 'undefined') {
            if (TC.eTimes["eTimes.06"].IsNull == true) {
                if (sV.indexOf(TC.eTimes["eTimes.06"].vSet[0]) != -1) {
                    E05.E05_06 = sM[TC.eTimes["eTimes.06"].vSet[0]];
                }
                else {
                    E05.E05_06 = TC.eTimes["eTimes.06"].vSet[0];
                }
            }
        };


        if (typeof TC.eTimes["eTimes.07"] != 'undefined') {
            if (TC.eTimes["eTimes.07"].IsNull == true) {
                if (sV.indexOf(TC.eTimes["eTimes.07"].vSet[0]) != -1) {
                    E05.E05_07 = sM[TC.eTimes["eTimes.07"].vSet[0]];
                }
                else {
                    E05.E05_07 = TC.eTimes["eTimes.07"].vSet[0];
                }
            }
        };

        if (typeof TC.eTimes["eTimes.08"] != 'undefined') {
            if (TC.eTimes["eTimes.08"].IsNull == true) {
                if (sV.indexOf(TC.eTimes["eTimes.08"].vSet[0]) != -1) {
                    E05.E05_08 = sM[TC.eTimes["eTimes.08"].vSet[0]];
                }
                else {
                    E05.E05_08 = TC.eTimes["eTimes.08"].vSet[0];
                }
            }
        };


        if (typeof TC.eTimes["eTimes.09"] != 'undefined') {
            if (TC.eTimes["eTimes.09"].IsNull == true) {
                if (sV.indexOf(TC.eTimes["eTimes.09"].vSet[0]) != -1) {
                    E05.E05_09 = sM[TC.eTimes["eTimes.09"].vSet[0]];
                }
                else {
                    E05.E05_09 = TC.eTimes["eTimes.09"].vSet[0];
                }
            }
        };


        if (typeof TC.eTimes["eTimes.11"] != 'undefined') {
            if (TC.eTimes["eTimes.11"].IsNull == true) {
                if (sV.indexOf(TC.eTimes["eTimes.11"].vSet[0]) != -1) {
                    E05.E05_10 = sM[TC.eTimes["eTimes.11"].vSet[0]];
                }
                else {
                    E05.E05_10 = TC.eTimes["eTimes.11"].vSet[0];
                }
            }
        };


        /////////////////////////////////
        //////////////////////////////MANDATORY        
        if (typeof TC.eTimes["eTimes.13"] != 'undefined') {
            if (TC.eTimes["eTimes.13"].IsNull == true) {
                if (sV.indexOf(TC.eTimes["eTimes.13"].vSet[0]) != -1) {
                    E05.E05_11 = sM[TC.eTimes["eTimes.13"].vSet[0]];
                }
                else {
                    E05.E05_11 = TC.eTimes["eTimes.13"].vSet[0];
                }
            }
        };

        if (typeof TC.eTimes["eTimes.14"] != 'undefined') {
            if (TC.eTimes["eTimes.14"].IsNull == true) {
                if (sV.indexOf(TC.eTimes["eTimes.14"].vSet[0]) != -1) {
                    E05.E05_12 = sM[TC.eTimes["eTimes.14"].vSet[0]];
                }
                else {
                    E05.E05_12 = TC.eTimes["eTimes.14"].vSet[0];
                }
            }
        };


        if (typeof TC.eTimes["eTimes.15"] != 'undefined') {
            if (TC.eTimes["eTimes.15"].IsNull == true) {
                E05.E05_13 = "";

            }
            else {
                E05.E05_13 = TC.eTimes["eTimes.15"].vSet[0];
            }
        };
        EMSDataSet.E05 = E05;
    };
    if (typeof TC.ePatient != 'undefined') {
        var E06 = {};
        //Name Group
        var E06_01_0 = new Array();
        E06.E06_01 = "";
        if (typeof TC.ePatient["ePatient.02"] != 'undefined') {
            if (TC.ePatient["ePatient.02"].IsNull == true) {
                if (sV.indexOf(TC.ePatient["ePatient.02"].vSet[0]) != -1) {
                    E06.E06_01 = sM[TC.ePatient["ePatient.02"].vSet[0]];
                }
            }
            else {
                E06.E06_01 = TC.ePatient["ePatient.02"].vSet[0];
            }
        };

        E06.E06_02 = "";
        if (typeof TC.ePatient["ePatient.03"] != 'undefined') {
            if (TC.ePatient["ePatient.03"].IsNull == true) {
                if (sV.indexOf(TC.ePatient["ePatient.03"].vSet[0]) != -1) {
                    E06.E06_02 = sM[TC.ePatient["ePatient.03"].vSet[0]];
                }
            }
            else {
                E06.E06_02 = TC.ePatient["ePatient.03"].vSet[0];
            }
        };

        E06.E06_03 = "";
        if (typeof TC.ePatient["ePatient.04"] != 'undefined') {
            if (typeof TC.ePatient["ePatient.04"].IsNull == false) {
                E06.E06_03 = TC.ePatient["ePatient.04"].vSet[0];
            }
        };
        //Address Group
        E06.E06_04 = "";
        if (typeof TC.ePatient["ePatient.05"] != 'undefined') {
            if (TC.ePatient["ePatient.05"].IsNull == true) {
                E06.E06_04 = "-5";
            }
            else {
                E06.E06_04 = TC.ePatient["ePatient.05"].vSet[0];
            }
        };
        E06.E06_05 = "";
        if (typeof TC.ePatient["ePatient.06"] != 'undefined') {
            if (TC.ePatient["ePatient.06"].IsNull == true) {
                E06.E06_05 = "-5";
            }
            else {
                E06.E06_05 = TC.ePatient["ePatient.06"].vSet[0];
            }
        };

        E06.E06_06 = "";
        if (typeof TC.ePatient["ePatient.07"] != 'undefined') {
            if (TC.ePatient["ePatient.07"].IsNull == true) {
                E06.E06_06 = "-5";
            }
            else {
                E06.E06_06 = TC.ePatient["ePatient.07"].vSet[0];
            }
        };

        E06.E06_07 = "";
        if (typeof TC.ePatient["ePatient.08"] != 'undefined') {
            if (TC.ePatient["ePatient.08"].IsNull == true) {
                E06.E06_07 = "-5";
            }
            else {
                E06.E06_07 = TC.ePatient["ePatient.08"].vSet[0];
            }
        };

        E06.E06_08 = "";
        if (typeof TC.ePatient["ePatient.09"] != 'undefined') {
            if (TC.ePatient["ePatient.09"].IsNull == true) {
                E06.E06_08 = "-5";
            }
            else {
                E06.E06_08 = TC.ePatient["ePatient.09"].vSet[0];
            }
        };

        E06.E06_09 = "";
        if (typeof TC.ePatient["ePatient.10"] != 'undefined') {
            if (TC.ePatient["ePatient.10"].IsNull == true) {
                E06.E06_09 = "-5";
            }
            else {
                E06.E06_09 = TC.ePatient["ePatient.10"].vSet[0];
            }
        };

        E06.E06_10 = "";
        if (typeof TC.ePatient["ePatient.12"] != 'undefined') {
            if (TC.ePatient["ePatient.12"].IsNull == false) {
                E06.E06_10 = TC.ePatient["ePatient.12"].vSet[0];
            }
        };

        E06.E06_11 = "";
        if (typeof TC.ePatient["ePatient.13"] != 'undefined') {
            if (TC.ePatient["ePatient.13"].IsNull == true) {
                if (sV.indexOf(TC.ePatient["ePatient.13"].vSet[0]) != -1) {
                    E06.E06_11 = sM[TC.ePatient["ePatient.13"].vSet[0]];
                }
            }
            else {
                E06.E06_11 = TC.ePatient["ePatient.13"].vSet[0];
            }
        };

        E06.E06_12 = "";
        E06.E06_13 = "";
        if (typeof TC.ePatient["ePatient.14"] != 'undefined') {
            if (TC.ePatient["ePatient.14"].IsNull == true) {
                if (sV.indexOf(TC.ePatient["ePatient.14"].vSet[0]) != -1) {
                    E06.E06_12 = sM[TC.ePatient["ePatient.14"].vSet[0]];
                    E06.E06_13 = sM[TC.ePatient["ePatient.14"].vSet[0]];
                }
            }
            else {
                var E06_12 = [];
                for (var i = 0; i < TC.ePatient["ePatient.14"].vSet.length; i++) {
                    E06_12.push(TC.ePatient["ePatient.14"].vSet[i]);
                };
                E06.E06_12 = E06_12

                if (TC.ePatient["ePatient.14"].vSet.indexOf("2514007") != -1) {
                    E06.E06_13 = "690";
                }
                else {
                    E06.E06_13 = "695";
                };
            }
        };
        E06.E06_14 = "";
        E06.E06_15 = "";
        if (typeof TC.ePatient.AgeGroup["ePatient.15"] != 'undefined') {
            if (TC.ePatient.AgeGroup["ePatient.15"].IsNull == true) {
                if (sV.indexOf(TC.ePatient.AgeGroup["ePatient.15"].vSet[0]) != -1) {
                    E06.E06_14 = sM[TC.ePatient.AgeGroup["ePatient.15"].vSet[0]];
                }
            }
            else {
                E06.E06_14 = TC.ePatient.AgeGroup["ePatient.15"].vSet[0];
            }
        };

        if (typeof TC.ePatient.AgeGroup["ePatient.16"] != 'undefined') {
            if (TC.ePatient.AgeGroup["ePatient.16"].IsNull == true) {
                if (sV.indexOf(TC.ePatient.AgeGroup["ePatient.16"].vSet[0]) != -1) {
                    E06.E06_15 = "";
                }
            }
            else {
                E06.E06_15 = setV2("ePatient.16", TC.ePatient.AgeGroup["ePatient.16"].vSet[0]);
            }
        };
        E06.E06_16 = "";
        if (typeof TC.ePatient["ePatient.17"] != 'undefined') {
            if (TC.ePatient["ePatient.17"].IsNull == true) {
                if (sV.indexOf(TC.ePatient["ePatient.17"].vSet[0]) != -1) {
                    E06.E06_16 = "";
                }
            }
            else {
                E06.E06_16 = TC.ePatient["ePatient.17"].vSet[0];
            }
        };

        E06.E06_17 = "";
        if (typeof TC.ePatient["ePatient.18"] != 'undefined') {
            if (TC.ePatient["ePatient.18"].IsNull == false) {
                if (sV.indexOf(TC.ePatient["ePatient.18"].vSet[0]) != -1) {
                    E06.E06_17 = "";
                }
                else {
                    E06.E06_17 = TC.ePatient["ePatient.18"].vSet[0].val;
                }
            }
        };

        E06.E06_18 = "";
        if (typeof TC.ePatient["ePatient.20"] != 'undefined') {
            if (TC.ePatient["ePatient.20"].IsNull == true) {
                E06.E06_18 = "-5";
            }
            else {
                E06.E06_18 = TC.ePatient["ePatient.20"].vSet[0];
            }
        };

        E06.E06_19 = "";
        if (typeof TC.ePatient["ePatient.21"] != 'undefined') {
            if (TC.ePatient["ePatient.21"].IsNull == true) {
                E06.E06_19 = "-5";
            }
            else {
                E06.E06_19 = TC.ePatient["ePatient.21"].vSet[0];
            }
        };
        EMSDataSet.E06 = E06;
    };
    if (typeof TC.ePayment != 'undefined')
    {
        var pObj = {};
        pObj = TC.ePayment;
        var E07 = {};
        if (typeof pObj["ePayment.01"] != 'undefined') {
            E07.E07_01 = "";
            if (typeof pObj["ePayment.01"].IsNull == true) {
                if (sV.indexOf(pObj["ePayment.01"].vSet[0]) != -1) {
                    E07.E07_01 = sM[pObj["ePayment.01"].vSet[0]];
                }
            }
            else {
                E07.E07_01 = setV2("ePayment.01", pObj["ePayment.01"].vSet[0]);
            }
        };

        E07.E07_02 = "";
        if (typeof pObj["ePayment.02"] != 'undefined') {
            if (pObj["ePayment.02"].IsNull == false) {
                E07.E07_02 = setV2("ePayment.02", pObj["ePayment.02"].vSet[0]);
            }
        };

        //Insurance Companies
        E07.E07_03 = "";
        E07.E07_04 = "";
        E07.E07_05 = "";
        E07.E07_06 = "";
        E07.E07_07 = "";
        E07.E07_08 = "";
        E07.E07_09 = "";
        E07.E07_10 = "";
        E07.E07_11 = "";
        E07.E07_12 = "";
        E07.E07_13 = "";
        E07.E07_14 = "";
        
        if (typeof TC.ePayment["InsuranceGroup"] != 'undefined') {
            var E07_03_0Array = [];
            for (var x = 0; x < TC.ePayment["InsuranceGroup"].length; x++) {
                
                var pObj = {}
                var E07_03_0 = {};

                E07_03_0.E07_03 = "";
                pObj = TC.ePayment["InsuranceGroup"][x];
                if (typeof pObj["ePayment.09"] != 'undefined') {
                    if (pObj["ePayment.09"].IsNull == true) {
                        E07_03_0.E07_03 = "-5";
                    }
                    else {
                        E07_03_0.E07_03 = pObj["ePayment.09"].vSet[0];
                    }
                };

                E07_03_0.E07_04 = "";
                if (typeof pObj["ePayment.11"] != 'undefined') {
                    if (pObj["ePayment.11"].IsNull == true) {
                        E07_03_0.E07_04 = "-5";
                    }
                    else {
                        E07_03_0.E07_04 = pObj["ePayment.11"].vSet[0];
                    }
                };

                //Address

                E07_03_0.E07_05 = "";
                if (typeof pObj["ePayment.12"] != 'undefined') {
                    if (pObj["ePayment.12"].IsNull == true) {
                        E07_03_0.E07_05 = "-5";
                    }
                    else {
                        E07_03_0.E07_05 = pObj["ePayment.12"].vSet[0];
                    }
                };

                E07_03_0.E07_06 = "";
                if (typeof pObj["ePayment.13"] != 'undefined') {
                    if (pObj["ePayment.13"].IsNull == true) {
                        E07_03_0.E07_06 = "-5";
                    }
                    else {
                        E07_03_0.E07_06 = pObj["ePayment.13"].vSet[0];
                    }
                };

                E07_03_0.E07_07 = "";
                if (typeof pObj["ePayment.14"] != 'undefined') {
                    if (pObj["ePayment.14"].IsNull == true) {
                        E07_03_0.E07_07 = "-5";
                    }
                    else {
                        E07_03_0.E07_07 = pObj["ePayment.14"].vSet[0];
                    }
                };

                E07_03_0.E07_08 = "";
                if (typeof pObj["ePayment.15"] != 'undefined') {
                    if (pObj["ePayment.15"].IsNull == true) {
                        E07_03_0.E07_08 = "-5";
                    }
                    else {
                        E07_03_0.E07_08 = pObj["ePayment.15"].vSet[0];
                    }
                };

                E07_03_0.E07_09 = "";
                if (typeof pObj["ePayment.17"] != 'undefined') {
                    if (pObj["ePayment.17"].IsNull == true) {
                        E07_03_0.E07_09 = "-5";
                    }
                    else {
                        E07_03_0.E07_09 = pObj["ePayment.17"].vSet[0];
                    }
                };

                E07_03_0.E07_10 = "";
                if (typeof pObj["ePayment.14"] != 'undefined') {
                    if (pObj["ePayment.14"].IsNull == true) {
                        E07_03_0.E07_10 = "-5";
                    }
                    else {
                        E07_03_0.E07_10 = pObj["ePayment.18"].vSet[0];
                    }
                };

                E07_03_0.E07_11 = "";
                if (typeof pObj["ePayment.19"] != 'undefined') {
                    if (pObj["ePayment.19"].IsNull == true) {
                        E07_03_0.E07_11 = "-5";
                    }
                    else {
                        E07_03_0.E07_11 = pObj["ePayment.19"].vSet[0];
                    }
                };

                E07_03_0.E07_12 = "";
                if (typeof pObj["ePayment.20"] != 'undefined') {
                    if (pObj["ePayment.20"].IsNull == true) {
                        E07_03_0.E07_12 = "-5";
                    }
                    else {
                        E07_03_0.E07_12 = pObj["ePayment.20"].vSet[0];
                    }
                };

                E07_03_0.E07_13 = "";
                if (typeof pObj["ePayment.21"] != 'undefined') {
                    if (pObj["ePayment.21"].IsNull == true) {
                        E07_03_0.E07_13 = "-5";
                    }
                    else {
                        E07_03_0.E07_13 = pObj["ePayment.21"].vSet[0];
                    }
                };

                E07_03_0.E07_14 = "";
                if (typeof pObj["ePayment.22"] != 'undefined') {
                    if (pObj["ePayment.22"].IsNull == true) {
                        E07_03_0.E07_14 = "-5";
                    }
                    else {
                        E07_03_0.E07_14 = setV2("ePayment.22", pObj["ePayment.22"].vSet[0]);
                    }
                };
                E07_03_0Array.push(E07_03_0)
            }//for
        };
        /*
        E07.E07_15 = "";
        if (typeof TC.eSituation["eSituation.14"] != 'undefined') {
            if (sV.indexOf(TC.eSituation["eSituation.14"][0]) != -1) {
                E07.E07_15 = sM[TC.eSituation["eSituation.14"].vSet[0]];
            }
            else {
                E07.E07_15 = TC.eSituation["eSituation.14"].vSet[0];
            }
        };
        E07.E07_16 = "";
        if (typeof TC.eSituation["eSituation.15"] != 'undefined') {
            if (TC.eSituation["eSituation.15"].IsNull == true) {
                E07.E07_16 = "-5";
            }
            else {
                E07.E07_16 = setV2(TC.eSituation["eSituation.15"].vSet[0]);
            }
        };

        E07.E07_17 = "";
        if (typeof TC.eSituation["eSituation.16"] != 'undefined') {
            if (TC.eSituation["eSituation.16"].IsNull == true) {
                E07.E07_17 = "-5";
            }
            else {
                E07.E07_17 = setV2(TC.eSituation["eSituation.16"].vSet[0]);
            }
        };
        */
        //closest relative
        //closest relative Name
        
        if (typeof TC.ePayment["ePayment.23"] != 'undefined') {
            if (TC.ePayment["ePayment.23"].IsNull == true) {
                E07.E07_18 = "-5";
            }
            else {
                E07.E07_18 = TC.ePayment["ePayment.23"].vSet[0];
            }
        };

        E07.E07_19 = "";
        if (typeof TC.ePayment["ePayment.24"] != 'undefined') {
            if (TC.ePayment["ePayment.24"].IsNull == true) {
                E07.E07_19 = "-5";
            }
            else {
                E07.E07_19 = TC.ePayment["ePayment.24"].vSet[0];
            }
        };

        E07.E07_20 = "";
        if (typeof TC.ePayment["ePayment.25"] != 'undefined') {
            if (TC.ePayment["ePayment.25"].IsNull == true) {
                E07.E07_20 = "-5";
            }
            else {
                E07.E07_20 = TC.ePayment["ePayment.25"].vSet[0];
            }
        };


        //closest relative Address
        E07.E07_21 = "";
        if (typeof TC.ePayment["ePayment.26"] != 'undefined') {
            if (TC.ePayment["ePayment.26"].IsNull == true) {
                E07.E07_21 = "-5";
            }
            else {
                E07.E07_21 = TC.ePayment["ePayment.26"].vSet[0];
            }
        };

        E07.E07_22 = "";
        if (typeof TC.ePayment["ePayment.27"] != 'undefined') {
            if (TC.ePayment["ePayment.26"].IsNull == true) {
                E07.E07_22 = "-5";
            }
            else {
                E07.E07_22 = TC.ePayment["ePayment.27"].vSet[0];
            }
        };

        E07.E07_23 = "";
        if (typeof TC.ePayment["ePayment.28"] != 'undefined') {
            if (TC.ePayment["ePayment.28"].IsNull == true) {
                E07.E07_23 = "-5";
            }
            else {
                E07.E07_23 = TC.ePayment["ePayment.28"].vSet[0];
            }
        };


        E07.E07_24 = "";
        if (typeof TC.ePayment["ePayment.29"] != 'undefined') {
            if (TC.ePayment["ePayment.29"].IsNull == true) {
                E07.E07_24 = "-5";
            }
            else {
                E07.E07_24 = TC.ePayment["ePayment.29"].vSet[0];
            }
        };

        E07.E07_25 = "";
        if (typeof TC.ePayment["ePayment.30"] != 'undefined') {
            if (TC.ePayment["ePayment.30"].IsNull == true) {
                E07.E07_25 = "-5";
            }
            else {
                E07.E07_25 = TC.ePayment["ePayment.30"].vSet[0];
            }
        };

        E07.E07_26 = "";
        if (typeof TC.ePayment["ePayment.31"] != 'undefined') {
            if (TC.ePayment["ePayment.31"].IsNull == true) {
                E07.E07_26 = "-5";
            }
            else {
                E07.E07_26 = setV2(TC.ePayment["ePayment.31"].vSet[0]);
            }
        };

        //Employer
        E07.E07_27 = "";
        if (typeof TC.ePayment["ePayment.33"] != 'undefined') {
            if (TC.ePayment["ePayment.33"].IsNull == true) {
                E07.E07_27 = "-5";
            }
            else {
                E07.E07_27 = setV2(TC.ePayment["ePayment.33"].vSet[0]);
            }
        };

        //Employer Address
        E07.E07_28 = "";
        if (typeof TC.ePayment["ePayment.34"] != 'undefined') {
            if (TC.ePayment["ePayment.34"].IsNull == true) {
                E07.E07_28 = "-5";
            }
            else {
                E07.E07_28 = setV2(TC.ePayment["ePayment.34"].vSet[0]);
            }
        };

        E07.E07_29 = "";
        if (typeof TC.ePayment["ePayment.35"] != 'undefined') {
            if (TC.ePayment["ePayment.35"].IsNull == true) {
                E07.E07_29 = "-5";
            }
            else {
                E07.E07_29 = setV2(TC.ePayment["ePayment.35"].vSet[0]);
            }
        };

        E07.E07_30 = "";
        if (typeof TC.ePayment["ePayment.36"] != 'undefined') {
            if (TC.ePayment["ePayment.36"].IsNull == true) {
                E07.E07_30 = "-5";
            }
            else {
                E07.E07_30 = setV2(TC.ePayment["ePayment.36"].vSet[0]);
            }
        };

        E07.E07_31 = "";
        if (typeof TC.ePayment["ePayment.37"] != 'undefined') {
            if (TC.ePayment["ePayment.37"].IsNull == true) {
                E07.E07_31 = "-5";
            }
            else {
                E07.E07_31 = setV2(TC.ePayment["ePayment.37"].vSet[0]);
            }
        };

        E07.E07_32 = "";
        if (typeof TC.ePayment["ePayment.39"] != 'undefined') {
            if (TC.ePayment["ePayment.39"].IsNull == true) {
                E07.E07_32 = "-5";
            }
            else {
                E07.E07_32 = TC.ePayment["ePayment.39"].vSet[0];
            }
        };

        E07.E07_33 = "";
        if (typeof TC.ePayment["ePayment.40"] != 'undefined') {
            if (TC.ePayment["ePayment.40"].IsNull == true) {
                E07.E07_33 = "-5";
            }
            else {
                E07.E07_33 = setV2(TC.ePayment["ePayment.40"].vSet[0]);
            }
        };

        E07.E07_34 = "";
        if (typeof TC.ePayment["ePayment.50"] != 'undefined') {
            if (TC.ePayment["ePayment.50"].IsNull == true) {
                E07.E07_34 = "-5";
            }
            else {
                E07.E07_34 = setV2(TC.ePayment["ePayment.50"].vSet[0]);
            }
        };

        var E07_35 = [];


        if (typeof TC.ePayment["ePayment.51"] != 'undefined') {
            if (TC.ePayment["ePayment.51"].IsNull == true) {
                E07_35.push("-5");
            }
            else {
                for (var aa = 0; aa < TC.ePayment["ePayment.51"].length; aa++) {
                    E07_35.push(setV2(TC.ePayment["ePayment.51"][aa].vSet[aa]));
                }
            }
        };
        E07.E07_35 = E07_35;

        E07.E07_35 = "-5";

        E07.E07_37 = [];
        if (typeof TC.ePayment["ePayment.52"] != 'undefined') {
            if (TC.ePayment["ePayment.51"].IsNull == true) {
                E07_37.push("-5");
            }
            else {
                for (var aa = 0; aa < TC.ePayment["ePayment.51"].length; aa++) {
                    E07_37.push(setV2(TC.ePayment["ePayment.51"][aa].vSet[aa]));
                }
            };
            E07.E07_37 = E07_37;
        };
        EMSDataSet.E07 = E07;
    };
    if (typeof TC.eScene != 'undefined') {
        var E08 = {};
        var E08_01 = [];
        var E08_02 = [];
        for (var xx = 0; xx < TC.eScene.ResponderGroup.length; xx++) {
            if (typeof TC.eScene.ResponderGroup[xx]["eScene.02"] != 'undefined') {
                if (TC.eScene.ResponderGroup[xx]["eScene.02"].IsNull == true) {
                    if (sV.indexOf(TC.eScene.ResponderGroup[xx]["eScene.02"][xx].vSet[0]) != -1) {
                        E08_01.push(sM[TC.eScene.ResponderGroup[xx]["eScene.02"].vSet[0]]);
                    }
                }
                else {
                    E08_01.push(TC.eScene.ResponderGroup[xx]["eScene.02"].vSet[0]);
                }
            };

            //RESPONDER GROUP

            if (typeof TC.eScene.ResponderGroup[xx]["eScene.04"] != 'undefined') {
                if (TC.eScene.ResponderGroup[xx]["eScene.04"].IsNull == true) {
                    if (sV.indexOf(TC.eScene.ResponderGroup[xx]["eScene.04"].vSet[0]) != -1) {
                        E08_02.push(sM[TC.eScene.ResponderGroup[xx]["eScene.04"].vSet[0]]);
                    }
                }
                else {
                    E08_02.push(setV2("eScene.04", TC.eScene.ResponderGroup[xx]["eScene.04"].vSet[0]));
                }
            }
        };
        E08.E08_01 = E08_01;
        E08.E08_02 = E08_02;
        //The date/time differential between the initial responder and the EMS unit arriving on the scene, if applicable.
        E08.E08_03 = "-10";

        E08.E08_04 = "";
        if (typeof TC.eScene["eScene.05"] != 'undefined') {
            if (TC.eScene["eScene.05"].IsNull == true) {
                E08.E08_04 = "";
            }
            else {
                E08.E08_04 = setV2("eScene.05", TC.eScene["eScene.05"].vSet[0]);
            }
        };

        E08.E08_05 = "";
        if (typeof TC.eScene["eScene.06"] != 'undefined') {
            if (TC.eScene["eScene.06"].IsNull == true) {
                if (sV.indexOf(TC.eScene["eScene.06"].vSet[0]) != -1) {
                    E08.E08_05 = sM[TC.eScene["eScene.06"].vSet[0]];
                }
            }
            else {
                E08.E08_05 = setV2("eScene.06", TC.eScene["eScene.06"].vSet[0]);
            }
        };

        E08.E08_06 = "";
        if (typeof TC.eScene["eScene.07"] != 'undefined') {
            if (TC.eScene["eScene.07"].IsNull == true) {
                if (sV.indexOf(TC.eScene["eScene.07"].vSet[0]) != -1) {
                    E08.E08_06 = sM[TC.eScene["eScene.07"].vSet[0]];
                }
            }
            else {
                E08.E08_06 = setV2("eScene.07", TC.eScene["eScene.07"].vSet[0]);
            }
        };

        E08.E08_07 = "";
        if (typeof TC.eScene["eScene.09"] != 'undefined') {
            if (TC.eScene["eScene.09"].IsNull == true) {
                if (sV.indexOf(TC.eScene["eScene.09"].vSet[0]) != -1) {
                    E08.E08_07 = sM[TC.eScene["eScene.09"].vSet[0]];
                }
            }
            else {
                E08.E08_07 = setV2("eScene.09", TC.eScene["eScene.09"].vSet[0]);
            }
        };

        E08.E08_08 = "";
        if (typeof TC.eScene["eScene.10"] != 'undefined') {
            if (TC.eScene["eScene.10"].IsNull == true) {
                if (sV.indexOf(TC.eScene["eScene.10"].vSet[0]) != -1) {
                    E08.E08_08 = sM[TC.eScene["eScene.10"].vSet[0]];
                }
            }
            else {
                E08.E08_08 = TC.eScene["eScene.10"].vSet[0];
            }
        };
        E08.E08_09 = "-5";

        E08.E08_10 = "";
        if (typeof TC.eScene["eScene.07"] != 'undefined') {
            if (TC.eScene["eScene.07"].IsNull == true) {
                if (sV.indexOf(TC.eScene["eScene.07"].vSet[0]) != -1) {
                    E08.E08_10 = sM[TC.eScene["eScene.07"].vSet[0]];
                }
            }
            else {
                E08.E08_10 = setV2("eScene.07", TC.eScene["eScene.07"].vSet[0]);
            }
        };


        E08.E08_11 = "";
        if (typeof TC.eScene["eScene.15"] != 'undefined') {
            if (TC.eScene["eScene.15"].IsNull == true) {
                if (sV.indexOf(TC.eScene["eScene.15"].vSet[0]) != -1) {
                    E08.E08_11 = sM[TC.eScene["eScene.15"].vSet[0]];
                }
            }
            else {
                E08.E08_11 = TC.eScene["eScene.15"].vSet[0];
            }
        };

        E08.E08_12 = "";
        if (typeof TC.eScene["eScene.17"] != 'undefined') {
            if (TC.eScene["eScene.17"].IsNull == true) {
                if (sV.indexOf(TC.eScene["eScene.17"].vSet[0]) != -1) {
                    E08.E08_12 = sM[TC.eScene["eScene.17"].vSet[0]];
                }
            }
            else {
                E08.E08_12 = TC.eScene["eScene.17"].vSet[0];
            }
        };

        E08.E08_13 = "";
        if (typeof TC.eScene["eScene.21"] != 'undefined') {
            if (TC.eScene["eScene.21"].IsNull == true) {
                if (sV.indexOf(TC.eScene["eScene.21"].vSet[0]) != -1) {
                    E08.E08_13 = sM[TC.eScene["eScene.21"].vSet[0]];
                }
            }
            else {
                E08.E08_13 = TC.eScene["eScene.21"].vSet[0];
            }
        };

        E08.E08_14 = "";
        if (typeof TC.eScene["eScene.18"] != 'undefined') {
            if (TC.eScene["eScene.18"].IsNull == true) {
                if (sV.indexOf(TC.eScene["eScene.18"].vSet[0]) != -1) {
                    E08.E08_14 = sM[TC.eScene["eScene.18"].vSet[0]];
                }
            }
            else {
                E08.E08_14 = TC.eScene["eScene.18"].vSet[0];
            }
        };

        E08.E08_15 = "";
        if (typeof TC.eScene["eScene.19"] != 'undefined') {
            if (TC.eScene["eScene.19"].IsNull == true) {
                if (sV.indexOf(TC.eScene["eScene.19"].vSet[0]) != -1) {
                    E08.E08_15 = sM[TC.eScene["eScene.19"].vSet[0]];
                }
            }
            else {
                E08.E08_15 = TC.eScene["eScene.19"].vSet[0];
            }
        };
        EMSDataSet.E08 = E08;
    };
    if (typeof TC.eSituation != 'undefined') {
        var E09 = {};
        E09.E09_01 = "-10";
        E09.E09_02 = "-10";
        E09.E09_03 = "-10";
        E09.E09_04 = "";
        if (typeof TC.eSituation != 'undefined') {
            if (TC.eSituation["eSituation.02"].IsNull == true) {
                if (sV.indexOf(TC.eSituation["eSituation.02"].vSet[0]) != -1) {
                    E09.E09_04 = sM[TC.eSituation["eSituation.02"].vSet[0]];
                }
            }
            else {
                E09.E09_04 = setV2("eSituation.02", TC.eSituation["eSituation.02"].vSet[0]);
            }
        }

        else {
            E09.E09_04 = "-5";
        };

        E09.E09_05 = "";
        if (typeof TC.eSituation.PatientComplaintGroup != 'undefined') {
            var PGArray = [];
            for (var aa = 0; aa < TC.eSituation.PatientComplaintGroup.length; aa++) {
                if (typeof TC.eSituation.PatientComplaintGroup[aa] != 'undefined') {
                    if (typeof TC.eSituation.PatientComplaintGroup[aa]["eSituation.04"] != 'undefined') {
                        if (TC.eSituation.PatientComplaintGroup[aa]["eSituation.04"].IsNull == true) {
                            if (sV.indexOf(TC.eSituation.PatientComplaintGroup[aa]["eSituation.04"].vSet[0]) != -1) {
                                E09.E09_05 = sM[TC.eSituation.PatientComplaintGroup[aa]["eSituation.04"].vSet[0]];
                            }
                        }
                        else {
                            E09.E09_05 = TC.eSituation.PatientComplaintGroup[aa]["eSituation.04"].vSet[0];
                        };
                        E09.E09_05 = "-5";
                    }

                    var E09_09_06 = {};

                    var E09_09_06 = {};

                    if (typeof TC.eSituation.PatientComplaintGroup[aa]["eSituation.05"] != 'undefined') {
                        if (TC.eSituation.PatientComplaintGroup[aa]["eSituation.05"].IsNull == true) {
                            if (sV.indexOf(TC.eSituation.PatientComplaintGroup[aa]["eSituation.05"].vSet[0]) != -1) {
                                E09.E09_06 = ssM[TC.eSituation.PatientComplaintGroup[aa]["eSituation.05"].vSet[0]];
                            }
                        }
                        else {
                            E09.E09_06 = TC.eSituation.PatientComplaintGroup[aa]["eSituation.05"].vSet[0];
                        }
                    }
                }
                else {
                    E09.E09_06 = "-5";
                };
                E09_09_06 = E09.E09_06

                if (typeof TC.eSituation.PatientComplaintGroup[aa]["eSituation.06"] != 'undefined') {

                    if (TC.eSituation.PatientComplaintGroup[aa]["eSituation.06"].IsNull == true) {
                        if (sV.indexOf(TC.eSituation.PatientComplaintGroup[aa]["eSituation.06"].vSet[0]) != -1) {
                            E09.E09_07 = sM[TC.eSituation.PatientComplaintGroup[aa]["eSituation.06"].vSet[0]];
                        }
                    }
                    else {
                        E09.E09_07 = setV2("eSituation.06", TC.eSituation.PatientComplaintGroup[aa]["eSituation.06"].vSet[0]);
                    }
                }

                else {
                    E09.E09_07 = "-5";
                };
                E09_09_06 = E09.E09_07
                PGArray.push(E09_09_06)
            }


            E09.E09_09_06 = PGArray;

            E09.E09_11 = "";

            if (typeof TC.eSituation["eSituation.07"] != 'undefined') {
                if (TC.eSituation["eSituation.07"].IsNull == true) {
                    if (sV.indexOf(TC.eSituation["eSituation.07"].vSet[0]) != -1) {
                        E09.E09_11 = sM[TC.eSituation["eSituation.07"].vSet[0]];
                    }
                }
                else {
                    E09.E09_11 = TC.eSituation["eSituation.07"].vSet[0];
                }
            }
            else {
                E09.E09_11 = "-5";

            }
        };

        E09.E09_12 = "";
        if (typeof TC.eSituation != 'undefined') {
            if (typeof TC.eSituation["eSituation.08"] != 'undefined') {
                if (TC.eSituation["eSituation.08"].IsNull == true) {
                    if (sV.indexOf(TC.eSituation["eSituation.08"].vSet[0]) != -1) {
                        E09.E09_12 = sM[TC.eSituation["eSituation.08"].vSet[0]];
                    }
                }
                else {
                    E09.E09_12 = TC.eSituation["eSituation.08"].vSet[0];
                }
            }
        }
        else {
            E09.E09_12 = "-5";
        };

        E09.E09_13 = "";
        if (typeof TC.eSituation != 'undefined') {
            if (typeof TC.eSituation["eSituation.09"] != 'undefined') {
                if (TC.eSituation["eSituation.09"].IsNull == true) {
                    if (sV.indexOf(TC.eSituation["eSituation.09"].vSet[0]) != -1) {
                        E09.E09_13 = sM[TC.eSituation["eSituation.09"].vSet[0]];
                    }
                }
                else {
                    E09.E09_13 = TC.eSituation["eSituation.09"].vSet[0];
                }
            }
        }
        else {
            E09.E09_13 = "-5";
        };

        var E09_14 = [];
        if (typeof TC.eSituation != 'undefined') {
            if (typeof TC.eSituation["eSituation.10"] != 'undefined') {
                if (TC.eSituation["eSituation.10"].IsNull == true) {
                    if (sV.indexOf(TC.eSituation["eSituation.10"].vSet[0]) != -1) {
                        E09_14.push(sM[TC.eSituation["eSituation.10"].vSet[0]]);
                    }
                }
                else {
                    for (var i = 0; i < TC.eSituation["eSituation.10"].vSet.length; i++) {
                        E09_14.push(TC.eSituation["eSituation.10"].vSet[i]);
                    }
                };
                E09.E09_14 = E09_14;
            }
        }
        else {
            E09.E09_14 = "-5";
        };

        E09.E09_15 = "";
        if (typeof TC.eSituation != 'undefined') {
            if (typeof TC.eSituation["eSituation.11"] != 'undefined') {
                if (TC.eSituation["eSituation.11"].IsNull == true) {
                    if (sV.indexOf(TC.eSituation["eSituation.11"].vSet[0]) != -1) {
                        E09.E09_15 = sM[TC.eSituation["eSituation.11"].vSet[0]];
                    }
                }
                else {
                    E09.E09_15 = TC.eSituation["eSituation.11"].vSet[0];
                }
            }
        }
        else {
            E09.E09_15 = "-5";
        };

        var E07 = {};
        E07.E07_15 = "";
        if (typeof TC.eSituation != 'undefined') {
            if (typeof TC.eSituation["eSituation.14"] != 'undefined') {
                if (TC.eSituation["eSituation.14"].IsNull == true) {
                    if (sV.indexOf(TC.eSituation["eSituation.14"].vSet[0]) != -1) {
                        E07.E07_15 = sM[TC.eSituation["eSituation.14"].vSet[0]];
                    }
                }
                else {
                    E07.E07_15 = TC.eSituation["eSituation.14"].vSet[0];
                }
            }
        }
        else {
            E07.E07_15 = "-5";
        };

        E07.E07_16 = "";
        if (typeof TC.eSituation != 'undefined') {
            if (typeof TC.eSituation["eSituation.15"] != 'undefined') {
                if (TC.eSituation["eSituation.15"].IsNull == true) {
                    if (sV.indexOf(TC.eSituation["eSituation.15"].vSet[0]) != -1) {
                        E07.E07_16 = sM[TC.eSituation["eSituation.15"].vSet[0]];
                    }
                }
                else {
                    E07.E07_16 = TC.eSituation["eSituation.15"].vSet[0];
                }
            }
        }
        else {
            E07.E07_16 = "-5";
        };

        E09.E09_16 = "";
        if (typeof TC.eSituation != 'undefined') {
            if (typeof TC.eSituation["eSituation.12"] != 'undefined') {
                if (TC.eSituation["eSituation.12"].IsNull == true) {
                    if (sV.indexOf(TC.eSituation["eSituation.12"].vSet[0]) != -1) {
                        E09.E09_16 = sM[TC.eSituation["eSituation.12"].vSet[0]];
                    }
                }
                else {
                    var E09_16 = [];
                    for (var i = 0; i < TC.eSituation["eSituation.12"].vSet.length; i++) {
                        E09_16.push(TC.eSituation["eSituation.12"].vSet[i]);
                    }
                    E09.E09_16 = E09_16;
                }
            }
        }
        else {
        };
        // eSituation 14, 15, 16 are E07 values
        EMSDataSet.E09 = E09;
    };
    if (typeof TC.eInjury != 'undefined') {
        var E10 = {};
        E10.E10_01 = "";
        if (typeof TC.eInjury["eInjury.01"] != 'undefined') {
            if (TC.eInjury["eInjury.01"].IsNull == true) {
                if (sV.indexOf(TC.eInjury["eInjury.01"].vSet[0]) != -1) {
                    E10.E10_01 = sM[TC.eInjury["eInjury.01"].vSet[0]];
                }
            }
            else {
                E10.E10_01 = (setV2(TC.eInjury["eInjury.01"].vSet[0]));
            }
        };

        E10.E10_02 = "-10";

        var E10_03 = [];
        if (typeof TC.eInjury["eInjury.02"] != 'undefined') {
            if (TC.eInjury["eInjury.02"].IsNull == true) {
                if (sV.indexOf(TC.eInjury["eInjury.02"].vSet[0]) != -1) {
                    E10_03.push(sM[TC.eInjury["eInjury.02"].vSet[0]]);
                }
            }
            else {
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
        E10.E10_03 = E10_03;

        var E10_04 = [];
        if (typeof TC.eInjury["eInjury.04"] != 'undefined') {
            if (TC.eInjury["eInjury.04"].IsNull == true) {
                if (sV.indexOf(TC.eInjury["eInjury.04"].vSet[0]) != -1) {
                    E10_04.push(sM[TC.eInjury["eInjury.04"].vSet[0]]);
                }
            }
            else {
                var E10_04 = [];
                for (var i = 0; i < TC.eInjury["eInjury.04"].vSet.length; i++) {
                    E10_04.push(setV2("eInjury.04", TC.eInjury["eInjury.04"].vSet[i]));
                }
            }
        };
        E10.E10_04 = E10_04;

        var E10_05 = [];
        if (typeof TC.eInjury["eInjury.05"] != 'undefined') {
            if (TC.eInjury["eInjury.05"].IsNull == true) {
                if (sV.indexOf(TC.eInjury["eInjury.05"].vSet[0]) != -1) {
                    E10_05.push(sM[TC.eInjury["eInjury.05"].vSet[0]]);
                }
            }
            else {
                for (var i = 0; i < TC.eInjury["eInjury.05"].vSet.length; i++) {
                    E10_05.push(setV2("eInjury.05", TC.eInjury["eInjury.05"].vSet[i]));
                };
            }
        };
        E10.E10_05 = E10_05;
        E10.E10_06 = "";
        E10.E10_07 = "";
        if (typeof TC.eInjury["eInjury.06"] != 'undefined') {
            if (TC.eInjury["eInjury.06"].vSet[0] == "2906001") {
                E10.E10_06 = "1";
                E10.E10_07 = "2150";
            };
            if (TC.eInjury["eInjury.06"].vSet[0] == "2906003") {
                E10.E10_06 = "1";
                E10.E10_07 = "2155";

            };
            if (TC.eInjury["eInjury.06"].vSet[0] == "2906005") {
                E10.E10_06 = "1";
                E10.E10_07 = "2165";
            };
            if (TC.eInjury["eInjury.06"].vSet[0] == "2906007") {

                E10.E10_06 = "50";
                E10.E10_07 = "2160";

            };

            if (TC.eInjury["eInjury.06"].vSet[0] == "2906009") {
                E10.E10_06 = "50";
                E10.E10_07 = "2160";

            };

            if (TC.eInjury["eInjury.06"].vSet[0] == "2906011") {
                E10.E10_06 = "50";
                E10.E10_07 = "2160";
            };
            if (TC.eInjury["eInjury.06"].vSet[0] == "2906013") {
                E10.E10_06 = "2";
                E10.E10_07 = "2155";
            };
            if (TC.eInjury["eInjury.06"].vSet[0] == "2906015") {
                E10.E10_06 = "2";
                E10.E10_07 = "2165";
            };
            if (TC.eInjury["eInjury.06"].vSet[0] == "2906017") {
                E10.E10_06 = "2";
                E10.E10_07 = "2165";
            };
            if (TC.eInjury["eInjury.06"].vSet[0] == "2906019") {
                E10.E10_06 = "2";
                E10.E10_07 = "2160";
            };

            if (TC.eInjury["eInjury.06"].vSet[0] == "2906021") {
                E10.E10_06 = "3";
                E10.E10_07 = "2160";
            };
            if (TC.eInjury["eInjury.06"].vSet[0] == "2906023") {
                E10.E10_06 = "3";
                E10.E10_07 = "2155";
            };
            if (TC.eInjury["eInjury.06"].vSet[0] == "2906025") {
                E10.E10_06 = "3";
                E10.E10_07 = "2165";
            };

            if (TC.eInjury["eInjury.06"].vSet[0] == "2906019") {
                E10.E10_06 = "50";
                E10.E10_07 = "2160";
            };

            if (TC.eInjury["eInjury.06"].vSet[0] == "2906019") {
                E10.E10_06 = "50";
                E10.E10_07 = "2160";
            };


            var E10_08 = [];
            if (typeof TC.eInjury["eInjury.07"] != 'undefined') {
                if (TC.eInjury["eInjury.07"].IsNull == false) {
                    if (sV.indexOf(TC.eInjury["eInjury.07"].vSet[0]) != -1) {
                        E10_08.push(sM[TC.eInjury["eInjury.08"].vSet[0]]);
                    }
                }
                else {
                    var E10_08 = [];
                    for (var i = 0; i < TC.eInjury["eInjury.08"].vSet.length; i++) {
                        E10_08.push(setV2("eInjury.08", TC.eInjury["eInjury.08"].vSet[i]));
                    };
                }
            };

            ER10.E10_08 = E10_08;

            var E10_09 = [];
            if (typeof TC.eInjury["eInjury.08"] != 'undefined') {
                if (TC.eInjury["eInjury.08"].IsNull == false) {
                    if (sV.indexOf(TC.eInjury["eInjury.08"].vSet[0]) != -1) {
                        E10_09.push(sM[TC.eInjury["eInjury.08"].vSet[0]]);
                    }
                }
                else {
                    for (var i = 0; i < TC.eInjury["eInjury.08"].vSet.length; i++) {
                        E10_09.push(setV2("eInjury.08", TC.eInjury["eInjury.08"].vSet[i]));
                    };
                }
            };
            ER10.E10_09 = E10_09

            ER10.E10_10 = "";
            if (typeof TC.eInjury["eInjury.09"] != 'undefined') {
                if (TC.eInjury["eInjury.09"].IsNull == false) {
                    ER10.E10_10 = TC.eInjury["eInjury.09"].vSet[0];
                }
            }
        };
        EMSDataSet.E10 = E10;
    };
    if (typeof TC.eArrest != 'undefined') {
        var E11 = new Object();
        E11.E11_01 = "";
        if (typeof TC.eArrest["eArrest.01"] != 'undefined') {
            if (TC.eArrest["eArrest.01"].IsNull == true) {
                if (sV.indexOf(TC.eArrest["eArrest.01"].vSet[0]) != -1) {
                    E11.E11_01 = sM[TC.eArrest["eArrest.01"].vSet[0]];
                }
            }
            else {
                E11.E11_01 = setV2("eArrest.01", TC.eArrest["eArrest.01"].vSet[0]);
            }
        };
        E11.E11_02 = "";
        if (typeof TC.eArrest["eArrest.02"] != 'undefined') {
            if (TC.eArrest["eArrest.02"].IsNull == true) {
                if (sV.indexOf(TC.eArrest["eArrest.02"].vSet[0]) != -1) {
                    E11.E11_02 = sM[TC.eArrest["eArrest.02"].vSet[0]];
                }
            }
            else {
                E11.E11_02 = setV2("eArrest.02", TC.eArrest["eArrest.02"].vSet[0]);
            }
        };

        var E11_03 = []
        if (typeof TC.eArrest["eArrest.03"] != 'undefined') {
            if (TC.eArrest["eArrest.03"].IsNull == true) {
                if (sV.indexOf(TC.eArrest["eArrest.03"].vSet[0]) != -1) {
                    E11_03.push(sM[TC.eArrest["eArrest.03"].vSet[0]]);
                }
            }
            else {
                var E11_03 = [];
                for (var i = 0; i < TC.eArrest["eArrest.03"].vSet.length; i++) {
                    E11_03.push(setV2("eArrest.03", TC.eArrest["eArrest.03"].vSet[i]));
                }
            };
            E11.E11_03 = E11_03;
        };
        E11.E11_04 = "";
        if (typeof TC.eArrest["eArrest.04"] != 'undefined') {
            if (TC.eArrest["eArrest.04"].IsNull == true) {
                if (sV.indexOf(TC.eArrest["eArrest.04"].vSet[0]) != -1) {
                    E11.E11_04 = sM[TC.eArrest["eArrest.04"].vSet[0]];
                }
            }
            else {

                for (var i = 0; i < TC.eArrest["eArrest.04"].length; i++) {
                    E11.E11_04 = setV2("eArrest.04", TC.eArrest["eArrest.04"].vSet[i]);
                }
            }
        };
        E11.E11_05 = "";
        if (typeof TC.eArrest["eArrest.11"] != 'undefined') {
            if (TC.eArrest["eArrest.11"].IsNull == true) {
                if (sV.indexOf(TC.eArrest["eArrest.11"].vSet[0]) != -1) {
                    E11.E11_05 = sM[TC.eArrest["eArrest.11"].vSet[0]];
                }
            }
            else {
                E11.E11_05 = setV2("eArrest.11", TC.eArrest["eArrest.11"].vSet[0]);
            }
        };

        E11.E11_06 = "";
        if (typeof TC.eArrest["eArrest.12"] != 'undefined') {
            if (TC.eArrest["eArrest.12"].IsNull == true) {
                if (sV.indexOf(TC.eArrest["eArrest.12"].vSet[0]) != -1) {
                    E11.E11_06 = sM[TC.eArrest["eArrest.12"].vSet[0]];
                }
            }
            else {

                for (var i = 0; i < TC.eArrest["eArrest.12"].length; i++) {
                    E11.E11_04 = setV2("eArrest.12", TC.eArrest["eArrest.12"].vSet[i]);
                }
            }
        };

        E11.E11_07 = "";
        if (typeof TC.eArrest["eArrest.13"] != 'undefined') {
            if (TC.eArrest["eArrest.13"].IsNull != true) {
                E11.E11_07 = setV2("eArrest.13", TC.eArrest["eArrest.13"].vSet[0]);
            }
        };

        E11.E11_08 = "";
        if (typeof TC.eArrest["eArrest.14"] != 'undefined') {
            if (TC.eArrest["eArrest.14"].IsNull == true) {
                E11.E11_08 = sM[TC.eArrest["eArrest.14"].vSet[0]];
            }
            else {
                E11.E11_08 = TC.eArrest["eArrest.14"].vSet[0];
            }
        };

        E11.E11_09 = "";
        if (typeof TC.eArrest["eArrest.15"] != 'undefined') {
            if (TC.eArrest["eArrest.15"].IsNull == true) {
                if (sV.indexOf(TC.eArrest["eArrest.15"].vSet[0]) != -1) {
                    E11.E11_09 = sM[TC.eArrest["eArrest.15"].vSet[0]];
                }
            }
            else {
                E11.E11_09 = setV2("eArrest.15", TC.eArrest["eArrest.15"].vSet[0]);
            }
        };

        E11.E11_10 = "";
        if (typeof TC.eArrest["eArrest.16"] != 'undefined') {
            if (TC.eArrest["eArrest.16"].IsNull == true) {
                if (sV.indexOf(TC.eArrest["eArrest.16"].vSet[0]) != -1) {
                    E11.E11_10 = sM[TC.eArrest["eArrest.16"].vSet[0]];
                }
            }
            else {
                E11.E11_10 = setV2("eArrest.16", TC.eArrest["eArrest.16"].vSet[0]);
            }
        };

        var E11_11 = [];
        if (typeof TC.eArrest["eArrest.17"] != 'undefined') {
            if (TC.eArrest["eArrest.17"].IsNull == true) {
                if (sV.indexOf(TC.eArrest["eArrest.17"].vSet[0]) != -1) {
                    E11_11.push(sM[TC.eArrest["eArrest.17"].vSet[0]]);
                }
            }
            else {

                for (var i = 0; i < TC.eArrest["eArrest.17"].length; i++) {
                    E11.E11_11.push(setV2("eArrest.17", TC.eArrest["eArrest.17"].vSet[i]));
                }
            };
            E11.E11_11 = E11_11
        };
        EMSDataSet.E11 = E11;
    };
    if (typeof TC.eHistory != 'undefined') {
        var E12 = {};;
        if (typeof TC.eHistory["eHistory.01"] != 'undefined') {

            var E12_01 = [];
            if (TC.eHistory["eHistory.01"].IsNull == true) {
                if (typeof TC.eHistory["eHistory.01"].NV != 'undefined') {
                    E12_01.push(sM[TC.eHistory["eHistory.01"].vSet[0]]);
                }
            }
            else {

                for (var i = 0; i < TC.eHistory["eHistory.01"].vSet.length; i++) {
                    E12_01.push(setV2("eHistory.01", TC.eHistory["eHistory.01"].vSet[i]));
                };
            };
            E12.E12_01 = E12_01;
        };

        E12.E12_02 = "-10";
        E12.E12_03 = "-10";
        E12.E12_04 = "";
        E12.E12_05 = "";
        E12.E12_06 = "";

        if (typeof TC.eHistory.PractitionerGroup != 'undefined') {
            var PractArray = [];
            if (TC.eHistory.PractitionerGroup.length > 0) {
                for (var i = 0; i < TC.eHistory.PractitionerGroup.length; i++) {
                    var E12_4_0 = {};
                    if (typeof TC.eHistory.PractitionerGroup[i]["eHistory.02"] != 'undefined') {
                        if (TC.eHistory.PractitionerGroup[i]["eHistory.02"].IsNull != true) {

                            E12_4_0.E12.E12_04 = TC.eHistory.PractitionerGroup[i]["eHistory.02"].vSet[0];
                        }
                    };

                    if (typeof TC.eHistory.PractitionerGroup[i]["eHistory.03"] != 'undefined') {
                        if (TC.eHistory.PractitionerGroup[i]["eHistory.03"].IsNull == false) {
                            E12_4_0.E12.E12_05 = TC.eHistory.PractitionerGroup[i]["eHistory.03"].vSet[0];
                        }
                    };

                    if (typeof TC.eHistory.PractitionerGroup[i]["eHistory.04"] != 'undefined') {
                        if (TC.eHistory.PractitionerGroup[i]["eHistory.04"].IsNull == false) {
                            E12_4_0.E12.E12_06 = TC.eHistory.PractitionerGroup[i]["eHistory.04"].vSet[0];
                        }
                    };
                    PractArray.push(E12_4_0)
                }
            }
            E12.E12_4_0 = E12_4_0;
        };

        var E12_07 = [];
        if (typeof TC.eHistory["eHistory.05"] != 'undefined') {
            if (TC.eHistory["eHistory.05"].IsNull == true) {
                if (typeof TC.eHistory["eHistory.05"].NV != 'undefined') {
                    E12_07.push(sM[TC.eHistory["eHistory.05"].vSet[0]]);
                }
            }
            else {
                var E12_07 = [];
                for (var i = 0; i < TC.eHistory["eHistory.05"].vSet.length; i++) {
                    E12_07.push(setV2("eHistory.05", TC.eHistory["eHistory.05"].vSet[i]));
                };
            };
            E12.E12_07 = E12_07;
        };

        var E12_08 = [];
        if (typeof TC.eHistory["eHistory.06"] != 'undefined') {
            if (TC.eHistory["eHistory.06"].IsNull == true) {
                if (typeof TC.eHistory["eHistory.06"].NV != 'undefined') {
                    E12_08.push(sM[TC.eHistory["eHistory.06"].vSet[0]]);
                }
                else if (typeof TC.eHistory["eHistory.06"].PN != 'undefined') {
                    E12_08.push(sM[TC.eHistory["eHistory.06"].vSet[0]]);
                }
            }
            else {
                for (var i = 0; i < TC.eHistory["eHistory.06"].vSet.length; i++) {
                    E12_08.push(TC.eHistory["eHistory.06"].vSet[i]);
                }
            };
            E12.E12_08 = E12_08;
        };

        var E12_09 = [];
        if (typeof TC.eHistory["eHistory.07"] != 'undefined') {
            if (TC.eHistory["eHistory.07"].IsNull == true) {
                if (sV.indexOf(TC.eHistory["eHistory.07"].vSet[0]) != -1) {
                    E12_09.push(sM[TC.eHistory["eHistory.07"].vSet[0]]);
                }
            }
            else {

                for (var i = 0; i < TC.eHistory["eHistory.07"].vSet.length; i++) {
                    E12_09.push(TC.eHistory["eHistory.07"].vSet[i]);
                }
            };
            E12.E12_09 = E12_09;
        };


        var E12_10 = [];
        if (typeof TC.eHistory["eHistory.08"] != 'undefined') {
            if (TC.eHistory["eHistory.08"].IsNull == true) {
                if (sV.indexOf(TC.eHistory["eHistory.08"].vSet[0]) != -1) {
                    E12_10.push(sM[TC.eHistory["eHistory.08"].vSet[0]]);
                }
            }
            else {
                for (var i = 0; i < TC.eHistory["eHistory.08"].vSet.length; i++) {
                    E12_10.push(TC.eHistory["eHistory.08"].vSet[i]);
                }
            };
            E12.E12_10 = E12_10;
        };

        E12.E12_11 = "";
        if (typeof TC.eHistory["eHistory.09"] != 'undefined') {
            if (TC.eHistory["eHistory.09"].IsNull == true) {
                if (sV.indexOf(TC.eHistory["eHistory.09"].vSet[0]) != -1) {
                    E12.E12_11 = sM[TC.eHistory["eHistory.09"].vSet[0]];
                }
            }
            else {
                var E12_11 = [];
                for (var i = 0; i < TC.eHistory["eHistory.09"].vSet.length; i++) {
                    E12.E12_11 = setV2("eHistory.09", TC.eHistory["eHistory.09"].vSet[i]);
                };
            }
        };


        E12.E12_12 = "";
        E12.E12_13 = "";
        var ImmunArray = []
        if (typeof TC.eHistory["ImmunizationsGroup"] != 'undefined') {
            if (TC.eHistory["ImmunizationsGroup"] != -1) {
                for (var i = 0; i < TC.eHistory["ImmunizationsGroup"].length; i++) {
                    var E12_12_0 = {};
                    var E12_12 = [];
                    if (typeof TC.eHistory["ImmunizationsGroup"][i]["eHistory.10"] != 'undefined') {
                        if (TC.eHistory["ImmunizationsGroup"][i]["eHistory.10"].IsNull == true) {
                            if (sV.indexOf(TC.eHistory["ImmunizationsGroup"][i]["eHistory.10"].vSet[0]) != -1) {
                                E12_12.push(sM[TC.eHistory["ImmunizationsGroup"][i]["eHistory.10"].vSet[0]]);
                            }
                        }
                        else {
                            E12_12.push(setV2("eHistory.10", TC.eHistory["ImmunizationsGroup"][i]["eHistory.10"].vSet[0]));
                        }
                    };
                    E12.E12_12 = E12_12;
                    E12_12_0.E12.E12_12 = E12.E12_12
                    if (typeof TC.eHistory["ImmunizationsGroup"][i]["eHistory.11"] != 'undefined') {
                        if (TC.eHistory["ImmunizationsGroup"][i]["eHistory.11"].IsNull != true) {
                            E12.E12_13 = TC.eHistory["ImmunizationsGroup"][i]["eHistory.11"].vSet[0];
                        }
                    };
                    E12_12_0.E12.E12_13 = E12.E12_13
                    ImunArrary.push(E12_12_0)
                }
            };
            E12.E12_12_0 = E12_12_0;
        };
        E12.E12_14 = "";
        E12.E12_15 = "";
        E12.E12_16 = "";
        E12.E12_17 = "";

        var CurrMedsArray = [];
        if (typeof TC.eHistory["CurrentMedsGroup"] != 'undefined') {
            if (TC.eHistory["CurrentMedsGroup"] != -1) {
                for (var i = 0; i < TC.eHistory["CurrentMedsGroup"].length; i++) {
                    var E12_15_0 = {};
                    var E12_14 = [];
                    if (typeof TC.eHistory["CurrentMedsGroup"][i]["eHistory.12"] != 'undefined') {
                        if (TC.eHistory["CurrentMedsGroup"][i]["eHistory.12"].IsNull == true) {
                            if (sV.indexOf(TC.eHistory["CurrentMedsGroup"][i]["eHistory.12"].vSet[0]) != -1) {
                                E12_14.push(sM[TC.eHistory["CurrentMedsGroup"][i]["eHistory.12"].vSet[0]]);
                            }
                        }
                        else {
                            E12_14.push(TC.eHistory["CurrentMedsGroup"][i]["eHistory.12"].vSet[0]);
                        }
                    };

                    E12_15_0.E12.E12_14 = E12_14;

                    E12.E12_15 = "";
                    if (typeof TC.eHistory["CurrentMedsGroup"][i]["eHistory.13"] != 'undefined') {
                        if (TC.eHistory["CurrentMedsGroup"][i]["eHistory.13"].IsNull == false) {
                            E12.E12_15 = TC.eHistory["CurrentMedsGroup"][i]["eHistory.13"].vSet[0];
                        }
                    };
                    E12_15_0.E12.E12_15 = E12_15;

                    E12.E12_16 = "";
                    if (typeof TC.eHistory["CurrentMedsGroup"][i]["eHistory.14"] != 'undefined') {
                        if (TC.eHistory["CurrentMedsGroup"][i]["eHistory.14"].IsNull == false) {
                            E12.E12_16 = setV2("eHistory.14", TC.eHistory["CurrentMedsGroup"][i]["eHistory.14"].vSet[0]);
                        }
                    };
                    E12_15_0.E12.E12_16 = E12_16;

                    E12.E12_17 = "";
                    if (typeof TC.eHistory["CurrentMedsGroup"][i]["eHistory.15"] != 'undefined') {
                        if (TC.eHistory["CurrentMedsGroup"][i]["eHistory.15"].IsNull == true) {
                            if (sV.indexOf(TC.eHistory["CurrentMedsGroup"][i]["eHistory.15"].vSet[0]) != -1) {
                                E12.E12_17 = sM[TC.eHistory["CurrentMedsGroup"][i]["eHistory.15"].vSet[0]];
                            }
                        }
                        else {
                            E12.E12_17 = setV2("eHistory.15", TC.eHistory["CurrentMedsGroup"][i]["eHistory.15"].vSet[0]);
                        }
                    };
                    E12_15_0.E12.E12_17 = E12_17;
                    CurrMedsArray.push(E12_15_0)
                }
            }
            E12.E12_15_0 = E12_15_0;
        };

        E12.E12_18 = "";
        E12.E12_19 = "";
        E12.E12_20 = "";
        if (typeof TC.eHistory["eHistory.16"] != 'undefined') {
            if (TC.eHistory["eHistory.16"].IsNull == false) {
                E12.E12_18 = setV2("eHistory.16", TC.eHistory["eHistory.16"].vSet[0]);
            }
        };

        var E12_19 = [];
        if (typeof TC.eHistory["eHistory.17"] != 'undefined') {
            if (TC.eHistory["eHistory.17"].IsNull == true) {
                if (sV.indexOf(TC.eHistory["eHistory.17"].vSet[0]) != -1) {
                    E12_19.push(sM[TC.eHistory["eHistory.17"].vSet[0]]);
                }
            }
            else {
                for (var i = 0; i < TC.eHistory["eHistory.17"].vSet.length; i++) {
                    E12_19.push(setV2(TC.eHistory["eHistory.17"].vSet[i]));
                };
            };
            E12.E12_19 = E12_19;
        };

        if (typeof TC.eHistory["eHistory.18"] != 'undefined') {
            if (TC.eHistory["eHistory.18"].IsNull == true) {
                if (sV.indexOf(TC.eHistory["eHistory.18"].vSet[0]) != -1) {
                    E12.E12_20 = sM[TC.eHistory["eHistory.18"].vSet[0]];
                }
            }
            else {
                E12.E12_20 = setV2(TC.eHistory["eHistory.18"].vSet[i]);
            }
        };
        EMSDataSet.E12 = E12;
    };
    if (typeof TC.eVitals != 'undefined') {
        var E14Array = [];
        
        for (var xx = 0; xx < TC.eVitals.VitalGroup.length; xx++) {
            var E14 = {};
            E14.E14_01 = "";
            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.01"] != 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.01"].IsNull == true) {
                    if (sV.indexOf(TC.eVitals.VitalGroup[xx]["eVitals.01"].vSet[0]) != -1) {
                        E14.E14_01 = sM[TC.eVitals.VitalGroup[xx]["eVitals.01"].vSet[0]];
                    }
                }
                else {
                    E14.E14_01 = TC.eVitals.VitalGroup[xx]["eVitals.01"].vSet[i];
                }
            };

            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.02"] != 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.02"].IsNull == true) {
                    if (sV.indexOf(TC.eVitals.VitalGroup[xx]["eVitals.02"].vSet[0]) != -1) {

                        E14.E14_02 = sM[TC.eVitals.VitalGroup[xx]["eVitals.02"].vSet[0]];
                    }
                }
                else {
                    E14.E14_02 = setV2("eVitals.02", TC.eVitals.VitalGroup[xx]["eVitals.02"].vSet[0]);
                }
            };

            var E14_03 = [];
            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.03"] != 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.03"].IsNull == true) {
                    if (sV.indexOf(TC.eVitals.VitalGroup[xx]["eVitals.03"].vSet[0]) != -1) {
                        E14_03.push(sM[TC.eVitals.VitalGroup[xx]["eVitals.03"].vSet[0]]);
                    }
                }
                else {

                    for (var i = 0; i < TC.eVitals.VitalGroup[xx]["eVitals.03"].vSet.length; i++) {
                        E14_03.push(setV2("eVitals.03",TC.eVitals.VitalGroup[xx]["eVitals.03"].vSet[i]));
                    }
                };
                E14.E14_03 = E14_03
            };

            E14.E14_04 = "";
            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.06"] != 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.06"].IsNull == true) {
                    if (sV.indexOf(TC.eVitals.VitalGroup[xx]["eVitals.06"].vSet[0]) != -1) {
                        E14.E14_04 = sM[TC.eVitals.VitalGroup[xx]["eVitals.06"].vSet[0]];
                    }
                }
                else {
                    E14.E14_04 = TC.eVitals.VitalGroup[xx]["eVitals.06"].vSet[0];
                }
            };

            E14.E14_05 = "";
            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.07"] != 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.07"].IsNull == true) {
                    if (sV.indexOf(TC.eVitals.VitalGroup[xx]["eVitals.07"].vSet[0]) != -1) {
                        E14.E14_05 = sM[TC.eVitals.VitalGroup[xx]["eVitals.07"].vSet[0]];
                    }
                }
                else {
                    E14.E14_05 = TC.eVitals.VitalGroup[xx]["eVitals.07"].vSet[0];
                }
            };

            E14.E14_06 = "";
            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.08"] != 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.08"].IsNull == true) {
                    if (sV.indexOf(TC.eVitals.VitalGroup[xx]["eVitals.08"].vSet[0]) != -1) {
                        E14.E14_06 = sM[TC.eVitals.VitalGroup[xx]["eVitals.08"].vSet[0]];
                    }
                }
                else {
                    E14.E14_06 = setV2("eVitals.08", TC.eVitals.VitalGroup[xx]["eVitals.08"].vSet[0]);
                }
            };

            E14.E14_07 = "";
            if (typeof TC.eVitals.VitalGroup["eVitals.10"] != 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.10"].IsNull == true) {
                    if (sV.indexOf(TC.eVitals.VitalGroup[xx]["eVitals.10"].vSet[0]) != -1) {
                        E14.E14_07 = sM[TC.eVitals.VitalGroup[xx]["eVitals.10"].vSet[0]];
                    }
                }
                else {
                    E14.E14_07 = TC.eVitals.VitalGroup[xx]["eVitals.10"].vSet[0];
                }
            };

            E14.E14_08 = "";
            E14.E14_09 = "";
            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.12"] != 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.12"].IsNull == true) {
                    if (sV.indexOf(TC.eVitals.VitalGroup[xx]["eVitals.12"].vSet[0]) != -1) {
                        E14.E14_09 = sM[TC.eVitals.VitalGroup[xx]["eVitals.12"].vSet[0]];
                    }
                }
                else {
                    E14.E14_09 = TC.eVitals.VitalGroup[xx]["eVitals.12"].vSet[0];
                }
            };

            E14.E14_10 = "";
            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.13"] != 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.13"].IsNull == true) {
                    if (sV.indexOf(TC.eVitals.VitalGroup[xx]["eVitals.13"].vSet[0]) != -1) {
                        E14.E14_10 = sM[TC.eVitals.VitalGroup[xx]["eVitals.13"].vSet[0]];
                    }
                }
                else {
                    E14.E14_10 = setV2("eVitals.13", TC.eVitals.VitalGroup[xx]["eVitals.13"].vSet[0]);
                }
            };

            E14.E14_11 = "";
            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.14"] != 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.14"].IsNull == true) {
                    if (sV.indexOf(TC.eVitals.VitalGroup[xx]["eVitals.14"].vSet[0]) != -1) {
                        E14.E14_11 = sM[TC.eVitals.VitalGroup[xx]["eVitals.14"].vSet[0]];
                    }
                }
                else {
                    E14.E14_11 = TC.eVitals.VitalGroup[xx]["eVitals.14"].vSet[0];
                }
            };

            E14.E14_12 = "";
            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.15"] != 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.15"].IsNull == true) {
                    if (sV.indexOf(TC.eVitals.VitalGroup[xx]["eVitals.15"].vSet[0]) != -1) {
                        E14.E14_12 = sM[TC.eVitals.VitalGroup[xx]["eVitals.15"].vSet[0]];
                    }
                }
                else {
                    E14.E14_12 = setV2("eVitals.15", TC.eVitals.VitalGroup[xx]["eVitals.15"].vSet[0]);
                }
            };

            E14.E14_13 = "";
            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.16"] != 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.16"].IsNull == true) {
                    if (sV.indexOf(TC.eVitals.VitalGroup[xx]["eVitals.16"].vSet[0]) != -1) {
                        E14.E14_13 = sM[TC.eVitals.VitalGroup[xx]["eVitals.16"][0]];
                    }
                }
                else {
                    E14.E14_13 = TC.eVitals.VitalGroup[xx]["eVitals.16"].vSet[0];
                }
            };

            E14.E14_14 = "";
            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.18"] != 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.18"].IsNull == true) {
                    if (sV.indexOf(TC.eVitals.VitalGroup[xx]["eVitals.18"].vSet[0]) != -1) {
                        E14.E14_14 = sM[TC.eVitals.VitalGroup[xx]["eVitals.18"].vSet[0]];
                    }
                }
                else {
                    E14.E14_14 = TC.eVitals.VitalGroup[xx]["eVitals.18"].vSet[0];
                }
            };

            E14.E14_15 = "";
            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.19"] != 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.19"].IsNull == true) {
                    if (sV.indexOf(TC.eVitals.VitalGroup[xx]["eVitals.19"].vSet[0]) != -1) {
                        E14.E14_15 = sM[TC.eVitals.VitalGroup[xx]["eVitals.19"].vSet[0]];
                    }
                }
                else {
                    E14.E14_15 = TC.eVitals.VitalGroup[xx]["eVitals.19"].vSet[0];
                }
            };

            E14.E14_16 = "";
            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.20"] != 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.20"].IsNull == true) {
                    if (sV.indexOf(TC.eVitals.VitalGroup[xx]["eVitals.20"].vSet[0]) != -1) {
                        E14.E14_16 = sM[TC.eVitals.VitalGroup[xx]["eVitals.20"].vSet[0]];
                    }
                }
                else {
                    E14.E14_16 = TC.eVitals.VitalGroup[xx]["eVitals.20"].vSet[0];
                }
            };

            E14.E14_17 = "";
            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.21"] != 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.21"].IsNull == true) {
                    if (sV.indexOf(TC.eVitals.VitalGroup[xx]["eVitals.21"].vSet[0]) != -1) {
                        E14.E14_17 = sM[TC.eVitals.VitalGroup[xx]["eVitals.21"].vSet[0]];
                    }
                }
                else {
                    E14.E14_17 = TC.eVitals.VitalGroup[xx]["eVitals.21"].vSet[0];
                }
            };

            E14.E14_18 = "";
            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.22"] != 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.22"].IsNull == true) {
                    if (sV.indexOf(TC.eVitals.VitalGroup[xx]["eVitals.22"].vSet[0]) != -1) {
                        E14.E14_18 = sM[TC.eVitals.VitalGroup[xx]["eVitals.22"].vSet[0]];
                    }
                }
                else {
                    E14.E14_18 = setV2("eVitals.22", TC.eVitals.VitalGroup[xx]["eVitals.22"].vSet[0]);
                }
            };
            E14.E14_19 = "";
            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.23"] != 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.23"].IsNull == true) {
                    if (sV.indexOf(TC.eVitals.VitalGroup[xx]["eVitals.23"].vSet[0]) != -1) {
                        E14.E14_19 = sM[TC.eVitals.VitalGroup[xx]["eVitals.23"].vSet[0]];
                    }
                }
                else {
                    E14.E14_19 = TC.eVitals.VitalGroup[xx]["eVitals.23"].vSet[0];
                }
            };


            E14.E14_20 = "";
            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.24"] != 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.24"].IsNull == true) {
                    if (sV.indexOf(TC.eVitals.VitalGroup[xx]["eVitals.24"].vSet[0]) != -1) {
                        E14.E14_20 = sM[TC.eVitals.VitalGroup[xx]["eVitals.24"].vSet[0]];
                    }
                }
                else {
                    E14.E14_20 = TC.eVitals.VitalGroup[xx]["eVitals.24"].vSet[0];
                }
            };

            E14.E14_21 = "";
            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.25"] != 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.25"].IsNull != true) {
                    E14.E14_21 = TC.eVitals.VitalGroup[xx]["eVitals.25"].vSet[0];
                }
            };

            E14.E14_22 = "";
            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.26"] != 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.26"].IsNull == true) {
                    if (sV.indexOf(TC.eVitals.VitalGroup[xx]["eVitals.26"].vSet[0]) != -1) {
                        E14.E14_22 = sM[TC.eVitals.VitalGroup[xx]["eVitals.26"].vSet[0]];
                    }
                }
                else {
                    E14.E14_22 = setV2("eVitals.26", TC.eVitals.VitalGroup[xx]["eVitals.26"].vSet[0]);
                }
            };

            E14.E14_23 = "";
            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.27"] != 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.27"].IsNull == true) {
                    if (sV.indexOf(TC.eVitals.VitalGroup[xx]["eVitals.27"].vSet[0]) != -1) {

                        E14.E14_23 = sM[TC.eVitals.VitalGroup[xx]["eVitals.27"].vSet[0]];
                    }
                }
                else {
                    E14.E14_23 = TC.eVitals.VitalGroup[xx]["eVitals.27"].vSet[0];
                }
            };

            E14.E14_24 = "";
            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.29"] != 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.29"].IsNull == true) {
                    if (sV.indexOf(TC.eVitals.VitalGroup[xx]["eVitals.29"].vSet[0]) != -1) {

                        E14.E14_24 = sM[TC.eVitals.VitalGroup[xx]["eVitals.29"].vSet[0]];
                    }
                }
                else {
                    E14.E14_24 = setV2("eVitals.29", TC.eVitals.VitalGroup[xx]["eVitals.29"].vSet[0]);
                }
            };

            E14.E14_25 = "";
            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.31"] != 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.31"].IsNull == true) {
                    if (sV.indexOf(TC.eVitals.VitalGroup[xx]["eVitals.31"].vSet[0]) != -1) {
                        E14.E14_25 = sM[TC.eVitals.VitalGroup[xx]["eVitals.31"].vSet[0]];
                    }
                }
                else {
                    E14.E14_25 = setV2("eVitals.31", TC.eVitals.VitalGroup[xx]["eVitals.31"].vSet[0]);
                }
            };


            E14.E14_26 = "";
            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.32"] != 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.32"].IsNull != true) {
                    E14.E14_26 = TC.eVitals.VitalGroup[xx]["eVitals.32"].vSet[0];
                }
            };


            E14.E14_27 = "";
            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.33"] != 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.33"].IsNull == true) {
                    E14.E14_27 = sM[TC.eVitals.VitalGroup[xx]["eVitals.33"].vSet[0]];
                }
            };
            E14Array.push(E14)
            delete E14;
        };
        var E14 = {};
        E14 = E14Array;
        EMSDataSet.E14 = E14;
    };//for      
    if (typeof TC.eExam != 'undefined') {
        var E16 = {};
        var E15 = {};
        E16.E16_01 = "";
        if ((typeof TC.eExam["eExam.01"] != 'undefined') && (TC.eExam["eExam.01"].IsNull == true)) {
            if (sV.indexOf(TC.eExam["eExam.01"].vSet[0]) != -1) {
                E16.E16_01 = sM[TC.eExam["eExam.01"].vSet[0]];
            }
        }
        else {
            E16.E16_01 = TC.eExam["eExam.01"].vSet[0];
        };

        E16.E16_02 = "";
        if ((typeof TC.eExam["eExam.02"] != 'undefined') && (TC.eExam["eExam.02"].IsNull == true)) {
            if (sV.indexOf(TC.eExam["eExam.02"].vSet[0]) != -1) {
                E16.E16_02 = sM[TC.eExam["eExam.02"].vSet[0]];
            }
        }
        else {
            E16.E16_02 = setV2("eExam.02", TC.eExam["eExam.02"].vSet[0]);
        };
        if (typeof TC.eExam.AssessmentGroup != 'undefined') {
            var E16_00_0Array = [];
            for (var xx = 0; xx < TC.eExam.AssessmentGroup.length; xx++) {
                var E16_00_0 = {};
                var E16_09Array = [];
                var E16_10Array = [];
                var E16_11Array = [];
                var E16_12Array = [];
                var E16_13Array = [];
                var E16_14Array = [];
                var E16_15Array = [];
                var E16_16Array = [];
                var E16_17Array = [];
                var E16_18Array = [];
                var E16_19Array = [];
                var E16_20Array = [];
                var E16_21Array = [];
                var E16_22Array = [];

                E16_00_0.E16_03 = "";
                if (typeof TC.eExam.AssessmentGroup[xx]["eExam.03"] != 'undefined') {
                    E16_00_0.E16_03 = TC.eExam.AssessmentGroup[xx]["eExam.03"].vSet[0];

                };
                E15.E15_01 = "-10";
               E16_04 = [];
                if (typeof TC.eExam.AssessmentGroup[xx]["eExam.04"] != 'undefined') {
                    if (TC.eExam.AssessmentGroup[xx]["eExam.04"].IsNull == true) {
                        if (sV.indexOf(TC.eExam.AssessmentGroup[xx]["eExam.04"].vSet[0]) != -1) {
                            E16_04.push(sM[TC.eExam.AssessmentGroup[xx]["eExam.04"].vSet[0]]);

                        }
                    }
                    else {
                        var E16_04 = [];
                        for (var i = 0; i < TC.eExam.AssessmentGroup[xx]["eExam.04"].vSet.length; i++) {
                            E16_04.push(setV2("eExam.04", TC.eExam.AssessmentGroup[xx]["eExam.04"].vSet[i]));
                        }
                    };
                    E16_00_0.E16_04 = E16_04;
                };
                
                E15.E15_02 = "-10";
                E16_00_0.E16_05 = [];

                if (typeof TC.eExam.AssessmentGroup[xx]["eExam.05"] != 'undefined') {
                    if (TC.eExam.AssessmentGroup[xx]["eExam.05"].IsNull == true) {
                        if (sV.indexOf(TC.eExam.AssessmentGroup[xx]["eExam.05"].vSet[0]) != -1) {
                            E16_05.push(sM[TC.eExam.AssessmentGroup[xx]["eExam.05"].vSet[0]]);

                        }
                    }
                    else {
                        var E16_05 = [];
                        for (var i = 0; i < TC.eExam.AssessmentGroup[xx]["eExam.05"].vSet.length; i++) {
                            E16_05.push(setV2("eExam.05", TC.eExam.AssessmentGroup[xx]["eExam.05"].vSet[i]));
                        };
                    };
                    E16_00_0.E16_05 = E16_05;
                };
                E15.E15_03 = "-10";
                E15.E15_04 = "-10";
                E16_06 = [];
                if (typeof TC.eExam.AssessmentGroup[xx]["eExam.07"] != 'undefined') {
                    if (TC.eExam.AssessmentGroup[xx]["eExam.07"].IsNull == true) {
                        if (sV.indexOf(TC.eExam.AssessmentGroup[xx]["eExam.07"].vSet[0]) != -1) {
                            E16_06.push(sM[TC.eExam.AssessmentGroup[xx]["eExam.07"].vSet[0]]);
                        }
                    }
                    else {
                        for (var i = 0; i < TC.eExam.AssessmentGroup[xx]["eExam.07"].vSet.length; i++) {
                            E16_06.push(setV2("eExam.07", TC.eExam.AssessmentGroup[xx]["eExam.07"].vSet[i]));
                        }
                    };
                    E16_00_0.E16_06 = E16_06;
                };

                E16_07 = [];
                if (typeof TC.eExam.AssessmentGroup[xx]["eExam.08"] != 'undefined') {
                    if (TC.eExam.AssessmentGroup[xx]["eExam.08"].IsNull == true) {
                        if (sV.indexOf(TC.eExam.AssessmentGroup[xx]["eExam.08"].vSet[0]) != -1) {
                            E16_07.push(sM[TC.eExam.AssessmentGroup[xx]["eExam.08"].vSet[0]]);
                        }
                    }
                    else {
                        for (var i = 0; i < TC.eExam.AssessmentGroup[xx]["eExam.08"].vSet.length; i++) {
                            E16_07.push(setV2("eExam.08", TC.eExam.AssessmentGroup[xx]["eExam.08"].vSet[i]));
                        }
                    };
                    E16_00_0.E16_07 = E16_07;
                };
                
                E16_08 = [];
                if (typeof TC.eExam.AssessmentGroup[xx]["eExam.09"] != 'undefined') {
                    if (TC.eExam.AssessmentGroup[xx]["eExam.09"].IsNull == true) {
                        if (sV.indexOf(TC.eExam.AssessmentGroup[xx]["eExam.09"].vSet[0]) != -1) {
                            E16_08.push(sM[TC.eExam.AssessmentGroup[xx]["eExam.09"].vSet[0]]);
                        }
                    }
                    else {
                        var E16_08 = [];
                        for (var i = 0; i < TC.eExam.AssessmentGroup[xx]["eExam.09"].vSet.length; i++) {
                            E16_08.push(setV2("eExam.09", TC.eExam.AssessmentGroup[xx]["eExam.09"].vSet[i]));
                        }
                    };
                    E16_00_0.E16_08 = E16_08;
                };
                E16_13 = "";
                var AbdominalFindingLocation = "";
                for (var dd = 0; dd < TC.eExam.AssessmentGroup[xx].AbdomenGroup.length; dd++) {

                    if (typeof TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.10"] != 'undefined') {
                        if (TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.10"].IsNull != true) {
                            AbdominalFindingLocation = TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.10"].vSet[0];
                        }
                    };

                    if (typeof TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"] != 'undefined') {
                        if (TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].IsNull == true) {
                            if (sV.indexOf(TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet[0]) != -1) {
                                E16_13.push(sM[TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet[0]]);
                            }
                        }
                        else {
                            var AbdValue = "";
                            if (AbdominalFindingLocation == "3510001") //Generalized
                            {
                                for (var i = 0; i < TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet.length; i++) {
                                    AbdValue = setV2("eExam.11", TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet[i], AbdominalFindingLocation);
                                    E16_09Array.push(AbdValue);
                                }
                            };

                            if (AbdominalFindingLocation == "3510003") //Left Lower Quadrant
                            {
                                for (var i = 0; i < TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet.length; i++) {
                                    AbdValue = setV2("eExam.11", TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet[i], AbdominalFindingLocation);
                                    E16_10Array.push(AbdValue);
                                }
                            };

                            if (AbdominalFindingLocation == "3510005") //Left Upper Quadrant
                            {
                                for (var i = 0; i < TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet.length; i++) {
                                    AbdValue = setV2("eExam.11", TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet[i], AbdominalFindingLocation);
                                    E16_09Array.push(AbdValue);
                                }
                            };

                            if (AbdominalFindingLocation == "3510007") //Periumbilical
                            {
                                for (var i = 0; i < TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet.length; i++) {
                                    AbdValue = setV2("eExam.11", TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet[i], AbdominalFindingLocation);
                                    E16_12Array.push(AbdValue);
                                }
                            };

                            if (AbdominalFindingLocation == "3510009") //Right Lower Quadrant
                            {
                                for (var i = 0; i < TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet.length; i++) {
                                    AbdValue = setV2("eExam.11", TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet[i], AbdominalFindingLocation);
                                    E16_12Array.push(AbdValue);
                                }
                            };

                            if (AbdominalFindingLocation == "3510011") //Right Upper Quadrant
                            {
                                for (var i = 0; i < TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet.length; i++) {
                                    AbdValue = setV2("eExam.11", TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet[i], AbdominalFindingLocation);
                                    E16_11Array.push(AbdValue);
                                }
                            }
                        }
                    }
                };
                ///////////////////////////////////
                var xB09 = new Array();
                var E16_09 = []
                for (var j = 0; j < E16_09Array.length; j++) {
                    if (xB09.indexOf(E16_09Array[j]) == -1) {
                        xB09.push(E16_09Array[j])
                    }
                };

                for (var j = 0; j < xB09.length; j++) {
                    E16_09.push(xB09[j]);
                };
                E16_00_0.E16_09 = E16_09;

                //////////////////////////////////////////
                var xB10 = new Array();
                var E16_10 = []
                for (var j = 0; j < E16_10Array.length; j++) {
                    if (xB10.indexOf(E16_10Array[j]) == -1) {
                        xB10.push(E16_10Array[j])
                    }
                };

                for (var j = 0; j < xB10.length; j++) {
                    E16_10.push(xB10[j]);
                };
                E16_00_0.E16_10 = E16_10;

                /////////////////////////////////////
                var xB11 = new Array();
                var E16_11 = [];
                for (var j = 0; j < E16_11Array.length; j++) {
                    if (xB11.indexOf(E16_11Array[j]) == -1) {
                        xB11.push(E16_11Array[j])
                    }
                };

                for (var j = 0; j < xB11.length; j++) {
                    E16_11.push(xB11[j]);
                };
                E16_00_0.E16_11 = E16_11;
                /////////////////////////////////////
                var xB12 = new Array();
                var E16_12 = [];
                for (var j = 0; j < E16_12Array.length; j++) {
                    if (xB12.indexOf(E16_12Array[j]) == -1) {
                        xB12.push(E16_12Array[j])
                    }
                };

                for (var j = 0; j < xB12.length; j++) {
                    E16_12.push(xB12[j]);
                };
                E16_00_0.E16_12 = E16_12;
                //////////////////////////////////


                if (typeof TC.eExam.AssessmentGroup[xx]["eExam.12"] != 'undefined') {
                    if (TC.eExam.AssessmentGroup[xx]["eExam.12"].IsNull == true) {
                        if (sV.indexOf(TC.eExam.AssessmentGroup[xx]["eExam.12"].vSet[0]) != -1) {
                            E16_13.push(sM[TC.eExam.AssessmentGroup[xx]["eExam.12"].vSet[0]]);
                        }
                    }
                    else {
                        for (var i = 0; i < TC.eExam.AssessmentGroup[xx]["eExam.12"].vSet.length; i++) {
                            E16_13Array.push(setV2("eExam.12", TC.eExam.AssessmentGroup[xx]["eExam.12"].vSet[i]));
                        }
                    }
                };

                var xB13 = new Array();
                var E16_13 = [];
                for (var j = 0; j < E16_13Array.length; j++) {
                    if (xB13.indexOf(E16_13Array[j]) == -1) {
                        xB13.push(E16_13Array[j])
                    }

                };
                for (var j = 0; j < xB13.length; j++) {
                    E16_13.push(xB13[j]);
                };
                E16_00_0.E16_13 = E16_13;
                //////////////////////////////////////
                //Spine Group
                E16_14 = [];
                E16_15 = [];
                E16_16 = [];
                if (typeof TC.eExam.AssessmentGroup[xx].SpineGroup != 'undefined') {

                    var SpineGroupFindingLocation = "";
                    var BackCervical = ["3513001", "3513003", "3513005", "3513007"];  //eExam13_3513001 
                    var BackThoratic = ["3513009", "3513011", "3513013", "3513021", "3513023", "3513027"];  //eExam13_3513009 
                    var BackLumbar = ["3513007", "3513019", "3513025"];  //eExam13_3513017

                    for (var dd = 0; dd < TC.eExam.AssessmentGroup[xx].SpineGroup.length; dd++) {
                        if (typeof TC.eExam.AssessmentGroup[xx].SpineGroup[dd]["eExam.13"] != 'undefined') {
                            if (TC.eExam.AssessmentGroup[xx].SpineGroup[dd]["eExam.13"].IsNull != true) {
                                SpineGroupFindingLocation = TC.eExam.AssessmentGroup[xx].SpineGroup[dd]["eExam.13"].vSet[0];
                            }
                        };

                        if (typeof TC.eExam.AssessmentGroup[xx].SpineGroup[dd]["eExam.14"] != 'undefined') {
                            if (TC.eExam.AssessmentGroup[xx].SpineGroup[dd]["eExam.14"].IsNull == true) {
                                if (sV.indexOf(TC.eExam.AssessmentGroup[xx].SpineGroup[dd]["eExam.14"].vSet[0]) != -1) {
                                    E16_14.push(sM[TC.eExam.AssessmentGroup[xx].SpineGroup[dd]["eExam.14"].vSet[0]]);
                                }
                            }
                            else {
                                var SpineValue = "";
                                if (BackCervical.indexOf(SpineGroupFindingLocation) != -1) //BackCervical
                                {

                                    for (var i = 0; i < TC.eExam.AssessmentGroup[xx].SpineGroup[dd]["eExam.14"].vSet.length; i++) {
                                        SpineValue = setV2("eExam.14", TC.eExam.AssessmentGroup[xx].SpineGroup[dd]["eExam.14"].vSet[i], SpineGroupFindingLocation);
                                        E16_14Array.push(SpineValue);
                                    }
                                };
                                if (BackThoratic.indexOf(SpineGroupFindingLocation) != -1) //BackThoratic
                                {
                                    for (var i = 0; i < TC.eExam.AssessmentGroup[xx].SpineGroup[dd]["eExam.14"].vSet.length; i++) {
                                        SpineValue = setV2("eExam.14", TC.eExam.AssessmentGroup[xx].SpineGroup[dd]["eExam.14"].vSet[i], SpineGroupFindingLocation);
                                        E16_15Array.push(SpineValue);
                                    }
                                };
                                if (BackLumbar.indexOf(SpineGroupFindingLocation) != -1) //BackLumbar
                                {
                                    for (var i = 0; i < TC.eExam.AssessmentGroup[xx].SpineGroup[dd]["eExam.14"].vSet.length; i++) {
                                        SpineValue = setV2("eExam.14", TC.eExam.AssessmentGroup[xx].SpineGroup[dd]["eExam.14"].vSet[i], SpineGroupFindingLocation);
                                        E16_16Array.push(SpineValue);
                                    }
                                }

                            }
                        }
                    };
                    ///////////////////////////////////
                    var xB14 = new Array();
                    for (var j = 0; j < E16_14Array.length; j++) {
                        if (xB14.indexOf(E16_14Array[j]) == -1) {
                            xB14.push(E16_14Array[j])
                        }
                    };
                    for (var j = 0; j < xB14.length; j++) {
                        E16_14.push(xB14[j]);
                    };
                    E16_00_0.E16_14 = E16_14;

                    var xB15 = new Array();
                    for (var j = 0; j < E16_15Array.length; j++) {
                        if (xB15.indexOf(E16_15Array[j]) == -1) {
                            xB15.push(E16_15Array[j])
                        }
                    };
                    for (var j = 0; j < xB15.length; j++) {
                        E16_15.push(xB15[j]);
                    };
                    E16_00_0.E16_15 = E16_15;

                    var xB16 = new Array();
                    for (var j = 0; j < E16_16Array.length; j++) {
                        if (xB16.indexOf(E16_16Array[j]) == -1) {
                            xB16.push(E16_16Array[j])
                        }
                    };
                    for (var j = 0; j < xB16.length; j++) {
                        E16_16.push(xB16[j]);
                    };
                    E16_00_0.E16_16 = E16_16;
                };

                E16_17 = [];
                E16_18 = [];
                E16_19 = [];
                E16_20 = [];
                //////////////////////////////////////
                //Extremity Group
                if (typeof TC.eExam.AssessmentGroup[xx].ExtremityGroup != 'undefined') {
                    var ExtremityGroupFindingLocation = "";
                    var ExtremitiesRightUpper = ["3515007", "35150011", "3515015", "3515019", "3515023", "3515027", "3515039", "3515043", "3515047", "3515067", "3515071", "3515095"];  //eExam15_ExtremitiesRightUpper 
                    var ExtremitiesLeftUpper = ["3515005", "3515009", "3515013", "3515017", "3515021", "3515025", "3515037", "3515041", "3515045", "3515065", "3515069", "3515093"];  //eExam15_ExtremitiesLeftUpper 

                    var ExtremitiesRightLower = ["3515003", "3515031", "3515035", "3515051", "3515055", "3515059", "3515063", "3515075", "3515077", "3515079", "3515083", "3515087", "3515091"];  //eExam15_RightLower
                    var ExtremitiesLeftLower = ["3515001", "3515029", "3515033", "3515049", "3515053", "3515057", "3515061", "3515073", "3515075", "35150777", "3515081", "3515057", "3515089"];  //eExam15_LeftLower

                    for (var dd = 0; dd < TC.eExam.AssessmentGroup[xx].ExtremityGroup.length; dd++) {
                        if (typeof TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.15"] != 'undefined') {
                            if (TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.15"].IsNull != true) {
                                ExtremityGroupFindingLocation = TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.15"].vSet[0];
                            }
                        };

                        if (typeof TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"] != 'undefined') {
                            if (TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].IsNull != true) {
                                if (sV.indexOf(TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].vSet[0]) != -1) {
                                    E16_00_0.E16_17 = sM[TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].vSet[0]];
                                }
                            }
                            else {
                                var ExtValue = "";
                                if (ExtremitiesRightUpper.indexOf(ExtremityGroupFindingLocation) != -1) //ExtremitiesRightUpper
                                {
                                    for (var i = 0; i < TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].vSet.length; i++) {
                                        ExtValue = setV2("eExam.16", TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].vSet[i], ExtremityGroupFindingLocation);
                                        E16_17Array.push(ExtValue);
                                    }
                                };

                                if (ExtremitiesRightLower.indexOf(ExtremityGroupFindingLocation) != -1) //ExtremitiesRightLower
                                {
                                    for (var i = 0; i < TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].vSet.length; i++) {
                                        ExtValue = setV2("eExam.16", TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].vSet[i], ExtremityGroupFindingLocation);
                                        E16_18Array.push(ExtValue);
                                    }
                                };
                                if (ExtremitiesLeftUpper.indexOf(ExtremityGroupFindingLocation) != -1) //ExtremitiesLeftUpper
                                {
                                    for (var i = 0; i < TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].vSet.length; i++) {
                                        ExtValue = setV2("eExam.16", TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].vSet[i], ExtremityGroupFindingLocation);
                                        E16_19Array.push(ExtValue);
                                    }
                                };
                                if (ExtremitiesLeftLower.indexOf(ExtremityGroupFindingLocation) != -1) //LeftLower
                                {
                                    for (var i = 0; i < TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].vSet.length; i++) {
                                        ExtValue = setV2("eExam.16", TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].vSet[i], ExtremityGroupFindingLocation);
                                        E16_20Array.push(ExtValue);
                                    }
                                }


                            }
                        }
                    };
                    ///////////////////////////////////
                    ///////////////////////////////////
                    var xB17 = new Array();

                    for (var j = 0; j < E16_17Array.length; j++) {
                        if (xB17.indexOf(E16_17Array[j]) == -1) {
                            xB17.push(E16_17Array[j])
                        }
                    };
                    for (var j = 0; j < xB17.length; j++) {
                        E16_17.push(xB17[j]);
                    };
                    E16_00_0.E16_17 = E16_17;

                    var xB18 = new Array();
                    for (var j = 0; j < E16_18Array.length; j++) {
                        if (xB18.indexOf(E16_18Array[j]) == -1) {
                            xB18.push(E16_18Array[j])
                        }
                    };
                    for (var j = 0; j < xB18.length; j++) {
                        E16_18.push(xB18[j]);
                    };
                    E16_00_0.E16_18 = E16_18;

                    var xB19 = new Array();
                    for (var j = 0; j < E16_19Array.length; j++) {
                        if (xB19.indexOf(E16_19Array[j]) == -1) {
                            xB19.push(E16_19Array[j])
                        }
                    };
                    for (var j = 0; j < xB19.length; j++) {
                        E16_19.push(xB19[j]);
                    };
                    E16_00_0.E16_19 = E16_19;

                    var xB20 = new Array();
                    for (var j = 0; j < E16_20Array.length; j++) {
                        if (xB20.indexOf(E16_20Array[j]) == -1) {
                            xB20.push(E16_20Array[j])
                        }
                    };
                    for (var j = 0; j < xB20.length; j++) {
                        E16_20.push(xB20[j]);
                    };
                    E16_00_0.E16_20 = E16_20;
                };
                E16_21 = [];
                E16_22 = [];
                ////////////////////////////////////////////////
                //eyeGroup
                if (typeof TC.eExam.AssessmentGroup[xx].EyeGroup != 'undefined') {
                    var EyeGroupFindingLocation = "";

                    for (var dd = 0; dd < TC.eExam.AssessmentGroup[xx].EyeGroup.length; dd++) {
                        if (typeof TC.eExam.AssessmentGroup[xx].EyeGroup[dd]["eExam.17"] != 'undefined') {
                            if (TC.eExam.AssessmentGroup[xx].EyeGroup[dd]["eExam.17"].IsNull != true) {
                                ExtremityGroupFindingLocation = TC.eExam.AssessmentGroup[xx].EyeGroup[dd]["eExam.17"].vSet[0];
                            }
                        };

                        if (typeof TC.eExam.AssessmentGroup[xx].EyeGroup[dd]["eExam.18"] != 'undefined') {
                            if (TC.eExam.AssessmentGroup[xx].EyeGroup[dd]["eExam.18"].IsNull != true) {
                                if (sV.indexOf(TC.eExam.AssessmentGroup[xx].EyeGroup[dd]["eExam.18"].vSet[0]) != -1) {
                                    E16_00_0.E16_21 = sM[TC.eExam.AssessmentGroup[xx].EyeGroup[dd]["eExam.18"].vSet[0]];
                                }
                            }
                            else {
                                var EyeValue = "";
                                if ((EyeGroupFindingLocation == "3517001") && (EyeGroupFindingLocation == "3517003")) //Bilat and Left
                                {
                                    for (var i = 0; i < TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].vSet.length; i++) {
                                        EyeValue = setV2("eExam.16", TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].vSet[i], ExtremityGroupFindingLocation);
                                        E16_21Array.push(EyeValue);
                                    }
                                };

                                if (EyeGroupFindingLocation == "3517001") //Right
                                {
                                    for (var i = 0; i < TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].vSet.length; i++) {
                                        EyeValue = setV2("eExam.16", TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].vSet[i], ExtremityGroupFindingLocation);
                                        E16_22Array.push(EyeValue);
                                    }
                                };
                            }
                        }
                    };
                    ///////////////////////////////////
                    ///////////////////////////////////
                    var xB21 = new Array();
                    for (var j = 0; j < E16_21Array.length; j++) {
                        if (xB21.indexOf(E16_21Array[j]) == -1) {
                            xB21.push(E16_21Array[j])
                        }
                    };
                    for (var j = 0; j < xB21.length; j++) {
                        E16_21.push(xB21[j]);
                    };
                    E16_00_0.E16_21 = E16_21;

                    var xB22 = new Array();
                    for (var j = 0; j < E16_22Array.length; j++) {
                        if (xB22.indexOf(E16_22Array[j]) == -1) {
                            xB22.push(E16_22Array[j])
                        }
                    };
                    for (var j = 0; j < xB22.length; j++) {
                        E16_22.push(xB22[j]);
                    };
                    E16_00_0.E16_22 = E16_22;
                };

                ////////////////////////////////////////////////

                E16_23 = [];
                E16_24 = [];

                if (typeof TC.eExam.AssessmentGroup[xx]["eExam.19"] != 'undefined') {
                    if (TC.eExam.AssessmentGroup[xx]["eExam.19"].IsNull == true) {
                        if (sV.indexOf(TC.eExam.AssessmentGroup[xx]["eExam.19"].vSet[0]) != -1) {
                            E16_23.push(sM[TC.eExam.AssessmentGroup[xx]["eExam.19"].vSet[0]]);
                        }
                    }
                    else {
                        for (var i = 0; i < TC.eExam.AssessmentGroup[xx]["eExam.19"].vSet.length; i++) {
                            E16_23.push(setV2("eExam.19", TC.eExam.AssessmentGroup[xx]["eExam.19"].vSet[i]));
                        };
                        E16_00_0.E16_23 = E16_23;
                    }
                };

                if (typeof TC.eExam.AssessmentGroup[xx]["eExam.20"] != 'undefined') {
                    if (TC.eExam.AssessmentGroup[xx]["eExam.20"].IsNull == true) {
                        if (sV.indexOf(TC.eExam.AssessmentGroup[xx]["eExam.20"].vSet[0]) != -1) {
                            E16_24.push(sM[TC.eExam.AssessmentGroup[xx]["eExam.20"].vSet[0]]);
                        }
                    }
                    else {
                        var E16_24 = [];
                        for (var i = 0; i < TC.eExam.AssessmentGroup[xx]["eExam.20"].vSet.length; i++) {
                            E16_24.push(setV2("eExam.20", TC.eExam.AssessmentGroup[xx]["eExam.20"].vSet[i]));
                        }
                    }
                };
                E16_00_0.E16_24 = E16_24;
                
                E16_00_0Array.push(E16_00_0)
            }
        };
        E16.E16_00_0 = E16_00_0Array;
        EMSDataSet.E15 = E15;
        EMSDataSet.E16 = E16;
    };
    if (typeof TC.eProtocols != 'undefined') {        
        var E17Array = [];
        for (var xx = 0; xx < TC.eProtocols.ProtocolGroup.length; xx++)
        {
            var E17 = {};
            if (typeof TC.eProtocols.ProtocolGroup[xx]["eProtocols.01"] != 'undefined')
            {
                if (TC.eProtocols.ProtocolGroup[xx]["eProtocols.01"].IsNull != true)
                {
                    if (sV.indexOf(TC.eProtocols.ProtocolGroup[xx]["eProtocols.01"].vSet[0]) != -1) {
                        E17_01 = (sM[TC.eProtocols.ProtocolGroup[xx]["eProtocols.01"].vSet[0]]);
                    }
                    else {
                        E17_01 = setV2("eProtocols.01", TC.eProtocols.ProtocolGroup[xx]["eProtocols.01"].vSet[0]);
                    }
                };
                E17.E17_01 = E17_01;
            };
            E17Array.push(E17);
        };
        EMSDataSet.E17 = E17Array;
    };    
    if (typeof TC.eMedications != 'undefined') {
        
        var E18Array = [];
        if (typeof TC.eMedications.MedicationGroup != 'undefined') {
            for (var xx = 0; xx < TC.eMedications.MedicationGroup.length; xx++) {
                var E18 = {};
                if (typeof TC.eMedications.MedicationGroup[xx] != undefined) {
                    E18.E18_01 = "";
                    if (typeof TC.eMedications.MedicationGroup[xx]["eMedications.01"] != 'undefined') {
                        if (TC.eMedications.MedicationGroup[xx]["eMedications.01"].IsNull == true) {
                            if (sV.indexOf(TC.eMedications.MedicationGroup[xx]["eMedications.01"].vSet[0]) != -1) {
                                E18.E18_01 = sM[TC.eMedications.MedicationGroup[xx]["eMedications.01"].vSet[0]];
                            }
                        }
                        else {
                            E18.E18_01 = TC.eMedications.MedicationGroup[xx]["eMedications.01"].vSet[0];
                        }
                    };

                    E18.E18_02 = "";
                    if (typeof TC.eMedications.MedicationGroup[xx]["eMedications.02"] != 'undefined') {
                        if (TC.eMedications.MedicationGroup[xx]["eMedications.02"].IsNull == true) {
                            if (sV.indexOf(TC.eMedications.MedicationGroup[xx]["eMedications.02"].vSet[0]) != -1) {
                                E18.E18_02 = sM[TC.eMedications.MedicationGroup[xx]["eMedications.02"].vSet[0]];
                            }
                        }
                        else {
                            E18.E18_02 = setV2("eMedications.02", TC.eMedications.MedicationGroup[xx]["eMedications.02"].vSet[0]);
                        }
                    };

                    E18.E18_03 = "";
                    if (typeof TC.eMedications.MedicationGroup[xx]["eMedications.03"] != 'undefined') {
                        if (TC.eMedications.MedicationGroup[xx]["eMedications.03"].IsNull == true) {
                            if (sV.indexOf(TC.eMedications.MedicationGroup[xx]["eMedications.03"].vSet[0]) != -1) {
                                E18.E18_03 = sM[TC.eMedications.MedicationGroup[xx]["eMedications.03"].vSet[0]];
                            }
                        }
                        else {
                            //E18.E18_03 = setV2("eMedications.03", TC.eMedications.MedicationGroup[xx]["eMedications.03"].vSet[0]);
                            E18.E18_03 = TC.eMedications.MedicationGroup[xx]["eMedications.03"].vSet[0];
                        }
                    };


                    E18.E18_04 = "";
                    if (typeof TC.eMedications.MedicationGroup[xx]["eMedications.04"] != 'undefined') {
                        if (TC.eMedications.MedicationGroup[xx]["eMedications.04"].IsNull == true) {
                            E18.E18_04 = "-10";
                        }
                        else {
                            E18.E18_04 = setV2("eMedications.04",TC.eMedications.MedicationGroup[xx]["eMedications.04"].vSet[0]);
                        }
                    };

                    E18.E18_05 = "";
                    if (typeof TC.eMedications.MedicationGroup[xx]["eMedications.05"] != 'undefined') {
                        if (TC.eMedications.MedicationGroup[xx]["eMedications.05"].IsNull == true) {
                            if (sV.indexOf(TC.eMedications.MedicationGroup[xx]["eMedications.05"].vSet[0]) != -1) {
                                E18.E18_05 = sM[TC.eMedications.MedicationGroup[xx]["eMedications.05"].vSet[0]];
                            }
                        }
                        else {
                            E18.E18_05 = setV2("eMedications.05", TC.eMedications.MedicationGroup[xx]["eMedications.05"].vSet[0]);
                        }
                    };

                    E18.E18_06 = "";
                    if (typeof TC.eMedications.MedicationGroup[xx]["eMedications.06"] != 'undefined') {
                        if (TC.eMedications.MedicationGroup[xx]["eMedications.06"].IsNull == true) {
                            if (sV.indexOf(TC.eMedications.MedicationGroup[xx]["eMedications.06"].vSet[0]) != -1) {
                                E18.E18_06 = sM[TC.eMedications.MedicationGroup[xx]["eMedications.06"].vSet[0]];
                            }
                        }
                        else {
                            E18.E18_06 = setV2("eMedications.06", TC.eMedications.MedicationGroup[xx]["eMedications.06"].vSet[0]);
                        }
                    };

                    E18.E18_07 = "";
                    if ((typeof TC.eMedications.MedicationGroup[xx]["eMedications.07"] != 'undefined') && (TC.eMedications.MedicationGroup[xx]["eMedications.07"].IsNull == true)) {
                        if (sV.indexOf(TC.eMedications.MedicationGroup[xx]["eMedications.07"].vSet[0]) != -1) {
                            E18.E18_07 = sM[TC.eMedications.MedicationGroup[xx]["eMedications.07"].vSet[0]];8

                        }
                        else {
                            E18.E18_07 = setV2("eMedications.07", C.eMedications.MedicationGroup[xx]["eMedications.07"].vSet[0]);
                        }
                    };
                    E18_08 = [];
                    if ((typeof TC.eMedications.MedicationGroup[xx] != 'undefined') && (TC.eMedications.MedicationGroup[xx]["eMedications.08"] !== null)) {
                        if (TC.eMedications.MedicationGroup[xx]["eMedications.08"].IsNull == true) {
                            if (sV.indexOf(TC.eMedications.MedicationGroup[xx]["eMedications.08"].vSet[0]) != -1) {
                                E18_08.push(sM[TC.eMedications.MedicationGroup[xx]["eMedications.08"].vSet[0]]);
                            }
                        }
                        else {
                            for (var i = 0; i < TC.eMedications.MedicationGroup[xx]["eMedications.08"].length; i++) {
                                E18_08.push(setV2("eMedications.0", TC.eMedications.MedicationGroup[xx]["eMedications.08"].vSet[i]));
                            }
                        };
                        E18.E18_08 = E18_08;
                    };

                    var E18_09 = "";
                    if ((typeof TC.eMedications.MedicationGroup[xx] != 'undefined') && (TC.eMedications.MedicationGroup[xx]["eMedications.09"] != null)) {
                        if (TC.eMedications.MedicationGroup[xx]["eMedications.09"].IsNull == true) {
                            if (sV.indexOf(TC.eMedications.MedicationGroup[xx]["eMedications.09"].vSet[0]) != -1) {
                                E18.E18_09 = sM[TC.eMedications.MedicationGroup[xx]["eMedications.09"].vSet[0]];
                            }
                        }
                        else {
                            E18.E18_09 = setV2("eMedications.0", TC.eMedications.MedicationGroup[xx]["eMedications.09"].vSet[0]);
                        }
                    };

                    E18.E18_10 = "";
                    if ((typeof TC.eMedications.MedicationGroup[xx] != 'undefined') && (TC.eMedications.MedicationGroup[xx]["eMedications.07"] != null)) {
                        if (TC.eMedications.MedicationGroup[xx]["eMedications.07"].IsNull == true) {
                            E18.E18_10 = sM[TC.eMedications.MedicationGroup[xx]["eMedications.07"].vSet[0]];
                        }
                    };
                    E18.E18_11 = "";
                    if ((typeof TC.eMedications.MedicationGroup[xx] != 'undefined') && (TC.eMedications.MedicationGroup[xx]["eMedications.12"] != null)) {
                        if (TC.eMedications.MedicationGroup[xx]["eMedications.12"].IsNull == true) {
                            E18.E18_11 = sM[TC.eMedications.MedicationGroup[xx]["eMedications.12"].vSet[0]];
                        }
                    };
                    E18Array.push(E18);
                }
            }
        };
        EMSDataSet.E18 = E18Array;
    };
    if (typeof TC.eProcedures != 'undefined') {
        var E19Array = [];
        for (var xx = 0; xx < TC.eProcedures.ProcedureGroup.length; xx++) {
            var E19 = {};
            E19.E19_01 = "";

            
            if (typeof TC.eProcedures.ProcedureGroup[xx]["eProcedures.01"] != 'undefined') {
                if (TC.eProcedures.ProcedureGroup[xx]["eProcedures.01"].IsNull == true) {
                    if (sV.indexOf(TC.eProcedures.ProcedureGroup[xx]["eProcedures.01"].vSet[0]) != -1) {
                        E19.E19_01 = sM[TC.eProcedures.ProcedureGroup[xx]["eProcedures.01"].vSet[0]];
                    }
                }
                else {
                    E19.E19_01 = TC.eProcedures.ProcedureGroup[xx]["eProcedures.01"].vSet[0];
                }
            };

            console.log(TC.eProcedures.ProcedureGroup[xx])
            console.log(TC.eProcedures.ProcedureGroup[xx]["eProcedures.02"])
            E19.E19_02 = "";
            if (typeof TC.eProcedures.ProcedureGroup[xx]["eProcedures.02"] != 'undefined') {
                if (TC.eProcedures.ProcedureGroup[xx]["eProcedures.02"].IsNull == true) {
                    if (sV.indexOf(TC.eProcedures.ProcedureGroup[xx]["eProcedures.02"].vSet[0]) != -1) {
                        E19.E19_02 = sM[TC.eProcedures.ProcedureGroup[xx]["eProcedures.02"].vSet[0]];
                    }
                }
                else {
                    E19.E19_02 = setV2("eProcedures.02",TC.eProcedures.ProcedureGroup[xx]["eProcedures.02"].vSet[0]);
                }
            };


            E19.E19_03 = "";
            if (typeof TC.eProcedures.ProcedureGroup[xx]["eProcedures.03"] != 'undefined') {
                if (TC.eProcedures.ProcedureGroup[xx]["eProcedures.03"].IsNull == true) {
                    if (sV.indexOf(TC.eProcedures.ProcedureGroup[xx]["eProcedures.03"].vSet[0]) != -1) {
                        E19.E19_03 = sM[TC.eProcedures.ProcedureGroup[xx]["eProcedures.03"].vSet[0]];
                    }
                }
                else {
                    E19.E19_03 = setV2(TC.eProcedures.ProcedureGroup[xx]["eProcedures.03"].vSet[0]);
                }
            };

            E19.E19_04 = "";
            if (typeof TC.eProcedures.ProcedureGroup[xx]["eProcedures.04"] != 'undefined') {
                if (TC.eProcedures.ProcedureGroup[xx]["eProcedures.04"].IsNull == true) {
                    E19.E19_04 = "-5";
                }
                else {
                    E19.E19_04 = TC.eProcedures.ProcedureGroup[xx]["eProcedures.04"].vSet[0];
                }
            };

            E19.E19_05 = "";
            if (typeof TC.eProcedures.ProcedureGroup[xx]["eProcedures.05"] != 'undefined') {
                if (TC.eProcedures.ProcedureGroup[xx]["eProcedures.05"].IsNull == true) {
                    if (sV.indexOf(TC.eProcedures.ProcedureGroup[xx]["eProcedures.05"][0]) != -1) {
                        E19.E19_05 = sM[TC.eProcedures.ProcedureGroup[xx]["eProcedures.05"].vSet[0]];
                    }
                }
                else {
                    E19.E19_05 = TC.eProcedures.ProcedureGroup[xx]["eProcedures.05"].vSet[0];
                }
            };

            E19.E19_06 = "";
            if (typeof TC.eProcedures.ProcedureGroup[xx]["eProcedures.06"] != 'undefined') {
                if (TC.eProcedures.ProcedureGroup[xx]["eProcedures.06"].IsNull == true) {
                    if (sV.indexOf(TC.eProcedures.ProcedureGroup[xx]["eProcedures.06"][0]) != -1) {
                        E19.E19_06 = sM[TC.eProcedures.ProcedureGroup[xx]["eProcedures.06"].vSet[0]];
                    }
                }
                else {
                    E19.E19_06 = setV2("eProcedures.06",TC.eProcedures.ProcedureGroup[xx]["eProcedures.06"].vSet[0]);
                }
            };

            var E19_07 = [];
            if (typeof TC.eProcedures.ProcedureGroup[xx]["eProcedures.07"] != 'undefined') {
                if (TC.eProcedures.ProcedureGroup[xx]["eProcedures.07"].IsNull == true) {
                    if (sV.indexOf(TC.eProcedures.ProcedureGroup[xx]["eProcedures.07"][0]) != -1) {
                        E19_07.push(sM[TC.eProcedures.ProcedureGroup[xx]["eProcedures.07"].vSet[0]]);
                    }
                }
                else {
                    for (var i = 0; i < TC.eProcedures.ProcedureGroup[xx]["eProcedures.07"].vSet.length; i++) {
                        E19_07.push(setV2("eProcedures.07",TC.eProcedures.ProcedureGroup[xx]["eProcedures.07"].vSet[i]));
                    }
                };
                E19.E19_07 = E19_07;
            };

            E19.E19_08 = "";
            if (typeof TC.eProcedures.ProcedureGroup[xx]["eProcedures.08"] != 'undefined') {
                if (TC.eProcedures.ProcedureGroup[xx]["eProcedures.08"].IsNull == true) {
                    if (sV.indexOf(TC.eProcedures.ProcedureGroup[xx]["eProcedures.08"][0]) != -1) {
                        E19.E19_08 = sM[TC.eProcedures.ProcedureGroup[xx]["eProcedures.08"].vSet[0]];
                    }
                }
                else {
                    E19.E19_08 = setV2("eProcedures.08",TC.eProcedures.ProcedureGroup[xx]["eProcedures.08"].vSet[0]);
                }
            };

            E19.E19_09 = "";
            if (typeof TC.eProcedures.ProcedureGroup[xx]["eProcedures.09"] != 'undefined') {
                if (TC.eProcedures.ProcedureGroup[xx]["eProcedures.09"].IsNull == true) {
                    if (sV.indexOf(TC.eProcedures.ProcedureGroup[xx]["eProcedures.09"].vSet[0]) != -1) {
                        E19.E19_09 = sM[TC.eProcedures.ProcedureGroup[xx]["eProcedures.09"].vSet[0]];
                    }
                }
                else {
                    E19.E19_09 = setV2("eProcedures.09",TC.eProcedures.ProcedureGroup[xx]["eProcedures.09"].vSet[0]);
                }
            };

            E19.E19_10 = "";
            if (typeof TC.eProcedures.ProcedureGroup[xx]["eProcedures.11"] != 'undefined') {
                if (TC.eProcedures.ProcedureGroup[xx]["eProcedures.11"].IsNull == true) {
                    E19.E19_10 = "";
                }
            }
            else {
                E19.E19_10 = setV2("eProcedures.11",TC.eProcedures.ProcedureGroup[xx]["eProcedures.11"].vSet[0]);
            };

            E19.E19_11 = "";
            if (typeof TC.eProcedures.ProcedureGroup[xx]["eProcedures.12"] != 'undefined') {
                if (TC.eProcedures.ProcedureGroup[xx]["eProcedures.12"].IsNull != true) {
                    E19.E19_10 = setV2("eProcedures.12",TC.eProcedures.ProcedureGroup[xx]["eProcedures.12"].vSet[0]);

                }
            };

            E19.E19_12 = "";
            if (typeof TC.eProcedures.ProcedureGroup[xx]["eProcedures.13"] != 'undefined') {
                if (TC.eProcedures.ProcedureGroup[xx]["eProcedures.13"].IsNull == true) {
                    E19.E19_12 = sM[TC.eProcedures.ProcedureGroup[xx]["eProcedures.13"].vSet[0]];
                }
                else {
                    E19.E19_12 = setV2("eProcedures.13", TC.eProcedures.ProcedureGroup[xx]["eProcedures.13"].vSet[0]);
                }
            };

            E19.E19_13 = "";
            if (typeof TC.eAirway != 'undefined') {
                if (typeof TC.eAirway["eAirway.03"] != 'undefined') {
                    if (TC.eAirway["eAirway.03"] == "4003003") {
                        E19.E19_13 = setV2("eProcedures.13",TC.eProcedures.ProcedureGroup[xx]["eProcedures.13"].vSet[0]);
                    }
                    else {
                        E19.E19_13 = "-25";
                    }
                }
            }
            else {
                E19.E19_13 = "-5";
            };

            E19.E19_14 = "-10";
            E19Array.push(E19)
        };
        EMSDataSet.E19 = E19Array.slice(0);
    };
    if (typeof TC.eDisposition != 'undefined') {
        console.log(TC.eDisposition)
        var E20 = {};
        if (TC.eDisposition.DestinationGroup == 1) {
            E20.E20_01 = "";
            if (typeof TC.eDisposition["eDisposition.01"] != 'undefined') {
                if (TC.eDisposition["eDisposition.01"].IsNull == true) {
                    if (sV.indexOf(TC.eDisposition["eDisposition.01"].vSet[0]) != -1) {
                        E20.E20_01 = sM[TC.eDisposition["eDisposition.01"].vSet[0]];
                    }
                }
                else {
                    E20.E20_01 = TC.eDisposition["eDisposition.01"].vSet[0];
                }
            };

            E20.E20_02 = "";
            if (typeof TC.eDisposition["eDisposition.02"] != 'undefined') {
                if (TC.eDisposition["eDisposition.02"].IsNull == true) {
                    if (sV.indexOf(TC.eDisposition["eDisposition.02"].vSet[0]) != -1) {
                        E20.E20_02 = sM[TC.eDisposition["eDisposition.02"].vSet[0]];
                    }
                }
                else {
                    E20.E20_02 = TC.eDisposition["eDisposition.02"].vSet[0];
                }
            };
            E20.E20_03 = "";
            if (typeof TC.eDisposition["eDisposition.03"] != 'undefined') {
                if (TC.eDisposition["eDisposition.03"].IsNull != true) {
                    E20.E20_03 = TC.eDisposition["eDisposition.03"].vSet[0];
                }
            };

            E20.E20_04 = "";
            if (typeof TC.eDisposition["eDisposition.04"] != 'undefined') {
                if (TC.eDisposition["eDisposition.04"].IsNull != true) {
                    E20.E20_04 = TC.eDisposition["eDisposition.04"].vSet[0];
                }
            };

            E20.E20_05 = "";
            if (typeof TC.eDisposition["eDisposition.05"] != 'undefined') {
                if (TC.eDisposition["eDisposition.05"].IsNull == true) {
                    if (sV.indexOf(TC.eDisposition["eDisposition.05"].vSet[0]) != -1) {
                        E20.E20_05 = sM[TC.eDisposition["eDisposition.05"].vSet[0]];
                    }
                }
                else {
                    E20.E20_05 = TC.eDisposition["eDisposition.05"].vSet[0];
                }
            };

            E20.E20_06 = "";
            if (typeof TC.eDisposition["eDisposition.06"] != 'undefined') {
                if (TC.eDisposition["eDisposition.06"].IsNull == true) {
                    if (sV.indexOf(TC.eDisposition["eDisposition.06"].vSet[0]) != -1) {
                        E20.E20_06 = sM[TC.eDisposition["eDisposition.06"].vSet[0]];
                    }
                }
                else {
                    E20.E20_06 = TC.eDisposition["eDisposition.06"].vSet[0];
                }
            };

            E20.E20_07 = "";
            if (typeof TC.eDisposition["eDisposition.07"] != 'undefined') {
                if (TC.eDisposition["eDisposition.07"].IsNull == true) {
                    if (sV.indexOf(TC.eDisposition["eDisposition.07"].vSet[0]) != -1) {
                        E20.E20_07 = sM[TC.eDisposition["eDisposition.07"].vSet[0]];
                    }
                }
                else {
                    E20.E20_07 = TC.eDisposition["eDisposition.07"].vSet[0];
                }
            };

            E20.E20_08 = "";
            if (typeof TC.eDisposition["eDisposition.09"] != 'undefined') {
                if (TC.eDisposition["eDisposition.09"].IsNull != true) {
                    E20.E20_08 = TC.eDisposition["eDisposition.09"].vSet[0];
                }
            };

            E20.E20_09 = "-10";
        };

        E20.E20_10 = "";
        if (typeof TC.eDisposition["eDisposition.12"] != 'undefined') {
            if (TC.eDisposition["eDisposition.12"].vSet.length != 1) {
                if (TC.eDisposition["eDisposition.12"].IsNull == true) {
                    if (sV.indexOf(TC.eDisposition["eDisposition.12"].vSet[0]) != -1) {
                        E20.E20_10 = sM[TC.eDisposition["eDisposition.12"].vSet[0]];
                    }
                }
            }
            else {
                E20.E20_10 = TC.eDisposition["eDisposition.12"].vSet[0];
            }
        };


        E20.E20_11 = "";
        if (typeof TC.eDisposition["eDisposition.13"] != 'undefined') {
            if (TC.eDisposition["eDisposition.13"].IsNull != true) {
                E20.E20_11 = setV2("eDisposition.13", TC.eDisposition["eDisposition.13"].vSet[0]);
            };
        };

        E20.E20_12 = "";
        if (typeof TC.eDisposition["eDisposition.14"] != 'undefined') {
            if (TC.eDisposition["eDisposition.14"].IsNull != true) {
                E20.E20_12 = setV2("eDisposition.14", TC.eDisposition["eDisposition.14"].vSet[0]);
            }
        };

        E20.E20_13 = "";
        if (typeof TC.eDisposition["eDisposition.15"] != 'undefined') {
            if (TC.eDisposition["eDisposition.15"].IsNull != true) {
                E20.E20_13 = setV2("eDisposition.15", TC.eDisposition["eDisposition.15"].vSet[0]);
            }
        };


        E20.E20_14 = "";
        if (typeof TC.eDisposition["eDisposition.17"] != 'undefined') {
            if (TC.eDisposition["eDisposition.17"].IsNull == true) {
                if (sV.indexOf(TC.eDisposition["eDisposition.17"].vSet[0]) != -1) {
                    E20.E20_14 = sM[TC.eDisposition["eDisposition.17"].vSet[0]];
                }
            }
            else {
                E20.E20_14 = setV2("eDisposition.17", TC.eDisposition["eDisposition.17"].vSet[0]);
            }
        };

        E20.E20_15 = "";
        if (typeof TC.eDisposition["eDisposition.19"] != 'undefined') {
            if (TC.eDisposition["eDisposition.17"].IsNull == true) {
                if (sV.indexOf(TC.eDisposition["eDisposition.19"].vSet[0]) != -1) {
                    E20.E20_15 = sM[TC.eDisposition["eDisposition.19"].vSet[0]];
                }
            }
            else {
                E20.E20_15 = setV2("eDisposition.19", TC.eDisposition["eDisposition.19"].vSet[0]);
            }
        };

        E20.E20_16 = "";
        if (typeof TC.eDisposition["eDisposition.20"] != 'undefined') {
            if (TC.eDisposition["eDisposition.20"].IsNull == true) {
                if (sV.indexOf(TC.eDisposition["eDisposition.20"].vSet[0]) != -1) {
                    E20.E20_16 = sM[TC.eDisposition["eDisposition.20"].vSet[0]];
                }
            }

            else {
                E20.E20_16 = setV2("eDisposition.20", TC.eDisposition["eDisposition.20"].vSet[0]);

            }
        };

        E20.E20_17 = "";
        if (typeof TC.eDisposition["eDisposition.21"] != 'undefined') {
            if (TC.eDisposition["eDisposition.21"].IsNull == true) {
                if (sV.indexOf(TC.eDisposition["eDisposition.21"].vSet[0]) != -1) {
                    E20.E20_17 = sM[TC.eDisposition["eDisposition.21"].vSet[0]];
                }
            }
            else {
                E20.E20_17 = setV2("eDisposition.21", TC.eDisposition["eDisposition.21"].vSet[0]);
            }
        };
        EMSDataSet.E20 = E20;
    };
    if (typeof TC.eDevice != 'undefined') {
        var E21 = {};
        for (var xx = 0; xx < TC.eDevice.DeviceGroup.length; xx++) {
            E21.E21_01 = "";
            if (typeof TC.eDevice["eDevice.02"] != 'undefined') {
                if (TC.eDevice.DeviceGroup[xx]["eDevice.02"].IsNull != true) {
                    E21.E21_01 = TC.eDevice.DeviceGroup[xx]["eDevice.01"].vSet[0];
                }
            };

            E21.E21_02 = "";
            if (typeof TC.eDevice.DeviceGroup[xx]["eDevice.03"] != 'undefined') {
                if (TC.eDevice.DeviceGroup[xx]["eDevice.03"].IsNull != true) {
                    var E21_02 = [];
                    for (var d = 0; d < TC.eDevice.DeviceGroup[xx]["eDevice.03"].vSet.length; d++) {
                        E21_02.push(setV2("eDevice.03", TC.eDevice.DeviceGroup[xx]["eDevice.03"].vSet[d]));
                    };
                    E21.E21_02 = E21_02;
                }
            };
            E21.E21_03 = "";
            if (typeof TC.eDevice.DeviceGroup[xx]["eDevice.04"] != 'undefined') {
                if (TC.eDevice.DeviceGroup[xx]["eDevice.04"].IsNull != true) {
                    E21.E21_03 = TC.eDevice.DeviceGroup[xx]["eDevice.04"].vSet[0];
                }
            };
            E21.E21_04 = "";
            if (typeof TC.eDevice.DeviceGroup[xx]["eDevice.05"] != 'undefined') {
                if (TC.eDevice.DeviceGroup[xx]["eDevice.05"].IsNull != true) {
                    E21.E21_04 = TC.eDevice.DeviceGroup[xx]["eDevice.05"].vSet[0];
                }
            };
            E21.E21_05 = "";
            if (typeof TC.eDevice.DeviceGroup[xx]["eDevice.06"] != 'undefined') {
                if (TC.eDevice.DeviceGroup[xx]["eDevice.06"].IsNull != true) {
                    E21.E21_05 = TC.eDevice.DeviceGroup[xx]["eDevice.06"].vSet[0];
                }
            };

            E21.E21_06 = "";
            if (typeof TC.eDevice.DeviceGroup[xx]["eDevice.07"] != 'undefined') {
                if (TC.eDevice.DeviceGroup[xx]["eDevice.07"].IsNull != true) {
                    for (var d = 0; d < TC.eDevice.DeviceGroup[xx]["eDevice.07"].vSet.length; d++) {
                        E21.E21_06 = TC.eDevice.DeviceGroup[xx]["eDevice.07"].vSet[d];
                    }
                }
            };

            E21.E21_07 = "";
            if (typeof TC.eDevice.DeviceGroup[xx]["eDevice.08"] != 'undefined') {
                if (TC.eDevice.DeviceGroup[xx]["eDevice.08"].IsNull != true) {
                    E21.E21_07 = TC.eDevice.DeviceGroup[xx]["eDevice.08"].vSet[0];
                }
            };

            E21.E21_08 = "";
            if (typeof TC.eDevice.DeviceGroup[xx]["eDevice.09"] != 'undefined') {
                if (TC.eDevice.DeviceGroup[xx]["eDevice.09"].IsNull != true) {
                    E21.E21_08 = TC.eDevice.DeviceGroup[xx]["eDevice.09"].vSet[0];
                }
            };

            E21.E21_09 = "";
            if (typeof TC.eDevice.DeviceGroup[xx]["eDevice.10"] != 'undefined') {
                if (TC.eDevice.DeviceGroup[xx]["eDevice.10"].IsNull != true) {
                    E21.E21_09 = TC.eDevice.DeviceGroup[xx]["eDevice.10"].vSet[0];
                }
            };

            E21.E21_10 = "";
            if (typeof TC.eDevice.DeviceGroup[xx]["eDevice.11"] != 'undefined') {
                if (TC.eDevice.DeviceGroup[xx]["eDevice.11"].IsNull != true) {
                    E21.E21_10 = TC.eDevice.DeviceGroup[xx]["eDevice.11"].vSet[0];
                }
            };

            E21.E21_11 = "";
            if (typeof TC.eDevice.DeviceGroup[xx]["eDevice.12"] != 'undefined') {
                if (TC.eDevice.DeviceGroup[xx]["eDevice.12"].IsNull != true) {
                    E21.E21_11 = TC.eDevice.DeviceGroup[xx]["eDevice.12"].vSet[0];
                }
            }
        };
        EMSDataSet.E21 = E21;
    };
    if (typeof TC.eOutcome != 'undefined') {
        var E22 = {};;
        E22.E22_01 = "";
        if (typeof TC.eOutcome["eOutcome.01"] != 'undefined') {
            if (TC.eOutcome["eOutcome.01"].IsNull == true) {
                if (sV.indexOf(TC.eOutcome["eOutcome.01"].vSet[0]) != -1) {
                    E22.E22_01 = sM[TC.eOutcome["eOutcome.01"].vSet[0]];
                }
            }
            else {
                E22.E22_01 = setV2("eOutcome.01", TC.eOutcome["eOutcome.01"].vSet[0]);
            }
        };
        E22.E22_02 = "";
        if (typeof TC.eOutcome["eOutcome.02"] != 'undefined') {
            if (TC.eOutcome["eOutcome.02"].IsNull == true) {
                if (sV.indexOf(TC.eOutcome["eOutcome.02"].vSet[0]) != -1) {
                    E22.E22_02 = sM[TC.eOutcome["eOutcome.02"].vSet[0]];
                }
            }
            else {
                E22.E22_02 = setV2("eOutcome.02", TC.eOutcome["eOutcome.02"].vSet[0]);
            }
        };
        E22.E22_03 = "-10";
        E22.E22_04 = "-10";
        E22.E22_05 = "-10";
        E22.E22_06 = "-10";

        EMSDataSet.E22 = E22;
    };
    if (typeof TC.eOther != 'undefined') {
        var E23 = {};
        E23.E23_01 = "";
        if (typeof TC.eOther["eOther.01"] != 'undefined') {
            if (TC.eOther["eOther.01"].IsNull != true) {
                E23.E23_01 = TC.eOther["eOther.01"].vSet[0];
            }
        };

        var E23_02 = [];
        if (typeof TC.eOther["eOther.02"] != 'undefined')
        {
            if (TC.eOther["eOther.02"].IsNull != true)
            {
                for (var d = 0; d < TC.eOther["eOther.02"].vSet.length; d++)
                {
                    E23_02.push(TC.eOther["eOther.02"].vSet[0]);
                }
                E23.E23_02 = E23_02
            }
        };

        var E23_03 = [];
        var E23_05 = [];
        var E23_06 = [];
        
        for (var d = 0; d < TC.eOther.EMSCrewMemberGroup.length; d++) {
            if (typeof TC.eOther.EMSCrewMemberGroup[d]["eOther.03"] != 'undefined') {
                if (TC.eOther.EMSCrewMemberGroup[d]["eOther.03"].IsNull == true) {
                    if (sV.indexOf(TC.eOther.EMSCrewMemberGroup[d]["eOther.03"].vSet[0]) != -1) {
                        E22_03.push(sM[TC.eOther.EMSCrewMemberGroup[d]["eOther.03"].vSet[0]]);

                        for (var d = 0; d < TC.eOther.EMSCrewMemberGroup[d]["eOther.03"].vSet.length; d++) {
                            E23_03.push(setV2("eOther.03", TC.eOther.EMSCrewMemberGroup[d]["eOther.03"].vSet[0]));
                        }
                    }
                };
                E23.E23_03 = E23_03;
            };


            if (typeof TC.eOther.EMSCrewMemberGroup[d]["eOther.05"] != 'undefined') {
                if (TC.eOther.EMSCrewMemberGroup[d]["eOther.05"].IsNull == true) {
                    if (sV.indexOf(TC.eOther.EMSCrewMemberGroup[d]["eOther.05"].vSet[0]) != -1) {
                        E23_05.push(sM[TC.eOther.EMSCrewMemberGroup[d]["eOther.05"].vSet[0]]);
                    }
                }
                else {
                    E23_05.push(setV2("eOther.05", TC.eOther.EMSCrewMemberGroup[d]["eOther.05"].vSet[0]));
                };
                E23.E23_05 = E23_05;
            };

            var E23_06 = [];
            if (typeof TC.eOther.EMSCrewMemberGroup[d]["eOther.06"] != 'undefined') {
                if (TC.eOther.EMSCrewMemberGroup[d]["eOther.06"].IsNull == true) {
                    if (sV.indexOf(TC.eOther.EMSCrewMemberGroup[d]["eOther.06"].vSet[0]) != -1) {
                        E23_06.push(sM[TC.eOther.EMSCrewMemberGroup[d]["eOther.06"].vSet[0]]);
                    }
                }
                else {
                    for (var d = 0; d < TC.eOther.EMSCrewMemberGroup[d]["eOther.06"].vSet.length; d++) {
                        E23_06.push(setV2("eOther.06", TC.eOther.EMSCrewMemberGroup[d]["eOther.06"].vSet[i]));
                    };

                };
                E23.E23_06 = E23_06;
            }
        };

    var E23_04 = [];
    if (typeof TC.eOther["eOther.07"] != 'undefined') {
        if (TC.eOther["eOther.07"].IsNull == true) {
            E23_04.push("-10")
        }
        else {
            for (var d = 0; d < TC.eOther["eOther.07"].vSet.length; d++) {
                E23_04.push(setV2("eOther.07", TC.eOther["eOther.07"].vSet[i]));
            }
        };
        E23.E23_04 = E23_04;
    };


    E23.E23_07 = "-5";
    E23.E23_08 = "-5";
    E23.E23_09 = "-5";

        E23.E23_10 = "";
        if (typeof TC.eOther["eOther.08"] != 'undefined') {
            if (TC.eOther["eOther.08"].IsNull == true) {
                if (sV.indexOf(TC.eOther["eOther.08"].vSet[0]) != -1) {
                    E23.E23_10 = sM[TC.eOther["eOther.08"].vSet[0]];
                }
            }
            else {
                E23.E23_10 = setV2("eOther.08", TC.eOther["eOther.08"].vSet[0]);
            }
        };
        EMSDataSet.E23 = E23;
    };
    E23.E23_55 = "-5";
    return EMSDataSet;
};
