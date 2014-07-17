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

var seteAirwayGroup = function (businessObject) {
    var AirwayGroup= new Object();
    var ConfirmationGroup = new Object();
    var ConfirmationGroupArray = new Array();

    for (var a = 0; a < businessObject.sections.length; a++)
    {        
        console.log(businessObject);
        
        /////eAirway.01
        _val = geteAirwayValue(businessObject.sections[a].attributes.elements, "eAirway.01");
        if (_val == null) 
        {
            if (isRequiredStateElement("eAirway.01") == true) 
            {
                AirwayGroup["IndicationsforInvasiveAirway"] = v3NOT_RECORDED;
                AirwayGroup["eAirway.01"] = v3NOT_RECORDED;
            }
            else 
            {
                AirwayGroup["eAirway.01"] = v3NOT_REPORTING;
                AirwayGroup["IndicationsforInvasiveAirway"] = v3NOT_REPORTING;
            }
        }
        else 
        {
            AirwayGroup["eAirway.01"] = _val[0];
            AirwayGroup["IndicationsforInvasiveAirway"] = setCodeText("eAirway.01", _val[0]);

        };

        //////////////////////////////
        _sectionIndex = getSectionIndex(businessObject, "dAgency.AgencyServiceGroup");
        for (var x = 0; x < _sectionIndex.length; x++) 
        {
         
            var ConfirmationGroupArray = [];
            /////eAirway.02
            _val = geteAirwayValue(groupObject, "eAirway.02");
            if (_val == null) 
            {
                if (isRequiredStateElement("eAirway.02") == true)
                {
                    ConfirmationGroup["eAirway.02"] = v3NOT_RECORDED;
                    ConfirmationGroup["DateTimeAirwayDevicePlacementConfirmation"] = v3NOT_RECORDED;
                }
                else 
                {
                    ConfirmationGroup["eAirway.02"] = v3NOT_REPORTING;
                    ConfirmationGroup["DateTimeAirwayDevicePlacementConfirmation"] = v3NOT_REPORTING;                    
                }
            }
            else
            {
                ConfirmationGroup["eAirway.02"] = _val[0];
                ConfirmationGroup["DateTimeAirwayDevicePlacementConfirmation"] = setCodeText("eAirway.02", _val[0]);
            };

            /////eAirway.03
            _val = geteAirwayValue(groupObject, "eAirway.03");
            if (_val == null)
            {
                if (isRequiredStateElement("eAirway.03") == true)
                {
                    ConfirmationGroup["eAirway.03"] = v3NOT_RECORDED;
                    ConfirmationGroup["AirwayDeviceBeingConfirmed"] = v3NOT_RECORDED;
                }
                else 
                {
                    ConfirmationGroup["eAirway.03"] = v3NOT_REPORTING;
                    ConfirmationGroup["AirwayDeviceBeingConfirmed"] = v3NOT_REPORTING;
                }
            }
            else
            {
                ConfirmationGroup["eAirway.03"] = _val[0];
                ConfirmationGroup["AirwayDeviceBeingConfirmed"] = setCodeText("eAirway.03", _val[0]);
            };

            /////eAirway.04
            _val = geteAirwayValue(groupObject, "eAirway.04");
            if (_val == null)
            {
                if (isRequiredStateElement("eAirway.04") == true)
                {
                    ConfirmationGroup["eAirway.04"] = v3NOT_RECORDED;
                    ConfirmationGroup["AirwayDevicePlacementConfirmedMethod"] = v3NOT_RECORDED;
                }
                else
                {
                    ConfirmationGroup["eAirway.04"] = v3NOT_REPORTING;
                    ConfirmationGroup["AirwayDevicePlacementConfirmedMethod"] = v3NOT_REPORTING;
                }
            }
            else 
            {
                arr1 = _val;
                arr2 = _val;
                for (var i = 0; i < _val.length; i++) 
                {
                    arr1.push(_val[i]);
                    arr2.push(setCodeText("eAirway.04", _val[i]));
                }
                ConfirmationGroup["eAirway.04"] = arr1.slice(0);
                ConfirmationGroup["AirwayDevicePlacementConfirmedMethod"] = arr2.slice(0);
            };

            /////eAirway.05
            _val = geteAirwayValue(groupObject, "eAirway.05");
            if (_val == null) 
            {
                ConfirmationGroup["eAirway.04"] = null;
                ConfirmationGroup["TubeDepth"] = null;
            }
            else 
            {
                ConfirmationGroup["eAirway.04"] = _val[0];
                ConfirmationGroup["TubeDepth"] = _val[0];
            };

            /////eAirway.06
            _val = geteAirwayValue(groupObject, "eAirway.06");
            if (_val == null)
            {
                if (isRequiredStateElement("eAirway.06") == true)
                {                    
                    ConfirmationGroup["eAirway.06"] = v3NOT_RECORDED;
                    ConfirmationGroup["TypeofIndividualConfirmingAirwayDevicePlacement"] = v3NOT_RECORDED;
                }
                else
                {                   
                    ConfirmationGroup["eAirway.06"] = v3NOT_REPORTING;
                    ConfirmationGroup["TypeofIndividualConfirmingAirwayDevicePlacement"] = v3NOT_REPORTING;
                }
            }
            else
            {
                ConfirmationGroup["eAirway.06"] = _val[0];
                ConfirmationGroup["TypeofIndividualConfirmingAirwayDevicePlacement"] = _val[0];
            };

            /////eAirway.07
            _val = geteAirwayValue(groupObject, "eAirway.07");
            if (_val == null)
            {
                if (isRequiredStateElement("eAirway.07") == true)
                {                 
                    ConfirmationGroup["eAirway.07"] = v3NOT_RECORDED;
                    ConfirmationGroup["CrewMemberID"] = v3NOT_RECORDED;
                }
                else
                {
                    ConfirmationGroup["eAirway.07"] = v3NOT_REPORTING;
                    ConfirmationGroup["CrewMemberID"] = v3NOT_REPORTING;
                }
            }
            else
            {
                ConfirmationGroup["eAirway.07"] = _val[0];
                ConfirmationGroup["CrewMemberID"] = setCodeText("eAirway.07", _val[0]);                
            };

            /////eAirway.08
            _val = geteAirwayValue(groupObject, "eAirway.08");
            if (_val == null)
            {
                if (isRequiredStateElement("eAirway.08") == true)
                {
                    ConfirmationGroup["eAirway.08"] = v3NOT_RECORDED;
                    ConfirmationGroup["AirwayComplicationsEncountered"] = v3NOT_RECORDED;
                }
                else 
                {
                    ConfirmationGroup["eAirway.08"] = v3NOT_REPORTING;
                    ConfirmationGroup["AirwayComplicationsEncountered"] = v3NOT_REPORTING;
                }
            }
            else 
            {
                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _val.length; i++) 
                {
                    arr1.push(_val[i]);
                    arr2.push(setCodeText("eAirway.08", _val[i]));
                }
                ConfirmationGroup["eAirway.08"] = arr1.slice(0);
                ConfirmationGroup["AirwayComplicationsEncountered"] = arr2.slice(0);
            };

            /////eAirway.09
            _val = geteAirwayValue(groupObject, "eAirway.09");
            if (_val == null)
            {
                if (isRequiredStateElement("eAirway.09") == true)
                {
                    ConfirmationGroup["eAirway.09"] = v3NOT_RECORDED;
                    ConfirmationGroup["SuspectedReasonsforFailedAirwayProcedure"] = v3NOT_RECORDED;
                }
                else
                {
                    ConfirmationGroup["eAirway.09"] = v3NOT_REPORTING;
                    ConfirmationGroup["SuspectedReasonsforFailedAirwayProcedure"] = v3NOT_REPORTING;
                }
            }
            else 
            {
                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _val.length; i++)
                {
                    arr1.push(_val[i]);
                    arr2.push(setCodeText("eAirway.09", _val[i]));                    
                }
                ConfirmationGroup["eAirway.09"] = arr1.slice(0);
                ConfirmationGroup["SuspectedReasonsforFailedAirwayProcedure"] = arr2.slice(0);
            };
            ConfirmationGroupArray.push(ConfirmationGroup);
        };
        
        ///////////////////////////


        /////eAirway.10
        _val = geteAirwayValue(businessObject.sections[a].attributes.elements, "eAirway.10");
        if (_val == null) 
        {
            AirwayGroup["eAirway.10"] = null;
            AirwayGroup["DateTimeDecisiontoManagethePatientwithanInvasiveAirway"] = null;
        }
        else 
        {
            AirwayGroup["eAirway.10"] = _val[0];
            AirwayGroup["DateTimeDecisiontoManagethePatientwithanInvasiveAirway"] = _val;

        };

        /////eAirway.11
        _val = geteAirwayValue(businessObject.sections[a].attributes.elements, "eAirway.11");
        if (_val == null) 
        {
            AirwayGroup["eAirway.11"] = null;
            AirwayGroup["DateTimeInvasiveAirwayPlacementAttemptsAbandoned"] = null;
        }
        else 
        {
            AirwayGroup["eAirway.11"] = _val[0];
            AirwayGroup["DateTimeInvasiveAirwayPlacementAttemptsAbandoned"] = _val[0];
        };

        AirwayGroup.ConfirmationGroup = ConfirmationGroup;
        eAirway.AirwayGroup = AirwayGroup;
        return eAirway;

    };
    
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
        var _val = null;
        console.log(groupObject)
        console.log(groupObject.length)
        var eAirwayConfirmationGroup = new Object;

      
    return dAirwayv3XMLArray;

};
  
    var setNotApplicableAll = function(businessObject)
    {
        _retArray.push("<eAirway>" + '\n');
        _retArray.push('\t' + "<eAirway.AirwayGroup>" + '\n');
        

        if (isRequiredStateElement("eAirway.01") == true) {
            _retArray.push('\t\t' + "<eAirway.01>" + NIL_V3NOT_APPLICABLE + '\n');
        }

        if (isRequiredStateElement("eAirway.02") == true) {
            _retArray.push('\t\t' + "<eAirway.02>" + NIL_V3NOT_APPLICABLE + '\n');
        }

        if (isRequiredStateElement("eAirway.03") == true) {
            _retArray.push('\t\t' + "<eAirway.03>" + NIL_V3NOT_APPLICABLE + '\n');
        }

        if (isRequiredStateElement("eAirway.04") == true) {
            _retArray.push('\t\t' + "<eAirway.04>" + NIL_V3NOT_APPLICABLE + '\n');
        }

        if (isRequiredStateElement("eAirway.06") == true) {
            _retArray.push('\t\t' + "<eAirway.06>" + NIL_V3NOT_APPLICABLE + '\n');
        }

        if (isRequiredStateElement("eAirway.07") == true) {
            _retArray.push('\t\t' + "<eAirway.07>" + NIL_V3NOT_APPLICABLE + '\n');
        }

        if (isRequiredStateElement("eAirway.08") == true) {
            _retArray.push('\t\t' + "<eAirway.81>" + NIL_V3NOT_APPLICABLE + '\n');
        }

        if (isRequiredStateElement("eAirway.09") == true) {
            _retArray.push('\t\t' + "<eAirway.09>" + NIL_V3NOT_APPLICABLE + '\n');
        }
        

        _retArray.push('\t' + "</eAirway.AirwayGroup>" + '\n');
        _retArray.push("</eAirway>" + '\n');
       // console.log(_retArray);
        return _retArray;

    }
    

 
   

    var isRequiredStateElement = function(elementID)
    {
        return true;
    };
    var getdAgencyValue = function(businessObject, valueObject)
    {
        //console.log(businessObject.length);
        var _retValue = null;
        var _bFound = false;
        i=0;
        while (i<businessObject.length)
        { 
            if(_bFound == false)
            {
                if(businessObject[i].attributes.title ==  valueObject)
                {
                    _bFound = true;
                    if(businessObject[i].attributes.value == undefined)
                    {
					
                        _retVal = null;
                    }
                    else
                    {
                        _retVal = businessObject[i].attributes.value;
                    }
                }
            }
            i++;
        }
        return _retVal;
    };

    function setCodeText(NEMSISElementNumber, valueArray) {
        var _return = [];
        switch (NEMSISElementNumber) 
        {
            case "eAirway.01":
                if (eAirway334_01[valueArray] == undefined) 
                {
                    _return = valueArray + " UNDEFINED";
                }
                else 
                {
                    _return = eAirway334_01[valueArray];
                }
                break;
            case "eAirway.03":
                if (eAirway334_03[valueArray] == undefined) 
                {
                    _return = valueArray + " UNDEFINED";
                }
                else 
                {
                    _return = eAirway334_03[valueArray];
                }
                break;
            case "eAirway.04":
                if (eAirway334_04[valueArray] == undefined) 
                {
                    _return = valueArray + " UNDEFINED";
                }
                else 
                {
                    _return = eAirway334_04[valueArray];
                }
                break;            
            case "eAirway.06":
                if (eAirway334_06[valueArray] == undefined) 
                {
                    _return = valueArray + " UNDEFINED";
                }
                else 
                {
                    _return = eAirway334_06[valueArray];
                }
                break;            
            case "eAirway.08":
                if (eAirway334_08[valueArray] == undefined) 
                {
                    _return = valueArray + " UNDEFINED";
                }
                else 
                {
                    _return = eAirway334_08[valueArray];
                }
                break;  
            case "eAirway.09":
                if (eAirway334_09[valueArray] == undefined) 
                {
                    _return = valueArray + " UNDEFINED";
                }
                else 
                {
                    _return = eAirway334_09[valueArray];
                }
                break;  

            default:
                _return = " UNDEFINED";
        }
        return _return;

    }
  
