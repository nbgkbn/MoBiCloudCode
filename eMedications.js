var ErrorList = [];
var v3NOT_REPORTING = " NV=\"7701005\"";
var v3NOT_RECORDED = " NV=\"7701003\"";
var v3NOT_APPLICABLE= " NV=\"7701001\"";
var v2NOT_AVAILABLE = "-5";
var v2NOT_REPORTING = "-15";
var v2NOT_APPLICABLE = "-25"
var v2NOT_RECORDED = "-20";
var v2NOT_KNOWN = "-10";
var NIL_V3NOT_RECORDED =  "NV=\"7701003\" xsi:nil=\"true\"/>" ;
var NIL_V3NOT_REPORTING = "NV=\"7701005\" xsi:nil=\"true\"/>" ;
var NIL_V3NOT_APPLICABLE ="NV=\"7701001\" xsi:nil=\"true\"/>" ;
var PN_REFUSED_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801019\"/>";
var PN_CONTRA_INDICATION_NOTED= "xsi:nil=\"true\" PN=\"8801001\"/>";
var PN_DENIED_BY_ORDER= "xsi:nil=\"true\" PN=\"8801003\"/>";
var PN_FINDING_NOT_PRESENT_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801005\"/>";
var PN_MEDICATION_ALLERGY= "xsi:nil=\"true\" PN=\"8801007\"/>";
var PN_MEDICATION_ALREADY_TAKEN= "xsi:nil=\"true\" PN=\"8801009\"/>";
var PN_REFUSED_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801019\"/>";
var PN_UNABLE_TO_COMPLETE_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801023\"/>";

var FAX= "PhoneNumberType=\"9913001\"";
var HOME= "PhoneNumberType=\"9913003\"";
var MOBILE= "PhoneNumberType=\"9913005\"";
var PAGER= "PhoneNumberType=\"9913007\"";
var WORD= "PhoneNumberType=\"9913009\"";
var PERSONALEMAIL= "EmailAddressType=\"9904001\"";
var WORKEMAIL= "EmailAddressType=\"9904003\"";


var _retArray = [];

