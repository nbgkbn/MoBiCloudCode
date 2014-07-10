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
PN_FINDING_NOT_PRESENT_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801005\"/>";


var seteScene = function (businessObject)
{
    if (typeof businessObject == undefined)
    {
        SetNotApplicable();
        return _retArray;
    }
    var _retArray = [];
    var OLAPArray = [];

    _retArray.push("<eScene>" + '\n');
    OLAPArray.push("<eScene>" + '\n');

    console.log(businessObject);

    //////////////////////eScene.01
    _val = getValue(businessObject.elements, "eScene.01");
    if (_val == null)
    {
        OLAPArray.push('\t\t' + "<FirstEMSUnitonScene>" + "NOT RECORDED" + "</FirstEMSUnitonScene>" + '\n');
        _retArray.push('\t\t' + "<eScene.01" + NIL_V3NOT_RECORDED + '\n');
        eScene["eScene.01"] = v3NOT_RECORDED;
    }
    else
    {
        OLAPArray.push('\t\t' + "<FirstEMSUnitonScene>" + setCodeText("eScene.01", _val) + "</FirstEMSUnitonScene>" + '\n');
        eScene["eScene.01"] = _val;
        _retArray.push('\t' + "<eScene.01>" + _val + "</eScene.01>" + '\n')
    };

    ///////////////////////////////////    
    _sectionIndex = getSectionIndex(businessObject.sections.attributes, "eScene.ResponderGroup");
    for (var i = 0; i < _sectionIndex.length; i++)
    {

        var elementList = businessObject.sections[i].attributes.elements;

        _retArray.push('\t' + "<eScene.ResponderGroup>" + '\n');
        OLAPArray.push('\t' + "<eScene.ResponderGroup>" + '\n');

        //////////////////////eScene.02
        _val = getValue(elementList, "eScene.02");
        if (_val == null)
        {
            OLAPArray.push('\t\t' + "<OtherEMSorPublicSafetyAgenciesatScene>" + null + "</OtherEMSorPublicSafetyAgenciesatScene>" + '\n');
            _retArray.push('\t\t' + "<eScene.02>" + null + "</eScene.02>" + '\n')
            ResponderGroup["eScene.02"] = null;
            v2Array.push({ section: "E08", element: "E08_01", val: v2NOT_KNOWN });
        }
        else
        {
            OLAPArray.push('\t\t' + "<OtherEMSorPublicSafetyAgenciesatScene>" + _val + "</OtherEMSorPublicSafetyAgenciesatScene>" + '\n');
            ResponderGroupArray.push('\t\t' + "<eScene.02>" + _val + "</eScene.02>" + '\n')
            v2Array.push({ section: "E08", element: "E08_01", val: _val });
            ResponderGroup["eScene.02"] = _val;
        };

        //////////////////////eScene.03
        _val = getValue(elementList, "eScene.03");
        if (_val == null)
        {
            OLAPArray.push('\t\t' + "<OtherEMSorPublicSafetyAgencyIDNumber>" + null + "</OtherEMSorPublicSafetyAgencyIDNumber>" + '\n');
            _retArray.push('\t\t' + "<eScene.03>" + null + "</eScene.03>" + '\n')
            ResponderGroup["eScene.02"] = null;
        }
        else
        {
            OLAPArray.push('\t\t' + "<OtherEMSorPublicSafetyAgencyIDNumber>" + _val + "</OtherEMSorPublicSafetyAgencyIDNumber>" + '\n');
            ResponderGroup["eScene.02"] = _val;
            _retArray.push('\t\t' + "<eScene.03>" + _val + "</eScene.03>" + '\n')
        };

        //////////////////////eScene.04
        _val = getValue(elementList, "eScene.04");
        if (_val == null)
        {
            OLAPArray.push('\t\t' + "<TypeofOtherServiceatScene>" + null + "</TypeofOtherServiceatScene>" + '\n');
            _retArray.push('\t\t' + "<eScene.04>" + null + "</eScene.04>" + '\n')
            ResponderGroup["eScene.04"] = null;
            v2Array.push({ section: "E08", element: "E08_02", val: v2NOT_KNOWN });
        }
        else
        {
            OLAPArray.push('\t\t' + "<TypeofOtherServiceatScene>" + setCodeText("eScene.04", _val) + "</TypeofOtherServiceatScene>" + '\n');
            _retArray.push('\t\t' + "<eScene.04>" + _val + "</eScene.04>" + '\n')
            ResponderGroup["eScene.04"] = _val;
            v2Array.push({ section: "E08", element: "E08_02", val: setV2("eScene.04", _val) });
        };

        _retArray.push('\t' + "</eScene.ResponderGroup>" + '\n');
        OLAPArray.push('\t' + "</eScene.ResponderGroup>" + '\n');
    };
    ///////////////////////////////
    //////////////////////eScene.05
    _val = getValue(businessObject.elements, "eScene.05");
    if (_val == null)
    {
        OLAPArray.push('\t' + "<DateTimeInitialResponderArrivedonScene>" + null + "</DateTimeInitialResponderArrivedonScene>" + '\n');
        _retArray.push('\t' + "<eScene.05>" + null + "</eScene.05>" + '\n')
        eScene["eScene.04"] = null;
        v2Array.push({ section: "E08", element: "E08_04", val: "" });

    }
    else
    {
        OLAPArray.push('\t' + "<DateTimeInitialResponderArrivedonScene>" + _val + "</DateTimeInitialResponderArrivedonScene>" + '\n');
        eScene["eScene.04"] = _val;
        v2Array.push({ section: "E08", element: "E08_04", val: _val });
        _retArray.push('\t' + "<eScene.05>" + _val + "</eScene.05>" + '\n')        
    };

    //////////////////////eScene.06
    if (getValue(businessObject.elements, "eScene.06") == null)
    {
        ErrorList.push("eScene.06 required");
        OLAPArray.push('\t' + "<NumberofPatientsatScene>" + "NOT RECORDED" + "</NumberofPatientsatScene>" + '\n');
        v2Array.push({ section: "E08", element: "E08_05", val: v2NOT_RECORDED });
        _retArray.push('\t' + "<eScene.06" + NIL_V3NOT_RECORDED + '\n');
        eScene["eScene.06"] = V3NOT_RECORDED;
    }
    else
    {
        OLAPArray.push('\t' + "<NumberofPatientsatScene>" + setCodeText("eScene.06", _val) + "</NumberofPatientsatScene>" + '\n');
        _retArray.push('\t' + "<eScene.06>" + _val + "</eScene.06>" + '\n');
        v2Array.push({ section: "E08", element: "E08_05", val: setV2("eScene.06", _val) });
        eScene["eScene.06"] = _val;
    };


    //////////////////////eScene.07
    _val = getValue(businessObject.elements, "eScene.07");
    if (_val == null)
    {
        ErrorList.push("eScene.07 required");
        OLAPArray.push('\t' + "<MassCasualtyIncident>" + "NOT RECORDED" + "</MassCasualtyIncident>" + '\n');
        v2Array.push({ section: "E08", element: "E08_06", val: v2NOT_RECORDED });
        _retArray.push('\t' + "<eScene.06" + NIL_V3NOT_RECORDED + '\n');
        eScene["eScene.07"] = V3NOT_RECORDED;
    }
    else
    {
        OLAPArray.push('\t' + "<MassCasualtyIncident>" + setCodeText("eScene.07", _val) + "</MassCasualtyIncident>" + '\n');
        v2Array.push({ section: "E08", element: "E08_06", val: setV2("eScene.07", _val) });
        _retArray.push('\t' + "<eScene.07>" + _val + "</eScene.07>" + '\n')
        eScene["eScene.07"] = _val;      
    };

    //////////////////////eScene.08
    _val = getValue(businessObject.elements, "eScene.08");
    if (_val == null)
    {       
        OLAPArray.push('\t' + "<TriageClassificationforMCIPatient>" + "NOT RECORDED" + "</TriageClassificationforMCIPatient>" + '\n');
        eScene["eScene.08"] = V3NOT_RECORDED;
        ErrorList.push("eScene.08 required");
        _retArray.push('\t' + "<eScene.08" + NIL_V3NOT_RECORDED) + '\n';
    }
    else
    {
        OLAPArray.push('\t' + "<TriageClassificationforMCIPatient>" + setCodeText("eScene.08", _val) + "</TriageClassificationforMCIPatient>" + '\n');
        eScene["eScene.08"] = _val;
        _retArray.push('\t' + "<eScene.08>" + _val + "</eScene.08>" + '\n')
    };

    //////////////////////eScene.09
    _val = getValue(businessObject.elements, "eScene.09");
    if (_val == null)
    {
        OLAPArray.push('\t' + "<IncidentLocationType>" + "NOT RECORDED" + "</IncidentLocationType>" + '\n');
        v2Array.push({ section: "E08", element: "E08_07", val: v2NOT_RECORDED });
        eScene["eScene.09"] = V3NOT_RECORDED;
        _retArray.push('\t' + "<eScene.09" + NIL_V3NOT_RECORDED + '\n');
    }
    else
    {        
        OLAPArray.push('\t' + "<IncidentLocationType>" + setCodeText("eScene.09", _val) + "</IncidentLocationType>" + '\n');
        _retArray.push('\t' + "<eScene.09>" + _val + "</eScene.09>" + '\n')
        v2Array.push({ section: "E08", element: "E08_07", val: setV2("eScene.09", _val) });
        eScene["eScene.09"] = V3NOT_RECORDED;        
    };

    //////////////////////eScene.10
    _val = getValue(businessObject.elements, "eScene.10");
    if (_val == null)
    {
        if (isRequiredStateElement("eScene.10") == true)
        {
            OLAPArray.push('\t' + "<IncidentFacilityCode>" + "NOT RECORDED" + "</IncidentFacilityCode>" + '\n');
            v2Array.push({ section: "E08", element: "E08_08", val: v2NOT_RECORDED });
            eScene["eScene.10"] = V3NOT_RECORDED;
            _retArray.push('\t' + "<eScene.10" + NIL_V3NOT_RECORDED + '\n');
        }
        else
        {
            OLAPArray.push('\t' + "<IncidentFacilityCode>" + "NOT RECORDED" + "</IncidentFacilityCode>" + '\n');
            v2Array.push({ section: "E08", element: "E08_08", val: v2NOT_REPORTING });
            eScene["eScene.10"] = V3NOT_REPORTING;
            _retArray.push('\t' + "<eScene.10" + NIL_V3NOT_REPORTING + '\n');
        }
    }
    else
    {
        OLAPArray.push('\t' + "<IncidentFacilityCode>" + _val + "</IncidentFacilityCode>" + '\n');
        v2Array.push({ section: "E08", element: "E08_08", val: _val });
        eScene["eScene.10"] = V3NOT_RECORDED;
        _retArray.push('\t' + "<eScene.10>" + _val + "</eScene.10>" + '\n');
    };


    //////////////////////eScene.11
    _val = getValue(businessObject.elements, "eScene.11");
    if (_val == null) {
        if (isRequiredStateElement("eScene.11") == true)
        {            
            v2Array.push({ section: "E08", element: "E08_10", val: v2NOT_RECORDED });
            eScene["eScene.11"] = null;
            _retArray.push('\t' + "<eScene.11>" + null + "</eScene.11>" + '\n');
        }
        else
        {
            OLAPArray.push('\t' + "<SceneGPSLocation>" + null + "</SceneGPSLocation>" + '\n');
            v2Array.push({ section: "E08", element: "E08_10", val: v2NOT_RECORDED });
            eScene["eScene.11"] = null;
            _retArray.push('\t' + "<eScene.11>" + null + "</eScene.11>" + '\n');
        }
    }
    else
    {
        OLAPArray.push('\t' + "<SceneGPSLocation>" + _val + "</SceneGPSLocation>" + '\n');
        v2Array.push({ section: "E08", element: "E08_10", val: _val });
        eScene["eScene.11"] = _val;
        _retArray.push('\t' + "<eScene.11>" + _val + "</eScene.11>" + '\n');
    };


    //////////////////////eScene.12
    _val = getValue(businessObject.elements, "eScene.12");
    if (_val == null)
    {
        if (isRequiredStateElement("eScene.12") == true)
        {         
            OLAPArray.push('\t' + "<SceneUSNationalGridCoordinates>" + null + "</SceneUSNationalGridCoordinates>" + '\n');
            eScene["eScene.12"] = null;
            _retArray.push('\t' + "<eScene.12>" + null + "</eScene.12>" + '\n');
        }
        else
        {
            OLAPArray.push('\t' + "<SceneUSNationalGridCoordinates>" + null + "</SceneUSNationalGridCoordinates>" + '\n');
            eScene["eScene.12"] = null;
            _retArray.push('\t' + "<eScene.12>" + null + "</eScene.12>" + '\n');
        }
    }
    else
    {
        OLAPArray.push('\t' + "<SceneUSNationalGridCoordinates>" + _val + "</SceneUSNationalGridCoordinates>" + '\n');
        eScene["eScene.12"] = _val;
        _retArray.push('\t' + "<eScene.12>" + _val + "</eScene.12>" + '\n');
    };

    //////////////////////eScene.13
    _val = getValue(businessObject.elements, "eScene.13");
    if (_val == null)
    {
        if (isRequiredStateElement("eScene.13") == true)
        {
            OLAPArray.push('\t' + "<IncidentFacilityorLocationName>" + null + "</IncidentFacilityorLocationName>" + '\n');
            eScene["eScene.13"] = null;
            _retArray.push('\t' + "<eScene.13>" + null + "</eScene.13>" + '\n');
        }
        else
        {
            OLAPArray.push('\t' + "<IncidentFacilityorLocationName>" + null + "</IncidentFacilityorLocationName>" + '\n');
            eScene["eScene.13"] = null;
            _retArray.push('\t' + "<eScene.13>" + null + "</eScene.13>" + '\n');
        }
    }
    else
    {
        OLAPArray.push('\t' + "<IncidentFacilityorLocationName>" + _val + "</IncidentFacilityorLocationName>" + '\n');
        eScene["eScene.13"] = _val;
        _retArray.push('\t' + "<eScene.13>" + _val + "</eScene.13>" + '\n');
    };

    //////////////////////eScene.14
    _val = getValue(businessObject.elements, "eScene.14");
    if (_val == null)
    {
        if (isRequiredStateElement("eScene.14") == true)
        {
            OLAPArray.push('\t' + "<MilePostorMajorRoadway>" + null + "</MilePostorMajorRoadway>" + '\n');
            eScene["eScene.14"] = null;
            _retArray.push('\t' + "<eScene.14>" + null + "</eScene.14>" + '\n');
        }
        else
        {
            OLAPArray.push('\t' + "<MilePostorMajorRoadway>" + null + "</MilePostorMajorRoadway>" + '\n');
            eScene["eScene.14"] = null;
            _retArray.push('\t' + "<eScene.14>" + null + "</eScene.14>" + '\n');
        }
    }
    else
    {
        OLAPArray.push('\t' + "<MilePostorMajorRoadway>" + _val + "</MilePostorMajorRoadway>" + '\n');
        eScene["eScene.14"] = _val;
        _retArray.push('\t' + "<eScene.14>" + _val + "</eScene.14>" + '\n');
    };

    //////////////////////eScene.15
    _val = getValue(businessObject.elements, "eScene.15");
    if (_val == null)
    {
        if (isRequiredStateElement("eScene.15") == true)
        {
            OLAPArray.push('\t' + "<IncidentStreetAddress>" + "NOT RECORDED" + "</IncidentStreetAddress>" + '\n');
            v2Array.push({ section: "E08", element: "E08_11", val: v2NOT_RECORDED });
            _retArray.push('\t' + "<eScene.15" + NIL_V3NOT_RECORDED + '\n');
            eScene["eScene.15"] = V3NOT_RECORDED;
        }
        else  //if it isn't required, is nillable
        {
            OLAPArray.push('\t' + "<IncidentStreetAddress>" + null + "</IncidentStreetAddress>" + '\n');
            v2Array.push({ section: "E08", element: "E08_11", val: v2NOT_KNOWN });
            _retArray.push('\t' + "<eScene.15>" + null + "</eScene.15>") + '\n';
            eScene["eScene.15"] = null;
        }
    }
    else
    {
        OLAPArray.push('\t' + "<IncidentStreetAddress>" + _val + "</IncidentStreetAddress>" + '\n');
        v2Array.push({ section: "E08", element: "E08_11", val: _val });
        _retArray.push('\t' + "<eScene.15>" + _val + "</eScene.15>") + '\n';
        eScene["eScene.15"] = _val;
    };

    //////////////////////eScene.16
    _val = getValue(businessObject.elements, "eScene.16");
    if (_val == null)
    {
        if (isRequiredStateElement("eScene.16") == true)
        {
            OLAPArray.push('\t' + "<IncidentApartmentSuiteorRoom>" + "NOT RECORDED" + "</IncidentApartmentSuiteorRoom>" + '\n');
            _retArray.push('\t' + "<eScene.16" + NIL_V3NOT_RECORDED + '\n');
            eScene["eScene.16"] = V3NOT_RECORDED;
        }
        else {
            OLAPArray.push('\t' + "<IncidentApartmentSuiteorRoom>" + null + "</IncidentApartmentSuiteorRoom>" + '\n');
            _retArray.push('\t' + "<eScene.16>" + null + "</eScene.16>") + '\n';
            eScene["eScene.16"] = null;
        }
    }
    else
    {
        OLAPArray.push('\t' + "<IncidentApartmentSuiteorRoom>" + _val + "</IncidentApartmentSuiteorRoom>" + '\n');
        eScene["eScene.16"] = _val;
        _retArray.push('\t' + "<eScene.16>" + _val + "</eScene.16>" + '\n');
    };

    //////////////////////eScene.17
    _val = getValue(businessObject.elements, "eScene.17");
    if (_val == null)
    {
        if (isRequiredStateElement("eScene.17") == true)
        {
            OLAPArray.push('\t' + "<IncidentCity>" + "NOT RECORDED" + "</IncidentCity>" + '\n');
            _retArray.push('\t' + "<eScene.17" + NIL_V3NOT_RECORDED + '\n');
            v2Array.push({ section: "E08", element: "E08_12", val: v2NOT_RECORDED });
            eScene["eScene.17"] = v3NOT_RECORDED;
        }
        else
        {
            OLAPArray.push('\t' + "<IncidentCity>" + "NOT REPORTING" + "</IncidentCity>" + '\n');
            _retArray.push('\t' + "<eScene.17" + NIL_V3NOT_REPORTING + '\n');
            v2Array.push({ section: "E08", element: "E08_12", val: v2NOT_REPORTING });
            eScene["eScene.17"] = v3NOT_REPORTING;
        }
    }
    else
    {
        OLAPArray.push('\t' + "<IncidentCity>" + _val + "</IncidentCity>" + '\n');
        _retArray.push('\t' + "<eScene.17>" + _val + "</eScene.17>" + '\n')
        v2Array.push({ section: "E08", element: "E08_12", val: v2NOT_REPORTING });
        eScene["eScene.17"] = _val;
    };


    //////////////////////eScene.18
    _val = getValue(businessObject.elements, "eScene.18");
    if (_val == null)
    {
        OLAPArray.push('\t' + "<IncidentState>" + "NOT REPORTING" + "</IncidentState>" + '\n');
        _retArray.push('\t' + "<eScene.18" + NIL_V3NOT_RECORDED + '\n');
        v2Array.push({ section: "E08", element: "E08_14", val: v2NOT_RECORDED });
        eScene["eScene.18"] = v3NOT_RECORDED;
    }
    else
    {
        OLAPArray.push('\t' + "<IncidentState>" + _val + "</IncidentState>" + '\n');
        v2Array.push({ section: "E08", element: "E08_14", val: _val });
        eScene["eScene.18"] = _val;
        _retArray.push('\t' + "<eScene.18>" + _val + "</eScene.18>" + '\n')
    };

    //////////////////////eScene.19
    _val = getValue(businessObject.elements, "eScene.19");
    if (_val == null)
    {
        OLAPArray.push('\t' + "<IncidentZip>" + "NOT RECORDED" + "</IncidentZip>" + '\n');
        v2Array.push({ section: "E08", element: "E08_15", val: v2NOT_RECORDED });
        eScene["eScene.19"] = v3NOT_RECORDED;
        _retArray.push('\t' + "<eScene.19" + NIL_V3NOT_RECORDED + '\n');
    }
    else
    {
        OLAPArray.push('\t' + "<IncidentZip>" + _val + "</IncidentZip>" + '\n');
        v2Array.push({ section: "E08", element: "E08_15", val: _val});
        _retArray.push('\t' + "<eScene.19>" + _val + "</eScene.19>" + '\n');
        eScene["eScene.19"] = _val;
    };


    //////////////////////eScene.20
    _val = getValue(businessObject.elements, "eScene.20");
    if (_val == null)
    {
        if (isRequiredStateElement("eScene.20") == true)
        {
            OLAPArray.push('\t' + "<SceneCrossStreetorDirections>" + "NOT RECORDED" + "</SceneCrossStreetorDirections>" + '\n');
            eScene["eScene.20"] = v3NOT_RECORDED;
            _retArray.push('\t' + "<eScene.20" + NIL_V3NOT_RECORDED + '\n');
        }
        else
        {
            OLAPArray.push('\t' + "<SceneCrossStreetorDirections>" + "NOT REPORTING" + "</SceneCrossStreetorDirections>" + '\n');
            eScene["eScene.20"] = v3NOT_REPORTING;
            _retArray.push('\t' + "<eScene.20" + NIL_V3NOT_REPORTING + '\n');
        }
    }
    else
    {
        OLAPArray.push('\t' + "<SceneCrossStreetorDirections>" + _val + "</SceneCrossStreetorDirections>" + '\n');
        eScene["eScene.20"] = _val;
        _retArray.push('\t' + "<eScene.20>" + _val + "</eScene.20>" + '\n');
    };


    //////////////////////eScene.21
    _val = getValue(businessObject.elements, "eScene.21");
    if (_val == null)
    {
        if (isRequiredStateElement("eScene.21") == true)
        {
            OLAPArray.push('\t' + "<IncidentCounty>" + "NOT RECORDED" + "</IncidentCounty>" + '\n');
            _retArray.push('\t' + "<eScene.21" + NIL_V3NOT_RECORDED + '\n');
            v2Array.push({ section: "E08", element: "E08_13", val: v2NOT_RECORDED });
            eScene["eScene.21"] = v3NOT_RECORDED;
        }
        else
        {
            OLAPArray.push('\t' + "<IncidentCounty>" + null + "</IncidentCounty>" + '\n');
            _retArray.push('\t' + "<eScene.21>" + null + "</eScene.21>" + '\n');
            v2Array.push({ section: "E08", element: "E08_13", val: v2NOT_KNOWN });
            eScene["eScene.21"] = null;
        }
    }
    else
    {
        OLAPArray.push('\t' + "<IncidentCounty>" + _val + "</IncidentCounty>" + '\n');
        _retArray.push('\t' + "<eScene.21>" + _val + "</eScene.21>" + '\n');
        v2Array.push({ section: "E08", element: "E08_13", val: _val });
        eScene["eScene.21"] = _val;
    };

    //////////////////////eScene.22
    _val = getValue(businessObject.elements, "eScene.22");
    if (_val == null)
    {
        OLAPArray.push('\t' + "<IncidentCountry>" + null + "</IncidentCountry>" + '\n');
        _retArray.push('\t' + "<eScene.22>" + null + "</eScene.22>" + '\n')
        eScene["eScene.22"] = null;
    }
    else
    {
        OLAPArray.push('\t' + "<IncidentCountry>" + _val + "</IncidentCountry>" + '\n');
        eScene["eScene.22"] = _val;
        _retArray.push('\t' + "<eScene.22>" + _val + "</eScene.22>" + '\n')
    };

    //////////////////////eScene.22
    _val = getValue(businessObject.elements, "eScene.23");
    if (_val == null)
    {
        OLAPArray.push('\t' + "<IncidentCensusTract>" + null + "</IncidentCensusTract>" + '\n');
        _retArray.push('\t' + "<eScene.23>" + null + "</eScene.23>" + '\n')
        eScene["eScene.23"] = null;
    }
    else
    {
        OLAPArray.push('\t' + "<IncidentCensusTract>" + _val + "</IncidentCensusTract>" + '\n');
        _retArray.push('\t' + "<eScene.23>" + _val + "</eScene.23>" + '\n')
        eScene["eScene.23"] = _val;
    };


    _retArray.push("/<eScene>");
    OLAPArray.push("/<eScene>");

    return _retArray;
};


