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

    //////////////////ePayment.01
    _val = getValue(businessObject.elements, "ePayment.01");
    if (_val == null)
    {     
        v2Array.push({ section: "E07", element: "E07_01", val: v2NOT_RECORDED });
        ePayment["ePayment.01"] = NIL_V3NOT_RECORDED
        ePayment["PrimaryMethodofPayment"] = NOT_RECORDED
    }
    else
    {
        v2Array.push({ section: "E07", element: "E07_01", val: setV2("ePayment.01", _val[0]) });
        ePayment["ePayment.01"] = _val[0];
        ePayment["PrimaryMethodofPayment"] = setCodeText("ePayment.01", _val[0])
    };

    //////////////////ePayment.02
    _val = getValue(businessObject.elements, "ePayment.02");
    if (_val == null)
    {
        v2Array.push({ section: "E07", element: "E07_02", val: v2NOT_KNOWN });
        ePayment["ePayment.02"] = null;
        ePayment["PhysicianCertificationStatement"] = null;
    }
    else
    {
        ePayment["PhysicianCertificationStatement"] = setCodeText("ePayment.02", _val[0]);
        v2Array.push({ section: "E07", element: "E07_02", val: setV2("ePayment.02", _val[0]) });
        ePayment["ePayment.02"] = _val[0];
    };

    //////////////////ePayment.03
    _val = getValue(businessObject.elements, "ePayment.03");
    if (_val == null)
    {
        ePayment["ePayment.03"] = null;
        ePayment["DatePhysicianCertificationStatementSigned"] = null;

    }
    else
    {
        ePayment["ePayment.03"] = _val[0];
        ePayment["ePayment.DatePhysicianCertificationStatementSigned"] = _val[0];
    };


    //ePayment.04////////////
    _val = getValue(elementList, "ePayment.04");
    if (_val == null) {

        ePayment["ePayment.04"] = null;
        ePayment["ReasonforPhysicianCertificationStatement"] = null;
    }
    else {
        var arr1 = [];
        var arr3 = [];
        for (var i = 0; i < _val.length; i++)
        {
            arr1.push(_val[i]);
            arr3.push(setCodeText("ePayment.04", _val[i]));
        }
        ePayment["ePayment.04"] = arr1.slice(0);
        ePayment["ReasonforPhysicianCertificationStatement"] = arr3.slice(0);
    };

    //////////////////ePayment.05
    _val = getValue(businessObject.elements, "ePayment.05");
    if (_val == null)
    {
        ePayment["ePayment.05"] = null;
        ePayment["HealthcareProviderTypeSigningPhysicianCertificationStatement"] = null;
    }
    else {
        ePayment["HealthcareProviderTypeSigningPhysicianCertificationStatement"] = setCodeText("ePayment.05", _val[i]);
        ePayment["ePayment.05"] = _val[0];
    };

    //////////////////ePayment.06
    _val = getValue(businessObject.elements, "ePayment.06");
    if (_val == null) {
        ePayment["ePayment.06"] = null;
        ePayment["LastNameofIndividualSigningPhysicianCertificationStatement"] = null;
    }
    else
    {
        ePayment["LastNameofIndividualSigningPhysicianCertificationStatement"] = _val[0];
        ePayment["ePayment.06"] = _val[0];
    };

    //////////////////ePayment.07
    _val = getValue(businessObject.elements, "ePayment.07");
    if (_val == null) {
        ePayment["ePayment.07"] = null;
        ePayment["FirstNameofIndividualSigningPhysicianCertificationStatement"] = null;

    }
    else {
        ePayment["ePayment.07"] = _val[0];
        ePayment["FirstNameofIndividualSigningPhysicianCertificationStatement"] = _val[0];
    };

    //////////////////ePayment.08
    _val = getValue(businessObject.elements, "ePayment.08");
    if (_val == null) {
        ePayment["ePayment.08"] = null;
        ePayment["PatientResidesinServiceArea"] = null;
    }
    else {
        ePayment["ePayment.08"] = _val[0];
        ePayment["PatientResidesinServiceArea"] = _val[0];
    };

    IF NOT INSURED, SET TO NA!~
    ///////////////////////////////////////////////ePayment.InsuranceGroup
    _sectionIndex = getSectionIndex(businessObject.sections[i].attributes, "ePayment.InsuranceGroup");
    for (var x = 0; x < _sectionIndex.length; x++) {
        var listOfElements = businessObject.sections[i].attributes.sections[_sectionIndex[x]].attributes.elements

        //////////////////ePayment.09
        _val = getValue(listOfElements, "ePayment.09");
        if (_val == null)
        {
            InsuranceGroupArray["ePayment.09"] = null;
            InsuranceGroupArray["InsuranceCompanyID"] = null;
        }
        else {
            InsuranceGroupArray["ePayment.09"] = _val[0];
            InsuranceGroupArray["InsuranceCompanyID"] = _val[0];
        };

        //////////////////ePayment.10
        _val = getValue(listOfElements, "ePayment.10");
        if (_val == null) {
            InsuranceGroupArray["ePayment.10"] = null;
            InsuranceGroupArray["InsuranceCompanyName"] = null;
        }
        else {
            InsuranceGroupArray["ePayment.10"] = _val[0];
            InsuranceGroupArray["InsuranceCompanyName"] = _val[0];
        };

        //////////////////ePayment.11
        _val = getValue(listOfElements, "ePayment.11");
        if (_val == null)
        {
            v2Array.push({ section: "E07", element: "E07_04", val: v2NOT_KNOWN });
            InsuranceGroupArrayePayment["ePayment.11"] = null;
            InsuranceGroupArray["InsuranceCompanyBillingPriority"] = null;

        }
        else
        {
            v2Array.push({ section: "E07", element: "E07_04", val: SetD2("ePayment.11", _val[0]) });
            InsuranceGroupArray["ePayment.11"] = _val[0];
            InsuranceGroupArray["InsuranceCompanyBillingPriority"] = setCodeText("ePayment.11", _val[0]);
        };


        //////////////////ePayment.12
        _val = getValue(listOfElements, "ePayment.12");
        if (_val == null) {
            v2Array.push({ section: "E07", element: "E07_05", val: v2NOT_KNOWN });
            InsuranceGroupArray["ePayment.12"] = null;
            InsuranceGroupArray["InsuranceCompanyAddress"] = null;
        }
        else {
            v2Array.push({ section: "E07", element: "E07_05", val: _val[0] });
            InsuranceGroupArray["ePayment.12"] = _val[0];
            InsuranceGroupArray["InsuranceCompanyAddress"] = _val[0];
        };

        //////////////////ePayment.13
        _val = getValue(listOfElements, "ePayment.13");
        if (_val == null)
        {
            v2Array.push({ section: "E07", element: "E07_06", val: v2NOT_KNOWN });
            InsuranceGroupArray["ePayment.13"] = null;
            InsuranceGroupArray["InsuranceCompanyCity"] = null;
        }
        else {
            v2Array.push({ section: "E07", element: "E07_06", val: setV2("ePayment.13", _val[0]) });
            InsuranceGroupArray["ePayment.13"] = _val[0];
            InsuranceGroupArray["InsuranceCompanyCity"] = setCodeText("ePayment.13", _val[0]);
        };


        //////////////////ePayment.14
        _val = getValue(listOfElements, "ePayment.14");
        if (_val == null) {
            v2Array.push({ section: "E07", element: "E07_07", val: v2NOT_KNOWN });
            InsuranceGroupArray["ePayment.14"] = null;
            InsuranceGroupArray["InsuranceCompanyState"] = null;
        }
        else {
            v2Array.push({ section: "E07", element: "E07_07", val: setV2("ePayment.14", _val[0]) });
            InsuranceGroupArray["ePayment.14"] = _val[0];
            InsuranceGroupArray["InsuranceCompanyState"] = setCodeText("ePayment.14", _val[0]);
        };

        //////////////////ePayment.15
        _val = getValue(listOfElements, "ePayment.15");
        if (_val == null) {
            v2Array.push({ section: "E07", element: "E07_08", val: v2NOT_KNOWN });
            InsuranceGroupArray["ePayment.15"] = null;
            InsuranceGroupArray["InsuranceCompanyZip"] = null;
        }
        else {
            v2Array.push({ section: "E07", element: "E07_08", val: _val[0] });
            InsuranceGroupArray["ePayment.15"] = _val[0];
            InsuranceGroupArray["InsuranceCompanyZip"] = _val[0];
        };

        //////////////////ePayment.16
        _val = getValue(listOfElements, "ePayment.16");
        if (_val == null) {
            InsuranceGroupArray["ePayment.16"] = null;
            InsuranceGroupArray["InsuranceCompanyCountry"] = null;
        }
        else {
            InsuranceGroupArray["ePayment.16"] = setCodeText("ePayment.16", _val[0]);
            InsuranceGroupArray["InsuranceCompanyCountry"] = null;

        };


        //////////////////ePayment.17
        _val = getValue(listOfElements, "ePayment.17");
        if (_val == null) {
            v2Array.push({ section: "E07", element: "E07_09", val: v2NOT_KNOWN });
            InsuranceGroupArray["ePayment.17"] = null;
            InsuranceGroupArray["InsuranceGroupIDName"] = null;
        }
        else {
            v2Array.push({ section: "E07", element: "E07_09", val: _val[0] });
            InsuranceGroupArray["ePayment.17"] = _val[0];
            InsuranceGroupArray["InsuranceGroupIDName"] = _val[0];
        };

        //////////////////ePayment.18
        _val = getValue(listOfElements, "ePayment.18");
        if (_val == null) {
            v2Array.push({ section: "E07", element: "E07_10", val: v2NOT_KNOWN });
            InsuranceGroupArray["ePayment.18"] = null;
            InsuranceGroupArray["ePayment.18"] = InsurancePolicyIDNumber;
        }
        else {
            v2Array.push({ section: "E07", element: "E07_10", val: _val[0] });
            InsuranceGroupArray["ePayment.18"] = _val[0];
            InsuranceGroupArray["InsurancePolicyIDNumber"] = _val[0];
        };

        //////////////////ePayment.19
        _val = getValue(listOfElements, "ePayment.19");
        if (_val == null) {
            v2Array.push({ section: "E07", element: "E07_11", val: v2NOT_KNOWN });
            InsuranceGroupArray["ePayment.19"] = null;
            InsuranceGroupArray["LastNameoftheInsured"] = null;
        }
        else {
            v2Array.push({ section: "E07", element: "E07_11", val: _val[0] });
            InsuranceGroupArray["ePayment.19"] = _val[0];
            InsuranceGroupArray["LastNameoftheInsured"] = _val[0];
        };

        //////////////////ePayment.20
        _val = getValue(listOfElements, "ePayment.20");
        if (_val == null) {
            v2Array.push({ section: "E07", element: "E07_12", val: v2NOT_KNOWN });
            InsuranceGroupArray["ePayment.20"] = null;
            InsuranceGroupArray["FirstNameoftheInsured"] = null;
        }
        else {
            v2Array.push({ section: "E07", element: "E07_12", val: _val[0] });
            InsuranceGroupArray["ePayment.20"] = _val[0];
            InsuranceGroupArray["FirstNameoftheInsured"] = _val[0];
        };

        //////////////////ePayment.21
        _val = getValue(listOfElements, "ePayment.21");
        if (_val == null) {
            v2Array.push({ section: "E07", element: "E07_13", val: v2NOT_KNOWN });
            InsuranceGroupArray["ePayment.21"] = null;
            InsuranceGroupArray["MiddleNameoftheInsured"] = null;
        }
        else {
            v2Array.push({ section: "E07", element: "E07_13", val: _val[0]});
            InsuranceGroupArray["ePayment.21"] = _val[0];
            InsuranceGroupArray["MiddleNameoftheInsured"] = _val[0];
        };

        //////////////////ePayment.22
        _val = getValue(listOfElements, "ePayment.22");
        if (_val == null) {
            v2Array.push({ section: "E07", element: "E07_14", val: v2NOT_KNOWN });
            InsuranceGroupArray["RelationshiptotheInsured"] = null;
            InsuranceGroupArray["ePayment.22"] = null;
        }
        else {
            v2Array.push({ section: "E07", element: "E07_14", val: SetD2("ePayment.22", _val[0]) });
            InsuranceGroupArray["ePayment.22"] = _val[0];
            InsuranceGroupArray["RelationshiptotheInsured"] = setCodeText("ePayment.22>", _val[0]);
        };

    };

    var hasClosestLivingRelative = false;
    //////////////////ePayment.23
    _val = getValue(businessObject.elements, "ePayment.23");
    if (_val == null) {
        v2Array.push({ section: "E07", element: "E07_18", val: v2NOT_KNOWN });
        ePayment["ePayment.23"] = null;
        ePayment["ClosestRelativeGuardianLastName"] = null;
    }
    else {
        hasClosestLivingRelative = true;
        v2Array.push({ section: "E07", element: "E07_18", val: _val[0] });
        ePayment["ePayment.23"] = _val[0];
        ePayment["ClosestRelativeGuardianLastName"] = _val[0];
    };


    //////////////////ePayment.24
    _val = getValue(businessObject.elements, "ePayment.24");
    if (_val == null) {
        v2Array.push({ section: "E07", element: "E07_19", val: null });
        ePayment["ePayment.24"] = null;
        ePayment["ClosestRelativeGuardianFirstName"] = null;
    }
    else {
        hasClosestLivingRelative = true;
        v2Array.push({ section: "E07", element: "E07_19", val: _val[0] });
        ePayment["ePayment.24"] = _val[0];
        ePayment["ClosestRelativeGuardianFirstName"] = _val[0];;
    };

    //////////////////ePayment.25
    _val = getValue(businessObject.elements, "ePayment.25");
    if (_val == null) {
        v2Array.push({ section: "E07", element: "E07_20", val: null });
        ePayment["ePayment.25"] = null;
        ePayment["ClosestRelativeGuardianMiddleName"] = null;
    }
    else 
    {
        v2Array.push({ section: "E07", element: "E07_20", val: _val[0] })
        ePayment["ePayment.25"] = _val[0];
        ePayment["ClosestRelativeGuardianMiddleName"]= _val[0];
    };

    //////////////////ePayment.26
    _val = getValue(businessObject.elements, "ePayment.26");
    if (_val == null) {
        v2Array.push({ section: "E07", element: "E07_21", val: null });
        ePayment["ePayment.26"] = null;
        ePayment["ClosestRelativeGuardianStreetAddress"] = null;
    }
    else {        
        v2Array.push({ section: "E07", element: "E07_21", val: _val[0] });
        ePayment["ePayment.26"] = _val[0];
        ePayment["ClosestRelativeGuardianStreetAddress"] = _val[0];
    };

    //////////////////ePayment.27
    _val = getValue(businessObject.elements, "ePayment.27");
    if (_val == null) {
        v2Array.push({ section: "E07", element: "E07_22", val: null });
        ePayment["ePayment.27"] = null;
        ePayment["ClosestRelativeGuardianCity"] = null;
    }
    else {        
        v2Array.push({ section: "E07", element: "E07_22", val: setV2("ePayment.27", _val[0]) });
        ePayment["ePayment.27"] = _val[0];
        ePayment["ClosestRelativeGuardianCity"] = setCodeText("ePayment.27", _val[0]);
    };

    //////////////////ePayment.28
    _val = getValue(businessObject.elements, "ePayment.28");
    if (_val == null) {

        v2Array.push({ section: "E07", element: "E07_23", val: null });
        ePayment["ePayment.28"] = null;
        ePayment["ClosestRelativeGuardianState"] = null;
    }
    else {
        ePayment["ClosestRelativeGuardianState"] = setCodeText("ePayment.28", _val[0]);
        v2Array.push({ section: "E07", element: "E07_23", val:  setV2("ePayment.28", _val[0]) });
        ePayment["ePayment.28"] = _val;
    };

    //////////////////ePayment.29
    _val = getValue(businessObject.elements, "ePayment.29");
    if (_val == null) {
        v2Array.push({ section: "E07", element: "E07_24", val: null });
        ePayment["ePayment.29"] = null;
        ePayment["ClosestRelativeGuardianZIPCode"] = null;
    }
    else {
        v2Array.push({ section: "E07", element: "E07_24", val: _val[0] });
        ePayment["ePayment.29"] = _val[0];
        ePayment["ClosestRelativeGuardianZIPCode"] = _val[0];
    };

    //////////////////ePayment.30
    _val = getValue(businessObject.elements, "ePayment.30");
    if (_val == null) {
        ePayment["ePayment.30"] = null;
        ePayment["ClosestRelativeGuardianCountry"] = null;
    }
    else {
        ePayment["ClosestRelativeGuardianCountry"] = setCodeText("ePayment.30", _val[0]);;
        ePayment["ePayment.30"] = _val[0];
        
    };
    alert("PN Values")
    _val = getValue(businessObject.elements, "ePayment.31");
    if (_val == null) 
    {
        ePayment["ePayment.31"] = null;
        ePayment["ClosestRelativeGuardianPhoneNumber"] = null;

    }
    else 
    {
        sPatHomeNum ="";
        var arr1 = [];
        var arr2 = [];
        for (var i = 0; i < _val.length; i++) 
        {
            var PhoneNumberType = setPhoneNumberType("ePatient.18", _val[i]);
           
            if (PhoneNumberType == "9913001")
            {
                arr1.push("FAX  " + _val[i]);
                arr2.push("9913001  " + _val[i]);
            }
            else if (PhoneNumberType == "9913003")
            {
                arr1.push("HOME  " + _val[i]);
                arr1.push("9913003  " + _val[i]);
                sPatNum = _val[i];
             
            }
            else if (PhoneNumberType == "9913005")
            {
                arr1.push("MOBILE  " + _val[i]);
                arr2.push("9913005  " + _val[i]);               
            }
            else if (PhoneNumberType == "9913007")
            {
                arr1.push("PAGER " + _val[i]);
                arr2.push("9913007 " + _val[i]);
            }
            else if (PhoneNumberType == "9913009")
            {
                arr1.push("WORK " + _val[i]);
                arr2.push("9913009 " + _val[i]);
            }
            else
            {
                arr1.push(_val[i]);
                arr2.push(_val[i]);               
            }
        };

        ePayment["ePayment.31"] = null;
        ePayment["ClosestRelativeGuardianPhoneNumber"] = null;

        if(sPatHomeNum == null)
        {
            for (var i = 0; i < _val.length; i++) {
                if(val[i] !=null)
                {
                    sPatHomeNum = _val[i]

                }
            }
        };   
        v2Array.push({ section: "E07", element: "E07_25", val: sPatHomeNum });

    };

    //////////////////ePayment.32
    _val = getValue(businessObject.elements, "ePayment.32");
    if (_val == null) {
        v2Array.push({ section: "E07", element: "E07_26", val: null });
        ePayment["ePayment.32"] = null;
        ePayment["ClosestRelativeGuardianRelationship"] = null;
    }
    else {
        ePayment["ClosestRelativeGuardianRelationship"] = setCodeText("ePayment.32", _val[0]);
        v2Array.push({ section: "E07", element: "E07_26", val: SetD2("ePayment.32", _val[0]) });
        ePayment["ePayment.32"] = _val[0];
    };


    //////////////////ePayment.33
    _val = getValue(businessObject.elements, "ePayment.33");
    if (_val == null) {
        v2Array.push({ section: "E07", element: "E07_27", val: null });
        ePayment["ePayment.33"] = null;
        ePayment["PatientEmployer"] = null;
    }
    else {

        ePayment["PatientEmployer"] = _val[0];
        v2Array.push({ section: "E07", element: "E07_27", val: _val[0] });
        ePayment["ePayment.33"] = _val[0];
    };

    //////////////////ePayment.34
    _val = getValue(businessObject.elements, "ePayment.34");
    if (_val == null) {

        v2Array.push({ section: "E07", element: "E07_28", val: null });
        ePayment["ePayment.34"] = null;
        ePayment["EmployerAddress"] = null;
    }
    else {
        ePayment["EmployerAddress"] = _val[0];
        v2Array.push({ section: "E07", element: "E07_28", val: _val[0] });
        ePayment["ePayment.34"] = _val[0];
    };

    //////////////////ePayment.35
    _val = getValue(businessObject.elements, "ePayment.35");
    if (_val == null) {
        v2Array.push({ section: "E07", element: "E07_29", val: null });
        ePayment["ePayment.35"] = null;
        ePayment["EmployerCity"] = null;
    }
    else {

        ePayment["EmployerCity"]= setCodeText("ePayment.35", _val[0]);
        v2Array.push({ section: "E07", element: "E07_29", val: SetD2("ePayment.35", _val[0]) });
        ePayment["ePayment.35"] = _val[0];
    };

    //////////////////ePayment.36
    _val = getValue(businessObject.elements, "ePayment.36");
    if (_val == null) {
        v2Array.push({ section: "E07", element: "E07_30", val: null });
        ePayment["ePayment.36"] = null;
        ePayment["EmployerState"] = null;
    }
    else {
        ePayment["EmployerState"] = setCodeText("ePayment.36", _val[0]);
        v2Array.push({ section: "E07", element: "E07_30", val: SetD2("ePayment.35", _val[0]) });
        ePayment["ePayment.36"] = _val[0];
    };

    //////////////////ePayment.37
    _val = getValue(businessObject.elements, "ePayment.37");
    if (_val == null) {
        v2Array.push({ section: "E07", element: "E07_31", val: null });
        ePayment["ePayment.37"] = null;
        ePayment["EmployerZip"] = null;
    }
    else {
        v2Array.push({ section: "E07", element: "E07_31", val: _val[0] });
        ePayment["ePayment.37"] = _val[0];
        ePayment["EmployerZip"] = _val[0];
    };

    //////////////////ePayment.38
    _val = getValue(businessObject.elements, "ePayment.38");
    if (_val == null) {
        ePayment["ePayment.38"] = null;
        ePayment["EmployerCountry"] = null;
    }
    else {
        ePayment["EmployerCountry"]  = setCodeText("ePayment.38", _val[0]);        
        ePayment["ePayment.38"] = _val[0];
    };


    //////////////////ePayment.39
    _val = getValue(businessObject.elements, "ePayment.39");
    if (_val == null) {
        v2Array.push({ section: "E07", element: "E07_32", val: null });
        ePayment["ePayment.39"] = null;
        ePayment["PatientEmployerPrimaryPhoneNumber"] = null;
    }
    else
    {
        sPatHomeNum ="";
        var arr1 = [];
        var arr2 = [];
        for (var i = 0; i < _val.length; i++) 
        {
            var PhoneNumberType = setPhoneNumberType("ePatient.18", _val[i]);
           
            if (PhoneNumberType == "9913001")
            {
                arr1.push("FAX  " + _val[i]);
                arr2.push("9913001  " + _val[i]);
            }
            else if (PhoneNumberType == "9913003")
            {
                arr1.push("HOME  " + _val[i]);
                arr1.push("9913003  " + _val[i]);                
             
            }
            else if (PhoneNumberType == "9913005")
            {
                arr1.push("MOBILE  " + _val[i]);
                arr2.push("9913005  " + _val[i]);               
            }
            else if (PhoneNumberType == "9913007")
            {
                arr1.push("PAGER " + _val[i]);
                arr2.push("9913007 " + _val[i]);
            }
            else if (PhoneNumberType == "9913009")
            {
                arr1.push("WORK " + _val[i]);
                arr2.push("9913009 " + _val[i]);
                sPatNum = _val[i];
            }
            else
            {
                arr1.push(_val[i]);
                arr2.push(_val[i]);               
            }
        };
        if(sPatHomeNum == null)
        {
            for (var i = 0; i < _val.length; i++) {
                if(val[i] !=null)
                {
                    sPatHomeNum = _val[i]

                }
            }
        };            
        v2Array.push({ section: "E07", element: "E07_32", val: sPatHomeNum });
        ePayment["ePayment.39"]  = arr1.slice(0);
        ePayment["PatientEmployerPrimaryPhoneNumber"] = arr2.slice(0);
    };

    //////////////////ePayment.40
    _val = getValue(businessObject.elements, "ePayment.40");
    if (_val == null) {
        v2Array.push({ section: "E07", element: "E07_33", val: null });
        ePayment["ePayment.40"] = null;
        ePayment["ResponseUrgency"] = null;
    }
    else {
        v2Array.push({ section: "E07", element: "E07_33", val: SetD2("ePayment.40", _val[0]) });
        ePayment["ePayment.40"] = _val[0];
        ePayment["ResponseUrgency"] = setCodeText("ePayment.40", _val[0]);
    };

    //////////////////ePayment.41
    _val = getValue(businessObject.elements, "ePayment.41");
    if (_val == null) {
        ePayment["ePayment.41"] = null;
        ePayment["PatientTransportAssessment"] = null;
    }
    else {
        var arr1 = [];
        var arr3 = [];
        for (var i = 0; i < _val.length; i++) {
            arr1.push(_val[i]);
            arr3.push(setCodeText("ePayment.41", _val[i]));
        }
        ePayment["ePayment.41"] = arr1.slice(0);
        ePayment["PatientTransportAssessment"] = arr3.slice(0);
    };


    //////////////////ePayment.42
    _val = getValue(businessObject.elements, "ePayment.42");
    if (_val == null) {
        ePayment["ePayment.42"] = null;
        ePayment["SpecialtyCareTransportCareProvider"] = null;
    }
    else {        
        var arr1 = [];
        var arr3 = [];
        for (var i = 0; i < _val.length; i++) {
            arr1.push(_val[i]);
            arr3.push(setCodeText("ePayment.42", _val[i]));
        }
        ePayment["ePayment.42"] = arr1.slice(0);
        ePayment["SpecialtyCareTransportCareProvider"] =arr3.slice(0);

    };

    //////////////////ePayment.43
    _val = getValue(businessObject.elements, "ePayment.43");
    if (_val == null) {
        ePayment["ePayment.43"] = null;
        ePayment["AmbulanceTransportCode"] = null;
    }
    else {
        ePayment["ePayment.43"] = _val[0];
        ePayment["AmbulanceTransportCode"] = _val[0];
    };

    //////////////////ePayment.44
    _val = getValue(businessObject.elements, "ePayment.44");
    if (_val == null) {
        ePayment["ePayment.44"] = null;
        ePayment["AmbulanceTransportReasonCode"] = null;
    }
    else {
        ePayment["AmbulanceTransportReasonCode"] = setCodeText("ePayment.44", _val[0]) ;       
        ePayment["ePayment.44"] = _val[0];
    };

    //////////////////ePayment.45
    _val = getValue(businessObject.elements, "ePayment.45");
    if (_val == null) {
        ePayment["ePayment.45"] = null;
        ePayment["RoundTripPurposeDescription"] = null;
    }
    else {
        ePayment["ePayment.45"] = _val[0];
        ePayment["RoundTripPurposeDescription"] = _val[0];
    };

    //////////////////ePayment.46
    _val = getValue(businessObject.elements, "ePayment.46");
    if (_val == null) {
        ePayment["ePayment.46"] = null;
        ePayment["StretcherPurposeDescription"] = null;
    }
    else {
        ePayment["StretcherPurposeDescription"] = _val[0];
        ePayment["ePayment.46"] = _val[0];
    };

    //////////////////ePayment.47
    _val = getValue(businessObject.elements, "ePayment.47");
    if (_val == null) {
        ePayment["ePayment.47"] = null;
        ePayment["AmbulanceConditionsIndicator"] = null;
    }
    else {
        ePayment["ePayment.47"] = _val[0];
        ePayment["AmbulanceConditionsIndicator"] = _val[0];
    };

    //////////////////ePayment.48
    _val = getValue(businessObject.elements, "ePayment.48");
    if (_val == null) {
        ePayment["ePayment.48"] = null;
        ePayment["MileagetoClosestHospitalFacility"] = null;
    }
    else {
        ePayment["ePayment.48"] = _val[0];
        ePayment["MileagetoClosestHospitalFacility"] = _val[0];
    };

    //////////////////ePayment.49
    _val = getValue(businessObject.elements, "ePayment.49");
    if (_val == null) {
        ePayment["ePayment.49"] = null;
        ePayment["ALSAssessmentPerformedandWarranted"] = null;
    }
    else {
        ePayment["ePayment.49"] = _val[0];
        ePayment["ALSAssessmentPerformedandWarranted"] = _val[0];
    };

    //////////////////ePayment.50
    _val = getValue(businessObject.elements, "ePayment.50");
    if (_val == null) {
        if (isRequiredStateElement("ePayment.50")) {
            v2Array.push({ section: "E05", element: "E5_34", val: v2NOT_RECORDED });
            ePayment["ePayment.50"] = NIL_V3NOT_RECORDED;
            ePayment["CMSServiceLevel"] = V3NOT_RECORDED;
        }
    }
    else {
        v2Array.push({ section: "E05", element: "E5_34", val: setV2("ePayment.50", _val[0]) });
        ePayment["ePayment.50"] = _val[0];
        ePayment["CMSServiceLevel"] = setCodeText("ePayment.50", _val[0]) ;
    };

    //////////////////ePayment.51
    _val = getValue(businessObject.elements, "ePayment.51");
    if (_val == null) {
        ePayment["EMSConditionCode"] = null;
        ePayment["ePayment.51"] = null;
    }
    else {
        ePayment["ePayment.51"] = _val[0];
        ePayment["EMSConditionCode"] = _val[0];
    };

    //////////////////ePayment.52
    _val = getValue(businessObject.elements, "ePayment.52");
    if (_val == null) {
        ePayment["ePayment.52"] = null;
        ePayment["CMSTransportationIndicator"] = null;
        v2Array.push({ section: "E05", element: "E5_37", val: null});
    }
    else {
        v2Array.push({ section: "E05", element: "E5_37", val: setV2("ePayment.52", _val[0]) });        
        ePayment["ePayment.52"] = _val[0];
        ePayment["CMSTransportationIndicator"] = setCodeText("ePayment.52", _val[0]);
    };

    //////////////////ePayment.53
    _val = getValue(businessObject.elements, "ePayment.53");
    if (_val == null) {
        ePayment["ePayment.53"] = null;
        ePayment["TransportAuthorizationCode"] = null;
    }
    else {
        ePayment["ePayment.53"] = _val[0];
        ePayment["TransportAuthorizationCode"] = _val[0];
    };

    //////////////////ePayment.54
    _val = getValue(businessObject.elements, "ePayment.54");
    if (_val == null) {
        ePayment["ePayment.54"] = null;
        ePayment["PriorAuthorizationCodePayer"] = null;
    }
    else {
        ePayment["ePayment.54"] = _val[0];
        ePayment["PriorAuthorizationCodePayer"] = _val[0];
    };


    ///////////////////LabResultGroup
    _sectionIndex = getSectionIndex(businessObject.sections[i].attributes, "ePayment.SupplyItemGroup");
    for (var x = 0; x < _sectionIndex.length; x++) 
    {
        var listOfElements = businessObject.sections[i].attributes.sections[_sectionIndex[x]].attributes.elements
    
        //////////////////ePayment.55
        _val = getValue(listOfElements, "ePayment.55");
        if (_val == null) {
            SupplyItemGroup["ePayment.55"] = null;
            SupplyItemGroup["SupplyItemUsedName"] = null;
        }
        else {
            SupplyItemGroup["ePayment.55"] = _val[0];
            SupplyItemGroup["SupplyItemUsedName"] = _val[0];
        };

        //////////////////ePayment.56
        _val = getValue(listOfElements, "ePayment.56");
        if (_val == null) {
            ePayment["ePayment.56"] = null;
            ePayment["NumberofSupplyItemsUsed"] = null;
        }
        else {
            ePayment["ePayment.56"] = _val[0];
            ePayment["NumberofSupplyItemsUsed"] = _val[0];
        };
    };

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
var ePayment02 = {
    "9922001": "0",
    "9922003": "-10",
    "9922005": "1"
};
var ePayment11 = {
    "2611001":"765",
    "2611003":"755",
    "2611005":"760",
    "2611007":"765",
    "2611009":"765",
    "2611011":"765",
    "2611013":"765",
    "2611015":"765",
    "2611017":"765",
    "2611019":"765",
    "2611021":"765",
    "2611023":"765",
    "2611025":"-10"
};
var ePayment40 = {
    "2640001":"980",
    "2640003":"985"
};
var ePayment50 = {
    "2650001":"1000",
    "2650003":"1005",
    "2650005":"1010",
    "2650007":"990",
    "2650009":"995",
    "2650011":"1025",
    "2650013":"1015",
    "2650015":"1020",
    "2650017":"1030"
};

var ePayment52 = {
    "C1":"1035",
    "C2":"1036",
    "C3":"1039",
    "C4":"1038",
    "C5":"1039",
    "C6":"1037",
    "C7":"-10",
    "D1":"1041",
    "D2":"1043",
    "D3":"1043",
    "D4":"1044",
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