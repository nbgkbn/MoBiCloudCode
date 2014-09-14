var seteAirway = function (TheCall) 

{
  
    var eAirway =                   new Object();
    var pAirway =                   new Object();
    var AirwayGroup =               new Object();
    var AirwayGroupArray =          new Array();
    var ConfirmationGroup =         new Object();
    var ConfirmationGroupArray = new Array();
    /*
    pAirway = TheCall.pAirway;
    eAirway.IsValid = false;
    if (pAirway.HasDataSet == true)
    {
        if(typeof pAirway.attributes.sections !='undefined')
        {
            var _eL =[];
            _eL = pAirway.attributes.sections[0].attributes.elements;
            if(_eL.length != -1)
            {
                eAirway.IsValid = true;
            }
        }            
    };
   
    if (eAirway.IsValid == true) {

        /////eAirway.01
        var _airway = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;

        _airway = getValue(_eL, "eAirway.01");
        if (_airway.IsNull == true) {
            if (isRequiredStateElement("eAirway.01") == true) {
                _val.push("7701003");
                valObj.NV = true;
            }
            else {
                _val.push("7701005");
                valObj.NV = true;
            }
        }
        else {
            _val.push(_airway.ValueArray[0].val);
            for (var i = 0; i < _airway.ValueArray.length; i++) {
                if ((_airway.ValueArray[i].HasValue == true) && (_val.indexOf(_airway.ValueArray[i].val) == -1)) {
                    _val.push(_airway.ValueArray[i].val);
                    valObj.IsNull = false;
                }
            };
        };
        valObj.vSet = _val.slice(0);
        AirwayGroup["eAirway.01"] = valObj;
        delete valObj;

        /////eAirway.10
        var _airway = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _airway = getValue(_eL, "eAirway.10");
        if (_airway.IsNull != true) {
            _val.push(_airway.ValueArray[0].val);
            eAirway.AirwayStartTime = _val[0];
            valObj.IsNull = false;
        };
        valObj.vSet = _val.slice(0);
        AirwayGroup["eAirway.10"] = valObj;
        delete valObj;

        /////eAirway.11
        // eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: 
        // Date/Time Decision to Manage the Patient with an Invasive Airway, 
        var _airway = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _airway = getValue(_eL, "eAirway.11");
        if (_airway.IsNull == true) {
            if (eAirway["HasAirwayDate"] != true) {
                ErrorList.push(ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eAirway.11", Description: "Validation Error: eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Date/Time Decision to Manage the Patient with an Invasive Airway " }))
            }
        }
        else {
            _val.push(_airway.ValueArray[0].val);
            eAirway.AirwayEndTime = _val[0];
            valObj.IsNull = false;
        };
        valObj.vSet = _val.slice(0);
        AirwayGroup["eAirway.11"] = valObj;
        delete valObj;

        eAirway["ConfirmationGroup"] = -1;
        //////////////////////////////eAirway.ConfirmationGroup
        if (pAirway.HasDataSet == true) {
            if (typeof pAirway.attributes.sections[0].attributes != 'undefined') {
                var _sI = [];
                _sI = getSectionIndex(pAirway.attributes.sections[0], "eAirway.ConfirmationGroup");
                if (_sI.length != -1) {
                    eAirway["ConfirmationGroup"] = _sI.length;
                }
            }
        };

        if (eAirway["ConfirmationGroup"] != -1) {
            eAirway.IsValid = true;
            var CGroupArray = [];

            for (var y = 0; y < _sI.length; y++) {

                var _eCG = [];
                var _eCG = pAirway.attributes.sections[0].attributes.sections[_sI[y]].attributes.elements;
                var CGroup = new Object();

                /////eAirway.02
                var _airway = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _airway = getValue(_eCG, "eAirway.02");
                eAirway["HasAirwayDate"] = false;
                if (_airway.IsNull == true) {
                    if (isRequiredStateElement("eAirway.02") == true) {
                        _val.push("7701003");
                        valObj.NV = true;
                    }
                    else {
                        _val.push("7701005");
                        valObj.NV = true;
                    }
                }
                else {
                    _val.push(_airway.ValueArray[0].val);
                    valObj.IsNull = false;

                };
                valObj.vSet = _val.slice(0);
                CGroup["eAirway.02"] = valObj;
                delete valObj;

                /////eAirway.03
                var _airway = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _airway = getValue(_eCG, "eAirway.03");
                if (_airway.IsNull == true) {
                    if (isRequiredStateElement("eAirway.03") == true) {
                        _val.push("7701003");
                        valObj.NV = true;
                    }
                    else {
                        _val.push("7701005");
                        valObj.NV = true;
                    }
                }
                else {
                    if (eAirway["HasAirwayDate"] == false) {
                        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eAirway.06", Description: "Validation Error: Device Confirmation requires Confirmation Time" });
                    };
                    _val.push(_airway.ValueArray[0].val);
                    valObj.IsNull = false;
                };
                valObj.vSet = _val.slice(0);
                CGroup["eAirway.03"] = valObj;
                delete valObj;

                /////eAirway.04
                var _airway = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _airway = getValue(_eCG, "eAirway.04");
                if (_airway.IsNull == true) {
                    if (isRequiredStateElement("eAirway.04") == true) {
                        _val.push("7701003");
                        valObj.NV = true;
                    }
                    else {
                        _val.push("7701005");
                        valObj.NV = true;
                    }
                }
                else {
                //    if (eAirway["HasAirwayDate"] == false) {
               //         ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eAirway.03", Description: "Validation Error: Placement Method Requires Confirmation Time" });
              //      }
              //      else {
                        for (var i = 0; i < _airway.ValueArray.length; i++) {
                            if ((_airway.ValueArray[i].HasValue == true) && (_val.indexOf(_airway.ValueArray[i].val) == -1)) {
                                _val.push(_airway.ValueArray[i].val);
                                valObj.IsNull = false;
                            }
                        };
                        eAirway["HasAirway"] = true;
                   // }
                };

                valObj.vSet = _val.slice(0);
                CGroup["eAirway.04"] = valObj;
                delete valObj;

                /////eAirway.05
                var _airway = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _airway = getValue(_eCG, "eAirway.05");
                if (_airway.IsNull == true) {
                    if (eAirway["HasAirwayDate"] == false) {
                        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eAirway.07", Description: "Device Placement Requires Tube Depth Confirmation Time" });

                    }
                    else {
                        _val.push(_airway.ValueArray[0].val);
                        valObj.IsNull = false;
                    }
                };
                valObj.vSet = _val.slice(0);
                CGroup["eAirway.05"] = valObj;
                delete valObj;


                /////eAirway.06
                var _airway = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _airway = getValue(_eCG, "eAirway.06");

                if (_airway.IsNull == true) 
                {
                    if (isRequiredStateElement("eAirway.06") == true) 
                    {
                        _val.push("7701003");
                        valObj.NV = true;
                    }
                    else {
                        _val.push("7701005");
                        valObj.NV = true;
                    }
                }
                else {
               //     if (eAirway["HasAirwayDate"] == false) {
               //         ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eAirway.06", Description: "Device Placement Requires Confirmation Time" });
               //     }
               //     else {
                        _val.push(_airway.ValueArray[0].val);
                        valObj.IsNull = false;
             //       }
                };
                
                valObj.vSet = _val.slice(0);
                CGroup["eAirway.06"] = valObj;
                delete valObj;


                /////eAirway.07
                var _airway = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _airway = getValue(_eCG, "eAirway.07");
                if (_airway.IsNull == true) {
                    if (isRequiredStateElement("eAirway.07") == true) {
                        _val.push("7701003");
                        valObj.NV = true;
                    }
                    else {
                        _val.push("7701003");
                        valObj.NV = true;
                    }
                }
                else {
                    eAirway["HasAirway"] = true;
                    _val.push(_airway.ValueArray[0].val);
                    valObj.IsNull = false;
                };
                valObj.vSet = _val.slice(0);
                CGroup["eAirway.07"] = valObj;
                delete valObj;


                /////eAirway.08

                var _airway = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _airway = getValue(_eCG, "eAirway.08");
                if (_airway.IsNull == true) {
                    if (isRequiredStateElement("eAirway.08") == true) {
                        _val.push("7701003")
                        valObj.NV = true;
                    }
                    else {
                        _val.push("7701005")
                        valObj.NV = true;
                    }
                }
                else {
                    for (var i = 0; i < _airway.ValueArray.length; i++) {
                        if ((_airway.ValueArray[i].HasValue == true) && (_val.indexOf(_airway.ValueArray[i].val) == -1)) {
                            _val.push(_airway.ValueArray[i].val)
                            valObj.IsNull = false;
                        }
                    }
                };
                valObj.vSet = _val.slice(0);
                CGroup["eAirway.08"] = valObj;
                delete valObj;


                /////eAirway.09
                var _airway = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _airway = getValue(_eCG, "eAirway.09");
                if (_airway.IsNull != true) {
                    for (var i = 0; i < _airway.ValueArray.length; i++) {
                        if ((_airway.ValueArray[i].HasValue == true) && (_val.indexOf(_airway.ValueArray[i].val) == -1)) {
                            _val.push(_airway.ValueArray[i].val);
                            valObj.IsNull = false;
                        }
                    };
                    eAirway["HasAirway"] = true;
                };
                valObj.vSet = _val.slice(0);
                CGroup["eAirway.09"] = valObj;
                delete valObj;

                CGroupArray.push(CGroup);
            }
        }
    };

            
            ConfirmationGroupArray.push        
            //ConfirmationGroup Loop
            if (CGroupArray.length > 0) {
                AirwayGroup.ConfirmationGroup = CGroupArray;
                eAirway.AirwayGroup = AirwayGroup;
            };
  */
    return eAirway;
};