var eAirway334_01 = {
     "4001001" : "Adequate Airway Reflexes/Effort; Potential for Compromise", 
    "4001003" : "Airway Reflex Compromised", 
    "4001005" : "Apnea or Agonal Respirations", 
    "4001007" : "Illness Involving Airway", 
    "4001009" : "Injury Involving Airway", 
    "4001011" : "Other (Not Listed)", 
    "4001013" : "Ventilatory Effort Compromised"
    };
var eAirway334_03 = {
    "4003001" : "Cricothyrotomy Tube", 
    "4003003" : "Endotracheal Tube", 
    "4003005" : "Other-Invasive Airway", 
    "4003007" : "SAD-Combitube", 
    "4003009" : "SAD-King", 
    "4003011" : "SAD-LMA", 
    "4003013" : "SAD-Other", 
    "4003015" : "Tracheostomy Tube"
    }

var eAirway334_04 = {
    "4004001" : "Auscultation", 
    "4004003" : "Bulb/Syringe Aspiration", 
    "4004005" : "Colorimetric ETCO2", 
    "4004007" : "Condensation in Tube", 
    "4004009" : "Digital (Numeric) ETCO2", 
    "4004011" : "Direct Re-Visualization of Tube in Place", 
    "4004013" : "Endotracheal Tube Whistle (BAAM; etc)", 
    "4004015" : "Other (Not Listed)", 
    "4004017" : "Visualization of Vocal Cords", 
    "4004019" : "Waveform ETCO2"
    };

