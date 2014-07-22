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

var eDipatch = new Object;
var _retArray = [];
var OLAPArray = [];
var XMLString = "";
var v2Array = [];

var IS_MANDATORY;

var IsDispatchMandatory = function (eDispatch) {
    if ("InterdictionActionPerformed") {
        return true;
    }
    else {
        return false;
    }
};


//////////////////////////
var seteDispatch = function (businessObject) {

    console.log(businessObject);
    _retArray.push("<eDispatch>" + '\n');
    OLAPArray.push("<eDispatch>" + '\n');


    //eDispatch.01/////////
    /*
    eDispatch.01 Complaint Reported by Dispatch 
    The complaint dispatch reported to the responding unit. 
    E03_01 
    Mandatory Airway Cardiac Arrest Pediatric Response STEMI Stroke Trauma 
    */

    //Determine if an eAirway, eCardiac, eArrest, eReponse event occured.  If Yes, Dispatch Mandatory
    //If No, NOT APPLICABLE



    _val = getValue(businessObject.elements, "eDispatch.01");
    if (_val == null)
    {
        if (IsDispatchMandatory(eDispatchObject)) {
            ErrorList.push("eDispatch.01 MANDATORY Element");
            eDispatch["eDispatch.01"] = null;            
            v2Array.push({ section: "E03", element: "E03_01", val: null });
        }
    }
    else
    {
        eDispatch["ComplaintReportedbyDispatch"] = setCodeText("eDispatch.01", _val[0]);
        eDispatch["eDispatch.01"] = _val[0];       
        v2Array.push({ section: "E03", element: "E03_01", val: setV2("eDispatch.01", _val) });
    };
    /*eDispatch.02 EMD Performed 
    Indication of whether Emergency Medical Dispatch was performed for this EMS event. E03_02 
    Required Airway Cardiac Arrest Pediatric Response STEMI Stroke Trauma
    
    */
    _val = getValue(businessObject.elements, "eDispatch.02");
    if (_val == null)
    {
        //If Not emergent call, EMD not applicable
        if (IsDispatchMandatory(eDispatchObject))
        {
            v2Array.push({ section: "E03", element: "E03_02", val: v2NOT_APPLICABLE });
            eDispatch["eDispatch.02"] = v3NOT_APPLICABLE;
            eDispatch["EMDPerformed"] = v3NOT_APPLICABLE;
        }
        else
        {
            v2Array.push({ section: "E03", element: "E03_02", val: v2NOT_RECORDED });
            eDispatch["eDispatch.02"] = v3NOT_RECORDED;
            eDispatch["EMDPerformed"] = v3NOT_RECORDED;
        }
    }
    else
    {
        eDispatch["eDispatch.02"] = _val[0];
        eDispatch["EMDPerformed"] = setCodeText("eDispatch.02", _val[0]);
        v2Array.push({ section: "E03", element: "E03_02", val: setV2("eDispatch.02", _val[0]) });
    };


    /////eDispatch.03////////////////////
    _val = getValue(businessObject.elements, "eDispatch.03");
    if (_val == null)
    {
        eDispatch["eDispatch.03"] = null;
        eDispatch["EMDCardNumber"] = null;
        v2Array.push({ section: "E03", element: "E03_03", val: null });
    }
    else
    {
        eDispatch["eDispatch.03"] = _val[0];
        eDispatch["EMDCardNumber"] = _val[0];
        v2Array.push({ section: "E03", element: "E03_03", val: _val[0] });
    };


    /////eDispatch.04////////////////////
    _val = getValue(businessObject.elements, "eDispatch.04");
    if (_val == null) {
        eDispatch["eDispatch.04"] = null;
        eDispatch["DispatchCenterNameorID"] = null;
    }
    else
    {
        eDispatch["eDispatch.04"] = _val[0];
        eDispatch["DispatchCenterNameorID"] = _val[0];
    };


    /////eDispatch.05////////////////////
    _val = getValue(businessObject.elements, "eDispatch.05");
    if (_val == null)
    {
        eDispatch["eDispatch.05"] = null;
        eDispatch["DispatchPriority"] = null;

    }
    else
    {
        eDispatch["eDispatch.05"] = _val[0];
        eDispatch["DispatchPriority"] = _val[0];
    };

};

function setV2(NEMSISElementNumber, valueArray) {
    //    console.log(NEMSISElementNumber);
    var _retArray = [];
    //    console.log(valueArray);
    switch (NEMSISElementNumber) {
        case "eDispatch.01":

            if (eDispatch01[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eDispatch01[valueArray[0]]);
            }
            break;

        case "eDispatch.02":

            if (eDispatch02[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eDispatch02[valueArray[0]]);
            }
            break;

        default:
            _retArray.push(NEMSISElementNumber = " version 2 not found");
    }

    return _retArray;

};

var eDispatch01 =
    {
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
var eDispatch02 =
    {
        "2302001": "0",
        "2302003": "570",
        "2302005": "575",
        "2302007": "575"
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

function setCodeText(NEMSISElementNumber, codeVal) {
    var _return = [];


    switch (NEMSISElementNumber) {

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


        default:
            _return = " UNDEFINED";
    }
    return _return;

};