//Create the highest level Object:  Call
//Call.PCR:  PCR Object
//Call.Name Call Date/Time/Rig
//Call.PCR.V334XML = EMS XMLWriter Object
//Call.PCR.V221XML = EMS XMLWriter Object
//Call.PCR.eCAD = CAD XMLWriter Object
//Call.PCR.eMED = eMED XMLWriter Object
//Call.PCRStatus:  Complete/Incomplete
//Call.Status[]: Cancelled, InProgress, 
/*
ALS Emergency
ALS Non Emergency
BLS Emergency
BLS Non-Emergency
RMA
Wheelchair
Paramedic Intercept
Contract Standby
Standby

NEED TREATMENT INVENTORY - HasAirway, HasArrest

*/
var createTheCall = function (parseObject)
{
    var Call = new Object();
    var TheServiceType = new Object();

    console.log(parseObject)
    //Call.Inventory = setCallInventory(parseObject);
    //    console.log(Call.Inventory)
    /////////////////////////////////
    /////////////////////////////////
    var d = new Date();
    var d2 = new Date();
    var d3 = new Date();
    d2.setHours(d.getHours() - 2);
    d3.setHours(d.getHours() - 1);
    Call.StartAirwayTime = d2;
    Call.EndAirwayTime = d3;
    /////////////////////////////////
    /////////////////////////////////
    var eDispatchObject = new Object();
    var eDispositionObject = new Object();
    var eRecordObject = new Object();
    var eTimesObject = new Object();
    var eScenebject = new Object();
    var TheCall = new Object();


    var allOn = true;
    if (allOn == true) {
        TheCall["IsValid"] = false;
        //// ///////////////eRecord
        eRecordObject = getObjectFromOLTPExtract(parseObject, "eRecord");
        eRecordObject.HasDataSet = false;
        if (eRecordObject.IsUndefined != true) {
            eRecordObject.HasDataSet = true;
        }
        else {
        };
        TheCall.pRecord = eRecordObject;
        TheCall.eRecord = seteRecord(TheCall);
        TheCall.PCRID = TheCall.eRecord["eRecord.01"];
        TheCall.IsValid = TheCall.eRecord.IsValid;

        if (TheCall.eRecord.HasErrors == true) {
            if (TheCall.eRecord.Errors.length > 0) {
                for (var i = 0; i < TheCall.eRecord.Errors.length; i++) {
                }
            }
        };
        
        ////////////////////////Dispatch
        //Manadotory:  Determins Call Priority, EMD
        eDispatchObject = getObjectFromOLTPExtract(parseObject, "eDispatch");
        eDispatchObject.HasDataSet = false;
        if (eDispatchObject.IsUndefined != true) {
            eDispatchObject.HasDataSet = true;
        }
        else {
        };
        TheCall.pDispatch = eDispatchObject;
        TheCall.eDispatch = seteDispatch(TheCall);
        TheCall.CallType = TheCall.eDispatch.CallType;
//        TheCall.StartAirwayTime = false;
//        TheCall.EndAirwayTime = false;
        if (TheCall.eDispatch.HasErrors == true) {
            if (TheCall.eDispatch.Errors.length > 0) {
                for (var i = 0; i < TheCall.eDispatch.Errors.length; i++) {
                }
            }
        };
        if (typeof TheCall.eDispatch.CallType != 'undefined') {
            TheCall.CallType = TheCall.eDispatch.CallType;
        }
        else {
            TheCall.IsValid = false;
        };

        ////////////////////////eResponse//////////////////////////////
        eResponseObject = getObjectFromOLTPExtract(parseObject, "eResponse");
        eResponseObject.HasDataSet = false;
        if (eResponseObject.IsUndefined != true) {
            eResponseObject.HasDataSet = true;
        }
        else { };
        //MUST have eDisposition - contains a Mandatory Element
        TheCall.pResponse = eResponseObject;
        TheCall.eResponse = seteResponse(TheCall);

        if (TheCall.eResponse.HasErrors == true) {
            if (TheCall.eResponse.Errors.length > 0) {
                for (var i = 0; i < TheCall.eResponse.Errors.length; i++)
                { }
            }
        };

        ////////////////////////////////////////////////////////////////
        ///////////////////////eDisposition    
        eDispositionObject = getObjectFromOLTPExtract(parseObject, "eDisposition");
        eDispositionObject.HasDataSet = false;
        if (eDispositionObject.IsUndefined != true) {
            eDispositionObject.HasDataSet = true;
        }
        else {
        };

        TheCall.pDisposition = eDispositionObject;
        TheCall.eDisposition = seteDisposition(TheCall);

        if (TheCall.eDisposition.HasErrors == true) {
            if (TheCall.eDisposition.Errors.length > 0) {
                for (var i = 0; i < TheCall.eDisposition.Errors.length; i++) {
                }
            }
        };
        TheCall.CallDisposition = TheCall.eDisposition.CallDisposition;
        TheCall.TransportType = TheCall.eDispatch.TransportType;

        

        ////////////////////////eTimes
        eTimesObject = getObjectFromOLTPExtract(parseObject, "eTimes");
        eTimesObject.HasDataSet = false;
        if (eTimesObject.IsUndefined != true) {
            eTimesObject.HasDataSet = true;
        }
        else { };

        TheCall.pTimes = eTimesObject;
        TheCall.eTimes = seteTimes(TheCall);

        if (TheCall.eTimes.HasErrors == true) {
            if (TheCall.eTimes.Errors.length > 0) {
                for (var i = 0; i < TheCall.eTimes.Errors.length; i++) {
                }
            }
        };
      
        ////////////////////////eSituation
        eSituationObject = getObjectFromOLTPExtract(parseObject, "eSituation");
        eSituationObject.HasDataSet = false;
        if (eSituationObject.IsUndefined != true) {
            eSituationObject.HasDataSet = true;
        }
        else {
        };

        TheCall.pSituation = eSituationObject;
        TheCall.eSituation = seteSituation(TheCall);

        if (TheCall.eSituation.HasErrors == true) {
            if (TheCall.eSituation.Errors.length > 0) {
                for (var i = 0; i < TheCall.eSituation.Errors.length; i++) {
                }
            }
        };

        ////////////////////////eScene
        eSceneObject = getObjectFromOLTPExtract(parseObject, "eScene");
        eSceneObject.HasDataSet = false;
        if (eSceneObject.IsUndefined != true) {
            eSceneObject.HasDataSet = true;
        }
        else {
        };

        TheCall.pScene = eSceneObject;
        TheCall.eScene = seteScene(TheCall);

        if (TheCall.eScene.HasErrors == true) {
            if (TheCall.eScene.Errors.length > 0) {
                for (var i = 0; i < TheCall.eScene.Errors.length; i++) {
                }
            }
        };

        ///////////////////////////////////eAirway
        eAirwayObject = getObjectFromOLTPExtract(parseObject, "eAirway");
        eAirwayObject.HasDataSet = false;
        if (eAirwayObject.IsUndefined != true) {
            eAirwayObject.HasDataSet = true;
        }
        else { };

        TheCall.pAirway = eAirwayObject;
        TheCall.eAirway = seteAirway(TheCall);
        if (TheCall.eAirway.HasErrors == true) {
            if (TheCall.eAirway.Errors.length > 0) {
                for (var i = 0; i < TheCall.eAirway.Errors.length; i++) {
                }
            }
        };
        var Treatment = new Object;
        /*Treatment[AirwayStartTime] = TheCall.eAirway.AirwayStartTime;
        Treatment[AirwayEndTime] = TheCall.eAirway.AirwayEndTime;
        TheCall.Treatment = Treatment;
        */

        ///////////////////////////////////eArrest
        eArrestObject = getObjectFromOLTPExtract(parseObject, "eArrest");
        eArrestObject.HasDataSet = false;
        if (eArrestObject.IsUndefined != true) {
            eArrestObject.HasDataSet = true;
        }
        else { };

        TheCall.pArrest = eArrestObject;
        TheCall.eArrest = seteArrest(TheCall);
        if (TheCall.eArrest.HasErrors == true) {
            if (TheCall.eArrest.Errors.length > 0) {
                for (var i = 0; i < TheCall.eArrest.Errors.length; i++) {
                }
            }
        };
        var Treatment = new Object;

        /*
        ///////////////////////////////////ePatient
        ePatientObject = getObjectFromOLTPExtract(parseObject, "ePatient");
        ePatientObject.HasDataSet = false;
        if (ePatientObject.IsUndefined != true) {
            ePatientObject.HasDataSet = true;
        }
        else { };

        TheCall.pPatient = ePatientObject;
        TheCall.ePatient = setePatient(TheCall);
        if (TheCall.ePatient.HasErrors == true) {
            if (TheCall.ePatient.Errors.length > 0) {
                for (var i = 0; i < TheCall.ePatient.Errors.length; i++) {
                }
            }
        };

        ////////////////////////////////eHistory
        eHistoryObject = getObjectFromOLTPExtract(parseObject, "eHistory");
        eHistoryObject.HasDataSet = false;
        if (eHistoryObject.IsUndefined != true) {
            eHistoryObject.HasDataSet = true;
        }
        else {
            //MUST have eDispatch - contains a Mandatory Element
        };

        TheCall.pHistory = eHistoryObject;
        TheCall.eHistory = seteHistory(TheCall);
        if (TheCall.eHistory.HasErrors == true) {
            if (TheCall.eHistory.Errors.length > 0) {
                for (var i = 0; i < TheCall.eHistory.Errors.length; i++) {
                              
                }
            }
        };

        ///////////////////////////////////ePayment
        ePaymentObject = getObjectFromOLTPExtract(parseObject, "ePayment");
        ePaymentObject.HasDataSet = false;
        if (ePaymentObject.IsUndefined != true) {
            ePaymentObject.HasDataSet = true;
        }
        else {
            //MUST have eDispatch - contains a Mandatory Element
        };

        TheCall.pPayment = ePaymentObject;
        TheCall.ePayment = setePayment(TheCall);


      
       
       
       
    };//allon
    //console.log(TheCall)
    /////////////////////////////////eDevice       
    eDeviceObject = getObjectFromOLTPExtract(parseObject, "eDevice");
    eDeviceObject.HasDataSet = false;
    if (eDeviceObject.IsUndefined != true) {
        eDeviceObject.HasDataSet = true;
    }
    else {
        //MUST have eDispatch - contains a Mandatory Element
    };

    TheCall.pDevice = eDeviceObject;
    TheCall.eDevice = seteDevice(TheCall);

   //
   */
    };
    b = setV3XML(TheCall);
 //   c=setV2XML(TheCall)
};
var getObjectFromOLTPExtract = function (businessObject, sectionName) {
    //Returns an array of index values for a given sectionName within a sectionObject
    // if sectionName does not exist within the sectionObject, return -1

    var _retValue = new Object();
    if (typeof businessObject != undefined) {

        _retValue.IsUndefined = true;

        for (var d = 0; d <= businessObject.attributes.sections.length - 1; d++) {
            if (businessObject.attributes.sections[d].attributes.name == sectionName) {
                _retValue = businessObject.attributes.sections[d];
                _retValue.IsUndefined = false;
            }
        };
    };
    return _retValue;
};
var getSectionIndex = function (sectionObject, sectionName) {
    //Returns an array of index values for a given sectionName within a sectionObject
    // if sectionName does not exist within the sectionObject, return -1
    var _retValue = [];
    for (var d = 0; d < sectionObject.attributes.sections.length; d++) {

        if (sectionObject.attributes.sections[d].attributes.name == sectionName) {
            _retValue.push(d);
        }
    }
    if (_retValue.length == 0) {
        _retValue.push(-1);
    };
    return _retValue;
};
var seteRecord = function (TheCall) 
{
    var eRecord = new Object();
    
    var pRecord = new Object();
    pRecord = TheCall.pRecord;
    //////////////////////eRecord.01
    if (TheCall.pRecord.HasDataSet) {
        var _el = [];
        _el.push(TheCall.pRecord.attributes.elements[0].attributes.value);

        var _val = [];
        var _record
        var valObj = {};

        if (_val == null) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eRecord.01", Description: "PCR Number  MANDATORY" })
        }
        else {
            //_val = _record.ValueArray[0].val;
            _val.push(_el[0]) //_record.ValueArray[0].val;
            valObj.IsNull = false;
        };
        valObj.vSet = _val.slice(0);
        eRecord["eRecord.01"] = valObj;
        eRecord["SoftwareApplicationGroup"] = -1;
        if (typeof pRecord.attributes.sections != 'undefined') {
            _sectionIndex = getSectionIndex(pRecord, "eRecord.SoftwareApplicationGroup");
            eRecord["SoftwareApplicationGroup"] = 1;
            var _dataList = [];
            var _dataList = pRecord.attributes.sections[_sectionIndex].attributes.elements;
            if (_dataList.length > 0) {
                eRecord.IsValid = true;
            }
            else {
                eRecord.IsValid = false;
            }
        }

        //////////////////////eRecord.02
        var _val = [];
        var _record = []
        var valObj = {};
        if (eRecord.IsValid == true) {
            _record = getValue(_dataList, "eRecord.02");

            if (_val == null) {
                eRecord.HasErrors = true;
                eRecord.ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eRecord.02", Description: "Software Creator MANDATORY" })
            }
            else {
                _val.push(_record.ValueArray[0].val);
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
            };
            valObj.vSet = _val.slice(0);
            eRecord["eRecord.02"] = valObj;

            //////////////////////eRecord.03
            _record = getValue(_dataList, "eRecord.03");
            var _val = [];
            var _erecord = [];
            var valObj = {};
            if (_val == null) {
                eRecord.HasErrors = true;
                eRecord.ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eRecord.03", Description: "Software Name MANDATORY" })
            }
            else {
                _val.push(_record.ValueArray[0].val);
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
            };
            valObj.vSet = _val.slice(0);
            eRecord["eRecord.03"] = valObj;

            //////////////////////eRecord.04
            _record = getValue(_dataList, "eRecord.04");
            var _val = [];
            var _erecord = [];
            var valObj = {};
            if (_val == null) {
                eRecord.HasErrors = true;
                eRecord.ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eRecord.04", Description: "Software Version MANDATORY" })
            }
            else {
                _val.push(_record.ValueArray[0].val);
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
            };

            valObj.vSet = _val.slice(0);
            eRecord["eRecord.04"] = valObj;
        }
    }
    else {
        eRecord["IsValid"] = false;
        eRecord["HasErrors"] = true;
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eRecord", Description: "Missing Mandatory Header Information.  eRecord.HasDataSet = false" });
        eRecord.Errors = ErrorList.slice(0);

    };
    
    return eRecord;
};
var seteDisposition = function (TheCall) 
{
    var eDisposition = new Object();
    var CallDisposition = new Object();
    var TransportType = '';
   
    
    var pDisposition = TheCall.pDisposition;
    var HospitalTeamActivationGroup = new Object();
    var HospitalTeamActivationGroupArray = [];
    

    if (pDisposition.HasDataSet == false)
    {
        eDisposition["IsValid"] = false;
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eDisposition", Description: "Missing Mandatory.  eDisposition.HasDataSet = false" })
        eDisposition.Errors = ErrorList.slice(0);
        return eDisposition;
    }
    else
    {
        _elementList = pDisposition.attributes.elements;
        var ErrorList = [];

        //eDisposition.12

        var _val = [];
        var _dispo = [];
        var valObj = {};
        _dispo = getValue(_elementList, "eDisposition.12");

        if (_dispo.IsNull == true)
        {
            eDisposition["IsValid"] = false;
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eDisposition.12", Description: "Incident/CallDisposition Disposition Mandatory" })
        }
        else 
        {
            _val.push(_dispo.ValueArray[0].val);
            if (_dispo.IsNull != true) {
                valObj.IsNull = false;
               
                switch (_val[0].toString())
                {
                 
                    case "4212007":
                        var CallDisposition = new Object();
                        var Cancelled = new Object();
                        eDispostion.Cancelled = "PriorToScene";
                        break;
                    case "4212009":
                        var Cancelled = new Object();
                        eDispostion.Cancelled = "OnScene";
                        break;
                    case "4212011":
                        eDisposition["Cancelled"] = "OnScene";
                        var Cancelled = new Object();
                        eDispostion.Cancelled = "OnScene";
                        break;
                    case "4212013":
                        var CallDisposition = new Object();
                        CallDisposition["HasCallDisposition"] = true;
                        CallDisposition["HasTreatment"] = false;
                        CallDisposition["HasTransport"] = true;
                        CallDisposition["IsDead"] = true;
                        break;
                    case "4212015":
                        var CallDisposition = new Object();
                        CallDisposition["HasCallDisposition"] = true;
                        CallDisposition["HasTreatment"] = false;
                        CallDisposition["HasTransport"] = false;
                        CallDisposition["IsDead"] = true;
                        break;

                    case "4212017":
                        var CallDisposition = new Object();
                        CallDisposition["HasCallDisposition"] = true;
                        CallDisposition["HasTreatment"] = true;
                        CallDisposition["HasTransport"] = true;
                        CallDisposition["IsDead"] = true;
                        break;
                    case "4212019":
                        var CallDisposition = new Object();
                        CallDisposition["HasCallDisposition"] = true;
                        CallDisposition["HasTreatment"] = true;
                        CallDisposition["HasTransport"] = false;
                        CallDisposition["IsDead"] = true;
                        break;
                    case "4212021":
                        var CallDisposition = new Object();
                        CallDisposition["HasCallDisposition"] = true;
                        CallDisposition["HasTreatment"] = false;
                        CallDisposition["HasTransport"] = false;
                        CallDisposition["IsDead"] = false;
                        break;
                    case "4212023":
                        var CallDisposition = new Object();
                        CallDisposition["HasCallDisposition"] = true;
                        CallDisposition["HasTreatment"] = false;
                        CallDisposition["HasTransport"] = true;
                        CallDisposition["IsDead"] = false;
                        break;
                    case "4212025":
                        var CallDisposition = new Object();
                        CallDisposition["HasCallDisposition"] = true;
                        CallDisposition["HasTreatment"] = false;
                        CallDisposition["HasTransport"] = false;
                        CallDisposition["IsDead"] = false;
                        break;
                    case "4212027":
                        var CallDisposition = new Object();
                        CallDisposition["HasCallDisposition"] = true;
                        CallDisposition["HasTreatment"] = true;
                        CallDisposition["HasTransport"] = false;
                        CallDisposition["IsDead"] = false;
                        break;
                    case "4212029":
                        var CallDisposition = new Object();
                        CallDisposition["HasCallDisposition"] = true;
                        CallDisposition["HasTreatment"] = true;
                        CallDisposition["HasTransport"] = false;
                        CallDisposition["IsDead"] = false;
                        break;
                    case "4212031":
                        var CallDisposition = new Object();
                        CallDisposition["HasCallDisposition"] = true;
                        CallDisposition["HasTreatment"] = true;
                        CallDisposition["HasTransport"] = false;
                        CallDisposition["IsDead"] = false;
                        break;
                    case "4212033":
                        var CallDisposition = new Object();
                        CallDisposition["HasCallDisposition"] = true;
                        CallDisposition["HasTreatment"] = true;
                        CallDisposition["HasTransport"] = true;
                        CallDisposition["IsDead"] = false;

                        break;
                    case "4212035":
                        var CallDisposition = new Object();
                        CallDisposition["HasCallDisposition"] = true;
                        CallDisposition["HasTreatment"] = true;
                        CallDisposition["HasTransport"] = false;
                        CallDisposition["IsDead"] = false;
                        break;
                    case "4212037":
                        var CallDisposition = new Object();
                        CallDisposition["HasCallDisposition"] = true;
                        CallDisposition["HasTreatment"] = true;
                        CallDisposition["HasTransport"] = false;
                        CallDisposition["IsDead"] = false;
                        break;
                    case "4212039":
                        var CallDisposition = new Object();
                        //Should this be a rule?  
                        //if (TheCall.CallType == StandBy?)
                        CallDisposition["HasCallDisposition"] = false;
                        CallDisposition["HasTreatment"] = false;
                        CallDisposition["HasTransport"] = false;
                        CallDisposition["IsDead"] = false; break;
                    case "4212041":
                        var CallDisposition = new Object();
                        //Should this be a rule?  
                        //if (TheCall.CallType == StandBy?)
                        CallDisposition["HasCallDisposition"] = false;
                        CallDisposition["HasTreatment"] = false;
                        CallDisposition["HasTransport"] = false;
                        CallDisposition["IsDead"] = false;
                        break;
                    case "4212043":
                        var CallDisposition = new Object();
                        CallDisposition["HasCallDisposition"] = false;
                        CallDisposition["HasTreatment"] = false;
                        CallDisposition["HasTransport"] = true;
                        CallDisposition["IsDead"] = false;
                        break;
                    default:
                }
            };
            valObj.vSet = _val.slice(0);
            eDisposition["IsValid"] = true;
            eDisposition["eDisposition.12"] = valObj;
            delete valObj;                    
        };        
        ///////////////////////eDisposition.DestinationGroup
        eDisposition["DestinationGroup"] = -1;
        if (typeof pDisposition.attributes.sections != 'undefined')
        {
            var _sI = [];
            _sI = getSectionIndex(pDisposition, "eDisposition.DestinationGroup");          
            if (_sI[0] != -1)
            {

                eDisposition.IsValid = true;
                var _dEl = [];
                _dEl = pDisposition.attributes.sections[_sI[0]].attributes.elements;
                if (_dEl.length == -1) {
                    eDisposition["DestinationGroup"] = -1;
                }
                else {
                    eDisposition["DestinationGroup"] = 1;
                }
            }
        };
        //eDisposition.01///////////////////////////////////////////////////////////
        var _val = [];
        var _dispo = [];
        var valObj = {};
        valObj.IsNull = true;
        

        if ((CallDisposition.HasTransport == true) && (eDisposition["DestinationGroup"] == 1))
        {
            _dispo = getValue(_dEl, "eDisposition.01");
            if (_dispo.IsNull == true)
            {
                if (isRequiredStateElement("eDisposition.01") == true)
                {
                    _val.push("7701003");
                    valObj.IsNull = true;
                    valObj.NV = true;
                }
                else {
                    _val.push("7701005");
                    valObj.IsNull = true;
                    valObj.NV = true;
                }
            }
            else
            {
                _val.push(_dispo.ValueArray[0].val);
                valObj.IsNull = false;
            }
        }
        else {
            _val.push("7701001")
            valObj.IsNull = true;
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eDisposition["eDisposition.01"] = valObj;
        delete valObj;
            
        //eDisposition.02//////////////////////////////////////////////////////////                
        var _val = [];
        var _dispo = [];
        var valObj = {};
        valObj.IsNull = true;

        if ((CallDisposition.HasTransport == true) && (eDisposition["DestinationGroup"] == 1))
        {
            _dispo = getValue(_dEl, "eDisposition.02");
            if (_dispo.IsNull == true)
            {
                valObj.NV = true
                if (isRequiredStateElement("eDisposition.02") == true)
                {
                    _val.push("7701003");
                    valObj.NV = true;
                }
                else
                {
                    _val.push("7701005");
                    valObj.NV = true;
                }
            }
            else {
                _val.push(_dispo.ValueArray[0].val);
                valObj.IsNull = false;
            }
        }
        else
        {
           // if (_dispo.IsNull != true) {
           //     ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.02", Description: "Transport Desitination with No Transport Record " });                
          //  }
            _val.push("7701001");
            valObj.NV = true;            
        };
        valObj.vSet = _val.slice(0);
        eDisposition["eDisposition.02"] = valObj;
        delete valObj;
            
        //eDisposition.03/////////////////////////////////////////////////////////////
        var _val = [];
        var _dispo = [];
        var valObj = {};
        valObj.IsNull = true;

        if ((CallDisposition.HasTransport == true) && (eDisposition["DestinationGroup"] == 1))
        {
            _dispo = getValue(_dEl, "eDisposition.03");

            if (_dispo.IsNull == true)
            {
                if (isRequiredStateElement("eDisposition.03") == true)
                {
                    ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.03", Description: "Transport Address Required" })            
                };
            }
            else {
                _val.push(_dispo.ValueArray[0].val[0]);
                valObj.IsNull = false;
            }
        };
        valObj.vSet = _val.slice(0);
        eDisposition["eDisposition.03"] = valObj;
        delete valObj;

        //eDisposition.04///////////////////////////////////////////////////////
        var _val = [];
        var _dispo = [];
        var valObj = {};
        valObj.IsNull = true;

        if ((CallDisposition.HasTransport == true) && (eDisposition["DestinationGroup"] == 1))
        {
            _dispo = getValue(_dEl, "eDisposition.04");
            if (_dispo.IsNull != true) {
                _val.push(_dispo.ValueArray[0].val);
                valObj.IsNull = false;

            }
        }
        else {
            if (_dispo.IsNull == true) {
                ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.04", Description: "Transport Address Required" })
            }
        };
        valObj.vSet = _val.slice(0);
        eDisposition["eDisposition.04"] = valObj;
        delete valObj;

        //eDisposition.05/////////////////////////////////////////////
        var _val = [];
        var _dispo = [];
        var valObj = {};
        valObj.IsNull = true;

        if ((CallDisposition.HasTransport == true) && (eDisposition["DestinationGroup"] == 1))
        {
            _dispo = getValue(_dEl, "eDisposition.05");
            if (_dispo.IsNull == true)
            {
                if (isRequiredStateElement("eDisposition.05") == true)
                {
                    _val.push("7701003")
                    valObj.NV = true;
                }
            }
            else {
                _val.push(_dispo.ValueArray[0].val);
                valObj.IsNull = false;
            }
        }
        else
        {
            //if (_dispo.IsNull != true)
           // {
           //     ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.05", Description: "Transport State/Transport Type Conflict " })
           // }
           // else
            //{
                _val.push("7701001");
                valObj.NV = true;
           // }
        };
        valObj.vSet = _val.slice(0);
        eDisposition["eDisposition.05"] = valObj;
        delete valObj;
            
        //eDisposition.06//////////////////////////////////////////////////////
        var _val = [];
        var _dispo = [];
        var valObj = {};
        valObj.IsNull = true;

        if ((CallDisposition.HasTransport == true) && (eDisposition["DestinationGroup"] == 1))
        {
            _dispo = getValue(_dEl, "eDisposition.06");
            if (_dispo.IsNull == true) {
                _val.push("7701003");
                valObj.NV = true;
            }
            else {
                _val.push(_dispo.ValueArray[0].val);
                valObj.IsNull = false;
            }
        }
        else {
           // if (_dispo.IsNull != true) {
           //     ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.06", Description: "Transport City/Transport //Type Conflict " })
          //  }
          //  else {
                _val.push("7701001");
                valObj.NV = true;
         //   }
        };
        valObj.vSet = _val.slice(0);
        eDisposition["eDisposition.06"] = valObj;
        delete valObj;

        //eDisposition.07////////////////////////////////////////////////////
        var _val = [];
        var _dispo = [];
        var valObj = {};
        valObj.IsNull = true;

        if ((CallDisposition.HasTransport == true) && (eDisposition["DestinationGroup"] == 1))
        {
            _dispo = getValue(_dEl, "eDisposition.07");
            if (_dispo.IsNull == true) {
                if (isRequiredStateElement("eDisposition.07") == true) {
                    _val.push("7701003");
                    valObj.NV = true;
                }
            }
            else {
                _val.push(_dispo.ValueArray[0].val);
                valObj.IsNull = false;
            }
        }
        else
        {
          //  if (_dispo.IsNull != true) {
          //     ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.07", Description: "Transport Zip/Transport Type Conflict " })
         //   }
         //   else {
                _val.push("7701001");
                valObj.NV = true;
         //   }
        };
        valObj.vSet = _val.slice(0);
        eDisposition["eDisposition.07"] = valObj;
        delete valObj;
            
        //eDisposition.08///////////////////////////////////////////////////
        var _val = [];
        var _dispo = [];
        var valObj = {};
        valObj.IsNull = true;

        if ((CallDisposition.HasTransport == true) && (eDisposition["DestinationGroup"] == 1))
        {
            _dispo = getValue(_dEl, "eDisposition.08");
            if (_dispo.IsNull != true) {
                _val.push(_dispo.ValueArray[0].val);
                valObj.IsNull = false;
            }
        }
        else {
            if (_dispo.IsNull != true) {
                ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.08", Description: "Transport County/Transport Type Conflict " });
            }
        };

        valObj.vSet = _val.slice(0);
        eDisposition["eDisposition.08"] = valObj;
        delete valObj;
            
        //eDisposition.09/////////////////////////////////////////
        var _val = [];
        var _dispo = [];
        var valObj = {};
        valObj.IsNull = true;

        if ((CallDisposition.HasTransport == true) && (eDisposition["DestinationGroup"] == 1))
        {
            _dispo = getValue(_dEl, "eDisposition.09");
            if (_dispo.IsNull != true)
            {
                _val.push(_dispo.ValueArray[0].val);
                valObj.IsNull = false;
            }
       // }
      //  else {
     //       if (_dispo.IsNull != true)
     //       {
     //           ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.09", Description: "Transport GPS/Transport Type Conflict " })
     //       }
        };
            
        valObj.vSet = _val.slice(0);
        eDisposition["eDisposition.09"] = valObj;
        delete valObj;

        //eDisposition.10//////////////////////////////////////////
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        if ((CallDisposition.HasTransport == true) && (eDisposition["DestinationGroup"] == 1))
        {
            _dispo = getValue(_dEl, "eDisposition.10");
            if (_dispo.IsNull != true) {
                _val.push(_dispo.ValueArray[0].val);
                valObj.IsNull = false;

                valObj.vSet = _val.slice(0);
                eDisposition["eDisposition.10"] = valObj;
                delete valObj;
            }
        }            
    };
        
    //eDisposition.11/////////////////////////////////////////////////
    var _val = [];
    var _dispo = [];
    var valObj = {};
    valObj.IsNull = true;
    
    _dispo = getValue(_elementList, "eDisposition.11");
    if ((CallDisposition.HasTransport == true) && (eDisposition.IsValid == true))
    {
        if (_dispo.IsNull == true) {
            if (isRequiredStateElement("eDisposition.11") == true) {
                _val.push("7701003");
                valObj.NV = true;            }
            else {
                _val.push("7701005");
                valObj.NV = true;            }
        }
        else {
            _val.push(_dispo.ValueArray[0].val);
            valObj.IsNull = false;
        }
    }
    else {
        if (_dispo.IsNull != true) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.11", Description: "Transport Number CallDispositions/Transport Type Conflict  " });            
        }
        else {
            _val.push("7701001");
            valObj.NV = true;
        }
    };
    valObj.vSet = _val.slice(0);
    eDisposition["eDisposition.11"] = valObj;
    delete valObj;
    
    //eDisposition.13/////////////////////////////////////////////////////
    var _val = [];
    var _dispo = [];
    var valObj = {};
    valObj.IsNull = true;
    
    _dispo = getValue(_elementList, "eDisposition.13");
    if ((CallDisposition.HasTransport == true) && (eDisposition.IsValid == true))
        {
        if (_dispo.IsNull != true) {
            for (var i = 0; i <= _dispo.Count - 1; i++) {
                if ((_dispo.ValueArray[i].HasValue == true) && (_val.indexOf(_dispo.ValueArray[i].val) == -1)) {
                    _val.push(_dispo.ValueArray[i].val);                    
                }
            }

            valObj.IsNull = false;                
        }
    }
    else {
        if (_dispo.IsNull != true) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.12", Description: "How CallDisposition Moved/Transport Type Conflict  " })          
        };
    };
    valObj.vSet = _val.slice(0);
    eDisposition["eDisposition.13"] = valObj;
    delete valObj;
    //eDisposition.14//////////////////////////////////
    var _val = [];
    var _dispo = [];
    var valObj = {};
    valObj.IsNull = true;
    
    _dispo = getValue(_elementList, "eDisposition.14");
    if ((CallDisposition.HasTransport == true) && (eDisposition.IsValid == true))
    {
        if (_dispo.IsNull != true) {
            for (var i = 0; i < _dispo.ValueArray.length; i++) {
                if ((_dispo.ValueArray[i].HasValue == true) && (_val.indexOf(_dispo.ValueArray[i].val) == -1)) {
                    _val.push(_dispo.ValueArray[i].val);
                }
            };
            valObj.IsNull = false;                
        }
    }
    else {
        if (_dispo.IsNull != true) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.14", Description: "CallDisposition Position/Transport Type Conflict  " });
        };
    };
    valObj.vSet = _val.slice(0);
    eDisposition["eDisposition.14"] = valObj;
    delete valObj;
    
    //eDisposition.15////
    var _val = [];
    var _dispo = [];
    var valObj = {};
    valObj.IsNull = true;
    
    _dispo = getValue(_elementList, "eDisposition.15");
    if (CallDisposition.HasTransport == true)
    {
        if (_dispo.IsNull != true) {
            _val.push(_dispo.ValueArray[0].val);
            valObj.IsNull = false;                
        }
    }
    else
    {
        if (_dispo.IsNull != true)
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.15", Description: "CallDisposition Transport From Ambulance/Transport Type Conflict  " })
        };
    
    };
    valObj.vSet = _val.slice(0);
    eDisposition["eDisposition.15"] = valObj;
    delete valObj;
    
    //eDisposition.16////
    var _val = [];
    var _dispo = [];
    var valObj = {};
    valObj.IsNull = true;
    _dispo = getValue(_elementList, "eDisposition.16");

    if ((CallDisposition.HasTransport == true) && (eDisposition.IsValid == true))
    {
        if (_dispo.IsNull == true) {
            if (isRequiredStateElement("eDisposition.16") == true) {
                _val.push("7701003");
                valObj.IsNull = true;
                valObj.NV = true;            }
        }
        else {
            _val.push(_dispo.ValueArray[0].val);
            if ((_dispo.ValueArray[0].val == "4216001") && (_dispo.ValueArray[0].val == "4216003")) {
                TransportType = "Air";
            }
            else if (_dispo.ValueArray[0].val == "4216017") {
                TransportType = "Water";
            }
            else {
                TransportType = "Ground";
            };

            valObj.IsNull = false;
        }
    }
    else {
        if (_dispo.IsNull != true) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.16", Description: "CallDisposition Transport Method/Transport Type Conflict  " })            
        };
    
        _val.push("7701001");
        valObj.IsNull = true;
        valObj.NV = true;    
    };
    valObj.vSet = _val.slice(0);
    eDisposition["eDisposition.16"] = valObj;
    delete valObj;
    
    
    //eDisposition.17////
    var _val = [];
    var _dispo = [];
    var valObj = {};
    valObj.IsNull = true;
    _dispo = getValue(_elementList, "eDisposition.17");
    if (CallDisposition.HasTransport == true) //if have a transport,
    {
        if (_dispo.IsNull == true) {
            if (isRequiredStateElement("eDisposition.17") == true) {
                _val.push("7701003")
                valObj.IsNull = true;
                valObj.NV = true;            }
        }
        else {
            _val.push(_dispo.ValueArray[0].val);
            valObj.IsNull = false;
        }
    }
    else {
        if (_dispo.IsNull != true) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.17", Description: "Additional Transport Mode/Transport Type Conflict  " });
            eDisposition.Errors = true;
        };
        _val.push("7701001");
        valObj.IsNull = true;
        valObj.NV = true;    
    };
    valObj.vSet = _val.slice(0);
    eDisposition["eDisposition.17"] = valObj;
    delete valObj;
    
    //eDisposition.18////
    var _val = [];
    var _dispo = [];
    var valObj = {};
    valObj.IsNull = true;
    _dispo = getValue(_elementList, "eDisposition.18");
    if ((CallDisposition.HasTransport == true) && (eDisposition.IsValid == true))
    {
        if (_dispo.IsNull == true) {
            if (isRequiredStateElement("eDisposition.18") == true) 
            {
                _val.push("7701003");
                valObj.IsNull = true;
                valObj.NV = true;            
            }
        }
        else {
            _val.push(_dispo.ValueArray[0].val);
            for (var i = 0; i < _dispo.ValueArray.length; i++) {
                if ((_dispo.ValueArray[i].HasValue == true) && (_val.indexOf(_dispo.ValueArray[i].val) == -1)) {
                    _val.push(_dispo.ValueArray[i].val)
                }
            };
            valObj.IsNull = false;
        }
    }
    else
    {
        if (_dispo.ValueArray.length == 0) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.18", Description: "Additional Transport Method/Transport Type Conflict  " });    
        };
        _val.push("7701001");
        valObj.IsNull = true;
        valObj.NV = true;    
    };
    valObj.vSet = _val.slice(0);
    eDisposition["eDisposition.18"] = valObj;
    delete valObj;
    
    //eDisposition.19////
    var _val = [];
    var _dispo = [];
    var valObj = {};
    valObj.IsNull = true;
    _dispo = getValue(_elementList, "eDisposition.19");
    if ((CallDisposition.HasTransport == true) && (eDisposition.IsValid == true))
    {
        if (_dispo.IsNull == true) {
            if (isRequiredStateElement("eDisposition.19") == true) {
                _val.push("7701003")
                valObj.IsNull = true;
                valObj.NV = true;            }
        }
        else {
            _val.push(_dispo.ValueArray[0].val);
            valObj.IsNull = false;
        }
    }
    else {
        if (_dispo.IsNull != true) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.19", Description: "Condition of CallDispositionat Destination/Transport Type Conflict  " });    
        };
        _val.push("7701001")
        valObj.IsNull = true;
        valObj.NV = true;
    };
    valObj.vSet = _val.slice(0);
    eDisposition["eDisposition.19"] = valObj;
    delete valObj;
    
    //eDisposition.20////
    var _val = [];
    var _dispo = [];
    var valObj = {};
    valObj.IsNull = true;
    _dispo = getValue(_elementList, "eDisposition.20");
    if ((CallDisposition.HasTransport == true) && (eDisposition.IsValid == true))
    {
        if (_dispo.IsNull == true) {
            if (isRequiredStateElement("eDisposition.20") == true) {
                _val.push("7701003")
                valObj.IsNull = true;
                valObj.NV = true;            }
        }
        else {
            _val.push(_dispo.ValueArray[0].val);
            for (var i = 0; i < _dispo.ValueArray.length; i++) {
                if ((_dispo.ValueArray[i].HasValue == true) && (_val.indexOf(_dispo.ValueArray[i].val) == -1)) {
                    _val.push(_dispo.ValueArray[i].val)
                }
            };
            valObj.IsNull = false;
        }
    }
    else {
        if (_dispo.IsNull != true) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.20", Description: "Reason for Choosing Destination/Transport Type Conflict  " })
        };
        _val.push("7701001")
        valObj.IsNull = true;
        valObj.NV = true;
    };
        
    valObj.vSet = _val.slice(0);
    eDisposition["eDisposition.20"] = valObj;
    delete valObj;
    
    
    //eDisposition.21////
    var valObj = {};
    valObj.IsNull = true;
    var _val = [];
    var _dispo = [];
    _dispo = getValue(_elementList, "eDisposition.21");
    if ((CallDisposition.HasTransport == true) && (eDisposition.IsValid == true))
    {
        if (_dispo.IsNull == true) {
            if (isRequiredStateElement("eDisposition.21") == true) {
                valObj.NV = true;
                _val.push("7701003")
                valObj.IsNull = true;                    
            }
        }
        else {
            _val.push(_dispo.ValueArray[0].val);
            valObj.IsNull = false;                
        }
    }
    else {
        if (_dispo.IsNull != true) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.21", Description: "Type of Destination/Transport Type Conflict  " })
        };
        _val.push("7701001");
        valObj.IsNull = true;
        valObj.NV = true;
    };
    
    valObj.vSet = _val.slice(0);
    eDisposition["eDisposition.21"] = valObj;
    delete valObj;
    
    //eDisposition.22////
    var _val = [];
    var _dispo = [];
    var valObj = {};
    valObj.IsNull = true;
    _dispo = getValue(_elementList, "eDisposition.22");
    if ((CallDisposition.HasTransport == true) && (eDisposition.IsValid == true))
    {
        if (_dispo.IsNull == true) {
            if (isRequiredStateElement("eDisposition.22") == true) {
                _val.push("7701003")
                valObj.IsNull = true;
                valObj.NV = true;            }
        }
        else {
            _val.push(_dispo.ValueArray[0].val);
            valObj.IsNull = false;
        }
    }
    else {
        if (_dispo.IsNull != true) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.22", Description: "Hospital In CallDisposition Destination/Transport Type Conflict  " })
        };
        _val.push("7701001")
        valObj.IsNull = true;
        valObj.NV = true;    
    };
    valObj.vSet = _val.slice(0);
    eDisposition["eDisposition.22"] = valObj;
    delete valObj;
    
    //eDisposition.23////
    var _val = [];
    var _dispo = [];
    var valObj = {};
    valObj.IsNull = true;
    _dispo = getValue(_elementList, "eDisposition.23");
    if ((CallDisposition.HasTransport == true) && (eDisposition.IsValid == true))
    {
        if (_dispo.IsNull == true) {
            if (isRequiredStateElement("eDisposition.23") == true) {
                _val.push("7701003")
                valObj.IsNull = true;
                valObj.NV = true;
            }
        }
        else {
            _val.push(_dispo.ValueArray[0].val);
            valObj.IsNull = false;
        }
    }
    else {
        if (_dispo.IsNull != true) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.23", Description: "Hospital Designation/Transport Type Conflict  " });
        };
        _val.push("7701001")
        valObj.IsNull = true;
        valObj.NV = true;
    };
    valObj.vSet = _val.slice(0);
    eDisposition["eDisposition.23"] = valObj;
    delete valObj;

    //eDisposition.26////
    var _dispo = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    _dispo = getValue(_elementList, "eDisposition.26");
        
    if ((CallDisposition.HasTransport == true) && (eDisposition.IsValid == true))
    {
        if (_dispo.IsNull != true) {
            for (var i = 0; i < _dispo.ValueArray.length; i++) {
                if ((_dispo.ValueArray[i].HasValue == true) && (_val.indexOf(_dispo.ValueArray[i].val) == -1)) {
                    _val.push(_dispo.ValueArray[i].val);
                }
            };
            valObj.IsNull = false;
        }
    };
    valObj.vSet = _val.slice(0);
    eDisposition["eDisposition.26"] = valObj;
    delete valObj;

    
        // If No Transport, not Hospital Pre Activation
        //eDisposition.24 Destination Team Pre-Arrival Alert or Activation and 
        //eDisposition.25 Date/Time of Destination Prearrival Alert or Activation are both recorded when either one is recorded.
        //and :eDisposition.24 != '4224001'

        eDisposition["HospitalTeamActivationGroup"] = -1;
        if ((eDisposition.CallDisposition == true) && (eDisposition.IsValid == true))
        {
            if ((typeof pDisposition.attributes.sections != 'undefined') &&(eDisposition.IsValid==true))
            {
                var HTActivationArray = [];
                var _hTAG = []
                _hTAG = getSectionIndex(pDisposition, "eDisposition.HospitalTeamActivationGroup");
                var _tA = 0;
                if (_hTAG[0] == -1) {
                    eDisposition["HSActivation"]=false;                      
                }
                else
                {
                    eDisposition["HSActivation"]=true;
                    _tA=_hTAG.length;
                    eDisposition["HospitalTeamActivationGroup"] = _hTAG.length;
                }
    
            for (var i = 0; i < _tA; i++)
            {
                var hTG = new Object();
                var _hTAG = []
                    
                var _dataList = pDisposition.attributes.sections[_hTAG[x]].attributes.elements;

                //eDisposition.24////
                var _val = [];
                var _dispo = [];
                var valObj = {};
                valObj.IsNull = true;
                _dispo = getValue(_dataList, "eDisposition.24");
                if (_dispo.IsNull == true) {
                    _val.push("7701003")
                    valObj.IsNull = true;
                    valObj.NV = true;    
                }
                else {
                    _val.push(_dispo.ValueArray[0].val);
                    valObj.IsNull = false;
                
                    if (_val[0] == "4224001") {
                        bActivation = false;
                    }
                    else {
                        bActivation = true;
                    };
    
                };
                valObj.vSet = _val.slice(0);
                hTG["eDisposition.24"] = valObj;
                delete valObj;
    
                //eDisposition.25////
                var _dispo = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _dispo = getValue(_dataList, "eDisposition.25");
                if (_dispo.IsNull == true) {
                    if (bActivation = true) {
                        _val.push("7701003")
                        valObj.IsNull = true;
                        valObj.NV = true;
                    }
                    else {
                        _val.push("7701001")
                        valObj.IsNull = true;
                        valObj.NV = true;                
                    }
                }
                else {
                    _val.push(_dispo.ValueArray[0].val);
                    valObj.IsNull = false;
                };
                valObj.vSet = _val.slice(0);
                hTG["eDisposition.25"] = valObj;

                HTActivationArray.push(hTG);
            }
        };
        eDisposition.HospitalTeamActivationGroup = HTActivationArray.slice(0);                    
        };

        if (typeof CallDisposition != 'undefined') {
            eDisposition.CallDisposition = CallDisposition;
        };
        eDisposition.TransportType = TransportType;                     
    return eDisposition;
};
var seteDispatch = function (TheCall)
{
    var eDispatch = new Object();
    CallType ="";
    pDispatch = TheCall.pDispatch;   
    if (pDispatch.HasDataSet == false)
    {
        eDispatch["IsValid"] = false;
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eDispatch", Description: "eDispatch.HasDataSet =false  " });
    }
    else
    {
        var _elementList = [];
        _elementList = pDispatch.attributes.elements;
        
        /////eDispatch.01////////////////////
        var _val = [];
        var _dispatch = [];
        var valObj = {};
        valObj.IsNull = true;
        _dispatch = getValue(_elementList, "eDispatch.01");
        if (_dispatch.IsNull == true)
        {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eDispatch.01", Description: "Manadatory  " });
        }
        else {
            _val.push(_dispatch.ValueArray[0].val);

            if (_dispatch.ValueArray[0].val == "2301065")
            {
                CallType = "StandBy";
            }

            valObj.IsNull = false;
            eDispatch["IsValid"] = true;
          
        };
        valObj.vSet = _val.slice(0);
        eDispatch["eDispatch.01"] = valObj;
        delete valObj;

        /////eDispatch.02////////////////////
        var _val = [];
        var _dispatch = [];
        var valObj = {};
        valObj.IsNull = true;
        if ((TheCall.isCancelled == false)&&(eDispatch["IsValid"] == true))
        {
            _dispatch = getValue(_elementList, "eDispatch.02");        
            if (_dispatch.IsNull == true) {
                _val.push("7701003");
                valObj.IsNull = true;
                valObj.NV = true;
                valObj.vSet = _val.slice(0);
            }
            else {
                _val.push(_dispatch.ValueArray[0].val);                
                //if (_val[0] != "2302001") {
                //};

                if (_val[0] != "2301065") {
                    CallType = "StandBy";
                };

                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
            }
        }
        else 
        {            
            _val.push("7701001");
            valObj.IsNull = true;
            valObj.NV = true;
            valObj.vSet = _val.slice(0);
        };
        eDispatch["eDispatch.02"] = valObj;
        delete valObj;

        /////eDispatch.03////////////////////
        var _val = [];
        var _dispatch = [];
        var valObj = {};
        valObj.IsNull = true;
        _dispatch = getValue(_elementList, "eDispatch.03");

        if (_dispatch.IsNull != true) {
            _val.push(_dispatch.ValueArray[0].val );
            valObj.IsNull = false;
            
        };
        valObj.vSet = _val.slice(0);
        eDispatch["eDispatch.03"] = valObj;
        delete valObj;

        /////eDispatch.04////////////////////
        var _val = [];
        var _dispatch = [];
        var valObj = {};
        valObj.IsNull = true;
        _dispatch = getValue(_elementList, "eDispatch.04");

        if (_dispatch.IsNull != true) {
            _val.push(_dispatch.ValueArray[0].val);
            valObj.IsNull = false;
        
        };
        valObj.vSet = _val.slice(0);     
        eDispatch["eDispatch.04"] = valObj;
        delete valObj;

        /////eDispatch.05////////////////////
        var _val = [];
        var _dispatch = [];
        var valObj = {};
        valObj.IsNull = true;
        _dispatch = getValue(_elementList, "eDispatch.05");
        if (_dispatch.IsNull != true) {
            _val.push(_dispatch.ValueArray[0].val);

            if (CallType == "StandBy") {
                if (_dispatch.ValueArray[0].val != "2305007") {
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eDispatch.05", Description: "Dispatched Reported as Standy, Accuity conflict." });
                    valObj.IsNull = false;
                }
            }
            else {

                if (_val[0] <= "2305003") {
                    CallType = "Emergent";
                };
                if (_val[0] > "2305003") {
                    CallType = "NonEmergent";
                };
                valObj.IsNull = false;
            };
        };
        valObj.vSet = _val.slice(0);     
        eDispatch["eDispatch.05"] = valObj;
        delete valObj;
    };
    eDispatch.CallType = CallType;
    eDispatch.Errors = ErrorList;
    return eDispatch;
};
var seteTimes = function (TheCall) 
{
   var eTimes = new Object();
    var ErrorList = [];
    pTimes = TheCall.pTimes;
    if (pTimes.HasDataSet == false) 
    {
        eTimes["IsValid"] = false;
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eDisposition", Description: "Missing Mandatory.  eDisposition.HasDataSet = false" });       
    }
    else 
    {
        if(typeof pTimes.attributes.elements !='undefined')
        {
            var _el = pTimes.attributes.elements;
            if(_el ==-1)
            {
                eTimes.IsValid = false;
            }
            else
            {
                eTimes.IsValid = true;
            }
        }
    };
    //eTimes.01//////////////////      
    var _val = [];
    var _times = [];
    var valObj = {};
    valObj.IsNull = true;
    if ((TheCall.CallType == "Emergent") && (eTimes.IsValid == true))
    {
        _times = getValue(_el, "eTimes.01");        
        if (_times.IsNull == true) 
        {
            if (isRequiredStateElement("eTimes.01")) 
            {
                _val.push("7701003");
                valObj.IsNull = true;
                valObj.NV = true;
            }
        }
        else 
        {
            _val.push(_times.ValueArray[0].val);
            valObj.IsNull = false;
        }
    }
    else 
    {
        _val.push("7701001");
        valObj.IsNull = true;
        valObj.NV = true;
    };
    valObj.vSet = _val.slice(0);
    eTimes["eTimes.01"] = valObj;
    delete valObj;


    //eTimes.02/////////////////////////////////////////////////////////
        var _val = [];
        var _times = [];
        var valObj = {};
        valObj.IsNull = true;
        if (eTimes.IsValid == true)
        {
            _times = getValue(_el, "eTimes.02");
            if (_times.IsNull != true) 
            {
                _val.push(_times.ValueArray[0].val);
                if (TheCall.isEmergant == true) 
                {
                    Times.HasErrors = true;
                    ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eTimes", Description: "eTimes.02 - Dispatch not 911 " })
                }
                else 
                {
                    valObj.IsNull = false;
                }
            }
        };
        valObj.vSet = _val.slice(0);
        eTimes["eTimes.02"] = valObj;
        delete valObj;
        
        //eTimes.03//////////////////////////////////////////////////////
        var _val = [];
        var _times = [];
        var valObj = {};
        valObj.IsNull = true;
        if (eTimes.IsValid == true)
        {
            _times = getValue(_el, "eTimes.03");
            if (_times.IsNull == true) 
            {            
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eTimes", Description: "eTimes.03 - Mandatory" })
            }
            else 
            {
                /////////////////////////////////////////////
                if (typeof TheCall.StartAirwayTime != undefined) 
                {
                    if (TheCall.StartAirwayTime >= _val[0]) 
                    {                    
                        ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eTimes", Description: "eTimes.02 Validation Error: eAirway.10 Date/Time decision to Manage the Patient with an Invasive Airway should not occur prior to: Unit Notified by Dispatch Date/Time" });
                    };

                    if (typeof TheCall.EndAirwayTime != undefined) {
                        if (TheCall.EndAirwayTime >= _val[0]) {                     
                            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eTimes", Description: "Validation Error: eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Date/Time Decision to Manage the Patient with an Invasive Airway, Unit Notified by Dispatch Date/Time" });
                        }
                    };
                    _val.push(_times.ValueArray[0].val);
                    valObj.IsNull = false;
                }
            };
        
            valObj.vSet = _val.slice(0);
            eTimes["eTimes.03"] = valObj;
            delete valObj;
        };
       
        //eTimes.04//////////////////////////////////////////////////
        var _val = [];
        var _times = [];
        var valObj = {};
        valObj.IsNull = true;
        _times = getValue(_el, "eTimes.04");
        if (_times.IsNull != true) 
        {
            _val.push(_times.ValueArray[0].val);
            if (typeof eTimes["eTimes.03"] != 'undefined') 
            {
                if (_val[0] > eTimes["eTimes.03"]) 
                {
                    ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eTimes", Description: "Validation Error: eAirway.11: eTimes.03:  Dispatch Acknowledged prior to notification."});
                }
            };

            if (TheCall.EndAirwayTime >= _val[0]) 
            {            
                ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eTimes", Description: "Validation Error: eAirway.11: eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Dispatch Acknowledged Date/Time" });
            }
            valObj.IsNull = false;
        };
        valObj.vSet = _val.slice(0);
        eTimes["eTimes.04"] = valObj;
        delete valObj;
        
        //eTimes.05//////////////////////////////////////////////////
        var _val = [];
        var _times = [];
        var valObj = {};
        valObj.IsNull = true;

        if ((eTimes.IsValid == true) && (typeof TheCall.CallDisposition.Cancelled == 'undefined'))
        {
            _times = getValue(_el, "eTimes.05");
            if (_times.IsNull == true) {
                if (isRequiredStateElement("eTimes.05")) {
                    _val.push("7701003");
                    valObj.IsNull = true;
                    valObj.NV = true;
                }
            }
            else {
                _val.push(_times.ValueArray[0].val);
                valObj.IsNull = false;
            }
        }
        else 
        {
            _val.push("7701001");
            valObj.IsNull = true;
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eTimes["eTimes.05"] = valObj;
        delete valObj;

    
        //eTimes.06/////////////////////////////////////////////////        
        var _val = [];
        var _times = [];
        var valObj = {};
        valObj.IsNull = true;
        if ((eTimes.IsValid == true) && (typeof TheCall.CallDisposition.Cancelled == 'undefined'))
        {
            _times = getValue(_el, "eTimes.06");
            if (_times.IsNull == true) 
            {
                if (isRequiredStateElement("eTimes.06")) 
                {
                    _val.push("7701003");
                    valObj.IsNull = true;
                    valObj.NV = true;
                }
            }
            else 
            {
                _val.push(_times.ValueArray[0].val);
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
            }
        }
        else 
        {
            _val.push("7701001");
            valObj.IsNull = true;
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eTimes["eTimes.06"] = valObj;
        delete valObj;

    //eTimes.07//////////////////
    //eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Date/Time 
    //Arrived at Patient Date/Time.         
    var _val = [];
    var _times = [];
    var valObj = {};
    valObj.IsNull = true;
    if ((eTimes.IsValid == true) && (typeof TheCall.CallDisposition.Cancelled != 'undefefined'))
    {
        _times = getValue(_el, "eTimes.07");
        if (_times.IsNull == true) 
        {
            if (isRequiredStateElement("eTimes.07")) 
            {
                _val.push("7701003");
                valObj.IsNull = true;
                valObj.NV = true;
            }
        }
        else 
        {
            _val.push(_times.ValueArray[0].val);
            valObj.IsNull = false;

            if (TheCall.EndAirwayTime != null) 
            {
                if (TheCall.EndAirwayTime >= _val[0]) 
                {
                    eTimes.HasErrors = true;
                    ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eTimes", Description: "Validation Error: eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Date/Time Arrived at Patient Date/Time." });
                }
            }
        }
    }
    else 
    {
        _val.push("7701001");
        valObj.IsNull = true;
        valObj.NV = true;
    };
    valObj.vSet = _val.slice(0);
    eTimes["eTimes.07"] = valObj;
    delete valObj;
    
    //eTimes.08//////////////////
    var _val = [];
    var _times = [];
    var valObj = {};
    valObj.IsNull = true;
    if ((eTimes.IsValid == true) && (TheCall.PatientTransfer = true) && (typeof TheCall.CallDisposition.Cancelled != 'undefefined'))
    {
        _times = getValue(_el, "eTimes.08");
        if (_times.IsNull == true) 
        {
            if (isRequiredStateElement("eTimes.08")) 
            {
                _val.push("7701003");
                valObj.IsNull = true;
                valObj.NV = true;
            }
            else 
            {
                _val.push("7701005");
                valObj.IsNull = true;
                valObj.NV = true;
            }
        }
        else 
        {
            _val.push(_times.ValueArray[0].val);
            valObj.IsNull = false;
        }
    }
    else 
    {
        _val.push("7701001");
        valObj.IsNull = true;
        valObj.NV = true;
    };
    valObj.vSet = _val.slice(0);
    eTimes["eTimes.08"] = valObj;
    delete valObj;

    //eTimes.09//////////////////
    var _val = [];
    var _times = [];
    var valObj = {};
    valObj.IsNull = true;
            
    if ((eTimes.IsValid == true) && (typeof TheCall.CallDisposition.Cancelled != 'undefefined'))
    {
        _times = getValue(_el, "eTimes.09");
        if (_times.IsNull == true) 
        {
            if (isRequiredStateElement("eTimes.09")) 
            {
                _val.push("7701003");
                valObj.IsNull = true;
                valObj.NV = true;
            }
        }
        else 
        {
            _val.push(_times.ValueArray[0].val);
            valObj.IsNull = false;
            valObj.vSet = _val.slice(0);
        }
    }
    else 
    {
        _val.push("7701001");
        valObj.IsNull = true;
        valObj.NV = true;
    };
    valObj.vSet = _val.slice(0);
    eTimes["eTimes.09"] = valObj;
    delete valObj;

    //eTimes.10//////////////////////////////////////////////////////////////////////
    var _val = [];
    var _times = [];
    var valObj = {};
    valObj.IsNull = true;
    if ((eTimes.IsValid == true) && (TheCall.AirTransport == true) && (typeof TheCall.CallDisposition.Cancelled != 'undefefined'))
    {
        _times = getValue(_el, "eTimes.10");
        if (_times.IsNull != true) 
        {
            valObj.IsNull = false;
        }
    }
    else 
    {            
        ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eTimes", Description: "Validation Error: eTimes.10/eDisposition.16." });
    };
    valObj.vSet = _val.slice(0);
    eTimes["eTimes.10"] = valObj;
    delete valObj;
    
    //eTimes.11////////////////////////////////////////////////////////////////
    var _val = [];
    var _times = [];
    var valObj = {};
    valObj.IsNull = true;
    if ((eTimes.IsValid == true) && (typeof TheCall.CallDisposition.Cancelled != 'undefefined')) {
        if (TheCall.Patient == "HasTransport") {
            _times = getValue(_el, "eTimes.11");
            if (_times.IsNull == true) {
                if (isRequiredStateElement("eTimes.11")) {
                    _val.push("7701003");
                    valObj.IsNull = true;
                    valObj.NV = true;
                }
            }
            else {
                _val.push(_times.ValueArray[0].val);
                valObj.IsNull = false;
            }
        }
    }
    else
    {
        _val.push("7701001");
        valObj.IsNull = true;
        valObj.NV = true;
    };
    valObj.vSet = _val.slice(0);
    eTimes["eTimes.11"] = valObj;
    delete valObj;

    //eTimes.12///////////////////////////////////////////////////////////////////////        
    var _val = [];
    var _times = [];
    var valObj = {};
    valObj.IsNull = true;
    if ((eTimes.IsValid == true) && (typeof TheCall.CallDisposition.Cancelled != 'undefefined')) {
        if (TheCall.Patient == "HasTransport") {
            _times = getValue(_el, "eTimes.12");
            if (_times.IsNull == true) {
                if (isRequiredStateElement("eTimes.12")) {
                    _val.push("7701003");
                    valObj.IsNull = true;
                    valObj.NV = true;
                }
            }
            else {
                _val.push(_times.ValueArray[0].val);
                valObj.IsNull = false;
            }
        }
    }
    else {
        _val.push("7701001");
        valObj.IsNull = true;
        valObj.NV = true;
    };
    valObj.vSet = _val.slice(0);
    eTimes["eTimes.12"] = valObj;
    delete valObj

    //eTimes.13//////////////////////////////////////////////////////////////////////
    var _val = [];
    var _times = [];
    var valObj = {};
    valObj.IsNull = true;            
    _times = getValue(_el, "eTimes.13");
    //alert("when Cancelled, set this time value")
    if (_times.IsNull == true) 
    {            
        ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eTimes", Description: "Unit Back in Service Date/Time Mandatory Value " });
    }
    else 
    {
        _val.push(_times.ValueArray[0].val);
        valObj.IsNull = false;
    };
    valObj.vSet = _val.slice(0);
    eTimes["eTimes.13"] = valObj;
    delete valObj;

    //eTimes.14//////////////////
    var _val = [];
    var _times = [];
    var valObj = {};
    valObj.IsNull = true;
    _times = getValue(_el, "eTimes.14");
    if (typeof TheCall.CallDisposition.Cancelled != 'undefefined')
    {
        if (_times.IsNull == true) 
        {
            if (isRequiredStateElement("eTimes.14")) 
            {
                ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eTimes", Description: "Unit Canceled Date/Time:  eTimes 14 Mandatory" });
            }
        }
        else 
        {
            _val.push(_times.ValueArray[0].val);
            valObj.IsNull = false;
        }
    }
    else 
    {
        ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eTimes", Description: "Unit Canceled Date/Time:  Call Not Cancelled " });               
    };
    valObj.vSet = _val.slice(0);
    eTimes["eTimes.14"] = valObj;
    delete valObj;

    //eTimes.15//////////////////
    var _val = [];
    var _times = [];
    var valObj = {};
    valObj.IsNull = true;
    _times = getValue(_el, "eTimes.15");

    if (_times.IsNull != true) 
    {
        _val.push(_times.ValueArray[0].val);
        valObj.IsNull = false;

    };
    valObj.vSet = _val.slice(0);
    eTimes["eTimes.15"] = valObj;
    delete valObj;

    //eTimes.16/////////////////
    var _val = [];
    var _times = [];
    var valObj = {};
    valObj.IsNull = true;
    _times = getValue(_el, "eTimes.16");
    if (_times.IsNull != true) 
    {
        _val.push(_times.ValueArray[0].val);
        valObj.IsNull = false;
    };
    valObj.vSet = _val.slice(0);
    eTimes["eTimes.16"] = valObj;
    delete valObj;
            
    eTimes.Errors = ErrorList.slice(0)
    
    return eTimes;
    
};   
var seteResponse = function (TheCall) 
{
    
    pResponse = TheCall.pResponse;
    var eResponse = new Object();
    var TheServiceType = new Object();
    eResponse["HasDelay"] = false;
    eResponse["IsValid"] = false;
    if (pResponse.HasDataSet == false) 
    {

        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse", Description: "eResponse.HasDataSet =false  " });
    };

    if(typeof pResponse.attributes.elements !='undefined')            
    {
        _eL = pResponse.attributes.elements;
        eResponse["AgencyGroup"] = -1;
        _sectionAG = getSectionIndex(pResponse, "eResponse.AgencyGroup");
        if (_sectionAG != -1) 
        {
            var _AG = [];
            var _AG = pResponse.attributes.sections[_sectionAG].attributes.elements;
            eResponse["AgencyGroup"] = 1;
            eResponse["IsValid"] = true;
        };
        
        eResponse["ServiceGroup"] = -1;
        _sectionSG = getSectionIndex(pResponse, "eResponse.ServiceGroup");
        if (_sectionSG != -1) 
        {
            var _SG = [];
            var _SG = pResponse.attributes.sections[_sectionSG].attributes.elements;  
            eResponse["ServiceGroup"] = 1;
            eResponse["IsValid"] = true;
        };
    };
    //////////////////////eResponse.05    
    if (eResponse["IsValid"] == true) 
    {    
        var _response = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _response = getValue(_SG, "eResponse.05");
        if (_response.IsNull == true) 
        {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.05", Description: "Type of Service Request  MANDATORY" })
        }
        else 
        {
            _val.push(_response.ValueArray[0].val);
            valObj.IsNull = false;
            if (_val[0] == "2205001") //StandBy
            {
                TheServiceType = "911";
            };
            if (_val[0] == "2205003") //StandBy
            {
                TheServiceType = "Intercept";
            };
            if (_val[0] == "2205005") //StandBy
            {
                TheServiceType = "InterFacility";
            };
            if (_val[0] == "2205007") //StandBy
            {
                TheServiceType = "MedicalTransport";
            };
            if (_val[0] == "2205009") //StandBy
            {
                TheServiceType = "MutualAide";
            };

            if (_val[0] == "2205009") //StandBy
            {
                TheServiceType = "PublicAssistance";
            };

            if (_val[0] == "2205013") //StandBy
            {
                TheServiceType = "Standby";
            };
            valObj.vSet = _val.slice(0);
            eResponse["eResponse.05"] = valObj;
            delete valObj;
        }
    }
    else
    {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.05", Description: "Type of Service Request  MANDATORY" })
    };

    //////////////////////eResponse.06
    var _response = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (TheCall.CallType != "StandBy")
    {
        _response = getValue(_SG, "eResponse.06");
        if (_response.IsNull != true) 
        {        
            _val.push(_response.ValueArray[0].val);                    
            valObj.IsNull = false;

            valObj.vSet = _val.slice(0);     
            eResponse["eResponse.06"] = valObj;
            delete valObj;
        }
    }
    else 
    {
        ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.06", Description: "Stand By Purpose/Type of Service Conflict " })
    };   
    
  
    if(eResponse.IsValid == true)
    {
        //////////////////////eResponse.01
        var _response = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        //This pattern verifies that the EMS Agency Number in eResponse.01 matches the EMS Agency Number in dAgency.02.
        _response = getValue(_AG, "eResponse.01");

        if (_response.IsNull == true) {
            if(dAgency["dAgency.02"] !=  eResponse["eResponse.01"])
            {
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.01", Description: "EMS Agency Number  dAgency.02 Must equal eResponse.01" })        
            }
            else
            {                   
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.01", Description: "EMS Agency Number  MANDATORY" })        
            }             
        }
        else {
            _val.push(_response.ValueArray[0].val);            
            valObj.IsNull = false;            
            //v2Array.push({ section: "E02", element: "E02_01", val: _val[0] });
        };
        valObj.vSet = _val.slice(0);
        eResponse["eResponse.01"] = valObj;
        delete valObj;

        //////////////////////eResponse.02
        var _response = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _response = getValue(_AG, "eResponse.02");
        if (_response.IsNull == true) 
        {
            if (isRequiredStateElement("eResponse.02")) 
            {
                _val.push("7701003");
                valObj.IsNull = true;
                valObj.NV = true;                    
            }
            else 
            {
                _val.push("7701005");
                valObj.IsNull = true;
                valObj.NV = true;                    
            }
        }
        else {
            _val.push(_response.ValueArray[0].val);                    
            valObj.IsNull = false;
        };
        valObj.vSet = _val.slice(0);
        eResponse["eResponse.02"] = valObj;
        delete valObj;
    };
                        
      
    //////////////////////eResponse.03
    var _response = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;        
    if (TheCall.CallType =="911")
    {
        _response = getValue(_eL, "eResponse.03");        
        if (_response.IsNull == true) 
        {
            if (isRequiredStateElement("eResponse.03") == true) 
            {
                _val.push("7701003");
                valObj.IsNull = true;
                valObj.NV = true;                
            }
        }
        else 
        {
            _val.push(_response.ValueArray[0].val);                
            valObj.IsNull = false;        
        }
    }
    else 
    {
        _val.push("7701001");
        valObj.IsNull = true;
        valObj.NV = true;        
    };
    valObj.vSet = _val.slice(0);
    eResponse["eResponse.03"] = valObj;
    delete valObj;

        
    //////////////////////eResponse.04
    var _response = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    //if (TheServiceType == "StandBy")
    //{
    _response = getValue(_eL, "eResponse.04");
    if (_response.IsNull == true) 
    {
        if (isRequiredStateElement("eResponse.04") == true) 
        {
            _val.push("7701003");
            valObj.IsNull = true;
            valObj.NV = true;
        }
        else 
        {
            _val.push("7701001");
            valObj.IsNull = true;
            valObj.NV = true;
        }
    }
    else 
    {
        _val.push(_response.ValueArray[0].val);
        valObj.IsNull = false;
    }
//};
        //else 
        //{
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.04", Description: "Stand By Response Number/Type of Service Conflict " });
        //};
     
        valObj.vSet = _val.slice(0);
        eResponse["eResponse.04"] = valObj;
        delete valObj;
        
        //////////////////////eResponse.07
        var _response = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = false;
        _response = getValue(_eL, "eResponse.07");
        if (_response.IsNull == true)
        {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.07", Description: "Primary Role of the Unit MANDATORY" });        
        }
        else
        {
            _val.push(_response.ValueArray[0].val);            
            valObj.IsNull = false;
          
        };
        valObj.vSet = _val.slice(0);
        eResponse["eResponse.07"] = valObj;
        delete valObj;
        
        //alert("A dispatch delay is any time delay that occurs from the time of PSAP call (eTimes.01) to the time the unit is notified by dispatch (eTimes.03).")
        //////////////////////eResponse.08
        //When a delay for a particular phase of a response is "None/No Delay", no other 
        //delays should be recorded for that phase.
        //eResponse.08[. = '2208013'
        var _response = [];
        var _val = [];
        var valObj = {};
        _response = getValue(_eL, "eResponse.08");       
        if (TheCall.CallType != "StandBy")
        {
            if (_response.IsNull == true)
            {
                if (isRequiredStateElement("eResponse.08") == true) 
                {
                    _val.push("7701003");
                    valObj.IsNull = true;
                    valObj.NV = true;                
                }
            }
            else {
                for (var i = 0; i < _response.ValueArray.length; i++) {
                    if ((_response.ValueArray[i].HasValue == true) && (_val.indexOf(_response.ValueArray[i].val) == -1)) {
                        _val.push(_response.ValueArray[i].val)
                        if (_val[0] == '2208013') {
                            eResponse.HasDelay == false;
                        }                        
                        valObj.IsNull = false;
                        
                    }
                };

                if (_val.indexOf('2208013') == -1) {
                    ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.08", Description: "Dispatch Delay Type Conflict" })
        
                };
                //  v2Array.push({ section: "E02", element: "E02_06", val: arr2.slice(0) });
            }
        }
        else 
        {
            _val.push("7701001");
            valObj.IsNull = true;
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eResponse["eResponse.08"] = valObj;
        delete valObj;
    
        //////////////////////eResponse.09
        var _response = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        //context="nem:eResponse.09[. = '2209011']">
        //This rule fires when there is an instance of eResponse.09 Type of Response Delay 
        //set to "None/No Delay".

        //alert("A response delay is any time delay that occurs from the time the unit is notified by dispatch (eTimes.03) to the time the unit arrived on scene (eTimes.06).")
        eResponse.HasDelay = false;
        _response = getValue(_eL, "eResponse.09");

        if (eResponse.HasDelay == false) 
        {
            if (_response.IsNull == true) 
            {
                if (isRequiredStateElement("eResponse.09") == true) 
                {
                    _val.push("7701003");
                    valObj.IsNull = true;
                    valObj.NV = true;
                }
            }
            else 
            {
                for (var i = 0; i < _response.ValueArray.length; i++) 
                {
                    if ((_response.ValueArray[i].HasValue == true) && (_val.indexOf(_response.ValueArray[i].val) == -1)) {
                        _val.push(_response.ValueArray[i].val)

                        if (_val == '2209011') 
                        {
                            eResponse.HasDelay == false;
                        }
                    }
                };
                
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
                if ('2209011' in _val) //if None, than None only
                {
                    if (_val.length > 1) 
                    {
                        ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.09", Description: "Response Delay Type Conflict" })
                        eResponse.Errors = ErrorList.push();
                        eResponse.HasErrors = true;
                    }
                };
                //v2Array.push({ section: "E02", element: "E02_07", val: arr2.slice(0) });
            }
        }
        else 
        {
            _val.push("7701001");
            valObj.IsNull = true;
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eResponse["eResponse.09"] = valObj;
        delete valObj;
    
        //alert("A scene delay is any time delay that occurs from the time the unit arrived on scene (eTimes.06) to the time the unit left the scene (eTimes.09).")
        //////////////////////eResponse.10
        //eResponse.10" context="nem:eResponse.10[. = '2210017']">
        //This rule fires when there is an instance of eResponse.10 Type of Scene Delay set to 
        //"None/No Delay". -->

        var _response = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _response = getValue(_eL, "eResponse.10");
        if (TheCall.CallType != "StandBy")
        {
            if (_response.IsNull == true) 
            {
                if (isRequiredStateElement("eResponse.10") == true) 
                {
                    _val.push("7701003");
                    valObj.IsNull = true;
                    valObj.NV = true;
                }
            }
            else 
            {
                for (var i = 0; i < _response.ValueArray.length; i++) 
                {
                    if ((_response.ValueArray[i].HasValue == true) && (_val.indexOf(_response.ValueArray[i].val) == -1)) 
                    {
                        _val.push(_response.ValueArray[i].val);
                        if (_val[0] == '2210017') 
                        {
                            Call.HasDelay == false;
                        }
                    }
                };
                
                valObj.IsNull = false;
                

                if ('2210017' in _val) //if None, than None only
                {
                    if (_val[0].length > 1) 
                    {
                        ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.18", Description: "Scene Delay Type Conflict" })
        
                    }
                }
            }
        }
        else 
        {
            _val.push("7701001");
            valObj.IsNull = true;
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eResponse["eResponse.10"] = valObj;
        delete valObj;
        
        //////////////////////eResponse.11
        var _response = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        //nem:eResponse.11[. = '2211011']">
        //This rule fires when there is an instance of eResponse.11 Type of Transport Delay set to 
        //"None/No Delay".

        //alert("A transport delay is any time delay that occurs from the time the unit left the scene (eTimes.09) to the time the patient arrived at the destination (eTimes.10).")
        _response = getValue(_eL, "eResponse.11");
        if (TheCall.CallType != "StandBy") //we have no delay
        {
            if (_response.IsNull == true) 
            {
                if (isRequiredStateElement("eResponse.11") == true) 
                {
                    _val.push("7701003");
                    valObj.IsNull = true;
                    valObj.NV = true;
                }
            }
            else 
            {
                for (var i = 0; i < _response.ValueArray.length; i++) 
                {
                    if ((_response.ValueArray[i].HasValue == true) && (_val.indexOf(_response.ValueArray[i].val) == -1)) 
                    {
                        _val.push(_response.ValueArray[i].val);

                        if (_val[0] == '2211011') 
                        {
                            Call.HasDelay == true
                        };
                    }
                };
                
                valObj.IsNull = false;
                
                if ('2211011' in _val) //if None, than None only
                {
                    ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.11", Description: "Transport Delay Type Conflict" });

                };
            }
        }
        else 
        {            
            _val.push("7701001");
            valObj.IsNull = true;
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eResponse["eResponse.11"] =  valObj;
        delete valObj;

        
        //////////////////////eResponse.12
        var _response = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _response = getValue(_eL, "eResponse.12");
        if (TheCall.CallType != "StandBy")
        {
            if (_response.IsNull == true)
            {
                if (isRequiredStateElement("eResponse.12") == true) 
                {
                    _val.push("7701003")
                    valObj.IsNull = true;
                    valObj.NV = true;
                }
            }
            else
            {
                for (var i = 0; i < _response.ValueArray.length; i++)
                {
                    if ((_response.ValueArray[i].HasValue == true) && (_val.indexOf(_response.ValueArray[i].val) == -1)) {
                        _val.push(_response.ValueArray[i].val);

                        if (_val[0] == "2212015") {
                            Call.HasDelay == true
                        }
                    }
                };
                
                valObj.IsNull = false;

                if(_val.indexOf("2212015") == -1)
                {
                    ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.12", Description: "Turn Around Delay Type Conflict" })
        
                };
                //v2Array.push({ section: "E02", element: "E02_10", val: arr2.slice(0) });
            }
        }
        else 
        {
            _val.push("7701001");
            valObj.IsNull = true;
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eResponse["eResponse.12"] =  valObj;
        delete valObj
        
        //////////////////////eResponse.13
        var _response = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _response = getValue(_eL, "eResponse.13");
        if (_response.IsNull == true) 
        {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.13", Description: "EMS Unit number MANDATORY" })
        }
        else 
        {
            _val.push(_response.ValueArray[0].val);            
            valObj.IsNull = false;
          
            //v2Array.push({ section: "E02", element: "E02_11", val: _val });            
        };
        valObj.vSet = _val.slice(0);
        eResponse["eResponse.13"] =  valObj;
        delete valObj

        //////////////////////eResponse.14
        var _response = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _response = getValue(_eL, "eResponse.14");
        if (_val == null) 
        {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.14", Description: "EMS Unit Call Sign MANDATORY" })

        }
        else 
        {
            _val.push(_response.ValueArray[0].val);            
            valObj.IsNull = false;
        };
        valObj.vSet = _val.slice(0);
        eResponse["eResponse.14"] =  valObj;
        delete valObj
        
        //////////////////////eResponse.15
        var _response = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;

        _response = getValue(_eL, "eResponse.15");
        if (_val == null) 
        {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.15", Description: "Unit Level of Care MANDATORY" })        
        }
        else 
        {
            _val.push(_response.ValueArray[0].val);            
            valObj.IsNull = false;        
        };
        valObj.vSet = _val.slice(0);
        eResponse["eResponse.15"] =  valObj;
        delete valObj

        
        //////////////////////eResponse.16
        var _response = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;

        _response = getValue(_eL, "eResponse.16");
        if (_response.IsNull != true) 
        {
            _val = _response.ValueArray[0].val;            
            valObj.IsNull = false;
        };
        valObj.vSet = _val.slice(0);
        eResponse["eResponse.16"] =  valObj;
        delete valObj
        
        //////////////////////eResponse.17
        var _response = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _response = getValue(_eL, "eResponse.17");
        if (_response.IsNull != true) 
        {
            _val.push(_response.ValueArray[0].val);           
            valObj.IsNull = false;
        };
        valObj.vSet = _val.slice(0);
        eResponse["eResponse.17"] =  valObj;
        delete valObj
      
        //////////////////////eResponse.18
        var _response = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _response = getValue(_eL, "eResponse.18");
        if (_response.IsNull != true) 
        {
            _val.push(_response.ValueArray[0].val);            
            valObj.IsNull = false;
        };
        valObj.vSet = _val.slice(0);
        eResponse["eResponse.18"] =  valObj;
        delete valObj
        
        //////////////////////eResponse.19
        var _response = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _response = getValue(_eL, "eResponse.19");
       // if (TheCall.IsCancelled == false)
       // {
            if (_response.IsNull == true)
            {
                if (isRequiredStateElement("eResponse.19") == true) 
                {
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.19", Description: "Beginning Odometer REQUIRED" });
                }
            }
            else 
            {
                _val.push(_response.ValueArray[0].val);     
                var bOd = _val[0];
                valObj.IsNull = false;
            }
      //  };
        valObj.vSet = _val.slice(0);
        eResponse["eResponse.19"] =  valObj;
        delete valObj

        //////////////////////eResponse.20
        var _response = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _response = getValue(_eL, "eResponse.20");
        if (TheCall.CallType != "PriorToScene")  //if Cancelled prior to arrival on Scene, no data
        {
            if (_response.IsNull == true) 
            {
                if (isRequiredStateElement("eResponse.20") == true) 
                {
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.20", Description: "On-scene Odometer MANDATORY" })
                }
            }
            else 
            {
                _val.push(_response.ValueArray[0].val);
                if (_val[0] <= bOd) 
                {
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.20", Description: "On-scene Odometer Must be greater than Beginning" })
                }
                else 
                {                    
                    var oOc = _val[0]
                    valObj.IsNull = false;
                }
            }
            valObj.vSet = _val.slice(0);
            eResponse["eResponse.20"] =  valObj;
            delete valObj
        };
     

        
        //////////////////////eResponse.21
        var _response = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _response = getValue(_eL, "eResponse.21");
        if (TheCall.CallType != "PriorToScene")   //if Cancelled prior to arrival on Scene, no data
        {
            if (_response.IsNull == true) 
            {
                if (isRequiredStateElement("eResponse.21") == true) 
                {
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.21", Description: "Destination Odometer MANDATORY" })
                }
            }
            else 
            {
                _val.push(_response.ValueArray[0].val);
                if (_val[0] <= oOc) 
                {
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.21", Description: "Destination Odometer Must be greater than Beginning/On-Scene Mileage" })
                }
                else 
                {
                    var dOd = _val[0];
                    valObj.IsNull = false;
                };
                valObj.vSet = _val.slice(0);
                eResponse["eResponse.21"] = valObj;
                delete valObj
            }
        };

        //////////////////////eResponse.22
        var _response = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _response = getValue(_eL, "eResponse.22");
        if (TheCall.CallType != "PriorToScene")  //if Cancelled prior to arrival on Scene, no data
        {
            if (_response.IsNull == true) 
            {
                if (isRequiredStateElement("eResponse.22") == true) 
                {
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.22", Description: "Ending Odometer MANDATORY" });
                }
            }
            else 
            {
                _val.push(_response.ValueArray[0].val);                
                if (_val[0] <= dOd) 
                {
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.22", Description: "Ending Odometer Must be greater than Beginning/On-Scene Mileage" })
                }
                else
                {
                    var dOd = _val[0];
                    valObj.IsNull = false;
                };
            }
        };
        valObj.vSet = _val.slice(0);
        eResponse["eResponse.22"] =  valObj;
        delete valObj
            
        //////////////////////eResponse.23
        var _response = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
    
        if (TheCall.CallType != "PriorToScene")    //if Cancelled prior to arrival on Scene, no data
        {
            _response = getValue(_eL, "eResponse.23");
            if (_response.IsNull == true) 
            {        
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.23", Description: "Response Mode to Scene MANDATORY" })
            }
            else
            {
                _val.push(_response.ValueArray[0].val);
                valObj.IsNull = false;           
            }
        };
        valObj.vSet = _val.slice(0);
        eResponse["eResponse.23"] =  valObj;
        delete valObj

        //////////////////////eResponse.24
        
        var _response = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _response = getValue(_eL, "eResponse.24");
        if (TheCall.CallType != "PriorToScene")   //if Cancelled prior to arrival on Scene, no data
        {
            if (_response.IsNull == true) 
            {
                if (isRequiredStateElement("eResponse.24") == true) 
                {
                    _val.push("7701003")
                    valObj.IsNull = true;
                    valObj.NV = true;                
                }
            }
            else 
            {
                for (var i = 0; i < _response.ValueArray.length; i++) 
                {
                    if ((_response.ValueArray[i].HasValue == true) && (_val.indexOf(_response.ValueArray[i].val) == -1)) 
                    {
                        _val.push(_response.ValueArray[i].val);                        
                    }
                };               
                valObj.IsNull = false;
            }
        }    
        else 
        {
            _val.push("7701001")
            valObj.IsNull = true;
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eResponse["eResponse.24"] = valObj;
        delete valObj
    
    return eResponse;
};
var seteState = function (TheCall) 
{
    /*
    pState = TheCall.eState;
    var eState = new Object();

    if (pState.HasDataSet == false) {
        eState["IsValid"] = false;
        eState["HasErrors"] = true;
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eState", Description: "eState.HasDataSet =false  " });
        eResponse.Errors = ErrorList.slice(0);
        return eResponse;
    }
    else {
        if (_sectionSG != -1) {
            if (typeof pState.attributes.sections != 'undefined') {
                var _SG = [];
                var _SG = pState.attributes.sections[_sectionSG].attributes.elements;
                if (_SG[0] != -1) {
                    eState.IsValid = true;
                    RequiredElements = [
'dCustomConfiguration.01', 'dCustomConfiguration.02', 'dCustomConfiguration.03', 'dCustomConfiguration.04', 'dCustomConfiguration.05',
'dAgency.01', 'dAgency.02', 'dAgency.03', 'dAgency.04', 'dAgency.05', 'dAgency.06', 'dAgency.07', 'dAgency.08', 'dAgency.09', 'dAgency.10',
'dAgency.11', 'dAgency.12', 'dAgency.13', 'dAgency.14', 'dAgency.15', 'dAgency.16', 'dAgency.17', 'dAgency.18', 'dAgency.19',
'dAgency.20', 'dAgency.21', 'dAgency.22', 'dAgency.25', 'dAgency.26', 'dContact.01', 'dContact.02', 'dContact.03', 'dContact.05',
'dContact.06', 'dContact.07', 'dContact.08', 'dContact.10', 'dContact.11', 'dContact.12', 'dContact.13', 'dContact.14',
'dConfiguration.01', 'dConfiguration.02', 'dConfiguration.03', 'dConfiguration.04', 'dConfiguration.05', 'dConfiguration.06',
'dConfiguration.07', 'dConfiguration.08', 'dConfiguration.09', 'dConfiguration.10', 'dConfiguration.11', 'dConfiguration.13',
'dConfiguration.14', 'dConfiguration.15', 'dConfiguration.16', 'dVehicle.01', 'dVehicle.04', 'dVehicle.10', 'dPersonnel.01',
'dPersonnel.02', 'dPersonnel.03', 'dPersonnel.11', 'dPersonnel.12', 'dPersonnel.13', 'dPersonnel.22', 'dPersonnel.23', 'dPersonnel.24',
'dPersonnel.31', 'dPersonnel.32', 'dPersonnel.34', 'dPersonnel.35', 'dCustomResults.01', 'dCustomResults.02', 'dAgency.01', 'dAgency.02',
'dAgency.04', 'eCustomConfiguration.01', 'eCustomConfiguration.02', 'eCustomConfiguration.03', 'eCustomConfiguration.04', 'eCustomConfiguration.05',
'eRecord.01', 'eRecord.02', 'eRecord.03', 'eRecord.04', 'eResponse.01', 'eResponse.02', 'eResponse.03', 'eResponse.04', 'eResponse.05', 'eResponse.06',
'eResponse.07', 'eResponse.08', 'eResponse.09', 'eResponse.10', 'eResponse.11', 'eResponse.12', 'eResponse.13', 'eResponse.14',
'eResponse.15', 'eResponse.23', 'eResponse.24', 'eDispatch.01', 'eDispatch.02', 'eCrew.01', 'eCrew.02', 'eCrew.03', 'eTimes.01', 'eTimes.03',
'eTimes.05', 'eTimes.06', 'eTimes.07', 'eTimes.08', 'eTimes.09', 'eTimes.11', 'eTimes.12', 'eTimes.13', 'eTimes.14', 'ePatient.02',
'ePatient.03', 'ePatient.07', 'ePatient.08', 'ePatient.09', 'ePatient.13', 'ePatient.14', 'ePatient.15', 'ePatient.16', 'ePatient.17',
'ePayment.01', 'ePayment.50', 'eScene.01', 'eScene.06', 'eScene.07', 'eScene.08', 'eScene.09', 'eScene.10', 'eScene.14', 'eScene.15',
'eScene.16', 'eScene.17', 'eScene.18', 'eScene.19', 'eScene.20', 'eScene.21', 'eSituation.01', 'eSituation.02', 'eSituation.03', 'eSituation.04',
'eSituation.05', 'eSituation.06', 'eSituation.07', 'eSituation.08', 'eSituation.09', 'eSituation.10', 'eSituation.11', 'eSituation.12', 'eSituation.13',
'eSituation.14', 'eSituation.17', 'eInjury.01', 'eInjury.02', 'eInjury.03', 'eInjury.04', 'eInjury.05', 'eInjury.06', 'eInjury.07', 'eInjury.08',
'eInjury.09', 'eArrest.01', 'eArrest.02', 'eArrest.03', 'eArrest.04', 'eArrest.05', 'eArrest.06', 'eArrest.07', 'eArrest.08', 'eArrest.09', 'eArrest.10',
'eArrest.11', 'eArrest.12', 'eArrest.13', 'eArrest.14', 'eArrest.15', 'eArrest.16', 'eArrest.17', 'eArrest.18', 'eHistory.01', 'eHistory.05',
'eHistory.06', 'eHistory.08', 'eHistory.12', 'eHistory.17', 'eNarrative.01', 'eVitals.01', 'eVitals.02', 'eVitals.03', 'eVitals.04', 'eVitals.05',
'eVitals.06', 'eVitals.07', 'eVitals.08', 'eVitals.10', 'eVitals.12', 'eVitals.14', 'eVitals.16', 'eVitals.17', 'eVitals.18', 'eVitals.19', 'eVitals.20',
'eVitals.21', 'eVitals.22', 'eVitals.23', 'eVitals.24', 'eVitals.26', 'eVitals.27', 'eVitals.28', 'eVitals.29', 'eVitals.30', 'eVitals.31', 'eExam.01',
'eExam.02', 'eProtocols.01', 'eProtocols.02', 'eMedications.01', 'eMedications.02', 'eMedications.03', 'eMedications.05', 'eMedications.06', 'eMedications.07', 'eMedications.08',
'eMedications.09', 'eMedications.10', 'eProcedures.01', 'eProcedures.02', 'eProcedures.03', 'eProcedures.05', 'eProcedures.06', 'eProcedures.07', 'eProcedures.08',
'eProcedures.09', 'eProcedures.10', 'eProcedures.13', 'eAirway.01', 'eAirway.02', 'eAirway.03', 'eAirway.04', 'eAirway.06', 'eAirway.07', 'eAirway.08',
'eAirway.09', 'eDisposition.01', 'eDisposition.02', 'eDisposition.03', 'eDisposition.04', 'eDisposition.05', 'eDisposition.06', 'eDisposition.07', 'eDisposition.11',
'eDisposition.12', 'eDisposition.16', 'eDisposition.17', 'eDisposition.18', 'eDisposition.19', 'eDisposition.20', 'eDisposition.21', 'eDisposition.22', 'eDisposition.23',
'eDisposition.24', 'eDisposition.25', 'eOutcome.01', 'eOutcome.02', 'eCustomResults.01', 'eCustomResults.02', 'eOther.05', 'eOther.06', 'eOther.08'
                    ];
                }
            }
        }
    };

    if (eState.IsValid== true) 
    {
        //////////////////////eState.01    
        var _state = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _state = getValue(_SG, "eState.01");
        if (_response.IsNull == true) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eState.01", Description: "Missing State Required Elements List" })
        }
        else 
        {
            for (var i = 0; i < _state.ValueArray.length; i++) 
            {
                if ((_state.ValueArray[i].HasValue == true) && (_val.indexOf(_state.ValueArray[i].val) == -1)) 
                {
                    _val.push(_response.ValueArray[i].val)                    
                    valObj.IsNull = false;
                        
                }
            };                
        };
        valObj.vSet = _val.slice(0);
        eState["eState.01"] = valObj;
        delete valObj;


    };
    return eState;
    */
};
var seteSituation = function (TheCall)
{
    pSituation = TheCall.pSituation;
    var eSituation = new Object();
    eSituation["HasDelay"] = false;
    var ErrorList = [];

    if (pSituation.HasDataSet == false) {
        eSituation["IsValid"] = false;
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eSituation", Description: "eSituation.HasDataSet =false  " });

    }
    else
    {
        eSituation["IsValid"] = true;
        if (typeof pSituation.attributes.elements != 'undefined')
        {
            var _eL = [];
            _eL = pSituation.attributes.elements;
            if (_eL.length <= 0)
            {
                eSituation["IsValid"] = false;
            }
        }
        else
        {
            eSituation["IsValid"] = false;
        }

    };

    ///////////////////////////////////////////////////
    //////////////////////eSituation.01
    if (eSituation["IsValid"] == true) {
        var _situation = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        if (eSituation.IsValid == true) {
            _situation = getValue(_eL, "eSituation.01");
            if (_situation.IsNull == true) {
                if (isRequiredStateElement("eSituation.01")) {
                    _val.push("7701003");
                    valObj.NV = true;
                }
            }
            else {
                _val.push(_situation.ValueArray[0].val);
                valObj.IsNull = false;
            }
        }
    }
    else
    {
        _val.push("7701001");
        valObj.NV = true;
    };
        valObj.vSet = _val.slice(0);
        eSituation["eSituation.01"] = valObj;
        delete valObj;

        //////////////////////eSituation.02
        var _situation = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        if (eSituation.IsValid == true)
        {
            _situation = getValue(_eL, "eSituation.02");
            if (_situation.IsNull == true) {
                if (isRequiredStateElement("eSituation.02")) {
                    _val.push("7701003");
                    valObj.NV = true;
                }
            }
            else {
                _val.push(_situation.ValueArray[0].val);
                valObj.IsNull = false;
            }
        }
        else {
            _val.push("7701001");
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eSituation["eSituation.02"] = valObj;
        delete valObj;

        eSituation["PatientComplaintGroup"] = -1;
        eSituation.IsComplaint = false;
        ///////////////////////////////////////eSituation.PatientComplaintGroup
        if (typeof pSituation.attributes.sections != 'undefined') {
            var _pCG = [];
            _pCG = getSectionIndex(pSituation, "eSituation.PatientComplaintGroup");

            if (_pCG[0] != -1)
            {
                eSituation["PatientComplaintGroup"] = _pCG.length;
                eSituation.IsComplaint = true;
            };
        };
        
        if (eSituation["eSituation.PatientComplaintGroup"] != -1)
        {
            if (eSituation.IsComplaint == true) 
            {
                var PGArray = [];
                for (var i = 0; i < _pCG.length; i++) {
                    var PCGroup = new Object();
                    var _eRG = [];
                    _eRG = pSituation.attributes.sections[_pCG[i]].attributes.elements

                    //////////////////////eSituation.03
                    var _situation = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;

                    if ((eSituation.IsComplaint == true) && (TheCall.IsCancelled != true)) {
                        _situation = getValue(_eRG, "eSituation.03");
                        if (_situation.IsNull == true) {
                            if (isRequiredStateElement("eSituation.03") == true) {
                                _val.push("7701003");
                                valObj.IsNull = true;
                                valObj.NV = true;
                            }
                            else {
                                _val.push("7701005");
                                valObj.IsNull = true;
                                valObj.NV = true;
                            }
                        }
                        else {
                            _val.push(_situation.ValueArray[0].val)
                            valObj.IsNull = false;
                        }
                    }
                    else {
                        _val.push("7701001");
                        valObj.IsNull = true;
                        valObj.NV = true;
                    };

                    valObj.vSet = _val.slice(0);
                    PCGroup["eSituation.03"] = valObj;
                    delete valObj;

                    //////////////////////eSituation.04
                    var _situation = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;

                    if ((eSituation.IsComplaint == true) && (TheCall.IsCancelled != true))
                    {
                        _situation = getValue(_eRG, "eSituation.04");
                        if (_situation.IsNull == true) {
                            if (isRequiredStateElement("eSituation.04") == true) {
                                _val.push("7701003");
                                valObj.IsNull = true;
                                valObj.NV = true;
                            }
                            else {
                                _val.push("7701005");
                                valObj.IsNull = true;
                                valObj.NV = true;
                            }
                        }
                        else {
                            _val.push(_situation.ValueArray[0].val)
                            valObj.IsNull = false;
                        }
                    }
                    else {
                        _val.push("7701001");
                        valObj.IsNull = true;
                        valObj.NV = true;
                    };

                    valObj.vSet = _val.slice(0);
                    PCGroup["eSituation.04"] = valObj;
                    delete valObj;

                    //////////////////////eSituation.05    
                    var _situation = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;

                    if ((eSituation.IsComplaint == true) && (TheCall.IsCancelled != true)) {
                        _situation = getValue(_eRG, "eSituation.05");
                        if (_situation.IsNull == true) {
                            if (isRequiredStateElement("eSituation.05") == true) {
                                _val.push("7701003");
                                valObj.IsNull = true;
                                valObj.NV = true;
                            }
                            else {
                                _val.push("7701005");
                                valObj.IsNull = true;
                                valObj.NV = true;
                            }
                        }
                        else {
                            _val.push(_situation.ValueArray[0].val)
                            valObj.IsNull = false;
                        }
                    }
                    else {
                        _val.push("7701001");
                        valObj.IsNull = true;
                        valObj.NV = true;
                    };

                    valObj.vSet = _val.slice(0);
                    PCGroup["eSituation.05"] = valObj;
                    delete valObj;


                    //////////////////////eSituation.06
                    var _situation = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;

                    if ((eSituation.IsComplaint == true) && (TheCall.IsCancelled != true)) {
                        _situation = getValue(_eRG, "eSituation.06");
                        if (_situation.IsNull == true) {
                            if (isRequiredStateElement("eSituation.06") == true) {
                                _val.push("7701003");
                                valObj.IsNull = true;
                                valObj.NV = true;
                            }
                            else {
                                _val.push("7701005");
                                valObj.IsNull = true;
                                valObj.NV = true;
                            }
                        }
                        else {
                            _val.push(_situation.ValueArray[0].val)
                            valObj.IsNull = false;
                        }
                    }
                    else {
                        _val.push("7701001");
                        valObj.IsNull = true;
                        valObj.NV = true;
                    };

                    valObj.vSet = _val.slice(0);
                    PCGroup["eSituation.06"] = valObj;
                    delete valObj;


                    PGArray.push(PCGroup);

                };
                eSituation["PatientComplaintGroup"] = PGArray.slice();
            }
        };
        
        ////////////////////////////////////



        //////////////////////eSituation.07
        var _situation = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        if ((eSituation.IsValid == true) && (TheCall.IsCancelled != true)) {
            _situation = getValue(_eL, "eSituation.07");

            if (_situation.IsNull == true) {

                _val.push("7701003");
                valObj.NV = true;

            }
            else {
                _val.push(_situation.ValueArray[0].val);
                valObj.IsNull = false;
            }
        }
        else {
            _val.push("7701001");
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eSituation["eSituation.07"] = valObj;
        delete valObj;

        //////////////////////eSituation.08
        var _situation = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        if ((eSituation.IsValid == true) && (TheCall.IsCancelled != true)) {
            _situation = getValue(_eL, "eSituation.08");
            if (_situation.IsNull == true) {

                _val.push("7701003");
                valObj.NV = true;

            }
            else {
                _val.push(_situation.ValueArray[0].val);
                valObj.IsNull = false;
            }
        }
        else {
            _val.push("7701001");
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eSituation["eSituation.08"] = valObj;
        delete valObj;


        //////////////////////eSituation.09
        
        var _situation = [];
        var _val = [];
        var valObj = {};
        
        if ((eSituation.IsValid == true) && (TheCall.IsCancelled != true)) {
            _situation = getValue(_eL, "eSituation.09");
            if (_situation.IsNull == true) {

                _val.push("7701003");
                valObj.NV = true;

            }
            else {
                _val.push(_situation.ValueArray[0].val)
                valObj.IsNull = false;
            }
        }
        else {
            _val.push("7701001");
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eSituation["eSituation.09"] = valObj;
        delete valObj;


        //////////////////////eSituation.10
        var _situation = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
       

        if ((eSituation.IsValid == true) && (TheCall.IsCancelled != true))
        {
            _situation = getValue(_eL, "eSituation.10");
            if (_situation.IsNull == true)
            {
                _val.push("7701003");
                valObj.IsNull = true;
                valObj.NV = true;
            }
            else
            {
                for (var i = 0; i < _situation.ValueArray.length; i++)
                {
                    if ((_situation.ValueArray[i].HasValue == true) && (_val.indexOf(_situation.ValueArray[i].val) == -1)) {
                        _val.push(_situation.ValueArray[i]);
                    };
                    valObj.IsNull = false;
                }
            }                         
        }
        else {
            _val.push("7701001");
            valObj.IsNull = true;
            valObj.NV = true;
        };

        valObj.vSet = _val.slice(0);
        eSituation["eSituation.10"] = valObj;
        delete valObj;

        //////////////////////eSituation.11
        var _situation = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        if ((eSituation.IsValid == true) && (TheCall.IsCancelled != true)) {
            _situation = getValue(_eL, "eSituation.11");
            if (_situation.IsNull == true) {

                _val.push("7701003");
                valObj.NV = true;

            }
            else {
                _val.push(_situation.ValueArray[0].val);
                valObj.IsNull = false;
            }
        }
        else {
            _val.push("7701001");
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eSituation["eSituation.11"] = valObj;
        delete valObj;
        

        //////////////////////eSituation.12
        var _situation = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        if ((eSituation.IsValid == true) && (TheCall.IsCancelled != true)) {
            _situation = getValue(_eL, "eSituation.12");
            if (_situation.IsNull == true) {

                _val.push("7701003");
                valObj.NV = true;

            }
            else {
                for (var i = 0; i < _situation.ValueArray.length; i++) {
                    if ((_situation.ValueArray[i].HasValue == true) && (_val.indexOf(_situation.ValueArray[i].val) == -1)) {
                        _val.push(_situation.ValueArray[i]);
                    };
                    valObj.IsNull = false;
                }
            }
        }
        else {
            _val.push("7701001");
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eSituation["eSituation.12"] = valObj;
        delete valObj;

        //////////////////////eSituation.13
        var _situation = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        if ((eSituation.IsValid == true) && (TheCall.IsCancelled != true)) {
            _situation = getValue(_eL, "eSituation.13");
            if (_situation.IsNull == true) {

                _val.push("7701003");
                valObj.NV = true;

            }
            else {
                _val.push(_situation.ValueArray[0].val);
                valObj.IsNull = false;
            }
        }
        else {
            _val.push("7701001");
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eSituation["eSituation.13"] = valObj;
        delete valObj;
        
        eSituation["WorkRelatedGroup"] = -1
        ///////////////////////////////////////eSituation.WorkRelatedGroup
        if (typeof pSituation.attributes.sections != 'undefined')
        {
            var _wRG = [];
            _wRG = getSectionIndex(pSituation, "eSituation.WorkRelatedGroup");
            if (_wRG[0] != -1)
            {
                var _eWRG = [];
                _eWRG = pSituation.attributes.sections[_wRG].attributes.elements;
                eSituation.IsValid = false;
                eSituation["WorkRelatedGroup"] = 1;
            }
            else
            {
                eSituation.IsValid = true;
            };
        };

        if (eSituation["WorkRelatedGroup"] != -1)
        {
            //////////////////////eSituation.14
            var _situation = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            if (eSituation.IsValid == true) {
                _situation = getValue(_eWRG, "eSituation.14");
                if (_situation.IsNull == true) {
                    if (isRequiredStateElement("eScene.04") == true) {
                        _val.push("7701003");
                        valObj.NV = true;
                    }
                    else
                    {
                        _val.push("7701005");
                        valObj.NV = true;
                    }
                }
                else
                {
                    _val.push(_situation.ValueArray[0].val);
                    valObj.IsNull = false;
                }
            }
            else
            {
                _val.push("7701001");
                valObj.NV = true;
            };
            valObj.vSet = _val.slice(0);
            eSituation["eSituation.14"] = valObj;
            delete valObj;



            //////////////////////eSituation.15
            var _situation = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;

            _situation = getValue(_eWRG, "eSituation.15");
            if ((eSituation.IsValid == true) && (TheCall.IsCancelled != true)) {
                if (_situation.IsNull != true) {
                    _val.push(_situation.ValueArray[i].val)
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                    eSituation["eSituation.15"] = valObj;
                    delete valObj;
                }
            };
            
            //////////////////////eSituation.16
            var _situation = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _situation = getValue(_eWRG, "eSituation.16");
            if ((eSituation.IsValid == true) && (TheCall.IsCancelled != true)) {
                if (_situation.IsNull != true) {
                    _val.push(_situation.ValueArray[0].val)
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                    eSituation["eSituation.16"] = valObj;
                    delete valObj;
                }
            };

        };
        

        if ((eSituation.IsValid == true) && (TheCall.IsCancelled != true)) {
            var _situation = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _situation = getValue(_eL, "eSituation.17");
            if (_situation.IsNull == true) {
                if (isRequiredStateElement("eSituation.17") == true) {
                    _val.push("7701003");
                    valObj.IsNull = true;
                    valObj.NV = true;
                }
            }
            else {
                for (var i = 0; i < _situation.ValueArray.length; i++) {
                    if ((_situation.ValueArray[i].HasValue == true) && (_val.indexOf(_situation.ValueArray[i].val) == -1)) {
                        _val.push(_situation.ValueArray[i]);
                    };

                    valObj.IsNull = false;
                }
            }

            valObj.vSet = _val.slice(0);
            eSituation["eSituation.17"] = valObj;
            delete valObj;
        }
        else {
            _val.push("7701001");
            valObj.IsNull = true;
            valObj.NV = true;
        };
    return eSituation;
};