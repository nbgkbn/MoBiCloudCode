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
    Call.isEmergent= true;
   
    Call.StandBy = false;
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
    */
    ///////////////////////////////////eResponse
    eResponseObject = getObjectFromOLTPExtract(parseObject, "eResponse");
    var _ResponseObject = new Object();
    if (eResponseObject.IsUndefined != true) {
        eResponseObject.HasDataSet = true;       
    };
    _ResponseObject = seteResponse(eResponseObject, Call);
    /*
    ///////////////////////////////////ePayment
    ePaymentsObject = getObjectFromOLTPExtract(parseObject, "ePayment");
    var _ePaymentsObject = new Object();
    ePaymentsObject.HasDataSet = false;
    if (ePaymentsObject.IsUndefined != true) {
        ePaymentsObject.HasDataSet = true;      
    };
    _ePaymentsObject = setePayment(ePaymentsObject, Call);
    ////////////////////////////////////////////////////////////////

       
    ////////////////////////eTimes
    eTimesObject = getObjectFromOLTPExtract(parseObject, "eTimes");
    var _eTimesObject = new Object();
    eTimesObject.HasDataSet = false;
    if (eTimesObject.IsUndefined != true) {
        eTimesObject.HasDataSet = true;
    }
    _eTimesObject = seteTimes(eTimesObject, Call);
    */
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
    var pArr2 = [];
    var XML = new XMLWriter('UTF-8', '1.0');
    XML.writeStartDocument();
//    XML.writeStartElement('EMSDataSet');
    //XML.writeAttributeString('xmlns', "http://www.nemsis.org  xsi:schemaLocation=http://www.nemsis.org http://nemsis.org/media/XSD_v3/_nemsis_v3.3.4/3.3.4.140328/XSDs/NEMSIS_XSDs_v3.3.4.140328/EMSDataSet_v3.xsd  xmlns:xsi=http://www.w3.org/2001/XMLSchema-instance") 
    //XML.writeAttributeString('xmlns', 'http://www.nemsis.org');
//    XML.writeAttributeString('xsi:schemaLocation', 'http://www.nemsis.org http://nemsis.org/media/XSD_v3/_nemsis_v3.3.3/3.3.3.130926/XSDs/NEMSIS_XSDs_v3.3.3.130926/DEMDataSet_v3.xsd');
    //XML.writeAttributeString('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance');
