var ErrorList = [];
var v3NOT_REPORTING = " NV=\"7701005\"";
//var v3NOT_RECORDED = " NV=\"7701003\"";
var v3NOT_RECORDED = new Array();
v3NOT_RECORDED.push(7701003);
var v3NOT_REPORTING = new Array();
v3NOT_REPORTING.push(7701005);

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

var dAgency = new Object;
var AgencyServiceGroup = [];
var AgencyYearGroup = [];
var AgencyServiceGroupArray = [];
var AgencyYearGroupArray = [];
var _retArray = [];
var OLAPArray = [];
var XMLString = "";
var v2Array = [];

var getSectionIndex = function (sectionObject, sectionName)
    //Returns an array of index values for a given sectionName within a sectionObject
    // if sectionName does not exist within the sectionObject, return -1
{
    var _retValue = [];
    for (var d = 0; d < sectionObject.sections.length; d++)
    {
        if (sectionObject.sections[d].attributes.name == sectionName)
        {
            _retValue.push(d);
        }
    }
    if (_retValue.length == 0) {
        _retValue.push(-1);
    }
    return _retValue;
};

var setdAgency = function (businessObject)
{
    //businessObject = All of the dAgencys Sections/Elements.
    //objects required to satisfy NEMSIS and DIM
    //Get Original Objects from OLTP, validate against section/domain rules
    //Collect each Error and push to ErrorList
    //On complete, if ErrorList.Length==0, 
    //  else commit to OLAP
    

    dAgency["OLTPObjectId"] = businessObject["agencyId"];  

    _retArray.push("<dAgency>" + '\n');
    OLAPArray.push("<dAgency>" + '\n');

    //dAgency.01/////////
    _val = getAgencyValue(businessObject.elements, "dAgency.01");
    if (_val == null)
    {
        ErrorList.push("dAgency.01 MANDATORY National Element");        
    }
    else
    {
        dAgency["dAgency.01"] = _val;
        _retArray.push('\t' + "<dAgency.01>" + _val + "</dAgency.01>" + '\n');
        OLAPArray.push('\t' + "<AgencyStateID>" + _val + "</AgencyStateID>" + '\n');
    };

    //dAgency.02/////////
    _val = getAgencyValue(businessObject.elements, "dAgency.02");
    if (_val == null)
    {
        ErrorList.push("AgencyNumber: MANDATORY V2 and V3 ");
    }
    else
    {
        dAgency["dAgency.02"] = _val;
        _retArray.push('\t' + "<dAgency.02>" + _val + "</dAgency.02>" + '\n');
        v2Array.push({ section: "D01", element: "D01_01", val: _val });
        OLAPArray.push('\t' + "<AgencyNumber>" + _val + "</AgencyNumber>" + '\n');
    };

    //dAgency.03///////
    _val = getAgencyValue(businessObject.elements, "dAgency.03");
    if (_val == null)
    {
        ErrorList.push("dAgency.03 MANDATORY DIM Element");

        if (isRequiredStateElement("dAgency.03") == true)
        {
            _retArray.push('\t' + "<dAgency.03" + v3NOT_RECORDED + '\n');
            OLAPArray.push('\t' + "<AgencyName>" + "NOT_RECORDED" + "</AgencyName>" + '\n');
            dAgency["dAgency.03"] = v3NOT_RECORDED;
        }
        else
        {
            dAgency["dAgency.03"] = v3NOT_REPORTING;
            _retArray.push('\t' + "<dAgency.03" + NIL_V3NOT_REPORTING + '\n');
            OLAPArray.push('\t' + "<AgencyName>" + "NOT_REPORTING" + "</AgencyName>" + '\n');
        }
    }
    else
    {
        dAgency["dAgency.03"] = _val;
        _retArray.push('\t' + "<dAgency.03>" + _val + "</dAgency.03>" + '\n');
        v2Array.push({ section: "D01", element: "D01_02", val: _val });
    };


    //dAgency.04/////////
    _val = getAgencyValue(businessObject.elements, "dAgency.04");
    if (_val == null)
    {
        ErrorList.push("dAgency.04 Mandatory Element");      
    }
    else
    {
        dAgency["dAgency.04"] = _val;
        _retArray.push('\t' + "<dAgency.04>" + _val + "</dAgency.04>" + '\n');
        v2Array.push({ section: "D01", element: "D01_03", val: _val });
        OLAPArray.push('\t' + "<EMSAgencyState>" + _val + "</EMSAgencyState>" + '\n');
    };

    ///////////////////////AgencyServiceGroup

    _sectionIndex = getSectionIndex(businessObject, "dAgency.AgencyServiceGroup");

    var _AGArray = new Array();
    for (var x = 0; x < _sectionIndex.length; x++)
    {     

        _AGArray.push('\t' + "<dAgency.AgencyServiceGroup>" + '\n');
        OLAPArray.push('\t' + "<dAgency.AgencyServiceGroup>" + '\n');
        var AG = new Object;
        _elementList = businessObject.sections[_sectionIndex[x]].attributes.elements;

        //Parent Object.  If no value, cannot process Group

        _val = getAgencyValue(_elementList, "dAgency.05");
        if (_val == null)
        {
            ErrorList.push("dAgency.05 MANDATORY National Element");
        }
        else
        {
            AG["dAgency.05"] = _val;
            _AGArray.push('\t\t' + "<dAgency.05>" + _val + "</dAgency.05>" + '\n');
            OLAPArray.push('\t\t' + "<EMSAgencyServiceAreaStates>" + _val + "</EMSAgencyServiceAreaStates>" + '\n');
        };

        _val = getAgencyValue(_elementList, "dAgency.06");
        if (_val == null)
        {
            ErrorList.push("dAgency.06 MANDATORY National Element");
        }
        else {
            var arr1 = [];
            var arr2 = [];
            arr1 = _val;
            for (var i = 0; i < _val.length; i++) {
                _AGArray.push('\t\t' + "<dAgency.06>" + _val[i] + "</dAgency.06>" + '\n');
                v2Array.push({ section: "D01", element: "D01_04", val: _val });
                OLAPArray.push('\t\t' + "<EMSAgencyServiceAreaCounties>" + _val[0] + "</EMSAgencyServiceAreaCounties>" + '\n');
            }
            AG["dAgency.06"] = = arr1.slice(0);
        };

        //dAgency.07/////////
        _val = getAgencyValue(_elementList, "dAgency.07");
        if (_val == null) 
        {
            AG["dAgency.07"] = v3NOT_RECORDED;
            OLAPArray.push('\t\t' + "<EMSAgencyCensusTracts>" + "NOT_RECORDED" + "</EMSAgencyCensusTracts>" + '\n');
            _AGArray.push('\t\t' + "<dAgency.07" + NIL_V3NOT_RECORDED + '\n');
        }
        else 
        {
            var arr1 = [];
            for (var i = 0; i < _val.length; i++) 
            {
                arr1[i] = _val[i];
                _AGArray.push('\t\t' + "<dAgency.07>" + _val[i] + "</dAgency.07>" + '\n');
                OLAPArray.push('\t\t' + "<EMSAgencyCensusTracts>" + _val[i] + "</EMSAgencyCensusTracts>" + '\n');
            }
            AG["dAgency.07"] = arr1.slice(0);
        };

        //dAgency.08//////
        _val = getAgencyValue(_elementList, "dAgency.08");
        if (_val == null) 
        {            
            AG["dAgency.08"] = v3NOT_RECORDED;
            _AGArray.push('\t\t' + "<dAgency.08" + NIL_V3NOT_RECORDED + '\n');
            OLAPArray.push('\t\t' + "<EMSAgencyServiceAreaZIPCodes>" + "NOT_RECORDED" + "</EMSAgencyServiceAreaZIPCodes>" + '\n');
        }
        else 
        {
            var arr1 = [];
            for (var i = 0; i < _val.length; i++) 
            {
                arr1[i] = _val[i];
                _AGArray.push('\t\t' + "<dAgency.08>" + _val[i] + "</dAgency.08>" + '\n');
                OLAPArray.push('\t\t' + "<EMSAgencyServiceAreaZIPCodes>" + _val[0] + "</EMSAgencyServiceAreaZIPCodes>" + '\n');
            }
            AG["dAgency.08"] = arr1.slice(0);
        }
        _AGArray.push('\t' + "</dAgency.AgencyServiceGroup>" + '\n');
        OLAPArray.push('\t' + "</dAgency.AgencyServiceGroup>" + '\n');
        AgencyServiceGroupArray.push(AG);
    };
    // console.log(AgencyServiceGroupArray);
    _retArray = _retArray.concat(_AGArray);

    //dAgency.09///////
    _val = getAgencyValue(businessObject.elements, "dAgency.09");
    if (_val == null)
    {
        ErrorList.push("dAgency.09 MANDATORY National Element");
    }
    else 
    {
        dAgency["dAgency.09"] = _val;
        v2Array.push({ section: "D01", element: "D01_05", val: setV2("dAgency.09", _val) });
        _retArray.push('\t' + "<dAgency.09>" + _val + "</dAgency.09>" + '\n');
        OLAPArray.push('\t' + "<PrimaryTypeofService>" + setCodeText("dAgency.09", _val) + "</PrimaryTypeofService>" + '\n');
    };

    //dAgency.10//////
    _val = getAgencyValue(businessObject.elements, "dAgency.10");

    if (_val == null) 
    {
        if (isRequiredStateElement("dAgency.10") == true) 
        {    
            _retArray.push('\t' + "<dAgency.10" + NIL_V3NOT_RECORDED + '\n');
            v2Array.push({ section: "D01", element: "D01_05", val: v2NOT_RECORDED });
            OLAPArray.push('\t\t' + "<OtherTypesofService>" + "NOT_RECORDED" + "</OtherTypesofService>" + '\n');
        }
        else 
        { 
            _retArray.push('\t' + "<dAgency.10" + NIL_V3NOT_REPORTING + '\n');
            OLAPArray.push('\t\t' + "<OtherTypesofService>" + "NOT_REPORTING" + "</OtherTypesofService>" + '\n');
            v2Array.push({ section: "D01", element: "D01_05", val: v2NOT_REPORTING });
        }
    }
    else 
    {
        var arr1 = [];
        var arr2 = [];
        arr1 = _val;
        arr2 = setV2("dAgency.10", _val);
        for (var i = 0; i < _val.length; i++) 
        {
            console.log(i + " " +setCodeText("dAgency.10", _val[i]));
            _retArray.push('\t' + "<dAgency.10>" + _val[i] + "</dAgency.10>" + '\n');
            OLAPArray.push('\t' + "<OtherTypesofService>" + setCodeText("dAgency.10", _val[i]) + "</OtherTypesofService>" + '\n');
            v2Array.push({ section: "D01", element: "D01_05", val: setV2("dAgency.10", _val[i])});
        }        
        dAgency["dAgency.10"] = arr1.slice(0);        
    };


    //dAgency.11////////
    _val = getAgencyValue(businessObject.elements, "dAgency.11");
    if (_val == null) 
    {
        ErrorList.push("dAgency.11 MANDATORY Element");
    }
    else 
    {
        dAgency["dAgency.11"] = _val;
        v2Array.push({ section: "D01", element: "D01_07", val: setV2("dAgency.11", _val) });
        _retArray.push('\t' + "<dAgency.11>" + _val + "</dAgency.11>" + '\n');
        OLAPArray.push('\t' + "<LevelofService>" + _val + "</LevelofService>" + '\n');
    };

    //dAgency.12
    _val = getAgencyValue(businessObject.elements, "dAgency.12");
    if (_val == null) 
    {
        ErrorList.push("dAgency.12 MANDATORY Element");
    }
    else 
    {
        dAgency["dAgency.12"] = _val;
        v2Array.push({ section: "D01", element: "D01_09", val: setV2("dAgency.12", _val) });
        _retArray.push('\t' + "<dAgency.12>" + _val + "</dAgency.12>" + '\n');
        OLAPArray.push('\t' + "<OrganizationStatus>" + _val + "</OrganizationStatus>" + '\n');
    };

    //dAgency.13////////
    _val = getAgencyValue(businessObject.elements, "dAgency.13");
    if (_val == null) 
    {
        ErrorList.push("dAgency.13 MANDATORY Element");
    }
    else 
    {
        v2Array.push({ section: "D01", element: "D01_08", val: setV2("dAgency.13", _val) });
        dAgency["dAgency.13"] = _val;
        _retArray.push('\t' + "<dAgency.13>" + _val + "</dAgency.13>" + '\n');
        OLAPArray.push('\t' + "<OrganizationalType>" + _val + "</OrganizationalType>" + '\n');
    };

    //dAgency.14////////
    _val = getAgencyValue(businessObject.elements, "dAgency.14");
    if (_val == null) 
    {
        ErrorList.push("dAgency.14  MANDATORY Element");
    }
    else {
        dAgency["dAgency.14"] = _val;
        _retArray.push('\t' + "<dAgency.14>" + _val + "</dAgency.14>" + '\n');
        OLAPArray.push('\t' + "< EMSAgencyOrganizationalTaxStatus>" + _val + "</EMSAgencyOrganizationalTaxStatus>" + '\n');

    };

    ///////////////////////AgencyYearGroup
    _sectionIndex = getSectionIndex(businessObject, "dAgency.AgencyYearGroup");
    // console.log(_sectionIndex)
    var _AYGArray = new Array();
    for (var x = 0; x < _sectionIndex.length; x++) {
        _AYGArray.push('\t' + "<dAgency.AgencyYearGroup>" + '\n');
        OLAPArray.push('\t' + "<dAgency.AgencyYearGroup>" + '\n');

        var YG = new Object;
        _elementList = businessObject.sections[_sectionIndex[x]].attributes.elements;

        //dAgency.15///////
        _val = getAgencyValue(_elementList, "dAgency.15");
        if (_val == null) 
        {
            ErrorList.push("dAgency.15 MANDATORY Element");
        }
        else 
        {
            YG["dAgency.15"] = _val;
            _AYGArray.push('\t\t' + "<dAgency.15>" + _val + "</dAgency.15>" + '\n');
            v2Array.push({ section: "D01", element: "D01_10", val: _val });
            OLAPArray.push('\t\t' + "<StatisticalCalendarYear>" + _val + "</StatisticalCalendarYear>" + '\n');
        };

        //dAgency.16///////
        _val = getAgencyValue(_elementList, "dAgency.16");
        if (_val == null) 
        {
            YG["dAgency.16"] = v3NOT_RECORDED;
            _AYGArray.push('\t\t' + "<dAgency.16" + NIL_V3NOT_RECORDED + '\n');
            OLAPArray.push('\t\t' + "<TotalPrimaryServiceAreaSize>" + "NOT_RECORDED" + "</TotalPrimaryServiceAreaSize>" + '\n');
        }
        else {
            YG["dAgency.16"] = _val;
            _AYGArray.push('\t\t' + "<dAgency.16>" + _val + "</dAgency.16>" + '\n');
            v2Array.push({ section: "D01", element: "D01_12", val: setV2("dAgency.16", _val) });
            OLAPArray.push('\t\t' + "<TotalPrimaryServiceAreaSize>" + _val + "</TotalPrimaryServiceAreaSize>" + '\n');
        };

        //dAgency.17///////
        _val = getAgencyValue(_elementList, "dAgency.17");
        if (_val == null) 
        {
            YG["dAgency.17"] = v3NOT_RECORDED;
            _AYGArray.push('\t\t' + "<dAgency.17" + NIL_V3NOT_RECORDED + '\n');
            OLAPArray.push('\t\t' + "<TotalServiceAreaPopulation>" + "NOT_RECORDED" + "</TotalServiceAreaPopulation>" + '\n');
        }
        else 
        {
            YG["dAgency.17"] = _val;
            _AYGArray.push('\t\t' + "<dAgency.17>" + _val + "</dAgency.17>" + '\n');
            v2Array.push({ section: "D01", element: "D01_13", val: _val });
            OLAPArray.push('\t\t' + "<TotalServiceAreaPopulation>" + _val + "</TotalServiceAreaPopulation>" + '\n');
        };

        //dAgency.18///////////
        _val = getAgencyValue(_elementList, "dAgency.18");
        if (_val == null) 
        {
            YG["dAgency.18"] = v3NOT_RECORDED;
            _AYGArray.push('\t\t' + "<dAgency.18" + NIL_V3NOT_RECORDED + '\n');
            OLAPArray.push('\t\t' + "<EMS911CallCenterVolumeperYear>" + "NOT_RECORDED" + "</EMS911CallCenterVolumeperYear>" + '\n');
        }
        else 
        {
            YG["dAgency.18"] = _val;
            _AYGArray.push('\t\t' + "<dAgency.18>" + _val + "</dAgency.18>" + '\n');
            v2Array.push({ section: "D01", element: "D01_14", val: _val });
            OLAPArray.push('\t\t' + "<EMS911CallCenterVolumeperYear>" + _val + "</EMS911CallCenterVolumeperYear>" + '\n');
        };

        //dAgency.19/////////
        _val = getAgencyValue(_elementList, "dAgency.19");
        if (_val == null) 
        {
            YG["dAgency.19"] = v3NOT_RECORDED;
            OLAPArray.push('\t\t' + "<EMSDispatchVolumeperYear>" + "NOT_RECORDED" + "</EMSDispatchVolumeperYear>" + '\n');
            _AYGArray.push('\t\t' + "<dAgency.19" + NIL_V3NOT_RECORDED + '\n');
        }
        else 
        {
            YG["dAgency.19"] = _val;
            _AYGArray.push('\t\t' + "<dAgency.19>" + _val + "</dAgency.19>" + '\n');
            v2Array.push({ section: "D01", element: "D01_15", val: _val });
            OLAPArray.push('\t\t' + "<EMSDispatchVolumeperYear>" + _val + "</EMSDispatchVolumeperYear>" + '\n');
        };


        _val = getAgencyValue(_elementList, "dAgency.20");
        if (_val == null) 
        {
            YG["dAgency.20"] = v3NOT_RECORDED;
            OLAPArray.push('\t\t' + "<EMSPatientTransportVolumeperYear>" + "NOT_RECORDED" + "</EMSPatientTransportVolumeperYear>" + '\n');
            _AYGArray.push('\t\t' + "<dAgency.20" + NIL_V3NOT_RECORDED + '\n');
        }
        else 
        {
            YG["dAgency.20"] = _val;
            _AYGArray.push('\t\t' + "<dAgency.20>" + _val + "</dAgency.20>" + '\n');
            v2Array.push({ section: "D01", element: "D01_16", val: _val });
            OLAPArray.push('\t\t' + "<EMSPatientTransportVolumeperYear>" + _val + "</EMSPatientTransportVolumeperYear>" + '\n');
        };

        //dAgency.21//////
        _val = getAgencyValue(_elementList, "dAgency.21");
        if (_val == null) 
        {
            YG["dAgency.21"] =
            _AYGArray.push('\t\t' + "<dAgency.21" + NIL_V3NOT_RECORDED + '\n');
            OLAPArray.push('\t\t' + "<EMSPatientContactVolumeperYear>" + "NOT_RECORDED" + "</EMSPatientContactVolumeperYear>" + '\n');
        }
        else 
        {
            YG["dAgency.21"] = _val;
            _AYGArray.push('\t\t' + "<dAgency.21>" + _val + "</dAgency.21>" + '\n');
            v2Array.push({ section: "D01", element: "D01_17", val: _val });
            OLAPArray.push('\t\t' + "<EMSPatientContactVolumeperYear>" + _val + "</EMSPatientContactVolumeperYear>" + '\n');
        };

        //dAgency.22////
        _val = getAgencyValue(_elementList, "dAgency.22");
        if (_val == null) 
        {
            if (isRequiredStateElement("dAgency.22") == true) 
            {
                YG["dAgency.22"] = v3NOT_RECORDED;
                _AYGArray.push('\t\t' + "<dAgency.22" + NIL_V3NOT_RECORDED + '\n');
                OLAPArray.push('\t\t' + "<EMSBillableCallsperYear>" + "NOT_RECORDED" + "</EMSBillableCallsperYear>" + '\n');
            }
            else 
            {
                YG["dAgency.22"] = v2NOT_REPORTING;
                _AYGArray.push('\t\t' + "<dAgency.22" + NIL_V3NOT_REPORTING + '\n');
                OLAPArray.push('\t\t' + "<EMSBillableCallsperYear" + V3NOT_REPORTING + '\n');
            }
        }
        else 
        {
            YG["dAgency.22"] = _val;
            _AYGArray.push('\t\t' + "<dAgency.22>" + _val + "</dAgency.22>" + '\n');
            v2Array.push({ section: "D01", element: "D01_18", val: _val });
            OLAPArray.push('\t\t' + "<EMSBillableCallsperYear>" + _val + "</EMSBillableCallsperYear>" + '\n');
        };

        _AYGArray.push('\t' + "</dAgency.AgencyYearGroup>" + '\n');
        OLAPArray.push('\t' + "</dAgency.AgencyYearGroup>" + '\n');
        AgencyYearGroupArray.push(YG);
    };

    _retArray = _retArray.concat(_AYGArray);
    ////////////////////////

    //dAgency.23///////
    _val = getAgencyValue(businessObject.elements, "dAgency.23");
    if (_val == null) 
    {
        dAgency["dAgency.23"] = null;
        v2Array.push({ section: "D01", element: "D01_19", val: null });
        OLAPArray.push('\t' + "<EMSAgencyTimeZone>" + null + "</EMSAgencyTimeZone>" + '\n');
        _retArray.push('\t' + "<dAgency.23>" + null + "</dAgency.23>" + '\n');
    }
    else 
    {
        dAgency["dAgency.23"] = _val;
        v2Array.push({ section: "D01", element: "D01_19", val: setV2("dAgency.23", _val) });
        _retArray.push('\t' + "<dAgency.23>" + _val + "</dAgency.23>" + '\n');
        OLAPArray.push('\t' + "<EMSAgencyTimeZone>" + _val + "</EMSAgencyTimeZone>" + '\n');
    };

    //dAgency.24//////////////
    _val = getAgencyValue(businessObject.elements, "dAgency.24");
    if (_val == null) 
    {
        dAgency["dAgency.24"] = null;
        v2Array.push({ section: "D01", element: "D01_20", val: null });
        OLAPArray.push('\t' + "<EMSAgencyDaylightSavingsTimeUse>" + null + "</EMSAgencyDaylightSavingsTimeUse>" + '\n');
    }
    else 
    {
        dAgency["dAgency.24"] = _val;
        v2Array.push({ section: "D01", element: "D01_20", val: setV2("dAgency.24", _val) });
        _retArray.push('\t' + "<dAgency.24>" + _val + "</dAgency.24>" + '\n');
        OLAPArray.push('\t' + "<EMSAgencyDaylightSavingsTimeUse>" + _val + "</EMSAgencyDaylightSavingsTimeUse>" + '\n');
    };

    //dAgency.25//////////////
    _val = getAgencyValue(businessObject.elements, "dAgency.25");
    if (_val == null) 
    {
        _retArray.push('\t' + "<dAgency.25" + NIL_V3NOT_RECORDED + '\n');
        dAgency["dAgency.25"] = v3NOT_RECORDED;
        v2Array.push({ section: "D01", element: "D01_20", val: v2NOT_RECORDED });
        OLAPArray.push('\t' + "<NationalProviderIdentifier>" + "NOT RECORDED" + "</NationalProviderIdentifier>" + '\n');
    }
    else 
    {
        var arr1 = [];
        for (var i = 0; i < _val.length ; i++) 
        {
            arr1[i] = _val[i];
            v2Array.push({ section: "D01", element: "D01_21", val: arr2setV2("dAgency.25", _val[i]) });
            _retArray.push('\t' + "<dAgency.25>" + _val[i] + "</dAgency.25>" + '\n');
            OLAPArray.push('\t' + "<NationalProviderIdentifier>" + _val[i] + "</NationalProviderIdentifier>" + '\n');
        }
        dAgency["dAgency.25"] = arr1.slice(0);        
    };

    //dAgency.26/////////////
    _val = getAgencyValue(businessObject.elements, "dAgency.26");
    if (_val == null) 
    {
        dAgency["dAgency.26"] = v3NOT_RECORDED;
        _retArray.push('\t' + "<dAgency.26" + NIL_V3NOT_RECORDED + '\n');
        OLAPArray.push('\t' + "<FireDepartmentIDNumber>" + "NOT RECORDED" + "</FireDepartmentIDNumber>" + '\n');
    }
    else
    {
        var arr1 = [];
        for (var i = 0; i < businessObject.length ; i++) 
        {
            _valArray.push(_val[i]);
            _retArray.push('\t' + "<dAgency.26>" + _val[i] + "</dAgency.26>" + '\n');
            OLAPArray.push('\t' + "<FireDepartmentIDNumber>" + _val[i] + "</FireDepartmentIDNumber>" + '\n');
        }
        dAgency["dAgency.26"] = arr1.slice(0);
    };

    OLAPArray.push("</dAgency>");
    _retArray.push("</dAgency>");
    //Build XML String
    for (var i = 0; i < _retArray.length ; i++) {
        XMLString = XMLString + _retArray[i];

    }
   // console.log(XMLString);

    for (var i = 0; i < OLAPArray.length ; i++) {
        XMLString = XMLString + OLAPArray[i];
    }
    console.log(XMLString);

    //Assign Subgroups to Parent Object
    if (AgencyServiceGroupArray.length > 0) {
        dAgency.AgencyServiceGroup = AgencyServiceGroupArray;
    }
    if (AgencyYearGroupArray.length > 0) {
        dAgency.AgencyYearGroup = AgencyYearGroupArray;
    }


    //The Save Complex
    //1: Determine if dAgency334 Object is NEW 
    //2: If it is not new, expire current and add new with effectivity

    console.log(dAgency["OLTPObjectId"])

    if (getEffectiveID(dAgency["OLTPObjectId"]) == undefined)
    {
        console.log("New Agency");
        mergedAgency(dAgency, v2Array);
    }
    else
    {
        console.log(getEffectiveID(dAgency["OLTPObjectId"]));
    }

    SaveD2();
//     _oldOLAPID = getEffectiveID(dAgency["OLTPObjectId"])
    

    //Stuff Parse.com



};

