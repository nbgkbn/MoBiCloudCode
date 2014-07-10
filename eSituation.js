// JavaScript source code
var ErrorList = [];
var v3NOT_REPORTING = " NV=\"7701005\"";
var v3NOT_RECORDED = " NV=\"7701003\"";
var v2NOT_AVAILABLE = "-5";
var v2NOT_REPORTING = "-15";
var v2NOT_APPLICABLE = "-25"
var v2NOT_RECORDED = "-20";
var v2NOT_KNOWN = "-10";
var NIL_V3NOT_RECORDED =  "NV=\"7701003\" xsi:nil=\"true\"/>" ;
var NIL_V3NOT_REPORTING = "NV=\"7701005\" xsi:nil=\"true\"/>" ;
var NIL_V3NOT_APPLICABLE ="NV=\"7701001\" xsi:nil=\"true\"/>" ;
var PN_REFUSED_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801019\"/>";
var PN_UNABLE_TO_COMPLETE_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801023\"/>";
PN_FINDING_NOT_PRESENT_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801005\"/>";

var eSituation = new Object;
var E05 = new Object;

var _retArray = [];

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
};


var seteSituation = function (businessObject) 
{
    var OLAPArray = [];
    var _retArray = [];

    if (typeof businessObject == undefined) 
    {
        SetNotApplicable();
        return _retArray;
    }
    _retArray.push("<eSituation>" + '\n');
    OLAPArray.push("<eSituation>" + '\n');

    //////////////////////eSituation.01
    _val = getValue(businessObject.elements, "eSituation.01");
    if (_val == null)
    {
        if (isRequiredStateElement("eSituation.01"))
        {
            OLAPArray.push('\t' + "<DateTimeofSymptomOnsetLastNormal>" + "NOT RECORDED" + "</DateTimeofSymptomOnsetLastNormal>" + '\n');
            eSituation["dSituation.01"] = v3NOT_RECORDED;
            _retArray.push('\t' + "<dSituation.01" + NIL_V3NOT_RECORDED + '\n');
            v2Array.push({ section: "E05", element: "E05_01", val: v2NOT_RECORDED });
        }
        else
        {
            OLAPArray.push('\t' + "<EMSAgencyName>" + "NOT REPORTING" + "</EMSAgencyNumber>" + '\n');            
            _retArray.push('\t' + "<eResponse.02>" + NIL_V3NOT_REPORTING + + "</eResponse.02>" + '\n');
            eSituation["dSituation.01"] = v3NOT_REPORTING;
            v2Array.push({ section: "E05", element: "E05_01", val: v2NOT_REPORTING });
        }
    }
    else 
    {
        OLAPArray.push('\t' + "<DateTimeofSymptomOnsetLastNormal>" + _val + "</DateTimeofSymptomOnsetLastNormal>" + '\n');
        eSituation["dSituation.01"] = _val;
        _retArray.push('\t' + "<eSituation.01>" + _val + "</eSituation.01>" + '\n');
        v2Array.push({ section: "E05", element: "E05_01", val: _val });
    }; 

    //////////////////////eSituation.02
    _val = getValue(businessObject.elements, "eSituation.02");
    if (_val == null)
    {
        if (isRequiredStateElement("eSituation.02")) {
            OLAPArray.push('\t' + "<PossibleInjury>" + "NOT RECORDED" + "</PossibleInjury>" + '\n');
            _retArray.push('\t' + "<eSituation.02" + NIL_V3NOT_RECORDED + '\n');
            eSituation["dSituation.02"] = v3NOT_RECORDED;
            v2Array.push({ section: "E09", element: "E09_04", val: v2NOT_RECORDED });
        }
        else
        {
            OLAPArray.push('\t' + "<PossibleInjury>" + null+ "</PossibleInjury>" + '\n');
            _retArray.push('\t' + "<eSituation.02>" + null + "</eSituation.02>" + '\n');
            eSituation["dSituation.02"] = null;
            v2Array.push({ section: "E09", element: "E09_04", val: null });
        }
    }
    else 
    {
        OLAPArray.push('\t\t' + "<PossibleInjury>" + setCodeText("eSituation.02", _val) + "</PossibleInjury>" + '\n');
        eSituation["dSituation.02"] = _val;
        v2Array.push({ section: "E09", element: "E09_04", val: setV2("eSituation.02", _val) });
        _retArray.push('\t' + "<eSituation.02>" + _val + "</eSituation.02>" + '\n');
    };


        //////////////////////////////////////
        _sectionIndex = getSectionIndex(businessObject.sections[xx].attributes, "eSituation.PatientComplaintGroup");      
        for (var x = 0; x <_sectionIndex.length; x++)
        {     	
            _retArray.push('\t' + "<eSituation.PatientComplaintGroup>" + '\n');
            OLAPArray.push('\t' + "<eSituation.PatientComplaintGroup>" + '\n');
            var _listElements = businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements;

            /////////eSituation.03            
            _val = getValue(_listElements, "eSituation.03");
            if (_val == null)
            {
                if(isRequiredStateElement("eSituation.03"))
                {
                    OLAPArray.push('\t\t' + "<ComplaintType>" + "NOT RECORDED" + "</ComplaintType>" + '\n');
                   _retArray.push('\t\t' + "<eSituation.03" + NIL_V3NOT_RECORDED + '\n');
                   PatientComplaintGroup["dSituation.03"] = v3NOT_REPORTING;
                }            
                else
                {
                    OLAPArray.push('\t\t' + "<ComplaintType>" + "NOT REPORTING" + "</ComplaintType>" + '\n');
                    _retArray.push('\t\t' +"<eSituation.03" + NIL_V3NOT_REPORTING  + '\n');
                    PatientComplaintGroup["dSituation.03"] = v3NOT_RECORDED;
                }
            }
            else 
            {
                OLAPArray.push('\t\t' + "<ComplaintType>" + setCodeText("eSituation.03", _val) + "</ComplaintType>" + '\n');
                PatientComplaintGroup["dSituation.03"] = _val;
                _retArray.push('\t\t' + "<eSituation.03>" + _val + "</eSituation.17>") + '\n';
            }; 


            /////////eSituation.04
            _val = getValue(_listElements, "eSituation.04");
            if (_val == null)
            {
                if (isRequiredStateElement("eSituation.04"))
                {
                    OLAPArray.push('\t\t' + "<Complaint>" + "NOT RECORDED" + "</Complaint>" + '\n');
                    _retArray.push('\t\t' + "<eSituation.04" + NIL_V3NOT_RECORDED + '\n');
                    PatientComplaintGroup["dSituation.04"] = V3NOT_RECORDED;
                    v2Array.push({ section: "E09", element: "E09_05", val: V2NOT_RECORDED });
                }
                else
                {
                    OLAPArray.push('\t\t' + "<Complaint>" + "NOT REPORTING" + "</Complaint>" + '\n');
                    _retArray.push('\t\t' + "<eSituation.04" + NIL_V3NOT_REPORTING + '\n');
                    PatientComplaintGroup["dSituation.04"] = v3NOT_REPORTING;
                    v2Array.push({ section: "E09", element: "E09_05", val: v2NOT_REPORTING });
                }
            }
            else 
            {
                OLAPArray.push('\t\t' + "<Complaint>" + _val + "</Complaint>" + '\n');
                v2Array.push({ section: "E09", element: "E09_05", val: _val });
                PatientComplaintGroup["dSituation.04"] = _val;
                _retArray.push('\t\t' + "<eSituation.04>" + _val + "</eSituation.04>" + '\n');
            }; 

            /////////eSituation.05
            _val = getValue(_listElements, "eSituation.05");
            if (_val == null)
            {
                if(isRequiredStateElement("eSituation.05"))
                {
                    OLAPArray.push('\t\t' + "<DurationofComplaint>" + "NOT RECORDED" + "</DurationofComplaint>" + '\n');
                    _retArray.push('\t\t' + "<eSituation.05" + NIL_V3NOT_RECORDED + '\n');
                    PatientComplaintGroup["dSituation.05"] = V3NOT_RECORDED;
                    v2Array.push({ section: "E09", element: "E09_06", val: null });
                }            
                else
                {
                    OLAPArray.push('\t\t' + "<DurationofComplaint>" + "NOT REPORTING" + "</DurationofComplaint>" + '\n');
                    PatientComplaintGroup["dSituation.05"] = v3NOT_REPORTING;
                    v2Array.push({ section: "E09", element: "E09_06", val: null });
                }
            }
            else 
            {
                OLAPArray.push('\t\t' + "<DurationofComplaint>" + _val + "</DurationofComplaint>" + '\n');
                v2Array.push({ section: "E09", element: "E09_06", val: _val });
                _retArray.push('\t\t' +"<eSituation.05>" + _val + "</eSituation.05>" + '\n');
            }; 

            /////////eSituation.06
            _val = getValue(_listElements, "eSituation.06");
            if (_val == null)
            {
                if(isRequiredStateElement("eSituation.06"))
                {
                    OLAPArray.push('\t\t' + "<TimeUnitsofDurationofComplaint>" + "NOT RECORDED" + "</TimeUnitsofDurationofComplaint>" + '\n');
                    _retArray.push('\t\t' + "<eSituation.06" + NIL_V3NOT_RECORDED + '\n');
                    PatientComplaintGroup["dSituation.06"] = V3NOT_RECORDED;
                    v2Array.push({ section: "E09", element: "E09_07", val: null });
                }            
                else
                {
                    OLAPArray.push('\t\t' + "<TimeUnitsofDurationofComplaint>" + "NOT REPORTING" + "</TimeUnitsofDurationofComplaint>" + '\n');
                    _retArray.push('\t\t' + "<eSituation.06" + NIL_V3NOT_REPORTING + '\n');
                    PatientComplaintGroup["dSituation.06"] = v3NOT_REPORTING;
                    v2Array.push({ section: "E09", element: "E09_07", val: V2NOT_RECORDED });
                }
            }
            else 
            {
                OLAPArray.push('\t\t' + "<TimeUnitsofDurationofComplaint>" + _val + "</TimeUnitsofDurationofComplaint>" + '\n');
                PatientComplaintGroup["dSituation.06"] = _val;
                _return.push('\t\t' +"<eSituation.06>" + _val + "</eSituation.06>" + '\n');
            }; 
        }; //END LOOP

        _retArray.push('\t' + "<eSituation.PatientComplaintGroup>" + '\n');
        OLAPArray.push('\t' + "<eSituation.PatientComplaintGroup>" + '\n');
        


        ///////////////////////////////////

            
    /////////eSituation.07
        _val = getValue(businessObject.elements, "eSituation.07");
        if (_val == null)
        {
            OLAPArray.push('\t' + "<ChiefComplaintAnatomicLocation>" + "NOT RECORDED" + "</ChiefComplaintAnatomicLocation>" + '\n');
            _retArray.push('\t' + "<eSituation.07" + NIL_V3NOT_RECORDED  + '\n');
            eSituation["dSituation.07"] = v3NOT_RECORDED;
            v2Array.push({ section: "E09", element: "E09_11", val: V2NOT_RECORDED });
        }
        else 
        {
            OLAPArray.push('\t' + "<ChiefComplaintAnatomicLocation>" + setCodeText("dSituation.07", _val) + "</ChiefComplaintAnatomicLocation>" + '\n');
            eSituation["dSituation.07"] = _val;
            v2Array.push({ section: "E09", element: "E09_11", val: setV2("dSituation.07", _val) });
            _retArray.push('\t' + "<eSituation.07>" + _val + "</eSituation.07>" + '\n');
        }; 
                

    /////////eSituation.08
        _val = getValue(businessObject.elements, "eSituation.08");
        if (_val == null)
        {
            OLAPArray.push('\t' + "<ChiefComplaintOrganSystem>" + "NOT RECORDED" + "</ChiefComplaintOrganSystem>" + '\n');
            _retArray.push('\t' + "<eSituation.08" + NIL_V3NOT_RECORDED  + '\n');
            eSituation["dSituation.08"] = v3NOT_RECORDED;
            v2Array.push({ section: "E09", element: "E09_11", val: v2NOT_RECORDED });
        }
        else 
        {
            OLAPArray.push('\t' + "<ChiefComplaintOrganSystem>" + setCodeText("dSituation.08", _val) + "</ChiefComplaintOrganSystem>" + '\n');
            eSituation["dSituation.08"] = _val;
            v2Array.push({ section: "E09", element: "E09_12", val: setV2("dSituation.08", _val) });
            _retArray.push('\t' + "<eSituation.08>" + _val + "</eSituation.08>" + '\n');
        }; 


    /////////eSituation.09
        _val = getValue(businessObject.elements, "eSituation.09");
        if (_val == null)
        {
            OLAPArray.push('\t' + "<PrimarySymptom>" + "NOT RECORDED" + "</PrimarySymptom>" + '\n');
            _retArray.push('\t' + "<eSituation.09" + NIL_V3NOT_RECORDED  + '\n');
            eSituation["dSituation.09"] = v3NOT_RECORDED;
            v2Array.push({ section: "E09", element: "E09_13", val: v2NOT_RECORDED });            
        }
        else 
        {
            OLAPArray.push('\t' + "<PrimarySymptom>" + setCodeText("dSituation.09", _val) + "</PrimarySymptom>" + '\n');
            eSituation["dSituation.09"] = _val;
            v2Array.push({ section: "E09", element: "E09_13", val: setV2("dSituation.09", _val) });
            _retArray.push('\t' + "<eSituation.09>" + _val + "</eSituation.09>" + '\n');
        }; 


    /////////eSituation.10
        _val = getValue(businessObject.elements, "eSituation.10");
        if (_val == null)
        {
            OLAPArray.push('\t' + "<OtherAssociatedSymptoms>" + "NOT RECORDED" + "</OtherAssociatedSymptoms>" + '\n');
            _retArray.push('\t' + "<eSituation.10" + NIL_V3NOT_RECORDED  + '\n');
            eSituation["dSituation.10"] = v3NOT_RECORDED;
            v2Array.push({ section: "E09", element: "E09_14", val: setV2("dSituation.09", v2NOT_RECORDED) });
        }
        else 
        {
            var arr1 = [];
            for (var i = 0; i < _val.length; i++)
            {
                arr1.push(_val[i]);
                OLAPArray.push('\t' + "<OtherAssociatedSymptoms>" + setCodeText("dSituation.10", _val[i]) + "</OtherAssociatedSymptoms>" + '\n');
                _retArray.push('\t' + "<eSituation.10>" + _val[i] + "</eSituation.10>" + '\n');
                v2Array.push({ section: "E09", element: "E09_14", val: _val[i] });
            }
            eSituation["dSituation.10"] = arr1.slice(0);
        }; 

    /////////eSituation.11
        _val = getValue(businessObject.elements, "eSituation.11");
        if (_val == null)
        {
            OLAPArray.push('\t' + "<ProviderPrimaryImpression>" + "NOT RECORDED" + "</ProviderPrimaryImpression>" + '\n');
            _retArray.push('\t' + "<eSituation.11" + NIL_V3NOT_RECORDED  + '\n');
            eSituation["dSituation.11"] = v3NOT_RECORDED;
            v2Array.push({ section: "E09", element: "E09_15", val: v2NOT_RECORDED });

        }
        else 
        {
            OLAPArray.push('\t' + "<ProviderPrimaryImpression>" + _val + "</ProviderPrimaryImpression>" + '\n');
            eSituation["dSituation.11"] = _val;
            v2Array.push({ section: "E09", element: "E09_15", val: _val });
            _retArray.push('\t' + "<eSituation.11>" + _val + "</eSituation.11>" + '\n');
        }; 


        /////////eSituation.12
        _val = getValue(businessObject.elements, "eSituation.12");
        if (_val == null)
        {
            OLAPArray.push('\t' + "<ProviderSecondaryImpressions>" + "NOT RECORDED" + "</ProviderSecondaryImpressions>" + '\n');
            _retArray.push('\t' + "<eSituation.12" + NIL_V3NOT_RECORDED  + '\n');
            eSituation["dSituation.12"] = v3NOT_RECORDED;
            v2Array.push({ section: "E09", element: "E09_16", val: v2NOT_RECORDED });
        }
        else 
        {
            OLAPArray.push('\t' + "<ProviderSecondaryImpressions>" + _val + "</ProviderSecondaryImpressions>" + '\n');
            eSituation["dSituation.12"] = _val;
            v2Array.push({ section: "E09", element: "E09_16", val: _val });
            _retArray.push('\t' + "<eSituation.12>" + _val + "</eSituation.12>" + '\n');
        }; 

    /////////eSituation.13
        _val = getValue(businessObject.elements, "dSituation.13");
        if (_val == null)
        {
            OLAPArray.push('\t' + "<InitialPatientAcuity>" + "NOT RECORDED" + "</InitialPatientAcuity>" + '\n');
            _retArray.push('\t' + "<eSituation.13" + NIL_V3NOT_RECORDED  + '\n');
            eSituation["dSituation.13"] = v3NOT_RECORDED;                    
        }
        else 
        {
            OLAPArray.push('\t' + "<InitialPatientAcuity>" + setCodeText("dSituation.13", _val[i]) + "</InitialPatientAcuity>" + '\n');
            eSituation["dSituation.13"] = _val;                    
            _retArray.push('\t' + "<eSituation.13>" + _val + "</eSituation.13>" + '\n');
        }; 
       
        _retArray.push('\t' + "<WorkRelatedGroup>");
        OLAPArray.push('\t' + "<WorkRelatedGroup>");

    /////////eSituation.14
        _val = getValue(businessObject.elements, "eSituation.14");
        if (_val == null)
        {
            if (isRequiredStateElement("eSituation.14"))
            {
                OLAPArray.push('\t\t' + "<WorkRelatedIllnessInjury>" + "NOT RECORDED" + "</WorkRelatedIllnessInjury>" + '\n');
                _retArray.push('\t\t' + "<eSituation.14" + NIL_V3NOT_RECORDED + '\n');
                eSituation["dSituation.14"] = v3NOT_RECORDED;
                v2Array.push({ section: "E07", element: "E07_15", val: v2NOT_RECORDED });
            }
            else
            {
                OLAPArray.push('\t\t' + "<WorkRelatedIllnessInjury>" + "NOT REPORTING" + "</WorkRelatedIllnessInjury>" + '\n');
                _retArray.push('\t\t' + "<eSituation.14" + NIL_V3NOT_REPORTING + '\n');
                eSituation["dSituation.14"] = v3NOT_REPORTING;
                v2Array.push({ section: "E07", element: "E07_15", val: v2NOT_REPORTING });
            }
        }
        else
        {
            OLAPArray.push('\t\t' + "<WorkRelatedIllnessInjury>" + setCodeText("eSituation.14", _val) + "</WorkRelatedIllnessInjury>" + '\n');
            eSituation["dSituation.14"] = _val;
            v2Array.push({ section: "E07", element: "E07_15", val: setV2("eSituation.14", _val) });
            _retArray.push('\t\t' + "<eSituation.14>" + _val + "</eSituation.14>" + '\n');
        };
      
    /////////eSituation.15
        _val = getValue(businessObject.elements, "eSituation.15");
        if (_val == null)
        {
            OLAPArray.push('\t\t' + "<PatientOccupationalIndustry>" + null + "</PatientOccupationalIndustry>" + '\n');
            _retArray.push('\t\t' + "<eSituation.15>" + null + "</eSituation.15>" + '\n');
            v2Array.push({ section: "E07", element: "E07_16", val: null });
        }
        else 
        {
            OLAPArray.push('\t\t' + "<PatientOccupationalIndustry>" + setCodeText("eSituation.15", _val) + "</PatientOccupationalIndustry>" + '\n');
            eSituation["dSituation.15"] = _val;
            v2Array.push({ section: "E07", element: "E07_16", val: setV2("eSituation.15", _val) });
            _retArray.push('\t\t' +"<eSituation.15>" + _val + "</eSituation.15>" + '\n');
        }; 


        /////////eSituation.16
        _val = getValue(businessObject.elements, "eSituation.16");
        if (_val == null)
        {
            OLAPArray.push('\t\t' + "<PatientOccupation>" + null + "</PatientOccupation>" + '\n');
            _retArray.push('\t\t' + "<eSituation.15>" + null + "</eSituation.15>" + '\n');
            v2Array.push({ section: "E07", element: "E07_17", val: null });
            eSituation["dSituation.17"] = _val;
        }
        else 
        {
            OLAPArray.push('\t' + "<PatientOccupation>" + setCodeText("eSituation.16", _val) + "</PatientOccupation>" + '\n');
            v2Array.push({ section: "E07", element: "E07_17", val: _val });
            eSituation["dSituation.16"] = _val;
            _retArray.push('\t\t' +"<eSituation.16>" + _val + "</eSituation.16" + '\n');
        }; 
        _retArray.push('\t' + "</WorkRelatedGroup>");
        OLAPArray.push('\t' + "</WorkRelatedGroup>");

    /////////eSituation.17
        _val = getValue(businessObject.elements, "eSituation.17");
        if (_val == null)
        {
            if(isRequiredStateElement("eSituation.17"))
            {
                OLAPArray.push('\t\t' + "<PatientActivity>" + "NOT RECORDED" + "</PatientActivity>" + '\n');
                _retArray.push('\t' + "<eSituation.17" + NIL_V3NOT_RECORDED + '\n');
                eSituation["dSituation.17"] = v3NOT_RECORDED;
            }            
            else
            {
                OLAPArray.push('\t\t' + "<PatientActivity>" + "NOT REPORTING" + "</PatientActivity>" + '\n');
                _retArray.push('\t' + "<eSituation.17" + NIL_V3NOT_REPORTING + '\n');
                eSituation["dSituation.17"] = v3NOT_RECORDED;
            }
        }
        else 
        {
            var arr1 = [];
            for (var i = 0; i < _val.length; i++)
            {
                arr1.push(_val[i]);
                OLAPArray.push('\t\t' + "<PatientActivity>" + _val[i] + "</PatientActivity>" + '\n');
                _retArray.push('\t' + "<eSituation.17>" + _val[i] + "</eSituation.17>" + '\n');                
            }

            eSituation["dSituation.17"] = arr1.slice(0);;            
        };            
        _retArray.push("</eSituation>" + '\n');
        OLAPArray.push("</eSituation>" + '\n');
    };    //end of function   



