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
    Call.Inventory = setCallInventory(parseObject);
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
    var v221Array = [];
    var v334Array = [];
    /*
    //// ///////////////eRecord
    eRecordObject = seteRecord();
    v221Array = eRecordObject.Version2
    v334Array = eRecordObject.Version3

    /////////////////////
    
    ///////////////////////eDisposition    
    eDispositionObject = getObjectFromOLTPExtract(parseObject, "eDisposition");
    var _eDispositionObject = new Object();
    eDispositionObject.HasDataSet = false;
    if (eDispositionObject.IsUndefined != true)
    {
        eDispositionObject.HasDataSet = true;
    };
    _eDispositionObject = seteDisposition(eDispositionObject);
    
    */
    Call.AirTransport = false;
    Call.PatientTransfer = false;
    Call.isCancelled = false; //eDisposition["eDisposition.12"] !="4212007")  //if Cancelled prior to arrival on Scene, no data
    Call.HasPatient = true;
    Call.isCancelled = false;
    Call.isEmergent = false;
    //console.log(Call)
    /*
    ////////////////////////Dispatch
    eDispatchObject = getObjectFromOLTPExtract(parseObject, "eDispatch");
    var _eDispatchObject = new Object();
    eDispatchObject.HasDataSet = false;
    if (eDispatchObject.IsUndefined != true) {
        eDispatchObject.HasDataSet = true;
    }
    _eDispatchObject = seteDispatch(eDispatchObject, Call);
    ///////////////////////////////////eResponse
    eResponseObject = getObjectFromOLTPExtract(parseObject, "eResponse");
    var _ResponseObject = new Object();
    if (eResponseObject.IsUndefined != true) {
        eResponseObject.HasDataSet = true;       
    };
    _ResponseObject = seteResponse(ResponseObject, Call);
    
    ///////////////////////////////////ePayment
    ePaymentsObject = getObjectFromOLTPExtract(parseObject, "ePayment");
    var _ePaymentsObject = new Object();
    ePaymentsObject.HasDataSet = false;
    if (ePaymentsObject.IsUndefined != true) {
        ePaymentsObject.HasDataSet = true;      
    };
    _ePaymentsObject = setePayment(ePaymentsObject, Call);
    ////////////////////////////////////////////////////////////////

    */   
    ////////////////////////eTimes
    eTimesObject = getObjectFromOLTPExtract(parseObject, "eTimes");
    var _eTimesObject = new Object();
    eTimesObject.HasDataSet = false;
    if (eTimesObject.IsUndefined != true) {
        eTimesObject.HasDataSet = true;
    }
    _eTimesObject = seteTimes(eTimesObject, Call);

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
var seteRecord = function () {
    var eRecord = new Object();
    var _erecord = new Object();
    var _val = [];
    var _eRecord = new Object();
    _eRecord.HasErrors = false;
    _eRecord.HasData = false;
    var pArr2 = [];
    var pArr = [];

    _eRecord.Name = "eRecord.01";
    //////////////////////eRecord.01
    _erecord = "PCRID";

    if (_val == null) {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eRecord.01", Description: "PCR Number  MANDATORY" })

        _eRecord.HasErrors = true;
    }
    else {
        _val = _erecord;
        pArr2.push({ section: "E01", element: "E01_01", val: _val });
        _eRecord.Value = _val;
        _eRecord.HasData = true;


        //OXML.Node("PCR", _val); 
        //XML.Node("eRecord.01", _val); 
    };

    pArr.push(_eRecord);
    delete _eRecord;

    //////////////////////eRecord.02
    //_val = getValue(elementList, "eRecord.02");
    _val = "Test Software Creator";
    var _eRecord = new Object();
    _eRecord.HasData = false;
    _eRecord.HasErrors = false;
    _eRecord.Name = "eRecord.02";
    if (_val == null) {
        _eRecord.HasErrors = true;
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eRecord.02", Description: "Software Creator MANDATORY" })

    }
    else {
        _eRecord.Value = "Data InMotion";
        _eRecord.HasData = true;
        pArr2.push({ section: "E01", element: "E01_02", val: _val });
    };
    pArr.push(_eRecord);
    delete _eRecord;

    //////////////////////eRecord.03
    //_val = getValue(businessObject.elements, "eRecord.03");
    _val = "Test Software Name";
    var _eRecord = new Object();
    _eRecord.HasData = false;
    _eRecord.HasErrors = false;
    _eRecord.Name = "eRecord.03";
    if (_val == null) {
        _eRecord.HasErrors = true;
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eRecord.03", Description: "Software Name MANDATORY" })

    }
    else {
        _eRecord.Value = "MoBi";
        _eRecord.HasData = true;
        pArr2.push({ section: "E01", element: "E01_03", val: _val });
    };

    pArr.push(_eRecord);
    delete _eRecord;

    //////////////////////eRecord.04
    //_val = getValue(businessObject.elements, "eRecord.04");
    _val = "Test Software Version";
    var _eRecord = new Object();
    _eRecord.HasData = false;
    _eRecord.HasErrors = false;
    _eRecord.Name = "eRecord.04";
    if (_val == null) {

        _eRecord.HasErrors = true;
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eRecord.04", Description: "Software Version MANDATORY" })
        pArr2.push({ section: "E01", element: "E01_04", val: v2NOT_RECORDED });

    }
    else {
        _eRecord.HasData = true;
        _eRecord.Value = ".1";
        pArr2.push({ section: "E01", element: "E01_04", val: _val });

    };

    pArr.push(_eRecord);
    delete _eRecord;

    eRecord.Version2 = pArr2.slice(0);
    eRecord.Version3 = pArr.slice(0);
    return eRecord;
};
var seteDisposition = function (eDispositionObject, Call) {
    var ValueArray = new Array();
    var HospitalTeamActivationGroupArray = new Array();
    var eDisposition = new Object();
    var eHospitalTeamActivationGroup = new Object();
    var HospitalTeamActivationGroup = new Object();
    var _dispo = new Object()


    _elementList = eDispositionObject.attributes.elements;
    _destinationElementList = eDispositionObject.attributes.sections[0].attributes.elements;

    //eDisposition.12
    var _eDisposition = new Object();
    _eDisposition.Name = "eDisposition.12";
    _eDisposition.Errors = false;
    _eDisposition.HasData = false;

    _dispo = getValue(_elementList, "eDisposition.12");

    if (_dispo.ValueArray.length == 0) {
        Call.IsValid = false;
        _eDisposition.HasData = true;
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eDisposition.12", Description: "Incident/Patient Disposition Mandatory" })
    }
    else {
        _val = _dispo.ValueArray[0].val;
        if (_val != null) {
            _eDisposition.HasData = true;
            _val = _dispo.ValueArray[0].val;
            _eDisposition.Value = _val;

            ValueArray.push(setV2("eDisposition.12", _val))
            v2Array.push({ section: "E20", element: "E20_10", val: ValueArray, Count: 1 });

            switch (_val.toString()) {
                case "4212001":
                    eDisposition["IsCancelled"] = false;
                    eDisposition["HasPatient"] = false;
                    eDisposition["HasTreatment"] = false;
                    eDisposition["HasTransport"] = false;
                    break;
                case "4212003":
                    eDisposition["IsCancelled"] = false;
                    eDisposition["HasPatient"] = false;
                    eDisposition["HasTreatment"] = false;
                    eDisposition["HasTransport"] = false;
                    break;
                case "4212005":
                    eDisposition["IsCancelled"] = false;
                    eDisposition["HasPatient"] = false;
                    eDisposition["HasTreatment"] = false;
                    eDisposition["HasTransport"] = false;
                    break;
                case "4212007":
                    eDisposition["IsCancelled"] = true;
                    eDisposition["HasPatient"] = false;
                    eDisposition["HasTreatment"] = false;
                    eDisposition["HasTransport"] = false;
                    break;
                case "4212009":
                    eDisposition["IsCancelled"] = true;
                    eDisposition["HasPatient"] = false;
                    eDisposition["HasTreatment"] = false;
                    eDisposition["HasTransport"] = false;
                    break;
                case "4212011":
                    eDisposition["IsCancelled"] = false;
                    eDisposition["HasPatient"] = false;
                    eDisposition["HasTreatment"] = false;
                    eDisposition["HasTransport"] = false;
                    break;
                case "4212013":
                    eDisposition["IsCancelled"] = false;
                    eDisposition["HasPatient"] = true;
                    eDisposition["HasTreatment"] = false;
                    eDisposition["HasTransport"] = true;
                    break;
                case "4212015":
                    eDisposition["IsCancelled"] = false;
                    eDisposition["HasPatient"] = false;
                    eDisposition["HasTreatment"] = false;
                    eDisposition["HasTransport"] = false;
                    break;

                case "4212017":
                    eDisposition["IsCancelled"] = false;
                    eDisposition["HasPatient"] = true;
                    eDisposition["HasTreatment"] = true;
                    eDisposition["HasTransport"] = true;
                    break;
                case "4212019":
                    eDisposition["IsCancelled"] = false;
                    eDisposition["HasPatient"] = false;
                    eDisposition["HasTreatment"] = true;
                    eDisposition["HasTransport"] = false;
                    break;
                case "4212021":
                    eDisposition["IsCancelled"] = false;
                    eDisposition["HasPatient"] = false;
                    eDisposition["HasTreatment"] = false;
                    eDisposition["HasTransport"] = false;
                    break;
                case "4212023":
                    eDisposition["IsCancelled"] = false;
                    eDisposition["HasPatient"] = false;
                    eDisposition["HasTreatment"] = false;
                    eDisposition["HasTransport"] = true;
                    break;
                case "4212025":
                    eDisposition["IsCancelled"] = false;
                    eDisposition["HasPatient"] = false;
                    eDisposition["HasTreatment"] = false;
                    eDisposition["HasTransport"] = false;
                    break;
                case "4212027":
                    eDisposition["IsCancelled"] = false;
                    eDisposition["HasPatient"] = false;
                    eDisposition["HasTreatment"] = true;
                    eDisposition["HasTransport"] = false;
                    break;
                case "4212029":
                    eDisposition["IsCancelled"] = false;
                    eDisposition["HasPatient"] = false;
                    eDisposition["HasTreatment"] = true;
                    eDisposition["HasTransport"] = false;
                    break;
                case "4212031":
                    eDisposition["IsCancelled"] = false;
                    eDisposition["HasPatient"] = false;
                    eDisposition["HasTreatment"] = true;
                    eDisposition["HasTransport"] = false;
                    break;
                case "4212033":
                    eDisposition["IsCancelled"] = false;
                    eDisposition["HasPatient"] = true;
                    eDisposition["HasTreatment"] = true;
                    eDisposition["HasTransport"] = true;
                    break;
                case "4212035":
                    eDisposition["IsCancelled"] = false;
                    eDisposition["HasPatient"] = false;
                    eDisposition["HasTreatment"] = true;
                    eDisposition["HasTransport"] = false;
                    break;
                case "4212037":
                    eDisposition["IsCancelled"] = false;
                    eDisposition["HasPatient"] = false;
                    eDisposition["HasTreatment"] = true;
                    eDisposition["HasTransport"] = false;
                    break;
                case "4212039":
                    eDisposition["IsCancelled"] = false;
                    eDisposition["HasPatient"] = false;
                    eDisposition["HasTreatment"] = false;
                    eDisposition["HasTransport"] = false;
                    break;
                case "4212041":
                    eDisposition["IsCancelled"] = false;
                    eDisposition["HasPatient"] = false;
                    eDisposition["HasTreatment"] = false;
                    eDisposition["HasTransport"] = false;
                    break;
                case "4212043":
                    eDisposition["IsCancelled"] = false;
                    eDisposition["HasPatient"] = false;
                    eDisposition["HasTreatment"] = false;
                    eDisposition["HasTransport"] = true;
                    break;
                default:
            }
        };

        PCRElementsArray.push(_eDisposition);
        delete _eDisposition;
    };

    //eDisposition.01///////////////////////////////////////////////////////////
    var _eDisposition = new Object();
    ValueArray = [];
    _eDisposition.Errors = false;
    _eDisposition.HasData = false;
    _eDisposition.Name = "eDisposition.01";
    _dispo = getValue(_destinationElementList, "eDisposition.01");
    if (eDisposition.HasTransport == true) //if have a transport 
    {
        if (_dispo.Count == 0) {
            if (isRequiredStateElement("eDisposition.01") == true) {
                _eDisposition.NV = v3NOT_RECORDED;
                v2Array.push({ section: "E20", element: "E20_01", val: ValueArray, Count: 1 });
            }
            else {
                _eDisposition.NV = v2NOT_REPORTING;
                v2Array.push({ section: "E20", element: "E20_01", val: ValueArray, Count: 1 });
            }
        }
        else {
            _val = _dispo.ValueArray[0].val;
            ValueArray.push(_val)
            v2Array.push({ section: "E20", element: "E20_01", val: ValueArray, Count: 1 });
            _eDisposition.Value = _val;
            _eDisposition.HasData = true;
        }
    }
    else {
        if (_dispo.ValueArray.length == 0) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.01", Description: "Transport Desitination with No Transport Record " })
            _eDisposition.HasErrors = true;
        };
        _eDisposition.NV = v2NOT_APPLICABLE
        v2Array.push({ section: "E20", element: "E20_01", val: ValueArray, Count: 1 });
    };

    PCRElementsArray.push(_eDisposition);
    delete _eDisposition;

    //eDisposition.02//////////////////////////////////////////////////////////    
    var _eDisposition = new Object();
    _eDisposition.Errors = false;
    _eDisposition.HasData = false;
    _eDisposition.Name = "eDisposition.02";
    ValueArray = [];
    _dispo = getValue(_destinationElementList, "eDisposition.02");
    if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
    {
        if (_dispo.Count == 0) {
            if (isRequiredStateElement("eDisposition.02") == true) {
                _eDisposition.NV = v3NOT_RECORDED;

                v2Array.push({ section: "E20", element: "E20_02", val: v2NOT_RECORDED, Count: 1 });
            }
            else {
                _eDisposition.NV = v3NOT_REPORTING;
                v2Array.push({ section: "E20", element: "E20_02", val: v2NOT_REPORTING, Count: 1 });
            }
        }
        else {
            _val = _dispo.ValueArray[0].val;
            _eDisposition.HasData = true;
            ValueArray.push(_val);
            _eDisposition.Value = _val;
            v2Array.push({ section: "E20", element: "E20_02", val: ValueArray, Count: 1 });
        }
    }
    else {
        if (_dispo.Count == 0) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.02", Description: "Transport Desitination with No Transport Record " })
            eDisposition.HasErrors = true;
        }
        else {
            _eDisposition.NV = v3NOT_APPLICABLE;
            ValueArray.push(v2NOT_APPLICABLE)
            v2Array.push({ section: "E20", element: "E20_01", val: ValueArray, Count: 1 });
        }
    };

    PCRElementsArray.push(_eDisposition);
    delete _eDisposition;

    //eDisposition.03/////////////////////////////////////////////////////////////
    var _eDisposition = new Object();
    _eDisposition.Errors = false;
    _eDisposition.HasData = false;
    _eDisposition.Name = "eDisposition.03";
    ValueArray = [];
    _dispo = getValue(_destinationElementList, "eDisposition.03");
    if (eDisposition.HasTransport == true) //if have a transport, and Is Required Data 
    {
        if (_dispo.Count == 0) {
            if (isRequiredStateElement("eDisposition.03") == true) {
                ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.03", Description: "Transport Address Required" })
                _eDisposition.HasErrors = true;
            };
        }
        else {
            _val = _dispo.ValueArray[0].val;
            _eDisposition.Value = _val;
            ValueArray.push(_val)
            v2Array.push({ section: "E20", element: "E20_03", val: ValueArray, Count: 1 });
        }
    };
    PCRElementsArray.push(_eDisposition);
    delete _eDisposition;

    //eDisposition.04///////////////////////////////////////////////////////
    var _eDisposition = new Object();
    _eDisposition.Errors = false;
    _eDisposition.HasData = false;
    _eDisposition.Name = "eDisposition.04";
    ValueArray = [];
    _dispo = getValue(_destinationElementList, "eDisposition.04");
    if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
    {
        if (_dispo.Count != 0) {
            _val = _dispo.ValueArray[0].val;
            ValueArray.push(_val)
            _eDisposition.HasData = true;

            v2Array.push({ section: "E20", element: "E20_04", val: ValueArray });
            _eDisposition.Value = _val;
        }
    }
    else {
        if (_dispo.IsNull == true) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.04", Description: "Transport Address Required" })
            _eDisposition.HasErrors = true;
        }
    };


    PCRElementsArray.push(_eDisposition);
    delete _eDisposition;

    //eDisposition.05/////////////////////////////////////////////
    var _eDisposition = new Object();
    _eDisposition.Errors = false;
    _eDisposition.HasData = false;
    _eDisposition.Name = "eDisposition.05";
    ValueArray = [];
    _dispo = getValue(_destinationElementList, "eDisposition.05");
    if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
    {
        if (_dispo.Count == 0) {
            if (isRequiredStateElement("eDisposition.05") == true) {
                _eDisposition.NV = v3NOT_RECORDED;
                ValueArray.push(v2NOT_RECORDED)
                v2Array.push({ section: "E20", element: "E20_05", val: ValueArray, Count: 1 });
            }
        }
        else {
            _val = _dispo.ValueArray[0].val;

            ValueArray.push(_val)
            v2Array.push({ section: "E20", element: "E20_05", val: ValueArray, Count: 1 });
            _eDisposition.Value = _val;
            _eDisposition.HasData = true;
        }
    }
    else {
        if (_dispo.Count == 0) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.05", Description: "Transport State/Transport Type Conflict " })
            _eDisposition.HasErrors = true;
        }
        else {
            _eDisposition.NV = v3NOT_APPLICABLE;
            v2Array.push({ section: "E20", element: "E20_05", val: v2NOT_APPLICABLE, Count: 1 });
        }
    };


    _eDisposition.Value = eDisposition["eDisposition.05"];
    PCRElementsArray.push(_eDisposition);
    delete _eDisposition;

    //eDisposition.06//////////////////////////////////////////////////////
    _dispo = getValue(_destinationElementList, "eDisposition.06");
    var _eDisposition = new Object();
    _eDisposition.Errors = false;
    _eDisposition.HasData = false;
    _eDisposition.Name = "eDisposition.06";
    ValueArray = [];
    if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
    {
        if (_dispo.Count == 0) {
            ValueArray.push(v2NOT_RECORDED)
            v2Array.push({ section: "E20", element: "E20_06", val: ValueArray, Count: 1 });
            _eDisposition.NV = v3NOT_RECORDED;
        }
        else {
            _val = _dispo.ValueArray[0].val;
            _eDisposition.Value = _val;
            _eDisposition.HasData = true;
            ValueArray.push(_val)
            v2Array.push({ section: "E20", element: "E20_06", val: ValueArray });
        }
    }
    else {
        if (_dispo.Count == 0) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.06", Description: "Transport City/Transport Type Conflict " })
            _eDisposition.HasErrors = true;
        }
        else {
            _eDisposition.NV = v3NOT_APPLICABLE;
            ValueArray.push(v2NOT_APPLICABLE)
            v2Array.push({ section: "E20", element: "E20_06", val: ValueArray, Count: 1 });
        }
    };

    PCRElementsArray.push(_eDisposition);
    delete _eDisposition;


    //eDisposition.07////////////////////////////////////////////////////
    var _eDisposition = new Object();
    _eDisposition.Errors = false;
    _eDisposition.HasData = false;
    _eDisposition.Name = "eDisposition.07";
    ValueArray = [];
    _dispo = getValue(_destinationElementList, "eDisposition.07");
    if (eDisposition.HasTransport == true) //if have a transport
    {
        if (_dispo.Count == 0) {
            if (isRequiredStateElement("eDisposition.07") == true) {
                ValueArray.push(v2NOT_RECORDED)
                _eDisposition.NV = v3NOT_RECORDED;
                v2Array.push({ section: "E20", element: "E20_07", val: ValueArray, Count: 1 });
            }
        }
        else {
            _val = _dispo.ValueArray[0].val;
            ValueArray.push(_val)
            v2Array.push({ section: "E20", element: "E20_07", val: ValueArray, Count: 1 });
            _eDisposition.Value = _val;
            _eDisposition.HasData = true;

        }
    }
    else {
        if (_dispo.Count == 0) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.07", Description: "Transport Zip/Transport Type Conflict " })
            _eDisposition.HasErrors = true;
        }
        else {
            _eDisposition.NV = v3NOT_APPLICABLE;
            ValueArray.push(v2NOT_APPLICABLE)
            v2Array.push({ section: "E20", element: "E20_07", val: ValueArray, Count: 1 });
        }
    };

    PCRElementsArray.push(_eDisposition);
    delete _eDisposition;

    //eDisposition.08///////////////////////////////////////////////////
    var _eDisposition = new Object();
    _eDisposition.Errors = false;
    _eDisposition.HasData = false;
    _eDisposition.Name = "eDisposition.09";
    ValueArray = [];
    _dispo = getValue(_destinationElementList, "eDisposition.08");
    if (eDisposition.HasTransport == true) //if have a transport
    {
        if (_dispo.Count != 0) {
            _val = _dispo.ValueArray[0].val;
            _eDisposition.Value = _val;
        }
    }
    else {
        if (_dispo.Count == 0) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.08", Description: "Transport County/Transport Type Conflict " });
            _eDisposition.Errors = true;
        }
    };

    PCRElementsArray.push(_eDisposition);
    delete _eDisposition;

    //eDisposition.09/////////////////////////////////////////
    var _eDisposition = new Object();
    _eDisposition.Errors = false;
    _eDisposition.HasData = false;
    _eDisposition.Name = "eDisposition.09";
    ValueArray = [];
    _dispo = getValue(_destinationElementList, "eDisposition.09");
    if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
    {
        if (_dispo.Count != 0) {
            _val = _dispo.ValueArray[0].val;
            _eDisposition.HasData = true;
            _eDisposition.Value = _val;
            ValueArray.push(_val)
            v2Array.push({ section: "E20", element: "E20_08", val: ValueArray });
        }
    }
    else {
        if (_dispo.Count == 0) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.09", Description: "Transport GPS/Transport Type Conflict " })
            _eDisposition.HasErrors = true;
        }
    };

    PCRElementsArray.push(_eDisposition);
    delete _eDisposition;

    //eDisposition.10//////////////////////////////////////////
    var _eDisposition = new Object();
    _eDisposition.Errors = false;
    _eDisposition.HasData = false;
    _eDisposition.Name = "eDisposition.10";
    ValueArray = [];
    _dispo = getValue(_destinationElementList, "eDisposition.10");
    if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
    {
        if (_dispo.Count != 0) {
            _val = _dispo.ValueArray[0].val;
            console.log("Better be dFacility.14 - Country")
            _eDisposition.Value = _val;
            _eDisposition.HasData = true;
        }
    }
    else {
        if (_dispo.ValueArray.length == 0) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.10", Description: "Transport National Coords/Transport Type Conflict " })
            _eDisposition.HasErrors = true;
        }

    };

    PCRElementsArray.push(_eDisposition);
    delete _eDisposition;


    //eDisposition.11/////////////////////////////////////////////////
    var _eDisposition = new Object();
    _eDisposition.Errors = false;
    _eDisposition.HasData = false;
    _eDisposition.Name = "eDisposition.11";
    _dispo = getValue(_elementList, "eDisposition.11");
    ValueArray = [];
    if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
    {
        if (_dispo.Count == 0) {
            if (isRequiredStateElement("eDisposition.11") == true) {
                _eDisposition.NV = v3NOT_RECORDED;
            }
            else {
                _eDisposition.NV = v3NOT_REPORTING;
            }
        }
        else {
            _val = _dispo.ValueArray[0].val;
            _eDisposition.Value = _val;
            _eDisposition.HasData = true;
        }
    }
    else {
        if (_dispo.Count == 0) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.11", Description: "Transport Number Patients/Transport Type Conflict  " });
            _eDisposition.HasErrors = true;
        }
        else {
            _eDisposition.NV = v3NOT_APPLICABLE;
        }
    };

    PCRElementsArray.push(_eDisposition);
    delete _eDisposition;


    //eDisposition.13/////////////////////////////////////////////////////
    var _eDisposition = new Object();
    _eDisposition.Errors = false;
    _eDisposition.HasData = false;
    _eDisposition.Name = "eDisposition.13";
    ValueArray = [];
    _dispo = getValue(_elementList, "eDisposition.13");
    if (eDisposition.HasTransport == true) {
        if (_dispo.Count != 0) {
            var arr1 = [];
            var arr2 = [];

            for (var i = 0; i <= _dispo.Count - 1; i++) {
                if ((_dispo.ValueArray[i].HasValue == true) && (arr1.indexOf(_dispo.ValueArray[i].val) == -1)) {
                    _val = _dispo.ValueArray[i].val;
                    arr1.push(_val);
                    arr2.push(setV2("eDisposition.13", _val));
                }
            }
            if (arr1.length > 0) {
                //                ValueArray.push(arr2.slice(0))
                v2Array.push({ section: "E20", element: "E20_11", val: arr2.slice(0), Count: arr2.length });
                _eDisposition.Value = arr1.slice(0);;
                _eDisposition.HasData = true;
            }
        }
    }
    else {
        if (_dispo.Count == 0) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.12", Description: "How Patient Moved/Transport Type Conflict  " })
            _eDisposition.HasErrors = true;
        };
    };

    PCRElementsArray.push(_eDisposition);
    delete _eDisposition;

    //eDisposition.14//////////////////////////////////
    var _eDisposition = new Object();
    _eDisposition.Errors = false;
    _eDisposition.HasData = false;
    _eDisposition.Name = "eDisposition.14";
    ValueArray = [];
    _dispo = getValue(_elementList, "eDisposition.14");
    if (eDisposition.HasTransport == true) {
        if (_dispo.Count != 0) {
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _dispo.ValueArray.length; i++) {
                if ((_dispo.ValueArray[i].HasValue == true) && (arr1.indexOf(_dispo.ValueArray[i].val) > -1)) {
                    _val = _dispo.ValueArray[0].val;
                    arr1.push(_val);
                    arr2.push(setV2("eDisposition.14", _val));
                    _eDisposition.HasData = true;
                }
            };
            v2Array.push({ section: "E20", element: "E20_12", val: arr2.slice(0), Count: arr2.length });
            _eDisposition.Value = arr1.slice(0);
        }
    }
    else {
        if (_dispo.Count == 0) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.14", Description: "Patient Position/Transport Type Conflict  " })
            _eDisposition.HasErrors = true;
        };
        v2Array.push({ section: "E20", element: "E20_12", val: null, Count: 0 });
    };

    PCRElementsArray.push(_eDisposition);
    delete _eDisposition;

    //eDisposition.15////
    var _eDisposition = new Object();
    _eDisposition.Errors = false;
    _eDisposition.HasData = false;
    _eDisposition.Name = "eDisposition.15";
    _dispo = getValue(_elementList, "eDisposition.15");
    ValueArray = [];
    if (eDisposition.HasTransport == true) {
        if (_dispo.Count != 0) {
            _val = _dispo.ValueArray[0].val;
            _eDisposition.Value = _val;
            ValueArray.push(setV2("eDisposition.15", _val));
            v2Array.push({ section: "E20", element: "E20_13", val: ValueArray, Count: 1 });
            _eDisposition.HasData = true;
        }
    }
    else {
        if (_dispo.Count == 0) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.15", Description: "Patient Transport From Ambulance/Transport Type Conflict  " })
            _eDisposition.HasErrors = true;
        };

    };

    PCRElementsArray.push(_eDisposition);
    delete _eDisposition;


    //eDisposition.16////
    var _eDisposition = new Object();
    _eDisposition.Errors = false;
    _eDisposition.HasData = false;
    _eDisposition.Name = "eDisposition.16";
    _dispo = getValue(_elementList, "eDisposition.16");
    ValueArray = [];
    if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
    {
        if (_dispo.Count == 0) {
            if (isRequiredStateElement("eDisposition.16") == true) {
                _eDisposition.NV = v3NOT_RECORDED;
            }
        }
        else {
            _val = _dispo.ValueArray[0].val;
            _eDisposition.Value = _val;
            _eDisposition.HasData = true;
        }
    }
    else {
        if (_dispo.Count == 0) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.16", Description: "Patient Transport Method/Transport Type Conflict  " })
            _eDisposition.HasErrors = true;
        };

        _eDisposition.NV = v3NOT_APPLICABLE;
    };

    PCRElementsArray.push(_eDisposition);
    delete _eDisposition;


    //eDisposition.17////
    var _eDisposition = new Object();
    _eDisposition.Errors = false;
    _eDisposition.HasData = false;
    _eDisposition.Name = "eDisposition.17";
    _dispo = getValue(_elementList, "eDisposition.17");
    ValueArray = [];
    if (eDisposition.HasTransport == true) //if have a transport,
    {
        if (_dispo.Count == 0) {
            if (isRequiredStateElement("eDisposition.17") == true) {
                _eDisposition.NV = v3NOT_RECORDED;
                ValueArray.push(v2NOT_RECORDED);
                v2Array.push({ section: "E20", element: "E20_14", val: ValueArray, Count: 1 });
            }
        }
        else {
            _val = _dispo.ValueArray[0].val;
            _eDisposition.HasData = true;
            _eDisposition.Value = _val;
            v2Array.push({ section: "E20", element: "E20_14", val: ValueArray, Count: 1 });

        }
    }
    else {
        if (_dispo.Count == 0) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.17", Description: "Additional Transport Mode/Transport Type Conflict  " });
            _eDisposition.Errors = true;
        };
        _eDisposition.NV = v3NOT_APPLICABLE;
        ValueArray.push(v2NOT_APPLICABLE);
        v2Array.push({ section: "E20", element: "E20_14", val: ValueArray, Count: 1 });
    };

    PCRElementsArray.push(_eDisposition);
    delete _eDisposition;

    //eDisposition.18////
    var _eDisposition = new Object();
    _eDisposition.Errors = false;
    _eDisposition.HasData = false;
    _eDisposition.Name = "eDisposition.18";
    _dispo = getValue(_elementList, "eDisposition.18");
    ValueArray = [];
    if (eDisposition.HasTransport == true) //if have a transport, 
    {
        if (_dispo.Count == 0) {
            if (isRequiredStateElement("eDisposition.18") == true) {
                _eDisposition.NV = v3NOT_RECORDED;

            }
        }
        else {
            var arr1 = [];
            var arr2 = [];
            _val = _dispo.ValueArray[0].val;

            for (var i = 0; i < _dispo.ValueArray.length; i++) {
                if ((_dispo.ValueArray[i].HasValue == true) && (arr1.indexOf(_dispo.ValueArray[i].val) > -1)) {
                    _val = _dispo.ValueArray[i].val

                    arr1.push(_val);
                }
            };
            if (arr1.length > 0) {
                _eDisposition.HasData = true;
                _eDisposition.Value = _val;
            }
        }
    }
    else {
        if (_dispo.ValueArray.length == 0) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.18", Description: "Additional Transport Method/Transport Type Conflict  " });
            _eDisposition.Errors = true;

        };
        _eDisposition.NV = v3NOT_APPLICABLE;

    };

    PCRElementsArray.push(_eDisposition);
    delete _eDisposition;

    //eDisposition.19////
    var _eDisposition = new Object();
    _eDisposition.Errors = false;
    _eDisposition.HasData = false;
    _eDisposition.Name = "eDisposition.19";
    _dispo = getValue(_elementList, "eDisposition.19");
    ValueArray = [];
    if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
    {
        if (_dispo.Count == 0) {
            if (isRequiredStateElement("eDisposition.19") == true) {
                ValueArray.push(v2NOT_RECORDED)
                v2Array.push({ section: "E20", element: "E20_15", val: ValueArray, Count: 1 });
                _eDisposition.NV = v3NOT_RECORDED;
            }
            else {
                ValueArray.push(v2NOT_KNOWN)
                v2Array.push({ section: "E20", element: "E20_15", val: ValueArray, Count: 1 });
            }
        }
        else {
            _val = _dispo.ValueArray[0].val;

            v2Array.push({ section: "E20", element: "E20_15", val: setV2("eDisposition.19", _val), Count: 1 });
            _eDisposition.Value = _val;
        }
    }
    else {
        if (_dispo.Count == 0) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.19", Description: "Condition of Patientat Destination/Transport Type Conflict  " });
            _eDisposition.Errors = true;

        };
        ValueArray.push(v2NOT_APPLICABLE)
        _eDisposition.NV = v3NOT_APPLICABLE;
        v2Array.push({ section: "E20", element: "E20_15", val: ValueArray, Count: 1 });
    };

    PCRElementsArray.push(_eDisposition);
    delete _eDisposition;

    //eDisposition.20////
    var _eDisposition = new Object();
    _eDisposition.Errors = false;
    _eDisposition.HasData = false;
    _eDisposition.Name = "eDisposition.20";
    ValueArray = [];
    _dispo = getValue(_elementList, "eDisposition.20");
    if (eDisposition.HasTransport == true) //if have a transport 
    {
        if (_dispo.Count == 0) {
            if (isRequiredStateElement("eDisposition.20") == true) {
                v2Array.push({ section: "E20", element: "E20_16", val: v2NOT_RECORDED });
                _eDisposition.NV = v3NOT_RECORDED;
            }
        }
        else {
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _dispo.ValueArray.length; i++) {
                if ((_dispo.ValueArray[i].HasValue == true) && (arr1.indexOf(_dispo.ValueArray[i].val) > -1)) {
                    _val = _dispo.ValueArray[i].val
                    arr1.push(_val);
                    arr3.push(setV2("eDisposition.20", _val));
                }
            };
            if (arr1.length > 0) {
                _eDisposition.Value = _val;
                v2Array.push({ section: "E20", element: "E20_16", val: arr2.slice(0) });
                _eDisposition.HasData = true;
            }
        }
    }
    else {
        if (_dispo.Count == 0) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.20", Description: "Reason for Choosing Destination/Transport Type Conflict  " })
            _eDisposition.HasErrors = true;
        };
        v2Array.push({ section: "E20", element: "E20_16", val: v2NOT_APPLICABLE });
        _eDisposition.NV = v3NOT_APPLICABLE;

    };

    PCRElementsArray.push(_eDisposition);
    delete _eDisposition;

    //eDisposition.21////
    var _eDisposition = new Object();
    _eDisposition.Errors = false;
    _eDisposition.HasData = false;
    _eDisposition.Name = "eDisposition.21";
    _dispo = getValue(_elementList, "eDisposition.21");
    ValueArray = [];
    if (eDisposition.HasTransport == true) //if have a transport
    {
        if (_dispo.Count == 0) {
            if (isRequiredStateElement("eDisposition.21") == true) {
                _eDisposition.NV = v3NOT_RECORDED;
                v2Array.push({ section: "E20", element: "E20_17", val: v2NOT_RECORDED, Count: 1 });
            }
        }
        else {
            _val = _dispo.ValueArray[0].val;
            _eDisposition.Value = _val;
            v2Array.push({ section: "E20", element: "E20_17", val: setV2("eDisposition.21", _val), Count: 1 });
            _eDisposition.HasData = true;
        }
    }
    else {
        if (_dispo.Count == 0) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.21", Description: "Type of Destination/Transport Type Conflict  " })
            _eDisposition.HasErrors = true;
        };
        _eDisposition.NV = v3NOT_APPLICABLE
        v2Array.push({ section: "E20", element: "E20_17", val: v2NOT_APPLICABLE, Count: 1 });
    };

    PCRElementsArray.push(_eDisposition);
    delete _eDisposition;

    //eDisposition.22////
    var _eDisposition = new Object();
    _eDisposition.Errors = false;
    _eDisposition.HasData = false;
    _eDisposition.Name = "eDisposition.22";
    ValueArray = [];
    _dispo = getValue(_elementList, "eDisposition.22");
    if (eDisposition.HasTransport == true) //if have a transport
    {
        if (_dispo.Count == 0) {
            if (isRequiredStateElement("eDisposition.22") == true) {
                _eDisposition.NV = v3NOT_RECORDED
            }
        }
        else {
            _val = _dispo.ValueArray[0].val;
            _eDisposition.HasData = true;
            _eDisposition.Value = _val;
        }
    }
    else {
        if (_dispo.Count == 0) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.22", Description: "Hospital In Patient Destination/Transport Type Conflict  " })
            _eDisposition.HasErrors = true;
        };
        _eDisposition.NV = v3NOT_APPLICABLE;

    };
    PCRElementsArray.push(_eDisposition);
    delete _eDisposition;

    //eDisposition.23////
    var _eDisposition = new Object();
    _eDisposition.Errors = false;
    _eDisposition.HasData = false;
    _eDisposition.Name = "eDisposition.23";
    ValueArray = [];
    _dispo = getValue(_elementList, "eDisposition.23");

    if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
    {
        if (_dispo.Count == 0) {
            if (isRequiredStateElement("eDisposition.23") == true) {
                _eDisposition.NV = v3NOT_RECORDED;
            }
        }
        else {
            _val = _dispo.ValueArray[0].val;
            _eDisposition.HasData = true;
            _eDisposition.Value = _val;
        }
    }
    else {
        if (_dispo.Count == 0) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.23", Description: "Hospital Designation/Transport Type Conflict  " })
            _eDisposition.HasErrors = true;
        };
        _eDisposition.NV = v3NOT_APPLICABLE;
    };
    PCRElementsArray.push(_eDisposition);
    delete _eDisposition;

    // If No Transport, not Hospital Pre Activation
    //eDisposition.24 Destination Team Pre-Arrival Alert or Activation and 
    //eDisposition.25 Date/Time of Destination Prearrival Alert or Activation are both recorded when either one is recorded.
    //and :eDisposition.24 != '4224001'

    _sectionIndex = getSectionIndex(eDispositionObject, "eDisposition.HospitalTeamActivationGroup");


    if ((eDisposition.HasTransport == false) || (_sectionIndex[0] == -1)) //if have a transport, forgot the data, 
    {
        var _eDisposition = new Object();
        _eDisposition.Errors = false;
        _eDisposition.HasData = false;
        _eDisposition.NV = v3NOT_APPLICABLE;
        _eDisposition.Name = "eDisposition.24";
        PCRElementsArray.push(_eDisposition);
        delete _eDisposition;


        var _eDisposition = new Object();
        _eDisposition.Errors = false;
        _eDisposition.HasData = false;
        _eDisposition.NV = v3NOT_APPLICABLE;
        _eDisposition.Name = "eDisposition.25";
        PCRElementsArray.push(_eDisposition);
        delete _eDisposition;
    }
    else {
        var bActivation = false;
        for (var x = 0; x < _sectionIndex.length; x++) {
            var _hospitalTeamActivationGroup = new Object();
            var _dataList = eDispositionObject.attributes.sections[_sectionIndex[x]].attributes.elements;

            //eDisposition.24////
            var _eDisposition = new Object();
            _eDisposition.Errors = false;
            _eDisposition.HasData = false;
            _eDisposition.Name = "eDisposition.24";

            _dispo = getValue(_dataList, "eDisposition.24");
            if (_dispo.Count == 0) {
                _eDisposition.NV = v3NOT_RECORDED;
            }
            else {
                _val = _dispo.ValueArray[0].val;
                _eDisposition.HasData = true;

                if (_val == "4224001") {
                    bActivation = false;
                }
                else {
                    bActivation = true;
                };

            };
            _eDisposition.Value = _val;
            PCRElementsArray.push(_eDisposition);
            delete _eDisposition;

            //eDisposition.25////
            var _eDisposition = new Object();
            _eDisposition.Errors = false;
            _eDisposition.HasData = false;
            _eDisposition.Name = "eDisposition.25";

            _dispo = getValue(_dataList, "eDisposition.25");
            if (_dispo.Count == 0) {
                if (bActivation = true) {
                    _eDisposition.NV = v3NOT_RECORDED;
                }
                else {
                    _eDisposition.NV = v3NOT_APPLICABLE;
                }
            }
            else {
                _val = _dispo.ValueArray[0].val;
                _eDisposition.Value = _val;
                _eDisposition.HasData = true;
            };


            PCRElementsArray.push(_eDisposition);
            delete _eDisposition;

            HospitalTeamActivationGroupArray.push(_hospitalTeamActivationGroup);
        };
    };

    //eDisposition.26////
    var _eDisposition = new Object();
    _eDisposition.Errors = false;
    _eDisposition.HasData = false;
    _eDisposition.Name = "eDisposition.26";
    _dispo = getValue(_elementList, "eDisposition.26");
    if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
    {
        if (_dispo.Count != 0) {
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _dispo.ValueArray.length; i++) {
                if ((_dispo.ValueArray[i].HasValue == true) && (arr1.indexOf(_dispo.ValueArray[i].val) > -1)) {
                    _val = _dispo.ValueArray[i].val
                    arr1.push(_val);
                }
            };
            if (arr1.length > 0) {
                _eDisposition.Value = arr1.slice(0);
                _eDisposition.HasData = true;
            }
        }
    };

    PCRElementsArray.push(_eDisposition);

    delete _eDisposition;
    PCRElementsArray.push(eDisposition.HospitalTeamActivationGroup);
    eDisposition.Version3 = PCRElementsArray.slice(0);
    eDisposition.Version2 = v2Array.slice(0);
    return eDisposition;
};
var seteDispatch = function (pdispatch, Call) {

    var _val = [];
    var v2Disp = [];
    var Dispatch = new Object();
    var _elementList = [];
    var _dispatch = new Object();
    doArray = []
    if (typeof pdispatch != "undefined") {
        if (typeof pdispatch.attributes != "undefined") {
            _elementList = pdispatch.attributes.elements;
        };

        /////eDispatch.01////////////////////
        var _eDispatch = new Object();
        _eDispatch.HasErrors = false;
        _eDispatch.HasData = false;
        _eDispatch.Name = "eDispatch.01";
        _dispatch = getValue(_elementList, "eDispatch.01");

        if (_dispatch.ValueArray.length == 0) {
            _eDispatch.HasErrors = true;
            ErrorList.push("eDispatch.01 MANDATORY Element");
        }
        else {
            _val = _dispatch.ValueArray[0].val;
            if (_val != null) {
                _eDispatch.HasData = true;
                _eDispatch.Value = _val;
                v2Disp.push({ section: "E03", element: "E03_01", val: setV2("eDispatch.01", _val) });
            }
        };

        doArray.push(_eDispatch);
        delete _eDispatch;

        /////eDispatch.02////////////////////
        _dispatch = getValue(_elementList, "eDispatch.02");

        Dispatch["HasEMD"] = false;
        var _eDispatch = new Object();
        _eDispatch.HasData = false;
        _eDispatch.HasErrors = false;
        _eDispatch.Name = "eDispatch.02";
        if (Call.isCancelled == false) {
            if (_dispatch.Count == 0) {
                v2Disp.push({ section: "E03", element: "E03_02", val: v2NOT_RECORDED });
                _eDispatch.NV = v3NOT_RECORDED;
            }
            else {

                _val = _dispatch.ValueArray[0].val;
                if (typeof _val != 'undefined') {
                    _eDispatch.Value = _val;
                    _eDispatch.HasData = true;
                    v2Disp.push({ section: "E03", element: "E03_02", val: setV2("eDispatch.02", _val) });
                    if (_val != "2302001") {
                        Dispatch["HasEMD"] = true;
                    }
                }
            }
        }
        else {

            _eDispatch.HasData = false;
            v2Disp.push({ section: "E03", element: "E03_02", val: v2NOT_APPLICABLE });
            _eDispatch.NV = v3NOT_APPLICABLE;
        };


        doArray.push(_eDispatch);
        delete _eDispatch;

        /////eDispatch.03////////////////////
        var _eDispatch = new Object();
        _eDispatch.HasData = false;
        _eDispatch.HasErrors = false;
        _eDispatch.Name = "eDispatch.03";
        _dispatch = getValue(_elementList, "eDispatch.03");

        console.log(_dispatch)
        console.log(_dispatch.ValueArray[0].val)

        if (_dispatch.ValueArray.length != 0) {
            _val = _dispatch.ValueArray[0].val;
            if (_val != null) {
                _eDispatch.Value = _val;
                _eDispatch.HasData = true;
                v2Disp.push({ section: "E03", element: "E03_03", val: _val });
            }
        };

        doArray.push(_eDispatch);
        delete _eDispatch;

        /////eDispatch.04////////////////////
        var _eDispatch = new Object();
        _eDispatch.HasData = false;
        _eDispatch.HasErrors = false;
        _eDispatch.Name = "eDispatch.04";
        _dispatch = getValue(_elementList, "eDispatch.04");
        if (_dispatch.ValueArray.length != 0) {
            _val = _dispatch.ValueArray[0].val;
            if (_val != null) {
                _eDispatch.Value = _val;
                _eDispatch.HasData = true;

            }
        };

        doArray.push(_eDispatch);
        delete _eDispatch;

        /////eDispatch.05////////////////////
        var _eDispatch = new Object();
        _eDispatch.HasData = false;
        _eDispatch.HasErrors = false;
        _eDispatch.Name = "eDispatch.05";
        _dispatch = getValue(_elementList, "eDispatch.05");
        Dispatch["isEmergent"] = false;
        if (_dispatch.ValueArray.length > 0) {
            _val = _dispatch.ValueArray[0].val;
            if (_val != null) {
                _eDispatch.HasData = true;
                if (_val <= "2305003") {
                    Call["IsEmergent"] = true;
                };
                if (_val > "2305003") {
                    Call["IsEmergent"] = false;
                };
                _eDispatch.Value = _val;
            }
        };

        doArray.push(_eDispatch);
        console.log(doArray)
        delete _eDispatch;
        Dispatch.Version3 = doArray.slice(0);
        Dispatch.Version2 = v2Disp.slice(0);
    };

    return Dispatch;
};
var seteTimes = function (pTimes, Call)
{
    
    var _el = pTimes.attributes.elements;
    var eTimes = new Object();
    var _times = new Object();
    var pArr = [];
    var pArr2 = [];
    console.log(_el)
    //eTimes.01//////////////////      
    var _Times = new Object();
    _Times.HasErrors = false;
    _Times.HasData = false;
    _Times.Name = "eTimes.01";
    
    
    
    _times = getValue(_el, "eTimes.01");    
    //    Call["is911Call"] = false;  //determines if call is 911 or otherwise (external call)
    if (Call.isEmergant == true)
    {
        if (_times.IsNull == true)
        {
            if (isRequiredStateElement("eTimes.01")) {
                pArr2.push({ section: "E05", element: "E05_02", val: null });
                _Times.NV = v3NOT_RECORDED;
            }
        }
        else {
            _val = _times.ValueArray[0].val;
        
            _Times.HasData = true;
            _Times.Value = _val;
            pArr2.push({ section: "E05", element: "E05_02", val: _val });
        }
    }
    else {
        pArr2.push({ section: "E05", element: "E05_02", val: null });
        _Times.NV = v3NOT_APPLICABLE;
    };
    
    pArr.push(_Times);
    delete _Times;

    //eTimes.02/////////////////////////////////////////////////////////
    var _Times = new Object();
    _Times.HasErrors = false;
    _Times.HasData = false;
    _Times.Name = "eTimes.02";

    _times = getValue(_el, "eTimes.02");
    console.log(Call)
    
    if (_times.IsNull != true)
    {
        _val = _times.ValueArray[0].val;
        
        if (Call.isEmergant == true)
        {
            console.log("t")
            _Times.HasErrors = true;
            _Times.Error = "911 Call Date entered for non-emergent call ";
        }
        else {
            console.log("f")
            console.log(_val)
            _Times.HasData = true;
            _Times.Value = _val;
            pArr2.push({ section: "E05", element: "E05_03", val: _val });
        };
    };

    pArr.push(_Times);
    delete _Times;

    //eTimes.03//////////////////////////////////////////////////////
    var _Times = new Object();
    _Times.HasErrors = false;
    _Times.HasData = false;
    _Times.Name = "eTimes.03";

    _times = getValue(_el, "eTimes.03");
    if (_times.IsNull == true) {
        _Times.HasErrors = true;
        _Times.Error = "Unit Notified by Dispatch Date/Time Mandatory value. ";
    }
    else {
        // Time Rules:
        //eAirway.10: Date/Time Decision to Manage the Patient with an Invasive Airway should not occur prior 
        //to: Unit Notified by Dispatch Date/Time


        /////////////////////////////////////////////
        if (typeof Call.StartAirwayTime != undefined) {
            if (Call.StartAirwayTime >= _val) {
                _Times.HasErrors = true;
                _Times.Error = "Validation Error: eAirway.10 Date/Time Decision to Manage the Patient with an Invasive Airway should not occur prior to: Unit Notified by Dispatch Date/Time"
            }
        };

        if (typeof Call.EndAirwayTime != undefined) {
            if (Call.EndAirwayTime >= _val) {
                _Times.HasErrors = true;
                _Times.Error = "Validation Error: eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Date/Time Decision to Manage the Patient with an Invasive Airway, Unit Notified by Dispatch Date/Time"
            }
        };

        _val = _times.ValueArray[0].val;
        _Times.Value = _val;
        _Times.HasData = true;
        pArr2.push({ section: "E05", element: "E05_04", val: _val });
    };

    pArr.push(_Times);
    delete _Times;

    //eTimes.04//////////////////////////////////////////////////
    var _Times = new Object();
    _Times.HasErrors = false;
    _Times.HasData = false;
    _Times.Name = "eTimes.04";
    _times = getValue(_el, "eTimes.04");
    if (_times.IsNull != true) {
        _val = _times.ValueArray[0].val;
        if (_val > eTimes["eTimes.03"]) {
            _Times.HasErrors = true;
            _Times.Error = "Validation Error: eAirway.11: eTimes.03:  Dispatch Acknowledged prior to notification."
        };

        if (Call.EndAirwayTime >= _val) {
            _Times.HasErrors = true;
            _Times.Error = "Validation Error: eAirway.11: eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Dispatch Acknowledged Date/Time"
        }
        _val = _times.ValueArray[0].val;
        _Times.Value = _val;
        _Times.HasData = true;

    };

    pArr.push(_Times);
    delete _Times;

    //eTimes.05//////////////////////////////////////////////////
    var _Times = new Object();
    _Times.HasErrors = false;
    _Times.HasData = false;
    _Times.Name = "eTimes.05";
    _times = getValue(_el, "eTimes.05");
    if (Call["isCancelled"] == false) {
        if (_times.IsNull == true) {
            if (isRequiredStateElement("eTimes.05")) {
                v2Array.push({ section: "E05", element: "E05_05", val: null });
                _Times.NV = v3NOT_RECORDED;
            }
        }
        else {
            _val = _times.ValueArray[0].val;
            _Times.Value = _val;
            _Times.HasData = true;
            pArr2.push({ section: "E05", element: "E05_05", val: _val });
        }
    }
    else {
        pArr2.push({ section: "E05", element: "E05_05", val: null });
        _Times.NV = v3NOT_APPLICABLE;
    };

    pArr.push(_Times);
    delete _Times;


    //eTimes.06/////////////////////////////////////////////////        
    var _Times = new Object();
    _Times.HasErrors = false;
    _Times.HasData = false;
    _times = getValue(_el, "eTimes.06");
    if (Call["isCancelled"] == false) {
        if (_times.IsNull == true) {
            if (isRequiredStateElement("eTimes.06")) {
                pArr2.push({ section: "E05", element: "E05_06", val: null });
                _Times.NV = v3NOT_RECORDED;
            }
        }
        else {
            _val = _dispo.ValueArray[0].val;
            pArr2.push({ section: "E05", element: "E05_06", val: _val });
            _Times.Value = _val;
            _Times.HasData = true;
        }
    }
    else {
        _Times.NV = v3NOT_APPLICABLE;
    };

    pArr.push(_Times);
    delete _Times;



    //eTimes.07//////////////////
    //eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Date/Time 
    //Arrived at Patient Date/Time.         
    var _Times = new Object();
    _Times.HasErrors = false;
    _Times.HasData = false;
    _Times.Name = "eTimes.07";
    _times = getValue(_el, "eTimes.07");
    if (Call["isCancelled"] == false) {
        if (_times.IsNull == true) {
            if (isRequiredStateElement("eTimes.07")) {
                v2Array.push({ section: "E05", element: "E05_07", val: null });
                _Times.NV = v3NOT_RECORDED;
            }
        }
        else {
            pArr2.push({ section: "E05", element: "E05_07", val: _val });
            _val = _times.ValueArray[0].val;
            _Times.Value = _val;
            _Times.HasData = true;

            if (Call.EndAirwayTime != null) {
                if (Call.EndAirwayTime >= _val) {
                    _Times.HasErrors = true;
                    _Times.Error = "Validation Error: eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Date/Time Arrived at Patient Date/Time."
                }
            };

        }
    }
    else {
        _Times.NV = v3NOT_APPLICABLE;
    };


    pArr.push(_Times);
    delete _Times;

    //eTimes.08//////////////////
    var _Times = new Object();
    _Times.HasErrors = false;
    _Times.HasData = false;
    _Times.Name = "eTimes.08";
    _times = getValue(_el, "eTimes.08");

    if ((Call["isCancelled"] == false) && (Call.PatientTransfer = true)) {
        if (_times.IsNull == true) {
            if (isRequiredStateElement("eTimes.08")) {
                pArr2.push({ section: "E05", element: "E05_08", val: v2NOT_RECORDED });
                _Times.NV = v3NOT_RECORDED;

            }
            else {
                pArr2.push({ section: "E05", element: "E05_08", val: v2NOT_REPORTING });
                _Times.NV = v3NOT_REPORTING;
            }
        }
        else {
            _val = _times.ValueArray[0].val;
            _Times.Value = _val;
            _Times.HasData = true;
            pArr2.push({ section: "E05", element: "E05_08", val: _val });
        }
    }
    else {

        _Times.NV = v3NOT_APPLICABLE;

    };

    pArr.push(_Times);
    delete _Times;

    //eTimes.09//////////////////
    var _Times = new Object();
    _Times.HasErrors = false;
    _Times.HasData = false;
    _Times.Name = "eTimes.09";
    _times = getValue(_el, "eTimes.09");
    if ((Call["isCancelled"] == false) && (Call.HasPatient == true)) {
        if (_times.IsNull == true) {
            if (isRequiredStateElement("eTimes.09")) {
                _Times.NV = v3NOT_RECORDED;
            }
        }
        else {
            _val = _times.ValueArray[0].val;
            _Times.Value = _val;
            Times.HasData = true;
            pArr2.push({ section: "E05", element: "E05_09", val: _val });
        }
    }
    else {
        _Times.NV = v3NOT_APPLICABLE;
    };

    pArr.push(_Times);
    delete _Times;

    //eTimes.10//////////////////////////////////////////////////////////////////////
    var _Times = new Object();
    _Times.HasErrors = false;
    _Times.HasData = false;
    _Times.Name = "eTimes.10";
    _times = getValue(_el, "eTimes.10");
    if ((Call.isCancelled == false) && (Call.AirTransport == true))
    {
        if (_times.IsNull != true)
        {
            _val = _dispo.ValueArray[0].val;
            _Times.Value = _val;
            _Times.HasData = true;
        }
    }
    else {
        _Times.HasErrors = true;
        _Times.Error = "Validation Error: eTimes.10/eDisposition.16.";
    };

    pArr.push(_Times);
    delete _Times;

    //eTimes.11////////////////////////////////////////////////////////////////
    var _Times = new Object();
    _Times.HasErrors = false;
    _Times.HasData = false;
    _Times.Name = "eTimes.11";
    _times = getValue(_el, "eTimes.11");

    if (Call.HasPatient == true) {
        if (_times.IsNull == true) {
            if (isRequiredStateElement("eTimes.11")) {
                _Times.NV = v3NOT_RECORDED;
            }
        }
        else {
            _val = _dispo.ValueArray[0].val;
            pArr2.push({ section: "E05", element: "E05_10", val: _val });
            _Times.Value = _val;
            _Times.HasData = true;
        }
    }
    else {
        _Times.NV = v3NOT_APPLICABLE;
    };

    pArr.push(_Times);
    delete _Times;

    //eTimes.12///////////////////////////////////////////////////////////////////////        
    var _Times = new Object();
    _Times.HasErrors = false;
    _Times.HasData = false;
    _times = getValue(_el, "eTimes.12");
    _Times.Name = "eTimes.12";
    if (Call.HasPatient == true) {
        if (_times.IsNull == true) {
            if (isRequiredStateElement("eTimes.12")) {
                _Times.NV = v3NOT_RECORDED;
            }
        }
        else {
            _val = _dispo.ValueArray[0].val;
            _Times.Value = _val;
            _Times.HasData = true;
        }
    }
    else {
        _Times.NV = v3NOT_APPLICABLE;
    };

    pArr.push(_Times);
    delete _Times;

    //eTimes.13//////////////////////////////////////////////////////////////////////
    var _Times = new Object();
    _Times.HasErrors = false;
    _Times.HasData = false;
    _Times.Name = "eTimes.13";
    _times = getValue(_el, "eTimes.13");

    if (_times.IsNull == true) {
        _Times.HasErrors = true;
        _Times.Error = "Unit Back in Service Date/Time Mandatory Value ";

    }
    else {
        _val = _dispo.ValueArray[0].val;
        pArr2.push({ section: "E05", element: "E05_11", val: _val });
        _Times.Value = _val;
        _Times.HasData = true;
    };

    pArr.push(_Times);
    delete _Times;

    //eTimes.14//////////////////
    var _Times = new Object();
    _Times.HasErrors = false;
    _Times.HasData = false;
    _Times.Name = "eTimes.14";
    _times = getValue(_el, "eTimes.14");
    if (Call["isCancelled"] != true) {
        if (_times.IsNull == true) {
            if (isRequiredStateElement("eTimes.14")) {
                _Times.Error = "Unit Canceled Date/Time:  eTimes 14 Mandatory "
                _Times.HasErrors = true;
            }
        }
        else {
            _val = _dispo.ValueArray[0].val;
            pArr2.push({ section: "E05", element: "E05_12", val: _val });
            _Times.Value = _val;
            _Times.HasData = true;
        }
    }
    else {

        _Times.Error = "Unit Canceled Date/Time:  Call Not Cancelled ";
        _Times.HasErrors = true;
    };

    pArr.push(_Times);
    delete _Times;

    //eTimes.15//////////////////
    var _Times = new Object();
    _Times.HasErrors = false;
    _Times.HasData = false;
    _Times.Name = "eTimes.15";
    _times = getValue(_el, "eTimes.15");

    if (_times.IsNull != true) {
        _val = _dispo.ValueArray[0].val;
        pArr2.push({ section: "E05", element: "E05_13", val: _val });
        _Times.Value = _val;
        _Times.HasData = true;
    };
    pArr.push(_Times);
    delete _Times;

    //eTimes.16/////////////////
    var _Times = new Object();
    _Times.HasErrors = false;
    _Times.HasData = false;
    _Times.Name = "eTimes.16";
    _times = getValue(_el, "eTimes.16");
    if (_times.IsNull != true) {
        _val = _dispo.ValueArray[0].val;
        _Times.Value = _val;
        _Times.HasData = true;
    };


    pArr.push(_Times);
    delete _Times;
    eTimes.Version3 = pArr.slice(0)
    console.log(eTimes)
    return eTimes;

};    //end of function   
var seteResponse = function (pResponse, Call) {
    console.log(pResponse)
    var eResponse = new Object()
    var _response = new Object()

    //////////////////////eResponse.05    
    var _Response = new Object();
    _Response.HasErrors = false;
    _Response.HasData = false;
    
    _response = getValue(businessObject.elements, "eResponse.05");
    if (_response.IsNull == true) 
    {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.05", Description: "Type of Service Request  MANDATORY" })
        Call.IsValue = false;            
    }
    else
    {
        _val = _response.ValueArray[0].val;
        v2Array.push({ section: "E02", element: "E02_04", val: setV2("eResponse.05", _val) });
        _Response.Value= _val;
                
        if(_val in ["2205011","2205013"]) 
        {
            Call.IsStandBy = true;
        };
    };
    PCRElementsArray.push(_Response);
    delete _Response;
       
    //////////////////////eResponse.06
    var _Response = new Object();
    _Response.HasErrors = false;
    _Response.HasData = false;
    _val = getValue(businessObject.elements, "eResponse.06");
    if (_response.IsNull != true) 
    {
        if(Call.StandBy == false)
        {
            _val = _payment.ValueArray[0].val;
            _Response.HasData = true;
            _Response.Value= _val;        
        }
        else
        {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.06", Description: "Stand By Purpose/Type of Service Conflict " })
            _Response.HasErrors = true;        }
    };
    PCRElementsArray.push(_Response);
    delete _Response;
                
    //////////////////////eResponse.01
    var _Response = new Object();
    _Response.HasErrors = false;
    _Response.HasData = false;

    //This pattern verifies that the EMS Agency Number in eResponse.01 matches the EMS Agency Number in dAgency.02.
    _val = getValue(businessObject.elements, "eResponse.01");
    if (_response.IsNull == true) 
    {
        if(dAgency["dAgency.02"] !=  eResponse["eResponse.01"])
        {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.01", Description: "EMS Agency Number  dAgency.02 Must equal eResponse.01" })
            _Response.HasErrors = true;
        }
        else
        {                   
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.01", Description: "EMS Agency Number  MANDATORY" })
            _Response.HasErrors = false;        
        }
    }
    else
    {
        _val = _payment.ValueArray[0].val;
        v2Array.push({ section: "E02", element: "E02_01", val: _val });
        _Response.HasData = true;
        _Response.Value= _val;                   
    };
    PCRElementsArray.push(_Response);
    delete _Response;
        
    //////////////////////eResponse.02
    var _Response = new Object();
    _Response.HasErrors = false;
    _Response.HasData = false;

    _val = getValue(elementList, "eResponse.02");
    if (_response.IsNull == true) 
    {
        if(Call.StandBy == false)
        {            
            if (isRequiredStateElement("eResponse.02"))
            {
                _Response.NV= v3NOT_RECORDED;
            }
            else
            {
                _Response.NV= v3NOT_REPORTING;                
            }
        }
        else
        {
            _Response.NV= v3NOT_APPLICABLE;                
        }
    }
    else
    {
        _val = _payment.ValueArray[0].val;
        _Response.HasData = true;
        _Response.Value= _val;        
    };
    PCRElementsArray.push(_Response);
    delete _Response;
        
    //////////////////////eResponse.03
    var _Response = new Object();
    _Response.HasErrors = false;
    _Response.HasData = false;

    _val = getValue(businessObject.elements, "eResponse.03");
    if (Call.IsEmergant == true) {
        if (_response.IsNull == true) {
            if (isRequiredStateElement("eResponse.02") == true) {
                v2Array.push({ section: "E02", element: "E02_02", val: v2NOT_RECORDED });
                _Response.NV = v3NOT_RECORDED;
            }
            else {
                _val = _payment.ValueArray[0].val;
                v2Array.push({ section: "E02", element: "E02_02", val: _val });
                _Response.HasData = true;
                _Response.Value = _val;
            }
        }
        else {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.03", Description: "Stand By IncidentNumber/Type of Service Conflict " })
            v2Array.push({ section: "E02", element: "E02_02", val: v2NOT_APPLICABLE });
            _Response.NV = v3NOT_APPLICABLE;
        };
        PCRElementsArray.push(_Response);
        delete _Response;

        //////////////////////eResponse.04
        var _Response = new Object();
        _Response.HasErrors = false;
        _Response.HasData = false;

        _val = getValue(businessObject.elements, "eResponse.04");
        if (Call.StandBy == false) {
            if (_response.IsNull == true) {
                if (isRequiredStateElement("eResponse.04") == true) {
                    v2Array.push({ section: "E02", element: "E02_03", val: v2NOT_RECORDED });
                    _Response.NV = v3NOT_RECORDED;
                }
            }
            else {
                _val = _payment.ValueArray[0].val;
                v2Array.push({ section: "E02", element: "E02_03", val: _val });
                _Response.HasData = true;
                _Response.Value = _val;
            }
        }
        else {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.04", Description: "Stand By Response Number/Type of Service Conflict " });
            _Response.HasErrors = true;
        };

        PCRElementsArray.push(_Response);
        delete _Response;

        //////////////////////eResponse.07
        var _Response = new Object();
        _Response.HasErrors = false;
        _Response.HasData = false;

        _val = getValue(businessObject.elements, "eResponse.07");
        if (_response.IsNull == true) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.07", Description: "Primary Role of the Unit MANDATORY" });
            _Response.HasErrors = true;
        }
        else {
            _val = _payment.ValueArray[0].val;
            v2Array.push({ section: "E02", element: "E02_05", val: SetV2("eResponse.07", _val) });
            _Response.HasData = true;
            _Response.Value = _val;
        };
        PCRElementsArray.push(_Response);
        delete _Response;

        alert("A dispatch delay is any time delay that occurs from the time of PSAP call (eTimes.01) to the time the unit is notified by dispatch (eTimes.03).")
        //////////////////////eResponse.08
        //When a delay for a particular phase of a response is "None/No Delay", no other 
        //delays should be recorded for that phase.
        //eResponse.08[. = '2208013'
        var _Response = new Object();
        _Response.HasErrors = false;
        _Response.HasData = false;

        _val = getValue(businessObject.elements, "eResponse.08");
        if (Call.StandBy == false) {
            if (_response.IsNull == true) {
                if (isRequiredStateElement("eResponse.08") == true) {
                    v2Array.push({ section: "E02", element: "E02_06", val: v2NOT_RECORDED });
                    _Response.NV = v3NOT_RECORDED;
                }
            }
            else {
                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _payment.ValueArray.length; i++) {
                    if ((_payment.ValueArray[i].HasValue == true) && (arr1.indexOf(_payment.ValueArray[i].val) > -1)) {
                        _val = _payment.ValueArray[i].val
                        if (_val == '2208013') {
                            Call.HasDelay == false;
                        }
                        arr1.push(_val);
                        arr2.push(setD2("eResponse.08", _val));
                    }
                };
                if (arr1.length > 0) {
                    if ('2208013' in arr1) //if None, than None only
                    {
                        if (arr1.length > 1) {
                            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.08", Description: "Dispatch Delay Type Conflict" })
                            _Response.HasErrors = true;
                        }
                    };
                    _Response.HasData = true;
                    _Response.Value = arr1.slice(0);
                    v2Array.push({ section: "E02", element: "E02_06", val: arr2.slice(0) });
                }
            }
        }
        else {
            v2Array.push({ section: "E02", element: "E02_06", val: v2NOT_APPLICABLE });
            _Response.NV = v3NOT_APPLICABLE;
        };
        PCRElementsArray.push(_Response);
        delete _Response;

        //////////////////////eResponse.09
        var _Response = new Object();
        _Response.HasErrors = false;
        _Response.HasData = false;

        //context="nem:eResponse.09[. = '2209011']">
        //This rule fires when there is an instance of eResponse.09 Type of Response Delay 
        //set to "None/No Delay".

        alert("A response delay is any time delay that occurs from the time the unit is notified by dispatch (eTimes.03) to the time the unit arrived on scene (eTimes.06).")
        _val = getValue(businessObject.elements, "eResponse.09");
        if (Call.HasDelay == false) {
            if (_response.IsNull == true) {
                if (isRequiredStateElement("eResponse.09") == true) {
                    v2Array.push({ section: "E02", element: "E02_07", val: v2NOT_RECORDED });
                    _Response.NV = v3NOT_RECORDED;
                    eResponse["TypeofResponseDelay"] = NOT_RECORDED;
                }
            }
            else {
                var arr1 = [];
                var arr2 = [];
                var arr3 = [];
                for (var i = 0; i < _payment.ValueArray.length; i++) {
                    if ((_payment.ValueArray[i].HasValue == true) && (arr1.indexOf(_payment.ValueArray[i].val) > -1)) {
                        _val = _payment.ValueArray[i].val
                        if (_val == '2209011') {
                            Call.HasDelay == false;
                        }
                        arr1.push(_val);
                        arr2.push(setD2("eResponse.09", _val));
                    }
                };
                if (arr1.length > 0) {
                    if ('2209011' in arr1) //if None, than None only
                    {
                        if (arr1.length > 1) {
                            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.09", Description: "Response Delay Type Conflict" })
                        }
                    };
                    v2Array.push({ section: "E02", element: "E02_07", val: arr2.slice(0) });
                    _eResponse.Value = arr1.slice(0);
                }
            }
        }
        else {
            v2Array.push({ section: "E02", element: "E02_07", val: v2NOT_APPLICABLE });
            _Response.NV = v3NOT_APPLICABLE;
        };
        PCRElementsArray.push(_Response);
        delete _Response;

        alert("A scene delay is any time delay that occurs from the time the unit arrived on scene (eTimes.06) to the time the unit left the scene (eTimes.09).")
        //////////////////////eResponse.10
        //eResponse.10" context="nem:eResponse.10[. = '2210017']">
        //This rule fires when there is an instance of eResponse.10 Type of Scene Delay set to 
        //"None/No Delay". -->
        var _Response = new Object();
        _Response.HasErrors = false;
        _Response.HasData = false;

        _val = getValue(businessObject.elements, "eResponse.10");
        if (Call.StandBy == false) {
            if (_response.IsNull == true) {
                if (isRequiredStateElement("eResponse.10") == true) {
                    v2Array.push({ section: "E02", element: "E02_08", val: v2NOT_RECORDED });
                    _Response.NV = v3NOT_RECORDED;
                }
            }
            else {
                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _payment.ValueArray.length; i++) {
                    if ((_payment.ValueArray[i].HasValue == true) && (arr1.indexOf(_payment.ValueArray[i].val) > -1)) {
                        _val = _payment.ValueArray[i].val
                        if (_val == '2210017') {
                            Call.HasDelay == false;
                        }
                        arr1.push(_val);
                        arr2.push(setD2("eResponse.10", _val));
                    }
                };
                if (arr1.length > 0) {
                    if ('2210017' in arr1) //if None, than None only
                    {
                        if (arr1.length > 1) {
                            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.18", Description: "Scene Delay Type Conflict" })
                        }
                    };
                    v2Array.push({ section: "E02", element: "E02_08", val: arr2.slice(0) });
                    _eResponse.Value = arr1.slice(0);
                }
            }
        }
        else {
            v2Array.push({ section: "E02", element: "E02_08", val: v2NOT_APPLICABLE });
            _Response.NV = v3NOT_APPLICABLE;
        };
        PCRElementsArray.push(_Response);
        delete _Response;

        //////////////////////eResponse.11
        var _Response = new Object();
        _Response.HasErrors = false;
        _Response.HasData = false;

        //nem:eResponse.11[. = '2211011']">
        //This rule fires when there is an instance of eResponse.11 Type of Transport Delay set to 
        //"None/No Delay".

        alert("A transport delay is any time delay that occurs from the time the unit left the scene (eTimes.09) to the time the patient arrived at the destination (eTimes.10).")
        _val = getValue(businessObject.elements, "eResponse.11");
        if (Call.IsStandBy != true)  //we have no delay
        {
            if (_response.IsNull == true) {
                if (isRequiredStateElement("eResponse.11") == true) {
                    v2Array.push({ section: "E02", element: "E02_09", val: v2NOT_RECORDED });
                    _Response.NV = v3NOT_RECORDED;
                }
            }
            else {
                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _payment.ValueArray.length; i++) {
                    if ((_payment.ValueArray[i].HasValue == true) && (arr1.indexOf(_payment.ValueArray[i].val) > -1)) {
                        _val = _payment.ValueArray[i].val
                        if (_val == '2211011') {
                            Call.HasDelay == true
                        }
                        arr1.push(_val);
                        arr2.push(setD2("eResponse.11", _val));
                    }
                };
                if (arr1.length > 0) {
                    if ('2211011' in arr1) //if None, than None only
                    {
                        if (arr1.length > 1) {
                            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.11", Description: "Transport Delay Type Conflict" })
                        }
                    };
                    _eResponse.Value = arr.slice(0);
                    v2Array.push({ section: "E02", element: "E02_09", val: arr2.slice(0) });
                }
            }
        }
        else {
            _Response.NV = v3NOT_APPLICABLE;
            v2Array.push({ section: "E02", element: "E02_09", val: v2NOT_APPLICABLE });
        };
        PCRElementsArray.push(_Response);
        delete _Response;


        //////////////////////eResponse.12
        var _Response = new Object();
        _Response.HasErrors = false;
        _Response.HasData = false;

        //nem:eResponse.12[. = '2212015']">
        //This rule fires when there is an instance of eResponse.12 Type of Turn-Around Delay set to "None/No Delay". -->
        alert("If a patient is being transported by the unit, turn-around delay is any time delay that occurs from the time the patient arrived at the destination (eTimes.10) until the time the unit is back in service (eTimes.13) or unit back at the home location (eTimes15) [whichever is the greater of the two times]");
        //If no patient is being transported by the unit, turn-around delay is any time delay that occurs from the time the unit arrived on scene (eTimes.06) until the unit is back in service (eTimes.13) or the unit back at the home location (eTimes.15) [whichever is the greater of the two times].")

        alert("A transport delay is any time delay that occurs from the time the unit left the scene (eTimes.09) to the time the patient arrived at the destination (eTimes.10).")
        _val = getValue(businessObject.elements, "eResponse.12");
        if (Call.IsStandBy == false) {
            if (_response.IsNull == true) {
                if (isRequiredStateElement("eResponse.12") == true) {
                    v2Array.push({ section: "E02", element: "E02_10", val: v2NOT_RECORDED });
                    _Response.NV = v3NOT_RECORDED;
                }
            }
            else {
                var bDelay = false;
                var arr1 = [];
                var arr2 = [];
                var arr3 = [];
                for (var i = 0; i < _payment.ValueArray.length; i++) {
                    if ((_payment.ValueArray[i].HasValue == true) && (arr1.indexOf(_payment.ValueArray[i].val) > -1)) {
                        _val = _payment.ValueArray[i].val

                        if (_val == "2212015") {
                            Call.HasDelay == true
                        }
                        arr1.push(_val);
                        arr2.push(setD2("eResponse.12", _val));
                    }
                };
                if (arr1.length > 0) {
                    if ("2212015" in arr1) //if None, than None only
                    {
                        if (arr1.length > 1) {
                            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.12", Description: "Turn Around Delay Type Conflict" })
                            _Response.HasErrors = true;
                        }
                    };
                    _eResponse.Value = arr1.slice(0);
                    v2Array.push({ section: "E02", element: "E02_10", val: arr2.slice(0) });
                }
            }
        }
        else {
            _Response.NV = v3NOT_APPLICABLE;
            v2Array.push({ section: "E02", element: "E02_10", val: v2NOT_APPLICABLE });
        };
        PCRElementsArray.push(_Response);
        delete _Response;

        //////////////////////eResponse.13
        var _Response = new Object();
        _Response.HasErrors = false;
        _Response.HasData = false;

        _val = getValue(businessObject.elements, "eResponse.13");
        if (_response.IsNull == true) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.13", Description: "EMS Unit number MANDATORY" })
            _Response.HasErrors = true;
        }
        else {
            _val = _payment.ValueArray[0].val;
            v2Array.push({ section: "E02", element: "E02_11", val: _val });
            _Response.HasData = true;
            _Response.Value = _val;
        };
        PCRElementsArray.push(_Response);
        delete _Response;

        //////////////////////eResponse.14
        var _Response = new Object();
        _Response.HasErrors = false;
        _Response.HasData = false;

        _val = getValue(businessObject.elements, "eResponse.14");
        if (_val == null) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.14", Description: "EMS Unit Call Sign MANDATORY" })
            _Response.HasErrors = true;
        }
        else {
            _val = _payment.ValueArray[0].val;
            v2Array.push({ section: "E02", element: "E02_12", val: _val });
            _Response.HasData = true;
            _Response.Value = _val;

        };
        PCRElementsArray.push(_Response);
        delete _Response;


        //////////////////////eResponse.15
        var _Response = new Object();
        _Response.HasErrors = false;
        _Response.HasData = false;

        _val = getValue(businessObject.elements, "eResponse.15");
        if (_val == null) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.15", Description: "Unit Level of Care MANDATORY" })
            _Response.HasErrors = true;
        }
        else {
            _val = _payment.ValueArray[0].val;
            _Response.HasData = true;
            _Response.Value = _val;
        };
        PCRElementsArray.push(_Response);
        delete _Response;

        //////////////////////eResponse.16
        var _Response = new Object();
        _Response.HasErrors = false;
        _Response.HasData = false;

        _val = getValue(businessObject.elements, "eResponse.16");
        if (_response.IsNull != true) {
            _val = _payment.ValueArray[0].val;
            v2Array.push({ section: "E02", element: "E02_13", val: _val });
            _Response.HasData = true;
            _Response.Value = _val;
        };

        PCRElementsArray.push(_Response);
        delete _Response;

        //////////////////////eResponse.17
        var _Response = new Object();
        _Response.HasErrors = false;
        _Response.HasData = false;

        _val = getValue(businessObject.elements, "eResponse.17");
        if (_response.IsNull != true) {
            _val = _payment.ValueArray[0].val;
            _Response.HasData = true;
            _Response.Value = _val;
        };
        PCRElementsArray.push(_Response);
        delete _Response;

        //////////////////////eResponse.18
        var _Response = new Object();
        _Response.HasErrors = false;
        _Response.HasData = false;

        _val = getValue(businessObject.elements, "eResponse.18");
        if (_response.IsNull != true) {
            eResponse["eResponse.18"] = null;
            eResponse["VehicleDispatchUSNationalGridLocation"] = null;

        }
        else {
            _val = _payment.ValueArray[0].val;
            _Response.HasData = true;
            _Response.Value = _val;
        };
        PCRElementsArray.push(_Response);
        delete _Response;

        //////////////////////eResponse.19
        var _Response = new Object();
        _Response.HasErrors = false;
        _Response.HasData = false;

        _val = getValue(businessObject.elements, "eResponse.19");
        if (Call.IsCancelled == false) {
            if (_response.IsNull == true) {
                if (isRequiredStateElement("eResponse.19") == true) {
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.19", Description: "Beginning Odometer REQUIRED" })
                    _Response.HasErrors = true;
                }
            }
            else {
                _val = _payment.ValueArray[0].val;
                v2Array.push({ section: "E02", element: "E02_16", val: _val });
                _Response.HasData = true;
                _Response.Value = _val;
            }
        };

        PCRElementsArray.push(_Response);
        delete _Response;

        //////////////////////eResponse.20
        var _Response = new Object();
        _Response.HasErrors = false;
        _Response.HasData = false;

        _val = getValue(businessObject.elements, "eResponse.20");
        if (Call.IsCancelled == false)  //if Cancelled prior to arrival on Scene, no data
        {
            if (_response.IsNull == true) {
                if (isRequiredStateElement("eResponse.20") == true) {
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.20", Description: "On-scene Odometer MANDATORY" })
                    _Response.HasErrors = true;
                }
            }
            else {
                _val = _payment.ValueArray[0].val;

                v2Array.push({ section: "E02", element: "E02_16", val: _val });
                _Response.HasData = true;
                _Response.Value = _val;
            }
        };

        PCRElementsArray.push(_Response);
        delete _Response;
        //////////////////////eResponse.21

        var _Response = new Object();
        _Response.HasErrors = false;
        _Response.HasData = false;

        _val = getValue(businessObject.elements, "eResponse.21");
        if (eDisposition["eDisposition.12"] != "4212007")  //if Cancelled prior to arrival on Scene, no data
        {
            if (_response.IsNull == true) {
                if (isRequiredStateElement("eResponse.21") == true) {
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.21", Description: "On-scene Odometer MANDATORY" })
                    _Response.HasErrors = true;
                }
            }
            else {
                _val = _payment.ValueArray[0].val;
                v2Array.push({ section: "E02", element: "E02_18", val: _val });
                _Response.HasData = true;
                _Response.Value = _val;
            }
        };
        PCRElementsArray.push(_Response);
        delete _Response;


        //////////////////////eResponse.22
        var _Response = new Object();
        _Response.HasErrors = false;
        _Response.HasData = false;

        _val = getValue(businessObject.elements, "eResponse.22");
        if (eDisposition["eDisposition.12"] != "4212007")  //if Cancelled prior to arrival on Scene, no data
        {
            if (_response.IsNull == true) {
                if (isRequiredStateElement("eResponse.22") == true) {
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.22", Description: "Ending Odometer MANDATORY" });
                    _Response.HasErrors = true;
                }
            }
            else {
                _val = _payment.ValueArray[0].val;
                v2Array.push({ section: "E02", element: "E02_19", val: _val });
                _Response.HasData = true;
                _Response.Value = _val;
            }
        };
        PCRElementsArray.push(_Response);
        delete _Response;


        //////////////////////eResponse.23
        var _Response = new Object();
        _Response.HasErrors = false;
        _Response.HasData = false;

        _val = getValue(businessObject.elements, "eResponse.22");
        if (Call.IsCancelled == false)  //if Cancelled prior to arrival on Scene, no data
        {
            if (_response.IsNull == true) {
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.23", Description: "Response Mode to Scene MANDATORY" })
                _Response.HasErrors = true;
            }
            else {
                v2Array.push({ section: "E02", element: "E02_20", val: setV2("eResponse.23", _val) });
                _Response.HasData = true;
                _Response.Value = _val;

            }
        };
        PCRElementsArray.push(_Response);
        delete _Response;


        //////////////////////eResponse.24
        var _Response = new Object();
        _Response.HasErrors = false;
        _Response.HasData = false;
        _val = getValue(businessObject.elements, "eResponse.24");
        if (eDisposition["eDisposition.12"] != "4212007")  //if Cancelled prior to arrival on Scene, no data
        {
            if (_response.IsNull == true) {
                if (isRequiredStateElement("eResponse.24") == true) {
                    _eResponse.NV = v3NOT_RECORDED;
                }
            }
            else {
                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _payment.ValueArray.length; i++) {
                    if ((_payment.ValueArray[i].HasValue == true) && (arr1.indexOf(_payment.ValueArray[i].val) > -1)) {
                        _val = _payment.ValueArray[i].val
                        arr1.push(_val);
                    }
                };
                _eResponse.Value = arr1.slice(0);
            }
        }
        else {
            _eResponse.NV = v3NOT_APPLICABLE;
        };
        PCRElementsArray.push(_Response);
        delete _Response;
    }
    return eResponse;
};
