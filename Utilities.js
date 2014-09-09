var ErrorList = [];
var v3NOT_REPORTING =   "7701005";
var v3NOT_RECORDED =    "7701003";
var v3NOT_APPLICABLE=   "7701001";
var v2NOT_AVAILABLE =   "-5";
var v2NOT_KNOWN =       "-10";
var v2NOT_REPORTING =   "-15";
var v2NOT_RECORDED =    "-20";
var v2NOT_APPLICABLE =  "-25"
var PCRElementsArray = new Array()
var v2Array = new Array()
var createCallObject = function (parseObject) {
    var Call = new Object();
    console.log(parseObject)

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
*/
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
    // var eAirwayObject = new Object();
    var eRecordObject = new Object();
    var eTimesObject = new Object();
    var eScenebject = new Object();
    var v221Array = [];
    var v334Array = [];

    //// ///////////////eRecord
    eRecordObject = seteRecord();
    v221Array = eRecordObject.Version2
    v334Array = eRecordObject.Version3

    /////////////////////
    /*
    ///////////////////////eDisposition    
    eDispositionObject = getObjectFromOLTPExtract(parseObject, "eDisposition");
    if (eDispositionObject.IsUndefined != true)
    {
        var _eDispositionObject = new Object();
        _eDispositionObject = seteDisposition(eDispositionObject);
       // console.log(_eDispositionObject)
        v221Array = _eDispositionObject.Version2.slice(0)
        v334Array = _eDispositionObject.Version3.slice(0)

    }
    else
    {
        alert("eDispositionObject");
    };
    */
    Call.AirTransport = false;
    Call.PatientTransfer = false;
    Call.isCancelled = false; //eDisposition["eDisposition.12"] !="4212007")  //if Cancelled prior to arrival on Scene, no data
    Call.HasPatient = true;
    Call.isCancelled = false;
    Call.isEmergent = true;
    //console.log(Call)
    /*
    ////////////////////////Dispatch
    eDispatchObject = getObjectFromOLTPExtract(parseObject, "eDispatch");
    if (eDispatchObject.IsUndefined != true) {
        var _eDispatchObject = new Object();
        _eDispatchObject = seteDispatch(eDispatchObject, Call);
         console.log(_eDispositionObject)
        v221Array = _eDispatchObject.Version2.slice(0)
        v334Array = _eDispatchObject.Version3.slice(0)
    }
    else {
        alert("eDispositionObject");
    };
   // setV2XML(v221Array);
  //  setXML334EMS(v334Array);
    ///////////////////////////////
    ///////

    ///////////////////////////////////eResponse
    eResponseObject = getObjectFromOLTPExtract(parseObject, "eResponse");
    if (eResponseObject.IsUndefined != true) {
        var _ResponseObject = new Object();
       // _ResponseObject = seteResponse(eResponseObject);
        console.log(_ResponseObject)
    }
    else {
        alert("Response Records Required");
    };
    */
    ///////////////////////////////////ePayment
    ePaymentsObject = getObjectFromOLTPExtract(parseObject, "ePayment");
    var _ePaymentsObject = new Object();
    ePaymentsObject.HasDataSet = false;
    if (ePaymentsObject.IsUndefined != true) {
        ePaymentsObject.HasDataSet = true;
        //  console.log(_ePaymentsObject)
    };
    _ePaymentsObject = setePayment(ePaymentsObject, Call);
    ////////////////////////////////////////////////////////////////

    /*   eTimesObject = getObjectFromOLTPExtract(parseObject, "eTimes");
   //    console.log(eTimesObject)
       if (eTimesObject.IsUndefined != true)
       {
           var _eTimesObject = new Object();
           //_eTimesObject = seteTimes(eTimesObject, Call);
           //console.log(_eTimesObject)
   
       }
       else {
           alert("UNDEF");
       };
   
       eAirwayObject = getObjectFromOLTPExtract(parseObject, "eAirway");
       if (eAirwayObject.IsUndefined != true) {
           var _eAirwayObject = new Object();
           //_eAirwayObject = seteAirway(eAirwayObject, Call);
           //console.log(_eAirwayObject)
   
       }
       else {
           alert("UNDEF");
       };
       
       eSceneObject = getObjectFromOLTPExtract(parseObject, "eScene");
       console.log(eSceneObject)
       if (eSceneObject.IsUndefined != true)
       {
           var _eSceneObject = new Object();
         //  _eSceneObject = seteScene(eSceneObject, Call);
          // console.log(_eSceneObject)
   
       }
       else {
           alert("eSceneObject");
       };
       */
};
var getObjectFromOLTPExtract = function (businessObject, sectionName) {
    //Returns an array of index values for a given sectionName within a sectionObject
    // if sectionName does not exist within the sectionObject, return -1

     //console.log(businessObject)

    var _retValue = new Object();
    _retValue.IsUndefined = true;
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
    ///console.log(sectionName)
    ///console.log(sectionObject)
    ///console.log(sectionObject.attributes.sections)
    //console.log(sectionObject.attributes.sections.length)
    var _retValue = [];
    if (typeof sectionObject.attributes.sections == 'undefined')
    {
        _retValue.push(-1);
        return _retValue;
    }
    for (var d = 0; d < sectionObject.attributes.sections.length; d++)
    {
        if (sectionObject.attributes.sections[d].attributes.name == sectionName)
        {
            _retValue.push(d);
        }
    }
    if (_retValue.length == 0)
    {
        _retValue.push(-1);
    };
    //console.log(_retValue)
    return _retValue;
};
var getValue = function (elementList, valueElement)
{
    var _arr = [];
    var returnObject = new Object();
    var valueObject = new Object();
   // console.log(valueElement)
    //console.log(elementList)
    for (var i = 0; i < elementList.length; i++) {
 
        if (elementList[i].attributes.title == valueElement) {

            //console.log(elementList[i].attributes.title)
            if ((typeof elementList[i].attributes.value == 'undefined') || (elementList[i].attributes.value == ""))
            {                
                valueObject.Count = 0;
                valueObject.IsNull = true;
            }
            else 
            {
                if (elementList[i].attributes.value.trim().length != 0)  //Can't trust data.  
                {
                    
                    var returnObject = new Object();
                    valueObject.IsNull = false;
                    returnObject.val = elementList[i].attributes.value.trim();
                }
            };
            if (elementList[i].attributes.pn != "") {
                returnObject.pn = elementList[i].attributes.pn;
                valueObject.HasPN = true;
            };
            if (elementList[i].attributes.params != undefined)
            {
                if (elementList[i].attributes.params.PhoneNumberType != undefined) {
                    returnObject.PhoneNumberType = elementList[i].attributes.params.PhoneNumberType.value;
                };
                if (elementList[i].attributes.params.EmailType != undefined) {
                    returnObject.EmailType = elementList[i].attributes.params.EmailAddressType.value;
                }
            }

//            if (valueObject.IsNull == false) {
                if (_arr.indexOf(returnObject.val) == -1)
                {
                    returnObject.HasValue = true;
                    _arr.push(returnObject);
                }
            //};
            returnObject = null;
            //}
        }
    };

    valueObject.Count = _arr.length;
    //valueObject.IsNull = false;
    valueObject.ValueArray = _arr;

    return valueObject;
};
function setV2(NEMSISElementNumber, v3Val, compValue) {
    //    console.log(NEMSISElementNumber);
    var _retv = "";
    //    console.log(codeVal);
    switch (NEMSISElementNumber) {
        case "eArrest.01":

            if (eArrest01[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eArrest01[v3Val];
            }
            break;
        case "eArrest.02":
            if (eArrest02[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eArrest02[v3Val];
            }
            break;
        case "eArrest.03":
            if (eArrest03[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eArrest03[v3Val];
            }
            break;

        case "eArrest.04":
            if (eArrest04[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eArrest04[v3Val];
            }
            break;


        case "eArrest.11":
            if (eArrest11[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eArrest11[v3Val];
            }
            break;

        case "eArrest.12":
            if (eArrest12[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eArrest12[v3Val];
            }
            break;

        case "eArrest.13":
            if (eArrest13[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eArrest13[v3Val];
            }
            break;

        case "eArrest.14":
            if (eArrest14[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eArrest14[v3Val];
            }
            break;


        case "eArrest.16":
            if (eArrest16[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eArrest16[v3Val];
            }
            break;


        case "eArrest.17":
            if (eArrest17[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eArrest17[v3Val];
            }
            break;

        case "eCrew.02":
            if (eCrew02[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eCrew02[v3Val];
            }
            break;
        case "eCrew.03":
            if (eCrew03[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eCrew03[v3Val];
            }
            break;

        case "eDispatch.01":
            if (eDispatch01[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eDispatch01[v3Val];
            }
            break;

        case "eDispatch.02":
            if (eDispatch02[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eDispatch02[v3Val];
            }
            break;
        case "eDispatch.03":
            if (eDispatch03[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eDispatch03[v3Val];
            }
            break;
        case "eDispatch.04":
            if (eDispatch04[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eDispatch04[v3Val];
            }
            break;
        case "eDispatch.06":
            if (eDispatch06[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eDispatch06[v3Val];
            }
            break;
        case "eDispatch.07":
            if (eDispatch07[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eDispatch07[v3Val];
            }
            break;
        case "eDispatch.08":
            if (eDispatch08[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eDispatch08[v3Val];
            }
            break;

        case "eDisposition.12":

            if (eDisposition12[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eDisposition12[v3Val];
            }
            break;
        case "eDisposition.13":
            if (eDisposition13[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eDisposition13[v3Val];
            }

            break;
        case "eDisposition.14":

            if (eDisposition14[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eDisposition13[v3Val];
            }
            break;

        case "eDisposition.15":

            if (eDisposition15[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eDisposition15[v3Val];
            }
            break;

        case "eDisposition.17":

            if (eDisposition17[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eDisposition17[v3Val];
            }
            break;


        case "eDisposition.19":

            if (eDisposition19[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eDisposition19[v3Val];
            }
            break;

        case "eDisposition.20":

            if (eDisposition20[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eDisposition20[v3Val];
            }
            break;
        case "eDisposition.21":

            if (eDisposition21[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eDisposition21[v3Val];
            }
            break;

        case "eExam.02":
            if (eExam02[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eExam02[v3Val];
            }
            break;

        case "eExam.04":
            if (eExam04[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eExam04[v3Val];
            }
            break;

        case "eExam.05":
            if (eExam05[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eExam05[v3Val];
            }
            break;

        case "eExam.07":
            if (eExam07[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eExam07[v3Val];
            }
            break;

        case "eExam.08":
            if (eExam08[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eExam08[v3Val];
            }
            break;

        case "eExam.09":
            if (eExam09[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eExam09[v3Val];
            }
            break;

        case "eExam.11":
            if (compValue == "3510001")  //General
            {
                if (eExam10_General[v3Val] == undefined) {
                    _retv = v3Val + " UNDEFINED";
                }
                else {
                    _retv = eExam10_General[v3Val];
                }
            };
            if (compValue == "3510003")//Left Lower Quadrant
            {
                if (eExam10_LeftLower[v3Val] == undefined) {
                    _retv = v3Val + " UNDEFINED";
                }
                else {
                    _retv = eExam10_LeftLower[v3Val];
                }
            };

            if (compValue == "3510005") //Left Upper Quadrant
            {
                if (eExam10_LeftUpper[v3Val] == undefined) {
                    _retv = v3Val + " UNDEFINED";
                }
                else {
                    _retv = eExam10_LeftUpper[v3Val];
                }
            };

            if (compValue == "3510007") //Periumbilical
            {
                if (eExam10_Periumbilical[v3Val] == undefined) {
                    _retv = v3Val + " UNDEFINED";
                }
                else {
                    _retv = eExam10_Periumbilical[v3Val];
                }
            };
            if (compValue == "3510009") //Right Lower Quadrant
            {
                if (eExam10_RightLower[v3Val] == undefined) {
                    _retv = v3Val + " UNDEFINED";
                }
                else {
                    _retv = eExam10_RightLower[v3Val];
                }
            };
            if (compValue == "3510011")//Right Upper Quadrant
            {
                if (eExam10_RightUpper[v3Val] == undefined) {
                    _retv = v3Val + " UNDEFINED";
                }
                else {
                    _retv = eExam10_RightUpper[v3Val];
                }
            };
            break;

        case "eExam.12":
            if (eExam12[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eExam12[v3Val];
            }
            break;

        case "eExam.14":
            var examSet1 = ["3513001", "3513003", "3513005", "3513007"]
            if (examSet1.indexOf(compValue) > -1) {
                if (eExam13_3513001[v3Val] == undefined) {
                    _retv = v3Val + " UNDEFINED";
                }
                else {
                    _retv = eExam13_3513001[v3Val];
                }
            };
            var examSet2 = ["3513009", "3513011", "3513013", "3513021", "3513023", "3513027"]
            if (examSet2.indexOf(compValue) > -1) {
                if (eExam13_3513009[v3Val] == undefined) {
                    _retv = v3Val + " UNDEFINED";
                }
                else {
                    _retv = eExam13_3513009[v3Val];
                }
            };
            var examSet2 = ["3513017", "3513019", "3513025"]
            if (examSet2.indexOf(compValue) > -1) {
                if (eExam13_3513017[v3Val] == undefined) {
                    _retv = v3Val + " UNDEFINED";
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
                if (eExam15_ExtremitiesRightUpper[v3Val] == undefined) {
                    _retv = v3Val + " UNDEFINED";
                }
                else {
                    _retv = eExam15_ExtremitiesRightUpper[v3Val];
                }
            };
            var examSet2 = ["3515005", "3515009", "3515013", "3515017", "3515021", "3515025", "3515037", "3515041", "3515045", "3515065", "3515069", "3515093"]
            if (examSet2.indexOf(compValue) > -1)//Extremities, left upper
            {
                if (eExam15_ExtremitiesLeftUpper[v3Val] == undefined) {
                    _retv = v3Val + " UNDEFINED";
                }
                else {
                    _retv = eExam15_ExtremitiesLeftUpper[v3Val];
                }
            };
            var examSet3 = ["3515003", "3515031", "3515035", "3515051", "3515055", "3515059", "3515063", "3515075", "3515077", "3515079", "3515083", "3515087", "3515091"]
            if (examSet3.indexOf(compValue) > -1)//Right Lower
            {
                if (eExam15_RightLower[v3Val] == undefined) {
                    _retv = v3Val + " UNDEFINED";
                }
                else {
                    _retv = eExam15_RightLower[v3Val];
                }
            };
            break;

            var examSet4 = ["3515001", "3515029", "3515033", "3515049", "3515053", "3515057", "3515061", "3515073", "3515075", "35150777", "3515081", "3515057", "3515089"]
            if (examSet4.indexOf(compValue) > -1)//Left Lower
            {
                if (eExam15_LeftLower[v3Val] == undefined) {
                    _retv = v3Val + " UNDEFINED";
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
                if (eExam18_BilateralandLeft[v3Val] == undefined) {
                    _retv = v3Val + " UNDEFINED";
                }
                else {
                    _retv = eExam18_BilateralandLeft[v3Val];
                }
            };
            var examSet1 = ["3517001", "3517005"] //Bilateral and Right
            if (examSet1.indexOf(compValue) > -1)//Left Lower
            {
                {
                    if (eExam18_BilateralandRight[v3Val] == undefined) {
                        _retv = v3Val + " UNDEFINED";
                    }
                    else {
                        _retv = eExam18_BilateralandRight[v3Val];
                    }
                };
            }
            break;
        case "eExam.19":
            if (eExam19[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eExam19[v3Val];
            }
            break;

        case "eExam.20":
            if (eExam20[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eExam20[v3Val];
            }
            break;

        case "eHistory.01":
            if (eHistory01[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eHistory01[v3Val];
            }
            break;
        case "eHistory.05":
            if (eHistory05[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eHistory05[v3Val];
            }
            break;
        case "eHistory.09":
            if (eHistory09[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eHistory09[v3Val];
            }
            break;
        case "eHistory.10":
            if (eHistory10[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eHistory10[v3Val];
            }
            break;
        case "eHistory.14":
            if (eHistory14[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eHistory14[v3Val];
            }
            break;
        case "eHistory.15":
            if (eHistory15[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eHistory15[v3Val];
            }
            break;
        case "eHistory.16":
            if (eHistory16[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eHistory16[v3Val];
            }
            break;
        case "eHistory.17":
            if (eHistory17[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eHistory17[v3Val];
            }
            break;
        case "eHistory.18":
            if (eHistory18[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eHistory18[v3Val];
            }
            break;


        case "eMedication.02":

            if (eMedication02[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eMedication02[v3Val];
            }
            break;
        case "eMedication.04":

            if (eMedication04[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = (eMedication04[v3Val]);
            }
            break;
        case "eMedication.06":
            if (eMedication06[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eMedication06[v3Val];
            }
            break;
        case "eMedication.07":
            if (eMedication07[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eMedication07[v3Val];
            };
            break;
        case "eMedication.08":
            if (eMedication08[v3Val] == undefined) {
                _retv = v3Val + "UNDEFINED";
            }
            else {
                _retv = eMedication08[v3Val];
            };

            break;
        case "eMedication.11":
            if (eMedication11[v3Val] == undefined) {
                _retv = v3Val + "UNDEFINED";
            }
            else {
                _retv = eMedication11[v3Val];
            };
            break;
        case "eOther.01":
            if (eOther01[v3Val] == undefined) {
                _retv = v3Val + "UNDEFINED";
            }
            else {
                _retv = eOther01[v3Val];
            };
            break;
        case "eOther.02":
            if (eOther02[v3Val] == undefined) {
                _retv = v3Val + "UNDEFINED";
            }
            else {
                _retv = eOther02[v3Val];
            };
            break;
        case "eOther.03":
            if (eOther03[v3Val] == undefined) {
                _retv = v3Val + "UNDEFINED";
            }
            else {
                _retv = eOther03[v3Val];
            };
            break;
        case "eOther.06":
            if (eOther06[v3Val] == undefined) {
                _retv = v3Val + "UNDEFINED";
            }
            else {
                _retv = eOther06[v3Val];
            };
            break;
        case "eOther.07":
            if (eOther07[v3Val] == undefined) {
                _retv = v3Val + "UNDEFINED";
            }
            else {
                _retv = eOther07[v3Val];
            };
            break;
        case "eOutcome.01":
            if (eOutcome01[v3Val] == undefined) {
                _retv = v3Val + "UNDEFINED";
            }
            else {
                _retv = eOutcome01[v3Val];
            };
            break;
        case "eOutcome.02":
            if (eOutcome02[v3Val] == undefined) {
                _retv = v3Val + "UNDEFINED";
            }
            else {
                _retv = eOutcome02[v3Val];
            };
            break;
        case "eOutcome.03":
            if (eOutcome03[v3Val] == undefined) {
                _retv = v3Val + "UNDEFINED";
            }
            else {
                _retv = eOutcome03[v3Val];
            };
            break;
        case "eOutcome.17":
            if (eOutcome17[v3Val] == undefined) {
                _retv = v3Val + "UNDEFINED";
            }
            else {
                _retv = eOutcome17[v3Val];
            };
            break;
        case "ePatient.13":
            if (ePatient13[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = ePatient13[v3Val];
            }
            break;

        case "ePatient.14":
            if (ePatient14[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = ePatient14[v3Val];
            }
            break;
        case "ePatient.16":
            if (ePatient16[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = ePatient16[v3Val];
            }
            break;
        case "ePayment.01":
            if (ePayment01[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = ePayment01[v3Val];
            }
            break;

        case "ePayment.02":
            if (ePayment02[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = ePayment02[v3Val];
            }
            break;
        case "ePayment.11":
            if (ePayment11[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = ePayment11[v3Val];
            }
            break;
        case "ePayment.40":
            if (ePayment40[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = ePayment40[v3Val];
            }
            break;
        case "ePayment.50":
            if (ePayment50[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = ePayment50[v3Val];
            }
            break;
        case "ePayment.52":
            if (ePayment52[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = ePayment52[v3Val];
            }
            break;
        case "eProcedures.07":
            if (eProcedures07[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eProcedures07[v3Val];
            }
            break;
        case "eProcedures.08":
            if (eProcedures08[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eProcedures08[v3Val];
            }
            break;
        case "eProcedures.11":
            if (eProcedures11[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eProcedures11[v3Val];
            }
            break;
        case "eProcedures.13":
            if (eProcedures13[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eProcedures13[v3Val];
            }
            break;

        case "eScene.04":
            if (eScene04[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eScene04[v3Val];
            }
            break;
        case "eScene.06":
            if (eScene06[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eScene06[v3Val];
            }
            break;
        case "eScene.07":
            if (eScene07[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eScene07[v3Val];
            }
            break;
        case "eScene.09":
            if (eScene09[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eScene09[v3Val];
            }
            break;

        case "eSituation.06":
            if (eSituation06[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eSituation06[v3Val];
            }
            break;
        case "eSituation.07":
            if (eSituation07[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eSituation07[v3Val];
            }
            break;
        case "eSituation.08":
            if (eSituation08[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eSituation08[v3Val];
            }
            break;
        case "eSituation.09":
            if (eSituation09[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eSituation09[v3Val];
            }
            break;

        case "eSituation.10":
            if (eSituation10[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eSituation10[v3Val];
            }
            break;
        case "eVitals.02":
            if (eVitals02[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eVitals02[v3Val];
            }
            break;
        case "eVitals.03":
            if (eVitals03[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eVitals03[v3Val];
            }
            break;
        case "eVitals.08":
            if (eVitals08[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eVitals08[v3Val];
            }
            break;
        case "eVitals.13":
            if (eVitals13[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eVitals13[v3Val];
            }
            break;
        case "eVitals.15":
            if (eVitals15[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eVitals15[v3Val];
            }
            break;
        case "eVitals.19":
            if (eVitals19[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eVitals19[v3Val];
            }
            break;
        case "eVitals.20":
            if (eVitals20[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eVitals20[v3Val];
            }
            break;
        case "eVitals.21":
            if (eVitals21[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eVitals21[v3Val];
            }
            break;
        case "eVitals.22":
            if (eVitals22[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eVitals22[v3Val];
            }
            break;
        case "eVitals.25":
            if (eVitals25[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eVitals25[v3Val];
            }
            break;
        case "eVitals.26":
            if (eVitals26[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eVitals26[v3Val];
            }
            break;
        case "eVitals.29":
            if (eVitals29[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
            }
            else {
                _retv = eVitals29[v3Val];
            }
            break;
        case "eVitals.31":
            if (eVitals31[v3Val] == undefined) {
                _retv = v3Val + " UNDEFINED";
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

            if (this.standalone !== undefined)
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
        getDocument: window.ActiveXObject
            ? function () { //MSIE
                var doc = new ActiveXObject('Microsoft.XMLDOM');
                doc.async = false;
                doc.loadXML(this.flush());
                return doc;
            }
            : function () {// Mozilla, Firefox, Opera, etc.
                return (new DOMParser()).parseFromString(this.flush(), 'text/xml');
            }
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

var setV2XML = function (TheCall) {

    var specMap = {
        "7701001": "-5",
        "7701003": "-15",
        "7701005": "-20",
        "8801005": "-10",
        "8801013": "-10",
        "8801015": "-10",
        "8801017": "-10",
        "8801019": "-10",
        "8801021": "-10",
        "8801023": "-10"
    };
    var specVal = ["7701001", "7701003", "7701005", "8801005", "8801013", "8801015", "8801017", "8801019", "8801021", "8801023"];

    var v3NOT_RECORDED = "7701003";
    var v3NOT_APPLICABLE = "7701001";
    var v2NOT_AVAILABLE = "-5";
    var v2NOT_REPORTING = "-15";
    var v2NOT_APPLICABLE = "-25"
    var v2NOT_RECORDED = "-20";
    var v2NOT_KNOWN = "-10";
    var v2obj = new Object();
    var v2Object = new Object();
    var v2XML = new XMLWriter('UTF-8', '1.0');
    v2XML.writeStartDocument();
    v2XML.writeStartElement('EMSDataSet');
    //XML.writeAttributeString('xmlns', "http://www.nemsis.org  xsi:schemaLocation=http://www.nemsis.org http://nemsis.org/media/XSD_v3/_nemsis_v3.3.4/3.3.4.140328/XSDs/NEMSIS_XSDs_v3.3.4.140328/EMSDataSet_v3.xsd  xmlns:xsi=http://www.w3.org/2001/XMLSchema-instance") 
    v2XML.writeAttributeString('xmlns', 'http://www.nemsis.org'); 8
    v2XML.writeAttributeString('xsi:schemaLocation', '="http://www.nemsis.org http://www.nemsis.org/media/XSD/EMSDataSet.xsd');
    v2XML.writeAttributeString('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance');


    v2XML.writeStartElement("Header");
    /*
    v2obj = getVersion221Values(ArrayOfVersion2Objects, "D01_01")
    v2XML.writeElementString("D01_01", v2obj);
    v2obje = getVersion221Values(ArrayOfVersion2Objects, "D01_03")
    v2XML.writeElementString("D01_03", v2obj);
    v2obj = getVersion221Values(ArrayOfVersion2Objects, "D01_04")
    v2XML.writeElementString("D01_04", v2obj);
    v2obj = getVersion221Values(ArrayOfVersion2Objects, "D01_07")
    v2XML.writeElementString("D01_07", v2obj);
    v2obj = getVersion221Values(ArrayOfVersion2Objects, "D01_08")
    v2XML.writeElementString("D01_08", v2obj);
    v2obj = getVersion221Values(ArrayOfVersion2Objects, "D01_09")
    v2XML.writeElementString("D01_09", v2obj);
    v2obj = getVersion221Values(ArrayOfVersion2Objects, "D01_21")
    v2XML.writeElementString("D01_21", v2obj);
    v2obj = getVersion221Values(ArrayOfVersion2Objects, "D02_07")
    v2XML.writeElementString("D02_07", v2obj);
    v2XML.writeStartElement("Record");
    */
    //Record

    v2XML.writeStartElement("E01");

    //v2obj = getVersion221Values(ArrayOfVersion2Objects, "E01_01");
    
    if (typeof TheCall.eRecord["eRecord.01"] != 'undefined') {
        v2XML.writeElementString("E01_01", TheCall.eRecord["eRecord.01"]);
    };

    if (typeof TheCall.eRecord["eRecord.02"] != 'undefined') {
        v2XML.writeElementString("E01_02", TheCall.eRecord["eRecord.02"]);
    };
    if (typeof TheCall.eRecord["eRecord.03"] != 'undefined') {
        v2XML.writeElementString("E01_03", TheCall.eRecord["eRecord.03"]);
    };
    if (typeof TheCall.eRecord["eRecord.04"] != 'undefined') {
        v2XML.writeElementString("E01_04", TheCall.eRecord["eRecord.04"]);
    };
    v2XML.writeEndElement("E01");

    //Response

    v2XML.writeStartElement("E02");
    if (typeof TheCall.eResponse["eResponse.01"] != 'undefined') {
        v2XML.writeElementString("E02_01", TheCall.eResponse["eResponse.01"]);
    };

    if (typeof TheCall.eResponse["eResponse.03"] != 'undefined') {
        if (specVal.indexOf(TheCall.eResponse["eResponse.03"]) != -1) {
            v2XML.writeElementString("E02_02", specMap[TheCall.eResponse["eResponse.03"]]);
        }
        else {
            v2XML.writeElementString("E02_02", TheCall.eResponse["eResponse.03"]);
        }
    }

    if (typeof TheCall.eResponse["eResponse.04"] != 'undefined') {
        if (specVal.indexOf(TheCall.eResponse["eResponse.04"]) != -1) {
            v2XML.writeElementString("E02_03", specMap[TheCall.eResponse["eResponse.04"]]);
        }
        else {
            v2XML.writeElementString("E02_03", TheCall.eResponse["eResponse.04"]);
        }
    };

    if (typeof TheCall.eResponse["eResponse.07"] != 'undefined') {
        v2XML.writeElementString("E02_05", TheCall.eResponse["eResponse.07"]);
    };

    if (typeof TheCall.eResponse["eResponse.08"] != 'undefined') {
        if (TheCall.eResponse["eResponse.08"].length == 1) {
            if (specVal.indexOf(TheCall.eResponse["eResponse.08"][0]) != -1) {
                v2XML.writeElementString("E02_06", specMap[TheCall.eResponse["eResponse.08"][0]]);
            }
        }
        else {
            for (var i = 0; i < TheCall.eResponse["eResponse.08"].length; i++) {
                v2XML.writeElementString("E02_06", TheCall.eResponse["eResponse.08"][i]);
            }
        }
    };
    if (typeof TheCall.eResponse["eResponse.09"] != 'undefined') {
        if (TheCall.eResponse["eResponse.09"].length == 1) {
            if (specVal.indexOf(TheCall.eResponse["eResponse.09"][0]) != -1) {
                v2XML.writeElementString("E02_07", specMap[TheCall.eResponse["eResponse.09"][0]]);
            }
        }
        else {
            for (var i = 0; i < TheCall.eResponse["eResponse.09"].length; i++) {
                v2XML.writeElementString("E02_07", TheCall.eResponse["eResponse.09"][i]);
            }
        }
    };
    if (typeof TheCall.eResponse["eResponse.10"] != 'undefined') {
        if (TheCall.eResponse["eResponse.10"].length == 1) {
            if (specVal.indexOf(TheCall.eResponse["eResponse.10"][0]) != -1) {
                v2XML.writeElementString("E02_08", specMap[TheCall.eResponse["eResponse.10"][0]]);
            }
        }
        else {
            for (var i = 0; i < TheCall.eResponse["eResponse.10"].length; i++) {
                v2XML.writeElementString("E02_08", TheCall.eResponse["eResponse.10"][i]);
            }
        }
    };
    if (typeof TheCall.eResponse["eResponse.11"] != 'undefined') {
        if (TheCall.eResponse["eResponse.11"].length == 1) {
            if (specVal.indexOf(TheCall.eResponse["eResponse.11"][0]) != -1) {
                v2XML.writeElementString("E02_09", specMap[TheCall.eResponse["eResponse.11"][0]]);
            }
        }
        else {
            for (var i = 0; i < TheCall.eResponse["eResponse.11"].length; i++) {
                v2XML.writeElementString("E02_09", TheCall.eResponse["eResponse.11"][i]);
            }
        }
    };

    if (typeof TheCall.eResponse["eResponse.12"] != 'undefined') {
        if (TheCall.eResponse["eResponse.12"].length == 1) {
            if (specVal.indexOf(TheCall.eResponse["eResponse.12"][0]) != -1) {
                v2XML.writeElementString("E02_10", specMap[TheCall.eResponse["eResponse.12"][0]]);
            }
        }
        else {
            for (var i = 0; i < TheCall.eResponse["eResponse.12"].length; i++) {
                v2XML.writeElementString("E02_10", TheCall.eResponse["eResponse.12"][i]);
            }
        }
    };
    if (typeof TheCall.eResponse["eResponse.13"] != 'undefined') {
        if (typeof TheCall.eResponse["eResponse.13"].length == 0) {
            v2XML.writeElementString("E02_11", "-5");
        }
        else {
            v2XML.writeElementString("E02_11", TheCall.eResponse["eResponse.13"]);
        }
    }
    else {
        v2XML.writeElementString("E02_11", "-10");
    };
    if (typeof TheCall.eResponse["eResponse.14"] != 'undefined') {
        v2XML.writeElementString("E02_12", TheCall.eResponse["eResponse.14"]);
    };
    if (typeof TheCall.eResponse["eResponse.16"] != 'undefined') {
        if (TheCall.eResponse["eResponse.16"].length == 0) {
            v2XML.writeElementString("E02_13", "-5");
        }
        else {
            v2XML.writeElementString("E02_13", TheCall.eResponse["eResponse.16"]);
        }
    };

    v2XML.writeElementString("E02_14", "-5"); //Dispatch Zone

    if (typeof TheCall.eResponse["eResponse.17"] != 'undefined') {
        v2XML.writeElementString("E02_15", TheCall.eResponse["eResponse.17"]);
    };
    if (typeof TheCall.eResponse["eResponse.19"] != 'undefined') {
        v2XML.writeElementString("E02_16", TheCall.eResponse["eResponse.19"]);
    };
    if (typeof TheCall.eResponse["eResponse.20"] != 'undefined') {
        v2XML.writeElementString("E02_17", TheCall.eResponse["eResponse.20"]);
    };
    if (typeof TheCall.eResponse["eResponse.21"] != 'undefined') {
        v2XML.writeElementString("E02_18", TheCall.eResponse["eResponse.21"]);
    };
    if (typeof TheCall.eResponse["eResponse.22"] != 'undefined') {
        v2XML.writeElementString("E02_19", TheCall.eResponse["eResponse.22"]);
    };
    if (typeof TheCall.eResponse["eResponse.23"] != 'undefined') {
        v2XML.writeElementString("E02_20", TheCall.eResponse["eResponse.23"]);
    };

    v2XML.writeEndElement("E02");
    ////////////////////////////////////////////////////

    v2XML.writeStartElement("E03");

    if (typeof TheCall.eDispatch["7.01"] != 'undefined') {
        if (TheCall.eDispatch["eDispatch.01"].length == 1) {
            if (specVal.indexOf(TheCall.eDispatch["eDispatch.01"][0]) != -1) {
                v2XML.writeElementString("E03_01", specMap[TheCall.eDispatch["eDispatch.01"][0]]);
            }
        }

        else {
            v2XML.writeElementString("E03_01", TheCall.eDispatch["eDispatch.01"][0]);
        }
    };
    if (typeof TheCall.eDispatch["eDispatch.02"] != 'undefined') {
        if (specVal.indexOf(TheCall.eDispatch["eDispatch.02"][0]) != -1) {
            v2XML.writeElementString("E03_02", specMap[TheCall.eDispatch["eDispatch.02"][0]]);
        }

        else {
            v2XML.writeElementString("E03_02", TheCall.eDispatch["eDispatch.02"][0]);
        }
    };

    if (typeof TheCall.eDispatch["eDispatch.03"] != 'undefined') {
        if (TheCall.eDispatch["eDispatch.03"][0] == null) {
            v2XML.writeElementString("E03_03", "");
        }
        else {
            v2XML.writeElementString("E03_03", TheCall.eDispatch["eDispatch.03"][0]);
        }
    };
    v2XML.writeEndElement("E03");
    /*
        /////////////////////////////////////////////////////
    
        for (var i = 0; i < TheCall.eCrew.CrewGroup.length; i++) 
        {
            v2XML.writeStartElement("E04");
            if (typeof TheCall.eCrew.CrewGroup[i]["eCrew.01"] != 'undefined') {
                if (specVal.indexOf(TheCall.eDispatch["eCrew.01"][0]) != -1) {
                    v2XML.writeElementString("E04_01", specMap[TheCall.eCrew.CrewGroup[i]["eCrew.01"][0]]);
                }
                else {
                    v2XML.writeElementString("E04_01", TheCall.eCrew.CrewGroup[i]["eCrew.01"][0]);
                }
            };
        
            if (typeof TheCall.eCrew.CrewGroup[i]["eCrew.02"] != 'undefined') {
                if (specVal.indexOf(TheCall.eDispatch["eCrew.02"][0]) != -1) 
                {
                    v2XML.writeElementString("E04_03", specMap[TheCall.eCrew.CrewGroup[i]["eCrew.02"][0]]);
                }                
                else 
                {
                    v2XML.writeElementString("E04_03", TheCall.eCrew.CrewGroup[i]["eCrew.02"][0]);
                }
            };
            if (typeof TheCall.eCrew.CrewGroup[i]["eCrew.03"] != 'undefined') {
                if (specVal.indexOf(TheCall.eDispatch["eCrew.03"][0]) != -1) 
                {
                    v2XML.writeElementString("E04_02", specMap[TheCall.eCrew.CrewGroup[i]["eCrew.03"][0]]);
                }                
                else 
                {
                    v2XML.writeElementString("E04_02", TheCall.eCrew.CrewGroup[i]["eCrew.03"][0]);
                }
            };
            v2XML.writeEndElement("E04");    
        };
        //////////////////////////////////////////
        //times
    
        
        
        v2XML.writeStartElement("E12");
        if (typeof TheCall.eTimes["eTimes.01"] != 'undefined') {
            v2XML.writeElementString("E05_02", TheCall.eTimes["eTimes.01"]);
        };
        if (typeof TheCall.eTimes["eTimes.02"] != 'undefined') {
            v2XML.writeElementString("E05_03", TheCall.eTimes["eTimes.02"]);
        };
        if (typeof TheCall.eTimes["eTimes.03"] != 'undefined') {
            v2XML.writeElementString("E05_04", TheCall.eTimes["eTimes.03"]);
        };
    
        if (typeof TheCall.eTimes["eTimes.05"]  != 'undefined') 
        {
            if ((TheCall.eTimes["eTimes.05"][0]== null) &&(TheCall.eTimes["eTimes.05"][0]== "")) 
            {
                v2XML.writeElementString("E05_05", "");
            }
            else 
            {
                v2XML.writeElementString("E05_05", TheCall.eDispatch["eTimes.05"][0]);      
            }
        };       
    
        if (typeof TheCall.eTimes["eTimes.06"]  != 'undefined') 
        {
            if ((TheCall.eTimes["eTimes.06"][0]== null) &&(TheCall.eTimes["eTimes.06"][0]== "")) 
            {
                v2XML.writeElementString("E05_06", "");
            }
        }                
        else 
        {
            v2XML.writeElementString("E05_06", TheCall.eDispatch["eTimes.06"][0]);      
        };
    
    
        if (typeof TheCall.eTimes["eTimes.07"]  != 'undefined') 
        {
            if ((TheCall.eTimes["eTimes.07"][0]== null) &&(TheCall.eTimes["eTimes.07"][0]== "")) 
            {
                v2XML.writeElementString("E05_07", "");
            }
        }                
        else 
        {
            v2XML.writeElementString("E05_07", TheCall.eDispatch["eTimes.07"][0]);      
        };
    
        if (typeof TheCall.eTimes["eTimes.08"]  != 'undefined') 
        {
            if ((TheCall.eTimes["eTimes.08"][0]== null) &&(TheCall.eTimes["eTimes.08"][0]== "")) 
            {
                v2XML.writeElementString("E05_08", "");
            }
        }                
        else 
        {
            v2XML.writeElementString("E05_08", TheCall.eDispatch["eTimes.08"][0]);      
        };
    
        if (typeof TheCall.eTimes["eTimes.09"]  != 'undefined') 
        {
            if ((TheCall.eTimes["eTimes.09"][0]== null) &&(TheCall.eTimes["eTimes.09"][0]== "")) 
            {
                v2XML.writeElementString("E05_09", "");
            }
        }                
        else 
        {
            v2XML.writeElementString("E05_09", TheCall.eDispatch["eTimes.09"][0]);      
        };
    
        if (typeof TheCall.eTimes["eTimes.11"]  != 'undefined') 
        {
            if ((TheCall.eTimes["eTimes.11"][0]== null) &&(TheCall.eTimes["eTimes.11"][0]== "")) 
            {
                v2XML.writeElementString("E05_10", "");
            }
        }                
        else 
        {
            v2XML.writeElementString("E05_10", TheCall.eDispatch["eTimes.11"][0]);      
        };
        /////////////////////////////////
        //////////////////////////////MANDATORY
        if (typeof TheCall.eTimes["eTimes.13"]  != 'undefined') 
        {
            if ((TheCall.eTimes["eTimes.13"][0]== null) &&(TheCall.eTimes["eTimes.13"][0]== "")) 
            {
                v2XML.writeElementString("E05_11", "");
            }
        }                
        else 
        {
            v2XML.writeElementString("E05_11", TheCall.eDispatch["eTimes.13"][0]);      
        };
    
        if (typeof TheCall.eTimes["eTimes.14"]  != 'undefined') 
        {
            if ((TheCall.eTimes["eTimes.14"][0]== null) &&(TheCall.eTimes["eTimes.14"][0]== "")) 
            {
                v2XML.writeElementString("E05_12", "");
            }
        }                
        else 
        {
            v2XML.writeElementString("E05_12", TheCall.eDispatch["eTimes.14"][0]);      
        };
    
        if (typeof TheCall.eTimes["eTimes.15"]  != 'undefined') 
        {
            if ((TheCall.eTimes["eTimes.15"][0]== null) &&(TheCall.eTimes["eTimes.15"][0]== "")) 
            {
                v2XML.writeElementString("E05_13", "");
            }
        }                
        else 
        {
            v2XML.writeElementString("E05_13", TheCall.eDispatch["eTimes.15"][0]);      
        };
        v2XML.writeStartElement();
    
        /*
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E12_02");
        v2XML.writeElementString("E12_02", val[0][0]); //NATIONAL
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E12_03");
        v2XML.writeElementString("E12_03", val[0][0]);
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E12_04");
        v2XML.writeElementString("E12_04", val[0][0]);//NATIONAL
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E12_05");
        v2XML.writeElementString("E12_05", val[0][0]);//NATIONAL
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E12_06");
        v2XML.writeElementString("E12_06", val[0][0]);//NATIONAL
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E12_07");
        v2XML.writeElementString("E12_07", val[0][0]);//NATIONAL
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E12_08");
        v2XML.writeElementString("E12_08", val[0][0]);
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E12_09");
        v2XML.writeElementString("E12_09", val[0][0]);//NATIONAL
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E12_10");
        v2XML.writeElementString("E12_10", val[0][0]);//NATIONAL
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E12_11");
        v2XML.writeElementString("E12_11", val[0][0]);//NATIONAL
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E12_12");
        v2XML.writeElementString("E12_12", val[0][0]);
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E12_13");
        v2XML.writeElementString("E12_13", val[0][0]);//NATIONAL    
        v2XML.writeEndElement("E12");
        */
    ////////////////////Patient
    /*
    v2XML.writeStartElement("E06");
    //Name Group
    v2XML.writeStartElement("E06_01_0");
    if (typeof TheCall.ePatient["ePatient.02"] != 'undefined') {
        if (specVal.indexOf(TheCall.ePatient["ePatient.02"][0]) != -1) 
        {
            v2XML.writeElementString("E06_01", specMap[TheCall.ePatient["ePatient.02"][0]]);
        }                
        else 
        {
            v2XML.writeElementString("E06_01", TheCall.ePatient["ePatient.02"][0]);
        }
    };

    if (typeof TheCall.ePatient["ePatient.03"] != 'undefined') {
        if (specVal.indexOf(TheCall.ePatient["ePatient.03"][0]) != -1) 
        {
            v2XML.writeElementString("E06_02", specMap[TheCall.ePatient["ePatient.03"][0]]);
        }                
        else 
        {
            v2XML.writeElementString("E06_02", TheCall.ePatient["ePatient.03"][0]);
        }
    };

    if (typeof TheCall.ePatient["ePatient.04"] != 'undefined') {
        v2XML.writeElementString("E06_03", TheCall.ePatient["ePatient.04"][0]);
    };

    //Address Group
    v2XML.writeStartElement("E06_04_0");
    if (typeof TheCall.ePatient["ePatient.05"] != 'undefined') 
    {
        if ((TheCall.ePatient["ePatient.05"][0]== null) &&(TheCall.ePatient["ePatient.05"][0]== "")) 
        {
            v2XML.writeElementString("E06_04", "-5");
        }                
        else
        {
            v2XML.writeElementString("E06_04", TheCall.ePatient["ePatient.05"][0]);
        }
    };

    if (typeof TheCall.ePatient["ePatient.06"] != 'undefined') 
    {
        if ((TheCall.ePatient["ePatient.06"][0]== null) &&(TheCall.ePatient["ePatient.06"][0]== "")) 
        {
            v2XML.writeElementString("E06_05", "-5");
        }                
        else
        {
            v2XML.writeElementString("E06_05", TheCall.ePatient["ePatient.06"][0]);        
        }
    };

    if (typeof TheCall.ePatient["ePatient.07"] != 'undefined') 
    {
        if ((TheCall.ePatient["ePatient.07"][0]== null) &&(TheCall.ePatient["ePatient.07"][0]== "")) 
        {
            v2XML.writeElementString("E06_06", "-5");
        }                
        else
        {
            v2XML.writeElementString("E06_06", TheCall.ePatient["ePatient.07"][0]);        
        }
    };

    if (typeof TheCall.ePatient["ePatient.08"] != 'undefined') 
    {
        if ((TheCall.ePatient["ePatient.08"][0]== null) &&(TheCall.ePatient["ePatient.08"][0]== "")) 
        {
            v2XML.writeElementString("E06_07", "-5");
        }                
        else
        {
            v2XML.writeElementString("E06_07", TheCall.ePatient["ePatient.08"][0]);        
        }
    };
    v2XML.writeEndElement("E06_04_0");

    if (typeof TheCall.ePatient["ePatient.09"] != 'undefined') 
    {
        if ((TheCall.ePatient["ePatient.09"][0]== null) &&(TheCall.ePatient["ePatient.09"][0]== "")) 
        {
            v2XML.writeElementString("E06_08", "-5");
        }                
        else
        {
            v2XML.writeElementString("E06_08", TheCall.ePatient["ePatient.09"][0]);        
        }
    };

    if (typeof TheCall.ePatient["ePatient.10"] != 'undefined') 
    {
        if ((TheCall.ePatient["ePatient.10"][0]== null) &&(TheCall.ePatient["ePatient.10"][0]== "")) 
        {
            v2XML.writeElementString("E06_10", "-5");
        }                
        else
        {
            v2XML.writeElementString("E06_10", TheCall.ePatient["ePatient.10"][0]);        
        }
    };

    if (typeof TheCall.ePatient["ePatient.13"] != 'undefined') {
        if (specVal.indexOf(TheCall.ePatient["ePatient.13"][0]) != -1) 
        {
            v2XML.writeElementString("E06_11", specMap[TheCall.ePatient["ePatient.13"][0]]);
        }                
        else 
        {
            v2XML.writeElementString("E06_11", TheCall.ePatient["ePatient.13"][0]);
        }
    };

    if (typeof TheCall.ePatient["ePatient.14"] != 'undefined') {
        if (specVal.indexOf(TheCall.ePatient["ePatient.14"][0]) != -1) 
        {
            v2XML.writeElementString("E06_12", specMap[TheCall.ePatient["ePatient.14"][0]]);
            v2XML.writeElementString("E06_13", specMap[TheCall.ePatient["ePatient.14"][0]]);
        }                
        else 
        {
           for (var i = 0; i < TheCall.ePatient["ePatient.14"].length; i++) 
            {
                v2XML.writeElementString("E06_12", TheCall.ePatient["ePatient.14"][i]);
           };

            if(TheCall.ePatient["ePatient.14"].indexOf("2514007") != -1) 
            {
                v2XML.writeElementString("E06_13", "690");
            }
            else
            {
                v2XML.writeElementString("E06_13", "695");
            };

        }
    };

    if (typeof TheCall.ePatient["ePatient.15"] != 'undefined') 
    {
        if (specVal.indexOf(TheCall.ePatient["ePatient.15"][0]) != -1) 
        {
            v2XML.writeElementString("E06_15", specMap[TheCall.ePatient["ePatient.15"][0]]);
        }                
        else 
        {
            v2XML.writeElementString("E06_15", TheCall.ePatient["ePatient.15"][0]);
        }
    };
    
    if (typeof TheCall.ePatient["ePatient.16"] != 'undefined') {
        if (specVal.indexOf(TheCall.ePatient["ePatient.16"][0]) != -1) 
        {
            v2XML.writeElementString("E06_15", "");
        }                
        else 
        {
            v2XML.writeElementString("E06_15", TheCall.ePatient["ePatient.16"][0]);
        }
    };

    v2XML.writeEndElement("E06_14_0");

    if (typeof TheCall.ePatient["ePatient.17"] != 'undefined') {
        if (specVal.indexOf(TheCall.ePatient["ePatient.17"][0]) != -1) 
        {
            v2XML.writeElementString("E06_16", "");
        }                
        else 
        {
            v2XML.writeElementString("E06_16", TheCall.ePatient["ePatient.17"][0]);
        }
    };

    if (typeof TheCall.ePatient["ePatient.18"] != 'undefined') {
        if (specVal.indexOf(TheCall.ePatient["ePatient.18"][0]) != -1) 
        {
            v2XML.writeElementString("E06_17", "");
        }                
        else 
        {
            v2XML.writeElementString("E06_17", TheCall.ePatient["ePatient.18"][0]);
        }
    };


    //Driver's Licence
    v2XML.writeStartElement("E06_19_0");
    if (typeof TheCall.ePatient["ePatient.20"] != 'undefined') 
    {
        if ((TheCall.ePatient["ePatient.20"][0]== null) &&(TheCall.ePatient["ePatient.20"][0]== "")) 
        {
            v2XML.writeElementString("E06_18", "-5");
        }                
        else
        {
            v2XML.writeElementString("E06_18", TheCall.ePatient["ePatient.20"][0]);        
        }
    };
    if (typeof TheCall.ePatient["ePatient.21"] != 'undefined') 
    {
        if ((TheCall.ePatient["ePatient.21"][0]== null) &&(TheCall.ePatient["ePatient.21"][0]== "")) 
        {
            v2XML.writeElementString("E06_19", "-5");
        }                
        else
        {
            v2XML.writeElementString("E06_19", TheCall.ePatient["ePatient.21"][0]);        
        }
    };

    v2XML.writeEndElement("E06_19_0");
    v2XML.writeEndElement("E06");

    //Payments
    v2XML.writeStartElement("E07");
    if (typeof TheCall.ePayment["ePayment.01"] != 'undefined') {
        if (specVal.indexOf(TheCall.ePayment["ePayment.01"][0]) != -1) 
        {
            v2XML.writeElementString("E07_01", specMap[TheCall.ePayment[0]["ePayment.01"][0]]);
        }                
        else 
        {
            v2XML.writeElementString("E07_01", TheCall.ePayment["ePayment.01"][0]);
        }
    };

    if (typeof TheCall.ePayment["ePayment.02"] != 'undefined') {
        if (specVal.indexOf(TheCall.ePayment["ePayment.02"][0]) != -1) 
        {
            v2XML.writeElementString("E07_02", specMap[TheCall.ePayment["ePayment.02"][0]]);
        }                
        else 
        {
            v2XML.writeElementString("E07_02", TheCall.ePayment["ePayment.02"][0]);
        }
    };


    
    //Insurance Companies
    for (var i = 0; i < TheCall.ePayments.InsuranceGroup.length; i++) 
    {
        v2XML.writeStartElement("E07_03_0");

        if (typeof TheCall.ePayments.InsuranceGroup[i]["ePayment.09"] != 'undefined') 
        {
            if ((TheCall.ePayments.InsuranceGroup[i]["ePayment.09"][0]== null) &&(TheCall.ePayments.InsuranceGroup[i]["ePayment.09"][0]== "")) 
            {
                v2XML.writeElementString("E07_03", "-5");
            }                
            else
            {
                v2XML.writeElementString("E07_03", TheCall.ePayments.InsuranceGroup[i]["ePayment.09"][0]);        
            }
        };


        if (typeof TheCall.ePayments.InsuranceGroup[i]["ePayment.11"] != 'undefined') 
        {
            if ((TheCall.ePayments.InsuranceGroup[i]["ePayment.11"][0]== null) &&(TheCall.ePayments.InsuranceGroup[i]["ePayment.11"][0]== "")) 
            {
                v2XML.writeElementString("E07_04", "-5");
            }                
            else
            {
                v2XML.writeElementString("E07_04", setV2(TheCall.ePayments.InsuranceGroup[i]["ePayment.11"][0]));        
            }
        };

        //Address
        
        if (typeof TheCall.ePayments.InsuranceGroup[i]["ePayment.12"] != 'undefined') 
        {
            if ((TheCall.ePayments.InsuranceGroup[i]["ePayment.12"][0]== null) &&(TheCall.ePayments.InsuranceGroup[i]["ePayment.12"][0]== "")) 
            {
                v2XML.writeElementString("E07_05", "-5");
            }                
            else
            {
                v2XML.writeElementString("E07_05", TheCall.ePayments.InsuranceGroup[i]["ePayment.12"][0]);        
            }
        };

        if (typeof TheCall.ePayments.InsuranceGroup[i]["ePayment.13"] != 'undefined') 
        {
            if ((TheCall.ePayments.InsuranceGroup[i]["ePayment.13"][0]== null) &&(TheCall.ePayments.InsuranceGroup[i]["ePayment.13"][0]== "")) 
            {
                v2XML.writeElementString("E07_06", "-5");
            }                
            else
            {
                v2XML.writeElementString("E07_06", TheCall.ePayments.InsuranceGroup[i]["ePayment.13"][0]);        
            }
        };

        if (typeof TheCall.ePayments.InsuranceGroup[i]["ePayment.14"] != 'undefined') 
        {
            if ((TheCall.ePayments.InsuranceGroup[i]["ePayment.14"][0]== null) &&(TheCall.ePayments.InsuranceGroup[i]["ePayment.14"][0]== "")) 
            {
                v2XML.writeElementString("E07_07", "-5");
            }                
            else
            {
                v2XML.writeElementString("E07_07", TheCall.ePayments.InsuranceGroup[i]["ePayment.14"][0]);        
            }
        };

        if (typeof TheCall.ePayments.InsuranceGroup[i]["ePayment.15"] != 'undefined') 
        {
            if ((TheCall.ePayments.InsuranceGroup[i]["ePayment.15"][0]== null) &&(TheCall.ePayments.InsuranceGroup[i]["ePayment.15"][0]== "")) 
            {
                v2XML.writeElementString("E07_08", "-5");
            }                
            else
            {
                v2XML.writeElementString("E07_08", TheCall.ePayments.InsuranceGroup[i]["ePayment.15"][0]);        
            }
        };
        v2XML.writeEndElement("E07_05_0");

        if (typeof TheCall.ePayments.InsuranceGroup[i]["ePayment.17"] != 'undefined') 
        {
            if ((TheCall.ePayments.InsuranceGroup[i]["ePayment.17"][0]== null) &&(TheCall.ePayments.InsuranceGroup[i]["ePayment.17"][0]== "")) 
            {
                v2XML.writeElementString("E07_09", "-5");
            }                
            else
            {
                v2XML.writeElementString("E07_09", TheCall.ePayments.InsuranceGroup[i]["ePayment.17"][0]);        
            }
        };

        if (typeof TheCall.ePayments.InsuranceGroup[i]["ePayment.18"] != 'undefined') 
        {
            if ((TheCall.ePayments.InsuranceGroup[i]["ePayment.18"][0]== null) &&(TheCall.ePayments.InsuranceGroup[i]["ePayment.18"][0]== "")) 
            {
                v2XML.writeElementString("E07_10", "-5");
            }                
            else
            {
                v2XML.writeElementString("E07_10", TheCall.ePayments.InsuranceGroup[i]["ePayment.18"][0]);        
            }
        };
        if (typeof TheCall.ePayments.InsuranceGroup[i]["ePayment.19"] != 'undefined') 
        {
            if ((TheCall.ePayments.InsuranceGroup[i]["ePayment.19"][0]== null) &&(TheCall.ePayments.InsuranceGroup[i]["ePayment.19"][0]== "")) 
            {
                v2XML.writeElementString("E07_11", "-5");
            }                
            else
            {
                v2XML.writeElementString("E07_11", TheCall.ePayments.InsuranceGroup[i]["ePayment.19"][0]);        
            }
        };

        if (typeof TheCall.ePayments.InsuranceGroup[i]["ePayment.20"] != 'undefined') 
        {
            if ((TheCall.ePayments.InsuranceGroup[i]["ePayment.20"][0]== null) &&(TheCall.ePayments.InsuranceGroup[i]["ePayment.20"][0]== "")) 
            {
                v2XML.writeElementString("E07_12", "-5");
            }                
            else
            {
                v2XML.writeElementString("E07_12", TheCall.ePayments.InsuranceGroup[i]["ePayment.20"][0]);        
            }
        };

        if (typeof TheCall.ePayments.InsuranceGroup[i]["ePayment.21"] != 'undefined') 
        {
            if ((TheCall.ePayments.InsuranceGroup[i]["ePayment.21"][0]== null) &&(TheCall.ePayments.InsuranceGroup[i]["ePayment.21"][0]== "")) 
            {
                v2XML.writeElementString("E07_13", "-5");
            }                
            else
            {
                v2XML.writeElementString("E07_13", TheCall.ePayments.InsuranceGroup[i]["ePayment.21"][0]);        
            }
        };

        if (typeof TheCall.ePayments.InsuranceGroup[i]["ePayment.22"] != 'undefined') 
        {
            if ((TheCall.ePayments.InsuranceGroup[i]["ePayment.22"][0]== null) &&(TheCall.ePayments.InsuranceGroup[i]["ePayment.22"][0]== "")) 
            {
                v2XML.writeElementString("E07_14", "-5");
            }                
            else
            {
                v2XML.writeElementString("E07_14", setV2(TheCall.ePayments.InsuranceGroup[i]["ePayment.22"][0]));        
            }
        };

        v2XML.writeEndElement("E07_03_0");
    };

    if (typeof TheCall.ePayments["ePayment.21"] != 'undefined') 
    {
        if ((TheCall.ePayments.InsuranceGroup[i]["ePayment.21"][0]== null) &&(TheCall.ePayments.InsuranceGroup[i]["ePayment.21"][0]== "")) 
        {
            v2XML.writeElementString("E07_13", "-5");
        }                
        else
        {
            v2XML.writeElementString("E07_13", TheCall.ePayments.InsuranceGroup[i]["ePayment.21"][0]);        
        }
    };
    if (typeof TheCall.eSituation["eSituation.14"] != 'undefined') 
    {
        if (specVal.indexOf(TheCall.eSituation["eSituation.14"][0]) != -1) 
        {
            v2XML.writeElementString("E07_15", specMap[TheCall.eSituation["eSituation.14"][0]]);
        }                
        else
        {
            v2XML.writeElementString("E07_15", TheCall.eSituation["eSituation.14"][0]);        
        }
    };

    if (typeof TheCall.eSituation["eSituation.15"]  != 'undefined') 
    {
        if ((TheCall.eSituation["eSituation.15"] [0]== null) &&(TheCall.eSituation["eSituation.15"] [0]== "")) 
        {
            v2XML.writeElementString("E07_16", "-5");
        }                
        else
        {
            v2XML.writeElementString("E07_16", setV2(TheCall.eSituation["eSituation.15"][0]));        
        }
    };

    if (typeof TheCall.eSituation["eSituation.16"]  != 'undefined') 
    {
        if ((TheCall.eSituation["eSituation.16"] [0]== null) &&(TheCall.eSituation["eSituation.16"] [0]== "")) 
        {
            v2XML.writeElementString("E07_17", "-5");
        }                
        else
        {
            v2XML.writeElementString("E07_17", setV2(TheCall.eSituation["eSituation.16"][0]));        
        }
    };


    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E07_17");
    v2XML.writeElementString("E07_17", val[0][0]);//NA

    //closest relative
    v2XML.writeStartElement("E07_18_0");
    //closest relative Name
    v2XML.writeStartElement("E07_18_1");
    if (typeof TheCall.ePayment["ePayment.23"]  != 'undefined') 
    {
        if ((TheCall.ePayment["ePayment.23"][0]== null) &&(TheCall.ePayment["ePayment.23"][0]== "")) 
        {
            v2XML.writeElementString("E07_18", "-5");
        }                
        else
        {
            v2XML.writeElementString("E07_18", TheCall.ePayment["ePayment.23"][0]);        
        }
    };
    if (typeof TheCall.ePayment["ePayment.24"]  != 'undefined') 
    {
        if ((TheCall.ePayment["ePayment.24"][0]== null) &&(TheCall.ePayment["ePayment.24"][0]== "")) 
        {
            v2XML.writeElementString("E07_19", "-5");
        }                
        else
        {
            v2XML.writeElementString("E07_19", TheCall.ePayment["ePayment.24"][0]);        
        }
    };
    if (typeof TheCall.ePayment["ePayment.25"]  != 'undefined') 
    {
        if ((TheCall.ePayment["ePayment.25"][0]== null) &&(TheCall.ePayment["ePayment.25"][0]== "")) 
        {
            v2XML.writeElementString("E07_20", "-5");
        }                
        else
        {
            v2XML.writeElementString("E07_20", TheCall.ePayment["ePayment.25"][0]);        
        }
    };

    v2XML.writeEndElement("E07_18_1");

    //closest relative Address
    v2XML.writeStartElement("E07_21_0");

    if (typeof TheCall.ePayment["ePayment.26"]  != 'undefined') 
    {
        if ((TheCall.ePayment["ePayment.26"][0]== null) &&(TheCall.ePayment["ePayment.26"][0]== "")) 
        {
            v2XML.writeElementString("E07_21", "-5");
        }                
        else
        {
            v2XML.writeElementString("E07_21", TheCall.ePayment["ePayment.26"][0]);        
        }
    };

    if (typeof TheCall.ePayment["ePayment.27"]  != 'undefined') 
    {
        if ((TheCall.ePayment["ePayment.26"][0]== null) &&(TheCall.ePayment["ePayment.27"][0]== "")) 
        {
            v2XML.writeElementString("E07_22", "-5");
        }                
        else
        {
            v2XML.writeElementString("E07_22", TheCall.ePayment["ePayment.27"][0]);        
        }
    };

    if (typeof TheCall.ePayment["ePayment.28"]  != 'undefined') 
    {
        if ((TheCall.ePayment["ePayment.28"][0]== null) &&(TheCall.ePayment["ePayment.28"][0]== "")) 
        {
            v2XML.writeElementString("E07_23", "-5");
        }                
        else
        {
            v2XML.writeElementString("E07_23", TheCall.ePayment["ePayment.28"][0]);        
        }
    };


    if (typeof TheCall.ePayment["ePayment.29"]  != 'undefined') 
    {
        if ((TheCall.ePayment["ePayment.29"][0]== null) &&(TheCall.ePayment["ePayment.29"][0]== "")) 
        {
            v2XML.writeElementString("E07_24", "-5");
        }                
        else
        {
            v2XML.writeElementString("E07_24", TheCall.ePayment["ePayment.29"][0]);        
        }
    };

    v2XML.writeEndElement("E07_21_0");
    if (typeof TheCall.ePayment["ePayment.30"]  != 'undefined') 
    {
        if ((TheCall.ePayment["ePayment.30"][0]== null) &&(TheCall.ePayment["ePayment.30"][0]== "")) 
        {
            v2XML.writeElementString("E07_25", "-5");
        }                
        else
        {
            v2XML.writeElementString("E07_25", TheCall.ePayment["ePayment.30"][0]);        
        }
    };

    if (typeof TheCall.ePayment["ePayment.31"]  != 'undefined') 
    {
        if ((TheCall.ePayment["ePayment.31"][0]== null) &&(TheCall.ePayment["ePayment.31"][0]== "")) 
        {
            v2XML.writeElementString("E07_26", "-5");
        }                
        else
        {
            v2XML.writeElementString("E07_26", setV2(TheCall.ePayment["ePayment.31"][0]));        
        }
    };
    v2XML.writeEndElement("E07_18_0");

    //Employer
    v2XML.writeStartElement("E07_27_0");
    if (typeof TheCall.ePayment["ePayment.33"]  != 'undefined') 
    {
        if ((TheCall.ePayment["ePayment.33"][0]== null) &&(TheCall.ePayment["ePayment.33"][0]== "")) 
        {
            v2XML.writeElementString("E07_27", "-5");
        }                
        else
        {
            v2XML.writeElementString("E07_27", setV2(TheCall.ePayment["ePayment.33"][0]));        
        }
    };

    //Employer Address
    v2XML.writeStartElement("E07_28_0");
    if (typeof TheCall.ePayment["ePayment.34"]  != 'undefined') 
    {
        if ((TheCall.ePayment["ePayment.34"][0]== null) &&(TheCall.ePayment["ePayment.34"][0]== "")) 
        {
            v2XML.writeElementString("E07_28", "-5");
        }                
        else
        {
            v2XML.writeElementString("E07_28", setV2(TheCall.ePayment["ePayment.34"][0]));        
        }
    };

    if (typeof TheCall.ePayment["ePayment.35"]  != 'undefined') 
    {
        if ((TheCall.ePayment["ePayment.35"][0]== null) &&(TheCall.ePayment["ePayment.35"][0]== "")) 
        {
            v2XML.writeElementString("E07_29", "-5");
        }                
        else
        {
            v2XML.writeElementString("E07_29", setV2(TheCall.ePayment["ePayment.35"][0]));        
        }
    };

    if (typeof TheCall.ePayment["ePayment.36"]  != 'undefined') 
    {
        if ((TheCall.ePayment["ePayment.36"][0]== null) &&(TheCall.ePayment["ePayment.36"][0]== "")) 
        {
            v2XML.writeElementString("E07_30", "-5");
        }                
        else
        {
            v2XML.writeElementString("E07_30", setV2(TheCall.ePayment["ePayment.36"][0]));        
        }
    };

    if (typeof TheCall.ePayment["ePayment.37"]  != 'undefined') 
    {
        if ((TheCall.ePayment["ePayment.37"][0]== null) &&(TheCall.ePayment["ePayment.37"][0]== "")) 
        {
            v2XML.writeElementString("E07_31", "-5");
        }                
        else
        {
            v2XML.writeElementString("E07_31", setV2(TheCall.ePayment["ePayment.37"][0]));        
        }
    };
       
    v2XML.writeEndElement("E07_28_0");
    v2XML.writeEndElement("E07_27_0");
    if (typeof TheCall.ePayment["ePayment.39"]  != 'undefined') 
    {
        if ((TheCall.ePayment["ePayment.39"][0]== null) &&(TheCall.ePayment["ePayment.39"][0]== "")) 
        {
            v2XML.writeElementString("E07_32", "-5");
        }                
        else
        {
            v2XML.writeElementString("E07_32", TheCall.ePayment["ePayment.39"][0]);        
        }
    };
    if (typeof TheCall.ePayment["ePayment.40"]  != 'undefined') 
    {
        if ((TheCall.ePayment["ePayment.40"][0]== null) &&(TheCall.ePayment["ePayment.40"][0]== "")) 
        {
            v2XML.writeElementString("E07_33", "-5");
        }                
        else
        {
            v2XML.writeElementString("E07_33", setV2(TheCall.ePayment["ePayment.40"][0]));        
        }
    };

    if (typeof TheCall.ePayment["ePayment.50"]  != 'undefined') 
    {
        if ((TheCall.ePayment["ePayment.50"][0]== null) &&(TheCall.ePayment["ePayment.50"][0]== "")) 
        {
            v2XML.writeElementString("E07_34", "-5");
        }                
        else
        {
            v2XML.writeElementString("E07_34", SETv2(TheCall.ePayment["ePayment.50"][0]));        
        }
    };

    v2XML.writeStartElement("E07_35_0");
    if (typeof TheCall.ePayment["ePayment.51"]  != 'undefined') 
    {
        if ((TheCall.ePayment["ePayment.51"][0]== null) &&(TheCall.ePayment["ePayment.51"][0]== "")) 
        {
            v2XML.writeElementString("E07_35", "-5");
            v2XML.writeElementString("E07_36", "-5");
            v2XML.writeElementString("E07_37", "-5");
        }                
        else
        {
            v2XML.writeElementString("E07_35", SETv2(TheCall.ePayment["ePayment.51"][0]));        
            v2XML.writeElementString("E07_36", "-5");
            v2XML.writeElementString("E07_37", "-5");
        }
    };

    v2XML.writeEndElement("E07_35_0");
    v2XML.writeEndElement("E07");

    //Scene
    v2XML.writeStartElement("E08");
    if (typeof TheCall.eScene["eScene.02"] != 'undefined') {
        if (specVal.indexOf(TheCall.eScene["eScene.02"][0]) != -1) 
        {
            v2XML.writeElementString("E08_01", specMap[TheCall.eScene["eScene.02"][0]]);
        }                
        else 
        {
            v2XML.writeElementString("E08_01", TheCall.eScene["eScene.02"][0]);
        }
    };


    if (typeof TheCall.eScene["eScene.04"] != 'undefined') {
        if (specVal.indexOf(TheCall.eScene["eScene.04"][0]) != -1) 
        {
            v2XML.writeElementString("E08_02", specMap[TheCall.eScene["eScene.04"][0]]);
        }                
        else 
        {
            v2XML.writeElementString("E08_02",  setV2(TheCall.eScene["eScene.04"][0]));
        }
    };
    //The date/time differential between the initial responder and the EMS unit arriving on the scene, if applicable.
    console.log("time between eTimes.05 and eTimes.06");
    v2XML.writeElementString("E08_03",  "-10");

    if (typeof TheCall.eScene["eScene.05"] != 'undefined') {
        if ((TheCall.eScene["eScene.05"][0]== null) &&(TheCall.eScene["eScene.05"][0]== "")) 
        {
            v2XML.writeElementString("E08_04",  "");
        }
        else 
        {
            v2XML.writeElementString("E08_04",  setV2(TheCall.eScene["eScene.04"][0]));
        }
    };

    if (typeof TheCall.eScene["eScene.06"] != 'undefined') {
        if (specVal.indexOf(TheCall.eScene["eScene.04"][0]) != -1) 
        {
            v2XML.writeElementString("E08_05", specMap[TheCall.eScene["eScene.06"][0]]);
        }                
        else 
        {
            v2XML.writeElementString("E08_05",  setV2(TheCall.eScene["eScene.06"][0]));
        }
    };

    if (typeof TheCall.eScene["eScene.07"] != 'undefined') {
        if (specVal.indexOf(TheCall.eScene["eScene.04"][0]) != -1) 
        {
            v2XML.writeElementString("E08_06", specMap[TheCall.eScene["eScene.07"][0]]);
        }                
        else 
        {
            v2XML.writeElementString("E08_06",  setV2(TheCall.eScene["eScene.07"][0]));
        }
    };


    if (typeof TheCall.eScene["eScene.09"] != 'undefined') {
        if (specVal.indexOf(TheCall.eScene["eScene.05"][0]) != -1) 
        {
            v2XML.writeElementString("E08_07", specMap[TheCall.eScene["eScene.09"][0]]);
        }                
        else 
        {
            v2XML.writeElementString("E08_07",  setV2(TheCall.eScene["eScene.09"][0]));
        }
    };
    /*
    NEIL

    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E08_05");
    v2XML.writeElementString("E08_05", val[0][0]);//NA        
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E08_07");
    v2XML.writeElementString("E08_07", val[0][0]);//NA    
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E08_08");
    v2XML.writeElementString("E08_08", val[0][0]);//NA        
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E08_06");
    v2XML.writeElementString("E08_06", val[0][0]);//NA    
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E08_09");
    v2XML.writeElementString("E08_09", val[0][0]);//NA    
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E08_10");
    v2XML.writeElementString("E08_10", val[0][0]);

    //Incident Address
    v2XML.writeStartElement("E08_11_0");
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E08_11");
    v2XML.writeElementString("E08_11", val[0][0]);//NA    
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E08_12");
    v2XML.writeElementString("E08_12", val[0][0]);//NA
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E08_13");
    v2XML.writeElementString("E08_13", val[0][0]);//NA  
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E08_14");
    v2XML.writeElementString("E08_14", val[0][0]);//NA  
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E08_15");
    v2XML.writeElementString("E08_15", val[0][0]);//NA  
    v2XML.writeEndElement("E08_11_0");
    v2XML.writeEndElement("E08");

    
    //Situation
    v2XML.writeStartElement("E09");
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E09_01");
    v2XML.writeElementString("E09_01", val[0][0]);  //NA
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E09_02");
    v2XML.writeElementString("E09_02", val[0][0]); //NA
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E09_03");
    v2XML.writeElementString("E09_03", val[0][0]);//NA
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E09_04");
    v2XML.writeElementString("E09_04", val[0][0]);//NA
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E09_05");
    v2XML.writeElementString("E09_05", val[0][0]);//NA

    //Cheif Complaint
    v2XML.writeStartElement("E09_06_0");
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E09_06");
    v2XML.writeElementString("E09_06", val[0][0]);//NATIONAL
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E09_07");
    v2XML.writeElementString("E09_07", val[0][0]);
    v2XML.writeEndElement("E09_06_0");

    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E09_08");
    v2XML.writeElementString("E09_08", val[0][0]); //NA

    //Duration of Complaint
    v2XML.writeStartElement("E09_09_0");
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E09_09");
    v2XML.writeElementString("E09_09", val[0][0]);
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E09_10");
    v2XML.writeElementString("E09_10", val[0][0]);
    v2XML.writeEndElement("E09_09_0");

    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E09_11");
    v2XML.writeElementString("E09_11", val[0][0]);//NA
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E09_12");
    v2XML.writeElementString("E09_12", val[0][0]);//NA
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E09_13");
    v2XML.writeElementString("E09_13", val[0][0]);//NA
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E09_14");
    v2XML.writeElementString("E09_14", val[0][0]);//NA
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E09_15");
    v2XML.writeElementString("E09_15", val[0][0]);//NA
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E09_16");
    v2XML.writeElementString("E09_16", val[0][0]);//NA

    v2XML.writeEndElement("E09");

    //Situation/Trauma
    v2XML.writeStartElement("E10");
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E10_01");
    v2XML.writeElementString("E10_01", val[0][0]);//NATIONAL - NA    
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E10_02");
    v2XML.writeElementString("E10_02", val[0][0]);//NA    
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E10_03");
    v2XML.writeElementString("E10_03", val[0][0]);//NA       
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E10_04");
    v2XML.writeElementString("E10_04", val[0][0]);//NA    
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E10_05");
    v2XML.writeElementString("E10_05", val[0][0]);//NA

    //Position of Patient
    v2XML.writeStartElement("E09_06_0");
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E10_06");
    v2XML.writeElementString("E10_06", val[0][0]);
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E10_07");
    v2XML.writeElementString("E10_07", val[0][0]);//NA    
    v2XML.writeEndElement("E09_09_0");

    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E10_08");
    v2XML.writeElementString("E10_08", val[0][0]);//NA    

    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E10_06");
    v2XML.writeElementString("E10_06", val[0][0]);//NA    
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E10_09");
    v2XML.writeElementString("E10_09", val[0][0]);//NA    
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E10_10");
    v2XML.writeElementString("E10_10", val[0][0]);


    //Situation/CPR

    v2XML.writeStartElement("E11");
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E11_01");
    v2XML.writeElementString("E11_01", val[0][0]);//NATIONAL - NA    
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E11_02");
    v2XML.writeElementString("E11_02", val[0][0]);//NATIONAL - NA        
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E11_03");
    v2XML.writeElementString("E11_03", val[0][0]);//NATIONAL - NA           
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E11_04");
    v2XML.writeElementString("E11_04", val[0][0]); //NA  
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E11_05");
    v2XML.writeElementString("E11_05", val[0][0]);//NA  
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E11_06");
    v2XML.writeElementString("E11_06", val[0][0]);//NA  
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E11_07");
    v2XML.writeElementString("E11_07", val[0][0]);//NA    
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E11_08");
    v2XML.writeElementString("E11_08", val[0][0]);//NA        
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E11_06");
    v2XML.writeElementString("E11_06", val[0][0]);//NA    
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E11_09");
    v2XML.writeElementString("E11_09", val[0][0]);
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E11_10");
    v2XML.writeElementString("E11_10", val[0][0]); //NA
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E11_11");
    v2XML.writeElementString("E11_11", val[0][0]);  //NA   
    v2XML.writeEndElement("E11");

    //Medical History
    v2XML.writeStartElement("E12");
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E12_01");
    v2XML.writeElementString("E12_01", val[0][0]);  //NATIONAL NA
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E12_02");
    v2XML.writeElementString("E12_02", val[0][0]); //NATIONAL NA
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E12_03");
    v2XML.writeElementString("E12_03", val[0][0]);//NA

    //Practicioner's Name
    v2XML.writeStartElement("E12_04_0");
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E12_04");
    v2XML.writeElementString("E12_04", val[0][0]);//NA
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E12_05");
    v2XML.writeElementString("E12_05", val[0][0]);//NA
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E12_06");
    v2XML.writeElementString("E12_06", val[0][0]);//NA
    v2XML.writeEndElement("E12_04_0");

    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E12_07");
    for (var i = 0; i < v2obj.length; i++) {
        v2XML.writeElementString("E12_07", val[0][0]);//NA 
    };
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E12_08");
    for (var i = 0; i < v2obj.length; i++) {
        v2XML.writeElementString("E12_08", val[0][0]);//NA
    };
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E12_09");
    for (var i = 0; i < v2obj.length; i++) {
        v2XML.writeElementString("E12_09", val[0][0]);//NA
    };
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E12_10");
    for (var i = 0; i < v2obj.length; i++) {
        v2XML.writeElementString("E12_10", val[0][0]);//NA
    };
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E12_11");
    v2XML.writeElementString("E12_11", val[0][0]);//NATIONAL
    for (var i = 0; i < v2obj.length; i++) {
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E12_12");
        v2XML.writeElementString("E12_12", val[0][i]);

        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E12_13");
        v2XML.writeElementString("E12_13", val[0][0]);//NA    
    };
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E12_16");
    v2XML.writeElementString("E12_16", val[0][0]);//NA
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E12_17");
    v2XML.writeElementString("E12_17", val[0][0]);//NA

    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E12_19");
    for (var i = 0; i < v2obj.length; i++) {
        v2XML.writeElementString("E12_19", val[0][0]);//NA
    };
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E12_20");
    v2XML.writeElementString("E12_20", val[0][0]);//NA
    v2XML.writeEndElement("E12");

    //Narrative
    v2XML.writeStartElement("E13");
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E13_01");
    v2XML.writeElementString("E11_01", val[0][0]);//NA
    v2XML.writeEndElement("E13");

    //Assessment/ Vital Signs 
    for (var i = 0; i < v2obj.length; i++) {
        v2XML.writeStartElement("E14");
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E14_01");
        v2XML.writeElementString("E14_01", val[0][0]);
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E14_02");
        v2XML.writeElementString("E14_02", val[0][0]); //NA

        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E14_03");
        for (var j = 0; j < v2obj.length; j++) {
            v2XML.writeElementString("E14_03", val[0][0]);//NA
        };

        //Blood Pressure Structure
        v2XML.writeStartElement("E14_04_0");
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E14_04");
        v2XML.writeElementString("E14_04", val[0][0]);//NA
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E14_05");
        v2XML.writeElementString("E14_05", val[0][0]);//NA
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E14_06");
        v2XML.writeElementString("E14_06", val[0][0]);//NA
        v2XML.writeEndElement("E14_04_0");

        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E14_07");
        v2XML.writeElementString("E14_07", val[0][0]);
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E14_08");
        v2XML.writeElementString("E14_08", val[0][0]);
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E14_09");
        v2XML.writeElementString("E14_09", val[0][0]);
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E14_10");
        v2XML.writeElementString("E14_10", val[0][0]);//NA
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E14_11");
        v2XML.writeElementString("E14_11", val[0][0]);
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E14_12");
        v2XML.writeElementString("E14_12", val[0][0]);//NA
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E14_13");
        v2XML.writeElementString("E14_13", val[0][0]);
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E14_14");
        v2XML.writeElementString("E14_14", val[0][0]);

        //GCS Score Structure
        v2XML.writeStartElement("E14_15_0");
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E14_15");
        v2XML.writeElementString("E14_15", val[0][0]);
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E14_16");
        v2XML.writeElementString("E14_16", val[0][0]);
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E14_17");
        v2XML.writeElementString("E14_17", val[0][0]);
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E14_18");
        v2XML.writeElementString("E14_18", val[0][0]);//NA
        v2XML.writeEndElement("E14_15_0");


        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E14_19");
        v2XML.writeElementString("E14_19", val[0][0]);

        //Temperature Structure
        v2XML.writeStartElement("E14_20_0");
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E14_20");
        v2XML.writeElementString("E14_20", val[0][0]);//NATIONAL
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E14_21");
        v2XML.writeElementString("E14_21", val[0][0]);//NA
        v2XML.writeEndElement("E14_20_0");

        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E14_22");
        v2XML.writeElementString("E14_22", val[0][0]);//NA
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E14_23");
        v2XML.writeElementString("E14_23", val[0][0]);
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E14_24");
        v2XML.writeElementString("E14_24", val[0][0]);//NA
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E14_25");
        v2XML.writeElementString("E14_25", val[0][0]);//NA
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E14_26");
        v2XML.writeElementString("E14_26", val[0][0]);
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E14_27");
        v2XML.writeElementString("E14_27", val[0][0]);
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E14_28");
        v2XML.writeElementString("E14_28", val[0][0]);
        v2XML.writeEndElement("E14");
    };

    //Assessment/ Injury 
    
    v2XML.writeStartElement("E16");
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_01");
    for (var j = 0; j < v2obj.length; j++) {
        v2XML.writeElementString("E16_01", val[0][0]);//NA    
    };
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_02");
    for (var j = 0; j < v2obj.length; j++) {
        v2XML.writeElementString("E16_02", val[0][0]);//NA        
    };
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_03");
    for (var j = 0; j < v2obj.length; 7j++) {
        v2XML.writeElementString("E16_03", val[0][0]);//NATIONAL - NA           
    };
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_04");
    for (var j = 0; j < v2obj.length; j++) {
        v2XML.writeElementString("E16_04", val[0][0]); //NA  
    };
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_05");
    for (var j = 0; j < v2obj.length; j++) {
        v2XML.writeElementString("E16_05", val[0][0]);//NA  
    };
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_06");
    for (var j = 0; j < v2obj.length; j++) {
        v2XML.writeElementString("E16_06", val[0][0]);//NA  
    };
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_07");
    for (var j = 0; j < v2obj.length; j++) {
        v2XML.writeElementString("E16_07", val[0][0]);//NA    
    };
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_08");
    for (var j = 0; j < v2obj.length; j++) {
        v2XML.writeElementString("E16_08", val[0][0]);//NA        
    };
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_06");
    for (var j = 0; j < v2obj.length; j++) {
        v2XML.writeElementString("E16_06", val[0][0]);//NA    
    };
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_09");
    for (var j = 0; j < v2obj.length; j++) {
        v2XML.writeElementString("E16_09", val[0][0]);
    };
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_10");
    for (var j = 0; j < v2obj.length; j++) {
        v2XML.writeElementString("E16_10", val[0][0]); //NA
    };
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_11");
    for (var j = 0; j < v2obj.length; j++) {
        v2XML.writeElementString("E16_11", val[0][0]);  //NA   
    };
    v2XML.writeEndElement("E16");




    //Assessment/ Exam 
    v2XML.writeStartElement("E16");
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_01");
    v2XML.writeElementString("E16_01", val[0][0]);

    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_02");
    v2XML.writeElementString("E16_02", val[0][0]);//NA        

    for (var i = 0; i < v2obj.length; i++) {
        v2XML.writeStartElement("E16_00_0");
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_03");
        v2XML.writeElementString("E16_03", val[0][0]);

        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_04");
        for (var j = 0; j < v2obj.length; j++) {
            v2XML.writeElementString("E16_04", val[0][0]); //NA  
        };
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_05");
        for (var j = 0; j < v2obj.length; j++) {
            v2XML.writeElementString("E16_05", val[0][0]);//NA  
        };
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_06");
        for (var j = 0; j < v2obj.length; j++) {
            v2XML.writeElementString("E16_06", val[0][0]);//NA  
        };
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_07");
        for (var j = 0; j < v2obj.length; j++) {
            v2XML.writeElementString("E16_07", val[0][0]);//NA    
        };
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_08");
        for (var j = 0; j < v2obj.length; j++) {
            v2XML.writeElementString("E16_08", val[0][0]);//NA        
        };
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_06");
        for (var j = 0; j < v2obj.length; j++) {
            v2XML.writeElementString("E16_06", val[0][0]);//NA    
        };
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_09");
        for (var j = 0; j < v2obj.length; j++) {
            v2XML.writeElementString("E16_09", val[0][0]);//NA
        };
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_10");
        for (var j = 0; j < v2obj.length; j++) {
            v2XML.writeElementString("E16_10", val[0][0]); //NA
        };
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_11");
        for (var j = 0; j < v2obj.length; j++) {
            v2XML.writeElementString("E16_11", val[0][0]);  //NA   
        };
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_11");
        for (var j = 0; j < v2obj.length; j++) {
            v2XML.writeElementString("E16_11", val[0][0]);  //NA   
        };
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_12");
        for (var j = 0; j < v2obj.length; j++) {
            v2XML.writeElementString("E16_12", val[0][0]);  //NA   
        };
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_13");
        for (var j = 0; j < v2obj.length; j++) {
            v2XML.writeElementString("E16_13", val[0][0]);  //NA   
        };
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_14");
        for (var j = 0; j < v2obj.length; j++) {
            v2XML.writeElementString("E16_14", val[0][0]);  //NA   
        };
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_15");
        for (var j = 0; j < v2obj.length; j++) {
            v2XML.writeElementString("E16_15", val[0][0]);  //NA   
        };
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_16");
        for (var j = 0; j < v2obj.length; j++) {
            v2XML.writeElementString("E16_16", val[0][0]);  //NA   
        };
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_17");
        for (var j = 0; j < v2obj.length; j++) {
            v2XML.writeElementString("E16_18", val[0][0]);  //NA   
        };
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_19");
        for (var j = 0; j < v2obj.length; j++) {
            v2XML.writeElementString("E16_19", val[0][0]);  //NA   
        };
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_20");
        for (var j = 0; j < v2obj.length; j++) {
            v2XML.writeElementString("E16_20", val[0][0]);  //NA   
        };
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_21");
        for (var j = 0; j < v2obj.length; j++) {
            v2XML.writeElementString("E16_21", val[0][0]);  //NA   
        };
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_22");
        for (var j = 0; j < v2obj.length; j++) {
            v2XML.writeElementString("E16_22", val[0][0]);  //NA   
        };
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_23");
        for (var j = 0; j < v2obj.length; j++) {
            v2XML.writeElementString("E16_23", val[0][0]);  //NA   
        };
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_34");
        for (var j = 0; j < v2obj.length; j++) {
            v2XML.writeElementString("E16_34", val[0][0]);  //NA   
        };

        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E16_14");
        for (var j = 0; j < v2obj.length; j++) {
            v2XML.writeElementString("E16_14", val[0][0]);  //NA   
        }
        v2XML.writeStartElement("E16_00_0");
    };
    v2XML.writeEndElement("E16");

    //Intervention 
    for (var j = 0; j < v2obj.length; j++) {
        v2XML.writeStartElement("E17");
        v2XML.writeElementString("E17_-1", val[0][0]);  //NA   
        v2XML.writeEndElement("E17");
    };

    //Intervention/ Medication 
    v2XML.writeStartElement("E18");
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E18_01");
    v2XML.writeElementString("E18_01", val[0][0]);
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E18_02");
    v2XML.writeElementString("E18_02", val[0][0]); //NA
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E18_03");
    v2XML.writeElementString("E18_03", val[0][0]);//NA
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E18_04");
    v2XML.writeElementString("E18_04", val[0][0]);//NA

    //Medication Dosing Structure
    v2XML.writeStartElement("E18_05_0");
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E18_05");
    v2XML.writeElementString("E18_05", val[0][0]);
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E18_06");
    v2XML.writeElementString("E18_06", val[0][0]);
    v2XML.writeEndElement("E18_05_0");

    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E18_07");
    v2XML.writeElementString("E18_07", val[0][0]);//NA
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E18_08");
    v2XML.writeElementString("E18_08", val[0][0]);// NA
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E18_09");
    v2XML.writeElementString("E18_09", val[0][0]);//NATIONAL -NA
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E18_10");
    v2XML.writeElementString("E18_10", val[0][0]);//NATIONAL -NA
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E18_11");
    v2XML.writeElementString("E18_11", val[0][0]);//NA
    v2XML.writeEndElement("E18");


    //Intervention/ Procedure 
    v2XML.writeStartElement("E19");
    for (var j = 0; j < v2obj.length; j++) {
        v2XML.writeStartElement("E19_01_0");
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E19_01");
        v2XML.writeElementString("E19_01", val[0][0]);  //NATIONAL
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E19_02");
        v2XML.writeElementString("E19_02", val[0][0]); //NA
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E19_03");
        v2XML.writeElementString("E19_03", val[0][0]);//NA
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E19_04");
        v2XML.writeElementString("E19_04", val[0][0]);//NATIONAL
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E19_05");
        v2XML.writeElementString("E19_05", val[0][0]);//NATIONAL
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E19_06");
        v2XML.writeElementString("E19_06", val[0][0]);//NATIONAL -NA
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E19_07");
        for (var j = 0; j < v2obj.length; j++) {
            v2XML.writeElementString("E19_07", val[0][0]);//NATIONAL -NA
        }
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E19_08");
        v2XML.writeElementString("E19_08", val[0][0]);//NATIONAL -NA
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E19_09");
        v2XML.writeElementString("E19_09", val[0][0]);//NATIONAL -NA
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E19_10");
        v2XML.writeElementString("E19_10", val[0][0]);//NATIONAL -NA
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E19_11");
        v2XML.writeElementString("E19_11", val[0][0]);//NA
        v2XML.writeEndElement("E19_01_0");
    };
    
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E19_12");
    for (var i = 0; i < v2obj.length; i++) {
        v2XML.writeElementString("E19_12", val[0][0]);//NATIONAL -NA
    }
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E19_13");
    for (var i = 0; i < v2obj.length; i++) {
        v2XML.writeElementString("E19_13", val[0][0]);//NA
    };
    v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E19_14");
    for (var i = 0; i < v2obj.length; i++) {
        v2XML.writeElementString("E19_14", val[0][0]);//NA
    };

    
    //Disposition 

    v2XML.writeStartElement("E20");
    v2obj = getVersion221Values(ArrayOfVersion2Objects, "E20_01");
    if (v2obj.HasValue == true) {
        v2XML.writeElementString("E20_01", v2obj.val[0].toString());//NA
    }
    else {
        v2XML.writeElementString("E20_01", "-10");//NA
    }

    v2obj = getVersion221Values(ArrayOfVersion2Objects, "E20_02");
    console.log(v2obj)
    if (v2obj.HasValue == true) {
        v2XML.writeElementString("E20_02", v2obj.val[0]); //NA
    };

    //Destination Address Structure
    v2XML.writeStartElement("E20_03_0");
    v2obj = getVersion221Values(ArrayOfVersion2Objects, "E20_03");
    if (v2obj.HasValue == true) {
        v2XML.writeElementString("E20_03", v2obj.val[0].toString());
    };
    v2obj = getVersion221Values(ArrayOfVersion2Objects, "E20_04");
    if (v2obj.HasValue == true) {
        v2XML.writeElementString("E20_04", v2obj.val[0].toString());//NA
    };

    v2obj = getVersion221Values(ArrayOfVersion2Objects, "E20_05");
    if (v2obj.HasValue == true) {
        v2XML.writeElementString("E20_05", v2obj.val[0].toString());//NA
    };
    v2obj = getVersion221Values(ArrayOfVersion2Objects, "E20_07");
    if (v2obj.HasValue == true) {
        v2XML.writeElementString("E20_07", v2obj.val[0].toString());//NATIONAL
    };

    v2XML.writeEndElement("E20_03_0");

    v2obj = getVersion221Values(ArrayOfVersion2Objects, "E20_06");
    if (v2obj.HasValue == true) {
        v2XML.writeElementString("E20_06", v2obj.val[0].toString());//NATIONAL   
    };

    v2obj = getVersion221Values(ArrayOfVersion2Objects, "E20_08");
    if (v2obj.HasValue == true) {
        v2XML.writeElementString("E20_08", v2obj.val[0].toString());
    };
    v2obj = getVersion221Values(ArrayOfVersion2Objects, "E20_09");
    if (v2obj.HasValue == true) {
        v2XML.writeElementString("E20_09", v2obj.val[0].toString());//NA
    };
    v2obj = getVersion221Values(ArrayOfVersion2Objects, "E20_10");
    if (v2obj.HasValue == true) {
        v2XML.writeElementString("E20_10", v2obj.val[0].toString());//NATIONAL
    };

    v2obj = getVersion221Values(ArrayOfVersion2Objects, "E20_11");  //V3 0:M, V20:1
    if (v2obj.HasValue == true) {
        //for (var i = 0; i < v2obj.val[0].length ; i++) {
        v2XML.writeElementString("E20_11", v2obj.val[0][0].toString());//NA
        //}
    };

    v2obj = getVersion221Values(ArrayOfVersion2Objects, "E20_12");  //V3 0:M, V20:1
    if (v2obj.HasValue == true) {
        //for (var i = 0; i < v2obj.val.length ; i++) {
        v2XML.writeElementString("E20_12", v2obj.val[0].toString());//NA
        //}
    };
    
    v2obj = getVersion221Values(ArrayOfVersion2Objects, "E20_13");
    if (v2obj.HasValue == true) {
        v2XML.writeElementString("E20_13", v2obj.val[0]);//NA
    };
    v2obj = getVersion221Values(ArrayOfVersion2Objects, "E20_14");
    if (v2obj.HasValue == true) {
        v2XML.writeElementString("E20_14", v2obj.val[0]);//NA
    };
    v2obj = getVersion221Values(ArrayOfVersion2Objects, "E20_15");
    if (v2obj.HasValue == true) {
        v2XML.writeElementString("E20_15", v2obj.val[0]);//NA
    };
    v2obj = getVersion221Values(ArrayOfVersion2Objects, "E20_16");
    if (v2obj.HasValue == true) {
        v2XML.writeElementString("E20_16", v2obj.val[0]);//NA
    };
    v2obj = getVersion221Values(ArrayOfVersion2Objects, "E20_17");
    if (v2obj.HasValue == true) {
        v2XML.writeElementString("E20_17", v2obj.val[0]);//NA
    };
    
    v2XML.writeEndElement("E20");
  
        //Medical Device Data 
        for (var i = 0; i < v2obj.length; i++) {
            v2XML.writeStartElement("E21");
            v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E21_01");
            v2XML.writeElementString("E21_01", val[0][0]);
            v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E21_02");
            v2XML.writeElementString("E21_02", val[0][0]);

            //Waveform Structure
            v2XML.writeStartElement("E21_03_0");
            v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E21_03");
            v2XML.writeElementString("E21_03", val[0][0]);
            v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E21_04");
            v2XML.writeElementString("E21_04", val[0][0]);
            v2XML.writeEndElement("E21_03_0");

            v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E21_05");
            v2XML.writeElementString("E21_05", val[0][0]);
            v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E21_07");
            v2XML.writeElementString("E21_07", val[0][0]);

            v2XML.writeEndElement("E21_03_0");

            v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E21_06");
            v2XML.writeElementString("E21_06", val[0][0]);
            v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E21_08");
            v2XML.writeElementString("E21_08", val[0][0]);
            v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E21_09");
            v2XML.writeElementString("E21_09", val[0][0]);
            v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E21_10");
            v2XML.writeElementString("E21_10", val[0][0]);
            v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E21_11");
            v2XML.writeElementString("E21_11", val[0][0]);
            v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E21_12");
            v2XML.writeElementString("E21_12", val[0][0]);
            v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E21_13");
            v2XML.writeElementString("E21_13", val[0][0]);
            v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E21_14");
            v2XML.writeElementString("E21_14", val[0][0]);
            v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E21_15");
            v2XML.writeElementString("E21_15", val[0][0]);
            v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E21_16");
            v2XML.writeElementString("E21_16", val[0][0]);
            v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E21_17");
            v2XML.writeElementString("E21_17", val[0][0]);

            // CO2 Structure.
            v2XML.writeStartElement("E21_18_0");
            v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E21_18");
            v2XML.writeElementString("E21_18", val[0][0]);
            v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E21_19");
            v2XML.writeElementString("E21_19", val[0][0]);
            v2XML.writeEndElement("E21_18_0");

            v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E21_21");
            v2XML.writeElementString("E21_21", val[0][0]);

            v2XML.writeEndElement("E21");
        };

        //Outcome and Linkage 
        v2XML.writeStartElement("E22");
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E22_01");
        v2XML.writeElementString("E22_01", val[0][0]);  //NATIONAL -NA
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E22_02");
        v2XML.writeElementString("E22_02", val[0][0]); //NATIONAL -NA
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E22_03");
        v2XML.writeElementString("E22_03", val[0][0]);//NA
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E22_04");
        v2XML.writeElementString("E22_04", val[0][0]);//NA
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E22_05");
        v2XML.writeElementString("E22_05", val[0][0]);//NA
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E22_06");
        v2XML.writeElementString("E22_06", val[0][0]);//NA
        v2XML.writeEndElement("E22");

        //Miscellaneous 
        v2XML.writeStartElement("E23");
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E23_01");
        v2XML.writeElementString("E23_01", val[0][0]);  //NA
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E23_02");
        for (var i = 0; i < v2obj.length; i++) {
            v2XML.writeElementString("E23_02", val[0][0]); //NA
        };
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E23_03");
        for (var i = 0; i < v2obj.length; i++) {
            v2XML.writeElementString("E23_03", val[0][0]);//NA
        }
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E23_04");
        for (var i = 0; i < v2obj.length; i++) {
            v2XML.writeElementString("E23_04", val[0][0]);//NA
        };
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E23_05");
        for (var i = 0; i < v2obj.length; i++) {
            v2XML.writeElementString("E23_05", val[0][0]);//NA
        };
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E23_06");
        for (var i = 0; i < v2obj.length; i++) {
            v2XML.writeElementString("E23_06", val[0][0]);//NA
        };
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E23_07");
        for (var i = 0; i < v2obj.length; i++) {
            v2XML.writeElementString("E23_07", val[0][0]);//NA
        };
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E23_08");
        v2XML.writeElementString("E23_08", val[0][0]);// -NA
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E23_09");
        v2XML.writeElementString("E23_09", val[0][0]);// -NA
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E23_10");
        v2XML.writeElementString("E23_10", val[0][0]);// -NA
        v2obj = getVersion221Values(ArrayOfVersion2Objects.eDisposition.V221Array, "E23_11");
        v2XML.writeElementString("E23_11", val[0][0]);


        v2XML.writeEndElement();
                */
    v2XML.writeEndElement();
    v2XML.writeEndElement();
    v2XML.writeEndElement();
    //XML.writeAttributeString('timeStamp', Data);
    var XMLDoc = v2XML.flush()
    //console.log(XMLDoc)
    return v2XML;


};
var getVersion221Values = function (AllVersion221ObjectArray, valueElement) {
    var _arr = [];
    var returnObject = new Object();
    var valueObject = new Object();
    // console.log(valueElement)
    // console.log(AllVersion221ObjectArray)
    if (AllVersion221ObjectArray == "undefined") {
        console.log("UNDEFINED");
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
    */
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
var setV3XML = function (TheCall) {

    var specMap = {
        "7701001": "-5",
        "7701003": "-15",
        "7701005": "-20",
        "8801005": "-10",
        "8801013": "-10",
        "8801015": "-10",
        "8801017": "-10",
        "8801019": "-10",
        "8801021": "-10",
        "8801023": "-10"
    };
    var specVal = ["7701001", "7701003", "7701005", "8801005", "8801013", "8801015", "8801017", "8801019", "8801021", "8801023"];

    var XML = new XMLWriter('UTF-8', '1.0');
    XML.writeStartDocument();
    XML.writeStartElement('EMSDataSet');
    //XML.writeAttributeString('xmlns', "http://www.nemsis.org  xsi:schemaLocation=http://www.nemsis.org http://nemsis.org/media/XSD_v3/_nemsis_v3.3.4/3.3.4.140328/XSDs/NEMSIS_XSDs_v3.3.4.140328/EMSDataSet_v3.xsd  xmlns:xsi=http://www.w3.org/2001/XMLSchema-instance") 
    XML.writeAttributeString('xmlns', 'http://www.nemsis.org'); 8
    XML.writeAttributeString('xsi:schemaLocation', '="http://www.nemsis.org http://www.nemsis.org/media/XSD/EMSDataSet.xsd');
    XML.writeAttributeString('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance');


    XML.writeStartElement("Header");
    XML.writeStartElement("PatientCareReport");
    if (typeof TheCall.eRecord != undefined) {
        XML.writeStartElement("eRecord");

        if (TheCall.eRecord["eRecord.01"].IsNull == false) {
            XML.writeElementString("eRecord.01", TheCall.eRecord["eRecord.01"].vSet[0]);
        };
        XML.writeStartElement("eRecord.SoftwareApplicationGroup");
        if (TheCall.eRecord["eRecord.02"].IsNull == false) {
            XML.writeElementString("eRecord.02", TheCall.eRecord["eRecord.02"].vSet[0]);
        };
        if (TheCall.eRecord["eRecord.03"].IsNull == false) {
            XML.writeElementString("eRecord.03", TheCall.eRecord["eRecord.03"].vSet[0]);
        };
        if (TheCall.eRecord["eRecord.04"].IsNull == false) {
            XML.writeElementString("eRecord.04", TheCall.eRecord["eRecord.04"].vSet[0]);
        };
        XML.writeEndElement();
        XML.writeEndElement("eRecord");
    };
    //Dispatch
    if (typeof TheCall.eDispatch != undefined) {
        XML.writeStartElement("eDispatch");
        if (TheCall.eDispatch["eDispatch.01"].IsNull == false) {
            XML.writeElementString("eDispatch.01", TheCall.eDispatch["eDispatch.01"].vSet[0]);
        }
        else {
            if (TheCall.eDispatch["eDispatch.02"].NV == true) {
            }
            XML.writeStartElement('eDispatch.02');
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeAttributeString('NV', TheCall.eDispatch["eDispatch.02"].vSet[0]);
            XML.writeEndElement();
        };

        if (TheCall.eDispatch["eDispatch.03"].IsNull == false) {
            XML.writeElementString("eDispatch.03", TheCall.eDispatch["eDispatch.03"].vSet[0]);
        };
        if (TheCall.eDispatch["eDispatch.04"].IsNull == false) {
            XML.writeElementString("eDispatch.04", TheCall.eDispatch["eDispatch.04"].vSet[0]);
        };

        if (TheCall.eDispatch["eDispatch.05"].IsNull == false) {
            XML.writeElementString("eDispatch.05", TheCall.eDispatch["eDispatch.05"].vSet[0]);
        };

        XML.writeEndElement("eDispatch");
    };
    //Disposition
    if (typeof TheCall.eDisposition != undefined) {
        XML.writeStartElement("eDisposition");
        XML.writeStartElement("eDisposition.DestinationGroup");

        if (TheCall.eDisposition["eDisposition.01"] != undefined) {
            if (TheCall.eDisposition["eDisposition.01"].IsNull == false) {

                XML.writeElementString("eDisposition.01", TheCall.eDisposition["eDisposition.01"].vSet[0]);
            }

            else {
                if (TheCall.eDisposition["eDisposition.01"].NV == true) {
                    XML.writeStartElement('eDisposition.01');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eDisposition["eDisposition.01"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (TheCall.eDisposition["eDisposition.02"] != undefined) {
            if (TheCall.eDisposition["eDisposition.02"].IsNull == false) {

                XML.writeElementString("eDisposition.02", TheCall.eDisposition["eDisposition.02"].vSet[0]);
            }

            else {
                if (TheCall.eDisposition["eDisposition.02"].NV == true) {
                    XML.writeStartElement('eDisposition.02');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eDisposition["eDisposition.02"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (TheCall.eDisposition["eDisposition.03"] != undefined) {
            if (TheCall.eDisposition["eDisposition.03"].IsNull == false) {

                XML.writeElementString("eDisposition.03", TheCall.eDisposition["eDisposition.03"].vSet[0]);
            }

            else {
                if (TheCall.eDisposition["eDisposition.03"].NV == true) {
                    XML.writeStartElement('eDisposition.03');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eDisposition["eDisposition.03"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (TheCall.eDisposition["eDisposition.04"] != undefined) {
            if (TheCall.eDisposition["eDisposition.04"].IsNull == false) {

                XML.writeElementString("eDisposition.04", TheCall.eDisposition["eDisposition.04"].vSet[0]);
            }

            else {
                if (TheCall.eDisposition["eDisposition.04"].NV == true) {
                    XML.writeStartElement('eDisposition.04');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eDisposition["eDisposition.04"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (TheCall.eDisposition["eDisposition.05"] != undefined) {
            if (TheCall.eDisposition["eDisposition.05"].IsNull == false) {

                XML.writeElementString("eDisposition.05", TheCall.eDisposition["eDisposition.05"].vSet[0]);
            }

            else {
                if (TheCall.eDisposition["eDisposition.05"].NV == true) {
                    XML.writeStartElement('eDisposition.05');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eDisposition["eDisposition.05"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (TheCall.eDisposition["eDisposition.06"] != undefined) {
            if (TheCall.eDisposition["eDisposition.06"].IsNull == false) {

                XML.writeElementString("eDisposition.06", TheCall.eDisposition["eDisposition.06"].vSet[0]);
            }

            else {
                if (TheCall.eDisposition["eDisposition.06"].NV == true) {
                    XML.writeStartElement('eDisposition.06');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eDisposition["eDisposition.06"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (TheCall.eDisposition["eDisposition.07"] != undefined) {
            if (TheCall.eDisposition["eDisposition.07"].IsNull == false) {

                XML.writeElementString("eDisposition.07", TheCall.eDisposition["eDisposition.07"].vSet[0]);
            }

            else {
                if (TheCall.eDisposition["eDisposition.07"].NV == true) {
                    XML.writeStartElement('eDisposition.07');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eDisposition["eDisposition.07"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (TheCall.eDisposition["eDisposition.08"] != undefined) 
        {
            if (TheCall.eDisposition["eDisposition.08"].IsNull == false) 
            {
                XML.writeElementString("eDisposition.08", TheCall.eDisposition["eDisposition.08"].vSet[0]);
            }
        };

        if (TheCall.eDisposition["eDisposition.09"] != undefined) {
            if (TheCall.eDisposition["eDisposition.09"].IsNull == false) {
                XML.writeElementString("eDisposition.09", TheCall.eDisposition["eDisposition.09"].vSet[0]);
            }
        };

        if (TheCall.eDisposition["eDisposition.10"] != undefined) {
            if (TheCall.eDisposition["eDisposition.10"].IsNull == false) {
                XML.writeElementString("eDisposition.10", TheCall.eDisposition["eDisposition.10"].vSet[0]);
            }
        };


        XML.writeEndElement();
        /////////////////
        
        if (TheCall.eDisposition["eDisposition.11"] != 'undefined')
        {
            if (TheCall.eDisposition["eDisposition.11"].IsNull == false) {

                XML.writeElementString("eDisposition.11", TheCall.eDisposition["eDisposition.11"].vSet[0]);
            }

            else {
                if (TheCall.eDisposition["eDisposition.11"].NV == true) {
                    XML.writeStartElement('eDisposition.11');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eDisposition["eDisposition.11"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        
        if (TheCall.eDisposition["eDisposition.12"] != undefined) {
            if (TheCall.eDisposition["eDisposition.12"].IsNull == false) {

                XML.writeElementString("eDisposition.12", TheCall.eDisposition["eDisposition.12"].vSet[0]);
            }

            else {
                if (TheCall.eDisposition["eDisposition.12"].NV == true) {
                    XML.writeStartElement('eDisposition.12');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eDisposition["eDisposition.12"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (TheCall.eDisposition["eDisposition.13"] != undefined) {
            if (TheCall.eDisposition["eDisposition.13"].IsNull == false) {
                for (var d = 0; d < TheCall.eDisposition["eDisposition.13"].vSet.length; d++) {
                    XML.writeElementString("eDisposition.13", TheCall.eDisposition["eDisposition.13"].vSet[d]);
                }
            }
            else {
                XML.writeElementString("eDisposition.13", "");
            }
        };

        if (TheCall.eDisposition["eDisposition.14"] != undefined) {
            if (TheCall.eDisposition["eDisposition.14"].IsNull == false) {
                for (var d = 0; d < TheCall.eDisposition["eDisposition.14"].vSet.length; d++) {
                    XML.writeElementString("eDisposition.14", TheCall.eDisposition["eDisposition.14"].vSet[d]);
                }
            }
            else {
                XML.writeElementString("eDisposition.14", "");
            }
        };

        if (TheCall.eDisposition["eDisposition.15"] != undefined) {
            if (TheCall.eDisposition["eDisposition.15"].IsNull == false) {
                XML.writeElementString("eDisposition.15", TheCall.eDisposition["eDisposition.15"].vSet[0]);
            }
            else {
                XML.writeElementString("eDisposition.15", "");
            }
        };

        if (TheCall.eDisposition["eDisposition.16"] != undefined) {
            if (TheCall.eDisposition["eDisposition.16"].IsNull == false) {

                XML.writeElementString("eDisposition.16", TheCall.eDisposition["eDisposition.16"].vSet[0]);
            }

            else {
                if (TheCall.eDisposition["eDisposition.16"].NV == true) {
                    XML.writeStartElement('eDisposition.16');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eDisposition["eDisposition.16"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (TheCall.eDisposition["eDisposition.17"] != undefined) {
            if (TheCall.eDisposition["eDisposition.17"].IsNull == false) {

                XML.writeElementString("eDisposition.17", TheCall.eDisposition["eDisposition.17"].vSet[0]);
            }

            else {
                if (TheCall.eDisposition["eDisposition.17"].NV == true) {
                    XML.writeStartElement('eDisposition.17');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eDisposition["eDisposition.17"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (TheCall.eDisposition["eDisposition.18"] != undefined) {
            if (TheCall.eDisposition["eDisposition.18"].IsNull == false) {
                for (var d = 0; d < TheCall.eDisposition["eDisposition.18"].vSet.length; d++) {
                    XML.writeElementString("eDisposition.18", TheCall.eDisposition["eDisposition.18"].vSet[d]);
                }
            }
            else {
                if (TheCall.eDisposition["eDisposition.18"].NV == true) {
                    XML.writeStartElement('eDisposition.18');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eDisposition["eDisposition.18"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (TheCall.eDisposition["eDisposition.19"] != undefined) {
            if (TheCall.eDisposition["eDisposition.19"].IsNull == false) {

                XML.writeElementString("eDisposition.19", TheCall.eDisposition["eDisposition.19"].vSet[0]);
            }

            else {
                if (TheCall.eDisposition["eDisposition.19"].NV == true) {
                    XML.writeStartElement('eDisposition.19');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eDisposition["eDisposition.19"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (TheCall.eDisposition["eDisposition.20"] != undefined) {
            if (TheCall.eDisposition["eDisposition.20"].IsNull == false) {
                for (var d = 0; d < TheCall.eDisposition["eDisposition.20"].vSet.length; d++) {
                    XML.writeElementString("eDisposition.20", TheCall.eDisposition["eDisposition.20"].vSet[d]);
                }

            }

            else {
                if (TheCall.eDisposition["eDisposition.20"].NV == true) {
                    XML.writeStartElement('eDisposition.20');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eDisposition["eDisposition.20"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (TheCall.eDisposition["eDisposition.21"] != undefined) {
            if (TheCall.eDisposition["eDisposition.21"].IsNull == false) {

                XML.writeElementString("eDisposition.21", TheCall.eDisposition["eDisposition.21"].vSet[0]);
            }

            else {
                if (TheCall.eDisposition["eDisposition.21"].NV == true) {
                    XML.writeStartElement('eDisposition.21');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eDisposition["eDisposition.21"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (TheCall.eDisposition["eDisposition.22"] != undefined) {
            if (TheCall.eDisposition["eDisposition.22"].IsNull == false) {

                XML.writeElementString("eDisposition.22", TheCall.eDisposition["eDisposition.22"].vSet[0]);
            }

            else {
                if (TheCall.eDisposition["eDisposition.22"].NV == true) {
                    XML.writeStartElement('eDisposition.22');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eDisposition["eDisposition.22"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (TheCall.eDisposition["eDisposition.23"] != undefined) {
            if (TheCall.eDisposition["eDisposition.23"].IsNull == false) {

                XML.writeElementString("eDisposition.23", TheCall.eDisposition["eDisposition.23"].vSet[0]);
            }

            else {
                if (TheCall.eDisposition["eDisposition.23"].NV == true) {
                    XML.writeStartElement('eDisposition.23');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eDisposition["eDisposition.23"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof TheCall.eDisposition.HospitalTeamActivationGroup != undefined)
        {
            for (var i = 0; i< TheCall.eDisposition.HospitalTeamActivationGroup.length; i++)
            {
                XML.writeStartElement("eDisposition.HospitalTeamActivationGroup");
                if (TheCall.eDisposition.HospitalTeamActivationGroup[i]["eDisposition.24"] != undefined) {
                    if (TheCall.eDisposition.HospitalTeamActivationGroup[i]["eDisposition.24"].IsNull == false) {

                        XML.writeElementString("eDisposition.23", TheCall.eDisposition.HospitalTeamActivationGroup[i]["eDisposition.24"].vSet[0]);
                    }

                    else {
                        if (TheCall.eDisposition["eDisposition.24"].NV == true) {
                            XML.writeStartElement('eDisposition.24');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', TheCall.eDisposition.HospitalTeamActivationGroup[i]["eDisposition.24"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };
                if (TheCall.eDisposition.HospitalTeamActivationGroup[i]["eDisposition.25"] != undefined) {
                    if (TheCall.eDisposition.HospitalTeamActivationGroup[i]["eDisposition.25"].IsNull == false)
                    {                     
                        XML.writeElementString("eDisposition.23", TheCall.eDisposition.HospitalTeamActivationGroup[i]["eDisposition.25"].vSet[0]);
                    }

                    else {
                        if (TheCall.eDisposition["eDisposition.25"].NV == true) {
                            XML.writeStartElement('eDisposition.25');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', TheCall.eDisposition.HospitalTeamActivationGroup[i]["eDisposition.25"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };
                XML.writeEndElement();
            };
        };
        if (TheCall.eDisposition["eDisposition.26"] != 'undefined')
        {
            if (TheCall.eDisposition["eDisposition.26"].IsNull == false)
            {
                for (var d = 0; d < TheCall.eDisposition["eDisposition.26"].vSet.length; d++)
                {
                    XML.writeElementString("eDisposition.26", TheCall.eDisposition["eDisposition.26"].vSet[d]);
                }
            }
        }
        else
        {
            XML.writeElementString("eDisposition.26", "");
        };
        XML.writeEndElement();
    };  
    //eTimes
    if (typeof TheCall.eTimes != undefined)
    {
        XML.writeStartElement("eTimes");
        if (TheCall.eTimes["eTimes.01"] != undefined) {
            if (TheCall.eTimes["eTimes.01"].IsNull == false)
            {
                XML.writeElementString("eTimes.01", TheCall.eTimes["eTimes.01"].vSet[0]);
            }
            else
            {
                if (TheCall.eTimes["eTimes.01"].NV == true) {

                    XML.writeStartElement('eTimes.01');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eTimes["eTimes.01"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (TheCall.eTimes["eTimes.02"] != undefined) {
            if (TheCall.eTimes["eTimes.02"].IsNull == false) {
                XML.writeElementString("eTimes.02", TheCall.eTimes["eTimes.02"].vSet[0]);
            }
            else {
                XML.writeElementString("eTimes.02", "");
            }
        };

        if (TheCall.eTimes["eTimes.03"] != undefined) {
            if (TheCall.eTimes["eTimes.03"].IsNull == false) {
                XML.writeElementString("eTimes.03", TheCall.eTimes["eTimes.03"].vSet[0]);
            }
        };

        if (TheCall.eTimes["eTimes.04"] != undefined) {
            if (TheCall.eTimes["eTimes.04"].IsNull == false) {
                XML.writeElementString("eTimes.04", TheCall.eTimes["eTimes.04"].vSet[0]);
            }
            else {
                XML.writeElementString("eTimes.04", "");
            }
        };

        if (TheCall.eTimes["eTimes.05"] != undefined) {
            if (TheCall.eTimes["eTimes.05"].IsNull == false) {
                XML.writeElementString("eTimes.05", TheCall.eTimes["eTimes.05"].vSet[0]);
            }
            else {
                if (TheCall.eTimes["eTimes.05"].NV == true) {
                }
                XML.writeStartElement('eTimes.05');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', TheCall.eTimes["eTimes.05"].vSet[0]);
                XML.writeEndElement();
            }
        };

        if (TheCall.eTimes["eTimes.06"] != undefined) {
            if (TheCall.eTimes["eTimes.06"].IsNull == false) {
                XML.writeElementString("eTimes.06", TheCall.eTimes["eTimes.06"].vSet[0]);
            }
            else {
                if (TheCall.eTimes["eTimes.06"].NV == true) {
                }
                XML.writeStartElement('eTimes.06');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', TheCall.eTimes["eTimes.06"].vSet[0]);
                XML.writeEndElement();
            }
        };

        if (TheCall.eTimes["eTimes.07"] != undefined) {
            if (TheCall.eTimes["eTimes.07"].IsNull == false) {
                XML.writeElementString("eTimes.07", TheCall.eTimes["eTimes.07"].vSet[0]);
            }
            else {
                if (TheCall.eTimes["eTimes.07"].NV == true) {
                }
                XML.writeStartElement('eTimes.07');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', TheCall.eTimes["eTimes.07"].vSet[0]);
                XML.writeEndElement();
            }
        };

        if (TheCall.eTimes["eTimes.08"] != undefined) {
            if (TheCall.eTimes["eTimes.08"].IsNull == false) {
                XML.writeElementString("eTimes.08", TheCall.eTimes["eTimes.08"].vSet[0]);
            }
            else {
                if (TheCall.eTimes["eTimes.08"].NV == true) {
                }
                XML.writeStartElement('eTimes.08');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', TheCall.eTimes["eTimes.08"].vSet[0]);
                XML.writeEndElement();
            }
        };
        if (TheCall.eTimes["eTimes.09"] != undefined) {
            if (TheCall.eTimes["eTimes.09"].IsNull == false) {
                XML.writeElementString("eTimes.09", TheCall.eTimes["eTimes.09"].vSet[0]);
            }
            else {
                if (TheCall.eTimes["eTimes.09"].NV == true) {
                }
                XML.writeStartElement('eTimes.09');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', TheCall.eTimes["eTimes.09"].vSet[0]);
                XML.writeEndElement();
            }
        };

        if (TheCall.eTimes["eTimes.10"] != undefined) {
            if (TheCall.eTimes["eTimes.10"].IsNull == false) {
                XML.writeElementString("eTimes.10", TheCall.eTimes["eTimes.10"].vSet[0]);
            }
            else {
                XML.writeElementString("eTimes.10", "");
            }
        };

        if (TheCall.eTimes["eTimes.11"] != undefined) {
            if (TheCall.eTimes["eTimes.11"].IsNull == false) {
                XML.writeElementString("eTimes.11", TheCall.eTimes["eTimes.11"].vSet[0]);
            }
            else {
                if (TheCall.eTimes["eTimes.11"].NV == true) {
                }
                XML.writeStartElement('eTimes.11');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', TheCall.eTimes["eTimes.11"].vSet[0]);
                XML.writeEndElement();
            }
        };

        if (TheCall.eTimes["eTimes.12"] != undefined) {
            if (TheCall.eTimes["eTimes.12"].IsNull == false) {
                XML.writeElementString("eTimes.12", TheCall.eTimes["eTimes.12"].vSet[0]);
            }
            else {
                if (TheCall.eTimes["eTimes.12"].NV == true) {
                }
                XML.writeStartElement('eTimes.12');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', TheCall.eTimes["eTimes.12"].vSet[0]);
                XML.writeEndElement();
            }
        };

        if (TheCall.eTimes["eTimes.13"] != undefined) {
            if (TheCall.eTimes["eTimes.13"].IsNull == false) {
                XML.writeElementString("eTimes.13", TheCall.eTimes["eTimes.13"].vSet[0]);
            }
            else {
                XML.writeElementString("eTimes.13", "");
            }
        };
        if (TheCall.eTimes["eTimes.14"] != undefined) {
            if (TheCall.eTimes["eTimes.14"].IsNull == false) {
                XML.writeElementString("eTimes.14", TheCall.eTimes["eTimes.4"].vSet[0]);1
            }
            else {
                XML.writeElementString("eTimes.14", "");
            }
        };
        if (TheCall.eTimes["eTimes.15"] != undefined) {
            if (TheCall.eTimes["eTimes.15"].IsNull == false) {
                XML.writeElementString("eTimes.15", TheCall.eTimes["eTimes.15"].vSet[0]);
            }
            else {
                XML.writeElementString("eTimes.15", "");
            }
        };

        if (TheCall.eTimes["eTimes.16"] != undefined) {
            if (TheCall.eTimes["eTimes.16"].IsNull == false) {
                XML.writeElementString("eTimes.16", TheCall.eTimes["eTimes.16"].vSet[0]);
            }
            else {
                XML.writeElementString("eTimes.16", "");
            }
        };
        XML.writeEndElement()
        /////////////////////Response
    };
    //Response
    if (typeof TheCall.eResponse != undefined)
    {
        XML.writeStartElement("eResponse");
        XML.writeStartElement("eResponse.AgencyGroup");
        if (typeof TheCall.eResponse["eResponse.01"] != undefined) {
            if (TheCall.eResponse["eResponse.01"].IsNull == false) {
                XML.writeElementString("eResponse.01", TheCall.eResponse["eResponse.01"].vSet[0]);
            }
        };

        if (typeof TheCall.eResponse["eResponse.02"] != undefined) {
            if (TheCall.eResponse["eResponse.02"].IsNull == false) {
                XML.writeElementString("eResponse.02", TheCall.eResponse["eResponse.02"].vSet[0]);
            }
            else {
                if (TheCall.eResponse["eResponse.02"].NV == true) {
                }
                XML.writeStartElement('eResponse.02');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', TheCall.eResponse["eResponse.02"].vSet[0]);
                XML.writeEndElement();
            }
        };
        XML.writeEndElement();
        if (typeof TheCall.eResponse["eResponse.03"] != 'undefined') {
            if (TheCall.eResponse["eResponse.03"].IsNull == false) {
                XML.writeElementString("eResponse.03", TheCall.eResponse["eResponse.03"].vSet[0]);
            }
            else {
                if (TheCall.eResponse["eResponse.03"].NV == true) {
                }
                XML.writeStartElement('eResponse.03');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', TheCall.eResponse["eResponse.03"].vSet[0]);
                XML.writeEndElement();
            }
        };
        

        if (typeof TheCall.eResponse["eResponse.04"] != 'undefined') {
            if (TheCall.eResponse["eResponse.04"].IsNull == false) {
                XML.writeElementString("eResponse.04", TheCall.eResponse["eResponse.04"].vSet[0]);
            }
            else {
                if (TheCall.eResponse["eResponse.04"].NV == true) {
                }
                XML.writeStartElement('eResponse.04');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', TheCall.eResponse["eResponse.04"].vSet[0]);
                XML.writeEndElement();
            }
        };

        XML.writeStartElement("eResponse.AgencyServiceGroup");
        if (typeof TheCall.eResponse["eResponse.05"] != 'undefined') {
            if (TheCall.eResponse["eResponse.05"].IsNull == false) {
                XML.writeElementString("eResponse.05", TheCall.eResponse["eResponse.05"].vSet[0]);
            }
        };

        if (typeof TheCall.eResponse["eResponse.06"] != 'undefined') {
            if (TheCall.eResponse["eResponse.06"].IsNull == false) {
                XML.writeElementString("eResponse.06", TheCall.eResponse["eResponse.06"].vSet[0]);
            }
            else {
                if (TheCall.eResponse["eResponse.06"].NV == true) {
                }
                XML.writeStartElement('eResponse.06');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', TheCall.eResponse["eResponse.06"].vSet[0]);
                XML.writeEndElement();
            }
        };
        XML.writeEndElement();
    
        if (typeof TheCall.eResponse["eResponse.07"] != 'undefined')
        {
            //    console.log(TheCall.eResponse["eResponse.07"].IsNull)
            if (TheCall.eResponse["eResponse.07"].IsNull == false)
            {
                XML.writeElementString("eResponse.07", TheCall.eResponse["eResponse.07"].vSet[0]);
            }
        };


        if (typeof TheCall.eResponse["eResponse.08"] != 'undefined') {
            if (TheCall.eResponse["eResponse.08"].IsNull == false) {
                for (var d = 0; d < TheCall.eResponse["eResponse.08"].vSet.length; d++) {
                    XML.writeElementString("eResponse.08", TheCall.eResponse["eResponse.08"].vSet[d]);
                }

            }

            else {
                if (TheCall.eResponse["eResponse.08"].NV == true) {
                    XML.writeStartElement('eResponse.08');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eResponse["eResponse.08"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eResponse["eResponse.09"] != 'undefined') {
            if (TheCall.eResponse["eResponse.09"].IsNull == false) {
                for (var d = 0; d < TheCall.eResponse["eResponse.09"].vSet.length; d++) {
                    XML.writeElementString("eResponse.09", TheCall.eResponse["eResponse.09"].vSet[d]);
                }

            }

            else {
                if (TheCall.eResponse["eResponse.09"].NV == true) {
                    XML.writeStartElement('eResponse.09');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eResponse["eResponse.09"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eResponse["eResponse.10"] != 'undefined') {
            if (TheCall.eResponse["eResponse.10"].IsNull == false) {
                for (var d = 0; d < TheCall.eResponse["eResponse.10"].vSet.length; d++) {
                    XML.writeElementString("eResponse.10", TheCall.eResponse["eResponse.10"].vSet[d]);
                }

            }

            else {
                if (TheCall.eResponse["eResponse.10"].NV == true) {
                    XML.writeStartElement('eResponse.10');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eResponse["eResponse.10"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof TheCall.eResponse["eResponse.11"] != 'undefined') {
            if (TheCall.eResponse["eResponse.11"].IsNull == false) {
                for (var d = 0; d < TheCall.eResponse["eResponse.11"].vSet.length; d++) {
                    XML.writeElementString("eResponse.11", TheCall.eResponse["eResponse.11"].vSet[d]);
                }
            }
            else {
                if (TheCall.eResponse["eResponse.11"].NV == true) {
                    XML.writeStartElement('eResponse.11');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eResponse["eResponse.11"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eResponse["eResponse.12"] != 'undefined') {
            if (TheCall.eResponse["eResponse.12"].IsNull == false) {
                for (var d = 0; d < TheCall.eResponse["eResponse.12"].vSet.length; d++) {
                    XML.writeElementString("eResponse.12", TheCall.eResponse["eResponse.12"].vSet[d]);
                }

            }

            else {
                if (TheCall.eResponse["eResponse.12"].NV == true) {
                    XML.writeStartElement('eResponse.12');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eResponse["eResponse.12"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };



        if (typeof TheCall.eResponse["eResponse.13"] != 'undefined') {
            if (TheCall.eResponse["eResponse.13"].IsNull == false) {
                XML.writeElementString("eResponse.13", TheCall.eResponse["eResponse.13"].vSet[0]);
            }

            else {
                if (TheCall.eResponse["eResponse.13"].NV == true) {
                    XML.writeStartElement('eResponse.13');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eResponse["eResponse.13"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eResponse["eResponse.14"] != 'undefined') {
            if (TheCall.eResponse["eResponse.14"].IsNull == false) {
                XML.writeElementString("eResponse.14", TheCall.eResponse["eResponse.14"].vSet[0]);
            }

            else {
                if (TheCall.eResponse["eResponse.14"].NV == true) {
                    XML.writeStartElement('eResponse.14');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eResponse["eResponse.14"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eResponse["eResponse.15"] != 'undefined') {
            if (TheCall.eResponse["eResponse.15"].IsNull == false) {
                XML.writeElementString("eResponse.15", TheCall.eResponse["eResponse.15"].vSet[0]);
            }

            else {
                if (TheCall.eResponse["eResponse.15"].NV == true) {
                    XML.writeStartElement('eResponse.15');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eResponse["eResponse.15"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eResponse["eResponse.16"] != 'undefined') {
            if (TheCall.eResponse["eResponse.16"].IsNull == false) {
                XML.writeElementString("eResponse.16", TheCall.eResponse["eResponse.16"].vSet[0]);
            }

            else {
                if (TheCall.eResponse["eResponse.16"].NV == true) {
                    XML.writeStartElement('eResponse.16');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eResponse["eResponse.16"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eResponse["eResponse.17"] != 'undefined') {
            if (TheCall.eResponse["eResponse.17"].IsNull == false) {
                XML.writeElementString("eResponse.17", TheCall.eResponse["eResponse.17"].vSet[0]);
            }

            else {
                if (TheCall.eResponse["eResponse.17"].NV == true) {
                    XML.writeStartElement('eResponse.17');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eResponse["eResponse.17"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eResponse["eResponse.18"] != 'undefined') {
            if (TheCall.eResponse["eResponse.18"].IsNull == false) {
                XML.writeElementString("eResponse.18", TheCall.eResponse["eResponse.18"].vSet[0]);
            }

            else {
                if (TheCall.eResponse["eResponse.18"].NV == true) {
                    XML.writeStartElement('eResponse.18');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eResponse["eResponse.18"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eResponse["eResponse.19"] != 'undefined') {
            if (TheCall.eResponse["eResponse.19"].IsNull == false) {
                XML.writeElementString("eResponse.19", TheCall.eResponse["eResponse.19"].vSet[0]);
            }

            else {
                if (TheCall.eResponse["eResponse.19"].NV == true) {
                    XML.writeStartElement('eResponse.19');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eResponse["eResponse.19"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eResponse["eResponse.20"] != 'undefined') {
            if (TheCall.eResponse["eResponse.20"].IsNull == false) {
                XML.writeElementString("eResponse.20", TheCall.eResponse["eResponse.20"].vSet[0]);
            }

            else {
                if (TheCall.eResponse["eResponse.20"].NV == true) {
                    XML.writeStartElement('eResponse.20');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eResponse["eResponse.20"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eResponse["eResponse.21"] != 'undefined') {
            if (TheCall.eResponse["eResponse.21"].IsNull == false) {
                XML.writeElementString("eResponse.21", TheCall.eResponse["eResponse.21"].vSet[0]);
            }

            else {
                if (TheCall.eResponse["eResponse.21"].NV == true) {
                    XML.writeStartElement('eResponse.21');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eResponse["eResponse.21"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eResponse["eResponse.22"] != 'undefined') {
            if (TheCall.eResponse["eResponse.22"].IsNull == false) {
                XML.writeElementString("eResponse.22", TheCall.eResponse["eResponse.22"].vSet[0]);
            }

            else {
                if (TheCall.eResponse["eResponse.22"].NV == true) {
                    XML.writeStartElement('eResponse.22');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eResponse["eResponse.22"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eResponse["eResponse.23"] != 'undefined') {
            if (TheCall.eResponse["eResponse.23"].IsNull == false) {
                XML.writeElementString("eResponse.23", TheCall.eResponse["eResponse.23"].vSet[0]);
            }

            else {
                if (TheCall.eResponse["eResponse.23"].NV == true) {
                    XML.writeStartElement('eResponse.23');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eResponse["eResponse.23"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };


        if (typeof TheCall.eResponse["eResponse.24"] != 'undefined') {
            if (TheCall.eResponse["eResponse.24"].IsNull == false) {
                for (var d = 0; d < TheCall.eResponse["eResponse.24"].vSet.length; d++) {
                    XML.writeElementString("eResponse.24", TheCall.eResponse["eResponse.24"].vSet[d]);
                }

            }

            else {
                if (TheCall.eResponse["eResponse.24"].NV == true) {
                    XML.writeStartElement('eResponse.24');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eResponse["eResponse.24"].vSet[0]);
                    XML.writeEndElement();
                }
            };
            XML.writeEndElement();
        }
    };
    //Patient
    if (typeof TheCall.ePatient != undefined) {
        XML.writeStartElement("ePatient")
        if (typeof TheCall.ePatient != 'undefined') {

            if (typeof TheCall.ePatient["ePatient.01"] != 'undefined') {
                if (TheCall.ePatient["ePatient.01"].IsNull == false) {
                    XML.writeElementString("ePatient.01", TheCall.ePatient["ePatient.01"].vSet[0]);
                }
            };

            XML.writeStartElement("ePatient.PatientNameGroup")
            if (typeof TheCall.ePatient["ePatient.02"] != 'undefined') {
                if (TheCall.ePatient["ePatient.02"].IsNull == false) {
                    XML.writeElementString("ePatient.02", TheCall.ePatient["ePatient.02"].vSet[0]);
                }
                else {
                    if (TheCall.ePatient["ePatient.02"].NV == true) {

                        XML.writeStartElement('ePatient.02');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.ePatient["ePatient.02"].vSet[0]);
                        XML.writeEndElement();
                    }
                    else if (TheCall.ePatient["ePatient.02"].PN == true) {
                        XML.writeStartElement('ePatient.02');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('PN', TheCall.ePatient["ePatient.02"].vSet[0]);
                        XML.writeEndElement();

                    }
                }
            };

            if (typeof TheCall.ePatient["ePatient.03"] != 'undefined') {
                if (TheCall.ePatient["ePatient.03"].IsNull == false) {
                    XML.writeElementString("ePatient.03", TheCall.ePatient["ePatient.03"].vSet[0]);
                }
                else {
                    if (TheCall.ePatient["ePatient.03"].NV == true) {

                        XML.writeStartElement('ePatient.03');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.ePatient["ePatient.03"].vSet[0]);
                        XML.writeEndElement();
                    }
                    else if (TheCall.ePatient["ePatient.03"].PN == true) {
                        XML.writeStartElement('ePatient.03');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('PN', TheCall.ePatient["ePatient.03"].vSet[0]);
                        XML.writeEndElement();

                    }
                }
            };

            if (typeof TheCall.ePatient["ePatient.04"] != 'undefined') {
                if (TheCall.ePatient["ePatient.04"].IsNull == false) {
                    XML.writeElementString("ePatient.04", TheCall.ePatient["ePatient.04"].vSet[0]);
                }
            };
            XML.writeEndElement();

            if (typeof TheCall.ePatient["ePatient.05"] != 'undefined') {
                if (TheCall.ePatient["ePatient.05"].IsNull == false) {
                    XML.writeElementString("ePatient.05", TheCall.ePatient["ePatient.05"].vSet[0]);
                }
            };

            if (typeof TheCall.ePatient["ePatient.06"] != 'undefined') {
                if (TheCall.ePatient["ePatient.06"].IsNull == false) {
                    XML.writeElementString("ePatient.06", TheCall.ePatient["ePatient.06"].vSet[0]);
                }
            };

            if (TheCall.ePatient["ePatient.07"].IsNull == false) {
                XML.writeElementString("ePatient.07", TheCall.ePatient["ePatient.07"].vSet[0]);
            }
            else {
                if (TheCall.ePatient["ePatient.07"].NV == true) {
                }
                XML.writeStartElement('ePatient.07');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', TheCall.ePatient["ePatient.07"].vSet[0]);
                XML.writeEndElement();
            };

            if (TheCall.ePatient["ePatient.08"].IsNull == false) {
                XML.writeElementString("ePatient.08", TheCall.ePatient["ePatient.08"].vSet[0]);
            }
            else {
                if (TheCall.ePatient["ePatient.08"].NV == true) {
                }
                XML.writeStartElement('ePatient.08');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', TheCall.ePatient["ePatient.08"].vSet[0]);
                XML.writeEndElement();
            };

            if (TheCall.ePatient["ePatient.09"].IsNull == false) {
                XML.writeElementString("ePatient.09", TheCall.ePatient["ePatient.09"].vSet[0]);
            }
            else {
                if (TheCall.ePatient["ePatient.09"].NV == true) {
                }
                XML.writeStartElement('ePatient.09');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', TheCall.ePatient["ePatient.09"].vSet[0]);
                XML.writeEndElement();
            };

            if (typeof TheCall.ePatient["ePatient.10"] != 'undefined') {
                if (TheCall.ePatient["ePatient.10"].IsNull == false) {
                    XML.writeElementString("ePatient.10", TheCall.ePatient["ePatient.10"].vSet[0]);
                }
            };

            if (typeof TheCall.ePatient["ePatient.11"] != 'undefined') {
                if (TheCall.ePatient["ePatient.11"].IsNull == false) {
                    XML.writeElementString("ePatient.11", TheCall.ePatient["ePatient.11"].vSet[0]);
                }
            };

            if (typeof TheCall.ePatient["ePatient.12"] != 'undefined') {
                if (TheCall.ePatient["ePatient.12"].IsNull == false) {
                    XML.writeElementString("ePatient.12", TheCall.ePatient["ePatient.12"].vSet[0]);
                }
            };

            if (typeof TheCall.ePatient["ePatient.13"] != 'undefined') {
                if (TheCall.ePatient["ePatient.13"].IsNull == false) {
                    XML.writeElementString("ePatient.13", TheCall.ePatient["ePatient.13"].vSet[0]);
                }
                else {
                    if (TheCall.ePatient["ePatient.13"].NV == true) {
                    }
                    XML.writeStartElement('ePatient.13');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.ePatient["ePatient.13"].vSet[0]);
                    XML.writeEndElement();
                }
            };

            if (typeof TheCall.ePatient["ePatient.14"] != 'undefined') 
            {
                if (TheCall.ePatient["ePatient.14"].IsNull == false) {
                    XML.writeElementString("ePatient.14", TheCall.ePatient["ePatient.14"].vSet[0]);
                }
                else {
                    if (TheCall.ePatient["ePatient.14"].NV == true) {
                    }
                    XML.writeStartElement('ePatient.14');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.ePatient["ePatient.14"].vSet[0]);
                    XML.writeEndElement();
                }
            };

            XML.writeStartElement("ePatient.AgeGroup")
            
            if (typeof TheCall.ePatient["ePatient.15"] != 'undefined') {
                if (TheCall.ePatient["ePatient.15"].IsNull == false) {
                    XML.writeElementString("ePatient.15", TheCall.ePatient["ePatient.15"].vSet[0]);
                }
                else {
                    if (TheCall.ePatient["ePatient.15"].NV == true) {
                    }
                    XML.writeStartElement('ePatient.15');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.ePatient["ePatient.15"].vSet[0]);
                    XML.writeEndElement();
                }
            };

            if (typeof TheCall.ePatient["ePatient.16"] != 'undefined') {
                if (TheCall.ePatient["ePatient.16"].IsNull == false) {
                    XML.writeElementString("ePatient.16", TheCall.ePatient["ePatient.16"].vSet[0]);
                }
                else {
                    if (TheCall.ePatient["ePatient.16"].NV == true) {
                    }
                    XML.writeStartElement('ePatient.16');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.ePatient["ePatient.16"].vSet[0]);
                    XML.writeEndElement();
                }
            };
            XML.writeEndElement()
            if (typeof TheCall.ePatient["ePatient.17"] != 'undefined') {
                if (TheCall.ePatient["ePatient.17"].IsNull == false) {
                    XML.writeElementString("ePatient.17", TheCall.ePatient["ePatient.17"].vSet[0]);
                }
                else {
                    if (TheCall.ePatient["ePatient.17"].NV == true) {
                    }
                    XML.writeStartElement('ePatient.17');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.ePatient["ePatient.17"].vSet[0]);
                    XML.writeEndElement();
                }
            };

            if (typeof TheCall.ePatient["ePatient.18"] != 'undefined') {
                if (TheCall.ePatient["ePatient.18"].IsNull == false) {
                    for (var i = 0; i <= TheCall.ePatient["ePatient.18"].vSet.length - 1; i++) {
                        if (TheCall.ePatient["ePatient.18"].vSet[i].PhoneNumberType != "") {
                            XML.writeStartElement('ePatient.18');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('PhoneNumberType', TheCall.ePatient["ePatient.18"].vSet[i].val);
                            XML.writeEndElement();
                        }
                        else {

                            XML.writeElementString("ePatient.18", TheCall.ePatient["ePatient.18"].vSet[i].val);
                        }
                    }
                }
            };

            if (typeof TheCall.ePatient["ePatient.19"] != 'undefined') {
            
                if (TheCall.ePatient["ePatient.19"].IsNull == false) {
                    for (var i = 0; i <= TheCall.ePatient["ePatient.19"].vSet.length - 1; i++) {
                        if (TheCall.ePatient["ePatient.19"].vSet[i].PhoneNumberType != "") {
                            XML.writeStartElement('ePatient.19');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('EMailAddressType', TheCall.ePatient["ePatient.19"].vSet[i].val);
                            XML.writeEndElement();
                        }
                        else {

                            XML.writeElementString("ePatient.18", TheCall.ePatient["ePatient.18"].vSet[i].val);
                        }
                    }
                }
            };

            if (typeof TheCall.ePatient["ePatient.20"] != 'undefined') {
                if (typeof TheCall.ePatient["ePatient.20"] != 'undefined') {
                    if (TheCall.ePatient["ePatient.20"].IsNull == false) {
                        XML.writeElementString("ePatient.20", TheCall.ePatient["ePatient.20"].vSet[0]);
                    }
                }
            };

            if (typeof TheCall.ePatient["ePatient.21"] != 'undefined') {
                if (typeof TheCall.ePatient["ePatient.21"] != 'undefined') {
                    if (TheCall.ePatient["ePatient.21"].IsNull == false) {
                        XML.writeElementString("ePatient.21", TheCall.ePatient["ePatient.21"].vSet[0]);
                    }
                }
            };
        };


        XML.writeEndElement
    };
    //History
    if (typeof TheCall.eHistory != undefined) {
        XML.writeStartElement("eHistory")
        if (TheCall.eHistory["eHistory.01"] != undefined) {
            if (TheCall.eHistory["eHistory.01"].IsNull == false) {
                for (var d = 0; d < TheCall.eHistory["eHistory.01"].vSet.length; d++) {
                    XML.writeElementString("eHistory.01", TheCall.eHistory["eHistory.01"].vSet[d]);
                }
            }

            else {
                if (TheCall.eHistory["eHistory.01"].NV == true) {
                    XML.writeStartElement('eHistory.01');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eHistory["eHistory.01"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        
        if (typeof TheCall.eHistory["PractitionerGroup"] != 'undefined')
        {
            for (var d = 0; d < TheCall.eHistory["PractitionerGroup"].length ; d++) 
            {
                XML.writeStartElement("eHistory.PractitionerGroup")

                if (typeof TheCall.eHistory["PractitionerGroup"][d]["eHistory.02"] != 'undefined') {
                    if (TheCall.eHistory["PractitionerGroup"][d]["eHistory.02"].IsNull == false) {
                        XML.writeElementString("eHistory.02", TheCall.eHistory["PractitionerGroup"][d]["eHistory.02"].vSet[0]);
                    }
                };

                if (typeof TheCall.eHistory["PractitionerGroup"][d]["eHistory.03"] != 'undefined') {
                    if (TheCall.eHistory["PractitionerGroup"][d]["eHistory.03"].IsNull == false) {
                        XML.writeElementString("eHistory.03", TheCall.eHistory["PractitionerGroup"][d]["eHistory.03"].vSet[0]);
                    }
                };
                if (typeof TheCall.eHistory["PractitionerGroup"][d]["eHistory.04"] != 'undefined') {
                    if (TheCall.eHistory["PractitionerGroup"][d]["eHistory.04"].IsNull == false) {
                        XML.writeElementString("eHistory.04", TheCall.eHistory["PractitionerGroup"][d]["eHistory.04"].vSet[0]);
                    }
                };
                XML.writeEndElement()       
            }
        };
        

        if (TheCall.eHistory["eHistory.05"] != undefined) {
            if (TheCall.eHistory["eHistory.05"].IsNull == false) {
                for (var d = 0; d < TheCall.eHistory["eHistory.05"].vSet.length; d++) {
                    XML.writeElementString("eHistory.05", TheCall.eHistory["eHistory.05"].vSet[d]);
                }
            }

            else {
                if (TheCall.eHistory["eHistory.05"].NV == true) {
                    XML.writeStartElement('eHistory.0');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eHistory["eHistory.05"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };


        if (typeof TheCall.eHistory["eHistory.06"] != 'undefined') {
            if (TheCall.eHistory["eHistory.06"].IsNull == false) {
                XML.writeElementString("eHistory.06", TheCall.eHistory["eHistory.06"].vSet[0]);
            }
            else
            {
                if (TheCall.eHistory["eHistory.06"].NV == true)
                {

                    XML.writeStartElement('eHistory.06');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eHistory["eHistory.06"].vSet[0]);
                    XML.writeEndElement();
                }
                else if (TheCall.eHistory["eHistory.06"].PN == true)
                {
                    XML.writeStartElement('eHistory.06');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('PN', TheCall.eHistory["eHistory.06"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };


        if (TheCall.eHistory["eHistory.07"] != undefined)
        {
            if (TheCall.eHistory["eHistory.07"].IsNull == false)
            {
                for (var d = 0; d < TheCall.eHistory["eHistory.07"].vSet.length; d++)
                {
                    XML.writeElementString("eHistory.07", TheCall.eHistory["eHistory.07"].vSet[d]);
                }
            }
        };
        
        if (TheCall.eHistory["eHistory.08"] != undefined) 
        {
            if (TheCall.eHistory["eHistory.08"].IsNull == false) {
                for (var d = 0; d < TheCall.eHistory["eHistory.08"].vSet.length; d++) {
                    XML.writeElementString("eHistory.08", TheCall.eHistory["eHistory.08"].vSet[d]);
                }
            }
            else {
                if (TheCall.eHistory["eHistory.08"].NV == true) {
                    XML.writeStartElement('eHistory.08');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eHistory["eHistory.08"].vSet[0]);
                    XML.writeEndElement();
                }
                else if (TheCall.eHistory["eHistory.08"].PN == true) {
                    XML.writeStartElement('eHistory.08');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('PN', TheCall.eHistory["eHistory.08"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (TheCall.eHistory["eHistory.09"] != undefined) {
            if (TheCall.eHistory["eHistory.09"].IsNull == false) {
                for (var d = 0; d < TheCall.eHistory["eHistory.09"].vSet.length; d++) {
                    XML.writeElementString("eHistory.09", TheCall.eHistory["eHistory.09"].vSet[d]);
                }
            }
        };


        
        if (typeof TheCall.eHistory["ImmunizationsGroup"] != 'undefined') {
            for (var d = 0; d < TheCall.eHistory["ImmunizationsGroup"].length ; d++) {
                XML.writeStartElement("eHistory.ImmunizationsGroup")

                if (typeof TheCall.eHistory["ImmunizationsGroup"][d]["eHistory.10"] != 'undefined') {
                    if (TheCall.eHistory["ImmunizationsGroup"][d]["eHistory.10"].IsNull == false) {
                        XML.writeElementString("eHistory.10", TheCall.eHistory["ImmunizationsGroup"][d]["eHistory.10"].vSet[0]);
                    }
                };

                if (typeof TheCall.eHistory["ImmunizationsGroup"][d]["eHistory.11"] != 'undefined') {
                    if (TheCall.eHistory["ImmunizationsGroup"][d]["eHistory.11"].IsNull == false) {
                        XML.writeElementString("eHistory.11", TheCall.eHistory["ImmunizationsGroup"][d]["eHistory.11"].vSet[0]);
                    }
                };
                XML.writeEndElement()
            }
        };

        console.log(TheCall.eHistory["CurrentMedsGroup"].length)

        if (typeof TheCall.eHistory["CurrentMedsGroup"] != 'undefined') {
            for (var d = 0; d < TheCall.eHistory["CurrentMedsGroup"].length ; d++)
            {
               
                XML.writeStartElement("eHistory.CurrentMedsGroup")

                if (TheCall.eHistory["CurrentMedsGroup"][d]["eHistory.12"].IsNull == false)
                {
                    XML.writeElementString("eHistory.12", TheCall.eHistory["CurrentMedsGroup"][d]["eHistory.12"].vSet[0]);
                }
                else 
                {
                    if (TheCall.eHistory["CurrentMedsGroup"][d]["eHistory.12"].NV == true) {
                        XML.writeStartElement('eHistory.12');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eHistory["CurrentMedsGroup"][d]["eHistory.12"].vSet[0]);
                        XML.writeEndElement();
                    }
                    else if (TheCall.eHistory["CurrentMedsGroup"][d]["eHistory.12"].PN == true) {
                        XML.writeStartElement('eHistory.12');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('PN', TheCall.eHistory["CurrentMedsGroup"][d]["eHistory.12"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            

                if (typeof TheCall.eHistory["CurrentMedsGroup"][d]["eHistory.13"] != 'undefined')
                {
                    if (TheCall.eHistory["CurrentMedsGroup"][d]["eHistory.13"].IsNull == false)
                    {
                        XML.writeElementString("eHistory.13", TheCall.eHistory["CurrentMedsGroup"][d]["eHistory.13"].vSet[0]);
                    }
                };
                if (typeof TheCall.eHistory["CurrentMedsGroup"][d]["eHistory.14"] != 'undefined')
                {
                    if (TheCall.eHistory["CurrentMedsGroup"][d]["eHistory.14"].IsNull == false)
                    {
                        XML.writeElementString("eHistory.14", TheCall.eHistory["CurrentMedsGroup"][d]["eHistory.14"].vSet[0]);
                    }
                };

                if (typeof TheCall.eHistory["CurrentMedsGroup"][d]["eHistory.15"] != 'undefined')
                {
                    if (TheCall.eHistory["CurrentMedsGroup"][d]["eHistory.15"].IsNull == false)
                    {
                        XML.writeElementString("eHistory.15", TheCall.eHistory["CurrentMedsGroup"][d]["eHistory.15"].vSet[0]);
                    }
                };

                XML.writeEndElement()
            }
        };


        if (TheCall.eHistory["eHistory.16"] != undefined) {
            if (TheCall.eHistory["eHistory.16"].IsNull == false) {
                XML.writeElementString("eHistory.16", TheCall.eHistory["eHistory.16"].vSet[0]);
            }
        };

        if (typeof TheCall.eHistory["eHistory.17"] != 'undefined') {
            if (TheCall.eHistory["eHistory.17"].IsNull == false) {
                XML.writeElementString("eHistory.17", TheCall.eHistory["eHistory.17"].vSet[0]);
            }
            else {
                if (TheCall.eHistory["eHistory.17"].NV == true) {

                    XML.writeStartElement('eHistory.17');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eHistory["eHistory.17"].vSet[0]);
                    XML.writeEndElement();
                }
                else if (TheCall.eHistory["eHistory.17"].PN == true) {
                    XML.writeStartElement('eHistory.17');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('PN', TheCall.eHistory["eHistory.17"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };


        if (typeof TheCall.eHistory["eHistory.18"] != 'undefined') {
            if (TheCall.eHistory["eHistory.18"].IsNull == false) {
                XML.writeElementString("eHistory.18", TheCall.eHistory["eHistory.18"].vSet[0]);
            }
            else
            {
                if (TheCall.eHistory["eHistory.18"].PN == true)
                {
                    XML.writeStartElement('eHistory.18');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('PN', TheCall.eHistory["eHistory.18"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        console.log(TheCall.eHistory["eHistory.19"])
        if (TheCall.eHistory["eHistory.19"] != undefined) {
            if (TheCall.eHistory["eHistory.19"].IsNull == false) {
                XML.writeElementString("eHistory.19", TheCall.eHistory["eHistory.19"].vSet[0]);
            }
        };

        XML.writeEndElement()
        };
    XML.writeEndElement
    //};
    //Payment
    XML.writeStartElement("ePayment")
    if (typeof TheCall.ePayment["ePayment.01"] != 'undefined')
    {
        if (TheCall.ePayment["ePayment.01"].IsNull == false)
        {
            XML.writeElementString("ePayment.01", TheCall.ePayment["ePayment.01"].vSet[0]);
            }
        else
        {
            if (TheCall.ePayment["ePayment.01"].NV == true) {
                XML.writeStartElement('ePayment.01');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', TheCall.ePayment["ePayment.01"].vSet[0]);
                XML.writeEndElement();
            }
            else if (TheCall.ePayment["ePayment.01"].PN == true) {
                XML.writeStartElement('ePayment.01');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('PN', TheCall.ePayment["ePayment.01"].vSet[0]);
                XML.writeEndElement();
            }
        }
    };
    XML.writeStartElement("ePayment.CertificateGroup")
    if (TheCall.ePayment["ePayment.02"] != undefined) {
        if (TheCall.ePayment["ePayment.02"].IsNull == false) {
            XML.writeElementString("ePayment.02", TheCall.ePayment["ePayment.02"].vSet[0]);
        }
    };
    if (TheCall.ePayment["ePayment.03"] != undefined) {
        if (TheCall.ePayment["ePayment.03"].IsNull == false) {
            XML.writeElementString("ePayment.03", TheCall.ePayment["ePayment.03"].vSet[0]);
        }
    };

    if (TheCall.ePayment["ePayment.04"] != undefined) {
        if (TheCall.ePayment["ePayment.04"].IsNull == false) {
            for (var d = 0; d < TheCall.ePayment["ePayment.04"].vSet.length; d++) {
                XML.writeElementString("ePayment.04", TheCall.ePayment["ePayment.04"].vSet[d]);
            }
        }
    }
    if (TheCall.ePayment["ePayment.05"] != undefined) {
        if (TheCall.ePayment["ePayment.05"].IsNull == false) {
            XML.writeElementString("ePayment.05", TheCall.ePayment["ePayment.05"].vSet[0]);
        }
    };
    if (TheCall.ePayment["ePayment.06"] != undefined) {
        if (TheCall.ePayment["ePayment.06"].IsNull == false) {
            XML.writeElementString("ePayment.06", TheCall.ePayment["ePayment.06"].vSet[0]);
        }
    };
    if (TheCall.ePayment["ePayment.07"] != undefined) {
        if (TheCall.ePayment["ePayment.07"].IsNull == false) {
            XML.writeElementString("ePayment.07", TheCall.ePayment["ePayment.07"].vSet[0]);
        }
    };
    XML.writeEndElement();
    if (TheCall.ePayment["ePayment.08"] != undefined) {
        if (TheCall.ePayment["ePayment.08"].IsNull == false) {
            XML.writeElementString("ePayment.08", TheCall.ePayment["ePayment.08"].vSet[0]);
        }
    };
    console.log(TheCall.ePayment["InsuranceGroup"].length)
    if (typeof TheCall.ePayment["InsuranceGroup"] != 'undefined') {
        for (var d = 0; d < TheCall.ePayment["InsuranceGroup"].length ; d++)
        {
            XML.writeStartElement("ePayment.InsuranceGroup")

            if (typeof TheCall.ePayment["InsuranceGroup"][d]["ePayment.09"] != 'undefined') {
                if (TheCall.ePayment["InsuranceGroup"][d]["ePayment.09"].IsNull == false) {
                    XML.writeElementString("ePayment.09", TheCall.ePayment["InsuranceGroup"][d]["ePayment.09"].vSet[0]);
                }
            };
            if (typeof TheCall.ePayment["InsuranceGroup"][d]["ePayment.10"] != 'undefined') {
                if (TheCall.ePayment["InsuranceGroup"][d]["ePayment.10"].IsNull == false) {
                    XML.writeElementString("ePayment.10", TheCall.ePayment["InsuranceGroup"][d]["ePayment.10"].vSet[0]);
                }
            };
            if (typeof TheCall.ePayment["InsuranceGroup"][d]["ePayment.11"] != 'undefined') {
                if (TheCall.ePayment["InsuranceGroup"][d]["ePayment.11"].IsNull == false) {
                    XML.writeElementString("ePayment.11", TheCall.ePayment["InsuranceGroup"][d]["ePayment.11"].vSet[0]);
                }
            };
            if (typeof TheCall.ePayment["InsuranceGroup"][d]["ePayment.12"] != 'undefined') {
                if (TheCall.ePayment["InsuranceGroup"][d]["ePayment.12"].IsNull == false) {
                    XML.writeElementString("ePayment.12", TheCall.ePayment["InsuranceGroup"][d]["ePayment.12"].vSet[0]);
                }
            };
            if (typeof TheCall.ePayment["InsuranceGroup"][d]["ePayment.13"] != 'undefined') {
                if (TheCall.ePayment["InsuranceGroup"][d]["ePayment.13"].IsNull == false) {
                    XML.writeElementString("ePayment.13", TheCall.ePayment["InsuranceGroup"][d]["ePayment.13"].vSet[0]);
                }
            };
            if (typeof TheCall.ePayment["InsuranceGroup"][d]["ePayment.14"] != 'undefined') {
                if (TheCall.ePayment["InsuranceGroup"][d]["ePayment.14"].IsNull == false) {
                    XML.writeElementString("ePayment.14", TheCall.ePayment["InsuranceGroup"][d]["ePayment.14"].vSet[0]);
                }
            };
            if (typeof TheCall.ePayment["InsuranceGroup"][d]["ePayment.15"] != 'undefined') {
                if (TheCall.ePayment["InsuranceGroup"][d]["ePayment.15"].IsNull == false) {
                    XML.writeElementString("ePayment.15", TheCall.ePayment["InsuranceGroup"][d]["ePayment.15"].vSet[0]);
                }
            };
            if (typeof TheCall.ePayment["InsuranceGroup"][d]["ePayment.16"] != 'undefined') {
                if (TheCall.ePayment["InsuranceGroup"][d]["ePayment.16"].IsNull == false) {
                    XML.writeElementString("ePayment.16", TheCall.ePayment["InsuranceGroup"][d]["ePayment.16"].vSet[0]);
                }
            };
            if (typeof TheCall.ePayment["InsuranceGroup"][d]["ePayment.17"] != 'undefined') {
                if (TheCall.ePayment["InsuranceGroup"][d]["ePayment.17"].IsNull == false) {
                    XML.writeElementString("ePayment.17", TheCall.ePayment["InsuranceGroup"][d]["ePayment.17"].vSet[0]);
                }
            };
            if (typeof TheCall.ePayment["InsuranceGroup"][d]["ePayment.18"] != 'undefined') {
                if (TheCall.ePayment["InsuranceGroup"][d]["ePayment.18"].IsNull == false) {
                    XML.writeElementString("ePayment.18", TheCall.ePayment["InsuranceGroup"][d]["ePayment.18"].vSet[0]);
                }
            };
            if (typeof TheCall.ePayment["InsuranceGroup"][d]["ePayment.19"] != 'undefined') {
                if (TheCall.ePayment["InsuranceGroup"][d]["ePayment.19"].IsNull == false) {
                    XML.writeElementString("ePayment.19", TheCall.ePayment["InsuranceGroup"][d]["ePayment.19"].vSet[0]);
                }
            };
            if (typeof TheCall.ePayment["InsuranceGroup"][d]["ePayment.20"] != 'undefined') {
                if (TheCall.ePayment["InsuranceGroup"][d]["ePayment.20"].IsNull == false) {
                    XML.writeElementString("ePayment.20", TheCall.ePayment["InsuranceGroup"][d]["ePayment.20"].vSet[0]);
                }
            };
            if (typeof TheCall.ePayment["InsuranceGroup"][d]["ePayment.21"] != 'undefined') {
                if (TheCall.ePayment["InsuranceGroup"][d]["ePayment.21"].IsNull == false) {
                    XML.writeElementString("ePayment.21", TheCall.ePayment["InsuranceGroup"][d]["ePayment.21"].vSet[0]);
                }
            };
            if (typeof TheCall.ePayment["InsuranceGroup"][d]["ePayment.22"] != 'undefined') {
                if (TheCall.ePayment["InsuranceGroup"][d]["ePayment.22"].IsNull == false) {
                    XML.writeElementString("ePayment.22", TheCall.ePayment["InsuranceGroup"][d]["ePayment.22"].vSet[0]);
                }
            };

            XML.writeEndElement();
        }
    };

    XML.writeStartElement("ePayment.ClosestRelativeGroup")
    if (TheCall.ePayment["ePayment.23"] != undefined) {
        if (TheCall.ePayment["ePayment.23"].IsNull == false) {
            XML.writeElementString("ePayment.23", TheCall.ePayment["ePayment.23"].vSet[0]);
        }
    };

    if (TheCall.ePayment["ePayment.24"] != undefined) {
        if (TheCall.ePayment["ePayment.24"].IsNull == false) {
            XML.writeElementString("ePayment.24", TheCall.ePayment["ePayment.24"].vSet[0]);
        }
    };
    if (TheCall.ePayment["ePayment.25"] != undefined) {
        if (TheCall.ePayment["ePayment.25"].IsNull == false) {
            XML.writeElementString("ePayment.25", TheCall.ePayment["ePayment.25"].vSet[0]);
        }
    };

    if (TheCall.ePayment["ePayment.26"] != undefined) {
        if (TheCall.ePayment["ePayment.26"].IsNull == false) {
            XML.writeElementString("ePayment.26", TheCall.ePayment["ePayment.26"].vSet[0]);
        }
    };

    if (TheCall.ePayment["ePayment.27"] != undefined) {
        if (TheCall.ePayment["ePayment.27"].IsNull == false) {
            XML.writeElementString("ePayment.27", TheCall.ePayment["ePayment.27"].vSet[0]);
        }
    };

    if (TheCall.ePayment["ePayment.28"] != undefined) {
        if (TheCall.ePayment["ePayment.28"].IsNull == false) {
            XML.writeElementString("ePayment.28", TheCall.ePayment["ePayment.28"].vSet[0]);
        }
    };

    if (TheCall.ePayment["ePayment.29"] != undefined) {
        if (TheCall.ePayment["ePayment.29"].IsNull == false) {
            XML.writeElementString("ePayment.29", TheCall.ePayment["ePayment.29"].vSet[0]);
        }
    };

    if (TheCall.ePayment["ePayment.30"] != undefined) {
        if (TheCall.ePayment["ePayment.30"].IsNull == false) {
            XML.writeElementString("ePayment.30", TheCall.ePayment["ePayment.30"].vSet[0]);
        }
    };

    if (TheCall.ePayment["ePayment.31"] != undefined) {
        if (TheCall.ePayment["ePayment.31"].IsNull == false) {
            for (var d = 0; d < TheCall.ePayment["ePayment.31"].vSet.length; d++) {
                XML.writeElementString("ePayment.31", TheCall.ePayment["ePayment.31"].vSet[d]);
            }
        }
    };

    if (TheCall.ePayment["ePayment.32"] != undefined) {
        if (TheCall.ePayment["ePayment.32"].IsNull == false) {
            XML.writeElementString("ePayment.32", TheCall.ePayment["ePayment.32"].vSet[0]);
        }
    };

    XML.writeEndElement();

    XML.writeStartElement("ePayment.EmployerGroup")
    if (TheCall.ePayment["ePayment.33"] != undefined) {
        if (TheCall.ePayment["ePayment.33"].IsNull == false) {
            XML.writeElementString("ePayment.33", TheCall.ePayment["ePayment.33"].vSet[0]);
        }
    };

    if (TheCall.ePayment["ePayment.34"] != undefined) {
        if (TheCall.ePayment["ePayment.34"].IsNull == false) {
            XML.writeElementString("ePayment.34", TheCall.ePayment["ePayment.34"].vSet[0]);
        }
    };

    if (TheCall.ePayment["ePayment.35"] != undefined) {
        if (TheCall.ePayment["ePayment.35"].IsNull == false) {
            XML.writeElementString("ePayment.35", TheCall.ePayment["ePayment.35"].vSet[0]);
        }
    };

    if (TheCall.ePayment["ePayment.36"] != undefined) {
        if (TheCall.ePayment["ePayment.36"].IsNull == false) {
            XML.writeElementString("ePayment.36", TheCall.ePayment["ePayment.36"].vSet[0]);
        }
    };

    if (TheCall.ePayment["ePayment.37"] != undefined) {
        if (TheCall.ePayment["ePayment.37"].IsNull == false) {
            XML.writeElementString("ePayment.37", TheCall.ePayment["ePayment.37"].vSet[0]);
        }
    };

    if (TheCall.ePayment["ePayment.38"] != undefined) {
        if (TheCall.ePayment["ePayment.38"].IsNull == false) {
            XML.writeElementString("ePayment.38", TheCall.ePayment["ePayment.38"].vSet[0]);
        }
    };

    XML.writeEndElement();

    if (TheCall.ePayment["ePayment.40"] != undefined) {
        if (TheCall.ePayment["ePayment.40"].IsNull == false) {
            XML.writeElementString("ePayment.40", TheCall.ePayment["ePayment.40"].vSet[0]);
        }
    };
    if (TheCall.ePayment["ePayment.41"] != undefined) {
        if (TheCall.ePayment["ePayment.41"].IsNull == false) {
            for (var d = 0; d < TheCall.ePayment["ePayment.41"].vSet.length; d++) {
                XML.writeElementString("ePayment.41", TheCall.ePayment["ePayment.41"].vSet[d]);
            }
        }
    };
    if (TheCall.ePayment["ePayment.42"] != undefined) {
        if (TheCall.ePayment["ePayment.42"].IsNull == false) {
            for (var d = 0; d < TheCall.ePayment["ePayment.42"].vSet.length; d++) {
                XML.writeElementString("ePayment.42", TheCall.ePayment["ePayment.42"].vSet[d]);
            }
        }
    };
    if (TheCall.ePayment["ePayment.43"] != undefined) {
        if (TheCall.ePayment["ePayment.43"].IsNull == false) {
            XML.writeElementString("ePayment.43", TheCall.ePayment["ePayment.43"].vSet[0]);
        }
    };
    if (TheCall.ePayment["ePayment.44"] != undefined) {
        if (TheCall.ePayment["ePayment.44"].IsNull == false) {
            for (var d = 0; d < TheCall.ePayment["ePayment.44"].vSet.length; d++) {
                XML.writeElementString("ePayment.44", TheCall.ePayment["ePayment.44"].vSet[d]);
            }
        }
    };
    if (TheCall.ePayment["ePayment.45"] != undefined) {
        if (TheCall.ePayment["ePayment.45"].IsNull == false) {
            XML.writeElementString("ePayment.45", TheCall.ePayment["ePayment.45"].vSet[0]);
        }
    }
    if (TheCall.ePayment["ePayment.46"] != undefined) {
        if (TheCall.ePayment["ePayment.46"].IsNull == false) {
            XML.writeElementString("ePayment.46", TheCall.ePayment["ePayment.46"].vSet[0]);
        }
    }
    if (TheCall.ePayment["ePayment.47"] != undefined) {
        if (TheCall.ePayment["ePayment.47"].IsNull == false) {
            for (var d = 0; d < TheCall.ePayment["ePayment.47"].vSet.length; d++) {
                XML.writeElementString("ePayment.47", TheCall.ePayment["ePayment.47"].vSet[d]);
            }
        }
    }
    if (TheCall.ePayment["ePayment.48"] != undefined) {
        if (TheCall.ePayment["ePayment.48"].IsNull == false) {
            XML.writeElementString("ePayment.48", TheCall.ePayment["ePayment.48"].vSet[0]);
        }
    }
    if (TheCall.ePayment["ePayment.49"] != undefined) {
        if (TheCall.ePayment["ePayment.49"].IsNull == false) {
            XML.writeElementString("ePayment.49", TheCall.ePayment["ePayment.49"].vSet[0]);
        }
    }
    if (TheCall.ePayment["ePayment.51"] != undefined) {
        if (TheCall.ePayment["ePayment.51"].IsNull == false) {
            for (var d = 0; d < TheCall.ePayment["ePayment.51"].vSet.length; d++) {
                XML.writeElementString("ePayment.51", TheCall.ePayment["ePayment.51"].vSet[d]);
            }
        }
    }

    if (TheCall.ePayment["ePayment.52"] != undefined) {
        if (TheCall.ePayment["ePayment.52"].IsNull == false) {
            for (var d = 0; d < TheCall.ePayment["ePayment.52"].vSet.length; d++) {
                XML.writeElementString("ePayment.52", TheCall.ePayment["ePayment.52"].vSet[d]);
            }
        }
    };

    if (TheCall.ePayment["ePayment.53"] != undefined) {
        if (TheCall.ePayment["ePayment.53"].IsNull == false) {
            XML.writeElementString("ePayment.53", TheCall.ePayment["ePayment.53"].vSet[0]);
        }
    };

    if (TheCall.ePayment["ePayment.54"] != undefined) {
        if (TheCall.ePayment["ePayment.54"].IsNull == false) {
            XML.writeElementString("ePayment.54", TheCall.ePayment["ePayment.54"].vSet[0]);
        }
    };

    if (typeof TheCall.ePayment["SupplyItemGroup"] != 'undefined') {
        for (var d = 0; d < TheCall.ePayment["SupplyItemGroup"].length ; d++)
        {
            XML.writeStartElement("ePayment.SupplyItemGroup")
            console.log(TheCall.ePayment["SupplyItemGroup"][d])
            if (typeof TheCall.ePayment["SupplyItemGroup"][d]["ePayment.55"] != 'undefined')
            {
                if (TheCall.ePayment["SupplyItemGroup"][d]["ePayment.55"].IsNull == false) {
                    XML.writeElementString("ePayment.55", TheCall.ePayment["SupplyItemGroup"][d]["ePayment.55"].vSet[0]);
                }
            };

            if (typeof TheCall.ePayment["SupplyItemGroup"][d]["ePayment.56"] != 'undefined') {
                if (TheCall.ePayment["SupplyItemGroup"][d]["ePayment.56"].IsNull == false) {
                    XML.writeElementString("ePayment.56", TheCall.ePayment["SupplyItemGroup"][d]["ePayment.56"].vSet[0]);
                }
            };
            XML.writeEndElement();
        }
    };


    XML.writeEndElement();
    XML.writeEndElement();
    XML.writeEndElement();
    XML.writeEndElement();
    XML.writeEndElement();
    //XML.writeAttributeString('timeStamp', Data);
    var XMLDoc = XML.flush()
   console.log(XMLDoc)
    return XML;


};