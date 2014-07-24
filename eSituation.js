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
var PatientComplaintGroup = new Object();
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
    var isNotApplicableFlag = true;  //once I have real data, set to False    
    //////////////////////eSituation.01
    _val = getValue(businessObject.elements, "eSituation.01");
    if (_val == null)
    {
        if (isRequiredStateElement("eSituation.01"))
        {
            eSituation["dSituation.01"] = v3NOT_RECORDED;
            eSituation["DateTimeofSymptomOnsetLastNormal"] = NOT_RECORDED;
            v2Array.push({ section: "E05", element: "E05_01", val: v2NOT_RECORDED });
        }
        else
        {
            eSituation["dSituation.01"] = v3NOT_REPORTING;
            eSituation["DateTimeofSymptomOnsetLastNormal"] = NOT_REPORTING;
            v2Array.push({ section: "E05", element: "E05_01", val: v2NOT_REPORTING });
        }
    }
    else 
    {
        isNotApplicableFlag = false;
        eSituation["dSituation.01"] = _val[0];
        eSituation["DateTimeofSymptomOnsetLastNormal"] = _val[0];
        v2Array.push({ section: "E05", element: "E05_01", val: _val[0] });
    }; 

    //////////////////////eSituation.02
    _val = getValue(businessObject.elements, "eSituation.02");
    if (_val == null)
    {
        if(isRequiredStateElement("eSituation.02"))
        {
            eSituation["dSituation.02"] = v3NOT_RECORDED;
            eSituation["PossibleInjury"] = NOT_RECORDED;
            v2Array.push({ section: "E09", element: "E09_04", val: v2NOT_RECORDED });
        }            
    }
    else 
    {
        isNotApplicableFlag = false;
        eSituation["dSituation.02"] = _val[0];
        eSituation["PossibleInjury"] = setCodeText("eSituation.02", _val[0]);
        v2Array.push({ section: "E09", element: "E09_04", val: setV2("eSituation.02", _val) });
    };


        //////////////////////////////////////
        _sectionIndex = getSectionIndex(businessObject.sections[xx].attributes, "eSituation.PatientComplaintGroup");      
        for (var x = 0; x <_sectionIndex.length; x++)
        {     	
            var _listElements = businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements;

            /////////eSituation.03            
            _val = getValue(_listElements, "eSituation.03");
            if (_val == null)
            {
                if(isRequiredStateElement("eSituation.03"))
                {
                    PatientComplaintGroup["dSituation.03"] = v3NOT_RECORDED;
                    PatientComplaintGroup["ComplaintType"] = NOT_RECORDED;
                }            
                else
                {
                    PatientComplaintGroup["dSituation.03"] = v3NOT_REPORTING;
                    PatientComplaintGroup["ComplaintType"] = NOT_REPORTING;
                }
            }
            else 
            {
                isNotApplicableFlag = false;
                PatientComplaintGroup["dSituation.03"] = _val[0];
                PatientComplaintGroup["ComplaintType"] = setCodeText("eSituation.03", __val[0]);
            }; 


            /////////eSituation.04
            _val = getValue(_listElements, "eSituation.04");
            if (_val == null)
            {
                if (isRequiredStateElement("eSituation.04"))
                {
                    PatientComplaintGroup["dSituation.04"] = V3NOT_RECORDED;
                    PatientComplaintGroup["Complaint"] = NOT_RECORDED;
                    v2Array.push({ section: "E09", element: "E09_05", val: V2NOT_RECORDED });
                }
                else
                {

                    PatientComplaintGroup["dSituation.04"] = v3NOT_REPORTING;
                    PatientComplaintGroup["Complaint"] = NOT_REPORTING;
                    v2Array.push({ section: "E09", element: "E09_05", val: v2NOT_REPORTING });
                }
            }
            else 
            {
                isNotApplicableFlag = false;
                v2Array.push({ section: "E09", element: "E09_05", val: _val[0] });
                PatientComplaintGroup["dSituation.04"] = _val[0];
                PatientComplaintGroup["Complaint"] = _val[0];
            }; 

            /////////eSituation.05
            _val = getValue(_listElements, "eSituation.05");
            if (_val == null)
            {
                if(isRequiredStateElement("eSituation.05"))
                {
                    PatientComplaintGroup["dSituation.05"] = V3NOT_RECORDED;
                    PatientComplaintGroup["DurationofComplaint"] = NOT_RECORDED;
                    v2Array.push({ section: "E09", element: "E09_06", val: null });
                }            
                else
                {
                    PatientComplaintGroup["DurationofComplaint"] = NOT_REPORTING;
                    PatientComplaintGroup["dSituation.05"] = v3NOT_REPORTING;
                    v2Array.push({ section: "E09", element: "E09_06", val: null });
                }
            }
            else 
            {
                isNotApplicableFlag = false;
                PatientComplaintGroup["DurationofComplaint"] = _val[0];
                PatientComplaintGroup["dSituation.05"] = _val[0]
                v2Array.push({ section: "E09", element: "E09_06", val: _val[0] });
            }; 

            /////////eSituation.06
            _val = getValue(_listElements, "eSituation.06");
            if (_val == null)
            {
                if(isRequiredStateElement("eSituation.06"))
                {
                    PatientComplaintGroup["dSituation.06"] = V3NOT_RECORDED;
                    PatientComplaintGroup["TimeUnitsofDurationofComplaint"] = NOT_RECORDED;
                    v2Array.push({ section: "E09", element: "E09_07", val: null });
                }            
                else
                {
                    PatientComplaintGroup["TimeUnitsofDurationofComplaint"] = NOT_REPORTING;
                    PatientComplaintGroup["dSituation.06"] = v3NOT_REPORTING;
                    v2Array.push({ section: "E09", element: "E09_07", val: V2NOT_RECORDED });
                }
            }
            else 
            {
                isNotApplicableFlag = false;
                PatientComplaintGroup["dSituation.06"] = _val[0];
                PatientComplaintGroup["TimeUnitsofDurationofComplaint"] = _val[0];
                v2Array.push({ section: "E09", element: "E09_07", val: _val[0] });
            }; 
        }; //END LOOP

            
    /////////eSituation.07
        _val = getValue(businessObject.elements, "eSituation.07");
        if (_val == null)
        {
            eSituation["dSituation.07"] = v3NOT_RECORDED;
            eSituation["ChiefComplaintAnatomicLocation"] = NOT_RECORDED;
            v2Array.push({ section: "E09", element: "E09_11", val: V2NOT_RECORDED });
        }
        else 
        {
            isNotApplicableFlag = false;
            eSituation["dSituation.07"] = _val[0];
            eSituation["ChiefComplaintAnatomicLocation"] = _val[0];
            v2Array.push({ section: "E09", element: "E09_11", val: setV2("dSituation.07", _val[0]) });
        }; 
                

    /////////eSituation.08
        _val = getValue(businessObject.elements, "eSituation.08");
        if (_val == null)
        {
            eSituation["dSituation.08"] = v3NOT_RECORDED;
            eSituation["ChiefComplaintOrganSystem"] = NOT_RECORDED;
            v2Array.push({ section: "E09", element: "E09_11", val: v2NOT_RECORDED });
        }
        else 
        {
            isNotApplicableFlag = false;
            eSituation["dSituation.08"] = _val[0];
            eSituation["ChiefComplaintOrganSystem"] = setCodeText("dSituation.08", _val[0]);
            v2Array.push({ section: "E09", element: "E09_12", val: setV2("dSituation.08", _val[0]) });
        }; 


    /////////eSituation.09
        _val = getValue(businessObject.elements, "eSituation.09");
        if (_val == null)
        {
            eSituation["dSituation.09"] = v3NOT_RECORDED;
            eSituation["PrimarySymptom"] = NOT_RECORDED;
            v2Array.push({ section: "E09", element: "E09_13", val: v2NOT_RECORDED });            
        }
        else 
        {
            isNotApplicableFlag = false;
            eSituation["dSituation.09"] = _val[0];
            eSituation["PrimarySymptom"] = setCodeText("dSituation.09", _val[0]);
            v2Array.push({ section: "E09", element: "E09_13", val: setV2("dSituation.09", _val[0]) });            
        }; 


    /////////eSituation.10
        _val = getValue(businessObject.elements, "eSituation.10");
        if (_val == null)
        {
            eSituation["dSituation.10"] = v3NOT_RECORDED;
            eSituation["OtherAssociatedSymptoms"] = NOT_RECORDED;
            v2Array.push({ section: "E09", element: "E09_14", val: setV2("dSituation.09", v2NOT_RECORDED) });
        }
        else 
        {
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _val.length; i++)
            {
                arr1.push(_val[i]);
                arr2.push(setD2("dSituation.10", _val[i]));
                arr3.push(setCodeText("dSituation.10", _val[i]));               

            };
            isNotApplicableFlag = false;
            eSituation["OtherAssociatedSymptoms"] = arr3.slice(0);;
            eSituation["dSituation.10"] = arr1.slice(0);
            v2Array.push({ section: "E09", element: "E09_14", val: arr2.slice(0);});
        }; 

    /////////eSituation.11
        _val = getValue(businessObject.elements, "eSituation.11");
        if (_val == null)
        {         
            eSituation["dSituation.11"] = v3NOT_RECORDED;
            eSituation["ProviderPrimaryImpression"] = NOT_RECORDED;
            v2Array.push({ section: "E09", element: "E09_15", val: v2NOT_RECORDED });

        }
        else 
        {
            isNotApplicableFlag = false;
            eSituation["dSituation.11"] = _val[0];
            eSituation["ProviderPrimaryImpression"] = _val[0];
            v2Array.push({ section: "E09", element: "E09_15", val: _val });
         
        }; 


        /////////eSituation.12
        _val = getValue(businessObject.elements, "eSituation.12");
        if (_val == null)
        {
            eSituation["dSituation.12"] = v3NOT_RECORDED;
            eSituation["ProviderSecondaryImpressions"] = NOT_RECORDED;
            v2Array.push({ section: "E09", element: "E09_16", val: v2NOT_RECORDED });
        }
        else 
        {
            isNotApplicableFlag = false;
            eSituation["ProviderSecondaryImpressions"] = _val[0];
            eSituation["dSituation.12"] = _val[0];
            v2Array.push({ section: "E09", element: "E09_16", val: _val[0] });
        }; 

    /////////eSituation.13
        _val = getValue(businessObject.elements, "dSituation.13");
        if (_val == null)
        {
            eSituation["dSituation.13"] = v3NOT_RECORDED;                 
            eSituation["InitialPatientAcuity"] = NOT_RECORDED;                 
        }
        else 
        {
            isNotApplicableFlag = false;
            eSituation["dSituation.13"] = _val[0];
            eSituation["InitialPatientAcuity"] = setCodeText("dSituation.13", _val[0]);                 
        }; 

    /////////eSituation.14
        _val = getValue(businessObject.elements, "eSituation.14");
        if (_val == null)
        {
            if (isRequiredStateElement("eSituation.14"))
            {
                eSituation["dSituation.14"] = v3NOT_RECORDED;
                eSituation["WorkRelatedIllnessInjury"] = NOT_RECORDED;
                v2Array.push({ section: "E07", element: "E07_15", val: v2NOT_RECORDED });
            }
            else
            {
                eSituation["dSituation.14"] = v3NOT_REPORTING;
                eSituation["WorkRelatedIllnessInjury"] = NOT_REPORTING;
                v2Array.push({ section: "E07", element: "E07_15", val: v2NOT_REPORTING });
            }
        }
        else
        {
            isNotApplicableFlag = false;
            eSituation["dSituation.14"] = _val[0];
            eSituation["WorkRelatedIllnessInjury"] = setCodeText("eSituation.14", _val[0]);
            v2Array.push({ section: "E07", element: "E07_15", val: setV2("eSituation.14", _val[0]) });
        };
      
    /////////eSituation.15
        _val = getValue(businessObject.elements, "eSituation.15");
        if (_val == null)
        {
            v2Array.push({ section: "E07", element: "E07_16", val: null });
            eSituation["dSituation.15"] = null;
            eSituation["PatientOccupationalIndustry"] = null;
        }
        else 
        {
            isNotApplicableFlag = false;
            eSituation["PatientOccupationalIndustry"] = setCodeText("eSituation.15", _val[0]);
            eSituation["dSituation.15"] = _val;
            v2Array.push({ section: "E07", element: "E07_16", val: setV2("eSituation.15", _val[0]) });
           
        }; 


        /////////eSituation.16
        _val = getValue(businessObject.elements, "eSituation.16");
        if (_val == null)
        {
            v2Array.push({ section: "E07", element: "E07_17", val: null });
            eSituation["dSituation.17"] = _val[0];
            eSituation["PatientOccupation"] = _val[0];
        }
        else 
        {
            isNotApplicableFlag = false;
            eSituation["PatientOccupation"] =setCodeText("eSituation.16", _val[0]);
            v2Array.push({ section: "E07", element: "E07_17", val: setV2("eSituation.16", _val[0]) });
            eSituation["dSituation.16"] = _val;
        }; 


    /////////eSituation.17
        _val = getValue(businessObject.elements, "eSituation.17");
        if (_val == null)
        {
            if(isRequiredStateElement("eSituation.17"))
            {
                eSituation["dSituation.17"] = v3NOT_RECORDED;
                eSituation["PatientActivity"] = NOT_RECORDED;
            }            
            else
            {
                OLAPArray.push('\t\t' + "<PatientActivity>" + "NOT REPORTING" + "</PatientActivity>" + '\n');
                _retArray.push('\t' + "<eSituation.17" + NIL_V3NOT_REPORTING + '\n');
                eSituation["dSituation.17"] = v3NOT_REPORTING;
                eSituation["PatientActivity"] = NOT_REPORTING;
            }
        }
        else 
        {
            var arr1 = [];
            for (var i = 0; i < _val.length; i++)
            {
                arr1.push(_val[i]);
            }
            isNotApplicableFlag = false;
            eSituation["PatientActivity"] = arr1.slice(0);    
            eSituation["dSituation.17"] = arr1.slice(0);    
            _retArray.push('\t' + "<eSituation.17>" + arr1.slice(0) + "</eSituation.17>" + '\n');                
        }
        };
    //end of function   



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
    "H53.14":"1570",
    "R11.10":"1570",
    "R11.12":"1570",
    "R14.2":"1570",
    "R14.3":"1570",
    "R15":"1570",
    "R63.1":"1570",
    "R63.3":"1570",
    "R63.4":"1570",
    "R63.5":"1570",
    "R64":"1570",
    "K92.0":"1570",
    "R11.0":"1570",
    "R14.0":"1570",
    "R63.0":"1570",
    "R68.2":"1570",
    "R11.0":"1570",
};
/*

  <!-- This pattern validates consistency between the presence of possible injury and the 
       presence of elements that are only collected in possible injury cases. The elements in 
       the eInjury section should only be recorded when (and only when) eSituation.02 Possible 
       Injury is "Yes". -->

  <sch:title>When eSituation.02 Possible Injury is "Yes", elements in the eInjury section are recorded, and when eSituation.02 Possible Injury is not "Yes", elements in the eInjury section are not recorded.</sch:title>

  <sch:rule id="nemSch_consistency_eInjury_all" context="nem:eInjury[../nem:eSituation/nem:eSituation.02 = '9922005']">

    <!-- This rule fires when eSituation.02 Possible Injury is "Yes". -->

 */