var expiredAgency334 = function (request, response) {
    var sum = 0;
    var j = 0;
    date = new Date;
    console.log(date.Now);
    console.log(dAgency["OLTPObjectId"])
    var query = new Parse.Query("dAgency334");
    //query.equalTo("AgencyNumber", "AgencyNumber");
    query.equalTo("OLTPObjectId", dAgency["OLTPObjectId"]);
    query.equalTo("EffectiveTo", null);
    query.first().then(function (results) {
        console.log(results.get("AgencyName"))
        results.set("EffectiveTo", new Date());
        //results.set("AgencyName", "A new Name");
        results.save();
        /*for (var i = 0; i < results.length; ++i) {
            console.log(i + " " + results[i].get("AgencyName"))
            sum += results[i].get("AgencyName");
            ++j;
        }

       var query2 = new Parse.Query("Drama");
        query2.equalTo("movie", request.params.movie);

        return query2.find();
    }).then(function (results) {
        for (var i = 0; i < results.length; ++i) {
            sum += results[i].get("stars");
            ++j;
        }
        */
        //response.success(sum / j);
    }, function (error) {
        response.error("movie lookup failed");
    });


    return j;
};
var getEffectiveID = function (agencyID) {
    console.log("getEffectiveID")

    var query = new Parse.Query("dAgency334")
      query.equalTo("OLTPObjectId", agencyID);
   // query.equalTo("EffectiveTo", null);

    var promise = new Parse.Promise();

    query.first().then(function (results) {
        if (results == undefined) {
            promise.resolve(0);
            return null;
        }
        else {
            getEffectiveID().then(function (result) {
                promise.resolve(result);
                return results["id"];
            }, function (error) {
                promise.reject(error);
            });
        }
    }, function (error) {
        promise.reject(error);
    });


    return promise;
};
var isNewAgency = function (agencyID) {
    var _retVal = "";
    var dAgency334 = Parse.Object.extend("dAgency334");
    var query = new Parse.Query(dAgency334);
    query.equalTo("OLTPObjectId", agencyID);
    query.equalTo("EffectiveTo", null);
    query.first({
        success: function (results) {            
            if (results["id"] == undefined) {
                return null;
            }
            else {
                _retVal = results["id"];
                return _retVal;
            }
        },
        error: function (error) {
            console.log("IsNew Agency Failure");
        }
    });
    //return _retVal;
};