var seteMedication = function (businessObject) 
{
    if(typeof businessObject == undefined)
    {
        SetNotApplicable();
        return _retArray;
    }
    _retArray.push("<eMedications>");

    for (var i = 0; i < businessObject.sections.length ; i++)
    {
        var elementList = businessObject.sections[xx].attributes.elements;
        _retArray.push('/t' + "<eMedications.MedicationGroup>");

        //eMedications.01////////
        _val = getValue(elementList, "eMedications.01");
        if (_val == null)
        {
            OLAPArray.push('\t\t\t' + "<DateTimeMedicationAdministered>" + "NOT_RECORDED" + "</DateTimeMedicationAdministered>" + '\n');
            _retArray.push('/t/t' + "<eMedications.01" + NIL_V3NOT_RECORDED );
            MedicationGroup["eMedications.01"] = V3NOT_RECORDED;
            v2Array.push({ section: "E18", element: "E18_01", val: V2NOT_RECORDED });
        }        
        else 
        {
            OLAPArray.push('\t\t\t' + "<DateTimeMedicationAdministered>" + _val + "</DateTimeMedicationAdministered>" + '\n');
            MedicationGroup["eMedications.01"] = _val;
            v2Array.push({ section: "E18", element: "E18_01", val: _val });
            _retArray.push('/t/t' + "<eMedications.01>" + _val + "</eMedications.01>");
        }; 

        //eMedications.02////////
        _val = getValue(elementList, "eMedications.02");
        if (_val == null)
        {
            OLAPArray.push('\t\t\t' + "<MedicationAdministeredPriortothisUnitEMSCare>" + "NOT_RECORDED" + "</MedicationAdministeredPriortothisUnitEMSCare>" + '\n');
            _retArray.push('/t/t' + "<eMedications.02" + NIL_V3NOT_RECORDED );
            v2Array.push({ section: "E18", element: "E18_02", val: V2NOT_RECORDED });
            MedicationGroup["eMedications.02"] = V3NOT_RECORDED;
        }        
        else 
        {
            OLAPArray.push('\t\t\t' + "<MedicationAdministeredPriortothisUnitEMSCare>" +setCodeText("eMedications.02", _val[i]) + "</MedicationAdministeredPriortothisUnitEMSCare>" + '\n');
            MedicationGroup["eMedications.02"] = _val;             
            _retArray.push('/t/t' + "<eMedications.02>" + _val + "</eMedications.02>");
            v2Array.push({ section: "E18", element: "E18_02", val: SetD2("eMedications.02", _val) });
        }; 

        //eMedications.03////////
        _val = getValue(elementList, "eMedications.03");
        if (_val == null)
        {
            if(isRequiredStateElement("eMedications.03"))
            {
                _retArray.push('/t/t' + "<eMedications.03" + NIL_V3NOT_RECORDED );
                E18.E18_03	= v2NOT_RECORDED;
            }
            else 
            {
                if(_val == 8801001)
                {   
                    OLAPArray.push('\t\t\t' + "<MedicationGiven>"+ PN_CONTRA_INDICATION_NOTED + _val + "</MedicationGiven>" + '\n');
                    _retArray.push('/t/t' + "<eMedications.03" + PN_CONTRA_INDICATION_NOTED + _val + "</eMedications.03>" + '\n');
                }
                else if(_val == 8801003)
                {
                    _retArray.push('/t/t' + "<eMedications.03" + PN_DENIED_BY_ORDER + _val + "</eMedications.03>" + '\n');
                    OLAPArray.push('\t\t\t' + "<MedicationGiven>"+ PN_DENIED_BY_ORDER + _val + "</MedicationGiven>" + '\n');

                }
                else if(_val == 8801007)
                {
                    _retArray.push('/t/t' + "<eMedications.03" + PN_MEDICATION_ALLERGY + _val + "</eMedications.03>" + '\n');
                    OLAPArray.push('\t\t\t' + "<MedicationGiven>"+ PN_MEDICATION_ALLERGY + _val + "</MedicationGiven>" + '\n');

                }
                else if(_val == 8801009)
                {
                    _retArray.push('/t/t' + "<eMedications.03" + PN_MEDICATION_ALREADY_TAKEN + _val + "</eMedications.03>" + '\n');
                    OLAPArray.push('\t\t\t' + "<MedicationGiven>"+ PN_MEDICATION_ALREADY_TAKEN + _val + "</MedicationGiven>" + '\n')
                }
                else if(_val == 8801019)
                {
                    _retArray.push('/t/t' + "<eMedications.03" + PN_REFUSED_IS_NILLABLE + _val + "</eMedications.03>" + '\n');
                    OLAPArray.push('\t\t\t' + "<MedicationGiven>"+ PN_REFUSED_IS_NILLABLE + _val + "</MedicationGiven>" + '\n')
                }
                else if(_val == 8801023)
                {
                    _retArray.push('/t/t' + "<eMedications.03" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE + _val + "</eMedications.03>" + '\n');
                    OLAPArray.push('\t\t\t' + "<MedicationGiven>"+ PN_UNABLE_TO_COMPLETE_IS_NILLABLE + _val + "</MedicationGiven>" + '\n')                    
                }
                else
               
                ePatient["eMedications.03"]  = _val;
                E18.E18_03 = _val[0];
                _retArray.push('/t/t' + "<eMedications.03>" + val + "</eMedications.03>");
                OLAPArray.push('\t\t\t' + "<MedicationGiven>"+ _val + "</MedicationGiven>" + '\n')                    
            }; 

            //eMedication.04////////
            _val = getValue(elementList, "eMedications.04");
            if (_val == null)
            {
                if(isRequiredStateElement("eMedications.04"))
                {
                    OLAPArray.push('\t\t\t' + "<MedicationAdministeredRoute>" + "NOT RECORDED" + "</MedicationAdministeredRoute>" + '\n');
                    _retArray.push('/t/t' + "<eMedications.04" + NIL_V3NOT_RECORDED );
                    eMedication["eMedications.04"] = V3NOT_RECORDED;
                    v2Array.push({ section: "E18", element: "E18_04", val: V2NOT_RECORDED });
                }            
                else
                {
                    OLAPArray.push('\t\t\t' + "<MedicationAdministeredRoute>" + "NOT REPORTING" + "</MedicationAdministeredRoute>" + '\n');
                    _retArray.push('/t/t' + "<eMedications.04" + NIL_V3NOT_REPORTING );
                    eMedication["eMedications.04"] = v3NOT_REPORTING;
                    v2Array.push({ section: "E18", element: "E18_04", val: v2NOT_REPORTING });
                }
            }
            else 
            {
                OLAPArray.push('\t\t\t' + "<MedicationAdministeredRoute>" +setCodeText("eMedications.04", _val) + "</MedicationAdministeredRoute>" + '\n');
                eMedication["eMedications.04"] = _val;
                v2Array.push({ section: "E18", element: "E18_04", val:  SetD2("eMedications.04",_val)});
                _retArray.push('/t/t' + "<eMedications.04>" + _val + "</eMedications.04>");
            }; 
        

            _retArray.push('/t/t' + "<DosageGroup>");
            OLAPArray.push('/t/t' + "<DosageGroup>");
              
            //eMedication.05/////////////
            _val = getValue(elementList, "eMedications.05");
            if (_val == null) 
            {
                OLAPArray.push('\t\t\t' + "<MedicationDosage>" + "NOT RECORDED" + "</MedicationDosage>" + '\n');
                _retArray.push('/t/t' + "<eMedications.05" + NIL_V3NOT_RECORDED );
                eMedication["eMedications.05"] = V3NOT_RECORDED;
                v2Array.push({ section: "E18", element: "E18_05", val: V2NOT_RECORDED });
            }
            else 
            {
                _retArray.push('/t/t/t' + "<eMedications.05>" + _val + "</eMedications.05>");
                v2Array.push({ section: "E18", element: "E18_05", val: _val });
                eMedicationGroup["eMedications.05"] = _val;
                eMedication["eMedications.05"] = _val;
            };

            //eMedication.06//////////////
            _val = getValue(elementList, "eMedications.06");
            if (_val == null) 
            {
                OLAPArray.push('\t\t\t' + "<MedicationDosageUnits>" + "NOT RECORDED" + "</MedicationDosageUnits>" + '\n');
                _retArray.push('/t/t' + "<eMedications.06" + NIL_V3NOT_RECORDED );
                eMedication["eMedications.06"] = V3NOT_RECORDED;
                v2Array.push({ section: "E18", element: "E18_08", val: V2NOT_RECORDED });

            }
            else 
            {
                OLAPArray.push('\t\t\t' + "<MedicationDosageUnits>" +setCodeText("eMedications.06", _val) + "</MedicationDosageUnits>" + '\n');
                _retArray.push('/t/t/t' + "<eMedications.06>" + _val + "</eMedications.06>")                
                v2Array.push({ section: "E18", element: "E18_06", val: SetD2("eMedications.06",_val) });
                eMedicationGroup["eMedications.06"] = _val;                
            };

            _retArray.push('/t/t' + "</DosageGroup>");
            OLAPArray.push('/t/t' + "</DosageGroup>");

            //eMedications.07/////////////////
            _val = getValue(elementList, "eMedications.07");
            if (_val == null) 
            {
                OLAPArray.push('\t\t\t' + "<ResponsetoMedication>" + "NOT RECORDED" + "</ResponsetoMedication>" + '\n');
                _retArray.push('/t/t' + "<eMedications.07" + NIL_V3NOT_RECORDED );
                eMedication["eMedications.07"] = V3NOT_RECORDED;
                v2Array.push({ section: "E18", element: "E18_07", val: V2NOT_RECORDED });

            }
            else 
            {
                OLAPArray.push('\t\t\t' + "<ResponsetoMedication>" +setCodeText("eMedications.07", _val) + "</ResponsetoMedication>" + '\n');
                _retArray.push('/t/t' + "<eMedications.07>" + _val + "</eMedications.07>")
                v2Array.push({ section: "E18", element: "E18_07", val: SetD2("eMedications.07",_val) });
                eMedicationGroup["eMedications.07"] = _val;
            };

            //eMedications.08////////////
            _val = getValue(elementList, "eMedications.08");
            if (_val == null) 
            {
                OLAPArray.push('\t\t\t' + "<MedicationComplication>" + "NOT RECORDED" + "</MedicationComplication>" + '\n');
                _retArray.push('/t/t' + "<eMedications.08" + NIL_V3NOT_RECORDED );
                eMedication["eMedications.08"] = V3NOT_RECORDED;
                v2Array.push({ section: "E18", element: "E18_08", val: V2NOT_RECORDED });
            }
            else {
                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _val.length; i++) 
                {
                    arr1[i]=_val[i];
                    v2Array.push({ section: "E18", element: "E18_08", val: SetV2("eMedications.08", _val[i]) });
                    _retArray.push('/t/t' + "<eMedications.08>" + _val[i] + "</eMedications.08>");
                    OLAPArray.push('\t\t\t' + "<MedicationComplication>" +setCodeText("eMedications.07", _val) + "</MedicationComplication>" + '\n');
                }
                eMedicationGroup["eMedications.08"] = arr1.slice(0);
            };
     

            //eMedications.09//////////////
            _val = getValue(elementList, "eMedications.09");
            if (_val == null)
            {
                if(isRequiredStateElement("eMedications.09"))
                {
                    OLAPArray.push('\t\t\t' + "<HealthcareProfessionalID>" + "NOT RECORDED" + "</HealthcareProfessionalID>" + '\n');
                    _retArray.push('/t/t' + "<eMedications.09" + NIL_V3NOT_RECORDED );
                    eMedicationGroup["eMedications.09"] = V3NOT_RECORDED;
                    v2Array.push({ section: "E18", element: "E18_09", val: V2NOT_RECORDED });
                }            
                else
                {
                    OLAPArray.push('\t\t\t' + "<HealthcareProfessionalID>" + "NOT REPORTING" + "</HealthcareProfessionalID>" + '\n');
                    _retArray.push('/t/t' + "<eMedications.09" + NIL_V3NOT_REPORTING );
                    eMedicationGroup["eMedications.09"] = v3NOT_REPORTING;
                    v2Array.push({ section: "E18", element: "E18_09", val: v2NOT_REPORTING });
                }
            }
            else 
            {
                OLAPArray.push('\t\t\t' + "<HealthcareProfessionalID>" + _val + "</HealthcareProfessionalID>" + '\n');
                eMedicationGroup["eMedications.09"] = _val;
                v2Array.push({ section: "E18", element: "E18_09", val: SetD2("eMedications.09",_val) });                
                _retArray.push('/t/t' + "<eMedications.09>" + _val + "</eMedication.09>");
            }; 

            //eMedications.10////////////
            _val = getValue(elementList, "eMedications.10");
            if (_val == null) 
            {
                OLAPArray.push('\t\t\t' + "<RoleTypeofPersonAdministeringMedication>" + "NOT RECORDED" + "</RoleTypeofPersonAdministeringMedication>" + '\n');
                _retArray.push('/t/t' + "<eMedications.10" + NIL_V3NOT_RECORDED);
                eMedicationGroup["eMedications.10"] =V3NOT_RECORDED;
            }
            else 
            {
                OLAPArray.push('\t\t\t' + "<RoleTypeofPersonAdministeringMedication>" + setCodeText("eMedications.10", _val) + "</RoleTypeofPersonAdministeringMedication>" + '\n');
                _retArray.push('/t/t' + "<eMedications.10>" + _val + "</eMedication.10>")
                eMedicationGroup["eMedications.10"] = _val;
            };

            //eMedications.11///////////
            _val = getValue(elementList, "eMedications.11");
            if (_val == null) 
            {
                OLAPArray.push('\t\t\t' + "<MedicationAuthorization>" + null + "</MedicationAuthorization>" + '\n');
                _retArray.push('/t/t' + "<eMedications.11>" + null + "</eMedication.11>")
                eMedicationGroup["eMedications.11"] =null;
                v2Array.push({ section: "E18", element: "E18_10", val: null });                
            }
            else 
            {
                OLAPArray.push('\t\t\t' + "<MedicationAuthorization>" + setCodeText("eMedications.11", _val) + "</MedicationAuthorization>" + '\n');
                _retArray.push('/t/t' + "<eMedications.11>" + _val + "</eMedications.11>")
                v2Array.push({ section: "E18", element: "E18_10", val: SetD2("eMedications.11",_val) });                
                eMedicationGroup["eMedications.11"] = _val;
            };

            //eMedications.12/////////////
            _val = getValue(elementList, "eMedications.12");
            if (_val == null) 
            {
                OLAPArray.push('\t\t\t' + "<MedicationAuthorizingPhysician>" + null + "</MedicationAuthorizingPhysician>" + '\n');
                _retArray.push('/t/t' + "<eMedications.11>" + null + "</eMedication.11>")
                eMedicationGroup["eMedications.12"] =null;
                v2Array.push({ section: "E18", element: "E18_11", val: null });                
            }
            else 
            {
                _retArray.push('/t/t' + "<eMedications.12>" + _val + "</eMedications.12>")
                OLAPArray.push('\t\t\t' + "<MedicationAuthorizingPhysician>" + _val + "</MedicationAuthorizingPhysician>" + '\n');
                v2Array.push({ section: "E18", element: "E18_11", val: _val });                
                eMedicationGroup["eMedications.12"] = _val;
            };

            _retArray.push('/t' + "</eMedications.MedicationGroup>");
            OLAPArray.push('/t' + "</eMedications.MedicationGroup>");
    }
        OLAPArray.push = "</eMedications>";
        _retArray.push = "</eMedications>";
};

