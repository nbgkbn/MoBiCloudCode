ErrorList = [];
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
var FAX = "PhoneNumberType=\"9913001\"";
var HOME = "PhoneNumberType=\"9913003\"";
var MOBILE = "PhoneNumberType=\"9913005\"";
var PAGER = "PhoneNumberType=\"9913007\"";
var WORKPHONE = "PhoneNumberType=\"9913009\"";
var PERSONALEMAIL = "EmailAddressType=\"9904001\"";
var WORKEMAIL = "EmailAddressType=\"9904003\"";

var dAgency = new Object;
var AgencyServiceGroup = [];
var AgencyYearGroup = [];
var AgencyServiceGroupArray = [];
var AgencyYearGroupArray = [];
var _retArray = [];
var _OLAPArray = [];
var OLAPXML = new XMLWriter();
var V3XML = new XMLWriter();
var XMLString = "";
var _v2Array = [];
var DemographicsObject = Object();

var dTotalYearArray = [];
//////////////////////////////////
var dAgency334 = Parse.Object.extend("dAgency334");
var AgencyYearGroup334 = Parse.Object.extend("dAgencyYearGroup");
var AgencyServiceGroup334 = Parse.Object.extend("dAgencyServiceGroup");


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
    for (var i = 0; i < parseObject.length; i++) {
        switch (parseObject[i].attributes.name) {
            //case "dAgency":
            // DemographicsObject.dAgencyParseObject = parseObject[i];
            // break;
            //case "dConfiguration":
            //    DemographicsObject.dConfigurationParseObject = parseObject[i];
            //    break;
            //  case "dContact":
            //     DemographicsObject.dContactParseObject = parseObject[i];
            //    break;
            case "dDevice":
                DemographicsObject.dDeviceParseObject = parseObject[i];
                break;
                //case "dFacility":
                //    DemographicsObject.dFacilityParseObject = parseObject[i];
                //    break;
                //case "dLocation":
                //    DemographicsObject.dLocationParseObject = parseObject[i];
                //    break;
                //case "dPersonnel":
                //    DemographicsObject.dPersonnelParseObject = parseObject[i];
                //    break;
                //case "dState":
                //    DemographicsObject.dStateParseObject = parseObject[i];

                //    break;
                //case "dVehicle":
                //    DemographicsObject.dVehicleParseObject = parseObject[i];
                //    break;
            default:
                "UNDEFINED";
        }
        console.log(":")
    };
    //var dAgencyObject = setdAgency(DemographicsObject.dAgencyParseObject);
    // setdConfiguration(DemographicsObject.dConfigurationParseObject);
    //setdContact(DemographicsObject.dContactParseObject);
    setdDevice(DemographicsObject.dDeviceParseObject);
    ////setdFacility(DemographicsObject.dFacilityParseObject);
    //setdLocation(DemographicsObject.dLocationParseObject);
    //setdPersonnel(DemographicsObject.dPersonnelParseObject);
    //setdState(DemographicsObject.dStateParseObject);

    //setdVehicle(DemographicsObject.dVehicleParseObject);
    // createV2XML(dAgency.V221XMLArray);
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


    V3XML.BeginNode("dAgency");
    OLAPXML.BeginNode("dAgency");

    var _arr = [];
    var _arrV2 = [];
    //dAgency["OLTPObjectId"] = agencyObject["agencyId"];


    //dAgency.01/////////
    _val = getValue(agencyObject.attributes.elements, "dAgency.01");
    if (_val == null) {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dAgency.01", Description: "Agency ID Mandatory" })
    }
    else {
        dAgency["dAgency.01"] = _val[0];
        V3XML.Node("dAgency.01", _val[0]);
        OLAPXML.Node("AgencyUniqueStateID", _val[0]);
    };

    //dAgency.02/////////

    _val = getValue(agencyObject.attributes.elements, "dAgency.02");
    if (_val == null) {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dAgency.02", Description: "Agency Number Mandatory" })
    }
    else {
        _v2Array.push({ section: "D01", element: "D01_01", val: _val[0] });
        dAgency["dAgency.02"] = _val[0];
        dAgency["AgencyNumber"] = _val[0];
        V3XML.Node("dAgency.02", _val[0]);
        OLAPXML.Node("AgencyNumber", _val[0]);
    };


    //dAgency.03///////
    _val = getValue(agencyObject.attributes.elements, "dAgency.03");
    if (_val == null) {
        V3XML.BeginNode("dAgency.03")
        OLAPXML.BeginNode("dAgency.03")

        if (isRequiredStateElement("dAgency.03") == true) {
            V3XML.Attrib("dAgency.03", NIL_V3NOT_RECORDED);
            OLAPXML.Node("AgencyName", "NOT RECORDED");
            dAgency["dAgency.03"] = v3NOT_RECORDED;
            dAgency["AgencyName"] = v3NOT_RECORDED;
        }
        else {
            V3XML.Attrib("dAgency.03", NIL_V3NOT_REPORTING);
            OLAPXML.Node("AgencyName", "NOT REPORTING");
            dAgency["AgencyName"] = v3NOT_REPORTING;
            dAgency["dAgency.03"] = v3NOT_REPORTING;
        }
        V3XML.EndNode()
        OLAPXML.EndNode()
    }
    else {
        V3XML.Node("dAgency.03", _val[0]);
        OLAPXML.Node("AgencyName", _val[0]);
        dAgency["dAgency.03"] = _val[0];
        dAgency["AgencyName"] = _val[0];
        _v2Array.push({ section: "D01", element: "D01_02", val: _val[0] });
    };

    //dAgency.04/////////
    _val = getValue(agencyObject.attributes.elements, "dAgency.04");
    if (_val == null) {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dAgency.02", Description: "Agency State Mandatory" })
    }
    else {
        _v2Array.push({ section: "D01", element: "D01_03", val: _val[0] });
        dAgency["dAgency.04"] = _val[0];
        V3XML.Node("dAgency.04", _val[0]);
        OLAPXML.Node("AgencyState", _val[0]);
        dAgency["AgencyState"] = _val[0];
    };


    ///////////////////////AgencyServiceGroup

    _sectionIndex = getSectionIndex(agencyObject.attributes, "dAgency.AgencyServiceGroup");
    var d1_10 = [];

    for (var x = 0; x < _sectionIndex.length; x++) {
        V3XML.BeginNode("AgencyServiceGroup")
        OLAPXML.BeginNode("AgencyServiceGroup")

        var AG = new Object;

        _elementList = agencyObject.attributes.sections[_sectionIndex[x]].attributes.elements;

        //Parent Object.  If no value, cannot process Group

        _val = getValue(_elementList, "dAgency.05");
        if (_val == null) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dAgency.05", Description: "Agency Service Area States Mandatory" })
        }
        else {
            AG["dAgency.05"] = _val[0];
            AG["ServiceAreaStates"] = _val[0];
            V3XML.Node("dAgency.05", _val[0]);
            OLAPXML.Node("ServiceAreaStates", _val[0]);
        };

        _val = getValue(_elementList, "dAgency.06");
        if (_val == null) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dAgency.06", Description: "Agency Service Area County(s) Mandatory" })
        }
        else {
            _arr = [];
            for (var i = 0; i < _val.length; i++) {
                _arr.push(_val[i]);
                V3XML.Node("dAgency.06", _val[i]);
                OLAPXML.Node("ServiceAreaStates", _val[i]);
            }

            AG["dAgency.06"] = _arr.slice(0);
            AG["ServiceAreaStates"] = _arr.slice(0);
            _v2Array.push({ section: "D01", element: "D01_04", val: _arr.slice(0) });
            d1_10.push({ element: "D01_04", val: _arr.slice(0) })
        };

        //dAgency.07/////////
        _val = getValue(_elementList, "dAgency.07");
        if (_val == null) {

            V3XML.BeginNode("dAgency.07")
            OLAPXML.BeginNode("dAgency.07")

            if (isRequiredStateElement("dAgency.07") == true) {
                V3XML.Attrib("dAgency.07", NIL_V3NOT_RECORDED);
                OLAPXML.Node("CensusTracts", "NOT RECORDED");
                AG["dAgency.07"] = v3NOT_RECORDED;
                AG["CensusTracts"] = v3NOT_RECORDED;
            }
            else {
                V3XML.Attrib("dAgency.07", null);
                OLAPXML.Node("CensusTracts", null);
                AG["dAgency.07"] = null;
                AG["CensusTracts"] = null;
            }
            V3XML.EndNode()
            OLAPXML.EndNode()
        }
        else {
            _arr = [];
            for (var i = 0; i < _val.length; i++) {
                V3XML.Node("dAgency.0", _val[i]);
                OLAPXML.Node("CensusTracts", _val[i]);
                _arr.push(_val[i]);
            }
            AG["dAgency.07"] = _arr.slice(0);
            AG["CensusTracts"] = _arr.slice(0);
        };

        //dAgency.08//////
        _val = getValue(_elementList, "dAgency.08");
        if (_val == null) {
            V3XML.BeginNode("dAgency.08")
            OLAPXML.BeginNode("dAgency.08")

            if (isRequiredStateElement("dAgency.08") == true) {
                V3XML.Attrib("dAgency.08", NIL_V3NOT_RECORDED);
                OLAPXML.Node("ServiceAreaZIPCodes", "NOT RECORDED");
                AG["ServiceAreaZIPCodes"] = v3NOT_RECORDED;
            }
            else {
                V3XML.Attrib("dAgency.08", null);
                OLAPXML.Node("ServiceAreaZIPCodes", null);
                AG["ServiceAreaZIPCodes"] = null;
                AG["dAgency.08"] = null;
            }
            V3XML.EndNode()
            OLAPXML.EndNode()
        }
        else {
            _arr = [];
            for (var i = 0; i < _val.length; i++) {
                V3XML.Node("dAgency.08", _val[i]);
                OLAPXML.Node("ServiceAreaZIPCodes", _val[i]);
                _arr.push(_val[i]);
            };
            AG["dAgency.08"] = _arr.slice(0);
            AG["ServiceAreaZIPCodes"] = _arr.slice(0);
        };
        V3XML.EndNode();
        OLAPXML.EndNode();

        AgencyServiceGroupArray.push(AG);
    };

    //dAgency.09///////
    _val = getValue(agencyObject.attributes.elements, "dAgency.09");
    if (_val == null) {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dAgency.09", Description: "Primary Type of Service MANDATORY" });
    }
    else {
        dAgency["dAgency.09"] = _val[0];
        dAgency["PrimaryTypeofService"] = _val[0];
        _v2Array.push({ section: "D01", element: "D01_05", val: setV2("dAgency.09", _val[0]) });
        V3XML.Node("dAgency.09", _val[0]);
        OLAPXML.Node("PrimaryTypeofService", _val[0]);

    };

    //dAgency.10//////
    _val = getValue(agencyObject.attributes.elements, "dAgency.10");

    if (_val == null) {

        V3XML.BeginNode("dAgency.10")
        OLAPXML.BeginNode("dAgency.10")

        if (isRequiredStateElement("dAgency.10") == true) {
            V3XML.Attrib("dAgency.10", NIL_V3NOT_RECORDED);
            OLAPXML.Node("OtherTypesofService", "NOT RECORDED");
            dAgency["OtherTypesofService"] = v3NOT_RECORDED;
            dAgency["dAgency.10"] = v3NOT_RECORDED;
            _v2Array.push({ section: "D01", element: "D01_05", val: v2NOT_RECORDED });
        }
        else {
            _v2Array.push({ section: "D01", element: "D01_05", val: v2NOT_REPORTING });
            V3XML.Attrib("dAgency.10", NIL_V3NOT_REPORTING);
            OLAPXML.Node("OtherTypesofService", "NOT REPORTING");
            dAgency["OtherTypesofService"] = v3NOT_REPORTING;
            dAgency["dAgency.10"] = v3NOT_REPORTING;
        }
        V3XML.EndNode()
        OLAPXML.EndNode()
    }
    else {
        for (var i = 0; i < _val.length; i++) {
            _arr.push(_val[i]);
            _arrV2.push(setV2("dAgency.10", _val[i]))
            V3XML.Node("dAgency.10", _val[i]);
            OLAPXML.Node("OtherTypesofService", setCodeText("dAgency.10", _val[i]));
        }
        dAgency["dAgency.10"] = _arr.slice(0);
        dAgency["OtherTypesofService"] = _arr.slice(0);
        _v2Array.push({ section: "D01", element: "D01_05", val: _arrV2 });
    };


    //dAgency.11////////
    _val = getValue(agencyObject.attributes.elements, "dAgency.11");
    if (_val == null) {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dAgency.11", Description: " Level of Service MANDATORY" })
    }
    else {
        dAgency["dAgency.11"] = _val[0];
        dAgency["LevelofService"] = _val[0];
        V3XML.Node("dAgency.11", _val[0]);
        OLAPXML.Node("LevelofService", setCodeText("dAgency.11", _val[0]));
        _v2Array.push({ section: "D01", element: "D01_07", val: setV2("dAgency.11", _val[0]) });
    };

    //dAgency.12
    _val = getValue(agencyObject.attributes.elements, "dAgency.12");
    if (_val == null) {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dAgency.12", Description: "Organization Status MANDATORY" })
    }
    else {
        dAgency["dAgency.12"] = _val[0];
        dAgency["OrganizationStatus"] = _val[0];
        V3XML.Node("dAgency.12", _val[0]);
        OLAPXML.Node("OrganizationStatus", setCodeText("dAgency.12", _val[0]));
        _v2Array.push({ section: "D01", element: "D01_09", val: setV2("dAgency.12", _val[0]) });
    };

    //dAgency.13////////
    _val = getValue(agencyObject.attributes.elements, "dAgency.13");
    if (_val == null) {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dAgency.13", Description: "Organization Type MANDATORY" })
    }
    else {
        V3XML.Node("dAgency.14", _val[0]);
        OLAPXML.Node("OrganizationalType", _val[0]);
        _v2Array.push({ section: "D01", element: "D01_08", val: setV2("dAgency.13", _val[0]) });
        dAgency["dAgency.13"] = _val[0];
        dAgency["dAgency.13"] = _val[0];
    };

    //dAgency.14////////
    _val = getValue(agencyObject.attributes.elements, "dAgency.14");
    if (_val == null) {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dAgency.14", Description: "EMS Agency Organizational Tax Status MANDATORY" })
    }
    else {
        V3XML.Node("dAgency.14", _val[0]);
        V3XML.Node("OrganizationalTaxStatus", _val[0]);
        OLAPXML.Node("OrganizationalTaxStatus", setCodeText("dAgency.14", _val[0]));
        dAgency["dAgency.14"] = _val[0];
    };

    ///////////////////////AgencyYearGroup
    _sectionIndex = getSectionIndex(agencyObject.attributes, "dAgency.AgencyYearGroup");
    var dYearGroup = [];
    //  _sectionIndex = getSectionIndex(agencyObject, "dAgency.AgencyYearGroup");
    for (var x = 0; x < _sectionIndex.length; x++) {

        V3XML.BeginNode("dAgency.AgencyYearGroup")
        OLAPXML.BeginNode("dAgency.AgencyYearGroup")

        var YG = new Object;
        _elementList = agencyObject.attributes.sections[_sectionIndex[x]].attributes.elements;


        //dAgency.15///////
        _val = getValue(_elementList, "dAgency.15");
        if (_val == null) {
            ErrorList.push("dAgency.15 MANDATORY Element");
            dYearGroup.push({ section: "D01", element: "D01_10", val: null });
        }
        else {
            V3XML.Node("dAgency.15", _val[0]);
            OLAPXML.Node("StatisticalCalendarYear", _val[0]);
            YG["dAgency.15"] = _val[0];
            YG["StatisticalCalendarYear"] = _val[0];
            _v2Array.push({ section: "D01", element: "D01_10", val: _val[0] });
            dYearGroup.push({ section: "D01", element: "D01_10", val: _val[0] });
        };


        //dAgency.16///////
        _val = getValue(_elementList, "dAgency.16");
        if (_val == null) {
            V3XML.BeginNode("dAgency.16")
            OLAPXML.BeginNode("dAgency.16")

            if (isRequiredStateElement("dAgency.16") == true) {
                V3XML.Attrib("dAgency.16", NIL_V3NOT_RECORDED);
                OLAPXML.Node("TotalPrimaryServiceAreaSize", "NOT RECORDED");
                YG["dAgency.03"] = v3NOT_RECORDED;
                YG["TotalPrimaryServiceAreaSize"] = v3NOT_RECORDED;
                dYearGroup.push({ section: "D01", element: "D01_12", val: v2NOT_RECORDED });
            }
            else {
                V3XML.Attrib("dAgency.16", NIL_V3NOT_REPORTING);
                OLAPXML.Node("dAgency.1`6", "NOT REPORTING");
                dAgency["TotalPrimaryServiceAreaSize"] = v3NOT_REPORTING;
                OLAPXML.Node("TotalPrimaryServiceAreaSize", "NOT RECORDED");
                dYearGroup.push({ section: "D01", element: "D01_12", val: v2NOT_AVAILABLE });
            }
            V3XML.EndNode()
        }
        else {
            V3XML.Node("dAgency.16", _val[0]);
            YG["dAgency.16"] = _val[0];
            YG["TotalPrimaryServiceAreaSize"] = _val[0];
            OLAPXML.Node("TotalPrimaryServiceAreaSize", _val[0]);
            dYearGroup.push({ section: "D01", element: "D01_12", val: setV2("dAgency.16", _val[0]) });
        };

        //dAgency.17///////
        _val = getValue(_elementList, "dAgency.17");
        if (_val == null) {
            V3XML.BeginNode("dAgency.17")
            dYearGroup.push({ section: "D01", element: "D01_13", val: null });
            YG["dAgency.17"] = v3NOT_RECORDED;
            YG["TotalServiceAreaPopulation"] = v3NOT_RECORDED;
            OLAPXML.Node("TotalServiceAreaPopulation", "NOT RECORDED");
            V3XML.EndNode()
        }
        else {
            V3XML.Node("dAgency.17", _val[0]);
            YG["dAgency.17"] = _val[0];
            YG["TotalServiceAreaPopulation"] = _val[0];
            OLAPXML.Node("TotalServiceAreaPopulation", _val[0]);
            dYearGroup.push({ section: "D01", element: "D01_13", val: _val[0] });
        };

        //dAgency.18///////////
        _val = getValue(_elementList, "dAgency.18");
        if (_val == null) {
            V3XML.BeginNode("dAgency.18")
            YG["dAgency.18"] = v3NOT_RECORDED;
            YG["911CallCenterVolumeperYear"] = v3NOT_RECORDED;
            V3XML.Attrib("dAgency.18", NIL_V3NOT_RECORDED);
            OLAPXML.Node("911CallCenterVolumeperYear", "NOT RECORDED");
            dYearGroup.push({ section: "D01", element: "D01_14", val: null });
            V3XML.EndNode()
        }

        else {
            YG["dAgency.18"] = _val[0];
            YG["911CallCenterVolumeperYear"] = _val[0];
            V3XML.Node("dAgency.18", _val[0]);
            OLAPXML.Node("911CallCenterVolumeperYear", _val[0]);
            dYearGroup.push({ section: "D01", element: "D01_14", val: _val[0] });
        };

        //dAgency.19/////////
        _val = getValue(_elementList, "dAgency.19");
        if (_val == null) {
            V3XML.BeginNode("dAgency.19")
            YG["dAgency.19"] = v3NOT_RECORDED;
            YG["DispatchVolumeperYear"] = v3NOT_RECORDED;
            V3XML.Attrib("dAgency.19", NIL_V3NOT_RECORDED);
            OLAPXML.Node("911CallCenterVolumeperYear", "NOT RECORDED");
            V3XML.EndNode();
            dYearGroup.push({ section: "D01", element: "D01_15", val: null });
        }
        else {
            YG["dAgency.19"] = _val[0];
            YG["911CallCenterVolumeperYear"] = _val[0];
            V3XML.Node("dAgency.19", _val[0]);
            OLAPXML.Node("911CallCenterVolumeperYear", _val[0]);
            dYearGroup.push({ section: "D01", element: "D01_15", val: _val[0] });
        };


        _val = getValue(_elementList, "dAgency.20");
        if (_val == null) {
            V3XML.BeginNode("dAgency.20")
            YG["dAgency.20"] = v3NOT_RECORDED;
            YG["PatientTransportVolumeperYear"] = v3NOT_RECORDED;
            V3XML.Attrib("dAgency.20", NIL_V3NOT_RECORDED);
            OLAPXML.Node("PatientTransportVolumeperYear", "NOT RECORDED");
            dYearGroup.push({ section: "D01", element: "D01_16", val: null });
            V3XML.EndNode()
        }
        else {
            YG["dAgency.20"] = _val[0];
            YG["PatientTransportVolumeperYear"] = _val[0];
            V3XML.Node("dAgency.20", _val[0]);
            OLAPXML.Node("PatientTransportVolumeperYear", _val[0]);
            dYearGroup.push({ section: "D01", element: "D01_16", val: _val[0] });
        };

        //dAgency.21//////
        _val = getValue(_elementList, "dAgency.21");
        if (_val == null) {
            V3XML.BeginNode("dAgency.21")
            YG["dAgency.21"] = v3NOT_RECORDED;
            YG["PatientContactVolumeperYear"] = v3NOT_RECORDED;
            V3XML.Attrib("dAgency.21", NIL_V3NOT_RECORDED);
            OLAPXML.Node("PatientContactVolumeperYear", "NOT RECORDED");
            dYearGroup.push({ section: "D01", element: "D01_17", val: null });
            V3XML.EndNode()
        }
        else {
            YG["dAgency.21"] = _val[0];
            YG["PatientContactVolumeperYear"] = _val[0];
            V3XML.Node("dAgency.21", _val[0]);
            OLAPXML.Node("PatientContactVolumeperYear", _val[0]);
            dYearGroup.push({ section: "D01", element: "D01_17", val: _val[0] });
        };

        //dAgency.22////
        _val = getValue(_elementList, "dAgency.22");
        if (_val == null) {
            if (isRequiredStateElement("dAgency.22") == true) {
                V3XML.BeginNode("dAgency.22")
                YG["dAgency.22"] = v3NOT_RECORDED;
                YG["BillableCallsperYear"] = v3NOT_RECORDED;
                V3XML.Attrib("dAgency.22", NIL_V3NOT_RECORDED);
                OLAPXML.Node("BillableCallsperYear", "NOT RECORDED");
                dYearGroup.push({ section: "D01", element: "D01_18", val: null });
                V3XML.EndNode()
            }
        }
        else {
            YG["dAgency.22"] = _val[0];
            YG["PatientContactVolumeperYear"] = _val[0];
            V3XML.Node("dAgency.22", _val[0]);
            OLAPXML.Node("BillableCallsperYear", _val[0]);
            dYearGroup.push({ section: "D01", element: "D01_18", val: _val[0] });
        };
        dTotalYearArray.push(dYearGroup);
        V3XML.EndNode()  //dAgency.AgencyYearGroup
        OLAPXML.EndNode()//dAgency.AgencyYearGroup
        AgencyYearGroupArray.push(YG);
    };

    ////////////////////////

    //dAgency.23///////
    _val = getValue(agencyObject.attributes.elements, "dAgency.23");
    console.log(_val)

    if (_val == null) {
        dAgency["dAgency.23"] = null;
        dAgency["AgencyTimeZone"] = null;
        V3XML.Node("dAgency.23", null);
        OLAPXML.Node("AgencyTimeZone", null);
        _v2Array.push({ section: "D01", element: "D01_19", val: null });
    }
    else {
        dAgency["AgencyTimeZone"] = _val[0];
        V3XML.Node("dAgency.23", _val[0]);
        OLAPXML.Node("AgencyTimeZone", _val[0]);
        dAgency["dAgency.23"] = _val[0];
        _v2Array.push({ section: "D01", element: "D01_19", val: setV2("dAgency.23", _val[0]) });
    };

    //dAgency.24//////////////
    _val = getValue(agencyObject.attributes.elements, "dAgency.24");
    if (_val == null) {
        dAgency["dAgency.24"] = null;
        dAgency["AgencyDaylightSavingsTimeUse"] = null;
        V3XML.Node("dAgency.24", null);
        OLAPXML.Node("AgencyTimeZone", null);
        _v2Array.push({ section: "D01", element: "D01_20", val: null });
    }
    else {
        dAgency["dAgency.24"] = _val[0];
        dAgency["AgencyDaylightSavingsTimeUse"] = _val[0];
        V3XML.Node("dAgency.23", _val[0]);
        OLAPXML.Node("AgencyTimeZone", _val[0]);
        _v2Array.push({ section: "D01", element: "D01_20", val: setV2("dAgency.24", _val[0]) });
    };

    //dAgency.25//////////////
    _val = getValue(agencyObject.attributes.elements, "dAgency.25");
    if (_val == null) {
        V3XML.BeginNode("dAgency.25")
        dAgency["dAgency.25"] = v3NOT_RECORDED;
        dAgency["NationalProviderIdentifier"] = v3NOT_RECORDED;
        V3XML.Attrib("dAgency.25", NIL_V3NOT_RECORDED);
        OLAPXML.Node("NationalProviderIdentifier", "NOT RECORDED");
        V3XML.EndNode();
    }
    else {
        _arr = [];
        _arrV2 = [];
        for (var i = 0; i < _val.length ; i++) {
            V3XML.Node("dAgency.25", _val[i]);
            OLAPXML.Node("NationalProviderIdentifier", _val[i]);
            _arr.push(_val[i]);
            _arrV2.push(setV2("dAgency.25", _val[i]));

        }
        dAgency["dAgency.25"] = _arr.slice(0);
        dAgency["NationalProviderIdentifier"] = _arr.slice(0);
        _v2Array.push({ section: "D01", element: "D01_21", val: _arrV2 });
    };

    //dAgency.26/////////////
    _val = getValue(agencyObject.attributes.elements, "dAgency.26");
    if (_val == null) {
        V3XML.BeginNode("dAgency.26")
        dAgency["dAgency.25"] = v3NOT_RECORDED;
        dAgency["FireDepartmentIDNumber"] = v3NOT_RECORDED;
        V3XML.Attrib("dAgency.26", NIL_V3NOT_RECORDED);
        OLAPXML.Node("FireDepartmentIDNumber", "NOT RECORDED");
        V3XML.EndNode();
    }
    else {
        _arr = [];
        for (var i = 0; i < agencyObject.length ; i++) {
            V3XML.Node("dAgency.26", _val[i]);
            OLAPXML.Node("FireDepartmentIDNumber", _val[i]);
            _arr.push(_val[i]);
        }
        dAgency["dAgency.26"] = _arr.slice(0);
        dAgency["FireDepartmentIDNumber"] = _arr.slice(0);
    };

    V3XML.EndNode();
    OLAPXML.EndNode();
    dAgency.Errors = ErrorList;
    dAgency.V334XML = V3XML;
    dAgency.OLAP334XML = OLAPXML;

    if (AgencyServiceGroupArray.length > 0) {
        dAgency.AgencyServiceGroup = AgencyServiceGroupArray;
    };

    if (AgencyYearGroupArray.length > 0) {
        dAgency.AgencyYearGroup = AgencyYearGroupArray;
    }
    console.log(V3XML.ToString())
    return dAgency;
};