var eAirway334_06 = {
    "4006001" : "Another Person on the Same Crew", 
    "4006003" : "Other (Not Listed)", 
    "4006005" : "Person Performing Intubation", 
    "4006007" : "Receiving Air Medical/EMS Crew", 
    "4006009" : "Receiving Hospital Team"
    };

var eAirway334_08 = {
    "4008001" : "Adverse Event from Facilitating Drugs", 
    "4008003" : "Bradycardia (<50)", 
    "4008005" : "Cardiac Arrest", 
    "4008007" : "Esophageal Intubation-Delayed Detection (After Tube Secured)", 
    "4008009" : "Esophageal Intubation-Detected in Emergency Department", 
    "4008011" : "Failed Intubation Effort", 
    "4008013" : "Injury or Trauma to Patient from Airway Management Effort", 
    "4008015" : "Other (Not Listed)", 
    "4008017" : "Oxygen Desaturation (<90%)", 
    "4008019" : "Patient Vomiting/Aspiration", 
    "4008021" : "Tube Dislodged During Transport/Patient Care", 
    "4008023" : "Tube Was Not in Correct Position when EMS Crew/Team Assumed Care of the Patient"
};

var eAirway334_09 = {
    "4009001" : "Difficult Patient Airway Anatomy", 
    "4009003" : "ETI Attempted; but Arrived At Destination Facility Before Accomplished", 
    "4009005" : "Facial or Oral Trauma", 
    "4009007" : "Inability to Expose Vocal Cords", 
    "4009009" : "Inadequate Patient Relaxation/Presence of Protective Airway Reflexes", 
    "4009011" : "Jaw Clenched (Trismus)", 
    "4009013" : "Other (Not Listed)", 
    "4009015" : "Poor Patient Access", 
    "4009017" : "Secretions/Blood/Vomit", 
    "4009019" : "Unable to Position or Access Patient", 
    }