var setNotApplicable = function(elementID)
{
    _retArray.push("<eMedication.03" + NIL_V3NOT_APPLICABLE );
    ePatient["eMedication.03"] = v3NOT_APPLICABLE;
    E18.E18_03	= v2NOT_APPLICABLE;

    _retArray.push("<eMedication.04" + NIL_V3NOT_APPLICABLE );
    eMedication["eMedication.04"] = v3NOT_APPLICABLE;
    E18.E18_04  =  v2NOT_APPLICABLE;

    _retArray.push("<eMedication.05" + NIL_V3NOT_APPLICABLE );
    eMedication["eMedication.05"] = v3NOT_APPLICABLE;
    E18.E18_05  =  v2NOT_APPLICABLE;

    _retArray.push("<eMedication.06" + NIL_V3NOT_APPLICABLE );
    eMedication["eMedication.06"] = v3NOT_APPLICABLE;
    E18.E18_06  =  v2NOT_APPLICABLE;

    _retArray.push("<eMedication.07" + NIL_V3NOT_APPLICABLE );
    eMedication["eMedication.07"] = v3NOT_APPLICABLE;
    E18.E18_07  =  v2NOT_APPLICABLE;

    _retArray.push("<eMedication.08" + NIL_V3NOT_APPLICABLE );
    eMedication["eMedication.08"] = v3NOT_APPLICABLE;
    E18.E18_08  =  v2NOT_APPLICABLE;

    _retArray.push("<eMedication.09" + NIL_V3NOT_APPLICABLE );
    eExam["eMedication.09"] = v3NOT_APPLICABLE;
    E18.E18_09   =  v2NOT_APPLICABLE;

    _retArray.push("<eMedication.10" + NIL_V3NOT_APPLICABLE );
    eExam["eMedication.10"] = v3NOT_APPLICABLE;

}
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
        case "eMedication.02":

            if (eMedication02[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eMedication02[valueArray[0]]);
            }
            break;
        case "eMedication.04":

            if (eMedication04[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eMedication04[valueArray[0]]);
            }
            break;
        case "eMedication.06":
            for (i = 0; i < valueArray.length; i++) {
                if (eMedication06[valueArray[i]] == undefined) {
                    _retArray.push(valueArray[i] + "UNDEFINED");
                }
                else {
                    _retArray.push(eMedication06[valueArray[i]]);
                }
            }
            break;
        case "eMedication.07":
            for (i = 0; i < valueArray.length; i++) {
                if (eMedication07[valueArray[i]] == undefined) {
                    _retArray.push(valueArray[i] + "UNDEFINED");
                }
                else {
                    _retArray.push(eMedication07[valueArray[i]]);
                }
            }
            break;
        case "eMedication.08":
            for (i = 0; i < valueArray.length; i++) {
                if (eMedication08[valueArray[i]] == undefined) {
                    _retArray.push(valueArray[i] + "UNDEFINED");
                }
                else {
                    _retArray.push(eMedication08[valueArray[i]]);
                }
            }
            break;
        case "eMedication.11":
            for (i = 0; i < valueArray.length; i++) {
                if (eMedication11[valueArray[i]] == undefined) {
                    _retArray.push(valueArray[i] + "UNDEFINED");
                }
                else {
                    _retArray.push(eMedication11[valueArray[i]]);
                }
            }
            break;

        default:
            _retArray.push(NEMSISElementNumber = " version 2 not found");
    }

    return _retArray;

};
var eMedication02 = {
    "9923001":"0",
    "9923003":"1"
};