var ExpireAgency = function (objectId) {
    console.log(objectId);

    var dAgency334 = Parse.Object.extend("dAgency334");
    var query = new Parse.Query(dAgency334);
    query.equalTo("objectId", objectId);
    query.equalTo("EffectiveTo", null);
    query.first({
        success: function (object) {
            console.log(object);

            //    		object.set("EffectiveTo", Date.Now);
            //             object.save();
        },
        error: function (error) {
            alert("Error: " + error.code + " " + error.message);
        }
    })
}
var mergedAgency = function (dAgencyObject, v2Array) {
    console.log("mer")
    //    saveV2(businessObject.agencyId, v2Array);
    var OLAPdAgency = new Object()
    //Flatten dAgency a bit
    OLAPdAgency = FlattendAgency(dAgencyObject)

    var dAgency334 = Parse.Object.extend("dAgency334");
    var query = new Parse.Query(dAgency334);
    query.equalTo("OLTPObjectId", dAgency["OLTPObjectId"]);
    query.equalTo("AgencyName", dAgency["dAgency.03"]);
    query.equalTo("AgencyNumber", dAgency["dAgency.02"]);
    query.equalTo("AgencyStateID", dAgency["dAgency.01"]);
    query.equalTo("PrimaryServiceType", dAgency["dAgency.09"]);
    query.containsAll("OtherServiceTypes", dAgency["dAgency.10"]);
    query.equalTo("LevelOfService", dAgency["dAgency.11"]);
    query.equalTo("OrganizationStatus", dAgency["dAgency.12"]);
    query.equalTo("OrganizationType", dAgency["dAgency.13"]);
    query.equalTo("OrganizationTaxStatus", dAgency["dAgency.14"]);
    query.equalTo("TimeZone", dAgency["dAgency.23"]);
    query.equalTo("DayLightSavingTimeUseIndicator", dAgency["dAgency.24"]);
    query.containsAll("NationalProviderID", dAgency["dAgency.25"]);
    query.containsAll("FireDepartmentID", dAgency["dAgency.26"]);
    query.equalTo("EffectiveTo", null);
    

    query.first({
        success: function (currentAgency) {
            //Is this completely new data
            if (currentAgency == undefined) {
                //console.log(currentAgency);
                currentAgency = new dAgency334();
                currentAgency.set("OLTPObjectId", dAgency["OLTPObjectId"]);
                currentAgency.set("AgencyName", dAgency["dAgency.03"]);
                currentAgency.set("AgencyNumber", dAgency["dAgency.02"]);
                currentAgency.set("AgencyStateID", dAgency["dAgency.01"]);
                currentAgency.set("PrimaryServiceType", setCodeText("dAgency.09", dAgency["dAgency.09"])[0]);
                currentAgency.set("OtherServiceTypes", setCodeText("dAgency.10", dAgency["dAgency.10"]));
                currentAgency.set("LevelOfService", setCodeText("dAgency.11", dAgency["dAgency.11"])[0]);
                currentAgency.set("OrganizationStatus", setCodeText("dAgency.12", dAgency["dAgency.12"])[0]);
                currentAgency.set("OrganizationType", setCodeText("dAgency.13", dAgency["dAgency.13"])[0]);
                currentAgency.set("OrganizationTaxStatus", setCodeText("dAgency.14", dAgency["dAgency.14"])[0]);
                currentAgency.set("TimeZone", setCodeText("dAgency.23", dAgency["dAgency.23"])[0]);
                currentAgency.set("DayLightSavingTimeUseIndicator", setCodeText("dAgency.24", dAgency["dAgency.24"])[0]);
                currentAgency.set("NationalProviderID", dAgency["dAgency.25"]);
                currentAgency.set("FireDepartmentID", dAgency["dAgency.26"]);
                currentAgency.set("EffectiveFrom", new Date());
                currentAgency.set("EffectiveTo", null);
                currentAgency.save(null, {
                    success: function (obj) {
                        console.log("New dAgency created!  " + obj.id + "  " + obj.get("AgencyName"));
                        //response.success(obj);
                    },
                    error: function (err) {
                        console.log(err);
                    }
                });
            }
            else {
                console.log("Already got one");

            }

        }
    });
    /*
            dAgency334.save(null, {
                success: function (dAgency334) {
                    // Execute any logic that should take place after the object is saved.
                    alert('New object created with objectId: ' + dAgency334.id);
                    var relation = dAgency334.relation("ServiceGroupID");
                    relation.add(dAgency334)
                    Parse.Object.saveAll(_agArray, 
                        {
    
                    success: function (objs) {
                    // objects have been saved...
                    },
                        error: function (error) {
                        alert("error");
                    }
                });
                    //alert('Need to update LAST EFFECTIVE to THIS.CREATED_DATE');
                },
                error: function (dAgency334, error) {
                    // Execute any logic that should take place if the save fails.
                    // error is a Parse.Error with an error code and description.
                    alert('Failed to create new object, with error code: ' + error.description);
                }
            });
            
    
        var AGCY = Parse.Object.extend("dAgencyServiceGroup");
        var query = new Parse.Query(AGCY);
        
        
        query.find( 
            {
                success: function (results) 
                {
                //console.log(results);
                // Results contains all Category objects to which this product belongs to
                //            alert("Successfully retrieved" + results.length + "   categories.");
            },
                error: function (error) 
                {
                    alert("Error: " + error.code + " " + error.message);
            }
        });
       
    
        /* save all the newly created objects
        Parse.Object.saveAll(_agArray, {
            success: function (objs) {
                // objects have been saved...
            },
            error: function (error) {
                alert("error");
            }
        });
        */


    //////////////////////////

};

