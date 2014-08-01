var ErrorList = [];
var v3NOT_REPORTING = " NV=\"7701005\"";
var v3NOT_RECORDED = " NV=\"7701003\"";
var v2NOT_AVAILABLE = "-5";
var v2NOT_REPORTING = "-15";
var v2NOT_APPLICABLE = "-25"
var v2NOT_RECORDED = "-20";
var v2NOT_KNOWN = "-10";
var NIL_V3NOT_RECORDED = " NV=\"7701003\" xsi:nil=\"true\"/>";
var NIL_V3NOT_REPORTING = " NV=\"7701005\" xsi:nil=\"true\"/>";
var NIL_V3NOT_APPLICABLE = " NV=\"7701001\" xsi:nil=\"true\"/>";
var PN_REFUSED_IS_NILLABLE = " xsi:nil=\"true\" PN=\"8801019\"/>";
var PN_UNABLE_TO_COMPLETE_IS_NILLABLE = " xsi:nil=\"true\" PN=\"8801023\"/>";
var PN_FINDING_NOT_PRESENT_IS_NILLABLE = " xsi:nil=\"true\" PN=\"8801005\"/>";
var OLAPArray = [];
var eExam = new Object;
var AssessmentGroup = new Object;
var AssessmentGroupArray = new Array;
var AbdomenGroup = new Object;
var SpineGroup = new Object;
var ExtremityGroup = new Object;
var EyeGroup = new Object;
var AbdomenGroupArray = new Array;
var SpineGroupArray = new Array;
var ExtremityGroupArray = new Array;
var EyeGroupArray = new Array;

