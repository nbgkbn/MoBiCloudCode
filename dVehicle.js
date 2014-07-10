var ErrorList = [];
var v3NOT_REPORTING = " NV=\"7701005\"";
var v3NOT_RECORDED = " NV=\"7701003\"";
var v2NOT_AVAILABLE = "-5";
var v2NOT_REPORTING = "-15";
var v2NOT_APPLICABLE = "-25"
var v2NOT_RECORDED = "-20";
var v2NOT_KNOWN = "-10";
var NIL_V3NOT_RECORDED = "NV=\"7701003\" xsi:nil=\"true\"/>";
var NIL_V3NOT_REPORTING = "NV=\"7701005\" xsi:nil=\"true\"/>";
var NIL_V3NOT_APPLICABLE = "NV=\"7701001\" xsi:nil=\"true\"/>";
var PN_REFUSED_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801019\"/>";
var PN_UNABLE_TO_COMPLETE_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801023\"/>";
var PN_FINDING_NOT_PRESENT_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801005\"/>";

var dVehicle = new Object;
var VehicleGroup = new Object;
var OLAPArray = [];
var _retArray = [];
var v2Array = [];
var XMLString = "";
///////////////////////////////////////////////////////////
var getSectionIndex = function (businessObject, sectionName) {
    //console.log(businessObject)
    var _retValue = [];
    for (var d = 0; d < businessObject.sections.length; d++) {
        if (businessObject.sections[d].attributes.name == sectionName) {
            _retValue.push(d);
        }
    }
    if (_retValue.length == 0) {
        _retValue.push(-1);
    }
    return _retValue;
};