//    XML.writeStartElement('PatientCareReport');
    XML.writeStartElement('eRecord');


    
    //_response = getValue(elementList, "eRecord.02");
    //////////////////////eRecord.01
    
    var _val = [];
    var _record

    
    if (_val == null) {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eRecord.01", Description: "PCR Number  MANDATORY" })

        eRecord.HasErrors = true;
    }
    else {
        //_val = _record.ValueArray[0].val;
        _val.push("PCRID") //_record.ValueArray[0].val;
        pArr2.push({ section: "E01", element: "E01_01", val: _val });
        XML.writeElementString("eRecord.01", _val[0]);
    };

    eRecord["eRecord.01"] = _val[0];

    //////////////////////eRecord.02
    var _val = [];
    var _erecord = []
    //_response= getValue(elementList, "eRecord.02");
    "Software Creator";

    if (_val == null) {
        eRecord.HasErrors = true;
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eRecord.02", Description: "Software Creator MANDATORY" })

    }
    else {
        _val.push("Software Creator");// = _record.ValueArray[0].val;
        console.log(_val[0])
        
        XML.writeElementString("eRecord.02", _val[0]);
        pArr2.push({ section: "E01", element: "E01_02", val: _val[0] });
    };
    eRecord["eRecord.02"] = _val[0];

    //////////////////////eRecord.03
    //_response= getValue(businessObject.elements, "eRecord.03");
    var _val = [];
    var _erecord = []
    if (_val == null) {
        eRecord.HasErrors = true;
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eRecord.03", Description: "Software Name MANDATORY" })

    }
    else {
        _val.push("MoBi")
        console.log(_val[0])
        XML.writeElementString("eRecord.03", _val[0]);
        pArr2.push({ section: "E01", element: "E01_03", val: _val[0] });
    };
    eRecord["eRecord.02"] = _val[0];

    //////////////////////eRecord.04
    //_val = getValue(businessObject.elements, "eRecord.04");
    var _val = [];
    var _erecord = [];
    if (_val == null) {

        eRecord.HasErrors = true;
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eRecord.04", Description: "Software Version MANDATORY" })
        pArr2.push({ section: "E01", element: "E01_04", val: v2NOT_RECORDED });

    }
    else {
        _val.push("Version");// _record.ValueArray[0].val;
        console.log(_val[0])
        pArr2.push({ section: "E01", element: "E01_04", val: _val[0] });
        XML.writeElementString("eRecord.04", _val[0]);

    };

    eRecord["eRecord.03"] = _val[0];

    
    XML.writeEndElement();
    console.log(eRecord)
    var XMLDoc = XML.flush()
    console.log(XMLDoc)
    return eRecord;
};
var seteDisposition = function (pDisposition, Call)
{
    var ValueArray = new Array();
    var eDisposition = new Object();
    var HospitalTeamActivationGroup = new Object();
    var HospitalTeamActivationGroupArray = [];
    //////////////////////////////////////
    var XML = new XMLWriter('UTF-8', '1.0');
    XML.writeStartDocument();

    XML.writeStartElement("eDisposition");
    _elementList = pDisposition.attributes.elements;
    _destinationElementList = pDisposition.attributes.sections[0].attributes.elements;
    XML.writeStartElement("eDisposition.DestinationGroup");
    //eDisposition.12
    var _val =[];
    var _dispo  = [];
    _dispo = getValue(_elementList, "eDisposition.12");

    if (_dispo.ValueArray.length == 0) {
        Call.IsValid = false;        
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eDisposition.12", Description: "Incident/Patient Disposition Mandatory" })
    }
    else {
        _val.push(_dispo.ValueArray[0].val);
        if (_dispo.IsNull != true) 
        {
            _val.push(_dispo.ValueArray[0].val);
            XML.writeElementString("eDisposition.12", _val[0]);
            ValueArray.push(setV2("eDisposition.12", _val[0]));
            v2Array.push({ section: "E20", element: "E20_10", val: ValueArray, Count: 1 });

            switch (_val[0].toString()) {
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

        eDisposition["eDisposition.12"]=_val[0];
    };
    console.log(eDisposition)
    //eDisposition.01///////////////////////////////////////////////////////////
    var _eDisposition = new Object();
    ValueArray = [];
    var _val =[];
    var _dispo  = [];
    _dispo = getValue(_destinationElementList, "eDisposition.01");    
    if (eDisposition.HasTransport == true) //if have a transport 
    {
        if (_dispo.IsNull ==true) {
            if (isRequiredStateElement("eDisposition.01") == true) {
                _val.push("7701003")
                v2Array.push({ section: "E20", element: "E20_01", val: ValueArray, Count: 1 });
                XML.writeStartElement('eDisposition.01');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
            }
            else {
                _val.push("7701005")
                v2Array.push({ section: "E20", element: "E20_01", val: ValueArray, Count: 1 });
            }
        }
        else {
            _val.push(_dispo.ValueArray[0].val);
            ValueArray.push(_val[0]);
            XML.writeElementString("eDisposition.01", _val[0]);
            v2Array.push({ section: "E20", element: "E20_01", val: ValueArray, Count: 1 });
        }
    }
    else {
        if (_dispo.ValueArray.length == 0) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.01", Description: "Transport Desitination with No Transport Record " })
            _eDisposition.HasErrors = true;
        };
        _val.push("7701001")
        XML.writeStartElement('eDisposition.01');
        XML.writeAttributeString('NV', "7701001");
        XML.writeAttributeString('xsi:nil', 'true');
        XML.writeEndElement();

        v2Array.push({ section: "E20", element: "E20_01", val: ValueArray, Count: 1 });
    };
    eDisposition["eDisposition.01"]=_val[0];


    //eDisposition.02//////////////////////////////////////////////////////////    
    console.log(pDisposition)
    var _val =[];
    var _dispo  = [];
    ValueArray = [];
    _dispo = getValue(_destinationElementList, "eDisposition.02");
    console.log(_dispo);
    if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
    {
        if (_dispo.IsNull ==true) {
            if (isRequiredStateElement("eDisposition.02") == true) {
                _val.push("7701003")
                XML.writeStartElement('eDisposition.02');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
                v2Array.push({ section: "E20", element: "E20_02", val: v2NOT_RECORDED, Count: 1 });
            }
            else {
                _val.push("7701005")
                XML.writeStartElement('eDisposition.02');
                XML.writeAttributeString('NV', "7701005");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
                v2Array.push({ section: "E20", element: "E20_02", val: v2NOT_REPORTING, Count: 1 });
            }
        }
        else {
            _val.push(_dispo.ValueArray[0].val);
            XML.writeElementString("eDisposition.02", _val[0]);
            ValueArray.push(_val[0]);
            v2Array.push({ section: "E20", element: "E20_02", val: ValueArray, Count: 1 });
        }
    }
    else {
        if (_dispo.IsNull !=true) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.02", Description: "Transport Desitination with No Transport Record " })
            eDisposition.HasErrors = true;
        }
        else {
            _val.push("7701005")
            ValueArray.push(v2NOT_APPLICABLE)
            XML.writeStartElement('eDisposition.02');
            XML.writeAttributeString('NV', "7701001");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();

            v2Array.push({ section: "E20", element: "E20_01", val: ValueArray, Count: 1 });
        }
    };

    eDisposition["eDisposition.02"]=_val[0];

    //eDisposition.03/////////////////////////////////////////////////////////////
    var _val =[];
    var _dispo  = [];
    ValueArray = [];
    _dispo = getValue(_destinationElementList, "eDisposition.03");
    if (eDisposition.HasTransport == true) //if have a transport, and Is Required Data 
    {
        if (_dispo.IsNull !=true) {
            if (isRequiredStateElement("eDisposition.03") == true) {
                ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.03", Description: "Transport Address Required" })
                eDisposition.HasErrors = true;
            };
        }
        else {
            _val.push(_dispo.ValueArray[0].val[0]);
            XML.writeElementString("eDisposition.03", _val[0]);
            ValueArray.push(_val[0])
            v2Array.push({ section: "E20", element: "E20_03", val: ValueArray, Count: 1 });
        }
    };
    eDisposition["eDisposition.03"]=_val[0];
    
    //eDisposition.04///////////////////////////////////////////////////////
    var _val =[];
    var _dispo  = [];
    ValueArray = [];
    _dispo = getValue(_destinationElementList, "eDisposition.04");
    if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
    {
        if (_dispo.IsNul !=true) {
            _val.push(_dispo.ValueArray[0].val);
            XML.writeElementString("eDisposition.04", _val[0]);
            ValueArray.push(_val[0])
            v2Array.push({ section: "E20", element: "E20_04", val: ValueArray });            
        }
    }
    else {
        if (_dispo.IsNull == true) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.04", Description: "Transport Address Required" })
            Call.HasErrors = true;
        }
    };

    eDisposition["eDisposition.04"] = _val[0];

    //eDisposition.05/////////////////////////////////////////////
    var _val =[];
    var _dispo  = [];
    ValueArray = [];
    _dispo = getValue(_destinationElementList, "eDisposition.05");
    if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
    {
        if (_dispo.IsNull ==true) {
            if (isRequiredStateElement("eDisposition.05") == true) {
                _val.push("7701003")
                XML.writeStartElement('eDisposition.05');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
                ValueArray.push(v2NOT_RECORDED)
                v2Array.push({ section: "E20", element: "E20_05", val: ValueArray, Count: 1 });
            }
        }
        else {
            _val.push(_dispo.ValueArray[0].val);
            XML.writeElementString("eDisposition.05", _val[0]);
            ValueArray.push(_val)
            v2Array.push({ section: "E20", element: "E20_05", val: ValueArray, Count: 1 });
        }
    }
    else {
        if (_dispo.IsNull !=true) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.05", Description: "Transport State/Transport Type Conflict " })
            Call.HasErrors = true;
        }
        else {
            _val.push("7701001")
            XML.writeStartElement('eDisposition.05');
            XML.writeAttributeString('NV', "7701001");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();

            v2Array.push({ section: "E20", element: "E20_05", val: v2NOT_APPLICABLE, Count: 1 });
        }
    };
    eDisposition["eDisposition.05"] =_val[0];
    
    //eDisposition.06//////////////////////////////////////////////////////
     var _val = [];
     var _dispo = [];
     _dispo = getValue(_destinationElementList, "eDisposition.06");      
    ValueArray = [];
    if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
    {
        if (_dispo.IsNull ==true) {
            ValueArray.push(v2NOT_RECORDED)
            v2Array.push({ section: "E20", element: "E20_06", val: ValueArray, Count: 1 });
            _val.push("7701003")
            XML.writeStartElement('eDisposition.06');
            XML.writeAttributeString('NV', "7701003");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();

        }
        else {
            _val.push(_dispo.ValueArray[0].val);
            XML.writeElementString("eDisposition.06", _val[0]);
            ValueArray.push(_val)
            v2Array.push({ section: "E20", element: "E20_06", val: ValueArray });
        }
    }
    else {
        if (_dispo.IsNull !=true) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.06", Description: "Transport City/Transport Type Conflict " })
            eDisposition.HasErrors = true;
        }
        else {
            XML.writeStartElement('eDisposition.06');
            XML.writeAttributeString('NV', "7701001");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();

            _val.push("7701001")
            ValueArray.push(v2NOT_APPLICABLE)
            v2Array.push({ section: "E20", element: "E20_06", val: ValueArray, Count: 1 });
        }
    };

    eDisposition["eDisposition.06"]=_val[0];


    //eDisposition.07////////////////////////////////////////////////////
    var _val =[];
    var _dispo  = [];
    ValueArray = [];
    _dispo = getValue(_destinationElementList, "eDisposition.07");
    if (eDisposition.HasTransport == true) //if have a transport
    {
        if (_dispo.IsNull ==true) {
            if (isRequiredStateElement("eDisposition.07") == true)
            {
                ValueArray.push(v2NOT_RECORDED)
                _val.push("7701003")
                v2Array.push({ section: "E20", element: "E20_07", val: ValueArray, Count: 1 });
                XML.writeStartElement('eDisposition.07');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();

            }
        }
        else {
            _val.push(_dispo.ValueArray[0].val);
            XML.writeElementString("eDisposition.07", _val[0]);
            ValueArray.push(_val)
            v2Array.push({ section: "E20", element: "E20_07", val: ValueArray, Count: 1 });
        }
    }
    else {
        if (_dispo.IsNull !=true) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.07", Description: "Transport Zip/Transport Type Conflict " })
            eDisposition.HasErrors = true;
        }
        else {
            _val.push("7701001")
            ValueArray.push(v2NOT_APPLICABLE)
            v2Array.push({ section: "E20", element: "E20_07", val: ValueArray, Count: 1 });
            XML.writeStartElement('eDisposition.07');
            XML.writeAttributeString('NV', "7701001");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();

        }
    };
    eDisposition["eDisposition.07"]=_val[0];
    
    //eDisposition.08///////////////////////////////////////////////////
    var _val =[];
    var _dispo  = [];
    ValueArray = [];
    _dispo = getValue(_destinationElementList, "eDisposition.08");
    if (eDisposition.HasTransport == true) //if have a transport
    {
        if (_dispo.IsNull != true)
        {
            _val.push(_dispo.ValueArray[0].val);
            XML.writeElementString("eDisposition.08", _val[0]);
        }
    }
    else {
        if (_dispo.IsNull !=true) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.08", Description: "Transport County/Transport Type Conflict " });
            eDisposition.Errors = true;
        }
    };

    eDisposition["eDisposition.08"]=_val[0];

    //eDisposition.09/////////////////////////////////////////
    var _val =[];
    var _dispo  = [];
    ValueArray = [];
    _dispo = getValue(_destinationElementList, "eDisposition.09");
    if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
    {
        if (_dispo.IsNull != true) {
            _val.push(_dispo.ValueArray[0].val);
            XML.writeElementString("eDisposition.09", _val[0]);
            ValueArray.push(_val[0])
            v2Array.push({ section: "E20", element: "E20_08", val: ValueArray });
        }
    }
    else {
        if (_dispo.IsNull !=true) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.09", Description: "Transport GPS/Transport Type Conflict " })
            _eDisposition.HasErrors = true;
        }
    };

    eDisposition["eDisposition.09"]=_val[0];

    //eDisposition.10//////////////////////////////////////////
    var _val =[];
    var _dispo  = [];
    ValueArray = [];
    _dispo = getValue(_destinationElementList, "eDisposition.10");
    if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
    {
        if (_dispo.IsNull != true) {
            _val.push(_dispo.ValueArray[0].val);
            XML.writeElementString("eDisposition.10", _val[0]);
         //   console.log("Better be dFacility.14 - Country")
        }
    }
    else {
        if (_dispo.ValueArray.length == 0) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.10", Description: "Transport National Coords/Transport Type Conflict " })
            _eDisposition.HasErrors = true;
        }

    };

    eDisposition["eDisposition.10"]=_val[0];
    XML.writeEndElement();

    //eDisposition.11/////////////////////////////////////////////////
    var _val =[];
    var _dispo  = [];
    _dispo = getValue(_elementList, "eDisposition.11");
    ValueArray = [];
    if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
    {
        if (_dispo.IsNull ==true) {
            if (isRequiredStateElement("eDisposition.11") == true) {
                _val.push("7701003")
                XML.writeStartElement('eDisposition.11');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
            }
            else {
                _val.push("7701005")
                XML.writeStartElement('eDisposition.11');
                XML.writeAttributeString('NV', "7701005");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
            }
        }
        else {
            _val.push(_dispo.ValueArray[0].val);
            XML.writeElementString("eDisposition.11", _val[0]);            
        }
    }
    else {
        if (_dispo.IsNull !=true) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.11", Description: "Transport Number Patients/Transport Type Conflict  " });
            Call.HasErrors = true;
        }
        else {
            XML.writeStartElement('eDisposition.11');
            XML.writeAttributeString('NV', "7701001");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();
            _val.push("7701001")
        }
    };
    
    eDisposition["eDisposition.11"]=_val[0];

    
    //eDisposition.13/////////////////////////////////////////////////////
    var _val =[];
    var _dispo  = [];
    ValueArray = [];
    _dispo = getValue(_elementList, "eDisposition.13");
    if (eDisposition.HasTransport == true) {
        if (_dispo.IsNull !=true) {
            var arr2 = [];
            for (var i = 0; i <= _dispo.Count - 1; i++) {
                if ((_dispo.ValueArray[i].HasValue == true) && (_val.indexOf(_dispo.ValueArray[i].val) == -1)) {
                    _val.push(_dispo.ValueArray[i].val);
                    XML.writeElementString("eDisposition.13", _val[i]);
                    arr2.push(setV2("eDisposition.13", _val[i]));
                }
            }
            
                v2Array.push({ section: "E20", element: "E20_11", val: arr2.slice(0), Count: arr2.length });
        }
    }
    else {
        if (_dispo.IsNull !=true) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.12", Description: "How Patient Moved/Transport Type Conflict  " })
            _eDisposition.HasErrors = true;
        };
    };
    eDisposition["eDisposition.13"]=_val.slice();
    //eDisposition.14//////////////////////////////////
    var _val =[];
    var _dispo  = [];
    ValueArray = [];
    _dispo = getValue(_elementList, "eDisposition.14");
    if (eDisposition.HasTransport == true) {
        if (_dispo.IsNull !=true) {
            var arr2 = [];
            for (var i = 0; i < _dispo.ValueArray.length; i++) {
                if ((_dispo.ValueArray[i].HasValue == true) && (_val.indexOf(_dispo.ValueArray[i].val) == -1)) {
                    _val.push(_dispo.ValueArray[0].val);
                    XML.writeElementString("eDisposition.14", _val[i]);
                    arr2.push(setV2("eDisposition.14", _val[i]));
                }
            };
            v2Array.push({ section: "E20", element: "E20_12", val: arr2.slice(0), Count: arr2.length });
        }
    }
    else {
        if (_dispo.IsNull !=true) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.14", Description: "Patient Position/Transport Type Conflict  " })
            Call.HasErrors = true;
        };
    };

    eDisposition["eDisposition.14"]=_val.slice(0);

    //eDisposition.15////
    var _val =[];
    var _dispo  = [];
    _dispo = getValue(_elementList, "eDisposition.15");
    ValueArray = [];
    if (eDisposition.HasTransport == true) {
        if (_dispo.IsNull !=true) {
            _val.push(_dispo.ValueArray[0].val);
            XML.writeElementString("eDisposition.15", _val[0]);
            ValueArray.push(setV2("eDisposition.15", _val[0]));
            v2Array.push({ section: "E20", element: "E20_13", val: ValueArray, Count: 1 });
        }
    }
    else {
        if (_dispo.IsNull !=true) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.15", Description: "Patient Transport From Ambulance/Transport Type Conflict  " })
            Call.HasErrors = true;
        };

    };

    eDisposition["eDisposition.15"]=_val[0];


    //eDisposition.16////
    var _val =[];
    var _dispo  = [];
    _dispo = getValue(_elementList, "eDisposition.16");
    ValueArray = [];
    if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
    {
        if (_dispo.IsNull ==true) {
            if (isRequiredStateElement("eDisposition.16") == true) {
                _val.push("7701003")
                XML.writeStartElement('eDisposition.16');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();

            }
        }
        else {
            _val.push(_dispo.ValueArray[0].val);
            XML.writeElementString("eDisposition.16", _val[0]);
        }
    }
    else {
        if (_dispo.IsNull !=true) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.16", Description: "Patient Transport Method/Transport Type Conflict  " })
            Cakk.HasErrors = true;
        };

        _val.push("7701001")
        XML.writeStartElement('eDisposition.16');
        XML.writeAttributeString('NV', "7701001");
        XML.writeAttributeString('xsi:nil', 'true');
        XML.writeEndElement();

    };

    eDisposition["eDisposition.16"]=_val[0];


    //eDisposition.17////
    var _val =[];
    var _dispo  = [];
    _dispo = getValue(_elementList, "eDisposition.17");
    ValueArray = [];
    if (eDisposition.HasTransport == true) //if have a transport,
    {
        if (_dispo.IsNull ==true) {
            if (isRequiredStateElement("eDisposition.17") == true) {
                _val.push("7701003")
                ValueArray.push(v2NOT_RECORDED);
                XML.writeStartElement('eDisposition.17');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();

                v2Array.push({ section: "E20", element: "E20_14", val: ValueArray, Count: 1 });
            }
        }
        else {
            _val.push(_dispo.ValueArray[0].val);
            XML.writeElementString("eDisposition.17", _val[0]);
            v2Array.push({ section: "E20", element: "E20_14", val: ValueArray, Count: 1 });

        }
    }
    else {
        if (_dispo.IsNull !=true) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.17", Description: "Additional Transport Mode/Transport Type Conflict  " });
            _eDisposition.Errors = true;
        };
        XML.writeStartElement('eDisposition.17');
        XML.writeAttributeString('NV', "7701001");
        XML.writeAttributeString('xsi:nil', 'true');
        XML.writeEndElement();

        _val.push("7701001")
        ValueArray.push(v2NOT_APPLICABLE);
        v2Array.push({ section: "E20", element: "E20_14", val: ValueArray, Count: 1 });
    };

    eDisposition["eDisposition.17"]=_val[0];

    //eDisposition.18////
    var _val =[];
    var _dispo  = [];
    _dispo = getValue(_elementList, "eDisposition.18");
    ValueArray = [];
    if (eDisposition.HasTransport == true) //if have a transport, 
    {
        if (_dispo.IsNull ==true) {
            if (isRequiredStateElement("eDisposition.18") == true) {
                _val.push("7701003")
                XML.writeStartElement('eDisposition.18');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
            }
        }
        else {
            var arr2 = [];
            _val.push(_dispo.ValueArray[0].val);

            for (var i = 0; i < _dispo.ValueArray.length; i++) {
                if ((_dispo.ValueArray[i].HasValue == true) && (_val.indexOf(_dispo.ValueArray[i].val) == -1)) {
                    _val.push(_dispo.ValueArray[i].val[0])
                    XML.writeElementString("eDisposition.18", _val[0]);            
                }
            };
        }
    }
    else {
        if (_dispo.ValueArray.length == 0) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.18", Description: "Additional Transport Method/Transport Type Conflict  " });
            Call.Errors = true;

        };
        _val.push("7701001")
        XML.writeStartElement('eDisposition.18');
        XML.writeAttributeString('NV', "7701001");
        XML.writeAttributeString('xsi:nil', 'true');
        XML.writeEndElement();


    };

    eDisposition["eDisposition.18"]=_val[0];

    //eDisposition.19////
    var _val =[];
    var _dispo  = [];
    _dispo = getValue(_elementList, "eDisposition.19");
    ValueArray = [];
    if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
    {
        if (_dispo.IsNull ==true) {
            if (isRequiredStateElement("eDisposition.19") == true) {
                _val.push("7701003")
                v2Array.push({ section: "E20", element: "E20_15", val: ValueArray, Count: 1 });
                XML.writeStartElement('eDisposition.19');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();

            }
            else {
                ValueArray.push(v2NOT_KNOWN)
                v2Array.push({ section: "E20", element: "E20_15", val: ValueArray, Count: 1 });
            }
        }
        else {
            _val.push(_dispo.ValueArray[0].val);
            XML.writeElementString("eDisposition.19", _val[0]);
            v2Array.push({ section: "E20", element: "E20_15", val: setV2("eDisposition.19", _val), Count: 1 });
        }
    }
    else {
        if (_dispo.IsNull !=true) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.19", Description: "Condition of Patientat Destination/Transport Type Conflict  " });
            _eDisposition.Errors = true;

        };
        XML.writeStartElement('eDisposition.19');
        XML.writeAttributeString('NV', "7701001");
        XML.writeAttributeString('xsi:nil', 'true');
        XML.writeEndElement();

        ValueArray.push(v2NOT_APPLICABLE)
        _val.push("7701001")
        v2Array.push({ section: "E20", element: "E20_15", val: ValueArray, Count: 1 });
    };

    eDisposition["eDisposition.19"]=_val[0];

    //eDisposition.20////
    var _val =[];
    var _dispo  = [];
    ValueArray = [];
    _dispo = getValue(_elementList, "eDisposition.20");
    if (eDisposition.HasTransport == true) //if have a transport 
    {
        if (_dispo.IsNull ==true) {
            if (isRequiredStateElement("eDisposition.20") == true) {
                v2Array.push({ section: "E20", element: "E20_16", val: v2NOT_RECORDED });
                _val.push("7701003")
                XML.writeStartElement('eDisposition.20');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();

            }
        }
        else {
            var arr2 = [];
            for (var i = 0; i < _dispo.ValueArray.length; i++) {
                if ((_dispo.ValueArray[i].HasValue == true) && (_val.indexOf(_dispo.ValueArray[i].val) == -1)) {
                    _val.push(_dispo.ValueArray[i].val);
                    XML.writeElementString("eDisposition.20", _val[i]);
                    arr2.push(setV2("eDisposition.20", _val[i]));
                }
            };
            if (arr2.length > 0) {
                v2Array.push({ section: "E20", element: "E20_16", val: arr2.slice(0) });
            }
        }
    }
    else {
        if (_dispo.IsNull !=true) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.20", Description: "Reason for Choosing Destination/Transport Type Conflict  " })
            _eDisposition.HasErrors = true;
        };
        v2Array.push({ section: "E20", element: "E20_16", val: v2NOT_APPLICABLE });
        _val.push("7701001")
        XML.writeStartElement('eDisposition.20');
        XML.writeAttributeString('NV', "7701001");
        XML.writeAttributeString('xsi:nil', 'true');
        XML.writeEndElement();

    };

    eDisposition["eDisposition.20"]=_val.slice(0);

    //eDisposition.21////
    var _val =[];
    var _dispo  = [];
    _dispo = getValue(_elementList, "eDisposition.21");
    ValueArray = [];
    if (eDisposition.HasTransport == true) //if have a transport
    {
        if (_dispo.IsNull ==true) {
            if (isRequiredStateElement("eDisposition.21") == true) {
                _val.push("7701003")
                XML.writeStartElement('eDisposition.21');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();

                v2Array.push({ section: "E20", element: "E20_17", val: v2NOT_RECORDED, Count: 1 });
            }
        }
        else {
            _val.push(_dispo.ValueArray[0].val);
            XML.writeElementString("eDisposition.21", _val[0]);
            v2Array.push({ section: "E20", element: "E20_17", val: setV2("eDisposition.21", _val[0]), Count: 1 });
        }
    }
    else {
        if (_dispo.IsNull !=true) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.21", Description: "Type of Destination/Transport Type Conflict  " })
            _eDisposition.HasErrors = true;
        };
        XML.writeStartElement('eDisposition.21');
        XML.writeAttributeString('NV', "7701001");
        XML.writeAttributeString('xsi:nil', 'true');
        XML.writeEndElement();

        _val.push("7701001")
        v2Array.push({ section: "E20", element: "E20_17", val: v2NOT_APPLICABLE, Count: 1 });
    };

    eDisposition["eDisposition.21"]=_val[0];

    //eDisposition.22////
    var _val =[];
    var _dispo  = [];
    ValueArray = [];
    _dispo = getValue(_elementList, "eDisposition.22");
    if (eDisposition.HasTransport == true) //if have a transport
    {
        if (_dispo.IsNull ==true) {
            if (isRequiredStateElement("eDisposition.22") == true) {
                _val.push("7701003")
                XML.writeStartElement('eDisposition.22');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
            }
        }
        else {
            _val.push(_dispo.ValueArray[0].val);
            XML.writeElementString("eDisposition.22", _val[0]);
        }
    }
    else {
        if (_dispo.IsNull !=true) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.22", Description: "Hospital In Patient Destination/Transport Type Conflict  " })
            Call.HasErrors = true;
        };
        _val.push("7701001")
        XML.writeStartElement('eDisposition.23');
        XML.writeAttributeString('NV', "7701001");
        XML.writeAttributeString('xsi:nil', 'true');
        XML.writeEndElement();


    };
    eDisposition["eDisposition.22"]=_val[0];

    //eDisposition.23////
    var _val =[];
    var _dispo  = [];
    ValueArray = [];
    _dispo = getValue(_elementList, "eDisposition.23");

    if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
    {
        if (_dispo.IsNull ==true) {
            if (isRequiredStateElement("eDisposition.23") == true) {
                _val.push("7701003")
                XML.writeStartElement('eDisposition.23');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();

            }
        }
        else {
            _val.push(_dispo.ValueArray[0].val[0]);
            XML.writeElementString("eDisposition.23", _val[0]);
        }
    }
    else {
        if (_dispo.IsNull !=true) {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eDisposition.23", Description: "Hospital Designation/Transport Type Conflict  " })
            Call.HasErrors = true;
        };
        _val.push("7701001")
        XML.writeStartElement('eDisposition.23');
        XML.writeAttributeString('NV', "7701001");
        XML.writeAttributeString('xsi:nil', 'true');
        XML.writeEndElement();
    };
    eDisposition["eDisposition.23"]=_val[0];
    

    // If No Transport, not Hospital Pre Activation
    //eDisposition.24 Destination Team Pre-Arrival Alert or Activation and 
    //eDisposition.25 Date/Time of Destination Prearrival Alert or Activation are both recorded when either one is recorded.
    //and :eDisposition.24 != '4224001'

    _sectionIndex = getSectionIndex(pDisposition, "eDisposition.HospitalTeamActivationGroup");


    if ((eDisposition.HasTransport == false) || (_sectionIndex[0] == -1)) //if have a transport, forgot the data, 
    {
        XML.writeStartElement("eDisposition.HospitalTeamActivationGroup")
        _val.push("7701001")
        XML.writeStartElement('eDisposition.24');
        XML.writeAttributeString('NV', "7701001");
        XML.writeAttributeString('xsi:nil', 'true');
        XML.writeEndElement();

        _hospitalTeamActivationGroup["eDisposition.24"]=_val[0];


        _val.push("7701001")
        _eDisposition.Name = "eDisposition.25";
        XML.writeStartElement('eDisposition.25');
        XML.writeAttributeString('NV', "7701001");
        XML.writeAttributeString('xsi:nil', 'true');
        XML.writeEndElement();

        _hospitalTeamActivationGroup["eDisposition.25"]=_val[0];
        XML.writeEndElement();
    }
    else {
        var bActivation = false;
        for (var x = 0; x < _sectionIndex.length; x++)
        {
            
            var _hospitalTeamActivationGroup = new Object();
            var _dataList = pDisposition.attributes.sections[_sectionIndex[x]].attributes.elements;

            XML.writeStartElement("eDisposition.HospitalTeamActivationGroup")
            //eDisposition.24////
            var _val =[];
            var _dispo  = [];

            _dispo = getValue(_dataList, "eDisposition.24");
            if (_dispo.IsNull ==true) {
                _val.push("7701003")
                XML.writeStartElement('eDisposition.24');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();

            }
            else {
                _val.push(_dispo.ValueArray[0].val);
                XML.writeElementString("eDisposition.24", _val[0]);

                if (_val == "4224001") {
                    bActivation = false;
                }
                else {
                    bActivation = true;
                };

            };
            _hospitalTeamActivationGroup["eDisposition.24"]=_val[0];

            //eDisposition.25////
            var _dispo=[];
            var _val=[];
            _dispo = getValue(_dataList, "eDisposition.25");
            if (_dispo.IsNull ==true) {
                if (bActivation = true)
                {
                    _val.push("7701003")
                    XML.writeStartElement('eDisposition.24');
                    XML.writeAttributeString('NV', "7701001");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                }
                else {
                    _val.push("7701001")
                    XML.writeStartElement('eDisposition.24');
                    XML.writeAttributeString('NV', "7701001");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();
                }
            }
            else {
                _val.push(_dispo.ValueArray[0].val);
                XML.writeElementString("eDisposition.25", _val[0]);
            };
            
            XML.writeEndElement()
            _hospitalTeamActivationGroup["eDisposition.25"]=_val[0];
            HospitalTeamActivationGroupArray.push(_hospitalTeamActivationGroup);
        };
    };

    //eDisposition.26////
    var _dispo=[];
    var _val=[];
    _dispo = getValue(_elementList, "eDisposition.26");
    if (eDisposition.HasTransport == true) //if have a transport, forgot the data, 
    {
        if (_dispo.IsNull !=true) {            
            var arr2 = [];
            for (var i = 0; i < _dispo.ValueArray.length; i++) {
                if ((_dispo.ValueArray[i].HasValue == true) && (_val.indexOf(_dispo.ValueArray[i].val) == -1)) {
                    _val.push(_dispo.ValueArray[i].val);
                    XML.writeElementString("eDisposition.14", _val[i]);                    
                }
            };
        }
    };
    eDisposition["eDisposition.22"]=_val.slice(0);
    XML.writeEndElement("eDisposition");

   
    XML.writeEndElement();
    var XMLDoc = XML.flush()
    console.log(XMLDoc)
    console.log(eDisposition)
    return eDisposition;
};
var seteDispatch = function (pdispatch, Call) {

    var v2Disp = [];
    var eDispatch = new Object();
    var _elementList = [];
    
    
    if (typeof pdispatch != "undefined") {
        if (typeof pdispatch.attributes != "undefined") {
            _elementList = pdispatch.attributes.elements;
        };
        var XML = new XMLWriter('UTF-8', '1.0');
        XML.writeStartDocument();

        XML.writeStartElement("eDispatch");

        /////eDispatch.01////////////////////
        var _val = [];
        var _dispatch = [];
        _dispatch = getValue(_elementList, "eDispatch.01");
        if (_dispatch.IsNull== true) 
        {
            eDispatch.HasErrors = true;
            ErrorList.push("eDispatch.01 MANDATORY Element");
        }
        else {
            _val.push(_dispatch.ValueArray[0].val);
            {
                XML.writeElementString("eDispatch.01", _val[0]);
                v2Disp.push({ section: "E03", element: "E03_01", val: setV2("eDispatch.01", _val[0]) });
            }
        };

        eDispatch["eDispatch.01"]=_val[0];

        /////eDispatch.02////////////////////
        var _val = [];
        var _dispatch = [];
        _dispatch = getValue(_elementList, "eDispatch.02");
        if (Call.isCancelled == false) 
        {
            if (_dispatch.IsNull== true) 
            {
                v2Disp.push({ section: "E03", element: "E03_02", val: v2NOT_RECORDED });
                _val.push("7701003");
                XML.writeStartElement('eDispatch.02');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();

            }
            else {
                _val.push(_dispatch.ValueArray[0].val);
                XML.writeElementString("eDispatch.02", _val[0]);                    
                v2Disp.push({ section: "E03", element: "E03_02", val: setV2("eDispatch.02", _val) });
                if (_val != "2302001") 
                {
                    Dispatch["HasEMD"] = true;
                }                
            }
        }
        else {
            _
            v2Disp.push({ section: "E03", element: "E03_02", val: v2NOT_APPLICABLE });
            _val.push("7701001");
            XML.writeStartElement('eDispatch.02');
            XML.writeAttributeString('NV', "7701001");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();
        };
        eDispatch["eDispatch.02"]=_val[0];

        /////eDispatch.03////////////////////
        var _val = [];
        var _dispatch =[];
        _dispatch = getValue(_elementList, "eDispatch.03");

        if (_dispatch.IsNull!= true)  
        {
            _val.push(_dispatch.ValueArray[0].val);            
            XML.writeElementString("eDispatch.03", _val[0]);
            
        };

        eDispatch["eDispatch.03"]=_val[0]

        /////eDispatch.04////////////////////
        var _val = [];
        var _dispatch =[];
        _dispatch = getValue(_elementList, "eDispatch.04");

        if (_dispatch.IsNull!= true) 
        {
            _val.push(_dispatch.ValueArray[0].val);
            XML.writeElementString("eDispatch.04", _val[0]);
        };

        eDispatch["eDispatch.04"]=_val[0]

        /////eDispatch.05////////////////////
        var _val = [];
        var _dispatch =[];
        _dispatch = getValue(_elementList, "eDispatch.05");
        eDispatch["isEmergent"] = false;
        if (_dispatch.IsNull!= true) 
        {
            _val.push(_dispatch.ValueArray[0].val);            
            XML.writeElementString("eDispatch.05", _val[0]);
                
            if (_val <= "2305003") {
                Call["IsEmergent"] = true;
            };
            if (_val > "2305003") {
                Call["IsEmergent"] = false;
            };                
        };

        eDispatch["eDispatch.05"]=_val[0]        
        //Dispatch.Version3 = doArray.slice(0);
        //Dispatch.Version2 = v2Disp.slice(0);
    };

   
    XML.writeEndElement();
    var XMLDoc = XML.flush()
    console.log(XMLDoc)
    console.log(eDispatch)
    return eDispatch;
};
var seteTimes = function (pTimes, Call)
{
    
    var _el = pTimes.attributes.elements;
    var eTimes = new Object();
    var _times = new Object();
    var pArr = [];
    var pArr2 = [];
    console.log(_el)
    var XML = new XMLWriter('UTF-8', '1.0');
    XML.writeStartDocument();

    XML.writeStartElement("eTimes");
    
    //eTimes.01//////////////////      
    var _val = [];
    var _times =[];
    
    
    _times = getValue(_el, "eTimes.01");    
    //    Call["is911Call"] = false;  //determines if call is 911 or otherwise (external call)
    //Call.isEmergant = true
    if (Call.isEmergant == true)
    {
        if (_times.IsNull == true)
        {
            if (isRequiredStateElement("eTimes.01")) {
                pArr2.push({ section: "E05", element: "E05_02", val: null });
                _val.push("7701001");
                XML.writeStartElement('eTimes.01');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
            }
        }
        else {
            _val.push(_times.ValueArray[0].val);
            XML.writeElementString("eTimes.01", _val[0]);
            pArr2.push({ section: "E05", element: "E05_02", val: _val[0] });
        }
    }
    else {
        pArr2.push({ section: "E05", element: "E05_02", val: null });
        _val.push("7701001");
        XML.writeStartElement('eTimes.01');
        XML.writeAttributeString('NV', "7701001");
        XML.writeAttributeString('xsi:nil', 'true');
        XML.writeEndElement();

    };
    
    eTimes["eTimes.01"]=_val[0];

    //eTimes.02/////////////////////////////////////////////////////////
    var _val = [];
    var _times =[];
    _times = getValue(_el, "eTimes.02");
    if (_times.IsNull != true)
    {
        _val.push(_times.ValueArray[0].val);        
        if (Call.isEmergant == true)
        {            
            Times.HasErrors = true;
            Times.Error = "911 Call Date entered for non-emergent call ";
        }
        else {
            XML.writeElementString("eTimes.02", _val[0]);
            pArr2.push({ section: "E05", element: "E05_03", val: _val[0] });
        };
    };

    eTimes["eTimes.02"]=_val[0];

    //eTimes.03//////////////////////////////////////////////////////
    var _val = [];
    var _times =[];
    _times = getValue(_el, "eTimes.03");
    if (_times.IsNull == true) 
    {
        Times.HasErrors = true;
        Times.Error = "Unit Notified by Dispatch Date/Time Mandatory value. ";
    }
    else {
        // Time Rules:
        //eAirway.10: Date/Time Decision to Manage the Patient with an Invasive Airway should not occur prior 
        //to: Unit Notified by Dispatch Date/Time


        /////////////////////////////////////////////
        if (typeof Call.StartAirwayTime != undefined) {
            if (Call.StartAirwayTime >= _val) {
                eTimes.HasErrors = true;
                eTimes.Error = "Validation Error: eAirway.10 Date/Time Decision to Manage the Patient with an Invasive Airway should not occur prior to: Unit Notified by Dispatch Date/Time"
            }
        };

        if (typeof Call.EndAirwayTime != undefined) 
        {
            if (Call.EndAirwayTime >= _val[0])
            {
                eTimes.HasErrors = true;
                eTimes.Error = "Validation Error: eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Date/Time Decision to Manage the Patient with an Invasive Airway, Unit Notified by Dispatch Date/Time"
            }
        };

        _val.push(_times.ValueArray[0].val);
        XML.writeElementString("eTimes.03", _val[0]);
        pArr2.push({ section: "E05", element: "E05_04", val: _val[0] });
    };

    eTimes["eTimes.03"]=_val[0];

    //eTimes.04//////////////////////////////////////////////////
    var _val = [];
    var _times =[];
    _times = getValue(_el, "eTimes.04");
    if (_times.IsNull != true) 
    {
        _val.push(_times.ValueArray[0].val[0]);
        if (_val > eTimes["eTimes.03"]) 
        {
            eTimes.HasErrors = true;
            eTimes.Error = "Validation Error: eAirway.11: eTimes.03:  Dispatch Acknowledged prior to notification."
        };

        if (Call.EndAirwayTime >= _val[0]) {
            eTimes.HasErrors = true;
            eTimes.Error = "Validation Error: eAirway.11: eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Dispatch Acknowledged Date/Time"
        }        
        XML.writeElementString("eTimes.04", _val[0]);
    };

    eTimes["eTimes.04"]=_val[0];

    //eTimes.05//////////////////////////////////////////////////
    var _val = [];
    var _times =[];
    _times = getValue(_el, "eTimes.05");
    if (Call["isCancelled"] == false) {
        if (_times.IsNull == true) {
            if (isRequiredStateElement("eTimes.05")) 
            {
                v2Array.push({ section: "E05", element: "E05_05", val: null });
                _val.push("7701003");
                XML.writeStartElement('eTimes.05');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
            }
        }
        else {
            _val.push(_times.ValueArray[0].val);
            XML.writeElementString("eTimes.05", _val[0]);
            pArr2.push({ section: "E05", element: "E05_05", val: _val[0] });
        }
    }
    else {
        pArr2.push({ section: "E05", element: "E05_05", val: null });
        _val.push("7701001");
        XML.writeStartElement('eTimes.05');
        XML.writeAttributeString('NV', "7701001");
        XML.writeAttributeString('xsi:nil', 'true');
        XML.writeEndElement();

    };

    eTimes["eTimes.05"]=_val[0];


    //eTimes.06/////////////////////////////////////////////////        
    var _val = [];
    var _times =[];
    _times = getValue(_el, "eTimes.06");
    if (Call["isCancelled"] == false) {
        if (_times.IsNull == true) {
            if (isRequiredStateElement("eTimes.06")) 
            {
                pArr2.push({ section: "E05", element: "E05_06", val: null });
                _val.push("7701003");
                XML.writeStartElement('eTimes.06');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();

            }
        }
        else {
            _val.push(_times.ValueArray[0].val);
            XML.writeElementString("eTimes.06", _val[0]);
            pArr2.push({ section: "E05", element: "E05_06", val: _val[0] });
        }
    }
    else {
        _val.push("7701001");
        XML.writeStartElement('eTimes.06');
        XML.writeAttributeString('NV', "7701003");
        XML.writeAttributeString('xsi:nil', 'true');
        XML.writeEndElement();

    };

    eTimes["eTimes.06"]=_val[0];
    
    //eTimes.07//////////////////
    //eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Date/Time 
    //Arrived at Patient Date/Time.         
    var _val = [];
    var _times =[];
    _times = getValue(_el, "eTimes.07");
    if (Call["isCancelled"] == false) {
        if (_times.IsNull == true) {
            if (isRequiredStateElement("eTimes.07")) {
                v2Array.push({ section: "E05", element: "E05_07", val: null });
                _val.push("7701003");
                XML.writeStartElement('eTimes.07');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
            }
        }
        else {
            _val.push(_times.ValueArray[0].val);
            pArr2.push({ section: "E05", element: "E05_07", val: _val[0] });
            
            XML.writeElementString("eTimes.07", _val[0]);

            if (Call.EndAirwayTime != null) {
                if (Call.EndAirwayTime >= _val[0]) {
                    eTimes.HasErrors = true;
                    eTimes.Error = "Validation Error: eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Date/Time Arrived at Patient Date/Time."
                }
            }
        }
    }
    else {
        _val.push("7701001");
        XML.writeStartElement('eTimes.07');
        XML.writeAttributeString('NV', "7701003");
        XML.writeAttributeString('xsi:nil', 'true');
        XML.writeEndElement();

    };

    eTimes["eTimes.07"]=_val[0];

    //eTimes.08//////////////////
    var _val = [];
    var _times =[];
    _times = getValue(_el, "eTimes.08");

    if ((Call["isCancelled"] == false) && (Call.PatientTransfer = true)) {
        if (_times.IsNull == true) {
            if (isRequiredStateElement("eTimes.08")) {
                pArr2.push({ section: "E05", element: "E05_08", val: v2NOT_RECORDED });
                _val.push("7701003");
                XML.writeStartElement('eTimes.08');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
            }
            else {
                pArr2.push({ section: "E05", element: "E05_08", val: v2NOT_REPORTING });
                _val.push("7701005");
                XML.writeStartElement('eTimes.08');
                XML.writeAttributeString('NV', "7701005");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
            }
        }
        else 
        {
            _val.push(_times.ValueArray[0].val);
            XML.writeElementString("eTimes.08", _val[0]);
            pArr2.push({ section: "E05", element: "E05_08", val: _val[0] });
        }
    }
    else {
        _val.push("7701001");
        XML.writeStartElement('eTimes.08');
        XML.writeAttributeString('NV', "7701001");
        XML.writeAttributeString('xsi:nil', 'true');
        XML.writeEndElement();
    };

    eTimes["eTimes.08"]=_val[0];

    //eTimes.09//////////////////
    var _val = [];
    var _times =[];
    _times = getValue(_el, "eTimes.09");
    if ((Call["isCancelled"] == false) && (Call.HasPatient == true)) {
        if (_times.IsNull == true) {
            if (isRequiredStateElement("eTimes.09")) {
                _val.push("7701003");
                XML.writeStartElement('eTimes.09');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();

            }
        }
        else {
            _val.push(_times.ValueArray[0].val);
            XML.writeElementString("eTimes.09", _val[0]);                        
            pArr2.push({ section: "E05", element: "E05_09", val: _val[0] });
        }
    }
    else {
        _val.push("7701001");
        XML.writeStartElement('eTimes.09');
        XML.writeAttributeString('NV', "7701001");
        XML.writeAttributeString('xsi:nil', 'true');
        XML.writeEndElement();

    };

    eTimes["eTimes.09"]=_val[0];
    //eTimes.10//////////////////////////////////////////////////////////////////////
    var _val = [];
    var _times =[];
    _times = getValue(_el, "eTimes.10");
    if ((Call.isCancelled == false) && (Call.AirTransport == true))
    {
        if (_times.IsNull != true)
        {
            _val.push(_times.ValueArray[0].val);
            XML.writeElementString("eTimes.10", _val[0]);
        }
    }
    else {
        eTimes.HasErrors = true;
        eTimes.Error = "Validation Error: eTimes.10/eDisposition.16.";
    };

    eTimes["eTimes.10"]=_val[0];

    //eTimes.11////////////////////////////////////////////////////////////////
    var _val = [];
    var _times =[];
    _times = getValue(_el, "eTimes.11");
    if (Call.HasPatient == true) {
        if (_times.IsNull == true) {
            if (isRequiredStateElement("eTimes.11")) {
                _val.push("7701003");
                XML.writeStartElement('eTimes.11');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
            }
        }
        else 
        {
            _val.push(_times.ValueArray[0].val);
            XML.writeElementString("eTimes.11", _val[0]);
            pArr2.push({ section: "E05", element: "E05_10", val: _val[0] });
        }
    }
    else 
    {
        _val.push("7701001");
        XML.writeStartElement('eTimes.11');
        XML.writeAttributeString('NV', "7701001");
        XML.writeAttributeString('xsi:nil', 'true');
        XML.writeEndElement();
    };

    eTimes["eTimes.12"]=_val[0];

    //eTimes.12///////////////////////////////////////////////////////////////////////        
    var _val = [];
    var _times =[];
    _times = getValue(_el, "eTimes.12");   
    if (Call.HasPatient == true) {
        if (_times.IsNull == true) {
            if (isRequiredStateElement("eTimes.12")) {
                _val.push("7701003");
                XML.writeStartElement('eTimes.12');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();

            }
        }
        else {
            _val.push(_times.ValueArray[0].val);
            XML.writeElementString("eTimes.12", _val[0]);
        }
    }
    else {
        _val.push("7701001");
        XML.writeStartElement('eTimes.12');
        XML.writeAttributeString('NV', "7701001");
        XML.writeAttributeString('xsi:nil', 'true');
        XML.writeEndElement();

    };

    eTimes["eTimes.12"]=_val[0];

    //eTimes.13//////////////////////////////////////////////////////////////////////
    var _val = [];
    var _times =[];
    _times = getValue(_el, "eTimes.13");

    if (_times.IsNull == true) {
        eTimes.HasErrors = true;
        eTimes.Error = "Unit Back in Service Date/Time Mandatory Value ";

    }
    else {
        _val.push(_times.ValueArray[0].val);
        XML.writeElementString("eTimes.13", _val[0]);
        pArr2.push({ section: "E05", element: "E05_11", val: _val[0] });

    };

    eTimes["eTimes.13"]=_val[0];

    //eTimes.14//////////////////
    var _val = [];
    var _times =[];
    _times = getValue(_el, "eTimes.14");
    if (Call["isCancelled"] != true) {
        if (_times.IsNull == true) {
            if (isRequiredStateElement("eTimes.14")) {
                eTimes.Error = "Unit Canceled Date/Time:  eTimes 14 Mandatory "
                eTimes.HasErrors = true;
            }
        }
        else {
            _val.push(_times.ValueArray[0].val);
            XML.writeElementString("eTimes.14", _val[0]);
            pArr2.push({ section: "E05", element: "E05_12", val: _val[0] });      
        }
    }
    else {

        Times.Error = "Unit Canceled Date/Time:  Call Not Cancelled ";
        
    };

    eTimes["eTimes.14"]=_val[0];

    //eTimes.15//////////////////
    var _val = [];
    var _times =[];
    _times = getValue(_el, "eTimes.15");

    if (_times.IsNull != true) {
        _val.push(_times.ValueArray[0].val);
        XML.writeElementString("eTimes.15", _val[0]);
        pArr2.push({ section: "E05", element: "E05_13", val: _val[0] });
        
    };
    eTimes["eTimes.15"]=_val[0];

    //eTimes.16/////////////////
    var _val = [];
    var _times =[];
    _times = getValue(_el, "eTimes.16");
    if (_times.IsNull != true) 
    {
        _val.push(_times.ValueArray[0].val);
        XML.writeElementString("eTimes.16", _val[0]);

    };

    eTimes["eTimes.16"]=_val[0];
    XML.writeEndElement("eTimes");                
    XML.writeEndElement();
    var XMLDoc = XML.flush()
    console.log(XMLDoc)
    console.log(eTimes)
    return eTimes;

};    //end of function   
var seteResponse = function (pResponse, Call)
{
    console.log(pResponse)
    var eResponse = new Object()
    if (pResponse.HasDataSet == false) 
    {
        //SetMA
    };
    _eL = pResponse.attributes.elements;
    _sectionAG = getSectionIndex(pResponse, "eResponse.AgencyGroup");

    if (_sectionAG != -1) 
    {
        var _AG = [];
        var _AG = pResponse.attributes.sections[_sectionAG].attributes.elements;
    }
    
    _sectionSG = getSectionIndex(pResponse, "eResponse.ServiceGroup");
    if (_sectionSG != -1) 
    {
        var _SG = [];
        var _SG = pResponse.attributes.sections[_sectionSG].attributes.elements;
    }    
        
    var XML = new XMLWriter('UTF-8', '1.0');
    XML.writeStartDocument();
    XML.writeStartElement("eResponse")
    XML.writeStartElement("eResponse.ServiceGroup")
    console.log(_sectionSG)
    if (_sectionSG != -1) 
    {
        //////////////////////eResponse.05    
        var _response = [];
        var _val = [];
        _response = getValue(_SG, "eResponse.05");
        if (_response.IsNull == true) 
        {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.05", Description: "Type of Service Request  MANDATORY" })           
        }
        else 
        {
            _val.push(_response.ValueArray[0].val);
            v2Array.push({ section: "E02", element: "E02_04", val: setV2("eResponse.05", _val[0]) });
            XML.writeElementString("eResponse.05", _val[0]);
            if (_val[0] in ["2205011", "2205013"]) 
            {
                Call.IsStandBy = true;
            };
        };
        eResponse["eResponse.05"] = _val[0];

        //////////////////////eResponse.06
        var _response = [];
        var _val = [];
        _response = getValue(_SG, "eResponse.06");
        if (_response.IsNull != true) 
        {
            if (Call.StandBy == false) 
            {
                _val.push(_response.ValueArray[0].val);
                XML.writeElementString("eResponse.06", _val[0]);

            }
            else 
            {
                ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.06", Description: "Stand By Purpose/Type of Service Conflict " })
                Response.HasErrors = true;
            }
        };
        eResponse["eResponse.06"] = _val[0];
        XML.writeStartElement("eResponse.AgencyGroup");
    };

    if (_sectionAG != -1)
    {
        //////////////////////eResponse.01
        var _response =[];
        var _val =[];

        //This pattern verifies that the EMS Agency Number in eResponse.01 matches the EMS Agency Number in dAgency.02.
        _response = getValue(_AG, "eResponse.01");
        console.log(_response)
        if (_response.IsNull == true) 
        {
            /* if(dAgency["dAgency.02"] !=  eResponse["eResponse.01"])
             {
                 ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.01", Description: "EMS Agency Number  dAgency.02 Must equal eResponse.01" })
                 Response.HasErrors = true;
             }
             else
             {                   
                 ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.01", Description: "EMS Agency Number  MANDATORY" })
                 Response.HasErrors = false;        
             }
             */
        }
        else
        {
            _val = _response.ValueArray[0].val;
            XML.writeElementString("eResponse.01", _val[0]);
            v2Array.push({ section: "E02", element: "E02_01", val: _val[0] });
        };
        eResponse["eResponse.01"]=_val[0];        

        //////////////////////eResponse.02
        var _response =[];
        var _val =[];
        _response = getValue(_AG, "eResponse.02");
        if (Call.StandBy == false) {
            if (_response.IsNull == true) 
            {
                if (isRequiredStateElement("eResponse.02")) 
                {
                    _val.push("7701003")
                    XML.writeStartElement('eResponse.02');
                    XML.writeAttributeString('NV', "7701003");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();
                }
                else 
                {
                    _val.push("7701005")
                    XML.writeStartElement('eResponse.02');
                    XML.writeAttributeString('NV', "7701005");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();
                }
            }
            else 
            {
                _val.push(_response.ValueArray[0].val);
                XML.writeElementString("eResponse.02", _val[0]);
            }
        }
        else 
        {
            _val.push("7701001")
            XML.writeStartElement('eResponse.02');
            XML.writeAttributeString('NV', "7701001");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();
        };
        eResponse["eResponse.02"] = _val[0];

        XML.writeEndElement();
    };
    //////////////////////eResponse.03
    var _response = [];
    var _val = [];
    _response = getValue(_eL, "eResponse.03");   
    if (Call.isEmergent == true)
    {
        if (_response.IsNull == true)
        {
            if (isRequiredStateElement("eResponse.02") == true)
            {
                v2Array.push({ section: "E02", element: "E02_02", val: v2NOT_RECORDED });
                _val.push("7701003")
                XML.writeStartElement('eResponse.03');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
            }
        }
        else 
        {
            _val.push(_response.ValueArray[0].val);
            XML.writeElementString("eResponse.03", _val[0]);
            v2Array.push({ section: "E02", element: "E02_02", val: _val[0] });
        }        
    }
    else
    {
        ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.03", Description: "Stand By IncidentNumber/Type of Service Conflict " })
        v2Array.push({ section: "E02", element: "E02_02", val: v2NOT_APPLICABLE });

        _val.push("7701001")
        XML.writeStartElement('eResponse.03');
        XML.writeAttributeString('NV', "7701001");
        XML.writeAttributeString('xsi:nil', 'true');
        XML.writeEndElement();
    }
        eResponse["eResponse.03"] = _val[0];
        
    
        //////////////////////eResponse.04
        var _response =[];
        var _val = [];

        _response = getValue(_eL, "eResponse.04");
        if (Call.StandBy == false)
        {
            if (_response.IsNull == true)
            {
                if (isRequiredStateElement("eResponse.04") == true)
                {
                    v2Array.push({ section: "E02", element: "E02_03", val: v2NOT_RECORDED });
                    _val.push("7701003")
                    XML.writeStartElement('eResponse.04');
                    XML.writeAttributeString('NV', "7701003");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();
                }
            }
            else
            {
                _val.push( _response.ValueArray[0].val);
                XML.writeElementString("eResponse.04", _val[0]);
                v2Array.push({ section: "E02", element: "E02_03", val: _val[0] });
            }
        }
        else {
            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.04", Description: "Stand By Response Number/Type of Service Conflict " });
            Response.HasErrors = true;
        };

        eResponse["eResponse.04"] = _val[0];

        //////////////////////eResponse.07
        var _response = [];
        var _val = [];

        _response = getValue(_eL, "eResponse.07");
        if (_response.IsNull == true) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.07", Description: "Primary Role of the Unit MANDATORY" });
            eResponse.HasErrors = true;
        }
        else {
            _val.push( _response.ValueArray[0].val);
            v2Array.push({ section: "E02", element: "E02_05", val: setV2("eResponse.07", _val) });            
        };
        eResponse["eResponse.07"] = _val[0];

        //alert("A dispatch delay is any time delay that occurs from the time of PSAP call (eTimes.01) to the time the unit is notified by dispatch (eTimes.03).")
        //////////////////////eResponse.08
        //When a delay for a particular phase of a response is "None/No Delay", no other 
        //delays should be recorded for that phase.
        //eResponse.08[. = '2208013'

        _response = getValue(_eL, "eResponse.08");
        if (Call.StandBy == false)
        {
            if (_response.IsNull == true)
            {
                if (isRequiredStateElement("eResponse.08") == true)
                {
                    v2Array.push({ section: "E02", element: "E02_06", val: v2NOT_RECORDED });
                    _val.push("7701003")
                    XML.writeStartElement('eResponse.08');
                    XML.writeAttributeString('NV', "7701003");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();
                }
            }
            else {
                var arr2 = [];
                for (var i = 0; i < _response.ValueArray.length; i++) {
                    if ((_response.ValueArray[i].HasValue == true) && (_val.indexOf(_response.ValueArray[i].val) == -1))
                    {
                        _val.push(_response.ValueArray[i].val)
                        XML.writeElementString("eResponse.08", _val[i]);
                        if (_val == '2208013') {
                            Call.HasDelay == false;
                        }
                        arr2.push(setV2("eResponse.08", _val[0]));
                    }
                };

                if( _val.indexOf('2208013') == -1)
                {
                    ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.08", Description: "Dispatch Delay Type Conflict" })
                    eResponse.HasErrors = true;
                };            
                v2Array.push({ section: "E02", element: "E02_06", val: arr2.slice(0) });
            }
        }
        else {
            v2Array.push({ section: "E02", element: "E02_06", val: v2NOT_APPLICABLE });
            _val.push("7701001")
            XML.writeStartElement('eResponse.08');
            XML.writeAttributeString('NV', "7701001");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();
        };
        eResponse["eResponse.08"] = _val[0];
    /*
        //////////////////////eResponse.09
        var _response = [];
        var _val = [];
        //context="nem:eResponse.09[. = '2209011']">
        //This rule fires when there is an instance of eResponse.09 Type of Response Delay 
        //set to "None/No Delay".

        alert("A response delay is any time delay that occurs from the time the unit is notified by dispatch (eTimes.03) to the time the unit arrived on scene (eTimes.06).")
        _response = getValue(_eL, "eResponse.09");
        if (Call.HasDelay == false)
        {
            if (_response.IsNull == true)
            {
                if (isRequiredStateElement("eResponse.09") == true)
                {
                    v2Array.push({ section: "E02", element: "E02_07", val: v2NOT_RECORDED });
                    _val.push("7701003");
                    XML.writeStartElement('eResponse.09');
                    XML.writeAttributeString('NV', "7701003");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();
                }
            }
            else {
                var arr2 = [];
                for (var i = 0; i < _response.ValueArray.length; i++) {
                    if ((_response.ValueArray[i].HasValue == true) && (_val.indexOf(_response.ValueArray[i].val) > -1)) {
                        _val = _response.ValueArray[i].val
                        XML.writeElementString("eResponse.09", _val[0]);
                        if (_val == '2209011') {
                            Call.HasDelay == false;
                        }                       
                        arr2.push(setD2("eResponse.09", _val[0]));
                    }
                };
                if ('2209011' in arr1) //if None, than None only
                {
                    if (arr1.length > 1) {
                        ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.09", Description: "Response Delay Type Conflict" })
                    }
                };
                v2Array.push({ section: "E02", element: "E02_07", val: arr2.slice(0) });
            }
        }
        else {
            v2Array.push({ section: "E02", element: "E02_07", val: v2NOT_APPLICABLE });
            _val.push("7701001");
            XML.writeStartElement('eResponse.09');
            XML.writeAttributeString('NV', "7701001");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();
        };
        eResponse["eResponse.09"] = _val;
        alert("A scene delay is any time delay that occurs from the time the unit arrived on scene (eTimes.06) to the time the unit left the scene (eTimes.09).")
        //////////////////////eResponse.10
        //eResponse.10" context="nem:eResponse.10[. = '2210017']">
        //This rule fires when there is an instance of eResponse.10 Type of Scene Delay set to 
        //"None/No Delay". -->

        var _response = [];
        var _val = [];
        _response = getValue(_eL, "eResponse.10");
        if (Call.StandBy == false) {
            if (_response.IsNull == true) {
                if (isRequiredStateElement("eResponse.10") == true) {
                    v2Array.push({ section: "E02", element: "E02_08", val: v2NOT_RECORDED });
                    _val.push("7701003");
                    XML.writeStartElement('eResponse.10');
                    XML.writeAttributeString('NV', "7701003");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();
                }
            }
            else {
                var arr2 = [];
                for (var i = 0; i < _response.ValueArray.length; i++) {
                    if ((_response.ValueArray[i].HasValue == true) && (_val.indexOf(_response.ValueArray[i].val) > -1)) {
                        _val.push(_response.ValueArray[i].val);
                        XML.writeElementString("eResponse.10", _val[0]);
                        if (_val == '2210017') {
                            Call.HasDelay == false;
                        }                        
                        arr2.push(setD2("eResponse.10", _val[0]));
                    }
                };

                    if ('2210017' in arr1) //if None, than None only
                    {
                        if (arr1.length > 1) {
                            ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.18", Description: "Scene Delay Type Conflict" })
                        }

                    v2Array.push({ section: "E02", element: "E02_08", val: arr2.slice(0) });
                }
            }
        }
        else {
            v2Array.push({ section: "E02", element: "E02_08", val: v2NOT_APPLICABLE });
            _val.push("7701001");
            XML.writeStartElement('eResponse.10');
            XML.writeAttributeString('NV', "7701001");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();
        };
        eResponse["eResponse.10"] = _val[0];

        //////////////////////eResponse.11
        var _response = [];
        var _val = [];
        //nem:eResponse.11[. = '2211011']">
        //This rule fires when there is an instance of eResponse.11 Type of Transport Delay set to 
        //"None/No Delay".

        alert("A transport delay is any time delay that occurs from the time the unit left the scene (eTimes.09) to the time the patient arrived at the destination (eTimes.10).")
        _response = getValue(_eL, "eResponse.11");
        if (Call.IsStandBy != true)  //we have no delay
        {
            if (_response.IsNull == true) {
                if (isRequiredStateElement("eResponse.11") == true) {
                    v2Array.push({ section: "E02", element: "E02_09", val: v2NOT_RECORDED });
                    _val.push("7701003");
                    XML.writeStartElement('eResponse.11');
                    XML.writeAttributeString('NV', "7701003");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();
                }
            }
            else {
                var arr2 = [];
                for (var i = 0; i < _response.ValueArray.length; i++) {
                    if ((_response.ValueArray[i].HasValue == true) && (_val.indexOf(_response.ValueArray[i].val) > -1)) {
                        _val.push(_response.ValueArray[i].val);
                        XML.writeElementString("eResponse.11", _val[0]);
                        if (_val == '2211011') {
                            Call.HasDelay == true
                        };
                        arr2.push(setD2("eResponse.11", _val[0]));
                    }
                };
                    if ('2211011' in arr1) //if None, than None only
                    {
                        ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.11", Description: "Transport Delay Type Conflict" });
                    };
                    v2Array.push({ section: "E02", element: "E02_09", val: arr2.slice(0) });

            }
        }
        else {
            XML.writeStartElement('eResponse.11');
            XML.writeAttributeString('NV', "7701001");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();
            _val.push("7701001");
            v2Array.push({ section: "E02", element: "E02_09", val: v2NOT_APPLICABLE });
        };
        eResponse["eResponse.11"] = _val[0];


        //////////////////////eResponse.12
        var _response = [];
        var _val = [];

        //nem:eResponse.12[. = '2212015']">
        //This rule fires when there is an instance of eResponse.12 Type of Turn-Around Delay set to "None/No Delay". -->
        alert("If a patient is being transported by the unit, turn-around delay is any time delay that occurs from the time the patient arrived at the destination (eTimes.10) until the time the unit is back in service (eTimes.13) or unit back at the home location (eTimes15) [whichever is the greater of the two times]");
        //If no patient is being transported by the unit, turn-around delay is any time delay that occurs from the time the unit arrived on scene (eTimes.06) until the unit is back in service (eTimes.13) or the unit back at the home location (eTimes.15) [whichever is the greater of the two times].")

        alert("A transport delay is any time delay that occurs from the time the unit left the scene (eTimes.09) to the time the patient arrived at the destination (eTimes.10).")
        _response = getValue(_eL, "eResponse.12");
        if (Call.IsStandBy == false) {
            if (_response.IsNull == true) {
                if (isRequiredStateElement("eResponse.12") == true) {
                    v2Array.push({ section: "E02", element: "E02_10", val: v2NOT_RECORDED });
                    _val.push("7701003")
                    XML.writeStartElement('eResponse.12');
                    XML.writeAttributeString('NV', "7701003");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();
                }
            }
            else {
                var bDelay = false;
                var arr2 = [];
                for (var i = 0; i < _response_payment.ValueArray.length; i++)
                {
                    if ((__response.ValueArray[i].HasValue == true) && (_val.indexOf(_response.ValueArray[i].val) > -1)) {
                        _val = _response.ValueArray[i].val
                        XML.writeElementString("eResponse.12", _val[0]);
                        if (_val == "2212015") {
                            Call.HasDelay == true
                        }
                        arr2.push(setD2("eResponse.12", _val[0]));
                    }
                };
                    if ("2212015" in arr1) //if None, than None only
                    {
                        ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eResponse.12", Description: "Turn Around Delay Type Conflict" })
                        Response.HasErrors = true;
                    };
                    v2Array.push({ section: "E02", element: "E02_10", val: arr2.slice(0) });
            }
        }
        else {
            XML.writeStartElement('eResponse.12');
            XML.writeAttributeString('NV', "7701001");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();
            _Response.NV = v3NOT_APPLICABLE;
            v2Array.push({ section: "E02", element: "E02_10", val: v2NOT_APPLICABLE });
        };
        eResponse["eResponse.11"] = _val[0];

        //////////////////////eResponse.13
        var _response = [];
        var _val = [];

        _response = getValue(_eL, "eResponse.13");
        if (_response.IsNull == true) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.13", Description: "EMS Unit number MANDATORY" })
            Response.HasErrors = true;
        }
        else {
            _val.push(_response.ValueArray[0].val);
            XML.writeElementString("eResponse.13", _val[0]);
            v2Array.push({ section: "E02", element: "E02_11", val: _val });            
        };
        eResponse["eResponse.11"] = _val[0];

        //////////////////////eResponse.14
        var _response = [];
        var _val = [];

        _response = getValue(businessObject.elements, "eResponse.14");
        if (_val == null) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.14", Description: "EMS Unit Call Sign MANDATORY" })
            _Response.HasErrors = true;
        }
        else {
            _val.push(_response.ValueArray[0].val);
            XML.writeElementString("eResponse.14", _val[0]);
            v2Array.push({ section: "E02", element: "E02_12", val: _val[0] });
        };
        eResponse["eResponse.11"] = _val[0];

        //////////////////////eResponse.15
        var _response = [];
        var _val = [];

        _response = getValue(_eL, "eResponse.15");
        if (_val == null) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.15", Description: "Unit Level of Care MANDATORY" })
            Response.HasErrors = true;
        }
        else {
            _val = _response.ValueArray[0].val;
            XML.writeElementString("eResponse.15", _val[0]);
        };
        eResponse["eResponse.15"] = _val[0];
        

        //////////////////////eResponse.16
        var _response = [];
        var _val = [];

        _response = getValue(_eL, "eResponse.16");
        if (_response.IsNull != true) {
            _val = _response.ValueArray[0].val;
            XML.writeElementString("eResponse.16", _val[0]);
            v2Array.push({ section: "E02", element: "E02_13", val: _val[0] });

        };

        eResponse["eResponse.16"] = _val[0];

        //////////////////////eResponse.17
        var _response = [];
        var _val = [];
        _response = getValue(_eL, "eResponse.17");
        if (_response.IsNull != true) {
            _val = _response.ValueArray[0].val;
            XML.writeElementString("eResponse.17", _val[0]);
        };
        eResponse["eResponse.17"] = _val[0];

        //////////////////////eResponse.18
        var _response = [];
        var _val = [];

        _response = getValue(_eL, "eResponse.18");
        if (_response.IsNull != true)
        {
            _val = _response.ValueArray[0].val;
            XML.writeElementString("eResponse.18", _val[0]);

        };
        eResponse["eResponse.18"] = _val[0];

        //////////////////////eResponse.19
        var _response = [];
        var _val = [];

        _response = getValue(_eL, "eResponse.19");
        if (Call.IsCancelled == false) {
            if (_response.IsNull == true) {
                if (isRequiredStateElement("eResponse.19") == true) {
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.19", Description: "Beginning Odometer REQUIRED" })
                    Response.HasErrors = true;
                }
            }
            else {
                _val = _response.ValueArray[0].val;
                XML.writeElementString("eResponse.19", _val[0]);
                v2Array.push({ section: "E02", element: "E02_16", val: _val[0] });
            }
        };

        eResponse["eResponse.19"] = _val[0];

        //////////////////////eResponse.20
        var _response = [];
        var _val = [];
        _response = getValue(_eL, "eResponse.20");
        if (Call.IsCancelled == false)  //if Cancelled prior to arrival on Scene, no data
        {
            if (_response.IsNull == true) {
                if (isRequiredStateElement("eResponse.20") == true) {
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.20", Description: "On-scene Odometer MANDATORY" })
                    Response.HasErrors = true;
                }
            }
            else {
                _val = _response.ValueArray[0].val;
                XML.writeElementString("eResponse.20", _val[0]);
                v2Array.push({ section: "E02", element: "E02_16", val: _val[0] });
            }
        };

        eResponse["eResponse.20"] = _val[0];
        //////////////////////eResponse.21
        var _response = [];
        var _val = [];
        
        _response = getValue(_eL, "eResponse.21");
        if (eDisposition["eDisposition.12"] != "4212007")  //if Cancelled prior to arrival on Scene, no data
        {
            if (_response.IsNull == true) {
                if (isRequiredStateElement("eResponse.21") == true) {
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.21", Description: "On-scene Odometer MANDATORY" })
                    Response.HasErrors = true;
                }
            }
            else {
                _val = _response.ValueArray[0].val;
                XML.writeElementString("eResponse.21", _val[0]);
                v2Array.push({ section: "E02", element: "E02_18", val: _val[0] });
            }
        };
        eResponse["eResponse.21"] = _val[0];


        //////////////////////eResponse.22
        var _response = [];
        var _val = [];
        _response = getValue(_eL, "eResponse.22");
        if (eDisposition["eDisposition.12"] != "4212007")  //if Cancelled prior to arrival on Scene, no data
        {
            if (_response.IsNull == true) {
                if (isRequiredStateElement("eResponse.22") == true) {
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.22", Description: "Ending Odometer MANDATORY" });
                    Response.HasErrors = true;
                }
            }
            else {
                _val = _response.ValueArray[0].val;
                XML.writeElementString("eResponse.22", _val[0]);
                v2Array.push({ section: "E02", element: "E02_19", val: _val[0] });
            }
        };
        eResponse["eResponse.22"] = _val[0];
        
        //////////////////////eResponse.23
        var _response = [];
        var _val = [];

        _response = getValue(_eL, "eResponse.23");
        if (Call.IsCancelled == false)  //if Cancelled prior to arrival on Scene, no data
        {
            if (_response.IsNull == true) {
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eResponse.23", Description: "Response Mode to Scene MANDATORY" })
                Response.HasErrors = true;
            }
            else {
                v2Array.push({ section: "E02", element: "E02_20", val: setV2("eResponse.23", _val) });
                _val.push(_response.ValueArray[0].val[0]);                
                XML.writeElementString("eResponse.23", _val[0]);
            }
        };
        eResponse["eResponse.23"] = _val[0];

        //////////////////////eResponse.24
        _response = getValue(businessObject.elements, "eResponse.24");
        if (eDisposition["eDisposition.12"] != "4212007")  //if Cancelled prior to arrival on Scene, no data
        {
            if (_response.IsNull == true) {
                if (isRequiredStateElement("eResponse.24") == true) {
                    _val.push("7701003")
                    XML.writeStartElement('eResponse.24');
                    XML.writeAttributeString('NV', "7701003");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();
                }
            }
            else {
                var arr2 = [];
                for (var i = 0; i < _response.ValueArray.length; i++) {
                    if ((_response.ValueArray[i].HasValue == true) && (_val.indexOf(_response.ValueArray[i].val) == -1)) {
                        _val.push(_response.ValueArray[i].val);
                        XML.writeElementString("eResponse.24", _val[i]);                       
                    }
                };
            }
        }
        else {
            _val.push("7701001")
            XML.writeStartElement('eResponse.24');
            XML.writeAttributeString('NV', "7701001");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();
        };
        eResponse["eResponse.24"] = _val.slice(0);
    
    }
    */
    XML.writeEndElement();
    var XMLDoc = XML.flush()
    console.log(XMLDoc)
    console.log(eResponse)
    return eResponse;
};
