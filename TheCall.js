
var Utils = require('cloud/UtilitiesCC.js');
var _eRecord = require('cloud/eRecordCC.js');
var _eDispatch = require('cloud/eDispatchCC.js');
var _eDisposition = require('cloud/eDispositionCC.js');
var _eResponse = require('cloud/eResponseCC.js');
var _ePatient = require('cloud/ePatientCC.js');
var _eTimes = require('cloud/eTimesCC.js');
var _eSituation = require('cloud/eSituationCC.js');
var _eCrew = require('cloud/eCrewCC.js');
var _ePayment = require('cloud/ePaymentCC.js');
var _eScene = require('cloud/eSceneCC.js');
var _eInjury = require('cloud/eInjuryCC.js');
var _eArrest = require('cloud/eArrestCC.js');
var _eHistory = require('cloud/eHistoryCC.js');
var _eVitals = require('cloud/eVitalsCC.js');
var _eExam = require('cloud/eExamCC.js');
var _eProtocols = require('cloud/eProtocolsCC.js');
var _eMedications = require('cloud/eMedicationsCC.js');
var _eProcedures = require('cloud/eProceduresCC.js');
var _eOutcome = require('cloud/eOutcomeCC.js');
var _eOther = require('cloud/eOtherCC.js');
var _eAirway = require('cloud/eAirwayCC.js');
var _eDevice = require('cloud/eDeviceCC.js');
var _eLabs = require('cloud/eLabsCC.js');
//var _E01 = require('cloud/E01.js');
var version3XML = require('cloud/Version3XMLCC.js');

