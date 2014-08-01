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

var eDisposition = new Object;
var eDisposition = [];
var HospitalTeamActivationGroup = [];
var HospitalTeamActivationGroupArray = [];
var AgencyYearGroupArray = [];


var XMLString = ""


/*
 *  <sch:rule id="nemSch_consistency_eDisposition.12_all" context="nem:PatientCareReport">
     <!-- This rule fires on each PatientCareReport. -->
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

    </sch:pattern><?DSDL_INCLUDE_END includes/pattern_consistency_eDisposition.12.xml?>
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



 */
var getNEMSISSection = function (businessObject, sectionName)
    //Returns an array of index values for a given sectionName within a sectionObject
    // if sectionName does not exist within the sectionObject, return -1
{
    var _retValue = new Object();
    _retValue = "undefined"
    for (var d = 0; d < businessObject.length; d++) {
        if (businessObject[d].attributes.name == sectionName) {
            _retValue = businessObject[d];
        }
    };
    return _retValue;
};

var getSectionIndex = function (sectionObject, sectionName)
    //Returns an array of index values for a given sectionName within a sectionObject
    // if sectionName does not exist within the sectionObject, return -1
{
    var _retValue = [];
    for (var d = 0; d < sectionObject.sections.length; d++) {
        if (sectionObject.sections[d].attributes.name == sectionName) {
            _retValue.push(d);
        }
    }
    if (_retValue.length == 0) {
        _retValue.push(-1);
    }
    return _retValue;
};
//////////////////////////////////////////////////