var getSectionIndex = function (businessObject, sectionName) {
    var isNotApplicableFlag = true;  //once I have real data, set to False

    ////////eExam.01
    _val = getValue(businessObject.elements, "eExam.01");
    if (_val == null) 
    {
        PNValue = getPertinentNegative("eExam.01")
        if(PNValue != null)
        {
            eExam["HeadAssessment"] = "Exam Finding Not Present";
            eExam["eExam.10"] = PN_FINDING_NOT_PRESENT_IS_NILLABLE;
            v2Array.push({ section: "E16", element: "E16_08", val: v2NOT_KNOWN});       
            
        }
        else{
            if (isRequiredStateElement("eExam.01") == true)         
            {
                v2Array.push({ section: "E16", element: "E16_01", val: v2NOT_RECORDED });
                eExam["eExam.01"] = v3NOT_RECORDED;
                eExam["EstimatedBodyWeightinKilograms"] = "NOT RECORDED";
            }
            else 
            {
                v2Array.push({ section: "E16", element: "E16_01", val: v2NOT_REPORTING });
                eExam["eExam.01"] = v3NOT_REPORTING;
                eExam["EstimatedBodyWeightinKilograms"] = "NOT REPORTING";
            }
        }
    }
    else 
    {
        isNotApplicableFlag = false;
        v2Array.push({ section: "E16", element: "E16_01", val: _val[0] });
        eExam["eExam.01"] = _val[0];
        eExam["EstimatedBodyWeightinKilograms"] = _val[0];
    };


    /////////eExam.02
    _val = getValue(businessObject.elements, "eExam.02");
    if (_val == null) 
    {
        PNValue = getPertinentNegative("eExam.02")
        if(PNValue != null)
        {
            if(PNValue =="8801019")
            {
                eExam["HeadAssessment"] = "REFUSED";
                eExam["eExam.10"] = PN_REFUSED_IS_NILLABLE;
                v2Array.push({ section: "E16", element: "E16_02", val: v2NOT_KNOWN});       
            }
            else if(PNValue =="8801023")
            {
                eExam["HeadAssessment"] = "UNABLE TO COMPLETE";
                eExam["eExam.10"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                v2Array.push({ section: "E16", element: "E16_02", val: v2NOT_KNOWN});       
            }
        }
        else 
        {        
            if (isRequiredStateElement("eExam.02") == true) 
            {
                v2Array.push({ section: "E16", element: "E16_02", val: v2NOT_RECORDED });
                eExam["eExam.02"] = v3NOT_RECORDED;
                eExam["LengthBasedTapeMeasure"] = "NOT RECORDED";
            }
            else 
            {
                v2Array.push({ section: "E16", element: "E16_02", val: v2NOT_REPORTING });
                eExam["eExam.02"] = v3NOT_REPORTING;
                eExam["LengthBasedTapeMeasure"] = "NOT REPORTING";
            }
        }
    }
    else 
    {
        isNotApplicableFlag = false;          
        v2Array.push({ section: "E16", element: "E16_02", val: setV2("eExam.02",_val[0])});
        eExam["eExam.02"] = _val[0];
        eExam["LengthBasedTapeMeasure"] = setCodeText("eExam.02",_val[0]);

    };

    for (var xx = 0; xx < businessObject.sections.length; xx++) 
    {
        var elementList = businessObject.sections[xx].attributes.elements;
        V3XML.BeginNode("eExam.AssessmentGroup");
        OLAPXML.BeginNode("eExam.AssessmentGroup");

        /////////eExam.03
        _val = getValue(elementList, "eExam.03");

        if (_val == null) 
        {
            v2Array.push({ section: "E16", element: "E16_03", val: null});
            AssessmentGroup["eExam.03"] = null;
            AssessmentGroup["DateTimeofAssessment"] = null;
        }
        else
        {
            isNotApplicableFlag = false;          
            v2Array.push({ section: "E16", element: "E16_03", val: _val[0]});
            AssessmentGroup["eExam.03"] = _val[0];
            AssessmentGroup["DateTimeofAssessment"] = _val[0];
        };

        /////////eExam.04
        _val = getValue(elementList, "eExam.04");
        if (_val == null) 
        {
            PNValue = getPertinentNegative("eExam.04")
            if(PNValue != null)
            {
                AssessmentGroup["SkinAssessment"] = "Exam Finding Not Present";
                AbdomenGroupArray["eExam.03"] = "Exam Finding Not Present";;
                v2Array.push({ section: "E16", element: "E16_04", val: v2NOT_KNOWN});       
            }
            else
            {
                {
                    v2Array.push({ section: "E16", element: "E16_04", val: null});
                    AssessmentGroup["eExam.04"] = null;
                    AssessmentGroup["SkinAssessment"] = null;
                }
            }
        }
        else 
        {
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _val.length; i++) 
            {
                arr1.push(_val[i]);
                arr2.push(setV2("eExam.04", _val[i]));
                arr3.push(setCodeText("eExam.04", _val[i]));
            };
            isNotApplicableFlag = false;          
            v2Array.push({ section: "E16", element: "E16_04", val: arr2.slice(0)});                
            AssessmentGroup["eExam.04"] = arr1.slice(0);
            AssessmentGroup["SkinAssessment"] = arr3.slice(0);

        };

        /////////eExam.05
        _val = getValue(elementList, "eExam.05");
        if (_val == null) 
        {
            PNValue = getPertinentNegative("eExam.05")
            if(PNValue != null)
            {
                AssessmentGroup["HeadAssessment"] = "Exam Finding Not Present";
                AbdomenGroupArray["eExam.05"] = "Exam Finding Not Present";;
                v2Array.push({ section: "E16", element: "E16_05", val: v2NOT_KNOWN});       
            }
            else
            {
                v2Array.push({ section: "E16", element: "E16_05", val: null});
                AssessmentGroup["eExam.05"] = null;
                AssessmentGroup["HeadAssessment"] = null;
            }
        }
        else 
        {
            var arr1 = [];            
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _val.length; i++) 
            {
                arr1.push(_val[i]);
                arr2.push(setV2("eExam.05", _val[i]));
                arr3.push(setCodeText("eExam.05", _val[i]));
            };
            isNotApplicableFlag = false;          
            v2Array.push({ section: "E16", element: "E16_05", val: arr2.slice(0)});                
            AssessmentGroup["eExam.05"] = arr1.slice(0);
            AssessmentGroup["HeadAssessment"] = arr3.slice(0);
        };


        /////////eExam.06
        _val = getValue(elementList, "eExam.06");
        if (_val == null) 
        {
            PNValue = getPertinentNegative("eExam.06")
            if(PNValue != null)
            {
                AssessmentGroup["FaceAssessment"] = "Exam Finding Not Present";
                AbdomenGroupArray["eExam.05"] = "Exam Finding Not Present";;                 
            }
            else
            {
                AssessmentGroup["FaceAssessment"] = "Exam Finding Not Present";
                AssessmentGroup["eExam.06"] = null;            
            }
        }
        else 
        {
            var arr1 = [];            
            var arr3 = [];
            for (var i = 0; i < _val.length; i++) 
            {
                arr1.push(_val[i]);
                arr3.push(setCodeText("eExam.06", _val[i]));
            };
            isNotApplicableFlag = false;          
            AssessmentGroup["eExam.06"] = arr1.slice(0);
            AssessmentGroup["FaceAssessment"] = arr3.slice(0);
        };


        /////////eExam.07
        _val = getValue(elementList, "eExam.07");
        if (_val == null) 
        {
            PNValue = getPertinentNegative("eExam.07")
            if(PNValue != null)
            {
                AssessmentGroup["NeckAssessment"] = "Exam Finding Not Present";
                AbdomenGroupArray["eExam.07"] = "Exam Finding Not Present";;
                v2Array.push({ section: "E16", element: "E16_05", val: v2NOT_KNOWN});       
            }
            else
            {
                AssessmentGroup["eExam.07"] = null;
                AssessmentGroup["NeckAssessment"] = null;
                v2Array.push({ section: "E16", element: "E16_06", val: null});                
            }
        }
        else 
        {
            var arr1 = [];            
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _val.length; i++) 
            {
                arr1.push(_val[i]);
                arr2.push(setV2("eExam.07", _val[i]));
                arr3.push(setCodeText("eExam.07", _val[i]));
            };
            isNotApplicableFlag = false;          
            v2Array.push({ section: "E16", element: "E16_06", val: arr2.slice(0)});                
            AssessmentGroup["eExam.07"] = arr1.slice(0);
            AssessmentGroup["NeckAssessment"] = arr3.slice(0);
        };

        /////////eExam.08
        _val = getValue(elementList, "eExam.08");
        if (_val == null) 
        {            
            PNValue = getPertinentNegative("eExam.08")
            if(PNValue != null)
            {
                AssessmentGroup["ChestAssessment"] = "Exam Finding Not Present";
                AbdomenGroupArray["eExam.08"] = "Exam Finding Not Present";;
                v2Array.push({ section: "E16", element: "E16_07", val: v2NOT_KNOWN});       
            }
            else
            {
                AssessmentGroup["eExam.08"] = null;
                AssessmentGroup["ChestAssessment"] = null;
                v2Array.push({ section: "E16", element: "E16_07", val: null});                
            }
        }
        else 
        {
            var arr1 = [];            
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _val.length; i++) 
            {
                arr1.push(_val[i]);
                arr2.push(setV2("eExam.08", _val[i]));
                arr3.push(setCodeText("eExam.08", _val[i]));
            };
            isNotApplicableFlag = false;          
            v2Array.push({ section: "E16", element: "E16_07", val: arr2.slice(0)});                
            AssessmentGroup["eExam.08"] = arr1.slice(0);
            AssessmentGroup["ChestAssessment"] = arr3.slice(0);
        };

        /////////eExam.09
        _val = getValue(elementList, "eExam.09");
        alert("GetPN")
        if (_val == null) 
        {            
            PNValue = getPertinentNegative("eExam.09")
            if(PNValue != null)
            {
                AssessmentGroup["HeartAssessment"] = "Exam Finding Not Present";
                AbdomenGroupArray["eExam.09"] = "Exam Finding Not Present";;
                v2Array.push({ section: "E16", element: "E16_08", val: v2NOT_KNOWN});       
            }
            else
            {
                AssessmentGroup["eExam.09"] = null;
                AssessmentGroup["HeartAssessment"] = null;
                v2Array.push({ section: "E16", element: "E16_08", val: null});                
            }
        }
        else 
        {
            var arr1 = [];            
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _val.length; i++) 
            {
                arr1.push(_val[i]);
                arr2.push(setV2("eExam.09", _val[i]));
                arr3.push(setCodeText("eExam.09", _val[i]));
            };
            isNotApplicableFlag = false;          
            v2Array.push({ section: "E16", element: "E16_08", val: arr2.slice(0)});                
            AssessmentGroup["eExam.09"] = arr1.slice(0);
            AssessmentGroup["HeartAssessment"] = arr3.slice(0);
        };
        ////////////////////////////////

        _sectionIndex = getSectionIndex(businessObject.sections[xx].attributes, "eExam.AbdomenGroup");
        for (var x = 0; x < _sectionIndex.length; x++) 
        {        
            /////////eExam.10
            _val = getValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "eExam.09");
            if (_val == null) 
            {
                AbdomenGroupArray["eExam.10"] = null;
                AbdomenGroupArray["AbdominalAssessmentFindingLocation"] = null;
            }
            else 
            {
                isNotApplicableFlag = false;          
                AbdomenGroupArray["eExam.10"] = _val[0];
                AbdomenGroupArray["AbdominalAssessmentFindingLocation"] =  _val[0];
            };


            /////////eExam.11
            _val = getValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "eExam.11");
            if (_val == null) 
            {
                PNValue = getPertinentNegative("eExam.10")
                if(PNValue != null)
                {
                    AssessmentGroup["AbdomenAssessment"] = "Exam Finding Not Present";
                    AbdomenGroupArray["eExam.11"] = "Exam Finding Not Present";;
                    v2Array.push({ section: "E16", element: "E16_09", val: v2NOT_KNOWN});                      
                }
                else
                {
                    AssessmentGroup[""] = "Exam Finding Not Present";
                    AbdomenGroupArray["eExam.11"] = "Exam Finding Not Present";;
                    v2Array.push({ section: "E16", element: "E16_09", val: v2NOT_KNOWN});                      
                }
            }
            else 
            {
                {
                    var arr1 = [];            
                    var arr2 = [];
                    var arr3 = [];
                    for (var i = 0; i < _val.length; i++) 
                    {
                        arr1.push(_val[i]);
                        arr2.push(setV2("eExam.11", _val[i]));
                        arr3.push(setCodeText("eExam.11", _val[i]));
                    };
                    isNotApplicableFlag = false;          
                    v2Array.push({ section: "E16", element: "E16_09", val: arr2.slice(0)});                
                    AbdomenGroupArray["eExam.09"] = arr1.slice(0);
                    AssessmentGroup["AbdomenAssessment"] = arr3.slice(0);
                };
        };
        /////////////////////////


        /////////eExam.12
        _val = getValue(elementList, "eExam.12");
        if (_val == null) 
        {
            PNValue = getPertinentNegative("eExam.12")
            if(PNValue != null)
            {
                AssessmentGroup["PelvisGenitourinaryAssessment"] = "Exam Finding Not Present";
                AssessmentGroup["eExam.12"] = "Exam Finding Not Present";
                v2Array.push({ section: "E16", element: "E16_13", val: v2NOT_KNOWN});       
            }
            else
            {
                v2Array.push({ section: "E16", element: "E16_13", val: null});       
                AssessmentGroup["PelvisGenitourinaryAssessment"] = null;
                AssessmentGroup["eExam.12"] = null;
            }
        }
        {
            var arr1 = [];            
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _val.length; i++) 
            {
                arr1.push(_val[i]);
                arr2.push(setV2("eExam.12", _val[i]));
                arr3.push(setCodeText("eExam.12", _val[i]));
            };
            isNotApplicableFlag = false;          
            v2Array.push({ section: "E16", element: "E16_13", val: arr2.slice(0)});                
            AssessmentGroup["eExam.12"] = arr1.slice(0);
            AssessmentGroup["PelvisGenitourinaryAssessment"] = arr3.slice(0);
        };

        ////////////////////
        _sectionIndex = getSectionIndex(businessObject.sections[xx].attributes, "eExam.SpineGroup");
        for (var x = 0; x < _sectionIndex.length; x++) 
        {
            /////////eExam.13
            _val = getValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "eExam.13");
            if (_val == null) 
            {
                SpineGroup["eExam.13"] = null;
                SpineGroup["BackandSpineAssessmentFindingLocation"] = null;
            }
            else 
            {
                isNotApplicableFlag = false;          
                SpineGroup["eExam.13"] = _val[0];
                SpineGroup["BackandSpineAssessmentFindingLocation"] = _val[0];
            };
            /////////eExam.14
            _val = getValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "eExam.14");
            if (_val == null) 
            {
                PNValue = getPertinentNegative("eExam.13")
                if(PNValue != null)
                {
                    SpineGroup["BackandSpineAssessment"] = "Exam Finding Not Present";
                    SpineGroup["eExam.13"] = "Exam Finding Not Present";
                    v2Array.push({ section: "E16", element: "E16_14", val: v2NOT_KNOWN});       
                }
                else
                {
                    SpineGroup["eExam.14"] = null;
                    SpineGroup["BackandSpineAssessment"] = null;
                    v2Array.push({ section: "E16", element: "E16_14", val: null});       
                }
            }
            else
            {
                var arr1 = [];            
                var arr2 = [];
                var arr3 = [];
                for (var i = 0; i < _val.length; i++) 
                {
                    arr1.push(_val[i]);
                    arr2.push(setV2("eExam.14", _val[i]));
                    arr3.push(setCodeText("eExam.14", _val[i]));
                };
                isNotApplicableFlag = false;          
                v2Array.push({ section: "E16", element: "E16_14", val: arr2.slice(0)});                
                SpineGroup["eExam.14"] = arr1.slice(0);
                SpineGroup["BackandSpineAssessment"] = arr3.slice(0);
            };
        };
        /////////////////////////


        ////////////////////
        _sectionIndex = getSectionIndex(businessObject.sections[xx].attributes, "eExam.ExtremityGroup");
        for (var x = 0; x < _sectionIndex.length; x++) 
        {
         
            /////////eExam.15
            _val = getValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "eExam.13");
            if (_val == null) 
            {
                ExtremityGroup["eExam.15"] = null;
                ExtremityGroup["ExtremityAssessmentFindingLocation"] = null;
            }
            else 
            {
                isNotApplicableFlag = false;          
                ExtremityGroup["eExam.15"] = _val[0];
                ExtremityGroup["ExtremityAssessmentFindingLocation"] =  setCodeText("eExam.15", _val[0]);
            };
            /////////eExam.16
            _val = getValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "eExam.14");
            if (_val == null) 
            {
                PNValue = getPertinentNegative("eExam.16")
                if(PNValue != null)
                {
                    ExtremityGroup["ExtremityAssessment"] = "Exam Finding Not Present";
                    ExtremityGroup["eExam.16"] = "Exam Finding Not Present";
                    v2Array.push({ section: "E16", element: "E16_17", val: v2NOT_KNOWN});       
                }
                else
                {
                    ExtremityGroup["eExam.16"] = null;
                    ExtremityGroup["ExtremityAssessment"] = null;
                    v2Array.push({ section: "E16", element: "E16_17", val: null});       
                }
            }
            else
            {
                var arr1 = [];            
                var arr2 = [];
                var arr3 = [];
                for (var i = 0; i < _val.length; i++) 
                {
                    arr1.push(_val[i]);
                    arr2.push(setV2("eExam.16", _val[i]));
                    arr3.push(setCodeText("eExam.16", _val[i]));
                };
                isNotApplicableFlag = false;          
                v2Array.push({ section: "E16", element: "E16_16", val: arr2.slice(0)});                
                ExtremityGroup["eExam.16"] = arr1.slice(0);
                ExtremityGroup["ExtremityAssessment"] = arr3.slice(0);
            };
        };
        /////////////////////////


        ////////////////////
        _sectionIndex = getSectionIndex(businessObject.sections[xx].attributes, "eExam.EyeGroup");
        for (var x = 0; x < _sectionIndex.length; x++) 
        {
         
            /////////eExam.17
            _val = getValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "eExam.17");
            if (_val == null) 
            {
                PNValue = getPertinentNegative("eExam.17")
                if(PNValue != null)
                {
                    EyeGroup["EyeAssessmentFindingLocation"] = "Exam Finding Not Present";
                    EyeGroup["eExam.17"] = "Exam Finding Not Present";
                }
                else
                {
                    EyeGroup["eExam.17"] = null;
                    EyeGroup["EyeAssessmentFindingLocation"] = null;
                }
            }
            else 
            {
                isNotApplicableFlag = false;          
                EyeGroup["eExam.17"] = _val[0];
                EyeGroup["EyeAssessmentFindingLocation"] = setCodeText("eExam.17", _val[0]);
            };
            /////////eExam.18
            _val = getValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "eExam.18");
            if (_val == null) 
            {
                PNValue = getPertinentNegative("eExam.18")
                if(PNValue != null)
                {
                    EyeGroup["EyeAssessment"] = "Exam Finding Not Present";
                    EyeGroup["eExam.18"] = "Exam Finding Not Present";
                    v2Array.push({ section: "E16", element: "E16_21", val: v2NOT_KNOWN});       
                }
                else
                {
                    ExtremityGroup["eExam.18"] = null;
                    ExtremityGroup["EyeAssessment"] = null;
                    v2Array.push({ section: "E16", element: "E16_21", val: null});    
                }
            }
            else
            {
                var arr1 = [];            
                var arr2 = [];
                var arr3 = [];
                for (var i = 0; i < _val.length; i++) 
                {
                    arr1.push(_val[i]);
                    arr2.push(setV2("eExam.18", _val[i]));
                    arr3.push(setCodeText("eExam.18", _val[i]));
                };
                isNotApplicableFlag = false;          
                v2Array.push({ section: "E16", element: "E16_21", val: arr2.slice(0)});                
                AssessmentGroup["eExam.18"] = arr1.slice(0);
                AssessmentGroup["EyeAssessment"] = arr3.slice(0);
            };
        /////////////////////////
      
        /////////eExam.19
        _val = getValue(elementList, "eExam.19");
        if (_val == null) 
        {
            PNValue = getPertinentNegative("eExam.19")
            if(PNValue != null)
            {
                AssessmentGroup["MentalStatusAssessment"] = "Exam Finding Not Present";
                AssessmentGroup["eExam.19"] = "Exam Finding Not Present";
                v2Array.push({ section: "E16", element: "E16_21", val: v2NOT_KNOWN});       
            }            
            else
            {
                AssessmentGroup["eExam.19"] = null;
                AssessmentGroup["MentalStatusAssessment"] = null;
                v2Array.push({ section: "E16", element: "E16_23", val: null});                       
            }
        }
        else
        {
            var arr1 = [];            
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _val.length; i++) 
            {
                arr1.push(_val[i]);
                arr2.push(setV2("eExam.19", _val[i]));
                arr3.push(setCodeText("eExam.19", _val[i]));
            };
            isNotApplicableFlag = false;          
            v2Array.push({ section: "E16", element: "E16_23", val: arr2.slice(0)});                
            AssessmentGroup["eExam.19"] = arr1.slice(0);
            AssessmentGroup["MentalStatusAssessment"] = arr3.slice(0);
        };
        /////////eExam.20
        _val = getValue(elementList, "eExam.20");
        if (_val == null) 
        {
            PNValue = getPertinentNegative("eExam.20")
            if(PNValue != null)
            {
                AssessmentGroup["eExam.20"] = "8801005";
                AssessmentGroup["NeurologicalAssessment"] = PN_FINDING_NOT_PRESENT_IS_NILLABLE;
                v2Array.push({ section: "E16", element: "E16_24", val: v2NOT_KNOWN});       
            }
            else
            {
                AssessmentGroup["eExam.20"] = null;
                AssessmentGroup["NeurologicalAssessment"] = null;
                v2Array.push({ section: "E16", element: "E16_24", val: null});       
            }
        }
        {
            var arr1 = [];            
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _val.length; i++) 
            {
                arr1.push(_val[i]);
                arr2.push(setV2("eExam.20", _val[i]));
                arr3.push(setCodeText("eExam.20", _val[i]));
            };
            isNotApplicableFlag = false;          
            v2Array.push({ section: "E16", element: "E16_24", val: arr2.slice(0)});                
            AssessmentGroup["eExam.20"] = arr1.slice(0);
            AssessmentGroup["NeurologicalAssessment"] = arr3.slice(0);
        };
    }
};

