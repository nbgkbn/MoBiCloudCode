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
var WORK = "PhoneNumberType=\"9913009\"";
var PERSONALEMAIL = "EmailAddressType=\"9904001\"";
var WORKEMAIL = "EmailAddressType=\"9904003\"";


var setePatient = function (businessObject)
{
    var _retArray = [];
    var OLAPArray = [];

    if (typeof businessObject == undefined)
    {
        SetNotApplicable();
        return _retArray;
    }
    var elementList = businessObject.attributes.elements;


    console.log(businessObject);

    _retArray.push("<ePatient>" + '\n');
    OLAPArray.push("<ePatient>" + '\n');

    //////////////////////ePatient.01
    _val = getValue(elementList, "ePatient.01");
    if (_val == null)
    {
        ePatient["ePatient.01"] = null;
        OLAPArray.push('\t\t\t' + "<EMSPatientID>" + null + "</EMSPatientID>" + '\n');
        _retArray.push('/t' + "<ePatient.01>" + null + "</ePatient.01>");
    }
    else
    {
        ePatient["ePatient.01"] = _val;
        OLAPArray.push('\t\t\t' + "<EMSPatientID>" + _val + "</EMSPatientID>" + '\n');
        _retArray.push("<ePatient.01>" + _val + "</ePatient.01>")
    };

    _retArray.push('/t' + "<ePatient.PatientNameGroup>")
    OLAPArray.push('/t' + "<ePatient.PatientNameGroup>")

    //////////////////////ePatient.02
   
    _val = getValue(elementList, "ePatient.02");
    if (_val == null)
    {
        if (isRequiredStateElement("ePatient.02"))
        {
            OLAPArray.push('\t\t\t' + "<LastName>" + "NOT_RECORDED" + "</LastName>" + '\n');
            _retArray.push('/t/t' + "<ePatient.02" + NIL_V3NOT_RECORDED);
            ePatient["ePatient.02"] = v3NOT_RECORDED;
            v2Array.push({ section: "E06", element: "E06_01", val: v2NOT_RECORDED });
        }
        else
        {
            OLAPArray.push('\t\t\t' + "<LastName>" + "NOT_REPORTING" + "</LastName>" + '\n');
            _retArray.push('/t/t' + "<ePatient.02" + NIL_V3NOT_REPORTING);
            ePatient["ePatient.02"] = v3NOT_REPORTING;
            v2Array.push({ section: "E06", element: "E06_01", val: v2NOT_REPORTING });
        }
    }
    else
    {
      if (_val == 8801019) 
        {
          _retArray.push('/t/t' + "<ePatient.03" + PN_REFUSED_IS_NILLABLE);
          OLAPArray.push('\t\t\t' + "<LastName>" + "REFUSED" + "</LastName>" + '\n');
          v2Array.push({ section: "E06", element: "E06_01", val: v2NOT_KNOWN });
          ePatient["ePatient.02"] = _val;
        }
      else if (_val[0] == 8801023)
      {
          _retArray.push('/t/t' + "<ePatient.03" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE);
          OLAPArray.push('\t\t\t' + "<LastName>" + "UNABLE_TO_COMPLETE" + "</LastName>" + '\n');
          v2Array.push({ section: "E06", element: "E06_01", val: v2NOT_KNOWN });
          ePatient["ePatient.02"] = _val;
      }
      else
      {
          OLAPArray.push('\t\t\t' + "<LastName>" + _val + "</LastName>" + '\n');
          _retArray.push('/t/t' + "<ePatient.02>" + _val + "</ePatient.02>")
          ePatient["ePatient.02"] = _val;
          v2Array.push({ section: "E06", element: "E06_01", val: _val });
      }
    };

    ///////////ePatient.03////////
    _val = getValue(elementList, "ePatient.03");
    if (_val == null)
    {
        if (isRequiredStateElement("ePatient.03"))
        {
            _retArray.push('/t/t' + "<ePatient.03" + NIL_V3NOT_RECORDED);
            OLAPArray.push('\t\t\t' + "<FirstName>" + "NOT_RECORDED" + "</FirstName>" + '\n');
            v2Array.push({ section: "E06", element: "E06_02", val: v2NOT_RECORDED });
        }
        else
        {
            OLAPArray.push('\t\t\t' + "<FirstName>" + "NOT_REPORTING" + "</FirstName>" + '\n');
            _retArray.push('/t/t' + "<ePatient.03" + NIL_V3NOT_REPORTING);
            v2Array.push({ section: "E06", element: "E06_02", val: v2NOT_REPORTING });
        }
    }
    else
    {
        if (_val == 8801019) 
        {
            OLAPArray.push('\t\t\t' + "<FirstName>" + "REFUSED" + "</FirstName>" + '\n');
            _retArray.push('/t/t' + "<ePatient.03" + PN_REFUSED_IS_NILLABLE);
            v2Array.push({ section: "E06", element: "E06_02", val: v2NOT_KNOWN });
        }
        else if (_val[0] == 8801023)
        {
            OLAPArray.push('\t\t\t' + "<FirstName>" + "UNABLE_TO_COMPLETE" + "</FirstName>" + '\n');
            _retArray.push('/t/t' + "<ePatient.03" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE);
            v2Array.push({ section: "E06", element: "E06_02", val: v2NOT_KNOWN });
        }
        else
        {
            OLAPArray.push('\t\t\t' + "<FirstName>" + _val + "</FirstName>" + '\n');
            ePatient["ePatient.03"] = _val;
            v2Array.push({ section: "E06", element: "E06_02", val: _val });
            _retArray.push('/t/t' + "<ePatient.03>" + val + "</ePatient.03>");
        }
    };


    ///////////ePatient.03////////
    _val = getValue(elementList, "ePatient.04");
    if (_val == null)
    {
        OLAPArray.push('\t\t\t' + "<MiddleInitialName>" + null + "</MiddleInitialName>" + '\n');
        _retArray.push('/t' + "<ePatient.04>" + null + "</ePatient.04>");
        v2Array.push({ section: "E06", element: "E06_03", val: null });
    }
    else
    {
        v2Array.push({ section: "E06", element: "E06_03", val: _val });
        OLAPArray.push('\t\t\t' + "<MiddleInitialName>" + _val + "</MiddleInitialName>" + '\n');
        _retArray.push("<ePatient.04>" + _val + "</ePatient.04>")
    };
    
    OLAPArray.push('/t' + "</ePatient.PatientNameGroup>")
    _retArray.push('/t' + "</ePatient.PatientNameGroup>")

    ///////////ePatient.05////////
    _val = getValue(elementList, "ePatient.05");
    if (_val == null)
    {
        _retArray.push('/t/t' + "<ePatient.05>" + null + "</ePatient.05>")
        OLAPArray.push('\t\t\t' + "<PatientsHomeAddress>" + null + "</PatientsHomeAddress>" + '\n');
        ePatient["ePatient.05"] = null;
        v2Array.push({ section: "E06", element: "E06_04", val: v2NOT_RECORDED });
    }
    else
    {
        _retArray.push('/t/t' + "<ePatient.05>" + _val + "</ePatient.05>")
        OLAPArray.push('\t\t\t' + "<PatientsHomeAddress>" + _val + "</PatientsHomeAddress>" + '\n');
        ePatient["ePatient.05"] = _val;
        v2Array.push({ section: "E06", element: "E06_04", val: _val });
    };

    ///////////ePatient.06////////
    _val = getValue(elementList, "ePatient.06");
    if (_val == null)
    {
        _retArray.push('/t/t' + "<ePatient.06>" + null + "</ePatient.06>")
        OLAPArray.push('\t\t\t' + "<PatientsHomeCity>" + null + "</PatientsHomeCity>" + '\n');
        ePatient["ePatient.06"] = null;
        v2Array.push({ section: "E06", element: "E06_05", val: v2NOT_RECORDED });

    }
    else
    {
        OLAPArray.push('\t\t\t' + "<PatientsHomeCity>" + _val + "</PatientsHomeCity>" + '\n');
        ePatient["ePatient.06"] = _val;
        v2Array.push({ section: "E06", element: "E06_05", val: _val });
        _retArray.push("<ePatient.06>" + _val + "</ePatient.06>")
    };

    ///////////ePatient.07////////
    _val = getValue(elementList, "ePatient.07");
    if (_val == null)
    {
        if (isRequiredStateElement("ePatient.07"))
        {
            OLAPArray.push('\t\t\t' + "<PatientsHomeCounty>" + "NOT_RECORDED" + "</PatientsHomeCounty>" + '\n');
            _retArray.push('/t/t' + "<ePatient.07" + NIL_V3NOT_RECORDED);
            ePatient["ePatient.07"] = v3NOT_RECORDED;
            v2Array.push({ section: "E06", element: "E06_06", val: v2NOT_RECORDED });
        }        
    }
    else
    {
        OLAPArray.push('\t\t\t' + "<PatientsHomeCounty>" + _val + "</PatientsHomeCounty>" + '\n');
        _retArray.push('/t/t' + "<ePatient.07>" + _val + "</ePatient.07>")
        ePatient["ePatient.07"] = _val;
        v2Array.push({ section: "E06", element: "E06_06", val: _val });
    };

    ///////////ePatient.08////////
    _val = getValue(elementList, "ePatient.08");
    if (_val == null)
    {
        if (isRequiredStateElement("ePatient.08"))
        {
            OLAPArray.push('\t\t\t' + "<PatientsHomeState>" + "NOT_RECORDED" + "</PatientsHomeState>" + '\n');
            _retArray.push('/t/t' + "<ePatient.08" + NIL_V3NOT_RECORDED);
            ePatient["ePatient.08"] = v3NOT_RECORDED;
            v2Array.push({ section: "E06", element: "E06_07", val: v2NOT_RECORDED });
        }
    }
    else
    {
        OLAPArray.push('\t\t\t' + "<PatientsHomeState>" + _val + "</PatientsHomeState>" + '\n');
        _retArray.push('/t/t' + "<ePatient.08>" + _val + "</ePatient.08>")
        ePatient["ePatient.08"] = _val;
        v2Array.push({ section: "E06", element: "E06_07", val: _val });
    };


    ///////////ePatient.09////////
    _val = getValue(elementList, "ePatient.09");
    if (_val == null)
    {
        if (isRequiredStateElement("ePatient.09"))
        {
            OLAPArray.push('\t\t\t' + "<PatientsHomeZip>" + "NOT_RECORDED" + "</PatientsHomeZip>" + '\n');
            _retArray.push('/t' + "<ePatient.09" + NIL_V3NOT_RECORDED);
            ePatient["ePatient.09"] = v3NOT_RECORDED;
            v2Array.push({ section: "E06", element: "E06_08", val: v2NOT_REPORTING });
        }
    }
    else
    {
        OLAPArray.push('\t\t\t' + "<PatientsHomeZip>" + _val + "</PatientsHomeZip>" + '\n');
        _retArray.push('/t/t' + "<ePatient.09>" + _val + "</ePatient.09>")
        ePatient["ePatient.09"] = _val;
        v2Array.push({ section: "E06", element: "E06_08", val: _val });
    };


    ///////////ePatient.10////////
    _val = getValue(elementList, "ePatient.10");
    if (_val == null)
    {
        OLAPArray.push('\t\t\t' + "<PatientsHomeCountry>" + null + "</PatientsHomeCountry>" + '\n');
        _retArray.push('/t/t' + "<ePatient.10>" + null + "</ePatient.10>")
        ePatient["ePatient.10"] = null;
        v2Array.push({ section: "E06", element: "E06_09", val: v2NOT_REPORTING });
    }
    else
    {
        OLAPArray.push('\t\t\t' + "<PatientsHomeCountry>" + _val + "</PatientsHomeCountry>" + '\n');
        _retArray.push('/t/t' + "<ePatient.10>" + _val + "</ePatient.10>")
        ePatient["ePatient.10"] = _val;
        v2Array.push({ section: "E06", element: "E06_09", val: _val });
    };


    ///////////ePatient.11////////
    _val = getValue(elementList, "ePatient.11");
    if (_val == null)
    {
        OLAPArray.push('\t\t\t' + "<PatientHomeCensusTract>" + null + "</PatientHomeCensusTract>" + '\n');
        _retArray.push('/t/t' + "<ePatient.11>" + null + "</ePatient.11>")
        ePatient["ePatient.11"] = null;
    }
    else {
        OLAPArray.push('\t\t\t' + "<PatientHomeCensusTract>" + _val + "</PatientHomeCensusTract>" + '\n');
        _retArray.push('/t/t' + "<ePatient.11>" + _val + "</ePatient.11>")
        ePatient["ePatient.11"] = _val;
    };

    ///////////ePatient.12////////
    _val = getValue(elementList, "ePatient.12");
    if (_val == null)
    {
        OLAPArray.push('\t\t\t' + "<SocialSecurityNumber>" + null + "</SocialSecurityNumber>" + '\n');
        _retArray.push('/t/t' + "<ePatient.12>" + null + "</ePatient.12>")
        ePatient["ePatient.12"] = null;
    }
    else
    {
        OLAPArray.push('\t\t\t' + "<SocialSecurityNumber>" + _val + "</SocialSecurityNumber>" + '\n');
        _retArray.push('/t/t' + "<ePatient.12>" + _val + "</ePatient.12>")
        ePatient["ePatient.12"] = _val;    
    };


    ///////////ePatient.13////////
    _val = getValue(elementList, "ePatient.13");
    if (_val == null)
    {
        if (isRequiredStateElement("ePatient.13"))
        {
            OLAPArray.push('\t\t\t' + "<Gender>" + null + "</Gender>" + '\n');
            _retArray.push('/t' + "<ePatient.13" + NIL_V3NOT_RECORDED);
            ePatient["ePatient.13"] = null;
            v2Array.push({ section: "E06", element: "E06_11", val: v2NOT_REPORTING });
        }        
    }
    else
    {
        OLAPArray.push('\t\t\t' + "<Gender>" + setCodeText("ePatient.13", _val[i]) + "</Gender>" + '\n');
        _retArray.push('/t/t' + "<ePatient.13>" + _val[0] + "</ePatient.13>")
        ePatient["ePatient.13"] = _val;
        v2Array.push({ section: "E06", element: "E06_11", val: setV2("ePatient.13", _val) });
    };


///////////ePatient.14////////
    _val = getValue(elementList, "ePatient.14");
    if (_val == null) 
    {
        if (isRequiredStateElement("ePatient.14")) 
        {
            OLAPArray.push('\t\t\t' + "<Race>" + null + "</Race>" + '\n');
            _retArray.push('/t' + "<ePatient.14" + NIL_V3NOT_RECORDED);
            ePatient["ePatient.14"] = null;
            v2Array.push({ section: "E06", element: "E06_12", val: v2NOT_RECORDED });
        }
    }
    else 
    {
        var arr1 = [];
        var arr2 = [];
        for (var i = 0; i < _val.length; i++) {
            arr1[i] = _val[i];
            OLAPArray.push('\t\t\t' + "<Race>" + setCodeText("ePatient.14", _val[i]) + "</Race>" + '\n');
            v2Array.push({ section: "E06", element: "E06_12", val: SetV2("ePatient.14", _val[i]) });            
            _retArray.push('/t' + "<ePatient.14>" + _val[i] + "</ePatient.14>");
        }
        ePatient["ePatient.14"] = arr1.slice(0);
    };

    /////////////////////////
    _retArray.push('/t' + "<ePatient.AgeGroup>")
    OLAPArray.push('/t' + "<ePatient.AgeGroup>")
    
    
///////////ePatient.15////////
    _val = getValue(elementList, "ePatient.15");
    if (_val == null) 
    {
        if (isRequiredStateElement("ePatient.15")) 
        {
            OLAPArray.push('\t\t\t' + "<Age>" + null + "</Age>" + '\n');
            _retArray.push('/t' + "<ePatient.15" + NIL_V3NOT_RECORDED);
            ePatient["ePatient.15"] = null;
            v2Array.push({ section: "E06", element: "E06_14", val: v2NOT_RECORDED });    
        }        
    }
    else 
    {
        OLAPArray.push('\t\t\t' + "<Age>" + _val + "</Age>" + '\n');
        _retArray.push('/t/t' + "<ePatient.15>" + _val + "</ePatient.15>")
        ePatient["ePatient.15"] = _val;
        v2Array.push({ section: "E06", element: "E06_14", val: SetV2("ePatient.15", _val) });
    };

    ///////////ePatient.15////////
    _val = getValue(elementList, "ePatient.16");
    if (_val == null) 
    {
        if (isRequiredStateElement("ePatient.16")) 
        {
            OLAPArray.push('\t\t\t' + "<AgeUnits>" + null + "</AgeUnits>" + '\n');
            _retArray.push('/t/t' + "<ePatient.16" + NIL_V3NOT_RECORDED);
            ePatient["ePatient.16"] = v3NOT_RECORDED;
            v2Array.push({ section: "E06", element: "E06_14", val: v2NOT_RECORDED });            
        }
    }
    else 
    {
        OLAPArray.push('\t\t\t' + "<AgeUnits>" + _val + "</AgeUnits>" + '\n');
        _retArray.push('/t/t' + "<ePatient.16>" + _val[0] + "</ePatient.16>")
        ePatient["ePatient.16"] = _val;
        v2Array.push({ section: "E06", element: "E06_14", val: SetV2("ePatient.16", _val) });
    };

    _retArray.push('/t' + "</ePatient.PatientNameGroup>")
    OLAPArray.push('/t' + "</ePatient.PatientNameGroup>")

    ///////////ePatient.17////////
    _val = getValue(elementList, "ePatient.17");
    if (_val == null)
    {
        if (isRequiredStateElement("ePatient.17"))
        {
            OLAPArray.push('\t\t\t' + "<DateofBirth>" + "NOT RECORDED" + "</DateofBirth>" + '\n');
            _retArray.push('/t' + "<ePatient.17" + NIL_V3NOT_RECORDED);
            ePatient["ePatient.17"] = v3NOT_RECORDED;
            v2Array.push({ section: "E06", element: "E06_16", val: v2NOT_RECORDED });
        }
        else
        {
            OLAPArray.push('\t\t\t' + "<DateofBirth>" + "NOT REPORTING" + "</DateofBirth>" + '\n');
            _retArray.push('/t' + "<ePatient.17" + NIL_V3NOT_REPORTING);
            ePatient["ePatient.17"] = v3NOT_REPORTING;
            v2Array.push({ section: "E06", element: "E06_16", val: v2NOT_REPORTING });
        }
        if (_val == 8801019)
        {
            OLAPArray.push('\t\t\t' + "<DateofBirth>" + "REFUSED" + "</DateofBirth>" + '\n');
            _retArray.push('/t' + "<ePatient.17" + PN_REFUSED_IS_NILLABLE);
            ePatient["ePatient.17"] = "8801019";
            v2Array.push({ section: "E06", element: "E06_16", val: v2NOT_KNOWN });
        }
        if (_val == 8801023)
        {
            OLAPArray.push('\t\t\t' + "<DateofBirth>" + "UNABLE TO COMPLETE" + "</DateofBirth>" + '\n');
            _retArray.push('/t' + "<ePatient.17" + PN_UNABLE_TO_COMPLETE_IS_NILLABLE);
            ePatient["ePatient.17"] = "8801023";
            v2Array.push({ section: "E06", element: "E06_16", val: v2NOT_KNOWN });
        }
    }
    else
    {
        OLAPArray.push('\t\t\t' + "<DateofBirth>" + _val + "</DateofBirth>" + '\n');
        _retArray.push('/t/t' + "<ePatient.17>" + _val + "</ePatient.17>")
        ePatient["ePatient.17"] = _val;
        v2Array.push({ section: "E06", element: "E06_16", val: _val });
    };



    //ePatient.18////////////
    _val = getValue(elementList, "ePatient.18");
    if (_val == null)
    {
        OLAPArray.push('\t\t\t' + "<PatientPhoneNumber>" + null + "</PatientPhoneNumber>" + '\n');
        _retArray.push('/t' + "<ePatient.18" + null);
        ePatient["ePatient.18"] = null;
        v2Array.push({ section: "E06", element: "E06_17", val: v2NOT_KNOWN });
    }
    else
    {
        var arr1 = [];
        var arr2 = [];
        for (var i = 0; i < _val.length; i++) {
            arr1.push(PhoneNumberType + " " + _val[i]);;            
            v2Array.push({ section: "E06", element: "E06_17", val: _val[i] });
            if (PhoneNumberType == 9913001) {
                OLAPArray.push('\t\t\t' + "<PatientPhoneNumber" + FAX + ">" + _val[i] + "</PatientPhoneNumber>" + '\n');
                _retArray.push('/t' + "<ePatient.18" + FAX + ">" + _val[i] + "</ePatient.18>");
            }
            else if (PhoneNumberType == 9913003) {
                OLAPArray.push('\t\t\t' + "<PatientPhoneNumber" + HOME + ">" + _val[i] + "</PatientPhoneNumber>" + '\n');
                _retArray.push('/t' + "<ePatient.18" + HOME + ">" + _val[i] + "</ePatient.18>");
            }
            else if (PhoneNumberType == 9913005) {
                OLAPArray.push('\t\t\t' + "<PatientPhoneNumber" + MOBILE + ">" + _val[i] + "</PatientPhoneNumber>" + '\n');
                _retArray.push('/t' + "<ePatient.18" + MOBILE + ">" + _val[i] + "</ePatient.18>");
            }
            else if (PhoneNumberType == 9913007) {
                OLAPArray.push('\t\t\t' + "<PatientPhoneNumber" + PAGER + ">" + _val[i] + "</PatientPhoneNumber>" + '\n');
                _retArray.push('/t' + "<ePatient.18" + PAGER + ">" + _val[i] + "</ePatient.18>");
            }
            else if (PhoneNumberType == 9913009) {
                OLAPArray.push('\t\t\t' + "<PatientPhoneNumber" + WORK + ">" + _val[i] + "</PatientPhoneNumber>" + '\n');
                _retArray.push('/t' + "<ePatient.18" + WORK + ">" + _val[i] + "</ePatient.18>");
            }
            else {
                _retArray.push('/t' + "<ePatient.18>" + _val[i] + "</ePatient.18>");
                OLAPArray.push('\t\t\t' + "<PatientPhoneNumber>" + _val[i] + "</PatientPhoneNumber>" + '\n');
            }
        }       
        ePatient["ePatient.18"] = arr1.slice(0);
    };


    //ePatient.19////////////
    _val = getValue(elementList, "ePatient.18");
    if (_val == null)
    {
        OLAPArray.push('\t\t\t' + "<PatientEmailAddress>" + null + "</PatientEmailAddress>" + '\n');
        _retArray.push('/t' + "<ePatient.19" + null);
        ePatient["ePatient.19"] = null;
    }
    else
    {
        var arr1 = [];       
        for (var i = 0; i < _val.length; i++)
        {
            arr1.push(PhoneNumberType + " " + _val[i]);;
            v2Array.push({ section: "E06", element: "E06_17", val: _val[i] });
            if (PhoneNumberType == 9904001) {
                OLAPArray.push('\t\t\t' + "<PatientEmailAddress" + PERSONALEMAIL + ">" + _val[i] + "</PatientEmailAddress>" + '\n');
                _retArray.push('/t' + "<ePatient.19" + PERSONALEMAIL + ">" + _val[i] + "</ePatient.19>");
            }
            else if (PhoneNumberType == 9913003)
            {
                OLAPArray.push('\t\t\t' + "<PatientPhoneNumber" + WORKEMAIL + ">" + _val[i] + "</PatientPhoneNumber>" + '\n');
                _retArray.push('/t' + "<ePatient.18" + WORKEMAIL + ">" + _val[i] + "</ePatient.18>");
            }
            else
            {
                _retArray.push('/t' + "<ePatient.19>" + _val[i] + "</ePatient.19>");
                OLAPArray.push('\t\t\t' + "<PatientEmailAddress>" + _val[i] + "</PatientEmailAddress>" + '\n');
            }
        }
        ePatient["ePatient.19"] = arr1.slice(0);
    };


    //ePatient.20////////////
    _val = getValue(elementList, "ePatient.20");
    if (_val == null)
    {
        OLAPArray.push('\t\t\t' + "<StateIssuingDriverLicense>" + "NOT REPORTING" + "</StateIssuingDriverLicense>" + '\n');
        ePatient["ePatient.20"] = null;
        v2Array.push({ section: "E06", element: "E06_18", val: v2NOT_KNOWN });
        _retArray.push('/t' + "<ePatient.20>" + null + "</ePatient.20>");
    }
    else
    {
        OLAPArray.push('\t\t\t' + "<StateIssuingDriverLicense>" + _val + "</StateIssuingDriverLicense>" + '\n');
        _retArray.push("<ePatient.20>" + _val + "</ePatient.20>")
        v2Array.push({ section: "E06", element: "E06_18", val: _val });
        ePatient["ePatient.20"] = _val;
    };


    _val = getValue(elementList, "ePatient.21");
    if (_val == null)
    {
        OLAPArray.push('\t\t\t' + "<DriverLicenseNumber>" + "NOT REPORTING" + "</DriverLicenseNumber>" + '\n');
        ePatient["ePatient.21"] = null;
        v2Array.push({ section: "E06", element: "E06_19", val: v2NOT_KNOWN });
        _retArray.push('/t' + "<ePatient.21>" + null + "</ePatient.21>");
    }
    else
    {
        _retArray.push("<ePatient.21>" + _val + "</ePatient.21>")
        ePatient["ePatient.21"] = _val;
        v2Array.push({ section: "E06", element: "E06_19", val: _val});
        OLAPArray.push('\t\t\t' + "<DriverLicenseNumber>" + _val + "</DriverLicenseNumber>" + '\n');      
    };

    _retArray.push('/t' + "</ePatient")
    OLAPArray.push('/t' + "</ePatient>")

    
    return V3XMLArray;
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



function setV2(NEMSISElementNumber, valueArray) {
    //    console.log(NEMSISElementNumber);
    var _retArray = [];
    //    console.log(valueArray);
    switch (NEMSISElementNumber) {
        case "ePatient.13":

            if (ePatient13[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(ePatient13[valueArray[0]]);
            }
            break;
        case "ePatient.14":

            if (ePatient14[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(ePatient14[valueArray[0]]);
            }
            break;

        case "ePatient.16":

            if (ePatient16[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(ePatient16[valueArray[0]]);
            }
            break;

        default:
            _retArray.push(NEMSISElementNumber = " version 2 not found");
    }
    return _retArray;
};

var ePatient13 = {
    "9906003": "650",
    "9906001": "655"
};

var ePatient14 = {
    "2514001": "660",
    "2514003": "665",
    "2514005": "670",
    "2514007": "685",
    "2514009": "675",
    "2514011": "680"
};

var ePatient16 = {
    "2516003": "700",
    "2516001": "705",
    "2516007": "710",
    "2516009": "715"
};



