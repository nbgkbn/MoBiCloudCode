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

var createTheEncouter = function (parseObject, TheCall) {
    var Call = new Object();
    console.log(parseObject)


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
    var v221Array = [];
    var v334Array = [];


    Call.AirTransport = false;
    Call.PatientTransfer = false;
    Call.isCancelled = false; //eDisposition["eDisposition.12"] !="4212007")  //if Cancelled prior to arrival on Scene, no data
    Call.HasPatient = true;
    Call.isCancelled = false;
    Call.isEmergent = true;
    //console.log(Call)

    /*
    ///////////////////////////////////eAirway
    eAirwayObject = getObjectFromOLTPExtract(parseObject, "eAirway");
    var _eAirwayObject = new Object();
    eAirwayObject.HasDataSet = false;
    if (eAirwayObject.IsUndefined != true) {
        eAirwayObject.HasDataSet = true;
    };
    _eAirwayObject = seteAirway(eAirwayObject, Call);
    ////////////////////////////////////////////////////////////////

    ///////////////////////////////////eArrest
    eArrestObject = getObjectFromOLTPExtract(parseObject, "eArrest");
    var _eArrestObject = new Object();
    eArrestObject.HasDataSet = false;
    if (eArrestObject.IsUndefined != true) {
        eArrestObject.HasDataSet = true;
    };
    _eArrestObject = seteArrest(eArrestObject, Call);
    ////////////////////////////////////////////////////////////////
    */
    /*
    ///////////////////////////////////eExam
    var eExamObject = new Object();
    eExamObject = getObjectFromOLTPExtract(parseObject, "eExam");
    var _eExamObject = new Object();
    eExamObject.HasDataSet = false;
    if (eExamObject.IsUndefined != true) {
        eExamObject.HasDataSet = true;
    };
    _eExamObject = seteExam(eExamObject, Call);
    ////////////////////////////////////////////////////////////////

    
    ///////////////////////////////////eMedications
    eMedicationsObject = getObjectFromOLTPExtract(parseObject, "eMedications");
    var _eMedicationsObject = new Object();
    eMedicationsObject.HasDataSet = false;
    if (eMedicationsObject.IsUndefined != true) {
        eMedicationsObject.HasDataSet = true;
    };
    _eMedicationsObject = seteMedications(eMedicationsObject, Call);
    ////////////////////////////////////////////////////////////////

    ///////////////////////////////////eProtocols
    eProtocolsObject = getObjectFromOLTPExtract(parseObject, "eProtocols");
    var _eProtocolsObject = new Object();
    eProtocolsObject.HasDataSet = false;
    if (eProtocolsObject.IsUndefined != true) {
        eProtocolsObject.HasDataSet = true;
    };
    _eProtocolsObject = seteProtocols(eProtocolsObject, Call);
    ////////////////////////////////////////////////////////////////
    
    ///////////////////////////////////eVitals
    eVitalsObject = getObjectFromOLTPExtract(parseObject, "eVitals");
    var _eVitalsObject = new Object();
    eVitalsObject.HasDataSet = false;
    if (eVitalsObject.IsUndefined != true) {
        eVitalsObject.HasDataSet = true;
    };
    _eVitalsObject = seteVitals(eVitalsObject, Call);
    ////////////////////////////////////////////////////////////////

    ///////////////////////////////////eVitals
    eInjuryObject = getObjectFromOLTPExtract(parseObject, "eInjury");
    var _eInjuryObject = new Object();
    eInjuryObject.HasDataSet = false;
    if (eInjuryObject.IsUndefined != true) {
        eInjuryObject.HasDataSet = true;
    };
    _eInjuryObject = seteInjury(eInjuryObject, Call);
    ////////////////////////////////////////////////////////////////
    */
    ///////////////////////////////////eVitals
    eProceduresObject = getObjectFromOLTPExtract(parseObject, "eProcedures");
    var _eProceduresObject = new Object();
    eProceduresObject.HasDataSet = false;
    if (eProceduresObject.IsUndefined != true) {
        eProceduresObject.HasDataSet = true;
    };
    _eProceduresObject = seteProcedures(eProceduresObject, Call);
    ////////////////////////////////////////////////////////////////

};
var seteAirway = function (AirwayObject, Call) {
    console.log(Call)
    
    var eAirway =                   new Object();
    var AirwayGroup =               new Object();
    var AirwayGroupArray =          new Array();
    var ConfirmationGroup =         new Object();
    var ConfirmationGroupArray =    new Array();
       
    // GET AirwayGroup.
   
    if (AirwayObject.HasDataSet == false)
    {
        eAirway = setNotApplicableAll();
        eAirway.HasAirway = false;
        return eAirway;
    };
    

        /////eAirway.01
        _val = [];
        var _airway=[];
        var eAirwayElements = AirwayObject.attributes.sections[a].attributes.elements
        _airway = getValue(eAirwayElements, "eAirway.01");
        if (eAirway.HasAirway == true)
        {
            if (_airway.Count == 0) {
                if (isRequiredStateElement("eAirway.01") == true) {
                   _val.push("7701003");
        
                    XML.writeStartElement('eAirway.01');
                    XML.writeAttributeString('NV', "7701003");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();
                }
            }
            else
            {
                _val.push(_airway.ValueArray[0].val);
                console.log(_airway)
                arr1 = [];
                for (var i = 0; i < _airway.ValueArray.length; i++) {
                    if ((_airway.ValueArray[i].HasValue == true) && (_val.indexOf(_airway.ValueArray[i].val) == -1)) {
                        _val.push(_airway.ValueArray[i].val);
                        XML.writeElementString("eAirway.01", _val);                        
                    }
                };
            }
        }
        else
        {
            _val.push("7701001");
            XML.writeStartElement('eAirway.01');
            XML.writeAttributeString('NV', "7701001");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();
        };
        eAirway["eAirway.01"] = _val;
        
    /////eAirway.10
        _val=[];
        _airway=[];
        _airway = getValue(eAirwayElements, "eAirway.10");
        if (eAirway.HasAirway == true)
        {
            if (_airway.IsNull!= true)
            {
                if (_airway.IsNull != true) 
                {
                    _val.push(_airway.ValueArray[0].val);
                    eAirway["HasAirwayDate"] = true;
                    XML.writeElementString("eAirway.10", _val);
                };
            }
        };
        eAirway["eAirway.10"] = _val;
        /////eAirway.11
        // eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: 
        // Date/Time Decision to Manage the Patient with an Invasive Airway, 
        var _val=[];
        _airway=[];
        _airway = getValue(eAirwayElements, "eAirway.11");
        if (Call.HasAirway == true)
        {
            if (_airway.IsNull != true) 
            {
                if (eAirway["HasAirwayDate"] == true) 
                    {
                        _eAirway.HasErrors = true;
                        _eAirway.Error ="Validation Error: eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Date/Time Decision to Manage the Patient with an Invasive Airway, "
                    }
                };
            if (_airway.IsNull != true) 
            {
                    _val.push(_airway.ValueArray[0].val);
                    XML.writeElementString("eAirway.11", _val);
                };
            }
        };        
        eAirway["eAirway.11"] = _val;

        //////////////////////////////
        console.log(AirwayObject.attributes.sections[a].attributes)

        _sectionIndex = getSectionIndex(AirwayObject.attributes.sections[a], "eAirway.ConfirmationGroup");
        console.log(Call)
        if (_sectionIndex != -1)
        {
            for (var x = 0; x <= _sectionIndex.length; x++) 
            {
                var pArrCG = [];

                var groupObject = AirwayObject.attributes.sections[a].attributes.sections[_sectionIndex].attributes.elements
                var ConfirmationGroupArray = [];

                /////eAirway.02
                _val=[];
                _airway=[];
                _airway = getValue(groupObject, "eAirway.02");
                eAirway["HasAirwayDate"] = false;
                console.log(Call.HasAirway, _airway.Count)
                if (Call.HasAirway == true)
                {
                    if (_airway.IsNull!= true)
                    {
                        if (isRequiredStateElement("eAirway.02") == true)
                        {                     
                            _val.push("7701003");
                            XML.writeStartElement('eAirway.02');
                            XML.writeAttributeString('NV', "7701003");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();

                        }
                        else
                        {                          
                            _val.push("7701005");
                            XML.writeStartElement('eAirway.02');
                            XML.writeAttributeString('NV', "7701005");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();
                        }
                    }
                    else
                    {
                        if (_airway.IsNull != true) {
                            _val.push(_airway.ValueArray[0].val);
                            XML.writeElementString("eAirway.02", _val);
                            _eAirway.value = _val;
                            _eAirway.HasData = true;
                        };
                    }
                }
                else
                {
                    _val.push("7701001");
                    XML.writeStartElement('eAirway.02');
                    XML.writeAttributeString('NV', "7701001");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                };
                pArrCG["eAirway.02"]= _val
                
                /////eAirway.03
                _val=[];
                _airway=[];
                _airway = getValue(groupObject, "eAirway.03");
                if (Call.HasAirway == true)
                {
                    if (_airway.IsNull!= true) {
                        if (isRequiredStateElement("eAirway.03") == true)
                        {
                            _val.push("7701003");
                            XML.writeStartElement('eAirway.03');
                            XML.writeAttributeString('NV', "7701003");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();
                        }
                        else {
                            _val.push("7701005");
                            XML.writeStartElement('eAirway.03');
                            XML.writeAttributeString('NV', "7701005");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();
                        }
                    }
                    else {
                        Call.HasAirway = true;
                        if (eAirway["HasAirwayDate"] == false)
                        {
                            //eAirway.HasErrors = false;
                            //eAirway.Error = "Validation Error: Device Confirmation requires Confirmation Time";
                        };
                        if (_airway.IsNull != true) {
                            _val.push(_airway.ValueArray[0].val);
                            XML.writeElementString("eAirway.03", _val);
                        };
                    }
                }
                else {
                    _val.push("7701001");
                    XML.writeStartElement('eAirway.03');
                    XML.writeAttributeString('NV', "7701001");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();
                };
                pArrCG["eAirway.03"]= _val


                /////eAirway.04
                var _val=[];
                _airway=[];
                _airway = getValue(groupObject, "eAirway.04");
                if (eAirway.HasAirway == true)
                {
                    if (_airway.IsNull!= true)
                    {
                        if (isRequiredStateElement("eAirway.04") == true)
                        {
                            _val.push("7701003")
                            XML.writeStartElement('eAirway.04');
                            XML.writeAttributeString('NV', "7701003");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();
                        }
                        else {
                            _val.push("7701005")
                            XML.writeStartElement('eAirway.04');
                            XML.writeAttributeString('NV', "7701005");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();
                        }
                    }
                    else {
                        if (eAirway["HasAirwayDate"] == false)
                        {
                            _eAirway.HasErrors = false;
                            _eAirway.Error = "Validation Error: Placement Method Requires Confirmation Time" 
                        }
                        else
                        {
                            for (var i = 0; i < _airway.ValueArray.length; i++) 
                            {
                                if ((_airway.ValueArray[i].HasValue == true) && (_val.indexOf(_airway.ValueArray[i].val) == -1)) {
                                    _val.push(_airway.ValueArray[i].val);
                                    XML.writeElementString("eAirway.04", _val);
                                    arr1.push(_val);
                                }
                            };
                            eAirway.HasAirway = true;
                        }
                    }
                }
                else
                {
                    _val.push("7701001")
                    XML.writeStartElement('eAirway.04');
                    XML.writeAttributeString('NV', "7701001");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                };
                pArrCG["eAirway.04"]= _val

                /////eAirway.05
                var _val=[];
                _airway=[];
                _airway = getValue(groupObject, "eAirway.05");
                if (Call.HasAirway == false) {
                    if (_airway.IsNull != true) 
                    {
                        if (eAirway["HasAirwayDate"] == false) 
                        {
                            _eAirway.HasErrors = true
                            _eAirway.Error = "Tube Depth Requires Confirmation Time"
                        }
                        else {
                            if (_airway.IsNull != true) {
                                _val.push(_airway.ValueArray[0].val);
                                XML.writeElementString("eAirway.05", _val);
                            }
                        }
                    };
                    pArrCG["eAirway.05"]= _val

                    /////eAirway.06
                    var _val=[];
                    _airway=[];
                    _airway = getValue(groupObject, "eAirway.06");
                    if (eAirway.HasAirway == false) 
                    {
                        if (_airway.IsNull != true) 
                        {
                            if (isRequiredStateElement("eAirway.06") == true) 
                            {
                                _val.push("7701003")
                                XML.writeStartElement('eAirway.06');
                                XML.writeAttributeString('NV', "7701003");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();
                            }
                            else 
                            {
                                _val.push("7701005")                            
                                XML.writeStartElement('eAirway.06');
                                XML.writeAttributeString('NV', "7701005");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                            }
                        }
                        else {
                            if (eAirway["HasAirwayDate"] == false) {
                                eAirway.HasErrors = true;
                                eAirway.Error = "Device Placement Requires Confirmation Time"
                            }
                            else 
                            {
                                _val.push(_airway.ValueArray[0].val);
                                XML.writeElementString("eAirway.06", _val);
                            }
                        }
                    }
                    else {
                        _val.push("7701001")
                        XML.writeStartElement('eAirway.06');
                        XML.writeAttributeString('NV', "7701001");
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();

                    };
                    pArrCG["eAirway.06"]= _val

                    /////eAirway.07
                    var _val=[];
                    var _airway=[];
                    _airway = getValue(groupObject, "eAirway.07");
                    if (eAirway.HasAirway == false) 
                    {
                        if (_airway.IsNull != true) 
                        {
                            if (isRequiredStateElement("eAirway.07") == true) 
                            {
                                _val.push("7701003");
                                XML.writeStartElement('eAirway.07');
                                XML.writeAttributeString('NV', "7701003");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();
                            }
                            else {
                                _val.push("7701003");
                                XML.writeStartElement('eAirway.07');
                                XML.writeAttributeString('NV', "7701005");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                            }
                        }
                        else {
                            eAirway.HasAirway = true;
                            _val.push(_airway.ValueArray[0].val);
                            XML.writeElementString("eAirway.07", _val);
                        }
                    }
                    else {
                        _val.push("7701001")
                        XML.writeStartElement('eAirway.07');
                        XML.writeAttributeString('NV', "7701001");
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();
                    };
                    pArrCG["eAirway.07"]= _val

                    /////eAirway.08

                    var _val=[];
                    var _airway=[];
                    _airway = getValue(groupObject, "eAirway.08");
                    if (Call.HasAirway == false) {
                        if (_airway.Count == 0) {
                            if (isRequiredStateElement("eAirway.08") == true) {
                                _val.push("7701003")
                                XML.writeStartElement('eAirway.08');
                                XML.writeAttributeString('NV', "7701003");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                            }
                            else {
                                _val.push("7701005")
                                XML.writeStartElement('eAirway.08');
                                XML.writeAttributeString('NV', "7701005");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                            }
                        }
                        else {
                            for (var i = 0; i < _airway.ValueArray.length; i++) 
                            {
                                if ((_airway.ValueArray[i].HasValue == true) && (_val.indexOf(_airway.ValueArray[i].val) == -1)) {
                                    _val.push(_airway.ValueArray[i].val)
                                    XML.writeElementString("eAirway.08", _val);                                    
                                }
                            }
                        }
                    }
                    else {
                        _val.push("7701001")
                        XML.writeStartElement('eAirway.08');
                        XML.writeAttributeString('NV', "7701001");
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();
                    };
                    pArrCG["eAirway.08"]= _val

                    /////eAirway.09
                    var _val=[];
                    var _airway=[];
                    _airway = getValue(groupObject, "eAirway.09");
                    if (_airway.IsNull != true) {
                        var arr1 = [];
                        for (var i = 0; i < _airway.ValueArray.length; i++) {
                            if ((_airway.ValueArray[i].HasValue == true) && (_val.indexOf(_airway.ValueArray[i].val) == -1)) {
                                _val.push(_airway.ValueArray[i].val)
                                XML.writeElementString("eAirway.09", _val);

                            }
                        }
                        eAirway.HasAirway = true;
                    };
                    pArrCG["eAirway.09"]= _val
                    

                    console.log(ConfirmationGroupArray)
                }
            };  //ConfirmationGroup Loop

            AirwayGroup.ConfirmationGroup = ConfirmationGroupArray;
            console.log(AirwayGroup)
       
            AirwayGroupArray.push(AirwayGroup)
            console.log(AirwayGroupArray)
    
            if (Call.HasAirway == false)
            {
                _val = [];
                _val.push("7701001");
                XML.writeStartElement('eAirway.01');
                XML.writeAttributeString('NV', "7701001");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();

                eAirway["eAirway.01"]=_val

                _val = [];
                _val.push("7701001");                
                XML.writeStartElement('eAirway.02');
                XML.writeAttributeString('NV', "7701001");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();

                eAirway["eAirway.02"]=_val

                _val = [];
                _val.push("7701001");
                XML.writeStartElement('eAirway.03');
                XML.writeAttributeString('NV', "7701001");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
                eAirway["eAirway.03"]=_val
                

                _val = [];
                _val.push("7701001");
                XML.writeStartElement('eAirway.04');
                XML.writeAttributeString('NV', "7701001");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
                eAirway["eAirway.04"]=_val

                _val = [];
                _val.push("7701001");
                XML.writeStartElement('eAirway.06');
                XML.writeAttributeString('NV', "7701001");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
                eAirway["eAirway.06"]=_val

                _val = [];
                _val.push("7701001");
                XML.writeStartElement('eAirway.08');
                XML.writeAttributeString('NV', "7701001");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
                eAirway["eAirway.08"]=_val

                _val = [];
                _val.push("7701001");
                XML.writeStartElement('eAirway.09');
                XML.writeAttributeString('NV', "7701001");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
                eAirway["eAirway.08"]=_val

            console.log(AirwayGroupArray)

            eAirway.AirwayGroup = AirwayGroupArray;
            console.log(eAirway);}

        XML.writeEndElement("eAirway");
        return eAirway;


        };
 