var ErrorList = [];
//exports.createTheCall = function (parseObject)
exports.createTheCall = function (parseObject) {
    var LogToConsole = false;

    //    console.log(parseObject)

    //Test Cases:
    //StandBy
    //Cancelled
    //Complete

    /////////////////////////////////
    /////////////////////////////////
    var d = new Date();
    var d2 = new Date();
    var d3 = new Date();
    d2.setHours(d.getHours() - 2);
    d3.setHours(d.getHours() - 1);

    /////////////////////////////////
    /////////////////////////////////

    var eTimesObject = new Object();
    var eScenebject = new Object();
    var eCrewObject = new Object();
    var TheCall = new Object();

    TheCall.To="";
    TheCall.DestinationReason="";

    TheCall.RequiresVersion2 = true;
    TheCall.HasEMD = false;     //Set by eDispatch.  
    TheCall.IsCancelled = false;
    TheCall.IsStandBy = false;
    TheCall.IsComplete = false;
    TheCall.IsValid = false;

    TheCall.CancelType = "";
    TheCall.HasPatient = false;
    TheCall.HasTreatment = false;  //Must have Patient to have Treatment
    TheCall.HasTransport = false;
    TheCall.IsTransfered = false;
    TheCall.PatientDeadAtScene = false;
    TheCall.IsStandby = false;
    TheCall.isVehicleInjury = false;
    var RawPCR = new Object();

    var CallErrors = [];
    var version3 = {};


    //// ///////////////eRecord
    if (LogToConsole == true) {
        console.log("eRecord")
    };

    //Mandatory:  All Data
    var eRecordObject = new Object();
    eRecordObject = getObjectFromOLTPExtract(parseObject, "eRecord");
    eRecordObject.HasDataSet = false;
    if (eRecordObject.IsUndefined != true)
    {
        eRecordObject.HasDataSet = true;
        TheCall.pRecord = eRecordObject;
        RawPCR.pRecord = eRecordObject;

        var eRecord = _eRecord.seteRecord(TheCall);
        if (eRecord.Errors.length > 0)
        {
            //All Errors "Mandatory"
            //InvalidateCall()
            TheCall.IsValid = true;
        }
        else {
            TheCall.IsValid = true;
            TheCall.PCRID = eRecord["eRecord.01"].vSet[0];
            TheCall.eRecord = eRecord;
        }
    };
    
    ////////////////////////Dispatch        
    if (LogToConsole == true) {
        console.log("eDispatch")
    };

        var eDispatchObject = new Object();

        eDispatchObject = getObjectFromOLTPExtract(parseObject, "eDispatch");
        eDispatchObject.HasDataSet = false;
        if (eDispatchObject.IsUndefined != true) {
            eDispatchObject.HasDataSet = true;

            RawPCR.pDispatch = eDispatchObject;
            TheCall.pDispatch = eDispatchObject;
            var eDispatch = _eDispatch.seteDispatch(TheCall);
            if (eDispatch.Errors.length == 0) {
                TheCall.eDispatch = eDispatch
                TheCall.IsStandby = eDispatch.IsStandBy
                TheCall.Complaint = "";
                if (typeof eDispatch["eDispatch.01"] != 'undefined') {
                    TheCall.Complaint = eDispatch["eDispatch.01"].CodeText[0];
                    if (typeof eDispatch["eDispatch.02"] != 'undefined') {
                        if (eDispatch["eDispatch.02"].vSet[0] != '2302001') {
                            TheCall.HasEMD = true
                        }
                    };
                    if (typeof eDispatch["eDispatch.05"] != 'undefined') {
                        TheCall.Priority = eDispatch["eDispatch.05"].CodeText[0];
                        //TheCall.Priority = eDispatch["eDispatch.05"].vSet[0];

                    };
                }
            }
            else {
                //if Errors, push them on ErrorList Stack.
                ErrorList.push(eDispatch.Errors)
            }
        }
        else {
            var Error = {};
            Error.Level = "ELEM";
            Error.Type = "MAN";
            Error.Att = "eDispatch"
            Error.Text = "eDispatch Undefined or Null"
            ErrorList.push(Error)
            TheCall.ErrorsCount = ErrorList.length
            return TheCall;
        };


    //Mandatory:  eDisposition.12
    var eDispositionObject = new Object();
    eDispositionObject = getObjectFromOLTPExtract(parseObject, "eDisposition");
    eDispositionObject.HasDataSet = false;
    if (eDispositionObject.IsUndefined != true) {
        eDispositionObject.HasDataSet = true;
        TheCall.pDisposition = eDispositionObject;
        RawPCR.pDisposition = eDispositionObject;

        var eDisposition = _eDisposition.seteDisposition(TheCall);
        if (eDisposition.Errors.length > 0) {
            //Check for "Mandatory"
            //InvalidateCall()
            TheCall.IsValid = false;
        }
        else
        {
            //Set the Call            
            TheCall.IsValid = true;
            if (eDisposition.IsCancelled == true)
            {
                if(typeof eDisposition["eDisposition.12"] !='undefined')
                {
                    var Disposition = eDisposition["eDisposition.12"].vSet[0]
                    if (Disposition == '4212001') //Assist, Agency
                    {
                        TheCall.CallType = "Agency Assist";
                    }

                    if (Disposition == '4212003') //Assist, Public
                    {
                        TheCall.CallType = "Public Assist";
                    }

                    if (Disposition == '4212005') //Assist, Unit
                    {
                        TheCall.CallType = "Unit Assist";
                    }

                    if (Disposition == '4212007') //Canceled (Prior to Arrival At Scene)
                    {
                        TheCall.CallType = "EMS";
                        TheCall.CancelType = "Prior";
                    }
                    else if (Dispostion == '4212009') //Canceled on Scene (No Patient Contact)
                    {
                        TheCall.CallType = "EMS";
                        TheCall.CancelType = "OnScene";
                        
                    }
                    else if (Dispostion == '4212011') //Canceled on Scene (No Patient Found)
                    {
                        TheCall.CallType = "EMS";
                        TheCall.CancelType = "OnScene";
                    }
                    else if (Dispostion == '4212013') //Patient Dead at Scene-No Resuscitation Attempted (With Transport)
                    {
                        TheCall.CallType = "EMS";
                        TheCall.PatientDead = true;
                        TheCall.HasTransport = true;
                    }
                    else if (Dispostion == '4212015') //Patient Dead at Scene-No Resuscitation Attempted (Without Transport)
                    {
                        TheCall.CallType = "EMS";
                        TheCall.PatientDead = true;
                    }

                    else if (Dispostion == '4212017') //Patient Dead at Scene-Resuscitation Attempted (With Transport)
                    {
                        TheCall.CallType = "EMS";
                        TheCall.PatientDead = true;
                        TheCall.HasTransport = true;
                        TheCall.HasTreatment = true;
                    }
                    else if (Dispostion == '4212019') //Patient Dead at Scene-Resuscitation Attempted (With Transport)
                    {
                        TheCall.CallType = "EMS";
                        TheCall.PatientDead = true;
                        TheCall.HasTreatment = true;
                    }
                    else if (Dispostion == '4212021') //	Patient Evaluated, No Treatment/Transport Required
                    {
                        TheCall.CallType = "EMS";
                    }
                    else if (Dispostion == '4212023') //Patient Refused Evaluation/Care (With Transport)
                    {
                        TheCall.CallType = "EMS";
                        TheCall.HasTransport = true;
                        TheCall.HasPatient = true;
                    }
                    else if (Dispostion == '4212025') //Patient Refused Evaluation/Care (Without Transport)
                    {
                        TheCall.CallType = "EMS";
                    }
                    else if (Dispostion == '4212027') //Patient Treated, Released (AMA)
                    {
                        TheCall.CallType = "EMS";
                    }
                    else if (Dispostion == '4212029') //Patient Treated, Released (per protocol
                    {
                        TheCall.CallType = "EMS";
                        TheCall.HasTreatment = true;
                    }
                    else if (Dispostion == '4212031') //Patient Treated, Transferred Care to Another EMS Unit
                    {
                        TheCall.CallType = "EMS";
                        TheCall.IsTransfered = true;
                    }
                    else if (Dispostion == '4212033') //Patient Treated, Transported by this EMS Unit
                    {
                        TheCall.CallType = "EMS";
                        TheCall.HasTransport = true;
                        TheCall.HasPatient = true;
                        TheCall.HasTreatment = true;
                    }
                    else if (Dispostion == '4212035') //Patient Treated, Transported by Law Enforcement
                    {
                        TheCall.CallType = "EMS";
                        TheCall.HasPatient = true;
                        TheCall.HasTreatment = true;
                        TheCall.IsTransfered = true;
                    }
                    else if (Dispostion == '4212037') //Patient Treated, Transported by Private Vehicle
                    {
                        TheCall.CallType = "EMS";
                        TheCall.HasPatient = true;
                        TheCall.HasTreatment = true;
                        TheCall.IsTransfered = true;
                    }
                    else if (Dispostion == '4212039') //StandBy No Services
                    {
                        TheCall.CallType = "StandBy";
                    }
                    else if (Dispostion == '4212041') //StandBy No Services
                    {
                        TheCall.CallType = "StandBy";
                    }
                    else if (Dispostion == '4212043') //StandBy No Services
                    {
                        TheCall.CallType = "Transport";
                    };
}
                //Set CancelType
            }
            if (typeof eDisposition["eDisposition.01"] != 'undefined') {
                if (eDisposition["eDisposition.12"].vSet[0].length > 0) {
                    TheCall.To = eDisposition["eDisposition.12"].vSet[0]
                }
            };

            if (typeof eDisposition["eDisposition.20"] != 'undefined') {
                if (eDisposition["eDisposition.20"].vSet[0].length > 0) {
                    if (typeof eDisposition["eDisposition.20"].CodeText != 'undefined')
                    {
                        TheCall.DestinationReason = eDisposition["eDisposition.20"].CodeText;
                    }
                }
            };
            TheCall.eDisposition= eDisposition;
        }
    };
    
    
    //Mandatory :  eResponse.01
    //          :  eResponse.05
    //          :  eResponse.07
    //          :  eResponse.13
    //          :  eResponse.14
    //          :  eResponse.15
    //          :  eResponse.23
    

    ////////////////////////eResponse//////////////////////////////
      
    if (LogToConsole == true) {
        console.log("eResponse")
    };

    var eResponseObject = new Object();
    eResponseObject = getObjectFromOLTPExtract(parseObject, "eResponse");
    eResponseObject.HasDataSet = false;
    if (eResponseObject.IsUndefined != true)
    {
        eResponseObject.HasDataSet = true;
        TheCall.pResponse = eResponseObject;
        TheCall.eResponse = _eResponse.seteResponse(TheCall);
        TheCall.HasDelay = false;
        var Delays = [];
        if (typeof TheCall.eResponse.AgencyGroup["eResponse.01"] != 'undefined') {
            if (typeof TheCall.eResponse.AgencyGroup["eResponse.01"].vSet[0] != 'undefined');
            {
                TheCall.AgencyName = TheCall.eResponse.AgencyGroup["eResponse.01"].vSet[0];
            }
        };

        if (typeof TheCall.eResponse.AgencyGroup["eResponse.02"] != 'undefined') {
            if (typeof TheCall.eResponse.AgencyGroup["eResponse.02"].vSet[0] != 'undefined');
            {
                TheCall.AgencyNumber = TheCall.eResponse.AgencyGroup["eResponse.02"].vSet[0];
            }
        };

        if (typeof TheCall.eResponse.ServiceGroup["eResponse.05"] != 'undefined') {
            if (typeof TheCall.eResponse.ServiceGroup["eResponse.05"].CodeText[0] != 'undefined');
            {
                TheCall.ServiceType = TheCall.eResponse.ServiceGroup["eResponse.05"].CodeText[0];
            }
        };

        if (typeof TheCall.eResponse["eResponse.07"] != 'undefined') {
            if (typeof TheCall.eResponse["eResponse.07"].CodeText != 'undefined') {
                TheCall.UnitRole = TheCall.eResponse["eResponse.07"].CodeText[0];
            }
        };

        if (typeof TheCall.eResponse["eResponse.03"] != 'undefined') {
            TheCall.IncidentNumber = TheCall.eResponse["eResponse.03"].vSet[0];
        };

        if (typeof TheCall.eResponse["eResponse.08"] != 'undefined') {
            //Check for "None"
            if (TheCall.eResponse["eResponse.08"].vSet[0] != '2208013') {
                TheCall.HasDelay = true;
                Delays.push("Dispatch");
            }
        };

        if (typeof TheCall.eResponse["eResponse.09"] != 'undefined') {
            if (TheCall.eResponse["eResponse.09"].vSet[0] != '2208011') {
                TheCall.HasDelay = true;
                Delays.push("Response");
            }
        };

        if (typeof TheCall.eResponse["eResponse.10"] != 'undefined') {
            if (TheCall.eResponse["eResponse.10"].vSet[0] != '2210017') {
                TheCall.HasDelay = true;
                Delays.push("Scene");
            }
        };

        if (typeof TheCall.eResponse["eResponse.11"] != 'undefined') {
            if (TheCall.eResponse["eResponse.11"].vSet[0] != '2210011') {
                TheCall.HasDelay = true;
                Delays.push("Transport");
            }
        };

        if (typeof TheCall.eResponse["eResponse.12"] != 'undefined') {
            if (TheCall.eResponse["eResponse.12"].vSet[0] != '2212015') {
                TheCall.HasDelay = true;
                Delays.push("Turn-Around");
            }
        };

        if (typeof TheCall.eResponse["eResponse.13"] != 'undefined') {
            TheCall.UnitNumber = TheCall.eResponse["eResponse.13"].vSet[0]
        }
        else {
            TheCall.IsValid = false
        };


        if (typeof TheCall.eResponse["eResponse.14"] != 'undefined') {
            TheCall.UnitCallSign = TheCall.eResponse["eResponse.14"].vSet[0]
        }
        else {
            TheCall.IsValid = false
        };

        if (typeof TheCall.eResponse["eResponse.15"] != 'undefined') {
            if (typeof TheCall.eResponse["eResponse.15"].CodeText != 'undefined') {
                TheCall.UnitLevelOfCare = TheCall.eResponse["eResponse.15"].CodeText[0];
            }
        }
        else {
            TheCall.IsValid = false
        };

        if (typeof TheCall.eResponse["eResponse.23"] != 'undefined') {
            if (typeof TheCall.eResponse["eResponse.23"].CodeText != 'undefined') {
                TheCall.ResponseModeToScene = TheCall.eResponse["eResponse.23"].CodeText[0]
            }
        }
        else
        {
            TheCall.IsValid = false
        };

        if (typeof TheCall.eResponse["eResponse.24"] != 'undefined') {
            if (typeof TheCall.eResponse["eResponse.24"].CodeText != 'undefined') {
                TheCall.ResponseModeToSceneAdd = TheCall.eResponse["eResponse.24"].CodeText[0]
            }
        }
        else {
            TheCall.IsValid = false
        };

    }
    else {

    };
    
    
    ////////////////////////eTimes
    if (LogToConsole == true) {
        console.log("eTimes")
    };

    eTimesObject = getObjectFromOLTPExtract(parseObject, "eTimes");
    eTimesObject.HasDataSet = false;
    if (eTimesObject.IsUndefined != true) {
        eTimesObject.HasDataSet = true;
        TheCall.pTimes = eTimesObject;
        TheCall.eTimes = _eTimes.seteTimes(TheCall);

        if (typeof TheCall.eTimes["eTimes.01"] != 'undefined') {
            if (TheCall.eTimes["eTimes.01"].length != 0) {
                TheCall.PSAPCallTime = TheCall.eTimes["eTimes.01"].vSet[0];
            }
        };

        if (typeof TheCall.eTimes["eTimes.03"] != 'undefined') {
            if (TheCall.eTimes["eTimes.03"].length != 0) {
                TheCall.UnitNotifiedTime = TheCall.eTimes["eTimes.03"].vSet[0];
            }
        }
        else {
            TheCall.eTimes.IsValid = false
        };
        
        if (typeof TheCall.eTimes["eTimes.04"] != 'undefined') {
            if (TheCall.eTimes["eTimes.04"].length != 0) {
                TheCall.DispatchAcknowledgedTime = TheCall.eTimes["eTimes.04"].vSet[0];
            }
        };

        if (typeof TheCall.eTimes["eTimes.05"] != 'undefined') {
            if (TheCall.eTimes["eTimes.05"].length != 0) {
                TheCall.EnRouteTime = TheCall.eTimes["eTimes.05"].vSet[0];
            }
        };

        if (typeof TheCall.eTimes["eTimes.06"] != 'undefined') {
            if (TheCall.eTimes["eTimes.06"].length != 0) {
                TheCall.OnSceneTime = TheCall.eTimes["eTimes.06"].vSet[0];
            }
        };

        if (typeof TheCall.eTimes["eTimes.07"] != 'undefined') {
            if (TheCall.eTimes["eTimes.07"].length != 0) {
                TheCall.AtPatientTime = TheCall.eTimes["eTimes.07"].vSet[0];
            }
        };

        if (typeof TheCall.eTimes["eTimes.08"] != 'undefined') {
            if (TheCall.eTimes["eTimes.08"].length != 0) {
                TheCall.TransferedTime = TheCall.eTimes["eTimes.08"].vSet[0];
            }
        };
        if (typeof TheCall.eTimes["eTimes.09"] != 'undefined') {
            if (TheCall.eTimes["eTimes.09"].length != 0) {
                TheCall.LeftSceneTime = TheCall.eTimes["eTimes.09"].vSet[0];
            }
        };

        if (typeof TheCall.eTimes["eTimes.11"] != 'undefined') {
            if (TheCall.eTimes["eTimes.11"].length != 0) {
                TheCall.PatientArrivedTime = TheCall.eTimes["eTimes.11"].vSet[0];
            }
        };
        if (typeof TheCall.eTimes["eTimes.12"] != 'undefined') {
            if (TheCall.eTimes["eTimes.12"].length != 0) {
                TheCall.TransferOfCareTime = TheCall.eTimes["eTimes.12"].vSet[0];
            }
        };

        if (typeof TheCall.eTimes["eTimes.13"] != 'undefined') {
            if (TheCall.eTimes["eTimes.13"].length != 0) {
                TheCall.UnitBackInServiceTime = TheCall.eTimes["eTimes.13"].vSet[0];
            }
        }
        else {
            TheCall.eTimes.IsValid = false;
        };

        if (typeof TheCall.eTimes["eTimes.14"] != 'undefined') {
            if (TheCall.eTimes["eTimes.14"].length != 0) {
                TheCall.CallCancelledTime = TheCall.eTimes["eTimes.14"];
            }
        };

    };
    
    
    ///////////////////////////////////ePatient
    if (LogToConsole == true) {
        console.log("ePatient")
    };

    ePatientObject = getObjectFromOLTPExtract(parseObject, "ePatient");
    ePatientObject.HasDataSet = false;
    if (ePatientObject.IsUndefined != true) {
        ePatientObject.HasDataSet = true;
        TheCall.pPatient = ePatientObject;
        TheCall.ePatient = _ePatient.setePatient(TheCall);
        TheCall.HasPatient = true;
    };


    ////////////////////////eSituation
    if (LogToConsole == true) {
        console.log("eSituation")
    };

    eSituationObject = getObjectFromOLTPExtract(parseObject, "eSituation");
    eSituationObject.HasDataSet = false;
    if (eSituationObject.IsUndefined != true) {
        eSituationObject.HasDataSet = true;
        TheCall.pSituation = eSituationObject;
        TheCall.eSituation = _eSituation.seteSituation(TheCall);

        if (typeof TheCall.eSituation["eSituation.03"] != 'undefined') {
            if (TheCall.eSituation["eSituation.03"].length != 0) {
                TheCall.Complaint = TheCall.eSituation["eSituation.03"].vSet[0];
            };
        };

        if (typeof TheCall.eSituation["eSituation.09"] != 'undefined') {
            if (TheCall.eSituation["eSituation.09"].length != 0) {
                TheCall.Symptom = TheCall.eSituation["eSituation.09"].vSet[0];
            }
        };

        if (typeof TheCall.eSituation["eSituation.11"] != 'undefined') {
            if (TheCall.eSituation["eSituation.11"].length != 0) {
                TheCall.PrimaryImpression = TheCall.eSituation["eSituation.11"].vSet[0];
            }
        };
    };
    
    ////////////////////////eCrew
    if (LogToConsole == true) {
        console.log("eCrew")
    };

    eCrewObject = getObjectFromOLTPExtract(parseObject, "eCrew");
    eCrewObject.HasDataSet = false;
    if (eCrewObject.IsUndefined != true) {
        eCrewObject.HasDataSet = true;
        TheCall.pCrew = eCrewObject;
        TheCall.eCrew = _eCrew.seteCrew(TheCall);
    };

    
    ///////////////////////////////////ePayment
    if (LogToConsole == true) {
        console.log("ePayment")
    };

    ePaymentObject = getObjectFromOLTPExtract(parseObject, "ePayment");
    ePaymentObject.HasDataSet = false;
    if (ePaymentObject.IsUndefined != true) {
        ePaymentObject.HasDataSet = true;
        TheCall.pPayment = ePaymentObject;
        TheCall.ePayment = _ePayment.setePayment(TheCall);
    };
    

    ////////////////////////eScene
    eSceneObject = getObjectFromOLTPExtract(parseObject, "eScene");
    if (LogToConsole == true) { 
        console.log("eScene")
    };

    eSceneObject.HasDataSet = false;
    if (eSceneObject.IsUndefined != true) {
        eSceneObject.HasDataSet = true;
        TheCall.pScene = eSceneObject;
        TheCall.eScene = _eScene.seteScene(TheCall);
        var Address = ""
        if (typeof TheCall.eScene["eScene.15"] != 'undefined') {
            if (TheCall.eScene["eScene.15"].length != 0) {
                Address = TheCall.eScene["eScene.15"].vSet[0]
            }
        };

        if (typeof TheCall.eScene["eScene.16"] != 'undefined') {
            if (TheCall.eScene["eScene.16"].length != 0) {
                Address = Address + " " + TheCall.eScene["eScene.16"].vSet[0]
            }
        };
        if (typeof TheCall.eScene["eScene.17"] != 'undefined') {
            if (TheCall.eScene["eScene.17"].length != 0) {
                Address = Address + " " + TheCall.eScene["eScene.17"].vSet[0]
            }
        };
        if (typeof TheCall.eScene["eScene.18"] != 'undefined') {
            if (TheCall.eScene["eScene.18"].length != 0) {
                Address = Address + " " + TheCall.eScene["eScene.18"].vSet[0]
            }
        };
        if (typeof TheCall.eScene["eScene.19"] != 'undefined') {
            if (TheCall.eScene["eScene.19"].length != 0) {
                Address = Address + " " + TheCall.eScene["eScene.19"].vSet[0]
            }
        };
        TheCall.Address = Address;

        if (typeof TheCall.eScene["eScene.11"] != 'undefined') {
            if (TheCall.eScene["eScene.11"].length != 0) {
                TheCall.GPS = TheCall.eScene["eScene.11"].vSet[0]
            }
        };

        if (typeof TheCall.eScene["eScene.08"] != 'undefined') {
            if (TheCall.eScene["eScene.08"].length != 0) {
                TheCall.TriageClassification = TheCall.eScene["eScene.08"].vSet[0]
            }
        };

        if (typeof TheCall.eScene["eScene.13"] != 'undefined') {
            if (TheCall.eScene["eScene.13"].length != 0) {
                TheCall.IncidentLocation = TheCall.eScene["eScene.13"].vSet[0]
            }
        };
    };
    
    ///////////////////////////////////eInjury

    if (LogToConsole == true) {
        console.log("eInjury")
    };

    TheCall.isVehicleInjury = false;
    eInjuryObject = getObjectFromOLTPExtract(parseObject, "eInjury");
    eInjuryObject.HasDataSet = false;
    if (eInjuryObject.IsUndefined != true) {
        eInjuryObject.HasDataSet = true;
        TheCall.pInjury = eInjuryObject;
        TheCall.eInjury = _eInjury.seteInjury(TheCall);

        TheCall.VehicularIncident = false;
        if (typeof TheCall.eInjury["eInjury.04"] != 'undefined') {

            var vehInjuryArr = ["T71.22", "V79.3", "V79.9", "V49.3", "V49.9", "Y32", "V29.3", "V29.9", "V69.3",
         "V69.9", "V59.3", "V59.9", "V39.3", "V39.9", "V81.9", "V82.9", "V03.0", "V03.1",
         "V03.9", "V04.0", "V04.1", "V04.9", "V06.9", "V01", "V05.9", "V02.9", "V09.9", "V00.0",
         "V89.9", "V20.9", "V86.31", "V70.9", "V60.9", "V86.94", "V86.34", "V86.39", "V50.9", "V86.92",
         "V86.32", "V84.9", "V85.9", "V83.9", "V30.9", "V99"];

            for (var i = 0; i < TheCall.eInjury["eInjury.01"].length; i++) {
                if (vehInjuryArr.vSet.indexOf(TheCall.eInjury["eInjury.01"][i]) != -1) {
                    TheCall.VehicularIncident = true;
                }
            }
        }
    };
    
    ///////////////////////////////////eArrest
    if (LogToConsole == true) {
        console.log("eArrest")
    };

    eArrestObject = getObjectFromOLTPExtract(parseObject, "eArrest");
    eArrestObject.HasDataSet = false;
    if (eArrestObject.IsUndefined != true) {
        eArrestObject.HasDataSet = true;
        TheCall.pArrest = eArrestObject;
        TheCall.eArrest = _eArrest.seteArrest(TheCall);
        TheCall.HasCardiac = true;
    };

    ////////////////////////////////eHistory
    if (LogToConsole == true) {
        console.log("eHistory")
    };

    eHistoryObject = getObjectFromOLTPExtract(parseObject, "eHistory");
    eHistoryObject.HasDataSet = false;
    if (eHistoryObject.IsUndefined != true) {
        eHistoryObject.HasDataSet = true;
        TheCall.pHistory = eHistoryObject;
        TheCall.eHistory = _eHistory.seteHistory(TheCall);
    };

    
    ///////////////////////////////////eVitals
    if (LogToConsole == true) {
        console.log("eVitals")
    };
    
    eVitalsObject = getObjectFromOLTPExtract(parseObject, "eVitals");
    eVitalsObject.HasDataSet = false;
    if (eVitalsObject.IsUndefined != true) {
        eVitalsObject.HasDataSet = true;
        TheCall.pVitals = eVitalsObject;
        TheCall.eVitals = _eVitals.seteVitals(TheCall);
    };
    
    
    ///////////////////////////////////eExam
    if (LogToConsole == true) {
        console.log("eExam")
    };
    
    eExamObject = getObjectFromOLTPExtract(parseObject, "eExam");
    eExamObject.HasDataSet = false;
    if (eExamObject.IsUndefined != true) {
        eExamObject.HasDataSet = true;
        TheCall.pExam = eExamObject;
        TheCall.eExam = _eExam.seteExam(TheCall);
    };
    
    ///////////////////////////////////eProtocols
    if (LogToConsole == true) {
        console.log("eProtocols")
    };
    
    eProtocolsObject = getObjectFromOLTPExtract(parseObject, "eProtocols");
    eProtocolsObject.HasDataSet = false;
    if (eProtocolsObject.IsUndefined != true) {
        eProtocolsObject.HasDataSet = true;
        TheCall.pProtocols = eProtocolsObject;
        TheCall.eProtocols = _eProtocols.seteProtocols(TheCall);
    };
        ///////////////////////////////////eMedications
    if (LogToConsole == true) {
        console.log("eMedications")
    };

    
    eMedicationsObject = getObjectFromOLTPExtract(parseObject, "eMedications");
    TheCall.HasMedications = false;
    eMedicationsObject.HasDataSet = false;
    if (eMedicationsObject.IsUndefined != true) {
        eMedicationsObject.HasDataSet = true;
        TheCall.pMedications = eMedicationsObject;
        TheCall.eMedications = _eMedications.seteMedications(TheCall);
    };
    
                    
    ///////////////////////////////////eProcedures
    if (LogToConsole == true) {
        console.log("eProcedures")
    };
    
    eProceduresObject = getObjectFromOLTPExtract(parseObject, "eProcedures");
    TheCall.HasProcedures = false;
    eProceduresObject.HasDataSet = false;
    if (eProceduresObject.IsUndefined != true) {
        eProceduresObject.HasDataSet = true;
        TheCall.pProcedures = eProceduresObject;
        TheCall.eProcedures = _eProcedures.seteProcedures(TheCall);
        if (TheCall.eProcedures.length > 0) {
            TheCall.HasProcedures = true;
        }
        TheCall.Procedures = TheCall.eProcedures.ProcDateTime;
    };
    
    
    ///////////////////////////////////eOutcome
    if (LogToConsole == true) {
        console.log("eOutcome")
    };
    
    eOutcomeObject = getObjectFromOLTPExtract(parseObject, "eOutcome");
    eOutcomeObject.HasDataSet = false;
    if (eOutcomeObject.IsUndefined != true) {
        eOutcomeObject.HasDataSet = true;
        TheCall.pOutcome = eOutcomeObject;
        TheCall.eOutcome = _eOutcome.seteOutcome(TheCall);
    };
      
    ///////////////////////////////////eAirway
    
    if (LogToConsole == true) {
        console.log("eAirway")
    };
    eAirwayObject = getObjectFromOLTPExtract(parseObject, "eAirway");
    eAirwayObject.HasDataSet = false;
    if (eAirwayObject.IsUndefined != true) {
        eAirwayObject.HasDataSet = true;
        TheCall.pAirway = eAirwayObject;
        TheCall.eAirway = _eAirway.seteAirway(TheCall);
        TheCall.HasAirway = true;
    };
    
    ///////////////////////////////////eOther
    if (LogToConsole == true) {
        console.log("eOther")
    };
    
    eOtherObject = getObjectFromOLTPExtract(parseObject, "eOther");
    eOtherObject.HasDataSet = false;
    if (eOtherObject.IsUndefined != true) {
        eOtherObject.HasDataSet = true;
        TheCall.pOther = eOtherObject;
        TheCall.eOther = _eOther.seteOther(TheCall);
    };

    /*
    
    /////////////////////////////////eDevice   
    if (LogToConsole == true) {
        console.log("eDevice")
    };
    eDeviceObject = getObjectFromOLTPExtract(parseObject, "eDevice");
    eDeviceObject.HasDataSet = false;
    if (eDeviceObject.IsUndefined != true) {
        eDeviceObject.HasDataSet = true;
        TheCall.pDevice = eDeviceObject;
        TheCall.eDevice = _eDevice.seteDevice(TheCall);
    };
    
    /////////////////////////////////eLabs
    if (LogToConsole == true) {
        console.log("eLabs")
    };
    eLabsObject = getObjectFromOLTPExtract(parseObject, "eDevice");
    eLabsObject.HasDataSet = false;
    if (eLabsObject.IsUndefined != true) {
        eLabsObject.HasDataSet = true;
        TheCall.pLabs = eLabsObject;
        TheCall.eLabs = _eLabs.seteLabs(TheCall);
    };
  


    //      var version3OLAP = {};
    //   version3OLAP = setV3OLAP(TheCall)

    // TheCall.V3OLAP = version3OLAP;


    // Now we have TheCall
    //Narrative
    //var narArray = setNarrative(TheCall)
    //for (var i = 0; i < narArray.length; i++) {
    //console.log(narArray[i])
    //};
    //TheCall.Raw = RawData;
    //var v2Object = {};
    //Create Version 2
    //    if (TheCall.RequiresVersion2 == true) {

    /*E01 = setE01(TheCall);
      if (E01.IsUndefined == false) {
          if (LogToConsole == true) {
              console.log("E01")
          };
          v2Object.E01 = E01;
      };
      */
    //       TheCall.Version2 = v2Object;
    //       var v2XML = setV2XML(TheCall.Version2)

    //       TheCall.Version2XML = TheCall.Version2;

    /*
    var vText = "";
    var Element = "";
    var ElementName = "";
    var ElementValue = "";

    for (var i = 0; i < v2Text.length; i++)
    {
        console.log(v2Text.length)
        var str = v2Text[i]
        var res = str.split("|")
        Element = res[0];
        var ElementName = res[1];
        var ElementValue = res[2];
        vText = vText + v2Text[i] + "\n";
        console.log(i + " " + vText)
    };
    */
    //      console.log(v2XML)
    /*
    if (v2Text.length != 0) {
        var myTable = "";
        myTable="<body style=\"margin-top: 0px; margin-left: 0px; margin-right: 0px;\">"
        myTable=myTable +"<TABLE BORDER=\"5\"  WIDTH=\"60%\"   CELLPADDING=\"4\" CELLSPACING=\"3\"> "
        
        for (var i = 0; i < v2Text.length; i++)
        {
            var vText = "";
            var str = v2Text[i]
            var res = str.split("|")           
            Element = res[0];
            var ElementName = res[1];
            var ElementValue = res[2];
            vText = vText + v2Text[i] + "\n";
            console.log (vText)
            myTable = myTable + '<tr><td>' + Element + '</td><td>' + ElementName + '</td><td>' + ElementValue + '</td></tr>';

        }
    };
    //Create Version 2 XML File

    var version2XMLByteArray = v2XML.getBytes();
    var englishFileByteArray = vText.getBytes();
    var htmlFileByteArray = myTable.getBytes();
    
    var xmlFile = new Parse.File("Version2.XML", version2XMLByteArray)
    var englishFile = new Parse.File("Version2.txt", englishFileByteArray)
    var htmlFile = new Parse.File("Version2.html", htmlFileByteArray)

    
        */
    //   }; //requires Version 2
    //    TheCall.RawPCR = RawPCR;

    var V3XML = {};
    V3XML = version3XML.setV3XML(TheCall);
    console.log(V3XML)
    
    //console.log(bytes.length)
    // XMLFile = makeFile(V3XML);  //
    /*
    var base64 = "V29ya2luZyBhdCBQYXJzZSBpcyBncmVhdCE=";
    var thumbnail = new Parse.File("Tet.txt", { base64: base64 });

    

    thumbnail.save().then(function ()
    {
        var MyCall = Parse.Object("TheCall");
        var myCall = new MyCall();
        myCall.set("PCR", "ThisMayWOrk");
        myCall.set("TestFileObject", thumbnail);
    myCall.set("Complaint", "TheCall.Complaint");
    //myCall.set("Errors", TheCall.Error);
    myCall.save(null, {
        success: function (myCall) {
            // Execute any logic that should take place after the object is saved.
           // alert('New object created with objectId: ' + myCall.id);
        },
        error: function (myCall, error) {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            //alert('Failed to create new object, with error code: ' + error.message);
        }
    })

    }, function (error) {

        console.log("Error")

    });
    */














    /*
    var MyCall = new Parse.Object.extend("TheCall");
    MyCall.set("PCR", "TheCall.PCRID");
    MyCall.save()
    
    file.save().then(function() {
        console.log("AfterSave")
        var MyCall = new Parse.Object("TheCall");
        MyCall.set("PCR", "TheCall.PCRID");
        MyCall.save()

    }, function(error) {

        console.log("Error")

    });

    
    */
    
    //TheCall.V3XML = version3XML;

    //xx = setV3English(TheCall)
    // d = genBill(TheCall);

    //TheCall.Version3XML = b;
    // d = genBill(TheCall)
    // TheCall.BillFIle = d;


    return TheCall

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
String.prototype.getBytes = function (callback) {
    var bytes = [];
    for (var i = 0; i < this.length; ++i) {
        bytes.push(this.charCodeAt(i));
    }
    callback(bytes);
};




var makeFile = function (param) {
    return {
        then: function (callback) {

            var bytes = [];
            for (var i = 0; i < this.length; ++i) {
                bytes.push(this.charCodeAt(i));
            }
            callback(bytes);
        }
    };
};
