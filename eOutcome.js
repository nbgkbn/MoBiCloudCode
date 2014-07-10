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
    if (typeof businessObject == undefined) {
        SetNotApplicable();
        return _retArray;
    }
    var elementList = businessObject.sections[xx].attributes.elements;
    var _retArray = [];

    _retArray.push("<eOutcome>")
    OLAPArray.push("<eOutcome>")

    //eOutcome.01/////////
    _val = getValue(elementList, "eOutcome.01");
    if (_val == null)
    {
        OLAPArray.push('\t\t\t' + "<EmergencyDepartmentDisposition>" + "NOT RECORDED" + "</EmergencyDepartmentDisposition>" + '\n');
        _retArray.push('/t' + "<eOutcome.01" + NIL_V3NOT_RECORDED);
        eOutcome["eOutcome.01"] = V3NOT_RECORDED;
        v2Array.push({ section: "E22", element: "E22_01", val: v2NOT_RECORDED });

    }
    else
    {
        OLAPArray.push('\t\t\t' + "<EmergencyDepartmentDisposition>" + setCodeText("eOutcome.01", _val) + "</EmergencyDepartmentDisposition>" + '\n');
        v2Array.push({ section: "E22", element: "E22_01", val: setV2("eOutcome.01", _val) });
        eOutcome["eOutcome.01"] = _val;
        _retArray.push('/t' + "<eOutcome.01>" + _val + "</eOutcome.01>");
    };

    //eOutcome.02/////////
    _val = getValue(elementList, "eOutcome.02");
    if (_val == null)
    {
        OLAPArray.push('\t\t\t' + "<HospitalDisposition>" + "NOT RECORDED" + "</HospitalDisposition>" + '\n');
        _retArray.push('/t' + "<eOutcome.01" + NIL_V3NOT_RECORDED);
        eOutcome["eOutcome.02"] = V3NOT_RECORDED;
        v2Array.push({ section: "E22", element: "E22_02", val: v2NOT_RECORDED });
    }
    else
    {
        OLAPArray.push('\t\t\t' + "<HospitalDisposition>" + setCodeText("eOutcome.02", _val) + "</HospitalDisposition>" + '\n');
        eOutcome["eOutcome.02"] = _val;
        _retArray.push('/t' + "<eOutcome.02>" + _val + "</eOutcome.02>");
        v2Array.push({ section: "E22", element: "E22_02", val: setV2("eOutcome.02", _val) });
    };


    /////////////////////////////////
    var _retArray = [];
    _retVal.push('/t' + "<eOutcome.ExternalDataGroup>")
    OLAPArray.push('/t' + "<eOutcome.ExternalDataGroup>")

    _sectionIndex = getSectionIndex(businessObject.sections[xx].attributes, "eOutcome.ExternalDataGroup");
    for (var x = 0; x < _sectionIndex.length; x++)
    {

        //eOutcome.03/////////
        _val = getValue(businessObject.elements.sections[i].attributes.elements, "eOutcome.03");
        if (_val == null)
        {
            OLAPArray.push('\t\t\t' + "<ExternalReportIDNumberType>" + null + "</ExternalReportIDNumberType>" + '\n');
            _retArray.push('/t' + "<eOutcome.03>" + null + "</eOutcome.03>");
            eOutcome["eOutcome.03"] = null;
        }
        else
        {
            OLAPArray.push('\t\t' + "<ExternalReportIDNumberType>" + setCodeText("eOutcome.03", _val) + "</ExternalReportIDNumberType>" + '\n');
            eOutcome["eOutcome.03"] = _val;
            _retArray.push('/t/t' + "<eOutcome.03>" + _val + "</eOutcome.03>");
        };

        //eOutcome.04/////////
        _val = getValue(businessObject.elements.sections[i].attributes.elements, "eOutcome.04");
        if (_val == null)
        {
            OLAPArray.push('\t\t\t' + "<ExternalReportIDNumber>" + null + "</ExternalReportIDNumber>" + '\n');
            _retArray.push('/t' + "<eOutcome.04>" + null + "</eOutcome.04>");
            eOutcome["eOutcome.04"] = null;
        }
        else
        {
            OLAPArray.push('\t\t\t' + "<ExternalReportIDNumber>" + _val + "</ExternalReportIDNumber>" + '\n');
            eOutcome["eOutcome.04"] = _val;
            _retArray.push('/t/t' + "<eOutcome.04>" + _val + "</eOutcome.04>");
        };


        //eOutcome.05/////////
        _val = getValue(businessObject.elements.sections[i].attributes.elements, "eOutcome.05");
        if (_val == null)
        {
            OLAPArray.push('\t\t\t' + "<OtherReportRegistryType>" + null + "</OtherReportRegistryType>" + '\n');
            _retArray.push('/t' + "<eOutcome.05>" + null + "</eOutcome.05>");
            eOutcome["eOutcome.05"] = null;
        }
        else
        {
            OLAPArray.push('\t\t\t' + "<OtherReportRegistryType>" + _val + "</OtherReportRegistryType>" + '\n');
            eOutcome["eOutcome.05"] = _val;
            _retArray.push('/t/t' + "<eOutcome.05>" + _val + "</eOutcome.05>");
        };


        _retVal.push('/t' + "</eOutcome.ExternalDataGroup>")
        OLAPArray.push('/t' + "</eOutcome.ExternalDataGroup>")

    };
    //////////////////////////////////////////

        //eOutcome.06/////////
        _val = getValue(elementList, "eOutcome.06");
        if (_val == null)
        {
            OLAPArray.push('\t\t\t' + "<EmergencyDepartmentChiefComplaint>" + null + "</EmergencyDepartmentChiefComplaint>" + '\n');
            _retArray.push('/t' + "<eOutcome.06>" + null + "</eOutcome.06>");
            eOutcome["eOutcome.06"] = null;
        }
        else
        {
            OLAPArray.push('\t\t\t' + "<EmergencyDepartmentChiefComplaint>" + _val + "</EmergencyDepartmentChiefComplaint>" + '\n');
            eOutcome["eOutcome.06"] = _val;
            _retArray.push('/t' + "<eOutcome.06>" + _val + "</eOutcome.06>");
        };

        //eOutcome.07/////////
        _val = getValue(elementList, "eOutcome.07");
        if (_val == null)
        {
            OLAPArray.push('\t\t\t' + "<FirstEDSystolicBloodPressure>" + null + "</FirstEDSystolicBloodPressure>" + '\n');
            _retArray.push('/t' + "<eOutcome.07>" + null + "</eOutcome.07>");
            eOutcome["eOutcome.07"] = null;
        }
        else
        {
            OLAPArray.push('\t\t\t' + "<FirstEDSystolicBloodPressure>" + _val + "</FirstEDSystolicBloodPressure>" + '\n');
            eOutcome["eOutcome.07"] = _val;
            _retArray.push('/t' + "<eOutcome.07>" + _val + "</eOutcome.07>");
        };

        //eOutcome.08/////////
        _val = getValue(elementList, "eOutcome.08");
        if (_val == null)
        {
            OLAPArray.push('\t\t\t' + "<EmergencyDepartmentRecordedCauseofInjury>" + null + "</EmergencyDepartmentRecordedCauseofInjury>" + '\n');
            _retArray.push('/t' + "<eOutcome.08>" + null + "</eOutcome.08>");
            eOutcome["eOutcome.08"] = null;
        }
        else
        {
            OLAPArray.push('\t\t\t' + "<EmergencyDepartmentRecordedCauseofInjury>" + _val + "</EmergencyDepartmentRecordedCauseofInjury>" + '\n');
            eOutcome["eOutcome.08"] = _val;
            _retArray.push('/t' + "<eOutcome.08>" + _val + "</eOutcome.08>");
        };

        //eOutcome.09/////////
        _val = getValue(elementList, "eOutcome.09");
        if (_val == null)
        {
            OLAPArray.push('\t\t\t' + "<EmergencyDepartmentProcedures>" + null + "</EmergencyDepartmentProcedures>" + '\n');
            _retArray.push('/t' + "<eOutcome.09>" + null + "</eOutcome.09>");
            eOutcome["eOutcome.09"] = null;
        }
        else
        {
            OLAPArray.push('\t\t\t' + "<EmergencyDepartmentProcedures>" + _val + "</EmergencyDepartmentProcedures>" + '\n');
            eOutcome["eOutcome.09"] = _val;
            _retArray.push('/t' + "<eOutcome.09>" + _val + "</eOutcome.09>");
        };


        //eOutcome.10/////////
        _val = getValue(elementList, "eOutcome.10");
        if (_val == null)
        {
            OLAPArray.push('\t\t\t' + "<EmergencyDepartmentDiagnosis>" + null + "</EmergencyDepartmentDiagnosis>" + '\n');
            _retArray.push('/t' + "<eOutcome.10>" + null + "</eOutcome.10>");
            eOutcome["eOutcome.10"] = null;
        }
        else
        {
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _val.length; i++)
            {
                OLAPArray.push('\t\t\t' + "<EmergencyDepartmentDiagnosis>" + _val[i] + "</EmergencyDepartmentDiagnosis>" + '\n');
                arr1.push(_val[i]);
                _retArray.push('/t' + "<eOutcome.10>" + _val[i] + "</eOutcome.10>");
            }
            eOther["eOutcome.10"] = arr1.slice(0);
        };


        //eOutcome.11/////////
        _val = getValue(elementList, "eOutcome.11");
        if (_val == null)
        {
            OLAPArray.push('\t\t\t' + "<DateTimeofHospitalAdmission>" + null + "</DateTimeofHospitalAdmission>" + '\n');
            _retArray.push('/t' + "<eOutcome.11>" + null + "</eOutcome.11>");
            eOutcome["eOutcome.11"] = null;
        }
        else
        {
            OLAPArray.push('\t\t\t' + "<DateTimeofHospitalAdmission>" + _val + "</DateTimeofHospitalAdmission>" + '\n');
            eOutcome["eOutcome.11"] = _val;
            _retArray.push('/t' + "<eOutcome.11>" + _val + "</eOutcome.11>");
        };

        //eOutcome.12/////////
        _val = getValue(elementList, "eOutcome.12");
        if (_val == null)
        {
            OLAPArray.push('\t\t\t' + "<HospitalProcedures>" + null + "</HospitalProcedures>" + '\n');
            _retArray.push('/t' + "<eOutcome.11>" + null + "</eOutcome.11>");
            eOutcome["eOutcome.11"] = null;
        }
        else
        {
            var arr2 = [];
            for (var i = 0; i < _val.length; i++)
            {
                OLAPArray.push('\t\t\t' + "<HospitalProcedures>" + _val[i] + "</HospitalProcedures>" + '\n');
                arr1.push(_val[i]);
                _retArray.push('/t' + "<eOutcome.12>" + _val[i] + "</eOutcome.12>");
            }
            eOther["eOutcome.12"] = arr1.slice(0);
        };

        //eOutcome.13/////////
        _val = getValue(elementList, "eOutcome.13");
        if (_val == null)
        {
            OLAPArray.push('\t\t\t' + "<HospitalDiagnosis>" + null + "</HospitalDiagnosis>" + '\n');
            _retArray.push('/t' + "<eOutcome.13>" + null + "</eOutcome.13>");
            eOutcome["eOutcome.13"] = null;
        }
        else
        {
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _val.length; i++)
            {
                arr1[i] = _val[i];
                _retArray.push('/t' + "<eOutcome.13>" + _val[i] + "</eOutcome.13>");
                OLAPArray.push('\t\t\t' + "<HospitalDiagnosis>" + _val[i] + "</HospitalDiagnosis>" + '\n');
            }
            eOther["eOutcome.13"] = arr1.slice(0);
        };

        //eOutcome.14/////////
        _val = getValue(elementList, "eOutcome.14");
        if (_val == null)
        {
            OLAPArray.push('\t\t\t' + "<TotalICULengthofStay>" + null + "</TotalICULengthofStay>" + '\n');
            _retArray.push('/t' + "<eOutcome.14>" + null + "</eOutcome.14>");
            eOutcome["eOutcome.14"] = null;
        }
        else
        {
            OLAPArray.push('\t\t\t' + "<TotalICULengthofStay>" + _val + "</TotalICULengthofStay>" + '\n');
            eOutcome["eOutcome.14"] = _val;
            _retArray.push('/t' + "<eOutcome.14>" + _val + "</eOutcome.14>");
        };

        //eOutcome.15/////////
        _val = getValue(elementList, "eOutcome.15");
        if (_val == null)
        {
            OLAPArray.push('\t\t\t' + "<TotalVentilatorDays>" + null + "</TotalVentilatorDays>" + '\n');
            _retArray.push('/t' + "<eOutcome.15>" + null + "</eOutcome.15>");
            eOutcome["eOutcome.15"] = null;
        }
        else
        {
            OLAPArray.push('\t\t\t' + "<TotalVentilatorDays>" + _val + "</TotalVentilatorDays>" + '\n');
            eOutcome["eOutcome.15"] = _val;
            _retArray.push('/t' + "<eOutcome.15>" + _val + "</eOutcome.15>");
        };

        //eOutcome.16/////////
        _val = getValue(elementList, "eOutcome.16");
        if (_val == null)
        {
            OLAPArray.push('\t\t\t' + "<DateTimeofHospitalDischarge>" + null + "</DateTimeofHospitalDischarge>" + '\n');
            _retArray.push('/t' + "<eOutcome.16>" + null + "</eOutcome.16>");
            eOutcome["eOutcome.16"] = null;
        }
        else
        {
            OLAPArray.push('\t\t\t' + "<DateTimeofHospitalDischarge>" + _val + "</DateTimeofHospitalDischarge>" + '\n');
            eOutcome["eOutcome.16"] = _val;
            _retArray.push('/t' + "<eOutcome.16>" + _val + "</eOutcome.16>");
        };

        //eOutcome.17/////////
        _val = getValue(elementList, "eOutcome.17");
        if (_val == null)
        {
            OLAPArray.push('\t\t\t' + "<OutcomeatHospitalDischarge>" + null + "</OutcomeatHospitalDischarge>" + '\n');
            _retArray.push('/t' + "<eOutcome.17>" + null + "</eOutcome.17>");
            eOutcome["eOutcome.17"] = null;
        }
        else
        {
            OLAPArray.push('\t\t\t' + "<OutcomeatHospitalDischarge>" + _val + "</OutcomeatHospitalDischarge>" + '\n');
            eOutcome["eOutcome.17"] = _val;
            _retArray.push('/t' + "<eOutcome.17>" + _val + "</eOutcome.17>");
        }
        _retArray.push("</eOutcome>")
        OLAPArray.push("</eOutcome>")

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