var setdVehicle = function (businessObject) {
    console.log(businessObject.name)
    if (businessObject.name != "dVehicle") {
        return null;
    };
    _retArray.push("<dVehicle>" + '\n');
    OLAPArray.push("<dVehicle>" + '\n');
    for (var xx = 0; xx < businessObject.sections.length; xx++) {
        var elementList = businessObject.sections[xx].attributes.elements;
        _retArray.push('\t' + "<dVehicle.VehicleGroup>" + '\n');
        OLAPArray.push('\t' + "<dVehicle.VehicleGroup>" + '\n');

        ///////dVehicle.01
        _val = getdVehicleValue(elementList, "dVehicle.01");
        if (_val == null)
        {
            if (isRequiredStateElement("dVehicle.01") == - true)
            {
                OLAPArray.push('\t\t' + "<UnitVehicleNumber>" + "NOT_RECORDED" + "</UnitVehicleNumber>" + '\n');
                VehicleGroup["dVehicle.01"] = v3NOT_RECORDED;
                _retArray.push('\t\t' + "<dVehicle.01" + v3NOT_RECORDED + '\n');
                v2Array.push({ section: "D06", element: "D06_01", val: null });
            }
            else
            {
                OLAPArray.push('\t\t' + "<UnitVehicleNumber>" + "NOT_REPORTING" + "</UnitVehicleNumber>" + '\n');
                VehicleGroup["dVehicle.01"] = v3NOT_REPORTING;
                _retArray.push('\t\t' + "<dVehicle.01" + v3NOT_REPORTING + '\n');
                v2Array.push({ section: "D06", element: "D06_01", val: null });
            }
        }
        else
        {
            OLAPArray.push('\t\t' + "<UnitVehicleNumber>" + _val + "</UnitVehicleNumber>" + '\n');
            _retArray.push('\t\t' + "<dVehicle.01>" + _val + "</dVehicle.01>" + '\n');
            VehicleGroup["dVehicle.01"] = _val;
            v2Array.push({ section: "D06", element: "D06_01", val: _val });
        };

        
        ///////dVehicle.02
        _val = getdVehicleValue(elementList, "dVehicle.02");
        if (_val == null)
        {
            OLAPArray.push('\t\t' + "<VIN>" + null + "</VIN>" + '\n');
            VehicleGroup["dVehicle.02"] = null;
            _retArray.push('\t\t' + "<dVehicle.02>" + null + "</dVehicle.02>" + '\n');
        }
        else
        {
            OLAPArray.push('\t\t' + "<VIN>" + _val + "</VIN>" + '\n');
            _retArray.push('\t\t' + "<dVehicle.02>" + _val + "</dVehicle.02>" + '\n');
            VehicleGroup["dVehicle.02"] = _val;
        };
        
        ///////dVehicle.03
        _val = getdVehicleValue(elementList, "dVehicle.03");
        if (_val == null)
        {
            OLAPArray.push('\t\t' + "<UnitCallSign>" + null + "</UnitCallSign>" + '\n');
            VehicleGroup["dVehicle.03"] = null;
            _retArray.push('\t\t' + "<dVehicle.03>" + null + "</dVehicle.03>" + '\n');

        }
        else
        {
            OLAPArray.push('\t\t' + "<UnitCallSign>" + _val + "</UnitCallSign>" + '\n');
            _retArray.push('\t\t' + "<dVehicle.03>" + _val + "</dVehicle.03>" + '\n');
            VehicleGroup["dVehicle.03"] = _val;
        };


        ///////dVehicle.04
        _val = getdVehicleValue(elementList, "dVehicle.04");
        if (_val == null)
        {
            if (isRequiredStateElement("dVehicle.04") == - true)
            {
                OLAPArray.push('\t\t' + "<VehicleType>" + "NOT_RECORDED" + "</VehicleType>" + '\n');
                VehicleGroup["dVehicle.04"] = v3NOT_RECORDED;
                _retArray.push('\t\t' + "<dVehicle.04" + v3NOT_RECORDED + '\n');
                v2Array.push({ section: "D06", element: "D06_03", val: null });
            }
            else
            {
                OLAPArray.push('\t\t' + "<VehicleType>" + "NOT_REPORTING" + "</VehicleType>" + '\n');
                VehicleGroup["dVehicle.04"] = v3NOT_REPORTING;
                _retArray.push('\t\t' + "<dVehicle.04" + v3NOT_REPORTING + '\n');
                v2Array.push({ section: "D06", element: "D06_03", val: null});
            }
        }
        else
        {
            OLAPArray.push('\t\t' + "<VehicleType>" + _val + "</VehicleType>" + '\n');
            _retArray.push('\t\t' + "<dVehicle.04>" + _val + "</dVehicle.04>" + '\n');
            VehicleGroup["dVehicle.04"] = _val;
            v2Array.push({ section: "D06", element: "D06_03", val: setV2("dVehicle.04", _val) });
        };
        
        ///////////////        
        _sectionIndex = getSectionIndex(businessObject.sections[xx].attributes, "dVehicle.VehicleCertificationLevelsGroup");
        console.log(_sectionIndex)


        for (var x = 0; x < _sectionIndex.length; x++)
        {
            _retArray.push('\t\t' + "<dVehicle.VehicleCertificationLevelsGroup>" + '\n');
            OLAPArray.push('\t\t' + "<dVehicle.VehicleCertificationLevelsGroup>" + '\n');
            console.log(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements)
            //////////////////dVehicle.05
            _val = getdVehicleValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dVehicle.05");
            if (_val == null)
            {
                OLAPArray.push('\t\t\t' + "<Crew StateLicensureLevels>" + null + "</CrewStateLicensureLevels>" + '\n');
                VehicleGroup["dVehicle.05"] = null;
                _retArray.push('\t\t\t' + "<dVehicle.05>" + null + "</dVehicle.05>" + '\n');
                v2Array.push({ section: "D06", element: "D06_04", val: null });
            }
            else
            {
                OLAPArray.push('\t\t\t' + "<Crew StateLicensureLevels>" + _val + "</CrewStateLicensureLevels>" + '\n');
                _retArray.push('\t\t\t' + "<dVehicle.05>" + _val + "</dVehicle.05>" + '\n');
                VehicleGroup["dVehicle.05"] = _val;
                v2Array.push({ section: "D06", element: "D06_04", val: setV2("dVehicle.04", _val) });
            };

            //////////////////dVehicle.06
            _val = getdVehicleValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dVehicle.06");
            if (_val == null) 
            {
                OLAPArray.push('\t\t\t' + "<NumberEMSPersonnelonNormal911>" + null + "</NumberEMSPersonnelonNormal911>" + '\n');                
                VehicleGroup["dVehicle.06"] = null;
                _retArray.push('\t\t\t' + "<dVehicle.06>" + null + "</dVehicle.06>" + '\n');
                _retArray.push('\t\t\t' + "<dVehicle.06>" + null + "</dVehicle.06>" + '\n');
            }
            else
            {
                OLAPArray.push('\t\t\t' + "<NumberEMSPersonnelonNormal911>" + _val + "</NumberEMSPersonnelonNormal911>" + '\n');
                _retArray.push('\t\t\t' + "<dVehicle.06>" + _val + "</dVehicle.06>" + '\n');
                VehicleGroup["dVehicle.06"] = _val;
                v2Array.push({ section: "D06", element: "D06_05", val: _val });
            };

            //////////////////dVehicle.07
            _val = getdVehicleValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dVehicle.07");
            if (_val == null)
            {
                OLAPArray.push('\t\t\t' + "<NumberEMSPersonnelLevelNormal911ResponseNonTransport>" + null + "</NumberEMSPersonnelLevelNormal911ResponseNonTransport>" + '\n');
                VehicleGroup["dVehicle.07"] = null;
                _retArray.push('\t\t\t' + "<dVehicle.07>" + null + "</dVehicle.07>" + '\n');
            }
            else
            {
                OLAPArray.push('\t\t\t' + "<NumberEMSPersonnelLevelNormal911ResponseNonTransport>" + _val + "</NumberEMSPersonnelLevelNormal911ResponseNonTransport>" + '\n');
                _retArray.push('\t\t\t' + "<dVehicle.07>" + _val + "</dVehicle.07" + '\n');
                VehicleGroup["dVehicle.07"] = _val;
            };

            //////////////////dVehicle.08
            _val = getdVehicleValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dVehicle.08");
            if (_val == null)
            {
                OLAPArray.push('\t\t\t' + "<NumberEMSPersonnelLevelNormal911ResponseTransport>" + null + "</NumberEMSPersonnelLevelNormal911ResponseTransport>" + '\n');
                VehicleGroup["dVehicle.08"] = null;
                _retArray.push('\t\t\t' + "<dVehicle.08>" + null + "</dVehicle.08>" + '\n');
            }
            else
            {
                OLAPArray.push('\t\t\t' + "<NumberEMSPersonnelLevelNormal911ResponseTransport>" + _val + "</NumberEMSPersonnelLevelNormal911ResponseTransport>" + '\n');
                _retArray.push('\t\t\t' + "<dVehicle.08>" + _val + "</dVehicle.08" + '\n');
                VehicleGroup["dVehicle.08"] = _val;
            };

            OLAPArray.push('\t\t' + "</dVehicle.VehicleCertificationLevelsGroupeGroup>" + '\n');
            _retArray.push('\t\t' + "</dVehicle.VehicleCertificationLevelsGroupeGroup>" + '\n');

        };

        /////////////dVehicle.09
        _val = getdVehicleValue(elementList, "dVehicle.09");
        if (_val == null)
        {
            OLAPArray.push('\t\t' + "<VehicleInitialCost>" + null + "</VehicleInitialCost>" + '\n');
            VehicleGroup["dVehicle.09"] = null;
            _retArray.push('\t\t' + "<dVehicle.09>" + null + "</dVehicle.09>" + '\n');
            v2Array.push({ section: "D06", element: "D06_06", val: null });
        }
        else
        {
            OLAPArray.push('\t\t' + "<VehicleInitialCost>" + _val[0] + "</VehicleInitialCost>" + '\n');
            VehicleGroup["dVehicle.09"] = _val[0];
            _retArray.push('\t\t' + "<dVehicle.09>" + _val[0] + "</dVehicle.09>" + '\n');
            v2Array.push({ section: "D06", element: "D06_06", val: _val });
        };

        /////////////dVehicle.10
        _val = getdVehicleValue(elementList, "dVehicle.10");
        if (_val == null)
        {
            if (isRequiredStateElement("dVehicle.10") == - true)
            {
                OLAPArray.push('\t\t' + "<ModelYear>" + "NOT_RECORDED" + "</ModelYear>" + '\n');
                VehicleGroup["dVehicle.10"] = v3NOT_RECORDED;
                _retArray.push('\t\t' + "<dVehicle.10" + v3NOT_RECORDED + '\n');
                v2Array.push({ section: "D06", element: "D06_07", val: v2NOT_RECORDED });
            }
            else
            {
                OLAPArray.push('\t\t' + "<ModelYear>" + "NOT_REPORTING" + "</ModelYear>" + '\n');
                VehicleGroup["dVehicle.10"] = v3NOT_REPORTING;
                _retArray.push('\t\t' + "<dVehicle.10" + v3NOT_REPORTING + '\n');
                v2Array.push({ section: "D06", element: "D06_07", val: v2NOT_REPORTING });
            }
        }
        else
        {
            OLAPArray.push('\t\t' + "<ModelYear>" + _val[0] + "</ModelYear>" + '\n');
            _retArray.push('\t\t' + "<dVehicle.10>" + _val[0] + "</dVehicle.10>" + '\n');
            VehicleGroup["dVehicle.10"] = _val[0];
            v2Array.push({ section: "D06", element: "D06_07", val: _val });
        };

        _sectionIndex = getSectionIndex(businessObject.sections[xx].attributes, "dVehicle.YearGroup");
        // console.log(_sectionIndex)


        for (var x = 0; x < _sectionIndex.length; x++) {
            _retArray.push('\t\t' + "<dVehicle.YearGroup>" + '\n');
            OLAPArray.push('\t\t' + "<dVehicle.YearGroup>" + '\n');

            _val = getdVehicleValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dVehicle.11");
            if (_val == null)
            {
                OLAPArray.push('\t\t\t' + "<MilesKilometersHoursAccrued>" + null + "</MilesKilometersHoursAccrued>" + '\n');
                VehicleGroup["dVehicle.11"] = null;
                _retArray.push('\t\t\t' + "<dVehicle.11>" + null + "</dVehicle.11>" + '\n');
                v2Array.push({ section: "D06", element: "D06_08", val: null });
            }
            else
            {
                OLAPArray.push('\t\t\t' + "<MilesKilometersHoursAccrued>" + _val[0] + "</MilesKilometersHoursAccrued>" + '\n');
                _retArray.push('\t\t\t' + "<dVehicle.11>" + _val[0] + "</dVehicle.11>" + '\n');
                VehicleGroup["dVehicle.11"] = _val[0];
                v2Array.push({ section: "D06", element: "D06_08", val: _val });
            };

            _val = getdVehicleValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dVehicle.12");
            if (_val == null)
            {
                OLAPArray.push('\t\t\t' + "<AnnualVehicleHours>" + null + "</AnnualVehicleHours>" + '\n');
                VehicleGroup["dVehicle.12"] = null;
                _retArray.push('\t\t\t' + "<dVehicle.12>" + null + "</dVehicle.12>" + '\n');
                v2Array.push({ section: "D06", element: "D06_09", val: null });
            }
            else
            {
                OLAPArray.push('\t\t\t' + "<AnnualVehicleHours>" + _val[0] + "</AnnualVehicleHours>" + '\n');
                _retArray.push('\t\t\t' + "<dVehicle.12>" + _val[0] + "</dVehicle.12>" + '\n');
                VehicleGroup["dVehicle.12"] = _val[0];
                v2Array.push({ section: "D06", element: "D06_09", val: _val });
            };


            //////////dVehicle.13
            _val = getdVehicleValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dVehicle.13");
            if (_val == null)
            {
                OLAPArray.push('\t\t\t' + "<AnnualVehicleMiles>" + null + "</AnnualVehicleMiles>" + '\n');
                VehicleGroup["dVehicle.13"] = null;
                _retArray.push('\t\t\t' + "<dVehicle.13>" + null + "</dVehicle.13>" + '\n');
                v2Array.push({ section: "D06", element: "D06_10", val: null });
            }
            else
            {
                OLAPArray.push('\t\t\t' + "<AnnualVehicleMiles>" + _val[0] + "</AnnualVehicleMiles>" + '\n');
                _retArray.push('\t\t\t' + "<dVehicle.13>" + _val[0] + "</dVehicle.13>" + '\n');
                VehicleGroup["dVehicle.13"] = _val[0];
                v2Array.push({ section: "D06", element: "D06_10", val: _val });
            };
            _retArray.push('\t\t' + "</dVehicle.VehicleGroup>" + '\n');
        };
        
        _retArray.push('\t' + "</dVehicle.YearGroup>" + '\n');
        OLAPArray.push('\t' + "</dVehicle.YearGroup>" + '\n');
        
    } // loop term
    _retArray.push("<dVehicle>" + '\n');    
    OLAPArray.push("<dVehicle>" + '\n');

    for (var i = 0; i < _retArray.length ; i++) {
        XMLString = XMLString + _retArray[i];

    }
    console.log(XMLString)

    console.log(v2Array)

    var OLAPArrayString = "";
    for (var i = 0; i < OLAPArray.length ; i++) {
        var OLAPArrayString = OLAPArrayString + OLAPArray[i];
    }
    //console.log(OLAPArrayString)
};    //end of function   
var getSectionIndex = function (businessObject, sectionName) {
    //console.log(businessObject)
    var _retValue = [];
    for (var d = 0; d < businessObject.sections.length; d++) {
        if (businessObject.sections[d].attributes.name == sectionName) {
            _retValue.push(d);
        }
    }
    if (_retValue.length == 0) {
        _retValue.push(-1);
    }
    return _retValue;
}

