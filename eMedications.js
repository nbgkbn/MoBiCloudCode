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
    _retArray.push("<eMedications>"+ '\n');
    OLAPArray.push("<eMedications>"+ '\n');

    for (var i = 0; i < businessObject.sections.length ; i++)
    {
        var elementList = businessObject.sections[xx].attributes.elements;
        _retArray.push('\t' + "<eMedications.MedicationGroup>"+ '\n');
        OLAPArray.push('\t' + "<eMedications.MedicationGroup>"+ '\n');

        //eMedications.01////////
        _val = getValue(elementList, "eMedications.01");
        if (_val == null)
        {
            OLAPArray.push('\t\t' + "<DateTimeMedicationAdministered>" + "NOT_RECORDED" + "</DateTimeMedicationAdministered>" + '\n');
            _retArray.push('\t\t' + "<eMedications.01" + NIL_V3NOT_RECORDED + '\n');
            MedicationGroup["eMedications.01"] = V3NOT_RECORDED;
            v2Array.push({ section: "E18", element: "E18_01", val: V2NOT_RECORDED });
        }        
        else 
        {
            OLAPArray.push('\t\t' + "<DateTimeMedicationAdministered>" + _val + "</DateTimeMedicationAdministered>" + '\n');
            MedicationGroup["eMedications.01"] = _val;
            v2Array.push({ section: "E18", element: "E18_01", val: _val });
            _retArray.push('\t\t' + "<eMedications.01>" + _val + "</eMedications.01>"+ '\n');
        }; 

        //eMedications.02////////
        _val = getValue(elementList, "eMedications.02");
        if (_val == null)
        {
            OLAPArray.push('\t\t' + "<MedicationAdministeredPriortothisUnitEMSCare>" + "NOT_RECORDED" + "</MedicationAdministeredPriortothisUnitEMSCare>" + '\n');
            _retArray.push('\t\t' + "<eMedications.02" + NIL_V3NOT_RECORDED + '\n');
            v2Array.push({ section: "E18", element: "E18_02", val: V2NOT_RECORDED });
            MedicationGroup["eMedications.02"] = V3NOT_RECORDED;
        }        
        else 
        {
            OLAPArray.push('\t\t' + "<MedicationAdministeredPriortothisUnitEMSCare>" +setCodeText("eMedications.02", _val[i]) + "</MedicationAdministeredPriortothisUnitEMSCare>" + '\n');
            MedicationGroup["eMedications.02"] = _val;             
            _retArray.push('\t\t' + "<eMedications.02>" + _val + "</eMedications.02>"+ '\n');
            v2Array.push({ section: "E18", element: "E18_02", val: SetD2("eMedications.02", _val) });
        }; 

        //eMedications.03////////
        _val = getValue(elementList, "eMedications.03");
        PNValue = getPertinentNegative("eMedications.03")
        if (PNValue != null) {
            _val = null;
            if (PNValue == "8801001") {
                MedicationGroup["eMedications.03"] = "8801001";
                v2Array.push({ section: "E18", element: "E18_03", val: v2NOT_KNOWN });
                OLAPArray.push('\t\t' + "<MedicationGiven>" + "Contraindication Noted  " + _val + "</MedicationGiven>" + '\n');
                _retArray.push('\t\t' + "<eMedications.03" + PN_CONTRA_INDICATION_NOTED + _val + "</eMedications.03>" + '\n');
            }
            else if (_val == "8801003") {
                MedicationGroup["eMedications.03"] = "8801003";
                v2Array.push({ section: "E18", element: "E18_03", val: v2NOT_KNOWN });
                _retArray.push('\t\t' + "<eMedications.03" + PN_DENIED_BY_ORDER + _val + "</eMedications.03>" + '\n');
                OLAPArray.push('\t\t' + "<MedicationGiven>" + " Denied By Order " + _val + "</MedicationGiven>" + '\n');

            }
            else if (_val == "8801007") {
                MedicationGroup["eMedications.03"] = "8801007";
                v2Array.push({ section: "E18", element: "E18_03", val: v2NOT_KNOWN });
                _retArray.push('\t\t' + "<eMedications.03" + PN_MEDICATION_ALLERGY + _val + "</eMedications.03>" + '\n');
                OLAPArray.push('\t\t' + "<MedicationGiven>" + "Medication Allergy " + _val + "</MedicationGiven>" + '\n');

            }
            else if (_val == "8801009") {
                MedicationGroup["eMedications.03"] = "8801009";
                v2Array.push({ section: "E18", element: "E18_03", val: v2NOT_KNOWN });
                _retArray.push('\t\t' + "<eMedications.03" + PN_MEDICATION_ALREADY_TAKEN + _val + "</eMedications.03>" + '\n');
                OLAPArray.push('\t\t' + "<MedicationGiven>" + " Medication Already Taken  " + _val + "</MedicationGiven>" + '\n')
            }
            else if (_val == "8801019") {

                MedicationGroup["eMedications.03"] = "8801019";
                v2Array.push({ section: "E18", element: "E18_03", val: v2NOT_KNOWN });
                _retArray.push('\t\t' + "<eMedications.03" + PN_REFUSED_IS_NILLABLE + _val + "</eMedications.03>" + '\n');
                OLAPArray.push('\t\t' + "<MedicationGiven>" + " Refused "+ _val + "</MedicationGiven>" + '\n')
            }
            else if (_val == "8801023") {
                MedicationGroup["eMedications.03"] = "8801023";
                v2Array.push({ section: "E18", element: "E18_03", val: v2NOT_KNOWN });
                _retArray.push('\t\t' + "<eMedications.03" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE + _val + "</eMedications.03>" + '\n');
                OLAPArray.push('\t\t' + "<MedicationGiven>" + "Unable to Complete " + _val + "</MedicationGiven>" + '\n')
            }
        }
                
        if (_val == null)
        {           
            if (isRequiredStateElement("eMedications.03"))
            {
                MedicationGroup["eMedications.03"] = v3NOT_RECORDED;
                v2Array.push({ section: "E18", element: "E18_03", val: v2NOT_RECORDED });
                _retArray.push('\t\t' + "<eMedications.03" + NIL_V3NOT_RECORDED + '\n');
                OLAPArray.push('\t\t' + "NOT RECORDED " + "</MedicationGiven>" + '\n')
            }
            else
            {
                MedicationGroup["eMedications.03"] = null;
                v2Array.push({ section: "E18", element: "E18_03", val: null });
                _retArray.push('\t\t' + "<eMedications.03>" + null + "</eMedications.03>" + '\n');
                OLAPArray.push('\t\t' + null + "</MedicationGiven>" + '\n')
            }
        }
        else
        {
            MedicationGroup["eMedications.03"] = _val;
            v2Array.push({ section: "E18", element: "E18_03", val: _val });
            _retArray.push('\t\t' + "<eMedications.03>" + _val + "</eMedications.03>" + '\n');
            OLAPArray.push('\t\t' + "<MedicationGiven>"+ _val + "</MedicationGiven>" + '\n')                    
        }; 

        //eMedication.04////////
        _val = getValue(elementList, "eMedications.04");
        if (_val == null)
        {
            if(isRequiredStateElement("eMedications.04"))
            {
                OLAPArray.push('\t\t' + "<MedicationAdministeredRoute>" + "NOT RECORDED" + "</MedicationAdministeredRoute>" + '\n');
                _retArray.push('\t\t' + "<eMedications.04" + NIL_V3NOT_RECORDED + '\n');
                MedicationGroup["eMedications.04"] = V3NOT_RECORDED;
                v2Array.push({ section: "E18", element: "E18_04", val: V2NOT_RECORDED });
            }            
            else
            {
                OLAPArray.push('\t\t' + "<MedicationAdministeredRoute>" + "NOT REPORTING" + "</MedicationAdministeredRoute>" + '\n');
                _retArray.push('\t\t' + "<eMedications.04" + NIL_V3NOT_REPORTING + '\n');
                MedicationGroup["eMedications.04"] = v3NOT_REPORTING;
                v2Array.push({ section: "E18", element: "E18_04", val: v2NOT_REPORTING });
            }
        }
        else 
        {
            OLAPArray.push('\t\t' + "<MedicationAdministeredRoute>" +setCodeText("eMedications.04", _val) + "</MedicationAdministeredRoute>" + '\n');
            MedicationGroup["eMedications.04"] = _val;
            v2Array.push({ section: "E18", element: "E18_04", val:  SetD2("eMedications.04",_val)});
            _retArray.push('\t\t' + "<eMedications.04>" + _val + "</eMedications.04>"+ '\n');
        }; 
        

            _retArray.push('\t\t' + "<DosageGroup>"+ '\n');
            OLAPArray.push('\t\t' + "<DosageGroup>"+ '\n');
              
            //eMedication.05/////////////
            _val = getValue(elementList, "eMedications.05");
            if (_val == null) 
            {
                OLAPArray.push('\t\t\t' + "<MedicationDosage>" + "NOT RECORDED" + "</MedicationDosage>" + '\n');
                _retArray.push('\t\t\t' + "<eMedications.05" + NIL_V3NOT_RECORDED + '\n');
                MedicationGroup["eMedications.05"] = V3NOT_RECORDED;
                v2Array.push({ section: "E18", element: "E18_05", val: V2NOT_RECORDED });
            }
            else 
            {
                OLAPArray.push('\t\t\t' + "<MedicationDosage>" + _val + "</MedicationDosage>" + '\n');
                _retArray.push('\t\t\t' + "<eMedications.05>" + _val + "</eMedications.05>"+ '\n');
                v2Array.push({ section: "E18", element: "E18_05", val: _val });
                MedicationGroup["eMedications.05"] = _val;
            };

            //eMedication.06//////////////
            _val = getValue(elementList, "eMedications.06");
            if (_val == null) 
            {
                OLAPArray.push('\t\t\t' + "<MedicationDosageUnits>" + "NOT RECORDED" + "</MedicationDosageUnits>" + '\n');
                _retArray.push('\t\t\t' + "<eMedications.06" + NIL_V3NOT_RECORDED + '\n');
                MedicationGroup["eMedications.06"] = V3NOT_RECORDED;
                v2Array.push({ section: "E18", element: "E18_08", val: V2NOT_RECORDED });

            }
            else 
            {
                OLAPArray.push('\t\t\t' + "<MedicationDosageUnits>" +setCodeText("eMedications.06", _val) + "</MedicationDosageUnits>" + '\n');
                _retArray.push('\t\t\t' + "<eMedications.06>" + _val + "</eMedications.06>"+ '\n')                
                v2Array.push({ section: "E18", element: "E18_06", val: SetD2("eMedications.06",_val) });
                MedicationGroup["eMedications.06"] = _val;
            };

            _retArray.push('\t\t' + "</DosageGroup>"+ '\n');
            OLAPArray.push('\t\t' + "</DosageGroup>"+ '\n');

            //eMedications.07/////////////////
            _val = getValue(elementList, "eMedications.07");
            if (_val == null) 
            {
                OLAPArray.push('\t\t' + "<ResponsetoMedication>" + "NOT RECORDED" + "</ResponsetoMedication>" + '\n');
                _retArray.push('\t\t' + "<eMedications.07" + NIL_V3NOT_RECORDED + '\n');
                MedicationGroup["eMedications.07"] = V3NOT_RECORDED;
                v2Array.push({ section: "E18", element: "E18_07", val: V2NOT_RECORDED });

            }
            else 
            {
                OLAPArray.push('\t\t' + "<ResponsetoMedication>" +setCodeText("eMedications.07", _val) + "</ResponsetoMedication>" + '\n');
                _retArray.push('\t\t' + "<eMedications.07>" + _val + "</eMedications.07>"+ '\n')
                v2Array.push({ section: "E18", element: "E18_07", val: SetD2("eMedications.07",_val) });
                MedicationGroup["eMedications.07"] = _val;
            };

            //eMedications.08////////////
            _val = getValue(elementList, "eMedications.08");
            if (_val == null) 
            {
                OLAPArray.push('\t\t' + "<MedicationComplication>" + "NOT RECORDED" + "</MedicationComplication>" + '\n');
                _retArray.push('\t\t' + "<eMedications.08" + NIL_V3NOT_RECORDED + '\n');
                MedicationGroup["eMedications.08"] = V3NOT_RECORDED;
                v2Array.push({ section: "E18", element: "E18_08", val: V2NOT_RECORDED });
            }
            else 
            {
                var arr1 = [];
                for (var i = 0; i < _val.length; i++) 
                {
                    arr1.push(_val[i]);
                    v2Array.push({ section: "E18", element: "E18_08", val: SetV2("eMedications.08", _val[i]) });
                    _retArray.push('\t\t' + "<eMedications.08>" + _val[i] + "</eMedications.08>"+ '\n');
                    OLAPArray.push('\t\t' + "<MedicationComplication>" +setCodeText("eMedications.07", _val) + "</MedicationComplication>" + '\n');
                }
                MedicationGroup["eMedications.08"] = arr1.slice(0);
            };
     

            //eMedications.09//////////////
            _val = getValue(elementList, "eMedications.09");
            if (_val == null)
            {
                if(isRequiredStateElement("eMedications.09"))
                {
                    OLAPArray.push('\t\t' + "<HealthcareProfessionalID>" + "NOT RECORDED" + "</HealthcareProfessionalID>" + '\n');
                    _retArray.push('\t\t' + "<eMedications.09" + NIL_V3NOT_RECORDED + '\n');
                    MedicationGroup["eMedications.09"] = V3NOT_RECORDED;
                    v2Array.push({ section: "E18", element: "E18_09", val: V2NOT_RECORDED });
                }            
                else
                {
                    OLAPArray.push('\t\t' + "<HealthcareProfessionalID>" + "NOT REPORTING" + "</HealthcareProfessionalID>" + '\n');
                    _retArray.push('\t\t' + "<eMedications.09" + NIL_V3NOT_REPORTING + '\n');
                    MedicationGroup["eMedications.09"] = v3NOT_REPORTING;
                    v2Array.push({ section: "E18", element: "E18_09", val: v2NOT_REPORTING });
                }
            }
            else 
            {
                OLAPArray.push('\t\t' + "<HealthcareProfessionalID>" + _val + "</HealthcareProfessionalID>" + '\n');
                MedicationGroup["eMedications.09"] = _val;
                v2Array.push({ section: "E18", element: "E18_09", val: SetD2("eMedications.09",_val) });                
                _retArray.push('\t\t' + "<eMedications.09>" + _val + "</eMedication.09>"+ '\n');
            }; 

            //eMedications.10////////////
            _val = getValue(elementList, "eMedications.10");
            if (_val == null) 
            {
                OLAPArray.push('\t\t' + "<RoleTypeofPersonAdministeringMedication>" + "NOT RECORDED" + "</RoleTypeofPersonAdministeringMedication>" + '\n');
                _retArray.push('\t\t' + "<eMedications.10" + NIL_V3NOT_RECORDED + '\n');
                MedicationGroup["eMedications.10"] = V3NOT_RECORDED;
            }
            else 
            {
                OLAPArray.push('\t\t' + "<RoleTypeofPersonAdministeringMedication>" + setCodeText("eMedications.10", _val) + "</RoleTypeofPersonAdministeringMedication>" + '\n');
                _retArray.push('\t\t' + "<eMedications.10>" + _val + "</eMedication.10>"+ '\n')
                MedicationGroup["eMedications.10"] = _val;
            };

            //eMedications.11///////////
            _val = getValue(elementList, "eMedications.11");
            if (_val == null) 
            {
                OLAPArray.push('\t\t' + "<MedicationAuthorization>" + null + "</MedicationAuthorization>" + '\n');
                _retArray.push('\t\t' + "<eMedications.11>" + null + "</eMedication.11>"+ '\n')
                MedicationGroup["eMedications.11"] = null;
                v2Array.push({ section: "E18", element: "E18_10", val: null });                
            }
            else 
            {
                OLAPArray.push('\t\t' + "<MedicationAuthorization>" + setCodeText("eMedications.11", _val) + "</MedicationAuthorization>" + '\n');
                _retArray.push('\t\t' + "<eMedications.11>" + _val + "</eMedications.11>"+ '\n')
                v2Array.push({ section: "E18", element: "E18_10", val: SetD2("eMedications.11",_val) });                
                MedicationGroup["eMedications.11"] = _val;
            };

            //eMedications.12/////////////
            _val = getValue(elementList, "eMedications.12");
            if (_val == null) 
            {
                OLAPArray.push('\t\t' + "<MedicationAuthorizingPhysician>" + null + "</MedicationAuthorizingPhysician>" + '\n');
                _retArray.push('\t\t' + "<eMedications.11>" + null + "</eMedication.11>"+ '\n')
                MedicationGroup["eMedications.12"] = null;
                v2Array.push({ section: "E18", element: "E18_11", val: null });                
            }
            else 
            {
                _retArray.push('\t\t' + "<eMedications.12>" + _val + "</eMedications.12>"+ '\n')
                OLAPArray.push('\t\t' + "<MedicationAuthorizingPhysician>" + _val + "</MedicationAuthorizingPhysician>" + '\n');
                v2Array.push({ section: "E18", element: "E18_11", val: _val });                
                MedicationGroup["eMedications.12"] = _val;
            };

            _retArray.push('\t' + "</eMedications.MedicationGroup>"+ '\n');
            OLAPArray.push('\t' + "</eMedications.MedicationGroup>"+ '\n');
        }
        OLAPArray.push("</eMedications>"+ '\n');
        _retArray.push ("</eMedications>"+ '\n');
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

    var eMedications334_02 = {
        "9923001" : "No", 
        "9923003" : "Yes"
    };

    var eMedications334_04 = {
        "3704001" : "Endotracheal tube", 
        "3704003" : "Gastrostomy tube", 
        "3704005" : "Inhalation", 
        "3704007" : "Intraarterial", 
        "3704009" : "Intramuscular", 
        "3704011" : "Intranasal", 
        "3704013" : "Intraocular", 
        "3704015" : "Intraosseous", 
        "3704017" : "Intravenous", 
        "3704019" : "Nasal", 
        "3704021" : "Nasal prongs", 
        "3704023" : "Nasogastric", 
        "3704025" : "Nasotracheal Tube", 
        "3704027" : "Ophthalmic", 
        "3704029" : "Oral", 
        "3704031" : "Other/miscellaneous", 
        "3704033" : "Otic", 
        "3704035" : "Re-breather mask", 
        "3704037" : "Rectal", 
        "3704039" : "Subcutaneous", 
        "3704041" : "Sublingual", 
        "3704043" : "Topical", 
        "3704045" : "Tracheostomy", 
        "3704047" : "Transdermal", 
        "3704049" : "Urethral", 
        "3704051" : "Ventimask", 
        "3704053" : "Wound"
    };

    var eMedications334_06 = {
        "3706001" : "Grams", 
        "3706003" : "Inches", 
        "3706005" : "International Units", 
        "3706007" : "Keep Vein Open (To Keep Open)", 
        "3706009" : "Liters", 
        "3706011" : "Liters Per Minute", 
        "3706013" : "MDI Puffs", 
        "3706015" : "Micrograms", 
        "3706017" : "Micrograms per Kilogram per Minute", 
        "3706019" : "Milliequivalents", 
        "3706021" : "Milligrams", 
        "3706023" : "Milligrams Per Kilogram Per Minute", 
        "3706025" : "Milliliters", 
        "3706027" : "Milliliters Per Hour", 
        "3706029" : "Other"
    };
    var eMedications334_07 = {
        "9916001" : "Improved", 
        "9916003" : "Unchanged", 
        "9916005" : "Worse"
    };

    var eMedications334_08 = {
        "3708001" : "Altered Mental Status", 
        "3708003" : "Apnea", 
        "3708005" : "Bleeding", 
        "3708007" : "Bradycardia", 
        "3708009" : "Bradypnea", 
        "3708011" : "Diarrhea", 
        "3708013" : "Extravasation", 
        "3708015" : "Hypertension", 
        "3708017" : "Hyperthermia", 
        "3708019" : "Hypotension", 
        "3708021" : "Hypothermia", 
        "3708023" : "Hypoxia", 
        "3708025" : "Injury", 
        "3708027" : "Itching/Urticaria", 
        "3708029" : "Nausea", 
        "3708031" : "None", 
        "3708033" : "Other (Not Listed)", 
        "3708035" : "Respiratory Distress", 
        "3708037" : "Tachycardia", 
        "3708039" : "Tachypnea", 
        "3708041" : "Vomiting"
    };
    var eMedications334_10 = {
        "9905001" : "2009 Advanced Emergency Medical Technician (AEMT)", 
        "9905003" : "2009 Emergency Medical Responder (EMR)", 
        "9905005" : "2009 Emergency Medical Technician (EMT)", 
        "9905007" : "2009 Paramedic", 
        "9905009" : "EMT-Basic", 
        "9905011" : "EMT-Intermediate", 
        "9905013" : "EMT-Paramedic (Based on pre-2009 Curriculum)", 
        "9905015" : "First Responder", 
        "9905017" : "Nurse", 
        "9905019" : "Other Healthcare Professional", 
        "9905021" : "Other Non-Healthcare Professional", 
        "9905023" : "Patient/Lay Person", 
        "9905025" : "Physician", 
        "9905027" : "Respiratory Therapist", 
        "9905029" : "Student", 
        "9905031" : "Critical Care Paramedic", 
        "9905033" : "Community Paramedicine"
    };
    var eMedications334_11 = {
        "9918001" : "On-Line (Remote Verbal Order)", 
        "9918003" : "On-Scene", 
        "9918005" : "Protocol (Standing Order)", 
        "9918007" : "Written Orders (Patient Specific)"
    };

    function setCodeText(NEMSISElementNumber, valueArray) {
        var _return = [];
        switch (NEMSISElementNumber) {
            case "eMedications.02":
                if (eMedications334_02[valueArray] == undefined) {
                    _return = valueArray + " UNDEFINED";
                }
                else {
                    _return = eMedications334_02[valueArray];
                }
                break;
            case "eMedications.04":
                if (eMedications334_04[valueArray] == undefined) {
                    _return = valueArray + " UNDEFINED";
                }
                else {
                    _return = eMedications334_04[valueArray];
                }
                break;

            case "eMedications.06":
                if (eMedications334_06[valueArray] == undefined) {
                    _return = valueArray + " UNDEFINED";
                }
                else {
                    _return = eMedications334_06[valueArray];
                }
                break;

            case "eMedications.07":
                if (eMedications334_07[valueArray] == undefined) {
                    _return = valueArray + " UNDEFINED";
                }
                else {
                    _return = eMedications334_07[valueArray];
                }
                break;

            case "eMedications.08":
                if (eMedications334_08[valueArray] == undefined) {
                    _return = valueArray + " UNDEFINED";
                }
                else {
                    _return = eMedications334_08[valueArray];
                }
                break;

            case "eMedications.10":
                if (eMedications334_10[valueArray] == undefined) {
                    _return = valueArray + " UNDEFINED";
                }
                else {
                    _return = eMedications334_10[valueArray];
                }
                break;

            case "eMedications.11":
                if (eMedications334_11[valueArray] == undefined) {
                    _return = valueArray + " UNDEFINED";
                }
                else {
                    _return = eMedications334_11[valueArray];
                }
                break;


            default:
                _return = " UNDEFINED";
        }
        return _return;

    };