var isRequiredStateElement = function (elementID) {
    return true;
};



var getValue = function (payload, valueObject) {

    var _retValue = null;
    var _bFound = false;
    i = 0;
    while (i < payload.length) {
        if (_bFound == false) {
            _retVal = null;
            if (payload[i].name == valueObject) {
                _bFound = true;
                if (payload[i].values == undefined) {

                    _retVal = null;
                }
                else {
                    _retVal = payload[i].values;
                }
            }
        }
        i++;
    }
    return _retVal;
};

function setD2(NEMSISElementNumber, valueArray) {
    //    console.log(NEMSISElementNumber);
    var _retArray = [];
    //    console.log(valueArray);
    switch (NEMSISElementNumber) {
        case "eSituation.06":

            if (eSituation06[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eSituation06[valueArray[0]]);
            }
            break;
        case "eSituation.07":
            for (i = 0; i < valueArray.length; i++) {
                if (eSituation07[valueArray[i]] == undefined) {
                    _retArray.push(valueArray[i] + "UNDEFINED");
                }
                else {
                    _retArray.push(eSituation07[valueArray[i]]);
                }
            }
            break;
        case "dAgency.11":

            if (dAgency11CodeMap[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(dAgency11CodeMap[valueArray[0]]);
            }
            break;
        default:
            _retArray.push(NEMSISElementNumber = " version 2 not found");
    }

    return _retArray;

};


function SetNotApplicable() 
{
    eSituation["eSituation.01"] = V3NOT_APPLICABLE
    E05.E05_01 = NULL;
    _retArray.push("<eSituation.01" + NIL_V3NOT_APPLICABLE  + '\n');

    eSituation["eSituation.02"] = V3NOT_APPLICABLE
    E09.E09_04 = v2NOT_APPLICABLE;
    _retArray.push("<eSituation.02" + NIL_V3NOT_APPLICABLE );

    PatientComplaintGroup["eSituation.03"] = V3NOT_APPLICABLE
    _retArray.push("<eSituation.03" + NIL_V3NOT_APPLICABLE );

    PatientComplaintGroup["eSituation.04"] = V3NOT_APPLICABLE
    E09.E09_05 = v2NOT_APPLICABLE;
    _retArray.push("<eSituation.04" + NIL_V3NOT_APPLICABLE );
    
    PatientComplaintGroup["eSituation.05"] = V3NOT_APPLICABLE
    E09.E09_06 = v2NOT_APPLICABLE;
    _retArray.push("<eSituation.05" + NIL_V3NOT_APPLICABLE );

    PatientComplaintGroup["eSituation.06"] = V3NOT_APPLICABLE
    E09.E09_07 = v2NOT_APPLICABLE;
    _retArray.push("<eSituation.06" + NIL_V3NOT_APPLICABLE );

    eSituation["eSituation.07"] = V3NOT_APPLICABLE
    E09.E09_11 = v2NOT_APPLICABLE;
    _retArray.push("<eSituation.07" + NIL_V3NOT_APPLICABLE );

    eSituation["eSituation.08"] = V3NOT_APPLICABLE
    E09.E09_12 = v2NOT_APPLICABLE;
    _retArray.push("<eSituation.08" + NIL_V3NOT_APPLICABLE );

    eSituation["eSituation.09"] = V3NOT_APPLICABLE
    E09.E09_13 = v2NOT_APPLICABLE;
    _retArray.push("<eSituation.09" + NIL_V3NOT_APPLICABLE );

    eSituation["eSituation.10"] = V3NOT_APPLICABLE
    E09.E09_14 = v2NOT_APPLICABLE;
    _retArray.push("<eSituation.10" + NIL_V3NOT_APPLICABLE );
    
    eSituation["eSituation.11"] = V3NOT_APPLICABLE
    E09.E09_15 = v2NOT_APPLICABLE;
    _retArray.push("<eSituation.11" + NIL_V3NOT_APPLICABLE );
    
    eSituation["eSituation.12"] = V3NOT_APPLICABLE
    E09.E09_16 = v2NOT_APPLICABLE;
    _retArray.push("<eSituation.12" + NIL_V3NOT_APPLICABLE );
    
    eSituation["eSituation.13"] = V3NOT_APPLICABLE
    _retArray.push("<eSituation.13" + NIL_V3NOT_APPLICABLE );

    WorkRelatedGroup["eSituation.14"] = V3NOT_APPLICABLE
    E09.E09_15 = v2NOT_APPLICABLE;
    _retArray.push("<eSituation.14" + NIL_V3NOT_APPLICABLE );

    eSituation["eSituation.17"] = V3NOT_APPLICABLE
    _retArray.push("<eSituation.17" + NIL_V3NOT_APPLICABLE );
    
};

var eSituation06 = {
    "2806001":	"1235",
    "2806003":	"1240",
    "2806005":	"1245",
    "2806007":	"1250",
    "2806009":	"1255",
    "2806011":	"1260",
    "2806013":	"1265"
};


var eSituation07 = {
    "2807001":"1305",
    "2807003":	"1310",
    "2807005":	"1315",
    "2807007":	"1320",
    "2807009":	"1325",
    "2807011":	"1330",
    "2807013":	"1335",
    "2807015":	"1340",
    "2807017":	"1345"
};

var eSituation08 = {
    "2808003":	"1350",
    "2808005":	"1355",
    "2808007":	"1360",
    "2808009":	"1365",
    "2808011":	"1370",
    "2808015":	"1375",
    "2808017":	"1380",
    "2808001":	"1385",
    "2808019":	"1390",
    "2808021":	"1395"
};

var eSituation09 = {
    "R58":"1405", 
    "N92.6":"1405",
    "N93.9":"1405", 
    "O47":"1405",
    "R00.2":"1405",
    "R04.0":"1405",
    "R04.2":"1405", 
    "R58":"1405",
    "R60.0":"1405",
    "R60.9":"1405",
    "R61":"1405",

    "R05":"1410", 
    "R06.00":"1410",
    "R06.01":"1410",
    "R06.02":"1410", 
    "R06.1":"1410", 
    "R06.2":"1410", 
    "R06.3":"1410", 
    "R06.4":"1410",
    "R06.6":"1410",
    "R06.7":"1410",
    "R06.81":"1410",
    "R06.83":"1410",
    "R07.0":"1410",
    "R07.1":"1410",
    "R09.2":"1410",
    "R09.81":"1410",
    "R19.30":"1415",
    "R55":"1415",
    "R56.0":"1415",
    "R56.9":"1415",
    "R57.0":"1415",
    "R57.1":"1415",
    "R09.01":"1420",
    "R13.0":"1420",
    "R13.10":"1420",
    "R19.7":"1435",
    "R30.0":"1440",
    "R31":"1440",
    "R32":"1440",
    "R33.9":"1440",
    "R35.8":"1440",
    "R50.9":"1445",
    "H53.14":"1450",
    "R47.01":"1450",
    "R47.02":"1450",
    "R47.81":"1450",
    "R49.0":"1450",
    "R53.1":"1450",
    "R53.81":"1450",
    "R53.83":"1450",
    "R40.1":"1460",
    "R40.20":"1460",
    "R41.0":"1460",
    "R41.3":"1460",
    "R41.82":"1460",
    "R41.840":"1460",
    "R42":"1460",
    "R44.0":"1460",
    "R44.1":"1460",
    "R45.0":"1460",
    "R45.1":"1460",
    "R45.3":"1460",
    "R45.4":"1460",
    "R45.6":"1460",
    "R45.7":"1460",
    "R45.81":"1460",
    "R45.82":"1460",
    "R45.83":"1460",
    "R45.850":"1460",
    "R45.851":"1460",
    "R46.2":"1460",
    "R46.3":"1460",
    "R46.4":"1460",
    "H53.14":"1465",
    "K92.0":"1465",
    "R11.0":"1465",
    "R11.10":"1465",
    "R11.12":"1465",
    "R14.0":"1465",
    "R14.2":"1465",
    "R14.3":"1465",
    "R15":"1465",
    "R63.0":"1465",
    "R63.1":"1465",
    "R63.3":"1465",
    "R63.4":"1465",
    "R63.5":"1465",
    "R64":"1465",
    "R68.2":"1465",
    "G44.53":"1475",    
    "H54.7":"1475", 
    "H57.10":"1475", 
    "H91.90":"1475", 
    "H92.09":"1475", 
    "J02":"1475",
    "K08.8":"1475", 
    "K59.00":"1475", 
    "N48.3":"1475", 
    "N92.6":"1475", 
    "R07.82":"1475", 
    "R07.89":"1475",
    "R07.9":"1475", 
    "R09.2":"1475", 
    "R09.81":"1475", 
    "R10.0":"1475", 
    "R10.1":"1475", 
    "R10.13":"1475", 
    "R10.2":"1475",
    "R10.3":"1475", 
    "R10.33":"1475", 
    "R10.81":"1475", 
    "R10.82":"1475",
    "R10.83":"1475",
    "R10.84":"1475", 
    "R12":"1475", 
    "R51":"1475",
    "R52":"1475",
    "R68.84":"1475",
    "L29.9":"1480",
    "L50":"1485", 
    "R20.0":"1485",
    "R20.1":"1485",
    "R20.2":"1485",
    "R21":"1485", 
    "R23.0":"1485",
    "R23.1":"1485",
    "R23.2":"1485",
    "R23.8":"1485",
    "R22":"1490",
    "E66.3":"1495", 
    "G40.3":"1490", 
    "G47.00":"1495",
    "G81":"1500",
    "G81.9":"1500",
    "G83.10":"1500",
    "R25.1":"1500",
    "R25.2":"1500",
    "R25.3":"1500",
    "R25.8":"1500",
    "R26.0":"1500",
    "R26.2":"1500",
    "R26.89":"1500",
    "R27.0":"1500",
    "R29.0":"1500",
    "R29.6":"1500",
    "R29.810":"1500", 
    "R40.0":"1500"
};

var eSituation10 = {
    "R40.1": "1565",
    "R40.20": "1565",
    "R41.0": "1565",
    "R41.3": "1565",
    "R41.82": "1565",
    "R41.840": "1565",
    "R42": "1565",
    "R44.0": "1565",
    "R44.1": "1565",
    "R45.0": "1565",
    "R45.1": "1565",
    "R45.3": "1565",
    "R45.4": "1565",
    "R45.6": "1565",
    "R45.7": "1565",
    "R45.81": "1565",
    "R45.82": "1565",
    "R45.83": "1565",
    "R45.850": "1565",
    "R45.851": "1565",
    "R46.2": "1565",
    "R46.3": "1565",
    "R46.4": "1565",
    "H53.14": "1570",
    "R11.10": "1570",
    "R11.12": "1570",
    "R14.2": "1570",
    "R14.3": "1570",
    "R15": "1570",
    "R63.1": "1570",
    "R63.3": "1570",
    "R63.4": "1570",
    "R63.5": "1570",
    "R64": "1570",
    "K92.0": "1570",
    "R11.0": "1570",
    "R14.0": "1570",
    "R63.0": "1570",
    "R68.2": "1570",
    "R11.0": "1570",
};

var eSituation334_02 = {

    "9922001" : "No",
    "9922003" : "Unknown",
    "9922005" : "Yes"
};
var eSituation334_03 = {
    "2803001" : "Chief (Primary)",
    "2803003" : "Other (Not Listed)",
    "2803005" : "Secondary"
};
var eSituation334_06 = {

    "2806001" : "Seconds",
    "2806003" : "Minutes",
    "2806005" : "Hours",
    "2806007" : "Days",
    "2806009" : "Weeks",
    "2806011" : "Months",
    "2806013" : "Years"
};
var eSituation334_07 = {
    "2807001" : "Abdomen",
    "2807003" : "Back",
    "2807005" : "Chest",
    "2807007" : "Extremity-Lower",
    "2807009" : "Extremity-Upper",
    "2807011" : "General/Global",
    "2807013" : "Genitalia",
    "2807015" : "Head",
    "2807017" : "Neck"
};
var eSituation334_08 = {
    "2808001" : "Behavioral/Psychiatric",
    "2808003" : "Cardiovascular",
    "2808005" : "CNS/Neuro",
    "2808007" : "Endocrine/Metabolic",
    "2808009" : "GI",
    "2808011" : "Global/General",
    "2808013" : "Lymphatic/Immune",
    "2808015" : "Musculoskeletal/Skin",
    "2808017" : "Reproductive",
    "2808019" : "Pulmonary",
    "2808021" : "Renal"
};
var eSituation334_13 = {
    "2813001" : "Critical (Red)",
    "2813003" : "Emergent (Yellow)",
    "2813005" : "Lower Acuity (Green)",
    "2813007" : "Dead without Resuscitation Efforts (Black)"
};
var eSituation334_14 = {
    "9922001" : "No",
    "9922003" : "Unknown",
    "9922005" : "Yes"
};
var eSituation334_15 = {
    "2815001" : "Accommodation and Food Services",
    "2815003" : "Administrative and Support and Waste Management and Remediation Services",
    "2815005" : "Agriculture; Forestry; Fishing and Hunting",
    "2815007" : "Arts; Entertainment; and Recreation",
    "2815009" : "Construction",
    "2815011" : "Educational Services",
    "2815013" : "Finance and Insurance",
    "2815015" : "Health Care and Social Assistance",
    "2815017" : "Information",
    "2815019" : "Management of Companies and Enterprises",
    "2815021" : "Manufacturing",
    "2815023" : "Mining; Quarrying; and Oil and Gas Extraction",
    "2815025" : "Other Services (except Public Administration)",
    "2815027" : "Professional; Scientific; and Technical Services",
    "2815029" : "Public Administration",
    "2815031" : "Real Estate and Rental and Leasing",
    "2815033" : "Retail Trade",
    "2815035" : "Transportation and Warehousing",
    "2815037" : "Utilities",
    "2815039" : "Wholesale Trade"
};
var eSituation334_16 = {
    "2816001": "Architecture and Engineering Occupations",
    "2816003": "Arts; Design; Entertainment; Sports; and Media Occupations",
    "2816005": "Building and Grounds Cleaning and Maintenance Occupations",
    "2816007": "Business and Financial Operations Occupations",
    "2816009": "Community and Social Services Occupations",
    "2816011": "Computer and Mathematical Occupations",
    "2816013": "Construction and Extraction Occupations",
    "2816015": "Education; Training; and Library Occupations",
    "2816017": "Farming; Fishing and Forestry Occupations",
    "2816019": "Food Preparation and Serving Related Occupations",
    "2816021": "Healthcare Practitioners and Technical Occupations",
    "2816023": "Healthcare Support Occupations",
    "2816025": "Installation; Maintenance; and Repair Occupations",
    "2816027": "Legal Occupations",
    "2816029": "Life; Physical; and Social Science Occupations",
    "2816031": "Management Occupations",
    "2816033": "Military Specific Occupations",
    "2816035": "Office and Administrative Support Occupations",
    "2816037": "Personal Care and Service Occupations",
    "2816039": "Production Occupations",
    "2816041": "Protective Service Occupations",
    "2816043": "Sales and Related Occupations",
    "2816045": "Transportation and Material Moving Occupations"
};

function setCodeText(NEMSISElementNumber, codeVal) {
    var _return = [];


    switch (NEMSISElementNumber) {

        case "eSituation.02":
            if (eSituation334_02[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eSituation334_02[codeVal];
            }
            break;

        case "eSituation.03":
            if (eSituation334_03[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eSituation334_03[codeVal];
            }
            break;

        case "eSituation.06":
            if (eSituation334_06[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eSituation334_06[codeVal];
            }
            break;

        case "eSituation.07":
            if (eSituation334_07[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eSituation334_07[codeVal];
            }
            break;
        case "eSituation.08":
            if (eSituation334_08[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eSituation334_08[codeVal];
            }
            break;

        case "eSituation.13":
            if (eSituation334_13[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eSituation334_13[codeVal];
            }
            break;

        case "eSituation.14":
            if (eSituation334_14[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eSituation334_14[codeVal];
            }
            break;
        case "eSituation.15":
            if (eSituation334_15[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eSituation334_15[codeVal];
            }
            break;

        case "eSituation.16":
            if (eSituation334_16[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eSituation334_16[codeVal];
            }
            break;
        default:
            _return = " UNDEFINED";
    }
    return _return;

};