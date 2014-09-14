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
    if (typeof businessObject != 'undefined') {
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
            if (typeof elementList[i].attributes.params != 'undefined')
            {
                if (typeof elementList[i].attributes.params.PhoneNumberType != 'undefined') {
                    returnObject.PhoneNumberType = elementList[i].attributes.params.PhoneNumberType.value;
                };
                if (typeof elementList[i].attributes.params.EmailType != 'undefined') {
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

