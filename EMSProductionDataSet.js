var ErrorList = [];
var v3NOT_REPORTING =   "7701005";
var v3NOT_RECORDED =    "7701003";
var v3NOT_APPLICABLE=   "7701001";
var v2NOT_AVAILABLE =   "-5";
var v2NOT_KNOWN =       "-10";
var v2NOT_REPORTING =   "-15";
var v2NOT_RECORDED =    "-20";
var v2NOT_APPLICABLE =  "-25"

var NOT_RECORDED =          "NOT RECORDED";
var NOT_REPORTING =         "NOT REPORTING";
var NOT_APPLICABLE =        "NOT APPLICABLE";
var NIL_V3NOT_APPLICABLE =  "\"7701001\" xsi:nil=\"true\"";
var NIL_V3NOT_RECORDED =    "\"7701003\" xsi:nil=\"true\"";
var NIL_V3NOT_REPORTING =   "\"7701005\" xsi:nil=\"true\"";


var PN_FINDING_NOT_PRESENT_IS_NILLABLE  =   "xsi:nil=\"true\"\"8801005\"";
var PN_NONE_REPORTED_IS_NILLABLE =                      "xsi:nil=\"true\"\"8801015\"";
var PN_REFUSED_IS_NILLABLE =                "xsi:nil=\"true\"\"8801019\"";
var PN_NONE_UNRESPONSIVE_IS_NILLABLE =                  "xsi:nil=\"true\"\"8801021\"";
var PN_UNABLE_TO_COMPLETE_IS_NILLABLE =     "xsi:nil=\"true\"\"8801013\"";

var PN_FINDING_NOT_PRESENT_NOT_NILLABLE  =   "\"8801005\"";
var PN_NONE_REPORTED_NOT_NILLABLE =          "\"8801015\"";
var PN_REFUSED_NOT_NILLABLE =                "\"8801019\"";
var PN_NONE_UNRESPONSIVE_NOT_NILLABLE =      "\"8801021\"";
var PN_UNABLE_TO_COMPLETE_NOT_NILLABLE =     "\"8801013\"";
var XMLString = ""

var Call = new Object();
//  Call["IsEmergant"] ;
//  Call["is911Call"]
////////////////////////////////////////////////////

var setEMSObjects = function (parseObject)
{
    //console.log(parseObject)
    var eDispatch = new Object();
   /*
    eDispatchObject = getObjectFromOLTPExtract(parseObject, "eDispatch")
    if (eDispatchObject != 'undefined') 
    {
        var _DispatchObject = new Object();
        //console.log(eDispatchObject)
        
        //_DispatchObject = seteDispatch(eDispatchObject);
        //console.log(_DispatchObject);
    };
    eDispositionObject = getObjectFromOLTPExtract(parseObject, "eDisposition")
    if (eDispositionObject != 'undefined')
    {
        var _eDispositionObject = new Object();
        _eDispositionObject = seteDisposition(eDispositionObject)
    }
       
    
};
var getObjectFromOLTPExtract = function (businessObject, sectionName)
{
    //Returns an array of index values for a given sectionName within a sectionObject
    // if sectionName does not exist within the sectionObject, return -1

    var _retValue = new Object();
    _retValue = "undefined"
    for (var d = 0; d < businessObject.attributes.sections.length; d++) {
        if (businessObject.attributes.sections[d].attributes.name == sectionName) {
            _retValue = businessObject.attributes.sections[d];
        }
    };
    return _retValue;
};
var getSectionIndex = function (sectionObject, sectionName){
    //Returns an array of index values for a given sectionName within a sectionObject
    // if sectionName does not exist within the sectionObject, return -1
    console.log("sectionObject")
    console.log(sectionObject)
    var _retValue = [];
    for (var d = 0; d < sectionObject.attributes.sections.length; d++)
    {
        console.log(sectionObject.attributes.sections[d].attributes.name)
        if (sectionObject.attributes.sections[d].attributes.name == sectionName)
        {
            _retValue.push(d);
        }
    }
    if (_retValue.length == 0) {
        _retValue.push(-1);
    };
    return _retValue;
};
var seteDispatch = function (eDispatchObject){
/*
    var v2Array = new Array();
    var eDispatch = new Object();
    var XML = new XMLWriter();
    XML.BeginNode("eDispatch")
    //eDispatch.01/////////
    
  
    //Determine if an eAirway, eCardiac, eArrest, eReponse event occured.  If Yes, Dispatch Mandatory
    //If No, NOT APPLICABLE
    
    

    var _elementList = []
    _elementList = eDispatchObject.attributes.elements;
    console.log(_elementList)
    var _dispatch = new Object();
    _dispatch = getValue(_elementList, "eDispatch.01");
    console.log(_dispatch)

    if (_dispatch.IsNull = true) {
        ErrorList.push("eDispatch.01 MANDATORY Element");
        eDispatch["eDispatch.01"] = null;
        v2Array.push({ section: "E03", element: "E03_01", val: null });
    }
    else
    {
        _val = _dispatch.ValueArray[0].val;
        eDispatch["ComplaintReportedbyDispatch"] = setCodeText("eDispatch.01", _val);
        eDispatch["eDispatch.01"] = _val;
        v2Array.push({ section: "E03", element: "E03_01", val: setV2("eDispatch.01", _val) });
        XML.Node("eDispatch.01", _val);
    };
   
    _dispatch = getValue(_elementList, "eDispatch.02");
    Call["Is911Call"] = false;
    if (Call.IsCancelled == true)
    {
        if (_dispatch.IsNull = true)
        {
            v2Array.push({ section: "E03", element: "E03_02", val: v2NOT_RECORDED });
            eDispatch["eDispatch.02"] = v3NOT_RECORDED;
            eDispatch["EMDPerformed"] = v3NOT_RECORDED;
            XML.BeginNode("eDispatch.02");
            XML.Attrib("NV", NIL_V3NOT_RECORDED);
            XML.EndNode();
        }    
        else 
        {
            _val = _dispatch.ValueArray[0].val;
            XML.Node("eDispatch.02", _val);

            eDispatch["eDispatch.02"] = _val;
            eDispatch["EMDPerformed"] = setCodeText("eDispatch.02", _val);
            v2Array.push({ section: "E03", element: "E03_02", val: setV2("eDispatch.02", _val) });
            if (_val != "2302001")
            {
                Call["Is911Call"] = true;
            }
        }
    }
    else
    {
        v2Array.push({ section: "E03", element: "E03_02", val: v2NOT_APPLICABLE });
        eDispatch["eDispatch.02"] = v3NOT_APPLICABLE;
        eDispatch["EMDPerformed"] = v3NOT_APPLICABLE;
        XML.BeginNode("eDispatch.02");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();
    };


    /////eDispatch.03////////////////////
    _dispatch = getValue(_elementList, "eDispatch.03");  
    if (_dispatch.IsNull = true)
    {
        XML.Node("eDispatch.03", "");
        eDispatch["eDispatch.03"] = null;
        eDispatch["EMDCardNumber"] = null;
        v2Array.push({ section: "E03", element: "E03_03", val: null });
    }
    else
    {
        _val = _dispatch.ValueArray[0].val;
        XML.Node("eDispatch.03", _val);
        eDispatch["eDispatch.03"] = _val;
        eDispatch["EMDCardNumber"] = _val;
        v2Array.push({ section: "E03", element: "E03_03", val: _val });
    };


    /////eDispatch.04////////////////////
   
    _dispatch = getValue(_elementList, "eDispatch.04");
    if (_dispatch.IsNull = true)
    {
        XML.Node("eDispatch.04", "");
        eDispatch["eDispatch.04"] = null;
        eDispatch["DispatchCenterNameorID"] = null;
    }
    else
    {
        _val = _dispatch.ValueArray[0].val;
        XML.Node("eDispatch.04", _val);
        eDispatch["eDispatch.04"] = _val;
        eDispatch["DispatchCenterNameorID"] = _val;
    };


    /////eDispatch.05////////////////////
    Call["isEmergent"] = false;

    _val = getValue(_elementList, "eDispatch.03");
    if (_dispatch.IsNull = true)
    {
        XML.Node("eDispatch.05", "");
        eDispatch["eDispatch.05"] = null;
        eDispatch["DispatchPriority"] = null;
    }
    else
    {
        _val = _dispatch.ValueArray[0].val;

        if (_val <= "2305003") {
            Call["IsEmergant"] = true;
        };
        if (_val > "2305003") {
            Call["IsEmergant"] = false;
        };

        if (_val == "2305007") {
            Call["IsStandBy"] = true;
        }
        else {
            Call["IsStandBy"] = false;
        };

        XML.Node("eDispatch.05", _val);
        eDispatch["eDispatch.05"] = _val;
        eDispatch["DispatchPriority"] = setCodeText("eDispatch.05", _val);
    };

    XML.EndNode();
    eDispatch.XML = XML;
    console.log(eDispatch.XML.ToString())

    eDispatch.V2Array = v2Array;
    */
    return eDispatch;
};
var seteDisposition = function (eDispositionObject)
{
    /*
    var v2Array = [];
    var HospitalTeamActivationGroupArray = new Array();
    var eDisposition = new Object();
    var eHospitalTeamActivationGroup = new Object();
    var HospitalTeamActivationGroup = new Object();

    var XML = new XMLWriter();
    var OXML = new XMLWriter();
    XML.BeginNode("eDisposition")
    OXML.BeginNode("eDisposition")

    _elementList = eDispositionObject.attributes.elements;
    _destinationElementList = eDispositionObject.attributes.sections[0].attributes.elements;

 
    console.log(_destinationElementList)

    var _dispo = new Object()

    _dispo = getValue(_elementList, "eDisposition.12");
    if (_dispo.IsNull == true)
    {
        Call.IsValid = false;
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eDisposition.12", Description: "Incident/Patient Disposition Mandatory" })
    }
    else
    {
        _val = _dispo.ValueArray[0].val;
        eDisposition["eDisposition.12"] = _val;
        eDisposition["IncidentPatientDisposition"] = setCodeText("eDisposition.12", _val);
        v2Array.push({ section: "E20", element: "E20_10", val: setV2("eDisposition.12", _val) });

        XML.Node("eDisposition.12", _val);
        OXML.Node("IncidentPatientDisposition", setCodeText("eDisposition.12", _val));

        switch (_val.toString()) {
            case "4212001":
                Call["IsCancelled"] = false;
                Call["HasPatient"] = false;
                Call["HasTreatment"] = false;
                Call["HasTransport"] = false;
                break;
            case "4212003":
                Call["IsCancelled"] = false;
                Call["HasPatient"] = false;
                Call["HasTreatment"] = false;
                Call["HasTransport"] = false;
                break;
            case "4212005":
                Call["IsCancelled"] = false;
                Call["HasPatient"] = false;
                Call["HasTreatment"] = false;
                Call["HasTransport"] = false;
                break;
            case "4212007":
                Call["IsCancelled"] = true;
                Call["HasPatient"] = false;
                Call["HasTreatment"] = false;
                Call["HasTransport"] = false;
                break;
            case "4212009":
                Call["IsCancelled"] = true;
                Call["HasPatient"] = false;
                Call["HasTreatment"] = false;
                Call["HasTransport"] = false;
                break;
            case "4212011":
                Call["IsCancelled"] = false;
                Call["HasPatient"] = false;
                Call["HasTreatment"] = false;
                Call["HasTransport"] = false;
                break;
            case "4212013":
                Call["IsCancelled"] = false;
                Call["HasPatient"] = true;
                Call["HasTreatment"] = false;
                Call["HasTransport"] = true;
                break;
            case "4212015":
                Call["IsCancelled"] = false;
                Call["HasPatient"] = false;
                Call["HasTreatment"] = false;
                Call["HasTransport"] = false;
                break;

            case "4212017":
                Call["IsCancelled"] = false;
                Call["HasPatient"] = true;
                Call["HasTreatment"] = true;
                Call["HasTransport"] = true;
                break;
            case "4212019":
                Call["IsCancelled"] = false;
                Call["HasPatient"] = false;
                Call["HasTreatment"] = true;
                Call["HasTransport"] = false;
                break;
            case "4212021":
                Call["IsCancelled"] = false;
                Call["HasPatient"] = false;
                Call["HasTreatment"] = false;
                Call["HasTransport"] = false;
                break;
            case "4212023":
                Call["IsCancelled"] = false;
                Call["HasPatient"] = false;
                Call["HasTreatment"] = false;
                Call["HasTransport"] = true;
                break;
            case "4212025":
                Call["IsCancelled"] = false;
                Call["HasPatient"] = false;
                Call["HasTreatment"] = false;
                Call["HasTransport"] = false;
                break;
            case "4212027":
                Call["IsCancelled"] = false;
                Call["HasPatient"] = false;
                Call["HasTreatment"] = true;
                Call["HasTransport"] = false;
                break;
            case "4212029":
                Call["IsCancelled"] = false;
                Call["HasPatient"] = false;
                Call["HasTreatment"] = true;
                Call["HasTransport"] = false;
                break;
            case "4212031":
                Call["IsCancelled"] = false;
                Call["HasPatient"] = false;
                Call["HasTreatment"] = true;
                Call["HasTransport"] = false;
                break;
            case "4212033":
                Call["IsCancelled"] = false;
                Call["HasPatient"] = true;
                Call["HasTreatment"] = true;
                Call["HasTransport"] = true;
                break;
            case "4212035":
                Call["IsCancelled"] = false;
                Call["HasPatient"] = false;
                Call["HasTreatment"] = true;
                Call["HasTransport"] = false;
                break;
            case "4212037":
                Call["IsCancelled"] = false;
                Call["HasPatient"] = false;
                Call["HasTreatment"] = true;
                Call["HasTransport"] = false;
                break;
            case "4212039":
                Call["IsCancelled"] = false;
                Call["HasPatient"] = false;
                Call["HasTreatment"] = false;
                Call["HasTransport"] = false;
                break;
            case "4212041":
                Call["IsCancelled"] = false;
                Call["HasPatient"] = false;
                Call["HasTreatment"] = false;
                Call["HasTransport"] = false;
                break;
            case "4212043":
                Call["IsCancelled"] = false;
                Call["HasPatient"] = false;
                Call["HasTreatment"] = false;
                Call["HasTransport"] = true;
                break;
            default:
        }
    };

    //eDisposition.01////
    _dispo = getValue(_destinationElementList, "eDisposition.01");
    if (Call.HasTransport == true) //if have a transport 
    {
        if (_dispo.IsNull == true)
        {
            if (isRequiredStateElement("eDisposition.01") == true)
            {
                XML.BeginNode("eDisposition.01");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();
                eDisposition["eDisposition.01"] = v3NOT_RECORDED;
                eDisposition["TransferredToName"] = v3NOT_RECORDED;

                OXML.Node("TransferredToName", NOT_RECORDED);

                v2Array.push({ section: "E20", element: "E20_01", val: v2NOT_RECORDED });
            }
            else {
                eDisposition["eDisposition.01"] = v3NOT_REPORTING;
                eDisposition["TransferredToName"] = v2NOT_REPORTING;
                v2Array.push({ section: "E20", element: "E20_01", val: v2NOT_REPORTING });

                XML.BeginNode("eDisposition.01");
                XML.Attrib("NV", NIL_V3NOT_REPORTING);
                XML.EndNode();

                OXML.Node("TransferredToName", NOT_REPORTING);
            }
        }
        else
        {
            _val = _dispo.ValueArray[0].val;
            console.log(_val)

            v2Array.push({ section: "E20", element: "E20_01", val: _val });
            eDisposition["eDisposition.01"] = _val;
            eDisposition["TransferredToName"] = _val;
            XML.Node("eDisposition.01", _val);
            OXML.Node("TransferredToName", _val);
        }
    }
    else {
        if (_dispo.IsNull ==false ) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.01", Description: "Transport Desitination with No Transport Record " })
        };

        v2Array.push({ section: "E20", element: "E20_01", val: v2NOT_APPLICABLE });
        eDisposition["eDisposition.01"] = v3NOT_APPLICABLE;
        eDisposition["TransferredToName"] = v3NOT_APPLICABLE;

        XML.BeginNode("eDisposition.01");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("TransferredToName", NOT_APPLICABLE);
    };

    console.log(eDisposition)

    //eDisposition.02////
    _dispo = getValue(_destinationElementList, "eDisposition.02");
    console.log(_dispo)
    if (Call.HasTransport == true) //if have a transport, forgot the data, 
    {
        if (_dispo.IsNull == true)
        {
            if (isRequiredStateElement("eDisposition.02") == true)
            {
                eDisposition["eDisposition.02"] = v3NOT_RECORDED;
                eDisposition["TransferredToCode"] = v3NOT_RECORDED;
                v2Array.push({ section: "E20", element: "E20_02", val: v2NOT_RECORDED });

                XML.BeginNode("eDisposition.02");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("TransferredToCode", NOT_RECORDED);
            }
            else
            {
                eDisposition["TransferredToCode"] = v2NOT_REPORTING;
                eDisposition["eDisposition.02"] = v2NOT_REPORTING;
                v2Array.push({ section: "E20", element: "E20_02", val: v2NOT_REPORTING });

                XML.BeginNode("eDisposition.02");
                XML.Attrib("NV", NIL_V3NOT_REPORTING);
                XML.EndNode();

                OXML.Node("TransferredToCode", NOT_REPORTING);
            }
        }
        else
        {
            console.log(_dispo.ValueArray[0])
            _val = _dispo.ValueArray[0].val;

            eDisposition["eDisposition.02"] = _val;
            eDisposition["TransferredToCode"] = _val;
            v2Array.push({ section: "E20", element: "E20_02", val: _val });

            XML.Node("eDisposition.02", _val);
            OXML.Node("TransferredToCode", _val);
        }
    }
    else
    {
        if (_dispo.IsNull == true)
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.02", Description: "Transport Desitination with No Transport Record " })
        };

        eDisposition["eDisposition.02"] = v3NOT_APPLICABLE;
        eDisposition["TransferredToCode"] = v3NOT_APPLICABLE;
        v2Array.push({ section: "E20", element: "E20_02", val: v2NOT_APPLICABLE });

        XML.BeginNode("eDisposition.02");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("TransferredToCode", NOT_APPLICABLE);
    };

    
    //eDisposition.03////
    _dispo = getValue(_destinationElementList, "eDisposition.03");
    if (Call.HasTransport == true) //if have a transport, and Is Required Data 
    {
        if (_dispo.IsNull == true)
        {
            if (isRequiredStateElement("eDisposition.03") == true)
            {
                ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.03", Description: "Transport Address Required" })
            };

            eDisposition["eDisposition.03"] = null;
            eDisposition["Address"] = null;
            v2Array.push({ section: "E20", element: "E20_02", val: null });
            XML.Node("eDisposition.03", "");
            OXML.Node("Address", "");
        };
    }
    else
    {
        if (_dispo.IsNull == true)
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.03", Description: "Transport Address/Transport Type Conflict" })
        };
        _val = _dispo.ValueArray[0].val;

        eDisposition["eDisposition.03"] = _val;
        eDisposition["Address"] = _val;
        v2Array.push({ section: "E20", element: "E20_02", val: _val });
        XML.Node("eDisposition.03", _val);
        OXML.Node("Address", _val);
    };


    //eDisposition.04////
    _dispo = getValue(_destinationElementList, "eDisposition.04");
    if (Call.HasTransport == true) //if have a transport, forgot the data, 
    {
        if (_dispo.IsNull == true)
        {
            eDisposition["eDisposition.04"] = null;
            eDisposition["City"] = null;
            v2Array.push({ section: "E20", element: "E20_04", val: null });
            XML.Node("eDisposition.04", "");
            OXML.Node("City", "");
        };

        _val = _dispo.ValueArray[0].val;
        eDisposition["eDisposition.04"] = _val;
        eDisposition["City"] = _val;
        v2Array.push({ section: "E20", element: "E20_04", val: _val });
        XML.Node("eDisposition.04", _val);
        OXML.Node("City", _val);

    }
    else
    {
        if (_dispo.IsNull == true) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.04", Description: "Transport Address Required" })
        }
    };

    //eDisposition.05////
    _dispo = getValue(_destinationElementList, "eDisposition.05");
    if (Call.HasTransport == true) //if have a transport, forgot the data, 
    {
        if (_dispo.IsNull == true)
        {
            if (isRequiredStateElement("eDisposition.01") == true)
            {
                eDisposition["eDisposition.05"] = v3NOT_RECORDED;
                eDisposition["State"] = v3NOT_RECORDED;
                v2Array.push({ section: "E20", element: "E20_05", val: v2NOT_RECORDED });

                XML.BeginNode("eDisposition.05");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("State", NOT_RECORDED);

            }
            else
            {
                eDisposition["eDisposition.05"] = null;
                eDisposition["State"] = null;
                v2Array.push({ section: "E20", element: "E20_05", val: null });

                XML.Node("eDisposition.05", "");
                OXML.Node("State", "");
            }
        }
        else
        {
            _val = _dispo.ValueArray[0].val;
            eDisposition["eDisposition.05"] = _val;
            eDisposition["State"] = _val;
            v2Array.push({ section: "E20", element: "E20_05", val: _val });

            XML.Node("eDisposition.05", _val);
            OXML.Node("State", _val);
        }
    }
    else {
        if (_dispo.IsNull == true)
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.05", Description: "Transport State/Transport Type Conflict " })
        };
        eDisposition["eDisposition.05"] = v3NOT_APPLICABLE;
        eDisposition["State"] = v3NOT_APPLICABLE;
        v2Array.push({ section: "E20", element: "E20_05", val: v2NOT_APPLICABLE });

        XML.BeginNode("eDisposition.05");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("State", NOT_APPLICABLE);

    };

    //eDisposition.06////
    _dispo = getValue(_destinationElementList, "eDisposition.06");
    if (Call.HasTransport == true) //if have a transport, forgot the data, 
    {
        if (_dispo.IsNull == true)
        {
            eDisposition["eDisposition.06"] = v3NOT_RECORDED;
            eDisposition["County"] = v3NOT_RECORDED;
            v2Array.push({ section: "E20", element: "E20_06", val: v2NOT_RECORDED });

            XML.BeginNode("eDisposition.06");
            XML.Attrib("NV", NIL_V3NOT_RECORDED);
            XML.EndNode();

            OXML.BeginNode("County");
            OXML.Attrib("NV", NOT_RECORDED);
            OXML.EndNode();

        }
        else
        {
            _val = _dispo.ValueArray[0].val;
            eDisposition["eDisposition.06"] = _val;
            eDisposition["County"] = _val;
            v2Array.push({ section: "E20", element: "E20_06", val: _val });

            XML.Node("eDisposition.05", _val);
            OXML.Node("County", _val);
        }
    }
    else {
        if (_dispo.IsNull == true) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.06", Description: "Transport City/Transport Type Conflict " })
        };

        eDisposition["eDisposition.06"] = v3NOT_APPLICABLE;
        eDisposition["County"] = v3NOT_APPLICABLE;
        v2Array.push({ section: "E20", element: "E20_06", val: v2NOT_APPLICABLE });

        XML.BeginNode("eDisposition.06");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("County",NOT_APPLICABLE);
    };


    //eDisposition.07////
    _dispo = getValue(_destinationElementList, "eDisposition.07");
    if (Call.HasTransport == true) //if have a transport
    {
        if (_dispo.IsNull == true)
        {
            if (isRequiredStateElement("eDisposition.07") == true)
            {
                eDisposition["eDisposition.07"] = v3NOT_RECORDED;
                eDisposition["ZIP"] = v3NOT_RECORDED;
                v2Array.push({ section: "E20", element: "E20_07", val: v2NOT_RECORDED });

                XML.BeginNode("eDisposition.06");
                XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
                XML.EndNode();

                OXML.Node("ZIP", NOT_RECORDED);
            }
            else {
                eDisposition["eDisposition.07"] = null;
                eDisposition["ZIP"] = null;
                v2Array.push({ section: "E20", element: "E20_07", val: null });
                XML.Node("eDisposition.07", "");
                OXML.Node("ZIP", "");
            }
        }
        else
        {
            _val = _dispo.ValueArray[0].val;
            eDisposition["eDisposition.07"] = _val;
            eDisposition["ZIP"] = _val;
            v2Array.push({ section: "E20", element: "E20_07", val: _val });
            XML.Node("eDisposition.07", _val);
            OXML.Node("ZIP", _val);
        }
    }
    else {
        if (_dispo.IsNull == true)
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.07", Description: "Transport Zip/Transport Type Conflict " })
        }
        eDisposition["eDisposition.07"] = v3NOT_APPLICABLE;
        eDisposition["ZIP"] = v3NOT_APPLICABLE;
        v2Array.push({ section: "E20", element: "E20_07", val: v2NOT_APPLICABLE });

        XML.BeginNode("eDisposition.07");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("ZIP", NOT_APPLICABLE);        
    };

    
    //eDisposition.08////
    _dispo = getValue(_destinationElementList, "eDisposition.08");
    if (Call.HasTransport == true) //if have a transport
    {
        if (_dispo.IsNull == true)
        {
            eDisposition["eDisposition.08"] = null;
            eDisposition["Country"] = null;
            XML.Node("eDisposition.08", "");
            OXML.Node("Country", "");
        }
        else
        {
            if (Call.HasTransport == true) 
            {
                _val = _dispo.ValueArray[0].val;
                eDisposition["eDisposition.08"] = _val;
                eDisposition["Country"] = _val;

                XML.Node("eDisposition.08", _val);
                OXML.Node("Country", _val);
            }
        }
    }
    else {
        if (_dispo.IsNull == true)
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.08", Description: "Transport County/Transport Type Conflict " })
        };
        console.log("Better be dFacility.12 - Country")
        eDisposition["eDisposition.08"] = null;
        eDisposition["Country"] = null;

        XML.Node("eDisposition.08", "");
        OXML.Node("Country", "");
    };


    //eDisposition.09////
    _dispo = getValue(_destinationElementList, "eDisposition.09");
    if (Call.HasTransport == true) //if have a transport, forgot the data, 
    {
        if (_dispo.IsNull == true)
        {
            eDisposition["eDisposition.09"] = null;
            eDisposition["GPSLocation"] = null;
            v2Array.push({ section: "E20", element: "E20_08", val: null });
            XML.Node("eDisposition.09", "");
            OXML.Node("GPSLocation", "");
        }
        else
        {
            _val = _dispo.ValueArray[0].val;
            
            eDisposition["eDisposition.09"] = _val;
            eDisposition["GPSLocation"] = _val;
            v2Array.push({ section: "E20", element: "E20_08", val: _val });
            XML.Node("eDisposition.09", _val);
            OXML.Node("GPSLocation", _val);

        }
    }
    else {
        if (_dispo.IsNull == true)
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.09", Description: "Transport GPS/Transport Type Conflict " })
        };
        eDisposition["eDisposition.09"] = null;
        eDisposition["GPSLocation"] = null;
        v2Array.push({ section: "E20", element: "E20_08", val: null });
        XML.Node("eDisposition.09", "");
        OXML.Node("GPSLocation", "");
    };

    //eDisposition.10////
    _dispo = getValue(_destinationElementList, "eDisposition.10");
    if (Call.HasTransport == true) //if have a transport, forgot the data, 
    {
        if (_dispo.IsNull == true)
        {
            eDisposition["eDisposition.10"] = null;
            eDisposition["USNationalGridCoordinates"] = null;
            XML.Node("eDisposition.10", "");
            OXML.Node("USNationalGridCoordinates", "");
        }
        else
        {
            _val = _dispo.ValueArray[0].val;
            console.log("Better be dFacility.14 - Country")
            eDisposition["eDisposition.10"] = _val;
            eDisposition["USNationalGridCoordinates"] = _val;
            XML.Node("eDisposition.10", _val);
            OXML.Node("USNationalGridCoordinates", _val);
        }
    }
    else {
        if (_dispo.IsNull == true)
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.10", Description: "Transport National Coords/Transport Type Conflict " })
        };
        eDisposition["eDisposition.10"] = null;
        eDisposition["USNationalGridCoordinates"] = null;

        XML.Node("eDisposition.10", "");
        OXML.Node("USNationalGridCoordinates", "");
    };


    //eDisposition.11////
    _dispo = getValue(_elementList, "eDisposition.11");
    if (Call.HasTransport == true) //if have a transport, forgot the data, 
    {
        if (_dispo.IsNull == true)
        {
            if (isRequiredStateElement("eDisposition.11") == true)
            {
                eDisposition["eDisposition.11"] = v3NOT_RECORDED;
                eDisposition["NumberofPatientsTransportedinthisEMSUnit"] = v3NOT_RECORDED;

                XML.BeginNode("eDisposition.11");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("NumberofPatientsTransportedinthisEMSUnit", NOT_RECORDED);
            }
            else
            {
                eDisposition["eDisposition.11"] = v3NOT_REPORTING;
                eDisposition["NumberofPatientsTransportedinthisEMSUnit"] = v3NOT_REPORTING;

                XML.BeginNode("eDisposition.11");
                XML.Attrib("NV", NIL_V3NOT_REPORTING);
                XML.EndNode();

                OXML.Node("NumberofPatientsTransportedinthisEMSUnit", NOT_REPORTING);

            }
        }
        else
        {
            _val = _dispo.ValueArray[0].val;
            eDisposition["eDisposition.11"] = _val;
            eDisposition["NumberofPatientsTransportedinthisEMSUnit"] = _val;

            XML.Node("eDisposition.11", _val);
            OXML.Node("NumberofPatientsTransportedinthisEMSUnit", _val);
        }
    }
    else {
        if (_dispo.IsNull == true) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.11", Description: "Transport Number Patients/Transport Type Conflict  " })
        }
        eDisposition["eDisposition.11"] = v3NOT_APPLICABLE;
        eDisposition["NumberofPatientsTransportedinthisEMSUnit"] = v3NOT_APPLICABLE;

        XML.BeginNode("eDisposition.11");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("NumberofPatientsTransportedinthisEMSUnit", NOT_APPLICABLE);
    };

    

    //eDisposition.13////
    _dispo = getValue(_elementList, "eDisposition.13");
    if (Call.HasTransport == true)
    {
        if (_dispo.IsNull == true)
        {
            eDisposition["eDisposition.13"] = null;
            eDisposition["HowPatientWasMovedtoAmbulance"] = null;
            v2Array.push({ section: "E20", element: "E20_11", val: null });

            XML.Node("eDisposition.13", "");
            OXML.Node("HowPatientWasMovedtoAmbulance", "");

        }
        else
        {
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _dispo.ValueArray.length; i++)
            {
                if ((_dispo.ValueArray[i].HasValue == true) && (arr1.indexOf(_dispo.ValueArray[i].val) > -1))
                {
                    _val = _dispo.ValueArray[i].val
                    arr1.push(_val);
                    arr2.push(setV2("eDisposition.13", _val));
                    arr3.push(setCodeText("eDisposition.13", _val));

                    XML.Node("eDisposition.13", _val);
                    OXML.Node("HowPatientWasMovedtoAmbulance", (setCodeText("eDisposition.13", _val)));
                }
            }
            if (arr1.length > 0) {
                v2Array.push({ section: "E20", element: "E20_11", val: arr2.slice(0) });
                eDisposition["eDisposition.13"] = arr1.slice(0);
                eDisposition["HowPatientWasMovedtoAmbulance"] = arr3.slice(0);
            }
        }
    }
    else
    {
        if (_dispo.IsNull == true)
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.12", Description: "How Patient Moved/Transport Type Conflict  " })
        };
        v2Array.push({ section: "E20", element: "E20_11", val: null });
        eDisposition["eDisposition.13"] = null;
        eDisposition["HowPatientWasMovedtoAmbulance"] = null;
    };

    //eDisposition.14////
    _dispo = getValue(_elementList, "eDisposition.14");
    if (Call.HasTransport == true)
    {
        if (_dispo.IsNull == true)
        {
            eDisposition["eDisposition.14"] = null;
            eDisposition["PositionofPatientDuringTransport"] = null;
            v2Array.push({ section: "E20", element: "E20_12", val: null });

            XML.Node("eDisposition.14", "");
            OXML.Node("PositionofPatientDuringTransport", "");
        }
        else {
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];

            for (var i = 0; i < _dispo.ValueArray.length; i++)
            {
                if ((_dispo.ValueArray[i].HasValue == true) && (arr1.indexOf(_dispo.ValueArray[i].val) > -1))
                {
                    _val = _dispo.ValueArray[0].val;
                    arr1.push(_val);
                    arr2.push(setV2("eDisposition.14", _val));
                    arr3.push(setCodeText("eDisposition.14", _val));

                    XML.Node("eDisposition.14", _val);
                    OXML.Node("PositionofPatientDuringTransport", setCodeText("eDisposition.14", _val));
                }
            };
            v2Array.push({ section: "E20", element: "E20_12", val: arr2.slice(0) });
            eDisposition["eDisposition.14"] = arr1.slice(0);
            eDisposition["PositionofPatientDuringTransport"] = arr3.slice(0);
        }
    }
    else {
        if (_dispo.IsNull == true) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.14", Description: "Patient Position/Transport Type Conflict  " })
        };
        v2Array.push({ section: "E20", element: "E20_12", val: null });
        eDisposition["eDisposition.14"] = null;
        eDisposition["PositionofPatientDuringTransport"] = null;
    };

    //eDisposition.15////
    _dispo = getValue(_elementList, "eDisposition.15");
    if (Call.HasTransport == true)
    {
        if (_dispo.IsNull == true)
        {
            eDisposition["eDisposition.15"] = null;
            eDisposition["HowPatientWasTransportedFromAmbulance"] = null;
            v2Array.push({ section: "E20", element: "E20_13", val: null });

            XML.Node("eDisposition.15", "");
            OXML.Node("HowPatientWasTransportedFromAmbulance", "");

        }
        else
        {
            _val = _dispo.ValueArray[0].val;
            eDisposition["HowPatientWasTransportedFromAmbulance"] = setCodeText("eDisposition.15", _val);
            eDisposition["eDisposition.15"] = _val;
            v2Array.push({ section: "E20", element: "E20_13", val: setV2("eDisposition.15", _val) });

            XML.Node("eDisposition.15", _val);
            OXML.Node("HowPatientWasTransportedFromAmbulance", setCodeText("eDisposition.15", _val));

        }
    }
    else {
        if (_dispo.IsNull == true)
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.15", Description: "Patient Transport From Ambulance/Transport Type Conflict  " })
        };
        XML.Node("eDisposition.15", "");
        OXML.Node("HowPatientWasTransportedFromAmbulance", "");

        eDisposition["HowPatientWasTransportedFromAmbulance"] = null;
        eDisposition["eDisposition.15"] = null;
        v2Array.push({ section: "E20", element: "E20_13", val: null });
    };

    //eDisposition.16////
    _dispo = getValue(_elementList, "eDisposition.16");
    if (Call.HasTransport == true) //if have a transport, forgot the data, 
    {
        if (_dispo.IsNull == true)
        {
            if (isRequiredStateElement("eDisposition.16") == true) {
                eDisposition["eDisposition.16"] = v3NOT_RECORDED;
                eDisposition["EMSTransportMethod"] = v3NOT_RECORDED;

                XML.BeginNode("eDisposition.16");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();


                OXML.Node("HowPatientWasTransportedFromAmbulance", NOT_RECORDED);
            }
            else
            {
                eDisposition["EMSTransportMethod"] = null;
                eDisposition["eDisposition.16"] = null;


                XML.Node("eDisposition.16", "");
                OXML.Node("HowPatientWasTransportedFromAmbulance", "");
            }
        }
        else
        {
            _val = _dispo.ValueArray[0].val;
            eDisposition["EMSTransportMethod"] = _val;
            eDisposition["eDisposition.16"] = _val;

            XML.Node("eDisposition.16", _val);
            OXML.Node("HowPatientWasTransportedFromAmbulance", setCodeText("eDisposition.16", _val));
        }
    }
    else {
        if (_dispo.IsNull == true)
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.16", Description: "Patient Transport Method/Transport Type Conflict  " })
        };
        eDisposition["eDisposition.16"] = v3NOT_APPLICABLE;
        eDisposition["EMSTransportMethod"] = v3NOT_APPLICABLE;

        XML.BeginNode("eDisposition.16");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("HowPatientWasTransportedFromAmbulance", NOT_APPLICABLE);

    };

    //eDisposition.17////
    _dispo = getValue(_elementList, "eDisposition.17");
    if (Call.HasTransport == true) //if have a transport,
    {
        if (_dispo.IsNull == true)
        {
            if (isRequiredStateElement("eDisposition.17") == true)
            {
                eDisposition["eDisposition.17"] = v3NOT_RECORDED;
                eDisposition["TransportModefromScene"] = v3NOT_RECORDED;
                v2Array.push({ section: "E20", element: "E20_14", val: v2NOT_RECORDED });

                XML.BeginNode("eDisposition.17");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("TransportModefromScene", NOT_RECORDED);
            }
            else
            {
                eDisposition["eDisposition.17"] = null;
                eDisposition["TransportModefromScene"] = null;
                v2Array.push({ section: "E20", element: "E20_14", val: null });

                XML.Node("eDisposition.17", "");
                OXML.Node("TransportModefromScene", "");
            }
        }
        else
        {
            _val = _dispo.ValueArray[0].val;
            eDisposition["TransportModefromScene"] = setCodeText("eDisposition.17", _val)
            v2Array.push({ section: "E20", element: "E20_14", val: setV2("eDisposition.17", _val) });
            eDisposition["eDisposition.17"] = _val;

            XML.Node("eDisposition.17", _val);
            OXML.Node("TransportModefromScene", setCodeText("eDisposition.17", _val));
        }
    }
    else
    {
        if (_dispo.IsNull == true)
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.17", Description: "Additional Transport Mode/Transport Type Conflict  " })
        };
        eDisposition["eDisposition.17"] = v3NOT_APPLICABLE;
        eDisposition["TransportModefromScene"] = v3NOT_APPLICABLE;
        v2Array.push({ section: "E20", element: "E20_14", val: v2NOT_APPLICABLE });

        XML.BeginNode("eDisposition.17");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("TransportModefromScene", NOT_APPLICABLE);
    };

    //eDisposition.18////
    if (Call.HasTransport == true) //if have a transport, 
    {
        _dispo = getValue(_elementList, "eDisposition.18");
        {
            if (_dispo.IsNull == true)
            {
                if (isRequiredStateElement("eDisposition.18") == true)
                {
                    eDisposition["eDisposition.18"] = v3NOT_RECORDED;
                    eDisposition["AdditionalTransportModeDescriptors"] = v3NOT_RECORDED;

                    XML.BeginNode("eDisposition.18");
                    XML.Attrib("NV", NIL_V3NOT_RECORDED);
                    XML.EndNode();

                    OXML.Node("AdditionalTransportModeDescriptors", NOT_RECORDED);
                }
                else
                {
                    eDisposition["eDisposition.17"] = null;
                    eDisposition["AdditionalTransportModeDescriptors"] = null;

                    XML.Node("eDisposition.18", "");
                    OXML.Node("AdditionalTransportModeDescriptors", "");
                }
            }
            else {
                var arr1 = [];
                var arr2 = [];
                _val = _dispo.ValueArray[0].val;

                for (var i = 0; i < _dispo.ValueArray.length; i++)
                {
                    if ((_dispo.ValueArray[i].HasValue == true) && (arr1.indexOf(_dispo.ValueArray[i].val) > -1))
                    {
                        _val = _dispo.ValueArray[i].val
                        arr1.push(_val);
                        arr2.push(setCodeText("eDisposition.18", _val));

                        XML.Node("eDisposition.18", _val);
                        OXML.Node("AdditionalTransportModeDescriptors", setCodeText("eDisposition.18", _val));
                    }
                };
                if (arr1.length > 0) {
                    eDisposition["eDisposition.18"] = arr1.slice(0);
                    eDisposition["AdditionalTransportModeDescriptors"] = arr2.slice(0);
                }
            }
        }
    }
    else
    {
        if (_dispo.IsNull == true)
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.18", Description: "Additional Transport Method/Transport Type Conflict  " })
        };
        eDisposition["eDisposition.18"] = v3NOT_APPLICABLE;
        eDisposition["AdditionalTransportModeDescriptors"] = v3NOT_APPLICABLE;

        XML.BeginNode("eDisposition.18");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("AdditionalTransportModeDescriptors", NOT_APPLICABLE);
    };

    //eDisposition.19////
    _dispo = getValue(_elementList, "eDisposition.19");
    if (Call.HasTransport == true) //if have a transport, forgot the data, 
    {
        if (_dispo.IsNull == true)
        {
            if (isRequiredStateElement("eDisposition.19") == true)
            {
                v2Array.push({ section: "E20", element: "E20_15", val: v2NOT_RECORDED });
                eDisposition["eDisposition.19"] = v3NOT_RECORDED;
                eDisposition["ConditionofPatientatDestination"] = v3NOT_RECORDED;

                XML.BeginNode("eDisposition.19");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("ConditionofPatientatDestination", NOT_RECORDED);
            }
            else
            {
                v2Array.push({ section: "E20", element: "E20_15", val: null });
                eDisposition["eDisposition.19"] = null;
                eDisposition["ConditionofPatientatDestination"] = null;

                XML.Node("eDisposition.19", "");
                OXML.Node("ConditionofPatientatDestination", setCodeText("eDisposition.19", ""));
            }
        }
        else
        {
            _val = _dispo.ValueArray[0].val;

            v2Array.push({ section: "E20", element: "E20_15", val: setV2("eDisposition.19", _val) });
            eDisposition["eDisposition.19"] = _val;
            eDisposition["ConditionofPatientatDestination"] = (setCodeText("eDisposition.19", _val));

            XML.Node("eDisposition.19", _val);
            OXML.Node("ConditionofPatientatDestination", setCodeText("eDisposition.19", _val));
        }
    }
    else
    {
        if (_dispo.IsNull == true)
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.19", Description: "Condition of Patientat Destination/Transport Type Conflict  " })
        };
        v2Array.push({ section: "E20", element: "E20_15", val: v2NOT_APPLICABLE });
        eDisposition["eDisposition.19"] = v3NOT_APPLICABLE;
        eDisposition["ConditionofPatientatDestination"] = v3NOT_APPLICABLE;

        XML.BeginNode("eDisposition.19");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("ConditionofPatientatDestination", NOT_APPLICABLE);
    };

    //eDisposition.20////
    _dispo = getValue(_elementList, "eDisposition.20");
    if (Call.HasTransport == true) //if have a transport 
    {
        if (_dispo.IsNull == true)
        {
            if (isRequiredStateElement("eDisposition.20") == true) {
                eDisposition["eDisposition.20"] = v3NOT_RECORDED;
                eDisposition["ReasonforChoosingDestination"] = v3NOT_RECORDED;
                v2Array.push({ section: "E20", element: "E20_16", val: v2NOT_RECORDED });

                XML.BeginNode("eDisposition.20");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("ReasonforChoosingDestination", NOT_RECORDED);

            }
            else {
                eDisposition["eDisposition.20"] = null;
                eDisposition["ReasonforChoosingDestination"] = null;
                v2Array.push({ section: "E20", element: "E20_16", val: null });

                XML.Node("eDisposition.20", "");
                OXML.Node("ReasonforChoosingDestination", "");
            }
        }
        else
        {
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _dispo.ValueArray.length; i++)
            {
                if ((_dispo.ValueArray[i].HasValue == true) && (arr1.indexOf(_dispo.ValueArray[i].val) > -1))
                {
                    _val = _dispo.ValueArray[i].val
                    arr1.push(_val);
                    arr3.push(setV2("eDisposition.20", _val));
                    arr3.push(setCodeText("eDisposition.20", _val));

                    XML.Node("eDisposition.20", _val);
                    OXML.Node("ReasonforChoosingDestination", setCodeText("eDisposition.20", _val));
                }
            };
            if (arr1.length > 0)
            {
                v2Array.push({ section: "E20", element: "E20_16", val: arr2.slice(0) });
                eDisposition["eDisposition.20"] = arr1.slice(0);
                eDisposition["ReasonforChoosingDestination"] = arr3.slice(0);
            }
        }
    }
    else {
        if (_dispo.IsNull == true)
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.20", Description: "Reason for Choosing Destination/Transport Type Conflict  " })
        };
        eDisposition["eDisposition.20"] = v3NOT_APPLICABLE
        eDisposition["ReasonforChoosingDestination"] = v3NOT_APPLICABLE;
        v2Array.push({ section: "E20", element: "E20_16", val: v2NOT_APPLICABLE });

        XML.BeginNode("eDisposition.20");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("ReasonforChoosingDestination", NOT_APPLICABLE);
    };


    //eDisposition.21////
    _dispo = getValue(_elementList, "eDisposition.21");
    if (Call.HasTransport == true) //if have a transport
    {
        if (_dispo.IsNull == true) {
            if (isRequiredStateElement("eDisposition.21") == true) {
                eDisposition["eDisposition.21"] = v3NOT_RECORDED;
                eDisposition["TypeofDestination"] = v3NOT_RECORDED;
                v2Array.push({ section: "E20", element: "E20_17", val: v2NOT_RECORDED });

                XML.BeginNode("eDisposition.21");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("TypeofDestination", NOT_RECORDED);
            }
            else
            {
                eDisposition["eDisposition.21"] = null;
                eDisposition["TypeofDestination"] = null;
                v2Array.push({ section: "E20", element: "E20_17", val: v3NOT_RECORDED });

                XML.Node("eDisposition.21", "");
                OXML.Node("TypeofDestination", "");
            }
        }
        else
        {
            _val = _dispo.ValueArray[0].val;
            eDisposition["eDisposition.21"] = _val;
            eDisposition["TypeofDestination"] = setCodeText("eDisposition.21", _val)
            v2Array.push({ section: "E20", element: "E20_17", val: setV2("eDisposition.21", _val) });

            XML.Node("eDisposition.21", _val);
            OXML.Node("TypeofDestination", setCodeText("eDisposition.21", _val));
        }
    }
    else {
        if (_dispo.IsNull == true) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.21", Description: "Type of Destination/Transport Type Conflict  " })
        };
        eDisposition["eDisposition.21"] = v3NOT_APPLICABLE;
        eDisposition["TypeofDestination"] = v3NOT_APPLICABLE;
        v2Array.push({ section: "E20", element: "E20_17", val: v2NOT_APPLICABLE });

        XML.BeginNode("eDisposition.21");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("TypeofDestination", NOT_RECORDED);
    };

    //eDisposition.22////
    _dispo = getValue(_elementList, "eDisposition.22");
    if (Call.HasTransport == true) //if have a transport
    {
        if (_dispo.IsNull == true)
        {
            if (isRequiredStateElement("eDisposition.22") == true) {
                eDisposition["eDisposition.22"] = v3NOT_RECORDED;
                eDisposition["HospitalInPatientDestination"] = v3NOT_RECORDED;

                XML.BeginNode("eDisposition.22");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("HospitalInPatientDestination", NOT_RECORDED);                
            }
            else
            {
                eDisposition["eDisposition.22"] = null;
                eDisposition["HospitalInPatientDestination"] = null;
                
                XML.Node("eDisposition.22", "");
                OXML.Node("HospitalInPatientDestination", "");
            }
        }
        else
        {
            _val = _dispo.ValueArray[0].val;

            eDisposition["eDisposition.22"] = _val;
            eDisposition["HospitalInPatientDestination"] = setCodeText("eDisposition.22", _val);

            XML.Node("eDisposition.22", _val);
            OXML.Node("HospitalInPatientDestination", setCodeText("eDisposition.22", _val));
        }
    }
    else
    {
        if (_dispo.IsNull == true)
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.22", Description: "Hospital In Patient Destination/Transport Type Conflict  " })
        };
        eDisposition["eDisposition.22"] = v3NOT_APPLICABLE;
        eDisposition["HospitalInPatientDestination"] = v3NOT_APPLICABLE;

        XML.BeginNode("eDisposition.22");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("HospitalInPatientDestination", NOT_APPLICABLE);
    };
    
    //eDisposition.23////
    _dispo = getValue(_elementList, "eDisposition.23");
    if (Call.HasTransport == true) //if have a transport, forgot the data, 
    {
        if (_dispo.IsNull == true) {
            if (isRequiredStateElement("eDisposition.07") == true) {
                eDisposition["eDisposition.23"] = v3NOT_RECORDED;
                eDisposition["HospitalDesignation"] = v3NOT_RECORDED;

                XML.BeginNode("eDisposition.23");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("HospitalDesignation", NOT_RECORDED);
            }
            else {
                eDisposition["eDisposition.23"] = null;
                eDisposition["HospitalDesignation"] = null;
                XML.Node("eDisposition.23", "");
                OXML.Node("HospitalDesignation", "");
            }
        }
        else
        {
            _val = _dispo.ValueArray[0].val;

            eDisposition["eDisposition.23"] = _val;
            eDisposition["HospitalDesignation"] = setCodeText("eDisposition.23", _val);

            XML.Node("eDisposition.23", _val);
            OXML.Node("HospitalDesignation", setCodeText("eDisposition.22", _val));

        }
    }
    else {
        if (_dispo.IsNull = flase)
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.23", Description: "Hospital Designation/Transport Type Conflict  " })
        };
        eDisposition["eDisposition.23"] = v3NOT_APPLICABLE;
        eDisposition["HospitalDesignation"] = v3NOT_APPLICABLE;

        XML.BeginNode("eDisposition.23");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("HospitalDesignation", NOT_APPLICABLE);

    };
    
    // If No Transport, not Hospital Pre Activation
    //eDisposition.24 Destination Team Pre-Arrival Alert or Activation and 
    //eDisposition.25 Date/Time of Destination Prearrival Alert or Activation are both recorded when either one is recorded.
    //and :eDisposition.24 != '4224001'
    
    _sectionIndex = getSectionIndex(eDispositionObject, "eDisposition.HospitalTeamActivationGroup");
    console.log(Call.HasTransport);
    console.log(_sectionIndex[0]);
    if ((Call.HasTransport == false) ||(_sectionIndex[0] ==-1)) //if have a transport, forgot the data, 
        {            
            eDisposition["eDisposition.24"] = v3NOT_APPLICABLE;
            eDisposition["DestinationTeamPreArrivalAlertorActivation"] = v3NOT_APPLICABLE;

            XML.BeginNode("eDisposition.24");
            XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
            XML.EndNode();

            OXML.Node("DestinationTeamPreArrivalAlertorActivation", NOT_APPLICABLE);

            eDisposition["eDisposition.25"] = v3NOT_APPLICABLE;
            eDisposition["DateTimeofDestinationPrearrivalAlertorActivation"] = v3NOT_APPLICABLE;

            XML.BeginNode("eDisposition.25");
            XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
            XML.EndNode();

            OXML.Node("DateTimeofDestinationPrearrivalAlertorActivation", NOT_APPLICABLE);
        
    }
    else
    {
        console.log("STNA")
     
        var bActivation = false;
        for (var x = 0; x < _sectionIndex.length; x++) {
            //eDisposition.24////
            _dispo = getValue(eDispositionObject.sections[x].attributes.sections[_sectionIndex].attributes.elements, "eDisposition.24");
            if (_dispo.IsNull == true)
            {
                HospitalTeamActivationGroup["eDisposition.24"] = v3NOT_RECORDED;
                HospitalTeamActivationGroup["DestinationTeamPreArrivalAlertorActivation"] = v3NOT_RECORDED;

                XML.BeginNode("eDisposition.24");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.BeginNode("DestinationTeamPreArrivalAlertorActivation");
                OXML.Node("DestinationTeamPreArrivalAlertorActivation", NOT_RECORDED);
            }
            else
            {
                _val = _dispo.ValueArray[0].val;
                HospitalTeamActivationGroup["eDisposition.24"] = _val;
                HospitalTeamActivationGroup["DestinationTeamPreArrivalAlertorActivation"] = setCodeText("eDisposition.24", _val);;
                if (_val == "4224001") {
                    bActivation = false;
                }
                else {
                    bActivation = true;
                };
                XML.Node("eDisposition.24", _val);
                OXML.Node("DestinationTeamPreArrivalAlertorActivation", setCodeText("eDisposition.24", _val));
            };

            //eDisposition.25////
            _dispo = getValue(eDispositionObject.sections[x].attributes.sections[_sectionIndex].attributes.elements, "eDisposition.25");
            if (_dispo.IsNull == true)
                {
                if (bActivation = true)
                {
                    HospitalTeamActivationGroup["eDisposition.25"] = v3NOT_RECORDED;
                    HospitalTeamActivationGroup["DateTimeofDestinationPrearrivalAlertorActivation"] = v3NOT_RECORDED;

                    XML.BeginNode("eDisposition.25");
                    XML.Attrib("NV", NIL_V3NOT_RECORDED);
                    XML.EndNode();

                    OXML.Node("DateTimeofDestinationPrearrivalAlertorActivation", NOT_RECORDED);

                }
                else {
                    HospitalTeamActivationGroup["eDisposition.25"] = v3NOT_APPLICABLE;
                    HospitalTeamActivationGroup["DateTimeofDestinationPrearrivalAlertorActivation"] = v3NOT_APPLICABLE;

                    XML.BeginNode("eDisposition.25");
                    XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
                    XML.EndNode();

                    OXML.BeginNode("DateTimeofDestinationPrearrivalAlertorActivation");
                    OXML.Attrib("NV", NOT_APPLICABLE);
                    OXML.EndNode();
                }
            }
            else
            {
                _val = _dispo.ValueArray[0].val;
                HospitalTeamActivationGroup["eDisposition.25"] = _val;
                HospitalTeamActivationGroup["DateTimeofDestinationPrearrivalAlertorActivation"] = _val;

                XML.Node("eDisposition.25", _val);
                OXML.Node("DateTimeofDestinationPrearrivalAlertorActivation", setCodeText("eDisposition.25", _val));
            };
            HospitalTeamActivationGroupArray.push(HospitalTeamActivationGroup);
        };

        eDisposition.HospitalTeamActivationGroup = HospitalTeamActivationGroupArray;
        eDisposition.Errors = ErrorList;
    };
    
    //eDisposition.26////
    _dispo = getValue(_elementList, "eDisposition.26");
    if (Call.HasTransport == true) //if have a transport, forgot the data, 
    {
        if (_dispo.IsNull == true)
        {
            eDisposition["eDisposition.26"] = null;
            eDisposition["DispositionInstructionsProvided"] = null;

            XML.Node("eDisposition.26", "");
            OXML.Node("DispositionInstructionsProvided", "");

        }
        else {
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _dispo.ValueArray.length; i++)
            {
                if ((_dispo.ValueArray[i].HasValue == true) && (arr1.indexOf(_dispo.ValueArray[i].val) > -1))
                {
                    _val = _dispo.ValueArray[i].val
                    arr1.push(_val);
                    arr3.push(setCodeText("eDisposition.26", _val));

                    XML.Node("eDisposition.26", _val);
                    OXML.Node("DispositionInstructionsProvided", setCodeText("eDisposition.26", _val));
                }
            };
            if (arr1.length > 0)
            {
                eDisposition["eDisposition.26"] = arr1.slice(0);
                eDisposition["DispositionInstructionsProvided"] = arr3.slice(0);
            }
        }
    }
    else
    {
        eDisposition["eDisposition.25"] = null;
        eDisposition["DispositionInstructionsProvided"] = null;
    };
    

    XML.EndNode();
    OXML.EndNode();
    eDisposition.XML = XML;
    eDisposition.OXML = OXML;
    console.log(eDisposition.XML.ToString())
    console.log(eDisposition.OXML)
    */
    return eDisposition;
    };
var seteAirway = function (NEMSISEMSObject) {
    var XML = new XMLWriter();
    var OXML = new XMLWriter();
    XML.BeginNode("eDisposition")
    OXML.BeginNode("eDisposition")

    var eAirway = new Object();
    /*
    var AirwayGroup = new Object();
    var ConfirmationGroup = new Object();
    var ConfirmationGroupArray = new Array();
           
    // GET AirwayGroup.
    //If -1, set to NOT APPLICABLT
    var eAirwayGroupCount = [];
    eAirwayGroupCount = getSectionIndex(NEMSISEMSObject, "AirwayGroup")
    if (eAirwayGroupCount[0] == -1) {
        eAirway = setNotApplicableAll();
        return eAirway;
    };
        
    XML.BeginNode("eAirway");
    OXML.BeginNode("eAirway");
    for (var a = 0; a < eAirwayGroupCount.length; a++) 
    {
        Call.HasAirway = false;
        XML.BeginNode("eAirway.AirwayGroup");
        OXML.BeginNode("eAirway.AirwayGroup");

        console.log(businessObject);
        var _airway = "";

        /////eAirway.01
        var eAirwayElements = NEMSISEMSObject.sections[a].attributes.elements
        _airway = getValue(listElements, "eAirway.01");
        if (_airway.IsNull = true)
        {
            if (isRequiredStateElement("eAirway.01") == true) 
            {
                AirwayGroup["IndicationsforInvasiveAirway"] = v3NOT_RECORDED;
                AirwayGroup["eAirway.01"] = v3NOT_RECORDED;

                XML.BeginNode("eAirway.01");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();
                OXML.Node("IndicationsforInvasiveAirway", NOT_RECORDED);
            }
        }
        else 
        {
            Call.HasAirway = true;
            _val = _dispo.ValueArray[0].val;
            AirwayGroup["eAirway.01"] = _val;
            AirwayGroup["IndicationsforInvasiveAirway"] = setCodeText("eAirway.01", _val);
            XML.Node("eAirway.01", _val);
            OXML.Node("IndicationsforInvasiveAirway", setCodeText("eAirway.01", _val));        
        };
        
        //////////////////////////////
        _sectionIndex = getSectionIndex(businessObject, "dAgency.AgencyServiceGroup");
        for (var x = 0; x < _sectionIndex.length; x++) 
        {
            XML.BeginNode("eAirway.ConfirmationGroup");
            OXML.BeginNode("eAirway.ConfirmationGroup");

            var groupObject = NEMSISEMSObject.sections[a].attributes.sections[_sectionIndex].elements
            var ConfirmationGroupArray = [];
                        
            /////eAirway.02
            _airway = getValue(groupObject, "eAirway.02");
            if (_airway.IsNull = true)
            {
                if (isRequiredStateElement("eAirway.02") == true) 
                {
                    ConfirmationGroup["eAirway.02"] = v3NOT_RECORDED;
                    ConfirmationGroup["DateTimeAirwayDevicePlacementConfirmation"] = v3NOT_RECORDED;

                    XML.BeginNode("eAirway.02");
                    XML.Attrib("NV", NIL_V3NOT_RECORDED);
                    XML.EndNode();

                    OXML.Node("DateTimeAirwayDevicePlacementConfirmation", NOT_RECORDED);
                }
                else {
                    ConfirmationGroup["eAirway.02"] = v3NOT_REPORTING;
                    ConfirmationGroup["DateTimeAirwayDevicePlacementConfirmation"] = v3NOT_REPORTING;

                    XML.BeginNode("eAirway.02");
                    XML.Attrib("NV", NIL_V3NOT_REPORTING);
                    XML.EndNode();

                    OXML.Node("DateTimeAirwayDevicePlacementConfirmation", NOT_REPORTING);
                }
            }
            else
            {
                Call.HasAirway = true;
                _val = _dispo.ValueArray[0].val;
                ConfirmationGroup["eAirway.02"] = _val;
                ConfirmationGroup["DateTimeAirwayDevicePlacementConfirmation"] = setCodeText("eAirway.02", _val);

                OXML.Node("DateTimeAirwayDevicePlacementConfirmation", setCodeText("eAirway.02", _val));
                XML.Node("eAirway.02", _val);
            };
        
            /////eAirway.03
            _airway = getValue(groupObject, "eAirway.03");
            if (_airway.IsNull = true)
            {
                if (isRequiredStateElement("eAirway.03") == true) 
                {
                    ConfirmationGroup["eAirway.03"] = v3NOT_RECORDED;
                    ConfirmationGroup["AirwayDeviceBeingConfirmed"] = v3NOT_RECORDED;

                    XML.BeginNode("eAirway.03");
                    XML.Attrib("NV", NIL_V3NOT_RECORDED);
                    XML.EndNode();

                    OXML.Node("AirwayDeviceBeingConfirmed", NOT_REPORTING);                            
                }
                else {
                    ConfirmationGroup["eAirway.03"] = v3NOT_REPORTING;
                    ConfirmationGroup["AirwayDeviceBeingConfirmed"] = v3NOT_REPORTING;

                    XML.BeginNode("eAirway.03");
                    XML.Attrib("NV", NIL_V3NOT_REPORTING);
                    XML.EndNode();

                    OXML.Node("AirwayDeviceBeingConfirmed", NOT_REPORTING);
                }
            }
            else 
            {
                Call.HasAirway = true;
                _val = _dispo.ValueArray[0].val;
                ConfirmationGroup["eAirway.03"] = _val;
                ConfirmationGroup["AirwayDeviceBeingConfirmed"] = setCodeText("eAirway.03", _val);
                            
                OXML.Node("AirwayDeviceBeingConfirmed", setCodeText("eAirway.02", _val));
                XML.Node("eAirway.03", _val);

            };
        
            /////eAirway.04
            _airway = getValue(groupObject, "eAirway.04");
            if (_airway.IsNull = true)
            {
                if (isRequiredStateElement("eAirway.04") == true) 
                {
                    ConfirmationGroup["eAirway.04"] = v3NOT_RECORDED;
                    ConfirmationGroup["AirwayDevicePlacementConfirmedMethod"] = v3NOT_RECORDED;

                    XML.BeginNode("eAirway.04");
                    XML.Attrib("NV", NIL_V3NOT_RECORDED);
                    XML.EndNode();

                    OXML.Node("AirwayDevicePlacementConfirmedMethod", NOT_RECORDED);

                }
                else
                {
                    ConfirmationGroup["eAirway.04"] = v3NOT_REPORTING;
                    ConfirmationGroup["AirwayDevicePlacementConfirmedMethod"] = v3NOT_REPORTING;
                                
                    XML.BeginNode("eAirway.04");
                    XML.Attrib("NV", NIL_V3NOT_REPORTING);
                    XML.EndNode();

                    OXML.Node("AirwayDevicePlacementConfirmedMethod", NOT_REPORTING);
                }
            }
            else 
            {
                arr1 = _val;
                arr2 = _val;
                for (var i = 0; i < _dispo.ValueArray.length; i++)
                {
                    if ((_dispo.ValueArray[i].HasValue == true) && (arr1.indexOf(_dispo.ValueArray[i].val) > -1))
                    {
                        _val = _dispo.ValueArray[i].val
                        arr1.push(_val);
                        arr2.push(setCodeText("eAirway.04", _val));                                
                        OXML.Node("AirwayDevicePlacementConfirmedMethod", setCodeText("eAirway.04", _val));
                        XML.Node("eAirway.04", _val);
                    }
                }
                Call.HasAirway = true;
                ConfirmationGroup["eAirway.04"] = arr1.slice(0);
                ConfirmationGroup["AirwayDevicePlacementConfirmedMethod"] = arr2.slice(0);
            };
        
            /////eAirway.05
            _airway = getValue(groupObject, "eAirway.05");
            if (_airway.IsNull = true)
            {
                OXML.Node("TubeDepth",  "");
                XML.Node("eAirway.04", "");

                ConfirmationGroup["eAirway.05"] = null;
                ConfirmationGroup["TubeDepth"] = null;
            }
            else
            {
                bAirwayPerformed = true;
                _val = _dispo.ValueArray[0].val;

                OXML.Node("TubeDepth",  _val);
                XML.Node("eAirway.04", _val);

                ConfirmationGroup["eAirway.05"] = _val;
                ConfirmationGroup["TubeDepth"] = _val;
            };
        
            /////eAirway.06
            _airway = getValue(groupObject, "eAirway.06");
            if (_airway.IsNull = true)
            {
                if (isRequiredStateElement("eAirway.06") == true)
                {
                    ConfirmationGroup["eAirway.06"] = v3NOT_RECORDED;
                    ConfirmationGroup["TypeofIndividualConfirmingAirwayDevicePlacement"] = v3NOT_RECORDED;
                                
                    XML.BeginNode("eAirway.06");
                    XML.Attrib("NV", NIL_V3NOT_RECORDED);
                    XML.EndNode();

                    OXML.Node("TypeofIndividualConfirmingAirwayDevicePlacement", NOT_RECORDED);
                }
                else 
                {
                    ConfirmationGroup["eAirway.06"] = v3NOT_REPORTING;
                    ConfirmationGroup["TypeofIndividualConfirmingAirwayDevicePlacement"] = v3NOT_REPORTING;
                                
                    XML.BeginNode("eAirway.06");
                    XML.Attrib("NV", NIL_V3NOT_REPORTING);
                    XML.EndNode();

                    OXML.Node("TypeofIndividualConfirmingAirwayDevicePlacement", NOT_REPORTING);
                }
            }
            else 
            {
                Call.HasAirway = true;
                _val = _dispo.ValueArray[0].val;
                ConfirmationGroup["eAirway.06"] = _val;
                ConfirmationGroup["TypeofIndividualConfirmingAirwayDevicePlacement"] = setCodeText("eAirway.06", _val);

                OXML.Node("TypeofIndividualConfirmingAirwayDevicePlacement", setCodeText("eAirway.06", _val));
                XML.Node("eAirway.06", _val);
            };
        
            /////eAirway.07
            _airway = getValue(groupObject, "eAirway.07");
            if (_airway.IsNull = true) {
                if (isRequiredStateElement("eAirway.07") == true) 
                {
                    ConfirmationGroup["eAirway.07"] = v3NOT_RECORDED;
                    ConfirmationGroup["CrewMemberID"] = v3NOT_RECORDED;

                    XML.BeginNode("eAirway.07");
                    XML.Attrib("NV", NIL_V3NOT_RECORDED);
                    XML.EndNode();

                    OXML.Node("CrewMemberID", NOT_RECORDED);
                }
                else 
                {
                    ConfirmationGroup["eAirway.07"] = v3NOT_REPORTING;
                    ConfirmationGroup["CrewMemberID"] = v3NOT_REPORTING;

                                
                    XML.BeginNode("eAirway.07");
                    XML.Attrib("NV", NIL_V3NOT_REPORTING);
                    XML.EndNode();

                    OXML.Node("CrewMemberID", NOT_REPORTING);

                }
            }
            else 
            {
                Call.HasAirway = true;
                _val = _dispo.ValueArray[0].val;
                ConfirmationGroup["eAirway.07"] = _val;
                ConfirmationGroup["CrewMemberID"] = setCodeText("eAirway.07", _val);

                OXML.Node("CrewMemberID", setCodeText("eAirway.07", _val));
                XML.Node("eAirway.07", _val);

            };
        
            /////eAirway.08
            _airway = getValue(groupObject, "eAirway.08");
            if (_airway.IsNull = true) {
                if (isRequiredStateElement("eAirway.08") == true) {
                    ConfirmationGroup["eAirway.08"] = v3NOT_RECORDED;
                    ConfirmationGroup["AirwayComplicationsEncountered"] = v3NOT_RECORDED;

                    XML.BeginNode("eAirway.08");
                    XML.Attrib("NV", NIL_V3NOT_RECORDED);
                    XML.EndNode();

                    OXML.Node("AirwayComplicationsEncountered", NOT_RECORDED);

                }
                else 
                {
                    ConfirmationGroup["eAirway.08"] = v3NOT_REPORTING;
                    ConfirmationGroup["AirwayComplicationsEncountered"] = v3NOT_REPORTING;

                    XML.BeginNode("eAirway.08");
                    XML.Attrib("NV", NIL_V3NOT_REPORTING);
                    XML.EndNode();

                    OXML.Node("AirwayComplicationsEncountered", NOT_REPORTING);
                }
            }
            else 
            {
                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _dispo.ValueArray.length; i++)
                {
                    if ((_dispo.ValueArray[i].HasValue == true) && (arr1.indexOf(_dispo.ValueArray[i].val) > -1))
                    {
                        _val = _dispo.ValueArray[i].valarr1.push(_val);
                        arr2.push(setCodeText("eAirway.08", _val));

                        OXML.Node("AirwayComplicationsEncountered", setCodeText("eAirway.08", _val));
                        XML.Node("eAirway.08", _val);
                    }
                };
                Call.HasAirway = true;
                ConfirmationGroup["eAirway.08"] = arr1.slice(0);
                ConfirmationGroup["AirwayComplicationsEncountered"] = arr2.slice(0);
            };
        
            /////eAirway.09
            _airway = getValue(groupObject, "eAirway.09");
            if (_airway.IsNull = true)
            {
                if (isRequiredStateElement("eAirway.09") == true) {
                    ConfirmationGroup["eAirway.09"] = v3NOT_RECORDED;
                    ConfirmationGroup["SuspectedReasonsforFailedAirwayProcedure"] = v3NOT_RECORDED;

                    XML.BeginNode("eAirway.09");
                    XML.Attrib("NV", NIL_V3NOT_REPORTING);
                    XML.EndNode();

                    OXML.Node("SuspectedReasonsforFailedAirwayProcedure", NOT_REPORTING);
                }
                else 
                {
                    ConfirmationGroup["eAirway.09"] = v3NOT_REPORTING;
                    ConfirmationGroup["SuspectedReasonsforFailedAirwayProcedure"] = v3NOT_REPORTING;

                    XML.BeginNode("eAirway.09");
                    XML.Attrib("NV", NIL_V3NOT_REPORTING);
                    XML.EndNode();

                    OXML.Node("SuspectedReasonsforFailedAirwayProcedure", NOT_REPORTING);
                }
            }
            else 
            {
                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _dispo.ValueArray.length; i++)
                {
                    if ((_dispo.ValueArray[i].HasValue == true) && (arr1.indexOf(_dispo.ValueArray[i].val) > -1))
                    {
                        _val = _dispo.ValueArray[i].val
                        arr1.push(_val);
                        arr2.push(setCodeText("eAirway.09", _val));
                        OXML.Node("SuspectedReasonsforFailedAirwayProcedure", setCodeText("eAirway.09", _val));
                        XML.Node("eAirway.09", _val);
                    }
                };
                Call.HasAirway = true;
                ConfirmationGroup["eAirway.09"] = arr1.slice(0);
                ConfirmationGroup["SuspectedReasonsforFailedAirwayProcedure"] = arr2.slice(0);
            };
            ConfirmationGroupArray.push(ConfirmationGroup);
            XML.EndNode();
            OXML.EndNode();
        };  //ConfirmationGroup Loop
        
        ///////////////////////////
        
        
        /////eAirway.10
        _airway = getValue(eAirwayElements, "eAirway.10");
        if (_airway.IsNull = true)
        {
            AirwayGroup["eAirway.10"] = null;

            AirwayGroup["DateTimeDecisiontoManagethePatientwithanInvasiveAirway"] = null;
            OXML.Node("DateTimeDecisiontoManagethePatientwithanInvasiveAirway", "");
            XML.Node("eAirway.10", "");
        }
        else {
        
            if (Call.HasAirway == true) 
            {
                if (eAirwayGroup["eAirway.10"] <= _val) {
                    ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eAirway.11", Description: "Validation Error: eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Date/Time Decision to Manage the Patient with an Invasive Airway, " })
                }
            };
                                    
            _val = _dispo.ValueArray[0].val;
            AirwayGroup["eAirway.10"] = _val;
            AirwayGroup["DateTimeDecisiontoManagethePatientwithanInvasiveAirway"] = _val;

            XML.Node("eAirway.10",  _val);
            OXML.Node("DateTimeDecisiontoManagethePatientwithanInvasiveAirway", _val);        
        };
        
        /////eAirway.11
        // eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: 
        // Date/Time Decision to Manage the Patient with an Invasive Airway, 
        
        _airway = getValue(eAirwayElements, "eAirway.11");
        if (_airway.IsNull = true)
        {
            AirwayGroup["eAirway.11"] = null;
            AirwayGroup["DateTimeInvasiveAirwayPlacementAttemptsAbandoned"] = null;
        }
        else 
        {
            if (Call.HasAirway == true) {
                if (eAirwayGroup["eAirway.10"] <= _val) {
                    ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eAirway.11", Description: "Validation Error: eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Date/Time Decision to Manage the Patient with an Invasive Airway, " })
                }
            };
            _val = _dispo.ValueArray[0].val;
        
            AirwayGroup["eAirway.11"] = _val;
            AirwayGroup["DateTimeInvasiveAirwayPlacementAttemptsAbandoned"] = _val;

            XML.Node("eAirway.11",  _val);
            OXML.Node("DateTimeInvasiveAirwayPlacementAttemptsAbandoned", _val);
        };
        
        if (Call.HasAirway== true) 
        {
            AirwayGroup.push(ConfirmationGroup);
            AirwayGroupArray.push(AirwayGroup);        
        }

    };  //AirwayGroup Loop

        
        
    if (Call.HasAirway == false)
    {
        AirwayGroup["IndicationsforInvasiveAirway"] = NOT_APPLICABLE;
        AirwayGroup["eAirway.01"] = v3NOT_APPLICABLE;
        XML.BeginNode("eAirway.01");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();
        OXML.Node("IndicationsforInvasiveAirway", NOT_APPLICABLE);


        ConfirmationGroup["eAirway.02"] = v3NOT_APPLICABLE;
        ConfirmationGroup["DateTimeAirwayDevicePlacementConfirmation"] = v3NOT_APPLICABLE;
        XML.BeginNode("eAirway.02");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();
        OXML.Node("DateTimeAirwayDevicePlacementConfirmation", NOT_APPLICABLE);


        ConfirmationGroup["eAirway.03"] = v3NOT_APPLICABLE;
        ConfirmationGroup["AirwayDeviceBeingConfirmed"] = v3NOT_APPLICABLE;
        XML.BeginNode("eAirway.03");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();
        OXML.Node("AirwayDeviceBeingConfirmed", NOT_APPLICABLE);

        ConfirmationGroup["eAirway.04"] = v3NOT_APPLICABLE;
        ConfirmationGroup["AirwayDevicePlacementConfirmedMethod"] = v3NOT_APPLICABLE;
        XML.BeginNode("eAirway.04");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();
        OXML.Node("AirwayDevicePlacementConfirmedMethod", NOT_APPLICABLE);

        ConfirmationGroup["eAirway.06"] = v3NOT_APPLICABLE;
        ConfirmationGroup["TypeofIndividualConfirmingAirwayDevicePlacement"] = v3NOT_APPLICABLE;
        XML.BeginNode("eAirway.06");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();
        OXML.Node("TypeofIndividualConfirmingAirwayDevicePlacement", NOT_APPLICABLE);



        ConfirmationGroup["eAirway.07"] = v3NOT_APPLICABLE;
        ConfirmationGroup["CrewMemberID"] = v3NOT_APPLICABLE;
        XML.BeginNode("eAirway.07");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();
        OXML.Node("CrewMemberID", NOT_APPLICABLE);


        ConfirmationGroup["eAirway.08"] = v3NOT_APPLICABLE;
        ConfirmationGroup["AirwayComplicationsEncountered"] = v3NOT_APPLICABLE;
        XML.BeginNode("eAirway.08");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();
        OXML.Node("AirwayComplicationsEncountered", NOT_APPLICABLE);


        ConfirmationGroup["eAirway.09"] = v3NOT_APPLICABLE;
        ConfirmationGroup["SuspectedReasonsforFailedAirwayProcedure"] = v3NOT_APPLICABLE;
        XML.BeginNode("eAirway.09");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();
        OXML.Node("SuspectedReasonsforFailedAirwayProcedure", NOT_APPLICABLE);

    }
    else
    {
        eAirway.push(AirwayGroupArray);
    };
      */      
    return eAirway;
};
var seteArrest = function (eArrestObject) 
{
    var eArrest = new Object();
    /*
    if (eArrestObject != 'undefined')
    {
    /////////////eArrest.01
        Call.HasArrest = false;
        _arrest = getValue(businessObject.elements, "eArrest.01");
        if (_arrest.IsNull == true)
        {
            Call.HasArrest = false; //set Values to Not Applicable
            eArrest["eArrest.01"] = V3NOT_RECORDED
            eArrest["CardiacArrest"] = NOT_RECORDED;
            v2Array.push({ section: "E11", element: "E11_01", val: v2NOT_RECORDED });

            XML.BeginNode("eArrest.01");
            XML.Attrib("NV", NIL_V3NOT_REPORTING);
            XML.EndNode();

            OXML.Node("CardiacArrest", NOT_REPORTING);

        }
        else 
        {
            _val = _dispo.ValueArray[0].val;
            Call.HasArrest = true;   //We have an eArrest 
            if (_val != "3001001") 
            {
                eArrest["isCardiacArrest"] = true;
            }
            else 
            {
                eArrest["isCardiacArrest"] = false;
            };
            eArrest["eArrest.01"] = _val;
            eArrest["CardiacArrest"] = setCodeText("eArrest.01", _val);

            XML.Node("eArrest.01", _val);
            OXML.Node("CardiacArrest", setCodeText("eArrest.01", _val));
            v2Array.push({ section: "E11", element: "E11_01", val: setV2("eArrest.01", _val) });
        };


        //When eArrest.01 Cardiac Arrest is "Yes...", other elements in the eArrest section are recorded, 
        //When eArrest.01 Cardiac Arrest is not "Yes...", other elements in the eArrest section are not recorded

        /////////////eArrest.02
        _arrest = getValue(businessObject.elements, "eArrest.02");

        if (isApplicable == true)  //If there is no incident, all set to NOT_APPLICABLE
        {
            if (eArrest["isCardiacArrest"] == true)  //Yes value for eArrest.01
            {
                if (_arrest.IsNull == true)
                {
                    eArrest["eArrest.02"] = V3NOT_RECORDED
                    eArrest["CardiacArrestEtiology"] = NOT_RECORDED;
                    v2Array.push({ section: "E11", element: "E11_02", val: v2NOT_RECORDED });

                    XML.BeginNode("eArrest.02");
                    XML.Attrib("NV", NIL_V3NOT_RECORDED);
                    XML.EndNode();

                    OXML.Node("CardiacArrestEtiology", NOT_REPORTING);
                }
                else 
                {
                    _val = _dispo.ValueArray[0].val;
                    eArrest["eArrest.02"] = _val;
                    eArrest["CardiacArrestEtiology"] = setCodeText("eArrest.02", _val);
                    v2Array.push({ section: "E11", element: "E11_02", val: setV2("eArrest.02", _val) });

                    XML.Node("eArrest.02", _val);
                    OXML.Node("CardiacArrestEtiology", setCodeText("eArrest.02", _val));
                }
            }
        }
        else 
        {
            eArrest["eArrest.02"] = NIL_V3NOT_APPLICABLE;
            eArrest["CardiacArrestEtiology"] = V3NOT_APPLICABLE;;
            v2Array.push({ section: "E11", element: "E11_02", val: v2NOT_APPLICABLE });

            XML.BeginNode("eArrest.02");
            XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
            XML.EndNode();

            OXML.Node("CardiacArrestEtiology", NOT_APPLICABLE);
        };


        /////////////eArrest.03
        //Resuscitation Attempted By EMS does not contain "Attempted/Initiated..." and "Not Attempted..." in the same record

        eArrest["wasbResuscitationAttempted"] = false;
        _arrest = getValue(businessObject.elements, "eArrest.03");
        if (eArrest["isCardiacArrest"] == true)  //Yes value for eArrest.01
        {
            if (_arrest.IsNull == true)
            {
                eArrest["eArrest.03"] = V3NOT_RECORDED;
                eArrest["ResuscitationAttemptedByEMS"] = V3NOT_RECORDED;
                v2Array.push({ section: "E11", element: "E11_02", val: v2NOT_RECORDED });

                XML.BeginNode("eArrest.03");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("ResuscitationAttemptedByEMS", NOT_RECORDED);
            }
            else 
            {
                var arrAttempt = ["3003001", "3003003", "3003005"];
                var arr1 = [];
                var arr2 = [];
                var arr3 = [];
                for (var i = 0; i < _val.length; i++) 
                {
                    //Find Attempted Resuscitation
                    for (var i = 0; i < _dispo.ValueArray.length; i++)
                    {
                        if ((_dispo.ValueArray[i].HasValue == true) && (arr1.indexOf(_dispo.ValueArray[i].val) > -1))
                        {
                            _val = _dispo.ValueArray[i].val
                            eArrest["wasbResuscitationAttempted"] = true;
                            arr1.push(_val);
                            arr2.push(setV2("eArrest.03", _val));
                            arr3.push(setCodeText("eArrest.03", _val));

                            OXML.Node("ResuscitationAttemptedByEMS", setCodeText("eArrest.03", _val));
                            XML.Node("eArrest.03", _val);
                        }
                    };
                };

                //Check for an Attempt with list of No Attempts
                var arrNotAttempt = ["3003007", "3003009", "3003011"];
                if (eArrest["wasbResuscitationAttempted"] == true) 
                {
                    for (var i = 0; i < arr1.length; i++) 
                    {
                        if (arrNotAttempt.indexOf(arr1[i]) != -1) 
                        {
                            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eArrest.03", Description: "Conflicting values:  Attempted/Not Attempted" })
                        }
                    }
                }

                eArrest["eArrest.03"] = arr1.slice(0);
                eArrest["ResuscitationAttemptedByEMS"] = arr3.slice(0);
                v2Array.push({ section: "E11", element: "E11_03", val: arr3.slice(0) });

            }
        }
        else 
        {
            eArrest["eArrest.03"] = NIL_V3NOT_APPLICABLE;
            eArrest["ResuscitationAttemptedByEMS"] = V3NOT_APPLICABLE;;
            v2Array.push({ section: "E11", element: "E11_03", val: v2NOT_APPLICABLE });

            XML.BeginNode("eArrest.03");
            XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
            XML.EndNode();

            OXML.Node("ResuscitationAttemptedByEMS", NOT_APPLICABLE);
        };
        
        /////////////eArrest.04
        var bArrestWitnessedBy = false;
        _arrest = getValue(businessObject.elements, "eArrest.04");
        if (eArrest["isCardiacArrest"] == true)  //Yes value for eArrest.01
        {
            if(_arrest.IsNull==true) 
            {
                eArrest["eArrest.04"] = V3NOT_RECORDED;
                eArrest["ArrestWitnessedBy"] = V3NOT_RECORDED;
                v2Array.push({ section: "E11", element: "E11_04", val: v2NOT_RECORDED });

                XML.BeginNode("eArrest.04");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("ArrestWitnessedBy", NOT_RECORDED);
            }
            else 
            {
                var arr1 = [];
                var arr2 = [];
                var arr3 = [];
                for (var i = 0; i < _dispo.ValueArray.length; i++)
                {
                    if ((_dispo.ValueArray[i].HasValue == true) && (arr1.indexOf(_dispo.ValueArray[i].val) > -1))
                    {
                        _val = _dispo.ValueArray[i].val
                        arr1.push(_val);
                        arr2.push(setV2("eArrest.04", _val));
                        arr3.push(setCodeText("eArrest.04", _val));
                        OXML.Node("ArrestWitnessedBy", setCodeText("eArrest.04", _val));
                        XML.Node("eArrest.04", _val);
                    }
                };
                eArrest["eArrest.04"] = arr1.slice(0);
                eArrest["ArrestWitnessedBy"] = arr3.slice(0);
                v2Array.push({ section: "E11", element: "E11_04", val: arr2.slice(0) });
            }
        }
        else 
        {
            eArrest["eArrest.04"] = NIL_V3NOT_APPLICABLE;
            eArrest["ArrestWitnessedBy"] = V3NOT_APPLICABLE;;
            v2Array.push({ section: "E11", element: "E11_04", val: v2NOT_APPLICABLE });

            XML.BeginNode("eArrest.04");
            XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
            XML.EndNode();

            OXML.Node("ArrestWitnessedBy", NOT_APPLICABLE);
        };

        /////////////eArrest.05
        eArrest["wasCPRProvide"] = false; //can only be True when isArrest is True
        
        _arrest = getValue(businessObject.elements, "eArrest.05");
        if (eArrest["isCardiacArrest"] == true)  //Yes value for eArrest.01
        {
            if(_arrest.IsNull==true) 
            {
                eArrest["eArrest.05"] = V3NOT_RECORDED;
                eArrest["CPRCareProvidedPriortoEMSArrival"] = V3NOT_RECORDED;

                XML.BeginNode("eArrest.05");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("CPRCareProvidedPriortoEMSArrival", NOT_RECORDED);
            }
            else 
            {
                _val = _dispo.ValueArray[0].val;
                if (_val == "9923003") 
                {
                    eArrest["wasCPRProvide"] = true;
                }
                eArrest["eArrest.05"] = _val;
                eArrest["CPRCareProvidedPriortoEMSArrival"] = setCodeText("eArrest.05", _val);

                OXML.Node("CPRCareProvidedPriortoEMSArrival", setCodeText("eArrest.05", _val));
                XML.Node("eArrest.05", _val);
            }
        }
        else 
        {
            eArrest["eArrest.05"] = V3NOT_APPLICABLE;
            eArrest["CPRCareProvidedPriortoEMSArrival"] = V3NOT_APPLICABLE;

            XML.BeginNode("eArrest.05");
            XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
            XML.EndNode();

            OXML.Node("CPRCareProvidedPriortoEMSArrival", NOT_APPLICABLE);
        };

        /////////////eArrest.06
        _arrest = getValue(businessObject.elements, "eArrest.06");
        if (eArrest["wasCPRProvide"] == true)  //Yes value for eArrest.01
        {
            if(_arrest.IsNull==true) 
            {
                eArrest["eArrest.06"] = null;
                eArrest["WhoProvidedCPRPriortoEMSArrival"] = null;
                OXML.Node("WhoProvidedCPRPriortoEMSArrival", "");
                XML.Node("eArrest.06", "");

            }
            else 
            {
                var arr1 = [];
                var arr3 = [];
                for (var i = 0; i < _dispo.ValueArray.length; i++)
                {
                    if ((_dispo.ValueArray[i].HasValue == true) && (arr1.indexOf(_dispo.ValueArray[i].val) > -1))
                    {
                        _val = _dispo.ValueArray[i].val
                        arr1.push(_val);
                        arr3.push(setCodeText("eArrest.06", _val));
                        OXML.Node("WhoProvidedCPRPriortoEMSArrival", setCodeText("eArrest.06", _val));
                        XML.Node("eArrest.06", _val);
                    }
                };
                dAgency["eArrest.06"] = arr1.slice(0);
                eArrest["WhoProvidedCPRPriortoEMSArrival"] = arr3.slice(0)
            }
        }
        else// Else included as rule documentation,... and I may have use for it later
        {
            eArrest["eArrest.06"] = null;
            eArrest["WhoProvidedCPRPriortoEMSArrival"] = null;

            OXML.Node("WhoProvidedCPRPriortoEMSArrival", "");
            XML.Node("eArrest.06", "");
        };


        /////////////eArrest.07
        eArrest["wasAEDProvided"] = false;
        _arrest = getValue(businessObject.elements, "eArrest.07");
        if (eArrest["isCardiacArrest"])  //If there is no incident, all set to NOT_APPLICABLE
        {
            if(_arrest.IsNull==true) 
            {
                eArrest["eArrest.07"] = V3NOT_RECORDED;
                eArrest["AEDUsePriortoEMSArrival"] = V3NOT_RECORDED;

                XML.BeginNode("eArrest.07");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("AEDUsePriortoEMSArrival", NOT_RECORDED);
            }
            else 
            {
                _val = _dispo.ValueArray[0].val;
                if (_val != "3007001") 
                {
                    eArrest["wasAEDProvided"] = true;
                };
                eArrest["eArrest.07"] = _val;
                eArrest["AEDUsePriortoEMSArrival"] = setCodeText("eArrest.07", _val);

                OXML.Node("AEDUsePriortoEMSArrival", setCodeText("eArrest.07", _val));
                XML.Node("eArrest.07", _val);
            }
        }
        else 
        {
            eArrest["eArrest.07"] = V3NOT_APPLICABLE;
            eArrest["AEDUsePriortoEMSArrival"] = V3NOT_APPLICABLE;

            XML.BeginNode("eArrest.07");
            XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
            XML.EndNode();

            OXML.Node("AEDUsePriortoEMSArrival", NOT_APPLICABLE);
        };

        /////////////eArrest.08
        _arrest = getValue(businessObject.elements, "eArrest.08");

        if (eArrest["isCardiacArrest"])  //If there is no incident, all set to NOT_APPLICABLE
        {
            if (eArrest["wasAEDProvided"] == true)  //
            {
                if(_arrest.IsNull==true) 
                {
                    eArrest["eArrest.08"] = null;
                    eArrest["WhoUsedAEDPriortoEMSArrival"] = null;
                    XML.Node("eArrest.08", "");
                    OXML.Node("WhoUsedAEDPriortoEMSArrival", "");
                }
                else 
                {
                    _val = _dispo.ValueArray[0].val;
                    eArrest["eArrest.08"] = _val;
                    eArrest["WhoUsedAEDPriortoEMSArrival"] = setCodeText("eArrest.08", _val);

                    XML.Node("eArrest.08", _val);
                    OXML.Node("WhoUsedAEDPriortoEMSArrival", setCodeText("eArrest.08", _val));
                }
            }
        }
        else 
        {
            eArrest["eArrest.08"] = null;
            eArrest["WhoUsedAEDPriortoEMSArrival"] = null;

            XML.Node("eArrest.08", "");
            OXML.Node("WhoUsedAEDPriortoEMSArrival", "");
        };

        //eArrest.03 Resuscitation Attempted By EMS should contain "Initiated Chest Compressions" 
        //when eArrest.09 Type of CPR Provided contains "Compressions..." and should contain "Attempted Ventilation" 
        //when eArrest.09 Type of CPR Provided contains "Ventilation...".</sch:title>
        // This rule fires when there are non-empty instances of eArrest.09 within eArrest. -->  
        //:eArrest.03 = '3003005' or not(nem:eArrest.09 = ('3009001', '3009003', '3009005', '3009007', 
        //'3009009', '3009011'))">


        //Assert that eArrest.03 Resuscitation Attempted by EMS should contain "Attempted Ventilation" when eArrest.09 
        //Type of CPR Provided contains "Ventilation...".  -->

        //eArrest.03 = '3003003' or not(nem:eArrest.09 = ('3009013', '3009015', '3009017', '3009019'))">
        //should contain "Attempted Ventilation" when .


        /////////////eArrest.09
        _arrest = getValue(businessObject.elements, "eArrest.09");
        if (eArrest["isCardiacArrest"] == true)  //If there is no incident, all set to NOT_APPLICABLE
        {
            if (eArrest["wasCPRProvide"] == true)  //Yes value for eArrest.01
            {
                if(_arrest.IsNull==true) 
                {
                    eArrest["eArrest.09"] = null;
                    eArrest["TypeofCPRProvided"] = null;
                    XML.Node("eArrest.09", "");
                    OXML.Node("TypeofCPRProvided", "");
                }
                else 
                {

                    var arr1 = [];
                    var arr3 = [];
                    for (var i = 0; i < _dispo.ValueArray.length; i++)
                    {
                        if ((_dispo.ValueArray[i].HasValue == true) && (arr1.indexOf(_dispo.ValueArray[i].val) > -1))
                        {
                            _val = _dispo.ValueArray[i].val
                            arr1.push(_val);
                            arr3.push(setCodeText("eArrest.09", _val));
                            XML.Node("eArrest.09", _val);
                            OXML.Node("TypeofCPRProvided", setCodeText("eArrest.09", _val));
                        }
                    };

                    bError = false;
                    //Check for Compression 3003005, if eArrest.03 values = Compression
                    arrCompression = ["3009001", "3009003", "3009005", "3009007", "3009009", "3009011"]; //Compression values
                    if (eArrest["eArrest.03"] = "3003005") //Compression
                    {
                        if (arrCompression.indexOf(_val) != -1) 
                        {
                            bError = true;
                            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eArrest.09", Description: "Validation Error:Conflicting values.  Resuscitation Attempted By EMS should contain " / "Initiated Chest Compressions" / "" })
                        }
                    };

                    //Check for Compression 3003005, if eArrest.03 values = Ventilation
                    arrVent = ["3009013", "3009015", "3009017", "3009019"]; //Ventilation values
                    if (eArrest["eArrest.03"] = "3003003") //Ventilation
                    {
                        if (arrVent.indexOf(_val) != -1) 
                        {
                            bError = true;
                            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eArrest.09", Description: "Validation Error:Conflicting values.  Resuscitation Attempted By EMS should contain " / "Attempted Ventilation" / "" })
                        }
                    };

                    //Check for VENTILATION 3003005, if eArrest.03 values = Compression
                    arrCompression = ["3009001", "3009003", "3009005", "3009007", "3009009", "3009011"]; //Compression values
                    if (eArrest["eArrest.03"] = "3003005") //Compression
                    {
                        if (arrNotAttempt.indexOf(_val) != -1) 
                        {
                            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eArrest.09", Description: "Validation Error:Conflicting values.  Resuscitation Attempted By EMS should contain " / "Initiated Chest Compressions" / "" })
                        }
                    };

                    if (bError == true) 
                    {
                        dAgency["eArrest.09"] = arr1.slice(0);
                        dAgency["TypeofCPRProvided"] = arr1.slice(0);
                    }
                }
            }
        }
        else 
        {
            eArrest["eArrest.09"] = V3NOT_APPLICABLE;
            dAgency["TypeofCPRProvided"] = V3NOT_APPLICABLE

            XML.BeginNode("eArrest.09");
            XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
            XML.EndNode();

            OXML.Node("TypeofCPRProvided", NOT_APPLICABLE);
        };
        
        /////////////eArrest.10
        _arrest = getValue(businessObject.elements, "eArrest.10");
        if (eArrest["isCardiacArrest"] == true)  //If there is no incident, all set to NOT_APPLICABLE
        {
            if(_arrest.IsNull==true)
            {
                if (isRequiredStateElement("eArrest.10") == true) 
                {
                    eArrest["eArrest.10"] = V3NOT_RECORDED;
                    eArrest["TherapeuticHypothermiaInitiated"] = V3NOT_RECORDED;

                    XML.BeginNode("eArrest.04");
                    XML.Attrib("NV", NIL_V3NOT_RECORDED);
                    XML.EndNode();

                    OXML.Node("ArrestWitnessedBy", NOT_RECORDED);
                }
                else 
                {
                    eArrest["eArrest.10"] = null;            
                    eArrest["TherapeuticHypothermiaInitiated"] = null;

                    XML.Node("eArrest.10", "");
                    OXML.Node("TherapeuticHypothermiaInitiated", "");

                }
            }
            else
            {
                _val = _dispo.ValueArray[0].val;
                eArrest["eArrest.10"] = _val;
                eArrest["TherapeuticHypothermiaInitiated"] = setCodeText("eArrest.10", _val);

                XML.Node("eArrest.10", _val);
                OXML.Node("TherapeuticHypothermiaInitiated", setCodeText("eArrest.11", _val));

            }
        }
        else        
        {
            eArrest["eArrest.10"] = v3NOT_APPLICABLE;
            eArrest["TherapeuticHypothermiaInitiated"] = v3NOT_APPLICABLE;       
                
            XML.BeginNode("eArrest.02");
            XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
            XML.EndNode();

            OXML.Node("CardiacArrestEtiology", NOT_APPLICABLE);

        };
        
        
        /////////////eArrest.11
        _arrest = getValue(businessObject.elements, "eArrest.11");
        if (eArrest["isCardiacArrest"] == true)  //If there is no incident, all set to NOT_APPLICABLE
            {
            if(_arrest.IsNull==true)
            {
                eArrest["eArrest.11"] = V3NOT_RECORDED;
                eArrest["FirstMonitoredArrestRhythmofthePatient"] = NOT_RECORDED;
                v2Array.push({ section: "E11", element: "E11_05", val: v2NOT_RECORDED });

                XML.BeginNode("eArrest.11");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("FirstMonitoredArrestRhythmofthePatient", NOT_RECORDED);
            }
            else
            {
                _val = _dispo.ValueArray[0].val;
                eArrest["eArrest.11"] = _val;
                eArrest["FirstMonitoredArrestRhythmofthePatient"] = setCodeText("eArrest.11", _val);
                v2Array.push({ section: "E11", element: "E11_05", val: _val });

                OXML.Node("FirstMonitoredArrestRhythmofthePatient", setCodeText("eArrest.11", _val));
                XML.Node("eArrest.11", _val);
            }
        }
        else
        {
            eArrest["eArrest.11"] = v3NOT_APPLICABLE;
            eArrest["FirstMonitoredArrestRhythmofthePatient"] = v3NOT_APPLICABLE;
            v2Array.push({ section: "E11", element: "E11_05", val: v2NOT_APPLICABLE });

            XML.BeginNode("eArrest.11");
            XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
            XML.EndNode();
            
            OXML.Node("FirstMonitoredArrestRhythmofthePatient", NOT_APPLICABLE);
        };
        
        
        /////////////eArrest.12
        _arrest = getValue(businessObject.elements, "eArrest.12");
        if (eArrest["isCardiacArrest"] == true)  //If there is no incident, all set to NOT_APPLICABLE
        {
            if(_arrest.IsNull==true)
            {
            if (isRequiredStateElement("eArrest.12") == true)
            {
                eArrest["eArrest.12"] = V3NOT_RECORDED;
                eArrest["AnyReturnofSpontaneousCirculation"] = V3NOT_RECORDED;
                v2Array.push({ section: "E11", element: "E11_06", val: v2NOT_RECORDED });            

                XML.BeginNode("eArrest.12");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("AnyReturnofSpontaneousCirculation", NOT_RECORDED);
            }                
            }
            else
            {    
                var arr1 = [];
                var arr2 = [];
                var arr3 = [];        
                for (var i = 0; i < _dispo.ValueArray.length; i++)
                {
                    if ((_dispo.ValueArray[i].HasValue == true) && (arr1.indexOf(_dispo.ValueArray[i].val) > -1))
                    {
                        _val = _dispo.ValueArray[i].val
                        arr1.push(_val);
                        arr2.push(setV2("eArrest.12", _val));
                        arr2.push(setCodeText("eArrest.12", _val))
                        XML.Node("eArrest.12", _val);
                        OXML.Node("AnyReturnofSpontaneousCirculation",  setCodeText("eArrest.12", _val));
                    }
                };
        
                if (arr1.length >1) 
                {
                    if(arr1.indexOf("3012001") != -1)
                    {
                        ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eArrest.09", Description: "Validation Error:Conflicting values.  Any Return of Spontaneous Circulation Contains Conflicting Values" })
                    }
                };
                v2Array.push({ section: "E11", element: "E11_06", val: arr2.slice(0)});
                dAgency["eArrest.12"] = arr1.slice(0);
                dAgency["AnyReturnofSpontaneousCirculation"] = arr3.slice(0);
            }
        }
        else
        { 
            eArrest["eArrest.12"] = v3NOT_APPLICABLE;
            eArrest["AnyReturnofSpontaneousCirculation"] = v3NOT_APPLICABLE;
            v2Array.push({ section: "E11", element: "E11_06", val: v2NOT_APPLICABLE });        
                
            XML.BeginNode("eArrest.12");
            XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
            XML.EndNode();

            OXML.Node("AnyReturnofSpontaneousCirculation", NOT_APPLICABLE);
        };
                
        
        /////////////eArrest.13
        _arrest = getValue(businessObject.elements, "eArrest.13");
        if(_arrest.IsNull==true)
        {
            eArrest["eArrest.13"] = null;
            eArrest["NeurologicalOutcomeatHospitalDischarge"] = null;

            XML.Node("eArrest.13", "");
            OXML.Node("NeurologicalOutcomeatHospitalDischarge",  "");

        }
        else 
        {
            _val = _dispo.ValueArray[0].val;
            eArrest["eArrest.13"] = _val;
            eArrest["NeurologicalOutcomeatHospitalDischarge"] = setCodeText("eArrest.13", _val);

            XML.Node("eArrest.13", _val);
            OXML.Node("NeurologicalOutcomeatHospitalDischarge",  setCodeText("eArrest.13", _val));
        };
        
        /////////////eArrest.14
        _arrest = getValue(businessObject.elements, "eArrest.14");
        if (eArrest["isCardiacArrest"] == true)  //If there is no incident, all set to NOT_APPLICABLE
        {
            if(_arrest.IsNull==true)
            {
                if (isRequiredStateElement("eArrest.14") == true)
                {
                    eArrest["eArrest.14"] = v3NOT_RECORDED;
                    eArrest["DateTimeofCardiacArrest"] = v3NOT_RECORDED;
                    v2Array.push({ section: "E11", element: "E11_08", val: v2NOT_RECORDED });

                    XML.BeginNode("eArrest.14");
                    XML.Attrib("NV", NIL_V3NOT_RECORDED);
                    XML.EndNode();

                    OXML.Node("DateTimeofCardiacArrest", NOT_RECORDED);
                }
                else
                {  
                    eArrest["eArrest.14"] = null;
                    eArrest["DateTimeofCardiacArrest"] = null;
                    v2Array.push({ section: "E11", element: "E11_08", val: null });

                    OXML.Node("DateTimeofCardiacArrest", "");
                    XML.Node("eArrest.14", "");
                }
            }
            else
            {
                _val = _dispo.ValueArray[0].val;
                eArrest["eArrest.14"] = _val;
                eArrest["DateTimeofCardiacArrest"] = _val;
                v2Array.push({ section: "E11", element: "E11_08", val: _val });

                XML.Node("eArrest.14", _val);
                OXML.Node("DateTimeofCardiacArrest",  _val);
            }
        }
        else
        {        
            eArrest["eArrest.14"] = v3NOT_APPLICABLE;
            eArrest["DateTimeofCardiacArrest"] = v3NOT_APPLICABLE;
            v2Array.push({ section: "E11", element: "E11_08", val: v2NOT_APPLICABLE });
            
            XML.BeginNode("eArrest.14");
            XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
            XML.EndNode();

            OXML.Node("DateTimeofCardiacArrest", NOT_APPLICABLE);
        };
        
        /////////////eArrest.15
                    
        _arrest = getValue(businessObject.elements, "eArrest.15");
        if (eArrest["wasbResuscitationAttempted"] == true)
        {
            if(_arrest.IsNull==true)
            {        
                if (isRequiredStateElement("eArrest.15") == true) 
                {           
                    eArrest["eArrest.15"] = v3NOT_RECORDED;
                    eArrest["DateTimeResuscitationDiscontinued"] = v3NOT_RECORDED;
                    v2Array.push({ section: "E11", element: "E11_09", val: v2NOT_RECORDED });

                    XML.BeginNode("eArrest.15");
                    XML.Attrib("NV", NIL_V3NOT_RECORDED);
                    XML.EndNode();

                    OXML.Node("DateTimeResuscitationDiscontinued", NOT_RECORDED);
                }
                else
                {
                    eArrest["eArrest.15"] = v3NOT_REPORTING;
                    eArrest["DateTimeResuscitationDiscontinued"] = v3NOT_REPORTING;
                    v2Array.push({ section: "E11", element: "E11_09", val: v2NOT_REPORTING });            

                    XML.BeginNode("eArrest.15");
                    XML.Attrib("NV", NIL_V3NOT_RECORDED);
                    XML.EndNode();

                    OXML.Node("DateTimeResuscitationDiscontinued", NOT_RECORDED);
                }          
            }
            else
            {
                _val = _dispo.ValueArray[0].val;
                eArrest["eArrest.15"] = _val;
                eArrest["DateTimeResuscitationDiscontinued"] = _val;
                v2Array.push({ section: "E11", element: "E11_08", val: _val });

                XML.Node("eArrest.15", _val);
                OXML.Node("DateTimeResuscitationDiscontinued",  _val);
            }
        }
        else
        {        
            eArrest["eArrest.15"] = v3NOT_APPLICABLE;
            eArrest["DateTimeResuscitationDiscontinued"] = v3NOT_APPLICABLE;
            v2Array.push({ section: "E11", element: "E11_09", val: v2NOT_APPLICABLE });   

            XML.BeginNode("eArrest.15");
            XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
            XML.EndNode();

            OXML.Node("DateTimeResuscitationDiscontinued", NOT_APPLICABLE);
        };
        
                
        /////////////eArrest.16
        _arrest = getValue(businessObject.elements, "eArrest.16");
        if(eArrest.wasCPRProvide ==true)
        {
            if(_arrest.IsNull==true)
            {
                if (isRequiredStateElement("eArrest.15") == true)
                {
                    eArrest["eArrest.16"] = v3NOT_RECORDED;
                    eArrest["ReasonCPRResuscitationDiscontinued"] = v3NOT_RECORDED;
                    v2Array.push({ section: "E11", element: "E11_10", val: v2NOT_RECORDED });

                    XML.BeginNode("eArrest.04");
                    XML.Attrib("NV", NIL_V3NOT_RECORDED);
                    XML.EndNode();

                    OXML.Node("ReasonCPRResuscitationDiscontinued", NOT_RECORDED);
                }
                else 
                {            
                    eArrest["eArrest.16"] = v3NOT_REPORTING;
                    eArrest["ReasonCPRResuscitationDiscontinued"] = v3NOT_REPORTING;
                    v2Array.push({ section: "E11", element: "E11_10", val: v2NOT_REPORTING });

                    XML.BeginNode("eArrest.16");
                    XML.Attrib("NV", NIL_V3NOT_RECORDED);
                    XML.EndNode();

                    OXML.Node("ReasonCPRResuscitationDiscontinued", NOT_RECORDED);
                }
            }    
            else
            {
                _val = _dispo.ValueArray[0].val;
                eArrest["eArrest.16"] = _val;
                eArrest["ReasonCPRResuscitationDiscontinued"] =  setCodeText("eArrest.16", _val);
                v2Array.push({ section: "E11", element: "E11_10", val: setV2("eArrest.16", _val)});

                XML.Node("eArrest.16", _val);
                OXML.Node("ReasonCPRResuscitationDiscontinued", setCodeText("eArrest.16", _val));
            }
        }
        else
        {
            eArrest["eArrest.16"] = v3NOT_APPLICABLE;
            eArrest["ReasonCPRResuscitationDiscontinued"] = v3NOT_APPLICABLE;
            v2Array.push({ section: "E11", element: "E11_10", val: v2NOT_APPLICABLE });

            XML.BeginNode("eArrest.16");
            XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
            XML.EndNode();

            OXML.Node("ReasonCPRResuscitationDiscontinued", NOT_APPLICABLE);        
        };
                
        /////////////eArrest.17
        _arrest = getValue(businessObject.elements, "eArrest.17");
        if (eArrest["isCardiacArrest"] == true)  //If there is no incident, all set to NOT_APPLICABLE
        {
            if(_arrest.IsNull==true) {
                dAgency["eArrest.17"] = V3NOT_RECORDED;
                dAgency["CardiacRhythmonArrivalatDestination"] = V3NOT_RECORDED;
                v2Array.push({ section: "E11", element: "E11_11", val: V2NOT_RECORDED });

                XML.BeginNode("eArrest.17");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("CardiacRhythmonArrivalatDestination", NOT_RECORDED);
            }
            else {
        
                var arr1 = [];
                var arr2 = [];
                var arr3 = [];
                for (var i = 0; i < _dispo.ValueArray.length; i++)
                {
                    if ((_dispo.ValueArray[i].HasValue == true) && (arr1.indexOf(_dispo.ValueArray[i].val) > -1))
                    {
                        _val = _dispo.ValueArray[i].val
                        arr1.push(_val);
                        arr2.push(setV2("eArrest.17", _val));
                        arr3.push(setCodeText("eArrest.17", _val));

                        XML.Node("eArrest.17", _val);
                        OXML.Node("CardiacRhythmonArrivalatDestination", setCodeText("eArrest.17", _val));
                    }
                };
        
                dAgency["eArrest.17"] = arr1.slice(0);
                dAgency["CardiacRhythmonArrivalatDestination"] = arr3.slice(0);
                v2Array.push({ section: "E11", element: "E11_11", val: arr2.slice(0) });
            }
        }
        else
        {
            dAgency["eArrest.17"] = v3NOT_APPLICABLE;
            dAgency["CardiacRhythmonArrivalatDestination"] = v3NOT_APPLICABLE;
            v2Array.push({ section: "E11", element: "E11_11", val: v2NOT_APPLICABLE });

            XML.BeginNode("eArrest.17");
            XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
            XML.EndNode();

            OXML.Node("CardiacRhythmonArrivalatDestination", NOT_APPLICABLE);

        };
                  
        /////////////eArrest.18
        _arrest = getValue(businessObject.elements, "eArrest.18");
        if (eArrest["isCardiacArrest"] == true)  //If there is no incident, all set to NOT_APPLICABLE
        {
            if(_arrest.IsNull==true) {
                eArrest["eArrest.18"] = V3NOT_RECORDED;
                eArrest["EndofEMSCardiacArrestEvent"] = V3NOT_RECORDED;

                XML.BeginNode("eArrest.18");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("EndofEMSCardiacArrestEvent", NOT_RECORDED);
            }
            else
            {
                _val = _dispo.ValueArray[0].val;
                eArrest["eArrest.18"] = _val;
                eArrest["EndofEMSCardiacArrestEvent"] = setCodeText("eArrest.17", _val);

                XML.Node("eArrest.18", _val);
                OXML.Node("EndofEMSCardiacArrestEvent", setCodeText("eArrest.17", _val));
            }
        }
        else
        {
            eArrest["eArrest.18"] = v3NOT_APPLICABLE;
            eArrest["EndofEMSCardiacArrestEvent"] = v3NOT_APPLICABLE;

            XML.BeginNode("eArrest.18");
            XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
            XML.EndNode();

            OXML.Node("EndofEMSCardiacArrestEvent", NOT_APPLICABLE);
        }
    };

    eArrest.XML = XML;
    eArrest.OXML = OXML;
    */
    return eArrest;
};
var seteTimes = function (businessObject)
{
    var eTimes = new Object();
        /*
    //eTimes.01//////////////////      
    var _times = new Object();
    _times = getValue(businessObject.elements, "eTimes.01");
    Call["is911Call"] = false;  //determines if call is 911 or otherwise (external call)
    if (Call.isEmergant == true) 
    {
        if (_times.IsNull == true)
        {
        
            if (isRequiredStateElement("eTimes.01")) 
            {
                eTimes["eTimes.01"] = v3NOT_RECORDED;
                eTimes["PSAPCallDateTime"] = v3NOT_RECORDED;
                v2Array.push({ section: "E05", element: "E05_02", val: null });

                XML.BeginNode("eTimes.01");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("PSAPCallDateTime", NOT_RECORDED);
            }
            else 
            {
                eTimes["eTimes.01"] = null;
                eTimes["PSAPCallDateTime"] = null;
                v2Array.push({ section: "E05", element: "E05_02", val: null });

                OXML.Node("PSAPCallDateTime", "");
                XML.Node("eTimes.01", "");
            }
        }
        else 
        {
            _val = _dispo.ValueArray[0].val;
            eTimes["is911Call"] = true;
            eTimes["PSAPCallDateTime"] = _val;
            eTimes["eTimes.01"] = _val;
            v2Array.push({ section: "E05", element: "E05_02", val: _val });

            OXML.Node("PSAPCallDateTime", _val);
            XML.Node("eTimes.01", _val);

        }
    }
    else
    {
        eTimes["eTimes.01"] = v3NOT_APPLICABLE;
        eTimes["PSAPCallDateTime"] = v3NOT_APPLICABLE;
        v2Array.push({ section: "E05", element: "E05_02", val: null });

        XML.BeginNode("eTimes.01");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("PSAPCallDateTime", NOT_APPLICABLE);

    };

    //eTimes.02//////////////////
    _times = getValue(businessObject.elements, "eTimes.02");
    if (_times.IsNull == true)
    {
        eTimes["eTimes.02"] = null
        eTimes["DispatchNotifiedDateTime"] = null;
        v2Array.push({ section: "E05", element: "E05_03", val: null });

        OXML.Node("DispatchNotifiedDateTime", "");
        XML.Node("eTimes.02", "");
    }
    else
    {
        _val = _dispo.ValueArray[0].val;
        if (eTimes["is911Call"] == true) 
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eTimes.02", Description: "911 Call Date entered for non-emergent call " })
        };
        eTimes["DispatchNotifiedDateTime"] = _val;
        v2Array.push({ section: "E05", element: "E05_03", val: _val });
        eTimes["eTimes.02"] = _val;

        OXML.Node("DispatchNotifiedDateTime", _val);
        XML.Node("eTimes.02", _val);

    };
        
    //eTimes.03//////////////////
    _times = getValue(businessObject.elements, "eTimes.03");
    if (_times.IsNull == true)
    {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eTimes.03", Description: "Unit Notified by Dispatch Date/Time Mandatory value. " })

        eTimes["eTimes.03"] = null;
        eTimes["UnitNotifiedbyDispatchDateTime"] = null;
        v2Array.push({ section: "E05", element: "E05_04", val: null });

        OXML.Node("UnitNotifiedbyDispatchDateTime", "");
        XML.Node("eTimes.03", "");
    }
    else 
    {
        _val = _dispo.ValueArray[0].val;
        // Time Rules:
        //eAirway.10: Date/Time Decision to Manage the Patient with an Invasive Airway should not occur prior 
        //to: Unit Notified by Dispatch Date/Time
        
        if (eAirwayGroup["eAirway.10"] != null) 
        {
            if (eAirwayGroup["eAirway.10"] >= _val) 
            {
                ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eTimes.03", Description: "Validation Error: eAirway.10 Date/Time Decision to Manage the Patient with an Invasive Airway should not occur prior to: Unit Notified by Dispatch Date/Time" })
            }
        };
        
        if (eAirwayGroup["eAirway.11"] != null) 
        {
            if (eAirwayGroup["eAirway.11"] >= _val) 
            {
                ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eTimes.03", Description: "Validation Error: eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Date/Time Decision to Manage the Patient with an Invasive Airway, Unit Notified by Dispatch Date/Time" })
            }
        };
        v2Array.push({ section: "E05", element: "E05_04", val: _val });
        eTimes["eTimes.03"] = _val;
        eTimes["UnitNotifiedbyDispatchDateTime"] = _val;

        OXML.Node("UnitNotifiedbyDispatchDateTime", _val);
        XML.Node("eTimes.03", _val);
    };
        
    //eTimes.04//////////////////
    _times = getValue(businessObject.elements, "eTimes.04");
    if (_times.IsNull == true)
    {
        eTimes["eTimes.04"] = null;
        eTimes["DispatchAcknowledgedDateTime"] = null;

        OXML.Node("DispatchAcknowledgedDateTime", "");
        XML.Node("eTimes.04", "");
    }
    else 
    {
        _val = _dispo.ValueArray[0].val;
        if (_val > eTimes["eTimes.03"]) 
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eTimes.04", Description: "Validation Error: eAirway.11: eTimes.03:  Dispatch Acknowledged prior to notification." })
        };
                
        if (eAirwayGroup["eAirway.11"] >= _val) 
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eTimes.04", Description: "Validation Error: eAirway.11: eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Dispatch Acknowledged Date/Time" })
        }
        eTimes["eTimes.04"] = _val;
        eTimes["DispatchAcknowledgedDateTime"] = _val;

        OXML.Node("DispatchAcknowledgedDateTime", _val);
        XML.Node("eTimes.04", _val);

    };
        
    //eTimes.05//////////////////
    _times = getValue(businessObject.elements, "eTimes.05");
    if(Call["isCancelled"] ==false)
    {
        if (_times.IsNull == true)
        {
            if (isRequiredStateElement("eTimes.05")) {
                v2Array.push({ section: "E05", element: "E05_05", val: null });
                eTimes["eTimes.05"] = v3NOT_RECORDED;
                eTimes["UnitEnRouteDateTime"] = v3NOT_RECORDED;

                XML.BeginNode("eTimes.05");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("UnitEnRouteDateTime", NOT_RECORDED);
            }
            else
            {
                _val = _dispo.ValueArray[0].val;
                v2Array.push({ section: "E05", element: "E05_05", val: null });
                eTimes["eTimes.05"] = null;
                eTimes["UnitEnRouteDateTime"] = null;

                OXML.Node("UnitEnRouteDateTime", "");
                XML.Node("eTimes.05", "");
            }
        }
        else
        {
            OXML.Node("UnitEnRouteDateTime", _val);
            XML.Node("eTimes.05", _val);

            eTimes["eTimes.05"] = _val;
            eTimes["UnitEnRouteDateTime"] = _val;
            v2Array.push({ section: "E05", element: "E05_05", val: _val });
        }
    }
    else
    {
        v2Array.push({ section: "E05", element: "E05_05", val: null });
        eTimes["eTimes.05"] = v3NOT_APPLICABLE;
        eTimes["UnitEnRouteDateTime"] = v3NOT_APPLICABLE;
                  
        XML.BeginNode("eTimes.05");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("UnitEnRouteDateTime", NOT_APPLICABLE);
    };
        
        
    //eTimes.06//////////////////        
    _times = getValue(businessObject.elements, "eTimes.06");
    if(Call["isCancelled"] ==false)
    {
        if (_times.IsNull == true)
        {
            if (isRequiredStateElement("eTimes.06"))
            {
                v2Array.push({ section: "E05", element: "E05_06", val: null });
                eTimes["eTimes.06"] = v3NOT_RECORDED;
                eTimes["UnitArrivedonSceneDateTime"] = v3NOT_RECORDED;

                XML.BeginNode("eTimes.06");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("UnitArrivedonSceneDateTime", NOT_RECORDED);

            }
            else
            {
                v2Array.push({ section: "E05", element: "E05_06", val: null });
                eTimes["eTimes.06"] = null;
                eTimes["UnitArrivedonSceneDateTime"] = null;
                OXML.Node("UnitArrivedonSceneDateTime", "");
                XML.Node("eTimes.06", "");
            }
        }
        else
        {
            _val = _dispo.ValueArray[0].val;
            v2Array.push({ section: "E05", element: "E05_06", val: _val });
            eTimes["eTimes.06"] = _val;
            eTimes["UnitArrivedonSceneDateTime"] = _val;

            OXML.Node("UnitArrivedonSceneDateTime", _val);
            XML.Node("eTimes.06", _val);

        }
    }
    else
    {
        v2Array.push({ section: "E05", element: "E05_06", val: null });
        eTimes["eTimes.06"] = v3NOT_APPLICABLE;
        eTimes["UnitArrivedonSceneDateTime"] = v3NOT_APPLICABLE;

        XML.BeginNode("eTimes.06");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("UnitArrivedonSceneDateTime", NOT_APPLICABLE);
    };
        
        
        
    //eTimes.07//////////////////
    //eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Date/Time 
    //Arrived at Patient Date/Time.         
    _times = getValue(businessObject.elements, "eTimes.07");
    if(Call["isCancelled"] ==false)
    {
        if (_times.IsNull == true)
        {
            if (isRequiredStateElement("eTimes.07"))
            {
                v2Array.push({ section: "E05", element: "E05_07", val: null });
                eTimes["eTimes.07"] = v3NOT_RECORDED;
                eTimes["ArrivedatPatientDateTime"] = v3NOT_RECORDED;

                XML.BeginNode("eTimes.07");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("ArrivedatPatientDateTime", NOT_RECORDED);
            }
            else
            {
                v2Array.push({ section: "E05", element: "E05_07", val: null });
                eTimes["eTimes.07"] = null;
                eTimes["ArrivedatPatientDateTime"] = null;

                OXML.Node("ArrivedatPatientDateTime", "");
                XML.Node("eTimes.07", "");
            }
        }
        else
        {
            _val = _dispo.ValueArray[0].val;
            if (eAirwayGroup["eAirway.11"] != null)
            {
                if (eAirwayGroup["eAirway.11"] >= _val)
                {
                    ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eTimes.07", Description: "Validation Error: eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Date/Time Arrived at Patient Date/Time." })
                }
            };
            v2Array.push({ section: "E05", element: "E05_07", val: _val });
            eTimes["ArrivedatPatientDateTime"] = _val;
            eTimes["eTimes.07"] = _val;

            OXML.Node("ArrivedatPatientDateTime", _val);
            XML.Node("eTimes.07", _val);
        }
    }
    else
    {
        v2Array.push({ section: "E05", element: "E05_07", val: null });
        eTimes["eTimes.07"] = v3NOT_APPLICABLE;
        eTimes["ArrivedatPatientDateTime"] = v3NOT_APPLICABLE;

        XML.BeginNode("eTimes.07");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("ArrivedatPatientDateTime", NOT_APPLICABLE);
    };
        
    //eTimes.08//////////////////
                
    _times = getValue(businessObject.elements, "eTimes.08");
    if((Call["isCancelled"] ==false && (eDisposition["eDisposition.12"]) == "4212031"))
    {
        if (_times.IsNull == true)
        {
            if (isRequiredStateElement("eTimes.08")) 
            {
                v2Array.push({ section: "E05", element: "E05_08", val: v2NOT_RECORDED });
                eTimes["eTimes.08"] = v3NOT_RECORDED;
                eTimes["TransferofEMSPatientCareDateTime"] = v3NOT_RECORDED;

                XML.BeginNode("eTimes.08");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("TransferofEMSPatientCareDateTime", NOT_RECORDED);
            }
            else 
            {
                v2Array.push({ section: "E05", element: "E05_08", val: v2NOT_REPORTING });
                eTimes["eTimes.08"] = v3NOT_REPORTING;
                eTimes["TransferofEMSPatientCareDateTime"] = v3NOT_REPORTING;

                OXML.Node("TransferofEMSPatientCareDateTime", "");
                XML.Node("eTimes.08", "");
            }
        }
        else 
        {
            _val = _dispo.ValueArray[0].val;
            v2Array.push({ section: "E05", element: "E05_08", val: _val });
            eTimes["TransferofEMSPatientCareDateTime"] = _val;
            eTimes["eTimes.08"] = _val;

            OXML.Node("TransferofEMSPatientCareDateTime", _val);
            XML.Node("eTimes.08", _val);
        }
    }
    else
    {
        v2Array.push({ section: "E05", element: "E05_08", val: null});
        eTimes["eTimes.08"] = v3NOT_APPLICABLE;
        eTimes["TransferofEMSPatientCareDateTime"] = v3NOT_APPLICABLE;

        XML.BeginNode("eTimes.08");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("TransferofEMSPatientCareDateTime", NOT_APPLICABLE);
    };
        
        
    //eTimes.09//////////////////
    _times = getValue(businessObject.elements, "eTimes.09");
    if((Call["isCancelled"] ==false && (Call.HasPatient) == true))
    {
        if (_times.IsNull == true)
        {
            if (isRequiredStateElement("eTimes.09")) {
                v2Array.push({ section: "E05", element: "E05_09", val: v2NOT_RECORDED });
                eTimes["eTimes.09"] = v3NOT_RECORDED;
                eTimes["UnitLeftSceneDateTime"] = v3NOT_RECORDED;

                XML.BeginNode("eTimes.09");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("UnitLeftSceneDateTime", NOT_RECORDED);
            }
            else
            {
                v2Array.push({ section: "E05", element: "E05_09", val: null });
                eTimes["eTimes.09"] = null;
                eTimes["UnitLeftSceneDateTime"] = null;

                OXML.Node("eTimes.09", "");
                XML.Node("UnitLeftSceneDateTime", "");
            }
        }
        else
        {
            _val = _dispo.ValueArray[0].val;
            v2Array.push({ section: "E05", element: "E05_09", val: _val });
            eTimes["eTimes.09"] = _val;
            eTimes["UnitLeftSceneDateTime"] = _val;

            OXML.Node("eTimes.09", _val);
            XML.Node("UnitLeftSceneDateTime", _val);
        }
    }
    else
    {
        v2Array.push({ section: "E05", element: "E05_09", val: null });
        eTimes["eTimes.09"] = v3NOT_APPLICABLE;
        eTimes["UnitLeftSceneDateTime"] = v3NOT_APPLICABLE;

        XML.BeginNode("eTimes.09");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("UnitLeftSceneDateTime", NOT_APPLICABLE);
    };
        
    //eTimes.10//////////////////
    _times = getValue(businessObject.elements, "eTimes.10");
    if ((Call["isCancelled"] == false && eDisposition["eDisposition.16"] <="4216003")) 
    {
        if (_times.IsNull == true)
        {
            eTimes["eTimes.10"] = null;
            eTimes["ArrivalatDestinationLandingAreaDateTime"] = null;

            OXML.Node("eTimes.10", "");
            XML.Node("ArrivalatDestinationLandingAreaDateTime", "");
        }
        else
        {
            _val = _dispo.ValueArray[0].val;
            eTimes["ArrivalatDestinationLandingAreaDateTime"] = _val;
            eTimes["eTimes.10"] = _val;

            OXML.Node("eTimes.10", _val);
            XML.Node("ArrivalatDestinationLandingAreaDateTime", _val);
        }
    }
    else
    {
        ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eTimes.04", Description: "Validation Error: eTimes.10/eDisposition.16." })
    };
        
    //eTimes.11//////////////////
    console.log("Business Rule not Applicable")
    _times = getValue(businessObject.elements, "eTimes.11");
    if(Call.HasPatient == true)
    {
        if (_times.IsNull == true)
        {
            if (isRequiredStateElement("eTimes.11")) {
                v2Array.push({ section: "E05", element: "E05_10", val: v2NOT_RECORDED });
                eTimes["eTimes.11"] = v3NOT_RECORDED;
                eTimes["PatientArrivedatDestinationDateTime"] = v3NOT_RECORDED;

                XML.BeginNode("eTimes.11");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("PatientArrivedatDestinationDateTime", NOT_RECORDED);
            }
            else
            {
                v2Array.push({ section: "E05", element: "E05_10", val: null });
                eTimes["eTimes.11"] = null;
                eTimes["PatientArrivedatDestinationDateTime"] = null;

                OXML.Node("PatientArrivedatDestinationDateTime", "");
                XML.Node("eTimes.11", "");
            }
        }
        else
        {
            _val = _dispo.ValueArray[0].val;
            eTimes["PatientArrivedatDestinationDateTime"] = _val;
            v2Array.push({ section: "E05", element: "E05_10", val: _val });
            eTimes["eTimes.11"] = _val;

            OXML.Node("PatientArrivedatDestinationDateTime", _val);
            XML.Node("eTimes.11", _val);
        }
    }
    else
    {
        v2Array.push({ section: "E05", element: "E05_10", val: null });
        eTimes["eTimes.11"] = v3NOT_APPLICABLE;
        eTimes["PatientArrivedatDestinationDateTime"] = v3NOT_APPLICABLE;

        XML.BeginNode("eTimes.11");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("PatientArrivedatDestinationDateTime", NOT_APPLICABLE);
    };
        
        
    //eTimes.12//////////////////        
    _times = getValue(businessObject.elements, "eTimes.12");
    if(Call.HasPatient == true)
    {
        if (_times.IsNull == true)
        {
            if (isRequiredStateElement("eTimes.12")) {
                eTimes["eTimes.11"] = v3NOT_RECORDED;
                eTimes["DestinationPatientTransferofCareDateTime"] = v3NOT_RECORDED;

                XML.BeginNode("eTimes.12");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("DestinationPatientTransferofCareDateTime", NOT_RECORDED);
            }
            else
            {
                eTimes["eTimes.12"] = null;
                eTimes["DestinationPatientTransferofCareDateTime"] = null;

                OXML.Node("DestinationPatientTransferofCareDateTime", "");
                XML.Node("eTimes.12", "");
            }
        }        
        else
        {
            _val = _dispo.ValueArray[0].val;
            eTimes["DestinationPatientTransferofCareDateTime"] = _val;
            eTimes["eTimes.12"] = _val;

            OXML.Node("DestinationPatientTransferofCareDateTime", _val);
            XML.Node("eTimes.12", _val);
        }
    }
    else
    {
        eTimes["eTimes.12"] = v3NOT_APPLICABLE;
        eTimes["DestinationPatientTransferofCareDateTime"] = v3NOT_APPLICABLE;

        XML.BeginNode("eTimes.12");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("DestinationPatientTransferofCareDateTime", NOT_APPLICABLE);
    };
        
    //eTimes.13//////////////////
    _times = getValue(businessObject.elements, "eTimes.13");
    if (_times.IsNull == true)
    {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eTimes.13", Description: "Unit Back in Service Date/Time Mandatory Value " })
        OXML.Node("UnitBackinServiceDateTime", "");
        XML.Node("eTimes.13", "");
    }
    else
    {
        _val = _dispo.ValueArray[0].val;
        v2Array.push({ section: "E05", element: "E05_11", val: _val });
        eTimes["eTimes.13"] = _val;
        eTimes["UnitBackinServiceDateTime"] = _val;

        OXML.Node("UnitBackinServiceDateTime", _val);
        XML.Node("eTimes.13", _val);

    };
                
    //eTimes.14//////////////////
    _times = getValue(businessObject.elements, "eTimes.14");
    if (Call["isCancelled"] != true)
    {
        if (_times.IsNull == true)
        {
            if (isRequiredStateElement("eTimes.14"))
            {
                ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eTimes.14", Description: "Unit Canceled Date/Time:  eTimes 14 Mandatory " })
                OXML.Node("UnitCanceledDateTime", "");
                XML.Node("eTimes.14", "");
            }
        }        
        else
        {
            _val = _dispo.ValueArray[0].val;
            v2Array.push({ section: "E05", element: "E05_12", val: _val });
            eTimes["eTimes.14"] = _val;
            eTimes["UnitCanceledDateTime"] = _val;

            OXML.Node("UnitCanceledDateTime", _val);
            XML.Node("eTimes.14", _val);
        }
    }
    else
    {
        ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eTimes.14", Description: "Unit Canceled Date/Time:  Call Not Cancelled " })
    };
                
    //eTimes.15//////////////////
    _times = getValue(businessObject.elements, "eTimes.15");
    if (_times.IsNull == true)
    {
        v2Array.push({ section: "E05", element: "E05_13", val: null });
        eTimes["eTimes.15"] = null;
        eTimes["UnitBackatHomeLocationDateTime"] = null;

        OXML.Node("UnitBackatHomeLocationDateTime", "");
        XML.Node("eTimes.15", "");
    }
    else
    {
        _val = _dispo.ValueArray[0].val;
        v2Array.push({ section: "E05", element: "E05_13", val: _val });
        eTimes["UnitBackatHomeLocationDateTime"] = _val;
        eTimes["eTimes.15"] = _val;

        OXML.Node("UnitBackatHomeLocationDateTime", _val);
        XML.Node("eTimes.15", _val);
    };
        
    //eTimes.16/////////////////
    _times = getValue(businessObject.elements, "eTimes.16");
    if (_times.IsNull == true)
    {
        eTimes["eTimes.16"] = null;
        eTimes["EMSCallCompletedDateTime"] = null;

        OXML.Node("EMSCallCompletedDateTime", "");
        XML.Node("eTimes.16", "");
    }
    else
    {
        _val = _dispo.ValueArray[0].val;
        OXML.Node("EMSCallCompletedDateTime", _val);
        XML.Node("eTimes.16", _val);

        eTimes["EMSCallCompletedDateTime"] = _val;
        eTimes["eTimes.16"] = _val;
    };
    */
    return eTimes;
};    //end of function   
var setePayment = function (businessObject)
{
    /*
    var ePayment = new Object();
    ///////////ONLY BILLING TRANSPORT CALLS
    //////////////////ePayment.01        
    ePayment["isInsurance"] = false;
    ePayment["isMedicaid"] = false;
    ePayment["isMedicare"] = false;
    ePayment["isNotBilled"] = false;


    var _payment = new Object;
    if (Call.HasTransport == true) 
    {
        _payment = getValue(businessObject.elements, "ePayment.01");
        if (_payment.IsNull == true) 
        {
            v2Array.push({ section: "E07", element: "E07_01", val: v2NOT_RECORDED });
            ePayment["ePayment.01"] = V3NOT_RECORDED;
            ePayment["PrimaryMethodofPayment"] = V3NOT_RECORDED;

            XML.BeginNode("ePayment.01");
            XML.Attrib("NV", NIL_V3NOT_RECORDED);
            XML.EndNode();

            OXML.Node("PrimaryMethodofPayment", NOT_RECORDED);
        }
        else 
        {
            _val = _payment.ValueArray[0].val;
            if (_val in ["2601001", "2601013"]) 
            {
                Call.PaymentType = "Insurance"
                ePayment["isInsurance"] = true;
            };
            if (_val = "2601003") 
            {
                Call.PaymentType = "Medicaid"
                ePayment["isMedicaid"] = true;
            };
            if (_val = "2601005") 
            {
                ePayment["isMedicare"] = true;
                Call.PaymentType = "Medicare"
            };
            if (_val = "2601007") 
            {
                Call.PaymentType = "Not Billed"
                ePayment["isNotBilled"] = true;
            };
            v2Array.push({ section: "E07", element: "E07_01", val: setV2("ePayment.01", _val) });
            ePayment["ePayment.01"] = _val;
            ePayment["PrimaryMethodofPayment"] = setCodeText("ePayment.01", _val);

            XML.Node("ePayment.01",_val);
            OXML.Node("PrimaryMethodofPayment", setCodeText("ePayment.01", _val));
        };
                        
        //////////////////ePayment.02
        _payment = getValue(businessObject.elements, "ePayment.02");
        if (_payment.IsNull == true) 
        {
            v2Array.push({ section: "E07", element: "E07_02", val: v2NOT_KNOWN });
            ePayment["ePayment.02"] = null;
            ePayment["PhysicianCertificationStatement"] = null;
            XML.Node("ePayment.02","");
            OXML.Node("PhysicianCertificationStatement", setCodeText("ePayment.01", ""));

        }
        else
        {
            _val = _payment.ValueArray[0].val;
            if (_val = "9922001") // If Phsysicans Certification is No, Check for Medicaide/air.
            {
                if ((eDispatch.isEmergent == false && ePayment.isMedicaid == true && ePayment.isMedicare == true)) 
                {
                    ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.02", Description: "PCS required for Payment Type (Medicare/Medicaid" })
                }
            }
            else
            {
                ePayment["PhysicianCertificationStatement"] = setCodeText("ePayment.02", _val);
                v2Array.push({ section: "E07", element: "E07_02", val: setV2("ePayment.02", _val) });
                ePayment["ePayment.02"] = _val;

                XML.Node("ePayment.02",_val);
                OXML.Node("PhysicianCertificationStatement", setCodeText("ePayment.02", _val));
            }
        };
        
        //////////////////ePayment.03
        _payment = getValue(businessObject.elements, "ePayment.03");
        if (_payment.IsNull == true) 
        {
            ePayment["ePayment.03"] = null;
            ePayment["DatePhysicianCertificationStatementSigned"] = null;

            XML.Node("ePayment.03","");
            OXML.Node("DatePhysicianCertificationStatementSigned", "");
        }
        else
        {
            _val = _payment.ValueArray[0].val;
            if ((ePayment["ePayment.02"] == null && eePayment["ePayment.02"] == "9922001")) //if No PCS
            {
                ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.03", Description: "Certification Date Provided with null Certification" })
            }
            else 
            {
                ePayment["ePayment.03"] = _val;
                ePayment["ePayment.DatePhysicianCertificationStatementSigned"] = _val;

                XML.Node("ePayment.03",_val);
                OXML.Node("DatePhysicianCertificationStatementSigned", _val);
            }
        };
        
        
        //ePayment.04////////////
        _payment = getValue(elementList, "ePayment.04");
        if (_payment.IsNull == true) 
        {
            ePayment["ePayment.04"] = null;
            ePayment["ReasonforPhysicianCertificationStatement"] = null;

            XML.Node("ePayment.04",_val);
            OXML.Node("ReasonforPhysicianCertificationStatement", _val);
        }
        else 
        {
            if ((ePayment["ePayment.02"] == null && eePayment["ePayment.02"] == "9922001")) //if No PCS
            {
                ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.04", Description: "Certification Reason Provided with null Certification" })
            }
            else 
            {
                var arr1 = [];
                var arr3 = [];
                for (var i = 0; i < _payment.ValueArray.length; i++)
                {
                    if ((_payment.ValueArray[i].HasValue == true) && (arr1.indexOf(_payment.ValueArray[i].val) > -1))
                    {
                        _val = _payment.ValueArray[i].val
                        arr1.push(_val);
                        arr3.push(setCodeText("ePayment.04", _val));

                        XML.Node("ePayment.04",_val);
                        OXML.Node("ReasonforPhysicianCertificationStatement", setCodeText("ePayment.04", _val));
                    }
                };
                ePayment["ePayment.04"] = arr1.slice(0);
                ePayment["ReasonforPhysicianCertificationStatement"] = arr3.slice(0);
            }
        };        
        //////////////////ePayment.05
        _payment = getValue(businessObject.elements, "ePayment.05");
        if (_payment.IsNull == true) 
        {
            ePayment["ePayment.05"] = null;
            ePayment["HealthcareProviderTypeSigningPhysicianCertificationStatement"] = null;

            XML.Node("ePayment.05","");
            OXML.Node("ReasonforPhysicianCertificationStatement", "");
        }
        else 
        {
            _val = _payment.ValueArray[0].val;
            ePayment["HealthcareProviderTypeSigningPhysicianCertificationStatement"] = setCodeText("ePayment.05", _val);
            ePayment["ePayment.05"] = _val;

            XML.Node("ePayment.05",_val);
            OXML.Node("ReasonforPhysicianCertificationStatement", setCodeText("ePayment.05", _val));
        };
        
        //////////////////ePayment.06
        _payment = getValue(businessObject.elements, "ePayment.06");
        if (_payment.IsNull == true) 
        {
            ePayment["ePayment.06"] = null;
            ePayment["LastNameofIndividualSigningPhysicianCertificationStatement"] = null;

            XML.Node("ePayment.06",null);
            OXML.Node("LastNameofIndividualSigningPhysicianCertificationStatement",  null);

        }
        else 
        {
            _val = _payment.ValueArray[0].val;

            if ((ePayment["ePayment.02"] == null && eePayment["ePayment.02"] == "9922001")) //if No PCS
            {
                ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.05", Description: "Certification Provider Type with null Certification" })
            }                
            else if ((ePayment["ePayment.02"] == null && eePayment["ePayment.02"] == "9922001")) //if No PCS
            {
                ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.06", Description: "Certification Provider Type with null Certification" })
            }
            else 
            {
                ePayment["LastNameofIndividualSigningPhysicianCertificationStatement"] = _val;
                ePayment["ePayment.06"] = _val;

                XML.Node("ePayment.06",_val);
                OXML.Node("LastNameofIndividualSigningPhysicianCertificationStatement",  _val);
            }
        }
        };
        
        //////////////////ePayment.07
        _payment = getValue(businessObject.elements, "ePayment.07");
        if (_payment.IsNull == true) 
        {
            ePayment["ePayment.07"] = null;
            ePayment["FirstNameofIndividualSigningPhysicianCertificationStatement"] = null;

            XML.Node("ePayment.07",null);
            OXML.Node("FirstNameofIndividualSigningPhysicianCertificationStatement",  null);        
        }
        else 
        {
            _val = _payment.ValueArray[0].val;
            if ((ePayment["ePayment.02"] == null && eePayment["ePayment.02"] == "9922001")) //if No PCS
            {
                ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.07", Description: "Certification Provider Type with null Certification" })
            }
            else 
            {
                ePayment["ePayment.07"] = _val;
                ePayment["FirstNameofIndividualSigningPhysicianCertificationStatement"] = _val;

                XML.Node("ePayment.07",_val);
                OXML.Node("FirstNameofIndividualSigningPhysicianCertificationStatement",  _val);
            }
        };
        
        //////////////////ePayment.08
        _payment = getValue(businessObject.elements, "ePayment.08");
        if (_payment.IsNull == true) 
        {
            ePayment["ePayment.08"] = null;
            ePayment["PatientResidesinServiceArea"] = null;

            XML.Node("ePayment.08",null);
            OXML.Node("PatientResidesinServiceArea",  null);        

        }
        else 
        {
            _val = _payment.ValueArray[0].val;
            XML.Node("ePayment.08",_val);
            OXML.Node("PatientResidesinServiceArea",  null);        

            ePayment["ePayment.08"] = _val;
            ePayment["PatientResidesinServiceArea"] = setCodeText("ePayment.08", _val);;
        };
        
        // IF NOT INSURED, SET TO NA!~
        neil
            ///////////////////////////////////////////////ePayment.InsuranceGroup
            _sectionIndex = getSectionIndex(businessObject.sections[i].attributes, "ePayment.InsuranceGroup");
            for (var x = 0; x < _sectionIndex.length; x++) 
            {
                var listOfElements = businessObject.sections[i].attributes.sections[_sectionIndex[x]].attributes.elements
        
                //////////////////ePayment.09
                _payment = getValue(listOfElements, "ePayment.09");
                if (_payment.IsNull == true) 
                {

                    XML.Node("ePayment.09",null);
                    OXML.Node("InsuranceCompanyID",  null);        

                    InsuranceGroupArray["ePayment.09"] = null;
                    InsuranceGroupArray["InsuranceCompanyID"] = null;
                }
                else 
                {
                    _val = _payment.ValueArray[0].val;
                    if(ePayment["isInsurance"] == true)
                    {
                        {
                            ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.09", Description: "Insurance Not selected Payment type" })
                        }
                    };
                    InsuranceGroupArray["ePayment.09"] = _val;
                    InsuranceGroupArray["InsuranceCompanyID"] = _val;

                    XML.Node("ePayment.09",_val);
                    OXML.Node("InsuranceCompanyName",  _val);        
                };
        
                //////////////////ePayment.10
                _payment = getValue(listOfElements, "ePayment.10");
                if (_payment.IsNull == true) 
                {
                    InsuranceGroupArray["ePayment.10"] = "";
                    InsuranceGroupArray["InsuranceCompanyName"] = "";

                    XML.Node("ePayment.10","");
                    OXML.Node("InsuranceCompanyName",  "");        
                }
                else 
                {
                    _val = _payment.ValueArray[0].val;
                    if(ePayment["isInsurance"] == false)
                    {
                        {
                            ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.10", Description: "Insurance Not selected Payment type" })
                        }
                    };
        
                    XML.Node("ePayment.10",_val);
                    OXML.Node("InsuranceCompanyName",  _val);        

                    InsuranceGroupArray["ePayment.10"] = _val;
                    InsuranceGroupArray["InsuranceCompanyName"] = _val;

                };
        
                //////////////////ePayment.11
                _payment = getValue(listOfElements, "ePayment.11");
                if (_payment.IsNull == true) 
                {
                    v2Array.push({ section: "E07", element: "E07_04", val: v2NOT_KNOWN });
                    InsuranceGroupArrayePayment["ePayment.11"] = null;
                    InsuranceGroupArray["InsuranceCompanyBillingPriority"] = null;

                    XML.Node("ePayment.11","");
                    OXML.Node("InsuranceCompanyBillingPriority",  "");               
                }
                else 
                {
                    _val = _payment.ValueArray[0].val;
                    if(ePayment["isInsurance"] == false)
                    {
                        {
                            ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.11", Description: "Insurance Not selected Payment type" })
                        }
                    };
        
                    v2Array.push({ section: "E07", element: "E07_04", val: SetD2("ePayment.11", _val) });
                    InsuranceGroupArray["ePayment.11"] = _val;
                    InsuranceGroupArray["InsuranceCompanyBillingPriority"] = setCodeText("ePayment.11", _val);

                    XML.Node("ePayment.11",_val);
                    OXML.Node("InsuranceCompanyBillingPriority",  _val);        
                };
        
        
                //////////////////ePayment.12
                _payment = getValue(listOfElements, "ePayment.12");
                if (_payment.IsNull == true) 
                {
                    XML.Node("ePayment.12","");
                    OXML.Node("InsuranceCompanyAddress",  "");        

                    v2Array.push({ section: "E07", element: "E07_05", val: v2NOT_KNOWN });
                    InsuranceGroupArray["ePayment.12"] = null;
                    InsuranceGroupArray["InsuranceCompanyAddress"] = null;
                }
                else 
                {
                    _val = _payment.ValueArray[0].val;
                    if(ePayment["isInsurance"] == false)
                    {
                        {
                            ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.12", Description: "Insurance Not selected Payment type" })
                        }
                    };
                    XML.Node("ePayment.12",_val);
                    OXML.Node("InsuranceCompanyAddress",  _val);        
        
                    v2Array.push({ section: "E07", element: "E07_05", val: _val });
                    InsuranceGroupArray["ePayment.12"] = _val;
                    InsuranceGroupArray["InsuranceCompanyAddress"] = _val;
                };
        
                //////////////////ePayment.13
                _payment = getValue(listOfElements, "ePayment.13");
                if (_val == null)
                {
                    XML.Node("ePayment.13","");
                    OXML.Node("InsuranceCompanyCity",  "");        

                    v2Array.push({ section: "E07", element: "E07_06", val: v2NOT_KNOWN });
                    InsuranceGroupArray["ePayment.13"] = null;
                    InsuranceGroupArray["InsuranceCompanyCity"] = null;
                }
                else 
                {
                    _val = _payment.ValueArray[0].val;
                    if(ePayment["isInsurance"] == false)
                    {
                        {
                            ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.13", Description: "Insurance Not selected Payment type" })
                        }
                    };
        
                    XML.Node("ePayment.13",_val);
                    OXML.Node("InsuranceCompanyCity",  _val);        

                    v2Array.push({ section: "E07", element: "E07_06", val: setV2("ePayment.13", _val) });
                    InsuranceGroupArray["ePayment.13"] = _val;
                    InsuranceGroupArray["InsuranceCompanyCity"] = setCodeText("ePayment.13", _val);
                };
        
        
                //////////////////ePayment.14
                _payment = getValue(listOfElements, "ePayment.14");
                if (_payment.IsNull == true) 
                {
                    XML.Node("ePayment.14","");
                    OXML.Node("InsuranceCompanyState",  "");        

                    v2Array.push({ section: "E07", element: "E07_07", val: v2NOT_KNOWN });
                    InsuranceGroupArray["ePayment.14"] = null;
                    InsuranceGroupArray["InsuranceCompanyState"] = null;
                }
                else 
                {
                    _val = _payment.ValueArray[0].val;
                    if(ePayment["isInsurance"] == false)
                    {
                        {
                            ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.14", Description: "Insurance Not selected Payment type" })
                        }
                    };
                    XML.Node("ePayment.14",_val);
                    OXML.Node("InsuranceCompanyState",  _val);        

                    v2Array.push({ section: "E07", element: "E07_07", val: setV2("ePayment.14", _val) });
                    InsuranceGroupArray["ePayment.14"] = _val;
                    InsuranceGroupArray["InsuranceCompanyState"] = setCodeText("ePayment.14", _val);
                };
        
                //////////////////ePayment.15
                _payment = getValue(listOfElements, "ePayment.15");
                if (_payment.IsNull == true) 
                {
                    v2Array.push({ section: "E07", element: "E07_08", val: v2NOT_KNOWN });
                    InsuranceGroupArray["ePayment.15"] = null;
                    InsuranceGroupArray["InsuranceCompanyZip"] = null;

                    XML.Node("ePayment.15","");
                    OXML.Node("InsuranceCompanyZip",  "");        

                }
                else 
                {
                    _val = _payment.ValueArray[0].val;
                    if(ePayment["isInsurance"] == false)
                    {
                        {
                            ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.15", Description: "Insurance Not selected Payment type" })
                        }
                    };
                    XML.Node("ePayment.15",_val);
                    OXML.Node("InsuranceCompanyZip",  _val);        


                    v2Array.push({ section: "E07", element: "E07_08", val: _val });
                    InsuranceGroupArray["ePayment.15"] = _val;
                    InsuranceGroupArray["InsuranceCompanyZip"] = _val;
                };
        
                //////////////////ePayment.16
                _payment = getValue(listOfElements, "ePayment.16");
                if (_payment.IsNull == true) {
                    InsuranceGroupArray["ePayment.16"] = null;
                    InsuranceGroupArray["InsuranceCompanyCountry"] = null;

                    XML.Node("ePayment.16","");
                    OXML.Node("InsuranceCompanyCountry",  "");        
                }
                else 
                {
                    _val = _payment.ValueArray[0].val;
                    if(ePayment["isInsurance"] == false)
                    {
                        {
                            ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.16", Description: "Insurance Not selected Payment type" })
                        }
                    };
        
                    InsuranceGroupArray["ePayment.16"] = setCodeText("ePayment.16", _val);
                    InsuranceGroupArray["InsuranceCompanyCountry"] = null;

                    XML.Node("ePayment.16",_val);
                    OXML.Node("InsuranceCompanyCountry",  _val);        
                };
        
        
                //////////////////ePayment.17
                _payment = getValue(listOfElements, "ePayment.17");
                if (_payment.IsNull == true) 
                {
                    XML.Node("ePayment.17","");
                    OXML.Node("InsuranceGroupIDName",  "");        

                    v2Array.push({ section: "E07", element: "E07_09", val: v2NOT_KNOWN });
                    InsuranceGroupArray["ePayment.17"] = null;
                    InsuranceGroupArray["InsuranceGroupIDName"] = null;
                }
                else 
                {
                    _val = _payment.ValueArray[0].val;
                    if(ePayment["isInsurance"] == false)
                    {
                        {
                            ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.17", Description: "Insurance Not selected Payment type" })
                        }
                    };
                    XML.Node("ePayment.17",_val);
                    OXML.Node("InsuranceGroupIDName",  _val);        
        
                    v2Array.push({ section: "E07", element: "E07_09", val: _val });
                    InsuranceGroupArray["ePayment.17"] = _val;
                    InsuranceGroupArray["InsuranceGroupIDName"] = _val;
                };
        
                //////////////////ePayment.18
                _payment = getValue(listOfElements, "ePayment.18");
                if (_payment.IsNull == true) 
                {
                    XML.Node("ePayment.18","");
                    OXML.Node("InsurancePolicyIDNumber",  "");        

                    v2Array.push({ section: "E07", element: "E07_10", val: v2NOT_KNOWN });
                    InsuranceGroupArray["ePayment.18"] = null;
                    InsuranceGroupArray["InsurancePolicyIDNumber"] = null;
                }
                else 
                {
                    _val = _payment.ValueArray[0].val;
                    if(ePayment["isInsurance"] == false)
                    {
                        {
                            ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.18", Description: "Insurance Not selected Payment type" })
                        }
                    };

                    XML.Node("ePayment.18",_val);
                    OXML.Node("InsurancePolicyIDNumber",  _val);        
        
                    v2Array.push({ section: "E07", element: "E07_10", val: _val });
                    InsuranceGroupArray["ePayment.18"] = _val;
                    InsuranceGroupArray["InsurancePolicyIDNumber"] = _val;
                };
        
                //////////////////ePayment.19
                _payment = getValue(listOfElements, "ePayment.19");
                if (_payment.IsNull == true) 
                {
                    XML.Node("ePayment.19","");
                    OXML.Node("LastNameoftheInsured",  "");        

                    v2Array.push({ section: "E07", element: "E07_11", val: v2NOT_KNOWN });
                    InsuranceGroupArray["ePayment.19"] = null;
                    InsuranceGroupArray["LastNameoftheInsured"] = null;
                }
                else 
                {
                    _val = _payment.ValueArray[0].val;
                    if(ePayment["isInsurance"] == false)
                    {
                        {
                            ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.19", Description: "Insurance Not selected Payment type" })
                        }
                    };
                    XML.Node("ePayment.19",_val);
                    OXML.Node("LastNameoftheInsured",  _val);        

                    v2Array.push({ section: "E07", element: "E07_11", val: _val });
                    InsuranceGroupArray["ePayment.19"] = _val;
                    InsuranceGroupArray["LastNameoftheInsured"] = _val;
                };
        
                //////////////////ePayment.20
                _payment = getValue(listOfElements, "ePayment.20");
                if (_payment.IsNull == true) 
                {
                    OXML.Node("ePayment.20","");
                    XML.Node("FirstNameoftheInsured",  "");        

                    v2Array.push({ section: "E07", element: "E07_12", val: v2NOT_KNOWN });
                    InsuranceGroupArray["ePayment.20"] = null;
                    InsuranceGroupArray["FirstNameoftheInsured"] = null;
                }
                else 
                {
                    _val = _payment.ValueArray[0].val;
                    if(ePayment["isInsurance"] == false)
                    {
                        {
                            ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.20", Description: "Insurance Not selected Payment type" })
                        }
                    };
                    XML.Node("ePayment.20",_val);
                    OXML.Node("FirstNameoftheInsured",  _val);        

                    v2Array.push({ section: "E07", element: "E07_12", val: _val });
                    InsuranceGroupArray["ePayment.20"] = _val;
                    InsuranceGroupArray["FirstNameoftheInsured"] = _val;
                };
        
                //////////////////ePayment.21
                _payment = getValue(listOfElements, "ePayment.21");
                if (_payment.IsNull == true) 
                {
                    XML.Node("ePayment.21","");
                    OXML.Node("MiddleNameoftheInsured",  "");        

                    v2Array.push({ section: "E07", element: "E07_13", val: v2NOT_KNOWN });
                    InsuranceGroupArray["ePayment.21"] = null;
                    InsuranceGroupArray["MiddleNameoftheInsured"] = null;
                }
                else 
                {
                    _val = _payment.ValueArray[0].val;
                    if(ePayment["isInsurance"] == false)
                    {
                        {
                            ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.21", Description: "Insurance Not selected Payment type" })
                        }
                    };
        
                    XML.Node("ePayment.21",_val);
                    OXML.Node("MiddleNameoftheInsured",  _val);        

                    v2Array.push({ section: "E07", element: "E07_13", val: _val });
                    InsuranceGroupArray["ePayment.21"] = _val;
                    InsuranceGroupArray["MiddleNameoftheInsured"] = _val;
                };
        
                //////////////////ePayment.22
                _payment = getValue(listOfElements, "ePayment.22");
                if (_payment.IsNull == true) 
                {
                    XML.Node("ePayment.22","");
                    OXML.Node("RelationshiptotheInsured",  "");        

                    v2Array.push({ section: "E07", element: "E07_14", val: v2NOT_KNOWN });
                    InsuranceGroupArray["RelationshiptotheInsured"] = null;
                    InsuranceGroupArray["ePayment.22"] = null;
                }
                else 
                {
                    _val = _payment.ValueArray[0].val;
                    if(ePayment["isInsurance"] == false)
                    {
                        {
                            ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.22", Description: "Insurance Not selected Payment type" })
                        }
                    };
        
                    v2Array.push({ section: "E07", element: "E07_14", val: SetD2("ePayment.22", _val) });
                    InsuranceGroupArray["ePayment.22"] = _val;
                    InsuranceGroupArray["RelationshiptotheInsured"] = setCodeText("ePayment.22>", _val);

                    OXML.Node("RelationshiptotheInsured",setCodeText("ePayment.22>", _val));
                    XML.Node("ePayment.22",  _val);        
                };
        
            };
        
            ePayment["hasClosestLivingRelative"] = false;
            //////////////////ePayment.23
            _payment = getValue(businessObject.elements, "ePayment.23");
            if (_payment.IsNull == true) 
            {
                v2Array.push({ section: "E07", element: "E07_18", val: v2NOT_KNOWN });
                ePayment["ePayment.23"] = null;
                ePayment["ClosestRelativeGuardianLastName"] = null;

                XML.Node("ePayment.23","");
                OXML.Node("ClosestRelativeGuardianLastName",  "");        

            }
            else 
            {
                _val = _payment.ValueArray[0].val;
                ePayment["hasClosestLivingRelative"]= true;

                XML.Node("ePayment.23",_val);
                OXML.Node("ClosestRelativeGuardianLastName",  _val);        

                v2Array.push({ section: "E07", element: "E07_18", val: _val });
                ePayment["ePayment.23"] = _val;
                ePayment["ClosestRelativeGuardianLastName"] = _val;
            };
                
            //////////////////ePayment.24
            _payment = getValue(businessObject.elements, "ePayment.24");
            if (_payment.IsNull == true) 
            {
                v2Array.push({ section: "E07", element: "E07_19", val: null });
                ePayment["ePayment.24"] = null;
                ePayment["ClosestRelativeGuardianFirstName"] = null;

                XML.Node("ePayment.24","");
                OXML.Node("ClosestRelativeGuardianFirstName",  "");        
            }
            else 
            {
                _val = _payment.ValueArray[0].val;
                XML.Node("ePayment.24",_val);
                OXML.Node("ClosestRelativeGuardianFirstName",  _val);        

                ePayment["hasClosestLivingRelative"]= true;
                v2Array.push({ section: "E07", element: "E07_19", val: _val });
                ePayment["ePayment.24"] = _val;
                ePayment["ClosestRelativeGuardianFirstName"] = _val;;
            };
        
            //////////////////ePayment.25
            _payment = getValue(businessObject.elements, "ePayment.25");
            if (_payment.IsNull == true) 
            {
                XML.Node("ePayment.25","");
                OXML.Node("ClosestRelativeGuardianMiddleName",  "");        

                v2Array.push({ section: "E07", element: "E07_20", val: null });
                ePayment["ePayment.25"] = null;
                ePayment["ClosestRelativeGuardianMiddleName"] = null;
            }
            else {
                if(ePayment["hasClosestLivingRelative"]== false)
                {
                    ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.25", Description: "Closest Living Relative Not Identified - No Name" })
                }
                else
                {
                    _val = _payment.ValueArray[0].val;
                    XML.Node("ePayment.25",_val);
                    OXML.Node("ClosestRelativeGuardianMiddleName",  _val);        

                    v2Array.push({ section: "E07", element: "E07_20", val: _val })
                    ePayment["ePayment.25"] = _val;
                    ePayment["ClosestRelativeGuardianMiddleName"] = _val;
                }
            };
        
            //////////////////ePayment.26
            _payment = getValue(businessObject.elements, "ePayment.26");
            if (_payment.IsNull == true) {
                v2Array.push({ section: "E07", element: "E07_21", val: null });
                ePayment["ePayment.26"] = null;
                ePayment["ClosestRelativeGuardianStreetAddress"] = null;

                XML.Node("ePayment.26","");
                OXML.Node("ClosestRelativeGuardianStreetAddress",  "");        
            }
            else 
            {
                _val = _payment.ValueArray[0].val;
                if (ePayment["hasClosestLivingRelative"] == false) 
                {
                    ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.26", Description: "Closest Living Relative Not Identified - No Name" })
                }
                else
                {
                    XML.Node("ePayment.26",_val);
                    OXML.Node("ClosestRelativeGuardianStreetAddress",  _val);        

                    v2Array.push({ section: "E07", element: "E07_21", val: _val });
                    ePayment["ePayment.26"] = _val;
                    ePayment["ClosestRelativeGuardianStreetAddress"] = _val;
                }
            };
        
            //////////////////ePayment.27
            _payment = getValue(businessObject.elements, "ePayment.27");
            if (_payment.IsNull == true) 
            {
                XML.Node("ePayment.27","");
                OXML.Node("ClosestRelativeGuardianCity",  "");        

                v2Array.push({ section: "E07", element: "E07_22", val: null });
                ePayment["ePayment.27"] = null;
                ePayment["ClosestRelativeGuardianCity"] = null;
            }
            else 
            {
                _val = _payment.ValueArray[0].val;
                if (ePayment["hasClosestLivingRelative"] == false) 
                {
                    ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.27", Description: "Closest Living Relative Not Identified - No Name" })
                }
                else
                {         
                    XML.Node("ePayment.27",_val);
                    OXML.Node("ClosestRelativeGuardianCity",  _val);        

                    v2Array.push({ section: "E07", element: "E07_22", val: setV2("ePayment.27", _val) });
                    ePayment["ePayment.27"] = _val;
                    ePayment["ClosestRelativeGuardianCity"] = setCodeText("ePayment.27", _val);
                }
            };
        
            //////////////////ePayment.28
            _payment = getValue(businessObject.elements, "ePayment.28");
            if (_payment.IsNull == true) 
            {
                XML.Node("ePayment.28","");
                OXML.Node("ClosestRelativeGuardianState",  "");        

                v2Array.push({ section: "E07", element: "E07_23", val: null });
                ePayment["ePayment.28"] = null;
                ePayment["ClosestRelativeGuardianState"] = null;
            }
            else 
            {
                _val = _payment.ValueArray[0].val;
                if (ePayment["hasClosestLivingRelative"] == false) 
                {
                    ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.28", Description: "Closest Living Relative Not Identified - No Name" })
                }
                else
                {         
                    ePayment["ClosestRelativeGuardianState"] = setCodeText("ePayment.28", _val);
                    v2Array.push({ section: "E07", element: "E07_23", val: setV2("ePayment.28", _val) });
                    ePayment["ePayment.28"] = _val;
                    XML.Node("ePayment.28",_val);
                    OXML.Node("ClosestRelativeGuardianState",  setCodeText("ePayment.28", _val));        
                }
            };
        
            //////////////////ePayment.29
            _payment = getValue(businessObject.elements, "ePayment.29");
            if (_payment.IsNull == true) 
            {
                XML.Node("ePayment.29","");
                OXML.Node("ClosestRelativeGuardianZIPCode",  "");        
                        
                v2Array.push({ section: "E07", element: "E07_24", val: null });
                ePayment["ePayment.29"] = null;
                ePayment["ClosestRelativeGuardianZIPCode"] = null;
            }
            else 
            {
                _val = _payment.ValueArray[0].val;
                if (ePayment["hasClosestLivingRelative"] == false) 
                {
                    ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.29", Description: "Closest Living Relative Not Identified - No Name" })
                }
                else
                {
                 
                    v2Array.push({ section: "E07", element: "E07_24", val: _val });
                    ePayment["ePayment.29"] = _val;
                    ePayment["ClosestRelativeGuardianZIPCode"] = _val;

                    XML.Node("ePayment.29",_val);
                    OXML.Node("ClosestRelativeGuardianZIPCode",  _val);        
                }
            };
        
            //////////////////ePayment.30
            _payment = getValue(businessObject.elements, "ePayment.30");
            if (_payment.IsNull == true) {
                ePayment["ePayment.30"] = null;
                ePayment["ClosestRelativeGuardianCountry"] = null;

                XML.Node("ePayment.30","");
                OXML.Node("ClosestRelativeGuardianCountry",  "");        
            }
            else 
            {
                _val = _payment.ValueArray[0].val;
                if (ePayment["hasClosestLivingRelative"] == false) 
                {
                    ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.30", Description: "Closest Living Relative Not Identified - No Name" })
                }
                else
                {
                 
                    ePayment["ClosestRelativeGuardianCountry"] = setCodeText("ePayment.30", _val);
                    ePayment["ePayment.30"] = _val;
                    XML.Node("ePayment.30",_val);
                    OXML.Node("ClosestRelativeGuardianCountry",  setCodeText("ePayment.30", _val));        
                }
            };
       
    //////////////////ePayment.31
            _payment = getValue(businessObject.elements, "ePayment.31");
            if (_payment.IsNull == true) 
            {
                XML.Node("ePayment.31","");
                OXML.Node("ClosestRelativeGuardianPhoneNumber",  "");        

                ePayment["ePayment.31"] = null;
                ePayment["ClosestRelativeGuardianPhoneNumber"] = null;
        
            }
            else 
            {
                if (ePayment["hasClosestLivingRelative"] == false) 
                {
                    ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.25", Description: "Closest Living Relative Not Identified - No Name" })
                }
                else
                {
                    sPatHomeNum = "";
                    var arr1 = [];
                    var arr2 = [];
                    for (var i = 0; i < _payment.ValueArray.length; i++)
                    {
                        if ((_payment.ValueArray[i].HasValue == true) && (arr1.indexOf(_dispo.ValueArray[i].val) > -1))
                        {
                            _val = _payment.ValueArray[i].val                            
                            if(_payment.ValueArray[i].val !=null)
                            {
                                _phoneNumberType = _val._payment.ValueArray[i].val;
                                XML.BeginNode("ePayment.31");
                                XML.Attrib("PhoneNumberType", _phoneNumberType);
                                XML.WriteString(_val);
                                XML.EndNode();

                            };
                            
                            if (_phoneNumberType == "9913001") 
                            {
                                arr1.push("FAX  " + _val);
                                arr2.push("9913001  " + _val);

                            };
                            if (_phoneNumberType== "9913003") 
                            {
                                arr1.push("HOME  " + _val);
                                arr2.push("9913003  " + _val);
                                var sPatNum = _val;
                            };
                            if (_phoneNumberType == "9913005") 
                            {
                                arr1.push("MOBILE  " + _val);
                                arr2.push("9913005  " + _val);
                            };
                            if (_phoneNumberType == "9913007") {
                                arr1.push("PAGER " + _val);
                                arr2.push("9913007 " + _val);
                            };
                            if (_phoneNumberType == "9913009") 
                            {
                                arr1.push("WORK " + _val);
                                arr2.push("9913009 "+ _val);
                            };
                            if (_phoneNumberType == null) 
                            {
                                arr1.push(_val);
                                arr2.push(_val);
                            };
                        }
                    }
                };
                ePayment["ePayment.31"] =  arr1.slice(0);;
                ePayment["ClosestRelativeGuardianPhoneNumber"] =  arr2.slice(0);;
                v2Array.push({ section: "E07", element: "E07_25", val: sPatHomeNum });
            };
        
            //////////////////ePayment.32
            _payment = getValue(businessObject.elements, "ePayment.32");
            if (_payment.IsNull == true) 
            {
                XML.Node("ePayment.32","");
                OXML.Node("ClosestRelativeGuardianRelationship",  "");        

                v2Array.push({ section: "E07", element: "E07_26", val: null });
                ePayment["ePayment.32"] = null;
                ePayment["ClosestRelativeGuardianRelationship"] = null;
            }
            else 
            {
                _val = _payment.ValueArray[0].val;

                XML.Node("ePayment.32",_val);
                OXML.Node("ClosestRelativeGuardianRelationship",  setCodeText("ePayment.32", _val));        

                ePayment["ClosestRelativeGuardianRelationship"] = setCodeText("ePayment.32", _val);
                v2Array.push({ section: "E07", element: "E07_26", val: SetD2("ePayment.32", _val) });
                ePayment["ePayment.32"] = _val;
            };
        
        
            //////////////////ePayment.33
            _payment = getValue(businessObject.elements, "ePayment.33");
            if (_payment.IsNull == true) {
                XML.Node("ePayment.33","");
                OXML.Node("PatientEmployer",  "");        

                v2Array.push({ section: "E07", element: "E07_27", val: null });
                ePayment["ePayment.33"] = null;
                ePayment["PatientEmployer"] = null;
            }
            else 
            {
                _val = _payment.ValueArray[0].val;
                XML.Node("ePayment.33",_val);
                OXML.Node("PatientEmployer",  _val);        
        
                ePayment["PatientEmployer"] = _val;
                v2Array.push({ section: "E07", element: "E07_27", val: _val });
                ePayment["ePayment.33"] = _val;
            };
        
            //////////////////ePayment.34
            _payment = getValue(businessObject.elements, "ePayment.34");
            if (_payment.IsNull == true) 
            {
        
                XML.Node("ePayment.34","");
                OXML.Node("EmployerAddress", "");

                v2Array.push({ section: "E07", element: "E07_28", val: null });
                ePayment["ePayment.34"] = null;
                ePayment["EmployerAddress"] = null;
            }
            else 
            {
                _val = _payment.ValueArray[0].val;
                XML.Node("ePayment.34",_val);
                OXML.Node("EmployerAddress",   _val);        

                ePayment["EmployerAddress"] = _val;
                v2Array.push({ section: "E07", element: "E07_28", val: _val });
                ePayment["ePayment.34"] = _val;
            };
        
            //////////////////ePayment.35
            _payment = getValue(businessObject.elements, "ePayment.35");
            if (_payment.IsNull == true) 
            {
                v2Array.push({ section: "E07", element: "E07_29", val: null });
                ePayment["ePayment.35"] = null;
                ePayment["EmployerCity"] = null;

                XML.Node("ePayment.35","");
                OXML.Node("EmployerCity", "");        
            }
            else 
            {
                _val = _payment.ValueArray[0].val;
                XML.Node("ePayment.35",_val);
                OXML.Node("EmployerCity",  setCodeText("ePayment.35", _val));        

                ePayment["EmployerCity"] = setCodeText("ePayment.35", _val);
                v2Array.push({ section: "E07", element: "E07_29", val: SetD2("ePayment.35", _val) });
                ePayment["ePayment.35"] = _val;
            };
        
            //////////////////ePayment.36
            _payment = getValue(businessObject.elements, "ePayment.36");
            if (_payment.IsNull == true) 
            {
                XML.Node("ePayment.36","");
                OXML.Node("EmployerState", "");        

                v2Array.push({ section: "E07", element: "E07_30", val: null });
                ePayment["ePayment.36"] = null;
                ePayment["EmployerState"] = null;
            }
            else 
            {
                _val = _payment.ValueArray[0].val;
                XML.Node("ePayment.36",_val);
                OXML.Node("EmployerState",setCodeText("ePayment.36", _val));        

                ePayment["EmployerState"] = setCodeText("ePayment.36", _val);
                v2Array.push({ section: "E07", element: "E07_30", val: SetD2("ePayment.35", _val) });
                ePayment["ePayment.36"] = _val;
            };
        
            //////////////////ePayment.37
            _payment = getValue(businessObject.elements, "ePayment.37");
            if (_payment.IsNull == true) 
            {
                XML.Node("ePayment.37","");
                OXML.Node("EmployerZip", "");        

                v2Array.push({ section: "E07", element: "E07_31", val: null });
                ePayment["ePayment.37"] = null;
                ePayment["EmployerZip"] = null;
            }
            else 
            {
                _val = _payment.ValueArray[0].val;
                XML.Node("ePayment.37",_val);
                OXML.Node("EmployerZip", _val);        

                v2Array.push({ section: "E07", element: "E07_31", val: _val });
                ePayment["ePayment.37"] = _val;
                ePayment["EmployerZip"] = _val;
            };
        
            //////////////////ePayment.38
            _payment = getValue(businessObject.elements, "ePayment.38");
            if (_payment.IsNull == true) 
            {
                ePayment["ePayment.38"] = null;
                ePayment["EmployerCountry"] = null;

                XML.Node("ePayment.38","");
                OXML.Node("EmployerCountry", "");        

            }
            else 
            {
                _val = _payment.ValueArray[0].val;
                XML.Node("ePayment.38",_val);
                OXML.Node("EmployerCountry", setCodeText("ePayment.38", _val));        
                        
                ePayment["EmployerCountry"] = setCodeText("ePayment.38", _val);
                ePayment["ePayment.38"] = _val;
            };
        
            alert("phone")
        
            //////////////////ePayment.39
            _payment = getValue(businessObject.elements, "ePayment.39");
            if (_payment.IsNull == true) 
            {             
                XML.Node("ePayment.39","");
                OXML.Node("EmployerPrimaryPhoneNumber", "");        

                ePayment["ePayment.39"] = null;
                ePayment["EmployerPrimaryPhoneNumber"] = null;
            }
            else 
            {                 
                sPatHomeNum = "";
                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _dispo.ValueArray.length; i++)
                {
                    if ((_payment.ValueArray[i].HasValue == true) && (arr1.indexOf(_dispo.ValueArray[i].val) > -1))
                    {
                        _val = _payment.ValueArray[i].val                            
                        if(_payment.ValueArray[i].val !=null)
                        {
                            _phoneNumberType = _val._payment.ValueArray[i].val;
                            XML.BeginNode("ePayment.39");
                            XML.Attrib("PhoneNumberType", _phoneNumberType);
                            XML.WriteString(_val);
                            XML.EndNode();

                        };
                            
                        if (_phoneNumberType == "9913001") 
                        {
                            arr1.push("FAX  " + _val);
                            arr2.push("9913001  " + _val);

                        };
                        if (_phoneNumberType== "9913003") 
                        {
                            arr1.push("HOME  " + _val);
                            arr2.push("9913003  " + _val);
                            var sPatNum = _val;
                        };
                        if (_phoneNumberType == "9913005") 
                        {
                            arr1.push("MOBILE  " + _val);
                            arr2.push("9913005  " + _val);
                        };
                        if (_phoneNumberType == "9913007") {
                            arr1.push("PAGER " + _val);
                            arr2.push("9913007 " + _val);
                        };
                        if (_phoneNumberType == "9913009") 
                        {
                            arr1.push("WORK " + _val);
                            arr2.push("9913009 "+ _val);
                        };
                        if (_phoneNumberType == null) 
                        {
                            arr1.push(_val);
                            arr2.push(_val);
                        };
                    }
                }
            };

            ePayment["ePayment.39"] =  arr1.slice(0);;
            ePayment["EmployerPrimaryPhoneNumber"] = arr2.slice(0);;
            v2Array.push({ section: "E07", element: "E07_32", val: sPatHomeNum });
        };
        
        //////////////////ePayment.40
        _payment = getValue(businessObject.elements, "ePayment.40");
        if (_payment.IsNull == true) 
        {
            v2Array.push({ section: "E07", element: "E07_33", val: null });
            ePayment["ePayment.40"] = null;
            ePayment["ResponseUrgency"] = null;

            XML.Node("ePayment.40","");
            OXML.Node("ResponseUrgency", "");
        }
        else 
        {
            _val = _payment.ValueArray[0].val;
            v2Array.push({ section: "E07", element: "E07_33", val: SetD2("ePayment.40", _val) });
            ePayment["ePayment.40"] = _val;
            ePayment["ResponseUrgency"] = setCodeText("ePayment.40", _val);

            XML.Node("ePayment.40",_val);
            OXML.Node("ResponseUrgency", setCodeText("ePayment.40", _val));
        };
        
        //////////////////ePayment.41
        _payment = getValue(businessObject.elements, "ePayment.41");
        if (_payment.IsNull == true) {
            ePayment["ePayment.41"] = null;
            ePayment["PatientTransportAssessment"] = null;

            XML.Node("ePayment.41","");
            OXML.Node("PatientTransportAssessment", "");
        }
        else 
        {
            var arr1 = [];
            var arr3 = [];
            for (var i = 0; i < _payment.ValueArray.length; i++)
            {
                if ((_payment.ValueArray[i].HasValue == true) && (arr1.indexOf(_dispo.ValueArray[i].val) > -1))
                {
                    _val = _payment.ValueArray[i].val
                    arr1.push(_val);
                    arr3.push(setCodeText("ePayment.41", _val));
                    XML.Node("ePayment.41",_val);
                    OXML.Node("PatientTransportAssessment", setCodeText("ePayment.40", _val));
                }
            }
            ePayment["ePayment.41"] = arr1.slice(0);
            ePayment["PatientTransportAssessment"] = arr3.slice(0);
        };
        
        
        //////////////////ePayment.42
        _payment = getValue(businessObject.elements, "ePayment.42");
        if (_payment.IsNull == true) 
        {
            XML.Node("ePayment.42","");
            OXML.Node("SpecialtyCareTransportCareProvider", "");

            ePayment["ePayment.42"] = null;
            ePayment["SpecialtyCareTransportCareProvider"] = null;
        }
        else {
            var arr1 = [];
            var arr3 = [];
            for (var i = 0; i < _payment.ValueArray.length; i++)
            {
                if ((_payment.ValueArray[i].HasValue == true) && (arr1.indexOf(_dispo.ValueArray[i].val) > -1))
                {
                    _val = _payment.ValueArray[i].val                    
                    arr1.push(_val);
                    arr3.push(setCodeText("ePayment.42", _val));

                    XML.Node("ePayment.42",_val;
                    OXML.Node("SpecialtyCareTransportCareProvider", setCodeText("ePayment.42", _val));
                }
            };
            ePayment["ePayment.42"] = arr1.slice(0);
            ePayment["SpecialtyCareTransportCareProvider"] = arr3.slice(0);
        
        };
        
        //////////////////ePayment.43
        _payment = getValue(businessObject.elements, "ePayment.43");
        if (_payment.IsNull == true) 
        {
            ePayment["ePayment.43"] = null;
            ePayment["AmbulanceTransportCode"] = null;

            XML.Node("ePayment.43","");
            OXML.Node("AmbulanceTransportCode", "");

        }
        else 
        {
            _val = _payment.ValueArray[0].val;
            XML.Node("ePayment.43",_val);
            OXML.Node("AmbulanceTransportCode", setCodeText("ePayment.43", _val));

            ePayment["ePayment.43"] = _val;
            ePayment["AmbulanceTransportCode"] = _val;
        };
        
        //////////////////ePayment.44
        _payment = getValue(businessObject.elements, "ePayment.44");
        if (_payment.IsNull == true) 
        {
            XML.Node("ePayment.44","");
            OXML.Node("AmbulanceTransportReasonCode", "");

            ePayment["ePayment.44"] = null;
            ePayment["AmbulanceTransportReasonCode"] = null;
        }
        else 
        {
            _val = _payment.ValueArray[0].val;
            XML.Node("ePayment.44",_val);
            OXML.Node("AmbulanceTransportReasonCode", setCodeText("ePayment.44", _val));

            ePayment["AmbulanceTransportReasonCode"] = setCodeText("ePayment.44", _val);
            ePayment["ePayment.44"] = _val;
        };
        
        //////////////////ePayment.45
        _payment = getValue(businessObject.elements, "ePayment.45");
        if (_payment.IsNull == true) 
        {
            XML.Node("ePayment.45","");
            OXML.Node("RoundTripPurposeDescription", "");

            ePayment["ePayment.45"] = null;
            ePayment["RoundTripPurposeDescription"] = null;
        }
        else 
        {
            _val = _payment.ValueArray[0].val;
            XML.Node("ePayment.45",_val);
            OXML.Node("RoundTripPurposeDescription", _val);

            ePayment["ePayment.45"] = _val;
            ePayment["RoundTripPurposeDescription"] = _val;
        };
        
        //////////////////ePayment.46
        _payment = getValue(businessObject.elements, "ePayment.46");
        if (_payment.IsNull == true) 
        {
            XML.Node("ePayment.46","");
            OXML.Node("StretcherPurposeDescription", "");

            ePayment["ePayment.46"] = null;
            ePayment["StretcherPurposeDescription"] = null;
        }
        else {
            _val = _payment.ValueArray[0].val;
            ePayment["StretcherPurposeDescription"] = _val;
            ePayment["ePayment.46"] = _val;

            ePayment["ePayment.46"] = _val;
            ePayment["StretcherPurposeDescription"] = _val;
        };
        
        //////////////////ePayment.47
        _payment = getValue(businessObject.elements, "ePayment.47");
        if (_payment.IsNull == true) 
        {
            XML.Node("ePayment.47","");
            OXML.Node("AmbulanceConditionsIndicator", "");
                    
            ePayment["ePayment.47"] = null;
            ePayment["AmbulanceConditionsIndicator"] = null;
        }
        else 
        {
            _val = _payment.ValueArray[0].val;
            ePayment["ePayment.47"] = _val;
            ePayment["AmbulanceConditionsIndicator"] = setCodeText("ePayment.47", _val);

            XML.Node("ePayment.47","");
            OXML.Node("AmbulanceConditionsIndicator", setCodeText("ePayment.47", _val));
        };
        
        //////////////////ePayment.48
        _payment = getValue(businessObject.elements, "ePayment.48");
        if (_payment.IsNull == true) 
        {
            XML.Node("ePayment.48","");
            OXML.Node("MileagetoClosestHospitalFacility", "");

            ePayment["ePayment.48"] = null;
            ePayment["MileagetoClosestHospitalFacility"] = null;
        }
        else 
        {
            _val = _payment.ValueArray[0].val;
            XML.Node("ePayment.48",_val);
            OXML.Node("MileagetoClosestHospitalFacility", _val);

            ePayment["ePayment.48"] = _val;
            ePayment["MileagetoClosestHospitalFacility"] = _val;
        };
        
        //////////////////ePayment.49
        _payment = getValue(businessObject.elements, "ePayment.49");
        if (_payment.IsNull == true) 
        {
            XML.Node("ePayment.49","");
            OXML.Node("ALSAssessmentPerformedandWarranted", "");

            ePayment["ePayment.49"] = null;
            ePayment["ALSAssessmentPerformedandWarranted"] = null;
        }
        else 
        {
            _val = _payment.ValueArray[0].val;
            XML.Node("ePayment.49",_val);
            OXML.Node("ALSAssessmentPerformedandWarranted", setCodeText("ePayment.49", _val));

            ePayment["ePayment.49"] = _val;
            ePayment["ALSAssessmentPerformedandWarranted"] = setCodeText("ePayment.49", _val);
        };
        
        // IF CANCELLED, NOT APPLICABLE
        //////////////////ePayment.50

        _payment = getValue(businessObject.elements, "ePayment.50");
        if(Call.IsCancelled != true)
        {
            if (_payment.IsNull == true) 
            {
                if (isRequiredStateElement("ePayment.50")) 
                {
                    v2Array.push({ section: "E05", element: "E5_34", val: v2NOT_RECORDED });
                    ePayment["ePayment.50"] = NIL_V3NOT_RECORDED;
                    ePayment["CMSServiceLevel"] = V3NOT_RECORDED;

                    XML.BeginNode("ePayment.50");
                    XML.Attrib("NV", NIL_V3NOT_RECORDED);
                    XML.EndNode();

                    OXML.Node("CMSServiceLevel", NOT_RECORDED);
                }
                else
                {
                    OXML.Node("CMSServiceLevel", "");
                    XML.Node("ePayment.50", "");
                }
            }
        }
        else 
        {
            v2Array.push({ section: "E05", element: "E5_34", val: setV2("ePayment.50", _val) });
            ePayment["ePayment.50"] = _val;
            ePayment["CMSServiceLevel"] = setCodeText("ePayment.50", _val);
            OXML.Node("CMSServiceLevel", setCodeText("ePayment.50", _val));
            XML.Node("ePayment.50", _val);
        }
    }
    else
    {
        XML.BeginNode("ePayment.50");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("CMSServiceLevel", NOT_APPLICABLE);
    };
        
    //////////////////ePayment.51
    _payment = getValue(businessObject.elements, "ePayment.51");
    if (_payment.IsNull == true) 
    {
        OXML.Node("EMSConditionCode", "");
        XML.Node("ePayment.51", "");

        ePayment["EMSConditionCode"] = null;
        ePayment["ePayment.51"] = null;
    }
    else 
    {
        OXML.Node("EMSConditionCode", _val);
        XML.Node("ePayment.51", _val);

        ePayment["ePayment.51"] = _val;
        ePayment["EMSConditionCode"] = _val;
    };
        
    //////////////////ePayment.52
    _payment = getValue(businessObject.elements, "ePayment.52");
    if (_payment.IsNull == true) 
    {
        ePayment["ePayment.52"] = null;
        ePayment["CMSTransportationIndicator"] = null;
        v2Array.push({ section: "E05", element: "E5_37", val: null });

        OXML.Node("CMSTransportationIndicator", "");
        XML.Node("ePayment.52", "");
    }
    else 
    {
        v2Array.push({ section: "E05", element: "E5_37", val: setV2("ePayment.52", _val) });
        ePayment["ePayment.52"] = _val;
        ePayment["CMSTransportationIndicator"] = setCodeText("ePayment.52", _val);

        OXML.Node("CMSTransportationIndicator", setCodeText("ePayment.52", _val));
        XML.Node("ePayment.52", _val);
    };
        
    //////////////////ePayment.53
    _payment = getValue(businessObject.elements, "ePayment.53");
    if (_payment.IsNull == true) {
        OXML.Node("TransportAuthorizationCode", "");
        XML.Node("ePayment.53", "");

        ePayment["ePayment.53"] = null;
        ePayment["TransportAuthorizationCode"] = null;
    }
    else {
        OXML.Node("TransportAuthorizationCode", _val);
        XML.Node("ePayment.53", _val);

        ePayment["ePayment.53"] = _val;
        ePayment["TransportAuthorizationCode"] = _val;
    };
        
    //////////////////ePayment.54
    _payment = getValue(businessObject.elements, "ePayment.54");
    if (_payment.IsNull == true) {
        ePayment["ePayment.54"] = null;
        ePayment["PriorAuthorizationCodePayer"] = null;

        OXML.Node("PriorAuthorizationCodePayer", "");
        XML.Node("ePayment.54", "");

    }
    else {
        ePayment["ePayment.54"] = _val;
        ePayment["PriorAuthorizationCodePayer"] = _val;

        OXML.Node("PriorAuthorizationCodePayer", _val);
        XML.Node("ePayment.54", _val);
    };
        
        
    ///////////////////
    _sectionIndex = getSectionIndex(businessObject.sections[i].attributes, "ePayment.SupplyItemGroup");
    for (var x = 0; x < _sectionIndex.length; x++) 
    {
        var listOfElements = businessObject.sections[i].attributes.sections[_sectionIndex[x]].attributes.elements
        
        //////////////////ePayment.55
        _payment = getValue(listOfElements, "ePayment.55");
        if (_payment.IsNull == true) 
        {
            OXML.Node("SupplyItemUsedName", "");
            XML.Node("ePayment.55", "");

            SupplyItemGroup["ePayment.55"] = null;
            SupplyItemGroup["SupplyItemUsedName"] = null;
        }
        else 
        {
            OXML.Node("SupplyItemUsedName", _val);
            XML.Node("ePayment.55", _val);

            SupplyItemGroup["ePayment.55"] = _val;
            SupplyItemGroup["SupplyItemUsedName"] = _val;
        };
        
            //////////////////ePayment.56
            _payment = getValue(listOfElements, "ePayment.56");
            if (_payment.IsNull == true) 
            {
                OXML.Node("NumberofSupplyItemsUsed", "");
                XML.Node("ePayment.56", "");

                SupplyItemGroup["ePayment.56"] = null;
                SupplyItemGroup["NumberofSupplyItemsUsed"] = null;
            }
            else 
            {
                OXML.Node("NumberofSupplyItemsUsed", _val);
                XML.Node("ePayment.56", _val);

                SupplyItemGroup["ePayment.56"] = _val;
                SupplyItemGroup["NumberofSupplyItemsUsed"] = _val;
            };
        };
  
    else 
  {
      v2Array.push({ section: "E07", element: "E07_01", val: v2NOT_APPLICABLE });
      ePayment["ePayment.01"] = v3NOT_APPLICABLE;
      ePayment["PrimaryMethodofPayment"] = v3NOT_APPLICABLE;
      
      v2Array.push({ section: "E07", element: "E07_34", val: v2NOT_APPLICABLE });
      ePayment["ePayment.50"] = v3NOT_APPLICABLE;
      ePayment["CMSServiceLevel"] = v3NOT_APPLICABLE;
     */
    return ePayment;
};
var seteResponse = function (businessObject, eDisposition) 
{
    var eResponse = new Object()
    /*
    var _response = new Object()
    //////////////////////eResponse.05    
    _response = getValue(businessObject.elements, "eResponse.05");
    if (_response.IsNull == true) {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.05", Description: "Type of Service Request  MANDATORY" })
        Call.IsValue = false;            
    }
    else
    {
        _val = _response.ValueArray[0].val;

        OXML.Node("TypeofServiceRequested", setCodeText("eResponse.05", _val));
        XML.Node("eResponse.05", _val);

        v2Array.push({ section: "E02", element: "E02_04", val: setV2("eResponse.05", _val) });
        eResponse["eResponse.05"] = _val;
        eResponse["TypeofServiceRequested"] = setCodeText("eResponse.05", _val); 
        
        if(_val in ["2205011","2205013"]) 
        {
            Call.IsStandBy = true;
        };
    };
        
    //////////////////////eResponse.06
    _val = getValue(businessObject.elements, "eResponse.06");
    if (_response.IsNull == true) 
    {
        OXML.Node("StandbyPurpose", null);
        XML.Node("eResponse.06", null);

        eResponse["eResponse.06"] = null;
        eResponse["StandbyPurpose"] = null;
    }
    else
    {
        if(Call.StandBy == false)
        {
            _val = _payment.ValueArray[0].val;

            OXML.Node("StandbyPurpose", setCodeText("eResponse.05", _val));
            XML.Node("eResponse.06", _val);

            eResponse["eResponse.06"] = _val;
            eResponse["StandbyPurpose"] = setCodeText("eResponse.06", _val);
        }
        else
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.06", Description: "Stand By Purpose/Type of Service Conflict " })
            eResponse["eResponse.06"] = null;
            eResponse["StandbyPurpose"] =  null;

            OXML.Node("StandbyPurpose", null);
            XML.Node("eResponse.06", null);
        }
    };
                
    //////////////////////eResponse.01
    //This pattern verifies that the EMS Agency Number in eResponse.01 matches the EMS Agency Number in dAgency.02.
    _val = getValue(businessObject.elements, "eResponse.01");
    if (_response.IsNull == true) {
        if(dAgency["dAgency.02"] !=  eResponse["eResponse.01"])
        {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.01", Description: "EMS Agency Number  dAgency.02 Must equal eResponse.01" })
        }
        else
        {                   
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.01", Description: "EMS Agency Number  MANDATORY" })
            eResponse["EMSAgencyNumber"] = null;
            eResponse["eResponse.01"] = null;       
        }
    }
    else
    {
        _val = _payment.ValueArray[0].val;

        v2Array.push({ section: "E02", element: "E02_01", val: _val });

        XML.Node("EMSAgencyNumber", _val);
        OXML.Node("eResponse.01", _val);
            
        eResponse["eResponse.01"] = _val;
        eResponse["EMSAgencyNumber"] = _val;
    };
        
    //////////////////////eResponse.02
    _val = getValue(elementList, "eResponse.02");
    if (_response.IsNull == true) {
        if(Call.StandBy == false)
        {            
            if (isRequiredStateElement("eResponse.02"))
            {
                eResponse["eResponse.02"] = V3NOT_RECORDED;
                eResponse["EMSAgencyName"] = NOT_RECORDED;

                XML.BeginNode("eResponse.02");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("EMSAgencyName", NOT_RECORDED);
            }
            else
            {
                eResponse["EMSAgencyName"] = NOT_REPORTING;
                eResponse["eResponse.02"] = v3NOT_REPORTING;
                XML.BeginNode("eResponse.02");
                XML.Attrib("NV", NIL_V3NOT_REPORTING);
                XML.EndNode();

                OXML.Node("EMSAgencyName", NOT_REPORTING);
            }
        }
        else
        {
            eResponse["EMSAgencyName"] = v3NOT_APPLICABLE
            eResponse["eResponse.02"] = v3NOT_APPLICABLE;

            XML.BeginNode("eResponse.02");
            XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
            XML.EndNode();

            OXML.Node("EMSAgencyName", NOT_APPLICABLE);
        }
    }
    else
    {
        _val = _payment.ValueArray[0].val;

        eResponse["eResponse.02"] = _val;
        eResponse["EMSAgencyName"] = _val;      
        XML.Node("eResponse.02", _val);
        OXML.Node("EMSAgencyName", _val);
    };
        
    //////////////////////eResponse.03
    _val = getValue(businessObject.elements, "eResponse.03");
    if(Call.IsEmergant ==true)
    {            
        if (_response.IsNull == true) {
            if (isRequiredStateElement("eResponse.02") == true)
            {
                v2Array.push({ section: "E02", element: "E02_02", val: v2NOT_RECORDED });
                eResponse["eResponse.03"] = V3NOT_RECORDED;
                eResponse["IncidentNumber"] = V3NOT_RECORDED;

                XML.BeginNode("eResponse.03");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("IncidentNumber", NOT_RECORDED);
            }
            else
            {
                v2Array.push({ section: "E02", element: "E02_02", val: null });
                eResponse["eResponse.03"] = null;
                eResponse["IncidentNumber"] = null;                            

                XML.Node("eResponse.03", "");
                OXML.Node("IncidentNumber", "");
            }
        }
        else
        {
            _val = _payment.ValueArray[0].val;

            v2Array.push({ section: "E02", element: "E02_02", val: _val });
            eResponse["eResponse.03"] = _val;
            eResponse["IncidentNumber"] = _val;

            XML.Node("eResponse.03", _val);
            OXML.Node("IncidentNumber", _val);                
        }
    }
    else
    {   
        ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.03", Description: "Stand By IncidentNumber/Type of Service Conflict " })
        v2Array.push({ section: "E02", element: "E02_02", val: v2NOT_APPLICABLE});
        
        eResponse["eResponse.03"] = v3NOT_APPLICABLE;
        eResponse["IncidentNumber"] = v3NOT_APPLICABLE;

        XML.BeginNode("eResponse.03");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("IncidentNumber", NOT_APPLICABLE);
    };         
        
    //////////////////////eResponse.04
    _val = getValue(businessObject.elements, "eResponse.04");
    if(Call.StandBy == false)
    {         
        if (_response.IsNull == true) {
            if (isRequiredStateElement("eResponse.04") == true)
            {
                v2Array.push({ section: "E02", element: "E02_03", val: v2NOT_RECORDED });
                eResponse["eResponse.04"] = v3NOT_RECORDED;
                eResponse["ResponseNumber"] = NOT_RECORDED;

                XML.BeginNode("eResponse.04");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("ResponseNumber", NOT_RECORDED);
            }
            else
            {
                v2Array.push({ section: "E02", element: "E02_03", val: null });
                eResponse["eResponse.04"] = null;
                eResponse["ResponseNumber"] = null;

                OXML.Node("ResponseNumber", "");
                XML.Node("eResponse.04", "");
            }
        }                        
        else
        {
            _val = _payment.ValueArray[0].val;

            v2Array.push({ section: "E02", element: "E02_03", val: _val });
            eResponse["eResponse.04"] = _val;
            eResponse["ResponseNumber"] = _val;

            OXML.Node("ResponseNumber", _val);
            XML.Node("eResponse.04", _val);
        }
    }
    else
    {
        ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.04", Description: "Stand By Response Number/Type of Service Conflict " })
            
        XML.BeginNode("eResponse.04");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("ResponseNumber", NOT_APPLICABLE);
    };
        
        
    //////////////////////eResponse.07
    _val = getValue(businessObject.elements, "eResponse.07");
    if (_response.IsNull == true) {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.07", Description: "Primary Role of the Unit MANDATORY" })
        v2Array.push({ section: "E02", element: "E02_05", val: null });
        eResponse["eResponse.07"] = null;
        eResponse["PrimaryRoleoftheUnit"] = null;
        XML.Node("eResponse.07", "");
        OXML.Node("PrimaryRoleoftheUnit", "");
    }
    else
    {
        _val = _payment.ValueArray[0].val;

        v2Array.push({ section: "E02", element: "E02_05", val: SetV2("eResponse.07", _val) });
        eResponse["PrimaryRoleoftheUnit"] = setCodeText("eResponse.07", _val);
        eResponse["eResponse.07"] = _val;

        XML.Node("eResponse.07", _val);
        OXML.Node("PrimaryRoleoftheUnit", setCodeText("eResponse.07", _val));
    };
        
    alert("A dispatch delay is any time delay that occurs from the time of PSAP call (eTimes.01) to the time the unit is notified by dispatch (eTimes.03).")
    //////////////////////eResponse.08
    //When a delay for a particular phase of a response is "None/No Delay", no other 
    //delays should be recorded for that phase.
    //eResponse.08[. = '2208013'
        
    _val = getValue(businessObject.elements, "eResponse.08");
    if(Call.StandBy == false)
    {         
        if (_response.IsNull == true) {
            if (isRequiredStateElement("eResponse.08") == true)
            {
                v2Array.push({ section: "E02", element: "E02_06", val: v2NOT_RECORDED });
                eResponse["eResponse.08"] = v3NOT_RECORDED;
                eResponse["TypeofDispatchDelay"] = NOT_RECORDED;

                XML.BeginNode("eResponse.08");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("TypeofDispatchDelay", NOT_RECORDED);
            }
            else
            {
                eResponse["eResponse.08"] = null;
                eResponse["TypeofDispatchDelay"] = null;
                OXML.Node("ResponseNumber", "");
                XML.Node("eResponse.08", "");
            }
        }        
        else
        {
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _payment.ValueArray.length; i++)
            {
                if ((_payment.ValueArray[i].HasValue == true) && (arr1.indexOf(_payment.ValueArray[i].val) > -1))
                {
                    _val = _payment.ValueArray[i].val
                    if (_val == '2208013')
                    { 
                        Call.HasDelay == false;
                    }
                    arr1.push(_val);
                    arr2.push(setD2("eResponse.08", _val));
                    arr3.push(setCodeText("eResponse.08", _val));

                    OXML.Node("ResponseNumber", setCodeText("eResponse.08", _val));
                    XML.Node("eResponse.08", _val);
                }
            };
            if (arr1.length > 0) 
            {
                if('2208013' in arr1) //if None, than None only
                {
                    if(arr1.length >1)
                    {
                        ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.08", Description: "Dispatch Delay Type Conflict" })
                    }
                };
                eResponse["TypeofDispatchDelay"] =arr3.slice(0);
                v2Array.push({ section: "E02", element: "E02_06", val: arr2.slice(0) });
                eResponse["eResponse.08"] = arr1.slice(0);
            }
        }
    }
    else
    {         
        v2Array.push({ section: "E02", element: "E02_06", val: v2NOT_APPLICABLE });
        eResponse["eResponse.08"] = v3NOT_APPLICABLE;
        eResponse["TypeofDispatchDelay"] = v3NOT_APPLICABLE;

        XML.BeginNode("eResponse.08");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("TypeofDispatchDelay", NOT_APPLICABLE);
    };
    
    //////////////////////eResponse.09
    //context="nem:eResponse.09[. = '2209011']">
    //This rule fires when there is an instance of eResponse.09 Type of Response Delay 
    //set to "None/No Delay".
        
    alert("A response delay is any time delay that occurs from the time the unit is notified by dispatch (eTimes.03) to the time the unit arrived on scene (eTimes.06).")
    _val = getValue(businessObject.elements, "eResponse.09");
    if (Call.HasDelay == false) 
    {
        if (_response.IsNull == true) {
            if (isRequiredStateElement("eResponse.09") == true) 
            {
                v2Array.push({ section: "E02", element: "E02_07", val: v2NOT_RECORDED });
                eResponse["eResponse.09"] = v3NOT_RECORDED;
                eResponse["TypeofResponseDelay"] = NOT_RECORDED;

                XML.BeginNode("eResponse.09");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("TypeofResponseDelay", NOT_RECORDED);
            }
            else
            {
                eResponse["TypeofResponseDelay"] = null;
                eResponse["eResponse.09"] = null;

                OXML.Node("eResponse.09", "");
                XML.Node("TypeofResponseDelay", "");
                v2Array.push({ section: "E02", element: "E02_07", val: null });
            }
        }        
        else 
        {            
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _payment.ValueArray.length; i++)
            {
                if ((_payment.ValueArray[i].HasValue == true) && (arr1.indexOf(_payment.ValueArray[i].val) > -1))
                {
                    _val = _payment.ValueArray[i].val
                    if (_val == '2209011')
                    {
                        Call.HasDelay == false;
                    }
                    arr1.push(_val);
                    arr2.push(setD2("eResponse.09", _val));
                    arr3.push(setCodeText("eResponse.09", _val));

                    OXML.Node("eResponse.09", _val);
                    XML.Node("TypeofResponseDelay", setCodeText("eResponse.09", _val));
                }
            };
            if (arr1.length > 0) 
            {
                if ('2209011' in arr1) //if None, than None only
                {
                    if (arr1.length > 1) {
                        ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.09", Description: "Response Delay Type Conflict" })
                    }
                };
                eResponse["TypeofResponseDelay"] = arr3.slice(0);
                v2Array.push({ section: "E02", element: "E02_07", val: arr2.slice(0) });
                eResponse["eResponse.09"] = arr1.slice(0);
            }
        }
    }
    else 
    {
        
        v2Array.push({ section: "E02", element: "E02_07", val: v2NOT_APPLICABLE });
        eResponse["eResponse.09"] = v3NOT_APPLICABLE;
        eResponse["TypeofResponseDelay"] = v3NOT_APPLICABLE;

        XML.BeginNode("eResponse.09");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("TypeofResponseDelay", NOT_APPLICABLE);
    };
        
    alert("A scene delay is any time delay that occurs from the time the unit arrived on scene (eTimes.06) to the time the unit left the scene (eTimes.09).")
    //////////////////////eResponse.10
    //eResponse.10" context="nem:eResponse.10[. = '2210017']">
    //This rule fires when there is an instance of eResponse.10 Type of Scene Delay set to 
    //"None/No Delay". -->
        
    _val = getValue(businessObject.elements, "eResponse.10");
    if (Call.StandBy == false) 
    {
        if (_response.IsNull == true) {
            if (isRequiredStateElement("eResponse.10") == true) 
            {
                v2Array.push({ section: "E02", element: "E02_08", val: v2NOT_RECORDED });
                eResponse["eResponse.10"] = v3NOT_RECORDED;
                eResponse["TypeofSceneDelay"] = NOT_RECORDED;

                XML.BeginNode("eResponse.10");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("TypeofResponseDelay", NOT_RECORDED);
            }
            else 
            {
                v2Array.push({ section: "E02", element: "E02_08", val: null });
                eResponse["eResponse.10"] = null;
                eResponse["TypeofSceneDelay"] = null;

                XML.Node("eResponse.10", "");
                OXML.Node("TypeofResponseDelay", "");
            }
        }    
        else 
        {
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _payment.ValueArray.length; i++)
            {
                if ((_payment.ValueArray[i].HasValue == true) && (arr1.indexOf(_payment.ValueArray[i].val) > -1))
                {
                    _val = _payment.ValueArray[i].val
                    if (_val == '2210017') 
                    {
                        Call.HasDelay == false;
                    }
                    arr1.push(_val);
                    arr2.push(setD2("eResponse.10", _val));
                    arr3.push(setCodeText("eResponse.10", _val));
                    OXML.Node("TypeofResponseDelay", setCodeText("eResponse.10", _val));    
                    OXML.Node("eResponse.10", _val);    
                }
            };
            if (arr1.length > 0) 
            {
                if ('2210017' in arr1) //if None, than None only
                {
                    if (arr1.length > 1) 
                    {
                        ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.18", Description: "Scene Delay Type Conflict" })
                    }
                };
                eResponse["TypeofSceneDelay"] = arr3.slice(0);
                v2Array.push({ section: "E02", element: "E02_08", val: arr2.slice(0) });
                eResponse["eResponse.10"] = arr1.slice(0);
            }    
        }
    }
    else 
    {        
        v2Array.push({ section: "E02", element: "E02_08", val: v2NOT_APPLICABLE });
        eResponse["eResponse.10"] = v3NOT_APPLICABLE;
        eResponse["TypeofSceneDelay"] = v3NOT_APPLICABLE;

        XML.BeginNode("eResponse.10");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("TypeofResponseDelay", NOT_APPLICABLE);    
    };
        
        //////////////////////eResponse.11
    //nem:eResponse.11[. = '2211011']">
        //This rule fires when there is an instance of eResponse.11 Type of Transport Delay set to 
        //"None/No Delay".
            
        alert("A transport delay is any time delay that occurs from the time the unit left the scene (eTimes.09) to the time the patient arrived at the destination (eTimes.10).")
        _val = getValue(businessObject.elements, "eResponse.11");
        if(Call.IsStandBy!= true)  //we have no delay
        {
            if (_response.IsNull == true) {
                if (isRequiredStateElement("eResponse.11") == true) {
                    v2Array.push({ section: "E02", element: "E02_09", val: v2NOT_RECORDED });
                    eResponse["eResponse.11"] = v3NOT_RECORDED;
                    eResponse["TypeofTransportDelay"] = NOT_RECORDED;

                    XML.BeginNode("eResponse.11");
                    XML.Attrib("NV", NIL_V3NOT_RECORDED);
                    XML.EndNode();

                    OXML.Node("TypeofTransportDelay", NOT_RECORDED);    
                }
                else 
                {
                    v2Array.push({ section: "E02", element: "E02_09", val: null });
                    eResponse["eResponse.11"] = null;
                    eResponse["TypeofTransportDelay"] = null;

                    OXML.Node("TypeofTransportDelay", "");    
                    XML.Node("eResponse.11", "");    
                }            
            }
            else 
            {
                var arr1 = [];
                var arr2 = [];
                var arr3 = [];
                for (var i = 0; i < _payment.ValueArray.length; i++)
                {
                    if ((_payment.ValueArray[i].HasValue == true) && (arr1.indexOf(_payment.ValueArray[i].val) > -1))
                    {
                        _val = _payment.ValueArray[i].val
                        if (_val == '2211011') 
                        {
                            Call.HasDelay == true
                        }
                        arr1.push(_val);
                        arr2.push(setD2("eResponse.11", _val));
                        arr3.push(setCodeText("eResponse.11", _val));
                        OXML.Node("TypeofTransportDelay", setCodeText("eResponse.11", _val));    
                        XML.Node("eResponse.11", _val);    
                    }
                };
                if (arr1.length > 0) 
                {
                    if ('2211011' in arr1) //if None, than None only
                    {
                        if (arr1.length > 1)
                        {
                            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.11", Description: "Transport Delay Type Conflict" })
                        }
                    };
                    eResponse["TypeofTransportDelay"] = arr3.slice(0);
                    v2Array.push({ section: "E02", element: "E02_09", val: arr2.slice(0) });
                    eResponse["eResponse.11"] = arr1.slice(0);
                }
            }
        }
        else
        {
        
            v2Array.push({ section: "E02", element: "E02_09", val: v2NOT_APPLICABLE });
            eResponse["eResponse.11"] = v3NOT_APPLICABLE;
            eResponse["TypeofTransportDelay"] = v3NOT_APPLICABLE;

            XML.BeginNode("eResponse.11");
            XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
            XML.EndNode();

            OXML.Node("TypeofTransportDelay", NOT_APPLICABLE);    
        };    
        



//////////////////////eResponse.12
            
    //nem:eResponse.12[. = '2212015']">
    //This rule fires when there is an instance of eResponse.12 Type of Turn-Around Delay set to "None/No Delay". -->
    alert("If a patient is being transported by the unit, turn-around delay is any time delay that occurs from the time the patient arrived at the destination (eTimes.10) until the time the unit is back in service (eTimes.13) or unit back at the home location (eTimes15) [whichever is the greater of the two times]");
    //If no patient is being transported by the unit, turn-around delay is any time delay that occurs from the time the unit arrived on scene (eTimes.06) until the unit is back in service (eTimes.13) or the unit back at the home location (eTimes.15) [whichever is the greater of the two times].")
            
    alert("A transport delay is any time delay that occurs from the time the unit left the scene (eTimes.09) to the time the patient arrived at the destination (eTimes.10).")
    _val = getValue(businessObject.elements, "eResponse.12");
    if (Call.IsStandBy == false) 
    {
        if (_response.IsNull == true) {
            if (isRequiredStateElement("eResponse.12") == true) {
                v2Array.push({ section: "E02", element: "E02_10", val: v2NOT_RECORDED });
                eResponse["eResponse.12"] = v3NOT_RECORDED;
                eResponse["TypeofTurnAroundDelay"] = NOT_RECORDED;

                XML.BeginNode("eResponse.12");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("TypeofTurnAroundDelay", NOT_RECORDED);    
            }
            else 
            {
                v2Array.push({ section: "E02", element: "E02_10", val: null });
                eResponse["eResponse.12"] = null;
                eResponse["TypeofTurnAroundDelay"] = null;

                OXML.Node("TypeofTurnAroundDelay", "");    
                XML.Node("eResponse.12", "");    
            }
        }
        else 
        {
            var bDelay = false;
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _payment.ValueArray.length; i++)
            {
                if ((_payment.ValueArray[i].HasValue == true) && (arr1.indexOf(_payment.ValueArray[i].val) > -1))
                {
                    _val = _payment.ValueArray[i].val

                    if (_val == "2212015")
                    {
                        Call.HasDelay== true
                    }
                    arr1.push(_val);
                    arr2.push(setD2("eResponse.12", _val));
                    arr3.push(setCodeText("eResponse.12", _val));
                    OXML.Node("TypeofTurnAroundDelay", setCodeText("eResponse.12", _val));    
                    XML.Node("eResponse.12", _val);    
                }
            };
            if (arr1.length > 0) 
            {
                if ("2212015" in arr1) //if None, than None only
                {
                    if (arr1.length > 1) {
                        ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.12", Description: "Turn Around Delay Type Conflict" })
                    }
                };
                eResponse["TypeofTurnAroundDelay"] = arr3.slice(0);
                v2Array.push({ section: "E02", element: "E02_10", val: arr2.slice(0) });
                eResponse["eResponse.12"] = arr1.slice(0);
            }
        }
    }
    else 
    {        
        v2Array.push({ section: "E02", element: "E02_10", val: v2NOT_APPLICABLE });
        eResponse["eResponse.12"] = v3NOT_APPLICABLE;
        eResponse["TypeofTurnAroundDelay"] = v3NOT_APPLICABLE;

        XML.BeginNode("eResponse.12");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("TypeofTurnAroundDelay", NOT_APPLICABLE);    
    };   
        
    //////////////////////eResponse.13
    _val = getValue(businessObject.elements, "eResponse.13");
    if (_response.IsNull == true) {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.13", Description: "EMS Unit number MANDATORY" })            
    }
    else
    {
        _val = _payment.ValueArray[0].val;

        v2Array.push({ section: "E02", element: "E02_11", val: _val });
        eResponse["EMSVehicleUnitNumber"] = _val;
        eResponse["eResponse.13"] = _val;

        OXML.Node("EMSVehicleUnitNumber",  _val);    
        XML.Node("eResponse.13", _val);    
    };
        
    //////////////////////eResponse.14
    _val = getValue(businessObject.elements, "eResponse.14");
    if (_val == null) 
    {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.14", Description: "EMS Unit Call Sign MANDATORY" })
    }
    else
    {
        _val = _payment.ValueArray[0].val;

        v2Array.push({ section: "E02", element: "E02_12", val: _val });
        eResponse["eResponse.14"] = _val;
        eResponse["EMSUnitCallSign"] = _val;

        OXML.Node("EMSUnitCallSign",  _val);    
        XML.Node("eResponse.14", _val);    
    };
   
        
    //////////////////////eResponse.15
    _val = getValue(businessObject.elements, "eResponse.15");
    if (_val == null)
    {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.15", Description: "Unit Level of Care MANDATORY" })
    }
    else
    {
        _val = _payment.ValueArray[0].val;

        eResponse["LevelofCareofThisUnit"] = setCodeText("eResponse.15", _val);
        eResponse["eResponse.15"] = _val;

        OXML.Node("LevelofCareofThisUnit",  setCodeText("eResponse.15", _val));    
        XML.Node("eResponse.15", _val);    
    };
                
    //////////////////////eResponse.16
    _val = getValue(businessObject.elements, "eResponse.16");
    if (_response.IsNull == true) {
        v2Array.push({ section: "E02", element: "E02_13", val: v2NOT_KNOWN });
        eResponse["eResponse.16"] = null;
        eResponse["VehicleDispatchLocation"] = null;

        OXML.Node("VehicleDispatchLocation",  "");    
        XML.Node("eResponse.16", "");    
    }
    else
    {
        _val = _payment.ValueArray[0].val;

        v2Array.push({ section: "E02", element: "E02_13", val: _val });
        eResponse["VehicleDispatchLocation"] = _val;
        eResponse["eResponse.16"] = _val;

        OXML.Node("VehicleDispatchLocation", _val);    
        XML.Node("eResponse.16", _val);    
    };
        
        
    //////////////////////eResponse.17
    _val = getValue(businessObject.elements, "eResponse.17");
    if (_response.IsNull == true) {
        v2Array.push({ section: "E02", element: "E02_15", val: v2NOT_KNOWN });
        eResponse["eResponse.17"] = null;
        eResponse["VehicleDispatchGPSLocation"] = null;

        OXML.Node("VehicleDispatchGPSLocation", "");    
        XML.Node("eResponse.17", "");    
    }
    else
    {
        _val = _payment.ValueArray[0].val;

        eResponse["VehicleDispatchGPSLocation"] = _val;
        eResponse["eResponse.17"] = _val;

        OXML.Node("VehicleDispatchGPSLocation", _val);    
        XML.Node("eResponse.17", _val);    
    };
        
    //////////////////////eResponse.18
    _val = getValue(businessObject.elements, "eResponse.18");
    if (_response.IsNull == true) {
        eResponse["eResponse.18"] = null;
        eResponse["VehicleDispatchUSNationalGridLocation"] = null;

        OXML.Node("VehicleDispatchUSNationalGridLocation", "");    
        XML.Node("eResponse.18", "");    
    }
    else
    {
        _val = _payment.ValueArray[0].val;

        eResponse["VehicleDispatchUSNationalGridLocation"] = _val;
        eResponse["eResponse.18"] = _val;

        OXML.Node("VehicleDispatchUSNationalGridLocation", _val);    
        XML.Node("eResponse.18", _val);    
    };
        
    //////////////////////eResponse.19
    _val = getValue(businessObject.elements, "eResponse.19");
    if(Call.IsCancelled == false)
    {        
        if (_response.IsNull == true) {
            if (isRequiredStateElement("eResponse.19") == true) 
            {
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.19", Description: "Beginning Odometer REQUIRED" })             
            }
        }
        else
        {
            _val = _payment.ValueArray[0].val;

            OXML.Node("BeginningOdometerReadingofRespondingVehicle", _val);    
            XML.Node("eResponse.19", _val);    

            eResponse["BeginningOdometerReadingofRespondingVehicle"] = _val;        
            v2Array.push({ section: "E02", element: "E02_16", val: _val });
            eResponse["eResponse.19"] = _val;
        }
    }
    else
    {
        v2Array.push({ section: "E02", element: "E02_16", val: null });
        eResponse["eResponse.19"] = null;
        eResponse["BeginningOdometerReadingofRespondingVehicle"] = null;

        OXML.Node("BeginningOdometerReadingofRespondingVehicle", null);    
        XML.Node("eResponse.19", null);    
    };
        
        
    //////////////////////eResponse.20
    _val = getValue(businessObject.elements, "eResponse.20");
    if(Call.IsCancelled == false)  //if Cancelled prior to arrival on Scene, no data
    {   
        if (_response.IsNull == true) {
            if (isRequiredStateElement("eResponse.20") == true) 
            {
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.20", Description: "On-scene Odometer MANDATORY" })
            }
        }
        else
        {
            _val = _payment.ValueArray[0].val;

            v2Array.push({ section: "E02", element: "E02_16", val: _val });
            eResponse["eResponse.20"] = _val;
            eResponse["OnSceneOdometerReadingofRespondingVehicle"] = _val;

            OXML.Node("OnSceneOdometerReadingofRespondingVehicle", _val);    
            XML.Node("eResponse.20", _val);    
        }            
    }
    else
    {
        v2Array.push({ section: "E02", element: "E02_17", val: null });
        eResponse["OnSceneOdometerReadingofRespondingVehicle"] = null;
        eResponse["eResponse.20"] = null;
        OXML.Node("OnSceneOdometerReadingofRespondingVehicle", "");    
        XML.Node("eResponse.20", "");    
    };
        
        
    //////////////////////eResponse.21
    _val = getValue(businessObject.elements, "eResponse.21");
    if(eDisposition["eDisposition.12"] !="4212007")  //if Cancelled prior to arrival on Scene, no data
    {   
        if (_response.IsNull == true) {
            if (isRequiredStateElement("eResponse.21") == true)
            {
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.21", Description: "On-scene Odometer MANDATORY" })
            }
        }
        else
        {
            _val = _payment.ValueArray[0].val;

            v2Array.push({ section: "E02", element: "E02_18", val: _val });
            eResponse["eResponse.21"] = _val;
            eResponse["PatientDestinationOdometerReadingofRespondingVehicle"] = _val;

            OXML.Node("PatientDestinationOdometerReadingofRespondingVehicle", _val);    
            XML.Node("eResponse.21", _val);             
        }
        
    }
    else
    {   
        eResponse["PatientDestinationOdometerReadingofRespondingVehicle"] = null;
        v2Array.push({ section: "E02", element: "E02_18", val: null });           
        eResponse["eResponse.21"] = null;

        OXML.Node("PatientDestinationOdometerReadingofRespondingVehicle", "");    
        XML.Node("eResponse.21", "");    

    };
        
        
    //////////////////////eResponse.22
    _val = getValue(businessObject.elements, "eResponse.22");
    if(eDisposition["eDisposition.12"] !="4212007")  //if Cancelled prior to arrival on Scene, no data
    {   
        if (_response.IsNull == true) {
            if (isRequiredStateElement("eResponse.22") == true) 
            {
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.22", Description: "Ending Odometer MANDATORY" })
            }
            else 
            {
                v2Array.push({ section: "E02", element: "E02_19", val: null });
                eResponse["eResponse.22"] = null;
                eResponse["EndingOdometerReadingofRespondingVehicle"] = null;

                OXML.Node("EndingOdometerReadingofRespondingVehicle", "");    
                XML.Node("eResponse.22", "");    
            }
        }
        else
        {
            _val = _payment.ValueArray[0].val;

            v2Array.push({ section: "E02", element: "E02_19", val: _val });
            eResponse["eResponse.22"] = _val;
            eResponse["EndingOdometerReadingofRespondingVehicle"] = _val;

            OXML.Node("EndingOdometerReadingofRespondingVehicle", _val);    
            XML.Node("eResponse.22", _val);    
        }        
    }
    else 
    {    
        v2Array.push({ section: "E02", element: "E02_19", val: null });
        eResponse["eResponse.22"] = null;
        eResponse["EndingOdometerReadingofRespondingVehicle"] = null;

        OXML.Node("EndingOdometerReadingofRespondingVehicle", "");    
        XML.Node("eResponse.22", "");    
    };
        
        
    //////////////////////eResponse.23
    _val = getValue(businessObject.elements, "eResponse.22");
    if(Call.IsCancelled ==false)  //if Cancelled prior to arrival on Scene, no data
    {
        if (_response.IsNull == true) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.23", Description: "Response Mode to Scene MANDATORY" })

        }
        else
        {
            v2Array.push({ section: "E02", element: "E02_20", val: setV2("eResponse.23", _val) });
            eResponse["ResponseModetoScene"] = setCodeText("eResponse.23", _val);
            eResponse["eResponse.23"] = _val;
        }
    }
    else
    {
        _val = _payment.ValueArray[0].val;

        eResponse["eResponse.23"] = null;
        eResponse["ResponseModetoScene"] = null;

        OXML.Node("ResponseModetoScene", _val);    
        XML.Node("eResponse.23", _val);    
    };
        
        
    //////////////////////eResponse.24
    _val = getValue(businessObject.elements, "eResponse.24");
    if(eDisposition["eDisposition.12"] !="4212007")  //if Cancelled prior to arrival on Scene, no data
    {   
        if (_response.IsNull == true) {
            if (isRequiredStateElement("eResponse.24") == true)
            {
                eResponse["eResponse.24"] = V3NOT_RECORDED;
                eResponse["AdditionalResponseModeDescriptors"] = NOT_RECORDED;

                XML.BeginNode("eResponse.24");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("AdditionalResponseModeDescriptors", NOT_RECORDED);    
            }
        }
        else 
        {
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _payment.ValueArray.length; i++)
            {
                if ((_payment.ValueArray[i].HasValue == true) && (arr1.indexOf(_payment.ValueArray[i].val) > -1))
                {
                    _val = _payment.ValueArray[i].val
                    arr1.push(_val);            
                    arr3.push(setCodeText("eResponse.24", _val));
                    OXML.Node("AdditionalResponseModeDescriptors", setCodeText("eResponse.24", _val));  
                    XML.Node("AdditionalResponseModeDescriptors", _val);  
                }
            };
            eResponse["eResponse.12"] = arr1.slice(0);
            eResponse["AdditionalResponseModeDescriptors"]  =arr3.slice(0);      
            isNotApplicableFlag = false;
        }
    }
    else
    {
        eResponse["eResponse.24"] = v3NOT_APPLICABLE;
        eResponse["AdditionalResponseModeDescriptors"] = NOT_APPLICABLE;

        XML.BeginNode("eResponse.24");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("AdditionalResponseModeDescriptors", NOT_APPLICABLE);
    };
    */
    return eResponse;
};
var seteScene = function (businessObject) 
{
    var eScene = new Object();
    var _scene = new Object;
    /*
    //////////////////////eScene.01
    _scene = getValue(businessObject.elements, "eScene.01");
    if(eDisposition["eDisposition.12"] !="4212007")  //if Cancelled prior to arrival on Scene, no data
    {   
        if (_scene.IsNull == true)
        {
            _val = _scene.ValueArray[0].val;

            eScene["FirstEMSUnitonScene"] = NOT_RECORDED;
            eScene["eScene.01"] = v3NOT_RECORDED;

            XML.BeginNode("eScene.01");
            XML.Attrib("NV", NIL_V3NOT_RECORDED);
            XML.EndNode();

            OXML.Node("FirstEMSUnitonScene", NOT_RECORDED);
        }
        else
        {
            _val = _scene.ValueArray[0].val;

            eScene["eScene.01"] = _val;
            eScene["FirstEMSUnitonScene"] = setCodeText("eScene.01", _val);
            
            XML.Node("eScene.01", NOT_APPLICABLE);
            OXML.Node("FirstEMSUnitonScene", setCodeText("eScene.01", _val));
        }
    }
    else
    {
        eScene["FirstEMSUnitonScene"] = NOT_APPLICABLE;
        eScene["eScene.01"] = v3NOT_APPLICABLE;

        XML.BeginNode("eScene.01");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("FirstEMSUnitonScene", NOT_APPLICABLE);
    };
        
        
    ///////////////////////////////////    
        
    if(eDisposition["eDisposition.12"] !="4212007")  //if Cancelled prior to arrival on Scene, no data
    {   
        _sectionIndex = getSectionIndex(businessObject.sections.attributes, "eScene.ResponderGroup");
        for (var i = 0; i < _sectionIndex.length; i++)
        {        
            var elementList = businessObject.sections[i].attributes.elements;                
            //////////////////////eScene.02
            _scene = getValue(elementList, "eScene.02");
            if (_scene.IsNull == true)
            {
                ResponderGroup["eScene.02"] = null;
                ResponderGroup["OtherEMSorPublicSafetyAgenciesatScene"] = null;
                v2Array.push({ section: "E08", element: "E08_01", val: v2NOT_KNOWN });

                XML.Node("eScene.02", "");
                OXML.Node("OtherEMSorPublicSafetyAgenciesatScene", "");
            }
            else
            {
                _val = _scene.ValueArray[0].val;

                v2Array.push({ section: "E08", element: "E08_01", val: _val });
                ResponderGroup["eScene.02"] = _val;
                ResponderGroup["OtherEMSorPublicSafetyAgenciesatScene"] = _val;

                XML.Node("eScene.02", _val);
                OXML.Node("OtherEMSorPublicSafetyAgenciesatScene", _val);
            };
        
            //////////////////////eScene.03
            _scene = getValue(elementList, "eScene.03");
            if (_val == null)
            {
                ResponderGroup["eScene.02"] = null;
                ResponderGroup["OtherEMSorPublicSafetyAgencyIDNumber"] = null;
                XML.Node("eScene.03", "");
                OXML.Node("OtherEMSorPublicSafetyAgencyIDNumber", "");
            }
            else
            {
                _val = _scene.ValueArray[0].val;

                ResponderGroup["eScene.02"] = _val;
                ResponderGroup["OtherEMSorPublicSafetyAgencyIDNumber"] = _val;
                XML.Node("eScene.03", _val);
                OXML.Node("OtherEMSorPublicSafetyAgencyIDNumber", _val);
            };
        
            //////////////////////eScene.04
            _scene = getValue(elementList, "eScene.04");
            if (_val == null)
            {
                ResponderGroup["eScene.04"] = null;
                ResponderGroup["TypeofOtherServiceatScene"] = null;
                v2Array.push({ section: "E08", element: "E08_02", val: v2NOT_KNOWN });
                XML.Node("eScene.04", "");
                OXML.Node("TypeofOtherServiceatScene", "");
            }
            else
            {
                _val = _scene.ValueArray[0].val;

                ResponderGroup["eScene.04"] = _val;
                ResponderGroup["TypeofOtherServiceatScene"] = setCodeText("eScene.04", _val);
                v2Array.push({ section: "E08", element: "E08_02", val: setV2("eScene.04", _val) });

                XML.Node("eScene.04", _val);
                OXML.Node("TypeofOtherServiceatScene", setCodeText("eScene.04", _val));

            }
        }
    };
    ///////////////////////////////
    //////////////////////eScene.05
    _scene = getValue(businessObject.elements, "eScene.05");
    if(eDisposition["eDisposition.12"] !="4212007")  //if Cancelled prior to arrival on Scene, no data
    {   
        if (_scene.IsNull == true) {
            eScene["eScene.05"] = null;
            eScene["DateTimeInitialResponderArrivedonScene"] = null;
            v2Array.push({ section: "E08", element: "E08_04", val: null });

            XML.Node("eScene.05",null);
            OXML.Node("DateTimeInitialResponderArrivedonScene", null);
        }
        else
        {
            _val = _scene.ValueArray[0].val;

            eScene["eScene.05"] = _val;
            eScene["DateTimeInitialResponderArrivedonScene"] = _val;
            v2Array.push({ section: "E08", element: "E08_04", val: _val });

            XML.Node("eScene.05", _val);
            OXML.Node("DateTimeInitialResponderArrivedonScene",  _val);
        }
    };
        
    //////////////////////eScene.06
    _scene = getValue(businessObject.elements, "eScene.06");
    if(eDisposition["eDisposition.12"] !="4212007")  //if Cancelled prior to arrival on Scene, no data
    {   
        if (_scene.IsNull == true) {
            v2Array.push({ section: "E08", element: "E08_05", val: v2NOT_RECORDED });
            eScene["eScene.06"] = V3NOT_RECORDED;
            eScene["NumberofPatientsatScene"] = NOT_RECORDED;

            XML.BeginNode("eScene.06");
            XML.Attrib("NV", NIL_V3NOT_RECORDED);
            XML.EndNode();

            OXML.Node("NumberofPatientsatScene", NOT_RECORDED);
        }
        else
        {
            _val = _scene.ValueArray[0].val;

            eScene["NumberofPatientsatScene"] = setCodeText("eScene.06", _val);
            v2Array.push({ section: "E08", element: "E08_05", val: setV2("eScene.06", _val) });
            eScene["eScene.06"] = _val;
            OXML.Node("NumberofPatientsatScene", setCodeText("eScene.06", _val));
            XML.Node("eScene.06", _val);
        }
    }
    else
    {
        v2Array.push({ section: "E08", element: "E08_05", val: v2NOT_APPLICABLE });
        eScene["eScene.06"] = v3NOT_APPLICABLE;
        eScene["NumberofPatientsatScene"] = NOT_APPLICABLE;

        XML.BeginNode("eScene.06");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("NumberofPatientsatScene", NOT_APPLICABLE);
    };
        
        
    //////////////////////eScene.07
    _scene = getValue(businessObject.elements, "eScene.07");
    if(eDisposition["eDisposition.12"] !="4212007")  //if Cancelled prior to arrival on Scene, no data
    {   
        if (_scene.IsNull == true) {
            v2Array.push({ section: "E08", element: "E08_06", val: v2NOT_RECORDED });
            eScene["eScene.07"] = V3NOT_RECORDED;
            eScene["MassCasualtyIncident"] = NOT_RECORDED;

            XML.BeginNode("eScene.07");
            XML.Attrib("NV", NIL_V3NOT_RECORDED);
            XML.EndNode();

            OXML.Node("MassCasualtyIncident", NOT_RECORDED);
        }
        else
        {
            _val = _scene.ValueArray[0].val;

            v2Array.push({ section: "E08", element: "E08_06", val: setV2("eScene.07", _val) });
            eScene["eScene.07"] = _val;
            eScene["eScene.07"] = setCodeText("eScene.07", _val);
            OXML.Node("MassCasualtyIncident", setCodeText("eScene.07", _val));
            XML.Node("eScene.07", _val);
        }
    }
    else
    {
        v2Array.push({ section: "E08", element: "E08_06", val: v2NOT_APPLICABLE });
        eScene["eScene.07"] = v3NOT_APPLICABLE;
        eScene["MassCasualtyIncident"] = NOT_APPLICABLE;

        XML.BeginNode("eScene.07");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("MassCasualtyIncident", NOT_APPLICABLE);
    };
        
    //////////////////////eScene.08
    _scene = getValue(businessObject.elements, "eScene.08");
    if(eDisposition["eDisposition.12"] !="4212007")  //if Cancelled prior to arrival on Scene, no data
    {   
        if (_scene.IsNull == true) {
            eScene["eScene.08"] = V3NOT_RECORDED;
            eScene["TriageClassificationforMCIPatient"] = NOT_RECORDED;

            XML.BeginNode("eScene.08");
            XML.Attrib("NV", NIL_V3NOT_RECORDED);
            XML.EndNode();

            OXML.Node("TriageClassificationforMCIPatient", NOT_RECORDED);
        }
        else
        {
            _val = _scene.ValueArray[0].val;

            eScene["TriageClassificationforMCIPatient"] = setCodeText("eScene.08", _val);
            eScene["eScene.08"] = _val;
            OXML.Node("TriageClassificationforMCIPatient", setCodeText("eScene.08", _val));
            XML.Node("eScene.08", _val);
        }
    }
    else
    {
        eScene["eScene.08"] = v3NOT_APPLICABLE;
        eScene["TriageClassificationforMCIPatient"] = NOT_APPLICABLE;

        XML.BeginNode("eScene.08");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("TriageClassificationforMCIPatient", NOT_APPLICABLE);
    };
        
    //////////////////////eScene.09
    _scene = getValue(businessObject.elements, "eScene.09");
    if(eDisposition["eDisposition.12"] !="4212007")  //if Cancelled prior to arrival on Scene, no data
    {   
        if (_scene.IsNull == true) {
            v2Array.push({ section: "E08", element: "E08_07", val: v2NOT_RECORDED });
            eScene["eScene.09"] = V3NOT_RECORDED;
            eScene["IncidentLocationType"] = NOT_RECORDED;

            XML.BeginNode("eScene.09");
            XML.Attrib("NV", NIL_V3NOT_RECORDED);
            XML.EndNode();

            OXML.Node("IncidentLocationType", NOT_RECORDED);
        }
        else
        {
            _val = _scene.ValueArray[0].val;

            v2Array.push({ section: "E08", element: "E08_07", val: setV2("eScene.09", _val) });
            eScene["IncidentLocationType"] = setCodeText("eScene.09", _val);
            eScene["eScene.09"] = _val;
            OXML.Node("IncidentLocationType", setCodeText("eScene.09", _val));
            XML.Node("eScene.09", _val);
        }
    }
    else
    {
        v2Array.push({ section: "E08", element: "E08_07", val: v2NOT_APPLICABLE });
        eScene["eScene.09"] = v3NOT_APPLICABLE;
        eScene["IncidentLocationType"] = NOT_APPLICABLE;

        XML.BeginNode("eScene.09");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("IncidentLocationType", NOT_APPLICABLE);
    };
        
    //////////////////////eScene.10
    _scene = getValue(businessObject.elements, "eScene.10");
    if(eDisposition["eDisposition.12"] !="4212007")  //if Cancelled prior to arrival on Scene, no data
    {   
        if (_scene.IsNull == true) {
            if (isRequiredStateElement("eScene.10") == true)
            {
                v2Array.push({ section: "E08", element: "E08_08", val: v2NOT_RECORDED });
                eScene["eScene.10"] = V3NOT_RECORDED;
                eScene["IncidentFacilityCode"] = NOT_RECORDED;

                XML.BeginNode("eScene.10");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("IncidentFacilityCode", NOT_RECORDED);
            }
            else
            {
                v2Array.push({ section: "E08", element: "E08_08", val: v2NOT_REPORTING });
                eScene["eScene.10"] = V3NOT_REPORTING;
                eScene["IncidentFacilityCode"] = NOT_REPORTING;

                XML.BeginNode("eScene.10");
                XML.Attrib("NV", NIL_V3NOT_REPORTING);
                XML.EndNode();

                OXML.Node("IncidentFacilityCode", NOT_REPORTING);
            }
        }
        else
        {
            _val = _scene.ValueArray[0].val;

            v2Array.push({ section: "E08", element: "E08_08", val: _val });
            eScene["eScene.10"] = _val;
            eScene["IncidentFacilityCode"] = _val;

            OXML.Node("IncidentFacilityCode", _val);
            XML.Node("eScene.10", _val);
        }
    }
    else
    {
        v2Array.push({ section: "E08", element: "E08_08", val: v2NOT_APPLICABLE});
        eScene["eScene.10"] = v3NOT_APPLICABLE;
        eScene["IncidentFacilityCode"] = NOT_APPLICABLE;

        XML.BeginNode("eScene.10");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("IncidentFacilityCode", NOT_APPLICABLE);
    };
                
    //////////////////////eScene.11
    _scene = getValue(businessObject.elements, "eScene.11");
    if(eDisposition["eDisposition.12"] !="4212007")  //if Cancelled prior to arrival on Scene, no data
    {   
        if (_scene.IsNull == true) {
            v2Array.push({ section: "E08", element: "E08_10", val: null });
            eScene["eScene.11"] = null;
            eScene["GPSLocation"] = null;
            XML.Node("eScene.11", "");
            OXML.Node("IncidentFacilityCode", "");
        }        
        else
        {
            _val = _scene.ValueArray[0].val;

            v2Array.push({ section: "E08", element: "E08_10", val: _val });
            eScene["eScene.11"] = _val;
            eScene["GPSLocation"] = _val;
            XML.Node("eScene.11", _val);
            OXML.Node("IncidentFacilityCode", _val);
        }
    };

    //////////////////////eScene.12
    _scene = getValue(businessObject.elements, "eScene.12");
    if(eDisposition["eDisposition.12"] !="4212007")  //if Cancelled prior to arrival on Scene, no data
    {   
        if (_scene.IsNull == true) {
            if (isRequiredStateElement("eScene.12") == true)
            {         
                eScene["eScene.12"] = null;
                eScene["NationalGridCoordinates"] = null;

                XML.Node("eScene.12", null);
                OXML.Node("NationalGridCoordinates", null);
            }
        }
        else
        {
            _val = _scene.ValueArray[0].val;

            eScene["eScene.12"] = _val;
            eScene["NationalGridCoordinates"] = _val; 
                
            XML.Node("eScene.12", _val);
            OXML.Node("NationalGridCoordinates", _val);
        }
    };
        
    //////////////////////eScene.13
    _scene = getValue(businessObject.elements, "eScene.13");
    if(eDisposition["eDisposition.12"] !="4212007")  //if Cancelled prior to arrival on Scene, no data
    {   
        if (_scene.IsNull == true) {
            eScene["eScene.13"] = null;
            eScene["IncidentFacilityorLocationName"] = null;

            XML.Node("eScene.13", null);
            OXML.Node("IncidentFacilityorLocationName", null);
        }
        else 
        {
            _val = _scene.ValueArray[0].val;

            eScene["eScene.13"] = _val;
            eScene["IncidentFacilityorLocationName"] = _val;

            XML.Node("eScene.13", _val);
            OXML.Node("IncidentFacilityorLocationName", _val);
        }
    };
        
    //////////////////////eScene.14
    _scene = getValue(businessObject.elements, "eScene.14");
    if(eDisposition["eDisposition.12"] !="4212007")  //if Cancelled prior to arrival on Scene, no data
    {   
        if (_scene.IsNull == true) {
            eScene["eScene.14"] = v3NOT_RECORDED;
            eScene["MilePostorMajorRoadway"] = NOT_RECORDED;

            XML.BeginNode("eScene.14");
            XML.Attrib("NV", NIL_V3NOT_RECORDED);
            XML.EndNode();

            OXML.Node("MilePostorMajorRoadway", NOT_RECORDED);
        }
        else 
        {
            _val = _scene.ValueArray[0].val;

            eScene["eScene.14"] = _val;
            eScene["MilePostorMajorRoadway"] = _val;

            XML.Node("eScene.14", _val);
            OXML.Node("MilePostorMajorRoadway", _val);
        }
    }
    else
    {
        eScene["eScene.14"] = v3NOT_APPLICABLE;
        eScene["MilePostorMajorRoadway"] = NOT_APPLICABLE;    

        XML.BeginNode("eScene.14");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("MilePostorMajorRoadway", NOT_APPLICABLE);
    };
        
    //////////////////////eScene.15
    _scene = getValue(businessObject.elements, "eScene.15");
    if(eDisposition["eDisposition.12"] !="4212007")  //if Cancelled prior to arrival on Scene, no data
    {   
        if (_scene.IsNull == true) {
            if (isRequiredStateElement("eScene.15") == true)
            {
                v2Array.push({ section: "E08", element: "E08_11", val: v2NOT_RECORDED });
                eScene["eScene.15"] = V3NOT_RECORDED;
                eScene["IncidentStreetAddress"] = NOT_RECORDED;

                XML.BeginNode("eScene.15");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("IncidentStreetAddress", NOT_RECORDED);
            }
            else  //if it isn't required, is nillable
            {
                v2Array.push({ section: "E08", element: "E08_11", val: v2NOT_KNOWN });
                eScene["eScene.15"] = null;
                eScene["IncidentStreetAddress"] = null;
                OXML.Node("IncidentStreetAddress", null);
                XML.Node("eScene.15", null);
            }
        }
        else
        {
            _val = _scene.ValueArray[0].val;

            v2Array.push({ section: "E08", element: "E08_11", val: _val });
            eScene["eScene.15"] = _val;
            eScene["IncidentStreetAddress"] = _val;
            OXML.Node("IncidentStreetAddress", _val);
            XML.Node("eScene.15", _val);
        }
    }
    else
    {
        v2Array.push({ section: "E08", element: "E08_11", val: v2NOT_APPLICABLE});
        eScene["eScene.15"] = v3NOT_APPLICABLE;
        eScene["IncidentStreetAddress"] = NOT_APPLICABLE;
        XML.BeginNode("eScene.15");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("IncidentStreetAddress", NOT_APPLICABLE);
    };
        
    //////////////////////eScene.16
    _scene = getValue(businessObject.elements, "eScene.16");
    if(eDisposition["eDisposition.12"] !="4212007")  //if Cancelled prior to arrival on Scene, no data
    {   
        if (_scene.IsNull == true) {
            if (isRequiredStateElement("eScene.16") == true)
            {
                eScene["eScene.16"] = V3NOT_RECORDED;
                eScene["IncidentApartmentSuiteorRoom"] = V3NOT_RECORDED;

                XML.BeginNode("eScene.16");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("IncidentApartmentSuiteorRoom", NOT_RECORDED);
            }
            else 
            {
                eScene["eScene.16"] = null;
                eScene["IncidentApartmentSuiteorRoom"] = null;

                OXML.Node("IncidentStreetAddress", "");
                XML.Node("eScene.16", "");
            }
        }
        else
        {
            _val = _scene.ValueArray[0].val;

            eScene["eScene.16"] = _val;
            eScene["IncidentApartmentSuiteorRoom"] = _val;
            OXML.Node("IncidentStreetAddress", _val);
            XML.Node("eScene.16", _val);
        }
    }
    else
    {
        eScene["eScene.16"] = v3NOT_APPLICABLE;
        eScene["IncidentApartmentSuiteorRoom"] = NOT_APPLICABLE;
            
        XML.BeginNode("eScene.16");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("IncidentApartmentSuiteorRoom", NOT_APPLICABLE);
    };
        
    //////////////////////eScene.17
    _scene = getValue(businessObject.elements, "eScene.17");
    if(eDisposition["eDisposition.12"] !="4212007")  //if Cancelled prior to arrival on Scene, no data
    {   
        if (_scene.IsNull == true) {
            if (isRequiredStateElement("eScene.17") == true)
            {
                v2Array.push({ section: "E08", element: "E08_12", val: v2NOT_RECORDED });
                eScene["eScene.17"] = v3NOT_RECORDED;
                eScene["IncidentCity"] = NOT_RECORDED;

                XML.BeginNode("eScene.17");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("IncidentCity", NOT_RECORDED);
            }
            else
            {
                v2Array.push({ section: "E08", element: "E08_12", val: v2NOT_REPORTING });
                eScene["eScene.17"] = v3NOT_REPORTING;
                eScene["IncidentCity"] = NOT_REPORTING;

                XML.BeginNode("eScene.17");
                XML.Attrib("NV", NIL_V3NOT_REPORTING);
                XML.EndNode();

                OXML.Node("IncidentCity", NOT_REPORTING);
            }
        }
        else
        {
            _val = _scene.ValueArray[0].val;

            v2Array.push({ section: "E08", element: "E08_12", val: _val });
            eScene["eScene.17"] = _val;
            eScene["IncidentCity"] = _val;
            OXML.Node("IncidentCity", _val);
            XML.Node("eScene.17", _val);
        }
    }
    else
    {
        v2Array.push({ section: "E08", element: "E08_12", val: v2NOT_APPLICABLE });
        eScene["eScene.17"] = v3NOT_APPLICABLE;
        eScene["IncidentCity"] = NOT_APPLICABLE;

        XML.BeginNode("eScene.17");
        XML.Attrib("NV", NIL_V3NOT_RECORDED);
        XML.EndNode();

        OXML.Node("IncidentCity", NOT_RECORDED);
    };
        
    //////////////////////eScene.18
    _scene = getValue(businessObject.elements, "eScene.18");
    if(eDisposition["eDisposition.12"] !="4212007")  //if Cancelled prior to arrival on Scene, no data
    {   
        if (_scene.IsNull == true) {
            v2Array.push({ section: "E08", element: "E08_14", val: v2NOT_RECORDED });
            eScene["eScene.18"] = v3NOT_RECORDED;
            eScene["IncidentState"] = NOT_RECORDED;
            XML.BeginNode("eScene.18");
            XML.Attrib("NV", NIL_V3NOT_RECORDED);
            XML.EndNode();

            OXML.Node("IncidentState", NOT_RECORDED);
        }
        else
        {
            _val = _scene.ValueArray[0].val;

            v2Array.push({ section: "E08", element: "E08_14", val: _val });
            eScene["eScene.18"] = _val;
            eScene["IncidentState"] = _val;
            OXML.Node("IncidentState", _val);
            XML.Node("eScene.18", _val);
        }
    }
    else
    {
        v2Array.push({ section: "E08", element: "E08_14", val: v2NOT_APPLICABLE });
        eScene["eScene.18"] = v3NOT_APPLICABLE;
        eScene["IncidentState"] = NOT_APPLICABLE;
        XML.BeginNode("eScene.18");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("IncidentState", NOT_APPLICABLE);
    };
        
    //////////////////////eScene.19
    _scene = getValue(businessObject.elements, "eScene.19");
    if(eDisposition["eDisposition.12"] !="4212007")  //if Cancelled prior to arrival on Scene, no data
    {   
        if (_scene.IsNull == true) {
            v2Array.push({ section: "E08", element: "E08_15", val: v2NOT_RECORDED });
            eScene["eScene.19"] = v3NOT_RECORDED;
            eScene["IncidentZip"] = NOT_RECORDED;

            XML.BeginNode("eScene.19");
            XML.Attrib("NV", NIL_V3NOT_RECORDED);
            XML.EndNode();

            OXML.Node("IncidentZip", NOT_RECORDED);
        }
        else
        {
            _val = _scene.ValueArray[0].val;

            v2Array.push({ section: "E08", element: "E08_15", val: _val });
            eScene["eScene.19"] = _val;
            eScene["IncidentZip"] = _val;

            OXML.Node("IncidentZip",  _val);
            XML.Node("eScene.19",  _val);
        }
    }
    else
    {
        v2Array.push({ section: "E08", element: "E08_15", val: v2NOT_APPLICABLE });
        eScene["eScene.19"] = v3NOT_APPLICABLE;
        eScene["IncidentZip"] = NOT_APPLICABLE;    

        XML.BeginNode("eScene.19");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("IncidentZip", NOT_APPLICABLE);
    };
        
    //////////////////////eScene.20
    _scene = getValue(businessObject.elements, "eScene.20");
    if(eDisposition["eDisposition.12"] !="4212007")  //if Cancelled prior to arrival on Scene, no data
    {   
        if (_scene.IsNull == true) {
            if (isRequiredStateElement("eScene.20") == true)
            {
                eScene["eScene.20"] = v3NOT_RECORDED;
                eScene["SceneCrossStreetorDirections"] = NOT_RECORDED;

                XML.BeginNode("eScene.20");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("SceneCrossStreetorDirections", NOT_RECORDED);
            }
            else
            {
                eScene["eScene.20"] = v3NOT_REPORTING;
                eScene["SceneCrossStreetorDirections"] = NOT_REPORTING;

                XML.BeginNode("eScene.20");
                XML.Attrib("NV", NIL_V3NOT_REPORTING);
                XML.EndNode();

                OXML.Node("SceneCrossStreetorDirections", NOT_REPORTING);
            }
        }
        else
        {
            _val = _scene.ValueArray[0].val;

            eScene["eScene.20"] = _val;
            eScene["SceneCrossStreetorDirections"] = _val;

            OXML.Node("SceneCrossStreetorDirections", _val);
            OXML.Node("eScene.20", _val);
        }
    }
    else
    {
        eScene["eScene.20"] = v3NOT_APPLICABLE;
        eScene["SceneCrossStreetorDirections"] = NOT_APPLICABLE;

        XML.BeginNode("eScene.20");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("SceneCrossStreetorDirections", NOT_APPLICABLE);
    };
        
       
    //////////////////////eScene.21
    _scene = getValue(businessObject.elements, "eScene.21");
    if(eDisposition["eDisposition.12"] !="4212007")  //if Cancelled prior to arrival on Scene, no data
    {   
        if (_scene.IsNull == true) {
            if (isRequiredStateElement("eScene.21") == true)
            {
                v2Array.push({ section: "E08", element: "E08_13", val: v2NOT_RECORDED });
                eScene["eScene.21"] = v3NOT_RECORDED;
                eScene["IncidentCounty"] = NOT_RECORDED;

                XML.BeginNode("eScene.21");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("IncidentCounty", NOT_RECORDED);
            }
            else
            {
                v2Array.push({ section: "E08", element: "E08_13", val: v2NOT_KNOWN });
                eScene["eScene.21"] = null;
                eScene["IncidentCounty"] = null;
                XML.Node("eScene.21", "");
                OXML.Node("IncidentCounty", "");
            }
        }
        else
        {
            _val = _scene.ValueArray[0].val;

            v2Array.push({ section: "E08", element: "E08_13", val: _val });
            eScene["eScene.21"] = _val;
            eScene["IncidentCounty"] = _val;

            XML.Node("eScene.21", _val);
            OXML.Node("IncidentCounty", _val);
        }
    }
    else
    {        
        v2Array.push({ section: "E08", element: "E08_13", val: v2NOT_APPLICABLE });
        eScene["eScene.21"] = v3NOT_APPLICABLE;
        eScene["IncidentCounty"] = NOT_APPLICABLE;

        XML.BeginNode("eScene.21");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("IncidentCounty", NOT_APPLICABLE);
    };
        
    //////////////////////eScene.22
    _scene = getValue(businessObject.elements, "eScene.22");
    if(eDisposition["eDisposition.12"] !="4212007")  //if Cancelled prior to arrival on Scene, no data
    {   
        if (_scene.IsNull == true) {
            eScene["eScene.22"] = null;
            eScene["IncidentCountry"] = null;

            XML.Node("eScene.22", "");
            OXML.Node("IncidentCountry", "");

        }
        else
        {
            _val = _scene.ValueArray[0].val;

            eScene["IncidentCountry"] = _val;
            eScene["eScene.22"] = _val;

            XML.Node("eScene.22", _val);
            OXML.Node("IncidentCountry", _val);
        }
    };
        
    //////////////////////eScene.22
    _scene = getValue(businessObject.elements, "eScene.23");
    if(eDisposition["eDisposition.12"] !="4212007")  //if Cancelled prior to arrival on Scene, no data
    {   
        if (_scene.IsNull == true) {
            eScene["eScene.23"] = null;
            eScene["IncidentCensusTract"] = null;

            XML.Node("eScene.23", "");
            OXML.Node("IncidentCensusTract", "");
        }
        else
        {
            _val = _scene.ValueArray[0].val;

            XML.Node("eScene.23", _val);
            OXML.Node("IncidentCensusTract", _val);
            eScene["eScene.23"] = _val;
            eScene["IncidentCensusTract"] = _val;        
        }
    };
    */
    return eScene;
};
var seteSituation = function (businessObject) {
    var eSituation = new Object();
      /*          
    ////////Check for cancelled calls, Standby, non-patient
    var group = ["4212007","4212009","4212011","4212039","4212041","4212043"]; //Calls without patient interaction
    if ((eResponse.StandBy == false) && (group.indexOf(eDisposition["eDisposition.12"]) >-1 )){
        eSituation.IsValid = false;
    }
    else{
        eSituation.IsValid = true;
    };
    //////////////////////////////
        
    //////////////////////eSituation.01
    _val = getValue(businessObject.elements, "eSituation.01");
    if (eSituation.IsValid ==false)
    {
        if (_situation.IsNull == true) 
        {
            if (isRequiredStateElement("eSituation.01"))
            {
                eSituation["eSituation.01"] = v3NOT_RECORDED;
                eSituation["DateTimeofSymptomOnsetLastNormal"] = NOT_RECORDED;
                v2Array.push({ section: "E05", element: "E05_01", val: v2NOT_RECORDED });

                XML.BeginNode("eSituation.01");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("DateTimeofSymptomOnsetLastNormal", NOT_RECORDED);
            }
            else
            {
                eSituation["eSituation.01"] = v3NOT_REPORTING;
                eSituation["DateTimeofSymptomOnsetLastNormal"] = NOT_REPORTING;
                v2Array.push({ section: "E05", element: "E05_01", val: v2NOT_REPORTING });

                XML.BeginNode("eSituation.01");
                XML.Attrib("NV", NIL_V3NOT_REPORTING);
                XML.EndNode();

                OXML.Node("DateTimeofSymptomOnsetLastNormal", NOT_REPORTING);
            }
        }
        else 
        {
            _val = _situation.ValueArray[0].val;

            eSituation["eSituation.01"] = _val;
            eSituation["DateTimeofSymptomOnsetLastNormal"] = _val;
            v2Array.push({ section: "E05", element: "E05_01", val: _val });
            XML.Node("eSituation.01", _val);
            OXML.Node("DateTimeofSymptomOnsetLastNormal", _val);
        }
    }
    else
    {
        eSituation["eSituation.01"] = v3NOT_APPLICABLE;
        eSituation["DateTimeofSymptomOnsetLastNormal"] = NOT_APPLICABLE;
        v2Array.push({ section: "E05", element: "E05_01", val: v2NOT_APPLICABLE });

        XML.BeginNode("eSituation.01");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("DateTimeofSymptomOnsetLastNormal", NOT_APPLICABLE);
    }; 
        
    //////////////////////eSituation.02
    _val = getValue(businessObject.elements, "eSituation.02");
    if (eSituation.IsValid ==false)
    {
        if (_situation.IsNull == true) 
        {
            if(isRequiredStateElement("eSituation.02"))
            {
                eSituation["eSituation.02"] = v3NOT_RECORDED;
                eSituation["PossibleInjury"] = NOT_RECORDED;
                v2Array.push({ section: "E09", element: "E09_04", val: v2NOT_RECORDED });

                XML.BeginNode("eSituation.02");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("PossibleInjury", NOT_RECORDED);
            }            
        }
        else 
        {
            _val = _situation.ValueArray[0].val;

            eSituation["eSituation.02"] = _val;
            eSituation["PossibleInjury"] = setCodeText("eSituation.02", _val);
            v2Array.push({ section: "E09", element: "E09_04", val: setV2("eSituation.02", _val) });

            XML.Node("eSituation.02", _val);
            OXML.Node("PossibleInjury", setCodeText("eSituation.02", _val));
        }
    }
    else
    {
        eSituation["eSituation.02"] = v3NOT_APPLICABLE;
        eSituation["PossibleInjury"] = NOT_APPLICABLE;
        v2Array.push({ section: "E09", element: "E09_04", val: v2NOT_APPLICABLE });

        XML.BeginNode("eSituation.02");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("PossibleInjury", NOT_APPLICABLE);
    };
        
        
    //////////////////////////////////////
            
    _sectionIndex = getSectionIndex(businessObject.sections[xx].attributes, "eSituation.PatientComplaintGroup");      
    if (eSituation.IsValid ==false)  //Set Not Applicables
    {
        PatientComplaintGroup["eSituation.03"] = v3NOT_APPLICABLE;
        PatientComplaintGroup["ComplaintType"] = NOT_APPLICABLE;
        
        PatientComplaintGroup["eSituation.04"] = v3NOT_APPLICABLE;
        PatientComplaintGroup["Complaint"] = NOT_APPLICABLE;
        v2Array.push({ section: "E09", element: "E09_05", val: V2NOT_APPLICABLE });
        
        PatientComplaintGroup["eSituation.05"] = v3NOT_APPLICABLE;
        PatientComplaintGroup["DurationofComplaint"] = NOT_APPLICABLE;
        v2Array.push({ section: "E09", element: "E09_06", val: v2NOT_APPLICABLE });
        
    }
    else
    {
        for (var x = 0; x <_sectionIndex.length; x++)
        {     	
            var _listElements = businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements;
        
            /////////eSituation.03            
            _val = getValue(_listElements, "eSituation.03");
            if (_situation.IsNull == true) 
            {
                if(isRequiredStateElement("eSituation.03"))
                {
                    PatientComplaintGroup["eSituation.03"] = v3NOT_RECORDED;
                    PatientComplaintGroup["ComplaintType"] = NOT_RECORDED;

                    XML.BeginNode("eSituation.03");
                    XML.Attrib("NV", NIL_V3NOT_RECORDED);
                    XML.EndNode();

                    OXML.Node("ComplaintType", NOT_RECORDED);
                }            
                else
                {
                    PatientComplaintGroup["eSituation.03"] = v3NOT_REPORTING;
                    PatientComplaintGroup["ComplaintType"] = NOT_REPORTING;

                    XML.BeginNode("eSituation.03");
                    XML.Attrib("NV", NIL_V3NOT_REPORTING);
                    XML.EndNode();

                    OXML.Node("ComplaintType", NOT_REPORTING);
                }
            }
            else 
            {
                _val = _situation.ValueArray[0].val;

                PatientComplaintGroup["eSituation.03"] = _val;
                PatientComplaintGroup["ComplaintType"] = setCodeText("eSituation.03", __val);

                OXML.Node("ComplaintType", setCodeText("eSituation.03", __val));
                XML.Node("eSituation.03", _val);
            }; 
                
            /////////eSituation.04
            _val = getValue(_listElements, "eSituation.04");
            if (_situation.IsNull == true) 
            {
                if (isRequiredStateElement("eSituation.04"))
                {
                    PatientComplaintGroup["eSituation.04"] = V3NOT_RECORDED;
                    PatientComplaintGroup["Complaint"] = NOT_RECORDED;
                    v2Array.push({ section: "E09", element: "E09_05", val: V2NOT_RECORDED });

                    XML.BeginNode("eSituation.04");
                    XML.Attrib("NV", NIL_V3NOT_RECORDED);
                    XML.EndNode();

                    OXML.Node("Complaint", NOT_RECORDED);
                }
                else
                {
        
                    PatientComplaintGroup["eSituation.04"] = v3NOT_REPORTING;
                    PatientComplaintGroup["Complaint"] = NOT_REPORTING;
                    v2Array.push({ section: "E09", element: "E09_05", val: v2NOT_REPORTING });

                    XML.BeginNode("eSituation.04");
                    XML.Attrib("NV", NIL_V3NOT_REPORTING);
                    XML.EndNode();

                    OXML.Node("Complaint", NOT_REPORTING);
                }
            }
            else 
            {
                _val = _situation.ValueArray[0].val;

                v2Array.push({ section: "E09", element: "E09_05", val: _val });
                PatientComplaintGroup["eSituation.04"] = _val;
                PatientComplaintGroup["Complaint"] = _val;

                OXML.Node("eSituation.04", _val);
                XML.Node("Complaint", _val);
            }; 
        
            /////////eSituation.05
            _val = getValue(_listElements, "eSituation.05");
            if (eSituation.IsValid ==false)
            {
                if (_situation.IsNull == true) 
                {
                    if(isRequiredStateElement("eSituation.05"))
                    {
                        PatientComplaintGroup["eSituation.05"] = V3NOT_RECORDED;
                        PatientComplaintGroup["DurationofComplaint"] = NOT_RECORDED;
                        v2Array.push({ section: "E09", element: "E09_06", val: null });

                        XML.BeginNode("eSituation.05");
                        XML.Attrib("NV", NIL_V3NOT_RECORDED);
                        XML.EndNode();

                        OXML.Node("DurationofComplaint", NOT_RECORDED);
                    }            
                    else
                    {
                        PatientComplaintGroup["DurationofComplaint"] = NOT_REPORTING;
                        PatientComplaintGroup["eSituation.05"] = v3NOT_REPORTING;
                        v2Array.push({ section: "E09", element: "E09_06", val: null });

                        XML.BeginNode("eSituation.05");
                        XML.Attrib("NV", NIL_V3NOT_REPORTING);
                        XML.EndNode();

                        OXML.Node("DurationofComplaint", NOT_REPORTING);                        
                    }
                }
                else 
                {
                    _val = _situation.ValueArray[0].val;

                    PatientComplaintGroup["DurationofComplaint"] = _val;
                    PatientComplaintGroup["eSituation.05"] = _val
                    v2Array.push({ section: "E09", element: "E09_06", val: _val });

                    OXML.Node("DurationofComplaint", _val);
                    XML.Node("eSituation.05", _val);                        
                }
            }
            else
            {
                PatientComplaintGroup["DurationofComplaint"] = NOT_APPLICABLE;
                PatientComplaintGroup["eSituation.05"] = v3NOT_APPLICABLE;
                v2Array.push({ section: "E09", element: "E09_06", val: null });

                XML.BeginNode("eSituation.05");
                XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
                XML.EndNode();

                OXML.Node("DurationofComplaint", NOT_APPLICABLE);
            };                                
        
            /////////eSituation.06
            _val = getValue(_listElements, "eSituation.06");
            if (eSituation.IsValid ==false)
            {
                if (_situation.IsNull == true) 
                {
                    if(isRequiredStateElement("eSituation.06"))
                    {
                        PatientComplaintGroup["eSituation.06"] = V3NOT_RECORDED;
                        PatientComplaintGroup["TimeUnitsofDurationofComplaint"] = NOT_RECORDED;
                        v2Array.push({ section: "E09", element: "E09_07", val: null });

                        XML.BeginNode("eSituation.06");
                        XML.Attrib("NV", NIL_V3NOT_RECORDED);
                        XML.EndNode();

                        OXML.Node("TimeUnitsofDurationofComplaint", NOT_RECORDED);
                    }            
                    else
                    {
                        PatientComplaintGroup["TimeUnitsofDurationofComplaint"] = NOT_REPORTING;
                        PatientComplaintGroup["eSituation.06"] = v3NOT_REPORTING;
                        v2Array.push({ section: "E09", element: "E09_07", val: V2NOT_RECORDED });

                        XML.BeginNode("eSituation.06");
                        XML.Attrib("NV", NIL_V3NOT_REPORTING);
                        XML.EndNode();

                        OXML.Node("TimeUnitsofDurationofComplaint", NOT_REPORTING);
                    }
                }
                else 
                {
                    _val = _situation.ValueArray[0].val;

                    PatientComplaintGroup["eSituation.06"] = _val;
                    PatientComplaintGroup["TimeUnitsofDurationofComplaint"] = setCodeText("eSituation.06",_val);
                    v2Array.push({ section: "E09", element: "E09_07", val: _val });

                    XML.Node("eSituation.06", _val);
                    OXML.Node("TimeUnitsofDurationofComplaint", setCodeText("eSituation.06",_val));
                }
            }
            else
            {
                PatientComplaintGroup["TimeUnitsofDurationofComplaint"] = NOT_APPLICABLE;
                PatientComplaintGroup["eSituation.06"] = v3NOT_APPLICABLE;
                v2Array.push({ section: "E09", element: "E09_07", val: v2NOT_APPLICABLE });

                XML.BeginNode("eSituation.06");
                XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
                XML.EndNode();

                OXML.Node("TimeUnitsofDurationofComplaint", NOT_APPLICABLE);
            }; 
        }//END LOOP
    }; //end If
        
                    
    /////////eSituation.07
    _val = getValue(businessObject.elements, "eSituation.07");
    if (eSituation.IsValid ==false)
    {
        if (_situation.IsNull == true) 
        {
            eSituation["eSituation.07"] = v3NOT_RECORDED;
            eSituation["ChiefComplaintAnatomicLocation"] = NOT_RECORDED;
            v2Array.push({ section: "E09", element: "E09_11", val: V2NOT_RECORDED });

            XML.BeginNode("eSituation.07");
            XML.Attrib("NV", NIL_V3NOT_RECORDED);
            XML.EndNode();

            OXML.Node("ChiefComplaintAnatomicLocation", NOT_RECORDED);
        }
        else 
        {
            _val = _situation.ValueArray[0].val;

            eSituation["eSituation.07"] = _val;
            eSituation["ChiefComplaintAnatomicLocation"] = setCodeText("eSituation.07",_val);
            v2Array.push({ section: "E09", element: "E09_11", val: setV2("eSituation.07", _val) });
            OXML.Node("ChiefComplaintAnatomicLocation", setCodeText("eSituation.07",_val));
            XML.Node("eSituation.07", NOT_RECORDED);
        }
    }
    else
    {
        eSituation["eSituation.07"] = v3NOT_APPLICABLE;
        eSituation["ChiefComplaintAnatomicLocation"] = NOT_APPLICABLE;
        v2Array.push({ section: "E09", element: "E09_11", val: v2NOT_APPLICABLE });

        XML.BeginNode("eSituation.07");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("ChiefComplaintAnatomicLocation", NOT_APPLICABLE);
    }; 
                                
    /////////eSituation.08
    _val = getValue(businessObject.elements, "eSituation.08");
    if (eSituation.IsValid ==false)
    {
        if (_situation.IsNull == true) 
        {
            eSituation["eSituation.08"] = v3NOT_RECORDED;
            eSituation["ChiefComplaintOrganSystem"] = NOT_RECORDED;
            v2Array.push({ section: "E09", element: "E09_11", val: v2NOT_RECORDED });

            XML.BeginNode("eSituation.08");
            XML.Attrib("NV", NIL_V3NOT_RECORDED);
            XML.EndNode();

            OXML.Node("ChiefComplaintOrganSystem", NOT_RECORDED);
        }
        else 
        {
            _val = _situation.ValueArray[0].val;

            eSituation["eSituation.08"] = _val;
            eSituation["ChiefComplaintOrganSystem"] = setCodeText("eSituation.08", _val);
            v2Array.push({ section: "E09", element: "E09_12", val: setV2("eSituation.08", _val) });

            OXML.Node("ChiefComplaintOrganSystem", setCodeText("eSituation.08", _val));
            XML.Node("eSituation.08",  _val);
        }
    }
    else
    {
        eSituation["eSituation.08"] = v3NOT_APPLICABLE;
        eSituation["ChiefComplaintOrganSystem"] = NOT_APPLICABLE;
        v2Array.push({ section: "E09", element: "E09_11", val: v2NOT_APPLICABLE});

        XML.BeginNode("eSituation.08");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("ChiefComplaintOrganSystem", NOT_APPLICABLE);
    }; 
        
    /////////eSituation.09
    _val = getValue(businessObject.elements, "eSituation.09");
    if (eSituation.IsValid ==false)
    {
        if (_situation.IsNull == true) 
        {
            eSituation["eSituation.09"] = v3NOT_RECORDED;
            eSituation["PrimarySymptom"] = NOT_RECORDED;
            v2Array.push({ section: "E09", element: "E09_13", val: v2NOT_RECORDED });            

            XML.BeginNode("eSituation.09");
            XML.Attrib("NV", NIL_V3NOT_RECORDED);
            XML.EndNode();

            OXML.Node("PrimarySymptom", NOT_RECORDED);
        }
        else 
        {
            _val = _situation.ValueArray[0].val;

            eSituation["eSituation.09"] = _val;
            eSituation["PrimarySymptom"] = setCodeText("eSituation.09", _val);
            v2Array.push({ section: "E09", element: "E09_13", val: setV2("eSituation.09", _val) });            

            OXML.Node("eSituation.09", _val);
            OXML.Node("ChiefComplaintOrganSystem", setCodeText("eSituation.09", _val));
        }
    }
    else
    {
        eSituation["eSituation.09"] = v3NOT_APPLICABLE;
        eSituation["PrimarySymptom"] = NOT_APPLICABLE;
        v2Array.push({ section: "E09", element: "E09_13", val: v2NOT_RECORDED});            

        XML.BeginNode("eSituation.09");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("PrimarySymptom", NOT_APPLICABLE);
    }; 
        
        
    /////////eSituation.10
    _val = getValue(businessObject.elements, "eSituation.10");
    if (eSituation.IsValid ==false)
    {
        if (_situation.IsNull == true) 
        {
            eSituation["eSituation.10"] = v3NOT_RECORDED;
            eSituation["OtherAssociatedSymptoms"] = NOT_RECORDED;
            v2Array.push({ section: "E09", element: "E09_14", val: setV2("eSituation.09", v2NOT_RECORDED) });

            XML.BeginNode("eSituation.10");
            XML.Attrib("NV", NIL_V3NOT_RECORDED);
            XML.EndNode();

            OXML.Node("OtherAssociatedSymptoms", NOT_RECORDED);
        }
        else 
        {
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _situation.ValueArray.length; i++)
            {
                if ((_situation.ValueArray[i].HasValue == true) && (arr1.indexOf(_situation.ValueArray[i].val) > -1))
                {
                    _val = _situation.ValueArray[i].val
                    arr1.push(_val);
                    arr2.push(setD2("eSituation.10", _val));
                    arr3.push(setCodeText("eSituation.10", _val));               
                    OXML.Node("OtherAssociatedSymptoms", setCodeText("eSituation.10", _val));
                    XML.Node("eSituation.10", _val);
                }        
            };
            eSituation["OtherAssociatedSymptoms"] = arr3.slice(0);;
            eSituation["eSituation.10"] = arr1.slice(0);
            v2Array.push({ section: "E09", element: "E09_14", val: arr2.slice(0)});
        }   
    }
    else
    {
        eSituation["eSituation.10"] = v3NOT_APPLICABLE;
        eSituation["OtherAssociatedSymptoms"] = NOT_APPLICABLE;
        v2Array.push({ section: "E09", element: "E09_14", val: setV2("eSituation.09", v2NOT_APPLICABLE) });    

        XML.BeginNode("eSituation.10");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("OtherAssociatedSymptoms", NOT_APPLICABLE);
    }; 
        
    /////////eSituation.11
    _val = getValue(businessObject.elements, "eSituation.11");
    if (eSituation.IsValid ==false)
    {        
        if (_situation.IsNull == true) 
        {         
            eSituation["eSituation.11"] = v3NOT_RECORDED;
            eSituation["ProviderPrimaryImpression"] = NOT_RECORDED;
            v2Array.push({ section: "E09", element: "E09_15", val: v2NOT_RECORDED });

            XML.BeginNode("eSituation.11");
            XML.Attrib("NV", NIL_V3NOT_RECORDED);
            XML.EndNode();

            OXML.Node("ProviderPrimaryImpression", NOT_RECORDED);        
        }
        else 
        {
            _val = _situation.ValueArray[0].val;

            eSituation["eSituation.11"] = _val;
            eSituation["ProviderPrimaryImpression"] = _val;
            v2Array.push({ section: "E09", element: "E09_15", val: _val });
            XML.Node("eSituation.11", _val);
            OXML.Node("ProviderPrimaryImpression", _val);
        }
    }
    else
    {      
        eSituation["eSituation.11"] = v3NOT_APPLICABLE;
        eSituation["ProviderPrimaryImpression"] = NOT_APPLICABLE;
        v2Array.push({ section: "E09", element: "E09_15", val: v2NOT_APPLICABLE});

        XML.BeginNode("eSituation.11");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("ProviderPrimaryImpression", NOT_APPLICABLE);
    }; 
        
    /////////eSituation.12
    _val = getValue(businessObject.elements, "eSituation.12");
    if (eSituation.IsValid ==false)
    {
        if (_situation.IsNull == true) 
        {
            eSituation["eSituation.12"] = v3NOT_RECORDED;
            eSituation["ProviderSecondaryImpressions"] = NOT_RECORDED;
            v2Array.push({ section: "E09", element: "E09_16", val: v2NOT_RECORDED });

            XML.BeginNode("eSituation.12");
            XML.Attrib("NV", NIL_V3NOT_RECORDED);
            XML.EndNode();

            OXML.Node("ProviderSecondaryImpressions", NOT_RECORDED);
        }
        else 
        {
            _val = _situation.ValueArray[0].val;

            eSituation["ProviderSecondaryImpressions"] = _val;
            eSituation["eSituation.12"] = _val;
            v2Array.push({ section: "E09", element: "E09_16", val: _val });

            OXML.Node("ProviderSecondaryImpressions", _val);
            XML.Node("eSituation.12", _val);
        }
    }
    else
    {
        eSituation["eSituation.12"] = v3NOT_APPLICABLE;
        eSituation["ProviderSecondaryImpressions"] = NOT_APPLICABLE;
        v2Array.push({ section: "E09", element: "E09_16", val: v2NOT_APPLICABLE});

        XML.BeginNode("eSituation.12");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("ProviderSecondaryImpressions", NOT_APPLICABLE);
    }; 
        
    /////////eSituation.13
    _val = getValue(businessObject.elements, "eSituation.13");
    if (eSituation.IsValid ==false)
    {
        if (_situation.IsNull == true) 
        {
            eSituation["eSituation.13"] = v3NOT_RECORDED;                 
            eSituation["InitialPatientAcuity"] = NOT_RECORDED;

            XML.BeginNode("eSituation.13");
            XML.Attrib("NV", NIL_V3NOT_RECORDED);
            XML.EndNode();

            OXML.Node("InitialPatientAcuity", NOT_RECORDED);
        }
        else 
        {
            _val = _situation.ValueArray[0].val;

            eSituation["eSituation.13"] = _val;
            eSituation["InitialPatientAcuity"] = setCodeText("eSituation.13", _val);                 

            OXML.Node("InitialPatientAcuity", setCodeText("eSituation.13", _val));
            OXML.Node("eSituation.13", _val);
        }
    }
    else
    {
        eSituation["eSituation.13"] = v3NOT_APPLICABLE;
        eSituation["InitialPatientAcuity"] = NOT_APPLICABLE;                 

        XML.BeginNode("eSituation.13");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("InitialPatientAcuity", NOT_APPLICABLE);
    }; 
        
    /////////eSituation.14
    _val = getValue(businessObject.elements, "eSituation.14");
    if (eSituation.IsValid ==false)
    {
        if (_situation.IsNull == true) 
        {
            if (isRequiredStateElement("eSituation.14"))
            {
                eSituation["eSituation.14"] = v3NOT_RECORDED;
                eSituation["WorkRelatedIllnessInjury"] = NOT_RECORDED;
                v2Array.push({ section: "E07", element: "E07_15", val: v2NOT_RECORDED });

                XML.BeginNode("eSituation.14");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("WorkRelatedIllnessInjury", NOT_RECORDED);
            }
            else
            {
                eSituation["eSituation.14"] = v3NOT_REPORTING;
                eSituation["WorkRelatedIllnessInjury"] = NOT_REPORTING;
                v2Array.push({ section: "E07", element: "E07_15", val: v2NOT_REPORTING });

                XML.BeginNode("eSituation.14");
                XML.Attrib("NV", NIL_V3NOT_REPORTING);
                XML.EndNode();

                OXML.Node("WorkRelatedIllnessInjury", NOT_REPORTING);
            }
        }
        else
        {
            _val = _situation.ValueArray[0].val;

            eSituation["eSituation.14"] = _val;
            eSituation["WorkRelatedIllnessInjury"] = setCodeText("eSituation.14", _val);
            v2Array.push({ section: "E07", element: "E07_15", val: setV2("eSituation.14", _val) });

            OXML.Node("WorkRelatedIllnessInjury", setCodeText("eSituation.14", _val));
            XML.Node("eSituation.14", _val);
        }
    }
    else
    {
        eSituation["eSituation.14"] = v3NOT_APPLICABLE;
        eSituation["WorkRelatedIllnessInjury"] = NOT_APPLICABLE;
        v2Array.push({ section: "E07", element: "E07_15", val: v2NOT_APPLICABLE });


        XML.BeginNode("eSituation.14");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("WorkRelatedIllnessInjury", NOT_APPLICABLE);
    };
              
    /////////eSituation.15
    _val = getValue(businessObject.elements, "eSituation.15");
    if (eSituation.IsValid ==false)
    {
        if (_situation.IsNull == true) 
        {
            v2Array.push({ section: "E07", element: "E07_16", val: null });
            eSituation["eSituation.15"] = null;
            eSituation["PatientOccupationalIndustry"] = null;

            OXML.Node("PatientOccupationalIndustry", "");
            XML.Node("eSituation.15", "");
        }
        else 
        {
            _val = _situation.ValueArray[0].val;

            eSituation["PatientOccupationalIndustry"] = setCodeText("eSituation.15", _val);
            eSituation["eSituation.15"] = _val;
            v2Array.push({ section: "E07", element: "E07_16", val: setV2("eSituation.15", _val) });
                   
            OXML.Node("PatientOccupationalIndustry", setCodeText("eSituation.15", _val));
            XML.Node("eSituation.15", _val);
        }
    }
    else
    {
        v2Array.push({ section: "E07", element: "E07_16", val: null });
        eSituation["eSituation.15"] = null;
        eSituation["PatientOccupationalIndustry"] = null;

        OXML.Node("PatientOccupationalIndustry", "");
        XML.Node("eSituation.15", "");
    }; 
        
        
    /////////eSituation.16
    _val = getValue(businessObject.elements, "eSituation.16");
    if (eSituation.IsValid ==false)
    {
        if (_situation.IsNull == true) 
        {
            v2Array.push({ section: "E07", element: "E07_17", val: null });
            eSituation["eSituation.16"] = null;
            eSituation["PatientOccupation"] = null;

            OXML.Node("PatientOccupation", "");
            XML.Node("eSituation.16", "");
        }
        else 
        {
            _val = _situation.ValueArray[0].val;

            eSituation["PatientOccupation"] =setCodeText("eSituation.16", _val);
            v2Array.push({ section: "E07", element: "E07_17", val: setV2("eSituation.16", _val) });
            eSituation["eSituation.16"] = _val;

            OXML.Node("PatientOccupation", setCodeText("eSituation.16", _val));
            XML.Node("eSituation.16", _val);
        }
    }
    else
    {
        v2Array.push({ section: "E07", element: "E07_17", val: null });
        eSituation["eSituation.16"] = null;

        OXML.Node("PatientOccupation", "");
        XML.Node("eSituation.16", "");
    }; 
        
        
    /////////eSituation.17
    _val = getValue(businessObject.elements, "eSituation.17");
    if (eSituation.IsValid == false) {
        if (_situation.IsNull == true) 
            {
            if (isRequiredStateElement("eSituation.17")) {
                eSituation["eSituation.17"] = v3NOT_RECORDED;
                eSituation["PatientActivity"] = NOT_RECORDED;

                XML.BeginNode("eSituation.17");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("PatientActivity", NOT_RECORDED);
            }
            else {
                eSituation["eSituation.17"] = v3NOT_REPORTING;
                eSituation["PatientActivity"] = NOT_REPORTING;

                XML.BeginNode("eSituation.17");
                XML.Attrib("NV", NIL_V3NOT_REPORTING);
                XML.EndNode();

                OXML.Node("PatientActivity", NOT_REPORTING);
            }
        }
        else {
            var arr1 = [];
            for (var i = 0; i < _situation.ValueArray.length; i++)
            {
                if ((_situation.ValueArray[i].HasValue == true) && (arr1.indexOf(_situation.ValueArray[i].val) > -1))
                {
                    _val = _situation.ValueArray[i].val
                    arr1.push(_val);
                    OXML.Node("PatientActivity", _val);
                    OXML.Node("eSituation.17", _val);
                }
            }
            eSituation["PatientActivity"] = arr1.slice(0);
            eSituation["eSituation.17"] = arr1.slice(0);
        }
    }
    else {
        eSituation["eSituation.17"] = v3NOT_APPLICABLE;
        eSituation["PatientActivity"] = NOT_APPLICABLE;


        XML.BeginNode("eSituation.17");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("PatientActivity", NOT_APPLICABLE);
    };
    */
    return eSituation;
};
var seteCrew = function (businessObject) {
    var eCrew = new Object();
    /*
    var v2Array = [];
    var eCrewGroupArray = new Array();
    var eCrew = new Object();
    var eCrewGroup = new Object();
    var CrewGroup = new Object();
    
    var eCrewObject = new Object()
    eCrewObject = getNEMSISSection(businessObject, "eCrew")
        
    ////////Check for cancelled calls, Standby, non-patient
        
    var group = ["4212007","4212009","4212011","4212039","4212041","4212043"]; //Calls without patient interaction
    if ((eResponse.StandBy == false) && (group.indexOf(eDisposition["eDisposition.12"]) >-1 )){
        eCrew.IsValid = false;
    }
    else{
        eCrew.IsValid = true;
    };
    if((eCrewObject.length==0) && (eCrew.IsValid==false))
    {
            
        eCrewGroup["eCrew.01"] = v3NOT_APPLICABLE;
        eCrewGroup["CrewMemberID"] = NOT_APPLICABLE;
        v2Array.push({ section: "E04", element: "E04_01", val: v2NOT_APPLICABLE });

        XML.BeginNode("eCrew.01");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();
        OXML.Node("CrewMemberID", NOT_APPLICABLE);

        eCrewGroup["eCrew.02"] = v3NOT_APPLICABLE;
        eCrewGroup["CrewMemberLevel"] = NOT_APPLICABLE;
        v2Array.push({ section: "E04", element: "E04_03", val: v2NOT_APPLICABLE });

        XML.BeginNode("eCrew.02");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();
        OXML.Node("CrewMemberLevel", NOT_APPLICABLE);

        eCrewGroup["eCrew.03"] = v3NOT_APPLICABLE;
        eCrewGroup["CrewMemberResponseRole"] = NOT_APPLICABLE;
        v2Array.push({ section: "E04", element: "E04_02", val: v2NOT_APPLICABLE });

        XML.BeginNode("eCrew.03");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();
        OXML.Node("CrewMemberResponseRole", NOT_APPLICABLE);
    }
    else
    {
        var _crew = new Object;

        for (var i = 0; i < _sectionIndex.length; i++) 
        {
            //eCrew.01/////////////
            var _elementList = [];
                
            _elementList = eCrewObject.attributes.sections[_sectionIndex[i]].attributes.elements;
        
            _crew = getValue(_elementList, "eCrew.01");
            if (_crew.IsNull == true) {
                if (isRequiredStateElement("eCrew.01") == true) 
                {
                    eCrewGroup["eCrew.01"] = v3NOT_RECORDED;
                    eCrewGroup["CrewMemberID"] = v3NOT_RECORDED;
                    v2Array.push({ section: "E04", element: "E04_01", val: v2NOT_RECORDED });

                    XML.BeginNode("eCrew.01");
                    XML.Attrib("NV", NIL_V3NOT_RECORDED);
                    XML.EndNode();

                    OXML.Node("CrewMemberID", NOT_RECORDED);
                }
                else 
                {
                    eCrewGroup["eCrew.01"] = v3NOT_REPORTING;
                    eCrewGroup["CrewMemberID"] = NOT_REPORTING;
                    v2Array.push({ section: "E04", element: "E04_01", val: v2NOT_REPORTING });

                    XML.BeginNode("eCrew.01");
                    XML.Attrib("NV", NIL_V3NOT_REPORTING);
                    XML.EndNode();

                    OXML.Node("CrewMemberID", NOT_REPORTING);
                }
            }
            else
            {
                _val = _crew.ValueArray[0].val;

                v2Array.push({ section: "E04", element: "E04_01", val: _val });
                eCrewGroup["eCrew.01"] = _val;
                eCrewGroup["CrewMemberID"] = _val;       
                
                XML.Node("eCrew.01", _val);
                OXML.Node("CrewMemberID", _val);
            };
        
            //eCrew.02/////////////
            _crew = getValue(_elementList, "eCrew.02");
            if (_crew.IsNull == true)

            {
                if (isRequiredStateElement("eCrew.02") == true)
                {
                    eCrewGroup["eCrew.02"] = v3NOT_RECORDED;
                    eCrewGroup["CrewMemberLevel"] = v3NOT_RECORDED;
                    v2Array.push({ section: "E04", element: "E04_03", val: v2NOT_RECORDED });

                    XML.BeginNode("eCrew.02");
                    XML.Attrib("NV", NIL_V3NOT_RECORDED);
                    XML.EndNode();

                    OXML.Node("CrewMemberLevel", NOT_RECORDED);
                }
                else
                {
                    eCrewGroup["eCrew.02"] = v3NOT_REPORTING;
                    eCrewGroup["CrewMemberLevel"] = v3NOT_REPORTING;
                    v2Array.push({ section: "E04", element: "E04_03", val: v2NOT_REPORTING });

                    XML.BeginNode("eCrew.02");
                    XML.Attrib("NV", NIL_V3NOT_REPORTING);
                    XML.EndNode();

                    OXML.Node("CrewMemberLevel", NOT_REPORTING);
                }
            }
            else
            {
                _val = _crew.ValueArray[0].val;

                XML.Node("eCrew.02", _val);
                OXML.Node("CrewMemberLevel", setCodeText("eCrew.02", _val));

                v2Array.push({ section: "E04", element: "E04_03", val: setV2("eCrew.02", _val) });
                eCrewGroup["eCrew.02"] = _val;
                eCrewGroup["CrewMemberLevel"] = setCodeText("eCrew.02", _val);
            };
        
            //eCrew.03/////////////
            _val = getValue(_elementList, "eCrew.03");
            if (_crew.IsNull == true) {
                if (isRequiredStateElement("eCrew.03") == true)
                {
                    eCrewGroup["eCrew.03"] = v3NOT_RECORDED;
                    eCrewGroup["CrewMemberResponseRole"] = v3NOT_RECORDED;
                    v2Array.push({ section: "E04", element: "E04_02", val: v2NOT_RECORDED });

                    XML.BeginNode("eCrew.03");
                    XML.Attrib("NV", NIL_V3NOT_RECORDED);
                    XML.EndNode();

                    OXML.Node("CrewMemberResponseRole", NOT_RECORDED);
                }
                else
                {
                    v2Array.push({ section: "E04", element: "E04_02", val: v2NOT_REPORTING });
                    eCrewGroup["CrewMemberResponseRole"] = v3NOT_REPORTING;
                    eCrewGroup["eCrew.03"] = v3NOT_REPORTING;

                    XML.BeginNode("eCrew.03");
                    XML.Attrib("NV", NIL_V3NOT_REPORTING);
                    XML.EndNode();

                    OXML.Node("CrewMemberResponseRole", NOT_REPORTING);
                }
            }
            else
            {
        
                var arr1 = [];
                var arr2 = [];
                var arr3 = [];
                for (var i = 0; i < _crew.ValueArray.length; i++)
                {
                    if ((_crew.ValueArray[i].HasValue == true) && (arr1.indexOf(_crew.ValueArray[i].val) > -1))
                    {
                        _val = _crew.ValueArray[i].val
                        arr1.push(_val);
                        arr2.push(setV2("eCrew.03", _val));
                        arr3.push(setCodeText("eCrew.03", _val));
                        OXML.Node("CrewMemberResponseRole", setCodeText("eCrew.03", _val));
                        XML.Node("eCrew.03", _val);
                    }
                };
                eCrewGroup["eCrew.03"] = arr1.slice(0);
                v2Array.push({ section: "E04", element: "E04_02", val: arr1.slice(0) });
                eCrewGroup["CrewMemberResponseRole"] = arr3.slice(0);
            }
        };
        eCrewGroupArray.push(eCrewGroup)        
    };
    eCrew.V2Array = v2Array;
    eCrew.CrewGroup = eCrewGroupArray;
    console.log(eCrew);
    */
    return eCrew;
};
var seteDevice = function (businessObject) {
    var eDevice = new Object();
    /*
    var eDeviceObject = new Object();
    eDeviceObject = getNEMSISSection(businessObject, "eDevice")
            
    ////////Check for cancelled calls, Standby, non-patient
        
    var group = ["4212007","4212009","4212011","4212039","4212041","4212043"]; //Calls without patient interaction
    if ((Call.IsStandBy == false) && (group.indexOf(eDisposition["eDisposition.12"]) >-1 )){
        Call.IsValid = false;
    }
    else
    {
        Call.IsValid = true;
    };
        
    if((eDeviceObject.length==0) && (Call.IsValid==false))
    {
        eDevice.HasData = false;
        return eDevice;
    };
        
    for (var xx = 0; xx < eDeviceObject.length; xx++) 
    {
        var elementList = eDeviceObject[xx].attributes.elements;        
        
        //eDevice.01/////////////
        _device = getValue(businessObject.elements, "eDevice.01");
        if (_device.IsNull == true) {
            eDeviceGroup["eDevice.01"] = null;
            eDeviceGroup["MedicalDeviceSerialNumber"] = null;            

            OXML.Node("MedicalDeviceSerialNumber", "");
            XML.Node("eDevice.01", "");
        }
        else
        {
            _val = _device.ValueArray[0].val;

            OXML.Node("MedicalDeviceSerialNumber", setCodeText("eCrew.03", _val));
            XML.Node("eDevice.01", _val);

            eDeviceGroup["eDevice.01"] = _val;
            eDeviceGroup["MedicalDeviceSerialNumber"] = setCodeText("eDevice.01", _val)[0];
        };
        
        
        //eDevice.02////////////
        _device = getValue(businessObject.elements, "eDevice.02");
        if (_device.IsNull == true) {
            v2Array.push({ section: "E21", element: "E21_01", val:null });
            eDeviceGroup["eDevice.02"] = null;
            eDeviceGroup["DateTimeofEvent"] = null;

            OXML.Node("DateTimeofEvent", "");
            XML.Node("eDevice.02", "");
        }
        else
        {
            _val = _device.ValueArray[0].val;

            v2Array.push({ section: "E21", element: "E21_01", val: _val });
            eDeviceGroup["eDevice.02"] = _val;
            eDeviceGroup["DateTimeofEvent"] = _val;
          
            OXML.Node("DateTimeofEvent", _val);
            XML.Node("eDevice.02", _val);
        };
        
        //eDevice.03////////////
        _device = getValue(businessObject.elements, "eDevice.03");
        if (_device.IsNull == true) {
            eDeviceGroup["eDevice.03"] = null;
            eDeviceGroup["MedicalDeviceEventType"] = null;
            v2Array.push({ section: "E21", element: "E21_02", val: null });

            OXML.Node("MedicalDeviceEventType", "");
            XML.Node("eDevice.03", "");
        }
        else
        {
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _device.ValueArray.length; i++)
            {
                if ((_device.ValueArray[i].HasValue == true) && (arr1.indexOf(_device.ValueArray[i].val) > -1))
                {
                    _val = _device.ValueArray[i].val
                    arr1.push(_val);
                    arr2.push(SetV2("eDevice.03", _val));
                    arr3.push(setCodeText("eDevice.03", _val));
                
                    OXML.Node("MedicalDeviceEventType", setCodeText("eDevice.03", _val));
                    XML.Node("eDevice.03", _val);
                }
            };
            eDeviceGroup["eDevice.03"] = arr1.slice(0);
            eDeviceGroup["MedicalDeviceEventType"] = arr3.slice(0);
            v2Array.push({ section: "E21", element: "E21_02", val: arr2.slice(0) });
        };
        
        ////////////////////////////////////////////
        ////////////////////////////////////////////
        
        //eDevice.04///////////////
        _device = getValue(businessObject.elements, "eDevice.04");
        if (_device.IsNull == true) {
            eDeviceGroup["eDevice.04"] = null;
            eDeviceGroup["MedicalDeviceWaveformGraphicType"] = null;
            v2Array.push({ section: "E21", element: "E21_03", val: null });

            OXML.Node("MedicalDeviceWaveformGraphicType", "");
            XML.Node("eDevice.04", "");

        }
        else 
        {
            _val = _device.ValueArray[0].val;

            v2Array.push({ section: "E21", element: "E21_03", val: setV2("eDevice.04", _val) });
            eDeviceGroup["eDevice.04"] = _val;
            eDeviceGroup["MedicalDeviceWaveformGraphicType"] = _val;
        
            OXML.Node("MedicalDeviceWaveformGraphicType", _val);
            XML.Node("eDevice.04", _val);
        };
        
        //eDevice.05//////////////////
        _device = getValue(businessObject.elements, "eDevice.05");
        if (_device.IsNull == true) {
            v2Array.push({ section: "E21", element: "E21_04", val: null });
            eDeviceGroup["eDevice.05"] = null;
            eDeviceGroup["MedicalDeviceWaveformGraphic"] = null;

            OXML.Node("MedicalDeviceWaveformGraphic", "");
            XML.Node("eDevice.05", "");
        }
        else
        {
            _val = _device.ValueArray[0].val;

            OXML.Node("MedicalDeviceWaveformGraphic", _val);
            XML.Node("eDevice.05", _val);

            v2Array.push({ section: "E21", element: "E21_04", val: _val });
            eDeviceGroup["eDevice.05"] = _val;
            eDeviceGroup["MedicalDeviceWaveformGraphic"] = _val;
        };
        
        //eDevice.06////////////////
        _device = getValue(businessObject.elements, "eDevice.06");
        if (_device.IsNull == true) {
            v2Array.push({ section: "E21", element: "E21_05", val: null });
            eDeviceGroup["eDevice.06"] = null;
            eDeviceGroup["MedicalDeviceMode"] = null;

            OXML.Node("MedicalDeviceMode", "");
            XML.Node("eDevice.06", "");
        }
        else
        {
            _val = _device.ValueArray[0].val;

            v2Array.push({ section: "E21", element: "E21_05", val: setV2("eDevice.06", _val) });
            eDeviceGroup["MedicalDeviceMode"] = _val;
            eDeviceGroup["eDevice.06"] = _val;

            OXML.Node("MedicalDeviceMode", setCodeText("eDevice.06",_val));
            XML.Node("eDevice.06", _val);
        };
        
        /////////////////////////////////////
        /////////////////////////////////////
        
        //eDevice.07////////////////
        _device = getValue(businessObject.elements, "eDevice.07");
        if (_device.IsNull == true) {
            v2Array.push({ section: "E21", element: "E21_06", val: null });
            eDeviceGroup["eDevice.07"] = null;
            eDeviceGroup["MedicalDeviceECGLead"] = null;

            OXML.Node("MedicalDeviceECGLead", "");
            XML.Node("eDevice.07", "");
        }
        else
        {
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _device.ValueArray.length; i++)
            {
                if ((_device.ValueArray[i].HasValue == true) && (arr1.indexOf(_device.ValueArray[i].val) > -1))
                {
                    _val = _device.ValueArray[i].val
                    arr1.push(_val);
                    arr2.push(SetV2("eDevice.07", _val));
                    arr3.push(setCodeText("eDevice.07", _val));
                    OXML.Node("MedicalDeviceECGLead", setCodeText("eDevice.07",_val));
                    XML.Node("eDevice.07", _val);
                }
            }
            eDeviceGroup["eDevice.07"] = arr1.slice(0);
            eDeviceGroup["MedicalDeviceECGLead"] = arr3.slice(0);
            v2Array.push({ section: "E21", element: "E21_06", val: arr2.slice(0) });
        };
        
        //eDevice.08////////////
        _device = getValue(businessObject.elements, "eDevice.08");
        if (_device.IsNull == true) {
            v2Array.push({ section: "E21", element: "E21_07", val: null });
            eDeviceGroup["eDevice.08"] = null;
            eDeviceGroup["ECGInterpretation"] = null;

            OXML.Node("ECGInterpretation", "");
            XML.Node("eDevice.08", "");
        }
        else
        {
            _val = _device.ValueArray[0].val;

            v2Array.push({ section: "E21", element: "E21_07", val: _val });
            eDeviceGroup["eDevice.08"] = _val;
            eDeviceGroup["ECGInterpretation"] = _val;

            OXML.Node("ECGInterpretation", _val);
            XML.Node("eDevice.08", _val);
        };
        
        /////////////////////////////////
        
        //eDevice.09///////////
        _device = getValue(businessObject.elements, "eDevice.09");
        if (_device.IsNull == true) {
            v2Array.push({ section: "E21", element: "E21_08", val: null });
            eDeviceGroup["eDevice.09"] = null;
            eDeviceGroup["TypeofShock"] = null;            

            OXML.Node("TypeofShock", "");
            XML.Node("eDevice.09", "");
        }
        else
        {
            _val = _device.ValueArray[0].val;

            v2Array.push({ section: "E21", element: "E21_08", val: setV2("eDevice.09", _val) });
            eDeviceGroup["eDevice.09"] = _val;
            eDeviceGroup["TypeofShock"] = _setCodeText("eDevice.09", _val);

            OXML.Node("TypeofShock", _val);
            XML.Node("eDevice.09", _val);
        };
        
        //eDevice.10//////////////
        _device = getValue(businessObject.elements, "eDevice.10");
        if (_device.IsNull == true) {
            v2Array.push({ section: "E21", element: "E21_09", val: null });
            eDeviceGroup["eDevice.10"] = null;
            eDeviceGroup["ShockorPacingEnergy"] = null;

            OXML.Node("ShockorPacingEnergy", "");
            XML.Node("eDevice.10", "");
        }
        else
        {
            _val = _device.ValueArray[0].val;

            OXML.Node("ShockorPacingEnergy", _val);
            XML.Node("eDevice.10", _val);
            v2Array.push({ section: "E21", element: "E21_09", val: _val });

            eDeviceGroup["eDevice.10"] = _val;
            eDeviceGroup["ShockorPacingEnergy"] = _val;            
        };
        
        //eDevice.11//////////////
        _device = getValue(businessObject.elements, "eDevice.11");
        if (_device.IsNull == true) {
            v2Array.push({ section: "E21", element: "E21_10", val: null });
            eDeviceGroup["eDevice.11"] = null;
            eDeviceGroup["TotalNumberofShocksDelivered"] = null;

            OXML.Node("TotalNumberofShocksDelivered", "");
            XML.Node("eDevice.11", "");
        }
        else
        {
            _val = _device.ValueArray[0].val;

            eDeviceGroup["eDevice.11"] = _val;
            eDeviceGroup["TotalNumberofShocksDelivered"] = _val;            

            OXML.Node("TotalNumberofShocksDelivered", _val);
            XML.Node("eDevice.11", _val);
            v2Array.push({ section: "E21", element: "E21_10", val: _val});
        };
        
        //eDevice.12//////////////////////
        _device = getValue(businessObject.elements, "eDevice.12");
        if (_device.IsNull == true) {
            v2Array.push({ section: "E21", element: "E21_11", val: null });
            eDeviceGroup["eDevice.12"] = null;
            eDeviceGroup["PacingRate"] = null;

            OXML.Node("PacingRate", "");
            XML.Node("eDevice.12", "");
        }
        else
        {
            _val = _device.ValueArray[0].val;

            v2Array.push({ section: "E21", element: "E21_11", val: _val });         
            eDeviceGroup["eDevice.12"] = _val;
            eDeviceGroup["PacingRate"] = _val;

            OXML.Node("PacingRate", _val);
            XML.Node("eDevice.12", _val);
        };
    };
    */
    return eDevice;
};
var seteExam = function (businessObject) {
    var eExam = new Object();
            
    ////////Check for cancelled calls, Standby, non-patient
    var group = ["4212007","4212009","4212011","4212039","4212041","4212043"]; //Calls without patient interaction
    if ((eResponse.StandBy == false) && (group.indexOf(eDisposition["eDisposition.12"]) >-1 ))
    {
        Call.IsValid = false;
    }
    else
    {
        Call.IsValid = true;
    };
     
    //This file contains a column called PNNill that states whether or not option 
    //6 or 2 is allowed (see the document link that I reference above and then go to the last page of the document).
    //If PNNill is populated then option 6 is used else option 2 is used.
    //For example if PNNill column is populated with PNNill then it would look like
    //<eProcedures.03 PN="8801003" xsi::nill="true"></eProcedures.03>
    //if PNNill is empty then it would look like 
    //<eProcedures.03 PN="8801003">621682859</eProcedures.03>

    
    ////////eExam.01 -- IsNillable Yes
    _exam = getValue(businessObject.elements, "eExam.01");
    var eExam = new Object();
    /*
    if (eExam.IsValid ==false)
    {
        if (_exam.IsNull == true) 
        {
            if(_exam.HasPN==true)
            {
                if(_exam.PN == "8801023")
                {
                    eExam["EstimatedBodyWeightinKilograms"] = "Exam Finding Not Present";
                    eExam["eExam.01"] = FINDING_NOT_PRESENT_IS_NILLABLE;
                    v2Array.push({ section: "E16", element: "E16_01", val: v2NOT_KNOWN}); 

                    XML.BeginNode("eExam.01");
                    XML.Attrib("PN", PN_FINDING_NOT_PRESENT_IS_NILLABLE);      
                    XML.WriteString();
                    XML.EndNode();

                    OXML.Node("EstimatedBodyWeightinKilograms", NOT_APPLICABLE);                                   
                }
            }
            else
            {
                if (isRequiredStateElement("eExam.01") == true)         
                {
                    v2Array.push({ section: "E16", element: "E16_01", val: v2NOT_RECORDED });
                    eExam["eExam.01"] = v3NOT_RECORDED;
                    eExam["EstimatedBodyWeightinKilograms"] = NOT_RECORDED;
                    XML.BeginNode("eExam.01");
                    XML.Attrib("PN", NIL_V3NOT_RECORDED);              
                    XML.EndNode();

                    OXML.Node("EstimatedBodyWeightinKilograms", NOT_RECORDED);               
                }
                else 
                {
                    v2Array.push({ section: "E16", element: "E16_01", val: v2NOT_REPORTING });
                    eExam["eExam.01"] = v3NOT_REPORTING;
                    eExam["EstimatedBodyWeightinKilograms"] = NOT_REPORTING;

                    XML.BeginNode("eExam.01");
                    XML.Attrib("PN", NIL_V3NOT_REPORTING);              
                    XML.EndNode();

                    OXML.Node("EstimatedBodyWeightinKilograms", NOT_REPORTING);
                }
            }
        }
        else 
        {
            v2Array.push({ section: "E16", element: "E16_01", val: _val });
            eExam["eExam.01"] = _val;
            eExam["EstimatedBodyWeightinKilograms"] = _val;
            OXML.Node("EstimatedBodyWeightinKilograms", _val);
            XML.Node("eExam.01", _val);
        }
    }
    else
    {
        v2Array.push({ section: "E16", element: "E16_01", val: v2NOT_APPLICABLE });
        eExam["eExam.01"] = v3NOT_APPLICABLE;
        eExam["EstimatedBodyWeightinKilograms"] = NOT_APPLICABLE;

        XML.BeginNode("eExam.01");
        XML.Attrib("PN", NIL_V3NOT_APPLICABLE);              
        XML.EndNode();

        OXML.Node("EstimatedBodyWeightinKilograms", NOT_APPLICABLE);
    };
        
       
    /////////eExam.02
    _exam = getValue(businessObject.elements, "eExam.02");
    if (eExam.IsValid ==false)
    {
        if (_exam.IsNull == true) 
        {
            if(_exam.HasPN==true)
            {              
                if(_exam.PN =="8801019")
                {
                    eExam["LengthBasedTapeMeasure"] = "REFUSED";
                    eExam["eExam.02"] = REFUSED_IS_NILLABLE;
                    v2Array.push({ section: "E16", element: "E16_02", val: v2NOT_KNOWN});    
                    
                    XML.BeginNode("eExam.02");
                    XML.Attrib("PN", PN_REFUSED_IS_NILLABLE);              
                    XML.EndNode();

                    OXML.Node("LengthBasedTapeMeasure", REFUSED_IS_NILLABLE);               
                }
                else if(_exam.PN =="8801023")
                {
                    eExam["LengthBasedTapeMeasure"] = "UNABLE TO COMPLETE";
                    eExam["eExam.02"] = UNABLE_TO_COMPLETE_IS_NILLABLE;
                    v2Array.push({ section: "E16", element: "E16_02", val: v2NOT_KNOWN});   
                    XML.BeginNode("eExam.02");
                    XML.Attrib("PN", PN_UNABLE_TO_COMPLETE_IS_NILLABLE);              
                    XML.EndNode();

                    OXML.Node("LengthBasedTapeMeasure", UNABLE_TO_COMPLETE_IS_NILLABLE);               
                }
            }
            else 
            {        
                if (isRequiredStateElement("eExam.02") == true) 
                {
                    v2Array.push({ section: "E16", element: "E16_02", val: v2NOT_RECORDED });
                    eExam["eExam.02"] = v3NOT_RECORDED;
                    eExam["LengthBasedTapeMeasure"] = NOT_RECORDED;

                    XML.BeginNode("eExam.02");
                    XML.Attrib("PN", NIL_V3NOT_RECORDED);              
                    XML.EndNode();

                    OXML.Node("LengthBasedTapeMeasure", NOT_RECORDED);     
                }
                else 
                {
                    v2Array.push({ section: "E16", element: "E16_02", val: v2NOT_REPORTING });
                    eExam["eExam.02"] = v3NOT_REPORTING;
                    eExam["LengthBasedTapeMeasure"] = NOT_REPORTING;

                    XML.BeginNode("eExam.02");
                    XML.Attrib("PN", NIL_V3NOT_REPORTING);              
                    XML.EndNode();

                    OXML.Node("LengthBasedTapeMeasure", NOT_REPORTING);     
                }
            }
        }
        else 
        {  
            _val = _exam.ValueArray[0].val;

            v2Array.push({ section: "E16", element: "E16_02", val: setV2("eExam.02",_val)});
            eExam["eExam.02"] = _val;
            eExam["LengthBasedTapeMeasure"] = setCodeText("eExam.02",_val);

            OXML.Node("LengthBasedTapeMeasure", setCodeText("eExam.02",_val));     
            XML.Node("eExam.02", _val);     
        }
    }
    else
    {
        v2Array.push({ section: "E16", element: "E16_02", val: v2NOT_APPLICABLE });
        eExam["eExam.02"] = v3NOT_APPLICABLE;
        eExam["LengthBasedTapeMeasure"] = NOT_APPLICABLE;

        XML.BeginNode("eExam.02");
        XML.Attrib("PN", NIL_V3NOT_APPLICABLE);              
        XML.EndNode();

        OXML.Node("LengthBasedTapeMeasure", NOT_APPLICABLE);             
    };
        
    if (eExam.IsValid ==true)
    {
        _sectionIndex = getSectionIndex(businessObject.sections[xx].attributes, "eExam.AssessmentGroup");      
        for (var xx = 0; xx < businessObject.sections.length; xx++) 
        {
                    
            var elementList = businessObject.sections[xx].attributes.elements;
        
            /////////eExam.03
            _exam = getValue(elementList, "eExam.03");
        
            if (_exam.IsNull == true) 
            {
                v2Array.push({ section: "E16", element: "E16_03", val: null});
                AssessmentGroup["eExam.03"] = null;
                AssessmentGroup["DateTimeofAssessment"] = null;

                OXML.Node("DateTimeofAssessment", "");     
                XML.Node("eExam.03", "");     
            }
            else
            {
                _val = _exam.ValueArray[0].val;

                OXML.Node("DateTimeofAssessment", _val);     
                XML.Node("eExam.03", _val);     

                v2Array.push({ section: "E16", element: "E16_03", val: _val});
                AssessmentGroup["eExam.03"] = _val;
                AssessmentGroup["DateTimeofAssessment"] = _val;
            };
        
            /////////eExam.04
            _exam = getValue(elementList, "eExam.04");
            if (_exam.IsNull == true) 
            {
              
                OXML.Node("LengthBasedTapeMeasure", "");     
                XML.Node("eExam.04", "");     
                v2Array.push({ section: "E16", element: "E16_04", val: null});
                AssessmentGroup["eExam.04"] = null;
                AssessmentGroup["SkinAssessment"] = null;
            }
            else 
            {
                var arr1 = [];
                var arr2 = [];
                var arr3 = [];
                for (var i = 0; i < _exam.ValueArray.length; i++)
                {
                    if ((_exam.ValueArray[i].HasValue == true) && (arr1.indexOf(_exam.ValueArray[i].val) > -1))
                    {
                        _val = _exam.ValueArray[i].val
                        arr1.push(_val);
                        arr2.push(setV2("eExam.04", _val));
                        arr3.push(setCodeText("eExam.04", _val));

                        if(_exam.ValueArray[i].HasPN ==true)
                        {
                            XML.BeginNode("eExam.04");
                            XML.Attrib("PN", _exam.ValueArray[i].PN )
                            XML.WriteString(_val);
                            XML.EndNode();
                        }
                        else
                        {
                            OXML.Node("SkinAssessment", setCodeText("eExam.04",_val));     
                            XML.Node("eExam.04", _val); 
                        };
                    }
                };
                v2Array.push({ section: "E16", element: "E16_04", val: arr2.slice(0)});                
                AssessmentGroup["eExam.04"] = arr1.slice(0);
                AssessmentGroup["SkinAssessment"] = arr3.slice(0);
            };
        
            /////////eExam.05
            _val = getValue(elementList, "eExam.05");
            if (_val == null) 
            {
                v2Array.push({ section: "E16", element: "E16_05", val: null});
                AssessmentGroup["eExam.05"] = null;
                AssessmentGroup["HeadAssessment"] = null;

                OXML.Node("HeadAssessment", "");     
                XML.Node("eExam.04", ""); 
            }
            else 
            {
                var arr1 = [];            
                var arr2 = [];
                var arr3 = [];             
                for (var i = 0; i < _exam.ValueArray.length; i++)
                {
                    if ((_exam.ValueArray[i].HasValue == true) && (arr1.indexOf(_exam.ValueArray[i].val) > -1))
                    {
                        _val = _exam.ValueArray[i].val
                        arr1.push(_val);
                        arr2.push(setV2("eExam.05", _val));
                        arr3.push(setCodeText("eExam.05", _val));

                        if(_exam.ValueArray[i].HasPN ==true)
                        {
                            XML.BeginNode("eExam.05");
                            XML.Attrib("PN", _exam.ValueArray[i].PN )
                            XML.WriteString(_val);
                            XML.EndNode();
                        }
                        else
                        {
                            OXML.Node("HeadAssessment", setCodeText("eExam.05",_val));     
                            XML.Node("eExam.05", _val); 
                        };                       
                    }
                };
                v2Array.push({ section: "E16", element: "E16_05", val: arr2.slice(0)});                
                AssessmentGroup["eExam.05"] = arr1.slice(0);
                AssessmentGroup["HeadAssessment"] = arr3.slice(0);
            };
        
        
            /////////eExam.06
            _exam = getValue(elementList, "eExam.06");
            if (_exam.IsNull == true) 
            {                
                AssessmentGroup["eExam.06"] = null;
                AssessmentGroup["FaceAssessment"] = null;
                OXML.Node("FaceAssessment", "");     
                XML.Node("eExam.06", "");                 
            }
            else 
            {
                var arr1 = [];            
                var arr3 = [];
                for (var i = 0; i < _exam.ValueArray.length; i++)
                {
                    if ((_exam.ValueArray[i].HasValue == true) && (arr1.indexOf(_exam.ValueArray[i].val) > -1))
                    {
                        arr1.push(_val);
                        arr3.push(setCodeText("eExam.06", _val));
                        if(_exam.ValueArray[i].HasPN ==true)
                        {
                            XML.BeginNode("eExam.06");
                            XML.Attrib("PN", _exam.ValueArray[i].PN )
                            XML.WriteString(_val);
                            XML.EndNode();
                        }
                        else
                        {
                            OXML.Node("FaceAssessment", setCodeText("eExam.06",_val));     
                            XML.Node("eExam.06", _val); 
                        }
                    }
                };
                AssessmentGroup["eExam.06"] = arr1.slice(0);
                AssessmentGroup["FaceAssessment"] = arr3.slice(0);
            };
        
        
            /////////eExam.07
            _exam = getValue(elementList, "eExam.07");
            if (_exam.IsNull == true) 
            {
                OXML.Node("NeckAssessment", null);     
                XML.Node("eExam.07", null);

                AssessmentGroup["eExam.07"] = null;
                AssessmentGroup["NeckAssessment"] = null;
                v2Array.push({ section: "E16", element: "E16_06", val: null});                
            }
            else 
            {
                var arr1 = [];            
                var arr2 = [];
                var arr3 = [];
                for (var i = 0; i < _exam.ValueArray.length; i++)
                {
                    if ((_exam.ValueArray[i].HasValue == true) && (arr1.indexOf(_exam.ValueArray[i].val) > -1))
                    {
                        _val = _exam.ValueArray[i].val
                        arr1.push(_val);
                        arr2.push(setV2("eExam.07", _val));
                        arr3.push(setCodeText("eExam.07", _val));
                        if(_exam.ValueArray[i].HasPN ==true)
                        {
                            XML.BeginNode("eExam.07");
                            XML.Attrib("PN", _exam.ValueArray[i].PN )
                            XML.WriteString(_val);
                            XML.EndNode();
                        }
                        else
                        {
                            OXML.Node("NeckAssessment", setCodeText("eExam.07",_val));     
                            XML.Node("eExam.07", _val); 
                        }
                    }
                };
                v2Array.push({ section: "E16", element: "E16_06", val: arr2.slice(0)});                
                AssessmentGroup["eExam.07"] = arr1.slice(0);
                AssessmentGroup["NeckAssessment"] = arr3.slice(0);
            };
        
            /////////eExam.08
            _exam = getValue(elementList, "eExam.08");
            if (_exam.IsNull == true) 
            {                          
                OXML.Node("ChestAssessment", null);     
                XML.Node("eExam.08", null);
                AssessmentGroup["eExam.08"] = null;
                AssessmentGroup["ChestAssessment"] = null;
                v2Array.push({ section: "E16", element: "E16_07", val: null});                
            }
            else 
            {
                var arr1 = [];            
                var arr2 = [];
                var arr3 = [];
                for (var i = 0; i < _exam.ValueArray.length; i++)
                {
                    if ((_exam.ValueArray[i].HasValue == true) && (arr1.indexOf(_exam.ValueArray[i].val) > -1))
                    {
                        _val = _exam.ValueArray[i].val
                        arr1.push(_val);
                        arr2.push(setV2("eExam.08", _val));
                        arr3.push(setCodeText("eExam.08", _val));
                        if(_exam.ValueArray[i].HasPN ==true)
                        {
                            XML.BeginNode("eExam.08");
                            XML.Attrib("PN", _exam.ValueArray[i].PN )
                            XML.WriteString(_val);
                            XML.EndNode();
                        }
                        else
                        {
                            OXML.Node("ChestAssessment", setCodeText("eExam.08",_val));     
                            XML.Node("eExam.08", _val); 
                        }
                    }
                };
                v2Array.push({ section: "E16", element: "E16_07", val: arr2.slice(0)});                
                AssessmentGroup["eExam.08"] = arr1.slice(0);
                AssessmentGroup["ChestAssessment"] = arr3.slice(0);
            };
        
            /////////eExam.09
            _exam = getValue(elementList, "eExam.09");
            if (_exam.IsNull == true) 
            {                                    
                AssessmentGroup["eExam.09"] = null;
                AssessmentGroup["HeartAssessment"] = null;
                v2Array.push({ section: "E16", element: "E16_08", val: null});                                        
            }
            else 
            {
                var arr1 = [];            
                var arr2 = [];
                var arr3 = [];
                for (var i = 0; i < _exam.ValueArray.length; i++)
                {
                    if ((_exam.ValueArray[i].HasValue == true) && (arr1.indexOf(_exam.ValueArray[i].val) > -1))
                    {
                        _val = _exam.ValueArray[i].val
                        arr1.push(_val);
                        arr2.push(setV2("eExam.09", _val));
                        arr3.push(setCodeText("eExam.09", _val));

                        if(_exam.ValueArray[i].HasPN ==true)
                        {
                            XML.BeginNode("eExam.09");
                            XML.Attrib("PN", _exam.ValueArray[i].PN )
                            XML.WriteString(_val);
                            XML.EndNode();
                        }
                        else
                        {
                            OXML.Node("HeartAssessment", setCodeText("eExam.09",_val));     
                            XML.Node("eExam.09", _val); 
                        }
                    }
                };
                v2Array.push({ section: "E16", element: "E16_08", val: arr2.slice(0)});                
                AssessmentGroup["eExam.09"] = arr1.slice(0);
                AssessmentGroup["HeartAssessment"] = arr3.slice(0);
            };
        
            _sectionIndex = getSectionIndex(businessObject.sections[xx].attributes, "eExam.AbdomenGroup");
            for (var x = 0; x < _sectionIndex.length; x++) 
            {        
                /////////eExam.10
                _exam = getValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "eExam.09");
                if (_exam.IsNull == true) 
                {
                    OXML.Node("AbdominalAssessmentFindingLocation", null);     
                    XML.Node("eExam.10", null );

                    AbdomenGroupArray["eExam.10"] = null;
                    AbdomenGroupArray["AbdominalAssessmentFindingLocation"] = null;
                }
                else 
                {
                    OXML.Node("AbdominalAssessmentFindingLocation", _val);     
                    XML.Node("eExam.10", _val);

                    AbdomenGroupArray["eExam.10"] = _val;
                    AbdomenGroupArray["AbdominalAssessmentFindingLocation"] =  _val;
                };
        
        
                /////////eExam.11
                _exam = getValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "eExam.11");
                if (_exam.IsNull == true) 
                {
                    AbdomenGroupArray["eExam.11"] = null;
                    v2Array.push({ section: "E16", element: "E16_09", val: v2NOT_KNOWN});                      
                }
                else 
                {
                    {
                        var arr1 = [];            
                        var arr2 = [];
                        var arr3 = [];
                        for (var i = 0; i < _exam.ValueArray.length; i++)
                        {
                            if ((_exam.ValueArray[i].HasValue == true) && (arr1.indexOf(_exam.ValueArray[i].val) > -1))
                            {
                                _val = _exam.ValueArray[i].val
                                arr1.push(_val);
                                arr2.push(setV2("eExam.11", _val));
                                arr3.push(setCodeText("eExam.11", _val));
                                if(_exam.ValueArray[i].HasPN ==true)
                                {
                                    XML.BeginNode("eExam.11");
                                    XML.Attrib("PN", _exam.ValueArray[i].PN )
                                    XML.WriteString(_val);
                                    XML.EndNode();
                                }
                                else
                                {
                                    OXML.Node("AbdomenAssessment", setCodeText("eExam.11",_val));     
                                    XML.Node("eExam.11", _val); 
                                }
                            }
                        };
                        v2Array.push({ section: "E16", element: "E16_09", val: arr2.slice(0)});                
                        AbdomenGroupArray["eExam.11"] = arr1.slice(0);
                        AssessmentGroup["AbdomenAssessment"] = arr3.slice(0);
                    };
                };
        
        
                /////////eExam.12
                _exam = getValue(elementList, "eExam.12");
                if (_exam.IsNull == true) 
                {
                    PNValue = getPertinentNegative("eExam.12")
                    if(PNValue != null)
                    {
                        AssessmentGroup["PelvisGenitourinaryAssessment"] = "Exam Finding Not Present";
                        AssessmentGroup["eExam.12"] = "Exam Finding Not Present";
                        v2Array.push({ section: "E16", element: "E16_13", val: v2NOT_KNOWN});       
                    }
                    else
                    {
                        v2Array.push({ section: "E16", element: "E16_13", val: null});       
                        AssessmentGroup["PelvisGenitourinaryAssessment"] = null;
                        AssessmentGroup["eExam.12"] = null;
                    }
                }
                {
                    var arr1 = [];            
                    var arr2 = [];
                    var arr3 = [];
                    for (var i = 0; i < _exam.ValueArray.length; i++)
                    {
                        if ((_exam.ValueArray[i].HasValue == true) && (arr1.indexOf(_exam.ValueArray[i].val) > -1))
                        {
                            _val = _exam.ValueArray[i].val
                            arr1.push(_val);
                            arr2.push(setV2("eExam.12", _val));
                            arr3.push(setCodeText("eExam.12", _val));
                            if(_exam.ValueArray[i].HasPN ==true)
                            {
                                XML.BeginNode("eExam.12");
                                XML.Attrib("PN", _exam.ValueArray[i].PN )
                                XML.WriteString(_val);
                                XML.EndNode();
                            }
                            else
                            {
                                OXML.Node("PelvisGenitourinaryAssessment", setCodeText("eExam.12",_val));     
                                XML.Node("eExam.12", _val); 
                            }
                        }
                    };
                    v2Array.push({ section: "E16", element: "E16_13", val: arr2.slice(0)});                
                    AssessmentGroup["eExam.12"] = arr1.slice(0);
                    AssessmentGroup["PelvisGenitourinaryAssessment"] = arr3.slice(0);
                };
        
                ////////////////////
                _sectionIndex = getSectionIndex(businessObject.sections[xx].attributes, "eExam.SpineGroup");
                for (var x = 0; x < _sectionIndex.length; x++) 
                {
                    /////////eExam.13
                    _exam = getValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "eExam.13");
                    if (_exam.IsNull == true) 
                    {
                        SpineGroup["eExam.13"] = null;
                        SpineGroup["BackandSpineAssessmentFindingLocation"] = null;
                    }
                    else 
                    {
                        SpineGroup["eExam.13"] = _val;
                        SpineGroup["BackandSpineAssessmentFindingLocation"] = _val;
                    };
                    /////////eExam.14
                    _exam = getValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "eExam.14");
                    if (_exam.IsNull == true) 
                    {
                        OXML.Node("BackandSpineAssessment", "");     
                        XML.Node("eExam.14", ""); 
                        SpineGroup["eExam.14"] = null;
                        SpineGroup["BackandSpineAssessment"] = null;
                        v2Array.push({ section: "E16", element: "E16_14", val: null});       
                    }
                    else
                    {
                        var arr1 = [];            
                        var arr2 = [];
                        var arr3 = [];
                        for (var i = 0; i < _exam.ValueArray.length; i++)
                        {
                            if ((_exam.ValueArray[i].HasValue == true) && (arr1.indexOf(_exam.ValueArray[i].val) > -1))
                            {
                                _val = _exam.ValueArray[i].val
                                arr1.push(_val);
                                arr2.push(setV2("eExam.14", _val));
                                arr3.push(setCodeText("eExam.14", _val));
                                if(_exam.ValueArray[i].HasPN ==true)
                                {
                                    XML.BeginNode("eExam.14");
                                    XML.Attrib("PN", _exam.ValueArray[i].PN )
                                    XML.WriteString(_val);
                                    XML.EndNode();
                                }
                                else
                                {
                                    OXML.Node("BackandSpineAssessment", setCodeText("eExam.14",_val));     
                                    XML.Node("eExam.14", _val); 
                                }
                            }
                        };
                        v2Array.push({ section: "E16", element: "E16_14", val: arr2.slice(0)});                
                        SpineGroup["eExam.14"] = arr1.slice(0);
                        SpineGroup["BackandSpineAssessment"] = arr3.slice(0);
                    };
                };
                        /////////////////////////
        
        
                ////////////////////
                _sectionIndex = getSectionIndex(businessObject.sections[xx].attributes, "eExam.ExtremityGroup");
                for (var x = 0; x < _sectionIndex.length; x++) 
                {
                 
                    /////////eExam.15
                    _exam = getValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "eExam.13");
                    if (_exam.IsNull == true) 
                    {
                        OXML.Node("ExtremityAssessmentFindingLocation", "");     
                        XML.Node("eExam.15", "");
                        
                        ExtremityGroup["eExam.15"] = null;
                        ExtremityGroup["ExtremityAssessmentFindingLocation"] = null;
                    }
                    else 
                    {
                        OXML.Node("ExtremityAssessmentFindingLocation", setCodeText("eExam.15",_val));     
                        XML.Node("eExam.15", _val); 
                        
                        ExtremityGroup["eExam.15"] = _val;
                        ExtremityGroup["ExtremityAssessmentFindingLocation"] =  setCodeText("eExam.15", _val);
                    };
                    /////////eExam.16
                    _exam = getValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "eExam.14");
                    if (_exam.IsNull == true) 
                    {
                        ExtremityGroup["eExam.16"] = null;
                        ExtremityGroup["ExtremityAssessment"] = null;
                        v2Array.push({ section: "E16", element: "E16_17", val: null});       
                    }
                    else
                    {
                        var arr1 = [];            
                        var arr2 = [];
                        var arr3 = [];
                        for (var i = 0; i < _exam.ValueArray.length; i++)
                        {
                            if ((_exam.ValueArray[i].HasValue == true) && (arr1.indexOf(_exam.ValueArray[i].val) > -1))
                            {
                                _val = _exam.ValueArray[i].val
                                arr1.push(_val);
                                arr2.push(setV2("eExam.16", _val));
                                arr3.push(setCodeText("eExam.16", _val));

                                if(_exam.ValueArray[i].HasPN ==true)
                                {
                                    XML.BeginNode("eExam.16");
                                    XML.Attrib("PN", _exam.ValueArray[i].PN )
                                    XML.WriteString(_val);
                                    XML.EndNode();
                                }
                                else
                                {
                                    OXML.Node("ExtremityAssessment", setCodeText("eExam.16",_val));     
                                    XML.Node("eExam.16", _val); 
                                }
                            }
                        };
                        v2Array.push({ section: "E16", element: "E16_16", val: arr2.slice(0)});                
                        ExtremityGroup["eExam.16"] = arr1.slice(0);
                        ExtremityGroup["ExtremityAssessment"] = arr3.slice(0);
                    };
                };
                /////////////////////////                
                _sectionIndex = getSectionIndex(businessObject.sections[xx].attributes, "eExam.EyeGroup");
                for (var x = 0; x < _sectionIndex.length; x++) 
                {                 
                    /////////eExam.17
                    _exam = getValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "eExam.17");
                    if (_exam.IsNull == true) 
                    {
                        EyeGroup["eExam.17"] = null;
                        EyeGroup["EyeAssessmentFindingLocation"] = null;                      
                    }
                    else 
                    {
                        EyeGroup["eExam.17"] = _val;
                        EyeGroup["EyeAssessmentFindingLocation"] = setCodeText("eExam.17", _val);
                    };
                    /////////eExam.18
                    _exam = getValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "eExam.18");
                    if (_exam.IsNull == true) 
                    {
                        ExtremityGroup["eExam.18"] = null;
                        ExtremityGroup["EyeAssessment"] = null;
                        v2Array.push({ section: "E16", element: "E16_21", val: null});    
                    }
                    else
                    {
                        var arr1 = [];            
                        var arr2 = [];
                        var arr3 = [];
                        for (var i = 0; i < _exam.ValueArray.length; i++)
                        {
                            if ((_exam.ValueArray[i].HasValue == true) && (arr1.indexOf(_exam.ValueArray[i].val) > -1))
                            {
                                _val = _exam.ValueArray[i].val
                                arr1.push(_val);
                                arr2.push(setV2("eExam.18", _val));
                                arr3.push(setCodeText("eExam.18", _val));
                                if(_exam.ValueArray[i].HasPN ==true)
                                {
                                    XML.BeginNode("eExam.18");
                                    XML.Attrib("PN", _exam.ValueArray[i].PN )
                                    XML.WriteString(_val);
                                    XML.EndNode();
                                }
                                else
                                {
                                    OXML.Node("EyeAssessment", setCodeText("eExam.18",_val));     
                                    XML.Node("eExam.18", _val); 
                                }
                            }
                        };

                        v2Array.push({ section: "E16", element: "E16_21", val: arr2.slice(0)});                
                        AssessmentGroup["eExam.18"] = arr1.slice(0);
                        AssessmentGroup["EyeAssessment"] = arr3.slice(0);
                    };
              
                    /////////eExam.19
                    _exam = getValue(elementList, "eExam.19");
                    if (_exam.IsNull == true) 
                    {

                        AssessmentGroup["eExam.19"] = null;
                        AssessmentGroup["MentalStatusAssessment"] = null;
                        v2Array.push({ section: "E16", element: "E16_23", val: null});                       
                    }
                    else
                    {
                        var arr1 = [];            
                        var arr2 = [];
                        var arr3 = [];
                        for (var i = 0; i < _exam.ValueArray.length; i++)
                        {
                            if ((_exam.ValueArray[i].HasValue == true) && (arr1.indexOf(_exam.ValueArray[i].val) > -1))
                            {
                                _val = _exam.ValueArray[i].val
                                arr1.push(_val);
                                arr2.push(setV2("eExam.19", _val));
                                arr3.push(setCodeText("eExam.19", _val));
                                if(_exam.ValueArray[i].HasPN ==true)
                                {
                                    XML.BeginNode("eExam.19");
                                    XML.Attrib("PN", _exam.ValueArray[i].PN )
                                    XML.WriteString(_val);
                                    XML.EndNode();
                                }
                                else
                                {
                                    OXML.Node("MentalStatusAssessment", setCodeText("eExam.19",_val));     
                                    XML.Node("eExam.19", _val); 
                                }
                            }
                        };
                        v2Array.push({ section: "E16", element: "E16_23", val: arr2.slice(0)});                
                        AssessmentGroup["eExam.19"] = arr1.slice(0);
                        AssessmentGroup["MentalStatusAssessment"] = arr3.slice(0);
                    };
                            
                    /////////eExam.20
                    _exam = getValue(elementList, "eExam.20");
                    if (_exam.IsNull == true) 
                    {
 
                        OXML.Node("NeurologicalAssessment", null);     
                        XML.Node("eExam.20", null); 
                        AssessmentGroup["eExam.20"] = null;
                        AssessmentGroup["NeurologicalAssessment"] = null;
                        v2Array.push({ section: "E16", element: "E16_24", val: null});       
                   }
                    {
                        var arr1 = [];            
                        var arr2 = [];
                        var arr3 = [];
                        for (var i = 0; i < _exam.ValueArray.length; i++)
                        {
                            if ((_exam.ValueArray[i].HasValue == true) && (arr1.indexOf(_exam.ValueArray[i].val) > -1))
                            {
                                _val = _exam.ValueArray[i].val
                                arr1.push(_val);
                                arr2.push(setV2("eExam.20", _val));
                                arr3.push(setCodeText("eExam.20", _val));
                                if(_exam.ValueArray[i].HasPN ==true)
                                {
                                    XML.BeginNode("eExam.20");
                                    XML.Attrib("PN", _exam.ValueArray[i].PN )
                                    XML.WriteString(_val);
                                    XML.EndNode();
                                }
                                else
                                {
                                    OXML.Node("NeurologicalAssessment", setCodeText("eExam.20",_val));     
                                    XML.Node("eExam.20", _val); 
                                }
                            }
                        };
                        v2Array.push({ section: "E16", element: "E16_24", val: arr2.slice(0)});                
                        AssessmentGroup["eExam.20"] = arr1.slice(0);
                        AssessmentGroup["NeurologicalAssessment"] = arr3.slice(0);
                    };
        
                }
            }
            
            return eExam;
            */
};
var seteHistory = function (businessObject) {
    var eHistory = new Object();
            
    ////////Check for cancelled calls, Standby, non-patient
    var group = ["4212007","4212009","4212011","4212023", "4212025", "4212039","4212041","4212043"]; //Calls without patient interaction
    if ((eResponse.StandBy == false) && (group.indexOf(eDisposition["eDisposition.12"]) >-1 ))
    {
        eHistory.IsValid = false;
    }
    else
    {
        eHistory.IsValid = true;
    };
          
           
    ////////eHistory.01
    _history = getValue(businessObject.elements, "eHistory.01");
    if (eHistory.IsValid ==false)
    {
        if (_history.IsNull == true) 
            if (isRequiredStateElement("eHistory.01") == true)         
            {
                v2Array.push({ section: "E12", element: "E12_01", val: v2NOT_RECORDED });
                eHistory["eHistory.01"] = v3NOT_RECORDED;
                eHistory["BarrierstoPatientCare"] = NOT_RECORDED;

                XML.BeginNode("eHistory.01");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("BarrierstoPatientCare", NOT_RECORDED);
            }
            else 
            {
                v2Array.push({ section: "E12", element: "E12_01", val: v2NOT_REPORTING });
                eExam["eHistory.01"] = v3NOT_REPORTING;
                eExam["BarrierstoPatientCare"] = NOT_REPORTING;

                XML.BeginNode("eHistory.01");
                XML.Attrib("NV", NIL_V3NOT_REPORTING);
                XML.EndNode();

                OXML.Node("BarrierstoPatientCare", NOT_REPORTING);
            }
        else 
        {
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _history.ValueArray.length; i++)
            {
                if ((_history.ValueArray[i].HasValue == true) && (arr1.indexOf(_history.ValueArray[i].val) > -1))
                {
                    arr1.push(_val);
                    arr2.push(setV2("eHistory.01", _val));
                    arr3.push(setCodeText("eHistory.01", _val));
                    OXML.Node("BarrierstoPatientCare", setCodeText("eHistory.01",_val));     
                    XML.Node("eHistory.01", _val);                 
                }
            };
            v2Array.push({ section: "E12", element: "E12_01", val: arr2.slice(0) });
            eExam["BarrierstoPatientCare"] = arr3.slice(0);
            eHistory["eHistory.01"] = arr1.slice(0);
        }
    }
    else        
    {
        v2Array.push({ section: "E12", element: "E12_01", val: v2NOT_APPLICABLE });
        eHistory["eHistory.01"] = v3NOT_APPLICABLE;
        eHistory["BarrierstoPatientCare"] = NOT_APPLICABLE;

        XML.BeginNode("eHistory.01");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("BarrierstoPatientCare", NOT_APPLICABLE);
        
    };
            
           
    _sectionIndex = getSectionIndex(businessObject.sections[xx].attributes, "eHistory.PractitionerGroup");      
    if ((eHistory.IsValid ==true) && _sectionIndex.length >0)
    {     
        for (var x = 0; x <_sectionIndex.length; x++)
        {     	                        
            /////////eHistory.02
            _history = getValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "eHistory.02");
            if (eHistory.IsValid ==false)
            {
                if (_history.IsNull == true) 
                {
                    v2Array.push({ section: "E12", element: "E12_01", val: null });
                    PractitionerGroup["eHistory.02"] = null;
                    PractitionerGroup["LastName"] = null;

                    OXML.Node("LastName", null);     
                    XML.Node("eHistory.02", null);   
                }
                else 
                {
                    v2Array.push({ section: "E12", element: "E12_01", val: _val });
                    PractitionerGroup["eHistory.10"] = _val;
                    PractitionerGroup["LastName"] = _val;

                    OXML.Node("LastName", _val);     
                    XML.Node("eHistory.02", _val);   
                }
            }
            else
            {
                v2Array.push({ section: "E12", element: "E12_01", val: null });
                PractitionerGroup["eHistory.02"] = null;
                PractitionerGroup["LastName"] = null;
                OXML.Node("LastName", null);     
                XML.Node("eHistory.02", null);   
            };
            
            /////////eHistory.03
            _history = getValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "eHistory.03");
            if (eHistory.IsValid ==false)
            {
                if (_history.IsNull == true) 
                {            
                    v2Array.push({ section: "E12", element: "E12_04", val: null });
                    PractitionerGroup["eHistory.03"] = null;
                    PractitionerGroup["FirstName] = _val;"] = null;

                    OXML.Node("FirstName", null);     
                    XML.Node("eHistory.03", null);   
                }
                else 
                {
                    v2Array.push({ section: "E12", element: "E12_04", val: _val });
                    PractitionerGroup["eHistory.03"] = _val;
                    PractitionerGroup["FirstName"]= _val;
                    OXML.Node("FirstName", _val);     
                    XML.Node("eHistory.03", _val);   
                }
            }
            else
            {
                v2Array.push({ section: "E12", element: "E12_04", val: null });
                PractitionerGroup["eHistory.03"] = null;
                PractitionerGroup["FirstName] = _val;"] = null;

                OXML.Node("FirstName", null);     
                XML.Node("eHistory.03", null);   
            };
            
        
            /////////eHistory.04
            eHistory = getValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "eHistory.04");
            if (eHistory.IsValid ==false)
            {
                if (_val == null) 
                {
                    v2Array.push({ section: "E12", element: "E12_05", val: null });
                    PractitionerGroup["MiddleName"] = null;
                    PractitionerGroup["eHistory.04"] = null;

                    OXML.Node("MiddleName", null);     
                    XML.Node("eHistory.04", null);   
                }
                else 
                {
                    v2Array.push({ section: "E12", element: "E12_05", val: _val });
                    PractitionerGroup["eHistory.04"] = _val;
                    PractitionerGroup["MiddleName"] = _val;
                    OXML.Node("MiddleName", _val);     
                    XML.Node("eHistory.04", _val);   
                }
            }
            else
            {
                v2Array.push({ section: "E12", element: "E12_05", val: null });
                PractitionerGroup["MiddleName"] = null;
                PractitionerGroup["eHistory.04"] = null;
                OXML.Node("MiddleName", null);     
                XML.Node("eHistory.04", null);   
            };
        }
    };
    /////////////
        
        
    ////////eHistory.05
    _history = getValue(businessObject.elements, "eHistory.05");
    if (eHistory.IsValid ==false)
    {
        if (_history.IsNull == true) 
            if (isRequiredStateElement("eHistory.05") == true) 
            {
                v2Array.push({ section: "E12", element: "E12_07", val: v2NOT_RECORDED });
                eHistory["eHistory.05"] =v3NOT_RECORDED;
                eHistory["AdvanceDirectives"] =v3NOT_RECORDED;
                            
                XML.BeginNode("eHistory.05");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("AdvanceDirectives", NOT_RECORDED);
            }
            else 
            {
                v2Array.push({ section: "E12", element: "E12_07", val: v2NOT_REPORTING});
                eHistory["eHistory.05"] =v3NOT_REPORTING;
                eHistory["AdvanceDirectives"] =NOT_REPORTING;

                XML.BeginNode("eHistory.05");
                XML.Attrib("NV", NIL_V3NOT_REPORTING);
                XML.EndNode();

                OXML.Node("AdvanceDirectives", NOT_REPORTING);
            }
        else 
        {
            var arr1 = [];            
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _history.ValueArray.length; i++)
            {
                if ((_history.ValueArray[i].HasValue == true) && (arr1.indexOf(_history.ValueArray[i].val) > -1))
                {
                    _val = _history.ValueArray[i].val                                
                    arr1.push(_val);
                    arr2.push(setV2("eHistory.05", _val));
                    arr3.push(setCodeText("eHistory.05", _val));
                    OXML.Node("AdvanceDirectives", ("eHistory.05", _val));
                    XML.Node("eHistory.05", _val);
                }
            };
            eHistory["eHistory.05"] = arr1.slice(0);
            v2Array.push({ section: "E12", element: "E12_07", val: arr2.slice(0)});
            eHistory["AdvanceDirectives"] =arr3.slice(0);
        }
    }
    else
    {
        v2Array.push({ section: "E12", element: "E12_07", val: v2NOT_APPLICABLE});
        eHistory["eHistory.05"] =v3NOT_APPLICABLE;
        eHistory["AdvanceDirectives"] =NOT_APPLICABLE;

        XML.BeginNode("eHistory.05");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("AdvanceDirectives", NOT_APPLICABLE);
    };
        NEIL
    ////////eHistory.06
    _history = getValue(businessObject.elements, "eHistory.06");
    if (eHistory.IsValid ==false)
    {
        if (_history.IsNull == true) 
        {
            if (_history.HasPN == false)
            {
                if (isRequiredStateElement("eHistory.06") == true) 
                {
        
                    eHistory["eHistory.06"] =v3NOT_RECORDED;
                    eHistory["MedicationAllergies"] =v3NOT_RECORDED;
                    v2Array.push({ section: "E12", element: "E12_08", val: v2NOT_RECORDED });

                    XML.BeginNode("eHistory.06");
                    XML.Attrib("NV", NIL_V3NOT_RECORDED);
                    XML.EndNode();

                    OXML.Node("MedicationAllergies", NOT_RECORDED);
                }
                else 
                {
                    eHistory["eHistory.06"] =v3NOT_REPORTING;
                    eHistory["MedicationAllergies"] =v3NOT_REPORTING;
                    v2Array.push({ section: "E12", element: "E12_08", val: v2NOT_REPORTING });

                    XML.BeginNode("eHistory.06");
                    XML.Attrib("NV", NIL_V3NOT_REPORTING);
                    XML.EndNode();

                    OXML.Node("MedicationAllergies", NOT_REPORTING);
                }
            }
            else
            {
                XML.BeginNode("eHistory.06");
                XML.Attrib("PN", PN_FINDING_NOT_PRESENT_NOT_NILLABLE)
                XML.WriteString(i);
                XML.EndNode();
            }
        else 
        {
            var arr1 = [];            
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _history.ValueArray.length; i++)
            {
                if ((_history.ValueArray[i].HasValue == true) && (arr1.indexOf(_history.ValueArray[i].val) > -1))
                {
                    _val = _history.ValueArray[i].val
                    arr1.push(_val);
                    arr2.push(setV2("eHistory.06", _val));
                    arr3.push(setCodeText("eHistory.06", _val));
                    OXML.Node("MedicationAllergies", ("eHistory.05", _val));
                    XML.Node("eHistory.06", _val);
                }
            };
            eHistory["eHistory.06"] = arr1.slice(0);
            eHistory["MedicationAllergies"] =arr3.slice(0);
            v2Array.push({ section: "E12", element: "E12_08", val: arr2.slice(0) });
        }
    }
    else
    {
        eHistory["eHistory.06"] =v3NOT_APPLICABLE;
        eHistory["MedicationAllergies"] =NOT_APPLICABLE;
        v2Array.push({ section: "E12", element: "E12_08", val: v2NOT_APPLICABLE});

        XML.BeginNode("eHistory.06");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("MedicationAllergies", NOT_APPLICABLE);
    };
            
            
    ////////eHistory.07
    _history = getValue(businessObject.elements, "eHistory.07");
    if (eHistory.IsValid ==false)
    {
        if (_history.IsNull == true) 
        {
            eHistory["eHistory.07"] =null;
            eHistory["EnvironmentalFoodAllergies"] =null;
            v2Array.push({ section: "E12", element: "E12_09", val: null });
        }
        else 
        {
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _history.ValueArray.length; i++)
            {
                if ((_history.ValueArray[i].HasValue == true) && (arr1.indexOf(_history.ValueArray[i].val) > -1))
                {
                    _val = _history.ValueArray[i].val
                    arr1.push(_val);
                    arr2.push(setV2("eHistory.07", _val));
                    arr3.push(setCodeText("eHistory.07", _val));
                    OXML.Node("EnvironmentalFoodAllergies", ("eHistory.05", _val));
                    XML.Node("eHistory.07", _val);
                }     
            }
            eHistory["EnvironmentalFoodAllergies"] == arr2.slice(0);
            eHistory["eHistory.07"] = arr1.slice(0);
            v2Array.push({ section: "E12", element: "E12_09", val: arr3.slice(0)});
        }
    }
    else
    {
        OXML.Node("EnvironmentalFoodAllergies", null);
        XML.Node("eHistory.07", null);
        eHistory["eHistory.07"] =null;
        eHistory["EnvironmentalFoodAllergies"] =null;
        v2Array.push({ section: "E12", element: "E12_09", val: null });
    };
            
    ////////eHistory.08
    _history = getValue(businessObject.elements, "eHistory.08");
    if (eHistory.IsValid ==false)
    {                        
        if (_history.IsNull == true) 
        {
            if (isRequiredStateElement("eHistory.08") == true) 
            {
                eHistory["eHistory.08"] =v3NOT_RECORDED;
                eHistory["MedicalSurgicalHistory"] =NOT_RECORDED;
                v2Array.push({ section: "E12", element: "E12_10", val: v2NOT_RECORDED});            
                XML.BeginNode("eHistory.08");
                XML.Attrib("NV", NIL_V3NOT_RECORDED);
                XML.EndNode();

                OXML.Node("MedicalSurgicalHistory", NOT_RECORDED);
            }
            else 
            {
                eHistory["eHistory.08"] =v3NOT_REPORTING;
                eHistory["MedicalSurgicalHistory"] =NOT_REPORTING;
                v2Array.push({ section: "E12", element: "E12_10", val: v2NOT_REPORTING});

                XML.BeginNode("eHistory.08");
                XML.Attrib("NV", NIL_V3NOT_REPORTING);
                XML.EndNode();

                OXML.Node("MedicalSurgicalHistory", NOT_REPORTING);
            }
        }
        else 
        {
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _history.ValueArray.length; i++)
            {
                if ((_history.ValueArray[i].HasValue == true) && (arr1.indexOf(_history.ValueArray[i].val) > -1))
                {
                    _val = _history.ValueArray[i].val
                    arr1.push(_val);
                    arr2.push(setV2("eHistory.08", _val));
                    arr3.push(_val);
                    if(_exam.ValueArray[i].HasPN ==true)
                    {
                        XML.BeginNode("eHistory.08");
                        XML.Attrib("PN", _exam.ValueArray[i].PN )
                        XML.WriteString(_val);
                        XML.EndNode();
                    }
                    else
                    {
                        OXML.Node("MedicalSurgicalHistory", setCodeText("eHistory.08",_val));     
                        XML.Node("eHistory.08", _val);
                    }
                }
            }
            eHistory["eHistory.08"] = arr1.slice(0);
            eHistory["MedicalSurgicalHistory"] = arr1.slice(0)                
        }
    }
    else
    {
        eHistory["eHistory.08"] =v3NOT_APPLICABLE;
        eHistory["MedicalSurgicalHistory"] =NOT_APPLICABLE;
        v2Array.push({ section: "E12", element: "E12_10", val: v2NOT_APPLICABLE});

        XML.BeginNode("eHistory.08");
        XML.Attrib("NV", NIL_V3NOT_APPLICABLE);
        XML.EndNode();

        OXML.Node("MedicalSurgicalHistory", NOT_APPLICABLE);
    };
                    
    alert("Business Rules for History/History Obtained From")
    ////////eHistory.09
    _history = getValue(businessObject.elements, "eHistory.09");
    if (eHistory.IsValid ==false)
    {             
        if (_history.IsNull == true) 
        {
            eHistory["eHistory.09"] =null;
            eHistory["MedicalHistoryObtainedFrom"] =null;
            v2Array.push({ section: "E12", element: "E12_11", val: null});   
                        
            OXML.Node("MedicalHistoryObtainedFrom", "");     
            XML.Node("eHistory.09", "");
        }        
        else 
        {
            var arr1 = [];            
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _history.ValueArray.length; i++)
            {
                if ((_history.ValueArray[i].HasValue == true) && (arr1.indexOf(_history.ValueArray[i].val) > -1))
                {
                    _val = _history.ValueArray[i].val
                    arr1.push(_val);
                    arr2.push(setV2("eHistory.09", _val));
                    arr3.push(setCodeText("eHistory.09", _val));
                    OXML.Node("MedicalHistoryObtainedFrom", setCodeText("eHistory.09",_val));     
                    XML.Node("eHistory.09", _val);
                }
            };
            eHistory["MedicalHistoryObtainedFrom"] =arr3.slice(0);
            v2Array.push({ section: "E12", element: "E12_11", val: arr2.slice(0)});                    
            eHistory["eHistory.09"] = arr1.slice(0);
        }
    }
    else
    {
        OXML.Node("MedicalHistoryObtainedFrom", "");     
        XML.Node("eHistory.09", "");

        eHistory["eHistory.09"] =null;
        eHistory["MedicalHistoryObtainedFrom"] =null;
        v2Array.push({ section: "E12", element: "E12_11", val: null});            
    };
              
            
    ////////////////////////////////
                
    _sectionIndex = getSectionIndex(businessObject.sections[xx].attributes, "eHistory.ImmunizationsGroup");      
    if ((eHistory.IsValid ==false) && _sectionIndex.length >0)
    {
        for (var x = 0; x <_sectionIndex.length; x++)
        {     	               
            /////////eHistory.10
            _history = getValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "eHistory.10");
            if (_history.IsNull == true) 
            {
                OXML.Node("TypeofImmunization", "");     
                XML.Node("eHistory.10", "");

                eHistory["eHistory.10"] =null;
                eHistory["TypeofImmunization"] =null;
                v2Array.push({ section: "E12", element: "E12_12", val: null});               
            }
            else 
            {
                _val = _exam.ValueArray[0].val;

                v2Array.push({ section: "E12", element: "E12_12", val: setV2("eHistory.10", _val)});
                ImmunizationsGroup["eHistory.10"] = _val;
                eHistory["TypeofImmunization"] =_val;

                OXML.Node("TypeofImmunization", _val);     
                XML.Node("eHistory.10", _val);
            };
            
            /////////eHistory.11
            _val = getValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "eHistory.11");
            if (_val == null) 
            {
                eHistory["eHistory.11"] =null;
                eHistory["ImmunizationDate"] =null;
                v2Array.push({ section: "E12", element: "E12_13", val: null});   

                    
                OXML.Node("ImmunizationDate", null);     
                XML.Node("eHistory.11", null);
            }
            else 
            {
                _val = _exam.ValueArray[0].val;

                v2Array.push({ section: "E12", element: "E12_13", val: _val});   
                ImmunizationsGroup["eHistory.11"] = _val;
                ImmunizationsGroup["ImmunizationDate"] = _val;

                OXML.Node("ImmunizationDate", _val);     
                XML.Node("eHistory.11", _val);
            };
        
        }
    };
        
    ////////////////////////////////
                
    _sectionIndex = getSectionIndex(businessObject.sections[xx].attributes, "eHistory.CurrentMedsGroup");      
    if ((eHistory.IsValid ==false) && _sectionIndex.length >0)
    {
        for (var x = 0; x <_sectionIndex.length; x++)
        {     	
            ////////eHistory.12
            _history = getValue(businessObject.elements, "eHistory.12");
            if (_history.IsNull == true)                
            {
                if (isRequiredStateElement("eHistory.12") == true) 
                {
                    CurrentMedsGroup["eHistory.12"] =v3NOT_RECORDED;
                    CurrentMedsGroup["CurrentMedications"] =NOT_RECORDED;
                    v2Array.push({ section: "E14", element: "E12_13", val: null});   
                }
                else 
                {
                    CurrentMedsGroup["CurrentMedications"] =NOT_REPORTING;
                    CurrentMedsGroup["eHistory.12"] =v3NOT_REPORTING;
                    v2Array.push({ section: "E12", element: "E12_14", val: null});   
                }
            }
                
            else 
            {
                if(_history.ValueArray[0].HasPN ==true)
                {
                    XML.BeginNode("eHistory.12");
                    XML.Attrib("PN", _history.ValueArray[0].PN )
                    XML.WriteString(_val);
                    XML.EndNode();
                }
                else
                {
                    OXML.Node("CurrentMedications", _val);     
                    XML.Node("eHistory.12", _val);
                    
                    v2Array.push({ section: "E12", element: "E12_11", val: _val});
                    CurrentMedsGroup["eHistory.12"] = _val;
                    CurrentMedsGroup["CurrentMedications"] =_val;
                }
            };
            
            ////////eHistory.13
            _history = getValue(businessObject.elements, "eHistory.13");
            if (_history.IsNull == true) 
            {
                CurrentMedsGroup["eHistory.13"] =null;
                CurrentMedsGroup["CurrentMedicationDose"] =null;
                v2Array.push({ section: "E12", element: "E12_15", val: null}); 
                    
                OXML.Node("CurrentMedicationDose", "");     
                XML.Node("eHistory.13", "");
            }
            else 
            {
                _val = _history.ValueArray[0].val;

                OXML.Node("CurrentMedicationDose", _val);     
                XML.Node("eHistory.13", _val);

                CurrentMedsGroup["CurrentMedicationDose"] = _val;
                CurrentMedsGroup["eHistory.13"] = _val;
                v2Array.push({ section: "E12", element: "E12_15", val: _val});  
            };
                    
            ////////eHistory.14
            _history = getValue(businessObject.elements, "eHistory.14");
            if (_history.IsNull == true) 
            {
                OXML.Node("CurrentMedicationDosageUnit", "");     
                XML.Node("eHistory.14", "");

                CurrentMedsGroup["eHistory.14"] =null;
                CurrentMedsGroup["CurrentMedicationDosageUnit"] =null;
                v2Array.push({ section: "E12", element: "E12_16", val: null});   
            }           
            else 
            {
                _val = _history.ValueArray[0].val;

                OXML.Node("CurrentMedicationDosageUnit", _val);     
                XML.Node("eHistory.14", _val);

                CurrentMedsGroup["eHistory.14"] = _val;
                CurrentMedsGroup["CurrentMedicationDosageUnit"] =setCodeText("eHistory.14",_val);
                v2Array.push({ section: "E12", element: "E12_17", val: setV2("eHistory.14", _val)});
            };
                    
            ////////eHistory.15
            _history = getValue(businessObject.elements, "eHistory.15");
            if (_history.IsNull == true) 
            {          
                CurrentMedsGroup["eHistory.15"] =null;
                CurrentMedsGroup["CurrentMedicationAdministrationRoute"] =null;
                OXML.Node("CurrentMedicationAdministrationRoute", null);     
                XML.Node("eHistory.15", null);                
            }
            else 
            {
                _val = _history.ValueArray[0].val;

                CurrentMedsGroup["eHistory.15"] = _val;
                CurrentMedsGroup["CurrentMedicationAdministrationRoute"] =setCodeText("eHistory.15",_val);            
                v2Array.push({ section: "E12", element: "E12_17", val: setV2("eHistory.15", _val)});

                OXML.Node("CurrentMedicationAdministrationRoute", setCodeText("eHistory.15",_val));     
                XML.Node("eHistory.15", _val);       
            };     
        }
    };
        
        
    ////////eHistory.16
    _history = getValue(businessObject.elements, "eHistory.16");
    if ((eHistory.IsValid ==false) )
    {
        if (_history.IsNull == true) 
        {
            OXML.Node("PresenceofEmergencyInformationForm", "");     
            XML.Node("eHistory.16", "");  
            eHistory["eHistory.16"] =null;
            eHistory["PresenceofEmergencyInformationForm"] =null;
            v2Array.push({ section: "E12", element: "E12_18", val: null});          
        }
        else 
        {
            _val = _history.ValueArray[0].val;
            OXML.Node("PresenceofEmergencyInformationForm", setCodeText("eHistory.16",_val));     
            XML.Node("eHistory.16", _val); 
            eHistory["eHistory.16"] = _val;
            eHistory["PresenceofEmergencyInformationForm"] =setCodeText("eHistory.16",_val);   
            v2Array.push({ section: "E12", element: "E12_18", val: setV2("eHistory.16",_val)});          
        }
    }
    else
    {
        OXML.Node("PresenceofEmergencyInformationForm", "");     
        XML.Node("eHistory.16", "");  
        eHistory["eHistory.16"] =null;
        eHistory["PresenceofEmergencyInformationForm"] =null;
        v2Array.push({ section: "E12", element: "E12_18", val: null});          
    };
        
            
    ////////eHistory.17
    _history = getValue(businessObject.elements, "eHistory.17");
    if ((eHistory.IsValid ==false) )
    {
        if (_history.IsNull == true)                        
        {
            if (isRequiredStateElement("eHistory.17") == true) 
            {
                eHistory["eHistory.17"] =v3NOT_RECORDED;
                eHistory["AlcoholDrugUseIndicators"] =NOT_RECORDED;
                v2Array.push({ section: "E12", element: "E12_18", val: v2NOT_RECORDED});          
            }
            else 
            {
                eHistory["eHistory.17"] =v3NOT_REPORTING;
                eHistory["AlcoholDrugUseIndicators"] =NOT_REPORTING;
                v2Array.push({ section: "E12", element: "E12_18", val: v2NOT_REPORTING});          
            }
        }
        else 
        {
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _history.ValueArray.length; i++)
            {
                if ((_history.ValueArray[i].HasValue == true) && (arr1.indexOf(_history.ValueArray[i].val) > -1))
                {
                    _val = _history.ValueArray[i].val
                    arr1.push(_val);
                    arr2.push(setV2("eHistory.17", _val));
                    arr3.push(setCodeText("eHistory.17", _val));     
                    if(_exam.ValueArray[i].HasPN ==true)
                    {
                        XML.BeginNode("eHistory.17");
                        XML.Attrib("PN", _exam.ValueArray[i].PN )
                        XML.WriteString(_val);
                        XML.EndNode();
                    }
                    else
                    {
                        OXML.Node("AlcoholDrugUseIndicators", setCodeText("eHistory.17",_val));     
                        XML.Node("eHistory.17", _val);
                    }
                }
            };
            eHistory["eHistory.17"] = arr1.slice(0);        
            eHistory["AlcoholDrugUseIndicators"] =arr2.slice(0);
            v2Array.push({ section: "E12", element: "E12_18", val: arr3.slice(0)});    
            
        }
    }
    else
    {
        eHistory["eHistory.17"] =v3NOT_APPLICABLE;
        eHistory["AlcoholDrugUseIndicators"] =NOT_APPLICABLE;
        v2Array.push({ section: "E12", element: "E12_18", val: v2NOT_APPLICABLE});        
        
        XML.BeginNode("eHistory.17");
        XML.Attrib("NV", NIL_V3NOT_REPORTING);
        XML.EndNode();

        OXML.Node("AlcoholDrugUseIndicators", NOT_REPORTING);        
    };
                
        ////////eHistory.18
        _val = getValue(businessObject.elements, "eHistory.18");
        if ((eHistory.IsValid ==false) )
        {
            if (_val == null) 
            {
                PNValue = getPertinentNegative("eExam.02")
                if(PNValue != null)
                {      
                    if(PNValue =="8801019")
                    {
                        eHistory["CurrentMedications"] = "REFUSED";
                        eHistory["eHistory.12"] = PN_REFUSED_IS_NILLABLE;
                        v2Array.push({ section: "E16", element: "E16_02", val: v2NOT_KNOWN});       
                    }
                 
                    else if(PNValue =="8801023")
                    {
                        eHistory["CurrentMedications"] = "UNABLE TO COMPLETE";
                        eHistory["eHistory.12"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                        v2Array.push({ section: "E16", element: "E16_02", val: v2NOT_KNOWN});       
                    }
                }
                eHistory["eHistory.18"] =null;
                eHistory["Pregnancy"] =null;
                v2Array.push({ section: "E12", element: "E12_20", val: null});          
            }
            else 
            {
                eHistory["eHistory.18"] = _val;
                eHistory["Pregnancy"] = setCodeText("eHistory.18", _val);                
                v2Array.push({ section: "E12", element: "E12_20", val: setV2("eHistory.18",_val)});          
            }
        }
        else
        {
            eHistory["eHistory.18"] =null;
            eHistory["Pregnancy"] =null;
            v2Array.push({ section: "E12", element: "E12_20", val: null});          
        };
            
                ////////eHistory.19
                _val = getValue(businessObject.elements, "eHistory.19");
                if ((eHistory.IsValid ==false) )
                {
            
                    if (_val == null) 
                    {
                        eHistory["LastOralIntake"] =null;
                        eHistory["eHistory.19"] =null;
                    }
                    else 
                    {
                        eHistory["LastOralIntake"] =_val;
                        eHistory["eHistory.19"] = _val;
                    }
                }
                else
                {
                    eHistory["LastOralIntake"] =null;
                    eHistory["eHistory.19"] =null;
                };      
                */
            return eHistory;
        };
var seteInjury = function (businessObject) {
            //NEMSISEMSObject = complete NEMSIS Object from OLTP object
            //This function converts NEMSISEMSObject to both Version 2.2.1 and Version 3.3.4 NEMSIS Objects
            //Creates qualified JSON objects
            //Imposes localized business rules (within a given section/attribute)
            //If NEMSISObject does not contain this Section (isUndefined == true), function assigns appropriate
            //values to attribute/elements based upon State/Agency Configuration.
            var eInjury = new Object();
            var SeatGroup = new Object();
            var SeatGroupArray = new Array();
            ////////Check for cancelled calls, Standby, non-patient
            /*
            var group = ["4212007","4212009","4212011","4212023", "4212025", "4212039","4212041","4212043"]; //Calls without patient interaction
            if ((eResponse.StandBy == false) && (group.indexOf(eDisposition["eDisposition.12"]) >-1 ))
            {
                eInjury.IsValid = false;
            }
            else
            {
                eInjury.IsValid = true;
            };
            var v2Array = [];
        
            var eInjuryObject = new Object()
            eInjuryObject = getNEMSISSection(businessObject, "eInjury")
        
            var elementList = "";
            elementList = eInjuryObject.attributes.elements;
            // console.log(elementList)
        
            //eInjury.01///////////////////
            _val = getValue(elementList, "eInjury.01");
            if (eInjury.IsValid == true) //if have a transport, forgot the data, 
            {
                if (_val == null) 
                {
                    eInjury["eInjury.01"] = v3NOT_RECORDED;
                    eInjury["CauseofInjury"] = NOT_RECORDED;
                    v2Array.push({ section: "E10", element: "E10_01", val: v2NOT_RECORDED });
                }
                else {
                    var arr1 = [];
                    var arr2 = [];
                    var arr3 = [];
                    for (var i = 0; i < _val.length; i++) 
                    {
                        if(_val !=null)
                        {
                        if((val[i] !=null) && (arr1.indexOf(val[i]) >-1))
                            {
                            arr1.push(_val);
                            arr2.push(setV2("eInjury.01", _val));
                            arr3.push(setCodeText("eInjury.01", _val));
                            }
                        }
                    };
                    eInjury["eInjury.01"] = arr1.slice(0);
                    eInjury["CauseofInjury"] = arr3.slice(0);
                    v2Array.push({ section: "E10", element: "E10_01", val: arr2.slice(0) });
                }
            }
            else
            {
                eInjury["eInjury.01"] = v3NOT_APPLICABLE;
                eInjury["CauseofInjury"] = NOT_APPLICABLE;
                v2Array.push({ section: "E10", element: "E10_01", val: v2NOT_APPLICABLE });
            };
        
            //eInjury.02///////////////////
            _val = getValue(elementList, "eInjury.02");
            if (eInjury.IsValid == true) //if have a transport, forgot the data, 
            {
                if (_val == null) 
                {
                    if (isRequiredStateElement("eInjury.02")) {
                        eInjury["eInjury.01"] = v3NOT_RECORDED;
                        eInjury["MechanismofInjury"] = NOT_RECORDED;
                        v2Array.push({ section: "E10", element: "E10_03", val: v2NOT_RECORDED });
                    }
                    else {
                        eInjury["eInjury.02"] = v3NOT_REPORTING;
                        eInjury["MechanismofInjury"] = NOT_REPORTING;
                        v2Array.push({ section: "E10", element: "E10_03", val: v2NOT_REPORTING });
                    }
                }
                else 
                {
                    var arr1 = [];
                    var arr2 = [];
                    var arr3 = [];
                    for (var i = 0; i < _val.length; i++) 
                    {
                        if((val[i] !=null) && (arr1.indexOf(val[i]) >-1))
                            {
                            arr1.push(_val);
                            arr2.push(setV2("eInjury.02", _val));
                            arr3.push(setCodeText("eInjury.02", _val));
                        }
                    };
                    bHasInjury = true;
                    eInjury["MechanismofInjury"] = arr3.slice(0);
                    eInjury["eInjury.02"] = arr1.slice(0);
                    v2Array.push({ section: "E10", element: "E10_03", val: arr2.slice(0) });
                }
            }
            else
            {
                eInjury["eInjury.02"] = v3NOT_APPLICABLE;
                eInjury["MechanismofInjury"] = NOT_APPLICABLE;
                v2Array.push({ section: "E10", element: "E10_03", val: v2NOT_APPLICABLE });};
        
        
            //eInjury.03///////////////////
            _val = getValue(elementList, "eInjury.03");
            if (eInjury.IsValid == true) //if have a transport, forgot the data, 
            {
                if (_val == null) 
                {
                    if (isRequiredStateElement("eInjury.03")) 
                    {
                        eInjury["eInjury.03"] = v3NOT_RECORDED;
                        eInjury["TraumaCenterCriteria"] = NOT_RECORDED;
                    }
                }
                else 
                {
                    var arr1 = [];
                    var arr3 = [];
                    for (var i = 0; i < _val.length; i++) 
                    {
                       if((val[i] !=null) && (arr1.indexOf(val[i]) >-1))
                            {
                            arr1.push(_val);
                            arr3.push(setCodeText("eInjury.03", _val));
                        }
                    };
                    bHasInjury = true;
                    eInjury["eInjury.03"] = arr1.slice(0);
                    eInjury["TraumaCenterCriteria"] = arr3.slice(0);
                }
            }
            else
            {
                eInjury["eInjury.03"] = v3NOT_APPLICABLE;
                eInjury["TraumaCenterCriteria"] = NOT_APPLICABLE;
        
            };
        
        
            //eInjury.04///////////////////
            _val = getValue(elementList, "eInjury.04");
            if (eInjury.IsValid == true) //if have a transport, forgot the data, 
            {
                PNValue = getPertinentNegative("eInjury.04")
                if (PNValue != null) {
                    if (PNValue == "8801005") {
                        eInjury["eInjury.04"] = PN_FINDING_NOT_PRESENT_IS_NILLABLE;
                        eInjury["VehicularPedestrianorOtherInjuryRiskFactor"] = "8801005";
                        v2Array.push({ section: "E10", element: "E10_04", val: v2NOT_RECORDED });
                    }
                }
                if (_val == null) {
                    eInjury["eInjury.04"] = v3NOT_RECORDED;
                    eInjury["VehicularPedestrianorOtherInjuryRiskFactor"] = v3NOT_RECORDED;
                    v2Array.push({ section: "E10", element: "E10_04", val: v2NOT_RECORDED });
                }
                else {
                    var arr1 = [];
                    var arr2 = [];
                    var arr3 = [];
                    for (var i = 0; i < _val.length; i++) 
                    {
                      if((val[i] !=null) && (arr1.indexOf(val[i]) >-1))
                            {
                            arr1.push(_val);
                            arr2.push(setV2("eInjury.04", _val));
                            arr3.push(setCodeText("eInjury.04", _val));
                        }
                    };
                    bHasInjury = true;
                    eInjury["eInjury.04"] = arr1.slice(0);
                    eInjury["VehicularPedestrianorOtherInjuryRiskFactor"] = arr3.slice(0);
                    v2Array.push({ section: "E10", element: "E10_04", val: arr2.slice(0) });
                }
            }
            else
            {
                eInjury["eInjury.04"] = v3NOT_APPLICABLE;
                eInjury["VehicularPedestrianorOtherInjuryRiskFactor"] = NOT_APPLICABLE;
                v2Array.push({ section: "E10", element: "E10_04", val: v2NOT_APPLICABLE});
            };
        
            ///eInjury.05////////////
            _val = getValue(elementList, "eInjury.05");
            if (eInjury.IsValid == true) //if have a transport, forgot the data, 
            {
                if (_val == null) 
                {
                    if (isRequiredStateElement("eInjury.05")) 
                    {
                        eInjury["eInjury.05"] = null;
                        eInjury["MainAreaoftheVehicleImpactedbytheCollision"] = null;
                        v2Array.push({ section: "E10", element: "E10_05", val: v2NOT_RECORDED });
                    }
                }
                else 
                {
                    bHasInjury = true;
                    eInjury["eInjury.05"] = _val;
                    eInjury["MainAreaoftheVehicleImpactedbytheCollision"] = _val;
                    v2Array.push({ section: "E10", element: "E10_05", val: setV2("eInjury.05", _val) });
                }
            }
            else
            {
                eInjury["eInjury.05"] = null;
                eInjury["MainAreaoftheVehicleImpactedbytheCollision"] = null;
                v2Array.push({ section: "E10", element: "E10_05", val: v2NOT_RECORDED });
            };
        
            //eInjury.06///////////
            _val = getValue(elementList, "eInjury.06");
            if (eInjury.IsValid == true) //if have a transport, forgot the data, 
            {
                if (_val == null) 
                {
                    eInjury["eInjury.06"] = null;
                    eInjury["LocationofPatientinVehicle"] = null;
                    v2Array.push({ section: "E10", element: "E10_06", val: null });
        
                }
                else 
                {
                    eInjury["eInjury.06"] = _val;
                    eInjury["LocationofPatientinVehicle"] = _val;
                    v2Array.push({ section: "E10", element: "E10_06", val: setV2("eInjury.06", _val) });
                }
            }
            else
            {
                eInjury["eInjury.06"] = null;
                eInjury["LocationofPatientinVehicle"] = null;
                v2Array.push({ section: "E10", element: "E10_06", val: null });
            };
        
            //eInjury.07/////////
            _val = getValue(elementList, "eInjury.07");
            if (eInjury.IsValid == true) //if have a transport, forgot the data, 
            {
                if (_val == null) 
                {
                    if (isRequiredStateElement("eInjury.07")) 
                    {
                        eInjury["eInjury.07"] = v3NOT_RECORDED;
                        eInjury["UseofOccupantSafetyEquipment"] = v3NOT_RECORDED;
                        v2Array.push({ section: "E10", element: "E10_08", val: v2NOT_RECORDED });
                    }
                    else 
                    {
                        eInjury["eInjury.07"] = v3NOT_REPORTING;
                        eInjury["UseofOccupantSafetyEquipment"] = NOT_REPORTING;
                        v2Array.push({ section: "E10", element: "E10_08", val: v2NOT_REPORTING });
                    }
                }
                else 
                {
                    var arr1 = [];
                    var arr2 = [];
                    var arr3 = [];
                    for (var i = 0; i < _val.length; i++) 
                    {
                        if((val[i] !=null) && (arr1.indexOf(val[i]) >-1))
                            {
                            arr1.push(_val);
                            arr2.push(setV2("eInjury.07", _val));
                            arr3.push(setCodeText("eInjury.07", _val));
                        }
                    };
                    bHasInjury = true;
                    eInjury["eInjury.07"] = arr1.slice(0);
                    eInjury["UseofOccupantSafetyEquipment"] = arr3.slice(0);
                    v2Array.push({ section: "E10", element: "E10_08", val: arr2.slice(0) });
                }
            }
            else
            {
                eInjury["eInjury.07"] = v3NOT_APPLICABLE;
                eInjury["UseofOccupantSafetyEquipment"] = NOT_APPLICABLE;
                v2Array.push({ section: "E10", element: "E10_08", val: v2NOT_APPLICABLE});    
            };
        
            //eInjury.08//////////
            _val = getValue(elementList, "eInjury.08");
            if (eInjury.IsValid == true) //if have a transport, forgot the data, 
            {
                if (_val == null) 
                {
                    eInjury["eInjury.08"] = null;
                    eInjury["AirbagDeployment"] = null;
                    v2Array.push({ section: "E10", element: "E10_09", val: v2NOT_KNOWN });
                }
                else 
                {
        
                    var arr1 = [];
                    var arr2 = [];
                    var arr3 = [];
                    for (var i = 0; i < _val.length; i++) 
                    {
                        if((val[i] !=null) && (arr1.indexOf(val[i]) >-1))
                            {
                            arr1.push(_val);
                            arr2.push(setV2("eInjury.08", _val));
                            arr3.push(setCodeText("eInjury.08", _val));
                        }
                    };
                    bHasInjury = true;
                    v2Array.push({ section: "E10", element: "E10_09", val: arr2.slice(0) });
                    eInjury["eInjury.08"] = arr1.slice(0);
                    eInjury["AirbagDeployment"] = arr3.slice(0);
                }
            }
            else
            {
                eInjury["eInjury.08"] = null;
                eInjury["AirbagDeployment"] = null;
                v2Array.push({ section: "E10", element: "E10_09", val: v2NOT_KNOWN });
            };
        
        
            //eInjury.09/////////////
            _val = getValue(elementList, "eInjury.09");
            if (eInjury.IsValid == true) //if have a transport, forgot the data, 
            {
                if (_val == null) 
                {
                    eInjury["eInjury.09"] = null;
                    eInjury["HeightofFall"] = null;
                    v2Array.push({ section: "E10", element: "E10_10", val: null });
                }
                else 
                {
                    bHasInjury = true;
                    eInjury["eInjury.09"] = _val;
                    eInjury["HeightofFall"] = _val;
                    v2Array.push({ section: "E10", element: "E10_10", val: _val });
                }
            }
            else
            {
                eInjury["eInjury.09"] = null;
                eInjury["HeightofFall"] = null;
                v2Array.push({ section: "E10", element: "E10_10", val: null });
            };
        
            //eInjury.10///////////////
            _val = getValue(elementList, "eInjury.10");
            if (eInjury.IsValid == true) //if have a transport, forgot the data, 
            {
                if (_val == null) {
                    eInjury["eInjury.10"] = null;
                    eInjury["OSHAPersonalProtectiveEquipmentUsed"] = null;
                }
                else {
                    var arr1 = [];
                    var arr3 = [];
                    for (var i = 0; i < _val.length; i++) 
                    {
                        if((val[i] !=null) && (arr1.indexOf(val[i]) >-1))
                            {
                            arr1.push(_val);
                            arr3.push(setCodeText("eInjury.10", _val));
                        }
                    };
                    eInjury["OSHAPersonalProtectiveEquipmentUsed"] = arr3.slice(0);
                    eInjury["eInjury.10"] = arr1.slice(0);
                }
            }
            else
            {
                eInjury["eInjury.10"] = null;
                eInjury["OSHAPersonalProtectiveEquipmentUsed"] = null;
            };
        
            //eInjury.11///////
            _val = getValue(elementList, "eInjury.11");
            if (eInjury.IsValid == true) //if have a transport, forgot the data, 
            {
                if (_val == null) 
                {
                    eInjury["eInjury.11"] = null;
                    eInjury["ACNSystemCompanyProvidingACNData"] = null;
                }
                else {
                    bHasInjury = true;
                    eInjury["ACNSystemCompanyProvidingACNData"] = _val;
                    eInjury["eInjury.11"] = _val;
                }
            }
            else
            {
                eInjury["eInjury.11"] = null;
                eInjury["ACNSystemCompanyProvidingACNData"] = null;
            };
        
            //////////////////////////////
        
            //alert("PhoneNumber")
        
            //eInjury.12///////////
            _val = getValue(elementList, "eInjury.12");
            if (eInjury.IsValid == true) //if have a transport, forgot the data, 
            {
                if (_val == null) {
                    eInjury["eInjury.12"] = null;
                    eInjury["ACNIncidentID"] = null;
                }
                else {
                    bHasInjury = true;
                    eInjury["eInjury.12"] = _val;
                    eInjury["ACNIncidentID"] = _val;
                }
            }
            else
            {
                eInjury["eInjury.12"] = null;
                eInjury["ACNIncidentID"] = null;
            };
        
            //eInjury.13/////////////
            _val = getValue(elementList, "eInjury.13");
            if (eInjury.IsValid == true) //if have a transport, forgot the data, 
            {
        
                if (_val == null) 
                {
                    eInjury["eInjury.13"] = null;
                    eInjury["ACNCallBackPhoneNumber"] = null;
                }
                else {
                    sPatHomeNum = "";
                    var arr1 = [];
                    var arr2 = [];
                    for (var i = 0; i < _val.length; i++) 
                       if((val[i] !=null) && (arr1.indexOf(val[i]) >-1))
                            {
        
                            {
                                var PhoneNumberType = setPhoneNumberType("eInjury.13", _val);
        
                                if (PhoneNumberType == "9913001") {
                                    arr1.push("FAX  " + _val);
                                    arr2.push("9913001  " + _val);
                                }
                                else if (PhoneNumberType == "9913003") {
                                    arr1.push("HOME  " + _val);
                                    arr1.push("9913003  " + _val);
                                    sPatNum = _val;
        
                                }
                                else if (PhoneNumberType == "9913005") {
                                    arr1.push("MOBILE  " + _val);
                                    arr2.push("9913005  " + _val);
                                }
                                else if (PhoneNumberType == "9913007") {
                                    arr1.push("PAGER " + _val);
                                    arr2.push("9913007 " + _val);
                                }
                                else if (PhoneNumberType == "9913009") {
                                    arr1.push("WORK " + _val);
                                    arr2.push("9913009 " + _val);
                                }
                                else {
                                    arr1.push(_val);
                                    arr2.push(_val);
                                }
                            }
                        };
                    if (sPatHomeNum == null) {
                        for (var i = 0; i < _val.length; i++) {
                           if((val[i] !=null) && (arr1.indexOf(val[i]) >-1))
                            {
                                sPatHomeNum = _val
        
                            }
                        }
                    };
                    bHasInjury = true;
                    eInjury["eInjury.10"] = arr1.slice(0);
                    eInjury["ACNCallBackPhoneNumber"] = arr2.slice(0);
                }
            }
            else
            {
                eInjury["eInjury.13"] = null;
                eInjury["ACNCallBackPhoneNumber"] = null;
            };
            //eInjury.14///////////////
            _val = getValue(elementList, "eInjury.14");
            if (eInjury.IsValid == true) 
            {
                if (_val == null) {
                    eInjury["eInjury.14"] = null;
                    eInjury["DateTimeofACNIncident"] = null;
                }
                else {
                    eInjury["eInjury.14"] = _val;
                    eInjury["DateTimeofACNIncident"] = _val;
                }
            }
            else
            {
                eInjury["eInjury.14"] = null;
                eInjury["DateTimeofACNIncident"] = null;
         
            };
        
            //eInjury.15//////////////  
            _val = getValue(elementList, "eInjury.15");
            if (eInjury.IsValid == true) //
            {
                if (_val == null) 
                {
                    eInjury["eInjury.15"] = null;
                    eInjury["ACNIncidentLocation"] = null;
        
                }
                else 
                {
                    eInjury["ACNIncidentLocation"] = _val;
                    eInjury["eInjury.15"] = _val;
                }
            }
            else
            {
                eInjury["eInjury.15"] = null;
                eInjury["ACNIncidentLocation"] = null;
            };
        
            //eInjury.16//////////////
            _val = getValue(elementList, "eInjury.16");
            if (eInjury.IsValid == true) 
            {
                if (_val == null) {
                    eInjury["eInjury.16"] = null;
                    eInjury["ACNIncidentVehicleBodyType"] = null;
                }
                else {
                    eInjury["eInjury.16"] = _val;
                    eInjury["ACNIncidentVehicleBodyType"] = _val;
                }
            }
            else
            {
                eInjury["eInjury.16"] = null;
                eInjury["ACNIncidentVehicleBodyType"] = null;
            };
        
            //eInjury.17//////////////
            _val = getValue(elementList, "eInjury.17");
            if (eInjury.IsValid == true) 
            {
                if (_val == null) 
                {
                    eInjury["ACNIncidentVehicleManufacturer"] = null;
                    eInjury["eInjury.17"] = null;
        
                }
                else {
                    eInjury["eInjury.17"] = _val;
                    eInjury["ACNIncidentVehicleManufacturer"] = _val;
                }
            }
            else
            {
                eInjury["ACNIncidentVehicleManufacturer"] = null;
                eInjury["eInjury.17"] = null;
            };
        
            //eInjury.18//////////////
            _val = getValue(elementList, "eInjury.18");
            if (eInjury.IsValid == true) 
            {
                if (_val == null) 
                {
                    eInjury["eInjury.18"] = null;
                    eInjury["ACNIncidentVehicleMake"] = null;
                }
                else 
                {   
                    eInjury["ACNIncidentVehicleMake"] = _val;
                    eInjury["eInjury.18"] = _val;
                }
            }
            else
            {
                eInjury["eInjury.18"] = null;
                eInjury["ACNIncidentVehicleMake"] = null;
        
            };
        
            //eInjury.19//////////////
            _val = getValue(elementList, "eInjury.19");
            if (eInjury.IsValid == true) 
            {
                if (_val == null) 
                {
                    eInjury["eInjury.19"] = null;
                    eInjury["ACNIncidentVehicleModel"] = null;
                }
                else {       
                    eInjury["eInjury.19"] = _val;
                    eInjury["ACNIncidentVehicleModel"] = _val;
                }
            }
            else
            {
                eInjury["eInjury.19"] = null;
                eInjury["ACNIncidentVehicleModel"] = null;
            };
        
        
            //eInjury.20//////////////
            _val = getValue(elementList, "eInjury.20");
            if (eInjury.IsValid == true) 
            {
                if (_val == null) 
                {
                    eInjury["eInjury.20"] = null;
                    eInjury["ACNIncidentVehicleModelYear"] = null;
                }
                else {
                    eInjury["ACNIncidentVehicleModelYear"] = _val;
                    eInjury["eInjury.20"] = _val;
                }
            }
            else
            {
                eInjury["eInjury.20"] = null;
                eInjury["ACNIncidentVehicleModelYear"] = null;
            };
        
            //eInjury.21//////////////
            _val = getValue(elementList, "eInjury.21");
            if (eInjury.IsValid == true) 
            {
                if (_val == null) 
                {
                    eInjury["eInjury.21"] = null;
                    eInjury["ACNIncidentMultipleImpacts"] = null;
                }
                else
                {
                    eInjury["eInjury.21"] = _val;
                    eInjury["ACNIncidentMultipleImpacts"] = _val;
                }
            }
            else
            {
                eInjury["eInjury.21"] = null;
                eInjury["ACNIncidentMultipleImpacts"] = null;
            };
        
        
            //alert("Deltas")
            //eInjury.22//////////////
            _val = getValue(elementList, "eInjury.22");
            if (eInjury.IsValid == true) 
            {
                if (_val == null) 
                {
                    eInjury["eInjury.22"] = null;
                    eInjury["ACNIncidentDeltaVelocity"] = null;
                }
                else 
                {
                    var arr1 = [];
                    for (var i = 0; i < _val.length; i++) 
                    {
                    if((val[i] !=null) && (arr1.indexOf(val[i]) >-1))
                            {
                        _velocityUnit = getVelocityUnit(_val);
                        arr1.push(_val);
                        if (_velocityUnit == "9921001") {
                            if (_deltaVelocityUnit != null) {
                                arr1[i].push("KPH" + "||" + _val);
                            }
                            else {
                                arr1[i].push("MPH" + "||" + _val);
                            }
                        }
                        else {
                            if (_deltaVelocityUnit != null) {
                                _retArray.push('/t/t' + "<eInjury.22" + MPH + ">/" + _val + "</eInjury.22")
                                CollisionGroup["eInjury.22"] = MPH + _val;
                                arr1[i] = MPH + " " + DELTA_VELOCITY_ORDINAL + "/" + _deltaVelocity + "/" + _val;
                            }
                            else {
                                _retArray.push('/t/t' + "<eInjury.22" + MPH + ">/" + _val + "</eInjury.22>")
                                CollisionGroup["eInjury.22"] = MPH + _val;
                            }
                        }
                    }
                    };
                    bHasInjury = true;
                    eInjury["eInjury.22"] = arr1.slice(0);
                    eInjury["ACNIncidentDeltaVelocity"] = arr1.slice(0);
                }
            }
            {
                eInjury["eInjury.22"] = null;
                eInjury["ACNIncidentDeltaVelocity"] = null
            };
        
        
        
            //eInjury.23///////////
            _val = getValue(elementList, "eInjury.23");
            if (eInjury.IsValid == true) 
            {
                if (_val == null) 
                {
                    eInjury["eInjury.22"] = null;
                    eInjury["ACNHighProbabilityofInjury"] = null;
                }
                else {
                    bHasInjury = true;
                    eInjury["eInjury.23"] = _val;
                    eInjury["ACNHighProbabilityofInjury"] = _val;
                }
            }
            else
            {
                eInjury["eInjury.22"] = null;
                eInjury["ACNHighProbabilityofInjury"] = null;
            };
        
            //eInjury.24/////////////
            _val = getValue(elementList, "eInjury.24");
            if (eInjury.IsValid == true) 
            {
                if (_val == null) 
                {
                    eInjury["eInjury.22"] = null;
                    eInjury["ACNHighProbabilityofInjury"] = null;
                }
                else 
                {       
                    eInjury["eInjury.24"] = _val;
                    eInjury["ACNHighProbabilityofInjury"] = _val;
                }
            }
            {
                eInjury["eInjury.22"] = null;
                eInjury["ACNHighProbabilityofInjury"] = null;
            };
        
            //eInjury.25////////
            _val = getValue(elementList, "eInjury.25");
            if (eInjury.IsValid == true) 
            {
                if (_val == null) 
                {
                    eInjury["ACNIncidentRollover"] = null;
                    eInjury["eInjury.25"] = null;
                }
                else {
                    bHasInjury = true;
                    eInjury["ACNIncidentRollover"] = _val;
                    eInjury["eInjury.25"] = _val;
                }
            }
            {
                eInjury["ACNIncidentRollover"] = null;
                eInjury["eInjury.25"] = null;
            };
        
        
            _sectionIndex = getSectionIndex(eInjuryObject.sections.attributes, "eInjury.SeatGroup");
            for (var x = 0; x < _sectionIndex.length; x++) {
                _elementList = businessObject.sections[i].attributes.elements;
        
        
                //eInjury.26////////                        
                _val = getValue(_elementList, "eInjury.26");
                if (eInjury.IsValid == true) 
                {
                    if (_val == null) 
                    {
                        SeatGroup["eInjury.26"] = null;
                        SeatGroup["ACNVehicleSeatLocation"] = null;
                    }
                    else {
                        bHasInjury = true;
                        SeatGroup["eInjury.26"] = _val;
                        SeatGroup["ACNVehicleSeatLocation"] = _val;
                    }
                }
                else
                {
                    SeatGroup["eInjury.26"] = null;
                    SeatGroup["ACNVehicleSeatLocation"] = null;
                };
        
        
        
                //eInjury.27////////
                _val = getValue(_elementList, "eInjury.27");
                if (eInjury.IsValid == true) 
                {
                    if (_val == null) 
                    {
                        SeatGroup["SeatOccupied"] = null;
                        SeatGroup["eInjury.27"] = null;
                    }
                    else {
                        bHasInjury = true;
                        SeatGroup["eInjury.27"] = _val;
                        if (_val == "Y") {
                            SeatGroup["SeatOccupied"] = "Yes";
                        };
                        if (_val == "N") {
                            SeatGroup["SeatOccupied"] = "No";
                        };
                    }
                }
                else
                {
                    SeatGroup["SeatOccupied"] = null;
                    SeatGroup["eInjury.27"] = null;
                };
        
                //eInjury.28////////
                _val = getValue(_elementList, "eInjury.29");
                if (eInjury.IsValid == true) 
                {
        
                    if (_val == null) 
                    {
                        SeatGroup["eInjury.28"] = null;
                        SeatGroup["ACNIncidentSeatbeltUse"] = null;
                    }
                    else {
                        bHasInjury = true;
                        SeatGroup["ACNIncidentSeatbeltUse"] = _val;
                        SeatGroup["eInjury.29"] = _val;
                    }
                }
                else
                {
                    SeatGroup["eInjury.28"] = null;
                    SeatGroup["ACNIncidentSeatbeltUse"] = null;
                };
        
            }
        */
            return eInjury;

        };
var seteLabs = function (businessObject) {
            var eLabs = new Object();
            /*
        
            for (var i = 0; i < businessObject.sections.length ; i++)
            {
                elementList = businessObject.sections[i].attributes.elements;        
                if(typeof businessObject["eLabs"] != undefined)
                {
                    console.log(businessObject);
                    console.log(businessObject["eLabs"].length);
                    
                    ///////////eLabs.01    
                    _val = getValue(elementList, "eLabs.01");
                    if (_val == null) 
                    {          
                        LabsGroup["eLabs.01"] = null;
                        LabsGroup["DateTimeofLaboratoryorImagingResult"] = null;
                    }
                    else 
                    {
                        LabsGroup["eLabs.01"] = _val;
                        LabsGroup["DateTimeofLaboratoryorImagingResult"] = _val;
                    };
        
        
                    ///////////eLabs.02
                    _val = getValue(elementList, "eLabs.02");
                    if (_val == null) 
                    {
                        LabsGroup["eLabs.02"] = null;
                        LabsGroup["StudyResultPriortothisUnitEMSCare"] = null;
                    }
                    else 
                    {
                        LabsGroup["eLabs.02"] = _val;
                        LabsGroup["StudyResultPriortothisUnitEMSCare"] = _val;
                    };
        
                    ///////////////////LabResultGroup
                    /////////////////////////////////////
                    _sectionIndex = getSectionIndex(businessObject.sections[i].attributes, "eLabs.LabResultGroup");
                    for (var x = 0; x < _sectionIndex.length; x++) 
                    {
                        var listOfElements = businessObject.sections[i].attributes.sections[_sectionIndex[x]].attributes.elements
                        ///////////eLabs.03
                        _val = getValue(businessObject.elements, "eLabs.03");
                        if (_val == null) 
                        {
                            LabResultGroup["eLabs.03"] = null;
                            LabResultGroup["LaboratoryResultType"] = null;
                        }
                        else 
                        {
                            LabResultGroup["eLabs.03"] = _val;
                            LabResultGroup["LaboratoryResultType"] = _val;
                        };
        
                        ///////////eLabs.04
                        _val = getValue(businessObject.elements, "eLabs.04");
                        if (_val == null) 
                        {
                            LabResultGroup["eLabs.04"] = null;
                            LabResultGroup["LaboratoryResult"] = null;
                        }
                        else 
                        {
                            LabResultGroup["eLabs.04"] = _val;
                            LabResultGroup["LaboratoryResult"] = _val;
                        };
                    };            
                    ///////////////////LabImageGroup
                    _sectionIndex = getSectionIndex(businessObject.sections[i].attributes, "eLabs.LabImageGroup");
                    for (var x = 0; x < _sectionIndex.length; x++) 
                    {
                        var listOfElements = businessObject.sections[i].attributes.sections[_sectionIndex[x]].attributes.elements
        
                        _val = getValue(listOfElements, "eLabs.05");
                        if (_val == null) 
                        {
                            LabResultGroup["eLabs.05"] = null;
                            LabResultGroup["ImagingStudyType"] = null;
                        }
                        else 
                        {
                            LabResultGroup["eLabs.05"] = _val;
                            LabResultGroup["ImagingStudyType"] = _val;
                        };
        
                        _val = getValue(listOfElements, "eLabs.06");
                        if (_val == null) 
                        {
                            LabResultGroup["eLabs.06"] = null;
                            LabResultGroup["ImagingStudyResults"] = null;
                        }
                        else 
                        {
                            LabResultGroup["eLabs.06"] = _val;
                            LabResultGroup["ImagingStudyResults"] = _val;
                        };
        
                        /////////////////////////////////
        
                        _sectionIndex = getSectionIndex(businessObject.sections[i].attributes.sections[_sectionIndex[x]].attributes.sections, "eLabs.WaveformGraphicGroup");
                        for (var k = 0; k < _sectionIndex.length; k++) 
                        {
                            var _waveFormElements = businessObject.sections[i].attributes.sections[_sectionIndex[x]].attributes.section[k].attributes.elements;
                            _val = getValue(_waveFormElements, "eLabs.07");
                            if (_val == null) 
                            {
                                LabResultGroup["eLabs.07"] = null;
                                LabResultGroup["ImagingStudyFileorWaveformGraphicType"] = null;          
                            }
                            else 
                            {
                                LabResultGroup["eLabs.07"] = _val;
                                LabResultGroup["ImagingStudyFileorWaveformGraphicType"] = _val;
                            };
        
                            _val = getValue(_waveFormElements, "eLabs.08");
                            if (_val == null) 
                            {
                                LabResultGroup["eLabs.08"] = null;
                                LabResultGroup["ImagingStudyFileorWaveformGraphic"] = null;
                            }
                            else 
                            {
                                LabResultGroup["eLabs.08"] = _val;
                                LabResultGroup["ImagingStudyFileorWaveformGraphic"] = _val;
                            };
                        
                        }                
                    }
                    ///////////////////LabImageGroup            
                };
                */
            return eLabs;
        };
var seteMedication = function (businessObject) {
            var eMedication = new Object();
            /*
            ////////Check for cancelled calls, Standby, non-patient
        
            var group = ["4212007","4212009","4212011","4212023", "4212025", "4212039","4212041","4212043"]; //Calls without patient interaction
            if ((eResponse.StandBy == false) && (group.indexOf(eDisposition["eDisposition.12"]) >-1 ))
            {
                eMedication.IsValid = false;
            }
            else
            {
                eMedication.IsValid = true;
            };
            var v2Array = [];
        
            var eMedicationObject = new Object()
            eMedicationsGropuObject = getNEMSISSection(businessObject, "eMedication")
        
        
            for (var i = 0; i < eMedicationsGropuObject.sections.length ; i++)
            {
                var elementList = eMedicationsGropuObject.sections[xx].attributes.elements;
        
                //eMedications.03////////
                _val = getValue(elementList, "eMedications.03");
                if(eMedication.IsValid ==true)
                {           
                    if (_val == null)
                    {    
                        MedicationGroup["MedicationGiven"] == false;
                        PNValue = getPertinentNegative("eMedications.03")
                        if (PNValue != null) 
                        {
                            if (PNValue == "8801001") 
                            {
                                MedicationGroup["eMedications.03"] = PN_CONTRA_INDICATION_NOTED;
                                MedicationGroup["MedicationGiven"] = "PN_CONTRA_INDICATION_NOTED";
                                v2Array.push({ section: "E18", element: "E18_03", val: v2NOT_KNOWN });
        
                            }
                            else if (PNValue == "8801003") {
                                MedicationGroup["eMedications.03"] = PN_DENIED_BY_ORDER;
                                MedicationGroup["MedicationGiven"] = "PN_DENIED_BY_ORDER";
                                v2Array.push({ section: "E18", element: "E18_03", val: v2NOT_KNOWN });
        
                            }
                            else if (PNValue == "8801007") 
                            {
                                MedicationGroup["eMedications.03"] = PN_MEDICATION_ALLERGY;
                                MedicationGroup["MedicationGiven"] = "PN_MEDICATION_ALLERGY";
                                v2Array.push({ section: "E18", element: "E18_03", val: v2NOT_KNOWN });
        
                            }
                            else if (PNValue == "8801009") 
                            {
                                MedicationGroup["eMedications.03"] = PN_MEDICATION_ALREADY_TAKEN;
                                MedicationGroup["MedicationGiven"] = "PN_MEDICATION_ALREADY_TAKEN";
                                v2Array.push({ section: "E18", element: "E18_03", val: v2NOT_KNOWN });
                            }
                            else if (PNValue == "8801019") 
                            {
                                MedicationGroup["MedicationGiven"] = "PN_REFUSED_IS_NILLABLE";
                                MedicationGroup["eMedications.03"] = PN_REFUSED_IS_NILLABLE;
                                v2Array.push({ section: "E18", element: "E18_03", val: v2NOT_KNOWN });
                            }
                            else if (PNValue == "8801023") 
                            {
                                MedicationGroup["MedicationGiven"] = "PN_UNABLE_TO_COMPLETE_IS_NILLABLE";
                                MedicationGroup["eMedications.03"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                                v2Array.push({ section: "E18", element: "E18_03", val: v2NOT_KNOWN });
                            }
                        }
                
                        else
                        {           
                            if (isRequiredStateElement("eMedications.03"))
                            {
                                MedicationGroup["eMedications.03"] = v3NOT_RECORDED;
                                MedicationGroup["MedicationGiven"] = NOT_RECORDED;
                                v2Array.push({ section: "E18", element: "E18_03", val: v2NOT_RECORDED });
                            }
                            else
                            {
                                MedicationGroup["eMedications.03"] = null;
                                MedicationGroup["MedicationGiven"] = null;
                                v2Array.push({ section: "E18", element: "E18_03", val: null });
                            }
                        }
                    }
                    else
                    {
                        MedicationGroup["MedicationGiven"] == true;
                        MedicationGroup["eMedications.03"] = _val;
                        MedicationGroup["MedicationGiven"] = _val;
                        v2Array.push({ section: "E18", element: "E18_03", val: _val });
                    }
                }
                else
                {
                    MedicationGroup["eMedications.03"] = v3NOT_RECORDED;
                    MedicationGroup["MedicationGiven"] = NOT_RECORDED;
                    v2Array.push({ section: "E18", element: "E18_03", val: v2NOT_RECORDED });
                }; 
        
        
                //eMedications.01////////
                _val = getValue(elementList, "eMedications.01");
                if((eMedication.IsValid ==true) && (MedicationGroup.MedicationGiven == true))
                {
                    if (_val == null)
                    {
                        MedicationGroup["eMedications.01"] = V3NOT_RECORDED;
                        MedicationGroup["DateTimeMedicationAdministered"] = NOT_RECORDED;
                        v2Array.push({ section: "E18", element: "E18_01", val: V2NOT_RECORDED });
                    }        
                    else 
                    {
                        MedicationGroup["eMedications.01"] = _val;
                        MedicationGroup["DateTimeMedicationAdministered"] = _val;
                        v2Array.push({ section: "E18", element: "E18_01", val: _val });
                    }
                }
                else
                {
                    MedicationGroup["eMedications.01"] = v3NOT_APPLICABLE;
                    MedicationGroup["DateTimeMedicationAdministered"] = NOT_APPLICABLE;
                    v2Array.push({ section: "E18", element: "E18_01", val: v2NOT_APPLICABLE });
                }; 
        
                //eMedications.02////////
                _val = getValue(elementList, "eMedications.02");
                if((eMedication.IsValid ==true) && (MedicationGroup.MedicationGiven == true))
                {
                    if (_val == null)
                    {
                        v2Array.push({ section: "E18", element: "E18_02", val: V2NOT_RECORDED });
                        MedicationGroup["eMedications.02"] = V3NOT_RECORDED;
                        MedicationGroup["MedicationAdministeredPriortothisUnitEMSCare"] = NOT_RECORDED;
                    }        
                    else 
                    {
                        MedicationGroup["eMedications.02"] = setCodeText("eMedications.02",_val);
                        MedicationGroup["MedicationAdministeredPriortothisUnitEMSCare"] = _val;             
                        v2Array.push({ section: "E18", element: "E18_02", val: SetD2("eMedications.02", _val) });
                    }
                }
                else
                {
                    v2Array.push({ section: "E18", element: "E18_02", val: v2NOT_APPLICABLE });
                    MedicationGroup["eMedications.02"] = v3NOT_APPLICABLE;
                    MedicationGroup["MedicationAdministeredPriortothisUnitEMSCare"] = NOT_APPLICABLE;
                }; 
        
                //eMedication.04////////
                _val = getValue(elementList, "eMedications.04");
                if((eMedication.IsValid ==true) && (MedicationGroup.MedicationGiven == true))
                {                       
                    if (_val == null)
                    {
                        if(isRequiredStateElement("eMedications.04"))
                        {                    
                            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eMedications.04", Description: "Validation Error: Medication Administered Route Required. " })                    
                        }            
                        else
                        {
                            MedicationGroup["MedicationAdministeredRoute"] = null;
                            MedicationGroup["eMedications.04"] = null;
                            v2Array.push({ section: "E18", element: "E18_04", val: v2NOT_REPORTING });
                        }
                    }
                    else 
                    {
                        MedicationGroup["eMedications.04"] = _val;
                        MedicationGroup["MedicationAdministeredRoute"] = setCodeText("eMedications.04", _val);
                        v2Array.push({ section: "E18", element: "E18_04", val:  SetD2("eMedications.04",_val)});
                    }
                };
        
              
                //eMedication.05/////////////
                _val = getValue(elementList, "eMedications.05");
                if((eMedication.IsValid ==true) && (MedicationGroup.MedicationGiven == true))
                {                       
                    if (_val == null) 
                    {
                        MedicationGroup["HasDosage"] = false;
                        MedicationGroup["MedicationDosage"] = NOT_RECORDED;
                        MedicationGroup["eMedications.05"] = V3NOT_RECORDED;
                        v2Array.push({ section: "E18", element: "E18_05", val: V2NOT_RECORDED });
                    }
                    else 
                    {
                        MedicationGroup["HasDosage"] = true;
                        MedicationGroup["MedicationDosage"] = _val;
                        v2Array.push({ section: "E18", element: "E18_05", val: _val });
                        MedicationGroup["eMedications.05"] = _val;
                    }
                }
                else
                {
                    MedicationGroup["MedicationDosage"] = NOT_APPLICABLE;
                    MedicationGroup["eMedications.05"] = v3NOT_APPLICABLE;
                    v2Array.push({ section: "E18", element: "E18_05", val: v2NOT_APPLICABLE});
                };
        
                //eMedication.06//////////////
                _val = getValue(elementList, "eMedications.06");
                if(MedicationGroupMedicationGroup["HasDosage"]  == true)
                {                       
                    if (_val == null) 
                    {
                        MedicationGroup["eMedications.06"] = V3NOT_RECORDED;
                        MedicationGroup["MedicationDosageUnits"] = NOT_RECORDED;
                        v2Array.push({ section: "E18", element: "E18_08", val: V2NOT_RECORDED });
                    }
                    else 
                    {
                        MedicationGroup["MedicationDosageUnits"] = setCodeText("eMedications.06", _val);
                        v2Array.push({ section: "E18", element: "E18_06", val: SetD2("eMedications.06",_val) });
                        MedicationGroup["eMedications.06"] = _val;
                    }
                }
                else
                {
                    MedicationGroup["eMedications.06"] = v3NOT_APPLICABLE;
                    MedicationGroup["MedicationDosageUnits"] = NOT_APPLICABLE;
                    v2Array.push({ section: "E18", element: "E18_08", val: v2NOT_APPLICABLE});
                };
        
                //eMedications.07/////////////////
                _val = getValue(elementList, "eMedications.07");
                if((eMedication.IsValid ==true) && (MedicationGroup.MedicationGiven == true))
                {
                    if (_val == null) 
                    {
                        MedicationGroup["eMedications.07"] = V3NOT_RECORDED;
                        MedicationGroup["ResponsetoMedication"] = NOT_RECORDED;
                        v2Array.push({ section: "E18", element: "E18_07", val: V2NOT_RECORDED });
                    }
                    else 
                    {
                        MedicationGroup["eMedications.07"] = _val;
                        MedicationGroup["ResponsetoMedication"] = setCodeText("eMedications.07", _val);
                        v2Array.push({ section: "E18", element: "E18_07", val: SetD2("eMedications.07",_val) });
                    }
                }
                else
                {
                    MedicationGroup["eMedications.07"] = v3NOT_APPLICABLE;
                    MedicationGroup["ResponsetoMedication"] = NOT_APPLICABLE;
                    v2Array.push({ section: "E18", element: "E18_07", val: v2NOT_APPLICABLE});
                };
        
                //eMedications.08////////////
                _val = getValue(elementList, "eMedications.08");
                if((eMedication.IsValid ==true) && (MedicationGroup.MedicationGiven == true))
                {
                    if (_val == null) 
                    {
                        MedicationGroup["eMedications.08"] = V3NOT_RECORDED;
                        MedicationGroup["MedicationComplication"] = NOT_RECORDED;
                        v2Array.push({ section: "E18", element: "E18_08", val: V2NOT_RECORDED });
                    }
                    else 
                    {
                        var arr1 = [];
                        var arr2 = [];
                        var arr3 = []
                        for (var i = 0; i < _val.length; i++) 
                        {
                            if((val[i] !=null) && (arr1.indexOf(val[i]) >-1))
                            {
                                arr1.push(_val);
                                arr2.push(SetV2("eMedications.08", _val))
                                arr3.push(setCodeText("eMedications.08", _val))                        
                            }
                        };
                        MedicationGroup["eMedications.08"] = arr1.slice(0);
                        MedicationGroup["MedicationComplication"] = arr3.slice(0);
                        v2Array.push({ section: "E18", element: "E18_08", val:arr2.slice(0)  });
                    }
                }
                else
                {
                    MedicationGroup["eMedications.08"] = v3NOT_APPLICABLE;
                    MedicationGroup["MedicationComplication"] = NOT_APPLICABLE;
                    v2Array.push({ section: "E18", element: "E18_08", val: v2NOT_APPLICABLE});
                };
        
        
                //eMedications.09//////////////
                _val = getValue(elementList, "eMedications.09");
                if((eMedication.IsValid ==true) && (MedicationGroup.MedicationGiven == true))
                {
                    if (_val == null)
                    {
                        if(isRequiredStateElement("eMedications.09"))
                        {
                            MedicationGroup["eMedications.09"] = V3NOT_RECORDED;
                            MedicationGroup["HealthcareProfessionalID"] = NOT_RECORDED;
                            v2Array.push({ section: "E18", element: "E18_09", val: V2NOT_RECORDED });
                        }            
                        else
                        {
                            MedicationGroup["eMedications.09"] = v3NOT_REPORTING;
                            MedicationGroup["HealthcareProfessionalID"] = NOT_REPORTING;
                            v2Array.push({ section: "E18", element: "E18_09", val: v2NOT_REPORTING });
                        }
                    }
                    else 
                    {
                        MedicationGroup["eMedications.09"] = _val;
                        MedicationGroup["HealthcareProfessionalID"] = _val;
                        v2Array.push({ section: "E18", element: "E18_09", val: SetD2("eMedications.09",_val) });                
                    }
                }
                else
                {
                    MedicationGroup["eMedications.09"] = v3NOT_APPLICABLE;
                    MedicationGroup["HealthcareProfessionalID"] = NOT_APPLICABLE;
                    v2Array.push({ section: "E18", element: "E18_09", val: v2NOT_APPLICABLE});
                }; 
        
                //eMedications.10////////////
                _val = getValue(elementList, "eMedications.10");
                if((eMedication.IsValid ==true) && (MedicationGroup.MedicationGiven == true))
                {
                    if (_val == null) 
                    {
                        MedicationGroup["eMedications.10"] = V3NOT_RECORDED;
                        MedicationGroup["RoleTypeofPersonAdministeringMedication"] = NOT_RECORDED;
                    }
                    else 
                    {
                        MedicationGroup["eMedications.10"] = _val;
                        MedicationGroup["RoleTypeofPersonAdministeringMedication"] = setCodeText("eMedications.10", _val);
                    }
                }
                else
                {
                    MedicationGroup["eMedications.10"] = v3NOT_APPLICABLE;
                    MedicationGroup["RoleTypeofPersonAdministeringMedication"] = NOT_APPLICABLE;
        
                };
        
                //eMedications.11///////////
                _val = getValue(elementList, "eMedications.11");
                if((eMedication.IsValid ==true) && (MedicationGroup.MedicationGiven == true))
                {
                    if (_val == null) 
                    {
                        MedicationGroup["eMedications.11"] = null;
                        MedicationGroup["MedicationAuthorization"] = null;
                        v2Array.push({ section: "E18", element: "E18_10", val: null });                
                    }
                    else 
                    {
                        v2Array.push({ section: "E18", element: "E18_10", val: SetD2("eMedications.11",_val) });                
                        MedicationGroup["eMedications.11"] = _val;
                        MedicationGroup["MedicationAuthorization"] = setCodeText("eMedications.11", _val);
                    }
                }
                else
                {
                    MedicationGroup["eMedications.11"] = null;
                    MedicationGroup["MedicationAuthorization"] = null;
                    v2Array.push({ section: "E18", element: "E18_10", val: null });                
                };
        
                //eMedications.12/////////////
                _val = getValue(elementList, "eMedications.12");
                if((eMedication.IsValid ==true) && (MedicationGroup.MedicationGiven == true))
                {
                    if (_val == null) 
                    {
                        MedicationGroup["eMedications.12"] = null;
                        MedicationGroup["MedicationAuthorizingPhysician"] = null;
                        v2Array.push({ section: "E18", element: "E18_11", val: null });                
                    }
                    else 
                    {
                        MedicationGroup["MedicationAuthorizingPhysician"] = _val;
                        v2Array.push({ section: "E18", element: "E18_11", val: _val });                
                        MedicationGroup["eMedications.12"] = _val;
                    }
                }
                else
                {
                    MedicationGroup["eMedications.12"] = null;
                    MedicationGroup["MedicationAuthorizingPhysician"] = null;
                    v2Array.push({ section: "E18", element: "E18_11", val: null });                
        
                };
        
            };
            */
            return eMedications

        };
var seteOther = function (businessObject) {
            var eOther = new Object();
            /*
            ////////Check for cancelled calls, Standby, non-patient
        
            var group = ["4212007","4212009","4212011","4212023", "4212025", "4212039","4212041","4212043"]; 
            //Calls without patient interaction]; //Calls without patient interaction
            if ((eResponse.StandBy == false) && (group.indexOf(eDisposition["eDisposition.12"]) >-1 ))
            {
                eOther.IsCallValid = false;
            }
            else
            {
                eOther.IsCallValid = true;
            };
            var v2Array = [];
        
            var eOtherObject = new Object()
            eOtherGropuObject = getNEMSISSection(businessObject, "eOther")    
        
        
            //eOther.01////////
            _val = getValue(businessObject.elements, "eOther.01");
            if(eOther.IsCallValid == true)
            {
                if (_val == null)
                {
                    v2Array.push({ section: "E23", element: "E23_01", val: v2NOT_KNOWN });
                    eOther["eOther.01"] = null;
                    eOther["ReviewRequested"] = null;
                }
                else
                {
                    v2Array.push({ section: "E23", element: "E23_01", val: SetD2("eOther.01", _val) });
                    eOther["eOther.01"] = _val;
                    eOther["ReviewRequested"] = setCodeText("eOther.01", _val);
                }
            };
        
        
            //eOther.02//////////
            _val = getValue(businessObject.elements, "eOther.02");
            if(eOther.IsCallValid ==true)  //If call Is Valid
            {
                if (_val == null)
                {
                    v2Array.push({ section: "E23", element: "E23_02", val: v2NOT_KNOWN });
                    eOther["eOther.02"] = null;
                    eOther["PotentialSystemofCareSpecialtyRegistryPatient"] = null;
                }
                else
                {
                    var arr1 = [];
                    var arr2 = [];
                    var arr3 = [];
                    for (var i = 0; i < _val.length; i++) 
                    {
                        if(_val !=null)
                        {
                            arr1.push(_val);
                            arr2.push(setV2("eOther.03", _val));
                            arr3.push(setCodeText("eOther.03", _val));
                        }
                    }
                };
                eOther["eOther.02"] = arr1.slice(0);
                eOther["PotentialSystemofCareSpecialtyRegistryPatient"] = arr3.slice(0);
                v2Array.push({ section: "E23", element: "E23_02", val: arr2.slice(0) });
            }
            else
            {
                v2Array.push({ section: "E23", element: "E23_02", val: v2NOT_KNOWN });
                eOther["eOther.02"] = null;
                eOther["PotentialSystemofCareSpecialtyRegistryPatient"] = null;
            };
        
        
            ///////////////////eOther.EMSCrewMemberGroup
            _sectionIndex = getSectionIndex(businessObject.sections[i].attributes, "eOther.EMSCrewMemberGroup");
            for (var x = 0; x < _sectionIndex.length; x++) 
            {
                var EMSCrewMemberGroupElements = businessObject.sections[_sectionIndex[x]].attributes.elements
            
                //eOther.03//////////
                _val = getValue(EMSCrewMemberGroupElements, "eOther.03");
                if(eOther.IsCallValid == true)  //Wouldn't use protective equipment on a no call
                {
                    if (_val == null)
                    {
                        v2Array.push({ section: "E23", element: "E23_03", val: null });                
                        EMSCrewMemberGroup["eOther.03"] = null;
                        EMSCrewMemberGroup["PersonalProtectiveEquipmentUsed"] = null;
                    }
                    else
                    {
                        var arr1 = [];
                        var arr2 = [];
                        var arr3 = [];
                        for (var i = 0; i < _val.length; i++) 
                        {
                            if(_val!=null)
                            {
                                arr1.push(_val);
                                arr2.push(setV2("eOther.04", _val));
                                arr3.push(setCodeText("eOther.04", _val));
                            }
                        };
                    };            
                    EMSCrewMemberGroup["eOther.02"] = arr1.slice(0);
                    eOther["PersonalProtectiveEquipmentUsed"] = arr3.slice(0);
                    v2Array.push({ section: "E23", element: "E23_03", val: arr2.slice(0) });                            
                }
            };
        
            //eOther.04///////////
            _val = getValue(EMSCrewMemberGroup, "eOther.04");
            if(eOther.IsValid == true)
            {
                if (_val == null)
                {
                    EMSCrewMemberGroup["eOther.04"] = null;
                    EMSCrewMemberGroup["CrewMemberID"] = null;
                }
                else
                {
                    EMSCrewMemberGroup["eOther.04"] = _val;
                    EMSCrewMemberGroup["CrewMemberID"] = _val;
                }
            };
        
            //eOther.05/////////
            _val = getValue(EMSCrewMemberGroup, "eOther.05");
            eOther["WorkInjury"] = false;
            if(eOther.IsCallValid == true)  //Wouldn't use protective equipment on a no call
            {
                if (_val == null)
                {
                    v2Array.push({ section: "E23", element: "E23_05", val: V2NOT_RECORDED });
                    EMSCrewMemberGroup["eOther.05"] = V3NOT_RECORDED;        
                    EMSCrewMemberGroup["SuspectedEMSWorkRelatedExposureInjuryorDeath"] = V3NOT_RECORDED;        
                }
                else 
                {
                    eOther["WorkInjury"] = true;
                    v2Array.push({ section: "E23", element: "E23_05", val: SetD2("eOther.05", _val) });
                    EMSCrewMemberGroup["eOther.05"] = _val;
                    EMSCrewMemberGroup["SuspectedEMSWorkRelatedExposureInjuryorDeath"] = setCodeText("eOther.05", _val);                
                }
            }
            else
            {
                v2Array.push({ section: "E23", element: "E23_05", val: v2NOT_APPLICABLE });
                EMSCrewMemberGroup["eOther.05"] = v3NOT_APPLICABLE;        
                EMSCrewMemberGroup["SuspectedEMSWorkRelatedExposureInjuryorDeath"] = NOT_APPLICABLE;
            };
        
            //eOther.06/////////
            _val = getValue(businessObject.elements, "eOther.06");
            if(eOther.WorkInjury ==true)
            {
                if (_val == null)
                {
                    if (isRequiredStateElement("eOther.06"))
                    {
                        EMSCrewMemberGroup["eOther.06"] = v3NOT_RECORDED;
                        EMSCrewMemberGroup["TypeofWorkRelatedInjuryDeathorSuspectedExposure"] = NOT_RECORDED;
                        v2Array.push({ section: "E23", element: "E23_06", val: V2NOT_RECORDED });
                    }
                    else
                    {
                        EMSCrewMemberGroup["TypeofWorkRelatedInjuryDeathorSuspectedExposure"] = NOT_REPORTING;
                        EMSCrewMemberGroup["eOther.06"] = v3NOT_REPORTING;
                        v2Array.push({ section: "E23", element: "E23_06", val: v2NOT_REPORTING });
                    }            
                }
                else 
                {
                    var arr1 = [];
                    var arr2 = [];
                    var arr3 = [];
                    for (var i = 0; i < _val.length; i++) 
                    {
                        if(_val!=null)
                        {
                            arr1.push(_val);
                            arr2.push(setV2("eOther.06", _val));
                            arr3.push(setCodeText("eOther.06", _val));
                        }
                    };
                
                    EMSCrewMemberGroup["eOther.06"] = arr1.slice(0);
                    EMSCrewMemberGroup["TypeofWorkRelatedInjuryDeathorSuspectedExposure"] = arr3.slice(0);
                    v2Array.push({ section: "E23", element: "E23_06", val: arr2.slice(0) });
                }
            }
            else
            {
                EMSCrewMemberGroup["TypeofWorkRelatedInjuryDeathorSuspectedExposure"] = NOT_APPLICABLE;
                EMSCrewMemberGroup["eOther.06"] = v3NOT_APPLICABLE;
                v2Array.push({ section: "E23", element: "E23_06", val: v2NOT_APPLICABLE });
            };
        
        
            ///////////////////////////
            //eOther.07////////
            _val = getValue(businessObject.elements, "eOther.07");
            if(eOther.IsCallValid == true)  
            {
                if (_val == null)
                {
                    EMSCrewMemberGroup["eOther.07"] = null;
                    EMSCrewMemberGroup["NaturalSuspectedIntentionalorUnintentionalDisaster"] = null;
                    v2Array.push({ section: "E23", element: "E23_04", val: null });
                }
                else
                {
                    var arr1 = [];
                    var arr2 = [];
                    var arr3 = [];
                    for (var i = 0; i < _val.length; i++) 
                    {
                        if(_val!=null)
                        {
                            arr1.push(_val);
                            arr2.push(setV2("eOther.07", _val));
                            arr3.push(setCodeText("eOther.07", _val));
                        }
                    };
                    EMSCrewMemberGroup["eOther.07"] = arr1.slice(0);
                    EMSCrewMemberGroup["NaturalSuspectedIntentionalorUnintentionalDisaster"] = arr3.slice(0);
                    v2Array.push({ section: "E23", element: "E23_04", val: arr2.slice(0) });
                }
            }
            else
            {
                EMSCrewMemberGroup["eOther.07"] = null;
                EMSCrewMemberGroup["NaturalSuspectedIntentionalorUnintentionalDisaster"] = null;
                v2Array.push({ section: "E23", element: "E23_04", val: null });
            };
        
        
            //eOther..08//////////
            _val = getValue(businessObject.elements, "eOther.08");
            if(eOther.IsCallValid == true)  //Wouldn't use protective equipment on a no call
            {
                if (_val == null)
                {
                    if (isRequiredStateElement("eOther.08"))
                    {
                        eOther["eOther.08"] = v3NOT_RECORDED;
                        eOther["CrewMemberCompletingthisReport"] = NOT_RECORDED;
                        v2Array.push({ section: "E23", element: "E23_10", val: v2NOT_RECORDED });
                    }
                    else
                    {
                        eOther["CrewMemberCompletingthisReport"] = NOT_RECORDED;
                        eOther["eOther.08"] = v3NOT_REPORTING;
                        v2Array.push({ section: "E23", element: "E23_10", val: v2NOT_REPORTING });
                    }
                }
                else
                {
                    eOther["eOther.08"] = _val;
                    eOther["CrewMemberCompletingthisReport"] = setCodeText("eOther.08", _val);
                    v2Array.push({ section: "E23", element: "E23_10", val: D2Val("eOther.08", _val) });
                }
            }
            else
            {
                eOther["CrewMemberCompletingthisReport"] = NOT_APPLICABLE;
                eOther["eOther.08"] = v3NOT_APPLICABLE;
                v2Array.push({ section: "E23", element: "E23_10", val: v2NOT_APPLICABLE});
            };
        
            ////////////////////////////
        
            ///////////////////eOther.FileGroup
            if(eOther.IsCallValid ==true)
            {
                _sectionIndex = getSectionIndex(businessObject.sections[i].attributes, "eOther.FileGroup");
                for (var x = 0; x < _sectionIndex.length; x++) 
                {
                    var FileGroupElements = businessObject.sections[_sectionIndex[x]].attributes.elements
                    //eOther.09//////////
                    _val = getValue(FileGroupElements, "eOther.09");
                    if (_val == null)
                    {
                        FileGroup["ExternalElectronicDocuments"] = null;
                        FileGroup["eOther.09"] = null;
                    }
                    else
                    {
                        FileGroup["ExternalElectronicDocuments"] = setCodeText("eOther.09", _val);
                        FileGroup["eOther.09"] = _val;                
                    };
        
                    //eOther.10//////////
                    _val = getValue(FileGroupElements, "eOther.10");
                    if (_val == null)
                    {
                        FileGroup["FileAttachmentType"] = null;
                        FileGroup["eOther.10"] = null;
                    }
                    else
                    {
                        FileGroup["FileAttachmentType"] = _val;
                        FileGroup["eOther.10"] = _val;                
                    };
        
        
                    //eOther.11//////////
                    _val = getValue(FileGroupElements, "eOther.11");
                    if (_val == null)
                    {
                        FileGroup["FileAttachmentImage"] = null;
                        FileGroup["eOther.11"] = null;
                    }
                    else
                    {
                        FileGroup["FileAttachmentImage"] = _val;
                        FileGroup["eOther.11"] = _val;
                    }
                };
                if((eOther.IsCallValid==true) && eDispostion.HasPatient==true)
                {
                    _sectionIndex = getSectionIndex(businessObject.sections[i].attributes, "eOther.SignatureGroup");
                    for (var x = 0; x < _sectionIndex.length; x++) 
                    {
                        var SignatureElements = businessObject.sections[_sectionIndex[x]].attributes.elements
                        //Other.12////////
        
                        _val = getValue(SignatureElements , "eOther.12");
                        if (_val == null)
                        {
                            SignatureGroup["TypeofPersonSigning"] = null;
                            SignatureGroup["eOther.12"] = null;
                        }
                        else
                        {
                            SignatureGroup["eOther.12"] = setCodeText("eOther.12", _val);
                            SignatureGroup["eOther.12"] = _val;
                        };
        
                        //eOther.13
                        _val = getValue(SignatureElements , "eOther.13");
                        if (_val == null)
                        {
                            SignatureGroup["SignatureReason"] = null;
                            SignatureGroup["eOther.13"] = null;
                        }
                        else
                        {
                            SignatureGroup["eOther.13"] = setCodeText("eOther.13",_val);
                            SignatureGroup["eOther.13"] = _val;
                        };
        
                        //ether.14/////////
                        _val = getValue(SignatureElements , "eOther.14");
                        if (_val == null)
                        {
                            SignatureGroup["TypeOfPatientRepresentative"] = null;
                            SignatureGroup["eOther.14"] = null;
                        }
                        else
                        {                
                            SignatureGroup["TypeOfPatientRepresentative"] = setCodeText("eOther.14",_val);
                            SignatureGroup["eOther.14"] = _val;
                        };
        
                        //eOther.15//////
                        _val = getValue(SignatureElements , "eOther.15");
                        if (_val == null)
                        {
                            SignatureGroup["SignatureStatus"] = null;
                            SignatureGroup["eOther.15"] = null;
                        }
                        else
                        {
                            SignatureGroup["SignatureStatus"] = setCodeText("eOther.15", _val);
                            SignatureGroup["eOther.15"] = _val;
                        };
        
                        //eOther.16/////////
                        _val = getValue(SignatureElements , "eOther.16");
                        if (_val == null)
                        {
                            SignatureGroup["SignatureFileName"] = null;
                            SignatureGroup["eOther.16"] = null;
        
                        }
                        else
                        {
                            SignatureGroup["SignatureFileName"] = setCodeText("eOther.16", _val) ;
                            SignatureGroup["eOther.16"] = _val;
                        };
        
                        //eOther.17////////
                        _val = getValue(SignatureElements , "eOther.17");
                        if (_val == null)
                        {
                            SignatureGroup["SignatureFileType"] = null;
                            SignatureGroup["eOther.17"] = null;
                        }
                        else
                        {
                            SignatureGroup["SignatureFileType"] = _val;
                            SignatureGroup["eOther.17"] = _val;
                        };
        
                        //eOther.18///////
                        _val = getValue(SignatureElements , "eOther.18");
                        if (_val == null)
                        {
                            SignatureGroup["SignatureGraphic"] = null;
                            SignatureGroup["eOther.18"] = null;
                        }
                        else
                        {
                            SignatureGroup["eOther.18"] = _val;
                            SignatureGroup["SignatureGraphic"] = _val;
                        };
        
                        //eOther.19//////////
                        _val = getValue(SignatureElements , "eOther.19");
                        if (_val == null)
                        {
                            SignatureGroup["DateTimeofSignature"] = null;
                            SignatureGroup["eOther.19"] = null;
                        }
                        else
                        {
                            SignatureGroup["eOther.19"] = _val;
                            SignatureGroup["DateTimeofSignature"] = _val;
                        };
        
                        //eOther.20///////
                        _val = getValue(SignatureElements , "eOther.20");
                        if (_val == null)
                        {
                            SignatureGroup["SignatureLastName"] = null;
                            SignatureGroup["eOther.20"] = null;
                        }
                        else
                        {
                            SignatureGroup["eOther.20"] = _val;
                            SignatureGroup["SignatureLastName"] = _val;
                        };
        
                        //eOther.21/////////
                        _val = getValue(SignatureElements , "eOther.21");
                        if (_val == null)
                        {
                            SignatureGroup["eOther.21"] = null;
                            SignatureGroup["SignatureFirstName"] = null;
                        }
                        else
                        {
                            SignatureGroup["eOther.21"] = _val;
                            SignatureGroup["SignatureFirstName"] = _val;
                        };
                    }
                }
                
            };
        };
        */
            return eOther;
        }
var seteOutcome = function (businessObject) {
            var eOutcome = new Object();
            /*
            var ExternalDataGroup = new Object();
                    
            ////////Check for cancelled calls, Standby, non-patient
        
            var group = ["4212007","4212009","4212011","4212023", "4212025", "4212039","4212041","4212043"]; //Calls without patient interaction
            if ((eResponse.StandBy == false) && (group.indexOf(eDisposition["eDisposition.12"]) >-1 ))
            {
                eOutcome.IsValid = false;
            }
            else
            {
                eOutcome.IsValid = true;
            };
            var v2Array = [];
        
            var eOutcomeObject = new Object()
            eOutcomeObject = getNEMSISSection(businessObject, "eOutcome")
        
        
            //eOutcome.01/////////
            _val = getValue(elementList, "eOutcome.01");
            if(eOutcome.IsValid ==true)
            {
                if (_val == null)
                {
                    eOutcome["EmergencyDepartmentDisposition"] = NOT_RECORDED;
                    eOutcome["eOutcome.01"] = V3NOT_RECORDED;
                    v2Array.push({ section: "E22", element: "E22_01", val: v2NOT_RECORDED });
                }
                else
                {
                    eOutcome["EmergencyDepartmentDisposition"] = setCodeText("eOutcome.01", _val);
                    v2Array.push({ section: "E22", element: "E22_01", val: setV2("eOutcome.01", _val) });
                    eOutcome["eOutcome.01"] = _val;
        
                }
            }    
            else
            {
                eOutcome["EmergencyDepartmentDisposition"] = NOT_APPLICABLE;
                eOutcome["eOutcome.01"] = v3NOT_APPLICABLE;
                v2Array.push({ section: "E22", element: "E22_01", val: v2NOT_APPLICABLE });
            };
        
            //eOutcome.02/////////
            _val = getValue(elementList, "eOutcome.02");
            if(eOutcome.IsValid ==true)
            {
                if (_val == null)
                {        
                    eOutcome["eOutcome.02"] = V3NOT_RECORDED;
                    eOutcome["HospitalDisposition"] = NOT_RECORDED;
                    v2Array.push({ section: "E22", element: "E22_02", val: v2NOT_RECORDED });
                }
                else
                {
                    eOutcome["eOutcome.02"] = _val;
                    eOutcome["HospitalDisposition"] = setCodeText("eOutcome.02", _val);
                    v2Array.push({ section: "E22", element: "E22_02", val: setV2("eOutcome.02", _val) });
                }
            }
            else
            {
                eOutcome["eOutcome.02"] = v3NOT_APPLICABLE;
                eOutcome["HospitalDisposition"] = NOT_APPLICABLE;
                v2Array.push({ section: "E22", element: "E22_02", val: v2NOT_APPLICABLE });
            };
        
        
            /////////////////////////////////
            if(eOutcome.IsValid ==true)
            {
                _sectionIndex = getSectionIndex(businessObject.sections[xx].attributes, "eOutcome.ExternalDataGroup");
                for (var x = 0; x < _sectionIndex.length; x++)
                {
                    var elementList = businessObject.elements.sections[i].attributes.elements;
                    //eOutcome.03/////////
                    _val = getValue(elementList, "eOutcome.03");
                    if (_val == null)
                    {
                        ExternalDataGroup["eOutcome.03"] = null;
                        ExternalDataGroup["ExternalReportIDNumberType"] = null;
                    }
                    else
                    {
                        ExternalDataGroup["eOutcome.03"] = _val;
                        ExternalDataGroup["ExternalReportIDNumberType"] = setCodeText("eOutcome.03", _val);
                    };
        
                    //eOutcome.04/////////
                    _val = getValue(businessObject.elements.sections[i].attributes.elements, "eOutcome.04");
                    if (_val == null)
                    {
                        ExternalDataGroup["eOutcome.04"] = null;
                        ExternalDataGroup["ExternalReportIDNumber"] = null;
                    }
                    else
                    {
                        ExternalDataGroup["eOutcome.04"] = _val;
                        ExternalDataGroup["ExternalReportIDNumber"] = _val;
                    };
        
        
                    //eOutcome.05/////////
                    _val = getValue(businessObject.elements.sections[i].attributes.elements, "eOutcome.05");
                    if (_val == null)
                    {
                        ExternalDataGroup["eOutcome.05"] = null;
                        ExternalDataGroup["OtherReportRegistryType"] = null;
                    }
                    else
                    {
                        ExternalDataGroup["eOutcome.05"] = _val;
                        ExternalDataGroup["OtherReportRegistryType"] = _val;
                    }
                }
            };
            //////////////////////////////////////////
        
            //eOutcome.06/////////
            _val = getValue(elementList, "eOutcome.06");
            if(eOutcome.IsValid ==true)
            {
                if (_val == null)
                {
                    eOutcome["eOutcome.06"] = null;
                    eOutcome["EmergencyDepartmentChiefComplaint"] = null;
                }
                else
                {
                    eOutcome["EmergencyDepartmentChiefComplaint"] = _val;            
                    eOutcome["eOutcome.06"] = _val;
                }
            }
            else
            {
                eOutcome["eOutcome.06"] = null;
                eOutcome["EmergencyDepartmentChiefComplaint"] = null;
            };
        
            //eOutcome.07/////////
            _val = getValue(elementList, "eOutcome.07");
            if(eOutcome.IsValid ==true)
            {
                if (_val == null)
                {
                    eOutcome["eOutcome.07"] = null;
                    eOutcome["FirstEDSystolicBloodPressure"] = null;
                }
                else
                {
                    eOutcome["FirstEDSystolicBloodPressure"] = _val;
                    eOutcome["eOutcome.07"] = _val;            
                }
            }
            else
            {
                eOutcome["eOutcome.07"] = null;
                eOutcome["FirstEDSystolicBloodPressure"] = null;
            };
        
            //eOutcome.08/////////
            _val = getValue(elementList, "eOutcome.08");
            if(eOutcome.IsValid ==true)
            {
                if (_val == null)
                {
                    eOutcome["eOutcome.08"] = null;
                    eOutcome["EmergencyDepartmentRecordedCauseofInjury"] = null;
                }
                else
                {
                    eOutcome["eOutcome.08"] = _val;
                    eOutcome["EmergencyDepartmentRecordedCauseofInjury"] = _val;
                }
            }
            else
            {
                eOutcome["eOutcome.08"] = null;
                eOutcome["EmergencyDepartmentRecordedCauseofInjury"] = null;
            };
        
            //eOutcome.09/////////
            _val = getValue(elementList, "eOutcome.09");
            if(eOutcome.IsValid ==true)
            {
                if (_val == null)
                {
                    eOutcome["eOutcome.09"] = null;
                    eOutcome["EmergencyDepartmentProcedures"] = null;
                }
                else
                {
                    eOutcome["EmergencyDepartmentProcedures"] = _val;
                    eOutcome["eOutcome.09"] = _val;
                }
            }
            else
            {
                eOutcome["eOutcome.09"] = null;
                eOutcome["EmergencyDepartmentProcedures"] = null;         
            };
        
        
            //eOutcome.10/////////
            _val = getValue(elementList, "eOutcome.10");
            if(eOutcome.IsValid ==true)
            {
                if (_val == null)
                {
                    eOutcome["eOutcome.10"] = null;
                    eOutcome["EmergencyDepartmentDiagnosis"] = null;
                }
                else
                {
                    for (var i = 0; i < _val.length; i++)
                    {
                        if((val[i] !=null) && (arr1.indexOf(val[i]) >-1))
                            {
                            arr1.push(val[i]);
                            arr2.push(setCodeText("eOutcome.03", _val));
                        }
                    }
                    eOther["eOutcome.10"] = arr1.slice(0);
                    eOther["EmergencyDepartmentDiagnosis"] = arr2.slice(0);            
                }
            }
            else
            {
                eOutcome["eOutcome.10"] = null;
                eOutcome["EmergencyDepartmentDiagnosis"] = null;
            };
        
        
            //eOutcome.11/////////
            _val = getValue(elementList, "eOutcome.11");
            if(eOutcome.IsValid ==true)
            {
                if (_val == null)
                {
                    eOutcome["eOutcome.11"] = null;
                    eOutcome["DateTimeofHospitalAdmission"] = null;
                }
                else
                {
                    eOutcome["DateTimeofHospitalAdmission"] = _val;
                    eOutcome["eOutcome.11"] = _val;
                }
            }
            else
            {
                eOutcome["eOutcome.11"] = null;
                eOutcome["DateTimeofHospitalAdmission"] = null;
            };
        
            //eOutcome.12/////////
            _val = getValue(elementList, "eOutcome.12");
            if(eOutcome.IsValid ==true)
            {
                if (_val == null)
                {
                    eOutcome["eOutcome.11"] = null;
                    eOutcome["HospitalProcedures"] = null;
                }
                else
                {
                    var arr1 = [];
                    var arr2 = [];
                    for (var i = 0; i < _val.length; i++)
                    {
                        if((val[i] !=null) && (arr1.indexOf(val[i]) >-1))
                            {
                            arr1.push(val[i]);
                            arr2.push(setCodeText("eOutcome.11", _val));
                        }
                    }
                    eOther["eOutcome.12"] = arr1.slice(0);
                    eOutcome["HospitalProcedures"] = arr2.slice(0);
                }
            }
            else
            {
                eOutcome["eOutcome.11"] = null;
                eOutcome["HospitalProcedures"] = null;
            };
        
            //eOutcome.13/////////
            _val = getValue(elementList, "eOutcome.13");
            if(eOutcome.IsValid ==true)
            {
                if (_val == null)
                {
                    eOutcome["eOutcome.13"] = null;
                    eOutcome["HospitalDiagnosis"] = null;
                }
                else
                {
                    var arr1 = [];
                    var arr2 = [];
                    for (var i = 0; i < _val.length; i++) 
                    {
                       if((val[i] !=null) && (arr1.indexOf(val[i]) >-1))
                            {
                            arr1.push(val[i]);
                            arr2.push(setCodeText("eOutcome.13", _val));
                        }
                    }
                    eOther["eOutcome.13"] = arr1.slice(0);
                    eOutcome["HospitalDiagnosis"] = arr2.slice(0);        
                }
            }
            else
            {
                eOutcome["eOutcome.13"] = null;
                eOutcome["HospitalDiagnosis"] = null;
            };
        
            //eOutcome.14/////////
            _val = getValue(elementList, "eOutcome.14");
            if(eOutcome.IsValid ==true)
            {
                if (_val == null)
                {
                    eOutcome["eOutcome.14"] = null;
                    eOutcome["TotalICULengthofStay"] = null;
                }
                else
                {
                    eOutcome["TotalICULengthofStay"] = _val;
                    eOutcome["eOutcome.14"] = _val;
                }
            }
            else
            {
                eOutcome["eOutcome.14"] = null;
                eOutcome["TotalICULengthofStay"] = null;
            };
        
            //eOutcome.15/////////
            _val = getValue(elementList, "eOutcome.15");
            if(eOutcome.IsValid ==true)
            {
                if (_val == null)
                {
                    eOutcome["eOutcome.15"] = null;
                    eOutcome["TotalVentilatorDays"] = null;
                }
                else
                {
                    eOutcome["TotalVentilatorDays"] = _val;
                    eOutcome["eOutcome.15"] = _val;
                }
            }
            else
            {
                eOutcome["eOutcome.15"] = null;
                eOutcome["TotalVentilatorDays"] = null;
            };
        
            //eOutcome.16/////////
            _val = getValue(elementList, "eOutcome.16");
            if(eOutcome.IsValid ==true)
            {
                if (_val == null)
                {
                    eOutcome["eOutcome.16"] = null;
                    eOutcome["DateTimeofHospitalDischarge"] = null;
                }
                else
                {
                    eOutcome["DateTimeofHospitalDischarge"] = _val;
                    eOutcome["eOutcome.16"] = _val;
                }
            }
            else
            {
                eOutcome["eOutcome.16"] = null;
                eOutcome["DateTimeofHospitalDischarge"] = null;
            };
        
            //eOutcome.17/////////
            _val = getValue(elementList, "eOutcome.17");
            if(eOutcome.IsValid ==true)
            {
                if (_val == null)
                {
                    eOutcome["eOutcome.17"] = null;
                    eOutcome["OutcomeatHospitalDischarge"] = null;
                }
                else
                {
                    eOutcome["OutcomeatHospitalDischarge"] = setCodeText("eOutcome.17", _val);
                    eOutcome["eOutcome.17"] = _val;            
                }
            }
            else
            {
                eOutcome["eOutcome.17"] = null;
                eOutcome["OutcomeatHospitalDischarge"] = null;
            };
            */
            return eOutcome;
        };
var setePatient = function (businessObject) {
            var ePatient = new Object();

            /*
        
            ////////Check for cancelled calls, Standby, non-patient
        
            var group = ["4212007","4212009","4212011","4212023", "4212025", "4212039","4212041","4212043"]; 
            //Calls without patient interaction]; //Calls without patient interaction
            if ((eResponse.StandBy == false) && (group.indexOf(eDisposition["eDisposition.12"]) >-1 ))
            {
                ePatient.IsCallValid = false;
            }
            else
            {
                ePatient.IsCallValid = true;
            };
            var v2Array = [];
        
            var ePatientObject = new Object()
            ePatientGroupObject = getNEMSISSection(businessObject, "eOther")    
        
            //////////////////////ePatient.01
            _val = getValue(elementList, "ePatient.01");
            if(Call.HasPatient==true)
            {
                if (_val == null)
                {
                    ePatient["ePatient.01"] = null;
                    ePatient["EMSPatientID"] = null;
                }
                else
                {
                    ePatient["ePatient.01"] = _val;
                    ePatient["EMSPatientID"] = _val;
                }
            }
            else
            {
                ePatient["ePatient.01"] = null;
                ePatient["EMSPatientID"] = null;
            };
        
            //////////////////////ePatient.02
        
            _val = getValue(elementList, "ePatient.02");
            if(Call.HasPatient==true)
            {
                if (_val == null) 
                {
                    PNValue = getPertinentNegative("ePatient.02")
                    if (PNValue != null) 
                    {
                        if (PNValue == "8801019")
                        {
                            ePatient["ePatient.02"] = PN_REFUSED_IS_NILLABLE;
                            ePatient["LastName"] = "8801019";
                            v2Array.push({ section: "E06", element: "E06_01", val: v2NOT_KNOWN });
                        }
                        else if (PNValue == "8801023")
                        {
                            ePatient["ePatient.02"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                            ePatient["LastName"] = "8801023";
                            v2Array.push({ section: "E06", element: "E06_01", val: v2NOT_KNOWN });
                        }
                    }
                    else 
                    {
                        if (isRequiredStateElement("ePatient.02"))
                        {
                            ePatient["ePatient.02"] = v3NOT_RECORDED;
                            ePatient["ePatient.02"] = NOT_RECORDED;
                            v2Array.push({ section: "E06", element: "E06_01", val: v2NOT_RECORDED });
                        }
                        else
                        {
                            ePatient["ePatient.02"] = v3NOT_REPORTING;
                            ePatient["LastName"] = NOT_REPORTING;
                            v2Array.push({ section: "E06", element: "E06_01", val: v2NOT_REPORTING });
                        }
                    }
                }
                else
                {
                    ePatient["ePatient.02"] = _val;
                    ePatient["LastName"] = _val;
                    v2Array.push({ section: "E06", element: "E06_01", val: _val });
                }
            }
            else
            {
                ePatient["ePatient.02"] = v3NOT_APPLICABLE;
                ePatient["LastName"] = NOT_APPLICABLE;
                v2Array.push({ section: "E06", element: "E06_01", val: v2NOT_APPLICABLE });
            };
        
            ///////////ePatient.03////////
            _val = getValue(elementList, "ePatient.03");
            if(Call.HasPatient==true)
            {
                if (_val == null)
                {
                    PNValue = getPertinentNegative("ePatient.03")
                    if (PNValue != null)
                    {
                        if (PNValue == "8801019")
                        {
                            ePatient["FirstName"] = PN_REFUSED_IS_NILLABLE;
                            ePatient["ePatient.03"] = "8801019";
                            v2Array.push({ section: "E06", element: "E06_02", val: v2NOT_KNOWN });
                        }
        
                        else if (PNValue == "8801023")
                        {
                            ePatient["ePatient.03"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                            ePatient["FirstName"] = "8801023";
                            v2Array.push({ section: "E06", element: "E06_02", val: v2NOT_KNOWN });
                        }
                    }
                    else
                    {
                        if (isRequiredStateElement("ePatient.03"))
                        {
                            ePatient["ePatient.03"] = v3NOT_RECORDED;
                            ePatient["FirstName"] = NOT_RECORDED;
                            v2Array.push({ section: "E06", element: "E06_02", val: v2NOT_RECORDED });
                        }
                        else
                        {
                            ePatient["ePatient.03"] = v3NOT_REPORTING;
                            ePatient["FirstName"] = NOT_REPORTING;
                            v2Array.push({ section: "E06", element: "E06_02", val: v2NOT_REPORTING });
                        }
                    }
                }
                else
                {
                    ePatient["ePatient.03"] = _val;
                    ePatient["FirstName"] = _val;
                    v2Array.push({ section: "E06", element: "E06_02", val: _val });
                }
            }
            else
            {
                ePatient["ePatient.03"] = v3NOT_APPLICABLE;
                ePatient["FirstName"] = NOT_APPLICABLE;
                v2Array.push({ section: "E06", element: "E06_02", val: v2NOT_APPLICABLE });
            };
        
            ///////////ePatient.03////////
            _val = getValue(elementList, "ePatient.04");
            if(Call.HasPatient==true)
            {
                if (_val == null)
                {
                    ePatient["ePatient.04"] = null;
                    ePatient["MiddleInitialName"] = null;
                    v2Array.push({ section: "E06", element: "E06_03", val: null });
                }
                else
                {
                    ePatient["ePatient.04"] = _val;
                    ePatient["MiddleInitialName"] = _val;
                    v2Array.push({ section: "E06", element: "E06_03", val: _val });
                }
            }
            else
            {
                ePatient["ePatient.04"] = null;
                ePatient["MiddleInitialName"] = null;
                v2Array.push({ section: "E06", element: "E06_03", val: null });
            };
        
        
            ///////////ePatient.05////////
            _val = getValue(elementList, "ePatient.05");
            if(Call.HasPatient==true)
            {
                if (_val == null)
                {
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "ePatient.05", Description: "Patient Address Required" })
                    ePatient["ePatient.05"] = null;
                    ePatient["PatientsHomeAddress"] = null;
                    v2Array.push({ section: "E06", element: "E06_04", val: null });
                }
                else
                {
                    ePatient["ePatient.05"] = _val;
                    ePatient["PatientsHomeAddress"] = _val;
                    v2Array.push({ section: "E06", element: "E06_04", val: _val });
                }
            }
            else
            {
                ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "ePatient.05", Description: "Call/Transport does not include Patient" })
            };
        
        ///////////ePatient.06////////
        _val = getValue(elementList, "ePatient.06");
        if(Call.HasPatient==true)
        {
            if (_val == null)
            {
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "ePatient.05", Description: "Patient Address Required" });
                ePatient["ePatient.06"] = null;
                ePatient["PatientsHomeCity"] = null;
                v2Array.push({ section: "E06", element: "E06_05", val: v2NOT_RECORDED });
            }
            else
            {
                ePatient["ePatient.06"] = _val;
                ePatient["PatientsHomeCity"] = _val;
                v2Array.push({ section: "E06", element: "E06_05", val: _val });
            }
        }
        else
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "ePatient.05", Description: "Call/Transport does not include Patient" })
        };
        
        ///////////ePatient.07////////
        _val = getValue(elementList, "ePatient.07");
        if(Call.HasPatient==true)
        {
            if (_val == null)
            {
                if (isRequiredStateElement("ePatient.07"))
                {
                    ePatient["ePatient.07"] = v3NOT_RECORDED;
                    ePatient["PatientsHomeCounty"] = NOT_RECORDED;
                    v2Array.push({ section: "E06", element: "E06_06", val: v2NOT_RECORDED });
                }        
            }
            else
            {
                ePatient["PatientsHomeCounty"] = _val;
                ePatient["ePatient.07"] = _val;
                v2Array.push({ section: "E06", element: "E06_06", val: _val });
            }
        }
        else
        {
            ePatient["ePatient.07"] = v3NOT_APPLICABLE;
            ePatient["PatientsHomeCounty"] = NOT_APPLICABLE;
            v2Array.push({ section: "E06", element: "E06_06", val: v2NOT_APPLICABLE });
        };
        
        ///////////ePatient.08////////
        _val = getValue(elementList, "ePatient.08");
        if(Call.HasPatient==true)
        {
            if (_val == null)
            {
                if (isRequiredStateElement("ePatient.08"))
                {
                    ePatient["ePatient.08"] = v3NOT_RECORDED;
                    ePatient["PatientsHomeState"] = NOT_RECORDED;
                    v2Array.push({ section: "E06", element: "E06_07", val: v2NOT_RECORDED });
                }
            }
            else
            {
                ePatient["ePatient.08"] = _val;
                ePatient["PatientsHomeState"] = _val;
                v2Array.push({ section: "E06", element: "E06_07", val: _val });
            }
        }
        else
        {
            ePatient["ePatient.08"] = v3NOT_APPLICABLE;
            ePatient["PatientsHomeState"] = NOT_APPLICABLE;
            v2Array.push({ section: "E06", element: "E06_07", val: v2NOT_APPLICABLE });
        };
        
        
        ///////////ePatient.09////////
        _val = getValue(elementList, "ePatient.09");
        if(Call.HasPatient==true)
        {
            if (_val == null)
            {
                if (isRequiredStateElement("ePatient.09"))
                {
                    ePatient["ePatient.09"] = NIL_V3NOT_RECORDED;
                    ePatient["PatientsHomeZip"] = NOT_RECORDED;
                    v2Array.push({ section: "E06", element: "E06_08", val: v2NOT_RECORDED });
                }
            }
            else
            {
                ePatient["ePatient.09"] = _val;
                ePatient["PatientsHomeZip"] = _val;
                v2Array.push({ section: "E06", element: "E06_08", val: _val });
            }
        }
        else
        {
            ePatient["ePatient.09"] = v3NOT_APPLICABLE;
            ePatient["PatientsHomeZip"] = NOT_APPLICABLE;
            v2Array.push({ section: "E06", element: "E06_08", val: v2NOT_APPLICABLE });
        };
        
        
        ///////////ePatient.10////////
        _val = getValue(elementList, "ePatient.10");
        if(Call.HasPatient==true)
        {
            if (_val == null)
            {
                ePatient["ePatient.10"] = null;
                ePatient["PatientsHomeCountry"] = null;
                v2Array.push({ section: "E06", element: "E06_09", val: v2NOT_REPORTING });
            }
            else
            {
                ePatient["ePatient.10"] = _val;
                ePatient["PatientsHomeCountry"] = _val;
                v2Array.push({ section: "E06", element: "E06_09", val: _val });
            }
        }
        else
        {
            ePatient["ePatient.10"] = null;
            ePatient["PatientsHomeCountry"] = null;
            v2Array.push({ section: "E06", element: "E06_09", val: v2NOT_KNOWN });
        };
        
        
        ///////////ePatient.11////////
        _val = getValue(elementList, "ePatient.11");
        if(Call.HasPatient==true)
        {
            if (_val == null)
            {
                ePatient["ePatient.11"] = null;
                ePatient["PatientHomeCensusTract"] = null;
            }
            else
            {
                ePatient["PatientHomeCensusTract"] = _val;
                ePatient["ePatient.11"] = _val;
            }
        }
        else
        {
            ePatient["ePatient.11"] = null;
            ePatient["PatientHomeCensusTract"] = null;
        };
        
        ///////////ePatient.12////////
        _val = getValue(elementList, "ePatient.12");
        if(Call.HasPatient==true)
        {
            if (_val == null)
            {
                ePatient["ePatient.12"] = null;
                ePatient["SocialSecurityNumber"] = null;
            }
            else
            {
                ePatient["SocialSecurityNumber"] = _val;
                ePatient["ePatient.12"] = _val;    
            }
        }
        else
        {
            ePatient["ePatient.12"] = null;
            ePatient["SocialSecurityNumber"] = null;
        };
        
        
        ///////////ePatient.13////////
        _val = getValue(elementList, "ePatient.13");
        if(Call.HasPatient==true)
        {
            if (_val == null)
            {
                if (isRequiredStateElement("ePatient.13"))
                {
                    ePatient["ePatient.13"] = NIL_V3NOT_RECORDED;
                    ePatient["Gender"] = NOT_RECORDED;
                    v2Array.push({ section: "E06", element: "E06_11", val: v2NOT_REPORTING });
                }        
            }
            else
            {
                ePatient["Gender"] = setCodeText("ePatient.13", _val);
                ePatient["ePatient.13"] = _val;
                v2Array.push({ section: "E06", element: "E06_11", val: setV2("ePatient.13", _val) });
            }
        }
        else
        {
            ePatient["ePatient.13"] = v3NOT_APPLICABLE;
            ePatient["Gender"] = NOT_APPLICABLE;
            v2Array.push({ section: "E06", element: "E06_11", val: v2NOT_APPLICABLE });
        };
        
        
        ///////////ePatient.14////////
        _val = getValue(elementList, "ePatient.14");
        if(Call.HasPatient==true)
        {
            if (_val == null) 
            {
                if (isRequiredStateElement("ePatient.14")) 
                {
                    ePatient["ePatient.14"] = v3NOT_RECORDED;
                    ePatient["Race"] = NOT_RECORDED;
                    v2Array.push({ section: "E06", element: "E06_12", val: v2NOT_RECORDED });
                }
            }
            else 
            {
                var arr1 = [];
                var arr2 = [];
                var arr3 = [];
                for (var i = 0; i < _val.length; i++)
                {
                    if(_val!=null)
                    {
                        arr1.push(_val);
                        arr2.push(SetV2("ePatient.14", _val));
                        arr3.push(setCodeText("ePatient.14", _val));
                    }
                };
                v2Array.push({ section: "E06", element: "E06_12", val: arr2.slice(0) });
                ePatient["ePatient.14"] = arr1.slice(0);
                ePatient["Race"] = arr3.slice(0);
            }
        }
        else
        {
            ePatient["ePatient.14"] = v3NOT_APPLICABLE;
            ePatient["Race"] = NOT_APPLICABLE;
            v2Array.push({ section: "E06", element: "E06_12", val: v2NOT_APPLICABLE });
        };
        
        
        
        ///////////ePatient.15////////
        _val = getValue(elementList, "ePatient.15");
        if(Call.HasPatient==true)
        {
            if (_val == null) 
            {
                if (isRequiredStateElement("ePatient.15")) 
                {
                    ePatient["ePatient.15"] = v3NOT_RECORDED;
                    ePatient["Age"] = NOT_RECORDED;
                    v2Array.push({ section: "E06", element: "E06_14", val: v2NOT_RECORDED });    
                }        
            }
            else 
            {
                ePatient["ePatient.15"] = _val;
                ePatient["Age"] = _val;
                v2Array.push({ section: "E06", element: "E06_14", val: _val });
            }
        }
        else
        {
            ePatient["ePatient.15"] = v3NOT_APPLICABLE;
            ePatient["Age"] = NOT_APPLICABLE;
            v2Array.push({ section: "E06", element: "E06_14", val: v2NOT_APPLICABLE });    
        
        };
        
        ///////////ePatient.16////////
        _val = getValue(elementList, "ePatient.16");
        if(Call.HasPatient==true)
        {
            if (_val == null) 
            {
                if (isRequiredStateElement("ePatient.16")) 
                {
                    ePatient["ePatient.16"] = NIL_V3NOT_RECORDED;
                    ePatient["AgeUnits"] = NOT_RECORDED;
                    v2Array.push({ section: "E06", element: "E06_14", val: v2NOT_RECORDED });            
                }
            }
            else 
            {
                ePatient["ePatient.16"] = _val;
                ePatient["AgeUnits"] = setCodeText("ePatient.16", _val);
                v2Array.push({ section: "E06", element: "E06_14", val: SetV2("ePatient.16", _val) });
            }
        }
        else
        {
            ePatient["ePatient.16"] = v3NOT_APPLICABLE;
            ePatient["AgeUnits"] = NOT_APPLICABLE;
            v2Array.push({ section: "E06", element: "E06_14", val: v2NOT_APPLICABLE });            
        };
        
        ///////////ePatient.17////////
        _val = getValue(elementList, "ePatient.17");
        if(Call.HasPatient==true)
        {
            if (_val == null) 
            {
                PNValue = getPertinentNegative("ePatient.17")
                if (PNValue != null) 
                {
                    if (PNValue == "8801019")
                    {
                        ePatient["DateOfBirth"] = "8801019";
                        ePatient["ePatient.17"] = PN_REFUSED_IS_NILLABLE ;
                        v2Array.push({ section: "E06", element: "E06_16", val: v2NOT_KNOWN });
                    }
        
                    else if (PNValue == "8801023")
                    {
                        ePatient["ePatient.17"] = "8801023";
                        ePatient["DateOfBirth"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE ;
                        v2Array.push({ section: "E06", element: "E06_16", val: v2NOT_KNOWN });
                    }
                }
                else 
                {
                    if (isRequiredStateElement("ePatient.17"))
                    {
                        ePatient["ePatient.17"] = NIL_V3NOT_RECORDED;
                        ePatient["DateOfBirth"] = NOT_RECORDED;
                        v2Array.push({ section: "E06", element: "E06_16", val: v2NOT_RECORDED });
                    }
                    else 
                    {
                        ePatient["ePatient.17"] = NIL_V3NOT_REPORTING ;
                        ePatient["DateOfBirth"] = NOT_REPORTING;
                        v2Array.push({ section: "E06", element: "E06_16", val: v2NOT_REPORTING });
                    }
                }
            }
            else
            {
                ePatient["ePatient.17"] = _val;
                ePatient["DateOfBirth"] = _val;
                v2Array.push({ section: "E06", element: "E06_16", val: _val });
            }
        }
        else
        {
            ePatient["ePatient.17"] = v3NOT_APPLICABLE;
            ePatient["DateOfBirth"] = NOT_APPLICABLE;
            v2Array.push({ section: "E06", element: "E06_16", val: v2NOT_APPLICABLE });
        };
        
        
        //ePatient.18////////////
        _val = getValue(elementList, "ePatient.18");
        if(Call.HasPatient==true)
        {
            if (_val == null)
            {
                ePatient["ePatient.18"] = null;
                ePatient["PatientPhoneNumber"] = null;
                v2Array.push({ section: "E06", element: "E06_17", val: v2NOT_KNOWN });
            }
            else
            {
                sPatHomeNum ="";
                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _val.length; i++) {
                    var PhoneNumberType = setPhoneNumberType("ePatient.18", _val);
               
                    if (PhoneNumberType == "9913001")
                    {
                        arr1.push("FAX  " + _val);
                        arr2.push("9913001  " + _val);
                    }
                    else if (PhoneNumberType == "9913003")
                    {
                        arr1.push("HOME  " + _val);
                        arr1.push("9913003  " + _val);
                        sPatNum = _val;
                 
                    }
                    else if (PhoneNumberType == "9913005")
                    {
                        arr1.push("MOBILE  " + _val);
                        arr2.push("9913005  " + _val);               
                    }
                    else if (PhoneNumberType == "9913007")
                    {
                        arr1.push("PAGER " + _val);
                        arr2.push("9913007 " + _val);
                    }
                    else if (PhoneNumberType == "9913009")
                    {
                        arr1.push("WORK " + _val);
                        arr2.push("9913009 " + _val);
                    }
                    else
                    {
                        arr1.push(_val);
                        arr2.push(_val);               
                    }
                }       
                if(sPatHomeNum == null)
                {
                    for (var i = 0; i < _val.length; i++) {
                        if(val[i] !=null)
                        {
                            sPatHomeNum = _val
        
                        }
                    }
                };            
                ePatient["ePatient.18"] = arr1.slice(0);
                ePatient["PatientPhoneNumber"] = arr2.slice(0);
                v2Array.push({ section: "E06", element: "E06_17", val: sPatHomeNum });
            }
        }
        else
        {
            ePatient["ePatient.18"] = null;
            ePatient["PatientPhoneNumber"] = null;
            v2Array.push({ section: "E06", element: "E06_17", val: null });
        };
        
        
        //ePatient.19////////////
        _val = getValue(elementList, "ePatient.19");
        if(Call.HasPatient==true)
        {
            if (_val == null)
            {
                ePatient["ePatient.19"] = null;
                ePatient["PatientEmailAddress"] = null;
            }
            else
            {
                var eMailType = geteMailType("ePatient.19", _val);
                var arr1 = [];       
                var arr2 = [];       
                for (var i = 0; i < _val.length; i++)
                {
                    var eMailType = seteMailType("ePatient.19", _val);
        
                    if (eMailType == "9904001")
                    {
                        arr1.push("PERSONALEMAIL " + _val);
                        arr2.push("9904001 " + _val);
        
                    }
                    else if (eMailType == "9913003")
                    {
                        arr1.push("WORKEMAIL " + _val);
                        arr2.push("9904003 " + _val);
                    }
                    else
                    {
                        arr1.push(_val);
                        arr2.push( _val);
                    }
                }
                ePatient["ePatient.19"] = arr1.slice(0);
                ePatient["PatientEmailAddress"] = arr1.slice(0);
            }
        }
        else
        {
            ePatient["ePatient.19"] = null;
            ePatient["PatientEmailAddress"] = null;
        };
        
        
        //ePatient.20////////////
        _val = getValue(elementList, "ePatient.20");
        if(Call.HasPatient==true)
        {
            if (_val == null)
            {
                ePatient["ePatient.20"] = null;
                ePatient["StateIssuingDriverLicense"] = null;
                v2Array.push({ section: "E06", element: "E06_18", val: v2NOT_KNOWN });
            }
            else
            {
                ePatient["StateIssuingDriverLicense"] = setCodeText("ePatient.19", _val);
                v2Array.push({ section: "E06", element: "E06_18", val: setV2("ePatient.19", _val) });
                ePatient["ePatient.20"] = _val;
            }
        }
        else
        {
            ePatient["ePatient.20"] = null;
            ePatient["StateIssuingDriverLicense"] = null;
            v2Array.push({ section: "E06", element: "E06_18", val: v2NOT_KNOWN });
        };
        
        
        _val = getValue(elementList, "ePatient.21");
        if(Call.HasPatient==true)
        {
            if (_val == null)
            {
                ePatient["ePatient.21"] = null;
                ePatient["DriverLicenseNumber"] = null;
                v2Array.push({ section: "E06", element: "E06_19", val: v2NOT_KNOWN });
            }
            else
            {
                ePatient["ePatient.21"] = _val;
                ePatient["DriverLicenseNumber"] = _val;
                v2Array.push({ section: "E06", element: "E06_19", val: _val});
            }
        }
        else
        {
            ePatient["ePatient.21"] = null;
            ePatient["DriverLicenseNumber"] = null;
            v2Array.push({ section: "E06", element: "E06_19", val: v2NOT_KNOWN });
        };
        */
            return ePatient;
        };
var seteProcedures = function (businessObject) {
            var eProcedures = new Object();
            /*
            var ProceduresGroup = new Object();
            var v2Array = [];                
            ////////Check for cancelled calls, Standby, non-patient
            if((Call.HasPatient==true) && (Call.HasTreatment==true) && (eResponse.StandBy == false))
            {     
            }
            else
            {
               setnA
               return eProcedures;
            };
        
            eProceduresGroupObject = getNEMSISSection(businessObject, "eProcedures")
            if(eProceduresGroupObject.length =0)
            {
                setnA
                return eProcedures;
            };
        
                for (var xx = 0; xx < businessObject.sections.length; xx++)
                {
                    var elementList = businessObject.sections[xx].attributes.elements;
                    
        
                    //eProcedures.03////////////
                    
                    _val = getValue(elementList, "eProcedures.03");
                    _PNValue = getPertinentNegative("eProcedures.03")
                    eProcedures.IsValid = false;    
                    if (_PNValue != null) 
                    {
                        if (_PNValue == "8801001") 
                        {
                            v2Array.push({ section: "E19", element: "E19_03", val: SetV2("eProcedures.03", _val) });
                            ProcedureGroup["eProcedures.03"] = PN_CONTRAINDICATION_NOTED + " " + _val;
                            ProcedureGroup["Procedure"] = PN_CONTRAINDICATION_NOTED + " " + _val;
                        }
                        else if (_PNValue == "8801003") 
                        {
                            v2Array.push({ section: "E19", element: "E19_03", val: SetV2("eProcedures.03", _val) });
                            ProcedureGroup["eProcedures.03"] = PN_DENIED_BY_ORDER + " " + _val;
                            ProcedureGroup["Procedure"] = PN_DENIED_BY_ORDER + " " + _val;
                        }
                        else if (_PNValue == "8801019") 
                        {
                         
                            v2Array.push({ section: "E19", element: "E19_03", val: SetV2("eProcedures.03", _val) });
                            ProcedureGroup["eProcedures.03"] = PN_REFUSED + " " + _val;
                            ProcedureGroup["Procedures"] = PN_REFUSED+ " " + _val;
                        }
                        else if (_PNValue == "8801023") 
                        {                
                            v2Array.push({ section: "E19", element: "E19_03", val: SetV2("eProcedures.03", _val) });
                            ProcedureGroup["eProcedures.03"] = PN_UNABLE_TO_COMPLETE + " " + _val;
                            ProcedureGroup["Procedures"] = PN_UNABLE_TO_COMPLETE + " " + _val;
                        }
                    };
                
                    if (_val == null) 
                    {
                        ProcedureGroup["Procedure"] = NOT_RECORDED;
                        ProcedureGroup["eProcedures.03"] = V3NOT_RECORDED;
                        v2Array.push({ section: "E19", element: "E19_03", val: V2NOT_RECORDED });
                    }
                    else 
                    {
                        eProcedures.IsValid = true;    
                        ProcedureGroup["eProcedures.03"] = _val;
                        ProcedureGroup["Procedure"] = _val;
                        v2Array.push({ section: "E19", element: "E19_03", val: SetV2("eProcedures.03", _val) });
                    };
        
        
        
                    //eProcedures.01////////////
                    _val = getValue(elementList, "eProcedures.01");
                    if(eProcedures.IsValid == true)
                    {
                        if (_val == null) 
                        {
                            ProcedureGroup["eProcedures.01"] = V3NOT_RECORDED;
                            ProcedureGroup["DateTimeProcedurePerformed"] = NOT_RECORDED;
                            v2Array.push({ section: "E19", element: "E19_01", val: V2NOT_RECORDED });
                        }
                        else 
                        {               
                            ProcedureGroup["eProcedures.01"] = _val;
                            ProcedureGroup["DateTimeProcedurePerformed"] = _val;
                            v2Array.push({ section: "E19", element: "E19_01", val: _val });
                        }
                    }
                    else
                    {
                        ProcedureGroup["eProcedures.01"] = v3NOT_APPLICABLE;
                        ProcedureGroup["DateTimeProcedurePerformed"] = NOT_APPLICABLE;
                        v2Array.push({ section: "E19", element: "E19_01", val: v2NOT_APPLICABLE });
                    };
        
                    //eProcedures.02////////////
                    _val = getValue(elementList, "eProcedures.02");
                    if(eProcedures.IsValid == true)
                    {
                        if (_val == null) 
                        {
                            ProcedureGroup["ProcedurePerformedPriortothisUnitEMSCare"] = NOT_RECORDED;
                            ProcedureGroup["eProcedures.02"] = V3NOT_RECORDED;
                            v2Array.push({ section: "E19", element: "E19_02", val: V2NOT_RECORDED });
                        }
                        else {
                    
                            ProcedureGroup["ProcedurePerformedPriortothisUnitEMSCare"] = setCodeText("eProcedures.02", _val);
                            ProcedureGroup["eProcedures.02"] = _val;
                            v2Array.push({ section: "E19", element: "E19_02", val: SetV2("eProcedures.02", _val) });
                        }
                    }
                    else
                    {
                        ProcedureGroup["ProcedurePerformedPriortothisUnitEMSCare"] = NOT_APPLICABLE;
                        ProcedureGroup["eProcedures.02"] = v3NOT_APPLICABLE;
                        v2Array.push({ section: "E19", element: "E19_02", val: v2NOT_APPLICABLE });
        
                    };
        
                              //eProcedures.04////////////
                    _val = getValue(elementList, "eProcedures.04");
                    if(eProcedures.IsValid == true)
                    {
                        if (_val == null) 
                        {
                            ProcedureGroup["SizeofProcedureEquipment"] = null;
                            ProcedureGroup["eProcedures.02"] = null;
                            v2Array.push({ section: "E19", element: "E19_04", val: V2NOT_RECORDED });
                        }
                        else 
                        {
                       
                            ProcedureGroup["eProcedures.04"] = _val;
                            ProcedureGroup["SizeofProcedureEquipment"] = _val;
                            v2Array.push({ section: "E19", element: "E19_04", val: _val });
                        }
                    }
                    else
                    {
                        ProcedureGroup["SizeofProcedureEquipment"] = null;
                        ProcedureGroup["eProcedures.02"] = null;
                        v2Array.push({ section: "E19", element: "E19_04", val: V2NOT_RECORDED });
                    };
        
                    //eProcedures.05////////////
                    _val = getValue(elementList, "eProcedures.05");
                    if(eProcedures.IsValid == true)
                    {
                        if (_val == null) 
                        {
                            ProcedureGroup["eProcedures.05"] = V3NOT_RECORDED;
                            ProcedureGroup["NumberofProcedureAttempts"] = NOT_RECORDED;
                            v2Array.push({ section: "E19", element: "E19_05", val: V2NOT_RECORDED });
                        }
                        else 
                        {                
                            ProcedureGroup["eProcedures.05"] = _val;
                            ProcedureGroup["NumberofProcedureAttempts"] = _val;
                            v2Array.push({ section: "E19", element: "E19_05", val: _val });
                        }
                    }
                    else
                    {
                        ProcedureGroup["eProcedures.05"] = v3NOT_APPLICABLE;
                        ProcedureGroup["NumberofProcedureAttempts"] = NOT_APPLICABLE;
                        v2Array.push({ section: "E19", element: "E19_05", val: v2NOT_APPLICABLE});
                    };
        
                    //eProcedures.06////////////
                    _val = getValue(elementList, "eProcedures.06");
                    if(eProcedures.IsValid == true)
                    {
                        if (_val == null) 
                        {
                            v2Array.push({ section: "E19", element: "E19_06", val: v2NOT_RECORDED });
                            ProcedureGroup["eProcedures.06"] = V3NOT_RECORDED;
                            ProcedureGroup["ProcedureSuccessful"] = NOT_RECORDED;
                        }
                        else {
                            ProcedureGroup["eProcedures.06"] = _val;
                            ProcedureGroup["ProcedureSuccessful"] = setCodeText("eProcedures.06", _val);
                            v2Array.push({ section: "E19", element: "E19_06", val: SetV2("eProcedures.05", _val) });
                        }
                    }
                    else
                    {
                        v2Array.push({ section: "E19", element: "E19_06", val: v2NOT_APPLICABLE });
                        ProcedureGroup["eProcedures.06"] = v3NOT_APPLICABLE;
                        ProcedureGroup["ProcedureSuccessful"] = NOT_APPLICABLE;
                    };
            
                    //eProcedures.07////////////
                    _val = getValue(elementList, "eProcedures.07");
                    if(eProcedures.IsValid == true)
                    {
                        if (_val == null) 
                        {
                            ProcedureGroup["eProcedures.07"] = V3NOT_RECORDED;
                            ProcedureGroup["ProcedureComplication"] = NOT_RECORDED;
                            v2Array.push({ section: "E19", element: "E19_07", val: v2NOT_RECORDED });
                        }
                        else 
                        {
                            var arr1 = [];
                            var arr2 = [];
                            var arr3 = [];
                            for (var i = 0; i < _val.length; i++)
                            {
                                if(_val!=null)
                                {
                                    arr1.push(_val);
                                    arr2.push(setD2("eProcedures.07", _val));
                                    arr3.push(setCodeText("eProcedures.07", _val));               
                                }
                            };              
                            ProcedureGroup["eProcedures.07"] =  arr1.slice(0);
                            ProcedureGroup["ProcedureComplication"] =  arr3.slice(0);
                            v2Array.push({ section: "E06", element: "E06_12", val: arr2.slice(0) });
                        }
                    }
                    else
                    {
                        ProcedureGroup["eProcedures.07"] = v3NOT_APPLICABLE;
                        ProcedureGroup["ProcedureComplication"] = NOT_APPLICABLE;
                        v2Array.push({ section: "E19", element: "E19_07", val: v2NOT_RECORDED });
                    };
        
                        //eProcedures.08////////////
                    _val = getValue(elementList, "eProcedures.08");
                    if(eProcedures.IsValid == true)
                    {
                        if (_val == null) 
                        {            
                            ProcedureGroup["eProcedures.08"] = V3NOT_RECORDED;
                            ProcedureGroup["ResponsetoProcedure"] = NOT_RECORDED;            
                            v2Array.push({ section: "E19", element: "E19_08", val: v2NOT_RECORDED });
                        }
                        else 
                        {
                            ProcedureGroup["eProcedures.08"] = _val;
                            ProcedureGroup["ResponsetoProcedure"] = setCodeText("eProcedures.08", _val) ;            
                            v2Array.push({ section: "E19", element: "E19_08", val: SetV2("eProcedures.08", _val) });
                        }
                    }
                    else
                    {
                        ProcedureGroup["eProcedures.08"] = v3NOT_APPLICABLE;
                        ProcedureGroup["ResponsetoProcedure"] = NOT_APPLICABLE;            
                        v2Array.push({ section: "E19", element: "E19_08", val: v2NOT_APPLICABLE });
                    };
        
        
                        //eProcedures.09////////////
                    _val = getValue(elementList, "eProcedures.09");
                    if(eProcedures.IsValid == true)
                    {
                        if (_val == null) 
                        {
                            if (isRequiredStateElement("eProcedures.09")) 
                            {
                                ProcedureGroup["eProcedures.09"] = V3NOT_RECORDED;
                                ProcedureGroup["ProcedureCrewMembersID"] = NOT_RECORDED;
                                v2Array.push({ section: "E19", element: "E19_09", val: v2NOT_RECORDED });
                            }
                            else 
                            {
                                ProcedureGroup["eProcedures.09"] = v3NOT_REPORTING;
                                ProcedureGroup["ProcedureCrewMembersID"] = NOT_REPORTING;
                                v2Array.push({ section: "E19", element: "E19_09", val: v2NOT_REPORTING });                
                            }
                        }
                        else 
                        {
                            ProcedureGroup["eProcedures.09"] = _val;
                            ProcedureGroup["ProcedureCrewMembersID"] = _val;
                            v2Array.push({ section: "E19", element: "E19_09", val: _val});                
                        }
                    }
                    else
                    {
                        ProcedureGroup["eProcedures.09"] = v3NOT_APPLICABLE;
                        ProcedureGroup["ProcedureCrewMembersID"] = NOT_APPLICABLE;
                        v2Array.push({ section: "E19", element: "E19_09", val: v2NOT_AVAILABLE});
                    };
        
        
                        //eProcedures.10////////////
                    _val = getValue(elementList, "eProcedures.10");
                    if(eProcedures.IsValid == true)
                    {
                        if (_val == null) 
                        {           
                            ProcedureGroup["RoleTypeofPersonPerformingtheProcedure"] = NOT_RECORDED;
                            ProcedureGroup["eProcedures.10"] = V3NOT_RECORDED;
                        }
                        else
                        {
                            ProcedureGroup["RoleTypeofPersonPerformingtheProcedure"] = setCodeText("eProcedures.10", _val);
                            ProcedureGroup["eProcedures.10"] = _val;          
                        }
                    }
                    else
                    {
                        ProcedureGroup["RoleTypeofPersonPerformingtheProcedure"] = NOT_APPLICABLE;
                        ProcedureGroup["eProcedures.10"] = v3NOT_APPLICABLE;
                    };
        
        
                        //eProcedures.11////////////
                    _val = getValue(elementList, "eProcedures.11");
                    if(eProcedures.IsValid == true)
                    {
                        if (_val == null) 
                        {
                            ProcedureGroup["eProcedures.10"] = null;
                            ProcedureGroup["ProcedureAuthorization"] = null;
                            v2Array.push({ section: "E19", element: "E19_10", val: v2NOT_RECORDED});
                        }
                        else 
                        {
                            ProcedureGroup["eProcedures.11"] = _val;
                            ProcedureGroup["ProcedureAuthorization"] = setCodeText("eProcedures.11", _val);
                            v2Array.push({ section: "E06", element: "E06_12", val: SetV2("eProcedures.11", _val) });                        
                        }
                    }
                    else
                    {
                        ProcedureGroup["eProcedures.10"] = null;
                        ProcedureGroup["ProcedureAuthorization"] = null;
                        v2Array.push({ section: "E19", element: "E19_10", val: v2NOT_AVAILABLE});
                    };
        
        
                        //eProcedures.12////////////
                    _val = getValue(elementList, "eProcedures.12");
                    if(eProcedures.IsValid == true)
                    {
                        if (_val == null) 
                        {
                            ProcedureGroup["eProcedures.10"] = null;
                            ProcedureGroup["ProcedureAuthorizingPhysician"] = null;
                            v2Array.push({ section: "E19", element: "E19_11", val: v2NOT_RECORDED});                
                        }
                        else 
                        {
                            ProcedureGroup["eProcedures.12"] = _val;
                            ProcedureGroup["ProcedureAuthorizingPhysician"] =_val;
                            v2Array.push({ section: "E19", element: "E19_11", val: _val});                
                        }
                    }
                    else
                    {
                        ProcedureGroup["eProcedures.10"] = null;
                        ProcedureGroup["ProcedureAuthorizingPhysician"] = null;
                        v2Array.push({ section: "E19", element: "E19_11", val: v2NOT_APPLICABLE});
                    };
        
                        //eProcedures.13////////////
                    _val = getValue(elementList, "eProcedures.13");
                    if(eProcedures.IsValid == true)
                    {
                        if (_val == null) 
                        {
                            if (isRequiredStateElement("eProcedures.13")) 
                            {
                                ProcedureGroup["eProcedures.13"] = V3NOT_RECORDED;
                                ProcedureGroup["VascularAccessLocation"] = NOT_RECORDED;
                                v2Array.push({ section: "E19", element: "E19_12", val: V2NOT_RECORDED});                                
                            }
                            else 
                            {
                                ProcedureGroup["eProcedures.13"] = v3NOT_REPORTING;
                                ProcedureGroup["VascularAccessLocation"] = NOT_REPORTING;
                                v2Array.push({ section: "E19", element: "E19_12", val: v2NOT_REPORTING});
                            }
                        }
                        else 
                        {
                            ProcedureGroup["VascularAccessLocation"] = setCodeText("eProcedures.13", _val);
                            ProcedureGroup["eProcedures.13"] = _val;
                            v2Array.push({ section: "E19", element: "E19_12", val: SetD2("eProcedures.13", _val)});
                        }
                    }
                    else
                    {
                        ProcedureGroup["eProcedures.13"] = v3NOT_APPLICABLE;
                        ProcedureGroup["VascularAccessLocation"] = NOT_APPLICABLE;
                        v2Array.push({ section: "E19", element: "E19_12", val: v2NOT_APPLICABLE});
                    }
                }
                */
            return eProcuedrues
        };
var seteProtocols = function (businessObject) {

            var eProtocol = new Object()
            var ProtocolGroup = new Object();
            var v2Array = [];
            ////////Check for cancelled calls, Standby, non-patient
            if ((Call.HasPatient == true) && (Call.HasTreatment == true) && (eResponse.StandBy == false)) {
                setnA
                return eProtocols;
            };

            ProtocolGroupObject = getNEMSISSection(businessObject, "ProtocolGroup")
            if (ProtocolGroupObject.length = 0) {
                setnA
                return eProtocols;
            };
            /*
        
        
            for (var xx = 0; xx < businessObject.sections.length; xx++)
            {
                var elementList = businessObject.sections[xx].attributes.elements;
        
                ///////////eProtocols.01////////
                eProtocol["IsValid"] = false;
                _val = getValue(elementList, "eProtocols.01");
                if (eProcedures.IsValid == true) {
        
                    if (_val == null) {
                        ProtocolsGroup["ProtocolsUsed"] = NOT_RECORDED;
                        ProtocolsGroup["eProtocols.01"] = v3NOT_RECORDED;
                        v2Array.push({ section: "E17", element: "E17_11", val: V2NOT_RECORDED });
                    }
                    else
                    {
                        eProtocol["IsValid"] = true;
                        ProtocolsGroup["eProtocols.01"] = _val;
                        ProtocolsGroup["ProtocolsUsed"] = setCodeText("eProtocols.01", _val);
                        v2Array.push({ section: "E17", element: "E17_11", val: setV2("eProtocols.01", _val) });
                    }
                }
                else
                {
                    ProtocolsGroup["ProtocolsUsed"] = NOT_APPLICABLE;
                    ProtocolsGroup["eProtocols.01"] = v3NOT_APPLICABLE;
                    v2Array.push({ section: "E17", element: "E17_11", val: v2NOT_APPLICABLE});
                };
        
                ///////////eProtocols.02////////
                _val = getValue(elementList, "eProtocols.02");
                if (eProtocol["IsValid"] == true)
                {
                    if (_val == null)
                    {
                        ProtocolsGroup["eProtocols.02"] = V3NOT_RECORDED;
                        ProtocolsGroup["ProtocolAgeCategory"] = NOT_RECORDED;
                    }
                    else
                    {
                        ProtocolsGroup["eProtocols.02"] = _val;
                        ProtocolsGroup["ProtocolAgeCategory"] = setCodeText("eProtocols.02", _val);
                    }
                }
                else
                {
                    ProtocolsGroup["eProtocols.02"] = v3NOT_APPLICABLE;
                    ProtocolsGroup["ProtocolAgeCategory"] = NOT_APPLICABLE;
                };
            }
            */
            return eProtocol;
        };
var seteeRecord = function (businessObject) {
            var eRecord = new Object();
            /*
            //////////////////////eRecord.01
            _val = getValue(businessObject.elements, "eRecord.01");
            if (_val == null) {
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eRecord.01", Description: "PCR Number  MANDATORY" })
                eRecord["PCR"] = null;
                eRecord["eRecord.01"] = null;
            }
            else {
                v2Array.push({ section: "E01", element: "E01_01", val: _val });
                eRecord["eRecord.01"] = _val;
                eRecord["PCR"] = _val;
            };
        
            //////////////////////eRecord.02
            _val = getValue(elementList, "eRecord.02");
            if (_val == null) {
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eRecord.02", Description: "Software Creator MANDATORY" })
                eRecord["eRecord.02"] = null;
                eRecord["SoftwareCreator"] = null;
                v2Array.push({ section: "E01", element: "E01_02", val: v2NOT_RECORDED });
        
            }
            else {
                eRecord["eRecord.02"] = _val;
                eRecord["SoftwareCreator"] = _val;
                v2Array.push({ section: "E01", element: "E01_02", val: _val });
            };
        
            //////////////////////eRecord.03
            _val = getValue(businessObject.elements, "eRecord.03");
            if (_val == null) {
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eRecord.03", Description: "Software Name MANDATORY" })
                v2Array.push({ section: "E01", element: "E01_03", val: v2NOT_RECORDED });
                eRecord["eRecord.03"] = null;
                eRecord["SoftwareName"] = null;
            }
            else {
                v2Array.push({ section: "E02", element: "E02_03", val: _val });
                eRecord["eRecord.03"] = _val;
                eRecord["SoftwareName"] = _val;
            };
        
        
            //////////////////////eRecord.04
            _val = getValue(businessObject.elements, "eRecord.04");
            if (_val == null) {
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eRecord.04", Description: "Software Version MANDATORY" })
                v2Array.push({ section: "E01", element: "E01_04", val: v2NOT_RECORDED });
                eRecord["eRecord.04"] = null;
                eRecord["SoftwareVersion"] = null;
            }
            else {
                v2Array.push({ section: "E01", element: "E01_04", val: _val });
                eRecord["eRecord.04"] = _val;
                eRecord["SoftwareVersion"] = _val;
            };
            */
            return eRecord;
        };
var seteVitals = function (businessObject) {
            var eVitals = new Object();
            var VitalGroup = new Object();
            var v2Array = [];
            /*
        
            if (typeof businessObject["eVitals.VitalsGroup"] != undefined)
            {
            
                ////////Check for cancelled calls, Standby, non-patient
                if ((Call.HasPatient == true) && (Call.HasTreatment == true) && (eResponse.StandBy == false)) {
                    eVitals.IsValid = true;
                }
                else {
                    setnA
                    return eVitals;
                };
        
                VitalGroup = getNEMSISSection(businessObject, "eVitals.VitalGroup")
                if (VitalGroup.length = 0) {
                    setnA
                    return eVitals;
                };
                /*
            for (var xx = 0; xx < businessObject["eVitals.VitalsGroup"].length; xx++) {
                console.log(businessObject["eVitals.VitalsGroup"][xx]);
        
                //eVital.01/////////////////////////////
                _val = getValue(businessObject.elements, "eVitals.01");
                if (eVitals.IsValid == true) {
                    if (_val == null)
                    {
                        v2Array.push({ section: "E14", element: "E14_01", val: null });
                        VitalsGroup["DateTimeVitalSignsTaken"] = NOT_RECORDED;
                        VitalsGroup["eVitals.01"] = v3NOT_RECORDED;
                    }
                    else
                    {
                        VitalsGroup["DateTimeVitalSignsTaken"] = _val;
                        v2Array.push({ section: "E14", element: "E14_01", val: _val });
                        VitalsVitalsGroup["eVitals.01"] = _val;
                    }
                }
                else
                {
                    v2Array.push({ section: "E14", element: "E14_01", val: null });
                    VitalsGroup["DateTimeVitalSignsTaken"] = NOT_APPLICABLE;
                    VitalsGroup["eVitals.01"] = v3NOT_APPLICABLE;
                };
        
        
                //eVital.02/////////////////////////////
                _val = getValue(businessObject.elements, "eVitals.02");
                if (eVitals.IsValid == true) {
                    if (_val == null)
                    {
                        v2Array.push({ section: "E14", element: "E14_02", val: v2NOT_RECORDED });
                        VitalsGroup["eVitals.02"] = v3NOT_RECORDED;
                        VitalsGroup["ObtainedPriortothisUnitsEMSCare"] = NOT_RECORDED;
                    }
                    else
                    {
                        v2Array.push({ section: "E14", element: "E14_02", val: setV2("eVitals.02", _val) });
                        VitalsGroup["ObtainedPriortothisUnitsEMSCare"] = setCodeText("eVitals.02", _val);
                        VitalsGroup["eVitals.02"] = _val;
                    }
                }
                else
                {
                    v2Array.push({ section: "E14", element: "E14_02", val: v2NOT_APPLICABLE });
                    VitalsGroup["eVitals.02"] = v3NOT_APPLICABLE;
                    VitalsGroup["ObtainedPriortothisUnitsEMSCare"] = NOT_APPLICABLE;
                };
        
        
                //eVital.03/////////////////////////////
                _val = getValue(businessObject.elements, "eVitals.03");
                eVitals.HasECG = false;
                if (eVitals.IsValid == true) {
                    if (_val == null)
                    {
                        PNValue = getPertinentNegative("eVitals.03")
                        if (PNValue != null)
                        {
                            if (PNValue == "8801019")
                            {
                                VitalsGroup["CardiacRhythmECG"] = "REFUSED";
                                VitalsGroup["eVitals.03"] = PN_REFUSED_IS_NILLABLE;
                                v2Array.push({ section: "E14", element: "E14_03", val: v2NOT_KNOWN });
                            }
                            else if (PNValue == "8801023")
                            {
                                VitalsGroup["CardiacRhythmECG"] = "UNABLE TO COMPLETE";
                                VitalsGroup["eVitals.03"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                                v2Array.push({ section: "E14", element: "E14_03", val: v2NOT_KNOWN });
                            }
                        }
                        else
                        {
                            if (isRequiredStateElement("eExam.02") == true)
                            {
                                VitalsGroup["CardiacRhythmECG"] = NOT_RECORDED;
                                VitalsGroup["eVitals.03"] = v3NOT_RECORDED;
                                v2Array.push({ section: "E14", element: "E14_03", val: v2NOT_RECORDED });
                            }
                        }
                    }
                    else
                    {
                        var arr1 = [];
                        var arr2 = [];
                        var arr3 = [];
                        VitalsGroup["eVitals.03"] = _val;
                        for (var i = 0; i < businessObject.elements; i++)
                        {
                            if (_val != null)
                            {
                                eVitals.HasECG = true;
                                arr1.push(val[i]);
                                arr2.push(setV2("eVitals.03", _val));
                                arr3.push(setCodeText("eVitals.03", _val));
                            }
                        }
                        VitalsGroup["eVitals.03"] = arr1.slice(0);
                        VitalsGroup["eVitals.03"] = arr1.slice(0);
                        v2Array.push({ section: "E14", element: "E14_03", val: arr2.slice(0) });
                    }
                };
                    
                        
                //eVital.04/////////////////////////////
        
                _val = getValue(businessObject.elements, "eVitals.04");
                if (eVitals.HasECG == true) {
                    if (_val == null)
                    {
                        if (isRequiredStateElement("eVitals.04"))
                        {
                            VitalsGroup["ECGType"] = NOT_RECORDED;
                            VitalsGroup["eVitals.04"] = v3NOT_RECORDED;
                        }
                        else
                        {
                            VitalsGroup["ECGType"] = null;
                            VitalsGroup["eVitals.04"] = null;
                        }
                    }
                    else
                    {
                        VitalsGroup["ECGType"] = setCodeText("eVitals.04", _val);
                        VitalsGroup["eVitals.04"] = _val;
                    }
                }
                else
                {
                    VitalsGroup["ECGType"] = NOT_APPLICABLE;
                    VitalsGroup["eVitals.04"] = v3NOT_APPLICABLE;
                };
        
        
                //eVital.05/////////////////////////////
                _val = getValue(businessObject.elements, "eVitals.05");
                if (eVitals.HasECG == true)
                {
                    if (_val == null)
                    {
                        VitalsGroup["eVitals.05"] = v3NOT_RECORDED;
                        VitalsGroup["MethodofECGInterpretation"] = NOT_RECORDED;
                    }
                    else {
                        var arr1 = [];
                        var arr3 = [];
                        for (var i = 0; i < businessObject.elements; i++) {
                            if (_val != null) {
                                arr1.push(val[i]);
                                arr3.push(val + setCodeText("eVitals.05", _val));
                            }
                        };
                        VitalsGroup["eVitals.05"] = arr1.slice(0);
                        VitalsGroup["MethodofECGInterpretation"] = arr2.slice(0);
                    }
                }
                else
                {
                    VitalsGroup["eVitals.05"] = v3NOT_APPLICABLE;
                    VitalsGroup["MethodofECGInterpretation"] = NOT_APPLICABLE;
                };
        
        
                //eVital.06/////////////////////////////
                _val = getValue(businessObject.elements, "eVitals.06");
                eVitals.SBP = false;
                if (eVitals.IsValid == true) {
                    if (_val == null)
                    {
                        _PNValue = getPN("eVitals.06");
                        if (_PNValue != null)
                        {
                            if (_PNValue == "8801019")
                            {
                                v2Array.push({ section: "E14", element: "E14_04", val: v2NOT_KNOWN });
                                VitalsGroup["SBP"] = _PNValue;
                                VitalsGroup["eVitals.06"] = PN_REFUSED_IS_NILLABLE;
                            }
                            else if (_PNValue == "8801023")
                            {
                                v2Array.push({ section: "E14", element: "E14_04", val: v2NOT_KNOWN });
                                VitalsGroup["SBP"] = _PNValue;
                                VitalsGroup["eVitals.06"] = _PNValue;
                            }
                            else if (_PNValue == "8801005")
                            {
                                v2Array.push({ section: "E14", element: "E14_04", val: v2NOT_KNOWN });
                                VitalsGroup["eVitals.06"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                                VitalsGroup["SBP"] = _PNValue;
                            }
                            else
                            {
                                if (isRequiredStateElement("eVitals.06"))
                                {
                                    VitalsGroup["SBP"] = NOT_RECORDED;
                                    v2Array.push({ section: "E14", element: "E14_04", val: v2RECORDED });
                                    VitalsGroup["eVitals.06"] = v3NOT_RECORDED;
                                }
                                else
                                {
                                    VitalsGroup["SBP"] = NOT_REPORTING;
                                    v2Array.push({ section: "E14", element: "E14_04", val: v2NOT_REPORTING });
                                    VitalsGroup["eVitals.06"] = v3NOT_REPORTING;
                                }
                            }
                        }
                    }
                    else
                    {
                        eVitals.SBP = true;
                        VitalsGroup["eVitals.06"] = _val;
                        VitalsGroup["SBP"] = _val;
                        v2Array.push({ section: "E14", element: "E14_04", val: _val });
                    }
                }
                else
                {
                    VitalsGroup["SBP"] = NOT_APPLICABLE;
                    v2Array.push({ section: "E14", element: "E14_04", val: v2NOT_APPLICABLE });
                    VitalsGroup["eVitals.06"] = v3NOT_APPLICABLE;
                };
        
        
                //eVitals.07/////////////////////////////
                _val = getValue(businessObject.elements, "eVitals.07");
                eVitals.DBP = false;
                if (eVitals.IsValid == true) {
                    if (_val == null) {
                        var _pn = getPN("eVitals.07");
                        if (_PNValue != null) {
                            if (_PNValue == "8801019") {
                                v2Array.push({ section: "E14", element: "E14_05", val: v2NOT_KNOWN });
                                VitalsGroup["eVitals.07"] = PN_REFUSED_IS_NILLABLE;
                                VitalsGroup["DBP"] = _PNValue;
                            }
                            else if (_PNValue == "8801023") {
                                v2Array.push({ section: "E14", element: "E14_05", val: v2NOT_KNOWN });
                                VitalsGroup["DBP"] = _PNValue;
                                VitalsGroup["eVitals.07"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                            }
                            else if (_PNValue == "8801005") {
                                VitalsGroup["DBP"] = _PNValue;
                                v2Array.push({ section: "E14", element: "E14_05", val: v2NOT_KNOWN });
                                VitalsGroup["eVitals.07"] = PN_FINDING_NOT_PRESENT_IS_NILLABLE;
                            }
                        }
                        else {
                            if (isRequiredStateElement("eVitals.07")) 
                            {
                                VitalsGroup["DBP"] = NOT_RECORDED;
                                v2Array.push({ section: "E14", element: "E14_05", val: v2NOT_RECORDED });
                                VitalsGroup["eVitals.07"] = v3NOT_RECORDED;
                            }
                            else {
                                VitalsGroup["DBP"] = NOT_REPORTING;
                                v2Array.push({ section: "E14", element: "E14_05", val: v2NOT_REPORTING });
                                VitalsGroup["eVitals.07"] = v3NOT_RECORDED;
                            }
                        }
                    }
                    else {
                        VitalsGroup["DBP"] = _val;
                        v2Array.push({ section: "E14", element: "E14_05", val: _val });
                        VitalsGroup["eVitals.07"] = _val;
                        eVitals.DBP = true;
                    }
                }
                else {
                    VitalsGroup["DBP"] = NOT_APPLICABLE;
                    v2Array.push({ section: "E14", element: "E14_05", val: v2NOT_APPLICABLE });
                    VitalsGroup["eVitals.07"] = v3NOT_APPLICABLE;
                };
        
        
                //eVital.08/////////////////////////////
                _val = getValue(businessObject.elements, "eVitals.08");
                if ((eVitals.DBP == true) &&(eVitals.SBP== true))   //We have good BP
                {
                    if (_val == null) 
                    {
                        if (isRequiredStateElement("eVitals.08")) {
                            VitalsGroup["MethodofBloodPressureMeasurement"] = NOT_RECORDED;
                            VitalsGroup["eVitals.08"] = v3NOT_RECORDED;
                            v2Array.push({ section: "E14", element: "E14_05", val: v2NOT_RECORDED });
                        }
                        else {
                            VitalsGroup["MethodofBloodPressureMeasurement"] = NOT_REPORTING;
                            VitalsGroup["eVitals.08"] = null;
                            v2Array.push({ section: "E14", element: "E14_05", val: null });
                        }
                    }
                    else {
                        VitalsGroup["MethodofBloodPressureMeasurement"] = setCodeText("eVitals.08", _val);
                        VitalsGroup["eVitals.08"] = _val;
                        v2Array.push({ section: "E14", element: "E14_05", val: setV2("eVitals.08", _val) });
                        isNotApplicableFlag = false;
                    }
                }
                else
                {
                    VitalsGroup["MethodofBloodPressureMeasurement"] = NOT_APPLICABLE;
                    VitalsGroup["eVitals.08"] = v3NOT_APPLICABLE;
                    v2Array.push({ section: "E14", element: "E14_05", val: null });
                };
        
        
                //eVital.09/////////////////////////////               
                _val = getValue(businessObject.elements, "eVitals.09");
                if ((eVitals.SBP == true) && (eVitals.DBP == true)) {
                    if (_val == null) {
                        VitalsGroup["MeanArterialPressure"] = null;
                        VitalsGroup["eVitals.09"] = null;
                    }
                    else {
                        VitalsGroup["MeanArterialPressure"] = _val;
                        VitalsGroup["eVitals.09"] = _val;
                        isNotApplicableFlag = false;
                    }
                }
                else
                {
                    if ((eVitals.SBP == true) && (eVitals.DBP == false)) {
                        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eVitals.07", Description: "Missing DBP Value" })
                    };
                    if ((eVitals.SBP == false) && (eVitals.DBP == true)) {
                        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eVitals.07", Description: "Missing DBP Value" })
                    };
        
                };
        
        
                //eVital.10/////////////////////////////               
                _val = getValue(businessObject.elements, "eVitals.10");
                eVitals.IsHeartRateMonitored = false;
                if (eVitals.IsValid == true) {
                    if (_val == null)
                    {
                        _PNValue = getPN("eVitals.10");
                        if (_PNValue != null)
                        {
                            if (_PNValue == "8801019")
                            {
                                v2Array.push({ section: "E14", element: "E14_07", val: v2NOT_KNOWN });
                                VitalsGroup["HeartRate"] = _PNValue;
                                VitalsGroup["eVitals.10"] = _PNValue;
        
                            }
                            else if (_PNValue == "8801023")
                            {
                                VitalsGroup["HeartRate"] = _PNValue;
                                v2Array.push({ section: "E14", element: "E14_07", val: v2NOT_KNOWN });
                                VitalsGroup["eVitals.10"] = _PNValue;
                            }
                            else if (_PNValue == "8801005")
                            {
                                VitalsGroup["HeartRate"] = _PNValue;
                                v2Array.push({ section: "E14", element: "E14_07", val: v2NOT_KNOWN });
                                VitalsGroup["eVitals.10"] = _PNValue;
                            }
                            else
                            {
                                if (isRequiredStateElement("eVitals.10"))
                                {
                                    VitalsGroup["HeartRate"] = NOT_RECORDED;
                                    v2Array.push({ section: "E14", element: "E14_07", val: v2RECORDED });
                                    VitalsGroup["eVitals.10"] = v3NOT_RECORDED;
                                }
                                else
                                {
                                    VitalsGroup["HeartRate"] = NOT_REPORTING;
                                    v2Array.push({ section: "E14", element: "E14_07", val: v2NOT_REPORTING });
                                    VitalsGroup["eVitals.10"] = v3NOT_REPORTING;
                                }
                            }
                        }
                    }
                    else
                    {
                        VitalsGroup["HeartRate"] = _val;
                        VitalsGroup["eVitals.10"] = _val;
                        v2Array.push({ section: "E14", element: "E14_07", val: _val });
                        eVitals.IsHeartRateMonitored = true;
                    }
                }
                else
                {
                    VitalsGroup["HeartRate"] = NOT_REPORTING;
                    v2Array.push({ section: "E14", element: "E14_07", val: v2NOT_REPORTING });
                    VitalsGroup["eVitals.10"] = v3NOT_REPORTING;
                };
        
                //eVital.11/////////////////////////////               
                _val = getValue(businessObject.elements, "eVitals.11");
                if(eVitals.IsHeartRateMonitored == true)
                    {
                    if (_val == null) {
                        VitalsGroup["MethodofHeartRateMeasurement"] = null;
                        VitalsGroup["eVitals.11"] = null;
                    }
                    else {
                        VitalsGroup["MethodofHeartRateMeasurement"] = _val;
                        VitalsGroup["eVitals.11"] = _val;
                        isNotApplicableFlag = false;
                    }
                }
                else
                {
                    VitalsGroup["MethodofHeartRateMeasurement"] = null;
                    VitalsGroup["eVitals.11"] = null;
                };
        
                //eVitals.12/////////////////////////////
                _val = getValue(businessObject.elements, "eVitals.12");
                if (eVitals.IsValid == true) {
                    if (_val == null) {
                        _PNValue = getPN("eVitals.12");
                        if (_PNValue != null) {
                            if (_PNValue == "8801019") {
                                VitalsGroup["PulseOximetry"] = _PNValue;
                                v2Array.push({ section: "E14", element: "E14_09", val: v2NOT_KNOWN });
                                VitalsGroup["eVitals.12"] = PN_FINDING_NOT_PRESENT_IS_NILLABLE;
                            }
                            else if (_PNValue == "8801023") {
                                VitalsGroup["PulseOximetry"] = _PNValue;
                                v2Array.push({ section: "E14", element: "E14_09", val: v2NOT_KNOWN });
                                VitalsGroup["eVitals.12"] = PN_REFUSED_IS_NILLABLE;
                            }
                            else if (_PNValue == "8801005") {
                                VitalsGroup["PulseOximetry"] = _PNValue;
                                v2Array.push({ section: "E14", element: "E14_09", val: v2NOT_KNOWN });
                                VitalsGroup["eVitals.12"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                            }
                        }
                        else {
                            if (isRequiredStateElement("eVitals.12")) {
                                VitalsGroup["PulseOximetry"] = NOT_RECORDED;
                                v2Array.push({ section: "E14", element: "E14_09", val: v2NOT_RECORDED });
                                VitalsGroup["eVitals.12"] = v3NOT_RECORDED;
                            }
                            else {
                                VitalsGroup["PulseOximetry"] = NOT_REPORTING;
                                v2Array.push({ section: "E14", element: "E14_09", val: v2NOT_REPORTING });
                                VitalsGroup["eVitals.12"] = v3NOT_RECORDED;
                            }
                        }
                    }
                    else {
                        VitalsGroup["PulseOximetry"] = _val;
                        v2Array.push({ section: "E14", element: "E14_09", val: _val });
                        VitalsGroup["eVitals.12"] = _val;
                    }
                }
                else
                {
                    VitalsGroup["PulseOximetry"] = NOT_APPLICABLE;
                    v2Array.push({ section: "E14", element: "E14_09", val: v2NOT_APPLICABLE });
                    VitalsGroup["eVitals.12"] = v3NOT_APPLICABLE;
                };
        
                //eVital.13/////////////////////////////
                _val = getValue(businessObject.elements, "eVitals.13");
                if (eVitals.IsValid == true) {
                    if (_val == null) {
                        v2Array.push({ section: "E14", element: "E14_10", val: null });
                        VitalsGroup["PulseRhythm"] = null;
                        VitalsGroup["eVitals.13"] = null;
                    }
                    else {
                        v2Array.push({ section: "E14", element: "E14_10", val: _val });
                        VitalsGroup["eVitals.13"] = _val;
                        VitalsGroup["PulseRhythm"] = setCodeText("eVitals.13", _val);
                        isNotApplicableFlag = false;
                    }
                }
                else {
                    v2Array.push({ section: "E14", element: "E14_10", val: null });
                    VitalsGroup["PulseRhythm"] = null;
                    VitalsGroup["eVitals.13"] = null;
                };
        
        
                //eVitals.14/////////////////////////////
                _val = getValue(businessObject.elements, "eVitals.14");
                if (eVitals.IsValid == true) {
                    if (_val == null) {
                        _PNValue = getPN("eVitals.14");
                        if (_PNValue != null) {
                            if (_PNValue == "8801019") {
                                VitalsGroup["RespiratoryRate"] = _PNValue;
                                v2Array.push({ section: "E14", element: "E14_11", val: v2NOT_KNOWN });
                                VitalsGroup["eVitals.14"] = PN_REFUSED_IS_NILLABLE;
                            }
                            else if (_PNValue == "8801023") {
                                VitalsGroup["RespiratoryRate"] = _PNValue;
                                v2Array.push({ section: "E14", element: "E14_11", val: v2NOT_KNOWN });
                                VitalsGroup["eVitals.14"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                            }
                            else if (_PNValue == "8801005") {
                                VitalsGroup["RespiratoryRate"] = _PNValue;
                                v2Array.push({ section: "E14", element: "E14_11", val: v2NOT_KNOWN });
                                VitalsGroup["eVitals.14"] = PN_FINDING_NOT_PRESENT_IS_NILLABLE;
                            }
                        }
                        else {
                            if (isRequiredStateElement("eVitals.14")) {
                                VitalsGroup["RespiratoryRate"] = NOT_RECORDED;
                                v2Array.push({ section: "E14", element: "E14_11", val: v2NOT_RECORDED });
                                VitalsGroup["eVitals.14"] = v3NOT_RECORDED;
                            }
                            else
                            {
                                VitalsGroup["RespiratoryRate"] = NOT_REPORTING;
                                v2Array.push({ section: "E14", element: "E14_11", val: v2NOT_REPORTING });
                                VitalsGroup["eVitals.14"] = v3NOT_RECORDED;
                            }
                        }
                    }
                    else
                    {
                        VitalsGroup["RespiratoryRate"] = _val;
                        v2Array.push({ section: "E14", element: "E14_11", val: _val });
                        VitalsGroup["eVitals.14"] = _val;
                    }
                }
                else
                {
                    VitalsGroup["RespiratoryRate"] = NOT_APPLICABLE;
                    v2Array.push({ section: "E14", element: "E14_11", val: v2NOT_APPLICABLE });
                    VitalsGroup["eVitals.14"] = v3NOT_APPLICABLE;
                };
        
        
                //eVital.15/////////////////////////////
                _val = getValue(businessObject.elements, "eVitals.15");
                if (eVitals.IsValid == true) {
                    if (_val == null) {
                        v2Array.push({ section: "E14", element: "E14_12", val: null });
                        VitalsGroup["RespiratoryEffort"] = null;
                        VitalsGroup["eVitals.15"] = null;
                    }
                    else {
                        VitalsGroup["RespiratoryEffort"] = setCodeText("eVitals.15", _val)
                        v2Array.push({ section: "E14", element: "E14_12", val: setV2("eVitals.15", _val) });
                        VitalsGroup["eVitals.15"] = _val;
        
                    }
                }
                else
                {
                    v2Array.push({ section: "E14", element: "E14_12", val: null });
                    VitalsGroup["RespiratoryEffort"] = null;
                    VitalsGroup["eVitals.15"] = null;
                };
        
                //eVitals.16/////////////////////////////
                _val = getValue(businessObject.elements, "eVitals.16");
                if (eVitals.IsValid == true) {
                    if (_val == null) {
                        _PNValue = getPN("eVitals.16");
                        if (_PNValue != null) {
                            if (_PNValue == "8801019") {
                                v2Array.push({ section: "E14", element: "E14_13", val: v2NOT_KNOWN });
                                VitalsGroup["CO2"] = _PNValue;
                                VitalsGroup["eVitals.16"] = PN_REFUSED_IS_NILLABLE;
                            }
                            else if (_PNValue == "8801023") {
                                v2Array.push({ section: "E14", element: "E14_13", val: v2NOT_KNOWN });
                                VitalsGroup["CO2"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                                VitalsGroup["eVitals.16"] = _PNValue;
                            }
                        }
                        else {
                            if (isRequiredStateElement("eVitals.16")) {
                                VitalsGroup["CO2"] = NOT_RECORDED;
                                v2Array.push({ section: "E14", element: "E14_13", val: v2NOT_RECORDED });
                                VitalsGroup["eVitals.16"] = v3NOT_RECORDED;
                            }
                            else {
                                VitalsGroup["CO2"] = v3NOT_REPORTING;
                                v2Array.push({ section: "E14", element: "E14_13", val: v2NOT_REPORTING });
                                VitalsGroup["eVitals.16"] = v3NOT_RECORDED;
                            }
                        }
                    }
                    else {
                        VitalsGroup["CO2"] = _val;
                        v2Array.push({ section: "E14", element: "E14_13", val: _val });
                        VitalsGroup["eVitals.16"] = _val;
                        isNotApplicableFlag = false;
                    }
                }
                else
                {
                    VitalsGroup["CO2"] = NOT_APPLICABLE;
                    v2Array.push({ section: "E14", element: "E14_13", val: v2NOT_APPLICABLE });
                    VitalsGroup["eVitals.16"] = v3NOT_APPLICABLE;
                };
        
        
                //eVitals.17/////////////////////////////
                _val = getValue(businessObject.elements, "eVitals.17");
                if (eVitals.IsValid == true) {
                    if (_val == null) {
                        _PNValue = getPN("eVitals.17");
                        if (_PNValue != null) {
                            if (_PNValue == "8801019") {
                                VitalsGroup["CarbonMonoxide"] = _PNValue;
                                VitalsGroup["eVitals.17"] = PN_REFUSED_IS_NILLABLE;
                            }
                            else if (_PNValue == "8801023") {
                                VitalsGroup["eVitals.17"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                                VitalsGroup["CarbonMonoxide"] = _PNValue;
                            }
                        }
                        else {
                            if (isRequiredStateElement("eVitals.17")) {
                                VitalsGroup["CarbonMonoxide"] = NOT_RECORDED;
                                VitalsGroup["eVitals.17"] = v3NOT_RECORDED;
                            }
                            else {
                                VitalsGroup["CarbonMonoxide"] = null;
                                VitalsGroup["eVitals.17"] = null;
                            }
                        }
                    }
                    else {
                        VitalsGroup["CarbonMonoxide"] = _val;
                        VitalsGroup["eVitals.17"] = _val;
                        isNotApplicableFlag = false;
                    }
                }
                else
                {
                    VitalsGroup["CarbonMonoxide"] = NOT_APPLICABLE;
                    VitalsGroup["eVitals.17"] = v3NOT_APPLICABLE;
                };
        
                //eVitals.18/////////////////////////////
                _val = getValue(businessObject.elements, "eVitals.18");
                if (eVitals.IsValid == true) {
                    if (_val == null) {
                        _PNValue = getPN("eVitals.18");
                        if (_PNValue != null) {
                            if (_PNValue == "8801019") {
                                VitalsGroup["BloodGlucoseLevel"] = _PNValue;
                                v2Array.push({ section: "E14", element: "E14_14", val: v2NOT_KNOWN });
                                VitalsGroup["eVitals.18"] = PN_REFUSED_IS_NILLABLE;
                            }
                            else if (_PNValue == "8801023") {
                                VitalsGroup["BloodGlucoseLevel"] = _PNValue;
                                v2Array.push({ section: "E14", element: "E14_14", val: v2NOT_KNOWN });
                                VitalsGroup["eVitals.18"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                            }
                        }
                        else {
                            if (isRequiredStateElement("eVitals.18")) {
                                v2Array.push({ section: "E14", element: "E14_14", val: v2NOT_RECORDED });
                                VitalsGroup["BloodGlucoseLevel"] = NOT_RECORDED;
                                VitalsGroup["eVitals.18"] = v3NOT_RECORDED;
                            }
                            else {
                                VitalsGroup["BloodGlucoseLevel"] = null;
                                v2Array.push({ section: "E14", element: "E14_14", val: null });
                                VitalsGroup["eVitals.18"] = null;
                            }
                        }
                    }
                    else {
                        v2Array.push({ section: "E14", element: "E14_14", val: _val });
                        VitalsGroup["BloodGlucoseLevel"] = _val;
                        VitalsGroup["eVitals.18"] = _val;             
                    }
                }
                else {
                    v2Array.push({ section: "E14", element: "E14_14", val: v2NOT_APPLICABLE });
                    VitalsGroup["BloodGlucoseLevel"] = NOT_APPLICABLE;
                    VitalsGroup["eVitals.18"] = v3NOT_APPLICABLE;
                };
        
        
        
                //eVitals.19/////////////////////////////
                _val = getValue(businessObject.elements, "eVitals.19");
                if (eVitals.IsValid == true) {
                    if (_val == null) {
                        _PNValue = getPN("eVitals.19");
                        if (_PNValue != null) {
                            if (_PNValue == "8801019") {
                                v2Array.push({ section: "E14", element: "E14_15", val: v2NOT_KNOWN });
                                VitalsGroup["GlasgowComaScoreEye"] = _PNValue;
                                VitalsGroup["eVitals.19"] = PN_REFUSED_IS_NILLABLE;
                            }
                            else if (_PNValue == "8801023") {
                                VitalsGroup["GlasgowComaScoreEye"] = _PNValue;
                                v2Array.push({ section: "E14", element: "E14_15", val: v2NOT_KNOWN });
                                VitalsGroup["eVitals.19"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                            }
                        }
                        else {
                            if (isRequiredStateElement("eVitals.19")) {
                                VitalsGroup["GlasgowComaScoreEye"] = NOT_RECORDED;
                                v2Array.push({ section: "E14", element: "E14_15", val: v2NOT_RECORDED });
                                VitalsGroup["eVitals.19"] = v3NOT_RECORDED;
                            }
                            else {
                                v2Array.push({ section: "E14", element: "E14_15", val: null });
                                VitalsGroup["eVitals.19"] = null;
                                VitalsGroup["GlasgowComaScoreEye"] = null;
                            }
                        }
                    }
                    else {
                        v2Array.push({ section: "E14", element: "E14_15", val: _val });
                        VitalsGroup["GlasgowComaScoreEye"] = _val;
                        VitalsGroup["eVitals.19"] = _val;
                    }
                }
                else {
                    VitalsGroup["GlasgowComaScoreEye"] = NOT_APPLICABLE;
                    v2Array.push({ section: "E14", element: "E14_15", val: v2NOT_APPLICABLE});
                    VitalsGroup["eVitals.19"] = v3NOT_APPLICABLE;
                };
        
                //eVital.20/////////////////////////////        
                _val = getValue(businessObject.elements, "eVitals.20");
                if (eVitals.IsValid == true) {
                    if (_val == null) {
                        _PNValue = getPN("eVitals.20");
                        if (_PNValue != null) {
                            if (_PNValue == "8801019") {
                                v2Array.push({ section: "E14", element: "E14_16", val: v2NOT_KNOWN });
                                VitalsGroup["eVitals.20"] = PN_REFUSED_IS_NILLABLE;
                                VitalsGroup["GlasgowComaScoreVerbal"] = _PNValue;
                            }
                            else if (_PNValue == "8801023") {
                                v2Array.push({ section: "E14", element: "E14_16", val: v2NOT_KNOWN });
                                VitalsGroup["eVitals.20"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                                VitalsGroup["GlasgowComaScoreVerbal"] = _PNValue;
                            }
                        }
                        else {
                            if (isRequiredStateElement("eVitals.20")) {
                                v2Array.push({ section: "E14", element: "E14_16", val: v2NOT_RECORDED });
                                VitalsGroup["eVitals.20"] = v3NOT_RECORDED;
                                VitalsGroup["GlasgowComaScoreVerbal"] = NOT_RECORDED;
                            }
                            else {
                                VitalsGroup["GlasgowComaScoreVerbal"] = null;
                                v2Array.push({ section: "E14", element: "E14_16", val: null });
                                VitalsGroup["eVitals.20"] = null;
                            }
                        }
                    }
                    else {
                        v2Array.push({ section: "E14", element: "E14_16", val: _val });
                        VitalsGroup["GlasgowComaScoreVerbal"] = setCodeText("eVitals.20", _val);
                        VitalsGroup["eVitals.20"] = _val;
                    }
                }
                else {
                    v2Array.push({ section: "E14", element: "E14_16", val: v2NOT_APPLICABLE});
                    VitalsGroup["eVitals.20"] = v3NOT_APPLICABLE;
                    VitalsGroup["GlasgowComaScoreVerbal"] = NOT_APPLICABLE;
                };
        
        
        
                //eVital.21/////////////////////////////        
                _val = getValue(businessObject.elements, "eVitals.21");
                if (eVitals.IsValid == true) {
                    if (_val == null) {
                        _PNValue = getPN("eVitals.21");
                        if (_PNValue != null) {
                            if (_PNValue == "8801019") {
                                v2Array.push({ section: "E14", element: "E14_23", val: v2NOT_KNOWN });
                                VitalsGroup["eVitals.21"] = PN_REFUSED_IS_NILLABLE;
                                VitalsGroup["eVitals.GlasgowComaScoreMotor"] = _PNValue;
                            }
                            else if (_PNValue == "8801023") {
                                v2Array.push({ section: "E14", element: "E14_23", val: v2NOT_KNOWN });
                                VitalsGroup["eVitals.21"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                                VitalsGroup["eVitals.GlasgowComaScoreMotor"] = _PNValue;
                            }
                        }
                        else {
                            if (isRequiredStateElement("eVitals.21")) {
                                v2Array.push({ section: "E14", element: "E14_23", val: v2NOT_RECORDED });
                                VitalsGroup["eVitals.21"] = v3NOT_RECORDED;
                                VitalsGroup["eVitals.GlasgowComaScoreMotor"] = NOT_RECORDED;
                            }
                            else {
                                v2Array.push({ section: "E14", element: "E14_23", val: null });
                                VitalsGroup["eVitals.21"] = null;
                                VitalsGroup["eVitals.GlasgowComaScoreMotor"] = null;
                            }
                        }
                    }
                    else {
                        v2Array.push({ section: "E14", element: "E14_23", val: _val });
                        VitalsGroup["eVitals.21"] = _val;
                        VitalsGroup["eVitals.GlasgowComaScoreMotor"] = _val;             
                    }
                }
                else {
                    v2Array.push({ section: "E14", element: "E14_23", val: v2NOT_APPLICABLE });
                    VitalsGroup["eVitals.21"] = v3NOT_APPLICABLE;
                    VitalsGroup["eVitals.GlasgowComaScoreMotor"] = NOT_APPLICABLE;
                };
        
                //eVital.22/////////////////////////////        
                _val = getValue(businessObject.elements, "eVitals.22");
                if (eVitals.IsValid == true) {
                    if (_val == null) {
                        _PNValue = getPN("eVitals.22");
                        if (_PNValue != null) {
                            if (_PNValue == "8801019") {
                                v2Array.push({ section: "E14", element: "E14_18", val: v2NOT_KNOWN });
                                VitalsGroup["eVitals.22"] = PN_REFUSED_IS_NILLABLE;
                                VitalsGroup["GlasgowComaScoreQualifier"] = _PNValue;
                            }
                            else if (_PNValue == "8801023") {
                                v2Array.push({ section: "E14", element: "E14_18", val: v2NOT_KNOWN });
                                VitalsGroup["eVitals.22"] = PN_REFUSED_IS_NILLABLE;
                                VitalsGroup["GlasgowComaScoreQualifier"] = _PNValue;
                            }
                        }
                        else {
                            if (isRequiredStateElement("eVitals.22")) {
                                v2Array.push({ section: "E14", element: "E14_18", val: v2NOT_RECORDED });
                                VitalsGroup["eVitals.22"] = v3NOT_RECORDED;
                                VitalsGroup["GlasgowComaScoreQualifier"] = NOT_RECORDED;
                            }
                            else {
                                v2Array.push({ section: "E14", element: "E14_18", val: null });
                                VitalsGroup["eVitals.22"] = null;
                                VitalsGroup["GlasgowComaScoreQualifier"] = null;
                            }
                        }
                    }
                    else {
                        v2Array.push({ section: "E14", element: "E14_18", val: setD2("eVitals.22", _val) });
                        VitalsGroup["GlasgowComaScoreQualifier"] = setCodeText("eVitals.22", _val);
                        VitalsGroup["eVitals.22"] = _val;
                    }
                }
                else {
                    v2Array.push({ section: "E14", element: "E14_18", val: v2NOT_APPLICABLE});
                    VitalsGroup["eVitals.22"] = v3NOT_APPLICABLE;
                    VitalsGroup["GlasgowComaScoreQualifier"] = NOT_APPLICABLE;
                };
        
                //eVital.23/////////////////////////////        
        
                _val = getValue(businessObject.elements, "eVitals.23");
                if (eVitals.IsValid == true) {
                    if (_val == null) {
                        _PNValue = getPN("eVitals.23");
                        if (_PNValue != null) {
                            if (_PNValue == "8801019") {
                                v2Array.push({ section: "E14", element: "E14_19", val: v2NOT_KNOWN });
                                VitalsGroup["eVitals.23"] = PN_REFUSED_IS_NILLABLE;
                                VitalsGroup["GlasgowComaScoreScore"] = _PNValue;
                            }
                            else if (_PNValue == "8801023") {
                                v2Array.push({ section: "E14", element: "E14_19", val: v2NOT_KNOWN });
                                VitalsGroup["eVitals.23"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                                VitalsGroup["GlasgowComaScoreScore"] = _PNValue;
                            }
                        }
                        else {
                            if (isRequiredStateElement("eVitals.23")) {
                                VitalsGroup["GlasgowComaScoreScore"] = NOT_RECORDED;
                                v2Array.push({ section: "E14", element: "E14_19", val: v2NOT_RECORDED });
                                VitalsGroup["eVitals.23"] = v3NOT_RECORDED;
                            }
                            else {
                                v2Array.push({ section: "E14", element: "E14_19", val: v2NOT_REPORTING });
                                VitalsGroup["eVitals.23"] = v3NOT_REPORTING;
                                VitalsGroup["GlasgowComaScoreScore"] = NOT_REPORTING;
                            }
                        }
                    }
                    else {
                        v2Array.push({ section: "E14", element: "E14_19", val: setD2("eVitals.23 ", _val) });
                        VitalsGroup["GlasgowComaScoreScore"] = setCodeText("eVitals.23", _val);
                        VitalsGroup["eVitals.23"] = _val;
                    }
                }
                else {
                    VitalsGroup["GlasgowComaScoreScore"] = NOT_APPLICABLE;
                    v2Array.push({ section: "E14", element: "E14_19", val: v2NOT_APPLICABLE});
                    VitalsGroup["eVitals.23"] = v3NOT_APPLICABLE;
                };
        
        
                //eVital.24/////////////////////////////        
                _val = getValue(businessObject.elements, "eVitals.24  ");
                eVitals.HasTemperature = false;
                if (eVitals.IsValid == true) {
                    if (_val == null) {
                        _PNValue = getPN("eVitals.24 ");
                        if (_PNValue != null) {
                            if (_PNValue == "8801019") {
                                v2Array.push({ section: "E14", element: "E14_20", val: v2NOT_KNOWN });
                                VitalsGroup["eVitals.24 "] = PN_REFUSED_IS_NILLABLE;
                                VitalsGroup["Temperature"] = _PNValue;
                            }
                            else if (_PNValue == "8801023") {
                                v2Array.push({ section: "E14", element: "E14_20", val: v2NOT_KNOWN });
                                VitalsGroup["eVitals.24"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                                VitalsGroup["Temperature"] = _PNValue;
                            }
                        }
                        else {
                            if (isRequiredStateElement("eVitals.24  ")) {
                                v2Array.push({ section: "E14", element: "E14_20", val: v2NOT_RECORDED });
                                VitalsGroup["Temperature"] = NOT_RECORDED;
                                VitalsGroup["eVitals.24"] = v3NOT_RECORDED;
                            }
                            else {
                                v2Array.push({ section: "E14", element: "E14_20", val: v2NOT_REPORTING });
                                VitalsGroup["eVitals.24"] = v3NOT_REPORTING;
                                VitalsGroup["Temperature"] = NOT_REPORTING;
                            }
                        }
                    }
                    else {
                        v2Array.push({ section: "E14", element: "E14_20", val: _val });
                        VitalsGroup["eVitals.24"] = _val;
                        VitalsGroup["Temperature"] = _val;
                        eVitals.HasTemperature = true;
                    }
                }
                else {
                    v2Array.push({ section: "E14", element: "E14_20", val: v2NOT_APPLICABLE });
                    VitalsGroup["eVitals.24"] = v3NOT_APPLICABLE;
                    VitalsGroup["Temperature"] = NOT_APPLICABLE;
                };
        
                //eVital.25/////////////////////////////   
        
                _val = getValue(businessObject.elements, "eVitals.25");
                if (eVitals.HasTemperature == true) {
                    if (_val == null) {
                        v2Array.push({ section: "E14", element: "E14_21", val: null });
                        VitalsGroup["TemperatureMethod"] = null;
                        VitalsGroup["eVitals.25"] = null;
                    }
                    else {
                        v2Array.push({ section: "E14", element: "E14_21", val: setV2("eVitals.25", _val) });
                        VitalsGroup["TemperatureMethod"] = setCodeText("eVitals.25", _val);
                        VitalsGroup["eVitals.25"] = _val;
        
                    }
                }
                else
                {
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eVitals.25", Description: "Missing Temperature Value" })
                    v2Array.push({ section: "E14", element: "E14_21", val: null });
                    VitalsGroup["TemperatureMethod"] = null;
                    VitalsGroup["eVitals.25"] = null;
                };
        
        
                //eVital.26/////////////////////////////   
                _val = getValue(businessObject.elements, "eVitals.26");
                if (eVitals.IsValid == true) {
                    if (_val == null) {
                        v2Array.push({ section: "E14", element: "E14_22", val: v2NOT_RECORDED });
                        VitalsGroup["eVitals.26"] = v3NOT_RECORDED;
                        VitalsGroup["LevelofResponsiveness"] = NOT_RECORDED;
        
                    }
                    else {
                        v2Array.push({ section: "E14", element: "E14_22", val: setV2("eVitals.26", _val) });
                        VitalsGroup["eVitals.26"] = _val;
                        VitalsGroup["LevelofResponsiveness"] = setCodeText("eVitals.26", _val);;
                    }
                }
                else
                {
                    v2Array.push({ section: "E14", element: "E14_22", val: v2NOT_APPLICABLE });
                    VitalsGroup["eVitals.26"] = v3NOT_APPLICABLE;
                    VitalsGroup["LevelofResponsiveness"] = NOT_APPLICABLE;
                };
        
        
                //eVital.27/////////////////////////////   
                _val = getValue(businessObject.elements, "eVitals.27 ");
                eVitals.HasPainScale = false;
                if (eVitals.IsValid == true) {
                    if (_val == null) {
                        _PNValue = getPN("eVitals.27");
                        if (_PNValue != null) {
                            if (_PNValue == "8801019") {
                                v2Array.push({ section: "E14", element: "E14_23", val: v2NOT_KNOWN });
                                VitalsGroup["PainScaleScore"] = _PNValue;
                                VitalsGroup["eVitals.27"] = PN_REFUSED_IS_NILLABLE;
                            }
                            else if (_PNValue == "8801023") {
                                v2Array.push({ section: "E14", element: "E14_23", val: v2NOT_KNOWN });
                                VitalsGroup["PainScaleScore"] = _PNValue;
                                VitalsGroup["eVitals.27"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                            }
                        }
                        else {
                            if (isRequiredStateElement("eVitals.27")) {
                                v2Array.push({ section: "E14", element: "E14_23", val: v2NOT_RECORDED });
                                VitalsGroup["eVitals.27"] = v3NOT_RECORDED;
                                VitalsGroup["PainScaleScore"] = NOT_RECORDED;
                            }
                            else {
                                v2Array.push({ section: "E14", element: "E14_23", val: null });
                                VitalsGroup["eVitals.27"] = null;
                                VitalsGroup["PainScaleScore"] = null;
                            }
                        }
                    }
                    else {
                        eVitals.HasPainScale = true;
                        v2Array.push({ section: "E14", element: "E14_23", val: _val });
                        VitalsGroup["eVitals.27"] = _val;
                        VitalsGroup["PainScaleScore"] = _val;
                    }
                }
                else
                {
                    v2Array.push({ section: "E14", element: "E14_23", val: v2NOT_APPLICABLE });
                    VitalsGroup["eVitals.27"] = v3NOT_APPLICABLE;
                    VitalsGroup["PainScaleScore"] = NOT_APPLICABLE;
                };
                //eVital.28/////////////////////////////   
                _val = getValue(businessObject.elements, "eVitals.28");
                if (eVitals.IsValid == true) {
                    if (_val == null) {
                        if (isRequiredStateElement("eVitals.28")) {
                            VitalsGroup["eVitals.28"] = v3NOT_RECORDED;
                            VitalsGroup["PainScaleType"] = NOT_RECORDED;
                        }
                        else {
                            VitalsGroup["eVitals.28"] = v3NOT_REPORTING;
                            VitalsGroup["PainScaleType"] = NOT_REPORTING;
                        }
                    }
                    else {
                        VitalsGroup["eVitals.28"] = _val;
                        VitalsGroup["PainScaleType"] = setCodeText("eVitals.28", _val);
                    }
                }
                else
                {
                    if (eVitale.HasPainScale == true)
                    {
                        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eVitals.28", Description: "Missing Pain Scale Value" })
                    }
                    else
                    {
                        VitalsGroup["eVitals.28"] = v3NOT_APPLICABLE;
                        VitalsGroup["PainScaleType"] = NOT_APPLICABLE;
                    }
                };
        
        
        
                //eVital.29/////////////////////////////   
                _val = getValue(businessObject.elements, "eVitals.29 ");
                eVitals.HasStroke = false;
                if (eVitals.IsValid == true) {
                    if (_val == null)
                    {
                        _PNValue = getPN("eVitals.29");
                        if (_PNValue != null)
                        {
                            if (_PNValue == "8801019")
                            {
                                v2Array.push({ section: "E14", element: "E14_24", val: v2NOT_KNOWN });
                                VitalsGroup["eVitals.29"] = PN_REFUSED_IS_NILLABLE;
                                VitalsGroup["StrokeScaleScore"] = _PNValue;
                            }
                            else if (_PNValue == "8801023")
                            {
                                v2Array.push({ section: "E14", element: "E14_24", val: v2NOT_KNOWN });
                                VitalsGroup["eVitals.29"] = _PNValue;
                                VitalsGroup["StrokeScaleScore"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                            }
                        }
                        else
                        {
                            if (isRequiredStateElement("eVitals.29"))
                            {
                                v2Array.push({ section: "E14", element: "E14_24", val: v2NOT_RECORDED });
                                VitalsGroup["eVitals.29"] = v3NOT_RECORDED;
                                VitalsGroup["StrokeScaleScore"] = NOT_RECORDED;
                            }
                            else
                            {
                                v2Array.push({ section: "E14", element: "E14_24", val: null });
                                VitalsGroup["eVitals.29"] = null;
                                VitalsGroup["StrokeScaleScore"] = null;
                            }
                        }
                    }
                    else
                    {
                        v2Array.push({ section: "E14", element: "E14_24", val: _val });
                        VitalsGroup["eVitals.29"] = _val;
                        VitalsGroup["StrokeScaleScore"] = setCodeText("eVitals.29 ", _val);
                        if (_val != "3329001")
                        {
                            eVitals.HasStroke = true;
                        }
                    }
                }
                else
                {
                    v2Array.push({ section: "E14", element: "E14_24", val: v2NOT_APPLICABLE });
                    VitalsGroup["eVitals.29"] = v3NOT_APPLICABLE;
                    VitalsGroup["StrokeScaleScore"] = NOT_APPLICABLE;
                };
        
                //eVital.30/////////////////////////////   
                _val = getValue(businessObject.elements, "eVitals.30");
                if (eVitals.HasStroke == true)
                {
                    if (_val == null)
                    {
                        if (isRequiredStateElement("eVitals.30"))
                        {
                            VitalsGroup["eVitals.30"] = v3NOT_RECORDED;
                            VitalsGroup["StrokeScaleType"] = NOT_RECORDED;
                        }
                        else
                        {
                            VitalsGroup["eVitals.30"] = null;
                            VitalsGroup["StrokeScaleType"] = null;
                        }
                    }
                    else
                    {
                        VitalsGroup["eVitals.30"] = _val;
                        VitalsGroup["StrokeScaleType"] = setCodeText("eVitals.30", _val);
                    }
                }
                else
                {
                    VitalsGroup["eVitals.30"] = v3NOT_APPLICABLE;
                    VitalsGroup["StrokeScaleType"] = NOT_APPLICABLE;
                };
        
        
                //eVital.31/////////////////////////////   
                _val = getValue(businessObject.elements, "eVitals.31 ");
                if (eVitals.IsValid == true) {
                    if (_val == null) {
                        _PNValue = getPN("eVitals.31");
                        if (_PNValue != null) {
                            if (_PNValue == "8801019") {
                                v2Array.push({ section: "E14", element: "E14_25", val: v2NOT_KNOWN });
                                VitalsGroup["eVitals.31"] = PN_REFUSED_IS_NILLABLE;
                                VitalsGroup["ReperfusionChecklist"] = _PNValue;
                            }
                            else if (_PNValue == "8801023") {
                                v2Array.push({ section: "E14", element: "E14_25", val: v2NOT_KNOWN });
                                VitalsGroup["eVitals.31"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                                VitalsGroup["ReperfusionChecklist"] = _PNValue;
                            }
                        }
                        else {
                            if (isRequiredStateElement("eVitals.31"))
                            {
                                v2Array.push({ section: "E14", element: "E14_25", val: v2NOT_RECORDED });
                                VitalsGroup["ReperfusionChecklist"] = NOT_RECORDED;
                                VitalsGroup["eVitals.31"] = v3NOT_RECORDED;
                            }
                            else {
                                v2Array.push({ section: "E14", element: "E14_25", val: null });
                                VitalsGroup["eVitals.31"] = null;
                                VitalsGroup["ReperfusionChecklist"] = null;
                            }
                        }
                    }
                    else {
                        v2Array.push({ section: "E14", element: "E14_25", val: setD2("eVitals.31", _val) });
                        VitalsGroup["eVitals.31"] = _val;
                        VitalsGroup["ReperfusionChecklist"] = setCodeText("eVitals.31 ", _val);
                    }
                }
                else
                {
                    v2Array.push({ section: "E14", element: "E14_25", val: v2NOT_APPLICABLE });
                    VitalsGroup["ReperfusionChecklist"] = NOT_APPLICABLE;
                    VitalsGroup["eVitals.31"] = v3NOT_APPLICABLE;
                };
        
                //eVital.32/////////////////////////////   
                _val = getValue(businessObject.elements, "eVitals.32 ");
                if (eVitals.IsValid == true) {
                    if (_val == null)
                    {
                        _PNValue = getPN("eVitals.32");
                        if (_PNValue != null)
                        {
                            if (_PNValue == "8801023")
                            {
                                v2Array.push({ section: "E14", element: "E14_26", val: v2NOT_KNOWN });
                                VitalsGroup["eVitals.32"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                                VitalsGroup["APGAR"] = _PNValue;
                            }
                        }
                        else
                        {
                            v2Array.push({ section: "E14", element: "E14_26", val: null });
                            VitalsGroup["eVitals.32"] = null;
                            VitalsGroup["APGAR"] = null;
                        }
                    }
                    else
                    {
                        v2Array.push({ section: "E14", element: "E14_26", val: _val });
                        VitalsGroup["eVitals.32"] = _val;
                        VitalsGroup["APGAR"] = _val;
                    }
                }
                else
                {
                    v2Array.push({ section: "E14", element: "E14_26", val: null });
                    VitalsGroup["eVitals.32"] = null;
                    VitalsGroup["APGAR"] = null;
                };
        
                //eVital.33/////////////////////////////   
                _val = getValue(businessObject.elements, "eVitals.33 ");
                if (eVitals.IsValid == true)
                {
                    if (_val == null) 
                    {
                        _PNValue = getPN("eVitals.33");
                        if (_PNValue != null) 
                        {
                            if (_PNValue == "8801019") 
                            {
                                v2Array.push({ section: "E14", element: "E14_27", val: v2NOT_KNOWN });
                                VitalsGroup["eVitals.33"] = PN_REFUSED_IS_NILLABLE;
                                VitalsGroup["RevisedTraumaScore"] = _PNValue;
                            }
                            else if (_PNValue == "8801023") 
                            {
                                v2Array.push({ section: "E14", element: "E14_27", val: v2NOT_KNOWN });
                                VitalsGroup["eVitals.33"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                                VitalsGroup["RevisedTraumaScore"] = _PNValue;
                            }
                        }
                        else 
                        {
                            v2Array.push({ section: "E14", element: "E14_27", val: null });
                            VitalsGroup["eVitals.33"] = null;
                            VitalsGroup["RevisedTraumaScore"] = null;
                        }
                    }
                    else 
                    {                
                        VitalsGroup["eVitals.31"] = _val;
                        VitalsGroup["RevisedTraumaScore"] = _val;
                    };
                }
                else
                {
                    v2Array.push({ section: "E14", element: "E14_27", val: null });
                    VitalsGroup["eVitals.33"] = null;
                    VitalsGroup["RevisedTraumaScore"] = null;
                }
            
            }
            */
            return eVitals;
        };
var XMLWriter = function () {
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
                    this.XML.push("/>");
                    this.Nodes.pop();
                }
                else if (this.Nodes.length > 0)
                    this.XML.push("</" + this.Nodes.pop() + ">");
                this.State = "";
            }
            this.Attrib = function (Name, Value) {
                if (this.State != "beg" || !Name) return;
                this.XML.push(" " + Name + "=\"" + this.FormatXML(Value) + "\"");
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
        };
var stringToXMLDoc = (function (global) {

    // W3C DOMParser support
    if (global.DOMParser) {
        return function (text) {
            var parser = new global.DOMParser();
            return parser.parseFromString(text, "application/xml");
        }

        // MS ActiveXObject support
    } else {
        return function (text) {
            var xmlDoc;

            // Can't assume support and can't test, so try..catch
            try {
                xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                xmlDoc.async = "false";
                xmlDoc.loadXML(text);
            } catch (e) { }
            return xmlDoc;
        }
    }
}(this));
var isRequiredStateElement = function (elementID) {
            return true;
        };
var getValue = function (elementList, valueElement)
{
    var _arr = [];
    var returnObject = new Object();
    var valueObject = new Object();

    for (var i = 0; i < elementList.length; i++)
    {
//        console.log(elementList[i].attributes.title);
//        console.log(elementList[i].attributes.value);
        if (elementList[i].attributes.title == valueElement)
        {
            if ((elementList[i].attributes.value == undefined) || (elementList[i].attributes.value == ""))
            {

                valueObject.IsNull = true;
                return valueObject;
            }
            else
            {                
                if (elementList[i].attributes.value.trim().length != 0)  //Can't trust data.  
                {
                    returnObject.val = elementList[i].attributes.value;
                    if (elementList[i].attributes.pn != "")
                    {
                        returnObject.PN = pn;
                        returnObject.HasPN = true;
                    }
                    if (elementList[i].attributes.params != undefined)
                    {
                        if(elementList[i].attributes.params.PhoneNumberType !=undefined)
                        {
                            returnObject.PhoneNumberType = elementList[i].attributes.params.PhoneNumberType.value;
                        };
                        if(elementList[i].attributes.params.EmailType !=undefined)
                        {
                            returnObject.EmailType = elementList[i].attributes.params.EmailType.value;
                        }
                    }
                    _arr.push(returnObject);
                }
            }
        }
    };
    valueObject.Count = _arr.length;
    valueObject.IsNull = false;
    returnObject.HasValue = true;
    valueObject.ValueArray = _arr;
    return valueObject;
};
function setV2(NEMSISElementNumber, v3Val, compValue) {
    //    console.log(NEMSISElementNumber);
    var _retValue = "";
    //    console.log(codeVal);
    switch (NEMSISElementNumber) {
        case "eArrest.01":

            if (eArrest01[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retVal = eArrest01[v3Val];
            }
            break;
        case "eArrest.02":
            if (eArrest02[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retVal = eArrest02[v3Val];
            }
            break;
        case "eArrest.03":
            if (eArrest03[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retVal = eArrest03[v3Val];
            }
            break;

        case "eArrest.04":
            if (eArrest04[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retVal = eArrest04[v3Val];
            }
            break;


        case "eArrest.11":
            if (eArrest11[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retVal = eArrest11[v3Val];
            }
            break;

        case "eArrest.12":
            if (eArrest12[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retVal = eArrest12[v3Val];
            }
            break;

        case "eArrest.13":
            if (eArrest13[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retVal = eArrest13[v3Val];
            }
            break;

        case "eArrest.14":
            if (eArrest14[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retVal = eArrest14[v3Val];
            }
            break;


        case "eArrest.16":
            if (eArrest16[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retVal = eArrest16[v3Val];
            }
            break;


        case "eArrest.17":
            if (eArrest17[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retVal = eArrest17[v3Val];
            }
            break;

        case "eCrew.02":
            if (eCrew02[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retVal = eCrew02[v3Val];
            }
            break;
        case "eCrew.03":
            if (eCrew03[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retVal = eCrew03[v3Val];
            }
            break;

        case "eDispatch.02":
            if (eDispatch02[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retVal = eDispatch02[v3Val];
            }
            break;
        case "eDispatch.03":
            if (eDispatch03[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retVal = eDispatch03[v3Val];
            }
            break;
        case "eDispatch.04":
            if (eDispatch04[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retVal = eDispatch04[v3Val];
            }
            break;
        case "eDispatch.06":
            if (eDispatch06[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retVal = eDispatch06[v3Val];
            }
            break;
        case "eDispatch.07":
            if (eDispatch07[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retVal = eDispatch07[v3Val];
            }
            break;
        case "eDispatch.08":
            if (eDispatch08[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retVal = eDispatch08[v3Val];
            }
            break;

        case "eDispatch.02":

            if (eDispatch02[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retVal = eDispatch02[v3Val];
            }
            break;
        case "eDisposition.12":

            if (eDisposition12[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eDisposition12[v3Val];
            }
            break;
        case "eDisposition.13":
            if (eDisposition13[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eDisposition13[v3Val];
            }

            break;
        case "eDisposition.14":

            if (eDisposition14[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eDisposition13[v3Val];
            }
            break;

        case "eDisposition.15":

            if (eDisposition15[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eDisposition15[v3Val];
            }
            break;

        case "eDisposition.17":

            if (eDisposition17[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eDisposition17[v3Val];
            }
            break;


        case "eDisposition.19":

            if (eDisposition19[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eDisposition19[v3Val];
            }
            break;

        case "eDisposition.20":

            if (eDisposition20[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eDisposition20[v3Val];
            }
            break;
        case "eDisposition.21":

            if (eDisposition21[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eDisposition21[v3Val];
            }
            break;

        case "eExam.02":
            if (eExam02[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eExam02[v3Val];
            }
            break;

        case "eExam.04":
            if (eExam04[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eExam04[v3Val];
            }
            break;

        case "eExam.05":
            if (eExam05[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eExam05[v3Val];
            }
            break;

        case "eExam.07":
            if (eExam07[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eExam07[v3Val];
            }
            break;

        case "eExam.08":
            if (eExam08[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eExam08[v3Val];
            }
            break;

        case "eExam.09":
            if (eExam09[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eExam09[v3Val];
            }
            break;

        case "eExam.11":
            if (compValue == "3510001")  //General
            {
                if (eExam10_General[v3Val] == undefined) {
                    _retVal = v3Val + " UNDEFINED";
                }
                else {
                    _retValue = eExam10_General[v3Val];
                }
            };
            if (compValue == "3510003")//Left Lower Quadrant
            {
                if (eExam10_LeftLower[v3Val] == undefined) {
                    _retVal = v3Val + " UNDEFINED";
                }
                else {
                    _retValue = eExam10_LeftLower[v3Val];
                }
            };

            if (compValue == "3510005") //Left Upper Quadrant
            {
                if (eExam10_LeftUpper[v3Val] == undefined) {
                    _retVal = v3Val + " UNDEFINED";
                }
                else {
                    _retValue = eExam10_LeftUpper[v3Val];
                }
            };

            if (compValue == "3510007") //Periumbilical
            {
                if (eExam10_Periumbilical[v3Val] == undefined) {
                    _retVal = v3Val + " UNDEFINED";
                }
                else {
                    _retValue = eExam10_Periumbilical[v3Val];
                }
            };
            if (compValue == "3510009") //Right Lower Quadrant
            {
                if (eExam10_RightLower[v3Val] == undefined) {
                    _retVal = v3Val + " UNDEFINED";
                }
                else {
                    _retValue = eExam10_RightLower[v3Val];
                }
            };
            if (compValue == "3510011")//Right Upper Quadrant
            {
                if (eExam10_RightUpper[v3Val] == undefined) {
                    _retVal = v3Val + " UNDEFINED";
                }
                else {
                    _retValue = eExam10_RightUpper[v3Val];
                }
            };
            break;

        case "eExam.12":
            if (eExam12[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eExam12[v3Val];
            }
            break;

        case "eExam.14":
            var examSet1 = ["3513001", "3513003", "3513005", "3513007"]
            if (examSet1.indexOf(compValue) > -1) {
                if (eExam13_3513001[v3Val] == undefined) {
                    _retVal = v3Val + " UNDEFINED";
                }
                else {
                    _retValue = eExam13_3513001[v3Val];
                }
            };
            var examSet2 = ["3513009", "3513011", "3513013", "3513021", "3513023", "3513027"]
            if (examSet2.indexOf(compValue) > -1) {
                if (eExam13_3513009[v3Val] == undefined) {
                    _retVal = v3Val + " UNDEFINED";
                }
                else {
                    _retValue = eExam13_3513009[v3Val];
                }
            };
            var examSet2 = ["3513017", "3513019", "3513025"]
            if (examSet2.indexOf(compValue) > -1) {
                if (eExam13_3513017[v3Val] == undefined) {
                    _retVal = v3Val + " UNDEFINED";
                }
                else {
                    _retValue = eExam13_3513017[v3Val];
                }
            };
            break;

        case "eExam.16":

            var examSet1 = ["3515007", "3515011", "3515015", "3515019", "3515023", "3515027", "3515039", "3515043", "3515047", "3515067", "3515071", "3515095"]
            if (examSet1.indexOf(compValue) > -1)  //Extremities, right upper
            {
                if (eExam15_ExtremitiesRightUpper[v3Val] == undefined) {
                    _retVal = v3Val + " UNDEFINED";
                }
                else {
                    _retValue = eExam15_ExtremitiesRightUpper[v3Val];
                }
            };
            var examSet2 = ["3515005", "3515009", "3515013", "3515017", "3515021", "3515025", "3515037", "3515041", "3515045", "3515065", "3515069", "3515093"]
            if (examSet2.indexOf(compValue) > -1)//Extremities, left upper
            {
                if (eExam15_ExtremitiesLeftUpper[v3Val] == undefined) {
                    _retVal = v3Val + " UNDEFINED";
                }
                else {
                    _retValue = eExam15_ExtremitiesLeftUpper[v3Val];
                }
            };
            var examSet3 = ["3515003", "3515031", "3515035", "3515051", "3515055", "3515059", "3515063", "3515075", "3515077", "3515079", "3515083", "3515087", "3515091"]
            if (examSet3.indexOf(compValue) > -1)//Right Lower
            {
                if (eExam15_RightLower[v3Val] == undefined) {
                    _retVal = v3Val + " UNDEFINED";
                }
                else {
                    _retValue = eExam15_RightLower[v3Val];
                }
            };
            break;

            var examSet4 = ["3515001", "3515029", "3515033", "3515049", "3515053", "3515057", "3515061", "3515073", "3515075", "35150777", "3515081", "3515057", "3515089"]
            if (examSet4.indexOf(compValue) > -1)//Left Lower
            {
                if (eExam15_LeftLower[v3Val] == undefined) {
                    _retVal = v3Val + " UNDEFINED";
                }
                else {
                    _retValue = eExam15_LeftLower[v3Val];
                }
            };
            break;

        case "eExam.18":
            var examSet1 = ["3517001", "3517003"] //Bilateral and Left
            if (examSet1.indexOf(compValue) > -1)//Left Lower
            {
                if (eExam18_BilateralandLeft[v3Val] == undefined) {
                    _retVal = v3Val + " UNDEFINED";
                }
                else {
                    _retValue = eExam18_BilateralandLeft[v3Val];
                }
            };
            var examSet1 = ["3517001", "3517005"] //Bilateral and Right
            if (examSet1.indexOf(compValue) > -1)//Left Lower
            {
                {
                    if (eExam18_BilateralandRight[v3Val] == undefined) {
                        _retVal = v3Val + " UNDEFINED";
                    }
                    else {
                        _retValue = eExam18_BilateralandRight[v3Val];
                    }
                };
            }
            break;
        case "eExam.19":
            if (eExam19[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eExam19[v3Val];
            }
            break;

        case "eExam.20":
            if (eExam20[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eExam20[v3Val];
            }
            break;

        case "eHistory.01":
            if (eHistory01[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eHistory01[v3Val];
            }
            break;
        case "eHistory.05":
            if (eHistory05[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eHistory05[v3Val];
            }
            break;
        case "eHistory.09":
            if (eHistory09[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eHistory09[v3Val];
            }
            break;
        case "eHistory.10":
            if (eHistory10[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eHistory10[v3Val];
            }
            break;
        case "eHistory.14":
            if (eHistory14[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eHistory14[v3Val];
            }
            break;
        case "eHistory.15":
            if (eHistory15[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eHistory15[v3Val];
            }
            break;
        case "eHistory.16":
            if (eHistory16[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eHistory16[v3Val];
            }
            break;
        case "eHistory.17":
            if (eHistory17[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eHistory17[v3Val];
            }
            break;
        case "eHistory.18":
            if (eHistory18[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eHistory18[v3Val];
            }
            break;


        case "eMedication.02":

            if (eMedication02[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eMedication02[v3Val];
            }
            break;
        case "eMedication.04":

            if (eMedication04[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = (eMedication04[v3Val]);
            }
            break;
        case "eMedication.06":
            if (eMedication06[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eMedication06[v3Val];
            }
            break;
        case "eMedication.07":
            if (eMedication07[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eMedication07[v3Val];
            };
            break;
        case "eMedication.08":
            if (eMedication08[v3Val] == undefined) {
                _retValue = v3Val + "UNDEFINED";
            }
            else {
                _retValue = eMedication08[v3Val];
            };

            break;
        case "eMedication.11":
            if (eMedication11[v3Val] == undefined) {
                _retValue = v3Val + "UNDEFINED";
            }
            else {
                _retValue = eMedication11[v3Val];
            };
            break;
        case "eOther.01":
            if (eOther01[v3Val] == undefined) {
                _retValue = v3Val + "UNDEFINED";
            }
            else {
                _retValue = eOther01[v3Val];
            };
            break;
        case "eOther.02":
            if (eOther02[v3Val] == undefined) {
                _retValue = v3Val + "UNDEFINED";
            }
            else {
                _retValue = eOther02[v3Val];
            };
            break;
        case "eOther.03":
            if (eOther03[v3Val] == undefined) {
                _retValue = v3Val + "UNDEFINED";
            }
            else {
                _retValue = eOther03[v3Val];
            };
            break;
        case "eOther.06":
            if (eOther06[v3Val] == undefined) {
                _retValue = v3Val + "UNDEFINED";
            }
            else {
                _retValue = eOther06[v3Val];
            };
            break;
        case "eOther.07":
            if (eOther07[v3Val] == undefined) {
                _retValue = v3Val + "UNDEFINED";
            }
            else {
                _retValue = eOther07[v3Val];
            };
            break;
        case "eOutcome.01":
            if (eOutcome01[v3Val] == undefined) {
                _retValue = v3Val + "UNDEFINED";
            }
            else {
                _retValue = eOutcome01[v3Val];
            };
            break;
        case "eOutcome.02":
            if (eOutcome02[v3Val] == undefined) {
                _retValue = v3Val + "UNDEFINED";
            }
            else {
                _retValue = eOutcome02[v3Val];
            };
            break;
        case "eOutcome.03":
            if (eOutcome03[v3Val] == undefined) {
                _retValue = v3Val + "UNDEFINED";
            }
            else {
                _retValue = eOutcome03[v3Val];
            };
            break;
        case "eOutcome.17":
            if (eOutcome17[v3Val] == undefined) {
                _retValue = v3Val + "UNDEFINED";
            }
            else {
                _retValue = eOutcome17[v3Val];
            };
            break;
        case "ePatient.13":
            if (ePatient13[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = ePatient13[v3Val];
            }
            break;

        case "ePatient.14":
            if (ePatient14[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = ePatient14[v3Val];
            }
            break;
        case "ePatient.16":
            if (ePatient16[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = ePatient16[v3Val];
            }
            break;
        case "ePayment.01":
            if (ePayment01[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = ePayment01[v3Val];
            }
            break;

        case "ePayment.02":
            if (ePayment02[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = ePayment02[v3Val];
            }
            break;
        case "ePayment.11":
            if (ePayment11[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = ePayment11[v3Val];
            }
            break;
        case "ePayment.40":
            if (ePayment40[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = ePayment40[v3Val];
            }
            break;
        case "ePayment.50":
            if (ePayment50[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = ePayment50[v3Val];
            }
            break;
        case "ePayment.52":
            if (ePayment52[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = ePayment52[v3Val];
            }
            break;
        case "eProcedures.07":
            if (eProcedures07[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eProcedures07[v3Val];
            }
            break;
        case "eProcedures.08":
            if (eProcedures08[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eProcedures08[v3Val];
            }
            break;
        case "eProcedures.11":
            if (eProcedures11[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eProcedures11[v3Val];
            }
            break;
        case "eProcedures.13":
            if (eProcedures13[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eProcedures13[v3Val];
            }
            break;

        case "eScene.04":
            if (eScene04[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eScene04[v3Val];
            }
            break;
        case "eScene.06":
            if (eScene06[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eScene06[v3Val];
            }
            break;
        case "eScene.07":
            if (eScene07[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eScene07[v3Val];
            }
            break;
        case "eScene.09":
            if (eScene09[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eScene09[v3Val];
            }
            break;

        case "eSituation.06":
            if (eSituation06[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eSituation06[v3Val];
            }
            break;
        case "eSituation.07":
            if (eSituation07[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eSituation07[v3Val];
            }
            break;
        case "eSituation.08":
            if (eSituation08[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eSituation08[v3Val];
            }
            break;
        case "eSituation.09":
            if (eSituation09[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eSituation09[v3Val];
            }
            break;

        case "eSituation.10":
            if (eSituation10[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eSituation10[v3Val];
            }
            break;
        case "eVitals.02":
            if (eVitals02[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eVitals02[v3Val];
            }
            break;
        case "eVitals.03":
            if (eVitals03[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eVitals03[v3Val];
            }
            break;
        case "eVitals.08":
            if (eVitals08[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eVitals08[v3Val];
            }
            break;
        case "eVitals.13":
            if (eVitals13[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eVitals13[v3Val];
            }
            break;
        case "eVitals.15":
            if (eVitals15[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eVitals15[v3Val];
            }
            break;
        case "eVitals.19":
            if (eVitals19[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eVitals19[v3Val];
            }
            break;
        case "eVitals.20":
            if (eVitals20[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eVitals20[v3Val];
            }
            break;
        case "eVitals.21":
            if (eVitals21[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eVitals21[v3Val];
            }
            break;
        case "eVitals.22":
            if (eVitals22[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eVitals22[v3Val];
            }
            break;
        case "eVitals.25":
            if (eVitals25[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eVitals25[v3Val];
            }
            break;
        case "eVitals.26":
            if (eVitals26[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eVitals26[v3Val];
            }
            break;
        case "eVitals.29":
            if (eVitals29[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eVitals29[v3Val];
            }
            break;
        case "eVitals.31":
            if (eVitals31[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retValue = eVitals31[v3Val];
            }
            break;






        default:
            _retArray = NEMSISElementNumber = " version 2 not found";
    }
    return _retValue;
};
var eArrest01 = {
    "3001001": "0",
    "3001003": "2240",
    "3001005": "2245"
};
var eArrest02 = {
    "3002001": "2250",
    "3002003": "2260",
    "3002005": "2275",
    "3002007": "2270",
    "3002009": "2275",
    "3002011": "2275",
    "3002013": "2265",
    "3002015": "2255"
};
var eArrest03 = {
    "3003001": "2280",
    "3003003": "2285",
    "3003005": "2290",
    "3003007": "2295",
    "3003009": "2300",
    "3003011": "2305"
};
var eArrest04 = {
    "3004001": "2320",
    "3004003": "2315",
    "3004005": "2310",
    "3004007": "2315"
};
var eArrest11 = {
    "3011001": "2325",
    "3011003": "2330",
    "3011005": "2345",
    "3011007": "2350",
    "3011009": "2355",
    "3011011": "2360",
    "3011013": "2365"
};
var eArrest12 = {
    "3012001": "0",
    "3012003": "2370",
    "3012005": "2370",
    "3012005": "2375"
};
var eArrest13 = {
    "3013001": "2380",
    "3013003": "2380",
    "3013005": "2385",
    "3013007": "2385"
};
/*var eArrest14 = function (estTimeEvent, estTimeArrival) 
    {
        var _diff = Math.abs(new Date(estTimeCal) - new Date(estTimeArrival));
        var _minuteCount = Math.floor((diff / 1000) / 60);
        if (_minuteCount > 20) {
            _arrest14 = "2390";
        }
        else if (_minuteCount > 15 && _mincount >= 20) {
            _arrest14 = "2395";
        }
        else if (_minuteCount > 10 && _mincount >= 15) {
            _arrest14 = "2400";
        }
        else if (_minuteCount > 8 && _mincount >= 10) {
            _arrest14 = "2405";
        }
        else if (_minuteCount > 6 && _mincount >= 8) {
            _arrest14 = "2410";
        }
        else if (_minuteCount > 4 && _mincount >= 6) {
            _arrest14 = "2415";
        }
        else if (_minuteCount > 2 && _mincount >= 4) {
            _arrest14 = "2420";
        }
        else if (_minuteCount > 0 && _mincount >= 2) {
            _arrest14 = "2425";
        }
        else {
            _arrest14 = "-10";
        }
        return _arrest14;
    }
    */
var eCrew03 = {
    "2403001": "580",
    "2403003": "580",
    "2403005": "595",
    "2403007": "590",
    "2403009": "600",
    "2403011": "585",
    "2403013": "590"
};
var eCrew02 = {
    "9925001": "6110",
    "9925003": "6100",
    "9925005": "6090",
    "9925007": "6110",
    "9925013": "	6120",
    "9925015": "	6090",
    "9925017": "	6100",
    "9925019": "	6110",
    "9925021": "	6111",
    "9925023": "	640",
    "9925025": "	645",
    "9925027": "	6112",
    "9925031": "635",
    "9925033": "6110",
    "9925034": "610",
    "9925037": "611",
    "9925039": "6110",
    "9925041": "6111",
    "9925043": "6111"
};
var eDevice03 = {
    "4103001": "5090",
    "4103003": "5095",
    "4103005": "5100",
    "4103007": "5105",
    "4103009": "5110",
    "4103011": "5115",
    "4103013": "5120",
    "4103015": "5125",
    "4103017": "5130",
    "4103019": "5135",
    "4103021": "5140",
    "4103025": "5145",
    "4103027": "5150",
    "4103029": "5155",
    "4103031": "5160",
    "4103033": "5165",
    "4103035": "5170",
    "4103037": "5175",
    "4103039": "5180",
    "4103041": "5185",
    "4103043": "5190",
    "4103045": "5195"
};
var eDevice04 = {
    "JPG": "5200",
    "PDF": "5205"
};
var eDevice06 = {
    "4106001": "5220",
    "4106003": "5210",
    "4106005": "5225",
    "4106007": "5215",
    "4106009": "5235",
    "4106011": "5230",

    "4106013": "5240"
};
var eDevice07 = {
    "4107001": "5245",
    "4107003": "5250",
    "4107005": "5255",
    "4107007": "5260",
    "4107009": "5265",
    "4107011": "5270",
    "4107013": "5305",
    "4107015": "5305",
    "4107017": "5275",
    "4107019": "5280",
    "4107021": "5285",
    "4107025": "5290",
    "4107029": "5295",
    "4107033": "5300",
    "4107035": "5300",
    "4107037": "5300",
    "4107039": "5300",
    "4107041": "5300"
};
var eDevice09 = {
    "4109001": "5310",
    "4109003": "5311"
};
var eDispatch01 = {
    "2301001": "400",
    "2301003": "405",
    "2301005": "410",
    "2301007": "415",
    "2301009": "540",
    "2301011": "420",
    "2301013": "425",
    "2301015": "430",
    "2301017": "435",
    "2301019": "440",
    "2301021": "445",
    "2301023": "450",
    "2301025": "455",
    "2301027": "460",
    "2301029": "470",
    "2301031": "475",
    "2301033": "480",
    "2301035": "-10",
    "2301037": "485",
    "2301039": "560",
    "2301041": "490",
    "2301043": "495",
    "2301045": "500",
    "2301047": "505",
    "2301049": "-10",
    "2301051": "-10",
    "2301053": "510",
    "2301055": "565",
    "2301057": "515",
    "2301059": "520",
    "2301061": "	525",
    "2301063": "530",
    "2301065": "-10",
    "2301067": "535",
    "2301069": "540",
    "2301071": "560",
    "2301073": "545",
    "2301075": "-10",
    "2301077": "550",
    "2301079": "555",
    "2301081": "465",
    "2301083": "-10"
};
var eDispatch02 = {
    "2302001": "0",
    "2302003": "570",
    "2302005": "575",
    "2302007": "575"
};
var eDisposition12 = {
    "4212001": "4845",
    "4212003": "4850",
    "4212005": "4845",
    "4212007": "4815",
    "4212009": "4815",
    "4212011": "4825",
    "4212013": "4820",
    "4212015": "4820",
    "4212017": "4820",
    "4212019": "4820",
    "4212021": "4830",
    "4212023": "4835",
    "4212025": "4835",
    "4212027": "4840",
    "4212029": "4840",
    "4212031": "4845",
    "4212033": "4850",
    "4212035": "4855",
    "4212037": "4860",
    "4212039": "4830",
    "4212041": "4830",
    "4212043": "4830"
};
var eDisposition13 = {
    "9909001": "4865",
    "9909003": "4885",
    "9909005": "4885",
    "9909007": "4870",
    "9909009": "4885",
    "9909011": "4875",
    "9909013": "4880",
    "9909015": "4885"
};
var eDisposition14 = {
    "4214001": "4890",
    "4214003": "4895",
    "4214005": "4900",
    "4214007": "4900",
    "4214009": "4925",
    "4214011": "4905",
    "4214013": "4910",
    "4214015": "4915",
    "4214017": "4920",
    "4214019": "4925"
};
var eDisposition15 = {
    "9909001": "4930",
    "9909003": "4950",
    "9909005": "4950",
    "9909007": "4935",
    "9909009": "4950",
    "9909011": "4940",
    "9909013": "4945",
    "9909015": "4950"
};
var eDisposition17 = {
    "4217001": "4965",
    "4217003": "4955",
    "4217005": "4970",
    "4217007": "4960"
};
var eDisposition19 = {
    "9916001": "4975",
    "9916003": "4980",
    "9916005": "4985"
}
var eDisposition20 = {
    "4220001": "4990",
    "4220003": "4995",
    "4220005": "5000",
    "4220007": "5005",
    "4220009": "5010",
    "4220011": "5015",
    "4220013": "5020",
    "4220015": "5025",
    "4220017": "5030",
    "4220019": "5035",
    "4220021": "5040"
};
var eDisposition21 = {
    "4221001": "7270",
    "4221003": "7280",
    "4221005": "7290",
    "4221007": "7290",
    "4221009": "7300",
    "4221011": "7310",
    "4221013": "7330",
    "4221015": "7340",
    "4221017": "7350",
    "4221019": "7360"
};
var eExam02 = {
    "3502001": "3375",
    "3502003": "3380",
    "3502005": "3385",
    "3502007": "3390",
    "3502009": "3395",
    "3502011": "3400",
    "3502013": "3405",
    "3502015": "3410",
    "3502017": "3415"
};
var eExam04 = {
    "3504001": "3430",
    "3504003": "3435",
    "3504005": "3440",
    "3504007": "3430",
    "3504009": "3435",
    "3504011": "3465",
    "3504013": "3430",
    "3504015": "3445",
    "3504017": "3450",
    "3504019": "3455",
    "3504021": "3420",
    "3504023": "3425",
    "3504025": "3460",
    "3504027": "-10",
    "3504029": "-10",
    "3504031": "-10",
    "3504033": "3465"
}
var eExam05 = {
    "3505001": "3490",
    "3505003": "3490",
    "3505005": "3490",
    "3505007": "3490",
    "3505009": "3490",
    "3505011": "3490",
    "3505013": "3490",
    "3505015": "3490",
    "3505017": "3490",
    "3505019": "3495",
    "3505021": "3485",
    "3505023": "3490",
    "3505025": "3495",
    "3505027": "3490",
    "3505029": "3490",
    "3505031": "3490",
    "3505033": "3470",
    "3505035": "3475",
    "3505037": "3490",
    "3505039": "3490",
    "3505045": "3495",
    "3505047": "3495",
    "3505049": "3495",
    "3505051": "3495",
    "3505053": "3495"
};
var eExam07 = {
    "3507001": "-10",
    "3507003": "-10",
    "3507005": "-10",
    "3507007": "-10",
    "3507009": "-10",
    "3507011": "-10",
    "3507013": "-10",
    "3507015": "-10",
    "3507017": "-10",
    "3507019": "-10",
    "3507021": "-10",
    "3507023": "-10",
    "3507025": "3500",
    "3507027": "-10",
    "3507029": "3500",
    "3507031": "3505",
    "3507033": "-10",
    "3507035": "-10",
    "3507037": "3515",
    "3507039": "3520",
    "3507045": "3525",
    "3507047": "3525",
    "3507049": "-10",
    "3507051": "-10",
    "3507053": "-10",
    "3507055": "-10",
    "3507057": "-10",
    "3507059": "-10",

}
var eExam08 = {
    "3508001": "-10",
    "3508003": "-10",
    "3508005": "3540",
    "3508007": "-10",
    "3508009": "-10",
    "3508011": "3545",
    "3508013": "3550",
    "3508015": "3550",
    "3508017": "3550",
    "3508019": "3570",
    "3508021": "3570",
    "3508023": "3570",
    "3508025": "-10",
    "3508027": "-10",
    "3508029": "-10",
    "3508031": "-10",
    "3508033": "-10",
    "3508035": "-10",
    "3508037": "3555",
    "3508039": "3560",
    "3508041": "-10",
    "3508043": "-10",
    "3508045": "-10",
    "3508047": "3565",
    "3508049": "-10",
    "3508051": "-10",
    "3508053": "3530",
    "3508055": "3535",
    "3508057": "-10",
    "3508059": "3585",
    "3508061": "3590",
    "3508063": "-10",
    "3508065": "3575",
    "3508067": "3575",
    "3508069": "-10",
    "3508071": "3580",
    "3508073": "3580",
    "3508075": "3580",
    "3508077": "-10",
    "3508079": "-10",
    "3508085": "3585",
    "3508087": "3590",
    "3508089": "3580",
    "3508091": "3580",
    "3508093": "3580",
    "3508095": "3580",
    "3508097": "3580",
    "3508099": "3565",
    "3508101": "-10",
    "3508103": "3585"

};
var eExam09 = {
    "3509001": "3610",
    "3509003": "3605",
    "3509005": "3610",
    "3509007": "3610",
    "3509009": "3595",
    "3509011": "3600",
    "3509013": "3605",
    "3509015": "3605",
    "3509017": "3605",
    "3509019": "3605",
    "3509021": "3605"
};
var eExam10_General = {  //Generalized for eExam11

    "3511001": "3640",
    "3511003": "3625",
    "3511005": "3640",
    "3511007": "3640",
    "3511009": "3640",
    "3511011": "3640",
    "3511013": "3640",
    "3511015": "3640",
    "3511017": "3640",
    "3511019": "3640",
    "3511021": "3625",
    "3511023": "3635",
    "3511025": "3630",
    "3511027": "3640",
    "3511029": "3640",
    "3511031": "3630",
    "3511033": "3635",
    "3511035": "3635",
    "3511037": "3615",
    "3511039": "3620",
    "3511041": "3640",
    "3511043": "3640",
    "3511045": "3640",
    "3511051": "3640",
    "3511053": "3640",
    "3511055": "3640",
    "3511057": "3635",
    "3511059": "3640",
    "3511061": "3635"
};
var eExam10_LeftLower = {
    "3511001": "3670",
    "3511003": "3655",
    "3511005": "3670",
    "3511007": "3670",
    "3511009": "3670",
    "3511011": "3670",
    "3511013": "3670",
    "3511015": "3670",
    "3511017": "3670",
    "3511019": "3670",
    "3511021": "3655",
    "3511023": "3665",
    "3511025": "3660",
    "3511027": "3670",
    "3511029": "3670",
    "3511031": "3660",
    "3511033": "3665",
    "3511035": "3665",
    "3511037": "3645",
    "3511039": "3650",
    "3511041": "3670",
    "3511043": "3670",
    "3511045": "3670",
    "3511051": "3670",
    "3511053": "3670",
    "3511055": "3670",
    "3511057": "3665",
    "3511059": "3670",
    "3511061": "3665"
};
var eExam10_LeftUpper = { //Left Upper Quadrant for eExam11
    "3511001": "3640",
    "3511003": "3625",
    "3511005": "3640",
    "3511007": "3640",
    "3511009": "3640",
    "3511011": "3640",
    "3511013": "3640",
    "3511015": "3640",
    "3511017": "3640",
    "3511019": "3640",
    "3511021": "3625",
    "3511023": "3635",
    "3511025": "3630",
    "3511027": "3640",
    "3511029": "3640",
    "3511031": "3630",
    "3511033": "3635",
    "3511035": "3635",
    "3511037": "3615",
    "3511039": "3620",
    "3511041": "3640",
    "3511043": "3640",
    "3511045": "3640",
    "3511051": "3640",
    "3511053": "3640",
    "3511055": "3640",
    "3511057": "3635",
    "3511059": "3640",
    "3511061": "3635"
};
var eExam10_Periumbilical = //Periumbilical for eExam11
{
    "3511001": "3640",
    "3511003": "3625",
    "3511005": "3640",
    "3511007": "3640",
    "3511009": "3640",
    "3511011": "3640",
    "3511013": "3640",
    "3511015": "3640",
    "3511017": "3640",
    "3511019": "3640",
    "3511021": "3625",
    "3511023": "3635",
    "3511025": "3630",
    "3511027": "3640",
    "3511029": "3640",
    "3511031": "3630",
    "3511033": "3635",
    "3511035": "3635",
    "3511037": "3615",
    "3511039": "3620",
    "3511041": "3640",
    "3511043": "3640",
    "3511045": "3640",
    "3511051": "3640",
    "3511053": "3640",
    "3511055": "3640",
    "3511057": "3635",
    "3511059": "3640",
    "3511061": "3635"
};
var eExam10_RightLower =  //Right Lower Quadrant for eExam11
{
    "3511001": "3730",
    "3511003": "3725",
    "3511005": "3730",
    "3511007": "3730",
    "3511009": "3730",
    "3511011": "3730",
    "3511013": "3730",
    "3511015": "3730",
    "3511017": "3730",
    "3511019": "3730",
    "3511021": "3725",
    "3511023": "3725",
    "3511025": "3720",
    "3511027": "3730",
    "3511029": "3730",
    "3511031": "3720",
    "3511033": "3725",
    "3511035": "3725",
    "3511037": "3505",
    "3511039": "3710",
    "3511041": "3730",
    "3511043": "3730",
    "3511045": "3730",
    "3511051": "3730",
    "3511053": "3730",
    "3511055": "3730",
    "3511057": "3725",
    "3511059": "3730",
    "3511061": "3725"
};
var eExam10_RightUpper =  //Right Upper Quadrant for eExam11
{
    "3511001": "3680",
    "3511003": "3675",
    "3511005": "3690",
    "3511007": "3690",
    "3511009": "3690",
    "3511011": "3690",
    "3511013": "3690",
    "3511015": "3690",
    "3511017": "3690",
    "3511019": "3690",
    "3511021": "3675",
    "3511023": "3685",
    "3511025": "3680",
    "3511027": "3690",
    "3511029": "3690",
    "3511031": "3680",
    "3511033": "3685",
    "3511035": "3685",
    "3511037": "3675",
    "3511039": "3680",
    "3511041": "3690",
    "3511043": "3690",
    "3511045": "3690",
    "3511051": "3690",
    "3511053": "3690",
    "3511055": "3690",
    "3511057": "3685",
    "3511059": "3690",
    "3511061": "3685"
};
var eExam12 = {
    "3512001": "3755",
    "3512003": "3755",
    "3512005": "3755",
    "3512007": "3760",
    "3512009": "3760",
    "3512011": "3760",
    "3512013": "3760",
    "3512015": "3755",
    "3512017": "3755",
    "3512019": "3755",
    "3512021": "3755",
    "3512023": "3755",
    "3512025": "3755",
    "3512027": "3750",
    "3512029": "3755",
    "3512031": "3755",
    "3512033": "3755",
    "3512035": "3755",
    "512037": "3735",
    "3512039": "3740",
    "3512041": "3755",
    "3512043": "3755",
    "3512045": "3755",
    "3512047": "3750",
    "3512049": "3745",
    "3512051": "3755",
    "3512057": "3755",
    "3512059": "3755",
    "3512061": "3755",
    "3512063": "3755",
    "3512065": "3755"
};
//    if eExam.13 = 3513001 or 3513003 or 3513005 or 3513007 the eExam14 =
var eExam13_3513001 = {
    "3514001": "3780",
    "3514003": "3780",
    "3514005": "3780",
    "3514007": "3780",
    "3514009": "3780",
    "3514011": "3780",
    "3514013": "3780",
    "3514015": "3780",
    "3514017": "3780",
    "3514019": "3780",
    "3514021": "3780",
    "3514023": "3780",
    "3514025": "3780",
    "3514027": "3765",
    "3514029": "3770",
    "3514031": "3780",
    "3514033": "3775",
    "3514035": "3780",
    "3514041": "3780",
    "3514043": "3785",
    "3514045": "3780",
    "3514047": "3780",
    "3514049": "3780",
    "3514051": "3780",
    "3514053": "3780",
    "3514055": "3780"
};
//if eExam.13 = 3513009 or 3513011 or 3513013 or 3513021 or 3513023 or 3513027 
var eExam13_3513009 = {
    "3514001": "3805",
    "3514003": "3805",
    "3514005": "3805",
    "3514007": "3805",
    "3514009": "3805",
    "3514011": "3805",
    "3514013": "3805",
    "3514015": "3805",
    "3514017": "3805",
    "3514019": "3805",
    "3514021": "3805",
    "3514023": "3805",
    "3514025": "3805",
    "3514027": "3790",
    "3514029": "3795",
    "3514031": "3805",
    "3514033": "3800",
    "3514035": "3805",
    "3514041": "3805",
    "3514043": "3810",
    "3514045": "3805",
    "3514047": "3805",
    "3514049": "3805",
    "3514051": "3805",
    "3514053": "3805",
    "3514055": "3805"
};
//    if eExam.13 = 3513017 or 3513019 or 3513025
var eExam13_3513017 = {
    "3514001": "3830",
    "3514003": "3830",
    "3514005": "3830",
    "3514007": "3830",
    "3514009": "3830",
    "3514011": "3830",
    "3514013": "3830",
    "3514015": "3830",
    "3514017": "3830",
    "3514019": "3830",
    "3514021": "3830",
    "3514023": "3830",
    "3514025": "3830",
    "3514027": "3815",
    "3514029": "3820",
    "3514031": "3830",
    "3514033": "3825",
    "3514035": "3830",
    "3514041": "3830",
    "3514043": "3835",
    "3514045": "3830",
    "3514047": "3830",
    "3514049": "3830",
    "3514051": "3830",
    "3514053": "3830",
    "3514055": "3830"
};
//Extremities, right upper
//if eExam.15 = 3515007, 3515011,  3515015, 3515019, 3515023, 3515027, 3515039, 3515043, 3515047, 3515067, 3515071, 3515095
var eExam15_ExtremitiesRightUpper = {
    "3516001": "3865",
    "3516003": "3865",
    "3516005": "3865",
    "3516007": "3865",
    "3516009": "3865",
    "3516011": "3865",
    "3516013": "3865",
    "3516015": "3865",
    "3516017": "3865",
    "3516019": "3865",
    "3516021": "3865",
    "3516023": "3865",
    "3516025": "3865",
    "3516027": "3865",
    "3516029": "3860",
    "3516031": "3865",
    "3516033": "3865",
    "3516035": "3865",
    "3516037": "3865",
    "3516039": "3865",
    "3516041": "3865",
    "3516043": "3870",
    "3516045": "3840",
    "3516047": "3840",
    "3516049": "3840",
    "3516051": "3845",
    "3516053": "3865",
    "3516055": "3865",
    "3516057": "3850",
    "3516059": "3850",
    "3516061": "3840",
    "3516063": "3865",
    "3516065": "3855",
    "3516067": "3855",
    "3516069": "3840",
    "3516075": "3865",
    "3516077": "3865",
    "3516079": "3865",
    "3516081": "3865"
}
//Extremities, left upper
//if eExam.15 = 3515005, 3515009,  3515013, 3515017, 3515021, 3515025, 3515037, 3515041, 3515045, 3515065, 3515069, 3515093
var eExam15_ExtremitiesLeftUpper = {
    "3516001": "3935",
    "3516003": "3935",
    "3516005": "3935",
    "3516007": "3935",
    "3516009": "3935",
    "3516011": "3935",
    "3516013": "3935",
    "3516015": "3935",
    "3516017": "3935",
    "3516019": "3935",
    "3516021": "3935",
    "3516023": "3935",
    "3516025": "3935",
    "3516027": "3935",
    "3516029": "3930",
    "3516031": "3935",
    "3516033": "3935",
    "3516035": "3935",
    "3516037": "3935",
    "3516039": "3935",
    "3516041": "3935",
    "3516043": "3940",
    "3516045": "3910",
    "3516047": "3910",
    "3516049": "3910",
    "3516051": "3915",
    "3516053": "3935",
    "3516055": "3935",
    "3516057": "3920",
    "3516059": "3920",
    "3516061": "3910",
    "3516063": "3935",
    "3516065": "3925",
    "3516067": "3925",
    "3516069": "3910",
    "3516075": "3935",
    "3516077": "3935",
    "3516079": "3935",
    "3516081": "3935"
}
//Extremities, RIGHT LOWER
// if eExam.15 = 3515003, 3515031,  3515035, 3515051, 3515055, 3515059, 3515063, 3515075, 3515077, 3515079, 3515083, 3515087, 3515091
var eExam15_RightLower = {
    "3516001": "3900",
    "3516003": "3900",
    "3516005": "3900",
    "3516007": "3900",
    "3516009": "3900",
    "3516011": "3900",
    "3516013": "3900",
    "3516015": "3900",
    "3516017": "3900",
    "3516019": "3900",
    "3516021": "3900",
    "3516023": "3900",
    "3516025": "3900",
    "3516027": "3900",
    "3516029": "3895",
    "3516031": "3900",
    "3516033": "3900",
    "3516035": "3900",
    "3516037": "3900",
    "3516039": "3900",
    "3516041": "3900",
    "3516043": "3905",
    "3516045": "3875",
    "3516047": "3875",
    "3516049": "3875",
    "3516051": "3880",
    "3516053": "3900",
    "3516055": "3900",
    "3516057": "3885",
    "3516059": "3885",
    "3516061": "3875",
    "3516063": "3900",
    "3516065": "3890",
    "3516067": "3890",
    "3516069": "3875",
    "3516075": "3900",
    "3516077": "3900",
    "3516079": "3900",
    "3516081": "3900"
}
//Extremities, LEFT LOWER
// if eExam.15 = "3515001", "3515029",  "3515033", "3515049", "3515053", "3515057", "3515061", "3515073", "3515075", "35150777", "3515081", "3515057", "3515089"
eExam15_LeftLower = {
    "3516001": "3970",
    "3516003": "3970",
    "3516005": "3970",
    "3516007": "3970",
    "3516009": "3970",
    "3516011": "3970",
    "3516013": "3970",
    "3516015": "3970",
    "3516017": "3970",
    "3516019": "3970",
    "3516021": "3970",
    "3516023": "3970",
    "3516025": "3970",
    "3516027": "3970",
    "3516029": "3965",
    "3516031": "3970",
    "3516033": "3970",
    "3516035": "3970",
    "3516037": "3970",
    "3516039": "3970",
    "3516041": "3970",
    "3516043": "3975",
    "3516045": "3945",
    "3516047": "3945",
    "3516049": "3945",
    "3516051": "3950",
    "3516053": "3970",
    "3516055": "3970",
    "3516057": "3955",
    "3516059": "3955",
    "3516061": "3945",
    "3516063": "3970",
    "3516065": "3960",
    "3516067": "3960",
    "3516069": "3945",
    "3516075": "3970",
    "3516077": "3970",
    "3516079": "3970",
    "3516081": "3970"
};
//if eExam.17 = 3517001 and 3517003
var eExam18_BilateralandLeft = {
    "3518001": "3985",
    "3518003": "3985",
    "3518005": "3990",
    "3518007": "3995",
    "3518009": "4000",
    "3518011": "4005",
    "3518013": "4010",
    "3518015": "4010",
    "3518017": "4015",
    "3518019": "4020",
    "3518021": "4020",
    "3518023": "4020",
    "3518025": "4020",
    "3518027": "4020",
    "3518029": "4020",
    "3518031": "4020",
    "3518033": "4020",
    "3518035": "4025",
    "3518037": "4025",
    "3518039": "3980",
    "3518041": "4025",
    "3518043": "4020",
    "3518045": "4020",
    "3518047": "4020",
    "3518049": "4020",
    "3518051": "4020",
    "3518053": "4020",
    "3518055": "4020",
    "3518057": "4020",
    "3518059": "4025"
};
var eExam18_BilateralandRight = {

    "3518001": "4035",
    "3518003": "4035",
    "3518005": "4040",
    "3518007": "4045",
    "3518009": "4050",
    "3518011": "4055",
    "3518013": "4060",
    "3518015": "4060",
    "3518017": "4075",
    "3518019": "4070",
    "3518021": "4070",
    "3518023": "4070",
    "3518025": "4070",
    "3518027": "4070",
    "3518029": "4070",
    "3518031": "4070",
    "3518033": "4070",
    "3518035": "4075",
    "3518037": "4075",
    "3518039": "4030",
    "3518041": "4075",
    "3518043": "4070",
    "3518045": "4070",
    "3518047": "4070",
    "3518049": "4070",
    "3518051": "4070",
    "3518053": "4070",
    "3518055": "4070",
    "3518057": "4070",
    "3518059": "4075"
};
var eExam19 = {
    "3519001": "4090",
    "3519003": "4095",
    "3519005": "4100",
    "3519007": "4080",
    "3519009": "4085",
    "3519011": "4105",
    "3519013": "4110",
    "3519015": "4110",
    "3519017": "4115",
    "3519019": "4120",
    "3519021": "4120"
};
var eExam20 = {
    "3520001": "4130",
    "3520003": "4155",
    "3520005": "4135",
    "3520007": "4125",
    "3520009": "4145",
    "3520011": "4145",
    "3520013": "4135",
    "3520015": "4125",
    "3520017": "4165",
    "3520019": "4170",
    "3520021": "4125",
    "3520023": "4130",
    "3520025": "4145",
    "3520027": "4150",
    "3520029": "4155",
    "3520031": "4170",
    "3520033": "4125",
    "3520035": "4125",
    "3520037": "4160",
    "3520039": "4140",
    "3520041": "4140",
    "3520043": "4165",
    "3520045": "4170",
    "3520047": "4130",
    "3520049": "4130"
};
var eHistory01 = {
    "3101001": "610",
    "3101003": "2600",
    "3101005": "2605",
    "3101007": "2610",
    "3101009": "2615",
    "3101011": "2620",
    "3101013": "2620",
    "3101015": "2620",
    "3101017": "2625",
    "3101019": "2600",
    "3101021": "2620",
    "3101023": "2630",
    "3101025": "2635",
    "3101027": "2640",
    "3101029": "2625"
};
var eHistory05 = {
    "3105001": "2660",
    "3105003": "2655",
    "3105005": "2670",
    "3105007": "2655",
    "3105009": "2650",
    "3105011": "2650"
};
var eHistory09 = {

    "3109001": "2705",
    "3109003": "2710",
    "3109005": "2715",
    "3109007": "2725"
};
var eHistory10 = {
    "9910001": "2730",
    "9910003": "",
    "9910005": "2735",
    "9910007": "2740",
    "9910009": "2745",
    "9910011": "2750",
    "9910013": "",
    "9910015": "",
    "9910017": "2755",
    "9910019": "2755",
    "9910021": "",
    "9910023": "",
    "9910025": "2760",
    "9910027": "",
    "9910029": "",
    "9910031": "2765",
    "9910033": "2765",
    "9910035": "",
    "9910037": "",
    "9910039": "",
    "9910041": "2770",
    "9910043": "2775",
    "9910045": "",
    "9910047": "",
    "9910049": "2780",
    "9910051": "2775"

};
var eHistory14 = {
    "3114001": "2785",
    "3114003": "2785",
    "3114005": "2855",
    "3114007": "2790",
    "3114009": "2795",
    "3114011": "2800",
    "3114013": "2805",
    "3114015": "2810",
    "3114017": "2815",
    "3114019": "2820",
    "3114021": "2825",
    "3114023": "2830",
    "3114025": "2830",
    "3114027": "2855",
    "3114029": "2835",
    "3114031": "2840",
    "3114033": "2840",
    "3114037": "2845",
    "3114039": "2850",
    "3114041": "2855",
    "3114043": "2860",
    "3114045": "2850",

};
var eHistory15 = {
    "9927001": "2975",
    "9927003": "2920",
    "9927005": "2865",
    "9927007": "2870",
    "9927009": "2875",
    "9927011": "2895",
    "9927013": "28980",
    "9927015": "2880",
    "9927019": "2890",
    "9927021": "-10",
    "9927023": "2895",
    "9927025": "2900",
    "9927027": "2910",
    "9927029": "2960",
    "9927031": "2935",
    "9927033": "2915",
    "9927035": "2920",
    "9927037": "2925",
    "9927039": "2930",
    "9927041": "2935",
    "9927043": "2940",
    "9927045": "2945",
    "9927047": "2950",
    "9927049": "2955",
    "9927051": "2960",
    "9927053": "2965",
    "9927055": "2970",
    "9927057": "2975",
    "9927059": "2980"
};
var eHistory16 = {
    "9923001": "0",
    "9923003": "1"
};
var eHistory17 = {
    "3117001": "3000",
    "3117003": "3000",
    "3117005": "2990",
    "3117007": "2995",
    "3117009": "2995",
    "3117011": "2985"
};
var eHistory18 = {
    "3118001": "0",
    "3118003": "-10",
    "3118005": "1",
    "3118007": "1",
    "3118009": "1",
    "3118011": "1"

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
    "2611001": "765",
    "2611003": "755",
    "2611005": "760",
    "2611007": "765",
    "2611009": "765",
    "2611011": "765",
    "2611013": "765",
    "2611015": "765",
    "2611017": "765",
    "2611019": "765",
    "2611021": "765",
    "2611023": "765",
    "2611025": "-10"
};
var ePayment40 = {
    "2640001": "980",
    "2640003": "985"
};
var ePayment50 = {
    "2650001": "1000",
    "2650003": "1005",
    "2650005": "1010",
    "2650007": "990",
    "2650009": "995",
    "2650011": "1025",
    "2650013": "1015",
    "2650015": "1020",
    "2650017": "1030"
};
var ePayment52 = {
    "C1": "1035",
    "C2": "1036",
    "C3": "1039",
    "C4": "1038",
    "C5": "1039",
    "C6": "1037",
    "C7": "-10",
    "D1": "1041",
    "D2": "1043",
    "D3": "1043",
    "D4": "1044",
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
    "Y92.00": "1135",
    "Y92.01": "1135",
    "Y92.015": "1135",
    "Y92.016": "1135",
    "Y92.02": "1135",
    "Y92.03": "1135",
    "Y92.10": "1135",
    "Y92.7": "1140",
    "Y92.64": "1145",
    "Y92.61": "1150",
    "Y92.62": "1150",
    "Y92.63": "1150",
    "Y92.65": "1150",
    "Y92.69": "1150",
    "Y92.31": "1155",
    "Y92.32": "1155",
    "Y92.33": "1155",
    "Y92.34": "1155",
    "Y92.39": "1155",
    "Y92.82": "1155",
    "Y92.830": "1155",
    "Y92.831": "1155",
    "Y92.832": "1155",
    "Y92.833": "1155",
    "Y92.834": "1155",
    "Y92.838": "1155",
    "Y92.41": "1160",
    "Y92.48": "1160",
    "Y92.85": "1160",
    "Y92.12": "1165",
    "Y92.13": "1165",
    "Y92.14": "1165",
    "Y92.16": "1165",
    "Y92.210": "1165",
    "Y92.211": "1165",
    "Y92.212": "1165",
    "Y92.213": "1165",
    "Y92.214": "1165",
    "Y92.215": "1165",
    "Y92.219": "1165",
    "Y92.22": "1165",
    "Y92.24": "1165",
    "Y92.51": "1165",
    "Y92.52": "1165",
    "Y92.520": "1165",
    "Y92.24": "1170",
    "Y92.25": "1170",
    "Y92.26": "1170",
    "Y92.29": "1170",
    "Y92.51": "1170",
    "Y92.12": "1175",
    "Y92.13": "1175",
    "Y92.14": "1175",
    "Y92.23": "1175",
    "Y92.531": "1175",
    "Y92.532": "1175",
    "Y92.538": "1175"
};
var eSituation06 = {
    "2806001": "1235",
    "2806003": "1240",
    "2806005": "1245",
    "2806007": "1250",
    "2806009": "1255",
    "2806011": "1260",
    "2806013": "1265"
};
var eSituation07 = {
    "2807001": "1305",
    "2807003": "1310",
    "2807005": "1315",
    "2807007": "1320",
    "2807009": "1325",
    "2807011": "1330",
    "2807013": "1335",
    "2807015": "1340",
    "2807017": "1345"
};
var eSituation08 = {
    "2808003": "1350",
    "2808005": "1355",
    "2808007": "1360",
    "2808009": "1365",
    "2808011": "1370",
    "2808015": "1375",
    "2808017": "1380",
    "2808001": "1385",
    "2808019": "1390",
    "2808021": "1395"
};
var eSituation09 = {
    "R58": "1405",
    "N92.6": "1405",
    "N93.9": "1405",
    "O47": "1405",
    "R00.2": "1405",
    "R04.0": "1405",
    "R04.2": "1405",
    "R58": "1405",
    "R60.0": "1405",
    "R60.9": "1405",
    "R61": "1405",
    "R05": "1410",
    "R06.00": "1410",
    "R06.01": "1410",
    "R06.02": "1410",
    "R06.1": "1410",
    "R06.2": "1410",
    "R06.3": "1410",
    "R06.4": "1410",
    "R06.6": "1410",
    "R06.7": "1410",
    "R06.81": "1410",
    "R06.83": "1410",
    "R07.0": "1410",
    "R07.1": "1410",
    "R09.2": "1410",
    "R09.81": "1410",
    "R19.30": "1415",
    "R55": "1415",
    "R56.0": "1415",
    "R56.9": "1415",
    "R57.0": "1415",
    "R57.1": "1415",
    "R09.01": "1420",
    "R13.0": "1420",
    "R13.10": "1420",
    "R19.7": "1435",
    "R30.0": "1440",
    "R31": "1440",
    "R32": "1440",
    "R33.9": "1440",
    "R35.8": "1440",
    "R50.9": "1445",
    "H53.14": "1450",
    "R47.01": "1450",
    "R47.02": "1450",
    "R47.81": "1450",
    "R49.0": "1450",
    "R53.1": "1450",
    "R53.81": "1450",
    "R53.83": "1450",
    "R40.1": "1460",
    "R40.20": "1460",
    "R41.0": "1460",
    "R41.3": "1460",
    "R41.82": "1460",
    "R41.840": "1460",
    "R42": "1460",
    "R44.0": "1460",
    "R44.1": "1460",
    "R45.0": "1460",
    "R45.1": "1460",
    "R45.3": "1460",
    "R45.4": "1460",
    "R45.6": "1460",
    "R45.7": "1460",
    "R45.81": "1460",
    "R45.82": "1460",
    "R45.83": "1460",
    "R45.850": "1460",
    "R45.851": "1460",
    "R46.2": "1460",
    "R46.3": "1460",
    "R46.4": "1460",
    "H53.14": "1465",
    "K92.0": "1465",
    "R11.0": "1465",
    "R11.10": "1465",
    "R11.12": "1465",
    "R14.0": "1465",
    "R14.2": "1465",
    "R14.3": "1465",
    "R15": "1465",
    "R63.0": "1465",
    "R63.1": "1465",
    "R63.3": "1465",
    "R63.4": "1465",
    "R63.5": "1465",
    "R64": "1465",
    "R68.2": "1465",
    "G44.53": "1475",
    "H54.7": "1475",
    "H57.10": "1475",
    "H91.90": "1475",
    "H92.09": "1475",
    "J02": "1475",
    "K08.8": "1475",
    "K59.00": "1475",
    "N48.3": "1475",
    "N92.6": "1475",
    "R07.82": "1475",
    "R07.89": "1475",
    "R07.9": "1475",
    "R09.2": "1475",
    "R09.81": "1475",
    "R10.0": "1475",
    "R10.1": "1475",
    "R10.13": "1475",
    "R10.2": "1475",
    "R10.3": "1475",
    "R10.33": "1475",
    "R10.81": "1475",
    "R10.82": "1475",
    "R10.83": "1475",
    "R10.84": "1475",
    "R12": "1475",
    "R51": "1475",
    "R52": "1475",
    "R68.84": "1475",
    "L29.9": "1480",
    "L50": "1485",
    "R20.0": "1485",
    "R20.1": "1485",
    "R20.2": "1485",
    "R21": "1485",
    "R23.0": "1485",
    "R23.1": "1485",
    "R23.2": "1485",
    "R23.8": "1485",
    "R22": "1490",
    "E66.3": "1495",
    "G40.3": "1490",
    "G47.00": "1495",
    "G81": "1500",
    "G81.9": "1500",
    "G83.10": "1500",
    "R25.1": "1500",
    "R25.2": "1500",
    "R25.3": "1500",
    "R25.8": "1500",
    "R26.0": "1500",
    "R26.2": "1500",
    "R26.89": "1500",
    "R27.0": "1500",
    "R29.0": "1500",
    "R29.6": "1500",
    "R29.810": "1500",
    "R40.0": "1500"
};
var eOther01 =
    {
        "9923001": "0",
        "9923003": "1"
    };
var eOther02 = {
    "4502001": "5430",
    "4502003": "5395",
    "4502005": "5400",
    "4502007": "5405",
    "4502009": "5410",
    "4502011": "5430",
    "4502013": "5405",
    "4502015": "5430",
    "4502017": "5420",
    "4502019": "5425"
};
var eOther03 =
{
    "4503001": "5435",
    "4503003": "5440",
    "4503005": "5465",
    "4503007": "5445",
    "4503009": "5450",
    "4503011": "5455",
    "4503013": "5465",
    "4503015": "5460",
    "4503017": "5460",
    "4503019": "5465",
    "4503021": "5465",
    "4503023": "5465"
};
var eOther06 = {
    "4506001": "5580",
    "4506003": "5580",
    "4506005": "5580",
    "4506007": "5560",
    "4506009": "5540",
    "4506011": "5550",
    "4506013": "5545",
    "4506015": "5555",
    "4506017": "5565",
    "4506019": "5570",
    "4506021": "5560",
    "4506023": "5575",
    "4506021": "5575",
    "4506027": "5585",
    "4506029": "-10"
};
var eOther07 =
    {
        "4507001": "5470",
        "4507003": "5475",
        "4507005": "5480",
        "4507007": "5485",
        "4507009": "5490",
        "4507011": "5495",
        "4507013": "5500",
        "4507017": "5505",
        "4507019": "5510",
        "4507021": "5515",
        "4507023": "5520",
        "4507025": "5525",
        "4507027": "5530"
    };
var eSituation10 = {
    "R40.1": "1565",
    "R40.20": "1565",
    "R41.0": "1565",
    "R41.3": "1565",
    "R41.82": "1565",
    "R41.840": "1565",
    "R42": "1565",
    "R44.0": "1565",
    "R44.1": "1565",
    "R45.0": "1565",
    "R45.1": "1565",
    "R45.3": "1565",
    "R45.4": "1565",
    "R45.6": "1565",
    "R45.7": "1565",
    "R45.81": "1565",
    "R45.82": "1565",
    "R45.83": "1565",
    "R45.850": "1565",
    "R45.851": "1565",
    "R46.2": "1565",
    "R46.3": "1565",
    "R46.4": "1565",
    "H53.14": "1570",
    "R11.10": "1570",
    "R11.12": "1570",
    "R14.2": "1570",
    "R14.3": "1570",
    "R15": "1570",
    "R63.1": "1570",
    "R63.3": "1570",
    "R63.4": "1570",
    "R63.5": "1570",
    "R64": "1570",
    "K92.0": "1570",
    "R11.0": "1570",
    "R14.0": "1570",
    "R63.0": "1570",
    "R68.2": "1570",
    "R11.0": "1570",
};
var eMedication02 = {
    "9923001": "0",
    "9923003": "1"
};
var eMedication04 = {
    "9927001": "4185",
    "9927003": "4230",
    "9927005": "4175",
    "9927007": "4180",
    "9927009": "4185",
    "9927011": "4205",
    "9927013": "4205",
    "9927015": "4190",
    "9927017": "4210",
    "9927019": "4200",
    "9927021": "4191",
    "9927023": "4205",
    "9927025": "4210",
    "9927027": "4220",
    "9927029": "4220",
    "9927031": "4285",
    "9927033": "4225",
    "9927035": "4230",
    "9927037": "4235",
    "9927039": "4240",
    "9927041": "4245",
    "9927043": "4250",
    "9927045": "4255",
    "9927047": "4260",
    "9927049": "4265",
    "9927051": "4270",
    "9927053": "4275",
    "9927055": "4280",
    "9927057": "4285",
    "9927059": "4290"
};
var eMedications06 = {
    "3706001": "4295",
    "3706003": "4300",
    "3706005": "4305",
    "3706007": "4310",
    "3706009": "4320",
    "3706011": "4315",
    "3706013": "4370",
    "3706015": "4330",
    "3706017": "4335",
    "3706019": "4340",
    "3706021": "4345",
    "3706023": "4350",
    "3706025": "4355",
    "3706027": "4360",
    "3706029": "4365"

}
var eMedications07 = {
    "9916001": "4375",
    "9916003": "4380",
    "9916005": "4385"
};
var eMedications08 = {
    "3708001": "4395",
    "3708003": "4400",
    "3708005": "4405",
    "3708007": "4410",
    "3708009": "4465",
    "3708011": "4415",
    "3708013": "4420",
    "3708015": "4425",
    "3708017": "4430",
    "3708019": "4435",
    "3708021": "4460",
    "3708023": "4440",
    "3708025": "4445",
    "3708027": "4450",
    "3708029": "4455",
    "3708031": "4390",
    "3708033": "4460",
    "3708035": "4465",
    "3708037": "4470",
    "3708039": "4465",
    "3708041": "4475",
    "3708043": "4450",
    "3708045": "4450"
};
var eMedications11 = {
    "9918001": "4480",
    "9918003": "4485",
    "9918005": "4490",
    "9918007": "4495"
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
var eProcedures07 =
{
    "3907001": "4505",
    "3907003": "4510",
    "3907005": "4515",
    "3907007": "4520",
    "3907009": "4525",
    "3907011": "4530",
    "3907013": "4535",
    "3907015": "4540",
    "3907017": "4545",
    "3907019": "4550",
    "3907021": "4555",
    "3907023": "4580",
    "3907025": "4560",
    "3907027": "4565",
    "3907029": "4570",
    "3907031": "4575",
    "3907033": "4500",
    "3907035": "4580",
    "3907037": "4580",
    "3907039": "4585",
    "3907041": "4590",
    "3907043": "4580",
    "3907045": "4595",
    "3907047": "4520"
};
var eProcedures08 = {
    "9916001": "4600",
    "9916003": "4605",
    "9916005": "4610"
};
var eProcedures11 = {
    "9918003": "4615",
    "9918003": "4620",
    "9918005": "4625",
    "9918007": "4630"
}
var eProcedures13 = {
    "3913001": "4635",
    "3913003": "4640",
    "3913005": "4645",
    "3913007": "4650",
    "3913009": "4655",
    "3913033": "4660",
    "3913011": "4665",
    "3913035": "4670",
    "3913017": "4675",
    "3913019": "4680",
    "3913021": "4685",
    "3913023": "4690",
    "3913051": "4695",
    "3913053": "4700",
    "3913057": "4705",
    "3913059": "4710",
    "3913043": "4715",
    "3913047": "4720",
    "3913049": "4725",
    "3913065": "4730"
};
var eProtocols01 = {
    "9914001": "6730",
    "9914003": "6740",
    "9914005": "6730",
    "9914007": "6760",
    "9914009": "6730",
    "9914011": "6850",
    "9914013": "6850",
    "9914015": "6850",
    "9914017": "6850",
    "9914019": "7130",
    "9914021": "6785",
    "9914023": "6875",
    "9914025": "6875",
    "9914027": "6980",
    "9914029": "6960",
    "9914031": "6980",
    "9914033": "6911",
    "9914035": "6911",
    "9914037": "6913",
    "9914039": "6911",
    "9914041": "6925",
    "9914043": "6914",
    "9914045": "6920",
    "9914047": "6915",
    "9914049": "6916",
    "9914051": "6800",
    "9914053": "6810",
    "9914055": "6850",
    "9914057": "6880",
    "9914059": "6910",
    "9914061": "6930",
    "9914063": "7220",
    "9914065": "6881",
    "9914067": "6990",
    "9914069": "6881",
    "9914071": "7040",
    "9914073": "7180",
    "9914075": "7220",
    "9914077": "7215",
    "9914079": "6820",
    "9914081": "6820",
    "9914083": "7000",
    "9914085": "6840",
    "9914087": "6850",
    "9914089": "7000",
    "9914091": "6892",
    "9914093": "6890",
    "9914095": "6900",
    "9914097": "6920",
    "9914099": "6925",
    "9914101": "6940",
    "9914103": "7000",
    "9914105": "7000",
    "9914107": "7175",
    "9914109": "6720",
    "9914111": "6770",
    "9914113": "6780",
    "9914115": "6830",
    "9914117": "6860",
    "9914119": "6885",
    "9914121": "6945",
    "9914123": "6950",
    "9914125": "6965",
    "9914127": "6970",
    "9914129": "7160",
    "9914131": "7251",
    "9914133": "7010",
    "9914135": "7030",
    "9914137": "7140",
    "9914139": "7160",
    "9914141": "7170",
    "9914143": "7200",
    "9914145": "7200",
    "9914147": "6791",
    "9914149": "7210",
    "9914151": "7240",
    "9914153": "7040",
    "9914155": "6935",
    "9914157": "7020",
    "9914159": "6935",
    "9914161": "6935",
    "9914163": "7020",
    "9914165": "7040",
    "9914167": "6911",
    "9914169": "6850",
    "9914171": "6850",
    "9914173": "6911",
    "9914175": "7220",
    "9914177": "7220",
    "9914179": "7220",
    "9914181": "7220",
    "9914183": "7220",
    "9914185": "7220",
    "9914187": "6810",
    "9914189": "7040",
    "9914191": "7220",
    "9914193": "7000",
    "9914195": "6945",
    "9914197": "7220",
    "9914199": "7240"
};
eVitals02 = {
    "9923001": "0",
    "9923003": "1"
};
eVitals03 = {
    "9901001": "3020",
    "9901003": "3030",
    "9901005": "3025",
    "9901007": "3035",
    "9901009": "3035",
    "9901011": "3040",
    "9901013": "3045",
    "9901015": "3050",
    "9901017": "3055",
    "9901019": "3060",
    "9901021": "3065",
    "9901023": "3005",
    "9901025": "3010",
    "9901027": "3015",
    "9901029": "3015",
    "9901031": "3075",
    "9901033": "3080",
    "9901035": "3085",
    "9901037": "3090",
    "9901039": "3095",
    "9901041": "3100",
    "9901043": "3105",
    "9901045": "3110",
    "9901047": "3070",
    "9901049": "3115",
    "9901051": "3115",
    "9901053": "3115",
    "9901055": "3115",
    "9901057": "3115",
    "9901059": "3120",
    "9901061": "3125",
    "9901063": "3130",
    "9901065": "3135",
    "9901067": "3140",
    "9901069": "3145",
    "9901071": "3145"

};
eVitals08 = {
    "3308001": "3150",
    "3308003": "3150",
    "3308005": "3155",
    "3308007": "3160",
    "3308009": "3165",
    "3308011": "3170"
};
eVitals13 = {
    "3313001": "3180",
    "3313003": "3175",
    "3313005": "-10"
};
eVitals15 = {
    "3315001": "3195",
    "3315003": "3190",
    "3315005": "3200",
    "3315007": "3185",
    "3315009": "3190",
    "3315011": "3195",
    "3315013": "3195"
};
eVitals19 = {
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4"
};
eVitals20 = {
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5"
};
eVitals21 = {
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6"
};
eVitals22 = {
    "3322001": "-5",
    "3322003": "3210",
    "3322005": "3225",
    "3322007": "3215",
    "3322009": "3220"
};
eVitals25 = {
    "3325001": "3230",
    "3325003": "3230",
    "3325005": "3230",
    "3325007": "3235",
    "3325009": "3240",
    "3325013": "3245",
    "3325015": "3250",
    "3325017": "3230",
};
eVitals26 = {
    "3326001": "3255",
    "3326003": "3260",
    "3326005": "3265",
    "3326007": "3270"
};
eVitals29 = {
    "3329001": "3275",
    "3329003": "3280",
    "3329005": "3285"
};
eVitals31 = {
    "3331001": "3305",
    "3331003": "3310",
    "3331005": "3315"
};
function setCodeText(NEMSISElementNumber, codeVal) {
    var _return = "";
    switch (NEMSISElementNumber) {
        case "eAirway.01":
            if (eAirway334_01[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eAirway334_01[codeVal];
            }
            break;
        case "eAirway.03":
            if (eAirway334_03[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eAirway334_03[codeVal];
            }
            break;
        case "eAirway.04":
            if (eAirway334_04[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eAirway334_04[codeVal];
            }
            break;
        case "eAirway.06":
            if (eAirway334_06[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eAirway334_06[codeVal];
            }
            break;
        case "eAirway.08":
            if (eAirway334_08[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eAirway334_08[codeVal];
            }
            break;
        case "eAirway.09":
            if (eAirway334_09[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eAirway334_09[codeVal];
            }
            break;
        case "eArrest.09":
            if (eArrest334_01[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eArrest334_01[codeVal];
            }
            break;
        case "eArrest.02":
            if (eArrest334_02[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eArrest334_02[codeVal];
            }
            break;
        case "eArrest.03":
            if (eArrest334_03[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eArrest334_03[codeVal];
            }
            break;
        case "eArrest.04":
            if (eArrest334_04[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eArrest334_04[codeVal];
            }
            break;
        case "eArrest.05":
            if (eArrest334_05[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eArrest334_05[codeVal];
            }
            break;

        case "eArrest.06":
            if (eArrest334_06[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eArrest334_06[codeVal];
            }
            break;

        case "eArrest.07":
            if (eArrest334_07[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eArrest334_07[codeVal];
            }
            break;

        case "eArrest.08":
            if (eArrest334_08[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eArrest334_08[codeVal];
            }
            b
        case "eArrest.09":
            if (eArrest334_09[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eArrest334_09[codeVal];
            }
            break;

        case "eArrest.10":
            if (eArrest334_10[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eArrest334_10[codeVal];
            }
            break;

        case "eArrest.11":
            if (eArrest334_11[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eArrest334_11[codeVal];
            }
            break;

        case "eArrest.12":
            if (eArrest334_12[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eArrest334_12[codeVal];
            }
            break;
        case "eArrest.13":
            if (eArrest334_13[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eArrest334_13[codeVal];
            }
            break;
        case "eArrest.16":
            if (eArrest334_16[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eArrest334_16[codeVal];
            }
            break;
        case "eArrest.17":
            if (eArrest334_17[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eArrest334_17[codeVal];
            }
            break;

        case "eArrest.18":
            if (eArrest334_18[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eArrest334_18[codeVal];
            }
            break;
        case "eCrew.02":
            if (eCrew334_03[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eCrew334_03[codeVal];
            }
            break;
        case "eCrew.03":
            if (eCrew334_03[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eCrew334_03[codeVal];
            }
            break;

        case "eDevice.03":
            if (eDevice334_03[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eDevice_03[codeVal];
            }
            break;
        case "eDevice.06":
            if (eDevice334_06[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eDevice334_06[codeVal];
            }
            break;
        case "eDevice.07":
            if (eDevice334_07[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eDevice334_07[codeVal];
            }
            break;
        case "eDevice.09":
            if (eDevice334_09[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eDevice334_09[codeVal];
            }
            break;
        case "eDispatch.01":
            if (eDispatch334_01[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eDispatch334_01[codeVal];
            }
            break;

        case "eDispatch.02":
            if (eDispatch334_02[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eDispatch334_02[codeVal];
            }
            break;

        case "eDispatch.05":
            if (eDispatch334_05[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eDispatch334_05[codeVal];
            }
            break;
        case "eDisposition.12":
            if (eDisposition334_12[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eDisposition334_12[codeVal];
            }
            break;
        case "eDisposition.13":
            if (eDisposition334_13[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eDisposition334_13[codeVal];
            }
            break;

        case "eDisposition.14":
            if (eDisposition334_14[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eDisposition334_14[codeVal];
            }
            break;

        case "eDisposition.15":
            if (eDisposition334_15[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eDisposition334_15[codeVal];
            }
            break;

        case "eDisposition.16":
            if (eDisposition334_16[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eDisposition334_16[codeVal];
            }
            break;

        case "eDisposition.17":
            if (eDisposition334_17[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eDisposition334_17[codeVal];
            }
            break;

        case "eDisposition.18":
            if (eDisposition334_18[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eDisposition334_18[codeVal];
            }
            break;

        case "eDisposition.19":
            if (eDisposition334_19[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eDisposition334_19[codeVal];
            }
            break;

        case "eDisposition.20":
            if (eDisposition334_20[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eDisposition334_20[codeVal];
            }
            break;

        case "eDisposition.21":
            if (eDisposition334_21[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eDisposition334_21[codeVal];
            }
            break;

        case "eDisposition.22":
            if (eDisposition334_22[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eDisposition334_22[codeVal];
            }
            break;


        case "eDisposition.24":
            if (eDisposition334_24[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eDisposition334_24[codeVal];
            }
            break;

        case "eDisposition.26":
            if (eDisposition334_26[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eDisposition334_26[codeVal];
            }
            break;
        case "eExam.02":
            if (eExam334_02[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eExam334_02[codeVal];
            }
            break;
        case "eExam.04":
            if (eExam334_04[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eExam334_04[codeVal];
            }
            break;

        case "eExam.05":
            if (eExam334_05[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eExam334_05[codeVal];
            }
            break;

        case "eExam.06":
            if (eExam334_06[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eExam334_06[codeVal];
            }
            break;

        case "eExam.07":
            if (eExam334_07[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eExam334_07[codeVal];
            }
            break;

        case "eExam.08":
            if (eExam334_08[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eExam334_08[codeVal];
            }
            break;

        case "eExam.09":
            if (eExam334_09[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eExam334_09[codeVal];
            }
            break;

        case "eExam.10":
            if (eExam334_10[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eExam334_10[codeVal];
            }
            break;

        case "eExam.11":
            if (eExam334_11[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eExam334_11[codeVal];
            }
            break;

        case "eExam.12":
            if (eExam334_12[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eExam334_12[codeVal];
            }
            break;

        case "eExam.13":
            if (eExam334_13[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eExam334_13[codeVal];
            }
            break;


        case "eExam.14":
            if (eExam334_14[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eExam334_14[codeVal];
            }
            break;

        case "eExam.15":
            if (eExam334_15[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eExam334_15[codeVal];
            }
            break;

        case "eExam.16":
            if (eExam334_16[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eExam334_16[codeVal];
            }
            break;

        case "eExam.17":
            if (eExam334_17[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eExam334_17[codeVal];
            }
            break;

        case "eExam.18":
            if (eExam334_18[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eExam334_18[codeVal];
            }
            break;

        case "eExam.19":
            if (eExam334_19[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eExam334_19[codeVal];
            }
            break;

        case "eExam.20":
            if (eExam334_20[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eExam334_20[codeVal];
            }
            break;

        case "eHistory.01":
            if (eHistory334_01[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eHistory334_01[codeVal];
            }
            break;
        case "eHistory.05":
            if (eHistory334_05[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eHistory334_05[codeVal];
            }
            break;

        case "eHistory.09":
            if (eHistory334_09[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eHistory334_09[codeVal];
            }
            break;

        case "eHistory.10":
            if (eHistory334_10[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eHistory334_10[codeVal];
            }
            break;

        case "eHistory.14":
            if (eHistory334_14[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eHistory334_14[codeVal];
            }
            break;

        case "eHistory.15":
            if (eHistory334_15[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eHistory334_15[codeVal];
            }
            break;
        case "eHistory.16":
            if (eHistory334_16[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eHistory334_16[codeVal];
            }
            break;

        case "eHistory.17":
            if (eHistory334_17[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eHistory334_17[codeVal];
            }
            break;

        case "eHistory.18":
            if (eHistory334_18[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eHistory334_18[codeVal];
            }
            break;

        case "eMedications.02":
            if (eMedications334_02[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eMedications334_02[codeVal];
            }
            break;

        case "eMedications.04":
            if (eMedications334_04[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eMedications334_04[codeVal];
            }
            break;
        case "eMedications.06":
            if (eMedications334_06[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eMedications334_06[codeVal];
            }
            break;

        case "eMedications.07":
            if (eMedications334_07[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eMedications334_07[codeVal];
            }
            break;
        case "eMedications.08":
            if (eMedications334_08[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eMedications334_08[codeVal];
            }
            break;
        case "eMedications.10":
            if (eMedications334_10[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eMedications334_10[codeVal];
            }
            break;
        case "eMedications.11":
            if (eMedications334_11[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eMedications334_11[codeVal];
            }
            break;
        case "eOther.01":
            if (eOther334_01[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eOther334_01[codeVal];
            }
            break;
        case "eOther.02":
            if (eOther334_02[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eOther334_02[codeVal];
            }
            break;
        case "eOther.03":
            if (eOther334_03[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eOther334_03[codeVal];
            }
            break;
        case "eOther.05":
            if (eOther334_05[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eOther334_05[codeVal];
            }
            break;
        case "eOther.06":
            if (eOther334_06[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eOther334_06[codeVal];
            }
            break;
        case "eOther.07":
            if (eOther334_07[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eOther334_07[codeVal];
            }
            break;
        case "eOther.09":
            if (eOther334_09[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eOther334_09[codeVal];
            }
            break;
        case "eOther.12":
            if (eOther334_12[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eOther334_12[codeVal];
            }
            break;
        case "eOther.13":
            if (eOther334_13[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eOther334_13[codeVal];
            }
            break;
        case "eOther.14":
            if (eOther334_14[codeVal] == undefined) {
                _return = codeVal + " UNDEFINED";
            }
            else {
                _return = eOther334_14[codeVal];
            }
            break;
        case "eOutcome.01":
            if (eOutcome334_01[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eOutcome334_01[codeVal];
            }
            break;
        case "eOutcome.02":
            if (eOutcome334_02[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eOutcome334_02[codeVal];
            }
            break;
        case "eOutcome.03":
            if (eOutcome334_03[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eOutcome334_03[codeVal];
            }
            break;
        case "eOutcome.17":
            if (eOutcome334_17[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eOutcome334_17[codeVal];
            }
            break;

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

        case "ePatient.13":
            if (ePatient334_13[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = ePatient334_13[codeVal];
            }
            break;
        case "ePatient.14":
            if (ePatient334_14[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = ePatient334_14[codeVal];
            }
            break;
        case "ePatient.16":
            if (ePatient334_16[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = ePatient334_16[codeVal];
            }
            break;

        case "ePatient.16":
            if (ePatient334_16[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = ePatient334_16[codeVal];
            }
            break;
        case "eProcedures.02":
            if (eProcedures334_02[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eProcedures334_02[codeVal];
            }
            break;
        case "eProcedures.06":
            if (eProcedures334_06[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eProcedures334_06[codeVal];
            }
            break;
        case "eProcedures.07":
            if (eProcedures334_07[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eProcedures334_07[codeVal];
            }
            break;
        case "eProcedures.08":
            if (eProcedures334_08[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eProcedures334_08[codeVal];
            }
            break;
        case "eProcedures.10":
            if (eProcedures334_10[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eProcedures334_10[codeVal];
            }
            break;
        case "eProcedures.11":
            if (eProcedures334_11[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eProcedures334_11[codeVal];
            }
            break;
        case "eProcedures.13":
            if (eProcedures334_13[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eProcedures334_13[codeVal];
            }
            break;
        case "eProtocols.01":
            if (eProtocols334_01[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eProtocols334_01[codeVal];
            }
            break;



        case "eScene.01":
            if (eScene334_01[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eScene334_01[codeVal];
            }
            break;
        case "eScene.04":
            if (eScene334_04[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eScene334_04[codeVal];
            }
            break;

        case "eScene.06":
            if (eScene334_06[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eScene334_06[codeVal];
            }
            break;
        case "eScene.07":
            if (eScene334_07[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eScene334_07[codeVal];
            }
            break;
        case "eScene.08":
            if (eScene334_08[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eScene334_08[codeVal];
            }
            break;
        case "eSituation.02":
            if (eSituation334_02[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eSituation334_02[codeVal];
            }
            break;
        case "eSituation.03":
            if (eSituation334_03[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eSituation334_03[codeVal];
            }
            break;
        case "eSituation.06":
            if (eSituation334_06[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eSituation334_06[codeVal];
            }
            break;
        case "eSituation.07":
            if (eSituation334_07[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eSituation334_07[codeVal];
            }
            break;
        case "eSituation.13":
            if (eSituation334_13[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eSituation334_13[codeVal];
            }
            break;
        case "eSituation.14":
            if (eSituation334_14[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eSituation334_14[codeVal];
            }
            break;
        case "eSituation.15":
            if (eSituation334_15[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eSituation334_15[codeVal];
            }
            break;
        case "eSituation.16":
            if (eSituation334_16[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eSituation334_16[codeVal];
            }
            break;
        case "eVitals.02":
            if (eVitals334_02[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_02[codeVal];
            }
            break;
        case "eVitals.03":
            if (eVitals334_03[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_03[codeVal];
            }
            break;

        case "eVitals.04":
            if (eVitals334_04[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_04[codeVal];
            }
            break;
        case "eVitals.05":
            if (eVitals334_05[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_05[codeVal];
            }
            break;
        case "eVitals.08":
            if (eVitals334_08[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_08[codeVal];
            }
            break;
        case "eVitals.11":
            if (eVitals334_11[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_11[codeVal];
            }
            break;
        case "eVitals.13":
            if (eVitals334_13[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_13[codeVal];
            }
            break;
        case "eVitals.15":
            if (eVitals334_15[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_15[codeVal];
            }
            break;
        case "eVitals.11":
            if (eVitals334_11[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_11[codeVal];
            }
            break;
        case "eVitals.19":
            if (eVitals334_19[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_19[codeVal];
            }
            break;
        case "eVitals.20":
            if (eVitals334_20[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_20[codeVal];
            }
            break;
        case "eVitals.21":
            if (eVitals334_21[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_21[codeVal];
            }
            break;
        case "eVitals.22":
            if (eVitals334_22[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_22[codeVal];
            }
            break;
        case "eVitals.25":
            if (eVitals334_25[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_25[codeVal];
            }
            break;
        case "eVitals.26":
            if (eVitals334_26[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_26[codeVal];
            }
            break;
        case "eVitals.28":
            if (eVitals334_28[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_28[codeVal];
            }
            break;
        case "eVitals.29":
            if (eVitals334_29[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_29[codeVal];
            }
            break;
        case "eVitals.30":
            if (eVitals334_30[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_30[codeVal];
            }
            break;
        case "eVitals.31":
            if (eVitals334_31[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = eVitals334_31[codeVal];
            }
            break;


        default:
            _return = " UNDEFINED";
    }
    return _return;

};
var eAirway334_01 = {
    "4001001": "Adequate Airway Reflexes/Effort; Potential for Compromise",
    "4001003": "Airway Reflex Compromised",
    "4001005": "Apnea or Agonal Respirations",
    "4001007": "Illness Involving Airway",
    "4001009": "Injury Involving Airway",
    "4001011": "Other (Not Listed)",
    "4001013": "Ventilatory Effort Compromised"
};
var eAirway334_03 = {
    "4003001": "Cricothyrotomy Tube",
    "4003003": "Endotracheal Tube",
    "4003005": "Other-Invasive Airway",
    "4003007": "SAD-Combitube",
    "4003009": "SAD-King",
    "4003011": "SAD-LMA",
    "4003013": "SAD-Other",
    "4003015": "Tracheostomy Tube"
};
var eAirway334_04 = {
    "4004001": "Auscultation",
    "4004003": "Bulb/Syringe Aspiration",
    "4004005": "Colorimetric ETCO2",
    "4004007": "Condensation in Tube",
    "4004009": "Digital (Numeric) ETCO2",
    "4004011": "Direct Re-Visualization of Tube in Place",
    "4004013": "Endotracheal Tube Whistle (BAAM; etc)",
    "4004015": "Other (Not Listed)",
    "4004017": "Visualization of Vocal Cords",
    "4004019": "Waveform ETCO2"
};
var eAirway334_06 = {
    "4006001": "Another Person on the Same Crew",
    "4006003": "Other (Not Listed)",
    "4006005": "Person Performing Intubation",
    "4006007": "Receiving Air Medical/EMS Crew",
    "4006009": "Receiving Hospital Team"
};
var eAirway334_08 = {
    "4008001": "Adverse Event from Facilitating Drugs",
    "4008003": "Bradycardia (<50)",
    "4008005": "Cardiac Arrest",
    "4008007": "Esophageal Intubation-Delayed Detection (After Tube Secured)",
    "4008009": "Esophageal Intubation-Detected in Emergency Department",
    "4008011": "Failed Intubation Effort",
    "4008013": "Injury or Trauma to Patient from Airway Management Effort",
    "4008015": "Other (Not Listed)",
    "4008017": "Oxygen Desaturation (<90%)",
    "4008019": "Patient Vomiting/Aspiration",
    "4008021": "Tube Dislodged During Transport/Patient Care",
    "4008023": "Tube Was Not in Correct Position when EMS Crew/Team Assumed Care of the Patient"
};
var eAirway334_09 = {
    "4009001": "Difficult Patient Airway Anatomy",
    "4009003": "ETI Attempted; but Arrived At Destination Facility Before Accomplished",
    "4009005": "Facial or Oral Trauma",
    "4009007": "Inability to Expose Vocal Cords",
    "4009009": "Inadequate Patient Relaxation/Presence of Protective Airway Reflexes",
    "4009011": "Jaw Clenched (Trismus)",
    "4009013": "Other (Not Listed)",
    "4009015": "Poor Patient Access",
    "4009017": "Secretions/Blood/Vomit",
    "4009019": "Unable to Position or Access Patient",
};
var eArrest334_01 = {
    "3001001": "No",
    "3001003": "Yes; Prior to EMS Arrival",
    "3001005": "Yes; After EMS Arrival"
};
var eArrest334_02 = {
    "3002001": "Cardiac (Presumed)",
    "3002003": "Drowning/Submersion",
    "3002005": "Drug Overdose",
    "3002007": "Electrocution",
    "3002009": "Exsanguination",
    "3002011": "Other (Not Listed)",
    "3002013": "Respiratory/Asphyxia",
    "3002015": "Trauma"
};
var eArrest334_03 = {
    "3003001": "Attempted Defibrillation",
    "3003003": "Attempted Ventilation",
    "3003005": "Initiated Chest Compressions",
    "3003007": "Not Attempted-Considered Futile",
    "3003009": "Not Attempted-DNR Orders",
    "3003011": "Not Attempted-Signs of Circulation"
};
var eArrest334_04 = {
    "3004001": "Not Witnessed",
    "3004003": "Witnessed by Family Member",
    "3004005": "Witnessed by Healthcare Provider",
    "3004007": "Witnessed by Lay Person"
};
var eArrest334_05 = {
    "9923001": "No",
    "9923003": "Yes"
};
var eArrest334_06 = {
    "3006001": "Family Member",
    "3006003": "First Responder (Fire; Law; EMS)",
    "3006005": "Healthcare Professional (Non-EMS)",
    "3006007": "Lay Person (Non-Family)",
    "3006009": "Other EMS Professional (not part of dispatched response)"
};
var eArrest334_07 = {
    "3007001": "No",
    "3007003": "Yes; Applied without Defibrillation",
    "3007005": "Yes; With Defibrillation"
};
var eArrest334_08 = {
    "3008001": "Family Member",
    "3008003": "First Responder (Fire; Law; EMS)",
    "3008005": "Healthcare Professional (Non-EMS)",
    "3008007": "Lay Person (Non-Family)",
    "3008009": "Other EMS Professional (not part of dispatched response)"
};
var eArrest334_09 = {
    "3009001": "Compressions-Continuous",
    "3009003": "Compressions-External Band Type Device",
    "3009005": "Compressions-External Plunger Type Device",
    "3009007": "Compressions-External Thumper Type Device",
    "3009009": "Compressions-Intermittent with Ventilation",
    "3009011": "Compressions-Other Device (Not Listed)",
    "3009013": "Ventilation-Bag Valve Mask",
    "3009015": "Ventilation-Impedance Threshold Device",
    "3009017": "Ventilation-Mouth to Mouth",
    "3009019": "Ventilation-Pocket Mask"
};
var eArrest334_10 = {
    "9923001": "No",
    "9923003": "Yes"
};
var eArrest334_11 = {
    "3011001": "Asystole",
    "3011003": "Bradycardia",
    "3011005": "PEA",
    "3011007": "Unknown AED Non-Shockable Rhythm",
    "3011009": "Unknown AED Shockable Rhythm",
    "3011011": "Ventricular Fibrillation",
    "3011013": "Ventricular Tachycardia-Pulseless"
};
var eArrest334_12 = {
    "3012001": "No",
    "3012003": "Yes; At Arrival at the ED",
    "3012005": "Yes; Prior to Arrival at the ED",
    "3012007": "Yes; Sustained for 20 consecutive minutes"
};
var eArrest334_13 = {
    "3013001": "CPC 1 Good Cerebral Performance",
    "3013003": "CPC 2 Moderate Cerebral Disability",
    "3013005": "CPC 3 Severe Cerebral Disability",
    "3013007": "CPC 4 Coma or Vegetative State"
};
var eArrest334_16 = {
    "3016001": "DNR",
    "3016003": "Medical Control Order",
    "3016005": "Obvious Signs of Death",
    "3016007": "Physically Unable to Perform",
    "3016009": "Protocol/Policy Requirements Completed",
    "3016011": "Return of Spontaneous Circulation (pulse or BP noted)"
};
var eArrest334_17 = {
    "9901001": "Agonal/Idioventricular",
    "9901003": "Asystole",
    "9901005": "Artifact",
    "9901007": "Atrial Fibrillation",
    "9901009": "Atrial Flutter",
    "9901011": "AV Block-1st Degree",
    "9901013": "AV Block-2nd Degree-Type 1",
    "9901015": "AV Block-2nd Degree-Type 2",
    "9901017": "AV Block-3rd Degree",
    "9901019": "Junctional",
    "9901021": "Left Bundle Branch Block",
    "9901023": "Non-STEMI Anterior Ischemia",
    "9901025": "Non-STEMI Inferior Ischemia",
    "9901027": "Non-STEMI Lateral Ischemia",
    "9901029": "Non-STEMI Posterior Ischemia",
    "9901031": "Other (Not Listed)",
    "9901033": "Paced Rhythm",
    "9901035": "PEA",
    "9901037": "Premature Atrial Contractions",
    "9901039": "Premature Ventricular Contractions",
    "9901041": "Right Bundle Branch Block",
    "9901043": "Sinus Arrhythmia",
    "9901045": "Sinus Bradycardia",
    "9901047": "Sinus Rhythm",
    "9901049": "Sinus Tachycardia",
    "9901051": "STEMI Anterior Ischemia",
    "9901053": "STEMI Inferior Ischemia",
    "9901055": "STEMI Lateral Ischemia",
    "9901057": "STEMI Posterior Ischemia",
    "9901059": "Supraventricular Tachycardia",
    "9901061": "Torsades De Points"
};
var eArrest334_18 = {
    "3018001": "Expired in ED",
    "3018003": "Expired in the Field",
    "3018005": "Ongoing Resuscitation in ED",
    "3018007": "ROSC in the Field",
    "3018009": "ROSC in the ED",
    "3018011": "Ongoing Resuscitation by Other EMS"
};
var eCrew334_02 = {
    "2402001": "2009 Advanced Emergency Medical Technician (AEMT)",
    "2402003": "2009 Emergency Medical Responder (EMR)",
    "2402005": "2009 Emergency Medical Technician (EMT)",
    "2402007": "2009 Paramedic",
    "2402009": "First Responder",
    "2402011": "EMT-Basic",
    "2402013": "EMT-Intermediate",
    "2402015": "EMT-Paramedic",
    "2402017": "Nurse",
    "2402019": "Other Healthcare Professional",
    "2402021": "Other Non-Healthcare Professional",
    "2402023": "Physician",
    "2402025": "Respiratory Therapist",
    "2402027": "Student",
    "2402029": "Critical Care Paramedic",
    "2402031": "Community Paramedicine"
};
var eCrew334_03 = {
    "2403001": "Driver/Pilot-Response",
    "2403003": "Driver/Pilot-Transport",
    "2403005": "Other (Not Listed)",
    "2403007": "Other Patient Caregiver-At Scene",
    "2403009": "Other Patient Caregiver-Transport",
    "2403011": "Primary Patient Caregiver-At Scene",
    "2403013": "Primary Patient Caregiver-Transport"
};
var eDevice334_03 = {

    "4103001": "12-Lead ECG",
    "4103003": "Analysis (Button Pressed)",
    "4103005": "CO2",
    "4103007": "Date Transmitted",
    "4103009": "Defibrillation",
    "4103011": "ECG-Monitor",
    "4103013": "Heart Rate",
    "4103015": "Invasive Pressure 1",
    "4103017": "Invasive Pressure 2",
    "4103019": "No Shock Advised",
    "4103021": "Non-Invasive BP",
    "4103023": "Other",
    "4103025": "Pacing Electrical Capture",
    "4103027": "Pacing Started",
    "4103029": "Pacing Stopped",
    "4103031": "Patient Connected",
    "4103033": "Power On",
    "4103035": "Pulse Oximetry",
    "4103037": "Pulse Rate",
    "4103039": "Respiratory Rate",
    "4103041": "Shock Advised",
    "4103043": "Sync Off",
    "4103045": "Sync On",
    "4103047": "Temperature 1",
    "4103049": "Temperature 2"
};
var eDevice334_06 = {
    "4106001": "Advisory",
    "4106003": "Automated",
    "4106005": "Demand",
    "4106007": "Manual",
    "4106009": "Mid-Stream",
    "4106011": "Sensing",
    "4106013": "Side-Stream"
};
var eDevice334_07 = {
    "4107001": "I",
    "4107003": "II",
    "4107005": "III",
    "4107007": "AVR",
    "4107009": "AVL",
    "4107011": "AVF",
    "4107013": "Paddle",
    "4107015": "Pads",
    "4107017": "V1",
    "4107019": "V2",
    "4107021": "V3",
    "4107023": "V3r",
    "4107025": "V4",
    "4107027": "V4r",
    "4107029": "V5",
    "4107031": "V5r",
    "4107033": "V6",
    "4107035": "V6r",
    "4107037": "V7",
    "4107039": "V8",
    "4107041": "V9"
};
var eDevice334_09 = {
    "4109001": "Biphasic",
    "4109003": "Monophasic",
};
var eDispatch334_01 = {
    "2301001": "Abdominal Pain/Problems",
    "2301003": "Allergic Reaction/Stings",
    "2301005": "Animal Bite",
    "2301007": "Assault",
    "2301009": "Automated Crash Notification",
    "2301011": "Back Pain (Non-Traumatic)",
    "2301013": "Breathing Problem",
    "2301015": "Burns/Explosion",
    "2301017": "Carbon Monoxide/Hazmat/Inhalation/CBRN",
    "2301019": "Cardiac Arrest/Death",
    "2301021": "Chest Pain (Non-Traumatic)",
    "2301023": "Choking",
    "2301025": "Convulsions/Seizure",
    "2301027": "Diabetic Problem",
    "2301029": "Electrocution/Lightning",
    "2301031": "Eye Problem/Injury",
    "2301033": "Falls",
    "2301035": "Fire",
    "2301037": "Headache",
    "2301039": "Healthcare Professional/Admission",
    "2301041": "Heart Problems/AICD",
    "2301043": "Heat/Cold Exposure",
    "2301045": "Hemorrhage/Laceration",
    "2301047": "Industrial Accident/Inaccessible Incident/Other Entrapments (Non-Vehicle)",
    "2301049": "Medical Alarm",
    "2301051": "No Other Appropriate Choice",
    "2301053": "Overdose/Poisoning/Ingestion",
    "2301055": "Pandemic/Epidemic/Outbreak",
    "2301057": "Pregnancy/Childbirth/Miscarriage",
    "2301059": "Psychiatric Problem/Abnormal Behavior/Suicide Attempt",
    "2301061": "Sick Person",
    "2301063": "Stab/Gunshot Wound/Penetrating Trauma",
    "2301065": "Standby",
    "2301067": "Stroke/CVA",
    "2301069": "Traffic/Transportation Incident",
    "2301071": "Transfer/Interfacility/Palliative Care",
    "2301073": "Traumatic Injury",
    "2301075": "Well Person Check",
    "2301077": "Unconscious/Fainting/Near-Fainting",
    "2301079": "Unknown Problem/Person Down"
};
var eDispatch334_02 = {
    "2302001": "No",
    "2302003": "Yes; With Pre-Arrival Instructions",
    "2302005": "Yes; Without Pre-Arrival Instructions",
    "2302007": "Yes; Unknown if Pre-Arrival Instructions Given"
};
var eDispatch334_05 = {

    "2305001": "Priority 1 (Critical)",
    "2305003": "Priority 2 (Emergent)",
    "2305005": "Priority 3 (Lower Acuity)",
    "2305007": "Priority 4 (Non-Acute [e.g. Scheduled Transfer  or Standby])"
};
var eDisposition334_12 = {
    "4212003": "Assist; Public",
    "4212005": "Assist; Unit",
    "4212007": "Canceled (Prior to Arrival At Scene)",
    "4212009": "No Patient Contact (Canceled on Scene)",
    "4212011": "No Patient Found (Canceled on Scene)",
    "4212013": "Patient Dead at Scene-No Resuscitation Attempted (With Transport)",
    "4212015": "Patient Dead at Scene-No Resuscitation Attempted (Without Transport)",
    "4212017": "Patient Dead at Scene-Resuscitation Attempted (With Transport)",
    "4212019": "Patient Dead at Scene-Resuscitation Attempted (Without Transport)",
    "4212021": "Patient Evaluated; No Treatment/Transport Required",
    "4212023": "Patient Refused Evaluation/Care (With Transport)",
    "4212025": "Patient Refused Evaluation/Care (Without Transport)",
    "4212027": "Patient Treated; Released (AMA)",
    "4212029": "Patient Treated; Released (per protocol)",
    "4212031": "Patient Treated; Transferred Care to Another EMS Professional",
    "4212033": "Patient Treated; Transported by EMS",
    "4212035": "Patient Treated; Transported by Law Enforcement",
    "4212037": "Patient Treated; Transported by Private Vehicle",
    "4212039": "Standby-No Services or Support Provided",
    "4212041": "Standby-Public Safety; Fire; or EMS Operational Support Provided",
    "4212043": "Transport of Body Parts or Organs Only"
};
var eDisposition334_13 = {
    "9909001": "Assisted/Walk",
    "9909003": "Backboard",
    "9909005": "Chair",
    "9909007": "Carried",
    "9909009": "Other (Not Listed)",
    "9909011": "Stairchair",
    "9909013": "Stretcher",
    "9909015": "Wheelchair"
};
var eDisposition334_14 = {
    "4214001": "Car Seat",
    "4214003": "Fowlers (Semi-Upright Sitting)",
    "4214005": "Lateral Left",
    "4214007": "Lateral Right",
    "4214009": "Other (Not Listed)",
    "4214011": "Prone",
    "4214013": "Semi-Fowlers",
    "4214015": "Sitting",
    "4214017": "Supine",
    "4214019": "Trendelenburg"
};
var eDisposition334_15 = {
    "9909001": "Assisted/Walk",
    "9909003": "Backboard",
    "9909005": "Chair",
    "9909007": "Carried",
    "9909009": "Other (Not Listed)",
    "9909011": "Stairchair",
    "9909013": "Stretcher",
    "9909015": "Wheelchair"
};
var eDisposition334_16 = {
    "4216001": "Air Medical-Fixed Wing",
    "4216003": "Air Medical-Rotor Craft",
    "4216005": "Ground-Ambulance",
    "4216007": "Ground-ATV or Rescue Vehicle",
    "4216009": "Ground-Bariatric",
    "4216011": "Ground-Other Not Listed",
    "4216013": "Ground-Mass Casualty Bus/Vehicle",
    "4216015": "Ground-Wheelchair Van",
    "4216017": "Water-Boat"
};
var eDisposition334_17 = {
    "4217001": "Emergent (Immediate Response)",
    "4217003": "Emergent Downgraded to Non-Emergent",
    "4217005": "Non-Emergent",
    "4217007": "Non-Emergent Upgraded to Emergent"
};
var eDisposition334_18 = {
    "4218001": "Intersection Navigation-Against Normal Light Patterns",
    "4218003": "Intersection Navigation-With Automated Light Changing Technology",
    "4218005": "Intersection Navigation-With Normal Light Patterns",
    "4218007": "Speed-Enhanced per Local Policy",
    "4218009": "Speed-Normal Traffic"
};
var eDisposition334_19 = {
    "9916001": "Improved",
    "9916003": "Unchanged",
    "9916005": "Worse"
}
var eDisposition334_20 = {
    "4220001": "Closest Facility",
    "4220003": "Diversion",
    "4220005": "Family Choice",
    "4220007": "Insurance Status/Requirement",
    "4220009": "Law Enforcement Choice",
    "4220011": "On-Line/On-Scene Medical Direction",
    "4220013": "Other (Not Listed)",
    "4220015": "Patient's Choice",
    "4220017": "Patient's Physician's Choice",
    "4220019": "Protocol",
    "4220021": "Regional Specialty Center",
};
var eDisposition334_21 = {
    "4221001": "Home",
    "4221003": "Hospital-Emergency Department",
    "4221005": "Hospital-Non-Emergency Department Bed",
    "4221007": "Medical Office/Clinic",
    "4221009": "Morgue/Mortuary",
    "4221011": "Nursing Home/Assisted Living Facility",
    "4221013": "Other (Not Listed)",
    "4221015": "Other EMS Responder (air)",
    "4221017": "Other EMS Responder (ground)",
    "4221019": "Police/Jail",
};
var eDisposition334_22 = {
    "4222001": "Hospital-Burn",
    "4222003": "Hospital-Cath Lab",
    "4222005": "Hospital-CCU",
    "4222007": "Hospital-Endoscopy",
    "4222009": "Hospital-Hospice",
    "4222011": "Hospital-Hyperbaric Oxygen Treatment",
    "4222013": "Hospital-ICU",
    "4222015": "Hospital-Labor & Delivery",
    "4222017": "Hospital-Med/Surg",
    "4222019": "Hospital-Mental Health",
};
var eDisposition334_24 = {
    "4224003": "Yes-Adult Trauma",
    "4224005": "Yes-Cardiac Arrest",
    "4224007": "Yes-Obstetrics",
    "4224009": "Yes-Other",
    "4224011": "Yes-Pediatric Trauma",
    "4224013": "Yes-STEMI",
    "4224015": "Yes-Stroke"
};
var eDisposition334_22 = {
    "4226003": "Contact 911 or see your Doctor if problem worsens",
    "4226005": "Other Not Listed (Described in Narrative)",
    "4226007": "Problem Specific Instructions Provided",
    "4226009": "See Your Doctor or the Emergency Department immediately",
    "4226011": "See Your Doctor or the Emergency Department in the next 24 hours",
    "4226013": "See Your Doctor or the Emergency Department in the next 4 hours",
    "4226015": "See Your Doctor within the next one week",
};
var eExam334_02 = {
    "3502001": "blue",
    "3502003": "Green",
    "3502005": "Grey",
    "3502007": "Orange",
    "3502009": "Pink",
    "3502011": "Purple",
    "3502013": "Red",
    "3502015": "White",
    "3502017": "Yellow"
};
var eExam334_04 = {
    "3504001": "Clammy",
    "3504003": "Cold",
    "3504005": "Cyanotic",
    "3504007": "Diaphoretic",
    "3504009": "Dry",
    "3504011": "Flushed",
    "3504013": "Hot",
    "3504015": "Jaundiced",
    "3504017": "Lividity",
    "3504019": "Mottled",
    "3504021": "Normal",
    "3504023": "Not Done",
    "3504025": "Pale",
    "3504027": "Poor Turgor",
    "3504029": "Red (Erythematous)",
    "3504031": "Tenting",
    "3504033": "Warm"
};
var eExam334_05 = {
    "3505001": "Abrasion",
    "3505003": "Avulsion",
    "3505005": "Bleeding Controlled",
    "3505007": "Bleeding Uncontrolled",
    "3505009": "Burn-Blistering",
    "3505011": "Burn-Charring",
    "3505013": "Burn-Redness",
    "3505015": "Burn-White/Waxy",
    "3505017": "Decapitation",
    "3505019": "Deformity",
    "3505021": "Drainage",
    "3505023": "Foreign Body",
    "3505025": "Gunshot Wound-Entry",
    "3505027": "Gunshot Wound-Exit",
    "3505029": "Laceration",
    "3505031": "Mass/Lesion",
    "3505033": "Normal",
    "3505035": "Not Done",
    "3505037": "Pain",
    "3505039": "Puncture/Stab Wound",
    "3505041": "Swelling/Bruising/Contusion with Pain",
    "3505043": "Swelling/Bruising/Contusion without Pain",
    "3505045": "Gunshot Wound-Unknown if Entry or Exit",
    "3505047": "Crush Injury",
    "3505049": "Swelling",
    "3505051": "Contusion",
    "3505053": "Tenderness"
};
var eExam334_06 = {
    "3506001": "Abrasion",
    "3506003": "Asymmetric Smile or Droop",
    "3506005": "Avulsion",
    "3506007": "Bleeding Controlled",
    "3506009": "Bleeding Uncontrolled",
    "3506011": "Burn-Blistering",
    "3506013": "Burn-Charring",
    "3506015": "Burn-Redness",
    "3506017": "Burn-White/Waxy",
    "3506019": "Decapitation",
    "3506021": "Deformity",
    "3506023": "Drainage",
    "3506025": "Foreign Body",
    "3506027": "Gunshot Wound-Entry",
    "3506029": "Gunshot Wound-Exit",
    "3506031": "Laceration",
    "3506033": "Mass/Lesion",
    "3506035": "Normal",
    "3506037": "Not Done",
    "3506039": "Pain",
    "3506041": "Puncture/Stab Wound",
    "3506043": "Swelling/Bruising/Contusion with Pain",
    "3506045": "Swelling/Bruising/Contusion without Pain",
    "3506047": "Gunshot Wound-Unknown if Entry or Exit",
    "3506049": "Crush Injury",
    "3506051": "Tenderness",
    "3506053": "Swelling",
    "3506055": "Contusion",
};
var eExam334_07 = {
    "3507001": "Abrasion",
    "3507003": "Avulsion",
    "3507005": "Bleeding Controlled",
    "3507007": "Bleeding Uncontrolled",
    "3507009": "Burn-Blistering",
    "3507011": "Burn-Charring",
    "3507013": "Burn-Redness",
    "3507015": "Burn-White/Waxy",
    "3507017": "Decapitation",
    "3507019": "Foreign Body",
    "3507021": "Gunshot Wound-Entry",
    "3507023": "Gunshot Wound-Exit",
    "3507025": "JVD",
    "3507027": "Laceration",
    "3507029": "Normal",
    "3507031": "Not Done",
    "3507033": "Pain",
    "3507035": "Puncture/Stab Wound",
    "3507037": "Stridor",
    "3507039": "Subcutaneous Air",
    "3507041": "Swelling/Bruising/Contusion with Pain",
    "3507043": "Swelling/Bruising/Contusion without Pain",
    "3507045": "Tracheal Deviation-Left",
    "3507047": "Tracheal Deviation-Right",
    "3507049": "Gunshot Wound-Unknown if Entry or Exit",
    "3507051": "Crush Injury",
    "3507053": "Swelling",
    "3507055": "Contusion",
    "3507057": "Deformity",
    "3507059": "Tenderness"
};
var eExam334_08 = {
    "3508001": "Abrasion",
    "3508003": "Avulsion",
    "3508005": "Accessory Muscles Used with Breathing",
    "3508007": "Bleeding Controlled",
    "3508009": "Bleeding Uncontrolled",
    "3508011": "Breath Sounds-Absent-Left",
    "3508013": "Breath Sounds-Absent-Right",
    "3508015": "Breath Sounds-Decreased Left",
    "3508017": "Breath Sounds-Decreased Right",
    "3508019": "Breath Sounds-Equal",
    "3508021": "Breath Sounds-Normal-Left",
    "3508023": "Breath Sounds-Normal-Right",
    "3508025": "Burn-Blistering",
    "3508027": "Burn-Charring",
    "3508029": "Burn-Redness",
    "3508031": "Burn-White/Waxy",
    "3508033": "Crush Injury",
    "3508035": "Deformity",
    "3508037": "Flail Segment-Left",
    "3508039": "Flail Segment-Right",
    "3508041": "Foreign Body",
    "3508043": "Gunshot Wound-Entry",
    "3508045": "Gunshot Wound-Exit",
    "3508047": "Increased Respiratory Effort",
    "3508049": "Implanted Device",
    "3508051": "Laceration",
    "3508053": "Normal",
    "3508055": "Not Done",
    "3508057": "Pain",
    "3508059": "Pain with Inspiration/expiration-Left",
    "3508061": "Pain with Inspiration/expiration-Right",
    "3508063": "Puncture/Stab Wound",
    "3508065": "Rales-Left",
    "3508067": "Rales-Right",
    "3508069": "Retraction",
    "3508071": "Rhonchi-Left",
    "3508073": "Rhonchi-Right",
    "3508075": "Rhonchi/Wheezing",
    "3508077": "Stridor-Left",
    "3508079": "Stridor-Right",
    "3508081": "Swelling/Bruising/Contusion with Pain",
    "3508083": "Swelling/Bruising/Contusion without Pain",
    "3508085": "Tenderness-Left",
    "3508087": "Tenderness-Right",
    "3508089": "Wheezing-Expiratory - Left",
    "3508091": "Wheezing-Expiratory - Right",
    "3508093": "Wheezing-Inspiratory - Left",
    "3508095": "Wheezing-Inspiratory - Right",
    "3508097": "Gunshot Wound-Unknown if Entry or Exit",
    "3508099": "Swelling",
    "3508101": "Contusion",
    "3508103": "Tendernes"
};
var eExam334_09 = {
    "3509001": "Heart Sounds Clicks",
    "3509003": "Heart Sounds Decreased",
    "3509005": "Murmur-Diastolic",
    "3509007": "Murmur-Systolic",
    "3509009": "Normal",
    "3509011": "Not Done",
    "3509013": "Rubs",
    "3509015": "S1",
    "3509017": "S2",
    "3509019": "S3",
    "3509021": "S4"
};
var eExam334_10 = {
    "3510001": "Generalized",
    "3510003": "Left Lower Quadrant",
    "3510005": "Left Upper Quadrant",
    "3510007": "Periumbilical",
    "3510009": "Right Lower Quadrant",
    "3510011": "Right Upper Quadrant"
};
var eExam334_11 = {
    "3511001": "Abrasion",
    "3511003": "Avulsion",
    "3511005": "Bleeding Controlled",
    "3511007": "Bleeding Uncontrolled",
    "3511009": "Bowel Sounds-Absent",
    "3511011": "Bowel Sounds-Present",
    "3511013": "Burn-Blistering",
    "3511015": "Burn-Charring",
    "3511017": "Burn-Redness",
    "3511019": "Burn-White/Waxy",
    "3511021": "Distention",
    "3511023": "Foreign Body",
    "3511025": "Guarding",
    "3511027": "Gunshot Wound-Entry",
    "3511029": "Gunshot Wound-Exit",
    "3511031": "Laceration",
    "3511033": "Mass/Lesion",
    "3511035": "Mass-Pulsating",
    "3511037": "Normal",
    "3511039": "Not Done",
    "3511041": "Pain",
    "3511043": "Pregnant-Palpable Uterus",
    "3511045": "Puncture/Stab Wound",
    "3511047": "Swelling/Bruising/Contusion with Pain",
    "3511049": "Swelling/Bruising/Contusion without Pain",
    "3511051": "Tenderness",
    "3511053": "Gunshot Wound-Unknown if Entry or Exit",
    "3511055": "Crush Injury",
    "3511057": "Swelling",
    "3511059": "Contusion",
    "3511061": "Deformity"
};
var eExam334_12 = {
    "3512001": "Abrasion",
    "3512003": "Avulsion",
    "3512005": "Bleeding Controlled",
    "3512007": "Bleeding Uncontrolled",
    "3512009": "Bleeding-Rectal",
    "3512011": "Bleeding-Urethral",
    "3512013": "Bleeding-Vaginal",
    "3512015": "Burn-Blistering",
    "3512017": "Burn-Charring",
    "3512019": "Burn-Redness",
    "3512021": "Burn-White/Waxy",
    "3512023": "Deformity",
    "3512025": "Foreign Body",
    "3512027": "Genital Injury",
    "3512029": "Gunshot Wound-Entry",
    "3512031": "Gunshot Wound-Exit",
    "3512033": "Laceration",
    "3512035": "Mass/Lesion",
    "3512037": "Normal",
    "3512039": "Not Done",
    "3512041": "Pain",
    "3512043": "Pelvic Fracture",
    "3512045": "Pelvic Instability",
    "3512047": "Penile Priapism/Erection",
    "3512049": "Pregnant-Crowning",
    "3512051": "Puncture/Stab Wound",
    "3512053": "Swelling/Bruising/Contusion with Pain",
    "3512055": "Swelling/Bruising/Contusion without Pain",
    "3512057": "Tenderness",
    "3512059": "Gunshot Wound-Unknown if Entry or Exit",
    "3512061": "Crush Injury",
    "3512063": "Swelling",
    "3512065": "Contusion"
};
var eExam334_13 = {
    "3513001": "Back-General",
    "3513003": "Cervical-Left",
    "3513005": "Cervical-Midline",
    "3513007": "Cervical-Right",
    "3513009": "Lumbar-Left",
    "3513011": "Lumbar-Midline",
    "3513013": "Lumbar-Right",
    "3513015": "Thoracic-Left",
    "3513017": "Thoracic-Midline",
    "3513019": "Thoracic-Right",
    "3513021": "Sacral-Left",
    "3513023": "Sacral-Midline",
    "3513025": "Sacral-Right"
};
var eExam334_14 = {

    "3514001": "Abrasion",
    "3514003": "Avulsion",
    "3514005": "Bleeding Controlled",
    "3514007": "Bleeding Uncontrolled",
    "3514009": "Burn-Blistering",
    "3514011": "Burn-Charring",
    "3514013": "Burn-Redness",
    "3514015": "Burn-White/Waxy",
    "3514017": "Deformity",
    "3514019": "Foreign Body",
    "3514021": "Gunshot Wound-Entry",
    "3514023": "Gunshot Wound-Exit",
    "3514025": "Laceration",
    "3514027": "Normal",
    "3514029": "Not Done",
    "3514031": "Pain",
    "3514033": "Pain with Range of Motion",
    "3514035": "Puncture/Stab Wound",
    "3514037": "Swelling/Bruising/Contusion with Pain",
    "3514039": "Swelling/Bruising/Contusion without Pain",
    "3514041": "Tenderness Costovertebral Angle",
    "3514043": "Tenderness Midline Spinous Process",
    "3514045": "Tenderness Paraspinous",
    "3514047": "Gunshot Wound-Unknown if Entry or Exit",
    "3514049": "Crush Injury",
    "3514051": "Swelling",
    "3514053": "Contusion",
    "3514055": "Tenderness"
};
var eExam334_15 = {
    "3515001": "Ankle-Left",
    "3515003": "Ankle-Right",
    "3515005": "Arm-Upper-Left",
    "3515007": "Arm-Upper-Right",
    "3515009": "Elbow-Left",
    "3515011": "Elbow-Right",
    "3515013": "Finger-2nd (Index)-Left",
    "3515015": "Finger-2nd (Index)-Right",
    "3515017": "Finger-3rd (Middle)-Left",
    "3515019": "Finger-3rd (Middle)-Right",
    "3515021": "Finger-4th (Ring)-Left",
    "3515023": "Finger-4th (Ring)-Right",
    "3515025": "Finger-5th (Smallest)-Left",
    "3515027": "Finger-5th (Smallest)-Right",
    "3515029": "Foot-Dorsal-Left",
    "3515031": "Foot-Dorsal-Right",
    "3515033": "Foot-Plantar-Left",
    "3515035": "Foot-Plantar-Right",
    "3515037": "Forearm-Left",
    "3515039": "Forearm-Right",
    "3515041": "Hand-Dorsal-Left",
    "3515043": "Hand-Dorsal-Right",
    "3515045": "Hand-Palm-Left",
    "3515047": "Hand-Palm-Right",
    "3515049": "Hip-Left",
    "3515051": "Hip-Right",
    "3515053": "Knee-Left",
    "3515055": "Knee-Right",
    "3515057": "Leg-Lower-Left",
    "3515059": "Leg-Lower-Right",
    "3515061": "Leg-Upper-Left",
    "3515063": "Leg-Upper-Right",
    "3515065": "Shoulder-Left",
    "3515067": "Shoulder-Right",
    "3515069": "Thumb-Left",
    "3515071": "Thumb-Right",
    "3515073": "Toe-1st (Big)-Left",
    "3515075": "Toe-1st (Big)-Right",
    "3515077": "Toe-2nd-Left",
    "3515079": "Toe-2nd-Right",
    "3515081": "Toe-3rd-Left",
    "3515083": "Toe-3rd-Right",
    "3515085": "Toe-4th-Left",
    "3515087": "Toe-4th-Right",
    "3515089": "Toe-5th (Smallest)-Left",
    "3515091": "Toe-5th (Smallest)-Right",
    "3515093": "Wrist-Left",
    "3515095": "Wrist-Right"
};
var eExam334_16 = {
    "3516001": "Abrasion",
    "3516003": "Amputation-Acute",
    "3516005": "Amputation-Previous",
    "3516007": "Avulsion",
    "3516009": "Bleeding Controlled",
    "3516011": "Bleeding Uncontrolled",
    "3516013": "Burn-Blistering",
    "3516015": "Burn-Charring",
    "3516017": "Burn-Redness",
    "3516019": "Burn-White/Waxy",
    "3516021": "Clubbing (of fingers)",
    "3516023": "Crush Injury",
    "3516025": "Deformity",
    "3516027": "Dislocation",
    "3516029": "Edema",
    "3516031": "Foreign Body",
    "3516033": "Fracture-Closed",
    "3516035": "Fracture-Open",
    "3516037": "Gunshot Wound-Entry",
    "3516039": "Gunshot Wound-Exit",
    "3516041": "Laceration",
    "3516043": "Motor Function-Abnormal/Weakness",
    "3516045": "Motor Function-Absent",
    "3516047": "Motor Function-Normal",
    "3516049": "Normal",
    "3516051": "Not Done",
    "3516053": "Pain",
    "3516055": "Paralysis",
    "3516057": "Pulse-Abnormal",
    "3516059": "Pulse-Absent",
    "3516061": "Pulse-Normal",
    "3516063": "Puncture/Stab Wound",
    "3516065": "Sensation-Abnormal",
    "3516067": "Sensation-Absent",
    "3516069": "Sensation-Normal",
    "3516071": "Swelling/Bruising/Contusion with Pain",
    "3516073": "Swelling/Bruising/Contusion without Pain",
    "3516075": "Tenderness",
    "3516077": "Gunshot Wound-Unknown if Entry or Exit",
    "3516079": "Swelling",
    "3516081": "Contusion"
};
var eExam334_17 = {
    "3517001": "Bilateral",
    "3517003": "Left",
    "3517005": "Right",
};
var eExam334_18 = {
    "3518001": "1-mm",
    "3518003": "2-mm",
    "3518005": "3-mm",
    "3518007": "4-mm",
    "3518009": "5-mm",
    "3518011": "6-mm",
    "3518013": "7-mm",
    "3518015": "8-mm or >",
    "3518017": "Blind",
    "3518019": "Cataract Present",
    "3518021": "Clouded",
    "3518023": "Deformity",
    "3518025": "Dysconjugate Gaze",
    "3518027": "Foreign Body",
    "3518029": "Glaucoma Present",
    "3518031": "Hyphema",
    "3518033": "Jaundiced Sclera",
    "3518035": "Missing",
    "3518037": "Non-Reactive",
    "3518039": "Not Done",
    "3518041": "Non-Reactive Prosthetic",
    "3518043": "Nystagmus Noted",
    "3518045": "Open Globe",
    "3518047": "PERRL",
    "3518049": "Pupil-Irregular/Teardrop",
    "3518051": "Reactive",
    "3518053": "Sluggish",
    "3518055": "Swelling",
    "3518057": "Contusion",
    "3518059": "Puncture/Stab Wound"
};
var eExam334_19 = {
    "3519001": "Combative",
    "3519003": "Confused",
    "3519005": "Hallucinations",
    "3519007": "Normal Baseline for Patient",
    "3519009": "Not Done",
    "3519011": "Oriented-Person",
    "3519013": "Oriented-Place",
    "3519015": "Oriented-Event",
    "3519017": "Oriented-Time",
    "3519019": "Pharmacologically Sedated/Paralyzed",
    "3519021": "Unresponsive"
};
var eExam334_20 = {
    "3520001": "Aphagia",
    "3520003": "Aphasia",
    "3520005": "Cerebellar Function-Abnormal",
    "3520007": "Cerebellar Function-Normal",
    "3520009": "Decerebrate Posturing",
    "3520011": "Decorticate Posturing",
    "3520013": "Gait-Abnormal",
    "3520015": "Gait-Normal",
    "3520017": "Hemiplegia-Left",
    "3520019": "Hemiplegia-Right",
    "3520021": "Normal Baseline for Patient",
    "3520023": "Not Done",
    "3520025": "Seizures",
    "3520027": "Speech Normal",
    "3520029": "Speech Slurring",
    "3520031": "Strength-Asymmetric",
    "3520033": "Strength-Normal",
    "3520035": "Strength-Symmetric",
    "3520037": "Tremors",
    "3520039": "Weakness-Facial Droop-Left",
    "3520041": "Weakness-Facial Droop-Right",
    "3520043": "Weakness-Left Sided",
    "3520045": "Weakness-Right Sided",
    "3520047": "	Reported Stroke Symptoms Resolved Prior to EMS Arrival",
    "3520049": "Reported Stroke Symptoms Resolved in EMS Presence"
};
var eHistory334_01 = {
    "3101001": "Cultural; Custom; Religious",
    "3101003": "Developmentally Impaired",
    "3101005": "Hearing Impaired",
    "3101007": "Language",
    "3101009": "None Noted",
    "3101011": "Obesity",
    "3101013": "Physical Barrier (Unable to Access Patient)",
    "3101015": "Physically Impaired",
    "3101017": "Physically Restrained",
    "3101019": "Psychologically Impaired",
    "3101021": "Sight Impaired",
    "3101023": "Speech Impaired",
    "3101025": "Unattended or Unsupervised (including minors)",
    "3101027": "Unconscious",
    "3101029": "Uncooperative"
};
var eHistory334_05 = {
    "3105001": "Family/Guardian request DNR (but no documentation)",
    "3105003": "Living Will",
    "3105005": "None",
    "3105007": "Other (Not Listed)",
    "3105009": "Other Healthcare Advanced Directive Form",
    "3105011": "State EMS DNR or Medical Order Form"
};
var eHistory334_09 = {
    "3109001": "Bystander/Other",
    "3109003": "Family",
    "3109005": "Health Care Personnel",
    "3109007": "Patient"
};
var eHistory334_10 = {
    "9910001": "Anthrax",
    "9910003": "Cholera",
    "9910005": "DPT (Diphtheria; Tetanus; Pertussis)",
    "9910007": "Hemophilus Influenza B",
    "9910009": "Hepatitis A",
    "9910011": "Hepatitis B",
    "9910013": "Human Papilloma Virus (HPV)",
    "9910015": "Influenza-H1N1",
    "9910017": "Influenza-Other",
    "9910019": "Influenza-Seasonal (In past 12 months)",
    "9910021": "Lyme Disease",
    "9910023": "Meningococcus",
    "9910025": "MMR (Measles; Mumps; Rubella)",
    "9910027": "Other-Not Listed",
    "9910029": "Plague",
    "9910031": "Pneumococcal (Pneumonia)",
    "9910033": "Polio",
    "9910035": "Rabies",
    "9910037": "Rotavirus",
    "9910039": "Shingle",
    "9910041": "Small Pox",
    "9910043": "Tetanus",
    "9910045": "Tuberculosis",
    "9910047": "Typhoid",
    "9910049": "Varicella (Chickenpox)",
    "9910051": "Yellow Fever"
};
var eHistory334_14 = {
    "3114001": "cm",
    "3114003": "gms",
    "3114005": "gtts (drops)",
    "3114007": "inches",
    "3114009": "iu",
    "3114011": "kvo (keep vein open)",
    "3114013": "l/min (fluid administration)",
    "3114015": "liters",
    "3114017": "LPM (gas administration)",
    "3114019": "mcg",
    "3114021": "mcg/kg/min",
    "3114023": "mcg/min",
    "3114025": "meq",
    "3114027": "metered dose",
    "3114029": "mg",
    "3114031": "mg/kg",
    "3114033": "mg/kg/min",
    "3114035": "mg/min",
    "3114037": "ml",
    "3114039": "ml/hr",
    "3114041": "other (Not Listed)",
    "3114043": "puffs",
    "3114045": "units/hr"
};
var eHistory334_15 = {
    "3115001": "Endotracheal Tube",
    "3115003": "Gastrostomy/Feeding Tube",
    "3115005": "Inhalation",
    "3115007": "Intra-Nasal",
    "3115009": "Intramuscular (IM)",
    "3115011": "Intraocular",
    "3115013": "Intraosseous (IO)",
    "3115015": "Intravenous (IV)",
    "3115017": "Nasal Cannula",
    "3115019": "Nasogastric",
    "3115021": "Non-Rebreather Mask",
    "3115023": "Ophthalmic",
    "3115025": "Oral",
    "3115027": "Other/miscellaneous",
    "3115029": "Otic",
    "3115031": "Rectal",
    "3115033": "Subcutaneous",
    "3115035": "Sublingual",
    "3115037": "Topical",
    "3115039": "Tracheostomy",
    "3115041": "Transdermal",
    "3115043": "Urethral",
    "3115045": "Ventimask",
    "3115047": "Wound",
    "9927051": "Tracheostomy",
    "9927053": "Transdermal",
    "9927055": "Urethral",
    "9927057": "Ventimask",
    "9927059": "Wound"
};
var eHistory334_16 = {
    "9923001": "No",
    "9923003": "Yes"
};
var eHistory334_17 = {
    "3117001": "Alcohol Containers/Paraphernalia at Scene",
    "3117003": "Drug Paraphernalia at Scene",
    "3117005": "Patient Admits to Alcohol Use",
    "3117007": "Patient Admits to Drug Use",
    "3117009": "Positive Level known from Law Enforcement or Hospital Record",
    "3117011": "Smell of Alcohol on Breath"
};
var eHistory334_18 = {
    "3118001": "No",
    "3118003": "Possible; Unconfirmed",
    "3118005": "Yes; Confirmed 12 to 20 Weeks",
    "3118007": "Yes; Confirmed Greater Than 20 Weeks",
    "3118009": "Yes; Confirmed Less Than 12 Weeks",
    "3118011": "Yes; Weeks Unknown",
};
var eMedications334_02 = {
    "9923001": "No",
    "9923003": "Yes"
};
var eMedications334_04 = {
    "3704001": "Endotracheal tube",
    "3704003": "Gastrostomy tube",
    "3704005": "Inhalation",
    "3704007": "Intraarterial",
    "3704009": "Intramuscular",
    "3704011": "Intranasal",
    "3704013": "Intraocular",
    "3704015": "Intraosseous",
    "3704017": "Intravenous",
    "3704019": "Nasal",
    "3704021": "Nasal prongs",
    "3704023": "Nasogastric",
    "3704025": "Nasotracheal Tube",
    "3704027": "Ophthalmic",
    "3704029": "Oral",
    "3704031": "Other/miscellaneous",
    "3704033": "Otic",
    "3704035": "Re-breather mask",
    "3704037": "Rectal",
    "3704039": "Subcutaneous",
    "3704041": "Sublingual",
    "3704043": "Topical",
    "3704045": "Tracheostomy",
    "3704047": "Transdermal",
    "3704049": "Urethral",
    "3704051": "Ventimask",
    "3704053": "Wound"
};
var eMedications334_06 = {
    "3706001": "Grams",
    "3706003": "Inches",
    "3706005": "International Units",
    "3706007": "Keep Vein Open (To Keep Open)",
    "3706009": "Liters",
    "3706011": "Liters Per Minute",
    "3706013": "MDI Puffs",
    "3706015": "Micrograms",
    "3706017": "Micrograms per Kilogram per Minute",
    "3706019": "Milliequivalents",
    "3706021": "Milligrams",
    "3706023": "Milligrams Per Kilogram Per Minute",
    "3706025": "Milliliters",
    "3706027": "Milliliters Per Hour",
    "3706029": "Other"
};
var eMedications334_07 = {
    "9916001": "Improved",
    "9916003": "Unchanged",
    "9916005": "Worse"
};
var eMedications334_08 = {
    "3708001": "Altered Mental Status",
    "3708003": "Apnea",
    "3708005": "Bleeding",
    "3708007": "Bradycardia",
    "3708009": "Bradypnea",
    "3708011": "Diarrhea",
    "3708013": "Extravasation",
    "3708015": "Hypertension",
    "3708017": "Hyperthermia",
    "3708019": "Hypotension",
    "3708021": "Hypothermia",
    "3708023": "Hypoxia",
    "3708025": "Injury",
    "3708027": "Itching/Urticaria",
    "3708029": "Nausea",
    "3708031": "None",
    "3708033": "Other (Not Listed)",
    "3708035": "Respiratory Distress",
    "3708037": "Tachycardia",
    "3708039": "Tachypnea",
    "3708041": "Vomiting"
};
var eMedications334_10 = {
    "9905001": "2009 Advanced Emergency Medical Technician (AEMT)",
    "9905003": "2009 Emergency Medical Responder (EMR)",
    "9905005": "2009 Emergency Medical Technician (EMT)",
    "9905007": "2009 Paramedic",
    "9905009": "EMT-Basic",
    "9905011": "EMT-Intermediate",
    "9905013": "EMT-Paramedic (Based on pre-2009 Curriculum)",
    "9905015": "First Responder",
    "9905017": "Nurse",
    "9905019": "Other Healthcare Professional",
    "9905021": "Other Non-Healthcare Professional",
    "9905023": "Patient/Lay Person",
    "9905025": "Physician",
    "9905027": "Respiratory Therapist",
    "9905029": "Student",
    "9905031": "Critical Care Paramedic",
    "9905033": "Community Paramedicine"
};
var eMedications334_11 = {
    "9918001": "On-Line (Remote Verbal Order)",
    "9918003": "On-Scene",
    "9918005": "Protocol (Standing Order)",
    "9918007": "Written Orders (Patient Specific)"
};
var eOther334_01 = {
    "9923001": "No",
    "9923003": "Yes"
};
var eOther334_02 = {
    "4502001": "Airway",
    "4502003": "Burn",
    "4502005": "Cardiac/MI",
    "4502007": "CVA/Stroke",
    "4502009": "Drowning",
    "4502011": "Other (Not Listed)",
    "4502013": "Spinal Cord Injury",
    "4502015": "STEMI/Acute Cardiac",
    "4502017": "Trauma",
    "4502019": "Traumatic Brain Injury"
};
var eOther334_03 = {
    "4503001": "Eye Protection",
    "4503003": "Gloves",
    "4503005": "Helmet",
    "4503007": "Level A Suit",
    "4503009": "Level B Suit",
    "4503011": "Level C Suit",
    "4503013": "Level D Suit (Turn out gear)",
    "4503015": "Mask-N95",
    "4503017": "Mask-Surgical (Non-Fitted)",
    "4503019": "Other (Not Listed)",
    "4503021": "PAPR",
    "4503023": "Reflective Vest"
};
var eOther334_05 = {
    "9923001": "No",
    "9923003": "Yes"
};
var eOther334_06 = {
    "4506001": "Death-Cardiac Arrest",
    "4506003": "Death-Injury Related",
    "4506005": "Death-Other (Not Listed)",
    "4506007": "Exposure-Airborne Respiratory/Biological/Aerosolized Secretions",
    "4506009": "Exposure-Body Fluid Contact to Broken Skin",
    "4506011": "Exposure-Body Fluid Contact with Eye",
    "4506013": "Exposure-Body Fluid Contact with Intact Skin",
    "4506015": "Exposure-Body Fluid Contact with Mucosal Surface",
    "4506017": "Exposure-Needle Stick with Body Fluid Injection",
    "4506019": "Exposure-Needle Stick without Body Fluid Injection",
    "4506021": "Exposure-Toxin/Chemical/Hazmat",
    "4506023": "Injury-Lifting/Back/Musculoskeletal",
    "4506025": "Injury-Other (Not Listed)",
    "4506027": "None",
    "4506029": "Other (Not Listed)"
};
var eOther334_07 = {
    "4507001": "Biologic Agent",
    "4507003": "Building Failure",
    "4507005": "Chemical Agent",
    "4507007": "Explosive Device",
    "4507009": "Fire",
    "4507011": "Hostage Event",
    "4507013": "Mass Gathering",
    "4507015": "Mass Illness",
    "4507017": "Nuclear Agent",
    "4507019": "Radioactive Device",
    "4507021": "Secondary Destructive Device",
    "4507023": "Shooting/Sniper",
    "4507025": "Vehicular",
    "4507027": "Weather"
};
var eOther334_09 = {
    "4509001": "Audio Recording",
    "4509003": "Billing Information",
    "4509005": "Diagnostic Image (CT; X-ray; US; etc)",
    "4509007": "DNR/Living Will",
    "4509009": "ECG/Lab Results",
    "4509011": "Guardianship/Power of Attorney",
    "4509013": "Healthcare Record",
    "4509015": "Other (Not Listed)",
    "4509017": "Patient Identification",
    "4509019": "Patient Refusal Sheet",
    "4509021": "Picture/Graphic",
    "4509023": "Sound Recording",
    "4509025": "Video/Movie"
};
var eOther334_12 = {
    "4512001": "EMS Crew Member (Other)",
    "4512003": "EMS Primary Care Provider (for this event)",
    "4512005": "Healthcare Provider",
    "4512007": "Medical Director",
    "4512009": "Non-Healthcare Provider",
    "4512011": "Online Medical Control Healthcare Practitioner",
    "4512013": "Other",
    "4512015": "Patient",
    "4512017": "Patient Representative",
    "4512019": "Witness"
};
var eOther334_13 = {
    "4513001": "HIPAA acknowledgement/Release",
    "4513003": "Permission to Treat",
    "4513005": "Release for Billing",
    "4513007": "Transfer of Patient Care"
};
var eOther334_14 = {
    "4514001": "Aunt",
    "4514003": "Brother",
    "4514005": "Daughter",
    "4514007": "Discharge Planner",
    "4514009": "Domestic Partner",
    "4514011": "Father",
    "4514013": "Friend",
    "4514015": "Grandfather",
    "4514017": "Grandmother",
    "4514019": "Guardian",
    "4514021": "Husband",
    "4514023": "Law Enforcement",
    "4514025": "MD/DO",
    "4514027": "Mother",
    "4514029": "Nurse (RN)",
    "4514031": "Nurse Practitioner (NP)",
    "4514033": "Other Care Provider (Home health; hospice; etc.)",
    "4514035": "Other"
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
var eScene334_01 = {
    "9923001": "No",
    "9923003": "Yes"
};
var eScene334_04 = {
    "2704001": "EMS Mutual Aid",
    "2704003": "Fire",
    "2704005": "First Responder",
    "2704007": "Hazmat",
    "2704009": "Law",
    "2704011": "Other",
    "2704013": "Other EMS Agency",
    "2704015": "Other Health Care Provider",
    "2704017": "Rescue",
    "2704019": "Utilities"
};
var eScene334_06 = {
    "2707001": "Multiple",
    "2707003": "None",
    "2707005": "Single"
};
var eScene334_07 = {
    "9923001": "No",
    "9923003": "Yes"
};
var eScene334_08 = {
    "2708001": "Red - Immediate",
    "2708003": "Yellow - Delayed",
    "2708005": "Green - Minimal (Minor)",
    "2708007": "Gray - Expectant",
    "2708009": "Black - Deceased"
};
var eSituation334_02 = {
    "9922001": "No",
    "9922003": "Unknown",
    "9922005": "Yes"
};
var eSituation334_03 = {
    "2803001": "Chief (Primary)",
    "2803003": "Other (Not Listed)",
    "2803005": "Secondary"
};
var eSituation334_06 = {
    "2806001": "Seconds",
    "2806003": "Minutes",
    "2806005": "Hours",
    "2806007": "Days",
    "2806009": "Weeks",
    "2806011": "Months",
    "2806013": "Years"
};
var eSituation334_07 = {
    "2807001": "Abdomen",
    "2807003": "Back",
    "2807005": "Chest",
    "2807007": "Extremity-Lower",
    "2807009": "Extremity-Upper",
    "2807011": "General/Global",
    "2807013": "Genitalia",
    "2807015": "Head",
    "2807017": "Neck"
};
var eSituation334_08 = {
    "2808001": "Behavioral/Psychiatric",
    "2808003": "Cardiovascular",
    "2808005": "CNS/Neuro",
    "2808007": "Endocrine/Metabolic",
    "2808009": "GI",
    "2808011": "Global/General",
    "2808013": "Lymphatic/Immune",
    "2808015": "Musculoskeletal/Skin",
    "2808017": "Reproductive",
    "2808019": "Pulmonary",
    "2808021": "Renal"
};
var eSituation334_13 = {
    "2813001": "Critical (Red)",
    "2813003": "Emergent (Yellow)",
    "2813005": "Lower Acuity (Green)",
    "2813007": "Dead without Resuscitation Efforts (Black)"
};
var eSituation334_14 = {
    "9922001": "No",
    "9922003": "Unknown",
    "9922005": "Yes"
};
var eSituation334_15 = {
    "2815001": "Accommodation and Food Services",
    "2815003": "Administrative and Support and Waste Management and Remediation Services",
    "2815005": "Agriculture, Forestry, Fishing and Hunting",
    "2815007": "Arts, Entertainment, and Recreation",
    "2815009": "Construction",
    "2815011": "Educational Services",
    "2815013": "Finance and Insurance",
    "2815015": "Health Care and Social Assistance",
    "2815017": "Information",
    "2815019": "Management of Companies and Enterprises",
    "2815021": "Manufacturing",
    "2815023": "Mining, Quarrying, and Oil and Gas Extraction",
    "2815025": "Other Services (except Public Administration)",
    "2815027": "Professional, Scientific, and Technical Services",
    "2815029": "Public Administration",
    "2815031": "Real Estate and Rental and Leasing",
    "2815033": "Retail Trade",
    "2815035": "Transportation and Warehousing",
    "2815037": "Utilities",
    "2815039": "Wholesale Trade"
};
var eSituation334_16 = {
    "2816001": "Architecture and Engineering Occupations",
    "2816003": "Arts, Design, Entertainment, Sports, and Media Occupations",
    "2816005": "Building and Grounds Cleaning and Maintenance Occupations",
    "2816007": "Business and Financial Operations Occupations",
    "2816009": "Community and Social Services Occupations",
    "2816011": "Computer and Mathematical Occupations",
    "2816013": "Construction and Extraction Occupations",
    "2816015": "Education, Training, and Library Occupations",
    "2816017": "Farming, Fishing and Forestry Occupations",
    "2816019": "Food Preparation and Serving Related Occupations",
    "2816021": "Healthcare Practitioners and Technical Occupations",
    "2816023": "Healthcare Support Occupations",
    "2816025": "Installation, Maintenance, and Repair Occupations",
    "2816027": "Legal Occupations",
    "2816029": "Life, Physical, and Social Science Occupations",
    "2816031": "Management Occupations",
    "2816033": "Military Specific Occupations",
    "2816035": "Office and Administrative Support Occupations",
    "2816037": "Personal Care and Service Occupations",
    "2816039": "Production Occupations",
    "2816041": "Protective Service Occupations",
    "2816043": "Sales and Related Occupations",
    "2816045": "Transportation and Material Moving Occupations"
};
var eOutcome334_01 = {
    "1": "Discharged to home or self care (routine discharge)",
    "2": "Discharged/transferred to another short term general hospital for inpatient care",
    "3": "Discharged/transferred to a skilled nursing facility (SNF) {With Medicare certification in anticipation of covered skilled care.  See Code 61 below.}",
    "4": "Discharged/transferred to an intermediate care facility (ICF)",
    "5": "Discharged/transferred to another type of institution not defined elsewhere in this code list",
    "6": "Discharged/transferred to home under care of organized home health service organization in anticipation of covered skills care",
    "7": "Left against medical advice or discontinued care",
    "9": "Admitted as an inpatient to this hospital.",
    "20": "Deceased/Expired (or did not recover - Religious Non Medical Health Care Patient)",
    "21": "Discharged/transferred to court/law enforcement",
    "30": "Still a patient or expected to return for outpatient services.",
    "43": "Discharged/transferred to a Federal Health Care Facility (e.g. VA or federal health care facility)",
    "50": "Discharged/transferred to Hospice - home.",
    "51": "Discharged/transferred to Hospice - medical facility",
    "61": "Discharged/transferred within this institution to a hospital based Medicare approved swing bed.",
    "62": "Discharged/transferred to a inpatient rehabilitation facility including distinct part units of a hospital.",
    "63": "Discharged/transferred to long term care hospitals",
    "64": "Discharged/transferred to a nursing facility certified under Medicaid but not certified under Medicare",
    "65": "Discharged/transferred to a psychiatric hospital or psychiatric distinct part unit of a hospital.",
    "66": "Discharged/transferred to a Critical Access Hospital (CAH).",
    "70": "Discharged/transferred to another type of health care institution not defined elsewhere in the code list."
};
var eOutcome334_02 = {
    "1": "Discharged to home or self care (routine discharge)",
    "2": "Discharged/transferred to another short term general hospital for inpatient care",
    "3": "Discharged/transferred to a skilled nursing facility (SNF) {With Medicare certification in anticipation of covered skilled care.  See Code 61 below.}",
    "4": "Discharged/transferred to an intermediate care facility (ICF)",
    "5": "Discharged/transferred to another type of institution not defined elsewhere in this code list",
    "6": "Discharged/transferred to home under care of organized home health service organization in anticipation of covered skills care",
    "7": "Left against medical advice or discontinued care",
    "20": "Deceased/Expired (or did not recover - Religious Non Medical Health Care Patient)",
    "21": "Discharged/transferred to court/law enforcement",
    "30": "Still a patient or expected to return for outpatient services.",
    "43": "Discharged/transferred to a Federal Health Care Facility (e.g. VA or federal health care facility)",
    "50": "Discharged/transferred to Hospice - home.",
    "51": "Discharged/transferred to Hospice - medical facility",
    "61": "Discharged/transferred within this institution to a hospital based Medicare approved swing bed.",
    "62": "Discharged/transferred to a inpatient rehabilitation facility including distinct part units of a hospital.",
    "63": "Discharged/transferred to long term care hospitals",
    "64": "Discharged/transferred to a nursing facility certified under Medicaid but not certified under Medicare",
    "65": "Discharged/transferred to a psychiatric hospital or psychiatric distinct part unit of a hospital.",
    "66": "Discharged/transferred to a Critical Access Hospital (CAH).",
    "70": "Discharged/transferred to another type of health care institution not defined elsewhere in the code list."
};
var eOutcome334_03 = {
    "4303001": "Disaster Tag",
    "4303003": "Fire Incident Report",
    "4303005": "Hospital-Receiving",
    "4303007": "Hospital-Transferring",
    "4303009": "Law Enforcement Report",
    "4303011": "Other (Not Listed)",
    "4303013": "Other Registry",
    "4303015": "Other Report",
    "4303017": "Patient ID",
    "4303019": "Prior EMS Patient Care Report",
    "4303021": "STEMI Registry",
    "4303023": "Stroke Registry",
    "4303025": "Trauma Registry",
};
var eOutcome334_17 = {
    "4317001": "No Symptoms At All",
    "4317003": "No significant disability despite symptoms; able to carry out all usual duties and activities",
    "4317005": "Slight disability; unable to carry out all previous activities; but able to look after own affairs without assistance",
    "4317007": "Moderate disability; requiring some help; but able to walk without assistance",
    "4317009": "Moderately severe disability; unable to walk without assistance and unable to attend to own bodily needs without assistance",
    "4317011": "Severe disability; bedridden; incontinent and requiring constant nursing care and attention",
    "4317013": "Dead"
};
var ePatient334_13 = {
    "9906001": "Female",
    "9906003": "Male",
    "9906005": "Unknown (Unable to Determine)",
};
var ePatient334_14 = {
    "2514001": "American Indian or Alaska Native",
    "2514003": "Asian",
    "2514005": "Black or African American",
    "2514007": "Hispanic or Latino",
    "2514009": "Native Hawaiian or Other Pacific Islander",
    "2514011": "White"
};
var ePatient334_16 = {
    "2516001": "Days",
    "2516003": "Hours",
    "2516005": "Minutes",
    "2516007": "Months",
    "2516009": "Years"
};
var eProcedures334_02 = {
    "9923001": "No",
    "9923003": "Yes"
};
var eProcedures334_06 = {
    "9923001": "No",
    "9923003": "Yes"
};
var eProcedures334_07 = {
    "3907001": "Altered Mental Status",
    "3907003": "Apnea",
    "3907005": "Bleeding",
    "3907007": "Bradypnea",
    "3907009": "Diarrhea",
    "3907011": "Esophageal Intubation-immediately",
    "3907013": "Esophageal Intubation-other",
    "3907015": "Extravasation",
    "3907017": "Hypertension",
    "3907019": "Hyperthermia",
    "3907021": "Hypotension",
    "3907023": "Hypothermia",
    "3907025": "Hypoxia",
    "3907027": "Injury",
    "3907029": "Itching/Urticaria",
    "3907031": "Nausea",
    "3907033": "None",
    "3907035": "Other (Not Listed)",
    "3907037": "Portacath",
    "3907039": "Respiratory Distress",
    "3907041": "Tachycardia",
    "3907043": "Tachypnea",
    "3907045": "Vomiting",
    "3907047": "Bradycardia"
};
var eProcedures334_10 = {
    "9905001": "2009 Advanced Emergency Medical Technician (AEMT)",
    "9905003": "2009 Emergency Medical Responder (EMR)",
    "9905005": "2009 Emergency Medical Technician (EMT)",
    "9905007": "2009 Paramedic",
    "9905009": "EMT-Basic",
    "9905011": "EMT-Intermediate",
    "9905013": "EMT-Paramedic",
    "9905015": "First Responder",
    "9905017": "Nurse DEPRECATED",
    "9905019": "Other Healthcare Professional",
    "9905021": "Other Non-Healthcare Professional",
    "9905023": "Patient/Lay Person",
    "9905025": "Physician",
    "9905027": "Respiratory Therapist",
    "9905029": "Student",
    "9905031": "Critical Care Paramedic",
    "9905033": "Community Paramedicine",
    "9905035": "Nurse Practitioner",
    "9905037": "Physician Assistant",
    "9905039": "Licensed Practical Nurse (LPN)",
    "9905041": "Registered Nurse"
};
var eProcedures334_11 = {
    "9918001": "On-Line (Remote Verbal Order)",
    "9918003": "On-Scene",
    "9918005": "Protocol (Standing Order)",
    "9918007": "Written Orders (Patient Specific)"
};
var eProcedures334_13 = {
    "3913001": "Antecubital-Left",
    "3913003": "Antecubital-Right",
    "3913005": "External Jugular-Left",
    "3913007": "External Jugular-Right",
    "3913009": "Femoral-Left IV",
    "3913011": "Femoral-Right IV",
    "3913013": "Foot-Right",
    "3913015": "Foot-Left",
    "3913017": "Forearm-Left",
    "3913019": "Forearm-Right",
    "3913021": "Hand-Left",
    "3913023": "Hand-Right",
    "3913025": "Internal Jugular-Left",
    "3913027": "Internal Jugular-Right",
    "3913029": "IO-Iliac Crest-Left",
    "3913031": "IO-Iliac Crest-Right",
    "3913033": "IO-Femoral-Left Distal",
    "3913035": "IO-Femoral-Right Distal",
    "3913037": "IO-Humeral-Left",
    "3913039": "IO-Humeral-Right",
    "3913041": "IO-Tibia-Left Distal",
    "3913043": "IO-Sternum",
    "3913045": "IO-Tibia-Right Distal",
    "3913047": "IO-Tibia-Left Proximal",
    "3913049": "IO-Tibia-Right Proximal",
    "3913051": "Lower Extremity-Left",
    "3913053": "Lower Extremity-Right",
    "3913055": "Other Peripheral (Not Listed)",
    "3913057": "Other Central (PICC, Portacath, Not Listed)",
    "3913059": "Scalp",
    "3913061": "Subclavian-Left",
    "3913063": "Subclavian-Right",
    "3913065": "Umbilical",
    "3913067": "Venous Cutdown-Left Lower Extremity",
    "3913069": "Venous Cutdown-Right Lower Extremity",
    "3913071": "Upper Arm-Left",
    "3913073": "Upper Arm-Right",
    "3913075": "Radial-Left",
    "3913077": "Radial-Right"
};
var eProtocols334_01 = {
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
    "9914039": "Exposure-Carbon Monoxide/Smoke Inhalation DEPRECATED",
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
    "9914199": "Medical-Tachycardia"
};
var eVitals334_01 = {
    "9923001": "No",
    "9923003": "Yes"
};
var eVitals334_03 = {
    "9901001": "Agonal/Idioventricular",
    "9901003": "Asystole",
    "9901005": "Artifact",
    "9901007": "Atrial Fibrillation",
    "9901009": "Atrial Flutter",
    "9901011": "AV Block-1st Degree",
    "9901013": "AV Block-2nd Degree-Type 1",
    "9901015": "AV Block-2nd Degree-Type 2",
    "9901017": "AV Block-3rd Degree",
    "9901019": "Junctional",
    "9901021": "Left Bundle Branch Block",
    "9901023": "Non-STEMI Anterior Ischemia",
    "9901025": "Non-STEMI Inferior Ischemia",
    "9901027": "Non-STEMI Lateral Ischemia",
    "9901029": "Non-STEMI Posterior Ischemia",
    "9901031": "Other (Not Listed)",
    "9901033": "Paced Rhythm",
    "9901035": "PEA",
    "9901037": "Premature Atrial Contractions",
    "9901039": "Premature Ventricular Contractions",
    "9901041": "Right Bundle Branch Block",
    "9901043": "Sinus Arrhythmia",
    "9901045": "Sinus Bradycardia",
    "9901047": "Sinus Rhythm",
    "9901049": "Sinus Tachycardia",
    "9901051": "STEMI Anterior Ischemia",
    "9901053": "STEMI Inferior Ischemia",
    "9901055": "STEMI Lateral Ischemia",
    "9901057": "STEMI Posterior Ischemia",
    "9901059": "Supraventricular Tachycardia",
    "9901061": "Torsades De Points",
    "9901063": "Unknown AED Non-Shockable Rhythm",
    "9901065": "Unknown AED Shockable Rhythm",
    "9901067": "Ventricular Fibrillation",
    "9901069": "Ventricular Tachycardia (With Pulse)",
    "9901071": "Ventricular Tachycardia (Pulseless)"
};
var eVitals334_04 = {
    "3304001": "3 Lead",
    "3304003": "4 Lead",
    "3304005": "5 Lead",
    "3304007": "12 Lead-Left Sided (Normal)",
    "3304009": "12 Lead-Right Sided",
    "3304011": "15 Lead",
    "3304013": "18 Lead",
    "3304015": "Other (AED, Not Listed)"
};
var eVitals334_05 = {
    "3305001": "Computer Interpretation",
    "3305003": "Manual Interpretation",
    "3305005": "Transmission with No Interpretation",
    "3305007": "Transmission with Remote Interpretation"
};
var eVitals334_08 = {
    "3308001": "Arterial Line",
    "3308003": "Doppler",
    "3308005": "Cuff-Automated",
    "3308007": "Cuff-Manual Auscultated",
    "3308009": "Cuff-Manual Palpated Only",
    "3308011": "Venous Line"
};
var eVitals334_11 = {
    "3311001": "Auscultated",
    "3311003": "Doppler",
    "3311005": "Electronic Monitor - Cardiac",
    "3311007": "Electronic Monitor - Pulse Oximeter",
    "3311009": "Electronic Monitor (Other)",
    "3311011": "Palpated"
};
var eVitals334_13 = {
    "3313001": "Irregularly Irregular",
    "3313003": "Regular",
    "3313005": "Regularly Irregular"
};
var eVitals334_15 = {
    "3315001": "Apneic",
    "3315003": "Labored",
    "3315005": "Mechanically Assisted (BVM, CPAP,etc)",
    "3315007": "Normal",
    "3315009": "Rapid",
    "3315011": "Shallow",
    "3315013": "Weak/Agonal"
};
var eVitals334_19 = {
    "1": "No eye movement when assessed (All Age Groups)",
    "2": "Opens Eyes to painful stimulation (All Age Groups)",
    "3": "Opens Eyes to verbal stimulation (All Age Groups)",
    "4": "Opens Eyes spontaneously (All Age Groups)"
};
var eVitals334_20 = {
    "1": "No verbal/vocal response (All Age Groups)",
    "2": "Incomprehensible sounds (>2 Years); Inconsolable, agitated",
    "3": "Inappropriate words (>2 Years); Inconsistently consolable, moaning",
    "4": "Confused (>2 Years); Cries but is consolable, inappropriate interactions",
    "5": "Oriented (>2 Years); Smiles, oriented to sounds, follows objects, interacts"
};
var eVitals334_21 = {
    "1": "No Motor Response (All Age Groups)",
    "2": "Extension to pain (All Age Groups)",
    "3": "Flexion to pain (All Age Groups)",
    "4": "Withdrawal from pain (All Age Groups)",
    "5": "Localizing pain (All Age Groups)",
    "6": "Obeys commands (>2Years); Appropriate response to stimulation"
};
var eVitals334_22 = {
    "3322001": "Eye Obstruction Prevents Eye Assessment",
    "3322003": "Initial GCS has legitimate values without interventions such as intubation and sedation",
    "3322005": "Patient Chemically Paralyzed",
    "3322007": "Patient Chemically Sedated",
    "3322009": "Patient Intubated"
};
var eVitals334_25 = {
    "3325001": "Axillary",
    "3325003": "Central (Venous or Arterial)",
    "3325005": "Esophageal",
    "3325007": "Oral",
    "3325009": "Rectal",
    "3325011": "Temporal Artery",
    "3325013": "Tympanic",
    "3325015": "Urinary Catheter",
    "3325017": "Skin Probe"
};
var eVitals334_26 = {
    "3326001": "Alert",
    "3326003": "Verbal",
    "3326005": "Painful",
    "3326007": "Unresponsive"
};
var eVitals334_28 = {
    "3328001": "FLACC (Face, Legs, Activity, Cry, Consolability)",
    "3328003": "Numeric (0-10)",
    "3328005": "Other (Not Listed)",
    "3328007": "Wong-Baker (FACES)"
};
var eVitals334_29 = {
    "3329001": "Negative",
    "3329003": "Non-Conclusive",
    "3329005": "Positive"
};
var eVitals334_30 = {
    "3330001": "Cincinnati",
    "3330003": "Los Angeles",
    "3330005": "Massachusetts",
    "3330007": "Miami Emergency Neurologic Deficit (MEND)",
    "3330009": "NIH",
    "3330011": "Other Stroke Scale Type",
    "3330013": "F.A.S.T. Exam"
};
var eVitals334_31 = {
    "3331001": "Definite Contraindications to Thrombolytic Use",
    "3331003": "No Contraindications to Thrombolytic Use",
    "3331005": "Possible Contraindications to Thrombolytic Use"
};
    
