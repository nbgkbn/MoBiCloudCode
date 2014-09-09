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
var setCallInventory = function (parseObject) {
    //iterate and interogate
    var iArr = [];
    var Inventory = []
    //console.log(parseObject.attributes.sections.length)
    for (var i = 0; i <= parseObject.attributes.sections.length - 1; i++) {
        iArr.push(parseObject.attributes.sections[i].attributes.name)
    }
    Inventory = iArr.slice(0);
    return Inventory
};
var createTheCall = function (parseObject) {
    var Call = new Object();
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

    //// ///////////////eRecord
    var TheCall = new Object();
    eRecordObject = getObjectFromOLTPExtract(parseObject, "eRecord");    
    eRecordObject.HasDataSet = false;
    if (eRecordObject.IsUndefined != true) {
        eRecordObject.HasDataSet = true;
    }
    else {
        //MUST have eDispatch - contains a Mandatory Element
    };

    TheCall.pRecord = eRecordObject;
    TheCall.eRecord = seteRecord(TheCall);
    TheCall.PCRID = eRecordObject["eRecord.01"];

    if (TheCall.eRecord.HasErrors == true) {
        if (TheCall.eRecord.Errors.length > 0) {
            for (var i = 0; i < TheCall.eRecord.Errors.length; i++) {
                //console.log(TheCall.eRecord.Errors[i].ElementID + " " + TheCall.eRecord.Errors[i].Description);
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
        //MUST have eDispatch - contains a Mandatory Element
    };
    TheCall.pDispatch = eDispatchObject;
    TheCall.eDispatch = seteDispatch(TheCall);
    TheCall.HasEMD = TheCall.eDispatch["HasEMD"];
    TheCall.IsEmergent = TheCall.eDispatch["IsEmergent"];
    TheCall.StartAirwayTime = false;
    TheCall.EndAirwayTime = false;
    console.log(TheCall)
    if (TheCall.eDispatch.HasErrors == true) {
        if (TheCall.eDispatch.Errors.length > 0) {
            for (var i = 0; i < TheCall.eDispatch.Errors.length; i++) {
                //console.log(TheCall.eDispatch.Errors[i].ElementID + " " + TheCall.eDispatch.Errors[i].Description);
            }
        }
    };


    ///////////////////////eDisposition    
    eDispositionObject = getObjectFromOLTPExtract(parseObject, "eDisposition");  
    eDispositionObject.HasDataSet = false;
    if (eDispositionObject.IsUndefined != true)
    {
        eDispositionObject.HasDataSet = true;
    }
    else {
        //MUST have eDispatch - contains a Mandatory Element
    };
    //MUST have eDisposition - contains a Mandatory Element
    TheCall.pDisposition = eDispositionObject;
    TheCall.eDisposition = seteDisposition(TheCall);

    if (TheCall.eDisposition.HasErrors == true)
    {
        if (TheCall.eDisposition.Errors.length > 0) {
            for (var i = 0; i < TheCall.eDisposition.Errors.length; i++) {
                //console.log(TheCall.eDisposition.Errors[i].ElementID + " " + TheCall.eDisposition.Errors[i].Description);
            }
        }
    };

    TheCall.IsCancelled = TheCall.eDisposition["IsCancelled"];
    TheCall.HasPatient = TheCall.eDisposition["HasPatient"];
    TheCall.HasTreatment = TheCall.eDisposition["HasTreatment"];
    TheCall.HasTransport = TheCall.eDisposition["HasTransport"];
    TheCall.IsStandby = TheCall.eDisposition["IsStandby"];
    TheCall.IsAirTransport = TheCall.eDisposition["IsAirTransport"];
    TheCall.IsGroundTransport = TheCall.eDisposition["IsGroundTransport"]
    TheCall.IsWaterTransport = TheCall.eDisposition["IsWaterTransport"]
    


    ////////////////////////eTimes
    eTimesObject = getObjectFromOLTPExtract(parseObject, "eTimes");
    eTimesObject.HasDataSet = false;
    if (eTimesObject.IsUndefined != true)
    {
        eTimesObject.HasDataSet = true;
    }
    else {
        //MUST have eDispatch - contains a Mandatory Element
    };
    //MUST have eDisposition - contains a Mandatory Element
    TheCall.pTimes = eTimesObject;
    TheCall.eTimes= seteTimes(TheCall);

    if (TheCall.eTimes.HasErrors == true)
    {
        if (TheCall.eTimes.Errors.length > 0) {
            for (var i = 0; i < TheCall.eTimes.Errors.length; i++) {
//                console.log(TheCall.eTimes.Errors[i].ElementID + " " + TheCall.eTimes.Errors[i].Description);
            }
        }
    };
    ////////////////////////eTimes
    eResponseObject = getObjectFromOLTPExtract(parseObject, "eResponse");  
    eResponseObject.HasDataSet = false;
    if (eResponseObject.IsUndefined != true)
    {
        eResponseObject.HasDataSet = true;
    }
    else
    {
        //MUST have eDispatch - contains a Mandatory Element
    };
    //MUST have eDisposition - contains a Mandatory Element
    TheCall.pResponse = eResponseObject;
    TheCall.eResponse= seteResponse(TheCall);

    if (TheCall.eResponse.HasErrors == true)
    {
        if (TheCall.eResponse.Errors.length > 0) {
            for (var i = 0; i < TheCall.eResponse.Errors.length; i++) {
                //console.log(TheCall.eResponse.Errors[i].ElementID + " " + TheCall.eResponse.Errors[i].Description);
            }
        }
    };
    
    

    ///////////////////////////////////ePatient

    ePatientObject = getObjectFromOLTPExtract(parseObject, "ePatient");
    ePatientObject.HasDataSet = false;
    if (ePatientObject.IsUndefined != true) {
        ePatientObject.HasDataSet = true;
    }
    else {
        //MUST have eDispatch - contains a Mandatory Element
    };

    TheCall.pPatient = ePatientObject;
    TheCall.ePatient = setePatient(TheCall);
    if (TheCall.ePatient.HasErrors == true) {
        if (TheCall.ePatient.Errors.length > 0) {
            for (var i = 0; i < TheCall.ePatient.Errors.length; i++) {
                //                console.log(TheCall.eTimes.Errors[i].ElementID + " " + TheCall.eTimes.Errors[i].Description);
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
                //                console.log(TheCall.eTimes.Errors[i].ElementID + " " + TheCall.eTimes.Errors[i].Description);
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
  
    if (TheCall.ePayment.HasErrors == true) {
        //if (TheCall.ePayment.Errors.length > 0) {
         //   for (var i = 0; i < TheCall.ePayment.Errors.length; i++) {
                //                console.log(TheCall.eTimes.Errors[i].ElementID + " " + TheCall.eTimes.Errors[i].Description);
          //  }
        //}
    }

    //console.log(TheCall)
    b = setV3XML(TheCall);
    ////////////////////////////////////////////////////////////////

       
    };
var getObjectFromOLTPExtract = function (businessObject, sectionName) {
    //Returns an array of index values for a given sectionName within a sectionObject
    // if sectionName does not exist within the sectionObject, return -1

    //    console.log(businessObject)
    var _retValue = new Object();
    if (typeof businessObject != undefined) {
        //        console.log(businessObject.attributes)

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
    //console.log(sectionObject)
    var _retValue = [];
    for (var d = 0; d < sectionObject.attributes.sections.length; d++) {

        //  console.log(sectionObject.attributes.sections[d].attributes.name)
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
    //console.log(TheCall.pRecord.attributes.sections[0].elements[0].attributes.value)
    if (TheCall.pRecord.HasDataSet) {
        var _el = [];
        _el.push(TheCall.pRecord.attributes.elements[0].attributes.value);

        var _val = [];
        var _record
        var valObj = {};

        if (_val == null) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eRecord.01", Description: "PCR Number  MANDATORY" })
            eRecord.HasErrors = true;
        }
        else {
            //_val = _record.ValueArray[0].val;
            _val.push(_el[0]) //_record.ValueArray[0].val;
            valObj.IsNull = false;
        };
        valObj.vSet = _val.slice(0);
        eRecord["eRecord.01"] = valObj;

        _sectionIndex = getSectionIndex(pRecord, "eRecord.SoftwareApplicationGroup");

        var _dataList = [];
        var _dataList = pRecord.attributes.sections[_sectionIndex].attributes.elements;

        //////////////////////eRecord.02
        var _val = [];
        var _record = []
        var valObj = {};
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
    else
    {
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
    eDisposition["IsCancelled"] = false;
    eDisposition["HasPatient"] = false;
    eDisposition["HasTreatment"] = false;
    eDisposition["HasTransport"] = false;
    eDisposition["IsStandby"] = false;
    eDisposition["IsAirTransport"] = false
    eDisposition["IsWaterTransport"] = false
    eDisposition["IsGroundTransport"] = false

    var pDisposition = TheCall.pDisposition;
    var HospitalTeamActivationGroup = new Object();
    var HospitalTeamActivationGroupArray = [];
    
    if (pDisposition.HasDataSet == false)
    {
        eDisposition["IsValid"] = false;
        eDisposition["HasErrors"] = true;
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eDisposition", Description: "Missing Mandatory.  eDisposition.HasDataSet = false" })
        eDisposition.Errors = ErrorList.slice(0);
        return eDisposition;
    }
    else
    {
        //////////////////////////////////////
        _elementList = pDisposition.attributes.elements;

        //eDisposition.12

        var _val = [];
        var _dispo = [];
        var valObj = {};
        _dispo = getValue(_elementList, "eDisposition.12");

        if (_dispo.IsNull == true) {
            eDisposition["IsValid"] = false;
            eDisposition["HasErrors"] = true;
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eDisposition.12", Description: "Incident/Patient Disposition Mandatory" })
        }
        else {
            _val.push(_dispo.ValueArray[0].val);
            if (_dispo.IsNull != true) {
                valObj.IsNull = false;
               
                switch (_val[0].toString()) {
                    case "4212001":
                        eDisposition["IsCancelled"] = false;
                        eDisposition["HasPatient"] = false;
                        eDisposition["HasTreatment"] = false;
                        eDisposition["HasTransport"] = false;
                        eDisposition["IsStandby"] = false;
                        break;
                    case "4212003":
                        eDisposition["IsCancelled"] = false;
                        eDisposition["HasPatient"] = false;
                        eDisposition["HasTreatment"] = false;
                        eDisposition["HasTransport"] = false;
                        eDisposition["IsStandby"] = false;
                        break;
                    case "4212005":
                        eDisposition["IsCancelled"] = false;
                        eDisposition["HasPatient"] = false;
                        eDisposition["HasTreatment"] = false;                        
                        eDisposition["HasTransport"] = false;
                        eDisposition["IsStandby"] = false;
                        break;
                    case "4212007":
                        eDisposition["IsCancelled"] = true;
                        eDisposition["HasPatient"] = false;
                        eDisposition["HasTreatment"] = false;
                        eDisposition["HasTransport"] = false;
                        eDisposition["IsStandby"] = false;
                        break;
                    case "4212009":
                        eDisposition["IsCancelled"] = true;
                        eDisposition["HasPatient"] = false;
                        eDisposition["HasTreatment"] = false;
                        eDisposition["HasTransport"] = false;
                        eDisposition["IsStandby"] = false;
                        break;
                    case "4212011":
                        eDisposition["IsCancelled"] = false;
                        eDisposition["HasPatient"] = false;
                        eDisposition["HasTreatment"] = false;
                        eDisposition["HasTransport"] = false;
                        eDisposition["IsStandby"] = false;
                        break;
                    case "4212013":
                        eDisposition["IsCancelled"] = false;
                        eDisposition["HasPatient"] = true;
                        eDisposition["HasTreatment"] = false;
                        eDisposition["HasTransport"] = true;
                        eDisposition["IsStandby"] = false;
                        break;
                    case "4212015":
                        eDisposition["IsCancelled"] = false;
                        eDisposition["HasPatient"] = false;
                        eDisposition["HasTreatment"] = false;
                        eDisposition["HasTransport"] = false;
                        eDisposition["IsStandby"] = false;
                        break;

                    case "4212017":
                        eDisposition["IsCancelled"] = false;
                        eDisposition["HasPatient"] = true;
                        eDisposition["HasTreatment"] = true;
                        eDisposition["HasTransport"] = true;
                        eDisposition["IsStandby"] = false;
                        break;
                    case "4212019":
                        eDisposition["IsCancelled"] = false;
                        eDisposition["HasPatient"] = false;
                        eDisposition["HasTreatment"] = true;
                        eDisposition["HasTransport"] = false;
                        eDisposition["IsStandby"] = false;
                        break;
                    case "4212021":
                        eDisposition["IsCancelled"] = false;
                        eDisposition["HasPatient"] = false;
                        eDisposition["HasTreatment"] = false;
                        eDisposition["HasTransport"] = false;
                        eDisposition["IsStandby"] = false;
                        break;
                    case "4212023":
                        eDisposition["IsCancelled"] = false;
                        eDisposition["HasPatient"] = false;
                        eDisposition["HasTreatment"] = false;
                        eDisposition["HasTransport"] = true;
                        eDisposition["IsStandby"] = false;
                        break;
                    case "4212025":
                        eDisposition["IsCancelled"] = false;
                        eDisposition["HasPatient"] = false;
                        eDisposition["HasTreatment"] = false;
                        eDisposition["HasTransport"] = false;
                        eDisposition["IsStandby"] = false;
                        break;
                    case "4212027":
                        eDisposition["IsCancelled"] = false;
                        eDisposition["HasPatient"] = false;
                        eDisposition["HasTreatment"] = true;
                        eDisposition["HasTransport"] = false;
                        eDisposition["IsStandby"] = false;
                        break;
                    case "4212029":
                        eDisposition["IsCancelled"] = false;
                        eDisposition["HasPatient"] = false;
                        eDisposition["HasTreatment"] = true;
                        eDisposition["HasTransport"] = false;
                        eDisposition["IsStandby"] = false;
                        break;
                    case "4212031":
                        eDisposition["IsCancelled"] = false;
                        eDisposition["HasPatient"] = false;
                        eDisposition["HasTreatment"] = true;
                        eDisposition["HasTransport"] = false;
                        eDisposition["IsStandby"] = false;
                        break;
                    case "4212033":
                        eDisposition["IsCancelled"] = false;
                        eDisposition["HasPatient"] = true;
                        eDisposition["HasTreatment"] = true;
                        eDisposition["HasTransport"] = true;
                        eDisposition["IsStandby"] = false;
                        break;
                    case "4212035":
                        eDisposition["IsCancelled"] = false;
                        eDisposition["HasPatient"] = false;
                        eDisposition["HasTreatment"] = true;
                        eDisposition["HasTransport"] = false;
                        eDisposition["IsStandby"] = false;
                        break;
                    case "4212037":
                        eDisposition["IsCancelled"] = false;
                        eDisposition["HasPatient"] = false;
                        eDisposition["HasTreatment"] = true;
                        eDisposition["HasTransport"] = false;
                        eDisposition["IsStandby"] = false;
                        break;
                    case "4212039":
                        eDisposition["IsCancelled"] = false;
                        eDisposition["HasPatient"] = false;
                        eDisposition["HasTreatment"] = false;
                        eDisposition["HasTransport"] = false;
                        eDisposition["IsStandby"] = true;
                        break;
                    case "4212041":
                        eDisposition["IsCancelled"] = false;
                        eDisposition["HasPatient"] = false;
                        eDisposition["HasTreatment"] = false;
                        eDisposition["HasTransport"] = false;
                        eDisposition["IsStandby"] = true;
                        break;
                    case "4212043":
                        eDisposition["IsCancelled"] = false;
                        eDisposition["HasPatient"] = false;
                        eDisposition["HasTreatment"] = false;
                        eDisposition["HasTransport"] = true;
                        eDisposition["IsStandby"] = false;
                        break;
                    default:
                }
            };
            valObj.vSet = _val.slice(0);
            eDisposition["eDisposition.12"] = valObj;
            delete valObj;
            
        };
        
        _sectionIndex = getSectionIndex(pDisposition, "eDisposition.DestinationGroup");        
        if (_sectionIndex[0] !=-1)
        {
            _destinationElementList = pDisposition.attributes.sections[_sectionIndex[0]].attributes.elements;


            //eDisposition.01///////////////////////////////////////////////////////////
            var _val = [];
            var _dispo = [];
            var valObj = {};
            valObj.IsNull = true;
            
            _dispo = getValue(_destinationElementList, "eDisposition.01");
            if((eDisposition.HasTransport == true) && (pDisposition.HasDataset ==true))//if have a transport 
            {
                if (_dispo.IsNull == true) {
                    if (isRequiredStateElement("eDisposition.01") == true) {
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
                    _val.push(_dispo.ValueArray[0].val);
                    valObj.IsNull = false;
                    
                }
            }
            else {
                if (_dispo.ValueArray.length == 0) {
                    ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.01", Description: "Transport Desitination with No Transport Record " })
                    eDisposition.HasErrors = true;
                };
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
            _dispo = getValue(_destinationElementList, "eDisposition.02");
            if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
            {
                if (_dispo.IsNull == true) {
                    valObj.NV = true
                    if (isRequiredStateElement("eDisposition.02") == true) {
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
                    valObj.vSet = _val.slice(0);
                }
            }
            else {
                if (_dispo.IsNull != true) {
                    ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.02", Description: "Transport Desitination with No Transport Record " });
                    eDisposition.HasErrors = true;
                }
                else {
                    _val.push("7701005");
                    valObj.NV = true;
    
                }
            };
    
            eDisposition["eDisposition.02"] = valObj;
            delete valObj;
    
            //eDisposition.03/////////////////////////////////////////////////////////////
            var _val = [];
            var _dispo = [];
            var valObj = {};
            valObj.IsNull = true;
            _dispo = getValue(_destinationElementList, "eDisposition.03");
            if (eDisposition.HasTransport == true) //if have a transport, and Is Required Data 
            {
                if (_dispo.IsNull != true)
                {
                    if (isRequiredStateElement("eDisposition.03") == true)
                    {
                        ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.03", Description: "Transport Address Required" })
                        eDisposition.HasErrors = true;
                    };
                }
                else {
                    _val.push(_dispo.ValueArray[0].val[0]);
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                }
            };
            eDisposition["eDisposition.03"] = valObj;
            delete valObj;
            //eDisposition.04///////////////////////////////////////////////////////
            var _val = [];
            var _dispo = [];
            var valObj = {};
            valObj.IsNull = true;
            _dispo = getValue(_destinationElementList, "eDisposition.04");
            if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
            {
                if (_dispo.IsNull != true) {
                    _val.push(_dispo.ValueArray[0].val);
                    valObj.IsNull = false;
                    
                }
            }
            else {
                if (_dispo.IsNull == true) {
                    ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.04", Description: "Transport Address Required" })
                    eDisposition.HasErrors = true;
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
            _dispo = getValue(_destinationElementList, "eDisposition.05");
            if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
            {
                if (_dispo.IsNull == true) {
                    if (isRequiredStateElement("eDisposition.05") == true) {
                        _val.push("7701003")
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
                    ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.05", Description: "Transport State/Transport Type Conflict " })
                    eDisposition.HasErrors = true;
                }
                else {
                    _val.push("7701001");
                    valObj.NV = true;
                }
            };
            valObj.vSet = _val.slice(0);
            eDisposition["eDisposition.05"] = valObj;
            delete valObj;
            //eDisposition.06//////////////////////////////////////////////////////
            var _val = [];
            var _dispo = [];
            var valObj = {};
            valObj.IsNull = true;
            _dispo = getValue(_destinationElementList, "eDisposition.06");
            if (eDisposition.HasTransport == true) 
            {
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
                if (_dispo.IsNull != true) {
                    ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.06", Description: "Transport City/Transport Type Conflict " })
                    eDisposition.HasErrors = true;
                }
                else {
                    _val.push("7701001"); 
                    valObj.NV = true;
                }
            };
            valObj.vSet = _val.slice(0);
            eDisposition["eDisposition.06"] = valObj;
            delete valObj;
        
            //eDisposition.07////////////////////////////////////////////////////
            var _val = [];
            var _dispo = [];
            var valObj = {};
            valObj.IsNull = true;
            _dispo = getValue(_destinationElementList, "eDisposition.07");
            if (eDisposition.HasTransport == true) //if have a transport
            {
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
            else {
                if (_dispo.IsNull != true) {
                    ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.07", Description: "Transport Zip/Transport Type Conflict " })
                    eDisposition.HasErrors = true;
                }
                else {
                    _val.push("7701001");
                    valObj.NV = true;
                }
            };
            valObj.vSet = _val.slice(0);
            eDisposition["eDisposition.07"] = valObj;
            delete valObj;
    
            //eDisposition.08///////////////////////////////////////////////////
            var _val = [];
            var _dispo = [];
            var valObj = {};
            valObj.IsNull = true;
    
            _dispo = getValue(_destinationElementList, "eDisposition.08");
            console.log(_dispo)
            if (eDisposition.HasTransport == true) //if have a transport
            {
                if (_dispo.IsNull != true)
                {
                    _val.push(_dispo.ValueArray[0].val);
                    valObj.IsNull = false;                    
                }
            }
            else {
                if (_dispo.IsNull != true) {
                    ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.08", Description: "Transport County/Transport Type Conflict " });
                    eDisposition.Errors = true;
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
    
            _dispo = getValue(_destinationElementList, "eDisposition.09");
            if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
            {
                if (_dispo.IsNull != true) {
                    valObj.IsNull = false;
                }
            }
            else {
                if (_dispo.IsNull != true) {
                    ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.09", Description: "Transport GPS/Transport Type Conflict " })
                    eDisposition.HasErrors = true;
                }
            };
    
            valObj.vSet = _val.slice(0);
            eDisposition["eDisposition.10"] = valObj;
            delete valObj;
    
            //eDisposition.10//////////////////////////////////////////
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
    
            _dispo = getValue(_destinationElementList, "eDisposition.10");
            if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
            {
                if (_dispo.IsNull != true) {
                    _val.push(_dispo.ValueArray[0].val);
                    valObj.IsNull = false;
        
                    //   console.log("Better be dFacility.14 - Country")
                }
            }
            else {
                if (_dispo.ValueArray.length == 0) {
                    ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.10", Description: "Transport National Coords/Transport Type Conflict " })
                    eDisposition.HasErrors = true;
                }
            };
            valObj.vSet = _val.slice(0);
            eDisposition["eDisposition.10"] = valObj;
            delete valObj;
        };
        //eDisposition.11/////////////////////////////////////////////////
        var _val = [];
        var _dispo = [];
        var valObj = {};
        valObj.IsNull = true;
    
        _dispo = getValue(_elementList, "eDisposition.11");
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
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
                ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.11", Description: "Transport Number Patients/Transport Type Conflict  " });
                Call.HasErrors = true;
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
        if (eDisposition.HasTransport == true) {
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
                ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.12", Description: "How Patient Moved/Transport Type Conflict  " })
                eDisposition.HasErrors = true;
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
        if (eDisposition.HasTransport == true)
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
                ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.14", Description: "Patient Position/Transport Type Conflict  " })
                Call.HasErrors = true;
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
        if (eDisposition.HasTransport == true)
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
                ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.15", Description: "Patient Transport From Ambulance/Transport Type Conflict  " })
                eDisposition.HasErrors = true;
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
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
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
                    eDisposition["IsAirTransport"] = true
                }
                else if (_dispo.ValueArray[0].val == "4216017") {
                    eDisposition["IsWaterTransport"] = true
                }
                else {
                    eDisposition["IsGroundTransport"] = true
                };

                valObj.IsNull = false;
            }
        }
        else {
            if (_dispo.IsNull != true) {
                ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.16", Description: "Patient Transport Method/Transport Type Conflict  " })
                eDisposition.HasErrors = true;
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
        if (eDisposition.HasTransport == true) //if have a transport,
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
        if (eDisposition.HasTransport == true) //if have a transport, 
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
                Call.Errors = true;
    
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
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
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
                ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.19", Description: "Condition of Patientat Destination/Transport Type Conflict  " });
                eDisposition.Errors = true;
    
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
        if (eDisposition.HasTransport == true) //if have a transport 
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
                eDisposition.HasErrors = true;
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
        if (eDisposition.HasTransport == true) //if have a transport
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
                eDisposition.HasErrors = true;
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
        if (eDisposition.HasTransport == true) //if have a transport
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
                ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.22", Description: "Hospital In Patient Destination/Transport Type Conflict  " })
                eDisposition.HasErrors = true;
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
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
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
                ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.23", Description: "Hospital Designation/Transport Type Conflict  " })
                Call.HasErrors = true;
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
        
        if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
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
    
        _sectionIndex = getSectionIndex(pDisposition, "eDisposition.HospitalTeamActivationGroup");
        
        if (eDisposition.HasTransport == true)
        {
            if (_sectionIndex[0] == -1) //if have a transport, forgot the data, 
            {
                var _hospitalTeamActivationGroup = new Object();
                var valObj = {};
                _val.push("7701001")
                valObj.IsNull = true;
                valObj.NV = true;
                _hospitalTeamActivationGroup["eDisposition.24"] = valObj;
    
    
                var valObj = {};
                _val.push("7701001")
                valObj.IsNull = true;
                valObj.NV = true;
                _hospitalTeamActivationGroup["eDisposition.25"] = valObj;
                delete valObj;
           
        }
        else {
            var bActivation = false;
            for (var x = 0; x < _sectionIndex.length; x++) {
    
                var _hospitalTeamActivationGroup = new Object();
                var _dataList = pDisposition.attributes.sections[_sectionIndex[x]].attributes.elements;
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
                _hospitalTeamActivationGroup["eDisposition.24"] = valObj;
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
                _hospitalTeamActivationGroup["eDisposition.25"] = valObj;
                HospitalTeamActivationGroupArray.push(_hospitalTeamActivationGroup);
            }
        }
    };
        eDisposition.HospitalTeamActivationGroup = HospitalTeamActivationGroupArray;
        
        
    };
    return eDisposition;
};
var seteDispatch = function (TheCall) {
    pDispatch = TheCall.pDispatch;
    var eDispatch = new Object();
    eDispatch["HasEMD"] = false;
    eDispatch["IsEmergent"] = false;
    if (pDispatch.HasDataSet == false)
    {
        eDispatch["IsValid"] = false;
        eDispatch["HasErrors"] = false;        
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eDispatch", Description: "eDispatch.HasDataSet =false  " });
        eDispatch.Errors = ErrorList.slice(0);
        return eDispatch;
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
        if (_dispatch.IsNull == true) {
            eDispatch.HasErrors = true;
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eDispatch.01", Description: "Manadatory  " });
        }
        else {
            _val.push(_dispatch.ValueArray[0].val );
            valObj.IsNull = false;
          
        };
        valObj.vSet = _val.slice(0);
        eDispatch["eDispatch.01"] = valObj;
        delete valObj;

        /////eDispatch.02////////////////////
        var _val = [];
        var _dispatch = [];
        var valObj = {};
        valObj.IsNull = true;
        _dispatch = getValue(_elementList, "eDispatch.02");
        if (TheCall.isCancelled == false) {
            if (_dispatch.IsNull == true) {
                _val.push("7701003");
                valObj.IsNull = true;
                valObj.NV = true;
                valObj.vSet = _val.slice(0);
            }
            else {
                _val.push(_dispatch.ValueArray[0].val);                
                if (_val[0] != "2302001") {
                    eDispatch["HasEMD"] = true;
                };

                if (_val[0] != "2301065") {
                    eDispatch["IsStandy"] = true;
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
        eDispatch["isEmergent"] = false;
        if (_dispatch.IsNull != true) {
            _val.push(_dispatch.ValueArray[0].val);

            if (_val[0] <= "2305003") {
                eDispatch["IsEmergent"] = true;
            };
            if (_val[0] > "2305003") {
                eDispatch["IsEmergent"] = false;
            };
            valObj.IsNull = false;
            
        };
        valObj.vSet = _val.slice(0);     
        eDispatch["eDispatch.05"] = valObj;
        delete valObj;
    };
    return eDispatch;
};
var seteTimes = function (TheCall) 
{
    var eTimes = new Object();
    pTimes = TheCall.pTimes;
    if (pTimes.HasDataSet == false) 
    {
        eTimes["IsValid"] = false;
        eTimes["HasErrors"] = true;
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eDisposition", Description: "Missing Mandatory.  eDisposition.HasDataSet = false" })
        eTimes.Errors = ErrorList.slice(0);
        return eTimes;
    }
    else 
    {
        var _el = pTimes.attributes.elements;
        var eTimes = new Object();
        var _times = new Object();

        
        //eTimes.01//////////////////      
        var _val = [];
        var _times = [];
        var valObj = {};
        valObj.IsNull = true;
        _times = getValue(_el, "eTimes.01");
        
        //Call.isEmergant = true
    
        if (TheCall.isEmergant == true) 
        {
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
        
        valObj.vSet = _val.slice(0);

        eTimes["eTimes.01"] = valObj;
        delete valObj;

        //eTimes.02/////////////////////////////////////////////////////////
        var _val = [];
        var _times = [];
        var valObj = {};
        valObj.IsNull = true;
        _times = getValue(_el, "eTimes.02");
        if (_times.IsNull != true) {
            _val.push(_times.ValueArray[0].val);
            if (TheCall.isEmergant == true) {
                Times.HasErrors = true;
                ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eTimes", Description: "eTimes.02 - Dispatch not 911 " })
            }
            else {
                valObj.IsNull = false;
            };
        };
        valObj.vSet = _val.slice(0);
        eTimes["eTimes.02"] = valObj;
        delete valObj;
        
        //eTimes.03//////////////////////////////////////////////////////
        var _val = [];
        var _times = [];
        var valObj = {};
        valObj.IsNull = true;
        _times = getValue(_el, "eTimes.03");
        if (_times.IsNull == true) {
            Times.HasErrors = true;
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eTimes", Description: "eTimes.03 - Mandatory" })
        }
        else {

            /////////////////////////////////////////////
            if (typeof TheCall.StartAirwayTime != undefined) {
                if (TheCall.StartAirwayTime >= _val[0]) {
                    eTimes.HasErrors = true;
                    ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eTimes", Description: "eTimes.02 Validation Error: eAirway.10 Date/Time decision to Manage the Patient with an Invasive Airway should not occur prior to: Unit Notified by Dispatch Date/Time" });
                };

                if (typeof TheCall.EndAirwayTime != undefined) {
                    if (TheCall.EndAirwayTime >= _val[0]) {
                        eTimes.HasErrors = true;
                        ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eTimes", Description: "Validation Error: eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Date/Time Decision to Manage the Patient with an Invasive Airway, Unit Notified by Dispatch Date/Time" });
                    }
                };
                _val.push(_times.ValueArray[0].val);
                valObj.IsNull = false;

            }
        
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
            if (_times.IsNull != true) {
                _val.push(_times.ValueArray[0].val[0]);
                if (typeof eTimes["eTimes.03"] != 'undefined') {
                    if (_val[0] > eTimes["eTimes.03"]) {
                        eTimes.HasErrors = true;
                        eTimes.Error = "Validation Error: eAirway.11: eTimes.03:  Dispatch Acknowledged prior to notification."
                    }
                };

                if (TheCall.EndAirwayTime >= _val[0]) {
                    eTimes.HasErrors = true;
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
            _times = getValue(_el, "eTimes.05");
            if (TheCall["isCancelled"] == false) {
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
            else {
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
            _times = getValue(_el, "eTimes.06");
            if (TheCall["isCancelled"] == false) {
                if (_times.IsNull == true) {
                    if (isRequiredStateElement("eTimes.06")) {
                        _val.push("7701003");
                        valObj.IsNull = true;
                        valObj.NV = true;
                    }
                }
                else {
                    _val.push(_times.ValueArray[0].val);
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                }
            }
            else {
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
            _times = getValue(_el, "eTimes.07");
            if (TheCall["isCancelled"] == false) {
                if (_times.IsNull == true) {
                    if (isRequiredStateElement("eTimes.07")) {
                        _val.push("7701003");
                        valObj.IsNull = true;
                        valObj.NV = true;
                    }
                }
                else {
                    _val.push(_times.ValueArray[0].val);
                    valObj.IsNull = false;

                    if (TheCall.EndAirwayTime != null) {
                        if (TheCall.EndAirwayTime >= _val[0]) {
                            eTimes.HasErrors = true;
                            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eTimes", Description: "Validation Error: eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Date/Time Arrived at Patient Date/Time." });
                        }
                    }
                }
            }
            else {
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
            _times = getValue(_el, "eTimes.08");

            if ((TheCall["isCancelled"] == false) && (TheCall.PatientTransfer = true)) {
                if (_times.IsNull == true) {
                    if (isRequiredStateElement("eTimes.08")) {
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
                    _val.push(_times.ValueArray[0].val);
                    valObj.IsNull = false;
                }
            }
            else {
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
            _times = getValue(_el, "eTimes.09");
            if ((TheCall["isCancelled"] == false) && (TheCall.HasPatient == true)) {
                if (_times.IsNull == true) {
                    if (isRequiredStateElement("eTimes.09")) {
                        _val.push("7701003");
                        valObj.IsNull = true;
                        valObj.NV = true;
                    }
                }
                else {
                    _val.push(_times.ValueArray[0].val);
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                }
            }
            else {
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
            _times = getValue(_el, "eTimes.10");
            if ((TheCall.isCancelled == false) && (TheCall.AirTransport == true)) {
                if (_times.IsNull != true) {
                    valObj.IsNull = false;
                }
            }
            else {
                eTimes.HasErrors = true;
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
            _times = getValue(_el, "eTimes.11");
            if (TheCall.HasPatient == true) {
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
            else {
                _val.push("7701001");
                valObj.IsNull = true;
                valObj.NV = true;
            };
            valObj.vSet = _val.slice(0);
            eTimes["eTimes.12"] = valObj;
            delete valObj;

            //eTimes.12///////////////////////////////////////////////////////////////////////        
            var _val = [];
            var _times = [];
            var valObj = {};
            valObj.IsNull = true;
            _times = getValue(_el, "eTimes.12");
            if (TheCall.HasPatient == true) {
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

            if (_times.IsNull == true) {
                eTimes.HasErrors = true;
                ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eTimes", Description: "Unit Back in Service Date/Time Mandatory Value " });

            }
            else {
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
            if (TheCall["isCancelled"] != true) {
                if (_times.IsNull == true) {
                    if (isRequiredStateElement("eTimes.14")) {
                        ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eTimes", Description: "Unit Canceled Date/Time:  eTimes 14 Mandatory" });
                        eTimes.HasErrors = true;
                    }
                }
                else {
                    _val.push(_times.ValueArray[0].val);
                    valObj.IsNull = false;

                }
            }
            else {
                Times.Error = "Unit Canceled Date/Time:  Call Not Cancelled ";
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

            if (_times.IsNull != true) {
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
            if (_times.IsNull != true) {
                _val.push(_times.ValueArray[0].val);
                valObj.IsNull = false;


            };
            valObj.vSet = _val.slice(0);
            eTimes["eTimes.16"] = valObj;
            delete valObj;
        
        };
    eTimes.Errors = ErrorList.slice(0)
    return eTimes;
    
};    //end of function   
var seteResponse = function (TheCall) 
{
    pResponse = TheCall.pResponse;
    var eResponse = new Object();
    eResponse ["HasDelay"] = false;   
    if (pResponse.HasDataSet == false) 
    {
        eResponse["IsValid"] = false;
        eResponse["HasErrors"] = true;
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse", Description: "eResponse.HasDataSet =false  " });
        eResponse.Errors = ErrorList.slice(0);
        return eResponse;
    }
    else 
    {
            
        _eL = pResponse.attributes.elements;
        _sectionAG = getSectionIndex(pResponse, "eResponse.AgencyGroup");
        if (_sectionAG != -1) 
        {
            var _AG = [];
            var _AG = pResponse.attributes.sections[_sectionAG].attributes.elements;
        };

        _sectionSG = getSectionIndex(pResponse, "eResponse.ServiceGroup");
        if (_sectionSG != -1) 
        {
            var _SG = [];
            var _SG = pResponse.attributes.sections[_sectionSG].attributes.elements;
        };


        if (_sectionSG != -1) 
        {
            //////////////////////eResponse.05    
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
                if (_val[0] in ["2205011", "2205013"]) 
                {
                    TheCall.IsStandby = true;
                };
            };
            valObj.vSet = _val.slice(0);     
            eResponse["eResponse.05"] = valObj;
            delete valObj;

            //////////////////////eResponse.06
            var _response = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _response = getValue(_SG, "eResponse.06");
            if (_response.IsNull != true) {
                if (TheCall.StandBy == false) {
                    _val.push(_response.ValueArray[0].val);                    
                    valObj.IsNull = false;
                }
                else {
                    ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.06", Description: "Stand By Purpose/Type of Service Conflict " })
                    eResponse.HasErrors = true;
                    eResponse.Errors = ErrorList.push();
                }
            };
            valObj.vSet = _val.slice(0);     
            eResponse["eResponse.06"] = valObj;
            delete valObj;
        };
        
        if (_sectionAG != -1) {
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
                    Response.HasErrors = true;
                    eResponse.Errors = ErrorList.push();
                }
                else
                {                   
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.01", Description: "EMS Agency Number  MANDATORY" })
                    Response.HasErrors = false;
                    eResponse.Errors = ErrorList.push();
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
        };
        
        valObj.vSet = _val.slice(0);
        eResponse["eResponse.02"] = valObj;
        delete valObj;
        
        
        //////////////////////eResponse.03
        var _response = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;        
        _response = getValue(_eL, "eResponse.03");
        if (TheCall.IsEmergent == true)
        {
            if (_response.IsNull == true) 
            {
                if (isRequiredStateElement("eResponse.03") == true) 
                {
                    _val.push("7701003");
                    valObj.IsNull = true;
                    valObj.NV = true;                }
            }
            else 
            {
                _val.push(_response.ValueArray[0].val);                
                valObj.IsNull = false;        
            }
        }
        else {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.03", Description: "Stand By IncidentNumber/Type of Service Conflict " })
            eResponse.Errors = ErrorList.push();
            eResponse.HasErrors = true;
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
        _response = getValue(_eL, "eResponse.04");
        if (_response.IsNull == true) 
        {
            if (isRequiredStateElement("eResponse.04") == true) 
            {
                _val.push("7701003");
                valObj.IsNull = true;
                valObj.NV = true;
            }
            else{
                _val.push("7701001");
                valObj.IsNull = true;
                valObj.NV = true;                
            }
        }
        else {
            _val.push(_response.ValueArray[0].val);
            valObj.IsNull = false;
                
        };
      /*  else {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.04", Description: "Stand By Response Number/Type of Service Conflict " });
            eResponse.HasErrors = true;
            eResponse.Errors = ErrorList.push();

            

        };
        */
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
            eResponse.HasErrors = true;
            eResponse.Errors = ErrorList.push();
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
        if (TheCall.IsStandby == false)
        {
            if (_response.IsNull == true)
            {
                if (isRequiredStateElement("eResponse.08") == true) {
                    _val.push("7701003");
                    valObj.IsNull = true;
                    valObj.NV = true;                }
            }
            else {
                for (var i = 0; i < _response.ValueArray.length; i++) {
                    if ((_response.ValueArray[i].HasValue == true) && (_val.indexOf(_response.ValueArray[i].val) == -1)) {
                        _val.push(_response.ValueArray[i].val)
                        if (_val[0] == '2208013') {
                            TheCall.HasDelay == false;
                        }                        
                        valObj.IsNull = false;
                        
                    }
                };

                if (_val.indexOf('2208013') == -1) {
                    ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.08", Description: "Dispatch Delay Type Conflict" })
                    eResponse.HasErrors = true;
                    eResponse.Errors = ErrorList.push();
                };
                //  v2Array.push({ section: "E02", element: "E02_06", val: arr2.slice(0) });
            }
        }
        else {
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
        TheCall.HasDelay = false;
        _response = getValue(_eL, "eResponse.09");

        if (TheCall.HasDelay == false) {
            if (_response.IsNull == true) {
                if (isRequiredStateElement("eResponse.09") == true) {
                    _val.push("7701003");
                    valObj.IsNull = true;
                    valObj.NV = true;
                }
            }
            else {
                for (var i = 0; i < _response.ValueArray.length; i++) {
                    if ((_response.ValueArray[i].HasValue == true) && (_val.indexOf(_response.ValueArray[i].val) == -1)) {
                        _val.push(_response.ValueArray[i].val)

                        if (_val == '2209011') 
                        {
                            TheCall.HasDelay == false;
                        }
                    }
                };
                
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
                if ('2209011' in _val) //if None, than None only
                {
                    if (_val.length > 1) {
                        ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.09", Description: "Response Delay Type Conflict" })
                        eResponse.Errors = ErrorList.push();
                        eResponse.HasErrors = true;
                    }
                };
                //v2Array.push({ section: "E02", element: "E02_07", val: arr2.slice(0) });
            }
        }
        else {
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
        if (TheCall.IsStandby == false)
        {
            if (_response.IsNull == true) {
                if (isRequiredStateElement("eResponse.10") == true) {
                    _val.push("7701003");
                    valObj.IsNull = true;
                    valObj.NV = true;
                }
            }
            else {
                for (var i = 0; i < _response.ValueArray.length; i++) {
                    if ((_response.ValueArray[i].HasValue == true) && (_val.indexOf(_response.ValueArray[i].val) == -1)) {
                        _val.push(_response.ValueArray[i].val);

                        if (_val[0] == '2210017') {
                            Call.HasDelay == false;
                        }
                    }
                };
                
                valObj.IsNull = false;
                

                if ('2210017' in _val) //if None, than None only
                {
                    if (_val[0].length > 1) {
                        ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.18", Description: "Scene Delay Type Conflict" })
                        eResponse.HasErrors = true;
                        eResponse.Errors = ErrorList.push();
                    }
                }
            }
        }
        else {
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
        if (TheCall.IsStandby != true)  //we have no delay
        {
            if (_response.IsNull == true) {
                if (isRequiredStateElement("eResponse.11") == true) {
                    _val.push("7701003");
                    valObj.IsNull = true;
                    valObj.NV = true;
                }
            }
            else {
                for (var i = 0; i < _response.ValueArray.length; i++) {
                    if ((_response.ValueArray[i].HasValue == true) && (_val.indexOf(_response.ValueArray[i].val) == -1)) {
                        _val.push(_response.ValueArray[i].val);

                        if (_val[0] == '2211011') {
                            Call.HasDelay == true
                        };
                    }
                };
                
                valObj.IsNull = false;
                
                if ('2211011' in _val) //if None, than None only
                {
                    ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.11", Description: "Transport Delay Type Conflict" });
                    eResponse.Errors = ErrorList.push();
                    eResponse.HasErrors = true;
                };
            }
        }
        else {            
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
        if (TheCall.IsStandby == false)
        {
            if (_response.IsNull == true)
            {
                if (isRequiredStateElement("eResponse.12") == true) {
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
                    eResponse.HasErrors = true;
                    eResponse.Errors = ErrorList.push();
                };
                //v2Array.push({ section: "E02", element: "E02_10", val: arr2.slice(0) });
            }
        }
        else {
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
        if (_response.IsNull == true) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.13", Description: "EMS Unit number MANDATORY" })
            eResponse.HasErrors = true;
            eResponse.Errors = ErrorList.push();
        }
        else {
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
        if (_val == null) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.14", Description: "EMS Unit Call Sign MANDATORY" })
            eResponse.HasErrors = true;
            eResponse.Errors = ErrorList.push();
        }
        else {
            _val.push(_response.ValueArray[0].val);
            
            valObj.IsNull = false;
            
            // v2Array.push({ section: "E02", element: "E02_12", val: _val[0] });
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
        if (_val == null) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.15", Description: "Unit Level of Care MANDATORY" })
            eResponse.HasErrors = true;
            eResponse.Errors = ErrorList.push();
        }
        else {
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
        if (_response.IsNull != true) {
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
        if (_response.IsNull != true) {
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
        if (_response.IsNull != true) {
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
                if (isRequiredStateElement("eResponse.19") == true) {
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.19", Description: "Beginning Odometer REQUIRED" })
                    eResponse.HasErrors = true;
                    eResponse.Errors = ErrorList.push();
                }
            }
            else {
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
      //  if (TheCall.IsCancelled == false)  //if Cancelled prior to arrival on Scene, no data
        //{
            if (_response.IsNull == true) 
            {
                if (isRequiredStateElement("eResponse.20") == true) 
                {
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.20", Description: "On-scene Odometer MANDATORY" })
                    eResponse.HasErrors = true;
                    eResponse.Errors = ErrorList.push();
                }
            }
            else 
            {
                _val.push(_response.ValueArray[0].val);
                if (_val[0] <= bOd) {
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.20", Description: "On-scene Odometer Must be greater than Beginning" })
                    eResponse.HasErrors = true;
                    eResponse.Errors = ErrorList.push();
                }
                else 
                {                    
                    var oOc = _val[0]
                    valObj.IsNull = false;
                }
            }
     //   };
        valObj.vSet = _val.slice(0);
        eResponse["eResponse.20"] =  valObj;
        delete valObj

        
        //////////////////////eResponse.21
        var _response = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _response = getValue(_eL, "eResponse.21");
        if (TheCall["IsCancelled"] != true)  //if Cancelled prior to arrival on Scene, no data
        {
            if (_response.IsNull == true) {
                if (isRequiredStateElement("eResponse.21") == true) {
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.21", Description: "Destination Odometer MANDATORY" })
                    eResponse.HasErrors = true;
                    eResponse.Errors = ErrorList.push();
                }
            }
            else {
                _val.push(_response.ValueArray[0].val);
                if (_val[0] <= oOc) {
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.21", Description: "Destination Odometer Must be greater than Beginning/On-Scene Mileage" })
                    eResponse.HasErrors = true;
                    eResponse.Errors = ErrorList.push();
                }
                else {

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
        if (TheCall["isCancelled"] != true)  //if Cancelled prior to arrival on Scene, no data
        {
            if (_response.IsNull == true) 
            {
                if (isRequiredStateElement("eResponse.22") == true) 
                {
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.22", Description: "Ending Odometer MANDATORY" });
                    eResponse.HasErrors = true;
                    eResponse.Errors = ErrorList.push();
                }
            }
            else 
            {
                _val.push(_response.ValueArray[0].val);                
                if (_val[0] <= dOd) 
                {
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.22", Description: "Ending Odometer Must be greater than Beginning/On-Scene Mileage" })
                    eResponse.HasErrors = true;
                    eResponse.Errors = ErrorList.push();
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
        _response = getValue(_eL, "eResponse.23");
        if (TheCall.IsCancelled == false)  //if Cancelled prior to arrival on Scene, no data
        {
            if (_response.IsNull == true) 
            {
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.23", Description: "Response Mode to Scene MANDATORY" })
                eResponse.HasErrors = true;
                eResponse.Errors = ErrorList.push();
            }
            else {
                _val.push(_response.ValueArray[0].val[0]);                
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
        if (TheCall.IsCancelled == false) //if Cancelled prior to arrival on Scene, no data
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
       
    };
    return eResponse;
};