var seteArrest = function (pArrest, Call) {

    var pArr, pArr2 = [];
    var eArrest = new Object();
    
    if (pArrest.HasDataSet != true)
    {

        /////////////eArrest.01
        var  _arrest=[];
        var  _val=[];
        _eL = [];
        _eL = pArrest.attributes.elements
        _arrest = getValue(_eL, "eArrest.01");
        if (_arrest.IsNull == true)
        {
            eArrest.HasArrest = false; //set Values to Not Applicable
            _val.push("7701001")
            XML.writeStartElement('eArrest.01');
            XML.writeAttributeString('NV', "7701001");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();

            pArr2.push({ section: "E11", element: "E11_01", val: v2NOT_RECORDED });
        }
        else 
        {
            _val = _dispo.ValueArray[0].val;
            eArrest.HasArrestRecord = true;   //We have an eArrest 
            if (_val != "3001001") 
            {
                eArrest["isCardiacArrest"] = true;
            }
            else 
            {
                eArrest["isCardiacArrest"] = false;
            };
            _val.push(_arrest.ValueArray[0].val);
            XML.writeElementString("eArrest.01", _val);
            pArr2.push({ section: "E11", element: "E11_01", val: setV2("eArrest.01", _val) });
        };
        eArrest["eArrest.01"] = _val

        //When eArrest.01 Cardiac Arrest is "Yes...", other elements in the eArrest section are recorded, 
        //When eArrest.01 Cardiac Arrest is not "Yes...", other elements in the eArrest section are not recorded

        /////////////eArrest.02
        var  _arrest=[];
        var  _val=[];
        _arrest = getValue(_eL, "eArrest.02");

        if (isApplicable == true)  //If there is no incident, all set to NOT_APPLICABLE
        {
            if (eArrest["isCardiacArrest"] == true)  //Yes value for eArrest.01
            {
                if (_arrest.IsNull == true)
                {
                    _val.push("7701003");
                    XML.writeStartElement('eArrest.02');
                    XML.writeAttributeString('NV', "7701003");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                    pArr2.push({ section: "E11", element: "E11_02", val: v2NOT_RECORDED });

                }
                else 
                {
                    _val.push(_arrest.ValueArray[0].val_;
                    XML.writeElementString("eArrest.02", _val);
                    pArr2.push({ section: "E11", element: "E11_02", val: setV2("eArrest.02", _val) });
                }
            }
        }
        else 
        {            
            _val.push("7701001")
            XML.writeStartElement('eArrest.02');
            XML.writeAttributeString('NV', "7701001");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();

            pArr2.push({ section: "E11", element: "E11_02", val: v2NOT_APPLICABLE });
        };
        eArrest["eArrest.02"] = _val

        /////////////eArrest.03
        var  _arrest=[];
        var  _val=[];

        //Resuscitation Attempted By EMS does not contain "Attempted/Initiated..." and "Not Attempted..." in the same record

        eArrest["ResuscitationAttempted"] = false;
        _arrest = getValue(businessObject.elements, "eArrest.03");
        if (eArrest["isCardiacArrest"] == true)  //Yes value for eArrest.01
        {
            if (_arrest.IsNull == true)
            {
                _val.push("7701003")
                XML.writeStartElement('eArrest.03');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();

                pArr2.push({ section: "E11", element: "E11_02", val: v2NOT_RECORDED });

            }
            else 
            {
                var arrAttempt = ["3003001", "3003003", "3003005"];
                    for (var i = 0; i < _arrest.ValueArray.length; i++) {
                        if ((_arrest.ValueArray[i].HasValue == true) && (_val.indexOf(_arrest.ValueArray[i].val) == -1)) {
                            _val.push(_arrest.ValueArray[i].val);
                            XML.writeElementString("eArrest.03", _val);                            
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
                            _eArrest.HasErrors = true
                            _eArrest.Error = "Conflicting values:  Attempted/Not Attempted"
                        }
                    }
                };
                pArr2.push({ section: "E11", element: "E11_03", val: arr3.slice(0) });
            }
        
        else 
        {
            _val.push("7701001")
            XML.writeStartElement('eArrest.03');
            XML.writeAttributeString('NV', "7701001");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();

            pArr2.push({ section: "E11", element: "E11_03", val: v2NOT_APPLICABLE });
        };
        eArrest["eArrest.03"] = _val


        /////////////eArrest.04

        var  _arrest=[];
        var  _val=[];
        var bArrestWitnessedBy = false;
        _arrest = getValue(_eL, "eArrest.04");
        if (eArrest["isCardiacArrest"] == true)  //Yes value for eArrest.01
        {
            if(_arrest.IsNull==true) 
            {
                _val.push("7701003");
                XML.writeStartElement('eArrest.04');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();

                pArr2.push({ section: "E11", element: "E11_04", val: v2NOT_RECORDED });

            }
            else 
            {                
                var arr2 = [];                
                for (var i = 0; i < _arrest.ValueArray.length; i++) {
                    if ((_arrest.ValueArray[i].HasValue == true) && (_val.indexOf(_arrest.ValueArray[i].val) == -1)) {
                        _val.push(_arrest.ValueArray[i].val);
                        XML.writeElementString("eArrest.04", _val);
                        arr1.push(_val);
                        arr2.push(setV2("eArrest.04", _val));

                    }
                };
                pArr2.push({ section: "E11", element: "E11_04", val: arr2.slice(0) });
            }
        }
        else 
        {
            _val.push("7701001")
            XML.writeStartElement('eArrest.04');
            XML.writeAttributeString('NV', "7701001");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();
            pArr2.push({ section: "E11", element: "E11_04", val: v2NOT_APPLICABLE });

        };
        eArrest["eArrest.04"] = _val;

        /////////////eArrest.05
        var  _arrest=[];
        var  _val=[];
        eArrest["wasCPRProvide"] = false; //can only be True when isArrest is True
        
        _arrest = getValue(businessObject.elements, "eArrest.05");
        if (eArrest["isCardiacArrest"] == true)  //Yes value for eArrest.01
        {
            if(_arrest.IsNull==true) 
            {
                _val.push("7701003")
                XML.writeStartElement('eArrest.05');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
            }
            else 
            {
                _val.push(_arrest.ValueArray[0].val);
                if (_val == "9923003") 
                {
                    eArrest["wasCPRProvide"] = true;
                }
                _val.push(_arrest.ValueArray[0].val);
                XML.writeElementString("eArrest.05", _val);
            }
        }
        else 
        {
            _val.push("7701001")
            XML.writeStartElement('eArrest.05');
            XML.writeAttributeString('NV', "7701001");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();
        };
        eArrest["eArrest.05"] = _val;

        /////////////eArrest.06
        var  _arrest=[];
        var  _val=[];
        _arrest = getValue(businessObject.elements, "eArrest.06");
        if (eArrest["wasCPRProvide"] == true)  //Yes value for eArrest.01
        {
            if(_arrest.IsNull!=true) 
            {
                var arr1 = [];
                for (var i = 0; i < _arrest.ValueArray.length; i++)
                {
                    if ((_arrest.ValueArray[i].HasValue == true) && (_val.indexOf(_arrest.ValueArray[i].val) == -1)) {
                        _val.push(_arrest.ValueArray[i].val);
                        XML.writeElementString("eArrest.06", _val);
                    }
                };
            }
        };
        eArrest["eArrest.06"] = _val;
        /////////////eArrest.07
        var  _arrest=[];
        var  _val=[];

        eArrest["wasAEDProvided"] = false;
        _arrest = getValue(businessObject.elements, "eArrest.07");
        if (eArrest["isCardiacArrest"])  //If there is no incident, all set to NOT_APPLICABLE
        {
            if (_arrest.IsNull == true)
            {
                _val.push("7701003")
                XML.writeStartElement('eArrest.07');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
            }
            else 
            {
                _val.push(_arrest.ValueArray[0].val);
                if (_val != "3007001") 
                {
                    eArrest["wasAEDProvided"] = true;
                };
                XML.writeElementString("eArrest.07", _val);
            }
        }
        else 
        {
            _val.push("7701001")
            XML.writeStartElement('eArrest.07');
            XML.writeAttributeString('NV', "7701001");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();
        };
        eArrest["eArrest.07"] = _val;

        /////////////eArrest.08
        var  _arrest=[];
        var  _val=[];
        _arrest = getValue(businessObject.elements, "eArrest.08");

        if (eArrest["isCardiacArrest"])  //If there is no incident, all set to NOT_APPLICABLE
        {
            if (eArrest["wasAEDProvided"] == true)  //
            {
                if (_arrest.IsNull != true) {
                    _val.push(_arrest.ValueArray[0].val);
                    XML.writeElementString("eArrest.08", _val);
                }
            }
        };
        eArrest["eArrest.08"] = _val;
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
        var  _arrest=[];
        var  _val=[];
        _arrest = getValue(businessObject.elements, "eArrest.09");
        if (eArrest["isCardiacArrest"] == true)  //If there is no incident, all set to NOT_APPLICABLE
        {
            if (eArrest["wasCPRProvide"] == true)  //Yes value for eArrest.01
            {
                if (_arrest.IsNull == true)
                {
                    _val.push("7701003")
                    XML.writeStartElement('eArrest.09');
                    XML.writeAttributeString('NV', "7701003");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();
                }
                else
                {
                    for (var i = 0; i < _arrest.ValueArray.length; i++)
                    {
                        if ((_arrest.ValueArray[i].HasValue == true) && (_val.indexOf(_arrest.ValueArray[i].val) == -1))
                        {
                            _val.push(_arrest.ValueArray[0].val);
                            XML.writeElementString("eArrest.09", _val);
                        }
                    };

                    bError = false;
                    //Check for Compression 3003005, if eArrest.03 values = Compression
                    arrCompression = ["3009001", "3009003", "3009005", "3009007", "3009009", "3009011"]; //Compression values
                    if (eArrest["eArrest.03"] = "3003005") //Compression
                    {
                        if (arrCompression.indexOf(_val) != -1) 
                        {
                            _eArrest.HasErrors = true;
                            _eArrest.Error = "Validation Error:Conflicting values.  Resuscitation Attempted By EMS should contain " / "Initiated Chest Compressions" / ""
                        }
                    };

                    //Check for Compression 3003005, if eArrest.03 values = Ventilation
                    arrVent = ["3009013", "3009015", "3009017", "3009019"]; //Ventilation values
                    if (eArrest["eArrest.03"] = "3003003") //Ventilation
                    {
                        if (arrVent.indexOf(_val) != -1) 
                        {
                            _eArrest.HasErrors = true;
                            _eArrest.Error =  "Validation Error:Conflicting values.  Resuscitation Attempted By EMS should contain " / "Attempted Ventilation" / "" 
                        }
                    };

                    //Check for VENTILATION 3003005, if eArrest.03 values = Compression
                    arrCompression = ["3009001", "3009003", "3009005", "3009007", "3009009", "3009011"]; //Compression values
                    if (eArrest["eArrest.03"] = "3003005") //Compression
                    {
                        if (arrNotAttempt.indexOf(_val) != -1) 
                        {
                            _eArrest.HasErrors = true;
                            _eArrest.Error = "Validation Error:Conflicting values.  Resuscitation Attempted By EMS should contain " / "Initiated Chest Compressions" / ""
                        }
                    };
                }
            }
        }
        else 
        {
            _val.push("7701001")

            XML.writeStartElement('eArrest.09');
            XML.writeAttributeString('NV', "7701001");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();

        };
        eArrest["eArrest.09"] = _val;

        /////////////eArrest.10
        var  _arrest=[];
        var  _val=[];
        _arrest = getValue(businessObject.elements, "eArrest.10");
        if (eArrest["isCardiacArrest"] == true)  //If there is no incident, all set to NOT_APPLICABLE
        {
            if(_arrest.IsNull==true)
            {
                if (isRequiredStateElement("eArrest.10") == true) 
                {
                    _val.push("7701003")
                    XML.writeStartElement('eArrest.10');
                    XML.writeAttributeString('NV', "7701003");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                }
            }
            else
            {
                if (_arrest.IsNull != true) {
                    _val.push(_arrest.ValueArray[0].val);
                    XML.writeElementString("eArrest.10", _val);
                }
            }
        }
        else        
        {
            _val.push("7701001")
            XML.writeStartElement('eArrest.10');
            XML.writeAttributeString('NV', "7701001");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();


        };
        eArrest["eArrest.10"] = _val;
        
        /////////////eArrest.11
        var  _arrest=[];
        var  _val=[];

        _arrest = getValue(businessObject.elements, "eArrest.11");
        if (eArrest["isCardiacArrest"] == true)  //If there is no incident, all set to NOT_APPLICABLE
            {
            if(_arrest.IsNull==true)
            {
                _val.push("7701003")
                XML.writeStartElement('eArrest.11');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();

                pArr2.push({ section: "E11", element: "E11_05", val: v2NOT_RECORDED });

            }
            else
            {
                if (_arrest.IsNull != true) {
                    _val.push(_arrest.ValueArray[0].val);
                    XML.writeElementString("eArrest.11", _val);
                };
                pArr2.push({ section: "E11", element: "E11_05", val: _val });
            }
        }
        else
        {
            _val.push("7701001")
            XML.writeStartElement('eArrest.10');
            XML.writeAttributeString('NV', "7701001");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();

            pArr2.push({ section: "E11", element: "E11_05", val: v2NOT_APPLICABLE });
        };
        eArrest["eArrest.11"] = _val;
        
        /////////////eArrest.12
        var  _arrest=[];
        var  _val=[];
        _arrest = getValue(businessObject.elements, "eArrest.12");
        if (eArrest["isCardiacArrest"] == true)  //If there is no incident, all set to NOT_APPLICABLE
        {
            if(_arrest.IsNull==true)
            {
                if (isRequiredStateElement("eArrest.12") == true)
                {
                    _val.push("7701003")       
                    XML.writeStartElement('eArrest.12');
                    XML.writeAttributeString('NV', "7701003");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                    pArr2.push({ section: "E11", element: "E11_06", val: v2NOT_RECORDED });            
                }                
            }
            else
            {    
                var arr2 = [];
                for (var i = 0; i < _arrest.ValueArray.length; i++)
                {
                    if ((_arrest.ValueArray[i].HasValue == true) && (_val.indexOf(_arrest.ValueArray[i].val) == -1))
                    {
                        _val.push(_arrest.ValueArray[i].val);
                        XML.writeElementString("eArrest.12", _val);
                        arr2.push(setV2("eArrest.12", _val));
                    }
                };
        
                if (_val.length >1) 
                {
                    if(_val.indexOf("3012001") != -1)
                    {
                        _eArrest.HasErrors = true;
                        _eArrest.Error = "Validation Error:Conflicting values.  Any Return of Spontaneous Circulation Contains Conflicting Values" 
                    }
                };
                pArr2.push({ section: "E11", element: "E11_06", val: arr2.slice(0)});
            }
        }
        else
        { 
            _val.push("7701001")
            XML.writeStartElement('eArrest.12');
            XML.writeAttributeString('NV', "7701001");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();

            pArr2.push({ section: "E11", element: "E11_06", val: v2NOT_APPLICABLE });        

        };
        eArrest["eArrest.12"]=_val;                
        
        /////////////eArrest.13
        var  _arrest=[];
        var  _val=[];
        _arrest = getValue(businessObject.elements, "eArrest.13");
        if (_arrest.IsNull != true) {
            _val.push(_arrest.ValueArray[0].val);
            _eArrest.HasData = true;
            _eArrest.Value = _val;
        };
        eArrest["eArrest.13"]=_val;
        /////////////eArrest.14
        var  _arrest=[];
        var  _val=[];
        _arrest = getValue(businessObject.elements, "eArrest.14");
        if (eArrest["isCardiacArrest"] == true)  //If there is no incident, all set to NOT_APPLICABLE
        {
            if(_arrest.IsNull==true)
            {
                if (isRequiredStateElement("eArrest.14") == true)
                {
                    _val.push("7701003")
                    XML.writeStartElement('eArrest.14');
                    XML.writeAttributeString('NV', "7701003");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                    pArr2.push({ section: "E11", element: "E11_08", val: v2NOT_RECORDED });

                }
            }
            else
            {
                _val.push(_arrest.ValueArray[0].val);
                XML.writeElementString("eArrest.14", _val);
                pArr2.push({ section: "E11", element: "E11_08", val: _val });
            }
        }
        else
        {        
            _val.push("7701001")
            XML.writeStartElement('eArrest.14');
            XML.writeAttributeString('NV', "7701001");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();

            pArr2.push({ section: "E11", element: "E11_08", val: v2NOT_APPLICABLE });
        };
        eArrest["eArrest.14"]=_val;        
        /////////////eArrest.15
        var  _arrest=[];
        var  _val=[];
        _arrest = getValue(businessObject.elements, "eArrest.15");
        if (eArrest["wasbResuscitationAttempted"] == true)
        {
            if(_arrest.IsNull==true)
            {        
                if (isRequiredStateElement("eArrest.15") == true) 
                {           
                    _val.push("7701003")
                    XML.writeStartElement('eArrest.15');
                    XML.writeAttributeString('NV', "7701003");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                    pArr2.push({ section: "E11", element: "E11_09", val: v2NOT_RECORDED });

                }
                else
                {
                    _val.push("7701005")
                    XML.writeStartElement('eArrest.15');
                    XML.writeAttributeString('NV', "7701005");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                    pArr2.push({ section: "E11", element: "E11_09", val: v2NOT_REPORTING });            
                }          
            }
            else
            {
                if (_arrest.IsNull != true) {
                    _val.push(_arrest.ValueArray[0].val);
                    XML.writeElementString("eArrest.15", _val);
                };
                v2Array.push({ section: "E11", element: "E11_08", val: _val });
            }
        }
        else
        {        
            _val.push("7701001")
            XML.writeStartElement('eArrest.15');
            XML.writeAttributeString('NV', "7701005");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();

            pArr2.push({ section: "E11", element: "E11_09", val: v2NOT_APPLICABLE });   
        };
        eArrest["eArrest.58"]=_val;                
        /////////////eArrest.16
        var  _arrest=[];
        var  _val=[];
        _arrest = getValue(businessObject.elements, "eArrest.16");
        if(eArrest.wasCPRProvide ==true)
        {
            if(_arrest.IsNull==true)
            {
                if (isRequiredStateElement("eArrest.16") == true)
                {
                    _val.push("7701003")
                    XML.writeStartElement('eArrest.16');
                    XML.writeAttributeString('NV', "7701003");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                    pArr2.push({ section: "E11", element: "E11_10", val: v2NOT_RECORDED });
                }
                else 
                {            
                    _val.push("7701005")
                    XML.writeStartElement('eArrest.16');
                    XML.writeAttributeString('NV', "7701005");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                    pArr2.push({ section: "E11", element: "E11_10", val: v2NOT_REPORTING });
                }
            }    
            else
            {
                _val.push(_arrest.ValueArray[0].val);
                if (_arrest.IsNull != true) {
                    _val.push(_arrest.ValueArray[0].val);
                    XML.writeElementString("eArrest.16", _val);                  
                };
                pArr2.push({ section: "E11", element: "E11_10", val: setV2("eArrest.16", _val) });

            }
        }
        else
        {
            _val.push("7701001")
            XML.writeStartElement('eArrest.16');
            XML.writeAttributeString('NV', "7701001");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();

            pArr2.push({ section: "E11", element: "E11_10", val: v2NOT_APPLICABLE });

        };
        eArrest["eArrest.16"]=_val;                
        /////////////eArrest.17
        var  _arrest=[];
        var  _val=[];
        _arrest = getValue(businessObject.elements, "eArrest.17");
        if (eArrest["isCardiacArrest"] == true)  //If there is no incident, all set to NOT_APPLICABLE
        {
            if (_arrest.IsNull == true)
            {
                _val.push("7701003")
                XML.writeStartElement('eArrest.17');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();

                pArr2.push({ section: "E11", element: "E11_11", val: V2NOT_RECORDED });

            }
            else
            {       
                var arr2 = [];
                for (var i = 0; i < _arrest.ValueArray.length; i++)
                {
                    if ((_arrest.ValueArray[i].HasValue == true) && (_val.indexOf(_arrest.ValueArray[i].val) == -1))
                    {
                        _val.push(_arrest.ValueArray[i].val);
                        XML.writeElementString("eArrest.17", _val);
                        arr2.push(setV2("eArrest.17", _val));
                    }
                };
        
                pArr2.push({ section: "E11", element: "E11_11", val: arr2.slice(0) });
            }
        }
        else
        {
            _val.push("7701001")
            XML.writeStartElement('eArrest.17');
            XML.writeAttributeString('NV', "7701001");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();
            pArr2.push({ section: "E11", element: "E11_11", val: v2NOT_APPLICABLE });
        };
        eArrest["eArrest.17"]=_val;                 
        /////////////eArrest.18
        var  _arrest=[];
        var  _val=[];
        _arrest = getValue(businessObject.elements, "eArrest.18");
        if (eArrest["isCardiacArrest"] == true)  //If there is no incident, all set to NOT_APPLICABLE
        {
            if(_arrest.IsNull==true) {
                _val.push("7701003")
                XML.writeStartElement('eArrest.18');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();

            }
            else
            {
                _val.push(_arrest.ValueArray[0].val);
                if (_arrest.IsNull != true) {
                    _val.push(_arrest.ValueArray[0].val);
                    XML.writeElementString("eArrest.18", _val);
                };
            }
        }
        else
        {
            _val.push("7701001")
            XML.writeStartElement('eArrest.18');
            XML.writeAttributeString('NV', "7701001");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();

            
        };
        eArrest["eArrest.18"]=_val;
    };

    
    XML.writeEndElement

    return eArrest;
};
var seteExam = function (pExam, Call) {
    var eExam = new Object();
        ////////Check for cancelled calls, Standby, non-patient
        if (pExam.HasDataSet == false)
        {
            console.log("NA")
            //SetNot Applicables and return
            return eExam;
        }
        var _exArr = [];        
        var _pArr2= [];

        _exArr = pExam.attributes.elements;
 
    ////////eExam.01 -- IsNillable Yes
        var _exam = [];
        var _val = [] ;       
        _exam = getValue(_exArr, "eExam.01");
        if (pExam.HasDataSet == true)
        {
            if (_exam.IsNull == true) 
            {
                if(_exam.HasPN==true)
                {
                    _val.push("8801023")
                    XML.writeStartElement('eExam.01');
                    XML.writeAttributeString('PN', "8801023");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();
                   
                    pArr2.push({ section: "E16", element: "E16_01", val: v2NOT_KNOWN});     
                };
                
                if (isRequiredStateElement("eExam.01") == true)         
                {
                    _pArr2.push({ section: "E16", element: "E16_01", val: v2NOT_RECORDED });
                    _val.push("7701003")
                    XML.writeStartElement('eExam.01');
                    XML.writeAttributeString('NV', "7701003");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                }
                else 
                {
                    _pArr2.push({ section: "E16", element: "E16_01", val: v2NOT_REPORTING });
                    _val.push("7701005")
                    XML.writeStartElement('eExam.01');
                    XML.writeAttributeString('NV', "7701005");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                }
                
            }
            else 
            {
                _val.push(_exam.ValueArray[0].val);
                XML.writeElementString("eExam.01", _val);
                _pArr2.push({ section: "E16", element: "E16_01", val: _val });
            }
        }
        else
        {
            _pArr2.push({ section: "E16", element: "E16_01", val: v2NOT_APPLICABLE });
            _val.push("7701001")
            XML.writeStartElement('eExam.01');
            XML.writeAttributeString('NV', "7701001");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();

        };
        eExam["eExam.01"]=_val;

        /////////eExam.02
        var _exam = [];
        var _val = [] ;
        _exam = getValue(_exArr, "eExam.02");
        if (pExam.HasDataSet == true)
        {
            if (_exam.IsNull == true) 
            {
                if(_exam.HasPN==true)
                {              
                    if (_exam.PN == "Refused")
                    {
                        _val.push("8801019")
                        XML.writeStartElement('eExam.02');
                        XML.writeAttributeString('PN', "8801019");
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();

                        _pArr2.push({ section: "E16", element: "E16_02", val: v2NOT_KNOWN });
                    }
                    else 
                    {
                        _val.push("8801023")
                        XML.writeStartElement('eExam.02');
                        XML.writeAttributeString('PN', "8801023");
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();
                        _pArr2.push({ section: "E16", element: "E16_02", val: v2NOT_KNOWN });
                    }
                }
                else 
                {        
                    if (isRequiredStateElement("eExam.02") == true) 
                    {
                        _pArr2.push({ section: "E16", element: "E16_02", val: v2NOT_RECORDED });
                        XML.writeStartElement('eExam.02');
                        XML.writeAttributeString('NV', "7701003");
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();
                        _val.push("7701003")                        
                    }
                    else 
                    {
                        _pArr2.push({ section: "E16", element: "E16_02", val: v2NOT_REPORTING });
                        _val.push("7701005")                        
                        XML.writeStartElement('eExam.02');
                        XML.writeAttributeString('NV', "7701005");
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();
                    }
                }
            }
            else 
            {  
                _val.push(_exam.ValueArray[0].val);
                XML.writeElementString("eExam.02", _val);
                _pArr2.push({ section: "E16", element: "E16_02", val: _val });    
            }
        }
        else
        {
            _pArr2.push({ section: "E16", element: "E16_02", val: v2NOT_APPLICABLE });
            _val.push("7701001")
            XML.writeStartElement('eExam.02');
            XML.writeAttributeString('NV', "7701001");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();

        };
        eExam["eExam.02"]=_val;

        var AssessmentArray = [];
        if (pExam.HasDataSet == true) {
            _sectionIndex = getSectionIndex(pExam, "eExam.AssessmentGroup");

            for (var xx = 0; xx < _sectionIndex.length; xx++) {
                var _Ag = [];
                var _assArr = pExam.attributes.sections[xx].attributes.elements;
        
                /////////eExam.03
                var _exam = [];
                var _val = [] ;
                _exam = getValue(_assArr, "eExam.03");
                if (_exam.IsNull != true) {
                    _val.push(_exam.ValueArray[0].val);
                    XML.writeElementString("eExam.03", _val);
                    _Ag.push({ section: "E16", element: "E16_03", val: _val });
                };
                AssessmentGroup["eExam.03"]=_val;


                /////////eExam.04
                var _exam = [];
                var _val = [] ;

                _exam = getValue(_assArr, "eExam.04");
                if (_exam.IsNull != true) {
                    var arr2 = [];
                    for (var i = 0; i < _exam.ValueArray.length; i++) {
                        if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) {
                            _val.push(_exam.ValueArray[i].val);
                            XML.writeElementString("eExam.04", _val);
                            arr2.push(setV2("eExam.04", _val));
                        }
                    };
                    _Ag.push({ section: "E16", element: "E16_04", val: arr2.slice(0) });
                };
                AssessmentGroup["eExam.04"]=_val;

                /////////eExam.05
                var _exam = [];
                var _val = [] ;

                _exam = getValue(_assArr, "eExam.05");
                if (_exam.IsNull != true) {
                    if (_exam.IsNull.HasPN == true) {
                        _val.push( "8801005");
                        XML.writeStartElement('eExam.05');
                        XML.writeAttributeString('PN', "8801005");
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();
                    }
                }
                else {
                    var arr2 = [];
                    for (var i = 0; i < _exam.ValueArray.length; i++) {
                        if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) {
                            _val.push(_exam.ValueArray[i].val)
                            XML.writeElementString("eExam.05", _val);
                            arr2.push(setV2("eExam.05", _val));
                        }
                    };
                    _pArr2.push({ section: "E16", element: "E16_05", val: arr2.slice(0) });
                };
                AssessmentGroup["eExam.05"]=_val;

                /////////eExam.06
                var _exam = [];
                var _val = [] ;

                _exam = getValue(_assArr, "eExam.06");
                if (_exam.IsNull == true) {
                    if (_exam.IsNull.HasPN == true) {
                        _val.push( "8801005");
                        XML.writeStartElement('eExam.06');
                        XML.writeAttributeString('PN', "8801005");
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();
                    }
                }
                else {
                    var arr1 = [];
                    for (var i = 0; i < _exam.ValueArray.length; i++) {
                        if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) {
                            _val.push(_exam.ValueArray[i].val);
                            XML.writeElementString("eExam.06", _val);
                            arr1.push(_val);
                        }
                    };
                    _eExam.Value = arr1.slice(0);
                };
                AssessmentGroup["eExam.06"]=_val;

                /////////eExam.07
                var _exam = [];
                var _val = [] ;
                _exam = getValue(_assArr, "eExam.07");
                if (_exam.IsNull == true) {
                    if (_exam.IsNull.HasPN == true) 
                    {
                        _val.push( "8801005");
                        XML.writeStartElement('eExam.07');
                        XML.writeAttributeString('PN', "8801005");
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();
                    }
                }
                else 
                {
                    var arr1 = [];
                    var arr2 = [];
                    for (var i = 0; i < _exam.ValueArray.length; i++) 
                    {
                        if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) 
                        {
                            _val.push(_exam.ValueArray[i].val);
                            XML.writeElementString("eExam.07", _val);
                            arr2.push(setV2("eExam.07", _val));
                        }
                    }
                };
                _pArr2.push({ section: "E16", element: "E16_06", val: arr2.slice(0) });                  
                AssessmentGroup["eExam.03"]=_val;

                /////////eExam.08
                var _exam = [];
                var _val = [] ;

                _exam = getValue(_assArr, "eExam.08");
                if (_exam.IsNull == true) {
                    if (_exam.IsNull.HasPN == true) 
                    {                    
                        _val.push( "8801005");
                        XML.writeStartElement('eExam.08');
                        XML.writeAttributeString('PN', "8801005");
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();
                    }
                }
                else {
                    var arr2 = [];
                    for (var i = 0; i < _exam.ValueArray.length; i++) 
                    {
                        if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) 
                        {
                            _val.push(_exam.ValueArray[i].val);                
                            XML.writeElementString("eExam.08", _val);
                            arr2.push(setV2("eExam.08", _val));
                        }
                    };
                    _Ag.push({ section: "E16", element: "E16_07", val: arr2.slice(0) });                    
                };
                AssessmentGroup["eExam.08"]=_val;

                /////////eExam.09
                var _exam = [];
                var _val = [] ;

                _exam = getValue(_assArr, "eExam.09");
                if (_exam.IsNull == true) {
                    if (_exam.IsNull.HasPN == true) {
                        _val.push( "8801005");
                        XML.writeStartElement('eExam.09');
                        XML.writeAttributeString('PN', "8801005");
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();
                    }
                }
                else {
                    var arr2 = [];
                    for (var i = 0; i < _exam.ValueArray.length; i++) 
                    {
                        if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) 
                        {
                            _val.push(_exam.ValueArray[i].val);
                            XML.writeElementString("eExam.09", _val);
                            arr2.push(setV2("eExam.09", _val));
                        };
                        _Ag.push({ section: "E16", element: "E16_08", val: arr2.slice(0) });
                    }
                };

                AssessmentGroup["eExam.09"]=_val;

                
                /////////eExam.12
                var _exam = [];
                var _val = [] ;

                _exam = getValue(_assArr, "eExam.12");
                if (_exam.IsNull == true) {
                    if (_exam.IsNull.HasPN == true) {
                        _val.push( "8801005");
                        XML.writeStartElement('eExam.12');
                        XML.writeAttributeString('PN', "8801005");
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();
                    }
                }
                else {
                    var arr2 = [];
                    for (var i = 0; i < _exam.ValueArray.length; i++) {
                        if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) {
                            _val.push(_exam.ValueArray[i].val);
                            XML.writeElementString("eExam.12", _val);
                            arr2.push(setV2("eExam.12", _val));
                        }
                    };
                    _pArr2.push({ section: "E16", element: "E16_13", val: arr2.slice(0) });
                };
                AssessmentGroup["eExam.12"]=_val;
                

                /////////eExam.19
                var _exam = [];
                var _val = [] ;

                _exam = getValue(_assArr, "eExam.19");
                if (_exam.IsNull == true) {
                    if (_exam.IsNull.HasPN == true) {
                        _val.push( "8801005");
                        XML.writeStartElement('eExam.19');
                        XML.writeAttributeString('PN', "8801005");
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();
                    }
                }
                else {
                    var arr2 = [];
                    for (var i = 0; i < _exam.ValueArray.length; i++) {
                        if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) {
                            _val.push(_exam.ValueArray[i].val);
                            XML.writeElementString("eExam.19", _val);
                            arr2.push(setV2("eExam.19", _val));
                        }
                    };
                    _pArr2.push({ section: "E16", element: "E16_23", val: arr2.slice(0) });
                };
                AssessmentGroup["eExam.19"]=_val;

                /////////eExam.20
                var _exam = [];
                var _val = [] ;

                _exam = getValue(_assArr, "eExam.20");
                if (_exam.IsNull == true) {
                    if (_exam.IsNull.HasPN == true) {
                        _val.push( "8801005");
                        XML.writeStartElement('eExam.20');
                        XML.writeAttributeString('PN', "8801005");
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();
                    }
                }
                else {
                    var arr2 = [];
                    for (var i = 0; i < _exam.ValueArray.length; i++) {
                        if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) {
                            _val.push(_exam.ValueArray[i].val_;
                            arr2.push(setV2("eExam.20", _val));
                        }
                    };
                    _pArr2.push({ section: "E16", element: "E16_24", val: arr2.slice(0) });
                };
                AssessmentGroup["eExam.20"]=_val;                
                AssessmentArray.push(AssessmentGroup)
                eExam.AssessmentGroup = AssessmentArray.slice(0);
                delete _eExam;

                //AbdomenGroup////////////////////////////////////////////////////////////////////
                var AbdomenGroup = {};
                var AbdomenGroupArray = [];
                _s1 = getSectionIndex(pExam.attributes.sections[xx], "eExam.AbdomenGroup");
                if (_s1 != -1) {
                    for (var x = 0; x <= _s1.length-1; x++)
                    {
                        var _abdArr = [];

                        _ex1 = pExam.attributes.sections[xx].attributes.sections[_s1[x]].attributes.elements;
                        

                        /////////eExam.10
                        var _exam = [];
                        var _val = [] ;
                        var _ex1 = []

                        _exam = getValue(pExam.attributes.sections[xx].attributes.sections[_s1[x]].attributes.elements, "eExam.10");

                        console.log(_exam)
                        if (_exam.IsNull != true)
                        {
                            _val.push(_exam.ValueArray[0].val);
                            XML.writeElementString("eExam.10", _val);
                        };
                        AbdomenGroup["eExam.10"]=_val;          
                        
                        /////////eExam.11
                        var _exam = [];
                        var _val = [] ;

                        _exam = getValue(_assArr, "eExam.11");
                        if (_exam.IsNull == true) 
                        {
                            if (_exam.IsNull.HasPN == true) 
                            {
                                _val.push( "8801005");
                                XML.writeStartElement('eExam.11');
                                XML.writeAttributeString('PN', "8801005");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();
                            }
                        }
                        else 
                        {
                            var arr2 = [];
                            for (var i = 0; i < _exam.ValueArray.length; i++) 
                            {
                                if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) {
                                    _val.push(_exam.ValueArray[i].val);
                                    XML.writeElementString("eExam.11", _val);
                                    arr2.push(setV2("eExam.11", _val));
                                }
                            };
                            _pArr2.push({ section: "E16", element: "E16_09", val: arr2.slice(0) });
                        };

                        AbdomenGroup["eExam.10"]=_val;          
                        
                    };
                        
                };
                console.log(AbdomenGroupArray)

                ////////////////////
                var SpineGroupArray = [];
                var SpineGroup = {};
                _s2 = getSectionIndex(pExam.attributes.sections[xx], "eExam.SpineGroup");
                if (_s2 != -1)
                { 
                    for (var x = 0; x < _s2.length; x++) 
                    {
                        var _spGrp = [];
                        var _ex1 = [];

                        _ex1 = pExam.attributes.sections[xx].attributes.sections[_s2[x]].attributes.elements;
                        console.log(_ex1)

                        /////////eExam.13
                        var _exam = [];
                        var _val = [] ;

                        console.log("_exam13")
                        console.log(_ex1)
                        _exam = getValue(_ex1, "eExam.13");
                        console.log("_exam13")
                        console.log(_exam)
                        if (_exam.IsNull != true)
                        {
                            _val.push(_exam.ValueArray[0].val);
                            XML.writeElementString("eExam.13", _val);
                            
                        };
                        SpineGroup["eExam.13"]=_val;                              
                        
                        /////////eExam.14
                        var _exam = [];
                        var _val = [] ;
                        _exam = getValue(_ex1, "eExam.14");
                        if (_exam.IsNull == true) 
                        {
                            if (_exam.IsNull.HasPN == true) 
                            {
                                _val.push( "8801005");
                                XML.writeStartElement('eExam.14');
                                XML.writeAttributeString('PN', "8801005");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();
                            }
                        }
                        else 
                        {
                            var arr1 = [];
                            var arr2 = [];
                            for (var i = 0; i < _exam.ValueArray.length; i++) 
                            {
                                if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) 
                                {
                                    _val.push(_exam.ValueArray[i].val);
                                    XML.writeElementString("eExam.14", _val);                                    
                                    arr2.push(setV2("eExam.14", _val));
                                }
                            };
                            _pArr2.push({ section: "E16", element: "E16_14", val: arr2.slice(0) });
                            _eExam.Value = arr1.slice(0);
                        };

                        SpineGroup["eExam.14"]=_val;                              

                        SpineGroupArray.push(SpineGroup)

                    };
                };
                                
                ///////////////////////// ////////////////////
                var ExtremityGroupArray = [];
                var ExtremityGroup = {};
                _s3 = getSectionIndex(pExam.attributes.sections[xx], "eExam.ExtremityGroup");                
                if (_s3 != -1)
                {
                    for (var x = 0; x < _s3.length; x++) 
                    {
                        var _ex2 = [];
                        var _exGrp = [];
                        _ex2 = pExam.attributes.sections[xx].attributes.sections[_s3[x]].attributes.elements;
                        console.log(_ex2)


                        /////////eExam.15
                        var _exam = [];
                        var _val = [] ;
                        var _ex1 = []
                        _exam = getValue(_ex2, "eExam.15");

                        console.log(_exam)
                        if (_exam.IsNull != true)
                        {
                            _val.push_exam.ValueArray[0].val);
                            XML.writeElementString("eExam.15", _val);
                        };
                        ExtremityGroup["eExam.15"]=_val;                              
                        
                        /////////eExam.16
                        var _exam = [];
                        var _val = [] ;

                        _exam = getValue(_ex2, "eExam.16");
                        if (_exam.IsNull == true) 
                        {
                            if (_exam.IsNull.HasPN == true) 
                            {
                                _val.push( "8801005");
                                XML.writeStartElement('eExam.16');
                                XML.writeAttributeString('PN', "8801005");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();
                            }
                        }
                        else 
                        {
                            var arr2 = [];
                            for (var i = 0; i < _exam.ValueArray.length; i++) 
                            {
                                if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) 
                               
                                    _val.push(_exam.ValueArray[i].val);
                                    XML.writeElementString("eExam.16", _val);                                    
                                    arr2.push(setV2("eExam.16", _val));
                                }
                            };
                            _pArr2.push({ section: "E16", element: "E16_16", val: arr2.slice(0) });
                        };

                    ExtremityGroup["eExam.15"]=_val;                              
                        ExtremityGroupArray.push(_exGrp)
                    }
                };