var setNotApplicable = function (elementID)
{

    _retArray.push("<eScene.01" + NIL_V3NOT_APPLICABLE);
    eScene["eScene.01"] = v3NOT_APPLICABLE;


    v2Array.push({ section: "E08", element: "E18_01", val: v2NOT_APPLICABLE });
    v2Array.push({ section: "E08", element: "E18_02", val: v2NOT_APPLICABLE });
    v2Array.push({ section: "E08", element: "E18_03", val: v2NOT_APPLICABLE });
    

    _retArray.push("<eScene.06" + NIL_V3NOT_APPLICABLE);
    eScene["eScene.06"] = v3NOT_APPLICABLE;
    v2Array.push({ section: "E18", element: "E18_05", val: v2NOT_APPLICABLE });
    
    _retArray.push("<eScene.07" + NIL_V3NOT_APPLICABLE);
    eScene["eScene.07"] = v3NOT_APPLICABLE;
    v2Array.push({ section: "E08", element: "E08_06", val: v2NOT_APPLICABLE });


    _retArray.push("<eScene.08" + NIL_V3NOT_APPLICABLE);
    eScene["eScene.08"] = v3NOT_APPLICABLE;

    _retArray.push("<eScene.09" + NIL_V3NOT_APPLICABLE);
    eScene["eScene.09"] = v3NOT_APPLICABLE;
    v2Array.push({ section: "E08", element: "E08_07", val: v2NOT_APPLICABLE });

    _retArray.push("<eScene.10" + NIL_V3NOT_APPLICABLE);
    eScene["eScene.10"] = v3NOT_APPLICABLE;
    v2Array.push({ section: "E08", element: "E08_08", val: v2NOT_APPLICABLE });
    
    _retArray.push("<eScene.11" + NIL_V3NOT_APPLICABLE);
    eScene["eScene.11"] = v3NOT_APPLICABLE;
    v2Array.push({ section: "E08", element: "E08_10", val: v2NOT_APPLICABLE });
   

    _retArray.push("<eScene.12" + NIL_V3NOT_APPLICABLE);
    eScene["eScene.12"] = v3NOT_APPLICABLE;
    
    _retArray.push("<eScene.13" + NIL_V3NOT_APPLICABLE);
    eScene["eScene.13"] = v3NOT_APPLICABLE;

    _retArray.push("<eScene.14" + NIL_V3NOT_APPLICABLE);
    eScene["eScene.14"] = v3NOT_APPLICABLE;

    _retArray.push("<eScene.15" + NIL_V3NOT_APPLICABLE);
    eScene["eScene.15"] = v3NOT_APPLICABLE;
    v2Array.push({ section: "E08", element: "E08_11", val: v2NOT_APPLICABLE });

    _retArray.push("<eScene.16" + NIL_V3NOT_APPLICABLE);
    eScene["eScene.16"] = v3NOT_APPLICABLE;

    _retArray.push("<eScene.17" + NIL_V3NOT_APPLICABLE);
    eScene["eScene.17"] = v3NOT_APPLICABLE;
    v2Array.push({ section: "E08", element: "E08_12", val: v2NOT_APPLICABLE });
    
    _retArray.push("<eScene.18" + NIL_V3NOT_APPLICABLE);
    eScene["eScene.18"] = v3NOT_APPLICABLE;
    v2Array.push({ section: "E08", element: "E08_14", val: v2NOT_APPLICABLE });
    

    _retArray.push("<eScene.19" + NIL_V3NOT_APPLICABLE);
    eScene["eScene.19"] = v3NOT_APPLICABLE;
    v2Array.push({ section: "E08", element: "E08_15", val: v2NOT_APPLICABLE });

    _retArray.push("<eScene.20" + NIL_V3NOT_APPLICABLE);
    eScene["eScene.20"] = v3NOT_APPLICABLE;

    _retArray.push("<eScene.21" + NIL_V3NOT_APPLICABLE);
    eScene["eScene.21"] = v3NOT_APPLICABLE;
    v2Array.push({ section: "E08", element: "E08_13", val: v2NOT_APPLICABLE });
    
};
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
}