function setD2(NEMSISElementNumber, valueArray) {
    //    console.log(NEMSISElementNumber);
    var _retArray = [];
    //    console.log(valueArray);
    switch (NEMSISElementNumber) {
        case "eExam.02":

            if (eExam02[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eExam02[valueArray[0]]);
            }
            break;
        case "eExam.04":
            for (i = 0; i < valueArray.length; i++) {
                if (eExam04[valueArray[i]] == undefined) {
                    _retArray.push(valueArray[i] + "UNDEFINED");
                }
                else {
                    _retArray.push(eExam04[valueArray[i]]);
                }
            }
            break;
        case "eExam.05":
            for (i = 0; i < valueArray.length; i++) {
                if (eExam05[valueArray[i]] == undefined) {
                    _retArray.push(valueArray[i] + "UNDEFINED");
                }
                else {
                    _retArray.push(eExam05[valueArray[i]]);
                }
            }
            break;
        case "eExam.07":
            for (i = 0; i < valueArray.length; i++) {
                if (eExam07[valueArray[i]] == undefined) {
                    _retArray.push(valueArray[i] + "UNDEFINED");
                }
                else {
                    _retArray.push(eExam07[valueArray[i]]);
                }
            }
            break;
        case "eExam.08":
            for (i = 0; i < valueArray.length; i++) {
                if (eExam08[valueArray[i]] == undefined) {
                    _retArray.push(valueArray[i] + "UNDEFINED");
                }
                else {
                    _retArray.push(eExam08[valueArray[i]]);
                }
            }
        break;
        
        
        default:
            _retArray.push(NEMSISElementNumber = " version 2 not found");
    }

    return _retArray;

}

