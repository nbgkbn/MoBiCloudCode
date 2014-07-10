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

var eDisposition = new Object;
var DestinationGroup = [];
var HospitalTeamActivationGroup = [];
var HospitalTeamActivationGroupArray = [];
var AgencyYearGroupArray = [];
var E20 = new Object;
var _retArray = [];
var XMLString = ""
var OLAPArray = [];

var seteDisposition = function (businessObject)
{

    if (businessObject == undefined) {
        _retArray = setNotApplicableAll();
        console.log(_retArray)
        for (var i = 0; i < _retArray.length ; i++) {
            XMLString = XMLString + _retArray[i];

        }
        console.log(XMLString)
        return _retArray;
    }
    //console.log(businessObject);
    _retArray.push("<eDisposition>" + '\n');
    OLAPArray.push("<eDisposition>" + '\n');
    _retArray.push('\t' + "<eDisposition.DestinationGroup>" + '\n');
    OLAPArray.push('\t' + "<eDisposition.DestinationGroup>" + '\n');


    //eDisposition.01////
    _val = getValue(_elementList, "eDisposition.01");
    if (_val == null)
    {
        if (isRequiredStateElement("eDisposition.01") == true)
        {
            DestinationGroup["eDisposition.01"] = v3NOT_RECORDED;
            OLAPArray.push('\t\t\t' + "<TransferredToName>" + "NOT_RECORDED" + "</TransferredToName>" + '\n');
            _retArray.push('\t\t\t' + "<eDisposition.01" + NIL_V3NOT_RECORDED + '\n');
            v2Array.push({ section: "E20", element: "E20_01", val: v2NOT_RECORDED });
        }
        else
        {
            OLAPArray.push('\t\t\t' + "<TransferredToName>" + "NOT_REPORTING" + "</TransferredToName>" + '\n');
            DestinationGroup["eDisposition.01"] = v2NOT_REPORTING;
            _retArray.push('\t\t\t' + "<eDisposition.01" + NIL_V3NOT_REPORTING + '\n');
            v2Array.push({ section: "E20", element: "E20_01", val: v2NOT_REPORTING });
        }
    }
    else
    {
        v2Array.push({ section: "E20", element: "E20_01", val: _val });
        DestinationGroup["eDisposition.01"] = _val;
        OLAPArray.push('\t\t\t' + "<TransferredToName>" + _val + "</TransferredToName>" + '\n');        
        _retArray.push('\t\t\t' + "<eDisposition.01>" + _val + "</eDisposition.01>" + '\n');        

    };


    //eDisposition.02////
    _val = getValue(_elementList, "eDisposition.02");
    if (_val == null)
    {
        if (isRequiredStateElement("eDisposition.02") == true)
        {
            OLAPArray.push('\t\t\t' + "<TransferredToCode>" + "NOT_RECORDED" + "</TransferredToCode>" + '\n');
            DestinationGroup["eDisposition.02"] = v3NOT_RECORDED;
            _retArray.push('\t\t\t' + "<eDisposition.02" + NIL_V3NOT_RECORDED + '\n');
            v2Array.push({ section: "E20", element: "E20_02", val: v2NOT_RECORDED });
        }
        else
        {
            OLAPArray.push('\t\t\t' + "<TransferredToCode>" + "NOT_REPORTING" + "</TransferredToCode>" + '\n');
            DestinationGroup["eDisposition.02"] = v2NOT_REPORTING;
            _retArray.push('\t\t\t' + "<eDisposition.02" + NIL_V3NOT_REPORTING + '\n');
            v2Array.push({ section: "E20", element: "E20_02", val: v2NOT_REPORTING });
        }
    }
    else
    {
        DestinationGroup["eDisposition.02"] = _val;
        v2Array.push({ section: "E20", element: "E20_02", val: _val });
        E20.E20_02 = _val;
        _retArray.push('\t\t\t' + "<eDisposition.02>" + _val + "</eDisposition.02>" + '\n');
    };

    //eDisposition.03////
    _val = getValue(_elementList, "eDisposition.03");
    if (_val == null)
    {
        if (isRequiredStateElement("eDisposition.03") == true)
        {
            OLAPArray.push('\t\t\t' + "<DestinationStreetAddress>" + "NOT_RECORDED" + "</DestinationStreetAddress>" + '\n');
            DestinationGroup["eDisposition.03"] = v3NOT_RECORDED;
            _retArray.push('\t\t\t' + "<eDisposition.03" + NIL_V3NOT_RECORDED + '\n');
            v2Array.push({ section: "E20", element: "E20_03", val: v2NOT_RECORDED });
        }
        else
        {
            OLAPArray.push('\t\t\t' + "<DestinationStreetAddress>" + "NOT_REPORTING" + "</DestinationStreetAddress>" + '\n');
            DestinationGroup["eDisposition.03"] = v2NOT_REPORTING;
            _retArray.push('\t\t\t' + "<eDisposition.03" + NIL_V3NOT_REPORTING + '\n');
            v2Array.push({ section: "E20", element: "E20_02", val: v2NOT_REPORTING });
        }
    }
    else
    {
        OLAPArray.push('\t\t\t' + "<DestinationStreetAddress>" + _val + "</DestinationStreetAddress>" + '\n');
        DestinationGroup["eDisposition.03"] = _val;
        v2Array.push({ section: "E20", element: "E20_02", val: _val });
        _retArray.push('\t\t\t' + "<eDisposition.03>" + _val + "</eDisposition.03>" + '\n');
    };


    //eDisposition.04////
    _val = getValue(_elementList, "eDisposition.04");
    if (_val == null) 
    {
        OLAPArray.push('\t\t\t' + "<DestinationCity>" + "" + "</DestinationCity>" + '\n');
        DestinationGroup["eDisposition.03"] = "";
        _retArray.push('\t\t\t' + "<eDisposition.04>" + "" + "</eDisposition.04>" + '\n');
        v2Array.push({ section: "E20", element: "E20_04", val: v3NOT_RECORDED });
    }    
    else 
    {
        DestinationGroup["eDisposition.04"] = _val;
        v2Array.push({ section: "E20", element: "E20_04", val: _val });
        OLAPArray.push('\t\t\t' + "<DestinationCity>" + _val + "</DestinationCity>" + '\n');
        _retArray.push('\t\t\t' + "<eDisposition.04>" + _val + "</eDisposition.04>" + '\n');
    };

    //eDisposition.05////
    _val = getValue(_elementList, "eDisposition.05");
    if (_val == null) 
    {
        DestinationGroup["eDisposition.05"] = v3NOT_RECORDED;
        v2Array.push({ section: "E20", element: "E20_05", val: v2NOT_RECORDED });
        _retArray.push('\t\t\t' + "<eDisposition.05" + NIL_V3NOT_RECORDED + '\n');
        OLAPArray.push('\t\t\t' + "<DestinationState>" + null + "</DestinationState>" + '\n');
    }
    
    else 
    {
        DestinationGroup["eDisposition.05"] = _val;
        OLAPArray.push('\t\t\t' + "<DestinationState>" + _val + "</DestinationState>" + '\n');
        v2Array.push({ section: "E20", element: "E20_05", val: _val });
        _retArray.push('\t\t\t' + "<eDisposition.05>" + _val  + "</eDisposition.05>" + '\n');
    };

    //eDisposition.06////
    _val = getValue(_elementList, "eDisposition.06");
    if (_val == null) 
    {
        DestinationGroup["eDisposition.06"] = v3NOT_RECORDED;
        _retArray.push('\t\t\t' + "<eDisposition.06" + NIL_V3NOT_RECORDED + '\n');
        v2Array.push({ section: "E20", element: "E20_06", val: v2NOT_RECORDED });
        OLAPArray.push('\t\t\t' + "<DestinationCounty>" + "NOT_RECORDED" + "</DestinationCounty>" + '\n');
    }
    
    else 
    {
        OLAPArray.push('\t\t\t' + "<DestinationCounty>" + _val + "</DestinationCounty>" + '\n');
        DestinationGroup["eDisposition.06"] = _val;
        v2Array.push({ section: "E20", element: "E20_06", val: _val });
        _retArray.push('\t\t\t' + "<eDisposition.06>" + "COUNTY CODE"  + "</eDisposition.06>" + '\n');
    };


    //eDisposition.07////
    _val = getValue(_elementList, "eDisposition.07");
    if (_val == null) 
    {
        DestinationGroup["eDisposition.07"] = v3NOT_RECORDED;
        _retArray.push('\t\t\t' + "<eDisposition.07" + NIL_V3NOT_RECORDED + '\n');
        OLAPArray.push('\t\t\t' + "<DestinationZIPCode>" + "NOT_RECORDED" + "</DestinationZIPCode>" + '\n');
        v2Array.push({ section: "E20", element: "E20_07", val: v2NOT_RECORDED });
    }
    
    else 
    {
        OLAPArray.push('\t\t\t' + "<DestinationZIPCode>" + _val + "</DestinationZIPCode>" + '\n');
        DestinationGroup["eDisposition.07"] = _val;
        v2Array.push({ section: "E20", element: "E20_07", val: _val });
        console.log("Better be dFacility.10 ZIP")
        _retArray.push('\t\t\t' + "<eDisposition.07>" + _val  + "</eDisposition.07>" + '\n');
    };



    //eDisposition.08////
    _val = getValue(_elementList, "eDisposition.08");
    if (_val == null) 
    {
        OLAPArray.push('\t\t\t' + "<DestinationCountry>" + null + "</DestinationCountry>" + '\n');
        DestinationGroup["eDisposition.08"] = null;
        _retArray.push('\t\t\t' + "<eDisposition.08" + null+ '\n');
    }
    else 
    {
        OLAPArray.push('\t\t\t' + "<DestinationCountry>" + _val+ "</DestinationCountry>" + '\n');
        console.log("Better be dFacility.12 - Country")
        DestinationGroup["eDisposition.08"] = _val;
        _retArray.push('\t\t\t' + "<eDisposition.08>" + _val  + "</eDisposition.08>" + '\n');
    };

    _retArray.push('\t'+"</eDisposition.DestinationGroup>" + '\n');
    _retArray.push("</eDisposition>" + '\n');
    ////////////////////////////////////
    ////////////////////////////////////

    //eDisposition.09////
    _val = getValue(_elementList, "eDisposition.09");
    if (_val == null) 
    {
        DestinationGroup["eDisposition.09"] = null;
        _retArray.push('\t\t\t' + "<eDisposition.09" + null + '\n');
        OLAPArray.push('\t\t\t' + "<DestinationGPSLocation>" + "" + "</DestinationGPSLocation>" + '\n');
        v2Array.push({ section: "E20", element: "E20_08", val: null });
    }
    else 
    {
        DestinationGroup["eDisposition.09"] = _val;
        v2Array.push({ section: "E20", element: "E20_08", val: _val });
        _retArray.push('\t\t\t' + "<eDisposition.09>" + _val + "</eDisposition.09>" + '\n');
        OLAPArray.push('\t\t\t' + "<DestinationGPSLocation>" + _val + "</DestinationGPSLocation>" + '\n');
    };

    //eDisposition.10////
    _val = getValue(_elementList, "eDisposition.10");
    if (_val == null) 
    {
        DestinationGroup["eDisposition.10"] = null;
        _retArray.push('\t\t\t' + "<eDisposition.10" + null + '\n');
        OLAPArray.push('\t\t\t' + "<DispositionLocationUSNationalGridCoordinates>" + "" + "</DispositionLocationUSNationalGridCoordinates>" + '\n');
    }
    else 
    {
        console.log("Better be dFacility.14 - Country")
        DestinationGroup["eDisposition.10"] = _val;
        _retArray.push('\t\t\t' + "<eDisposition.10>" + _val + "</eDisposition.10>" + '\n');
        OLAPArray.push('\t\t\t' + "<DispositionLocationUSNationalGridCoordinates>" + _val + "</DispositionLocationUSNationalGridCoordinates>" + '\n');
    };


    //eDisposition.11////
    _val = getValue(_elementList, "eDisposition.11");
    if (_val == null) {
        if (isRequiredStateElement("eDisposition.11") == true) {
            DestinationGroup["eDisposition.11"] = v3NOT_RECORDED;
            _retArray.push('\t\t\t' + "<eDisposition.11" + NIL_V3NOT_RECORDED + '\n');
            OLAPArray.push('\t\t\t' + "<NumberofPatientsTransportedinthisEMSUnit>" + "NOT_RECORDED" + "</NumberofPatientsTransportedinthisEMSUnit>" + '\n');
        }
        else
        {
            OLAPArray.push('\t\t\t' + "<NumberofPatientsTransportedinthisEMSUnit>" + "NOT_REPORTING" + "</NumberofPatientsTransportedinthisEMSUnit>" + '\n');
            DestinationGroup["eDisposition.11"] = v2NOT_REPORTING;
            _retArray.push('\t\t\t' + "<eDisposition.11" + NIL_V3NOT_REPORTING + '\n');
        }
    }
    else
    {
        OLAPArray.push('\t\t\t' + "<NumberofPatientsTransportedinthisEMSUnit>" + _val + "</NumberofPatientsTransportedinthisEMSUnit>" + '\n');
        DestinationGroup["eDisposition.11"] = _val;
        _retArray.push('\t\t\t' + "<eDisposition.11>" + _val + "</eDisposition.11>" + '\n');
    };

    //eDisposition.12////
    _val = getValue(_elementList, "eDisposition.12");
    if (_val == null) 
    {
        ErrorList.push("eDisposition.12 Mandatory Value")
    }
    else 
    {
        OLAPArray.push('\t\t\t' + "<IncidentPatientDisposition>" + setCodeText("eDisposition.12", _val) + "</IncidentPatientDisposition>" + '\n');
        DestinationGroup["eDisposition.12"] = _val;
        _retArray.push('\t\t\t' + "<eDisposition.12" + _val + "</eDisposition.12>" + '\n');
        v2Array.push({ section: "E20", element: "E20_10", val: setV2("eDisposition.12", _val) });
    };

    //eDisposition.13////
    _val = getValue(businessObject.elements, "eDisposition.13");
    if (_val == null)
    {
        DestinationGroup["eDisposition.13"] = "";
        _retArray.push('\t\t\t' + "<eDisposition.13" + null + '\n');
        OLAPArray.push('\t\t\t' + "<HowPatientWasMovedtoAmbulance>" + null + "</HowPatientWasMovedtoAmbulance>" + '\n');
        v2Array.push({ section: "E20", element: "E20_11", val: null });
    }
    else
    {
        var arr1 = [];
        var arr2 = [];
        arr1 = _val;
        arr2 = setV2("eDisposition.13", _val);
        for (var i = 0; i < _val.length; i++) {
            _retArray.push('\t' + "<eDisposition.13>" + _val[i] + "</eDisposition.13>" + '\n');
            OLAPArray.push('\t\t\t' + "<HowPatientWasMovedtoAmbulance>" + setCodeText("eDisposition.13", _val) + "</HowPatientWasMovedtoAmbulance>" + '\n');
        }
        DestinationGroup["eDisposition.13"] = arr1.slice(0);
        v2Array.push({ section: "E20", element: "E20_11", val: arr2.slice(0) });
    };

    //eDisposition.14////
    _val = getValue(businessObject.elements, "eDisposition.14");
    if (_val == null) 
    {
        DestinationGroup["eDisposition.14"] = "";
        _retArray.push('\t\t\t' + "<eDisposition.14" + null + '\n');
        OLAPArray.push('\t\t\t' + "<PositionofPatientDuringTransport>" + null + "</PositionofPatientDuringTransport>" + '\n');
        v2Array.push({ section: "E20", element: "E20_12", val: null });
    }
    else
    {
        var arr1 = [];
        var arr2 = [];
        arr1 = _val;
        arr2 = setV2("eDisposition.14", _val);
        for (var i = 0; i < _val.length; i++) {
            _retArray.push('\t\t\t' + "<eDisposition.14>" + _val[i] + "</eDisposition.14>" + '\n');
            OLAPArray.push('\t\t\t' + "<PositionofPatientDuringTransport>" + setCodeText("eDisposition.14", _val) + "</PositionofPatientDuringTransport>" + '\n');
        }
        DestinationGroup["eDisposition.14"] = arr1.slice(0);
        v2Array.push({ section: "E20", element: "E20_12", val: arr2.slice(0) });
    };

    //eDisposition.15////
    _val = getValue(businessObject.elements, "eDisposition.15");
    if (_val == null) 
    {
        DestinationGroup["eDisposition.15"] = "";
        _retArray.push('\t\t\t' + "<eDisposition.15" + null + '\n');
        OLAPArray.push('\t\t\t' + "<HowPatientWasTransportedFromAmbulance>" + null + "</HowPatientWasTransportedFromAmbulance>" + '\n');
        v2Array.push({ section: "E20", element: "E20_13", val: null });
    }
    else
    {
        _retArray.push('\t'  + "<eDisposition.15>" + _val + "</eDisposition.15>" + '\n');
        DestinationGroup["eDisposition.15"] = _val;
        v2Array.push({ section: "E20", element: "E20_13", val: setV2("eDisposition.15", _val) });
        OLAPArray.push('\t\t\t' + "<HowPatientWasTransportedFromAmbulance>" + setCodeText("eDisposition.15", _val) + "</HowPatientWasTransportedFromAmbulance>" + '\n');
    };

    //eDisposition.16////
    _val = getValue(_elementList, "eDisposition.16");
    if (_val == null) 
    {
        OLAPArray.push('\t\t\t' + "<EMSTransportMethod>" + "NOT RECORDED" + "</EMSTransportMethod>" + '\n');
        DestinationGroup["eDisposition.16"] = v3NOT_RECORDED;
        _retArray.push('\t\t\t' + "<eDisposition.16" + NIL_V3NOT_RECORDED + '\n');
    }
    else 
    {

        DestinationGroup["eDisposition.16"] = _val;
        OLAPArray.push('\t\t\t' + "<EMSTransportMethod>" + setCodeText("eDisposition.16", _val) + "</EMSTransportMethod>" + '\n');
        _retArray.push('\t\t\t' + "<eDisposition.16>" + _val  + "</eDisposition.16>" + '\n');
    };

    //eDisposition.17////
    _val = getValue(_elementList, "eDisposition.17");
    if (_val == null) 
    {
        OLAPArray.push('\t\t\t' + "<TransportModefromScene>" + "NOT RECORDED" + "</TransportModefromScene>" + '\n');
        DestinationGroup["eDisposition.17"] = v3NOT_RECORDED;
        _retArray.push('\t\t\t' + "<eDisposition.17" + NIL_V3NOT_RECORDED + '\n');
        v2Array.push({ section: "E20", element: "E20_14", val: v2NOT_RECORDED });
    }
    else 
    {
        v2Array.push({ section: "E20", element: "E20_14", val: setV2("eDisposition.17", _val) });
        OLAPArray.push('\t\t\t' + "<TransportModefromScene>" + setCodeText("eDisposition.17", _val) + "</TransportModefromScene>" + '\n');
        DestinationGroup["eDisposition.17"] = _val;
        _retArray.push('\t\t\t' + "<eDisposition.17>" + _val  + "</eDisposition.17>" + '\n');
    };

    //eDisposition.18////
    _val = getValue(businessObject.elements, "eDisposition.18");
    if (_val == null) 
    {
        OLAPArray.push('\t\t\t' + "<AdditionalTransportModeDescriptors>" + "NOT RECORDED" + "</AdditionalTransportModeDescriptors>" + '\n');
        DestinationGroup["eDisposition.17"] = v3NOT_RECORDED;
        _retArray.push('\t\t\t' + "<eDisposition.17" + NIL_V3NOT_RECORDED + '\n');

    }
    else
    {
        var arr1 = [];
        arr1 = _val;
        for (var i = 0; i < _val.length; i++)
        {
            _retArray.push('\t' + "<eDisposition.18>" + _val[i] + "</eDisposition.18>" + '\n');
            OLAPArray.push('\t\t\t' + "<AdditionalTransportModeDescriptors>" + setCodeText("eDisposition.18", _val[i]) + "</AdditionalTransportModeDescriptors>" + '\n');
        }
        DestinationGroup["eDisposition.18"] = arr1.slice(0);
    };

    //eDisposition.19////
    _val = getValue(_elementList, "eDisposition.19");
    if (_val == null) 
    {
        OLAPArray.push('\t\t\t' + "<ConditionofPatientatDestination>" + "NOT RECORDED" + "</ConditionofPatientatDestination>" + '\n');
        v2Array.push({ section: "E20", element: "E20_15", val: v2NOT_RECORDED });
        DestinationGroup["eDisposition.19"] = v3NOT_RECORDED;
        _retArray.push('\t\t\t' + "<eDisposition.19" + NIL_V3NOT_RECORDED + '\n');        
    }
    else 
    {
        OLAPArray.push('\t\t\t' + "<ConditionofPatientatDestination>" + setCodeText("eDisposition.19", _val) + "</ConditionofPatientatDestination>" + '\n');
        v2Array.push({ section: "E20", element: "E20_15", val: setV2("eDisposition.19", _val)});
        DestinationGroup["eDisposition.19"] = _val;
        _retArray.push('\t\t\t' + "<eDisposition.17>" + _val  + "</eDisposition.17>" + '\n');
    };

    //eDisposition.20////
    _val = getValue(businessObject.elements, "eDisposition.20");
    if (_val == null) 
    {
        OLAPArray.push('\t\t\t' + "<ReasonforChoosingDestination>" + "NOT RECORDED" + "</ReasonforChoosingDestination>" + '\n');
        DestinationGroup["eDisposition.20"] = v3NOT_RECORDED;
        _retArray.push('\t\t\t' + "<eDisposition.20" + NIL_V3NOT_RECORDED + '\n');
        v2Array.push({ section: "E20", element: "E20_16", val: v2NOT_RECORDED });
    }
    else
    {
        var arr1 = [];
        var arr2 = [];
        arr1 = _val;
        arr2 = setV2("eDisposition.20", _val);
        for (var i = 0; i < _val.length; i++) {
            _retArray.push('\t' + "<eDisposition.20>" + _val[i] + "</eDisposition.20>" + '\n');
            OLAPArray.push('\t\t\t' + "<ReasonforChoosingDestination>" + setCodeText("eDisposition.20", _val[i]) + "</ReasonforChoosingDestination>" + '\n');
        }
        DestinationGroup["eDisposition.20"] = arr1.slice(0);
        v2Array.push({ section: "E20", element: "E20_16", val: arr2.slice(0) });
    };

    
    //eDisposition.21////
    _val = getValue(_elementList, "eDisposition.21");
    if (_val == null) 
    {
        OLAPArray.push('\t\t\t' + "<TypeofDestination>" + "NOT RECORDED" + "</TypeofDestination>" + '\n');
        DestinationGroup["eDisposition.21"] = v3NOT_RECORDED;
        _retArray.push('\t\t\t' + "<eDisposition.21" + NIL_V3NOT_RECORDED + '\n');
        v2Array.push({ section: "E20", element: "E20_17", val: v2NOT_RECORDED });
    }
    else 
    {
        OLAPArray.push('\t\t\t' + "<TypeofDestination>" + setCodeText("eDisposition.21", _val) + "</TypeofDestination>" + '\n');
        DestinationGroup["eDisposition.21"] = _val;
        _retArray.push('\t\t\t' + "<eDisposition.21>" + _val + "</eDisposition.21>" + '\n');
        v2Array.push({ section: "E20", element: "E20_17", val: setV2("eDisposition.21", _val)});
    };

    //eDisposition.22////
    _val = getValue(_elementList, "eDisposition.22");
    if (_val == null) 
    {
        OLAPArray.push('\t\t\t' + "<HospitalInPatientDestination>" + "NOT RECORDED" + "</HospitalInPatientDestination>" + '\n');
        DestinationGroup["eDisposition.22"] = v3NOT_RECORDED;
        _retArray.push('\t\t\t' + "<eDisposition.22" + NIL_V3NOT_RECORDED + '\n');
    }
    else 
    {
        DestinationGroup["eDisposition.22"] = _val;
        OLAPArray.push('\t\t\t' + "<HospitalInPatientDestination>" + setCodeText("eDisposition.22", _val) + "</HospitalInPatientDestination>" + '\n');
        _retArray.push('\t\t\t' + "<eDisposition.22>" + _val  + "</eDisposition.22>" + '\n');
    };

    //eDisposition.23////
    _val = getValue(_elementList, "eDisposition.23");
    if (_val == null) 
    {
        OLAPArray.push('\t\t\t' + "<HospitalDesignation>" + "NOT RECORDED" + "</HospitalDesignation>" + '\n');
        DestinationGroup["eDisposition.22"] = v3NOT_RECORDED;
        _retArray.push('\t\t\t' + "<eDisposition.22" + NIL_V3NOT_RECORDED + '\n');
    }
    else 
    {
        OLAPArray.push('\t\t\t' + "<HospitalDesignation>" + setCodeText("eDisposition.23", _val) + "</HospitalDesignation>" + '\n');
        DestinationGroup["eDisposition.23"] = _val;
        _retArray.push('\t\t\t' + "<eDisposition.23>" + _val  + "</eDisposition.23>" + '\n');
    };


    _sectionIndex = getSectionIndex(businessObject, "eDisposition.HospitalTeamActivationGroup");
    for (var x = 0; x < _sectionIndex.length; x++) {
        {
            _retArray.push('\t\t\t' + "<eDisposition.HospitalTeamActivationGroup>" + '\n');
            OLAPArray.push('\t\t\t' + "<eDisposition.HospitalTeamActivationGroup>" + '\n');
        
            //eDisposition.24////
            _val = getValue(businessObject.sections[xx].attributes.sections[_sectionIndexi].attributes.elements, "eDisposition.24");
            if (_val == null) 
            {
                OLAPArray.push('\t\t\t\t' + "<DestinationTeamPreArrivalAlertorActivation>" + "NOT RECORDED" + "</DestinationTeamPreArrivalAlertorActivation>" + '\n');
                DestinationGroup["eDisposition.24"] = v3NOT_RECORDED;
                _retArray.push('\t\t\t\t' + "<eDisposition.24" + NIL_V3NOT_RECORDED + '\n');
            }
            else 
            {
                OLAPArray.push('\t\t\t\t' + "<DestinationTeamPreArrivalAlertorActivation>" + setCodeText("eDisposition.24", _val) + "</DestinationTeamPreArrivalAlertorActivation>" + '\n');
                HospitalTeamActivationGroup["eDisposition.24"] = _val;
                _retArray.push('\t\t\t\t' + "<eDisposition.24>" + _val  + "</eDisposition.24>" + '\n');
            };

            //eDisposition.25////
            _val = getValue(_elementList, "eDisposition.25");
            if (_val == null) 
            {
                OLAPArray.push('\t\t\t\t' + "<DateTimeofDestinationPrearrivalAlertorActivation>" + "NOT RECORDED" + "</DateTimeofDestinationPrearrivalAlertorActivation>" + '\n');
                DestinationGroup["eDisposition.25"] = v3NOT_RECORDED;
                _retArray.push('\t\t\t\t' + "<eDisposition.25" + NIL_V3NOT_RECORDED + '\n');
            }
            else 
            {
                OLAPArray.push('\t\t\t\t' + "<DateTimeofDestinationPrearrivalAlertorActivation>" + setCodeText("eDisposition.25", _val) + "</DateTimeofDestinationPrearrivalAlertorActivation>" + '\n');
                HospitalTeamActivationGroup["eDisposition.25"] = _val;
                _retArray.push('\t\t\t\t\t' + "<eDisposition.25>" + _val  + "</eDisposition.25>" + '\n');
            };
            _retArray.push('\t\t\t' + "/<eDisposition.HospitalTeamActivationGroup>" + '\n');
            OLAPArray.push('\t\t\t' + "/<eDisposition.HospitalTeamActivationGroup>" + '\n');
        };
        //eDisposition.26////
    _val = getValue(_elementList, "eDisposition.26");
    if (_val == null) 
    {
        OLAPArray.push('\t\t\t\t' + "<DispositionInstructionsProvided>" + null + "</DispositionInstructionsProvided>" + '\n');
        DestinationGroup["eDisposition.25"] = null;
        _retArray.push('\t\t\t\t\t' + "<eDisposition.25>" + null + "</eDisposition.25>" + '\n');
    }
    else 
    {
        OLAPArray.push('\t\t\t\t' + "<DispositionInstructionsProvided>" + setCodeText("eDisposition.26", _val) + "</DispositionInstructionsProvided>" + '\n');
        DestinationGroup["eDisposition.26"] = _val;
        _retArray.push('\t\t\t' + "<eDisposition.26>" + _val  + "</eDisposition.26>" + '\n');
    };
};


var setNotApplicableAll = function (businessObject)
{
    v2Array.push({ section: "E20", element: "E20_01", val: v2NOT_APPLICABLE });
    v2Array.push({ section: "E20", element: "E20_02", val: v2NOT_APPLICABLE });
    v2Array.push({ section: "E20", element: "E20_03", val: v2NOT_APPLICABLE });
    v2Array.push({ section: "E20", element: "E20_04", val: v2NOT_APPLICABLE });
    v2Array.push({ section: "E20", element: "E20_05", val: v2NOT_APPLICABLE });
    v2Array.push({ section: "E20", element: "E20_06", val: v2NOT_APPLICABLE });
    v2Array.push({ section: "E20", element: "E20_07", val: v2NOT_APPLICABLE });
    v2Array.push({ section: "E20", element: "E20_09", val: v2NOT_APPLICABLE });
    v2Array.push({ section: "E20", element: "E20_11", val: v2NOT_APPLICABLE });
    v2Array.push({ section: "E20", element: "E20_12", val: v2NOT_APPLICABLE });
    v2Array.push({ section: "E20", element: "E20_13", val: v2NOT_APPLICABLE });
    v2Array.push({ section: "E20", element: "E20_14", val: v2NOT_APPLICABLE });
    v2Array.push({ section: "E20", element: "E20_15", val: v2NOT_APPLICABLE });
    v2Array.push({ section: "E20", element: "E20_16", val: v2NOT_APPLICABLE });
    v2Array.push({ section: "E20", element: "E20_17", val: v2NOT_APPLICABLE });

    _retArray.push("<eDisposition>" + '\n');
    _retArray.push('\t' + "<eDisposition.DestinationGroup>" + '\n');

    if (isRequiredStateElement("eDisposition.01") == true) {
        _retArray.push('\t\t' + "<eDisposition.01>" + NIL_V3NOT_APPLICABLE + '\n');
    }

    if (isRequiredStateElement("eDisposition.02") == true) {
        _retArray.push('\t\t' + "<eDisposition.02>" + NIL_V3NOT_APPLICABLE + '\n');
    }

    if (isRequiredStateElement("eDisposition.03") == true) {
        _retArray.push('\t\t' + "<eDisposition.03>" + NIL_V3NOT_APPLICABLE + '\n');
    }
    if (isRequiredStateElement("eDisposition.04") == true) {
        _retArray.push('\t\t' + "<eDisposition.04>" + NIL_V3NOT_APPLICABLE + '\n');
    }

    _retArray.push('\t' + "<eDisposition.05>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<eDisposition.06>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<eDisposition.07>" + NIL_V3NOT_APPLICABLE + '\n');

    if (isRequiredStateElement("eDisposition.11") == true) {
        _retArray.push('\t\t' + "<eDisposition.11>" + NIL_V3NOT_APPLICABLE + '\n');
    }

    _retArray.push('\t' + "<eDisposition.12>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<eDisposition.16>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<eDisposition.17>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<eDisposition.18>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<eDisposition.19>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<eDisposition.20>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<eDisposition.21>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<eDisposition.22>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<eDisposition.23>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<eDisposition.24>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<eDisposition.25>" + NIL_V3NOT_APPLICABLE + '\n');


};

function setD2(NEMSISElementNumber, valueArray) {
    //    console.log(NEMSISElementNumber);
    var _retArray = [];
    //    console.log(valueArray);
    switch (NEMSISElementNumber) {
        case "eDisposition.12":

            if (eDisposition12[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eDisposition12[valueArray[0]]);
            }
            break;
        case "eDisposition.13":
            for (i = 0; i < valueArray.length; i++) {
                if (eDisposition13[valueArray[i]] == undefined) {
                    _retArray.push(valueArray[i] + "UNDEFINED");
                }
                else {
                    _retArray.push(eDisposition13[valueArray[i]]);
                }
            }
            break;
        case "eDisposition.14":

            if (eDisposition14[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eDisposition14[valueArray[0]]);
            }
            break;

        case "eDisposition.15":

            if (eDisposition15[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eDisposition15[valueArray[0]]);
            }
            break;
                
        case "eDisposition.17":

            if (eDisposition17[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eDisposition17[valueArray[0]]);
            }
            break;

                
        case "eDisposition.19":

            if (eDisposition19[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eDisposition19[valueArray[0]]);
            }
            break;

        case "eDisposition.20":

            if (eDisposition20[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eDisposition20[valueArray[0]]);
            }
            break;

                
        case "eDisposition.21":

            if (eDisposition21[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eDisposition21[valueArray[0]]);
            }
            break;
        default:
            _retArray.push(NEMSISElementNumber = " version 2 not found");
    }

    return _retArray;

}
var eDisposition12 = {
    "4212001":"4845",
    "4212003":"4850",
    "4212005":"4845",
    "4212007":"4815",
    "4212009":"4815",
    "4212011":"4825",
    "4212013":"4820",
    "4212015":"4820",
    "4212017":"4820",
    "4212019":"4820",
    "4212021":"4830",
    "4212023":"4835",
    "4212025":"4835",
    "4212027":"4840",
    "4212029":"4840",
    "4212031":"4845",
    "4212033":"4850",
    "4212035":"4855",
    "4212037":"4860",
    "4212039":"4830",
    "4212041":"4830",
    "4212043":"4830"
};

var eDisposition13 = {
    "9909001":"4865",
    "9909003":"4885",
    "9909005":"4885",
    "9909007":"4870",
    "9909009":"4885",
    "9909011":"4875",
    "9909013":"4880",
    "9909015":"4885"
};

var eDisposition14 = {
    "4214001":"4890",
    "4214003":"4895",
    "4214005":"4900",
    "4214007":"4900",
    "4214009":"4925",
    "4214011":"4905",
    "4214013":"4910",
    "4214015":"4915",
    "4214017":"4920",
    "4214019":"4925"
};

var eDisposition15 = {
    "9909001":"4930",
    "9909003":"4950",
    "9909005":"4950",
    "9909007":"4935",
    "9909009":"4950",
    "9909011":"4940",
    "9909013":"4945",
    "9909015":"4950"

};

var eDisposition17 = {
    "4217001":"4965",
    "4217003":"4955",
    "4217005":"4970",
    "4217007":"4960"
};

var eDisposition19 = {
    "9916001":"4975",
    "9916003":"4980",
    "9916005":"4985"
}

var eDisposition20 = {
    "4220001":"4990",
    "4220003":"4995",
    "4220005":"5000",
    "4220007":"5005",
    "4220009":"5010",
    "4220011":"5015",
    "4220013":"5020",
    "4220015":"5025",
    "4220017":"5030",
    "4220019":"5035",
    "4220021":"5040"
};

var eDisposition21 = {
    "4221001":"7270",
    "4221003":"7280",
    "4221005":"7290",
    "4221007":"7290",
    "4221009":"7300",
    "4221011":"7310",
    "4221013":"7330",
    "4221015":"7340",
    "4221017":"7350",
    "4221019":"7360"
}