var setdConfiguration = function (configurationObject) {

    var _arr = []
    var _arrV2 = []
    var dConfiguration = new Object();
    var ConfigurationGroup = new Object();


    V3XML.BeginNode("dConfiguration");
    OLAPXML.BeginNode("dConfiguration");


    for (var xx = 0; xx < configurationObject.attributes.sections.length; xx++) {
        V3XML.BeginNode("dConfiguration.ConfigurationGroup>");
        OLAPXML.BeginNode("dConfiguration.ConfigurationGroup>");

        ///dConfiguration.01 
        var elementList = configurationObject.attributes.sections[xx].attributes.elements;
        _val = getValue(elementList, "dConfiguration.01");

        if (_val == null) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dConfiguration.01", Description: " State Associated with the Certification/Licensure Levels MANDATORY" })
        }
        else {

            V3XML.Node("dConfiguration.01", _val[0]);
            OLAPXML.Node("ConfigurationState", _val[0]);
            ConfigurationGroup["dConfiguration.01"] = _val[0];
            ConfigurationGroup["ConfigurationState"] = _val[0];
        };

        ///dConfiguration.02 
        _val = getValue(elementList, "dConfiguration.02");
        if (_val == null) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dConfiguration.01", Description: " State Certification/Licensure Levels MANDATORY" })
        }
        else {
            _arr = [];
            _arrV2 = [];
            for (var t = 0; t < _val.length; t++) {
                V3XML.Node("dConfiguration.02", _val[t]);
                OLAPXML.Node("ConfigurationState", _val[t]);
                _arr.push(_val[t]);
                _arrV2.push(setV2("dConfiguration.02", _val[t]));
            }
            ConfigurationGroup["dConfiguration.02"] = _arr.slice(0);
            ConfigurationGroup["ConfigurationState"] = _arr.slice(0);

            _v2Array.push({ section: "D04", element: "D04_01", val: _arrV2.slice(0) });
        };

        ///dConfiguration.03 
        _val = getValue(elementList, "dConfiguration.03");
        if (_val == null) {
            if (isRequiredStateElement("dConfiguration.03") == true) {
                V3XML.BeginNode("dConfiguration.03")
                ConfigurationGroup["dConfiguration.03"] = v3NOT_RECORDED;
                ConfigurationGroup["ProceduresPermittedbytheState"] = v3NOT_RECORDED;
                V3XML.Attrib("dConfiguration.03", NIL_V3NOT_RECORDED);
                OLAPXML.Node("ProceduresPermittedbytheState", "NOT RECORDED");
                V3XML.EndNode();
            }
        }
        else {
            _arr = [];
            for (var t = 0; t < _val.length; t++) {
                V3XML.Node("dConfiguration.03", _val[t]);
                OLAPXML.Node("ConfigurationState", _val[t]);
                _arr.push(_val[t]);
                _arrV2.push(setV2("dConfiguration.02", _val[t]));
            };
            ConfigurationGroup["dConfiguration.03"] = _arr.slice(0);
            ConfigurationGroup["ConfigurationState"] = _arr.slice(0);
        };

        ///dConfiguration.04 
        _val = getValue(elementList, "dConfiguration.04");
        if (_val == null) {
            if (isRequiredStateElement("dConfiguration.04") == true) {
                V3XML.BeginNode("dConfiguration.04")
                ConfigurationGroup["dConfiguration.04"] = v3NOT_RECORDED;
                ConfigurationGroup["MedicationsPermittedbytheState"] = v3NOT_RECORDED;
                V3XML.Attrib("dConfiguration.04", NIL_V3NOT_RECORDED);
                OLAPXML.Node("MedicationsPermittedbytheState", "NOT RECORDED");
                V3XML.EndNode();
            }
        }
        else {
            _arr = [];
            for (var t = 0; t < _val.length; t++) {
                V3XML.Node("dConfiguration.04", _val[t]);
                OLAPXML.Node("MedicationsPermittedbytheState", _val[t]);
                _arr.push(_val[t]);
                _arrV2.push(setV2("dConfiguration.04", _val[t]));

            }
            ConfigurationGroup["dConfiguration.04"] = _arr.slice(0);
            ConfigurationGroup["MedicationsPermittedbytheState"] = _arr.slice(0);
        };

        ///dConfiguration.05 
        _val = getValue(elementList, "dConfiguration.05");
        if (_val == null) {
            if (isRequiredStateElement("dConfiguration.05") == true) {
                V3XML.BeginNode("dConfiguration.05")
                ConfigurationGroup["dConfiguration.05"] = v3NOT_RECORDED;
                ConfigurationGroup["ProtocolsPermittedbytheState"] = v3NOT_RECORDED;
                V3XML.Attrib("dConfiguration.05", NIL_V3NOT_RECORDED);
                OLAPXML.Node("ProtocolsPermittedbytheState", "NOT RECORDED");
                V3XML.EndNode();
            };
        }
        else {
            _arr = []
            for (var t = 0; t < _val.length; t++) {
                V3XML.Node("dConfiguration.05", _val[t]);
                OLAPXML.Node("ProtocolsPermittedbytheState", _val[t]);
                _arr.push(_val[t]);
                _arrV2.push(setV2("dConfiguration.05", _val[t]));
            };
            ConfigurationGroup["ProtocolsPermittedbytheState"] = _arr.slice(0);
            ConfigurationGroup["dConfiguration.05"] = _arr.slice(0);
        };


        ///////////////////////ProcedureGroup
        //        _sectionIndex = getSectionIndex(agencyObject.attributes, "dAgency.AgencyServiceGroup");
        _sectionIndex = getSectionIndex(configurationObject.attributes.sections[xx].attributes, "dConfiguration.ProcedureGroup");
        for (var x = 0; x < _sectionIndex.length; x++) {
            V3XML.BeginNode("dConfiguration.ProcedureGroup");
            OLAPXML.BeginNode("dConfiguration.ProcedureGroup");

            var ProcedureGroup = new Object;
            _pgElementList = configurationObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements;

            ///dConfiguration.06 
            _val = getValue(_pgElementList, "dConfiguration.06");
            if (_val == null) {
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dConfiguration.06", Description: "EMS Certification Levels Permitted to Perform Each Procedure MANDATORY" })
            }
            else {
                V3XML.Node("dConfiguration.06", _val[0]);
                OLAPXML.Node("CertificationLevelsPermittedtoPerformEachProcedure", _val[0]);
                ProcedureGroup["CertificationLevelsPermittedtoPerformEachProcedure"] = _val[0];
                ProcedureGroup["dConfiguration.06"] = _val[0];
                _v2Array.push({ section: "D04", element: "D04_05", val: setV2("dConfiguration.06", _val) });
            };

            ///dConfiguration.07 
            _val = getValue(_pgElementList, "dConfiguration.07");
            if (_val == null) {
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dConfiguration.07", Description: " EMS Agency Procedures MANDATORY" })
            }
            else {
                _arr = [];
                _arrV2 = [];
                _valrrV2 = [];

                for (var t = 0; t < _val.length; t++) {
                    V3XML.Node("dConfiguration.07", _val[t]);
                    OLAPXML.Node("EMSAgencyProcedures", setCodeText("dConfiguration.07", _val[t]));
                    _valrrV2.push(setCodeText("dConfiguration.07", _val[t]));
                    _arr.push(_val[t]);
                    _arrV2.push(setV2("dConfiguration.07", _val[t]));
                };
                _v2Array.push({ section: "D04", element: "D04_04", val: _arrV2.slice(0) });
                ProcedureGroup["dConfiguration.07"] = _arr.slice(0);
                ProcedureGroup["CertificationLevelsPermittedtoPerformEachProcedure"] = _valrrV2.slice(0);;

            };

            V3XML.EndNode()
            OLAPXML.EndNode()
        };
        //////////////////////////////
        ///////////////////////dConfiguration.MedicationGroup

        _sectionIndex = getSectionIndex(configurationObject.attributes.sections[xx].attributes, "dConfiguration.MedicationGroup");

        // console.log(_sectionIndex)
        var _MedicationGroupArray = new Array();
        for (var x = 0; x < _sectionIndex.length; x++) {

            V3XML.BeginNode("dConfiguration.MedicationGroup");
            OLAPXML.BeginNode("dConfiguration.MedicationGroup");

            var MedicationGroup = new Object;
            _pgElementList = configurationObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements;

            ///dConfiguration.08 
            _val = getValue(_pgElementList, "dConfiguration.08");
            if (_val == null) {
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dConfiguration.08", Description: "EMS Certification Levels Permitted to Perform Each Procedure MANDATORY" })
            }
            else {
                V3XML.Node("dConfiguration.08", _val[0]);
                OLAPXML.Node("CertificationLevelsPermittedtoPerformEachMedication", _val[0]);
                MedicationGroup["CertificationLevelsPermittedtoPerformEachMedication"] = _val[0];
                MedicationGroup["dConfiguration.08"] = _val[0];
                _v2Array.push({ section: "D04", element: "D04_07", val: setV2("dConfiguration.08", _val) });
            };

            ///dConfiguration.09 
            _val = getValue(_pgElementList, "dConfiguration.09");
            if (_val == null) {
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dConfiguration.08", Description: "EMS Agency Medications MANDATORY" })
            }
            else {
                _arr = [];
                _arrV2 = [];
                for (var t = 0; t < _val.length; t++) {
                    _arr.push(_val);
                    _arrV2.push(setV2("dConfiguration.09", _val[t]));
                    V3XML.Node("dConfiguration.08", _val[t]);
                    OLAPXML.Node("AgencyMedications", _val[t]);
                };
                _v2Array.push({ section: "D04", element: "D04_04", val: _arrV2.slice(0) });
                MedicationGroup["dConfiguration.09"] = _arr.slice(0);
                MedicationGroup["AgencyMedications"] = _arr.slice(0);
            };
            _MedicationGroupArray.push(MedicationsGroup)
            V3XML.EndNode()
            OLAPXML.EndNode()
        };

        ///dConfiguration.10 
        _val = getValue(elementList, "dConfiguration.10");
        if (_val == null) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dConfiguration.08", Description: "EMS Agency Protocols MANDATORY" })
        }
        else {
            _arr = [];
            _arrV2 = [];
            _arrrV3 = [];
            for (var t = 0; t < _val.length; t++) {
                _arr.push(_val);
                _arrV2.push(setV2("dConfiguration.10", _val));
                V3XML.Node("dConfiguration.10", _val[t]);
                OLAPXML.Node("AgencyProtocols", setCodeText("dConfiguration.10", _val[t]));
                _arrrV3.push(setCodeText("dConfiguration.10", _val[t]));

            }
            ConfigurationGroup["dConfiguration.10"] = _arr.slice(0);
            ConfigurationGroup["dConfiguration.10"] = _arrrV3.slice(0);
            _v2Array.push({ section: "D04", element: "D04_08", val: _arrV2 });
        };

        ///dConfiguration.11 
        _val = getValue(elementList, "dConfiguration.11");
        if (_val == null) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dConfiguration.08", Description: " EMS Agency Specialty Service Capability MANDATORY" })
        }
        else {
            _arrrV3 = [];
            _arr = [];

            for (var t = 0; t < _val.length; t++) {
                _arr.push(_val[t]);
                V3XML.Node("dConfiguration.11", _val[t]);
                OLAPXML.Node("AgencySpecialtyServiceCapability", setCodeText("dConfiguration.11", _val[t]));
                _arrrV3.push(setCodeText("dConfiguration.11", _val[t]));

            }
            ConfigurationGroup["dConfiguration.11"] = _arr.slice(0);
            ConfigurationGroup["AgencySpecialtyServiceCapability"] = _arrrV3.slice(0);
        };


        ///dConfiguration.12 
        _val = getValue(elementList, "dConfiguration.12");
        if (_val == null) {
            V3XML.Node("dConfiguration.10", null);
            OLAPXML.Node("BillingStatus", null);
            _v2Array.push({ section: "D04", element: "D04_10", val: null });

        }
        else {
            V3XML.Node("dConfiguration.12", _val[0]);
            OLAPXML.Node("BillingStatus", setCodeText("dConfiguration.12", _val[0]));
            _v2Array.push({ section: "D04", element: "D04_10", val: null });
            ConfigurationGroup["dConfiguration.12"] = _val[0];
            _v2Array.push({ section: "D04", element: "D04_10", val: setV2("dConfiguration.12", _val) });
        };

        ///dConfiguration.13 
        _val = getValue(elementList, "dConfiguration.13");
        if (_val == null) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dConfiguration.08", Description: " Emergency Medical Dispatch (EMD) MANDATORY" })
        }
        else {
            V3XML.Node("dConfiguration.13", _val[0]);
            OLAPXML.Node("EMDProvidedtoEMSAgencyServiceArea", setCodeText("dConfiguration.13", _val[0]));
            _v2Array.push({ section: "D04", element: "D04_10", val: null });
            ConfigurationGroup["dConfiguration.13"] = _val[0];
            ConfigurationGroup["EMDProvidedtoEMSAgencyServiceArea"] = setCodeText("dConfiguration.13", _val[0]);
        };


        ///dConfiguration.14 
        _val = getValue(elementList, "dConfiguration.14");
        if (_val == null) {
            V3XML.BeginNode("dAgency.14")
            OLAPXML.BeginNode("dAgency.14")
            if (isRequiredStateElement("dConfiguration.14") == true) {
                V3XML.Attrib("dConfiguration.14", NIL_V3NOT_RECORDED);
                OLAPXML.Node("EMDVendor", "NOT RECORDED");
                ConfigurationGroup["dConfiguration.14"] = v3NOT_RECORDED;
                ConfigurationGroup["EMDVendor"] = v3NOT_RECORDED;
                _v2Array.push({ section: "D04", element: "D04_17", val: v2NOT_RECORDED });
            }
            else {
                V3XML.Attrib("dConfiguration.14", NIL_V3NOT_REPORTING);
                OLAPXML.Node("EMDVendor", "NOT RECORDED");
                ConfigurationGroup["dConfiguration.14"] = v3NOT_REPORTING;
                ConfigurationGroup["EMDVendor"] = v3NOT_REPORTING;
                _v2Array.push({ section: "D04", element: "D04_17", val: v2NOT_REPORTING });
            }
            V3XML.EndNode();
        }
        else {
            _arr = [];
            for (var t = 0; t < _val.length; t++) {
                _arr.push(_val[t]);
                V3XML.Node("dConfiguration.14", _val[t]);
                OLAPXML.Node("EMDVendor", _val[t]);
            }
            _v2Array.push({ section: "D04", element: "D04_17", val: _arr[0] });  //Version 2 has but one
            ConfigurationGroup["dConfiguration.14"] = _arr.slice(0);
            ConfigurationGroup["EMDVendor"] = _arr.slice(0);
        };

        ///dConfiguration.15 
        _val = getValue(elementList, "dConfiguration.15");
        if (_val == null) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dConfiguration.08", Description: "Patient Monitoring Capability(ies) MANDATORY" })
        }
        else {
            var _arr = [];
            var _arrV3 = [];
            for (var t = 0; t < _val.length; t++) {
                _arr.push(_val[t]);
                _arr.push(setCodeText("dConfiguration.15", _val[t]));
                V3XML.Node("dConfiguration.14", _val[t]);
                OLAPXML.Node("PatientMonitoringCapabilityies", setCodeText("dConfiguration.15", _val[t]));
            }
            ConfigurationGroup["dConfiguration.15"] = _arr.slice(0);
            ConfigurationGroup["PatientMonitoringCapabilityies"] = _arrV3.slice(0);
        };


        ///dConfiguration.16 
        _val = getValue(elementList, "dConfiguration.16");
        if (_val == null) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dConfiguration.08", Description: "Crew Call Sign MANDATORY" })
        }
        else {
            var _arr = [];
            var _arrV2 = [];
            var _arrV3 = [];
            for (var t = 0; t < _val.length; t++) {
                _arr.push(_val[t]);

                V3XML.Node("dConfiguration.16", _val[t]);
                OLAPXML.Node("CrewCallSign", setCodeText("dConfiguration.15", _val[t]));

            }
            ConfigurationGroup["dConfiguration.16"] = _arr.slice(0);
            ConfigurationGroup["CrewCallSign"] = _arr.slice(0);
            _v2Array.push({ section: "D04", element: "D04_02", val: _arr.slice(0) });
        };

        ///dConfiguration.17 
        _val = getValue(elementList, "dConfiguration.17");
        if (_val == null) {
            V3XML.Node("dConfiguration.16", null);
            OLAPXML.Node("DispatchCenterID", null);
            ConfigurationGroup["dConfiguration.17"] = null;
            ConfigurationGroup["DispatchCenterID"] = null;

        }
        else {
            var _arr = [];
            for (var t = 0; t < _val.length; t++) {
                _arr.push(_val[t]);
                V3XML.Node("dConfiguration.16", _val[t]);
                OLAPXML.Node("DispatchCenterID", _val[t]);
            }
            ConfigurationGroup["dConfiguration.17"] = _arr.slice(0);
            ConfigurationGroup["DispatchCenterID"] = _arr.slice(0);;
        };
        OLAPXML.EndNode();
        V3XML.EndNode();

    };

    OLAPXML.EndNode();
    V3XML.EndNode();
    ////////////////////////////////////
    ////////////////////////////////////
    //XMLString to dConfigurations
    ConfigurationGroup.ProcedureGroup = ProcedureGroup;
    ConfigurationGroup.MedicationGroup = MedicationGroup;
    dConfiguration.ConfigurationGroup = ConfigurationGroup;

    return dConfiguration;
};

