var ErrorList = [];
var v3NOT_REPORTING = "7701005";
var v3NOT_RECORDED = "7701003";
var v3NOT_APPLICABLE= "7701001";
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
var XMLString = ""
var eDispatchObject = new Object();
var eDispositionObject = new Object();


////////////////////////////////////////////////////
var setDemographicsObjects = function (parseObject)

{
    eDispatchObject = getObjectFromOLTPExtract(parseObject, "eDispatch")
    if (eDispatchObject != 'undefined') {
        var _retObject = new Object();
       // _retObject = seteDispatch(eDispatchObject)
    };
    eDispositionObject = getObjectFromOLTPExtract(parseObject, "eDisposition")
    if (eDispositionObject != 'undefined') {
        var _retObject = new Object();
        _retObject = seteDisposition(eDispositionObject)
        console.log(_retObject);
    }
} 

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
var getSectionIndex = function (sectionObject, sectionName)
    //Returns an array of index values for a given sectionName within a sectionObject
    // if sectionName does not exist within the sectionObject, return -1
{
    console.log(sectionObject)
    var _retValue = [];
    for (var d = 0; d < sectionObject.sections.length; d++)
    {
        console.log(sectionObject.sections[d].attributes.name)
        if (sectionObject.sections[d].attributes.name == sectionName)
        {
            _retValue.push(d);
        }
    }
    if (_retValue.length == 0)
    {
        _retValue.push(-1);
    }
    return _retValue;
};
//////////////////////////////////////////////////
var seteDispatch = function (eDispatchObject) {
    var v2Array = new Array();
    var eDispatch = new Object()

    //eDispatch.01/////////
    /*
    eDispatch.01 Complaint Reported by Dispatch 
    The complaint dispatch reported to the responding unit. 
    E03_01 
    Mandatory Airway Cardiac Arrest Pediatric Response STEMI Stroke Trauma 
    */

    //Determine if an eAirway, eCardiac, eArrest, eReponse event occured.  If Yes, Dispatch Mandatory
    //If No, NOT APPLICABLE

    eDispatch["is911Call"] = false;
    var _elementList = []
    _elementList = eDispatchObject.attributes.elements;
    _val = getValue(_elementList, "eDispatch.01");
    if (_val == null) {
        if (IsDispatchMandatory(eDispatchObject)) {
            ErrorList.push("eDispatch.01 MANDATORY Element");
            eDispatch["eDispatch.01"] = null;
            v2Array.push({ section: "E03", element: "E03_01", val: null });
        }
    }
    else
    {
        eDispatch["is911Call"] = true;
        eDispatch["ComplaintReportedbyDispatch"] = setCodeText("eDispatch.01", _val[0]);
        eDispatch["eDispatch.01"] = _val[0];
        v2Array.push({ section: "E03", element: "E03_01", val: setV2("eDispatch.01", _val[0]) });
    };
    /*eDispatch.02 EMD Performed 
    Indication of whether Emergency Medical Dispatch was performed for this EMS event. E03_02 
    Required Airway Cardiac Arrest Pediatric Response STEMI Stroke Trauma
    */


    _val = getValue(_elementList, "eDispatch.02");
    if (_val == null) {

        //If Not emergent call, EMD not applicable
        if (IsDispatchMandatory(eDispatchObject)) {
            v2Array.push({ section: "E03", element: "E03_02", val: v2NOT_APPLICABLE });
            eDispatch["eDispatch.02"] = v3NOT_APPLICABLE;
            eDispatch["EMDPerformed"] = v3NOT_APPLICABLE;
        }
        else {
            v2Array.push({ section: "E03", element: "E03_02", val: v2NOT_RECORDED });
            eDispatch["eDispatch.02"] = v3NOT_RECORDED;
            eDispatch["EMDPerformed"] = v3NOT_RECORDED;
        }
    }
    else {
        eDispatch["eDispatch.02"] = _val[0];
        eDispatch["EMDPerformed"] = setCodeText("eDispatch.02", _val[0]);
        v2Array.push({ section: "E03", element: "E03_02", val: setV2("eDispatch.02", _val[0]) });
    };


    /////eDispatch.03////////////////////
    _val = getValue(_elementList, "eDispatch.03");
    if (_val == null) {
        eDispatch["eDispatch.03"] = null;
        eDispatch["EMDCardNumber"] = null;
        v2Array.push({ section: "E03", element: "E03_03", val: null });
    }
    else {
        eDispatch["eDispatch.03"] = _val[0];
        eDispatch["EMDCardNumber"] = _val[0];
        v2Array.push({ section: "E03", element: "E03_03", val: _val[0] });
    };


    /////eDispatch.04////////////////////
    _val = getValue(_elementList, "eDispatch.04");
    if (_val == null) {
        eDispatch["eDispatch.04"] = null;
        eDispatch["DispatchCenterNameorID"] = null;
    }
    else {
        eDispatch["eDispatch.04"] = _val[0];
        eDispatch["DispatchCenterNameorID"] = _val[0];
    };


    /////eDispatch.05////////////////////
    eDispatch["isEmergent"] = false;
    _val = getValue(_elementList, "eDispatch.05");
    if (_val == null) {
        eDispatch["eDispatch.05"] = null;
        eDispatch["DispatchPriority"] = null;

    }
    else
    {
        if (_val[0] <= "2305003") {
            eDispatch["isEmergent"] = true;
        };
        if (_val[0] > "2305003") {
            eDispatch["isEmergent"] = false;
        };

        eDispatch["eDispatch.05"] = _val[0];
        eDispatch["DispatchPriority"] = setCodeText("eDispatch.05", _val[0]);
    };


    eDispatch.V2Array = v2Array;
    return eDispatch;
};
var seteDisposition = function (eDispositionObject) 
{
    /*
         <!-- Set flags based on eDisposition.12 Incident/Patient Disposition. -->
        <!-- no_scene: Canceled (Prior to Arrival at Scene). -->
        <sch:let name="no_scene" value="if(ancestor-or-self::nem:PatientCareReport/nem:eDisposition/nem:eDisposition.12[. = 4212007]) then true() else false()"/>
        <!-- no_patient: No scene or Assist, No Patient, or Standby. -->
        <sch:let name="no_patient" value="if($no_scene or ancestor-or-self::nem:PatientCareReport/nem:eDisposition/nem:eDisposition.12[. &lt;= 4212011 or . = (4212039, 4212041)]) then true() else false()"/>
        <!-- no_treatment: No patient or No Resuscitation Attempted, No Treatment/Transport Required, or Transport of Body Parts or Organs only. -->
        <sch:let name="no_treatment" value="if($no_patient or ancestor-or-self::nem:PatientCareReport/nem:eDisposition/nem:eDisposition.12[. = (4212013, 4212015, 4212021, 4212043)]) then true() else false()"/>
        <!-- no_transport: No patient or Without Transport, No Treatment/Transport Required, Released, or Transferred. -->
        <sch:let name="no_transport" value="if($no_patient or ancestor-or-self::nem:PatientCareReport/nem:eDisposition/nem:eDisposition.12[. = (4212015, 4212019, 4212021, 4212025, 4212027, 4212029, 4212031)]) then true() else false()"/>
        <!-- Flag each of the following elements if it is empty, contingent upon a flag that was set based on the Disposition. -->
        <sch:let name="eDisposition.17" value="if($no_transport or nem:eDisposition/nem:eDisposition.17 != '') then '' else key('nemSch_key_elements', 'eDisposition.17', $nemSch_elements)"/>
        <sch:let name="eDisposition.20" value="if($no_transport or not(nem:eDisposition/nem:eDisposition.20 = '')) then '' else key('nemSch_key_elements', 'eDisposition.20', $nemSch_elements)"/>
        <sch:title>eDisposition.24 Destination Team Pre-Arrival Alert or Activation and eDisposition.25 Date/Time of Destination Prearrival Alert or Activation are both recorded when either one is recorded.</sch:title>
        <sch:rule id="nemSch_consistency_eDisposition.HospitalTeamActivationGroup_eDisposition.24" context="nem:eDisposition.HospitalTeamActivationGroup[nem:eDisposition.25 != '']">
        <!-- This rule fires when eDisposition.25 Date/Time of Destination Prearrival Alert or Activation is recorded. -->
        <!-- Assert that eDisposition.24 Destination Team Pre-Arrival Alert or Activation is also recorded. -->
        <sch:assert id="nemSch_consistency_eDisposition.HospitalTeamActivationGroup_eDisposition.24_present" role="[WARNING]" diagnostics="nemsisDiagnostic" test="nem:eDisposition.24 != ''">
          When <sch:value-of select="key('nemSch_key_elements', 'eDisposition.25', $nemSch_elements)"/> is recorded, <sch:value-of select="key('nemSch_key_elements', 'eDisposition.24', $nemSch_elements)"/> should also be recorded.
        <!-- This rule fires when eDisposition.25 Date/Time of Destination Prearrival Alert or Activation is not recorded and eDisposition.24 Destination Team Pre-Arrival Alert or Activation is recorded and is not "None". -->
        <!-- Assert that eDisposition.25 Date/Time of Destination Prearrival Alert or Activation is also recorded. -->
    
        <sch:assert id="nemSch_consistency_eDisposition.HospitalTeamActivationGroup_eDisposition.25_present" role="[WARNING]" diagnostics="nemsisDiagnostic" test="false()">
          When <sch:value-of select="key('nemSch_key_elements', 'eDisposition.24', $nemSch_elements)"/> is recorded, <sch:value-of select="key('nemSch_key_elements', 'eDisposition.25', $nemSch_elements)"/> should also be recorded.
*/

    var v2Array = [];
    var HospitalTeamActivationGroupArray = new Array();
    var eDisposition = new Object();
    var eHospitalTeamActivationGroup = new Object();
    var HospitalTeamActivationGroup = new Object();

    _elementList = eDispositionObject.attributes.elements;
    _destinationElementList = eDispositionObject.attributes.sections[0].attributes.elements;

    // console.log(eDispositionObject);
    console.log(_destinationElementList)

    var bHasData = false;  //once I have real data, set to False

    //Determine DispositionType.  Entire EMS Transport process driven by eDisposition.12
    //eDisposition.12////

    //If there is any data at all, this is invalid.
    //This rule fires if Disposition is "Canceled (Prior to Arrival at Scene)". Nothing is checked. 
    //no_patient: No scene or Assist, No Patient, or Standby.
    //NO_PATIENT eDisposition.12[. &lt;= 4212011 or . = (4212039, 4212041)]) then true() else false()"
    //NO_TREATMENT No patient or No Resuscitation Attempted, No Treatment/Transport Required, or Transport of Body Parts 
    //or Organs only. eDisposition.12[. = (4212013, 4212015, 4212021, 4212043)]) then true() else false()"/>

    //NO_TRANSPORT: No patient or Without Transport, No Treatment/Transport Required, Released, or Transferred. 
    //eDisposition.12[. = (4212015, 4212019, 4212021, 4212025, 4212027, 4212029, 4212031)]) then true() else false()"/>

    //Flag each of the following elements if it is empty, contingent upon a flag that was set based on the Disposition. -->

    //NO_TRANSPORT eDisposition.17 != '') then '' else key('nemSch_key_elements', 'eDisposition.17', $nemSch_elements)"/>

    //NO_TRANSPORT "eDisposition.20" value="if($no_transport or not(nem:eDisposition/nem:eDisposition.20 = '')) then '' else key('nemSch_key_elements', 'eDisposition.20', $nemSch_elements)"/>

    //test="not($eDisposition.17 or $eDisposition.20 or $ePatient.13 or $ePatient.15 or $eScene.09 or $eTimes.05 or $eTimes.06 or $eTimes.07 or $eTimes.09 or $eTimes.11 or $eTimes.12)">
    // Based on <sch:value-of select="key('nemSch_key_elements', 'eDisposition.12', $nemSch_elements)"/>, the following should be recorded:
    //<sch:value-of select="string-join(($eDisposition.17, $eDisposition.20, $ePatient.13, $ePatient.15, $eScene.09, $eTimes.05, $eTimes.06, $eTimes.07, $eTimes.09, $eTimes.11, $eTimes.12)[. != ''], ', ')"/>

    _val = getValue(_elementList, "eDisposition.12");
    if (_val == null) 
    {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eDisposition.12", Description: "Incident/Patient Disposition Mandatory" })
    }
    else 
    {
        eDisposition["eDisposition.12"] = _val[0];
        eDisposition["IncidentPatientDisposition"] = setCodeText("eDisposition.12", _val[0]);
        v2Array.push({ section: "E20", element: "E20_10", val: setV2("eDisposition.12", _val[0]) });
        console.log(_val[0].toString())
        switch (_val[0].toString())
        {            
            case "4212001":
                eDisposition["isCanceled"] = false;
                eDisposition["HasPatient"] = false;
                eDisposition["HasTreatment"] = false;
                eDisposition["HasTransport"] = false;
                break;
            case "4212003":
                eDisposition["isCanceled"] = false;
                eDisposition["HasPatient"] = false;
                eDisposition["HasTreatment"] = false;
                eDisposition["HasTransport"] = false;
                break;
            case "4212005":
                eDisposition["isCanceled"] = false;
                eDisposition["HasPatient"] = false;
                eDisposition["HasTreatment"] = false;
                eDisposition["HasTransport"] = false;
                break;
            case "4212007":
                eDisposition["isCanceled"] = true;
                eDisposition["HasPatient"] = false;
                eDisposition["HasTreatment"] = false;
                eDisposition["HasTransport"] = false;
                break;
            case "4212009":
                eDisposition["isCanceled"] = true;
                eDisposition["HasPatient"] = false;
                eDisposition["HasTreatment"] = false;
                eDisposition["HasTransport"] = false;
                break;
            case "4212011":
                eDisposition["isCanceled"] = false;
                eDisposition["HasPatient"] = false;
                eDisposition["HasTreatment"] = false;
                eDisposition["HasTransport"] = false;
                break;
            case "4212013":
                eDisposition["isCanceled"] = false;
                eDisposition["HasPatient"] = true;
                eDisposition["HasTreatment"] = false;
                eDisposition["HasTransport"] = true;
                break;
            case "4212015":
                eDisposition["isCanceled"] = false;
                eDisposition["HasPatient"] = false;
                eDisposition["HasTreatment"] = false;
                eDisposition["HasTransport"] = false;
                break;

            case "4212017":
                eDisposition["isCanceled"] = false;
                eDisposition["HasPatient"] = true;
                eDisposition["HasTreatment"] = true;
                eDisposition["HasTransport"] = true;
                break;
            case "4212019":
                eDisposition["isCanceled"] = false;
                eDisposition["HasPatient"] = false;
                eDisposition["HasTreatment"] = true;
                eDisposition["HasTransport"] = false;
                break;
            case "4212021":
                eDisposition["isCanceled"] = false;
                eDisposition["HasPatient"] = false;
                eDisposition["HasTreatment"] = false;
                eDisposition["HasTransport"] = false;
                break;
            case "4212023":
                eDisposition["isCanceled"] = false;
                eDisposition["HasPatient"] = false;
                eDisposition["HasTreatment"] = false;
                eDisposition["HasTransport"] = true;
                break;
            case "4212025":
                eDisposition["isCanceled"] = false;
                eDisposition["HasPatient"] = false;
                eDisposition["HasTreatment"] = false;
                eDisposition["HasTransport"] = false;
                break;
            case "4212027":
                eDisposition["isCanceled"] = false;
                eDisposition["HasPatient"] = false;
                eDisposition["HasTreatment"] = true;
                eDisposition["HasTransport"] = false;
                break;
            case "4212029":
                eDisposition["isCanceled"] = false;
                eDisposition["HasPatient"] = false;
                eDisposition["HasTreatment"] = true;
                eDisposition["HasTransport"] = false;
                break;
            case "4212031":
                eDisposition["isCanceled"] = false;
                eDisposition["HasPatient"] = false;
                eDisposition["HasTreatment"] = true;
                eDisposition["HasTransport"] = false;
                break;
            case "4212033":
                eDisposition["isCanceled"] = false;
                eDisposition["HasPatient"] = true;
                eDisposition["HasTreatment"] = true;
                eDisposition["HasTransport"] = true;
                break;
            case "4212035":
                eDisposition["isCanceled"] = false;
                eDisposition["HasPatient"] = false;
                eDisposition["HasTreatment"] = true;
                eDisposition["HasTransport"] = false;
                break;
            case "4212037":
                eDisposition["isCanceled"] = false;
                eDisposition["HasPatient"] = false;
                eDisposition["HasTreatment"] = true;
                eDisposition["HasTransport"] = false;
                break;
            case "4212039":
                eDisposition["isCanceled"] = false;
                eDisposition["HasPatient"] = false;
                eDisposition["HasTreatment"] = false;
                eDisposition["HasTransport"] = false;
                break;
            case "4212041":
                eDisposition["isCanceled"] = false;
                eDisposition["HasPatient"] = false;
                eDisposition["HasTreatment"] = false;
                eDisposition["HasTransport"] = false;
                break;
            case "4212043":
                eDisposition["isCanceled"] = false;
                eDisposition["HasPatient"] = false;
                eDisposition["HasTreatment"] = false;
                eDisposition["HasTransport"] = true;
                break;
            default:
                console.log(_val[0]);
        }
    };

    //eDisposition.01////
    _val = getValue(_destinationElementList, "eDisposition.01");
    console.log(_val)
    if (_val == null) 
    {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            if (isRequiredStateElement("eDisposition.01") == true) 
            {
                eDisposition["eDisposition.01"] = v3NOT_RECORDED;
                eDisposition["TransferredToName"] = v3NOT_RECORDED;
                v2Array.push({ section: "E20", element: "E20_01", val: v2NOT_RECORDED });
            }
            else // else, no Transport, not Applicable Data
            {
                eDisposition["eDisposition.01"] = v2NOT_REPORTING;
                eDisposition["TransferredToName"] = v2NOT_REPORTING;
                v2Array.push({ section: "E20", element: "E20_01", val: v2NOT_REPORTING });
            }
        }
        else {
            eDisposition["eDisposition.01"] = v3NOT_APPLICABLE;
            eDisposition["TransferredToName"] = v3NOT_APPLICABLE;
            v2Array.push({ section: "E20", element: "E20_01", val: v2NOT_APPLICABLE });         
        }
    }
    else
    {
        if (eDisposition.HasTransport == true)
        {
            v2Array.push({ section: "E20", element: "E20_01", val: _val[0] });
            eDisposition["eDisposition.01"] = _val[0];
            eDisposition["TransferredToName"] = _val[0];
        }
        else {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.01", Description: "Transport Desitination with No Transport Record " })
            //    v2Array.push({ section: "E20", element: "E20_01", val: null });
            //    eDisposition["eDisposition.01"] = null;
            //    eDisposition["TransferredToName"] = null;
        }
    };

    
    //eDisposition.02////
    _val = getValue(_destinationElementList, "eDisposition.02");
    if (_val == null) {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            if (isRequiredStateElement("eDisposition.02") == true) {
                eDisposition["eDisposition.02"] = v3NOT_RECORDED;
                eDisposition["TransferredToCode"] = v3NOT_RECORDED;
                v2Array.push({ section: "E20", element: "E20_02", val: v2NOT_RECORDED });
            }
            else {
                eDisposition["TransferredToCode"] = v2NOT_REPORTING;
                eDisposition["eDisposition.02"] = v2NOT_REPORTING;
                v2Array.push({ section: "E20", element: "E20_02", val: v2NOT_REPORTING });
            }
        }
        else {
            eDisposition["eDisposition.02"] = v3NOT_APPLICABLE;
            eDisposition["TransferredToCode"] = v3NOT_APPLICABLE;
            v2Array.push({ section: "E20", element: "E20_02", val: v2NOT_APPLICABLE });
        }
    }
    else 
    {
        if (eDisposition.HasTransport == true) 
        {
            eDisposition["eDisposition.02"] = _val[0];
            eDisposition["TransferredToCode"] = _val[0];
            v2Array.push({ section: "E20", element: "E20_02", val: _val[0] });
        }
        else 
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.02", Description: "Transport Desitination with No Transport Record " })
            v2Array.push({ section: "E20", element: "E20_02", val: null });
            eDisposition["eDisposition.02"] = null;
            eDisposition["TransferredToCode"] = null;
        }
    };

    
    //eDisposition.03////
    _val = getValue(_destinationElementList, "eDisposition.03");
    if (_val == null)
    {
        if (eDisposition.HasTransport == true) //if have a transport, and Is Required Data 
        {
            if (isRequiredStateElement("eDisposition.03") == true) 
            {                        
                ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.03", Description: "Transport Address Required" })
            }
        };
        //eDisposition["eDisposition.03"] = null;
        //eDisposition["Address"] = null;
        v2Array.push({ section: "E20", element: "E20_02", val: null });
    }
    else
    {
        if (eDisposition.HasTransport == true) //if NO Transport, wipe out data
        {
            eDisposition["eDisposition.03"] = _val[0];
            eDisposition["Address"] = _val[0];
            v2Array.push({ section: "E20", element: "E20_02", val: _val[0] });
        }
        else
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.03", Description: "Transport Address/Transport Type Conflict" })
            //    eDisposition["eDisposition.03"] = null;
            //    eDisposition["Address"] = null;
            //   v2Array.push({ section: "E20", element: "E20_02", val: null });
        }
    };

    
    //eDisposition.04////
    _val = getValue(_destinationElementList, "eDisposition.04");
    if (_val == null)
    {
        if (isRequiredStateElement("eDisposition.02") == true) 
        {
            if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
            {
                ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.04", Description: "Transport Address Required" })
            }
        };
        //eDisposition["eDisposition.04"] = null;
        //eDisposition["City"] = null;
        v2Array.push({ section: "E20", element: "E20_04", val: null });
    }
    else
    {
        if (eDisposition.HasTransport == true) //if NO Transport, wipe out data
        {
            eDisposition["eDisposition.04"] = _val[0];
            eDisposition["City"] = _val[0];
            v2Array.push({ section: "E20", element: "E20_04", val: _val[0] });
        }
        else
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.04", Description: "Transport City/Transport Type Conflict" })
            //    eDisposition["eDisposition.04"] = null;
            //   eDisposition["City"] = null;
            v2Array.push({ section: "E20", element: "E20_04", val: null });
        }
    };

    neil
    //eDisposition.05////
    _val = getValue(_destinationElementList, "eDisposition.05");
    if (_val == null)
    {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            if (isRequiredStateElement("eDisposition.01") == true) {
                eDisposition["eDisposition.05"] = v3NOT_RECORDED;
                eDisposition["State"] = v3NOT_RECORDED;
                v2Array.push({ section: "E20", element: "E20_05", val: v2NOT_RECORDED });
            }
            else
            {
                eDisposition["eDisposition.05"] = null;
                eDisposition["State"] = null;
                v2Array.push({ section: "E20", element: "E20_05", val: null });
            }
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.05", Description: "Transport State/Transport Type Conflict " })
            eDisposition["eDisposition.05"] = _val[0];
            eDisposition["State"] = _val[0];
            v2Array.push({ section: "E20", element: "E20_05", val: _val[0] });
        }
    }
    else
    {            
        eDisposition["eDisposition.05"] = v3NOT_APPLICABLE;
        eDisposition["State"] = v3NOT_APPLICABLE;
        v2Array.push({ section: "E20", element: "E20_05", val: v2NOT_APPLICABLE });    
    };
    
    //eDisposition.06////
    _val = getValue(_destinationElementList, "eDisposition.06");
    if (_val == null)
    {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            eDisposition["eDisposition.06"] = v3NOT_RECORDED;
            eDisposition["County"] = v3NOT_RECORDED;
            v2Array.push({ section: "E20", element: "E20_06", val: v2NOT_RECORDED });
        }
        else
        {
         
            eDisposition["eDisposition.06"] = null;
            eDisposition["County"] = null;
            v2Array.push({ section: "E20", element: "E20_06", val: null });
        }
    }

    else {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.06", Description: "Transport City/Transport Type Conflict " })
            eDisposition["eDisposition.06"] = _val[0];
            eDisposition["County"] = _val[0];
            v2Array.push({ section: "E20", element: "E20_06", val: _val[0] });
        }
        else {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.06", Description: "Transport City/Transport Type Conflict " })
            eDisposition["eDisposition.06"] = v3NOT_APPLICABLE;
            eDisposition["County"] = v3NOT_APPLICABLE;
            v2Array.push({ section: "E20", element: "E20_06", val: v2NOT_APPLICABLE });
        }
    };

    /*
    //eDisposition.07////
    _val = getValue(_destinationElementList, "eDisposition.07");
    if (_val == null) {
        if (isRequiredStateElement("eDisposition.07") == true) {
            if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
            {
                eDisposition["eDisposition.07"] = v3NOT_RECORDED;
                eDisposition["ZIP"] = v3NOT_RECORDED;
                v2Array.push({ section: "E20", element: "E20_07", val: v2NOT_RECORDED });
            }
            else {
                eDisposition["eDisposition.07"] = v3NOT_APPLICABLE;
                eDisposition["ZIP"] = v3NOT_APPLICABLE;
                v2Array.push({ section: "E20", element: "E20_07", val: v2NOT_APPLICABLE });
            }
        }
        else {
            eDisposition["eDisposition.07"] = null;
            eDisposition["ZIP"] = null;
            v2Array.push({ section: "E20", element: "E20_07", val: null });
        }
    }
    else {
        if (eDisposition.HasTransport == true) {
            eDisposition["eDisposition.07"] = _val[0];
            eDisposition["ZIP"] = _val[0];
            v2Array.push({ section: "E20", element: "E20_07", val: _val[0] });
            console.log("Better be dFacility.10 ZIP")
        }
        else {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.07", Description: "Transport Zip/Transport Type Conflict " })
            eDisposition["eDisposition.07"] = v3NOT_APPLICABLE;
            eDisposition["ZIP"] = v3NOT_APPLICABLE;
            v2Array.push({ section: "E20", element: "E20_07", val: v2NOT_APPLICABLE });
        }
    };



    //eDisposition.08////
    _val = getValue(_destinationElementList, "eDisposition.08");
    if (_val == null) {
        eDisposition["eDisposition.08"] = null;
        eDisposition["Country"] = null;
    }
    else {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            console.log("Better be dFacility.12 - Country")
            eDisposition["eDisposition.08"] = _val[0];
            eDisposition["Country"] = _val[0];
        }
        else {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.08", Description: "Transport County/Transport Type Conflict " })
            console.log("Better be dFacility.12 - Country")
            eDisposition["eDisposition.08"] = null;
            eDisposition["Country"] = null;
        }
    };


    //eDisposition.09////
    _val = getValue(_destinationElementList, "eDisposition.09");
    if (_val == null) {
        eDisposition["eDisposition.09"] = null;
        eDisposition["GPSLocation"] = null;
        v2Array.push({ section: "E20", element: "E20_08", val: null });
    }
    else {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            eDisposition["eDisposition.09"] = _val[0];
            eDisposition["GPSLocation"] = _val[0];
            v2Array.push({ section: "E20", element: "E20_08", val: _val[0] });
        }
        else {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.09", Description: "Transport GPS/Transport Type Conflict " })
            eDisposition["eDisposition.09"] = null;
            eDisposition["GPSLocation"] = null;
            v2Array.push({ section: "E20", element: "E20_08", val: null });
        }
    };

    //eDisposition.10////
    _val = getValue(_destinationElementList, "eDisposition.10");
    if (_val == null) {
        eDisposition["eDisposition.10"] = null;
        eDisposition["USNationalGridCoordinates"] = null;
    }
    else {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            console.log("Better be dFacility.14 - Country")
            eDisposition["eDisposition.10"] = _val[0];
            eDisposition["USNationalGridCoordinates"] = _val[0];
        }
        else {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.10", Description: "Transport National Coords/Transport Type Conflict " })
            eDisposition["eDisposition.10"] = null;
            eDisposition["USNationalGridCoordinates"] = null;
        }
    };


    //eDisposition.11////
    _val = getValue(_elementList, "eDisposition.11");
    if (_val == null) {
        if (isRequiredStateElement("eDisposition.11") == true) {
            if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
            {
                eDisposition["eDisposition.11"] = v3NOT_RECORDED;
                eDisposition["NumberofPatientsTransportedinthisEMSUnit"] = v3NOT_RECORDED;
            }
            else {
                eDisposition["eDisposition.11"] = v3NOT_REPORTING;
                eDisposition["NumberofPatientsTransportedinthisEMSUnit"] = v3NOT_REPORTING;
            }
        }
        else {
            eDisposition["eDisposition.11"] = v3NOT_APPLICABLE;
            eDisposition["NumberofPatientsTransportedinthisEMSUnit"] = v3NOT_APPLICABLE;
        }
    }
    else {
        if (eDisposition.HasTransport == true) {
            eDisposition["eDisposition.11"] = _val[0];
            eDisposition["NumberofPatientsTransportedinthisEMSUnit"] = _val[0];
        }
        else {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.11", Description: "Transport Number Patients/Transport Type Conflict  " })
            eDisposition["eDisposition.11"] = v3NOT_APPLICABLE;
            eDisposition["NumberofPatientsTransportedinthisEMSUnit"] = v3NOT_APPLICABLE;
        }
    };


    //eDisposition.13////
    _val = getValue(_elementList, "eDisposition.13");
    if (_val == null) {
        eDisposition["eDisposition.13"] = null;
        eDisposition["HowPatientWasMovedtoAmbulance"] = null;
        v2Array.push({ section: "E20", element: "E20_11", val: null });
    }
    else {
        if (eDisposition.HasTransport == true) {
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _val.length; i++) {
                if (_val[i].trim().length != 0) {
                    arr1.push(_val[i]);
                    arr2.push(setV2("eDisposition.13", _val[i]));
                    arr3.push(setCodeText("eDisposition.13", _val[i]));
                }
            }
            if (arr1.length > 0) {
                v2Array.push({ section: "E20", element: "E20_11", val: arr2.slice(0) });
                eDisposition["eDisposition.13"] = arr1.slice(0);
                eDisposition["HowPatientWasMovedtoAmbulance"] = arr3.slice(0);
            }
            else {
                v2Array.push({ section: "E20", element: "E20_11", val: null });
                eDisposition["eDisposition.13"] = null;
                eDisposition["HowPatientWasMovedtoAmbulance"] = null;
            }
        }
        else {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.12", Description: "How Patient Moved/Transport Type Conflict  " })
            v2Array.push({ section: "E20", element: "E20_11", val: null });
            eDisposition["eDisposition.13"] = null;
            eDisposition["HowPatientWasMovedtoAmbulance"] = null;
        }
    };

    //eDisposition.14////
    _val = getValue(_elementList, "eDisposition.14");
    if (_val == null) {
        eDisposition["eDisposition.14"] = null;
        eDisposition["PositionofPatientDuringTransport"] = null;
        v2Array.push({ section: "E20", element: "E20_12", val: null });
    }
    else {
        if (eDisposition.HasTransport == true) {
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];

            for (var i = 0; i < _val.length; i++) {
                if (_val[i].trim().length != 0) {
                    arr1.push(_val[i]);
                    arr2.push(setV2("eDisposition.14", _val[i]));
                    arr3.push(setCodeText("eDisposition.14", _val[i]));
                }

            };
            if (arr1.length > 0) {
                v2Array.push({ section: "E20", element: "E20_12", val: arr2.slice(0) });
                eDisposition["eDisposition.14"] = arr1.slice(0);
                eDisposition["PositionofPatientDuringTransport"] = arr3.slice(0);
            }
            else {
                v2Array.push({ section: "E20", element: "E20_12", val: null });
                eDisposition["eDisposition.14"] = null;
                eDisposition["PositionofPatientDuringTransport"] = null;
            }
        }
        else {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.14", Description: "Patient Position/Transport Type Conflict  " })
            v2Array.push({ section: "E20", element: "E20_12", val: null });
            eDisposition["eDisposition.14"] = null;
            eDisposition["PositionofPatientDuringTransport"] = null;
        }
    };

    //eDisposition.15////
    _val = getValue(_elementList, "eDisposition.15");
    if (_val == null) {
        eDisposition["eDisposition.15"] = null;
        eDisposition["HowPatientWasTransportedFromAmbulance"] = null;
        v2Array.push({ section: "E20", element: "E20_13", val: null });
    }
    else {
        if (eDisposition.HasTransport == true) {
            eDisposition["HowPatientWasTransportedFromAmbulance"] = _val[0];
            eDisposition["eDisposition.15"] = _val[0];
            v2Array.push({ section: "E20", element: "E20_13", val: setV2("eDisposition.15", _val[0]) });
        }
        else {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.15", Description: "Patient Transport From Ambulance/Transport Type Conflict  " })
            eDisposition["HowPatientWasTransportedFromAmbulance"] = null;
            eDisposition["eDisposition.15"] = null;
            v2Array.push({ section: "E20", element: "E20_13", val: null });
        }
    };

    //eDisposition.16////
    _val = getValue(_elementList, "eDisposition.16");
    if (_val == null) {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            eDisposition["eDisposition.16"] = v3NOT_RECORDED;
            eDisposition["EMSTransportMethod"] = v3NOT_RECORDED;
        }
        else {
            eDisposition["eDisposition.16"] = v3NOT_APPLICABLE;
            eDisposition["EMSTransportMethod"] = v3NOT_APPLICABLE;
        }
    }
    else {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            eDisposition["EMSTransportMethod"] = _val[0];
            eDisposition["eDisposition.16"] = _val[0];
        }
        else {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.16", Description: "Patient Transport Method/Transport Type Conflict  " })
            eDisposition["eDisposition.16"] = v3NOT_APPLICABLE;
            eDisposition["EMSTransportMethod"] = v3NOT_APPLICABLE;
        }
    };

    //eDisposition.17////
    _val = getValue(_elementList, "eDisposition.17");
    if (_val == null) {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            eDisposition["eDisposition.17"] = v3NOT_RECORDED;
            eDisposition["TransportModefromScene"] = v3NOT_RECORDED;
            v2Array.push({ section: "E20", element: "E20_14", val: v2NOT_RECORDED });
        }
        else {
            eDisposition["eDisposition.17"] = v3NOT_APPLICABLE;
            eDisposition["TransportModefromScene"] = v3NOT_APPLICABLE;
            v2Array.push({ section: "E20", element: "E20_14", val: v2NOT_APPLICABLE });
        }
    }
    else {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            eDisposition["TransportModefromScene"] = setCodeText("eDisposition.17", _val[0])
            v2Array.push({ section: "E20", element: "E20_14", val: setV2("eDisposition.17", _val[0]) });
            eDisposition["eDisposition.17"] = _val[0];
        }
        else {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.17", Description: "Additional Transport Mode/Transport Type Conflict  " })
            eDisposition["eDisposition.17"] = v3NOT_APPLICABLE;
            eDisposition["TransportModefromScene"] = v3NOT_APPLICABLE;
            v2Array.push({ section: "E20", element: "E20_14", val: v2NOT_APPLICABLE });
        }
    };

    //eDisposition.18////
    _val = getValue(_elementList, "eDisposition.18");
    if (_val == null) {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            eDisposition["eDisposition.17"] = v3NOT_RECORDED;
            eDisposition["AdditionalTransportModeDescriptors"] = v3NOT_RECORDED;
        }
        else {
            eDisposition["eDisposition.17"] = v3NOT_APPLICABLE;
            eDisposition["AdditionalTransportModeDescriptors"] = v3NOT_APPLICABLE;
        }
    }
    else {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {

            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _val.length; i++) {
                if (_val[i].trim().length != 0) {
                    arr1.push(_val[i]);
                    arr2.push(setCodeText("eDisposition.18", _val[i]));
                }
            };
            if (arr1.length > 0) {
                eDisposition["eDisposition.18"] = arr1.slice(0);
                eDisposition["AdditionalTransportModeDescriptors"] = arr2.slice(0);
            }
        }
        else {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.18", Description: "Additional Transport Method/Transport Type Conflict  " })
            eDisposition["eDisposition.18"] = v3NOT_APPLICABLE;
            eDisposition["AdditionalTransportModeDescriptors"] = v3NOT_APPLICABLE;
        }
    };

    //eDisposition.19////
    _val = getValue(_elementList, "eDisposition.19");
    if (_val == null) {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            v2Array.push({ section: "E20", element: "E20_15", val: v2NOT_RECORDED });
            eDisposition["eDisposition.19"] = v3NOT_RECORDED;
            eDisposition["ConditionofPatientatDestination"] = v3NOT_RECORDED;
        }
        else {
            v2Array.push({ section: "E20", element: "E20_15", val: v2NOT_APPLICABLE });
            eDisposition["eDisposition.19"] = v3NOT_APPLICABLE;
            eDisposition["ConditionofPatientatDestination"] = v3NOT_APPLICABLE;
        }
    }
    else {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            v2Array.push({ section: "E20", element: "E20_15", val: setV2("eDisposition.19", _val[0]) });
            eDisposition["eDisposition.19"] = _val[0];
            eDisposition["ConditionofPatientatDestination"] = (setCodeText("eDisposition.19", _val[0]));
        }
        else {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.19", Description: "Condition of Patientat Destination/Transport Type Conflict  " })
            v2Array.push({ section: "E20", element: "E20_15", val: v2NOT_APPLICABLE });
            eDisposition["eDisposition.19"] = v3NOT_APPLICABLE;
            eDisposition["ConditionofPatientatDestination"] = v3NOT_APPLICABLE;
        }
    };

    //eDisposition.20////
    _val = getValue(_elementList, "eDisposition.20");
    if (_val == null) {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            eDisposition["eDisposition.20"] = v3NOT_RECORDED;
            eDisposition["ReasonforChoosingDestination"] = v3NOT_RECORDED;
            v2Array.push({ section: "E20", element: "E20_16", val: v2NOT_RECORDED });
        }
        else {
            eDisposition["eDisposition.20"] = v3NOT_APPLICABLE
            eDisposition["ReasonforChoosingDestination"] = v3NOT_APPLICABLE;
            v2Array.push({ section: "E20", element: "E20_16", val: v2NOT_APPLICABLE });
        }
    }
    else {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {

            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _val.length; i++) {
                if (_val[i].trim().length != 0) {
                    arr1.push(_val[i]);
                    arr3.push(setV2("eDisposition.20", _val[i]));
                    arr3.push(setCodeText("eDisposition.20", _val[i]));
                }
            };
            if (arr1.length > 0) {
                v2Array.push({ section: "E20", element: "E20_16", val: arr2.slice(0) });
                eDisposition["eDisposition.20"] = arr1.slice(0);
                eDisposition["ReasonforChoosingDestination"] = arr3.slice(0);
            }
            else {
                v2Array.push({ section: "E20", element: "E20_16", val: null });
                eDisposition["eDisposition.20"] = null;
                eDisposition["ReasonforChoosingDestination"] = null;
            }
        }
        else {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.20", Description: "Reason for Choosing Destination/Transport Type Conflict  " })
            eDisposition["eDisposition.20"] = v3NOT_APPLICABLE
            eDisposition["ReasonforChoosingDestination"] = v3NOT_APPLICABLE;
            v2Array.push({ section: "E20", element: "E20_16", val: v2NOT_APPLICABLE });
        }
    };


    //eDisposition.21////
    _val = getValue(_elementList, "eDisposition.21");
    if (_val == null) {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {

            eDisposition["eDisposition.21"] = v3NOT_RECORDED;
            eDisposition["TypeofDestination"] = v3NOT_RECORDED;
            v2Array.push({ section: "E20", element: "E20_17", val: v2NOT_RECORDED });
        }
        else {
            eDisposition["eDisposition.21"] = v3NOT_APPLICABLE;
            eDisposition["TypeofDestination"] = v3NOT_APPLICABLE;
            v2Array.push({ section: "E20", element: "E20_17", val: v2NOT_APPLICABLE });
        }
    }
    else {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            eDisposition["eDisposition.21"] = _val[0];
            eDisposition["TypeofDestination"] = setCodeText("eDisposition.21", _val[0])
            v2Array.push({ section: "E20", element: "E20_17", val: setV2("eDisposition.21", _val[0]) });
        }
        else {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.21", Description: "Type of Destination/Transport Type Conflict  " })
            eDisposition["eDisposition.21"] = v3NOT_APPLICABLE;
            eDisposition["TypeofDestination"] = v3NOT_APPLICABLE;
            v2Array.push({ section: "E20", element: "E20_17", val: v2NOT_APPLICABLE });
        }
    };

    //eDisposition.22////
    _val = getValue(_elementList, "eDisposition.22");
    if (_val == null) {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            eDisposition["eDisposition.22"] = v3NOT_RECORDED;
            eDisposition["HospitalInPatientDestination"] = v3NOT_RECORDED;
        }
        else {
            eDisposition["eDisposition.22"] = v3NOT_APPLICABLE;
            eDisposition["HospitalInPatientDestination"] = v3NOT_APPLICABLE;
        }
    }
    else {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            eDisposition["eDisposition.22"] = _val[0];
            eDisposition["HospitalInPatientDestination"] = setCodeText("eDisposition.22", _val[0]);
        }
        else {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.22", Description: "Hospital In Patient Destination/Transport Type Conflict  " })
            eDisposition["eDisposition.22"] = v3NOT_APPLICABLE;
            eDisposition["HospitalInPatientDestination"] = v3NOT_APPLICABLE;
        }
    };

    //eDisposition.23////
    _val = getValue(_elementList, "eDisposition.23");
    if (_val == null) {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            eDisposition["eDisposition.23"] = v3NOT_RECORDED;
            eDisposition["HospitalDesignation"] = v3NOT_RECORDED;
        }
        else {
            eDisposition["eDisposition.23"] = v3NOT_APPLICABLE;
            eDisposition["HospitalDesignation"] = v3NOT_APPLICABLE;
        }
    }
    else {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            eDisposition["eDisposition.23"] = _val[0];
            eDisposition["HospitalDesignation"] = setCodeText("eDisposition.23", _val[0]);
        }
        else {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.23", Description: "Hospital Designation/Transport Type Conflict  " })
            eDisposition["eDisposition.23"] = v3NOT_APPLICABLE;
            eDisposition["HospitalDesignation"] = v3NOT_APPLICABLE;
        }
    };

    // If No Transport, not Hospital Pre Activation
    //eDisposition.24 Destination Team Pre-Arrival Alert or Activation and 
    //eDisposition.25 Date/Time of Destination Prearrival Alert or Activation are both recorded when either one is recorded.
    //and :eDisposition.24 != '4224001'

    
    if (eDisposition.HasTransport == false) //if have a transport, forgot the data, 
    {
        eDisposition["eDisposition.24"] = v3NOT_APPLICABLE;
        eDisposition["DestinationTeamPreArrivalAlertorActivation"] = v3NOT_APPLICABLE;
        eDisposition["eDisposition.25"] = null;
        eDisposition["DateTimeofDestinationPrearrivalAlertorActivation"] = null;
    }
    else {
        
        _sectionIndex = getSectionIndex(eDispositionObject, "eDisposition.HospitalTeamActivationGroup");
        var bActivation = false;
        for (var x = 0; x < _sectionIndex.length; x++) {
            //eDisposition.24////
            _val = getValue(eDispositionObject.sections[xx].attributes.sections[_sectionIndexi].attributes.elements, "eDisposition.24");
            if (_val == null) {

                HospitalTeamActivationGroup["eDisposition.24"] = v3NOT_RECORDED;
                HospitalTeamActivationGroup["DestinationTeamPreArrivalAlertorActivation"] = v3NOT_RECORDED;
            }
            else {
                HospitalTeamActivationGroup["eDisposition.24"] = _val[0];
                HospitalTeamActivationGroup["DestinationTeamPreArrivalAlertorActivation"] = setCodeText("eDisposition.24", _val[0]);;
                if (_val[0] == "4224001") {
                    bActivation = false;
                }
                else {
                    bActivation = true;
                }
            };

            //eDisposition.25////c
            _val = getValue(_elementList, "eDisposition.25");
            if (_val == null) {
                if (bActivation = true) {
                    HospitalTeamActivationGroup["eDisposition.25"] = v3NOT_RECORDED;
                    HospitalTeamActivationGroup["DateTimeofDestinationPrearrivalAlertorActivation"] = v3NOT_RECORDED;
                }
                else {
                    HospitalTeamActivationGroup["eDisposition.25"] = v3NOT_APPLICABLE;
                    HospitalTeamActivationGroup["DateTimeofDestinationPrearrivalAlertorActivation"] = v3NOT_APPLICABLE;
                }
            }
            else {
                HospitalTeamActivationGroup["eDisposition.25"] = _val[0];
                HospitalTeamActivationGroup["DateTimeofDestinationPrearrivalAlertorActivation"] = _val[0];
            }
            HospitalTeamActivationGroupArray.push(HospitalTeamActivationGroup);
    */

    
        eDisposition.HospitalTeamActivationGroup = HospitalTeamActivationGroupArray;
        eDisposition.Errors = ErrorList;
        return eDisposition;
   


    //eDisposition.26////
    _val = getValue(_elementList, "eDisposition.26");
    if (_val == null) {
        eDisposition["eDisposition.25"] = null;
        eDisposition["DispositionInstructionsProvided"] = null;
    }
    else {
        if (eDisposition.HasTransport == true) {
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _val.length; i++) {
                if (_val[i].trim().length != 0) {
                    arr1.push(_val[i]);
                    arr3.push(setCodeText("eDisposition.26", _val[i]));
                }
            };
            if (arr1.length > 0) {
                eDisposition["eDisposition.26"] = arr1.slice(0);
                eDisposition["DispositionInstructionsProvided"] = arr3.slice(0);
            }
            else {
                eDisposition["eDisposition.25"] = null;
                eDisposition["DispositionInstructionsProvided"] = null;
            }
        }
    }
    return eDisposition;

};
var seteAirwayGroup = function (NEMSISEMSObject) {
    //NEMSISEMSObject = complete NEMSIS Object from OLTP object
    //This function converts NEMSISEMSObject to both Version 2.2.1 and Version 3.3.4 NEMSIS Objects
    //Creates qualified JSON objects
    //Imposes localized business rules (within a given section/attribute)
    //If NEMSISObject does not contain this Section (isUndefined == true), function assigns appropriate
    //values to attribute/elements based upon State/Agency Configuration.
    var eAirway = new Object();
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


    for (var a = 0; a < eAirwayGroupCount.length; a++) {
        console.log(businessObject);
        var bAirwayPerformed = false;
        /////eAirway.01
        var eAirwayElements = NEMSISEMSObject.sections[a].attributes.elements
        _val = getValue(listElements, "eAirway.01");
        if (_val == null) {
            if (isRequiredStateElement("eAirway.01") == true) {
                AirwayGroup["IndicationsforInvasiveAirway"] = v3NOT_RECORDED;
                AirwayGroup["eAirway.01"] = v3NOT_RECORDED;
            }
        }
        else {
            bAirwayPerformed = true;
            AirwayGroup["eAirway.01"] = _val[0];
            AirwayGroup["IndicationsforInvasiveAirway"] = setCodeText("eAirway.01", _val[0]);

        };

        //////////////////////////////
        _sectionIndex = getSectionIndex(businessObject, "dAgency.AgencyServiceGroup");
        for (var x = 0; x < _sectionIndex.length; x++) {

            var groupObject = NEMSISEMSObject.sections[a].attributes.sections[_sectionIndex].elements
            var ConfirmationGroupArray = [];
            /////eAirway.02
            _val = getValue(groupObject, "eAirway.02");
            if (_val == null) {
                if (isRequiredStateElement("eAirway.02") == true) {
                    ConfirmationGroup["eAirway.02"] = v3NOT_RECORDED;
                    ConfirmationGroup["DateTimeAirwayDevicePlacementConfirmation"] = v3NOT_RECORDED;
                }
                else {
                    ConfirmationGroup["eAirway.02"] = v3NOT_REPORTING;
                    ConfirmationGroup["DateTimeAirwayDevicePlacementConfirmation"] = v3NOT_REPORTING;
                }
            }
            else {
                bAirwayPerformed = true;
                ConfirmationGroup["eAirway.02"] = _val[0];
                ConfirmationGroup["DateTimeAirwayDevicePlacementConfirmation"] = setCodeText("eAirway.02", _val[0]);
            };

            /////eAirway.03
            _val = getValue(groupObject, "eAirway.03");
            if (_val == null) {
                if (isRequiredStateElement("eAirway.03") == true) {
                    ConfirmationGroup["eAirway.03"] = v3NOT_RECORDED;
                    ConfirmationGroup["AirwayDeviceBeingConfirmed"] = v3NOT_RECORDED;
                }
                else {
                    ConfirmationGroup["eAirway.03"] = v3NOT_REPORTING;
                    ConfirmationGroup["AirwayDeviceBeingConfirmed"] = v3NOT_REPORTING;
                }
            }
            else {
                bAirwayPerformed = true;
                ConfirmationGroup["eAirway.03"] = _val[0];
                ConfirmationGroup["AirwayDeviceBeingConfirmed"] = setCodeText("eAirway.03", _val[0]);
            };

            /////eAirway.04
            _val = getValue(groupObject, "eAirway.04");
            if (_val == null) {
                if (isRequiredStateElement("eAirway.04") == true) {
                    ConfirmationGroup["eAirway.04"] = v3NOT_RECORDED;
                    ConfirmationGroup["AirwayDevicePlacementConfirmedMethod"] = v3NOT_RECORDED;
                }
                else {
                    ConfirmationGroup["eAirway.04"] = v3NOT_REPORTING;
                    ConfirmationGroup["AirwayDevicePlacementConfirmedMethod"] = v3NOT_REPORTING;
                }
            }
            else {
                arr1 = _val;
                arr2 = _val;
                for (var i = 0; i < _val.length; i++) {
                    arr1.push(_val[i]);
                    arr2.push(setCodeText("eAirway.04", _val[i]));
                }
                bAirwayPerformed = true;
                ConfirmationGroup["eAirway.04"] = arr1.slice(0);
                ConfirmationGroup["AirwayDevicePlacementConfirmedMethod"] = arr2.slice(0);
            };

            /////eAirway.05
            _val = getValue(groupObject, "eAirway.05");
            if (_val == null) {
                ConfirmationGroup["eAirway.04"] = null;
                ConfirmationGroup["TubeDepth"] = null;
            }
            else {
                bAirwayPerformed = true;
                ConfirmationGroup["eAirway.04"] = _val[0];
                ConfirmationGroup["TubeDepth"] = _val[0];
            };

            /////eAirway.06
            _val = getValue(groupObject, "eAirway.06");
            if (_val == null) {
                if (isRequiredStateElement("eAirway.06") == true) {
                    ConfirmationGroup["eAirway.06"] = v3NOT_RECORDED;
                    ConfirmationGroup["TypeofIndividualConfirmingAirwayDevicePlacement"] = v3NOT_RECORDED;
                }
                else {
                    ConfirmationGroup["eAirway.06"] = v3NOT_REPORTING;
                    ConfirmationGroup["TypeofIndividualConfirmingAirwayDevicePlacement"] = v3NOT_REPORTING;
                }
            }
            else {
                bAirwayPerformed = true;
                ConfirmationGroup["eAirway.06"] = _val[0];
                ConfirmationGroup["TypeofIndividualConfirmingAirwayDevicePlacement"] = _val[0];
            };

            /////eAirway.07
            _val = getValue(groupObject, "eAirway.07");
            if (_val == null) {
                if (isRequiredStateElement("eAirway.07") == true) {
                    ConfirmationGroup["eAirway.07"] = v3NOT_RECORDED;
                    ConfirmationGroup["CrewMemberID"] = v3NOT_RECORDED;
                }
                else {
                    ConfirmationGroup["eAirway.07"] = v3NOT_REPORTING;
                    ConfirmationGroup["CrewMemberID"] = v3NOT_REPORTING;
                }
            }
            else {
                bAirwayPerformed = true;
                ConfirmationGroup["eAirway.07"] = _val[0];
                ConfirmationGroup["CrewMemberID"] = setCodeText("eAirway.07", _val[0]);
            };

            /////eAirway.08
            _val = getValue(groupObject, "eAirway.08");
            if (_val == null) {
                if (isRequiredStateElement("eAirway.08") == true) {
                    ConfirmationGroup["eAirway.08"] = v3NOT_RECORDED;
                    ConfirmationGroup["AirwayComplicationsEncountered"] = v3NOT_RECORDED;
                }
                else {
                    ConfirmationGroup["eAirway.08"] = v3NOT_REPORTING;
                    ConfirmationGroup["AirwayComplicationsEncountered"] = v3NOT_REPORTING;
                }
            }
            else {
                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _val.length; i++) {
                    arr1.push(_val[i]);
                    arr2.push(setCodeText("eAirway.08", _val[i]));
                };
                bAirwayPerformed = true;
                ConfirmationGroup["eAirway.08"] = arr1.slice(0);
                ConfirmationGroup["AirwayComplicationsEncountered"] = arr2.slice(0);
            };

            /////eAirway.09
            _val = getValue(groupObject, "eAirway.09");
            if (_val == null) {
                if (isRequiredStateElement("eAirway.09") == true) {
                    ConfirmationGroup["eAirway.09"] = v3NOT_RECORDED;
                    ConfirmationGroup["SuspectedReasonsforFailedAirwayProcedure"] = v3NOT_RECORDED;
                }
                else {
                    ConfirmationGroup["eAirway.09"] = v3NOT_REPORTING;
                    ConfirmationGroup["SuspectedReasonsforFailedAirwayProcedure"] = v3NOT_REPORTING;
                }
            }
            else {
                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _val.length; i++) {
                    arr1.push(_val[i]);
                    arr2.push(setCodeText("eAirway.09", _val[i]));
                };
                bAirwayPerformed = true;
                ConfirmationGroup["eAirway.09"] = arr1.slice(0);
                ConfirmationGroup["SuspectedReasonsforFailedAirwayProcedure"] = arr2.slice(0);
            };
            ConfirmationGroupArray.push(ConfirmationGroup);
        };  //ConfirmationGroup Loop

        ///////////////////////////


        /////eAirway.10
        _val = getValue(eAirwayElements, "eAirway.10");
        if (_val == null) {
            AirwayGroup["eAirway.10"] = null;
            AirwayGroup["DateTimeDecisiontoManagethePatientwithanInvasiveAirway"] = null;
        }
        else {
            /*
            Date does not appear to be required
            if (eAirwayGroup["eAirway.01"] != null) {
                if (eAirwayGroup["eAirway.10"] <= _val[0]) {
                    ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eAirway.11", Description: "Validation Error: eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Date/Time Decision to Manage the Patient with an Invasive Airway, " })
                }
            };
            */
            bAirwayPerformed = true;
            AirwayGroup["eAirway.10"] = _val[0];
            AirwayGroup["DateTimeDecisiontoManagethePatientwithanInvasiveAirway"] = _val;

        };

        /////eAirway.11
        // eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: 
        // Date/Time Decision to Manage the Patient with an Invasive Airway, 

        _val = getValue(eAirwayElements, "eAirway.11");
        if (_val == null) {
            AirwayGroup["eAirway.11"] = null;
            AirwayGroup["DateTimeInvasiveAirwayPlacementAttemptsAbandoned"] = null;
        }
        else {
            if (eAirwayGroup["eAirway.01"] != null) {
                if (eAirwayGroup["eAirway.10"] <= _val[0]) {
                    ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eAirway.11", Description: "Validation Error: eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Date/Time Decision to Manage the Patient with an Invasive Airway, " })
                }
            };
            bAirwayPerformed = true;
            AirwayGroup["eAirway.11"] = _val[0];
            AirwayGroup["DateTimeInvasiveAirwayPlacementAttemptsAbandoned"] = _val[0];
        };

        if (bAirwayPerformed == true) {
            AirwayGroup.push(ConfirmationGroup);
            AirwayGroupArray.push(AirwayGroup);

        }
    };  //AirwayGroup Loop


    if (bAirwayPerformed == false) {
        eAirway = setNotApplicableAll()
    }
    else {
        eAirway.push(AirwayGroupArray);
    };
    return eAirway;

};
var seteArrest = function (businessObject) {
    var isApplicable = false;  //once I have real data, set to TRUE
    //Value Rules
    //////////////////////////////////////////////
    if (getValue(businessObject.elements, "eArrest.05") == null) {
        if (getValue(businessObject.elements, "eArrest.06") == null) {
            ErrorList.push("CPR Care Provider Required when Provider type indicated");
        }
    }

    if (getValue(businessObject.elements, "eArrest.08") == null) {
        ErrorList.push("AED used Care Provider Required when AED use indicated");
    }

    //////////////////////////////////////////////

    /////////////eArrest.01
    var bArrest = false;
    _val = getValue(businessObject.elements, "eArrest.01");
    if (_val == null)
    {    
        eArrest["isCardiacArrest"] = false;;  //set Values to Not Applicable
        eArrest["eArrest.01"] = V3NOT_RECORDED
        eArrest["CardiacArrest"] = "NOT RECORDED";
        v2Array.push({ section: "E11", element: "E11_01", val: v2NOT_RECORDED });
    }
    else
    {
        isApplicable= true;  //We have an eArrest 
        if(_val[0] != "3001001")
        {
            eArrest["isCardiacArrest"] = true;           
        }
        else
        {  
            eArrest["isCardiacArrest"] = false;
        };
        eArrest["eArrest.01"] = _val[0];
        eArrest["CardiacArrest"] = setCodeText("eArrest.01", _val);
        v2Array.push({ section: "E11", element: "E11_01", val: setV2("eArrest.01", _val) });
    };


    //When eArrest.01 Cardiac Arrest is "Yes...", other elements in the eArrest section are recorded, 
    //When eArrest.01 Cardiac Arrest is not "Yes...", other elements in the eArrest section are not recorded

    /////////////eArrest.02
    _val = getValue(businessObject.elements, "eArrest.02");    
        
    if(isApplicable==true)  //If there is no incident, all set to NOT_APPLICABLE
    {
        if(eArrest["isCardiacArrest"] == true)  //Yes value for eArrest.01
        {
            if (_val == null) 
            {
                eArrest["eArrest.01"] = V3NOT_RECORDED
                eArrest["CardiacArrest"] = "NOT RECORDED";   
                v2Array.push({ section: "E11", element: "E11_02", val: v2NOT_RECORDED });
            }
            else
            {
                eArrest["eArrest.02"] = _val[0];
                eArrest["CardiacArrestEtiology"] = setCodeText("eArrest.02", _val[0]);
                v2Array.push({ section: "E11", element: "E11_02", val: setV2("eArrest.02", _val) });
            }
        }                    
    }
    else 
    {
        eArrest["eArrest.02"] = NIL_V3NOT_APPLICABLE;
        eArrest["CardiacArrestEtiology"] = V3NOT_APPLICABLE;;
        v2Array.push({ section: "E11", element: "E11_02", val: v2NOT_APPLICABLE });
    };



    /////////////eArrest.03
    //Resuscitation Attempted By EMS does not contain "Attempted/Initiated..." and "Not Attempted..." in the same record
    
    eArrest["wasbResuscitationAttempted"] = false;
    _val = getValue(businessObject.elements, "eArrest.03");
    if (eArrest["isCardiacArrest"] == true)  //Yes value for eArrest.01
        {
            if (_val == null) 
            {
                eArrest["eArrest.03"] = V3NOT_RECORDED;
                eArrest["ResuscitationAttemptedByEMS"] = V3NOT_RECORDED;
                v2Array.push({ section: "E11", element: "E11_02", val: v2NOT_RECORDED });
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
                    if(arrAttempt.indexOf(_val[i]) != -1)
                    {
                        eArrest["wasbResuscitationAttempted"] = true;
                    };
                    arr1.push(_val[i]);
                    arr2.push(setV2("eArrest.03", _val[i]));
                    arr3.push(setCodeText("eArrest.03", _val[i]));            
                };

                //Check for an Attempt with list of No Attempts
                var arrNotAttempt = ["3003007", "3003009", "3003011"]; 
                if(eArrest["wasbResuscitationAttempted"] == true)
                {
                    for (var i = 0; i < arr1.length; i++) 
                    {
                        if(arrNotAttempt.indexOf(arr1[i]) != -1)
                        {
                            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eArrest.03", Description: "Conflicting values:  Attempted/Not Attempted" })
                        }
                    }
                }                  
                
                eArrest["eArrest.03"] = arr1.slice(0);
                eArrest["ResuscitationAttemptedByEMS"] = arr3.slice(0);
                v2Array.push({ section: "E11", element: "E11_03", val:arr3.slice(0) });      
                var eArrest03Values = ["3003007", "3003009", "3003011"]
            }        
        }
        else
        {
            eArrest["eArrest.03"] = NIL_V3NOT_APPLICABLE;
            eArrest["ResuscitationAttemptedByEMS"] = V3NOT_APPLICABLE;;
            v2Array.push({ section: "E11", element: "E11_03", val:v2NOT_APPLICABLE });     
        };

        /////////////eArrest.04
    var bArrestWitnessedBy = false;
    _val = getValue(businessObject.elements, "eArrest.04");
    if (eArrest["isCardiacArrest"] == true)  //Yes value for eArrest.01
        {
            if (_val == null) 
            {
                eArrest["eArrest.04"] = V3NOT_RECORDED;
                eArrest["ArrestWitnessedBy"] = V3NOT_RECORDED;
                v2Array.push({ section: "E11", element: "E11_04", val: v2NOT_RECORDED });        
            }
            else
            {                
                var arr1 = [];
                var arr2 = [];
                var arr3 = [];        
                for (var i = 0; i < _val.length; i++) 
                {
                    arr1.push(_val[i]);
                    arr2.push(setV2("eArrest.04", _val[i]));
                    arr3.push(setCodeText("eArrest.04", _val[i]));            
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

    };
    /////////////eArrest.05
    eArrest["wasCPRProvide"]=false; //can only be True when isArrest is True
    _val = getValue(businessObject.elements, "eArrest.05");    
    if (eArrest["isCardiacArrest"] == true)  //Yes value for eArrest.01
    {
        if (_val == null) 
        {
            eArrest["eArrest.05"] = V3NOT_RECORDED;
            eArrest["CPRCareProvidedPriortoEMSArrival"] = V3NOT_RECORDED;
        }
        else 
        {
            if(_val[0]=="9923003")
            {
                eArrest["wasCPRProvide"]=true;
            }
            eArrest["eArrest.05"] = _val[0];
            eArrest["CPRCareProvidedPriortoEMSArrival"]  = _val[0];
        }   
    }    
    else
    {
        eArrest["eArrest.05"] = V3NOT_APPLICABLE;
        eArrest["CPRCareProvidedPriortoEMSArrival"] = V3NOT_APPLICABLE;
    };

    /////////////eArrest.06
    _val = getValue(businessObject.elements, "eArrest.06");
    if (eArrest["wasCPRProvide"] == true)  //Yes value for eArrest.01
    {
        if (_val == null) {
            eArrest["eArrest.06"] = null;
            eArrest["WhoProvidedCPRPriortoEMSArrival"] = null;                
        }
        else
        {             
            var arr1 = [];       
            var arr3 = [];        
            for (var i = 0; i < _val.length; i++) 
            {
                arr1.push(_val[i]);            
                arr3.push(setCodeText("eArrest.06", _val[i]));            
            };
            dAgency["eArrest.06"] = arr1.slice(0);
            eArrest["WhoProvidedCPRPriortoEMSArrival"] =arr3.slice(0)    
        }
    }   
    else// Else included as rule documentation,... and I may have use for it later
    { 
        eArrest["eArrest.06"] = null;
        eArrest["WhoProvidedCPRPriortoEMSArrival"] = null;                
    };


    /////////////eArrest.07
    eArrest["wasAEDProvided"] = false;
    _val = getValue(businessObject.elements, "eArrest.07");        
    if (eArrest["isCardiacArrest"] )  //If there is no incident, all set to NOT_APPLICABLE
    {
        if (_val == null) 
        {
            eArrest["eArrest.07"] = V3NOT_RECORDED;
            eArrest["WhoProvidedCPRPriortoEMSArrival"] = V3NOT_RECORDED;
        }
        else
        {    
            if(_val[0] != "3007001")
            {
                eArrest["wasAEDProvided"] = true;
            };
            eArrest["eArrest.07"] = _val[0];
            eArrest["WhoProvidedCPRPriortoEMSArrival"] = setCodeText("eArrest.07", _val[0]);
        }
    }
    else 
    {
        //set to NOT APPLICABLE
        eArrest["eArrest.07"] = V3NOT_APPLICABLE;
        eArrest["WhoProvidedCPRPriortoEMSArrival"] = V3NOT_APPLICABLE;
    };

    /////////////eArrest.08
    _val = getValue(businessObject.elements, "eArrest.08");
        
    if (eArrest["isCardiacArrest"] )  //If there is no incident, all set to NOT_APPLICABLE
    {
        if (eArrest["wasAEDProvided"] == true)  //
        {
            if (_val == null) 
            {
                eArrest["eArrest.08"] = null;
                eArrest["WhoUsedAEDPriortoEMSArrival"] = null;
            }
            else
            {
                eArrest["eArrest.08"] = _val[0];
                eArrest["WhoUsedAEDPriortoEMSArrival"] = setCodeText("eArrest.08", _val[0]);
            }
        }
    }
    else
    {   
        eArrest["eArrest.08"] = null;
        eArrest["WhoUsedAEDPriortoEMSArrival"] = null;
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
    _val = getValue(businessObject.elements, "eArrest.09");
    if (eArrest["isCardiacArrest"] == true)  //If there is no incident, all set to NOT_APPLICABLE
    {
        if (eArrest["wasCPRProvide"]==true)  //Yes value for eArrest.01
        {
            if (_val == null) 
            {
                eArrest["eArrest.09"] = null;
                eArrest["TypeofCPRProvided"] = null;
            }
            else
            {        
        
                var arr1 = [];
                var arr3 = [];
                for (var i = 0; i < _val.length; i++)
                {
                    arr1.push(_val[i]);
                    arr3.push(setCodeText("eArrest.09", _val[i]));
                };

                bError = false;
                //Check for Compression 3003005, if eArrest.03 values = Compression
                arrCompression = ["3009001", "3009003", "3009005", "3009007", "3009009", "3009011"]; //Compression values
                if(eArrest["eArrest.03"] = "3003005") //Compression
                {
                    if(arrCompression.indexOf(_val[i]) != -1)
                    {
                        bError=true;
                        ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eArrest.09", Description: "Validation Error:Conflicting values.  Resuscitation Attempted By EMS should contain "/"Initiated Chest Compressions"/"" })
                    }
                };

                //Check for Compression 3003005, if eArrest.03 values = Ventilation
                arrVent = ["3009013", "3009015", "3009017", "3009019"]; //Ventilation values
                if(eArrest["eArrest.03"] = "3003003") //Ventilation
                {
                    if(arrVent.indexOf(_val[i]) != -1)
                    {
                        bError=true;
                        ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eArrest.09", Description: "Validation Error:Conflicting values.  Resuscitation Attempted By EMS should contain "/"Attempted Ventilation"/"" })
                    }
                };

                //Check for VENTILATION 3003005, if eArrest.03 values = Compression
                arrCompression = ["3009001", "3009003", "3009005", "3009007", "3009009", "3009011"]; //Compression values
                if(eArrest["eArrest.03"] = "3003005") //Compression
                {
                    if(arrNotAttempt.indexOf(_val[i]) != -1)
                    {
                        ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eArrest.09", Description: "Validation Error:Conflicting values.  Resuscitation Attempted By EMS should contain "/"Initiated Chest Compressions"/"" })
                    }
                }
                if(bError == true)
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
    };

    /////////////eArrest.10
    _val = getValue(businessObject.elements, "eArrest.10");
    if (eArrest["isCardiacArrest"] == true)  //If there is no incident, all set to NOT_APPLICABLE
    {
        if (_val == null)
        {
            if (isRequiredStateElement("eArrest.10") == true) 
            {
                eArrest["eArrest.10"] = V3NOT_RECORDED;
                eArrest["TherapeuticHypothermiaInitiated"] = V3NOT_RECORDED;
            }
            else 
            {
                eArrest["eArrest.10"] = null;            
                eArrest["TherapeuticHypothermiaInitiated"] = null;
            }
        }
        else
        {
            eArrest["eArrest.10"] = _val[0];
            eArrest["TherapeuticHypothermiaInitiated"] = setCodeText("eArrest.10", _val[0]);
        }
    }
    else        
    {
        eArrest["eArrest.10"] = v3NOT_APPLICABLE;
        eArrest["TherapeuticHypothermiaInitiated"] = v3NOT_APPLICABLE;          
    };


    /////////////eArrest.11
    _val = getValue(businessObject.elements, "eArrest.11");
    if (eArrest["isCardiacArrest"] == true)  //If there is no incident, all set to NOT_APPLICABLE
        if (_val == null)
        {
            eArrest["eArrest.11"] = V3NOT_RECORDED;
            eArrest["FirstMonitoredArrestRhythmofthePatient"] = "NOT RECORDED";
            v2Array.push({ section: "E11", element: "E11_05", val: v2NOT_RECORDED });
        }
        else
        {        
            eArrest["eArrest.11"] = _val[0];
            eArrest["FirstMonitoredArrestRhythmofthePatient"] = setCodeText("eArrest.11", _val[0]);
            v2Array.push({ section: "E11", element: "E11_05", val: _val[0] });
        }
    else
    {
        eArrest["eArrest.11"] = v3NOT_APPLICABLE;
        eArrest["FirstMonitoredArrestRhythmofthePatient"] = v3NOT_APPLICABLE;
        v2Array.push({ section: "E11", element: "E11_05", val: v2NOT_APPLICABLE });
    };


    /////////////eArrest.12
    _val = getValue(businessObject.elements, "eArrest.12");
    if (eArrest["isCardiacArrest"] == true)  //If there is no incident, all set to NOT_APPLICABLE
    {
        if (_val == null)
        {
            if (isRequiredStateElement("eArrest.12") == true)
            {
                eArrest["eArrest.12"] = V3NOT_RECORDED;
                eArrest["AnyReturnofSpontaneousCirculation"] = V3NOT_RECORDED;
                v2Array.push({ section: "E11", element: "E11_06", val: v2NOT_RECORDED });            
            }                
        }
        else
        {    
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];        
            for (var i = 0; i < _val.length; i++) 
            {            
                arr1.push(_val[i]);
                arr2.push(setV2("eArrest.12", _val[i]));
                arr2.push(setCodeText("eArrest.12", _val[i]))
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
    };



    /////////////eArrest.13
    _val = getValue(businessObject.elements, "eArrest.13");
    if (_val == null)
    {
        eArrest["eArrest.13"] = null;
        eArrest["NeurologicalOutcomeatHospitalDischarge"] = null;
    }
    else 
    {
        isNotApplicableFlag= true;
        eArrest["eArrest.13"] = _val[0];
        eArrest["NeurologicalOutcomeatHospitalDischarge"] = setCodeText("eArrest.13", _val[0]);
    };

    /////////////eArrest.14
    _val = getValue(businessObject.elements, "eArrest.14");
    if (eArrest["isCardiacArrest"] == true)  //If there is no incident, all set to NOT_APPLICABLE
    {
        if (_val == null)
        {
            if (isRequiredStateElement("eArrest.14") == true)
            {
                eArrest["eArrest.14"] = v3NOT_RECORDED;
                eArrest["DateTimeofCardiacArrest"] = v3NOT_RECORDED;
                v2Array.push({ section: "E11", element: "E11_08", val: v2NOT_RECORDED });
            }
            else
            {  
                eArrest["eArrest.14"] = null;
                eArrest["DateTimeofCardiacArrest"] = null;
                v2Array.push({ section: "E11", element: "E11_08", val: null });
            }
        }
        else
        {
            eArrest["eArrest.14"] = _val[0];
            eArrest["DateTimeofCardiacArrest"] = _val[0];
            v2Array.push({ section: "E11", element: "E11_08", val: _val[0] });
        }
    }
    else
    {        
        eArrest["eArrest.14"] = v3NOT_APPLICABLE;
        eArrest["DateTimeofCardiacArrest"] = v3NOT_APPLICABLE;
        v2Array.push({ section: "E11", element: "E11_08", val: v2NOT_APPLICABLE });
    };

    /////////////eArrest.15
    

    _val = getValue(businessObject.elements, "eArrest.15");
    if (eArrest["wasbResuscitationAttempted"] == true)
    {
        if (_val == null)
        {        
            if (isRequiredStateElement("eArrest.15") == true) 
            {           
                eArrest["eArrest.15"] = v3NOT_RECORDED;
                eArrest["DateTimeResuscitationDiscontinued"] = v3NOT_RECORDED;
                v2Array.push({ section: "E11", element: "E11_09", val: v2NOT_RECORDED });
            }
            else
            {
                eArrest["eArrest.15"] = v3NOT_REPORTING;
                eArrest["DateTimeResuscitationDiscontinued"] = v3NOT_REPORTING;
                v2Array.push({ section: "E11", element: "E11_09", val: v2NOT_REPORTING });            
            }          
        }
        else
        {
            eArrest["eArrest.15"] = _val[0];
            eArrest["DateTimeResuscitationDiscontinued"] = _val[0];
            v2Array.push({ section: "E11", element: "E11_08", val: _val[0] });
        }
    }
    else
    {        
        eArrest["eArrest.15"] = v3NOT_APPLICABLE;
        eArrest["DateTimeResuscitationDiscontinued"] = v3NOT_APPLICABLE;
        v2Array.push({ section: "E11", element: "E11_09", val: v2NOT_APPLICABLE });   
    };



    /////////////eArrest.16
    _val = getValue(businessObject.elements, "eArrest.16");
    if(eArrest.wasCPRProvide ==true)
    {
        if (_val == null)
        {
            if (isRequiredStateElement("eArrest.15") == true)
            {
                eArrest["eArrest.16"] = v3NOT_RECORDED;
                eArrest["ReasonCPRResuscitationDiscontinued"] = v3NOT_RECORDED;
                v2Array.push({ section: "E11", element: "E11_10", val: v2NOT_RECORDED });
            }
            else 
            {            
                eArrest["eArrest.16"] = v3NOT_REPORTING;
                eArrest["ReasonCPRResuscitationDiscontinued"] = v3NOT_REPORTING;
                v2Array.push({ section: "E11", element: "E11_10", val: v2NOT_REPORTING });
            }
        }    
        else
        {
            eArrest["eArrest.16"] = _val[0];
            eArrest["ReasonCPRResuscitationDiscontinued"] =  setCodeText("eArrest.16", _val[0]);
            v2Array.push({ section: "E11", element: "E11_10", val: setV2("eArrest.16", _val)});
        }
    }
    else
    {
        eArrest["eArrest.16"] = v3NOT_APPLICABLE;
        eArrest["ReasonCPRResuscitationDiscontinued"] = v3NOT_APPLICABLE;
        v2Array.push({ section: "E11", element: "E11_10", val: v2NOT_APPLICABLE });

    };


        /////////////eArrest.17
    _val = getValue(businessObject.elements, "eArrest.17");
    if (eArrest["isCardiacArrest"] == true)  //If there is no incident, all set to NOT_APPLICABLE
    {
        if (_val == null) {
            dAgency["eArrest.17"] = V3NOT_RECORDED;
            dAgency["CardiacRhythmonArrivalatDestination"] = V3NOT_RECORDED;
            v2Array.push({ section: "E11", element: "E11_11", val: V2NOT_RECORDED });
        }
        else {

            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _val.length; i++) {
                arr1.push(_val[i]);
                arr2.push(setV2("eArrest.17", _val[i]));
                arr3.push(setCodeText("eArrest.17", _val[i]));
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
    };
      


    /////////////eArrest.18
    _val = getValue(businessObject.elements, "eArrest.18");
    if (eArrest["isCardiacArrest"] == true)  //If there is no incident, all set to NOT_APPLICABLE
    {
        if (_val == null) {
            eArrest["eArrest.18"] = V3NOT_RECORDED;
            eArrest["EndofEMSCardiacArrestEvent"] = V3NOT_RECORDED;
        }
        else {
            eArrest["eArrest.18"] = _val[0];
            eArrest["EndofEMSCardiacArrestEvent"] = setCodeText("eArrest.17", _val[0]);
        }
    }
    else
    {
        eArrest["eArrest.18"] = v3NOT_APPLICABLE;
        eArrest["EndofEMSCardiacArrestEvent"] = v3NOT_APPLICABLE;
    }
};
var seteTimes = function (businessObject) {

   //eTimes.01//////////////////      
    _val = getValue(businessObject.elements, "eTimes.01");        
    eTimes["is911Call"] = false;  //determines if call is 911 or otherwise (external call)
    if (eDispatch["isEmergent"] == true) 
    {
        if (_val == null) 
        {

            if (isRequiredStateElement("eTimes.01")) 
            {
                eTimes["dTimes.01"] = v3NOT_RECORDED;
                eTimes["PSAPCallDateTime"] = v3NOT_RECORDED;
                v2Array.push({ section: "E05", element: "E05_02", val: null });
            }
            else 
            {
                eTimes["dTimes.01"] = null;
                eTimes["PSAPCallDateTime"] = null;
                v2Array.push({ section: "E05", element: "E05_02", val: null });
            }
        }
        else 
        {
            eTimes["is911Call"] = true;
            eTimes["PSAPCallDateTime"] = _val[0];
            eTimes["dTimes.01"] = _val[0];
            v2Array.push({ section: "E05", element: "E05_02", val: _val[0] });
        }
    }
    else
    {
        eTimes["dTimes.01"] = v3NOT_APPLICABLE;
        eTimes["PSAPCallDateTime"] = v3NOT_APPLICABLE;
        v2Array.push({ section: "E05", element: "E05_02", val: null });
    };

    //eTimes.02//////////////////
    _val = getValue(businessObject.elements, "dTimes.02");
    if (_val == null)
    {
        eTimes["dTimes.02"] = null
        eTimes["DispatchNotifiedDateTime"] = null;
        v2Array.push({ section: "E05", element: "E05_03", val: null });      
    }
    else
    {
        if (eTimes["is911Call"] == true) 
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eTimes.02", Description: "911 Call Date entered for non-emergent call " })
        };
        eTimes["DispatchNotifiedDateTime"] = _val[0];
        v2Array.push({ section: "E05", element: "E05_03", val: _val[0] });
        eTimes["dTimes.02"] = _val[0];
    };

    //eTimes.03//////////////////
    _val = getValue(businessObject.elements, "dTimes.03");
    if (_val == null)
    {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dTimes.03", Description: "Unit Notified by Dispatch Date/Time Mandatory value. " })
        eTimes["dTimes.03"] = null;
        eTimes["UnitNotifiedbyDispatchDateTime"] = null;
        v2Array.push({ section: "E05", element: "E05_04", val: null });
    }
    else 
    {
        // Time Rules:
        //eAirway.10: Date/Time Decision to Manage the Patient with an Invasive Airway should not occur prior 
        //to: Unit Notified by Dispatch Date/Time

        if (eAirwayGroup["eAirway.10"] != null) 
        {
            if (eAirwayGroup["eAirway.10"] >= _val[0]) 
            {
                ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "dTimes.03", Description: "Validation Error: eAirway.10 Date/Time Decision to Manage the Patient with an Invasive Airway should not occur prior to: Unit Notified by Dispatch Date/Time" })
            }
        };

        if (eAirwayGroup["eAirway.11"] != null) 
        {
            if (eAirwayGroup["eAirway.11"] >= _val[0]) 
            {
                ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "dTimes.03", Description: "Validation Error: eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Date/Time Decision to Manage the Patient with an Invasive Airway, Unit Notified by Dispatch Date/Time" })
            }
        };
        v2Array.push({ section: "E05", element: "E05_04", val: _val[0] });
        eTimes["dTimes.03"] = _val[0];
        eTimes["UnitNotifiedbyDispatchDateTime"] = _val[0];
    };

    //eTimes.04//////////////////
    _val = getValue(businessObject.elements, "dTimes.04");
    if (_val == null) 
    {
        eTimes["dTimes.03"] = null;
        eTimes["DispatchAcknowledgedDateTime"] = null;
    }
    else 
    {
        if (_val[0] > eTimes["dTimes.03"]) 
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "dTimes.04", Description: "Validation Error: eAirway.11: eTimes.03:  Dispatch Acknowledged prior to notification." })
        };
        
        if (eAirwayGroup["eAirway.11"] >= _val[0]) 
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "dTimes.04", Description: "Validation Error: eAirway.11: eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Dispatch Acknowledged Date/Time" })
        }
    eTimes["dTimes.04"] = _val[0];
    eTimes["DispatchAcknowledgedDateTime"] = _val[0];
    };

    //eTimes.05//////////////////
    _val = getValue(businessObject.elements, "eTimes.05");
    if(eDisposition["isCancelled"] ==false)
    {
        if (_val == null)
        {
            if (isRequiredStateElement("eTimes.05")) {
                v2Array.push({ section: "E05", element: "E05_05", val: null });
                eTimes["dTimes.05"] = v3NOT_RECORDED;
                eTimes["UnitEnRouteDateTime"] = v3NOT_RECORDED;
            }
            else
            {
                v2Array.push({ section: "E05", element: "E05_05", val: null });
                eTimes["dTimes.05"] = null;
                eTimes["UnitEnRouteDateTime"] = null;
            }
        }
        else
        {
            eTimes["dTimes.05"] = _val[0];
            eTimes["UnitEnRouteDateTime"] = _val[0];
            v2Array.push({ section: "E05", element: "E05_05", val: _val });
        }
    }
    else
    {
        v2Array.push({ section: "E05", element: "E05_05", val: null });
        eTimes["dTimes.05"] = v3NOT_APPLICABLE;
        eTimes["UnitEnRouteDateTime"] = v3NOT_APPLICABLE;
          
    };


    //eTimes.06//////////////////        
    _val = getValue(businessObject.elements, "eTimes.06");
    if(eDisposition["isCancelled"] ==false)
    {
        if (_val == null)
        {
            if (isRequiredStateElement("eTimes.06"))
            {
                v2Array.push({ section: "E05", element: "E05_06", val: null });
                eTimes["dTimes.06"] = v3NOT_RECORDED;
                eTimes["UnitArrivedonSceneDateTime"] = v3NOT_RECORDED;
            }
            else
            {
                v2Array.push({ section: "E05", element: "E05_06", val: null });
                eTimes["dTimes.06"] = null;
                eTimes["UnitArrivedonSceneDateTime"] = null;
            }
        }
        else
        {
            v2Array.push({ section: "E05", element: "E05_06", val: _val[0] });
            eTimes["dTimes.06"] = _val[0];
            eTimes["UnitArrivedonSceneDateTime"] = _val[0];
        }
    }
    else
    {
        v2Array.push({ section: "E05", element: "E05_06", val: null });
        eTimes["dTimes.06"] = v3NOT_APPLICABLE;
        eTimes["UnitArrivedonSceneDateTime"] = v3NOT_APPLICABLE;
    };



    //eTimes.07//////////////////
    //eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Date/Time 
    //Arrived at Patient Date/Time.         
    _val = getValue(businessObject.elements, "eTimes.07");
    if(eDisposition["isCancelled"] ==false)
    {
        if (_val == null)
        {
            if (isRequiredStateElement("eTimes.07"))
            {
                v2Array.push({ section: "E05", element: "E05_07", val: null });
                eTimes["dTimes.07"] = v3NOT_RECORDED;
                eTimes["ArrivedatPatientDateTime"] = v3NOT_RECORDED;
            }
            else
            {
                v2Array.push({ section: "E05", element: "E05_07", val: null });
                eTimes["dTimes.07"] = null;
                eTimes["ArrivedatPatientDateTime"] = null;
            }
        }
        else
        {
            if (eAirwayGroup["eAirway.11"] != null)
            {
                if (eAirwayGroup["eAirway.11"] >= _val[0])
                {
                    ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "dTimes.07", Description: "Validation Error: eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Date/Time Arrived at Patient Date/Time." })
                }
            };
            v2Array.push({ section: "E05", element: "E05_07", val: _val[0] });
            eTimes["ArrivedatPatientDateTime"] = _val[0];
            eTimes["dTimes.07"] = _val[0];
        }
    }
    else
    {
        v2Array.push({ section: "E05", element: "E05_07", val: null });
        eTimes["dTimes.07"] = v3NOT_APPLICABLE;
        eTimes["ArrivedatPatientDateTime"] = v3NOT_APPLICABLE;
    };

    //eTimes.08//////////////////
        
    _val = getValue(businessObject.elements, "eTimes.08");
    if((eDisposition["isCancelled"] ==false && (eDisposition["eDisposition.12"]) == "4212031"))
    {
        if (_val == null) 
        {
            if (isRequiredStateElement("eTimes.08")) 
            {
                v2Array.push({ section: "E05", element: "E05_08", val: v2NOT_RECORDED });
                eTimes["dTimes.08"] = v3NOT_RECORDED;
                eTimes["TransferofEMSPatientCareDateTime"] = v3NOT_RECORDED;
            }
            else 
            {
                v2Array.push({ section: "E05", element: "E05_08", val: v2NOT_REPORTING });
                eTimes["dTimes.08"] = v3NOT_REPORTING;
                eTimes["TransferofEMSPatientCareDateTime"] = v3NOT_REPORTING;
            }
        }
        else 
        {
            v2Array.push({ section: "E05", element: "E05_08", val: _val });
            eTimes["TransferofEMSPatientCareDateTime"] = _val[0];
            eTimes["dTimes.08"] = _val[0];
        }
    }
    else
    {
        v2Array.push({ section: "E05", element: "E05_08", val: null});
        eTimes["dTimes.08"] = v3NOT_APPLICABLE;
        eTimes["TransferofEMSPatientCareDateTime"] = v3NOT_APPLICABLE;
    };


    //eTimes.09//////////////////
    _val = getValue(businessObject.elements, "eTimes.09");
    if((eDisposition["isCancelled"] ==false && (eDisposition.HasPatient) == true))
    {
        if (_val == null) 
        {
            if (isRequiredStateElement("eTimes.09")) {
                v2Array.push({ section: "E05", element: "E05_09", val: v2NOT_RECORDED });
                eTimes["dTimes.09"] = v3NOT_RECORDED;
                eTimes["UnitLeftSceneDateTime"] = v3NOT_RECORDED;
            }
            else
            {
                v2Array.push({ section: "E05", element: "E05_09", val: null });
                eTimes["dTimes.09"] = null;
                eTimes["UnitLeftSceneDateTime"] = null;
            }
        }
        else
        {
            v2Array.push({ section: "E05", element: "E05_09", val: _val[0] });
            eTimes["dTimes.09"] = _val[0];
            eTimes["UnitLeftSceneDateTime"] = _val[0];
        }
    }
    else
    {
        v2Array.push({ section: "E05", element: "E05_09", val: null });
        eTimes["dTimes.09"] = v3NOT_APPLICABLE;
        eTimes["UnitLeftSceneDateTime"] = v3NOT_APPLICABLE;
    };

    //eTimes.10//////////////////
    _val = getValue(businessObject.elements, "dTimes.10");
    if ((eDisposition["isCancelled"] == false && eDisposition["eDisposition.16"] <="4216003")) 
    {
        if (_val == null)
        {
            eTimes["dTimes.10"] = null;
            eTimes["ArrivalatDestinationLandingAreaDateTime"] = null;
        }
        else
        {
            eTimes["ArrivalatDestinationLandingAreaDateTime"] = _val[0];
            eTimes["dTimes.10"] = _val[0];
        }
    }
    else
    {
        ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "dTimes.04", Description: "Validation Error: eTimes.10/eDisposition.16." })
    };

    //eTimes.11//////////////////
    console.log("Business Rule not Applicable")
    _val = getValue(businessObject.elements, "eTimes.11");
    if(eDispostion.HasPatient == true)
    {
        if (_val == null)
        {
            if (isRequiredStateElement("eTimes.11")) {
                v2Array.push({ section: "E05", element: "E05_10", val: v2NOT_RECORDED });
                eTimes["dTimes.11"] = v3NOT_RECORDED;
                eTimes["PatientArrivedatDestinationDateTime"] = v3NOT_RECORDED;
            }
            else
            {
                v2Array.push({ section: "E05", element: "E05_10", val: null });
                eTimes["dTimes.11"] = null;
                eTimes["PatientArrivedatDestinationDateTime"] = null;
            }
        }
        else
        {
            eTimes["PatientArrivedatDestinationDateTime"] = _val[0];
            v2Array.push({ section: "E05", element: "E05_10", val: _val[0] });
            eTimes["dTimes.11"] = _val[0];
        }
    }
    else
    {
        v2Array.push({ section: "E05", element: "E05_10", val: null });
        eTimes["dTimes.11"] = v3NOT_APPLICABLE;
        eTimes["PatientArrivedatDestinationDateTime"] = v3NOT_APPLICABLE;
    };


    //eTimes.12//////////////////        
    _val = getValue(businessObject.elements, "eTimes.12");
    if(eDispostion.HasPatient == true)
    {
        if (_val == null)
        {
            if (isRequiredStateElement("eTimes.12")) {
                eTimes["dTimes.11"] = v3NOT_RECORDED;
                eTimes["DestinationPatientTransferofCareDateTime"] = v3NOT_RECORDED;
            }
            else
            {
                eTimes["dTimes.11"] = null;
                eTimes["DestinationPatientTransferofCareDateTime"] = null;
            }
        }        
        else
        {
            eTimes["DestinationPatientTransferofCareDateTime"] = _val[0];
            eTimes["dTimes.12"] = _val[0];
        }
    }
    else
    {
        eTimes["dTimes.11"] = v3NOT_APPLICABLE;
        eTimes["DestinationPatientTransferofCareDateTime"] = v3NOT_APPLICABLE;
    };

    //eTimes.13//////////////////
    _val = getValue(businessObject.elements, "dTimes.13");
    if (_val == null ) 
    {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dTimes.13", Description: "Unit Back in Service Date/Time Mandatory Value " })

    }
    else {
        v2Array.push({ section: "E05", element: "E05_11", val: _val[0] });
        eTimes["dTimes.13"] = _val[0];
        eTimes["UnitBackinServiceDateTime"] = _val[0];
    };


    //eTimes.14//////////////////
    _val = getValue(businessObject.elements, "eTimes.14");
    if (eDisposition["isCancelled"] == true)
    {
        if (_val == null)
        {
            if (isRequiredStateElement("eTimes.14"))
            {
                ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "dTimes.14", Description: "Unit Canceled Date/Time:  eTimes 14 Mandatory " })
            }
        }        
        else
        {
            v2Array.push({ section: "E05", element: "E05_12", val: _val[0] });
            eTimes["dTimes.14"] = _val[0];
            eTimes["UnitCanceledDateTime"] = _val[0];
        }
    }
    else
    {
        ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "dTimes.14", Description: "Unit Canceled Date/Time:  Call Not Cancelled " })
    };


    //eTimes.15//////////////////
    _val = getValue(businessObject.elements, "eTimes.15");
    if (_val == null) {
        v2Array.push({ section: "E05", element: "E05_13", val: null });
        eTimes["dTimes.15"] = null;
        eTimes["UnitBackatHomeLocationDateTime"] = null;
    }
    else {
        v2Array.push({ section: "E05", element: "E05_13", val: _val[0] });
        eTimes["UnitBackatHomeLocationDateTime"] = _val[0];
        eTimes["dTimes.15"] = _val[0];
    };

    //eTimes.16/////////////////
    _val = getValue(businessObject.elements, "eTimes.16");
    if (_val == null) {
        eTimes["dTimes.16"] = null;
        eTimes["EMSCallCompletedDateTime"] = null;
    }
    else {
        OLAPArray.push('\t' + "<EMSCallCompletedDateTime>" + _val + "</EMSCallCompletedDateTime>" + '\n');
        eTimes["EMSCallCompletedDateTime"] = _val[0];
        eTimes["dTimes.16"] = _val[0];
    };    
};    //end of function   
var setePayment = function (businessObject) {
    ///////////ONLY BILLING TRANSPORT CALLS
    //////////////////ePayment.01
    ePayment["isInsurance"] = false;
    ePayment["isMedicaid"] = false;
    ePayment["isMedicare"] = false;
    ePayment["isNotBilled"] = false;

    if (eDisposition.HasTransport == true) {
        _val = getValue(businessObject.elements, "ePayment.01");
        if (_val == null) {
            v2Array.push({ section: "E07", element: "E07_01", val: v2NOT_RECORDED });
            ePayment["ePayment.01"] = V3NOT_RECORDED;
            ePayment["PrimaryMethodofPayment"] = V3NOT_RECORDED;
        }
        else 
        {
            if (_val[0] in ["2601001", "2601013"]) 
            {
                ePayment["isInsurance"] = true;
            };
            if (_val[0] = "2601003") 
            {
                ePayment["isMedicaid"] = true;
            };
            if (_val[0] = "2601005") 
            {
                ePayment["isMedicare"] = true;
            };
            if (_val[0] = "2601007") 
            {
                ePayment["isNotBilled"] = true;
            };
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
        if (_val[0] = "9922001") // If Phsysicans Certification is No, Check for Medicaide/air.
        {
            if ((eDispatch.isEmergent == false && ePayment.isMedicaid == true && ePayment.isMedicare == true)) 
            {
                ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.02", Description: "PCS required for Payment Type (Medicare/Medicaid" })
            }
        }
        else
        {
            ePayment["PhysicianCertificationStatement"] = setCodeText("ePayment.02", _val[0]);
            v2Array.push({ section: "E07", element: "E07_02", val: setV2("ePayment.02", _val[0]) });
            ePayment["ePayment.02"] = _val[0];
        }
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
        if ((ePayment["ePayment.02"] == null && eePayment["ePayment.02"] == "9922001")) //if No PCS
        {
            ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.03", Description: "Certification Date Provided with null Certification" })
        }
        else 
        {
            ePayment["ePayment.03"] = _val[0];
            ePayment["ePayment.DatePhysicianCertificationStatementSigned"] = _val[0];
        }
    };


    //ePayment.04////////////
    _val = getValue(elementList, "ePayment.04");
    if (_val == null) 
    {
        ePayment["ePayment.04"] = null;
        ePayment["ReasonforPhysicianCertificationStatement"] = null;
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
        else 
        {
            ePayment["HealthcareProviderTypeSigningPhysicianCertificationStatement"] = setCodeText("ePayment.05", _val[i]);
            ePayment["ePayment.05"] = _val[0];
        };

        //////////////////ePayment.06
        _val = getValue(businessObject.elements, "ePayment.06");
        if (_val == null) 
        {
            ePayment["ePayment.06"] = null;
            ePayment["LastNameofIndividualSigningPhysicianCertificationStatement"] = null;
        }
        else 
        {
            if ((ePayment["ePayment.02"] == null && eePayment["ePayment.02"] == "9922001")) //if No PCS
            {
                ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.05", Description: "Certification Provider Type with null Certification" })
            }
            else 
            {
                if ((ePayment["ePayment.02"] == null && eePayment["ePayment.02"] == "9922001")) //if No PCS
                {
                    ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.06", Description: "Certification Provider Type with null Certification" })
                }
                else 
                {
                    ePayment["LastNameofIndividualSigningPhysicianCertificationStatement"] = _val[0];
                    ePayment["ePayment.06"] = _val[0];
                }
            }
        };

        //////////////////ePayment.07
        _val = getValue(businessObject.elements, "ePayment.07");
        if (_val == null) 
        {
            ePayment["ePayment.07"] = null;
            ePayment["FirstNameofIndividualSigningPhysicianCertificationStatement"] = null;

        }
        else 
        {
            if ((ePayment["ePayment.02"] == null && eePayment["ePayment.02"] == "9922001")) //if No PCS
            {
                ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.07", Description: "Certification Provider Type with null Certification" })
            }
            else 
            {
                ePayment["ePayment.07"] = _val[0];
                ePayment["FirstNameofIndividualSigningPhysicianCertificationStatement"] = _val[0];
            }
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

        // IF NOT INSURED, SET TO NA!~
        ///////////////////////////////////////////////ePayment.InsuranceGroup
        _sectionIndex = getSectionIndex(businessObject.sections[i].attributes, "ePayment.InsuranceGroup");
        for (var x = 0; x < _sectionIndex.length; x++) 
        {
            var listOfElements = businessObject.sections[i].attributes.sections[_sectionIndex[x]].attributes.elements

            //////////////////ePayment.09
            _val = getValue(listOfElements, "ePayment.09");
            if (_val == null) {
                InsuranceGroupArray["ePayment.09"] = null;
                InsuranceGroupArray["InsuranceCompanyID"] = null;
            }
            else 
            {
                if(ePayment["isInsurance"] == true)
                {
                    {
                        ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.09", Description: "Insurance Not selected Payment type" })
                    }
                };
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
                if(ePayment["isInsurance"] == false)
                {
                    {
                        ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.10", Description: "Insurance Not selected Payment type" })
                    }
                };

                InsuranceGroupArray["ePayment.10"] = _val[0];
                InsuranceGroupArray["InsuranceCompanyName"] = _val[0];
            };

            //////////////////ePayment.11
            _val = getValue(listOfElements, "ePayment.11");
            if (_val == null) {
                v2Array.push({ section: "E07", element: "E07_04", val: v2NOT_KNOWN });
                InsuranceGroupArrayePayment["ePayment.11"] = null;
                InsuranceGroupArray["InsuranceCompanyBillingPriority"] = null;

            }
            else 
            {
                if(ePayment["isInsurance"] == false)
                {
                    {
                        ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.11", Description: "Insurance Not selected Payment type" })
                    }
                };

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
            else 
            {
                if(ePayment["isInsurance"] == false)
                {
                    {
                        ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.12", Description: "Insurance Not selected Payment type" })
                    }
                };

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
            else 
            {
                if(ePayment["isInsurance"] == false)
                {
                    {
                        ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.13", Description: "Insurance Not selected Payment type" })
                    }
                };

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
            else 
            {
                if(ePayment["isInsurance"] == false)
                {
                    {
                        ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.14", Description: "Insurance Not selected Payment type" })
                    }
                };
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
            else 
            {
                if(ePayment["isInsurance"] == false)
                {
                    {
                        ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.15", Description: "Insurance Not selected Payment type" })
                    }
                };
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
            else 
            {
                if(ePayment["isInsurance"] == false)
                {
                    {
                        ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.16", Description: "Insurance Not selected Payment type" })
                    }
                };

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
                if(ePayment["isInsurance"] == false)
                {
                    {
                        ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.17", Description: "Insurance Not selected Payment type" })
                    }
                };

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
            else 
            {
                if(ePayment["isInsurance"] == false)
                {
                    {
                        ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.18", Description: "Insurance Not selected Payment type" })
                    }
                };

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
                if(ePayment["isInsurance"] == false)
                {
                    {
                        ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.19", Description: "Insurance Not selected Payment type" })
                    }
                };
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
                if(ePayment["isInsurance"] == false)
                {
                    {
                        ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.20", Description: "Insurance Not selected Payment type" })
                    }
                };
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
                if(ePayment["isInsurance"] == false)
                {
                    {
                        ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.21", Description: "Insurance Not selected Payment type" })
                    }
                };

                v2Array.push({ section: "E07", element: "E07_13", val: _val[0] });
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
            else 
            {
                if(ePayment["isInsurance"] == false)
                {
                    {
                        ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.22", Description: "Insurance Not selected Payment type" })
                    }
                };

                v2Array.push({ section: "E07", element: "E07_14", val: SetD2("ePayment.22", _val[0]) });
                InsuranceGroupArray["ePayment.22"] = _val[0];
                InsuranceGroupArray["RelationshiptotheInsured"] = setCodeText("ePayment.22>", _val[0]);
            };

        };

        ePayment["hasClosestLivingRelative"] = false;
        //////////////////ePayment.23
        _val = getValue(businessObject.elements, "ePayment.23");
        if (_val == null) {
            v2Array.push({ section: "E07", element: "E07_18", val: v2NOT_KNOWN });
            ePayment["ePayment.23"] = null;
            ePayment["ClosestRelativeGuardianLastName"] = null;
        }
        else 
        {
            ePayment["hasClosestLivingRelative"]= true;
            v2Array.push({ section: "E07", element: "E07_18", val: _val[0] });
            ePayment["ePayment.23"] = _val[0];
            ePayment["ClosestRelativeGuardianLastName"] = _val[0];
        };


        //////////////////ePayment.24
        _val = getValue(businessObject.elements, "ePayment.24");
        if (_val == null) 
        {
            v2Array.push({ section: "E07", element: "E07_19", val: null });
            ePayment["ePayment.24"] = null;
            ePayment["ClosestRelativeGuardianFirstName"] = null;
        }
        else 
        {
            ePayment["hasClosestLivingRelative"]= true;
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
        else {
            if(ePayment["hasClosestLivingRelative"]== false)
            {
                ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.25", Description: "Closest Living Relative Not Identified - No Name" })
            }
            else
            {
                v2Array.push({ section: "E07", element: "E07_20", val: _val[0] })
                ePayment["ePayment.25"] = _val[0];
                ePayment["ClosestRelativeGuardianMiddleName"] = _val[0];
            }
        };

        //////////////////ePayment.26
        _val = getValue(businessObject.elements, "ePayment.26");
        if (_val == null) {
            v2Array.push({ section: "E07", element: "E07_21", val: null });
            ePayment["ePayment.26"] = null;
            ePayment["ClosestRelativeGuardianStreetAddress"] = null;
        }
        else 
        {
            if (ePayment["hasClosestLivingRelative"] == false) 
            {
                ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.26", Description: "Closest Living Relative Not Identified - No Name" })
            }
            else
            {
                v2Array.push({ section: "E07", element: "E07_21", val: _val[0] });
                ePayment["ePayment.26"] = _val[0];
                ePayment["ClosestRelativeGuardianStreetAddress"] = _val[0];
            }
        };

        //////////////////ePayment.27
        _val = getValue(businessObject.elements, "ePayment.27");
        if (_val == null) {
            v2Array.push({ section: "E07", element: "E07_22", val: null });
            ePayment["ePayment.27"] = null;
            ePayment["ClosestRelativeGuardianCity"] = null;
        }
        else 
        {
            if (ePayment["hasClosestLivingRelative"] == false) 
            {
                ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.27", Description: "Closest Living Relative Not Identified - No Name" })
            }
            else
            {         
                v2Array.push({ section: "E07", element: "E07_22", val: setV2("ePayment.27", _val[0]) });
                ePayment["ePayment.27"] = _val[0];
                ePayment["ClosestRelativeGuardianCity"] = setCodeText("ePayment.27", _val[0]);
            }
        };

        //////////////////ePayment.28
        _val = getValue(businessObject.elements, "ePayment.28");
        if (_val == null) {

            v2Array.push({ section: "E07", element: "E07_23", val: null });
            ePayment["ePayment.28"] = null;
            ePayment["ClosestRelativeGuardianState"] = null;
        }
        else 
        {
            if (ePayment["hasClosestLivingRelative"] == false) 
            {
                ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.28", Description: "Closest Living Relative Not Identified - No Name" })
            }
            else
            {         
                ePayment["ClosestRelativeGuardianState"] = setCodeText("ePayment.28", _val[0]);
                v2Array.push({ section: "E07", element: "E07_23", val: setV2("ePayment.28", _val[0]) });
                ePayment["ePayment.28"] = _val[0];
            }
        };

        //////////////////ePayment.29
        _val = getValue(businessObject.elements, "ePayment.29");
        if (_val == null) 
        {
            v2Array.push({ section: "E07", element: "E07_24", val: null });
            ePayment["ePayment.29"] = null;
            ePayment["ClosestRelativeGuardianZIPCode"] = null;
        }
        else 
        {
            if (ePayment["hasClosestLivingRelative"] == false) 
            {
                ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.29", Description: "Closest Living Relative Not Identified - No Name" })
            }
            else
            {
         
                v2Array.push({ section: "E07", element: "E07_24", val: _val[0] });
                ePayment["ePayment.29"] = _val[0];
                ePayment["ClosestRelativeGuardianZIPCode"] = _val[0];
            }
        };

        //////////////////ePayment.30
        _val = getValue(businessObject.elements, "ePayment.30");
        if (_val == null) {
            ePayment["ePayment.30"] = null;
            ePayment["ClosestRelativeGuardianCountry"] = null;
        }
        else 
        {
            if (ePayment["hasClosestLivingRelative"] == false) 
            {
                ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "ePayment.30", Description: "Closest Living Relative Not Identified - No Name" })
            }
            else
            {
         
                ePayment["ClosestRelativeGuardianCountry"] = setCodeText("ePayment.30", _val[0]);;
                ePayment["ePayment.30"] = _val[0];
            }
        };

        //////////////////ePayment.31
        var _PhoneNumberObject = new Array();
        _PhoneNumberObject = getPhoneNumber(elementList, "ePayment.31");
        if (_PhoneNumberObject == null) {
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
                for (var i = 0; i < _PhoneNumberObject.length; i++)
                {
                    console.log(_PhoneNumberObject[i].PhoneNumberType)
                    if (_PhoneNumberObject[i].PhoneNumberType == "9913001") {
                        arr1.push("FAX  " + _PhoneNumberObject[i].value);
                        arr2.push("9913001  " + _PhoneNumberObject[i].value);
                    }
                    else if (_PhoneNumberObject[i].PhoneNumberType == "9913003") {
                        arr1.push("HOME  " + _PhoneNumberObject[i].value);
                        arr2.push("9913003  " + _PhoneNumberObject[i].value);
                        var sPatNum = _PhoneNumberObject[i].value;
                    }
                    else if (_PhoneNumberObject[i].PhoneNumberType == "9913005") {
                        arr1.push("MOBILE  " + _PhoneNumberObject[i].value);
                        arr2.push("9913005  " + _PhoneNumberObject[i].value);
                    }
                    else if (_PhoneNumberObject[i].PhoneNumberType == "9913007") {
                        arr1.push("PAGER " + _PhoneNumberObject[i].value);
                        arr2.push("9913007 " + _PhoneNumberObject[i].value);
                    }
                    else if (_PhoneNumberObject[i].PhoneNumberType == "9913009") {
                        arr1.push("WORK " + _PhoneNumberObject[i].value);
                        arr2.push("9913009 " + _PhoneNumberObject[i].value);
                    }
                    else {
                        arr1.push(_PhoneNumberObject[i].value);
                        arr2.push(_PhoneNumberObject[i].value);
                    }
                }
            };
            ePayment["ePayment.31"] =  arr1.slice(0);;
            ePayment["ClosestRelativeGuardianPhoneNumber"] =  arr2.slice(0);;
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

            ePayment["EmployerCity"] = setCodeText("ePayment.35", _val[0]);
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
            ePayment["EmployerCountry"] = setCodeText("ePayment.38", _val[0]);
            ePayment["ePayment.38"] = _val[0];
        };


        //////////////////ePayment.39
        //////////////////ePayment.31
        var _PhoneNumberObject = new Array();
        _PhoneNumberObject = getPhoneNumber(elementList, "ePayment.39");
        if (_PhoneNumberObject == null) {
            ePayment["ePayment.39"] = null;
            ePayment["EmployerPrimaryPhoneNumber"] = null;
        }
        else 
        {
         
            sPatHomeNum = "";
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _PhoneNumberObject.length; i++)
            {
                console.log(_PhoneNumberObject[i].PhoneNumberType)
                if (_PhoneNumberObject[i].PhoneNumberType == "9913001") {
                    arr1.push("FAX  " + _PhoneNumberObject[i].value);
                    arr2.push("9913001  " + _PhoneNumberObject[i].value);
                }
                else if (_PhoneNumberObject[i].PhoneNumberType == "9913003") {
                    arr1.push("HOME  " + _PhoneNumberObject[i].value);
                    arr2.push("9913003  " + _PhoneNumberObject[i].value);
                    var sPatNum = _PhoneNumberObject[i].value;
                }
                else if (_PhoneNumberObject[i].PhoneNumberType == "9913005") {
                    arr1.push("MOBILE  " + _PhoneNumberObject[i].value);
                    arr2.push("9913005  " + _PhoneNumberObject[i].value);
                }
                else if (_PhoneNumberObject[i].PhoneNumberType == "9913007") {
                    arr1.push("PAGER " + _PhoneNumberObject[i].value);
                    arr2.push("9913007 " + _PhoneNumberObject[i].value);
                }
                else if (_PhoneNumberObject[i].PhoneNumberType == "9913009") {
                    arr1.push("WORK " + _PhoneNumberObject[i].value);
                    arr2.push("9913009 " + _PhoneNumberObject[i].value);
                }
                else {
                    arr1.push(_PhoneNumberObject[i].value);
                    arr2.push(_PhoneNumberObject[i].value);
                }
            }
        };
        ePayment["ePayment.39"] =  arr1.slice(0);;
        ePayment["EmployerPrimaryPhoneNumber"] = arr2.slice(0);;
        v2Array.push({ section: "E07", element: "E07_32", val: sPatHomeNum });
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
            ePayment["SpecialtyCareTransportCareProvider"] = arr3.slice(0);

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
            ePayment["AmbulanceTransportReasonCode"] = setCodeText("ePayment.44", _val[0]);
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

        // IF CANCELLED, NOT APPLICABLE
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
            ePayment["CMSServiceLevel"] = setCodeText("ePayment.50", _val[0]);
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
            v2Array.push({ section: "E05", element: "E5_37", val: null });
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
        for (var x = 0; x < _sectionIndex.length; x++) {
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
    
    }
    else 
    {
        v2Array.push({ section: "E07", element: "E07_01", val: v2NOT_APPLICABLE });
        ePayment["ePayment.01"] = v3NOT_APPLICABLE;
        ePayment["PrimaryMethodofPayment"] = v3NOT_APPLICABLE;

        v2Array.push({ section: "E07", element: "E07_34", val: v2NOT_APPLICABLE });
        ePayment["ePayment.50"] = v3NOT_APPLICABLE;
        ePayment["CMSServiceLevel"] = v3NOT_APPLICABLE;
    };
}

var seteArrestNotApplicableAll = function (businessObject) 
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
    

        eArrest["eArrest.01"] = V3NOT_APPLICABLE;
        eArrest["eArrest.02"] = V3NOT_APPLICABLE;
        eArrest["eArrest.03"] = V3NOT_APPLICABLE;
        eArrest["eArrest.04"] = V3NOT_APPLICABLE;
        eArrest["eArrest.05"] = V3NOT_APPLICABLE;
        eArrest["eArrest.07"] = V3NOT_APPLICABLE;
        eArrest["eArrest.08"] = V3NOT_APPLICABLE;
        eArrest["eArrest.09"] = V3NOT_APPLICABLE;
        eArrest["eArrest.10"] = V3NOT_APPLICABLE;
        eArrest["eArrest.11"] = V3NOT_APPLICABLE;
        eArrest["eArrest.12"] = V3NOT_APPLICABLE;
        eArrest["eArrest.14"] = V3NOT_APPLICABLE;
        eArrest["eArrest.15"] = V3NOT_APPLICABLE;
        eArrest["eArrest.16"] = V3NOT_APPLICABLE;
        eArrest["eArrest.17"] = V3NOT_APPLICABLE;
        eArrest["eArrest.18"] = V3NOT_APPLICABLE;


        eArrest["CardiacArrest"] = NOT_APPLICABLE;
        eArrest["CardiacArrestEtiology"] = NOT_APPLICABLE;        
        eArrest["ResuscitationAttemptedByEMS"] = V3NOT_APPLICABLE;
        eArrest["ArrestWitnessedBy"] = V3NOT_APPLICABLE;
        eArrest["CPRCareProvidedPriortoEMSArrival"] = V3NOT_APPLICABLE;;
        eArrest["AEDUsePriortoEMSArrival"] = V3NOT_APPLICABLE;
        dAgency["TypeofCPRProvided"] = V3NOT_APPLICABLE
        dAgency["TherapeuticHypothermiaInitiated"] = V3NOT_APPLICABLE
        eArrest["FirstMonitoredArrestRhythmofthePatient"] = v3NOT_APPLICABLE;
        eArrest["AnyReturnofSpontaneousCirculation"] = v3NOT_APPLICABLE;
        eArrest["DateTimeofCardiacArrest"] = v3NOT_APPLICABLE;
        eArrest["DateTimeResuscitationDiscontinued"] = v3NOT_APPLICABLE;             
        eArrest["ReasonCPRResuscitationDiscontinued"] = v3NOT_APPLICABLE;
        dAgency["CardiacRhythmonArrivalatDestination"] = v3NOT_APPLICABLE;
        eArrest["EndofEMSCardiacArrestEvent"] = v3NOT_APPLICABLE;
        return eArrest;

    }





var isRequiredStateElement = function (elementID)
    {
        return true;
    };
var getValue = function (businessObject, valueObject) {
        //console.log(businessObject.length);
        var _retValue = [];
        var _bFound = false;
        i = 0;
        while (i < businessObject.length) {
            if (_bFound == false) {
                if (businessObject[i].attributes.title == valueObject) {
                    _bFound = true;
                    if (businessObject[i].attributes.value == undefined) {

                        _retValue = null;
                    }
                    else {
                        _retValue.push(businessObject[i].attributes.value);
                    }
                }
            }
            i++;
        }
        return _retValue;
    };

var seteAirwayNotApplicableAll = function () {
    var _AirwayGroup = new Object();
    var _ConfirmationGroup = new Object();
    var _eAirway = new Object();
    if (isRequiredStateElement("eAirway.01") == true) {
        _AirwayGroup["eAirway.01"] = NIL_V3NOT_APPLICABLE;
    };

    if (isRequiredStateElement("eAirway.02") == true) {
        _ConfirmationGroup["eAirway.02"] = NIL_V3NOT_APPLICABLE;
    };

    if (isRequiredStateElement("eAirway.03") == true) {
        _ConfirmationGroup["eAirway.03"] = NIL_V3NOT_APPLICABLE;
    };

    if (isRequiredStateElement("eAirway.04") == true) {
        _ConfirmationGroup["eAirway.04"] = NIL_V3NOT_APPLICABLE;
    };

    if (isRequiredStateElement("eAirway.06") == true) {
        _ConfirmationGroup["eAirway.05"] = NIL_V3NOT_APPLICABLE;
    };

    if (isRequiredStateElement("eAirway.07") == true) {
        _ConfirmationGroup["eAirway.07"] = NIL_V3NOT_APPLICABLE;
    };

    if (isRequiredStateElement("eAirway.08") == true) {
        _ConfirmationGroup["eAirway.08"] = NIL_V3NOT_APPLICABLE;
    };

    if (isRequiredStateElement("eAirway.09") == true) {
        _ConfirmationGroup["eAirway.09"] = NIL_V3NOT_APPLICABLE;
    };

    _AirwayGroup.ConfirmationGroup = _ConfirmationGroup;
    _eAirway.eAirwayGroup = _AirwayGroup;
    return _eAirway;

};

function setV2(NEMSISElementNumber, v3Val) {
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

        case "eDispatch.01":

            if (eDispatch01[v3Val] == undefined) {
                _retVal = v3Val + " UNDEFINED";
            }
            else {
                _retVal = eDispatch01[v3Val];
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
                _retValue = "UNDEFINED";
            }
            else
            {
                _retValue = eDisposition12[v3Val];
            }
            break;
        case "eDisposition.13":
            if (eDisposition13[v3Val] == undefined) {
                _retValue = "UNDEFINED";
                }
                else {
                _retValue = eDisposition13[v3Val];
                }
            
            break;
        case "eDisposition.14":

            if (eDisposition14[v3Val] == undefined) {
                _retValue = "UNDEFINED";
            }
            else {
                _retValue = eDisposition13[v3Val];
            }
            break;

        case "eDisposition.15":

            if (eDisposition15[v3Val] == undefined) {
                _retValue = "UNDEFINED";
            }
            else {
                _retValue = eDisposition15[v3Val];
            }
            break;
                
        case "eDisposition.17":

            if (eDisposition17[v3Val] == undefined) {
                _retValue = "UNDEFINED";
            }
            else {
                _retValue = eDisposition17[v3Val];
            }
            break;

                
        case "eDisposition.19":

            if (eDisposition19[v3Val] == undefined) {
                _retValue = "UNDEFINED";
            }
            else {
                _retValue = eDisposition19[v3Val];
            }
            break;

        case "eDisposition.20":

            if (eDisposition20[v3Val] == undefined) {
                _retValue = "UNDEFINED";
            }
            else {
                _retValue = eDisposition20[v3Val];
            }
            break;

                
        case "eDisposition.21":

            if (eDisposition21[v3Val] == undefined) {
                _retValue = "UNDEFINED";
            }
            else {
                _retValue = eDisposition21[v3Val];
            }
            break;

        case "ePayment.01":
            if (ePayment01[v3Val] == undefined) {
                _retValue = "UNDEFINED";
            }
            else {
                _retValue = ePayment01[v3Val];
            }
            break;

        case "ePayment.02":
            if (ePayment02[v3Val] == undefined) {
                _retValue = "UNDEFINED";
            }
            else {
                _retValue = ePayment02[v3Val];
            }
            break;
        case "ePayment.11":
            if (ePayment11[v3Val] == undefined) {
                _retValue = "UNDEFINED";
            }
            else {
                _retValue = ePayment11[v3Val];
            }
            break;
        case "ePayment.40":
            if (ePayment40[v3Val] == undefined) {
                _retValue = "UNDEFINED";
            }
            else {
                _retValue = ePayment40[v3Val];
            }
            break;
        case "ePayment.50":
            if (ePayment50[v3Val] == undefined) {
                _retValue = "UNDEFINED";
            }
            else {
                _retValue = ePayment50[v3Val];
            }
            break;
        case "ePayment.52":
            if (ePayment52[v3Val] == undefined) {
                _retValue = "UNDEFINED";
            }
            else {
                _retValue = ePayment52[v3Val];
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
}   ;
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
    "4212003" : "Assist; Public", 
    "4212005" : "Assist; Unit", 
    "4212007" : "Canceled (Prior to Arrival At Scene)", 
    "4212009" : "No Patient Contact (Canceled on Scene)", 
    "4212011" : "No Patient Found (Canceled on Scene)", 
    "4212013" : "Patient Dead at Scene-No Resuscitation Attempted (With Transport)", 
    "4212015" : "Patient Dead at Scene-No Resuscitation Attempted (Without Transport)", 
    "4212017" : "Patient Dead at Scene-Resuscitation Attempted (With Transport)", 
    "4212019" : "Patient Dead at Scene-Resuscitation Attempted (Without Transport)", 
    "4212021" : "Patient Evaluated; No Treatment/Transport Required", 
    "4212023" : "Patient Refused Evaluation/Care (With Transport)", 
    "4212025" : "Patient Refused Evaluation/Care (Without Transport)", 
    "4212027" : "Patient Treated; Released (AMA)", 
    "4212029" : "Patient Treated; Released (per protocol)", 
    "4212031" : "Patient Treated; Transferred Care to Another EMS Professional", 
    "4212033" : "Patient Treated; Transported by EMS", 
    "4212035" : "Patient Treated; Transported by Law Enforcement", 
    "4212037" : "Patient Treated; Transported by Private Vehicle", 
    "4212039" : "Standby-No Services or Support Provided", 
    "4212041" : "Standby-Public Safety; Fire; or EMS Operational Support Provided", 
    "4212043" : "Transport of Body Parts or Organs Only"
};
var eDisposition334_13 = {
    "9909001" : "Assisted/Walk", 
    "9909003" : "Backboard", 
    "9909005" : "Chair", 
    "9909007" : "Carried", 
    "9909009" : "Other (Not Listed)", 
    "9909011" : "Stairchair", 
    "9909013" : "Stretcher", 
    "9909015" : "Wheelchair"
};
var eDisposition334_14 =         {
        "4214001" : "Car Seat", 
        "4214003" : "Fowlers (Semi-Upright Sitting)", 
        "4214005" : "Lateral Left", 
        "4214007" : "Lateral Right", 
        "4214009" : "Other (Not Listed)", 
        "4214011" : "Prone", 
        "4214013" : "Semi-Fowlers", 
        "4214015" : "Sitting", 
        "4214017" : "Supine", 
        "4214019" : "Trendelenburg"
    };
var eDisposition334_15 = {
        "9909001" : "Assisted/Walk", 
        "9909003" : "Backboard", 
        "9909005" : "Chair", 
        "9909007" : "Carried", 
        "9909009" : "Other (Not Listed)", 
        "9909011" : "Stairchair", 
        "9909013" : "Stretcher", 
        "9909015" : "Wheelchair"
    };
var eDisposition334_16 =         {
        "4216001" : "Air Medical-Fixed Wing", 
        "4216003" : "Air Medical-Rotor Craft", 
        "4216005" : "Ground-Ambulance", 
        "4216007" : "Ground-ATV or Rescue Vehicle", 
        "4216009" : "Ground-Bariatric", 
        "4216011" : "Ground-Other Not Listed", 
        "4216013" : "Ground-Mass Casualty Bus/Vehicle", 
        "4216015" : "Ground-Wheelchair Van", 
        "4216017" : "Water-Boat"
    };
var eDisposition334_17 = {
    "4217001" : "Emergent (Immediate Response)", 
    "4217003" : "Emergent Downgraded to Non-Emergent", 
    "4217005" : "Non-Emergent", 
    "4217007" : "Non-Emergent Upgraded to Emergent"
};
var eDisposition334_18 = {
    "4218001" : "Intersection Navigation-Against Normal Light Patterns", 
    "4218003" : "Intersection Navigation-With Automated Light Changing Technology", 
    "4218005" : "Intersection Navigation-With Normal Light Patterns", 
    "4218007" : "Speed-Enhanced per Local Policy", 
    "4218009" : "Speed-Normal Traffic"
};
var eDisposition334_19 = {
    "9916001" : "Improved", 
    "9916003" : "Unchanged", 
    "9916005" : "Worse" 
}
var eDisposition334_20 = {
    "4220001" : "Closest Facility", 
    "4220003" : "Diversion", 
    "4220005" : "Family Choice", 
    "4220007" : "Insurance Status/Requirement", 
    "4220009" : "Law Enforcement Choice", 
    "4220011" : "On-Line/On-Scene Medical Direction", 
    "4220013" : "Other (Not Listed)", 
    "4220015" : "Patient's Choice", 
    "4220017" : "Patient's Physician's Choice", 
    "4220019" : "Protocol", 
    "4220021" : "Regional Specialty Center", 
};
var eDisposition334_21 = {
    "4221001" : "Home", 
    "4221003" : "Hospital-Emergency Department", 
    "4221005" : "Hospital-Non-Emergency Department Bed", 
    "4221007" : "Medical Office/Clinic", 
    "4221009" : "Morgue/Mortuary", 
    "4221011" : "Nursing Home/Assisted Living Facility", 
    "4221013" : "Other (Not Listed)", 
    "4221015" : "Other EMS Responder (air)", 
    "4221017" : "Other EMS Responder (ground)", 
    "4221019" : "Police/Jail", 
};
var eDisposition334_22 = {
    "4222001" : "Hospital-Burn", 
    "4222003" : "Hospital-Cath Lab", 
    "4222005" : "Hospital-CCU", 
    "4222007" : "Hospital-Endoscopy", 
    "4222009" : "Hospital-Hospice", 
    "4222011" : "Hospital-Hyperbaric Oxygen Treatment", 
    "4222013" : "Hospital-ICU", 
    "4222015" : "Hospital-Labor & Delivery", 
    "4222017" : "Hospital-Med/Surg", 
    "4222019" : "Hospital-Mental Health", 
};
var eDisposition334_24 = {
    "4224003" : "Yes-Adult Trauma", 
    "4224005" : "Yes-Cardiac Arrest", 
    "4224007" : "Yes-Obstetrics", 
    "4224009" : "Yes-Other", 
    "4224011" : "Yes-Pediatric Trauma", 
    "4224013" : "Yes-STEMI", 
    "4224015" : "Yes-Stroke"
};
var eDisposition334_22 =         {
        "4226003" : "Contact 911 or see your Doctor if problem worsens", 
        "4226005" : "Other Not Listed (Described in Narrative)", 
        "4226007" : "Problem Specific Instructions Provided", 
        "4226009" : "See Your Doctor or the Emergency Department immediately", 
        "4226011" : "See Your Doctor or the Emergency Department in the next 24 hours", 
        "4226013" : "See Your Doctor or the Emergency Department in the next 4 hours", 
        "4226015" : "See Your Doctor within the next one week", 
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
        /*
          

  <?DSDL_INCLUDE_START includes/pattern_consistency_eDisposition.HospitalTeamActivationGroup.xml?><sch:pattern id="nemSch_consistency_eDisposition.HospitalTeamActivationGroup">

  <!-- This pattern validates that eDisposition.24 Destination Team Pre-Arrival Alert or Activation and eDisposition.25 Date/Time of Destination Prearrival Alert or Activation are both recorded when either one is recorded. -->

  <sch:title>eDisposition.24 Destination Team Pre-Arrival Alert or Activation and eDisposition.25 Date/Time of Destination Prearrival Alert or Activation are both recorded when either one is recorded.</sch:title>

  <sch:rule id="nemSch_consistency_eDisposition.HospitalTeamActivationGroup_eDisposition.24" context="nem:eDisposition.HospitalTeamActivationGroup[nem:eDisposition.25 != '']">

    <!-- This rule fires when eDisposition.25 Date/Time of Destination Prearrival Alert or Activation is recorded. -->

    <sch:let name="nemsisElements" value="*"/>

    <!-- Assert that eDisposition.24 Destination Team Pre-Arrival Alert or Activation is also recorded. -->

    <sch:assert id="nemSch_consistency_eDisposition.HospitalTeamActivationGroup_eDisposition.24_present" role="[WARNING]" diagnostics="nemsisDiagnostic" test="nem:eDisposition.24 != ''">
      When <sch:value-of select="key('nemSch_key_elements', 'eDisposition.25', $nemSch_elements)"/> is recorded, <sch:value-of select="key('nemSch_key_elements', 'eDisposition.24', $nemSch_elements)"/> should also be recorded.
    </sch:assert>

  </sch:rule>

  <sch:rule id="nemSch_consistency_eDisposition.HospitalTeamActivationGroup_eDisposition.25" context="nem:eDisposition.HospitalTeamActivationGroup[not(nem:eDisposition.24 = ('', '4224001'))]">

    <!-- This rule fires when eDisposition.25 Date/Time of Destination Prearrival Alert or Activation is not recorded and eDisposition.24 Destination Team Pre-Arrival Alert or Activation is recorded and is not "None". -->

    <sch:let name="nemsisElements" value="*"/>

    <!-- Assert that eDisposition.25 Date/Time of Destination Prearrival Alert or Activation is also recorded. -->

    <sch:assert id="nemSch_consistency_eDisposition.HospitalTeamActivationGroup_eDisposition.25_present" role="[WARNING]" diagnostics="nemsisDiagnostic" test="false()">
      When <sch:value-of select="key('nemSch_key_elements', 'eDisposition.24', $nemSch_elements)"/> is recorded, <sch:value-of select="key('nemSch_key_elements', 'eDisposition.25', $nemSch_elements)"/> should also be recorded.
    </sch:assert>

  </sch:rule>

</sch:pattern><?DSDL_INCLUDE_END includes/pattern_consistency_eDisposition.HospitalTeamActivationGroup.xml?>
  <?DSDL_INCLUDE_START includes/pattern_consistency_eInjury.xml?><sch:pattern id="nemSch_consistency_eInjury">


          
         */    