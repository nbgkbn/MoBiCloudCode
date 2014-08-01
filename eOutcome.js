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
var FAX = "PhoneNumberType=\"9913001\"";
var HOME = "PhoneNumberType=\"9913003\"";
var MOBILE = "PhoneNumberType=\"9913005\"";
var PAGER = "PhoneNumberType=\"9913007\"";
var WORD = "PhoneNumberType=\"9913009\"";
var PERSONALEMAIL = "EmailAddressType=\"9904001\"";
var WORKEMAIL = "EmailAddressType=\"9904003\"";

var _retArray = [];

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

var seteOutcome = function (businessObject) {


    //eOutcome.01/////////
    _val = getValue(elementList, "eOutcome.01");
    if (_val == null)
    {
        eOutcome["EmergencyDepartmentDisposition"] = NOT_RECORDED;
        eOutcome["eOutcome.01"] = V3NOT_RECORDED;
        v2Array.push({ section: "E22", element: "E22_01", val: v2NOT_RECORDED });

    }
    else
    {
        eOutcome["EmergencyDepartmentDisposition"] = setCodeText("eOutcome.01", _val[0]);
        v2Array.push({ section: "E22", element: "E22_01", val: setV2("eOutcome.01", _val[0]) });
        eOutcome["eOutcome.01"] = _val[0];

    };

    //eOutcome.02/////////
    _val = getValue(elementList, "eOutcome.02");
    if (_val == null)
    {
        
        
        eOutcome["eOutcome.02"] = V3NOT_RECORDED;
        eOutcome["HospitalDisposition"] = NOT_RECORDED;
        v2Array.push({ section: "E22", element: "E22_02", val: v2NOT_RECORDED });
    }
    else
    {
        eOutcome["eOutcome.02"] = _val[0];
        eOutcome["HospitalDisposition"] = setCodeText("eOutcome.02", _val[0]);
        v2Array.push({ section: "E22", element: "E22_02", val: setV2("eOutcome.02", _val[0]) });
    };


    /////////////////////////////////

    _sectionIndex = getSectionIndex(businessObject.sections[xx].attributes, "eOutcome.ExternalDataGroup");
    for (var x = 0; x < _sectionIndex.length; x++)
    {
        var elementList = businessObject.elements.sections[i].attributes.elements;
        //eOutcome.03/////////
        _val = getValue(elementList, "eOutcome.03");
        if (_val == null)
        {
            ExternalDataGroup["eOutcome.03"] = null;
            ExternalDataGroup["ExternalReportIDNumberType"] = null;
        }
        else
        {
            ExternalDataGroup["eOutcome.03"] = _val[0];
            ExternalDataGroup["ExternalReportIDNumberType"] = setCodeText("eOutcome.03", _val[0]);
        };

        //eOutcome.04/////////
        _val = getValue(businessObject.elements.sections[i].attributes.elements, "eOutcome.04");
        if (_val == null)
        {
            ExternalDataGroup["eOutcome.04"] = null;
            ExternalDataGroup["ExternalReportIDNumber"] = null;
        }
        else
        {
            ExternalDataGroup["eOutcome.04"] = _val[0];
            ExternalDataGroup["ExternalReportIDNumber"] = _val[0];
        };


        //eOutcome.05/////////
        _val = getValue(businessObject.elements.sections[i].attributes.elements, "eOutcome.05");
        if (_val == null)
        {
            ExternalDataGroup["eOutcome.05"] = null;
            ExternalDataGroup["OtherReportRegistryType"] = null;
        }
        else
        {
            ExternalDataGroup["eOutcome.05"] = _val[0];
            ExternalDataGroup["OtherReportRegistryType"] = _val[0];
        };
    };
    //////////////////////////////////////////

        //eOutcome.06/////////
        _val = getValue(elementList, "eOutcome.06");
        if (_val == null)
        {
            eOutcome["eOutcome.06"] = null;
            eOutcome["EmergencyDepartmentChiefComplaint"] = null;
        }
        else
        {
            eOutcome["EmergencyDepartmentChiefComplaint"] = _val[0];            
            eOutcome["eOutcome.06"] = _val[0];
        };

        //eOutcome.07/////////
        _val = getValue(elementList, "eOutcome.07");
        if (_val == null)
        {
            eOutcome["eOutcome.07"] = null;
            eOutcome["FirstEDSystolicBloodPressure"] = null;
        }
        else
        {
            eOutcome["FirstEDSystolicBloodPressure"] = _val[0];
            eOutcome["eOutcome.07"] = _val[0];            
        };

        //eOutcome.08/////////
        _val = getValue(elementList, "eOutcome.08");
        if (_val == null)
        {
            eOutcome["eOutcome.08"] = null;
            eOutcome["EmergencyDepartmentRecordedCauseofInjury"] = null;
        }
        else
        {
            eOutcome["eOutcome.08"] = _val[0];
            eOutcome["EmergencyDepartmentRecordedCauseofInjury"] = _val[0];
        };

        //eOutcome.09/////////
        _val = getValue(elementList, "eOutcome.09");
        if (_val == null)
        {
            eOutcome["eOutcome.09"] = null;
            eOutcome["EmergencyDepartmentProcedures"] = null;
        }
        else
        {
            eOutcome["EmergencyDepartmentProcedures"] = _val[0];
            eOutcome["eOutcome.09"] = _val[0];
        };


        //eOutcome.10/////////
        _val = getValue(elementList, "eOutcome.10");
        if (_val == null)
        {
            eOutcome["eOutcome.10"] = null;
            eOutcome["EmergencyDepartmentDiagnosis"] = null;
        }
        else
        {
            for (var i = 0; i < _val[0].length; i++)
            {
                arr1.push(val[i]);
                arr2.push(setCodeText("eOutcome.03", _val[i]));

            }
            eOther["eOutcome.10"] = arr1.slice(0);
            eOther["EmergencyDepartmentDiagnosis"] = arr2.slice(0);            
        };


        //eOutcome.11/////////
        _val = getValue(elementList, "eOutcome.11");
        if (_val == null)
        {
            eOutcome["eOutcome.11"] = null;
            eOutcome["DateTimeofHospitalAdmission"] = null;
        }
        else
        {
            eOutcome["DateTimeofHospitalAdmission"] = _val[0];
            eOutcome["eOutcome.11"] = _val[0];
        };

        //eOutcome.12/////////
        _val = getValue(elementList, "eOutcome.12");
        if (_val == null)
        {
            eOutcome["eOutcome.11"] = null;
            eOutcome["HospitalProcedures"] = null;
        }
        else
        {
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _val[0].length; i++)
            {
                arr1.push(val[i]);
                arr2.push(setCodeText("eOutcome.11", _val[i]));

            }
            eOther["eOutcome.12"] = arr1.slice(0);
            eOutcome["HospitalProcedures"] = arr2.slice(0);
        };

        //eOutcome.13/////////
        _val = getValue(elementList, "eOutcome.13");
        if (_val == null)
        {
            eOutcome["eOutcome.13"] = null;
            eOutcome["HospitalDiagnosis"] = null;
        }
        else
        {
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _val[0].length; i++) {
                arr1.push(val[i]);
                arr2.push(setCodeText("eOutcome.13", _val[i]));
            }
            eOther["eOutcome.13"] = arr1.slice(0);
            eOutcome["HospitalDiagnosis"] = arr2.slice(0);
        };

        //eOutcome.14/////////
        _val = getValue(elementList, "eOutcome.14");
        if (_val == null)
        {
            eOutcome["eOutcome.14"] = null;
            eOutcome["TotalICULengthofStay"] = null;
        }
        else
        {
            eOutcome["TotalICULengthofStay"] = _val[0];
            eOutcome["eOutcome.14"] = _val[0];
        };

        //eOutcome.15/////////
        _val = getValue(elementList, "eOutcome.15");
        if (_val == null)
        {
            eOutcome["eOutcome.15"] = null;
            eOutcome["TotalVentilatorDays"] = null;
        }
        else
        {
            eOutcome["TotalVentilatorDays"] = _val[0];
            eOutcome["eOutcome.15"] = _val[0];
        };

        //eOutcome.16/////////
        _val = getValue(elementList, "eOutcome.16");
        if (_val == null)
        {
            eOutcome["eOutcome.16"] = null;
            eOutcome["DateTimeofHospitalDischarge"] = null;
        }
        else
        {
            eOutcome["DateTimeofHospitalDischarge"] = _val[0];
            eOutcome["eOutcome.16"] = _val[0];
        };

        //eOutcome.17/////////
        _val = getValue(elementList, "eOutcome.17");
        if (_val == null)
        {
            eOutcome["eOutcome.17"] = null;
            eOutcome["OutcomeatHospitalDischarge"] = null;
        }
        else
        {
            eOutcome["OutcomeatHospitalDischarge"] = setCodeText("eOutcome.17", _val[0]);
            eOutcome["eOutcome.17"] = _val[0];
            
        }
    return _retArray;
};