var setdContact = function (contactObject) {

    var ContactInfoGroup = new Object()
    var dContact = new Object()

    V3XML.BeginNode("dContact");
    OLAPXML.BeginNode("dContact");


    for (var xx = 0; xx < contactObject.attributes.sections.length; xx++) {
        var elementList = contactObject.attributes.sections[xx].attributes.elements;

        V3XML.BeginNode("dContact.ContactInfoGroup");
        OLAPXML.BeginNode("dContact.ContactInfoGroup");

        // dContact.01/////////////
        _val = getValue(elementList, "dContact.01");
        if (_val == null) {
            if (isRequiredStateElement("dContact.01") == true) {
                V3XML.BeginNode("dContact.01")
                V3XML.Attrib("dContact.01", NIL_V3NOT_RECORDED);
                OLAPXML.Node("ContactType", "NOT RECORDED");
                ContactInfoGroup["ContactType"] = v3NOT_RECORDED;
                ContactInfoGroup["dContact.01"] = v3NOT_RECORDED;
                V3XML.EndNode();
            }
            else {
                V3XML.BeginNode("dContact.01")
                V3XML.Attrib("dContact.01", NIL_V3NOT_REPORTING);
                OLAPXML.Node("ContactType", "NOT REPORTING");
                ContactInfoGroup["ContactType"] = v3NOT_REPORTING;
                ContactInfoGroup["dContact.01"] = v3NOT_REPORTING;
                V3XML.EndNode();
            }
        }
        else {
            V3XML.Node("dContact.01", _val[0]);
            OLAPXML.Node("ContactType", setCodeText("dContact.01", _val[0]));
            ContactInfoGroup["dContact.01"] = v3NOT_REPORTING;
            ContactInfoGroup["ContactType"] = setCodeText("dContact.01", _val[0]);
        };

        // dContact.02/////////////
        _val = getValue(elementList, "dContact.02");
        if (_val == null) {
            _v2Array.push({ section: "D02", element: "D02_02", val: null });
            if (isRequiredStateElement("dContact.02") == - true) {
                V3XML.BeginNode("dContact.02")
                V3XML.Attrib("dContact.02", NIL_V3NOT_RECORDED);
                OLAPXML.Node("ContactLastName", "NOT RECORDED");
                ContactInfoGroup["ContactLastName"] = v3NOT_RECORDED;
                ContactInfoGroup["dContact.02"] = v3NOT_RECORDED;
                V3XML.EndNode();
            }
            else {
                V3XML.BeginNode("dContact.02")
                V3XML.Attrib("dContact.02", NIL_V3NOT_REPORTING);
                OLAPXML.Node("ContactLastName", "NOT REPORTING");
                ContactInfoGroup["ContactLastName"] = v3NOT_REPORTING;
                ContactInfoGroup["dContact.02"] = v3NOT_REPORTING;
                V3XML.EndNode();
            }
        }
        else {
            V3XML.Node("dContact.02", _val[0]);
            OLAPXML.Node("ContactLastName", _val[0]);
            ContactInfoGroup["dContact.02"] = v3NOT_REPORTING;
            ContactInfoGroup["ContactType"] = setCodeText("dContact.01", _val[0]);
        };


        // dContact.03/////////////
        _val = getValue(elementList, "dContact.03");
        if (_val == null) {
            if (isRequiredStateElement("dContact.03") == - true) {
                _v2Array.push({ section: "D02", element: "D02_03", val: v2NOT_RECORDED });
                V3XML.BeginNode("dContact.03")
                V3XML.Attrib("dContact.03", NIL_V3NOT_RECORDED);
                OLAPXML.Node("ContactFirstName", "NOT RECORDED");
                ContactInfoGroup["ContactFirstName"] = v3NOT_RECORDED;
                ContactInfoGroup["dContact.03"] = v3NOT_RECORDED;
                V3XML.EndNode();
            }
            else {
                _v2Array.push({ section: "D02", element: "D02_03", val: v2NOT_REPORTING });
                V3XML.BeginNode("dContact.03")
                V3XML.Attrib("dContact.03", NIL_V3NOT_REPORTING);
                OLAPXML.Node("ContactFirstName", "NOT REPORTING");
                ContactInfoGroup["ContactFirstName"] = v3NOT_REPORTING;
                ContactInfoGroup["dContact.03"] = v3NOT_REPORTING;
                V3XML.EndNode();
            }
        }
        else {
            V3XML.Node("dContact.03", _val[0]);
            OLAPXML.Node("ContactFirstName", _val[0]);
            ContactInfoGroup["dContact.03"] = _val[0];
            ContactInfoGroup["ContactFirstName"] = _val[0];
            _v2Array.push({ section: "D02", element: "D02_03", val: _val[0] });
        };

        // dContact.04/////////////
        _val = getValue(elementList, "dContact.04");
        if (_val == null) {
            _v2Array.push({ section: "D02", element: "D02_04", val: v2NOT_KNOWN });
            V3XML.Node("dContact.04", null);
            OLAPXML.Node("ContactMiddleName", null);
            ContactInfoGroup["dContact.04"] = null;
            ContactInfoGroup["ContactMiddleName"] = null;
        }
        else {
            V3XML.Node("dContact.04", _val[0]);
            OLAPXML.Node("ContactMiddleName", _val[0]);
            ContactInfoGroup["dContact.04"] = v3NOT_REPORTING;
            ContactInfoGroup["ContactMiddleName"] = _val[0];
            _v2Array.push({ section: "D02", element: "D02_02", val: _val[0] });
        };

        // dContact.05/////////////
        _val = getValue(elementList, "dContact.05");
        if (_val == null) {
            if (isRequiredStateElement("dContact.05") == - true) {
                _v2Array.push({ section: "D02", element: "D02_04", val: v2NOT_RECORDED });
                V3XML.BeginNode("dContact.05")
                V3XML.Attrib("dContact.05", NIL_V3NOT_RECORDED);
                OLAPXML.Node("ContactAddress", "NOT RECORDED");
                ContactInfoGroup["ContactAddress"] = v3NOT_RECORDED;
                ContactInfoGroup["dContact.05"] = v3NOT_RECORDED;
                V3XML.EndNode();
            }
            else {
                _v2Array.push({ section: "D02", element: "D02_04", val: v2NOT_REPORTING });
                V3XML.BeginNode("dContact.05")
                V3XML.Attrib("dContact.05", NIL_V3NOT_REPORTING);
                OLAPXML.Node("ContactAddress", "NOT REPORTING");
                ContactInfoGroup["ContactAddress"] = v3NOT_REPORTING;
                ContactInfoGroup["dContact.05"] = v3NOT_REPORTING;
                V3XML.EndNode();
            }
        }
        else {
            V3XML.Node("dContact.05", _val[0]);
            OLAPXML.Node("ContactAddress", _val[0]);
            ContactInfoGroup["dContact.05"] = _val[0];
            ContactInfoGroup["ContactAddress"] = _val[0];
            _v2Array.push({ section: "D02", element: "D02_04", val: _val[0] });
        };

        // dContact.06/////////////
        _val = getValue(elementList, "dContact.06");
        if (_val == null) {
            if (isRequiredStateElement("dContact.06") == - true) {
                _v2Array.push({ section: "D02", element: "D02_05", val: v2NOT_RECORDED });
                V3XML.BeginNode("dContact.06")
                V3XML.Attrib("dContact.06", NIL_V3NOT_RECORDED);
                OLAPXML.Node("ContactCity", "NOT RECORDED");
                ContactInfoGroup["ContactCity"] = v3NOT_RECORDED;
                ContactInfoGroup["dContact.06"] = v3NOT_RECORDED;
                V3XML.EndNode();
            }
            else {
                _v2Array.push({ section: "D02", element: "D02_05", val: v2NOT_REPORTING });
                V3XML.BeginNode("dContact.06")
                V3XML.Attrib("dContact.06", NIL_V3NOT_REPORTING);
                OLAPXML.Node("ContactCity", "NOT REPORTING");
                ContactInfoGroup["ContactCity"] = v3NOT_REPORTING;
                ContactInfoGroup["dContact.06"] = v3NOT_REPORTING;
                V3XML.EndNode();
            }
        }
        else {
            V3XML.Node("dContact.06", _val[0]);
            OLAPXML.Node("ContactCity", _val[0]);
            ContactInfoGroup["dContact.06"] = _val[0];
            ContactInfoGroup["ContactCity"] = _val[0];
            _v2Array.push({ section: "D02", element: "D02_05", val: _val[0] });
        };

        // dContact.07/////////////
        _val = getValue(elementList, "dContact.07");
        if (_val == null) {
            if (isRequiredStateElement("dContact.07") == - true) {
                _v2Array.push({ section: "D02", element: "D02_06", val: v2NOT_RECORDED });
                V3XML.BeginNode("dContact.07")
                V3XML.Attrib("dContact.07", NIL_V3NOT_RECORDED);
                OLAPXML.Node("ContactState", "NOT RECORDED");
                ContactInfoGroup["ContactState"] = v3NOT_RECORDED;
                ContactInfoGroup["dContact.07"] = v3NOT_RECORDED;
                V3XML.EndNode();
            }
            else {
                _v2Array.push({ section: "D02", element: "D02_06", val: v2NOT_REPORTING });
                V3XML.BeginNode("dContact.07")
                V3XML.Attrib("dContact.07", NIL_V3NOT_REPORTING);
                OLAPXML.Node("ContactState", "NOT REPORTING");
                ContactInfoGroup["ContactState"] = v3NOT_REPORTING;
                ContactInfoGroup["dContact.07"] = v3NOT_REPORTING;
                V3XML.EndNode();
            }
        }
        else {
            V3XML.Node("dContact.07", _val[0]);
            OLAPXML.Node("ContactState", _val[0]);
            ContactInfoGroup["dContact.07"] = _val[0];
            ContactInfoGroup["ContactState"] = _val[0];
            _v2Array.push({ section: "D02", element: "D02_06", val: _val[0] });
        };

        // dContact.08/////////////
        _val = getValue(elementList, "dContact.08");
        if (_val == null) {
            if (isRequiredStateElement("dContact.08") == - true) {
                _v2Array.push({ section: "D02", element: "D02_07", val: v2NOT_RECORDED });
                V3XML.BeginNode("dContact.08")
                V3XML.Attrib("dContact.08", NIL_V3NOT_RECORDED);
                OLAPXML.Node("ContactZip", "NOT RECORDED");
                ContactInfoGroup["ContactZip"] = v3NOT_RECORDED;
                ContactInfoGroup["dContact.08"] = v3NOT_RECORDED;
                V3XML.EndNode();
            }
            else {
                _v2Array.push({ section: "D02", element: "D02_07", val: v2NOT_REPORTING });
                V3XML.BeginNode("dContact.08")
                V3XML.Attrib("dContact.08", NIL_V3NOT_REPORTING);
                OLAPXML.Node("ContactZip", "NOT REPORTING");
                ContactInfoGroup["ContactZip"] = v3NOT_REPORTING;
                ContactInfoGroup["dContact.08"] = v3NOT_REPORTING;
                V3XML.EndNode();
            }
        }
        else {
            V3XML.Node("dContact.08", _val[0]);
            OLAPXML.Node("ContactZip", _val[0]);
            ContactInfoGroup["dContact.08"] = _val[0];
            ContactInfoGroup["ContactZip"] = _val[0];
            _v2Array.push({ section: "D02", element: "D02_07", val: _val[0] });
        };

        // dContact.09/////////////
        _val = getValue(elementList, "dContact.09");
        if (_val == null) {
            V3XML.Node("dContact.08", null);
            OLAPXML.Node("ContactCounty", null);
            ContactInfoGroup["dContact.08"] = null;
            ContactInfoGroup["ContactCounty"] = null;
        }
        else {
            V3XML.Node("dContact.09", _val[0]);
            OLAPXML.Node("ContactCounty", _val[0]);
            ContactInfoGroup["dContact.09"] = _val[0];
            ContactInfoGroup["ContactCounty"] = _val[0];
        };


        // dContact.10/////////////
        _val = getValue(elementList, "dContact.10");
        if (_val == null) {
            if (isRequiredStateElement("dContact.10") == - true) {
                V3XML.BeginNode("dContact.10")
                ContactInfoGroup["dContact.10"] = v3NOT_RECORDED;
                ContactInfoGroup["ContactPhoneNumber"] = v3NOT_RECORDED;
                V3XML.Attrib("dContact.10", NIL_V3NOT_RECORDED);
                OLAPXML.Node("ContactPhoneNumber", "NOT RECORDED");
                V3XML.EndNode();
            }
            else {
                V3XML.BeginNode("dContact.10")
                ContactInfoGroup["dContact.10"] = v3NOT_REPORTING;
                ContactInfoGroup["ContactPhoneNumber"] = v3NOT_REPORTING;
                V3XML.Attrib("dContact.10", NIL_V3NOT_REPORTING);
                OLAPXML.Node("ContactPhoneNumber", "NOT REPORTED");
                V3XML.EndNode();
            }
        }
        else {
            arr1 = [];
            for (var i = 0; i < _val.length; i++) {
                var PhoneNumberType = setPhoneNumberType("dContact.10", _val[i]);

                if (PhoneNumberType == "9913001") {
                    V3XML.BeginNode("dContact.10")
                    V3XML.AttribNoEQ(FAX, _val[i])

                    OLAPXML.BeginNode("ContactPhoneNumber")
                    OLAPXML.AttribNoEQ(FAX, _val[i])
                    OLAPXML.EndNode();

                    arr1.push("FAX  " + _val[i]);
                }
                else if (PhoneNumberType == "9913003") {
                    V3XML.BeginNode("dContact.10")
                    V3XML.AttribNoEQ(HOME, _val[i])
                    //V3XML.EndNode();

                    OLAPXML.BeginNode("ContactPhoneNumber")
                    OLAPXML.AttribNoEQ(HOME, _val[i])
                    OLAPXML.EndNode();

                    arr1.push("HOME  " + _val[i]);
                }
                else if (PhoneNumberType == "9913005") {
                    V3XML.BeginNode("dContact.10")
                    V3XML.AttribNoEQ(MOBILE, _val[i])
                    //V3XML.EndNode();

                    OLAPXML.BeginNode("ContactPhoneNumber")
                    OLAPXML.AttribNoEQ(MOBILE, _val[i])
                    OLAPXML.EndNode();

                    arr1.push("MOBILE  " + _val[i]);
                }
                else if (PhoneNumberType == "9913007") {
                    V3XML.BeginNode("dContact.10")
                    V3XML.AttribNoEQ(PAGER, _val[i])
                    //V3XML.EndNode();

                    OLAPXML.BeginNode("ContactPhoneNumber")
                    OLAPXML.AttribNoEQ(PAGER, _val[i])
                    //OLAPXML.EndNode();

                }
                else if (PhoneNumberType == "9913009") {
                    V3XML.BeginNode("dContact.10")
                    V3XML.AttribNoEQ(WORKPHONE, _val[i])
                    // V3XML.EndNode();

                    OLAPXML.BeginNode("ContactPhoneNumber")
                    OLAPXML.AttribNoEQ(WORKPHONE, _val[i])
                    //   OLAPXML.EndNode();

                    arr1.push("WORK  " + _val[i]);
                }
                else {
                    console.log(_val[i])
                    _v2Array.push({ section: "D02", element: "D02_08", val: _val[i] });
                    V3XML.Node("dContact.10")
                    V3XML.AttribNoEQ(WORKPHONE, _val[i])
                    //V3XML.EndNode();

                    OLAPXML.BeginNode("ContactPhoneNumber")
                    OLAPXML.AttribNoEQ(WORKPHONE, _val[i])
                    //OLAPXML.EndNode();
                }
                //V3XML.EndNode()
            };

            ContactInfoGroup["dContact.10"] = arr1.slice(0);
            ContactInfoGroup["ContactPhoneNumber"] = arr1.slice(0);
            _v2Array.push({ section: "D02", element: "D02_08", val: _val[0] });
        };

        // dContact.11/////////////
        _val = getValue(elementList, "dContact.11");
        if (_val == null) {
            if (isRequiredStateElement("dContact.11") == - true) {
                V3XML.BeginNode("dContact.11")
                ContactInfoGroup["dContact.11"] = v3NOT_RECORDED;
                ContactInfoGroup["ContactEmail"] = v3NOT_RECORDED;
                V3XML.Attrib("dContact.11", NIL_V3NOT_RECORDED);
                OLAPXML.Node("ContactEmail", "NOT RECORDED");
                V3XML.EndNode();

            }
            else {

                V3XML.BeginNode("dContact.11")
                ContactInfoGroup["dContact.11"] = v3NOT_REPORTING;
                ContactInfoGroup["ContactEmail"] = v3NOT_REPORTING;
                V3XML.Attrib("dContact.11", NIL_V3NOT_REPORTING);
                OLAPXML.Node("ContactEmail", "NOT REPORTED");
                V3XML.EndNode();
            }
        }
        else {
            arr1 = [];
            for (var i = 0; i < _val.length; i++) {
                var eMailType = seteMailType("dContact.11", _val[i]);

                if (eMailType == "9904001") {
                    V3XML.BeginNode("dContact.11")
                    V3XML.AttribNoEQ(PERSONALEMAIL, _val[i])
                    V3XML.EndNode();

                    OLAPXML.BeginNode("ContactEmail")
                    OLAPXML.AttribNoEQ(PERSONALEMAIL, _val[i])
                    OLAPXML.EndNode();

                    arr1.push("FAX  " + _val[i]);
                }
                else if (PhoneNumberType == "9904001") {
                    V3XML.BeginNode("dContact.11")
                    V3XML.AttribNoEQ(WORKEMAIL, _val[i])
                    V3XML.EndNode();

                    OLAPXML.BeginNode("ContactEmail")
                    OLAPXML.AttribNoEQ(WORKEMAIL, _val[i])
                    OLAPXML.EndNode();

                    arr1.push("HOME  " + _val[i]);
                }
            };
            ContactInfoGroup["dContact.11"] = arr1.slice(0);
            ContactInfoGroup["ContactEmail"] = arr1.slice(0);
            _v2Array.push({ section: "D02", element: "D02_10", val: _val[0] });
        };



        // dContact.12/////////////
        _val = getValue(elementList, "dContact.12");
        if (_val == null) {
            if (isRequiredStateElement("dContact.12") == - true)
            {
                _v2Array.push({ section: "D02", element: "D02_11", val: v2NOT_RECORDED });
                V3XML.BeginNode("dContact.12")
                V3XML.Attrib("dContact.12", NIL_V3NOT_RECORDED);
                OLAPXML.Node("AgencyContactWebAddress", "NOT RECORDED");
                ContactInfoGroup["AgencyContactWebAddress"] = v3NOT_RECORDED;
                ContactInfoGroup["dContact.12"] = v3NOT_RECORDED;
            }
            else {
                _v2Array.push({ section: "D02", element: "D02_11", val: v2NOT_REPORTING });
                V3XML.BeginNode("dContact.12")
                V3XML.Attrib("dContact.12", NIL_V3NOT_REPORTING);
                OLAPXML.Node("AgencyContactWebAddress", "NOT REPORTING");
                ContactInfoGroup["AgencyContactWebAddress"] = v3NOT_REPORTING;
                ContactInfoGroup["dContact.12"] = v3NOT_REPORTING;
            }
            V3XML.EndNode();
        }
        else {
            V3XML.Node("dContact.12", _val[0]);
            OLAPXML.Node("AgencyContactWebAddress", _val[0]);
            ContactInfoGroup["dContact.12"] = _val[0];
            ContactInfoGroup["AgencyContactWebAddress"] = _val[0];
            _v2Array.push({ section: "D02", element: "D02_11", val: _val[0] });
        };

        //////////////////////////////

        V3XML.BeginNode("dContact.EMSMedicalDirectorGroup")
        OLAPXML.BeginNode("dContact.EMSMedicalDirectorGroup")


        // dContact.13/////////////
        _val = getValue(elementList, "dContact.13");
        if (_val == null) {
            if (isRequiredStateElement("dContact.13") == - true) {
                V3XML.BeginNode("dContact.13")
                V3XML.Attrib("dContact.13", NIL_V3NOT_RECORDED);
                OLAPXML.Node("MedicalDirectorDegree", "NOT RECORDED");
                ContactInfoGroup["MedicalDirectorDegree"] = v3NOT_RECORDED;
                ContactInfoGroup["dContact.13"] = v3NOT_RECORDED;
            }
            else {
                V3XML.BeginNode("dContact.13")
                V3XML.Attrib("dContact.13", NIL_V3NOT_REPORTING);
                OLAPXML.Node("MedicalDirectorDegree", "NOT REPORTING");
                ContactInfoGroup["MedicalDirectorDegree"] = v3NOT_REPORTING;
                ContactInfoGroup["dContact.13"] = v3NOT_REPORTING;
            }
            V3XML.EndNode();
        }
        else {
            V3XML.Node("dContact.13", _val[0]);
            OLAPXML.Node("MedicalDirectorDegree", _val[0]);
            ContactInfoGroup["dContact.13"] = _val[0];
            ContactInfoGroup["MedicalDirectorDegree"] = _val[0];
        };
        // dContact.14/////////////
        _val = getValue(elementList, "dContact.14");
        if (_val == null) {
            if (isRequiredStateElement("dContact.14") == - true) {
                V3XML.BeginNode("dContact.14")
                V3XML.Attrib("dContact.14", NIL_V3NOT_RECORDED);
                OLAPXML.Node("MedicalDirectorBoardCertificationType", "NOT RECORDED");
                ContactInfoGroup["MedicalDirectorBoardCertificationType"] = v3NOT_RECORDED;
                ContactInfoGroup["dContact.14"] = v3NOT_RECORDED;
            }
            else {
                V3XML.BeginNode("dContact.14")
                V3XML.Attrib("dContact.14", NIL_V3NOT_REPORTING);
                OLAPXML.Node("MedicalDirectorBoardCertificationType", "NOT REPORTING");
                ContactInfoGroup["MedicalDirectorBoardCertificationType"] = v3NOT_REPORTING;
                ContactInfoGroup["dContact.14"] = v3NOT_REPORTING;
            }
            V3XML.EndNode();
        }
        else {
            var arr = [];
            var arr3 = [];
            for (var i = 0; i < _val.length; i++) {
                arr3.push(setCodeText("dContact.15", _val[i]));
                arr.push(_val[i]);
                V3XML.Node("dContact.14", _val[i]);
                OLAPXML.Node("MedicalDirectorBoardCertificationType", setCodeText("dContact.15", _val[i]));
            };
            ContactInfoGroup["dContact.13"] = arr.slice(0);
            ContactInfoGroup["MedicalDirectorBoardCertificationType"] = arr3.slice(0);
        };

        // dContact.15/////////////
        _val = getValue(elementList, "dContact.15");
        if (_val == null) {
            V3XML.Node("dContact.15", null);
            OLAPXML.Node("MedicalDirectorCompensation", null);
            ContactInfoGroup["dContact.15"] = null;
            ContactInfoGroup["MedicalDirectorCompensation"] = null;
        }
        else {
            V3XML.Node("dContact.16", _val[0]);
            OLAPXML.Node("MedicalDirectorCompensation", setCodeText("dContact.15", _val[0]));
            ContactInfoGroup["dContact.15"] = _val[0];
            ContactInfoGroup["MedicalDirectorCompensation"] = _val[0];
        };

        // dContact.16/////////////
        _val = getValue(elementList, "dContact.16");
        if (_val == null) {
            V3XML.Node("dContact.16", null);
            OLAPXML.Node("MedicalDirectorFellowshipTrainedStatus", null);
            ContactInfoGroup["dContact.16"] = null;
            ContactInfoGroup["MedicalDirectorFellowshipTrainedStatus"] = null;
        }
        else {
            V3XML.Node("dContact.16", null);
            OLAPXML.Node("MedicalDirectorFellowshipTrainedStatus", null);
            ContactInfoGroup["dContact.16"] = _val[0];
            ContactInfoGroup["MedicalDirectorFellowshipTrainedStatus"] = _val[0];
        };


        V3XML.EndNode();
        OLAPXML.EndNode();

        V3XML.EndNode();
        OLAPXML.EndNode();
    }; // loop term
    console.log("here")
    V3XML.EndNode();
    OLAPXML.EndNode();
    V3XML.EndNode();
    OLAPXML.EndNode();


    console.log(V3XML.ToString())
    dContact.ContactInfoGroup = ContactInfoGroup;
    return dContact;

};    //end of function

