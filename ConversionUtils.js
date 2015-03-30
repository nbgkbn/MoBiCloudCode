var V2NOTKNOWN = "-10"
var V2NOTAPPLICABLE = "-25"
var V2NOTRECORDED = "-20"
function setV2(NEMSISElementNumber, v3Val, compValue)
{
    var _retv = "";

    switch (NEMSISElementNumber) {
        case "eArrest.01":

            if (typeof eArrest01[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eArrest01[v3Val];
            }
            break;
        case "eArrest.02":
            if (typeof eArrest02[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eArrest02[v3Val];
            }
            break;
        case "eArrest.03":
            if (typeof eArrest03[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eArrest03[v3Val];
            }
            break;

        case "eArrest.04":
            if (typeof eArrest04[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eArrest04[v3Val];
            }
            break;


        case "eArrest.11":
            if (typeof eArrest11[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eArrest11[v3Val];
            }
            break;

        case "eArrest.12":
            if (typeof eArrest12[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eArrest12[v3Val];
            }
            break;

        case "eArrest.13":
            if (typeof eArrest13[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eArrest13[v3Val];
            }
            break;



        case "eArrest.16":
            if (typeof eArrest16[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eArrest16[v3Val];
            }
            break;


        case "eArrest.17":
            if (typeof eArrest17[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eArrest17[v3Val];
            }
            break;

        case "eCrew.02":
            if (typeof eCrew02[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eCrew02[v3Val];
            }
            break;
        case "eCrew.03":
            if (typeof eCrew03[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eCrew03[v3Val];
            }
            break;

        case "eDispatch.01":
            if (typeof eDispatch01[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eDispatch01[v3Val];
            }
            break;

        case "eDispatch.02":
            if (typeof eDispatch02[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eDispatch02[v3Val];
            }
            break;
            /*
        case "eDispatch.03":
            if(typeof eDispatch03[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eDispatch03[v3Val];
            }
            break;
            */
        case "eDispatch.04":
            if (typeof eDispatch04[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eDispatch04[v3Val];
            }
            break;
        case "eDispatch.06":
            if (typeof eDispatch06[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eDispatch06[v3Val];
            }
            break;
        case "eDispatch.07":
            if (typeof eDispatch07[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eDispatch07[v3Val];
            }
            break;
        case "eDispatch.08":
            if (typeof eDispatch08[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eDispatch08[v3Val];
            }
            break;

        case "eDisposition.12":

            if (typeof eDisposition12[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eDisposition12[v3Val];
            }
            break;
        case "eDisposition.13":
            if (typeof eDisposition13[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eDisposition13[v3Val];
            }

            break;
        case "eDisposition.14":

            if (typeof eDisposition14[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eDisposition14[v3Val];
            }
            break;

        case "eDisposition.15":

            if (typeof eDisposition15[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eDisposition15[v3Val];
            }
            break;

        case "eDisposition.17":

            if (typeof eDisposition17[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eDisposition17[v3Val];
            }
            break;


        case "eDisposition.19":

            if (typeof eDisposition19[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eDisposition19[v3Val];
            }
            break;

        case "eDisposition.20":

            if (typeof eDisposition20[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eDisposition20[v3Val];
            }
            break;
        case "eDisposition.21":

            if (typeof eDisposition21[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eDisposition21[v3Val];
            }
            break;

        case "eExam.02":
            if (typeof eExam02[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eExam02[v3Val];
            }
            break;

        case "eExam.04":
            if (typeof eExam04[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eExam04[v3Val];
            }
            break;

        case "eExam.05":
            if (typeof eExam05[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eExam05[v3Val];
            }
            break;

        case "eExam.07":
            if (typeof eExam07[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eExam07[v3Val];
            }
            break;

        case "eExam.08":
            if (typeof eExam08[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eExam08[v3Val];
            }
            break;

        case "eExam.09":
            if (typeof eExam09[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eExam09[v3Val];
            }
            break;

        case "eExam.11":
            if (compValue == "3510001")  //General
            {
                if (typeof eExam10_General[v3Val] == 'undefined') {
                    _retv = v3Val;
                }
                else {
                    _retv = eExam10_General[v3Val];
                }
            };
            if (compValue == "3510003")//Left Lower Quadrant
            {
                if (typeof eExam10_LeftLower[v3Val] == 'undefined') {
                    _retv = v3Val;
                }
                else {
                    _retv = eExam10_LeftLower[v3Val];
                }
            };

            if (compValue == "3510005") //Left Upper Quadrant
            {
                if (typeof eExam10_LeftUpper[v3Val] == 'undefined') {
                    _retv = v3Val;
                }
                else {
                    _retv = eExam10_LeftUpper[v3Val];
                }
            };

            if (compValue == "3510007") //Periumbilical
            {
                if (typeof eExam10_Periumbilical[v3Val] == 'undefined') {
                    _retv = v3Val;
                }
                else {
                    _retv = eExam10_Periumbilical[v3Val];
                }
            };
            if (compValue == "3510009") //Right Lower Quadrant
            {
                if (typeof eExam10_RightLower[v3Val] == 'undefined') {
                    _retv = v3Val;
                }
                else {
                    _retv = eExam10_RightLower[v3Val];
                }
            };
            if (compValue == "3510011")//Right Upper Quadrant
            {
                if (typeof eExam10_RightUpper[v3Val] == 'undefined') {
                    _retv = v3Val;
                }
                else {
                    _retv = eExam10_RightUpper[v3Val];
                }
            };
            break;

        case "eExam.12":
            if (typeof eExam12[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eExam12[v3Val];
            }
            break;

        case "eExam.14":
            //Need to determine area of exam using eExam13 values
            if (compValue.length < 1) {
                _retv = "3765";
            }
            else {
                var examSet1 = ["3513001", "3513003", "3513005", "3513007"]
                //If 
                if (typeof examSet1.indexOf(compValue) > -1) {
                    if (typeof eExam13_3513001[v3Val] == 'undefined') {
                        _retv = v3Val;
                    }
                    else {
                        _retv = eExam13_3513001[v3Val];
                    }
                };
                var examSet2 = ["3513009", "3513011", "3513013", "3513021", "3513023", "3513027"]
                if (typeof examSet2.indexOf(compValue) > -1) {
                    if (typeof eExam13_3513009[v3Val] == 'undefined') {
                        _retv = v3Val;
                    }
                    else {
                        _retv = eExam13_3513009[v3Val];
                    }
                };
                var examSet2 = ["3513017", "3513019", "3513025"]
                if (typeof examSet2.indexOf(compValue) > -1) {
                    if (typeof eExam13_3513017[v3Val] == 'undefined') {
                        _retv = v3Val;
                    }
                    else {
                        _retv = eExam13_3513017[v3Val];
                    }
                }
            };
            break;

        case "eExam.16":
            var examSet1 = ["3515007", "3515011", "3515015", "3515019", "3515023", "3515027", "3515039", "3515043", "3515047", "3515067", "3515071", "3515095"]
            if (typeof examSet1.indexOf(compValue) > -1)  //Extremities, right upper
            {
                if (typeof eExam15_ExtremitiesRightUpper[v3Val] == 'undefined') {
                    _retv = v3Val;
                }
                else {
                    _retv = eExam15_ExtremitiesRightUpper[v3Val];
                }
            };
            var examSet2 = ["3515005", "3515009", "3515013", "3515017", "3515021", "3515025", "3515037", "3515041", "3515045", "3515065", "3515069", "3515093"]
            if (typeof examSet2.indexOf(compValue) > -1)//Extremities, left upper
            {
                if (typeof eExam15_ExtremitiesLeftUpper[v3Val] == 'undefined') {
                    _retv = v3Val;
                }
                else {
                    _retv = eExam15_ExtremitiesLeftUpper[v3Val];
                }
            };
            var examSet3 = ["3515003", "3515031", "3515035", "3515051", "3515055", "3515059", "3515063", "3515075", "3515077", "3515079", "3515083", "3515087", "3515091"]
            if (typeof examSet3.indexOf(compValue) > -1)//Right Lower
            {
                if (typeof eExam15_RightLower[v3Val] == 'undefined') {
                    _retv = v3Val;
                }
                else {
                    _retv = eExam15_RightLower[v3Val];
                }
            };


            var examSet4 = ["3515001", "3515029", "3515033", "3515049", "3515053", "3515057", "3515061", "3515073", "3515075", "35150777", "3515081", "3515057", "3515089"]
            if (typeof examSet4.indexOf(compValue) > -1)//Left Lower
            {

                if (typeof eExam15_LeftLower[v3Val] == 'undefined') {
                    _retv = v3Val;
                }
                else {
                    _retv = eExam15_LeftLower[v3Val];
                }
            };
            break;

        case "eExam.18":
            var examSet1 = ["3517001", "3517003"] //Bilateral and Left
            if (typeof examSet1.indexOf(compValue) > -1)//Left Lower
            {
                if (typeof eExam18_BilateralandLeft[v3Val] == 'undefined') {
                    _retv = v3Val;
                }
                else {
                    _retv = eExam18_BilateralandLeft[v3Val];
                }
            };
            var examSet1 = ["3517001", "3517005"] //Bilateral and Right
            if (typeof examSet1.indexOf(compValue) > -1)//Left Lower
            {
                {
                    if (typeof eExam18_BilateralandRight[v3Val] == 'undefined') {
                        _retv = v3Val;
                    }
                    else {
                        _retv = eExam18_BilateralandRight[v3Val];
                    }
                };
            }
            break;
        case "eExam.19":
            if (typeof eExam19[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eExam19[v3Val];
            }
            break;

        case "eExam.20":
            if (typeof eExam20[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eExam20[v3Val];
            }
            break;

        case "eHistory.01":
            if (typeof eHistory01[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eHistory01[v3Val];
            }
            break;
        case "eHistory.05":
            if (typeof eHistory05[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eHistory05[v3Val];
            }
            break;
        case "eHistory.09":
            if (typeof eHistory09[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eHistory09[v3Val];
            }
            break;
        case "eHistory.10":
            if (typeof eHistory10[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eHistory10[v3Val];
            }
            break;
        case "eHistory.14":
            if (typeof eHistory14[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eHistory14[v3Val];
            }
            break;
        case "eHistory.15":
            if (typeof eHistory15[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eHistory15[v3Val];
            }
            break;
        case "eHistory.16":
            if (typeof eHistory16[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eHistory16[v3Val];
            }
            break;
        case "eHistory.17":
            if (typeof eHistory17[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eHistory17[v3Val];
            }
            break;
        case "eHistory.18":
            if (typeof eHistory18[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eHistory18[v3Val];
            }
            break;


        case "eMedications.02":

            if (typeof eMedication02[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eMedication02[v3Val];
            }
            break;
        case "eMedications.04":

            if (typeof eMedication04[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = (eMedication04[v3Val]);
            }
            break;
        case "eMedications.06":
            if (typeof eMedications06[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eMedications06[v3Val];
            }
            break;
        case "eMedications.07":
            if (typeof eMedications07[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eMedications07[v3Val];
            };
            break;
        case "eMedications.08":
            if (typeof eMedication08[v3Val] == 'undefined') {
                _retv = v3Val;;
            }
            else {
                _retv = eMedication08[v3Val];
            };

            break;
        case "eMedications.11":
            if (typeof eMedications11[v3Val] == 'undefined') {
                _retv = v3Val;;
            }
            else {
                _retv = eMedications11[v3Val];
            };
            break;

        case "eOther.01":
            if (typeof eOther01[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eOther01[v3Val];
            };
            break;
        case "eOther.02":
            if (typeof eOther02[v3Val] == 'undefined') {
                _retv = v3Val;;
            }
            else {
                _retv = eOther02[v3Val];
            };
            break;
        case "eOther.03":
            if (typeof eOther03[v3Val] == 'undefined') {
                _retv = v3Val;;
            }
            else {
                _retv = eOther03[v3Val];
            };
            break;
        case "eOther.05":
            if (typeof eOther05[v3Val] == 'undefined') {
                _retv = v3Val;;
            }
            else {
                _retv = eOther05[v3Val];
            };
            break;
        case "eOther.06":
            if (typeof eOther06[v3Val] == 'undefined') {
                _retv = v3Val;;
            }
            else {
                _retv = eOther06[v3Val];
            };
            break;
        case "eOther.07":
            if (typeof eOther07[v3Val] == 'undefined') {
                _retv = v3Val;;
            }
            else {
                _retv = eOther07[v3Val];
            };
            break;
        case "eOutcome.01":
            if (v3Val.length == 1) {
                v3Val = "0" + v3Val;
            };
            if (typeof eOutcome01[v3Val] == 'undefined') {
                _retv = v3Val;;
            }
            else {
                _retv = eOutcome01[v3Val];
            };
            break;
        case "eOutcome.02":
            if (v3Val.length == 1) {
                v3Val = "0" + v3Val;
            };
            if (typeof eOutcome02[v3Val] == 'undefined') {
                _retv = v3Val;;
            }
            else {
                _retv = eOutcome02[v3Val];
            };
            break;
        case "eOutcome.03":
            if (typeof eOutcome03[v3Val] == 'undefined') {
                _retv = v3Val;;
            }
            else {
                _retv = eOutcome03[v3Val];
            };
            break;
        case "eOutcome.17":
            if (typeof eOutcome17[v3Val] == 'undefined') {
                _retv = v3Val;;
            }
            else {
                _retv = eOutcome17[v3Val];
            };
            break;
        case "ePatient.13":
            if (typeof ePatient13[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = ePatient13[v3Val];
            }
            break;

        case "ePatient.14":
            if (typeof ePatient14[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = ePatient14[v3Val];
            }

            break;
        case "ePatient.16":
            if (typeof ePatient16[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = ePatient16[v3Val];
            }
            break;
        case "ePayment.01":
            if (typeof ePayment01[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = ePayment01[v3Val];
            }
            break;

        case "ePayment.02":
            if (typeof ePayment02[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = ePayment02[v3Val];
            }
            break;
        case "ePayment.07":
            if (typeof ePayment11[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = ePayment11[v3Val];
            }
            break;
        case "ePayment.32":
            if (typeof ePayment32[v3Val] == 'undefined')
            {
                _retv = v3Val;
            }
            else
            {
                _retv = ePayment32[v3Val];
            }
            break;
        case "ePayment.40":
            if (typeof ePayment40[v3Val] == 'undefined')
            {
                _retv = v3Val;
            }
            else
            {
                _retv = ePayment40[v3Val];
            }
            break;
        case "ePayment.50":
            if (typeof ePayment50[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = ePayment50[v3Val];
            }
            break;
        case "ePayment.52":
            if (typeof ePayment52[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = ePayment52[v3Val];
            }
            break;
        case "eProtocols.01":
            if (typeof eProtocols01[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eProtocols01[v3Val];
            }
            break;
        case "eProcedures.02":
            if (typeof eProcedures02[v3Val] == 'undefined') {

                _retv = v3Val;
            }
            else {
                _retv = eProcedures02[v3Val];
            }
            break;
        case "eProcedures.06":
            if (typeof eProcedures06[v3Val] == 'undefined') {

                _retv = v3Val;
            }
            else {
                _retv = eProcedures06[v3Val];
            }
            break;

        case "eProcedures.07":
            if (typeof eProcedures07[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eProcedures07[v3Val];
            }
            break;
        case "eProcedures.08":
            if (typeof eProcedures08[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eProcedures08[v3Val];
            }
            break;
        case "eProcedures.07":
            if (typeof eProcedures11[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eProcedures11[v3Val];
            }
            break;
        case "eProcedures.11":
            if (typeof eProcedures11[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eProcedures11[v3Val];
            }
            break;
        case "eProcedures.13":
            if (typeof eProcedures13[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eProcedures13[v3Val];
            }
            break;

        case "eResponse.05":
            if (typeof eResponse05[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eResponse05[v3Val];
            }
            break;


        case "eResponse.07":
            if (typeof eResponse07[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eResponse07[v3Val];
            }
            break;

        case "eResponse.08":
            if (typeof eResponse08[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eResponse08[v3Val];
            }
            break;


        case "eResponse.09":
            if (typeof eResponse09[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eResponse09[v3Val];
            }
            break;

        case "eResponse.10":
            if (typeof eResponse10[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eResponse10[v3Val];
            }
            break;

        case "eResponse.11":
            if (typeof eResponse11[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eResponse11[v3Val];
            }
            break;
        case "eResponse.12":
            if (typeof eResponse12[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eResponse12[v3Val];
            }
            break;
        case "eResponse.23":
            if (typeof eResponse23[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eResponse23[v3Val];
            }
            break;


        case "eScene.04":
            if (typeof eScene04[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eScene04[v3Val];
            }
            break;
        case "eScene.06":
            if (typeof eScene06[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eScene06[v3Val];
            }
            break;
        case "eScene.07":
            if (typeof eScene07[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eScene07[v3Val];
            }
            break;
        case "eScene.09":
            if (typeof eScene09[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eScene09[v3Val];
            }
            break;

        case "eSituation.02":
            if (typeof eSituation02[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eSituation02[v3Val];
            }
            break;
        case "eSituation.06":
            if (typeof eSituation06[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eSituation06[v3Val];
            }
            break;
        case "eSituation.07":
            if (typeof eSituation07[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eSituation07[v3Val];
            }
            break;
        case "eSituation.08":
            if (typeof eSituation08[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eSituation08[v3Val];
            }
            break;
        case "eSituation.09":
            if (typeof eSituation09[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eSituation09[v3Val];
            }
            break;

        case "eSituation.10":
            if (typeof eSituation10[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eSituation10[v3Val];
            }
            break;
        case "eVitals.02":
            if (typeof eVitals02[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eVitals02[v3Val];
            }
            break;
        case "eVitals.03":
            if (typeof eVitals03[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eVitals03[v3Val];
            }
            break;
        case "eVitals.08":
            if (typeof eVitals08[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eVitals08[v3Val];
            }
            break;
        case "eVitals.13":
            if (typeof eVitals13[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eVitals13[v3Val];
            }
            break;
        case "eVitals.15":
            if (typeof eVitals15[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eVitals15[v3Val];
            }
            break;
        case "eVitals.19":
            if (typeof eVitals19[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eVitals19[v3Val];
            }
            break;
        case "eVitals.20":
            if (typeof eVitals20[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eVitals20[v3Val];
            }
            break;
        case "eVitals.21":
            if (typeof eVitals21[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eVitals21[v3Val];
            }
            break;
        case "eVitals.22":
            if (typeof eVitals22[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eVitals22[v3Val];
            }
            break;
        case "eVitals.25":
            if (typeof eVitals25[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eVitals25[v3Val];
            }
            break;
        case "eVitals.26":
            if (typeof eVitals26[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eVitals26[v3Val]
            }
            break;
        case "eVitals.29":
            if (typeof eVitals29[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eVitals29[v3Val];
            }
            break;
        case "eVitals.31":
            if (typeof eVitals31[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eVitals31[v3Val];
            }
            break;
        case "eInjury.05":
            if (typeof eInjury05[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eInjury05[v3Val];
            }
            break;

        case "eInjury.04":
            if (typeof eInjury04[v3Val] == 'undefined') {
                _retv = v3Val;
            }
            else {
                _retv = eInjury04[v3Val];
            }
            break;

        default:
            _retv = NEMSISElementNumber = v3Val;
    }
    return _retv;
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
var eArrest16 = {
    "3016001": "2430",
    "3016003": "2435",
    "3016005": "2440",
    "3016009": "2445",
    "3016011": "2450"
};
var eArrest17 = {
    "9901001": "2470",
    "9901003": "2480",
    "9901005": "2475",
    "9901007": "2485",
    "9901009": "2485",
    "9901011": "2490",
    "9901013": "2495",
    "9901015": "2500",
    "9901017": "2505",
    "9901019": "2510",
    "9901021": "2515",
    "9901023": "2525",
    "9901025": "2525",
    "9901027": "2525",
    "9901029": "2525",
    "9901031": "2525",
    "9901033": "2530",
    "9901035": "2535",
    "9901037": "2540",
    "9901039": "2545",
    "9901041": "2550",
    "9901043": "2555",
    "9901045": "2560",
    "9901047": "2520",
    "9901049": "2565",
    "9901051": "2455",
    "9901053": "2460",
    "9901055": "2465",
    "9901057": "2465",
    "9901059": "2570",
    "9901061": "2575",
    "9901063": "2580",
    "9901065": "2585",
    "9901067": "2590",
    "9901069": "2595",
    "9901071": "2595",
};
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
    "9925013": "6120",
    "9925015": "6090",
    "9925017": "6100",
    "9925019": "6110",
    "9925021": "6111",
    "9925023": "6111",
    "9925025": "6112",
    "9925027": "6112",
    "9925031": "6111",
    "9925033": "6110",
    "9925034": "6100",
    "9925037": "6110",
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
    "3101001": "2610",
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
var ePayment32 = {
    "2632001": "950",
    "2632003": "970",
    "2632005": "955",
    "2632007": "960",
    "2632009": "965",
    "2632011": "965",
    "2632013": "965",
    "2632015": "975",
    "2632017": "965",
    "2632019": "965",
    "2632021": "-10"
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
var eResponse05 = {
    "2205001": "30",
    "2205003": "35",
    "2205005": "40",
    "2205007": "45",
    "2205009": "50",
    "2205013": "55"
};
var eResponse07 = {
    "2207007": "60",
    "2207009": "65",
    "2207005": "70",
    "2207003": "75"
};
var eResponse08 = {
    "2208001": "80",
    "2208003": "85",
    "2208005": "85",
    "2208007": "90",
    "2208009": "95",
    "2208011": "100",
    "2208013": "105",
    "2208015": "110",
    "2208009": "115",
    "2208017": "120"
};
var eResponse09 = {
    "2209001": "125",
    "2209003": "130",
    "2209005": "135",
    "2209007": "140",
    "2209009": "145",
    "2209011": "170",
    "2209013": "155",
    "2209019": "160",
    "2209021": "165",
    "2209023": "170",
    "2209025": "175",
    "2209027": "180",
    "2209029": "185"
};
eResponse10 =
    {
        "2210001": "230",
        "2210003": "230",
        "2210005": "190",
        "2210007": "195",
        "2210009": "200",
        "2210011": "210",
        "2210013": "215",
        "2210015": "220",
        "2210017": "225",
        "2210019": "230",
        "2210021": "210",
        "2210023": "235",
        "2210025": "235",
        "2210027": "240",
        "2210029": "245",
        "2210031": "230",
        "2210033": "250",
        "2210035": "255",
        "2210037": "260",
        "2210037": "230"
    };
eResponse11 =
{
    "2211001": "265",
    "2211003": "270",
    "2211005": "275",
    "2211007": "280",
    "2211009": "285",
    "2211011": "290",
    "2211013": "295",
    "2211015": "295",
    "2211017": "280",
    "2211019": "300",
    "2211021": "305",
    "2211023": "310",
    "2211025": "315",
    "2211027": "320",
    "2211029": "325",
};
eResponse12 =
    {
        "2212001": "330",
        "2212003": "335",
        "2212005": "365",
        "2212007": "340",
        "2212009": "345",
        "2212011": "350",
        "2212013": "355",
        "2212015": "360",
        "2212017": "365",
        "2212019": "370",
        "2212021": "365",
        "2212023": "370",
        "2212025": "365",
        "2212027": "375",
        "2212029": "375",
        "2212031": "365",
        "2212033": "365"
    };
eResponse23 = {

    "2223001": "390",
    "2223003": "390",
    "2223005": "395",
    "2223007": "385"
}
var eScene04 = {
    "2704001": "1060",
    "2704003": "1065",
    "2704007": "1070",
    "2704009": "1075",
    "2704015": "1080",
    "2704011": "1085",
    "2704017": "1090",
    "2704019": "1095"
};
var eScene06 = {
    "2707001": "1130",
    "2707003": "1120",
    "2707005": "1125"
};
var eScene07 = {
    "9923001": "0",
    "9923003": "1"
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
var eSituation02 = {
    "9922001": "0",
    "9922003": "-10",
    "9922005": "1"
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
    "2808001": "1385",
    "2808003": "1350",
    "2808005": "1355",
    "2808007": "1360",
    "2808009": "1365",
    "2808011": "1370",
    "2808013": "1360",
    "2808015": "1375",
    "2808017": "1380",
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
var eOther05 =
    {
        "9923001": "0",
        "9923003": "1"
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
    "01": "5370",
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
var eProcedures02 =
{
    "9923001": "0",
    "9923003": "1",
};
var eProcedures06 =
{
    "9923001": "0",
    "9923003": "1",
};


eProcedures03 = {
    "425058005":"89.700",
    "422618004": "89.700",
    "428803005":"89.821",
    "268400002":"89.821",
    "429163003":"89.821",
    "425808002":"89.821",
    "89666000":" 99.600",
    "429283006":"99.603",
    "250980009":"99.623",
    "426220008":"99.625",    
    "34475007":"37.611",
    "386237008":"37.612",
    "18590009":"99.624",
    "309849004":"37.000",
    "225708008":"99.604",
    "128968000":"99.640",
    "424432007:":"1.181",
    "230937006":"93.057",
    "304562007":"101.203",
    "409530006":"101.203",
    "49999004":"93.058",
    "430189000":"99.811",
    "182777000":"99.810",
    "431949004":"93.350",
    "406164000":"99.841",
    "386423001":"99.842",
    "87750000":"96.070",
    "384745002":"96.071",
    "235425002":"96.071",
    "410024004":"57.940",
    "49689007":"93.591",
    "448970001":"93.450",  //Application of pressure trouser
    "58825001":"79.700",
    "398041008":"93.591",
    "426498007":"93.591",
    "79321009":"93.540",
    "182556001":"93.540",
    "302488007":"93.450",
    "236973005":"73.590",
    "36708009":"590",
    "385857005":"96.700",
    "133901003":"93.057",
    "70177008":"86.090",
    "225358003":"96.700",
    "372045002":"93.059",
    "22206003":"93.057",    //Application of dressing, occlusive plastic
    "26906007":"93.057",	//Application of dressing, pressure
    "20655006":"93.056",
    "225116006":"93.058",
    "392247006":"38.991",
    "233516009":"38.994",
    "233519002":"39.998",
    "422744007":"89.610",  //Arterial catheter care
    "77938009":"89.610",  //Arterial pressure monitoring, invasive method
    "55841001":"38.910",  //Arterial puncture for withdrawal of blood for diagnosis
    "226005007":"89.620",  //Care of central line
    "86265008":"89.620",  //Central venous pressure monitoring
    "405427009":"39.995",  //Catheterization of external jugular vein
    "392230005":"38.991",  //Catheterization of vein
    "405442007":"38.994",  //Catheterization of common femoral vein
    "430824005":"41.920",  //Intraosseous cannulation
    "233526002":"38.992",  //Peripheral venous cannula insertion - scalp
    "405430002":"39.996",  //Catheterization of subclavian vein
    "42340005":"89.590",    //Pulmonary artery wedge pressure monitoring
    "42550007":"39.998",   //Catheterization of umbilical vein
    "424287005":"38.991",  //Removal of peripheral intravenous catheter
    "396540005":"38.995",   //Phlebotomy
    "441893003":"99.602",
    "232708009":"97.23",	
    "232664002":"98.13",	
    "425447009":"93.931",	
    "418613003":"93.93", 	    
    "243140006":"93.931",
    "243142003":"99.29",
    "182705007":"98.130",
    "264957007":"96.040",
    "55628002":"97.230 ",
    "47545007":"93.580",
    "241726007":"31.120",
    "232690004":"31.120",
    "232689008":"31.110",
    "232692007":"31.120",
    "428482009":"96.991",
    "425543005":"96.991",
    "232707004":"98.131",
    "23690002":"98.130",
    "232685002":"97.231",
    "232679009":"96.041",
    "418613003":"96.052",
    "232674004":"96.040 ",
    "241689008":"96.042 ",
    "397874007":"97.230 ",
    "424979004":"96.052",
    "78121007":"31.420",
    "673005":"31.421",
    "243180002":"96.700",
    "182692007":"96.041",
    "232673005":"96.030",
    "7443007":"96.040",
    "45851008":"96.790",
    "397892004":"96.040",
    "230040009":"98.150",
    "427753009":"96.040",
    "2267008":"97.230",
    "448442005":"96.700",
    "385857005": "96.700"
};

/*
96.051	Airway-Combitube Blind Insertion Airway Device 	
93.58	Airway-CPAP 93.900 MAST 	
31.42	Airway-Direct Laryngoscopy 	
96.03	Airway-EOA/EGTA 	
96.993	Airway-Extubation 	
98.131	Airway-Foreign Body Removal 	
96.703	Airway-Impedance Threshold Device 	
96.991	Airway-Intubation Confirm Colorimetric ETCO2 	
96.992	Airway-Intubation Confirm Esophageal Bulb 	
97.231	Airway-Intubation of Existing Tracheostomy Stoma 	
96.053	Airway-King LT Blind Insertion Airway Device 	
96.052	Airway-Laryngeal Mask Blind Insertion Airway Device 	
96.01	Airway-Nasal 	
96.041	Airway-Nasotracheal Intubation 	
93.94	Airway-Nebulizer Treatment 	
31.11	Airway-Needle Cricothyrotomy 	
96.02	Airway-Oral 	
96.04	Airway-Orotracheal Intubation 	
96.79	Airway-PEEP 	
96.042	Airway-Rapid Sequence Intubation 	
93.91	Airway-Respirator Operation (BLS) 	
98.15	Airway-Suctioning 	
31.12	Airway-Surgical Cricothyrotomy	
96.7	Airway-Ventilator Operation 	
96.701	Airway-Ventilator with PEEP 	
    31.421	Airway-Video Laryngoscopy 	
    */
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
    "9918001": "4615",
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
eProcedures14 = {
    "4004001": "4735",
    "4004003": "4750",
    "4004005": "4740",
    "4004007": "4740",
    "4004009": "4745",
    "4004011": "4765",
    "4004013": "4735",
    "4004015": "-10",
    "4004017": "4765",
    "4004019": "4770"
};
eInjury01 =
    {
        "V95.9": "9500",
        "V97": "9500",
        "V97.2": "9500",
        "V95.9": "9500",
        "V96.9": "9500",
        "W50": "9510",
        "W54": "9510",
        "W55": "9510",
        "W53": "9510",
        "W64": "9510",

        "T50.90": "9515",
        "T64": "9515",
        "T58.9": "9515",
        "T63": "9515",
        "T55": "9515",
        "T51.9": "9515",
        "T59.9": "9515",
        "T57.9": "9515",
        "T62.9": "9515",
        "T60.9": "9515",
        "T61.9": "9515",
        "T65.9": "9515",
        "T54.9": "9515",
        "T53.9": "9515",
        "T56.9": "9515",
        "T52.9": "9515",

        "T76.9": "9520",

        "W65": "9525",
        "W69": "9525",
        "V92": "9525",
        "V90": "9525",
        "V92": "9525",
        "V90": "9525",
        "X38": "9525",
        "X37.0": "9525",
        "X71.9": "9525",
        "W74": "9525",
        "Y21.9": "9525",

        "T50.90": "9530",

        "W85": "9535",
        "T75.4": "9535",

        "X37.2": "9540",
        "W93": "9540",
        "X3": "9540",

        "X11": "9545",
        "X11.0": "9545",
        "X19": "9545",
        "X12": "9545",
        "X18": "9545",
        "W92": "9545",
        "X30": "9545",
        "X32": "9545",
        "X77.9": "9545",
        "X35": "9545",

        "Y27.9": "9550",
        "W52": "9550",
        "X34": "9550",
        "W10.9": "9550",
        "W06": "9550",
        "W07": "9550",
        "W15": "9550",
        "W05": "9550",
        "W18.1": "9550",
        "W08": "9550",
        "W14": "9550",
        "W13.9": "9550",
        "W13.2": "9550",
        "W13.4": "9550",
        "W18.2": "9550",
        "W11": "9550",
        "W09": "9550",
        "W12": "9550",
        "W01": "9550",
        "W04": "9550",
        "W16": "9550",
        "Y30": "9550",
        "Y31": "9550",
        "X75": "9550",
        "X80": "9550",
        "W17": "9550",
        "W18": "9550",
        "W18.4": "9550",
        "V00.31": "9550",
        "V00.32": "9550",
        "W00.9": "9550",
        "X37.1": "9550",


        "W39": "9555",
        "W38": "9555",
        "W40.9": "9555",
        "X02": "9555",
        "X03": "9555",
        "X04": "9555",
        "X06": "9555",
        "X00": "9555",
        "X01": "9555",
        "X75": "9555",
        "X75": "9555",

        "X95.9": "9560",

        "W34": "9565",
        "W32": "9565",
        "Y24.9": "9565",
        "X74.9": "9570",
        "T75.0": "9575",

        "Y25": "9580",
        "X14": "9580",
        "X10": "9580",
        "X17": "9580",
        "X16": "9580",
        "X15": "9580",
        "W31.9": "9580",
        "W94": "9580",
        "W42": "9580",
        "W89.9": "9580",
        "W28": "9580",
        "V00.1": "9580",
        "V00.812": "9580",



        "T71.23": "9585",
        "T71.22": "9585",
        "T71.13": "9585",
        "T71.29": "9585",
        "T71.23": "9585",
        "T71.22": "9585",
        "T71.13": "9585",
        "T71.29": "9585",
        "T71.21": "9585",
        "T71.16": "9585",
        "T71.1": "9585",
        "T71.19": "9585",
        "T71.12": "9585",
        "T71.15": "9585",
        "T71.14": "9585",
        "T71.11": "9585",
        "T71.20": "9585",
        "T71.9": "9585",
        "X36": "9585",
        "W99": "9585",
        "W22.8": "9585",
        "W21": "9585",
        "T71.21": "9585",
        "T71.16": "9585",
        "T71.1": "9585",
        "T71.19": "9585",
        "T71.12": "9585",
        "T71.15": "9585",
        "T71.14": "9585",
        "T71.11": "9585",
        "T71.20": "9585",
        "T71.9": "9585",
        "X36": "9585",
        "W99": "9585",
        "W22.8": "9585",
        "W21": "9585",

        "V69.3": "9590",
        "V69.9": "9590",
        "V59.3": "9590",
        "V59.9": "9590",
        "V39.3": "9590",
        "V39.9": "9590",
        "V81.9": "9590",
        "V82.9": "9590",
        "V81.9": "9590",
        "V86.9": "9590",
        "V83.99": "9590",
        "V84.9": "9590",
        "V85.9": "9590",

        "V79.3": "9595",
        "V79.9": "9595",
        "V49.3": "9595",
        "V49.9": "9595",
        "Y32": "9595",
        "X82": "9595",
        "V40.9": "9595",
        "V86.31": "9595",
        "V70.9": "9595",
        "V60.9": "9595",
        "V86.94": "9595",
        "V86.34": "9595",
        "V86.39": "9595",
        "V50.9": "9595",
        "V86.92": "9595",
        "V86.32": "9595",
        "V30.9": "9595",
        "V99": "9595",

        "V29.3": "9600",
        "V29.9": "9600",
        "V20.9": "9600",
        "V89.9": "9600",


        "V80.9": "9605",

        "V00.8": "9610",
        "Y03.0": "9610",
        "V00.2": "9610",
        "X81": "9610",
        "V19.3": "9610",
        "V19.9": "9610",
        "V03.0": "9610",
        "V03.1": "9610",
        "V03.9": "9610",
        "V04.0": "9610",
        "V04.1": "9610",
        "V04.9": "9610",
        "V06.9": "9610",
        "V01": "9610",
        "V05.9": "9610",
        "V02.9": "9610",
        "V09.9": "9610",
        "V00.0": "9610",
        "V00.38": "9610",
        "V00.13": "9610",

        "W88": "9615",
        "W90": "9615",

        "T76.9": "9620",

        "X02.1": "9625",
        "X03.1": "9625",
        "X00.1": "9625",
        "X01.1": "9625",
        "Y26": "9625",
        "X76": "9625",

        "W23": "9630",
        "Y29": "9630",
        "W25": "9630",
        "Y28.9": "9630",
        "W45": "9630",
        "Y35": "9630",
        "X78.9": "9630",
        "W49.0": "9630",

        "W46": "9635",
        "X79": "9635",
        "X83": "9635",
        "Y37.9": "9635",
        "Y36.9": "9635",
        "T14.91": "9635",
        "Y38": "9635",
        "Y38.6": "9635",
        "Y38.7": "9635",

        "W26": "9640",
        "W20": "9640",
        "X37.9": "9640",

        "W24": "9645",
        "T50.90": "9645",

        "W60": "9650",
        "V93": "9650",
        "V94.9": "9650",
        "V91": "9650"

    };
var sete10_02 = function (eInjury2Val) {

    eInjury02_IntentionalOther = [
        "Y04.1", "Y03.0", "Y00", "Y04", "Y03", "X92.9",
        "Y04.1", "Y08", "Y01", "Y02", "X97", "X96.9", "X95.9",
        "X98.9", "X99.9", "Y09", "Y38", "Y38.6"];
    var eInjury02_IntentionalSelf = [
            "X74.9", "X75", "X74.9", "X76", "X77.9", "X78.9", "X79", "X80", "X81", "X82", "X83", "T14.91"];

    var _retVal = "";

    if (eInjury02_IntentionalOther.indexOf(eInjury2Val) != -1) //intentional
    {
        _retVal = "2020"
    };
    if (eInjury02_IntentionalSelf.indexOf(eInjury2Val) != -1) //intentional
    {
        _retVal = "2025"
    };
    if (_retVal == "") {
        _retVal = "2030"
    }
    return _retVal;
};
eInjury03 =
    {
        "2902001": "2035",
        "2902003": "2040",
        "2902005": "2045",
        "2902007": "2050"
    };
eInjury04 =
    {
        "2904001": "-10",
        "2904003": "-10",
        "2904005": "-10",
        "2904007": "2060",
        "2904009": "2065",
        "2904011": "2070",
        "2904013": "2085",
        "2904015": "2065",
        "2904017": "-10",
        "2904019": "-10",
        "2904021": "-10"

    };
eInjury05 =
    {
        "1": "2100",
        "2": "2125",
        "3": "2135",
        "4": "2135",
        "5": "2130",
        "6": "2105",
        "7": "2115",
        "8": "2115",
        "9": "2120",
        "10": "2120",
        "11": "2110",
        "12": "2100",
    };
eInjury06 =
    {
        "2906001": "2145",
        "2906003": "2155",
        "2906029": "2160",
        "2906005": "2165"
    };
eInjury07 = {
    "2907001": "2170",
    "2907001": "2170",
    "2907003": "2175",
    "2907005": "2180",
    "2907007": "2170",
    "2907009": "2170",
    "2907015": "2187",
    "2907017": "2190",
    "2907019": "2195",
    "2907021": "2200",
    "2907023": "2205",
    "2907027": "2210",
    "2907029": "2185"
};
eInjury08 = {
    "2908009": "2215",
    "2908007": "2220",
    "2908001": "2225",
    "2908003": "2230",
    "2908005": "2235"
}