var setNotApplicable = function (elementID) {
    _retArray.push("<eOutcome.01" + NIL_V3NOT_APPLICABLE);
    eOutcome["eOutcome.01"] = v3NOT_APPLICABLE;
    E22.E22_01 = v2NOT_APPLICABLE;

    _retArray.push("<eOutcome.01" + NIL_V3NOT_APPLICABLE);
    eOutcome["eOutcome.01"] = v3NOT_APPLICABLE;
    E22.E22_02 = v2NOT_APPLICABLE;
}

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


function setV2(NEMSISElementNumber, valueArray) {
    //    console.log(NEMSISElementNumber);
    var _retArray = [];
    //    console.log(valueArray);
    switch (NEMSISElementNumber) {
        case "eOutcome.01":

            if (eOutcome01[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eOutcome01[valueArray[0]]);
            }
            break;
        case "eOutcome.02":

            if (eOutcome01[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eOutcome01[valueArray[0]]);
            }
            break;

        default:
            _retArray.push(NEMSISElementNumber = " version 2 not found");
    }

    return _retArray;

};
var eOutcome01 =
{
    "01": "5355",
    "02": "5360",
    "03": "5360",
    "04": "5340",
    "05	": "5360",
    "06": "5360",
    "07": "5350",
    "09": "5335",
    "20": "5345",
    "21": "5360",
    "30": "5360",
    "43": "5360",
    "50": "5360",
    "51": "5360",
    "61": "5360",
    "62": "5360",
    "63": "5360",
    "64": "5360",
    "65": "5360",
    "66": "5360",
    "70": "5360"
};

