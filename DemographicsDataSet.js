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

var dAgency = new Object;
var AgencyServiceGroup = [];
var AgencyYearGroup = [];
var AgencyServiceGroupArray = [];
var AgencyYearGroupArray = [];
var _retArray = [];
var _OLAPArray = [];
var XMLString = "";
var _v2Array = [];
var DemographicsObject = Object();
var _v3Array = [];

//////////////////////////////////

var setDemographicsObjects = function (parseObject)
    //Loops through raw Parse Object
    //Finds each NEMSIS Object
{
    var dAgencyParseObject = new Object();
    var dConfigurationParseObject = new Object();
    var dContactParseObject = new Object();
    var dDeviceParseObject = new Object();
    var dFacilityParseObject = new Object();
    var dLocationParseObject = new Object();
    var dPersonnelParseObject = new Object();
    var dStateParseObject = new Object();
    var dVehicleParseObject = new Object();
    for (var i = 0; i < parseObject.length; i++)
    {
        switch (parseObject[i].attributes.name)
        {
            case "dAgency":                
                DemographicsObject.dAgencyParseObject = parseObject[i];
                break;
            case "dConfiguration":
                DemographicsObject.dConfigurationParseObject = parseObject[i];
                break;
            case "dContact":
                DemographicsObject.dContactParseObject = parseObject[i];
                break;
            case "dDevice":
                DemographicsObject.dDeviceParseObject = parseObject[i];
                break;
            case "dFacility":
                DemographicsObject.dFacilityParseObject = parseObject[i];
                break;
            case "dLocation":
                DemographicsObject.dLocationParseObject = parseObject[i];
                break;
            case "dPersonnel":
                DemographicsObject.dPersonnelParseObject = parseObject[i];
                break;
            case "dState":
                DemographicsObject.dStateParseObject = parseObject[i];
               
                break;
            case "dVehicle":
                DemographicsObject.dVehicleParseObject = parseObject[i];
                break;
            default:
               "UNDEFINED";
        }
    };
    setdAgency(DemographicsObject.dAgencyParseObject);
    setdConfiguration(DemographicsObject.dConfigurationParseObject);
    setdContact(DemographicsObject.dContactParseObject);
    setdDevice(DemographicsObject.dDeviceParseObject);
    //setdFacility(DemographicsObject.dFacilityParseObject);
    setdLocation(DemographicsObject.dLocationParseObject);
    setdPersonnel(DemographicsObject.dPersonnelParseObject);
    setdState(DemographicsObject.dStateParseObject);

    setdVehicle(DemographicsObject.dVehicleParseObject);
    return DemographicsObject;
};


///////////////////////////////

var getSectionIndex = function (sectionObject, sectionName)
    //Returns an array of index values for a given sectionName within a sectionObject
    // if sectionName does not exist within the sectionObject, return -1
{

    var _retValue = [];
    for (var d = 0; d <= sectionObject.sections.length - 1; d++) {
        if (sectionObject.sections[d].attributes.name == sectionName) {
            _retValue.push(d);
        }
    }
    if (_retValue.length == 0) {
        _retValue.push(-1);
    }
    return _retValue;
};

var setdAgency = function (agencyObject) {

//console.log(agencyObject)
    //businessObject = All of the dAgencys Sections/Elements.
    //objects required to satisfy NEMSIS and DIM
    //Get Original Objects from OLTP, validate against section/domain rules
    //Collect each Error and push to ErrorList
    //On complete, if ErrorList.Length==0, 
    //  else commit to OLAP

    var _arr = [];
    var _arrV2 = [];
    dAgency["OLTPObjectId"] = agencyObject["agencyId"];

    _retArray.push("<dAgency>" + '\n');
    _OLAPArray.push("<dAgency>" + '\n');

    //dAgency.01/////////
    _val = getValue(agencyObject.attributes.elements, "dAgency.01");
    if (_val == null) {
        ErrorList.push("dAgency.01 MANDATORY National Element");
        _v3Array.push({ section: "dAgency", element: "dAgency.01", val: null });
    }
    else
    {
        dAgency["dAgency.01"] = _val[0];
        _retArray.push('\t' + "<dAgency.01>" + _val[0] + "</dAgency.01>" + '\n');
        _OLAPArray.push('\t' + "<AgencyStateID>" + _val[0] + "</AgencyStateID>" + '\n');
        _v3Array.push({ section: "dAgency", element: "dAgency.01", val: _val[0] });
    };

    //dAgency.02/////////
    _val = getValue(agencyObject.attributes.elements, "dAgency.02");
    if (_val == null)
    {
        ErrorList.push("AgencyNumber: MANDATORY V2 and V3 ");
        _v3Array.push({ section: "dAgency", element: "dAgency.02", val: null });

    }
    else {
        dAgency["dAgency.02"] = _val[0];
        _retArray.push('\t' + "<dAgency.02>" + _val[0] + "</dAgency.02>" + '\n');
        _v2Array.push({ section: "D01", element: "D01_01", val: _val[0] });
        _OLAPArray.push('\t' + "<AgencyNumber>" + _val[0] + "</AgencyNumber>" + '\n');
        _v3Array.push({ section: "dAgency", element: "dAgency.02", val: _val[0] });

    };

    //dAgency.03///////
    _val = getValue(agencyObject.attributes.elements, "dAgency.03");
    if (_val == null) {
        ErrorList.push("dAgency.03 MANDATORY DIM Element");

        if (isRequiredStateElement("dAgency.03") == true) {
            _retArray.push('\t' + "<dAgency.03" + v3NOT_RECORDED + '\n');
            _OLAPArray.push('\t' + "<AgencyName>" + "NOT RECORDED" + "</AgencyName>" + '\n');
            _v3Array.push({ section: "dAgency", element: "dAgency.03", val: "NOT RECORDED" });

            dAgency["dAgency.03"] = v3NOT_RECORDED;
        }
        else {
            _v3Array.push({ section: "dAgency", element: "dAgency.03", val: "NOT REPORTING" });
            dAgency["dAgency.03"] = v3NOT_REPORTING;
            _retArray.push('\t' + "<dAgency.03" + NIL_V3NOT_REPORTING + '\n');
            _OLAPArray.push('\t' + "<AgencyName>" + "NOT REPORTING" + "</AgencyName>" + '\n');
        }
    }
    else
    {
        dAgency["dAgency.03"] = _val[0];
        _retArray.push('\t' + "<dAgency.03>" + _val[0] + "</dAgency.03>" + '\n');
        _v2Array.push({ section: "D01", element: "D01_02", val: _val[0] });
    };

    //dAgency.04/////////
    _val = getValue(agencyObject.attributes.elements, "dAgency.04");
    if (_val == null) {
        ErrorList.push("dAgency.04 Mandatory Element");
        _v3Array.push({ section: "dAgency", element: "dAgency.04", val: "null" });

    }
    else
    {
        _v3Array.push({ section: "dAgency", element: "dAgency.04", val: _val[0] });
        dAgency["dAgency.04"] = _val;
        _retArray.push('\t' + "<dAgency.04>" + _val[0] + "</dAgency.04>" + '\n');
        _v2Array.push({ section: "D01", element: "D01_03", val: _val[0] });
        _OLAPArray.push('\t' + "<EMSAgencyState>" + _val[0] + "</EMSAgencyState>" + '\n');
    };

    ///////////////////////AgencyServiceGroup

    _sectionIndex = getSectionIndex(agencyObject.attributes, "dAgency.AgencyServiceGroup");


    for (var x = 0; x < _sectionIndex.length; x++) {

        _retArray.push('\t' + "<dAgency.AgencyServiceGroup>" + '\n');
        _OLAPArray.push('\t' + "<dAgency.AgencyServiceGroup>" + '\n');
        var AG = new Object;

        _elementList = agencyObject.attributes.sections[_sectionIndex[x]].attributes.elements;

        //Parent Object.  If no value, cannot process Group

        _val = getValue(_elementList, "dAgency.05");
        if (_val == null)
        {
            _v3Array.push({ section: "dAgency", element: "dAgency.05", val: null });
            ErrorList.push("dAgency.05 MANDATORY National Element");
        }
        else
        {
            _v3Array.push({ section: "dAgency", element: "dAgency.05", val: _val[0] });
            AG["dAgency.05"] = _val[0];
            _retArray.push('\t\t' + "<dAgency.05>" + _val[0] + "</dAgency.05>" + '\n');
            _OLAPArray.push('\t\t' + "<EMSAgencyServiceAreaStates>" + _val[0] + "</EMSAgencyServiceAreaStates>" + '\n');
        };

        _val = getValue(_elementList, "dAgency.06");
        if (_val == null) {
            ErrorList.push("dAgency.06 MANDATORY National Element");
            _v3Array.push({ section: "dAgency", element: "dAgency.05", val:null });
        }
        else {
            _arr = [];
            for (var i = 0; i < _val.length; i++)
            {
                _v3Array.push({ section: "dAgency", element: "dAgency.05", val: _val[i] });
                _arr.push(_val[i]);
                _retArray.push('\t\t' + "<dAgency.06>" + _val[i] + "</dAgency.06>" + '\n');
                _OLAPArray.push('\t\t' + "<EMSAgencyServiceAreaCounties>" + _val[i] + "</EMSAgencyServiceAreaCounties>" + '\n');
            }
            AG["dAgency.06"] = _arr.slice(0);
            _v2Array.push({ section: "D01", element: "D01_04", val: _arr });
        };

        //dAgency.07/////////
        _val = getValue(_elementList, "dAgency.07");
        if (_val == null)
        {
            _v3Array.push({ section: "dAgency", element: "dAgency.07", val: "NOT RECORDED" });

            AG["dAgency.07"] = v3NOT_RECORDED;
            _OLAPArray.push('\t\t' + "<EMSAgencyCensusTracts>" + "NOT_RECORDED" + "</EMSAgencyCensusTracts>" + '\n');
            _retArray.push('\t\t' + "<dAgency.07" + NIL_V3NOT_RECORDED + '\n');
        }
        else
        {
            _arr = [];
            for (var i = 0; i < _val.length; i++) {
                _v3Array.push({ section: "dAgency", element: "dAgency.07", val: _val[i] });
                _arr.push(_val[i]);
                _retArray.push('\t\t' + "<dAgency.07>" + _val[i] + "</dAgency.07>" + '\n');
                _OLAPArray.push('\t\t' + "<EMSAgencyCensusTracts>" + _val[i] + "</EMSAgencyCensusTracts>" + '\n');
            }
            AG["dAgency.07"] = _arr.slice(0);
        };

        //dAgency.08//////
        _val = getValue(_elementList, "dAgency.08");
        if (_val == null) {
            AG["dAgency.08"] = v3NOT_RECORDED;
            _v3Array.push({ section: "dAgency", element: "dAgency.08", val: "NOT RECORDED" });

            _retArray.push('\t\t' + "<dAgency.08" + NIL_V3NOT_RECORDED + '\n');
            _OLAPArray.push('\t\t' + "<EMSAgencyServiceAreaZIPCodes>" + "NOT_RECORDED" + "</EMSAgencyServiceAreaZIPCodes>" + '\n');
        }
        else {
            _arr = [];
            for (var i = 0; i < _val.length; i++)
            {
                _v3Array.push({ section: "dAgency", element: "dAgency.08", val: _val[i] });

                _arr.push(_val[i]);
                _retArray.push('\t\t' + "<dAgency.08>" + _val[i] + "</dAgency.08>" + '\n');
                _OLAPArray.push('\t\t' + "<EMSAgencyServiceAreaZIPCodes>" + _val[i] + "</EMSAgencyServiceAreaZIPCodes>" + '\n');
            }
            AG["dAgency.08"] = _arr.slice(0);
        }
        _retArray.push('\t' + "</dAgency.AgencyServiceGroup>" + '\n');
        _OLAPArray.push('\t' + "</dAgency.AgencyServiceGroup>" + '\n');
        AgencyServiceGroupArray.push(AG);
    };
 
    //dAgency.09///////
    _val = getValue(agencyObject.attributes.elements, "dAgency.09");
    if (_val == null) {
        ErrorList.push("dAgency.09 MANDATORY National Element");
        _v3Array.push({ section: "dAgency", element: "dAgency.09", val: null });

    }
    else
    {
        _v3Array.push({ section: "dAgency", element: "dAgency.09", val: _val[0] });

        dAgency["dAgency.09"] = _val[0];
        _v2Array.push({ section: "D01", element: "D01_05", val: setV2("dAgency.09", _val[0]) });
        _retArray.push('\t' + "<dAgency.09>" + _val[0] + "</dAgency.09>" + '\n');
        _OLAPArray.push('\t' + "<PrimaryTypeofService>" + setCodeText("dAgency.09", _val[0]) + "</PrimaryTypeofService>" + '\n');
    };

    //dAgency.10//////
    _val = getValue(agencyObject.attributes.elements, "dAgency.10");

    if (_val == null) {

        if (isRequiredStateElement("dAgency.10") == true) {
            _v3Array.push({ section: "dAgency", element: "dAgency.10", val: "NOT RECORDED" });
            _retArray.push('\t' + "<dAgency.10" + NIL_V3NOT_RECORDED + '\n');
            _v2Array.push({ section: "D01", element: "D01_05", val: v2NOT_RECORDED });
            _OLAPArray.push('\t\t' + "<OtherTypesofService>" + "NOT_RECORDED" + "</OtherTypesofService>" + '\n');
        }
        else
        {
            _v3Array.push({ section: "dAgency", element: "dAgency.10", val: "NOT REPORTING" });

            _retArray.push('\t' + "<dAgency.10" + NIL_V3NOT_REPORTING + '\n');
            _OLAPArray.push('\t\t' + "<OtherTypesofService>" + "NOT_REPORTING" + "</OtherTypesofService>" + '\n');
            _v2Array.push({ section: "D01", element: "D01_05", val: v2NOT_REPORTING });
        }
    }
    else {
        for (var i = 0; i < _val.length; i++) {
            _arr.push(_val[i]);
            _v3Array.push({ section: "dAgency", element: "dAgency.10", val: _val[i] });
            _arrV2.push(setV2("dAgency.10", _val[i]))
            _retArray.push('\t' + "<dAgency.10>" + _val[i] + "</dAgency.10>" + '\n');
            _OLAPArray.push('\t' + "<OtherTypesofService>" + setCodeText("dAgency.10", _val[i]) + "</OtherTypesofService>" + '\n');
        }
        dAgency["dAgency.10"] = _arr.slice(0);
        _v2Array.push({ section: "D01", element: "D01_05", val: _arrV2 });
    };


    //dAgency.11////////
    _val = getValue(agencyObject.attributes.elements, "dAgency.11");
    if (_val == null) {
        ErrorList.push("dAgency.11 MANDATORY Element");
        _v3Array.push({ section: "dAgency", element: "dAgency.11", val:null });

    }
    else {
        dAgency["dAgency.11"] = _val[0];
        _v3Array.push({ section: "dAgency", element: "dAgency.11", val: _val[0] });
        _v2Array.push({ section: "D01", element: "D01_07", val: setV2("dAgency.11", _val[0]) });
        _retArray.push('\t' + "<dAgency.11>" + _val[0] + "</dAgency.11>" + '\n');
        _OLAPArray.push('\t' + "<LevelofService>" + _val[0] + "</LevelofService>" + '\n');
    };

    //dAgency.12
    _val = getValue(agencyObject.attributes.elements, "dAgency.12");
    if (_val == null) {
        ErrorList.push("dAgency.12 MANDATORY Element");
        _v3Array.push({ section: "dAgency", element: "dAgency.12", val: null });

    }
    else {
        _v3Array.push({ section: "dAgency", element: "dAgency.12", val: _val[0] });
        dAgency["dAgency.12"] = _val[0];
        _v2Array.push({ section: "D01", element: "D01_09", val: setV2("dAgency.12", _val[0]) });
        _retArray.push('\t' + "<dAgency.12>" + _val[0] + "</dAgency.12>" + '\n');
        _OLAPArray.push('\t' + "<OrganizationStatus>" + _val[0] + "</OrganizationStatus>" + '\n');
    };

    //dAgency.13////////
    _val = getValue(agencyObject.attributes.elements, "dAgency.13");
    if (_val == null) {
        ErrorList.push("dAgency.13 MANDATORY Element");
        _v3Array.push({ section: "dAgency", element: "dAgency.13", val: null });

    }
    else {
        _v3Array.push({ section: "dAgency", element: "dAgency.13", val: _val[0] });
        _v2Array.push({ section: "D01", element: "D01_08", val: setV2("dAgency.13", _val[0]) });
        dAgency["dAgency.13"] = _val[0];
        _retArray.push('\t' + "<dAgency.13>" + _val[0] + "</dAgency.13>" + '\n');
        _OLAPArray.push('\t' + "<OrganizationalType>" + _val[0] + "</OrganizationalType>" + '\n');
    };

    //dAgency.14////////
    _val = getValue(agencyObject.attributes.elements, "dAgency.14");
    if (_val == null)
    {
        ErrorList.push("dAgency.14  MANDATORY Element");
        _v3Array.push({ section: "dAgency", element: "dAgency.14", val: null });

    }
    else
    {
        _v3Array.push({ section: "dAgency", element: "dAgency.14", val: _val[0] });
        dAgency["dAgency.14"] = _val[0];
        _retArray.push('\t' + "<dAgency.14>" + _val[0] + "</dAgency.14>" + '\n');
        _OLAPArray.push('\t' + "< EMSAgencyOrganizationalTaxStatus>" + _val[0] + "</EMSAgencyOrganizationalTaxStatus>" + '\n');

    };

    ///////////////////////AgencyYearGroup
    _sectionIndex = getSectionIndex(agencyObject.attributes, "dAgency.AgencyYearGroup");
  //  _sectionIndex = getSectionIndex(agencyObject, "dAgency.AgencyYearGroup");
    for (var x = 0; x < _sectionIndex.length; x++) {
        _retArray.push('\t' + "<dAgency.AgencyYearGroup>" + '\n');
        _OLAPArray.push('\t' + "<dAgency.AgencyYearGroup>" + '\n');

        var YG = new Object;
//        _elementList = agencyObject.sections[_sectionIndex[x]].attributes.elements;
        _elementList = agencyObject.attributes.sections[_sectionIndex[x]].attributes.elements;


        //dAgency.15///////
        _val = getValue(_elementList, "dAgency.15");
        if (_val == null)
        {
            _v3Array.push({ section: "dAgency", element: "dAgency.15", val:null });

            ErrorList.push("dAgency.15 MANDATORY Element");
        }
        else
        {
            _v3Array.push({ section: "dAgency", element: "dAgency.15", val: _val[0] });
            YG["dAgency.15"] = _val[0];
            _retArray.push('\t\t' + "<dAgency.15>" + _val[0] + "</dAgency.15>" + '\n');
            _v2Array.push({ section: "D01", element: "D01_10", val: _val[0] });
            _OLAPArray.push('\t\t' + "<StatisticalCalendarYear>" + _val[0] + "</StatisticalCalendarYear>" + '\n');
        };

        //dAgency.16///////
        _val = getValue(_elementList, "dAgency.16");
        if (_val == null) {
            _v3Array.push({ section: "dAgency", element: "dAgency.16", val: "NOT RECORDED" });

            YG["dAgency.16"] = v3NOT_RECORDED;
            _retArray.push('\t\t' + "<dAgency.16" + NIL_V3NOT_RECORDED + '\n');
            _OLAPArray.push('\t\t' + "<TotalPrimaryServiceAreaSize>" + "NOT_RECORDED" + "</TotalPrimaryServiceAreaSize>" + '\n');
        }
        else {
            _v3Array.push({ section: "dAgency", element: "dAgency.16", val: _val[0] });

            YG["dAgency.16"] = _val[0];
            _retArray.push('\t\t' + "<dAgency.16>" + _val[0] + "</dAgency.16>" + '\n');
            _v2Array.push({ section: "D01", element: "D01_12", val: setV2("dAgency.16", _val[0]) });
            _OLAPArray.push('\t\t' + "<TotalPrimaryServiceAreaSize>" + _val[0] + "</TotalPrimaryServiceAreaSize>" + '\n');
        };

        //dAgency.17///////
        _val = getValue(_elementList, "dAgency.17");
        if (_val == null) {
            _v3Array.push({ section: "dAgency", element: "dAgency.17", val: "NOT RECORDED" });
            YG["dAgency.17"] = v3NOT_RECORDED;
            _retArray.push('\t\t' + "<dAgency.17" + NIL_V3NOT_RECORDED + '\n');
            _OLAPArray.push('\t\t' + "<TotalServiceAreaPopulation>" + "NOT_RECORDED" + "</TotalServiceAreaPopulation>" + '\n');
        }
        else {
            _v3Array.push({ section: "dAgency", element: "dAgency.17", val: _val[0] });

            YG["dAgency.17"] = _val[0];
            _retArray.push('\t\t' + "<dAgency.17>" + _val[0] + "</dAgency.17>" + '\n');
            _v2Array.push({ section: "D01", element: "D01_13", val: _val[0] });
            _OLAPArray.push('\t\t' + "<TotalServiceAreaPopulation>" + _val[0] + "</TotalServiceAreaPopulation>" + '\n');
        };

        //dAgency.18///////////
        _val = getValue(_elementList, "dAgency.18");
        if (_val == null) {
            _v3Array.push({ section: "dAgency", element: "dAgency.18", val: "NOT RECORDED" });

            YG["dAgency.18"] = v3NOT_RECORDED;
            _retArray.push('\t\t' + "<dAgency.18" + NIL_V3NOT_RECORDED + '\n');
            _OLAPArray.push('\t\t' + "<EMS911CallCenterVolumeperYear>" + "NOT_RECORDED" + "</EMS911CallCenterVolumeperYear>" + '\n');
        }
        else {
            _v3Array.push({ section: "dAgency", element: "dAgency.18", val: _val[0] });

            YG["dAgency.18"] = _val[0];
            _retArray.push('\t\t' + "<dAgency.18>" + _val[0] + "</dAgency.18>" + '\n');
            _v2Array.push({ section: "D01", element: "D01_14", val: _val[0] });
            _OLAPArray.push('\t\t' + "<EMS911CallCenterVolumeperYear>" + _val[0] + "</EMS911CallCenterVolumeperYear>" + '\n');
        };

        //dAgency.19/////////
        _val = getValue(_elementList, "dAgency.19");
        if (_val == null) {
            _v3Array.push({ section: "dAgency", element: "dAgency.19", val:null });

            YG["dAgency.19"] = v3NOT_RECORDED;
            _OLAPArray.push('\t\t' + "<EMSDispatchVolumeperYear>" + "NOT_RECORDED" + "</EMSDispatchVolumeperYear>" + '\n');
            _retArray.push('\t\t' + "<dAgency.19" + NIL_V3NOT_RECORDED + '\n');
        }
        else {
            _v3Array.push({ section: "dAgency", element: "dAgency.19", val: _val[0] });
            YG["dAgency.19"] = _val[0];
            _retArray.push('\t\t' + "<dAgency.19>" + _val[0] + "</dAgency.19>" + '\n');
            _v2Array.push({ section: "D01", element: "D01_15", val: _val[0] });
            _OLAPArray.push('\t\t' + "<EMSDispatchVolumeperYear>" + _v_val[0] + "</EMSDispatchVolumeperYear>" + '\n');
        };


        _val = getValue(_elementList, "dAgency.20");
        if (_val == null) {
            _v3Array.push({ section: "dAgency", element: "dAgency.20", val: "NOT RECORDED" });

            YG["dAgency.20"] = v3NOT_RECORDED;
            _OLAPArray.push('\t\t' + "<EMSPatientTransportVolumeperYear>" + "NOT_RECORDED" + "</EMSPatientTransportVolumeperYear>" + '\n');
            _retArray.push('\t\t' + "<dAgency.20" + NIL_V3NOT_RECORDED + '\n');
        }
        else {
            _v3Array.push({ section: "dAgency", element: "dAgency.20", val: _val[0] });

            YG["dAgency.20"] = _val[0];
            _retArray.push('\t\t' + "<dAgency.20>" + _val[0] + "</dAgency.20>" + '\n');
            _v2Array.push({ section: "D01", element: "D01_16", val: _val[0] });
            _OLAPArray.push('\t\t' + "<EMSPatientTransportVolumeperYear>" + _val[0] + "</EMSPatientTransportVolumeperYear>" + '\n');
        };

        //dAgency.21//////
        _val = getValue(_elementList, "dAgency.21");
        if (_val == null) {
            _v3Array.push({ section: "dAgency", element: "dAgency.21", val: "NOT RECORDED" });

            YG["dAgency.21"] =
            _retArray.push('\t\t' + "<dAgency.21" + NIL_V3NOT_RECORDED + '\n');
            _OLAPArray.push('\t\t' + "<EMSPatientContactVolumeperYear>" + "NOT_RECORDED" + "</EMSPatientContactVolumeperYear>" + '\n');
        }
        else {
            _v3Array.push({ section: "dAgency", element: "dAgency.21", val: _val[0] });

            YG["dAgency.21"] = _val[0];
            _retArray.push('\t\t' + "<dAgency.21>" + _val[0] + "</dAgency.21>" + '\n');
            _v2Array.push({ section: "D01", element: "D01_17", val: _val[0] });
            _OLAPArray.push('\t\t' + "<EMSPatientContactVolumeperYear>" + _val[0] + "</EMSPatientContactVolumeperYear>" + '\n');
        };

        //dAgency.22////
        _val = getValue(_elementList, "dAgency.22");
        if (_val == null) {
            if (isRequiredStateElement("dAgency.22") == true) {
                _v3Array.push({ section: "dAgency", element: "dAgency.22", val: "NOT RECORDED" });

                YG["dAgency.22"] = v3NOT_RECORDED;
                _retArray.push('\t\t' + "<dAgency.22" + NIL_V3NOT_RECORDED + '\n');
                _OLAPArray.push('\t\t' + "<EMSBillableCallsperYear>" + "NOT_RECORDED" + "</EMSBillableCallsperYear>" + '\n');
            }
            else {
                _v3Array.push({ section: "dAgency", element: "dAgency.21", val: "NOT REPORTING" });

                YG["dAgency.22"] = v2NOT_REPORTING;
                _retArray.push('\t\t' + "<dAgency.22" + NIL_V3NOT_REPORTING + '\n');
                _OLAPArray.push('\t\t' + "<EMSBillableCallsperYear" + V3NOT_REPORTING + '\n');
            }
        }
        else
        {
            _v3Array.push({ section: "dAgency", element: "dAgency.22", val: _val[0] });
            YG["dAgency.22"] = _val[0];
            _retArray.push('\t\t' + "<dAgency.22>" + _val[0] + "</dAgency.22>" + '\n');
            _v2Array.push({ section: "D01", element: "D01_18", val: _val[0] });
            _OLAPArray.push('\t\t' + "<EMSBillableCallsperYear>" + _val[0] + "</EMSBillableCallsperYear>" + '\n');
        };

        _retArray.push('\t' + "</dAgency.AgencyYearGroup>" + '\n');
        _OLAPArray.push('\t' + "</dAgency.AgencyYearGroup>" + '\n');
        AgencyYearGroupArray.push(YG);
    };

    ////////////////////////

    //dAgency.23///////
    _val = getValue(agencyObject.attributes.elements, "dAgency.23");
    if (_val == null)
    {
        _v3Array.push({ section: "dAgency", element: "dAgency.23", val: null });
        dAgency["dAgency.23"] = null;
        _v2Array.push({ section: "D01", element: "D01_19", val: null });
        _OLAPArray.push('\t' + "<EMSAgencyTimeZone>" + null + "</EMSAgencyTimeZone>" + '\n');
        _retArray.push('\t' + "<dAgency.23>" + null + "</dAgency.23>" + '\n');
    }
    else {
        _v3Array.push({ section: "dAgency", element: "dAgency.23", val: _val[0] });

        dAgency["dAgency.23"] = _val[0];
        _v2Array.push({ section: "D01", element: "D01_19", val: setV2("dAgency.23", _val[0]) });
        _retArray.push('\t' + "<dAgency.23>" + _val[0] + "</dAgency.23>" + '\n');
        _OLAPArray.push('\t' + "<EMSAgencyTimeZone>" + _val[0] + "</EMSAgencyTimeZone>" + '\n');
    };

    //dAgency.24//////////////
    _val = getValue(agencyObject.attributes.elements, "dAgency.24");
    if (_val == null) {
        _v3Array.push({ section: "dAgency", element: "dAgency.24", val: null });

        dAgency["dAgency.24"] = null;
        _v2Array.push({ section: "D01", element: "D01_20", val: null });
        _OLAPArray.push('\t' + "<EMSAgencyDaylightSavingsTimeUse>" + null + "</EMSAgencyDaylightSavingsTimeUse>" + '\n');
    }
    else {
        _v3Array.push({ section: "dAgency", element: "dAgency.24", val: _val[0] });

        dAgency["dAgency.24"] = _val[0];
        _v2Array.push({ section: "D01", element: "D01_20", val: setV2("dAgency.24", _val[0]) });
        _retArray.push('\t' + "<dAgency.24>" + _val[0] + "</dAgency.24>" + '\n');
        _OLAPArray.push('\t' + "<EMSAgencyDaylightSavingsTimeUse>" + _val[0] + "</EMSAgencyDaylightSavingsTimeUse>" + '\n');
    };

    //dAgency.25//////////////
    _val = getValue(agencyObject.attributes.elements, "dAgency.25");
    if (_val == null) {
        _v3Array.push({ section: "dAgency", element: "dAgency.25", val: null });

        _retArray.push('\t' + "<dAgency.25" + NIL_V3NOT_RECORDED + '\n');
        dAgency["dAgency.25"] = v3NOT_RECORDED;
        _v2Array.push({ section: "D01", element: "D01_20", val: v2NOT_RECORDED });
        _OLAPArray.push('\t' + "<NationalProviderIdentifier>" + "NOT RECORDED" + "</NationalProviderIdentifier>" + '\n');
    }
    else {
        _arr = [];
        _arrV2 = [];
        for (var i = 0; i < _val.length ; i++) {
            _v3Array.push({ section: "dAgency", element: "dAgency.25", val: _val[i] });

            _arr.push(_val[i]);
            _arrV2.push(setV2("dAgency.25", _val[i]));
            _retArray.push('\t' + "<dAgency.25>" + _val[i] + "</dAgency.25>" + '\n');
            _OLAPArray.push('\t' + "<NationalProviderIdentifier>" + _val[i] + "</NationalProviderIdentifier>" + '\n');
        }
        dAgency["dAgency.25"] = _arr.slice(0);
        _v2Array.push({ section: "D01", element: "D01_21", val: _arrV2 });
    };

    //dAgency.26/////////////
    _val = getValue(agencyObject.attributes.elements, "dAgency.26");
    if (_val == null) {
        _v3Array.push({ section: "dAgency", element: "dAgency.26", val: "NOT RECORDED" });

        dAgency["dAgency.26"] = v3NOT_RECORDED;
        _retArray.push('\t' + "<dAgency.26" + NIL_V3NOT_RECORDED + '\n');
        _OLAPArray.push('\t' + "<FireDepartmentIDNumber>" + "NOT RECORDED" + "</FireDepartmentIDNumber>" + '\n');
    }
    else {
        _arr = [];
        for (var i = 0; i < agencyObject.length ; i++) {
            _v3Array.push({ section: "dAgency", element: "dAgency.26", val: _val[i] });

            _arr.push(_val[i]);
            _valArray.push(_val[i]);
            _retArray.push('\t' + "<dAgency.26>" + _val[i] + "</dAgency.26>" + '\n');
            _OLAPArray.push('\t' + "<FireDepartmentIDNumber>" + _val[i] + "</FireDepartmentIDNumber>" + '\n');
        }
        dAgency["dAgency.26"] = _arr.slice(0);
    };


    _OLAPArray.push("</dAgency>");
    _retArray.push("</dAgency>");

    /////////////////////////////////////////////
    //dAgency Assembly
    //Build XML String

    //Send back Errors - Dylan, check ErrorList.Length on each Submit
    var Errors = [];
    for (var i = 0; i < ErrorList.length ; i++) {
        Errors.push(ErrorList[i]);
    };
    dAgency.Errors = Errors;;

    //XMLString to dAgency
    for (var i = 0; i < _retArray.length ; i++) {
        XMLString = XMLString + _retArray[i];
    };

    dAgency.V334XMLArray = _retArray;

    var OLAPXMLString = "";
    for (var i = 0; i < _OLAPArray.length ; i++) {
        OLAPXMLString = OLAPXMLString + _OLAPArray[i];
    };

    dAgency.OLAPXMLArray = _OLAPArray;

    var v2XMLString = "";
    for (var i = 0; i < _v2Array.length ; i++) {
        v2XMLString = v2XMLString + _v2Array[i];
    };

    dAgency.V221XMLArray = _v2Array;

    if (AgencyServiceGroupArray.length > 0) {
        dAgency.AgencyServiceGroup = AgencyServiceGroupArray;
    };

    if (AgencyYearGroupArray.length > 0) {
        dAgency.AgencyYearGroup = AgencyYearGroupArray;
    }

    dAgency.v3Array = _v3Array;
    dAgency.XMLDocument = XMLString;


    if (_OLAPArray.length > 0) {
        dAgency.OLAPXML = OLAPXMLString;
    }



};