var eMedication04 = {
    "9927001":"4185",
    "9927003":"4230",
    "9927005":"4175",
    "9927007":"4180",
    "9927009":"4185",
    "9927011":"4205",
    "9927013":"4205",
    "9927015":"4190",
    "9927017":"4210",
    "9927019":"4200",
    "9927021":"4191",
    "9927023":"4205",
    "9927025":"4210",
    "9927027":"4220",
    "9927029":"4220",
    "9927031":"4285",
    "9927033":"4225",
    "9927035":"4230",
    "9927037":"4235",
    "9927039":"4240",
    "9927041":"4245",
    "9927043":"4250",
    "9927045":"4255",
    "9927047":"4260",
    "9927049":"4265",
    "9927051":"4270",
    "9927053":"4275",
    "9927055":"4280",
    "9927057":"4285",
    "9927059":"4290"
    };

var eMedications06 ={
    "3706001":"4295",
    "3706003":"4300",
    "3706005":"4305",
    "3706007":"4310",
    "3706009":"4320",
    "3706011":"4315",
    "3706013":"4370",
    "3706015":"4330",
    "3706017":"4335",
    "3706019":"4340",
    "3706021":"4345",
    "3706023":"4350",
    "3706025":"4355",
    "3706027":"4360",
    "3706029":"4365"
    
    }

var eMedications07 = {
    "9916001":"4375",
    "9916003":"4380",
    "9916005":"4385"
};

var eMedications08 = {
    "3708001":"4395",
    "3708003":"4400",
    "3708005":"4405",
    "3708007":"4410",
    "3708009":"4465",
    "3708011":"4415",
    "3708013":"4420",
    "3708015":"4425",
    "3708017":"4430",
    "3708019":"4435",
    "3708021":"4460",
    "3708023":"4440",
    "3708025":"4445",
    "3708027":"4450",
    "3708029":"4455",
    "3708031":"4390",
    "3708033":"4460",
    "3708035":"4465",
    "3708037":"4470",
    "3708039":"4465",
    "3708041":"4475",
    "3708043":"4450",
    "3708045":"4450"
};

var eMedications11 = {
    "9918001":"4480",
    "9918003":"4485",
    "9918005":"4490",
    "9918007":"4495"
};

