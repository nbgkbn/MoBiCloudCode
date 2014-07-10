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

var ePayment = new Object;
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

var setePayment = function (businessObject) {
    _retArray.push = "<ePayment>+ '\n'";
    OLAPArray.push("<ePayment>+ '\n'")

    //////////////////ePayment.01
    _val = getValue(businessObject.elements, "ePayment.01");
    if (_val == null)
    {
        OLAPArray.push('/t' + "<PrimaryMethodofPayment>" + "NOT RECORDED" + "</PrimaryMethodofPayment>" + '\n');
        _retArray.push("<ePayment.01" + NIL_V3NOT_RECORDED + '\n');
        v2Array.push({ section: "E07", element: "E07_01", val: v2NOT_RECORDED });
        ePayment["ePayment.01"] = v3NOT_RECORDED
    }
    else
    {
        OLAPArray.push('/t' + "<PrimaryMethodofPayment>" + setCodeText("ePayment.01", _val) + "</PrimaryMethodofPayment>" + '\n');
        _retArray.push('/t' + "<ePayment.01>" + _val + "</ePayment.01>" + '\n');
        v2Array.push({ section: "E07", element: "E07_01", val: setV2("ePayment.01", _val) });
        ePayment["ePayment.01"] = _val;
    };
    ///////////////////////////////////////////////////////////////
    _retArray.push('/t' + "<ePayment.CertificateGroup>" + '\n');

    //////////////////ePayment.02
    _val = getValue(businessObject.elements, "ePayment.02");
    if (_val == null)
    {
        OLAPArray.push('/t' + "<PhysicianCertificationStatement>" + null + "</PhysicianCertificationStatement>" + '\n');
        _retArray.push('/t' + "<ePayment.02>" + null + "</ePayment.02>" + '\n');
        v2Array.push({ section: "E07", element: "E07_02", val: v2NOT_KNOWN });
        ePayment["ePayment.02"] = null;
    }
    else 
    {
        OLAPArray.push('/t' + "<PhysicianCertificationStatement>" + setCodeText("ePayment.02", _val) + "</PhysicianCertificationStatement>" + '\n');
        _retArray.push('/t/t' + "<ePayment.02>" + _val + "</ePayment.02>" + '\n')
        v2Array.push({ section: "E07", element: "E07_02", val: setV2("ePayment.02", _val) });
        ePayment["ePayment.02"] = _val;
    };

    //////////////////ePayment.03
    _val = getValue(businessObject.elements, "ePayment.03");
    if (_val == null)
    {
        OLAPArray.push('/t' + "<DatePhysicianCertificationStatementSigned>" + null + "</DatePhysicianCertificationStatementSigned>" + '\n');
        _retArray.push('/t' + "<ePayment.03>" + null + "</ePayment.03>" + '\n');
        ePayment["ePayment.03"] = null;
    }
    else
    {
        OLAPArray.push('/t' + "<DatePhysicianCertificationStatementSigned>" + _val + "</DatePhysicianCertificationStatementSigned>" + '\n');
        _retArray.push('/t/t' + "<ePayment.03>" + _val + "</ePayment.03>" + '\n')
        ePayment["ePayment.03"] = _val;
    };


    //ePayment.04////////////
    _val = getValue(elementList, "ePayment.04");
    if (_val == null)
    {

        OLAPArray.push('/t' + "<ReasonforPhysicianCertificationStatement>" + null + "</ReasonforPhysicianCertificationStatement>" + '\n');
        _retArray.push('/t' + "<ePayment.04>" + null + "</ePayment.04>" + '\n');
        ePayment["ePayment.04"] = null;
    }
    else {
        var arr1 = [];
        var arr2 = [];
        for (var i = 0; i < _val.length; i++) {
            arr1[i] = _val[i];

            OLAPArray.push('/t' + "<ReasonforPhysicianCertificationStatement>" + setCodeText("ePayment.04", _val) + "</ReasonforPhysicianCertificationStatement>" + '\n');
            _retArray.push('/t/t' + "<ePayment.04>" + _val[i] + "</ePayment.04>" + '\n');
        }
        ePayment["ePayment.04"] = arr1.slice(0);
    };

    //////////////////ePayment.05
    _val = getValue(businessObject.elements, "ePayment.05");
    if (_val == null)
    {
        OLAPArray.push('/t' + "<HealthcareProviderTypeSigningPhysicianCertificationStatement>" + null + "</HealthcareProviderTypeSigningPhysicianCertificationStatement>" + '\n');
        _retArray.push('/t' + "<ePayment.05>" + null + "</ePayment.05>" + '\n');
        ePayment["ePayment.05"] = null;
    }
    else
    {
        OLAPArray.push('/t' + "<HealthcareProviderTypeSigningPhysicianCertificationStatement>" + _val + "</HealthcareProviderTypeSigningPhysicianCertificationStatement>" + '\n');
        _retArray.push('/t/t' + "<ePayment.05>" + _val + "</ePayment.05>" + '\n')
        ePayment["ePayment.05"] = _val;
    };

    //////////////////ePayment.06
    _val = getValue(businessObject.elements, "ePayment.06");
    if (_val == null)
    {
        OLAPArray.push('/t' + "<LastNameofIndividualSigningPhysicianCertificationStatement>" + null + "</LastNameofIndividualSigningPhysicianCertificationStatement>" + '\n');
        _retArray.push('/t' + "<ePayment.06>" + null + "</ePayment.06>" + '\n');
        ePayment["ePayment.06"] = null;
    }
    else
    {
        OLAPArray.push('/t' + "<LastNameofIndividualSigningPhysicianCertificationStatement>" + _val + "</LastNameofIndividualSigningPhysicianCertificationStatement>" + '\n');
        _retArray.push('/t/t' + "<ePayment.06>" + _val + "</ePayment.06>" + '\n');
        ePayment["ePayment.06"] = _val;
    };

    //////////////////ePayment.07
    _val = getValue(businessObject.elements, "ePayment.07");
    if (_val == null)
    {
        OLAPArray.push('/t' + "<FirstNameofIndividualSigningPhysicianCertificationStatement>" + null + "</FirstNameofIndividualSigningPhysicianCertificationStatement>" + '\n');
        _retArray.push('/t' + "<ePayment.07>" + null + "</ePayment.07>" + '\n');
        ePayment["ePayment.07"] = null;

    }
    else
    {
        OLAPArray.push('/t' + "<FirstNameofIndividualSigningPhysicianCertificationStatement>" + _val + "</FirstNameofIndividualSigningPhysicianCertificationStatement>" + '\n');
        _retArray.push('/t/t' + "<ePayment.07>" + _val + "</ePayment.07>" + '\n')
        ePayment["ePayment.07"] = _val;
    };
    _retArray.push('/t' + "</ePayment.CertificateGroup>" + '\n');
    OLAPArray.push('/t' + "</ePayment.CertificateGroup>" + '\n');

    //////////////////////////////////////////
    //////////////////ePayment.08
    _val = getValue(businessObject.elements, "ePayment.08");
    if (_val == null)
    {
        OLAPArray.push('/t' + "<PatientResidesinServiceArea>" + null + "</PatientResidesinServiceArea>" + '\n');
        _retArray.push('/t' + "<ePayment.08>" + null + "</ePayment.08>" + '\n');
        ePayment["ePayment.08"] = null;
    }
    else
    {
        OLAPArray.push('/t' + "<PatientResidesinServiceArea>" + _val + "</PatientResidesinServiceArea>" + '\n');
        _retArray.push('/t' + "<ePayment.08>" + _val + "</ePayment.08>" + '\n')
        ePayment["ePayment.08"] = _val;
    };

    ///////////////////////////////////////////////ePayment.InsuranceGroup
    _sectionIndex = getSectionIndex(businessObject.sections[i].attributes, "ePayment.InsuranceGroup");
    for (var x = 0; x < _sectionIndex.length; x++) {
        var listOfElements = businessObject.sections[i].attributes.sections[_sectionIndex[x]].attributes.elements
        _retArray.push('/t/t' + "<ePayment.InsuranceGroup>" + '\n');
        OLAPArray.push('/t/t' + "<ePayment.InsuranceGroup>" + '\n');

        //////////////////ePayment.09
        _val = getValue(listOfElements, "ePayment.09");
        if (_val == null)
        {
            OLAPArray.push('/t/t/t' + "<InsuranceCompanyID>" + null + "</InsuranceCompanyID>" + '\n');
            _retArray.push('/t/t/t' + "<ePayment.09>" + null + "</ePayment.09>" + '\n');
            ePayment["ePayment.09"] = null;
        }
        else
        {
            OLAPArray.push('/t/t/t' + "<InsuranceCompanyID>" + _val + "</InsuranceCompanyID>" + '\n');
            _retArray.push('/t/t/t' + "<ePayment.09>" + _val + "</ePayment.09>" + '\n')
            InsuranceGroup["ePayment.09"] = _val;
        };

        //////////////////ePayment.10
        _val = getValue(listOfElements, "ePayment.10");
        if (_val == null)
        {
            OLAPArray.push('/t/t/t' + "<InsuranceCompanyName>" + null + "</InsuranceCompanyName>" + '\n');
            _retArray.push('/t/t/t' + "<ePayment.10>" + null + "</ePayment.10>" + '\n');
            ePayment["ePayment.10"] = null;
        }
        else
        {
            OLAPArray.push('/t/t/t' + "<InsuranceCompanyName>" + _val + "</InsuranceCompanyName>" + '\n');
            _retArray.push('/t/t/t' + "<ePayment.10>" + _val + "</ePayment.10>" + '\n')
            InsuranceGroup["ePayment.10"] = _val;
        };

        //////////////////ePayment.11
        _val = getValue(listOfElements, "ePayment.11");
        if (_val == null)
        {
            OLAPArray.push('/t/t/t' + "<InsuranceCompanyBillingPriority>" + null + "</InsuranceCompanyBillingPriority>" + '\n');
            _retArray.push('/t/t/t' + "<ePayment.11>" + null + "</ePayment.11>" + '\n');
            v2Array.push({ section: "E07", element: "E07_04", val: v2NOT_KNOWN });
            ePayment["ePayment.11"] = null;

        }
        else
        {
            OLAPArray.push('/t/t/t' + "<InsuranceCompanyBillingPriority>" + setCodeText("ePayment.11", _val) + "</InsuranceCompanyBillingPriority>" + '\n');
            _retArray.push('/t/t/t' + "<ePayment.11>" + _val + "</ePayment.11>" + '\n');
            v2Array.push({ section: "E07", element: "E07_04", val: SetD2("ePayment.11", _val[0]) });
            InsuranceGroup["ePayment.11"] = _val;
        };


        //////////////////ePayment.12
        _val = getValue(listOfElements, "ePayment.12");
        if (_val == null)
        {
            OLAPArray.push('/t/t/t' + "<InsuranceCompanyAddress>" + null + "</InsuranceCompanyAddress>" + '\n');
            _retArray.push('/t/t/t' + "<ePayment.12>" + null + "</ePayment.12>" + '\n');
            v2Array.push({ section: "E07", element: "E07_05", val: v2NOT_KNOWN });
            ePayment["ePayment.12"] = null;
        }
        else
        {
            OLAPArray.push('/t/t/t' + "<InsuranceCompanyAddress>" + _val + "</InsuranceCompanyAddress>" + '\n');
            _retArray.push('/t/t/t' + "<ePayment.12>" + _val + "</ePayment.12>" + '\n');
            v2Array.push({ section: "E07", element: "E07_05", val: _val });
            InsuranceGroup["ePayment.12"] = _val;
        };

        //////////////////ePayment.13
        _val = getValue(listOfElements, "ePayment.13");
        if (_val == null)
        {
            OLAPArray.push('/t/t/t' + "<InsuranceCompanyCity>" + null + "</InsuranceCompanyCity>" + '\n');
            _retArray.push('/t/t/t' + "<ePayment.13>" + null + "</ePayment.13>" + '\n');
            v2Array.push({ section: "E07", element: "E07_06", val: v2NOT_KNOWN });
            ePayment["ePayment.13"] = null;
        }
        else
        {
            OLAPArray.push('/t/t/t' + "<InsuranceCompanyCity>" + _val + "</InsuranceCompanyCity>" + '\n');
            _retArray.push('/t/t/t' + "<ePayment.13>" + _val + "</ePayment.13>" + '\n');
            v2Array.push({ section: "E07", element: "E07_06", val: _val });
            InsuranceGroup["ePayment.13"] = _val;
        };


        //////////////////ePayment.14
        _val = getValue(listOfElements, "ePayment.14");
        if (_val == null)
        {
            OLAPArray.push('/t/t/t' + "<InsuranceCompanyState>" + null + "</InsuranceCompanyState>" + '\n');
            _retArray.push('/t/t/t' + "<ePayment.14>" + null + "</ePayment.14>" + '\n');
            v2Array.push({ section: "E07", element: "E07_07", val: v2NOT_KNOWN });
            ePayment["ePayment.14"] = null;
        }
        else
        {
            OLAPArray.push('/t/t/t' + "<InsuranceCompanyState>" + _val + "</InsuranceCompanyState>" + '\n');
            _retArray.push('/t/t/t' + "<ePayment.14>" + _val + "</ePayment.14>" + '\n')
            v2Array.push({ section: "E07", element: "E07_07", val: _val });
            InsuranceGroup["ePayment.14"] = _val;
        };

        //////////////////ePayment.15
        _val = getValue(listOfElements, "ePayment.15");
        if (_val == null)
        {
            OLAPArray.push('/t/t/t' + "<InsuranceCompanyZip>" + null + "</InsuranceCompanyZip>" + '\n');
            _retArray.push('/t/t/t' + "<ePayment.15>" + null + "</ePayment.15>" + '\n');
            v2Array.push({ section: "E07", element: "E07_08", val: v2NOT_KNOWN });
            ePayment["ePayment.15"] = null;
        }
        else
        {
            OLAPArray.push('/t/t/t' + "<InsuranceCompanyZip>" + _val + "</InsuranceCompanyZip>" + '\n');
            _retArray.push('/t/t/t' + "<ePayment.15>" + _val + "</ePayment.15>" + '\n');
            v2Array.push({ section: "E07", element: "E07_08", val: _val });
            InsuranceGroup["ePayment.15"] = _val;
        };

        //////////////////ePayment.16
        _val = getValue(listOfElements, "ePayment.16");
        if (_val == null)
        {
            OLAPArray.push('/t/t/t' + "<InsuranceCompanyCountry>" + null + "</InsuranceCompanyCountry>" + '\n');
            _retArray.push('/t/t/t' + "<ePayment.16>" + null + "</ePayment.16>" + '\n');
            ePayment["ePayment.16"] = null;
        }
        else
        {
            OLAPArray.push('/t/t/t' + "<InsuranceCompanyCountry>" + _val + "</InsuranceCompanyCountry>" + '\n');
            _retArray.push('/t/t/t' + "<ePayment.16>" + _val + "</ePayment.16>" + '\n')
            InsuranceGroup["ePayment.16"] = _val;
        };


        //////////////////ePayment.17
        _val = getValue(listOfElements, "ePayment.17");
        if (_val == null)
        {
            OLAPArray.push('/t/t/t' + "<InsuranceGroupIDName>" + null + "</InsuranceGroupIDName>" + '\n');
            _retArray.push('/t/t/t' + "<ePayment.17>" + null + "</ePayment.17>" + '\n');
            v2Array.push({ section: "E07", element: "E07_09", val: v2NOT_KNOWN });
            ePayment["ePayment.17"] = null;
        }
        else
        {
            OLAPArray.push('/t/t/t' + "<InsuranceGroupIDName>" + _val + "</InsuranceGroupIDName>" + '\n');
            _retArray.push('/t/t/t' + "<ePayment.17>" + _val + "</ePayment.17>" + '\n');
            v2Array.push({ section: "E07", element: "E07_09", val: _val });
            InsuranceGroup["ePayment.17"] = _val;
        };

        //////////////////ePayment.18
        _val = getValue(listOfElements, "ePayment.18");
        if (_val == null)
        {
            OLAPArray.push('/t/t/t' + "<InsurancePolicyIDNumber>" + null + "</InsurancePolicyIDNumber>" + '\n');
            _retArray.push('/t/t/t' + "<ePayment.18>" + null + "</ePayment.18>" + '\n');
            v2Array.push({ section: "E07", element: "E07_10", val: v2NOT_KNOWN });
            ePayment["ePayment.18"] = null;
        }
        else
        {
            OLAPArray.push('/t/t/t' + "<InsurancePolicyIDNumber>" + _val + "</InsurancePolicyIDNumber>" + '\n');
            _retArray.push('/t/t/t' + "<ePayment.18>" + _val + "</ePayment.18>" + '\n');
            v2Array.push({ section: "E07", element: "E07_10", val: _val });
            InsuranceGroup["ePayment.18"] = _val;
        };

        //////////////////ePayment.19
        _val = getValue(listOfElements, "ePayment.19");
        if (_val == null)
        {
            OLAPArray.push('/t/t/t' + "<LastNameoftheInsured>" + null + "</LastNameoftheInsured>" + '\n');
            _retArray.push('/t/t/t' + "<ePayment.19>" + null + "</ePayment.19>" + '\n');
            v2Array.push({ section: "E07", element: "E07_11", val: v2NOT_KNOWN });
            ePayment["ePayment.19"] = null;
        }
        else
        {
            OLAPArray.push('/t/t/t' + "<LastNameoftheInsured>" + _val + "</LastNameoftheInsured>" + '\n');
            _retArray.push('/t/t/t' + "<ePayment.19>" + _val + "</ePayment.19>" + '\n');
            v2Array.push({ section: "E07", element: "E07_11", val: _val });
            InsuranceGroup["ePayment.19"] = _val;
        };

        //////////////////ePayment.20
        _val = getValue(listOfElements, "ePayment.20");
        if (_val == null)
        {
            OLAPArray.push('/t/t/t' + "<FirstNameoftheInsured>" + null + "</FirstNameoftheInsured>" + '\n');
            _retArray.push('/t/t/t' + "<ePayment.20>" + null + "</ePayment.20>" + '\n');
            v2Array.push({ section: "E07", element: "E07_12", val: v2NOT_KNOWN });
            ePayment["ePayment.20"] = null;
        }
        else
        {
            OLAPArray.push('/t/t/t' + "<FirstNameoftheInsured>" + _val + "</FirstNameoftheInsured>" + '\n');
            _retArray.push('/t/t/t' + "<ePayment.20>" + _val + "</ePayment.20>" + '\n');
            v2Array.push({ section: "E07", element: "E07_12", val: _val });
            InsuranceGroup["ePayment.20"] = _val;
        };

        //////////////////ePayment.21
        _val = getValue(listOfElements, "ePayment.21");
        if (_val == null)
        {
            OLAPArray.push('/t/t/t' + "<MiddleNameoftheInsured>" + null + "</MiddleNameoftheInsured>" + '\n');
            _retArray.push('/t/t/t' + "<ePayment.21>" + null + "</ePayment.21>" + '\n');
            v2Array.push({ section: "E07", element: "E07_13", val: v2NOT_KNOWN });
            ePayment["ePayment.21"] = null;
        }
        else
        {
            OLAPArray.push('/t/t/t' + "<MiddleNameoftheInsured>" + _val + "</MiddleNameoftheInsured>" + '\n');
            _retArray.push('/t/t/t' + "<ePayment.21>" + _val + "</ePayment.21>" + '\n');
            v2Array.push({ section: "E07", element: "E07_13", val: _val });
            InsuranceGroup["ePayment.21"] = _val;
        };

        //////////////////ePayment.22
        _val = getValue(listOfElements, "ePayment.22");
        if (_val == null) 
        {
            OLAPArray.push('/t/t/t' + "<RelationshiptotheInsured>" + null + "</RelationshiptotheInsured>" + '\n');
            _retArray.push('/t/t/t' + "<ePayment.22>" + null + "</ePayment.22>" + '\n');
            v2Array.push({ section: "E07", element: "E07_14", val: v2NOT_KNOWN });
            ePayment["ePayment.22"] = null;
        }
        else 
        {
            OLAPArray.push('/t/t/t' + "<RelationshiptotheInsured>" + setCodeText("ePayment.22>", _val) + "</RelationshiptotheInsured>" + '\n');
            _retArray.push('/t/t/t' + "<ePayment.22>" + _val + "</ePayment.22>" + '\n');
            v2Array.push({ section: "E07", element: "E07_14", val: SetD2("ePayment.22", _val[0]) });
            InsuranceGroup["ePayment.22"] = _val;
        };

        OLAPArray.push('/t/t' + "</ePayment.InsuranceGroup>" + '\n');
        _retArray.push('/t/t' + "</ePayment.InsuranceGroup>" + '\n');
    };
    ///////////////////////////////////

    _retArray.push('/t/t' + "<ePayment.ClosestRelativeGroup>" + '\n');
    OLAPArray.push('/t/t' + "<ePayment.ClosestRelativeGroup>" + '\n');

    //////////////////ePayment.23
    _val = getValue(businessObject.elements, "ePayment.23");
    if (_val == null)
    {
        OLAPArray.push('/t/t/t' + "<ClosestRelativeGuardianLastName>" + null + "</ClosestRelativeGuardianLastName>" + '\n');
        _retArray.push('/t/t/t' + "<ePayment.23>" + null + "</ePayment.23>" + '\n');
        v2Array.push({ section: "E07", element: "E07_18", val: v2NOT_KNOWN });
        ePayment["ePayment.23"] = null;
    }
    else
    {
        OLAPArray.push('/t/t/t' + "<ClosestRelativeGuardianLastName>" + _val + "</ClosestRelativeGuardianLastName>" + '\n');
        _retArray.push('/t/t/t' + "<ePayment.23>" + _val[0] + "</ePayment.23>" + '\n');
        v2Array.push({ section: "E07", element: "E07_18", val: _val });
        ePayment["ePayment.23"] = _val;
    };


    //////////////////ePayment.24
    _val = getValue(businessObject.elements, "ePayment.24");
    if (_val == null)
    {
        OLAPArray.push('/t/t/t' + "<ClosestRelativeGuardianFirstName>" + null + "</ClosestRelativeGuardianFirstName>" + '\n');
        _retArray.push('/t/t/t' + "<ePayment.24>" + null + "</ePayment.24>" + '\n');
        v2Array.push({ section: "E07", element: "E07_19", val: null });
        ePayment["ePayment.24"] = null;
    }
    else
    {
        OLAPArray.push('/t/t/t' + "<ClosestRelativeGuardianFirstName>" + _val + "</ClosestRelativeGuardianFirstName>" + '\n');
        _retArray.push('/t/t/t' + "<ePayment.24>" + _val + "</ePayment.24>" + '\n')
        v2Array.push({ section: "E07", element: "E07_19", val: _val });
        ePayment["ePayment.24"] = _val;
    };

    //////////////////ePayment.25
    _val = getValue(businessObject.elements, "ePayment.25");
    if (_val == null)
    {
        OLAPArray.push('/t/t/t' + "<ClosestRelativeGuardianMiddleName>" + null + "</ClosestRelativeGuardianMiddleName>" + '\n');
        _retArray.push('/t/t/t' + "<ePayment.25>" + null + "</ePayment.25>" + '\n');
        v2Array.push({ section: "E07", element: "E07_20", val: null });
        ePayment["ePayment.25"] = null;
    }
    else
    {
        OLAPArray.push('/t/t/t' + "<ClosestRelativeGuardianMiddleName>" + _val + "</ClosestRelativeGuardianMiddleName>" + '\n');
        _retArray.push('/t/t/t' + "<ePayment.25>" + _val + "</ePayment.25>" + '\n')
        v2Array.push({ section: "E07", element: "E07_20", val: _val })
        ePayment["ePayment.25"] = _val;
    };

    //////////////////ePayment.26
    _val = getValue(businessObject.elements, "ePayment.26");
    if (_val == null)
    {
        OLAPArray.push('/t/t/t' + "<ClosestRelativeGuardianStreetAddress>" + null + "</ClosestRelativeGuardianStreetAddress>" + '\n');
        _retArray.push('/t/t/t' + "<ePayment.26>" + null + "</ePayment.26>" + '\n');
        v2Array.push({ section: "E07", element: "E07_21", val: null });
        ePayment["ePayment.26"] = null;
    }
    else
    {
        OLAPArray.push('/t/t/t' + "<ClosestRelativeGuardianStreetAddress>" + _val + "</ClosestRelativeGuardianStreetAddress>" + '\n');
        _retArray.push('/t/t/t' + "<ePayment.26>" + _val + "</ePayment.26>" + '\n');
        v2Array.push({ section: "E07", element: "E07_21", val: _val });
        ePayment["ePayment.26"] = _val;
    };

    //////////////////ePayment.27
    _val = getValue(businessObject.elements, "ePayment.27");
    if (_val == null)
    {
        OLAPArray.push('/t/t/t' + "<ClosestRelativeGuardianCity>" + null + "</ClosestRelativeGuardianCity>" + '\n');
        _retArray.push('/t/t/t' + "<ePayment.27>" + null + "</ePayment.27>" + '\n');
        v2Array.push({ section: "E07", element: "E07_22", val: null });
        ePayment["ePayment.27"] = null;
    }
    else
    {
        OLAPArray.push('/t/t/t' + "<ClosestRelativeGuardianCity>" + _val + "</ClosestRelativeGuardianCity>" + '\n');
        _retArray.push('/t/t/t' + "<ePayment.27>" + _val + "</ePayment.27>" + '\n');
        v2Array.push({ section: "E07", element: "E07_22", val: _val });
        ePayment["ePayment.27"] = _val;
    };

    //////////////////ePayment.28
    _val = getValue(businessObject.elements, "ePayment.28");
    if (_val == null)
    {
        OLAPArray.push('/t/t/t' + "<ClosestRelativeGuardianState>" + null + "</ClosestRelativeGuardianState>" + '\n');
        _retArray.push('/t/t/t' + "<ePayment.28>" + null + "</ePayment.28>" + '\n');
        v2Array.push({ section: "E07", element: "E07_23", val: null });
        ePayment["ePayment.28"] = null;
    }
    else
    {
        OLAPArray.push('/t/t/t' + "<ClosestRelativeGuardianState>" + _val + "</ClosestRelativeGuardianState>" + '\n');
        _retArray.push('/t/t/t' + "<ePayment.28>" + _val + "</ePayment.28>" + '\n');
        v2Array.push({ section: "E07", element: "E07_23", val: _val });
        ePayment["ePayment.28"] = _val;
    };

    //////////////////ePayment.29
    _val = getValue(businessObject.elements, "ePayment.29");
    if (_val == null)
    {
        OLAPArray.push('/t/t/t' + "<ClosestRelativeGuardianZIPCode>" + null + "</ClosestRelativeGuardianZIPCode>" + '\n');
        _retArray.push('/t/t/t' + "<ePayment.29>" + null + "</ePayment.29>" + '\n');
        v2Array.push({ section: "E07", element: "E07_24", val: null });
        ePayment["ePayment.29"] = null;
    }
    else
    {
        OLAPArray.push('/t/t/t' + "<ClosestRelativeGuardianZIPCode>" + _val + "</ClosestRelativeGuardianZIPCode>" + '\n');
        _retArray.push('/t/t/t' + "<ePayment.29>" + _val[0] + "</ePayment.29>" + '\n')
        v2Array.push({ section: "E07", element: "E07_24", val: _val });
        ePayment["ePayment.29"] = _val;
    };

    //////////////////ePayment.30
    _val = getValue(businessObject.elements, "ePayment.30");
    if (_val == null)
    {
        OLAPArray.push('/t/t/t' + "<ClosestRelativeGuardianCountry>" + null + "</ClosestRelativeGuardianCountry>" + '\n');
        _retArray.push('/t/t/t' + "<ePayment.30>" + null + "</ePayment.30>" + '\n');
        ePayment["ePayment.30"] = null;
    }
    else
    {
        OLAPArray.push('/t/t/t' + "<ClosestRelativeGuardianCountry>" + _val + "</ClosestRelativeGuardianCountry>" + '\n');
        _retArray.push('/t/t/t' + "<ePayment.30>" + _val + "</ePayment.30>" + '\n')
        ePayment["ePayment.30"] = _val;
    };
    alert("PN Values")
    _val = getValue(businessObject.elements, "ePayment.31");
    if (_val == null) {
    }
    else {
        if (PhoneNumberType[i] == 9913001) {
            _phoneType = FAX;
        }
        else if (PhoneNumberType[i] == 9913003) {
            _phoneType = HOME;
        }
        else if (PhoneNumberType[i] == 9913005) {
            _phoneType = MOBILE;
        }
        else if (PhoneNumberType[i] == 9913007) {
            _phoneType = PAGER;
        }
        else if (PhoneNumberType[i] == 9913009) {
            _phoneType = WORK;
        }

        _retArray.push('/t/t/t' + "<ePayment.31 " + _phoneType + ">" + _val[0] + "</ePayment.31>")
        E07.E07_25 = _val[0];
        ePayment["ePayment.31"] = _val;
    };

    //////////////////ePayment.32
    _val = getValue(businessObject.elements, "ePayment.32");
    if (_val == null)
    {
        OLAPArray.push('/t/t/t' + "<ClosestRelativeGuardianRelationship>" + null + "</ClosestRelativeGuardianRelationship>" + '\n');
        _retArray.push('/t/t/t' + "<ePayment.32>" + null + "</ePayment.32>" + '\n');
        v2Array.push({ section: "E07", element: "E07_26", val: null });
        ePayment["ePayment.32"] = null;
    }
    else
    {
        OLAPArray.push('/t/t/t' + "<ClosestRelativeGuardianRelationship>" + setCodeText("ePayment.32", _val) + "</ClosestRelativeGuardianRelationship>" + '\n');
        _retArray.push('/t/t/t' + "<ePayment.32>" + _val + "</ePayment.32>" + '\n');
        v2Array.push({ section: "E07", element: "E07_26", val: SetD2("ePayment.32", _val) });
        ePayment["ePayment.32"] = _val;
    };

    OLAPArray.push('/t/t' + "</ePayment.ClosestRelativeGroup>" + '\n');
    OLAPArray.push('/t/t' + "<ePayment.EmployerGroup>" + '\n');
    _retArray.push('/t/t' + "</ePayment.ClosestRelativeGroup>" + '\n');
    _retArray.push('/t/t' + "<ePayment.EmployerGroup>" + '\n');


    //////////////////ePayment.33
    _val = getValue(businessObject.elements, "ePayment.33");
    if (_val == null)
    {
        OLAPArray.push('/t/t/t' + "<PatientEmployer>" + null + "</PatientEmployer>" + '\n');
        _retArray.push('/t/t/t' + "<ePayment.33>" + null + "</ePayment.33>" + '\n');
        v2Array.push({ section: "E07", element: "E07_27", val: null });
        ePayment["ePayment.33"] = null;
    }
    else
    {
        OLAPArray.push('/t/t/t' + "<PatientEmployer>" + _val + "</PatientEmployer>" + '\n');
        _retArray.push('/t/t/t' + "<ePayment.33>" + _val + "</ePayment.33>" + '\n');
        v2Array.push({ section: "E07", element: "E07_27", val: _val });
        ePayment["ePayment.33"] = _val;
    };

    //////////////////ePayment.34
    _val = getValue(businessObject.elements, "ePayment.34");
    if (_val == null)
    {
        OLAPArray.push('/t/t/t' + "<EmployerAddress>" + null + "</EmployerAddress>" + '\n');
        _retArray.push('/t/t/t' + "<ePayment.34>" + null + "</ePayment.34>" + '\n');
        v2Array.push({ section: "E07", element: "E07_28", val: null });
        ePayment["ePayment.34"] = null;
    }
    else
    {
        OLAPArray.push('/t/t/t' + "<EmployerAddress>" + _val + "</EmployerAddress>" + '\n');
        _retArray.push('/t/t/t' + "<ePayment.34>" + _val + "</ePayment.34>" + '\n')
        v2Array.push({ section: "E07", element: "E07_28", val: _val });
        ePayment["ePayment.34"] = _val;
    };

    //////////////////ePayment.35
    _val = getValue(businessObject.elements, "ePayment.35");
    if (_val == null)
    {
        OLAPArray.push('/t/t/t' + "<EmployerCity>" + null + "</EmployerCity>" + '\n');
        _retArray.push('/t/t/t' + "<ePayment.35>" + null + "</ePayment.35>" + '\n');
        v2Array.push({ section: "E07", element: "E07_29", val: null });
        ePayment["ePayment.35"] = null;
    }
    else
    {
        OLAPArray.push('/t/t/t' + "<EmployerCity>" + _val + "</EmployerCity>" + '\n');
        _retArray.push('/t/t/t' + "<ePayment.35>" + _val + "</ePayment.35>" + '\n');
        v2Array.push({ section: "E07", element: "E07_29", val: _val });
        ePayment["ePayment.35"] = _val;
    };

    //////////////////ePayment.36
    _val = getValue(businessObject.elements, "ePayment.36");
    if (_val == null)
    {
        OLAPArray.push('/t/t/t' + "<EmployerState>" + null + "</EmployerState>" + '\n');
        _retArray.push('/t/t/t' + "<ePayment.36>" + null + "</ePayment.36>" + '\n');
        v2Array.push({ section: "E07", element: "E07_30", val: null });
        ePayment["ePayment.36"] = null;
    }
    else
    {
        OLAPArray.push('/t/t/t' + "<EmployerState>" + _val + "</EmployerState>" + '\n');
        _retArray.push('/t/t/t' + "<ePayment.36>" + _val + "</ePayment.36>" + '\n')
        v2Array.push({ section: "E07", element: "E07_30", val: _val });
        ePayment["ePayment.36"] = _val;
    };

    //////////////////ePayment.37
    _val = getValue(businessObject.elements, "ePayment.37");
    if (_val == null)
    {
        OLAPArray.push('/t/t/t' + "<EmployerZip>" + null + "</EmployerZip>" + '\n');
        _retArray.push('/t/t/t' + "<ePayment.37>" + null + "</ePayment.37>" + '\n');
        v2Array.push({ section: "E07", element: "E07_31", val: null });
        ePayment["ePayment.37"] = null;
    }
    else
    {
        OLAPArray.push('/t/t/t' + "<EmployerZip>" + _val + "</EmployerZip>" + '\n');
        _retArray.push('/t/t/t' + "<ePayment.37>" + _val + "</ePayment.37>" + '\n');
        v2Array.push({ section: "E07", element: "E07_31", val: _val });
        ePayment["ePayment.37"] = _val;
    };

    //////////////////ePayment.38
    _val = getValue(businessObject.elements, "ePayment.38");
    if (_val == null)
    {
        OLAPArray.push('/t/t/t' + "<EmployerCountry>" + null + "</EmployerCountry>" + '\n');
        _retArray.push('/t/t/t' + "<ePayment.38>" + null + "</ePayment.38>" + '\n');
        ePayment["ePayment.38"] = null;
    }
    else
    {
        OLAPArray.push('/t/t/t' + "<EmployerCountry>" + _val + "</EmployerCountry>" + '\n');
        _retArray.push('/t/t/t' + "<ePayment.38>" + _val + "</ePayment.38>" + '\n')
        ePayment["ePayment.38"] = _val;
    };


    //////////////////ePayment.39
    _val = getValue(businessObject.elements, "ePayment.39");
    if (_val == null)
    {
        OLAPArray.push('/t/t/t' + "<PatientEmployerPrimaryPhoneNumber>" + null + "</PatientEmployerPrimaryPhoneNumber>" + '\n');
        _retArray.push('/t/t/t' + "<ePayment.38>" + null + "</ePayment.38>" + '\n');
        v2Array.push({ section: "E07", element: "E07_32", val: null });
        ePayment["ePayment.38"] = null;
    }
    else
    {
        if (PhoneNumberType[i] == "9913001") 
        {
            OLAPArray.push('/t/t/t' + "<PatientEmployerPrimaryPhoneNumber" + FAX + ">" + _val[i] + "</PatientEmployerPrimaryPhoneNumber>" + '\n');
            _retArray.push('/t/t/t' + "<ePayment.38" + FAX + ">" + _val[i] + "</ePayment.38>" + '\n');
            ePayment["ePayment.38"] = _val[i];
        }
        else if (PhoneNumberType[i] == 9913003) {
            OLAPArray.push('/t/t/t' + "<PatientEmployerPrimaryPhoneNumber" + HOME + ">" + _val[i] + "</PatientEmployerPrimaryPhoneNumber>" + '\n');
            _retArray.push('/t/t/t' + "<ePayment.38" + HOME + ">" + _val[i] + "</ePayment.38>" + '\n');
            ePayment["ePayment.38"] = _val[i];
        }
        else if (PhoneNumberType[i] == 9913005) {
            OLAPArray.push('/t/t/t' + "<PatientEmployerPrimaryPhoneNumber" + MOBILE + ">" + _val[i] + "</PatientEmployerPrimaryPhoneNumber>" + '\n');
            _retArray.push('/t/t/t' + "<ePayment.38" + MOBILE + ">" + _val[i] + "</ePayment.38>" + '\n');
            ePayment["ePayment.38"] = _val[i];
        }
        else if (PhoneNumberType[i] == 9913007) {
            OLAPArray.push('/t/t/t' + "<PatientEmployerPrimaryPhoneNumber" + PAGER + ">" + _val[i] + "</PatientEmployerPrimaryPhoneNumber>" + '\n');
            _retArray.push('/t/t/t' + "<ePayment.38" + PAGER + ">" + _val[i] + "</ePayment.38>" + '\n');
            ePayment["ePayment.38"] = _val[i];
        }
        else if (PhoneNumberType[i] == 9913009) {
            OLAPArray.push('/t/t/t' + "<PatientEmployerPrimaryPhoneNumber" + WORK + ">" + _val[i] + "</PatientEmployerPrimaryPhoneNumber>" + '\n');
            _retArray.push('/t/t/t' + "<ePayment.38" + WORK + ">" + _val[i] + "</ePayment.38>" + '\n');
            ePayment["ePayment.38"] = _val[i];
        }
        else {
            _retArray.push('/t/t/t' + "<ePayment.39>" + _val + "</ePayment.39>" + '\n');
            OLAPArray.push('/t/t/t' + "<PatientEmployerPrimaryPhoneNumber>" + _val + "</PatientEmployerPrimaryPhoneNumber>" + '\n');
            v2Array.push({ section: "E07", element: "E07_32", val: _val });
            ePayment["ePayment.39"] = _val;
        }
    };
    _retArray.push('/t/t' + "</ePayment.EmployerGroup>" + '\n');
    OLAPArray.push('/t/t' + "</ePayment.EmployerGroup>" + '\n');

    //////////////////ePayment.40
    _val = getValue(businessObject.elements, "ePayment.40");
    if (_val == null)
    {
        OLAPArray.push('/t' + "<ResponseUrgency>" + null + "</ResponseUrgency>" + '\n');
        _retArray.push('/t' + "<ePayment.40>" + null + "</ePayment.40>" + '\n');
        v2Array.push({ section: "E07", element: "E07_33", val: null });
        ePayment["ePayment.40"] = null;
    }
    else
    {
        OLAPArray.push('/t' + "<ResponseUrgency>" + setCodeText("ePayment.40", _val) + "</ResponseUrgency>" + '\n');
        _retArray.push('/t' + "<ePayment.40>" + _val + "</ePayment.40>" + '\n');
        v2Array.push({ section: "E07", element: "E07_33", val: SetD2("ePayment.40", _val) });
        ePayment["ePayment.40"] = _val;
    };

    //////////////////ePayment.41
    _val = getValue(businessObject.elements, "ePayment.41");
    if (_val == null)
    {
        OLAPArray.push('/t' + "<PatientTransportAssessment>" + null + "</PatientTransportAssessment>" + '\n');
        _retArray.push('/t' + "<ePayment.41>" + null + "</ePayment.41>" + '\n');
        ePayment["ePayment.41"] = null;
    }
    else
    {
        var arr1 = [];
        for (var i = 0; i < _val.length; i++) {
            OLAPArray.push('/t' + "<PatientTransportAssessment>" + setCodeText("ePayment.41", _val) + "</PatientTransportAssessment>" + '\n');
            _retArray.push('/t' + "<ePayment.41>" + _val[i] + "</ePayment.41>" + '\n');
            arr1.push(_val[i]);
        }
        ePayment["ePayment.41"] = arr1.slice(0);;
    };


    //////////////////ePayment.42
    _val = getValue(businessObject.elements, "ePayment.42");
    if (_val == null)
    {
        OLAPArray.push('/t' + "<SpecialtyCareTransportCareProvider>" + null + "</SpecialtyCareTransportCareProvider>" + '\n');
        _retArray.push('/t' + "<ePayment.42>" + null + "</ePayment.42>" + '\n');
        ePayment["ePayment.42"] = null;
    }
    else
    {
        var arr1 = [];
        for (var i = 0; i < _val.length; i++) {
            OLAPArray.push('/t' + "<SpecialtyCareTransportCareProvider>" + setCodeText("ePayment.42", _val) + "</SpecialtyCareTransportCareProvider>" + '\n');
            _retArray.push('/t' + "<ePayment.42>" + _val[i] + "</ePayment.42>" + '\n');
            arr1.push(_val[i]);
        }
        ePayment["ePayment.42"] = arr1.slice(0);;
    };

    //////////////////ePayment.43
    _val = getValue(businessObject.elements, "ePayment.43");
    if (_val == null)
    {
        OLAPArray.push('/t' + "<AmbulanceTransportCode>" + null + "</AmbulanceTransportCode>" + '\n');
        _retArray.push('/t' + "<ePayment.43>" + null + "</ePayment.43>" + '\n');
        ePayment["ePayment.43"] = null;
    }
    else
    {
        OLAPArray.push('/t' + "<AmbulanceTransportCode>" + _val + "</AmbulanceTransportCode>" + '\n');
        _retArray.push('/t' + "<ePayment.43>" + _val + "</ePayment.43>" + '\n');
        ePayment["ePayment.43"] = _val;
    };

    //////////////////ePayment.44
    _val = getValue(businessObject.elements, "ePayment.44");
    if (_val == null)
    {
        OLAPArray.push('/t' + "<AmbulanceTransportReasonCode>" + null + "</AmbulanceTransportReasonCode>" + '\n');
        _retArray.push('/t' + "<ePayment.44>" + null + "</ePayment.44>" + '\n');
        ePayment["ePayment.44"] = null;
    }
    else
    {
        OLAPArray.push('/t' + "<AmbulanceTransportReasonCode>" + setCodeText("ePayment.44", _val) + "</AmbulanceTransportReasonCode>" + '\n');
        _retArray.push('/t' + "<ePayment.44>" + _val + "</ePayment.44>" + '\n');
        ePayment["ePayment.44"] = _val;
    };

    //////////////////ePayment.45
    _val = getValue(businessObject.elements, "ePayment.45");
    if (_val == null)
    {
        OLAPArray.push('/t' + "<RoundTripPurposeDescription>" + null + "<RoundTripPurposeDescription>" + '\n');
        _retArray.push('/t' + "<ePayment.45>" + null + "</ePayment.45>" + '\n');
        ePayment["ePayment.45"] = null;
    }
    else
    {
        OLAPArray.push('/t' + "<RoundTripPurposeDescription>" + null + "<RoundTripPurposeDescription>" + '\n');
        _retArray.push('/t' + "<ePayment.45>" + _val + "</ePayment.45>" + '\n');
        ePayment["ePayment.45"] = _val;
    };

    //////////////////ePayment.46
    _val = getValue(businessObject.elements, "ePayment.46");
    if (_val == null)
    {
        OLAPArray.push('/t' + "<StretcherPurposeDescription>" + null + "<StretcherPurposeDescription>" + '\n');
        _retArray.push('/t' + "<ePayment.46>" + null + "</ePayment.46>" + '\n');
        ePayment["ePayment.46"] = null;
    }
    else
    {
        OLAPArray.push('/t' + "<StretcherPurposeDescription>" + _val + "<StretcherPurposeDescription>" + '\n');
        _retArray.push('/t' + "<ePayment.46>" + _val + "</ePayment.46>" + '\n');
        ePayment["ePayment.46"] = _val;
    };

    //////////////////ePayment.47
    _val = getValue(businessObject.elements, "ePayment.47");
    if (_val == null)
    {
        OLAPArray.push('/t' + "<AmbulanceConditionsIndicator>" + null + "<AmbulanceConditionsIndicator>" + '\n');
        _retArray.push('/t' + "<ePayment.47>" + null + "</ePayment.47>" + '\n');
        ePayment["ePayment.47"] = null;
    }
    else
    {
        OLAPArray.push('/t' + "<AmbulanceConditionsIndicator>" + _val + "<AmbulanceConditionsIndicator>" + '\n');
        _retArray.push('/t' + "<ePayment.47>" + _val + "</ePayment.47>" + '\n');
        ePayment["ePayment.47"] = _val;
    };

    //////////////////ePayment.48
    _val = getValue(businessObject.elements, "ePayment.48");
    if (_val == null)
    {
        OLAPArray.push('/t' + "<MileagetoClosestHospitalFacility>" + null + "<MileagetoClosestHospitalFacility>" + '\n');
        _retArray.push('/t' + "<ePayment.48>" + null + "</ePayment.48>" + '\n');
        ePayment["ePayment.48"] = null;
    }
    else
    {
        OLAPArray.push('/t' + "<MileagetoClosestHospitalFacility>" + _val + "<MileagetoClosestHospitalFacility>" + '\n');
        _retArray.push('/t' + "<ePayment.48>" + _val + "</ePayment.48>" + '\n');
        ePayment["ePayment.48"] = _val;
    };

    //////////////////ePayment.49
    _val = getValue(businessObject.elements, "ePayment.49");
    if (_val == null)
    {
        OLAPArray.push('/t' + "<ALSAssessmentPerformedandWarranted>" + null + "<ALSAssessmentPerformedandWarranted>" + '\n');
        _retArray.push('/t' + "<ePayment.49>" + null + "</ePayment.49>" + '\n');
        ePayment["ePayment.49"] = null;
    }
    else
    {
        OLAPArray.push('/t' + "<ALSAssessmentPerformedandWarranted>" + setCodeText("ePayment.49", _val) + "</ALSAssessmentPerformedandWarranted>" + '\n');
        _retArray.push('/t' + "<ePayment.49>" + _val + "</ePayment.49>" + '\n');
        ePayment["ePayment.49"] = _val;
    };

    //////////////////ePayment.50
    _val = getValue(businessObject.elements, "ePayment.50");
    if (_val == null)
    {
        if (isRequiredStateElement("ePayment.50"))
        {
            OLAPArray.push('/t' + "<CMSServiceLevel>" + "NOT RECORDED" + "<CMSServiceLevel>" + '\n');
            _retArray.push('/t' + "<ePayment.50" + NIL_V3NOT_RECORDED + '\n');
            v2Array.push({ section: "E05", element: "E5_34", val: v2NOT_RECORDED });
            ePayment["ePayment.50"] = V3NOT_RECORDED;
        }
    }
    else
    {
        OLAPArray.push('/t' + "<CMSServiceLevel>" + setCodeText("ePayment.50", _val) + "<CMSServiceLevel>" + '\n');
        v2Array.push({ section: "E05", element: "E5_34", val: setV2("ePayment.50", _val) });
        _retArray.push('/t' + "<ePayment.50>" + _val + "</ePayment.50>" + '\n');
        ePayment["ePayment.50"] = _val;
    };

    //////////////////ePayment.51
    _val = getValue(businessObject.elements, "ePayment.51");
    if (_val == null)
    {
        OLAPArray.push('/t' + "<EMSConditionCode>" + null + "<EMSConditionCode>" + '\n');
        _retArray.push('/t' + "<ePayment.51>" + null + "</ePayment.51>" + '\n');
        ePayment["ePayment.51"] = null;
    }
    else
    {
        OLAPArray.push('/t' + "<EMSConditionCode>" + _val + "<EMSConditionCode>" + '\n');
        _retArray.push('/t' + "<ePayment.51>" + _val + "</ePayment.51>" + '\n');
        ePayment["ePayment.51"] = _val;
    };

    //////////////////ePayment.52
    _val = getValue(businessObject.elements, "ePayment.52");
    if (_val == null)
    {
        OLAPArray.push('/t' + "<CMSTransportationIndicator>" + null + "<CMSTransportationIndicator>" + '\n');
        _retArray.push('/t' + "<ePayment.52>" + null + "</ePayment.52>" + '\n');
        ePayment["ePayment.52"] = null;
    }
    else
    {
        OLAPArray.push('/t' + "<CMSTransportationIndicator>" + setCodeText("ePayment.52", _val) + "<CMSTransportationIndicator>" + '\n');
        _retArray.push('/t' + "<ePayment.52>" + _val + "</ePayment.52>" + '\n');
        E07.E07_37 = SetD2("ePayment.52", _val);
        ePayment["ePayment.52"] = _val;
    };

    //////////////////ePayment.53
    _val = getValue(businessObject.elements, "ePayment.53");
    if (_val == null)
    {
        OLAPArray.push('/t' + "<TransportAuthorizationCode>" + null + "<TransportAuthorizationCode>" + '\n');
        _retArray.push('/t' + "<ePayment.53>" + null + "</ePayment.53>" + '\n');
        ePayment["ePayment.53"] = null;

    }
    else
    {
        OLAPArray.push('/t' + "<TransportAuthorizationCode>" + _val + "<TransportAuthorizationCode>" + '\n');
        _retArray.push('/t' + "<ePayment.53>" + _val + "</ePayment.53>" + '\n');
        ePayment["ePayment.53"] = _val;
    };

    //////////////////ePayment.54
    _val = getValue(businessObject.elements, "ePayment.54");
    if (_val == null)
    {
        OLAPArray.push('/t' + "<PriorAuthorizationCodePayer>" + null + "<PriorAuthorizationCodePayer>" + '\n');
        _retArray.push('/t' + "<ePayment.54>" + null + "</ePayment.54>" + '\n');
        ePayment["ePayment.54"] = null;
    }
    else
    {
        OLAPArray.push('/t' + "<PriorAuthorizationCodePayer>" + _val + "<PriorAuthorizationCodePayer>" + '\n');
        _retArray.push('/t' + "<ePayment.54>" + _val + "</ePayment.54>" + '\n');
        ePayment["ePayment.54"] = _val;
    };


    ///////////////////LabResultGroup
    _sectionIndex = getSectionIndex(businessObject.sections[i].attributes, "ePayment.SupplyItemGroup");
    for (var x = 0; x < _sectionIndex.length; x++) {
        var listOfElements = businessObject.sections[i].attributes.sections[_sectionIndex[x]].attributes.elements
        _retArray.push('/t' + "<ePayment.SupplyItemGroup>" + '\n');
        OLAPArray.push('/t' + "<ePayment.SupplyItemGroup>" + '\n');


        //////////////////ePayment.55
        _val = getValue(listOfElements, "ePayment.55");
        if (_val == null)
        {
            OLAPArray.push('/t/t' + "<SupplyItemUsedName>" + null + "<SupplyItemUsedName>" + '\n');
            _retArray.push('/t/t' + "<ePayment.55>" + null + "</ePayment.55>" + '\n');
            ePayment["ePayment.55"] = null;
        }
        else
        {
            OLAPArray.push('/t/t' + "<SupplyItemUsedName>" + _val + "<SupplyItemUsedName>" + '\n');
            _retArray.push('/t/t' + "<ePayment.55>" + _val + "</ePayment.55>" + '\n');
            SupplyItemGroup["ePayment.55"] = _val;
        };

        //////////////////ePayment.56
        _val = getValue(listOfElements, "ePayment.56");
        if (_val == null)
        {
            OLAPArray.push('/t/t' + "<NumberofSupplyItemsUsed>" + null + "<NumberofSupplyItemsUsed>" + '\n');
            _retArray.push('/t/t' + "<ePayment.56>" + null + "</ePayment.56>" + '\n');
            ePayment["ePayment.56"] = null;
        }
        else
        {
            OLAPArray.push('/t/t' + "<NumberofSupplyItemsUsed>" + _val + "<NumberofSupplyItemsUsed>" + '\n');
            _retArray.push('/t/t' + "<ePayment.56>" + _val + "</ePayment.56>" + '\n');
            ePayment["ePayment.56"] = _val;
        };
        _retArray.push('/t' + "</ePayment.SupplyItemGroup>" + '\n');
        OLAPArray.push('/t' + "</ePayment.SupplyItemGroup>" + '\n');
    };

    _retArray.push("</ePayment>" + '\n');
    OLAPArray.push("</ePayment>" + '\n');
};


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