var setdConfiguration = function (configurationObject) {

    var _retArray = [];
    var _OLAPArray = [];
    var _v2Array = [];
    var _arr = []
    var _arrV2 = []
    var dConfiguration = new Object();
    var ConfigurationGroup = new Object();
    _retArray.push("<dConfiguration>" + '\n');
    _OLAPArray.push("<dConfiguration>" + '\n');

    for (var xx = 0; xx < configurationObject.attributes.sections.length; xx++) {
        _retArray.push('\t' + "<dConfigurationGroup>" + '\n');
        _OLAPArray.push('\t' + "<dConfigurationGroup>" + '\n');

        ///dConfiguration.01 
        var elementList = configurationObject.attributes.sections[xx].attributes.elements;
        _val = getValue(elementList, "dConfiguration.01");

        if (_val == null) {
            ErrorList.push("dConfiguration.01 Mandatory Element");
        }
        else {
            ConfigurationGroup["dConfiguration.01"] = _val;
            _retArray.push('\t\t' + "<dConfiguration.01>" + _val + "</dConfiguration.01>" + '\n');
            _OLAPArray.push('\t\t' + "<ConfigurationState>" + _val + "</ConfigurationState>" + '\n');
        };

        ///dConfiguration.02 
        _val = getValue(elementList, "dConfiguration.02");
        if (_val == null) {
            ErrorList.push("dConfiguration.02 Mandatory Element");
        }
        else {
            _arr = [];
            _arrV2 = [];
            for (var t = 0; t < _val.length; t++) {
                _arr.push(_val[t]);
                _arrV2.push(setV2("dConfiguration.02", _val[t]));

                _retArray.push('\t\t' + "<dConfiguration.02>" + _val[t] + "</dConfiguration.02>" + '\n');
                _OLAPArray.push('\t\t' + "<LicensureLevels>" + setCodeText("dConfiguration.02", _val[t]) + "</LicensureLevels>" + '\n');
            }
            ConfigurationGroup["dConfiguration.02"] = _arr.slice(0);
            _v2Array.push({ section: "D04", element: "D04_01", val: _arrV2 });
        };

        ///dConfiguration.03 
        _val = getValue(elementList, "dConfiguration.03");
        if (_val == null) {
            if (isRequiredStateElement("dConfiguration.03") == true) {
                ConfigurationGroup["dConfiguration.03"] = v3NOT_RECORDED;
                _retArray.push('\t\t' + "<dConfiguration.03" + NIL_V3NOT_RECORDED + '\n');
                _OLAPArray.push('\t\t' + "<ProceduresPermittedbytheState>" + "NOT_RECORDED" + "</ProceduresPermittedbytheState>" + '\n');
            }
        }
        else {
            _arr = [];
            for (var t = 0; t < _val.length; t++) {
                _arr.push(_val[t]);
                _retArray.push('\t\t' + "<dConfiguration.03>" + _val[t] + "</dConfiguration.03>" + '\n');
                _OLAPArray.push('\t\t' + "<ProceduresPermittedbytheState>" + setCodeText("dConfiguration.03", _val[t]) + "</ProceduresPermittedbytheState>" + '\n');
            }
            ConfigurationGroup["dConfiguration.03"] = _arr.slice(0);
        };

        ///dConfiguration.04 
        _val = getValue(elementList, "dConfiguration.04");
        if (_val == null) {
            if (isRequiredStateElement("dConfiguration.04") == true) {
                ConfigurationGroup["dConfiguration.04"] = v3NOT_RECORDED;
                _retArray.push('\t\t' + "<dConfiguration.04" + NIL_V3NOT_RECORDED + '\n');
                _OLAPArray.push('\t\t' + "<MedicationsPermittedbytheState>" + "NOT_RECORDED" + "</MedicationsPermittedbytheState>" + '\n');
            }
        }
        else {
            _arr = [];
            for (var t = 0; t < _val.length; t++) {
                _arr.push(_val[t]);
                _retArray.push('\t\t' + "<dConfiguration.04>" + _val[t] + "</dConfiguration.04>" + '\n');
                _OLAPArray.push('\t\t' + "<MedicationsPermittedbytheState>" + setCodeText("dConfiguration.04", _val[t]) + "</ MedicationsPermittedbytheState>" + '\n');
            }
            ConfigurationGroup["dConfiguration.04"] = _arr.slice(0);
        };

        ///dConfiguration.05 
        _val = getValue(elementList, "dConfiguration.05");
        if (_val == null) {
            if (isRequiredStateElement("dConfiguration.05") == true) {
                ConfigurationGroup["dConfiguration.05"] = v3NOT_RECORDED;
                _retArray.push('\t\t' + "<dConfiguration.05" + NIL_V3NOT_RECORDED + '\n');
                _OLAPArray.push('\t\t' + "<ProtocolsPermittedbytheState>" + "NOT_RECORDED" + "</ProtocolsPermittedbytheState>" + '\n');
            }
        }
        else {
            _arr = []
            for (var t = 0; t < _val.length; t++) {
                _arr.push(_val[t]);
                _retArray.push('\t\t' + "<dConfiguration.05>" + _val[t] + "</dConfiguration.05>" + '\n');
                _OLAPArray.push('\t\t' + "<ProtocolsPermittedbytheState>" + setCodeText("dConfiguration.05", _val[t]) + "</ProtocolsPermittedbytheState>" + '\n');
            }
            ConfigurationGroup["dConfiguration.05"] = _arr.slice(0);

        };


        ///////////////////////ProcedureGroup
//        _sectionIndex = getSectionIndex(agencyObject.attributes, "dAgency.AgencyServiceGroup");
        _sectionIndex = getSectionIndex(configurationObject.attributes.sections[xx].attributes, "dConfiguration.ProcedureGroup");
        for (var x = 0; x < _sectionIndex.length; x++) {
            _retArray.push('\t\t' + "<dConfiguration.ProcedureGroup>" + '\n');
            _OLAPArray.push('\t\t' + "<dConfiguration.ProcedureGroup>" + '\n');

            var ProcedureGroup = new Object;
            _pgElementList = configurationObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements;

            ///dConfiguration.06 
            _val = getValue(_pgElementList, "dConfiguration.06");
            if (_val == null) {
                ErrorList.push("dConfiguration.06 Mandatory Element");
            }
            else {
                _retArray.push('\t\t\t' + "<dConfiguration.06>" + _val + "</dConfiguration.06>" + '\n');
                _OLAPArray.push('\t\t\t' + "<CertificationLevelsPermittedtoPerformEachProcedure>" + setCodeText("dConfiguration.06", _val) + "</CertificationLevelsPermittedtoPerformEachProcedure>" + '\n');
                ProcedureGroup["dConfiguration.06"] = _val;;
                _v2Array.push({ section: "D04", element: "D04_05", val: setV2("dConfiguration.06", _val) });
            };

            ///dConfiguration.07 
            _val = getValue(_pgElementList, "dConfiguration.07");
            if (_val == null) {
                ErrorList.push("dConfiguration.07 Mandatory Element");
            }
            else {
                _arr = [];
                _arrV2 = [];

                for (var t = 0; t < _val.length; t++) {
                    _arr.push(_val[t]);
                    _arrV2.push(setV2("dConfiguration.07", _val[t]));
                    _retArray.push('\t\t\t' + "<dConfiguration.07>" + _val[t] + "</dConfiguration.07>" + '\n');
                    _OLAPArray.push('\t\t\t' + "<EMSAgencyProcedures>" + setCodeText("dConfiguration.07", _val[t]) + "</EMSAgencyProcedures>" + '\n');

                }
                _v2Array.push({ section: "D04", element: "D04_04", val: _arrV2 });
                ProcedureGroup["dConfiguration.07"] = _arr.slice(0);

            };
            _retArray.push('\t\t' + "</dConfiguration.ProcedureGroup>" + '\n');
            _OLAPArray.push('\t\t' + "</dConfiguration.ProcedureGroup>" + '\n');
        };
        //////////////////////////////


        ///////////////////////dConfiguration.MedicationGroup
 
        _sectionIndex = getSectionIndex(configurationObject.attributes.sections[xx].attributes, "dConfiguration.MedicationGroup");

    
        // console.log(_sectionIndex)
        var _MedicationGroupArray = new Array();
        for (var x = 0; x < _sectionIndex.length; x++) {
            _retArray.push('\t\t' + "<dConfiguration.MedicationGroup>" + '\n');
            _OLAPArray.push('\t\t' + "<dConfiguration.MedicationGroup>" + '\n');

            var MedicationGroup = new Object;
            _pgElementList = configurationObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements;

            ///dConfiguration.08 
            _val = getValue(_pgElementList, "dConfiguration.08");
            if (_val == null) {
                ErrorList.push("dConfiguration.08 Mandatory Element");
            }
            else {
                _retArray.push('\t\t\t' + "<dConfiguration.08>" + _val + "</dConfiguration.08>" + '\n');
                _OLAPArray.push('\t\t\t' + "<EMSCertificationLevelsPermittedtoAdministerEachMedication>" + setCodeText("dConfiguration.08", _val[t]) + "</EMSCertificationLevelsPermittedtoAdministerEachMedication>" + '\n');
                _v2Array.push({ section: "D04", element: "D04_04", val: setV2("dConfiguration.08", _val) });
                MedicationGroup["dConfiguration.08"] = _arr.slice(0);
            };

            ///dConfiguration.09 
            _val = getValue(_pgElementList, "dConfiguration.09");
            if (_val == null) {
                ErrorList.push("dConfiguration.09 Madatory Element");
            }
            else {
                _arr = [];
                _arrV2 = [];
                for (var t = 0; t < _val.length; t++) {
                    _arr.push(_val);
                    _arrV2.push(setV2("dConfiguration.09", _val));
                    _retArray.push('\t\t\t' + "<dConfiguration.09>" + _val[t] + "</dConfiguration.09>" + '\n');
                    _OLAPArray.push('\t\t\t' + "<EMSAgencyMedications>" + setCodeText("dConfiguration.09", _val[t]) + "</EMSAgencyMedications>" + '\n');
                };
                _v2Array.push({ section: "D04", element: "D04_04", val: _arrV2 });
                MedicationGroup["dConfiguration.09"] = _arr.slice(0);
            };

            _OLAPArray.push('\t\t' + "</dConfiguration.MedicationGroup>" + '\n');
            _retArray.push('\t\t' + "</dConfiguration.MedicationGroup>" + '\n');
        };

        _retArray = _retArray.concat(_MedicationGroupArray);

        ///dConfiguration.10 
        _val = getValue(elementList, "dConfiguration.10");
        if (_val == null) {
            ErrorList.push("dConfiguration.10 Mandatory Element");
        }
        else {
            _arr = [];
            _arrV2 = [];

            for (var t = 0; t < _val.length; t++) {
                _arr.push(_val);
                _arrV2.push(setV2("dConfiguration.10", _val));
                _retArray.push('\t\t' + "<dConfiguration.10>" + _val[t] + "</dConfiguration.10>" + '\n');
                _OLAPArray.push('\t\t' + "<EMSAgencyProtocols>" + setCodeText("dConfiguration.10", _val[t]) + "</EMSAgencyProtocols>" + '\n');
            }
            ConfigurationGroup["dConfiguration.10"] = _arr.slice(0);
            _v2Array.push({ section: "D04", element: "D04_08", val: _arrV2 });
        };

        ///dConfiguration.11 
        _val = getValue(elementList, "dConfiguration.11");
        if (_val == null) {
            ErrorList.push("dConfiguration.11 Mandatory Element");
        }
        else {
            for (var t = 0; t < _val.length; t++) {
                _arr.push(_val[t]);
                _retArray.push('\t\t' + "<dConfiguration.11>" + _val[t] + "</dConfiguration.11>" + '\n');
                _OLAPArray.push('\t\t' + "<EMSAgencySpecialtyServiceCapability>" + setCodeText("dConfiguration.11", _val[t]) + "</EMSAgencySpecialtyServiceCapability>" + '\n');
            }
            ConfigurationGroup["dConfiguration.11"] = _arr.slice(0);
        };


        ///dConfiguration.12 
        _val = getValue(elementList, "dConfiguration.12");
        if (_val == null) {
            _v2Array.push({ section: "D04", element: "D04_10", val: null });
            _retArray.push('\t\t' + "<dConfiguration.12>" + null + "</dConfiguration.12>" + '\n');
            _OLAPArray.push('\t\t' + "<BillingStatus>" + null + "</BillingStatus>" + '\n');
        }
        else {
            _retArray.push('\t\t' + "<dConfiguration.12>" + _val + "</dConfiguration.12>" + '\n');
            ConfigurationGroup["dConfiguration.12"] = _val;
            _v2Array.push({ section: "D04", element: "D04_10", val: setV2("dConfiguration.12", _val) });
            _OLAPArray.push('\t\t' + "<BillingStatus>" + setCodeText("dConfiguration.12", _val) + "</BillingStatus>" + '\n');
        };

        ///dConfiguration.13 
        _val = getValue(elementList, "dConfiguration.13");
        if (_val == null) {
            ErrorList.push("dConfiguration.13 Mandatory Element");
        }
        else {
            _retArray.push('\t\t' + "<dConfiguration.13>" + _val + "</dConfiguration.13>" + '\n');
            ConfigurationGroup["dConfiguration.13"] = _val;
            _OLAPArray.push('\t\t' + "<EMDProvidedtoEMSAgencyServiceArea>" + setCodeText("dConfiguration.13", _val) + "</EMDProvidedtoEMSAgencyServiceArea>" + '\n');
        };


        ///dConfiguration.14 
        _val = getValue(elementList, "dConfiguration.14");
        if (_val == null) {
            if (isRequiredStateElement("dConfiguration.14") == true) {
                ConfigurationGroup["dConfiguration.14"] = v3NOT_RECORDED;
                _retArray.push('\t\t' + "<dConfiguration.14" + NIL_V3NOT_RECORDED + '\n');
                _OLAPArray.push('\t\t' + "<EMDVendor>" + "NOT_RECORDED" + "</EMDVendor>" + '\n');
            }
            else {
                _retArray.push('\t\t' + "<dConfiguration.14" + NIL_V3NOT_REPORTING + '\n');
                ConfigurationGroup["dConfiguration.14"] = v2NOT_REPORTING
                ConfigurationGroup334.set("EMDVendor", v2NOT_REPORTING);
                _OLAPArray.push('\t\t' + "<EMDVendor>" + "NOT_REPORTING" + "</EMDVendor>" + '\n');
            }
        }
        else {
            _arr = [];
            _arrV2 = [];

            for (var t = 0; t < _val.length; t++) {
                _arr.push(_val);
                _arrV2.push(setV2("dConfiguration.14", _val));
                _retArray.push('\t\t' + "<dConfiguration.14>" + _val[t] + "</dConfiguration.14>" + '\n');
                _OLAPArray.push('\t\t' + "<EMDVendor>" + _val[t] + "</EMDVendor>" + '\n');
            }
            _v2Array.push({ section: "D04", element: "D04_17", val: _arrV2[0] });  //Version 2 has but one
            ConfigurationGroup["dConfiguration.14"] = _arr.slice(0);
        };

        ///dConfiguration.15 
        _val = getValue(elementList, "dConfiguration.15");
        if (_val == null) {
            ErrorList.push("dConfiguration.15 Madatory Element");
        }
        else {
            var _arr = [];
            for (var t = 0; t < _val.length; t++) {
                _arr.push(_val[t]);
                _retArray.push('\t\t' + "<dConfiguration.15>" + _val[t] + "</dConfiguration.15>" + '\n');
                _OLAPArray.push('\t\t' + "<PatientMonitoringCapabilities>" + _val[t] + "</PatientMonitoringCapabilities>" + '\n');
            }
            ConfigurationGroup["dConfiguration.15"] = _arr.slice(0);
        };


        ///dConfiguration.16 
        _val = getValue(elementList, "dConfiguration.16");
        if (_val == null) {
            ErrorList.push("dConfiguration.16 Mandatory Element");
        }
        else {
            for (var t = 0; t < _val.length; t++) {
                _arr.push(_val[t]);
                _v2Array.push({ section: "D04", element: "D04_02", val: setV2("dConfiguration.11", _val[t]) });
                _retArray.push('\t\t' + "<dConfiguration.16>" + _val[t] + "</dConfiguration.16>" + '\n');
                _OLAPArray.push('\t\t' + "<CrewCallSign>" + _val[t] + "</CrewCallSign>" + '\n');
            }
            ConfigurationGroup["dConfiguration.16"] = _arr.slice(0);
        };

        ///dConfiguration.17 
        _val = getValue(elementList, "dConfiguration.17");
        if (_val == null) {
            _retArray.push('\t\t' + "<dConfiguration.17>" + null + "</dConfiguration.17>" + '\n');
            _OLAPArray.push('\t\t' + "<DispatchCenterID>" + null + "</DispatchCenterID>" + '\n');
        }
        else {
            for (var t = 0; t < _val.length; t++) {
                _arr.push(_val[t]);
                _retArray.push('\t\t' + "<dConfiguration.17>" + _val[t] + "</dConfiguration.17>" + '\n');
                _OLAPArray.push('\t\t' + "<DispatchCenterID>" + _val[t] + "</DispatchCenterID>" + '\n');
            }
            ConfigurationGroup["dConfiguration.17"] = _arr.slice(0);
        };


        _retArray.push('\t' + "</dConfigurationGroup>" + '\n');
        _OLAPArray.push('\t' + "</dConfigurationGroup>" + '\n');
    };

    _OLAPArray.push("</dConfiguration>" + '\n');
    _retArray.push("</dConfiguration>" + '\n');

    ////////////////////////////////////
    ////////////////////////////////////
    //XMLString to dConfigurations

    for (var i = 0; i < _retArray.length ; i++) {
        XMLString = XMLString + _retArray[i];
    };

    dConfiguration.V334XMLArray = _retArray;

    var OLAPXMLString = "";
    for (var i = 0; i < _OLAPArray.length ; i++) {
        OLAPXMLString = OLAPXMLString + _OLAPArray[i];
    };

    dConfiguration.OLAPXML = OLAPXMLString;
    dConfiguration.OLAPXMLArray = _OLAPArray;

    var v2XMLString = "";
    for (var i = 0; i < _v2Array.length ; i++) {
        v2XMLString = v2XMLString + _v2Array[i];
    };

    dConfiguration.V221XMLArray = _v2Array;
    dConfiguration.V221XML = v2XMLString;

    ConfigurationGroup.ProcedureGroup = ProcedureGroup;
    ConfigurationGroup.MedicationGroup = MedicationGroup;
    dConfiguration.ConfigurationGroup = ConfigurationGroup;

    return dConfiguration;
};

