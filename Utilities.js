var ErrorList = [];
var v3NOT_REPORTING = "7701005";
var v3NOT_RECORDED = "7701003";
var v3NOT_APPLICABLE = "7701001";
var v2NOT_AVAILABLE = "-5";
var v2NOT_KNOWN = "-10";
var v2NOT_REPORTING = "-15";
var v2NOT_RECORDED = "-20";
var v2NOT_APPLICABLE = "-25"
var PCRElementsArray = new Array()
var v2Array = new Array()
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
    var eCrewObject = new Object();
    var TheCall = new Object();
    var CallErrors = [];

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
    if (TheCall.eRecord.ErrorList.length > 0) {
        CallErrors.push(eRecord.ErrorList);
    };
    /*
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
    if (TheCall.eDispatch.ErrorList.length > 0) {
        CallErrors.push(TheCall.eDispatch.ErrorList);
    };

    TheCall.Errors = CallErrors.slice(0);
    
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

    console.log(TheCall.pDisposition)
    TheCall.CallDisposition = TheCall.eDisposition.CallDisposition;
   // TheCall.TransportType = TheCall.eDispatch.TransportType;

    if (TheCall.eDisposition.ErrorList.length > 0) {
        CallErrors.push(TheCall.eDisposition.ErrorList);
    };

    TheCall.Errors = CallErrors.slice(0);
    
    ////////////////////////eResponse//////////////////////////////
    eResponseObject = getObjectFromOLTPExtract(parseObject, "eResponse");
    eResponseObject.HasDataSet = false;
    if (eResponseObject.IsUndefined != true) {
        eResponseObject.HasDataSet = true;
    }
    else { };
    //MUST have eDisposition - contains a Mandatory Element
    console.log(eResponseObject)
    TheCall.pResponse = eResponseObject;
    TheCall.eResponse = seteResponse(TheCall);

    if (TheCall.eResponse.HasErrors == true) {
        if (TheCall.eResponse.Errors.length > 0) {
            for (var i = 0; i < TheCall.eResponse.Errors.length; i++)
            { }
        }
    };

    if (TheCall.eResponse.ErrorList.length > 0) {
        CallErrors.push(TheCall.eResponse.ErrorList);
    };
    
    TheCall.Errors = CallErrors.slice(0);

    
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

    if (TheCall.eTimes.ErrorList.length > 0) {
        CallErrors.push(TheCall.eTimes.ErrorList);
    };

    TheCall.Errors = CallErrors.slice(0);

    

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

    if (TheCall.eSituation.ErrorList.length > 0) {
        CallErrors.push(TheCall.eSituation.ErrorList);
    };

    TheCall.Errors = CallErrors.slice(0);
    
    ////////////////////////eCrew
        eCrewObject = getObjectFromOLTPExtract(parseObject, "eCrew");
        eCrewObject.HasDataSet = false;
        if (eCrewObject.IsUndefined != true) {
            eCrewObject.HasDataSet = true;
        }
        else {
        };

        TheCall.pCrew = eCrewObject;
        TheCall.eCrew = seteCrew(TheCall);

        if (TheCall.eCrew.ErrorList.length > 0) {
            CallErrors.push(TheCall.eCrew.ErrorList);
        };

        TheCall.Errors = CallErrors.slice(0);
    
   
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
        if (TheCall.eScene.ErrorList.length > 0) {
            CallErrors.push(TheCall.eScene.ErrorList);
        };

        TheCall.Errors = CallErrors.slice(0);
    
    
        ///////////////////////////////////eAirway
        eAirwayObject = getObjectFromOLTPExtract(parseObject, "eAirway");
        eAirwayObject.HasDataSet = false;
        if (eAirwayObject.IsUndefined != true) {
            eAirwayObject.HasDataSet = true;
        }
        else { };

        TheCall.pAirway = eAirwayObject;
        TheCall.eAirway = seteAirway(TheCall);
        if (TheCall.eAirway.ErrorList.length > 0) {
            CallErrors.push(TheCall.eAirway.ErrorList);
        };

        TheCall.Errors = CallErrors.slice(0);
        var Treatment = new Object;
    
    
        Treatment.AirwayStartTime = TheCall.eAirway.AirwayStartTime;
        Treatment.AirwayEndTime = TheCall.eAirway.AirwayEndTime;
        TheCall.Treatment = Treatment;
    
        ///////////////////////////////////eArrest
        eArrestObject = getObjectFromOLTPExtract(parseObject, "eArrest");
        eArrestObject.HasDataSet = false;
        if (eArrestObject.IsUndefined != true) {
            eArrestObject.HasDataSet = true;
        }
        else { };

        TheCall.pArrest = eArrestObject;
        TheCall.eArrest = seteArrest(TheCall);
        if (TheCall.eArrest.ErrorList.length > 0) {
            CallErrors.push(TheCall.eArrest.ErrorList);
        };

        TheCall.Errors = CallErrors.slice(0);
          
    
    ///////////////////////////////////eInjury
        eInjuryObject = getObjectFromOLTPExtract(parseObject, "eInjury");
        eInjuryObject.HasDataSet = false;
        if (eInjuryObject.IsUndefined != true) {
            eInjuryObject.HasDataSet = true;
        }
        else {
            //MUST have eDispatch - contains a Mandatory Element
        };
        
        TheCall.pInjury = eInjuryObject;
        TheCall.eInjury = seteInjury(TheCall);
        if (TheCall.eInjury.ErrorList.length > 0) {
            CallErrors.push(TheCall.eInjury.ErrorList);
        };

        TheCall.Errors = CallErrors.slice(0);

    
    
    ///////////////////////////////////eProcedures
        eProceduresObject = getObjectFromOLTPExtract(parseObject, "eProcedures");
        eProceduresObject.HasDataSet = false;
        if (eProceduresObject.IsUndefined != true) {
            eProceduresObject.HasDataSet = true;
        }
        else {
            //MUST have eDispatch - contains a Mandatory Element
        };
        console.log(eProceduresObject)
        TheCall.pProcedures = eProceduresObject;
        TheCall.eProcedures = seteProcedures(TheCall);
        if (TheCall.eProcedures.ErrorList.length > 0) {
            CallErrors.push(TheCall.eProcedures.ErrorList);
        };

        TheCall.Errors = CallErrors.slice(0);
        
    
    ///////////////////////////////////eMedications
        eMedicationsObject = getObjectFromOLTPExtract(parseObject, "eMedications");
        eMedicationsObject.HasDataSet = false;
        if (eMedicationsObject.IsUndefined != true) {
            eMedicationsObject.HasDataSet = true;
        }
        else {
            //MUST have eDispatch - contains a Mandatory Element
        };

        TheCall.pMedications = eMedicationsObject;
        TheCall.eMedications = seteMedications(TheCall);
        if (TheCall.eMedications.ErrorList.length > 0) {
            CallErrors.push(TheCall.eMedications.ErrorList);
        };

        TheCall.Errors = CallErrors.slice(0);

       
    
    ///////////////////////////////////eProtocols
        eProtocolsObject = getObjectFromOLTPExtract(parseObject, "eProtocols");
        eProtocolsObject.HasDataSet = false;
        if (eProtocolsObject.IsUndefined != true) {
            eProtocolsObject.HasDataSet = true;
        }
        else {
            //MUST have eDispatch - contains a Mandatory Element
        };

        TheCall.pProtocols = eProtocolsObject;
        TheCall.eProtocols = seteProtocols(TheCall);

        if (TheCall.eProtocols.ErrorList.length > 0) {
            CallErrors.push(TheCall.eProtocols.ErrorList);
        };

        TheCall.Errors = CallErrors.slice(0);
         
    
    ///////////////////////////////////eVitals
        eVitalsObject = getObjectFromOLTPExtract(parseObject, "eVitals");
        eVitalsObject.HasDataSet = false;
        if (eVitalsObject.IsUndefined != true) {
            eVitalsObject.HasDataSet = true;
        }
        else {
            //MUST have eDispatch - contains a Mandatory Element
        };

        TheCall.pVitals = eVitalsObject;
        TheCall.eVitals = seteVitals(TheCall);

        if (TheCall.eVitals.ErrorList.length > 0) {
            CallErrors.push(TheCall.eVitals.ErrorList);
        };

        TheCall.Errors = CallErrors.slice(0);
    
    
    ///////////////////////////////////ePatient
        ePatientObject = getObjectFromOLTPExtract(parseObject, "ePatient");
        ePatientObject.HasDataSet = false;
        if (ePatientObject.IsUndefined != true) {
            ePatientObject.HasDataSet = true;
        }
        else { };

        TheCall.pPatient = ePatientObject;
        TheCall.ePatient = setePatient(TheCall);
        if (TheCall.ePatient.ErrorList.length > 0) {
            CallErrors.push(TheCall.ePatient.ErrorList);
        };

        TheCall.Errors = CallErrors.slice(0);

    
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
        if (TheCall.eHistory.ErrorList.length > 0) {
            for (var i = 0; i < TheCall.eHistory.ErrorList.length; i++) {

            }
        };

    /*      
        TheCall.pHistory = eHistoryObject;
        TheCall.eHistory = seteHistory(TheCall);
        if (TheCall.eHistory.ErrorList.length > 0) {
            CallErrors.push(TheCall.eHistory.ErrorList);
        };

        TheCall.Errors = CallErrors.slice(0);

        
    
    
    ///////////////////////////////////eExam
        eExamObject = getObjectFromOLTPExtract(parseObject, "eExam");
        eExamObject.HasDataSet = false;
        if (eExamObject.IsUndefined != true) {
            eExamObject.HasDataSet = true;
        }
        else {
            //MUST have eDispatch - contains a Mandatory Element
        };

        TheCall.pExam = eExamObject;
        TheCall.eExam = seteExam(TheCall);
        if (TheCall.eExam.ErrorList.length > 0) {
            CallErrors.push(TheCall.eExam.ErrorList);
        };

        TheCall.Errors = CallErrors.slice(0);
      */
    
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

        if (TheCall.ePayment.ErrorList.length > 0) {
            CallErrors.push(TheCall.ePayment.ErrorList);
        };

        TheCall.Errors = CallErrors.slice(0);

    /*    
    ///////////////////////////////////eOutcome
        eOutcomeObject = getObjectFromOLTPExtract(parseObject, "eOutcome");
        eOutcomeObject.HasDataSet = false;
        if (eOutcomeObject.IsUndefined != true) {
            eOutcomeObject.HasDataSet = true;
        }
        else {
            //MUST have eDispatch - contains a Mandatory Element
        };

        TheCall.pOutcome = eOutcomeObject;
        TheCall.eOutcome = seteOutcome(TheCall);

        if (TheCall.eOutcome.ErrorList.length > 0) {
            CallErrors.push(TheCall.eOutcome.ErrorList);
        };

        TheCall.Errors = CallErrors.slice(0);

       ///////////////////////////////////eOther
        eOtherObject = getObjectFromOLTPExtract(parseObject, "eOther");
        eOutcomeObject.HasDataSet = false;
        if (eOtherObject.IsUndefined != true) {
            eOtherObject.HasDataSet = true;
        }
        else {
            //MUST have eDispatch - contains a Mandatory Element
        };

        TheCall.pOther = eOtherObject;
        TheCall.eOther = seteOther(TheCall);

        if (TheCall.eOther.ErrorList.length > 0) {
            CallErrors.push(TheCall.eOther.ErrorList);
        };

        TheCall.Errors = CallErrors.slice(0);

  
      //
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
  */
    //
    /* 
    };
    */
    b = setV3XML(TheCall);
    //  console.log(TheCall)
    c = setV2OM(TheCall);
    d = setV2XML(c)
    //console.log(c)
    //console.log(d)
    // d = genBill(TheCall);
    //TheCall.Version2XML = c;
    //TheCall.Version3XML = b;
    // d = genBill(TheCall)
    // TheCall.BillFIle = d;

    //console.log(TheCall)
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

    if (typeof sectionObject.attributes.sections != 'undefined') {
        for (var d = 0; d < sectionObject.attributes.sections.length; d++) {

            if (sectionObject.attributes.sections[d].attributes.name == sectionName) {
                _retValue.push(d);
            }
        }
    };
    if (_retValue.length == 0) {
        _retValue.push(-1);
    }

    return _retValue;
};
var getValue = function (elementList, valueElement) {
    //Gets NEMSIS values from list of NEMSIS elements
    //Sets ReturnObject as Array of valueElement value objects.
    //elementList: Entire corpus of valueObjects for a given section - eHistory.01, eHistory.02, eHistory.01
    //valueElement:  The NEMSIS value sought
    var _arr = [];
    var returnObject = new Object();
    var valueObject = new Object();
    returnObject.val = null;
    if (elementList != 'undefined') {
        for (var i = 0; i < elementList.length; i++) //Run through entire array of valueObjects
        {

            if (elementList[i].attributes.title == valueElement) //when elementList.item equals valueElement sought, process
            {
                var returnObject = new Object(); //if valueElement in list, return an Object.
                valueObject.Count = 0;
                valueObject.IsNull = true;
                returnObject.val = null;
                //if ((typeof elementList[i].attributes.value == 'undefined')||(elementList[i].attributes.value ==null ))   //Determine if valueObject exists
                if (elementList[i].attributes.value =="" )   //Determine if valueObject exists
                {
                    //If Not, retrun NullObject assertion
                    valueObject.Count = 0;
                    returnObject.HasValue = false;
                    valueObject.IsNull = true;
                    returnObject.val = null;
                    _arr.push(returnObject);
                    valueObject.Count = _arr.length;
                    valueObject.ValueArray = _arr;
                    return valueObject;
                }
                else
                {

                    if (elementList[i].attributes.value.trim().length != 0)  //Can't trust data in this world.  
                    {
                        valueObject.IsNull = false;                                 // The Object has valid Value, so set IsNull 
                        returnObject.val = elementList[i].attributes.value.trim();  // Good data, assign it to return object
                    }
                };
                //PN values, find the Pertinent Negatives
                if ((elementList[i].attributes.pn != "") && (elementList[i].attributes.pn != 'undefined')) {

                    returnObject.pn = elementList[i].attributes.pn;
                    valueObject.HasPN = true;
                };
                //Exceptional Values, PhoneNumber, eMail Address, DrugCode Type
                if (typeof elementList[i].attributes.params != 'undefined') {
                    if (typeof elementList[i].attributes.params.PhoneNumberType != 'undefined') {
                        returnObject.PhoneNumberType = elementList[i].attributes.params.PhoneNumberType.value;
                    } else if (typeof elementList[i].attributes.params.EmailType != 'undefined') {
                        returnObject.EmailType = elementList[i].attributes.params.EmailAddressType.value;
                    }
                    else {
                        returnObject.Params = elementList[i].attributes.params;
                    }
                }


                if (_arr.indexOf(returnObject.val) == -1) {
                    returnObject.HasValue = true;
                    _arr.push(returnObject);
                };

                returnObject = null;
            }
        };
        valueObject.Count = _arr.length;
        valueObject.ValueArray = _arr;
        return valueObject;
    };
};
function setV2(NEMSISElementNumber, v3Val, compValue) {
    alert()
    var _retv = "";
    switch (NEMSISElementNumber) {
        case "eArrest.01":

            if (eArrest01[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eArrest01[v3Val];
            }
            break;
        case "eArrest.02":
            if (eArrest02[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eArrest02[v3Val];
            }
            break;
        case "eArrest.03":
            if (eArrest03[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eArrest03[v3Val];
            }
            break;

        case "eArrest.04":
            if (eArrest04[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eArrest04[v3Val];
            }
            break;


        case "eArrest.11":
            if (eArrest11[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eArrest11[v3Val];
            }
            break;

        case "eArrest.12":
            if (eArrest12[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eArrest12[v3Val];
            }
            break;

        case "eArrest.13":
            if (eArrest13[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eArrest13[v3Val];
            }
            break;

        case "eArrest.14":
            if (eArrest14[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eArrest14[v3Val];
            }
            break;


        case "eArrest.16":
            if (eArrest16[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eArrest16[v3Val];
            }
            break;


        case "eArrest.17":
            if (eArrest17[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eArrest17[v3Val];
            }
            break;

        case "eCrew.02":
            if (eCrew02[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eCrew02[v3Val];
            }
            break;
        case "eCrew.03":
            if (eCrew03[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eCrew03[v3Val];
            }
            break;

        case "eDispatch.01":
            if (eDispatch01[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eDispatch01[v3Val];
            }
            break;

        case "eDispatch.02":
            if (eDispatch02[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eDispatch02[v3Val];
            }
            break;
        case "eDispatch.03":
            if (eDispatch03[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eDispatch03[v3Val];
            }
            break;
        case "eDispatch.04":
            if (eDispatch04[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eDispatch04[v3Val];
            }
            break;
        case "eDispatch.06":
            if (eDispatch06[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eDispatch06[v3Val];
            }
            break;
        case "eDispatch.07":
            if (eDispatch07[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eDispatch07[v3Val];
            }
            break;
        case "eDispatch.08":
            if (eDispatch08[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eDispatch08[v3Val];
            }
            break;

        case "eDisposition.12":

            if (eDisposition12[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eDisposition12[v3Val];
            }
            break;
        case "eDisposition.13":
            if (eDisposition13[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eDisposition13[v3Val];
            }

            break;
        case "eDisposition.14":

            if (eDisposition14[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eDisposition13[v3Val];
            }
            break;

        case "eDisposition.15":

            if (eDisposition15[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eDisposition15[v3Val];
            }
            break;

        case "eDisposition.17":

            if (eDisposition17[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eDisposition17[v3Val];
            }
            break;


        case "eDisposition.19":

            if (eDisposition19[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eDisposition19[v3Val];
            }
            break;

        case "eDisposition.20":

            if (eDisposition20[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eDisposition20[v3Val];
            }
            break;
        case "eDisposition.21":

            if (eDisposition21[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eDisposition21[v3Val];
            }
            break;

        case "eExam.02":
            if (eExam02[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eExam02[v3Val];
            }
            break;

        case "eExam.04":
            if (eExam04[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eExam04[v3Val];
            }
            break;

        case "eExam.05":
            if (eExam05[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eExam05[v3Val];
            }
            break;

        case "eExam.07":
            if (eExam07[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eExam07[v3Val];
            }
            break;

        case "eExam.08":
            if (eExam08[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eExam08[v3Val];
            }
            break;

        case "eExam.09":
            if (eExam09[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eExam09[v3Val];
            }
            break;

        case "eExam.11":
            if (compValue == "3510001")  //General
            {
                if (eExam10_General[v3Val] == 'undefined') {
                    _retv = v3Val + " 'undefined'";
                }
                else {
                    _retv = eExam10_General[v3Val];
                }
            };
            if (compValue == "3510003")//Left Lower Quadrant
            {
                if (eExam10_LeftLower[v3Val] == 'undefined') {
                    _retv = v3Val + " 'undefined'";
                }
                else {
                    _retv = eExam10_LeftLower[v3Val];
                }
            };

            if (compValue == "3510005") //Left Upper Quadrant
            {
                if (eExam10_LeftUpper[v3Val] == 'undefined') {
                    _retv = v3Val + " 'undefined'";
                }
                else {
                    _retv = eExam10_LeftUpper[v3Val];
                }
            };

            if (compValue == "3510007") //Periumbilical
            {
                if (eExam10_Periumbilical[v3Val] == 'undefined') {
                    _retv = v3Val + " 'undefined'";
                }
                else {
                    _retv = eExam10_Periumbilical[v3Val];
                }
            };
            if (compValue == "3510009") //Right Lower Quadrant
            {
                if (eExam10_RightLower[v3Val] == 'undefined') {
                    _retv = v3Val + " 'undefined'";
                }
                else {
                    _retv = eExam10_RightLower[v3Val];
                }
            };
            if (compValue == "3510011")//Right Upper Quadrant
            {
                if (eExam10_RightUpper[v3Val] == 'undefined') {
                    _retv = v3Val + " 'undefined'";
                }
                else {
                    _retv = eExam10_RightUpper[v3Val];
                }
            };
            break;

        case "eExam.12":
            if (eExam12[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eExam12[v3Val];
            }
            break;

        case "eExam.14":
            var examSet1 = ["3513001", "3513003", "3513005", "3513007"]
            if (examSet1.indexOf(compValue) > -1) {
                if (eExam13_3513001[v3Val] == 'undefined') {
                    _retv = v3Val + " 'undefined'";
                }
                else {
                    _retv = eExam13_3513001[v3Val];
                }
            };
            var examSet2 = ["3513009", "3513011", "3513013", "3513021", "3513023", "3513027"]
            if (examSet2.indexOf(compValue) > -1) {
                if (eExam13_3513009[v3Val] == 'undefined') {
                    _retv = v3Val + " 'undefined'";
                }
                else {
                    _retv = eExam13_3513009[v3Val];
                }
            };
            var examSet2 = ["3513017", "3513019", "3513025"]
            if (examSet2.indexOf(compValue) > -1) {
                if (eExam13_3513017[v3Val] == 'undefined') {
                    _retv = v3Val + " 'undefined'";
                }
                else {
                    _retv = eExam13_3513017[v3Val];
                }
            };
            break;

        case "eExam.16":

            var examSet1 = ["3515007", "3515011", "3515015", "3515019", "3515023", "3515027", "3515039", "3515043", "3515047", "3515067", "3515071", "3515095"]
            if (examSet1.indexOf(compValue) > -1)  //Extremities, right upper
            {
                if (eExam15_ExtremitiesRightUpper[v3Val] == 'undefined') {
                    _retv = v3Val + " 'undefined'";
                }
                else {
                    _retv = eExam15_ExtremitiesRightUpper[v3Val];
                }
            };
            var examSet2 = ["3515005", "3515009", "3515013", "3515017", "3515021", "3515025", "3515037", "3515041", "3515045", "3515065", "3515069", "3515093"]
            if (examSet2.indexOf(compValue) > -1)//Extremities, left upper
            {
                if (eExam15_ExtremitiesLeftUpper[v3Val] == 'undefined') {
                    _retv = v3Val + " 'undefined'";
                }
                else {
                    _retv = eExam15_ExtremitiesLeftUpper[v3Val];
                }
            };
            var examSet3 = ["3515003", "3515031", "3515035", "3515051", "3515055", "3515059", "3515063", "3515075", "3515077", "3515079", "3515083", "3515087", "3515091"]
            if (examSet3.indexOf(compValue) > -1)//Right Lower
            {
                if (eExam15_RightLower[v3Val] == 'undefined') {
                    _retv = v3Val + " 'undefined'";
                }
                else {
                    _retv = eExam15_RightLower[v3Val];
                }
            };
            break;

            var examSet4 = ["3515001", "3515029", "3515033", "3515049", "3515053", "3515057", "3515061", "3515073", "3515075", "35150777", "3515081", "3515057", "3515089"]
            if (examSet4.indexOf(compValue) > -1)//Left Lower
            {
                if (eExam15_LeftLower[v3Val] == 'undefined') {
                    _retv = v3Val + " 'undefined'";
                }
                else {
                    _retv = eExam15_LeftLower[v3Val];
                }
            };
            break;

        case "eExam.18":
            var examSet1 = ["3517001", "3517003"] //Bilateral and Left
            if (examSet1.indexOf(compValue) > -1)//Left Lower
            {
                if (eExam18_BilateralandLeft[v3Val] == 'undefined') {
                    _retv = v3Val + " 'undefined'";
                }
                else {
                    _retv = eExam18_BilateralandLeft[v3Val];
                }
            };
            var examSet1 = ["3517001", "3517005"] //Bilateral and Right
            if (examSet1.indexOf(compValue) > -1)//Left Lower
            {
                {
                    if (eExam18_BilateralandRight[v3Val] == 'undefined') {
                        _retv = v3Val + " 'undefined'";
                    }
                    else {
                        _retv = eExam18_BilateralandRight[v3Val];
                    }
                };
            }
            break;
        case "eExam.19":
            if (eExam19[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eExam19[v3Val];
            }
            break;

        case "eExam.20":
            if (eExam20[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eExam20[v3Val];
            }
            break;

        case "eHistory.01":
            if (eHistory01[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eHistory01[v3Val];
            }
            break;
        case "eHistory.05":
            if (eHistory05[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eHistory05[v3Val];
            }
            break;
        case "eHistory.09":
            if (eHistory09[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eHistory09[v3Val];
            }
            break;
        case "eHistory.10":
            if (eHistory10[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eHistory10[v3Val];
            }
            break;
        case "eHistory.14":
            if (eHistory14[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eHistory14[v3Val];
            }
            break;
        case "eHistory.15":
            if (eHistory15[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eHistory15[v3Val];
            }
            break;
        case "eHistory.16":
            if (eHistory16[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eHistory16[v3Val];
            }
            break;
        case "eHistory.17":
            if (eHistory17[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eHistory17[v3Val];
            }
            break;
        case "eHistory.18":
            if (eHistory18[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eHistory18[v3Val];
            }
            break;


        case "eMedication.02":

            if (eMedication02[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eMedication02[v3Val];
            }
            break;
        case "eMedication.04":

            if (eMedication04[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = (eMedication04[v3Val]);
            }
            break;
        case "eMedication.06":
            if (eMedication06[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eMedication06[v3Val];
            }
            break;
        case "eMedication.07":
            if (eMedication07[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eMedication07[v3Val];
            };
            break;
        case "eMedication.08":
            if (eMedication08[v3Val] == 'undefined') {
                _retv = v3Val + "'undefined'";
            }
            else {
                _retv = eMedication08[v3Val];
            };

            break;
        case "eMedication.11":
            if (eMedication11[v3Val] == 'undefined') {
                _retv = v3Val + "'undefined'";
            }
            else {
                _retv = eMedication11[v3Val];
            };
            break;
        case "eOther.01":
            if (eOther01[v3Val] == 'undefined') {
                _retv = v3Val + "'undefined'";
            }
            else {
                _retv = eOther01[v3Val];
            };
            break;
        case "eOther.02":
            if (eOther02[v3Val] == 'undefined') {
                _retv = v3Val + "'undefined'";
            }
            else {
                _retv = eOther02[v3Val];
            };
            break;
        case "eOther.03":
            if (eOther03[v3Val] == 'undefined') {
                _retv = v3Val + "'undefined'";
            }
            else {
                _retv = eOther03[v3Val];
            };
            break;
        case "eOther.06":
            if (eOther06[v3Val] == 'undefined') {
                _retv = v3Val + "'undefined'";
            }
            else {
                _retv = eOther06[v3Val];
            };
            break;
        case "eOther.07":
            if (eOther07[v3Val] == 'undefined') {
                _retv = v3Val + "'undefined'";
            }
            else {
                _retv = eOther07[v3Val];
            };
            break;
        case "eOutcome.01":
            if (eOutcome01[v3Val] == 'undefined') {
                _retv = v3Val + "'undefined'";
            }
            else {
                _retv = eOutcome01[v3Val];
            };
            break;
        case "eOutcome.02":
            if (eOutcome02[v3Val] == 'undefined') {
                _retv = v3Val + "'undefined'";
            }
            else {
                _retv = eOutcome02[v3Val];
            };
            break;
        case "eOutcome.03":
            if (eOutcome03[v3Val] == 'undefined') {
                _retv = v3Val + "'undefined'";
            }
            else {
                _retv = eOutcome03[v3Val];
            };
            break;
        case "eOutcome.17":
            if (eOutcome17[v3Val] == 'undefined') {
                _retv = v3Val + "'undefined'";
            }
            else {
                _retv = eOutcome17[v3Val];
            };
            break;
        case "ePatient.13":
            if (ePatient13[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = ePatient13[v3Val];
            }
            break;

        case "ePatient.14":
            if (ePatient14[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = ePatient14[v3Val];
            }
            break;
        case "ePatient.16":
            if (ePatient16[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = ePatient16[v3Val];
            }
            break;
        case "ePayment.01":
            if (ePayment01[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = ePayment01[v3Val];
            }
            break;

        case "ePayment.02":
            if (ePayment02[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = ePayment02[v3Val];
            }
            break;
        case "ePayment.11":
            if (ePayment11[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = ePayment11[v3Val];
            }
            break;
        case "ePayment.40":
            if (ePayment40[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = ePayment40[v3Val];
            }
            break;
        case "ePayment.50":
            if (ePayment50[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = ePayment50[v3Val];
            }
            break;
        case "ePayment.52":
            if (ePayment52[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = ePayment52[v3Val];
            }
            break;
        case "eProcedures.02":
            if (eProcedures02[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eProcedures02[v3Val];
            }
            break;
        case "eProcedures.07":
            if (eProcedures07[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eProcedures07[v3Val];
            }
            break;
        case "eProcedures.08":
            if (eProcedures08[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eProcedures08[v3Val];
            }
            break;
        case "eProcedures.11":
            if (eProcedures11[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eProcedures11[v3Val];
            }
            break;
        case "eProcedures.13":
            if (eProcedures13[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eProcedures13[v3Val];
            }
            break;
        case "eProcedures.14":
            if (eProcedures14[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eProcedures14[v3Val];
            }
            break;
        case "eScene.04":
            if (eScene04[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eScene04[v3Val];
            }
            break;
        case "eScene.06":
            if (eScene06[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eScene06[v3Val];
            }
            break;
        case "eScene.07":
            if (eScene07[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eScene07[v3Val];
            }
            break;
        case "eScene.09":
            if (eScene09[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eScene09[v3Val];
            }
            break;

        case "eSituation.06":
            if (eSituation06[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eSituation06[v3Val];
            }
            break;
        case "eSituation.07":
            if (eSituation07[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eSituation07[v3Val];
            }
            break;
        case "eSituation.08":
            if (eSituation08[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eSituation08[v3Val];
            }
            break;
        case "eSituation.09":
            if (eSituation09[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eSituation09[v3Val];
            }
            break;

        case "eSituation.10":
            if (eSituation10[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eSituation10[v3Val];
            }
            break;
        case "eVitals.02":
            if (eVitals02[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eVitals02[v3Val];
            }
            break;
        case "eVitals.03":
            if (eVitals03[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eVitals03[v3Val];
            }
            break;
        case "eVitals.08":
            if (eVitals08[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eVitals08[v3Val];
            }
            break;
        case "eVitals.13":
            if (eVitals13[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eVitals13[v3Val];
            }
            break;
        case "eVitals.15":
            if (eVitals15[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eVitals15[v3Val];
            }
            break;
        case "eVitals.19":
            if (eVitals19[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eVitals19[v3Val];
            }
            break;
        case "eVitals.20":
            if (eVitals20[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eVitals20[v3Val];
            }
            break;
        case "eVitals.21":
            if (eVitals21[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eVitals21[v3Val];
            }
            break;
        case "eVitals.22":
            if (eVitals22[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eVitals22[v3Val];
            }
            break;
        case "eVitals.25":
            if (eVitals25[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eVitals25[v3Val];
            }
            break;
        case "eVitals.26":
            if (eVitals26[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eVitals26[v3Val];
            }
            break;
        case "eVitals.29":
            if (eVitals29[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eVitals29[v3Val];
            }
            break;
        case "eVitals.31":
            if (eVitals31[v3Val] == 'undefined') {
                _retv = v3Val + " 'undefined'";
            }
            else {
                _retv = eVitals31[v3Val];
            }
            break;

        default:
            _retv = NEMSISElementNumber = " version 2 not found";
    }
    return _retv;
};
var isRequiredStateElement = function (elementID) {
    return true;
};
function XMLWriter(encoding, version) {
    if (encoding)
        this.encoding = encoding;
    if (version)
        this.version = version;
};

(function () {

    XMLWriter.prototype = {
        encoding: 'ISO-8859-1',// what is the encoding
        version: '1.0', //what xml version to use
        formatting: 'indented', //how to format the output (indented/none)  ?
        indentChar: '\t', //char to use for indent
        indentation: 1, //how many indentChar to add per level
        newLine: '\n', //character to separate nodes when formatting
        //start a new document, cleanup if we are reusing
        writeStartDocument: function (standalone) {
            this.close();//cleanup
            this.stack = [];
            this.standalone = standalone;
        },
        //get back to the root
        writeEndDocument: function () {
            this.active = this.root;
            this.stack = [];
        },
        //set the text of the doctype
        writeDocType: function (dt) {
            this.doctype = dt;
        },
        //start a new node with this name, and an optional namespace
        writeStartElement: function (name, ns) {
            if (ns)//namespace
                name = ns + ':' + name;

            var node = { n: name, a: {}, c: [] };//(n)ame, (a)ttributes, (c)hildren

            if (this.active) {
                this.active.c.push(node);
                this.stack.push(this.active);
            } else
                this.root = node;
            this.active = node;
        },
        //go up one node, if we are in the root, ignore it
        writeEndElement: function () {
            this.active = this.stack.pop() || this.root;
        },
        //add an attribute to the active node
        writeAttributeString: function (name, value) {
            if (this.active)
                this.active.a[name] = value;
        },
        //add a text node to the active node
        writeString: function (text) {
            if (this.active)
                this.active.c.push(text);
        },
        //shortcut, open an element, write the text and close
        writeElementString: function (name, text, ns) {
            this.writeStartElement(name, ns);
            this.writeString(text);
            this.writeEndElement();
        },
        //add a text node wrapped with CDATA
        writeCDATA: function (text) {
            this.writeString('<![CDATA[' + text + ']]>');
        },
        //add a text node wrapped in a comment
        writeComment: function (text) {
            this.writeString('<!-- ' + text + ' -->');
        },
        //generate the xml string, you can skip closing the last nodes
        flush: function () {
            if (this.stack && this.stack[0])//ensure it's closed
                this.writeEndDocument();

            var
                chr = '', indent = '', num = this.indentation,
                formatting = this.formatting.toLowerCase() == 'indented',
                buffer = '<?xml version="' + this.version + '" encoding="' + this.encoding + '"';

            if (this.standalone !== 'undefined')
                buffer += ' standalone="' + !!this.standalone + '"';
            buffer += ' ?>';

            buffer = [buffer];

            if (this.doctype && this.root)
                buffer.push("\'");

            if (formatting) {
                while (num--)
                    chr += this.indentChar;
            }

            if (this.root)//skip if no element was added
                format(this.root, indent, chr, buffer);

            return buffer.join(formatting ? this.newLine : '');
        },
        //cleanup, don't use again without calling startDocument
        close: function () {
            if (this.root)
                clean(this.root);
            this.active = this.root = this.stack = null;
        },
        /*  getDocument: window.ActiveXObject
              ? function () { //MSIE
                  var doc = new ActiveXObject('Microsoft.XMLDOM');
                  doc.async = false;
                  doc.loadXML(this.flush());
                  return doc;
              }
              : function () {// Mozilla, Firefox, Opera, etc.
                  return (new DOMParser()).parseFromString(this.flush(), 'text/xml');
              }
              */
    };

    //utility, you don't need it
    function clean(node) {
        var l = node.c.length;
        while (l--) {
            if (typeof node.c[l] == 'object')
                clean(node.c[l]);
        }
        node.n = node.a = node.c = null;
    };

    //utility, you don't need it
    function format(node, indent, chr, buffer) {
        var
            xml = indent + '<' + node.n,
            nc = node.c.length,
            attr, child, i = 0;

        for (attr in node.a)
            xml += ' ' + attr + '="' + node.a[attr] + '"';

        xml += nc ? '>' : ' />';

        buffer.push(xml);

        if (nc) {
            do {
                child = node.c[i++];
                if (typeof child == 'string') {
                    if (nc == 1)//single text node
                        return buffer.push(buffer.pop() + child + '</' + node.n + '>');
                    else //regular text node
                        buffer.push(indent + chr + child);
                } else if (typeof child == 'object') //element node
                    format(child, indent + chr, chr, buffer);
            } while (i < nc);
            buffer.push(indent + '</' + node.n + '>');
        }
    };

})();
/*
var getVersion221Values = function (AllVersion221ObjectArray, valueElement) {
    var _arr = [];
    var returnObject = new Object();
    var valueObject = new Object();
    if (AllVersion221ObjectArray == "'undefined'") {
    }
    else {
        for (var i = 0; i < AllVersion221ObjectArray.length; i++)  //outer loop.  Array of Arrays
        {
            //console.log(AllVersion221ObjectArray[i])
            if (AllVersion221ObjectArray[i].element == valueElement) {
                if (AllVersion221ObjectArray[i].val != null) {
                    returnObject.HasValue = true;
                    // console.log(AllVersion221ObjectArray[i].val);
                    _arr.push(AllVersion221ObjectArray[i].val);

                }
            }
        }
    };

    returnObject.val = _arr;
    //  console.log(_arr);
    valueObject = returnObject;
    // console.log(valueObject)
    return valueObject;
};
var eArrest01 = {
    "3001001": "0",
    "3001003": "2240",
    "3001005": "2245"
};
var eArrest02 = {
    "3002001": "2250",
    "3002003": "2260",
    "3002005": "2275",
    "3002007": "2270",
    "3002009": "2275",
    "3002011": "2275",
    "3002013": "2265",
    "3002015": "2255"
};
var eArrest03 = {
    "3003001": "2280",
    "3003003": "2285",
    "3003005": "2290",
    "3003007": "2295",
    "3003009": "2300",
    "3003011": "2305"
};
var eArrest04 = {
    "3004001": "2320",
    "3004003": "2315",
    "3004005": "2310",
    "3004007": "2315"
};
var eArrest11 = {
    "3011001": "2325",
    "3011003": "2330",
    "3011005": "2345",
    "3011007": "2350",
    "3011009": "2355",
    "3011011": "2360",
    "3011013": "2365"
};
var eArrest12 = {
    "3012001": "0",
    "3012003": "2370",
    "3012005": "2370",
    "3012005": "2375"
};
var eArrest13 = {
    "3013001": "2380",
    "3013003": "2380",
    "3013005": "2385",
    "3013007": "2385"
};
/*var eArrest14 = function (estTimeEvent, estTimeArrival) 
    {
        var _diff = Math.abs(new Date(estTimeCal) - new Date(estTimeArrival));
        var _minuteCount = Math.floor((diff / 1000) / 60);
        if (_minuteCount > 20) {
            _arrest14 = "2390";
        }
        else if (_minuteCount > 15 && _mincount >= 20) {
            _arrest14 = "2395";
        }
        else if (_minuteCount > 10 && _mincount >= 15) {
            _arrest14 = "2400";
        }
        else if (_minuteCount > 8 && _mincount >= 10) {
            _arrest14 = "2405";
        }
        else if (_minuteCount > 6 && _mincount >= 8) {
            _arrest14 = "2410";
        }
        else if (_minuteCount > 4 && _mincount >= 6) {
            _arrest14 = "2415";
        }
        else if (_minuteCount > 2 && _mincount >= 4) {
            _arrest14 = "2420";
        }
        else if (_minuteCount > 0 && _mincount >= 2) {
            _arrest14 = "2425";
        }
        else {
            _arrest14 = "-10";
        }
        return _arrest14;
    }
    
var eCrew03 = {
    "2403001": "580",
    "2403003": "580",
    "2403005": "595",
    "2403007": "590",
    "2403009": "600",
    "2403011": "585",
    "2403013": "590"
};
var eCrew02 = {
    "9925001": "6110",
    "9925003": "6100",
    "9925005": "6090",
    "9925007": "6110",
    "9925013": "	6120",
    "9925015": "	6090",
    "9925017": "	6100",
    "9925019": "	6110",
    "9925021": "	6111",
    "9925023": "	640",
    "9925025": "	645",
    "9925027": "	6112",
    "9925031": "635",
    "9925033": "6110",
    "9925034": "610",
    "9925037": "611",
    "9925039": "6110",
    "9925041": "6111",
    "9925043": "6111"
};
var eDevice03 = {
    "4103001": "5090",
    "4103003": "5095",
    "4103005": "5100",
    "4103007": "5105",
    "4103009": "5110",
    "4103011": "5115",
    "4103013": "5120",
    "4103015": "5125",
    "4103017": "5130",
    "4103019": "5135",
    "4103021": "5140",
    "4103025": "5145",
    "4103027": "5150",
    "4103029": "5155",
    "4103031": "5160",
    "4103033": "5165",
    "4103035": "5170",
    "4103037": "5175",
    "4103039": "5180",
    "4103041": "5185",
    "4103043": "5190",
    "4103045": "5195"
};
var eDevice04 = {
    "JPG": "5200",
    "PDF": "5205"
};
var eDevice06 = {
    "4106001": "5220",
    "4106003": "5210",
    "4106005": "5225",
    "4106007": "5215",
    "4106009": "5235",
    "4106011": "5230",

    "4106013": "5240"
};
var eDevice07 = {
    "4107001": "5245",
    "4107003": "5250",
    "4107005": "5255",
    "4107007": "5260",
    "4107009": "5265",
    "4107011": "5270",
    "4107013": "5305",
    "4107015": "5305",
    "4107017": "5275",
    "4107019": "5280",
    "4107021": "5285",
    "4107025": "5290",
    "4107029": "5295",
    "4107033": "5300",
    "4107035": "5300",
    "4107037": "5300",
    "4107039": "5300",
    "4107041": "5300"
};
var eDevice09 = {
    "4109001": "5310",
    "4109003": "5311"
};
var eDispatch01 = {
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
var eDispatch02 = {
    "2302001": "0",
    "2302003": "570",
    "2302005": "575",
    "2302007": "575"
};
var eDisposition12 = {
    "4212001": "4845",
    "4212003": "4850",
    "4212005": "4845",
    "4212007": "4815",
    "4212009": "4815",
    "4212011": "4825",
    "4212013": "4820",
    "4212015": "4820",
    "4212017": "4820",
    "4212019": "4820",
    "4212021": "4830",
    "4212023": "4835",
    "4212025": "4835",
    "4212027": "4840",
    "4212029": "4840",
    "4212031": "4845",
    "4212033": "4850",
    "4212035": "4855",
    "4212037": "4860",
    "4212039": "4830",
    "4212041": "4830",
    "4212043": "4830"
};
var eDisposition13 = {
    "9909001": "4865",
    "9909003": "4885",
    "9909005": "4885",
    "9909007": "4870",
    "9909009": "4885",
    "9909011": "4875",
    "9909013": "4880",
    "9909015": "4885"
};
var eDisposition14 = {
    "4214001": "4890",
    "4214003": "4895",
    "4214005": "4900",
    "4214007": "4900",
    "4214009": "4925",
    "4214011": "4905",
    "4214013": "4910",
    "4214015": "4915",
    "4214017": "4920",
    "4214019": "4925"
};
var eDisposition15 = {
    "9909001": "4930",
    "9909003": "4950",
    "9909005": "4950",
    "9909007": "4935",
    "9909009": "4950",
    "9909011": "4940",
    "9909013": "4945",
    "9909015": "4950"
};
var eDisposition17 = {
    "4217001": "4965",
    "4217003": "4955",
    "4217005": "4970",
    "4217007": "4960"
};
var eDisposition19 = {
    "9916001": "4975",
    "9916003": "4980",
    "9916005": "4985"
}
var eDisposition20 = {
    "4220001": "4990",
    "4220003": "4995",
    "4220005": "5000",
    "4220007": "5005",
    "4220009": "5010",
    "4220011": "5015",
    "4220013": "5020",
    "4220015": "5025",
    "4220017": "5030",
    "4220019": "5035",
    "4220021": "5040"
};
var eDisposition21 = {
    "4221001": "7270",
    "4221003": "7280",
    "4221005": "7290",
    "4221007": "7290",
    "4221009": "7300",
    "4221011": "7310",
    "4221013": "7330",
    "4221015": "7340",
    "4221017": "7350",
    "4221019": "7360"
};
var eExam02 = {
    "3502001": "3375",
    "3502003": "3380",
    "3502005": "3385",
    "3502007": "3390",
    "3502009": "3395",
    "3502011": "3400",
    "3502013": "3405",
    "3502015": "3410",
    "3502017": "3415"
};
var eExam04 = {
    "3504001": "3430",
    "3504003": "3435",
    "3504005": "3440",
    "3504007": "3430",
    "3504009": "3435",
    "3504011": "3465",
    "3504013": "3430",
    "3504015": "3445",
    "3504017": "3450",
    "3504019": "3455",
    "3504021": "3420",
    "3504023": "3425",
    "3504025": "3460",
    "3504027": "-10",
    "3504029": "-10",
    "3504031": "-10",
    "3504033": "3465"
}
var eExam05 = {
    "3505001": "3490",
    "3505003": "3490",
    "3505005": "3490",
    "3505007": "3490",
    "3505009": "3490",
    "3505011": "3490",
    "3505013": "3490",
    "3505015": "3490",
    "3505017": "3490",
    "3505019": "3495",
    "3505021": "3485",
    "3505023": "3490",
    "3505025": "3495",
    "3505027": "3490",
    "3505029": "3490",
    "3505031": "3490",
    "3505033": "3470",
    "3505035": "3475",
    "3505037": "3490",
    "3505039": "3490",
    "3505045": "3495",
    "3505047": "3495",
    "3505049": "3495",
    "3505051": "3495",
    "3505053": "3495"
};
var eExam07 = {
    "3507001": "-10",
    "3507003": "-10",
    "3507005": "-10",
    "3507007": "-10",
    "3507009": "-10",
    "3507011": "-10",
    "3507013": "-10",
    "3507015": "-10",
    "3507017": "-10",
    "3507019": "-10",
    "3507021": "-10",
    "3507023": "-10",
    "3507025": "3500",
    "3507027": "-10",
    "3507029": "3500",
    "3507031": "3505",
    "3507033": "-10",
    "3507035": "-10",
    "3507037": "3515",
    "3507039": "3520",
    "3507045": "3525",
    "3507047": "3525",
    "3507049": "-10",
    "3507051": "-10",
    "3507053": "-10",
    "3507055": "-10",
    "3507057": "-10",
    "3507059": "-10",

}
var eExam08 = {
    "3508001": "-10",
    "3508003": "-10",
    "3508005": "3540",
    "3508007": "-10",
    "3508009": "-10",
    "3508011": "3545",
    "3508013": "3550",
    "3508015": "3550",
    "3508017": "3550",
    "3508019": "3570",
    "3508021": "3570",
    "3508023": "3570",
    "3508025": "-10",
    "3508027": "-10",
    "3508029": "-10",
    "3508031": "-10",
    "3508033": "-10",
    "3508035": "-10",
    "3508037": "3555",
    "3508039": "3560",
    "3508041": "-10",
    "3508043": "-10",
    "3508045": "-10",
    "3508047": "3565",
    "3508049": "-10",
    "3508051": "-10",
    "3508053": "3530",
    "3508055": "3535",
    "3508057": "-10",
    "3508059": "3585",
    "3508061": "3590",
    "3508063": "-10",
    "3508065": "3575",
    "3508067": "3575",
    "3508069": "-10",
    "3508071": "3580",
    "3508073": "3580",
    "3508075": "3580",
    "3508077": "-10",
    "3508079": "-10",
    "3508085": "3585",
    "3508087": "3590",
    "3508089": "3580",
    "3508091": "3580",
    "3508093": "3580",
    "3508095": "3580",
    "3508097": "3580",
    "3508099": "3565",
    "3508101": "-10",
    "3508103": "3585"

};
var eExam09 = {
    "3509001": "3610",
    "3509003": "3605",
    "3509005": "3610",
    "3509007": "3610",
    "3509009": "3595",
    "3509011": "3600",
    "3509013": "3605",
    "3509015": "3605",
    "3509017": "3605",
    "3509019": "3605",
    "3509021": "3605"
};
var eExam10_General = {  //Generalized for eExam11

    "3511001": "3640",
    "3511003": "3625",
    "3511005": "3640",
    "3511007": "3640",
    "3511009": "3640",
    "3511011": "3640",
    "3511013": "3640",
    "3511015": "3640",
    "3511017": "3640",
    "3511019": "3640",
    "3511021": "3625",
    "3511023": "3635",
    "3511025": "3630",
    "3511027": "3640",
    "3511029": "3640",
    "3511031": "3630",
    "3511033": "3635",
    "3511035": "3635",
    "3511037": "3615",
    "3511039": "3620",
    "3511041": "3640",
    "3511043": "3640",
    "3511045": "3640",
    "3511051": "3640",
    "3511053": "3640",
    "3511055": "3640",
    "3511057": "3635",
    "3511059": "3640",
    "3511061": "3635"
};
var eExam10_LeftLower = {
    "3511001": "3670",
    "3511003": "3655",
    "3511005": "3670",
    "3511007": "3670",
    "3511009": "3670",
    "3511011": "3670",
    "3511013": "3670",
    "3511015": "3670",
    "3511017": "3670",
    "3511019": "3670",
    "3511021": "3655",
    "3511023": "3665",
    "3511025": "3660",
    "3511027": "3670",
    "3511029": "3670",
    "3511031": "3660",
    "3511033": "3665",
    "3511035": "3665",
    "3511037": "3645",
    "3511039": "3650",
    "3511041": "3670",
    "3511043": "3670",
    "3511045": "3670",
    "3511051": "3670",
    "3511053": "3670",
    "3511055": "3670",
    "3511057": "3665",
    "3511059": "3670",
    "3511061": "3665"
};
var eExam10_LeftUpper = { //Left Upper Quadrant for eExam11
    "3511001": "3640",
    "3511003": "3625",
    "3511005": "3640",
    "3511007": "3640",
    "3511009": "3640",
    "3511011": "3640",
    "3511013": "3640",
    "3511015": "3640",
    "3511017": "3640",
    "3511019": "3640",
    "3511021": "3625",
    "3511023": "3635",
    "3511025": "3630",
    "3511027": "3640",
    "3511029": "3640",
    "3511031": "3630",
    "3511033": "3635",
    "3511035": "3635",
    "3511037": "3615",
    "3511039": "3620",
    "3511041": "3640",
    "3511043": "3640",
    "3511045": "3640",
    "3511051": "3640",
    "3511053": "3640",
    "3511055": "3640",
    "3511057": "3635",
    "3511059": "3640",
    "3511061": "3635"
};
var eExam10_Periumbilical = //Periumbilical for eExam11
{
    "3511001": "3640",
    "3511003": "3625",
    "3511005": "3640",
    "3511007": "3640",
    "3511009": "3640",
    "3511011": "3640",
    "3511013": "3640",
    "3511015": "3640",
    "3511017": "3640",
    "3511019": "3640",
    "3511021": "3625",
    "3511023": "3635",
    "3511025": "3630",
    "3511027": "3640",
    "3511029": "3640",
    "3511031": "3630",
    "3511033": "3635",
    "3511035": "3635",
    "3511037": "3615",
    "3511039": "3620",
    "3511041": "3640",
    "3511043": "3640",
    "3511045": "3640",
    "3511051": "3640",
    "3511053": "3640",
    "3511055": "3640",
    "3511057": "3635",
    "3511059": "3640",
    "3511061": "3635"
};
var eExam10_RightLower =  //Right Lower Quadrant for eExam11
{
    "3511001": "3730",
    "3511003": "3725",
    "3511005": "3730",
    "3511007": "3730",
    "3511009": "3730",
    "3511011": "3730",
    "3511013": "3730",
    "3511015": "3730",
    "3511017": "3730",
    "3511019": "3730",
    "3511021": "3725",
    "3511023": "3725",
    "3511025": "3720",
    "3511027": "3730",
    "3511029": "3730",
    "3511031": "3720",
    "3511033": "3725",
    "3511035": "3725",
    "3511037": "3505",
    "3511039": "3710",
    "3511041": "3730",
    "3511043": "3730",
    "3511045": "3730",
    "3511051": "3730",
    "3511053": "3730",
    "3511055": "3730",
    "3511057": "3725",
    "3511059": "3730",
    "3511061": "3725"
};
var eExam10_RightUpper =  //Right Upper Quadrant for eExam11
{
    "3511001": "3680",
    "3511003": "3675",
    "3511005": "3690",
    "3511007": "3690",
    "3511009": "3690",
    "3511011": "3690",
    "3511013": "3690",
    "3511015": "3690",
    "3511017": "3690",
    "3511019": "3690",
    "3511021": "3675",
    "3511023": "3685",
    "3511025": "3680",
    "3511027": "3690",
    "3511029": "3690",
    "3511031": "3680",
    "3511033": "3685",
    "3511035": "3685",
    "3511037": "3675",
    "3511039": "3680",
    "3511041": "3690",
    "3511043": "3690",
    "3511045": "3690",
    "3511051": "3690",
    "3511053": "3690",
    "3511055": "3690",
    "3511057": "3685",
    "3511059": "3690",
    "3511061": "3685"
};
var eExam12 = {
    "3512001": "3755",
    "3512003": "3755",
    "3512005": "3755",
    "3512007": "3760",
    "3512009": "3760",
    "3512011": "3760",
    "3512013": "3760",
    "3512015": "3755",
    "3512017": "3755",
    "3512019": "3755",
    "3512021": "3755",
    "3512023": "3755",
    "3512025": "3755",
    "3512027": "3750",
    "3512029": "3755",
    "3512031": "3755",
    "3512033": "3755",
    "3512035": "3755",
    "512037": "3735",
    "3512039": "3740",
    "3512041": "3755",
    "3512043": "3755",
    "3512045": "3755",
    "3512047": "3750",
    "3512049": "3745",
    "3512051": "3755",
    "3512057": "3755",
    "3512059": "3755",
    "3512061": "3755",
    "3512063": "3755",
    "3512065": "3755"
};
//    if eExam.13 = 3513001 or 3513003 or 3513005 or 3513007 the eExam14 =
var eExam13_3513001 = {
    "3514001": "3780",
    "3514003": "3780",
    "3514005": "3780",
    "3514007": "3780",
    "3514009": "3780",
    "3514011": "3780",
    "3514013": "3780",
    "3514015": "3780",
    "3514017": "3780",
    "3514019": "3780",
    "3514021": "3780",
    "3514023": "3780",
    "3514025": "3780",
    "3514027": "3765",
    "3514029": "3770",
    "3514031": "3780",
    "3514033": "3775",
    "3514035": "3780",
    "3514041": "3780",
    "3514043": "3785",
    "3514045": "3780",
    "3514047": "3780",
    "3514049": "3780",
    "3514051": "3780",
    "3514053": "3780",
    "3514055": "3780"
};
//if eExam.13 = 3513009 or 3513011 or 3513013 or 3513021 or 3513023 or 3513027 
var eExam13_3513009 = {
    "3514001": "3805",
    "3514003": "3805",
    "3514005": "3805",
    "3514007": "3805",
    "3514009": "3805",
    "3514011": "3805",
    "3514013": "3805",
    "3514015": "3805",
    "3514017": "3805",
    "3514019": "3805",
    "3514021": "3805",
    "3514023": "3805",
    "3514025": "3805",
    "3514027": "3790",
    "3514029": "3795",
    "3514031": "3805",
    "3514033": "3800",
    "3514035": "3805",
    "3514041": "3805",
    "3514043": "3810",
    "3514045": "3805",
    "3514047": "3805",
    "3514049": "3805",
    "3514051": "3805",
    "3514053": "3805",
    "3514055": "3805"
};
//    if eExam.13 = 3513017 or 3513019 or 3513025
var eExam13_3513017 = {
    "3514001": "3830",
    "3514003": "3830",
    "3514005": "3830",
    "3514007": "3830",
    "3514009": "3830",
    "3514011": "3830",
    "3514013": "3830",
    "3514015": "3830",
    "3514017": "3830",
    "3514019": "3830",
    "3514021": "3830",
    "3514023": "3830",
    "3514025": "3830",
    "3514027": "3815",
    "3514029": "3820",
    "3514031": "3830",
    "3514033": "3825",
    "3514035": "3830",
    "3514041": "3830",
    "3514043": "3835",
    "3514045": "3830",
    "3514047": "3830",
    "3514049": "3830",
    "3514051": "3830",
    "3514053": "3830",
    "3514055": "3830"
};
//Extremities, right upper
//if eExam.15 = 3515007, 3515011,  3515015, 3515019, 3515023, 3515027, 3515039, 3515043, 3515047, 3515067, 3515071, 3515095
var eExam15_ExtremitiesRightUpper = {
    "3516001": "3865",
    "3516003": "3865",
    "3516005": "3865",
    "3516007": "3865",
    "3516009": "3865",
    "3516011": "3865",
    "3516013": "3865",
    "3516015": "3865",
    "3516017": "3865",
    "3516019": "3865",
    "3516021": "3865",
    "3516023": "3865",
    "3516025": "3865",
    "3516027": "3865",
    "3516029": "3860",
    "3516031": "3865",
    "3516033": "3865",
    "3516035": "3865",
    "3516037": "3865",
    "3516039": "3865",
    "3516041": "3865",
    "3516043": "3870",
    "3516045": "3840",
    "3516047": "3840",
    "3516049": "3840",
    "3516051": "3845",
    "3516053": "3865",
    "3516055": "3865",
    "3516057": "3850",
    "3516059": "3850",
    "3516061": "3840",
    "3516063": "3865",
    "3516065": "3855",
    "3516067": "3855",
    "3516069": "3840",
    "3516075": "3865",
    "3516077": "3865",
    "3516079": "3865",
    "3516081": "3865"
}
//Extremities, left upper
//if eExam.15 = 3515005, 3515009,  3515013, 3515017, 3515021, 3515025, 3515037, 3515041, 3515045, 3515065, 3515069, 3515093
var eExam15_ExtremitiesLeftUpper = {
    "3516001": "3935",
    "3516003": "3935",
    "3516005": "3935",
    "3516007": "3935",
    "3516009": "3935",
    "3516011": "3935",
    "3516013": "3935",
    "3516015": "3935",
    "3516017": "3935",
    "3516019": "3935",
    "3516021": "3935",
    "3516023": "3935",
    "3516025": "3935",
    "3516027": "3935",
    "3516029": "3930",
    "3516031": "3935",
    "3516033": "3935",
    "3516035": "3935",
    "3516037": "3935",
    "3516039": "3935",
    "3516041": "3935",
    "3516043": "3940",
    "3516045": "3910",
    "3516047": "3910",
    "3516049": "3910",
    "3516051": "3915",
    "3516053": "3935",
    "3516055": "3935",
    "3516057": "3920",
    "3516059": "3920",
    "3516061": "3910",
    "3516063": "3935",
    "3516065": "3925",
    "3516067": "3925",
    "3516069": "3910",
    "3516075": "3935",
    "3516077": "3935",
    "3516079": "3935",
    "3516081": "3935"
}
//Extremities, RIGHT LOWER
// if eExam.15 = 3515003, 3515031,  3515035, 3515051, 3515055, 3515059, 3515063, 3515075, 3515077, 3515079, 3515083, 3515087, 3515091
var eExam15_RightLower = {
    "3516001": "3900",
    "3516003": "3900",
    "3516005": "3900",
    "3516007": "3900",
    "3516009": "3900",
    "3516011": "3900",
    "3516013": "3900",
    "3516015": "3900",
    "3516017": "3900",
    "3516019": "3900",
    "3516021": "3900",
    "3516023": "3900",
    "3516025": "3900",
    "3516027": "3900",
    "3516029": "3895",
    "3516031": "3900",
    "3516033": "3900",
    "3516035": "3900",
    "3516037": "3900",
    "3516039": "3900",
    "3516041": "3900",
    "3516043": "3905",
    "3516045": "3875",
    "3516047": "3875",
    "3516049": "3875",
    "3516051": "3880",
    "3516053": "3900",
    "3516055": "3900",
    "3516057": "3885",
    "3516059": "3885",
    "3516061": "3875",
    "3516063": "3900",
    "3516065": "3890",
    "3516067": "3890",
    "3516069": "3875",
    "3516075": "3900",
    "3516077": "3900",
    "3516079": "3900",
    "3516081": "3900"
}
//Extremities, LEFT LOWER
// if eExam.15 = "3515001", "3515029",  "3515033", "3515049", "3515053", "3515057", "3515061", "3515073", "3515075", "35150777", "3515081", "3515057", "3515089"
eExam15_LeftLower = {
    "3516001": "3970",
    "3516003": "3970",
    "3516005": "3970",
    "3516007": "3970",
    "3516009": "3970",
    "3516011": "3970",
    "3516013": "3970",
    "3516015": "3970",
    "3516017": "3970",
    "3516019": "3970",
    "3516021": "3970",
    "3516023": "3970",
    "3516025": "3970",
    "3516027": "3970",
    "3516029": "3965",
    "3516031": "3970",
    "3516033": "3970",
    "3516035": "3970",
    "3516037": "3970",
    "3516039": "3970",
    "3516041": "3970",
    "3516043": "3975",
    "3516045": "3945",
    "3516047": "3945",
    "3516049": "3945",
    "3516051": "3950",
    "3516053": "3970",
    "3516055": "3970",
    "3516057": "3955",
    "3516059": "3955",
    "3516061": "3945",
    "3516063": "3970",
    "3516065": "3960",
    "3516067": "3960",
    "3516069": "3945",
    "3516075": "3970",
    "3516077": "3970",
    "3516079": "3970",
    "3516081": "3970"
};
//if eExam.17 = 3517001 and 3517003
var eExam18_BilateralandLeft = {
    "3518001": "3985",
    "3518003": "3985",
    "3518005": "3990",
    "3518007": "3995",
    "3518009": "4000",
    "3518011": "4005",
    "3518013": "4010",
    "3518015": "4010",
    "3518017": "4015",
    "3518019": "4020",
    "3518021": "4020",
    "3518023": "4020",
    "3518025": "4020",
    "3518027": "4020",
    "3518029": "4020",
    "3518031": "4020",
    "3518033": "4020",
    "3518035": "4025",
    "3518037": "4025",
    "3518039": "3980",
    "3518041": "4025",
    "3518043": "4020",
    "3518045": "4020",
    "3518047": "4020",
    "3518049": "4020",
    "3518051": "4020",
    "3518053": "4020",
    "3518055": "4020",
    "3518057": "4020",
    "3518059": "4025"
};
var eExam18_BilateralandRight = {

    "3518001": "4035",
    "3518003": "4035",
    "3518005": "4040",
    "3518007": "4045",
    "3518009": "4050",
    "3518011": "4055",
    "3518013": "4060",
    "3518015": "4060",
    "3518017": "4075",
    "3518019": "4070",
    "3518021": "4070",
    "3518023": "4070",
    "3518025": "4070",
    "3518027": "4070",
    "3518029": "4070",
    "3518031": "4070",
    "3518033": "4070",
    "3518035": "4075",
    "3518037": "4075",
    "3518039": "4030",
    "3518041": "4075",
    "3518043": "4070",
    "3518045": "4070",
    "3518047": "4070",
    "3518049": "4070",
    "3518051": "4070",
    "3518053": "4070",
    "3518055": "4070",
    "3518057": "4070",
    "3518059": "4075"
};
var eExam19 = {
    "3519001": "4090",
    "3519003": "4095",
    "3519005": "4100",
    "3519007": "4080",
    "3519009": "4085",
    "3519011": "4105",
    "3519013": "4110",
    "3519015": "4110",
    "3519017": "4115",
    "3519019": "4120",
    "3519021": "4120"
};
var eExam20 = {
    "3520001": "4130",
    "3520003": "4155",
    "3520005": "4135",
    "3520007": "4125",
    "3520009": "4145",
    "3520011": "4145",
    "3520013": "4135",
    "3520015": "4125",
    "3520017": "4165",
    "3520019": "4170",
    "3520021": "4125",
    "3520023": "4130",
    "3520025": "4145",
    "3520027": "4150",
    "3520029": "4155",
    "3520031": "4170",
    "3520033": "4125",
    "3520035": "4125",
    "3520037": "4160",
    "3520039": "4140",
    "3520041": "4140",
    "3520043": "4165",
    "3520045": "4170",
    "3520047": "4130",
    "3520049": "4130"
};
var eHistory01 = {
    "3101001": "610",
    "3101003": "2600",
    "3101005": "2605",
    "3101007": "2610",
    "3101009": "2615",
    "3101011": "2620",
    "3101013": "2620",
    "3101015": "2620",
    "3101017": "2625",
    "3101019": "2600",
    "3101021": "2620",
    "3101023": "2630",
    "3101025": "2635",
    "3101027": "2640",
    "3101029": "2625"
};
var eHistory05 = {
    "3105001": "2660",
    "3105003": "2655",
    "3105005": "2670",
    "3105007": "2655",
    "3105009": "2650",
    "3105011": "2650"
};
var eHistory09 = {

    "3109001": "2705",
    "3109003": "2710",
    "3109005": "2715",
    "3109007": "2725"
};
var eHistory10 = {
    "9910001": "2730",
    "9910003": "",
    "9910005": "2735",
    "9910007": "2740",
    "9910009": "2745",
    "9910011": "2750",
    "9910013": "",
    "9910015": "",
    "9910017": "2755",
    "9910019": "2755",
    "9910021": "",
    "9910023": "",
    "9910025": "2760",
    "9910027": "",
    "9910029": "",
    "9910031": "2765",
    "9910033": "2765",
    "9910035": "",
    "9910037": "",
    "9910039": "",
    "9910041": "2770",
    "9910043": "2775",
    "9910045": "",
    "9910047": "",
    "9910049": "2780",
    "9910051": "2775"

};
var eHistory14 = {
    "3114001": "2785",
    "3114003": "2785",
    "3114005": "2855",
    "3114007": "2790",
    "3114009": "2795",
    "3114011": "2800",
    "3114013": "2805",
    "3114015": "2810",
    "3114017": "2815",
    "3114019": "2820",
    "3114021": "2825",
    "3114023": "2830",
    "3114025": "2830",
    "3114027": "2855",
    "3114029": "2835",
    "3114031": "2840",
    "3114033": "2840",
    "3114037": "2845",
    "3114039": "2850",
    "3114041": "2855",
    "3114043": "2860",
    "3114045": "2850",

};
var eHistory15 = {
    "9927001": "2975",
    "9927003": "2920",
    "9927005": "2865",
    "9927007": "2870",
    "9927009": "2875",
    "9927011": "2895",
    "9927013": "28980",
    "9927015": "2880",
    "9927019": "2890",
    "9927021": "-10",
    "9927023": "2895",
    "9927025": "2900",
    "9927027": "2910",
    "9927029": "2960",
    "9927031": "2935",
    "9927033": "2915",
    "9927035": "2920",
    "9927037": "2925",
    "9927039": "2930",
    "9927041": "2935",
    "9927043": "2940",
    "9927045": "2945",
    "9927047": "2950",
    "9927049": "2955",
    "9927051": "2960",
    "9927053": "2965",
    "9927055": "2970",
    "9927057": "2975",
    "9927059": "2980"
};
var eHistory16 = {
    "9923001": "0",
    "9923003": "1"
};
var eHistory17 = {
    "3117001": "3000",
    "3117003": "3000",
    "3117005": "2990",
    "3117007": "2995",
    "3117009": "2995",
    "3117011": "2985"
};
var eHistory18 = {
    "3118001": "0",
    "3118003": "-10",
    "3118005": "1",
    "3118007": "1",
    "3118009": "1",
    "3118011": "1"

};
var ePayment01 = {
    "2601001": "720",
    "2601003": "725",
    "2601005": "730",
    "2601007": "735",
    "2601009": "740",
    "2601011": "745",
    "2601013": "750",
    "2601015": "-10",
    "2601017": "745",
    "2601019": "740",
    "2601021": "745",
    "2601023": "-10",
};
var ePayment02 = {
    "9922001": "0",
    "9922003": "-10",
    "9922005": "1"
};
var ePayment11 = {
    "2611001": "765",
    "2611003": "755",
    "2611005": "760",
    "2611007": "765",
    "2611009": "765",
    "2611011": "765",
    "2611013": "765",
    "2611015": "765",
    "2611017": "765",
    "2611019": "765",
    "2611021": "765",
    "2611023": "765",
    "2611025": "-10"
};
var ePayment40 = {
    "2640001": "980",
    "2640003": "985"
};
var ePayment50 = {
    "2650001": "1000",
    "2650003": "1005",
    "2650005": "1010",
    "2650007": "990",
    "2650009": "995",
    "2650011": "1025",
    "2650013": "1015",
    "2650015": "1020",
    "2650017": "1030"
};
var ePayment52 = {
    "C1": "1035",
    "C2": "1036",
    "C3": "1039",
    "C4": "1038",
    "C5": "1039",
    "C6": "1037",
    "C7": "-10",
    "D1": "1041",
    "D2": "1043",
    "D3": "1043",
    "D4": "1044",
};
var eScene04 = {
    "1060": "2704001",
    "1065": "2704003",
    "1070": "2704007",
    "1075": "2704009",
    "1080": "2704015",
    "1085": "2704011",
    "1090": "2704017",
    "1095": "2704019"
};
var eScene09 = {
    "Y92.00": "1135",
    "Y92.01": "1135",
    "Y92.015": "1135",
    "Y92.016": "1135",
    "Y92.02": "1135",
    "Y92.03": "1135",
    "Y92.10": "1135",
    "Y92.7": "1140",
    "Y92.64": "1145",
    "Y92.61": "1150",
    "Y92.62": "1150",
    "Y92.63": "1150",
    "Y92.65": "1150",
    "Y92.69": "1150",
    "Y92.31": "1155",
    "Y92.32": "1155",
    "Y92.33": "1155",
    "Y92.34": "1155",
    "Y92.39": "1155",
    "Y92.82": "1155",
    "Y92.830": "1155",
    "Y92.831": "1155",
    "Y92.832": "1155",
    "Y92.833": "1155",
    "Y92.834": "1155",
    "Y92.838": "1155",
    "Y92.41": "1160",
    "Y92.48": "1160",
    "Y92.85": "1160",
    "Y92.12": "1165",
    "Y92.13": "1165",
    "Y92.14": "1165",
    "Y92.16": "1165",
    "Y92.210": "1165",
    "Y92.211": "1165",
    "Y92.212": "1165",
    "Y92.213": "1165",
    "Y92.214": "1165",
    "Y92.215": "1165",
    "Y92.219": "1165",
    "Y92.22": "1165",
    "Y92.24": "1165",
    "Y92.51": "1165",
    "Y92.52": "1165",
    "Y92.520": "1165",
    "Y92.24": "1170",
    "Y92.25": "1170",
    "Y92.26": "1170",
    "Y92.29": "1170",
    "Y92.51": "1170",
    "Y92.12": "1175",
    "Y92.13": "1175",
    "Y92.14": "1175",
    "Y92.23": "1175",
    "Y92.531": "1175",
    "Y92.532": "1175",
    "Y92.538": "1175"
};
var eSituation06 = {
    "2806001": "1235",
    "2806003": "1240",
    "2806005": "1245",
    "2806007": "1250",
    "2806009": "1255",
    "2806011": "1260",
    "2806013": "1265"
};
var eSituation07 = {
    "2807001": "1305",
    "2807003": "1310",
    "2807005": "1315",
    "2807007": "1320",
    "2807009": "1325",
    "2807011": "1330",
    "2807013": "1335",
    "2807015": "1340",
    "2807017": "1345"
};
var eSituation08 = {
    "2808003": "1350",
    "2808005": "1355",
    "2808007": "1360",
    "2808009": "1365",
    "2808011": "1370",
    "2808015": "1375",
    "2808017": "1380",
    "2808001": "1385",
    "2808019": "1390",
    "2808021": "1395"
};
var eSituation09 = {
    "R58": "1405",
    "N92.6": "1405",
    "N93.9": "1405",
    "O47": "1405",
    "R00.2": "1405",
    "R04.0": "1405",
    "R04.2": "1405",
    "R58": "1405",
    "R60.0": "1405",
    "R60.9": "1405",
    "R61": "1405",
    "R05": "1410",
    "R06.00": "1410",
    "R06.01": "1410",
    "R06.02": "1410",
    "R06.1": "1410",
    "R06.2": "1410",
    "R06.3": "1410",
    "R06.4": "1410",
    "R06.6": "1410",
    "R06.7": "1410",
    "R06.81": "1410",
    "R06.83": "1410",
    "R07.0": "1410",
    "R07.1": "1410",
    "R09.2": "1410",
    "R09.81": "1410",
    "R19.30": "1415",
    "R55": "1415",
    "R56.0": "1415",
    "R56.9": "1415",
    "R57.0": "1415",
    "R57.1": "1415",
    "R09.01": "1420",
    "R13.0": "1420",
    "R13.10": "1420",
    "R19.7": "1435",
    "R30.0": "1440",
    "R31": "1440",
    "R32": "1440",
    "R33.9": "1440",
    "R35.8": "1440",
    "R50.9": "1445",
    "H53.14": "1450",
    "R47.01": "1450",
    "R47.02": "1450",
    "R47.81": "1450",
    "R49.0": "1450",
    "R53.1": "1450",
    "R53.81": "1450",
    "R53.83": "1450",
    "R40.1": "1460",
    "R40.20": "1460",
    "R41.0": "1460",
    "R41.3": "1460",
    "R41.82": "1460",
    "R41.840": "1460",
    "R42": "1460",
    "R44.0": "1460",
    "R44.1": "1460",
    "R45.0": "1460",
    "R45.1": "1460",
    "R45.3": "1460",
    "R45.4": "1460",
    "R45.6": "1460",
    "R45.7": "1460",
    "R45.81": "1460",
    "R45.82": "1460",
    "R45.83": "1460",
    "R45.850": "1460",
    "R45.851": "1460",
    "R46.2": "1460",
    "R46.3": "1460",
    "R46.4": "1460",
    "H53.14": "1465",
    "K92.0": "1465",
    "R11.0": "1465",
    "R11.10": "1465",
    "R11.12": "1465",
    "R14.0": "1465",
    "R14.2": "1465",
    "R14.3": "1465",
    "R15": "1465",
    "R63.0": "1465",
    "R63.1": "1465",
    "R63.3": "1465",
    "R63.4": "1465",
    "R63.5": "1465",
    "R64": "1465",
    "R68.2": "1465",
    "G44.53": "1475",
    "H54.7": "1475",
    "H57.10": "1475",
    "H91.90": "1475",
    "H92.09": "1475",
    "J02": "1475",
    "K08.8": "1475",
    "K59.00": "1475",
    "N48.3": "1475",
    "N92.6": "1475",
    "R07.82": "1475",
    "R07.89": "1475",
    "R07.9": "1475",
    "R09.2": "1475",
    "R09.81": "1475",
    "R10.0": "1475",
    "R10.1": "1475",
    "R10.13": "1475",
    "R10.2": "1475",
    "R10.3": "1475",
    "R10.33": "1475",
    "R10.81": "1475",
    "R10.82": "1475",
    "R10.83": "1475",
    "R10.84": "1475",
    "R12": "1475",
    "R51": "1475",
    "R52": "1475",
    "R68.84": "1475",
    "L29.9": "1480",
    "L50": "1485",
    "R20.0": "1485",
    "R20.1": "1485",
    "R20.2": "1485",
    "R21": "1485",
    "R23.0": "1485",
    "R23.1": "1485",
    "R23.2": "1485",
    "R23.8": "1485",
    "R22": "1490",
    "E66.3": "1495",
    "G40.3": "1490",
    "G47.00": "1495",
    "G81": "1500",
    "G81.9": "1500",
    "G83.10": "1500",
    "R25.1": "1500",
    "R25.2": "1500",
    "R25.3": "1500",
    "R25.8": "1500",
    "R26.0": "1500",
    "R26.2": "1500",
    "R26.89": "1500",
    "R27.0": "1500",
    "R29.0": "1500",
    "R29.6": "1500",
    "R29.810": "1500",
    "R40.0": "1500"
};
var eOther01 =
    {
        "9923001": "0",
        "9923003": "1"
    };
var eOther02 = {
    "4502001": "5430",
    "4502003": "5395",
    "4502005": "5400",
    "4502007": "5405",
    "4502009": "5410",
    "4502011": "5430",
    "4502013": "5405",
    "4502015": "5430",
    "4502017": "5420",
    "4502019": "5425"
};
var eOther03 =
{
    "4503001": "5435",
    "4503003": "5440",
    "4503005": "5465",
    "4503007": "5445",
    "4503009": "5450",
    "4503011": "5455",
    "4503013": "5465",
    "4503015": "5460",
    "4503017": "5460",
    "4503019": "5465",
    "4503021": "5465",
    "4503023": "5465"
};
var eOther06 = {
    "4506001": "5580",
    "4506003": "5580",
    "4506005": "5580",
    "4506007": "5560",
    "4506009": "5540",
    "4506011": "5550",
    "4506013": "5545",
    "4506015": "5555",
    "4506017": "5565",
    "4506019": "5570",
    "4506021": "5560",
    "4506023": "5575",
    "4506021": "5575",
    "4506027": "5585",
    "4506029": "-10"
};
var eOther07 =
    {
        "4507001": "5470",
        "4507003": "5475",
        "4507005": "5480",
        "4507007": "5485",
        "4507009": "5490",
        "4507011": "5495",
        "4507013": "5500",
        "4507017": "5505",
        "4507019": "5510",
        "4507021": "5515",
        "4507023": "5520",
        "4507025": "5525",
        "4507027": "5530"
    };
var eSituation10 = {
    "R40.1": "1565",
    "R40.20": "1565",
    "R41.0": "1565",
    "R41.3": "1565",
    "R41.82": "1565",
    "R41.840": "1565",
    "R42": "1565",
    "R44.0": "1565",
    "R44.1": "1565",
    "R45.0": "1565",
    "R45.1": "1565",
    "R45.3": "1565",
    "R45.4": "1565",
    "R45.6": "1565",
    "R45.7": "1565",
    "R45.81": "1565",
    "R45.82": "1565",
    "R45.83": "1565",
    "R45.850": "1565",
    "R45.851": "1565",
    "R46.2": "1565",
    "R46.3": "1565",
    "R46.4": "1565",
    "H53.14": "1570",
    "R11.10": "1570",
    "R11.12": "1570",
    "R14.2": "1570",
    "R14.3": "1570",
    "R15": "1570",
    "R63.1": "1570",
    "R63.3": "1570",
    "R63.4": "1570",
    "R63.5": "1570",
    "R64": "1570",
    "K92.0": "1570",
    "R11.0": "1570",
    "R14.0": "1570",
    "R63.0": "1570",
    "R68.2": "1570",
    "R11.0": "1570",
};
var eMedication02 = {
    "9923001": "0",
    "9923003": "1"
};
var eMedication04 = {
    "9927001": "4185",
    "9927003": "4230",
    "9927005": "4175",
    "9927007": "4180",
    "9927009": "4185",
    "9927011": "4205",
    "9927013": "4205",
    "9927015": "4190",
    "9927017": "4210",
    "9927019": "4200",
    "9927021": "4191",
    "9927023": "4205",
    "9927025": "4210",
    "9927027": "4220",
    "9927029": "4220",
    "9927031": "4285",
    "9927033": "4225",
    "9927035": "4230",
    "9927037": "4235",
    "9927039": "4240",
    "9927041": "4245",
    "9927043": "4250",
    "9927045": "4255",
    "9927047": "4260",
    "9927049": "4265",
    "9927051": "4270",
    "9927053": "4275",
    "9927055": "4280",
    "9927057": "4285",
    "9927059": "4290"
};
var eMedications06 = {
    "3706001": "4295",
    "3706003": "4300",
    "3706005": "4305",
    "3706007": "4310",
    "3706009": "4320",
    "3706011": "4315",
    "3706013": "4370",
    "3706015": "4330",
    "3706017": "4335",
    "3706019": "4340",
    "3706021": "4345",
    "3706023": "4350",
    "3706025": "4355",
    "3706027": "4360",
    "3706029": "4365"

}
var eMedications07 = {
    "9916001": "4375",
    "9916003": "4380",
    "9916005": "4385"
};
var eMedications08 = {
    "3708001": "4395",
    "3708003": "4400",
    "3708005": "4405",
    "3708007": "4410",
    "3708009": "4465",
    "3708011": "4415",
    "3708013": "4420",
    "3708015": "4425",
    "3708017": "4430",
    "3708019": "4435",
    "3708021": "4460",
    "3708023": "4440",
    "3708025": "4445",
    "3708027": "4450",
    "3708029": "4455",
    "3708031": "4390",
    "3708033": "4460",
    "3708035": "4465",
    "3708037": "4470",
    "3708039": "4465",
    "3708041": "4475",
    "3708043": "4450",
    "3708045": "4450"
};
var eMedications11 = {
    "9918001": "4480",
    "9918003": "4485",
    "9918005": "4490",
    "9918007": "4495"
};
var eOutcome01 =
{
    "01": "5355",
    "02": "5360",
    "03": "5360",
    "04": "5340",
    "05	": "5360",
    "06": "5360",
    "07": "5350",
    "09": "5335",
    "20": "5345",
    "21": "5360",
    "30": "5360",
    "43": "5360",
    "50": "5360",
    "51": "5360",
    "61": "5360",
    "62": "5360",
    "63": "5360",
    "64": "5360",
    "65": "5360",
    "66": "5360",
    "70": "5360"
};
var eOutcome02 =
{
    "01": "5385",
    "02": "5375",
    "03": "5380",
    "04": "5390",
    "05": "5385",
    "06": "5390",
    "07": "5370",
    "20": "5365",
    "21": "5385",
    "30": "5360",
    "43": "5380",
    "50": "5380",
    "51": "5375",
    "61": "5390",
    "62": "5390",
    "63": "5390",
    "64": "5380",
    "65": "5375",
    "66": "5375",
    "70": "5385"
};
var ePatient13 = {
    "9906003": "650",
    "9906001": "655"
};
var ePatient14 = {
    "2514001": "660",
    "2514003": "665",
    "2514005": "670",
    "2514007": "685",
    "2514009": "675",
    "2514011": "680"
};
var ePatient16 = {
    "2516003": "700",
    "2516001": "705",
    "2516007": "710",
    "2516009": "715"
};
var eProcedures07 =
{
    "3907001": "4505",
    "3907003": "4510",
    "3907005": "4515",
    "3907007": "4520",
    "3907009": "4525",
    "3907011": "4530",
    "3907013": "4535",
    "3907015": "4540",
    "3907017": "4545",
    "3907019": "4550",
    "3907021": "4555",
    "3907023": "4580",
    "3907025": "4560",
    "3907027": "4565",
    "3907029": "4570",
    "3907031": "4575",
    "3907033": "4500",
    "3907035": "4580",
    "3907037": "4580",
    "3907039": "4585",
    "3907041": "4590",
    "3907043": "4580",
    "3907045": "4595",
    "3907047": "4520"
};
var eProcedures08 = {
    "9916001": "4600",
    "9916003": "4605",
    "9916005": "4610"
};
var eProcedures11 = {
    "9918003": "4615",
    "9918003": "4620",
    "9918005": "4625",
    "9918007": "4630"
}
var eProcedures13 = {
    "3913001": "4635",
    "3913003": "4640",
    "3913005": "4645",
    "3913007": "4650",
    "3913009": "4655",
    "3913033": "4660",
    "3913011": "4665",
    "3913035": "4670",
    "3913017": "4675",
    "3913019": "4680",
    "3913021": "4685",
    "3913023": "4690",
    "3913051": "4695",
    "3913053": "4700",
    "3913057": "4705",
    "3913059": "4710",
    "3913043": "4715",
    "3913047": "4720",
    "3913049": "4725",
    "3913065": "4730"
};
var eProtocols01 = {
    "9914001": "6730",
    "9914003": "6740",
    "9914005": "6730",
    "9914007": "6760",
    "9914009": "6730",
    "9914011": "6850",
    "9914013": "6850",
    "9914015": "6850",
    "9914017": "6850",
    "9914019": "7130",
    "9914021": "6785",
    "9914023": "6875",
    "9914025": "6875",
    "9914027": "6980",
    "9914029": "6960",
    "9914031": "6980",
    "9914033": "6911",
    "9914035": "6911",
    "9914037": "6913",
    "9914039": "6911",
    "9914041": "6925",
    "9914043": "6914",
    "9914045": "6920",
    "9914047": "6915",
    "9914049": "6916",
    "9914051": "6800",
    "9914053": "6810",
    "9914055": "6850",
    "9914057": "6880",
    "9914059": "6910",
    "9914061": "6930",
    "9914063": "7220",
    "9914065": "6881",
    "9914067": "6990",
    "9914069": "6881",
    "9914071": "7040",
    "9914073": "7180",
    "9914075": "7220",
    "9914077": "7215",
    "9914079": "6820",
    "9914081": "6820",
    "9914083": "7000",
    "9914085": "6840",
    "9914087": "6850",
    "9914089": "7000",
    "9914091": "6892",
    "9914093": "6890",
    "9914095": "6900",
    "9914097": "6920",
    "9914099": "6925",
    "9914101": "6940",
    "9914103": "7000",
    "9914105": "7000",
    "9914107": "7175",
    "9914109": "6720",
    "9914111": "6770",
    "9914113": "6780",
    "9914115": "6830",
    "9914117": "6860",
    "9914119": "6885",
    "9914121": "6945",
    "9914123": "6950",
    "9914125": "6965",
    "9914127": "6970",
    "9914129": "7160",
    "9914131": "7251",
    "9914133": "7010",
    "9914135": "7030",
    "9914137": "7140",
    "9914139": "7160",
    "9914141": "7170",
    "9914143": "7200",
    "9914145": "7200",
    "9914147": "6791",
    "9914149": "7210",
    "9914151": "7240",
    "9914153": "7040",
    "9914155": "6935",
    "9914157": "7020",
    "9914159": "6935",
    "9914161": "6935",
    "9914163": "7020",
    "9914165": "7040",
    "9914167": "6911",
    "9914169": "6850",
    "9914171": "6850",
    "9914173": "6911",
    "9914175": "7220",
    "9914177": "7220",
    "9914179": "7220",
    "9914181": "7220",
    "9914183": "7220",
    "9914185": "7220",
    "9914187": "6810",
    "9914189": "7040",
    "9914191": "7220",
    "9914193": "7000",
    "9914195": "6945",
    "9914197": "7220",
    "9914199": "7240"
};
eVitals02 = {
    "9923001": "0",
    "9923003": "1"
};
eVitals03 = {
    "9901001": "3020",
    "9901003": "3030",
    "9901005": "3025",
    "9901007": "3035",
    "9901009": "3035",
    "9901011": "3040",
    "9901013": "3045",
    "9901015": "3050",
    "9901017": "3055",
    "9901019": "3060",
    "9901021": "3065",
    "9901023": "3005",
    "9901025": "3010",
    "9901027": "3015",
    "9901029": "3015",
    "9901031": "3075",
    "9901033": "3080",
    "9901035": "3085",
    "9901037": "3090",
    "9901039": "3095",
    "9901041": "3100",
    "9901043": "3105",
    "9901045": "3110",
    "9901047": "3070",
    "9901049": "3115",
    "9901051": "3115",
    "9901053": "3115",
    "9901055": "3115",
    "9901057": "3115",
    "9901059": "3120",
    "9901061": "3125",
    "9901063": "3130",
    "9901065": "3135",
    "9901067": "3140",
    "9901069": "3145",
    "9901071": "3145"

};
eVitals08 = {
    "3308001": "3150",
    "3308003": "3150",
    "3308005": "3155",
    "3308007": "3160",
    "3308009": "3165",
    "3308011": "3170"
};
eVitals13 = {
    "3313001": "3180",
    "3313003": "3175",
    "3313005": "-10"
};


eVitals15 = {
    "3315001": "3195",
    "3315003": "3190",
    "3315005": "3200",
    "3315007": "3185",
    "3315009": "3190",
    "3315011": "3195",
    "3315013": "3195"
};
eVitals19 = {
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4"
};
eVitals20 = {
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5"
};
eVitals21 = {
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6"
};
eVitals22 = {
    "3322001": "-5",
    "3322003": "3210",
    "3322005": "3225",
    "3322007": "3215",
    "3322009": "3220"
};
eVitals25 = {
    "3325001": "3230",
    "3325003": "3230",
    "3325005": "3230",
    "3325007": "3235",
    "3325009": "3240",
    "3325011": "3245",
    "3325013": "3245",
    "3325015": "3250",
    "3325017": "3230",
};
eVitals26 = {
    "3326001": "3255",
    "3326003": "3260",
    "3326005": "3265",
    "3326007": "3270"
};
eVitals29 = {
    "3329001": "3275",
    "3329003": "3280",
    "3329005": "3285"
};
eVitals31 = {
    "3331001": "3305",
    "3331003": "3310",
    "3331005": "3315"
};

eProcedures14  ={
    "4004001":"4735",
    "4004003":"4750",
    "4004005":"4740",
    "4004007":"4740",
    "4004009":"4745",
    "4004011":"4765",
    "4004013":"4735",
    "4004015":"-10",
    "4004017":"4765",
    "4004019":"4770"
};
*/
var genBill = function (ThePCR) {

    //https://d1tpfj3hind0fx.cloudfront.net/Media/Documents/5010/5010_837P_Professional.pdf?_sm_au_=iVVN0sjtSRvstnt5
    //http://emrpms.blogspot.in/2012/09/edi-5010-documentation837-gs-functional.html
    //////////////////////////////
    /*   Interchange Control Header
    //   The interchange control header is the only fixed-length field in the transaction. 
    //ISA01 - Authorization Information Qualifier
    ISA02 - Authorization Information
    ISA03 - Security Information Qualifier
    ISA04 - Security Information (Password)
    ISA05 - Interchange ID Qualifier
    ISA06 - Interchange Sender ID
    ISA07 - Interchange ID Qualifier
    ISA08 - Interchange Receiver ID
    ISA09 - Submission Date
    ISA10 - Submission Time
    ISA11 - Interchange Control Standards Identifier (4010); Repetition Separator (5010)
    ISA12 - Interchange Control Version Number
    ISA13 - Interchange Control Number
    ISA14 - Acknowledgement Requested
    ISA15 - Usage Indicator (Test/Prod)
    ISA16 - Component Element Separator
    */
    //ISA Segment
    var InterchangeSenderID = "CHBU01619"
    var InterchangeReceiverID = "431420764000000"
    var InterchangeDate = "YYMMDD"
    var InterchangeTime = "HHMM"
    var InterchangeControlNumber = 0; //++ with each file

    var ISA01 = "ISA*00*";              //REQUIRED  00= No Auth present, 03 = Additional
    var ISA02 = "          ";           //REQUIRED  Additional Info - 10 spaces
    var ISA03 = "*00*";                 //REQUIRED  Security Info.  00=None, 01= PW
    var ISA04 = "          ";           //REQUIRED  Secutiry info - 10 spaces
    var ISA05 = "*ZZ*";                 //REQUIRED  Interchange ID
    var ISA06 = InterchangeSenderID;    //REQUIRED  
    var ISA07 = "*ZZ*";                 //REQUIRED  Interchange ID Qualifier
    var ISA08 = InterchangeReceiverID;  //REQUIRED  
    var ISA09 = InterchangeDate;        //REQUIRED  
    var ISA10 = InterchangeTime;        //REQUIRED  
    var ISA11 = "*^";                   //REQUIRED  Repetition Separator
    var ISA12 = "00501*";               //REQUIRED  Interchange Control Version
    var ISA13 = InterchangeControlNumber;   //REQUIRED  
    var ISA14 = "*1*;"                  //REQUIRED  Acknowledgment Request
    var ISA15 = "P*";                   //REQUIRED  Usage indicator.  P=Productions, T-Test
    var ISA16 = ":"                     //REQUIRED  Component Element Separator

    var ISASegment = '';
    ISASegment = ISA01 + ISA02 + ISA03 + ISA04 + ISA05 + ISA06 + ISA05 + ISA08 + ISA09 + ISA10 + ISA11 + ISA12 + ISA13 + ISA14 + ISA15 + ISA16 + "~";

    /*
    GS Segment - FUNCTION GROUP HEADER
    GS01 - Functional Identifier Code
    GS02 - Application Sender's Code
    GS03 - Application Receiver's Code
    GS04 - Date
    GS05 - Time
    GS06 - Group Control Number
    GS07 - Responsible Agency Code
    GS08 - Version / Release / Industry Identifier Code
     */
    var AppSenderCode = "CHBU01619"
    var AppReceiverCode = "431420764";
    var CreateDate = "CCYYMMDD";
    var CreateTime = "HHMM";
    var GroupControlNumber = 0; //++


    var GS = "GS";                              //GS Separator
    var GS01 = "*HC*";                          //REQUIRED  Function ID Code
    var GS02 = AppSenderCode;                   //REQUIRED  
    var GS03 = "*" + AppReceiverCode + "*";     //REQUIRED  Application Receiver Code
    var GS04 = CreateDate;                      //REQUIRED  
    var GS05 = "*" + CreateTime + "*";          //REQUIRED  
    var GS06 = GroupControlNumber;              //REQUIRED  
    var GS07 = "*X*";                           //REQUIRED  Responsible Agency Code
    var GS08 = "005010X222A1";                  //REQUIRED  Version/Release/IndustyID
    var GSSegment = "";
    var GSSegment = GS + GS01 + GS02 + GS03 + GS04 + GS05 + GS06 + GS07 + GS08 + "~";


    //ST Segment - Transaction Set GROUP HEADER - MANDATORY

    var TransactionControlNumber = 0;  //++
    var ST = "ST"
    var ST01 = "*837*";                 //REQUIRED  Transaction ID Code
    var ST02 = GS06                     //REQUIRED  Transaction Control Number  WE NEED TO GEN THIS
    var ST03 = "*" + GS08;             //REQUIRED  Implementation Convention Reference

    var STSegment = '';
    var STSegment = ST + ST01 + ST02 + ST03 + "~";

    //BHT Segment - BEGINNING HIERARCHICAL TRANSACTION - MANDATORY
    var BHT = "BHT";
    var BHT01 = "*0019*";                   //REQUIRED  Hierarchical Structure Code
    var BHT02 = "00";                       //REQUIRED  Trans Set Purpose Code, 00=Original.  18 = Reisuue
    var BHT03 = InterchangeControlNumber;   //REQUIRED  Reference ID
    var BHT04 = "*" + CreateDate + "*";     //REQUIRED  
    var BHT05 = CreateTime;                 //REQUIRED  
    var BHT06 = "*CH";                      //REQUIRED  Trans Type Code.  31=Subrogation Demand, CH=Chargeable, RP=Reporting;
    var BHTSegment = "";
    BHTSegment = BHT + BHT01 + BHT02 + BHT03 + BHT04 + BHT05 + BHT06 + "~";
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    ////////////////////////    1000A SUBMITTER Loop///////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    //1000A SUBMITTER Loop
    //NM1 Segment - OPTIONAL
    var submOrgName = "Med Stat Revenue Recorvery"
    var submNM1 = "NM1";
    var submNM101 = "*41*"                  //REQUIRED  Entity ID Code.  41=Submitter
    var submNM102 = "2"                     //REQUIRED  Entity Type.  1=Person, 2=NonPerson
    var submNM103 = "*" + submOrgName;      //REQUIRED  
    var submNM104 = "*"                     //SITUATIONAL Organization First Name (blank)
    var submNM105 = "*";                    //SITUATIONAL Organization Middle Name (blank)
    var submNM106 = "*";                    //Prefix (blank)
    var submNM107 = "*";                    //Suffix (blank)
    var submNM108 = "46*";                  //ID Code Qualifier 46=Electronic Transmitter
    var submNM109 = InterchangeSenderID;    //REQUIRED  ID Code

    submNMSegment = submNM1 + submNM101 + submNM102 + submNM103 + submNM104 + submNM105 + submNM106 + submNM107 + submNM108 + submNM109 + "~";

    //PER EDI Contact Info MAX 2.  OPTIONAL
    var ContactName = "Christoper Alvaro"           //REQUIRED
    var Comm1 = "TE";                               //SITUATIONAL
    var Comm2 = "";                                 //REQUIRED
    var Comm3 = "";
    var ContactPhone1 = "5182357670"
    var ContactPhone2 = ""
    var ContactPhone3 = ""
    var SubmitterContact = "";

    var PER = "PER"
    var PER01 = "*IC*"                      //REQUIRED  Information Contact
    var PER02 = ContactName;                //SITUATIONAL:   Required when the contact name is different than the name contained in the Submitter 
    //Name (NM1) segment of this loop AND
    //it is the first iteration of the Submitter EDI Contact Information (PER) segment. If not required by this 
    //implementation guide, do not send. 
    var PER03 = "*" + Comm1 + "*";              //REQUIRED  Communication Number Qualifer ED=Electronic, EM=Email, FX=Fax, TE=Phone
    var PER04 = ContactPhone1;              //REQUIRED  Communication Number
    var PER05 = "*+Comm2+*";                //SITUATIONAL
    var PER06 = ContactPhone2;              //SITUATIONAL
    var PER07 = "*+Comm3+*";                //SITUATIONAL
    var PER08 = ContactPhone3;              //SITUATIONAL



    var ContactPer = "";
    ContactPer = PER + PER01 + PER02 + PER03 + PER04 + PER05 + PER06 + PER07 + PER08 + "~"
    //END SUBMITTER 1000A Loop
    ///////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////
    //                              1000B:  RECEIVER NAME LOOP  
    //NM1 Segment OPTIONTAL MAX:1
    var rcvrOrgName = "Gateway EDI"
    var rcvrIDCode = "431420764";

    var rcvrNM1 = "~NM1";
    var rcvrNM101 = "*40*"                      //REQUIRED  Entity ID Code.  41=rcvritter
    var rcvrNM102 = "2"                         //REQUIRED Entity Type.  1=Person, 2=NonPerson
    var rcvrNM103 = "*" + rcvrOrgName;          //REQUIRED 
    var rcvrNM104 = "*"                         //First Name (blank)
    var rcvrNM105 = "*";                        //Middle Name (blank)
    var rcvrNM106 = "*";                        //Prefix (blank)
    var rcvrNM107 = "*";                        //Suffix (blank)
    var rcvrNM108 = "46*";                      //REQUIRED ID Code Qualifier 46=Electronic Transmitter
    var rcvrNM109 = rcvrIDCode;                //REQUIRED ID Code

    var rcvrNM = ""
    rcvrNM = rcvrNM1 + rcvrNM101 + rcvrNM102 + rcvrNM103 + rcvrNM104 + rcvrNM105 + rcvrNM106 + rcvrNM107 + rcvrNM108 + rcvrNM109 + "~";
    //                                  END 1000B:  RECEIVER NAME LOOP  
    /////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////////
    //                                          2000A loop   
    /////////////////////////////////////////////////////////////////
    //A unique number assigned by the sender to identify a particular data segment in a hierarchical structure.
    //HL01 shall contain a unique alphanumeric number for each occurrence  of the HL segment in the transaction 
    //set. For example, HL01 could be used to indicate the number of occurrences of the HL segment, in which 
    //case the value of HL01 would be �1" for the initial HL segment and would be incremented by one in each 
    //subsequent HL segment within the transaction. HL01 must begin with �1" and be incremented by one each time an HL 
    //is used in the transaction. Only numeric values are allowed in HL01.


    //For Examp;e, For the first Claim, Start the counter as 1. For the subsequent claims, increase the 
    //counter and print that value.
    //HL  Billy/Pay-To Provider  MANDATORY Max:1
    var HLIDNumber = 1;
    var HL = "HL*"
    var HL01 = HLIDNumber;                      //REQUIRED ++ for each service provider
    var HL02 //(not used)
    var HL03 = "20";                            //REQUIRED  Hierarchical Level Code.  20=Information Source
    var HL04 = "*1*~";                          //REQUIRED  Addition Subordinate HL data segment in this structure
    var BillToHL = "";

    BillToHL = HL + HL01 + HL02 + HL03 + HL04 + "~";

    //PRV Billing-to Provider Specialty Information OPTIONAL Max:1
    var providerTaxonomyCode = "341600000X";
    var PRV = "PRV*";
    var PRV01 = "BI*";                      //REQUIRED Provider Code
    var PRV02 = "PXC*";                     //REQUIRED Reference Identification Qualifier
    var PRV03 = providerTaxonomyCode;        //REQUIRED 
    var BillingtoProviderSpecialtyInformation = PRV + PRV01 + PRV02 + PRV03 + "~";
    //                      END 2000A loop   HL  Billy/Pay-To Provider 
    /////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////
    //                      2010AA loop     
    /////////////////////////////////////////////////////////////////
    // NM1 Billing Pay-To Provider 
    var billprOrgName = "Johnstown Area Volunteer Ambulance Corps"
    var billprIDCode = "1235129628";

    var billprNM1 = "~NM1";
    var billprNM101 = "*85*"                    //REQUIRED Entity ID Code.  41=Billing Provider
    var billprNM102 = "2"                       //REQUIRED Entity Type.  1=Person, 2=NonPerson
    var billprNM103 = "*" + billprOrgName;      //REQUIRED 
    var billprNM104 = "*"                       //REQUIRED First Name (blank)
    var billprNM105 = "*";                      //SITUATIONAL Middle Name (blank)
    var billprNM106 = "*";                      //SITUATIONAL Prefix (blank)
    var billprNM107 = "*";                      //SITUATIONAL Suffix (blank)
    var billprNM108 = "XX*";                    //SITUATIONAL ID Code Qualifier XX=NPI  
    //HIPAA National Provider Identifier (NPI) implementation date when the provider 
    //is eligible to receive an    NPI. 
    //OR   Required for providers not in the United States or its territories on or after the mandated HIPAA National 
    //Provider Identifier (NPI) implementation date when the provider has received an NPI. 
    //OR     Required for providers prior to the mandated NPI implementation date when the provider has received an 
    //NPI and the submitter has the capability to send it. 
    //If not required by this implementation guide, do not send. 
    var billprNM109 = billprIDCode;             //SITUATIONALMeidcaire/Medaide ID Code    


    var BillingProviderNM = ""
    BillingProviderNM = billprNM1 + billprNM101 + billprNM102 + billprNM103 + billprNM104 + billprNM105 + billprNM106 + billprNM107 + billprNM108

    //N3  Billing Provider Address    OPTIONAL  Max:1

    //According to HIPAA 5010, a Loop 2010AA Billing Provider Address must not contain the following exact 
    //phrases: �Post Office Box�, �P.O. BOX�, �PO BOX�, �LOCK BOX�, �LOCK BIN� or �P O BOX�. The Loop 2010AA 
    //Billing Provider Address must be a physical address. This rule applies to dental, professional, and 
    //institutional claims. But the paper 1500 form is not subject to HIPAA compliance restrictions.

    var billprAddress1 = "231 NORTH PERRY STREET"
    var billprAddress2 = "";
    var billprN3 = "N3*";
    var billprN301 = billprAddress1;                //REQUIRED
    var billprN302 = billprAddress2;

    var billPayerAddress = "";
    billPayerAddress = billprN3 + billprN301 + billprN302 + "~"

    //N4  Billing Provider Address, CSV  OPTIONAL, MAX:1

    var billprCity = "JohnsTown"
    var billprState = "NY"
    var billprZip = "120951216"

    var billprN4 = "N4*";
    var billprN401 = billprCity;                        //REQUIRED
    var billprN402 = "*" + billprState + "*";               //REQUIRED
    var billprN403 = billprZip;                         //REQUIRED
    var billPayerCSZ = "";
    billPayerCSZ = billprN4 + billprN401 + billprN402 + billprN403 + "~";

    //REF  Billing Provier Tax ID  OPTIONAL Max:1

    var BillingProvierTaxID = "237133151";
    var REF = "REF*"
    var REF01 = "EI*";               //Reference ID.  no idea what "EI" refers to
    var REF02 = BillingProvierTaxID;
    var BillingProvierTaxInfo = REF + REF01 + REF02 + "~";
    ////////////////////////////    END 2000A       ////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    //////////////////////////      LOOP 2000B      ////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    //HL  Subscriber Hierarchical Level     MANDATORY Max:1
    var HLHigherId = 1;  //++

    var sbscHL = "HL*";
    var sbscHL01 = HLIDNumber;                      //REQUIRED
    var sbscHL02 = HLHigherId;                      //REQUIRED
    var sbscHL03 = "*22*";                          //REQUIRED  22=Subscriber
    var sbscHL04 = "0";                             //REQUIRED Hierachical Child Code
    var SubscriberHierarchicalLevel = "";
    SubscriberHierarchicalLevel = sbscHL + sbscHL01 + sbscHL02 + sbscHL03 + sbscHL04 + "~";

    //Subscriber Info               OPTIONAL Max:1
    var sbrPayerResponsibilityCode = "P";
    var sbrPatientID = 1;                           //++
    var ClaimFileIndicator = "MB";                  //Insurance Type

    var SBR = "SBR*";
    var SBR01 = sbrPayerResponsibilityCode;          //SITUATIONAL //P=Primary, S=Secondary, T=Tertiary
    var SBR02 = "*" + sbrPatientID + "*";               //SITUATIONAL 
    var SBR03 = "18";                               //SITUATIONAL relatioship code.  18=self
    var SBR04 = "*";                               //SITUATIONAL - required when SBR03 Not used
    var SBR05 = "*"                                 //SITUATIONAL  2000B SBR05 is required when Medicare is the destination payer but not the primary payer i.e Medicare would be the second or third payer. We should capture this field either in the Patient Insurance Policy information or at the claim level.
    var SBR06 = "*"                                 //SITUATIONAL 
    var SBR07 = "*"                                  //SITUATIONAL 
    var SBR08 = "*"                                  //SITUATIONAL 
    var SBR09 = ClaimFileIndicator;                 //SITUATIONAL 

    var Subscriber = "";
    Subscriber = SBR01 + SBR02 + SBR03 + SBR04 + SBR05 + SBR06 + SBR07 + SBR08 + SBR09 + "~"

    //////////////////////////////////END LOOP 2000B
    ////////////////////////////////////////////////////////////////////////////////
    //////////////////////////      LOOP 2000BA      ///////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    //NM1 Segment - RECEIVER LOOP
    var subscriberLastName = "Last"
    var subscriberFirstName = "First"
    var subscriberMiddleName = "Middle"
    var subscriberIDCode = "431420764";
    var InsuranceID = "MedicareID"


    var subscriberNM1 = "NM1";
    var subscriberNM101 = "*IL*"                        //REQUIRED  Entity ID Code.  IL= Insured orsubscriber
    var subscriberNM102 = "1"                           //REQUIRED Entity Type.  1=Person, 2=NonPerson
    var subscriberNM103 = "*" + subscriberLastName;     //REQUIRED 
    var subscriberNM104 = "*" + subscriberFirstName;    //SITUATIONAL
    var subscriberNM105 = "*" + subscriberMiddleName;   //SITUATIONAL Middle Name (blank)
    var subscriberNM106 = "*";                          //SITUATIONAL Prefix (blank)
    var subscriberNM107 = "*";                          //SITUATIONAL Suffix (blank)
    var subscriberNM108 = "MI*";                        //SITUATIONAL ID Code Qualifier MI= Member ID Number
    var subscriberNM109 = InsuranceID;                  //SITUATIONALID Code  REQUIRED wht NB102=1    
    var SubscriberName = "";
    SubscriberName = subscriberNM1 + subscriberNM101 + subscriberNM102 + subscriberNM103 + subscriberNM104 + subscriberNM105 + subscriberNM105 + subscriberNM107 + subscriberNM108 + subscriberNM109 + "~";

    //N3 Subscriber Address    
    var subscriberAddress1 = "Patient Address1";
    var subscriberAddress2 = "Patient Address2"

    var subscriberN3 = "N3*";
    var subscriberN301 = subscriberAddress1;            //REQUIRED
    var subscriberN302 = subscriberAddress2;            //SITUATIONAL    
    var subscriberAddress = ""
    subscriberAddress = subscriberN3 + subscriberN301 + subscriberN302 + "~";

    //N3subscriber CSZ    
    var subscriberCity = "City"
    var subscriberState = "State"
    var subscriberZip = "Zip"
    var subscriberN4 = "N4*";
    var subscriberN401 = subscriberCity + "*";          //REQUIRED When address in US
    var subscriberN402 = subscriberState + "*";         //REQUIRED When address in US
    var subscriberN403 = subscriberZip;                 //REQUIRED When address in US
    var subscriberCSZ = ""
    subscriberCSZ = subscriberN4 + subscriberN401 + subscriberN402 + subscriberN403 + "~";

    //DMG SUBSCIBER DEMOGRAPHICS
    var subscriberDOB = "CCYYMMDD";
    var subscriberGender = "M"; //F, U
    var DMG = "DMG*";
    var DMG01 = "D8*";                                  //REQUIRED  Datetime qualifier
    var DMG02 = subscriberDOB;                          //REQUIRED  
    var DMG03 = subscriberGender;                       //REQUIRED  
    var subscriberDEM = ""
    subscriberDEM = DMG + DMG01 + DMG02 + DMG03 + "~";

    //Subscriber Secondary info
    var subscriberID = "SSN";
    var subscriberRef = "REF*";
    var subscriberREF01 = "SY*";
    var subscriberREF02 = subscriberID;
    var subscriberSecondary = "";
    subscriberSecondary = subscriberRef + subscriberREF01 + subscriberREF02 + "~";

    //////////////////////////////////////////////////////////////////////////
    //////////                      END LOOP
    ////////////////////////////    2010BB  PAYER LOOP  ///////////////////////
    //NM1 Segment -                                    
    var payerLastName = "Medicare Upstate NY"
    var payerFirstName = "First"
    var payerMiddleName = "Middle"
    var PayerID = "13282"

    var payerNM1 = "NM1";
    var payerNM101 = "*PR*"                         //REQUIRED Entity ID Code.  PR= Payer
    var payerNM102 = "2"                            //REQUIREDEntity Type.  1=Person, 2=NonPerson
    var payerNM103 = "*" + payerLastName;           //REQUIRED
    var payerNM104 = "*";
    var payerNM105 = "*";                           //Middle Name (blank)
    var payerNM106 = "*";                           //Prefix (blank)
    var payerNM107 = "*";                           //Suffix (blank)
    var payerNM108 = "PI*";                         //REQUIRED ID Code Qualifier 46=Electronic Transmitter
    var payerNM109 = PayerID;                       //REQUIRED ID Code
    var PayerName = ""
    PayerName = payerNM1 + payerNM101 + payerNM102 + payerNM103 + payerNM104
        + payerNM105 + payerNM106 + payerNM107 + payerNM108 + payerNM109 + "~";


    //N3PayerAddress

    var payerAddress1 = "Payer Address1"
    var payerAddress2 = "Payer Address1"
    var payerN3 = "N3*";
    var payerN301 = payerAddress1;                  //REQUIRED
    var payerN302 = payerAddress2;                  //SITUATIONAL
    var payerAddress = payerN3 + payerN301 + payerN302 + "~";
    ///////
    //N3payer CSZ

    var payerCity = "City"
    var payerState = "State"
    var payerZip = "Zip"
    var payerN4 = "N4*";
    var payerN401 = payerCity + "*";                //REQUIRED
    var payerN402 = payerState + "*";               //REQUIRED
    var payerN403 = payerZip;                       //REQUIRED
    var payerCSZ = payerN4 + payerN401 + payerN402 + payerN403 + "~";

    /////////////////////////////////////////////////////////////////////////////////////
    //                               2000C      //////////////////////////////////////
    //Required when the patient is a dependent of the subscriber identified in
    //Loop ID-2000B and cannot be uniquely identified to the payer using the
    //subscriber�s identifier in the Subscriber Level.
    //Add Data can be taken from previous Patient Demographics
    var CHLIDNumber = 1;
    var CHL = "HL*"
    var CHL01 = HLIDNumber;                      //REQUIRED ++ for each service provider
    var CHL02 //(not used)
    var CHL03 = "23";                            //REQUIRED  Hierarchical Level Code.  20=Information Source
    var CHL04 = "*0*~";                          //REQUIRED  Addition Subordinate HL data segment in this structure
    var CBillToHL = "";

    CBillToHL = CHL + CHL01 + CHL02 + CHL03 + CHL04 + "~";
    var RelationShipCode = "01"             //SPOUSE
    var DateTimePeriod = "CC/MM/DD"        //D8 if deceased
    var UnitorBasisforMeasurementCode = "21"
    var Weight = "210";
    var YesNoCondition = "Y";

    var CPAT = "PAT*"
    var CPAT01 = "PAT*"
    var CPAT02 = RelationShipCode + "*";             //REQUIRED
    var CPAT05 = DateTimePeriod + "*";                //SITUATIONAL
    var CPAT06 = DateTimePeriod + "*";                //SITUATIONAL Death date if patient deceased
    var CPAT07 = UnitorBasisforMeasurementCode + "*";   //SITUATIONAL GR � Required when the patient� age is less than 29 days old.     
    var CPAT08 = Weight + "*";                        //SITUATIONAL Required when patient�s age is less than 29 days old.
    var CPAT09 = YesNoCondition;                    //OPTIONAL Y if pregnant

    //NM1 Segment -                                    
    var CLastName = "Medicare Upstate NY"
    var CFirstName = "First"
    var CMiddleName = "Middle"
    var CID = "13282"

    var CNM1 = "NM1";
    var CNM101 = "*PR*"                         //REQUIRED Entity ID Code.  PR= C
    var CNM102 = "2"                            //REQUIREDEntity Type.  1=Person, 2=NonPerson
    var CNM103 = "*" + CLastName;           //REQUIRED
    var CNM104 = "*";
    var CNM105 = "*";                           //Middle Name (blank)
    var CNM106 = "*";                           //Prefix (blank)
    var CNM107 = "*";                           //Suffix (blank)
    var CNM108 = "PI*";                         //REQUIRED ID Code Qualifier 46=Electronic Transmitter
    var CNM109 = CID;                       //REQUIRED ID Code
    var CName = ""
    CName = CNM1 + CNM101 + CNM102 + CNM103 + CNM104
        + CNM105 + CNM106 + CNM107 + CNM108 + CNM109 + "~";


    //N3PayerAddress

    var CAddress1 = "C Address1"
    var CAddress2 = "C Address1"
    var CN3 = "N3*";
    var CN301 = CAddress1;                  //REQUIRED
    var CN302 = CAddress2;                  //SITUATIONAL
    var CAddress = CN3 + CN301 + CN302 + "~";
    //N3C CSZ

    var CCity = "City"
    var CState = "State"
    var CZip = "Zip"
    var CN4 = "N4*";
    var CN401 = CCity + "*";                //REQUIRED
    var CN402 = CState + "*";               //REQUIRED
    var CN403 = CZip;                       //REQUIRED
    var CCSZ = CN4 + CN401 + CN402 + CN403 + "~";

    //DMG Patient DEMOGRAPHICS
    var patientDOB = "CCYYMMDD";
    var patientGender = "M"; //F, U
    var DMG = "DMG*";
    var DMG01 = "D8*";              //Datetime qualifier
    var DMG02 = patientDOB;
    var DMG03 = patientGender;
    var patientDem = "";
    patientDem = DMG + DMG01 + DMG02 + DMG03 + "~";

    ////////////////////////////////////////////////////////////////////////
    /////////////////////////2300 Claim Loop////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
    var patientAccountNumber = "1413964";
    var claimAmount = 672.05
    var providerSignatureOnFile = "Y";
    var providerAcceptedAssignment = "A"; //A=Accepted.  L=Lab Services. C=Not Assigned
    var ReleaseofInformationCode = "Y";

    var CLM = "CLM*";
    var CLM01 = patientAccountNumber;
    var CLM02 = "*" + claimAmount + "*";
    var CLM03 = "*";
    var CLM04 = "*";
    var CLM0501 = "41:";            //Facility Code Value
    var CLM0502 = "B:"              //Facility Code Qualifier
    var CLM0503 = "1*"              //Frequency Code
    var CLM06 = providerSignatureOnFile + "*";
    var CLM07 = providerAcceptedAssignment + "*";
    var CLM08 = "Y*";
    var CLM09 = ReleaseofInformationCode + "*";

    var Claim = "";
    Claim = CLM + CLM01 + CLM02 + CLM03 + CLM04 + CLM0501 +
        CLM0502 + CLM0503 + CLM06 + CLM07 + CLM08 + CLM09 + "~";

    //Date Onset
    var dateTimeQualifier = "431";
    var dateOnset = "CC/MM/DD";
    var dateFormatQualifier = "D8"

    var DTP = "DTP*";
    var DTP01 = dateOnset + "*"
    var DTP02 = dateFormatQualifier + "*"
    var DTP03 = dateOnset + "*"

    //Prior Authorization or Certification
    //Repriced Line Item Control Numbers
    var PriorRefNumber = "1001"

    var PriorREF = "REF*"
    var PriorREF01 = "9F*"
    var PriorREF02 = PriorRefNumber
    var PriorAuthorization = PriorREF + PriorREF01 + PriorREF02 + "~";

    ///////////////////////////////////////////////////////////////

    //CR1 Ambulance Transport Informations
    var ReasonForTransport = "A"
    var TransportQuantity = "5"
    var medicalReasonForTransport = "Medical Reason for transport"

    var CR1 = "CR1*"
    var CR101 = "*"
    var CR102 = "*"
    var CR103 = "*"
    var CR104 = ReasonForTransport + "*"
    var CR105 = "DH*"                           //Miles
    var CR106 = TransportQuantity + "*";              //Transport Distance
    var CR107 = "*"
    var CR108 = "*"
    var CR109 = medicalReasonForTransport;

    var AmbulanceTransportInformation = "";
    AmbulanceTransportInformations = CR1 + CR101 + CR102 + CR103 + CR104 + CR105 + CR106 + CR107 + CR108 + CR109 + "~";

    ////////////////////////////////////
    //Ambulance Certification

    var ConditionIndicator1 = "04"
    var ConditionIndicator2 = "06"
    var ConditionIndicator3 = "09"
    var CRC = "CRC*"
    var CRC01 = "07*";              //patient condition
    var CRC02 = "Y*";                //Resonse Code
    var CRC03 = ConditionIndicator1 + "*";
    var CRC04 = ConditionIndicator2 + "*";
    var CRC06 = ConditionIndicator3
    var AmbulanceCertification = "";
    AmbulanceCertification = CRC + CRC01 + CRC02 + CRC03 + CRC04 + CRC06 + "~";
    ////////////////////////////////////
    //Patient Condition

    var pcResponseCode = "N";
    var pcConditionIndicator = "12"

    var pcCRC = "CRC*"
    var pcCRC01 = "07*"
    var pcCRC02 = pcResponseCode + "*";
    var pcConditionIndicator = "12"
    var PatientCondition = "";
    PatientCondition = pcCRC + pcCRC01 + pcCRC02 + "~";
    ////////////////////////////////
    //HealthCare Designation Code

    var DiagnosisQualifier = "BK"  // ICD9=BK, ICD11= ABK
    var DiagnosisCode = "8730"

    var HI = "HI*"
    var HI0101 = DiagnosisQualifier + ":"
    var HI0102 = DiagnosisCode;
    var HealthCareDesignationCode = "";
    HealthCareDesignationCode = HI + HI0101 + HI0102 + "~";
    ////////////////////////////////
    //Ambulance Picup Location

    var puNM1 = "NM1*"
    var puNM01 = "PW*"
    var puNM02 = "2"
    var AmbulancePickupLocation = "";
    AmbulancePickupLocation = puNM1 + puNM01 + puNM02 + "~";
    //////////////////
    //Pickup Address

    var puAddress = "Pickup Address"
    var puN3 = "N3*"
    var puN301 = puAddress
    var PickupAddress = ""
    PickupAddress = puN3 + puN301 + "~";
    //////////
    //Pickup CSZ

    var puCity = "City"
    var puState = "ST"
    var puZip = "ZIPCODE"

    var puN4 = "N4*"
    var puN401 = puCity + "*";
    var puN402 = puState + "*";
    var puN403 = puZip + "*";
    var PickupCSZ = "";
    PickupCSZ = puN4 + puN401 + puN402 + puN403 + "~";
    ///////////////////////
    //Dropoff

    ////////////////////////////////////////
    //NM1 Segment - RECEIVER LOOP                                   2310F
    var dropoffName = "Nathan Littauer Hospital"

    var dropoffIDCode = "431420764";
    var InsuranceID = "MedicareID"

    var dropoffNM1 = "NM1";
    var dropoffNM101 = "*45*"                  //Entity ID Code.  IL= Insured ordropoff
    var dropoffNM102 = "2"                     //Entity Type.  1=Person, 2=NonPerson
    var dropoffNM103 = "*" + dropoffName;
    var DropoffName = dropoffNM1 + dropoffNM101 + dropoffNM102 + dropoffNM103 + "~";
    ///////
    //N3dropoff Address

    var dropoffAddress1 = "dropoff Address1"
    var dropoffAddress2 = "dropoff Address1"
    var dropoffNM3 = "N3*";
    var dropoffNM301 = dropoffAddress1;
    var dropoffNM302 = dropoffAddress2;
    var DropoffAddress = dropoffNM3 + dropoffNM301 + dropoffNM302 + "~";
    ///////
    //N3dropoff CSZ

    var dropoffCity = "City"
    var dropoffState = "State"
    var dropoffZip = "Zip"
    var dropoffNM4 = "~N4*";
    var dropoffNM401 = dropoffCity + "*";
    var dropoffNM402 = dropoffState + "*";
    var dropoffNM403 = dropoffZip;
    var DroppoffCSZ = dropoffNM3 + dropoffNM401 + dropoffNM402 + dropoffNM403 + "~";
    ///////////////////////
    // Other Subscriber Information

    var otherResponsibitySequenceCode = "S"
    var otherIndividualRelationshipCode
    var otherReferenceID
    var otherInsuredName
    var otherInsuranceTypeCode
    var otherClaimFilingIndicator = "MC"

    var otherSubSBR = "SBR*";
    var otherSubSBR01 = otherResponsibitySequenceCode + "S";
    var otherSubSBR02 = otherIndividualRelationshipCode + "*";
    var otherSubSBR03 = otherReferenceID + "*";
    var otherSubSBR04 = otherInsuredName + "*";
    var otherSubSBR05 = otherInsuranceTypeCode + "*";
    var otherSubSBR06 = otherClaimFilingIndicator;
    var OtherSubscriberInformation = "";
    OtherSubscriberInformation = otherSubSBR + otherSubSBR01 + otherSubSBR02 + otherSubSBR03 + otherSubSBR04 + otherSubSBR05 + otherSubSBR06 + "~";
    /////////
    //Other Insurance Information

    var oiClaimFilingIndicator
    var oiClaimSubmissionCode
    var oiYesNoCondition = "Y"
    var oiPatientSigSourceCode
    var oiProviderAgreementCode
    var oiReleaseofInformationCode = "Y"

    var OI = "OI*";
    var OI01 = oiClaimFilingIndicator + "*";
    var OI02 = oiClaimSubmissionCode + "*";
    var OI03 = oiYesNoCondition + "*";
    var OI04 = oiPatientSigSourceCode + "*";
    var OI05 = oiProviderAgreementCode + "*";
    var OI06 = oiReleaseofInformationCode;
    var OtherInsuranceInformation = OI + OI01 + OI02 + OI03 + OI04 + OI05 + OI06 + "~"

    ////////////////////////////////////////
    //NM1 Segment - Other Subscriber LOOP                                   2010BB
    var otherSubscriberLastName = "Medicare Upstate NY"
    var otherSubscriberFirstName = "First"
    var otherSubscriberMiddleName = "Middle"
    var otherSubscriberCodeQualifier = "MI";
    var otherSubscriberID = "AE68699D"

    var otherSubscriberNM1 = "NM1";
    var otherSubscriberNM101 = "*IL*"                  //Entity ID Code.  IL= Insured orotherSubscriber
    var otherSubscriberNM102 = "1*"                     //Entity Type.  1=Person, 2=NonPerson
    var otherSubscriberNM103 = otherSubscriberLastName + "*";
    var otherSubscriberNM104 = otherSubscriberFirstName + "*";
    var otherSubscriberNM105 = otherSubscriberMiddleName + "*";                    //Middle Name (blank)
    var otherSubscriberNM106 = "*";                    //Prefix (blank)
    var otherSubscriberNM107 = "*";                    //Suffix (blank)
    var otherSubscriberNM108 = otherSubscriberCodeQualifier + "*";                  //ID Code Qualifier 46=Electronic Transmitter
    var otherSubscriberNM109 = otherSubscriberID;    //ID Code
    var otherSubscribername = otherSubscriberNM1 + otherSubscriberNM102 + otherSubscriberNM103 + otherSubscriberNM104 +
        otherSubscriberNM105 + otherSubscriberNM106 + otherSubscriberNM107 + otherSubscriberNM108 + otherSubscriberNM108 + "~"


    //N3otherSubscriberAddress

    var otherSubscriberAddress1 = "Patient Address1"
    var otherSubscriberAddress2 = "Patient Address1"
    var otherSubscriberN3 = "N3*";
    var otherSubscriberN301 = otherSubscriberAddress1;
    var otherSubscriberN302 = otherSubscriberAddress2;
    var otherSubscriberAddress = otherSubscriberN3 + otherSubscriberN301 + otherSubscriberN302 + "~"
    ///////
    //N3otherSubscriber CSZ

    var otherSubscriberCity = "City"
    var otherSubscriberState = "State"
    var otherSubscriberZip = "Zip"
    var otherSubscriberN4 = "N4*";
    var otherSubscriberN401 = otherSubscriberCity + "*";
    var otherSubscriberN402 = otherSubscriberState + "*";
    var otherSubscriberN403 = otherSubscriberZip;
    var otherSubscriberCSZ = otherSubscriberN4 + otherSubscriberN401 + otherSubscriberN402 + otherSubscriberN403 + "~";


    ////////////////////////////////////////
    //NM1 Segment - Other Payer Secondary LOOP                                   2010BB
    var secPayerLastName = "NYSDOH"
    var secPayerFirstName = "First"
    var secPayerMiddleName = "Middle"
    var secPayerCodeQualifier = "PI";
    var secPayerID = "00812"

    var secPayerNM1 = "NM1";
    var secPayerNM101 = "*IL*"                  //Entity ID Code.  IL= Insured orsecPayer
    var secPayerNM102 = "2*"                     //Entity Type.  1=Person, 2=NonPerson
    var secPayerNM103 = secPayerLastName + "*";
    var secPayerNM104 = secPayerFirstName + "*";
    var secPayerNM105 = secPayerMiddleName + "*";                    //Middle Name (blank)
    var secPayerNM106 = "*";                    //Prefix (blank)
    var secPayerNM107 = "*";                    //Suffix (blank)
    var secPayerNM108 = secPayerCodeQualifier + "*";                  //ID Code Qualifier 46=Electronic Transmitter
    var secPayerNM109 = secPayerID;    //ID Code
    var OtherPayerSecondary = secPayerNM1 + secPayerNM101 + secPayerNM102 + secPayerNM103 + secPayerNM104
    + secPayerNM105 + secPayerNM106 + secPayerNM107 + secPayerNM108 + secPayerNM109 + "~";


    //N3secPayerAddress

    var secPayerAddress1 = "ATTN MEDICAL TRANSPORTATION"
    var secPayerAddress2 = "PO BOX 549"
    var secPayerN3 = "N3*";
    var secPayerN301 = secPayerAddress1;
    var secPayerN302 = secPayerAddress2;
    var OtherPayerSecondaryAddress = secPayerN3 + secPayerN301 + secPayerN302 + "~";
    ///////
    //N3secPayer CSZ

    var secPayerCity = "JOHNSTOWN"
    var secPayerState = "NY"
    var secPayerZip = "32156"
    var secPayerN4 = "N4*";
    var secPayerN401 = secPayerCity + "*";
    var secPayerN402 = secPayerState + "*";
    var secPayerN403 = secPayerZip;
    var OtherPayerSecondaryCSZ = secPayerN4 + secPayerN401 + secPayerN402 + secPayerN403 + "~";

    ////////////////////////////////
    //Service Line

    var LX1 = "LX*"
    var LX01 = "1"
    var ServiceLine = LX1 + LX01 + "~";
    ////////////////////////
    //Professional Service
    var profSVServiceId = "A0429";
    var profSVProcModifier = "RH";
    var profSVLineItemChargeAmount = "600";


    var profSV = "SV1*"
    var profSV10101 = "HC:";
    var profSV10102 = "profSVServiceId" + ":";
    var profSV10103 = "profSVProcModifier" + "*";
    var profSV102 = profSVLineItemChargeAmount + "*";
    var profSV103 = "UN*";
    var profSV104 = "1*";
    var profSV105 = "*";
    var profSV106 = "*";
    var profSV107 = "1*";
    var profSV108 = "*";
    var profSV109 = "Y";
    var ProfessionalService = profSV + profSV10101 + profSV10102 + profSV10103 + profSV102 + profSV103 + profSV104 + profSV105 + profSV106 + profSV107
    + profSV108 + profSV109 + "~";
    ////////////////////////////////
    //Service Date

    var DTPServiceDate = "CCYYMMDD"
    var DTP = "DTP*"
    var DTP01 = "472*"
    var DTP02 = "D8*"
    var DTP03 = DTPServiceDate
    var ServiceDate = DTP + DTP01 + DTP02 + DTP03 + "~";
    /////////////////
    //Repriced Line Item Control Numbers
    var LineItemControlNumber = "1001"
    var licREF = "REF*"
    var licREF01 = "6R*"
    var licREF02 = LineItemControlNumber
    var RepricedLineItemControlNumbers = licREF + licREF01 + licREF02 + "~";


    /////////////////////
    //Line Notes
    var NTEREfCode = "ADD"
    var NTEDescription = "Medical Reason for Transport"

    var lineNoteNTE = NTEREfCode + "*"
    var lineNTE01 = "~NTE*"
    var lineNTE02 = NTEDescription;
    //  Line Notes


    // ~LX*2~
    // SV1*HC:A0425:RH*72.5*UN*5.0***1;	**Y~
    // DTP*472*D8*20140812~
    // REF*6R*1002~SE*49*33563~
    // GE*1*33563~
    // IEA*1*000033563~


    var BillFile = ISASegment + GSSegment + STSegment + BHTSegment + submNMSegment + ContactPer
    + rcvrNM + BillToHL;
    return BillFile;
};