function setV2(NEMSISElementNumber, valueArray) {
    //    console.log(NEMSISElementNumber);
    var _retArray = [];
    //    console.log(valueArray);
    switch (NEMSISElementNumber) {
        case "ePayment.01":

            if (ePayment01[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(ePayment01[valueArray[0]]);
            }
            break;
        case "ePayment.02":
            for (i = 0; i < valueArray.length; i++) {
                if (ePayment01[valueArray[i]] == undefined) {
                    _retArray.push(valueArray[i] + "UNDEFINED");
                }
                else {
                    _retArray.push(ePayment01[valueArray[i]]);
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

var ePayment01 = {
    "2601001": "720",
    "2601003": "725",
    "2601005": "730",
    "2601007": "735",
    "2601009": "740",
    "2601011": "745",
    "2601013": "750",
    "2601015": "-10",
    "2601017": "745",
    "2601019": "740",
    "2601021": "745",
    "2601023": "-10",

};
var ePayment01 = {
    "9922001": "0",
    "9922003": "-10",
    "9922005": "1"
};


var ePayment334_01 = {

    "2601001": "Insurance",
    "2601003": "Medicaid",
    "2601005": "Medicare",
    "2601007": "Not Billed (for any reason)",
    "2601009": "Other Government",
    "2601011": "Self Pay",
    "2601013": "Workers Compensation"
};
var ePayment334_02 = {

    "9922001": "No",
    "9922003": "Unknown",
    "9922005": "Yes"
};
var ePayment334_04 = {

    "2604001": "Bed Confined",
    "2604003": "Cardiac/Hemodynamic monitoring required during transport",
    "2604005": "Confused; combative; lethargic; comatose",
    "2604007": "Contractures",
    "2604009": "Danger to self or others-monitoring",
    "2604011": "Danger to self or others-seclusion (flight risk)",
    "2604013": "DVT requires elevation of lower extremity",
    "2604015": "IV medications/fluids required during transport",
    "2604017": "Moderate to severe pain on movement",
    "2604019": "Morbid Obesity requires additional personnel/equipment to handle",
    "2604021": "Non-healing fractures",
    "2604023": "Orthopedic device (backboard; halo; use of pins in traction; etc) requiring special handling in transit",
    "2604025": "Restraints (Physical or Chemical) anticipated or used during transport",
    "2604027": "Risk of falling off wheelchair or stretcher while in motion (not related to obesity)",
    "2604029": "Severe Muscular weakness and de-conditioned state precludes any significant physical activity",
    "2604031": "Special handling en route-Isolation",
    "2604033": "Third Party assistance/attendant required to apply; administer; or regulate or adjust oxygen en route",
    "2604035": "Unable to maintain erect sitting position in a chair for time needed to transport; due to moderate muscular weakness and de-conditioning.",
    "2604037": "Unable to sit in chair or wheelchair due to Grade II or greater decubitus ulcers on buttocks."
};
var ePayment334_05 = {

    "2605001": "Clinical Nurse Specialist",
    "2605003": "Discharge Planner",
    "2605005": "Physician (MD or DO)",
    "2605007": "Physician Assistant",
    "2605009": "Registered Nurse",
    "2605011": "Registered Nurse Practitioner"
};
var ePayment334_08 = {
    "2608001": "Resident Within EMS Service Area",
    "2608003": "Not a Resident Within EMS Service Area"
};
var ePayment334_11 = {
    "2611001": "Other",
    "2611003": "Primary",
    "2611005": "Secondary"
};
var ePayment334_22 = {
    "2622001": "Self",
    "2622003": "Spouse",
    "2622005": "Child/Dependent",
    "2622007": "Other"
};
var ePayment334_32 = {
    "2632001": "Appointed Guardian",
    "2632003": "Child/Dependent",
    "2632005": "Father",
    "2632007": "Mother",
    "2632009": "Other (Non-Relative)",
    "2632011": "Other (Relative)",
    "2632013": "Sibling",
    "2632015": "Spouse"
};
var ePayment334_40 = {
    "2640001": "Immediate",
    "2640003": "Non-Immediate"
};
var ePayment334_41 = {
    "2641001": "Unable to sit without assistance",
    "2641003": "Unable to stand without assistance",
    "2641005": "Unable to walk without assistance"
};
var ePayment334_42 = {

    "2642001": "Advanced EMT-Paramedic",
    "2642003": "Nurse",
    "2642005": "Nurse Practitioner",
    "2642007": "Physician (MD; DO)",
    "2642009": "Physician Assistant"
};
var ePayment334_43 = {

    "I": "Initial Trip",
    "R": "Return Trip",
    "X": "Round Trip",
    "T": "Transfer Trip"
};
var ePayment334_44 = {

    "A": "Patient was transported to the nearest facility for care of symptoms; complaints; or both",
    "B": "Patient was transported for the benefit of a preferred physician",
    "C": "Patient was transported for the nearness of family members",
    "D": "Patient was transported for the care of a specialist or for availability of equipment",
    "E": "Patient was transferred to a Rehabilitation Facility"
};
var ePayment334_47 = {

    "1": "Patient was admitted to hospital",
    "2": "Patient was bed confined before the ambulance service",
    "3": "Patient was bed confined after the ambulance service",
    "4": "Patient was moved by stretcher",
    "5": "Patient was unconscious or in shock",
    "6": "Patient was transported in an emergency situation",
    "7": "Patient had to be physically restrained",
    "8": "Patient had visible hemorrhaging",
    "9": "Ambulance service was medically necessary",
    "10": "Transportation was to the nearest facility"
};
var ePayment334_49 = {

    "9923001": "No",
    "9923003": "Yes"
};
var ePayment334_50 = {

    "2650001": "ALS; Level 1",
    "2650003": "ALS; Level 1 Emergency",
    "2650005": "ALS; Level 2",
    "2650007": "BLS",
    "2650009": "BLS; Emergency",
    "2650011": "Fixed Wing (Airplane)",
    "2650013": "Paramedic Intercept",
    "2650015": "Specialty Care Transport",
    "2650017": "Rotary Wing (Helicopter)"
};
var ePayment334_52 = {
    "C1": "Interfacility Transport (Requires Higher level of care)",
    "C2": "Interfacility Transport (service not available)",
    "C3": "Emergency Trauma Dispatch Condition Code (Major Incident or Mechanism of Injury)",
    "C4": "Medically Necessary Transport (Facility on Divert or Services Unavailable)",
    "C5": "BLS Transport of ALS Patient (ALS not available)",
    "C6": "ALS Response (Based on Dispatch Info) to BLS Patient (Condition)",
    "C7": "IV Medications required en route (ALS)",
    "D1": "Long Distance-patient's condition requires rapid transportation over a long distance"
};

function setCodeText(NEMSISElementNumber, codeVal) {
    var _return = [];


    switch (NEMSISElementNumber) {
        case "ePayment.01":
            if (ePayment334_01[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = ePayment334_01[codeVal];
            }
            break;
        case "ePayment.02":
            if (ePayment334_02[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = ePayment334_02[codeVal];
            }
            break;

        case "ePayment.04":
            if (ePayment334_04[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = ePayment334_04[codeVal];
            }
            break;

        case "ePayment.05":
            if (ePayment334_05[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = ePayment334_05[codeVal];
            }
            break;


        case "ePayment.08":
            if (ePayment334_08[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = ePayment334_08[codeVal];
            }
            break;

        case "ePayment.11":
            if (ePayment334_11[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = ePayment334_11[codeVal];
            }
            break;

        case "ePayment.22":
            if (ePayment334_22[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = ePayment334_22[codeVal];
            }
            break;

        case "ePayment.32":
            if (ePayment334_32[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = ePayment334_32[codeVal];
            }
            break;

        case "ePayment.40":
            if (ePayment334_40[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = ePayment334_40[codeVal];
            }
            break;

        case "ePayment.41":
            if (ePayment334_41[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = ePayment334_41[codeVal];
            }
            break;


        case "ePayment.42":
            if (ePayment334_42[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = ePayment334_42[codeVal];
            }
            break;

        case "ePayment.43":
            if (ePayment334_43[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = ePayment334_43[codeVal];
            }
            break;

        case "ePayment.44":
            if (ePayment334_44[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = ePayment334_44[codeVal];
            }
            break;


        case "ePayment.47":
            if (ePayment334_47[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = ePayment334_47[codeVal];
            }
            break;

        case "ePayment.49":
            if (ePayment334_49[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = ePayment334_49[codeVal];
            }
            break;

        case "ePayment.50":
            if (ePayment334_50[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = ePayment334_50[codeVal];
            }
            break;

        case "ePayment.52":
            if (ePayment334_52[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = ePayment334_52[codeVal];
            }
            break;


        default:
            _return = " UNDEFINED";
    }
    return _return;

};