var seteArrest = function (TheCall)
{
    var eArrest = new Object();
    var pArrest=TheCall.pArrest;
    var ErrorList = [];
    if (pArrest.HasDataSet == false)
    {
        eArrest["IsValid"] = false;
      //  ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eArrest", Description: "Missing Mandatory.  eArrest.HasDataSet = false" })
    }
    else 
    {
        eArrest["IsValid"] = true;
    };
        /////////////eArrest.01
        var  _arrest=[];
        var  _val=[];
        
        if (typeof pArrest.attributes!= 'undefined') {
            _eL = [];
            _eL = pArrest.attributes.elements;
        };

        console.log(_eL)

        var _arrest = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        if (eArrest["IsValid"] == true) {
            _arrest = getValue(_eL, "eArrest.01");

            if (_arrest.IsNull == true) 
            {
                eArrest.HasArrest = false; //set Values to Not Applicable
                _val.push("7701003")
                valObj.NV = true;
            }

            else 
            {
                _val = _arrest.ValueArray[0].val;
                valObj.IsNull = false;
                eArrest.HasArrestRecord = true;   //We have an eArrest 
                if (_val == "3001001") 
                {
                    eArrest["IsCardiacArrest"] = false;
                }
                else 
                {
                    eArrest["IsCardiacArrest"] = true;
                }
            }
        }
        else
        {
            eArrest.HasArrest = false; //set Values to Not Applicable
            _val.push("7701001")
            valObj.NV = true;        
        };
        valObj.vSet = _val.slice(0);
        eArrest["eArrest.01"] = valObj;
        delete valObj;

        //When eArrest.01 Cardiac Arrest is "Yes...", other elements in the eArrest section are recorded, 
        //When eArrest.01 Cardiac Arrest is not "Yes...", other elements in the eArrest section are not recorded

        /////////////eArrest.02
        var _arrest = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;

        if ((eArrest["IsValid"] == true) && (eArrest["IsCardiacArrest"] == true))  //Yes value for eArrest.01
        {
            _arrest = getValue(_eL, "eArrest.02");
            console.log(_arrest)


            if (_arrest.IsNull == true)
            {
                _val.push("7701003");
                valObj.NV = true;                
            }
            else 
            {
                _val.push(_arrest.ValueArray[0].val);
                valObj.IsNull = false
            }            
        }
        else 
        {            
            _val.push("7701001");
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eArrest["eArrest.02"] = valObj;
        delete valObj;
    
        /////////////eArrest.03
        var _arrest = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        //Resuscitation Attempted By EMS does not contain "Attempted/Initiated..." and "Not Attempted..." in the same record

        eArrest["ResuscitationAttempted"] = false;
        if ((eArrest["IsValid"] == true) && (eArrest["IsCardiacArrest"] == true))  //Yes value for eArrest.01
        {
            _arrest = getValue(_eL, "eArrest.03");
            if (_arrest.IsNull == true) {
                _val.push("7701003")
                valObj.NV = true;
            }
            else {
                var arrAttempt = ["3003001", "3003003", "3003005"];
                for (var i = 0; i < _arrest.ValueArray.length; i++) {
                    if ((_arrest.ValueArray[i].HasValue == true) && (_val.indexOf(_arrest.ValueArray[i].val) == -1)) {
                        _val.push(_arrest.ValueArray[i].val);
                        valObj.IsNull = false
                    }
                };


                //Check for an Attempt with list of No Attempts
                var arrNotAttempt = ["3003007", "3003009", "3003011"];
                if (eArrest["HasbResuscitationAttempted"] == true) {
                    for (var i = 0; i < _val.length; i++) {
                        if (arrNotAttempt.indexOf(arr1[i]) != -1) {
                            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eArrest.03", Description: "Conflicting values:  Attempted/Not Attempted" })
                        }
                    }
                }
            }
        }

        else
        {
            _val.push("7701001");
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eArrest["eArrest.03"] = valObj;
        delete valObj;


        /////////////eArrest.04

        var _arrest = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        var bArrestWitnessedBy = false;
        if ((eArrest["IsValid"] == true) && (eArrest["IsCardiacArrest"] == true))  //Yes value for eArrest.01
        {
            _arrest = getValue(_eL, "eArrest.04");
            if(_arrest.IsNull==true) 
            {
                _val.push("7701003");
                valObj.NV = true;
            }
            else 
            {                
                for (var i = 0; i < _arrest.ValueArray.length; i++) {
                    if ((_arrest.ValueArray[i].HasValue == true) && (_val.indexOf(_arrest.ValueArray[i].val) == -1)) {
                        _val.push(_arrest.ValueArray[i].val);                       
                        valObj.IsNull = false
                    }
                };
            }
        }
        else 
        {
            _val.push("7701001")
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eArrest["eArrest.04"] = valObj;
        delete valObj;
    
        /////////////eArrest.05
        var _arrest = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        eArrest["CPRProvided"] = false; //can only be True when isArrest is True
        if ((eArrest["IsValid"] == true) && (eArrest["IsCardiacArrest"] == true))  //Yes value for eArrest.01
        {
            _arrest = getValue(_eL, "eArrest.05");
            if(_arrest.IsNull==true) 
            {
                _val.push("7701003")
                valObj.NV = true;
            }
            else 
            {
                _val.push(_arrest.ValueArray[0].val);
                if (_val == "9923003") 
                {
                    eArrest["CPRProvided"] = true;
                }
                _val.push(_arrest.ValueArray[0].val);               
                valObj.IsNull = false
            }
        }
        else 
        {
            _val.push("7701001");
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eArrest["eArrest.05"] = valObj;
        delete valObj;


        /////////////eArrest.06
        var _arrest = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        if ((eArrest["IsValid"] == true) && (eArrest["IsCardiacArrest"] == true))  //Yes value for eArrest.01
        {
            _arrest = getValue(_eL, "eArrest.06");
            if(_arrest.IsNull!=true) 
            {
                for (var i = 0; i < _arrest.ValueArray.length; i++)
                {
                    if ((_arrest.ValueArray[i].HasValue == true) && (_val.indexOf(_arrest.ValueArray[i].val) == -1)) {
                        _val.push(_arrest.ValueArray[i].val);
                        valObj.IsNull = false
                    }
                };
            }
        };
        valObj.vSet = _val.slice(0);
        eArrest["eArrest.06"] = valObj;
        delete valObj;
        
        /////////////eArrest.07
        var _arrest = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;

        eArrest["AEDProvided"] = false;
        if ((eArrest["IsValid"] == true) && (eArrest["IsCardiacArrest"] == true))  //Yes value for eArrest.01
        {
            _arrest = getValue(_eL, "eArrest.07");
            if (_arrest.IsNull == true)
            {
                _val.push("7701003");
                valObj.NV = true;            }
            else 
            {
                _val.push(_arrest.ValueArray[0].val);
                if (_val[0] != "3007001") 
                {
                    eArrest["AEDProvided"] = true;
                };
                valObj.IsNull = false
            }
        }
        else 
        {
            _val.push("7701001");
            valObj.NV = true;
        };

        valObj.vSet = _val.slice(0);
        eArrest["eArrest.07"] = valObj;
        delete valObj;

    
        /////////////eArrest.08
        var _arrest = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;

        if ((eArrest["IsValid"] == true) && (eArrest["IsCardiacArrest"] == true))  //Yes value for eArrest.01
        {
            _arrest = getValue(_eL, "eArrest.08");

            if (eArrest["AEDProvided"] == true)  //
            {
                if (_arrest.IsNull != true)
                {
                    for (var i = 0; i < _arrest.ValueArray.length; i++)
                    {
                        if ((_arrest.ValueArray[i].HasValue == true) && (_val.indexOf(_arrest.ValueArray[i].val) == -1))
                        {
                            _val.push(_arrest.ValueArray[i].val);
                            valObj.IsNull = false
                        }
                    }
                }
            }
        };
        valObj.vSet = _val.slice(0);
        eArrest["eArrest.08"] = valObj;
        delete valObj;

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
        var _arrest = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        if ((eArrest["IsValid"] == true) && (eArrest["IsCardiacArrest"] == true) && (eArrest["CPRProvided"] == true))
        {
            _arrest = getValue(_eL, "eArrest.09");
            if (_arrest.IsNull == true)
            {
                _val.push("7701003");
                valObj.NV = true;
            }
            else
            {
                for (var i = 0; i < _arrest.ValueArray.length; i++)
                {
                    if ((_arrest.ValueArray[i].HasValue == true) && (_val.indexOf(_arrest.ValueArray[i].val) == -1))
                    {
                        _val.push(_arrest.ValueArray[i].val);
                        valObj.IsNull = false
                    }
                };

                bError = false;
                //Check for Compression 3003005, if eArrest.03 values = Compression
                arrCompression = ["3009001", "3009003", "3009005", "3009007", "3009009", "3009011"]; //Compression values
                if (eArrest["eArrest.03"] = "3003005") //Compression
                {
                    if (arrCompression.indexOf(_val) != -1) 
                    {
                        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eArrest.09", Description: "Validation Error:Conflicting values.  Resuscitation Attempted By EMS should contain " / "Initiated Chest Compressions" / "" })  ;      
                    }
                };

                //Check for Compression 3003005, if eArrest.03 values = Ventilation
                arrVent = ["3009013", "3009015", "3009017", "3009019"]; //Ventilation values
                if (eArrest["eArrest.03"] = "3003003") //Ventilation
                {
                    if (arrVent.indexOf(_val) != -1) 
                    {
                        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eArrest.09", Description: "Validation Error:Conflicting values.  Resuscitation Attempted By EMS should contain " / "Initiated Chest Compressions" / "" }) ;                                   
                    }
                };

                //Check for VENTILATION 3003005, if eArrest.03 values = Compression
                arrCompression = ["3009001", "3009003", "3009005", "3009007", "3009009", "3009011"]; //Compression values
                if (eArrest["eArrest.03"] = "3003005") //Compression
                {
                    if (arrNotAttempt.indexOf(_val) != -1) 
                    {
                        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eArrest.09", Description: "Validation Error:Conflicting values.  Resuscitation Attempted By EMS should contain " / "Initiated Chest Compressions" / "" });
                    }
                };
            }
        }
        else 
        {
            _val.push("7701001");
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eArrest["eArrest.09"] = valObj;
        delete valObj;


        /////////////eArrest.10
        var _arrest = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        if ((eArrest["IsValid"] == true) && (eArrest["IsCardiacArrest"] == true))  //Yes value for eArrest.01
        {
            _arrest = getValue(_eL, "eArrest.10");           
            if(_arrest.IsNull==true)
            {
                if (isRequiredStateElement("eArrest.10") == true) 
                {
                    _val.push("7701003");
                    valObj.NV = true;
                }
            }
            else
            {
                _val.push(_arrest.ValueArray[0].val);
                valObj.IsNull = false
            }            
        }
        else        
        {
            _val.push("7701001");
            valObj.NV = true;        
        };
        valObj.vSet = _val.slice(0);
        eArrest["eArrest.10"] = valObj;
        delete valObj;

        
        /////////////eArrest.11
        var _arrest = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        if ((eArrest["IsValid"] == true) &&(eArrest["IsCardiacArrest"] == true))  //Yes value for eArrest.01
        {
            _arrest = getValue(_eL, "eArrest.11");
            if(_arrest.IsNull==true)
            {
                _val.push("7701003");
                valObj.NV = true;            }
            else
            {
                _val.push(_arrest.ValueArray[0].val);
                valObj.IsNull = false
            }
        }
        else
        {
            _val.push("7701001");
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eArrest["eArrest.11"] = valObj;
        delete valObj;
        
        /////////////eArrest.12
        var _arrest = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        if ((eArrest["IsValid"] == true) &&(eArrest["IsCardiacArrest"] == true))  //Yes value for eArrest.01
        {
            _arrest = getValue(_eL, "eArrest.12");
            if(_arrest.IsNull==true)
            {
                if (isRequiredStateElement("eArrest.12") == true)
                {
                    _val.push("7701003")       
                    valObj.NV = true;
                }                
            }
            else
            {    
                for (var i = 0; i < _arrest.ValueArray.length; i++)
                {
                    if ((_arrest.ValueArray[i].HasValue == true) && (_val.indexOf(_arrest.ValueArray[i].val) == -1))
                    {
                        _val.push(_arrest.ValueArray[i].val);
                        valObj.IsNull = false
                    }
                };
        
                if (_val.length >=1) 
                {
                   // if(_val.indexOf("3012001") != -1)
                   // {
                        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eArrest.12", Description: "Validation //Error:Conflicting values.  Any Return of Spontaneous Circulation Contains Conflicting Values"  })
                   // }
                };
            }
        }
        else
        { 
            _val.push("7701001")
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eArrest["eArrest.12"] = valObj;
        delete valObj;
        
        /////////////eArrest.13
        var _arrest = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        if ((eArrest["IsValid"] == true) && (eArrest["IsCardiacArrest"] == true))  //Yes value for eArrest.01
        {
            _arrest = getValue(_eL, "eArrest.13");
            console.log(_arrest)

            if (_arrest.IsNull != true) {
                _val.push(_arrest.ValueArray[0].val);
                valObj.IsNull = false
            }
        }
        valObj.vSet = _val.slice(0);
        eArrest["eArrest.13"] = valObj;              
        delete valObj;

    /////////////eArrest.14
        var _arrest = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        if ((eArrest["IsValid"] == true) &&(eArrest["IsCardiacArrest"] == true))  //Yes value for eArrest.01
        {
            _arrest = getValue(_eL, "eArrest.14");
            if (_arrest.IsNull == true) {
                if (isRequiredStateElement("eArrest.14") == true)
                {
                    _val.push("7701003");
                    valObj.NV = true;
                }
            }
            else
            {
                _val.push(_arrest.ValueArray[0].val);
                valObj.IsNull = false
            }
        }
        else
        {        
            _val.push("7701001");
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eArrest["eArrest.14"] = valObj;
        delete valObj;

        /////////////eArrest.15
        var _arrest = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        if ((eArrest["IsValid"] == true) &&(eArrest["IsCardiacArrest"] == true))//&& (eArrest["ResuscitationAttempted"] == true))
        {
            _arrest = getValue(_eL, "eArrest.15");
            
            if(_arrest.IsNull==true)
            {        
                if (isRequiredStateElement("eArrest.15") == true) 
                {           
                    _val.push("7701003")
                    valObj.NV = true
                }
                else
                {
                    _val.push("7701005")
                    valObj.NV = true;
                }          
            }
            else
            {
                _val.push(_arrest.ValueArray[0].val);
                valObj.IsNull = false
            }
        }
        else
        {        
            _val.push("7701001")
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eArrest["eArrest.15"] = valObj;
        delete valObj;

        /////////////eArrest.16
        var _arrest = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        if ((eArrest["IsValid"] == true) &&(eArrest["IsCardiacArrest"] == true))//&&(eArrest["CPRProvided"] ==true))  //Yes value for eArrest.01
        {
            _arrest = getValue(_eL, "eArrest.16");
            if(_arrest.IsNull==true)
            {
                if (isRequiredStateElement("eArrest.16") == true)
                {
                    _val.push("7701003")
                    valObj.NV = true;
                }
                else 
                {            
                    _val.push("7701005")
                    valObj.NV = true;
                }
            }    
            else
            {
                _val.push(_arrest.ValueArray[0].val);
                valObj.IsNull = false
            }
        }
        else
        {
            _val.push("7701001")
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eArrest["eArrest.16"] = valObj;
        delete valObj;
    
        /////////////eArrest.17
        var _arrest = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        if ((eArrest["IsValid"] == true) &&(eArrest["IsCardiacArrest"] == true))  //Yes value for eArrest.01
        {
            _arrest = getValue(_eL, "eArrest.17");

            if (_arrest.IsNull == true)
            {
                _val.push("7701003")
                valObj.NV = true;

            }
            else
            {       
                var arr2 = [];
                for (var i = 0; i < _arrest.ValueArray.length; i++)
                {
                    if ((_arrest.ValueArray[i].HasValue == true) && (_val.indexOf(_arrest.ValueArray[i].val) == -1))
                    {
                        _val.push(_arrest.ValueArray[i].val);
                        valObj.IsNull = false
                    }
                };
            }
        }
        
        else
        {
            _val.push("7701001")
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eArrest["eArrest.17"] = valObj;
        delete valObj;

        /////////////eArrest.18
        var _arrest = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        if ((eArrest["IsValid"] == true) &&(eArrest["IsCardiacArrest"] == true))
        {
            _arrest = getValue(_eL, "eArrest.18");       
            if(_arrest.IsNull==true) 
            {
                _val.push("7701003")
                valObj.NV = true;
            }
            else
            {
                _val.push(_arrest.ValueArray[0].val);
                valObj.IsNull = false
            };            
        }
        else
        {
            _val.push("7701001")
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eArrest["eArrest.18"] = valObj;
        delete valObj;
    //};
    
    console.log(eArrest)
    return eArrest;
};

var seteExam = function (TheCall) 
{
 
    var eExam = new Object();
    /*
    var pExam = TheCall.pExam;
 
    if (pExam.HasDataSet != true)
    {
        eExam["IsValid"] = false;     
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eExam", Description: "Missing Mandatory.  eExam.HasDataSet = false" })
        eExam.Errors = ErrorList.slice(0);
    }
    else 
    {
        if(typeof pExam.attributes.elements !='undefined')
        {
            _exArr = pExam.attributes.elements; 
            ////////eExam.01 
            var _exam = [];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;
            if (eExam.IsValid == true) 
            {
                _exam = getValue(_exArr, "eExam.01");
                if (_exam.IsNull == true) 
                {
                    if(_exam.HasPN==true)
                    {
                        _val.push("8801023")
                        valObj.NV = true;    
                    };
                
                    if (isRequiredStateElement("eExam.01") == true)         
                    {
                        _val.push("7701003")
                        valObj.NV = true;

                    }
                    else 
                    {
                        _val.push("7701005")
                        valObj.NV = true;
                    }                
                }
                else 
                {
                    _val.push(_exam.ValueArray[0].val);
                    valObj.IsNull = false;
                }
            }
            else
            {                    
                _val.push("7701001")
                valObj.NV = true;
            };
            valObj.vSet = _val.slice(0);
            eExam["eExam.01"] = valObj;
            delete valObj;
        

            /////////eExam.02
            var _exam = [];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;
            _exam = getValue(_exArr, "eExam.02");
            if (eExam.IsValid == true) 
            {
                if (_exam.IsNull == true) 
                {
                    if(_exam.HasPN==true)
                    {              
                        if (_exam.PN == "Refused")
                        {
                            _val.push("8801019")
                            valObj.NV = true;
                        }
                        else 
                        {
                            _val.push("8801023")
                            valObj.NV = true;
                        }
                    }
                    else 
                    {        
                        if (isRequiredStateElement("eExam.02") == true) 
                        {
                            valObj.NV = true;
                            _val.push("7701003")                        
                        }
                        else 
                        {
                            _val.push("7701005")                        
                            valObj.NV = true;
                        }
                    }
                }
                else 
                {  
                    _val.push(_exam.ValueArray[0].val);
                    valObj.IsNull = false;
                }
            }
            else
            {
                _val.push("7701001");
                valObj.NV = true;
            };
        
            valObj.vSet = _val.slice(0);
            eExam["eExam.01"] = valObj;
            delete valObj;

            ///////////////////////////////////////////////
            eExam["AssessmentGroup"]=-1;
            if((eExam.IsValid ==true)&& (typeof pExam.attributes.sections !='undefined'))
            {
                var AssessmentArray = [];       
                _sectionIndex = getSectionIndex(pExam, "eExam.AssessmentGroup");
                if (_sectionIndex !=-1) 
                {
                    for (var xx = 0; xx < _sectionIndex.length; xx++) 
                    {
                        eExam["AssessmentGroup"]=_sectionIndex.length;                
                        var _Ag = [];
                        var _assArr = pExam.attributes.sections[xx].attributes.elements;
        
                        /////////eExam.03
                        var _exam = [];
                        var _val = [] ;       
                        var valObj = {};
                        valObj.IsNull = true;
                        _exam = getValue(_assArr, "eExam.03");
                        if (_exam.IsNull != true) {
                            _val.push(_exam.ValueArray[0].val);
                            valObj.IsNull = false;
                            _Ag.push({ section: "E16", element: "E16_03", val: _val });
                        };
                        valObj.vSet = _val.slice(0);
                        AssessmentGroup["eExam.03"]=valObj;;
                        delete valObj;
                
                        /////////eExam.04
                        var _exam = [];
                        var _val = [] ;       
                        var valObj = {};
                        valObj.IsNull = true;

                        _exam = getValue(_assArr, "eExam.04");
                        if (_exam.IsNull != true) {
                            var arr2 = [];
                            for (var i = 0; i < _exam.ValueArray.length; i++) {
                                if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) {
                                    _val.push(_exam.ValueArray[i].val);
                                    valObj.IsNull = false;
                                }
                            };
                        };
                        valObj.vSet = _val.slice(0);
                        AssessmentGroup["eExam.04"]=valObj;;
                        delete valObj;

                        /////////eExam.05
                        var _exam = [];
                        var _val = [] ;       
                        var valObj = {};
                        valObj.IsNull = true;

                        _exam = getValue(_assArr, "eExam.05");
                        if (_exam.IsNull != true) {
                            if (_exam.HasPN == true) {
                                _val.push( "8801005");
                                valObj.PN = true;
                            }
                        }
                        else {
                            for (var i = 0; i < _exam.ValueArray.length; i++) 
                            {
                                if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) 
                                {
                                    _val.push(_exam.ValueArray[i].val)
                                    valObj.IsNull = false;
                                }
                            };
                        };
                        valObj.vSet = _val.slice(0);
                        AssessmentGroup["eExam.05"]=valObj;;
                        delete valObj;

                        /////////eExam.06
                        var _exam = [];
                        var _val = [] ;       
                        var valObj = {};
                        valObj.IsNull = true;
                        _exam = getValue(_assArr, "eExam.06");
                        if (_exam.IsNull == true) {
                            if (_exam.HasPN == true) {
                                _val.push( "8801005");
                                valObj.PN = true;
                            }
                        }
                        else {
                            var arr1 = [];
                            for (var i = 0; i < _exam.ValueArray.length; i++) {
                                if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) 
                                {
                                    _val.push(_exam.ValueArray[i].val);
                                    valObj.IsNull = false;
                                }
                            };
                        };
                        valObj.vSet = _val.slice(0);
                        AssessmentGroup["eExam.06"]=valObj;;
                        delete valObj;

                        /////////eExam.07
                        var _exam = [];
                        var _val = [] ;       
                        var valObj = {};
                        valObj.IsNull = true;
                        _exam = getValue(_assArr, "eExam.07");
                        if (_exam.IsNull == true) {
                            if (_exam.HasPN == true) 
                            {
                                _val.push( "8801005");
                                valObj.PN = true;
                            }
                        }
                        else 
                        {
                            for (var i = 0; i < _exam.ValueArray.length; i++) 
                            {
                                if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) 
                                {
                                    _val.push(_exam.ValueArray[i].val);
                                    valObj.IsNull = false;
                                }
                            }
                        };
                        valObj.vSet = _val.slice(0);
                        AssessmentGroup["eExam.07"]=valObj;;
                        delete valObj;

                        /////////eExam.08
                        var _exam = [];
                        var _val = [] ;       
                        var valObj = {};
                        valObj.IsNull = true;
                        _exam = getValue(_assArr, "eExam.08");
                        if (_exam.IsNull == true) {
                            if (_exam.HasPN == true) 
                            {                    
                                _val.push( "8801005");
                                valObj.PN = true;
                            }
                        }
                        else {
                            for (var i = 0; i < _exam.ValueArray.length; i++) 
                            {
                                if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) 
                                {
                                    _val.push(_exam.ValueArray[i].val);                
                                    valObj.IsNull = false;
                                }
                            };
                            _Ag.push({ section: "E16", element: "E16_07", val: arr2.slice(0) });                    
                        };
                        valObj.vSet = _val.slice(0);
                        AssessmentGroup["eExam.07"]=valObj;;
                        delete valObj;

                        /////////eExam.09
                        var _exam = [];
                        var _val = [] ;       
                        var valObj = {};
                        valObj.IsNull = true;

                        _exam = getValue(_assArr, "eExam.09");
                        if (_exam.IsNull == true) 
                        {
                            if (_exam.HasPN == true) 
                            {
                                _val.push( "8801005");
                                valObj.NV = true;
                            }
                        }
                        else 
                        {
                            for (var i = 0; i < _exam.ValueArray.length; i++) 
                            {
                                if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) 
                                {
                                    _val.push(_exam.ValueArray[i].val);
                                    valObj.IsNull = false;
                                };
                            }
                        };
                        valObj.vSet = _val.slice(0);
                        AssessmentGroup["eExam.09"]=valObj;;
                        delete valObj;

                        AssessmentGroup["AbdomenGroup"] = -1;
                        //AbdomenGroup////////////////////////////////////////////////////////////////////
                        var AbdomenGroup = {};
                        
                        if (typeof pExam.attributes.sections[xx].attributes.sections != 'undefined') {
                            _s1 = getSectionIndex(pExam.attributes.sections[xx], "eExam.AbdomenGroup");
                            if (_s1 != -1)
                            {
                                var AbdomenGroupArray = [];
                                AssessmentGroup["AbdomenGroup"] = _s1.length;
                                for (var x = 0; x <= _s1.length - 1; x++)
                                {
                                    var _abdArr = [];

                                    _ex1 = pExam.attributes.sections[xx].attributes.sections[_s1[x]].attributes.elements;

                                    /////////eExam.10
                                    var _exam = [];
                                    var _val = [];
                                    var valObj = {};
                                    valObj.IsNull = true;

                                    _exam = getValue(_ex1, "eExam.10");

                                    console.log(_exam)
                                    if (_exam.IsNull != true) {
                                        _val.push(_exam.ValueArray[0].val);
                                        valObj.IsNull = false;
                                    };
                                    valObj.vSet = _val.slice(0);
                                    AbdomenGroup["eExam.10"] = valObj;;
                                    delete valObj;

                                    /////////eExam.11
                                    var _exam = [];
                                    var _val = [];
                                    var valObj = {};
                                    valObj.IsNull = true;

                                    _exam = getValue(_ex1, "eExam.11");
                                    if (_exam.IsNull == true) {
                                        if (_exam.HasPN == true) {
                                            _val.push("8801005");
                                            valObj.NV = true;
                                        }
                                    }
                                    else {
                                        for (var i = 0; i < _exam.ValueArray.length; i++) {
                                            if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) {
                                                _val.push(_exam.ValueArray[i].val);
                                                valObj.IsNull = false;
                                            }
                                        };
                                    };

                                    valObj.vSet = _val.slice(0);
                                    AbdomenGroup["eExam.10"] = valObj;;
                                    delete valObj;

                                    AbdomenGroupArray.push(AbdomenGroup);
                                };

                            };
                            AssessmentArray.push(AbdomenGroupArray);

                
                            /////////eExam.12
                            var _exam = [];
                            var _val = [] ;       
                            var valObj = {};
                            valObj.IsNull = true;

                            _exam = getValue(_assArr, "eExam.12");
                            if (_exam.IsNull == true) {
                                if (_exam.HasPN == true) {
                                    _val.push( "8801005");
                                    valObj.PN = true;
                                }
                            }
                            else {
                                for (var i = 0; i < _exam.ValueArray.length; i++) {
                                    if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) {
                                        _val.push(_exam.ValueArray[i].val);
                                        valObj.IsNull = false;
                                    }
                                };
                            };
                            valObj.vSet = _val.slice(0);
                            AssessmentGroup["eExam.10"]=valObj;;
                            delete valObj;

                            ////////////////////////////// Spine Group////////////////////
                            AssessmentGroup["SpineGroup"] = -1;                        
                            var SpineGroup = {};
                            _s2 = getSectionIndex(pExam.attributes.sections[xx], "eExam.SpineGroup");
                            if (_s2 != -1)
                            {
                                for (var x = 0; x < _s2.length; x++)
                                {
                                    var SpineGroupArray = [];
                                    AssessmentGroup["SpineGroup"] = _s2.length;
                                    var _spGrp = [];
                                    _spGrp = pExam.attributes.sections[xx].attributes.sections[_s2[x]].attributes.elements;

                                    /////////eExam.13
                                    var _exam = [];
                                    var _val = [];
                                    var valObj = {};
                                    valObj.IsNull = true;

                                    _exam = getValue(_spGrp, "eExam.13");
                                    if (_exam.IsNull != true) {
                                        _val.push(_exam.ValueArray[0].val);
                                        valObj.IsNull = false;
                                    };
                                    valObj.vSet = _val.slice(0);
                                    SpineGroup["eExam.13"] = valObj;;
                                    delete valObj;

                                    /////////eExam.14
                                    var _exam = [];
                                    var _val = [];
                                    var valObj = {};
                                    valObj.IsNull = true;
                                    _exam = getValue(_spGrp, "eExam.14");
                                    if (_exam.IsNull == true) {
                                        if (_exam.HasPN == true) {
                                            _val.push("8801005");
                                            valObj.PN = true;
                                        }
                                    }
                                    else {
                                        for (var i = 0; i < _exam.ValueArray.length; i++) {
                                            if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) {
                                                _val.push(_exam.ValueArray[i].val);
                                                valObj.IsNull = false;
                                            }
                                        };
                                        _eExam.Value = arr1.slice(0);
                                    };
                                    valObj.vSet = _val.slice(0);
                                    SpineGroup["eExam.14"] = valObj;;
                                    delete valObj;

                                    SpineGroupArray.push(SpineGroup)
                                }
                            };
                            AssessmentArray.push(SpineGroupArray);

                            ////////////////////////ExtremityGroup ////////////////////
                            AssessmentGroup["ExtremityGroup"] = -1;
                            var ExtremityGroup = {};
                            _s3 = getSectionIndex(pExam.attributes.sections[xx], "eExam.ExtremityGroup");
                            if (_s3 != -1) {
                                for (var x = 0; x < _s3.length; x++) {
                                    var EGArray = [];
                                    AssessmentGroup["ExtremityGroup"] = _s3.length;
                                    var _ex2 = [];
                                    var _exGrp = [];
                                    _ex2 = pExam.attributes.sections[xx].attributes.sections[_s3[x]].attributes.elements;

                                    /////////eExam.15
                                    var _exam = [];
                                    var _val = [];
                                    var valObj = {};
                                    valObj.IsNull = true;
                                    var _ex1 = []
                                    _exam = getValue(_ex2, "eExam.15");
                                    if (_exam.IsNull != true) {
                                        _val.push(_exam.ValueArray[0].val);
                                        valObj.IsNull = false;
                                    };
                                    valObj.vSet = _val.slice(0);
                                    ExtremityGroup["eExam.15"] = valObj;;
                                    delete valObj;

                                    /////////eExam.16
                                    var _exam = [];
                                    var _val = [];
                                    var valObj = {};
                                    valObj.IsNull = true;

                                    _exam = getValue(_ex2, "eExam.16");
                                    if (_exam.IsNull == true) {
                                        if (_exam.HasPN == true) {
                                            _val.push("8801005");
                                            valObj.PN = true;
                                        }
                                    }
                                    else {
                                        for (var i = 0; i < _exam.ValueArray.length; i++) {
                                            if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) {
                                                _val.push(_exam.ValueArray[i].val);
                                                valObj.IsNull = false;
                                            }
                                        };
                                    };
                                    valObj.vSet = _val.slice(0);
                                    ExtremityGroup["eExam.16"] = valObj;;
                                    delete valObj;

                                    EGArray.push(ExtremityGroup)
                                }
                            };

                            AssessmentArray.push(EGArray);
                            AssessmentGroup["EyeGroup"] = -1;
                            /////////////////////////////////////////////EyeGroup
                            var EyeGArray = [];
                            var EyeGroup = {};
                            _s4 = getSectionIndex(pExam.attributes.sections[xx], "eExam.EyeGroup");
                            if (_s4 != -1) {
                                AssessmentGroup["_s4.length"] = -1;
                                for (var x = 0; x < _s4.length; x++) {
                                    var _ex3 = [];
                                    var _eyGrp = [];
                                    _ex3 = pExam.attributes.sections[xx].attributes.sections[_s4[x]].attributes.elements;
                                    console.log(_ex3)

                                    /////////eExam.17
                                    var _exam = [];
                                    var _val = [];
                                    var valObj = {};
                                    valObj.IsNull = true;

                                    _exam = getValue(_ex3, "eExam.17");
                                    if (_exam.IsNull != true) {
                                        _val.push(_exam.ValueArray[0].val);
                                        valObj.IsNull = false;
                                    };
                                    valObj.vSet = _val.slice(0);
                                    EyeGroup["eExam.17"] = valObj;;
                                    delete valObj;


                                    /////////eExam.18
                                    var _exam = [];
                                    var _val = [];
                                    var valObj = {};
                                    valObj.IsNull = true;

                                    _exam = getValue(_ex3, "eExam.18");
                                    if (_exam.IsNull == true) {
                                        if (_exam.HasPN == true) {
                                            _val.push("8801005");
                                            valObj.NV = true;
                                        }
                                    }
                                    else {
                                        for (var i = 0; i < _exam.ValueArray.length; i++) {
                                            if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) {
                                                _val.push(_exam.ValueArray[i].val);
                                                valObj.IsNull = false;
                                            }
                                        };
                                    };
                                    valObj.vSet = _val.slice(0);
                                    EyeGroup["eExam.18"] = valObj;;
                                    delete valObj;

                                    EyeGArray.push(EyeGroup)
                                }
                            };
                            AssessmentArray.push(EyeGArray);
                        };

                        /////////eExam.19
                        var _exam = [];
                        var _val = [] ;       
                        var valObj = {};
                        valObj.IsNull = true;

                        _exam = getValue(_assArr, "eExam.19");
                        if (_exam.IsNull == true) {
                            if (_exam.HasPN == true) {
                                _val.push( "8801005");
                                valObj.PN = true;
                            }
                        }
                        else {
                            for (var i = 0; i < _exam.ValueArray.length; i++) {
                                if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) {
                                    _val.push(_exam.ValueArray[i].val);
                                    valObj.IsNull = false;
                                }
                            };
                        };
                        valObj.vSet = _val.slice(0);
                        AssessmentGroup["eExam.19"]=valObj;;
                        delete valObj;


                        /////////eExam.20
                        var _exam = [];
                        var _val = [] ;       
                        var valObj = {};
                        valObj.IsNull = true;
                        _exam = getValue(_assArr, "eExam.20");
                        if (_exam.IsNull == true) {
                            if (_exam.HasPN == true) {
                                _val.push( "8801005");
                                valObj.PN = true;
                            }
                        }
                        else {
                            var arr2 = [];
                            for (var i = 0; i < _exam.ValueArray.length; i++) {
                                if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) {
                                    _val.push(_exam.ValueArray[i].val);
                                    valObj.IsNull = false;
                                }
                            };
                        };
                        valObj.vSet = _val.slice(0);
                        AssessmentGroup["eExam.20"]=valObj;;
                        delete valObj;
                    };
                    eExam
                    eExam.AssessmentGroup = AssessmentArray.slice(0);                                                                   
                };
            }
        };        
 
    };    
    */
    return eExam;
};
var seteInjury = function (TheCall) {
    /*
        var eInjury = new Object();
        if (pInjury.HasDataSet == false)
        {
            eInjury.IsValid = false;
        }
        else
        {
            eInjury.IsValid = true;
        }
        var _injury = new Object();
    
        if (pInjury.HasDataSet == true) 
        {        
            var elementList = "";
            elementList = pInjury.attributes.elements;
    
        };
        // console.log(elementList)
            
        //eInjury.01///////////////////
        var _injury =[];
        var _val = [] ;       
        var valObj = {};
        valObj.IsNull = true;
        if (eInjury.IsValid == true) 
        {
            _injury = getValue(elementList, "eInjury.01");
            if (_injury.IsNull == true) 
            {
                _val.push("7701003");
            }
            else 
            {
                var arr2 = [];
                for (var i = 0; i < _injury.ValueArray.length; i++)
                {
                    if ((_injury.ValueArray[i].HasValue == true) && (_val.indexOf(_injury.ValueArray[i].val) == -1))
                    {
                        _val.push(_injury.ValueArray[i].val);
                        valObj.IsNull = false;
                    }
                }
            }                
        }
        else
        {
            _val.push("7701001");
            valObj.NV = true;          
        };
                
        valObj.vSet = _val.slice(0);
        eInjury["eInjury.01"] = valObj;
        delete valObj;     
        
        //eInjury.02///////////////////
        var _injury =[];
        var _val = [] ;       
        var valObj = {};
        valObj.IsNull = true;
        if (eInjury.IsValid == true) //if have a transport, forgot the data, 
        {
            _injury = getValue(elementList, "eInjury.02");
            if (_injury.IsNull == true) 
            {
                if (isRequiredStateElement("eInjury.02")) 
                {
                    _val.push("7701003");
                    valObj.NV = true;          
                }    
                else 
                {
                    _val.push("7701005");
                    valObj.NV = true;          
                }
            }
            else 
            {
        
                for (var i = 0; i < _injury.ValueArray.length; i++)
                {
                    if ((_injury.ValueArray[i].HasValue == true) && (_val.indexOf(_injury.ValueArray[i].val) == -1))
                    {
                        _val.push(_injury.ValueArray[i].val)
                        TheCall.XML.writeElementString("eInjury.02", _val);
                        arr2.push(setV2("eInjury.02", _val));
                    }
                }
            }
        }
        else
        {
            _val.push("7701001");
            valObj.NV = true;          
        };
        valObj.vSet = _val.slice(0);
        eInjury["eInjury.02"] = valObj;
        delete valObj;     
    
        
            
        //eInjury.03///////////////////
        var _injury =[];
        var _val = [] ;       
        var valObj = {};
        valObj.IsNull = true;
    
        if (eInjury.IsValid == true) //if have a transport, forgot the data, 
        {
            if (_injury.IsNull == true) 
            {
                if (isRequiredStateElement("eInjury.03")) 
                {
                    _val.push("7701003");
                    valObj.NV = true;
                }
            }
            else 
            {
                for (var i = 0; i < _injury.ValueArray.length; i++)
                {
                    if ((_injury.ValueArray[i].HasValue == true) && (_val.indexOf(_injury.ValueArray[i].val) == -1))
                    {
                        _val.push( _injury.ValueArray[i].val);
                        valObj.IsNull = false;
                    }
                };
                eInjury.HasInjury = true;
            }
                
        }
        else
        {
            _val.push("7701001");
            valObj.NV = true;          
                
        };
        valObj.vSet = _val.slice(0);
        eInjury["eInjury.03"] = valObj;
        delete valObj;     
    
        
        //eInjury.04///////////////////
        var _injury =[];
        var _val = [] ;       
        var valObj = {};
        valObj.IsNull = true;
    
        _injury = getValue(elementList, "eInjury.04");
        if (eInjury.IsValid == true) //if have a transport, forgot the data, 
        {
            if(_injury.IsNull == true)
            {
                if (_injury.HasPN == true) 
                {
                    {
                        _val.push("8801005");
                        valObj.PN = true;             
                    }
                }
                else {
                    _val.push("7701003");
                    valObj.PN = true;
                }
            }
            else {
                for (var i = 0; i < _injury.ValueArray.length; i++)
                {
                    if ((_injury.ValueArray[i].HasValue == true) && (_val.indexOf(_injury.ValueArray[i].val) == -1))
                    {
                        _val.push( _injury.ValueArray[i].val);
                        valObj.IsNull = false;
                    }
                };
                    
            };
         
        }
        else
        {
            _val.push("7701001");
            valObj.NV = true;
        };        
        
        valObj.vSet = _val.slice(0);
        eInjury["eInjury.04"] = valObj;
        delete valObj;     
        ///eInjury.05////////////
    
        var _injury =[];
        var _val = [] ;       
        var valObj = {};
        valObj.IsNull = true;
            
        if (eInjury.IsValid == true) //if have a transport, forgot the data, 
        {
            _injury = getValue(elementList, "eInjury.05");
            if (_injury.IsNull != true)
            {
                
                if ((_val[0] >= 1) && (_val[0] <= 12))
                {
                    eInjury.HasErrors = true;
                    eInjury.Error = "Validation Error:  Main Area of Impact must be between 1 and 12. "
                }
                else 
                {                
                    _val.push(_injury.ValueArray[0].val);
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                    eInjury["eInjury.05"] = valObj;
                    delete valObj;     
                }
            }
        };
    
        
        //eInjury.06///////////
        var _injury =[];
        var _val = [] ;       
        var valObj = {};
        valObj.IsNull = true;
        if (eInjury.IsValid == true)
        {
            _injury = getValue(elementList, "eInjury.06");
            if (_injury.IsNull != true) 
            {
                _val.push(_injury.ValueArray[0].val);
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
                eInjury["eInjury.06"] = valObj;
                delete valObj;     
            }
        };
    
                
    
        //eInjury.07/////////
        var _injury =[];
        var _val = [] ;       
        var valObj = {};
        valObj.IsNull = true;
    
        _injury = getValue(elementList, "eInjury.07");         
        if (eInjury.IsValid == true)
        {
            if (_injury.IsNull == true) 
            {
                if (isRequiredStateElement("eInjury.07")) 
                {
                    _val.push("7701003");
                    valObj.NV = true;             
                }
                else
                {
                    _val.push("7701005");
                    valObj.NV = true;             
                }
                 
            }
            else 
            {
                for (var i = 0; i < _injury.ValueArray.length; i++) {
                    if ((_injury.ValueArray[i].HasValue == true) && (_val.indexOf(_injury.ValueArray[i].val) == -1)) {
                        _val = _injury.ValueArray[i].val
                        valObj.IsNull = false;
                    }
                };
                valObj.vSet = _val.slice(0);
                eInjury["eInjury.07"] = valObj;
                delete valObj;     
            }
        }
        else 
        {
            _val.push("7701001");
            valObj.NV = true;             
        };
                
                 
    
        //eInjury.08//////////
        var _injury =[];
        var _val = [] ;       
        var valObj = {};
        valObj.IsNull = true;
    
        _injury = getValue(elementList, "eInjury.08");
        if (eInjury.IsValid == true)
        {
            if (_injury.IsNull != true) 
            {        
                for (var i = 0; i < _injury.ValueArray.length; i++) 
                {
                    if ((_injury.ValueArray[i].HasValue == true) && (_val.indexOf(_injury.ValueArray[i].val) == -1)) 
                    {
                        _val.push( _injury.ValueArray[i].val);
                        valObj.IsNull = false;
                    }
                };
                eInjury.HasInjury = true;
            }                      
            valObj.vSet = _val.slice(0);
            eInjury["eInjury.08"] = valObj;
            delete valObj;     
        };
                
           
    
        
        //eInjury.09/////////////
        var _injury =[];
        var _val = [] ;       
        var valObj = {};
        valObj.IsNull = true;        
        if (eInjury.IsValid == true)
        {
            _injury = getValue(elementList, "eInjury.09");
            eInjury["eInjury.09"] = _val[0];
            if (_injury.IsNull != true)            
            {
                eInjury.HasInjury = true;
                _val.push(_injury.ValueArray[0].val);
                valObj.IsNull = false;             
            };
            valObj.vSet = _val.slice(0);
            eInjury["eInjury.09"] = valObj;
            delete valObj;     
        };
            
    
        //eInjury.10///////////////
        var _injury =[];
        var _val = [] ;       
        var valObj = {};
        valObj.IsNull = true;        
        if (eInjury.IsValid == true)
        {
            _injury = getValue(elementList, "eInjury.10");
            if (_injury.IsNull != true) 
            {            
                for (var i = 0; i < _injury.ValueArray.length; i++)
                {
                    if ((_injury.ValueArray[i].HasValue == true) && (_val.indexOf(_injury.ValueArray[i].val) == -1))
                    {
                        _val.push(_injury.ValueArray[i].val);
                        valObj.IsNull = false;
                    }
                };
                eInjury.HasInjury = true;
            };
            valObj.vSet = _val.slice(0);
            eInjury["eInjury.10"] = valObj;
            delete valObj;     
        };
    
    
        ////////////////////////////////////////
        ////////////////////////////////////////
    
        ///////////////////////////////////////////            
        if(typeof pInjury.attributes.sections !='undefined')
        {            
            if (eInjury.IsValid == true)
            {
                var _cCG = -1;  //if no sections, NA values                        
                _cCG = getSectionIndex(pInjury.attributes.sections, "eInjury.CollisionGroup");                       
                if (_cCG  != -1)
                {        
                    var _eCCG = [];
                    var _eCCG = pVitals.attributes.sections[_cCG].attributes.elements;
    
                
                    //eInjury.11///////
                    var _injury =[];
                    var _val = [] ;       
                    var valObj = {};
                    valObj.IsNull = true;
                    _injury = getValue(_eCCG , "eInjury.11");
                    if (_injury.IsNull != true) {
                        eInjury.HasInjury = true;
                        _val.push(_injury.ValueArray[0].val);
                        valObj.IsNull = false;
                    };
                    
                    valObj.vSet = _val.slice(0);
                    eInjury["eInjury.11"] = valObj;
                    delete valObj;     
                //////////////////////////////
    
                //alert("PhoneNumber")
    
                //eInjury.12///////////
                var _injury =[];
                var _val = [] ;       
                var valObj = {};
                valObj.IsNull = true;
                _injury = getValue(_eCCG, "eInjury.12");
                if (_injury.IsNull == true)
                {
                    eInjury.HasInjury = true;                
                    _val.push(_injury.ValueArray[0].val);
                    valObj.IsNull = false;
                };
                valObj.vSet = _val.slice(0);
                eInjury["eInjury.12"] = valObj;
                delete valObj;     
                    
                //eInjury.13/////////////
                var _injury =[];
                var _val = [] ;       
                var valObj = {};
                valObj.IsNull = true;
                _injury = getValue(_eCCG, "eInjury.13");
                if (_injury.IsNull != true)
                {
                    for (var i = 0; i <= _injury.ValueArray.length - 1; i++) 
                    {
                        _val.push(_injury.ValueArray[i].val);
                        valObj.IsNull = false;
                    }
                    eInjury.HasInjury = true;
                };
                valObj.vSet = _val.slice(0);
                eInjury["eInjury.13"] = valObj;
                delete valObj;     
                
                //eInjury.14///////////////
                var _injury =[];
                var _val = [] ;       
                var valObj = {};
                valObj.IsNull = true;            
                _injury = getValue(_eCCG, "eInjury.14");
                if (_injury.IsNull != true) {
                    eInjury.HasInjury = true;
                    _val.push(_injury.ValueArray[0].val);
                    valObj.IsNull = false;                
                };
                valObj.vSet = _val.slice(0);
                eInjury["eInjury.14"] = valObj;
                delete valObj;     
    
                //eInjury.15//////////////  
                var _injury =[];
                var _val = [] ;       
                var valObj = {};
                valObj.IsNull = true;            
                _injury = getValue(_eCCG, "eInjury.15");
                if (_injury.IsNull != true) {
                    eInjury.HasInjury = true;
                    _val.push(_injury.ValueArray[0].val);
                    valObj.IsNull = false;
                }
            
                valObj.vSet = _val.slice(0);
                eInjury["eInjury.15"] = valObj;
                delete valObj;     
    
                //eInjury.16//////////////
                var _injury =[];
                var _val = [] ;       
                var valObj = {};
                valObj.IsNull = true;            
                _injury = getValue(_eCCG, "eInjury.16");
                if (_injury.IsNull != true) {
                    eInjury.HasInjury = true;
                    _val.push(_injury.ValueArray[0].val);
                    valObj.IsNull = false;
                }
       
                valObj.vSet = _val.slice(0);
                eInjury["eInjury.16"] = valObj;
                delete valObj;     
    
                //eInjury.17//////////////
                
                var _injury =[];
                var _val = [] ;       
                var valObj = {};
                valObj.IsNull = true;
                
                _injury = getValue(_eCGP, "eInjury.17");
                if (_injury.IsNull != true) 
                {
                    eInjury.HasInjury = true;
                    _val.push(_injury.ValueArray[0].val);
                    valObj.IsNull = false;
                };
                valObj.vSet = _val.slice(0);
                eInjury["eInjury.17"] = valObj;
                delete valObj;     
    
            //eInjury.18//////////////
            var _injury =[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;            
            _injury = getValue(_eCGP, "eInjury.18");
            if (_injury.IsNull != true) 
            {
                eInjury.HasInjury = true;
                _val.push(_injury.ValueArray[0].val);
                valObj.IsNull = false;
            };
            valObj.vSet = _val.slice(0);
            eInjury["eInjury.18"] = valObj;
            delete valObj;     
    
            //eInjury.19//////////////
            var _injury =[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;
                
            _injury = getValue(_eCGP, "eInjury.19");
            {
                eInjury.HasInjury = true;
                _val.push(_injury.ValueArray[0].val);
                valObj.IsNull = false;
                    
            };
            valObj.vSet = _val.slice(0);
            eInjury["eInjury.19"] = valObj;
            delete valObj;     
    
            //eInjury.20//////////////
            var _injury =[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;            
            _injury = getValue(_eCGP, "eInjury.20");
            if (_injury.IsNull != true) {
                eInjury.HasInjury = true;
                _val.push(_injury.ValueArray[0].val);
                valObj.IsNull = false;
            };
            valObj.vSet = _val.slice(0);
            eInjury["eInjury.20"] = valObj;
            delete valObj;     
    
            //eInjury.21//////////////
            var _injury =[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;
            _injury = getValue(_eCGP, "eInjury.21");
            if (_injury.IsNull != true) {
                eInjury.HasInjury = true;
                _val.push(_injury.ValueArray[0].val);
                valObj.IsNull = false;
            };
    
            valObj.vSet = _val.slice(0);
            eInjury["eInjury.21"] = valObj;
            delete valObj;     
    
            //eInjury.22//////////////
            var _injury =[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;            
            _injury = getValue(_eCGP, "eInjury.22");
            if (_injury.IsNull != true) {        
                for (var i = 0; i <= _injury.ValueArray.length - 1; i++) {
                    valObj.IsNull = false;
                    _val.push(_injury.ValueArray[i].val)
                };
                _eInjury.HasInjury = true;
            };
    
            valObj.vSet = _val.slice(0);
            eInjury["eInjury.22"] = valObj;
            delete valObj;     
    
            //eInjury.23///////////
            var _injury =[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;
            _injury = getValue(_eCGP, "eInjury.23");
            if (_injury.IsNull != true) {
                eInjury.HasInjury = true;
                _val.push(_injury.ValueArray[0].val);
                valObj.IsNull = false;                
            };
            valObj.vSet = _val.slice(0);
            eInjury["eInjury.23"] = valObj;
            delete valObj;     
    
            //eInjury.24/////////////
            var _injury =[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;            
            if (eInjury.IsValid == true) {
                _injury = getValue(_eCGP, "eInjury.24");
                if (_injury.IsNull != true) {
                    eInjury.HasInjury = true;
                    _val.push(_injury.ValueArray[0].val);
                    valObj.IsNull = false;
                }
            };
            valObj.vSet = _val.slice(0);
            eInjury["eInjury.24"] = valObj;
            delete valObj;     
    
            //eInjury.25////////
            var _injury =[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;            
        
            _injury = getValue(_eCCG, "eInjury.25");
            if (_injury.IsNull != true) 
            {
                eInjury.HasInjury = true;
                _val = _einjury.ValueArray[0].val;
                valObj.IsNull = false;
            };
            valObj.vSet = _val.slice(0);
            eInjury["eInjury.25"] = valObj;
            delete valObj;     
        
                    ///////////////////////////////////////////////                
                    ///////////////////////////////////////////            
            if(typeof pInjury.attributes.sections !='undefined')
            {            
                if (eInjury.IsValid == true)
                {
                    var _cSG = -1;  //if no sections, NA values                        
                    _cSG = getSectionIndex(pInjury.attributes.sections, "eInjury.SeatGroup");                       
                 
                    if (_cSG!= -1)
                    {        
                        var _eSG = [];
                        var _eSG = pVitals.attributes.sections[_cSG].attributes.elements;
    
                        var SeatGroupArray = new Array();
                        
                        for (var x = 0; x <= _sectionIndex3.length-1; x++)
                        {
                            var _elementList = [];
                            _elementList = pInjury.attributes.sections[_sectionIndex1].attributes.sections[_sectionIndex3[x]].attributes.elements;                        
                            var SG= new Object();
    
                            //eInjury.26////////     
                            var _injury =[];
                            var _val = [] ;       
                            var valObj = {};
                            valObj.IsNull = true;
                            _injury = getValue(_elementList, "eInjury.26");
                            if (_injury.IsNull != true)
                            {
                                _val.push(_injury.ValueArray[0].val);
                                valObj.IsNull = false;
                            };
                            valObj.vSet = _val.slice(0);
                            SG["eInjury.26"] = valObj;
                            delete valObj;     
                            
                            
                            //eInjury.27////////
                            var _injury =[];
                            var _val = [] ;       
                            var valObj = {};
                            valObj.IsNull = true;
                            _injury = getValue(_elementList, "eInjury.27");
                            if (_injury.IsNull != true)                    
                            {
                                _val.push(_injury.ValueArray[0].val);
                                valObj.IsNull = false;
                            };
                            valObj.vSet = _val.slice(0);
                            SG["eInjury.27"] = valObj;
                            delete valObj;     
    
                            //eInjury.28////////
                            var _injury =[];
                            var _val = [] ;       
                            var valObj = {};
                            valObj.IsNull = true;
    
                            _injury = getValue(_elementList, "eInjury.28");
                            if (_injury.IsNull != true) {
                                eInjury.HasInjury = true;
                                _val.push(_injury.ValueArray[0].val);
                                valObj.IsNull = false;
                            };
                            valObj.vSet = _val.slice(0);
                            SG["eInjury.28"] = valObj;
                            delete valObj;     
    
    
                            //eInjury.29////////
                            var _injury =[];
                            var _val = [] ;       
                            var valObj = {};
                            valObj.IsNull = true;
    
                            _injury = getValue(_elementList, "eInjury.29");
                            if (_injury.IsNull != true) {                       
                                eInjury.HasInjury = true;
                                _val.push(_injury.ValueArray[0].val);
                                valObj.IsNull = false;
                            };
                            valObj.vSet = _val.slice(0);
                            SG["eInjury.29"] = valObj;
                            delete valObj;     
    
    
                            SeatGroupArray.push(SG)
                }
        }
    
        eInjury.SeatGroup = SeatGroupArray.slice(0)
      */
    return eInjury;
};
var seteProcedures = function (TheCall) {
    /*
     var pProcedures = new Object();
     var eProceduresGroup=new Object();
     eProceduresGroup.IsValid = true;
     ////////Check for cancelled calls, Standby, non-patient
     if ((pProcedures.HasDataSet == true) && (TheCall.HasPatient == true) && (TheCall.HasTreatment == true) && (TheCall.IsStandBy == false)) 
     {
         eProceduresGroup.IsValid = true;
     };
 
     if(typeof pProcedures.attributes.sections !='undefined')
     {
         var _sectionIndex = [];
         _sectionIndex = getSectionIndex(pProcedures, "eProcedures.ProcedureGroup")        
         var ProceduresGroup = [];
         for (var xx = 0; xx < _sectionIndex.length; xx++) 
         {
             var eProcedures = new Object();
             
             var elementList = [];
             var elementList = pProcedures.attributes.sections[xx].attributes.elements;
             console.log(elementList)
     
             //eProcedures.03////////////
             eProcedure["ProcedureProvided"]=false
             var _procedures= [];
             var _val = [];
             var valObj = {};
             valObj.IsNull = true;
             if(eProceduresGroup.IsValid == true)
             {
                 _procedures = getValue(elementList, "eProcedures.03");
                 if (_procedures.IsNull == true)
                 {
                     if (_procedures.HasPN == true) {
                         if (_procedures.pn == "ContraindicationNoted") {
                             valObj.PN = true;   
                             _val.push("8801001");
                         }
                         else if (_procedures.pn == "DeniedByOrder") {                    
                             _val.push("8801003");
                             valObj.PN = true;
                         }
                         else if (_procedures.pn == "Refused") {                    
                             _val.push("8801019");
                             valObj.PN = true;
 
                         }
                         else if (_procedures.pn == "UnabletoComplete") {
                             _val.push("8801023");
                             valObj.PN = true;                }
                     };
 
                     if (_procedures.IsNull == true)
                     {
                         _val.push("7701003")
                         valObj.NV = true;
                     }
                 }
                 else
                 {
                     _val.push(_procedures.ValueArray[0].val);
                     valObj.IsNull = false;
                     eProcedure["ProcedureProvided"]=true;
                 }
             }
             else
             {
                 _val.push("7701001")
                 valObj.NV = true;
             };
             valObj.vSet = _val.slice(0);
             eProcedures["eProcedures.01"] = valObj;
             delete valObj;     
 
             //eProcedures.01////////////
             var _procedures= [];
             var _val = [];
             var valObj = {};
             valObj.IsNull = true;
             if(eProcedure["ProcedureProvided"]==true)
             {
                 _procedures = getValue(elementList, "eProcedures.01");
                 if (eProceduresGroup.IsValid == true) 
                 {
                     if (_procedures.IsNull == true) 
                     {
                         _val.push("7701003");
                         valObj.NV = true;            
                     }
 
                     else 
                     {
                         _val.push(_procedures.ValueArray[0].val);
                         valObj.IsNull = false;
                     }
                 }
             }
             else 
             {
                 _val.push("7701001");
                 valObj.NV = true;            
             };
             valObj.vSet = _val.slice(0);
             eProcedures["eProcedures.01"] = valObj;
             delete valObj;     
 
 
             //eProcedures.02////////////
             var _procedures= [];
             var _val = [];
             var valObj = {};
             valObj.IsNull = true;
             if(eProcedure["ProcedureProvided"]==true)
             {
                 _procedures = getValue(elementList, "eProcedures.02");
                 if (eProceduresGroup.IsValid == true) 
                 {
                     if (_procedures.IsNull == true) 
                     {
                         _val.push("7701003");
                         valObj.NV = true;            
                     }
                     else 
                     {
                         _val.push(_procedures.ValueArray[0].val);
                         valObj.IsNull = false;
                     }
                 }
             }
             else 
             {
                 _val.push("7701001");
                 valObj.NV = true;                    
             };
             valObj.vSet = _val.slice(0);
             eProcedures["eProcedures.02"] = valObj;
             delete valObj;     
 
 
             //eProcedures.04////////////
             var _procedures= [];
             var _val = [];
             var valObj = {};
             valObj.IsNull = true;
             if(eProcedure["ProcedureProvided"]==true)
             {
 
                 _procedures = getValue(elementList, "eProcedures.04");
                 if (eProceduresGroup.IsValid == true) 
                 {
                     if (_procedures.IsNull != true) 
                     {
                         _val.push(_procedures.ValueArray[0].val);
                         valObj.IsNull = false;
                     }
                 };
                 valObj.vSet = _val.slice(0);
                 eProcedures["eProcedures.04"] = valObj;
                 delete valObj;     
 
                 //eProcedures.05////////////
                 var _procedures= [];
                 var _val = [];
                 var valObj = {};
                 valObj.IsNull = true;
                 if(eProcedure["ProcedureProvided"]==true)
                 {
                     _procedures = getValue(elementList, "eProcedures.05");
                     if (_procedures.IsNull == true) 
                     {
                         _val.push("7701003");
                         valObj.NV = true;                            
                     }
                     else {
                         _val.push(_procedures.ValueArray[0].val);
                         valObj.IsNull = false;
                     }
                     
                 }
                 else {
                     _val.push("7701001");
                     valObj.NV = true;                        
                 };
                 valObj.vSet = _val.slice(0);
                 eProcedures["eProcedures.05"] = valObj;
                 delete valObj;     
 
                 //eProcedures.06////////////
                 var _procedures= [];
                 var _val = [];
                 var valObj = {};
                 valObj.IsNull = true;
                 if(eProcedure["ProcedureProvided"]==true)
                 {
                     _procedures = getValue(elementList, "eProcedures.06");
                     if (_procedures.IsNull == true) 
                     {
                         _val.push("7701003")
                     }
                     else 
                     {
                         _val.push(_procedures.ValueArray[0].val);
                         valObj.IsNull = false;
                     }
                 }
                 else 
                 {
                     _val.push("7701001");
                     valObj.NV = true;            
                 };
 
                 valObj.vSet = _val.slice(0);
                 eProcedures["eProcedures.06"] = valObj;
                 delete valObj;     
 
                 //eProcedures.07////////////
                 var _procedures= [];
                 var _val = [];
                 var valObj = {};
                 valObj.IsNull = true;
                 if(eProcedure["ProcedureProvided"]==true)
                 {
 
                     _procedures = getValue(elementList, "eProcedures.07");
                     if (_procedures.IsNull == true) 
                     {
                         _val.push("7701003");
                         valObj.NV = true;                            
                     }
                     else 
                     {
                         for (var i = 0; i < _procedures.ValueArray.length; i++) 
                         {
                             if ((_procedures.ValueArray[i].HasValue == true) && (_val.indexOf(_procedures.ValueArray[i].val) == -1)) 
                             {
                                 _val = _procedures.ValueArray[i].val
                                 valObj.IsNull = false;
                             }
                         };
                     }
                 }
                 else 
                 {
                     _val.push("7701001");
                     valObj.NV = true;                        
                 };
                 valObj.vSet = _val.slice(0);
                 eProcedures["eProcedures.07"] = valObj;
                 delete valObj;     
 
                 //eProcedures.08////////////
                 var _procedures= [];
                 var _val = [];
                 var valObj = {};
                 valObj.IsNull = true;
                 if(eProcedure["ProcedureProvided"]==true)
                 {
                     _procedures = getValue(elementList, "eProcedures.08");                    
                     if (_procedures.IsNull == true) 
                     {
                         _val.push("7701003");
                         valObj.NV = true;                            
                     }
                     else 
                     {
                         _val.push(_procedures.ValueArray[0].val);
                         valObj.IsNull = false;
                     }
                 }
                 else 
                 {
                     _val.push("7701001");
                     valObj.NV = true;                        
                 };
                 valObj.vSet = _val.slice(0);
                 eProcedures["eProcedures.08"] = valObj;
                 delete valObj;     
 
                 //eProcedures.09////////////
                 var _procedures= [];
                 var _val = [];
                 var valObj = {};
                 valObj.IsNull = true;
                 if(eProcedure["ProcedureProvided"]==true)
                 {
                     _procedures = getValue(elementList, "eProcedures.09");                    
                     if (_procedures.IsNull == true) 
                     {
                         if (isRequiredStateElement("eProcedures.09")) 
                         {
                             _val.push("7701003");
                             valObj.NV = true;            
                         }
                         else 
                         {
                             _val.push("7701005");
                             valObj.NV = true;                                
                         }
                     }
                     else 
                     {
                         _val.push(_procedures.ValueArray[0].val);
                         valObj.IsNull = false;
                     }
                 }
                 else 
                 {
                     _val.push("7701001");
                     valObj.NV = true;                        
                 };
                 valObj.vSet = _val.slice(0);
                 eProcedures["eProcedures.09"] = valObj;
                 delete valObj;     
 
 
                 //eProcedures.10////////////
                 var _procedures= [];
                 var _val = [];
                 var valObj = {};
                 valObj.IsNull = true;
                 if(eProcedure["ProcedureProvided"]==true)
                 {                                               
                     _procedures = getValue(elementList, "eProcedures.10");
                     if (_procedures.IsNull == true) {
                         _val.push("7701003");
                         valObj.NV = true;            
                     }
                     else {
                         _val.push(_procedures.ValueArray[0].val);
                         valObj.IsNull = false;
                     }
                 }
                 else 
                 {
                     _val.push("7701001");
                     valObj.NV = true;                        
                 };
                 valObj.vSet = _val.slice(0);
                 eProcedures["eProcedures.10"] = valObj;
                 delete valObj;     
 
                 //eProcedures.11////////////
                 var _procedures= [];
                 var _val = [];
                 var valObj = {};
                 valObj.IsNull = true;
                 if(eProcedure["ProcedureProvided"]==true)
                 {
                     _procedures = getValue(elementList, "eProcedures.11");
                     if (_procedures.IsNull != true) {
                         _val.push(_procedures.ValueArray[0].val);
                         valObj.IsNull = false;
                     }
                 };
                 valObj.vSet = _val.slice(0);
                 eProcedures["eProcedures.11"] = valObj;
                 delete valObj;     
 
                 //eProcedures.12////////////
                 var _procedures= [];
                 var _val = [];
                 var valObj = {};
                 valObj.IsNull = true;
                 if(eProcedure["ProcedureProvided"]==true)
                 {
                     _procedures = getValue(elementList, "eProcedures.12");
                     if (_procedures.IsNull != true) 
                     {
                         _val.push(_procedures.ValueArray[0].val);
                         valObj.IsNull = false;
                     }
                 }
                 else 
                 {
                     _val.push("7701001");
                     valObj.NV = true;            
                 };
                 valObj.vSet = _val.slice(0);
                 eProcedures["eProcedures.12"] = valObj;
                 delete valObj;     
 
                 //eProcedures.13////////////
                 var _procedures= [];
                 var _val = [];
                 var valObj = {};
                 valObj.IsNull = true;
                 if(eProcedure["ProcedureProvided"]==true)
                 {
 
                     _procedures = getValue(elementList, "eProcedures.13");
                     if (eProceduresGroup.IsValid == true) 
                     {
                         if (_procedures.IsNull == true) 
                         {
                             if (isRequiredStateElement("eProcedures.13")) 
                             {
                                 _val.push("7701003");
                                 valObj.NV = true;                                    
                             }
                             else {
                                 _val.push("7701005");
                                 valObj.NV = true;                                    
                             }
                         }
                         else {
                             _val.push(_procedures.ValueArray[0].val);
                             valObj.IsNull = false;
                         }
                     }
                     else {
                         _val.push("7701001");
                         valObj.NV = true;                            
                     };
 
                     valObj.vSet = _val.slice(0);
                     eProcedures["eProcedures.13"] = valObj;
                     delete valObj;                 
                 };
                 ProceduresGroup.push(eProcedures);
             };
     eProcedures.ProceduresGroup=ProceduresGroup.slice(0)
     console.log(eProcedures)
     return eProcedures
     */
};
var seteMedication = function (TheCall) {
    /*
    var pMedication = new Object();
    var eMedicationGroup=new Object();
    eMedicationGroup.IsValid = false;
////////Check for cancelled calls, Standby, non-patient
    if ((pMedications.HasDataSet == true) && (TheCall.HasPatient == true) && (TheCall.HasTreatment == true) && (TheCall.IsStandBy == false)) 
    {
        pMedication=TheCall.pMedications;
        MedicationGroup.IsValid = true;
    };

    if(typeof pMedications.attributes.sections !='undefined')
    {
        var _sectionIndex = [];
        _sectionIndex = getSectionIndex(pMedications, "eMedications.MedicationGroup")        
        var MedicationsGroup = [];

        for (var xx = 0; xx < _sectionIndex.length; xx++) 
        {
            var eMedications = new Object();
            eMedication["MedsAdministered"]=false;
            var _eL = pMedications.attributes.sections[_sectionIndex[xx]].attributes.elements;
            console.log(_eL)

            //eMedications.03////////
            var _meds= [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            if(MedicationGroup.IsValid == true)
            {
                _meds = getValue(elementList, "eMedications.03");
                if (_val == null) 
                {
                    if (_eMeds.HasPN == true) 
                    {
                        if (_eMeds.pn == "ContraindicationNoted") 
                        {
                            _val.push("8801001");
                            valObj.PN = true;            
                        }
                        else if (_eMeds.pn == "DeniedByOrder") 
                        {
                            _val.push("8801001");
                            valObj.PN = true;            
                        }
                        else if (_eMeds.pn == "Refused") 
                        {
                            _val.push("8801019");
                            valObj.PN = true;            
                        }
                        else if (_eMeds.pn == "UnabletoComplete") 
                        {
                            _val.push("8801023");
                            valObj.PN = true;            
                        }
                    }
                    else 
                    {
                        if (isRequiredStateElement("eMedications.03")) {
                            _val.push("7701003");
                            valObj.NV = true;            
                        }
                    }
                }
                else {
                    _val.push( _meds.ValueArray[0].val);
                    valObj.IsNull = false;
                    eMedication["MedsAdministered"]=true;
                }
            }
            else {
                _val.push("7701001")
                valObj.NV = true;            
            };
            valObj.vSet = _val.slice(0);
            eMedication["eMedication.03"] = valObj;
            delete valObj;

            //eMedications.01////////
            var _procedures= [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            if(eMedication["MedsAdministered"]==true)
            {
                _meds = getValue(elementList, "eMedications.01");
                if (_meds.IsNull == true) {
                    _val.push("7701003");
                    valObj.NV = true;            
                }
                else {
                    _val.push( _meds.ValueArray[0].val);
                    valObj.IsNull = false;
                }
            }        
            else 
            {
                _val.push("7701001");
                valObj.NV = true;            
            };
            valObj.vSet = _val.slice(0);
            eMedication["eMedication.01"] = valObj;
            delete valObj;


            //eMedications.02////////
            var _procedures= [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            __meds = getValue(elementList, "eMedications.02");
            if(eMedication["MedsAdministered"]==true)        
            {
                if (_val == null) 
                {
                    _val.push("7701003");
                    valObj.NV = true;            
                }
                else {
                    _val.push( _meds.ValueArray[0].val);
                    valObj.IsNull = false;
                }
            }
            else {
                _val.push("7701001");
                valObj.NV = true;                        
            };
            valObj.vSet = _val.slice(0);
            eMedication["eMedication.02"] = valObj;
            delete valObj;

            //eMedication.04////////
            var _procedures= [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            if(eMedication["MedsAdministered"]==true)
            {
                _meds = getValue(elementList, "eMedications.04");
                if (_meds.IsNull == true) 
                {
                    if (isRequiredStateElement("eMedications.04")) 
                    {
                        eMedications.HasErrors = true;
                        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eMedications.04", Description: "Validation Error: Medication Administered Route Required. " })
                    }
                    else {
                        _val.push( _meds.ValueArray[0].val);
                        valObj.IsNull = false;
                    }
                }
            };
            valObj.vSet = _val.slice(0);
            eMedication["eMedication.01"] = valObj;
            delete valObj;
            //////////////////////////////////////////////
            //////////////////////////////////////////////
            _s1 = getSectionIndex(pExam.attributes.sections[xx], "eMedications.DosageGroup");
            if (_s1 != -1) {

                //eMedication.05/////////////
                var _procedures= [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                if(eMedication["MedsAdministered"]==true)
                {
                    _meds = getValue(elementList, "eMedications.05");
                    if (_meds.IsNull == true) {
                        _val.push("7701003");
                        valObj.NV = true;                                }
                    else {
                        _val.push( _meds.ValueArray[0].val);
                        valObj.IsNull = false;
                    }
                }
                else 
                {
                    _val.push("7701001");
                    valObj.NV = true;                            
                };
                valObj.vSet = _val.slice(0);
                eMedication["eMedication.05"] = valObj;
                delete valObj;

                //eMedication.06//////////////
                var _procedures= [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                if(eMedication["MedsAdministered"]==true)
                {
                    _meds = getValue(elementList, "eMedications.06");                
                    if (_meds.IsNull == true) {
                        _val.push("7701003");
                        valObj.NV = true;                                
                    }
                    else {
                        _val.push( _meds.ValueArray[0].val);
                        valObj.IsNull = false;
                    }
                }
                else {
                    _val.push("7701001");
                    valObj.NV = true;            
                };
                valObj.vSet = _val.slice(0);
                eMedication["eMedication.06"] = valObj;
                delete valObj;
            }
        
            //eMedications.07/////////////////
            var _procedures= [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            if(eMedication["MedsAdministered"]==true)
            {
                _meds = getValue(elementList, "eMedications.07");
                if (_meds.IsNull == true) {
                    _val.push("7701003");
                    valObj.NV = true;            
                }
                else {
                    _val.push( _meds.ValueArray[0].val);
                    valObj.IsNull = false;
                }
            }
            else 
            {
                _val.push("7701001");
                valObj.NV = true;            
            };
            valObj.vSet = _val.slice(0);
            eMedication["eMedication.07"] = valObj;
            delete valObj;

            //eMedications.08////////////
            var _procedures= [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            if(eMedication["MedsAdministered"]==true)
            {
                _meds = getValue(elementList, "eMedications.08");
                {
                    if (_meds.IsNull == true) 
                    {
                        _val.push("7701003");
                        valObj.NV = true;            
                    }
                    else 
                    {            
                        for (var i = 0; i < _meds.ValueArray.length; i++) 
                        {
                            if ((_meds.ValueArray[i].HasValue == true) && (_val.indexOf(_meds.ValueArray[i].val) == -1)) 
                            {
                                _val.push(_meds.ValueArray[i].val);
                                valObj.IsNull = false;
                            }
                        }
                    }
                }
            }
            else 
            {
                _val.push("7701001");
                valObj.NV = true;            
            };

            valObj.vSet = _val.slice(0);
            eMedication["eMedication.08"] = valObj;
            delete valObj;

            //eMedications.09//////////////
            var _procedures= [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            if(eMedication["MedsAdministered"]==true)
            {
                _meds = getValue(elementList, "eMedications.09");
                if (_meds.IsNull == true) 
                {
                    if (isRequiredStateElement("eMedications.09")) 
                    {
                        _val.push("7701003");
                        valObj.NV = true;                                
                    }
                    else {
                        _val.push("7701005");
                        valObj.NV = true;                                
                    }
                }
                else {
                    _val.push( _meds.ValueArray[0].val);
                    valObj.IsNull = false;
                }
            }
            else 
            {
                _val.push("7701001");
                valObj.NV = true;                      
            };
            valObj.vSet = _val.slice(0);
            eMedication["eMedication.09"] = valObj;
            delete valObj;

            //eMedications.10////////////
            
            var _procedures= [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            if(eMedication["MedsAdministered"]==true)
            {
                _meds = getValue(elementList, "eMedications.10");            
                if (_meds.IsNull == true) 
                {
                    _val.push("7701003")
                    valObj.NV = true;            

                }
                else {
                    _val.push( _meds.ValueArray[0].val);
                    valObj.IsNull = false;
                }

            }
            else {
                _val.push("7701001")
                valObj.NV = true;            
            };
            valObj.vSet = _val.slice(0);
            eMedication["eMedication.10"] = valObj;
            delete valObj;

            //eMedications.11///////////
            var _procedures= [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            if(eMedication["MedsAdministered"]==true)
            {
                _meds = getValue(elementList, "eMedications.11");
                _val.push( _meds.ValueArray[0].val);
                valObj.IsNull = false;
            
                valObj.vSet = _val.slice(0);
                eMedication["eMedication.11"] = valObj;
                delete valObj;
            };

            //eMedications.12/////////////
            var _procedures= [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            if(eMedication["MedsAdministered"]==true)
            {
                _meds = getValue(elementList, "eMedications.12");
                if (_meds.IsNull != true) 
                {
                    _val.push( _meds.ValueArray[0].val);
                    valObj.IsNull = false;
                };
                valObj.vSet = _val.slice(0);
                eMedication["eMedication.01"] = valObj;
                delete valObj;
            }
        }
    };
    */
    return eMedications;
};
var seteProtocols = function (TheCall) {
    /*
    var eProtocols = new Object()
    console.log(pProtocols)
    var _protocols = new Object();
    var ProtocolsGroup = new Object();
    var v2Array = [];


    if (pProtocols.HasDataSet == true) 
    {
        pProtocols.IsValid = true;
        var _sectionIndex = [];
        _sectionIndex = getSectionIndex(pProtocols, "eProtocols.ProtocolGroup")

        for (var xx = 0; xx < _sectionIndex.length; xx++) 
        {
            var _vg = [];
            var _eL = pProtocols.attributes.sections[_sectionIndex[xx]].attributes.elements;
            console.log(_eL)
            var ProtocolsGroupArray = [];

            ///////////eProtocols.01////////
            var _protocol=[];            
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            eProtocol["IsValid"] = false;
            _protocol = getValue(elementList, "eProtocols.01");
            if (eProtocol.IsValid == true) {

                if (_protocol.IsNull == true) {
                    _val.push("7701003")
                    valObj.NV = true;            
                }
                else {
                    _val = _protocol.ValueArray[0].val;
                    valObj.IsNull = false;
                }
            }
            else {
                _val.push("7701001")
                valObj.NV = true;            
            };
            ProtocolGroup["eProtocol.01"]=_val[0];


            ///////////eProtocols.02////////
            var _protocol=[];            
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _protocol = getValue(elementList, "eProtocols.02");
            if (eProtocol["IsValid"] == true) {
                if (_protocol.IsNull == true) {
                    __val.push("7701003")
                    valObj.NV = true;            

                }
                else {
                    _val = _protocol.ValueArray[0].val;
                    valObj.IsNull = false;
                }
            }
            else {
                _val.push("7701001")
                valObj.NV = true;            
            };
            ProtocolGroup["eProtocol.02"]=_val[0];
        }
    }
    */
    return eProtocol;
};
var seteScene = function (TheCall) 
{
    var ErrorList = [];
    pScene = TheCall.pScene;
    var eScene = new Object();
    eScene["HasDelay"] = false;

    if (pScene.HasDataSet == false)
    {
        eScene["IsValid"] = false;
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eScene", Description: "eScene.HasDataSet =false  " });    
    }
    else
    {
        if (typeof pScene.attributes.elements != 'undefined')
        {
            var _eL = [];
            _eL = pScene.attributes.elements;
            if (_eL[0] != -1)
            {
                eScene.IsValid = true;
            }
        }
    };

     

    ///////////////////////////////////////////////////
   
    var ErrorList = [];

    //////////////////////eScene.01
    var _scene = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (eScene.IsValid == true)
    {
        //This pattern verifies that the EMS Agency 
        //Number in eScene.01 matches the EMS Agency Number in dAgency.02.
        _scene = getValue(_eL, "eScene.01");
        if (_scene.IsNull == true) 
        {
            if (isRequiredStateElement("eScene.01"))
            {
                _val.push("7701003");
                valObj.NV = true;
            }
        }
            //            if (TheCall["AgencyName"]["dAgency.02"] != eScene["eScene.01"]) 
            //           {
            //                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eScene.01", Description: "EMS Agency Number  dAgency.02             Must equal eScene.01" })
            //            }            
            //
        else

        {
            _val.push(_scene.ValueArray[0].val);
            valObj.IsNull = false;
        }
    }
    else
    {
        _val.push("7701001");
        valObj.NV = true;
    };
    valObj.vSet = _val.slice(0);
    eScene["eScene.01"] = valObj;
    delete valObj;
    eScene["ResponderGroup"] = -1;
    ///////////////////////////////////////eScene.ResponderGroup
    if (eScene.IsValid == true)
    {
        if (typeof pScene.attributes.sections != 'undefined') 
        {
            var _sRG = [];
            eScene["ResponderGroup"] = -1;
            _sRG = getSectionIndex(pScene, "eScene.ResponderGroup");
    
            if (_sRG[0] != -1) 
            {
                eScene["ResponderGroup"] = _sRG.length;
            }
        }
    };
    if (eScene["ResponderGroup"] !=-1)
    {
        RpdrGrpArray = [];
        for (var i = 0; i < _sRG.length; i++)
        {
            var ResponderGroup = new Object();
            var _eRG=[];
            _eRG = pScene.attributes.sections[_sRG[i]].attributes.elements
            //////////////////////eScene.02
            var _scene = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _scene = getValue(_eRG, "eScene.02");
            if (_scene.IsNull != true) {
                _val.push(_scene.ValueArray[0].val);
                valObj.IsNull = false;
            };

            valObj.vSet = _val.slice(0);
            ResponderGroup["eScene.02"] = valObj;
            delete valObj;


            //////////////////////eScene.03
            var _scene = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _scene = getValue(_eRG, "eScene.03");
            if (_scene.IsNull != true) {
                _val.push(_scene.ValueArray[0].val);
                valObj.IsNull = false;
            };

            valObj.vSet = _val.slice(0);
            ResponderGroup["eScene.03"] = valObj;
            delete valObj;

            //////////////////////eScene.04
            var _scene = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _scene = getValue(_eRG, "eScene.04");
            if (_scene.IsNull != true) 
            {
                _val.push(_scene.ValueArray[0].val);
                valObj.IsNull = false;
            };

            valObj.vSet = _val.slice(0);
            ResponderGroup["eScene.04"] = valObj;
            delete valObj;
            RpdrGrpArray.push(ResponderGroup);
        }
        eScene.ResponderGroup = RpdrGrpArray;
    };
    
    
        //////////////////////eScene.05    
        var _scene = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        if (eScene.IsValid == true)
        {
            _scene = getValue(_eL, "eScene.05");
            if (_scene.IsNull != true) 
            {
                _val.push(_scene.ValueArray[0].val);
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
            };
        }

      
        eScene["eScene.05"] = valObj;
        delete valObj;
    
            //////////////////////eScene.06
        var _scene = [];  
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;


        if ((eScene.IsValid == true) && (typeof TheCall.CallDisposition.Cancelled == 'undefined'))
        {
            _scene = getValue(_eL, "eScene.06");
            
            if (_scene.IsNull == true) 
            {
                if (isRequiredStateElement("eScene.06") == true) 
                {
                    _val.push("7701003");
                    valObj.IsNull = true;
                    valObj.NV = true;
                }
            }
            else 
            {
                _val.push(_scene.ValueArray[0].val)
                valObj.IsNull = false;                    
            };

            if (_val[0] == '2707003')
            {
                    ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "eScene.08", Description: "Dispatch Delay Type Conflict" })
                    eScene["HasPatients"] = false;
            }
        }
        else
        {
            _val.push("7701001");
            valObj.IsNull = true;
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eScene["eScene.06"] = valObj;
        delete valObj;
 

        //////////////////////eScene.07
        var _scene = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _scene = getValue(_eL, "eScene.07");
        if ((eScene.IsValid == true) && (typeof TheCall.CallDisposition.Cancelled == 'undefined'))
        {
            if (_scene.IsNull == true) {
                if (isRequiredStateElement("eScene.07") == true) {
                    _val.push("7701003");
                    valObj.IsNull = true;
                    valObj.NV = true;
                }
            }
            else {
                _val.push(_scene.ValueArray[0].val)
                valObj.IsNull = false;
            };

        }
        else {
            _val.push("7701001");
            valObj.IsNull = true;
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
       eScene["eScene.07"] = valObj;
        delete valObj;
    
    //////////////////////eScene.08
        var _scene = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _scene = getValue(_eL, "eScene.08");
        if ((eScene.IsValid == true) && (typeof TheCall.CallDisposition.Cancelled == 'undefined')) {
            if (_scene.IsNull == true) {
                if (isRequiredStateElement("eScene.08") == true) {
                    _val.push("7701003");
                    valObj.IsNull = true;
                    valObj.NV = true;
                }
            }
            else {
                _val.push(_scene.ValueArray[0].val)
                valObj.IsNull = false;
            };

        }
        else {
            _val.push("7701001");
            valObj.IsNull = true;
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eScene["eScene.08"] = valObj;
        delete valObj;


        //////////////////////eScene.09
        var _scene = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _scene = getValue(_eL, "eScene.09");
        if ((eScene.IsValid == true) && (typeof TheCall.CallDisposition.Cancelled == 'undefined')) {
            if (_scene.IsNull == true) {
                if (isRequiredStateElement("eScene.09") == true) {
                    _val.push("7701003");
                    valObj.IsNull = true;
                    valObj.NV = true;
                }
            }
            else {
                _val.push(_scene.ValueArray[0].val)
                valObj.IsNull = false;
            };

        }
        else {
            _val.push("7701001");
            valObj.IsNull = true;
            valObj.NV = true;
        };

        valObj.vSet = _val.slice(0);
        eScene["eScene.09"] = valObj;
        delete valObj;

        //////////////////////eScene.10
        var _scene = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        
        if ((eScene.IsValid == true) && (typeof TheCall.CallDisposition.Cancelled == 'undefined')) {
            _scene = getValue(_eL, "eScene.10");
            if (_scene.IsNull == true) {
                if (isRequiredStateElement("eScene.10") == true) {
                    _val.push("7701003");
                    valObj.IsNull = true;
                    valObj.NV = true;
                }
                else {
                    _val.push("7701005");
                    valObj.IsNull = true;
                    valObj.NV = true;
                }
            }
            else {
                _val.push(_scene.ValueArray[0].val)
                valObj.IsNull = false;
            }
        }
        else {
            _val.push("7701001");
            valObj.IsNull = true;
            valObj.NV = true;
        };

        valObj.vSet = _val.slice(0);
        eScene["eScene.10"] = valObj;
        delete valObj;
    
        //////////////////////eScene.11
        var _scene = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;

        _scene = getValue(_eL, "eScene.10");
        if ((eScene.IsValid == true) && (typeof TheCall.CallDisposition.Cancelled == 'undefined')) {
            if (_scene.IsNull == true) {
                if (isRequiredStateElement("eScene.10") == true) {
                    //ErrorList.                
                }
            }
            else {
                _val.push(_scene.ValueArray[0].val)
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
                eScene["eScene.10"] = valObj;
                delete valObj;
            }
        };

        //////////////////////eScene.12
        var _scene = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;

        _scene = getValue(_eL, "eScene.12");
        if ((eScene.IsValid == true) && (typeof TheCall.CallDisposition.Cancelled == 'undefined')) {
            if (_scene.IsNull == true) {
                if (isRequiredStateElement("eScene.12") == true) {
                    //ErrorList.                
                }
            }
            else {
                _val.push(_scene.ValueArray[0].val)
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
                eScene["eScene.12"] = valObj;
                delete valObj;
            }
        };

        //////////////////////eScene.13
        var _scene = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;

        _scene = getValue(_eL, "eScene.13");
        if ((eScene.IsValid == true) && (typeof TheCall.CallDisposition.Cancelled == 'undefined')) {
            if (_scene.IsNull == true) {
                if (isRequiredStateElement("eScene.13") == true) {
                    //ErrorList.                
                }
            }
            else {
                _val.push(_scene.ValueArray[0].val)
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
                eScene["eScene.13"] = valObj;
                delete valObj;
            }
        };


        //////////////////////eScene.14
        var _scene = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;

        _scene = getValue(_eL, "eScene.14");
        if ((eScene.IsValid == true) && (typeof TheCall.CallDisposition.Cancelled == 'undefined')) {
            if (_scene.IsNull == true) {
                if (isRequiredStateElement("eScene.14") == true) {
                    _val.push("7701003");
                    valObj.IsNull = true;
                    valObj.NV = true;
                }
            }
            else {
                _val.push(_scene.ValueArray[0].val)
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
                eScene["eScene.14"] = valObj;
                delete valObj;
            }
        }
        else {
            _val.push("7701001");
            valObj.IsNull = true;
            valObj.NV = true;
        };


        //////////////////////eScene.15
        var _scene = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;

        _scene = getValue(_eL, "eScene.15");
        if ((eScene.IsValid == true) && (typeof TheCall.CallDisposition.Cancelled == 'undefined')) {
            if (_scene.IsNull == true) {
                if (isRequiredStateElement("eScene.15") == true) {
                    _val.push("7701003");
                    valObj.IsNull = true;
                    valObj.NV = true;
                }
            }
            else {
                _val.push(_scene.ValueArray[0].val)
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
                eScene["eScene.15"] = valObj;
                delete valObj;
            }
        }
        else {
            _val.push("7701001");
            valObj.IsNull = true;
            valObj.NV = true;
        };
        //////////////////////eScene.16
        var _scene = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;

        _scene = getValue(_eL, "eScene.16");
        if ((eScene.IsValid == true) && (typeof TheCall.CallDisposition.Cancelled == 'undefined')) {
            if (_scene.IsNull == true) {
                if (isRequiredStateElement("eScene.16") == true) {
                    _val.push("7701003");
                    valObj.IsNull = true;
                    valObj.NV = true;
                }
            }
            else {
                _val.push(_scene.ValueArray[0].val)
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
                eScene["eScene.16"] = valObj;
                delete valObj;
            }
        }
        else {
            _val.push("7701001");
            valObj.IsNull = true;
            valObj.NV = true;
        };

        //////////////////////eScene.17
        var _scene = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;

        _scene = getValue(_eL, "eScene.17");
        if ((eScene.IsValid == true) && (typeof TheCall.CallDisposition.Cancelled == 'undefined')) {
            if (_scene.IsNull == true) {
                if (isRequiredStateElement("eScene.17") == true) {
                    _val.push("7701003");
                    valObj.IsNull = true;
                    valObj.NV = true;
                }
            }
            else {
                _val.push(_scene.ValueArray[0].val)
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
                eScene["eScene.17"] = valObj;
                delete valObj;
            }
        }
        else {
            _val.push("7701001");
            valObj.IsNull = true;
            valObj.NV = true;
        };
        //////////////////////eScene.18
        var _scene = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;

        _scene = getValue(_eL, "eScene.18");
        if ((eScene.IsValid == true) && (typeof TheCall.CallDisposition.Cancelled == 'undefined')) {
            if (_scene.IsNull == true) {
                _val.push("7701003");
                valObj.IsNull = true;
                valObj.NV = true;
            }
            else {
                _val.push(_scene.ValueArray[0].val)
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
                eScene["eScene.18"] = valObj;
                delete valObj;
            }
        }
        else {
            _val.push("7701001");
            valObj.IsNull = true;
            valObj.NV = true;
        };
        //////////////////////eScene.19
        var _scene = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;

        _scene = getValue(_eL, "eScene.19");
        if ((eScene.IsValid == true) && (typeof TheCall.CallDisposition.Cancelled == 'undefined'))
        {
            if (_scene.IsNull == true) 
            {
                _val.push("7701003");
                valObj.IsNull = true;
                valObj.NV = true;
            }
            else 
            {
                _val.push(_scene.ValueArray[0].val)
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
                eScene["eScene.19"] = valObj;
                delete valObj;
            }
        }
        else {
            _val.push("7701001");
            valObj.IsNull = true;
            valObj.NV = true;
        };
        //////////////////////eScene.20
        var _scene = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _scene = getValue(_eL, "eScene.20");
        if ((eScene.IsValid == true) && (typeof TheCall.CallDisposition.Cancelled == 'undefined'))
        {
            if (_scene.IsNull == true) 
            {
                if (isRequiredStateElement("eScene.20") == true) 
                {
                    _val.push("7701003");
                    valObj.IsNull = true;
                    valObj.NV = true;
                }
                else {
                    _val.push("7701005");
                    valObj.IsNull = true;
                    valObj.NV = true;
                }
            }
            else {
                _val.push(_scene.ValueArray[0].val)
                valObj.IsNull = false;
            }
        }
        else {
            _val.push("7701001");
            valObj.IsNull = true;
            valObj.NV = true;
        };

        valObj.vSet = _val.slice(0);
        eScene["eScene.20"] = valObj;
        delete valObj;

        //////////////////////eScene.21
        var _scene = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;

        _scene = getValue(_eL, "eScene.21");
        if ((eScene.IsValid == true) && (typeof TheCall.CallDisposition.Cancelled == 'undefined'))
        {
            if (_scene.IsNull == true) 
            {
                _val.push("7701003");
                valObj.IsNull = true;
                valObj.NV = true;
            }
            else 
            {
                _val.push(_scene.ValueArray[0].val)
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
                eScene["eScene.21"] = valObj;
                delete valObj;
            }
        }
        else {
            _val.push("7701001");
            valObj.IsNull = true;
            valObj.NV = true;
        };

        //////////////////////eScene.22
        var _scene = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;

        _scene = getValue(_eL, "eScene.22");
        if ((eScene.IsValid == true) && (typeof TheCall.CallDisposition.Cancelled == 'undefined'))
        {
            if (_scene.IsNull != true) {
                _val.push(_scene.ValueArray[0].val)
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
                eScene["eScene.22"] = valObj;
                delete valObj;
            }
        };

        //////////////////////eScene.23
        var _scene = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;

        _scene = getValue(_eL, "eScene.23");
        if ((eScene.IsValid == true) && (typeof TheCall.CallDisposition.Cancelled == 'undefined'))
        {
            if (_scene.IsNull != true) 
            {
                _val.push(_scene.ValueArray[0].val)
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
                eScene["eScene.23"] = valObj;
                delete valObj;
          }
        };
  
    return eScene;
};
var seteVitals = function (TheCall){
    
    /*
    var eVitals = new Object();
    var pVitals = TheCall.pVitals
    console.log(pVitals)
    var _vitals = new Object();
    var VitalGroup = new Object();

    if (pVitals.HasDataSet == false) 
    {
        eVitals.IsValid = false;
    };

    eVitals["VitalGroup"]=-1;
    ////////Check for cancelled calls, Standby, non-patient
    if ((TheCall.HasPatient == true) && (TheCall.HasTreatment == true) && (TheCall.IsStandBy == false)) 
    {
        eVitals.IsValid = true;
    }

    if ((eVitals.IsValid == true) &&  (typeof pVitals.attributes.sections !='undefined'))
    {
        var _sectionIndex = [];
        _sI = getSectionIndex(pVitals, "eVitals.VitalGroup")        
        eVitals["VitalGroup"]=_sI.length;
        var VGArray = [];
        var vgCount = 0;
        if(_sI > 0)
        {
            vgCount = 0;
        };
        for (var xx = 0; xx < vgCount; xx++) 
        {
            eVitals["VitalsTaken"]=false;
            var _vg = [];
            var _eL = pVitals.attributes.sections[xx].attributes.elements;

            //eVital.01/////////////////////////////
            var _vitals=[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;
            if(eVitals.IsValid == true)
            {
                _vitals = getValue(_eL, "eVitals.01");
                if (_vitals.IsNull == true) 
                {
                    _val.push("7701003");
                    valObj.NV = true;
                }
                else 
                {
                    _val.push(_vitals.ValueArray[0].val);
                    valObj.IsNull = false;
                };
            }
            else
            {
                _val.push("7701001");
                valObj.NV = true;
            };
            valObj.vSet = _val.slice(0);
            eVitals["VitalsTaken"]=true;
            VitalGroup["eVitals.01"] = valObj;
            delete valObj;

            //eVital.02/////////////////////////////
            var _val=[];
            var _vitals=[];
            if(eVitals.IsValid == true)
            {
                _vitals = getValue(_eL, "eVitals.02");
    
                if (_vitals.IsNull == true) 
                {
                    _val.push("7701003");
                    valObj.NV = true;
                }
                else
                {
                    _val.push(_vitals.ValueArray[0].val);
                    valObj.IsNull = false;
                }
            }
            else
            {
                _val.push("7701001");
                valObj.NV = true;
            };
            eVitals["VitalsTaken"]=true;
            valObj.vSet = _val.slice(0);
            VitalGroup["eVitals.02"] = valObj;
            delete valObj;




            ///////////////Cardiac Rhythm Group
            VitalGroup["CardiacRhythmGroup"]=-1;
            eVitals["HasCRG"]=false;
            if((typeof pVitals.attributes.sections[xx].attributes.sections !='undefined')  &&(eVitals["VitalsTaken"]==true))
            {
                var _cRG = [];  
                _cRG = getSectionIndex(pVitals.attributes.sections[xx], "eVitals.CardiacRhythmGroup")
                eVitals["HasCRG"]=true;
                VitalGroup["CardiacRhythmGroup"]=1;
            };

            //eVital.03/////////////////////////////
            var _vitals=[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;
            eVitals["ECG"] = false;

            if (eVitals["HasCRG"]==true)
            {
                _vitals = getValue(_eCRG, "eVitals.03");
                console.log(_vitals)                    
                    
                if (_vitals.IsNull == true)
                {
                    if (_vitals.HasPN == true) 
                    {
                        if (_vitals.pn == "Refused") 
                        {
                            _val.push("8801019")
                            valObj.PN = true;
                        }
                        else if (_vitals.pn == "UnableToComplete") 
                        {
                            _val.push("8801023");
                            valObj.PN = true;
                        }
                    }
                    else
                    {
                        if (isRequiredStateElement("eVital.03") == true)
                        {
                            _eVitals.NV.push("7701003");
                            valObj.NV = true;                            
                        }
                    }
                }
                else
                {
                    for (var i = 0; i <= _vitals.ValueArray.length-1; i++)
                    {
                        if ((_vitals.ValueArray[i].HasValue == true) && (_val.indexOf(_vitals.ValueArray[i].val) == -1))
                        {
                            _val.push( _vitals.ValueArray[i].val);
                            valObj.IsNull = false;
                            eVitals["HasECG"] = true;                     
                        };
                    }
                }
            }
            else
            {
                _eVitals.NV.push("7701001");
                valObj.NV = true;           
            };
            valObj.vSet = _val.slice(0);
            VitalGroup["eVitals.03"] = valObj;
            delete valObj;

                
            //eVital.04/////////////////////////////
            var _vitals=[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;
            if (eVitals["ECG"] == true) 
            {
                _vitals = getValue(_eCRG, "eVitals.04");
                        
                if (_vitals.IsNull == true) 
                {
                    if (isRequiredStateElement("eVitals.04"))
                    {
                        _val.push("7701003");
                        valObj.NV = true;                            
                    }
                }
                else
                {
                    _val.push(_vitals.ValueArray[0].val);
                    valObj.IsNull = false;
                }
            }
            else
            {
                _val.push("7701001");
                valObj.NV = true;                            
            };
            valObj.vSet = _val.slice(0);
            VitalGroup["eVitals.04"] = valObj;
            delete valObj; 
                
            //eVital.05/////////////////////////////
            var _vitals=[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;

            if (eVitals["ECG"] == true)
            {
                _vitals = getValue(_eCRG, "eVitals.05");                
                if (_vitals.IsNull == true) 
                {
                    _val.push("7701003");
                    valObj.NV = true;                            
                }            
                else 
                {            
                    for (var i = 0; i <= _vitals.ValueArray.length-1; i++)
                    {                           
                        if ((_vitals.ValueArray[i].HasValue == true) && (_val.indexOf(_vitals.ValueArray[i].val) == -1))
                        {
                            _val.push(_vitals.ValueArray[i].val);
                            valObj.IsNull = false;
                        }
                    }
                }
            }
            else
            {
                _val.push("7701001");
                valObj.NV = true;    
            };
            valObj.vSet = _val.slice(0);
            VitalGroup["eVitals.05"] = valObj;
            delete valObj; 
          
            ///////////////////////////////////////////eVitals.BloodPressureGroup
            VitalGroup["BloodPressureGroup"]=-1
            eVitals["HasBP"] = false;
            if((typeof pVitals.attributes.sections !='undefined') && (eVitals["VitalsTaken"]==true))
            {
                var _bPi = -1;  //if no sections, NA values                        
                _bPi = getSectionIndex(pVitals.attributes.sections[xx], "eVitals.BloodPressureGroup");                       
                if (_bPi  != -1)
                {        
                    eVitals["HasBP"] = true
                    VitalGroup["BloodPressureGroup"]=1
                    var _eBP = [];
                    var _eBP = pVitals.attributes.sections[_sectionIndex[xx]].attributes.sections[_bPi].attributes.elements;
                }
            };
            
            //eVital.06/////////////////////////////
            var _vitals=[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;
            eVitals["SBP"] = false;
            if(eVital["HasBP"] == true)
            {
                _vitals= getValue(_eBP, "eVitals.06");                    
                if (_vitals.IsNull == true) 
                { 
                    if (_vitals.HasPN == true)
                    {
                        if(_vitals.pn == "ExamFindingNotPresent")
                        {                                
                            _val.push("8801005");
                            valObj.PN = true;    

                        }
                        else if (_vitals.pn == "Refused")
                        {
                            _val.push("8801019")
                            valObj.PN = true;    
                        }
                        else if (_vitals.pn == "UnableToComplete")
                        {
                            _val.push("8801023")
                            valObj.PN = true;                                    
                        }
                        else
                        {
                            if (isRequiredStateElement("eVitals.06"))
                            {
                                _val.push("7701003");
                                valObj.NV = true;    
                            }
                            else
                            {                                
                                _val.push("7701005");
                                valObj.NV = true;    
                            }
                        }
                    }
                }
                else
                {
                    _val.push(_vitals.ValueArray[0].val);
                    valObj.IsNull = false;
                    eVitals["SBP"] = true;
                }
            }
            else
            {
                _val.push("7701005");
                valObj.NV = true;    
            };
            valObj.vSet = _val.slice(0);
            VitalGroup["eVitals.06"] = valObj;
            delete valObj; 
            
            //eVitals.07/////////////////////////////
            var _vitals=[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;

            eVitals["DBP"] = false;
            if(eVital["HasBP"] == true)
            {
                _vitals = getValue(_eBP, "eVitals.07");
                eVitals["DBP"] = false;eVitals["SBP"] = false;eVitals["SBP"] = false;eVitals["SBP"] = false;
                if (_vitals.IsNull == true) 
                {
                    if (_vitals.HasPN == true)
                    {
                        if (_vitals.pn == "ExamFindingNotPresent")
                        {
                            _val.push("8801005");
                            valObj.PN = true;    
                        }
                        else if (_vitals.pn == "Refused")
                        {
                            _val.push("8801019")
                            valObj.PN = true;    
                        }
                        else if (_vitals.pn == "UnableToComplete")
                        {
                            _val.push("8801023")
                            valObj.PN = true;    
                        }                        
                    }
                    else {
                        if (isRequiredStateElement("eVitals.07")) 
                        {
                            _val.push("7701003")
                            valObj.NV = true;    
                        }
                        else 
                        {
                            _val.push("7701005")
                            valObj.NV = true;    
                        }
                    }
                }
                else 
                {
                    _val.push(_vitals.ValueArray[0].val);
                    valObj.IsNull = false;
                    eVitals["DBP"] = true;
                }
            }
            else
            {
                _val.push("7701001")
                valObj.NV = true;   
            };
            valObj.vSet = _val.slice(0);
            VitalGroup["eVitals.07"] = valObj;
            delete valObj; 


            //eVital.08/////////////////////////////
            var _vitals=[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;

            if(eVitals.HasBP==true)
            {
                _vitals = getValue(_eBP, "eVitals.08");
                if ((eVitals["DBP"] == true) &&(eVitals.SBP== true))   //We have good BP
                {
                    if (_vitals.IsNull == true) 
                    {
                        if (isRequiredStateElement("eVitals.08")) {
                            _val.push("7701003");
                            valObj.NV = true;    
                        }
                    }
                    else 
                    {
                        _val.push(_vitals.ValueArray[0].val);
                        valObj.IsNull = false;
                    }
                }
                else
                {
                    alert("ERROR:  ONE BP WITHOUT THE OTHER");
                }
            }            
            else
            {
                _val.push("7701001");
                valObj.NV = true;    
            };
            valObj.vSet = _val.slice(0);
            VitalGroup["eVitals.08"] = valObj;
            delete valObj; 


            
            //eVital.09/////////////////////////////               
            var _vitals=[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;
            if(eVitals.HasBP == true)
            {
                _vitals = getValue(_eBP, "eVitals.09");
                if (_vitals.IsNull != true) 
                {            
                    valObj.vSet = _val.slice(0);
                    VitalGroup["eVitals.09"] = valObj;
                    delete valObj; 
                }
            };
            


            ///////////////////////////////////////////            
            ///////////////////////////////////////////     
            VitalGroup["HeartRateGroup"]=-1;                
            eVitals["HasHRG"] = false;
            if((typeof pVitals.attributes.sections !='undefined') && (eVitals["VitalsTaken"]==true))
            {
                var _bPi = -1;  //if no sections, NA values                        
                _bPi = getSectionIndex(pVitals.attributes.sections[xx], "eVitals.BloodPressureGroup");                       
                if (_bPi  != -1)
                {        
                    eVitals["HasHRG"] = true;
                    VitalGroup["BloodPressureGroup"]=1
                    var _eBP = [];
                    var _eBP = pVitals.attributes.sections[_sectionIndex[xx]].attributes.sections[_bPi].attributes.elements;
                }
            };
            


            //eVital.10/////////////////////////////               
            var _vitals=[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;
            eVitals.IsHeartRateMonitored = false;

            if(eVitals["HasHRG"] == true)
            {
                _vitals = getValue(_eHG, "eVitals.10");                        
                if (_vitals.IsNull == true) 
                {
                    if (_vitals.HasPN == true)
                    {
                        if (_vitals.pn== "UnabletoComplete")
                        {
                            _val.push("8801023");
                            valObj.PN = true;    
                        }
                        else if (_vitals.pn == "Refused")
                        {
                            _val.push("8801019");
                            valObj.PN = true;    
                        }
                        else if (_vitals.pn == "ExamFindingNotPresent")
                        {
                            _val.push("8801005");
                            valObj.PN = true;    
                        }
                    }
                    else
                    {
                        if (isRequiredStateElement("eVitals.10"))
                        {
                            _val.push("7701003");
                            valObj.NV = true; 
                        }
                        else
                        {
                            _val.push( "7701005");
                            valObj.NV = true;
                        }
                    }                            
                }
                else
                {
                    _val.push(_vitals.ValueArray[0].val);
                    valObj.IsNull = false;
                    eVitals.IsHeartRateMonitored = true;
                }
            }
            else
            {
                _val.push( "7701001");
                valObj.NV = true;
            };
            valObj.vSet = _val.slice(0);
            VitalGroup["eVitals.10"] = valObj;
            delete valObj;                                                             

            //eVital.11/////////////////////////////               
            var _vitals=[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;                            
            if(eVitals.HasHRG == true)
            {
                _vitals = getValue(_eHG, "eVitals.11");
                
                if(eVitals.IsHeartRateMonitored == true)
                {
                    if (_vitals.IsNull != true) 
                    {
                        _val.push(_vitals.ValueArray[0].val);
                        valObj.IsNull = false;
                    }
                }
            };
            valObj.vSet = _val.slice(0);
            VitalGroup["eVitals.11"] = valObj;
            delete valObj; 
                    
            //eVitals.12/////////////////////////////
            var _vitals=[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;
            if(eVitals.VitalsTaken == true)
            {
                _vitals = getValue(_eL, "eVitals.12");
                if (_vitals.IsNull == true) 
                {
                    if(_vitals.HasPN==true)
                    {
                        if (_vitals.pn== "UnabletoComplete")
                        {
                            _val.push("8801023")
                            valObj.PN = true;
                        }
                        else if (_vitals.pn == "Refused")
                        {
                            _val.push("8801019");
                            valObj.PN = true;
                        }
                        else if (_vitals.pn == "ExamFindingNotPresent")
                        {
                            _val.push("8801005")
                            valObj.PN = true;
                        }
                    }
                    else 
                    {
                        if (isRequiredStateElement("eVitals.12")) 
                        {
                            _val.push("7701003");
                            valObj.NV = true;

                        }
                        else 
                        {
                            _val.push("7701005");
                            valObj.NV = true;
                        }
                    }
                }
                else 
                {
                    _val.push(_vitals.ValueArray[0].val);
                    valObj.IsNull = false;
                }
            }
            else
            {
                _val.push("7701001");
                valObj.NV = true;
            };
            valObj.vSet = _val.slice(0);
            VitalGroup["eVitals.12"] = valObj;
            delete valObj;                                                                         

            //eVital.13/////////////////////////////
            var _vitals=[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;

            if(eVitals.VitalsTaken == true)
            {
                _vitals = getValue(_eL, "eVitals.13");
                if (_vitals.IsNull != true) 
                {
                    _val.push(_vitals.ValueArray[0].val);
                    valObj.IsNull = false;
                };
                valObj.vSet = _val.slice(0);
                VitalGroup["eVitals.13"] = valObj;
                delete valObj;                                                             
            };

            
            //eVitals.14/////////////////////////////
            var _vitals=[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;
            if (eVitals.VitalsTaken == true) 
            {
                _vitals = getValue(_eL, "eVitals.14");            
                if (_vitals.IsNull == true) 
                {
                    if(_vitals.HasPN==true)
                    {
                        if (_vitals.pn== "UnabletoComplete")
                        {
                            _val.push("8801023")
                            valObj.PN = true;
                        }
                        else if (_vitals.pn == "Refused")
                        {
                            _val.push("8801019")
                            valObj.PN = true;
                        }
                        else if (_vitals.pn == "ExamFindingNotPresent")
                        {
                            _val.push("8801005");
                            valObj.PN = true;                                
                        }
                    }
                    else 
                    {
                        if (isRequiredStateElement("eVitals.14")) 
                        {                            
                            _val.push( "7701003");
                            valObj.NV = true;

                        }
                        else {
                            _val.push( "7701005");
                            valObj.NV = true;
                        }
                    }
                }
                else 
                {
                    _val.push(_vitals.ValueArray[0].val);
                    valObj.IsNull = false;
                }
            }
            else                
            {
                _val.push("7701001");
                valObj.NV = true;
            };
            valObj.vSet = _val.slice(0);
            VitalGroup["eVitals.14"] = valObj;
            delete valObj;                                                             

            
            //eVital.15/////////////////////////////
            var _vitals=[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;
            if (eVitals.VitalsTaken == true) 
            {
                _vitals = getValue(businessObject.elements, "eVitals.15");
                if (_vitals.IsNull != true)                 
                {
                    _val.push(_vitals.ValueArray[0].val);
                    valObj.IsNull = false;
                
                    valObj.vSet = _val.slice(0);
                    VitalGroup["eVitals.15"] = valObj;
                    delete valObj;                                                             
                }
            };
            
            /////////////eVital.16
            var _vitals=[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;
            if (eVitals.VitalsTaken == true) 
            {
                _vitals = getValue(_eL, "eVitals.16");
                if (_vitals.IsNull == true) 
                {
                    if(_vitals.HasPN ==true)
                    {
                        if (_vitals.pn== "UnabletoComplete")
                        {
                            _val.push("8801023")
                            valObj.PN = true;
                        }
                        else if (_vitals.pn == "Refused")
                        {
                            _val.push("8801019")
                            valObj.PN = true;
                        }
                    }
                    else 
                    {
                        if (isRequiredStateElement("eVitals.16")) 
                        {
                            _val.push("7701003");
                            valObj.NV = true;
                        }
                        else 
                        {                             
                            _val.push("7701005");
                            valObj.NV = true;
                        }
                    }
                }
                else 
                {
                    _val.push(_vitals.ValueArray[0].val);
                    valObj.IsNull = false;
                }
            }          
            else
            {
                _val.push("7701001");
                valObj.NV = true;
            };
            valObj.vSet = _val.slice(0);
            VitalGroup["eVitals.16"] = valObj;
            delete valObj;       
            
            //eVitals.17/////////////////////////////
            var _vitals=[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;
            if (eVitals.VitalsTaken == true) 
            {
                _vitals = getValue(_eL, "eVitals.17");
                if (_vitals.IsNull == true) 
                {
                    if(_vitals.HasPN ==true)
                    {
                        if (_vitals.pn== "UnabletoComplete")
                        {
                            _val.push("8801023");
                            valObj.PN = true;

                        }
                        else if (_vitals.pn == "Refused")
                        {
                            _val.push("8801019");
                            valObj.PN = true;                            
                        }
                    }
                    else 
                    {
                        if (isRequiredStateElement("eVitals.17")) 
                        {
                            _val.push("7701003");
                            valObj.NV = true;
                        }
                        else {
                            _val.push("7701005");
                            valObj.NV = true;
                        }
                    }
                }
                else 
                {
                    _val.push(_vitals.ValueArray[0].val);
                    valObj.IsNull = false;
                }
            }
            else
            {
                _val.push("7701001");
                valObj.NV = true;
            };
            valObj.vSet = _val.slice(0);
            VitalGroup["eVitals.17"] = valObj;
            delete valObj;       

            
            //eVitals.18/////////////////////////////
            var _vitals=[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;
            if (eVitals.VitalsTaken == true) 
            {

                _vitals = getValue(_eL, "eVitals.18");
                if (_vitals.IsNull == true) 
                {
                    if(_vitals.HasPN ==true)
                    {
                        if (_vitals.pn== "UnabletoComplete")
                        {
                            _val.push("8801023");
                            valObj.PN = true; 
                        }
                        else if (_vitals.pn == "Refused")
                        {
                            _val.push("8801019")
                            valObj.PN = true; 
                        }
                    }
                    else 
                    {
                        if (isRequiredStateElement("eVitals.18")) 
                        {
                            _val.push("7701003");
                            valObj.NV = true; 
                        }
                        else {
                            _val.push("7701005");
                            valObj.NV = true; 
                        }
                    }
                }
                else 
                {
                    _val.push(_vitals.ValueArray[0].val);
                    valObj.IsNull = false;
                }
            }
            else
            {
                _val.push("7701001");
                valObj.NV = true;
            };
            valObj.vSet = _val.slice(0);
            VitalGroup["eVitals.18"] = valObj;
            delete valObj;       
                     
            ///////////////////////////eVitals.GlasgowScoreGroup////////////////            
            VitalGroup["GlasgowScoreGroup"]=-1
            eVitals["HasGCS"] = false;
            if((typeof pVitals.attributes.sections !='undefined')&& (eVitals["VitalsTaken"]==true))
            {
                if(eVitals["VitalsTaken"]==true)
                {                    
                    var _tG = [];  //if no sections, NA values                        
                    _tG= getSectionIndex(pVitals.attributes.sections[xx], "eVitals.GlasgowScoreGroup");                       
                    if (_tG!= -1)
                    {        
                        var _eTG = [];
                        var _eTG = pVitals.attributes.sections[_sectionIndex[xx]].attributes.sections[_tG].attributes.elements;
                        eVitals["HasGCS"] = true;
                    }
                }
            };


            //eVitals.19/////////////////////////////
            var _vitals=[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;
            if(eVitals["HasGCS"] == true)
            {
                _vitals = getValue(_eGCS, "eVitals.19");
                if (_vitals.IsNull == true) 
                {
                    if(_vitals.HasPN ==true)
                    {
                        if (_vitals.pn== "UnabletoComplete")
                        {
                            _val.push("8801023");
                            valObj.PN = true;                                            
                        }
                        else if (_vitals.pn == "Refused")
                        {
                            _val.push("8801019")
                            valObj.PN = true; 
                        }
                    }
                    else 
                    {
                        if (isRequiredStateElement("eVitals.19")) 
                        {
                            _val.push("7701003");
                            valObj.NV = true; 

                        }
                        else {
                            _val.push("7701005");
                            valObj.NV = true; 

                        }
                    }
                }
                else 
                {
                    _val.push(_vitals.ValueArray[0].val);
                    valObj.IsNull = false;
                };
            }
            else
            {
                _val.push("7701001");
                valObj.NV = true; 
            };
            valObj.vSet = _val.slice(0);
            VitalGroup["eVitals.19"] = valObj;
            delete valObj;       
                                                          
            
            //eVital.20/////////////////////////////        
            var _vitals=[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;
            if(eVitals["HasGCS"] == true)
            {
                _vitals = getValue(_eGCS, "eVitals.20");
                if (_vitals.IsNull == true) 
                {
                    if(_vitals.HasPN ==true)
                    {
                        if (_vitals.pn== "UnabletoComplete")
                        {
                            _val.push("8801023")
                            valObj.PN = true; 
                        }
                        else if (_vitals.pn == "Refused")
                        {
                            _val.push("8801019")
                            valObj.PN = true; 
                        }
                    }
                    else 
                    {
                        if (isRequiredStateElement("eVitals.20")) 
                        {
                            _val.push("7701003");
                            valObj.NV = true; 

                        }
                        else {
                            _val.push("7701005");
                            valObj.NV = true; 
                        }
                    }
                }
                else 
                {
                    _val.push(_vitals.ValueArray[0].val);
                    valObj.IsNull = false;
                }                
            }
            else
            {
                _val.push("7701001");
                valObj.NV = true; 
            };
            valObj.vSet = _val.slice(0);
            VitalGroup["eVitals.20"] = valObj;
            delete valObj;       


            //eVital.21/////////////////////////////        
            var _vitals=[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;
            if(eVitals.HasGCS == true)
            {
                _vitals = getValue(_eGCS, "eVitals.21");
                if (_vitals.IsNull == true) 
                {
                    if(_vitals.HasPN ==true)
                    {
                        if (_vitals.pn== "UnabletoComplete")
                        {
                            _val.push("8801023")
                            valObj.PN = true; 
                        }
                        else if (_vitals.pn == "Refused")
                        {
                            _val.push("8801019")
                            valObj.PN = true; 
                        }
                    }
                    else 
                    {
                        if (isRequiredStateElement("eVitals.21")) 
                        {
                            _val.push("7701003");
                            valObj.NV = true; 

                        }
                        else {
                            _val.push("7701005");
                            valObj.NV = true; 
                        }
                    }
                }
                else 
                {
                    _val.push(_vitals.ValueArray[0].val);
                    valObj.IsNull = false;
                };                
            }
         
            else
            {
                _val.push("7701001");
                valObj.NV = true; 
            };
            valObj.vSet = _val.slice(0);
            VitalGroup["eVitals.21"] = valObj;
            delete valObj;       

                
         
            //eVital.22/////////////////////////////        
            var _vitals=[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;
            if(eVitals.HasGCS == true)
            {
                _vitals = getValue(_eGCS, "eVitals.22");
            
                if (_vitals.IsNull == true) 
                {                    
                    if (isRequiredStateElement("eVitals.22")) 
                    {
                        _val.push("7701003");
                        valObj.NV = true; 
                    }
                    else {
                        _val.push("7701005");
                        valObj.NV = true; 
                    }
                }
                else 
                {
                    _val.push(_vitals.ValueArray[0].val);
                    valObj.IsNull = false;
                }
            }    
            else
            {
                _val.push("7701001");
                valObj.NV = true; 
            };
            valObj.vSet = _val.slice(0);
            VitalGroup["eVitals.22"] = valObj;
            delete valObj;       
                

            eVitals["eVitals.22"]=_val;
            //eVital.23/////////////////////////////        
            var _vitals=[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;
            if(eVitals.HasGCS == true)
            {

                _vitals = getValue(_eGCS, "eVitals.23");
                if (_vitals.IsNull == true) 
                {
                    if (_vitals.pn== "UnabletoComplete")
                    {
                        _val.push("8801023")
                        valObj.PN = true; 
                    }
                    else if (_vitals.pn == "Refused")
                    {
                        _val.push("8801019");
                        valObj.PN = true; 
                    }
                    else 
                    {
                        if (isRequiredStateElement("eVitals.23")) 
                        {
                            
                            _val.push("7701003");
                            valObj.NV = true; 

                        }
                        else {
                            _val.push("7701005");
                            valObj.NV = true; 
                        }
                    }
                }
                else 
                {
                    _val.push(_vitals.ValueArray[0].val);
                    valObj.IsNull = false;
                }                
            }        
            else
            {
                _val.push("7701001");
                valObj.NV = true; 
            };
            valObj.vSet = _val.slice(0);
            VitalGroup["eVitals.23"] = valObj;
            delete valObj;       



            ///////////////////////////////////////////            
            ///////////////////////////////////////////            
            VitalGroup["TemperatureGroup"];
            if(typeof pVitals.attributes.sections !='undefined')
            {            
                if(eVitals["VitalsTaken"]==true)
                {
                    var _tG = -1;  //if no sections, NA values                        
                    _tG= getSectionIndex(pVitals.attributes.sections[xx], "eVitals.TemperatureGroup");                       
                    if (_tG!= -1)
                    {        
                        var _eTG = [];
                        var _eTG = pVitals.attributes.sections[_sectionIndex[xx]].attributes.sections[_tG].attributes.elements;
                        eVitals["HasTG"] = true;
                    }
                }
                else
                {
                    eVitals["HasTG"] = false;
                }            
            };

            //eVital.24/////////////////////////////        
            var _vitals=[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;

            eVitals["Temperature"] == false;
            if(eVitals.HasTG ==true)
            {
                _vitals = getValue(_eTGP, "eVitals.24");
                if (_vitals.IsNull == true) 
                {
                    if (_vitals.pn== "UnabletoComplete")
                    {
                        _val.push("8801023")
                        valObj.NV = true; 
                    }
                    else if (_vitals.pn == "Refused")
                    {
                        _val.push("8801019")
                        valObj.NV = true; 
                    }
                    else 
                    {
                        if (isRequiredStateElement("eVitals.24")) 
                        {
                            _val.push("7701003");
                            valObj.NV = true; 
                        }
                        else {
                            _val.push("7701005");
                            valObj.NV = true; 
                        }
                    }
                }
                else 
                {
                    _val.push(_vitals.ValueArray[0].val);
                    valObj.IsNull = false;
                    eVitals["Temperature"] = true;
                }
            }
            else
            {             
                _val.push("7701001");
                valObj.NV = true;         
            };
                    
            valObj.vSet = _val.slice(0);
            VitalGroup["eVitals.24"] = valObj;
            delete valObj;       

            //eVital.25/////////////////////////////   
            var _vitals=[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;
            
            _vitals = getValue(_eTGP, "eVitals.25");
            if (eVitals["Temperature"] == true) 
            {
                if (_vitals.IsNull != true) 
                {
                    _val.push(_vitals.ValueArray[0].val);
                    valObj.IsNull = false;
                }
            }
            else
            {
                ErrorList.push({ Version: "3.3.4", Severity: "3", ElementID: "eVitals.25", Description: "Temperature Method not defined" })
            };
   
            valObj.vSet = _val.slice(0);
            TemperatureGroup["eVitals.25"] = valObj;
            delete valObj;       

            //eVital.26/////////////////////////////   
            var _vitals=[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;
            if(eVitals["VitalsTaken"]==true)
            {
                _val = getValue(_eL, "eVitals.26");
                if (_vitals.IsNull == true) 
                {
                    _val.push("7701003");
                    valObj.NV = true; 
                }
                else 
                {
                    _val.push(_vitals.ValueArray[0].val);
                    valObj.IsNull = false;
                }
            }
            else
            
            {             
                _val.push("7701001");
                valObj.NV = true;
            };
                    
            valObj.vSet = _val.slice(0);
            VitalGroup["eVitals.26"] = valObj;
            delete valObj;       


            ///////////////////////////////////////////            
            ///////////////////////////////////////////            
            eVitals["HasPSG"] = false;
            VitalGroup["PainScaleGroup"]=-1
            if((typeof pVitals.attributes.sections !='undefined') &&(eVitals["VitalsTaken"]==true))
            {
                var _pSG = [];  //if no sections, NA values                        
                _pSG= getSectionIndex(pVitals.attributes.sections[xx], "eVitals.PainScaleGroup");
                if (_pSG!= -1)
                {        
                    VitalGroup["PainScaleGroup"]=11
                    var _ePSG = [];
                    var _ePSG = pVitals.attributes.sections[_sectionIndex[xx]].attributes.sections[_pSG].attributes.elements;
                    if(eVitals["VitalsTaken"]==true)
                    {
                        eVitals["HasPSG"] = true;
                    }    
                }
            };

            //eVital.27/////////////////////////////   
            var _vitals=[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;

            if(eVitals["HasPSG"] ==true)
            {
                _vitals = getValue(_ePSG, "eVitals.27");
                if (_vitals.IsNull == true) 
                {
                    if (_vitals.pn== "UnabletoComplete")
                    {
                        _val.push("8801023")
                        valObj.PN = true; 
                    }
                    else if (_vitals.pn == "Refused")
                    {
                        _val.push("8801019");
                        valObj.PN = true; 
                    }
                    else 
                    {
                        if (isRequiredStateElement("eVitals.27")) 
                        {                           
                            _val.push("7701003");
                            valObj.NV = true; 

                        }
                        else {
                            _val.push("7701005");
                            valObj.NV = true; 
                        }
                    }
                }
                else 
                {
                    _val.push(_vitals.ValueArray[0].val);
                    valObj.IsNull = false;
                }                    
            }
            else
            {             
                _val.push("7701001");
                valObj.NV = true;         
            };
                    
            valObj.vSet = _val.slice(0);
            VitalGroup["eVitals.27"] = valObj;
            delete valObj;       


            //eVital.28/////////////////////////////   
            var _vitals=[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;
            if(eVitals["HasPSG"] ==true)
            {
                _vitals = getValue(_ePSG, "eVitals.28");
                if (_vitals.IsNull == true) 
                {
                    if (_vitals.pn== "UnabletoComplete")
                    {
                        _val.push("8801023");
                        valObj.PN = true; 
                    }
                    else if (_vitals.pn == "Refused")
                    {
                        _val.push("8801019");
                        valObj.PN = true;                         
                    }
                    else 
                    {
                        if (isRequiredStateElement("eVitals.28")) 
                        {
                            _val.push("7701003");
                            valObj.NV = true;                             
                        }
                        else {
                            _val.push("7701005");
                            valObj.NV = true;                             
                        }
                    }
                }
                else 
                {
                    _val.push(_vitals.ValueArray[0].val);
                    valObj.IsNull = false;
                }                
            }
            else
            {
                _val.push("7701001");
                valObj.NV = true;

            };
                    
            valObj.vSet = _val.slice(0);
            VitalGroup["eVitals.28"] = valObj;
            delete valObj;       

            
            /////////////////////////////////////////// StrokeScaleGroup           
    
            eVitals["HasSSG"] = false;
            VitalGroup["StrokeScaleGroup"]=-1
            if((typeof pVitals.attributes.sections !='undefined') &&(eVitals["VitalsTaken"]==true))
            {
                var _pSG = [];  //if no sections, NA values                        
                _pSG= getSectionIndex(pVitals.attributes.sections[xx], "eVitals.StrokeScaleGroup");
                if (_pSG!= -1)
                {        
                    VitalGroup["StrokeScaleGroup"]=11
                    var _ePSG = [];
                    var _ePSG = pVitals.attributes.sections[_sectionIndex[xx]].attributes.sections[_pSG].attributes.elements;
                    if(eVitals["VitalsTaken"]==true)
                    {
                        eVitals["HasSSG"] = true;
                    }    
                }
            };

        
            //eVital.29/////////////////////////////   
            var _vitals=[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;
            if(eVitals["HasSSG"] ==true)
            {
                _vitals = getValue(_eL, "eVitals.29");
                if (_vitals.IsNull == true) 
                {
                    if (_vitals.pn == "UnabletoComplete") 
                    {
                        _val.push("8801023");
                        valObj.PN = true; 
                    }
                    else if (_vitals.pn == "Refused") {
                        _val.push("8801019");
                        valObj.PN = true; 
                    }
                    else {
                        if (isRequiredStateElement("eVitals.29")) {
                            _val.push("7701003");
                            valObj.NV = true; 
                        }
                        else {
                            _val.push("7701005");
                            valObj.NV = true; 
                        }
                    }
                }
                else {
                    _val.push(_vitals.ValueArray[0].val);
                    valObj.IsNull = false;                        
                }     
            }
            else
            {
                _val.push("7701001");
                valObj.NV = true;
            };
                    
            valObj.vSet = _val.slice(0);
            VitalGroup["eVitals.29"] = valObj;
            delete valObj;       


            //eVital.30/////////////////////////////   
            var _vitals=[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;
            if(eVitals["HasSSG"] ==true)
            {
                _vitals = getValue(_eL, "eVitals.30");
                if (_vitals.IsNull == true) 
                {
                    if (_vitals.pn == "UnabletoComplete") 
                    {
                        _val.push("8801023");
                        valObj.PN = true; 

                    }
                    else if (_vitals.pn == "Refused") 
                    {
                        _val.push("8801019");
                        valObj.PN = true; 
                    }
                    else 
                    {
                        if (isRequiredStateElement("eVitals.30")) 
                        {
                            _val.push("7701003");
                            valObj.NV = true; 

                        }
                        else 
                        {
                            _val.push("7701005");
                            valObj.NV = true; 

                        }
                    }
                }
                else {
                    _val.push(_vitals.ValueArray[0].val);
                    valObj.IsNull = false;
                }
            }
            else 
            {
                _val.push("7701001");
                valObj.NV = true; 
            }
            
                
            valObj.vSet = _val.slice(0);
            VitalGroup["eVitals.30"] = valObj;
            delete valObj;       

            //eVital.31/////////////////////////////   
            var _vitals=[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;
            if(eVitals["VitalsTaken"] ==true)
            {
                _vitals = getValue(_eL, "eVitals.31");
                if (_vitals.IsNull == true) 
                {
                    if (_vitals.pn== "UnabletoComplete")
                    {
                        _val.push("8801023");
                        valObj.PN = true;             
                    }
                    else if (_vitals.pn == "Refused")
                    {
                        _val.push("8801019");
                        valObj.PN = true;             
                    }
                    else 
                    {
                        if (isRequiredStateElement("eVitals.31")) 
                        {                           
                            _val.push("7701003");
                            valObj.NV = true;             

                        }
                        else 
                        {
                            _val.push("7701005");
                            valObj.NV = true;  
                        }
                    }
                }
                else 
                {
                    _val.push(_vitals.ValueArray[0].val);
                    valObj.IsNull = false;
                };
     
            }   
            else
            {
                _val.push("7701001");
                valObj.NV = true;  
        
            };
     
            valObj.vSet = _val.slice(0);
            VitalGroup["eVitals.31"] = valObj;
            delete valObj;       


            //eVital.32/////////////////////////////   
            var _vitals=[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;
            if(eVitals["VitalsTaken"] ==true)
            {
                _vitals = getValue(_eL, "eVitals.32 ");
                if (_vitals.IsNull == true)    
                {
                    if (_vitals.HasPN == true)
                    {                     
                        _val.push("8801023");
                        valObj.PN = true;             
                    }
                }                
                else
                {
                    _val.push(_vitals.ValueArray[0].val);
                    valObj.IsNull = false;
                };
            
                valObj.vSet = _val.slice(0);
                VitalGroup["eVitals.32"] = valObj;
                delete valObj;       
            };
            //eVital.33/////////////////////////////   
            var _vitals=[];
            var _val = [] ;       
            var valObj = {};
            valObj.IsNull = true;
            if(eVitals["VitalsTaken"] ==true)
            {
                _vitals = getValue(_eL, "eVitals.33");            
                if (_vitals.IsNull == true)    
                {                    
                    if (_vitals.HasPN == true) 
                    {
                        if (_vitals.pn == "Refused") 
                        {
                            _val.push("8801019");
                            valObj.PN = true;             
                        }
                        else if (_PNValue == "UnabletoComplete") 
                        {
                            _val.push("8801023");
                            valObj.PN = true;             
                        }
                    }
                }
            }
            else 
            {      
                _val.push(_vitals.ValueArray[0].val);
                valObj.vSet = _val.slice(0);
                VitalGroup["eVitals.32"] = valObj;
                delete valObj;       
            };
            VGArray.push(VitalGroup)
        };
        if(VGArray.length >0)
        {
            eVitals.VitalGroup=VGArray.slice();
        }
    };

      
    console.log(eVitals)
    return eVitals;                
    */
};        
