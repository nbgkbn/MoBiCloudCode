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
    if (businessObject.name != "eAirway") {
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

    
    var AirwayGroupArray = [];
    _retArray.push("<eAirway>" + '\n');
    OLAPArray.push("<eAirway>" + '\n');
    for (var a = 0; a < businessObject.sections.length; a++) {
        _retArray.push('\t' + "<eAirway.AirwayGroup>");
        OLAPArray.push('\t' + "<eAirway.AirwayGroup>");
        console.log(businessObject);
        
        /////eAirway.01
        _val = geteAirwayValue(businessObject.sections[a].attributes.elements, "eAirway.01");
        if (_val == null) 
        {
            if (isRequiredStateElement("eAirway.01") == true) 
            {
                _retArray.push('\t\t' + "<eAirway.01>" + NIL_V3NOT_RECORDED + '\n');
                AirwayGroupArray.push(v3NOT_RECORDED);
                OLAPArray.push('\t\t' + "<IndicationsforInvasiveAirway>" + V3NOT_RECORDED + "</IndicationsforInvasiveAirway>" + '\n');
            }
            else 
            {
                _retArray.push('\t\t' + "<eAirway.01>" + NIL_V3NOT_REPORTING + '\n');
                OLAPArray.push('\t\t' + "<IndicationsforInvasiveAirway>" + v3NOT_REPORTING + "</IndicationsforInvasiveAirway>" + '\n');
                AirwayGroupArray.push(v3NOT_REPORTING);
            }
        }
        else 
        {
            _retArray.push('\t\t' + "<eAirway.01>" + _val[0] + "</eAirway.01>" + '\n');
            OLAPArray.push('\t\t' + "<IndicationsforInvasiveAirway>" + _val[0] + "</IndicationsforInvasiveAirway>" + '\n');
        };

        //////////////////////////////
        _sectionIndex = getSectionIndex(businessObject, "dAgency.AgencyServiceGroup");
        for (var x = 0; x < _sectionIndex.length; x++) 
        {
            _retArray.push('\t\t\t' + "<eAirway.ConfirmationGroup>" + '\n')
            OLAPArray.push('\t\t\t' + "<eAirway.ConfirmationGroup>" + '\n')

            /////eAirway.02
            _val = geteAirwayValue(groupObject, "eAirway.02");
            if (_val == null) 
            {
                if (isRequiredStateElement("eAirway.02") == true)
                {
                    _retArray.push('\t\t\t\t' + "<eAirway.02>" + NIL_V3NOT_RECORDED + '\n');
                    ConfirmationGroup["eAirway.02"] =v3NOT_RECORDED;
                    OLAPArray.push('\t\t\t\t' + "<DateTimeAirwayDevicePlacementConfirmation>" + v3NOT_RECORDED + "</DateTimeAirwayDevicePlacementConfirmation>" + '\n');
                }
                else 
                {
                    _retArray.push('\t\t\t\t' + "<eAirway.02>" + NIL_V3NOT_REPORTING + '\n');
                    ConfirmationGroup["eAirway.02"] =v3NOT_REPORTING;
                    OLAPArray.push('\t\t\t\t' + "<DateTimeAirwayDevicePlacementConfirmation>" + v3NOT_REPORTING + "</DateTimeAirwayDevicePlacementConfirmation>" + '\n');
                }
            }
            else
            {
                _retArray.push('\t\t\t\t' + "<eAirway.02>" + _val[0] + "</eAirway.02>" + '\n');
                OLAPArray.push('\t\t\t\t' + "<IndicationsforInvasiveAirway>" + _val[0] + "</IndicationsforInvasiveAirway>" + '\n');
            };

            /////eAirway.03
            _val = geteAirwayValue(groupObject, "eAirway.03");
            if (_val == null)
            {
                if (isRequiredStateElement("eAirway.03") == true)
                {
                    _retArray.push('\t\t\t\t' + "<eAirway.03>" + NIL_V3NOT_RECORDED + '\n');
                    OLAPArray.push('\t\t\t\t' + "<AirwayDeviceBeingConfirmed>" + v3NOT_RECORDED + "</AirwayDeviceBeingConfirmed>" + '\n');
                    ConfirmationGroup["eAirway.03"] =v3NOT_RECORDED;
                }
                else 
                {
                    _retArray.push('\t\t\t\t' + "<eAirway.03>" + NIL_V3NOT_REPORTING + '\n');
                    ConfirmationGroup["eAirway.03"] =v3NOT_REPORTING;
                    OLAPArray.push('\t\t\t\t' + "<AirwayDeviceBeingConfirmed>" + v3NOT_REPORTING + "</AirwayDeviceBeingConfirmed>" + '\n');
                }
            }
            else
            {
                _retArray.push('\t\t\t\t' + "<eAirway.03>" + _val[0] + "</eAirway.03>" + '\n');
                OLAPArray.push('\t\t\t\t' + "<AirwayDeviceBeingConfirmed>" + _val[0] + "</AirwayDeviceBeingConfirmed>" + '\n');
            };

            /////eAirway.04
            _val = geteAirwayValue(groupObject, "eAirway.04");
            if (_val == null)
            {
                if (isRequiredStateElement("eAirway.04") == true)
                {
                    _retArray.push('\t\t\t\t\t' + "<eAirway.04>" + NIL_V3NOT_RECORDED + '\n');
                    OLAPArray.push('\t\t\t\t' + "<AirwayDevicePlacementConfirmedMethod>" + v3NOT_RECORDED + "</AirwayDevicePlacementConfirmedMethod>" + '\n');
                    ConfirmationGroup["eAirway.04"] =v3NOT_RECORDED;
                }
                else
                {
                    _retArray.push('\t\t\t\t\t' + "<eAirway.04>" + NIL_V3NOT_REPORTING + '\n');
                    ConfirmationGroup["eAirway.04"] =v3NOT_REPORTING;
                    OLAPArray.push('\t\t\t\t' + "<AirwayDevicePlacementConfirmedMethod>" + v3NOT_REPORTING + "</AirwayDevicePlacementConfirmedMethod>" + '\n');
                }
            }
            else 
            {
                arr1 = _val;
                for (var i = 0; i < _val.length; i++) 
                {
                    _retArray.push('\t' + '\t' + "<eAirway.04>" + _val[i] + "<eAirway.04>" + '\n');
                    OLAPArray.push('\t\t\t\t' + "<AirwayDevicePlacementConfirmedMethod>" +  _val[i] + "</AirwayDevicePlacementConfirmedMethod>" + '\n');
                }
                ConfirmationGroup["eAirway.04"] = arr1.slice(0);
            };

            /////eAirway.05
            _val = geteAirwayValue(groupObject, "eAirway.05");
            if (_val == null) 
            {
                OLAPArray.push('\t\t\t\t' + "<TubeDepth>" +  null + "</TubeDepth>" + '\n');
                _retArray.push('\t\t\t\t' + "<eAirway.05>" + null + "</eAirway.05>" + '\n');
            }
            else 
            {
                OLAPArray.push('\t\t\t\t' + "<TubeDepth>" +  _val[i] + "</TubeDepth>" + '\n');
                _retArray.push('\t\t\t\t' + "<eAirway.05>" + _val[0] + "</eAirway.05>" + '\n');
            };

            /////eAirway.06
            _val = geteAirwayValue(groupObject, "eAirway.06");
            if (_val == null)
            {
                if (isRequiredStateElement("eAirway.06") == true)
                {
                    _retArray.push('\t\t\t\t' + "<eAirway.06>" + NIL_V3NOT_RECORDED + '\n');
                    ConfirmationGroup["eAirway.06"] =v3NOT_RECORDED;
                    OLAPArray.push('\t\t\t\t' + "<TypeofIndividualConfirmingAirwayDevicePlacement>" + v3NOT_RECORDED + "</TypeofIndividualConfirmingAirwayDevicePlacement>" + '\n');
                }
                else
                {
                    _retArray.push('\t\t\t\t' + "<eAirway.06>" + NIL_V3NOT_REPORTING + '\n');
                    ConfirmationGroup["eAirway.06"] =v3NOT_REPORTING;
                    OLAPArray.push('\t\t\t\t' + "<TypeofIndividualConfirmingAirwayDevicePlacement>" + v3NOT_REPORTING + "</TypeofIndividualConfirmingAirwayDevicePlacement>" + '\n');
                }
            }
            else
            {
                OLAPArray.push('\t\t\t\t' + "<TypeofIndividualConfirmingAirwayDevicePlacement>" + _val[0] + "</TypeofIndividualConfirmingAirwayDevicePlacement>" + '\n');
                _retArray.push('\t\t\t\t' + "<eAirway.06>" + _val[0] + "</eAirway.06>" + '\n');
            };

            /////eAirway.07
            _val = geteAirwayValue(groupObject, "eAirway.07");
            if (_val == null)
            {
                if (isRequiredStateElement("eAirway.07") == true)
                {
                    _retArray.push('\t\t\t\t' + "<eAirway.07>" + NIL_V3NOT_RECORDED + '\n');
                    ConfirmationGroup["eAirway.07"] =v3NOT_RECORDED;
                    OLAPArray.push('\t\t\t\t' + "<CrewMemberID>" + v3NOT_RECORDED + "</CrewMemberID>" + '\n');
                }
                else
                {
                    OLAPArray.push('\t\t\t\t' + "<CrewMemberID>" + v3NOT_REPORTING+ "</CrewMemberID>" + '\n');
                    _retArray.push('\t\t\t\t' + "<eAirway.07>" + NIL_V3NOT_REPORTING + '\n');
                    ConfirmationGroup["eAirway.07"] =v3NOT_REPORTING;
                }
            }
            else
            {
                _retArray.push('\t\t\t\t' + "<eAirway.07>" + _val[0] + "</eAirway.07>" + '\n');
                OLAPArray.push('\t\t\t\t' + "<CrewMemberID>" + _val[0]+ "</CrewMemberID>" + '\n');
            };

            /////eAirway.08
            _val = geteAirwayValue(groupObject, "eAirway.08");
            if (_val == null)
            {
                if (isRequiredStateElement("eAirway.08") == true)
                {
                    _retArray.push('\t\t\t\t\t' + "<eAirway.08>" + NIL_V3NOT_RECORDED + '\n');
                    ConfirmationGroup["eAirway.08"] =v3NOT_RECORDED;
                    OLAPArray.push('\t\t\t\t' + "<AirwayComplicationsEncountered>" + v3NOT_RECORDED + "</AirwayComplicationsEncountered>" + '\n');
                }
                else 
                {
                    OLAPArray.push('\t\t\t\t' + "<AirwayComplicationsEncountered>" + v3NOT_REPORTING+ "</AirwayComplicationsEncountered>" + '\n');
                    _retArray.push('\t\t\t\t\t' + "<eAirway.08>" + NIL_V3NOT_REPORTING + '\n');
                    ConfirmationGroup["eAirway.08"] =v3NOT_REPORTING;
                }
            }
            else 
            {
                arr1 = _val;
                for (var i = 0; i < _val.length; i++) 
                {
                    _retArray.push('\t' + '\t' + "<eAirway.08>" + _val[i] + "<eAirway.08>" + '\n');
                    OLAPArray.push('\t\t\t\t' + "<AirwayComplicationsEncountered>" + _val[i]+ "</AirwayComplicationsEncountered>" + '\n');
                }
                ConfirmationGroup["eAirway.08"] = arr1.slice(0);
            };

            /////eAirway.09
            _val = geteAirwayValue(groupObject, "eAirway.09");
            if (_val == null)
            {
                if (isRequiredStateElement("eAirway.09") == true) {
                    _retArray.push('\t\t\t\t\t' + "<eAirway.09>" + NIL_V3NOT_RECORDED + '\n');
                    ConfirmationGroup["eAirway.09"] =v3NOT_RECORDED;
                    OLAPArray.push('\t\t\t\t' + "<SuspectedReasonsforFailedAirwayProcedure>" + v3NOT_RECORDED + "</SuspectedReasonsforFailedAirwayProcedure>" + '\n');
                }
                else {
                    _retArray.push('\t\t\t\t\t' + "<eAirway.09>" + NIL_V3NOT_REPORTING + '\n');
                    OLAPArray.push('\t\t\t\t' + "<SuspectedReasonsforFailedAirwayProcedure>" + v3NOT_REPORTING+ "</SuspectedReasonsforFailedAirwayProcedure>" + '\n');
                    ConfirmationGroup["eAirway.09"] =v3NOT_REPORTING;
                }
            }
            else 
            {
                arr1 = _val;
                for (var i = 0; i < _val.length; i++) 
                {
                    _retArray.push('\t\t\t\t' + "<eAirway.09>" + _val[i] + "<eAirway.09>" + '\n');
                    OLAPArray.push('\t\t\t\t' + "<SuspectedReasonsforFailedAirwayProcedure>" + _val[i]+ "</SuspectedReasonsforFailedAirwayProcedure>" + '\n');
                }
                ConfirmationGroup["eAirway.09"] = arr1.slice(0);
            };

            _retArray.push('\t\t\t' + "</eAirway.ConfirmationGroup>" + '\n')
            OLAPArray.push('\t\t\t' + "</eAirway.ConfirmationGroup>" + '\n')
        };

        ///////////////////////////


        /////eAirway.10
        _val = geteAirwayValue(businessObject.sections[a].attributes.elements, "eAirway.10");
        if (_val == null) 
        {
            _retArray.push('\t\t\t' + "<eAirway.10>" + null + "</eAirway.10>" + '\n');
            OLAPArray.push('\t\t\t' + "<DateTimeDecisiontoManagethePatientwithanInvasiveAirway>" + null + "</DateTimeDecisiontoManagethePatientwithanInvasiveAirway>" + '\n');
        }
        else 
        {
            OLAPArray.push('\t\t\t' + "<DateTimeDecisiontoManagethePatientwithanInvasiveAirway>" + _val[0]  + "</DateTimeDecisiontoManagethePatientwithanInvasiveAirway>" + '\n');
            _retArray.push('\t\t\t' + "<eAirway.10>" + _val[0] + "</eAirway.10>" + '\n');
        };

        /////eAirway.11
        _val = geteAirwayValue(businessObject.sections[a].attributes.elements, "eAirway.11");
        if (_val == null) 
        {
            OLAPArray.push('\t\t\t' + "<DateTimeInvasiveAirwayPlacementAttemptsAbandoned>" + null + "</DateTimeInvasiveAirwayPlacementAttemptsAbandoned>" + '\n');
            _retArray.push('\t\t\t' + "<eAirway.11>" + null + "</eAirway.11>" + '\n');
        }
        else 
        {
            OLAPArray.push('\t\t\t' + "<DateTimeInvasiveAirwayPlacementAttemptsAbandoned>" + _val[0] + "</DateTimeInvasiveAirwayPlacementAttemptsAbandoned>" + '\n');
            _retArray.push('\t\t\t' + "<eAirway.11>" + _val[0] + "</eAirway.11>" + '\n');
        };



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
  
    function setCodeText(NEMSISElementNumber, codeVal) {
        var _return = [];


        switch (NEMSISElementNumber) {
            case "eAirway.01":
                if (eAirway334_01[codeVal] == undefined) {
                    _return = codeVal;
                }
                else {
                    _return = eAirway334_01[codeVal];
                }
                break;
            case "eAirway.03":
                if (eAirway334_03[codeVal] == undefined) {
                    _return = codeVal;
                }
                else {
                    _return = eAirway334_03[codeVal];
                }
                break;
            case "eAirway.06":
                if (eAirway334_06[codeVal] == undefined) {
                    _return = codeVal;
                }
                else {
                    _return = eAirway334_06[codeVal];
                }
                break;
            case "eAirway.08":
                if (eAirway334_08[codeVal] == undefined) {
                    _return = codeVal;
                }
                else {
                    _return = eAirway334_08[codeVal];
                }
                break;
            case "eAirway.09":
                if (eAirway334_09[codeVal] == undefined) {
                    _return = codeVal;
                }
                else {
                    _return = eAirway334_09[codeVal];
                }
                break;
            default:
                _return = " UNDEFINED";
        }
        return _return;

    };

    var eAirway334_01 = {
        "4001001" : "Adequate Airway Reflexes/Effort; Potential for Compromise", 
        "4001003" : "Airway Reflex Compromised", 
        "4001005" : "Apnea or Agonal Respirations", 
        "4001007" : "Illness Involving Airway", 
        "4001009" : "Injury Involving Airway", 
        "4001011" : "Other (Not Listed)", 
        "4001013" : "Ventilatory Effort Compromised", 
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
};

var eAirway334_06 = {
    "4006001": "Another Person on the Same Crew",
    "4006003": "Other (Not Listed)",
    "4006005": "Person Performing Intubation",
    "4006007": "Receiving Air Medical/EMS Crew",
    "4006009": "Receiving Hospital Team",

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
    "4008023" : "Tube Was Not in Correct Position when EMS Crew/Team Assumed Care of the Patient", 

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