var FlattendAgency = function (dAgencyObject) {
    if (dAgencyObject == undefined) {

        return null;
    }
    //    dAgency.AgencyServiceGroup = AgencyServiceGroupArray.slice(0);
    //   dAgency.AgencyYearGroup = AgencyYearGroupArray.slice(0);
    if (dAgencyObject.AgencyServiceGroup != undefined) {
        console.log(dAgencyObject.AgencyServiceGroup.length);
        var _agencyYearGroup = Parse.Object.extend("dAgencyYearGroup");
        var _agArray = [];
        /*        for (var i = 0; i < dAgencyObject.AgencyServiceGroup.length; i++) {
                    var _ayg = new _agencyYearGroup();
                  //  _ayg.set("parent", dAgency334.id);
                    _ayg.set("StatisticalCalendarYear", _AYGArray[i]["dAgency.15"]);
                    _ayg.set("TotalPrimaryServiceAreaSize", _AYGArray[i]["dAgency.16"]);
                    _ayg.set("TotalServiceAreaPopulation", _AYGArray[i]["dAgency.17"]);
                    _ayg.set("911EMSCallCenterVolumeperYear", _AYGArray[i]["dAgency.18"]);
                    _ayg.set("DispatchVolumeperYear", _AYGArray[i]["dAgency.19"]);
                    _ayg.set("PatientTransportVolumeperYear", _AYGArray[i]["dAgency.20"]);
                    _ayg.set("PatientContactVolumeperYear", _AYGArray[i]["dAgency.21"]);
                    _ayg.set("BillableCallsperYear", _AYGArray[i]["dAgency.22"]);
                    _agArray.push(_ayg);
          
            }
          */
    }
    var dAgency334 = Parse.Object.extend("dAgency334");
    var dAgency334 = new dAgency334();
    dAgency334.set("AgencyStateID", dAgency["dAgency.01"]);
    dAgency334.set("AgencyNumber", dAgency["dAgency.02"]);
    dAgency334.set("AgencyName", dAgency["dAgency.03"]);
    dAgency334.set("AgencyState", dAgency["dAgency.04"]);
    dAgency334.set("PrimaryServiceType", dAgency["dAgency.09"]);
    dAgency334.set("OtherServiceTypes", dAgency["dAgency.10"]);
    dAgency334.set("LevelOfService", dAgency["dAgency.11"]);
    dAgency334.set("OrganizationStatus", dAgency["dAgency.12"]);
    dAgency334.set("OrganizationType", dAgency["dAgency.13"]);
    dAgency334.set("OrganizationTaxStatus", dAgency["dAgency.14"]);
    dAgency334.set("TimeZone", dAgency["dAgency.23"]);
    dAgency334.set("DayLightSavingTimeUseIndicator", dAgency["dAgency.24"]);
    dAgency334.set("NationalProviderID", dAgency["dAgency.25"]);
    dAgency334.set("FireDepartmentID", dAgency["dAgency.26"]);
    dAgency334.set("EffectiveFrom", Date.Now);
    dAgency334.set("EffectiveFrom", null);
    //    dAgency334.set("Version2", D01)
    //    dAgency334.set("dAgencyXML", XMLString)
    //    dAgency334.set("D01XML", V2XMLString)


    /*
    for (var i = 0; i < dAgencyObject.AgencyYearGroup.length; i++)
    {
        var AYG334 = new Object;
        AYG334["StatisticalCalendarYear"] = AgencyYearGroupArray[i]["dAgency.15"];
        AYG334["TotalPrimaryServiceAreaSize"] = AgencyYearGroupArray[i]["dAgency.16"];
        AYG334["TotalServiceAreaPopulation"] = AgencyYearGroupArray[i]["dAgency.17"];
        AYG334["911EMSCallCenterVolumeperYear"] = AgencyYearGroupArray[i]["dAgency.18"];
        AYG334["DispatchVolumeperYear"] = AgencyYearGroupArray[i]["dAgency.19"];
        AYG334["PatientTransportVolumeperYear"] = AgencyYearGroupArray[i]["dAgency.20"];
        AYG334["PatientContactVolumeperYear"] = AgencyYearGroupArray[i]["dAgency.21"];
        AYG334["BillableCallsperYear"] = AgencyYearGroupArray[i]["dAgency.22"];
        AgencyYearGroup.push(AYG334);
    }


    var _nowDate = new Date().toLocaleString()

    ///////////////////////////
    for (var i = 0; i < _retArray.length ; i++) {
        XMLString = XMLString + _retArray[i];
    }


    var _agencyServiceGroup = Parse.Object.extend("dAgencyServiceGroup");

    var _agArray = [];
    _agArray = dAgencyObject["AgencyServiceGroup"].slice(0);
    console.log(_agArray);
    /*
    for (var i = 0; i < _AGArray.length; i++) {
        var _ag = new _agencyServiceGroup();
        _ag.set("parent", dAgency334.id);
        _ag.set("ServiceAreaStates", _AGArray[i]["dAgency.05"]);
        _ag.set("ServiceAreaCounties", _AGArray[i]["dAgency.06"]);
        _ag.set("CensusTracts", _AGArray[i]["dAgency.07"]);
        _ag.set("ServiceAreaZIPCodes", _AGArray[i]["dAgency.08"]);
        _agArray.push(_ag);
    };


    var _agencyYearGroup = Parse.Object.extend("dAgencyYearGroup");
    var _agArray = [];
    for (var i = 0; i < AgencyYearGroup.length; i++) {
        var _ayg = new _agencyYearGroup();
        _ayg.set("parent", dAgency334.id);
        _ayg.set("StatisticalCalendarYear", _AYGArray[i]["dAgency.15"]);
        _ayg.set("TotalPrimaryServiceAreaSize", _AYGArray[i]["dAgency.16"]);
        _ayg.set("TotalServiceAreaPopulation", _AYGArray[i]["dAgency.17"]);
        _ayg.set("911EMSCallCenterVolumeperYear", _AYGArray[i]["dAgency.18"]);
        _ayg.set("DispatchVolumeperYear", _AYGArray[i]["dAgency.19"]);
        _ayg.set("PatientTransportVolumeperYear", _AYGArray[i]["dAgency.20"]);
        _ayg.set("PatientContactVolumeperYear", _AYGArray[i]["dAgency.21"]);
        _ayg.set("BillableCallsperYear", _AYGArray[i]["dAgency.22"]);
        _agArray.push(_ayg);
    }
    */


    return dAgency334;

};

