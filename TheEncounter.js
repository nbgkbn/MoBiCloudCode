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
   /*
    if (AirwayObject.HasDataSet == false)
    {
        eAirway = setNotApplicableAll();
        eAirway.HasAirway = false;
        return eAirway;
    };
    

        /////eAirway.01
        var _eAirway = new Object();
        _eAirway.HasErrors = false;
        _eAirway.HasData = false;
        _eAirway.Name = "eAirway.01";
        var eAirwayElements = AirwayObject.attributes.sections[a].attributes.elements
        _airway = getValue(eAirwayElements, "eAirway.01");
        if (eAirway.HasAirway == true)
        {
            if (_airway.Count == 0) {
                if (isRequiredStateElement("eAirway.01") == true) {
                    _eAirway.NV = "7701003";
                }
            }
            else
            {
                _val = _airway.ValueArray[0].val;
                console.log(_airway)
                arr1 = [];
                arr2 = [];
                for (var i = 0; i < _airway.ValueArray.length; i++) {
                    if ((_airway.ValueArray[i].HasValue == true) && (arr1.indexOf(_airway.ValueArray[i].val) == -1)) {
                        _val = _airway.ValueArray[i].val;
                        _eAirway.HasData = true;
                        eAirway.HasAirway = true;
                        arr1.push(_val);
                    }
                };


                _eAirway.Value= arr1.slice(0);
            }
        }
        else
        {
            _eAirway.NV = "7701001"D;
        };
        
        /////eAirway.10
        var _eAirway = new Object();
        _eAirway.HasErrors = false;
        _eAirway.HasData = false;
        _eAirway.Name = "eAirway.10";
        _airway = getValue(eAirwayElements, "eAirway.10");
        if (Call.HasAirway == true)
        {
            if (_airway.Count != 0)
            {
                if (Call.HasAirway == true) 
                {
                    if (AirwayGroup["eAirway.10"] <= _val) 
                    {
                        _eAirway.HasErrors = true;
                        _eAirway.Error = "Validation Error: eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Date/Time Decision to Manage the Patient with an Invasive Airway "
                    }
                };

                if (_airway.IsNull != true) {
                    _val = _airway.ValueArray[0].val;
                    _eAirway.value = _val;
                    _eAirway.HasData = true;
                };
                pArr.push(_eAirway);
                delete _eAirway;
            }
        };

        /////eAirway.11
        // eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: 
        // Date/Time Decision to Manage the Patient with an Invasive Airway, 
        var _eAirway = new Object();
        _eAirway.HasErrors = false;
        _eAirway.HasData = false;
        _eAirway.Name = "eAirway.11";
        _airway = getValue(eAirwayElements, "eAirway.11");
        if (Call.HasAirway == true)
        {
            if (_airway.Count != 0) {
                if (Call.HasAirway == true) 
                {
                    if (AirwayGroup["eAirway.10"] <= _val) 
                    {
                        _eAirway.HasErrors = true;
                        _eAirway.Error ="Validation Error: eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Date/Time Decision to Manage the Patient with an Invasive Airway, "
                    }
                };
                if (_airway.IsNull != true) {
                    _val = _airway.ValueArray[0].val;
                    _eAirway.value = _val;
                    _eAirway.HasData = true;
                };
                pArr.push(_eAirway);
                delete _eAirway;
            }
        };        
        
        //////////////////////////////
        console.log(AirwayObject.attributes.sections[a].attributes)

        _sectionIndex = getSectionIndex(AirwayObject.attributes.sections[a], "eAirway.ConfirmationGroup");
        console.log(Call)
        if (_sectionIndex != -1)0
        {
            for (var x = 0; x <= _sectionIndex.length; x++) 
            {
                var pArrCG = [];

                var groupObject = AirwayObject.attributes.sections[a].attributes.sections[_sectionIndex].attributes.elements
                var ConfirmationGroupArray = [];

                /////eAirway.02
                var _eAirway = new Object();
                _eAirway.HasErrors = false;
                _eAirway.HasData = false;
                _eAirway.Name = "eAirway.02";
                _airway = getValue(groupObject, "eAirway.02");
                eAirway["HasAirwayDate"] = false;
                console.log(Call.HasAirway, _airway.Count)
                if (Call.HasAirway == true)
                {
                    if (_airway.Count == 0)
                    {
                        if (isRequiredStateElement("eAirway.02") == true)
                        {
                            _eAirway.NV = "7701003";
                        }
                        else
                        {
                            _eAirway.NV = "7701005";
                        }
                    }
                    else
                    {
                        if (_airway.IsNull != true) {
                            _val = _airway.ValueArray[0].val;
                            _eAirway.value = _val;
                            _eAirway.HasData = true;
                        };
                    }
                }
                else
                {
                    _eAirway.NV = "7701001";
                };
                pArrCG.push(_eAirway);
                delete _eAirway;
                
                /////eAirway.03
                var _eAirway = new Object();
                _eAirway.HasErrors = false;
                _eAirway.HasData = false;
                _eAirway.Name = "eAirway.03";
                _airway = getValue(groupObject, "eAirway.03");
                if (Call.HasAirway == true)
                {
                    if (_airway.Count == 0) {
                        if (isRequiredStateElement("eAirway.03") == true)
                        {
                            _eAirway.NV = "7701003";
                        }
                        else {
                            _eAirway.NV = "7701005";
                        }
                    }
                    else {
                        Call.HasAirway = true;
                        if (eAirway["HasAirwayDate"] == false)
                        {
                            _eAirway.HasErrors = false;
                            _eAirway.Error = "Validation Error: Device Confirmation requires Confirmation Time";
                        };
                        if (_airway.IsNull != true) {
                            _val = _airway.ValueArray[0].val;
                            _eAirway.value = _val;
                            _eAirway.HasData = true;
                        };
                    }
                }
                else {
                    _eAirway.NV = "7701001";
                };
                pArrCG.push(_eAirway);
                delete _eAirway;


                /////eAirway.04
                var _eAirway = new Object();
                _eAirway.HasErrors = false;
                _eAirway.HasData = false;
                _eAirway.Name = "eAirway.04";
                _airway = getValue(groupObject, "eAirway.04");
                if (eAirway.HasAirway == true)
                {
                    if (_airway.Count == 0)
                    {
                        if (isRequiredStateElement("eAirway.04") == true)
                        {
                            _eAirway.NV = "7701003";

                        }
                        else {
                            _eAirway.NV = "7701005";
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
                            arr1 = _val;
                            for (var i = 0; i < _airway.ValueArray.length; i++) {
                                if ((_airway.ValueArray[i].HasValue == true) && (arr1.indexOf(_airway.ValueArray[i].val) == -1)) {
                                    _val = _airway.ValueArray[i].val
                                    arr1.push(_val);
                                }
                            }
                            eAirway.HasAirway = true;
                            _Airway.value = arr1.slice(0);
                        }
                    }
                }
                else
                {
                    _eAirway.NV =  "7701001";
                };
                pArrCG.push(_eAirway);
                delete _eAirway;


                /////eAirway.05
                var _eAirway = new Object();
                _eAirway.HasErrors = false;
                _eAirway.HasData = false;
                _eAirway.Name = "eAirway.05";
                _airway = getValue(groupObject, "eAirway.05");
                if (Call.HasAirway == false) {
                    if (_airway.Count != 0) {
                        if (eAirway["HasAirwayDate"] == false) {
                            _eAirway.HasErrors = true
                            _eAirway.Error = "Tube Depth Requires Confirmation Time"
                        }
                        else {
                            if (_airway.IsNull != true) {
                                _val = _airway.ValueArray[0].val;
                                _eAirway.value = _val;
                                _eAirway.HasData = true;
                            }
                        }
                    };
                    pArrCG.push(_eAirway);
                    delete _eAirway;

                    /////eAirway.06
                    var _eAirway = new Object();
                    _eAirway.HasErrors = false;
                    _eAirway.HasData = false;
                    _eAirway.Name = "eAirway.06";
                    _airway = getValue(groupObject, "eAirway.06");
                    if (eAirway.HasAirway == false) {
                        if (_airway.Count == 0) {
                            if (isRequiredStateElement("eAirway.06") == true) {
                                _eAirway.NV = "7701003";
                            }
                            else {
                                _eAirway.NV = "7701005";
                            }
                        }
                        else {
                            if (eAirway["HasAirwayDate"] == false) {
                                _eAirway.HasErrors = true;
                                _eAirway.Error = "Device Placement Requires Confirmation Time"
                            }
                            else {
                                if (_airway.IsNull != true) {
                                    _val = _airway.ValueArray[0].val;
                                    _eAirway.value = _val;
                                    _eAirway.HasData = true;
                                }
                            }
                        }
                    }
                    else {
                        _eAirway.NV = "7701001";
                    };
                    pArrCG.push(_eAirway);
                    delete _eAirway;


                    /////eAirway.07
                    var _eAirway = new Object();
                    _eAirway.HasErrors = false;
                    _eAirway.HasData = false;
                    _eAirway.Name = "eAirway.07";
                    _airway = getValue(groupObject, "eAirway.07");
                    if (eAirway.HasAirway == false) {
                        if (_airway.Count == 0) {
                            if (isRequiredStateElement("eAirway.07") == true) {
                                _eAirway.NV = "7701003";
                            }
                            else {
                                _eAirway.NV = "7701005";
                            }
                        }
                        else {
                            eAirway.HasAirway = true;
                            if (_airway.IsNull != true) {
                                _val = _airway.ValueArray[0].val;
                                _eAirway.value = _val;
                                _eAirway.HasData = true;
                            }
                        }
                    }
                    else {
                        _eAirway.NV = "7701001";
                    };
                    pArrCG.push(_eAirway);
                    delete _eAirway;

                    /////eAirway.08
                    var _eAirway = new Object();
                    _eAirway.HasErrors = false;
                    _eAirway.HasData = false;
                    _eAirway.Name = "eAirway.08";
                    _airway = getValue(groupObject, "eAirway.08");
                    if (Call.HasAirway == false) {
                        if (_airway.Count == 0) {
                            if (isRequiredStateElement("eAirway.08") == true) {
                                _eAirway.NV = "7701003";
                            }
                            else {
                                _eAirway.NV = "7701005";
                            }
                        }
                        else {
                            arr1 = _val;
                            for (var i = 0; i < _airway.ValueArray.length; i++) {
                                if ((_airway.ValueArray[i].HasValue == true) && (arr1.indexOf(_airway.ValueArray[i].val) == -1)) {
                                    _val = _airway.ValueArray[i].val
                                    arr1.push(_val);
                                }
                            }
                            eAirway.HasAirway = true;
                            _Airway.value = arr1.slice(0);
                        }
                    }
                    else {
                        _eAirway.NV = "7701001";
                    };

                    pArrCG.push(_eAirway);
                    delete _eAirway;

                    /////eAirway.09
                    var _eAirway = new Object();
                    _eAirway.HasErrors = false;
                    _eAirway.HasData = false;
                    _eAirway.Name = "eAirway.08";
                    _airway = getValue(groupObject, "eAirway.09");
                    if (_airway.IsNull != true) {
                        var arr1 = [];
                        for (var i = 0; i < _airway.ValueArray.length; i++) {
                            if ((_airway.ValueArray[i].HasValue == true) && (arr1.indexOf(_airway.ValueArray[i].val) == -1)) {
                                _val = _airway.ValueArray[i].val
                                arr1.push(_val);
                            }
                        }
                        eAirway.HasAirway = true;
                        _Airway.value = arr1.slice(0);
                    };
                    pArrCG.push(_eAirway);
                    delete _eAirway;

                    ConfirmationGroupArray.push(pArrCG);
                    console.log(ConfirmationGroupArray)
                }
            };  //ConfirmationGroup Loop

            AirwayGroup.ConfirmationGroup = ConfirmationGroupArray;
            console.log(AirwayGroup)
       
            AirwayGroupArray.push(AirwayGroup)
            console.log(AirwayGroupArray)
    
            if (Call.HasAirway == false)
            {
                _eAirway.HasErrors = false;
                _eAirway.HasData = false;
                _eAirway.Name = "eAirway.01";
                _eAirway.NV =  "7701001";
                pArr.push(_eAirway);
                delete _eAirway;

                _eAirway.HasErrors = false;
                _eAirway.HasData = false;
                _eAirway.Name = "eAirway.02";
                _eAirway.NV =  "7701001";
                pArr.push(_eAirway);
                delete _eAirway;

                _eAirway.HasErrors = false;
                _eAirway.HasData = false;
                _eAirway.Name = "eAirway.03";
                _eAirway.NV =  "7701001";
                pArr.push(_eAirway);
                delete _eAirway;

                _eAirway.HasErrors = false;
                _eAirway.HasData = false;
                _eAirway.Name = "eAirway.04";
                _eAirway.NV =  "7701001";
                pArr.push(_eAirway);
                delete _eAirway;

                _eAirway.HasErrors = false;
                _eAirway.HasData = false;
                _eAirway.Name = "eAirway.06";
                _eAirway.NV =  "7701001";
                pArr.push(_eAirway);
                delete _eAirway;

                _eAirway.HasErrors = false;
                _eAirway.HasData = false;
                _eAirway.Name = "eAirway.08";
                _eAirway.NV =  "7701001";
                pArr.push(_eAirway);
                delete _eAirway;

                _eAirway.HasErrors = false;
                _eAirway.HasData = false;
                _eAirway.Name = "eAirway.09";
                _eAirway.NV =  "7701001";
                pArr.push(_eAirway);
                delete _eAirway;
            }
            else
            {
                eAirway.push(pArr);
            };
 
            console.log(AirwayGroupArray)

            eAirway.AirwayGroup = AirwayGroupArray;
            console.log(eAirway);
        }
        */
    return eAirway;
};
var seteArrest = function (eArrestObject) {

    var pArr, pArr2 = [];

    var eArrest = new Object();
    /*
    if (eArrestObject.HasDataSet != true)
    {
        /////////////eArrest.01
        var _eArrest = new Object();
        _eArrest.HasErrors = false;
        _eArrest.HasData = false;
        _eArrest.Name = "eArrest.01";
        eArrest.HasArrest = false;
        _arrest = getValue(businessObject.elements, "eArrest.01");
        if (_arrest.IsNull == true)
        {
            eArrest.HasArrest = false; //set Values to Not Applicable
            _eArrest.NV = "7701001";
            pArr2.push({ section: "E11", element: "E11_01", val: v2NOT_RECORDED });
        }
        else 
        {
            _val = _dispo.ValueArray[0].val;
            eArrest.HasArrest = true;   //We have an eArrest 
            if (_val != "3001001") 
            {
                eArrest["isCardiacArrest"] = true;
            }
            else 
            {
                eArrest["isCardiacArrest"] = false;
            };
            _val = _dispo.ValueArray[0].val;
            _eArrest.Value = _val;
            _eArrest.HasData = true;
            pArr2.push({ section: "E11", element: "E11_01", val: setV2("eArrest.01", _val) });
        };
        pArr.push(_eArrest);
        delete _eArrest;


        //When eArrest.01 Cardiac Arrest is "Yes...", other elements in the eArrest section are recorded, 
        //When eArrest.01 Cardiac Arrest is not "Yes...", other elements in the eArrest section are not recorded

        /////////////eArrest.02
        var _eArrest = new Object();
        _eArrest.HasErrors = false;
        _eArrest.HasData = false;
        _eArrest.Name = "eArrest.02";
        eArrest.HasArrest = false;

        _arrest = getValue(businessObject.elements, "eArrest.02");

        if (isApplicable == true)  //If there is no incident, all set to NOT_APPLICABLE
        {
            if (eArrest["isCardiacArrest"] == true)  //Yes value for eArrest.01
            {
                if (_arrest.IsNull == true)
                {
                    _eArrest.NV = "7701003"
                    pArr2.push({ section: "E11", element: "E11_02", val: v2NOT_RECORDED });

                }
                else 
                {
                    _val = _dispo.ValueArray[0].val;
                    _eArrest.Value = _val;
                    _eArrest.HasData = true;
                    pArr2.push({ section: "E11", element: "E11_02", val: setV2("eArrest.02", _val) });
                }
            }
        }
        else 
        {            
            _eArrest.NV = "7701001";;
            pArr2.push({ section: "E11", element: "E11_02", val: v2NOT_APPLICABLE });
        };

        pArr.push(_eArrest);
        delete _eArrest;

        /////////////eArrest.03
        var _eArrest = new Object();
        _eArrest.HasErrors = false;
        _eArrest.HasData = false;
        _eArrest.Name = "eArrest.03";
        eArrest.HasArrest = false;

        //Resuscitation Attempted By EMS does not contain "Attempted/Initiated..." and "Not Attempted..." in the same record

        eArrest["ResuscitationAttempted"] = false;
        _arrest = getValue(businessObject.elements, "eArrest.03");
        if (eArrest["isCardiacArrest"] == true)  //Yes value for eArrest.01
        {
            if (_arrest.IsNull == true)
            {
                _eArrest.NV = "7701003";
                pArr2.push({ section: "E11", element: "E11_02", val: v2NOT_RECORDED });

            }
            else 
            {
                var arrAttempt = ["3003001", "3003003", "3003005"];
                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _val.length; i++) 
                {
                    //Find Attempted Resuscitation
                    for (var i = 0; i < _arrest.ValueArray.length; i++) {
                        if ((_arrest.ValueArray[i].HasValue == true) && (arr1.indexOf(_arrest.ValueArray[i].val) == -1)) {
                            _val = _arrest.ValueArray[i].val
                            arr1.push(_val);
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
                }

                _eArrest.Value= arr1.slice(0);
                pArr2.push({ section: "E11", element: "E11_03", val: arr3.slice(0) });
            }
        }
        else 
        {
            _eArrest.NV = "7701001";;
            pArr2.push({ section: "E11", element: "E11_03", val: v2NOT_APPLICABLE });
        };
        pArr.push(_eArrest);
        delete _eArrest

        /////////////eArrest.04
        var _eArrest = new Object();
        _eArrest.Errors = false;
        _eArrest.HasData = false;
        _eArrest.Name = "eArrest.04";
        eArrest.HasArrest = false;

        var bArrestWitnessedBy = false;
        _arrest = getValue(businessObject.elements, "eArrest.04");
        if (eArrest["isCardiacArrest"] == true)  //Yes value for eArrest.01
        {
            if(_arrest.IsNull==true) 
            {
                "7701001" = "7701003";
                pArr2.push({ section: "E11", element: "E11_04", val: v2NOT_RECORDED });

            }
            else 
            {
                var arr1 = [];
                var arr2 = [];
                
                for (var i = 0; i < _arrest.ValueArray.length; i++) {
                    if ((_arrest.ValueArray[i].HasValue == true) && (arr1.indexOf(_arrest.ValueArray[i].val) == -1)) {
                        _val = _arrest.ValueArray[i].val
                        arr1.push(_val);
                        arr2.push(setV2("eArrest.04", _val));

                    }
                };
                _eArrest.Value = arr1.slice(0);
                pArr2.push({ section: "E11", element: "E11_04", val: arr2.slice(0) });
            }
        }
        else 
        {
            _eArrest.NV = "7701001"
            pArr2.push({ section: "E11", element: "E11_04", val: v2NOT_APPLICABLE });

        };
        pArr.push(_eArrest);
        delete _eArrest;

        /////////////eArrest.05
        var _eArrest = new Object();
        _eArrest.Errors = false;
        _eArrest.HasData = false;
        _eArrest.Name = "eArrest.05";
        eArrest.HasArrest = false;

        eArrest["wasCPRProvide"] = false; //can only be True when isArrest is True
        
        _arrest = getValue(businessObject.elements, "eArrest.05");
        if (eArrest["isCardiacArrest"] == true)  //Yes value for eArrest.01
        {
            if(_arrest.IsNull==true) 
            {
                _eArrest.NV = "7701003";
            }
            else 
            {
                _val = _arrest.ValueArray[0].val;
                if (_val == "9923003") 
                {
                    eArrest["wasCPRProvide"] = true;
                }
                _val = _arrest.ValueArray[0].val;
                _eArrest.HasData = true;
                _eArrest.Value = _val;
            }
        }
        else 
        {
            _eArrest.NV = "7701001";
        };
        pArr.push(_eArrest);
        delete _eArrest;

        /////////////eArrest.06
        var _eArrest = new Object();
        _eArrest.Errors = false;
        _eArrest.HasData = false;
        _eArrest.Name = "eArrest.06";
        eArrest.HasArrest = false;

        _arrest = getValue(businessObject.elements, "eArrest.06");
        if (eArrest["wasCPRProvide"] == true)  //Yes value for eArrest.01
        {
            if(_arrest.IsNull!=true) 
            {
                var arr1 = [];
                for (var i = 0; i < _arrest.ValueArray.length; i++)
                {
                    if ((_arrest.ValueArray[i].HasValue == true) && (arr1.indexOf(_arrest.ValueArray[i].val) == -1)) {
                        _val = _arrest.ValueArray[i].val
                        arr1.push(_val);
                
                    }
                };
                _eArrest.Value = arr1.slice(0);
            }
        };
        pArr.push(_eArrest);
        delete _eArrest;

        /////////////eArrest.07
        var _eArrest = new Object();
        _eArrest.Errors = false;
        _eArrest.HasData = false;
        _eArrest.Name = "eArrest.07";
        eArrest.HasArrest = false;

        eArrest["wasAEDProvided"] = false;
        _arrest = getValue(businessObject.elements, "eArrest.07");
        if (eArrest["isCardiacArrest"])  //If there is no incident, all set to NOT_APPLICABLE
        {
            if (_arrest.IsNull == true)
            {
                _eArrest.NV = "7701003";
            }
            else 
            {
                _val = _dispo.ValueArray[0].val;
                if (_val != "3007001") 
                {
                    eArrest["wasAEDProvided"] = true;
                };
                _val = _arrest.ValueArray[0].val;
                _eArrest.HasData = true;
                _eArrest.Value = _val;
            }
        }
        else 
        {
            _eArrest.NV = "7701001";
        };
        pArr.push(_eArrest);
        delete _eArrest;

        /////////////eArrest.08
        var _eArrest = new Object();
        _eArrest.Errors = false;
        _eArrest.HasData = false;
        _eArrest.Name = "eArrest.08";
        eArrest.HasArrest = false;

        _arrest = getValue(businessObject.elements, "eArrest.08");

        if (eArrest["isCardiacArrest"])  //If there is no incident, all set to NOT_APPLICABLE
        {
            if (eArrest["wasAEDProvided"] == true)  //
            {
                if (_arrest.IsNull != true) {
                    _val = _arrest.ValueArray[0].val;
                    _eArrest.HasData = true;
                    _eArrest.Value = _val;
                }
            }
        };
        pArr.push(_eArrest);
        delete _eArrest;

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
        var _eArrest = new Object();
        _eArrest.HasErrors = false;
        _eArrest.HasData = false;
        _eArrest.Name = "eArrest.09";
        eArrest.HasArrest = false;

        _arrest = getValue(businessObject.elements, "eArrest.09");
        if (eArrest["isCardiacArrest"] == true)  //If there is no incident, all set to NOT_APPLICABLE
        {
            if (eArrest["wasCPRProvide"] == true)  //Yes value for eArrest.01
            {
                if(_arrest.IsNull!=true) 
                {

                    var arr1 = [];
                    var arr3 = [];
                    for (var i = 0; i < _eArrest.ValueArray.length; i++)
                    {
                        if ((_eArrest.ValueArray[i].HasValue == true) && (arr1.indexOf(_eArrest.ValueArray[i].val) == -1))
                        {
                            _val = _arrest.ValueArray[0].val;
                            _eArrest.HasData = true;
                            _eArrest.Value = _val;
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
            _eArrest.NV = "7701001";
        };
        pArr.push(_eArrest);
        delete _eArrest;

        /////////////eArrest.10
        var _eArrest = new Object();
        _eArrest.Errors = false;
        _eArrest.HasData = false;
        _eArrest.Name = "eArrest.10";
        eArrest.HasArrest = false;
        _arrest = getValue(businessObject.elements, "eArrest.10");
        if (eArrest["isCardiacArrest"] == true)  //If there is no incident, all set to NOT_APPLICABLE
        {
            if(_arrest.IsNull==true)
            {
                if (isRequiredStateElement("eArrest.10") == true) 
                {
                    _eArrest.NV = "7701003";
                }
            }
            else
            {
                if (_arrest.IsNull != true) {
                    _val = _arrest.ValueArray[0].val;
                    _eArrest.HasData = true;
                    _eArrest.Value = _val;
                }
            }
        }
        else        
        {
            _eArrest.NV = "7701001";

        };
        pArr.push(_eArrest);
        delete _eArrest;
        
        /////////////eArrest.11
        var _eArrest = new Object();
        _eArrest.Errors = false;
        _eArrest.HasData = false;
        _eArrest.Name = "eArrest.11";
        eArrest.HasArrest = false;

        _arrest = getValue(businessObject.elements, "eArrest.11");
        if (eArrest["isCardiacArrest"] == true)  //If there is no incident, all set to NOT_APPLICABLE
            {
            if(_arrest.IsNull==true)
            {
                _eArrest.NV = "7701003";
                pArr2.push({ section: "E11", element: "E11_05", val: v2NOT_RECORDED });

            }
            else
            {
                if (_arrest.IsNull != true) {
                    _val = _arrest.ValueArray[0].val;
                    _eArrest.HasData = true;
                    _eArrest.Value = _val;
                };
                pArr2.push({ section: "E11", element: "E11_05", val: _val });
            }
        }
        else
        {
            _eArrest.NV = "7701001";
            pArr2.push({ section: "E11", element: "E11_05", val: v2NOT_APPLICABLE });
        };
        pArr.push(_eArrest);
        delete _eArrest;
        
        /////////////eArrest.12
        var _eArrest = new Object();
        _eArrest.Errors = false;
        _eArrest.HasData = false;
        _eArrest.Name = "eArrest.12";
        eArrest.HasArrest = false;

        _arrest = getValue(businessObject.elements, "eArrest.12");
        if (eArrest["isCardiacArrest"] == true)  //If there is no incident, all set to NOT_APPLICABLE
        {
            if(_arrest.IsNull==true)
            {
                if (isRequiredStateElement("eArrest.12") == true)
                {
                    _eArrest.NV = "7701003";                
                    pArr2.push({ section: "E11", element: "E11_06", val: v2NOT_RECORDED });            
                }                
            }
            else
            {    
                var arr1 = [];
                var arr2 = [];
                var arr3 = [];        
                for (var i = 0; i < _arrest.ValueArray.length; i++)
                {
                    if ((_arrest.ValueArray[i].HasValue == true) && (arr1.indexOf(_arrest.ValueArray[i].val) == -1))
                    {
                        _val = _arrest.ValueArray[i].val
                        arr1.push(_val);
                        arr2.push(setV2("eArrest.12", _val));
                    }
                };
        
                if (arr1.length >1) 
                {
                    if(arr1.indexOf("3012001") != -1)
                    {
                        _eArrest.HasErrors = true;
                        _eArrest.Error = "Validation Error:Conflicting values.  Any Return of Spontaneous Circulation Contains Conflicting Values" 
                    }
                };
                if (_arrest.IsNull != true) {
                    _val = _arrest.ValueArray[0].val;
                    _eArrest.HasData = true;
                    _eArrest.Value = _val;
                };

                pArr2.push({ section: "E11", element: "E11_06", val: arr2.slice(0)});
            }
        }
        else
        { 
            _eArrest.NV = "7701001";
            pArr2.push({ section: "E11", element: "E11_06", val: v2NOT_APPLICABLE });        

        };
        pArr.push(_eArrest);
        delete _eArrest;
                
        
        /////////////eArrest.13
        var _eArrest = new Object();
        _eArrest.Errors = false;
        _eArrest.HasData = false;
        _eArrest.Name = "eArrest.13";
        eArrest.HasArrest = false;

        _arrest = getValue(businessObject.elements, "eArrest.13");
        if (_arrest.IsNull != true) {
            _val = _arrest.ValueArray[0].val;
            _eArrest.HasData = true;
            _eArrest.Value = _val;
        };
        pArr.push(_eArrest);
        delete _eArrest;

        /////////////eArrest.14
        var _eArrest = new Object();
        _eArrest.Errors = false;
        _eArrest.HasData = false;
        _eArrest.Name = "eArrest.14";
        eArrest.HasArrest = false;

        _arrest = getValue(businessObject.elements, "eArrest.14");
        if (eArrest["isCardiacArrest"] == true)  //If there is no incident, all set to NOT_APPLICABLE
        {
            if(_arrest.IsNull==true)
            {
                if (isRequiredStateElement("eArrest.14") == true)
                {
                    _eArrest.NV = "7701003";
                    pArr2.push({ section: "E11", element: "E11_08", val: v2NOT_RECORDED });

                }
            }
            else
            {
                if (_arrest.IsNull != true) {
                    _val = _arrest.ValueArray[0].val;
                    _eArrest.HasData = true;
                    _eArrest.Value = _val;
                };

                pArr2.push({ section: "E11", element: "E11_08", val: _val });
            }
        }
        else
        {        
            _eArrest.NV = "7701001";
            pArr2.push({ section: "E11", element: "E11_08", val: v2NOT_APPLICABLE });
        };
        pArr.push(_eArrest);
        delete _eArrest;
        
        /////////////eArrest.15
        var _eArrest = new Object();
        _eArrest.Errors = false;
        _eArrest.HasData = false;
        _eArrest.Name = "eArrest.15";
        eArrest.HasArrest = false;

        _arrest = getValue(businessObject.elements, "eArrest.15");
        if (eArrest["wasbResuscitationAttempted"] == true)
        {
            if(_arrest.IsNull==true)
            {        
                if (isRequiredStateElement("eArrest.15") == true) 
                {           
                    _eArrest.NV = "7701003";
                    pArr2.push({ section: "E11", element: "E11_09", val: v2NOT_RECORDED });

                }
                else
                {
                    _eArrest.NV = "7701005";
                    pArr2.push({ section: "E11", element: "E11_09", val: v2NOT_REPORTING });            

                }          
            }
            else
            {
                if (_arrest.IsNull != true) {
                    _val = _arrest.ValueArray[0].val;
                    _eArrest.HasData = true;
                    _eArrest.Value = _val;
                };
                v2Array.push({ section: "E11", element: "E11_08", val: _val });
            }
        }
        else
        {        
            _eArrest.NV = "7701001";
            pArr2.push({ section: "E11", element: "E11_09", val: v2NOT_APPLICABLE });   
        };
        pArr.push(_eArrest);
        delete _eArrest;
                
        /////////////eArrest.16
        var _eArrest = new Object();
        _eArrest.Errors = false;
        _eArrest.HasData = false;
        _eArrest.Name = "eArrest.16";
        eArrest.HasArrest = false;

        _arrest = getValue(businessObject.elements, "eArrest.16");
        if(eArrest.wasCPRProvide ==true)
        {
            if(_arrest.IsNull==true)
            {
                if (isRequiredStateElement("eArrest.15") == true)
                {
                    _eArrest.NV = "7701003";
                    pArr2.push({ section: "E11", element: "E11_10", val: v2NOT_RECORDED });
                }
                else 
                {            
                    _eArrest.NV = "7701005";
                    pArr2.push({ section: "E11", element: "E11_10", val: v2NOT_REPORTING });
                }
            }    
            else
            {
                _val = _arrest.ValueArray[0].val;
                if (_arrest.IsNull != true) {
                    _val = _arrest.ValueArray[0].val;
                    _eArrest.HasData = true;
                    _eArrest.Value = _val;
                };
                pArr2.push({ section: "E11", element: "E11_10", val: setV2("eArrest.16", _val) });

            }
        }
        else
        {
            _eArrest.NV = "7701001";
            pArr2.push({ section: "E11", element: "E11_10", val: v2NOT_APPLICABLE });

        };
        pArr.push(_eArrest);
        delete _eArrest;
                
        /////////////eArrest.17
        var _eArrest = new Object();
        _eArrest.Errors = false;
        _eArrest.HasData = false;
        _eArrest.Name = "eArrest.17";
        eArrest.HasArrest = false;

        _arrest = getValue(businessObject.elements, "eArrest.17");
        if (eArrest["isCardiacArrest"] == true)  //If there is no incident, all set to NOT_APPLICABLE
        {
            if (_arrest.IsNull == true)
            {
                _eArrest.NV = "7701003";
                pArr2.push({ section: "E11", element: "E11_11", val: V2NOT_RECORDED });

            }
            else
            {
       
                var arr1 = [];
                var arr2 = [];
                var arr3 = [];
                for (var i = 0; i < _arrest.ValueArray.length; i++)
                {
                    if ((_arrest.ValueArray[i].HasValue == true) && (arr1.indexOf(_arrest.ValueArray[i].val) == -1))
                    {
                        _val = _arrest.ValueArray[i].val
                        arr1.push(_val);
                        arr2.push(setV2("eArrest.17", _val));
                    }
                };
        
                _eArrest.Value = arr1.slice(0);
                pArr2.push({ section: "E11", element: "E11_11", val: arr2.slice(0) });
            }
        }
        else
        {
            _eArrest.NV = "7701001";
            pArr2.push({ section: "E11", element: "E11_11", val: v2NOT_APPLICABLE });


        };
        pArr.push(_eArrest);
        delete _eArrest;
                 
        /////////////eArrest.18
        var _eArrest = new Object();
        _eArrest.Errors = false;
        _eArrest.HasData = false;
        _eArrest.Name = "eArrest.18";
        eArrest.HasArrest = false;

        _arrest = getValue(businessObject.elements, "eArrest.18");
        if (eArrest["isCardiacArrest"] == true)  //If there is no incident, all set to NOT_APPLICABLE
        {
            if(_arrest.IsNull==true) {
                _eArrest.NV = "7701003";
            }
            else
            {
                _val = _arrest.ValueArray[0].val;
                if (_arrest.IsNull != true) {
                    _val = _arrest.ValueArray[0].val;
                    _eArrest.HasData = true;
                    _eArrest.Value = _val;
                };

            }
        }
        else
        {
            _eArrest.NV = "7701001";
            
        }
    };
    pArr.push(_eArrest);
    delete _eArrest;

    */
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
        //This file contains a column called PNNill that states whether or not option 
        //6 or 2 is allowed (see the document link that I reference above and then go to the last page of the document).
        //If PNNill is populated then option 6 is used else option 2 is used.
        //For example if PNNill column is populated with PNNill then it would look like
        //<eProcedures.03 PN="8801003" xsi::nill="true"></eProcedures.03>
        //if PNNill is empty then it would look like 
        //<eProcedures.03 PN="8801003">621682859</eProcedures.03>
    
        console.log(pExam)
    ////////eExam.01 -- IsNillable Yes
        var _eExam = new Object();
        _eExam.HasData = false;
        _eExam.HasErrors = false;
        _eExam.Name = "eExam.01";

        var _exArr = [];
        var _pArr= [];
        var _pArr2= [];
        _exArr = pExam.attributes.elements;
        
    
        _exam = getValue(_exArr, "eExam.01");
    console.log(_exam)
        var eExam = new Object();
        if (pExam.HasDataSet == true)
        {
            if (_exam.IsNull == true) 
            {
                if(_exam.HasPN==true)
                {
                    _eExam.PN = "8801023"
                    pArr2.push({ section: "E16", element: "E16_01", val: v2NOT_KNOWN});     
                };
                
                if (isRequiredStateElement("eExam.01") == true)         
                {
                    _pArr2.push({ section: "E16", element: "E16_01", val: v2NOT_RECORDED });
                    _eExam.NV = "7701003";
                }
                else 
                {
                    _pArr2.push({ section: "E16", element: "E16_01", val: v2NOT_REPORTING });
                    _eExam.NV = "7701005";
                }
                
            }
            else 
            {
                _val = _exam.ValueArray[0].val;
                _eExam.HasData = true;
                _eExam.Value = _val;
                _pArr2.push({ section: "E16", element: "E16_01", val: _val });
            }
        }
        else
        {
            _pArr2.push({ section: "E16", element: "E16_01", val: v2NOT_APPLICABLE });
            _eExam.NV = "7701001";
        };
        _pArr.push(_eExam);
        delete _eExam;

    /////////eExam.02
        var _eExam = new Object();
        _eExam.HasData = false;
        _eExam.HasErrors = false;
        _eExam.Name = "eExam.02";

        _exam = getValue(_exArr, "eExam.02");
        if (pExam.HasDataSet == true)
        {
            if (_exam.IsNull == true) 
            {
                if(_exam.HasPN==true)
                {              
                    if (_exam.PN == "Refused")
                    {
                        _eExam.PN = "8801019"
                        _pArr2.push({ section: "E16", element: "E16_02", val: v2NOT_KNOWN });
                    }
                    else 
                    {
                        _eExam.PN = "8801023"
                        _pArr2.push({ section: "E16", element: "E16_02", val: v2NOT_KNOWN });
                    }
                }
                else 
                {        
                    if (isRequiredStateElement("eExam.02") == true) 
                    {
                        _pArr2.push({ section: "E16", element: "E16_02", val: v2NOT_RECORDED });
                        _eExam.NV = "7701003";                        
                    }
                    else 
                    {
                        _pArr2.push({ section: "E16", element: "E16_02", val: v2NOT_REPORTING });
                        _eExam.NV = "7701005";
                       
                    }
                }
            }
            else 
            {  
                _val = _exam.ValueArray[0].val;
                _eExam.HasData = true;
                _eExam.Value = _val;
                _pArr2.push({ section: "E16", element: "E16_02", val: _val });
    
            }
        }
        else
        {
            _pArr2.push({ section: "E16", element: "E16_02", val: v2NOT_APPLICABLE });
            _eExam.NV = "7701001";
        };
        _pArr.push(_eExam);
        delete _eExam;

        var AssessmentArray = [];
        if (pExam.HasDataSet == true) {
            _sectionIndex = getSectionIndex(pExam, "eExam.AssessmentGroup");

            for (var xx = 0; xx < _sectionIndex.length; xx++) {
                var _Ag = [];

                var _assArr = pExam.attributes.sections[xx].attributes.elements;
                /////////eExam.03
                var _eExam = new Object();
                _eExam.HasData = false;
                _eExam.HasErrors = false;
                _eExam.Name = "_eExam.03";

                _exam = getValue(_assArr, "eExam.03");
                if (_exam.IsNull != true) {
                    _val = _exam.ValueArray[0].val;
                    _eExam.HasData = true;
                    _eExam.Value = _val;
                    _Ag.push({ section: "E16", element: "E16_03", val: _val });
                };

                /////////eExam.04
                var _eExam = new Object();
                _eExam.HasData = false;
                _eExam.HasErrors = false;
                _eExam.Name = "eExam.04";

                _exam = getValue(_assArr, "eExam.04");
                if (_exam.IsNull != true) {
                    var arr1 = [];
                    var arr2 = [];
                    for (var i = 0; i < _exam.ValueArray.length; i++) {
                        if ((_exam.ValueArray[i].HasValue == true) && (arr1.indexOf(_exam.ValueArray[i].val) == -1)) {
                            _val = _exam.ValueArray[i].val
                            arr1.push(_val);
                            arr2.push(setV2("eExam.04", _val));
                        }
                    };
                    _Ag.push({ section: "E16", element: "E16_04", val: arr2.slice(0) });
                    _eExam.Value = arr1.slice(0);
                };

                _Ag.push(_eExam);
                delete _eExam;

                /////////eExam.05
                var _eExam = new Object();
                _eExam.HasData = false;
                _eExam.HasErrors = false;
                _eExam.Name = "eExam.05";

                _exam = getValue(_assArr, "eExam.05");
                if (_exam.IsNull != true) {
                    if (_exam.IsNull.HasPN == true) {
                        _eExam.PN = "8801005";
                    }
                }
                else {
                    var arr1 = [];
                    var arr2 = [];
                    for (var i = 0; i < _exam.ValueArray.length; i++) {
                        if ((_exam.ValueArray[i].HasValue == true) && (arr1.indexOf(_exam.ValueArray[i].val) == -1)) {
                            _val = _exam.ValueArray[i].val
                            arr1.push(_val);
                            arr2.push(setV2("eExam.05", _val));
                        }
                    };
                    _pArr2.push({ section: "E16", element: "E16_05", val: arr2.slice(0) });
                    _eExam.Value = arr1.slice(0);
                };
                _Ag.push(_eExam);
                delete _eExam;


                /////////eExam.06
                var _eExam = new Object();
                _eExam.HasData = false;
                _eExam.HasErrors = false;
                _eExam.Name = "eExam.06";

                _exam = getValue(_assArr, "eExam.06");
                if (_exam.IsNull == true) {
                    if (_exam.IsNull.HasPN == true) {
                        _eExam.PN = "8801005";
                    }
                }
                else {
                    var arr1 = [];
                    for (var i = 0; i < _exam.ValueArray.length; i++) {
                        if ((_exam.ValueArray[i].HasValue == true) && (arr1.indexOf(_exam.ValueArray[i].val) == -1)) {
                            _val = _exam.ValueArray[i].val
                            arr1.push(_val);
                        }
                    };
                    _eExam.Value = arr1.slice(0);
                };
                _Ag.push(_eExam);
                delete _eExam;


                /////////eExam.07
                var _eExam = new Object();
                _eExam.HasData = false;
                _eExam.HasErrors = false;
                _eExam.Name = "eExam.07";
                _exam = getValue(_assArr, "eExam.07");
                if (_exam.IsNull == true) {
                    if (_exam.IsNull.HasPN == true) {
                        _eExam.PN = "8801005";
                    }
                }
                else {
                    var arr1 = [];
                    var arr2 = [];
                    for (var i = 0; i < _exam.ValueArray.length; i++) {
                        if ((_exam.ValueArray[i].HasValue == true) && (arr1.indexOf(_exam.ValueArray[i].val) == -1)) {
                            _val = _exam.ValueArray[i].val
                            arr1.push(_val);
                            arr2.push(setV2("eExam.07", _val));
                        }
                    };
                    _pArr2.push({ section: "E16", element: "E16_06", val: arr2.slice(0) });
                    _eExam.Value = arr1.slice(0);
                };
                _Ag.push(_eExam);
                delete _eExam;

                /////////eExam.08
                var _eExam = new Object();
                _eExam.HasData = false;
                _eExam.HasErrors = false;
                _eExam.Name = "eExam.07";

                _exam = getValue(_assArr, "eExam.08");
                if (_exam.IsNull == true) {
                    if (_exam.IsNull.HasPN == true) {
                        _eExam.PN = "8801005";
                    }
                }
                else {
                    var arr1 = [];
                    var arr2 = [];
                    for (var i = 0; i < _exam.ValueArray.length; i++) {
                        if ((_exam.ValueArray[i].HasValue == true) && (arr1.indexOf(_exam.ValueArray[i].val) == -1)) {
                            _val = _exam.ValueArray[i].val
                            arr1.push(_val);
                            arr2.push(setV2("eExam.08", _val));
                        }
                    };
                    _Ag.push({ section: "E16", element: "E16_07", val: arr2.slice(0) });
                    _eExam.Value = arr1.slice(0);
                };

                /////////eExam.09
                var _eExam = new Object();
                _eExam.HasData = false;
                _eExam.HasErrors = false;
                _eExam.Name = "eExam.09";

                _exam = getValue(_assArr, "eExam.09");
                if (_exam.IsNull == true) {
                    if (_exam.IsNull.HasPN == true) {
                        _eExam.PN = "8801005";
                    }
                }
                else {

                    var arr1 = [];
                    var arr2 = [];
                    for (var i = 0; i < _exam.ValueArray.length; i++) {
                        if ((_exam.ValueArray[i].HasValue == true) && (arr1.indexOf(_exam.ValueArray[i].val) == -1)) {
                            _val = _exam.ValueArray[i].val
                            arr1.push(_val);
                            arr2.push(setV2("eExam.09", _val));

                        };
                        _Ag.push({ section: "E16", element: "E16_08", val: arr2.slice(0) });
                        _eExam.Value = arr1.slice(0);
                    }
                };


                var _eExam = new Object();
                _eExam.HasData = false;
                _eExam.HasErrors = false;
                _eExam.Name = "eExam.19";

                
                /////////eExam.12
                _exam = getValue(_assArr, "eExam.12");
                if (_exam.IsNull == true) {
                    if (_exam.IsNull.HasPN == true) {
                        _eExam.PN = "8801005";
                    }
                }
                else {
                    var arr1 = [];
                    var arr2 = [];
                    for (var i = 0; i < _exam.ValueArray.length; i++) {
                        if ((_exam.ValueArray[i].HasValue == true) && (arr1.indexOf(_exam.ValueArray[i].val) == -1)) {
                            _val = _exam.ValueArray[i].val
                            arr1.push(_val);
                            arr2.push(setV2("eExam.12", _val));
                        }
                    };
                    _pArr2.push({ section: "E16", element: "E16_13", val: arr2.slice(0) });
                    _eExam.Value = arr1.slice(0);
                };
                _Ag.push(_eExam);
                delete _eExam;
                

                /////////eExam.19
                _exam = getValue(_assArr, "eExam.19");
                if (_exam.IsNull == true) {
                    if (_exam.IsNull.HasPN == true) {
                        _eExam.PN = "8801005";
                    }
                }
                else {
                    var arr1 = [];
                    var arr2 = [];
                    for (var i = 0; i < _exam.ValueArray.length; i++) {
                        if ((_exam.ValueArray[i].HasValue == true) && (arr1.indexOf(_exam.ValueArray[i].val) == -1)) {
                            _val = _exam.ValueArray[i].val
                            arr1.push(_val);
                            arr2.push(setV2("eExam.19", _val));
                        }
                    };
                    _pArr2.push({ section: "E16", element: "E16_23", val: arr2.slice(0) });
                    _eExam.Value = arr1.slice(0);
                };
                _Ag.push(_eExam);
                delete _eExam;


                /////////eExam.20
                var _eExam = new Object();
                _eExam.HasData = false;
                _eExam.HasErrors = false;
                _eExam.Name = "eExam.20";

                _exam = getValue(_assArr, "eExam.20");
                if (_exam.IsNull == true) {
                    if (_exam.IsNull.HasPN == true) {
                        _eExam.PN = "8801005";
                    }
                }
                else {
                    var arr1 = [];
                    var arr2 = [];
                    for (var i = 0; i < _exam.ValueArray.length; i++) {
                        if ((_exam.ValueArray[i].HasValue == true) && (arr1.indexOf(_exam.ValueArray[i].val) == -1)) {
                            _val = _exam.ValueArray[i].val
                            arr1.push(_val);
                            arr2.push(setV2("eExam.20", _val));
                        }
                    };
                    _pArr2.push({ section: "E16", element: "E16_24", val: arr2.slice(0) });
                    _eExam.Value = arr1.slice(0);
                };
                _Ag.push(_eExam);
                delete _eExam;
                /*    */
                AssessmentArray.push(_Ag)
                eExam.AssessmentGroup = AssessmentArray.slice(0);
                delete _eExam;

                //AbdomenGroup////////////////////////////////////////////////////////////////////
                var AbdomenGroupArray = [];
                _s1 = getSectionIndex(pExam.attributes.sections[xx], "eExam.AbdomenGroup");
                if (_s1 != -1) {
                    for (var x = 0; x <= _s1.length-1; x++)
                    {
                        var _abdArr = [];

                        _ex1 = pExam.attributes.sections[xx].attributes.sections[_s1[x]].attributes.elements;
                        

                        /////////eExam.10
                        var _eExam = new Object();
                        _eExam.HasData = false;
                        _eExam.HasErrors = false;
                        _eExam.Name = "eExam.10";
                        var _ex1 = []

                        _exam = getValue(pExam.attributes.sections[xx].attributes.sections[_s1[x]].attributes.elements, "eExam.10");

                        console.log(_exam)
                        if (_exam.IsNull != true)
                        {
                            _val = _exam.ValueArray[0].val
                            _eExam.Value = _val;
                            _eExam.HasData = true;0
                        };
                        _abdArr.push(_eExam);
                        delete _abdArr;
                        


                        /////////eExam.11
                        _exam = getValue(_assArr, "eExam.11");
                        if (_exam.IsNull == true) 
                        {
                            if (_exam.IsNull.HasPN == true) 
                            {
                                _eExam.PN = "8801005";
                            }
                        }
                        else 
                        {
                            var arr1 = [];
                            var arr2 = [];
                            for (var i = 0; i < _exam.ValueArray.length; i++) {
                                if ((_exam.ValueArray[i].HasValue == true) && (arr1.indexOf(_exam.ValueArray[i].val) == -1)) {
                                    _val = _exam.ValueArray[i].val
                                    arr1.push(_val);
                                    arr2.push(setV2("eExam.11", _val));
                                }
                            };
                            _pArr2.push({ section: "E16", element: "E16_09", val: arr2.slice(0) });
                            _eExam.Value = arr1.slice(0);
                        };

                        _abdArr.push(_eExam);
                        delete _abdArr;

                        AbdomenGroupArray.push(_abdArr)
                    };
                        
                };
                console.log(AbdomenGroupArray)

                ////////////////////
                var SpineGroupArray = [];
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
                        var _eExam = new Object();
                        _eExam.HasData = false;
                        _eExam.HasErrors = false;
                        _eExam.Name = "eExam.13";

                        console.log("_exam13")
                        console.log(_ex1)
                        _exam = getValue(_ex1, "eExam.13");
                        console.log("_exam13")
                        console.log(_exam)
                        if (_exam.IsNull != true)
                        {
                            _val = _exam.ValueArray[0].val
                            _eExam.Value = _val;
                            _eExam.HasData = true;0
                        };
                        _spGrp.push(_eExam);
                        delete _eExam;
                    
                        
                        /////////eExam.14
                        _exam = getValue(_ex1, "eExam.14");
                        if (_exam.IsNull == true) 
                        {
                            if (_exam.IsNull.HasPN == true) 
                            {
                                _eExam.PN = "8801005";
                            }
                        }
                        else 
                        {
                            var arr1 = [];
                            var arr2 = [];
                            for (var i = 0; i < _exam.ValueArray.length; i++) 
                            {
                                if ((_exam.ValueArray[i].HasValue == true) && (arr1.indexOf(_exam.ValueArray[i].val) == -1)) 
                                {
                                    _val = _exam.ValueArray[i].val
                                    arr1.push(_val);
                                    arr2.push(setV2("eExam.14", _val));
                                }
                            };
                            _pArr2.push({ section: "E16", element: "E16_14", val: arr2.slice(0) });
                            _eExam.Value = arr1.slice(0);
                        };

                        _spGrp.push(_eExam);
                        delete _eExam;

                        SpineGroupArray.push(_spGrp)

                    };
                };
                                /////////////////////////
                
                
                        ////////////////////
                var ExtremityGroupArray = [];
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
                        var _eExam = new Object();
                        _eExam.HasData = false;
                        _eExam.HasErrors = false;
                        _eExam.Name = "eExam.15";
                        var _ex1 = []

                        _exam = getValue(_ex2, "eExam.15");

                        console.log(_exam)
                        if (_exam.IsNull != true)
                        {
                            _val = _exam.ValueArray[0].val
                            _eExam.Value = _val;
                            _eExam.HasData = true;0
                        };
                        _exGrp.push(_eExam);
                        delete _eExam;
                    
                        
                        /////////eExam.16
                        _exam = getValue(_ex2, "eExam.16");
                        if (_exam.IsNull == true) 
                        {
                            if (_exam.IsNull.HasPN == true) 
                            {
                                _eExam.PN = "8801005";
                            }
                        }
                        else 
                        {
                            var arr1 = [];
                            var arr2 = [];
                            for (var i = 0; i < _exam.ValueArray.length; i++) 
                            {
                                if ((_exam.ValueArray[i].HasValue == true) && (arr1.indexOf(_exam.ValueArray[i].val) == -1)) 
                               
                                    _val = _exam.ValueArray[i].val
                                    arr1.push(_val);
                                    arr2.push(setV2("eExam.16", _val));
                                }
                            };
                            _pArr2.push({ section: "E16", element: "E16_16", val: arr2.slice(0) });
                            _eExam.Value = arr1.slice(0);
                        };

                        _exGrp.push(_eExam);
                        delete _eExam;

                        ExtremityGroupArray.push(_exGrp)
                    }
                };


                var EyeGroupArray = [];
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
                        var _eExam = new Object();
                        _eExam.HasData = false;
                        _eExam.HasErrors = false;
                        _eExam.Name = "eExam.17";

                        _exam = getValue(_ex3, "eExam.17");

                        console.log(_exam)
                        if (_exam.IsNull != true)
                        {
                            _val = _exam.ValueArray[0].val
                            _eExam.Value = _val;
                            _eExam.HasData = true;0
                        };
                        _eyGrp.push(_eExam);
                        delete _eExam;
                    
                        
                        /////////eExam.18
                        _exam = getValue(_ex3, "eExam.18");
                        if (_exam.IsNull == true) 
                        {
                            if (_exam.IsNull.HasPN == true) 
                            {
                                _eExam.PN = "8801005";
                            }
                        }
                        else 
                        {
                            var arr1 = [];
                            var arr2 = [];
                            for (var i = 0; i < _exam.ValueArray.length; i++) 
                            {
                                if ((_exam.ValueArray[i].HasValue == true) && (arr1.indexOf(_exam.ValueArray[i].val) == -1)) 
                                {
                                    _val = _exam.ValueArray[i].val
                                    arr1.push(_val);
                                    arr2.push(setV2("eExam.18", _val));
                                }
                            };
                            _pArr2.push({ section: "E16", element: "E16_21", val: arr2.slice(0) });
                            _eExam.Value = arr1.slice(0);
                        };

                        _eyGrp.push(_eExam);
                        delete _eExam;

                        EyeGroupArray.push(_eyGrp)
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
            var _eVitals = new Object();
            _eVitals.Errors = false;
            _eVitals.HasData = false;
            _eVitals.Name = "eVitals.01";

            _vitals = getValue(_eL, "eVitals.01");
            if (eVitals.IsValid == true) {
                if (_vitals.IsNull == true) {
                    _eVitals.NV = "7701003";
                }
                else {
                    _val = _vitals.ValueArray[0].val;
                    _eVitals.HasData = true;
                    _eVitals.Value = _val;
                    _pArr2.push({ section: "E14", element: "E14_01", val: _val });
                }
            }
            else {
                _eVitals.NV = "7701001";
            };
            _vg.push(_eVitals);
            delete _eVitals;

            //eVital.02/////////////////////////////
            var _eVitals = new Object();
            _eVitals.Errors = false;
            _eVitals.HasData = false;
            _eVitals.Name = "eVitals.02";

            _vitals = getValue(_eL, "eVitals.02");
            if (eVitals.IsValid == true) 
            {
                if (_vitals.IsNull == true) 
                {
                    _pArr2.push({ section: "E14", element: "E14_02", val: v2NOT_RECORDED });
                    _eVitals.NV = "7701003";
                }
                else
                {
                    _val = _vitals.ValueArray[0].val;
                    _eVitals.HasData = true;
                    _eVitals.Value = _val;
                    _pArr2.push({ section: "E14", element: "E14_02", val: setV2("eVitals.02", _val) });
                }
            }
            else
            {
                _pArr2.push({ section: "E14", element: "E14_02", val: v2NOT_APPLICABLE });    
                _eVitals.NV = "7701001";
            };
            _vg.push(_eVitals);
            delete _eVitals;


            ///////////////////////////////////////////            
            var _sectionIndex1 = "";
            _sectionIndex1 = getSectionIndex(pVitals.attributes.sections[xx], "eVitals.CardiacRhythmGroup")
            if (_sectionIndex1 != -1)
            {
                var _eCRG = [];
                var _eCRG = pVitals.attributes.sections[_sectionIndex[xx]].attributes.sections[_sectionIndex1].attributes.elements;

                //eVital.03/////////////////////////////
                var _eVitals = new Object();
                _eVitals.Errors = false;
                _eVitals.HasData = false;
                _eVitals.Name = "eVitals.03";

                _vitals = getValue(_eCRG, "eVitals.03");
                console.log(_vitals)
                eVitals.HasECG = false;
                if (eVitals.IsValid == true) 
                {
                    if (_vitals.IsNull == true)
                    {
                        if (_vitals.HasPN == true) {
                            if (_vitals.pn == "Refused") {
                                _eVitals.PN = "8801019"
                                _pArr2.push({ section: "E14", element: "E14_03", val: v2NOT_KNOWN });
                            }
                            else if (_vitals.pn == "UnableToComplete") {
                                _eVitals.PN = "8801023 "
                                _pArr2.push({ section: "E14", element: "E14_03", val: v2NOT_KNOWN });
                            }
                        }
                        else
                        {
                            if (isRequiredStateElement("eVital.03") == true)
                            {
                                _pArr2.push({ section: "E14", element: "E14_03", val: v2NOT_RECORDED });
                                _eVitals.NV="7701003";
                            }
                        }
                    }
                    else
                    {
                        var arr1 = [];
                        var arr2 = [];
                        
                        for (var i = 0; i <= _vitals.ValueArray.length-1; i++)
                        {
                            console.log(_vitals.ValueArray[i])
                            if ((_vitals.ValueArray[i].HasValue == true) && (arr1.indexOf(_vitals.ValueArray[i].val) == -1))
                            {
                                if (typeof _vitals.ValueArray[i].val != 'undefined') {
                                    _val = _vitals.ValueArray[i].val
                                    eVitals.HasECG = true;
                                    _eVitals.HasData = true;
                                    arr1.push(_val);
                                    arr2.push(setV2("eVitals.03", _val));
                                }
                            }
                        }
                        _eVitals.Value =  arr1.slice(0);
                        _pArr2.push({ section: "E14", element: "E14_03", val: arr2.slice(0) });
    
                    }
                };
                _vg.push(_eVitals);
                delete _eVitals;
                
                
                //eVital.04/////////////////////////////
                var _eVitals = new Object();
                _eVitals.Errors = false;
                _eVitals.HasData = false;
                _eVitals.Name = "eVitals.04";
                
                _vitals = getValue(_eCRG, "eVitals.04");
                if (eVitals.HasECG == true) 
                {
                    if (_vitals.IsNull == true) 
                    {
                        if (isRequiredStateElement("eVitals.04"))
                        {
                            _eVitals.NV= "7701003";
                        }
                    }
                    else
                    {
                        _val = _vitals.ValueArray[0].val;
                        _eVitals.HasData = true;
                        _eVitals.Value = _val;
                    }
                }
                else
                {
                    _eVitals.NV= "7701001";
                };
                _vg.push(_eVitals);
                delete _eVitals;
                
                //eVital.05/////////////////////////////
                var _eVitals = new Object();
                _eVitals.Errors = false;
                _eVitals.HasData = false;
                _eVitals.Name = "eVitals.05";

                _vitals = getValue(_eCRG, "eVitals.05");
                
                if (eVitals.HasECG == true)
                {
                    if (_vitals.IsNull == true) 
                    {
                        _eVitals.NV= "7701003";
                    }
                    else {
                        var arr1 = [];
                        var arr2 = [];
                        for (var i = 0; i <= _vitals.ValueArray.length-1; i++)
                        {
                            console.log(i)
                            console.log(_vitals.ValueArray[i].val)
                            if ((_vitals.ValueArray[i].HasValue == true) && (arr1.indexOf(_vitals.ValueArray[i].val) == -1))
                            {
                                _val = _vitals.ValueArray[i].val
                                _eVitals.HasData = true;
                                arr1.push(_val);
                                arr2.push(setV2("eVitals.05", _val));
                            }
                        }
                    };
                    _eVitals.Value = arr1.slice(0);
                }
            }
            else
            {
                 
                _eVitals.NV= "7701001";                 
            };
            _vg.push(_eVitals);
            delete _eVitals;
        
        ///////////////////////////////////////////            
        var _sectionIndex2 = "";        
        _sectionIndex2 = getSectionIndex(pVitals.attributes.sections[xx], "eVitals.BloodPressureGroup")
        console.log(_sectionIndex2)
        if (_sectionIndex2 != -1)
        {
            var _eBP = [];
            var _eBP = pVitals.attributes.sections[_sectionIndex[xx]].attributes.sections[_sectionIndex2].attributes.elements;

            
                //eVital.06/////////////////////////////
                var _eVitals = new Object();
                _eVitals.Errors = false;
                _eVitals.HasData = false;
                _eVitals.Name = "eVitals.06";

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
                                _eVitals.PN = "8801005";
                                _pArr2.push({ section: "E14", element: "E14_04", val: v2NOT_KNOWN });
                            }
                            else if (_vitals.pn == "Refused")
                            {
                                _eVitals.PN = "8801019";
                                _pArr2.push({ section: "E14", element: "E14_04", val: v2NOT_KNOWN });
                            }
                            else if (_vitals.pn == "UnableToComplete")
                            {
                                _eVitals.PN = "8801023";
                                _pArr2.push({ section: "E14", element: "E14_04", val: v2NOT_KNOWN });
                            
                            }
                            else
                            {
                                if (isRequiredStateElement("eVitals.06"))
                                {
                                    _eVitals.NV  =NOT_RECORDED;
                                    _pArr2.push({ section: "E14", element: "E14_04", val: v2RECORDED });
                                }
                                else
                                {
                                
                                    _pArr2.push({ section: "E14", element: "E14_04", val: v2NOT_REPORTING });
                                    _eVitals.NV = "7701005";
                                }
                            }
                        }
                    }
                    else
                    {
                        _val = _vitals.ValueArray[0].val;
                        _eVitals.HasData = true;
                        _eVitals.Value = _val;
                        _pArr2.push({ section: "E14", element: "E14_04", val: _val });
                    }
                }
                else
                {
                    _pArr2.push({ section: "E14", element: "E14_04", val: v2NOT_APPLICABLE });
                    _eVitals.NV     = "7701001";
                };
                _vg.push(_eVitals);
                delete _eVitals;

            
                //eVitals.07/////////////////////////////
                var _eVitals = new Object();
                _eVitals.Errors = false;
                _eVitals.HasData = false;
                _eVitals.Name = "eVitals.07";

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
                                _eVitals.PN = "8801005";
                                _pArr2.push({ section: "E14", element: "E14_04", val: v2NOT_KNOWN });
                            }
                            else if (_vitals.pn == "Refused")
                            {
                                _eVitals.PN = "8801019";
                                _pArr2.push({ section: "E14", element: "E14_04", val: v2NOT_KNOWN });
                            }
                            else if (_vitals.pn == "UnableToComplete")
                            {
                                _eVitals.PN = "8801023";
                                _pArr2.push({ section: "E14", element: "E14_04", val: v2NOT_KNOWN });                            
                            }                        
                        }
                        else {
                            if (isRequiredStateElement("eVitals.07")) 
                            {
                                _pArr2.push({ section: "E14", element: "E14_05", val: v2NOT_RECORDED });
                                _eVitals.NV = "7701003";
                            }
                            else {
                                _pArr2.push({ section: "E14", element: "E14_05", val: v2NOT_REPORTING });
                                _eVitals.NV = "7701005";
                            }
                        }
                    }
                    else 
                    {
                        _val = _vitals.ValueArray[0].val;
                        _eVitals.HasData = true;
                        _eVitals.Value = _val
                        _pArr2.push({ section: "E14", element: "E14_05", val: _val });
                    }
                }
                else 
                {
                    _pArr2.push({ section: "E14", element: "E14_05", val: v2NOT_APPLICABLE });
                    _eVitals.NV  = "7701001";
                };
                _vg.push(_eVitals);
                delete _eVitals;
                        
                //eVital.08/////////////////////////////
                var _eVitals = new Object();
                _eVitals.Errors = false;
                _eVitals.HasData = false;
                _eVitals.Name = "eVitals.08";

                _vitals = getValue(_eBP, "eVitals.08");
                if ((eVitals.DBP == true) &&(eVitals.SBP== true))   //We have good BP
                {
                    if (_vitals.IsNull == true) 
                    {
                        if (isRequiredStateElement("eVitals.08")) {
                            _eVitals.NV= "7701003";
                        }
                    }
                    else 
                    {
                        _val = _vitals.ValueArray[0].val;
                        _eVitals.HasData = true;
                        _eVitals.Value = _val
                        _pArr2.push({ section: "E14", element: "E14_05", val: setV2("eVitals.08", _val) });
                    }
                }
                else
                {
                    _eVitals.NV="7701001";
                    _pArr2.push({ section: "E14", element: "E14_05", val: null });                
                };
                _vg.push(_eVitals);
                delete _eVitals;

            
                //eVital.09/////////////////////////////               
                _vitals = getValue(_eBP, "eVitals.09");
                var _eVitals = new Object();
                _eVitals.Errors = false;
                _eVitals.HasData = false;
                _eVitals.Name = "eVitals.09";

                if ((eVitals.SBP == true) && (eVitals.DBP == true)) {
                    if (_vitals.IsNull != true) 
                    {
                        _val = _vitals.ValueArray[0].val;
                        _eVitals.HasData = true;
                        _eVitals.Value = _val   
                    }
                }
                else
                {
                    if ((eVitals.SBP == true) && (eVitals.DBP == false)) {
                        _eVitals.HasErrors = true;
                        _eVitals.Error="Missing DBP Value" 
                    };
                    if ((eVitals.SBP == false) && (eVitals.DBP == true)) {
                        _eVitals.HasErrors = true;
                        _eVitals.Error="Missing SBP Value"
                    };            
                };
                _vg.push(_eVitals);
                delete _eVitals;
            
        ///////////////////////////////////////////            
                var _sectionIndex3 = [];
                _sectionIndex3 = getSectionIndex(pVitals, "eVitals.HeartRateGroup")
                if (_sectionIndex3 != -1)
                {
                    var _eHG = pVitals.attributes.sections[_sectionIndex3[xx]].attributes.elements;

                //eVital.10/////////////////////////////               
                var _eVitals = new Object();
                _eVitals.Errors = false;
                _eVitals.HasData = false;
                _eVitals.Name = "eVitals.10";

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
                                _eVitals.PN= "8801023"
                                _pArr2.push({ section: "E14", element: "E14_07", val: v2NOT_KNOWN });
            
                            }
                            else if (_vitals.pn == "Refused")
                            {
                                _eVitals.PN= "8801019";
                                _pArr2.push({ section: "E14", element: "E14_07", val: v2NOT_KNOWN });
                            }
                            else if (_vitals.pn == "ExamFindingNotPresent")
                            {
                                _eVitals.PN= "8801005";
                                _pArr2.push({ section: "E14", element: "E14_07", val: v2NOT_KNOWN });                                
                            }
                            else
                            {
                                if (isRequiredStateElement("eVitals.10"))
                                {
                                    _pArr2.push({ section: "E14", element: "E14_07", val: v2RECORDED });
                                    _eVitals.NV= "7701003";
                                }
                                else
                                {
                                    _pArr2.push({ section: "E14", element: "E14_07", val: v2NOT_REPORTING });
                                    _eVitals.NV= "7701005";
                                }
                            }
                        }
                    }
                    else
                    {
                        _val = _vitals.ValueArray[0].val;
                        _eVitals.HasData = true;
                        _eVitals.Value = _val
                        _pArr2.push({ section: "E14", element: "E14_07", val: _val });
                    }
                }
                else
                {
                    _eVitals.NV= "7701001";
                };
                _vg.push(_eVitals);
                delete _eVitals;
            
                //eVital.11/////////////////////////////               
                var _eVitals = new Object();
                _eVitals.Errors = false;
                _eVitals.HasData = false;
                _eVitals.Name = "eVitals.11";

                _vitals = getValue(_eHG, "eVitals.11");
                
                if(eVitals.IsHeartRateMonitored == true)
                {
                    if (_vitals.IsNull != true) 
                    {
                        _val = _vitals.ValueArray[0].val;
                        _eVitals.HasData = true;
                        _eVitals.Value = _val
                    }
                };
                _vg.push(_eVitals);
                delete _eVitals;

                //eVitals.12/////////////////////////////
                var _eVitals = new Object();
                _eVitals.Errors = false;
                _eVitals.HasData = false;
                _eVitals.Name = "eVitals.12";

                _vitals = getValue(_eL, "eVitals.12");
                if (eVitals.IsValid == true) 
                {
                    if (_vitals.IsNull == true) 
                    {
                        if(_vitals.HasPN==true)
                        {
                            if (_vitals.pn== "UnabletoComplete")
                            {
                                _eVitals.PN= "8801023"
                                _pArr2.push({ section: "E14", element: "E14_07", val: v2NOT_KNOWN });
            
                            }
                            else if (_vitals.pn == "Refused")
                            {
                                _eVitals.PN= "8801019";
                                _pArr2.push({ section: "E14", element: "E14_07", val: v2NOT_KNOWN });
                            }
                            else if (_vitals.pn == "ExamFindingNotPresent")
                            {
                                _eVitals.PN= "8801005";
                                _pArr2.push({ section: "E14", element: "E14_07", val: v2NOT_KNOWN });                                
                            }
                        }
                        else 
                        {
                            if (isRequiredStateElement("eVitals.12")) 
                            {
                            
                                _pArr2.push({ section: "E14", element: "E14_09", val: v2NOT_RECORDED });
                                _eVitals.NV= "7701003";
                            }
                            else {
                                _pArr2.push({ section: "E14", element: "E14_09", val: v2NOT_REPORTING });
                                _eVitals.NV= "7701005";
                            }
                        }
                    }
                    else 
                    {
                        _val = _vitals.ValueArray[0].val;
                        _eVitals.HasData = true;
                        _eVitals.Value = _val
                        _pArr2.push({ section: "E14", element: "E14_09", val: _val });
                    }
                }
                else
                {
                    _pArr2.push({ section: "E14", element: "E14_09", val: v2NOT_APPLICABLE });
                    Vitals_eVitals.NV= "7701001";
    
                };
                _vg.push(_eVitals);
                delete _eVitals;

                //eVital.13/////////////////////////////
                var _eVitals = new Object();
                _eVitals.Errors = false;
                _eVitals.HasData = false;
                _eVitals.Name = "eVitals.01";

                _vitals = getValue(_eL, "eVitals.13");
                if (eVitals.IsValid == true) 
                {
                    if (_vitals.IsNull != true) 
                    {
                        _val = _vitals.ValueArray[0].val;
                        _eVitals.HasData = true;
                        _eVitals.Value = _val    
                        _pArr2.push({ section: "E14", element: "E14_10", val: _val });
                    }
                };
                _vg.push(_eVitals);
                delete _eVitals;

            
                //eVitals.14/////////////////////////////
                var _eVitals = new Object();
                _eVitals.Errors = false;
                _eVitals.HasData = false;
                _eVitals.Name = "eVitals.01";

                _vitals = getValue(_eL, "eVitals.14");
                if (eVitals.IsValid == true) 
                {
                    if (_vitals.IsNull == true) 
                    {
                        if(_vitals.HasPN==true)
                        {
                            if (_vitals.pn== "UnabletoComplete")
                            {
                                _eVitals.PN= "8801023"
                                _pArr2.push({ section: "E14", element: "E14_11", val: v2NOT_KNOWN });
            
                            }
                            else if (_vitals.pn == "Refused")
                            {
                                _eVitals.PN= "8801019";
                                _pArr2.push({ section: "E14", element: "E14_11", val: v2NOT_KNOWN });
                            }
                            else if (_vitals.pn == "ExamFindingNotPresent")
                            {
                                _eVitals.PN= "8801005";
                                _pArr2.push({ section: "E14", element: "E14_11", val: v2NOT_KNOWN });                                
                            }
                        }
                        else 
                        {
                            if (isRequiredStateElement("eVitals.14")) 
                            {                            
                                _pArr2.push({ section: "E14", element: "E14_11", val: v2NOT_RECORDED });
                                _eVitals.NV= "7701003";
                            }
                            else {
                                _pArr2.push({ section: "E14", element: "E14_11", val: v2NOT_REPORTING });
                                _eVitals.NV= "7701005";
                            }
                        }
                    }
                    else 
                    {
                        _val = _vitals.ValueArray[0].val;
                        _eVitals.HasData = true;
                        _eVitals.Value = _val
                        _pArr2.push({ section: "E14", element: "E14_11", val: _val });
                    }
                }
                else
                {
                    _pArr2.push({ section: "E14", element: "E14_11", val: v2NOT_APPLICABLE });
                    Vitals_eVitals.NV= "7701001";  
                };
                _vg.push(_eVitals);
                delete _eVitals;

            
                //eVital.15/////////////////////////////
            var _eVitals = new Object();
            _eVitals.Errors = false;
            _eVitals.HasData = false;
            _eVitals.Name = "eVitals.15";

            _vitals = getValue(businessObject.elements, "eVitals.15");
            if (eVitals.IsValid == true) 
            {
                if (_vitals.IsNull != true)                 
                {
                    _val = _vitals.ValueArray[0].val;
                    _eVitals.HasData = true;
                    _eVitals.Value = _val                
                    _pArr2.push({ section: "E14", element: "E14_12", val: setV2("eVitals.15", _val) });
                    
                }
            };
            _vg.push(_eVitals);
            delete _eVitals;
            
                /////////////eVital.16
            var _eVitals = new Object();
            _eVitals.Errors = false;
            _eVitals.HasData = false;
            _eVitals.Name = "eVitals.16";

            _vitals = getValue(_eL, "eVitals.16");
            if (eVitals.IsValid == true) 
            {
                if (_vitals.IsNull == true) 
                {
                    if(_vitals.HasPN ==true)
                    {
                        if (_vitals.pn== "UnabletoComplete")
                        {
                            _eVitals.PN= "8801023"
                            _pArr2.push({ section: "E14", element: "E14_13", val: v2NOT_KNOWN });
            
                        }
                        else if (_vitals.pn == "Refused")
                        {
                            _eVitals.PN= "8801019";
                            _pArr2.push({ section: "E14", element: "E14_13", val: v2NOT_KNOWN });
                        }
                    }
                    else 
                    {
                        if (isRequiredStateElement("eVitals.16")) 
                        {
                            
                            _pArr2.push({ section: "E14", element: "E14_13", val: v2NOT_RECORDED });
                            _eVitals.NV= "7701003";
                        }
                        else {
                            _pArr2.push({ section: "E14", element: "E14_13", val: v2NOT_REPORTING });
                            _eVitals.NV= "7701005";
                        }
                    }
                }
                else 
                {
                    _val = _vitals.ValueArray[0].val;
                    _eVitals.HasData = true;
                    _eVitals.Value = _val
                    _pArr2.push({ section: "E14", element: "E14_13", val: _val });
                }
            }
            else
            {
                _pArr2.push({ section: "E14", element: "E14_13", val: v2NOT_APPLICABLE });
                Vitals_eVitals.NV= "7701001";    
            };
            _vg.push(_eVitals);
            delete _eVitals;
        
            
                //eVitals.17/////////////////////////////
            var _eVitals = new Object();
            _eVitals.Errors = false;
            _eVitals.HasData = false;
            _eVitals.Name = "eVitals.17";

            _vitals = getValue(_eL, "eVitals.17");
            if (eVitals.IsValid == true) 
            {
                if (_vitals.IsNull == true) 
                {
                    if(_vitals.HasPN ==true)
                    {
                        if (_vitals.pn== "UnabletoComplete")
                        {
                            _eVitals.PN= "8801023"                                    
                        }
                        else if (_vitals.pn == "Refused")
                        {
                            _eVitals.PN= "8801019";
                        }
                    }
                    else 
                    {
                        if (isRequiredStateElement("eVitals.17")) 
                        {
                            _eVitals.NV= "7701003";
                        }
                        else {
                            _eVitals.NV= "7701005";
                        }
                    }
                }
                else 
                {
                    _val = _vitals.ValueArray[0].val;
                    _eVitals.HasData = true;
                    _eVitals.Value = _val
                }
            }
            else
            {
                Vitals_eVitals.NV= "7701001";
            };
            _vg.push(_eVitals);
            delete _eVitals;

            
                //eVitals.18/////////////////////////////
            var _eVitals = new Object();
            _eVitals.Errors = false;
            _eVitals.HasData = false;
            _eVitals.Name = "eVitals.18";

            _vitals = getValue(_eL, "eVitals.18");
            if (eVitals.IsValid == true) 
            {
                if (_vitals.IsNull == true) 
                {
                    if(_vitals.HasPN ==true)
                    {
                        if (_vitals.pn== "UnabletoComplete")
                        {
                            _eVitals.PN= "8801023"
                            _pArr2.push({ section: "E14", element: "E14_14", val: v2NOT_KNOWN });
            
                        }
                        else if (_vitals.pn == "Refused")
                        {
                            _eVitals.PN= "8801019";
                            _pArr2.push({ section: "E14", element: "E14_14", val: v2NOT_KNOWN });
                        }
                    }
                    else 
                    {
                        if (isRequiredStateElement("eVitals.18")) 
                        {
                            
                            _pArr2.push({ section: "E14", element: "E14_14", val: v2NOT_RECORDED });
                            _eVitals.NV= "7701003";
                        }
                        else {
                            _pArr2.push({ section: "E14", element: "E14_14", val: v2NOT_REPORTING });
                            _eVitals.NV= "7701005";
                        }
                    }
                }
                else 
                {
                    _val = _vitals.ValueArray[0].val;
                    _eVitals.HasData = true;
                    _eVitals.Value = _val
                    _pArr2.push({ section: "E14", element: "E14_14", val: _val });
                }
            }
            else
            {
                _pArr2.push({ section: "E14", element: "E14_14", val: v2NOT_APPLICABLE });
                Vitals_eVitals.NV= "7701001";
    
            };
            _vg.push(_eVitals);
            delete _eVitals;
                       
            var _sectionIndex4 = [];
            _sectionIndex4 = getSectionIndex(pVitals, "eVitals.GlasgowScoreGroup")
            if (_sectionIndex4 != -1)
            {
                var _eGCS = pVitals.attributes.sections[_sectionIndex3[xx]].attributes.elements;
            
                //eVitals.19/////////////////////////////
                var _eVitals = new Object();
                _eVitals.Errors = false;
                _eVitals.HasData = false;
                _eVitals.Name = "eVitals.19";

                _vitals = getValue(_eGCS, "eVitals.19");
                if (eVitals.IsValid == true) 
                {
                    if (_vitals.IsNull == true) 
                    {
                        if(_vitals.HasPN ==true)
                        {
                            if (_vitals.pn== "UnabletoComplete")
                            {
                                _eVitals.PN= "8801023"
                                _pArr2.push({ section: "E14", element: "E14_15", val: v2NOT_KNOWN });
            
                            }
                            else if (_vitals.pn == "Refused")
                            {
                                _eVitals.PN= "8801019";
                                _pArr2.push({ section: "E14", element: "E14_15", val: v2NOT_KNOWN });
                            }
                        }
                        else 
                        {
                            if (isRequiredStateElement("eVitals.19")) 
                            {
                                _pArr2.push({ section: "E14", element: "E14_15", val: v2NOT_RECORDED });
                                _eVitals.NV= "7701003";
                            }
                            else {
                                _pArr2.push({ section: "E14", element: "E14_15", val: v2NOT_REPORTING });
                                _eVitals.NV= "7701005";
                            }
                        }
                    }
                    else 
                    {
                        _val = _vitals.ValueArray[0].val;
                        _eVitals.HasData = true;
                        _eVitals.Value = _val
                        _pArr2.push({ section: "E14", element: "E14_15", val: _val });
                    }
                }
                else
                {
                    _pArr2.push({ section: "E14", element: "E14_15", val: v2NOT_APPLICABLE });
                    Vitals_eVitals.NV= "7701001";
                };
                _vg.push(_eVitals);
                delete _eVitals;
        
            
                //eVital.20/////////////////////////////        
                var _eVitals = new Object();
                _eVitals.Errors = false;
                _eVitals.HasData = false;
                _eVitals.Name = "eVitals.20";

                _vitals = getValue(_eGCS, "eVitals.20");
                if (eVitals.IsValid == true) 
                {
                    if (_vitals.IsNull == true) 
                    {
                        if(_vitals.HasPN ==true)
                        {
                            if (_vitals.pn== "UnabletoComplete")
                            {
                                _eVitals.PN= "8801023"
                                _pArr2.push({ section: "E14", element: "E14_16", val: v2NOT_KNOWN });
            
                            }
                            else if (_vitals.pn == "Refused")
                            {
                                _eVitals.PN= "8801019";
                                _pArr2.push({ section: "E14", element: "E14_16", val: v2NOT_KNOWN });
                            }
                        }
                        else 
                        {
                            if (isRequiredStateElement("eVitals.20")) 
                            {
                            
                                _pArr2.push({ section: "E14", element: "E14_16", val: v2NOT_RECORDED });
                                _eVitals.NV= "7701003";
                            }
                            else {
                                _pArr2.push({ section: "E14", element: "E14_16", val: v2NOT_REPORTING });
                                _eVitals.NV= "7701005";
                            }
                        }
                    }
                    else 
                    {
                        _val = _vitals.ValueArray[0].val;
                        _eVitals.HasData = true;
                        _eVitals.Value = _val
                        _pArr2.push({ section: "E14", element: "E14_16", val: _val });
                    }
                }
                else
                {
                    _pArr2.push({ section: "E14", element: "E14_16", val: v2NOT_APPLICABLE });
                    Vitals_eVitals.NV= "7701001";
    
                };
                _vg.push(_eVitals);
                delete _eVitals;                        
            
                //eVital.21/////////////////////////////        
                var _eVitals = new Object();
                _eVitals.Errors = false;
                _eVitals.HasData = false;
                _eVitals.Name = "eVitals.21";

                _vitals = getValue(_eGCS, "eVitals.21");
                if (eVitals.IsValid == true) 
                {
                    if (_vitals.IsNull == true) 
                    {
                        if(_vitals.HasPN ==true)
                        {
                            if (_vitals.pn== "UnabletoComplete")
                            {
                                _eVitals.PN= "8801023"
                                _pArr2.push({ section: "E14", element: "E14_17", val: v2NOT_KNOWN });
            
                            }
                            else if (_vitals.pn == "Refused")
                            {
                                _eVitals.PN= "8801019";
                                _pArr2.push({ section: "E14", element: "E14_17", val: v2NOT_KNOWN });
                            }
                        }
                        else 
                        {
                            if (isRequiredStateElement("eVitals.21")) 
                            {
                            
                                _pArr2.push({ section: "E14", element: "E14_17", val: v2NOT_RECORDED });
                                _eVitals.NV= "7701003";
                            }
                            else {
                                _pArr2.push({ section: "E14", element: "E14_17", val: v2NOT_REPORTING });
                                _eVitals.NV= "7701005";
                            }
                        }
                    }
                    else 
                    {
                        _val = _vitals.ValueArray[0].val;
                        _eVitals.HasData = true;
                        _eVitals.Value = _val
                        _pArr2.push({ section: "E14", element: "E14_17", val: _val });
                    }
                }
                else
                {
                    _pArr2.push({ section: "E14", element: "E14_17", val: v2NOT_APPLICABLE });
                    Vitals_eVitals.NV= "7701001";
    
                };
                _vg.push(_eVitals);
                delete _eVitals;                        
            
                //eVital.22/////////////////////////////        
                var _eVitals = new Object();
                _eVitals.Errors = false;
                _eVitals.HasData = false;
                _eVitals.Name = "eVitals.22";

                _vitals = getValue(_eGCS, "eVitals.22");
                if (eVitals.IsValid == true) 
                {
                    if (_vitals.IsNull == true) 
                    {                    
                        if (isRequiredStateElement("eVitals.22")) 
                        {
                            
                            _pArr2.push({ section: "E14", element: "E14_18", val: v2NOT_RECORDED });
                            _eVitals.NV= "7701003";
                        }
                        else {
                            _pArr2.push({ section: "E14", element: "E14_18", val: v2NOT_REPORTING });
                            _eVitals.NV= "7701005";
                        }
                    }
                    else 
                    {
                        _val = _vitals.ValueArray[0].val;
                        _eVitals.HasData = true;
                        _eVitals.Value = _val
                        _pArr2.push({ section: "E14", element: "E14_18", val: _val });
                    }
                }
                else
                {
                    _pArr2.push({ section: "E14", element: "E14_18", val: v2NOT_APPLICABLE });
                    Vitals_eVitals.NV= "7701001";
    
                };            

                //eVital.23/////////////////////////////        
                var _eVitals = new Object();
                _eVitals.Errors = false;
                _eVitals.HasData = false;
                _eVitals.Name = "eVitals.23";
            
                _vitals = getValue(_eGCS, "eVitals.23");
                if (eVitals.IsValid == true) 
                {
                    if (_vitals.IsNull == true) 
                    {
                        if (_vitals.pn== "UnabletoComplete")
                        {
                            _eVitals.PN= "8801023"
                            _pArr2.push({ section: "E14", element: "E14_19", val: v2NOT_KNOWN });
            
                        }
                        else if (_vitals.pn == "Refused")
                        {
                            _eVitals.PN= "8801019";
                            _pArr2.push({ section: "E14", element: "E14_19", val: v2NOT_KNOWN });
                        }
                        else 
                        {
                            if (isRequiredStateElement("eVitals.23")) 
                            {
                            
                                _pArr2.push({ section: "E14", element: "E14_19", val: v2NOT_RECORDED });
                                _eVitals.NV= "7701003";
                            }
                            else {
                                _pArr2.push({ section: "E14", element: "E14_19", val: v2NOT_REPORTING });
                                _eVitals.NV= "7701005";
                            }
                        }
                    }
                    else 
                    {
                        _val = _vitals.ValueArray[0].val;
                        _eVitals.HasData = true;
                        _eVitals.Value = _val
                        _pArr2.push({ section: "E14", element: "E14_19", val: _val });
                    }
                }
                else
                {
                    _pArr2.push({ section: "E14", element: "E14_19", val: v2NOT_APPLICABLE });
                    _eVitals.NV= "7701001";
                }
            };
            
            var _sectionIndex5 = [];
            _sectionIndex5 = getSectionIndex(pVitals, "eVitals.TemperatureGroup")
            if (_sectionIndex5 != -1)
            {
                var _eTGP = pVitals.attributes.sections[_sectionIndex3[xx]].attributes.elements;

                //eVital.24/////////////////////////////        
                var _eVitals = new Object();
                _eVitals.Errors = false;
                _eVitals.HasData = false;
                _eVitals.Name = "eVitals.24";

                _vitals = getValue(_eTGP, "eVitals.24");
                if (eVitals.IsValid == true) 
                {
                    if (_vitals.IsNull == true) 
                    {
                        if (_vitals.pn== "UnabletoComplete")
                        {
                            _eVitals.PN= "8801023"
                            _pArr2.push({ section: "E14", element: "E14_20", val: v2NOT_KNOWN });
            
                        }
                        else if (_vitals.pn == "Refused")
                        {
                            _eVitals.PN= "8801019";
                            _pArr2.push({ section: "E14", element: "E14_20", val: v2NOT_KNOWN });
                        }
                        else 
                        {
                            if (isRequiredStateElement("eVitals.24")) 
                            {
                            
                                _pArr2.push({ section: "E14", element: "E14_20", val: v2NOT_RECORDED });
                                _eVitals.NV= "7701003";
                            }
                            else {
                                _pArr2.push({ section: "E14", element: "E14_20", val: v2NOT_REPORTING });
                                _eVitals.NV= "7701005";
                            }
                        }
                    }
                    else 
                    {
                        _val = _vitals.ValueArray[0].val;
                        _eVitals.HasData = true;
                        _eVitals.Value = _val
                        _pArr2.push({ section: "E14", element: "E14_20", val: _val });
                    }
                }
                else
                {
                    _pArr2.push({ section: "E14", element: "E14_20", val: v2NOT_APPLICABLE });
                    _eVitals.NV= "7701001";
    
                };
                
                //eVital.25/////////////////////////////   
                var _eVitals = new Object();
                _eVitals.Errors = false;
                _eVitals.HasData = false;
                _eVitals.Name = "eVitals.25";

            
                _vitals = getValue(_eTGP, "eVitals.25");
                if (eVitals.HasTemperature == true) {
                    if (_vitals.IsNull != true) 
                    {
                        _val = _vitals.ValueArray[0].val;
                        _eVitals.HasData = true;
                        _eVitals.Value = _val;
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
                //eVital.26/////////////////////////////   
            var _eVitals = new Object();
            _eVitals.Errors = false;
            _eVitals.HasData = false;
            _eVitals.Name = "eVitals.26";

            _val = getValue(_eL, "eVitals.26");
            if (eVitals.IsValid == true) {
                if (_vitals.IsNull == true) 
                {
                    _pArr2.push({ section: "E14", element: "E14_22", val: v2NOT_RECORDED });
                    _eVitals.NV="7701003";
            
                }
                else 
                {
                    _val = _vitals.ValueArray[0].val;
                    _eVitals.HasData = true;
                    _eVitals.Value = _val;
                    _pArr2.push({ section: "E14", element: "E14_22", val: setV2("eVitals.26", _val) });
                 
                }
            }
            else
            {
                _pArr2.push({ section: "E14", element: "E14_22", val: v2NOT_APPLICABLE });
                _eVitals.NV= "7701001";
            };
            
            var _sectionIndex6 = [];
            _sectionIndex6 = getSectionIndex(pVitals, "eVitals.PainScaleGroup")
            if (_sectionIndex6 != -1)
            {
                var _ePSG = pVitals.attributes.sections[_sectionIndex3[xx]].attributes.elements;
                //eVital.27/////////////////////////////   
                var _eVitals = new Object();
                _eVitals.Errors = false;
                _eVitals.HasData = false;
                _eVitals.Name = "eVitals.27";


                _vitals = getValue(_ePSG, "eVitals.27");
                if (eVitals.IsValid == true) 
                {
                    if (_vitals.IsNull == true) 
                    {
                        if (_vitals.pn== "UnabletoComplete")
                        {
                            _eVitals.PN= "8801023"
                            _pArr2.push({ section: "E14", element: "E14_23", val: v2NOT_KNOWN });
            
                        }
                        else if (_vitals.pn == "Refused")
                        {
                            _eVitals.PN= "8801019";
                            _pArr2.push({ section: "E14", element: "E14_23", val: v2NOT_KNOWN });
                        }
                        else 
                        {
                            if (isRequiredStateElement("eVitals.27")) 
                            {
                            
                                _pArr2.push({ section: "E14", element: "E14_23", val: v2NOT_RECORDED });
                                _eVitals.NV= "7701003";
                            }
                            else {
                                _pArr2.push({ section: "E14", element: "E14_23", val: v2NOT_REPORTING });
                                _eVitals.NV= "7701005";
                            }
                        }
                    }
                    else 
                    {
                        _val = _vitals.ValueArray[0].val;
                        _eVitals.HasData = true;
                        _eVitals.Value = _val
                        _pArr2.push({ section: "E14", element: "E14_23", val: _val });
                    }
                }
                else
                {
                    _pArr2.push({ section: "E14", element: "E14_23", val: v2NOT_APPLICABLE });
                    _eVitals.NV= "7701001";
    
                };
                //eVital.28/////////////////////////////   
                var _eVitals = new Object();
                _eVitals.Errors = false;
                _eVitals.HasData = false;
                _eVitals.Name = "eVitals.28";

                _vitals = getValue(_ePSG, "eVitals.28");
                if (eVitals.IsValid == true) 
                {
                    if (_vitals.IsNull == true) 
                    {
                        if (_vitals.pn== "UnabletoComplete")
                        {
                            _eVitals.PN= "8801023"                     
                        }
                        else if (_vitals.pn == "Refused")
                        {
                            _eVitals.PN= "8801019";
                        }
                        else 
                        {
                            if (isRequiredStateElement("eVitals.24")) 
                            {
                                _eVitals.NV= "7701003";
                            }
                            else {
                                _eVitals.NV= "7701005";
                            }
                        }
                    }
                    else 
                    {
                        _val = _vitals.ValueArray[0].val;
                        _eVitals.HasData = true;
                        _eVitals.Value = _val
                    }
                }
                else
                {
                    _eVitals.NV= "7701001";
    
                }
            };
            
            
            var _sectionIndex7 = [];
            _sectionIndex7 = getSectionIndex(pVitals, "eVitals.StrokeScaleGroup")
            if (_sectionIndex7 != -1) {
                var _eSSG = pVitals.attributes.sections[_sectionIndex3[xx]].attributes.elements;
                //eVital.29/////////////////////////////   
                var _eVitals = new Object();
                _eVitals.Errors = false;
                _eVitals.HasData = false;
                _eVitals.Name = "eVitals.29";

                _vitals = getValue(_eL, "eVitals.29");
                if (eVitals.IsValid == true) {
                    if (_vitals.IsNull == true) {
                        if (_vitals.pn == "UnabletoComplete") {
                            _eVitals.PN = "8801023"
                            _pArr2.push({ section: "E14", element: "E14_24", val: v2NOT_KNOWN });

                        }
                        else if (_vitals.pn == "Refused") {
                            _eVitals.PN = "8801019";
                            _pArr2.push({ section: "E14", element: "E14_24", val: v2NOT_KNOWN });
                        }
                        else {
                            if (isRequiredStateElement("eVitals.29")) {
                                _pArr2.push({ section: "E14", element: "E14_24", val: v2NOT_RECORDED });
                                _eVitals.NV = "7701003";
                            }
                            else {
                                _pArr2.push({ section: "E14", element: "E14_24", val: v2NOT_REPORTING });
                                _eVitals.NV = "7701005";
                            }
                        }
                    }
                    else {
                        _val = _vitals.ValueArray[0].val;
                        _eVitals.HasData = true;
                        _eVitals.Value = _val
                        _pArr2.push({ section: "E14", element: "E14_24", val: _val });
                    }
                }
                else {
                    _pArr2.push({ section: "E14", element: "E14_24", val: v2NOT_APPLICABLE });
                    _eVitals.NV = "7701001";

                };

                //eVital.30/////////////////////////////   
                var _eVitals = new Object();
                _eVitals.Errors = false;
                _eVitals.HasData = false;
                _eVitals.Name = "eVitals.30";

                _vitals = getValue(_eL, "eVitals.30");
                if (eVitals.IsValid == true) {
                    if (_vitals.IsNull == true) {
                        if (_vitals.pn == "UnabletoComplete") {
                            _eVitals.PN = "8801023"
                        }
                        else if (_vitals.pn == "Refused") {
                            _eVitals.PN = "8801019";
                        }
                        else {
                            if (isRequiredStateElement("eVitals.30")) {
                                _eVitals.NV = "7701003";
                            }
                            else {
                                _eVitals.NV = "7701005";
                            }
                        }
                    }
                    else {
                        _val = _vitals.ValueArray[0].val;
                        _eVitals.HasData = true;
                        _eVitals.Value = _val
                    }
                }
                else {
                    _eVitals.NV = "7701001";
                }
            };
            
            //eVital.31/////////////////////////////   
            var _eVitals = new Object();
            _eVitals.Errors = false;
            _eVitals.HasData = false;
            _eVitals.Name = "eVitals.31";

            _vitals = getValue(_eL, "eVitals.31");
            if (eVitals.IsValid == true) 
            {
                if (_vitals.IsNull == true) 
                {
                    if (_vitals.pn== "UnabletoComplete")
                    {
                        _eVitals.PN= "8801023"
                        _pArr2.push({ section: "E14", element: "E14_25", val: v2NOT_KNOWN });
            
                    }
                    else if (_vitals.pn == "Refused")
                    {
                        _eVitals.PN= "8801019";
                        _pArr2.push({ section: "E14", element: "E14_25", val: v2NOT_KNOWN });
                    }
                    else 
                    {
                        if (isRequiredStateElement("eVitals.31")) 
                        {
                            
                            _pArr2.push({ section: "E14", element: "E14_25", val: v2NOT_RECORDED });
                            _eVitals.NV= "7701003";
                        }
                        else {
                            _pArr2.push({ section: "E14", element: "E14_25", val: v2NOT_REPORTING });
                            _eVitals.NV= "7701005";
                        }
                    }
                }
                else 
                {
                    _val = _vitals.ValueArray[0].val;
                    _eVitals.HasData = true;
                    _eVitals.Value = _val
                    _pArr2.push({ section: "E14", element: "E14_25", val: _val });
                }
            }
            else
            {
                _pArr2.push({ section: "E14", element: "E14_25", val: v2NOT_APPLICABLE });
                _eVitals.NV= "7701001";
    
            };
            
                //eVital.32/////////////////////////////   
            var _eVitals = new Object();
            _eVitals.Errors = false;
            _eVitals.HasData = false;
            _eVitals.Name = "eVitals.32";
            _vitals = getValue(_eL, "eVitals.32 ");
            if (eVitals.IsValid == true) {
                if (_vitals.IsNull == true)    
                {
                    if (_vitals.HasPN == true)
                    {                     
                        _pArr2.push({ section: "E14", element: "E14_26", val: v2NOT_KNOWN });
                        _eVitals.NV="8801023"
                        }
                    }
                }
                else
                {
                _val = _vitals.ValueArray[0].val;
                _eVitals.HasData = true;
                _eVitals.Value = _val
                _pArr2.push({ section: "E14", element: "E14_26", val: _val });
                }
            };
                _vg.push(_eVitals);
                delete _eVitals;

                    //eVital.33/////////////////////////////   
            var _eVitals = new Object();
            _eVitals.Errors = false;
            _eVitals.HasData = false;
            _eVitals.Name = "eVitals.33";
            _vitals = getValue(_eL, "eVitals.33");            
            if (eVitals.IsValid == true)
            {
                if (_vitals.IsNull == true)    
                {                    
                    if (_vitals.HasPN == true) 
                    {
                        if (_vitals.pn == "Refused") 
                        {
                            eVitals.PN ="8801019";
                            _pArr2.push({ section: "E14", element: "E14_27", val: v2NOT_KNOWN });
                        }
                        else if (_PNValue == "UnabletoComplete") 
                        {
                            eVitals.PN ="8801023";
                            _pArr2.push({ section: "E14", element: "E14_27", val: v2NOT_KNOWN });
                        }
                    }
                }
                else 
                {      console.log("L")          
                    _val = _vitals.ValueArray[0].val;
                    _eVitals.HasData = true;
                    _eVitals.Value = _val
                };
                _vg.push(_eVitals);
                delete _eVitals;

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
    var _eInjury = new Object();
    _eInjury.Errors = false;
    _eInjury.HasData = false;
    _eInjury.Name = "eInjury.01";
    
    if (eInjury.IsValid == true) //if have a transport, forgot the data, 
    {
        _injury = getValue(elementList, "eInjury.01");
        if (_injury.IsNull == true) 
        {
            _eInjury.NV = "7701003";
            v2Array.push({ section: "E10", element: "E10_01", val: v2NOT_RECORDED });
        }
        else 
        { 
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _injury.ValueArray.length; i++)
            {
                if ((_injury.ValueArray[i].HasValue == true) && (arr1.indexOf(_injury.ValueArray[i].val) == -1))
                {
                    _val = _injury.ValueArray[i].val
                    _eInjury.HasData = true;
                    arr1.push(_val);
                    arr2.push(setV2("eInjury.01", _val));
                }
            };
            _eInjury.Value= arr1.slice(0);
            v2Array.push({ section: "E10", element: "E10_01", val: arr2.slice(0) });
        }
    }
    else
    {
        _eInjury.NV= "7701001";
        v2Array.push({ section: "E10", element: "E10_01", val: v2NOT_APPLICABLE });
    };
    _vg.push(_eInjury);
    delete _eInjury;
    
    //eInjury.02///////////////////
    var _eInjury = new Object();
    _eInjury.Errors = false;
    _eInjury.HasData = false;
    _eInjury.Name = "eInjury.02";

    
    if (eInjury.IsValid == true) 
    {
        _injury = getValue(elementList, "eInjury.02");
        if (_injury.IsNull == true) 
        {
            if (isRequiredStateElement("eInjury.02")) 
            {
                _eInjury.NV = "7701003";
                v2Array.push({ section: "E10", element: "E10_03", val: v2NOT_RECORDED });
            }    
            else 
            {
                _eInjury.NV= "7701005";
            }
        }
        else 
        {
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _injury.ValueArray.length; i++)
            {
                if ((_injury.ValueArray[i].HasValue == true) && (arr1.indexOf(_injury.ValueArray[i].val) == -1))
                {
                    _val = _injury.ValueArray[i].val
                    _eInjury.HasData = true;
                    arr1.push(_val);
                    arr2.push(setV2("eInjury.02", _val));
                }
            };
            eInjury.bHasInjury = true;            
            _eInjury.Value=  arr1.slice(0);
            v2Array.push({ section: "E10", element: "E10_03", val: arr2.slice(0) });
        }
    }
    else
    {
        _eInjury.NV= "7701001";
        v2Array.push({ section: "E10", element: "E10_03", val: v2NOT_APPLICABLE });
    };
    _vg.push(_eInjury);
    delete _eInjury;

    
        
    //eInjury.03///////////////////
    var _eInjury = new Object();
    _eInjury.Errors = false;
    _eInjury.HasData = false;
    _eInjury.Name = "eInjury.03";


    if (eInjury.IsValid == true) //if have a transport, forgot the data, 
    {
        _injury = getValue(elementList, "eInjury.03");
        if (_injury.IsNull == true) 
        {
            if (isRequiredStateElement("eInjury.03")) 
            {
                _eInjury.NV = "7701003";
            }
        }
        else 
        {
            var arr1 = [];
            var arr3 = [];
            for (var i = 0; i < _injury.ValueArray.length; i++)
            {
                if ((_injury.ValueArray[i].HasValue == true) && (arr1.indexOf(_injury.ValueArray[i].val) == -1))
                {
                    _val = _injury.ValueArray[i].val
                    arr1.push(_val);
                }
            };
            eInjury.HasInjury = true;
            _eInjury.Value= arr1.slice(0);
        }
    }
    else
    {
        _eInjury.NV = "7701001";
    };
    _vg.push(_eInjury);
    delete _eInjury;
    
    //eInjury.04///////////////////
        var _eInjury = new Object();
        _eInjury.Errors = false;
        _eInjury.HasData = false;
        _eInjury.Name = "eInjury.04";

    
        if (eInjury.IsValid == true) 
        {
            _injury = getValue(elementList, "eInjury.04");
            if(_injury.IsNull == true)
            {
                if (_injury.HasPN == true) {
                    {
                        _eInjury.PN = "8801005";
                        v2Array.push({ section: "E14", element: "E14_04", val: v2NOT_KNOWN });
                    }
                }
                else {
                    _eInjury.NV = "7701003";
                    v2Array.push({ section: "E10", element: "E10_04", val: v2NOT_RECORDED });
                }
            }
            else {
                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _injury.ValueArray.length; i++)
                {
                    if ((_injury.ValueArray[i].HasValue == true) && (arr1.indexOf(_injury.ValueArray[i].val) == -1))
                    {
                        _val = _injury.ValueArray[i].val
                        arr1.push(_val);
                        arr2.push(setV2("eInjury.04", _val));                    
                    }
                };
                eInjury.HasInjury = true;
                _eInjury.Value = arr1.slice(0);
                v2Array.push({ section: "E10", element: "E10_04", val: arr2.slice(0) });
            }
        }
        else
        {
            _eInjury.NV = "7701001";
            v2Array.push({ section: "E10", element: "E10_04", val: v2NOT_APPLICABLE});
        };
        _vg.push(_eInjury);
        delete _eInjury;

    ///eInjury.05////////////

        var _eInjury = new Object();
        _eInjury.Errors = false;
        _eInjury.HasData = false;
        _eInjury.Name = "eInjury.05";
        
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
                    _val = _injury.ValueArray[0].val;
                    if ((_val > 1) && (_val < 12))
                    {
                        _eInjury.HasErrors = true;
                        _eInjury.Error = "Validation Error:  Main Area of Impact must be between 1 and 12. "
                    }
                    else {
                        eInjury.HasInjury = true;
                        _val = _injury.ValueArray[0].val;
                        _eInjury.HasData = true;
                        _eInjury.Value = _val;
                    }
                }
            }
        }
        else
        {
            v2Array.push({ section: "E10", element: "E10_05", val: v2NOT_RECORDED });
        };
        _vg.push(_eInjury);
        delete _eInjury;
    
    //eInjury.06///////////
        var _eInjury = new Object();
        _eInjury.Errors = false;
        _eInjury.HasData = false;
        _eInjury.Name = "eInjury.06";
        
        if (eInjury.IsValid == true) //if have a transport, forgot the data, 
        {
            _injury = getValue(elementList, "eInjury.06");
            if (_injury.IsNull != true) 
            {
                eInjury.HasInjury = true;
                //_eInjury.Value = _injury.ValueArray[0].val;
                _eInjury.HasData = true;
               // _eInjury.Value = _val;
            }
        };
        _vg.push(_eInjury);
        delete _eInjury;

    //eInjury.07/////////
        var _eInjury = new Object();
        _eInjury.Errors = false;
        _eInjury.HasData = false;
        _eInjury.Name = "eInjury.07";

        if (eInjury.IsValid == true) 
        {
            _injury = getValue(elementList, "eInjury.07");
          
            if (_injury.IsNull == true) 
            {
                if (isRequiredStateElement("eInjury.07")) 
                {
                    _eInjury.NV = "7701003";
                }
                else 
                {
                    _eInjury.NV = "7701005";
                }
            }
            else 
            {
                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _injury.ValueArray.length; i++) {
                    if ((_injury.ValueArray[i].HasValue == true) && (arr1.indexOf(_injury.ValueArray[i].val) == -1)) {
                        _val = _injury.ValueArray[i].val
                        arr1.push(_val);
                        arr2.push(setV2("eInjury.07", _val));
                    }
                };

                eInjury.HasInjury = true;
                _eInjury.Value = arr1.slice(0);
                v2Array.push({ section: "E10", element: "E10_08", val: arr2.slice(0) });
            }
        }
        else
        {
            _eInjury.NV = "7701001";
            v2Array.push({ section: "E10", element: "E10_08", val: v2NOT_APPLICABLE});    
        };
        _vg.push(_eInjury);
        delete _eInjury;

    //eInjury.08//////////
        var _eInjury = new Object();
        _eInjury.Errors = false;
        _eInjury.HasData = false;
        _eInjury.Name = "eInjury.08";

        if (eInjury.IsValid == true) //if have a transport, forgot the data, 
        {
            _injury = getValue(elementList, "eInjury.08");
            if (_injury.IsNull == true) 
            {
                v2Array.push({ section: "E10", element: "E10_09", val: v2NOT_KNOWN });
            }
            else 
            {        
                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _injury.ValueArray.length; i++) {
                    if ((_injury.ValueArray[i].HasValue == true) && (arr1.indexOf(_injury.ValueArray[i].val) == -1)) {
                        _val = _injury.ValueArray[i].val
                        arr1.push(_val);
                        arr2.push(setV2("eInjury.08", _val));
                    }
                };
                eInjury.HasInjury = true;
                _eInjury.Value = arr1.slice(0);
                v2Array.push({ section: "E10", element: "E10_09", val: arr2.slice(0) });
            }                        
        }
        else
        {
            v2Array.push({ section: "E10", element: "E10_09", val: v2NOT_KNOWN });
        };
        _vg.push(_eInjury);
        delete _eInjury;

    
    //eInjury.09/////////////
        var _eInjury = new Object();
        _eInjury.Errors = false;
        _eInjury.HasData = false;
        _eInjury.Name = "eInjury.09";
        
        if (eInjury.IsValid == true) //if have a transport, forgot the data, 
        {
            _injury = getValue(elementList, "eInjury.09");
            if (_injury.IsNull != true) 
            
            {
                eInjury.HasInjury = true;
                _val = _injury.ValueArray[0].val;
                _eInjury.HasData = true;
                _eInjury.Value = _val;
                v2Array.push({ section: "E10", element: "E10_10", val: _val });
            }
        };
        _vg.push(_eInjury);
        delete _eInjury;

    //eInjury.10///////////////
        var _eInjury = new Object();
        _eInjury.Errors = false;
        _eInjury.HasData = false;
        _eInjury.Name = "eInjury.10";
        
        if (eInjury.IsValid == true) //if have a transport, forgot the data, 
        {
            _injury = getValue(elementList, "eInjury.10");
            if (_injury.IsNull != true) {
                var arr1 = [];
                for (var i = 0; i < _injury.ValueArray.length; i++)
                {
                    if ((_injury.ValueArray[i].HasValue == true) && (arr1.indexOf(_injury.ValueArray[i].val) == -1))
                    {
                        _val = _injury.ValueArray[i].val
                        arr1.push(_val);
                    }
                };
                eInjury.HasInjury = true;
                _eInjury.Value = arr1.slice(0);
            }
        };
        _vg.push(_eInjury);
        delete _eInjury;


            //////////////////////////////////
        if (eInjury.IsValid == true) {
            var _sectionIndex1 = "";
            _sectionIndex1 = getSectionIndex(pInjury, "eInjury.CollisionGroup")

            if (_sectionIndex1 != -1) {
                
                var _eCGP = [];
                var _eCGP = pInjury.attributes.sections[_sectionIndex1].attributes.elements;
                //eInjury.11///////
                var _eInjury = new Object();
                _eInjury.Errors = false;
                _eInjury.HasData = false;
                _eInjury.Name = "eInjury.11";

                _injury = getValue(_eCGP, "eInjury.11");
                if (_injury.IsNull != true) {
                    eInjury.HasInjury = true;
                    _val = _injury.ValueArray[0].val;
                    _eInjury.HasData = true;
                    _eInjury.Value = _val;
                };
                
                _vg.push(_eInjury);
                delete _eInjury;

                //////////////////////////////

                //alert("PhoneNumber")

                //eInjury.12///////////
                var _eInjury = new Object();
                _eInjury.Errors = false;
                _eInjury.HasData = false;
                _eInjury.Name = "eInjury.12";

                _injury = getValue(_eCGP, "eInjury.12");
                if (_injury.IsNull == true)
                {
                    eInjury.HasInjury = true;
                    _val = _injury.ValueArray[0].val;
                    _eInjury.HasData = true;
                    _eInjury.Value = _val;
                };
                _vg.push(_eInjury);
                delete _eInjury;

                
                //eInjury.13/////////////
                var _eInjury = new Object();
                _eInjury.Errors = false;
                _eInjury.HasData = false;
                _eInjury.Name = "eInjury.13";

                    _injury = getValue(_eCGP, "eInjury.13");
                    if (_injury.IsNull != true)
                    {
                        sPatHomeNum = "";
                        var arr1 = [];
                        var arr2 = [];
                        for (var i = 0; i <= _injury.ValueArray.length - 1; i++) {
                        }
                    eInjury.HasInjury = true;
                    _eInjury.Value = arr1.slice(0);
                };
            _vg.push(_eInjury);
            delete _eInjury;
            
            //eInjury.14///////////////
            var _eInjury = new Object();
            _eInjury.Errors = false;
            _eInjury.HasData = false;
            _eInjury.Name = "eInjury.14";
            
            if (eInjury.IsValid == true) {
                _injury = getValue(_eCGP, "eInjury.14");
                if (_injury.IsNull != true) {
                    eInjury.HasInjury = true;
                    _val = _injury.ValueArray[0].val;
                    _eInjury.HasData = true;
                    _eInjury.Value = _val;
                }
            };
            _vg.push(_eInjury);
            delete _eInjury;

            //eInjury.15//////////////  
            var _eInjury = new Object();
            _eInjury.Errors = false;
            _eInjury.HasData = false;
            _eInjury.Name = "eInjury.15";
            
            if (eInjury.IsValid == true) {
                _injury = getValue(_eCGP, "eInjury.15");
                if (_injury.IsNull != true) {
                    eInjury.HasInjury = true;
                    _val = _injury.ValueArray[0].val;
                    _eInjury.HasData = true;
                    _eInjury.Value = _val;
                }
            };
            _vg.push(_eInjury);
            delete _eInjury;

            //eInjury.16//////////////
            var _eInjury = new Object();
            _eInjury.Errors = false;
            _eInjury.HasData = false;
            _eInjury.Name = "eInjury.16";
            
            if (eInjury.IsValid == true) {
                _injury = getValue(_eCGP, "eInjury.16");
                if (_injury.IsNull != true) {
                    eInjury.HasInjury = true;
                    _val = _injury.ValueArray[0].val;
                    _eInjury.HasData = true;
                    _eInjury.Value = _val;
                }
            };
            _vg.push(_eInjury);
            delete _eInjury;

            //eInjury.17//////////////
            var _eInjury = new Object();
            _eInjury.Errors = false;
            _eInjury.HasData = false;
            _eInjury.Name = "eInjury.17";
            
            if (eInjury.IsValid != true) {
                _injury = getValue(_eCGP, "eInjury.17");
                if (_injury.IsNull != true) {
                    eInjury.HasInjury = true;
                    _val = _injury.ValueArray[0].val;
                    _eInjury.HasData = true;
                    _eInjury.Value = _val;
                }
            };
            _vg.push(_eInjury);
            delete _eInjury;

                //eInjury.18//////////////
            var _eInjury = new Object();
            _eInjury.Errors = false;
            _eInjury.HasData = false;
            _eInjury.Name = "eInjury.18";
            
            if (eInjury.IsValid == true) {
                _injury = getValue(_eCGP, "eInjury.18");
                if (_injury.IsNull != true) {
                    eInjury.HasInjury = true;
                    _val = _injury.ValueArray[0].val;
                    _eInjury.HasData = true;
                    _eInjury.Value = _val;
                }
            };
            _vg.push(_eInjury);
            delete _eInjury;

            //eInjury.19//////////////
            var _eInjury = new Object();
            _eInjury.Errors = false;
            _eInjury.HasData = false;
            _eInjury.Name = "eInjury.19";
            
            if (eInjury.IsValid != true) {
                _injury = getValue(_eCGP, "eInjury.19");
                {
                    eInjury.HasInjury = true;
                    _val = _injury.ValueArray[0].val;
                    _eInjury.HasData = true;
                    _eInjury.Value = _val;
                }
            };
            _vg.push(_eInjury);
            delete _eInjury;

            //eInjury.20//////////////
            var _eInjury = new Object();
            _eInjury.Errors = false;
            _eInjury.HasData = false;
            _eInjury.Name = "eInjury.20";
            
            if (eInjury.IsValid == true) {
                _injury = getValue(_eCGP, "eInjury.20");
                if (_injury.IsNull != true) {
                    eInjury.HasInjury = true;
                    _val = _injury.ValueArray[0].val;
                    _eInjury.HasData = true;
                    _eInjury.Value = _val;
                }
            };
            _vg.push(_eInjury);
            delete _eInjury;

            //eInjury.21//////////////
            var _eInjury = new Object();
            _eInjury.Errors = false;
            _eInjury.HasData = false;
            _eInjury.Name = "eInjury.21";
            
            if (eInjury.IsValid == true) {
                _injury = getValue(_eCGP, "eInjury.21");
                if (_injury.IsNull != true) {
                    eInjury.HasInjury = true;
                    _val = _injury.ValueArray[0].val;
                    _eInjury.HasData = true;
                    _eInjury.Value = _val;
                }
            };

            _vg.push(_eInjury);
            delete _eInjury;

            //eInjury.22//////////////
            var _eInjury = new Object();
            _eInjury.Errors = false;
            _eInjury.HasData = false;
            _eInjury.Name = "eInjury.04";
            
            if (eInjury.IsValid == true) {
                _injury = getValue(_eCGP, "eInjury.22");
                if (_injury.IsNull != true) {
                    var arr1 = [];
                    for (var i = 0; i <= _injury.ValueArray.length - 1; i++) {
                    };
                    _eInjury.HasInjury = true;
                    _eInjury.Value = arr1.slice(0);
                }
            };

            _vg.push(_eInjury);
            delete _eInjury;


            //eInjury.23///////////
            var _eInjury = new Object();
            _eInjury.Errors = false;
            _eInjury.HasData = false;
            _eInjury.Name = "eInjury.23";


            if (eInjury.IsValid == true) {
                _injury = getValue(_eCGP, "eInjury.23");
                if (_injury.IsNull != true) {
                    eInjury.HasInjury = true;
                    _val = _injury.ValueArray[0].val;
                    _eInjury.HasData = true;
                    _eInjury.Value = _val;
                }
            };
            _vg.push(_eInjury);
            delete _eInjury;

            //eInjury.24/////////////
            var _eInjury = new Object();
            _eInjury.Errors = false;
            _eInjury.HasData = false;
            _eInjury.Name = "eInjury.24";
            
            if (eInjury.IsValid == true) {
                _injury = getValue(_eCGP, "eInjury.24");
                if (_injury.IsNull != true) {
                    eInjury.HasInjury = true;
                    _val = _injury.ValueArray[0].val;
                    _eInjury.HasData = true;
                    _eInjury.Value = _val;
                }
            };
            _vg.push(_eInjury);
            delete _eInjury;


            //eInjury.25////////
            var _eInjury = new Object();
            _eInjury.Errors = false;
            _eInjury.HasData = false;
            _eInjury.Name = "eInjury.25";
            
            if (eInjury.IsValid != true) {
                _injury = getValue(_eSG, "eInjury.25");
                {
                    eInjury.HasInjury = true;
                    _val = _einjury.ValueArray[0].val;
                    _eInjury.HasData = true;
                    _eInjury.Value = _val;
                }
            };
            _vg.push(_eInjury);
            delete _eInjury;
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
                        var _eInjury = new Object();
                        _eInjury.Errors = false;
                        _eInjury.HasData = false;
                        _eInjury.Name = "eInjury.26";

                        _injury = getValue(_elementList, "eInjury.26");
                        if (_injury.IsNull != true)
                        {
                            eInjury.HasInjury = true;
                            _val = _injury.ValueArray[0].val;
                            _eInjury.HasData = true;
                            _eInjury.Value = _val;
                        };
                        _sg.push(_eInjury);
                        delete _eInjury;
                        
                        //eInjury.27////////
                        var _eInjury = new Object();
                        _eInjury.Errors = false;
                        _eInjury.HasData = false;
                        _eInjury.Name = "eInjury.27";
                        _injury = getValue(_elementList, "eInjury.27");

                        if (_injury.IsNull != true)                    
                        {
                            eInjury.HasInjury = true;
                            _val = _injury.ValueArray[0].val;
                            _eInjury.HasData = true;
                            _eInjury.Value = _val;
                        };
                        _sg.push(_eInjury);
                        delete _eInjury;

                        //eInjury.28////////
                        var _eInjury = new Object();
                        _eInjury.Errors = false;
                        _eInjury.HasData = false;
                        _eInjury.Name = "eInjury.28";

                        _injury = getValue(_elementList, "eInjury.28");
                        if (_injury.IsNull != true) {
                            eInjury.HasInjury = true;
                            _val = _injury.ValueArray[0].val;
                            _eInjury.HasData = true;
                            _eInjury.Value = _val;
                        };
                        _sg.push(_eInjury);
                        delete _eInjury;

                        //eInjury.29////////
                        var _eInjury = new Object();
                        _eInjury.Errors = false;
                        _eInjury.HasData = false;
                        _eInjury.Name = "eInjury.29";
                        _injury = getValue(_elementList, "eInjury.29");
                        if (_injury.IsNull != true) {                       
                            eInjury.HasInjury = true;
                            _val = _injury.ValueArray[0].val;
                            _eInjury.Value = _val;                        
                        };
                        _sg.push(_eInjury);
                        delete _eInjury;
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
        var _eProcedures = new Object();
        _eProcedures.Errors = false;
        _eProcedures.HasData = false;
        _eProcedures.Name = "eProcedures.03";

        _procedures = getValue(elementList, "eProcedures.03");
        if (_procedures.IsNull == true)
        {
            if (_procedures.HasPN == true) {
                v2Array.push({ section: "E19", element: "E19_03", val: v2NOT_KNOWN });
                if (_procedures.pn == "ContraindicationNoted") {
                    _eProcedures.PN = "8801001"                    
                }
                else if (_procedures.pn == "DeniedByOrder") {
                    _eProcedures.PN = "8801003"
                }
                else if (_procedures.pn == "Refused") {
                    _eProcedures.PN = "8801019"
                }
                else if (_procedures.pn == "UnabletoComplete") {
                    _eProcedures.PN = "8801023"
                }
            };

            if (_procedures.IsNull == true)
            {
                _eProcedures.NV = "7701003";
                v2Array.push({ section: "E19", element: "E19_03", val: V2NOT_RECORDED });
            }

        }
        else
        {
            _val = _procedures.ValueArray[0].val;
            _eProcedures.HasData = true;
            _eProcedures.Value = _val;
            v2Array.push({ section: "E19", element: "E19_03", val: setV2("eProcedures.03", _val) });
        };
        _vg.push(_eProcedures);
        delete _eProcedures;


        //eProcedures.01////////////
        _procedures = getValue(elementList, "eProcedures.01");
        if (eProcedures.IsValid == true) 
        {
            if (_procedures.IsNull == true) 
            {
                _eProcedures.NV = "7701003";
                v2Array.push({ section: "E19", element: "E19_01", val: V2NOT_RECORDED });

            }
            else 
            {
                _val = _procedures.ValueArray[0].val;
                _eProcedures.HasData = true;
                _eProcedures.Value = _val;

                v2Array.push({ section: "E19", element: "E19_01", val: _val });
            }
        }
        else 
        {
            _eProcedures.NV = "7701001";
            v2Array.push({ section: "E19", element: "E19_01", val: v2NOT_APPLICABLE });

        };
        _vg.push(_eProcedures);
        delete _eProcedures;


        //eProcedures.02////////////
        _procedures = getValue(elementList, "eProcedures.02");
        if (eProcedures.IsValid == true) 
        {
            if (_procedures.IsNull == true) 
            {
                _eProcedures.NV = "7701003";
                v2Array.push({ section: "E19", element: "E19_02", val: V2NOT_RECORDED });
            }
            else 
            {
                _val = _procedures.ValueArray[0].val;
                _eProcedures.HasData = true;
                _eProcedures.Value = _val;
                v2Array.push({ section: "E19", element: "E19_02", val: setV2("eProcedures.02", _val) });
            }
        }
        else 
        {
            _eProcedures.NV = "7701001";
            v2Array.push({ section: "E19", element: "E19_02", val: v2NOT_APPLICABLE });
        };
        _vg.push(_eProcedures);
        delete _eProcedures;

        //eProcedures.04////////////
        _procedures = getValue(elementList, "eProcedures.04");
        if (eProcedures.IsValid == true) {
            if (_procedures.IsNull != true) {
                _val = _procedures.ValueArray[0].val;
                _eProcedures.HasData = true;
                _eProcedures.Value = _val;
                v2Array.push({ section: "E19", element: "E19_04", val: _val });
            }
        };
        _vg.push(_eProcedures);
        delete _eProcedures;

            //eProcedures.05////////////
            _procedures = getValue(elementList, "eProcedures.05");
            if (eProcedures.IsValid == true) {
                if (_procedures.IsNull == true) {
                    _eProcedures.NV = "7701003";
                    v2Array.push({ section: "E19", element: "E19_05", val: V2NOT_RECORDED });
                }
                else {
                    _val = _procedures.ValueArray[0].val;
                    _eProcedures.HasData = true;
                    _eProcedures.Value = _val;

                    v2Array.push({ section: "E19", element: "E19_05", val: _val });
                }
            }
            else {
                _eProcedures.NV = "7701001";
                v2Array.push({ section: "E19", element: "E19_05", val: v2NOT_APPLICABLE });

            };
            _vg.push(_eProcedures);
            delete _eProcedures;

            //eProcedures.06////////////
            _procedures = getValue(elementList, "eProcedures.06");
            if (eProcedures.IsValid == true) {
                if (_procedures.IsNull == true) {
                    _eProcedures.NV = "7701003";
                    v2Array.push({ section: "E19", element: "E19_06", val: v2NOT_RECORDED });
                }
                else {
                    _val = _procedures.ValueArray[0].val;
                    _eProcedures.HasData = true;
                    _eProcedures.Value = _val;

                    v2Array.push({ section: "E19", element: "E19_06", val: setV2("eProcedures.05", _val) });
                }
            }
            else {
                v2Array.push({ section: "E19", element: "E19_06", val: v2NOT_APPLICABLE });
                _eProcedures.NV = "7701001";
            };

            _vg.push(_eProcedures);
            delete _eProcedures;

            //eProcedures.07////////////
            _procedures = getValue(elementList, "eProcedures.07");
            if (eProcedures.IsValid == true) {
                if (_procedures.IsNull == true) {
                    _eProcedures.NV = "7701003";
                    v2Array.push({ section: "E19", element: "E19_07", val: v2NOT_RECORDED });
                }
                else {
                    var arr1 = [];
                    var arr2 = [];
                    for (var i = 0; i < _procedures.ValueArray.length; i++) {
                        if ((_procedures.ValueArray[i].HasValue == true) && (arr1.indexOf(_procedures.ValueArray[i].val) == -1)) {
                            _val = _procedures.ValueArray[i].val
                            arr1.push(_val);
                            arr2.push(setD2("eProcedures.07", _val));
                        }
                    };
                    _eProcedures.Value = arr1.slice(0);
                    v2Array.push({ section: "E06", element: "E06_12", val: arr2.slice(0) });
                }
            }
            else {
                _eProcedures.NV = "7701001";
                _eProcedures.HasData = true;
                v2Array.push({ section: "E19", element: "E19_07", val: v2NOT_APPLICABLE });
            };
            _vg.push(_eProcedures);
            delete _eProcedures;

            //eProcedures.08////////////
            _procedures = getValue(elementList, "eProcedures.08");
            if (eProcedures.IsValid == true) {
                if (_procedures.IsNull == true) {
                    _eProcedures.NV = "7701003";
                    v2Array.push({ section: "E19", element: "E19_08", val: v2NOT_RECORDED });
                }
                else {
                    _val = _procedures.ValueArray[0].val;
                    _eProcedures.HasData = true;
                    _eProcedures.Value = _val;

                    v2Array.push({ section: "E19", element: "E19_08", val: setV2("eProcedures.08", _val) });
                }
            }
            else {
                _eProcedures.NV = "7701001";
                v2Array.push({ section: "E19", element: "E19_08", val: v2NOT_APPLICABLE });
            };
            _vg.push(_eProcedures);
            delete _eProcedures;

            //eProcedures.09////////////
            _procedures = getValue(elementList, "eProcedures.09");
            if (eProcedures.IsValid == true) {
                if (_procedures.IsNull == true) {
                    if (isRequiredStateElement("eProcedures.09")) {
                        _eProcedures.NV = "7701003";
                        v2Array.push({ section: "E19", element: "E19_09", val: v2NOT_RECORDED });
                    }
                    else {
                        _eProcedures.NV = "7701005";
                        v2Array.push({ section: "E19", element: "E19_09", val: v2NOT_REPORTING });
                    }
                }
                else {
                    _val = _procedures.ValueArray[0].val;
                    _eProcedures.HasData = true;
                    _eProcedures.Value = _val;

                    v2Array.push({ section: "E19", element: "E19_09", val: _val });
                }
            }
            else {
                v2Array.push({ section: "E19", element: "E19_09", val: v2NOT_AVAILABLE });
                _eProcedures.NV = "7701001";
            };
            _vg.push(_eProcedures);
            delete _eProcedures;


            //eProcedures.10////////////
            _procedures = getValue(elementList, "eProcedures.10");
            if (eProcedures.IsValid == true) {
                if (_procedures.IsNull == true) {
                    _eProcedures.NV = "7701003";
                }
                else {
                    _val = _procedures.ValueArray[0].val;
                    _eProcedures.HasData = true;
                    _eProcedures.Value = _val;

                }
            }
            else {
                _eProcedures.NV = "7701001";
            };
            _vg.push(_eProcedures);
            delete _eProcedures;

            //eProcedures.11////////////
            _procedures = getValue(elementList, "eProcedures.11");
            if (eProcedures.IsValid == true) {
                if (_procedures.IsNull != true) {
                    _val = _procedures.ValueArray[0].val;
                    _eProcedures.HasData = true;
                    _eProcedures.Value = _val;

                    v2Array.push({ section: "E06", element: "E06_12", val: setV2("eProcedures.11", _val) });
                }
            };

            _vg.push(_eProcedures);
            delete _eProcedures;

            //eProcedures.12////////////
            _procedures = getValue(elementList, "eProcedures.12");
            if (eProcedures.IsValid == true) {
                if (_procedures.IsNull != true) {
                    _val = _procedures.ValueArray[0].val;
                    _eProcedures.HasData = true;
                    _eProcedures.Value = _val;

                    v2Array.push({ section: "E19", element: "E19_11", val: _val });
                }
                else {
                    _eProcedures.NV = "7701001";
                    v2Array.push({ section: "E19", element: "E19_11", val: v2NOT_APPLICABLE });
                };

                _vg.push(_eProcedures);
                delete _eProcedures;
                //eProcedures.13////////////
                _procedures = getValue(elementList, "eProcedures.13");
                if (eProcedures.IsValid == true) {
                    if (_procedures.IsNull == true) {
                        if (isRequiredStateElement("eProcedures.13")) {
                            _eProcedures.NV = "7701003";
                            v2Array.push({ section: "E19", element: "E19_12", val: V2NOT_RECORDED });
                        }
                        else {
                            _eProcedures.NV = "7701005";
                            v2Array.push({ section: "E19", element: "E19_12", val: v2NOT_REPORTING });
                        }
                    }
                    else {
                        _val = _procedures.ValueArray[0].val;
                        _eProcedures.HasData = true;
                        _eProcedures.Value = _val;

                        v2Array.push({ section: "E19", element: "E19_12", val: setV2("eProcedures.13", _val) });
                    }
                }
                else {
                    _eProcedures.NV = "7701001";
                    v2Array.push({ section: "E19", element: "E19_12", val: v2NOT_APPLICABLE });
                };
                _vg.push(_eProcedures);
                delete _eProcedures;
            
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
            var _eMeds = new Object();
            _eMeds.Errors = false;
            _eMeds.HasData = false;
            _eMeds.Name = "eMedications.03";
            _meds = getValue(elementList, "eMedications.03");
            if (eMedication.IsValid == true) {
                if (_val == null) {
                    if (_eMeds.HasPN == true) {
                        v2Array.push({ section: "E18", element: "E18_03", val: v2NOT_KNOWN });
                        if (_eMeds.pn == "ContraindicationNoted") {
                            _eMeds.PN = "8801001"

                        }
                        else if (_eMeds.pn == "DeniedByOrder") {
                            _eMeds.PN = "8801003"
                        }
                        else if (_eMeds.pn == "Refused") {
                            _eMeds.PN = "8801019"
                            v2Array.push({ section: "E19", element: "E19_03", val: v2NOT_KNOWN });
                        }
                        else if (_eMeds.pn == "UnabletoComplete") {
                            _eMeds.PN = "8801023"
                            v2Array.push({ section: "E19", element: "E19_03", val: v2NOT_KNOWN });
                        }
                    }
                    else {
                        if (isRequiredStateElement("eMedications.03")) {
                            _eProcedures.NV = "7701003";
                            v2Array.push({ section: "E18", element: "E18_03", val: v2NOT_RECORDED });
                        }
                    }
                }
                else {
                    _val = _meds.ValueArray[0].val;
                    _meds.HasData = true;
                    _meds.Value = _val;
                    v2Array.push({ section: "E18", element: "E18_03", val: _val });
                }
            }
            else {
                _meds.NV = "7701001";
                v2Array.push({ section: "E18", element: "E18_03", val: v2NOT_RECORDED });
            };
            _vg.push(_eMeds);
            delete _eMeds;


            //eMedications.01////////
            var _eMeds = new Object();
            _eMeds.Errors = false;
            _eMeds.HasData = false;
            _eMeds.Name = "eMedications.01";

            _meds = getValue(elementList, "eMedications.01");
            if (eMedication.IsValid == true) //&& (MedicationGroup.MedicationGiven == true))
            {
                if (_meds.IsNull == true) {
                    _meds.NV = "7701003";
                    v2Array.push({ section: "E18", element: "E18_01", val: V2NOT_RECORDED });
                }
                else {
                    _val = _meds.ValueArray[0].val;
                    _meds.HasData = true;
                    _meds.Value = _val;

                    v2Array.push({ section: "E18", element: "E18_01", val: _val });
                }
            }
            else {
                _meds.NV = "7701001";
                v2Array.push({ section: "E18", element: "E18_01", val: v2NOT_APPLICABLE });
            };
            _vg.push(_eMeds);
            delete _eMeds;

            //eMedications.02////////
            var _eMeds = new Object();
            _eMeds.Errors = false;
            _eMeds.HasData = false;
            _eMeds.Name = "eMedications.02";

            __meds = getValue(elementList, "eMedications.02");
            if (eMedication.IsValid == true) //&& (MedicationGroup.MedicationGiven == true))
            {
                if (_val == null) {
                    v2Array.push({ section: "E18", element: "E18_02", val: V2NOT_RECORDED });
                    _meds.NV = "7701003";
                }
                else {
                    _val = _meds.ValueArray[0].val;
                    _meds.HasData = true;
                    _meds.Value = _val;
                    v2Array.push({ section: "E18", element: "E18_02", val: SetD2("eMedications.02", _val) });
                }
            }
            else {
                v2Array.push({ section: "E18", element: "E18_02", val: v2NOT_APPLICABLE });
                _meds.NV = "7701001";
            };
            _vg.push(_eMeds);
            delete _eMeds;

            //eMedication.04////////
            var _eMeds = new Object();
            _eMeds.Errors = false;
            _eMeds.HasData = false;
            _eMeds.Name = "eMedications.04";

            _meds = getValue(elementList, "eMedications.04");
            if (eMedication.IsValid == true) //&& (MedicationGroup.MedicationGiven == true))
            {
                if (_meds.IsNull == true) {
                    if (isRequiredStateElement("eMedications.04")) {
                        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eMedications.04", Description: "Validation Error: Medication Administered Route Required. " })
                    }
                    else {
                        _val = _meds.ValueArray[0].val;
                        _meds.HasData = true;
                        _meds.Value = _val;
                        v2Array.push({ section: "E18", element: "E18_04", val: SetD2("eMedications.04", _val) });
                    }
                }
            };
            _vg.push(_eMeds);
            delete _eMeds;

            _s1 = getSectionIndex(pExam.attributes.sections[xx], "eMedications.DosageGroup");
            if (_s1 != -1) {

                //eMedication.05/////////////
                var _eMeds = new Object();
                _eMeds.Errors = false;
                _eMeds.HasData = false;
                _eMeds.Name = "eMedications.05";

                _meds = getValue(elementList, "eMedications.05");
                if ((eMedication.IsValid == true) && (MedicationGroup.MedicationGiven == true)) {
                    if (_meds.IsNull == true) {
                        _meds.NV = "7701003";
                        v2Array.push({ section: "E18", element: "E18_05", val: V2NOT_RECORDED });
                    }
                    else {
                        _val = _meds.ValueArray[0].val;
                        _meds.HasData = true;
                        _meds.Value = _val;
                        v2Array.push({ section: "E18", element: "E18_05", val: _val });
                    }
                }
                else {
                    _meds.NV = "7701001";
                    v2Array.push({ section: "E18", element: "E18_05", val: v2NOT_APPLICABLE });
                };
                _vg.push(_eMeds);
                delete _eMeds;

                //eMedication.06//////////////
                var _eMeds = new Object();
                _eMeds.Errors = false;
                _eMeds.HasData = false;
                _eMeds.Name = "eMedications.06";

                _meds = getValue(elementList, "eMedications.06");
                if (MedicationGroupMedicationGroup["HasDosage"] == true) {
                    if (_meds.IsNull == true) {
                        _meds.NV = "7701003";
                        v2Array.push({ section: "E18", element: "E18_08", val: V2NOT_RECORDED });
                    }
                    else {
                        _val = _meds.ValueArray[0].val;
                        _meds.HasData = true;
                        _meds.Value = _val;
                        v2Array.push({ section: "E18", element: "E18_06", val: SetD2("eMedications.06", _val) });
                    }
                }
                else {
                    v2Array.push({ section: "E18", element: "E18_08", val: v2NOT_APPLICABLE });
                    _meds.NV = "7701001";
                };
                _vg.push(_eMeds);
                delete _eMeds;
            };
            //eMedications.07/////////////////
            var _eMeds = new Object();
            _eMeds.Errors = false;
            _eMeds.HasData = false;
            _eMeds.Name = "eMedications.07";

            _meds = getValue(elementList, "eMedications.07");
            if ((eMedication.IsValid == true) && (MedicationGroup.MedicationGiven == true)) {
                if (_meds.IsNull == true) {
                    _meds.NV = "7701003";
                    v2Array.push({ section: "E18", element: "E18_07", val: V2NOT_RECORDED });
                }
                else {
                    _val = _meds.ValueArray[0].val;
                    _meds.HasData = true;
                    _meds.Value = _val;
                    v2Array.push({ section: "E18", element: "E18_07", val: SetD2("eMedications.07", _val) });
                }
            }
            else {
                _meds.NV = "7701001";
                v2Array.push({ section: "E18", element: "E18_07", val: v2NOT_APPLICABLE });
            };
            _vg.push(_eMeds);
            delete _eMeds;

            //eMedications.08////////////
            var _eMeds = new Object();
            _eMeds.Errors = false;
            _eMeds.HasData = false;
            _eMeds.Name = "eMedications.08";

            _meds = getValue(elementList, "eMedications.08");
            if (eMedication.IsValid == true)// && (MedicationGroup.MedicationGiven == true))
            {
                if (_meds.IsNull == true) {
                    _meds.NV = "7701003";
                    v2Array.push({ section: "E18", element: "E18_08", val: V2NOT_RECORDED });
                }
                else {
                    var arr1 = [];
                    var arr2 = [];
                    for (var i = 0; i < _meds.ValueArray.length; i++) {
                        if ((_meds.ValueArray[i].HasValue == true) && (arr1.indexOf(_meds.ValueArray[i].val) == -1)) {
                            _val = _meds.ValueArray[i].val
                            arr1.push(_val);
                            _meds.HasData = true;
                            _meds.Value = _val;

                            arr2.push(SetV2("eMedications.08", _val))
                        }
                    };
                    _meds.Value = arr1.slice(0);
                    v2Array.push({ section: "E18", element: "E18_08", val: arr2.slice(0) });
                }
            }
            else {
                _meds.NV = "7701001";
                v2Array.push({ section: "E18", element: "E18_08", val: v2NOT_APPLICABLE });
            };

            _vg.push(_eMeds);
            delete _eMeds;

            //eMedications.09//////////////
            var _eMeds = new Object();
            _eMeds.Errors = false;
            _eMeds.HasData = false;
            _eMeds.Name = "eMedications.09";

            _meds = getValue(elementList, "eMedications.09");
            if (eMedication.IsValid == true) //&& (MedicationGroup.MedicationGiven == true))
            {
                if (_meds.IsNull == true) {
                    if (isRequiredStateElement("eMedications.09")) {
                        _meds.NV = "7701003";
                        v2Array.push({ section: "E18", element: "E18_09", val: V2NOT_RECORDED });
                    }
                    else {
                        _meds.NV = "7701005";
                        v2Array.push({ section: "E18", element: "E18_09", val: v2NOT_REPORTING });
                    }
                }
                else {
                    _val = _meds.ValueArray[0].val;
                    _meds.HasData = true;
                    _meds.Value = _val;
                    v2Array.push({ section: "E18", element: "E18_09", val: SetD2("eMedications.09", _val) });
                }
            }
            else {
                _meds.NV = "7701001";
                v2Array.push({ section: "E18", element: "E18_09", val: v2NOT_APPLICABLE });
            };
            _vg.push(_eMeds);
            delete _eMeds;

            //eMedications.10////////////
            var _eMeds = new Object();
            _eMeds.Errors = false;
            _eMeds.HasData = false;
            _eMeds.Name = "eMedications.10";

            _meds = getValue(elementList, "eMedications.10");
            if (eMedication.IsValid == true)// && (MedicationGroup.MedicationGiven == true))
            {
                if (_meds.IsNull == true) {
                    _meds.NV = "7701003";
                }
                else {
                    _val = _meds.ValueArray[0].val;
                    _meds.HasData = true;
                    _meds.Value = _val;
                }
            }
            else {
                _meds.NV = "7701001";
            };
            _vg.push(_eMeds);
            delete _eMeds;

            //eMedications.11///////////
            var _eMeds = new Object();
            _eMeds.Errors = false;
            _eMeds.HasData = false;
            _eMeds.Name = "eMedications.11";

            _meds = getValue(elementList, "eMedications.11");
            if (eMedication.IsValid == true) //&& (MedicationGroup.MedicationGiven == true))
            {
                _val = _meds.ValueArray[0].val;
                _meds.HasData = true;
                _meds.Value = _val;
                v2Array.push({ section: "E18", element: "E18_10", val: SetD2("eMedications.11", _val) });
            };
            _vg.push(_eMeds);
            delete _eMeds;

            //eMedications.12/////////////
            var _eMeds = new Object();
            _eMeds.Errors = false;
            _eMeds.HasData = false;
            _eMeds.Name = "eMedications.12";

            _meds = getValue(elementList, "eMedications.12");
            if (eMedication.IsValid == true) //&& (MedicationGroup.MedicationGiven == true))
            {
                if (_meds.IsNull == true) {
                    _val = _meds.ValueArray[0].val;
                    _meds.HasData = true;
                    _meds.Value = _val;

                    v2Array.push({ section: "E18", element: "E18_11", val: _val });
                };
                _vg.push(_eMeds);
                delete _eMeds;

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
            var _eProtocols = new Object();
            _eProtocols.HasErrors = false;
            _eProtocols.HasData = false;
            _eProtocols.Name = "eProtocols.01";

            eProtocol["IsValid"] = false;
            _protocol = getValue(elementList, "eProtocols.01");
            if (eProtocol.IsValid == true) {

                if (_protocol.IsNull == true) {
                    _protocol.NV = "7701003";
                    v2Array.push({ section: "E17", element: "E17_11", val: V2NOT_RECORDED });
                }
                else {
                    _val = _protocol.ValueArray[0].val;
                    _protocol.HasData = true;
                    _protocol.Value = _val;
                    v2Array.push({ section: "E17", element: "E17_11", val: setV2("eProtocols.01", _val) });
                }
            }
            else {
                _protocol.NV = "7701001";
                v2Array.push({ section: "E17", element: "E17_11", val: v2NOT_APPLICABLE });
            };
            _vg.push(_eProtocols);
            delete _eProtocols;


            ///////////eProtocols.02////////
            var _eProtocols = new Object();
            _eProtocols.HasErrors = false;
            _eProtocols.HasData = false;
            _eProtocols.Name = "eProtocols.02";

            _protocol = getValue(elementList, "eProtocols.02");
            if (eProtocol["IsValid"] == true) {
                if (_protocol.IsNull == true) {
                    __protocol.NV = "7701003";
                }
                else {
                    _val = _protocol.ValueArray[0].val;
                    _protocol.HasData = true;
                    _protocol.Value = _val;
                }
            }
            else {
                _protocol.NV = "7701001";
            };
            _vg.push(_eProtocols);
            delete _eProtocols;
        }
    }
    return eProtocol;
};