var eExam02 = {
    "3502001":"3375",
    "3502003":"3380",
    "3502005":"3385",
    "3502007":"3390",
    "3502009":"3395",
    "3502011":"3400",
    "3502013":"3405",
    "3502015":"3410",
    "3502017":"3415"
};

var eExam04 ={
    "3504001":"3430",
    "3504003":"3435",
    "3504005":"3440",
    "3504007":"3430",
    "3504009":"3435",
    "3504011":"3465",
    "3504013":"3430",
    "3504015":"3445",
    "3504017":"3450",
    "3504019":"3455",
    "3504021":"3420",
    "3504023":"3425",
    "3504025":"3460",
    "3504027":"-10",
    "3504029":"-10",
    "3504031":"-10",
    "3504033":"3465"
}

var eExam05={
    "3505001":"3490",
    "3505003":"3490",
    "3505005":"3490",
    "3505007":"3490",
    "3505009":"3490",
    "3505011":"3490",
    "3505013":"3490",
    "3505015":"3490",
    "3505017":"3490",
    "3505019":"3495",
    "3505021":"3485",
    "3505023":"3490",
    "3505025":"3495",
    "3505027":"3490",
    "3505029":"3490",
    "3505031":"3490",
    "3505033":"3470",
    "3505035":"3475",
    "3505037":"3490",
    "3505039":"3490",
    "3505045":"3495",
    "3505047":"3495",
    "3505049":"3495",
    "3505051":"3495",
    "3505053":"3495"
};

var eExam07 = {
    "3507001":"-10",
    "3507003":"-10",
    "3507005":"-10",
    "3507007":"-10",
    "3507009":"-10",
    "3507011":"-10",
    "3507013":"-10",
    "3507015":"-10",
    "3507017":"-10",
    "3507019":"-10",
    "3507021":"-10",
    "3507023":"-10",
    "3507025":"3500",
    "3507027":"-10",
    "3507029":"3500",
    "3507031":"3505",
    "3507033":"-10",
    "3507035":"-10",
    "3507037":"3515",
    "3507039":"3520",
    "3507045":"3525",
    "3507047":"3525",
    "3507049":"-10",
    "3507051":"-10",
    "3507053":"-10",
    "3507055":"-10",
    "3507057":"-10",
    "3507059":"-10",

}

var eExam08 = {

    "3508001":"-10",
    "3508003":"-10",
    "3508005":"3540",
    "3508007":"-10",
    "3508009":"-10",
    "3508011":"3545",
    "3508013":"3550",
    "3508015":"3550",
    "3508017":"3550",
    "3508019":"3570",
    "3508021":"3570",
    "3508023":"3570",
    "3508025":"-10",
    "3508027":"-10",
    "3508029":"-10",
    "3508031":"-10",
    "3508033":"-10",
    "3508035":"-10",
    "3508037":"3555",
    "3508039":"3560",
    "3508041":"-10",
    "3508043":"-10",
    "3508045":"-10",
    "3508047":"3565",
    "3508049":"-10",
    "3508051":"-10",
    "3508053":"3530",
    "3508055":"3535",
    "3508057":"-10",
    "3508059":"3585",
    "3508061":"3590",
    "3508063":"-10",
    "3508065":"3575",
    "3508067":"3575",
    "3508069":"-10",
    "3508071":"3580",
    "3508073":"3580",
    "3508075":"3580",
    "3508077":"-10",
    "3508079":"-10",
    "3508085":"3585",
    "3508087":"3590",
    "3508089":"3580",
    "3508091":"3580",
    "3508093":"3580",
    "3508095":"3580",
    "3508097":"3580",
    "3508099":"3565",
    "3508101":"-10",
    "3508103":"3585"

};


var eExam09 = {
    "3509001":"3610",
    "3509003":"3605",
    "3509005":"3610",
    "3509007":"3610",
    "3509009":"3595",
    "3509011":"3600",    
    "3509013":"3605",
    "3509015":"3605",
    "3509017":"3605",
    "3509019":"3605",
    "3509021":"3605"   
};


if (eExam10 = 3510001 )  //Generalized for eExam11
{
    "3511001":"3640",
    "3511003":"3625",
    "3511005":"3640",
    "3511007":"3640",
    "3511009":"3640",
    "3511011":"3640",
    "3511013":"3640",
    "3511015":"3640",
    "3511017":"3640",
    "3511019":"3640",
    "3511021":"3625",
    "3511023":"3635",
    "3511025":"3630",
    "3511027":"3640",
    "3511029":"3640",
    "3511031":"3630",
    "3511033":"3635",
    "3511035":"3635",
    "3511037":"3615",
    "3511039":"3620",
    "3511041":"3640",
    "3511043":"3640",
   "3511045":"3640",
    "3511051":"3640",
   "3511053":"3640",
    "3511055":"3640",
    "3511057":"3635",
   "3511059":"3640",
    "3511061":"3635"
};


if (eExam10 = 3510003 )  //Left Lower Quadrant for eExam11
{
    "3511001":"3670",
    "3511003":"3655",
    "3511005":"3670",
    "3511007":"3670",
    "3511009":"3670",
    "3511011":"3670",
    "3511013":"3670",
    "3511015":"3670",
    "3511017":"3670",
    "3511019":"3670",
    "3511021":"3655",
    "3511023":"3665",
    "3511025":"3660",
    "3511027":"3670",
    "3511029":"3670",
    "3511031":"3660",
    "3511033":"3665",
    "3511035":"3665",
    "3511037":"3645",
    "3511039":"3650",
    "3511041":"3670",
    "3511043":"3670",
    "3511045":"3670",
    "3511051":"3670",
    "3511053":"3670",
    "3511055":"3670",
    "3511057":"3665",
    "3511059":"3670",
    "3511061":"3665"
}

if (eExam10 = 3510005 )  //Left Upper Quadrant for eExam11
{
    "3511001":"3640",
    "3511003":"3625",
    "3511005":"3640",
    "3511007":"3640",
    "3511009":"3640",
    "3511011":"3640",
    "3511013":"3640",
    "3511015":"3640",
    "3511017":"3640",
    "3511019":"3640",
    "3511021":"3625",
    "3511023":"3635",
    "3511025":"3630",
    "3511027":"3640",
    "3511029":"3640",
    "3511031":"3630",
    "3511033":"3635",
    "3511035":"3635",
    "3511037":"3615",
    "3511039":"3620",
    "3511041":"3640",
    "3511043":"3640",
   "3511045":"3640",
    "3511051":"3640",
   "3511053":"3640",
    "3511055":"3640",
    "3511057":"3635",
   "3511059":"3640",
    "3511061":"3635"
}
}

if (eExam10 = 3510007 )  //Periumbilical for eExam11
{
    "3511001":"3640",
    "3511003":"3625",
    "3511005":"3640",
    "3511007":"3640",
    "3511009":"3640",
    "3511011":"3640",
    "3511013":"3640",
    "3511015":"3640",
    "3511017":"3640",
    "3511019":"3640",
    "3511021":"3625",
    "3511023":"3635",
    "3511025":"3630",
    "3511027":"3640",
    "3511029":"3640",
    "3511031":"3630",
    "3511033":"3635",
    "3511035":"3635",
    "3511037":"3615",
    "3511039":"3620",
    "3511041":"3640",
    "3511043":"3640",
    "3511045":"3640",
    "3511051":"3640",
    "3511053":"3640",
    "3511055":"3640",
    "3511057":"3635",
    "3511059":"3640",
    "3511061":"3635"
}
if (eExam10 = 3510009 )  //Right Lower Quadrant for eExam11
{  
    "3511001":"3730",
    "3511003":"3725",
    "3511005":"3730",
    "3511007":"3730",
    "3511009":"3730",
    "3511011":"3730",
    "3511013":"3730",
    "3511015":"3730",
    "3511017":"3730",
    "3511019":"3730",
    "3511021":"3725",
    "3511023":"3725",
    "3511025":"3720",
    "3511027":"3730",
    "3511029":"3730",
    "3511031":"3720",
    "3511033":"3725",
    "3511035":"3725",
    "3511037":"3505",
    "3511039":"3710",
    "3511041":"3730",
    "3511043":"3730",
    "3511045":"3730",
    "3511051":"3730",
    "3511053":"3730",
    "3511055":"3730",
    "3511057":"3725",
    "3511059":"3730",
    "3511061":"3725"
};