function setD2(NEMSISElementNumber, valueArray) {
    //    console.log(NEMSISElementNumber);
    var _retArray = [];
    //    console.log(valueArray);
    switch (NEMSISElementNumber) {
        case "eScene.04":

            if (eScene04[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eScene04[valueArray[0]]);
            }
            break;

        case "eScene.06":

            if (eScene06[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eScene06[valueArray[0]]);
            }
            break;

        case "eScene.07":

            if (eScene07[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eScene07[valueArray[0]]);
            }
            break;

        case "eScene.09":
            if (eScene09[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eScene09[valueArray[0]]);
            }
            break;

        default:
            _retArray.push(NEMSISElementNumber = " version 2 not found");
    }

    return _retArray;
};

var eScene04 = {
    "1060": "2704001",
    "1065": "2704003",
    "1070": "2704007",
    "1075": "2704009",
    "1080": "2704015",
    "1085": "2704011",
    "1090": "2704017",
    "1095": "2704019"
};

var eScene09 = {
    "Y92.00":"1135",
    "Y92.01":"1135",
    "Y92.015":"1135",
    "Y92.016":"1135",
    "Y92.02":"1135",
    "Y92.03":"1135",
    "Y92.10":"1135",
    "Y92.7":"1140",
    "Y92.64":"1145",	
    "Y92.61":"1150",
    "Y92.62":"1150",
    "Y92.63":"1150",
    "Y92.65":"1150",
    "Y92.69":"1150",
    "Y92.31":"1155",
    "Y92.32":"1155",
    "Y92.33":"1155",
    "Y92.34":"1155",
    "Y92.39":"1155", 
    "Y92.82":"1155",
    "Y92.830":"1155",
    "Y92.831":"1155",
    "Y92.832":"1155",
    "Y92.833":"1155",
    "Y92.834":"1155",
    "Y92.838":"1155",
    "Y92.41":"1160",
    "Y92.48":"1160",
    "Y92.85":"1160",
    "Y92.12":"1165",
    "Y92.13":"1165",
    "Y92.14":"1165",
    "Y92.16":"1165",
    "Y92.210":"1165",
    "Y92.211":"1165",
    "Y92.212":"1165",
    "Y92.213":"1165",
    "Y92.214":"1165",
    "Y92.215":"1165",
    "Y92.219":"1165", 
    "Y92.22":"1165", 
    "Y92.24":"1165",
    "Y92.51":"1165",
    "Y92.52":"1165",
    "Y92.520":"1165",
    "Y92.24":"1170",
    "Y92.25":"1170",
    "Y92.26":"1170",
    "Y92.29":"1170", 
    "Y92.51":"1170",
    "Y92.12":"1175",
    "Y92.13":"1175",
    "Y92.14":"1175",
    "Y92.23":"1175", 
    "Y92.531":"1175",
    "Y92.532":"1175",
    "Y92.538":"1175",

}