var setdDevice = function (deviceObject) {
    var DeviceGroup = new Object();
    var dDevice = new Object();

    V3XML.BeginNode("dDevice");
    OLAPXML.BeginNode("dDevice");

    //    console.log(businessObject.sections.length);
    for (var xx = 0; xx < deviceObject.attributes.sections.length; xx++) {
        V3XML.BeginNode("dDevice.DeviceGroup");
        OLAPXML.BeginNode("dDevice.DeviceGroup");

        var elementList = deviceObject.attributes.sections[xx].attributes.elements;

        ///dDevice.01 
        _val = getValue(elementList, "dDevice.01");
        if (_val == null) {
            V3XML.Node("dDevice.01", null);
            OLAPXML.Node("DeviceSerialNumber", null);
            DeviceGroup["dDevice.01"] = null;
            DeviceGroup["DeviceSerialNumber"] = null;
        }
        else {
            V3XML.Node("dDevice.01", _val[0]);
            OLAPXML.Node("DeviceSerialNumber", _val[0]);
            DeviceGroup["dDevice.01"] = _val[0];
            DeviceGroup["DeviceSerialNumber"] = _val[0];
        };


        ///dDevice.02 
        _val = getValue(elementList, "dDevice.02");
        if (_val == null) {
            V3XML.Node("dDevice.02", null);
            OLAPXML.Node("DeviceNameorID", null);
            DeviceGroup["dDevice.02"] = null;
            DeviceGroup["DeviceNameorID"] = null;
        }
        else {
            V3XML.Node("dDevice.02", _val[0]);
            OLAPXML.Node("DeviceNameorID", _val[0]);
            DeviceGroup["dDevice.02"] = _val[0];
            DeviceGroup["DeviceNameorID"] = _val[0];
        };

        ///dDevice.03
        _val = getValue(elementList, "dDevice.03");
        if (_val == null) {
            V3XML.Node("dDevice.03", null);
            OLAPXML.Node("DeviceType", null);
            DeviceGroup["dDevice.02"] = null;
            DeviceGroup["DeviceType"] = null;
        }
        else {
            var arr = [];
            var arr3 = [];
            for (var t = 0; t < _val.length; t++) {
                arr3.push(setCodeText("dDevice.03", _val[t]));
                V3XML.Node("dDevice.03", _val[t]);
                OLAPXML.Node("DeviceType", _val[t]);
            }
            DeviceGroup["dDevice.03"] = arr.slice(0);
            DeviceGroup["DeviceType"] = arr3.slice(0);
        };

        ///dDevice.04
        _val = getValue(elementList, "dDevice.04");
        if (_val == null) {
            V3XML.Node("dDevice.04", null);
            OLAPXML.Node("DeviceManufacturer", null);
            DeviceGroup["dDevice.04"] = null;
            DeviceGroup["DeviceManufacturer"] = null;
            _v2Array.push({ section: "D09", element: "D09_03", val: null });
        }
        else {
            V3XML.Node("dDevice.04", _val[0]);
            OLAPXML.Node("DeviceManufacturer", _val[0]);
            DeviceGroup["dDevice.04"] = _val[0];
            DeviceGroup["DeviceManufacturer"] = _val[0];
            _v2Array.push({ section: "D09", element: "D09_03", val: _val[0] });
        };

        ///dDevice.05
        _val = getValue(elementList, "dDevice.05");
        if (_val == null) {
            V3XML.Node("dDevice.05", null);
            OLAPXML.Node("DeviceModelNumber", null);
            DeviceGroup["dDevice.05"] = null;
            DeviceGroup["DeviceModelNumber"] = null;
            _v2Array.push({ section: "D09", element: "D09_04", val: null });

        }
        else {
            V3XML.Node("dDevice.05", _val[0]);
            OLAPXML.Node("DeviceModelNumber", _val[0]);
            DeviceGroup["dDevice.05"] = _val[0];
            DeviceGroup["DeviceModelNumber"] = _val[0];
            _v2Array.push({ section: "D09", element: "D09_04", val: _val[0] });
        };

        ///dDevice.06
        _val = getValue(elementList, "dDevice.06");
        if (_val == null) {
            V3XML.Node("dDevice.06", null);
            OLAPXML.Node("DevicePurchaseDate", null);
            DeviceGroup["dDevice.06"] = null;
            DeviceGroup["DevicePurchaseDate"] = null;
            _v2Array.push({ section: "D09", element: "D09_05", val: null });
        }
        else {
            V3XML.Node("dDevice.06", _val[0]);
            OLAPXML.Node("DevicePurchaseDate", _val[0]);
            DeviceGroup["dDevice.06"] = _val[0];
            DeviceGroup["DevicePurchaseDate"] = _val[0];
            _v2Array.push({ section: "D09", element: "D09_05", val: _val[0] });
        };
        V3XML.EndNode();
        OLAPXML.EndNode();

    }; // loop term


    V3XML.EndNode();
    console.log(V3XML.ToString());
};

