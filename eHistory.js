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
    var _retArray = [];
    if (businessObject == undefined) {
        _retArray = setNotApplicableAll();
        console.log(_retArray)
        for (var i = 0; i < _retArray.length ; i++) {
            XMLString = XMLString + _retArray[i];

        }
        console.log(XMLString)
        return _retArray;
    };    
    
    _retArray.push("<eHistory>" + '\n');
    OLAPArray.push("<eHistory>" + '\n');
    ////////eHistory.01
    _val = getValue(businessObject.elements, "eHistory.01");
    if (_val == null) 
    {
        v2Array.push({ section: "E12", element: "E12_01", val: v2NOT_RECORDED });
        _retArray.push('\t' + "<eHistory.01" + v3NOT_RECORDED + '\n');
        eHistory["eHistory.01"] = v3NOT_RECORDED;  
        OLAPArray.push('\t\t\t' + "<BarrierstoPatientCare>" + "NOT RECORDED" + "</BarrierstoPatientCare>" + '\n');
    }
    else 
    {
        var arr1 = [];
        var arr2 = [];
        arr1 = _val;
        arr2 = setV2("eHistory.01", _val);
        for (var i = 0; i < _val.length; i++) {
            _retArray.push('\t' + "<eHistory.01>" + _val[i] + "</eHistory.01>" + '\n');
            OLAPArray.push('\t\t\t' + "<BarrierstoPatientCare>" + setCodeText("eHistory.01", _val[i]) + "</BarrierstoPatientCare>" + '\n');
        }

        v2Array.push({ section: "E12", element: "E12_01", val: arr2.slice(0) });
        OLAPArray.push('\t\t\t' + "<BarrierstoPatientCare>" + "NOT RECORDED" + "</BarrierstoPatientCare>" + '\n');
        eHistory["eHistory.01"] = _val;
        _retArray.push('\t' + "<eHistory.01>" + _val + "</eHistory.01>" + '\n');
    };
    
    ////////////////////////////////
    	
    _sectionIndex = getSectionIndex(businessObject.sections[xx].attributes, "eHistory.PractitionerGroup");      
    for (var x = 0; x <_sectionIndex.length; x++)
    {     	
        _retArray.push('\t\t' + "<eHistory.PractitionerGroup>" + '\n');
        OLAPArray.push('\t\t' + "<eHistory.PractitionerGroup>" + '\n');
       		
        /////////eHistory.02
        _val = getValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "eHistory.02");
        if (_val == null) 
        {
            OLAPArray.push('\t\t\t' + "<PractitionerLastName>" + null + "</PractitionerLastName>" + '\n');
            v2Array.push({ section: "E12", element: "E12_06", val: null });
            PractitionerGroup["eHistory.02"] = null;
            _retArray.push('\t\t\t' + "<eHistory.02>" + null + "</eHistory.02>" + '\n');
        }
        else 
        {
            OLAPArray.push('\t\t\t' + "<PractitionerLastName>" + _val+ "</PractitionerLastName>" + '\n');
            v2Array.push({ section: "E12", element: "E12_06", val: _val });
            PractitionerGroup["eHistory.02"] = _val;
            _retArray.push('\t\t\t' + "<eHistory.02>" + _val + "</eHistory.02>" + '\n');
        };
    
        /////////eHistory.03
        _val = getValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "eHistory.03");
        if (_val == null) 
        {
            OLAPArray.push('\t\t\t' + "<PractitionerFirstName>" + null + "</PractitionerFirstName>" + '\n');
            v2Array.push({ section: "E12", element: "E12_04", val: null });
            PractitionerGroup["eHistory.03"] = null;
            _retArray.push('\t\t\t' + "<eHistory.03>" + null + "</eHistory.03>" + '\n');

        }
        else 
        {
            OLAPArray.push('\t\t\t' + "<PractitionerFirstName>" + null + "</PractitionerFirstName>" + '\n');
            v2Array.push({ section: "E12", element: "E12_04", val: _val });
            PractitionerGroup["eHistory.03"] = _val;
            _retArray.push('\t\t\t' + "<eHistory.03>" + _val + "</eHistory.03>" + '\n');
        };
    

        /////////eHistory.04
        _val = getValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "eHistory.04");
        if (_val == null) 
        {
            OLAPArray.push('\t\t\t' + "<PractitionerMiddleName>" + null + "</PractitionerMiddleName>" + '\n');
            v2Array.push({ section: "E12", element: "E12_05", val: null });
            PractitionerGroup["eHistory.04"] = null;
            _retArray.push('\t\t\t' + "<eHistory.04>" + null + "</eHistory.04>" + '\n');

        }
        else 
        {
            OLAPArray.push('\t\t\t' + "<PractitionerMiddleName>" + _val + "</PractitionerMiddleName>" + '\n');
            v2Array.push({ section: "E12", element: "E12_05", val: _val });
            PractitionerGroup["eHistory.04"] = _val;
            _retArray.push('\t\t\t' + "<eHistory.04>" + _val + "</eHistory.04>" + '\n');
        };
        _retArray.push('\t\t' + "</eHistory.PractitionerGroup>" + '\n');
        OLAPArray.push('\t\t' + "</eHistory.PractitionerGroup>" + '\n');
    };
    /////////////


    ////////eHistory.05
    _val = getValue(businessObject.elements, "eHistory.05");
    if (_val == null) 
        if (isRequiredStateElement("eHistory.05") == true) 
        {
            OLAPArray.push('\t\t' + "<AdvanceDirectives>" + "NOT RECORDED" + "</AdvanceDirectives>" + '\n');
            v2Array.push({ section: "E12", element: "E12_07", val: v2NOT_RECORDED });
            _retArray.push('\t\t' + "<eHistory.05>" + NIL_V3NOT_RECORDED + '\n');
            eHistory["eHistory.05"] =v3NOT_RECORDED;
        }
        else 
        {
            OLAPArray.push('\t\t' + "<AdvanceDirectives>" + "NOT REPORTING" + "</AdvanceDirectives>" + '\n');
            v2Array.push({ section: "E12", element: "E12_07", val: v2NOT_REPORTING});
            _retArray.push('\t\t' + "<eHistory.05>" + NIL_V3NOT_REPORTING + '\n');
            eHistory["eHistory.05"] =v3NOT_REPORTING;
        }
    else 
    {
        var arr1 = [];
        var arr2 = [];
        arr1 = _val;
        arr2 = setV2("eHistory.05", _val);
        for (var i = 0; i < _val.length; i++) 
        {
            _retArray.push('\t' + "<eHistory.05>" + _val[i] + "</eHistory.05>" + '\n');
            OLAPArray.push('\t\t' + "<AdvanceDirectives>" + setCodeText("eHistory.05", _val[i]) + "</AdvanceDirectives>" + '\n');
            v2Array.push({ section: "E12", element: "E12_07", val: setV2("eHistory.05", _val[i])});
        }
        eHistory["eHistory.05"] = arr1.slice(0);
    };

    ////////eHistory.06
    _val = getValue(businessObject.elements, "eHistory.06");
    if (_val == null) 
        if (isRequiredStateElement("eHistory.06") == true) 
        {

            OLAPArray.push('\t\t' + "<MedicationAllergies>" + "NOT RECORDED" + "</MedicationAllergies>" + '\n');
            _retArray.push('\t\t' + "<eHistory.06>" + NIL_V3NOT_RECORDED + '\n');
            eHistory["eHistory.06"] =v3NOT_RECORDED;
            v2Array.push({ section: "E12", element: "E12_08", val: v2NOT_RECORDED });
        }
        else 
        {
            OLAPArray.push('\t\t' + "<MedicationAllergies>" + "NOT REPORTING" + "</MedicationAllergies>" + '\n');
            _retArray.push('\t\t' + "<eHistory.06>" + NIL_V3NOT_REPORTING + '\n');
            eHistory["eHistory.06"] =v3NOT_REPORTING;
            v2Array.push({ section: "E12", element: "E12_08", val: v2NOT_REPORTING });
        }
    else 
    {
        var arr1 = [];
        var arr2 = [];
        arr1 = _val;
        arr2 = setV2("eHistory.06", _val);
        for (var i = 0; i < _val.length; i++) 
        {
            _retArray.push('\t' + "<eHistory.06>" + _val[i] + "</eHistory.06>" + '\n');
            OLAPArray.push('\t\t' + "<MedicationAllergies>" + setCodeText("eHistory.06", _val[i]) + "</MedicationAllergies>" + '\n');
            v2Array.push({ section: "E12", element: "E12_08", val: setV2("eHistory.06", _val[i])});
        }
        eHistory["eHistory.06"] = arr1.slice(0);
    };
    
    
    ////////eHistory.07
    _val = getValue(businessObject.elements, "eHistory.07");
    if (_val == null) 
    {
        OLAPArray.push('\t\t' + "<EnvironmentalFoodAllergies>" + null + "</EnvironmentalFoodAllergies>" + '\n');
        _retArray.push('\t' + "<eHistory.07>" + null + "</eHistory.07>" + '\n');
        eHistory["eHistory.07"] =null;
        v2Array.push({ section: "E12", element: "E12_09", val: null });
    }
    else 
    {
        var arr1 = [];
        var arr2 = [];
        arr1 = _val;
        arr2 = setV2("eHistory.07", _val);
        for (var i = 0; i < _val.length; i++) 
        {
            _retArray.push('\t' + "<eHistory.07>" + _val[i] + "</eHistory.07>" + '\n');
            OLAPArray.push('\t\t' + "<EnvironmentalFoodAllergies>" + setCodeText("eHistory.07", _val[i]) + "</EnvironmentalFoodAllergies>" + '\n');
            v2Array.push({ section: "E12", element: "E12_09", val: setV2("eHistory.07", _val[i])});
        }
        eHistory["eHistory.07"] = arr1.slice(0);
    };
    
    ////////eHistory.08
    _val = getValue(businessObject.elements, "eHistory.08");
    if (_val == null) 
        if (isRequiredStateElement("eHistory.08") == true) 
        {
            OLAPArray.push('\t\t' + "<MedicalSurgicalHistory>" + "NOT RECORDED" + "</MedicalSurgicalHistory>" + '\n');
            _retArray.push('\t\t' + "<eHistory.08>" + NIL_V3NOT_RECORDED + '\n');
            eHistory["eHistory.08"] =v3NOT_RECORDED;
            v2Array.push({ section: "E12", element: "E12_10", val: v2NOT_RECORDED});            
        }
        else 
        {
            OLAPArray.push('\t\t' + "<MedicalSurgicalHistory>" + "NOT REPORTING" + "</MedicalSurgicalHistory>" + '\n');
            _retArray.push('\t\t' + "<eHistory.08>" + NIL_V3NOT_REPORTING + '\n');
            eHistory["eHistory.08"] =v3NOT_REPORTING;
            v2Array.push({ section: "E12", element: "E12_10", val: v2NOT_REPORTING});
        }
    else 
    {
        var PN_REFUSED_IS_NILLABLE = " xsi:nil=\"true\" PN=\"8801019\"/>";
        var PN_NONE_REPORTED_IS_NILLABLE = " xsi:nil=\"true\" PN=\"8801015\"/>";
        var PN_NONE_REFUSED_IS_NILLABLE = " xsi:nil=\"true\" PN=\"8801019\"/>";
        var PN_NONE_UNRESPONSIVE_IS_NILLABLE = " xsi:nil=\"true\" PN=\"8801021\"/>";
        var PN_UNABLE_TO_COMPLETE_IS_NILLABLE = " xsi:nil=\"true\" PN=\"8801023\"/>";
        var PN_FINDING_NOT_PRESENT_IS_NILLABLE = " xsi:nil=\"true\" PN=\"8801005\"/>";
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
        OLAPArray.push('\t\t' + "<MedicalHistoryObtainedFrom>" + null + "</MedicalHistoryObtainedFrom>" + '\n');
        _retArray.push('\t' + "<eHistory.09>" + null + "</eHistory.09>" + '\n');
        eHistory["eHistory.09"] =null;
        v2Array.push({ section: "E12", element: "E12_11", val: null});            
    }        
    else 
    {
        var arr1 = [];
        var arr2 = [];
        arr1 = _val;
        arr2 = setV2("eHistory.09", _val);
        for (var i = 0; i < _val.length; i++) 
        {
            _retArray.push('\t' + "<eHistory.09>" + _val[i] + "</eHistory.09>" + '\n');
            OLAPArray.push('\t\t' + "<MedicalHistoryObtainedFrom>" + setCodeText("eHistory.09", _val[i]) + "</MedicalHistoryObtainedFrom>" + '\n');
            v2Array.push({ section: "E12", element: "E12_11", val: setV2("eHistory.09", _val[i])});
        }
        eHistory["eHistory.09"] = arr1.slice(0);
    };
      
    
    ////////////////////////////////
    	
    _sectionIndex = getSectionIndex(businessObject.sections[xx].attributes, "eHistory.ImmunizationsGroup");      
    for (var x = 0; x <_sectionIndex.length; x++)
    {     	
        _retArray.push('\t\t' + "<eHistory.ImmunizationsGroup>" + '\n');
        OLAPArray.push('\t\t' + "<eHistory.ImmunizationsGroup>" + '\n');
       		
        /////////eHistory.10
        _val = getValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "eHistory.10");
        if (_val == null) 
        {
            OLAPArray.push('\t\t' + "<TypeofImmunization>" + null + "</TypeofImmunization>" + '\n');
            _retArray.push('\t\t' + "<eHistory.10>" + null + "</eHistory.10>" + '\n');
            eHistory["eHistory.10"] =null;
            v2Array.push({ section: "E12", element: "E12_12", val: null});   
            
        }
        else 
        {
            v2Array.push({ section: "E12", element: "E12_12", val: setV2("eHistory.10", _val)});
            ImmunizationsGroup["eHistory.10"] = _val;
            OLAPArray.push('\t\t' + "<TypeofImmunization>" + setCodeText("eHistory.10", _val[i]) + "</TypeofImmunization>" + '\n');
            _retArray.push('\t\t' + "<eHistory.10>" + _val + "</eHistory.10>" + '\n');
        };
    
        /////////eHistory.11
        _val = getValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "eHistory.11");
        if (_val == null) 
        {
            OLAPArray.push('\t\t' + "<ImmunizationDate>" + null + "</ImmunizationDate>" + '\n');
            _retArray.push('\t\t' + "<eHistory.11>" + null + "</eHistory.11>" + '\n');
            eHistory["eHistory.11"] =null;
            v2Array.push({ section: "E12", element: "E12_13", val: null});   
        }
        else 
        {
            OLAPArray.push('\t\t' + "<ImmunizationDate>" + _val+ "</ImmunizationDate>" + '\n');
            v2Array.push({ section: "E12", element: "E12_13", val: _val});   
            ImmunizationsGroup["eHistory.11"] = _val;
            _retArray.push('\t\t\t' + "<eHistory.11>" + _val + "</eHistory.11>" + '\n');
        };
        _retArray.push('\t\t' + "</eHistory.ImmunizationsGroup>" + '\n');
        OLAPArray.push('\t\t' + "</eHistory.ImmunizationsGroup>" + '\n');

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
            if (isRequiredStateElement("eHistory.12") == true) 
            {
                OLAPArray.push('\t\t' + "<CurrentMedications>" + "NOT_RECORDED"+ "</CurrentMedications>" + '\n');
                _retArray.push('\t\t' + "<eHistory.12>" + NIL_V3NOT_RECORDED + '\n');
                CurrentMedsGroup["eHistory.12"] =v3NOT_RECORDED;
                v2Array.push({ section: "E14", element: "E12_13", val: null});   
            }
            else 
            {
                OLAPArray.push('\t\t' + "<CurrentMedications>" + "NOT_REPORTING"+ "</CurrentMedications>" + '\n');
                _retArray.push('\t\t' + "<eHistory.12>" + NIL_V3NOT_REPORTING + '\n');
                CurrentMedsGroup["eHistory.12"] =v3NOT_REPORTING;
                v2Array.push({ section: "E12", element: "E12_14", val: null});   
            }
        }
        else 
        {
            _retArray.push('\t' + "<eHistory.12>" + _val + "</eHistory.12>" + '\n');
            v2Array.push({ section: "E12", element: "E12_11", val: setV2("eHistory.12", _val)});
            CurrentMedsGroup["eHistory.12"] = _val;
            OLAPArray.push('\t\t' + "<CurrentMedications>" + _val+ "</CurrentMedications>" + '\n');
        };
    
        ////////eHistory.13
        _val = getValue(businessObject.elements, "eHistory.13");
        if (_val == null) 
        {
            _retArray.push('\t' + "<eHistory.13>" + null + "</eHistory.13>" + '\n');
                OLAPArray.push('\t\t' + "<CurrentMedicationDose>" + null + "</CurrentMedicationDose>" + '\n');
                CurrentMedsGroup["eHistory.13"] =null;
                v2Array.push({ section: "E12", element: "E12_15", val: null});   
        }
        else 
        {
            OLAPArray.push('\t\t' + "<CurrentMedicationDose>" + _val + "</CurrentMedicationDose>" + '\n');
            _retArray.push('\t' + "<eHistory.13>" + _val + "</eHistory.13>" + '\n');
            CurrentMedsGroup["eHistory.13"] = _val;
            v2Array.push({ section: "E12", element: "E12_15", val: _val});  
        };
    		
        ////////eHistory.14
        _val = getValue(businessObject.elements, "eHistory.14");
        if (_val == null) 
        {
            OLAPArray.push('\t\t' + "<CurrentMedicationDosageUnit>" + null + "</CurrentMedicationDosageUnit>" + '\n');
            _retArray.push('\t' + "<eHistory.14>" + null + "</eHistory.14>" + '\n');
            CurrentMedsGroup["eHistory.14"] =null;
            v2Array.push({ section: "E12", element: "E12_16", val: null});   
            }
           
        else 
        {
            OLAPArray.push('\t\t' + "<CurrentMedicationDosageUnit>" + setCodeText("eHistory.15", _val) + "</CurrentMedicationDosageUnit>" + '\n');
            _retArray.push('\t' + "<eHistory.14>" + _val + "</eHistory.14>" + '\n');
            CurrentMedsGroup["eHistory.14"] = _val;
            v2Array.push({ section: "E12", element: "E12_17", val: setV2("eHistory.14", _val)});

        };
    		
        ////////eHistory.15
       _val = getValue(businessObject.elements, "eHistory.15");
       if (_val == null) 
       {
          
           OLAPArray.push('\t\t' + "<CurrentMedicationAdministrationRoute>" + _val + "</CurrentMedicationAdministrationRoute>" + '\n');                
           CurrentMedsGroup["eHistory.15"] =v3NOT_RECORDED;
           v2Array.push({ section: "E12", element: "E12_17", val: null});          
           _retArray.push('\t' + "<eHistory.15>" + null + "</eHistory.15>" + '\n');
       }
       else 
       {

            OLAPArray.push('\t\t' + "<CurrentMedicationAdministrationRoute>" + _val + "</CurrentMedicationAdministrationRoute>" + '\n');                
            _retArray.push('\t' + "<eHistory.15>" + _val + "</eHistory.15>" + '\n');
            CurrentMedsGroup["eHistory.15"] = _val;
            E12.E12_17 = setV2("eHistory.15",_val);
            v2Array.push({ section: "E12", element: "E12_17", val: setV2("eHistory.15", _val)});
       };
       _retArray.push('\t\t' + "</eHistory.CurrentMedsGroup>" + '\n');
       OLAPArray.push('\t\t' + "</eHistory.CurrentMedsGroup>" + '\n');
    };


    ////////eHistory.16
    _val = getValue(businessObject.elements, "eHistory.16");
    if (_val == null) 
    {
        OLAPArray.push('\t\t' + "<PresenceofEmergencyInformationForm>" + null + "</PresenceofEmergencyInformationForm>" + '\n');                
        CurrentMedsGroup["eHistory.16"] =null;
        v2Array.push({ section: "E12", element: "E12_18", val: null});          
        _retArray.push('\t' + "<eHistory.16>" + null + "</eHistory.16>" + '\n');
    }
    else 
    {
        OLAPArray.push('\t\t' + "<PresenceofEmergencyInformationForm>" + _val + "</PresenceofEmergencyInformationForm>" + '\n');                
        _retArray.push('\t' + "<eHistory.16>" + _val + "</eHistory.16>" + '\n');
        eHistory["eHistory.16"] = _val;
        v2Array.push({ section: "E12", element: "E12_18", val: setV2("eHistory.16",_val[0])});          
    };


    alert("history17 PN values")
    ////////eHistory.17
    _val = getValue(businessObject.elements, "eHistory.17");
    if (_val == null) 
        if (isRequiredStateElement("eHistory.17") == true) 
        {
            OLAPArray.push('\t\t' + "<AlcoholDrugUseIndicators>" + "NOT RECORDED" + "</AlcoholDrugUseIndicators>" + '\n');          
            _retArray.push('\t\t' + "<eHistory.17>" + NIL_V3NOT_RECORDED + '\n');
            eHistory["eHistory.17"] =v3NOT_RECORDED;
            v2Array.push({ section: "E12", element: "E12_18", val: v2NOT_RECORDED});          
        }
        else 
        {
            OLAPArray.push('\t\t' + "<AlcoholDrugUseIndicators>" + "NOT REPORTING" + "</AlcoholDrugUseIndicators>" + '\n');
            _retArray.push('\t\t' + "<eHistory.17>" + NIL_V3NOT_REPORTING + '\n');
            eHistory["eHistory.17"] =v3NOT_REPORTING;
            v2Array.push({ section: "E12", element: "E12_18", val: v2NOT_REPORTING});          
            }
    else 
    {
        var arr1 = [];
        var arr2 = [];
        arr1 = _val;        
        for (var i = 0; i < _val.length; i++) 
        {
            _retArray.push('\t' + "<eHistory.17>" + _val[i] + "</eHistory.17>" + '\n');
            OLAPArray.push('\t\t' + "<AlcoholDrugUseIndicators>" + setCodeText("eHistory.17", _val[i]) + "</AlcoholDrugUseIndicators>" + '\n');
            v2Array.push({ section: "E12", element: "E12_18", val: setV2("eHistory.17",_val[i])});     
        }
        eHistory["eHistory.17"] = arr1.slice(0);        
    };
    
    alert("history18 PN values")
    ////////eHistory.18
    _val = getValue(businessObject.elements, "eHistory.18");
    if (_val == null) 
    {
        OLAPArray.push('\t\t' + "<Pregnancy>" + null + "</Pregnancy>" + '\n');          
        _retArray.push('\t' + "<eHistory.18>" + null + "</eHistory.18>" + '\n');
        eHistory["eHistory.17"] =null;
        v2Array.push({ section: "E12", element: "E12_20", val: null});          
    }
    else 
    {
        _retArray.push('\t' + "<eHistory.18>" + _val + "</eHistory.18>" + '\n');
        eHistory["eHistory.18"] = _val;
        v2Array.push({ section: "E12", element: "E12_20", val: setV2("eHistory.18",_val)});          
        OLAPArray.push('\t\t' + "<Pregnancy>" + setCodeText("eHistory.18", _val[i]) + "</Pregnancy>" + '\n');
    };
    
    ////////eHistory.19
    _val = getValue(businessObject.elements, "eHistory.19");
    if (_val == null) 
    {
        OLAPArray.push('\t\t' + "<LastOralIntake>" + null + "</LastOralIntake>" + '\n');          
        _retArray.push('\t' + "<eHistory.19>" + null + "</eHistory.19>" + '\n');
        eHistory["eHistory.19"] =null;
    }
    else 
    {
        OLAPArray.push('\t\t' + "<LastOralIntake>" + _val + "</LastOralIntake>" + '\n');          
        _retArray.push('\t' + "<eHistory.19>" + _val + "</eHistory.19>" + '\n');
        eHistory["eHistory.19"] = _val;
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