if (eExam10 = 3510011 )  //Right Upper Quadrant for eExam11
{
    "3511001":"3680",
    "3511003":"3675",
    "3511005":"3690",
    "3511007":"3690",
    "3511009":"3690",
    "3511011":"3690",
    "3511013":"3690",
    "3511015":"3690",
    "3511017":"3690",
    "3511019":"3690",
    "3511021":"3675",
    "3511023":"3685",
    "3511025":"3680",
    "3511027":"3690",
    "3511029":"3690",
    "3511031":"3680",
    "3511033":"3685",
    "3511035":"3685",
    "3511037":"3675",
    "3511039":"3680",
    "3511041":"3690",
    "3511043":"3690",
    "3511045":"3690",
    "3511051":"3690",
    "3511053":"3690",
    "3511055":"3690",
    "3511057":"3685",
    "3511059":"3690",
    "3511061":"3685"
}
var eExam12 = {


    "3512001":"3755",
    "3512003":"3755",
    "3512005":"3755",
    "3512007":"3760",
    "3512009":"3760",
    "3512011":"3760",
    "3512013":"3760",
    "3512015":"3755",
    "3512017":"3755",
    "3512019":"3755",
    "3512021":"3755",
    "3512023":"3755",
    "3512025":"3755",
    "3512027":"3750",
    "3512029":"3755",
    "3512031":"3755",
    "3512033":"3755",
    "3512035":"3755",
    "512037":"3735",
    "3512039":"3740",
    "3512041":"3755",
    "3512043":"3755",
    "3512045":"3755",
    "3512047":"3750",
    "3512049":"3745",
    "3512051":"3755",
    "3512057":"3755",
    "3512059":"3755",
    "3512061":"3755",
    "3512063":"3755",
    "3512065":"3755"
}



if eExam.13 = 3513001 or 3513003 or 3513005 or 3513007 the eExam14 =

{
    "3514001":"3780",
    "3514003":"3780",
    "3514005":"3780",
    "3514007":"3780",
    "3514009":"3780",
    "3514011":"3780",
    "3514013":"3780",
    "3514015":"3780",
    "3514017":"3780",
    "3514019":"3780",
    "3514021":"3780",
    "3514023":"3780",
    "3514025":"3780",
    "3514027":"3765",
    "3514029":"3770",
    "3514031":"3780",
    "3514033":"3775",
    "3514035":"3780",
    "3514041":"3780",
    "3514043":"3785",
    "3514045":"3780",
    "3514047":"3780",
    "3514049":"3780",
    "3514051":"3780",
    "3514053":"3780",
    "3514055":"3780",

}



if eExam.13 = 3513009 or 3513011 or 3513013 or 3513021 or 3513023 or 3513027 
{
    "3514001":"3805",
    "3514003":"3805",
    "3514005":"3805",
    "3514007":"3805",
    "3514009":"3805",
    "3514011":"3805",
    "3514013":"3805",
    "3514015":"3805",
    "3514017":"3805",
    "3514019":"3805",
    "3514021":"3805",
    "3514023":"3805",
    "3514025":"3805",
    "3514027":"3790",
    "3514029":"3795",
    "3514031":"3805",
    "3514033":"3800",
    "3514035":"3805",
    "3514041":"3805",
    "3514043":"3810",
    "3514045":"3805",
    "3514047":"3805",
    "3514049":"3805",
    "3514051":"3805",
    "3514053":"3805",
    "3514055":"3805",

    }


if eExam.13 = 3513017 or 3513019 or 3513025
{
   "3514001":"3830",
   "3514003":"3830",
   "3514005":"3830",
   "3514007":"3830",
   "3514009":"3830",
   "3514011":"3830",
   "3514013":"3830",
   "3514015":"3830",
   "3514017":"3830",
   "3514019":"3830",
   "3514021":"3830",
   "3514023":"3830",
   "3514025":"3830",
   "3514027":"3815",
   "3514029":"3820",
   "3514031":"3830",
   "3514033":"3825",
   "3514035":"3830",
   "3514041":"3830",
   "3514043":"3835",
   "3514045":"3830",
   "3514047":"3830",
   "3514049":"3830",
   "3514051":"3830",
   "3514053":"3830",
   "3514055":"3830",

   }



//Extremities, right upper
if eExam.15 = 3515007, 3515011,  3515015, 3515019, 3515023, 3515027, 3515039, 3515043, 3515047, 3515067, 3515071, 3515095

eExam16 = {
    "3516001":"3865",
    "3516003":"3865",
    "3516005":"3865",
    "3516007":"3865",
    "3516009":"3865",
    "3516011":"3865",
    "3516013":"3865",
    "3516015":"3865",
    "3516017":"3865",
    "3516019":"3865",
    "3516021":"3865",
    "3516023":"3865",
    "3516025":"3865",
    "3516027":"3865",
    "3516029":"3860",
    "3516031":"3865",
    "3516033":"3865",
    "3516035":"3865",
    "3516037":"3865",
    "3516039":"3865",
    "3516041":"3865",
    "3516043":"3870",
    "3516045":"3840",
    "3516047":"3840",
    "3516049":"3840",
    "3516051":"3845",
    "3516053":"3865",
    "3516055":"3865",
    "3516057":"3850",
    "3516059":"3850",
    "3516061":"3840",
    "3516063":"3865",
    "3516065":"3855",
    "3516067":"3855",
    "3516069":"3840",
    "3516075":"3865",
    "3516077":"3865",
    "3516079":"3865",
    "3516081":"3865"
}

//Extremities, left upper
if eExam.15 = 3515005, 3515009,  3515013, 3515017, 3515021, 3515025, 3515037, 3515041, 3515045, 3515065, 3515069, 3515093

eExam16 = {
    "3516001":"3935",
    "3516003":"3935",
    "3516005":"3935",
    "3516007":"3935",
    "3516009":"3935",
    "3516011":"3935",
    "3516013":"3935",
    "3516015":"3935",
    "3516017":"3935",
    "3516019":"3935",
    "3516021":"3935",
    "3516023":"3935",
    "3516025":"3935",
    "3516027":"3935",
    "3516029":"3930",
    "3516031":"3935",
    "3516033":"3935",
    "3516035":"3935",
    "3516037":"3935",
    "3516039":"3935",
    "3516041":"3935",
    "3516043":"3940",
    "3516045":"3910",
    "3516047":"3910",
    "3516049":"3910",
    "3516051":"3915",
    "3516053":"3935",
    "3516055":"3935",
    "3516057":"3920",
    "3516059":"3920",
    "3516061":"3910",
    "3516063":"3935",
    "3516065":"3925",
    "3516067":"3925",
    "3516069":"3910",
    "3516075":"3935",
    "3516077":"3935",
    "3516079":"3935",
    "3516081":"3935"
}

//Extremities, RIGHT LOWER
if eExam.15 = 3515003, 3515031,  3515035, 3515051, 3515055, 3515059, 3515063, 3515075, 3515077, 3515079, 3515083, 3515087, 3515091

eExam16 = {
    "3516001":"3900",
    "3516003":"3900",
    "3516005":"3900",
    "3516007":"3900",
    "3516009":"3900",
    "3516011":"3900",
    "3516013":"3900",
    "3516015":"3900",
    "3516017":"3900",
    "3516019":"3900",
    "3516021":"3900",
    "3516023":"3900",
    "3516025":"3900",
    "3516027":"3900",
    "3516029":"3895",
    "3516031":"3900",
    "3516033":"3900",
    "3516035":"3900",
    "3516037":"3900",
    "3516039":"3900",
    "3516041":"3900",
    "3516043":"3905",
    "3516045":"3875",
    "3516047":"3875",
    "3516049":"3875",
    "3516051":"3880",
    "3516053":"3900",
    "3516055":"3900",
    "3516057":"3885",
    "3516059":"3885",
    "3516061":"3875",
    "3516063":"3900",
    "3516065":"3890",
    "3516067":"3890",
    "3516069":"3875",
    "3516075":"3900",
    "3516077":"3900",
    "3516079":"3900",
    "3516081":"3900"
}

//Extremities, LEFT LOWER
if eExam.15 = 3515003, 3515031,  3515035, 3515051, 3515055, 3515059, 3515063, 3515075, 3515077, 3515079, 3515083, 3515087, 3515091

eExam16 = {
    "3516001":"3970",
    "3516003":"3970",
    "3516005":"3970",
    "3516007":"3970",
    "3516009":"3970",
    "3516011":"3970",
    "3516013":"3970",
    "3516015":"3970",
    "3516017":"3970",
    "3516019":"3970",
    "3516021":"3970",
    "3516023":"3970",
    "3516025":"3970",
    "3516027":"3970",
    "3516029":"3965",
    "3516031":"3970",
    "3516033":"3970",
    "3516035":"3970",
    "3516037":"3970",
    "3516039":"3970",
    "3516041":"3970",
    "3516043":"3975",
    "3516045":"3945",
    "3516047":"3945",
    "3516049":"3945",
    "3516051":"3950",
    "3516053":"3970",
    "3516055":"3970",
    "3516057":"3955",
    "3516059":"3955",
    "3516061":"3945",
    "3516063":"3970",
    "3516065":"3960",
    "3516067":"3960",
    "3516069":"3945",
    "3516075":"3970",
    "3516077":"3970",
    "3516079":"3970",
    "3516081":"3970"
}

