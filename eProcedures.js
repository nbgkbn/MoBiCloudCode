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
        if (_val == null) {
            ProcedureGroup["eProcedures.01"] = V3NOT_RECORDED;
            ProcedureGroup["DateTimeProcedurePerformed"] = NOT_RECORDED;
            v2Array.push({ section: "E19", element: "E19_01", val: V2NOT_RECORDED });
        }
        else {
            isNotApplicableFlag = false;
            ProcedureGroup["eProcedures.01"] = _val[0];
            ProcedureGroup["DateTimeProcedurePerformed"] = _val[0];
            v2Array.push({ section: "E19", element: "E19_01", val: _val[0] });
        };

        //eProcedures.02////////////
        _val = getValue(elementList, "eProcedures.02");
        if (_val == null) {
            ProcedureGroup["ProcedurePerformedPriortothisUnitEMSCare"] = NOT_RECORDED;
            ProcedureGroup["eProcedures.02"] = V3NOT_RECORDED;
            v2Array.push({ section: "E19", element: "E19_02", val: V2NOT_RECORDED });
        }
        else {
            isNotApplicableFlag = false;
            ProcedureGroup["ProcedurePerformedPriortothisUnitEMSCare"] = setCodeText("eProcedures.02", _val[0]);
            ProcedureGroup["eProcedures.02"] = _val[0];
            v2Array.push({ section: "E19", element: "E19_02", val: SetV2("eProcedures.02", _val) });
        };

        //eProcedures.03////////////
        _val = getValue(elementList, "eProcedures.03");
        _PNValue = getPertinentNegative("eProcedures.03")
        if (_PNValue != null) {
            if (_PNValue == "8801001") {
                v2Array.push({ section: "E19", element: "E19_03", val: SetV2("eProcedures.03", _val) });
                ProcedureGroup["eProcedures.03"] = PN_CONTRAINDICATION_NOTED + " " + _val[0];
                ProcedureGroup["Procedure"] = PN_CONTRAINDICATION_NOTED + " " + _val[0];
            }
            else if (_PNValue == "8801003") {
                _retArray.push('/t/t' + "<eProcedures.03" + PN_DENIED_BY_ORDER + ">" + _val + "</eProcedures.03>" + '\n');
                OLAPArray.push('/t/t' + "<Procedure DENIED_BY_ORDER>" + setCodeText("eProcedures.03", _val) + "</Procedure>" + '\n');
                v2Array.push({ section: "E19", element: "E19_03", val: SetV2("eProcedures.03", _val) });
                ProcedureGroup["eProcedures.03"] = PN_DENIED_BY_ORDER + " " + _val;
            }
            else if (_PNValue == "8801019") {
                _retArray.push('/t/t' + "<eProcedures.03" + PN_REFUSED + ">" + _val + "</eProcedures.03>" + '\n');
                OLAPArray.push('/t/t' + "<Procedure REFUSED>" + setCodeText("eProcedures.03", _val) + "</Procedure>" + '\n');
                v2Array.push({ section: "E19", element: "E19_03", val: SetV2("eProcedures.03", _val) });
                ProcedureGroup["eProcedures.03"] = PN_REFUSED + " " + _val;
            }
            else if (_PNValue == "8801023") {
                _retArray.push('/t/t' + "<eProcedures.03" + PN_UNABLE_TO_COMPLETE + ">" + _val + "</eProcedures.03>" + '\n');
                OLAPArray.push('/t/t' + "<Procedure UNABLE_TO_COMPLETE>" + setCodeText("eProcedures.03", _val) + "</Procedure>" + '\n');
                v2Array.push({ section: "E19", element: "E19_03", val: SetV2("eProcedures.03", _val) });
                ProcedureGroup["eProcedures.03"] = PN_UNABLE_TO_COMPLETE + " " + _val;
            }
        };
        
        
        if (_val == null) {
            ProcedureGroup["Procedure"] = NOT_RECORDED;
            ProcedureGroup["eProcedures.03"] = V3NOT_RECORDED;
            v2Array.push({ section: "E19", element: "E19_03", val: V2NOT_RECORDED });
        }
        else {
            isNotApplicableFlag = false;
            ProcedureGroup["eProcedures.03"] = _val[0];
            ProcedureGroup["Procedure"] = _val[0];
            v2Array.push({ section: "E19", element: "E19_03", val: SetV2("eProcedures.03", _val[0]) });
        };

        //eProcedures.04////////////
        _val = getValue(elementList, "eProcedures.04");
        if (_val == null) {
            ProcedureGroup["SizeofProcedureEquipment"] = null;
            ProcedureGroup["eProcedures.02"] = null;
            v2Array.push({ section: "E19", element: "E19_04", val: V2NOT_RECORDED });
        }
        else {
            isNotApplicableFlag = false;
            ProcedureGroup["eProcedures.04"] = _val[0];
            ProcedureGroup["SizeofProcedureEquipment"] = _val[0];
            v2Array.push({ section: "E19", element: "E19_04", val: _val[0] });
        };

        //eProcedures.05////////////
        _val = getValue(elementList, "eProcedures.05");
        if (_val == null) {
            ProcedureGroup["eProcedures.05"] = V3NOT_RECORDED;
            ProcedureGroup["NumberofProcedureAttempts"] = NOT_RECORDED;
            v2Array.push({ section: "E19", element: "E19_05", val: V2NOT_RECORDED });
        }
        else {
            isNotApplicableFlag = false;
            ProcedureGroup["eProcedures.05"] = _val[0];
            ProcedureGroup["NumberofProcedureAttempts"] = _val[0];
            v2Array.push({ section: "E19", element: "E19_05", val: _val[0] });
        };

            //eProcedures.06////////////
        _val = getValue(elementList, "eProcedures.06");
        if (_val == null) {
            _retArray.push('/t/t' + "<eProcedures.06" + NIL_V3NOT_RECORDED + '\n');
            ProcedureGroup["eProcedures.06"] = V3NOT_RECORDED;
            ProcedureGroup["ProcedureSuccessful"] = NOT_RECORDED;
        }
        else {
            isNotApplicableFlag = false;
            ProcedureGroup["eProcedures.06"] = _val[0];
            ProcedureGroup["ProcedureSuccessful"] = setCodeText("eProcedures.06", _val[0]);
            v2Array.push({ section: "E19", element: "E19_06", val: SetV2("eProcedures.05", _val[0]) });
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
            var arr3 = [];
            for (var i = 0; i < _val.length; i++)
            {
                arr1.push(_val[i]);
                arr2.push(setD2("eProcedures.07", _val[i]));
                arr3.push(setCodeText("eProcedures.07", _val[i]));               
            };
              
        ProcedureGroup["eProcedures.07"] =  arr1.slice(0);
        ProcedureGroup["ProcedureComplication"] =  arr3.slice(0);
        v2Array.push({ section: "E06", element: "E06_12", val: arr2.slice(0) });

        //eProcedures.08////////////
        _val = getValue(elementList, "eProcedures.08");
        if (_val == null) 
        {            
            ProcedureGroup["eProcedures.08"] = V3NOT_RECORDED;
            ProcedureGroup["ResponsetoProcedure"] = NOT_RECORDED;            
            v2Array.push({ section: "E19", element: "E19_08", val: v2NOT_RECORDED });
        }
        else 
        {
            ProcedureGroup["eProcedures.08"] = _val[0];
            ProcedureGroup["ResponsetoProcedure"] = setCodeText("eProcedures.08", _val[0]) ;            
            v2Array.push({ section: "E19", element: "E19_08", val: SetV2("eProcedures.08", _val[0]) });
        };


            //eProcedures.09////////////
        _val = getValue(elementList, "eProcedures.09");
        if (_val == null) 
        {
            if (isRequiredStateElement("eProcedures.09")) 
            {
                ProcedureGroup["eProcedures.09"] = V3NOT_RECORDED;
                ProcedureGroup["ProcedureCrewMembersID"] = NOT_RECORDED;
                v2Array.push({ section: "E19", element: "E19_09", val: v2NOT_RECORDED });
            }
            else 
            {
                ProcedureGroup["eProcedures.09"] = v3NOT_REPORTING;
                ProcedureGroup["ProcedureCrewMembersID"] = NOT_REPORTING;
                v2Array.push({ section: "E19", element: "E19_09", val: v2NOT_REPORTING });                
            }
        }
        else 
        {
            ProcedureGroup["eProcedures.09"] = _val[0];
            ProcedureGroup["ProcedureCrewMembersID"] = _val[0];
            v2Array.push({ section: "E19", element: "E19_09", val: _val[0]});                
        };


        //eProcedures.10////////////
        _val = getValue(elementList, "eProcedures.10");
        if (_val == null) 
        {
           
            ProcedureGroup["RoleTypeofPersonPerformingtheProcedure"] = NOT_RECORDED;
            ProcedureGroup["eProcedures.10"] = V3NOT_RECORDED;
        }
        else
        {
            ProcedureGroup["RoleTypeofPersonPerformingtheProcedure"] = setCodeText("eProcedures.10", _val[0]);
            ProcedureGroup["eProcedures.10"] = _val[0];
           
        };


            //eProcedures.11////////////
        _val = getValue(elementList, "eProcedures.11");
        if (_val == null) 
        {
            ProcedureGroup["eProcedures.10"] = V3NOT_RECORDED;
            ProcedureGroup["ProcedureAuthorization"] = NOT_RECORDED;
            v2Array.push({ section: "E19", element: "E19_10", val: v2NOT_RECORDED});                
        }
        else 
        {
            ProcedureGroup["eProcedures.11"] = _val[0];
            ProcedureGroup["ProcedureAuthorization"] = setCodeText("eProcedures.11", _val[0]);
            v2Array.push({ section: "E06", element: "E06_12", val: SetV2("eProcedures.11", _val[0]) });                        
        };


            //eProcedures.12////////////
        _val = getValue(elementList, "eProcedures.12");
        if (_val == null) 
        {
            ProcedureGroup["eProcedures.10"] = null;
            ProcedureGroup["ProcedureAuthorizingPhysician"] = null;
            v2Array.push({ section: "E19", element: "E19_11", val: v2NOT_RECORDED});                
        }
        else 
        {
            ProcedureGroup["eProcedures.12"] = _val[0];
            ProcedureGroup["ProcedureAuthorizingPhysician"] =_val[0];
            v2Array.push({ section: "E19", element: "E19_11", val: _val[0]});                
        };

        //eProcedures.13////////////
        _val = getValue(elementList, "eProcedures.13");
        if (_val == null) 
        {
            if (isRequiredStateElement("eProcedures.13")) 
            {
                ProcedureGroup["eProcedures.13"] = V3NOT_RECORDED;
                ProcedureGroup["VascularAccessLocation"] = NOT_RECORDED;
                v2Array.push({ section: "E19", element: "E19_12", val: V2NOT_RECORDED});                                
            }
            else 
            {
                ProcedureGroup["eProcedures.13"] = v3NOT_REPORTING;
                ProcedureGroup["VascularAccessLocation"] = NOT_REPORTING;
                v2Array.push({ section: "E19", element: "E19_12", val: v2NOT_REPORTING});
            }
        }
        else 
        {
            ProcedureGroup["VascularAccessLocation"] = setCodeText("eProcedures.13", _val[0]);
            ProcedureGroup["eProcedures.13"] = _val[0];
            v2Array.push({ section: "E19", element: "E19_12", val: SetD2("eProcedures.13", _val[0])});
        };

    };
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
}