var setdContact = function (contactObject) {
   
    var _retArray = [];
    var _OLAPArray = [];
    var _v2Array = [];
    var ContactInfoGroup = new Object()
    var dContact = new Object()
    _retArray.push("<dContact>" + '\n');
    _OLAPArray.push("<dContact>" + '\n');

    for (var xx = 0; xx < contactObject.attributes.sections.length; xx++) {
        var elementList = contactObject.attributes.sections[xx].attributes.elements;
        _retArray.push('\t' + "<dContact.ContactInfoGroup>" + '\n');
        _OLAPArray.push('\t' + "<dContact.ContactInfoGroup>" + '\n');

        // dContact.01/////////////
        _val = getValue(elementList, "dContact.01");
        if (_val == null) {
            if (isRequiredStateElement("dContact.01") == true) {
                ContactInfoGroup["dContact.01"] = v3NOT_RECORDED;
                _retArray.push('\t\t' + "<dContact.01" + NIL_V3NOT_RECORDED + '\n');
                _OLAPArray.push('\t\t' + "<AgencyContactType>" + "NOT RECORDED" + "</AgencyContactType>" + '\n');
            }
            else {
                _retArray.push('\t\t' + "<dContact.01" + NIL_V3NOT_REPORTING + '\n');
                ContactInfoGroup["dContact.01"] = V3NOT_REPORTING;
                _OLAPArray.push('\t\t' + "<AgencyContactType>" + "NOT REPORTING" + "</AgencyContactType>" + '\n');
            }
        }
        else {
            _retArray.push('\t\t' + "<dContact.01>" + _val + "</dContact.01>" + '\n');
            ContactInfoGroup["dContact.01"] = _val;
            _OLAPArray.push('\t\t' + "<AgencyContactType>" + setCodeText("dContact.01", _val) + "</AgencyContactType>" + '\n');
        };

        // dContact.02/////////////
        _val = getValue(elementList, "dContact.02");
        if (_val == null) {
            if (isRequiredStateElement("dContact.02") == - true) {
                ContactInfoGroup["dContact.02"] = v3NOT_RECORDED;
                _retArray.push('\t\t' + "<dContact.02" + NIL_V3NOT_RECORDED + '\n');
                _v2Array.push({ section: "D02", element: "D02_01", val: null });
                _OLAPArray.push('\t\t' + "<ContactLastName>" + "NOT RECORDED" + "</ContactLastName>" + '\n');
            }
            else {
                ContactInfoGroup["dContact.02"] = v3NOT_REPORTING
                _v2Array.push({ section: "D02", element: "D02_01", val: v2NOT_REPORTING });
                _retArray.push('\t\t' + "<dContact.02" + NIL_V3NOT_REPORTING + '\n');
                _OLAPArray.push('\t\t' + "<ContactLastName>" + "NOT REPORTING" + "</ContactLastName>" + '\n');
            }
        }
        else {
            ContactInfoGroup["dContact.02"] = _val;
            _retArray.push('\t\t' + "<dContact.02>" + _val + "</dContact.02>" + '\n');
            _v2Array.push({ section: "D02", element: "D02_01", val: _val });
            _OLAPArray.push('\t\t' + "<ContactLastName>" + _val + "</ContactLastName>" + '\n');
        };


        // dContact.03/////////////
        _val = getValue(elementList, "dContact.03");
        if (_val == null) {
            if (isRequiredStateElement("dContact.03") == - true) {
                ContactInfoGroup["dContact.03"] = v3NOT_RECORDED;
                _OLAPArray.push('\t\t' + "<ContactFirstName>" + "NOT RECORDED" + "</ContactFirstName>" + '\n');
                _retArray.push('\t\t' + "<dContact.03" + NIL_V3NOT_RECORDED + '\n');
                _v2Array.push({ section: "D02", element: "D02_03", val: NIL_V3NOT_RECORDED });
            }
            else {
                ContactInfoGroup["dContact.03"] = v3NOT_REPORTING
                _OLAPArray.push('\t\t' + "<ContactFirstName>" + "NOT REPORTING" + "</ContactFirstName>" + '\n');
                _retArray.push('\t\t' + "<dContact.03" + NIL_V3NOT_REPORTING + '\n');
                _v2Array.push({ section: "D02", element: "D02_03", val: v2NOT_REPORTING });
            }
        }
        else {
            ContactInfoGroup["dContact.03"] = _val[0];
            _retArray.push('\t\t' + "<dContact.03>" + _val[0] + "</dContact.03>" + '\n');
            _v2Array.push({ section: "D02", element: "D02_03", val: _val[0] });
            _OLAPArray.push('\t\t' + "<ContactFirstName>" + _val[0] + "</ContactFirstName>" + '\n');
        };

        // dContact.04/////////////
        _val = getValue(elementList, "dContact.04");
        if (_val == null) {
            _OLAPArray.push('\t\t' + "<ContactMiddleName>" + null + "</ContactMiddleName>" + '\n');
            _v2Array.push({ section: "D02", element: "D02_02", val: v2NOT_KNOWN });
            _retArray.push('\t\t' + "<dContact.04>" + null + "</dContact.04>" + '\n');
        }
        else {
            ContactInfoGroup["dContact.04"] = _val[0];
            _v2Array.push({ section: "D02", element: "D02_02", val: _val[0] });
            _retArray.push('\t\t' + "<dContact.04>" + _val[0] + "</dContact.04>" + '\n');
            _OLAPArray.push('\t\t' + "<ContactMiddleName>" + _val[0] + "</ContactMiddleName>" + '\n');
        };


        // dContact.05/////////////
        _val = getValue(elementList, "dContact.05");
        if (_val == null) {
            if (isRequiredStateElement("dContact.05") == - true) {
                _retArray.push('\t\t' + "<dContact.05" + NIL_V3NOT_RECORDED + '\n');
                _v2Array.push({ section: "D02", element: "D02_04", val: v2NOT_RECORDED });
                _OLAPArray.push('\t\t' + "<ContactAddress>" + "NOT RECORDED" + "</ContactAddress>" + '\n');
            }
            else {
                ContactInfoGroup["dContact.05"] = v3NOT_REPORTING;
                _OLAPArray.push('\t\t' + "<ContactAddress>" + "NOT REPORTING" + "</ContactAddress>" + '\n');
                _v2Array.push({ section: "D02", element: "D02_04", val: v2NOT_REPORTING });
                _retArray.push('\t\t' + "<dContact.05" + NIL_V3NOT_REPORTING + '\n');
            }
        }
        else {
            _retArray.push('\t\t' + "<dContact.05>" + _val + "</dContact.05>" + '\n');
            _v2Array.push({ section: "D02", element: "D02_04", val: _val });
            ContactInfoGroup["dContact.05"] = _val;
            _OLAPArray.push('\t\t' + "<ContactAddress>" + _val + "</ContactAddress>" + '\n');
        };

        // dContact.06/////////////
        _val = getValue(elementList, "dContact.06");
        if (_val == null) {
            if (isRequiredStateElement("dContact.06") == - true) {
                _OLAPArray.push('\t\t' + "<ContactCity>" + "NOT RECORDED" + "</ContactCity>" + '\n');
                _retArray.push('\t\t' + "<dContact.06" + NIL_V3NOT_RECORDED + '\n');
                ContactInfoGroup["dContact.06"] = v3NOT_RECORDED;
                _v2Array.push({ section: "D02", element: "D02_05", val: v2NOT_RECORDED });
            }
            else {
                ContactInfoGroup["dContact.06"] = v2NOT_REPORTING;
                _v2Array.push({ section: "D02", element: "D02_05", val: v2NOT_REPORTING });
                _retArray.push('\t\t' + "<dContact.06" + NIL_V3NOT_REPORTING + '\n');
                _OLAPArray.push('\t\t' + "<ContactCity>" + "NOT REPORTING" + "</ContactCity>" + '\n');
            }
        }
        else {
            ContactInfoGroup["dContact.06"] = _val;
            _retArray.push('\t\t' + "<dContact.06>" + _val + "</dContact.06>" + '\n');
            _v2Array.push({ section: "D02", element: "D02_05", val: _val });
            _OLAPArray.push('\t\t' + "<ContactCity>" + _val + "</ContactCity>" + '\n');
        };

        // dContact.07/////////////
        _val = getValue(elementList, "dContact.07");
        if (_val == null) {
            if (isRequiredStateElement("dContact.07") == - true) {
                _OLAPArray.push('\t\t' + "<ContactState>" + "NOT RECORDED" + "</ContactState>" + '\n');
                ContactInfoGroup["dContact.07"] = v3NOT_RECORDED;
                _v2Array.push({ section: "D02", element: "D02_06", val: v2NOT_RECORDED });
                _retArray.push('\t\t' + "<dContact.07" + NIL_V3NOT_RECORDED + '\n');
            }
            else {
                ContactInfoGroup["dContact.07"] = v2NOT_REPORTING;
                _OLAPArray.push('\t\t' + "<ContactState>" + "NOT REPORTING" + "</ContactState>" + '\n');
                _v2Array.push({ section: "D02", element: "D02_06", val: v2NOT_REPORTING });
                _retArray.push('\t\t' + "<dContact.07" + NIL_V3NOT_REPORTING + '\n');
            }
        }
        else {
            ContactInfoGroup["dContact.07"] = _val;
            _retArray.push('\t\t' + "<dContact.07>" + _val + "</dContact.07>" + '\n');
            _v2Array.push({ section: "D02", element: "D02_06", val: _val });
            _OLAPArray.push('\t\t' + "<ContactState>" + _val + "</ContactState>" + '\n');
        };

        // dContact.08/////////////
        _val = getValue(elementList, "dContact.08");
        if (_val == null) {
            if (isRequiredStateElement("dContact.08") == - true) {
                _OLAPArray.push('\t\t' + "<ContactZIPCode>" + "NOT RECORDED" + "</ContactZIPCode>" + '\n');
                ContactInfoGroup["dContact.08"] = v3NOT_RECORDED;
                _retArray.push('\t\t' + "<dContact.08" + NIL_V3NOT_RECORDED + '\n');
                _v2Array.push({ section: "D02", element: "D02_07", val: NIL_V3NOT_RECORDED });
            }
            else {
                ContactInfoGroup["dContact.08"] = v2NOT_REPORTING;
                _OLAPArray.push('\t\t' + "<ContactZIPCode>" + "NOT REPORTING" + "</ContactZIPCode>" + '\n');
                _retArray.push('\t\t' + "<dContact.08" + NIL_V3NOT_REPORTING + '\n');
                _v2Array.push({ section: "D02", element: "D02_07", val: NIL_V3NOT_REPORTING });
            }
        }
        else {
            ContactInfoGroup["dContact.08"] = _val;
            _OLAPArray.push('\t\t' + "<ContactZIPCode>" + _val + "</ContactZIPCode>" + '\n');
            _retArray.push('\t\t' + "<dContact.08>" + _val + "</dContact.08>" + '\n');
            _v2Array.push({ section: "D02", element: "D02_07", val: _val });
        };


        // dContact.09/////////////
        _val = getValue(elementList, "dContact.09");
        if (_val == null) {
            ContactInfoGroup["dContact.09"] = null;
            _retArray.push('\t\t' + "<dContact.09>" + null + "</dContact.09>" + '\n');
            _OLAPArray.push('\t\t' + "<ContactCountry>" + null + "</ContactCountry>" + '\n');
        }
        else {
            ContactInfoGroup["dContact.09"] = _val;
            _retArray.push('\t\t' + "<dContact.09>" + _val + "</dContact.09>" + '\n');
            _OLAPArray.push('\t\t' + "<ContactCountry>" + setCodeText("dContact.09", _val) + "</ContactCountry>" + '\n');
        };


        // dContact.10/////////////
        _val = getValue(elementList, "dContact.10");
        if (_val == null) {
            if (isRequiredStateElement("dContact.10") == - true) {
                dContact.ContactInfoGroup["dContact.10"] = v3NOT_RECORDED;
                _v2Array.push({ section: "D02", element: "D02_08", val: v2NOT_RECORDED });
                _retArray.push('\t\t' + "<dContact.10" + NIL_V3NOT_RECORDED + '\n');
                _OLAPArray.push('\t\t' + "<ContactPhoneNumber>" + "NOT RECORDED" + "</ContactPhoneNumber>" + '\n');

            }
            else {
                ContactInfoGroup["dContact.10"] = v2NOT_REPORTING
                _v2Array.push({ section: "D02", element: "D02_08", val: v2NOT_REPORTING });
                _retArray.push('\t\t' + "<dContact.08" + NIL_V3NOT_REPORTING + '\n');
                _OLAPArray.push('\t\t' + "<ContactPhoneNumber>" + "NOT REPORTING" + "</ContactPhoneNumber>" + '\n');
            }
        }
        else {
            arr1 = [];
            for (var i = 0; i < _val.length; i++) {
                var PhoneNumberType = setPhoneNumberType("dContact.10", _val[i]);

                if (PhoneNumberType == "9913001") {
                    _OLAPArray.push('\t' + "<ContactPhoneNumber" + FAX + ">" + _val[i] + "</ContactPhoneNumber>" + '\n');
                    _retArray.push('\t' + "<dContact.10" + FAX + ">" + _val[i] + "</dContact.10>" + '\n');
                    arr1.push("FAX  " + _val[i]);
                }
                else if (PhoneNumberType == "9913003") {
                    _OLAPArray.push('\t' + "<ContactPhoneNumber" + HOME + ">" + _val[i] + "</ContactPhoneNumber>" + '\n');
                    _retArray.push('\t' + "<dContact.10" + HOME + ">" + _val[i] + "</dContact.10>" + '\n');
                    _v2Array.push({ section: "E06", element: "E06_17", val: _val[i] });
                    arr1.push("HOME  " + _val[i]);
                }
                else if (PhoneNumberType == "9913005") {
                    _OLAPArray.push('\t' + "<ContactPhoneNumber" + MOBILE + ">" + _val[i] + "</ContactPhoneNumber>" + '\n');
                    _retArray.push('\t' + "<dContact.10" + MOBILE + ">" + _val[i] + "</dContact.10>" + '\n');
                    _v2Array.push({ section: "E06", element: "E06_17", val: _val[i] });
                    arr1.push("MOBILE  " + _val[i]);
                }
                else if (PhoneNumberType == "9913007") {
                    arr1.push("PAGER  " + _val[i]);
                    _OLAPArray.push('\t' + "<ContactPhoneNumber" + PAGER + ">" + _val[i] + "</ContactPhoneNumber>" + '\n');
                    _retArray.push('\t' + "<dContact.10" + PAGER + ">" + _val[i] + "</dContact.10>" + '\n');
                }
                else if (PhoneNumberType == "9913009") {
                    arr1.push("WORK  " + _val[i]);
                    _OLAPArray.push('\t' + "<ContactPhoneNumber" + WORK + ">" + _val[i] + "</ContactPhoneNumber>" + '\n');
                    _retArray.push('\t' + "<dContact.10" + WORK + ">" + _val[i] + "</dContact.10>" + '\n');
                }
                else {
                    arr1.push(_val[i]);
                    _v2Array.push({ section: "D02", element: "D02_08", val: _val[i] });
                    _retArray.push('\t\t' + "<dContact.10>" + _val[i] + "</dContact.10>" + '\n');
                    _OLAPArray.push('\t\t' + "<ContactPhoneNumber>" + _val[i] + "</ContactPhoneNumber>" + '\n');
                }
            }
            ContactInfoGroup["dContact.10"] = arr1.slice(0);
        };

        // dContact.11/////////////
        _val = getValue(elementList, "dContact.11");
        if (_val == null) {
            if (isRequiredStateElement("dContact.11") == - true) {
                ContactInfoGroup["dContact.11"] = v3NOT_RECORDED;
                _v2Array.push({ section: "D02", element: "D02_10", val: v2NOT_RECORDED });
                _retArray.push('\t\t' + "<dContact.11" + NIL_V3NOT_RECORDED + '\n');
                _OLAPArray.push('\t\t' + "<EmailAddress>" + "NOT RECORDED" + "</EmailAddress>" + '\n');
            }
            else {
                ContactInfoGroup["dContact.11"] = v2NOT_REPORTING;
                _retArray.push('\t\t' + "<dContact.11" + NIL_V3NOT_REPORTING + '\n');
                _v2Array.push({ section: "D02", element: "D02_10", val: v2NOT_REPORTING });
                _OLAPArray.push('\t\t' + "<EmailAddress>" + "NOT REPORTING" + "</EmailAddress>" + '\n');
            }
        }
        else {
            arr1 = [];
            for (var i = 0; i < _val.length; i++) {
                var eMailType = seteMailType("dContact.11", _val[i]);

                if (eMailType == "9904001") {
                    arr1.push("PERSONAL EMAIL " + _val[i]);
                    _OLAPArray.push('\t\t' + "<EmailAddress" + PERSONALEMAIL + ">" + _val[i] + "</EmailAddress>" + '\n');
                    _retArray.push('\t\t' + "<dContact.11" + PERSONALEMAIL + ">" + _val[i] + "</dContact.11>" + '\n');
                }
                else if (PhoneNumberType == "9913003") {
                    arr1.push("WORKEMAIL " + _val[i]);
                    _OLAPArray.push('\t\t\t' + "<PatientPhoneNumber" + WORKEMAIL + ">" + _val[i] + "</PatientPhoneNumber>" + '\n');
                    _retArray.push('/t' + "<ePatient.18" + WORKEMAIL + ">" + _val[i] + "</ePatient.18>") + '\n';
                }
                else {
                    arr1.push(_val[i]);
                    _v2Array.push({ section: "D02", element: "D02_10", val: _val });
                    _retArray.push('\t\t' + "<dContact.11>" + _val + "</dContact.11>" + '\n');
                    _OLAPArray.push('\t\t' + "<EmailAddress>" + _val + "</EmailAddress>" + '\n')
                }
            }
            ContactInfoGroup["dContact.11"] = arr1.slice(0);
        };


        // dContact.12/////////////
        _val = getValue(elementList, "dContact.12");
        if (_val == null) {
            if (isRequiredStateElement("dContact.12") == - true) {
                ContactInfoGroup["dContact.12"] = v3NOT_RECORDED;
                _v2Array.push({ section: "D02", element: "D02_11", val: v2NOT_RECORDED });
                _retArray.push('\t\t' + "<dContact.12" + NIL_V3NOT_RECORDED + '\n');
                _OLAPArray.push('\t\t' + "<WebAddress>" + "NOT RECORDED" + "</WebAddress>" + '\n');
            }
            else {
                ContactInfoGroup["dContact.12"] = v2NOT_REPORTING
                _v2Array.push({ section: "D02", element: "D02_11", val: v2NOT_REPORTING });
                _retArray.push('\t\t' + "<dContact.12" + NIL_V3NOT_REPORTING + '\n');
                _OLAPArray.push('\t\t' + "<WebAddress>" + "NOT REPORTING" + "</WebAddress>" + '\n');
            }
        }
        else {
            ContactInfoGroup["dContact.12"] = _val;
            _v2Array.push({ section: "D02", element: "D02_11", val: _val });
            _retArray.push('\t\t' + "<dContact.12>" + _val + "</dContact.12>" + '\n');
            _OLAPArray.push('\t\t' + "<WebAddress>" + _val + "</WebAddress>" + '\n');

        };
        //////////////////////////////
        _retArray.push('\t\t' + "<dContact.EMSMedicalDirectorGroup>" + '\n');
        _OLAPArray.push('\t\t' + "<dContact.EMSMedicalDirectorGroup>" + '\n');

        // dContact.13/////////////
        _val = getValue(elementList, "dContact.13");
        if (_val == null) {
            if (isRequiredStateElement("dContact.13") == - true) {
                ContactInfoGroup["dContact.13"] = v3NOT_RECORDED;
                _retArray.push('\t\t\t' + "<dContact.12" + NIL_V3NOT_RECORDED + '\n');
                _OLAPArray.push('\t\t\t' + "<MedicalDirectorDegree>" + "NOT_RECORDED" + "</MedicalDirectorDegree>" + '\n');
            }
            else {
                ContactInfoGroup["dContact.13"] = v3NOT_REPORTING
                _retArray.push('\t\t\t' + "<dContact.13" + NIL_V3NOT_REPORTING + '\n');
                _OLAPArray.push('\t\t\t' + "<MedicalDirectorDegree>" + "NOT_REPORTING" + "</MedicalDirectorDegree>" + '\n');
            }
        }
        else {
            ContactInfoGroup["dContact.13"] = _val;
            _retArray.push('\t\t\t' + "<dContact.13>" + _val + "</dContact.13>" + '\n');
            _OLAPArray.push('\t\t\t' + "<MedicalDirectorDegree>" + setCodeText("dContact.13", _val) + "</MedicalDirectorDegree>" + '\n');
        };

        // dContact.14/////////////
        _val = getValue(elementList, "dContact.14");
        if (_val == null) {
            if (isRequiredStateElement("dContact.14") == - true) {
                ContactInfoGroup["dContact.14"] = v3NOT_RECORDED;
                _retArray.push('\t\t\t' + "<dContact.14" + NIL_V3NOT_RECORDED + '\n');
                _OLAPArray.push('\t\t\t' + "<MedicalDirectorBoardCertificationType>" + "NOT_RECORDED" + "</MedicalDirectorBoardCertificationType>" + '\n');
            }
            else {
                ContactInfoGroup["dContact.14"] = v3NOT_REPORTING
                _retArray.push('\t\t\t' + "<dContact.14" + NIL_V3NOT_REPORTING + '\n');
                _OLAPArray.push('\t\t\t' + "<MedicalDirectorBoardCertificationType>" + "NOT_REPORTING" + "</MedicalDirectorBoardCertificationType>" + '\n');
            }
        }
        else {
            ContactInfoGroup["dContact.14"] = _val;
            _retArray.push('\t\t\t' + "<dContact.14>" + _val + "</dContact.14>" + '\n');
            _OLAPArray.push('\t\t\t' + "<MedicalDirectorBoardCertificationType>" + setCodeText("dContact.14", _val) + "</MedicalDirectorBoardCertificationType>" + '\n');
        };

        // dContact.15/////////////
        _val = getValue(elementList, "dContact.15");
        if (_val == null) {
            _OLAPArray.push('\t\t\t' + "<MedicalDirectorCompensation>" + null + "</MedicalDirectorCompensation>" + '\n');
            _retArray.push('\t\t\t' + "<dContact.15>" + null + "</dContact.15>" + '\n');
        }
        else {
            _OLAPArray.push('\t\t\t' + "<MedicalDirectorCompensation>" + setCodeText("dContact.15", _val) + "</MedicalDirectorCompensation>" + '\n');
            ContactInfoGroup["dContact.15"] = _val;
            _retArray.push('\t\t\t' + "<dContact.15>" + _val + "</dContact.15>" + '\n');
        };

        // dContact.16/////////////
        _val = getValue(elementList, "dContact.16");
        if (_val == null) {
            _OLAPArray.push('\t\t\t' + "<MedicalDirectorFellowshipTrainedStatus>" + null + "</MedicalDirectorFellowshipTrainedStatus>" + '\n');
            _retArray.push('\t\t\t' + "<dContact.16>" + null + "</dContact.16>" + '\n');
        }
        else {
            _OLAPArray.push('\t\t\t' + "<MedicalDirectorFellowshipTrainedStatus>" + setCodeText("dContact.16", _val) + "</MedicalDirectorFellowshipTrainedStatus>" + '\n');
            ContactInfoGroup["dContact.16"] = _val;
            _retArray.push('\t\t\t' + "<dContact.16>" + _val + "</dContact.16>" + '\n');
        };


        _OLAPArray.push('\t\t' + "</dContact.EMSMedicalDirectorGroup>" + '\n');
        _OLAPArray.push('\t' + "</dContact.ContactInfoGroup>" + '\n');
        _retArray.push('\t\t' + "</dContact.EMSMedicalDirectorGroup>" + '\n');
        _retArray.push('\t' + "</dContact.ContactInfoGroup>" + '\n');


    } // loop term
    _OLAPArray.push("</dContact>" + '\n');
    _retArray.push("</dContact>" + '\n');

    //    for (var i = 0; i < _retArray.length ; i++) {
    //        XMLString = XMLString + _retArray[i];

    //    }
    //console.log(XMLString)

    var Errors = [];
    for (var i = 0; i < ErrorList.length ; i++) {
        Errors.push(ErrorList[i]);
    };
    dContact.Errors = Errors;;

    //XMLString to dAgency
    for (var i = 0; i < _retArray.length ; i++) {
        XMLString = XMLString + _retArray[i];
    };

    dContact.V334XMLArray = _retArray;

    var OLAPXMLString = "";
    for (var i = 0; i < _OLAPArray.length ; i++) {
        OLAPXMLString = OLAPXMLString + _OLAPArray[i];
    };

    dContact.OLAPXMLArray = _OLAPArray;

    var v2XMLString = "";
    for (var i = 0; i < _v2Array.length ; i++) {
        v2XMLString = v2XMLString + _v2Array[i];
    };

    dContact.V221XMLArray = _v2Array;


    dContact.XMLDocument = XMLString;


    if (_OLAPArray.length > 0) {
        dContact.OLAPXML = OLAPXMLString;
    }

    dContact.ContactInfoGroup = ContactInfoGroup;
    return dContact;

};    //end of function

