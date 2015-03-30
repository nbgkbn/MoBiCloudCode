exports.setV2CodeText = function (TC) {
    var ElementArray = [];
    //    //console.log("TC.E01")
    if (typeof TC.E01 != 'undefined') {
        if (typeof TC.E01.E01_01 != 'undefined') {
            WriteIt(ElementArray, "E01_01", TC.E01.E01_01);
        };
        if (typeof TC.E01.E01_02 != 'undefined') {
            WriteIt(ElementArray, "E01_02", TC.E01.E01_02)
        };
        if (typeof TC.E01.E01_03 != 'undefined') {
            WriteIt(ElementArray, "E01_03", TC.E01.E01_03)
        };
        if (typeof TC.E01.E01_04 != 'undefined') {
            WriteIt(ElementArray, "E01_04", TC.E01.E01_04)
        }
    };
    //console.log("TC.E02")
    if (typeof TC.E02 != 'undefined') {
        if (typeof TC.E02.E02_01 != 'undefined') {
            WriteIt(ElementArray, "E02_01", TC.E02.E02_01)
        };
        if (typeof TC.E02.E02_02 != 'undefined') {
            WriteIt(ElementArray, "E02_02", TC.E02.E02_02)
        };
        if (typeof TC.E02.E02_03 != 'undefined') {
            WriteIt(ElementArray, "E02_03", TC.E02.E02_03)
        };
        if (typeof TC.E02.E02_04 != 'undefined') {
            WriteIt(ElementArray, "E02_04", setV2Text("E02_04", TC.E02.E02_04), TC.E02.E02_04)
        };
        if (typeof TC.E02.E02_05 != 'undefined') {
            WriteIt(ElementArray, "E02_05", setV2Text("E02_05", TC.E02.E02_05), TC.E02.E02_05)
        };
        if (typeof TC.E02.E02_06 != 'undefined') {
            for (var i = 0; i < TC.E02.E02_06.length; i++) {
                WriteIt(ElementArray, "E02_06", setV2Text("E02_06", TC.E02.E02_06[i]), TC.E02.E02_06[i])
            }
        };
        if (typeof TC.E02.E02_07 != 'undefined') {
            for (var i = 0; i < TC.E02.E02_07.length; i++) {
                WriteIt(ElementArray, "E02_07", setV2Text("E02_07", TC.E02.E02_07[i]), TC.E02.E02_07[i])
            }
        };
        if (typeof TC.E02.E02_08 != 'undefined') {
            for (var i = 0; i < TC.E02.E02_08.length; i++) {
                WriteIt(ElementArray, "E02_08", setV2Text("E02_08", TC.E02.E02_08[i]), TC.E02.E02_08[i])
            }
        };
        if (typeof TC.E02.E02_09 != 'undefined') {
            for (var i = 0; i < TC.E02.E02_09.length; i++) {
                WriteIt(ElementArray, "E02_09", setV2Text("E02_09", TC.E02.E02_09[i]), TC.E02.E02_09[i])
            }
        };
        if (typeof TC.E02.E02_10 != 'undefined') {
            for (var i = 0; i < TC.E02.E02_10.length; i++) {
                WriteIt(ElementArray, "E02_10", setV2Text("E02_10", TC.E02.E02_10[i]), TC.E02.E02_10[i])
            }
        };
        if (typeof TC.E02.E02_11 != 'undefined') {
            WriteIt(ElementArray, "E02_11", TC.E02.E02_11)
        };
        if (typeof TC.E02.E02_12 != 'undefined') {
            WriteIt(ElementArray, "E02_12", TC.E02.E02_12)
        }
        if (typeof TC.E02.E02_13 != 'undefined') {
            WriteIt(ElementArray, "E02_13", TC.E02.E02_13)
        }
        if (typeof TC.E02.E02_14 != 'undefined') {
            WriteIt(ElementArray, "E02_14", TC.E02.E02_14)
        }
        if (typeof TC.E02.E02_15 != 'undefined') {
            WriteIt(ElementArray, "E02_15", TC.E02.E02_15)
        }
        if (typeof TC.E02.E02_16 != 'undefined') {
            WriteIt(ElementArray, "E02_16", TC.E02.E02_16)
        }
        if (typeof TC.E02.E02_17 != 'undefined') {
            WriteIt(ElementArray, "E02_17", TC.E02.E02_17)
        }
        if (typeof TC.E02.E02_18 != 'undefined') {
            WriteIt(ElementArray, "E02_18", TC.E02.E02_18)
        }
        if (typeof TC.E02.E02_19 != 'undefined') {
            WriteIt(ElementArray, "E02_19", TC.E02.E02_19)
        }
        if (typeof TC.E02.E02_20 != 'undefined') {
            WriteIt(ElementArray, "E02_20", setV2Text("E02_20", TC.E02.E02_20), TC.E02.E02_20)
        }
    };

    //console.log("TC.E03")
    if (typeof TC.E03 != 'undefined') {
        if (typeof TC.E03.E03_01 != 'undefined') {
            WriteIt(ElementArray, "E03_01", setV2Text("E03_01", TC.E03.E03_01), TC.E03.E03_01)
        }
        if (typeof TC.E03.E03_02 != 'undefined') {
            WriteIt(ElementArray, "E03_02", setV2Text("E03_02", TC.E03.E03_02), TC.E03.E03_02)
        }
        if (typeof TC.E03.E03_03 != 'undefined') {
            WriteIt(ElementArray, "E03_03", TC.E03.E03_02)
        }
    };


    //console.log("TC.04")
    if (typeof TC.E04 != 'undefined') {
        for (var x = 0; x < TC.E04.length; x++) {
            if (typeof TC.E04[x].E04_01 != 'undefined') {
                WriteIt(ElementArray, "E04_01", TC.E04[x].E04_01)
            }
            if (typeof TC.E04[x].E04_02 != 'undefined') {
                WriteIt(ElementArray, "E04_02", setV2Text("E04_02", TC.E04[x].E04_02), TC.E04[x].E04_02)
            }
            if (typeof TC.E04[x].E04_03 != 'undefined') {
                WriteIt(ElementArray, "E04_03", setV2Text("E04_03", TC.E04[x].E04_03), TC.E04[x].E04_03)
            }
        }
    };

    //console.log("TC.05")
    if (typeof TC.E05 != 'undefined') {
        if (typeof TC.E05.E05_01 != 'undefined') {
            WriteIt(ElementArray, "E05_01", TC.E05.E05_01)
        }
        if (typeof TC.E05.E05_02 != 'undefined') {
            WriteIt(ElementArray, "E05_02", TC.E05.E05_02)
        }
        if (typeof TC.E05.E05_03 != 'undefined') {
            WriteIt(ElementArray, "E05_03", TC.E05.E05_03)
        }
        if (typeof TC.E05.E05_04 != 'undefined') {
            WriteIt(ElementArray, "E05_04", TC.E05.E05_04)
        }
        if (typeof TC.E05.E05_05 != 'undefined') {
            WriteIt(ElementArray, "E05_05", TC.E05.E05_05)
        }
        if (typeof TC.E05.E05_06 != 'undefined') {
            WriteIt(ElementArray, "E05_06", TC.E05.E05_06)
        }
        if (typeof TC.E05.E05_07 != 'undefined') {
            WriteIt(ElementArray, "E05_07", TC.E05.E05_07)
        }
        if (typeof TC.E05.E05_08 != 'undefined') {
            WriteIt(ElementArray, "E05_08", TC.E05.E05_08)
        }
        if (typeof TC.E05.E05_09 != 'undefined') {
            WriteIt(ElementArray, "E05_09", TC.E05.E05_09)
        }
        if (typeof TC.E05.E05_10 != 'undefined') {
            WriteIt(ElementArray, "E05_10", TC.E05.E05_10)
        }
        if (typeof TC.E05.E05_11 != 'undefined') {
            WriteIt(ElementArray, "E05_11", TC.E05.E05_10)
        }
        if (typeof TC.E05.E05_12 != 'undefined') {
            WriteIt(ElementArray, "E05_12", TC.E05.E05_12)
        }
        if (typeof TC.E05.E05_13 != 'undefined') {
            WriteIt(ElementArray, "E05_13", TC.E05.E05_13)
        }
    };

    //console.log("TC.E06")
    if (typeof TC.E06 != 'undefined') {
        if (typeof TC.E06.E06_01 != 'undefined') {
            WriteIt(ElementArray, "E06_01", setV2Text("E06_01", TC.E06.E06_01), TC.E06.E06_01)
        }
        if (typeof TC.E06.E06_02 != 'undefined') {
            WriteIt(ElementArray, "E06_02", setV2Text("E06_02", TC.E06.E06_02), TC.E06.E06_02)
        }
        if (typeof TC.E06.E06_03 != 'undefined') {
            WriteIt(ElementArray, "E06_03", setV2Text("E06_03", TC.E06.E06_03), TC.E06.E06_03)
            //WriteIt(ElementArray, "E06_03", TC.E06.E06_03)
        }
        if (typeof TC.E06.E06_04 != 'undefined') {
            WriteIt(ElementArray, "E06_04", setV2Text("E06_04", TC.E06.E06_04), TC.E06.E06_04)
        }
        if (typeof TC.E06.E06_05 != 'undefined') {
            WriteIt(ElementArray, "E06_05", setV2Text("E06_05", TC.E06.E06_05), TC.E06.E06_05)
        }
        if (typeof TC.E06.E06_06 != 'undefined') {
            WriteIt(ElementArray, "E06_06", setV2Text("E06_06", TC.E06.E06_06), TC.E06.E06_06)
        }
        if (typeof TC.E06.E06_07 != 'undefined') {
            WriteIt(ElementArray, "E06_07", setV2Text("E06_07", TC.E06.E06_07), TC.E06.E06_07)
        }
        if (typeof TC.E06.E06_08 != 'undefined') {
            WriteIt(ElementArray, "E06_08", setV2Text("E06_08", TC.E06.E06_08), TC.E06.E06_08)
        }
        if (typeof TC.E06.E06_09 != 'undefined') {
            WriteIt(ElementArray, "E06_09", setV2Text("E06_09", TC.E06.E06_09), TC.E06.E06_09)
        }
        if (typeof TC.E06.E06_10 != 'undefined') {
            WriteIt(ElementArray, "E06_10", setV2Text("E06_10", TC.E06.E06_10), TC.E06.E06_10)
        }
        if (typeof TC.E06.E06_11 != 'undefined') {
            WriteIt(ElementArray, "E06_11", setV2Text("E06_11", TC.E06.E06_11), TC.E06.E06_15)
        }
        if (typeof TC.E06.E06_12 != 'undefined') {
            WriteIt(ElementArray, "E06_12", setV2Text("E06_12", TC.E06.E06_12), TC.E06.E06_12)
        };

        if (typeof TC.E06.E06_13 != 'undefined') {
            WriteIt(ElementArray, "E06_13", setV2Text("E06_13", TC.E06.E06_13), TC.E06.E06_15)
        }
        if (typeof TC.E06.E06_14 != 'undefined') {
            WriteIt(ElementArray, "E06_14", TC.E06.E06_14)
        }
        if (typeof TC.E06.E06_15 != 'undefined') {
            WriteIt(ElementArray, "E06_15", setV2Text("E06_15", TC.E06.E06_15), TC.E06.E06_15)
        }
        if (typeof TC.E06.E06_16 != 'undefined') {
            WriteIt(ElementArray, "E06_16", TC.E06.E06_16)
        }
        if (typeof TC.E06.E06_17 != 'undefined') {
            WriteIt(ElementArray, "E06_17", setV2Text("E06_17", TC.E06.E06_17), TC.E06.E06_17)
        }
        if (typeof TC.E06.E06_18 != 'undefined') {
            WriteIt(ElementArray, "E06_18", setV2Text("E06_18", TC.E06.E06_18), TC.E06.E06_18)
        }
        if (typeof TC.E06.E06_19 != 'undefined') {
            WriteIt(ElementArray, "E06_19", setV2Text("E06_19", TC.E06.E06_19), TC.E06.E06_19)
        }
    };

    //console.log("TC.07")
    if (typeof TC.E07 != 'undefined') {
        if (typeof TC.E07.E07_01 != 'undefined') {
            WriteIt(ElementArray, "E07_01", setV2Text("E07_01", TC.E07.E07_01), TC.E07.E07_01)
        }
        if (typeof TC.E07.E07_02 != 'undefined') {
            WriteIt(ElementArray, "E07_02", setV2Text("E07_02", TC.E07.E07_02), TC.E07.E07_02)
        }
        if (typeof TC.E07.E07_03_0 != 'undefined') {
            for (var i = 0; i < TC.E07.E07_03_0.length; i++) {
                var eObj = {};
                eObj = TC.E07.E07_03_0[i];
                if (typeof eObj.E07_03 != 'undefined') {
                    WriteIt(ElementArray, "E07_03", eObj.E07_03)
                }
                if (typeof eObj.E07_04 != 'undefined') {
                    WriteIt(ElementArray, "E07_04", setV2Text("E07_04", eObj.E07_04), eObj.E07_04)
                }
                if (typeof eObj.E07_05 != 'undefined') {
                    WriteIt(ElementArray, "E07_05", eObj.E07_05)
                }
                if (typeof eObj.E07_06 != 'undefined') {
                    WriteIt(ElementArray, "E07_06", eObj.E07_06)
                }
                if (typeof eObj.E07_07 != 'undefined') {
                    WriteIt(ElementArray, "E07_07", eObj.E07_07)
                }
                if (typeof eObj.E07_08 != 'undefined') {
                    WriteIt(ElementArray, "E07_08", eObj.E07_08)
                }
                if (typeof eObj.E07_09 != 'undefined') {
                    WriteIt(ElementArray, "E07_09", eObj.E07_09)
                }
                if (typeof eObj.E07_10 != 'undefined') {
                    WriteIt(ElementArray, "E07_10", eObj.E07_10)
                }
                if (typeof eObj.E07_11 != 'undefined') {
                    WriteIt(ElementArray, "E07_11", eObj.E07_11)
                }
                if (typeof eObj.E07_12 != 'undefined') {
                    WriteIt(ElementArray, "E07_12", eObj.E07_12)
                }
                if (typeof eObj.E07_13 != 'undefined') {
                    WriteIt(ElementArray, "E07_13", eObj.E07_13)
                }
                if (typeof eObj.E07_14 != 'undefined') {
                    WriteIt(ElementArray, "E07_14", setV2Text("E07_14", eObj.E07_14), eObj.E07_14)
                }
                if (typeof eObj.E07_15 != 'undefined') {
                    WriteIt(ElementArray, "E07_15", setV2Text("E07_15", eObj.E07_15), eObj.E07_15)
                }
            }
        };
        if (typeof TC.E07.E07_16 != 'undefined') {
            WriteIt(ElementArray, "E07_16", setV2Text("E07_16", TC.E07.E07_16), TC.E07.E07_16)
        }
        if (typeof TC.E07.E07_17 != 'undefined') {
            WriteIt(ElementArray, "E07_17", setV2Text("E07_17", TC.E07.E07_17), TC.E07.E07_17)
        }
        if (typeof TC.E07.E07_18 != 'undefined') {
            WriteIt(ElementArray, "E07_18", TC.E07.E07_18)
        }
        if (typeof TC.E07.E07_19 != 'undefined') {
            WriteIt(ElementArray, "E07_19", TC.E07.E07_19)
        }
        if (typeof TC.E07.E07_20 != 'undefined') {
            WriteIt(ElementArray, "E07_20", TC.E07.E07_20)
        }
        if (typeof TC.E07.E07_21 != 'undefined') {
            WriteIt(ElementArray, "E07_21", TC.E07.E07_21)
        }
        if (typeof TC.E07.E07_22 != 'undefined') {
            WriteIt(ElementArray, "E07_22", TC.E07.E07_22)
        }
        if (typeof TC.E07.E07_23 != 'undefined') {
            WriteIt(ElementArray, "E07_23", TC.E07.E07_23)
        }
        if (typeof TC.E07.E07_24 != 'undefined') {
            WriteIt(ElementArray, "E07_24", TC.E07.E07_24)
        }
        if (typeof TC.E07.E07_25 != 'undefined') {
            WriteIt(ElementArray, "E07_25", TC.E07.E07_25)
        }
        if (typeof TC.E07.E07_26 != 'undefined') {
            WriteIt(ElementArray, "E07_26", setV2Text("E07_26", TC.E07.E07_26), TC.E07.E07_26)
        }
        if (typeof TC.E07.E07_27 != 'undefined') {
            WriteIt(ElementArray, "E07_27", TC.E07.E07_27)
        }
        if (typeof TC.E07.E07_28 != 'undefined') {
            WriteIt(ElementArray, "E07_28", TC.E07.E07_28)
        }
        if (typeof TC.E07.E07_29 != 'undefined') {
            WriteIt(ElementArray, "E07_29", TC.E07.E07_27)
        };


        if (typeof TC.E07.E07_30 != 'undefined') {
            WriteIt(ElementArray, "E07_30", TC.E07.E07_30)
        };
        if (typeof TC.E07.E07_31 != 'undefined') {
            WriteIt(ElementArray, "E07_31", TC.E07.E07_31)
        };
        if (typeof TC.E07.E07_32 != 'undefined') {
            WriteIt(ElementArray, "E07_32", TC.E07.E07_32)
        }
        if (typeof TC.E07.E07_33 != 'undefined') {
            WriteIt(ElementArray, "E07_33", setV2Text("E07_33", TC.E07.E07_33))
        }
        if (typeof TC.E07.E07_34 != 'undefined') {
            WriteIt(ElementArray, "E07_34", setV2Text("E07_34", TC.E07.E07_34))
        }
        if (typeof TC.E07.E07_35 != 'undefined') {
            for (var i = 0; i < TC.E07.E07_35.length; i++) {
                WriteIt(ElementArray, "E07_35", TC.E07.E07_35[i])
            };
        };
        if (typeof TC.E07.E07_36 != 'undefined') {
            WriteIt(ElementArray, "E07_36", TC.E07.E07_36)
        }
        if (typeof TC.E07.E07_37 != 'undefined') {
            WriteIt(ElementArray, "E07_37", setV2Text("E07_37", TC.E07.E07_37))
        }
    };

    //console.log("TC.08")
    if (typeof TC.E08 != 'undefined') {
        for (var i = 0; i < TC.E08.E08_01.length; i++) {
            WriteIt(ElementArray, "E08_01", setV2Text("E08_01", TC.E08.E08_01[i]), TC.E08.E08_01[i])
        };
        for (var i = 0; i < TC.E08.E08_02.length; i++) {
            WriteIt(ElementArray, "E08_02", setV2Text("E08_02", TC.E08.E08_02[i]), TC.E08.E08_02[i])
        };

        WriteIt(ElementArray, "E08_03", setV2Text("E08_03", TC.E08.E08_03), TC.E08.E08_03)
        WriteIt(ElementArray, "E08_04", TC.E08.E08_04)
        WriteIt(ElementArray, "E08_05", setV2Text("E08_05", TC.E08.E08_05), TC.E08.E08_05)
        WriteIt(ElementArray, "E08_06", setV2Text("E08_06", TC.E08.E08_06), TC.E08.E08_06)
        WriteIt(ElementArray, "E08_07", TC.E08.E08_07)
        WriteIt(ElementArray, "E08_08", TC.E08.E08_08)
        WriteIt(ElementArray, "E08_09", TC.E08.E08_09)
        WriteIt(ElementArray, "E08_10", TC.E08.E08_10)
        WriteIt(ElementArray, "E08_11", TC.E08.E08_11)
        WriteIt(ElementArray, "E08_12", TC.E08.E08_12)
        WriteIt(ElementArray, "E08_13", TC.E08.E08_13)
        WriteIt(ElementArray, "E08_14", TC.E08.E08_14)
        WriteIt(ElementArray, "E08_15", TC.E08.E08_15)
    };


    //console.log("TC.09")
    if (typeof TC.E09 != 'undefined') {
        if (typeof TC.E09.E09_01 != 'undefined') {
            for (var i = 0; i < TC.E09.E09_01.length; i++) {
                WriteIt(ElementArray, "E09_01", setV2Text("E09_01", TC.E09.E09_01[i]), TC.E09.E09_01[i])
            }
        };
        if (typeof TC.E09.E09_02 != 'undefined') {
            for (var i = 0; i < TC.E09.E09_02.length; i++) {
                WriteIt(ElementArray, "E09_02", setV2Text("E09_02", TC.E09.E09_02[i]), TC.E09.E09_02[i])
            }
        };

        if (typeof TC.E09.E09_03 != 'undefined') {
            WriteIt(ElementArray, "E09_03", setV2Text("E09_03", TC.E09.E09_03), TC.E09.E09_03)
        }
        if (typeof TC.E09.E09_04 != 'undefined') {
            WriteIt(ElementArray, "E09_04", setV2Text("E09_04", TC.E09.E09_04), TC.E09.E09_04)
        }
        if (typeof TC.E09.E09_05 != 'undefined') {
            WriteIt(ElementArray, "E09_05", TC.E09.E09_05)
        }
        if (typeof TC.E09.E09_06 != 'undefined') {
            WriteIt(ElementArray, "E09_06", TC.E09.E09_06)
        }
        if (typeof TC.E09.E09_07 != 'undefined') {
            WriteIt(ElementArray, "E09_07", setV2Text("E09_07", TC.E09.E09_07), TC.E09.E09_07)
        }
        if (typeof TC.E09.E09_08 != 'undefined') {
            WriteIt(ElementArray, "E09_08", TC.E09.E09_08)
        }
        if (typeof TC.E09.E09_09 != 'undefined') {
            WriteIt(ElementArray, "E09_09", TC.E09.E09_09)
        }
        if (typeof TC.E09.E09_10 != 'undefined') {
            WriteIt(ElementArray, "E09_10", setV2Text("E09_10", TC.E09.E09_10), TC.E09.E09_10)
        }
        if (typeof TC.E09.E09_11 != 'undefined') {
            WriteIt(ElementArray, "E09_11", setV2Text("E09_11", TC.E09.E09_11), TC.E09.E09_11)
        }
        if (typeof TC.E09.E09_12 != 'undefined') {
            WriteIt(ElementArray, "E09_12", setV2Text("E09_12", TC.E09.E09_12), TC.E09.E09_12)
        }
        if (typeof TC.E09.E09_13 != 'undefined') {
            WriteIt(ElementArray, "E09_13", TC.E09.E09_13, TC.E09.E09_13)
        }
        if (typeof TC.E09.E09_14 != 'undefined') {
            for (var i = 0; i < TC.E09.E09_14.length; i++) {
                WriteIt(ElementArray, "E09_14", setV2Text("E09_14", TC.E09.E09_14[i]), TC.E09.E09_14[i])
            }
        };
        if (typeof TC.E09.E09_15 != 'undefined') {
            WriteIt(ElementArray, "E09_15", setV2Text("E09_15", TC.E09.E09_15), TC.E09.E09_15)
        }
        if (typeof TC.E09.E09_16 != 'undefined') {
            WriteIt(ElementArray, "E09_16", setV2Text("E09_16", TC.E09.E09_16), TC.E09.E09_16)
        }
    };


    //console.log("TC.10")
    if (typeof TC.E10 != 'undefined') {

        if (typeof TC.E10.E10_01 != 'undefined') {
            WriteIt(ElementArray, "E10_01", setV2Text("E10_01", TC.E10.E10_01), TC.E10.E10_01)
        };

        if (typeof TC.E10.E10_02 != 'undefined') {
            WriteIt(ElementArray, "E10_02", setV2Text("E10_02", TC.E10.E10_02), TC.E10.E10_02)
        };

        if (typeof TC.E10.E10_03 != 'undefined') {
            for (var i = 0; i < TC.E10.E10_03.length; i++) {
                WriteIt(ElementArray, "E10_03", setV2Text("E10_03", TC.E10.E10_03[i]), TC.E10.E10_03[i])
            }
        };

        if (typeof TC.E10.E10_04 != 'undefined') {
            for (var i = 0; i < TC.E10.E10_04.length; i++) {
                WriteIt(ElementArray, "E10_04", setV2Text("E10_04", TC.E10.E10_04[i]), TC.E10.E10_04[i])
            }
        };

        if (typeof TC.E10.E10_05 != 'undefined') {
            for (var i = 0; i < TC.E10.E10_05.length; i++) {
                WriteIt(ElementArray, "E10_05", setV2Text("E10_05", TC.E10.E10_05[i]), TC.E10.E10_05[i])
            }
        };

        if (typeof TC.E10.E10_06 != 'undefined') {
            WriteIt(ElementArray, "E10_06", setV2Text("E10_06", TC.E10.E10_06), TC.E10.E10_06)
        }
        if (typeof TC.E10.E10_07 != 'undefined') {
            WriteIt(ElementArray, "E10_07", setV2Text("E10_07", TC.E10.E10_07), TC.E10.E10_06)
        };

        if (typeof TC.E10.E10_08 != 'undefined') {
            for (var i = 0; i < TC.E10.E10_08.length; i++) {
                WriteIt(ElementArray, "E10_08", setV2Text("E10_08", TC.E10.E10_08[i]), TC.E10.E10_08[i])
            }
        };


        if (typeof TC.E10.E10_09 != 'undefined') {
            for (var i = 0; i < TC.E10.E10_09.length; i++) {
                WriteIt(ElementArray, "E10_09", setV2Text("E10_09", TC.E10.E10_09[i]), TC.E10.E10_09[i])
            }
        };

        if (typeof TC.E10.E10_10 != 'undefined') {
            WriteIt(ElementArray, "E10_10", setV2Text("E10_10", TC.E10.E10_10), TC.E10.E10_10)
        };

    };


    //console.log("TC.11")
    if (typeof TC.E11 != 'undefined') {

        if (typeof TC.E11.E11_01 != 'undefined') {
            WriteIt(ElementArray, "E11_01", setV2Text("E11_01", TC.E11.E11_01), TC.E11.E11_01)
        }
        if (typeof TC.E11.E11_02 != 'undefined') {
            WriteIt(ElementArray, "E11_02", setV2Text("E11_02", TC.E11.E11_02), TC.E11.E11_02)
        }
        if (typeof TC.E11.E11_03 != 'undefined') {
            for (var i = 0; i < TC.E11.E11_03.length; i++) {
                WriteIt(ElementArray, "E11_03", setV2Text("E11_03", TC.E11.E11_03[i]), TC.E11.E11_03[i])
            }
        };
        if (typeof TC.E11.E11_04 != 'undefined') {
            WriteIt(ElementArray, "E11_04", setV2Text("E11_04", TC.E11.E11_04), TC.E11.E11_04)
        }
        if (typeof TC.E11.E11_05 != 'undefined') {
            WriteIt(ElementArray, "E11_05", setV2Text("E11_05", TC.E11.E11_05), TC.E11.E11_05)
        }
        if (typeof TC.E11.E11_06 != 'undefined') {
            WriteIt(ElementArray, "E11_06", setV2Text("E11_06", TC.E11.E11_06), TC.E11.E11_06)
        }
        if (typeof TC.E11.E11_07 != 'undefined') {
            WriteIt(ElementArray, "E11_07", setV2Text("E11_07", TC.E11.E11_07), TC.E11.E11_07)
        }
        if (typeof TC.E11.E11_08 != 'undefined') {
            WriteIt(ElementArray, "E11_08", setV2Text("E11_08", TC.E11.E11_08), TC.E11.E11_08)
        }
        if (typeof TC.E11.E11_09 != 'undefined') {
            WriteIt(ElementArray, "E11_09", setV2Text("E11_09", TC.E11.E11_09), TC.E11.E11_09)
        }
        if (typeof TC.E11.E11_10 != 'undefined') {
            WriteIt(ElementArray, "E11_10", setV2Text("E11_10", TC.E11.E11_10), TC.E11.E11_10)
        }
        if (typeof TC.E11.E11_11 != 'undefined') {
            for (var i = 0; i < TC.E11.E11_11.length; i++) {
                WriteIt(ElementArray, "E11_11", setV2Text("E11_11", TC.E11.E11_11[i]), TC.E11.E11_11[i])
            }
        }
    };

    //console.log("TC.E12")
    if (typeof TC.E12 != 'undefined') {


        if (typeof TC.E12.E12_01 != 'undefined') {
            for (var i = 0; i < TC.E12.E12_01.length; i++) {
                WriteIt(ElementArray, "E12_01", setV2Text("E12_01", TC.E12.E12_01[i]), TC.E12.E12_01[i])
            }
        };
        if (typeof TC.E12.E12_02 != 'undefined') {
            WriteIt(ElementArray, "E12_02", setV2Text("E12_02", TC.E12.E12_02), TC.E12.E12_02)
        }
        if (typeof TC.E12.E12_03 != 'undefined') {
            WriteIt(ElementArray, "E12_03", setV2Text("E12_03", TC.E12.E12_03), TC.E12.E12_03)
        }
        if (typeof TC.E12.E12_04 != 'undefined') {
            WriteIt(ElementArray, "E12_04", setV2Text("E12_04", TC.E12.E12_04), TC.E12.E12_04)
        }
        if (typeof TC.E12.E12_05 != 'undefined') {
            WriteIt(ElementArray, "E12_05", setV2Text("E12_05", TC.E12.E12_05), TC.E12.E12_05)
        }
        if (typeof TC.E12.E12_06 != 'undefined') {
            WriteIt(ElementArray, "E12_06", setV2Text("E12_06", TC.E12.E12_06), TC.E12.E12_06)
        }
        if (typeof TC.E12.E12_07 != 'undefined') {
            for (var i = 0; i < TC.E12.E12_07.length; i++) {
                WriteIt(ElementArray, "E12_07", setV2Text("E12_07", TC.E12.E12_07[i]), TC.E12.E12_07[i])
            }
        };

        if (typeof TC.E12.E12_08 != 'undefined') {
            for (var i = 0; i < TC.E12.E12_08.length; i++) {
                WriteIt(ElementArray, "E12_08", setV2Text("E12_08", TC.E12.E12_08[i]), TC.E12.E12_08[i])
            }
        };

        if (typeof TC.E12.E12_09 != 'undefined') {
            for (var i = 0; i < TC.E12.E12_09.length; i++) {
                WriteIt(ElementArray, "E12_09", setV2Text("E12_09", TC.E12.E12_09[i]), TC.E12.E12_09[i])
            }
        };
        if (typeof TC.E12.E12_10 != 'undefined') {
            for (var i = 0; i < TC.E12.E12_10.length; i++) {
                WriteIt(ElementArray, "E12_10", setV2Text("E12_10", TC.E12.E12_10[i]), TC.E12.E12_10[i])
            }
        };




        if (typeof TC.E12.E12_11 != 'undefined') {
            WriteIt(ElementArray, "E12_11", setV2Text("E12_11", TC.E12.E12_11), TC.E12.E12_11)
        }
        if (typeof TC.E12.E12_12 != 'undefined') {
            WriteIt(ElementArray, "E12_12", setV2Text("E12_12", TC.E12.E12_12), TC.E12.E12_12)
        };
        if (typeof TC.E12.E12_13 != 'undefined') {
            WriteIt(ElementArray, "E12_13", setV2Text("E12_13", TC.E12.E12_13), TC.E12.E12_13)
        }
        if (typeof TC.E12.E12_14 != 'undefined') {
            WriteIt(ElementArray, "E12_14", setV2Text("E12_14", TC.E12.E12_14), TC.E12.E12_14)
        };
        if (typeof TC.E12.E12_15 != 'undefined') {
            WriteIt(ElementArray, "E12_15", setV2Text("E12_15", TC.E12.E12_15))
        }
        if (typeof TC.E12.E12_16 != 'undefined') {
            WriteIt(ElementArray, "E12_16", setV2Text("E12_16", TC.E12.E12_16))
        }
        if (typeof TC.E12.E12_17 != 'undefined') {
            WriteIt(ElementArray, "E12_17", setV2Text("E12_17", TC.E12.E12_17))
        }
        if (typeof TC.E12.E12_18 != 'undefined') {
            WriteIt(ElementArray, "E12_18", setV2Text("E12_18", TC.E12.E12_18))
        }
        if (typeof TC.E12.E12_19 != 'undefined') {
            for (var i = 0; i < TC.E12.E12_19.length; i++) {
                WriteIt(ElementArray, "E12_19", setV2Text("E12_19", TC.E12.E12_19[i]), TC.E12.E12_19[i])
            }
        };
        if (typeof TC.E12.E12_20 != 'undefined') {
            WriteIt(ElementArray, "E12_20", setV2Text("E12_20", TC.E12.E12_20), TC.E12.E12_20)
        }

    };

    //console.log("TC.E13")
    if (typeof TC.E13 != 'undefined') {
        WriteIt(ElementArray, "E13_01", "E13_01", TC.E13.E13_01)
    };


    //console.log("TC.E14")
    if (typeof TC.E14 != 'undefined') {
        if (typeof TC.E14[x] != 'undefined') {
            for (var x = 0; x < TC.E14[x].length; x++) {
                if (typeof TC.E14[x].E14_01 != 'undefined') {
                    WriteIt(ElementArray, "E14_01", setV2Text("E14_01", TC.E14[x].E14_01), TC.E14[x].E14_01)
                }
                if (typeof TC.E14[x].E14_02 != 'undefined') {
                    WriteIt(ElementArray, "E14_02", setV2Text("E14_02", TC.E14[x].E14_02), TC.E14[x].E14_02)
                }
                if (typeof TC.E14.E14_03 != 'undefined') {
                    for (var i = 0; i < E14.E14_03.length; i++) {
                        WriteIt(ElementArray, "E14_03", setV2Text("E14_03", TC.E14[x].E14_03[i]), TC.E14[x].E14_03[i])
                    }
                };
                if (typeof TC.E14[x].E14_04 != 'undefined') {
                    WriteIt(ElementArray, "E14_04", setV2Text("E14_04", TC.E14[x].E14_04), TC.E14[x].E14_04)
                }
                if (typeof TC.E14[x].E14_05 != 'undefined') {
                    WriteIt(ElementArray, "E14_05", setV2Text("E14_06", TC.E14[x].E14_05), TC.E14[x].E14_05)
                }
                if (typeof TC.E14[x].E14_06 != 'undefined') {
                    WriteIt(ElementArray, "E14_06", setV2Text("E14_06", TC.E14[x].E14_06), TC.E14[x].E14_06)
                }
                if (typeof TC.E14[x].E14_07 != 'undefined') {
                    WriteIt(ElementArray, "E14_07", setV2Text("E14_07", TC.E14[x].E14_07), TC.E14[x].E14_07)
                }
                if (typeof TC.E14[x].E14_08 != 'undefined') {
                    WriteIt(ElementArray, "E14_08", setV2Text("E14_08", TC.E14[x].E14_08), TC.E14[x].E14_08)
                }
                if (typeof TC.E14[x].E14_09 != 'undefined') {
                    WriteIt(ElementArray, "E14_09", setV2Text("E14_09", TC.E14[x].E14_09), TC.E14[x].E14_09)
                }
                if (typeof TC.E14[x].E14_10 != 'undefined') {
                    WriteIt(ElementArray, "E14_10", setV2Text("E14_10", TC.E14[x].E14_10), TC.E14[x].E14_10)
                }
                if (typeof TC.E14[x].E14_11 != 'undefined') {
                    WriteIt(ElementArray, "E14_11", setV2Text("E14_11", TC.E14[x].E14_11), TC.E14[x].E14_11)
                }
                if (typeof TC.E14[x].E14_12 != 'undefined') {
                    WriteIt(ElementArray, "E14_12", setV2Text("E14_12", TC.E14[x].E14_12), TC.E14[x].E14_12)
                }
                if (typeof TC.E14[x].E14_13 != 'undefined') {
                    WriteIt(ElementArray, "E14_13", setV2Text("E14_13", TC.E14[x].E14_13), TC.E14[x].E14_13)
                }
                if (typeof TC.E14[x].E14_14 != 'undefined') {
                    WriteIt(ElementArray, "E14_14", setV2Text("E14_14", TC.E14[x].E14_14), TC.E14[x].E14_14)
                }
                if (typeof TC.E14[x].E14_15 != 'undefined') {
                    WriteIt(ElementArray, "E14_15", setV2Text("E14_15", TC.E14[x].E14_15), TC.E14[x].E14_15)
                }
                if (typeof TC.E14[x].E14_16 != 'undefined') {
                    WriteIt(ElementArray, "E14_16", setV2Text("E14_16", TC.E14[x].E14_16), TC.E14[x].E14_16)
                }
                if (typeof TC.E14[x].E14_17 != 'undefined') {
                    WriteIt(ElementArray, "E14_17", setV2Text("E14_17", TC.E14[x].E14_17), TC.E14[x].E14_17)
                }
                if (typeof TC.E14[x].E14_18 != 'undefined') {
                    WriteIt(ElementArray, "E14_18", setV2Text("E14_18", TC.E14[x].E14_18), TC.E14[x].E14_18)
                }
                if (typeof TC.E14[x].E14_19 != 'undefined') {
                    WriteIt(ElementArray, "E14_19", setV2Text("E14_19", TC.E14[x].E14_19), TC.E14[x].E14_19)
                }
                if (typeof TC.E14[x].E14_20 != 'undefined') {
                    WriteIt(ElementArray, "E14_20", setV2Text("E14_20", TC.E14[x].E14_20), TC.E14[x].E14_20)
                }
                if (typeof TC.E14[x].E14_21 != 'undefined') {
                    WriteIt(ElementArray, "E14_21", setV2Text("E14_21", TC.E14[x].E14_21), TC.E14[x].E14_21)
                }
                if (typeof TC.E14[x].E14_22 != 'undefined') {
                    WriteIt(ElementArray, "E14_22", setV2Text("E14_22", TC.E14[x].E14_22), TC.E14[x].E14_22)
                }
                if (typeof TC.E14[x].E14_23 != 'undefined') {
                    WriteIt(ElementArray, "E14_23", setV2Text("E14_23", TC.E14[x].E14_23), TC.E14[x].E14_23)
                }
                if (typeof TC.E14[x].E14_24 != 'undefined') {
                    WriteIt(ElementArray, "E14_24", setV2Text("E14_24", TC.E14[x].E14_24), TC.E14[x].E14_24)
                }
                if (typeof TC.E14[x].E14_25 != 'undefined') {
                    WriteIt(ElementArray, "E14_25", setV2Text("E14_25", TC.E14[x].E14_25), TC.E14[x].E14_25)
                }
                if (typeof TC.E14[x].E14_26 != 'undefined') {
                    WriteIt(ElementArray, "E14_26", setV2Text("E14_26", TC.E14[x].E14_26), TC.E14[x].E14_26)
                }
                if (typeof TC.E14[x].E14_27 != 'undefined') {
                    WriteIt(ElementArray, "E14_27", setV2Text("E14_27", TC.E14[x].E14_27), TC.E14[x].E14_27)
                }
                if (typeof TC.E14[x].E14_28 != 'undefined') {
                    WriteIt(ElementArray, "E14_28", setV2Text("E14_28", TC.E14[x].E14_28), TC.E14[x].E14_28)
                }
            }
        }
    };

    //console.log("TC.E15")
    if (typeof TC.E15 != 'undefined') {
        if (typeof TC.E15.E15_01 != 'undefined') {
            for (var i = 0; i < TC.E15.E15_01.length; i++) {
                WriteIt(ElementArray, "E15_01", setV2Text("E15_01", TC.E15.E15_01[i]), TC.E15.E15_01[i])
            }
        };
        if (typeof TC.E15.E15_02 != 'undefined') {
            for (var i = 0; i < TC.E15.E15_02.length; i++) {
                WriteIt(ElementArray, "E15_02", setV2Text("E15_02", TC.E15.E15_02[i]), TC.E15.E15_02[i])
            }
        };
        if (typeof TC.E15.E15_03 != 'undefined') {
            for (var i = 0; i < TC.E15.E15_03.length; i++) {
                WriteIt(ElementArray, "E15_03", setV2Text("E15_03", TC.E15.E15_03[i]), TC.E15.E15_03[i])
            }
        };
        if (typeof TC.E15.E15_04 != 'undefined') {
            for (var i = 0; i < TC.E15.E15_04.length; i++) {
                WriteIt(ElementArray, "E15_04", setV2Text("E15_04", TC.E15.E15_04[i]), TC.E15.E15_04[i])
            }
        };

        if (typeof TC.E15.E15_05 != 'undefined') {
            for (var i = 0; i < TC.E15.E15_05.length; i++) {
                WriteIt(ElementArray, "E15_05", setV2Text("E15_05", TC.E15.E15_05[i]), TC.E15.E15_05[i])
            }
        };
        if (typeof TC.E15.E15_06 != 'undefined') {
            for (var i = 0; i < TC.E15.E15_06.length; i++) {
                WriteIt(ElementArray, "E15_06", setV2Text("E15_06", TC.E15.E15_06[i]), TC.E15.E15_06[i])
            }
        };
        if (typeof TC.E15.E15_07 != 'undefined') {
            for (var i = 0; i < TC.E15.E15_07.length; i++) {
                WriteIt(ElementArray, "E15_07", setV2Text("E15_07", TC.E15.E15_07[i]), TC.E15.E15_07[i])
            }
        };

        if (typeof TC.E15.E15_08 != 'undefined') {
            for (var i = 0; i < TC.E15.E15_08.length; i++) {
                WriteIt(ElementArray, "E15_08", setV2Text("E15_08", TC.E15.E15_08[i]), TC.E15.E15_08[i])
            }
        };

        if (typeof TC.E15.E15_09 != 'undefined') {
            for (var i = 0; i < TC.E15.E15_09.length; i++) {
                WriteIt(ElementArray, "E15_09", setV2Text("E15_09", TC.E15.E15_09[i]), TC.E15.E15_09[i])
            }
        };
        if (typeof TC.E15.E15_10 != 'undefined') {
            for (var i = 0; i < TC.E15.E15_10.length; i++) {
                WriteIt(ElementArray, "E15_10", setV2Text("E15_10", TC.E15.E15_10[i]), TC.E15.E15_10[i])
            }
        };
        if (typeof TC.E15.E15_11 != 'undefined') {
            for (var i = 0; i < TC.E15.E15_11.length; i++) {
                WriteIt(ElementArray, "E15_11", setV2Text("E15_11", TC.E15.E15_11[i]), TC.E15.E15_11[i])
            }
        }
    };

    //console.log("TC.E16")
    if (typeof TC.E16 != 'undefined') {
        if (typeof TC.E16.E16_01 != 'undefined') {
            WriteIt(ElementArray, "E16_01", TC.E16.E16_01, TC.E16.E16_01)
        }
        if (typeof TC.E16.E16_02 != 'undefined') {
            WriteIt(ElementArray, "E16_02", setV2Text("E16_02", TC.E16.E16_02), TC.E16.E16_02)
        }


        if (typeof TC.E16.E16_00_0 != 'undefined') {
            for (var x = 0; x < TC.E16.E16_00_0.length; x++) {
                if (typeof TC.E16.E16_00_0[x].E16_03 != 'undefined') {
                    WriteIt(ElementArray, "E16_03", setV2Text("E16_03", TC.E16.E16_00_0[x].E16_03), TC.E16.E16_00_0[x].E16_03)
                };

                if (typeof TC.E16.E16_00_0[x].E16_04 != 'undefined') {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_04.length; i++) {
                        WriteIt(ElementArray, "E16_04", setV2Text("E16_04", TC.E16.E16_00_0[x].E16_04[i]), TC.E16.E16_00_0[x].E16_04[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_05 != 'undefined') {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_05.length; i++) {
                        WriteIt(ElementArray, "E16_05", setV2Text("E16_05", TC.E16.E16_00_0[x].E16_05[i]), TC.E16.E16_00_0[x].E16_05[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_06 != 'undefined') {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_06.length; i++) {
                        WriteIt(ElementArray, "E16_06", setV2Text("E16_06", TC.E16.E16_00_0[x].E16_06[i]), TC.E16.E16_00_0[x].E16_06[i])
                    }
                };

                if (typeof TC.E16.E16_00_0[x].E16_07 != 'undefined') {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_07.length; i++) {
                        WriteIt(ElementArray, "E16_07", setV2Text("E16_07", TC.E16.E16_00_0[x].E16_07[i]), TC.E16.E16_00_0[x].E16_07[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_08 != 'undefined') {
                    for (var i = 0; i < TC.E16.E16_00_0[x].length; i++) {
                        WriteIt(ElementArray, "E16_08", setV2Text("E16_08", TC.E16.E16_00_0[x].E16_08[i]), TC.E16.E16_00_0[x].E16_08[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_09 != 'undefined') {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_09.length; i++) {
                        WriteIt(ElementArray, "E16_09", setV2Text("E16_09", TC.E16.E16_00_0[x].E16_09[i]), TC.E16.E16_00_0[x].E16_09[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_10 != 'undefined') {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_10.length; i++) {
                        WriteIt(ElementArray, "E16_10", setV2Text("E16_10", TC.E16.E16_00_0[x].E16_10[i]), TC.E16.E16_00_0[x].E16_10[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_11 != 'undefined') {
                    for (var i = 0; i < TC.E16.E16_00_0[x].length; i++) {
                        WriteIt(ElementArray, "E16_11", setV2Text("E16_11", TC.E16.E16_00_0[x].E16_11[i]), TC.E16.E16_00_0[x].E16_11[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_12 != 'undefined') {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_12.length; i++) {
                        WriteIt(ElementArray, "E16_12", setV2Text("E16_12", TC.E16.E16_00_0[x].E16_12[i]), TC.E16.E16_00_0[x].E16_12[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_13 != 'undefined') {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_13.length; i++) {
                        WriteIt(ElementArray, "E16_13", setV2Text("E16_13", TC.E16.E16_00_0[x].E16_13[i]), TC.E16.E16_00_0[x].E16_13[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_14 != 'undefined') {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_14.length; i++) {
                        WriteIt(ElementArray, "E16_14", setV2Text("E16_14", TC.E16.E16_00_0[x].E16_14[i]), TC.E16.E16_00_0[x].E16_14[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_15 != 'undefined') {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_15.length; i++) {
                        WriteIt(ElementArray, "E16_15", setV2Text("E16_15", TC.E16.E16_00_0[x].E16_15[i]), TC.E16.E16_00_0[x].E16_15[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_16 != 'undefined') {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_16.length; i++) {
                        WriteIt(ElementArray, "E16_16", setV2Text("E16_16", TC.E16.E16_00_0[x].E16_16[i]), TC.E16.E16_00_0[x].E16_16[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_17 != 'undefined') {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_17.length; i++) {
                        WriteIt(ElementArray, "E16_17", setV2Text("E16_17", TC.E16.E16_00_0[x].E16_17[i]), TC.E16.E16_00_0[x].E16_17[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_18 != 'undefined') {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_18.length; i++) {
                        WriteIt(ElementArray, "E16_18", setV2Text("E16_18", TC.E16.E16_00_0[x].E16_18[i]), TC.E16.E16_00_0[x].E16_18[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_19 != 'undefined') {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_19.length; i++) {
                        WriteIt(ElementArray, "E16_19", setV2Text("E16_19", TC.E16.E16_00_0[x].E16_19[i]), TC.E16.E16_00_0[x].E16_19[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_20 != 'undefined') {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_20.length; i++) {
                        WriteIt(ElementArray, "E16_20", setV2Text("E16_20", TC.E16.E16_00_0[x].E16_20[i]), TC.E16.E16_00_0[x].E16_20[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_21 != 'undefined') {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_21.length; i++) {
                        WriteIt(ElementArray, "E16_21", setV2Text("E16_21", TC.E16.E16_00_0[x].E16_21[i]), TC.E16.E16_00_0[x].E16_21[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_22 != 'undefined') {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_22.length; i++) {
                        WriteIt(ElementArray, "E16_22", setV2Text("E16_22", TC.E16.E16_00_0[x].E16_22[i]), TC.E16.E16_00_0[x].E16_22[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_23 != 'undefined') {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_23.length; i++) {
                        WriteIt(ElementArray, "E16_23", setV2Text("E16_23", TC.E16.E16_00_0[x].E16_23[i]), TC.E16.E16_00_0[x].E16_23[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_24 != 'undefined') {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_24.length; i++) {
                        WriteIt(ElementArray, "E16_24", setV2Text("E16_24", TC.E16.E16_00_0[x].E16_24[i]), TC.E16.E16_00_0[x].E16_24[i])
                    }
                }
            }
        }
    };

    //console.log("TC.E17")
    if (typeof TC.E17 != 'undefined') {
        if (typeof TC.E17.E17_01 != 'undefined') {
            for (var i = 0; i < TC.E17.E17_01.length; i++) {
                WriteIt(ElementArray, "E17_01", setV2Text("E17_01", TC.E17.E17_01[i]))
            }
        }
    };

    //console.log("TC.E18")
    if (typeof TC.E18 != 'undefined') {
        for (var x = 0; x < TC.E18.length; x++) {
            var obj = {};
            obj = TC.E18[x];
            if (typeof obj.E18_01 != 'undefined') {
                WriteIt(ElementArray, "E18_01", setV2Text("E18_01", obj.E18_01), obj.E18_01)
            }
            if (typeof obj.E18_02 != 'undefined') {
                WriteIt(ElementArray, "E18_02", setV2Text("E18_02", obj.E18_02), obj.E18_02)
            }
            if (typeof obj.E18_03 != 'undefined') {
                WriteIt(ElementArray, "E18_03", setV2Text("E18_03", obj.E18_03), obj.E18_03)
            }
            if (typeof obj.E18_04 != 'undefined') {
                WriteIt(ElementArray, "E18_04", setV2Text("E18_04", obj.E18_04), obj.E18_04)
            }
            if (typeof obj.E18_05 != 'undefined') {
                WriteIt(ElementArray, "E18_05", setV2Text("E18_05", obj.E18_05), obj.E18_05)
            }
            if (typeof obj.E18_06 != 'undefined') {
                WriteIt(ElementArray, "E18_06", setV2Text("E18_06", obj.E18_06), obj.E18_06)
            }
            if (typeof obj.E18_07 != 'undefined') {
                WriteIt(ElementArray, "E18_07", setV2Text("E18_07", obj.E18_07), obj.E18_07)
                if (typeof obj.E18_01 != 'undefined') {
                    if (typeof TC.E18.E18_08 != 'undefined') {
                        for (var i = 0; i < E18.E18_08.length; i++) {
                            WriteIt(ElementArray, "E18_08", setV2Text("E18_08", obj.E18_08[i]), obj.E18_08[i])
                        }
                    };
                    if (typeof obj.E18_09 != 'undefined') {
                        WriteIt(ElementArray, "E18_09", setV2Text("E18_09", obj.E18_09), obj.E18_09)
                    }
                    if (typeof obj.E18_10 != 'undefined') {
                        WriteIt(ElementArray, "E18_10", setV2Text("E18_10", obj.E18_10), obj.E18_10)
                    }
                    if (typeof obj.E18_11 != 'undefined') {
                        WriteIt(ElementArray, "E18_11", setV2Text("E18_11", obj.E18_11), obj.E18_11)
                    }
                }
            }
        }
    };

    //console.log("TC.E19")
    if (typeof TC.E19 != 'undefined') {
        for (var x = 0; x < TC.E19.E19_01_0.length; x++) {
            var obj = {};
            obj = TC.E19.E19_01_0[x];

            if (typeof obj.E19_01 != 'undefined') {
                WriteIt(ElementArray, "E19_01", setV2Text("E19_01", obj.E19_01), obj.E19_01)
            }
            if (typeof obj.E19_02 != 'undefined') {
                WriteIt(ElementArray, "E19_02", setV2Text("E19_02", obj.E19_02), obj.E19_02)
            }
            if (typeof obj.E19_03 != 'undefined') {
                WriteIt(ElementArray, "E19_03", setV2Text("E19_03", obj.E19_03), obj.E19_03)
            }
            if (typeof obj.E19_04 != 'undefined') {
                WriteIt(ElementArray, "E19_04", setV2Text("E19_04", obj.E19_04), obj.E19_04)
            }
            if (typeof obj.E19_05 != 'undefined') {
                WriteIt(ElementArray, "E19_05", setV2Text("E19_05", obj.E19_05), obj.E19_05)
            }
            if (typeof obj.E19_06 != 'undefined') {
                WriteIt(ElementArray, "E19_06", setV2Text("E19_06", obj.E19_06), obj.E19_06)
            }
            if (typeof obj.E19_07 != 'undefined') {
                for (var i = 0; i < obj.E19_07.length; i++)
                    WriteIt(ElementArray, "E19_07", setV2Text("E19_07", obj.E19_07[i]), obj.E19_07[i])
            }
        };
        if (typeof obj.E19_08 != 'undefined') {
            WriteIt(ElementArray, "E19_08", setV2Text("E19_08", obj.E19_08), obj.E19_08)
        }
        if (typeof obj.E19_09 != 'undefined') {
            WriteIt(ElementArray, "E19_09", setV2Text("E19_09", obj.E19_09), obj.E19_09)
        }
        if (typeof obj.E19_10 != 'undefined') {
            WriteIt(ElementArray, "E19_10", setV2Text("E19_10", obj.E19_10), obj.E19_10)
        }
        if (typeof obj.E19_11 != 'undefined') {
            WriteIt(ElementArray, "E19_11", setV2Text("E19_11", obj.E19_11), obj.E19_11)
        }
        if (typeof obj.E19_12 != 'undefined') {
            for (var i = 0; i < obj.E19_12.length; i++) {
                WriteIt(ElementArray, "E19_12", setV2Text("E19_12", obj.E19_12[i]), obj.E19_12[i])
            }
        };
        if (typeof obj.E19_13 != 'undefined') {
            for (var i = 0; i < obj.E19_13.length; i++) {
                WriteIt(ElementArray, "E19_13", setV2Text("E19_13", obj.E19_13[i]), obj.E19_13[i])
            }
        };
        if (typeof obj.E19_14 != 'undefined') {
            for (var i = 0; i < obj.E19_14.length; i++) {
                WriteIt(ElementArray, "E19_14", setV2Text("E19_14", obj.E19_14[i]), obj.E19_14[i])
            }
        }
    };


    //console.log("TC.E20")
    if (typeof TC.E20 != 'undefined') {
        if (typeof TC.E20.E20_01 != 'undefined') {
            WriteIt(ElementArray, "E20_01", TC.E20.E20_01)
        };

        if (typeof TC.E20.E20_02 != 'undefined') {
            WriteIt(ElementArray, "E20_02", setV2Text("E20_02", TC.E20.E20_02), TC.E20.E20_02)
        }
        if (typeof TC.E20.E20_03 != 'undefined') {
            WriteIt(ElementArray, "E20_03", setV2Text("E20_03", TC.E20.E20_03), TC.E20.E20_03)
        }
        if (typeof TC.E20.E20_04 != 'undefined') {
            WriteIt(ElementArray, "E20_04", setV2Text("E20_04", TC.E20.E20_04), TC.E20.E20_04)
        }
        if (typeof TC.E20.E20_05 != 'undefined') {
            WriteIt(ElementArray, "E20_05", setV2Text("E20_05", TC.E20.E20_05), TC.E20.E20_05)
        }
        if (typeof TC.E20.E20_06 != 'undefined') {
            WriteIt(ElementArray, "E20_06", setV2Text("E20_06", TC.E20.E20_06), TC.E20.E20_06)
        }
        if (typeof TC.E20.E20_07 != 'undefined') {
            WriteIt(ElementArray, "E20_07", setV2Text("E20_07", TC.E20.E20_07), TC.E20.E20_07)
        }
        if (typeof TC.E20.E20_08 != 'undefined') {
            WriteIt(ElementArray, "E20_08", setV2Text("E20_08", TC.E20.E20_08), TC.E20.E20_08)
        }
        if (typeof TC.E20.E20_09 != 'undefined') {
            WriteIt(ElementArray, "E20_09", setV2Text("E20_09", TC.E20.E20_09), TC.E20.E20_09)
        }
        if (typeof TC.E20.E20_10 != 'undefined') {
            WriteIt(ElementArray, "E20_10", setV2Text("E20_10", TC.E20.E20_10), TC.E20.E20_10)
        }
        if (typeof TC.E20.E20_11 != 'undefined') {
            WriteIt(ElementArray, "E20_11", setV2Text("E20_11", TC.E20.E20_11), TC.E20.E20_11)
        }
        if (typeof TC.E20.E20_12 != 'undefined') {
            WriteIt(ElementArray, "E20_12", setV2Text("E20_12", TC.E20.E20_12), TC.E20.E20_12)
        }
        if (typeof TC.E20.E20_13 != 'undefined') {
            WriteIt(ElementArray, "E20_13", setV2Text("E20_13", TC.E20.E20_13), TC.E20.E20_13)
        }
        if (typeof TC.E20.E20_14 != 'undefined') {
            WriteIt(ElementArray, "E20_14", setV2Text("E20_14", TC.E20.E20_14), TC.E20.E20_14)
        }
        if (typeof TC.E20.E20_15 != 'undefined') {
            WriteIt(ElementArray, "E20_15", setV2Text("E20_15", TC.E20.E20_15), TC.E20.E20_15)
        }
        if (typeof TC.E20.E20_16 != 'undefined') {
            WriteIt(ElementArray, "E20_16", setV2Text("E20_16", TC.E20.E20_16), TC.E20.E20_15)
        }
        if (typeof TC.E20.E20_17 != 'undefined') {
            WriteIt(ElementArray, "E20_17", setV2Text("E20_17", TC.E20.E20_17), TC.E20.E20_17)
        };

    };

    //console.log("TC.E21")
    if (typeof TC.E21 != 'undefined') {
        if (typeof TC.E21.E21_01 != 'undefined') {
            WriteIt(ElementArray, "E21_01", setV2Text("E21_01", TC.E21.E21_01), TC.E21.E21_01)
        }
        if (typeof TC.E21.E21_02 != 'undefined') {
            WriteIt(ElementArray, "E21_02", setV2Text("E21_02", TC.E21.E21_02), TC.E21.E21_02)
        }
        if (typeof TC.E21.E21_03 != 'undefined') {
            WriteIt(ElementArray, "E21_03", setV2Text("E21_03", TC.E21.E21_03), TC.E21.E21_03)
        }
        if (typeof TC.E21.E21_04 != 'undefined') {
            WriteIt(ElementArray, "E21_04", setV2Text("E21_04", TC.E21.E21_04), TC.E21.E21_04)
        }
        if (typeof TC.E21.E21_05 != 'undefined') {
            WriteIt(ElementArray, "E21_05", setV2Text("E21_05", TC.E21.E21_05), TC.E21.E21_05)
        }
        if (typeof TC.E21.E21_06 != 'undefined') {
            WriteIt(ElementArray, "E21_06", setV2Text("E21_06", TC.E21.E21_06), TC.E21.E21_06)
        }
        if (typeof TC.E21.E21_07 != 'undefined') {
            WriteIt(ElementArray, "E21_07", setV2Text("E21_07", TC.E21.E21_07), TC.E21.E21_07)
        }
        if (typeof TC.E21.E21_08 != 'undefined') {
            WriteIt(ElementArray, "E21_08", setV2Text("E21_08", TC.E21.E21_08), TC.E21.E21_08)
        }
        if (typeof TC.E21.E21_09 != 'undefined') {
            WriteIt(ElementArray, "E21_09", setV2Text("E21_09", TC.E21.E21_09), TC.E21.E21_09)
        }
        if (typeof TC.E21.E21_10 != 'undefined') {
            WriteIt(ElementArray, "E21_10", setV2Text("E21_10", TC.E21.E21_10), TC.E21.E21_10)
        }
        if (typeof TC.E21.E21_11 != 'undefined') {
            WriteIt(ElementArray, "E21_11", setV2Text("E21_11", TC.E21.E21_11), TC.E21.E21_11)
        }
        if (typeof TC.E21.E21_12 != 'undefined') {
            WriteIt(ElementArray, "E21_12", setV2Text("E21_12", TC.E21.E21_12), TC.E21.E21_12)
        }
        if (typeof TC.E21.E21_13 != 'undefined') {
            WriteIt(ElementArray, "E21_13", setV2Text("E21_13", TC.E21.E21_13), TC.E21.E21_13)
        }
        if (typeof TC.E21.E21_14 != 'undefined') {
            WriteIt(ElementArray, "E21_14", setV2Text("E21_14", TC.E21.E21_14), TC.E21.E21_14)
        }
        if (typeof TC.E21.E21_15 != 'undefined') {
            WriteIt(ElementArray, "E21_15", setV2Text("E21_15", TC.E21.E21_15), TC.E21.E21_15)
        }
        if (typeof TC.E21.E21_16 != 'undefined') {
            WriteIt(ElementArray, "E21_16", setV2Text("E21_16", TC.E21.E21_16), TC.E21.E21_16)
        }
        if (typeof TC.E21.E21_17 != 'undefined') {
            WriteIt(ElementArray, "E21_17", setV2Text("E21_17", TC.E21.E21_17), TC.E21.E21_17)
        }
        if (typeof TC.E21.E21_18 != 'undefined') {
            WriteIt(ElementArray, "E21_18", setV2Text("E21_18", TC.E21.E21_18), TC.E21.E21_18)
        }
        if (typeof TC.E21.E21_19 != 'undefined') {
            WriteIt(ElementArray, "E21_19", setV2Text("E21_19", TC.E21.E21_19), TC.E21.E21_19)
        }
        if (typeof TC.E21.E21_20 != 'undefined') {
            WriteIt(ElementArray, "E21_20", setV2Text("E21_20", TC.E21.E21_20), TC.E21.E21_20)
        }
    };

    //console.log("TC.E22")
    if (typeof TC.E22 != 'undefined') {
        if (typeof TC.E22.E22_01 != 'undefined') {
            WriteIt(ElementArray, "E22_01", setV2Text("E22_01", TC.E22.E22_01), TC.E22.E22_01)
        }
        if (typeof TC.E22.E22_02 != 'undefined') {
            WriteIt(ElementArray, "E22_02", setV2Text("E22_02", TC.E22.E22_02), TC.E22.E22_02)
        }
        if (typeof TC.E22.E22_03 != 'undefined') {
            WriteIt(ElementArray, "E22_03", setV2Text("E22_03", TC.E22.E22_03), TC.E22.E22_03)
        }
        if (typeof TC.E22.E22_04 != 'undefined') {
            WriteIt(ElementArray, "E22_04", setV2Text("E22_04", TC.E22.E22_04), TC.E22.E22_04)
        }
        if (typeof TC.E22.E22_05 != 'undefined') {
            WriteIt(ElementArray, "E22_05", setV2Text("E22_05", TC.E22.E22_05), TC.E22.E22_05)
        }
        if (typeof TC.E22.E22_06 != 'undefined') {
            WriteIt(ElementArray, "E22_06", setV2Text("E22_06", TC.E22.E22_06), TC.E22.E22_06)
        }
    };

    //console.log("TC.E23")
    if (typeof TC.E23 != 'undefined') {
        WriteIt(ElementArray, "E23_01", setV2Text("E23_01", TC.E23.E23_01), TC.E23.E23_01)

        if (typeof TC.E23.E23_02 != 'undefined') {
            for (var i = 0; i < TC.E23.E23_02.length; i++) {
                WriteIt(ElementArray, "E23_02", setV2Text("E23_02", TC.E23.E23_02[i]), TC.E23.E23_02[i])
            }
        };
        if (typeof TC.E23.E23_03 != 'undefined') {
            for (var i = 0; i < TC.E23.E23_03.length; i++) {
                WriteIt(ElementArray, "E23_03", setV2Text("E23_03", TC.E23.E23_03[i]), TC.E23.E23_03[i])
            }
        };
        if (typeof TC.E23.E23_04 != 'undefined') {
            for (var i = 0; i < TC.E23.E23_04.length; i++) {
                WriteIt(ElementArray, "E23_04", setV2Text("E23_04", TC.E23.E23_04[i]), TC.E23.E23_04[i])
            }
        };
        if (typeof TC.E23.E23_05 != 'undefined') {
            WriteIt(ElementArray, "E23_05", setV2Text("E23_05", TC.E23.E23_05), TC.E23.E23_05)
        }
        if (typeof TC.E23.E23_06 != 'undefined') {
            for (var i = 0; i < TC.E23.E23_06.length; i++) {
                WriteIt(ElementArray, "E23_06", setV2Text("E23_06", TC.E23.E23_06[i]), TC.E23.E23_06[i])
            }
        };
        if (typeof TC.E23.E23_07 != 'undefined') {
            for (var i = 0; i < TC.E23.E23_07.length; i++) {
                WriteIt(ElementArray, "E23_07", setV2Text("E23_07", TC.E23.E23_07[i]), TC.E23.E23_07[i])
            }
        };
        if (typeof TC.E23.E23_08 != 'undefined') {
            WriteIt(ElementArray, "E23_08", setV2Text("E23_08", TC.E23.E23_08), TC.E23.E23_08)
        }
        if (typeof TC.E23.E23_09 != 'undefined') {
            WriteIt(ElementArray, "E23_09", setV2Text("E23_08", TC.E23.E23_09), TC.E23.E23_09)
        }
        if (typeof TC.E23.E23_10 != 'undefined') {
            WriteIt(ElementArray, "E23_10", TC.E23.E23_10)
        }
        if (typeof TC.E23.E23_11 != 'undefined') {
            WriteIt(ElementArray, "E23_11", setV2Text("E23_11", TC.E23.E23_11), TC.E23.E23_11)
        }
    };



    //}

    return ElementArray
};
function WriteIt(ElementArray, Element, Value, codeVal) {
    var elName = val2Text["" + Element + ""]
    /*if (typeof Value == 'undefined') {
        ElementArray.push("" + "\t" + Element + "\t" + elName + "\t" + "" + "\t" + "")
    }
    else {
        if (typeof codeVal != 'undefined') {
            ElementArray.push("" + "\t" + Element + "\t" + elName + "\t" + Value + "\t" + codeVal)
        }
        else
        {
            ElementArray.push("" + "\t" + Element + "\t" + elName + "\t" + Value + "\t" + "")
        }
    };
    */


    if (typeof Value == 'undefined') {
        ElementArray.push(Element + "|" + elName + "|" + "" + "|" + "")
    }
    else {
        if (Value.length > 0) {
            if (Value.substring(0, 1) == '-') {
                var Value = setNull(Value)
            }
        };

        if (typeof codeVal != 'undefined') {
            ElementArray.push(Element + "|" + elName + "|" + Value + "|" + codeVal)
        }
        else {
            ElementArray.push(Element + "|" + elName + "|" + Value + "|" + "")
        }
    };

};
function setNull(value) {
    var _retv = "";
    switch (value) {
        case "-5":
            _retv = "Not Available"
            break;
        case "-10":
            _retv = "Not Known"
            break;
        case "-15":
            _retv = "Not Reporting"
            break;
        case "-20":
            _retv = "Not Recorded"
            break;

        case "-25":
            _retv = "Not Applicable"
            break;
    }
    return _retv
};