var SaveD2 = function (AgencyId, v2ObjList) {


    var newDEM = new Array();
    var tempArray = new Array();
    for (var i = 0; i < v2ObjList.length; i++)
    {
        //add these entries to db
        var DataClass = Parse.Object.extend("V2Demographics");
        var newRec = new DataClass();
        //    v2Array.push({ section:"D01",element:"D01_10",val: _val });
        var origRec = v2ObjList[i];
        newRec.set("AgencyID", AgencyId);
        newRec.set("section", origRec.section);
        newRec.set("element", origRec.element);
        newRec.set("EffectiveTo", null);
        newRec.set("EffectiveFrom", new Date());
        if (origRec.val instanceof Array) {
            newRec.set("value", origRec.val);
        }
        else {
            tempArray.push(origRec.val)
            newRec.set("value", tempArray);
        }
        newDEM[i] = newRec; //add another item to list        
    }
    var query = new Parse.Query("V2Demographics");
    query.notEqualTo("EffectiveTo", null);
    query.find().then(function (results) {
        if (results.length > 0) {
            return results[0];
        } else {
            //no object found, so i want to make an object... do i do that here?
            return null;
        }
    },
    function (error) {
        console.error("ServerDown - getModuleIfAny URGENT. Failed to retrieve from            the ModuleResults table" + +error.code + " " + error.message);
    }).then(function (obj) {
        var module;
        if (obj != null) {
            console.log("old");
            console.log(obj);
            module = obj;
            module.set("EffectiveTo", Date.now())
            //is this how i'd update some column in the database?
        }
        else {
            console.log("new");
            var theModuleClass = Parse.Object.extend("V2Demographics");
            module = new theModuleClass();
        }

        module.save();
    }).then(function (result) {
        // the object was saved.
    },
        function (error)
        {
            // there was some error.
    });
};
var saveV2 = function (AgencyId, v2ObjList) {
    var newDEM = new Array();
    var tempArray = new Array();
       for (var i = 0; i < v2ObjList.length; i++)
       {
           //add these entries to db
           var DataClass = Parse.Object.extend("V2Demographics");
           var newRec = new DataClass();
           //    v2Array.push({ section:"D01",element:"D01_10",val: _val });
           var origRec = v2ObjList[i];
               newRec.set("AgencyID", AgencyId);
               newRec.set("section", origRec.section);
               newRec.set("element", origRec.element);            
               if (origRec.val instanceof Array)
               {
                   newRec.set("value", origRec.val);
               }
               else
               {
                   tempArray.push(origRec.val)
                   newRec.set("value", tempArray);
               }
               newDEM[i] = newRec; //add another item to list        
       }
   
       Parse.Object.saveAll(newDEM, {
           success: function(list) {
               // All the objects were saved.
               //alert("ok ");  //saveAll is now finished and we can properly exit with confidence :-)
           },
           error: function(error) {
               // An error occurred while saving one of the objects.
               alert("Error: " + error.code + " " + error.message);
           },
       });
   
           //default body does not do  response.success or response.error 
   
}
var getdAgencyElementValues = function (ElementNumber) {
    var NemsisElementCode = Parse.Object.extend("NemsisElementCode");
    var query = new Parse.Query(NemsisElementCode);
    query.equalTo("elementNumber", ElementNumber);
    query.find({
        success: function (results) {
            //alert("Successfully retrieved " + results.length + " scores.");
            // Do something with the returned Parse.Object values
            // console.log(ElementNumber);
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                console.log("\"" + object.get('code') + "\"" + ' : ' + "\"" + object.get('codeDescription') + "\",");
            }
        },
        error: function (error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
}
var isRequiredStateElement = function (elementID) {
    return true;
};
var getAgencyValue = function (elementList, valueObject) {
    var _arr = [];
    for (var i = 0; i < elementList.length; i++) {
        if (elementList[i].attributes.title == valueObject) {
            if (elementList[i].attributes.value == undefined) {
                return null;
            }
            else {
                _arr.push(elementList[i].attributes.value);
            }
        }
    };
    return _arr;
};
function setV2(NEMSISElementNumber, valueArray) {
    var _retArray = [];
    switch (NEMSISElementNumber) {
        case "dAgency.09":

            if (dAgency09[0] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(dAgency09[valueArray[0]]);
            }
            break;
        case "dAgency.10":
            for (i = 0; i < valueArray.length; i++) {
                if (dAgency10[valueArray[i]] == undefined) {
                    _retArray.push(valueArray[i] + "UNDEFINED");
                }
                else {
                    _retArray.push(dAgency10[valueArray[i]]);
                }
            }
            break;
        case "dAgency.11":
            if (dAgency11[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(dAgency11[valueArray[0]]);
            }
            break;
        case "dAgency.12":
            if (dAgency12[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(dAgency12[valueArray[0]]);
            }
            break;
        case "dAgency.13":
            if (dAgency13[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(dAgency13[valueArray[0]]);
            }
            break;

        case "dAgency.23":
            if (dAgency23[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(dAgency23[valueArray[0]]);
            }
            break;

        case "dAgency.24":
            if (dAgency24[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(dAgency24[valueArray[0]]);
            }
            break;

        default:
            _retArray.push(NEMSISElementNumber = " version 2 not found");
    }
    return _retArray;

}
function setCodeText(NEMSISElementNumber, valueArray) {
    var _return = [];
    switch (NEMSISElementNumber) {
        case "dAgency.09":
            if (dAgency334_09[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = dAgency334_09[valueArray];
            }
            break;
        case "dAgency.10":
//            console.log("valueArray " + valueArray)
//            console.log("valueArray " + dAgency334_10[valueArray])
            for (i = 0; i < valueArray.length; i++) {
                if (dAgency334_10[valueArray] == undefined) {
                    _return = valueArray + " UNDEFINED";
                }
                else {
                    _return = dAgency334_10[valueArray];
                }
            }
            break;
        case "dAgency.11":
            if (dAgency334_11[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = dAgency334_11[valueArray];
            }
            break;
        case "dAgency.12":
            if (dAgency334_12[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = dAgency334_12[valueArray];
            }
            break;
        case "dAgency.13":
            if (dAgency334_13[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = dAgency334_13[valueArray];
            }
            break;

        case "dAgency.14":
            if (dAgency334_14[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = dAgency334_14[valueArray];
            }
            break;

        case "dAgency.23":
            if (dAgency334_23[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = dAgency334_23[valueArray];
            }
            break;

        case "dAgency.24":
            if (dAgency334_24[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = dAgency334_24[valueArray];
            }
            break;

        default:
            _return = " UNDEFINED";
    }
    return _return;

}
var dAgency09 = {
    "9920001": "5610",
    "9920003": "5620",
    "9920005": "5630",
    "9920007": "5660",
    "9920011": "5640",
    "9920013": "5650",
    "9920015": "5670",
    "9920017": "5660",
    "9920015": "5670",
    "9920019": "5680"
};

var dAgency10 = {
    "9920001": "5690",
    "9920003": "5700",
    "9920005": "5710",
    "9920007": "5710",
    "9920011": "5720",
    "9920013": "5730",
    "9920015": "5750",
    "9920017": "5750",
    "9920019": "5760"
};
var dAgency11 = {
    "9917001": "6010",
    "9917003": "6100",
    "9917005": "6100",
    "9917007": "6110",
    "9917009": "6120",
    "9917011": "6090",
    "9917013": "6100",
    "9917015": "6110",
    "9917017": "6111",
    "9917019": "6112",
    "9917021": "6110",
    "9917023": "6110",
    "9917025": "6111",
    "9917027": "6111",
    "9917029": "6111",
    "9917031": "6111"
};
var dAgency12 = {
    "1016001": "5870",
    "1016001": "5880",
    "1016001": "5890"
};
var dAgency13 = {
    "9912001": "5820",
    "9912003": "5830",
    "9912005": "5840",
    "9912007": "5850",
    "9912009": "5860"
};
var dAgency23 = {
    "1027017": "5900",
    "1027015": "5910",
    "1027013": "5920",
    "1027011": "5930",
    "1027009": "5940",
    "1027007": "5950",
    "1027005": "5960",
    "1027003": "5970",
    "1027001": "5960",

};
var dAgency24 = {
    "9923001": "0",
    "9923003": "1"
}
var dAgency334_09 = {
    "9920001": "911 Response (Scene) with Transport Capability",
    "9920003": "911 Response (Scene) without Transport Capability",
    "9920005": "Air Medical",
    "9920007": "ALS Intercept",
    "9920009": "Critical Care Ground Support",
    "9920011": "Hazmat",
    "9920013": "Medical Transport (Convalescent; Interfacility Transfer Hospital and Nursing Home)",
    "9920015": "Rescue",
    "9920017": "Community Paramedicine"
};
var dAgency334_10 = {
    "9920001": "911 Response (Scene) with Transport Capability",
    "9920003": "911 Response (Scene) without Transport Capability",
    "9920005": "Air Medical",
    "9920007": "ALS Intercept",
    "9920009": "Critical Care Ground Support",
    "9920011": "Hazmat",
    "9920013": "Medical Transport (Convalescent; Interfacility Transfer Hospital and Nursing Home)",
    "9920015": "Rescue",
    "9920017": "Community Paramedicine"
};
var dAgency334_11 = {
    "9917001": "2009 Advanced Emergency Medical Technician (AEMT)",
    "9917003": "2009 Emergency Medical Responder (EMR)",
    "9917005": "2009 Emergency Medical Technician",
    "9917007": "2009 Paramedic",
    "9917009": "First Responder",
    "9917011": "EMT-Basic",
    "9917013": "EMT-Intermediate",
    "9917015": "EMT-Paramedic",
    "9917017": "Nurse",
    "9917019": "Physician",
    "9917021": "Critical Care Paramedic",
    "9917023": "Community Paramedicine"
};
var dAgency334_12 = {
    "1016001": "Mixed",
    "1016003": "Non-Volunteer",
    "1016005": "Volunteer"
};
var dAgency334_13 = {
    "9912001": "Fire Department",
    "9912003": "Governmental; Non-Fire",
    "9912005": "Hospital",
    "9912007": "Private; Nonhospital",
    "9912009": "Tribal"
};
var dAgency334_14 = {
    "1018003": "Other (ex: Government)",
    "1018005": "Not For Profit",
    "1018001": "For Profit"
};
var dAgency334_23 = {
    "1027001": "All other time zones",
    "1027003": "GMT-04:00 Atlantic Time",
    "1027005": "GMT-05:00 Eastern Time",
    "1027007": "GMT-06:00 Central Time",
    "1027009": "GMT-07:00 Mountain Time",
    "1027011": "GMT-08:00 Pacific Time",
    "1027013": "GMT-09:00 Alaska",
    "1027015": "GMT-10:00 Hawaii",
    "1027017": "GMT-11:00 Midway Island; Samoa"
};
var dAgency334_24 = {
    "9923001": "No",
    "9923003": "Yes",

};