var seteDisposition = function (businessObject)
{
    var v2Array = [];
    var HospitalTeamActivationGroupArray = new Array();
    var eDisposition = new Object();
    var eHospitalTeamActivationGroup = new Object();
    var HospitalTeamActivationGroup = new Object();

    var eDispositionObject = new Object()
    eDispositionObject = getNEMSISSection(businessObject, "eDisposition")

    if (eDispositionObject != "undefined")
    {
        console.log(eDispositionObject)
        _sectionIndex = getSectionIndex(eDispositionObject.attributes, "eDisposition.HospitalTeamActivationGroup");
        console.log(_sectionIndex)
    }

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

        
        //bHasPatient?
        //NO_PATIENT eDisposition.12[. &lt;= 4212011 or . = (4212039, 4212041)]) then true() else false()
        if(_val[0] in ["4212001","4212003","4212005","4212007","4212001", "4212011","4212039","4212041"])
        {        
            eDisposition["HasPatient"] = true;
        }
        else
        {  
            eDisposition["HasPatient"] = false;
            eDisposition["HasTreatment"] = false;
            eDisposition["HasTransport"] = false;
        };
        //NO_TREATMENT No patient or No Resuscitation Attempted, No Treatment/Transport Required, or Transport of Body Parts 
        //or Organs only. eDisposition.12[. = (4212013, 4212015, 4212021, 4212043)]) then true() else false()"/>
        if(eDisposition["HasPatient"] == true) //Have a patient, Treatment Possible
        {
            if(_val[0] in ["4212013","4212015","4212021","4212023",]) //Dead Patient/Refused Treatment
            {
                eDisposition["HasTreatment"] = false;
                eDisposition["HasTransport"] = false;
            }
            else
            {
                eDisposition["HasTreatment"] = true;                
            }
        };

        //NO_TRANSPORT: No patient or Without Transport, No Treatment/Transport Required, Released, or Transferred. 
        //eDisposition.12[. = (4212015, 4212019, 4212021, 4212025, 4212027, 4212029, 4212031)]) then true() else false()

        if(eDisposition["HasPatient"] == true) //Have a patient, Transport Possible
        {
            if(_val[0] in ["4212015","4212019","4212021","4212025","4212027", "4212029", "4212031"]) //various No Transport Options
            {
                eDisposition["HasTransport"] = false;
            }
            else
            {
                eDisposition["HasTransport"] = true;
            }
        };
    };
    
    //eDisposition.01////
    _val = getValue(_elementList, "eDisposition.01");
    if (_val == null)
    {
        if (isRequiredStateElement("eDisposition.01") == true)
        {
            if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
            {
                eDisposition["eDisposition.01"] = v3NOT_RECORDED;
                eDisposition["TransferredToName"] = v3NOT_RECORDED;
                v2Array.push({ section: "E20", element: "E20_01", val: v2NOT_RECORDED });
            }
            else // else, no Transport, not Applicable Data
            {
                eDisposition["eDisposition.01"] = v3NOT_APPLICABLE;
                eDisposition["TransferredToName"] = v3NOT_APPLICABLE;
                v2Array.push({ section: "E20", element: "E20_01", val: v2NOT_APPLICABLE});
            }
        }
        else
        {
            eDisposition["eDisposition.01"] = v2NOT_REPORTING;
            eDisposition["TransferredToName"] = v2NOT_REPORTING;
            v2Array.push({ section: "E20", element: "E20_01", val: v2NOT_REPORTING });
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
        else
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.01", Description: "Transport Desitination with No Transport Record " })
            v2Array.push({ section: "E20", element: "E20_01", val: null });
            eDisposition["eDisposition.01"] = null;
            eDisposition["TransferredToName"] = null;
        }
    };


    //eDisposition.02////
    _val = getValue(_elementList, "eDisposition.02");
    if (_val == null)
    {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            if (isRequiredStateElement("eDisposition.02") == true)
            {
                eDisposition["eDisposition.02"] = v3NOT_RECORDED;
                eDisposition["TransferredToCode"] = v3NOT_RECORDED;            
                v2Array.push({ section: "E20", element: "E20_02", val: v2NOT_RECORDED });
            }        
            else
            {
                eDisposition["TransferredToCode"] = v2NOT_REPORTING;
                eDisposition["eDisposition.02"] = v2NOT_REPORTING;
                v2Array.push({ section: "E20", element: "E20_02", val: v2NOT_REPORTING });
            }
        }    
        else
        {
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
    _val = getValue(_elementList, "eDisposition.03");
    if (_val == null)
    {
        if (isRequiredStateElement("eDisposition.03") == true) 
        {
            if (eDisposition.HasTransport == true) //if have a transport, and Is Required Data 
            {
                ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.03", Description: "Transport Address Required" })
            }
        };
        eDisposition["eDisposition.03"] = null;
        eDisposition["Address"] = null;
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
            eDisposition["eDisposition.03"] = null;
            eDisposition["Address"] = null;
            v2Array.push({ section: "E20", element: "E20_02", val: null });
        }
    };


    //eDisposition.04////
    _val = getValue(_elementList, "eDisposition.04");
    if (_val == null) 
    {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.04", Description: "Transport Address Required" })
        };
        eDisposition["eDisposition.04"] = null;
        eDisposition["City"] = null;
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
            eDisposition["eDisposition.04"] = null;
            eDisposition["City"] = null;
            v2Array.push({ section: "E20", element: "E20_04", val: null });
        }
    };

    //eDisposition.05////
    _val = getValue(_elementList, "eDisposition.05");
    if (_val == null) 
    {
        if (isRequiredStateElement("eDisposition.01") == true) 
        {
            if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
            {
                eDisposition["eDisposition.05"] = v3NOT_RECORDED;
                eDisposition["State"] = v3NOT_RECORDED;
                v2Array.push({ section: "E20", element: "E20_05", val: v2NOT_RECORDED });
            }
            else
            {
                eDisposition["eDisposition.05"] = v3NOT_APPLICABLE;
                eDisposition["State"] = v3NOT_APPLICABLE;
                v2Array.push({ section: "E20", element: "E20_05", val: v2NOT_APPLICABLE});
            }        
        }    
    }
    else 
    {
        if (eDisposition.HasTransport == true) //if NO Transport, wipe out data
        {
            eDisposition["eDisposition.05"] = _val[0];
            eDisposition["State"] = _val[0];
            v2Array.push({ section: "E20", element: "E20_05", val: _val[0] });
        }
        else
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.05", Description: "Transport State/Transport Type Conflict " })
            eDisposition["eDisposition.05"] = v3NOT_APPLICABLE;
            eDisposition["State"] = v3NOT_APPLICABLE;
            v2Array.push({ section: "E20", element: "E20_05", val: v2NOT_APPLICABLE});
        }    
    };

    //eDisposition.06////
    _val = getValue(_elementList, "eDisposition.06");
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
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.06", Description: "Transport City with No Transport Record " })
            eDisposition["eDisposition.06"] = v3NOT_APPLICABLE;
            eDisposition["County"] = v3NOT_APPLICABLE;        
            v2Array.push({ section: "E20", element: "E20_06", val: v2NOT_APPLICABLE });
        }
    }    
    else 
    {
        if (eDisposition.HasTransport == true) 
        {
            eDisposition["eDisposition.06"] = _val[0];
            eDisposition["County"] = _val[0];      
            v2Array.push({ section: "E20", element: "E20_06", val: _val[0] });
        }
        else
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.06", Description: "Transport City/Transport Type Conflict " })
            eDisposition["eDisposition.06"] = v3NOT_APPLICABLE;
            eDisposition["County"] = v3NOT_APPLICABLE;        
            v2Array.push({ section: "E20", element: "E20_06", val: v2NOT_APPLICABLE });
        }    
    };


    //eDisposition.07////
    _val = getValue(_elementList, "eDisposition.07");
    if (_val == null) 
    {
        if (isRequiredStateElement("eDisposition.07") == true) 
        {
            if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
            {
                eDisposition["eDisposition.07"] = v3NOT_RECORDED;
                eDisposition["ZIP"] = v3NOT_RECORDED;
                v2Array.push({ section: "E20", element: "E20_07", val: v2NOT_RECORDED });
            }
            else
            {
                eDisposition["eDisposition.07"] = v3NOT_APPLICABLE;
                eDisposition["ZIP"] = v3NOT_APPLICABLE;
                v2Array.push({ section: "E20", element: "E20_07", val: v2NOT_APPLICABLE });
            }
        }
        else
        {
            eDisposition["eDisposition.07"] = null;
            eDisposition["ZIP"] = null;
            v2Array.push({ section: "E20", element: "E20_07", val: null });
        }
    }    
    else 
    {
        if (eDisposition.HasTransport == true) 
        {
            eDisposition["eDisposition.07"] = _val[0];
            eDisposition["ZIP"] = _val[0];
            v2Array.push({ section: "E20", element: "E20_07", val: _val[0] });
            console.log("Better be dFacility.10 ZIP")
        }
        else
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.07", Description: "Transport Zip/Transport Type Conflict " })
            eDisposition["eDisposition.07"] = v3NOT_APPLICABLE;
            eDisposition["ZIP"] = v3NOT_APPLICABLE;
            v2Array.push({ section: "E20", element: "E20_07", val: v2NOT_APPLICABLE });
        }
    };



    //eDisposition.08////
    _val = getValue(_elementList, "eDisposition.08");
    if (_val == null) 
    {        
        eDisposition["eDisposition.08"] = null;
        eDisposition["Country"] = null;
    }
    else 
    {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            console.log("Better be dFacility.12 - Country")
            eDisposition["eDisposition.08"] = _val[0];
            eDisposition["Country"] = _val[0];
        }
        else
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.08", Description: "Transport County/Transport Type Conflict " })
            console.log("Better be dFacility.12 - Country")
            eDisposition["eDisposition.08"] = null;
            eDisposition["Country"] = null;
        }
    };

    
    //eDisposition.09////
    _val = getValue(_elementList, "eDisposition.09");
    if (_val == null) 
    {
        eDisposition["eDisposition.09"] = null;
        eDisposition["GPSLocation"] = null;
        v2Array.push({ section: "E20", element: "E20_08", val: null });
    }
    else 
    {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            eDisposition["eDisposition.09"] = _val[0];
            eDisposition["GPSLocation"] = _val[0];
            v2Array.push({ section: "E20", element: "E20_08", val: _val[0]});
        }
        else
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.09", Description: "Transport GPS/Transport Type Conflict " })
            eDisposition["eDisposition.09"] = null;
            eDisposition["GPSLocation"] = null;
            v2Array.push({ section: "E20", element: "E20_08", val: null});
        }
    };

    //eDisposition.10////
    _val = getValue(_elementList, "eDisposition.10");
    if (_val == null) 
    {
        eDisposition["eDisposition.10"] = null;
        eDisposition["USNationalGridCoordinates"] = null;
    }
    else 
    {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            console.log("Better be dFacility.14 - Country")
            eDisposition["eDisposition.10"] = _val[0];
            eDisposition["USNationalGridCoordinates"] = _val[0];
        }
        else
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.10", Description: "Transport National Coords/Transport Type Conflict " })
            eDisposition["eDisposition.10"] = null;
            eDisposition["USNationalGridCoordinates"] = null;
        }
    };


    //eDisposition.11////
    _val = getValue(_elementList, "eDisposition.11");
    if (_val == null) 
    {
        if (isRequiredStateElement("eDisposition.11") == true) 
        {
            if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
            {
                eDisposition["eDisposition.11"] = v3NOT_RECORDED;
                eDisposition["NumberofPatientsTransportedinthisEMSUnit"] = v3NOT_RECORDED;
            }
            else
            {
                eDisposition["eDisposition.11"] = v3NOT_REPORTING;
                eDisposition["NumberofPatientsTransportedinthisEMSUnit"] = v3NOT_REPORTING;
            }
        }
        else
        {
            eDisposition["eDisposition.11"] = v3NOT_APPLICABLE;
            eDisposition["NumberofPatientsTransportedinthisEMSUnit"] = v3NOT_APPLICABLE;
        }
    }
    else
    {
        if (eDisposition.HasTransport == true) 
        {
            eDisposition["eDisposition.11"] = _val[0];
            eDisposition["NumberofPatientsTransportedinthisEMSUnit"] = _val[0];
        }
        else 
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.11", Description: "Transport Number Patients/Transport Type Conflict  " })
            eDisposition["eDisposition.11"] = v3NOT_APPLICABLE;
            eDisposition["NumberofPatientsTransportedinthisEMSUnit"] = v3NOT_APPLICABLE;
        }
    };


    //eDisposition.13////
    _val = getValue(businessObject.elements, "eDisposition.13");
    if (_val == null)
    {
       eDisposition["eDisposition.13"] = null;
       eDisposition["HowPatientWasMovedtoAmbulance"] = null;
       v2Array.push({ section: "E20", element: "E20_11", val: null });
    }
    else
    {
        if (eDisposition.HasTransport == true) 
        {
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];        
            for (var i = 0; i < _val.length; i++) 
            {
                if(_val[i].trim().length !=0)
                {
                    arr1.push(_val[i]);            
                    arr2.push(setV2("eDisposition.13", _val[i]));
                    arr3.push(setCodeText("eDisposition.13", _val[i]));
                }
            }
            if(arr1.length >0)
            {        
                v2Array.push({ section: "E20", element: "E20_11", val: arr2.slice(0) });
                eDisposition["eDisposition.13"] = arr1.slice(0);
                eDisposition["HowPatientWasMovedtoAmbulance"] = arr3.slice(0);
            }
            else
            {
                v2Array.push({ section: "E20", element: "E20_11", val: null });
                eDisposition["eDisposition.13"] = null;
                eDisposition["HowPatientWasMovedtoAmbulance"] = null;
            }
        }
        else
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.12", Description: "How Patient Moved/Transport Type Conflict  " })
            v2Array.push({ section: "E20", element: "E20_11", val: null });
            eDisposition["eDisposition.13"] = null;
            eDisposition["HowPatientWasMovedtoAmbulance"] = null;
        }
    };

    //eDisposition.14////
    _val = getValue(businessObject.elements, "eDisposition.14");
    if (_val == null) 
    {
        eDisposition["eDisposition.14"] = null;
        eDisposition["PositionofPatientDuringTransport"] = null;
        v2Array.push({ section: "E20", element: "E20_12", val: null });
    }
    else
    {
        if (eDisposition.HasTransport == true) 
        {
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
        
            for (var i = 0; i < _val.length; i++) 
            {
                if (_val[i].trim().length != 0) 
                {
                    arr1.push(_val[i]);            
                    arr2.push(setV2("eDisposition.14", _val[i]));
                    arr3.push(setCodeText("eDisposition.14", _val[i]));
                }

            };
            if (arr1.length > 0) 
            {
                v2Array.push({ section: "E20", element: "E20_12", val:  arr2.slice(0) });
                eDisposition["eDisposition.14"] = arr1.slice(0);
                eDisposition["PositionofPatientDuringTransport"] = arr3.slice(0);
            }
            else
            {
                v2Array.push({ section: "E20", element: "E20_12", val:  null });
                eDisposition["eDisposition.14"] = null;
                eDisposition["PositionofPatientDuringTransport"] = null;
            }
        }
        else
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.14", Description: "Patient Position/Transport Type Conflict  " })
            v2Array.push({ section: "E20", element: "E20_12", val:  null });
            eDisposition["eDisposition.14"] = null;
            eDisposition["PositionofPatientDuringTransport"] = null;
        }
    };

    //eDisposition.15////
    _val = getValue(businessObject.elements, "eDisposition.15");
    if (_val == null) 
    {
        eDisposition["eDisposition.15"] = null;
        eDisposition["HowPatientWasTransportedFromAmbulance"] = null;
        v2Array.push({ section: "E20", element: "E20_13", val: null });
    }
    else
    {
        if (eDisposition.HasTransport == true) 
        {
            eDisposition["HowPatientWasTransportedFromAmbulance"] = _val[0];
            eDisposition["eDisposition.15"] = _val[0];
            v2Array.push({ section: "E20", element: "E20_13", val: setV2("eDisposition.15", _val[0]) });
        }
        else
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.15", Description: "Patient Transport From Ambulance/Transport Type Conflict  " })
            eDisposition["HowPatientWasTransportedFromAmbulance"] = null;
            eDisposition["eDisposition.15"] = null;
            v2Array.push({ section: "E20", element: "E20_13", val: null });
        }
    };

    //eDisposition.16////
    _val = getValue(_elementList, "eDisposition.16");
    if (_val == null) 
    {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            eDisposition["eDisposition.16"] = v3NOT_RECORDED;
            eDisposition["EMSTransportMethod"] = v3NOT_RECORDED;
        }
        else
        {
            eDisposition["eDisposition.16"] = v3NOT_APPLICABLE;
            eDisposition["EMSTransportMethod"] = v3NOT_APPLICABLE;
        }
    }
    else 
    {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            eDisposition["EMSTransportMethod"] = _val[0];
            eDisposition["eDisposition.16"] = _val[0];
        }
        else
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.16", Description: "Patient Transport Method/Transport Type Conflict  " })
            eDisposition["eDisposition.16"] = v3NOT_APPLICABLE;
            eDisposition["EMSTransportMethod"] = v3NOT_APPLICABLE;
        }
    };

    //eDisposition.17////
    _val = getValue(_elementList, "eDisposition.17");
    if (_val == null) 
    {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            eDisposition["eDisposition.17"] = v3NOT_RECORDED;
            eDisposition["TransportModefromScene"] = v3NOT_RECORDED;
            v2Array.push({ section: "E20", element: "E20_14", val: v2NOT_RECORDED });
        }
        else
        {
            eDisposition["eDisposition.17"] = v3NOT_APPLICABLE;
            eDisposition["TransportModefromScene"] = v3NOT_APPLICABLE;
            v2Array.push({ section: "E20", element: "E20_14", val: v2NOT_APPLICABLE});
        }
    }
    else 
    {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            eDisposition["TransportModefromScene"] = setCodeText("eDisposition.17", _val[0]) 
            v2Array.push({ section: "E20", element: "E20_14", val: setV2("eDisposition.17", _val[0]) });
            eDisposition["eDisposition.17"] = _val[0];
        }
        else
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.17", Description: "Additional Transport Mode/Transport Type Conflict  " })
            eDisposition["eDisposition.17"] = v3NOT_APPLICABLE;
            eDisposition["TransportModefromScene"] = v3NOT_APPLICABLE;
            v2Array.push({ section: "E20", element: "E20_14", val: v2NOT_APPLICABLE});
        }
    };

    //eDisposition.18////
    _val = getValue(businessObject.elements, "eDisposition.18");
    if (_val == null) 
    {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            eDisposition["eDisposition.17"] = v3NOT_RECORDED;
            eDisposition["AdditionalTransportModeDescriptors"] = v3NOT_RECORDED;
        }
        else
        {
            eDisposition["eDisposition.17"] = v3NOT_APPLICABLE;
            eDisposition["AdditionalTransportModeDescriptors"] = v3NOT_APPLICABLE;
        }
    }
    else
    {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {

            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _val.length; i++)
            {
                if (_val[i].trim().length != 0) 
                {
                    arr1.push(_val[i]);            
                    arr2.push(setCodeText("eDisposition.18", _val[i]));
                }
            };
            if (arr1.length > 0) {
                eDisposition["eDisposition.18"] = arr1.slice(0);
                eDisposition["AdditionalTransportModeDescriptors"] = arr2.slice(0);
            }
        }
        else
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.18", Description: "Additional Transport Method/Transport Type Conflict  " })
            eDisposition["eDisposition.18"] = v3NOT_APPLICABLE;
            eDisposition["AdditionalTransportModeDescriptors"] = v3NOT_APPLICABLE;
        }
    };

    //eDisposition.19////
    _val = getValue(_elementList, "eDisposition.19");
    if (_val == null) 
    {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            v2Array.push({ section: "E20", element: "E20_15", val: v2NOT_RECORDED });
            eDisposition["eDisposition.19"] = v3NOT_RECORDED;
            eDisposition["ConditionofPatientatDestination"] = v3NOT_RECORDED;
        }
        else
        {
            v2Array.push({ section: "E20", element: "E20_15", val: v2NOT_APPLICABLE });
            eDisposition["eDisposition.19"] = v3NOT_APPLICABLE;
            eDisposition["ConditionofPatientatDestination"] = v3NOT_APPLICABLE;
        }   
    }
    else 
    {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            v2Array.push({ section: "E20", element: "E20_15", val: setV2("eDisposition.19", _val[0])});
            eDisposition["eDisposition.19"] = _val[0];
            eDisposition["ConditionofPatientatDestination"] = (setCodeText("eDisposition.19", _val[0]));
        }
        else
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.19", Description: "Condition of Patientat Destination/Transport Type Conflict  " })
            v2Array.push({ section: "E20", element: "E20_15", val: v2NOT_APPLICABLE });
            eDisposition["eDisposition.19"] = v3NOT_APPLICABLE;
            eDisposition["ConditionofPatientatDestination"] = v3NOT_APPLICABLE;
        }
    };

    //eDisposition.20////
    _val = getValue(businessObject.elements, "eDisposition.20");
    if (_val == null) 
    {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            eDisposition["eDisposition.20"] = v3NOT_RECORDED;
            eDisposition["ReasonforChoosingDestination"] = v3NOT_RECORDED;
            v2Array.push({ section: "E20", element: "E20_16", val: v2NOT_RECORDED });
        }
        else
        {
            eDisposition["eDisposition.20"] = v3NOT_APPLICABLE
            eDisposition["ReasonforChoosingDestination"] = v3NOT_APPLICABLE;
            v2Array.push({ section: "E20", element: "E20_16", val: v2NOT_APPLICABLE });
        }
    }
    else
    {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
     
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _val.length; i++)
            {
                if (_val[i].trim().length != 0) 
                {
                    arr1.push(_val[i]);            
                    arr3.push(setV2("eDisposition.20", _val[i]));
                    arr3.push(setCodeText("eDisposition.20", _val[i]));                        
                }
            };
            if (arr1.length > 0) 
            {
                v2Array.push({ section: "E20", element: "E20_16", val:arr2.slice(0)  });
                eDisposition["eDisposition.20"] = arr1.slice(0);        
                eDisposition["ReasonforChoosingDestination"] = arr3.slice(0);      
            }
            else
            {  
                v2Array.push({ section: "E20", element: "E20_16", val:null  });
                eDisposition["eDisposition.20"] = null;        
                eDisposition["ReasonforChoosingDestination"] = null; 
            }
        }
        else
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.20", Description: "Reason for Choosing Destination/Transport Type Conflict  " })
            eDisposition["eDisposition.20"] = v3NOT_APPLICABLE
            eDisposition["ReasonforChoosingDestination"] = v3NOT_APPLICABLE;
            v2Array.push({ section: "E20", element: "E20_16", val: v2NOT_APPLICABLE });
        }
    };

    
    //eDisposition.21////
    _val = getValue(_elementList, "eDisposition.21");
    if (_val == null) 
    {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {

            eDisposition["eDisposition.21"] = v3NOT_RECORDED;
            eDisposition["TypeofDestination"] = v3NOT_RECORDED;
            v2Array.push({ section: "E20", element: "E20_17", val: v2NOT_RECORDED });
        }
        else
        {
            eDisposition["eDisposition.21"] = v3NOT_APPLICABLE;
            eDisposition["TypeofDestination"] = v3NOT_APPLICABLE;
            v2Array.push({ section: "E20", element: "E20_17", val: v2NOT_APPLICABLE });
        }
    }
    else 
    {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            eDisposition["eDisposition.21"] = _val[0];
            eDisposition["TypeofDestination"] = setCodeText("eDisposition.21", _val[0])
            v2Array.push({ section: "E20", element: "E20_17", val: setV2("eDisposition.21", _val[0])});
        }
        else
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.21", Description: "Type of Destination/Transport Type Conflict  " })
            eDisposition["eDisposition.21"] = v3NOT_APPLICABLE;
            eDisposition["TypeofDestination"] = v3NOT_APPLICABLE;
            v2Array.push({ section: "E20", element: "E20_17", val: v2NOT_APPLICABLE });
        }
    };

    //eDisposition.22////
    _val = getValue(_elementList, "eDisposition.22");
    if (_val == null) 
    {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            eDisposition["eDisposition.22"] = v3NOT_RECORDED;
            eDisposition["HospitalInPatientDestination"] = v3NOT_RECORDED;
        }
        else
        {
            eDisposition["eDisposition.22"] = v3NOT_APPLICABLE;
            eDisposition["HospitalInPatientDestination"] = v3NOT_APPLICABLE;
        }
    }
    else 
    {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            eDisposition["eDisposition.22"] = _val[0];
            eDisposition["HospitalInPatientDestination"] = setCodeText("eDisposition.22", _val[0]);
        }
        else
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.22", Description: "Hospital In Patient Destination/Transport Type Conflict  " })
            eDisposition["eDisposition.22"] = v3NOT_APPLICABLE;
            eDisposition["HospitalInPatientDestination"] = v3NOT_APPLICABLE;
        }
    };

    //eDisposition.23////
    _val = getValue(_elementList, "eDisposition.23");
    if (_val == null) 
    {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            eDisposition["eDisposition.23"] = v3NOT_RECORDED;
            eDisposition["HospitalDesignation"] = v3NOT_RECORDED;
        }
        else
        {
            eDisposition["eDisposition.23"] = v3NOT_APPLICABLE;
            eDisposition["HospitalDesignation"] = v3NOT_APPLICABLE;
        }
    }
    else 
    {
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
        {
            eDisposition["eDisposition.23"] = _val[0];
            eDisposition["HospitalDesignation"] = setCodeText("eDisposition.23", _val[0]);
        }
        else
        {
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
    else
    {
        _sectionIndex = getSectionIndex(businessObject, "eDisposition.HospitalTeamActivationGroup");    
        var bActivation = false;
        for (var x = 0; x < _sectionIndex.length; x++) 
        {
            //eDisposition.24////
            _val = getValue(businessObject.sections[xx].attributes.sections[_sectionIndexi].attributes.elements, "eDisposition.24");
            if (_val == null) 
            {

                HospitalTeamActivationGroup["eDisposition.24"] = v3NOT_RECORDED;
                HospitalTeamActivationGroup["DestinationTeamPreArrivalAlertorActivation"] = v3NOT_RECORDED;
            }
            else 
            {
                HospitalTeamActivationGroup["eDisposition.24"] = _val[0];
                HospitalTeamActivationGroup["DestinationTeamPreArrivalAlertorActivation"] =  setCodeText("eDisposition.24", _val[0]);;              
                if (_val[0] == "4224001")
                {
                    bActivation=false;
                }
                else
                {
                    bActivation=true;
                }
            };

            //eDisposition.25////
            _val = getValue(_elementList, "eDisposition.25");
            if (_val == null) 
            {
                if(bActivation = true)
                {
                    HospitalTeamActivationGroup["eDisposition.25"] = v3NOT_RECORDED;
                    HospitalTeamActivationGroup["DateTimeofDestinationPrearrivalAlertorActivation"] = v3NOT_RECORDED;
                }
                else
                {
                    HospitalTeamActivationGroup["eDisposition.25"] = v3NOT_APPLICABLE;
                    HospitalTeamActivationGroup["DateTimeofDestinationPrearrivalAlertorActivation"] = v3NOT_APPLICABLE;
                }
            }
            else 
            {               
                HospitalTeamActivationGroup["eDisposition.25"] = _val[0];
                HospitalTeamActivationGroup["DateTimeofDestinationPrearrivalAlertorActivation"] = _val[0];                
            }
            HospitalTeamActivationGroupArray.push(HospitalTeamActivationGroup);
        }
        eDisposition.HospitalTeamActivationGroup = HospitalTeamActivationGroupArray;
    };
            
            
        //eDisposition.26////
        _val = getValue(_elementList, "eDisposition.26");
        if (_val == null) 
        {
            eDisposition["eDisposition.25"] = null;
            eDisposition["DispositionInstructionsProvided"] = null;
        }
        else 
        {
            if (eDisposition.HasTransport == true) 
            {
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _val.length; i++)
            {
                if (_val[i].trim().length != 0) 
                {                   
                    arr1.push(_val[i]);                                
                    arr3.push(setCodeText("eDisposition.26", _val[i])); 
                }
            };
            if (arr1.length > 0) 
            {               
                eDisposition["eDisposition.26"] =arr1.slice(0);
                eDisposition["DispositionInstructionsProvided"] =arr3.slice(0);
            }
            else
            {
                eDisposition["eDisposition.25"] = null;
                eDisposition["DispositionInstructionsProvided"] = null;
            }
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

        function setCodeText(NEMSISElementNumber, valueArray) {
            var _return = [];
            switch (NEMSISElementNumber) {
                case "eDisposition.12":
                    if (eDisposition334_12[valueArray] == undefined) {
                        _return = valueArray + " UNDEFINED";
                    }
                    else {
                        _return = eDisposition334_12[valueArray];
                    }
                    break;
                case "eDisposition.13":
                    if (eDisposition334_13[valueArray] == undefined) {
                        _return = valueArray + " UNDEFINED";
                    }
                    else {
                        _return = eDisposition334_13[valueArray];
                    }
                    break;

                case "eDisposition.14":
                    if (eDisposition334_14[valueArray] == undefined) {
                        _return = valueArray + " UNDEFINED";
                    }
                    else {
                        _return = eDisposition334_14[valueArray];
                    }
                    break;

                case "eDisposition.15":
                    if (eDisposition334_15[valueArray] == undefined) {
                        _return = valueArray + " UNDEFINED";
                    }
                    else {
                        _return = eDisposition334_15[valueArray];
                    }
                    break;

                case "eDisposition.16":
                    if (eDisposition334_16[valueArray] == undefined) {
                        _return = valueArray + " UNDEFINED";
                    }
                    else {
                        _return = eDisposition334_16[valueArray];
                    }
                    break;

                case "eDisposition.17":
                    if (eDisposition334_17[valueArray] == undefined) {
                        _return = valueArray + " UNDEFINED";
                    }
                    else {
                        _return = eDisposition334_17[valueArray];
                    }
                    break;

                case "eDisposition.18":
                    if (eDisposition334_18[valueArray] == undefined) {
                        _return = valueArray + " UNDEFINED";
                    }
                    else {
                        _return = eDisposition334_18[valueArray];
                    }
                    break;

                case "eDisposition.19":
                    if (eDisposition334_19[valueArray] == undefined) {
                        _return = valueArray + " UNDEFINED";
                    }
                    else {
                        _return = eDisposition334_19[valueArray];
                    }
                    break;

                case "eDisposition.20":
                    if (eDisposition334_20[valueArray] == undefined) {
                        _return = valueArray + " UNDEFINED";
                    }
                    else {
                        _return = eDisposition334_20[valueArray];
                    }
                    break;

                case "eDisposition.21":
                    if (eDisposition334_21[valueArray] == undefined) {
                        _return = valueArray + " UNDEFINED";
                    }
                    else {
                        _return = eDisposition334_21[valueArray];
                    }
                    break;

                case "eDisposition.22":
                    if (eDisposition334_22[valueArray] == undefined) {
                        _return = valueArray + " UNDEFINED";
                    }
                    else {
                        _return = eDisposition334_22[valueArray];
                    }
                    break;

                
                case "eDisposition.24":
                    if (eDisposition334_24[valueArray] == undefined) {
                        _return = valueArray + " UNDEFINED";
                    }
                    else {
                        _return = eDisposition334_24[valueArray];
                    }
                    break;

                case "eDisposition.26":
                    if (eDisposition334_26[valueArray] == undefined) {
                        _return = valueArray + " UNDEFINED";
                    }
                    else {
                        _return = eDisposition334_26[valueArray];
                    }
                    break;
                default:
                    _return = " UNDEFINED";
            }
            return _return;

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

        var eDisposition334_14 = 
            {
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

        var eDisposition334_15 = 
            {
                "9909001" : "Assisted/Walk", 
                "9909003" : "Backboard", 
                "9909005" : "Chair", 
                "9909007" : "Carried", 
                "9909009" : "Other (Not Listed)", 
                "9909011" : "Stairchair", 
                "9909013" : "Stretcher", 
                "9909015" : "Wheelchair"
            };

        var eDisposition334_16 = 
            {
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

        var eDisposition334_22 = 
            {
                "4226003" : "Contact 911 or see your Doctor if problem worsens", 
                "4226005" : "Other Not Listed (Described in Narrative)", 
                "4226007" : "Problem Specific Instructions Provided", 
                "4226009" : "See Your Doctor or the Emergency Department immediately", 
                "4226011" : "See Your Doctor or the Emergency Department in the next 24 hours", 
                "4226013" : "See Your Doctor or the Emergency Department in the next 4 hours", 
                "4226015" : "See Your Doctor within the next one week", 
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