var setdDevice = function (deviceObject) {
    var _retArray = [];
    var _v2Array = [];
    var DeviceGroup = new Object();
    var dDevice = new Object();
    _retArray.push("<dDevice>" + '\n');
    _OLAPArray.push("<dDevice>" + '\n');

    //    console.log(businessObject.sections.length);
    for (var xx = 0; xx < deviceObject.attributes.sections.length; xx++) {
        _retArray.push('\t' + "<dDeviceInfoGroup>" + '\n');
        _OLAPArray.push('\t' + "<dDeviceInfoGroup>" + '\n');
        var elementList = deviceObject.attributes.sections[xx].attributes.elements;

        ///dDevice.01 
        _val = getValue(elementList, "dDevice.01");
        if (_val == null) {
            DeviceGroup["dDevice.01"] = null;
            _retArray.push('\t\t' + "<dDevice.01>" + null + "</dDevice.01>" + '\n');
            _OLAPArray.push('\t\t' + "<DeviceSerialNumber>" + null + "</DeviceSerialNumber>" + '\n');
        }
        else {
            DeviceGroup["dDevice.01"] = _val[0];
            _retArray.push('\t\t' + "<dDevice.01>" + _val + "</dDevice.01>" + '\n');
            _v2Array.push({ section: "D09", element: "D09_01", val: _val });
            _OLAPArray.push('\t\t' + "<DeviceSerialNumber>" + _val + "</DeviceSerialNumber>" + '\n');
        };

        ///dDevice.02 
        _val = getValue(elementList, "dDevice.02");
        if (_val == null) {
            DeviceGroup["dDevice.02"] = null;
            _retArray.push('\t\t' + "<dDevice.02>" + null + "</dDevice.02>" + '\n');
            _OLAPArray.push('\t\t' + "<DeviceName>" + null + "</DeviceName>" + '\n');
        }
        else {
            DeviceGroup["dDevice.02"] = _val[0];
            _retArray.push('\t\t' + "<dDevice.02>" + _val[0] + "</dDevice.02>" + '\n');
            _v2Array.push({ section: "D09", element: "D09_02", val: _val });
            _OLAPArray.push('\t\t' + "<DeviceName>" + _val + "</DeviceName>" + '\n');
        };

        ///dDevice.03
        _val = getValue(elementList, "dDevice.03");
        if (_val == null) {
            _OLAPArray.push('\t\t' + "<MedicalDeviceType>" + null + "</MedicalDeviceType>" + '\n');
            DeviceGroup["dDevice.03"] = null;
            _retArray.push('\t\t' + "<dDevice.03>" + null + "</dDevice.03>" + '\n');
        }
        else {
            var arr = [];
            for (var t = 0; t < _val.length; t++) {
                _OLAPArray.push('\t\t' + "<MedicalDeviceType>" + setCodeText("dDevice.03", _val[t]) + "</MedicalDeviceType>" + '\n');
                _v2Array.push({ section: "D02", element: "D02_01", val: null });
                arr.push(_val[t]);
                _retArray.push('\t\t' + "<dDevice.03>" + _val[t] + "</dDevice.03>" + '\n');
            }
            DeviceGroup["dDevice.03"] = arr.slice(0);
        };

        ///dDevice.04
        _val = getValue(elementList, "dDevice.04");
        if (_val == null) {
            DeviceGroup["dDevice.04"] = null;
            _retArray.push('\t\t' + "<dDevice.04>" + null + "</dDevice.04>" + '\n');
            _OLAPArray.push('\t\t' + "<DeviceManufacturer>" + null + "</DeviceManufacturer>" + '\n');
            _v2Array.push({ section: "D09", element: "D09_03", val: null });
        }
        else {
            DeviceGroup["dDevice.04"] = _val[0];
            _OLAPArray.push('\t\t' + "<DeviceManufacturer>" + _val + "</DeviceManufacturer>" + '\n');
            _retArray.push('\t\t' + "<dDevice.04>" + _val + "</dDevice.04>" + '\n');
            _v2Array.push({ section: "D09", element: "D09_03", val: _val });
        };

        ///dDevice.05
        _val = getValue(elementList, "dDevice.05");
        if (_val == null) {
            DeviceGroup["dDevice.05"] = null;
            _retArray.push('\t\t' + "<dDevice.05>" + null + "</dDevice.05>" + '\n');
            _OLAPArray.push('\t\t' + "<DeviceModelNumber>" + null + "</DeviceModelNumber>" + '\n');
        }
        else {
            DeviceGroup["dDevice.05"] = _val[0];
            _retArray.push('\t\t' + "<dDevice.04>" + _val[0] + "</dDevice.04>" + '\n');
            _v2Array.push({ section: "D09", element: "D09_04", val: _val });
            _OLAPArray.push('\t\t' + "<DeviceModelNumber>" + _val + "</DeviceModelNumber>" + '\n');
        };

        ///dDevice.06
        _val = getValue(elementList, "dDevice.06");
        if (_val == null) {
            DeviceGroup["dDevice.06"] = null;
            _retArray.push('\t\t' + "<dDevice.06>" + null + "</dDevice.06>" + '\n');
            _OLAPArray.push('\t\t' + "<DevicePurchaseDate>" + null + "</DevicePurchaseDate>" + '\n');
        }
        else {
            DeviceGroup["dDevice.06"] = _val;
            _retArray.push('\t\t' + "<dDevice.06>" + _val + "</dDevice.06>" + '\n');
            _v2Array.push({ section: "D09", element: "D09_05", val: _val });
            _OLAPArray.push('\t\t' + "<DevicePurchaseDate>" + _val + "</DevicePurchaseDate>" + '\n');
        };

        _retArray.push('\t' + "</dDeviceInfoGroup>" + '\n');
        _OLAPArray.push('\t' + "</dDeviceInfoGroup>" + '\n');
    }; // loop term


    _retArray.push("</dDevice>");
    _OLAPArray.push("</dDevice>");

    var XMLString = ""

    for (var i = 0; i < _OLAPArray.length ; i++) {
        XMLString = XMLString + _OLAPArray[i];

    }
    XMLString = ""
    for (var i = 0; i < _retArray.length ; i++) {
        XMLString = XMLString + _retArray[i];

    }
};

var setdFacility = function (facilityObject) {
    var _retArray = [];
    var _v2Array = [];
    var dFacilityGroup = new Object()
    var FacilityGroup = new Object()
    var dFacility = new Object()
    _retArray.push("<dFacility>" + '\n');
    _OLAPArray.push("<dFacility>" + '\n');
    //  console.log(businessObject.sections.length);

    for (var a = 0; a < facilityObject.attributes.sections.length; a++) {

        _retArray.push('\t' + "<dFacilityGroup>" + '\n');
        _OLAPArray.push('\t' + "<dFacilityGroup>" + '\n');
        // console.log(businessObject.sections[a].attributes.name);
        var _elementList = facilityObject.attributes.sections[a].attributes.sections[0].attributes.elements;
    
        //dFacility.01/////////
        _val = getValue(_elementList, "dFacility.01");
        if (_val == null) {
            dFacilityGroup["dFacility.01"] = null;
            _retArray.push('\t\t' + "<dFacility.01>" + null + "</dFacility.01>" + '\n');
            _OLAPArray.push('\t\t' + "<FacilityType>" + null + "</FacilityType>" + '\n');
        }
        else {
            dFacilityGroup["dFacility.01"] = _val;
            _retArray.push('\t\t' + "<dFacility.01>" + _val + "</dFacility.01>" + '\n');
            _v2Array.push({ section: "D04", element: "D04_15", val: setD2("dFacility.01", _val) });
            _OLAPArray.push('\t\t' + "<FacilityType>" + setCodeText("dFacility.01", _val) + "</FacilityType>" + '\n');
        };

        //Verify Section and set dFacilityGroup        
        if (businessObject.sections[a].attributes.sections != undefined) {
            _sectionIndex = getSectionIndex(businessObject.sections[a].attributes.sections, "dFacility.FacilityGroup");

            for (var b = 0; b < _sectionIndex.length; b++) {
                //    console.log(businessObject.sections[a].attributes.sections[_sectionIndex[b]].attributes.elements)
                var _groupObject = businessObject.sections[a].attributes.sections[b].attributes.elements;

                _retArray.push('\t\t' + "<dFacility.FacilityGroup>" + '\n')
                _OLAPArray.push('\t\t' + "<dFacility.FacilityGroup>" + '\n')


                //dFacility.02/////////
                _val = getValue(_groupObject, "dFacility.02");
                if (_val == null) {
                    FacilityGroup["dFacility.02"] = null;
                    _retArray.push('\t\t\t' + "<dFacility.02>" + null + "</dFacility.02>" + '\n');
                    _OLAPArray.push('\t\t\t' + "<FacilityName>" + null + "</FacilityName>" + '\n');
                }
                else {
                    FacilityGroup["dFacility.02"] = _val[0];
                    _retArray.push('\t\t\t' + "<dFacility.02>" + _val + "</dFacility.02>" + '\n');
                    _v2Array.push({ section: "D04", element: "D04_11", val: _val });
                    _OLAPArray.push('\t\t\t' + "<FacilityName>" + _val + "</FacilityName>" + '\n');
                };

                //dFacility.03/////////
                _val = getValue(_groupObject, "dFacility.03");
                if (_val == null) {
                    _OLAPArray.push('\t\t\t' + "<LocationCode>" + null + "</LocationCode>" + '\n');
                    FacilityGroup["dFacility.03"] = null;
                    _retArray.push('\t\t\t' + "<dFacility.03>" + null + "</dFacility.03>" + '\n');

                }
                else {
                    _OLAPArray.push('\t\t\t' + "<LocationCode>" + _val + "</LocationCode>" + '\n');
                    FacilityGroup["dFacility.03"] = _val;
                    _retArray.push('\t\t\t' + "<dFacility.03>" + _val + "</dFacility.03>" + '\n');
                    _v2Array.push({ section: "D04", element: "D04_12", val: _val });

                };

                //dFacility.04/////////
                _val = getValue(_groupObject, "dFacility.04");
                if (_val == null) {
                    FacilityGroup["dFacility.04"] = null;
                    _retArray.push('\t\t\t' + "<dFacility.04>" + null + "</dFacility.04>" + '\n');
                    _OLAPArray.push('\t\t\t' + "<HospitalDesignations>" + setCodeText("dFacility.04", _val) + "</HospitalDesignations>" + '\n');
                }
                else {
                    var arr = [];
                    for (var t = 0; t < _val.length; t++) {
                        arr.push(_val[t]);
                        _retArray.push('\t\t\t' + "<dFacility.04>" + _val[t] + "</dFacility.04>" + '\n');
                        _OLAPArray.push('\t\t\t' + "<HospitalDesignations>" + _val[t] + "</HospitalDesignations>" + '\n');
                    }
                    FacilityGroup["dFacility.04"] = arr.slice(0);
                };

                //dFacility.05/////////
                _val = getValue(_groupObject, "dFacility.05");
                if (_val == null) {
                    _retArray.push('\t\t\t' + "<dFacility.05>" + null + "</dFacility.05>" + '\n');
                    FacilityGroup["dFacility.05"] = null;
                    _OLAPArray.push('\t\t\t' + "<NationalProviderIdentifier>" + null + "</NationalProviderIdentifier>" + '\n');
                }
                else {
                    FacilityGroup["dFacility.05"] = _val;
                    _retArray.push('\t\t\t' + "<dFacility.05>" + _val + "</dFacility.05>" + '\n');
                    _OLAPArray.push('\t\t\t' + "<NationalProviderIdentifier>" + _val + "</NationalProviderIdentifier>" + '\n');
                };


                //dFacility.06/////////
                _val = getValue(_groupObject, "dFacility.06");
                if (_val == null) {
                    FacilityGroup["dFacility.06"] = null;
                    _retArray.push('\t\t\t' + "<dFacility.06>" + null + "</dFacility.06>" + '\n');
                    _OLAPArray.push('\t\t\t' + "<Room>" + null + "</Room>" + '\n');
                }
                else {
                    FacilityGroup["dFacility.06"] = _val;
                    _OLAPArray.push('\t\t\t' + "<Room>" + _val + "</Room>" + '\n');
                    _retArray.push('\t\t\t' + "<dFacility.06>" + _val + "</dFacility.06>" + '\n');
                };

                //dFacility.07/////////
                _val = getValue(_groupObject, "dFacility.07");
                if (_val == null) {
                    FacilityGroup["dFacility.07"] = null;
                    _OLAPArray.push('\t\t\t' + "<StreetAddress>" + null + "</StreetAddress>" + '\n');
                    _retArray.push('\t\t\t' + "<dFacility.07>" + null + "</dFacility.07>" + '\n');
                }
                else {
                    FacilityGroup["dFacility.07"] = _val;
                    _OLAPArray.push('\t\t\t' + "<StreetAddress>" + _val + "</StreetAddress>" + '\n');
                    _retArray.push('\t\t\t' + "<dFacility.07>" + _val + "</dFacility.07>" + '\n');
                };

                //dFacility.08/////////
                _val = getValue(_groupObject, "dFacility.08");
                if (_val == null) {
                    FacilityGroup["dFacility.08"] = null;
                    _OLAPArray.push('\t\t\t' + "<City>" + null + "</City>" + '\n');
                    _retArray.push('\t\t\t' + "<dFacility.08>" + null + "</dFacility.08>" + '\n');
                }
                else {
                    FacilityGroup["dFacility.08"] = _val;
                    _OLAPArray.push('\t\t\t' + "<City>" + _val + "</City>" + '\n');
                    _retArray.push('\t\t\t' + "<dFacility.08>" + _val + "</dFacility.08>" + '\n');
                };

                //dFacility.09/////////
                _val = getValue(_groupObject, "dFacility.09");
                if (_val == null) {
                    FacilityGroup["dFacility.09"] = null;
                    _OLAPArray.push('\t\t\t' + "<State>" + null + "</State>" + '\n');
                    _retArray.push('\t\t\t' + "<dFacility.09>" + null + "</dFacility.09>" + '\n');
                }
                else {
                    _OLAPArray.push('\t\t\t' + "<State>" + _val + "</State>" + '\n');
                    _retArray.push('\t\t\t' + "<dFacility.09>" + _val + "</dFacility.09>" + '\n');
                    FacilityGroup["dFacility.09"] = _val;
                };

                //dFacility.10/////////
                _val = getValue(_groupObject, "dFacility.10");
                if (_val == null) {
                    _OLAPArray.push('\t\t\t' + "<Zip>" + null + "</Zip>" + '\n');
                    FacilityGroup["dFacility.10"] = null;
                    _retArray.push('\t\t\t' + "<dFacility.10>" + null + "</dFacility.10>" + '\n');
                }
                else {
                    _OLAPArray.push('\t\t\t' + "<Zip>" + null + "</Zip>" + '\n');
                    _retArray.push('\t\t\t' + "<dFacility.10>" + _val + "</dFacility.10>" + '\n');
                    FacilityGroup["dFacility.10 "] = _val;
                };

                //dFacility.11/////////
                _val = getValue(_groupObject, "dFacility.11");
                if (_val == null) {
                    _OLAPArray.push('\t\t\t' + "<County>" + null + "</County>" + '\n');
                    FacilityGroup["dFacility.11"] = null;
                    _retArray.push('\t\t\t' + "<dFacility.11>" + null + "</dFacility.11>" + '\n');
                }
                else {
                    _OLAPArray.push('\t\t\t' + "<County>" + _val + "</County>" + '\n');
                    _retArray.push('\t\t\t' + "<dFacility.11>" + _val + "</dFacility.11>" + '\n');
                    dFacilityGroup["dFacility.11 "] = _val;
                };

                //dFacility.12/////////
                _val = getValue(_groupObject, "dFacility.12");
                if (_val == null) {
                    FacilityGroup["dFacility.12"] = null;
                    _OLAPArray.push('\t\t\t' + "<Country>" + null + "</Country>" + '\n');
                    _retArray.push('\t\t\t' + "<dFacility.12>" + null + "</dFacility.12>" + '\n');
                }
                else {
                    _retArray.push('\t\t\t' + "<dFacility.12>" + _val + "</dFacility.12>" + '\n');
                    _OLAPArray.push('\t\t\t' + "<Country>" + setCodeText("dFacility.12", _val) + "</Country>" + '\n');
                    FacilityGroup["dFacility.12 "] = _val;
                };

                _val = getValue(_groupObject, "dFacility.13");
                if (_val == null) {
                    FacilityGroup["dFacility.13"] = null;
                    _retArray.push('\t\t\t' + "<dFacility.13>" + null + "</dFacility.13>" + '\n');
                    _OLAPArray.push('\t\t\t' + "<GPS>" + null + "</GPS>" + '\n');
                }
                else {
                    _retArray.push('\t\t\t' + "<dFacility.13>" + _val + "</dFacility.13>" + '\n');
                    FacilityGroup["dFacility.13 "] = _val;
                    _OLAPArray.push('\t\t\t' + "<GPS>" + _val + "</GPS>" + '\n');
                };

                _val = getValue(_groupObject, "dFacility.14");
                if (_val == null) {
                    FacilityGroup["dFacility.14"] = null;
                    _retArray.push('\t\t\t' + "<dFacility.14>" + null + "</dFacility.14>" + '\n');
                    _OLAPArray.push('\t\t\t' + "<NationalGridLocation>" + null + "</NationalGridLocation>" + '\n');
                }
                else {
                    _OLAPArray.push('\t\t\t' + "<NationalGridLocation>" + _val + "</NationalGridLocation>" + '\n');
                    _retArray.push('\t\t\t' + "<dFacility.14>" + _val + "</dFacility.14>" + '\n');
                    FacilityGroup["dFacility.14 "] = _val;
                };
                _retArray.push('\t\t' + "</dFacility.FacilityGroup>" + '\n')
                _OLAPArray.push('\t\t' + "</dFacility.FacilityGroup>" + '\n')
            }
        }
    };
    _retArray.push('\t' + "</dFacilityGroup>" + '\n');
    _OLAPArray.push('\t' + "</dFacilityGroup>" + '\n');


    var XMLString = ""
    for (var i = 0; i < _retArray.length ; i++) {
        XMLString = XMLString + _retArray[i];
    }

    var XMLString = ""
    for (var i = 0; i < _OLAPArray.length ; i++) {
        XMLString = XMLString + _OLAPArray[i];
    }
   // console.log(_v2Array)

    dFacilityGroup.FacilityGroup = FacilityGroup;
    dFacility.dFacilityGroup = dFacilityGroup
     

};    //end of function   

var setdLocation = function (locationObject) {
    var _v2Array = [];
    var _retArray = [];
    var XMLString = "";

    var LocationGroup = new Object();
    var dLocation = new Object();
    _retArray.push("<dLocation>" + '\n');
    _OLAPArray.push("<dLocation>" + '\n');

    _sectionIndex = getSectionIndex(locationObject.attributes, "dLocation.LocationGroup");

    for (var xx = 0; xx < _sectionIndex.length; xx++) {

        var elementList = locationObject.attributes.sections[xx].attributes.elements;
        _retArray.push('\t' + "<dLocation.LocationGroup>" + '\n');
        _OLAPArray.push('\t' + "<dLocation.LocationGroup>" + '\n');

        // console.log(elementList)

        //dLocation.01/////////
        _val = getValue(elementList, "dLocation.01");
        if (_val == null) {
            LocationGroup["dLocation.01"] = null;
            _OLAPArray.push('\t\t' + "<LocationType>" + null + "</LocationType>" + '\n');
            _retArray.push('\t\t' + "<dLocation.01>" + null + "</dLocation.01>" + '\n');
        }
        else {
            _OLAPArray.push('\t\t' + "<LocationType>" + setCodeText("dLocation.01", _val) + "</LocationType>" + '\n');
            LocationGroup["dLocation.01"] = _val;
            _retArray.push('\t\t' + "<dLocation.01>" + _val + "</dLocation.01>" + '\n');
        };

        //dLocation.02/////////
        _val = getValue(elementList, "dLocation.02");
        if (_val == null) {
            _OLAPArray.push('\t\t' + "<LocationName>" + null + "</LocationName>" + '\n');
            LocationGroup["dLocation.02"] = null;
        }
        else {
            LocationGroup["dLocation.02"] = _val;
            _OLAPArray.push('\t\t' + "<LocationName>" + _val + "</LocationName>" + '\n');
            _retArray.push('\t\t' + "<dLocation.02>" + _val + "</dLocation.02>" + '\n');
            _v2Array.push({ section: "D05", element: "D05_01", val: _val });
        };

        //dLocation.03/////////
        _val = getValue(elementList, "dLocation.03");
        if (_val == null) {
            _OLAPArray.push('\t\t' + "<LocationNumber>" + null + "</LocationNumber>" + '\n');
            LocationGroup["dLocation.03"] = null;
        }
        else {
            _OLAPArray.push('\t\t' + "<LocationNumber>" + _val + "</LocationNumber>" + '\n');
            _v2Array.push({ section: "D05", element: "D05_02", val: _val });
            LocationGroup["dLocation.03"] = _val;
            _retArray.push('\t\t' + "<dLocation.03>" + _val + "</dLocation.03>" + '\n');
        };

        //dLocation.04/////////
        _val = getValue(elementList, "dLocation.04");
        if (_val == null) {
            _OLAPArray.push('\t\t' + "<GPS>" + null + "</GPS>" + '\n');
            LocationGroup["dLocation.04"] = null;
        }
        else {
            _v2Array.push({ section: "D05", element: "D05_04", val: _val });
            LocationGroup["dLocation.04"] = _val;
            _OLAPArray.push('\t\t' + "<GPS>" + _val + "</GPS>" + '\n');
            _retArray.push('\t\t' + "<dLocation.04>" + _val + "</dLocation.04>" + '\n');
        };

        //dLocation.05/////////
        _val = getValue(elementList, "dLocation.05");
        if (_val == null) {
            _OLAPArray.push('\t\t' + "<NationalGridCoordinates>" + null + "</NationalGridCoordinates>" + '\n');
            LocationGroup["dLocation.05"] = null;
        }
        else {
            _OLAPArray.push('\t\t' + "<NationalGridCoordinates>" + _val + "</NationalGridCoordinates>" + '\n');
            LocationGroup["dLocation.05"] = _val;
            _retArray.push('\t\t' + "<dLocation.05>" + _val + "</dLocation.05>" + '\n');
        };

        //dLocation.06/////////
        _val = getValue(elementList, "dLocation.06");
        if (_val == null) {
            _OLAPArray.push('\t\t' + "<Address>" + null + "</Address>" + '\n');
            LocationGroup["dLocation.06"] = null;
        }
        else {
            _OLAPArray.push('\t\t' + "<Address>" + _val + "</Address>" + '\n');
            _v2Array.push({ section: "D05", element: "D05_05", val: _val });
            LocationGroup["dLocation.06"] = _val;
            _retArray.push('\t\t' + "<dLocation.06>" + _val + "</dLocation.06>" + '\n');

        };

        //dLocation.07/////////
        _val = getValue(elementList, "dLocation.07");
        if (_val == null) {
            _OLAPArray.push('\t\t' + "<City>" + null + "</City>" + '\n');
            LocationGroup["dLocation.07"] = null;
        }
        else {
            _OLAPArray.push('\t\t' + "<City>" + _val + "</City>" + '\n');
            _v2Array.push({ section: "D05", element: "D05_06", val: _val });
            LocationGroup["dLocation.07"] = _val;
            _retArray.push('\t\t' + "<dLocation.07>" + _val + "</dLocation.07>" + '\n');
        };

        //dLocation.08/////////
        _val = getValue(elementList, "dLocation.08");
        if (_val == null) {
            _OLAPArray.push('\t\t' + "<State>" + null + "</State>" + '\n');
            LocationGroup["dLocation.08"] = null;
        }
        else {
            _OLAPArray.push('\t\t' + "<State>" + _val + "</State>" + '\n');
            _v2Array.push({ section: "D05", element: "D05_07", val: _val });
            LocationGroup["dLocation.08"] = _val;
            _retArray.push('\t\t' + "<dLocation.08>" + _val + "</dLocation.08>" + '\n');
        };

        //dLocation.09/////////
        _val = getValue(elementList, "dLocation.09");
        if (_val == null) {
            _OLAPArray.push('\t\t' + "<Zip>" + null + "</Zip>" + '\n');
            LocationGroup["dLocation.09"] = null;
        }
        else {
            _OLAPArray.push('\t\t' + "<Zip>" + _val + "</Zip>" + '\n');
            LocationGroup["dLocation.09"] = _val;
            _v2Array.push({ section: "D05", element: "D05_08", val: _val });
            _retArray.push('\t\t' + "<dLocation.09>" + _val + "</dLocation.09>" + '\n');
        };

        //dLocation.10/////////
        _val = getValue(elementList, "dLocation.10");
        if (_val == null) {
            _OLAPArray.push('\t\t' + "<County>" + null + "</County>" + '\n');
            LocationGroup["dLocation.10"] = null;
        }
        else {
            _OLAPArray.push('\t\t' + "<County>" + _val + "</County>" + '\n');
            LocationGroup["dLocation.10"] = _val;
            _retArray.push('\t\t' + "<dLocation.10>" + _val + "</dLocation.10>" + '\n');
        };


        //dLocation.11/////////
        _val = getValue(elementList, "dLocation.11");
        if (_val == null) {
            _OLAPArray.push('\t\t' + "<Country>" + null + "</Country>" + '\n');
            LocationGroup["dLocation.11"] = null;
        }
        else {
            _OLAPArray.push('\t\t' + "<Country>" + setCodeText("dLocation.11", _val) + "</Country>" + '\n');
            LocationGroup["dLocation.11"] = _val;
            _retArray.push('\t\t' + "<dLocation.11>" + _val + "</dLocation.11>" + '\n');
        };

        //dLocation.11/////////
        _val = getValue(elementList, "dLocation.12");
        if (_val == null) {
            LocationGroup["dLocation.12"] = null;
            _OLAPArray.push('\t\t' + "<Phone>" + null + "</Phone>" + '\n');

        }
        else {
            var arr = [];
            var arr2 = [];
            for (var t = 0; t < _val.length; t++) {
                arr2.push(setV2("dLocation.12", _val));
                arr.push(_val[t]);
                _retArray.push('\t\t' + "<dLocation.12>" + _val[t] + "</dLocation.12>" + '\n');
                _OLAPArray.push('\t\t' + "<Phone>" + _val[t] + "</Phone>" + '\n');
            }
            LocationGroup["dLocation.12 "] = arr.slice(0);
            _v2Array.push({ section: "D05", element: "D05_06", val: arr2.slice(0) });

        };
        _retArray.push('\t' + "</dLocation.LocationGroup>" + '\n');
        _OLAPArray.push('\t' + "</dLocation.LocationGroup>" + '\n');
    };
    _retArray.push("</dLocation>" + '\n');
    _OLAPArray.push("</dLocation>" + '\n');

    for (var i = 0; i < _retArray.length ; i++) {
        XMLString = XMLString + _retArray[i];

    }
    return LocationGroup;

};    //end of function   