/*</sch:pattern><?DSDL_INCLUDE_END includes/pattern_consistency_eSituation.xml?>
  <?DSDL_INCLUDE_START includes/pattern_consistency_group.xml?><sch:pattern id="nemSch_consistency_group">

  <!-- This pattern validates that certain elements are recorded in each medication administration, 
       procedure, or set of vital signs. The rules in this pattern fire when an 
       eMedications.MedicationGroup, eProcedures.ProcedureGroup, or eVitals.VitalGroup has a value 
       recorded in any element. The XSD requires at least one instance of each of those groups, 
       even if no medications were administered, no procedures were performed, or no vitals signs 
       were obtained. In those cases, software should generate an instance of the group with all 
       of its required elements empty. This rule does not fire in those cases.-->

  <sch:title>Certain elements are recorded in each real medication administration, procedure, or set of vital signs.</sch:title>

  <sch:rule id="nemSch_consistency_eMedications.MedicationGroup" context="nem:eMedications.MedicationGroup[some $element in .//* satisfies normalize-space($element) != '']">

    <!-- Flag each of the following elements if it is empty. -->

    <sch:let name="eMedications.01" value="if(nem:eMedications.01 != '' or nem:eMedications.02 = '9923003' or nem:eMedications.03/@PN) then '' else key('nemSch_key_elements', 'eMedications.01', $nemSch_elements)"/>

    <sch:let name="eMedications.03" value="if(nem:eMedications.03 != '') then '' else key('nemSch_key_elements', 'eMedications.03', $nemSch_elements)"/>

    <sch:let name="nemsisElements" value="(nem:eMedications.02, nem:eMedications.03, (nem:eMedications.01)[. = ''])"/>

    <!-- Assert that none of the elements above should be flagged. If the assert fails, list the flagged elements.  -->

    <sch:assert id="nemSch_consistency_eMedications.MedicationGroup_all" role="[WARNING]" diagnostics="nemsisDiagnostic" test="not($eMedications.01 or $eMedications.03)">
      When a medication is administered, the following should be recorded:
      <sch:value-of select="string-join(($eMedications.01, $eMedications.03)[. != ''], ', ')"/>
*/