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
var PN_CONTRAINDICATION_NOTED = "8801001";
var PN_DENIED_BY_ORDER= "8801003";
var PN_REFUSED = "8801019";
var PN_UNABLE_TO_COMPLETE ="8801023"; 
var PN_REFUSED_IS_NILLABLE = " xsi:nil=\"true\" PN=\"8801019\"/>";
var PN_UNABLE_TO_COMPLETE_IS_NILLABLE = " xsi:nil=\"true\" PN=\"8801023\"/>";
var PN_FINDING_NOT_PRESENT_IS_NILLABLE = " xsi:nil=\"true\" PN=\"8801005\"/>";


var seteProcedures = function (businessObject)
{
    if (typeof businessObject == undefined)
    {
        SetNotApplicable();
        return _retArray;
    }
    var _retArray = new Array();
    var OLAPArray = new Array();

    _retArray.push("<Procedures>" + '\n')
    OLAPArray.push("<Procedures>" + '\n')

    for (var xx = 0; xx < businessObject.sections.length; xx++)
    {
        var elementList = businessObject.sections[xx].attributes.elements;
    
        _retArray.push('\t' + "<eProcedures.ProcedureGroup>" + '\n')

        //eProcedures.01////////////
        _val = getValue(elementList, "eProcedures.01");
        if (_val == null)
        {
            OLAPArray.push('/t/t' + "<DateTimeProcedurePerformed>" + "NOT RECORDED" + "</DateTimeProcedurePerformed>" + '\n');
            _retArray.push('/t/t' + "<eProcedures.01" + NIL_V3NOT_RECORDED + '\n');
            ProcedureGroup["eProcedures.01"] = V3NOT_RECORDED;
            v2Array.push({ section: "E19", element: "E19_01", val: V2NOT_RECORDED });
        }
        else
        {
            OLAPArray.push('/t/t' + "<DateTimeProcedurePerformed>" + _val + "</DateTimeProcedurePerformed>" + '\n');
            ProcedureGroup["eProcedures.01"] = _val;
            v2Array.push({ section: "E19", element: "E19_01", val: _val });
            _retArray.push('/t/t' + "<eProcedures.01>" + _val + "</eProcedures.01>" + '\n');
        };

        //eProcedures.02////////////
        _val = getValue(elementList, "eProcedures.02");
        if (_val == null)
        {
            OLAPArray.push('/t/t' + "<ProcedurePerformedPriortothisUnitEMSCare>" + "NOT RECORDED" + "</ProcedurePerformedPriortothisUnitEMSCare>" + '\n');
            _retArray.push('/t/t' + "<eProcedures.02" + NIL_V3NOT_RECORDED) + '\n';
            ProcedureGroup["eProcedures.02"] = V3NOT_RECORDED;
            v2Array.push({ section: "E19", element: "E19_02", val: V2NOT_RECORDED });
        }
        else
        {
            OLAPArray.push('/t/t' + "<ProcedurePerformedPriortothisUnitEMSCare>" + setCodeText("eProcedures.02", _val) + "</ProcedurePerformedPriortothisUnitEMSCare>" + '\n');
            ProcedureGroup["eProcedures.02"] = _val;
            v2Array.push({ section: "E19", element: "E19_02", val: SetV2("eProcedures.02", _val) });           
            _retArray.push('/t/t' + "<eProcedures.02>" + _val + "</eProcedures.02>" + '\n');
        };

        //eProcedures.03////////////
        _val = getValue(elementList, "eProcedures.03");
        if (_val == null)
        {
            OLAPArray.push('/t/t' + "<Procedure>" + "NOT RECORDED" + "</Procedure>" + '\n');
            _retArray.push('/t/t' + "<eProcedures.03" + NIL_V3NOT_RECORDED) + '\n';
            ProcedureGroup["eProcedures.03"] = V3NOT_RECORDED;
            v2Array.push({ section: "E19", element: "E19_03", val: V2NOT_RECORDED });
        }
        else
        {
            if (PertinentNegativeValue == "8801001")
            {
                _retArray.push('/t/t' + "<eProcedures.03" + PN_CONTRAINDICATION_NOTED + ">" + _val + "</eProcedures.03>" + '\n');
                OLAPArray.push('/t/t' + "<Procedure CONTRAINDICATION_NOTED>" + setCodeText("eProcedures.03", _val) + "</Procedure>" + '\n');
                v2Array.push({ section: "E19", element: "E19_03", val:  SetV2("eProcedures.03", _val) });
                ProcedureGroup["eProcedures.03"] = PN_CONTRAINDICATION_NOTED + " " + _val;
            }
            else if (PertinentNegativeValue == "8801003")
            {
                _retArray.push('/t/t' + "<eProcedures.03" + PN_DENIED_BY_ORDER + ">" + _val + "</eProcedures.03>" + '\n');
                OLAPArray.push('/t/t' + "<Procedure DENIED_BY_ORDER>" + setCodeText("eProcedures.03", _val) + "</Procedure>" + '\n');
                v2Array.push({ section: "E19", element: "E19_03", val:  SetV2("eProcedures.03", _val) });
                ProcedureGroup["eProcedures.03"] = PN_DENIED_BY_ORDER + " " + _val;
            }
            else if (PertinentNegativeValue == "8801019") 
            {
                _retArray.push('/t/t' + "<eProcedures.03" + PN_REFUSED + ">" + _val + "</eProcedures.03>" + '\n');
                OLAPArray.push('/t/t' + "<Procedure REFUSED>" + setCodeText("eProcedures.03", _val) + "</Procedure>" + '\n');
                v2Array.push({ section: "E19", element: "E19_03", val:  SetV2("eProcedures.03", _val) });
                ProcedureGroup["eProcedures.03"] = PN_REFUSED  + " " + _val;
            }
            else if (PertinentNegativeValue == "8801023") 
            {
                _retArray.push('/t/t' + "<eProcedures.03" + PN_UNABLE_TO_COMPLETE + ">" + _val + "</eProcedures.03>" + '\n');
                OLAPArray.push('/t/t' + "<Procedure UNABLE_TO_COMPLETE>" + setCodeText("eProcedures.03", _val) + "</Procedure>" + '\n');
                v2Array.push({ section: "E19", element: "E19_03", val:  SetV2("eProcedures.03", _val) });
                ProcedureGroup["eProcedures.03"] = PN_UNABLE_TO_COMPLETE  + " " + _val;
            }
            else
            {
                OLAPArray.push('/t/t' + "<Procedure>" + _val + "</Procedure>" + '\n');
                ProcedureGroup["eProcedures.03"] = _val;
                v2Array.push({ section: "E19", element: "E19_03", val:  SetV2("eProcedures.03", _val) });                
                _retArray.push('/t/t' + "<eProcedures.03>" + _val + "</eProcedures.03>" + '\n');
            };

            //eProcedures.04////////////
            _val = getValue(elementList, "eProcedures.04");
            if (_val == null) 
            {
                OLAPArray.push('/t/t' + "<SizeofProcedureEquipment>" + null + "</SizeofProcedureEquipment>" + '\n');
                _retArray.push('/t/t' + "<eProcedures.04>" + null + "</eProcedures.04>" + '\n');
                ProcedureGroup["eProcedures.02"] = null;
                v2Array.push({ section: "E19", element: "E19_04", val: V2NOT_RECORDED });
            }
            else 
            {
                OLAPArray.push('/t/t' + "<SizeofProcedureEquipment>" + _val+ "</SizeofProcedureEquipment>" + '\n');
                ProcedureGroup["eProcedures.04"] = _val;
                v2Array.push({ section: "E19", element: "E19_04", val: _val });
                _retArray.push('/t/t' + "<eProcedures.04>" + _val + "</eProcedures.04>" + '\n');
            };

            //eProcedures.05////////////
            _val = getValue(elementList, "eProcedures.05");
            if (_val == null) 
            {
                _retArray.push('/t/t' + "<NumberofProcedureAttempts>" + "NOT RECORDED" + "</NumberofProcedureAttempts>" + '\n');
                _retArray.push('/t/t' + "<eProcedures.05" + NIL_V3NOT_RECORDED + '\n');
                ProcedureGroup["eProcedures.05"] = V3NOT_RECORDED;
                v2Array.push({ section: "E19", element: "E19_05", val: V2NOT_RECORDED });
            }
            else 
            {
                OLAPArray.push('/t/t' + "<NumberofProcedureAttempts>" + _val + "</NumberofProcedureAttempts>" + '\n');
                ProcedureGroup["eProcedures.05"] = _val;
                v2Array.push({ section: "E19", element: "E19_05", val: _val });
                _retArray.push('/t/t' + "<eProcedures.05>" + _val + "</eProcedures.05>" + '\n');
            };

            //eProcedures.06////////////
            _val = getValue(elementList, "eProcedures.06");
            if (_val == null) 
            {
                OLAPArray.push('/t/t' + "<ProcedureSuccessful>" + "NOT RECORDED" + "</ProcedureSuccessful>" + '\n');
                _retArray.push('/t/t' + "<eProcedures.06" + NIL_V3NOT_RECORDED + '\n');
                ProcedureGroup["eProcedures.06"] = V3NOT_RECORDED;
                v2Array.push({ section: "E19", element: "E19_06", val: v2NOT_RECORDED });
            }
            else 
            {
                OLAPArray.push('/t/t' + "<ProcedureSuccessful>" + setCodeText("eProcedures.06", _val) + "</ProcedureSuccessful>" + '\n');
                ProcedureGroup["eProcedures.06"] = _val;
                v2Array.push({ section: "E19", element: "E19_06", val:  SetV2("eProcedures.05", _val) });            
                _retArray.push('/t/t' + "<eProcedures.06>" + _val + "</eProcedures.06>" + '\n');
            };
    
            //eProcedures.07////////////
            _val = getValue(elementList, "eProcedures.07");
            if (_val == null) 
            {
                OLAPArray.push('/t/t' + "<ProcedureComplication>" + "NOT RECORDED" + "</ProcedureComplication>" + '\n');
                _retArray.push('/t/t' + "<eProcedures.07" + NIL_V3NOT_RECORDED + '\n');
                ProcedureGroup["eProcedures.07"] = V3NOT_RECORDED;
                v2Array.push({ section: "E19", element: "E19_07", val: v2NOT_RECORDED });
            }
            else 
            {
                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _val.length; i++) {
                    arr1[i] = _val[i];
                    OLAPArray.push('/t/t' + "<ProcedureComplication>" + setCodeText("eProcedures.07", _val[i]) + "</ProcedureComplication>" + '\n');
                    v2Array.push({ section: "E06", element: "E06_12", val: SetV2("eProcedures.07", _val[i]) });            
                    _retArray.push('/t' + "<eProcedures.07>" + _val[i] + "</eProcedures.07>");
                }
                ProcedureGroup["eProcedures.07"] =  arr1.slice(0);

            };

            //eProcedures.08////////////
            _val = getValue(elementList, "eProcedures.08");
            if (_val == null) 
            {            
                _retArray.push('/t/t' + "<eProcedures.08" + NIL_V3NOT_RECORDED + '\n');
                ProcedureGroup["eProcedures.08"] = V3NOT_RECORDED;
                OLAPArray.push('/t/t' + "<ResponsetoProcedure>" + "NOT RECORDED" + "</ResponsetoProcedure>" + '\n');
                v2Array.push({ section: "E19", element: "E19_08", val: v2NOT_RECORDED });
            }
            else 
            {
                OLAPArray.push('/t/t' + "<ResponsetoProcedure>" + setCodeText("eProcedures.08", _val) + "</ResponsetoProcedure>" + '\n');
                ProcedureGroup["eProcedures.08"] = _val;
                v2Array.push({ section: "E19", element: "E19_08", val: SetV2("eProcedures.08", _val) });
                _retArray.push('/t/t' + "<eProcedures.08>" + _val+ "</eProcedures.08>" + '\n');
            };


            //eProcedures.09////////////
            _val = getValue(elementList, "eProcedures.09");
            if (_val == null) 
            {
                if (isRequiredStateElement("eProcedures.09")) 
                {
                    OLAPArray.push('/t/t' + "<ProcedureCrewMembersID>" + "NOT RECORDED" + "</ProcedureCrewMembersID>" + '\n');
                    _retArray.push('/t/t' + "<eProcedures.09" + NIL_V3NOT_RECORDED + '\n');
                    ProcedureGroup["eProcedures.09"] = V3NOT_RECORDED;
                    v2Array.push({ section: "E19", element: "E19_09", val: v2NOT_RECORDED });
                }
                else 
                {
                    OLAPArray.push('/t/t' + "<ProcedureCrewMembersID>" + "NOT REPORTING" + "</ProcedureCrewMembersID>" + '\n');
                    _retArray.push('/t/t' + "<eProcedures.09" + NIL_V3NOT_REPORTING + '\n');
                    ProcedureGroup["eProcedures.09"] = v3NOT_REPORTING;
                    v2Array.push({ section: "E19", element: "E19_09", val: v2NOT_REPORTING });                
                }
            }
            else 
            {
                OLAPArray.push('/t/t' + "<ProcedureCrewMembersID>" + _val + "</ProcedureCrewMembersID>" + '\n');
                ProcedureGroup["eProcedures.09"] = _val;
                v2Array.push({ section: "E19", element: "E19_09", val: _val});                
                _retArray.push('/t/t' + "<eProcedures.09>" + _val + "</eProcedures.09>" + '\n');
            };


            //eProcedures.10////////////
            _val = getValue(elementList, "eProcedures.10");
            if (_val == null) 
            {
                OLAPArray.push('/t/t' + "< RoleTypeofPersonPerformingtheProcedure>" + "NOT RECORDED" + "</RoleTypeofPersonPerformingtheProcedure>" + '\n');
                _retArray.push('/t/t' + "<eProcedures.10" + NIL_V3NOT_RECORDED + '\n');
                ProcedureGroup["eProcedures.10"] = V3NOT_RECORDED;
            }
            else
            {
                OLAPArray.push('/t/t' + "< RoleTypeofPersonPerformingtheProcedure>" +  setCodeText("eProcedures.10", _val) + "</RoleTypeofPersonPerformingtheProcedure>" + '\n');
                ProcedureGroup["eProcedures.10"] = _val;
                _retArray.push('/t/t' + "<eProcedures.10>" + _val + "</eProcedures.10>" + '\n');
            };


            //eProcedures.11////////////
            _val = getValue(elementList, "eProcedures.11");
            if (_val == null) 
            {
                OLAPArray.push('/t/t' + "<ProcedureAuthorization>" + "NOT RECORDED" + "</ProcedureAuthorization>" + '\n');
                _retArray.push('/t/t' + "<eProcedures.10" + NIL_V3NOT_RECORDED + '\n');
                ProcedureGroup["eProcedures.10"] = V3NOT_RECORDED;
                v2Array.push({ section: "E19", element: "E19_10", val: v2NOT_RECORDED});                
            }
            else 
            {
                OLAPArray.push('/t/t' + "<ProcedureAuthorization>" + setCodeText("eProcedures.11", _val) + "</ProcedureAuthorization>" + '\n');
                ProcedureGroup["eProcedures.11"] = _val;
                v2Array.push({ section: "E06", element: "E06_12", val: SetV2("eProcedures.11", _val) });            
                _retArray.push('/t/t' + "<eProcedures.11>" + _val + "</eProcedures.11>" + '\n');
            };


            //eProcedures.12////////////
            _val = getValue(elementList, "eProcedures.12");
            if (_val == null) 
            {
                OLAPArray.push('/t/t' + "<ProcedureAuthorizingPhysician>" + null + "</ProcedureAuthorizingPhysician>" + '\n');
                _retArray.push('/t/t' + "<eProcedures.12>" + null + "</eProcedures.12>" + '\n');
                ProcedureGroup["eProcedures.10"] = null;
                v2Array.push({ section: "E19", element: "E19_11", val: v2NOT_RECORDED});                
            }
            else 
            {
                OLAPArray.push('/t/t' + "<ProcedureAuthorizingPhysician>" + _val + "</ProcedureAuthorizingPhysician>" + '\n');
                ProcedureGroup["eProcedures.12"] = _val;
                v2Array.push({ section: "E19", element: "E19_11", val: v2NOT_RECORDED});                
                _retArray.push('/t/t' + "<eProcedures.12>" + _val + "</eProcedures.12>" + '\n');
            };

            //eProcedures.13////////////
            _val = getValue(elementList, "eProcedures.13");
            if (_val == null) 
            {
                if (isRequiredStateElement("eProcedures.13")) 
                {
                    OLAPArray.push('/t/t' + "<VascularAccessLocation>" + "NOT RECORDED" + "</VascularAccessLocation>" + '\n');
                    _retArray.push('/t/t' + "<eProcedures.13" + NIL_V3NOT_RECORDED + '\n');
                    ProcedureGroup["eProcedures.13"] = V3NOT_RECORDED;
                    v2Array.push({ section: "E19", element: "E19_12", val: V2NOT_RECORDED});                                
                }
                else 
                {
                    OLAPArray.push('/t/t' + "<VascularAccessLocation>" + "NOT REPORTING" + "</VascularAccessLocation>" + '\n');
                    _retArray.push('/t/t' + "<eProcedures.13" + NIL_V3NOT_REPORTING + '\n');
                    ProcedureGroup["eProcedures.13"] = v3NOT_REPORTING;
                    v2Array.push({ section: "E19", element: "E19_12", val: v2NOT_REPORTING});
                }
            }
            else 
            {
                OLAPArray.push('/t/t' + "<VascularAccessLocation>" + setCodeText("eProcedures.13", _val)  + "</VascularAccessLocation>" + '\n');
                ProcedureGroup["eProcedures.13"] = _val;
                v2Array.push({ section: "E19", element: "E19_12", val: SetD2("eProcedures.13", _val)});
                _retArray.push('/t/t' + "<eProcedures.13>" + _val + "</eProcedures.13>" + '\n');
            };

            _retArray.push('\t' + "</eProcedures.ProcedureGroup>" + '\n')
            OLAPArray.push('\t' + "</eProcedures.ProcedureGroup>" + '\n')
        };
        _retArray.push("</eProcedures>" + '\n')
        OLAPArray.push("</eProcedures>" + '\n')
    };

    ////////////////////////////////////////////////////
    var isRequiredStateElement = function (elementID) {
        return true;
    };
    var getValue = function (businessObject, valueObject) {
        //console.log(businessObject.length);
        var _retValue = null;
        var _bFound = false;
        i = 0;
        while (i < businessObject.length) {
            if (_bFound == false) {
                if (businessObject[i].attributes.title == valueObject) {
                    _bFound = true;
                    if (businessObject[i].attributes.value == undefined) {

                        _retVal = null;
                    }
                    else {
                        _retVal = businessObject[i].attributes.value;
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
            case "eProcedures.07.":

                if (eProcedures07[valueArray[0]] == undefined) {
                    _retArray.push(valueArray[0] + "UNDEFINED");
                }
                else {
                    _retArray.push(eProcedures07[valueArray[0]]);
                }
                break;
            case "eProcedures,08":
                for (i = 0; i < valueArray.length; i++) {
                    if (eProcedures07[valueArray[i]] == undefined) {
                        _retArray.push(valueArray[i] + "UNDEFINED");
                    }
                    else {
                        _retArray.push(eProcedures07[valueArray[i]]);
                    }
                }
                break;
            case "eProcedures.11":
                if (eProcedures11[valueArray[0]] == undefined) {
                    _retArray.push(valueArray[0] + "UNDEFINED");
                }
                else {
                    _retArray.push(eProcedures11[valueArray[0]]);
                }
                break;

            case "eProcedures.13":
                if (eProcedures13[valueArray[0]] == undefined) {
                    _retArray.push(valueArray[0] + "UNDEFINED");
                }
                else {
                    _retArray.push(eProcedures13[valueArray[0]]);
                }
                break;              
            default:
                _retArray.push(NEMSISElementNumber = " version 2 not found");
        }

        return _retArray;
    };

    var eProcedures07 =
    {        
        "3907001": "4505",
        "3907003": "4510",
        "3907005": "4515",
        "3907007": "4520",        
        "3907009": "4525",
        "3907011": "4530",
        "3907013": "4535",
        "3907015": "4540",
        "3907017": "4545",
        "3907019": "4550",
        "3907021": "4555",
        "3907023": "4580",
        "3907025": "4560",
        "3907027": "4565",
        "3907029": "4570",
        "3907031": "4575",
        "3907033": "4500",
        "3907035": "4580",
        "3907037": "4580",        
        "3907039": "4585",
        "3907041": "4590",
        "3907043": "4580",
        "3907045": "4595",
        "3907047": "4520"
    };

    var eProcedures08 ={
        "9916001":	"4600",
        "9916003":	"4605",
        "9916005":	"4610"
    };

    var eProcedures11 = {
        "9918003": "4615",
        "9918003": "4620",
        "9918005": "4625",
        "9918007": "4630"
    }

    var eProcedures13 = {
        "3913001": "4635",
        "3913003": "4640",
        "3913005": "4645",
        "3913007": "4650",
        "3913009": "4655",
        "3913033": "4660",
        "3913011": "4665",
        "3913035": "4670",
        "3913017": "4675",
        "3913019": "4680",
        "3913021": "4685",
        "3913023": "4690",
        "3913051": "4695",
        "3913053": "4700",
        "3913057": "4705",
        "3913059": "4710",
        "3913043": "4715",
        "3913047": "4720",
        "3913049": "4725",
        "3913065": "4730"
    };

    var eProcedures334_02 = {
        "9923001" : "No",
        "9923003" : "Yes"
    };
    var eProcedures334_06 = {
        "9923001" : "No",
        "9923003" : "Yes"
    };
    var eProcedures334_07 = {
        "3907001" : "Altered Mental Status",
        "3907003" : "Apnea",
        "3907005" : "Bleeding",
        "3907007" : "Bradypnea",
        "3907009" : "Diarrhea",
        "3907011" : "Esophageal Intubation-immediately",
        "3907013" : "Esophageal Intubation-other",
        "3907015" : "Extravasation",
        "3907017" : "Hypertension",
        "3907019" : "Hyperthermia",
        "3907021" : "Hypotension",
        "3907023" : "Hypothermia",
        "3907025" : "Hypoxia",
        "3907027" : "Injury",
        "3907029" : "Itching/Urticaria",
        "3907031" : "Nausea",
        "3907033" : "None",
        "3907035" : "Other (Not Listed)",
        "3907037" : "Portacath",
        "3907039" : "Respiratory Distress",
        "3907041" : "Tachycardia",
        "3907043" : "Tachypnea",
        "3907045" : "Vomiting"
    };
    var eProcedures334_08 = {
        "9916001" : "Improved",
        "9916003" : "Unchanged",
        "9916005" : "Worse"
    };
    var eProcedures334_10 = {
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
    var eProcedures334_11 = {
        "9918001" : "On-Line (Remote Verbal Order)",
        "9918003" : "On-Scene",
        "9918005" : "Protocol (Standing Order)",
        "9918007" : "Written Orders (Patient Specific)"
    };
    var eProcedures334_13 = {
        "3913001" : "Antecubital-Left",
        "3913003" : "Antecubital-Right",
        "3913005" : "External Jugular-Left",
        "3913007" : "External Jugular-Right",
        "3913009" : "Femoral-Left IV",
        "3913011" : "Femoral-Right IV",
        "3913013" : "Foot-Right",
        "3913015" : "Foot-Left",
        "3913017" : "Forearm-Left",
        "3913019" : "Forearm-Right",
        "3913021" : "Hand-Left",
        "3913023" : "Hand-Right",
        "3913025" : "Internal Jugular-Left",
        "3913027" : "Internal Jugular-Right",
        "3913029" : "IO-Iliac Crest-Left",
        "3913031" : "IO-Iliac Crest-Right",
        "3913033" : "IO-Femoral-Left Distal",
        "3913035" : "IO-Femoral-Right Distal IO",
        "3913037" : "IO-Humeral-Left",
        "3913039" : "IO-Humeral-Right",
        "3913041" : "IO-Tibia-Left Distal",
        "3913043" : "IO-Sternum",
        "3913045" : "IO-Tibia-Right Distal",
        "3913047" : "IO-Tibia-Left Proximal",
        "3913049" : "IO-Tibia-Right Proximal",
        "3913051" : "Lower Extremity-Left",
        "3913053" : "Lower Extremity-Right",
        "3913055" : "Other Peripheral (Not Listed)",
        "3913057" : "Other Central (PICC; Portacath; Not Listed)",
        "3913059" : "Scalp",
        "3913061" : "Subclavian-Left",
        "3913063" : "Subclavian-Right",
        "3913065" : "Umbilical",
        "3913067" : "Venous Cutdown-Left Lower Extremity",
        "3913069" : "Venous Cutdown-Right Lower Extremity", 
        "3913071" : "Upper Arm-Left", 
        "3913073" : "Upper Arm-Right", 
        "3913075" : "Radial-Left", 
        "3913077" : "Radial-Right"
    };

    function setCodeText(NEMSISElementNumber, codeVal) {
        var _return = [];


        switch (NEMSISElementNumber) {

            case "eProcedures.02":
                if (eProcedures334_02[codeVal] == undefined) {
                    _return = codeVal;
                }
                else {
                    _return = eProcedures334_02[codeVal];
                }
                break;


            case "eProcedures.06":
                if (eProcedures334_06[codeVal] == undefined) {
                    _return = codeVal;
                }
                else {
                    _return = eProcedures334_06[codeVal];
                }
                break;


            case "eProcedures.07":
                if (eProcedures334_07[codeVal] == undefined) {
                    _return = codeVal;
                }
                else {
                    _return = eProcedures334_07[codeVal];
                }
                break;



            case "eProcedures.08":
                if (eProcedures334_08[codeVal] == undefined) {
                    _return = codeVal;
                }
                else {
                    _return = eProcedures334_08[codeVal];
                }
                break;


            case "eProcedures.10":
                if (eProcedures334_10[codeVal] == undefined) {
                    _return = codeVal;
                }
                else {
                    _return = eProcedures334_10[codeVal];
                }
                break;
            case "eProcedures.11":
                if (eProcedures334_11[codeVal] == undefined) {
                    _return = codeVal;
                }
                else {
                    _return = eProcedures334_11[codeVal];
                }
                break;

            case "eProcedures.13":
                if (eProcedures334_13[codeVal] == undefined) {
                    _return = codeVal;
                }
                else {
                    _return = eProcedures334_13[codeVal];
                }
                break;



            default:
                _return = " UNDEFINED";
        }
        return _return;

    };