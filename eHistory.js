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
var PN_NONE_REPORTED = " xsi:nil=\"true\" PN=\"8801015\"/>";
var PN_NONE_REFUSED = " xsi:nil=\"true\" PN=\"8801019\"/>";
var PN_NONE_UNRESPONSIVE = " xsi:nil=\"true\" PN=\"8801021\"/>";
var PN_UNABLE_TO_COMPLETE_IS_NILLABLE = " xsi:nil=\"true\" PN=\"8801023\"/>";
var PN_FINDING_NOT_PRESENT_IS_NILLABLE = " xsi:nil=\"true\" PN=\"8801005\"/>";
var E12 = new Object;
var eHistory = new Object;
var PractitionerGroupGroup = new Object;
var PractitionerGroupGroupArray = new Array;
var ImmunizationsGroup = new Object;
var ImmunizationsGroupArray = new Array;
var CurrentMedsGroup = new Object;
var CurrentMedsGroupArray = new Array;


var getSectionIndex = function (businessObject, sectionName)
{
    //console.log(businessObject)
    var _retValue = [];
    for (var d = 0; d < businessObject.sections.length; d++)
    {
        if (businessObject.sections[d].attributes.name == sectionName)
        {
            _retValue.push(d);
        }
    }
    if (_retValue.length == 0)
    {
        _retValue.push(-1);
    }
    return _retValue;
}