if eExam.17 = 3517001 and 3517003

var eExam18 = {
    "3518001":"3985",
    "3518003":"3985",
    "3518005":"3990",
    "3518007":"3995",
    "3518009":"4000",
    "3518011":"4005",
    "3518013":"4010",
    "3518015":"4010",
    "3518017":"4015",
    "3518019":"4020",
    "3518021":"4020",
    "3518023":"4020",
    "3518025":"4020",
    "3518027":"4020",
    "3518029":"4020",
    "3518031":"4020",
    "3518033":"4020",
    "3518035":"4025",
    "3518037":"4025",
    "3518039":"3980",
    "3518041":"4025",
    "3518043":"4020",
    "3518045":"4020",
    "3518047":"4020",
    "3518049":"4020",
    "3518051":"4020",
    "3518053":"4020",
    "3518055":"4020",
    "3518057":"4020",
    "3518059":"4025",
}

if eExam.17 = 3517005

var eExam18 = {

    "3518001":"4035",
    "3518003":"4035",
    "3518005":"4040",
    "3518007":"4045",
    "3518009":"4050",
    "3518011":"4055",
    "3518013":"4060",
    "3518015":"4060",
    "3518017":"4075",
    "3518019":"4070",
    "3518021":"4070",
    "3518023":"4070",
    "3518025":"4070",
    "3518027":"4070",
    "3518029":"4070",
    "3518031":"4070",
    "3518033":"4070",
    "3518035":"4075",
    "3518037":"4075",
    "3518039":"4030",
    "3518041":"4075",
    "3518043":"4070",
    "3518045":"4070",
    "3518047":"4070",
    "3518049":"4070",
    "3518051":"4070",
    "3518053":"4070",
    "3518055":"4070",
    "3518057":"4070",
    "3518059":"4075
},

var eExam19 = {
    "3519001":"4090",
    "3519003":"4095",
    "3519005":"4100",
    "3519007":"4080",
    "3519009":"4085",
    "3519011":"4105",
    "3519013":"4110",
    "3519015":"4110",
    "3519017":"4115",
    "3519019":"4120",
    "3519021":"4120"
};

var eExam20 = {
    "3520001":"4130",
    "3520003":"4155",
    "3520005":"4135",
    "3520007":"4125",
    "3520009":"4145",
    "3520011":"4145",
    "3520013":"4135",
    "3520015":"4125",
    "3520017":"4165",
    "3520019":"4170",
    "3520021":"4125",
    "3520023":"4130",
    "3520025":"4145",
    "3520027":"4150",
    "3520029":"4155",
    "3520031":"4170",
    "3520033":"4125",
    "3520035":"4125",
    "3520037":"4160",
    "3520039":"4140",
    "3520041":"4140",
    "3520043":"4165",
    "3520045":"4170",
    "3520047":"4130",
    "3520049":"4130"
}


var eExam334_02 = {
    "3502001" : "blue", 
    "3502003" : "Green", 
    "3502005" : "Grey", 
    "3502007" : "Orange", 
    "3502009" : "Pink", 
    "3502011" : "Purple", 
    "3502013" : "Red", 
    "3502015" : "White", 
    "3502017" : "Yellow"
};
var eExam334_04 = {
    "3504001" : "Clammy", 
    "3504003" : "Cold", 
    "3504005" : "Cyanotic", 
    "3504007" : "Diaphoretic", 
    "3504009" : "Dry", 
    "3504011" : "Flushed", 
    "3504013" : "Hot", 
    "3504015" : "Jaundiced", 
    "3504017" : "Lividity", 
    "3504019" : "Mottled", 
    "3504021" : "Normal", 
    "3504023" : "Not Done", 
    "3504025" : "Pale", 
    "3504027" : "Poor Turgor", 
    "3504029" : "Red (Erythematous)", 
    "3504031" : "Tenting", 
    "3504033" : "Warm" 
};
var eExam334_05 = {
    "3505001" : "Abrasion", 
    "3505003" : "Avulsion", 
    "3505005" : "Bleeding Controlled", 
    "3505007" : "Bleeding Uncontrolled", 
    "3505009" : "Burn-Blistering", 
    "3505011" : "Burn-Charring", 
    "3505013" : "Burn-Redness", 
    "3505015" : "Burn-White/Waxy", 
    "3505017" : "Decapitation", 
    "3505019" : "Deformity", 
    "3505021" : "Drainage", 
    "3505023" : "Foreign Body", 
    "3505025" : "Gunshot Wound-Entry", 
    "3505027" : "Gunshot Wound-Exit", 
    "3505029" : "Laceration", 
    "3505031" : "Mass/Lesion", 
    "3505033" : "Normal", 
    "3505035" : "Not Done", 
    "3505037" : "Pain", 
    "3505039" : "Puncture/Stab Wound", 
    "3505041" : "Swelling/Bruising/Contusion with Pain", 
    "3505043" : "Swelling/Bruising/Contusion without Pain",
    "3505045" : "Gunshot Wound-Unknown if Entry or Exit",
    "3505047" : "Crush Injury",
    "3505049" : "Swelling",
    "3505051" : "Contusion",
    "3505053" : "Tenderness"
};

var eExam334_06 = {
    "3506001" : "Abrasion", 
    "3506003" : "Asymmetric Smile or Droop", 
    "3506005" : "Avulsion", 
    "3506007" : "Bleeding Controlled", 
    "3506009" : "Bleeding Uncontrolled", 
    "3506011" : "Burn-Blistering", 
    "3506013" : "Burn-Charring", 
    "3506015" : "Burn-Redness", 
    "3506017" : "Burn-White/Waxy", 
    "3506019" : "Decapitation", 
    "3506021" : "Deformity", 
    "3506023" : "Drainage", 
    "3506025" : "Foreign Body", 
    "3506027" : "Gunshot Wound-Entry", 
    "3506029" : "Gunshot Wound-Exit", 
    "3506031" : "Laceration", 
    "3506033" : "Mass/Lesion", 
    "3506035" : "Normal", 
    "3506037" : "Not Done", 
    "3506039" : "Pain", 
    "3506041" : "Puncture/Stab Wound", 
    "3506043" : "Swelling/Bruising/Contusion with Pain", 
    "3506045" : "Swelling/Bruising/Contusion without Pain", 
    "3506047" : "Gunshot Wound-Unknown if Entry or Exit", 
    "3506049" : "Crush Injury", 
    "3506051" : "Tenderness", 
    "3506053" : "Swelling", 
    "3506055" : "Contusion",
};
var eExam334_07 = {
    "3507001" : "Abrasion", 
    "3507003" : "Avulsion", 
    "3507005" : "Bleeding Controlled", 
    "3507007" : "Bleeding Uncontrolled", 
    "3507009" : "Burn-Blistering", 
    "3507011" : "Burn-Charring", 
    "3507013" : "Burn-Redness", 
    "3507015" : "Burn-White/Waxy", 
    "3507017" : "Decapitation", 
    "3507019" : "Foreign Body", 
    "3507021" : "Gunshot Wound-Entry", 
    "3507023" : "Gunshot Wound-Exit", 
    "3507025" : "JVD", 
    "3507027" : "Laceration", 
    "3507029" : "Normal", 
    "3507031" : "Not Done", 
    "3507033" : "Pain", 
    "3507035" : "Puncture/Stab Wound", 
    "3507037" : "Stridor", 
    "3507039" : "Subcutaneous Air", 
    "3507041" : "Swelling/Bruising/Contusion with Pain", 
    "3507043" : "Swelling/Bruising/Contusion without Pain", 
    "3507045" : "Tracheal Deviation-Left", 
    "3507047" : "Tracheal Deviation-Right", 
    "3507049" : "Gunshot Wound-Unknown if Entry or Exit",
    "3507051" : "Crush Injury",
    "3507053" : "Swelling",
    "3507055" : "Contusion",
    "3507057" : "Deformity",
    "3507059" : "Tenderness"
};
var eExam334_08 = {
    "3508001" : "Abrasion", 
    "3508003" : "Avulsion", 
    "3508005" : "Accessory Muscles Used with Breathing", 
    "3508007" : "Bleeding Controlled", 
    "3508009" : "Bleeding Uncontrolled", 
    "3508011" : "Breath Sounds-Absent-Left", 
    "3508013" : "Breath Sounds-Absent-Right", 
    "3508015" : "Breath Sounds-Decreased Left", 
    "3508017" : "Breath Sounds-Decreased Right", 
    "3508019" : "Breath Sounds-Equal", 
    "3508021" : "Breath Sounds-Normal-Left", 
    "3508023" : "Breath Sounds-Normal-Right", 
    "3508025" : "Burn-Blistering", 
    "3508027" : "Burn-Charring", 
    "3508029" : "Burn-Redness", 
    "3508031" : "Burn-White/Waxy", 
    "3508033" : "Crush Injury", 
    "3508035" : "Deformity", 
    "3508037" : "Flail Segment-Left", 
    "3508039" : "Flail Segment-Right", 
    "3508041" : "Foreign Body", 
    "3508043" : "Gunshot Wound-Entry", 
    "3508045" : "Gunshot Wound-Exit", 
    "3508047" : "Increased Respiratory Effort", 
    "3508049" : "Implanted Device", 
    "3508051" : "Laceration", 
    "3508053" : "Normal", 
    "3508055" : "Not Done", 
    "3508057" : "Pain", 
    "3508059" : "Pain with Inspiration/expiration-Left", 
    "3508061" : "Pain with Inspiration/expiration-Right", 
    "3508063" : "Puncture/Stab Wound", 
    "3508065" : "Rales-Left", 
    "3508067" : "Rales-Right", 
    "3508069" : "Retraction", 
    "3508071" : "Rhonchi-Left", 
    "3508073" : "Rhonchi-Right", 
    "3508075" : "Rhonchi/Wheezing", 
    "3508077" : "Stridor-Left", 
    "3508079" : "Stridor-Right", 
    "3508081" : "Swelling/Bruising/Contusion with Pain", 
    "3508083" : "Swelling/Bruising/Contusion without Pain", 
    "3508085" : "Tenderness-Left", 
    "3508087" : "Tenderness-Right", 
    "3508089" : "Wheezing-Expiratory - Left", 
    "3508091" : "Wheezing-Expiratory - Right", 
    "3508093" : "Wheezing-Inspiratory - Left", 
    "3508095" : "Wheezing-Inspiratory - Right", 
    "3508097" : "Gunshot Wound-Unknown if Entry or Exit",
    "3508099" : "Swelling",
    "3508101" : "Contusion",
    "3508103" : "Tendernes"
};