var eOutcome02 =
{
    "01": "5385",
    "02": "5375",
    "03": "5380",
    "04": "5390",
    "05": "5385",
    "06": "5390",
    "07": "5370",
    "20": "5365",
    "21": "5385",
    "30": "5360",
    "43": "5380",
    "50": "5380",
    "51": "5375",
    "61": "5390",
    "62": "5390",
    "63": "5390",
    "64": "5380",
    "65": "5375",
    "66": "5375",
    "70": "5385"
};

var eOutcome334_01 = {
    "1" : "Discharged to home or self care (routine discharge)", 
    "2" : "Discharged/transferred to another short term general hospital for inpatient care", 
    "3" : "Discharged/transferred to a skilled nursing facility (SNF) {With Medicare certification in anticipation of covered skilled care.  See Code 61 below.}", 
    "4" : "Discharged/transferred to an intermediate care facility (ICF)", 
    "5" : "Discharged/transferred to another type of institution not defined elsewhere in this code list", 
    "6" : "Discharged/transferred to home under care of organized home health service organization in anticipation of covered skills care", 
    "7" : "Left against medical advice or discontinued care", 
    "9" : "Admitted as an inpatient to this hospital.", 
    "20" : "Deceased/Expired (or did not recover - Religious Non Medical Health Care Patient)", 
    "21" : "Discharged/transferred to court/law enforcement", 
    "30" : "Still a patient or expected to return for outpatient services.", 
    "43" : "Discharged/transferred to a Federal Health Care Facility (e.g. VA or federal health care facility)", 
    "50" : "Discharged/transferred to Hospice - home.", 
    "51" : "Discharged/transferred to Hospice - medical facility", 
    "61" : "Discharged/transferred within this institution to a hospital based Medicare approved swing bed.", 
    "62" : "Discharged/transferred to a inpatient rehabilitation facility including distinct part units of a hospital.", 
    "63" : "Discharged/transferred to long term care hospitals", 
    "64" : "Discharged/transferred to a nursing facility certified under Medicaid but not certified under Medicare", 
    "65" : "Discharged/transferred to a psychiatric hospital or psychiatric distinct part unit of a hospital.", 
    "66" : "Discharged/transferred to a Critical Access Hospital (CAH).", 
    "70" : "Discharged/transferred to another type of health care institution not defined elsewhere in the code list."
};

 var eOutcome334_02 = {
     "1" : "Discharged to home or self care (routine discharge)", 
     "2" : "Discharged/transferred to another short term general hospital for inpatient care", 
     "3" : "Discharged/transferred to a skilled nursing facility (SNF) {With Medicare certification in anticipation of covered skilled care.  See Code 61 below.}", 
     "4" : "Discharged/transferred to an intermediate care facility (ICF)", 
     "5" : "Discharged/transferred to another type of institution not defined elsewhere in this code list", 
     "6" : "Discharged/transferred to home under care of organized home health service organization in anticipation of covered skills care", 
     "7" : "Left against medical advice or discontinued care", 
     "20" : "Deceased/Expired (or did not recover - Religious Non Medical Health Care Patient)", 
     "21" : "Discharged/transferred to court/law enforcement", 
     "30" : "Still a patient or expected to return for outpatient services.", 
     "43" : "Discharged/transferred to a Federal Health Care Facility (e.g. VA or federal health care facility)", 
     "50" : "Discharged/transferred to Hospice - home.", 
     "51" : "Discharged/transferred to Hospice - medical facility", 
     "61" : "Discharged/transferred within this institution to a hospital based Medicare approved swing bed.", 
     "62" : "Discharged/transferred to a inpatient rehabilitation facility including distinct part units of a hospital.", 
     "63" : "Discharged/transferred to long term care hospitals", 
     "64" : "Discharged/transferred to a nursing facility certified under Medicaid but not certified under Medicare", 
     "65" : "Discharged/transferred to a psychiatric hospital or psychiatric distinct part unit of a hospital.", 
     "66" : "Discharged/transferred to a Critical Access Hospital (CAH).", 
     "70" : "Discharged/transferred to another type of health care institution not defined elsewhere in the code list."
 };

 var eOutcome334_03 = {
     "4303001" : "Disaster Tag", 
     "4303003" : "Fire Incident Report", 
     "4303005" : "Hospital-Receiving", 
     "4303007" : "Hospital-Transferring", 
     "4303009" : "Law Enforcement Report", 
     "4303011" : "Other (Not Listed)", 
     "4303013" : "Other Registry", 
     "4303015" : "Other Report", 
     "4303017" : "Patient ID", 
     "4303019" : "Prior EMS Patient Care Report", 
     "4303021" : "STEMI Registry", 
     "4303023" : "Stroke Registry", 
     "4303025" : "Trauma Registry", 
 };
var eOutcome334_17 = {
    "4317001" : "No Symptoms At All", 
    "4317003" : "No significant disability despite symptoms; able to carry out all usual duties and activities", 
    "4317005" : "Slight disability; unable to carry out all previous activities; but able to look after own affairs without assistance", 
    "4317007" : "Moderate disability; requiring some help; but able to walk without assistance", 
    "4317009" : "Moderately severe disability; unable to walk without assistance and unable to attend to own bodily needs without assistance", 
    "4317011" : "Severe disability; bedridden; incontinent and requiring constant nursing care and attention", 
    "4317013" : "Dead"
}

function setCodeText(NEMSISElementNumber, valueArray) {
    var _return = [];
    switch (NEMSISElementNumber) {
        case "eOutcome.01":
            if (eOutcome334_01[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eOutcome334_01[valueArray];
            }
            break;
        case "eOutcome.02":
            if (eOutcome334_02[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eOutcome334_02[valueArray];
            }
            break;

        case "eOutcome.03":
            if (eOutcome334_03[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eOutcome334_03[valueArray];
            }
            break;

        case "eOutcome.17":
            if (eOutcome334_17[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eOutcome334_17[valueArray];
            }
            break;


        default:
            _return = " UNDEFINED";
    }
    return _return;

};