/////////////////////////////////////////////
            var EyeGroupArray = [];
            var EyeGroup = {};
                _s4 = getSectionIndex(pExam.attributes.sections[xx], "eExam.EyeGroup");                
                if (_s4 != -1)
                { 
                    for (var x = 0; x < _s4.length; x++) 
                    {
                        var _ex3 = [];
                        var _eyGrp = [];
                        _ex3 = pExam.attributes.sections[xx].attributes.sections[_s4[x]].attributes.elements;
                        console.log(_ex3)

                        /////////eExam.17
                        var _exam = [];
                        var _val = [] ;

                        _exam = getValue(_ex3, "eExam.17");
                        if (_exam.IsNull != true)
                        {
                            _val.push(_exam.ValueArray[0].val);
                            XML.writeElementString("eExam.17", _val);
                        };
                        EyeGroup["eExam.17"]=_val;                          
                        
                        /////////eExam.18
                        var _exam = [];
                        var _val = [] ;

                        _exam = getValue(_ex3, "eExam.18");
                        if (_exam.IsNull == true) 
                        {
                            if (_exam.IsNull.HasPN == true) 
                            {
                                _val.push( "8801005");
                                XML.writeStartElement('eExam.16');
                                XML.writeAttributeString('PN', "8801005");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();
                            }
                        }
                        else 
                        {
                            var arr1 = [];
                            var arr2 = [];
                            for (var i = 0; i < _exam.ValueArray.length; i++) 
                            {
                                if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) 
                                {
                                    _val.push(_exam.ValueArray[i].val);
                                    XML.writeElementString("eExam.18", _val);
                                    arr2.push(setV2("eExam.18", _val));
                                }
                            };
                            _pArr2.push({ section: "E16", element: "E16_21", val: arr2.slice(0) });
                        };

                        EyeGroup["eExam.17"]=_val;                          
                        EyeGroupArray.push(EyeGroup)
                    }
                };
                
                
            }

        }
        eExam.Version3 = _pArr;
        return eExam;


};
var seteVitals = function (pVitals, Call) {
    var eVitals = new Object();
    console.log(pVitals)
    var _vitals = new Object();
    var VitalGroup = new Object();
    var v2Array = [];


    if (pVitals.HasDataSet == true) {
        pVitals.IsValid = true;
        /*   ////////Check for cancelled calls, Standby, non-patient
           if ((Call.HasPatient == true) && (Call.HasTreatment == true) && (eResponse.StandBy == false)) {
               eVitals.IsValid = true;
           }
           else {
               setnA
               return eVitals;
           };
          */
        var _sectionIndex = [];
        _sectionIndex = getSectionIndex(pVitals, "eVitals.VitalGroup")
        var _pArr2 = [];
        var VitalsGroup = [];
        for (var xx = 0; xx < _sectionIndex.length; xx++) {
            var _vg = [];
            var _eL = pVitals.attributes.sections[_sectionIndex[xx]].attributes.elements;
            console.log(_eL)

            //eVital.01/////////////////////////////
            var _val=[];
            var _vitals=[];
            _vitals = getValue(_eL, "eVitals.01");
            if (eVitals.IsValid == true) {
                if (_vitals.IsNull == true) {
                    _val.push("7701003")
                    XML.writeStartElement('eVitals.01');
                    XML.writeAttributeString('NV', "7701003");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                }
                else {
                    _val.push(_vitals.ValueArray[0].val);
                    XML.writeElementString("eVitals.01", _val);                    
                    _pArr2.push({ section: "E14", element: "E14_01", val: _val });
                }
            }
            else {
                _val.push("7701001")
                XML.writeStartElement('eVitals.01');
                XML.writeAttributeString('NV', "7701001");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
            };
            eVitals["eVitals.01"]=_val;

            //eVital.02/////////////////////////////
            var _val=[];
            var _vitals=[];
            _vitals = getValue(_eL, "eVitals.02");
            if (eVitals.IsValid == true) 
            {
                if (_vitals.IsNull == true) 
                {
                    _pArr2.push({ section: "E14", element: "E14_02", val: v2NOT_RECORDED });
                    _val.push("7701003")
                    XML.writeStartElement('eVitals.02');
                    XML.writeAttributeString('NV', "7701003");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                }
                else
                {
                    _val.push(_vitals.ValueArray[0].val);
                    XML.writeElementString("eVitals.02", _val);
                    _pArr2.push({ section: "E14", element: "E14_02", val: setV2("eVitals.02", _val) });
                }
            }
            else
            {
                _pArr2.push({ section: "E14", element: "E14_02", val: v2NOT_APPLICABLE });    
                _val.push("7701001")
                XML.writeStartElement('eVitals.02');
                XML.writeAttributeString('NV', "7701001");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();

            };
            eVitals["eVitals.02"]=_val;

            ///////////////////////////////////////////            
            var _sectionIndex1 = "";
            _sectionIndex1 = getSectionIndex(pVitals.attributes.sections[xx], "eVitals.CardiacRhythmGroup")
            if (_sectionIndex1 != -1)
            {
                var _eCRG = [];
                var _eCRG = pVitals.attributes.sections[_sectionIndex[xx]].attributes.sections[_sectionIndex1].attributes.elements;

                //eVital.03/////////////////////////////
                var _val=[];
                var _vitals=[];
                _vitals = getValue(_eCRG, "eVitals.03");
                console.log(_vitals)
                eVitals.HasECG = false;
                if (eVitals.IsValid == true) 
                {
                    if (_vitals.IsNull == true)
                    {
                        if (_vitals.HasPN == true) {
                            if (_vitals.pn == "Refused") {
                                _val.push("8801019")
                                XML.writeStartElement('eVitals.03');
                                XML.writeAttributeString('PN', "8801019");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();
                                _pArr2.push({ section: "E14", element: "E14_03", val: v2NOT_KNOWN });
                            }
                            else if (_vitals.pn == "UnableToComplete") {

                                _val.push("8801023")
                                XML.writeStartElement('eVitals.03');
                                XML.writeAttributeString('PN', "8801023");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                                _pArr2.push({ section: "E14", element: "E14_03", val: v2NOT_KNOWN });
                            }
                        }
                        else
                        {
                            if (isRequiredStateElement("eVital.03") == true)
                            {
                                _pArr2.push({ section: "E14", element: "E14_03", val: v2NOT_RECORDED });
                                _eVitals.NV="7701003";
                                XML.writeStartElement('eVitals.03');
                                XML.writeAttributeString('NV', "7701003");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                            }
                        }
                    }
                    else
                    {
                        var arr2 = [];                        
                        for (var i = 0; i <= _vitals.ValueArray.length-1; i++)
                        {
                            if ((_vitals.ValueArray[i].HasValue == true) && (_val.indexOf(_vitals.ValueArray[i].val) == -1))
                            {
                                _val.push( _vitals.ValueArray[i].val);
                                XML.writeElementString("eVitals.03", _val);
                                eVitals.HasECG = true;
                                arr2.push(setV2("eVitals.03", _val));                                
                            };
                        }
                        _pArr2.push({ section: "E14", element: "E14_03", val: arr2.slice(0) });
    
                    }
                }
                else
                {
                    _eVitals.NV="7701001";
                    XML.writeStartElement('eVitals.03');
                    XML.writeAttributeString('NV', "7701001");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();                    
                };
                eVitals["eVitals.03"]=_val;                
                
                //eVital.04/////////////////////////////
                var _val=[];
                var _vitals=[];                
                _vitals = getValue(_eCRG, "eVitals.04");
                if (eVitals.HasECG == true) 
                {
                    if (_vitals.IsNull == true) 
                    {
                        if (isRequiredStateElement("eVitals.04"))
                        {
                            _val.push("7701003");
                            XML.writeStartElement('eVitals.04');
                            XML.writeAttributeString('NV', "7701003");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();
                        }
                    }
                    else
                    {
                        _val.push(_vitals.ValueArray[0].val);
                        XML.writeElementString("eVitals.04", _val);
                        _eVitals.HasData = true;
                        _eVitals.Value = _val;
                    }
                }
                else
                {
                    _val.push("7701001");
                    XML.writeStartElement('eVitals.04');
                    XML.writeAttributeString('NV', "7701001");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                };
                eVitals["eVitals.04"]=_val;                
                
                //eVital.05/////////////////////////////
                var _val=[];
                var _vitals=[];
                _vitals = getValue(_eCRG, "eVitals.05");
                
                if (eVitals.HasECG == true)
                {
                    if (_vitals.IsNull == true) 
                    {
                        _val.push("7701003");
                        XML.writeStartElement('eVitals.05');
                        XML.writeAttributeString('NV', "7701003");
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();

                    }
                    else {
                        var arr2 = [];
                        for (var i = 0; i <= _vitals.ValueArray.length-1; i++)
                        {
                            console.log(i)
                            console.log(_vitals.ValueArray[i].val)
                            if ((_vitals.ValueArray[i].HasValue == true) && (_val.indexOf(_vitals.ValueArray[i].val) == -1))
                            {
                                _val.push(_vitals.ValueArray[i].val);
                                XML.writeElementString("eVitals.05", _val);
                                _eVitals.HasData = true;
                                arr2.push(setV2("eVitals.05", _val));
                            }
                        }
                    };
                    _eVitals.Value = arr1.slice(0);
                }
            }
            else
            {
                 
                _val.push("7701001");                 
                XML.writeStartElement('eVitals.05');
                XML.writeAttributeString('NV', "7701001");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();

            };
            eVitals["eVitals.05"]=_val;                
        
        ///////////////////////////////////////////            
        var _sectionIndex2 = "";        
        _sectionIndex2 = getSectionIndex(pVitals.attributes.sections[xx], "eVitals.BloodPressureGroup")
        console.log(_sectionIndex2)
        if (_sectionIndex2 != -1)
        {
            var _eBP = [];
            var _eBP = pVitals.attributes.sections[_sectionIndex[xx]].attributes.sections[_sectionIndex2].attributes.elements;

            
                //eVital.06/////////////////////////////
            var _val=[];
            var _vitals=[];
                _vitals= getValue(_eBP, "eVitals.06");
                eVitals.SBP = false;
                if (eVitals.IsValid == true) 
                {
                    if (_vitals.IsNull == true) 
                    {                    
                        if (_vitals.HasPN == true)
                        {
                            if (_vitals.pn == "ExamFindingNotPresent")
                            {
                                _val.push("8801005")
                                XML.writeStartElement('eVitals.06');
                                XML.writeAttributeString('PN', "8801005");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                                _pArr2.push({ section: "E14", element: "E14_04", val: v2NOT_KNOWN });
                            }
                            else if (_vitals.pn == "Refused")
                            {
                                _val.push("8801019")
                                XML.writeStartElement('eVitals.03');
                                XML.writeAttributeString('PN', "8801019");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                                _pArr2.push({ section: "E14", element: "E14_04", val: v2NOT_KNOWN });
                            }
                            else if (_vitals.pn == "UnableToComplete")
                            {
                                _val.push("8801023")
                                XML.writeStartElement('eVitals.06');
                                XML.writeAttributeString('PN', "8801023");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();
                                
                                _pArr2.push({ section: "E14", element: "E14_04", val: v2NOT_KNOWN });
                            
                            }
                            else
                            {
                                if (isRequiredStateElement("eVitals.06"))
                                {
                                    _val.push("7701003")
                                    XML.writeStartElement('eVitals.06');
                                    XML.writeAttributeString('NV', "7701003");
                                    XML.writeAttributeString('xsi:nil', 'true');
                                    XML.writeEndElement();

                                    _pArr2.push({ section: "E14", element: "E14_04", val: v2RECORDED });
                                }
                                else
                                {
                                
                                    _pArr2.push({ section: "E14", element: "E14_04", val: v2NOT_REPORTING });
                                    _val.push("7701005")
                                    XML.writeStartElement('eVitals.06');
                                    XML.writeAttributeString('NV', "7701005");
                                    XML.writeAttributeString('xsi:nil', 'true');
                                    XML.writeEndElement();

                                }
                            }
                        }
                    }
                    else
                    {
                        _val.push(_vitals.ValueArray[0].val);
                        XML.writeElementString("eVitals.06", _val);
                        _pArr2.push({ section: "E14", element: "E14_04", val: _val });
                    }
                }
                else
                {
                    _pArr2.push({ section: "E14", element: "E14_04", val: v2NOT_APPLICABLE });
                    _val.push("7701001")
                    XML.writeStartElement('eVitals.06');
                    XML.writeAttributeString('NV', "7701001");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                };
                eVitals["eVitals.06"]=_val;                
            
                //eVitals.07/////////////////////////////
                var _val=[];
                var _vitals=[];
                _vitals = getValue(_eBP, "eVitals.07");
                eVitals.DBP = false;
                if (eVitals.IsValid == true) 
                {
                    if (_vitals.IsNull == true) 
                    {
                        if (_vitals.HasPN == true)
                        {
                            if (_vitals.pn == "ExamFindingNotPresent")
                            {
                                _val.push("8801005")
                                XML.writeStartElement('eVitals.07');
                                XML.writeAttributeString('PN', "8801005");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                                _pArr2.push({ section: "E14", element: "E14_04", val: v2NOT_KNOWN });
                            }
                            else if (_vitals.pn == "Refused")
                            {
                                _val.push("8801019")
                                XML.writeStartElement('eVitals.07');
                                XML.writeAttributeString('PN', "8801019");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                                _pArr2.push({ section: "E14", element: "E14_04", val: v2NOT_KNOWN });
                            }
                            else if (_vitals.pn == "UnableToComplete")
                            {
                                _val.push("8801023")
                                XML.writeStartElement('eVitals.07');
                                XML.writeAttributeString('PN', "8801023");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                                _pArr2.push({ section: "E14", element: "E14_04", val: v2NOT_KNOWN });                            
                            }                        
                        }
                        else {
                            if (isRequiredStateElement("eVitals.07")) 
                            {
                                _pArr2.push({ section: "E14", element: "E14_05", val: v2NOT_RECORDED });
                                _val.push("7701003")
                                XML.writeStartElement('eVitals.07');
                                XML.writeAttributeString('NV', "7701003");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                            }
                            else {
                                _pArr2.push({ section: "E14", element: "E14_05", val: v2NOT_REPORTING });
                                _val.push("7701005")
                                XML.writeStartElement('eVitals.07');
                                XML.writeAttributeString('NV', "7701005");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                            }
                        }
                    }
                    else 
                    {
                        _val.push(_vitals.ValueArray[0].val);
                        XML.writeElementString("eVitals.07", _val);
                        _pArr2.push({ section: "E14", element: "E14_05", val: _val });
                    }
                }
                else 
                {
                    XML.writeStartElement('eVitals.07');
                    XML.writeAttributeString('NV', "7701001");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                    _pArr2.push({ section: "E14", element: "E14_05", val: v2NOT_APPLICABLE });
                    _val.push("7701001");
                };
                eVitals["eVitals.07"]=_val;                                        
                //eVital.08/////////////////////////////
                var _val=[];
                var _vitals=[];

                _vitals = getValue(_eBP, "eVitals.08");
                if ((eVitals.DBP == true) &&(eVitals.SBP== true))   //We have good BP
                {
                    if (_vitals.IsNull == true) 
                    {
                        if (isRequiredStateElement("eVitals.08")) {
                            _val.push("7701003");
                            XML.writeStartElement('eVitals.08');
                            XML.writeAttributeString('NV', "7701003");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();
                        }
                    }
                    else 
                    {
                        _val.push(_vitals.ValueArray[0].val);
                        XML.writeElementString("eVitals.08", _val);
                        _pArr2.push({ section: "E14", element: "E14_05", val: setV2("eVitals.08", _val) });
                    }
                }
                else
                {
                    _val.push("7701001");
                    XML.writeStartElement('eVitals.08');
                    XML.writeAttributeString('NV', "7701001");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                    _pArr2.push({ section: "E14", element: "E14_05", val: null });                
                };
                eVitals["eVitals.06"]=_val;                                        

            
            //eVital.09/////////////////////////////               
                var _val=[];
                var _vitals=[];
                _vitals = getValue(_eBP, "eVitals.09");

                if ((eVitals.SBP == true) && (eVitals.DBP == true)) {
                    if (_vitals.IsNull != true) 
                    {
                        _val.push(_vitals.ValueArray[0].val);
                        XML.writeElementString("eVitals.09", _val);
                        _eVitals.HasData = true;
                        _eVitals.Value = _val   
                    }
                }
                else
                {
                    if ((eVitals.SBP == true) && (eVitals.DBP == false)) {
                        eVitals.HasErrors = true;
                        eVitals.Error="Missing DBP Value" 
                    };
                    if ((eVitals.SBP == false) && (eVitals.DBP == true)) {
                        eVitals.HasErrors = true;
                        eVitals.Error="Missing SBP Value"
                    };            
                };
                eVitals["eVitals.09"]=_val;                                                    
        ///////////////////////////////////////////            
                var _sectionIndex3 = [];
                _sectionIndex3 = getSectionIndex(pVitals, "eVitals.HeartRateGroup")
                if (_sectionIndex3 != -1)
                {
                    var _eHG = pVitals.attributes.sections[_sectionIndex3[xx]].attributes.elements;

                //eVital.10/////////////////////////////               
                    var _val=[];
                    var _vitals=[];

                _vitals = getValue(_eHG, "eVitals.10");
                eVitals.IsHeartRateMonitored = false;
                if (eVitals.IsValid == true) 
                {
                    if (_vitals.IsNull == true) 
                    {
                        if (_vitals.HasPN == true)
                        {
                            if (_vitals.pn== "UnabletoComplete")
                            {
                                _val.push("8801023")
                                XML.writeStartElement('eVitals.03');
                                XML.writeAttributeString('PN', "8801023");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                                
                                _pArr2.push({ section: "E14", element: "E14_07", val: v2NOT_KNOWN });
            
                            }
                            else if (_vitals.pn == "Refused")
                            {
                                _val.push("8801019")
                                XML.writeStartElement('eVitals.10');
                                XML.writeAttributeString('PN', "8801019");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                                _pArr2.push({ section: "E14", element: "E14_07", val: v2NOT_KNOWN });
                            }
                            else if (_vitals.pn == "ExamFindingNotPresent")
                            {
                                _val.push("8801005")
                                XML.writeStartElement('eVitals.10');
                                XML.writeAttributeString('PN', "8801005");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                                _pArr2.push({ section: "E14", element: "E14_07", val: v2NOT_KNOWN });                                
                            }
                            else
                            {
                                if (isRequiredStateElement("eVitals.10"))
                                {
                                    _pArr2.push({ section: "E14", element: "E14_07", val: v2RECORDED });
                                    _val.push("7701003");
                                    XML.writeStartElement('eVitals.10');
                                    XML.writeAttributeString('NV', "7701003");
                                    XML.writeAttributeString('xsi:nil', 'true');
                                    XML.writeEndElement();

                                }
                                else
                                {
                                    _pArr2.push({ section: "E14", element: "E14_07", val: v2NOT_REPORTING });
                                    _val.push( "7701005");
                                    XML.writeStartElement('eVitals.10');
                                    XML.writeAttributeString('NV', "7701005");
                                    XML.writeAttributeString('xsi:nil', 'true');
                                    XML.writeEndElement();

                                }
                            }
                        }
                    }
                    else
                    {
                        _val.push(_vitals.ValueArray[0].val);
                        XML.writeElementString("eVitals.10", _val);
                        _pArr2.push({ section: "E14", element: "E14_07", val: _val });
                    }
                }
                else
                {
                    _val.push("7701001");
                    XML.writeStartElement('eVitals.10');
                    XML.writeAttributeString('NV', "7701001");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                };
                eVitals["eVitals.10"]=_val;                                                                

                //eVital.11/////////////////////////////               
                var _val=[];
                var _vitals=[];
                _vitals = getValue(_eHG, "eVitals.11");
                
                if(eVitals.IsHeartRateMonitored == true)
                {
                    if (_vitals.IsNull != true) 
                    {
                        _val.push(_vitals.ValueArray[0].val);
                        XML.writeElementString("eVitals.11", _val);
                        _eVitals.HasData = true;
                        _eVitals.Value = _val

                    }
                };
                eVitals["eVitals.11"]=_val;                                                    

                //eVitals.12/////////////////////////////
                var _val=[];
                var _vitals=[];
                _vitals = getValue(_eL, "eVitals.12");
                if (eVitals.IsValid == true) 
                {
                    if (_vitals.IsNull == true) 
                    {
                        if(_vitals.HasPN==true)
                        {
                            if (_vitals.pn== "UnabletoComplete")
                            {
                                _val.push("8801023")
                                XML.writeStartElement('eVitals.12');
                                XML.writeAttributeString('PN', "8801023");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                                _pArr2.push({ section: "E14", element: "E14_07", val: v2NOT_KNOWN });
            
                            }
                            else if (_vitals.pn == "Refused")
                            {
                                _val.push("8801019")
                                XML.writeStartElement('eVitals.12');
                                XML.writeAttributeString('PN', "8801019");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                                _pArr2.push({ section: "E14", element: "E14_07", val: v2NOT_KNOWN });
                            }
                            else if (_vitals.pn == "ExamFindingNotPresent")
                            {
                                _val.push("8801005")
                                XML.writeStartElement('eVitals.12');
                                XML.writeAttributeString('PN', "8801005");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                                _pArr2.push({ section: "E14", element: "E14_07", val: v2NOT_KNOWN });                                
                            }
                        }
                        else 
                        {
                            if (isRequiredStateElement("eVitals.12")) 
                            {
                            
                                _pArr2.push({ section: "E14", element: "E14_09", val: v2NOT_RECORDED });
                                _val.push("7701003");
                                XML.writeStartElement('eVitals.12');
                                XML.writeAttributeString('NV', "7701003");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                            }
                            else {
                                _pArr2.push({ section: "E14", element: "E14_09", val: v2NOT_REPORTING });
                                _val.push("7701005");
                                XML.writeStartElement('eVitals.12');
                                XML.writeAttributeString('NV', "7701005");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                            }
                        }
                    }
                    else 
                    {
                        _val.push(_vitals.ValueArray[0].val);
                        XML.writeElementString("eVitals.12", _val);
                        _pArr2.push({ section: "E14", element: "E14_09", val: _val });
                    }
                }
                else
                {
                    _pArr2.push({ section: "E14", element: "E14_09", val: v2NOT_APPLICABLE });
                    _val.push("7701001");
                    XML.writeStartElement('eVitals.12');
                    XML.writeAttributeString('NV', "7701001");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

    
                };
                eVitals["eVitals.12"]=_val;                                                    
                //eVital.13/////////////////////////////
                var _val=[];
                var _vitals=[];
                _vitals = getValue(_eL, "eVitals.13");
                if (eVitals.IsValid == true) 
                {
                    if (_vitals.IsNull != true) 
                    {
                        _val.push(_vitals.ValueArray[0].val);
                        XML.writeElementString("eVitals.13", _val);
                        _pArr2.push({ section: "E14", element: "E14_10", val: _val });
                    }
                };
                eVitals["eVitals.13"]=_val;                                                    
            
                //eVitals.14/////////////////////////////
                var _val=[];
                var _vitals=[];
                _vitals = getValue(_eL, "eVitals.14");
                if (eVitals.IsValid == true) 
                {
                    if (_vitals.IsNull == true) 
                    {
                        if(_vitals.HasPN==true)
                        {
                            if (_vitals.pn== "UnabletoComplete")
                            {
                                _val.push("8801023")
                                XML.writeStartElement('eVitals.14');
                                XML.writeAttributeString('PN', "8801023");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                                _pArr2.push({ section: "E14", element: "E14_11", val: v2NOT_KNOWN });
            
                            }
                            else if (_vitals.pn == "Refused")
                            {
                                _val.push("8801019")
                                XML.writeStartElement('eVitals.14');
                                XML.writeAttributeString('PN', "8801019");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                                _pArr2.push({ section: "E14", element: "E14_11", val: v2NOT_KNOWN });
                            }
                            else if (_vitals.pn == "ExamFindingNotPresent")
                            {
                                _val.push("8801005")
                                XML.writeStartElement('eVitals.14');
                                XML.writeAttributeString('PN', "8801005");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                                _pArr2.push({ section: "E14", element: "E14_11", val: v2NOT_KNOWN });                                
                            }
                        }
                        else 
                        {
                            if (isRequiredStateElement("eVitals.14")) 
                            {                            
                                _pArr2.push({ section: "E14", element: "E14_11", val: v2NOT_RECORDED });
                                _val.push( "7701003");
                                XML.writeStartElement('eVitals.14');
                                XML.writeAttributeString('NV', "7701003");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                            }
                            else {
                                _pArr2.push({ section: "E14", element: "E14_11", val: v2NOT_REPORTING });
                                _val.push( "7701005");
                                XML.writeStartElement('eVitals.14');
                                XML.writeAttributeString('NV', "7701005");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();
                            }
                        }
                    }
                    else 
                    {
                        _val.push(_vitals.ValueArray[0].val);
                        XML.writeElementString("eVitals.14", _val);
                        _pArr2.push({ section: "E14", element: "E14_11", val: _val });
                    }
                }
                else
                {
                    _pArr2.push({ section: "E14", element: "E14_11", val: v2NOT_APPLICABLE });
                    _val.push( "7701001");
                    XML.writeStartElement('eVitals.14');
                    XML.writeAttributeString('NV', "7701001");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                };
                eVitals["eVitals.14"]=_val;                                                    
            
                //eVital.15/////////////////////////////
                var _val=[];
                var _vitals=[];
            _vitals = getValue(businessObject.elements, "eVitals.15");
            if (eVitals.IsValid == true) 
            {
                if (_vitals.IsNull != true)                 
                {
                    _val.push(_vitals.ValueArray[0].val);
                    XML.writeElementString("eVitals.15", _val);
                    _pArr2.push({ section: "E14", element: "E14_12", val: setV2("eVitals.15", _val) });
                    
                }
            };
            eVitals["eVitals.15"]=_val;                                                    
            
                /////////////eVital.16
            var _val=[];
            var _vitals=[];
            _vitals = getValue(_eL, "eVitals.16");
            if (eVitals.IsValid == true) 
            {
                if (_vitals.IsNull == true) 
                {
                    if(_vitals.HasPN ==true)
                    {
                        if (_vitals.pn== "UnabletoComplete")
                        {
                            _val.push("8801023")
                            XML.writeStartElement('eVitals.16');
                            XML.writeAttributeString('PN', "8801023");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();

                            _pArr2.push({ section: "E14", element: "E14_13", val: v2NOT_KNOWN });
            
                        }
                        else if (_vitals.pn == "Refused")
                        {
                            _val.push("8801019")
                            XML.writeStartElement('eVitals.16');
                            XML.writeAttributeString('PN', "8801019");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();

                            _pArr2.push({ section: "E14", element: "E14_13", val: v2NOT_KNOWN });
                        }
                    }
                    else 
                    {
                        if (isRequiredStateElement("eVitals.16")) 
                        {
                            
                            _pArr2.push({ section: "E14", element: "E14_13", val: v2NOT_RECORDED });
                            _val.push("7701003");
                            XML.writeStartElement('eVitals.16');
                            XML.writeAttributeString('NV', "7701003");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();

                        }
                        else {
                            _pArr2.push({ section: "E14", element: "E14_13", val: v2NOT_REPORTING });
                            _val.push("7701005");
                            XML.writeStartElement('eVitals.16');
                            XML.writeAttributeString('NV', "7701005");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();

                        }
                    }
                }
                else 
                {
                    _val.push(_vitals.ValueArray[0].val);
                    XML.writeElementString("eVitals.16", _val);
                    _pArr2.push({ section: "E14", element: "E14_13", val: _val });
                }
            }
            else
            {
                _pArr2.push({ section: "E14", element: "E14_13", val: v2NOT_APPLICABLE });
                _val.push("7701001");    
                XML.writeStartElement('eVitals.16');
                XML.writeAttributeString('NV', "7701001");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();

            };
            eVitals["eVitals.16"]=_val;                                                            
            
            //eVitals.17/////////////////////////////
            var _val=[];
            var _vitals=[];
            _vitals = getValue(_eL, "eVitals.17");
            if (eVitals.IsValid == true) 
            {
                if (_vitals.IsNull == true) 
                {
                    if(_vitals.HasPN ==true)
                    {
                        if (_vitals.pn== "UnabletoComplete")
                        {
                            _val.push("8801023")
                            XML.writeStartElement('eVitals.17');
                            XML.writeAttributeString('PN', "8801023");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();

                        }
                        else if (_vitals.pn == "Refused")
                        {
                            _val.push("8801019")
                            XML.writeStartElement('eVitals.17');
                            XML.writeAttributeString('PN', "8801019");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();

                        }
                    }
                    else 
                    {
                        if (isRequiredStateElement("eVitals.17")) 
                        {
                            _val.push("7701003");
                            XML.writeStartElement('eVitals.17');
                            XML.writeAttributeString('NV', "7701003");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();
                        }
                        else {
                            _val.push("7701005");
                            XML.writeStartElement('eVitals.17');
                            XML.writeAttributeString('NV', "7701005");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();
                        }
                    }
                }
                else 
                {
                    _val.push(_vitals.ValueArray[0].val);
                    XML.writeElementString("eVitals.17", _val);
                }
            }
            else
            {
                Vitals_val.push("7701001");
                XML.writeStartElement('eVitals.17');
                XML.writeAttributeString('NV', "7701001");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();

            };
            eVitals["eVitals.17"]=_val;                                                            

            
                //eVitals.18/////////////////////////////
            var _val=[];
            var _vitals=[];
            _vitals = getValue(_eL, "eVitals.18");
            if (eVitals.IsValid == true) 
            {
                if (_vitals.IsNull == true) 
                {
                    if(_vitals.HasPN ==true)
                    {
                        if (_vitals.pn== "UnabletoComplete")
                        {
                            _val.push("8801023")
                            XML.writeStartElement('eVitals.18');
                            XML.writeAttributeString('PN', "8801023");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();

                            _pArr2.push({ section: "E14", element: "E14_14", val: v2NOT_KNOWN });
            
                        }
                        else if (_vitals.pn == "Refused")
                        {
                            _val.push("8801019")
                            XML.writeStartElement('eVitals.03');
                            XML.writeAttributeString('PN', "8801019");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();

                            _pArr2.push({ section: "E14", element: "E14_14", val: v2NOT_KNOWN });
                        }
                    }
                    else 
                    {
                        if (isRequiredStateElement("eVitals.18")) 
                        {
                            
                            _pArr2.push({ section: "E14", element: "E14_14", val: v2NOT_RECORDED });
                            _val.push("7701003");
                            XML.writeStartElement('eVitals.18');
                            XML.writeAttributeString('NV', "7701003");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();
                        }
                        else {
                            _pArr2.push({ section: "E14", element: "E14_14", val: v2NOT_REPORTING });
                            _val.push("7701005");
                            XML.writeStartElement('eVitals.18');
                            XML.writeAttributeString('NV', "7701005");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();
                        }
                    }
                }
                else 
                {
                    _val.push(_vitals.ValueArray[0].val);
                    XML.writeElementString("eVitals.18", _val);
                    _pArr2.push({ section: "E14", element: "E14_14", val: _val });
                }
            }
            else
            {
                _pArr2.push({ section: "E14", element: "E14_14", val: v2NOT_APPLICABLE });
                _val.push("7701001");
                XML.writeStartElement('eVitals.18');
                XML.writeAttributeString('NV', "7701001");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
    
            };
            eVitals["eVitals.18"]=_val;                                                                                   

            var _sectionIndex4 = [];
            _sectionIndex4 = getSectionIndex(pVitals, "eVitals.GlasgowScoreGroup")
            if (_sectionIndex4 != -1)
            {
                var _eGCS = pVitals.attributes.sections[_sectionIndex3[xx]].attributes.elements;
            
                //eVitals.19/////////////////////////////
                var _val=[];
                var _vitals=[];
                _vitals = getValue(_eGCS, "eVitals.19");
                if (eVitals.IsValid == true) 
                {
                    if (_vitals.IsNull == true) 
                    {
                        if(_vitals.HasPN ==true)
                        {
                            if (_vitals.pn== "UnabletoComplete")
                            {
                                _val.push("8801023")
                                XML.writeStartElement('eVitals.19');
                                XML.writeAttributeString('PN', "8801023");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                                _pArr2.push({ section: "E14", element: "E14_15", val: v2NOT_KNOWN });
            
                            }
                            else if (_vitals.pn == "Refused")
                            {
                                _val.push("8801019")
                                XML.writeStartElement('eVitals.19');
                                XML.writeAttributeString('PN', "8801019");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                                _pArr2.push({ section: "E14", element: "E14_15", val: v2NOT_KNOWN });
                            }
                        }
                        else 
                        {
                            if (isRequiredStateElement("eVitals.19")) 
                            {
                                _pArr2.push({ section: "E14", element: "E14_15", val: v2NOT_RECORDED });
                                _val.push("7701003");
                                XML.writeStartElement('eVitals.19');
                                XML.writeAttributeString('NV', "7701003");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                            }
                            else {
                                _pArr2.push({ section: "E14", element: "E14_15", val: v2NOT_REPORTING });
                                _val.push("7701005");
                                XML.writeStartElement('eVitals.19');
                                XML.writeAttributeString('NV', "7701005");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                            }
                        }
                    }
                    else 
                    {
                        _val.push(_vitals.ValueArray[0].val);
                        XML.writeElementString("eVitals.19", _val);
                        _eVitals.HasData = true;
                        _eVitals.Value = _val
                        _pArr2.push({ section: "E14", element: "E14_15", val: _val });
                    }
                }
                else
                {
                    _pArr2.push({ section: "E14", element: "E14_15", val: v2NOT_APPLICABLE });
                    Vitals_val.push("7701001");
                    XML.writeStartElement('eVitals.19');
                    XML.writeAttributeString('NV', "7701001");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                };
                eVitals["eVitals.19"]=_val;                                                                                           
            
                //eVital.20/////////////////////////////        
                var _val=[];
                var _vitals=[];
                _vitals = getValue(_eGCS, "eVitals.20");
                if (eVitals.IsValid == true) 
                {
                    if (_vitals.IsNull == true) 
                    {
                        if(_vitals.HasPN ==true)
                        {
                            if (_vitals.pn== "UnabletoComplete")
                            {
                                _val.push("8801023")
                                XML.writeStartElement('eVitals.20');
                                XML.writeAttributeString('PN', "8801023");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                                _pArr2.push({ section: "E14", element: "E14_16", val: v2NOT_KNOWN });
            
                            }
                            else if (_vitals.pn == "Refused")
                            {
                                _val.push("8801019")
                                XML.writeStartElement('eVitals.20');
                                XML.writeAttributeString('PN', "8801019");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                                _pArr2.push({ section: "E14", element: "E14_16", val: v2NOT_KNOWN });
                            }
                        }
                        else 
                        {
                            if (isRequiredStateElement("eVitals.20")) 
                            {
                            
                                _pArr2.push({ section: "E14", element: "E14_16", val: v2NOT_RECORDED });
                                _val.push("7701003");
                                XML.writeStartElement('eVitals.20');
                                XML.writeAttributeString('NV', "7701003");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                            }
                            else {
                                _pArr2.push({ section: "E14", element: "E14_16", val: v2NOT_REPORTING });
                                _val.push("7701005");
                                XML.writeStartElement('eVitals.20');
                                XML.writeAttributeString('NV', "7701005");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                            }
                        }
                    }
                    else 
                    {
                        _val.push(_vitals.ValueArray[0].val);
                        XML.writeElementString("eVitals.20", _val);
                        _pArr2.push({ section: "E14", element: "E14_16", val: _val });
                    }
                }
                else
                {
                    _pArr2.push({ section: "E14", element: "E14_16", val: v2NOT_APPLICABLE });
                    _val.push("7701001");
                    XML.writeStartElement('eVitals.20');
                    XML.writeAttributeString('NV', "7701001");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();
    
                };
                eVitals["eVitals.20"]=_val;                                                                                               
                //eVital.21/////////////////////////////        
                var _val=[];
                var _vitals=[];
                _vitals = getValue(_eGCS, "eVitals.21");
                if (eVitals.IsValid == true) 
                {
                    if (_vitals.IsNull == true) 
                    {
                        if(_vitals.HasPN ==true)
                        {
                            if (_vitals.pn== "UnabletoComplete")
                            {
                                _val.push("8801023")
                                XML.writeStartElement('eVitals.21');
                                XML.writeAttributeString('PN', "8801023");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                                _pArr2.push({ section: "E14", element: "E14_17", val: v2NOT_KNOWN });
            
                            }
                            else if (_vitals.pn == "Refused")
                            {
                                _val.push("8801019")
                                XML.writeStartElement('eVitals.21');
                                XML.writeAttributeString('PN', "8801019");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                                _pArr2.push({ section: "E14", element: "E14_17", val: v2NOT_KNOWN });
                            }
                        }
                        else 
                        {
                            if (isRequiredStateElement("eVitals.21")) 
                            {
                            
                                _pArr2.push({ section: "E14", element: "E14_17", val: v2NOT_RECORDED });
                                _val.push("7701003");
                                XML.writeStartElement('eVitals.21');
                                XML.writeAttributeString('NV', "7701003");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                            }
                            else {
                                _pArr2.push({ section: "E14", element: "E14_17", val: v2NOT_REPORTING });
                                _val.push("7701005");
                                XML.writeStartElement('eVitals.21');
                                XML.writeAttributeString('NV', "7701005");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                            }
                        }
                    }
                    else 
                    {
                        _val.push(_vitals.ValueArray[0].val);
                        XML.writeElementString("eVitals.21", _val);
                        _pArr2.push({ section: "E14", element: "E14_17", val: _val });
                    }
                }
                else
                {
                    _pArr2.push({ section: "E14", element: "E14_17", val: v2NOT_APPLICABLE });
                    Vitals_val.push("7701001");
                    XML.writeStartElement('eVitals.21');
                    XML.writeAttributeString('NV', "7701001");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();
    
                };
                eVitals["eVitals.21"]=_val;                                                                                               

                //eVital.22/////////////////////////////        
                var _val=[];
                var _vitals=[];
                _vitals = getValue(_eGCS, "eVitals.22");
                if (eVitals.IsValid == true) 
                {
                    if (_vitals.IsNull == true) 
                    {                    
                        if (isRequiredStateElement("eVitals.22")) 
                        {
                            
                            _pArr2.push({ section: "E14", element: "E14_18", val: v2NOT_RECORDED });
                            _val.push("7701003");
                            XML.writeStartElement('eVitals.22');
                            XML.writeAttributeString('NV', "7701003");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();

                        }
                        else {
                            _pArr2.push({ section: "E14", element: "E14_18", val: v2NOT_REPORTING });
                            _val.push("7701005");
                            XML.writeStartElement('eVitals.22');
                            XML.writeAttributeString('NV', "7701005");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();

                        }
                    }
                    else 
                    {
                        _val.push(_vitals.ValueArray[0].val);
                        XML.writeElementString("eVitals.22", _val);
                        _pArr2.push({ section: "E14", element: "E14_18", val: _val });
                    }
                }
                else
                {
                    _pArr2.push({ section: "E14", element: "E14_18", val: v2NOT_APPLICABLE });
                    Vitals_val.push("7701001");
                    XML.writeStartElement('eVitals.22');
                    XML.writeAttributeString('NV', "7701001");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();   
                };            

                eVitals["eVitals.22"]=_val;
                //eVital.23/////////////////////////////        
                var _val=[];
                var _vitals=[];            
                _vitals = getValue(_eGCS, "eVitals.23");
                if (eVitals.IsValid == true) 
                {
                    if (_vitals.IsNull == true) 
                    {
                        if (_vitals.pn== "UnabletoComplete")
                        {
                            _val.push("8801023")
                            XML.writeStartElement('eVitals.23');
                            XML.writeAttributeString('PN', "8801023");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();

                            _pArr2.push({ section: "E14", element: "E14_19", val: v2NOT_KNOWN });
            
                        }
                        else if (_vitals.pn == "Refused")
                        {
                            _val.push("8801019")
                            XML.writeStartElement('eVitals.23');
                            XML.writeAttributeString('PN', "8801019");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();

                            _pArr2.push({ section: "E14", element: "E14_19", val: v2NOT_KNOWN });
                        }
                        else 
                        {
                            if (isRequiredStateElement("eVitals.23")) 
                            {
                            
                                _pArr2.push({ section: "E14", element: "E14_19", val: v2NOT_RECORDED });
                                _val.push("7701003");
                                XML.writeStartElement('eVitals.23');
                                XML.writeAttributeString('NV', "7701003");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                            }
                            else {
                                _pArr2.push({ section: "E14", element: "E14_19", val: v2NOT_REPORTING });
                                _val.push("7701005");
                                XML.writeStartElement('eVitals.23');
                                XML.writeAttributeString('NV', "7701005");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                            }
                        }
                    }
                    else 
                    {
                        _val.push(_vitals.ValueArray[0].val);
                        XML.writeElementString("eVitals.23", _val);
                        _pArr2.push({ section: "E14", element: "E14_19", val: _val });
                    }
                }
                else
                {
                    _pArr2.push({ section: "E14", element: "E14_19", val: v2NOT_APPLICABLE });
                    _val.push("7701001");
                    XML.writeStartElement('eVitals.23');
                    XML.writeAttributeString('NV', "7701001");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();
                }
            };
            eVitals["eVitals.23"]=_val;                                                                                               

            var _sectionIndex5 = [];
            _sectionIndex5 = getSectionIndex(pVitals, "eVitals.TemperatureGroup")
            if (_sectionIndex5 != -1)
            {
                var _eTGP = pVitals.attributes.sections[_sectionIndex3[xx]].attributes.elements;

                //eVital.24/////////////////////////////        
                var _val=[];
                var _vitals=[];
                _vitals = getValue(_eTGP, "eVitals.24");
                if (eVitals.IsValid == true) 
                {
                    if (_vitals.IsNull == true) 
                    {
                        if (_vitals.pn== "UnabletoComplete")
                        {
                            _val.push("8801023")
                            XML.writeStartElement('eVitals.24');
                            XML.writeAttributeString('PN', "8801023");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();

                            _pArr2.push({ section: "E14", element: "E14_20", val: v2NOT_KNOWN });
            
                        }
                        else if (_vitals.pn == "Refused")
                        {
                            _val.push("8801019")
                            XML.writeStartElement('eVitals.24');
                            XML.writeAttributeString('PN', "8801019");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();

                            _pArr2.push({ section: "E14", element: "E14_20", val: v2NOT_KNOWN });
                        }
                        else 
                        {
                            if (isRequiredStateElement("eVitals.24")) 
                            {
                            
                                _pArr2.push({ section: "E14", element: "E14_20", val: v2NOT_RECORDED });
                                _val.push("7701003");
                                XML.writeStartElement('eVitals.24');
                                XML.writeAttributeString('NV', "7701003");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                            }
                            else {
                                _pArr2.push({ section: "E14", element: "E14_20", val: v2NOT_REPORTING });
                                _val.push("7701005");
                                XML.writeStartElement('eVitals.24');
                                XML.writeAttributeString('NV', "7701005");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                            }
                        }
                    }
                    else 
                    {
                        _val.push(_vitals.ValueArray[0].val);
                        XML.writeElementString("eVitals.24", _val);
                        _pArr2.push({ section: "E14", element: "E14_20", val: _val });
                    }
                }
                else
                {
                    _pArr2.push({ section: "E14", element: "E14_20", val: v2NOT_APPLICABLE });
                    _val.push("7701001");
    
                };
                eVitals["eVitals.24"]=_val;                 
                //eVital.25/////////////////////////////   
                var _val=[];
                var _vitals=[];
            
                _vitals = getValue(_eTGP, "eVitals.25");
                if (eVitals.HasTemperature == true) {
                    if (_vitals.IsNull != true) 
                    {
                        _val.push(_vitals.ValueArray[0].val);
                        XML.writeElementString("eVitals.25", _val);
                        _pArr2.push({ section: "E14", element: "E14_21", val: setV2("eVitals.25", _val) });
                    }
                }
                else
                {
                    _eVitals.HasErrors=true;
                    _eVitals.Error="Missing Temperature Value" 
                    _pArr2.push({ section: "E14", element: "E14_21", val: null });
                };
            
            };
            eVitals["eVitals.25"]=_val;                 
                //eVital.26/////////////////////////////   
            var _val=[];
            var _vitals=[];
            _val = getValue(_eL, "eVitals.26");
            if (eVitals.IsValid == true) {
                if (_vitals.IsNull == true) 
                {
                    _pArr2.push({ section: "E14", element: "E14_22", val: v2NOT_RECORDED });
                    _val.push("7701003");
                    XML.writeStartElement('eVitals.26');
                    XML.writeAttributeString('NV', "7701003");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();           
                }
                else 
                {
                    _val.push(_vitals.ValueArray[0].val);
                    XML.writeElementString("eVitals.26", _val);
                    _pArr2.push({ section: "E14", element: "E14_22", val: setV2("eVitals.26", _val) });
                 
                }
            }
            else
            {
                _pArr2.push({ section: "E14", element: "E14_22", val: v2NOT_APPLICABLE });
                _val.push("7701001");
                XML.writeStartElement('eVitals.26');
                XML.writeAttributeString('NV', "7701001");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
            };

            eVitals["eVitals.26"]=_val;                             

            var _sectionIndex6 = [];
            _sectionIndex6 = getSectionIndex(pVitals, "eVitals.PainScaleGroup")
            if (_sectionIndex6 != -1)
            {
                var _ePSG = pVitals.attributes.sections[_sectionIndex3[xx]].attributes.elements;
                //eVital.27/////////////////////////////   
                var _val=[];
                var _vitals=[];

                _vitals = getValue(_ePSG, "eVitals.27");
                if (eVitals.IsValid == true) 
                {
                    if (_vitals.IsNull == true) 
                    {
                        if (_vitals.pn== "UnabletoComplete")
                        {
                            _val.push("8801023")
                            XML.writeStartElement('eVitals.27');
                            XML.writeAttributeString('PN', "8801023");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();

                            _pArr2.push({ section: "E14", element: "E14_23", val: v2NOT_KNOWN });
            
                        }
                        else if (_vitals.pn == "Refused")
                        {
                            _val.push("8801019")
                            XML.writeStartElement('eVitals.27');
                            XML.writeAttributeString('PN', "8801019");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();

                            _pArr2.push({ section: "E14", element: "E14_23", val: v2NOT_KNOWN });
                        }
                        else 
                        {
                            if (isRequiredStateElement("eVitals.27")) 
                            {
                            
                                _pArr2.push({ section: "E14", element: "E14_23", val: v2NOT_RECORDED });
                                _val.push("7701003");
                                XML.writeStartElement('eVitals.27');
                                XML.writeAttributeString('NV', "7701003");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                            }
                            else {
                                _pArr2.push({ section: "E14", element: "E14_23", val: v2NOT_REPORTING });
                                _val.push("7701005");
                                XML.writeStartElement('eVitals.27');
                                XML.writeAttributeString('NV', "7701005");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                            }
                        }
                    }
                    else 
                    {
                        _val.push(_vitals.ValueArray[0].val);
                        XML.writeElementString("eVitals.27", _val);
                        _pArr2.push({ section: "E14", element: "E14_23", val: _val });
                    }
                }
                else
                {
                    _pArr2.push({ section: "E14", element: "E14_23", val: v2NOT_APPLICABLE });
                    _val.push("7701001");
    
                };
                eVitals["eVitals.27"]=_val;                 

                //eVital.28/////////////////////////////   
                var _val=[];
                var _vitals=[];
                _vitals = getValue(_ePSG, "eVitals.28");
                if (eVitals.IsValid == true) 
                {
                    if (_vitals.IsNull == true) 
                    {
                        if (_vitals.pn== "UnabletoComplete")
                        {
                            _val.push("8801023")
                            XML.writeStartElement('eVitals.28');
                            XML.writeAttributeString('PN', "8801023");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();
                        }
                        else if (_vitals.pn == "Refused")
                        {
                            _val.push("8801019")
                            XML.writeStartElement('eVitals.28');
                            XML.writeAttributeString('PN', "8801019");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();
                        }
                        else 
                        {
                            if (isRequiredStateElement("eVitals.28")) 
                            {
                                _val.push("7701003");
                                XML.writeStartElement('eVitals.28');
                                XML.writeAttributeString('NV', "7701003");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                            }
                            else {
                                _val.push("7701005");
                                XML.writeStartElement('eVitals.28');
                                XML.writeAttributeString('NV', "7701005");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();
                            }
                        }
                    }
                    else 
                    {
                        _val.push(_vitals.ValueArray[0].val);
                        XML.writeElementString("eVitals.28", _val);
                    }
                }
                else
                {
                    _val.push("7701001");
                    XML.writeStartElement('eVitals.28');
                    XML.writeAttributeString('NV', "7701001");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();
                }
            };
            eVitals["eVitals.28"]=_val;                 
            
            var _sectionIndex7 = [];
            _sectionIndex7 = getSectionIndex(pVitals, "eVitals.StrokeScaleGroup")
            if (_sectionIndex7 != -1) {
                var _eSSG = pVitals.attributes.sections[_sectionIndex3[xx]].attributes.elements;
                //eVital.29/////////////////////////////   
                var _val=[];
                var _vitals=[];
                _vitals = getValue(_eL, "eVitals.29");
                if (eVitals.IsValid == true) 
                {
                    if (_vitals.IsNull == true) 
                    {
                        if (_vitals.pn == "UnabletoComplete") 
                        {
                            _val.push("8801023")
                            XML.writeStartElement('eVitals.29');
                            XML.writeAttributeString('PN', "8801023");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();


                            _pArr2.push({ section: "E14", element: "E14_24", val: v2NOT_KNOWN });

                        }
                        else if (_vitals.pn == "Refused") {
                            _val.push("8801019")
                            XML.writeStartElement('eVitals.29');
                            XML.writeAttributeString('PN', "8801019");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();

                            _pArr2.push({ section: "E14", element: "E14_24", val: v2NOT_KNOWN });
                        }
                        else {
                            if (isRequiredStateElement("eVitals.29")) {
                                _pArr2.push({ section: "E14", element: "E14_24", val: v2NOT_RECORDED });
                                _val.push("7701003")
                                XML.writeStartElement('eVitals.29');
                                XML.writeAttributeString('NV', "7701003");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                            }
                            else {
                                _pArr2.push({ section: "E14", element: "E14_24", val: v2NOT_REPORTING });
                                _val.push("7701005")
                                XML.writeStartElement('eVitals.29');
                                XML.writeAttributeString('NV', "7701005");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                            }
                        }
                    }
                    else {
                        _val.push(_vitals.ValueArray[0].val);
                        XML.writeElementString("eVitals.29", _val);
                        _eVitals.HasData = true;
                        _eVitals.Value = _val
                        _pArr2.push({ section: "E14", element: "E14_24", val: _val });
                    }
                }
                else {
                    _pArr2.push({ section: "E14", element: "E14_24", val: v2NOT_APPLICABLE });
                    _val.push("7701001")
                    XML.writeStartElement('eVitals.29');
                    XML.writeAttributeString('NV', "7701001");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();
                };
                eVitals["eVitals.29"]=_val;                 
                //eVital.30/////////////////////////////   
                var _val=[];
                var _vitals=[];
                _vitals = getValue(_eL, "eVitals.30");
                if (eVitals.IsValid == true) {
                    if (_vitals.IsNull == true) {
                        if (_vitals.pn == "UnabletoComplete") {
                            _val.push("8801023")
                            XML.writeStartElement('eVitals.30');
                            XML.writeAttributeString('PN', "8801023");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();

                        }
                        else if (_vitals.pn == "Refused") {
                            _val.push("8801019")
                            XML.writeStartElement('eVitals.30');
                            XML.writeAttributeString('PN', "8801019");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();

                        }
                        else {
                            if (isRequiredStateElement("eVitals.30")) {
                                _val.push("7701003")
                                XML.writeStartElement('eVitals.30');
                                XML.writeAttributeString('NV', "7701003");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                            }
                            else {
                                _val.push("7701005")
                                XML.writeStartElement('eVitals.30');
                                XML.writeAttributeString('NV', "7701005");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeEndElement();

                            }
                        }
                    }
                    else {
                        _val.push(_vitals.ValueArray[0].val);
                        XML.writeElementString("eVitals.30", _val);
                        _eVitals.HasData = true;
                        _eVitals.Value = _val
                    }
                }
                else {
                    _val.push("7701001")
                    XML.writeStartElement('eVitals.30');
                    XML.writeAttributeString('NV', "7701001");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();
                }
            };
            eVitals["eVitals.30"]=_val;                 
            //eVital.31/////////////////////////////   
            var _val=[];
            var _vitals=[];
            _vitals = getValue(_eL, "eVitals.31");
            if (eVitals.IsValid == true) 
            {
                if (_vitals.IsNull == true) 
                {
                    if (_vitals.pn== "UnabletoComplete")
                    {
                        _val.push("8801023")
                        XML.writeStartElement('eVitals.31');
                        XML.writeAttributeString('PN', "8801023");
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();

                        _pArr2.push({ section: "E14", element: "E14_25", val: v2NOT_KNOWN });
            
                    }
                    else if (_vitals.pn == "Refused")
                    {
                        _val.push("8801019")
                        XML.writeStartElement('eVitals.31');
                        XML.writeAttributeString('PN', "8801019");
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();

                        _pArr2.push({ section: "E14", element: "E14_25", val: v2NOT_KNOWN });
                    }
                    else 
                    {
                        if (isRequiredStateElement("eVitals.31")) 
                        {
                            
                            _pArr2.push({ section: "E14", element: "E14_25", val: v2NOT_RECORDED });
                            _val.push("7701003");
                            XML.writeStartElement('eVitals.31');
                            XML.writeAttributeString('NV', "7701003");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();

                        }
                        else {
                            _pArr2.push({ section: "E14", element: "E14_25", val: v2NOT_REPORTING });
                            _val.push("7701005");
                            XML.writeStartElement('eVitals.31');
                            XML.writeAttributeString('NV', "7701005");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();

                        }
                    }
                }
                else 
                {
                    _val.push(_vitals.ValueArray[0].val);
                    XML.writeElementString("eVitals.31", _val);
                    _pArr2.push({ section: "E14", element: "E14_25", val: _val });
                }
            }
            else
            {
                _pArr2.push({ section: "E14", element: "E14_25", val: v2NOT_APPLICABLE });
                _val.push("7701001");
                XML.writeStartElement('eVitals.31');
                XML.writeAttributeString('NV', "7701001");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
    
            };
            eVitals["eVitals.31"]=_val;                 
                //eVital.32/////////////////////////////   
            var _val=[];
            var _vitals=[];
            _vitals = getValue(_eL, "eVitals.32 ");
            if (eVitals.IsValid == true) {
                if (_vitals.IsNull == true)    
                {
                    if (_vitals.HasPN == true)
                    {                     
                        _pArr2.push({ section: "E14", element: "E14_26", val: v2NOT_KNOWN });
                        _val.push("8801023")
                        XML.writeStartElement('eVitals.32');
                        XML.writeAttributeString('PN', "8801023");
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();
                        }
                    }
                }
                else
                {
                _val.push(_vitals.ValueArray[0].val);
                _pArr2.push({ section: "E14", element: "E14_26", val: _val });
                }
            };
            _vg.push(_eVitals);
            delete _eVitals;
            eVitals["eVitals.32"]=_val;                 
                //eVital.33/////////////////////////////   
            var _val=[];
            var _vitals=[];
            _vitals = getValue(_eL, "eVitals.33");            
            if (eVitals.IsValid == true)
            {
                if (_vitals.IsNull == true)    
                {                    
                    if (_vitals.HasPN == true) 
                    {
                        if (_vitals.pn == "Refused") 
                        {
                            _val.push("8801019")
                            XML.writeStartElement('eVitals.33');
                            XML.writeAttributeString('PN', "8801019");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();

                            _pArr2.push({ section: "E14", element: "E14_27", val: v2NOT_KNOWN });
                        }
                        else if (_PNValue == "UnabletoComplete") 
                        {
                            _val.push("8801023")
                            XML.writeStartElement('eVitals.33');
                            XML.writeAttributeString('PN', "8801023");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();

                            _pArr2.push({ section: "E14", element: "E14_27", val: v2NOT_KNOWN });
                        }
                    }
                }
                else 
                {      console.log("L")          
                _val.push(_vitals.ValueArray[0].val);
                XML.writeElementString("eVitals.33", _val);
                    
                };
                eVitals["eVitals.33"]=_val;                 

            }            
        }
    }
    };
    eVitals.Version3 = _vg;
    console.log(eVitals)
    return eVitals;
};
var seteInjury = function (pInjury, Call) {

    var eInjury = new Object();
    var _vg=[];
    if (pInjury.HasDataSet == false)
    {
        eInjury.IsValid = false;
    }
    else
    {
        eInjury.IsValid = true;
    }
    var v2Array = [];
    var _injury = new Object();
    var eInjuryObject = new Object()
    if (pInjury.HasDataSet == true) {        
        var elementList = "";
        elementList = pInjury.attributes.elements;

    };
    // console.log(elementList)
        
    //eInjury.01///////////////////
    var _injury =[];
    var _val =[];
    if (eInjury.IsValid == true) //if have a transport, forgot the data, 
    {
        _injury = getValue(elementList, "eInjury.01");
        if (_injury.IsNull == true) 
        {
            _val.push("7701003")
            XML.writeStartElement('eInjury.01');
            XML.writeAttributeString('NV', "7701003");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();

            v2Array.push({ section: "E10", element: "E10_01", val: v2NOT_RECORDED });
        }
        else 
        {
            var arr2 = [];
            for (var i = 0; i < _injury.ValueArray.length; i++)
            {
                if ((_injury.ValueArray[i].HasValue == true) && (_val.indexOf(_injury.ValueArray[i].val) == -1))
                {
                    _val.push(_injury.ValueArray[i].val);
                    XML.writeElementString("eInjury.01", _val);
                    arr2.push(setV2("eInjury.01", _val));
                }
            };
            v2Array.push({ section: "E10", element: "E10_01", val: arr2.slice(0) });
        }
    }
    else
    {
        _val.push("7701001");
        XML.writeStartElement('eInjury.01');
        XML.writeAttributeString('NV', "7701001");
        XML.writeAttributeString('xsi:nil', 'true');
        XML.writeEndElement();
        v2Array.push({ section: "E10", element: "E10_01", val: v2NOT_APPLICABLE });
    };
    eInjury["eInjury.01"] = _val;
    
    //eInjury.02///////////////////
    var _injury =[];
    var _val =[];

    if (eInjury.IsValid == true) 
    {
        _injury = getValue(elementList, "eInjury.02");
        if (_injury.IsNull == true) 
        {
            if (isRequiredStateElement("eInjury.02")) 
            {
                _val.push("7701003")
                XML.writeStartElement('eInjury.02');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
                v2Array.push({ section: "E10", element: "E10_03", val: v2NOT_RECORDED });
            }    
            else 
            {
                _eInjury.NV= "7701005";
                XML.writeStartElement('eInjury.02');
                XML.writeAttributeString('NV', "7701005");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
            }
        }
        else 
        {
            var arr2 = [];
            for (var i = 0; i < _injury.ValueArray.length; i++)
            {
                if ((_injury.ValueArray[i].HasValue == true) && (_val.indexOf(_injury.ValueArray[i].val) == -1))
                {
                    _val.push(_injury.ValueArray[i].val)
                    XML.writeElementString("eInjury.02", _val);
                    arr2.push(setV2("eInjury.02", _val));
                }
            };
            eInjury.bHasInjury = true;            
            v2Array.push({ section: "E10", element: "E10_03", val: arr2.slice(0) });
        }
    }
    else
    {
        _val.push("7701001");
        XML.writeStartElement('eInjury.02');
        XML.writeAttributeString('NV', "7701001");
        XML.writeAttributeString('xsi:nil', 'true');
        XML.writeEndElement();
        v2Array.push({ section: "E10", element: "E10_03", val: v2NOT_APPLICABLE });
    };
    eInjury["eInjury.02"]=_val;

    
        
    //eInjury.03///////////////////
    var _injury =[];
    var _val =[];

    if (eInjury.IsValid == true) //if have a transport, forgot the data, 
    {
        _injury = getValue(elementList, "eInjury.03");
        if (_injury.IsNull == true) 
        {
            if (isRequiredStateElement("eInjury.03")) 
            {
                _val.push("7701003")
                XML.writeStartElement('eInjury.03');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
            }
        }
        else 
        {
            var arr3 = [];
            for (var i = 0; i < _injury.ValueArray.length; i++)
            {
                if ((_injury.ValueArray[i].HasValue == true) && (_val.indexOf(_injury.ValueArray[i].val) == -1))
                {
                    _val.push( _injury.ValueArray[i].val);
                    XML.writeElementString("eInjury.03", _val);
                }
            };
            eInjury.HasInjury = true;
        }
    }
    else
    {
        _val.push("7701001")
        XML.writeStartElement('eInjury.03');
        XML.writeAttributeString('NV', "7701001");
        XML.writeAttributeString('xsi:nil', 'true');
        XML.writeEndElement();
    };
    eInjury["eInjury.03"] = _val;
    
    //eInjury.04///////////////////
    var _injury =[];
    var _val =[];
   
        if (eInjury.IsValid == true) 
        {
            _injury = getValue(elementList, "eInjury.04");
            if(_injury.IsNull == true)
            {
                if (_injury.HasPN == true) 
                {
                    {
                        _val.push("8801005")
                        XML.writeStartElement('eInjury.04');
                        XML.writeAttributeString('PN', "8801005");
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();
                        v2Array.push({ section: "E14", element: "E14_04", val: v2NOT_KNOWN });
                    }
                }
                else {
                    _val.push("7701003")
                    XML.writeStartElement('eInjury.04');
                    XML.writeAttributeString('NV', "7701003");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                    v2Array.push({ section: "E10", element: "E10_04", val: v2NOT_RECORDED });
                }
            }
            else {
                
                var arr2 = [];
                for (var i = 0; i < _injury.ValueArray.length; i++)
                {
                    if ((_injury.ValueArray[i].HasValue == true) && (_val.indexOf(_injury.ValueArray[i].val) == -1))
                    {
                        _val.push( _injury.ValueArray[i].val);
                        XML.writeElementString("eInjury.04", _val);
                        arr2.push(setV2("eInjury.04", _val));                    
                    }
                };
                eInjury.HasInjury = true;
                v2Array.push({ section: "E10", element: "E10_04", val: arr2.slice(0) });
            }
        }
        else
        {
            _val.push("7701001")
            XML.writeStartElement('eInjury.04');
            XML.writeAttributeString('NV', "7701001");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();
            v2Array.push({ section: "E10", element: "E10_04", val: v2NOT_APPLICABLE});
        };
        eInjury["eInjury.04"] = _val;
    ///eInjury.05////////////

        var _injury =[];
        var _val =[];
        
        if (eInjury.IsValid == true) //if have a transport, forgot the data, 
        {
            _injury = getValue(elementList, "eInjury.05");
            if (_injury.IsNull == true)
            {
                if (isRequiredStateElement("eInjury.05")) 
                {
                    v2Array.push({ section: "E10", element: "E10_05", val: v2NOT_RECORDED });
                }
            }
            else 
            {
                eInjury.HasInjury = true;
                if (typeof _injury.ValueArray != undefined)
                {
                    _val.push(_injury.ValueArray[0].val);
                    if ((_val > 1) && (_val < 12))
                    {
                        _eInjury.HasErrors = true;
                        _eInjury.Error = "Validation Error:  Main Area of Impact must be between 1 and 12. "
                    }
                    else {
                        eInjury.HasInjury = true;
                        _val.push(_injury.ValueArray[0].val);
                        XML.writeElementString("eInjury.05", _val);                        
                    }
                }
            }
        }
        else
        {
            v2Array.push({ section: "E10", element: "E10_05", val: v2NOT_RECORDED });
        };
        eInjury["eInjury.05"] = _val;
    
    //eInjury.06///////////
        var _injury =[];
        var _val =[];
        
        if (eInjury.IsValid == true) //if have a transport, forgot the data, 
        {
            _injury = getValue(elementList, "eInjury.06");
            if (_injury.IsNull != true) 
            {
                eInjury.HasInjury = true;
                _val.push(_injury.ValueArray[0].val);
                XML.writeElementString("eInjury.06", _val);
            }
        };
        eInjury["eInjury.06"] = _val;

    //eInjury.07/////////
        var _injury =[];
        var _val =[];

        if (eInjury.IsValid == true) 
        {
            _injury = getValue(elementList, "eInjury.07");
          
            if (_injury.IsNull == true) 
            {
                if (isRequiredStateElement("eInjury.07")) 
                {
                    _val.push("7701003")
                    XML.writeStartElement('eInjury.07');
                    XML.writeAttributeString('NV', "7701003");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();
                }
                else 
                {
                    _val.push("7701005")
                    XML.writeStartElement('eInjury.07');
                    XML.writeAttributeString('NV', "7701005");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();
                }
            }
            else 
            {
                var arr2 = [];
                for (var i = 0; i < _injury.ValueArray.length; i++) {
                    if ((_injury.ValueArray[i].HasValue == true) && (_val.indexOf(_injury.ValueArray[i].val) == -1)) {
                        _val = _injury.ValueArray[i].val
                        XML.writeElementString("eInjury.07", _val);
                        arr2.push(setV2("eInjury.07", _val));
                    }
                };
                eInjury.HasInjury = true;
                v2Array.push({ section: "E10", element: "E10_08", val: arr2.slice(0) });
            }
        }
        else
        {
            _val.push("7701001")
            XML.writeStartElement('eInjury.07');
            XML.writeAttributeString('NV', "7701001");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();
            v2Array.push({ section: "E10", element: "E10_08", val: v2NOT_APPLICABLE});    
        };
        eInjury["eInjury.07"] = _val;

    //eInjury.08//////////
        var _injury =[];
        var _val =[];

        if (eInjury.IsValid == true) //if have a transport, forgot the data, 
        {
            _injury = getValue(elementList, "eInjury.08");
            if (_injury.IsNull == true) 
            {
                v2Array.push({ section: "E10", element: "E10_09", val: v2NOT_KNOWN });
            }
            else 
            {        
                var arr2 = [];
                for (var i = 0; i < _injury.ValueArray.length; i++) 
                {
                    if ((_injury.ValueArray[i].HasValue == true) && (_val.indexOf(_injury.ValueArray[i].val) == -1)) 
                    {
                        _val.push( _injury.ValueArray[i].val);
                        XML.writeElementString("eInjury.08", _val);
                    }
                };
                eInjury.HasInjury = true;
                v2Array.push({ section: "E10", element: "E10_09", val: arr2.slice(0) });
            }                        
        }
        else
        {
            v2Array.push({ section: "E10", element: "E10_09", val: v2NOT_KNOWN });
        };
        eInjury["eInjury.08"] = _val;

    
    //eInjury.09/////////////
        var _injury =[];
        var _val =[];
        
        if (eInjury.IsValid == true) //if have a transport, forgot the data, 
        {
            _injury = getValue(elementList, "eInjury.09");
            if (_injury.IsNull != true) 
            
            {
                eInjury.HasInjury = true;
                _val.push(_injury.ValueArray[0].val);
                XML.writeElementString("eInjury.09", _val);
                v2Array.push({ section: "E10", element: "E10_10", val: _val });
            }
        };
        eInjury["eInjury.09"] = _val;

    //eInjury.10///////////////
        var _injury =[];
        var _val =[];
        
        if (eInjury.IsValid == true) //if have a transport, forgot the data, 
        {
            _injury = getValue(elementList, "eInjury.10");
            if (_injury.IsNull != true) {
                var arr1 = [];
                for (var i = 0; i < _injury.ValueArray.length; i++)
                {
                    if ((_injury.ValueArray[i].HasValue == true) && (_val.indexOf(_injury.ValueArray[i].val) == -1))
                    {
                        _val.push(_injury.ValueArray[i].val);
                        XML.writeElementString("eInjury.10", _val);
                    }
                };
                eInjury.HasInjury = true;
            }
        };
        eInjury["eInjury.10"] = _val;


            //////////////////////////////////
        if (eInjury.IsValid == true) {
            var _sectionIndex1 = "";
            _sectionIndex1 = getSectionIndex(pInjury, "eInjury.CollisionGroup")

            if (_sectionIndex1 != -1) {
                
                var _eCGP = [];
                var _eCGP = pInjury.attributes.sections[_sectionIndex1].attributes.elements;
                //eInjury.11///////
                var _injury =[];
                var _val =[];

                _injury = getValue(_eCGP, "eInjury.11");
                if (_injury.IsNull != true) {
                    eInjury.HasInjury = true;
                    _val.push(_injury.ValueArray[0].val);
                    XML.writeElementString("eInjury.11", _val);
                };
                
                eInjury["eInjury.11"] = _val;
                //////////////////////////////

                //alert("PhoneNumber")

                //eInjury.12///////////
                var _injury =[];
                var _val =[];

                _injury = getValue(_eCGP, "eInjury.12");
                if (_injury.IsNull == true)
                {
                    eInjury.HasInjury = true;
                    XML.writeElementString("eInjury.12", _val);
                    _val.push(_injury.ValueArray[0].val);
                };
                eInjury["eInjury.12"] = _val;
                
                //eInjury.13/////////////
                var _injury =[];
                var _val =[];

                    _injury = getValue(_eCGP, "eInjury.13");
                    if (_injury.IsNull != true)
                    {
                        sPatHomeNum = "";

                        var arr2 = [];
                        for (var i = 0; i <= _injury.ValueArray.length - 1; i++) 
                        {
                            _val.push(_injury.ValueArray[i].val);
                            XML.writeElementString("eInjury.13", _val);
                        }
                    eInjury.HasInjury = true;
                };
                    eInjury["eInjury.13"] = _val;
            
            //eInjury.14///////////////
            var _injury =[];
            var _val =[];
            
            if (eInjury.IsValid == true) {
                _injury = getValue(_eCGP, "eInjury.14");
                if (_injury.IsNull != true) {
                    eInjury.HasInjury = true;
                    _val.push(_injury.ValueArray[0].val);
                    XML.writeElementString("eInjury.14", _val);
                }
            };
            eInjury["eInjury.14"] = _val;

            //eInjury.15//////////////  
            var _injury =[];
            var _val =[];
            
            if (eInjury.IsValid == true) {
                _injury = getValue(_eCGP, "eInjury.15");
                if (_injury.IsNull != true) {
                    eInjury.HasInjury = true;
                    _val.push(_injury.ValueArray[0].val);
                    XML.writeElementString("eInjury.15", _val);
                }
            };
            eInjury["eInjury.15"] = _val;

            //eInjury.16//////////////
            var _injury =[];
            var _val =[];
            
            if (eInjury.IsValid == true) {
                _injury = getValue(_eCGP, "eInjury.16");
                if (_injury.IsNull != true) {
                    eInjury.HasInjury = true;
                    _val.push(_injury.ValueArray[0].val);
                    XML.writeElementString("eInjury.16", _val);
                }
            };
            eInjury["eInjury.16"] = _val;

            //eInjury.17//////////////
            var _injury =[];
            var _val =[];
            
            if (eInjury.IsValid != true) {
                _injury = getValue(_eCGP, "eInjury.17");
                if (_injury.IsNull != true) {
                    eInjury.HasInjury = true;
                    _val.push(_injury.ValueArray[0].val);
                    XML.writeElementString("eInjury.17", _val);
                }
            };
            eInjury["eInjury.17"] = _val;

                //eInjury.18//////////////
            var _injury =[];
            var _val =[];
            
            if (eInjury.IsValid == true) {
                _injury = getValue(_eCGP, "eInjury.18");
                if (_injury.IsNull != true) {
                    eInjury.HasInjury = true;
                    _val.push(_injury.ValueArray[0].val);
                    XML.writeElementString("eInjury.18", _val);
                }
            };
            eInjury["eInjury.18"] = _val;

            //eInjury.19//////////////
            var _injury =[];
            var _val =[];
            
            if (eInjury.IsValid != true) {
                _injury = getValue(_eCGP, "eInjury.19");
                {
                    eInjury.HasInjury = true;
                    _val.push(_injury.ValueArray[0].val);
                    XML.writeElementString("eInjury.19", _val);
                }
            };
            eInjury["eInjury.19"] = _val;

            //eInjury.20//////////////
            var _injury =[];
            var _val =[];
            
            if (eInjury.IsValid == true) {
                _injury = getValue(_eCGP, "eInjury.20");
                if (_injury.IsNull != true) {
                    eInjury.HasInjury = true;
                    _val.push(_injury.ValueArray[0].val);
                    XML.writeElementString("eInjury.20", _val);
                }
            };
            eInjury["eInjury.20"] = _val;

            //eInjury.21//////////////
            var _injury =[];
            var _val =[];
            
            if (eInjury.IsValid == true) {
                _injury = getValue(_eCGP, "eInjury.21");
                if (_injury.IsNull != true) {
                    eInjury.HasInjury = true;
                    _val.push(_injury.ValueArray[0].val);
                    XML.writeElementString("eInjury.22", _val);
                }
            };

            eInjury["eInjury.21"] = _val;

            //eInjury.22//////////////
            var _injury =[];
            var _val =[];
            
            if (eInjury.IsValid == true) {
                _injury = getValue(_eCGP, "eInjury.22");
                var arr1= []
                if (_injury.IsNull != true) {
                    var arr1 = [];
                    for (var i = 0; i <= _injury.ValueArray.length - 1; i++) {
                        XML.writeElementString("eInjury.22", _injury.ValueArray[i]);
                        _val.push(_injury.ValueArray[i].val)
                    };
                    _eInjury.HasInjury = true;
                }
            };

            eInjury["eInjury.22"] = _val;

            //eInjury.23///////////
            var _injury =[];
            var _val =[];

            if (eInjury.IsValid == true) {
                _injury = getValue(_eCGP, "eInjury.23");
                if (_injury.IsNull != true) {
                    eInjury.HasInjury = true;
                    _val.push(_injury.ValueArray[0].val);
                    XML.writeElementString("eInjury.23", _val);

                }
            };
            eInjury["eInjury.23"] = _val;

            //eInjury.24/////////////
            var _injury =[];
            var _val =[];
            
            if (eInjury.IsValid == true) {
                _injury = getValue(_eCGP, "eInjury.24");
                if (_injury.IsNull != true) {
                    eInjury.HasInjury = true;
                    _val.push(_injury.ValueArray[0].val);
                    XML.writeElementString("eInjury.24", _val);

                }
            };
            eInjury["eInjury.23"] = _val;

            //eInjury.25////////
            var _injury =[];
            var _val =[];
            
            if (eInjury.IsValid != true) {
                _injury = getValue(_eSG, "eInjury.25");
                {
                    eInjury.HasInjury = true;
                    _val = _einjury.ValueArray[0].val;
                    XML.writeElementString("eInjury.25", _val);
                }
            };
            eInjury["eInjury.23"] = _val;
                ///////////////////////////////////////////////                
            var SeatGroupArray = new Array();
            _sectionIndex3 = "";
                _sectionIndex3 = getSectionIndex(pInjury.attributes.sections[_sectionIndex1], "eInjury.SeatGroup");
                if (_sectionIndex3 != -1)                 
                {
                    for (var x = 0; x <= _sectionIndex3.length-1; x++)
                    {
                        var _elementList = [];
                        _elementList = pInjury.attributes.sections[_sectionIndex1].attributes.sections[_sectionIndex3[x]].attributes.elements;                        
                        _sg = [];

                        //eInjury.26////////     
                        var _injury =[];
                        var _val =[];

                        _injury = getValue(_elementList, "eInjury.26");
                        if (_injury.IsNull != true)
                        {
                            eInjury.HasInjury = true;
                            _val.push(_injury.ValueArray[0].val);
                            XML.writeElementString("eInjury.26", _val);
                        };
                        eInjury["eInjury.26"] = _val;
                        
                        //eInjury.27////////
                        var _injury =[];
                        var _val =[];
                        _injury = getValue(_elementList, "eInjury.27");

                        if (_injury.IsNull != true)                    
                        {
                            eInjury.HasInjury = true;
                            _val.push(_injury.ValueArray[0].val);
                            XML.writeElementString("eInjury.27", _val);
                        };
                        eInjury["eInjury.27"] = _val;

                        //eInjury.28////////
                        var _injury =[];
                        var _val =[];

                        _injury = getValue(_elementList, "eInjury.28");
                        if (_injury.IsNull != true) {
                            eInjury.HasInjury = true;
                            _val.push(_injury.ValueArray[0].val);
                            XML.writeElementString("eInjury.28", _val);
                        };
                        eInjury["eInjury.28"] = _val;

                        //eInjury.29////////
                        var _injury =[];
                        var _val =[];

                        _injury = getValue(_elementList, "eInjury.29");
                        if (_injury.IsNull != true) {                       
                            eInjury.HasInjury = true;
                            _val.push(_injury.ValueArray[0].val);
                            XML.writeElementString("eInjury.29", _val);
                        };
                        eInjury["eInjury.21"] = _val;

                        SeatGroupArray.push(_sg.slice(0))
                }
            };
            
      
        }
        
    }
        
        eInjury.Version3 = _vg.slice(0);
        eInjury.SeatGroupArry = SeatGroupArray.slice(0)
    return eInjury;

};
var seteProcedures = function (pProcedures, Call) {
    var eProcedures = new Object();
    var _procedures = new Object();

    var ProceduresGroupArray = new Array();
    var v2Array = [];
    ////////Check for cancelled calls, Standby, non-patient


    console.log(pProcedures)
    if (pProcedures.HasDataSet != true) {
        alert()
        //SetNA
        return eProcedures
    }
    _sectionIndex = getSectionIndex(pProcedures, "eProcedures.ProcedureGroup")
    
    for (var xx = 0; xx < _sectionIndex.length; xx++)
    {
        var elementList = [];
        var _vg = [];
        var elementList = pProcedures.attributes.sections[xx].attributes.elements;
        console.log(elementList)
        //eProcedures.03////////////

        var _procedures=[]; 
        var _val=[]
        _procedures = getValue(elementList, "eProcedures.03");
        if (_procedures.IsNull == true)
        {
            if (_procedures.HasPN == true) {
                v2Array.push({ section: "E19", element: "E19_03", val: v2NOT_KNOWN });
                if (_procedures.pn == "ContraindicationNoted") {
                    XML.writeStartElement('eProcedures.03');
                    XML.writeAttributeString('PN', "8801001");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();
   
                    _val.push("8801001");
                }
                else if (_procedures.pn == "DeniedByOrder") {
                    _eProcedures.PN = "8801003"
                    _val.push("8801003");
                    XML.writeStartElement('eProcedures.03');
                    XML.writeAttributeString('PN', "8801003");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                }
                else if (_procedures.pn == "Refused") {
                    _eProcedures.PN = "8801019"
                    _val.push("8801019");
                    XML.writeStartElement('eProcedures.03');
                    XML.writeAttributeString('PN', "8801019");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                }
                else if (_procedures.pn == "UnabletoComplete") {
                    _eProcedures.PN = "8801023"
                    _val.push("8801023");
                    XML.writeStartElement('eProcedures.03');
                    XML.writeAttributeString('PN', "8801023");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();
                }
            };

            if (_procedures.IsNull == true)
            {
                _val.push("7701003")
                XML.writeStartElement('eProcedures.03');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();

                v2Array.push({ section: "E19", element: "E19_03", val: V2NOT_RECORDED });
            }
        }
        else
        {
            _val.push(_procedures.ValueArray[0].val);
            XML.writeElementString("eProcedures.03", _val);
            _eProcedures.HasData = true;
            _eProcedures.Value = _val;
            v2Array.push({ section: "E19", element: "E19_03", val: setV2("eProcedures.03", _val) });
        };
        ProceduresGroup["eProcedures.03"]=_val;


        //eProcedures.01////////////
        var _procedures=[]; 
        var _val=[]
        _procedures = getValue(elementList, "eProcedures.01");
        if (eProcedures.IsValid == true) 
        {
            if (_procedures.IsNull == true) 
            {
                _val.push("7701003")
                XML.writeStartElement('eProcedures.01');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
                v2Array.push({ section: "E19", element: "E19_01", val: V2NOT_RECORDED });
            }
            else 
            {
                _val.push(_procedures.ValueArray[0].val);
                XML.writeElementString("eProcedures.01", _val);
                v2Array.push({ section: "E19", element: "E19_01", val: _val });
            }
        }
        else 
        {
            _val.push("7701001")
            XML.writeStartElement('eProcedures.01');
            XML.writeAttributeString('NV', "7701001");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();
            v2Array.push({ section: "E19", element: "E19_01", val: v2NOT_APPLICABLE });
        };
        ProceduresGroup["eProcedures.01"]=_val;


        //eProcedures.02////////////
        var _procedures=[]; 
        var _val=[]
        _procedures = getValue(elementList, "eProcedures.02");
        if (eProcedures.IsValid == true) 
        {
            if (_procedures.IsNull == true) 
            {
                _val.push("7701003")
                XML.writeStartElement('eProcedures.02');
                XML.writeAttributeString('NV', "7701003");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();

                v2Array.push({ section: "E19", element: "E19_02", val: V2NOT_RECORDED });
            }
            else 
            {
                _val.push(_procedures.ValueArray[0].val);
                XML.writeElementString("eProcedures.02", _val);
                v2Array.push({ section: "E19", element: "E19_02", val: setV2("eProcedures.02", _val) });
            }
        }
        else 
        {
            _val.push("7701001")
            XML.writeStartElement('eProcedures.02');
            XML.writeAttributeString('NV', "7701001");
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeEndElement();
            v2Array.push({ section: "E19", element: "E19_02", val: v2NOT_APPLICABLE });
        };
        ProceduresGroup["eProcedures.02"]=_val;

        //eProcedures.04////////////
        var _procedures=[]; 
        var _val=[]
        _procedures = getValue(elementList, "eProcedures.04");
        if (eProcedures.IsValid == true) {
            if (_procedures.IsNull != true) {
                _val.push(_procedures.ValueArray[0].val);
                XML.writeElementString("eProcedures.04", _val);
                v2Array.push({ section: "E19", element: "E19_04", val: _val });
            }
        };
        ProceduresGroup["eProcedures.04"]=_val;

        //eProcedures.05////////////
        var _procedures=[]; 
        var _val=[]
            _procedures = getValue(elementList, "eProcedures.05");
            if (eProcedures.IsValid == true) {
                if (_procedures.IsNull == true) {
                    _val.push("7701003")
                    XML.writeStartElement('eProcedures.05');
                    XML.writeAttributeString('NV', "7701003");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                    v2Array.push({ section: "E19", element: "E19_05", val: V2NOT_RECORDED });
                }
                else {
                    _val.push(_procedures.ValueArray[0].val);
                    XML.writeElementString("eProcedures.05", _val);
                    _eProcedures.HasData = true;
                    _eProcedures.Value = _val;

                    v2Array.push({ section: "E19", element: "E19_05", val: _val });
                }
            }
            else {
                _val.push("7701001")
                XML.writeStartElement('eProcedures.05');
                XML.writeAttributeString('NV', "7701001");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
                v2Array.push({ section: "E19", element: "E19_05", val: v2NOT_APPLICABLE });

            };
            ProceduresGroup["eProcedures.05"]=_val;
        //eProcedures.06////////////
            var _procedures=[]; 
            var _val=[]
            _procedures = getValue(elementList, "eProcedures.06");
            if (eProcedures.IsValid == true) {
                if (_procedures.IsNull == true) {
                    _val.push("7701003")
                    v2Array.push({ section: "E19", element: "E19_06", val: v2NOT_RECORDED });
                }
                else {
                    _val.push(_procedures.ValueArray[0].val);
                    XML.writeElementString("eProcedures.06", _val);
                    _eProcedures.HasData = true;
                    _eProcedures.Value = _val;

                    v2Array.push({ section: "E19", element: "E19_06", val: setV2("eProcedures.06", _val) });
                }
            }
            else {
                v2Array.push({ section: "E19", element: "E19_06", val: v2NOT_APPLICABLE });
                _val.push("7701001")
                XML.writeStartElement('eProcedures.06');
                XML.writeAttributeString('NV', "7701001");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
            };

            ProceduresGroup["eProcedures.06"]=_val;

        //eProcedures.07////////////
            var _procedures=[]; 
            var _val=[]
            _procedures = getValue(elementList, "eProcedures.07");
            if (eProcedures.IsValid == true) {
                if (_procedures.IsNull == true) {
                    _val.push("7701003")
                    XML.writeStartElement('eProcedures.07');
                    XML.writeAttributeString('NV', "7701003");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                    v2Array.push({ section: "E19", element: "E19_07", val: v2NOT_RECORDED });
                }
                else {
                    var arr1 = [];
                    var arr2 = [];
                    for (var i = 0; i < _procedures.ValueArray.length; i++) {
                        if ((_procedures.ValueArray[i].HasValue == true) && (_val.indexOf(_procedures.ValueArray[i].val) == -1)) {
                            _val = _procedures.ValueArray[i].val
                            XML.writeElementString("eProcedures.07", _val);
                            arr1.push(_val);
                            arr2.push(setD2("eProcedures.07", _val));
                        }
                    };
                    v2Array.push({ section: "E06", element: "E06_12", val: arr2.slice(0) });
                }
            }
            else {
                _val.push("7701001")
                XML.writeStartElement('eProcedures.07');
                XML.writeAttributeString('NV', "7701001");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
                _eProcedures.HasData = true;
                v2Array.push({ section: "E19", element: "E19_07", val: v2NOT_APPLICABLE });
            };
            ProceduresGroup["eProcedures.07"]=_val;

        //eProcedures.08////////////
            var _procedures=[]; 
            var _val=[]
            _procedures = getValue(elementList, "eProcedures.08");
            if (eProcedures.IsValid == true) {
                if (_procedures.IsNull == true) {
                    _val.push("7701003")
                    XML.writeStartElement('eProcedures.08');
                    XML.writeAttributeString('NV', "7701003");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                    v2Array.push({ section: "E19", element: "E19_08", val: v2NOT_RECORDED });
                }
                else {
                    _val.push(_procedures.ValueArray[0].val);
                    XML.writeElementString("eProcedures.08", _val);
                    _eProcedures.HasData = true;
                    _eProcedures.Value = _val;

                    v2Array.push({ section: "E19", element: "E19_08", val: setV2("eProcedures.08", _val) });
                }
            }
            else {
                _val.push("7701001")
                XML.writeStartElement('eProcedures.08');
                XML.writeAttributeString('NV', "7701001");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
                v2Array.push({ section: "E19", element: "E19_08", val: v2NOT_APPLICABLE });
            };
            ProceduresGroup["eProcedures.08"]=_val;

        //eProcedures.09////////////
            var _procedures=[]; 
            var _val=[]
            _procedures = getValue(elementList, "eProcedures.09");
            if (eProcedures.IsValid == true) {
                if (_procedures.IsNull == true) {
                    if (isRequiredStateElement("eProcedures.09")) {
                        _val.push("7701003")
                        XML.writeStartElement('eProcedures.09');
                        XML.writeAttributeString('NV', "7701003");
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();

                        v2Array.push({ section: "E19", element: "E19_09", val: v2NOT_RECORDED });
                    }
                    else {
                        _val.push("7701005")
                        XML.writeStartElement('eProcedures.09');
                        XML.writeAttributeString('NV', "7701005");
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();

                        v2Array.push({ section: "E19", element: "E19_09", val: v2NOT_REPORTING });
                    }
                }
                else {
                    _val.push(_procedures.ValueArray[0].val);
                    XML.writeElementString("eProcedures.09", _val);
                    _eProcedures.HasData = true;
                    _eProcedures.Value = _val;

                    v2Array.push({ section: "E19", element: "E19_09", val: _val });
                }
            }
            else {
                v2Array.push({ section: "E19", element: "E19_09", val: v2NOT_AVAILABLE });
                _val.push("7701001")
                XML.writeStartElement('eProcedures.09');
                XML.writeAttributeString('NV', "7701001");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
            };
            ProceduresGroup["eProcedures.09"]=_val;


        //eProcedures.10////////////
            var _procedures=[]; 
            var _val=[]
            _procedures = getValue(elementList, "eProcedures.10");
            if (eProcedures.IsValid == true) {
                if (_procedures.IsNull == true) {
                    _val.push("7701003")
                    XML.writeStartElement('eVitals.20');
                    XML.writeAttributeString('NV', "7701003");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                }
                else {
                    _val.push(_procedures.ValueArray[0].val);
                    XML.writeElementString("eVitals.23", _val);
                    _eProcedures.HasData = true;
                    _eProcedures.Value = _val;

                }
            }
            else {
                _val.push("7701001")
                XML.writeStartElement('eAirway.04');
                XML.writeAttributeString('NV', "7701001");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
            };
            ProceduresGroup["eProcedures.10"]=_val;

        //eProcedures.11////////////
            var _procedures=[]; 
            var _val=[]
            _procedures = getValue(elementList, "eProcedures.11");
            if (eProcedures.IsValid == true) {
                if (_procedures.IsNull != true) {
                    _val.push(_procedures.ValueArray[0].val);
                    XML.writeElementString("eProcedures.11", _val);

                    v2Array.push({ section: "E06", element: "E06_12", val: setV2("eProcedures.11", _val) });
                }
            };
            ProceduresGroup["eProcedures.11"]=_val;

        //eProcedures.12////////////
            var _procedures=[]; 
            var _val=[]
            _procedures = getValue(elementList, "eProcedures.12");
            if (eProcedures.IsValid == true) {
                if (_procedures.IsNull != true) {
                    _val.push(_procedures.ValueArray[0].val);
                    XML.writeElementString("eProcedures.12", _val);
                    v2Array.push({ section: "E19", element: "E19_11", val: _val });
                }
                else {
                    _val.push("7701001")
                    XML.writeStartElement('eProcedures.12');
                    XML.writeAttributeString('NV', "7701001");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();
                    v2Array.push({ section: "E19", element: "E19_11", val: v2NOT_APPLICABLE });
                };
                ProceduresGroup["eProcedures.12"]=_val;

                //eProcedures.13////////////
                var _procedures=[]; 
                var _val=[]
                _procedures = getValue(elementList, "eProcedures.13");
                if (eProcedures.IsValid == true) {
                    if (_procedures.IsNull == true) {
                        if (isRequiredStateElement("eProcedures.13")) {
                            _val.push("7701003")
                            XML.writeStartElement('eProcedures.13');
                            XML.writeAttributeString('NV', "7701003");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();

                            v2Array.push({ section: "E19", element: "E19_12", val: V2NOT_RECORDED });
                        }
                        else {
                            _val.push("7701005")
                            XML.writeStartElement('eProcedures.13');
                            XML.writeAttributeString('NV', "7701005");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();
                            v2Array.push({ section: "E19", element: "E19_12", val: v2NOT_REPORTING });
                        }
                    }
                    else {
                        _val.push(_procedures.ValueArray[0].val);
                        XML.writeElementString("eProcedures.13", _val);
                        v2Array.push({ section: "E19", element: "E19_12", val: setV2("eProcedures.13", _val) });
                    }
                }
                else {
                    _val.push("7701001")
                    XML.writeStartElement('eProcedures.13');
                    XML.writeAttributeString('NV', "7701001");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();
                    v2Array.push({ section: "E19", element: "E19_12", val: v2NOT_APPLICABLE });
                };

                ProceduresGroup["eProcedures.13"]=_val;
            
        };
     
        console.log(_vg)
        ProceduresGroupArray.push(_vg.slice(0));

    }
    

    eProcedures.Version3 = ProceduresGroupArray.slice(0)
    console.log(eProcedures)
    return eProcedures

};
var seteMedication = function (pMedications) {
    var eMedications = new Object();
    var vv2Array = [];
    var _meds = new Object();
    if (pMedications.HasDataSet == true) {
        eMedications.IsValid = true;
        /*   ////////Check for cancelled calls, Standby, non-patient
           if ((Call.HasPatient == true) && (Call.HasTreatment == true) && (eResponse.StandBy == false)) {
               eVitals.IsValid = true;
           }
           else {
               setnA
               return eVitals;
           };
          */
        var _sectionIndex = [];
        _sectionIndex = getSectionIndex(pMedications, "eMedications.MedicationGroup")

        var MedicationsGroup = [];
        for (var xx = 0; xx < _sectionIndex.length; xx++) {
            var _vg = [];
            var _eL = pv2Array.attributes.sections[_sectionIndex[xx]].attributes.elements;
            console.log(_eL)

            //eMedications.03////////
            var _meds = [];
            var _val = [];
            _meds = getValue(elementList, "eMedications.03");
            if (eMedication.IsValid == true) {
                if (_val == null) {
                    if (_eMeds.HasPN == true) {
                        v2Array.push({ section: "E18", element: "E18_03", val: v2NOT_KNOWN });
                        if (_eMeds.pn == "ContraindicationNoted") 
                        {
                            _val.push("8801001")
                            XML.writeStartElement('eMedications.03');
                            XML.writeAttributeString('PN', "8801001");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();
                        }
                        else if (_eMeds.pn == "DeniedByOrder") {
                            _val.push("8801001")
                            XML.writeStartElement('eMedications.03');
                            XML.writeAttributeString('PN', "8801003");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();
                        }
                        else if (_eMeds.pn == "Refused") {
                            _val.push("8801019")
                            XML.writeStartElement('eMedications.03');
                            XML.writeAttributeString('PN', "8801019");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();

                            v2Array.push({ section: "E19", element: "E19_03", val: v2NOT_KNOWN });
                        }
                        else if (_eMeds.pn == "UnabletoComplete") {
                            _eMeds.PN = "8801023"
                            v2Array.push({ section: "E19", element: "E19_03", val: v2NOT_KNOWN });
                        }
                    }
                    else {
                        if (isRequiredStateElement("eMedications.03")) {
                            _val.push("7701003")
                            XML.writeStartElement('eMedications.03');
                            XML.writeAttributeString('NV', "7701003");
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeEndElement();

                            v2Array.push({ section: "E18", element: "E18_03", val: v2NOT_RECORDED });
                        }
                    }
                }
                else {
                    _val.push( _meds.ValueArray[0].val);
                    XML.writeElementString("eMedications.03", _val);
                    v2Array.push({ section: "E18", element: "E18_03", val: _val });
                }
            }
            else {
                _val.push("7701001")
                XML.writeStartElement('eMedications.03');
                XML.writeAttributeString('NV', "7701001");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
                v2Array.push({ section: "E18", element: "E18_03", val: v2NOT_RECORDED });
            };
            MedicationGroup["eMedications.01"]=_val;


            //eMedications.01////////
            var _meds = [];
            var _val = [];
            _meds = getValue(elementList, "eMedications.01");
            if (eMedication.IsValid == true) //&& (MedicationGroup.MedicationGiven == true))
            {
                if (_meds.IsNull == true) {
                    _val.push("7701003")
                    XML.writeStartElement('eMedications.01');
                    XML.writeAttributeString('NV', "7701003");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                    v2Array.push({ section: "E18", element: "E18_01", val: V2NOT_RECORDED });
                }
                else {
                    _val.push( _meds.ValueArray[0].val);
                    XML.writeElementString("eMedications.01", _val);

                    v2Array.push({ section: "E18", element: "E18_01", val: _val });
                }
            }
            else {
                _val.push("7701001")
                XML.writeStartElement('eMedications.01');
                XML.writeAttributeString('NV', "7701001");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
                v2Array.push({ section: "E18", element: "E18_01", val: v2NOT_APPLICABLE });
            };
            MedicationGroup["eMedications.02"]=_val;

            //eMedications.02////////
            var _meds = [];
            var _val = [];
            __meds = getValue(elementList, "eMedications.02");
            if (eMedication.IsValid == true) //&& (MedicationGroup.MedicationGiven == true))
            {
                if (_val == null) {
                    v2Array.push({ section: "E18", element: "E18_02", val: V2NOT_RECORDED });
                    _val.push("7701003")
                    XML.writeStartElement('eMedications.02');
                    XML.writeAttributeString('NV', "7701003");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                }
                else {
                    _val.push( _meds.ValueArray[0].val);
                    XML.writeElementString("eMedications.02", _val);
                    v2Array.push({ section: "E18", element: "E18_02", val: SetD2("eMedications.02", _val) });
                }
            }
            else {
                v2Array.push({ section: "E18", element: "E18_02", val: v2NOT_APPLICABLE });
                _val.push("7701001")
                XML.writeStartElement('eMedications.02');
                XML.writeAttributeString('NV', "7701001");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
            };
            MedicationGroup["eMedications.03"]=_val;

            //eMedication.04////////
            var _meds = [];
            var _val = [];
            _meds = getValue(elementList, "eMedications.04");
            if (eMedication.IsValid == true) //&& (MedicationGroup.MedicationGiven == true))
            {
                if (_meds.IsNull == true) {
                    if (isRequiredStateElement("eMedications.04")) {
                        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eMedications.04", Description: "Validation Error: Medication Administered Route Required. " })
                    }
                    else {
                        _val.push( _meds.ValueArray[0].val);
                        XML.writeElementString("eMedications.04", _val);
                        v2Array.push({ section: "E18", element: "E18_04", val: SetD2("eMedications.04", _val) });
                    }
                }
            };
            MedicationGroup["eMedications.04"]=_val;

            _s1 = getSectionIndex(pExam.attributes.sections[xx], "eMedications.DosageGroup");
            if (_s1 != -1) {

                //eMedication.05/////////////
                var _meds = [];
                var _val = [];
                _meds = getValue(elementList, "eMedications.05");
                if ((eMedication.IsValid == true) && (MedicationGroup.MedicationGiven == true)) {
                    if (_meds.IsNull == true) {
                        _val.push("7701003")
                        XML.writeStartElement('eMedications.05');
                        XML.writeAttributeString('NV', "7701003");
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();

                        v2Array.push({ section: "E18", element: "E18_05", val: V2NOT_RECORDED });
                    }
                    else {
                        _val.push( _meds.ValueArray[0].val);
                        XML.writeElementString("eMedications.05", _val);
                        v2Array.push({ section: "E18", element: "E18_05", val: _val });
                    }
                }
                else {
                    _val.push("7701001")
                    XML.writeStartElement('eMedications.05');
                    XML.writeAttributeString('NV', "7701001");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();
                    v2Array.push({ section: "E18", element: "E18_05", val: v2NOT_APPLICABLE });
                };
                MedicationGroup["eMedications.05"]=_val;

                //eMedication.06//////////////
                var _meds = [];
                var _val = [];
                _meds = getValue(elementList, "eMedications.06");
                if (MedicationGroupMedicationGroup["HasDosage"] == true) {
                    if (_meds.IsNull == true) {
                        _val.push("7701003")
                        XML.writeStartElement('eMedications.06');
                        XML.writeAttributeString('NV', "7701003");
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();

                        v2Array.push({ section: "E18", element: "E18_08", val: V2NOT_RECORDED });
                    }
                    else {
                        _val.push( _meds.ValueArray[0].val);
                        XML.writeElementString("eMedications.06", _val);
                        v2Array.push({ section: "E18", element: "E18_06", val: SetD2("eMedications.06", _val) });
                    }
                }
                else {
                    v2Array.push({ section: "E18", element: "E18_08", val: v2NOT_APPLICABLE });
                    _val.push("7701001")
                    XML.writeStartElement('eMedications.06');
                    XML.writeAttributeString('NV', "7701001");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();
                };
                MedicationGroup["eMedications.06"]=_val;
            };
            //eMedications.07/////////////////
            var _meds = [];
            var _val = [];
            _meds = getValue(elementList, "eMedications.07");
            if ((eMedication.IsValid == true) && (MedicationGroup.MedicationGiven == true)) {
                if (_meds.IsNull == true) {
                    _val.push("7701003")
                    XML.writeStartElement('eMedications.07');
                    XML.writeAttributeString('NV', "7701003");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                    v2Array.push({ section: "E18", element: "E18_07", val: V2NOT_RECORDED });
                }
                else {
                    _val.push( _meds.ValueArray[0].val);
                    XML.writeElementString("eMedications.07", _val);
                    _meds.HasData = true;
                    _meds.Value = _val;
                    v2Array.push({ section: "E18", element: "E18_07", val: SetD2("eMedications.07", _val) });
                }
            }
            else {
                _val.push("7701001")
                XML.writeStartElement('eMedications.07');
                XML.writeAttributeString('NV', "7701001");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
                v2Array.push({ section: "E18", element: "E18_07", val: v2NOT_APPLICABLE });
            };
            MedicationGroup["eMedications.07"]=_val;

            //eMedications.08////////////
            var _meds = [];
            var _val = [];
            _meds = getValue(elementList, "eMedications.08");
            if (eMedication.IsValid == true)// && (MedicationGroup.MedicationGiven == true))
            {
                if (_meds.IsNull == true) {
                    _val.push("7701003")
                    XML.writeStartElement('eMedications.08');
                    XML.writeAttributeString('NV', "7701003");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                    v2Array.push({ section: "E18", element: "E18_08", val: V2NOT_RECORDED });
                }
                else {
                    var arr2 = [];
                    for (var i = 0; i < _meds.ValueArray.length; i++) {
                        if ((_meds.ValueArray[i].HasValue == true) && (_val.indexOf(_meds.ValueArray[i].val) == -1)) {
                            _val.push(_meds.ValueArray[i].val);
                           XML.writeElementString("eVitals.23", _val);
                            arr2.push(SetV2("eMedications.08", _val))
                        }
                    };
                    v2Array.push({ section: "E18", element: "E18_08", val: arr2.slice(0) });
                }
            }
            else {
                _val.push("7701001")   
                XML.writeStartElement('eMedications.08');
                XML.writeAttributeString('NV', "7701001");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
                v2Array.push({ section: "E18", element: "E18_08", val: v2NOT_APPLICABLE });
            };

            MedicationGroup["eMedications.08"]=_val;
            //eMedications.09//////////////
            var _meds = [];
            var _val = [];
            _meds = getValue(elementList, "eMedications.09");
            if (eMedication.IsValid == true) //&& (MedicationGroup.MedicationGiven == true))
            {
                if (_meds.IsNull == true) {
                    if (isRequiredStateElement("eMedications.09")) {
                        _val.push("7701003")
                        XML.writeStartElement('eMedications.09');
                        XML.writeAttributeString('NV', "7701003");
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();

                        v2Array.push({ section: "E18", element: "E18_09", val: V2NOT_RECORDED });
                    }
                    else {
                        _val.push("7701005")
                        XML.writeStartElement('eMedications.09');
                        XML.writeAttributeString('NV', "7701005");
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();

                        v2Array.push({ section: "E18", element: "E18_09", val: v2NOT_REPORTING });
                    }
                }
                else {
                    _val.push( _meds.ValueArray[0].val);
                    XML.writeElementString("eMedications.09", _val);
                    v2Array.push({ section: "E18", element: "E18_09", val: SetD2("eMedications.09", _val) });
                }
            }
            else {
                _val.push("7701001")
                XML.writeStartElement('eMedications.09');
                XML.writeAttributeString('NV', "7701001");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
                v2Array.push({ section: "E18", element: "E18_09", val: v2NOT_APPLICABLE });
            };
            MedicationGroup["eMedications.09"]=_val;

            //eMedications.10////////////
            
            var _meds = [];
            var _val = [];
            _meds = getValue(elementList, "eMedications.10");
            if (eMedication.IsValid == true)// && (MedicationGroup.MedicationGiven == true))
            {
                if (_meds.IsNull == true) {
                    _val.push("7701003")
                    XML.writeStartElement('eMedications.10');
                    XML.writeAttributeString('NV', "7701003");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                }
                else {
                    _val.push( _meds.ValueArray[0].val);
                    XML.writeElementString("eMedications.10", _val);
                }
            }
            else {
                _val.push("7701001")
                XML.writeStartElement('eMedications.10');
                XML.writeAttributeString('NV', "7701001");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
            };
            MedicationGroup["eMedications.10"]=_val;

            //eMedications.11///////////
            var _meds = [];
            var _val = [];
            _meds = getValue(elementList, "eMedications.11");
            if (eMedication.IsValid == true) //&& (MedicationGroup.MedicationGiven == true))
            {
                _val.push( _meds.ValueArray[0].val);
                XML.writeElementString("eMedications.11", _val);
                v2Array.push({ section: "E18", element: "E18_10", val: SetD2("eMedications.11", _val) });
            };
            MedicationGroup["eMedications.11"]=_val;

            //eMedications.12/////////////
            var _meds = [];
            var _val = [];
            _meds = getValue(elementList, "eMedications.12");
            if (eMedication.IsValid == true) //&& (MedicationGroup.MedicationGiven == true))
            {
                if (_meds.IsNull == true) {
                    _val.push( _meds.ValueArray[0].val);
                    XML.writeElementString("eMedications.12", _val);
                    v2Array.push({ section: "E18", element: "E18_11", val: _val });
                };
                MedicationGroup["eMedications.12"]=_val;

            }
        }
    };
    return eMedications;
};
var seteProtocols = function (pProtocols) {
    var eProtocols = new Object()
    console.log(pProtocols)
    var _protocols = new Object();
    var ProtocolsGroup = new Object();
    var v2Array = [];


    if (pProtocols.HasDataSet == true) {
        pProtocols.IsValid = true;
        var _sectionIndex = [];
        _sectionIndex = getSectionIndex(pProtocols, "eProtocols.ProtocolGroup")
        var _pArr2 = [];

        for (var xx = 0; xx < _sectionIndex.length; xx++) {
            var _vg = [];
            var _eL = pProtocols.attributes.sections[_sectionIndex[xx]].attributes.elements;
            console.log(_eL)
            var ProtocolsGroupArray = [];

            ///////////eProtocols.01////////
            var _val=[];
            var _protocol=[];

            eProtocol["IsValid"] = false;
            _protocol = getValue(elementList, "eProtocols.01");
            if (eProtocol.IsValid == true) {

                if (_protocol.IsNull == true) {
                    _val.push("7701003")
                    XML.writeStartElement('eProtocols.01');
                    XML.writeAttributeString('NV', "7701003");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                    v2Array.push({ section: "E17", element: "E17_11", val: V2NOT_RECORDED });
                }
                else {
                    _val = _protocol.ValueArray[0].val;
                    XML.writeElementString("eProtocols.01", _val);
                    v2Array.push({ section: "E17", element: "E17_11", val: setV2("eProtocols.01", _val) });
                }
            }
            else {
                _val.push("7701001")
                XML.writeStartElement('eProtocols.01');
                XML.writeAttributeString('NV', "7701001");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
                v2Array.push({ section: "E17", element: "E17_11", val: v2NOT_APPLICABLE });
            };
            ProtocolGroup["eProtocol.01"]=_val;


            ///////////eProtocols.02////////
            var _eProtocols = new Object();
            _eProtocols.HasErrors = false;
            _eProtocols.HasData = false;
            _eProtocols.Name = "eProtocols.02";

            _protocol = getValue(elementList, "eProtocols.02");
            if (eProtocol["IsValid"] == true) {
                if (_protocol.IsNull == true) {
                    __val.push("7701003")
                    XML.writeStartElement('eProtocols.02');
                    XML.writeAttributeString('NV', "7701003");
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeEndElement();

                }
                else {
                    _val = _protocol.ValueArray[0].val;
                    XML.writeElementString("eProtocols.02", _val);
                    _protocol.HasData = true;
                    _protocol.Value = _val;
                }
            }
            else {
                _val.push("7701001")
                XML.writeStartElement('eProtocols.02');
                XML.writeAttributeString('NV', "7701001");
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeEndElement();
            };
            ProtocolGroup["eProtocol.02"]=_val;
        }
    }
    return eProtocol;
};