var eExam334_09 = {
    "3509001" : "Heart Sounds Clicks", 
    "3509003" : "Heart Sounds Decreased", 
    "3509005" : "Murmur-Diastolic", 
    "3509007" : "Murmur-Systolic", 
    "3509009" : "Normal", 
    "3509011" : "Not Done", 
    "3509013" : "Rubs", 
    "3509015" : "S1", 
    "3509017" : "S2", 
    "3509019" : "S3", 
    "3509021" : "S4"
};

var eExam334_10 = {
    "3510001" : "Generalized", 
    "3510003" : "Left Lower Quadrant", 
    "3510005" : "Left Upper Quadrant", 
    "3510007" : "Periumbilical", 
    "3510009" : "Right Lower Quadrant", 
    "3510011" : "Right Upper Quadrant"
};

var eExam334_11 = {
    "3511001" : "Abrasion", 
    "3511003" : "Avulsion", 
    "3511005" : "Bleeding Controlled", 
    "3511007" : "Bleeding Uncontrolled", 
    "3511009" : "Bowel Sounds-Absent", 
    "3511011" : "Bowel Sounds-Present", 
    "3511013" : "Burn-Blistering", 
    "3511015" : "Burn-Charring", 
    "3511017" : "Burn-Redness", 
    "3511019" : "Burn-White/Waxy", 
    "3511021" : "Distention", 
    "3511023" : "Foreign Body", 
    "3511025" : "Guarding", 
    "3511027" : "Gunshot Wound-Entry", 
    "3511029" : "Gunshot Wound-Exit", 
    "3511031" : "Laceration", 
    "3511033" : "Mass/Lesion", 
    "3511035" : "Mass-Pulsating", 
    "3511037" : "Normal", 
    "3511039" : "Not Done", 
    "3511041" : "Pain", 
    "3511043" : "Pregnant-Palpable Uterus", 
    "3511045" : "Puncture/Stab Wound", 
    "3511047" : "Swelling/Bruising/Contusion with Pain", 
    "3511049" : "Swelling/Bruising/Contusion without Pain", 
    "3511051" : "Tenderness", 
    "3511053" : "Gunshot Wound-Unknown if Entry or Exit",
    "3511055" : "Crush Injury",
    "3511057" : "Swelling",
    "3511059" : "Contusion",
    "3511061" : "Deformity"
};"

var eExam334_12 = {
    "3512001" : "Abrasion", 
    "3512003" : "Avulsion", 
    "3512005" : "Bleeding Controlled", 
    "3512007" : "Bleeding Uncontrolled", 
    "3512009" : "Bleeding-Rectal", 
    "3512011" : "Bleeding-Urethral", 
    "3512013" : "Bleeding-Vaginal", 
    "3512015" : "Burn-Blistering", 
    "3512017" : "Burn-Charring", 
    "3512019" : "Burn-Redness", 
    "3512021" : "Burn-White/Waxy", 
    "3512023" : "Deformity", 
    "3512025" : "Foreign Body", 
    "3512027" : "Genital Injury", 
    "3512029" : "Gunshot Wound-Entry", 
    "3512031" : "Gunshot Wound-Exit", 
    "3512033" : "Laceration", 
    "3512035" : "Mass/Lesion", 
    "3512037" : "Normal", 
    "3512039" : "Not Done", 
    "3512041" : "Pain", 
    "3512043" : "Pelvic Fracture", 
    "3512045" : "Pelvic Instability", 
    "3512047" : "Penile Priapism/Erection", 
    "3512049" : "Pregnant-Crowning", 
    "3512051" : "Puncture/Stab Wound", 
    "3512053" : "Swelling/Bruising/Contusion with Pain", 
    "3512055" : "Swelling/Bruising/Contusion without Pain", 
    "3512057" : "Tenderness", 
    "3512059" : "Gunshot Wound-Unknown if Entry or Exit", 
    "3512061" : "Crush Injury", 
    "3512063" : "Swelling", 
    "3512065" : "Contusion"
};

var eExam334_13 = {
    "3513001" : "Back-General", 
    "3513003" : "Cervical-Left", 
    "3513005" : "Cervical-Midline", 
    "3513007" : "Cervical-Right", 
    "3513009" : "Lumbar-Left", 
    "3513011" : "Lumbar-Midline", 
    "3513013" : "Lumbar-Right", 
    "3513015" : "Thoracic-Left", 
    "3513017" : "Thoracic-Midline", 
    "3513019" : "Thoracic-Right", 
    "3513021" : "Sacral-Left", 
    "3513023" : "Sacral-Midline", 
    "3513025" : "Sacral-Right"
};

var eExam334_14 = {

    "3514001" : "Abrasion", 
    "3514003" : "Avulsion", 
    "3514005" : "Bleeding Controlled", 
    "3514007" : "Bleeding Uncontrolled", 
    "3514009" : "Burn-Blistering", 
    "3514011" : "Burn-Charring", 
    "3514013" : "Burn-Redness", 
    "3514015" : "Burn-White/Waxy", 
    "3514017" : "Deformity", 
    "3514019" : "Foreign Body", 
    "3514021" : "Gunshot Wound-Entry", 
    "3514023" : "Gunshot Wound-Exit", 
    "3514025" : "Laceration", 
    "3514027" : "Normal", 
    "3514029" : "Not Done", 
    "3514031" : "Pain", 
    "3514033" : "Pain with Range of Motion", 
    "3514035" : "Puncture/Stab Wound", 
    "3514037" : "Swelling/Bruising/Contusion with Pain", 
    "3514039" : "Swelling/Bruising/Contusion without Pain", 
    "3514041" : "Tenderness Costovertebral Angle", 
    "3514043" : "Tenderness Midline Spinous Process", 
    "3514045" : "Tenderness Paraspinous", 
    "3514047" : "Gunshot Wound-Unknown if Entry or Exit",
    "3514049" : "Crush Injury",
    "3514051" : "Swelling",
    "3514053" : "Contusion",
    "3514055" : "Tenderness"
};