var isRequiredStateElement = function (elementID) {
    return true;
};
var getdVehicleValue = function (payload, valueObject) {
 
    var _retValue = null;
    var _bFound = false;
    i = 0;
    while (i < payload.length)
    {
        if (_bFound == false)
        {
            _retVal = null;
            if (payload[i].attributes.title == valueObject)
            {
                _bFound = true;
                if (payload[i].attributes.value == undefined)
                {
                    _retVal = null;
                }
                else {
                    _retVal = payload[i].attributes.value;
                }
            }
        }
        i++;
    }
    return _retVal;
};
function setV2(NEMSISElementNumber, valueArray) {
    //    console.log(NEMSISElementNumber);
    var _retArray = [];

    //    console.log(valueArray);
    switch (NEMSISElementNumber) {
        case "dVehicle.04":

            if (dVehicle04[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(dVehicle04[valueArray[0]]);
            }
        break;
        case "dVehicle.05":

            if (dVehicle05[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(dVehicle05[valueArray[0]]);
            }
        break;
        default:
            _retArray.push(NEMSISElementNumber = " version 2 not found");
    }

    return _retArray;

};

var dVehicle04 = {
    "1404001":"7370",
    "1404003": "7380",
    "1404005": "7390",
    "1404007": "7410",
    "1404009": "7420",
    "1404011": "7430",
    "1404013": "7440",
    "1404015": "7450",
    "1404017": "7460",
    "1404019": "7470",
    "1404021": "7480",
    "1404025": "7400",

};


var dVehicle05 = {
    "9917001": "6110",
    "9917003": "6120",
    "9917005": "6110",
    "9917007": "6110",
    "9917009": "6120",
    "9917011": "6090",
    "9917013": "6100",
    "9917015": "6110",
    "9917017": "6111",
    "9917019": "6112",
    "9917021": "6110",
    "9917023": "6111",
    "9917025": "6111",
    "9917027": "6111",
    "9917029": "6111",
    "9917031": "6111"

};

function setCodeText(NEMSISElementNumber, codeVal) {
    var _return = [];


    switch (NEMSISElementNumber) {
        case "dVehicle.04":
            if (dVehicle334_04[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dVehicle334_04[codeVal];
            }
            break;

        case "dVehicle.05":
            if (dVehicle334_05[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dVehicle334_05[codeVal];
            }
            break;


        default:
            _return = " UNDEFINED";
    }
    return _return;

}

var dVehicle334_04 = {
    "9906001": "Female",
    "9906003": "Male",
    "9906005": "Unknown (Unable to Determine)"
};

var dVehicle334_05 = {
    "9917001" : "2009 Advanced Emergency Medical Technician (AEMT)",
    "9917003" : "2009 Emergency Medical Responder (EMR)",
    "9917005" : "2009 Emergency Medical Technician",
    "9917007" : "2009 Paramedic",
    "9917009" : "First Responder",
    "9917011" : "EMT-Basic",
    "9917013" : "EMT-Intermediate",
    "9917015" : "EMT-Paramedic",
    "9917017" : "Nurse",
    "9917019" : "Physician",
    "9917021" : "Critical Care Paramedic",
    "9917023" : "Community Paramedicine", 
};
