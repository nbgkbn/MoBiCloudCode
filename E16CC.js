var Utils = require('cloud/UtilitiesCC.js');
var V2Utils = require('cloud/ConversionUtilsCC.js');
exports.setE16 = function (TC) {

    if (typeof TC.eExam == 'undefined')
    {
        var E16 = {};
        E16.IsUndefined = true;
        return E16;
    }
    else
    {
        var e16 = {};
        var e15 = {};
        
        if (typeof TC.eExam["eExam.01"] != 'undefined')
        {
            e16.E16_01 = "";
            if (TC.eExam["eExam.01"].IsNull == false)
            {
                e16.E16_01 = TC.eExam["eExam.01"].vSet[0];
            }
        };

        if (typeof TC.eExam["eExam.02"] != 'undefined')
        {
            e16.E16_02 = "";
            if (TC.eExam["eExam.02"].IsNull == false)
            {
                e16.E16_02 = V2Utils.setV2("eExam.02", TC.eExam["eExam.02"].vSet[0]);
            }
        };
        
        if (typeof TC.eExam.AssessmentGroup != 'undefined')
        {

            var e16_00_0Array = [];
            
            for (var xx = 0; xx < TC.eExam.AssessmentGroup.length; xx++)
            {
                var e16_00_0 = {};
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

                e16_00_0.E16_03 = "";

                if (typeof TC.eExam.AssessmentGroup[xx]["eExam.03"] != 'undefined')
                {
                    e16_00_0.E16_03 = TC.eExam.AssessmentGroup[xx]["eExam.03"].vSet[0];
                };

                if (typeof TC.eExam.AssessmentGroup[xx]["eExam.04"] != 'undefined')
                {
                    E16_04 = [];
                    //E15_01 = [];
                    if (TC.eExam.AssessmentGroup[xx]["eExam.04"].IsNull == false)
                    {
                        for (var i = 0; i < TC.eExam.AssessmentGroup[xx]["eExam.04"].vSet.length; i++)
                        {
                            E16_04.push(V2Utils.setV2("eExam.04", TC.eExam.AssessmentGroup[xx]["eExam.04"].vSet[i]));
                            //E15_01.push(V2Utils.setV2("eExam.04", TC.eExam.AssessmentGroup[xx]["eExam.04"].vSet[i]));
                        }
                    };
                    //e15.E15_01 = E15_01;
                    e16_00_0.E16_04 = E16_04;
                };
                
                if (typeof TC.eExam.AssessmentGroup[xx]["eExam.05"] != 'undefined')
                {
                    E16_05 = [];
                    if (TC.eExam.AssessmentGroup[xx]["eExam.05"].IsNull == false)
                    {
                        for (var i = 0; i < TC.eExam.AssessmentGroup[xx]["eExam.05"].vSet.length; i++)
                        {
                            E16_05.push(V2Utils.setV2("eExam.05", TC.eExam.AssessmentGroup[xx]["eExam.05"].vSet[i]));
                        };
                    };
                    e16_00_0.E16_05 = E16_05;
                };    
                
                if (typeof TC.eExam.AssessmentGroup[xx]["eExam.07"] != 'undefined')
                {
                    E16_06 = [];
                    if (TC.eExam.AssessmentGroup[xx]["eExam.07"].IsNull == false)
                    {
                        for (var i = 0; i < TC.eExam.AssessmentGroup[xx]["eExam.07"].vSet.length; i++)
                        {
                            E16_06.push(V2Utils.setV2("eExam.07", TC.eExam.AssessmentGroup[xx]["eExam.07"].vSet[i]));
                        }
                    };
                    e16_00_0.E16_06 = E16_06;
                };
    
    
                if (typeof TC.eExam.AssessmentGroup[xx]["eExam.08"] != 'undefined')
                {
                    E16_07 = [];
                    if (TC.eExam.AssessmentGroup[xx]["eExam.08"].IsNull == false)
                    {
                        for (var i = 0; i < TC.eExam.AssessmentGroup[xx]["eExam.08"].vSet.length; i++)
                        {
                            E16_07.push(V2Utils.setV2("eExam.08", TC.eExam.AssessmentGroup[xx]["eExam.08"].vSet[i]));
                        }
                    };
                    e16_00_0.E16_07 = E16_07;
                };
    
                
                if (typeof TC.eExam.AssessmentGroup[xx]["eExam.09"] != 'undefined')
                {
                    E16_08 = [];
                    if (TC.eExam.AssessmentGroup[xx]["eExam.09"].IsNull == false)
                    {
                        for (var i = 0; i < TC.eExam.AssessmentGroup[xx]["eExam.09"].vSet.length; i++)
                        {
                            E16_08.push(V2Utils.setV2("eExam.09", TC.eExam.AssessmentGroup[xx]["eExam.09"].vSet[i]));
                        }
                    };
                    e16_00_0.E16_08 = E16_08;
                };
    
                if (typeof TC.eExam.AssessmentGroup[xx].AbdomenGroup)
                {
                    var AbdominalFindingLocation = "";
                    for (var dd = 0; dd < TC.eExam.AssessmentGroup[xx].AbdomenGroup.length; dd++)
                    {
                        if (typeof TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.10"] != 'undefined')
                        {
                            if (TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.10"].IsNull != true)
                            {
                                AbdominalFindingLocation = TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.10"].vSet[0];
    
    
                                if (typeof TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"] != 'undefined')
                                {
                                    var E16_09Array = [];
                                    var E16_10Array = [];
                                    var E16_12Array = [];
                                    var E16_11Array = [];
                                    if (TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].IsNull == false)
                                    {
                                        var AbdValue = "";
    
                                        if (AbdominalFindingLocation == "3510001") //Generalized
                                        {
                                            for (var i = 0; i < TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet.length; i++)
                                            {
                                                AbdValue = V2Utils.setV2("eExam.11", TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet[i], AbdominalFindingLocation);
                                                E16_09Array.push(AbdValue);
                                            }
                                        };
    
                                        if (AbdominalFindingLocation == "3510003") //Left Lower Quadrant
                                        {
                                            for (var i = 0; i < TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet.length; i++)
                                            {
                                                AbdValue = V2Utils.setV2("eExam.11", TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet[i], AbdominalFindingLocation);
                                                E16_10Array.push(AbdValue);
                                            }
                                        };
    
                                        if (AbdominalFindingLocation == "3510005") //Left Upper Quadrant
                                        {
                                            for (var i = 0; i < TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet.length; i++)
                                            {
                                                AbdValue = V2Utils.setV2("eExam.11", TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet[i], AbdominalFindingLocation);
                                                E16_09Array.push(AbdValue);
                                            }
                                        };
    
                                        if (AbdominalFindingLocation == "3510007") //Periumbilical
                                        {
                                            for (var i = 0; i < TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet.length; i++)
                                            {
                                                AbdValue = V2Utils.setV2("eExam.11", TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet[i], AbdominalFindingLocation);
                                                E16_12Array.push(AbdValue);
                                            }
                                        };
    
                                        if (AbdominalFindingLocation == "3510009") //Right Lower Quadrant
                                        {
                                            for (var i = 0; i < TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet.length; i++)
                                            {
                                                AbdValue = V2Utils.setV2("eExam.11", TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet[i], AbdominalFindingLocation);
                                                E16_12Array.push(AbdValue);
                                            }
                                        };
    
                                        if (AbdominalFindingLocation == "3510011") //Right Upper Quadrant
                                        {
                                            for (var i = 0; i < TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet.length; i++)
                                            {
                                                AbdValue = V2Utils.setV2("eExam.11", TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet[i], AbdominalFindingLocation);
                                                E16_11Array.push(AbdValue);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    };
                    ///////////////////////////////////
                    //Remove Duplicates
                    if (typeof E16_09Array != 'undefined')
                    {
                        var xB09 = new Array();
                        var E16_09 = []
                        for (var j = 0; j < E16_09Array.length; j++)
                        {
                            if (xB09.indexOf(E16_09Array[j]) == -1)
                            {
                                xB09.push(E16_09Array[j])
                            }
                        };
    
                        for (var j = 0; j < xB09.length; j++)
                        {
                            E16_09.push(xB09[j]);
                        };
                        e16_00_0.E16_09 = E16_09;
                    };
    
                    if (typeof E16_10Array != 'undefined')
                    {
                        var xB10 = new Array();
                        var E16_10 = []
                        for (var j = 0; j < E16_10Array.length; j++)
                        {
                            if (xB10.indexOf(E16_10Array[j]) == -1)
                            {
                                xB10.push(E16_10Array[j])
                            }
                        };
    
                        for (var j = 0; j < xB10.length; j++)
                        {
                            E16_10.push(xB10[j]);
                        };
                        e16_00_0.E16_10 = E16_10;
                    };
    
                    if (typeof E16_11Array != 'undefined')
                    {
                        var xB11 = new Array();
                        var E16_11 = [];
                        for (var j = 0; j < E16_11Array.length; j++)
                        {
                            if (xB11.indexOf(E16_11Array[j]) == -1)
                            {
                                xB11.push(E16_11Array[j])
                            }
                        };
    
                        for (var j = 0; j < xB11.length; j++)
                        {
                            E16_11.push(xB11[j]);
                        };
                        e16_00_0.E16_11 = E16_11;
                    };
    
                    var xB12 = new Array();
                    var E16_12 = [];
                    for (var j = 0; j < E16_12Array.length; j++)
                    {
                        if (xB12.indexOf(E16_12Array[j]) == -1)
                        {
                            xB12.push(E16_12Array[j])
                        }
                    };
    
                    for (var j = 0; j < xB12.length; j++)
                    {
                        E16_12.push(xB12[j]);
                    };
                    e16_00_0.E16_12 = E16_12;
                };//Abdomen Group
                //////////////////////////////////
    
                if (typeof TC.eExam.AssessmentGroup[xx]["eExam.12"] != 'undefined')
                {
                    var E16_13Array = []
                    if (TC.eExam.AssessmentGroup[xx]["eExam.12"].IsNull == false)
                    {
                        for (var i = 0; i < TC.eExam.AssessmentGroup[xx]["eExam.12"].vSet.length; i++)
                        {
                            E16_13Array.push(V2Utils.setV2("eExam.12", TC.eExam.AssessmentGroup[xx]["eExam.12"].vSet[i]));
                        }
                    }
                };
    
                var xB13 = new Array();
                var E16_13 = [];
                for (var j = 0; j < E16_13Array.length; j++)
                {
                    if (xB13.indexOf(E16_13Array[j]) == -1)
                    {
                        xB13.push(E16_13Array[j])
                    }
    
                };
                for (var j = 0; j < xB13.length; j++)
                {
                    E16_13.push(xB13[j]);
                };
                e16_00_0.E16_13 = E16_13;
    
                //////////////////////////////////////
                //Spine Group
    
                E16_15 = [];
                E16_16 = [];
                if (typeof TC.eExam.AssessmentGroup[xx].SpineGroup != 'undefined')
                {
                    var SpineGroupFindingLocation = "";
                    var BackCervical = ["3513001", "3513003", "3513005", "3513007"];  //eExam13_3513001 
                    var BackThoratic = ["3513009", "3513011", "3513013", "3513021", "3513023", "3513027"];  //eExam13_3513009 
                    var BackLumbar = ["3513007", "3513019", "3513025"];  //eExam13_3513017
    
                    for (var dd = 0; dd < TC.eExam.AssessmentGroup[xx].SpineGroup.length; dd++)
                    {
                        E16_14 = [];
                        if (typeof TC.eExam.AssessmentGroup[xx].SpineGroup[dd]["eExam.13"] != 'undefined')
                        {
    
                            if (typeof TC.eExam.AssessmentGroup[xx].SpineGroup[dd]["eExam.14"] != 'undefined')
                            {
                                if (TC.eExam.AssessmentGroup[xx].SpineGroup[dd]["eExam.14"].IsNull == false)
                                {
                                    E16_14.push(V2Utils.setV2("eExam.14", TC.eExam.AssessmentGroup[xx].SpineGroup[dd]["eExam.14"].vSet[0], SpineGroupFindingLocation));
                                }
                                else
                                {
 
                                    var SpineValue = "";
                                    if (BackCervical.indexOf(SpineGroupFindingLocation) != -1) //BackCervical
                                    {
    
                                        for (var i = 0; i < TC.eExam.AssessmentGroup[xx].SpineGroup[dd]["eExam.14"].vSet.length; i++)
                                        {
                                            SpineValue = V2Utils.setV2("eExam.14", TC.eExam.AssessmentGroup[xx].SpineGroup[dd]["eExam.14"].vSet[i], SpineGroupFindingLocation);
                                            E16_14Array.push(SpineValue);
                                        }
                                    };
                                    if (BackThoratic.indexOf(SpineGroupFindingLocation) != -1) //BackThoratic
                                    {
                                        for (var i = 0; i < TC.eExam.AssessmentGroup[xx].SpineGroup[dd]["eExam.14"].vSet.length; i++)
                                        {
                                            SpineValue = V2Utils.setV2("eExam.14", TC.eExam.AssessmentGroup[xx].SpineGroup[dd]["eExam.14"].vSet[i], SpineGroupFindingLocation);
                                            E16_15Array.push(SpineValue);
                                        }
                                    };
                                    if (BackLumbar.indexOf(SpineGroupFindingLocation) != -1) //BackLumbar
                                    {
                                        for (var i = 0; i < TC.eExam.AssessmentGroup[xx].SpineGroup[dd]["eExam.14"].vSet.length; i++)
                                        {
                                            SpineValue = V2Utils.setV2("eExam.14", TC.eExam.AssessmentGroup[xx].SpineGroup[dd]["eExam.14"].vSet[i], SpineGroupFindingLocation);
                                            E16_16Array.push(SpineValue);
                                        }
                                    }
    
                                }
                            }
                        }
                    };
                    ///////////////////////////////////
                    var xB14 = new Array();
                    for (var j = 0; j < E16_14Array.length; j++)
                    {
                        if (xB14.indexOf(E16_14Array[j]) == -1)
                        {
                            xB14.push(E16_14Array[j])
                        }
                    };
                    for (var j = 0; j < xB14.length; j++)
                    {
                        E16_14.push(xB14[j]);
                    };
                    e16_00_0.E16_14 = E16_14;
    
                    var xB15 = new Array();
                    for (var j = 0; j < E16_15Array.length; j++)
                    {
                        if (xB15.indexOf(E16_15Array[j]) == -1)
                        {
                            xB15.push(E16_15Array[j])
                        }
                    };
                    for (var j = 0; j < xB15.length; j++)
                    {
                        E16_15.push(xB15[j]);
                    };
                    e16_00_0.E16_15 = E16_15;
    
                    var xB16 = new Array();
                    for (var j = 0; j < E16_16Array.length; j++)
                    {
                        if (xB16.indexOf(E16_16Array[j]) == -1)
                        {
                            xB16.push(E16_16Array[j])
                        }
                    };
                    for (var j = 0; j < xB16.length; j++)
                    {
                        E16_16.push(xB16[j]);
                    };
                    e16_00_0.E16_16 = E16_16;
                };//Spine Group
    
                //////////////////////////////////////
                //Extremity Group
                if (typeof TC.eExam.AssessmentGroup[xx].ExtremityGroup != 'undefined')
                {
                    var ExtremityGroupFindingLocation = "";
                    var ExtremitiesRightUpper = ["3515007", "35150011", "3515015", "3515019", "3515023", "3515027", "3515039", "3515043", "3515047", "3515067", "3515071", "3515095"];  //eExam15_ExtremitiesRightUpper 
                    var ExtremitiesLeftUpper = ["3515005", "3515009", "3515013", "3515017", "3515021", "3515025", "3515037", "3515041", "3515045", "3515065", "3515069", "3515093"];  //eExam15_ExtremitiesLeftUpper 
    
                    var ExtremitiesRightLower = ["3515003", "3515031", "3515035", "3515051", "3515055", "3515059", "3515063", "3515075", "3515077", "3515079", "3515083", "3515087", "3515091"];  //eExam15_RightLower
                    var ExtremitiesLeftLower = ["3515001", "3515029", "3515033", "3515049", "3515053", "3515057", "3515061", "3515073", "3515075", "35150777", "3515081", "3515057", "3515089"];  //eExam15_LeftLower
    
                    for (var dd = 0; dd < TC.eExam.AssessmentGroup[xx].ExtremityGroup.length; dd++)
                    {
                        E16_17 = [];
                        E16_18 = [];
                        E16_19 = [];
                        E16_20 = [];
    
                        if (typeof TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.15"] != 'undefined')
                        {
                            if (TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.15"].IsNull != true)
                            {
                                ExtremityGroupFindingLocation = TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.15"].vSet[0];
                            }
                        };
    
                        if (typeof TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"] != 'undefined')
                        {
                            if (TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].IsNull != true)
                            {
    
                                var ExtValue = "";
                                if (ExtremitiesRightUpper.indexOf(ExtremityGroupFindingLocation) != -1) //ExtremitiesRightUpper
                                {
                                    for (var i = 0; i < TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].vSet.length; i++)
                                    {
                                        ExtValue = V2Utils.setV2("eExam.16", TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].vSet[i], ExtremityGroupFindingLocation);
                                        E16_17Array.push(ExtValue);
                                    }
                                };
    
                                if (ExtremitiesRightLower.indexOf(ExtremityGroupFindingLocation) != -1) //ExtremitiesRightLower
                                {
                                    for (var i = 0; i < TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].vSet.length; i++)
                                    {
                                        ExtValue = V2Utils.setV2("eExam.16", TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].vSet[i], ExtremityGroupFindingLocation);
                                        E16_18Array.push(ExtValue);
                                    }
                                };
                                if (ExtremitiesLeftUpper.indexOf(ExtremityGroupFindingLocation) != -1) //ExtremitiesLeftUpper
                                {
                                    for (var i = 0; i < TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].vSet.length; i++)
                                    {
                                        ExtValue = V2Utils.setV2("eExam.16", TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].vSet[i], ExtremityGroupFindingLocation);
                                        E16_19Array.push(ExtValue);
                                    }
                                };
                                if (ExtremitiesLeftLower.indexOf(ExtremityGroupFindingLocation) != -1) //LeftLower
                                {
                                    for (var i = 0; i < TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].vSet.length; i++)
                                    {
                                        ExtValue = V2Utils.setV2("eExam.16", TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].vSet[i], ExtremityGroupFindingLocation);
                                        E16_20Array.push(ExtValue);
                                    }
                                }
    
    
                            }
                        }
                    };
                    
                    ///////////////////////////////////
                    ///////////////////////////////////
                    var xB17 = new Array();
    
                    for (var j = 0; j < E16_17Array.length; j++)
                    {
                        if (xB17.indexOf(E16_17Array[j]) == -1)
                        {
                            xB17.push(E16_17Array[j])
                        }
                    };
                    for (var j = 0; j < xB17.length; j++)
                    {
                        E16_17.push(xB17[j]);
                    };
                    e16_00_0.E16_17 = E16_17;
    
                    var xB18 = new Array();
                    for (var j = 0; j < E16_18Array.length; j++)
                    {
                        if (xB18.indexOf(E16_18Array[j]) == -1)
                        {
                            xB18.push(E16_18Array[j])
                        }
                    };
                    for (var j = 0; j < xB18.length; j++)
                    {
                        E16_18.push(xB18[j]);
                    };
                    e16_00_0.E16_18 = E16_18;
    
                    var xB19 = new Array();
                    for (var j = 0; j < E16_19Array.length; j++)
                    {
                        if (xB19.indexOf(E16_19Array[j]) == -1)
                        {
                            xB19.push(E16_19Array[j])
                        }
                    };
                    for (var j = 0; j < xB19.length; j++)
                    {
                        E16_19.push(xB19[j]);
                    };
                    e16_00_0.E16_19 = E16_19;
    
                    var xB20 = new Array();
                    for (var j = 0; j < E16_20Array.length; j++)
                    {
                        if (xB20.indexOf(E16_20Array[j]) == -1)
                        {
                            xB20.push(E16_20Array[j])
                        }
                    };
                    for (var j = 0; j < xB20.length; j++)
                    {
                        E16_20.push(xB20[j]);
                    };
                    e16_00_0.E16_20 = E16_20;
                };  //Extremity Group
    
                E16_21 = [];
                E16_22 = [];
    
    
    ////////////////////////////////////////////////
                //eyeGroup
                if (typeof TC.eExam.AssessmentGroup[xx].EyeGroup != 'undefined')
                {
                    var EyeGroupFindingLocation = "";    
                    for (var dd = 0; dd < TC.eExam.AssessmentGroup[xx].EyeGroup.length; dd++)
                    {
                        if (typeof TC.eExam.AssessmentGroup[xx].EyeGroup[dd]["eExam.17"] != 'undefined')
                        {
                            if (TC.eExam.AssessmentGroup[xx].EyeGroup[dd]["eExam.17"].IsNull != true)
                            {
                                ExtremityGroupFindingLocation = TC.eExam.AssessmentGroup[xx].EyeGroup[dd]["eExam.17"].vSet[0];
                            }
                        };
    
                        if (typeof TC.eExam.AssessmentGroup[xx].EyeGroup[dd]["eExam.18"] != 'undefined')
                        {
                            if (TC.eExam.AssessmentGroup[xx].EyeGroup[dd]["eExam.18"].IsNull != true)
                            {
                                var EyeValue = "";
                                if ((EyeGroupFindingLocation == "3517001") && (EyeGroupFindingLocation == "3517003")) //Bilat and Left
                                {
                                    for (var i = 0; i < TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].vSet.length; i++)
                                    {
                                        EyeValue = V2Utils.setV2("eExam.16", TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].vSet[i], ExtremityGroupFindingLocation);
                                        E16_21Array.push(EyeValue);
                                    }
                                };
    
                                if (EyeGroupFindingLocation == "3517001") //Right
                                {
                                    for (var i = 0; i < TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].vSet.length; i++)
                                    {
                                        EyeValue = V2Utils.setV2("eExam.16", TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].vSet[i], ExtremityGroupFindingLocation);
                                        E16_22Array.push(EyeValue);
                                    }
                                };
                            }
                        }
                    };
                    ///////////////////////////////////
                    ///////////////////////////////////
                    var xB21 = new Array();
                    for (var j = 0; j < E16_21Array.length; j++)
                    {
                        if (xB21.indexOf(E16_21Array[j]) == -1)
                        {
                            xB21.push(E16_21Array[j])
                        }
                    };
                    for (var j = 0; j < xB21.length; j++)
                    {
                        E16_21.push(xB21[j]);
                    };
                    e16_00_0.E16_21 = E16_21;
    
                    var xB22 = new Array();
                    for (var j = 0; j < E16_22Array.length; j++)
                    {
                        if (xB22.indexOf(E16_22Array[j]) == -1)
                        {
                            xB22.push(E16_22Array[j])
                        }
                    };
                    for (var j = 0; j < xB22.length; j++)
                    {
                        E16_22.push(xB22[j]);
                    };
                    e16_00_0.E16_22 = E16_22;
                };//Eye Group
    
                ////////////////////////////////////////////////
    
                if (typeof TC.eExam.AssessmentGroup[xx]["eExam.19"] != 'undefined')
                {
                    E16_23 = [];
                    if (TC.eExam.AssessmentGroup[xx]["eExam.19"].IsNull == false)
                    {
                        for (var i = 0; i < TC.eExam.AssessmentGroup[xx]["eExam.19"].vSet.length; i++)
                        {
                            E16_23.push(V2Utils.setV2("eExam.19", TC.eExam.AssessmentGroup[xx]["eExam.19"].vSet[i]));
                        };
                        e16_00_0.E16_23 = E16_23;
                    }
                };
                
                if (typeof TC.eExam.AssessmentGroup[xx]["eExam.20"] != 'undefined')
                {
                    E16_24 = [];
                    if (TC.eExam.AssessmentGroup[xx]["eExam.20"].IsNull == false)
                    {
                        var E16_24 = [];
                        for (var i = 0; i < TC.eExam.AssessmentGroup[xx]["eExam.20"].vSet.length; i++)
                        {
                            E16_24.push(V2Utils.setV2("eExam.20", TC.eExam.AssessmentGroup[xx]["eExam.20"].vSet[i]));
                        };
                        e16_00_0.E16_24 = E16_24;

                    }
                };
                
                e16_00_0Array.push(e16_00_0)
            }           
        }
    };
    
    var e16_00_0 = [];
    e16_00_0 = e16_00_0Array;
    e16.e16_00_0 = e16_00_0

    var E16 = {};
    if ((typeof e16.E16_01 != 'undefined') && (Utils.IsGo(e16.E16_01) == true))
    {
        E16.E16_01 = e16.E16_01
    }

    if ((typeof e16.E16_02 != 'undefined') && (Utils.IsGo(e16.E16_02) == true))
    {
        E16.E16_02 = e16.E16_02
    }

    
    if (e16.e16_00_0.length > 0) {
        e16arr = [];
        for (var xx = 0; xx < e16.e16_00_0.length; xx++)
        {
            e16a = {};
            var obj = e16.e16_00_0[xx];
            if ((typeof obj.E16_03 != 'undefined') && (Utils.IsGo(obj.E16_03) == true)) {
                var E16_03 = {};
                E16_03 = obj.E16_03;
            }
            else {
                Error.Level = "ELEM";
                Error.Type = "MAN";
                Error.Att = "E16_03"
                Error.Text = "Exam requires time/date"
                ErrorList.push(Error)
            };

            if ((typeof obj.E16_04 != 'undefined') && (obj.E16_04.length > 0)) {
                var E16_04 = [];
                E16_04 = obj.E16_04;
                e16a.E16_04 = E16_04;
            }
            else {
                E16_04.push("-20")
            }
            if ((typeof obj.E16_05 != 'undefined') && (obj.E16_05.length >0 == true)) {
                var E16_05 = [];
                E16_05 = obj.E16_05;
                e16a.E16_05 = E16_05;
            }
            

            if ((typeof obj.E16_06 != 'undefined') && (obj.E16_06.length > 0 == true)) {
                var E16_06 = [];
                E16_06 = obj.E16_06;
                e16a.E16_06 = E16_06;
            };

            if ((typeof obj.E16_07 != 'undefined') && (obj.E16_07.length > 0 == true)) {
                var E16_07 = [];
                E16_07 = obj.E16_07;
                e16a.E16_07 = E16_07;
            };

            if ((typeof obj.E16_08 != 'undefined') && (obj.E16_08.length > 0 == true)) {
                var E16_08 = [];
                E16_08 = obj.E16_08;
                e16a.E16_08 = E16_08;
            };

            if ((typeof obj.E16_09 != 'undefined') && (obj.E16_09.length > 0 == true)) {
                var E16_09 = [];
                E16_09 = obj.E16_09;
                e16a.E16_09 = E16_09;
            };

            if ((typeof obj.E16_10 != 'undefined') && (obj.E16_10.length > 0 == true)) {
                var E16_10 = [];
                E16_10 = obj.E16_10;
                e16a.E16_10 = E16_10;
            };

            if ((typeof obj.E16_11 != 'undefined') && (obj.E16_11.length > 0 == true)) {
                var E16_11 = [];
                E16_11 = obj.E16_11;
                e16a.E16_11 = E16_11;
            };

            if ((typeof obj.E16_12 != 'undefined') && (obj.E16_12.length > 0 == true)) {
                var E16_12 = [];
                E16_12 = obj.E16_12;
                e16a.E16_12 = E16_12;
            };

            if ((typeof obj.E16_13 != 'undefined') && (obj.E16_13.length > 0 == true)) {
                var E16_13 = [];
                E16_13 = obj.E16_13;
                e16a.E16_13 = E16_13;
            };

            if ((typeof obj.E16_14 != 'undefined') && (obj.E16_14.length > 0 == true)) {
                var E16_14 = [];
                E16_14 = obj.E16_14;
                e16a.E16_14 = E16_14;
            };

            if ((typeof obj.E16_15 != 'undefined') && (obj.E16_15.length > 0 == true)) {
                var E16_15 = [];
                E16_15 = obj.E16_15;
                e16a.E16_15 = E16_15;
            };

            if ((typeof obj.E16_16 != 'undefined') && (obj.E16_16.length > 0 == true)) {
                var E16_16 = [];
                E16_16 = obj.E16_16;
                e16a.E16_16 = E16_16;
            };

            if ((typeof obj.E16_17 != 'undefined') && (obj.E16_17.length > 0 == true)) {
                var E16_17 = [];
                E16_17 = obj.E16_17;
                e16a.E16_17 = E16_17;
            };

            if ((typeof obj.E16_18 != 'undefined') && (obj.E16_18.length > 0 == true)) {
                var E16_18 = [];
                E16_18 = obj.E16_18;
                e16a.E16_18 = E16_18;
            };

            if ((typeof obj.E16_19 != 'undefined') && (obj.E16_19.length > 0 == true)) {
                var E16_19 = [];
                E16_19 = obj.E16_19;
                e16a.E16_19 = E16_19;
            };

            if ((typeof obj.E16_20 != 'undefined') && (obj.E16_20.length > 0 == true)) {
                var E16_20 = [];
                E16_20 = obj.E16_20;
                e16a.E16_20 = E16_20;
            };

            if ((typeof obj.E16_21 != 'undefined') && (obj.E16_21.length > 0 == true)) {
                var E16_21 = [];
                E16_21 = obj.E16_21;
                e16a.E16_21 = E16_21;
            };

            if ((typeof obj.E16_22 != 'undefined') && (obj.E16_22.length > 0 == true)) {
                var E16_22 = [];
                E16_22 = obj.E16_22;
                e16a.E16_22 = E16_22;
            };

            if ((typeof obj.E16_23 != 'undefined') && (obj.E16_23.length > 0 == true)) {
                var E16_23 = [];
                E16_23 = obj.E16_23;
                e16a.E16_23 = E16_23;
            };

            if ((typeof obj.E16_24 != 'undefined') && (obj.E16_24.length > 0 == true)) {
                var E16_24 = [];
                E16_24 = obj.E16_24;
                e16a.E16_24 = E16_24;
            };
            e16arr.push(e16a)
        };
        
         
        if (e16arr.length > 0) {
            var E16_00_0 = [];
            E16_00_0 = e16arr;
            E16.E16_00_0 = E16_00_0;
        };
        E16.IsUndefined = false;
        E16.ErrorList = ErrorList;
        return E16;        
    };
};