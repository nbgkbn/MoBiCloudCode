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
var PN_REFUSED_IS_NILLABLE = " xsi:nil=\"true\" PN=\"8801019\"/>";
var PN_UNABLE_TO_COMPLETE_IS_NILLABLE = " xsi:nil=\"true\" PN=\"8801023\"/>";
var PN_FINDING_NOT_PRESENT_IS_NILLABLE = " xsi:nil=\"true\" PN=\"8801005\"/>";

var eArrest = new Object;
var E11 = new Object;
var _retArray = [];
var XMLString = ""
var seteArrest = function (businessObject) {
    if (businessObject.name != "eArrest") {
        return null
    };

    var _retArray = [];
    if (businessObject == undefined) {
        _retArray = setNotApplicableAll();
        console.log(_retArray)
        for (var i = 0; i < _retArray.length ; i++) {
            XMLString = XMLString + _retArray[i];

        }
        console.log(XMLString)
        return _retArray;
    }

    //Value Rules
    //////////////////////////////////////////////
    if (getValue(businessObject.elements, "eArrest.05") == null) {
        if (getValue(businessObject.elements, "eArrest.06") == null) {
            ErrorList.push("CPR Care Provider Required when Provider type indicated");
        }
    }

    if (getValue(businessObject.elements, "eArrest.07") == null) {
        if (getValue(businessObject.elements, "eArrest.08") == null) {
            ErrorList.push("AED used Care Provider Required when AED use indicated");
        }
    }
    //////////////////////////////////////////////

    /////////////eArrest.01
    _val = getValue(businessObject.elements, "eArrest.01");
    if (_val == null)
    {    
        _retArray.push('\t\t' + "<eArrest.01" + NIL_V3NOT_RECORDED + '\n');
        v2Array.push({ section: "E11", element: "E11_01", val: v2NOT_RECORDED });
        OLAPArray.push('\t' + "<CardiacArrest>" + v3NOT_RECORDED + "</CardiacArrest>" + '\n');
    }
    else
    {
        eArrest["eArrest.01"] = _val[0];
        _retArray.push('\t' + "<eArrest.01>" + _val[0] + "</eArrest.01>" + '\n');
        OLAPArray.push('\t' + "<CardiacArrest>" + setCodeText("eArrest.01", _val[0]) + "</CardiacArrest>" + '\n');
        v2Array.push({ section: "E11", element: "E11_01", val: setV2("eArrest.01", _val) });
    };

    /////////////eArrest.02
    _val = getValue(businessObject.elements, "eArrest.02");
    if (_val == null) {
        ErrorList.push("eArrest.02 Required");
        v2Array.push({ section: "E11", element: "E11_02", val: v2NOT_RECORDED });
        OLAPArray.push('\t' + "<CardiacArrestEtiology>" + v3NOT_RECORDED + "</CardiacArrestEtiology>" + '\n');
    }
    else 
    {
        eArrest["eArrest.02"] = _val[0];
        _retArray.push('\t' + "<eArrest.02>" + _val[0] + "</eArrest.02>" + '\n');
        v2Array.push({ section: "E11", element: "E11_02", val: setV2("eArrest.02", _val) });
        OLAPArray.push('\t' + "<CardiacArrestEtiology>" + setCodeText("eArrest.02", _val[0]) + "</CardiacArrestEtiology>" + '\n');
    };


    /////////////eArrest.03
    _val = getValue(businessObject.elements, "eArrest.03");
    if (_val == null) 
    {
        ErrorList.push("eArrest.03 required");
        _retArray.push('\t' + "<eArrest.03" + NIL_V3NOT_RECORDED + '\n');
        OLAPArray.push('\t' + "<ResuscitationAttemptedByEMS>" + v3NOT_RECORDED + "</ResuscitationAttemptedByEMS>" + '\n');
        v2Array.push({ section: "E11", element: "E11_02", val: v2NOT_RECORDED });
    }
    else
    {
        var arr1 = [];
        var arr2 = [];
        arr1 = _val;
        arr2 = setV2("eArrest.03", _val);

        for (var i = 0; i < _val.length; i++) {
            _retArray.push('\t' + "<eArrest.03>" + _val[i] + "</eArrest.03>" + '\n');
            OLAPArray.push('\t' + "<ResuscitationAttemptedByEMS>" + setCodeText("eArrest.03", _val[0]) + "</ResuscitationAttemptedByEMS>" + '\n');
            arr2.push(setV2("eArrest.03", _val[i]));
        }
        eArrest["eArrest.03"] = arr1.slice(0);
        v2Array.push({ section: "E11", element: "E11_03", val: arr2.slice(0) });
    };

    /////////////eArrest.04
    _val = getValue(businessObject.elements, "eArrest.04");
    if (_val == null) {
        ErrorList.push("eArrest.04 required");
        _retArray.push('\t' + "<eArrest.04" + NIL_V3NOT_RECORDED + '\n');
        OLAPArray.push('\t' + "<ArrestWitnessedBy>" + v3NOT_RECORDED + "</ArrestWitnessedBy>" + '\n');
        v2Array.push({ section: "E11", element: "E11_04", val: v2NOT_RECORDED });        
    }
    else
    {
        var arr1 = [];
        var arr2 = [];
        arr1 = _val;
        arr2 = setV2("eArrest.04", _val);

        for (var i = 0; i < _val.length; i++) {
            _retArray.push('\t' + "<eArrest.04>" + _val[i] + "</eArrest.04>" + '\n');
            OLAPArray.push('\t' + "<ArrestWitnessedBy>" + setCodeText("eArrest.04", _val[0]) + "</ArrestWitnessedBy>" + '\n');
            arr2.push(setV2("eArrest.04", _val[i]));
        }
        eArrest["eArrest.04"] = arr1.slice(0);        
        v2Array.push({ section: "E11", element: "E11_04", val: arr2.slice(0) });
    };

    /////////////eArrest.05
    _val = getValue(businessObject.elements, "eArrest.05");
    if (_val == null)
    {        
        ErrorList.push("eArrest.05 required");
        _retArray.push('\t' + "<eArrest.05" + NIL_V3NOT_RECORDED + '\n');
        OLAPArray.push('\t' + "<CPRCareProvidedPriortoEMSArrival>" + v3NOT_RECORDED + "</CPRCareProvidedPriortoEMSArrival>" + '\n');
    }
    else {
        var arr1 = [];
        arr1 = _val;
        for (var i = 0; i < _val.length; i++)
        {
            _retArray.push('\t' + "<eArrest.05>" + _val[i] + "</eArrest.05>" + '\n');
            OLAPArray.push('\t' + "<CPRCareProvidedPriortoEMSArrival>" + setCodeText("eArrest.05", _val[0]) + "</CPRCareProvidedPriortoEMSArrival>" + '\n');
        }
        eArrest["eArrest.05"] = arr1.slice(0);
    };

    /////////////eArrest.06
    _val = getValue(businessObject.elements, "eArrest.06");
    
    if (_val == null)
    {
        
        ErrorList.push("eArrest.06 required");        
        OLAPArray.push('\t' + "<WhoProvidedCPRPriortoEMSArrival>" + null + "</WhoProvidedCPRPriortoEMSArrival>" + '\n');
        
    }
    else
    {
        var arr1 = [];
        var arr2 = [];
        arr1 = _val;
        arr2 = setV2("eArrest.06", _val);

        for (var i = 0; i < _val.length; i++)
        {
            _retArray.push('\t' + '\t' + "<eArrest.06>" + _val[i] + "</eArrest.06>" + '\n');
            OLAPArray.push('\t' + "<WhoProvidedCPRPriortoEMSArrival>" + setCodeText("eArrest.06", _val[0]) + "</WhoProvidedCPRPriortoEMSArrival>" + '\n');
        }
        dAgency["eArrest.06"] = arr1.slice(0);
    };


    /////////////eArrest.07
    _val = getValue(businessObject.elements, "eArrest.07");
    if (_val == null)
    {
        eArrest["eArrest.07"] = V3NOT_RECORDED;
        OLAPArray.push('\t' + "<WhoProvidedCPRPriortoEMSArrival>" + V3NOT_RECORDED + "</WhoProvidedCPRPriortoEMSArrival>" + '\n');
        _retArray.push('\t' + "<eArrest.07" + NIL_V3NOT_RECORDED + '\n');
    }
    else
    {
        OLAPArray.push('\t' + "<WhoProvidedCPRPriortoEMSArrival>" + setCodeText("eArrest.07", _val[0]) + "</WhoProvidedCPRPriortoEMSArrival>" + '\n');
        eArrest["eArrest.07"] = _val[0];
        _retArray.push('\t' + "<eArrest.07>" + _val[0] + "</eArrest.07>" + '\n');
    };

    /////////////eArrest.08
    _val = getValue(businessObject.elements, "eArrest.08");
    if (_val == null)
    {
        eArrest["eArrest.08"] = _val[0];
        _retArray.push('\t' + "<eArrest.08>" + null + "</eArrest.08>" + '\n');
        OLAPArray.push('\t' + "<WhoUsedAEDPriortoEMSArrival>" + null + "</WhoUsedAEDPriortoEMSArrival>" + '\n');

    }
    else
    {
        eArrest["eArrest.08"] = _val[0];
        _retArray.push('\t' + "<eArrest.08>" + _val[0] + "</eArrest.08>" + '\n');
        OLAPArray.push('\t' + "<WhoUsedAEDPriortoEMSArrival>" + setCodeText("eArrest.08", _val[0]) + "</WhoUsedAEDPriortoEMSArrival>" + '\n');
    };

    /////////////eArrest.09
    _val = getValue(businessObject.elements, "eArrest.09");
    if (_val == null)
    {
        TherapeuticHypothermiaInitiated
    }
    else
    {
        //If CPR Not provided, set to NotApplicable
        if (getValue(businessObject.elements, "eArrest.05") == "9923001" && getValue(businessObject.elements, "eArrest.05") == null) //if CPR not provided
        {
            _retArray.push('\t' + "<eArrest.09" + NIL_V3NOT_APPLICABLE + '\n');
            OLAPArray.push('\t' + "<TypeofCPRProvided>" + V3NOT_APPLICABLE + "</TypeofCPRProvided>" + '\n');
        }
        else
        {
            var arr1 = [];
            var arr2 = [];
            arr1 = _val;
            arr2 = setV2("eArrest.09", _val);
            for (var i = 0; i < _val.length; i++)
            {
                _retArray.push('\t' + '\t' + "<eArrest.09>" + _val[i] + "</eArrest.09>" + '\n');
                OLAPArray.push('\t' + "<TypeofCPRProvided>" + setCodeText("eArrest.09", _val[0]) + "</TypeofCPRProvided>" + '\n');
            }
            dAgency["eArrest.09"] = arr1.slice(0);
            _retArray.push('\t' + "<eArrest.09" + NIL_V3NOT_RECORDED + '\n');
        }
    };

    /////////////eArrest.10
    _val = getValue(businessObject.elements, "eArrest.10");
    if (_val == null)
    {
        if (isRequiredStateElement("eArrest.10") == true) 
        {
            OLAPArray.push('\t' + "<TherapeuticHypothermiaInitiated>" + V3NOT_RECORDED+ "</TherapeuticHypothermiaInitiated>" + '\n');
            _retArray.push('\t' + "<eArrest.10" + NIL_V3NOT_RECORDED + '\n');
        }
        else 
        {
            _retArray.push('\t' + "<eArrest.10" + NIL_V3NOT_REPORTING + '\n');
            OLAPArray.push('\t' + "<TherapeuticHypothermiaInitiated>" + V3NOT_REPORTING + "</TherapeuticHypothermiaInitiated>" + '\n');
        }
    }
    else        
    {
        eArrest["eArrest.10"] = _val[0];
        OLAPArray.push('\t' + "<TherapeuticHypothermiaInitiated>" + setCodeText("eArrest.10", _val[0]) + "</TherapeuticHypothermiaInitiated>" + '\n');
        _retArray.push('\t' + "<eArrest.10>" + _val[0] + "</eArrest.10>" + '\n');
    };


    /////////////eArrest.11
    _val = getValue(businessObject.elements, "eArrest.11");
    if (_val == null)
    {
        OLAPArray.push('\t' + "<FirstMonitoredArrestRhythmofthePatient>" + V3NOT_RECORDED + "</FirstMonitoredArrestRhythmofthePatient>" + '\n');
        v2Array.push({ section: "E11", element: "E11_05", val: v2NOT_RECORDED });
        ErrorList.push("eArrest.11 Required  National Element");
        _retArray.push('\t' + "<eArrest.11" + NIL_V3NOT_RECORDED + '\n');
    }
    else
    {
        OLAPArray.push('\t' + "<FirstMonitoredArrestRhythmofthePatient>" + setCodeText("eArrest.11", _val[0]) + "</FirstMonitoredArrestRhythmofthePatient>" + '\n');
        eArrest["eArrest.11"] = _val;
        _retArray.push('\t' + "<eArrest.11>" + _val + "</eArrest.11>" + '\n');
        v2Array.push({ section: "E11", element: "E11_05", val: _val });      
    };


    /////////////eArrest.12
    _val = getValue(businessObject.elements, "eArrest.12");
    if (_val == null)
    {
        if (isRequiredStateElement("eArrest.12") == true)
        {
            OLAPArray.push('\t' + "<AnyReturnofSpontaneousCirculation>" + v3NOT_RECORDED + "</AnyReturnofSpontaneousCirculation>" + '\n');
            v2Array.push({ section: "E11", element: "E11_06", val: v2NOT_RECORDED });
            _retArray.push('\t' + "<eArrest.12" + NIL_V3NOT_RECORDED + '\n');
        }                
    }
    else
    {
        var arr1 = [];
        var arr2 = [];
        arr1 = _val;
        arr2 = setV2("eArrest.12", _val);
        for (var i = 0; i < _val.length; i++) {
            arr2.push(setV2("eArrest.12", _val[i]))
            _retArray.push('\t' + '\t' + "<eArrest.12>" + _val[i] + "</eArrest.12>" + '\n');            
            OLAPArray.push('\t' + "<AnyReturnofSpontaneousCirculation>" + setCodeText("eArrest.12", _val[i]) + "</AnyReturnofSpontaneousCirculation>" + '\n');
        }
        dAgency["eArrest.12"] = arr1.slice(0);
        v2Array.push({ section: "E11", element: "E11_06", val: arr2.slice(0) });
    };

    /////////////eArrest.13
    _val = getValue(businessObject.elements, "eArrest.13");
    if (_val == null)
    {
        eArrest["eArrest.13"] = null;
        OLAPArray.push('\t' + "<NeurologicalOutcomeatHospitalDischarge>" + null + "</NeurologicalOutcomeatHospitalDischarge>" + '\n');
        _retArray.push('\t' + "<eArrest.13>" + null + "</eArrest.13>" + '\n');
    }
    else {
        eArrest["eArrest.13"] = _val;
        OLAPArray.push('\t' + "<NeurologicalOutcomeatHospitalDischarge>" + setCodeText("eArrest.13", _val) + "</NeurologicalOutcomeatHospitalDischarge>" + '\n');
        _retArray.push('\t' + "<eArrest.13>" + _val + "</eArrest.13>" + '\n');        
    };

    /////////////eArrest.14
    _val = getValue(businessObject.elements, "eArrest.14");
    if (_val == null)
    {
        if (isRequiredStateElement("eArrest.14") == true)
        {
            OLAPArray.push('\t' + "<DateTimeofCardiacArrest>" + v3NOT_RECORDED + "</DateTimeofCardiacArrest>" + '\n');
            v2Array.push({ section: "E11", element: "E11_08", val: v2NOT_RECORDED });
            _retArray.push('\t' + "<eArrest.14" + NIL_V3NOT_RECORDED + '\n');
        }
    }
    else
    {
        if (getValue(businessObject.elements, "eArrest.01" == "3001001"))
        {
            OLAPArray.push('\t' + "<DateTimeofCardiacArrest>" + v3NOT_APPLICABLE + "</DateTimeofCardiacArrest>" + '\n');
            v2Array.push({ section: "E11", element: "E11_08", val: v2NOT_APPLICABLE });
            _retArray.push('\t' + "<eArrest.14" + NIL_V3NOT_APPLICABLE + '\n');
        }
        else
        {
            eArrest["eArrest.14"] = _val;
            _retArray.push('\t' + "<eArrest.14>" + _val + "</eArrest.14>" + '\n');
            OLAPArray.push('\t' + "<DateTimeofCardiacArrest>" + _val + "</DateTimeofCardiacArrest>" + '\n');
            v2Array.push({ section: "E11", element: "E11_08", val: _val });
        }
    };

    /////////////eArrest.15
    var eArrest03Values = ["3003007", "3003009", "3003011"]

    _val = getValue(businessObject.elements, "eArrest.15");
    if (_val == null)
    {
        if (isRequiredStateElement("eArrest.15") == true) {
            _retArray.push('\t' + "<eArrest.15" + v3NOT_RECORDED + '\n');
            OLAPArray.push('\t' + "<ResuscitationAttemptedByEMS>" + v3NOT_RECORDED + "</ResuscitationAttemptedByEMS>" + '\n');
            eArrest["eArrest.15"] = v3NOT_RECORDED;
            v2Array.push({ section: "E11", element: "E11_09", val: v2NOT_RECORDED });
        }
        else
        {
            OLAPArray.push('\t' + "<ResuscitationAttemptedByEMS>" + v3NOT_REPORTING + "</ResuscitationAttemptedByEMS>" + '\n');
            eArrest["eArrest.15"] = v3NOT_REPORTING;
            _retArray.push('\t' + "<eArrest.15" + NIL_V3NOT_REPORTING + '\n');
            v2Array.push({ section: "E11", element: "E11_09", val: v2NOT_REPORTING });
        }       
    }
    else
    {
        if (getValue(businessObject.elements, "eArrest.03") in eArrest03Values)  //If there is no resuscitation attempt
        {
            _retArray.push('\t' + "<eArrest.15" + v3NOT_APPLICABLE + '\n');
            OLAPArray.push('\t' + "<ResuscitationAttemptedByEMS>" + v3NOT_APPLICABLE + "</ResuscitationAttemptedByEMS>" + '\n');
            eArrest["eArrest.15"] = v3NOT_APPLICABLE;
            v2Array.push({ section: "E11", element: "E11_09", val: v2NOT_APPLICABLE });

        }
        else
        {
            v2Array.push({ section: "E11", element: "E11_09", val: (setV2("eArrest.15", _val[i] });
            OLAPArray.push('\t' + "<ResuscitationAttemptedByEMS>" + _val + "</ResuscitationAttemptedByEMS>" + '\n');
            eArrest["eArrest.15"] = _val[0];
            _retArray.push('\t' + "<eArrest.15>" + _val[0] + "</eArrest.15>" + '\n');
        }
    };


    /////////////eArrest.16
    _val = getValue(businessObject.elements, "eArrest.16");
    if (_val == null)
    {
        if (isRequiredStateElement("eArrest.15") == true)
        {
            _retArray.push('\t' + "<eArrest.16" + v3NOT_RECORDED + '\n');
            OLAPArray.push('\t' + "<ReasonCPRResuscitationDiscontinued>" + v3NOT_RECORDED + "</ReasonCPRResuscitationDiscontinued>" + '\n');
            eArrest["eArrest.16"] = v3NOT_RECORDED;
            v2Array.push({ section: "E11", element: "E11_10", val: v2NOT_RECORDED });
        }
        else {
            OLAPArray.push('\t' + "<ReasonCPRResuscitationDiscontinued>" + v3NOT_REPORTING + "</ReasonCPRResuscitationDiscontinued>" + '\n');
            eArrest["eArrest.16"] = v3NOT_REPORTING;
            _retArray.push('\t' + "<eArrest.16" + NIL_V3NOT_REPORTING + '\n');
            v2Array.push({ section: "E11", element: "E11_10", val: v2NOT_REPORTING });
        }
    }
    else
    {
        if (getValue(businessObject.elements, "eArrest.03") in eArrest03Values)  //If there is no resuscitation attempt
        {
            _retArray.push('\t' + "<eArrest.16" + v3NOT_APPLICABLE + '\n');
            OLAPArray.push('\t' + "<ReasonCPRResuscitationDiscontinued>" + v3NOT_APPLICABLE + "</ReasonCPRResuscitationDiscontinued>" + '\n');
            eArrest["eArrest.16"] = v3NOT_APPLICABLE;
            v2Array.push({ section: "E11", element: "E11_10", val: v2NOT_APPLICABLE });

        }
        else {
            eArrest["eArrest.16"] = _val[0];
            OLAPArray.push('\t' + "<ReasonCPRResuscitationDiscontinued>" + setCodeText("eArrest.16", _val[0]) + "</ReasonCPRResuscitationDiscontinued>" + '\n');
            _retArray.push('\t' + "<eArrest.16>" + _val[0] + "</eArrest.16>" + '\n');
            v2Array.push({ section: "E11", element: "E11_10", val: setV2("eArrest.16", _val)});
            E11.E11_10 = setV2("eArrest.16", _val);
        }
    };


    /////////////eArrest.17
    _val = getValue(businessObject.elements, "eArrest.17");
    if (_val == null) 
    {
        ErrorList.push("eArrest.17 required");
        _retArray.push('\t' + "<eArrest.17" + NIL_V3NOT_RECORDED + '\n');       
        v2Array.push({ section: "E11", element: "E11_11", val: V2NOT_RECORDED});
        OLAPArray.push('\t' + "<CardiacRhythmonArrivalatDestination>" + V3NOT_RECORDED + "</CardiacRhythmonArrivalatDestination>" + '\n');
    }
    else
    {
        if(getValue(businessObject.elements, "eArrest.02") != null)  //if no Cardiac Arrest Etiology, eArrest.17 cannot have value
        {
            _retArray.push('\t' + "<eArrest.17" + v3NOT_APPLICABLE + '\n');
            OLAPArray.push('\t' + "<CardiacRhythmonArrivalatDestination>" + v3NOT_APPLICABLE + "</CardiacRhythmonArrivalatDestination>" + '\n');
            eArrest["eArrest.17"] = v3NOT_APPLICABLE;
            v2Array.push({ section: "E11", element: "E11_11", val: v2NOT_APPLICABLE });

        }
        else{
            var arr1 = [];
            var arr2 = [];
            arr1 = _val;
            arr2 = setV2("eArrest.17", _val);
            for (var i = 0; i < _val.length; i++) {
                _retArray.push('\t'  + "<eArrest.17>" + _val[i] + "</eArrest.17>" + '\n');
                OLAPArray.push('\t' + "<CardiacRhythmonArrivalatDestination>" + setCodeText("eArrest.17", _val[i]) + "</CardiacRhythmonArrivalatDestination>" + '\n');
            }
            dAgency["eArrest.17"] = arr1.slice(0);            
            v2Array.push({ section: "E11", element: "E11_11", val: arr2.slice(0)});
        }
    };


    /////////////eArrest.18
    _val = getValue(businessObject.elements, "eArrest.18");
    if (_val == null) {
        ErrorList.push("eArrest.18 Required");
        OLAPArray.push('\t' + "<EndofEMSCardiacArrestEvent>" + V3NOT_RECORDED + "</EndofEMSCardiacArrestEvent>" + '\n');
        eArrest["eArrest.18"] = null;
    }
    else 
    {
        if (getValue(businessObject.elements, "eArrest.01") != "3001001" ) //if Cardiac Arrest != No
        {
            _retArray.push('\t' + "<eArrest.18" + NIL_V3NOT_APPLICABLE + '\n');
            OLAPArray.push('\t' + "<EndofEMSCardiacArrestEvent>" + V3NOT_APPLICABLE + "</EndofEMSCardiacArrestEvent>" + '\n');
        }

        eArrest["eArrest.18"] = _val;
        _retArray.push('\t' + "<eArrest.18>" + _val + "</eArrest.18>" + '\n');
        OLAPArray.push('\t' + "<EndofEMSCardiacArrestEvent>" + _val+ "</EndofEMSCardiacArrestEvent>" + '\n');
    };
};

    var setNotApplicableAll = function (businessObject) 
    {
    v2Array.push({ section: "E11", element: "E11_01", val: v2NOT_AVAILABLE });
    v2Array.push({ section: "E11", element: "E11_02", val: v2NOT_AVAILABLE });
    v2Array.push({ section: "E11", element: "E11_03", val: v2NOT_AVAILABLE });
    v2Array.push({ section: "E11", element: "E11_04", val: v2NOT_AVAILABLE });
    v2Array.push({ section: "E11", element: "E11_05", val: v2NOT_AVAILABLE });
    v2Array.push({ section: "E11", element: "E11_06", val: v2NOT_AVAILABLE });
    v2Array.push({ section: "E11", element: "E11_07", val: v2NOT_AVAILABLE });
    v2Array.push({ section: "E11", element: "E11_08", val: v2NOT_AVAILABLE });
    v2Array.push({ section: "E11", element: "E11_10", val: v2NOT_AVAILABLE });
    v2Array.push({ section: "E11", element: "E11_11", val: v2NOT_AVAILABLE });
    
    _retArray.push("<eArrest>" + '\n');

    OLAPArray.push("<eArrest>" + '\n');
    OLAPArray.push('\t' + "<CardiacArrest>" + NIL_V3NOT_APPLICABLE + "</CardiacArrest>" + '\n');
    OLAPArray.push('\t' + "<CardiacArrestEtiology>" + NIL_V3NOT_APPLICABLE + "</CardiacArrestEtiology>" + '\n');
    

    _retArray.push('\t' + "<eArrest.01>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<eArrest.02>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<eArrest.03>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<eArrest.04>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<eArrest.05>" + NIL_V3NOT_APPLICABLE + '\n');

    if (isRequiredStateElement("eArrest.06") == true)
    {
        _retArray.push('\t\t' + "<eArrest.06>" + NIL_V3NOT_APPLICABLE + '\n');
    }

    _retArray.push('\t' + "<eArrest.07>" + NIL_V3NOT_APPLICABLE + '\n');
    if (isRequiredStateElement("eAirway.08") == true) {
        _retArray.push('\t\t' + "<eAirway.08>" + NIL_V3NOT_APPLICABLE + '\n');
    }

    _retArray.push('\t' + "<eArrest.09>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<eArrest.10>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<eArrest.11>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<eArrest.12>" + NIL_V3NOT_APPLICABLE + '\n');

    _retArray.push('\t' + "<eArrest.14>" + NIL_V3NOT_APPLICABLE + '\n');

    if (isRequiredStateElement("eAirway.15") == true) {
        _retArray.push('\t\t' + "<eAirway.15>" + NIL_V3NOT_APPLICABLE + '\n');
    }

    _retArray.push('\t' + "<eArrest.16>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<eArrest.17>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<eArrest.18>" + NIL_V3NOT_APPLICABLE + '\n');

    _retArray.push('\t' + "</eAirway.AirwayGroup>" + '\n');
    _retArray.push("</eAirway>" + '\n');
    // console.log(_retArray);
    return _retArray;

}





var isRequiredStateElement = function (elementID)
{
    return true;
};
var getdAgencyValue = function (businessObject, valueObject) {
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
        case "eArrest.01":

            if (eArrest01[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eArrest02[valueArray[0]]);
            }
            break;
        case "eArrest.02":
            for (i = 0; i < valueArray.length; i++) {
                if (eArrest02[valueArray[i]] == undefined) {
                    _retArray.push(valueArray[i] + "UNDEFINED");
                }
                else {
                    _retArray.push(eArrest02[valueArray[i]]);
                }
            }
            break;
        case "eArrest.03":
            if (eArrest03[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eArrest03[valueArray[0]]);
            }
            break;

        case "eArrest.04":
            if (eArrest04[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eArrest04[valueArray[0]]);
            }
            break;


        case "eArrest.11":
            if (eArrest11[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eArrest11[valueArray[0]]);
            }
            break;

        case "eArrest.12":
            if (eArrest12[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eArrest12[valueArray[0]]);
            }
            break;

        case "eArrest.13":
            if (eArrest13[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eArrest13[valueArray[0]]);
            }
            break;

        case "eArrest.14":
            if (eArrest14[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eArrest14[valueArray[0]]);
            }
            break;


        case "eArrest.16":
            if (eArrest16[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eArrest16[valueArray[0]]);
            }
            break;


        case "eArrest.17":
            if (eArrest17[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eArrest17[valueArray[0]]);
            }
            break;

        default:
            _retArray.push(NEMSISElementNumber = " version 2 not found");
    }

    return _retArray;

}

var eArrest01={
    "3001001":"0",
    "3001003":"2240",
    "3001005":"2245"
};

var eArrest02={	
    "3002001":	"2250",
    "3002003":	"2260",
    "3002005":	"2275",
    "3002007":	"2270",
    "3002009":	"2275",
    "3002011":	"2275",
    "3002013":	"2265",
    "3002015":	"2255"
};
var eArrest03={

    "3003001":	"2280",
    "3003003":	"2285",
    "3003005":	"2290",
    "3003007":	"2295",
    "3003009":	"2300",
    "3003011":	"2305"
};

var eArrest04={
    "3004001":	"2320",
    "3004003":	"2315",
    "3004005":	"2310",
    "3004007":	"2315"
};
	

var eArrest11={
    "3011001":	"2325",
    "3011003":	"2330",
    "3011005":	"2345",
    "3011007":	"2350",
    "3011009":	"2355",
    "3011011":	"2360",
    "3011013":	"2365"
};
	
var eArrest12 = {
    "3012001": "0",
    "3012003": "2370",
    "3012005": "2370",
    "3012007": "2375"
};

var eArrest13 = {
    "3013001": "2380",
    "3013003": "2380",
    "3013005": "2385",
    "3013007": "2385"
}
var eArrest14 = function (estTimeEvent, estTimeArrival) {
    var _diff = Math.abs(new Date(estTimeCal) - new Date(estTimeArrival));
    var _minuteCount = Math.floor((diff / 1000) / 60);
    if (_minuteCount > 20) {
        _eArrest14 = "2390";
    }
    else if (_minuteCount > 15 && _mincount >= 20) {
        _eArrest14 = "2395";
    }
    else if (_minuteCount > 10 && _mincount >= 15) {
        _eArrest14 = "2400";
    }
    else if (_minuteCount > 8 && _mincount >= 10) {
        _eArrest14 = "2405";
    }
    else if (_minuteCount > 6 && _mincount >= 8) {
        _eArrest14 = "2410";
    }
    else if (_minuteCount > 4 && _mincount >= 6) {
        _eArrest14 = "2415";
    }
    else if (_minuteCount > 2 && _mincount >= 4) {
        _eArrest14 = "2420";
    }
    else if (_minuteCount > 0 && _mincount >= 2) {
        _eArrest14 = "2425";
    }
    else {
        _eArrest14 = "-10";
    }
    return _eArrest14;
}
var eArrest16 = {
    "3016001": "2430",
    "3016003": "2435",
    "3016005": "2440",
    "3016007": "-10",
    "3016009": "2445",
    "3016011": "2450"
};


var eArrest17 = {
    "9901001": "2470",
    "9901003": "2480",
    "9901005": "2475",
    "9901007": "2485",
    "9901009": "2485",
    "9901011": "2490",
    "9901013": "2495",
    "9901015": "2500",
    "9901017": "2505",
    "9901019": "2510",
    "9901021": "2515",
    "9901023": "-5",
    "9901025": "-5",
    "9901027": "-5",
    "9901029": "-5",
    "9901031": "2525",
    "9901033": "2530",
    "9901035": "2535",
    "9901037": "2540",
    "9901039": "2545",
    "9901041": "2550",
    "9901043": "2555",
    "9901045": "2560",
    "9901047": "2520",
    "9901049": "2565",
    "9901051": "-5",
    "9901053": "-5",
    "9901055": "-5",
    "9901057": "-5",
    "9901059": "2570",
    "9901061": "2575",
    "9901063": "2580",
    "9901065": "2585",
    "9901067": "2590",
    "9901069": "2565",
    "9901071": "2595"
};

function setCodeText(NEMSISElementNumber, codeVal) {
    var _return = [];


    switch (NEMSISElementNumber) {
        case "eArrest.01":
            if (eArrest334_01[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eArrest334_01[codeVal];
            }
            break;
        case "eArrest.02":
            if (eArrest334_02[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eArrest334_02[codeVal];
            }
            break;

        case "eArrest.03":
            if (eArrest334_03[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eArrest334_03[codeVal];
            }
            break;
        case "eArrest.04":
            if (eArrest334_04[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eArrest334_04[codeVal];
            }
            break;
        case "eArrest.05":
            if (eArrest334_05[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eArrest334_05[codeVal];
            }
            break;
        case "eArrest.06":
            if (eArrest334_06[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eArrest334_06[codeVal];
            }
            break;

        case "eArrest.07":
            if (eArrest334_7[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eArrest334_07[codeVal];
            }
            break;
        case "eArrest.08":
            if (eArrest334_08[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eArrest334_08[codeVal];
            }
            break;
        case "eArrest.09":
            if (eArrest334_09[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eArrest334_09[codeVal];
            }
            break;

        case "eArrest.10":
            if (eArrest334_10[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eArrest334_10[codeVal];
            }
            break;
        case "eArrest.11":
            if (eArrest334_11[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eArrest334_11[codeVal];
            }
            break;

        case "eArrest.12":
            if (eArrest334_12[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eArrest334_12[codeVal];
            }
            break;
        case "eArrest.13":
            if (eArrest334_13[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eArrest334_13[codeVal];
            }
            break;
        case "eArrest.16":
            if (eArrest334_16[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eArrest334_16[codeVal];
            }
            break;

        case "eArrest.17":
            if (eArrest334_17[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eArrest334_17[codeVal];
            }
            break;

        case "eArrest.18":
            if (eArrest334_18[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eArrest334_18[codeVal];
            }
            break;
        default:
            _return = " UNDEFINED";
    }
    return _return;

};

var eArrest334_01 = {
    "3001001" : "No", 
    "3001003" : "Yes; Prior to EMS Arrival", 
    "3001005" : "Yes; After EMS Arrival"
   };

var eArrest334_02 = {
    "3002001" : "Cardiac (Presumed)", 
    "3002003" : "Drowning/Submersion", 
    "3002005" : "Drug Overdose", 
    "3002007" : "Electrocution", 
    "3002009" : "Exsanguination", 
    "3002011" : "Other (Not Listed)", 
    "3002013" : "Respiratory/Asphyxia", 
    "3002015" : "Trauma"
  
};

var eArrest334_03 = {
    "3003001" : "Attempted Defibrillation", 
    "3003003" : "Attempted Ventilation", 
    "3003005" : "Initiated Chest Compressions", 
    "3003007" : "Not Attempted-Considered Futile", 
    "3003009" : "Not Attempted-DNR Orders", 
    "3003011" : "Not Attempted-Signs of Circulation"

};
var eArrest334_04 = {
    "3004001" : "Not Witnessed", 
    "3004003" : "Witnessed by Family Member", 
    "3004005" : "Witnessed by Healthcare Provider", 
    "3004007" : "Witnessed by Lay Person"
  
};

var eArrest334_05 = {
    "9923001" : "No", 
    "9923003" : "Yes"
};

var eArrest334_06 = {
    "3006001" : "Family Member", 
"3006003" : "First Responder (Fire; Law; EMS)", 
    "3006005" : "Healthcare Professional (Non-EMS)", 
    "3006007" : "Lay Person (Non-Family)", 
    "3006009" : "Other EMS Professional (not part of dispatched response)"
 
};

var eArrest334_07 = {
    "3007001" : "No", 
"3007003" : "Yes; Applied without Defibrillation", 
    "3007005" : "Yes; With Defibrillation"

};

var eArrest334_08 = {
    "3008001" : "Family Member", 
"3008003" : "First Responder (Fire; Law; EMS)", 
    "3008005" : "Healthcare Professional (Non-EMS)", 
    "3008007" : "Lay Person (Non-Family)", 
    "3008009" : "Other EMS Professional (not part of dispatched response)" 
  
};

var eArrest334_09 = {
    "3009001" : "Compressions-Continuous", 
"3009003" : "Compressions-External Band Type Device", 
    "3009005" : "Compressions-External Plunger Type Device", 
    "3009007" : "Compressions-External Thumper Type Device", 
    "3009009" : "Compressions-Intermittent with Ventilation", 
    "3009011" : "Compressions-Other Device (Not Listed)", 
    "3009013" : "Ventilation-Bag Valve Mask", 
    "3009015" : "Ventilation-Impedance Threshold Device", 
    "3009017" : "Ventilation-Mouth to Mouth", 
    "3009019" : "Ventilation-Pocket Mask" 
 
};

var eArrest334_10 = {
    "9923001" : "No", 
"9923003" : "Yes"
 
};

var eArrest334_11 = {
    "3011001" : "Asystole", 
"3011003" : "Bradycardia", 
"3011005" : "PEA", 
"3011007" : "Unknown AED Non-Shockable Rhythm", 
"3011009" : "Unknown AED Shockable Rhythm", 
"3011011" : "Ventricular Fibrillation", 
"3011013" : "Ventricular Tachycardia-Pulseless" 
   
};

var eArrest334_12 = {
    "3012001" : "No", 
"3012003" : "Yes; At Arrival at the ED", 
"3012005" : "Yes; Prior to Arrival at the ED", 
"3012007" : "Yes; Sustained for 20 consecutive minutes" 
  
};

var eArrest334_13 = {
    "3013001" : "CPC 1 Good Cerebral Performance", 
"3013003" : "CPC 2 Moderate Cerebral Disability", 
"3013005" : "CPC 3 Severe Cerebral Disability", 
"3013007" : "CPC 4 Coma or Vegetative State" 
   
};
var eArrest334_16 = {
    "3016001" : "DNR", 
"3016003" : "Medical Control Order", 
"3016005" : "Obvious Signs of Death", 
"3016007" : "Physically Unable to Perform", 
"3016009" : "Protocol/Policy Requirements Completed", 
"3016011" : "Return of Spontaneous Circulation (pulse or BP noted)"
   
};

var eArrest334_17 = {
    "9901001" : "Agonal/Idioventricular", 
"9901003" : "Asystole", 
"9901005" : "Artifact", 
"9901007" : "Atrial Fibrillation", 
"9901009" : "Atrial Flutter", 
"9901011" : "AV Block-1st Degree", 
"9901013" : "AV Block-2nd Degree-Type 1", 
"9901015" : "AV Block-2nd Degree-Type 2", 
"9901017" : "AV Block-3rd Degree", 
"9901019" : "Junctional", 
"9901021" : "Left Bundle Branch Block", 
"9901023" : "Non-STEMI Anterior Ischemia", 
"9901025" : "Non-STEMI Inferior Ischemia", 
"9901027" : "Non-STEMI Lateral Ischemia", 
"9901029" : "Non-STEMI Posterior Ischemia", 
"9901031" : "Other (Not Listed)", 
"9901033" : "Paced Rhythm", 
"9901035" : "PEA", 
"9901037" : "Premature Atrial Contractions", 
"9901039" : "Premature Ventricular Contractions", 
"9901041" : "Right Bundle Branch Block", 
"9901043" : "Sinus Arrhythmia", 
"9901045" : "Sinus Bradycardia", 
"9901047" : "Sinus Rhythm", 
"9901049" : "Sinus Tachycardia", 
"9901051" : "STEMI Anterior Ischemia", 
"9901053" : "STEMI Inferior Ischemia", 
"9901055" : "STEMI Lateral Ischemia", 
"9901057" : "STEMI Posterior Ischemia", 
"9901059" : "Supraventricular Tachycardia", 
"9901061" : "Torsades De Points", 
"9901063" : "Unknown AED Non-Shockable Rhythm", 
"9901065" : "Unknown AED Shockable Rhythm", 
"9901067" : "Ventricular Fibrillation", 
"9901069" : "Ventricular Tachycardia (With Pulse)", 
"9901071" : "Ventricular Tachycardia (Pulseless)" 
 
};

var eArrest334_18 = {
    "3018001" : "Expired in ED", 
"3018003" : "Expired in the Field", 
"3018005" : "Ongoing Resuscitation in ED"
  
};