var setdFacility = function (facilityObject) {
    var _retArray = [];
    var _v2Array = [];
    var dFacilityGroup = new Object()
    var FacilityGroup = new Object()
    var dFacility = new Object()

    V3XML.BeginNode("dFacility");
    OLAPXML.BeginNode("dFacility");
    //  console.log(businessObject.sections.length);

    for (var a = 0; a < facilityObject.attributes.sections.length; a++) {

        V3XML.BeginNode("dFacilityGroup");
        OLAPXML.BeginNode("dFacilityGroup");

        // console.log(businessObject.sections[a].attributes.name);
        var _elementList = facilityObject.attributes.sections[a].attributes.sections[0].attributes.elements;

        //dFacility.01/////////
        _val = getValue(_elementList, "dFacility.01");
        if (_val == null) {
            dFacilityGroup["dFacility.01"] = null;
            V3XML.Node("dFacility.01", null);
            OLAPXML.Node("FacilityType", null);
            dFacilityGroup["FacilityType"] = null;
            _v2Array.push({ section: "D04", element: "D04_15", val: null });
        }
        else {
            V3XML.Node("dFacility.01", _val[0]);
            OLAPXML.Node("FacilityType", setCodeText("dFacility.01", _val[0]));
            dFacilityGroup["FacilityType"] = setCodeText("dFacility.01", _val[0]);
            dFacilityGroup["dFacility.01"] = _val[0];
            _v2Array.push({ section: "D04", element: "D04_15", val: setD2("dFacility.01", _val[0]) });

        };

        //Verify Section and set dFacilityGroup        
        if (businessObject.sections[a].attributes.sections != undefined) {
            _sectionIndex = getSectionIndex(businessObject.sections[a].attributes.sections, "dFacility.FacilityGroup");

            for (var b = 0; b < _sectionIndex.length; b++) {
                //    console.log(businessObject.sections[a].attributes.sections[_sectionIndex[b]].attributes.elements)
                var _groupObject = businessObject.sections[a].attributes.sections[b].attributes.elements;
                V3XML.BeginNode("dFacility.FacilityGroup");
                OLAPXML.BeginNode("dFacility.FacilityGroup");



                //dFacility.02/////////
                _val = getValue(_groupObject, "dFacility.02");
                if (_val == null) {
                    dFacilityGroup["dFacility.02"] = null;
                    V3XML.Node("dFacility.02", null);
                    OLAPXML.Node("FacilityName", null);
                    dFacilityGroup["FacilityName"] = null;
                    _v2Array.push({ section: "D04", element: "D04_11", val: null });
                }
                else {
                    FacilityGroup["dFacility.02"] = _val[0];
                    V3XML.Node("dFacility.02", _val[0]);
                    OLAPXML.Node("FacilityName", _val[0]);
                    dFacilityGroup["FacilityName"] = _val[0];
                    _v2Array.push({ section: "D04", element: "D04_11", val: _val[0] });
                };

                //dFacility.03/////////
                _val = getValue(_groupObject, "dFacility.03");
                if (_val == null) {
                    dFacilityGroup["dFacility.03"] = null;
                    V3XML.Node("dFacility.03", null);
                    OLAPXML.Node("LocationCode", null);
                    dFacilityGroup["LocationCode"] = null;
                    _v2Array.push({ section: "D04", element: "D04_12", val: null });
                }
                else {
                    dFacilityGroup["dFacility.03"] = _val[0];
                    V3XML.Node("dFacility.03", _val[0]);
                    OLAPXML.Node("LocationCode", _val[0]);
                    dFacilityGroup["LocationCode"] = _val[0];
                    _v2Array.push({ section: "D04", element: "D04_12", val: _val[0] });

                };

                //dFacility.04/////////
                _val = getValue(_groupObject, "dFacility.04");
                if (_val == null) {
                    dFacilityGroup["dFacility.04"] = null;
                    V3XML.Node("dFacility.04", null);
                    OLAPXML.Node("HospitalDesignations", null);
                    dFacilityGroup["HospitalDesignations"] = null;

                }
                else {
                    var arr = [];
                    var arr2 = [];
                    for (var t = 0; t < _val.length; t++) {
                        arr.push(_val[t]);
                        arr2.push(setCodeText("dFacility.04", _val[t]));
                        V3XML.Node("dFacility.04", _val[t]);
                        OLAPXML.Node("HospitalDesignations", setCodeText("dFacility.04", _val[t]));
                    }
                    FacilityGroup["dFacility.04"] = arr.slice(0);
                    FacilityGroup["HospitalDesignations"] = arr2.slice(0);
                };

                //dFacility.05/////////
                _val = getValue(_groupObject, "dFacility.05");
                if (_val == null) {
                    dFacilityGroup["dFacility.05"] = null;
                    V3XML.Node("dFacility.05", null);
                    OLAPXML.Node("NationalProviderIdentifier", null);
                    dFacilityGroup["NationalProviderIdentifier"] = null;
                }
                else {
                    dFacilityGroup["dFacility.05"] = _val[0];
                    V3XML.Node("dFacility.05", _val[0]);
                    OLAPXML.Node("NationalProviderIdentifier", _val[0]);
                    dFacilityGroup["NationalProviderIdentifier"] = _val[0];
                };


                //dFacility.06/////////
                _val = getValue(_groupObject, "dFacility.06");
                if (_val == null) {
                    dFacilityGroup["dFacility.06"] = null;
                    V3XML.Node("dFacility.06", null);
                    OLAPXML.Node("Room", null);
                    dFacilityGroup["Room"] = null;
                }
                else {
                    dFacilityGroup["dFacility.06"] = _val[0];
                    V3XML.Node("dFacility.06", _val[0]);
                    OLAPXML.Node("Room", _val[0]);
                    dFacilityGroup["Room"] = _val[0];
                };

                //dFacility.07/////////
                _val = getValue(_groupObject, "dFacility.07");
                if (_val == null) {
                    dFacilityGroup["dFacility.07"] = null;
                    V3XML.Node("dFacility.07", null);
                    OLAPXML.Node("StreetAddress", null);
                    dFacilityGroup["StreetAddress"] = null;

                }
                else {
                    dFacilityGroup["dFacility.07"] = _val[0];
                    V3XML.Node("dFacility.07", _val[0]);
                    OLAPXML.Node("StreetAddress", _val[0]);
                    dFacilityGroup["StreetAddress"] = _val[0];

                };

                //dFacility.08/////////
                _val = getValue(_groupObject, "dFacility.08");
                if (_val == null) {
                    dFacilityGroup["dFacility.08"] = null;
                    V3XML.Node("dFacility.08", null);
                    OLAPXML.Node("City", null);
                    dFacilityGroup["City"] = null;
                }
                else {
                    dFacilityGroup["dFacility.08"] = _val[0];
                    V3XML.Node("dFacility.08", _val[0]);
                    OLAPXML.Node("City", _val[0]);
                    dFacilityGroup["City"] = _val[0];
                };

                //dFacility.09/////////
                _val = getValue(_groupObject, "dFacility.09");
                if (_val == null) {
                    dFacilityGroup["dFacility.09"] = null;
                    V3XML.Node("dFacility.09", null);
                    OLAPXML.Node("State", null);
                    dFacilityGroup["State"] = null;
                }
                else {
                    dFacilityGroup["dFacility.09"] = _val[0];
                    V3XML.Node("dFacility.09", _val[0]);
                    OLAPXML.Node("State", _val[0]);
                    dFacilityGroup["State"] = _val[0];
                };

                //dFacility.10/////////
                _val = getValue(_groupObject, "dFacility.10");
                if (_val == null) {
                    dFacilityGroup["dFacility.10"] = null;
                    V3XML.Node("dFacility.10", null);
                    OLAPXML.Node("Zip", null);
                    dFacilityGroup["Zip"] = null;
                }
                else {
                    dFacilityGroup["dFacility.10"] = _val[0];
                    V3XML.Node("dFacility.10", _val[0]);
                    OLAPXML.Node("Zip", _val[0]);
                    dFacilityGroup["Zip"] = _val[0];
                };

                //dFacility.11/////////
                _val = getValue(_groupObject, "dFacility.11");
                if (_val == null) {
                    dFacilityGroup["dFacility.11"] = null;
                    V3XML.Node("dFacility.11", null);
                    OLAPXML.Node("County", null);
                    dFacilityGroup["County"] = null;
                }
                else {
                    dFacilityGroup["dFacility.11"] = _val[0];
                    V3XML.Node("dFacility.11", _val[0]);
                    OLAPXML.Node("County", _val[0]);
                    dFacilityGroup["County"] = _val[0];
                };

                //dFacility.12/////////
                _val = getValue(_groupObject, "dFacility.12");
                if (_val == null) {
                    dFacilityGroup["dFacility.12"] = null;
                    V3XML.Node("dFacility.12", null);
                    OLAPXML.Node("Country", null);
                    dFacilityGroup["Country"] = null;
                }
                else {
                    dFacilityGroup["dFacility.12"] = _val[0];
                    V3XML.Node("dFacility.12", _val[0]);
                    OLAPXML.Node("Country", setCodeText("dFacility.12", _val[0]));
                    dFacilityGroup["Country"] = setCodeText("dFacility.12", _val[0]);
                };

                _val = getValue(_groupObject, "dFacility.13");
                if (_val == null) {
                    dFacilityGroup["dFacility.13"] = null;
                    V3XML.Node("dFacility.13", null);
                    OLAPXML.Node("GPS", null);
                    dFacilityGroup["GPS"] = null;
                }
                else {
                    dFacilityGroup["dFacility.13"] = _val[0];
                    V3XML.Node("dFacility.13", _val[0]);
                    OLAPXML.Node("GPS", _val[0]);
                    dFacilityGroup["GPS"] = _val[0];
                };

                _val = getValue(_groupObject, "dFacility.14");
                if (_val == null) {
                    dFacilityGroup["dFacility.14"] = null;
                    V3XML.Node("dFacility.14", null);
                    OLAPXML.Node("NationalGridLocation", null);
                    dFacilityGroup["NationalGridLocation"] = null;
                }
                else {
                    dFacilityGroup["dFacility.14"] = _val[0];
                    V3XML.Node("dFacility.14", _val[0]);
                    OLAPXML.Node("NationalGridLocation", _val[0]);
                    dFacilityGroup["NationalGridLocation"] = _val[0];
                };
                V3XML.EndNode();
                OLAPXML.EndNode();
            }
        }
    };

    V3XML.EndNode();
    OLAPXML.EndNode();


    dFacilityGroup.FacilityGroup = FacilityGroup;
    dFacility.dFacilityGroup = dFacilityGroup


};
var setdLocation = function (businessObject) {
    console.log(businessObject.name)
    if (businessObject.name != "dLocation") {
        return null
    };
    V3XML.BeginNode("dFacility");
    OLAPXML.BeginNode("dFacility");
    _sectionIndex = getSectionIndex(businessObject, "dLocation.LocationGroup");

    console.log(_sectionIndex)

    for (var xx = 0; xx < _sectionIndex.length; xx++) {
        var elementList = businessObject.sections[xx].attributes.elements;
        V3XML.BeginNode("dLocation.LocationGroup");
        OLAPXML.BeginNode("dLocation.LocationGroup");


        // console.log(elementList)

        //dLocation.01/////////
        _val = getdLocationValue(elementList, "dLocation.01");
        if (_val == null) {
            LocationGroup["dLocation.01"] = null;
            V3XML.Node("dLocation.01", null);
            OLAPXML.Node("LocationType", null);
            LocationGroup["LocationType"] = null;
        }
        else {
            LocationGroup["dLocation.01"] = _val[0];
            V3XML.Node("dLocation.01", _val[0]);
            OLAPXML.Node("LocationType", setCodeText("dLocation.01", _val[0]));
            LocationGroup["LocationType"] = setCodeText("dLocation.01", _val[0]);
        };

        //dLocation.02/////////
        _val = getdLocationValue(elementList, "dLocation.02");
        if (_val == null) {
            LocationGroup["dLocation.02"] = null;
            V3XML.Node("dLocation.02", null);
            OLAPXML.Node("LocationName", null);
            LocationGroup["LocationName"] = null;
        }
        else {
            LocationGroup["dLocation.02"] = _val[0];
            V3XML.Node("dLocation.02", _val[0]);
            OLAPXML.Node("LocationName", _val[0]);
            LocationGroup["LocationName"] = _val[0];
        };

        //dLocation.03/////////
        _val = getdLocationValue(elementList, "dLocation.03");
        if (_val == null) {
            LocationGroup["dLocation.03"] = null;
            V3XML.Node("dLocation.03", null);
            OLAPXML.Node("LocationNumber", null);
            LocationGroup["LocationNumber"] = null;
            _v2Array.push({ section: "D05", element: "D05_02", val: null });
        }
        else {
            LocationGroup["dLocation.03"] = _val[0];
            V3XML.Node("dLocation.03", _val[0]);
            OLAPXML.Node("LocationNumber", _val[0]);
            LocationGroup["LocationNumber"] = _val[0];
            _v2Array.push({ section: "D05", element: "D05_02", val: _val[0] });
        };

        //dLocation.04/////////
        _val = getdLocationValue(elementList, "dLocation.04");
        if (_val == null) {
            LocationGroup["dLocation.04"] = null;
            V3XML.Node("dLocation.04", null);
            OLAPXML.Node("GPS", null);
            LocationGroup["GPS"] = null;
            _v2Array.push({ section: "D05", element: "D05_04", val: null });
        }
        else {
            LocationGroup["dLocation.04"] = _val[0];
            V3XML.Node("dLocation.04", _val[0]);
            OLAPXML.Node("GPS", _val[0]);
            LocationGroup["GPS"] = _val[0];
            _v2Array.push({ section: "D05", element: "D05_04", val: _val[0] });
        };

        //dLocation.05/////////
        _val = getdLocationValue(elementList, "dLocation.05");
        if (_val == null) {
            LocationGroup["dLocation.05"] = null;
            V3XML.Node("dLocation.05", null);
            OLAPXML.Node("NationalGridCoordinates", null);
            LocationGroup["NationalGridCoordinates"] = null;
        }
        else {
            LocationGroup["dLocation.05"] = _val[0];
            V3XML.Node("dLocation.05", _val[0]);
            OLAPXML.Node("NationalGridCoordinates", _val[0]);
            LocationGroup["NationalGridCoordinates"] = _val[0];
        };

        //dLocation.06/////////
        _val = getdLocationValue(elementList, "dLocation.06");
        if (_val == null) {
            LocationGroup["dLocation.06"] = null;
            V3XML.Node("dLocation.06", null);
            OLAPXML.Node("Address", null);
            LocationGroup["Address"] = null;
            _v2Array.push({ section: "D05", element: "D05_05", val: null });
        }
        else {
            LocationGroup["dLocation.06"] = _val[0];
            V3XML.Node("dLocation.06", _val[0]);
            OLAPXML.Node("Address", _val[0]);
            LocationGroup["Address"] = _val[0];
            _v2Array.push({ section: "D05", element: "D05_05", val: _val[0] });
        };

        //dLocation.07/////////
        _val = getdLocationValue(elementList, "dLocation.07");
        if (_val == null) {
            LocationGroup["dLocation.07"] = null;
            V3XML.Node("dLocation.07", null);
            OLAPXML.Node("City", null);
            LocationGroup["City"] = null;
            _v2Array.push({ section: "D05", element: "D05_06", val: null });
        }
        else {
            LocationGroup["dLocation.07"] = _val[0];
            V3XML.Node("dLocation.07", _val[0]);
            OLAPXML.Node("City", _val[0]);
            LocationGroup["City"] = _val[0];
            _v2Array.push({ section: "D05", element: "D05_06", val: _val[0] });
        };

        //dLocation.08/////////
        _val = getdLocationValue(elementList, "dLocation.08");
        if (_val == null) {
            LocationGroup["dLocation.08"] = null;
            V3XML.Node("dLocation.08", null);
            OLAPXML.Node("State", null);
            LocationGroup["State"] = null;
            _v2Array.push({ section: "D05", element: "D05_07", val: null });
        }
        else {
            LocationGroup["dLocation.08"] = _val[0];
            V3XML.Node("dLocation.08", _val[0]);
            OLAPXML.Node("State", _val[0]);
            LocationGroup["State"] = _val[0];
            _v2Array.push({ section: "D05", element: "D05_07", val: _val[0] });
        };

        //dLocation.09/////////
        _val = getdLocationValue(elementList, "dLocation.09");
        if (_val == null) {
            LocationGroup["dLocation.09"] = null;
            V3XML.Node("dLocation.09", null);
            OLAPXML.Node("Zip", null);
            LocationGroup["Zip"] = null;
            _v2Array.push({ section: "D05", element: "D05_08", val: null });
        }
        else {
            LocationGroup["dLocation.09"] = _val[0];
            V3XML.Node("dLocation.09", _val[0]);
            OLAPXML.Node("Zip", _val[0]);
            LocationGroup["Zip"] = _val[0];
            _v2Array.push({ section: "D05", element: "D05_08", val: _val[0] });
        };

        //dLocation.10/////////
        _val = getdLocationValue(elementList, "dLocation.10");
        if (_val == null) {
            LocationGroup["dLocation.10"] = null;
            V3XML.Node("dLocation.10", null);
            OLAPXML.Node("County", null);
            LocationGroup["County"] = null;
        }
        else {
            LocationGroup["dLocation.10"] = _val[0];
            V3XML.Node("dLocation.10", _val[0]);
            OLAPXML.Node("County", _val[0]);
            LocationGroup["County"] = _val[0];
        };


        //dLocation.11/////////
        _val = getdLocationValue(elementList, "dLocation.11");
        if (_val == null) {
            LocationGroup["dLocation.11"] = null;
            V3XML.Node("dLocation.11", null);
            OLAPXML.Node("Country", null);
            LocationGroup["Country"] = null;
        }
        else {
            LocationGroup["dLocation.11"] = _val[0];
            V3XML.Node("dLocation.11", _val[0]);
            OLAPXML.Node("Country", setCodeText("dLocation.11", _val[0]));
            LocationGroup["Country"] = setCodeText("dLocation.11", _val[0]);
        };

        //dLocation.12/////////
        _val = getValue(elementList, "dLocation.12");
        if (_val == null) {
            if (isRequiredStateElement("dLocation.12") == - true) {
                V3XML.BeginNode("dLocation.12")
                ContactInfoGroup["dLocation.12"] = v3NOT_RECORDED;
                ContactInfoGroup["LocationPhoneNumber"] = v3NOT_RECORDED;
                V3XML.Attrib("dLocation.12", NIL_V3NOT_RECORDED);
                OLAPXML.Node("LocationPhoneNumber", "NOT RECORDED");
                V3XML.EndNode();
            }
            else {
                V3XML.BeginNode("dLocation.12")
                ContactInfoGroup["dLocation.12"] = v3NOT_REPORTING;
                ContactInfoGroup["LocationPhoneNumber"] = v3NOT_REPORTING;
                V3XML.Attrib("dLocation.12", NIL_V3NOT_REPORTING);
                OLAPXML.Node("LocationPhoneNumber", "NOT REPORTED");
                V3XML.EndNode();
            }
        }
        else {
            arr1 = [];
            for (var i = 0; i < _val.length; i++) {
                var PhoneNumberType = setPhoneNumberType("dLocation.12", _val[i]);

                if (PhoneNumberType == "9913001") {
                    V3XML.BeginNode("dLocation.12")
                    V3XML.AttribNoEQ(FAX, _val[i])

                    OLAPXML.BeginNode("LocationPhoneNumber")
                    OLAPXML.AttribNoEQ(FAX, _val[i])
                    OLAPXML.EndNode();

                    arr1.push("FAX  " + _val[i]);
                }
                else if (PhoneNumberType == "9913003") {
                    V3XML.BeginNode("dLocation.12")
                    V3XML.AttribNoEQ(HOME, _val[i])

                    OLAPXML.BeginNode("LocationPhoneNumber")
                    OLAPXML.AttribNoEQ(HOME, _val[i])
                    OLAPXML.EndNode();

                    arr1.push("HOME  " + _val[i]);
                }
                else if (PhoneNumberType == "9913005") {
                    V3XML.BeginNode("dLocation.12")
                    V3XML.AttribNoEQ(MOBILE, _val[i])

                    OLAPXML.BeginNode("LocationPhoneNumber")
                    OLAPXML.AttribNoEQ(MOBILE, _val[i])
                    OLAPXML.EndNode();

                    arr1.push("MOBILE  " + _val[i]);
                }
                else if (PhoneNumberType == "9913007") {
                    V3XML.BeginNode("dLocation.12")
                    V3XML.AttribNoEQ(PAGER, _val[i])

                    OLAPXML.BeginNode("LocationPhoneNumber")
                    OLAPXML.AttribNoEQ(PAGER, _val[i])

                }
                else if (PhoneNumberType == "9913009") {
                    V3XML.BeginNode("dLocation.12")
                    V3XML.AttribNoEQ(WORKPHONE, _val[i])

                    OLAPXML.BeginNode("LocationPhoneNumber")
                    OLAPXML.AttribNoEQ(WORKPHONE, _val[i])

                    arr1.push("WORK  " + _val[i]);
                }
                else {
                    console.log(_val[i])
                    _v2Array.push({ section: "D05", element: "D05_09", val: _val[i] });
                    V3XML.Node("dLocation.12")
                    V3XML.AttribNoEQ(WORKPHONE, _val[i])

                    OLAPXML.BeginNode("LocationPhoneNumber")
                    OLAPXML.AttribNoEQ(WORKPHONE, _val[i])

                }

            };
            LocationGroup["dLocation.12"] = arr1.slice(0);
            LocationGroup["LocationPhoneNumber"] = arr1.slice(0);
        };

        LocationGroupArray.push(LocationGroup)

        V3XML.EndNode();
        OLAPXML.EndNode();

    };
    V3XML.EndNode();
    OLAPXML.EndNode();


    if (LocationGroupArray.length > 0) {
        dLocation.LocationGroup = LocationGroupArray;
    };


    return dLocation;


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
    //alert("need dPateient v2 codes")
    V3XML.BeginNode("dPersonnel");
    OLAPXML.BeginNode("dPersonnel");
    for (var xx = 0; xx < personnelObject.attributes.sections.length; xx++) //All dPersonnelGroup
    {
        _sectionIndex = getSectionIndex(personnelObject.attributes.sections[xx].attributes, "dPersonnel.NameGroup");
        //  console.log(_sectionIndex)
        var elementList = personnelObject.attributes.sections[xx].attributes.elements;

        V3XML.BeginNode("dPersonnel.PersonnelGroup");
        OLAPXML.BeginNode("dPersonnel.PersonnelGroup");

        V3XML.BeginNode("dPersonnel.NameGroup");
        OLAPXML.BeginNode("dPersonnel.NameGroup");

        elementList = personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[0]].attributes.elements;

        //////////dPersonnl.01
        _val = getValue(elementList, "dPersonnel.01");
        if (_val == null) {
            V3XML.BeginNode("dPersonnel.01")
            OLAPXML.BeginNode("dPersonnel.01")

            if (isRequiredStateElement("dPersonnel.01") == true) {
                V3XML.Attrib("dPersonnel.01", NIL_V3NOT_RECORDED);
                OLAPXML.Node("LastName", "NOT RECORDED");
                PersonnelGroup["dPersonnel.01"] = v3NOT_RECORDED;
                PersonnelGroup["LastName"] = v3NOT_RECORDED;
                _v2Array.push({ section: "D08", element: "D08_01", val: v2NOT_RECORDED });
            }
            else {
                V3XML.Attrib("dPersonnel.01", NIL_V3NOT_REPORTING);
                OLAPXML.Node("LastName", "NOT RECORDED");
                PersonnelGroup["dPersonnel.01"] = v3NOT_REPORTING;
                PersonnelGroup["LastName"] = v3NOT_REPORTING;
                _v2Array.push({ section: "D08", element: "D08_01", val: v2NOT_REPORTING });
            }
            V3XML.EndNode();
        }
        else {
            V3XML.Node("dPersonnel.01", _val[0]);
            OLAPXML.Node("LastName", _val[0]);
            _v2Array.push({ section: "D08", element: "D08_01", val: _val[0] });
            PersonnelGroup["dPersonnel.01"] = _val[0];
            PersonnelGroup["LastName"] = _val[0];
        };

        //////////dPersonnl.02
        _val = getValue(elementList, "dPersonnel.02");
        if (_val == null) {
            V3XML.BeginNode("dPersonnel.02")
            OLAPXML.BeginNode("dPersonnel.02")

            if (isRequiredStateElement("dPersonnel.02") == true) {
                V3XML.Attrib("dPersonnel.02", NIL_V3NOT_RECORDED);
                OLAPXML.Node("FirstName", "NOT RECORDED");
                PersonnelGroup["dPersonnel.02"] = v3NOT_RECORDED;
                PersonnelGroup["FirstName"] = v3NOT_RECORDED;
                _v2Array.push({ section: "D08", element: "D08_03", val: v2NOT_RECORDED });
            }
            else {
                V3XML.Attrib("dPersonnel.02", NIL_V3NOT_REPORTING);
                OLAPXML.Node("FirstName", "NOT RECORDED");
                PersonnelGroup["dPersonnel.02"] = v3NOT_REPORTING;
                PersonnelGroup["FirstName"] = v3NOT_REPORTING;
                _v2Array.push({ section: "D08", element: "D08_03", val: v2NOT_REPORTING });
            }
            V3XML.EndNode();
        }
        else {
            V3XML.Node("dPersonnel.02", _val[0]);
            OLAPXML.Node("FirstName", _val[0]);
            _v2Array.push({ section: "D08", element: "D08_03", val: _val[0] });
            PersonnelGroup["dPersonnel.02"] = _val[0];
            PersonnelGroup["FirstName"] = _val[0];
        };
        //////////dPersonnel.03
        _val = getValue(elementList, "dPersonnel.03");
        if (_val == null) {
            V3XML.BeginNode("dPersonnel.03")
            OLAPXML.BeginNode("dPersonnel.03")
            if (isRequiredStateElement("dPersonnel.03") == true) {
                V3XML.Attrib("dPersonnel.03", NIL_V3NOT_RECORDED);
                OLAPXML.Node("MiddleName", "NOT RECORDED");
                PersonnelGroup["dPersonnel.03"] = v3NOT_RECORDED;
                PersonnelGroup["MiddleName"] = v3NOT_RECORDED;
                _v2Array.push({ section: "D08", element: "D08_02", val: v2NOT_RECORDED });
            }
            else {
                V3XML.Attrib("dPersonnel.03", NIL_V3NOT_REPORTING);
                OLAPXML.Node("MiddleName", "NOT RECORDED");
                PersonnelGroup["dPersonnel.03"] = v3NOT_REPORTING;
                PersonnelGroup["MiddleName"] = v3NOT_REPORTING;
                _v2Array.push({ section: "D08", element: "D08_02", val: v2NOT_REPORTING });
            }
            V3XML.EndNode();
        }
        else {
            V3XML.Node("dPersonnel.03", _val[0]);
            OLAPXML.Node("MiddleName", _val[0]);
            _v2Array.push({ section: "D08", element: "D08_02", val: _val[0] });
            PersonnelGroup["dPersonnel.03"] = _val[0];
            PersonnelGroup["MiddleName"] = _val[0];
        };
        //////////////////////////////////////////////////////////////

        V3XML.EndNode();
        OLAPXML.EndNode();

        V3XML.BeginNode("dPersonnel.AddressGroup");
        OLAPXML.BeginNode("dPersonnel.AddressGroup");
        //////////dPersonnel.04
        _val = getValue(elementList, "dPersonnel.04");
        if (_val == null) {
            V3XML.Node("dPersonnel.04", null);
            OLAPXML.Node("MailingAddress", null);
            _v2Array.push({ section: "D08", element: "D08_04", val: null });
            PersonnelGroup["dPersonnel.04"] = null;
            PersonnelGroup["MailingAddress"] = null;
        }
        else {
            V3XML.Node("dPersonnel.04", _val[0]);
            OLAPXML.Node("MailingAddress", _val[0]);
            _v2Array.push({ section: "D08", element: "D08_04", val: _val[0] });
            PersonnelGroup["dPersonnel.04"] = _val[0];
            PersonnelGroup["MailingAddress"] = _val[0];
        };

        //////////dPersonnel.05
        _val = getValue(elementList, "dPersonnel.05");
        if (_val == null) {
            V3XML.Node("dPersonnel.05", null);
            OLAPXML.Node("City", null);
            _v2Array.push({ section: "D08", element: "D08_05", val: null });
            PersonnelGroup["dPersonnel.05"] = null;
            PersonnelGroup["City"] = null;
        }
        else {
            V3XML.Node("dPersonnel.05", _val[0]);
            OLAPXML.Node("City", null);
            _v2Array.push({ section: "D08", element: "D08_05", val: _val[0] });
            PersonnelGroup["dPersonnel.05"] = _val[0];
            PersonnelGroup["City"] = _val[0];
        };

        //////////dPersonnel.06
        _val = getValue(elementList, "dPersonnel.06");
        if (_val == null) {
            V3XML.Node("dPersonnel.06", null);
            OLAPXML.Node("State", null);
            _v2Array.push({ section: "D08", element: "D08_06", val: null });
            PersonnelGroup["dPersonnel.06"] = null;
            PersonnelGroup["State"] = null;
        }
        else {
            V3XML.Node("dPersonnel.06", _val[0]);
            OLAPXML.Node("State", _val[0]);
            _v2Array.push({ section: "D08", element: "D08_06", val: _val[0] });
            PersonnelGroup["dPersonnel.06"] = _val[0];
            PersonnelGroup["State"] = _val[0];
        };

        //////////dPersonnel.07
        _val = getValue(elementList, "dPersonnel.07");
        if (_val == null) {
            V3XML.Node("dPersonnel.07", null);
            OLAPXML.Node("Zip", null);
            _v2Array.push({ section: "D08", element: "D08_07", val: null });
            PersonnelGroup["dPersonnel.07"] = null;
            PersonnelGroup["Zip"] = null;
        }
        else {
            V3XML.Node("dPersonnel.07", _val[0]);
            OLAPXML.Node("Zip", _val[0]);
            _v2Array.push({ section: "D08", element: "D08_07", val: _val[0] });
            PersonnelGroup["dPersonnel.07"] = _val[0];
            PersonnelGroup["Zip"] = _val[0];
        };

        //////////dPersonnel.08
        _val = getValue(elementList, "dPersonnel.08");
        if (_val == null) {
            V3XML.Node("dPersonnel.08", null);
            OLAPXML.Node("Country", null);
            PersonnelGroup["dPersonnel.08"] = null;
            PersonnelGroup["Country"] = null;
        }
        else {
            V3XML.Node("dPersonnel.08", null);
            OLAPXML.Node("Country", setCodeText("dPersonnel.08", _val[0]));
            PersonnelGroup["dPersonnel.08"] = null;
            PersonnelGroup["Country"] = setCodeText("dPersonnel.08", _val[0]);
        };
        V3XML.EndNode()
        OLAPXML.EndNode()
        ///////////////////////////////////////////
        ///////////////////////////////////////////

        //////////dPersonnel.09
        _val = getValue(elementList, "dPersonnel.09");
        if (_val == null) {
            PersonnelGroup["dPersonnel.09"] = null;
            PersonnelGroup["PhoneNumber"] = null;
            V3XML.Node("dPersonnel.09", null);
            OLAPXML.Node("PhoneNumber", null);

        }
        else {
            arr1 = [];
            for (var i = 0; i < _val.length; i++) {
                var PhoneNumberType = setPhoneNumberType("dPersonnel.09", _val[i]);
                if (PhoneNumberType == "9913001") {
                    V3XML.BeginNode("dPersonnel.09")
                    V3XML.AttribNoEQ(FAX, _val[i])
                    OLAPXML.BeginNode("PhoneNumber")
                    OLAPXML.AttribNoEQ(FAX, _val[i])
                    OLAPXML.EndNode();
                    arr1.push("FAX  " + _val[i]);
                }
                else if (PhoneNumberType == "9913003") {
                    V3XML.BeginNode("dPersonnel.09")
                    V3XML.AttribNoEQ(HOME, _val[i])
                    OLAPXML.BeginNode("PhoneNumber")
                    OLAPXML.AttribNoEQ(HOME, _val[i])
                    OLAPXML.EndNode();
                    arr1.push("HOME  " + _val[i]);
                }
                else if (PhoneNumberType == "9913005") {
                    V3XML.BeginNode("dPersonnel.09")
                    V3XML.AttribNoEQ(MOBILE, _val[i])
                    OLAPXML.BeginNode("PhoneNumber")
                    OLAPXML.AttribNoEQ(MOBILE, _val[i])
                    OLAPXML.EndNode();
                    arr1.push("MOBILE  " + _val[i]);
                }
                else if (PhoneNumberType == "9913007") {
                    V3XML.BeginNode("dPersonnel.09")
                    V3XML.AttribNoEQ(PAGER, _val[i])
                    OLAPXML.BeginNode("PhoneNumber")
                    OLAPXML.AttribNoEQ(PAGER, _val[i])
                }
                else if (PhoneNumberType == "9913009") {
                    V3XML.BeginNode("dPersonnel.09")
                    V3XML.AttribNoEQ(WORKPHONE, _val[i])
                    OLAPXML.BeginNode("PhoneNumber")
                    OLAPXML.AttribNoEQ(WORKPHONE, _val[i])
                    arr1.push("WORK  " + _val[i]);
                }
                else {
                    console.log(_val[i])
                    _v2Array.push({ section: "D08", element: "D08_08", val: _val[i] });
                    V3XML.Node("dPersonnel.09")
                    V3XML.AttribNoEQ(WORKPHONE, _val[i])
                    OLAPXML.BeginNode("PhoneNumber")
                    OLAPXML.AttribNoEQ(WORKPHONE, _val[i])
                }
            }
            PersonnelGroup["dPersonnel.09"] = arr1.slice(0);
            PersonnelGroup["PhoneNumber"] = arr1.slice(0);
            _v2Array.push({ section: "D08", element: "D08_08", val: _val[0] });
        };


        //////////dPersonnel.10
        _val = getValue(elementList, "dPersonnel.10");
        if (_val == null) {
            PersonnelGroup["dPersonnel.10"] = null;
            PersonnelGroup["Email"] = null;
            V3XML.Node("dPersonnel.10", null);
            OLAPXML.Node("Email", null);
        }
        else {
            var arr = [];
            var arr2 = [];
            for (var t = 0; t < _val.length; t++) {
                arr.push(_val[t]);
                //arr2.push(setV2("dPersonnel.10", _val));
                arr2.push(setV2("dPersonnel.10", _val));
                V3XML.Node("dPersonnel.10", _val[t]);
                OLAPXML.Node("Email", _val[t]);
            }
            PersonnelGroup["dPersonnel.10"] = arr.slice(0);
            PersonnelGroup["Email"] = arr.slice(0);
            _v2Array.push({ section: "D08", element: "D08_10", val: arr2.slice(0) });
        };

        //////////dPersonnel.11
        _val = getValue(elementList, "dPersonnel.11");
        if (_val == null) {

            ContactInfoGroup["dContact.11"] = v3NOT_RECORDED;
            ContactInfoGroup["ContactEmail"] = v3NOT_RECORDED;
            V3XML.Attrib("dContact.11", NIL_V3NOT_RECORDED);
            OLAPXML.Node("ContactEmail", "NOT RECORDED");
            V3XML.EndNode();
        }
        else {
            arr1 = [];
            for (var i = 0; i < _val.length; i++) {
                var eMailType = seteMailType("dContact.11", _val[i]);

                if (eMailType == "9904001") {
                    V3XML.BeginNode("dContact.11")
                    V3XML.AttribNoEQ(PERSONALEMAIL, _val[i])
                    V3XML.EndNode();
                    OLAPXML.BeginNode("ContactEmail")
                    OLAPXML.AttribNoEQ(PERSONALEMAIL, _val[i])
                    OLAPXML.EndNode();
                    arr1.push("FAX  " + _val[i]);
                }
                else if (PhoneNumberType == "9904001") {
                    V3XML.BeginNode("dContact.11")
                    V3XML.AttribNoEQ(WORKEMAIL, _val[i])
                    V3XML.EndNode();
                    OLAPXML.BeginNode("ContactEmail")
                    OLAPXML.AttribNoEQ(WORKEMAIL, _val[i])
                    OLAPXML.EndNode();
                    arr1.push("HOME  " + _val[i]);
                }
            };
            ContactInfoGroup["dContact.11"] = arr1.slice(0);
            ContactInfoGroup["ContactEmail"] = arr1.slice(0);
            _v2Array.push({ section: "D02", element: "D02_10", val: _val[0] });
        };
        //////////dPersonnel.12
        _val = getValue(elementList, "dPersonnel.12");
        if (_val == null) {
            if (isRequiredStateElement("dPersonnel.12") == true) {
                _v2Array.push({ section: "D08", element: "D08_12", val: v2NOT_RECORDED });
                V3XML.BeginNode("dPersonnel.12")
                V3XML.Attrib("dPersonnel.12", NIL_V3NOT_RECORDED);
                OLAPXML.Node("Gender", "NOT RECORDED");
                PersonnelGroup["Gender"] = v3NOT_RECORDED;
                PersonnelGroup["dPersonnel.12"] = v3NOT_RECORDED;
                V3XML.EndNode();
            }
            else {
                _v2Array.push({ section: "D08", element: "D08_12", val: v2NOT_REPORTING });
                V3XML.BeginNode("dPersonnel.12")
                V3XML.Attrib("dPersonnel.12", NIL_V3NOT_REPORTING);
                OLAPXML.Node("Gender", "NOT RECORDED");
                PersonnelGroup["Gender"] = v3NOT_REPORTING;
                PersonnelGroup["dPersonnel.12"] = v3NOT_REPORTING;
                V3XML.EndNode();
            }
        }
        else {
            V3XML.Node("dPersonnel.12", _val[0]);
            OLAPXML.Node("Gender", _val[0]);
            ContactInfoGroup["dPersonnel.12"] = _val[0];
            ContactInfoGroup["Gender"] = _val[0];
            _v2Array.push({ section: "D08", element: "D08_12", val: _val[0] });
        };


        //////////dPersonnel.13
        _val = getValue(elementList, "dPersonnel.13");
        if (_val == null) {
            if (isRequiredStateElement("dPersonnel.13") == true) {
                _v2Array.push({ section: "D08", element: "D08_13", val: v2NOT_RECORDED });
                V3XML.BeginNode("dPersonnel.13")
                V3XML.Attrib("dPersonnel.13", NIL_V3NOT_RECORDED);
                OLAPXML.Node("Race", "NOT RECORDED");
                PersonnelGroup["Race"] = v3NOT_RECORDED;
                PersonnelGroup["dPersonnel.13"] = v3NOT_RECORDED;
                V3XML.EndNode();
            }
            else {
                _v2Array.push({ section: "D08", element: "D08_13", val: v2NOT_REPORTING });
                V3XML.BeginNode("dPersonnel.13")
                V3XML.Attrib("dPersonnel.13", NIL_V3NOT_REPORTING);
                OLAPXML.Node("Race", "NOT RECORDED");
                PersonnelGroup["Race"] = v3NOT_REPORTING;
                PersonnelGroup["dPersonnel.13"] = v3NOT_REPORTING;
                V3XML.EndNode();
            }
        }
        else {
            var arr = [];
            var arr2 = [];
            var arr3 = [];
            for (var t = 0; t < _val.length; t++) {
                arr.push(_val[t]);
                arr2.push(setV2("dPersonnel.13", _val[t]));
                arr3.push(setCodeText("dPersonnel.13", _val[t]));
                V3XML.Node("dPersonnel.13", _val[t]);
                OLAPXML.Node("Race", setCodeText("dPersonnel.13", _val[t]));
            }
            PersonnelGroup["dPersonnel.13"] = arr.slice(0);
            PersonnelGroup["Race"] = arr3.slice(0);
            _v2Array.push({ section: "D08", element: "D08_13", val: arr2.slice(0) });
        };

        //////////dPersonnel.14
        _val = getValue(elementList, "dPersonnel.14");
        if (_val == null) {
            V3XML.Node("dPersonnel.14", null);
            OLAPXML.Node("Citizenship", null);
            PersonnelGroup["dPersonnel.14"] = null;
            PersonnelGroup["Citizenship"] = null;
        }
        else {
            V3XML.Node("dPersonnel.14", _val[0]);
            OLAPXML.Node("Citizenship", setCodeText("dPersonnel.14", _val[0]));
            PersonnelGroup["dPersonnel.14"] = null;
            PersonnelGroup["Citizenship"] = setCodeText("dPersonnel.14", _val[0]);
        };

        //////////dPersonnel.15
        _val = getValue(elementList, "dPersonnel.15");
        if (_val == null) {
            V3XML.Node("dPersonnel.15", null);
            OLAPXML.Node("HighestEducationalDegree", null);
            PersonnelGroup["dPersonnel.15"] = null;
            PersonnelGroup["HighestEducationalDegree"] = null;
        }
        else {
            V3XML.Node("dPersonnel.15", _val[0]);
            OLAPXML.Node("HighestEducationalDegree", setCodeText("dPersonnel.15", _val[0]));
            PersonnelGroup["dPersonnel.15"] = _val[0];
            PersonnelGroup["HighestEducationalDegree"] = setCodeText("dPersonnel.15", _val[0]);
        };

        //////////dPersonnel.16
        _val = getValue(elementList, "dPersonnel.16");
        if (_val == null) {
            V3XML.Node("dPersonnel.16", null);
            OLAPXML.Node("DegreeSubject", null);
            PersonnelGroup["dPersonnel.16"] = null;
            PersonnelGroup["DegreeSubject"] = null;
        }
        else {
            var arr = [];
            var arr2 = [];
            for (var t = 0; t < _val.length; t++) {
                arr.push(_val[t]);
                arr2.push(setCodeText("dPersonnel.16", _val[t]));
                V3XML.Node("dPersonnel.16", null);
                OLAPXML.Node("DegreeSubject", setCodeText("dPersonnel.16", _val[t]));
            }
            PersonnelGroup["dPersonnel.16"] = arr.slice(0);
            PersonnelGroup["DegreeSubject"] = arr2.slice(0);
        };

        //////////dPersonnel.17
        _val = getValue(elementList, "dPersonnel.17");
        if (_val == null) {
            V3XML.Node("dPersonnel.17", null);
            OLAPXML.Node("MotorVehicleLicenseType", null);
            PersonnelGroup["dPersonnel.17"] = null;
            PersonnelGroup["MotorVehicleLicenseType"] = null;
        }
        var arr = [];
        var arr2 = [];
        for (var t = 0; t < _val.length; t++) {
            arr.push(_val[t]);
            arr2.push(setCodeText("dPersonnel.17", _val[t]));
            V3XML.Node("dPersonnel.17", null);
            OLAPXML.Node("MotorVehicleLicenseType", setCodeText("dPersonnel.17", _val[t]));
        }
        PersonnelGroup["MotorVehicleLicenseType"] = arr2.slice(0);
        PersonnelGroup["dPersonnel.17"] = arr.slice(0);
    };

    ///////////////////////////////////////////////////////
    ///////////////////////ImmunizationsGroup
    _sectionIndex = getSectionIndex(personnelObject.attributes.sections[xx].attributes, "dPersonnel.ImmunizationsGroup");
    // console.log(_sectionIndex)
    ImmunizationsGroupelementList = personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements;

    for (var x = 0; x < _sectionIndex.length; x++) {
        //            console.log(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements)

        V3XML.BeginNode("dPersonnel.ImmunizationsGroup")
        OLAPXML.BeginNode("dPersonnel.ImmunizationsGroup")
        //////////dPersonnel.18
        _val = getValue(ImmunizationsGroupelementList, "dPersonnel.18");
        if (_val == null) {
            V3XML.Node("dPersonnel.18", null);
            OLAPXML.Node("ImmunizationStatus", null);
            ImmunizationsGroup["dPersonnel.18"] = null;
            ImmunizationsGroup["ImmunizationStatus"] = null;
        }
        else {

            V3XML.Node("dPersonnel.18", _val[0]);
            OLAPXML.Node("ImmunizationStatus", setCodeText("dPersonnel.18", _val[0]));
            ImmunizationsGroup["dPersonnel.18"] = _val[0];
            ImmunizationsGroup["ImmunizationStatus"] = setCodeText("dPersonnel.18", _val[0]);
        };

        //////////dPersonnel.19
        _val = getValue(ImmunizationsGroupelementList, "dPersonnel.19");
        if (_val == null) {
            V3XML.Node("dPersonnel.19", null);
            OLAPXML.Node("ImmunizationYear", null);
            ImmunizationsGroup["dPersonnel.19"] = null;
            ImmunizationsGroup["ImmunizationYear"] = null;
        }
        else {
            V3XML.Node("dPersonnel.19", _val[0]);
            OLAPXML.Node("ImmunizationYear", _val[0]);
            ImmunizationsGroup["dPersonnel.19"] = _val[0];
            ImmunizationsGroup["ImmunizationYear"] = _val[0];
        };
        V3XML.EndNode();
        OLAPXML.EndNode();
    };
    //////////////////////////////////////////
    //////////////////////////////////////////

    //////////dPersonnel.20
    _val = getValue(elementList, "dPersonnel.20");
    if (_val == null) {
        V3XML.Node("dPersonnel.20", null);
        OLAPXML.Node("ForeignLanguageAbility", null);
        PersonnelGroup["dPersonnel.20"] = null;
        PersonnelGroup["ForeignLanguageAbility"] = null;
    }
    else {
        var arr = [];
        var arr2 = [];
        for (var t = 0; t < _val.length; t++) {
            arr.push(_val[t]);
            arr2.push(setCodeText("dPersonnel.20", _val[t]));
            V3XML.Node("dPersonnel.20", null);
            OLAPXML.Node("ForeignLanguageAbility", setCodeText("dPersonnel.20", _val[t]));
        }
        PersonnelGroup["dPersonnel.20"] = arr.slice(0);
        PersonnelGroup["ForeignLanguageAbility"] = arr2.slice(0);
    };

    //////////dPersonnel.21
    _val = getValue(elementList, "dPersonnel.21");
    if (_val == null) {
        V3XML.Node("dPersonnel.21", null);
        OLAPXML.Node("PersonnelAgencyIDNumber", null);
        PersonnelGroup["dPersonnel.21"] = null;
        PersonnelGroup["PersonnelAgencyIDNumber"] = null;
        _v2Array.push({ section: "D07", element: "D07_01", val: null });
    }
    else {
        _v2Array.push({ section: "D07", element: "D07_01", val: _val[0] });
        PersonnelGroup["dPersonnel.21"] = _val[0];
        OLAPXML.Node("PersonnelAgencyIDNumber", _val[0]);
        V3XML.Node("dPersonnel.21", _val[0]);
        PersonnelGroup["PersonnelAgencyIDNumber"] = _val[0];
    };

    ////////////////////////////LicensureGroup
    _sectionIndex = getSectionIndex(personnelObject.attributes.sections[xx].attributes, "dPersonnel.LicensureGroup");

    for (var x = 0; x < _sectionIndex.length; x++) {
        OLAPXML.BeginNode("dPersonnel.LicensureGroup")
        V3XML.BeginNode("dPersonnel.LicensureGroup")

        // console.log(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements)
        //dPersonnel.22
        _val = getValue(personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.22");
        if (_val == null) {
            if (isRequiredStateElement("dPersonnel.22") == - true) {
                V3XML.BeginNode("dPersonnel.22")
                V3XML.Attrib("dPersonnel.22", NIL_V3NOT_RECORDED);
                OLAPXML.Node("StateofLicensure", "NOT RECORDED");
                LicensureGroup["StateofLicensure"] = v3NOT_RECORDED;
                LicensureGroup["dPersonnel.22"] = v3NOT_RECORDED;
            }
            else {
                V3XML.BeginNode("dPersonnel.22")
                V3XML.Attrib("dPersonnel.22", NIL_V3NOT_REPORTING);
                OLAPXML.Node("StateofLicensure", "NOT REPORTING");
                LicensureGroup["StateofLicensure"] = v3NOT_REPORTING;
                LicensureGroup["dPersonnel.22"] = v3NOT_REPORTING;
            }
            V3XML.EndNode();
        }
        else {
            OLAPXML.Node("StateofLicensure", _val[0]);
            ["StateofLicensure"] = _val[0];
            LicensureGroup["dPersonnel.22"] = _val[0];
            V3XML.Node("dPersonnel.22", _val[0]);
            LicensureGroup["StateofLicensure"] = _val[0];
        };


        //dPersonnel.23
        _val = getValue(personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.23");
        if (_val == null) {
            _v2Array.push({ section: "D07", element: "D07_02", val: null });
            if (isRequiredStateElement("dPersonnel.23") == - true) {
                V3XML.BeginNode("dPersonnel.23")
                V3XML.Attrib("dPersonnel.23", NIL_V3NOT_RECORDED);
                OLAPXML.Node("StateLicensureIDNumber", "NOT RECORDED");
                LicensureGroup["StateLicensureIDNumber"] = v3NOT_RECORDED;
                LicensureGroup["dPersonnel.23"] = v3NOT_RECORDED;

            }
            else {
                V3XML.BeginNode("dPersonnel.23")
                V3XML.Attrib("dPersonnel.23", NIL_V3NOT_REPORTING);
                OLAPXML.Node("StateLicensureIDNumber", "NOT REPORTING");
                LicensureGroup["StateLicensureIDNumber"] = v3NOT_REPORTING;
                LicensureGroup["dPersonnel.23"] = v3NOT_REPORTING;
            }
            V3XML.EndNode();
        }
        else {
            OLAPXML.Node("StateLicensureIDNumber", _val[0]);
            V3XML.Node("dPersonnel.23", _val[0]);
            ["StateLicensureIDNumber"] = _val[0];
            LicensureGroup["dPersonnel.23"] = _val[0];
            LicensureGroup["StateLicensureIDNumber"] = _val[0];
            _v2Array.push({ section: "D07", element: "D07_02", val: null });
        };

        //dPersonnel.24
        _val = getValue(personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.24");
        if (_val == null) {
            if (isRequiredStateElement("dPersonnel.24") == true) {
                V3XML.BeginNode("dPersonnel.24")
                V3XML.Attrib("dPersonnel.24", NIL_V3NOT_RECORDED);
                OLAPXML.Node("EMSCertificationLicensureLevel", "NOT RECORDED");
                LicensureGroup["EMSCertificationLicensureLevel"] = v3NOT_RECORDED;
                LicensureGroup["dPersonnel.24"] = v3NOT_RECORDED;
                V3XML.EndNode();
                _v2Array.push({ section: "D08", element: "D08_15", val: null });
            }
        }
        else {
            _v2Array.push({ section: "D08", element: "D08_15", val: setV2("dPersonnel.24", _val[0]) });
            OLAPXML.Node("EMSCertificationLicensureLevel", _val[0]);
            V3XML.Node("dPersonnel.24", _val[0]);
            LicensureGroup["EMSCertificationLicensureLevel"] = setCodeText("dPersonnel.24", _val[t0]);
            LicensureGroup["dPersonnel.24"] = _val[0];
        };


        //dPersonnel.25
        _val = getValue(personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.24");
        if (_val == null) {
            _v2Array.push({ section: "D08", element: "D08_17", val: null });
            OLAPXML.Node("EMSCurrentCertificationDate", null);
            V3XML.Node("dPersonnel.25", null);
            LicensureGroup["EMSCurrentCertificationDate"] = null;
            LicensureGroup["dPersonnel.25"] = null;

        }
        else {
            _v2Array.push({ section: "D08", element: "D08_17", val: _val[0] });
            OLAPXML.Node("EMSCurrentCertificationDate", _val[0]);
            V3XML.Node("dPersonnel.25", _val[0]);
            LicensureGroup["EMSCurrentCertificationDate"] = _val[t0];
            LicensureGroup["dPersonnel.25"] = _val[0];
        };

        //dPersonnel.26
        _val = getValue(personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.24");
        if (_val == null) {
            _v2Array.push({ section: "D08", element: "D08_18", val: null });
            OLAPXML.Node("InitialStateLicensureIssueDate", null);
            V3XML.Node("dPersonnel.26", null);
            LicensureGroup["InitialStateLicensureIssueDate"] = null;
            LicensureGroup["dPersonnel.26"] = null;
        }
        else {
            _v2Array.push({ section: "D08", element: "D08_18", val: _val[0] });
            OLAPXML.Node("InitialStateLicensureIssueDate", _val[0]);
            V3XML.Node("dPersonnel.26", _val[0]);
            LicensureGroup["InitialStateLicensureIssueDate"] = _val[0];
            LicensureGroup["dPersonnel.26"] = _val[0];
        };

        //dPersonnel.27
        _val = getValue(personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.24");
        if (_val == null) {
            OLAPXML.Node("CurrentStateLicensureExpirationDate", null);
            V3XML.Node("dPersonnel.27", null);
            LicensureGroup["CurrentStateLicensureExpirationDate"] = null;
            LicensureGroup["dPersonnel.27"] = null;

        }
        else {
            OLAPXML.Node("CurrentStateLicensureExpirationDate", _val[0]);
            V3XML.Node("dPersonnel.27", _val[0]);
            LicensureGroup["CurrentStateLicensureExpirationDate"] = _val[0];
            LicensureGroup["dPersonnel.27"] = _val[0];
        };

        OLAPXML.EndNode();
        V3XML.EndNode();
    };

    //dPersonnel.28
    _val = getValue(elementList, "dPersonnel.28");
    if (_val == null) {
        OLAPXML.Node("NationalRegistryNumber", null);
        V3XML.Node("dPersonnel.28", null);
        PersonnelGroup["NationalRegistryNumber"] = null;
        PersonnelGroup["dPersonnel.28"] = null;
    }
    else {
        OLAPXML.Node("NationalRegistryNumber", _val[0]);
        V3XML.Node("dPersonnel.28", _val[0]);
        PersonnelGroup["NationalRegistryNumber"] = _val[0];
        PersonnelGroup["dPersonnel.28"] = _val[0];
    };

    //dPersonnel.29
    _val = getValue(elementList, "dPersonnel.29");
    if (_val == null) {
        OLAPXML.Node("NationalRegistryCertificationLevel", null);
        V3XML.Node("dPersonnel.29", null);
        PersonnelGroup["NationalRegistryCertificationLevel"] = null;
        PersonnelGroup["dPersonnel.29"] = null;
    }
    else {
        OLAPXML.Node("NationalRegistryCertificationLevel", setCodeText("dPersonnel.29", _val[0]));
        V3XML.Node("dPersonnel.29", _val[0]);
        PersonnelGroup["NationalRegistryCertificationLevel"] = setCodeText("dPersonnel.29", _val[0]);
        PersonnelGroup["dPersonnel.29"] = _val[0];
    };

    //dPersonnel.30
    _val = getValue(elementList, "dPersonnel.30");
    if (_val == null) {
        OLAPXML.Node("CurrentNationalRegistryExpirationDate", null);
        V3XML.Node("dPersonnel.30", null);
        PersonnelGroup["CurrentNationalRegistryExpirationDate"] = null;
        PersonnelGroup["dPersonnel.30"] = null;
    }
    else {
        OLAPXML.Node("CurrentNationalRegistryExpirationDate", _val[0]);
        V3XML.Node("dPersonnel.30", _val[0]);
        PersonnelGroup["CurrentNationalRegistryExpirationDate"] = _val[0];
        PersonnelGroup["dPersonnel.30"] = _val[0];
    };

    //dPersonnel.31

    _val = getValue(elementList, "dPersonnel.31");
    if (_val == null) {
        _v2Array.push({ section: "D07", element: "D07_03", val: null });
        if (isRequiredStateElement("dPersonnel.31") == true) {
            V3XML.BeginNode("dPersonnel.31")
            V3XML.Attrib("dPersonnel.31", NIL_V3NOT_RECORDED);
            OLAPXML.Node("EmploymentStatus", "NOT RECORDED");
            PersonnelGroup["EmploymentStatus"] = v3NOT_RECORDED;
            PersonnelGroup["dPersonnel.31"] = v3NOT_RECORDED;
        }
        else {
            V3XML.BeginNode("dPersonnel.31")
            V3XML.Attrib("dPersonnel.31", NIL_V3NOT_REPORTING);
            OLAPXML.Node("EmploymentStatus", "NOT REPORTING");
            PersonnelGroup["EmploymentStatus"] = v3NOT_REPORTING;
            PersonnelGroup["dPersonnel.31"] = v3NOT_REPORTING;
        }
        V3XML.EndNode();
    }
    else {
        _v2Array.push({ section: "D07", element: "D07_03", val: setV2("dPersonnel.31", _val[0]) });
        OLAPXML.Node("EmploymentStatus", setCodeText("dPersonnel.31", _val[0]));
        V3XML.Node("dPersonnel.31", _val[0]);
        PersonnelGroup["EmploymentStatus"] = setCodeText("dPersonnel.31", _val[0]);
        PersonnelGroup["dPersonnel.31"] = _val[0];
    };

    //dPersonnel.32
    _val = getValue(elementList, "dPersonnel.32");
    if (_val == null) {
        if (isRequiredStateElement("dPersonnel.32") == true) {
            V3XML.BeginNode("dPersonnel.32")
            V3XML.Attrib("dPersonnel.32", NIL_V3NOT_RECORDED);
            OLAPXML.Node("EmploymentStatusDate", "NOT RECORDED");
            PersonnelGroup["EmploymentStatusDate"] = v3NOT_RECORDED;
            PersonnelGroup["dPersonnel.32"] = v3NOT_RECORDED;
        }
        else {
            V3XML.BeginNode("dPersonnel.32")
            V3XML.Attrib("dPersonnel.32", NIL_V3NOT_REPORTING);
            OLAPXML.Node("EmploymentStatusDate", "NOT REPORTING");
            PersonnelGroup["EmploymentStatusDate"] = v3NOT_REPORTING;
            PersonnelGroup["dPersonnel.32"] = v3NOT_REPORTING;
        }
        V3XML.EndNode();
    }
    else {
        OLAPXML.Node("EmploymentStatusDate", _val[0]);
        V3XML.Node("dPersonnel.32", _val[0]);
        PersonnelGroup["EmploymentStatusDate"] = "dPersonnel.30", _val[0];
        PersonnelGroup["dPersonnel.32"] = _val[0];
    };


    //dPersonnel.33
    _val = getValue(elementList, "dPersonnel.33");
    if (_val == null) {
        OLAPXML.Node("HireDate", null);
        V3XML.Node("dPersonnel.33", null);
        PersonnelGroup["HireDate"] = "dPersonnel.30", null;
        PersonnelGroup["dPersonnel.33"] = null;
    }
    else {
        OLAPXML.Node("HireDate", _val[0]);
        V3XML.Node("dPersonnel.33", _val[0]);
        PersonnelGroup["HireDate"] = "dPersonnel.30", _val[0];
        PersonnelGroup["dPersonnel.32"] = _val[0];
    };

    //dPersonnel.34
    _val = getValue(elementList, "dPersonnel.34");
    if (_val == null) {
        if (isRequiredStateElement("dPersonnel.34") == true) {
            V3XML.BeginNode("dPersonnel.34")
            V3XML.Attrib("dPersonnel.34", NIL_V3NOT_RECORDED);
            OLAPXML.Node("PrimaryEMSJobRole", "NOT RECORDED");
            PersonnelGroup["PrimaryEMSJobRole"] = v3NOT_RECORDED;
            PersonnelGroup["dPersonnel.34"] = v3NOT_RECORDED;
        }
        else {
            V3XML.BeginNode("dPersonnel.34")
            V3XML.Attrib("dPersonnel.34", NIL_V3NOT_REPORTING);
            OLAPXML.Node("PrimaryEMSJobRole", "NOT REPORTING");
            PersonnelGroup["PrimaryEMSJobRole"] = v3NOT_REPORTING;
            PersonnelGroup["dPersonnel.34"] = v3NOT_REPORTING;
        }
        V3XML.EndNode();
    }
    else {
        OLAPXML.Node("PrimaryEMSJobRole", setCodeText("dPersonnel.34", _val[0]));
        V3XML.Node("dPersonnel.34", _val[0]);
        PersonnelGroup["PrimaryEMSJobRole"] = setCodeText("dPersonnel.34", _val[0]);
        PersonnelGroup["dPersonnel.34"] = _val[0];
    };

    //dPersonnel.35
    _val = getValue(elementList, "dPersonnel.35");
    if (_val == null) {
        if (isRequiredStateElement("dPersonnel.35") == true) {
            V3XML.BeginNode("dPersonnel.35")
            V3XML.Attrib("dPersonnel.35", NIL_V3NOT_RECORDED);
            OLAPXML.Node("OtherJobResponsibilities", "NOT RECORDED");
            PersonnelGroup["OtherJobResponsibilities"] = v3NOT_RECORDED;
            PersonnelGroup["dPersonnel.35"] = v3NOT_RECORDED;
        }
        else {
            V3XML.BeginNode("dPersonnel.35")
            V3XML.Attrib("dPersonnel.35", NIL_V3NOT_REPORTING);
            OLAPXML.Node("OtherJobResponsibilities", "NOT REPORTING");
            PersonnelGroup["OtherJobResponsibilities"] = v3NOT_REPORTING;
            PersonnelGroup["dPersonnel.35"] = v3NOT_REPORTING;
        }
        V3XML.EndNode();
    }
    else {
        var arr = [];
        var arr2 = [];
        for (var t = 0; t < _val.length; t++) {
            OLAPXML.Node("OtherJobResponsibilities", setCodeText("dPersonnel.35", _val[t]));
            V3XML.Node("dPersonnel.35", _val[t]);
        };
        PersonnelGroup["dPersonnel.35"] = arr.slice(0);
        PersonnelGroup["OtherJobResponsibilities"] = arr2.slice(0);
    };


    //dPersonnel.36
    _val = getValue(elementList, "dPersonnel.36");
    if (_val == null) {
        OLAPXML.Node("TotalLengthofServiceinYears", null);
        V3XML.Node("dPersonnel.36", null);
        PersonnelGroup["TotalLengthofServiceinYears"] = null;
        PersonnelGroup["dPersonnel.36"] = null;
        _v2Array.push({ section: "D08", element: "D08_19", val: null });
    }
    else {
        _v2Array.push({ section: "D08", element: "D08_19", val: _val[0] });
        OLAPXML.Node("TotalLengthofServiceinYears", _val[0]);
        V3XML.Node("dPersonnel.36", _val[0]);
        PersonnelGroup["TotalLengthofServiceinYears"] = _val[0];
        PersonnelGroup["dPersonnel.36"] = _val[0];
    };

    //dPersonnel.37
    _val = getValue(elementList, "dPersonnel.37");
    if (_val == null) {
        OLAPXML.Node("DateLengthofServiceDocumented", null);
        V3XML.Node("dPersonnel.37", null);
        PersonnelGroup["DateLengthofServiceDocumented"] = null;
        PersonnelGroup["dPersonnel.37"] = null;
        _v2Array.push({ section: "D08", element: "D08_20", val: null });
    }
    else {
        _v2Array.push({ section: "D08", element: "D08_20", val: _val[0] });
        OLAPXML.Node("DateLengthofServiceDocumented", _val[0]);
        V3XML.Node("dPersonnel.37", _val[0]);
        PersonnelGroup["DateLengthofServiceDocumented"] = _val[0];
        PersonnelGroup["dPersonnel.37"] = _val[0];
    };
    ////////////////////////////CertificationLevelGroup
    _sectionIndex = getSectionIndex(personnelObject.attributes.sections[xx].attributes, "dPersonnel.CertificationLevelGroup");

    if (_sectionIndex > 0) {
        for (var x = 0; x < _sectionIndex.length; x++) {
            // console.log(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements)
            OLAPXML.BeginNode("dPersonnel.CertificationLevelGroup");
            V3XML.BeginNode("dPersonnel.CertificationLevelGroup");

            //dPersonnel.38
            _val = getValue(personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.38");
            if (_val == null) {
                OLAPXML.Node("ProfessionalPracticeLevel", null);
                V3XML.Node("dPersonnel.38", null);
                CertificationLevelGroup["ProfessionalPracticeLevel"] = null;
                CertificationLevelGroup["dPersonnel.38"] = null;
                _v2Array.push({ section: "D07", element: "D07_05", val: null });
            }
            else {
                _v2Array.push({ section: "D07", element: "D07_05", val: setV2("dPersonnel.38", _val[0]) });
                OLAPXML.Node("ProfessionalPracticeLevel", setCodeText("dPersonnel.38", _val[0]));
                V3XML.Node("dPersonnel.38", _val[0]);
                CertificationLevelGroup["ProfessionalPracticeLevel"] = setCodeText("dPersonnel.38", _val[0]);
                CertificationLevelGroup["dPersonnel.38"] = _val[0];
            };

            //dPersonnel.39
            _val = getValue(personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.39");
            if (_val == null) {
                OLAPXML.Node("DateofProfessionalCertificationorLicensureforAgency", null);
                V3XML.Node("dPersonnel.39", null);
                CertificationLevelGroup["DateofProfessionalCertificationorLicensureforAgency"] = null;
                CertificationLevelGroup["dPersonnel.98"] = null;
                _v2Array.push({ section: "D07", element: "D07_06", val: null });
            }
            else {
                _v2Array.push({ section: "D07", element: "D07_06", val: _val[0] });
                OLAPXML.Node("DateofProfessionalCertificationorLicensureforAgency", _val[0]);
                V3XML.Node("dPersonnel.39", _val[0]);
                CertificationLevelGroup["DateofProfessionalCertificationorLicensureforAgency"] = setCodeText("dPersonnel.38", _val[0]);
                CertificationLevelGroup["dPersonnel.39"] = _val[0];
            };

            OLAPXML.EndNode();
            V3XML.EndNode();
        };
    };
    OLAPXML.EndNode();
    V3XML.EndNode();

    return _retArray;
};

var setdState = function (stateObject) {

    //console.log(businessObject);

    var _retArray = [];
    var _OLAPArray = [];
    var _sectionIndex = 0;
    var dState = new Object();
    // console.log(businessObject);
    V3XML.BeginNode("dState");
    OLAPXML.BeginNode("dState");

    var _elementList = stateObject.attributes.elements;

    _val = getValue(_elementList, "dState.01");
    if (_val == null)
    {
        V3XML.Node("dState.01", null);
        OLAPXML.Node("StateRequiredElement", null);
        dState["dState.01"] = null;
        dState["StateRequiredElement"] = null;
    }
    else
    {
        var arr = [];
        for (var t = 0; t < _val.length; t++)
        {
            arr.push(_val[t]);
            V3XML.Node("dState.01", _val[t]);
            OLAPXML.Node("StateRequiredElement", _val[t]);
        }
        dState["dState.01"] = arr.slice(0);
        dState["StateRequiredElement"] = arr.slice(0);

    }

    V3XML.EndNode();
    OLAPXML.EndNode();

    return _retArray;
};
var setdVehicle = function (dVehicleObject) {
    var dVehicle = new Object;
    var VehicleGroup = new Object;

    V3XML.BeginNode("dVehicle");
    OLAPXML.BeginNode("dVehicle");

    for (var xx = 0; xx < dVehicleObject.attributes.sections.length; xx++) {
        var elementList = dVehicleObject.attributes.sections[xx].attributes.elements;
        V3XML.BeginNode("dVehicle.VehicleGroup");
        OLAPXML.BeginNode("dVehicle.VehicleGroup");

        ///////dVehicle.01
        _val = getValue(elementList, "dVehicle.01");
        if (_val == null) {
            if (isRequiredStateElement("dVehicle.01") == - true) {
                _v2Array.push({ section: "D06", element: "D06_01", val: v2NOT_RECORDED });
                V3XML.BeginNode("dVehicle.01")
                V3XML.Attrib("dVehicle.01", NIL_V3NOT_RECORDED);
                OLAPXML.Node("UnitVehicleNumber", "NOT RECORDED");
                VehicleGroup["UnitVehicleNumber"] = v3NOT_RECORDED;
                ["dVehicle.01"] = v3NOT_RECORDED;
                V3XML.EndNode();
            }
            else {
                _v2Array.push({ section: "D06", element: "D06_01", val: v2NOT_REPORTING });
                V3XML.BeginNode("dVehicle.01")
                V3XML.Attrib("dVehicle.01", NIL_V3NOT_REPORTING);
                OLAPXML.Node("UnitVehicleNumber", "NOT REPORTING");
                VehicleGroup["UnitVehicleNumber"] = v3NOT_REPORTING;
                ["dVehicle.01"] = v3NOT_REPORTING;
                V3XML.EndNode();
            }
        }
        else {
            V3XML.Node("dVehicle.01", _val[0]);
            OLAPXML.Node("UnitVehicleNumber", _val[0]);
            _v2Array.push({ section: "D08", element: "D08_01", val: _val[0] });
            VehicleGroup["dVehicle.01"] = _val[0];
            VehicleGroup["UnitVehicleNumber"] = _val[0];
        };


        ///////dVehicle.02
        _val = getValue(elementList, "dVehicle.02");
        if (_val == null) {
            V3XML.Node("dVehicle.02", null);
            OLAPXML.Node("VIN", null);
            VehicleGroup["dVehicle.02"] = null;
            VehicleGroup["VIN"] = null;
        }
        else {
            V3XML.Node("dVehicle.02", _val[0]);
            OLAPXML.Node("VIN", _val[0]);
            VehicleGroup["dVehicle.02"] = _val[0];
            VehicleGroup["VIN"] = _val[0];
        };

        ///////dVehicle.03
        _val = getValue(elementList, "dVehicle.03");
        if (_val == null) {
            V3XML.Node("dVehicle.03", null);
            OLAPXML.Node("UnitCallSign", null);
            VehicleGroup["dVehicle.03"] = null;
            VehicleGroup["UnitCallSign"] = null;
        }
        else {
            V3XML.Node("dVehicle.03", _val[0]);
            OLAPXML.Node("UnitCallSign", _val[0]);
            VehicleGroup["dVehicle.03"] = _val[0];
            VehicleGroup["UnitCallSign"] = _val[0];
        };


        ///////dVehicle.04
        _val = getValue(elementList, "dVehicle.04");
        if (_val == null) {
            if (isRequiredStateElement("dVehicle.04") == - true) {
                V3XML.Attrib("dVehicle.04", NIL_V3NOT_RECORDED);
                OLAPXML.Node("VehicleType", "NOT RECORDED");
                PersonnelGroup["dVehicle.04"] = v3NOT_RECORDED;
                PersonnelGroup["VehicleType"] = v3NOT_RECORDED;
                _v2Array.push({ section: "D06", element: "D06_03", val: v2NOT_RECORDED });
            }
            else {
                V3XML.Attrib("dVehicle.04", NIL_V3NOT_REPORTING);
                OLAPXML.Node("VehicleType", "NOT REPORTING");
                PersonnelGroup["dVehicle.04"] = v3NOT_REPORTING;
                PersonnelGroup["VehicleType"] = v3NOT_REPORTING;
                _v2Array.push({ section: "D06", element: "D06_03", val: v2NOT_REPORTING });
            }
        }
        else {
            V3XML.Node("dVehicle.04", _val[0]);
            OLAPXML.Node("VehicleType", setCodeText("dVehicle.04", _val[t]));
            VehicleGroup["dVehicle.04"] = _val[0];
            VehicleGroup["VehicleType"] = setCodeText("dVehicle.04", _val[t]);
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
                V3XML.Node("dVehicle.05", null);
                OLAPXML.Node("CrewStateLicensureLevels", null);
                VehicleCertificationLevelsGroup["dVehicle.05"] = _val[0];
                VehicleCertificationLevelsGroup["CrewStateLicensureLevels"] = null;
                _v2Array.push({ section: "D06", element: "D06_04", val: null });
            }
            else {
                V3XML.Node("dVehicle.05", _val[0]);
                OLAPXML.Node("CrewStateLicensureLevels", setCodeText("dVehicle.04", _val[t]));
                VehicleCertificationLevelsGroup["dVehicle.05"] = _val[0];
                VehicleCertificationLevelsGroup["CrewStateLicensureLevels"] = setCodeText("dVehicle.04", _val[t]);
                _v2Array.push({ section: "D06", element: "D06_04", val: setV2("dVehicle.05", _val) });
            };

            //////////////////dVehicle.06
            _val = getValue(dVehicleObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dVehicle.06");
            if (_val == null) {
                V3XML.Node("dVehicle.06", null);
                OLAPXML.Node("NumberEMSPersonnelonNormal911", null);
                VehicleCertificationLevelsGroup["dVehicle.06"] = null;
                VehicleCertificationLevelsGroup["NumberEMSPersonnelonNormal911"] = null;
                _v2Array.push({ section: "D06", element: "D06_05", val: null });
            }
            else {
                V3XML.Node("dVehicle.06", _val[0]);
                OLAPXML.Node("NumberEMSPersonnelonNormal911", _val[0]);
                VehicleCertificationLevelsGroup["dVehicle.06"] = _val[0];
                VehicleCertificationLevelsGroup["NumberEMSPersonnelonNormal911"] = _val[0];
                _v2Array.push({ section: "D06", element: "D06_05", val: _val[0] });
            };

            //////////////////dVehicle.07
            _val = getValue(dVehicleObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dVehicle.07");
            if (_val == null) {
                V3XML.Node("dVehicle.07", null);
                OLAPXML.Node("NumberEMSPersonnelLevelNormal911ResponseNonTransport", null);
                VehicleCertificationLevelsGroup["dVehicle.07"] = null;
                VehicleCertificationLevelsGroup["NumberEMSPersonnelLevelNormal911ResponseNonTransport"] = null;
            }
            else {
                V3XML.Node("dVehicle.07", _val[0]);
                OLAPXML.Node("NumberEMSPersonnelLevelNormal911ResponseNonTransport", _val[0]);
                VehicleCertificationLevelsGroup["dVehicle.07"] = _val[0];
                VehicleCertificationLevelsGroup["NumberEMSPersonnelLevelNormal911ResponseNonTransport"] = _val[0];
            };

            //////////////////dVehicle.08
            _val = getValue(dVehicleObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dVehicle.08");
            if (_val == null) {
                V3XML.Node("dVehicle.08", null);
                OLAPXML.Node("NumberEMSPersonnelLevelNormal911ResponseTransport", null);
                VehicleCertificationLevelsGroup["dVehicle.08"] = null;
                VehicleCertificationLevelsGroup["NumberEMSPersonnelLevelNormal911ResponseTransport"] = null;

            }
            else {
                V3XML.Node("dVehicle.08", _val[0]);
                OLAPXML.Node("NumberEMSPersonnelLevelNormal911ResponseTransport", _val[0]);
                VehicleCertificationLevelsGroup["dVehicle.08"] = _val[0];
                VehicleCertificationLevelsGroup["NumberEMSPersonnelLevelNormal911ResponseTransport"] = _val[0];
            };

            OLAPXML.EndNode();
            V3XML.EndNode();
        };

        /////////////dVehicle.09
        _val = getValue(elementList, "dVehicle.09");
        if (_val == null) {
            V3XML.Node("dVehicle.09", null);
            OLAPXML.Node("VehicleInitialCost", null);
            VehicleGroup["dVehicle.09"] = null;
            VehicleGroup["VehicleInitialCost"] = null;
            _v2Array.push({ section: "D06", element: "D06_06", val: null });
        }
        else {
            V3XML.Node("dVehicle.09", null);
            OLAPXML.Node("VehicleInitialCost", null);
            VehicleGroup["dVehicle.09"] = null;
            VehicleGroup["VehicleInitialCost"] = null;
            _v2Array.push({ section: "D06", element: "D06_06", val: _val });
        };

        /////////////dVehicle.10
        _val = getValue(elementList, "dVehicle.10");
        if (_val == null) {
            if (isRequiredStateElement("dVehicle.10") == - true) {
                V3XML.BeginNode("dVehicle.10")
                V3XML.Attrib("dVehicle.10", NIL_V3NOT_RECORDED);
                OLAPXML.Node("ModelYear", "NOT RECORDED");
                VehicleGroup["ModelYear"] = v3NOT_RECORDED;
                VehicleGroup["dVehicle.10"] = v3NOT_RECORDED;
                _v2Array.push({ section: "D06", element: "D06_07", val: v2NOT_RECORDED });
            }
            else {
                V3XML.BeginNode("dVehicle.10")
                V3XML.Attrib("dVehicle.10", NIL_V3NOT_REPORTING);
                OLAPXML.Node("ModelYear", "NOT REPORTING");
                VehicleGroup["ModelYear"] = v3NOT_REPORTING;
                VehicleGroup["dVehicle.10"] = v3NOT_REPORTING;
                _v2Array.push({ section: "D06", element: "D06_07", val: v2NOT_REPORTING });
            }
        }
        else {
            V3XML.Node("dVehicle.10", _val[0]);
            OLAPXML.Node("ModelYear", _val[0]);
            VehicleGroup["dVehicle.10"] = _val[0];
            VehicleGroup["ModelYear"] = _val[0];
            _v2Array.push({ section: "D06", element: "D06_07", val: _val[0] });
        };

        _sectionIndex = getSectionIndex(dVehicleObject.attributes.sections[xx].attributes, "dVehicle.YearGroup");
        // console.log(_sectionIndex)


        for (var x = 0; x < _sectionIndex.length; x++) {

            OLAPXML.BeginNode("dVehicle.YearGroup")
            V3XML.BeginNode("dVehicle.YearGroup")

            _val = getValue(dVehicleObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dVehicle.11");
            if (_val == null) {
                V3XML.Node("dVehicle.11", null);
                OLAPXML.Node("MilesKilometersHoursAccrued", null);
                YearGroup["dVehicle.11"] = null;
                YearGroup["MilesKilometersHoursAccrued"] = null;
                _v2Array.push({ section: "D06", element: "D06_08", val: null });

            }
            else {
                V3XML.Node("dVehicle.11", _val[0]);
                OLAPXML.Node("MilesKilometersHoursAccrued", _val[0]);
                YearGroup["dVehicle.11"] = _val[0];
                YearGroup["MilesKilometersHoursAccrued"] = _val[0];
                _v2Array.push({ section: "D06", element: "D06_08", val: _val[0] });
            };

            _val = getValue(dVehicleObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dVehicle.12");
            if (_val == null) {
                V3XML.Node("dVehicle.12", null);
                OLAPXML.Node("AnnualVehicleHours", null);
                YearGroup["dVehicle.12"] = null;
                YearGroup["AnnualVehicleHours"] = null;
                _v2Array.push({ section: "D06", element: "D06_09", val: null });
            }
            else {
                V3XML.Node("dVehicle.12", _val[0]);
                OLAPXML.Node("AnnualVehicleHours", _val[0]);
                YearGroup["dVehicle.12"] = _val[0];
                YearGroup["AnnualVehicleHours"] = _val[0];
                _v2Array.push({ section: "D06", element: "D06_09", val: _val[0] });
            };


            //////////dVehicle.13
            _val = getValue(dVehicleObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dVehicle.13");
            if (_val == null) {
                V3XML.Node("dVehicle.13", null);
                OLAPXML.Node("AnnualVehicleMiles", null);
                YearGroup["dVehicle.13"] = null;
                YearGroup["AnnualVehicleMiles"] = null;
                _v2Array.push({ section: "D06", element: "D06_10", val: null });
            }
            else {
                V3XML.Node("dVehicle.13", _val[0]);
                OLAPXML.Node("AnnualVehicleMiles", _val[0]);
                YearGroup["dVehicle.13"] = _val[0];
                YearGroup["AnnualVehicleMiles"] = _val[0];
                _v2Array.push({ section: "D06", element: "D06_10", val: _val[0] });
            };
            OLAPXML.EndNode();
            V3XML.EndNode();
        };

        OLAPXML.EndNode();
        V3XML.EndNode();

    } // loop term
    OLAPXML.EndNode();
    V3XML.EndNode();

    //console.log(OLAPArrayString)
};    //end of function   

var isRequiredStateElement = function (elementID) {
    return true;
};
var getValue = function (elementList, valueObject)
{
    var _arr = [];
    for (var i = 0; i < elementList.length; i++)
    {
        if (elementList[i].attributes.title == valueObject)
        {
            if (elementList[i].attributes.value == undefined)
            {
                return null;
            }
            else
            {
                if (elementList[i].attributes.value.trim().length != 0)  //Can't trust data.  
                {
                    _arr.push(elementList[i].attributes.value);
                }
            }
        }
    };
    if (_arr.length == 0)
    {
        return null;  //handle nulls on an attribute-by attribute level
    }
    else
    {
        return _arr;
    }
};
function setV2(NEMSISElementNumber, v3Val) {

    var returnValue = "";
    switch (NEMSISElementNumber) {
        case "dAgency.09":
            if (dAgency09[v3Val] == undefined) {
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
                _returnValue = dConfiguration12[v3Val];
            }
            break;

        case "dFacility.01":

            if (dFacility01 == undefined) {
                returnValue = v3Val + "UNDEFINED";
            }
            else {
                returnValue = dFacility01[v3Val];
            }
            break;

        case "dLocation.01":

            if (dLocation01[v3Val] == undefined) {
                returnValue = v3Val + "UNDEFINED";
            }
            else {
                returnValue = dLocation01[v3Val];
            }
            break;

        case "dPersonnel.12":

            if (dPersonnel09CodeMap[v3Val] == undefined) {
                returnValue = v3Val + "UNDEFINED";
            }
            else {
                returnValue = dPersonnel09CodeMap[v3Val];
            }
            break;
        case "dPersonnel.10":
            if (dPersonnel10CodeMap[v3Val] == undefined) {
                returnValue = v3Val + "UNDEFINED";
            }
            else {
                returnValue = dPersonnel09CodeMap[v3Val];
            }
            break;
        case "dPersonnel.11":

            if (dPersonnel11CodeMap[v3Val] == undefined) {
                returnValue = v3Val + "UNDEFINED";
            }
            else {
                returnValue = dPersonnel11CodeMap[v3Val];
            }
            break;

        case "dVehicle.04":

            if (dVehicle04[v3Val] == undefined) {
                returnValue = v3Val + "UNDEFINED";
            }
            else {
                returnValue = dVehicle04[v3Val];
            }
            break;
        case "dVehicle.05":

            if (dVehicle05[v3Val] == undefined) {
                returnValue = v3Val + "UNDEFINED";
            }
            else {
                returnValue = dVehicle05[v3Val];
            }
            break;
        default:
            returnValue = NEMSISElementNumber + "  " + v3Val + " version 2 not found";

    }
    return returnValue;

}
function setCodeText(NEMSISElementNumber, codeVal) {
    var _return = "";
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
var dConfiguration12 = {
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
var createV2XML = function (V2XMLArray) {
    try {
        // alert("built version 2 Statistal year structure from Version 3");
        console.log(V2XMLArray)

        ////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////
        var XML = new XMLWriter();
        XML.BeginNode("D01");
        XML.Attrib("Status", "A");
        XML.Attrib("Date", "20147/12/11");

        //XML.WriteString("This is an example of the JS XML WriteString method.");        

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D01_01")
        if (d2Vals == null) {
            v2Array.push();
            ErrorList.push({ Version: "2.2.1", Severity: "1", ElementID: "D01_01", Description: "Agency Number Required" })
        }
        else {
            XML.Node("D01_01", d2Vals[0]);
        };

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D01_02")
        if (d2Vals != null) {
            XML.Node("D01_02", d2Vals[0]);
        };

        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D01_03")
        if (d2Vals == null) {
            ErrorList.push({ Version: "2.2.1", Severity: "1", ElementID: "D01_03", Description: "Agency State Required" })
        }
        else {
            for (var i = 0; i < d2Vals.length; i++) {
                XML.Node("D01_03", d2Vals[i]);
            };
        };


        d2Vals = [];
        console.log("D01_04 NOT Chars.  Need two digit FIPS Codes");
        d2Vals = getV2Values(V2XMLArray, "D01_04")
        if (d2Vals == null) {
            ErrorList.push({ Version: "2.2.1", Severity: "1", ElementID: "D01_04", Description: "Agency County Required" })
        }
        else {
            for (var i = 0; i < d2Vals.length; i++) {
                XML.Node("D01_04", d2Vals[i]);
            };
        };


        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D01_05")
        if (d2Vals != null) {
            XML.Node("D01_05", d2Vals[0]);
        };

        //alert("D106 not found");
        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D01_06")
        if (d2Vals != null) {
            for (var i = 0; i < d2Vals.length; i++) {
                XML.Node("D01_06", d2Vals[i]);
            };
        };

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D01_07")
        if (d2Vals == null) {
            v2Array.push();
            ErrorList.push({ Version: "2.2.1", Severity: "1", ElementID: "D01_07", Description: "Level of Service Required" })
        }
        else {
            XML.Node("D01_07", d2Vals[0]);
        }

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D01_08")
        if (d2Vals == null) {
            v2Array.push();
            ErrorList.push({ Version: "2.2.1", Severity: "1", ElementID: "D01_08", Description: "Organizational Type Required" })
        }
        else {
            XML.Node("D01_08", d2Vals[0]);
        };

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D01_09")
        if (d2Vals == null) {
            v2Array.push();
            ErrorList.push({ Version: "2.2.1", Severity: "1", ElementID: "D01_08", Description: "Organizational Status Required" })
        }
        else {
            XML.Node("D01_09", d2Vals[0]);
        };

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D01_10")
        if (d2Vals == null) {
            v2Array.push();
            ErrorList.push({ Version: "2.2.1", Severity: "1", ElementID: "D01_08", Description: "Statistical Year Required" })
        }
        else {
            XML.Node("D01_10", d2Vals[0]);
        };

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D01_11")
        if (d2Vals == null) {
            XML.Node("D01_11", null);
        }
        else {
            XML.Node("D01_11", d2Vals[0]);
        };

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D01_12")
        if (d2Vals == null) {
            XML.Node("D01_12", "");
        }
        else {
            for (var i = 0; i < d2Vals.length; i++) {
                XML.Node("D01_12", d2Vals[i]);
            };
        };

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D01_13")
        if (d2Vals == null) {
            XML.Node("D01_13", "");
        }
        else {
            for (var i = 0; i < d2Vals.length; i++) {
                XML.Node("D01_13", d2Vals[i]);
            };
        };

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D01_14")
        if (d2Vals == null) {
            XML.Node("D01_14", "");
        }
        else {
            for (var i = 0; i < d2Vals.length; i++) {
                XML.Node("D01_14", d2Vals[i]);
            };
        };

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D01_15")
        if (d2Vals == null) {
            XML.Node("D01_15", "");
        }
        else {
            for (var i = 0; i < d2Vals.length; i++) {
                XML.Node("D01_15", d2Vals[i]);
            };
        };

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D01_16")
        if (d2Vals == null) {
            XML.Node("D01_16", "");
        }
        else {
            for (var i = 0; i < d2Vals.length; i++) {
                XML.Node("D01_16", d2Vals[i]);
            };
        };

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D01_17")
        if (d2Vals == null) {
            XML.Node("D01_17", "");
        }
        else {
            for (var i = 0; i < d2Vals.length; i++) {
                XML.Node("D01_17", d2Vals[i]);
            };
        };

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D01_18")
        if (d2Vals == null) {
            XML.Node("D01_18", "");
        }
        else {
            for (var i = 0; i < d2Vals.length; i++) {
                XML.Node("D01_18", d2Vals[i]);
            };
        };


        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D01_19")
        if (d2Vals == null) {
            ErrorList.push({ Version: "2.2.1", Severity: "1", ElementID: "D01_01", Description: "Agency Time Zone Required" })
        }
        else {
            XML.Node("D01_19", d2Vals[0]);
        };

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D01_20")
        if (d2Vals != null) {
            XML.Node("D01_20", d2Vals[0]);
        };

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D01_21")
        if (d2Vals == null) {
            XML.Node("D01_21", null);
        }
        else {
            XML.Node("D01_21", d2Vals[0]);
        };
        XML.EndNode();
        ////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////
        XML.BeginNode("D02");
        XML.Attrib("Status", "A");
        XML.Attrib("Date", "");

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D02_01")
        if (d2Vals != null) {
            XML.Node("D02_01", d2Vals[0]);
        };

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D02_02")
        if (d2Vals == null) {
            XML.Node("D02_02", null);
        }
        else {
            XML.Node("D02_02", d2Vals[0]);
        };

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D02_03")
        if (d2Vals == null) {
            XML.Node("D02_03", null);
        }
        else {
            XML.Node("D02_03", d2Vals[0]);
        };

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D02_04")
        if (d2Vals == null) {
            XML.Node("D02_04", null);
        }
        else {
            XML.Node("D02_04", d2Vals[0]);
        };

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D02_05")
        if (d2Vals == null) {
            XML.Node("D02_05", null);
        }
        else {
            XML.Node("D02_05", d2Vals[0]);
        };

        console.log("d206 not state Abbrev")
        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D02_06")
        if (d2Vals == null) {
            XML.Node("D02_06", null);
        }
        else {
            XML.Node("D02_06", d2Vals[0]);
        };

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D02_07")
        if (d2Vals == null) {
            v2Array.push();
            ErrorList.push({ Version: "2.2.1", Severity: "1", ElementID: "D02_07", Description: "Agency Contact Zip Code Required" })
        }
        else {
            XML.Node("D02_07", d2Vals[0]);
        };

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D02_08")
        if (d2Vals == null) {
            XML.Node("D02_08", null);
        }
        else {
            XML.Node("D02_08", d2Vals[0]);
        };

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D02_09")
        if (d2Vals == null) {
            XML.Node("D02_09", null);
        }
        else {
            XML.Node("D02_09", d2Vals[0]);
        };

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D02_10")
        if (d2Vals == null) {
            XML.Node("D02_10", null);
        }
        else {
            XML.Node("D02_10", d2Vals[0]);
        };

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D02_11")
        if (d2Vals == null) {
            XML.Node("D02_11", null);
        }
        else {
            XML.Node("D02_11", d2Vals[0]);
        };

        XML.EndNode();
        ////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////
        XML.BeginNode("D03");
        XML.Attrib("Status", "A");
        XML.Attrib("Date", "");

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D03_01")
        if (d2Vals != null) {
            XML.Node("D03_01", d2Vals[0]);
        };

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D03_02")
        if (d2Vals == null) {
            XML.Node("D03_02", null);
        }
        else {
            XML.Node("D03_02", d2Vals[0]);
        };

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D03_03")
        if (d2Vals == null) {
            XML.Node("D03_03", null);
        }
        else {
            XML.Node("D03_03", d2Vals[0]);
        };

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D03_04")
        if (d2Vals == null) {
            XML.Node("D03_04", null);
        }
        else {
            XML.Node("D03_04", d2Vals[0]);
        };


        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D03_05")
        if (d2Vals == null) {
            XML.Node("D03_05", null);
        }
        else {
            XML.Node("D03_05", d2Vals[0]);
        };

        // alert("FIPS not State Abbrev")
        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D03_06")
        if (d2Vals == null) {
            6
            XML.Node("D03_06", null);
        }
        else {
            XML.Node("D03_06", d2Vals[0]);
        };

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D03_07")
        if (d2Vals == null) {
            6
            XML.Node("D03_07", null);
        }
        else {
            XML.Node("D03_07", d2Vals[0]);
        };

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D03_08")
        if (d2Vals == null) {
            6
            XML.Node("D03_08", null);
        }
        else {
            XML.Node("D03_08", d2Vals[0]);
        };

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D03_09")
        if (d2Vals == null) {
            6
            XML.Node("D03_09", null);
        }
        else {
            XML.Node("D03_09", d2Vals[0]);
        };

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D03_10")
        if (d2Vals == null) {
            6
            XML.Node("D03_10", null);
        }
        else {
            XML.Node("D03_10", d2Vals[0]);
        };

        var d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D03_11")
        if (d2Vals == null) {
            6
            XML.Node("D03_11", null);
        }
        else {
            XML.Node("D03_11", d2Vals[0]);
        };

        XML.EndNode();
        ////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////
        XML.BeginNode("D04");
        XML.Attrib("Status", "A");
        XML.Attrib("Date", "");


        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D04_01")
        if (d2Vals != null) {
            for (var i = 0; i < d2Vals.length; i++) {
                XML.Node("D04_01", d2Vals[i]);
            };
        };

        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D04_02")
        if (d2Vals != null) {
            for (var i = 0; i < d2Vals.length; i++) {
                XML.Node("D04_02", d2Vals[i]);
            };
        };

        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D04_03")
        if (d2Vals != null) {
            for (var i = 0; i < d2Vals.length; i++) {
                XML.Node("D04_03", d2Vals[i]);
            };
        };

        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D04_04")
        if (d2Vals != null) {
            for (var i = 0; i < d2Vals.length; i++) {
                XML.Node("D04_04", d2Vals[i]);
            };
        };

        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D04_05")
        if (d2Vals != null) {
            for (var i = 0; i < d2Vals.length; i++) {
                XML.Node("D04_05", d2Vals[i]);
            };
        };


        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D04_06")
        if (d2Vals != null) {
            for (var i = 0; i < d2Vals.length; i++) {
                XML.Node("D04_06", d2Vals[i]);
            };
        };

        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D04_07")
        if (d2Vals != null) {
            for (var i = 0; i < d2Vals.length; i++) {
                XML.Node("D04_07", d2Vals[i]);
            };
        };

        // alert("create Group ala dConfigurations")
        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D04_09")
        if (d2Vals != null) {
            for (var i = 0; i < d2Vals.length; i++) {
                XML.Node("D04_09", d2Vals[i]);
            };
        };

        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D04_10")
        if (d2Vals != null) {
            for (var i = 0; i < d2Vals.length; i++) {
                XML.Node("D04_10", d2Vals[i]);
            };
        };

        //  alert("create Group ala dConfigurations")
        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D04_11")
        if (d2Vals != null) {
            for (var i = 0; i < d2Vals.length; i++) {
                XML.Node("D04_11", d2Vals[i]);
            };
        };

        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D04_12")
        if (d2Vals == null) {
            XML.Node("D04_12", null);
        }
        else {
            for (var i = 0; i < d2Vals.length; i++) {
                XML.Node("D04_12", d2Vals[i]);
            };
        };

        //  alert("create Group ala dConfigurations")
        // For group size
        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D04_13")
        if (d2Vals != null) {
            for (var i = 0; i < d2Vals.length; i++) {
                XML.Node("D04_13", d2Vals[i]);
            };
        };

        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D04_14")
        if (d2Vals != null) {
            for (var i = 0; i < d2Vals.length; i++) {
                XML.Node("D04_14", d2Vals[i]);
            };
        };

        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "D04_15")
        if (d2Vals != null) {
            for (var i = 0; i < d2Vals.length; i++) {
                XML.Node("D04_15", d2Vals[i]);
            };
        };


        XML.Close(); // Takes care of unended tags.
        // The replace in the following line are only for making the XML look prettier in the textarea.
        // document.getElementById("ExampleOutput").value = XML.ToString().replace(/</g, "\n<");
        console.log(XML.ToString())

    }
    catch (Err) {
        //  alert("Error: " + Err.description);
    }
    return false;
};

function JSettings() {
    this.IE = document.all ? true : false;
    this.MouseX = _JSettings_MouseX;
    this.MouseY = _JSettings_MouseY;
    this.SrcElement = _JSettings_SrcElement;
    this.Parent = _JSettings_Parent;
    this.RunOnLoad = _JSettings_RunOnLoad;
    this.FindParent = _JSettings_FindParent;
    this.FindChild = _JSettings_FindChild;
    this.FindSibling = _JSettings_FindSibling;
    this.FindParentTag = _JSettings_FindParentTag;
}
function _JSettings_MouseX(e)
{ return this.IE ? event.clientX : e.clientX; }
function _JSettings_MouseY(e)
{ return this.IE ? event.clientY : e.clientY; }
function _JSettings_SrcElement(e)
{ return this.IE ? event.srcElement : e.target; }
function _JSettings_Parent(Node)
{ return this.IE ? Node.parentNode : Node.parentElement; }
function _JSettings_RunOnLoad(Meth) { var Prev = (window.onload) ? window.onload : function () { }; window.onload = function () { Prev(); Meth(); }; }
function _JSettings_FindParent(Node, Attrib, Value) {
    var Root = document.getElementsByTagName("BODY")[0];
    Node = Node.parentNode; while (Node != Root && Node.getAttribute(Attrib) != Value) { Node = Node.parentNode; }
    if (Node.getAttribute(Attrib) == Value) { return Node; } else { return null; }
}
function _JSettings_FindParentTag(Node, TagName) {
    var Root = document.getElementsByTagName("BODY")[0];
    TagName = TagName.toLowerCase();
    Node = Node.parentNode; while (Node != Root && Node.tagName.toLowerCase() != TagName) { Node = Node.parentNode; }
    if (Node.tagName.toLowerCase() == TagName) { return Node; } else { return null; }
}
function _JSettings_FindChild(Node, Attrib, Value) {
    if (Node.getAttribute)
        if (Node.getAttribute(Attrib) == Value) return Node;

    var I = 0;
    var Ret = null;
    for (I = 0; I < Node.childNodes.length; I++) {
        Ret = FindChildByAttrib(Node.childNodes[I]);
        if (Ret) return Ret;
    }
    return null;
}
function _JSettings_FindSibling(Node, Attrib, Value) {
    var Nodes = Node.parentNode.childNodes;
    var I = 0;
    for (I = 0; I < Nodes.length; I++) {
        if (Nodes[I].getAttribute) {
            if (Nodes[I].getAttribute(Attrib) == Value)
            { return Nodes[I]; }
        }
    }
    return null;
}

var Settings = new JSettings();

function XMLWriter() {

    this.XML = [];
    this.Nodes = [];
    this.State = "";
    this.FormatXML = function (Str) {
        if (Str)
            return Str.replace(/&/g, "&amp;").replace(/\"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        return ""
    }
    this.BeginNode = function (Name) {
        if (!Name) return;
        if (this.State == "beg") this.XML.push(">");
        this.State = "beg";
        this.Nodes.push(Name);
        this.XML.push("<" + Name);
    }
    this.EndNode = function () {
        if (this.State == "beg") {

            if (this.Att != undefined) {

                this.XML.push(this.Att + ">");
            }
            else {
                this.XML.push("/>");
                this.Nodes.pop();
            }
        }
        else if (this.Nodes.length > 0)
            this.XML.push("</" + this.Nodes.pop() + ">");
        this.State = "";
    }
    this.Attrib = function (Name, Value) {
        if (this.State != "beg" || !Name) return;
        this.XML.push(" " + Name + "=\"" + this.FormatXML(Value) + "\"");
    }
    this.AttribNoEQ = function (Name, Value) {
        if (this.State != "beg" || !Name) return;
        this.Att = this.Name
        this.XML.push(" " + Name + "\"" + this.FormatXML(Value) + "\"");
    }

    this.WriteString = function (Value) {
        if (this.State == "beg") this.XML.push(">");
        this.XML.push(this.FormatXML(Value));
        this.State = "";
    }
    this.Node = function (Name, Value) {
        if (!Name) return;
        if (this.State == "beg") this.XML.push(">");
        this.XML.push((Value == "" || !Value) ? "<" + Name + "/>" : "<" + Name + ">" + this.FormatXML(Value) + "</" + Name + ">");
        this.State = "";
    }
    this.Close = function () {
        while (this.Nodes.length > 0)
            this.EndNode();
        this.State = "closed";
    }
    this.ToString = function () { return this.XML.join(""); }
}




var getV2Values = function (v2ObjectList, ElementName) {
    var _arr = [];
    for (var i = 0; i < v2ObjectList.length; i++)  // go through every object
    {
        //  console.log(v2ObjectList[i].element + " " + ElementName)
        if (v2ObjectList[i].element == ElementName)  //if the object is found in the list
        {

            if (v2ObjectList[i].val instanceof Array)  // is the object an array?
            {
                for (var j = 0; j < v2ObjectList[i].val.length; j++)  //add values to array
                {
                    if (v2ObjectList[i].val != null) {
                        _arr.push(v2ObjectList[i].val[j]);
                    }
                }
            }
            else  //if not an array, add it to return array
            {
                _arr.push(v2ObjectList[i].val);
            }

        }
    }
    console.log(ElementName, _arr.length)

    return _arr;
};