var seteHistory = function (businessObject) 
{
  
    
    _retArray.push("<eHistory>" + '\n');
    OLAPArray.push("<eHistory>" + '\n');
    ////////eHistory.01
    _val = getValue(businessObject.elements, "eHistory.01");
    if (_val == null) 
        if (isRequiredStateElement("eHistory.01") == true)         
        {
            v2Array.push({ section: "E12", element: "E12_01", val: v2NOT_RECORDED });
            eHistory["eHistory.01"] = v3NOT_RECORDED;
            eHistory["BarrierstoPatientCare"] = "NOT RECORDED";
        }
        else 
        {
            v2Array.push({ section: "E16", element: "E16_01", val: v2NOT_REPORTING });
            eExam["eExam.01"] = v3NOT_REPORTING;
            eExam["BarrierstoPatientCare"] = "NOT REPORTING";
        }
    else 
    {
        var arr1 = [];
        var arr2 = [];
        var arr3 = [];
        for (var i = 0; i < _val.length; i++) 
        {
            arr1.push(_val[i]);
            arr2.push(setV2("eHistory.01", _val[i]));
            arr3.push(setCodeText("eHistory.01", _val[i]));
        };
        isNotApplicableFlag = false;          

        v2Array.push({ section: "E12", element: "E12_01", val: arr2.slice(0) });
        eExam["BarrierstoPatientCare"] = arr3.slice(0);
        eHistory["eHistory.01"] = arr1.slice(0);
    };
    
    ////////////////////////////////
    	
    _sectionIndex = getSectionIndex(businessObject.sections[xx].attributes, "eHistory.PractitionerGroup");      
    for (var x = 0; x <_sectionIndex.length; x++)
    {     	
          		
        /////////eHistory.10
        _val = getValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "eHistory.02");
        if (_val == null) 
        {
            v2Array.push({ section: "E12", element: "E12_01", val: null });
            PractitionerGroup["eHistory.02"] = null;
            PractitionerGroup["LastName"] = null;
        }
        else 
        {
            v2Array.push({ section: "E12", element: "E12_01", val: _val[0] });
            PractitionerGroup["eHistory.10"] = _val[0];
            PractitionerGroup["LastName"] = _val[0];
        };
    
        /////////eHistory.03
        _val = getValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "eHistory.03");
        if (_val == null) 
        {            
            v2Array.push({ section: "E12", element: "E12_04", val: null });
            PractitionerGroup["eHistory.03"] = null;
            PractitionerGroup["FirstName] = _val[0];"] = null;
        }
        else 
        {
            v2Array.push({ section: "E12", element: "E12_04", val: _val[0] });
            PractitionerGroup["eHistory.03"] = _val[0];
            PractitionerGroup["FirstName"]= _val[0];
        };
    

        /////////eHistory.04
        _val = getValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "eHistory.04");
        if (_val == null) 
        {
            v2Array.push({ section: "E12", element: "E12_05", val: null });
            PractitionerGroup["MiddleName"] = null;
            PractitionerGroup["eHistory.04"] = null;
        }
        else 
        {
            v2Array.push({ section: "E12", element: "E12_05", val: _val[0] });
            PractitionerGroup["eHistory.04"] = _val[0];
            PractitionerGroup["MiddleName"] = _val[0];
        };
    };
    /////////////


    ////////eHistory.05
    _val = getValue(businessObject.elements, "eHistory.05");
    if (_val == null) 
        if (isRequiredStateElement("eHistory.05") == true) 
        {
            v2Array.push({ section: "E12", element: "E12_07", val: v2NOT_RECORDED });
            eHistory["eHistory.05"] =v3NOT_RECORDED;
            eHistory["AdvanceDirectives"] =v3NOT_RECORDED;
        }
        else 
        {
            v2Array.push({ section: "E12", element: "E12_07", val: v2NOT_REPORTING});
            eHistory["eHistory.05"] =v3NOT_REPORTING;
            eHistory["AdvanceDirectives"] ="NOT REPORTING";
        }
    else 
    {
        var arr1 = [];            
        var arr2 = [];
        var arr3 = [];
        for (var i = 0; i < _val.length; i++) 
        {
            arr1.push(_val[i]);
            arr2.push(setV2("eHistory.05", _val[i]));
            arr3.push(setCodeText("eHistory.05", _val[i]));
        };
        eHistory["eHistory.05"] = arr1.slice(0);
        v2Array.push({ section: "E12", element: "E12_07", val: arr2.slice(0)});
        eHistory["AdvanceDirectives"] =arr3.slice(0);
    };

    ////////eHistory.06
    _val = getValue(businessObject.elements, "eHistory.06");
    if (_val == null) 
        if (isRequiredStateElement("eHistory.06") == true) 
        {

            eHistory["eHistory.06"] =v3NOT_RECORDED;
            eHistory["MedicationAllergies"] =v3NOT_RECORDED;
            v2Array.push({ section: "E12", element: "E12_08", val: v2NOT_RECORDED });
        }
        else 
        {
            eHistory["eHistory.06"] =v3NOT_REPORTING;
            eHistory["MedicationAllergies"] =v3NOT_REPORTING;
            v2Array.push({ section: "E12", element: "E12_08", val: v2NOT_REPORTING });
        }
    else 
    {
        var arr1 = [];            
        var arr2 = [];
        var arr3 = [];
        for (var i = 0; i < _val.length; i++) 
        {
            arr1.push(_val[i]);
            arr2.push(setV2("eHistory.06", _val[i]));
            arr3.push(setCodeText("eHistory.06", _val[i]));
        };
        isNotApplicableFlag = false;         
        eHistory["eHistory.06"] = arr1.slice(0);
        eHistory["MedicationAllergies"] =arr3.slice(0);
        v2Array.push({ section: "E12", element: "E12_08", val: arr2.slice(0) });

    };
    
    
    ////////eHistory.07
    _val = getValue(businessObject.elements, "eHistory.07");
    if (_val == null) 
    {
        eHistory["eHistory.07"] =null;
        eHistory["EnvironmentalFoodAllergies"] =null;
        v2Array.push({ section: "E12", element: "E12_09", val: null });
    }
    else 
    {
        for (var i = 0; i < _val.length; i++) 
        {
            arr1.push(_val[i]);
            arr2.push(setV2("eHistory.07", _val[i]));
            arr3.push(setCodeText("eHistory.07", _val[i]));
            isNotApplicableFlag = false;     
        }
        eHistory["EnvironmentalFoodAllergies"] == arr2.slice(0);
        eHistory["eHistory.07"] = arr1.slice(0);
        v2Array.push({ section: "E12", element: "E12_09", val: arr3.slice(0)});
    };
    
    ////////eHistory.08
    _val = getValue(businessObject.elements, "eHistory.08");
    if (_val == null) 
        if (isRequiredStateElement("eHistory.08") == true) 
        {
            eHistory["eHistory.08"] =v3NOT_RECORDED;
            eHistory["MedicalSurgicalHistory"] ="NOT RECORDED";
            v2Array.push({ section: "E12", element: "E12_10", val: v2NOT_RECORDED});            
        }
        else 
        {
            eHistory["eHistory.08"] =v3NOT_REPORTING;
            eHistory["MedicalSurgicalHistory"] ="NOT REPORTING";
            v2Array.push({ section: "E12", element: "E12_10", val: v2NOT_REPORTING});
        }
    else 
    {
       
        var arr1 = [];
        var arr2 = [];
        arr1 = _val;
        arr2 = setV2("eHistory.08", _val);
        for (var i = 0; i < _val.length; i++) 
        {
            _retArray.push('\t' + "<eHistory.08>" + _val[i] + "</eHistory.08>" + '\n');
        }
        eHistory["eHistory.08"] = arr1.slice(0);
        E12.E12_10 = arr2.slice(0);
    };
      

    alert("Business Rules for History/History Obtained From")
    ////////eHistory.09
    _val = getValue(businessObject.elements, "eHistory.09");
    if (_val == null) 
        {
        eHistory["eHistory.09"] =null;
        eHistory["MedicalHistoryObtainedFrom"] =null;
        v2Array.push({ section: "E12", element: "E12_11", val: null});            
    }        
    else 
    {
        var arr1 = [];            
        var arr2 = [];
        var arr3 = [];
        for (var i = 0; i < _val.length; i++) 
        {
            arr1.push(_val[i]);
            arr2.push(setV2("eHistory.09", _val[i]));
            arr3.push(setCodeText("eHistory.09", _val[i]));
        };
        isNotApplicableFlag = false;         
        eHistory["MedicalHistoryObtainedFrom"] =arr3.slice(0);
        v2Array.push({ section: "E12", element: "E12_11", val: arr2.slice(0)});                    
        eHistory["eHistory.09"] = arr1.slice(0);
    };
      
    
    ////////////////////////////////
    	
    _sectionIndex = getSectionIndex(businessObject.sections[xx].attributes, "eHistory.ImmunizationsGroup");      
    for (var x = 0; x <_sectionIndex.length; x++)
    {     	
       
        /////////eHistory.10
        _val = getValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "eHistory.10");
        if (_val == null) 
        {
            eHistory["eHistory.10"] =null;
            eHistory["TypeofImmunization"] =null;
            v2Array.push({ section: "E12", element: "E12_12", val: null});               
        }
        else 
        {
            v2Array.push({ section: "E12", element: "E12_12", val: setV2("eHistory.10", _val[0])});
            ImmunizationsGroup["eHistory.10"] = _val[0];
            eHistory["TypeofImmunization"] =_val[0];
        };
    
        /////////eHistory.11
        _val = getValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "eHistory.11");
        if (_val == null) 
        {
            eHistory["eHistory.11"] =null;
            eHistory["eHistory.11"] =ImmunizationDate;
            v2Array.push({ section: "E12", element: "E12_13", val: null});   
        }
        else 
        {
            v2Array.push({ section: "E12", element: "E12_13", val: _val[0]});   
            ImmunizationsGroup["eHistory.11"] = _val[0];
            ImmunizationsGroup["ImmunizationDate"] = _val[0];
        };

    };
    /////////////////////

    ////////////////////////////////
    	
    _sectionIndex = getSectionIndex(businessObject.sections[xx].attributes, "eHistory.CurrentMedsGroup");      
    for (var x = 0; x <_sectionIndex.length; x++)
    {     	
        _retArray.push('\t\t' + "<eHistory.CurrentMedsGroup>" + '\n');
        OLAPArray.push('\t\t' + "</eHistory.CurrentMedsGroup>" + '\n');
        ////////eHistory.12
        _val = getValue(businessObject.elements, "eHistory.12");
        if (_val == null) 
        {
            PNValue = getPertinentNegative("eExam.02")
            if(PNValue != null)
            {
                if(PNValue =="8801015")
                {
                    CurrentMedsGroup["CurrentMedications"] = "NONE REPORTED";
                    CurrentMedsGroup["eHistory.12"] = PN_NONE_REPORTED;
                    v2Array.push({ section: "E16", element: "E16_02", val: v2NOT_KNOWN});       
                };
                if(PNValue =="8801019")
                {
                    CurrentMedsGroup["CurrentMedications"] = "REFUSED";
                    CurrentMedsGroup["eHistory.12"] = PN_REFUSED_IS_NILLABLE;
                    v2Array.push({ section: "E16", element: "E16_02", val: v2NOT_KNOWN});       
                };
                if(PNValue =="8801021")
                {
                    CurrentMedsGroup["CurrentMedications"] = "UNRESPONSIVE";
                    CurrentMedsGroup["eHistory.12"] = PN_NONE_UNRESPONSIVE;
                    v2Array.push({ section: "E16", element: "E16_02", val: v2NOT_KNOWN});       
                }

                else if(PNValue =="8801023")
                {
                    CurrentMedsGroup["CurrentMedications"] = "UNABLE TO COMPLETE";
                    CurrentMedsGroup["eHistory.12"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                    v2Array.push({ section: "E16", element: "E16_02", val: v2NOT_KNOWN});       
                }
            }
            else
            {
                if (isRequiredStateElement("eHistory.12") == true) 
                {
                    CurrentMedsGroup["eHistory.12"] =v3NOT_RECORDED;
                    CurrentMedsGroup["CurrentMedications"] ="NOT RECORDED";
                    v2Array.push({ section: "E14", element: "E12_13", val: null});   
                }
                else 
                {
                    CurrentMedsGroup["CurrentMedications"] ="NOT REPORTING";
                    CurrentMedsGroup["eHistory.12"] =v3NOT_REPORTING;
                    v2Array.push({ section: "E12", element: "E12_14", val: null});   
                }
            }
        }
        else 
        {
            v2Array.push({ section: "E12", element: "E12_11", val: setV2("eHistory.12", _val[0])});
            CurrentMedsGroup["eHistory.12"] = _val[0];
            CurrentMedsGroup["CurrentMedications"] =_val[0];
            OLAPArray.push('\t\t' + "<CurrentMedications>" + _val+ "</CurrentMedications>" + '\n');
        };
    
        ////////eHistory.13
        _val = getValue(businessObject.elements, "eHistory.13");
        if (_val == null) 
        {
            CurrentMedsGroup["eHistory.13"] =null;
            CurrentMedsGroup["CurrentMedicationDose"] =null;
            v2Array.push({ section: "E12", element: "E12_15", val: null});   
        }
        else 
        {
            CurrentMedsGroup["CurrentMedicationDose"] = _val[0];
            CurrentMedsGroup["eHistory.13"] = _val;
            v2Array.push({ section: "E12", element: "E12_15", val: _val[0]});  
        };
    		
        ////////eHistory.14
        _val = getValue(businessObject.elements, "eHistory.14");
        if (_val == null) 
        {
            CurrentMedsGroup["eHistory.14"] =null;
            CurrentMedsGroup["CurrentMedicationDosageUnit"] =null;
            v2Array.push({ section: "E12", element: "E12_16", val: null});   
            }
           
        else 
        {
            CurrentMedsGroup["eHistory.14"] = _val[0];
            CurrentMedsGroup["CurrentMedicationDosageUnit"] =setCodeText("eHistory.14",_val[0]);
            v2Array.push({ section: "E12", element: "E12_17", val: setV2("eHistory.14", _val[0])});

        };
    		
        ////////eHistory.15
       _val = getValue(businessObject.elements, "eHistory.15");
       if (_val == null) 
       {
          
           CurrentMedsGroup["eHistory.15"] =v3NOT_RECORDED;
           CurrentMedsGroup["CurrentMedicationAdministrationRoute"] ="NOT RECORDED";
           _retArray.push('\t' + "<eHistory.15>" + null + "</eHistory.15>" + '\n');
       }
       else 
       {

           CurrentMedsGroup["eHistory.15"] = _val[0];
           CurrentMedsGroup["CurrentMedicationAdministrationRoute"] =setCodeText("eHistory.15",_val[0]);            
           v2Array.push({ section: "E12", element: "E12_17", val: setV2("eHistory.15", _val)});
       };     
    };


    ////////eHistory.16
    _val = getValue(businessObject.elements, "eHistory.16");
    if (_val == null) 
    {
        eHistory["eHistory.16"] =null;
        eHistory["PresenceofEmergencyInformationForm"] =null;
        v2Array.push({ section: "E12", element: "E12_18", val: null});          
    }
    else 
    {
        eHistory["eHistory.16"] = _val[0];
        eHistory["PresenceofEmergencyInformationForm"] =setCodeText("eHistory.16",_val[0]);   
        v2Array.push({ section: "E12", element: "E12_18", val: setV2("eHistory.16",_val[0])});          
    };

    
    ////////eHistory.17
    _val = getValue(businessObject.elements, "eHistory.17");
    if (_val == null) 
    {
        PNValue = getPertinentNegative("eHistory.17")        
        if(PNValue != null)
        {
            if(PNValue =="8801015")
            {
                CurrentMedsGroup["AlcoholDrugUseIndicators"] = "NONE REPORTED";
                CurrentMedsGroup["eHistory.17"] = PN_NONE_REPORTED;
                v2Array.push({ section: "E16", element: "E16_19", val: v2NOT_KNOWN});       
            };
            if(PNValue =="8801019")
            {
                eHistory["AlcoholDrugUseIndicators"] = "REFUSED";
                eHistory["eHistory.17"] = PN_REFUSED_IS_NILLABLE;
                v2Array.push({ section: "E16", element: "E16_19", val: v2NOT_KNOWN});       
            }          
            else if(PNValue =="8801023")
            {
                eHistory["AlcoholDrugUseIndicators"] = "UNABLE TO COMPLETE";
                eHistory["eHistory.17"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                v2Array.push({ section: "E16", element: "E16_19", val: v2NOT_KNOWN});       
            }
        }
        else 
        {
            if (isRequiredStateElement("eHistory.17") == true) 
            {
                eHistory["eHistory.17"] =v3NOT_RECORDED;
                eHistory["AlcoholDrugUseIndicators"] ="NOT RECORDED";
                v2Array.push({ section: "E12", element: "E12_18", val: v2NOT_RECORDED});          
            }
            else 
            {
                eHistory["eHistory.17"] =v3NOT_REPORTING;
                eHistory["AlcoholDrugUseIndicators"] ="NOT REPORTING";
                v2Array.push({ section: "E12", element: "E12_18", val: v2NOT_REPORTING});          
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
            arr2.push(setV2("eHistory.17", _val[i]));
            arr3.push(setCodeText("eHistory.17", _val[i]));        
            isNotApplicableFlag = false;         
        };
        eHistory["eHistory.17"] = arr1.slice(0);        
        eHistory["AlcoholDrugUseIndicators"] =arr2.slice(0);
        v2Array.push({ section: "E12", element: "E12_18", val: arr3.slice(0)});      
    };
        
    ////////eHistory.18
    _val = getValue(businessObject.elements, "eHistory.18");
    if (_val == null) 
    {
        PNValue = getPertinentNegative("eExam.02")
        if(PNValue != null)
        {      
            if(PNValue =="8801019")
            {
                eHistory["CurrentMedications"] = "REFUSED";
                eHistory["eHistory.12"] = PN_REFUSED_IS_NILLABLE;
                v2Array.push({ section: "E16", element: "E16_02", val: v2NOT_KNOWN});       
            }
         
            else if(PNValue =="8801023")
            {
                eHistory["CurrentMedications"] = "UNABLE TO COMPLETE";
                eHistory["eHistory.12"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                v2Array.push({ section: "E16", element: "E16_02", val: v2NOT_KNOWN});       
            }
        }
        eHistory["eHistory.17"] =null;
        eHistory["Pregnancy"] =null;
        v2Array.push({ section: "E12", element: "E12_20", val: null});          
    }
    else 
    {
        eHistory["eHistory.18"] = _val[0];
        eHistory["Pregnancy"] = setCodeText("eHistory.18", _val[0]);                
        v2Array.push({ section: "E12", element: "E12_20", val: setV2("eHistory.18",_val)});          
    };
    
    ////////eHistory.19
    _val = getValue(businessObject.elements, "eHistory.19");
    if (_val == null) 
    {
        eHistory["LastOralIntake"] =null;
        eHistory["eHistory.19"] =null;
    }
    else 
    {
        eHistory["LastOralIntake"] =_val[0];
        eHistory["eHistory.19"] = _val[0];
    };      
};

function setD2(NEMSISElementNumber, valueArray) {
    //    console.log(NEMSISElementNumber);
    var _retArray = [];
    //    console.log(valueArray);
    switch (NEMSISElementNumber) {
        case "eHistory.01":

            if (eHistory01[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eHistory01[valueArray[0]]);
            }
            break;
        case "eHistory.05":
            for (i = 0; i < valueArray.length; i++) {
                if (eHistory01[valueArray[i]] == undefined) {
                    _retArray.push(valueArray[i] + "UNDEFINED");
                }
                else {
                    _retArray.push(eHistory01[valueArray[i]]);
                }
            }
            break;
        case "eHistory.07":

            if (eHistory01[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eHistory01[valueArray[0]]);
            }
            break;
        default:
            _retArray.push(NEMSISElementNumber = " version 2 not found");
    }

    return _retArray;

};

var eHistory01 = {
    "3101001":"610",
"3101003":"2600",
"3101005":"2605",
"3101007":"2610",
"3101009":"2615",
"3101011":"2620",
"3101013":"2620",
"3101015":"2620",
"3101017":"2625",
"3101019":"2600",
"3101021":"2620",
"3101023":"2630",
"3101025":"2635",
"3101027":"2640",
"3101029":"2625"
};

var eHistory05 = {
    "3105001":"2660",
    "3105003":"2655",
    "3105005":"2670",
    "3105007":"2655",
    "3105009":"2650",
    "3105011":"2650"
};

var eHistory07 = {   
    "414285001":"2680",
    "300916003":"2685",
    "419199007":"2690",
    "307427009":"2675",    
    "106190000":"2695"
	        2700
};

var eHistory09 = {

    "3109001":"2705",
    "3109003":"2710",
    "3109005":"2715",
    "3109007":"2725"
}

var eHistory10 = {
    "9910001":"2730",
    "9910003":"",
    "9910005":"2735",
    "9910007":"2740",
    "9910009":"2745",
    "9910011":"2750",
    "9910013":"",
    "9910015":"",
    "9910017":"2755",
    "9910019":"2755",
    "9910021":"",
    "9910023":"",
    "9910025":"2760",
    "9910027":"",
    "9910029":"",
    "9910031":"2765",
    "9910033":"2765",
    "9910035":"",
    "9910037":"",
    "9910039":"",
    "9910041":"2770",
    "9910043":"2775",
    "9910045":"",
    "9910047":"",
    "9910049":"2780",
    "9910051":"2775"

};

var eHistory14 = {
    "3114001":"2785",
    "3114003":"2785",
    "3114005":"2855",
    "3114007":"2790",
    "3114009":"2795",
    "3114011":"2800",
    "3114013":"2805",
    "3114015":"2810",
    "3114017":"2815",
    "3114019":"2820",
    "3114021":"2825",
    "3114023":"2830",
    "3114025":"2830",
    "3114027":"2855",
    "3114029":"2835",
    "3114031":"2840",
    "3114033":"2840",
    "3114037":"2845",
    "3114039":"2850",
    "3114041":"2855",
    "3114043":"2860",
    "3114045":"2850",

};

var eHistory15 = {
    "9927001":"2975",
    "9927003":"2920",
    "9927005":"2865",
    "9927007":"2870",
    "9927009":"2875",
    "9927011":"2895",
    "9927013":"28980",
    "9927015":"2880",
    "9927019":"2890",
    "9927021":"-10",
    "9927023":"2895",
    "9927025":"2900",
    "9927027":"2910",
    "9927029":"2960",
    "9927031":"2935",
    "9927033":"2915",
    "9927035":"2920",
    "9927037":"2925",
    "9927039":"2930",
    "9927041":"2935",
    "9927043":"2940",
    "9927045":"2945",
    "9927047":"2950",
    "9927049":"2955",
    "9927051":"2960",
    "9927053":"2965",
    "9927055":"2970",
    "9927057":"2975",
    "9927059":"2980"
};

var eHistory16 = {
    "9923001":"0",
    "9923003":"1"
};

var eHistory17 = {
    "3117001":"3000",
    "3117003":"3000",
    "3117005":"2990",
    "3117007":"2995",
    "3117009":"2995",
    "3117011":"2985"
};

var eHistory18 = {
    "3118001":"0",
    "3118003":"-10",
    "3118005":"1",
    "3118007":"1",
    "3118009":"1",
    "3118011":"1"

}
