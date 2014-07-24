var ErrorList = [];
var v3NOT_REPORTING = " NV=\"7701005\"";
var v3NOT_RECORDED = " NV=\"7701003\"";
var v2NOT_AVAILABLE = "-5";
var v2NOT_REPORTING = "-15";
var v2NOT_APPLICABLE = "-25"
var v2NOT_RECORDED = "-20";
var v2NOT_KNOWN = "-10";
var NIL_V3NOT_RECORDED = " NV=\"7701003\" xsi:nil=\"true\"/>";
var NIL_V3NOT_REPORTING = " NV=\"7701005\" xsi:nil=\"true\"/>";
var NIL_V3NOT_APPLICABLE = " NV=\"7701001\" xsi:nil=\"true\"/>";
var PN_REFUSED_IS_NILLABLE = " xsi:nil=\"true\" PN=\"8801019\"/>";
var PN_UNABLE_TO_COMPLETE_IS_NILLABLE = " xsi:nil=\"true\" PN=\"8801023\"/>";
var PN_FINDING_NOT_PRESENT_IS_NILLABLE = " xsi:nil=\"true\" PN=\"8801005\"/>";

var eArrest = new Object;
var E11 = new Object;
var _retArray = [];

var XMLString = ""
var seteArrest = function (businessObject) {

    var isApplicable = false;  //once I have real data, set to TRUE
    //Value Rules
    //////////////////////////////////////////////
    if (getValue(businessObject.elements, "eArrest.05") == null) {
        if (getValue(businessObject.elements, "eArrest.06") == null) {
            ErrorList.push("CPR Care Provider Required when Provider type indicated");
        }
    }

    if (getValue(businessObject.elements, "eArrest.07") == null) {
        if (getValue(businessObject.elements, "eArrest.08") == null) {
            ErrorList.push("AED used Care Provider Required when AED use indicated");
        }
    }
    //////////////////////////////////////////////

    /////////////eArrest.01
    var bArrest = false;
    _val = getValue(businessObject.elements, "eArrest.01");
    if (_val == null)
    {    
        isApplicable= false;  //set Values to Not Applicable
        eArrest["eArrest.01"] = V3NOT_RECORDED
        eArrest["CardiacArrest"] = "NOT RECORDED";
        v2Array.push({ section: "E11", element: "E11_01", val: v2NOT_RECORDED });
    }
    else
    {
        isApplicable= true;  //We have an eArrest 
        if(_val[0] != "3001001")
        {
            bArrest =true;            
        }
        else
        {  
            bArrest=false;            
        };
        eArrest["eArrest.01"] = _val[0];
        eArrest["CardiacArrest"] = setCodeText("eArrest.01", _val);
        v2Array.push({ section: "E11", element: "E11_01", val: setV2("eArrest.01", _val) });
    };


    //When eArrest.01 Cardiac Arrest is "Yes...", other elements in the eArrest section are recorded, 
    //When eArrest.01 Cardiac Arrest is not "Yes...", other elements in the eArrest section are not recorded

    /////////////eArrest.02
    _val = getValue(businessObject.elements, "eArrest.02");    
        
    if(isApplicable==true)  //If there is no incident, all set to NOT_APPLICABLE
    {
        if(bArrest == true)  //Yes value for eArrest.01
        {
            if (_val == null) 
            {
                eArrest["eArrest.01"] = V3NOT_RECORDED
                eArrest["CardiacArrest"] = "NOT RECORDED";   
                v2Array.push({ section: "E11", element: "E11_02", val: v2NOT_RECORDED });
            }
            else
            {
                eArrest["eArrest.02"] = _val[0];
                eArrest["CardiacArrestEtiology"] = setCodeText("eArrest.02", _val[0]);
                v2Array.push({ section: "E11", element: "E11_02", val: setV2("eArrest.02", _val) });
            }
        }                    
    }
    else 
    {
        eArrest["eArrest.02"] = NIL_V3NOT_APPLICABLE;
        eArrest["CardiacArrestEtiology"] = NOT_APPLICABLE;
        v2Array.push({ section: "E11", element: "E11_02", val: v2NOT_APPLICABLE });
    };



    /////////////eArrest.03
    //Resuscitation Attempted By EMS does not contain "Attempted/Initiated..." and "Not Attempted..." in the same record
    var bResuscitationAttempted = false;
    _val = getValue(businessObject.elements, "eArrest.03");
    if(isApplicable!=true)  //If there is no incident, all set to NOT_APPLICABLE
    {
        if (bArrest == true)  //Yes value for eArrest.01
        {
            if (_val == null) 
            {
                eArrest["eArrest.03"] = V3NOT_RECORDED;
                eArrest["ResuscitationAttemptedByEMS"] = "NOT RECORDED";
                v2Array.push({ section: "E11", element: "E11_02", val: v2NOT_RECORDED });
            }
            else
            {
                if(bArrest == true)
                {
                    var arrAttempt = ["3003001", "3003003", "3003005"];
                    var arr1 = [];
                    var arr2 = [];
                    var arr3 = [];        
                    for (var i = 0; i < _val.length; i++) 
                    {
                        //Find Attempted Resuscitation
                        if(arrAttempt.indexOf(_val[i]) != -1)
                        {
                            var bResuscitationAttempted = true;
                        };
                        arr1.push(_val[i]);
                        arr2.push(setV2("eArrest.03", _val[i]));
                        arr3.push(setCodeText("eArrest.03", _val[i]));            
                    }
                    eArrest["eArrest.03"] = arr1.slice(0);
                    eArrest["ResuscitationAttemptedByEMS"] = arr3.slice(0);
                    v2Array.push({ section: "E11", element: "E11_03", val:arr3.slice(0) });        
                }
            }
        }
        else
        {
            //Check for an Attempt a list of No Attempts
            var arrNotAttempt = ["3003007", "3003009", "3003011"]; 
            if(bResuscitationAttempted == true)
            {
                if(arrNotAttempt.indexOf(_val[i]) != -1)
                {
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eArrest.03", Description: "Conflicting values:  Attempted/Not Attempted" })

                }
            };
            eArrest["eArrest.03"] = NIL_V3NOT_APPLICABLE;
            eArrest["ResuscitationAttemptedByEMS"] = NOT_APPLICABLE;
            v2Array.push({ section: "E11", element: "E11_03", val:v2NOT_APPLICABLE });     
        };

        /////////////eArrest.04
        var bArrestWitnessedBy = false;
        _val = getValue(businessObject.elements, "eArrest.04");
        if (isApplicable == true)  //If there is no incident, all set to NOT_APPLICABLE
        {
            if (isArrest == true)  //Yes value for eArrest.01
            {
                if (_val == null) 
                {
                    eArrest["eArrest.04"] = V3NOT_RECORDED;
                    eArrest["ArrestWitnessedBy"] = "NOT RECORDED";
                    v2Array.push({ section: "E11", element: "E11_04", val: v2NOT_RECORDED });        
                }
                else
                {
                    var arrAttempt = ["3004003", "3004005", "3004007"];
                    if(bResuscitationAttempted == true)
                    {
                        if(arrNotAttempt.indexOf(_val[i]) != -1)
                        {
                            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eArrest.03", Description: "Conflicting values:  Attempted/Not Attempted" })
                        }
                    };
                    var arr1 = [];
                    var arr2 = [];
                    var arr3 = [];        
                    for (var i = 0; i < _val.length; i++) 
                    {
                        arr1.push(_val[i]);
                        arr2.push(setV2("eArrest.04", _val[i]));
                        arr3.push(setCodeText("eArrest.04", _val[i]));            
                    };
                    eArrest["eArrest.04"] = arr1.slice(0);        
                    eArrest["ArrestWitnessedBy"] = arr3.slice(0);        
                    v2Array.push({ section: "E11", element: "E11_04", val: arr2.slice(0) });
                }
            }
        }
        else
        {
            eArrest["eArrest.04"] = NIL_V3NOT_APPLICABLE;
            eArrest["ArrestWitnessedBy"] = NOT_APPLICABLE;
            v2Array.push({ section: "E11", element: "E11_04", val: v2NOT_APPLICABLE });        

        };
        /////////////eArrest.05
        var CPRProvide=false; //can only be True when isArrest is True
        _val = getValue(businessObject.elements, "eArrest.05");
        if (isApplicable == true)  //If there is no incident, all set to NOT_APPLICABLE
        {
            if (isArrest == true)  //Yes value for eArrest.01
            {
                if (_val == null) {
                    eArrest["eArrest.05"] = V3NOT_RECORDED;
                    eArrest["CPRCareProvidedPriortoEMSArrival"] = "NOT RECORDED";
                }
                else 
                {
                    if(_val[0]=="9923003")
                    {
                        CPRProvide=true;
                    }
                    eArrest["eArrest.05"] = _val[0];
                    eArrest["CPRCareProvidedPriortoEMSArrival"]  = _val[0];
                }   
            }
        }
        else
        {
            eArrest["eArrest.05"] = NIL_V3NOT_APPLICABLE;
            eArrest["CPRCareProvidedPriortoEMSArrival"]  = NOT_APPLICABLE;
        };

    /////////////eArrest.06
    _val = getValue(businessObject.elements, "eArrest.06");
    if (isApplicable == true)  //If there is no incident, all set to NOT_APPLICABLE
    {
        if (CPRProvide == true)  //Yes value for eArrest.01
        {
            if (_val == null) {
                eArrest["eArrest.06"] = null;
                eArrest["WhoProvidedCPRPriortoEMSArrival"] = null;                
            }
            else
            {             
                var arr1 = [];       
                var arr3 = [];        
                for (var i = 0; i < _val.length; i++) 
                {
                    arr1.push(_val[i]);            
                    arr3.push(setCodeText("eArrest.06", _val[i]));            
                };
                dAgency["eArrest.06"] = arr1.slice(0);
                eArrest["WhoProvidedCPRPriortoEMSArrival"] =arr3.slice(0)    
            }
        }
    }
    else// Else included as rule documentation,... and I may have use for it later
    { 
        eArrest["eArrest.06"] = null;
        eArrest["WhoProvidedCPRPriortoEMSArrival"] = null;                
    };


        /////////////eArrest.07
    var AEDProvided = false;
    _val = getValue(businessObject.elements, "eArrest.07");        
    if (isApplicable == true)  //If there is no incident, all set to NOT_APPLICABLE
    {
        if (isArrest == true)  //Yes value for eArrest.01
        {
            if (_val == null) 
            {
                eArrest["eArrest.07"] = V3NOT_RECORDED;
                eArrest["WhoProvidedCPRPriortoEMSArrival"] = V3NOT_RECORDED;
            }
            else
            {    
                if(_val[0] != "3007001")
                {
                    AEDProvided == true;
                };
                eArrest["eArrest.07"] = _val[0];
                eArrest["WhoProvidedCPRPriortoEMSArrival"] = setCodeText("eArrest.07", _val[0]);
            }
        }
    }
    else 
    { //set to NOT APPLICABLE
        eArrest["eArrest.07"] = NIL_V3NOT_APPLICABLE;
        eArrest["WhoProvidedCPRPriortoEMSArrival"] = NOT_APPLICABLE;
    };

    /////////////eArrest.08
    _val = getValue(businessObject.elements, "eArrest.08");
        
    if (isApplicable == true)  //If there is no incident, all set to NOT_APPLICABLE
    {
        if (AEDProvided == true)  //
        {
            if (_val == null) 
            {
                eArrest["eArrest.08"] = null;
                eArrest["WhoUsedAEDPriortoEMSArrival"] = null;
            }
            else
            {
                eArrest["eArrest.08"] = _val[0];
                eArrest["WhoUsedAEDPriortoEMSArrival"] = setCodeText("eArrest.08", _val[0]);
            }
        }
    }
    else
    {   
        eArrest["eArrest.08"] = null;
        eArrest["WhoUsedAEDPriortoEMSArrival"] = null;
    };

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
  </sch:assert>


    /////////////eArrest.09
    _val = getValue(businessObject.elements, "eArrest.09");
    if (isApplicable == true)  //If there is no incident, all set to NOT_APPLICABLE
    {
        if (CPRProvide == true)  //Yes value for eArrest.01
        {
            if (_val == null) 
            {
                eArrest["eArrest.09"] = null;
                eArrest["TypeofCPRProvided"] = null;
            }
            else
            {        
        
                var arr1 = [];
                var arr3 = [];
                for (var i = 0; i < _val.length; i++)
                {
                    arr1.push(_val[i]);
                    arr3.push(setCodeText("eArrest.09", _val[i]));
                };

                bError = false;
                //Check for Compression 3003005, if eArrest.03 values = Compression
                arrCompression = ["3009001", "3009003", "3009005", "3009007", "3009009", "3009011"]; //Compression values
                if(eArrest["eArrest.03"] = "3003005") //Compression
                {
                    if(arrCompression.indexOf(_val[i]) != -1)
                    {
                        bError=true;
                        ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eArrest.09", Description: "Validation Error:Conflicting values.  Resuscitation Attempted By EMS should contain "/"Initiated Chest Compressions"/"" })
                    }
                };

                //Check for Compression 3003005, if eArrest.03 values = Ventilation
                arrVent = ["3009013", "3009015", "3009017", "3009019"]; //Ventilation values
                if(eArrest["eArrest.03"] = "3003003") //Ventilation
                {
                    if(arrVent.indexOf(_val[i]) != -1)
                    {
                        bError=true;
                        ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eArrest.09", Description: "Validation Error:Conflicting values.  Resuscitation Attempted By EMS should contain "/"Attempted Ventilation"/"" })
                    }
                };

                //Check for VENTILATION 3003005, if eArrest.03 values = Compression
                arrCompression = ["3009001", "3009003", "3009005", "3009007", "3009009", "3009011"]; //Compression values
                if(eArrest["eArrest.03"] = "3003005") //Compression
                {
                    if(arrNotAttempt.indexOf(_val[i]) != -1)
                    {
                        ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eArrest.09", Description: "Validation Error:Conflicting values.  Resuscitation Attempted By EMS should contain "/"Initiated Chest Compressions"/"" })
                    }
                }


                if(bError == true)
                {
                    dAgency["eArrest.09"] = arr1.slice(0);
                    dAgency["TypeofCPRProvided"] = arr1.slice(0);   
                }
            }
        }
    }
    else
    {
        eArrest["eArrest.09"] = NIL_V3NOT_APPLICABLE;
        dAgency["TypeofCPRProvided"] = NOT_APPLICABLE   
    };

    /////////////eArrest.10
    _val = getValue(businessObject.elements, "eArrest.10");
    if (_val == null)
    {
        if (isRequiredStateElement("eArrest.10") == true) 
        {
            eArrest["eArrest.10"] = V3NOT_RECORDED;
            eArrest["TherapeuticHypothermiaInitiated"] = "NOT RECORDED";
        }
        else 
        {
            eArrest["eArrest.10"] = v3NOT_REPORTING;            
            eArrest["TherapeuticHypothermiaInitiated"] = "NOT REPORTING";
        }
    }
    else        
    {
        isNotApplicableFlag= true;
        eArrest["eArrest.10"] = _val[0];
        eArrest["TherapeuticHypothermiaInitiated"] = setCodeText("eArrest.10", _val[0]);
    };


    /////////////eArrest.11
    _val = getValue(businessObject.elements, "eArrest.11");
    if (_val == null)
    {
        eArrest["eArrest.11"] = V3NOT_RECORDED;
        eArrest["FirstMonitoredArrestRhythmofthePatient"] = "NOT RECORDED";
        v2Array.push({ section: "E11", element: "E11_05", val: v2NOT_RECORDED });
    }
    else
    {
        isNotApplicableFlag= true;
        eArrest["eArrest.11"] = _val[0];
        eArrest["FirstMonitoredArrestRhythmofthePatient"] = setCodeText("eArrest.11", _val[0]);
        v2Array.push({ section: "E11", element: "E11_05", val: _val[0] });
    };


    /////////////eArrest.12
    _val = getValue(businessObject.elements, "eArrest.12");
    if (_val == null)
    {
        if (isRequiredStateElement("eArrest.12") == true)
        {
            eArrest["eArrest.12"] = V3NOT_RECORDED;
            eArrest["AnyReturnofSpontaneousCirculation"] = "NOT RECORDED";
            v2Array.push({ section: "E11", element: "E11_06", val: v2NOT_RECORDED });            
        }                
    }
    else
    {
        isNotApplicableFlag= true;
        var arr1 = [];
        var arr2 = [];
        var arr3 = [];        
        for (var i = 0; i < _val.length; i++) 
        {            
            arr1.push(_val[i]);
            arr2.push(setV2("eArrest.12", _val[i]));
            arr2.push(setCodeText("eArrest.12", _val[i]))
        };
        v2Array.push({ section: "E11", element: "E11_06", val: arr2.slice(0)     });
        dAgency["eArrest.12"] = arr1.slice(0);
        dAgency["AnyReturnofSpontaneousCirculation"] = arr3.slice(0);
    };

    /////////////eArrest.13
    _val = getValue(businessObject.elements, "eArrest.13");
    if (_val == null)
    {
        eArrest["eArrest.13"] = null;
        eArrest["NeurologicalOutcomeatHospitalDischarge"] = null;
    }
    else 
    {
        isNotApplicableFlag= true;
        eArrest["eArrest.13"] = _val[0];
        eArrest["NeurologicalOutcomeatHospitalDischarge"] = setCodeText("eArrest.13", _val[0]);
    };

    /////////////eArrest.14
    _val = getValue(businessObject.elements, "eArrest.14");
    if (_val == null)
    {
        if (isRequiredStateElement("eArrest.14") == true)
        {
            eArrest["eArrest.14"] = v3NOT_RECORDED;
            eArrest["DateTimeofCardiacArrest"] = "NOT RECORDED";
            v2Array.push({ section: "E11", element: "E11_08", val: v2NOT_RECORDED });
        }
    }
    else
    {
        isNotApplicableFlag= true;
        if (getValue(businessObject.elements, "eArrest.01" == "3001001"))
        {
            OLAPArray.push('\t' + "<DateTimeofCardiacArrest>" + v3NOT_APPLICABLE + "</DateTimeofCardiacArrest>" + '\n');
            v2Array.push({ section: "E11", element: "E11_08", val: v2NOT_APPLICABLE });
            _retArray.push('\t' + "<eArrest.14" + NIL_V3NOT_APPLICABLE + '\n');
        }
        else
        {
            eArrest["eArrest.14"] = _val[0];
            eArrest["DateTimeofCardiacArrest"] = _val[0];
            v2Array.push({ section: "E11", element: "E11_08", val: _val[0] });
        }
    };

    /////////////eArrest.15
    var eArrest03Values = ["3003007", "3003009", "3003011"]

    _val = getValue(businessObject.elements, "eArrest.15");
    if (_val == null)
    {
        if (isRequiredStateElement("eArrest.15") == true) {
           
            eArrest["eArrest.15"] = v3NOT_RECORDED;
            eArrest["DateTimeResuscitationDiscontinued"] = "NOT RECORDED";
            v2Array.push({ section: "E11", element: "E11_09", val: v2NOT_RECORDED });
        }
        else
        {
            eArrest["eArrest.15"] = v3NOT_REPORTING;
            eArrest["DateTimeResuscitationDiscontinued"] = "NOT REPORTING";
            v2Array.push({ section: "E11", element: "E11_09", val: v2NOT_REPORTING });            
        }       
    }
    else
    {        isNotApplicableFlag= true;
        /*if (getValue(businessObject.elements, "eArrest.03") in eArrest03Values)  //If there is no resuscitation attempt
        {
            _retArray.push('\t' + "<eArrest.15" + v3NOT_APPLICABLE + '\n');
            OLAPArray.push('\t' + "<ResuscitationAttemptedByEMS>" + v3NOT_APPLICABLE + "</ResuscitationAttemptedByEMS>" + '\n');
            eArrest["eArrest.15"] = v3NOT_APPLICABLE;
            v2Array.push({ section: "E11", element: "E11_09", val: v2NOT_APPLICABLE });
        }

        else
        {
            */

        eArrest["eArrest.15"] = _val[0];
        eArrest["DateTimeResuscitationDiscontinued"] = _val[0];
        v2Array.push({ section: "E11", element: "E11_08", val: _val[0] });
    };


    /////////////eArrest.16
    _val = getValue(businessObject.elements, "eArrest.16");
    if (_val == null)
    {
        if (isRequiredStateElement("eArrest.15") == true)
        {
            eArrest["eArrest.16"] = v3NOT_RECORDED;
            eArrest["ReasonCPRResuscitationDiscontinued"] = "NOT RECORDED";
            v2Array.push({ section: "E11", element: "E11_10", val: v2NOT_RECORDED });
        }
        else 
        {            
            eArrest["eArrest.16"] = v3NOT_REPORTING;
            eArrest["ReasonCPRResuscitationDiscontinued"] = "NOT REPORTING";
            v2Array.push({ section: "E11", element: "E11_10", val: v2NOT_REPORTING });
        }
    }
    else
    {
        isNotApplicableFlag= true;
        eArrest["eArrest.16"] = _val[0];
        eArrest["ReasonCPRResuscitationDiscontinued"] =  setCodeText("eArrest.16", _val[0]);
        v2Array.push({ section: "E11", element: "E11_10", val: setV2("eArrest.16", _val)});
    };


    /////////////eArrest.17
    _val = getValue(businessObject.elements, "eArrest.17");
    if (_val == null) 
    {
        dAgency["eArrest.17"] = V3NOT_RECORDED;                        
        dAgency["CardiacRhythmonArrivalatDestination"] = "NOT RECORDED";"     
        v2Array.push({ section: "E11", element: "E11_11", val: V2NOT_RECORDED});
    }
    else
    {
        isNotApplicableFlag= true;
        var arr1 = [];
        var arr2 = [];
        var arr3 = [];
        for (var i = 0; i < _val.length; i++) 
        {
            arr1.push(_val[i]);
            arr2.push(setV2("eArrest.17", _val[i]));
            arr3.push(setCodeText("eArrest.17", _val[i]));            
        }
        dAgency["eArrest.17"] = arr1.slice(0);
        dAgency["CardiacRhythmonArrivalatDestination"] = arr3.slice(0);
        v2Array.push({ section: "E11", element: "E11_11", val:arr2.slice(0) });   
    };


    /////////////eArrest.18
    _val = getValue(businessObject.elements, "eArrest.18");
    if (_val == null) {
        ErrorList.push("eArrest.18 Required");
        OLAPArray.push('\t' + "<>" + V3NOT_RECORDED + "</EndofEMSCardiacArrestEvent>" + '\n');
        eArrest["eArrest.18"] = V3NOT_RECORDED;
        eArrest["EndofEMSCardiacArrestEvent"] = "NOT RECORDED";
    }
    else 
    {
        isNotApplicableFlag= true;
        eArrest["eArrest.18"] = _val[0];
        eArrest["EndofEMSCardiacArrestEvent"] = setCodeText("eArrest.17", _val[0]);
    };

    var setNotApplicableAll = function (businessObject) 
    {
    v2Array.push({ section: "E11", element: "E11_01", val: v2NOT_AVAILABLE });
    v2Array.push({ section: "E11", element: "E11_02", val: v2NOT_AVAILABLE });
    v2Array.push({ section: "E11", element: "E11_03", val: v2NOT_AVAILABLE });
    v2Array.push({ section: "E11", element: "E11_04", val: v2NOT_AVAILABLE });
    v2Array.push({ section: "E11", element: "E11_05", val: v2NOT_AVAILABLE });
    v2Array.push({ section: "E11", element: "E11_06", val: v2NOT_AVAILABLE });
    v2Array.push({ section: "E11", element: "E11_07", val: v2NOT_AVAILABLE });
    v2Array.push({ section: "E11", element: "E11_08", val: v2NOT_AVAILABLE });
    v2Array.push({ section: "E11", element: "E11_10", val: v2NOT_AVAILABLE });
    v2Array.push({ section: "E11", element: "E11_11", val: v2NOT_AVAILABLE });
    
    _retArray.push("<eArrest>" + '\n');

    OLAPArray.push("<eArrest>" + '\n');
    OLAPArray.push('\t' + "<CardiacArrest>" + NIL_V3NOT_APPLICABLE + "</CardiacArrest>" + '\n');
    OLAPArray.push('\t' + "<CardiacArrestEtiology>" + NIL_V3NOT_APPLICABLE + "</CardiacArrestEtiology>" + '\n');
    

    _retArray.push('\t' + "<eArrest.01>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<eArrest.02>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<eArrest.03>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<eArrest.04>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<eArrest.05>" + NIL_V3NOT_APPLICABLE + '\n');

    if (isRequiredStateElement("eArrest.06") == true)
    {
        _retArray.push('\t\t' + "<eArrest.06>" + NIL_V3NOT_APPLICABLE + '\n');
    }

    _retArray.push('\t' + "<eArrest.07>" + NIL_V3NOT_APPLICABLE + '\n');
    if (isRequiredStateElement("eAirway.08") == true) {
        _retArray.push('\t\t' + "<eAirway.08>" + NIL_V3NOT_APPLICABLE + '\n');
    }

    _retArray.push('\t' + "<eArrest.09>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<eArrest.10>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<eArrest.11>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<eArrest.12>" + NIL_V3NOT_APPLICABLE + '\n');

    _retArray.push('\t' + "<eArrest.14>" + NIL_V3NOT_APPLICABLE + '\n');

    if (isRequiredStateElement("eAirway.15") == true) {
        _retArray.push('\t\t' + "<eAirway.15>" + NIL_V3NOT_APPLICABLE + '\n');
    }

    _retArray.push('\t' + "<eArrest.16>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<eArrest.17>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<eArrest.18>" + NIL_V3NOT_APPLICABLE + '\n');

    _retArray.push('\t' + "</eAirway.AirwayGroup>" + '\n');
    _retArray.push("</eAirway>" + '\n');
    // console.log(_retArray);
    return _retArray;

}





var isRequiredStateElement = function (elementID)
{
    return true;
};
var getdAgencyValue = function (businessObject, valueObject) {
    //console.log(businessObject.length);
    var _retValue = null;
    var _bFound = false;
    i = 0;
    while (i < businessObject.length) {
        if (_bFound == false) {
            if (businessObject[i].attributes.title == valueObject) {
                _bFound = true;
                if (businessObject[i].attributes.value == undefined) {

                    _retVal = null;
                }
                else {
                    _retVal = businessObject[i].attributes.value;
                }
            }
        }
        i++;
    }
    return _retVal;
};

function setD2(NEMSISElementNumber, valueArray) {
    //    console.log(NEMSISElementNumber);
    var _retArray = [];
    //    console.log(valueArray);
    switch (NEMSISElementNumber) {
        case "eArrest.01":

            if (eArrest01[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eArrest02[valueArray[0]]);
            }
            break;
        case "eArrest.02":
            for (i = 0; i < valueArray.length; i++) {
                if (eArrest02[valueArray[i]] == undefined) {
                    _retArray.push(valueArray[i] + "UNDEFINED");
                }
                else {
                    _retArray.push(eArrest02[valueArray[i]]);
                }
            }
            break;
        case "eArrest.03":
            if (eArrest03[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eArrest03[valueArray[0]]);
            }
            break;

        case "eArrest.04":
            if (eArrest04[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eArrest04[valueArray[0]]);
            }
            break;


        case "eArrest.11":
            if (eArrest11[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eArrest11[valueArray[0]]);
            }
            break;

        case "eArrest.12":
            if (eArrest12[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eArrest12[valueArray[0]]);
            }
            break;

        case "eArrest.13":
            if (eArrest13[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eArrest13[valueArray[0]]);
            }
            break;

        case "eArrest.14":
            if (eArrest14[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eArrest14[valueArray[0]]);
            }
            break;


        case "eArrest.16":
            if (eArrest16[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eArrest16[valueArray[0]]);
            }
            break;


        case "eArrest.17":
            if (eArrest17[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eArrest17[valueArray[0]]);
            }
            break;

        default:
            _retArray.push(NEMSISElementNumber = " version 2 not found");
    }

    return _retArray;

}

var eArrest01={
    "3001001":"0",
    "3001003":"2240",
    "3001005":"2245"
};

var eArrest02={	
    "3002001":	"2250",
    "3002003":	"2260",
    "3002005":	"2275",
    "3002007":	"2270",
    "3002009":	"2275",
    "3002011":	"2275",
    "3002013":	"2265",
    "3002015":	"2255"
};
var eArrest03={

    "3003001":	"2280",
    "3003003":	"2285",
    "3003005":	"2290",
    "3003007":	"2295",
    "3003009":	"2300",
    "3003011":	"2305"
};

var eArrest04={
    "3004001":	"2320",
    "3004003":	"2315",
    "3004005":	"2310",
    "3004007":	"2315"
};
	

var eArrest11={
    "3011001":	"2325",
    "3011003":	"2330",
    "3011005":	"2345",
    "3011007":	"2350",
    "3011009":	"2355",
    "3011011":	"2360",
    "3011013":	"2365"
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
}
var eArrest14 = function (estTimeEvent, estTimeArrival) {
    var _diff = Math.abs(new Date(estTimeCal) - new Date(estTimeArrival));
    var _minuteCount = Math.floor((diff / 1000) / 60);
    if (_minuteCount > 20) {
        _eArrest14 = "2390";
    }
    else if (_minuteCount > 15 && _mincount >= 20) {
        _eArrest14 = "2395";
    }
    else if (_minuteCount > 10 && _mincount >= 15) {
        _eArrest14 = "2400";
    }
    else if (_minuteCount > 8 && _mincount >= 10) {
        _eArrest14 = "2405";
    }
    else if (_minuteCount > 6 && _mincount >= 8) {
        _eArrest14 = "2410";
    }
    else if (_minuteCount > 4 && _mincount >= 6) {
        _eArrest14 = "2415";
    }
    else if (_minuteCount > 2 && _mincount >= 4) {
        _eArrest14 = "2420";
    }
    else if (_minuteCount > 0 && _mincount >= 2) {
        _eArrest14 = "2425";
    }
    else {
        _eArrest14 = "-10";
    }
    return _eArrest14;
}
var eArrest16 = {
    "3016001": "2430",
    "3016003": "2435",
    "3016005": "2440",
    "3016007": "-10",
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
    "9901023": "-5",
    "9901025": "-5",
    "9901027": "-5",
    "9901029": "-5",
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
    "9901051": "-5",
    "9901053": "-5",
    "9901055": "-5",
    "9901057": "-5",
    "9901059": "2570",
    "9901061": "2575",
    "9901063": "2580",
    "9901065": "2585",
    "9901067": "2590",
    "9901069": "2565",
    "9901071": "2595"
};

var eArrest334_01 = {
"3001001" : "No", 
 "3001003" : "Yes; Prior to EMS Arrival", 
 "3001005" : "Yes; After EMS Arrival"
};
var eArrest334_02 = {
 "3002001" : "Cardiac (Presumed)", 
 "3002003" : "Drowning/Submersion", 
 "3002005" : "Drug Overdose", 
 "3002007" : "Electrocution", 
 "3002009" : "Exsanguination", 
 "3002011" : "Other (Not Listed)", 
 "3002013" : "Respiratory/Asphyxia", 
 "3002015" : "Trauma"
};

var eArrest334_03 = {
 "3003001" : "Attempted Defibrillation", 
 "3003003" : "Attempted Ventilation", 
 "3003005" : "Initiated Chest Compressions", 
 "3003007" : "Not Attempted-Considered Futile", 
 "3003009" : "Not Attempted-DNR Orders", 
 "3003011" : "Not Attempted-Signs of Circulation"
};

var eArrest334_04 = {
 "3004001" : "Not Witnessed", 
 "3004003" : "Witnessed by Family Member", 
 "3004005" : "Witnessed by Healthcare Provider", 
 "3004007" : "Witnessed by Lay Person"
};

var eArrest334_05 = {
 "9923001" : "No", 
 "9923003" : "Yes"
};

var eArrest334_06 = {
 "3006001" : "Family Member", 
 "3006003" : "First Responder (Fire; Law; EMS)", 
 "3006005" : "Healthcare Professional (Non-EMS)", 
 "3006007" : "Lay Person (Non-Family)", 
 "3006009" : "Other EMS Professional (not part of dispatched response)"
};

var eArrest334_07 = {
 "3007001" : "No", 
 "3007003" : "Yes; Applied without Defibrillation", 
 "3007005" : "Yes; With Defibrillation"
};


var eArrest334_08 = {
     "3008001" : "Family Member", 
 "3008003" : "First Responder (Fire; Law; EMS)", 
 "3008005" : "Healthcare Professional (Non-EMS)", 
 "3008007" : "Lay Person (Non-Family)", 
 "3008009" : "Other EMS Professional (not part of dispatched response)"
};

var eArrest334_09 = {
 "3009001" : "Compressions-Continuous", 
 "3009003" : "Compressions-External Band Type Device", 
 "3009005" : "Compressions-External Plunger Type Device", 
 "3009007" : "Compressions-External Thumper Type Device", 
 "3009009" : "Compressions-Intermittent with Ventilation", 
 "3009011" : "Compressions-Other Device (Not Listed)", 
 "3009013" : "Ventilation-Bag Valve Mask", 
 "3009015" : "Ventilation-Impedance Threshold Device", 
 "3009017" : "Ventilation-Mouth to Mouth", 
 "3009019" : "Ventilation-Pocket Mask"
};

var eArrest334_10 = {
 "9923001" : "No", 
 "9923003" : "Yes"
};

var eArrest334_11 = {
 "3011001" : "Asystole", 
 "3011003" : "Bradycardia", 
 "3011005" : "PEA", 
 "3011007" : "Unknown AED Non-Shockable Rhythm", 
 "3011009" : "Unknown AED Shockable Rhythm", 
 "3011011" : "Ventricular Fibrillation", 
 "3011013" : "Ventricular Tachycardia-Pulseless"
};

var eArrest334_12 = {
 "3012001" : "No", 
 "3012003" : "Yes; At Arrival at the ED", 
 "3012005" : "Yes; Prior to Arrival at the ED", 
 "3012007" : "Yes; Sustained for 20 consecutive minutes"
};

var eArrest334_13 = {
 "3013001" : "CPC 1 Good Cerebral Performance", 
 "3013003" : "CPC 2 Moderate Cerebral Disability", 
 "3013005" : "CPC 3 Severe Cerebral Disability", 
 "3013007" : "CPC 4 Coma or Vegetative State"
};

var eArrest334_16 = {
 "3016001" : "DNR", 
 "3016003" : "Medical Control Order", 
 "3016005" : "Obvious Signs of Death", 
 "3016007" : "Physically Unable to Perform", 
 "3016009" : "Protocol/Policy Requirements Completed", 
 "3016011" : "Return of Spontaneous Circulation (pulse or BP noted)"
};

var eArrest334_17 = {
 "9901001" : "Agonal/Idioventricular", 
 "9901003" : "Asystole", 
 "9901005" : "Artifact", 
 "9901007" : "Atrial Fibrillation", 
 "9901009" : "Atrial Flutter", 
 "9901011" : "AV Block-1st Degree", 
 "9901013" : "AV Block-2nd Degree-Type 1", 
 "9901015" : "AV Block-2nd Degree-Type 2", 
 "9901017" : "AV Block-3rd Degree", 
 "9901019" : "Junctional", 
 "9901021" : "Left Bundle Branch Block", 
 "9901023" : "Non-STEMI Anterior Ischemia", 
 "9901025" : "Non-STEMI Inferior Ischemia", 
 "9901027" : "Non-STEMI Lateral Ischemia", 
 "9901029" : "Non-STEMI Posterior Ischemia", 
 "9901031" : "Other (Not Listed)", 
 "9901033" : "Paced Rhythm", 
 "9901035" : "PEA", 
 "9901037" : "Premature Atrial Contractions", 
 "9901039" : "Premature Ventricular Contractions", 
 "9901041" : "Right Bundle Branch Block", 
 "9901043" : "Sinus Arrhythmia", 
 "9901045" : "Sinus Bradycardia", 
 "9901047" : "Sinus Rhythm", 
 "9901049" : "Sinus Tachycardia", 
 "9901051" : "STEMI Anterior Ischemia", 
 "9901053" : "STEMI Inferior Ischemia", 
 "9901055" : "STEMI Lateral Ischemia", 
 "9901057" : "STEMI Posterior Ischemia", 
 "9901059" : "Supraventricular Tachycardia", 
 "9901061" : "Torsades De Points"
};



var eArrest334_18 = {
    "3018001" : "Expired in ED", 
    "3018003" : "Expired in the Field", 
    "3018005" : "Ongoing Resuscitation in ED", 
    "3018007" : "ROSC in the Field", 
    "3018009" : "ROSC in the ED", 
    "3018011" : "Ongoing Resuscitation by Other EMS"
};

function setCodeText(NEMSISElementNumber, valueArray) 
{
    var _return = [];
    switch (NEMSISElementNumber) 
    {
        case "eArrest.09":
            if (eArrest334_01[valueArray] == undefined) 
            {
                _return = valueArray + " UNDEFINED";
            }
            else 
            {
                _return = eArrest334_01[valueArray];
            }
            break;
        case "eArrest.02":
            if (eArrest334_02[valueArray] == undefined) 
            {
                _return = valueArray + " UNDEFINED";
            }
            else 
            {
                _return = eArrest334_02[valueArray];
            }
            break;
        case "eArrest.03":
            if (eArrest334_03[valueArray] == undefined) 
            {
                _return = valueArray + " UNDEFINED";
            }
            else 
            {
                _return = eArrest334_03[valueArray];
            }
            break;
        case "eArrest.04":
            if (eArrest334_04[valueArray] == undefined) 
            {
                _return = valueArray + " UNDEFINED";
            }
            else 
            {
                _return = eArrest334_04[valueArray];
            }
            break;
        case "eArrest.05":
            if (eArrest334_05[valueArray] == undefined) 
            {
                _return = valueArray + " UNDEFINED";
            }
            else 
            {
                _return = eArrest334_05[valueArray];
            }
            break;

        case "eArrest.06":
            if (eArrest334_06[valueArray] == undefined) 
            {
                _return = valueArray + " UNDEFINED";
            }
            else 
            {
                _return = eArrest334_06[valueArray];
            }
            break;

        case "eArrest.07":
            if (eArrest334_07[valueArray] == undefined) 
            {
                _return = valueArray + " UNDEFINED";
            }
            else 
            {
                _return = eArrest334_07[valueArray];
            }
            break;

        case "eArrest.08":
            if (eArrest334_08[valueArray] == undefined) 
            {
                _return = valueArray + " UNDEFINED";
            }
            else 
            {
                _return = eArrest334_08[valueArray];
            }
            b
        case "eArrest.09":
            if (eArrest334_09[valueArray] == undefined) 
            {
                _return = valueArray + " UNDEFINED";
            }
            else 
            {
                _return = eArrest334_09[valueArray];
            }
            break;

        case "eArrest.10":
            if (eArrest334_10[valueArray] == undefined) 
            {
                _return = valueArray + " UNDEFINED";
            }
            else 
            {
                _return = eArrest334_10[valueArray];
            }
            break;

        case "eArrest.11":
            if (eArrest334_11[valueArray] == undefined) 
            {
                _return = valueArray + " UNDEFINED";
            }
            else 
            {
                _return = eArrest334_11[valueArray];
            }
            break;

        case "eArrest.12":
            if (eArrest334_12[valueArray] == undefined) 
            {
                _return = valueArray + " UNDEFINED";
            }
            else 
            {
                _return = eArrest334_12[valueArray];
            }
            break;
        case "eArrest.13":
            if (eArrest334_13[valueArray] == undefined) 
            {
                _return = valueArray + " UNDEFINED";
            }
            else 
            {
                _return = eArrest334_13[valueArray];
            }
            break;
        case "eArrest.16":
            if (eArrest334_16[valueArray] == undefined) 
            {
                _return = valueArray + " UNDEFINED";
            }
            else 
            {
                _return = eArrest334_16[valueArray];
            }
            break;
        case "eArrest.17":
            if (eArrest334_17[valueArray] == undefined) 
            {
                _return = valueArray + " UNDEFINED";
            }
            else 
            {
                _return = eArrest334_17[valueArray];
            }
            break;

        case "eArrest.18":
            if (eArrest334_18[valueArray] == undefined) 
            {
                _return = valueArray + " UNDEFINED";
            }
            else 
            {
                _return = eArrest334_18[valueArray];
            }
            break;

        default:
            _return = " UNDEFINED";
    }
    return _return;

};

        /*
         This pattern validates consistency between the presence of cardiac arrest and the presence  of elements that are only collected in cardiac arrest cases. The elements in the eArrest section should be recorded when (and only when) eArrest.01 Cardiac Arrest is "Yes...". 

When eArrest.01 Cardiac Arrest is "Yes...", other elements in the eArrest section are recorded, and when eArrest.01 Cardiac Arrest is not "Yes...", other elements in the eArrest section are not recorded.

nem:eArrest.01 = ('3001003', '3001005')]">
This rule fires when eArrest.01 Cardiac Arrest is "Yes...".   Flag each of the following elements if it is empty.
eArrest.02" value="if(nem:eArrest.02 != '') then '' else key('nemSch_key_elements', 'eArrest.02', $nemSch_elements)"/>
eArrest.03" value="if(not(nem:eArrest.03 = '')) then '' else key('nemSch_key_elements', 'eArrest.03', $nemSch_elements)"/>
"eArrest.04" value="if(not(nem:eArrest.04 = '')) then '' else key('nemSch_key_elements', 'eArrest.04', $nemSch_elements)"/>

Do not flag eArrest.05 CPR Care Provided Prior to EMS Arrival or eArrest.07 AED Use Prior to EMS Arrival if Cardiac Arrest is not "Yes, Prior to EMS Arrival". 
eArrest.05" value="if(nem:eArrest.05 != '' or nem:eArrest.01 != '3001003') then '' else key('nemSch_key_elements', 'eArrest.05', $nemSch_elements)"/>
eArrest.07" value="if(nem:eArrest.07 != '' or nem:eArrest.01 != '3001003') then '' else key('nemSch_key_elements', 'eArrest.07', $nemSch_elements)"/>
 When <sch:value-of select="key('nemSch_key_elements', 'eArrest.01', $nemSch_elements)"/> is "Yes", the following information related to cardiac arrest and resuscitation should be recorded:
      <sch:value-of select="string-join(($eArrest.02, $eArrest.03, $eArrest.04, $eArrest.05, $eArrest.07)[. != ''], ', ')"/>
  </sch:rule>

  <sch:rule id="nemSch_consistency_eArrest.01" context="nem:eArrest[some $element in .//*[local-name() != 'eArrest.01'] satisfies normalize-space($element) != '']">

 This rule fires when eArrest.01 Cardiac Arrest is not "Yes..." and the eArrest section has a value recorded in any element other than eArrest.01. 
 Information related to cardiac arrest and resuscitation should be recorded only when <sch:value-of select="key('nemSch_key_elements', 'eArrest.01', $nemSch_elements)"/> is "Yes".
This pattern validates consistency in eArrest.03 Resuscitation Attempted by EMS. 
 eArrest.03 Resuscitation Attempted By EMS does not contain "Attempted/Initiated..." and "Not Attempted..." in the same record.
This rule fires when there are non-empty instances of eArrest.03 within eArrest. 
Assert that eArrest.03 Resuscitation Attempted by EMS should not contain both "Attempted/Initiated..." and "Not Attempted..." in the same record.  
test="not(nem:eArrest.03 = ('3003001', '3003003', '3003005') and nem:eArrest.03 = ('3003007', '3003009', '3003011'))">

This pattern validates consistency between eArrest.03 Resuscitation Attempted by EMS and eArrest.09 Type of CPR Provided. 

eArrest.03 Resuscitation Attempted By EMS should contain "Initiated Chest Compressions" when eArrest.09 Type of CPR Provided contains "Compressions..." and should contain "Attempted Ventilation" when eArrest.09 Type of CPR Provided contains "Ventilation..."
 Assert that eArrest.03 Resuscitation Attempted by EMS should contain "Initiated Chest Compressions" when eArrest.09 Type of CPR Provided contains "Compressions...".  -->
test="nem:eArrest.03 = '3003005' or not(nem:eArrest.09 = ('3009001', '3009003', '3009005', '3009007', '3009009', '3009011'))"
Assert that eArrest.03 Resuscitation Attempted by EMS should contain "Attempted Ventilation" when eArrest.09 Type of CPR Provided contains "Ventilation...".  

test="nem:eArrest.03 = '3003003' or not(nem:eArrest.09 = ('3009013', '3009015', '3009017', '3009019'))"

         */