var setdPersonnel = function (personnelObject) {

    var dPersonnel = new Object;
    var PersonnelGroup = new Object;
    var NameGroup = new Object;
    var AddressGroup = new Object;
    var ImmunizationsGroup = new Object;
    var LicensureGroup = new Object;
    var CertificationLevelGroup = new Object;
    var _retArray = [];
    var _v2Array = [];
    var _sectionIndex = 0;
   alert("need dPateient v2 codes")
    _retArray.push("<dPersonnel>" + '\n');
    _OLAPArray.push("<dPersonnel>" + '\n');
    for (var xx = 0; xx < personnelObject.attributes.sections.length; xx++) //All dPersonnelGroup
    {
        _sectionIndex = getSectionIndex(personnelObject.attributes.sections[xx].attributes, "dPersonnel.NameGroup");
        //  console.log(_sectionIndex)
        var elementList = personnelObject.attributes.sections[xx].attributes.elements;

        _retArray.push('\t' + "<dPersonnel.PersonnelGroup>" + '\n');
        _OLAPArray.push('\t' + "<dPersonnel.PersonnelGroup>" + '\n');
        //////////dPersonnl.01

        _retArray.push('\t\t' + "<dPersonnel.NameGroup>" + '\n');
        _OLAPArray.push('\t\t' + "<dPersonnel.NameGroup>" + '\n');

        _val = getValue(personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[0]].attributes.elements, "dPersonnel.01");
        if (_val == null) {
            if (isRequiredStateElement("dPersonnel.01") == true) {
                ErrorList.push("dPersonnel.01 required");
                _retArray.push('\t\t\t' + "<dPersonnel.01" + NIL_V3NOT_RECORDED + '\n');
                NameGroup["dPersonnel.01"] = V3NOT_RECORDED;
                _v2Array.push({ section: "D08", element: "D08_01", val: v2NOT_RECORDED });
                _OLAPArray.push('\t\t\t' + "<LastName>" + "NOT_RECORDED" + "</LastName>" + '\n');
            }
            else {
                _OLAPArray.push('\t\t\t' + "<LastName>" + "NOT_REPORTING" + "</LastName>" + '\n');
                _retArray.push('\t\t\t' + "<dPersonnel.01" + NIL_V3NOT_REPORTING + '\n');
                _v2Array.push({ section: "D08", element: "D08_01", val: v2NOT_REPORTING });
                NameGroup["dPersonnel.01"] = REPORTING;
            }
        }
        else {
            _v2Array.push({ section: "D08", element: "D08_01", val: _val });
            NameGroup["dPersonnel.01"] = _val[0];
            _OLAPArray.push('\t\t\t' + "<LastName>" + _val + "</LastName>" + '\n');
            _retArray.push('\t\t\t' + "<dPersonnel.01>" + _val[0] + "</dPersonnel.01>" + '\n');
        };

        //////////dPersonnl.02
        _val = getValue(personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[0]].attributes.elements, "dPersonnel.02");
        if (_val == null) {
            if (isRequiredStateElement("dPersonnel.02") == true) {
                ErrorList.push("dPersonnel.02 required");
                _retArray.push('\t\t\t' + "<dPersonnel.02" + NIL_V3NOT_RECORDED + '\n');
                _v2Array.push({ section: "D08", element: "D08_03", val: v2NOT_RECORDED });
                _OLAPArray.push('\t\t\t' + "<FirstName>" + "NOT_RECORDED" + "</FirstName>" + '\n');
                NameGroup["dPersonnel.02"] = V3NOT_RECORDED;
            }
            else {
                NameGroup["dPersonnel.02"] = V3NOT_REPORTING;
                _OLAPArray.push('\t\t\t' + "<FirstName>" + "NOT_REPORTING" + "</FirstName>" + '\n');
                _retArray.push('\t\t\t' + "<dPersonnel.02" + NIL_V3NOT_REPORTING + '\n');
                _v2Array.push({ section: "D08", element: "D08_03", val: v2NOT_REPORTING });
            }
        }
        else {
            _OLAPArray.push('\t\t\t' + "<FirstName>" + _val + "</FirstName>" + '\n');
            _v2Array.push({ section: "D08", element: "D08_03", val: _val });
            NameGroup["dPersonnel.02"] = _val[0];
            _retArray.push('\t\t\t' + "<dPersonnel.02>" + _val[0] + "</dPersonnel.02>" + '\n');
        };

        //////////dPersonnel.03
        _val = getValue(personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[0]].attributes.elements, "dPersonnel.03");
        if (_val == null) {
            if (isRequiredStateElement("dPersonnel.03") == true) {
                ErrorList.push("dPersonnel.03 required");
                _OLAPArray.push('\t\t\t' + "<MI>" + "NOT_RECORDED" + "</MI>" + '\n');
                _retArray.push('\t\t\t' + "<dPersonnel.03" + NIL_V3NOT_RECORDED + '\n');
                _v2Array.push({ section: "D08", element: "D08_02", val: v2NOT_RECORDED });
                NameGroup["dPersonnel.03"] = V3NOT_RECORDED;
            }
            else {
                _OLAPArray.push('\t\t\t' + "<MI>" + "NOT_REPORTING" + "</MI>" + '\n');
                _retArray.push('\t\t\t' + "<dPersonnel.03" + NIL_V3NOT_REPORTING + '\n');
                _v2Array.push({ section: "D08", element: "D08_02", val: v2NOT_REPORTING });
                NameGroup["dPersonnel.03"] = V3NOT_REPORTING;
            }
        }
        else {
            _v2Array.push({ section: "D08", element: "D08_02", val: _val });
            NameGroup["dPersonnel.03"] = _val[0];
            _retArray.push('\t\t\t' + "<dPersonnel.03>" + _val[0] + "</dPersonnel.03>" + '\n');
            _OLAPArray.push('\t\t\t' + "<MI>" + _val + "</MI>" + '\n');
        };
        //////////////////////////////////////////////////////////////
        _retArray.push('\t\t' + "</dPersonnel.NameGroup>" + '\n');
        _retArray.push('\t\t' + "<dPersonnel.AddressGroup>" + '\n');

        _OLAPArray.push('\t\t' + "</dPersonnel.NameGroup>" + '\n');
        _OLAPArray.push('\t\t' + "<dPersonnel.AddressGroup>" + '\n');

        _sectionIndex = getSectionIndex(personnelObject.attributes.sections[xx].attributes, "dPersonnel.AddressGroup");
        //   console.log(_sectionIndex)

        //////////dPersonnel.04
        _val = getValue(personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[0]].attributes.elements, "dPersonnel.04");
        if (_val == null) {
            AddressGroup["dPersonnel.04"] = null;
            _retArray.push('\t\t\t' + "<dPersonnel.04>" + null + "</dPersonnel.04>" + '\n');
            _OLAPArray.push('\t\t\t' + "<MailingAddress>" + null + "</MailingAddress>" + '\n');
        }
        else {
            _OLAPArray.push('\t\t\t' + "<MailingAddress>" + _val + "</MailingAddress>" + '\n');
            AddressGroup["dPersonnel.04"] = _val[0];
            _retArray.push('\t\t\t' + "<dPersonnel.04>" + _val[0] + "</dPersonnel.04>" + '\n');
            _v2Array.push({ section: "D08", element: "D08_04", val: _val });
        };

        //////////dPersonnel.05
        _val = getValue(personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[0]].attributes.elements, "dPersonnel.05");
        if (_val == null) {
            _OLAPArray.push('\t\t\t' + "<City>" + null + "</City>" + '\n');
            AddressGroup["dPersonnel.05"] = null;
            _retArray.push('\t\t\t' + "<dPersonnel.05>" + null + "</dPersonnel.05>" + '\n');
        }
        else {
            _OLAPArray.push('\t\t\t' + "<City>" + _val + "</City>" + '\n');
            AddressGroup["dPersonnel.05"] = _val[0];
            _retArray.push('\t\t\t' + "<dPersonnel.05>" + _val[0] + "</dPersonnel.05>" + '\n');
            _v2Array.push({ section: "D08", element: "D08_05", val: _val });
        };

        //////////dPersonnel.06
        _val = getValue(personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[0]].attributes.elements, "dPersonnel.06");
        if (_val == null) {
            _OLAPArray.push('\t\t\t' + "<State>" + null + "</State>" + '\n');
            AddressGroup["dPersonnel.06"] = null;
            _retArray.push('\t\t\t' + "<dPersonnel.06>" + null + "</dPersonnel.06>" + '\n');
        }
        else {
            _OLAPArray.push('\t\t\t' + "<State>" + _val + "</State>" + '\n');
            _v2Array.push({ section: "D08", element: "D08_06", val: _val });
            AddressGroup["dPersonnel.06"] = _val;
            _retArray.push('\t\t\t' + "<dPersonnel.06>" + _val + "</dPersonnel.06>" + '\n');
        };

        //////////dPersonnel.07
        _val = getValue(personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[0]].attributes.elements, "dPersonnel.07");
        if (_val == null) {
            _OLAPArray.push('\t\t\t' + "<Zip>" + null + "</Zip>" + '\n');
            AddressGroup["dPersonnel.07"] = null;
            _retArray.push('\t\t\t' + "<dPersonnel.07>" + null + "</dPersonnel.07>" + '\n');
        }
        else {
            _OLAPArray.push('\t\t\t' + "<Zip>" + _val + "</Zip>" + '\n');
            _v2Array.push({ section: "D08", element: "D08_07", val: _val });
            AddressGroup["dPersonnel.07"] = _val[0];
            _retArray.push('\t\t\t' + "<dPersonnel.07>" + _val[0] + "</dPersonnel.07>" + '\n');
        };

        //////////dPersonnel.08
        _val = getValue(personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[0]].attributes.elements, "dPersonnel.08");
        if (_val == null) {
            _OLAPArray.push('\t\t\t' + "<Country>" + null + "</Country>" + '\n');
            _retArray.push('\t\t\t' + "<dPersonnel.08>" + null + "</dPersonnel.08>" + '\n');
            AddressGroup["dPersonnel.08"] = null;
        }
        else {
            _OLAPArray.push('\t\t\t' + "<Country>" + _val + "</Country>" + '\n');
            AddressGroup["dPersonnel.08"] = _val;
            _retArray.push('\t\t\t' + "<dPersonnel.08>" + _val + "</dPersonnel.08>" + '\n');
        };

        _OLAPArray.push('\t\t' + "</dPersonnel.AddressGroup>" + '\n');
        _retArray.push('\t\t' + "</dPersonnel.AddressGroup>" + '\n');
        ///////////////////////////////////////////
        ///////////////////////////////////////////

        //////////dPersonnel.09
        _val = getValue(elementList, "dPersonnel.09");
        if (_val == null) {
            _OLAPArray.push('\t\t' + "<PhoneNumber>" + null + "</PhoneNumber>" + '\n');
            _retArray.push('\t\t' + "<dPersonnel.09>" + null + '\n');
            _v2Array.push({ section: "D08", element: "D08_12", val: null });
        }
        else {
            var arr = [];
            var arr2 = [];
            for (var t = 0; t < _val.length; t++) {
                arr.push(_val[t]);
                arr2.push(setV2("dPersonnel.09", _val[t]));
                _retArray.push('\t\t' + "<dPersonnel.09>" + _val[t] + "</dPersonnel.09>" + '\n');
                _OLAPArray.push('\t\t' + "<PhoneNumber>" + _val[t] + "</PhoneNumber>" + '\n');
            }
            PersonnelGroup["dPersonnel.09"] = arr.slice(0);
            _v2Array.push({ section: "D08", element: "D08_12", val: arr2.slice(0) });
        };

        //////////dPersonnel.10
        _val = getValue(elementList, "dPersonnel.10");
        if (_val == null) {
            PersonnelGroup["dPersonnel.10"] = null;
            _OLAPArray.push('\t\t' + "<EMail>" + null + "</EMail>" + '\n');
            _retArray.push('\t\t' + "<dPersonnel.10>" + null + "</dPersonnel.10>" + '\n');
        }
        else {
            var arr = [];
            var arr2 = [];
            for (var t = 0; t < _val.length; t++) {
                arr.push(_val[t]);
                arr2.push(setV2("dPersonnel.10", _val));
                _retArray.push('\t\t' + "<dPersonnel.10>" + _val[t] + "</dPersonnel.10>" + '\n');
                _OLAPArray.push('\t\t' + "<EMail>" + _val[t] + "</EMail>" + '\n');
            }
            PersonnelGroup["dPersonnel.10"] = arr.slice(0);
            _v2Array.push({ section: "D08", element: "D08_10", val: arr2.slice(0) });
        };

        //////////dPersonnel.11
        _val = getValue(elementList, "dPersonnel.11");
        if (_val == null) {
            if (isRequiredStateElement("dPersonnel.11") == true) {
                _OLAPArray.push('\t\t' + "<DOB>" + "NOT_RECORDED" + "</DOB>" + '\n');
                ErrorList.push("dPersonnel.11 required");
                _retArray.push('\t\t' + "<dPersonnel.11>" + NIL_V3NOT_RECORDED + '\n');
                _v2Array.push({ section: "D08", element: "D08_11", val: v2NOT_RECORDED });
                PersonnelGroup["dPersonnel.11"] = v3NOT_RECORDED;
            }
            else {
                _OLAPArray.push('\t\t' + "<DOB>" + "NOT_REPORTING" + "</DOB>" + '\n');
                _retArray.push('\t\t' + "<dPersonnel.11>" + NIL_V3NOT_REPORTING + '\n');
                _v2Array.push({ section: "D08", element: "D08_11", val: v2NOT_REPORTING });
                PersonnelGroup["dPersonnel.11"] = v3NOT_REPORTING;
            }

        }
        else {
            PersonnelGroup["dPersonnel.11"] = _val;
            _retArray.push('\t\t' + "<dPersonnel.11>" + _val + "</dPersonnel.11>" + '\n');
            _v2Array.push({ section: "D08", element: "D08_11", val: _val });
            _OLAPArray.push('\t\t' + "<DOB>" + _val + "</DOB>" + '\n');

        };

        //////////dPersonnel.12
        _val = getValue(elementList, "dPersonnel.12");
        if (_val == null) {
            if (isRequiredStateElement("dPersonnel.12") == true) {
                ErrorList.push("dPersonnel.12 required");
                _OLAPArray.push('\t\t' + "<Gender>" + "NOT_RECORDED" + "</Gender>" + '\n');
                _retArray.push('\t\t' + "<dPersonnel.12>" + NIL_V3NOT_RECORDED + '\n');
                _v2Array.push({ section: "D08", element: "D08_12", val: v2NOT_RECORDED });
                PersonnelGroup["dPersonnel.12"] = v3NOT_RECORDED
            }
            else {
                _v2Array.push({ section: "D08", element: "D08_12", val: v2NOT_REPORTING });
                _OLAPArray.push('\t\t' + "<Gender>" + "NOT_REPORTING" + "</Gender>" + '\n');
                _retArray.push('\t\t' + "<dPersonnel.12>" + NIL_V3NOT_REPORTING + '\n');
                PersonnelGroup["dPersonnel.12"] = v3NOT_REPORTING;
            }
        }
        else {
            _OLAPArray.push('\t\t' + "<Gender>" + _val + "</Gender>" + '\n');
            PersonnelGroup["dPersonnel.12"] = _val[0];
            _retArray.push('\t\t' + "<dPersonnel.12>" + _val[0] + "</dPersonnel.12>" + '\n');
            _v2Array.push({ section: "D08", element: "D08_12", val: setV2("dPersonnel.12", _val[0]) });
        };


        //////////dPersonnel.13
        _val = getValue(elementList, "dPersonnel.13");
        if (_val == null) {
            if (isRequiredStateElement("dPersonnel.13") == true) {
                _OLAPArray.push('\t\t' + "<Race>" + "NOT_RECORDED" + "</Race>" + '\n');
                ErrorList.push("dPersonnel.13 required");
                _retArray.push('\t\t' + "<dPersonnel.13>" + NIL_V3NOT_RECORDED + '\n');
                _v2Array.push({ section: "D08", element: "D08_13", val: v2NOT_RECORDED });
                PersonnelGroup["dPersonnel.13"] = v3NOT_RECORDED;
            }
            else {
                _OLAPArray.push('\t\t' + "<Race>" + "NOT_REPORTING" + "</Race>" + '\n');
                _v2Array.push({ section: "D08", element: "D08_13", val: v2NOT_REPORTING });
                _retArray.push("<dPersonnel.13>" + NIL_V3NOT_REPORTING + '\n');
                PersonnelGroup["dPersonnel.13"] = v3NOT_REPORTING;
            }
        }
        else {
            var arr = [];
            var arr2 = [];
            for (var t = 0; t < _val.length; t++) {
                arr.push(_val[t]);
                arr2.push(setV2("dPersonnel.13", _val[t]));
                _OLAPArray.push('\t\t' + "<Race>" + _val[t] + "</Race>" + '\n');
                _retArray.push('\t\t' + "<dPersonnel.13>" + _val[t] + "</dPersonnel.13>" + '\n');
            }
            PersonnelGroup["dPersonnel.13"] = arr.slice(0);
            _v2Array.push({ section: "D08", element: "D08_13", val: arr2.slice(0) });
        };

        //////////dPersonnel.15
        _val = getValue(elementList, "dPersonnel.14");
        if (_val == null) {
            _OLAPArray.push('\t\t' + "<Citizenship>" + null + "</Citizenship>" + '\n');
            _retArray.push('\t\t' + "<dPersonnel.14>" + null + "</dPersonnel.14>" + '\n');
            PersonnelGroup["dPersonnel.14"] = null;
        }
        else {
            _OLAPArray.push('\t\t' + "<Citizenship>" + _val[t] + "</Citizenship>" + '\n');
            PersonnelGroup["dPersonnel.14"] = _val;
            _retArray.push('\t\t' + "<dPersonnel.14>" + _val + "</dPersonnel.14>" + '\n');

        };

        //////////dPersonnel.15
        _val = getValue(elementList, "dPersonnel.15");
        if (_val == null) {
            _OLAPArray.push('\t\t' + "<HighestEducationalDegree>" + null + "</HighestEducationalDegree>" + '\n');
            PersonnelGroup["dPersonnel.15"] = null;
            _retArray.push('\t\t' + "<dPersonnel.15>" + null + "</dPersonnel.15>" + '\n');
        }
        else {
            _OLAPArray.push('\t\t' + "<HighestEducationalDegree>" + _val + "</HighestEducationalDegree>" + '\n');
            PersonnelGroup["dPersonnel.15"] = _val;
            _retArray.push('\t\t' + "<dPersonnel.15>" + _val + "</dPersonnel.15>" + '\n');
        };

        //////////dPersonnel.16
        _val = getValue(elementList, "dPersonnel.16");
        if (_val == null) {
            _OLAPArray.push('\t\t' + "<DegreeSubject>" + null + "</DegreeSubject>" + '\n');
            _retArray.push('\t\t' + "<dPersonnel.16>" + null + "</dPersonnel.16>" + '\n');
            PersonnelGroup["dPersonnel.16"] = null;
        }
        else {
            var arr = [];
            for (var t = 0; t < _val.length; t++) {
                arr.push(_val[t]);
                _retArray.push('\t\t' + "<dPersonnel.16>" + _val[t] + "</dPersonnel.16>" + '\n');
                _OLAPArray.push('\t\t' + "<DegreeSubject>" + _val[t] + "</DegreeSubject>" + '\n');
            }
            PersonnelGroup["dPersonnel.16"] = arr.slice(0);
        };

        //////////dPersonnel.17
        _val = getValue(elementList, "dPersonnel.17");
        if (_val == null) {
            _OLAPArray.push('\t\t' + "<MotorVehicleLicenseType>" + null + "</MotorVehicleLicenseType>" + '\n');
            _retArray.push('\t\t' + "<dPersonnel.17>" + null + "</dPersonnel.17>" + '\n');
            PersonnelGroup["dPersonnel.17"] = null;
        }
        else {
            var arr = [];
            for (var t = 0; t < _val.length; t++) {
                arr.push(_val[t]);
                _retArray.push('\t\t' + "<dPersonnel.17>" + _val[t] + "</dPersonnel.17>" + '\n');
                _OLAPArray.push('\t\t' + "<MotorVehicleLicenseType>" + _val[t] + "</MotorVehicleLicenseType>" + '\n');
            }
            PersonnelGroup["dPersonnel.17"] = arr.slice(0);
        };

        ///////////////////////////////////////////////////////
        ///////////////////////ImmunizationsGroup
        _sectionIndex = getSectionIndex(personnelObject.attributes.sections[xx].attributes, "dPersonnel.ImmunizationsGroup");
        // console.log(_sectionIndex)


        for (var x = 0; x < _sectionIndex.length; x++) {
            //            console.log(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements)

            _retArray.push('\t\t' + "<dPersonnel.ImmunizationsGroup>" + '\n');
            _OLAPArray.push('\t\t' + "<dPersonnel.ImmunizationsGroup>" + '\n');

            //////////dPersonnel.18
            _val = getValue(personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.18");
            if (_val == null) {
                _OLAPArray.push('\t\t\t' + "<ImmunizationStatus>" + null + "</ImmunizationStatus>" + '\n');
                _retArray.push('\t\t\t' + "<dPersonnel.18>" + null + "</dPersonnel.18>" + '\n');
                AddressGroup["dPersonnel.18"] = null;
            }
            else {
                _OLAPArray.push('\t\t\t' + "<ImmunizationStatus>" + _val + "</ImmunizationStatus>" + '\n');
                AddressGroup["dPersonnel.18"] = _val;
                _retArray.push('\t\t\t' + "<dPersonnel.18>" + _val + "</dPersonnel.18>" + '\n');
            };

            //////////dPersonnel.19
            _val = getValue(personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.19");
            if (_val == null) {
                _OLAPArray.push('\t\t\t' + "<ImmunizationYear>" + null + "</ImmunizationYear>" + '\n');
                _retArray.push('\t\t\t' + "<dPersonnel.19>" + null + "</dPersonnel.19>" + '\n');
                AddressGroup["dPersonnel.19"] = null;
            }
            else {
                _OLAPArray.push('\t\t\t' + "<ImmunizationYear>" + _val + "</ImmunizationYear>" + '\n');
                AddressGroup["dPersonnel.19"] = _val;
                _retArray.push('\t\t\t' + "<dPersonnel.19>" + _val + "</dPersonnel.19>" + '\n');
            };

            _retArray.push('\t\t' + "</dPersonnel.ImmunizationsGroup>" + '\n');
            _OLAPArray.push('\t\t' + "</dPersonnel.ImmunizationsGroup>" + '\n');
        };
        //////////////////////////////////////////
        //////////////////////////////////////////

        //////////dPersonnel.20
        _val = getValue(elementList, "dPersonnel.20");
        if (_val == null) {
            _OLAPArray.push('\t\t' + "<ForeignLanguageAbility>" + null + "</ForeignLanguageAbility>" + '\n');
            _retArray.push('\t\t' + "<dPersonnel.20>" + null + "</dPersonnel.20>" + '\n');
            PersonnelGroup["dPersonnel.20"] = null;
        }
        else {
            var arr = [];
            for (var t = 0; t < _val.length; t++) {
                arr.push(_val[t]);
                _OLAPArray.push('\t\t' + "<ForeignLanguageAbility>" + _val[t] + "</ForeignLanguageAbility>" + '\n');
                _retArray.push('\t\t' + "<dPersonnel.20>" + _val[t] + "</dPersonnel.20>" + '\n');
            }
            PersonnelGroup["dPersonnel.20"] = arr.slice(0);
        };

        //////////dPersonnel.21
        _val = getValue(elementList, "dPersonnel.21");
        if (_val == null) {
            _OLAPArray.push('\t\t' + "<PersonnelAgencyIDNumber>" + null + "</PersonnelAgencyIDNumber>" + '\n');
            _retArray.push('\t\t' + "<dPersonnel.21>" + null + "</dPersonnel.21>" + '\n');
            PersonnelGroup["dPersonnel.21"] = null;
        }
        else {
            PersonnelGroup["dPersonnel.21"] = _val;
            _retArray.push('\t\t' + "<dPersonnel.21>" + _val + "</dPersonnel.21>" + '\n');
            _OLAPArray.push('\t\t' + "<PersonnelAgencyIDNumber>" + _val + "</PersonnelAgencyIDNumber>" + '\n');
            _v2Array.push({ section: "D08", element: "D08_13", val: _val });
        };

        ////////////////////////////LicensureGroup
        _sectionIndex = getSectionIndex(personnelObject.attributes.sections[xx].attributes, "dPersonnel.LicensureGroup");
        _OLAPArray.push('\t\t' + "<dPersonnel.LicensureGroup>" + '\n');
        _retArray.push('\t\t' + "<dPersonnel.LicensureGroup>" + '\n');

        for (var x = 0; x < _sectionIndex.length; x++) {
            // console.log(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements)
            //dPersonnel.22
            _val = getValue(personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.22");
            if (_val == null) {
                if (isRequiredStateElement("dPersonnel.22") == true) {
                    ErrorList.push("dPersonnel.22 required");
                    _retArray.push('\t\t\t' + "<dPersonnel.22>" + NIL_V3NOT_RECORDED + '\n');
                    _OLAPArray.push('\t\t\t' + "<StateofLicensure>" + "NOT_RECORDED" + "</StateofLicensure>" + '\n');
                }
                else {
                    _OLAPArray.push('\t\t\t' + "<StateofLicensure>" + "NOT_REPORTING" + "</StateofLicensure>" + '\n');
                    _retArray.push('\t\t\t' + "<dPersonnel.22>" + NIL_V3NOT_REPORTING + '\n');
                }
            }
            else {
                _OLAPArray.push('\t\t\t' + "<StateofLicensure>" + _val + "</StateofLicensure>" + '\n');
                _retArray.push('\t\t\t' + "<dPersonnel.22>" + _val + "</dPersonnel.22>" + '\n');
                LicensureGroup["dPersonnel.22"] = _val;
            };


            //dPersonnel.23
            _val = getValue(personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.23");
            if (_val == null) {
                if (isRequiredStateElement("dPersonnel.23") == true) {
                    _OLAPArray.push('\t\t\t' + "<StateLicensureIDNumber>" + "NOT_RECORDED" + "</StateLicensureIDNumber>" + '\n');
                    ErrorList.push("dPersonnel.23 required");
                    _retArray.push('\t\t\t' + "<dPersonnel.23>" + NIL_V3NOT_RECORDED + '\n');
                }
                else {
                    _OLAPArray.push('\t\t\t' + "<StateLicensureIDNumber>" + "NOT_REPORTING" + "</StateLicensureIDNumber>" + '\n');
                    _retArray.push('\t\t\t' + "<dPersonnel.23>" + NIL_V3NOT_REPORTING + '\n');
                }
            }
            else {
                _retArray.push('\t\t\t' + "<dPersonnel.23>" + _val + "</dPersonnel.23>" + '\n');
                _OLAPArray.push('\t\t\t' + "<StateLicensureIDNumber>" + _val + "</StateLicensureIDNumber>" + '\n');
                LicensureGroup["dPersonnel.23"] = _val;
            };

            //dPersonnel.24
            _val = getValue(personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.24");
            if (_val == null) {
                if (isRequiredStateElement("dPersonnel.24") == true) {
                    _OLAPArray.push('\t\t\t' + "<EMSCertificationLicensureLevel>" + "NOT_RECORDED" + "</EMSCertificationLicensureLevel>" + '\n');
                    ErrorList.push("dPersonnel.24 required");
                    _retArray.push('\t\t\t' + "<dPersonnel.24>" + NIL_V3NOT_RECORDED + '\n');
                }
                else {
                    _OLAPArray.push('\t\t\t' + "<EMSCertificationLicensureLevel>" + "NOT_RECORDED" + "</EMSCertificationLicensureLevel>" + '\n');
                    _retArray.push('\t\t\t' + "<dPersonnel.24>" + NIL_V3NOT_REPORTING + '\n');
                }
            }
            else {
                _OLAPArray.push('\t\t\t' + "<EMSCertificationLicensureLevel>" + _val + "</EMSCertificationLicensureLevel>" + '\n');
                _retArray.push('\t\t\t' + "<dPersonnel.24>" + _val[0] + "</dPersonnel.24>" + '\n');
                LicensureGroup["dPersonnel.24"] = _val[0];
            };

            //dPersonnel.25
            _val = getValue(personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.24");
            if (_val == null) {
                _retArray.push('\t\t\t' + "<dPersonnel.25>" + null + "</dPersonnel.25>" + '\n');
                _OLAPArray.push('\t\t\t' + "<EMSCurrentCertificationDate>" + null + "</EMSCurrentCertificationDate>" + '\n');
                LicensureGroup["dPersonnel.25"] = null;
            }
            else {
                _retArray.push('\t\t\t' + "<dPersonnel.25>" + _val[0] + "</dPersonnel.25>" + '\n');
                _OLAPArray.push('\t\t\t' + "<EMSCurrentCertificationDate>" + _val[0] + "</EMSCurrentCertificationDate>" + '\n');
                LicensureGroup["dPersonnel.25"] = _val[0];
            };

            //dPersonnel.26
            _val = getValue(personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.24");
            if (_val == null) {
                _OLAPArray.push('\t\t\t' + "<InitialStateLicensureIssueDate>" + null + "</InitialStateLicensureIssueDate>" + '\n');
                _retArray.push('\t\t\t' + "<dPersonnel.26>" + null + "</dPersonnel.26>" + '\n');
                LicensureGroup["dPersonnel.26"] = null;
            }
            else {
                _OLAPArray.push('\t\t\t' + "<InitialStateLicensureIssueDate>" + _val[0] + "</InitialStateLicensureIssueDate>" + '\n');
                _retArray.push('\t\t\t' + "<dPersonnel.26>" + _val[0] + "</dPersonnel.26>" + '\n');
                LicensureGroup["dPersonnel.26"] = _val[0];
            };

            //dPersonnel.27
            _val = getValue(personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.24");
            if (_val == null) {
                _OLAPArray.push('\t\t\t' + "<CurrentStateLicensureExpirationDate>" + null + "</CurrentStateLicensureExpirationDate>" + '\n');
                _retArray.push('\t\t\t' + "<dPersonnel.27>" + null + "</dPersonnel.27>" + '\n');
                LicensureGroup["dPersonnel.27"] = null;
            }
            else {
                _OLAPArray.push('\t\t\t' + "<CurrentStateLicensureExpirationDate>" + _val[0] + "</CurrentStateLicensureExpirationDate>" + '\n');
                _retArray.push('\t\t\t' + "<dPersonnel.27>" + _val[0] + "</dPersonnel.27>" + '\n');
                LicensureGroup["dPersonnel.27"] = _val[0];
            };


            _retArray.push('\t\t' + "</dPersonnel.LicensureGroup>" + '\n');
            _OLAPArray.push('\t\t' + "</dPersonnel.LicensureGroup>" + '\n');
        };

        //dPersonnel.28
        _val = getValue(elementList, "dPersonnel.28");
        if (_val == null) {
            _OLAPArray.push('\t\t' + "<NationalRegistryNumber>" + null + "</NationalRegistryNumber>" + '\n');
            PersonnelGroup["dPersonnel.28"] = null;
            _retArray.push('\t\t' + "<dPersonnel.28>" + null + "</dPersonnel.28>" + '\n');
        }
        else {
            _OLAPArray.push('\t\t' + "<NationalRegistryNumber>" + _val[0] + "</NationalRegistryNumber>" + '\n');
            PersonnelGroup["dPersonnel.28"] = _val[0];
            _retArray.push('\t\t' + "<dPersonnel.28>" + _val[0] + "</dPersonnel.28>" + '\n');
        };

        //dPersonnel.29
        _val = getValue(elementList, "dPersonnel.29");
        if (_val == null) {
            _OLAPArray.push('\t\t' + "<NationalRegistryCertificationLevel>" + null + "</NationalRegistryCertificationLevel>" + '\n');
            PersonnelGroup["dPersonnel.29"] = null;
            _retArray.push('\t\t' + "<dPersonnel.29>" + null + "</dPersonnel.29>" + '\n');
        }
        else {
            _OLAPArray.push('\t\t' + "<NationalRegistryCertificationLevel>" + _val[0] + "</NationalRegistryCertificationLevel>" + '\n');
            PersonnelGroup["dPersonnel.29"] = _val[0];
            _retArray.push('\t\t' + "<dPersonnel.29>" + _val[0] + "</dPersonnel.29>" + '\n');
        };

        //dPersonnel.30
        _val = getValue(elementList, "dPersonnel.30");
        if (_val == null) {
            _OLAPArray.push('\t\t' + "<CurrentNationalRegistryExpirationDate>" + null + "</CurrentNationalRegistryExpirationDate>" + '\n');
            PersonnelGroup["dPersonnel.30"] = null;
            _retArray.push('\t\t' + "<dPersonnel.30>" + null + "</dPersonnel.30>" + '\n');
        }
        else {
            _OLAPArray.push('\t\t' + "<CurrentNationalRegistryExpirationDate>" + _val[0] + "</CurrentNationalRegistryExpirationDate>" + '\n');
            PersonnelGroup["dPersonnel.30"] = _val[0];
            _retArray.push('\t\t' + "<dPersonnel.30>" + _val[0] + "</dPersonnel.30>" + '\n');
        };

        //dPersonnel.31

        _val = getValue(elementList, "dPersonnel.31");
        if (_val == null) {
            if (isRequiredStateElement("dPersonnel.31") == true) {

                ErrorList.push("dPersonnel.13 required");
                _retArray.push('\t\t' + "<dPersonnel.31>" + NIL_V3NOT_RECORDED + '\n');
                _v2Array.push({ section: "D07", element: "D07_03", val: v2NOT_RECORDED });
                PersonnelGroup["dPersonnel.31"] = v3NOT_RECORDED;
                _OLAPArray.push('\t\t' + "<EmploymentStatus>" + "NOT_RECORDED" + "</EmploymentStatus>" + '\n');
            }
            else {
                _retArray.push('\t\t' + "<dPersonnel.31>" + NIL_V3NOT_REPORTING + '\n');
                _OLAPArray.push('\t\t' + "<EmploymentStatus>" + "NOT_REPORTING" + "</EmploymentStatus>" + '\n');
                _v2Array.push({ section: "D07", element: "D07_03", val: v2NOT_REPORTING });
                PersonnelGroup["dPersonnel.31"] = V3NOT_REPORTING;
            }
        }
        else {
            PersonnelGroup["dPersonnel.31"] = _val[0];
            _OLAPArray.push('\t\t' + "<EmploymentStatus>" + _val[0] + "</EmploymentStatus>" + '\n');
            _v2Array.push({ section: "D07", element: "D07_03", val: setD2("dPersonnel.31", _val[0]) });
            _retArray.push('\t\t' + "<dPersonnel.31>" + _val[0] + "</dPersonnel.31>" + '\n');
        };

        //dPersonnel.32
        _val = getValue(elementList, "dPersonnel.32");
        if (_val == null) {
            if (isRequiredStateElement("dPersonnel.32") == true) {
                ErrorList.push("dPersonnel.32 required");
                _retArray.push('\t\t' + "<dPersonnel.32>" + NIL_V3NOT_RECORDED + '\n');
                _v2Array.push({ section: "D07", element: "D07_04", val: v2NOT_RECORDED });
                PersonnelGroup["dPersonnel.32"] = v3NOT_RECORDED;
                _OLAPArray.push('\t\t' + "<EmploymentStatusDate>" + "NOT_RECORDED" + "</EmploymentStatusDate>" + '\n');
            }
            else {
                _v2Array.push({ section: "D07", element: "D07_04", val: v2NOT_REPORTING });
                _retArray.push('\t\t' + "<dPersonnel.32>" + NIL_V3NOT_REPORTING + '\n');
                PersonnelGroup["dPersonnel.32"] = V3NOT_REPORTING;
                _OLAPArray.push('\t\t' + "<EmploymentStatusDate>" + "NOT_REPORTING" + "</EmploymentStatusDate>" + '\n');
            }
        }
        else {
            PersonnelGroup["dPersonnel.32"] = _val[0];
            _retArray.push('\t\t' + "<dPersonnel.32>" + _val[0] + "</dPersonnel.32>" + '\n');
            _v2Array.push({ section: "D07", element: "D07_04", val: _val });
            _OLAPArray.push('\t\t' + "<EmploymentStatusDate>" + _val + "</EmploymentStatusDate>" + '\n');
        };


        //dPersonnel.33
        _val = getValue(elementList, "dPersonnel.33");
        if (_val == null) {
            PersonnelGroup["dPersonnel.33"] = null;
            _retArray.push('\t\t' + "<dPersonnel.33>" + null + "</dPersonnel.33>" + '\n');
            _OLAPArray.push('\t\t' + "<Hire Date>" + null + "</HireDate>" + '\n');
        }
        else {
            _OLAPArray.push('\t\t' + "<Hire Date>" + _val[0] + "</HireDate>" + '\n');
            PersonnelGroup["dPersonnel.33"] = _val[0];
            _retArray.push('\t\t' + "<dPersonnel.33>" + _val[0] + "</dPersonnel.33>" + '\n');
        };

        //dPersonnel.34
        _val = getValue(elementList, "dPersonnel.34");
        if (_val == null) {
            if (isRequiredStateElement("dPersonnel.34") == true) {
                PersonnelGroup["dPersonnel.34"] = v3NOT_RECORDED;
                _OLAPArray.push('\t\t' + "<PrimaryEMSJobRole>" + "NOT_RECORDED" + "</PrimaryEMSJobRole>" + '\n');
                ErrorList.push("dPersonnel.34 required");
                _retArray.push('\t\t' + "<dPersonnel.34>" + NIL_V3NOT_RECORDED + '\n');
            }
            else {
                _retArray.push('\t\t' + "<dPersonnel.34>" + NIL_V3NOT_REPORTING + '\n');
                PersonnelGroup["dPersonnel.34"] = V3NOT_REPORTING;
                _OLAPArray.push('\t\t' + "<PrimaryEMSJobRole>" + "NOT_REPORTING" + "</PrimaryEMSJobRole>" + '\n');
            }

        }
        else {
            PersonnelGroup["dPersonnel.34"] = _val[0];
            _retArray.push('\t\t' + "<dPersonnel.34>" + _val[0] + "</dPersonnel.34>" + '\n');
            _OLAPArray.push('\t\t' + "<PrimaryEMSJobRole>" + _val[0] + "</PrimaryEMSJobRole>" + '\n');
        };

        //dPersonnel.35
        _val = getValue(elementList, "dPersonnel.35");
        if (_val == null) {
            if (isRequiredStateElement("dPersonnel.35") == true) {
                ErrorList.push("dPersonnel.35 required");
                _retArray.push('\t\t' + "<dPersonnel.35>" + NIL_V3NOT_RECORDED + '\n');
                PersonnelGroup["dPersonnel.35"] = v3NOT_RECORDED;
                _OLAPArray.push('\t\t' + "<OtherJobResponsibilities>" + "NOT_RECORDED" + "</OtherJobResponsibilities>" + '\n');
            }
            else {
                _retArray.push('\t\t' + "<dPersonnel.35>" + NIL_V3NOT_REPORTING + '\n');
                PersonnelGroup["dPersonnel.35"] = V3NOT_REPORTING;
                _OLAPArray.push('\t\t' + "<OtherJobResponsibilities>" + "NOT_REPORTING" + "</OtherJobResponsibilities>" + '\n');
            }
        }
        else {
            for (var t = 0; t < _val.length; t++) {
                arr.push(_val[t]);
                _retArray.push('\t\t' + "<dPersonnel.35>" + _val[t] + "</dPersonnel.35>" + '\n');
                _OLAPArray.push('\t\t' + "<OtherJobResponsibilities>" + _val[t] + "</OtherJobResponsibilities>" + '\n');
            }
            PersonnelGroup["dPersonnel.35"] = arr.slice(0);
        };

        _val = getValue(elementList, "dPersonnel.36");
        if (_val == null) {
            PersonnelGroup["dPersonnel.36"] = null;
            _retArray.push('\t\t' + "<dPersonnel.36>" + null + "</dPersonnel.36>" + '\n');
            _OLAPArray.push('\t\t' + "<TotalLengthofServiceinYears>" + null + "</TotalLengthofServiceinYears>" + '\n');
            _v2Array.push({ section: "D08", element: "D08_19", val: null });
        }
        else {
            PersonnelGroup["dPersonnel.36"] = _val[0];
            _retArray.push('\t\t' + "<dPersonnel.36>" + _val[0] + "</dPersonnel.36>" + '\n');
            _OLAPArray.push('\t\t' + "<TotalLengthofServiceinYears>" + n_val + "</TotalLengthofServiceinYears>" + '\n');
            _v2Array.push({ section: "D08", element: "D08_19", val: _val });
        };

        _val = getValue(elementList, "dPersonnel.37");
        if (_val == null) {
            _OLAPArray.push('\t\t' + "<DateLengthofServiceDocumented>" + null + "</DateLengthofServiceDocumented>" + '\n');
            PersonnelGroup["dPersonnel.37"] = null;
            _retArray.push('\t\t' + "<dPersonnel.37>" + null + "</dPersonnel.37>" + '\n');
            _v2Array.push({ section: "D08", element: "D08_20", val: null });
        }
        else {
            _OLAPArray.push('\t\t' + "<DateLengthofServiceDocumented>" + _val + "</DateLengthofServiceDocumented>" + '\n');
            PersonnelGroup["dPersonnel.37"] = _val;
            _v2Array.push({ section: "D08", element: "D08_20", val: _val });
            _retArray.push('\t\t' + "<dPersonnel.37>" + _val + "</dPersonnel.37>" + '\n');
        };

        ////////////////////////////CertificationLevelGroup
        _sectionIndex = getSectionIndex(personnelObject.attributes.sections[xx].attributes, "dPersonnel.CertificationLevelGroup");

        if (_sectionIndex > 0) {
            for (var x = 0; x < _sectionIndex.length; x++) {
                // console.log(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements)

                _retArray.push('\t\t' + "<dPersonnel.CertificationLevelGroup>" + '\n');
                _OLAPArray.push('\t\t' + "<dPersonnel.CertificationLevelGroup>" + '\n');

                //dPersonnel.38
                _val = getValue(personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.38");
                if (_val == null) {
                    _retArray.push('\t\t\t' + "<dPersonnel.38>" + null + "</dPersonnel.38>" + '\n');
                    _OLAPArray.push('\t\t\t' + "<EMSProfessionalPracticeLevel>" + null + "</EMSProfessionalPracticeLevel>" + '\n');
                    CertificationLevelGroup["dPersonnel.38"] = null;
                    _v2Array.push({ section: "D07", element: "D07_05", val: null });
                }
                else {
                    _OLAPArray.push('\t\t\t' + "<EMSProfessionalPracticeLevel>" + _val[0] + "</EMSProfessionalPracticeLevel>" + '\n');
                    _retArray.push('\t\t\t' + "<dPersonnel.38>" + _val[0] + "</dPersonnel.38>" + '\n');
                    CertificationLevelGroup["dPersonnel.38"] = _val[0];
                    _v2Array.push({ section: "D07", element: "D07_05", val: _val[0] });
                };

                //dPersonnel.39
                _val = getValue(personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.39");
                if (_val== null) {
                    _v2Array.push({ section: "D07", element: "D07_06", val: null });
                    _retArray.push('\t\t\t' + "<dPersonnel.39>" + null + "</dPersonnel.39>" + '\n');
                    _OLAPArray.push('\t\t\t' + "<DateofProfessionalCertificationorLicensureforAgency>" + null + "</DateofProfessionalCertificationorLicensureforAgency>" + '\n');
                    CertificationLevelGroup["dPersonnel.39"] = null;
                }
                else {
                    _v2Array.push({ section: "D07", element: "D07_06", val: _val[0] });
                    _OLAPArray.push('\t\t\t' + "<DateofProfessionalCertificationorLicensureforAgency>" + _val[0] + "</DateofProfessionalCertificationorLicensureforAgency>" + '\n');
                    _retArray.push('\t\t\t' + "<dPersonnel.39>" + _val[0] + "</dPersonnel.39>" + '\n');
                    CertificationLevelGroup["dPersonnel.39"] = _val[0];
                };


                _retArray.push('\t\t' + "</dPersonnel.CertificationLevelGroup>" + '\n');
                _OLAPArray.push('\t\t' + "</dPersonnel.CertificationLevelGroup>" + '\n');
            };
        }


        _retArray.push('\t' + "</PersonnelGroup>" + '\n');
        _OLAPArray.push('\t' + "</PersonnelGroup>" + '\n');
    }

    _retArray.push("</dPersonnel>" + '\n');
    _OLAPArray.push("</dPersonnel>" + '\n');

    for (var i = 0; i < _retArray.length ; i++) {
        XMLString = XMLString + _retArray[i];

    }
    return _retArray;
};


var setdState = function (stateObject) {

    //console.log(businessObject);

    var _retArray = [];
    var _OLAPArray = [];
    var _sectionIndex = 0;
    var dState = new Object();
    // console.log(businessObject);
    _retArray.push("<dState>" + '\n');
    _OLAPArray.push("<dState>" + '\n');

    var _elementList = stateObject.attributes.elements;

    _val = getValue(_elementList, "dState.01");
        if (_val == null) {
            dState["dState.01"] = null;
            _OLAPArray.push('\t' + "<StateRequiredElement>" + null + "</StateRequiredElement>" + '\n');
            _retArray.push('\t' + "<dState.01>" + null + "</dState.01>" + '\n');
        }
        else
        {
            var arr = [];
            for (var t = 0; t < _val.length; t++) {
           
                arr.push(_val[t]);
                _OLAPArray.push('\t' + "<StateRequiredElement>" + _val[t] + "</StateRequiredElement>" + '\n');
                _retArray.push('\t' + "<dState.01>" + _val[t] + "</dState.01>" + '\n');
            }
            dState["dState.01"] = arr.slice(0);

        }

        _retArray.push( "</dState>" + '\n');
        _OLAPArray.push( "</dState>" + '\n');
    


    for (var i = 0; i < _retArray.length ; i++) {
        XMLString = XMLString + _retArray[i];

    }
    return _retArray;
};
var setdVehicle = function (dVehicleObject) {

    var dVehicle = new Object;
    var VehicleGroup = new Object;
    var _v2Array = [];
    _retArray.push("<dVehicle>" + '\n');
    _OLAPArray.push("<dVehicle>" + '\n');
    for (var xx = 0; xx < dVehicleObject.attributes.sections.length; xx++) {
        var elementList = dVehicleObject.attributes.sections[xx].attributes.elements;
        _retArray.push('\t' + "<dVehicle.VehicleGroup>" + '\n');
        _OLAPArray.push('\t' + "<dVehicle.VehicleGroup>" + '\n');

        ///////dVehicle.01
        _val = getValue(elementList, "dVehicle.01");
        if (_val == null) {
            if (isRequiredStateElement("dVehicle.01") == - true) {
                _OLAPArray.push('\t\t' + "<UnitVehicleNumber>" + "NOT_RECORDED" + "</UnitVehicleNumber>" + '\n');
                VehicleGroup["dVehicle.01"] = v3NOT_RECORDED;
                _retArray.push('\t\t' + "<dVehicle.01" + v3NOT_RECORDED + '\n');
                _v2Array.push({ section: "D06", element: "D06_01", val: null });
            }
            else {
                _OLAPArray.push('\t\t' + "<UnitVehicleNumber>" + "NOT_REPORTING" + "</UnitVehicleNumber>" + '\n');
                VehicleGroup["dVehicle.01"] = v3NOT_REPORTING;
                _retArray.push('\t\t' + "<dVehicle.01" + v3NOT_REPORTING + '\n');
                _v2Array.push({ section: "D06", element: "D06_01", val: null });
            }
        }
        else {
            _OLAPArray.push('\t\t' + "<UnitVehicleNumber>" + _val + "</UnitVehicleNumber>" + '\n');
            _retArray.push('\t\t' + "<dVehicle.01>" + _val + "</dVehicle.01>" + '\n');
            VehicleGroup["dVehicle.01"] = _val;
            _v2Array.push({ section: "D06", element: "D06_01", val: _val });
        };


        ///////dVehicle.02
        _val = getValue(elementList, "dVehicle.02");
        if (_val == null) {
            _OLAPArray.push('\t\t' + "<VIN>" + null + "</VIN>" + '\n');
            VehicleGroup["dVehicle.02"] = null;
            _retArray.push('\t\t' + "<dVehicle.02>" + null + "</dVehicle.02>" + '\n');
        }
        else {
            _OLAPArray.push('\t\t' + "<VIN>" + _val + "</VIN>" + '\n');
            _retArray.push('\t\t' + "<dVehicle.02>" + _val + "</dVehicle.02>" + '\n');
            VehicleGroup["dVehicle.02"] = _val;
        };

        ///////dVehicle.03
        _val = getValue(elementList, "dVehicle.03");
        if (_val == null) {
            _OLAPArray.push('\t\t' + "<UnitCallSign>" + null + "</UnitCallSign>" + '\n');
            VehicleGroup["dVehicle.03"] = null;
            _retArray.push('\t\t' + "<dVehicle.03>" + null + "</dVehicle.03>" + '\n');

        }
        else {
            _OLAPArray.push('\t\t' + "<UnitCallSign>" + _val + "</UnitCallSign>" + '\n');
            _retArray.push('\t\t' + "<dVehicle.03>" + _val + "</dVehicle.03>" + '\n');
            VehicleGroup["dVehicle.03"] = _val;
        };


        ///////dVehicle.04
        _val = getValue(elementList, "dVehicle.04");
        if (_val == null) {
            if (isRequiredStateElement("dVehicle.04") == - true) {
                _OLAPArray.push('\t\t' + "<VehicleType>" + "NOT_RECORDED" + "</VehicleType>" + '\n');
                VehicleGroup["dVehicle.04"] = v3NOT_RECORDED;
                _retArray.push('\t\t' + "<dVehicle.04" + v3NOT_RECORDED + '\n');
                _v2Array.push({ section: "D06", element: "D06_03", val: null });
            }
            else {
                _OLAPArray.push('\t\t' + "<VehicleType>" + "NOT_REPORTING" + "</VehicleType>" + '\n');
                VehicleGroup["dVehicle.04"] = v3NOT_REPORTING;
                _retArray.push('\t\t' + "<dVehicle.04" + v3NOT_REPORTING + '\n');
                _v2Array.push({ section: "D06", element: "D06_03", val: null });
            }
        }
        else {
            _OLAPArray.push('\t\t' + "<VehicleType>" + _val + "</VehicleType>" + '\n');
            _retArray.push('\t\t' + "<dVehicle.04>" + _val + "</dVehicle.04>" + '\n');
            VehicleGroup["dVehicle.04"] = _val;
            _v2Array.push({ section: "D06", element: "D06_03", val: setV2("dVehicle.04", _val) });
        };

        ///////////////        
        _sectionIndex = getSectionIndex(dVehicleObject.attributes.sections[xx].attributes, "dVehicle.VehicleCertificationLevelsGroup");


        for (var x = 0; x < _sectionIndex.length; x++) {
            _retArray.push('\t\t' + "<dVehicle.VehicleCertificationLevelsGroup>" + '\n');
            _OLAPArray.push('\t\t' + "<dVehicle.VehicleCertificationLevelsGroup>" + '\n');
            //////////////////dVehicle.05
            _val = getValue(dVehicleObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dVehicle.05");
            if (_val == null) {
                _OLAPArray.push('\t\t\t' + "<Crew StateLicensureLevels>" + null + "</CrewStateLicensureLevels>" + '\n');
                VehicleGroup["dVehicle.05"] = null;
                _retArray.push('\t\t\t' + "<dVehicle.05>" + null + "</dVehicle.05>" + '\n');
                _v2Array.push({ section: "D06", element: "D06_04", val: null });
            }
            else {
                _OLAPArray.push('\t\t\t' + "<Crew StateLicensureLevels>" + _val + "</CrewStateLicensureLevels>" + '\n');
                _retArray.push('\t\t\t' + "<dVehicle.05>" + _val + "</dVehicle.05>" + '\n');
                VehicleGroup["dVehicle.05"] = _val;
                _v2Array.push({ section: "D06", element: "D06_04", val: setV2("dVehicle.04", _val) });
            };

            //////////////////dVehicle.06
            _val = getValue(dVehicleObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dVehicle.06");
            if (_val == null) {
                _OLAPArray.push('\t\t\t' + "<NumberEMSPersonnelonNormal911>" + null + "</NumberEMSPersonnelonNormal911>" + '\n');
                VehicleGroup["dVehicle.06"] = null;
                _retArray.push('\t\t\t' + "<dVehicle.06>" + null + "</dVehicle.06>" + '\n');
                _retArray.push('\t\t\t' + "<dVehicle.06>" + null + "</dVehicle.06>" + '\n');
            }
            else {
                _OLAPArray.push('\t\t\t' + "<NumberEMSPersonnelonNormal911>" + _val + "</NumberEMSPersonnelonNormal911>" + '\n');
                _retArray.push('\t\t\t' + "<dVehicle.06>" + _val + "</dVehicle.06>" + '\n');
                VehicleGroup["dVehicle.06"] = _val;
                _v2Array.push({ section: "D06", element: "D06_05", val: _val });
            };

            //////////////////dVehicle.07
            _val = getValue(dVehicleObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dVehicle.07");
            if (_val == null) {
                _OLAPArray.push('\t\t\t' + "<NumberEMSPersonnelLevelNormal911ResponseNonTransport>" + null + "</NumberEMSPersonnelLevelNormal911ResponseNonTransport>" + '\n');
                VehicleGroup["dVehicle.07"] = null;
                _retArray.push('\t\t\t' + "<dVehicle.07>" + null + "</dVehicle.07>" + '\n');
            }
            else {
                _OLAPArray.push('\t\t\t' + "<NumberEMSPersonnelLevelNormal911ResponseNonTransport>" + _val + "</NumberEMSPersonnelLevelNormal911ResponseNonTransport>" + '\n');
                _retArray.push('\t\t\t' + "<dVehicle.07>" + _val + "</dVehicle.07" + '\n');
                VehicleGroup["dVehicle.07"] = _val;
            };

            //////////////////dVehicle.08
            _val = getValue(dVehicleObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dVehicle.08");
            if (_val == null) {
                _OLAPArray.push('\t\t\t' + "<NumberEMSPersonnelLevelNormal911ResponseTransport>" + null + "</NumberEMSPersonnelLevelNormal911ResponseTransport>" + '\n');
                VehicleGroup["dVehicle.08"] = null;
                _retArray.push('\t\t\t' + "<dVehicle.08>" + null + "</dVehicle.08>" + '\n');
            }
            else {
                _OLAPArray.push('\t\t\t' + "<NumberEMSPersonnelLevelNormal911ResponseTransport>" + _val + "</NumberEMSPersonnelLevelNormal911ResponseTransport>" + '\n');
                _retArray.push('\t\t\t' + "<dVehicle.08>" + _val + "</dVehicle.08" + '\n');
                VehicleGroup["dVehicle.08"] = _val;
            };

            _OLAPArray.push('\t\t' + "</dVehicle.VehicleCertificationLevelsGroupeGroup>" + '\n');
            _retArray.push('\t\t' + "</dVehicle.VehicleCertificationLevelsGroupeGroup>" + '\n');

        };

        /////////////dVehicle.09
        _val = getValue(elementList, "dVehicle.09");
        if (_val == null) {
            _OLAPArray.push('\t\t' + "<VehicleInitialCost>" + null + "</VehicleInitialCost>" + '\n');
            VehicleGroup["dVehicle.09"] = null;
            _retArray.push('\t\t' + "<dVehicle.09>" + null + "</dVehicle.09>" + '\n');
            _v2Array.push({ section: "D06", element: "D06_06", val: null });
        }
        else {
            _OLAPArray.push('\t\t' + "<VehicleInitialCost>" + _val[0] + "</VehicleInitialCost>" + '\n');
            VehicleGroup["dVehicle.09"] = _val[0];
            _retArray.push('\t\t' + "<dVehicle.09>" + _val[0] + "</dVehicle.09>" + '\n');
            _v2Array.push({ section: "D06", element: "D06_06", val: _val });
        };

        /////////////dVehicle.10
        _val = getValue(elementList, "dVehicle.10");
        if (_val == null) {
            if (isRequiredStateElement("dVehicle.10") == - true) {
                _OLAPArray.push('\t\t' + "<ModelYear>" + "NOT_RECORDED" + "</ModelYear>" + '\n');
                VehicleGroup["dVehicle.10"] = v3NOT_RECORDED;
                _retArray.push('\t\t' + "<dVehicle.10" + v3NOT_RECORDED + '\n');
                _v2Array.push({ section: "D06", element: "D06_07", val: v2NOT_RECORDED });
            }
            else {
                _OLAPArray.push('\t\t' + "<ModelYear>" + "NOT_REPORTING" + "</ModelYear>" + '\n');
                VehicleGroup["dVehicle.10"] = v3NOT_REPORTING;
                _retArray.push('\t\t' + "<dVehicle.10" + v3NOT_REPORTING + '\n');
                _v2Array.push({ section: "D06", element: "D06_07", val: v2NOT_REPORTING });
            }
        }
        else {
            _OLAPArray.push('\t\t' + "<ModelYear>" + _val[0] + "</ModelYear>" + '\n');
            _retArray.push('\t\t' + "<dVehicle.10>" + _val[0] + "</dVehicle.10>" + '\n');
            VehicleGroup["dVehicle.10"] = _val[0];
            _v2Array.push({ section: "D06", element: "D06_07", val: _val });
        };

        _sectionIndex = getSectionIndex(dVehicleObject.attributes.sections[xx].attributes, "dVehicle.YearGroup");
        // console.log(_sectionIndex)


        for (var x = 0; x < _sectionIndex.length; x++) {
            _retArray.push('\t\t' + "<dVehicle.YearGroup>" + '\n');
            _OLAPArray.push('\t\t' + "<dVehicle.YearGroup>" + '\n');

            _val = getValue(dVehicleObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dVehicle.11");
            if (_val == null) {
                _OLAPArray.push('\t\t\t' + "<MilesKilometersHoursAccrued>" + null + "</MilesKilometersHoursAccrued>" + '\n');
                VehicleGroup["dVehicle.11"] = null;
                _retArray.push('\t\t\t' + "<dVehicle.11>" + null + "</dVehicle.11>" + '\n');
                _v2Array.push({ section: "D06", element: "D06_08", val: null });
            }
            else {
                _OLAPArray.push('\t\t\t' + "<MilesKilometersHoursAccrued>" + _val[0] + "</MilesKilometersHoursAccrued>" + '\n');
                _retArray.push('\t\t\t' + "<dVehicle.11>" + _val[0] + "</dVehicle.11>" + '\n');
                VehicleGroup["dVehicle.11"] = _val[0];
                _v2Array.push({ section: "D06", element: "D06_08", val: _val });
            };

            _val = getValue(dVehicleObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dVehicle.12");
            if (_val == null) {
                _OLAPArray.push('\t\t\t' + "<AnnualVehicleHours>" + null + "</AnnualVehicleHours>" + '\n');
                VehicleGroup["dVehicle.12"] = null;
                _retArray.push('\t\t\t' + "<dVehicle.12>" + null + "</dVehicle.12>" + '\n');
                _v2Array.push({ section: "D06", element: "D06_09", val: null });
            }
            else {
                _OLAPArray.push('\t\t\t' + "<AnnualVehicleHours>" + _val[0] + "</AnnualVehicleHours>" + '\n');
                _retArray.push('\t\t\t' + "<dVehicle.12>" + _val[0] + "</dVehicle.12>" + '\n');
                VehicleGroup["dVehicle.12"] = _val[0];
                _v2Array.push({ section: "D06", element: "D06_09", val: _val });
            };


            //////////dVehicle.13
            _val = getValue(dVehicleObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dVehicle.13");
            if (_val == null) {
                _OLAPArray.push('\t\t\t' + "<AnnualVehicleMiles>" + null + "</AnnualVehicleMiles>" + '\n');
                VehicleGroup["dVehicle.13"] = null;
                _retArray.push('\t\t\t' + "<dVehicle.13>" + null + "</dVehicle.13>" + '\n');
                _v2Array.push({ section: "D06", element: "D06_10", val: null });
            }
            else {
                _OLAPArray.push('\t\t\t' + "<AnnualVehicleMiles>" + _val[0] + "</AnnualVehicleMiles>" + '\n');
                _retArray.push('\t\t\t' + "<dVehicle.13>" + _val[0] + "</dVehicle.13>" + '\n');
                VehicleGroup["dVehicle.13"] = _val[0];
                _v2Array.push({ section: "D06", element: "D06_10", val: _val });
            };
            _retArray.push('\t\t' + "</dVehicle.VehicleGroup>" + '\n');
        };

        _retArray.push('\t' + "</dVehicle.YearGroup>" + '\n');
        _OLAPArray.push('\t' + "</dVehicle.YearGroup>" + '\n');

    } // loop term
    _retArray.push("<dVehicle>" + '\n');
    _OLAPArray.push("<dVehicle>" + '\n');

    for (var i = 0; i < _retArray.length ; i++) {
        XMLString = XMLString + _retArray[i];

    }


    var OLAPArrayString = "";
    for (var i = 0; i < _OLAPArray.length ; i++) {
        var OLAPArrayString = OLAPArrayString + _OLAPArray[i];
    }
    //console.log(OLAPArrayString)
};    //end of function   

var isRequiredStateElement = function (elementID) {
    return true;
};
var getValue = function (elementList, valueObject) {
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
function setV2(NEMSISElementNumber, v3Val) {

    var returnValue = "";
    switch (NEMSISElementNumber) {
        case "dAgency.09":
            if (dAgency09 == undefined) {
                returnValue = "UNDEFINED";
            }
            else {
                returnValue = dAgency09[v3Val];
            }
            break;
        case "dAgency.10":
            for (i = 0; i < codeVal.length; i++) {
                if (dAgency10[v3Val] == undefined) {
                    returnValue = "UNDEFINED";
                }
                else {
                    _retArray.push(dAgency10[v3Val]);
                }
            }
            break;
        case "dAgency.11":
            if (dAgency11[v3Val] == undefined) {
                returnValue = "UNDEFINED";
            }
            else {
                _retArray.push(dAgency11[v3Val]);
            }
            break;
        case "dAgency.12":
            if (dAgency12[v3Val] == undefined) {
                returnValue = "UNDEFINED";
            }
            else {
                returnValue = dAgency12[v3Val];
            }
            break;
        case "dAgency.13":
            if (dAgency13[v3Val] == undefined) {
                returnValue = "UNDEFINED";
            }
            else {
                returnValue = dAgency13[v3Val];
            }
            break;

        case "dAgency.23":
            if (dAgency23[v3Val] == undefined) {
                returnValue = "UNDEFINED";
            }
            else {
                returnValue = dAgency23[v3Val];
            }
            break;

        case "dAgency.24":
            if (dAgency24[v3Val] == undefined) {
                returnValue = "UNDEFINED";
            }
            else {
                returnValue = dAgency24[v3Val];
            }
            break;

        case "dConfiguration.02":
            if (dConfiguration02 == undefined) {
                returnValue = "UNDEFINED";
            }
            else {
                returnValue = dConfiguration02[v3Val];
            }
            break;
        case "dConfiguration.07":
            if (dConfiguration07[v3Val] == undefined) {
                returnValue = "UNDEFINED";
            }
            else {
                _retArray.push(dConfiguration07[v3Val]);
            }
            break;
        case "dConfiguration.10":
            if (dAgency11[v3Val] == undefined) {
                returnValue = "UNDEFINED";
            }
            else {
                _retArray.push(dConfiguration10[v3Val]);
            }
            break;
        case "dConfiguration.12":
            if (dAgency12[v3Val] == undefined) {
                returnValue = "UNDEFINED";
            }
            else {
                _returnValue= dConfiguration12[v3Val];
            }
            break;

        case "dFacility.01":

            if (dFacility01 == undefined) {
                returnValue= v3Val + "UNDEFINED";
            }
            else {
                returnValue=  dFacility01[v3Val];
            }
            break;

        case "dLocation.01":

            if (dLocation01[v3Val] == undefined) {
                returnValue= v3Val + "UNDEFINED";
            }
            else {
                returnValue= dLocation01[v3Val];
            }
            break;

        case "dPersonnel.12":

            if (dPersonnel09CodeMap[v3Val] == undefined) {
                returnValue= v3Val + "UNDEFINED";
            }
            else {
                returnValue= dPersonnel09CodeMap[v3Val];
            }
            break;
        case "dPersonnel.10":
                if (dPersonnel10CodeMap[v3Val] == undefined) {
                    returnValue= v3Val + "UNDEFINED";
                }
                else {
                    returnValue= dPersonnel09CodeMap[v3Val];
                }            
            break;
        case "dPersonnel.11":

            if (dPersonnel11CodeMap[v3Val] == undefined) {
                returnValue=v3Val + "UNDEFINED";
            }
            else {
                returnValue= dPersonnel11CodeMap[v3Val];
            }
            break;

        case "dVehicle.04":

            if (dVehicle04[v3Val] == undefined) {
                returnValue= v3Val + "UNDEFINED";
            }
            else {
                returnValue= dVehicle04[v3Val];
            }
            break;
        case "dVehicle.05":

            if (dVehicle05[v3Val] == undefined) {
                returnValue= v3Val + "UNDEFINED";
            }
            else {
                returnValue= dVehicle05[v3Val];
            }
            break;
        default:
            returnValue = NEMSISElementNumber + "  " + v3Val + " version 2 not found";

    }
    return returnValue;

}
function setCodeText(NEMSISElementNumber, codeVal) {
    var _return = [];
    switch (NEMSISElementNumber) {
        case "dAgency.09":
            if (dAgency334_09[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = dAgency334_09[codeVal];
            }
            break;
        case "dAgency.10":
      
            if (dAgency334_10[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = dAgency334_10[codeVal];
            }
     
            break;
        case "dAgency.11":
            if (dAgency334_11[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = dAgency334_11[codeVal];
            }
            break;
        case "dAgency.12":
            if (dAgency334_12[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = dAgency334_12[codeVal];
            }
            break;
        case "dAgency.13":
            if (dAgency334_13[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = dAgency334_13[codeVal];
            }
            break;

        case "dAgency.14":
            if (dAgency334_14[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = dAgency334_14[codeVal];
            }
            break;

        case "dAgency.23":
            if (dAgency334_23[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = dAgency334_23[codeVal];
            }
            break;

        case "dAgency.24":
            if (dAgency334_24[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = dAgency334_24[codeVal];
            }
            break;

        case "dConfiguration.02":
            if (dConfiguration334_02[codeVal] == undefined) {
                _returnText = codeVal + " UNDEFINED";
            }
            else {
                _returnText = dConfiguration334_02[codeVal];
            }
            break;

        case "dConfiguration.05":
            if (dConfiguration334_05[codeVal] == undefined) {
                _returnText = codeVal + " UNDEFINED";
            }
            else {
                _returnText = dConfiguration334_05[codeVal];
            }
            break;
        case "dConfiguration.06":
            if (dConfiguration334_06[codeVal] == undefined) {
                _returnText = codeVal + " UNDEFINED";
            }
            else {
                _returnText = dConfiguration334_06[codeVal];
            }
            break;
        case "dConfiguration.10":
            if (dConfiguration334_10[codeVal] == undefined) {
                _returnText = codeVal + " UNDEFINED";
            }
            else {
                _returnText = dConfiguration334_10[codeVal];
            }
            break;
        case "dConfiguration.11":
            if (dConfiguration334_11[codeVal] == undefined) {
                _returnText = codeVal + " UNDEFINED";
            }
            else {
                _returnText = dConfiguration334_11[codeVal];
            }
            break;
        case "dConfiguration.13":
            if (dConfiguration334_13[codeVal] == undefined) {
                _returnText = codeVal + " UNDEFINED";
            }
            else {
                _returnText = dConfiguration334_13[codeVal];
            }
            break;
        case "dConfiguration.15":
            if (dConfiguration334_15[codeVal] == undefined) {
                _returnText = codeVal + " UNDEFINED";
            }
            else {
                _returnText = dConfiguration334_15[codeVal];
            }
            break;

        case "dContact.01":
            if (dContact334_01[codeVal] == undefined) {
                _returnText = codeVal + " UNDEFINED";
            }
            else {
                _returnText = dContact334_01[codeVal];
            }
            break;

        case "dContact.09":
            if (dContact334_09[codeVal] == undefined) {
                _returnText = codeVal + " UNDEFINED";
            }
            else {
                _returnText = dContact334_09[codeVal];
            }
            break;
        case "dContact.13":
            if (dContact334_13[codeVal] == undefined) {
                _returnText = codeVal + " UNDEFINED";
            }
            else {
                _returnText = dContact334_13[codeVal];
            }
            break;
        case "dContact.14":
            if (dContact334_14[codeVal] == undefined) {
                _returnText = codeVal + " UNDEFINED";
            }
            else {
                _returnText = dContact334_14[codeVal];
            }
            break;
        case "dContact.15":
            if (dContact334_15[codeVal] == undefined) {
                _returnText = codeVal + " UNDEFINED";
            }
            else {
                _returnText = dContact334_15[codeVal];
            }
            break;
        case "dContact.16":
            if (dContact334_16[codeVal] == undefined) {
                _returnText = codeVal + " UNDEFINED";
            }
            else {
                _returnText = dContact334_16[codeVal];
            }
            break;

        case "eDevice.03":
            if (dDevice334_03[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dDevice334_03[codeVal];
            }
            break;

        case "dFacility.01":
            if (dFacility334_01[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dFacility334_01[codeVal];
            }
            break;

        case "dFacility.04":
            if (dFacility334_04[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dFacility334_04[codeVal];
            }
            break;

        case "dFacility.12":
            if (dFacility334_12[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dFacility334_12[codeVal];
            }
            break;

        case "dLocation.01":
            if (dLocation334_01[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dLocation334_01[codeVal];
            }
            break;

        case "dLocation.11":
            if (dLocation334_11[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dLocation334_11[codeVal];
            }
            break;
        case "dPersonnel.12":
            if (dPersonnel334_12[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dPersonnel334_12[codeVal];
            }
            break;

        case "dPersonnel.13":
            if (dPersonnel334_13[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dPersonnel334_13[codeVal];
            }
            break;
        case "dPersonnel.15":
            if (dPersonnel334_15[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dPersonnel334_15[codeVal];
            }
            break;
        case "dPersonnel.16":
            if (dPersonnel334_16[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dPersonnel334_16[codeVal];
            }
            break;

        case "dPersonnel.17":
            if (dPersonnel334_17[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dPersonnel334_17[codeVal];
            }
            break;
        case "dPersonnel.18":
            if (dPersonnel334_18[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dPersonnel334_18[codeVal];
            }
            break;
        case "dPersonnel.20":
            if (dPersonnel334_20[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dPersonnel334_20[codeVal];
            }
            break;
        case "dPersonnel.24":
            if (dPersonnel334_24[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dPersonnel334_24[codeVal];
            }
            break;

        case "dPersonnel.29":
            if (dPersonnel334_29[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dPersonnel334_29[codeVal];
            }
            break;
        case "dPersonnel.31":
            if (dPersonnel334_31[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dPersonnel334_31[codeVal];
            }
            break;
        case "dPersonnel.34":
            if (dPersonnel334_34[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dPersonnel334_34[codeVal];
            }
            break;
        case "dPersonnel.35":
            if (dPersonnel334_35[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dPersonnel334_35[codeVal];
            }
            break;
        case "dPersonnel.38":
            if (dPersonnel334_38[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dPersonnel334_38[codeVal];
            }
            break;
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

};
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
};
var dConfiguration02 = {
    "9911001": "6100",
    "9911003": "6120",
    "9911005": "6100",
    "9911009": "6110",
    "9911009": "6120",
    "9911011": "6100",
    "9911013": "6110",
    "9911015": "6120",
    "9911017": "6111",
    "9911017": "6112",
    "9911021": "6112",
    "9911023": "6110",
    "9911025": "6111",
    "9911027": "6112",
    "9911029": "6111",
    "9911031": "6111",

};

var dConfiguration07 = {
    "424432007": "1.181",
    "226005007": "1.182",
    "232689008": "31.11",
    "232692007": "31.12",
    "78121007": "31.42",
    "673005": "31.421",
    "182705007": "34.041",
    "264957007": "34.042",
    "309849004": "37",
    "34475007": "37.611",
    "386237008": "37.612",
    "55841001": "38.91",
    "396540005": "38.99",
    "392247006": "38.991",
    "392230005": "38.992",
    "405427009": "38.993",
    "233516009": "38.994",
    "NOT SURE": "38.995",
    "NOT SURE": "39.995",
    "405430002": "39.996",
    "424287005": "39.997",
    "42550007": "39.998",
    "430824005": "41.92",
    "NOT SURE": "41.921",
    "410024004": "57.94",
    "236973005": "73.59",
    "58825001": "79.7",
    "70177008": "86.09",
    "NOT SURE": "86.28",
    "NOT SURE": "89.391",
    "NOT SURE": "89.392",
    "386237008": "89.51",
    "425058005": "89.59",
    "422618004": "89.599",
    "182777000": "89.599",
    "422744007": "89.61",
    "77938009": "89.62",
    "42340005": "89.64",
    "NOT SURE": "89.7",
    "NOT SURE": "89.701",
    "NOT SURE": "89.702",
    "304562007": "89.703",
    "NOT SURE": "89.704",
    "268400002": "89.82",
    "NOT SURE": "89.821",
    "NOT SURE": "93.055",
    "20655006": "93.056",
    "225358003": "93.057",
    "225116006": "93.058",
    "372045002": "93.059",
    "431949004": "93.35",
    "302488007": "93.45",
    "79321009": "93.54",
    "NOT SURE": "93.58",
    "426498007": "93.591",
    "47545007": "93.9",
    "232664002": "93.91",
    "425447009": "93.93",
    "243140006": "93.931",
    "NOT SURE": "93.94",
    "87750000": "96.01",
    "NOT SURE": "96.02",
    "NOT SURE": "96.03",
    "232674004": "96.04",
    "232679009": "96.041",
    "241689008": "96.042",
    "NOT SURE": "96.051",
    "418613003": "96.052",
    "NOT SURE": "96.053",
    "87750000": "96.07",
    "235425002": "96.071",
    "385857005": "96.7",
    "45851008": "96.701",
    "243142003": "96.702",
    "NOT SURE": "96.703",
    "45851008": "96.79",
    "428482009": "96.991",
    "NOT SURE": "96.992",
    "NOT SURE": "96.993",
    "2267008": "97.23",
    "232685002": "97.231",
    "23690002": "98.13",
    "232707004": "98.131",
    "230040009": "98.15",
    "128968000": "99.64",
    "NOT SURE": "99.641",
    "NOT SURE": "99.841",
    "NOT SURE": "99.842",
    "431774007": "99.81",
    "NOT SURE": "99.811",
    "NOT SURE": "99.29",
    "18590009": "99.624",
    "NOT SURE": "99.626",
    "250980009": "99.623",
    "89666000": "99.601",
    "NOT SURE": "99.602",
    "429283006": "99.603",
    "225708008": "99.604",
    "NOT SURE": "99.6",
    "NOT SURE": "99.611",
    "NOT SURE": "99.612",
    "NOT SURE": "99.615",
    "NOT SURE": "99.621",
    "426220008": "99.622",
    "NOT SURE": "99.625",
    "NOT SURE": "100.1",
    "NOT SURE": "100.2",
    "NOT SURE": "100.301",
    "NOT SURE": "100.302",
    "NOT SURE": "100.303",
    "NOT SURE": "101.101",
    "NOT SURE": "101.102",
    "NOT SURE": "101.103",
    "NOT SURE": "101.104",
    "NOT SURE": "101.105",
    "NOT SURE": "101.201",
    "NOT SURE": "101.202",
    "NOT SURE": "101.203",
    "NOT SURE": "101.204",
    "NOT SURE": "101.205",
    "NOT SURE": "101.206",
    "NOT SURE": "100.3",
    "NOT SURE": "101.5"
};


var dConfiguration10 = {

    "NOT SURE": "6720",
    "9914001": "6730",
    "9914003": "6740",
    "9914007": "6760",
    "9914111": "6770",
    "9914113": "6780",
    "9914021": "6785",
    "9914011": "6790",
    "9914055": "6791",
    "9914051": "6800",
    "9914053": "6810",
    "9914079": "6820",
    "9914115": "6830",
    "9914085": "6840",
    "9914087": "6850",
    "9914117": "6860",
    "9914155": "6870",
    "9914023": "6875",
    "9914057": "6880",
    "9914065": "6881",
    "9914119": "6885",
    "9914093": "6890",
    "9914091": "6892",
    "9914095": "6900",
    "9914059": "6910",
    "9914033": "6911",
    "9914035": "6912",
    "9914037": "6913",
    "9914043": "6914",
    "9914047": "6915",
    "9914049": "6916",
    "9914165": "6917",
    "9914097": "6920",
    "9914099": "6925",
    "9914061": "6930",
    "9914159": "6935",
    "9914101": "6940",
    "9914121": "6945",
    "9914123": "6950",
    "9914029": "6960",
    "9914125": "6965",
    "9914127": "6970",
    "9914031": "6980",
    "9914067": "6990",
    "9914105": "7000",
    "9914133": "7010",
    "9914159": "7020",
    "9914135": "7030",
    "9914071": "7040",
    "9914019": "7130",
    "9914137": "7140",
    "9914015": "7150",
    "9914139": "7160",
    "9914141": "7170",
    "9914107": "7175",
    "9914073": "7180",
    "9914147": "7190",
    "9914145": "7200",
    "9914149": "7210",
    "9914087": "7214",
    "9914077": "7215",
    "9914075": "7220",
    "9914017": "7230",
    "9914147": "7232",
    "9914151": "7240",
    "9914131": "7251"
}
var dConfiguration12 =
{
    "9923001": "0",
    "9923003": "1"
};

var dFacility01 = {

    "1701001": "7320",
    "1701005": "7280",
    "1701003": "7290",
    "1701009": "7300",
    "1701007": "7320",
    "1701011": "7280",

};

var dLocation01 = {

    "1701001": "7320",
    "1701005": "7280",
    "1701003": "7290",
    "1701009": "7300",
    "1701007": "7320",
    "1701011": "7280",

};

var dVehicle04 = {
    "1404001": "7370",
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


var dConfiguration334_02 = {
    "9911001": "2009 Advanced Emergency Medical Technician (AEMT)",
    "9911003": "2009 Emergency Medical Responder (EMR)",
    "9911005": "2009 Emergency Medical Technician (EMT)",
    "9911007": "2009 Paramedic",
    "9911009": "EMT-Basic",
    "9911011": "EMT-Intermediate",
    "9911013": "EMT-Paramedic",
    "9911015": "First Responder",
    "9911017": "Nurse DEPRECATED",
    "9911019": "Other",
    "9911021": "Physician",
    "9911023": "Critical Care Paramedic",
    "9911025": "Community Paramedicine",
    "9911027": "Nurse Practitioner",
    "9911029": "Physician Assistant",
    "9911031": "Licensed Practical Nurse (LPN)",
    "9911033": "Registered Nurse"
};
var dConfiguration334_05 = {
    "9914001": "Airway",
    "9914003": "Airway-Failed",
    "9914005": "Airway-Obstruction/Foreign Body",
    "9914007": "Airway-Rapid Sequence Induction (RSI-Paralytic)",
    "9914009": "Airway-Sedation Assisted (Non-Paralytic)",
    "9914011": "Cardiac Arrest-Asystole",
    "9914013": "Cardiac Arrest-Hypothermia-Therapeutic",
    "9914015": "Cardiac Arrest-Pulseless Electrical Activity",
    "9914017": "Cardiac Arrest-Ventricular Fibrillation/ Pulseless Ventricular Tachycardia",
    "9914019": "Cardiac Arrest-Post Resuscitation Care",
    "9914021": "Environmental-Altitude Sickness",
    "9914023": "Environmental-Cold Exposure",
    "9914025": "Environmental-Frostbite/Cold Injury",
    "9914027": "Environmental-Heat Exposure/Exhaustion",
    "9914029": "Environmental-Heat Stroke/Hyperthermia",
    "9914031": "Environmental-Hypothermia",
    "9914033": "Exposure-Airway/Inhalation Irritants",
    "9914035": "Exposure-Biological/Infectious",
    "9914037": "Exposure-Blistering Agents",
    "9914039": "Exposure-Carbon Monoxide/Smoke Inhalation DEPRECATED",
    "9914041": "Exposure-Chemicals to Eye",
    "9914043": "Exposure-Cyanide",
    "9914045": "Exposure-Explosive/ Blast Injury",
    "9914047": "Exposure-Nerve Agents",
    "9914049": "Exposure-Radiologic Agents",
    "9914051": "General-Back Pain",
    "9914053": "General-Behavioral/Patient Restraint",
    "9914055": "General-Cardiac Arrest",
    "9914057": "General-Dental Problems",
    "9914059": "General-Epistaxis",
    "9914061": "General-Fever",
    "9914063": "General-Individualized Patient Protocol",
    "9914065": "General-Indwelling Medical Devices/Equipment",
    "9914067": "General-IV Access",
    "9914069": "General-Medical Device Malfunction",
    "9914071": "General-Pain Control",
    "9914073": "General-Spinal Immobilization/Clearance",
    "9914075": "General-Universal Patient Care/ Initial Patient Contact",
    "9914077": "Injury-Amputation",
    "9914079": "Injury-Bites and Envenomations-Land",
    "9914081": "Injury-Bites and Envenomations-Marine",
    "9914083": "Injury-Bleeding/ Hemorrhage Control",
    "9914085": "Injury-Burns-Thermal",
    "9914087": "Injury-Cardiac Arrest",
    "9914089": "Injury-Crush Syndrome",
    "9914091": "Injury-Diving Emergencies",
    "9914093": "Injury-Drowning/Near Drowning",
    "9914095": "Injury-Electrical Injuries",
    "9914097": "Injury-Extremity",
    "9914099": "Injury-Eye",
    "9914101": "Injury-Head",
    "9914103": "Injury-Impaled Object",
    "9914105": "Injury-Multisystem",
    "9914107": "Injury-Spinal Cord",
    "9914109": "Medical-Abdominal Pain",
    "9914111": "Medical-Allergic Reaction/Anaphylaxis",
    "9914113": "Medical-Altered Mental Status",
    "9914115": "Medical-Bradycardia",
    "9914117": "Medical-Cardiac Chest Pain",
    "9914119": "Medical-Diarrhea",
    "9914121": "Medical-Hyperglycemia",
    "9914123": "Medical-Hypertension",
    "9914125": "Medical-Hypoglycemia/Diabetic Emergency",
    "9914127": "Medical-Hypotension/Shock (Non-Trauma)",
    "9914129": "Medical-Influenza-Like Illness/ Upper Respiratory Infection",
    "9914131": "Medical-Nausea/Vomiting",
    "9914133": "Medical-Newborn/ Neonatal Resuscitation",
    "9914135": "Medical-Overdose/Poisoning/Toxic Ingestion",
    "9914137": "Medical-Pulmonary Edema/CHF",
    "9914139": "Medical-Respiratory Distress/Asthma/COPD/Croup/Reactive Airway",
    "9914141": "Medical-Seizure",
    "9914143": "Medical-ST-Elevation Myocardial Infarction (STEMI)",
    "9914145": "Medical-Stroke/TIA",
    "9914147": "Medical-Supraventricular Tachycardia (Including Atrial Fibrillation)",
    "9914149": "Medical-Syncope",
    "9914151": "Medical-Ventricular Tachycardia (With Pulse)",
    "9914153": "Not Done",
    "9914155": "OB/GYN-Childbirth/Labor/Delivery",
    "9914157": "OB/GYN-Eclampsia",
    "9914159": "OB/GYN-Gynecologic Emergencies",
    "9914161": "OB/GYN-Pregnancy Related Emergencies",
    "9914163": "OB/GYN-Post-partum Hemorrhage",
    "9914165": "Other",
    "9914167": "Exposure-Carbon Monoxide",
    "9914169": "Cardiac Arrest-Do Not Resuscitate",
    "9914171": "Cardiac Arrest-Special Resuscitation Orders",
    "9914173": "Exposure-Smoke Inhalation",
    "9914175": "General-Community Paramedicine / Mobile Integrated Healthcare",
    "9914177": "General-Exception Protocol",
    "9914179": "General-Extended Care Guidelines",
    "9914181": "General-Interfacility Transfers",
    "9914183": "General-Law Enforcement - Blood for Legal Purposes",
    "9914185": "General-Law Enforcement - Assist with Law Enforcement Activity",
    "9914187": "General-Neglect or Abuse Suspected",
    "9914189": "General-Refusal of Care",
    "9914191": "Injury-Mass/Multiple Casualties",
    "9914193": "Injury-Thoracic",
    "9914195": "Medical-Adrenal Insufficiency",
    "9914197": "Medical-Apparent Life Threatening Event (ALTE)",
    "9914199": "Medical-Tachycardia",

};

var dConfiguration334_06 = {
    "9917001": "2009 Advanced Emergency Medical Technician (AEMT)",
    "9917003": "2009 Emergency Medical Responder (EMR)",
    "9917005": "2009 Emergency Medical Technician (EMT)",
    "9917007": "2009 Paramedic",
    "9917009": "First Responder",
    "9917011": "EMT-Basic",
    "9917013": "EMT-Intermediate",
    "9917015": "EMT-Paramedic",
    "9917017": "Nurse DEPRECATED",
    "9917019": "Physician",
    "9917021": "Critical Care Paramedic",
    "9917023": "Community Paramedicine",
    "9917025": "Nurse Practitioner",
    "9917027": "Physician Assistant",
    "9917029": "Licensed Practical Nurse (LPN)",
    "9917031": "Registered Nurse"
};

var dConfiguration334_08 = {
    "9917001": "2009 Advanced Emergency Medical Technician (AEMT)",
    "9917003": "2009 Emergency Medical Responder (EMR)",
    "9917005": "2009 Emergency Medical Technician (EMT)",
    "9917007": "2009 Paramedic",
    "9917009": "First Responder",
    "9917011": "EMT-Basic",
    "9917013": "EMT-Intermediate",
    "9917015": "EMT-Paramedic",
    "9917017": "Nurse DEPRECATED",
    "9917019": "Physician",
    "9917021": "Critical Care Paramedic",
    "9917023": "Community Paramedicine",
    "9917025": "Nurse Practitioner",
    "9917027": "Physician Assistant",
    "9917029": "Licensed Practical Nurse (LPN)",
    "9917031": "Registered Nurse"
};


var dConfiguration334_10 = {
    "9914001": "Airway",
    "9914003": "Airway-Failed",
    "9914005": "Airway-Obstruction/Foreign Body",
    "9914007": "Airway-Rapid Sequence Induction (RSI-Paralytic)",
    "9914009": "Airway-Sedation Assisted (Non-Paralytic)",
    "9914011": "Cardiac Arrest-Asystole",
    "9914013": "Cardiac Arrest-Hypothermia-Therapeutic",
    "9914015": "Cardiac Arrest-Pulseless Electrical Activity",
    "9914017": "Cardiac Arrest-Ventricular Fibrillation/ Pulseless Ventricular Tachycardia",
    "9914019": "Cardiac Arrest-Post Resuscitation Care",
    "9914021": "Environmental-Altitude Sickness",
    "9914023": "Environmental-Cold Exposure",
    "9914025": "Environmental-Frostbite/Cold Injury",
    "9914027": "Environmental-Heat Exposure/Exhaustion",
    "9914029": "Environmental-Heat Stroke/Hyperthermia",
    "9914031": "Environmental-Hypothermia",
    "9914033": "Exposure-Airway/Inhalation Irritants",
    "9914035": "Exposure-Biological/Infectious",
    "9914037": "Exposure-Blistering Agents",
    "9914039": "Exposure-Carbon Monoxide/Smoke Inhalation DEPRECATED",
    "9914041": "Exposure-Chemicals to Eye",
    "9914043": "Exposure-Cyanide",
    "9914045": "Exposure-Explosive/ Blast Injury",
    "9914047": "Exposure-Nerve Agents",
    "9914049": "Exposure-Radiologic Agents",
    "9914051": "General-Back Pain",
    "9914053": "General-Behavioral/Patient Restraint",
    "9914055": "General-Cardiac Arrest",
    "9914057": "General-Dental Problems",
    "9914059": "General-Epistaxis",
    "9914061": "General-Fever",
    "9914063": "General-Individualized Patient Protocol",
    "9914065": "General-Indwelling Medical Devices/Equipment",
    "9914067": "General-IV Access",
    "9914069": "General-Medical Device Malfunction",
    "9914071": "General-Pain Control",
    "9914073": "General-Spinal Immobilization/Clearance",
    "9914075": "General-Universal Patient Care/ Initial Patient Contact",
    "9914077": "Injury-Amputation",
    "9914079": "Injury-Bites and Envenomations-Land",
    "9914081": "Injury-Bites and Envenomations-Marine",
    "9914083": "Injury-Bleeding/ Hemorrhage Control",
    "9914085": "Injury-Burns-Thermal",
    "9914087": "Injury-Cardiac Arrest",
    "9914089": "Injury-Crush Syndrome",
    "9914091": "Injury-Diving Emergencies",
    "9914093": "Injury-Drowning/Near Drowning",
    "9914095": "Injury-Electrical Injuries",
    "9914097": "Injury-Extremity",
    "9914099": "Injury-Eye",
    "9914101": "Injury-Head",
    "9914103": "Injury-Impaled Object",
    "9914105": "Injury-Multisystem",
    "9914107": "Injury-Spinal Cord",
    "9914109": "Medical-Abdominal Pain",
    "9914111": "Medical-Allergic Reaction/Anaphylaxis",
    "9914113": "Medical-Altered Mental Status",
    "9914115": "Medical-Bradycardia",
    "9914117": "Medical-Cardiac Chest Pain",
    "9914119": "Medical-Diarrhea",
    "9914121": "Medical-Hyperglycemia",
    "9914123": "Medical-Hypertension",
    "9914125": "Medical-Hypoglycemia/Diabetic Emergency",
    "9914127": "Medical-Hypotension/Shock (Non-Trauma)",
    "9914129": "Medical-Influenza-Like Illness/ Upper Respiratory Infection",
    "9914131": "Medical-Nausea/Vomiting",
    "9914133": "Medical-Newborn/ Neonatal Resuscitation",
    "9914135": "Medical-Overdose/Poisoning/Toxic Ingestion",
    "9914137": "Medical-Pulmonary Edema/CHF",
    "9914139": "Medical-Respiratory Distress/Asthma/COPD/Croup/Reactive Airway",
    "9914141": "Medical-Seizure",
    "9914143": "Medical-ST-Elevation Myocardial Infarction (STEMI)",
    "9914145": "Medical-Stroke/TIA",
    "9914147": "Medical-Supraventricular Tachycardia (Including Atrial Fibrillation)",
    "9914149": "Medical-Syncope",
    "9914151": "Medical-Ventricular Tachycardia (With Pulse)",
    "9914153": "Not Done",
    "9914155": "OB/GYN-Childbirth/Labor/Delivery",
    "9914157": "OB/GYN-Eclampsia",
    "9914159": "OB/GYN-Gynecologic Emergencies",
    "9914161": "OB/GYN-Pregnancy Related Emergencies",
    "9914163": "OB/GYN-Post-partum Hemorrhage",
    "9914165": "Other",
    "9914167": "Exposure-Carbon Monoxide",
    "9914169": "Cardiac Arrest-Do Not Resuscitate",
    "9914171": "Cardiac Arrest-Special Resuscitation Orders",
    "9914173": "Exposure-Smoke Inhalation",
    "9914175": "General-Community Paramedicine / Mobile Integrated Healthcare",
    "9914177": "General-Exception Protocol",
    "9914179": "General-Extended Care Guidelines",
    "9914181": "General-Interfacility Transfers",
    "9914183": "General-Law Enforcement - Blood for Legal Purposes",
    "9914185": "General-Law Enforcement - Assist with Law Enforcement Activity",
    "9914187": "General-Neglect or Abuse Suspected",
    "9914189": "General-Refusal of Care",
    "9914191": "Injury-Mass/Multiple Casualties",
    "9914193": "Injury-Thoracic",
    "9914195": "Medical-Adrenal Insufficiency",
    "9914197": "Medical-Apparent Life Threatening Event (ALTE)",
    "9914199": "Medical-Tachycardia",

};

var dConfiguration334_11 = {

    "1211001": "Air Rescue",
    "1211003": "CBRNE",
    "1211005": "Community Health Medicine",
    "1211007": "Disaster Medical Assistance Team (DMAT)",
    "1211009": "Disaster Mortuary (DMORT)",
    "1211011": "Dive Rescue",
    "1211013": "Farm Rescue",
    "1211015": "High Angle Rescue",
    "1211017": "Machinery Disentanglement",
    "1211019": "None",
    "1211021": "Ski / Snow Rescue",
    "1211023": "Tactical EMS",
    "1211025": "Trench / Confined Space Rescue",
    "1211027": "Urban Search and Rescue (USAR)",
    "1211029": "Vehicle Extrication",
    "1211031": "Veterinary Medical Assistance Team (VMAT)",
    "1211033": "Water or Ice Related Rescue (Incl Swift Water)",
    "1211035": "Wilderness Search and Rescue"
};


var dConfiguration334_13 = {
    "1213001": "No",
    "1213003": "Yes, 100% of the EMS Agency's Service Area",
    "1213005": "Yes, Less than 100% of the EMS Agency's Service Area"
};
var dConfiguration334_15 = {
    "1215001": "Capnography-Numeric",
    "1215003": "Capnography-Waveform",
    "1215005": "ECG-12 Lead or Greater",
    "1215007": "ECG-Less than 12 Lead (Cardiac Monitor)",
    "1215009": "Oximetry-Carbon Monoxide",
    "1215011": "Oximetry-Oxygen",
    "1215013": "Pressure Measurement-Invasive (Arterial, CVP, Swan, etc.)",
    "1215015": "Pressure Measurement-Non-Invasive (Blood Pressure, etc.)",
    "1215017": "Ventilator-Transport",
    "1215019": "Vital Sign Monitoring"
};

var dContact334_01 = {
    "1101001": "Administrative Assistant",
    "1101003": "EMS Agency Director/Chief/Lead Administrator/CEO",
    "1101005": "EMS Assistant Agency Director/Chief/Administrator/CEO",
    "1101007": "EMS Assistant Medical Director",
    "1101009": "EMS IT/Data Specialist",
    "1101011": "EMS Medical Director",
    "1101013": "EMS Quality/Performance Improvement Specialist",
    "1101015": "EMS Training/Education Specialist",
    "1101017": "Other (Not Listed)"
};
var dContact334_09 = {
    "CA": "Canada",
    "MX": "Mexico",
    "US": "United States"
};
var dContact334_13 = {
    "1113001": "Doctor of Medicine",
    "1113003": "Doctor of Osteopathy"
};

var dContact334_14 = {

    "1114001": "Allergy and Immunology",
    "1114003": "Anesthesiology",
    "1114005": "Colon and Rectal Surgery",
    "1114007": "Dermatology",
    "1114009": "Emergency Medicine",
    "1114011": "Family Medicine",
    "1114013": "Internal Medicine",
    "1114015": "Neurological Surgery",
    "1114017": "Neurology",
    "1114019": "None (Not Board Certified)",
    "1114021": "Obstetrics and Gynecology",
    "1114023": "Ophthalmology",
    "1114025": "Orthopedic Surgery",
    "1114027": "Otolaryngology",
    "1114029": "Pediatrics",
    "1114031": "Physical Medicine and Rehabilitation",
    "1114033": "Plastic Surgery",
    "1114035": "Psychiatry",
    "1114037": "Surgery",
    "1114039": "Thoracic Surgery",
    "1114041": "Urology",
    "1114043": "Vascular Surgery"
};
var dContact334_15 = {
    "1115001": "Compensated",
    "1115003": "Non-Compensated"
};

var dContact334_16 = {
    "9923001": "No",
    "9923003": "Yes"
};

var dDevice334_03 = {

    "1603001": "Capnography-Numeric",
    "1603003": "Capnography-Waveform",
    "1603005": "Chemistry Measurement-Blood or Serum",
    "1603007": "Chemistry Measurement-Glucometer",
    "1603009": "Chemistry Measurement-Urine",
    "1603011": "CPR-External Device",
    "1603013": "Defibrillator-Automated",
    "1603015": "Defibrillator-Manual",
    "1603017": "ECG-12 Lead or Greater",
    "1603019": "ECG-Less than 12 Lead (Cardiac Monitor)",
    "1603021": "Medication Infusion Pump",
    "1603023": "Other (Not Listed)",
    "1603025": "Oximetry-Carbon Monoxide",
    "1603027": "Oximetry-Oxygen",
    "1603029": "Pressure Monitors-Invasive",
    "1603031": "Pressure Monitors-Non-Invasive",
    "1603033": "Respirator (BLS)",
    "1603035": "Ventilator (ALS)",
    "1603037": "Ventilator Assistance-BiPAP",
    "1603039": "Ventilator Assistance-CPAP"

};


var dLocation334_01 = {
    "1301001": "EMS Agency Headquarters",
    "1301003": "EMS Staging Area",
    "1301005": "EMS Station",
    "1301007": "Other (Not Listed)"
};
var dLocation334_11 = {

    "CA": "Canada",
    "MX": "Mexico",
    "US": "United States"
};

var dPersonnel334_12 = {
    "9906001": "Female",
    "9906003": "Male",
    "9906005": "Unknown (Unable to Determine)"
};

var dPersonnel334_13 = {
    "1513001": "American Indian or Alaska Native",
    "1513003": "Asian",
    "1513005": "Black or African American",
    "1513007": "Hispanic or Latino",
    "1513009": "Native Hawaiian or Other Pacific Islander",
    "1513011": "White"
};

var dPersonnel334_15 = {
    "1515001": "No Schooling Completed",
    "1515003": "Nursery School to 4th Grade",
    "1515005": "5th Grade or 6th Grade",
    "1515007": "7th Grade or 8th Grade",
    "1515009": "9th Grade",
    "1515011": "10th Grade",
    "1515013": "11th Grade",
    "1515015": "12th Grade; No Diploma",
    "1515017": "High School Graduate-Diploma or the Equivalent (GED)",
    "1515019": "Some College Credit; but Less than 1 Year",
    "1515021": "1 or More Years of College; No Degree",
    "1515023": "Associate Degree",
    "1515025": "Bachelor's Degree",
    "1515027": "Master's Degree",
    "1515029": "Professional Degree (i.e. MD; DDS; DVM; LLB; JD)",
    "1515031": "Doctorate Degree (i.e. PhD; EdD)"
};

var dPersonnel334_16 = {
    "1516001": "Agriculture and Natural Resources",
    "1516003": "Architecture and Related Services",
    "1516005": "Area; Ethnic; Cultural; and Gender Studies",
    "1516007": "Biological and Biomedical Sciences",
    "1516009": "Business",
    "1516011": "Communication; Journalism; and Related Programs",
    "1516013": "Communications Technologies",
    "1516015": "Computer and Information Sciences",
    "1516017": "Education",
    "1516019": "Emergency Medical Services",
    "1516021": "Engineering",
    "1516023": "Engineering Technologies",
    "1516025": "English Language and Literature/Letters",
    "1516027": "Family and Consumer Sciences/Human Sciences",
    "1516029": "Fire Science",
    "1516031": "Foreign Languages; Literatures; and Linguistics",
    "1516033": "Health Professions and Related Clinical Sciences; Not Including Emergency Medical Services",
    "1516035": "Legal Professions and Studies",
    "1516037": "Liberal Arts and Sciences; General Studies; and Humanities",
    "1516039": "Library Science",
    "1516041": "Mathematics and Statistics",
    "1516043": "Military Technologies",
    "1516045": "Multi/Interdisciplinary Studies",
    "1516047": "Not Classified by Field of Study",
    "1516049": "None",
    "1516051": "Parks; Recreation; Leisure and Fitness Studies",
    "1516053": "Philosophy and Religious Studies",
    "1516055": "Physical Sciences and Science Technologies",
    "1516057": "Precision Production",
    "1516059": "Psychology",
    "1516061": "Public Administration and Social Services",
    "1516063": "Security and Protective Services; Not Including Fire Science",
    "1516065": "Social Sciences and History",
    "1516067": "Theology and Religious Vocations",
    "1516069": "Transportation and Materials Moving",
    "1516071": "Visual and Performing Arts"
};

var dPersonnel334_17 = {
    "1517001": "All-Terrain Vehicle (ATV)",
    "1517003": "Commercial Class A",
    "1517005": "Commercial Class B",
    "1517007": "Commercial Class C",
    "1517009": "Motorcycle-Class M",
    "1517011": "None",
    "1517013": "Operator Class D (Normal)",
    "1517015": "Other (Not Listed)",
    "1517017": "Pilot-Rotor Wing Air",
    "1517019": "Pilot-Fixed Wing Air",
    "1517021": "Snowmobile",
    "1517023": "Taxi and Livery Class E"

};

var dPersonnel334_18 = {
    "1517001": "All-Terrain Vehicle (ATV)",
    "1517003": "Commercial Class A",
    "1517005": "Commercial Class B",
    "1517007": "Commercial Class C",
    "1517009": "Motorcycle-Class M",
    "1517011": "None",
    "1517013": "Operator Class D (Normal)",
    "1517015": "Other (Not Listed)",
    "1517017": "Pilot-Rotor Wing Air",
    "1517019": "Pilot-Fixed Wing Air",
    "1517021": "Snowmobile",
    "1517023": "Taxi and Livery Class E"

};
var dPersonnel334_20 = {
    "amh": "Amharic",
    "ara": "Arabic",
    "arm": "Armenian",
    "ben": "Bengali",
    "crp": "Cajun (Creole and Pidgins)",
    "chi": "Chinese",
    "hrv": "Croatian",
    "cze": "Czech",
    "dan": "Danish",
    "dut": "Dutch",
    "fin": "Finnish",
    "tai": "Formosan",
    "fre": "French",
    "cpf": "French Creole",
    "ger": "German",
    "gre": "Greek",
    "guj": "Gujarati",
    "heb": "Hebrew",
    "hin": "Hindi (Urdu)",
    "hun": "Hungarian",
    "ilo": "Ilocano",
    "itl": "Italian",
    "jpn": "Japanese",
    "kor": "Korean",
    "kro": "Kru",
    "lit": "Lithuanian",
    "mal": "Malayalam",
    "hmn": "Miao (Hmong)",
    "mkh": "Mon-Khmer (Cambodian)",
    "nav": "Navaho",
    "nno": "Norwegian",
    "pan": "Panjabi",
    "gem": "Pennsylvania Dutch (Germanic Other)",
    "per": "Persian",
    "pol": "Polish",
    "por": "Portuguese",
    "rum": "Romanian",
    "rus": "Russian",
    "smo": "Samoan",
    "srp": "Serbo-Croatian",
    "slo": "Slovak",
    "spa": "Spanish",
    "swe": "Swedish",
    "syr": "Syriac",
    "tgl": "Tagalog",
    "tha": "Thai (Laotian)",
    "tur": "Turkish",
    "ukr": "Ukrainian",
    "vie": "Vietnamese",
    "yid": "Yiddish",

};

var dPersonnel334_24 = {
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
    "9917023": "Community Paramedicine",

};

var dPersonnel334_29 = {
    "1529901": "2009 Advanced Emergency Medical Technician(AEMT)",
    "1529003": "2009 Emergency Medical Responder (EMR)",
    "1529005": "2009 Emergency Medical Technician",
    "1529007": "2009 Paramedic",
    "1529009": "EMT-Basic",
    "1529011": "EMT-Intermediate",
    "1529013": "EMT-Paramedic",
    "1529015": "First Responder",

};

var dPersonnel334_31 = {
    "1531001": "Full Time Paid Employee",
    "1531003": "Part Time Paid Employee",
    "1531005": "Volunteer",
    "1531007": "Neither an Employee Nor a Volunteer",

};

var dPersonnel334_34 = {
    "1531001": "Full Time Paid Employee",
    "1531003": "Part Time Paid Employee",
    "1531005": "Volunteer",
    "1531007": "Neither an Employee Nor a Volunteer",

};

var dPersonnel334_35 = {
    "1531001": "Full Time Paid Employee",
    "1531003": "Part Time Paid Employee",
    "1531005": "Volunteer",
    "1531007": "Neither an Employee Nor a Volunteer",

};

var dPersonnel334_38 = {
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
    "9917023": "Community Paramedicine",

};

var dVehicle334_04 = {
    "9906001": "Female",
    "9906003": "Male",
    "9906005": "Unknown (Unable to Determine)"
};

var dVehicle334_05 = {
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
    "9917023": "Community Paramedicine",
};


var setPhoneNumberType = function (NEMSISElement, codeValue) {
    return null;
}

var seteMailType = function (NEMSISElement, codeValue) {
    return null;
}