var eExam334_15 = {
    "3515001":"Ankle-Left",
    "3515003" : "Ankle-Right", 
    "3515005" : "Arm-Upper-Left", 
    "3515007" : "Arm-Upper-Right", 
    "3515009" : "Elbow-Left", 
    "3515011" : "Elbow-Right", 
    "3515013" : "Finger-2nd (Index)-Left", 
    "3515015" : "Finger-2nd (Index)-Right", 
    "3515017" : "Finger-3rd (Middle)-Left", 
    "3515019" : "Finger-3rd (Middle)-Right", 
    "3515021" : "Finger-4th (Ring)-Left", 
    "3515023" : "Finger-4th (Ring)-Right", 
    "3515025" : "Finger-5th (Smallest)-Left", 
    "3515027" : "Finger-5th (Smallest)-Right", 
    "3515029" : "Foot-Dorsal-Left", 
    "3515031" : "Foot-Dorsal-Right", 
    "3515033" : "Foot-Plantar-Left", 
    "3515035" : "Foot-Plantar-Right", 
    "3515037" : "Forearm-Left", 
    "3515039" : "Forearm-Right", 
    "3515041" : "Hand-Dorsal-Left", 
    "3515043" : "Hand-Dorsal-Right", 
    "3515045" : "Hand-Palm-Left", 
    "3515047" : "Hand-Palm-Right", 
    "3515049" : "Hip-Left", 
    "3515051" : "Hip-Right", 
    "3515053" : "Knee-Left", 
    "3515055" : "Knee-Right", 
    "3515057" : "Leg-Lower-Left", 
    "3515059" : "Leg-Lower-Right", 
    "3515061" : "Leg-Upper-Left", 
    "3515063" : "Leg-Upper-Right", 
    "3515065" : "Shoulder-Left", 
    "3515067" : "Shoulder-Right", 
    "3515069" : "Thumb-Left", 
    "3515071" : "Thumb-Right", 
    "3515073" : "Toe-1st (Big)-Left", 
    "3515075" : "Toe-1st (Big)-Right", 
    "3515077" : "Toe-2nd-Left", 
    "3515079" : "Toe-2nd-Right", 
    "3515081" : "Toe-3rd-Left", 
    "3515083" : "Toe-3rd-Right", 
    "3515085" : "Toe-4th-Left", 
    "3515087" : "Toe-4th-Right", 
    "3515089" : "Toe-5th (Smallest)-Left", 
    "3515091" : "Toe-5th (Smallest)-Right", 
    "3515093" : "Wrist-Left", 
    "3515095" : "Wrist-Right"
};

var eExam334_16 = {
    "3516001":"Abrasion",
    "3516003" : "Amputation-Acute", 
    "3516005" : "Amputation-Previous", 
    "3516007" : "Avulsion", 
    "3516009" : "Bleeding Controlled", 
    "3516011" : "Bleeding Uncontrolled", 
    "3516013" : "Burn-Blistering", 
    "3516015" : "Burn-Charring", 
    "3516017" : "Burn-Redness", 
    "3516019" : "Burn-White/Waxy", 
    "3516021" : "Clubbing (of fingers)", 
    "3516023" : "Crush Injury", 
    "3516025" : "Deformity", 
    "3516027" : "Dislocation", 
    "3516029" : "Edema", 
    "3516031" : "Foreign Body", 
    "3516033" : "Fracture-Closed", 
    "3516035" : "Fracture-Open", 
    "3516037" : "Gunshot Wound-Entry", 
    "3516039" : "Gunshot Wound-Exit", 
    "3516041" : "Laceration", 
    "3516043" : "Motor Function-Abnormal/Weakness", 
    "3516045" : "Motor Function-Absent", 
    "3516047" : "Motor Function-Normal", 
    "3516049" : "Normal", 
    "3516051" : "Not Done", 
    "3516053" : "Pain", 
    "3516055" : "Paralysis", 
    "3516057" : "Pulse-Abnormal", 
    "3516059" : "Pulse-Absent", 
    "3516061" : "Pulse-Normal", 
    "3516063" : "Puncture/Stab Wound", 
    "3516065" : "Sensation-Abnormal", 
    "3516067" : "Sensation-Absent", 
    "3516069" : "Sensation-Normal", 
    "3516071" : "Swelling/Bruising/Contusion with Pain", 
    "3516073" : "Swelling/Bruising/Contusion without Pain", 
    "3516075" : "Tenderness", 
    "3516077" : "Gunshot Wound-Unknown if Entry or Exit","
    "3516079" : "Swelling","
    "3516081" : "Contusion"
};
 

var eExam334_17 = {
    "3517001":"Bilateral",
    "3517003" : "Left", 
    "3517005" : "Right", 
};

var eExam334_18 = {
    "3518001" : "1-mm", 
    "3518003" : "2-mm", 
    "3518005" : "3-mm", 
    "3518007" : "4-mm", 
    "3518009" : "5-mm", 
    "3518011" : "6-mm", 
    "3518013" : "7-mm", 
    "3518015" : "8-mm or >", 
    "3518017" : "Blind", 
    "3518019" : "Cataract Present", 
    "3518021" : "Clouded", 
    "3518023" : "Deformity", 
    "3518025" : "Dysconjugate Gaze", 
    "3518027" : "Foreign Body", 
    "3518029" : "Glaucoma Present", 
    "3518031" : "Hyphema", 
    "3518033" : "Jaundiced Sclera", 
    "3518035" : "Missing", 
    "3518037" : "Non-Reactive", 
    "3518039" : "Not Done", 
    "3518041" : "Non-Reactive Prosthetic", 
    "3518043" : "Nystagmus Noted", 
    "3518045" : "Open Globe", 
    "3518047" : "PERRL", 
    "3518049" : "Pupil-Irregular/Teardrop", 
    "3518051" : "Reactive", 
    "3518053" : "Sluggish", 
    "3518055" : "Swelling",
    "3518057" : "Contusion",
    "3518059" : "Puncture/Stab Wound"
};

var eExam334_19 = {
    "3519001" : "Combative", 
    "3519003" : "Confused", 
    "3519005" : "Hallucinations", 
    "3519007" : "Normal Baseline for Patient", 
    "3519009" : "Not Done", 
    "3519011" : "Oriented-Person", 
    "3519013" : "Oriented-Place", 
    "3519015" : "Oriented-Event", 
    "3519017" : "Oriented-Time", 
    "3519019" : "Pharmacologically Sedated/Paralyzed", 
    "3519021" : "Unresponsive"
};

var eExam334_20 = {
    "3520001" : "Aphagia", 
    "3520003" : "Aphasia", 
    "3520005" : "Cerebellar Function-Abnormal", 
    "3520007" : "Cerebellar Function-Normal", 
    "3520009" : "Decerebrate Posturing", 
    "3520011" : "Decorticate Posturing", 
    "3520013" : "Gait-Abnormal", 
    "3520015" : "Gait-Normal", 
    "3520017" : "Hemiplegia-Left", 
    "3520019" : "Hemiplegia-Right", 
    "3520021" : "Normal Baseline for Patient", 
    "3520023" : "Not Done", 
    "3520025" : "Seizures", 
    "3520027" : "Speech Normal", 
    "3520029" : "Speech Slurring", 
    "3520031" : "Strength-Asymmetric", 
    "3520033" : "Strength-Normal", 
    "3520035" : "Strength-Symmetric", 
    "3520037" : "Tremors", 
    "3520039" : "Weakness-Facial Droop-Left", 
    "3520041" : "Weakness-Facial Droop-Right", 
    "3520043" : "Weakness-Left Sided", 
    "3520045" : "Weakness-Right Sided",
    "3520047" : "	Reported Stroke Symptoms Resolved Prior to EMS Arrival",
    "3520049" : "Reported Stroke Symptoms Resolved in EMS Presence"
};

function setCodeText(NEMSISElementNumber, valueArray) {
    var _return = [];
    switch (NEMSISElementNumber) {
        case "eExam.02":
            if (eExam334_02[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eExam334_02[valueArray];
            }
            break;
        case "eExam.04":
            if (eExam334_04[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eExam334_04[valueArray];
            }
            break;

        case "eExam.05":
            if (eExam334_05[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eExam334_05[valueArray];
            }
            break;

        case "eExam.06":
            if (eExam334_06[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eExam334_06[valueArray];
            }
            break;

        case "eExam.07":
            if (eExam334_07[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eExam334_07[valueArray];
            }
            break;

        case "eExam.08":
            if (eExam334_08[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eExam334_08[valueArray];
            }
            break;

        case "eExam.09":
            if (eExam334_09[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eExam334_09[valueArray];
            }
            break;

        case "eExam.10":
            if (eExam334_10[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eExam334_10[valueArray];
            }
            break;

        case "eExam.11":
            if (eExam334_11[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eExam334_11[valueArray];
            }
            break;

        case "eExam.12":
            if (eExam334_12[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eExam334_12[valueArray];
            }
            break;

        case "eExam.13":
            if (eExam334_13[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eExam334_13[valueArray];
            }
            break;

                
        case "eExam.14":
            if (eExam334_14[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eExam334_14[valueArray];
            }
            break;

        case "eExam.15":
            if (eExam334_15[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eExam334_15[valueArray];
            }
            break;

        case "eExam.16":
            if (eExam334_16[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eExam334_16[valueArray];
            }
            break;

        case "eExam.17":
            if (eExam334_17[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eExam334_17[valueArray];
            }
            break;

        case "eExam.18":
            if (eExam334_18[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eExam334_18[valueArray];
            }
            break;

        case "eExam.19":
            if (eExam334_19[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eExam334_19[valueArray];
            }
            break;

        case "eExam.20":
            if (eExam334_20[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eExam334_20[valueArray];
            }
            break;

        default:
            _return = " UNDEFINED";
    }
    return _return;

};