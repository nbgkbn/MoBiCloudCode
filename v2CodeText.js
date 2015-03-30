setV2CodeText = function (TC) {
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
            WriteIt(ElementArray, "E02_11" , TC.E02.E02_11)
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
    if (typeof TC.E08 != 'undefined')
    {
        for (var i = 0; i < TC.E08.E08_01.length; i++)
        {
            WriteIt(ElementArray, "E08_01", setV2Text("E08_01", TC.E08.E08_01[i]), TC.E08.E08_01[i])
        };
        for (var i = 0; i < TC.E08.E08_02.length; i++)
        {
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
            WriteIt(ElementArray, "E09_13",  TC.E09.E09_13, TC.E09.E09_13)
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
        
        if (typeof TC.E10.E10_03 != 'undefined')
        {
            for (var i = 0; i < TC.E10.E10_03.length; i++)
            {
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
    if (typeof TC.E11 != 'undefined')
    {
        
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
        if (typeof TC.E12.E12_12 != 'undefined')
        {
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
    if (typeof TC.E16 != 'undefined')
    {
        if (typeof TC.E16.E16_01 != 'undefined')
        {
            WriteIt(ElementArray, "E16_01", TC.E16.E16_01, TC.E16.E16_01)
        }
        if (typeof TC.E16.E16_02 != 'undefined')
        {
            WriteIt(ElementArray, "E16_02", setV2Text("E16_02", TC.E16.E16_02), TC.E16.E16_02)
        }


        if (typeof TC.E16.E16_00_0 != 'undefined')
        {
            for (var x = 0; x < TC.E16.E16_00_0.length; x++)
            {
                if (typeof TC.E16.E16_00_0[x].E16_03 != 'undefined')
                {
                    WriteIt(ElementArray, "E16_03", setV2Text("E16_03", TC.E16.E16_00_0[x].E16_03), TC.E16.E16_00_0[x].E16_03)
                };

                if (typeof TC.E16.E16_00_0[x].E16_04 != 'undefined')
                {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_04.length; i++)
                    {
                        WriteIt(ElementArray, "E16_04", setV2Text("E16_04", TC.E16.E16_00_0[x].E16_04[i]), TC.E16.E16_00_0[x].E16_04[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_05 != 'undefined')
                {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_05.length; i++)
                    {
                        WriteIt(ElementArray, "E16_05", setV2Text("E16_05", TC.E16.E16_00_0[x].E16_05[i]), TC.E16.E16_00_0[x].E16_05[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_06 != 'undefined')
                {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_06.length; i++)
                    {
                        WriteIt(ElementArray, "E16_06", setV2Text("E16_06", TC.E16.E16_00_0[x].E16_06[i]), TC.E16.E16_00_0[x].E16_06[i])
                    }
                };

                if (typeof TC.E16.E16_00_0[x].E16_07 != 'undefined')
                {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_07.length; i++)
                    {
                        WriteIt(ElementArray, "E16_07", setV2Text("E16_07", TC.E16.E16_00_0[x].E16_07[i]), TC.E16.E16_00_0[x].E16_07[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_08 != 'undefined')
                {
                    for (var i = 0; i < TC.E16.E16_00_0[x].length; i++)
                    {
                        WriteIt(ElementArray, "E16_08", setV2Text("E16_08", TC.E16.E16_00_0[x].E16_08[i]), TC.E16.E16_00_0[x].E16_08[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_09 != 'undefined')
                {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_09.length; i++)
                    {
                        WriteIt(ElementArray, "E16_09", setV2Text("E16_09", TC.E16.E16_00_0[x].E16_09[i]), TC.E16.E16_00_0[x].E16_09[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_10 != 'undefined')
                {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_10.length; i++)
                    {
                        WriteIt(ElementArray, "E16_10", setV2Text("E16_10", TC.E16.E16_00_0[x].E16_10[i]), TC.E16.E16_00_0[x].E16_10[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_11 != 'undefined')
                {
                    for (var i = 0; i < TC.E16.E16_00_0[x].length; i++)
                    {
                        WriteIt(ElementArray, "E16_11", setV2Text("E16_11", TC.E16.E16_00_0[x].E16_11[i]), TC.E16.E16_00_0[x].E16_11[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_12 != 'undefined')
                {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_12.length; i++)
                    {
                        WriteIt(ElementArray, "E16_12", setV2Text("E16_12", TC.E16.E16_00_0[x].E16_12[i]), TC.E16.E16_00_0[x].E16_12[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_13 != 'undefined')
                {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_13.length; i++)
                    {
                        WriteIt(ElementArray, "E16_13", setV2Text("E16_13", TC.E16.E16_00_0[x].E16_13[i]), TC.E16.E16_00_0[x].E16_13[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_14 != 'undefined')
                {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_14.length; i++)
                    {
                        WriteIt(ElementArray, "E16_14", setV2Text("E16_14", TC.E16.E16_00_0[x].E16_14[i]), TC.E16.E16_00_0[x].E16_14[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_15 != 'undefined')
                {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_15.length; i++)
                    {
                        WriteIt(ElementArray, "E16_15", setV2Text("E16_15", TC.E16.E16_00_0[x].E16_15[i]), TC.E16.E16_00_0[x].E16_15[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_16 != 'undefined')
                {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_16.length; i++)
                    {
                        WriteIt(ElementArray, "E16_16", setV2Text("E16_16", TC.E16.E16_00_0[x].E16_16[i]), TC.E16.E16_00_0[x].E16_16[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_17 != 'undefined')
                {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_17.length; i++)
                    {
                        WriteIt(ElementArray, "E16_17", setV2Text("E16_17", TC.E16.E16_00_0[x].E16_17[i]), TC.E16.E16_00_0[x].E16_17[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_18 != 'undefined')
                {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_18.length; i++)
                    {
                        WriteIt(ElementArray, "E16_18", setV2Text("E16_18", TC.E16.E16_00_0[x].E16_18[i]), TC.E16.E16_00_0[x].E16_18[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_19 != 'undefined')
                {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_19.length; i++)
                    {
                        WriteIt(ElementArray, "E16_19", setV2Text("E16_19", TC.E16.E16_00_0[x].E16_19[i]), TC.E16.E16_00_0[x].E16_19[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_20 != 'undefined')
                {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_20.length; i++)
                    {
                        WriteIt(ElementArray, "E16_20", setV2Text("E16_20", TC.E16.E16_00_0[x].E16_20[i]), TC.E16.E16_00_0[x].E16_20[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_21 != 'undefined')
                {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_21.length; i++)
                    {
                        WriteIt(ElementArray, "E16_21", setV2Text("E16_21", TC.E16.E16_00_0[x].E16_21[i]), TC.E16.E16_00_0[x].E16_21[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_22 != 'undefined')
                {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_22.length; i++)
                    {
                        WriteIt(ElementArray, "E16_22", setV2Text("E16_22", TC.E16.E16_00_0[x].E16_22[i]), TC.E16.E16_00_0[x].E16_22[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_23 != 'undefined')
                {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_23.length; i++)
                    {
                        WriteIt(ElementArray, "E16_23", setV2Text("E16_23", TC.E16.E16_00_0[x].E16_23[i]), TC.E16.E16_00_0[x].E16_23[i])
                    }
                };
                if (typeof TC.E16.E16_00_0[x].E16_24 != 'undefined')
                {
                    for (var i = 0; i < TC.E16.E16_00_0[x].E16_24.length; i++)
                    {
                        WriteIt(ElementArray, "E16_24", setV2Text("E16_24", TC.E16.E16_00_0[x].E16_24[i]), TC.E16.E16_00_0[x].E16_24[i])
                    }
                }
            }
        }
    };

    //console.log("TC.E17")
    if (typeof TC.E17 != 'undefined')
    {
        if (typeof TC.E17.E17_01 != 'undefined')
        {
            for (var i = 0; i < TC.E17.E17_01.length; i++)
            {
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
        if (typeof TC.E20.E20_01 != 'undefined')
        {
            WriteIt(ElementArray, "E20_01",  TC.E20.E20_01)
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
                WriteIt(ElementArray, "E23_04", setV2Text("E23_04", TC.E23.E23_04[i]),  TC.E23.E23_04[i])
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
function WriteIt(ElementArray, Element, Value, codeVal)
{
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
    
    else if (Value === null)
    {
        ElementArray.push(Element + "|" + elName + "|" + "" + "|" + "")
    }

    else 
        {
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
function setNull(value)
{
    var _retv = "";
    switch (value)
    {
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
function setV2Text(NEMSISElementNumber, v2Val, compValue)
{
    var _retv = "";

    switch (NEMSISElementNumber)
    {
        case "E02_04":
            if (typeof E02_04[v2Val] == 'undefined')
            {

                _retv = v2Val;
            }
            else
            {
                _retv = E02_04[v2Val];
            }
            break;

        case "E02_05":
            if (typeof E02_05[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E02_05[v2Val];
            }
            break;
        case "E02_06":
            if (typeof E02_06[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E02_06[v2Val];
            }
            break;

        case "E02_07":
            if (typeof E02_07[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E02_07[v2Val];
            }
            break;
        case "E02_08":
            if (typeof E02_08[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E02_08[v2Val];
            }
            break;
        case "E02_09":
            if (typeof E02_09[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E02_09[v2Val];
            }
            break;
        case "E02_10":
            if (typeof E02_10[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E02_10[v2Val];
            }
            break;
        case "E02_11":
            if (typeof E02_11[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E02_11[v2Val];
            }
            break;
        case "E02_20":
            if (typeof E02_20[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E02_20[v2Val];
            }
            break;

        case "E03_01":
            if (typeof E03_01[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E03_01[v2Val];
            }
            break;
        case "E03_02":
            if (typeof E03_02[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E03_02[v2Val];
            }
            break;
        case "E03_03":
            if (typeof E03_03[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E03_03[v2Val];
            }
            break;
        case "E04_01":
            if (typeof E04_01[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E04_01[v2Val];
            }
            break;

        case "E04_02":
            if (typeof E04_02[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E04_02[v2Val];
            }
            break;
        case "E04_03":
            if (typeof E04_03[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E04_03[v2Val];
            }
            break;
        case "E05_01":
            if (typeof E05_01[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E05_01[v2Val];
            }
            break;
        case "E05_02":
            if (typeof E05_02[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E05_02[v2Val];
            }
            break;
        case "E05_03":
            if (typeof E05_03[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E05_03[v2Val];
            }
            break;
        case "E05_04":
            if (typeof E05_04[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E05_04[v2Val];
            }
            break;
        case "E05_05":
            if (typeof E05_05[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E05_05[v2Val];
            }
            break;
        case "E05_06":
            if (typeof E05_06[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E05_06[v2Val];
            }
            break;
        case "E05_07":
            if (typeof E05_07[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E05_07[v2Val];
            }
            break;
        case "E05_08":
            if (typeof E05_08[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E05_08[v2Val];
            }
            break;
        case "E05_09":
            if (typeof E05_09[v2Val] == 'undefined') {
                _retv = v2Val
            }
            else {
                _retv = E05_09[v2Val];
            }
            break;
        case "E05_10":
            if (typeof E05_10[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E05_10[v2Val];
            }
            break;
        case "E05_11":
            if (typeof E05_11[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E05_11[v2Val];
            }
            break;
        case "E05_12":
            if (typeof E05_12[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E05_12[v2Val];
            }
            break;
        case "E05_13":
            if (typeof E05_13[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E05_13[v2Val];
            }
            break;
        case "E05_14":
            if (typeof E05_14[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E05_14[v2Val];
            }
            break;

        case "E06_01":
            if (typeof E06_01[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E06_01[v2Val];
            }
            break;

        case "E06_02":
            if (typeof E06_02[v2Val] == 'undefined') {                
                _retv = v2Val;                
            }
            else {
                _retv = E06_02[v2Val];
            }
            break;

        case "E06_03":            
            if (typeof E06_03[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E06_03[v2Val];
            }
            break;

        case "E06_04":
            if (typeof E06_04[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E06_04[v2Val];
            }
            break;

        case "E06_05":
            if (typeof E06_05[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E06_05[v2Val];
            }
            break;

        case "E06_06":
            if (typeof E06_06[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E06_06[v2Val];
            }
            break;

        case "E06_07":
            if (typeof E06_07[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E06_07[v2Val];
            }
            break;

        case "E06_08":
            if (typeof E06_08[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E06_08[v2Val];
            }
            break;

        case "E06_09":
            if (typeof E06_09[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E06_09[v2Val];
            }
            break;

        case "E06_10":
            if (typeof E06_10[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E06_10[v2Val];
            }
            break;

        case "E06_11":
            if (typeof E06_11[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E06_11[v2Val];
            }
            break;

        case "E06_12":
            if (typeof E06_12[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E06_12[v2Val];
            }
            break;

        case "E06_13":
            if (typeof E06_13[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E06_13[v2Val];
            }
            break;

        case "E06_14":
            if (typeof E06_14[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E06_14[v2Val];
            }
            break;

        case "E06_15":
            if (typeof E06_15[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E06_15[v2Val];
            }
            break;

        case "E06_16":
            if (typeof E06_16[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E06_16[v2Val];
            }
            break;

        case "E06_17":
            if (typeof E06_17[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E06_17[v2Val];
            }
            break;

        case "E06_18":
            if (typeof E06_18[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E06_18[v2Val];
            }
            break;

        case "E06_19":
            if (typeof E06_19[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E06_19[v2Val];
            }
            break;
        case "E07_01":
            if (typeof E07_01[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E07_01[v2Val];
            }
            break;
        case "E07_02":
            if (typeof E07_02[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E07_02[v2Val];
            }
            break;
        case "E07_03":
            if (typeof E07_03[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E07_03[v2Val];
            }
            break;
        case "E07_04":
            if (typeof E07_04[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E07_04[v2Val];
            }
            break;
        case "E07_05":
            if (typeof E07_05[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E07_05[v2Val];
            }
            break;
        case "E07_06":
            if (typeof E07_06[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E07_06[v2Val];
            }
            break;
        case "E07_07":
            if (typeof E07_07[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E07_07[v2Val];
            }
            break;
        case "E07_08":
            if (typeof E07_08[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E07_08[v2Val];
            }
            break;
        case "E07_09":
            if (typeof E07_09[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E07_09[v2Val];
            }
            break;
        case "E07_10":
            if (typeof E07_10[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E07_10[v2Val];
            }
            break;
        case "E07_11":
            if (typeof E07_11[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E07_11[v2Val];
            }
            break;
        case "E07_12":
            if (typeof E07_12[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E07_12[v2Val];
            }
            break;
        case "E07_13":
            if (typeof E07_13[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E07_13[v2Val];
            }
            break;
        case "E07_14":
            if (typeof E07_14[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E07_14[v2Val];
            }
            break;
        case "E07_15":
            if (typeof E07_15[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E07_15[v2Val];
            }
            break;
        case "E07_16":
            if (typeof E07_16[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E07_16[v2Val];
            }
            break;
        case "E07_17":
            if (typeof E07_17[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E07_17[v2Val];
            }
            break;
        case "E07_18":
            if (typeof E07_18[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E07_18[v2Val];
            }
            break;
        case "E07_19":
            if (typeof E07_19[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E07_19[v2Val];
            }
            break;
        case "E07_20":
            if (typeof E07_20[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E07_20[v2Val];
            }
            break;
        case "E07_21":
            if (typeof E07_21[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E07_21[v2Val];
            }
            break;
        case "E07_22":
            if (typeof E07_22[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E07_22[v2Val];
            }
            break;
        case "E07_23":
            if (typeof E07_23[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E07_23[v2Val];
            }
            break;
        case "E07_24":
            if (typeof E07_24[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E07_24[v2Val];
            }
            break;
        case "E07_25":
            if (typeof E07_25[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E07_25[v2Val];
            }
            break;
        case "E07_26":
            if (typeof E07_26[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E07_26[v2Val];
            }
            break;
        case "E07_27":
            if (typeof E07_27[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E07_27[v2Val];
            }
            break;
        case "E07_28":
            if (typeof E07_28[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E07_28[v2Val];
            }
            break;
        case "E07_29":
            if (typeof E07_29[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E07_29[v2Val];
            }
            break;
        case "E07_30":
            if (typeof E07_30[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E07_30[v2Val];
            }
            break;
        case "E07_31":
            if (typeof E07_31[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E07_31[v2Val];
            }
            break;
        case "E07_32":
            if (typeof E07_32[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E07_32[v2Val];
            }
            break;
        case "E07_33":
            if (typeof E07_33[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E07_33[v2Val];
            }
            break;
        case "E07_34":
            if (typeof E07_34[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E07_34[v2Val];
            }
            break;

        case "E08_01":
            if (typeof E08_01[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E08_01[v2Val];
            }
            break;
        case "E08_02":
            if (typeof E08_02[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E08_02[v2Val];
            }
            break;
        case "E08_03":
            if (typeof E08_03[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E08_03[v2Val];
            }
            break;
        case "E08_04":
            if (typeof E08_04[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E08_04[v2Val];
            }
            break;
        case "E08_05":
            if (typeof E08_05[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E08_05[v2Val];
            }
            break;
        case "E08_06":
            if (typeof E08_06[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E08_06[v2Val];
            }
            break;
        case "E08_07":
            if (typeof E08_07[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E08_07[v2Val];
            }
            break;
        case "E08_08":
            if (typeof E08_08[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E08_08[v2Val];
            }
            break;
        case "E08_09":
            if (typeof E08_09[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E08_09[v2Val];
            }
            break;
        case "E08_10":
            if (typeof E08_10[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E08_10[v2Val];
            }
            break;
        case "E08_11":
            if (typeof E08_11[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E08_11[v2Val];
            }
            break;
        case "E08_12":
            if (typeof E08_12[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E08_12[v2Val];
            }
            break;
        case "E08_13":
            if (typeof E08_13[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E08_13[v2Val];
            }
            break;
        case "E08_14":
            if (typeof E08_14[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E08_14[v2Val];
            }
            break;
        case "E08_15":
            if (typeof E08_15[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E08_15[v2Val];
            }
            break;

        case "E09_01":
            if (typeof E09_01[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E09_01[v2Val];
            }
            break;
        case "E09_02":
            if (typeof E09_02[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E09_02[v2Val];
            }
            break;
        case "E09_03":
            if (typeof E09_03[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E09_03[v2Val];
            }
            break;
        case "E09_04":
            if (typeof E09_04[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E09_04[v2Val];
            }
            break;
        case "E09_05":
            if (typeof E09_05[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E09_05[v2Val];
            }
            break;
        case "E09_06":
            if (typeof E09_06[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E09_06[v2Val];
            }
            break;
        case "E09_07":
            if (typeof E09_07[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E09_07[v2Val];
            }
            break;
        case "E09_08":
            if (typeof E09_08[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E09_08[v2Val];
            }
            break;
        case "E09_09":
            if (typeof E09_09[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E09_09[v2Val];
            }
            break;
        case "E09_10":
            if (typeof E09_10[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E09_10[v2Val];
            }
            break;
        case "E09_11":
            if (typeof E09_11[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E09_11[v2Val];
            }
            break;
        case "E09_12":
            if (typeof E09_12[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E09_12[v2Val];
            }
            break;
        case "E09_13":
            if (typeof E09_13[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E09_13[v2Val];
            }
            break;
        case "E09_14":
            if (typeof E09_14[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E09_14[v2Val];
            }
            break;
        case "E09_15":
            if (typeof E09_15[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E09_15[v2Val];
            }
            break;
        case "E09_16":
            if (typeof E09_16[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E09_16[v2Val];
            }
            break;
        case "E10_01":
            if (typeof E10_01[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E10_01[v2Val];
            }
            break;
        case "E10_02":
            if (typeof E10_02[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E10_02[v2Val];
            }
            break;
        case "E10_03":
            if (typeof E10_03[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E10_03[v2Val];
            }
            break;
        case "E10_04":
            if (typeof E10_04[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E10_04[v2Val];
            }
            break;
        case "E10_05":
            if (typeof E10_05[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E10_05[v2Val];
            }
            break;
        case "E10_06":
            if (typeof E10_06[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E10_06[v2Val];
            }
            break;
        case "E10_07":
            if (typeof E10_07[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E10_07[v2Val];
            }
            break;
        case "E10_08":
            if (typeof E10_08[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E10_08[v2Val];
            }
            break;
        case "E10_09":
            if (typeof E10_09[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E10_09[v2Val];
            }
            break;
        case "E10_10":
            if (typeof E10_10[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E10_10[v2Val];
            }
            break;
        case "E11_01":
            if (typeof E11_01[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E11_01[v2Val];
            }
            break;
        case "E11_02":
            if (typeof E11_02[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E11_02[v2Val];
            }
            break;
        case "E11_03":
            if (typeof E11_03[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E11_03[v2Val];
            }
            break;
        case "E11_04":
            if (typeof E11_04[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E11_04[v2Val];
            }
            break;
        case "E11_05":
            if (typeof E11_05[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E11_05[v2Val];
            }
            break;
        case "E11_06":
            if (typeof E11_06[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E11_06[v2Val];
            }
            break;
        case "E11_07":
            if (typeof E11_07[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E11_07[v2Val];
            }
            break;
        case "E11_08":
            if (typeof E11_08[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E11_08[v2Val];
            }
            break;
        case "E11_09":
            if (typeof E11_09[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E11_09[v2Val];
            }
            break;
        case "E11_10":
            if (typeof E11_10[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E11_10[v2Val];
            }
            break;
        case "E11_11":
            if (typeof E11_11[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E11_11[v2Val];
            }
            break;

        case "E12_01":
            if (typeof E12_01[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E12_01[v2Val];
            }
            break;
        case "E12_02":
            if (typeof E12_02[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E12_02[v2Val];
            }
            break;
        case "E12_03":
            if (typeof E12_03[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E12_03[v2Val];
            }
            break;
        case "E12_04":
            if (typeof E12_04[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E12_04[v2Val];
            }
            break;
        case "E12_05":
            if (typeof E12_05[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E12_05[v2Val];
            }
            break;
        case "E12_06":
            if (typeof E12_06[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E12_06[v2Val];
            }
            break;
        case "E12_07":
            if (typeof E12_07[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E12_07[v2Val];
            }
            break;
        case "E12_08":
            if (typeof E12_08[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E12_08[v2Val];
            }
            break;
        case "E12_09":
            if (typeof E12_09[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E12_09[v2Val];
            }
            break;
        case "E12_10":
            if (typeof E12_10[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E12_10[v2Val];
            }
            break;
        case "E12_11":
            if (typeof E12_11[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E12_11[v2Val];
            }
            break;
        case "E12_12":
            if (typeof E12_12[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E12_12[v2Val];
            }
            break;
        case "E13_01":
            if (typeof E13_01[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E13_01[v2Val];
            }
            break;

        case "E14_01":
            if (typeof E14_01[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E14_01[v2Val];
            }
            break;
        case "E14_02":
            if (typeof E14_02[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E14_02[v2Val];
            }
            break;
        case "E14_03":
            if (typeof E14_03[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E14_03[v2Val];
            }
            break;
        case "E14_04":
            if (typeof E14_04[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E14_04[v2Val];
            }
            break;
        case "E14_05":
            if (typeof E14_05[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E14_05[v2Val];
            }
            break;
        case "E14_06":
            if (typeof E14_06[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E14_06[v2Val];
            }
            break;
        case "E14_07":
            if (typeof E14_07[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E14_07[v2Val];
            }
            break;
        case "E14_08":
            if (typeof E14_08[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E14_08[v2Val];
            }
            break;
        case "E14_09":
            if (typeof E14_09[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E14_09[v2Val];
            }
            break;
        case "E14_10":
            if (typeof E14_10[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E14_10[v2Val];
            }
            break;
        case "E14_11":
            if (typeof E14_11[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E14_11[v2Val];
            }
            break;
        case "E14_12":
            if (typeof E14_12[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E14_12[v2Val];
            }
            break;
        case "E15_01":
            if (typeof E15_01[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E15_01[v2Val];
            }
            break;
        case "E15_02":
            if (typeof E15_02[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E15_02[v2Val];
            }
            break;
        case "E15_03":
            if (typeof E15_03[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E15_03[v2Val];
            }
            break;
        case "E15_04":
            if (typeof E15_04[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E15_04[v2Val];
            }
            break;
        case "E15_05":
            if (typeof E15_05[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E15_05[v2Val];
            }
            break;
        case "E15_06":
            if (typeof E15_06[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E15_06[v2Val];
            }
            break;
        case "E15_07":
            if (typeof E15_07[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E15_07[v2Val];
            }
            break;
        case "E15_08":
            if (typeof E15_08[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E15_08[v2Val];
            }
            break;
        case "E15_09":
            if (typeof E15_09[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E15_09[v2Val];
            }
            break;
        case "E15_10":
            if (typeof E15_10[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E15_10[v2Val];
            }
            break;
        case "E15_11":
            if (typeof E15_11[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E15_11[v2Val];
            }
            break;
        case "E16_01":
            if (typeof E16_01[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E16_01[v2Val];
            }
            break;
        case "E16_02":
            if (typeof E16_02[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E16_02[v2Val];
            }
            break;
        case "E16_03":
            if (typeof E16_03[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E16_03[v2Val];
            }
            break;
        case "E16_04":
            if (typeof E16_04[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E16_04[v2Val];
            }
            break;
        case "E16_05":
            if (typeof E16_05[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E16_05[v2Val];
            }
            break;
        case "E16_06":
            if (typeof E16_06[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E16_06[v2Val];
            }
            break;
        case "E16_07":
            if (typeof E16_07[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E16_07[v2Val];
            }
            break;
        case "E16_08":
            if (typeof E16_08[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E16_08[v2Val];
            }
            break;
        case "E16_09":
            if (typeof E16_09[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E16_09[v2Val];
            }
            break;
        case "E16_10":
            if (typeof E16_10[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E16_10[v2Val];
            }
            break;
        case "E16_11":
            if (typeof E16_11[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E16_11[v2Val];
            }
            break;
        case "E16_12":
            if (typeof E16_12[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E16_12[v2Val];
            }
            break;
        case "E16_13":
            if (typeof E16_13[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E16_13[v2Val];
            }
            break;
        case "E16_14":
            if (typeof E16_14[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E16_14[v2Val];
            }
            break;
        case "E16_15":
            if (typeof E16_15[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E16_15[v2Val];
            }
            break;
        case "E16_16":
            if (typeof E16_16[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E16_16[v2Val];
            }
            break;
        case "E16_17":
            if (typeof E16_17[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E16_17[v2Val];
            }
            break;
        case "E16_18":
            if (typeof E16_18[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E16_18[v2Val];
            }
            break;
        case "E16_19":
            if (typeof E16_19[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E16_19[v2Val];
            }
            break;
        case "E16_20":
            if (typeof E16_20[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E16_20[v2Val];
            }
            break;
        case "E16_21":
            if (typeof E16_21[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E16_21[v2Val];
            }
            break;
        case "E16_22":
            if (typeof E16_22[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E16_22[v2Val];
            }
            break;
        case "E16_23":
            if (typeof E16_23[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E16_23[v2Val];
            }
            break;
        case "E16_24":
            if (typeof E16_24[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E16_24[v2Val];
            }
            break;

        case "E17_01":
            if (typeof E17_01[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E17_01[v2Val];
            }
            break;
        case "E18_01":
            if (typeof E18_01[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E18_01[v2Val];
            }
            break;
        case "E18_02":
            if (typeof E18_02[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E18_02[v2Val];
            }
            break;
        case "E18_03":
            if (typeof E18_03[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E18_03[v2Val];
            }
            break;
        case "E18_04":
            if (typeof E18_04[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E18_04[v2Val];
            }
            break;
        case "E18_05":
            if (typeof E18_05[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E18_05[v2Val];
            }
            break;
        case "E18_06":
            if (typeof E18_06[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E18_06[v2Val];
            }
            break;
        case "E18_07":
            if (typeof E18_07[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E18_07[v2Val];
            }
            break;
        case "E18_08":
            if (typeof E18_08[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E18_08[v2Val];
            }
            break;
        case "E18_09":
            if (typeof E18_09[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E18_09[v2Val];
            }
            break;
        case "E18_10":
            if (typeof E18_10[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E18_10[v2Val];
            }
            break;
        case "E18_11":
            if (typeof E18_11[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E18_11[v2Val];
            }
            break;

        case "E19_01":
            if (typeof E19_01[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E19_01[v2Val];
            }
            break;
        case "E19_02":
            if (typeof E19_02[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E19_02[v2Val];
            }
            break;
        case "E19_03":
            if (typeof E19_03[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E19_03[v2Val];
            }
            break;
        case "E19_04":
            if (typeof E19_04[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E19_04[v2Val];
            }
            break;
        case "E19_05":
            if (typeof E19_05[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E19_05[v2Val];
            }
            break;
        case "E19_06":
            if (typeof E19_06[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E19_06[v2Val];
            }
            break;
        case "E19_07":
            if (typeof E19_07[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E19_07[v2Val];
            }
            break;
        case "E19_08":
            if (typeof E19_08[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E19_08[v2Val];
            }
            break;
        case "E19_09":
            if (typeof E19_09[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E19_09[v2Val];
            }
            break;
        case "E19_10":
            if (typeof E19_10[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E19_10[v2Val];
            }
            break;
        case "E19_11":
            if (typeof E19_11[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E19_11[v2Val];
            }
            break;
        case "E19_12":
            if (typeof E19_12[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E19_12[v2Val];
            }
            break;
        case "E19_13":
            if (typeof E19_13[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E19_13[v2Val];
            }
            break;
        case "E19_14":
            if (typeof E19_14[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E19_14[v2Val];
            }
            break;
        case "E20_01":
            if (typeof E20_01[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E20_01[v2Val];
            }
            break;
        case "E20_02":
            if (typeof E20_02[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E20_02[v2Val];
            }
            break;
        case "E20_03":
            if (typeof E20_03[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E20_03[v2Val];
            }
            break;
        case "E20_04":
            if (typeof E20_04[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E20_04[v2Val];
            }
            break;
        case "E20_05":
            if (typeof E20_05[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E20_05[v2Val];
            }
            break;
        case "E20_06":
            if (typeof E20_06[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E20_06[v2Val];
            }
            break;
        case "E20_07":
            if (typeof E20_07[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E20_07[v2Val];
            }
            break;
        case "E20_08":
            if (typeof E20_08[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E20_08[v2Val];
            }
            break;
        case "E20_09":
            if (typeof E20_09[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E20_09[v2Val];
            }
            break;
        case "E20_10":
            if (typeof E20_10[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E20_10[v2Val];
            }
            break;
        case "E20_11":
            if (typeof E20_11[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E20_11[v2Val];
            }
            break;
        case "E20_12":
            if (typeof E20_12[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E20_12[v2Val];
            }
            break;
        case "E20_13":
            if (typeof E20_13[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E20_13[v2Val];
            }
            break;
        case "E20_14":
            if (typeof E20_14[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E20_14[v2Val];
            }
            break;
        case "E20_15":
            if (typeof E20_15[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E20_15[v2Val];
            }
            break;
        case "E20_16":
            if (typeof E20_16[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E20_16[v2Val];
            }
            break;
        case "E20_17":
            if (typeof E20_17[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E20_17[v2Val];
            }
            break;

        case "E21_01":
            if (typeof E21_01[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E21_01[v2Val];
            }
            break;
        case "E21_02":
            if (typeof E21_02[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E21_02[v2Val];
            }
            break;
        case "E21_03":
            if (typeof E21_03[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E21_03[v2Val];
            }
            break;
        case "E21_04":
            if (typeof E21_04[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E21_04[v2Val];
            }
            break;
        case "E21_05":
            if (typeof E21_05[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E21_05[v2Val];
            }
            break;
        case "E21_06":
            if (typeof E21_06[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E21_06[v2Val];
            }
            break;
        case "E21_07":
            if (typeof E21_07[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E21_07[v2Val];
            }
            break;
        case "E21_08":
            if (typeof E21_08[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E21_08[v2Val];
            }
            break;
        case "E21_09":
            if (typeof E21_09[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E21_09[v2Val];
            }
            break;
        case "E21_10":
            if (typeof E21_10[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E21_10[v2Val];
            }
            break;
        case "E21_11":
            if (typeof E21_11[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E21_11[v2Val];
            }
            break;
        case "E21_12":
            if (typeof E21_12[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E21_12[v2Val];
            }
            break;
        case "E21_13":
            if (typeof E21_13[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E21_13[v2Val];
            }
            break;
        case "E21_14":
            if (typeof E21_14[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E21_14[v2Val];
            }
            break;
        case "E21_15":
            if (typeof E21_15[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E21_15[v2Val];
            }
            break;
        case "E21_16":
            if (typeof E21_16[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E21_16[v2Val];
            }
            break;
        case "E21_17":
            if (typeof E21_17[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E21_17[v2Val];
            }
            break;
        case "E21_18":
            if (typeof E21_18[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E21_18[v2Val];
            }
            break;
        case "E21_19":
            if (typeof E21_19[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E21_19[v2Val];
            }
            break;
        case "E21_20":
            if (typeof E21_20[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E21_20[v2Val];
            }
            break;
        case "E22_01":
            if (typeof E22_01[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E22_01[v2Val];
            }
            break;
        case "E22_02":
            if (typeof E22_02[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E22_02[v2Val];
            }
            break;
        case "E22_03":
            if (typeof E22_03[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E22_03[v2Val];
            }
            break;
        case "E22_04":
            if (typeof E22_04[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E22_04[v2Val];
            }
            break;
        case "E22_05":
            if (typeof E22_05[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E22_05[v2Val];
            }
            break;
        case "E22_06":
            if (typeof E22_06[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E22_06[v2Val];
            }
            break;
        case "E23_01":
            if (typeof E23_01[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E23_01[v2Val];
            }
            break;
        case "E23_02":
            if (typeof E23_02[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E23_02[v2Val];
            }
            break;
        case "E23_03":
            if (typeof E23_03[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E23_03[v2Val];
            }
            break;
        case "E23_04":
            if (typeof E23_04[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E23_04[v2Val];
            }
            break;
        case "E23_05":
            if (typeof E23_05[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E23_05[v2Val];
            }
            break;
        case "E23_06":
            if (typeof E23_06[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E23_06[v2Val];
            }
            break;
        case "E23_07":
            if (typeof E23_07[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E23_07[v2Val];
            }
            break;
        case "E23_08":
            if (typeof E23_08[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E23_08[v2Val];
            }
            break;
        case "E23_09":
            if (typeof E23_09[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E23_09[v2Val];
            }
            break;
        case "E23_10":
            if (typeof E23_10[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E23_10[v2Val];
            }
            break;
        case "E23_11":
            if (typeof E23_11[v2Val] == 'undefined') {
                _retv = v2Val;
            }
            else {
                _retv = E23_11[v2Val];
            }
            break;

    }
    return _retv;
};

var D01_03={"10002":	"Appropriate 2 digit FIPS code"};
var D01_04={"10003":	"Appropriate 5 digit FIPS code"};
var D01_05={"5610":	"911 Response (Scene) with Transport Capability",
    "5620":	"911 Response (Scene) without Transport Capability",
    "5630":	"Air Medical",
    "5640":	"Hazmat",
    "5650":	"Medical Transport (Convalescent)",
    "5660":	"Paramedic Intercept",
    "5670":	"Rescue",
    "5680":	"Specialty Care Transport"};
var D01_06={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "5690":	"911 Response (Scene) with Transport Capability",
    "5700":	"911 Response (Scene) without Transport Capability",
    "5710":	"Air Medical",
    "5720":	"Hazmat",
    "5730":	"Medical Transport (Convalescent)",
    "5740":	"Paramedic Intercept",
    "5750":	"Rescue",
    "5760":	"Specialty Care Transport"};
var D01_07={"6090":	"EMT-Basic",
    "6100":	"EMT-Intermediate",
    "6110":	"EMT-Paramedic",
    "6111":	"Nurse",
    "6112":	"Physician",
    "6120":	"First Responder"};
var D01_08={"5810":	"Community, Non-Profit",
    "5820":	"Fire Department",
    "5830":	"Governmental, Non-Fire",
    "5840":	"Hospital",
    "5850":	"Private, Non_Hospital",
    "5860":	"Tribal"};
var D01_09={		"5870":	"Mixed",
    "5880":	"Non-Volunteer",
    "5890":	"Volunteer"};
var D01_11={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var D01_19={		"5900":	"GMT-11:00 Midway Island, Samoa",
    "5910":	"GMT-10:00 Hawaii",
    "5920":	"GMT-09:00 Alaska",
    "5930":	"GMT-08:00 Pacific Time",
    "5940":	"GMT-07:00 Mountain Time",
    "5950":	"GMT-06:00 Central Time",
    "5960":	"GMT-05:00 Eastern Time",
    "5970":	"GMT-04:00 Atlantic Time"};
var D01_20={"0":	"No",
    "1":	"Yes"};
var D01_21={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var D02_02={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var D02_03={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var D02_04={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var D02_05={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var D02_06={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var D02_08={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var D02_09={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var D02_10={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var D02_11={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var D03_02={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var D03_03={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var D03_04={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var D03_05={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var D03_06={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var D03_08={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var D03_09={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var D03_10={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "5980":	"Anesthesiology",
    "5990":	"Cardiology",
    "6000":	"Emergency Medicine",
    "6010":	"Family Practice",
    "6020":	"General Practice (not board certified)",
    "6030":	"Internal Medicine",
    "6040":	"Obstetrics and Gynecology",
    "6050":	"Orthopedics",
    "6060":	"Other",
    "6070":	"Pediatrics",
    "6080":	"Surgery"};
var D03_11={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};

var D04_01={"6090":	"EMT-Basic",
    "6100":	"EMT-Intermediate",
    "6110":	"EMT-Paramedic",
    "6111":	"Nurse",
    "6112":	"Physician",
    "6120":	"First Responder"};

var D04_04={"1.181":	"CNS Catheter-Epidural Maintenance",
    "1.182":	"CNS Catheter-Intraventricular Maintenance",
    "31.11":	"Airway-Needle Cricothyrotomy",
    "31.12":	"Airway-Surgical Cricothyrotomy",
    "31.42":	"Airway-Direct Laryngoscopy",
    "31.421":	"Airway-Video Laryngoscopy",
    "34.041":	"Chest Decompression",
    "34.042":	"Chest Tube Placement",
    "37":	"Pericardiocentesis",
    "37.611":	"Intra-Aortic Balloon Pump Maintenance",
    "37.612":	"Left Ventricular Assist Device Maintenance",
    "38.91":	"Arterial Access-Blood Draw",
    "38.99":	"Venous Access-Blood Draw",
    "38.991":	"Venous Access-Existing Catheter",
    "38.992":	"Venous Access-Extremity",
    "38.993":	"Venous Access-External Jugular Line",
    "38.994":	"Venous Access-Femoral Line",
    "38.995":	"Blood Glucose Analysis",
    "39.995":	"Venous Access-Internal Jugular Line",
    "39.996":	"Venous Access-Subclavian Line",
    "39.997":	"Venous Access-Discontinue",
    "39.998":	"Venous Access-Umbilical Vein Cannulation",
    "41.92":	"Venous Access-Intraosseous Adult",
    "41.921":	"Venous Access-Intraosseous Pediatric",
    "57.94":	"Urinary Catheterization",
    "73.59":	"Childbirth",
    "79.7":	"Joint Reduction/Relocation",
    "86.09":	"Escharotomy",
    "86.28":	"Decontamination",
    "89.391":	"Capnography (CO2 Measurement)",
    "89.392":	"Pulse Oximetry",
    "89.51":	"Cardiac Monitor",
    "89.59":	"Orthostatic Blood Pressure Measurement",
    "89.599":	"Patient Monitoring of Pre-existing Devices, Equipment, or Ongoing Medications",
    "89.61":	"Arterial Line Maintenance",
    "89.62":	"Venous Access-Central Line Maintenance",
    "89.64":	"Venous Access-Swan Ganz Maintenance",
    "89.7":	"Assessment-Adult",
    "89.701":	"Assessment-Pediatric",
    "89.702":	"Pain Measurement",
    "89.703":	"Temperature Measurement",
    "89.704":	"Thrombolytic Screen",
    "89.82":	"12 Lead ECG-Obtain",
    "89.821":	"12 Lead ECG-Transmitted",
    "93.055":	"Wound Care-Taser Barb Removal",
    "93.056":	"Wound Care-Tourniquet",
    "93.057":	"Wound Care-General",
    "93.058":	"Wound Care-Irrigation",
    "93.059":	"Wound Care-Hemostatic Agent",
    "93.35":	"Patient Warming (Hot Pack, etc.)",
    "93.45":	"Splinting-Traction",
    "93.54":	"Splinting-Basic",
    "93.58":	"MAST",
    "93.591":	"Spinal Immobilization",
    "93.9":	"Airway-CPAP",
    "93.91":	"Airway-Respirator Operation (BLS)",
    "93.93":	"Airway-Bagged (via tube)",
    "93.931":	"Airway-Bagged (via BVMask)",
    "93.94":	"Airway-Nebulizer Treatment",
    "96.01":	"Airway-Nasal",
    "96.02":	"Airway-Oral",
    "96.03":	"Airway-EOA/EGTA",
    "96.04":	"Airway-Orotracheal Intubation",
    "96.041":	"Airway-Nasotracheal Intubation",
    "96.042":	"Airway-Rapid Sequence Intubation",
    "96.051":	"Airway-Combitube Blind Insertion Airway Device",
    "96.052":	"Airway-Laryngeal Mask Blind Insertion Airway Device",
    "96.053":	"Airway-King LT Blind Insertion Airway Device",
    "96.07":	"Gastric Tube Insertion-Inserted Nasally",
    "96.071":	"Gastric Tube Insertion-Inserted Orally",
    "96.7":	"Airway-Ventilator Operation",
    "96.701":	"Airway-Ventilator with PEEP",
    "96.702":	"Airway-BiPAP",
    "96.703":	"Airway-Impedance Threshold Device",
    "96.79":	"Airway-PEEP",
    "96.991":	"Airway-Intubation Confirm Colorimetric ETCO2",
    "96.992":	"Airway-Intubation Confirm Esophageal Bulb",
    "96.993":	"Airway-Extubation",
    "97.23":	"Airway-Change Tracheostomy Tube",
    "97.231":	"Airway-Intubation of Existing Tracheostomy Stoma",
    "98.13":	"Airway-Cleared, Opened, or Heimlich",
    "98.131":	"Airway-Foreign Body Removal",
    "98.15":	"Airway-Suctioning",
    "99.64":	"Vagal Maneuver-Carotid Massage",
    "99.641":	"Vagal Maneuver-Valsalva or Other Vagal Maneuver (Not Carotid Massage)",
    "99.841":	"Restraints-Pharmacological",
    "99.842":	"Restraints-Physical",
    "99.81":	"Patient Cooling (Cold Pack, etc.)",
    "99.811":	"Patient Cooling-Post Resuscitation",
    "99.29":	"Injections-SQ/IM",
    "99.624":	"Cardiac Pacing-External",
    "99.626":	"Cardiac Pacing-Transvenous",
    "99.623":	"Cardioversion",
    "99.601":	"CPR by Other External Automated Device",
    "99.602":	"CPR-AutoPulse Device",
    "99.603":	"CPR-Mechanical Thumper Type Device",
    "99.604":	"CPR-Precordial Thump Only",
    "99.6":	"CPR-Start Compressions and Ventilations",
    "99.611":	"CPR-Start Compressions only without Ventilation",
    "99.612":	"CPR-Start Rescue Breathing without Compressions",
    "99.615":	"CPR-Stop",
    "99.621":	"Defibrillation-Automated (AED)",
    "99.622":	"Defibrillation-Manual",
    "99.625":	"Defibrillation-Placement for Monitoring/Analysis",
    "100.1":	"Rescue",
    "100.2":	"Extrication",
    "100.301":	"Patient Loaded-Helicopter Hot-Load",
    "100.302":	"Patient Off-Loaded",
    "100.303":	"Patient Off-Loaded Helicopter Hot Off-Load",
    "101.101":	"Specialty Center Activation-Adult Trauma",
    "101.102":	"Specialty Center Activation-Pediatric Trauma",
    "101.103":	"Specialty Center Activation-Cardiac Arrest",
    "101.104":	"Specialty Center Activation-STEMI",
    "101.105":	"Specialty Center Activation-Stroke",
    "101.201":	"Activation-Advanced Hazmat Specialty Service/Response Team",
    "101.202":	"Activation-Fire Rehabilitation Specialty Service/Response Team",
    "101.203":	"Activation-Other Specialty Service/Response Team",
    "101.204":	"Activation-Rescue Specialty Service/Response Team",
    "101.205":	"Activation-Social Services Notification/Referral",
    "101.206":	"Activation-Tactical or SWAT Specialty Service/Response Team",
    "100.3":	"Patient Loaded",
    "101.5":	"Contact Medical Control"};
var D04_08={"6720":	"Abdominal Pain",
    "6730":	"Airway",
    "6740":	"Airway-Failed",
    "6760":	"Airway-RSI",
    "6770":	"Allergic Reaction/Anaphylaxis",
    "6780":	"Altered Mental Status",
    "6785":	"AltitudeSickness",
    "6790":	"Asystole",
    "6791":	"Atrial Fibrillation",
    "6800":	"Back Pain",
    "6810":	"Behavioral",
    "6820":	"Bites and Envenomations",
    "6830":	"Bradycardia",
    "6840":	"Burns",
    "6850":	"Cardiac Arrest",
    "6860":	"Cardiac Chest Pain",
    "6870":	"Childbirth/Labor",
    "6875":	"Cold Exposure",
    "6880":	"Dental Problems",
    "6881":	"Device Malfunction",
    "6885":	"Diarrhea",
    "6890":	"Drowning/Near Drowning",
    "6892":	"Diving Emergencies",
    "6900":	"Electrical Injuries",
    "6910":	"Epistaxis",
    "6911":	"Exposure-Airway Irritants",
    "6912":	"Exposure-Biological/Infectious",
    "6913":	"Exposure-Blistering Agents",
    "6914":	"Exposure-Cyanide",
    "6915":	"Exposure-Nerve Agents",
    "6916":	"Exposure-Radiologic Agents",
    "6917":	"Exposure-Riot Control Agents",
    "6920":	"Extremity Trauma",
    "6925":	"Eye Trauma",
    "6930":	"Fever",
    "6935":	"Gynecologic Emergencies",
    "6940":	"Head Trauma",
    "6945":	"Hyperglycemia",
    "6950":	"Hypertension",
    "6960":	"Hyperthermia",
    "6965":	"Hypoglycemia",
    "6970":	"Hypotension/Shock (Non-Trauma)",
    "6980":	"Hypothermia",
    "6990":	"IV Access",
    "7000":	"Trauma-Multisystem",
    "7010":	"Newly Born",
    "7020":	"Obstetrical Emergencies",
    "7030":	"Overdose/Toxic Ingestion",
    "7040":	"Pain Control",
    "7130":	"Post Resuscitation",
    "7140":	"Pulmonary Edema",
    "7150":	"Pulseless Electrical Activity",
    "7160":	"Respiratory Distress",
    "7170":	"Seizure",
    "7175":	"Spinal Cord Trauma",
    "7180":	"Spinal Immobilization",
    "7190":	"Supraventricular Tachycardia",
    "7200":	"Stroke/TIA",
    "7210":	"Syncope",
    "7214":	"Trauma-Arrest",
    "7215":	"Trauma-Amputation",
    "7220":	"Universal Patient Care",
    "7230":	"Ventricular Fibrillation",
    "7232":	"Ventricular Ectopy",
    "7240":	"Ventricular Tachycardia",
    "7251":	"Vomiting"};
var D04_09={"6090":	"EMT-Basic",
    "6100":	"EMT-Intermediate",
    "6110":	"EMT-Paramedic",
    "6111":	"Nurse",
    "6112":	"Physician",
    "6120":	"First Responder"};
var D04_10={"0":	"No",
    "1":	"Yes"};
var D04_12={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var D04_14={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var D04_15={"7270":	"Home",
    "7280":	"Hospital",
    "7290":	"Medical Office/Clinic",
    "7300":	"Morgue",
    "7320":	"Nursing Home",
    "7330":	"Other",
    "7340":	"Other EMS Responder (air)",
    "7350":	"Other EMS Responder (ground)",
    "7360":	"Police/Jail"};
var D05_02={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var D05_05={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var D05_06={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var D05_07={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var D05_09={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var D06_03={"7370":	"Ambulance",
    "7380":	"ATV",
    "7390":	"Bicycle",
    "7400":	"Boat",
    "7410":	"Fire Truck",
    "7420":	"Fixed Wing",
    "7430":	"Motorcycle",
    "7440":	"Other",
    "7450":	"Private Vehicle",
    "7460":	"Quick Response Vehicle (Non-Transport Vehicle other than Fire Truck",
    "7470":	"Rescue",
    "7480":	"Rotor Craft"};
var D06_04={"6090":	"EMT-Basic",
    "6100":	"EMT-Intermediate",
    "6110":	"EMT-Paramedic",
    "6111":	"Nurse",
    "6112":	"Physician",
    "6120":	"First Responder"};
var D06_09={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};

var D06_10={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var D07_03={"7490":	"Full Time Paid Employee",
    "7500":	"Full Time Unpaid Employee",
    "7510":	"Part Time Paid and Part Time Unpaid Employee",
    "7520":	"Part Time Paid Employee",
    "7530":	"Part Time Unpaid Employee"};
var D07_05={"6090":	"EMT-Basic",
    "6100":	"EMT-Intermediate",
    "6110":	"EMT-Paramedic",
    "6111":	"Nurse",
    "6112":	"Physician",
    "6120":	"First Responder",
    "10007":	"Text as defined in D04_01"};
var D08_02={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var D08_03={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var D08_04={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var D08_05={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var D08_06={		"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var D08_08={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var D08_09={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var D08_10={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var D08_12={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "650":	"Male",
    "655":	"Female"};
var D08_13={"660":	"American Indian or Alaska Native",
    "665":	"Asian",
    "670":	"Black or African American",
    "675":	"Native Hawaiian or Other Pacific Islander",
    "680":	"White",
    "685":	"Other Race"};
var D08_14={"690":	"Hispanic or Latino",
    "695":	"Not Hispanic or Latino"};
var D08_15={"6090":	"EMT-Basic",
    "6100":	"EMT-Intermediate",
    "6110":	"EMT-Paramedic",
    "6111":	"Nurse",
    "6112":	"Physician",
    "6120":	"First Responder",
    "10007":	"Text as defined in D04_01"};
var D08_16={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "0":	"No",
    "1":	"Yes"};
var E00={"-25":	"Not Applicable",
    "-20":	"Not Recorded",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var E02_02={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"};
var E02_03={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"};
var E02_04={"30":	"911 Response (Scene)",
    "35":	"Intercept",
    "40":	"Interfacility Transfer",
    "45":	"Medical Transport",
    "50":	"Mutual Aid",
    "55":	"Standby"};
var E02_05={"60":	"Non-Transport",
    "65":	"Rescue",
    "70":	"Supervisor",
    "75":	"Transport"};
var E02_06={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "80":	"Caller (Uncooperative)",
    "85":	"High Call Volume",
    "90":	"Language Barrier",
    "95":	"Location (Inability to Obtain)",
    "100":	"No Units Available",
    "105":	"None",
    "110":	"Other",
    "115":	"Scene Safety (Not Secure for EMS)",
    "120":	"Technical Failure (Computer, Phone etc.)"};
var E02_07={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "125":	"Crowd",
    "130":	"Directions",
    "135":	"Distance",
    "140":	"Diversion",
    "145":	"HazMat",
    "150":	"None",
    "155":	"Other",
    "160":	"Safety",
    "165":	"Staff Delay",
    "170":	"Traffic",
    "175":	"Vehicle Crash",
    "180":	"Vehicle Failure",
    "185":	"Weather"};
var E02_08={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "190":	"Crowd",
    "195":	"Directions",
    "200":	"Distance",
    "205":	"Diversion",
    "210":	"Extrication >20 min.",
    "215":	"HazMat",
    "220":	"Language Barrier",
    "225":	"None",
    "230":	"Other",
    "235":	"Safety",
    "240":	"Staff Delay",
    "245":	"Traffic",
    "250":	"Vehicle Crash",
    "255":	"Vehicle Failure",
    "260":	"Weather"};
var E02_09={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "265":	"Crowd",
    "270":	"Directions",
    "275":	"Distance",
    "280":	"Diversion",
    "285":	"HazMat",
    "290":	"None",
    "295":	"Other",
    "300":	"Safety",
    "305":	"Staff Delay",
    "310":	"Traffic",
    "315":	"Vehicle Crash",
    "320":	"Vehicle Failure",
    "325":	"Weather"};
var E02_10={		"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "330":	"Clean-up",
    "335":	"Decontamination",
    "340":	"Documentation",
    "345":	"ED Overcrowding",
    "350":	"Equipment Failure",
    "355":	"Equipment Replenishment",
    "360":	"None",
    "365":	"Other",
    "370":	"Staff Delay",
    "375":	"Vehicle Failure"};
var E02_11={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"};
var E02_12={"10001":	"Relevant Value for Data Element & Patient Care"};
var E02_13={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"};
var E02_14={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"};
var E02_15={"10001":	"Relevant Value for Data Element & Patient Care"};
var E02_16={"10001":	"Relevant Value for Data Element & Patient Care"};
var E02_17={"10001":	"Relevant Value for Data Element & Patient Care"};
var E02_18={"10001":	"Relevant Value for Data Element & Patient Care"};
var E02_19={"10001":	"Relevant Value for Data Element & Patient Care"};
var E02_20={"380":	"Initial Lights and Sirens, Downgraded to No Lights or Sirens",
    "385":	"Initial No Lights or Sirens, Upgraded to Lights and Sirens ","390":	"Lights and Sirens",
    "395":	"No Lights or Sirens"};
var E03_01 = {
    "-25": "Not Applicable",
    "-15": "Not Reporting",
    "-10": "Not Known",
    "-5": "Not Available",
    "400": "Abdominal Pain",
    "405": "Allergies",
    "410": "Animal Bite",
    "415": "Assault",
    "420": "Back Pain",
    "425": "Breathing Problem",
    "430": "Burns",
    "435": "CO Poisoning/Hazmat",
    "440": "Cardiac Arrest",
    "445": "Chest Pain",
    "450": "Choking",
    "455": "Convulsions/Seizure",
    "460": "Diabetic Problem",
    "465": "Drowning",
    "470": "Electrocution",
    "475": "Eye Problem",
    "480": "Fall Victim",
    "485": "Headache",
    "490": "Heart Problems",
    "495": "Heat/Cold Exposure",
    "500": "Hemorrhage/Laceration",
    "505": "Industrial Accident/Inaccessible Incident/Other Entrapments (non-vehicle)",
    "510": "Ingestion/Poisoning",
    "515": "Pregnancy/Childbirth",
    "520": "Psychiatric Problem",
    "525": "Sick Person",
    "530": "Stab/Gunshot Wound",
    "535": "Stroke/CVA",
    "540": "Traffic Accident",
    "545": "Traumatic Injury",
    "550": "Unconscious/Fainting",
    "555": "Unknown Problem Man Down",
    "560": "Transfer/Interfacility/Palliative Care",
    "565": "MCI (Mass Casualty Incident)"
};
var E03_02={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "0":	"No",
    "570":	"Yes, With Pre-Arrival Instructions",
    "575":	"Yes, Without Pre-Arrival Instructions"};
var E03_03={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"};
var E04_01={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"};
var E04_02={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "580":	"Driver",
    "585":	"Primary Patient Caregiver",
    "590":	"Secondary Patient Caregiver",
    "595":	"Third Patient Caregiver",
    "600":	"Other"};
var E04_03={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "635":	"Student",
    "640":	"Other Healthcare Professional",
    "645":	"Other Non-Healthcare Professional",
    "6090":	"EMT-Basic",
    "6100":	"EMT-Intermediate",
    "6110":	"EMT-Paramedic",
    "6111":	"Nurse",
    "6112":	"Physician",
    "6120":	"First Responder"};
var E05_01={"10001":	"Relevant Value for Data Element & Patient Care"};
var E05_02={"10001":	"Relevant Value for Data Element & Patient Care"};
var E05_03={"10001":	"Relevant Value for Data Element & Patient Care"};
var E05_04={"10001":	"Relevant Value for Data Element & Patient Care"};
var E05_05={"10001":	"Relevant Value for Data Element & Patient Care"};
var E05_06={"10001":	"Relevant Value for Data Element & Patient Care"};
var E05_07={"10001":	"Relevant Value for Data Element & Patient Care"};
var E05_08={"10001":	"Relevant Value for Data Element & Patient Care"};
var E05_09={"10001":	"Relevant Value for Data Element & Patient Care"};
var E05_10={"10001":	"Relevant Value for Data Element & Patient Care"};
var E05_11={"10001":	"Relevant Value for Data Element & Patient Care"};
var E05_12={"10001":	"Relevant Value for Data Element & Patient Care"};
var E05_13={"10001":	"Relevant Value for Data Element & Patient Care"};
var E06_01 = {
    "-25": "Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"};
var E06_02 = {
    "-25": "Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"};
var E06_03 = {
    "-25": "Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"};
var E06_04={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"};
var E06_05={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"};
var E06_06={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"};
var E06_07={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"};
var E06_08={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"};
var E06_09={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"};
var E06_10={		"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"};
var E06_11={		"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "650":	"Male",
    "655":	"Female"};
var E06_12={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "660":	"American Indian or Alaska Native",
    "665":	"Asian",
    "670":	"Black or African American",
    "675":	"Native Hawaiian or Other Pacific Islander",
    "680":	"White",
    "685":	"Other Race"};
var E06_13={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "690":	"Hispanic or Latino",
    "695":	"Not Hispanic or Latino"};
var E06_14={"10001":	"Relevant Value for Data Element & Patient Care"};
var E06_15={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "700":	"Hours",
    "705":	"Days",
    "710":	"Months",
    "715":	"Years"};
var E06_16={"10001":	"Relevant Value for Data Element & Patient Care"};
var E06_17={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"};
var E06_18={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"};
var E06_19={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"};
var E07_01={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "720":	"Insurance",
    "725":	"Medicaid",
    "730":	"Medicare",
    "735":	"Not Billed (for any reason)",
    "740":	"Other Government",
    "745":	"Self Pay",
    "750":	"Workers Compensation"};
var E07_02={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "0":	"No",
    "1":	"Yes"};
var E07_03={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"};
var E07_04={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "755":	"Primary",
    "760":	"Secondary",
    "765":	"Other"};
var E07_05={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available"};
var E07_05={"10001":	"Relevant Value for Data Element & Patient Care",
    "-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"};

var E07_07={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"};
var E07_08={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"};
var E07_09={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"};
var E07_10={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care",
};
var E07_11={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"};
var E07_12={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"};
var E07_13={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"
};
var E07_14={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "770":	"Self",
    "775":	"Spouse",
    "780":	"Son/Daughter",
    "785":	"Other"};
var E07_15={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "0":	"No",
    "1":	"Yes"};
var E07_16={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "790":	"Construction",
    "795":	"Finance, Insurance, and Real Estate",
    "800":	"Government",
    "805":	"Manufacturing",
    "810":	"Mining",
    "815":	"Retail Trade",
    "820":	"Services",
    "825":	"Transportation and Public Utilities",
    "830":	"Wholesale Trade"};
var E07_17={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "835":	"Management Occupations",
    "840":	"Business and Financial Operations Occupations",
    "845":	"Computer and Mathematical Occupations",
    "850":	"Architecture and Engineering Occupations",
    "855":	"Life, Physical, and Social Science Occupations",
    "860":	"Community and Social Services Occupations",
    "865":	"Legal Occupations",
    "870":	"Education, Training, and Library Occupations",
    "875":	"Arts, Design, Entertainment, Sports, and Media Occupations",
    "880":	"Healthcare Practitioners and Technical Occupations",
    "885":	"Healthcare Support Occupations",
    "890":	"Protective Service Occupations",
    "895":	"Food Preparation and Serving Related Occupations",
    "900":	"Building and Grounds Cleaning and Maintenance Occupations",
    "905":	"Personal Care and Service Occupations",
    "910":	"Sales and Related Occupations",
    "915":	"Office and Administrative Support Occupations",
    "920":	"Farming, Fishing and Forestry Occupations",
    "925":	"Construction and Extraction Occupations",
    "930":	"Installation, Maintenance, and Repair Occupations",
    "935":	"Production Occupations",
    "940":	"Transportation and Material Moving Occupations",
    "945":	"Military Specific Occupations"};
var E07_18={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"};

var E07_19={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"};
var E07_20={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"};
var E07_21={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"
};
var E07_22={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care",
};
var E07_23={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"};
var E07_24={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"};
var E07_25={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"};
var E07_26={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "950":	"Appointed Guardian",
    "955":	"Father",
    "960":	"Mother",
    "965":	"Other",
    "970":	"Son/Daughter",
    "975":	"Spouse"};
var E07_27={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"
};
var E07_28={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"};
var E07_29={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"};
var E07_30={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"
};
var E07_31={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"
};
var E07_32={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"
};
var E07_33={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "980":	"Immediate",
    "985":	"Non-Immediate"
};
var E07_34={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "990":	"BLS",
    "995":	"BLS, Emergency",
    "1000":	"ALS, Level 1",
    "1005":	"ALS, Level 1 Emergency",
    "1010":	"ALS, Level 2",
    "1015":	"Paramedic Intercept",
    "1020":	"Specialty Care Transport",
    "1025":	"Fixed Wing (Airplane)",
    "1030":	"Rotary Wing (Helicopter)"
};
var E07_35={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "8001":	"Severe Abdominal Pain (ALS-789.00)",
    "8002":	"Abdominal Pain (ALS-789.00)",
    "8003":	"Abnormal Cardiac Rhythm/Cardiac Dysrhythmia (ALS-427.9)",
    "8004":	"Abnormal Skin Signs (ALS-780.8)",
    "8005":	"Abnormal Vital Signs (ALS-796.4)",
    "8006":	"Allergic Reaction (ALS-995.0)",
    "8007":	"Allergic Reaction (BLS-692.9)",
    "8008":	"Blood Glucose (ALS-790.21)",
    "8009":	"Respiratory Arrest (ALS-799.1)",
    "8010":	"Difficulty Breathing (ALS-786.05)",
    "8011":	"Cardiac Arrest-Resuscitation in Progress (ALS-427.5)",
    "8012":	"Chest Pain (non-traumatic) (ALS-786.50)",
    "8013":	"Choking Episode (ALS-784.9)",
    "8014":	"Cold Exposure (ALS-991.6)",
    "8015":	"Cold Exposure (BLS-991.9)",
    "8016":	"Altered Level of Consciousness (non-traumatic) (ALS-780.01)",
    "8017":	"Convulsions/Seizures (ALS-780.39)",
    "8018":	"Eye Symptoms (non-traumatic) (BLS-379.90)",
    "8019":	"Non Traumatic Headache (ALS-437.9)",
    "8020":	"Cardiac Symptoms other than Chest Pain (palpitations) (ALS-785.1)",
    "8021":	"Cardiac Symptoms other than Chest Pain (atypical pain) (ALS-536.2)",
    "8022":	"Heat Exposure (ALS-992.5)",
    "8023":	"Heat Exposure (BLS-992.2)",
    "8024":	"Hemorrhage (ALS-459.0)",
    "8025":	"Infectious Diseases requiring Isolation/Public Health Risk (BLS-038.9)",
    "8026":	"Hazmat Exposure (ALS-987.9)",
    "8027":	"Medical Device Failure (ALS-996.0)",
    "8028":	"Medical Device Failure (BLS-996.3)",
    "8029":	"Neurologic Distress (ALS-436.0)",
    "8030":	"Pain (Severe) (ALS-780.99)",
    "8031":	"Back Pain (non-traumatic possible cardiac or vascular) (ALS-724.5)",
    "8032":	"Back Pain (non-traumatic with neurologic symptoms) (ALS-724.9)",
    "8033":	"Poisons (all routes) (ALS-977.9)",
    "8034":	"Alcohol Intoxication or Drug Overdose (BLS-305.0)",
    "8035":	"Severe Alcohol Intoxication (ALS-977.3)",
    "8036":	"Post-Operative Procedure Complications (BLS-998.9)",
    "8037":	"Pregnancy Complication/Childbirth/Labor (ALS-650.0)",
    "8038":	"Psychiatric/Behavioral (abnormal mental status) (ALS-292.9)",
    "8039":	"Psychiatric/Behavioral (threat to self or others) (BLS-298.9)",
    "8040":	"Sick Person-Fever (BLS-036.9)",
    "8041":	"Severe Dehydration (ALS-787.01)",
    "8042":	"Unconscious/Syncope/Dizziness (ALS-780.02)",
    "8043":	"Major Trauma (ALS-959.8)",
    "8044":	"Other Trauma (need for monitor or airway) (ALS-518.5)",
    "8045":	"Other Trauma (major bleeding) (ALS-958.2)",
    "8046":	"Other Trauma (fracture/dislocation) (BLS-829.0)",
    "8047":	"Other Trauma (penetrating extremity) (BLS-880.0)",
    "8048":	"Other Trauma (amputation digits) (BLS-886.0)",
    "8049":	"Other Trauma (amputation other) (ALS-887.4)",
    "8050":	"Other Trauma (suspected internal injuries) (ALS-869.0)",
    "8051":	"Burns-Major (ALS-949.3)",
    "8052":	"Burns-Minor (BLS-949.2)",
    "8053":	"Animal Bites/Sting/Envenomation (ALS-989.5)",
    "8054":	"Animal Bites/Sting/Envenomation (BLS-879.8)",
    "8055":	"Lightning (ALS-994.0)",
    "8056":	"Electrocution (ALS-994.8)",
    "8057":	"Near Drowning (ALS-994.1)",
    "8058":	"Eye Injuries (BLS-921.9)",
    "8059":	"Sexual Assault (major injuries) (ALS-995.83)",
    "8060":	"Sexual Assault (minor injuries) (BLS-995.8)",
    "8061":	"Cardiac/Hemodynamic Monitoring Required (ALS-428.9)",
    "8062":	"Advanced Airway Management (ALS-518.81)",
    "8063":	"IV Meds Required (ALS-No ICD code provided))",
    "8064":	"Chemical Restraint (ALS-293.0)",
    "8065":	"Suctioning/Oxygen/IV fluids required (BLS-496.0)",
    "8066":	"Airway Control/Positioning Required (BLS-786.09)",
    "8067":	"Third Party Assistance/Attendant Required (BLS-496.0)",
    "8068":	"Patient Safety (restraints required) (BLS-298.9)",
    "8069":	"Patient Safety (monitoring required) (BLS-293.1)",
    "8070":	"Patient Safety (seclusion required) (BLS-298.8)",
    "8071":	"Patient Safety (risk of falling off stretcher) (BLS-781.3)",
    "8072":	"Special Handling (Isolation) (BLS-041.9)",
    "8073":	"Special Handling (orthopedic device required) (BLS-907.2)",
    "8074":	"Special Handling (positioning required) (BLS-719.45)"
};
var E07_36={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"
};
var E07_37={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "1035":	"A-Interfacility Transport (requires higher level of care)",
    "1036":	"B-Interfacility Transport (service not available)",
    "1037":	"C-ALS Response to BLS Patient",
    "1038":	"D-Medically Necessary Transport (Not Nearest Facility)",
    "1039":	"E-BLS Transport of ALS Patient",
    "1040":	"F-Emergency Trauma Dispatch Condition Code (patient is BLS)",
    "1041":	"Air-A-Long Distance",
    "1042":	"Air-B-Traffic Precludes Ground Transport",
    "1043":	"Air-C-Time Precludes Ground Transport",
    "1044":	"Air-D-Pick up Point not Accessible by Ground Transport"
};
var E08_01={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"
};
var E08_02={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "1060":	"EMS Mutual Aid",
    "1065":	"Fire",
    "1070":	"Hazmat",
    "1075":	"Law",
    "1080":	"Other Health Care Provider",
    "1085":	"Other",
    "1090":	"Rescue",
    "1095":	"Utilities"
};
var E08_03={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "1100":	">15 minutes",
    "1105":	"5 - 15 Minutes",
    "1110":	"<5 Minutes",
    "1115":	"After EMS"
};
var E08_04={"10001":	"Relevant Value for Data Element & Patient Care"};
var E08_05={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "1120":	"None",
    "1125":	"Single",
    "1130":	"Multiple"};
var E08_06={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "0":	"No",
    "1":	"Yes"};
var E08_07={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "1135":	"Home/Residence",
    "1140":	"Farm",
    "1145":	"Mine or Quarry",
    "1150":	"Industrial Place and Premises",
    "1155":	"Place of Recreation or Sport",
    "1160":	"Street or Highway",
    "1165":	"Public Building (schools, gov. offices)",
    "1170":	"Trade or service (business, bars, restaurants, etc)",
    "1175":	"Health Care Facility (clinic, hospital, nursing home)",
    "1180":	"Residential Institution (Nursing Home, jail/prison)",
    "1185":	"Lake, River, Ocean",
    "1190":	"Other Location"
};
var E08_08={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"
};
var E08_09={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"
};
var E08_10={"10001":	"Relevant Value for Data Element & Patient Care"};
var E08_11={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"
};
var E08_12={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"
};
var E08_13={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"
};
var E08_14={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"
};
var E08_15={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"
};
var E09_01={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"
};
var E09_02={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "1195":	"EMS Provider",
    "1200":	"Law Enforcement",
    "1205":	"Lay Person",
    "1210":	"Other Healthcare Provider",
    "1215":	"Patient"
};
var E09_03={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "1220":	"Improved",
    "1225":	"Unchanged",
    "1230":	"Worse"
};
var E09_04={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "0":	"No",
    "1":	"Yes"
};
var E09_05={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"
};
var E09_06={"10001":	"Relevant Value for Data Element & Patient Care"};
var E09_07={"1235":	"Seconds",
    "1240":	"Minutes",
    "1245":	"Hours",
    "1250":	"Days",
    "1255":	"Weeks",
    "1260":	"Months",
    "1265":	"Years",
    "10001":"Relevant Value for Data Element & Patient Care"
};
var E09_08={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"
};
var E09_09={"10001":	"Relevant Value for Data Element & Patient Care"};
var E09_10={"1270":	"Seconds",
    "1275":	"Minutes",
    "1280":	"Hours",
    "1285":	"Days",
    "1290":	"Weeks",
    "1295":	"Months",
    "1300":	"Years"
};
var E09_11={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "1305":	"Abdomen",
    "1310":	"Back",
    "1315":	"Chest",
    "1320":	"Extremity-Lower",
    "1325":	"Extremity-Upper",
    "1330":	"General/Global",
    "1335":	"Genitalia",
    "1340":	"Head",
    "1345":	"Neck"
};
var E09_12={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "1350":	"Cardiovascular",
    "1355":	"CNS/Neuro",
    "1360":	"Endocrine/Metabolic",
    "1365":	"GI",
    "1370":	"Global",
    "1375":	"Musculoskeletal",
    "1380":	"OB/Gyn",
    "1385":	"Psych",
    "1390":	"Pulmonary",
    "1395":	"Renal",
    "1400":	"Skin"
};
var E09_13={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "1405":	"Bleeding",
    "1410":	"Breathing Problem",
    "1415":	"Change in responsiveness",
    "1420":	"Choking",
    "1425":	"Death",
    "1430":	"Device/Equipment Problem",
    "1435":	"Diarrhea",
    "1440":	"Drainage/Discharge",
    "1445":	"Fever",
    "1450":	"Malaise",
    "1455":	"Mass/Lesion",
    "1460":	"Mental/Psych",
    "1465":	"Nausea/Vomiting",
    "1470":	"None",
    "1475":	"Pain",
    "1480":	"Palpitations",
    "1485":	"Rash/Itching",
    "1490":	"Swelling",
    "1495":	"Transport Only",
    "1500":	"Weakness",
    "1505":	"Wound"
};
var E09_14={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "1510":	"Bleeding",
    "1515":	"Breathing Problem",
    "1520":	"Change in responsiveness",
    "1525":	"Choking",
    "1530":	"Death",
    "1535":	"Device/Equipment Problem",
    "1540":	"Diarrhea",
    "1545":	"Drainage/Discharge",
    "1550":	"Fever",
    "1555":	"Malaise",
    "1560":	"Mass/Lesion",
    "1565":	"Mental/Psych",
    "1570":	"Nausea/Vomiting",
    "1575":	"None",
    "1580":	"Pain",
    "1585":	"Palpitations",
    "1590":	"Rash/Itching",
    "1595":	"Swelling",
    "1600":	"Transport Only",
    "1605":	"Weakness",
    "1610":	"Wound"
};
var E09_15={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "1615":	"789.00- Abdominal pain / problems",
    "1620":	"519.80- Airway obstruction",
    "1625":	"995.30- Allergic reaction",
    "1630":	"780.09- Altered level of consciousness",
    "1635":	"312.90- Behavioral / psychiatric disorder",
    "1640":	"427.50- Cardiac arrest",
    "1645":	"427.90- Cardiac rhythm disturbance",
    "1650":	"786.50- Chest pain / discomfort",
    "1655":	"250.90- Diabetic symptoms (hypoglycemia)",
    "1660":	"994.80- Electrocution",
    "1665":	"780.60- Hyperthermia",
    "1670":	"780.90- Hypothermia",
    "1675":	"785.59- Hypovolemia / shock",
    "1680":	"987.90- Inhalation injury (toxic gas)",
    "1685":	"798.99- Obvious death",
    "1690":	"977.90- Poisoning / drug ingestion",
    "1695":	"659.90- Pregnancy / OB delivery",
    "1700":	"786.09- Respiratory distress",
    "1705":	"799.10- Respiratory arrest",
    "1710":	"780.30- Seizure",
    "1715":	"959.90- Sexual assault / rape",
    "1720":	"987.90- Smoke inhalation",
    "1725":	"989.50- Stings / venomous bites",
    "1730":	"436.00- Stroke / CVA",
    "1735":	"780.20- Syncope / fainting",
    "1740":	"959.90- Traumatic injury",
    "1745":	"623.80- Vaginal hemorrhage"
};
var E09_16={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "1750":	"789.00- Abdominal pain / problems",
    "1755":	"519.80- Airway obstruction",
    "1760":	"995.30- Allergic reaction",
    "1765":	"780.09- Altered level of consciousness",
    "1770":	"312.90- Behavioral / psychiatric disorder",
    "1775":	"427.50- Cardiac arrest",
    "1780":	"427.90- Cardiac rhythm disturbance",
    "1785":	"786.50- Chest pain / discomfort",
    "1790":	"250.90- Diabetic symptoms (hypoglycemia)",
    "1795":	"994.80- Electrocution",
    "1800":	"780.60- Hyperthermia",
    "1805":	"780.90- Hypothermia",
    "1810":	"785.59- Hypovolemia / shock",
    "1815":	"987.90- Inhalation injury (toxic gas)",
    "1820":	"798.99- Obvious death",
    "1825":	"977.90- Poisoning / drug ingestion",
    "1830":	"659.90- Pregnancy / OB delivery",
    "1835":	"786.09- Respiratory distress",
    "1840":	"799.10- Respiratory arrest",
    "1845":	"780.30- Seizure",
    "1850":	"959.90- Sexual assault / rape",
    "1855":	"987.90- Smoke inhalation",
    "1860":	"989.50- Stings / venomous bites",
    "1865":	"436.00- Stroke / CVA",
    "1870":	"780.20- Syncope / fainting",
    "1875":	"959.90- Traumatic injury",
    "1880":	"623.80- Vaginal hemorrhage"
};
var E10_01={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "9500":	"Aircraft related accident (E84X.0)",
    "9505":	"Bicycle Accident (E826.0)",
    "9510":	"Bites (E906.0)",
    "9515":	"Chemical poisoning (E86X.0)",
    "9520":	"Child battering (E967.0)",
    "9525":	"Drowning (E910.0)",
    "9530":	"Drug poisoning (E85X.0)",
    "9535":	"Electrocution (non-lightning) (E925.0)",
    "9540":	"Excessive Cold (E901.0)",
    "9545":	"Excessive Heat (E900.0)",
    "9550":	"Falls (E88X.0)",
    "9555":	"Fire and Flames (E89X.0)",
    "9560":	"Firearm assault (E965.0)",
    "9565":	"Firearm injury (accidental) (E985.0)",
    "9570":	"Firearm self inflicted (E955.0)",
    "9575":	"Lightning (E907.0)",
    "9580":	"Machinery accidents (E919.0)",
    "9585":	"Mechanical Suffocation (E913.0)",
    "9590":	"Motor Vehicle non-traffic accident (E82X.0)",
    "9595":	"Motor Vehicle traffic accident (E81X.0)",
    "9600":	"Motorcycle Accident (E81X.1)",
    "9605":	"Non-Motorized Vehicle Accident (E848.0)",
    "9610":	"Pedestrian traffic accident (E814.0)",
    "9615":	"Radiation exposure (E926.0)",
    "9620":	"Rape (E960.1)",
    "9625":	"Smoke Inhalation (E89X.2)",
    "9630":	"Stabbing/Cutting Accidental (E986.0)",
    "9635":	"Stabbing/Cutting Assault (E966.0)",
    "9640":	"Struck by Blunt/Thrown Object (E968.2)",
    "9645":	"Venomous stings (plants, animals) (E905.0)",
    "9650":	"Water Transport accident (E83X.0)"
};
var E10_02={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "2020":	"Intentional, Other (Assaulted)",
    "2025":	"Intentional, Self",
    "2030":	"Unintentional"
};
var E10_03={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "2035":	"Blunt",
    "2040":	"Burn",
    "2045":	"Other",
    "2050":	"Penetrating"
};
var E10_04={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "2055":	"Dash Deformity",
    "2060":	"DOA Same Vehicle",
    "2065":	"Ejection",
    "2070":	"Fire",
    "2075":	"Rollover/Roof Deformity",
    "2080":	"Side Post Deformity",
    "2085":	"Space Intrusion >1 foot",
    "2090":	"Steering Wheel Deformity",
    "2095":	"Windshield Spider/Star"
};
var E10_05={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "2100":	"Center Front",
    "2105":	"Center Rear",
    "2110":	"Left Front",
    "2115":	"Left Rear",
    "2120":	"Left Side",
    "2125":	"Right Front",
    "2130":	"Right Rear",
    "2135":	"Right Side",
    "2140":	"Roll Over"};
var E10_06={"10001":	"Relevant Value for Data Element & Patient Care",
    "18033":"If a value of 50 is passed, the location is designated Cargo Area"
};
var E10_07={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "2145":	"Driver",
    "2150":	"Left (non-driver)",
    "2155":	"Middle",
    "2160":	"Other",
    "2165":	"Right"};
var E10_08={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "2170":	"Child Restraint",
    "2175":	"Eye Protection",
    "2180":	"Helmet Worn",
    "2185":	"Lap Belt",
    "2187":	"None",
    "2190":	"Other",
    "2195":	"Personal Floatation Device",
    "2200":	"Protective Clothing",
    "2205":	"Protective Non-Clothing Gear",
    "2210":	"Shoulder Belt"
};
var E10_09={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "2215":	"No Airbag Present",
    "2220":	"No Airbag Deployed",
    "2225":	"Airbag Deployed Front",
    "2230":	"Airbag Deployed Side",
    "2235":	"Airbag Deployed Other (knee, airbelt, etc.)"
};
var E10_10={"10001":	"Relevant Value for Data Element & Patient Care"};
var E11_01={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "0":	"No",
    "2240":	"Yes, Prior to EMS Arrival",
    "2245":	"Yes, After EMS Arrival"
};
var E11_02={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "2250":	"Presumed Cardiac",
    "2255":	"Trauma",
    "2260":	"Drowning",
    "2265":	"Respiratory",
    "2270":	"Electrocution",
    "2275":	"Other"
};
var E11_03={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "2280":	"Attempted Defibrillation",
    "2285":	"Attempted Ventilation",
    "2290":	"Initiated Chest Compressions",
    "2295":	"Not Attempted-Considered Futile",
    "2300":	"Not Attempted-DNR Orders",
    "2305":	"Not Attempted-Signs of Circulation"
};
var E11_04={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "2310":	"Witnessed by Healthcare Provider",
    "2315":	"Witnessed by Lay Person",
    "2320":	"Not Witnessed"
};
var E11_05={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "2325":	"Asystole",
    "2330":	"Bradycardia",
    "2335":	"Normal Sinus Rhythm",
    "2340":	"Other",
    "2345":	"PEA",
    "2350":	"Unknown AED Non-Shockable Rhythm",
    "2355":	"Unknown AED Shockable Rhythm",
    "2360":	"Ventricular Fibrillation",
    "2365":	"Ventricular Tachycardia"
};
var E11_06={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "0":	"No",
    "2370":	"Yes, Prior to ED Arrival Only",
    "2375":	"Yes, Prior to ED Arrival and at the ED"
};
var E11_07={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "2380":	"CPC 1 or 2",
    "2385":	"CPC 3 or 4"
};
var E11_08={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "2390":	">20 Minutes",
    "2395":	"15-20 Minutes",
    "2400":	"10-15 Minutes",
    "2405":	"8-10 Minutes",
    "2410":	"6-8 Minutes",
    "2415":	"4-6 Minutes",
    "2420":	"2-4 Minutes",
    "2425":	"0-2 Minutes"};
var E11_09={"10001":	"Relevant Value for Data Element & Patient Care"};
var E11_10={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "2430":	"DNR",
    "2435":	"Medical Control Order",
    "2440":	"Obvious Signs of Death",
    "2445":	"Protocol/Policy Requirements Completed",
    "2450":	"Return of Spontaneous Circulation (pulse or BP noted)"
};
var E11_11={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "2455":	"12 Lead ECG-Anterior Ischemia",
    "2460":	"12 Lead ECG-Inferior Ischemia",
    "2465":	"12 Lead ECG-Lateral Ischemia",
    "2470":	"Agonal/Idioventricular",
    "2475":	"Artifact",
    "2480":	"Asystole",
    "2485":	"Atrial Fibrillation/Flutter",
    "2490":	"AV Block-1st Degree",
    "2495":	"AV Block-2nd Degree-Type 1",
    "2500":	"AV Block-2nd Degree-Type 2",
    "2505":	"AV Block-3rd Degree",
    "2510":	"Junctional",
    "2515":	"Left Bundle Branch Block",
    "2520":	"Normal Sinus Rhythm",
    "2525":	"Other",
    "2530":	"Paced Rhythm",
    "2535":	"PEA",
    "2540":	"Premature Atrial Contractions",
    "2545":	"Premature Ventricular Contractions",
    "2550":	"Right Bundle Branch Block",
    "2555":	"Sinus Arrhythmia",
    "2560":	"Sinus Bradycardia",
    "2565":	"Sinus Tachycardia",
    "2570":	"Supraventricular Tachycardia",
    "2575":	"Torsades De Points",
    "2580":	"Unknown AED Non-Shockable Rhythm",
    "2585":	"Unknown AED Shockable Rhythm",
    "2590":	"Ventricular Fibrillation",
    "2595":	"Ventricular Tachycardia"
};
var E12_01={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "2600":	"Developmentally Impaired",
    "2605":	"Hearing Impaired",
    "2610":	"Language",
    "2615":	"None",
    "2620":	"Physically Impaired",
    "2625":	"Physically Restrained",
    "2630":	"Speech Impaired",
    "2635":	"Unattended or Unsupervised (including minors)",
    "2640":	"Unconscious"
};
var E12_02={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"};
var E12_03={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"};
var E12_04={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"};
var E12_05={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"};
var E12_06={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"};
var E12_07={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "2645":	"State/EMS DNR Form",
    "2650":	"Other Healthcare DNR Form",
    "2655":	"Living Will",
    "2660":	"Family/Guardian request DNR (but no documentation)",
    "2665":	"Other",
    "2670":	"None"
};
var E12_08={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care",
    "10008":"NKDA (No Known Drug Allergies)"};
var E12_09={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "2675":	"Insect Sting",
    "2680":	"Food Allergy",
    "2685":	"Latex",
    "2690":	"Chemical",
    "2695":	"Other",
    "2700":	"None"};
var E12_10={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"
};
var E12_11={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "2705":	"Bystander/Other",
    "2710":	"Family",
    "2715":	"Health Care Personnel",
    "2720":	"None",
    "2725":	"Patient"
};
var E12_12={"2730":	"Anthrax",
    "2735":	"DPT (Diphtheria, Tetanus, Pertussis)",
    "2740":	"Hemophilus Influenza B",
    "2745":	"Hepatitis A",
    "2750":	"Hepatitis B",
    "2755":	"Influenza (Flu)",
    "2760":	"MMR (Measles, Mumps, Rubella)",
    "2765":	"Polio = 8, Pneumococcal (pneumonia)",
    "2770":	"Small Pox",
    "2775":	"Tetanus",
    "2780":	"Varicella"
};
var E12_13={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":"Relevant Value for Data Element & Patient Care"
};
var E12_14={"10001":	"Relevant Value for Data Element & Patient Care"};
var E12_15={"10001":	"Relevant Value for Data Element & Patient Care"};
var E12_16={"2785":	"GMS",
    "2790":	"Inches",
    "2795":	"IU",
    "2800":	"KVO (TKO)",
    "2805":	"L/MIN",
    "2810":	"LITERS",
    "2815":	"LPM",
    "2820":	"MCG",
    "2825":	"MCG/KG/MIN",
    "2830":	"MEQ",
    "2835":	"MG",
    "2840":	"MG/KG/MIN",
    "2845":	"ML",
    "2850":	"ML/HR",
    "2855":	"Other",
    "2860":	"Puffs"};
var E12_17={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "2865":	"Endotracheal tube",
    "2870":	"Gastrostomy",
    "2875":	"Inhalation",
    "2880":	"Intramuscular",
    "2890":	"Intraocular",
    "2895":	"Intravenous",
    "2900":	"Nasal",
    "2905":	"Nasal prongs",
    "2910":	"Nasogastric",
    "2915":	"Ophthalmic",
    "2920":	"Oral",
    "2925":	"Other/miscellaneous",
    "2930":	"Otic",
    "2935":	"Non Re-breather mask",
    "2940":	"Rectal",
    "2945":	"Subcutaneous",
    "2950":	"Sublingual",
    "2955":	"Topical",
    "2960":	"Tracheostomy",
    "2965":	"Transdermal",
    "2970":	"Urethral",
    "2975":	"Ventimask",
    "2980":	"Wound"};
var E12_18={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "0":	"No",
    "1":	"Yes"};
var E12_19={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "2985":	"Smell of Alcohol on Breath",
    "2990":	"Patient Admits to Alcohol Use",
    "2995":	"Patient Admits to Drug Use",
    "3000":	"Alcohol and/or Drug Paraphernalia at Scene"};
var E12_20={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "0":	"No",
    "1":	"Yes"};
var E13_01={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"};
var E14_01={"10001":	"Relevant Value for Data Element & Patient Care"};
var E14_02={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "0":	"No",
    "1":	"Yes"};
var E14_03={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3005":	"12 Lead ECG-Anterior Ischemia",
    "3010":	"12 Lead ECG-Inferior Ischemia",
    "3015":	"12 Lead ECG-Lateral Ischemia",
    "3020":	"Agonal/Idioventricular",
    "3025":	"Artifact",
    "3030":	"Asystole",
    "3035":	"Atrial Fibrillation/Flutter",
    "3040":	"AV Block-1st Degree",
    "3045":	"AV Block-2nd Degree-Type 1",
    "3050":	"AV Block-2nd Degree-Type 2",
    "3055":	"AV Block-3rd Degree",
    "3060":	"Junctional",
    "3065":	"Left Bundle Branch Block",
    "3070":	"Normal Sinus Rhythm",
    "3075":	"Other",
    "3080":	"Paced Rhythm",
    "3085":	"PEA",
    "3090":	"Premature Atrial Contractions",
    "3095":	"Premature Ventricular Contractions",
    "3100":	"Right Bundle Branch Block",
    "3105":	"Sinus Arrhythmia",
    "3110":	"Sinus Bradycardia",
    "3115":	"Sinus Tachycardia",
    "3120":	"Supraventricular Tachycardia",
    "3125":	"Torsades De Points",
    "3130":	"Unknown AED Non-Shockable Rhythm",
    "3135":	"Unknown AED Shockable Rhythm",
    "3140":	"Ventricular Fibrillation",
    "3145":	"Ventricular Tachycardia"};
var E14_04={"10001":"Relevant Value for Data Element & Patient Care"};
var E14_05={"10001":"Relevant Value for Data Element & Patient Care"};
var E14_06={"3150":	"Arterial Line",
    "3155":	"Automated Cuff",
    "3160":	"Manual Cuff",
    "3165":	"Palpated Cuff",
    "3170":	"Venous Line"};
var E14_07={"10001":"Relevant Value for Data Element & Patient Care"};
var E14_08={"10001":"Relevant Value for Data Element & Patient Care"};
var E14_09={"10001":"Relevant Value for Data Element & Patient Care"};
var E14_10={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3175":	"Regular",
    "3180":	"Irregular"};
var E14_11={"10001":	"Relevant Value for Data Element & Patient Care"};
var E14_12={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3185":	"Normal",
    "3190":	"Labored",
    "3195":	"Fatigued",
    "3200":	"Absent",
    "3205":	"Not Assessed"};
var E14_13={"10001":	"Relevant Value for Data Element & Patient Care"};
var E14_14={"10001":	"Relevant Value for Data Element & Patient Care"};
/*var E14_15={"18000":	"For All Age Groups:  1 = Does Not Open Eyes",
    "18000.5":	
        "18001":	"For All Age Groups:  2 = Opens Eyes to painful stimulation",
"18001.5":	
"18002":	"For All Age Groups:  3 = Opens Eyes to verbal stimulation",
"18002.5":	
"18003":	"For All Age Groups:  4 = Opens Eyes spontaneously",
"18003.5":	
};

var E14_16={	"18004":	"Patients 0-23 months:  1 = None",
    "18005":"Patients 2-5 years:  1 = None",
    "18006":"Patients 0-23 months:  2 = Persistent cry",
    "18007":"Patients 2-5 years:  2 = Grunts",
    "18008":"Patients 0-23 months:  3 = Inappropriate cry",
    "18009":"Patients 2-5 years:  3 = Cries and/or screams",
    "18010":"Patients 0-23 months:  4 = Cries, inconsolable",
    "18011":"Patients 2-5 years:  4 = Inappropriate words",
    "18012":"Patients 0-23 months:  5 = Smiles, coos, cries appropriately",
    "18013":"Patients 2-5 years:  5 = Appropriate words",
    "18016":"Patients >5 years:  1 = None",
    "18016.5:	
    "18017":"Patients >5 years:  2 = Non-specified sounds",
"18017.5":	
"18018":	"Patients >5 years:  3 = Inappropriate words",
"18018.5":	
"18019":	"Patients >5 years:  4 = Confused conversation or speech",
"18019.5":	
"18020":	"Patients >5 years:  5 = Oriented and appropriate speech",
};
*/
var E14_17={"18021":	"Patients up to 5 years:  1 = None",
    "18022":"Patients >5 years:  1 = None",
    "18023":"Patients up to 5 years:  2 = Extensor posturing in response to painful stimulation",
    "18024":"Patients >5 years:  2 = Extensor posturing in response to painful stimulation",
    "18025":"Patients up to 5 years:  3 = Flexor posturing in response to painful stimulation",
    "18026":"Patients >5 years:  3 = Flexor posturing in response to painful stimulation",
    "18027":"Patients up to 5 years:  4 = General withdrawal in response to painful stimulation",
    "18028":"Patients >5 years:  4 = General withdrawal in response to painful stimulation",
    "18029":"Patients up to 5 years:  5 = Localization of painful stimulation",
    "18030":"Patients >5 years:  5 = Localization of painful stimulation",
    "18031":"Patients up to 5 years:  6 = Spontaneous",
    "18032":"Patients >5 years:  6 = Obeys commands with appropriate motor responses"};
var E14_18={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3210":	"Initial GCS has legitimate values without interventions such as intubation and sedation",
    "3215":	"Patient Chemically Sedated",
    "3220":	"Patient Intubated",
    "3225":	"Patient Intubated and Chemically Paralyzed"};
var E14_19={"10001":	"Relevant Value for Data Element & Patient Care"};
var E14_20={"10001":	"Relevant Value for Data Element & Patient Care"};
var E14_21={"3230":	"Axillary",
    "3235":	"Oral",
    "3240":	"Rectal",
    "3245":	"Tympanic",
    "3250":	"Urinary catheter"
};
var E14_22={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3255":	"Alert",
    "3260":	"Verbal",
    "3265":	"Painful",
    "3270":	"Unresponsive"
};
var E14_23={"10001":"Relevant Value for Data Element & Patient Care"};
var E14_24={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3275":	"Cincinnati Stroke Scale Negative",
    "3280":	"Cincinnati Stroke Scale Non-conclusive",
    "3285":	"Cincinnati Stroke Scale Positive",
    "3290":	"LA Stroke Scale Negative",
    "3295":	"LA Stroke Scale Non-conclusive",
    "3300":	"LA Stroke Scale Positive"};
var E14_25={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3305":	"Definite Contraindications to Thrombolytic use",
    "3310":	"No Contraindications to Thrombolytic Use",
    "3315":	"Possible Contraindications to Thrombolytic Use"};
var E14_26={"10001":	"Relevant Value for Data Element & Patient Care"};
var E14_27={"10001":	"Relevant Value for Data Element & Patient Care"};
var E14_28={"10001":	"Relevant Value for Data Element & Patient Care"};
var E15_01={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3320":	"Amputation",
    "3325":	"Bleeding Controlled",
    "3330":	"Bleeding Uncontrolled",
    "3335":	"Burn",
    "3340":	"Crush",
    "3345":	"Dislocation Fracture",
    "3350":	"Gunshot",
    "3355":	"Laceration",
    "3360":	"Pain without swelling/bruising",
    "3365":	"Puncture/stab",
    "3370":	"Soft Tissue Swelling/Bruising"};
var E15_02={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3320":	"Amputation",
    "3325":	"Bleeding Controlled",
    "3330":	"Bleeding Uncontrolled",
    "3335":	"Burn",
    "3340":	"Crush",
    "3345":	"Dislocation Fracture",
    "3350":	"Gunshot",
    "3355":	"Laceration",
    "3360":	"Pain without swelling/bruising",
    "3365":	"Puncture/stab",
    "3370":	"Soft Tissue Swelling/Bruising"};
var E15_03={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3320":	"Amputation",
    "3325":	"Bleeding Controlled",
    "3330":	"Bleeding Uncontrolled",
    "3335":	"Burn",
    "3340":	"Crush",
    "3345":	"Dislocation Fracture",
    "3350":	"Gunshot",
    "3355":	"Laceration",
    "3360":	"Pain without swelling/bruising",
    "3365":	"Puncture/stab",
    "3370":	"Soft Tissue Swelling/Bruising"};
var E15_04={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3320":	"Amputation",
    "3325":	"Bleeding Controlled",
    "3330":	"Bleeding Uncontrolled",
    "3335":	"Burn",
    "3340":	"Crush",
    "3345":	"Dislocation Fracture",
    "3350":	"Gunshot",
    "3355":	"Laceration",
    "3360":	"Pain without swelling/bruising",
    "3365":	"Puncture/stab",
    "3370":	"Soft Tissue Swelling/Bruising"};
var E15_05={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3320":	"Amputation",
    "3325":	"Bleeding Controlled",
    "3330":	"Bleeding Uncontrolled",
    "3335":	"Burn",
    "3340":	"Crush",
    "3345":	"Dislocation Fracture",
    "3350":	"Gunshot",
    "3355":	"Laceration",
    "3360":	"Pain without swelling/bruising",
    "3365":	"Puncture/stab",
    "3370":	"Soft Tissue Swelling/Bruising"};
var E15_06={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3320":	"Amputation",
    "3325":	"Bleeding Controlled",
    "3330":	"Bleeding Uncontrolled",
    "3335":	"Burn",
    "3340":	"Crush",
    "3345":	"Dislocation Fracture",
    "3350":	"Gunshot",
    "3355":	"Laceration",
    "3360":	"Pain without swelling/bruising",
    "3365":	"Puncture/stab",
    "3370":	"Soft Tissue Swelling/Bruising"};
var E15_07={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3320":	"Amputation",
    "3325":	"Bleeding Controlled",
    "3330":	"Bleeding Uncontrolled",
    "3335":	"Burn",
    "3340":	"Crush",
    "3345":	"Dislocation Fracture",
    "3350":	"Gunshot",
    "3355":	"Laceration",
    "3360":	"Pain without swelling/bruising",
    "3365":	"Puncture/stab",
    "3370":	"Soft Tissue Swelling/Bruising"};
var E15_08={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3320":	"Amputation",
    "3325":	"Bleeding Controlled",
    "3330":	"Bleeding Uncontrolled",
    "3335":	"Burn",
    "3340":	"Crush",
    "3345":	"Dislocation Fracture",
    "3350":	"Gunshot",
    "3355":	"Laceration",
    "3360":	"Pain without swelling/bruising",
    "3365":	"Puncture/stab",
    "3370":	"Soft Tissue Swelling/Bruising"};
var E15_09={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3320":	"Amputation",
    "3325":	"Bleeding Controlled",
    "3330":	"Bleeding Uncontrolled",
    "3335":	"Burn",
    "3340":	"Crush",
    "3345":	"Dislocation Fracture",
    "3350":	"Gunshot",
    "3355":	"Laceration",
    "3360":	"Pain without swelling/bruising",
    "3365":	"Puncture/stab",
    "3370":	"Soft Tissue Swelling/Bruising"};
var E15_10={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3320":	"Amputation",
    "3325":	"Bleeding Controlled",
    "3330":	"Bleeding Uncontrolled",
    "3335":	"Burn",
    "3340":	"Crush",
    "3345":	"Dislocation Fracture",
    "3350":	"Gunshot",
    "3355":	"Laceration",
    "3360":	"Pain without swelling/bruising",
    "3365":	"Puncture/stab",
    "3370":	"Soft Tissue Swelling/Bruising"};
var E15_11={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3320":	"Amputation",
    "3325":	"Bleeding Controlled",
    "3330":	"Bleeding Uncontrolled",
    "3335":	"Burn",
    "3340":	"Crush",
    "3345":	"Dislocation Fracture",
    "3350":	"Gunshot",
    "3355":	"Laceration",
    "3360":	"Pain without swelling/bruising",
    "3365":	"Puncture/stab",
    "3370":	"Soft Tissue Swelling/Bruising"};
var E16_01={"10001":	"Relevant Value for Data Element & Patient Care"};
var E16_02={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3375":	"Blue",
    "3380":	"Green",
    "3385":	"Grey",
    "3390":	"Orange",
    "3395":	"Pink",
    "3400":	"Purple",
    "3405":	"Red",
    "3410":	"White",
    "3415":	"Yellow"};
var E16_03={"10001":	"Relevant Value for Data Element & Patient Care"};
var E16_04={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3420":	"Normal",
    "3425":	"Not Done",
    "3430":	"Clammy",
    "3435":	"Cold",
    "3440":	"Cyanotic",
    "3445":	"Jaundiced",
    "3450":	"Lividity",
    "3455":	"Mottled",
    "3460":	"Pale",
    "3465":	"Warm"};
var E16_05 =
    {
        "-25": "Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3470":	"Normal",
    "3475":	"Not Done",
    "3480":	"Asymmetric Smile or Droop",
    "3485":	"Drainage",
    "3490":	"Mass/Lesion",
    "3495":	"Swelling"};

var E16_06={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3500":	"Normal",
    "3505":	"Not Done",
    "3510":	"JVD",
    "3515":	"Strider",
    "3520":	"SubQ Air",
    "3525":	"Tracheal Dev"};

var E16_07={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3530":	"Normal",
    "3535":	"Not Done",
    "3540":	"Accessory Muscles",
    "3545":	"Decreased BS-Left",
    "3550":	"Decreased BS-Right",
    "3555":	"Flail Segment-Left",
    "3560":	"Flail Segment-Right",
    "3565":	"Increased Effort",
    "3570":	"Normal BS",
    "3575":	"Rales",
    "3580":	"Rhonchi/Wheezing",
    "3585":	"Tenderness-Left",
    "3590":	"Tenderness-Right"};
var E16_08={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3595":	"Normal",
    "3600":	"Not Done",
    "3605":	"Decreased Sounds",
    "3610":	"Murmur"};

var E16_09={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3615":	"Normal",
    "3620":	"Not Done",
    "3625":	"Distention",
    "3630":	"Guarding",
    "3635":	"Mass",
    "3640":	"Tenderness"};

var E16_10={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3645":	"Normal",
    "3650":	"Not Done",
    "3655":	"Distention",
    "3660":	"Guarding",
    "3665":	"Mass",
    "3670":	"Tenderness"
};
var E16_11={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3675":	"Normal",
    "3680":	"Not Done",
    "3685":	"Distention",
    "3690":	"Guarding",
    "3695":	"Mass",
    "3700":	"Tenderness"};

var E16_12={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3705":	"Normal",
    "3710":	"Not Done",
    "3715":	"Distention",
    "3720":	"Guarding",
    "3725":	"Mass",
    "3730":	"Tenderness"};

var E16_13={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3735":	"Normal",
    "3740":	"Not Done",
    "3745":	"Crowning",
    "3750":	"Genital Injury",
    "3755":	"Tenderness",
    "3760":	"Unstable"};
var E16_14={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3765":	"Normal",
    "3770":	"Not Done",
    "3775":	"Pain to ROM",
    "3780":	"Tender Para-spinous",
    "3785":	"Tender Spinous Process"};

var E16_15={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3790":	"Normal",
    "3795":	"Not Done",
    "3800":	"Pain to ROM",
    "3805":	"Tender Para-spinous",
    "3810":	"Tender Spinous Process"};

var E16_16={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3815":	"Normal",
    "3820":	"Not Done",
    "3825":	"Pain to ROM",
    "3830":	"Tender Para-spinous",
    "3835":	"Tender Spinous Process"
};
var E16_17={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3840":	"Normal",
    "3845":	"Not Done",
    "3850":	"Abnormal Pulse",
    "3855":	"Abnormal Sensation",
    "3860":	"Edema",
    "3865":	"Tenderness",
    "3870":	"Weakness"};

var E16_18={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3875":	"Normal",
    "3880":	"Not Done",
    "3885":	"Abnormal Pulse",
    "3890":	"Abnormal Sensation",
    "3895":	"Edema",
    "3900":	"Tenderness",
    "3905":	"Weakness"};
var E16_19={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3910":	"Normal",
    "3915":	"Not Done",
    "3920":	"Abnormal Pulse",
    "3925":	"Abnormal Sensation",
    "3930":	"Edema",
    "3935":	"Tenderness",
    "3940":	"Weakness"};
var E16_20={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3945":	"Normal",
    "3950":	"Not Done",
    "3955":	"Abnormal Pulse",
    "3960":	"Abnormal Sensation",
    "3965":	"Edema",
    "3970":	"Tenderness",
    "3975":	"Weakness"};
var E16_21={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "3980":	"Not Done",
    "3985":	"2-mm",
    "3990":	"3-mm",
    "3995":	"4-mm",
    "4000":	"5-mm",
    "4005":	"6-mm",
    "4010":	"7-mm",
    "4015":	"Blind",
    "4020":	"Reactive",
    "4025":	"Non-Reactive"};
var E16_22={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "4030":	"Not Done",
    "4035":	"2-mm",
    "4040":	"3-mm",
    "4045":	"4-mm",
    "4050":	"5-mm",
    "4055":	"6-mm",
    "4060":	"7-mm",
    "4065":	"Blind",
    "4070":	"Reactive",
    "4075":	"Non-Reactive"};
var E16_23={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "4080":	"Normal",
    "4085":	"Not Done",
    "4090":	"Combative",
    "4095":	"Confused",
    "4100":	"Hallucinations",
    "4105":	"Oriented-Person",
    "4110":	"Oriented-Place",
    "4115":	"Oriented-Time",
    "4120":	"Unresponsive"};
var E16_24={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "4125":	"Normal",
    "4130":	"Not Done",
    "4135":	"Abnormal Gait",
    "4140":	"Facial Droop",
    "4145":	"Seizures",
    "4150":	"Speech Normal",
    "4155":	"Speech Slurring",
    "4160":	"Tremors",
    "4165":	"Weakness-Left Sided",
    "4170":	"Weakness-Right Sided"};
var E17_01 = {
    "-25": "Not Applicable",
    "-10": "Not Known",
    "-5": "Not Available",
    "10001": "Relevant Value for Data Element & Patient Care",
    "6720": "Abdominal Pain ",
    "6730": "Airway",
    "6740": "Airway-Failed ",
    "6760": "Airway-RSI",
    "6770": "Allergic Reaction/Anaphylaxis ",
    "6780": "Altered Mental Status",
    "6785": "AltitudeSickness ",
    "6790": "Asystole",
    "6791": "Atrial Fibrillation ",
    "6800": "Back Pain",
    "6810": "Behavioral ",
    "6820": "Bites and Envenomations",
    "6830": "Bradycardia ",
    "6840": "Burns",
    "6850": "Cardiac Arrest ",
    "6860": "Cardiac Chest Pain",
    "6870": "Childbirth/Labor ",
    "6875": "Cold Exposure",
    "6880": "Dental Problems",
    "6881": "Device Malfunction",
    "6885": "Diarrhea ",
    "6890": "Drowning/Near Drowning",
    "6892": "Diving Emergencies ",
    "6900": "Electrical Injuries",
    "6910": "Epistaxis ",
    "6911": "Exposure-Airway Irritants",
    "6912": "Exposure-Biological/Infectious ",
    "6913": "Exposure-Blistering Agents",
    "6914": "Exposure-Cyanide ",
    "6915": "Exposure-Nerve Agents",
    "6916": "Exposure-Radiologic Agents ",
    "6917": "Exposure-Riot Control Agents",
    "6920": "Extremity Trauma ",
    "6925": "Eye Trauma",
    "6930": "Fever ",
    "6935": "Gynecologic Emergencies",
    "6940": "Head Trauma ",
    "6945": "Hyperglycemia",
    "6950": "Hypertension ",
    "6960": "Hyperthermia",
    "6965": "Hypoglycemia ",
    "6970": "Hypotension/Shock (Non-Trauma)",
    "6980": "Hypothermia ",
    "6990": "IV Access",
    "7000": "Trauma-Multisystem ",
    "7010": "Newly Born",
    "7020": "Obstetrical Emergencies ",
    "7030": "Overdose/Toxic Ingestion",
    "7040": "Pain Control ",
    "7130": "Post Resuscitation",
    "7140": "Pulmonary Edema ",
    "7150": "Pulseless Electrical Activity",
    "7160": "Respiratory Distress ",
    "7170": "Seizure",
    "7175": "Spinal Cord Trauma ",
    "7180": "Spinal Immobilization",
    "7190": "Supraventricular Tachycardia ",
    "7200": "Stroke/TIA",
    "7210": "Syncope ",
    "7214": "Trauma-Arrest",
    "7215": "Trauma-Amputation ",
    "7220": "Universal Patient Care",
    "7230": "Ventricular Fibrillation ",
    "7232": "Ventricular Ectopy",
    "7240": "Ventricular Tachycardia ",
    "7251": "Vomiting"
};





var E18_01={"10001":	"Relevant Value for Data Element & Patient Care"};
var E18_02={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "0":	"No",
    "1":	"Yes"};
var E18_03={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"};
var E18_04={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "4175":	"Endotracheal tube",
    "4180":	"Gastrostomy tube",
    "4185":	"Inhalation",
    "4190":	"Intramuscular",
    "4191":	"Intraosseous",
    "4200":	"Intraocular",
    "4205":	"Intravenous",
    "4210":	"Nasal",
    "4215":	"Nasal prongs",
    "4220":	"Nasogastric",
    "4225":	"Ophthalmic",
    "4230":	"Oral",
    "4235":	"Other/miscellaneous",
    "4240":	"Otic",
    "4245":	"Re-breather mask",
    "4250":	"Rectal",
    "4255":	"Subcutaneous",
    "4260":	"Sublingual",
    "4265":	"Topical",
    "4270":	"Tracheostomy",
    "4275":	"Transdermal",
    "4280":	"Urethral",
    "4285":	"Ventimask",
    "4290":	"Wound"};
var E18_05={"10001":	"Relevant Value for Data Element & Patient Care"};
var E18_06={"4295":	"GMS",
    "4300":	"Inches",
    "4305":	"IU",
    "4310":	"KVO (TKO)",
    "4315":	"L/MIN",
    "4320":	"LITERS",
    "4325":	"LPM",
    "4330":	"MCG",
    "4335":	"MCG/KG/MIN",
    "4340":	"MEQ",
    "4345":	"MG",
    "4350":	"MG/KG/MIN",
    "4355":	"ML",
    "4360":	"ML/HR",
    "4365":	"Other",
    "4370":	"Puffs"};
var E18_07={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "4375":	"Improved",
    "4380":	"Unchanged",
    "4385":	"Worse"};
var E18_08={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "4390":	"None",
    "4395":	"Altered Mental Status",
    "4400":	"Apnea",
    "4405":	"Bleeding",
    "4410":	"Bradycardia",
    "4415":	"Diarrhea",
    "4420":	"Extravasion",
    "4425":	"Hypertension",
    "4430":	"Hyperthermia",
    "4435":	"Hypotension",
    "4440":	"Hypoxia",
    "4445":	"Injury",
    "4450":	"Itching/Urticaria",
    "4455":	"Nausea",
    "4460":	"Other",
    "4465":	"Respiratory Distress",
    "4470":	"Tachycardia",
    "4475":	"Vomiting"};
var E18_09={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"
};
var E18_10={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "4480":	"On-Line",
    "4485":	"On-Scene",
    "4490":	"Protocol (Standing Order)",
    "4495":	"Written Orders (Patient Specific)"
};
var E18_11={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"};
var E19_01={"10001":	"Relevant Value for Data Element & Patient Care"};
var E19_02={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "0":	"No",
    "1":	"Yes"};
var E19_03={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"};
var E19_04={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"};
var E19_05={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"};
var E19_06={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "0":	"No",
    "1":	"Yes"};
var E19_07={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "4500":	"None",
    "4505":	"Altered Mental Status",
    "4510":	"Apnea",
    "4515":	"Bleeding",
    "4520":	"Bradycardia",
    "4525":	"Diarrhea",
    "4530":	"Esophageal Intubation-immediately",
    "4535":	"Esophageal Intubation-other",
    "4540":	"Extravasion",
    "4545":	"Hypertension",
    "4550":	"Hyperthermia",
    "4555":	"Hypotension",
    "4560":	"Hypoxia",
    "4565":	"Injury",
    "4570":	"Itching/Urticaria",
    "4575":	"Nausea",
    "4580":	"Other",
    "4585":	"Respiratory Distress",
    "4590":	"Tachycardia",
    "4595":	"Vomiting"};
var E19_08={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "4600":	"Improved",
    "4605":	"Unchanged",
    "4610":	"Worse"};
var E19_09={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"};
var E19_10={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "4615":	"On-Line",
    "4620":	"On-Scene",
    "4625":	"Protocol (Standing Order)",
    "4630":	"Written Orders (Patient Specific)"};
var E19_11={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"
};
var E19_12={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "4635":	"Antecubital-Left",
    "4640":	"Antecubital-Right",
    "4645":	"External Jugular-Left",
    "4650":	"External Jugular-Right",
    "4655":	"Femoral-Left IV",
    "4660":	"Femoral-Left Distal IO",
    "4665":	"Femoral-Right IV",
    "4670":	"Femoral-Right IO",
    "4675":	"Forearm-Left",
    "4680":	"Forearm-Right",
    "4685":	"Hand-Left",
    "4690":	"Hand-Right",
    "4695":	"Lower Extremity-Left",
    "4700":	"Lower Extremity-Right",
    "4705":	"Other",
    "4710":	"Scalp",
    "4715":	"Sternal IO",
    "4720":	"Tibia IO-Left",
    "4725":	"Tibia IO-Right",
    "4730":	"Umbilical"};
var E19_13={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "4735":	"Auscultation of Bilateral Breath Sounds",
    "4740":	"Colormetric CO2 Detector Confirmation",
    "4745":	"Digital CO2 Confirmation",
    "4750":	"Esophageal Bulb Aspiration confirmation",
    "4755":	"Negative Auscultation of the Epigastrium",
    "4760":	"Visualization of the Chest Rising with ventilation",
    "4765":	"Visualization of Tube Passing Through the Cords",
    "4770":	"Waveform CO2 Confirmation"
};
var E19_14={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "4775":	"Auscultation of Bilateral Breath Sounds",
    "4780":	"Colormetric CO2 Detector Confirmation",
    "4785":	"Digital CO2 Confirmation",
    "4790":	"Esophageal Bulb Aspiration confirmation",
    "4795":	"Negative Auscultation of the Epigastrium",
    "4800":	"Visualization of the Chest Rising with ventilation",
    "4805":	"Visualization of Tube Passing Through the Cords",
    "4810":	"Waveform CO2 Confirmation"
};
var E20_01={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"
};
var E20_02={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"
};
var E20_03={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"
};
var E20_04={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"
};
var E20_05={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"
};
var E20_06={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"
};
var E20_07={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"
};
var E20_08={"10001":	"Relevant Value for Data Element & Patient Care"};
var E20_09={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"
};
var E20_10={"4815":	"Cancelled",
    "4820":	"Dead at Scene",
    "4825":	"No Patient Found",
    "4830":	"No Treatment Required",
    "4835":	"Patient Refused Care",
    "4840":	"Treated and Released",
    "4845":	"Treated, Transferred Care",
    "4850":	"Treated, Transported by EMS",
    "4855":	"Treated, Transported by Law Enforcement",
    "4860":	"Treated, Transported by Private Vehicle"
};
var E20_11={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "4865":	"Assisted/Walk",
    "4870":	"Carry",
    "4875":	"Stairchair",
    "4880":	"Stretcher",
    "4885":	"Other"
};
var E20_12={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "4890":	"Car Seat",
    "4895":	"Fowlers",
    "4900":	"Lateral",
    "4905":	"Prone",
    "4910":	"Semi-Fowlers",
    "4915":	"Sitting",
    "4920":	"Supine",
    "4925":	"Other"
};
var E20_13={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "4930":	"Assisted/Walk",
    "4935":	"Carry",
    "4940":	"Stairchair",
    "4945":	"Stretcher",
    "4950":	"Other"
};
var E20_14={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "4955":	"Initial Lights and Sirens, Downgraded to No Lights or Sirens",
    "4960":	"Initial No Lights or Sirens, Upgraded to Lights and Sirens",
    "4965":	"Lights and Sirens",
    "4970":	"No Lights or Sirens"
};
var E20_15={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "4975":	"Improved",
    "4980":	"Unchanged",
    "4985":	"Worse"
};
var E20_16={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "4990":	"Closest Facility (none below)",
    "4995":	"Diversion",
    "5000":	"Family Choice",
    "5005":	"Insurance Status",
    "5010":	"Law Enforcement Choice",
    "5015":	"On-Line Medical Direction",
    "5020":	"Other",
    "5025":	"Patient Choice",
    "5030":	"Patient's Physicians Choice",
    "5035":	"Protocol",
    "5040":	"Specialty Resource Center"
};
var E20_17={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "7270":	"Home",
    "7280":	"Hospital",
    "7290":	"Medical Office/Clinic",
    "7300":	"Morgue",
    "7310":	"Nursing Home",
    "7320":	"Other",
    "7340":	"Other EMS Responder (air)",
    "7350":	"Other EMS Responder (ground)",
    "7360":	"Police/Jail"
};
var E21_01={"10001":	"Relevant Value for Data Element & Patient Care"};
var E21_02={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "5090":	"12-Lead ECG",
    "5095":	"Analysis (Button Pressed)",
    "5100":	"CO2",
    "5105":	"Date Transmitted",
    "5110":	"Defibrillation",
    "5115":	"ECG-Monitor",
    "5120":	"Heart Rate",
    "5125":	"Invasive Pressure 1",
    "5130":	"Invasive Pressure 2",
    "5135":	"No Shock Advised",
    "5140":	"Non-Invasive BP",
    "5145":	"Pacing Electrical Capture",
    "5150":	"Pacing Started",
    "5155":	"Pacing Stopped",
    "5160":	"Patient Connected",
    "5165":	"Power On",
    "5170":	"Pulse Oximetry",
    "5175":	"Pulse Rate",
    "5180":	"Respiratory Rate",
    "5185":	"Shock Advised",
    "5190":	"Sync Off",
    "5195":	"Sync On"
};
var E21_03={"5200":	"JPG",
    "5205":	"PDF"
};
var E21_04={"10001":	"Relevant Value for Data Element & Patient Care"};
var E21_05={"5210":	"Automated",
    "5215":	"Manual",
    "5220":	"Advisory",
    "5225":	"Demand",
    "5230":	"Sensing",
    "5235":	"Mid-Stream",
    "5240":	"Side-Stream"
};
var E21_06={"5245":	"I",
    "5250":	"II",
    "5255":	"III",
    "5260":	"AVR",
    "5265":	"AVL",
    "5270":	"AVF",
    "5275":	"V1",
    "5280":	"V2",
    "5285":	"V3",
    "5290":	"V4",
    "5295":	"V5",
    "5300":	"V6",
    "5305":	"Paddle"
};
var E21_07={"10001":"Relevant Value for Data Element & Patient Care"};
var E21_08={"5310":	"Biphasic",
    "5311":	"Monophasic"};
var E21_09={"10001":	"Relevant Value for Data Element & Patient Care"};
var E21_10={"10001":	"Relevant Value for Data Element & Patient Care"};
var E21_11={"10001":	"Relevant Value for Data Element & Patient Care"};
var E21_12={"10001":	"Relevant Value for Data Element & Patient Care"};
var E21_13={"10001":	"Relevant Value for Data Element & Patient Care"};
var E21_14={"10001":	"Relevant Value for Data Element & Patient Care"};
var E21_15={"10001":	"Relevant Value for Data Element & Patient Care"};
var E21_16={"10001":	"Relevant Value for Data Element & Patient Care"};
var E21_17={"10001":	"Relevant Value for Data Element & Patient Care"};
var E21_18={"10001":	"Relevant Value for Data Element & Patient Care"};
var E21_19={"5320":	"kPa",
    "5325":	"% Volume",
    "5330":	"mmHg"};
var E21_20={"10001":	"Relevant Value for Data Element & Patient Care"};
var E22_01={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "5335":	"Admitted to Hospital Floor",
    "5340":	"Admitted to Hospital ICU",
    "5345":	"Death",
    "5350":	"Not Applicable (Not Transported to ED)",
    "5355":	"Released",
    "5360":	"Transferred"};
var E22_02={"-25":	"Not Applicable",
    "-15":	"Not Reporting",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "5365":	"Death",
    "5370":	"Discharged",
    "5375":	"Transfer to Hospital",
    "5380":	"Transfer to Nursing Home",
    "5385":	"Transfer to Other",
    "5390":	"Transfer to Rehabilitation Facility"};
var E22_03={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"};
var E22_04={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"};
var E22_05={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"};
var E22_06={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"};
var E23_01={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "0":	"No",
    "1":	"Yes"};
var E23_02={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "5395":	"Burn",
    "5400":	"Cardiac/MI",
    "5405":	"CVA/Stroke",
    "5410":	"Drowning",
    "5415":	"Spinal Cord Injury",
    "5420":	"Trauma",
    "5425":	"Traumatic Brain Injury",
    "5430":	"Other"};

var E23_03={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "5435":	"Eye Protection",
    "5440":	"Gloves",
    "5445":	"Level A Suit",
    "5450":	"Level B Suit",
    "5455":	"Level C Suit",
    "5460":	"Mask",
    "5465":	"Other"};
var E23_04={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "5470":	"Biologic Agent",
    "5475":	"Building Failure",
    "5480":	"Chemical Agent",
    "5485":	"Explosive Device",
    "5490":	"Fire",
    "5495":	"Hostage Event",
    "5500":	"Mass Gathering",
    "5505":	"Nuclear Agent",
    "5510":	"Radioactive Device",
    "5515":	"Secondary Destructive Device",
    "5520":	"Shooting/Sniper",
    "5525":	"Vehicular",
    "5530":	"Weather"};
var E23_05={"-25":	"Not Applicable"};
var E23_05={"-10":	"Not Known",
    "-5":	"Not Available",
    "0":	"No",
    "1":	"Yes"};
var E23_06={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "5540":	"Contact to Broken Skin",
    "5545":	"Contact to Intact Skin",
    "5550":	"Contact with Eye",
    "5555":	"Contact with Mucosal Surface",
    "5560":	"Inhalation Exposure",
    "5565":	"Needle Stick with Fluid Injection",
    "5570":	"Needle Stick without Fluid Injection",
    "5575":	"Other Physical injury",
    "5580":	"Death",
    "5585":	"None"};
var E23_07={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "5590":	"This EMS Crew",
    "5595":	"Non-EMS individual",
    "5600":	"Other EMS Personnel"};

var E23_08={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "0":	"No",
    "1":	"Yes"};
var E23_09={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"};
var E23_10={"-25":	"Not Applicable",
    "-10":	"Not Known",
    "-5":	"Not Available",
    "10001":	"Relevant Value for Data Element & Patient Care"};
var E23_11={"10001":	"Relevant Value for Data Element & Patient Care"};

var val2Text = {
    "D01_01": "EMS Agency Number",
    "D01_02":"EMS Agency Name",
"D01_03":"EMS Agency State",
"D01_04":"EMS Agency County",
"D01_05":"Primary Type of Service",
"D01_06":"Other Types of Service",
"D01_07":"Level of Service",
"D01_08":"Organizational Type",
"D01_09":"Organization Status",
"D01_10":"Statistical Year",
"D01_11":"Other Agencies In Area",
"D01_12":"Total Service Size Area",
"D01_13":"Total Service Area Population",
"D01_14":"911 Call Volume per Year",
"D01_15":"EMS Dispatch Volume per Year",
"D01_16":"EMS Transport Volume per Year",
"D01_17":"EMS Patient Contact Volume per Year",
"D01_18":"EMS Billable Calls per Year",
"D01_19":"EMS Agency Time Zone",
"D01_20":"EMS Agency Daylight Savings Time Use",
"D01_21":"National Provider Identifier",
"D02_01":"Agency Contact Last Name",
"D02_02":"Agency Contact Middle Name/Initial",
"D02_03":"Agency Contact First Name",
"D02_04":"Agency Contact Address",
"D02_05":"Agency Contact City",
"D02_06":"Agency Contact State",
"D02_07":"Agency Contact Zip Code",
"D02_08":"Agency Contact Telephone Number",
"D02_09":"Agency Contact Fax Number",
"D02_10":"Agency Contact Email Address",
"D02_11":"Agency Contact Web Address",
"D03_01":"Agency Medical Director Last Name",
"D03_02":"Agency Medical Director Middle Name/Initial",
"D03_03":"Agency Medical Director First Name",
"D03_04":"Agency Medical Director Address",
"D03_05":"Agency Medical Director City",
"D03_06":"Agency Medical Director State",
"D03_07":"Agency Medical Director Zip Code",
"D03_08":"Agency Medical Director Telephone Number",
"D03_09":"Agency Medical Director Fax Number",
"D03_10":"Agency Medical Director's Medical Specialty",
"D03_11":"Agency Medical Director Email Address",
"D04_01":"State Certification Licensure Levels",
"D04_02":"EMS Unit Call Sign",
"D04_03":"Zones",
"D04_04":"Procedures",
"D04_05":"Personnel Level Permitted to Use the Procedure",
"D04_06":"Medications Given",
"D04_07":"Personnel Level Permitted to Use the Medication",
"D04_08":"Protocol",
"D04_09":"Personnel Level Permitted to Use the Protocol",
"D04_10":"Billing Status",
"D04_11":"Hospitals Served",
"D04_12":"Hospital Facility Number",
"D04_13":"Other Destinations",
"D04_14":"Destination Facility Number",
"D04_15":"Destination Type",
"D04_16":"Insurance Companies Used",
"D04_17":"EMD Vendor",
"D05_01":"Station Name",
"D05_02":"Station Number",
"D05_03":"Station Zone",
"D05_04":"Station GPS",
"D05_05":"Station Address",
"D05_06":"Station City",
"D05_07":"Station State",
"D05_08":"Station Zip",
"D05_09":"Station Telephone Number",
"D06_01":"Unit/Vehicle Number",
"D06_03":"Vehicle Type",
"D06_04":"State Certification/Licensure Levels",
"D06_05":"Number Of Each Personnel Level on the Vehicle Crew",
"D06_06":"Vehicle Initial Cost",
"D06_07":"Vehicle Model Year",
"D06_08":"Year Miles/Hours Accrued",
"D06_09":"Annual Vehicle Hours",
"D06_10":"Annual Vehicle Miles",
"D07_01":"Personnel's Agency ID Number",
"D07_02":"State/Licensure ID Number",
"D07_03":"Personnel's Employment Status",
"D07_04":"Employment Status Date",
"D07_05":"Personnel's Level of Certification/Licensure for Agency",
"D07_06":"Date of Personnel's Certification or Licensure for Agency",
"D08_01":"EMS Personnel's Last Name",
"D08_02":"EMS Personnel's Middle Name/Initial",
"D08_03":"EMS Personnel's First Name",
"D08_04":"EMS Personnel's Mailing Address",
"D08_05":"EMS Personnel's City of Residence",
"D08_06":"EMS Personnel's State",
"D08_07":"EMS Personnel's Zip Code",
"D08_08":"EMS Personnel's Work Telephone",
"D08_09":"EMS Personnel's Home Telephone",
"D08_10":"EMS Personnel's Email Address",
"D08_11":"EMS Personnel's Date Of Birth",
"D08_12":"EMS Personnel's Gender",
"D08_13":"EMS Personnel's Race",
"D08_14":"EMS Personnel's Ethnicity",
"D08_15":"State EMS Certification Licensure Level",
"D08_16":"National Registry Credentialed",
"D08_17":"State EMS Current Certification Date",
"D08_18":"Initial State Certification Date",
"D08_19":"Total Length of Service",
"D08_20":"Date Length of Service Documented",
"D09_01":"Device Serial Number",
"D09_02":"Device Name or ID",
"D09_03":"Device Manufacturer",
"D09_04":"Model Number",
"D09_05":"Device Purchase Date",
"E01_01":"Patient Care Report Number",
"E01_02":"Software Creator",
"E01_03":"Software Name",
"E01_04":"Software Version",
"E02_01":"EMS Agency Number",
"E02_02":"Incident Number",
"E02_03":"EMS Unit (Vehicle) Response Number",
"E02_04":"Type of Service Requested",
"E02_05":"Primary Role of the Unit",
"E02_06":"Type of Dispatch Delay",
"E02_07":"Type of Response Delay",
"E02_08":"Type of Scene Delay",
"E02_09":"Type of Transport Delay",
"E02_10":"Type of Turn-Around Delay",
"E02_11":"EMS Unit/Vehicle  Number",
"E02_12":"EMS Unit Call Sign (Radio Number)",
"E02_13":"Vehicle Dispatch  Location",
"E02_14":"Vehicle Dispatch Zone",
"E02_15":"Vehicle Dispatch  GPS Location",
"E02_16":"Beginning Odometer  Reading of  Responding Vehicle",
"E02_17":"On-Scene Odometer  Reading of  Responding Vehicle",
"E02_18":"Patient Destination  Odometer Reading  of Responding  Vehicle",
"E02_19":"Ending Odometer  Reading of  Responding Vehicle",
"E02_20":"Response Mode to  Scene",
"E03_01":"Complaint Reported  by Dispatch",
"E03_02":"EMD Performed",
"E03_03":"EMD Card Number",
"E04_01":"Crew Member ID",
"E04_02":"Crew Member Role",
"E04_03":"Crew Member Level",
"E05_01":"Incident or Onset  Date/Time",
"E05_02":"PSAP Call Date/Time",
"E05_03":"Dispatch Notified Date/Time",
"E05_04":"Unit Notified by Dispatch Date/Time",
"E05_05":"Unit En Route Date/Time",
"E05_06":"Unit Arrived on Scene Date/Time",
"E05_07":"Arrived at Patient Date/Time",
"E05_08":"Transfer of Patient Care Date/Time",
"E05_09":"Unit Left Scene Date/Time",
"E05_10":"Patient Arrived at Destination Date/Time",
"E05_11":"Unit Back in Service Date/Time",
"E05_12":"Unit Cancelled Date/Time",
"E05_13":"Unit Back at Home Location Date/Time",
"E06_01":"Last Name",
"E06_02":"First Name",
"E06_03":"Middle Initial/Name",
"E06_04":"Patient's Home Address",
"E06_05":"Patient's Home City",
"E06_06":"Patient's Home County",
"E06_07":"Patient's Home State",
"E06_08":"Patient's Home Zip Code",
"E06_09":"Patient’s Home  Country",
"E06_10":"Social Security  Number",
"E06_11":"Gender",
"E06_12":"Race",
"E06_13":"Ethnicity",
"E06_14":"Age",
"E06_15":"Age Units",
"E06_16":"Date of Birth",
"E06_17":"Primary or Home Telephone Number",
"E06_18":"State Issuing Driver's License",
"E06_19":"Driver's License Number",
"E07_01":"Primary Method of Payment",
"E07_02":"Certificate of Medical Necessity",
"E07_03":"Insurance Company ID/Name",
"E07_04":"Insurance Company Billing Priority",
"E07_05":"Insurance Company Address",
"E07_06":"Insurance Company City",
"E07_07":"Insurance Company State",
"E07_08":"Insurance Company Zip Code",
"E07_09":"Insurance Group ID/Name",
"E07_10":"Insurance Policy ID Number",
"E07_11":"Last Name of the Insured",
"E07_12":"First Name of the Insured",
"E07_13":"Middle Initial/Name of the Insured",
"E07_14":"Relationship to the Insured",
"E07_15":"Work-Related",
"E07_16":"Patient’s Occupational Industry",
"E07_17":"Patient’s Occupation",
"E07_18":"Closest Relative/Guardian Last Name",
"E07_19":"First Name of the Closest Relative/ Guardian",
"E07_20":"Middle Initial/Name of the Closest Relative/ Guardian",
"E07_21":"Closest Relative/ Guardian Street Address",
"E07_22":"Closest Relative/ Guardian City",
"E07_23":"Closest Relative/ Guardian State",
"E07_24":"Closest Relative/ Guardian Zip Code",
"E07_25":"Closest Relative/  Guardian Phone  Number",
"E07_26":"Closest Relative/ Guardian  Relationship",
"E07_27":"Patient's Employer",
"E07_28":"Patient's Employer's Address",
"E07_29":"Patient’s Employer’s City",
"E07_30":"Patient’s Employer’s State",
"E07_31":"Patient’s Employer’s Zip Code",
"E07_32":"Patient's Work Telephone Number",
"E07_33":"Response Urgency",
"E07_34":"CMS Service Level",
"E07_35":"Condition Code Number",
"E07_36":"ICD-9 Code for the Condition Code Number",
"E07_37":"Condition Code Modifier",
"E08_01":"Other EMS Agencies at Scene",
"E08_02":"Other Services at Scene",
"E08_03":"Estimated Date/Time  Initial Responder Arrived on Scene",
"E08_04":"Date/Time Initial Responder Arrived  on Scene",
"E08_05":"Number of Patients at Scene",
"E08_06":"Mass Casualty Incident",
"E08_07":"Incident Location Type",
"E08_08":"Incident Facility Code",
"E08_09":"Scene Zone Number",
"E08_10":"Scene GPS Location",
"E08_11":"Incident Address",
"E08_12":"Incident City",
"E08_13":"Incident County",
"E08_14":"Incident State",
"E08_15":"Incident ZIP Code",
"E09_01":"Prior Aid",
"E09_02":"Prior Aid Performed by",
"E09_03":"Outcome of the Prior  Aid",
"E09_04":"Possible Injury",
"E09_05":"Chief Complaint",
"E09_06":"Duration of Chief  Complaint",
"E09_07":"Time Units of Duration of Chief Complaint",
"E09_08":"Secondary Complaint Narrative",
"E09_09":"Duration of  Secondary  Complaint",
"E09_10":"Time Units of Duration of Secondary Complaint",
"E09_11":"Chief Complaint Anatomic Location",
"E09_12":"Chief Complaint Organ System",
"E09_13":"Primary Symptom",
"E09_14":"Other Associated Symptoms",
"E09_15":"Providers Primary Impression",
"E09_16":"Provider’s Secondary Impression",
"E10_01":"Cause of Injury",
"E10_02":"Intent of the Injury",
"E10_03":"Mechanism of Injury",
"E10_04":"Vehicular Injury Indicators",
"E10_05":"Area of the Vehicle impacted by the collision",
"E10_06":"Seat Row Location of Patient in Vehicle",
"E10_07":"Position of Patient in the Seat of the Vehicle",
"E10_08":"Use of Occupant Safety Equipment",
"E10_09":"Airbag Deployment",
"E10_10":"Height of Fall",
"E11_01":"Cardiac Arrest",
"E11_02":"Cardiac Arrest Etiology",
"E11_03":"Resuscitation Attempted",
"E11_04":"Arrest Witnessed by",
"E11_05":"First Monitored Rhythm of the  Patient",
"E11_06":"Any Return of Spontaneous Circulation",
"E11_07":"Neurological Outcome at Hospital Discharge",
"E11_08":"Estimated Time of  Arrest Prior to EMS Arrival",
"E11_09":"Date/Time Resuscitation Discontinued",
"E11_10":"Reason CPR Discontinued",
"E11_11":"Cardiac Rhythm on Arrival at Destination",
"E12_01":"Barriers to Patient Care",
"E12_02":"Sending Facility Medical Record Number",
"E12_03":"Destination Medical Record Number",
"E12_04":"First Name of Patient's Primary Practitioner",
"E12_05":"Middle Name of Patient's Primary Practitioner",
"E12_06":"Last Name of Patient's Primary Practitioner",
"E12_07":"Advanced Directives",
"E12_08":"Medication Allergies",
"E12_09":"Environmental/Food Allergies",
"E12_10":"Medical/Surgical History",
"E12_11":"Medical History Obtained From",
"E12_12":"Immunization History",
"E12_13":"Immunization Date",
"E12_14":"Current Medications",
"E12_15":"Current Medication Dose",
"E12_16":"Current Medication Dosage Unit",
"E12_17":"Current Medication Administration Route",
"E12_18":"Presence of Emergency Information Form",
"E12_19":"Alcohol/Drug Use Indicators",
"E12_20":"Pregnancy",
"E13_01":"Run Report Narrative",
"E14_01":"Date/Time Vital Signs Taken",
"E14_02":"Obtained Prior to this Units EMS Care",
"E14_03":"Cardiac Rhythm",
"E14_04":"SBP (Systolic Blood Pressure)",
"E14_05":"DBP (Diastolic Blood Pressure)",
"E14_06":"Method of Blood Pressure Measurement",
"E14_07":"Pulse Rate",
"E14_08":"Electronic Monitor Rate",
"E14_09":"Pulse Oximetry",
"E14_10":"Pulse Rhythm",
"E14_11":"Respiratory Rate",
"E14_12":"Respiratory Effort",
"E14_13":"Carbon Dioxide",
"E14_14":"Blood Glucose Level",
"E14_15":"Glasgow Coma Score-Eye",
"E14_16":"Glasgow Coma Score-Verbal",
"E14_17":"Glasgow Coma Score-Motor",
"E14_18":"Glasgow Coma Score-Qualifier",
"E14_19":"Total Glasgow Coma Score",
"E14_20":"Temperature",
"E14_21":"Temperature Method",
"E14_22":"Level of Responsiveness",
"E14_23":"Pain Scale",
"E14_24":"Stroke Scale",
"E14_25":"Thrombolytic Screen",
"E14_26":"APGAR",
"E14_27":"Revised Trauma Score",
"E14_28":"Pediatric Trauma Score",
"E15_01":"NHTSA Injury Matrix External/Skin",
"E15_02":"NHTSA Injury Matrix Head",
"E15_03":"NHTSA Injury Matrix Face",
"E15_04":"NHTSA Injury Matrix Neck",
"E15_05":"NHTSA Injury Matrix Thorax",
"E15_06":"NHTSA Injury Matrix Abdomen",
"E15_07":"NHTSA Injury Matrix Spine",
"E15_08":"NHTSA Injury Matrix Upper Extremities",
"E15_09":"NHTSA Injury Matrix Pelvis",
"E15_10":"NHTSA Injury Matrix Lower Extremities",
"E15_11":"NHTSA Injury Matrix Unspecified",
"E16_01":"Estimated Body Weight",
"E16_02":"Broselow/Luten Color",
"E16_03":"Date/Time of Assessment",
"E16_04":"Skin Assessment",
"E16_05":"Head/Face Assessment",
"E16_06":"Neck Assessment",
"E16_07":"Chest/Lungs Assessment",
"E16_08":"Heart Assessment",
"E16_09":"Abdomen Left Upper Assessment",
"E16_10":"Abdomen Left Lower Assessment",
"E16_11":"Abdomen Right Upper Assessment",
"E16_12":"Abdomen Right Lower Assessment",
"E16_13":"GU Assessment",
"E16_14":"Back Cervical Assessment",
"E16_15":"Back Thoracic Assessment",
"E16_16":"Back Lumbar/Sacral Assessment",
"E16_17":"Extremities-Right Upper Assessment",
"E16_18":"Extremities-Right  Lower Assessment",
"E16_19":"Extremities-Left Upper Assessment",
"E16_20":"Extremities-Left Lower Assessment",
"E16_21":"Eyes-Left Assessment",
"E16_22":"Eyes-Right Assessment",
"E16_23":"Mental Status Assessment",
"E16_24":"Neurological Assessment",
"E17_01":"Protocols Used",
"E18_01":"Date/Time Medication Administered",
"E18_02":"Medication Administered Prior to this Units EMS Care",
"E18_03":"Medication Given",
"E18_04":"Medication Administered Route",
"E18_05":"Medication Dosage",
"E18_06":"Medication Dosage Units",
"E18_07":"Response to Medication",
"E18_08":"Medication Complication",
"E18_09":"Medication Crew Member ID",
"E18_10":"Medication Authorization",
"E18_11":"Medication Authorizing Physician",
"E19_01":"Date/Time Procedure Performed Successfully",
"E19_02":"Procedure Performed Prior to  this Units EMS Care",
"E19_03":"Procedure",
"E19_04":"Size of Procedure Equipment",
"E19_05":"Number of Procedure Attempts",
"E19_06":"Procedure Successful",
"E19_07":"Procedure Complication",
"E19_08":"Response to Procedure",
"E19_09":"Procedure Crew Members ID",
"E19_10":"Procedure Authorization",
"E19_11":"Procedure Authorizing Physician",
"E19_12":"Successful IV Site",
"E19_13":"Tube Confirmation",
"E19_14":"Destination Confirmation of Tube Placement",
"E20_01":"Destination/Transferred To, Name",
"E20_02":"Destination/Transferred To, Code",
"E20_03":"Destination Street Address",
"E20_04":"Destination City",
"E20_05":"Destination State",
"E20_06":"Destination County",
"E20_07":"Destination Zip Code",
"E20_08":"Destination GPS Location",
"E20_09":"Destination Zone Number",
"E20_10":"Incident/Patient Disposition",
"E20_11":"How Patient Was Moved to Ambulance",
"E20_12":"Position of Patient During Transport",
"E20_13":"How Patient Was Transported From Ambulance",
"E20_14":"Transport Mode from Scene",
"E20_15":"Condition of Patient at Destination",
"E20_16":"Reason for Choosing Destination",
"E20_17":"Type of Destination",
"E21_01":"Event Date/Time",
"E21_02":"Medical Device Event Name",
"E21_03":"Waveform Graphic Type",
"E21_04":"Waveform Graphic",
"E21_05":"AED, Pacing, or CO2  Mode",
"E21_06":"ECG Lead",
"E21_07":"ECG Interpretation",
"E21_08":"Type of Shock",
"E21_09":"Shock or Pacing Energy",
"E21_10":"Total Number of Shocks Delivered",
"E21_11":"Pacing Rate",
"E21_12":"Device Heart Rate",
"E21_13":"Device Pulse Rate",
"E21_14":"Device Systolic Blood Pressure",
"E21_15":"Device Diastolic Blood Pressure",
"E21_16":"Device Respiratory Rate",
"E21_17":"Device Pulse Oximetry",
"E21_18":"Device CO2 or etCO2",
"E21_19":"Device CO2, etCO2, or Invasive Pressure Monitor Units",
"E21_20":"Device Invasive Pressure Mean",
"E22_01":"Emergency Department Disposition",
"E22_02":"Hospital Disposition",
"E22_03":"Law Enforcement/Crash Report Number",
"E22_04":"Trauma Registry ID",
"E22_05":"Fire Incident Report Number",
"E22_06":"Patient ID Band/Tag Number",
"E23_01":"Review Requested",
"E23_02":"Potential Registry Candidate",
"E23_03":"Personal Protective Equipment Used",
"E23_04":"Suspected Intentional, or Unintentional Disaster",
"E23_05":"Suspected Contact with Blood/Body Fluids of EMS Injury or Death",
"E23_06":"Type of Suspected Blood/Body Fluid Exposure, Injury, or Death",
"E23_07":"Personnel Exposed",
"E23_08":"Required Reportable Conditions",
"E23_09":"Research Survey Field",
"E23_10":"Who Generated this Report?",
"E23_11":"Research Survey Field Title"
};
