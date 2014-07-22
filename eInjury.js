var ErrorList = [];
var v3NOT_REPORTING = " NV=\"7701005\"";
var v3NOT_RECORDED = " NV=\"7701003\"";
var v2NOT_AVAILABLE = "-5";
var v2NOT_REPORTING = "-15";
var v2NOT_APPLICABLE = "-25"
var v2NOT_RECORDED = "-20";
var v2NOT_KNOWN = "-10";
var NIL_V3NOT_RECORDED =  "NV=\"7701003\" xsi:nil=\"true\"/>" ;
var NIL_V3NOT_REPORTING = "NV=\"7701005\" xsi:nil=\"true\"/>" ;
var NIL_V3NOT_APPLICABLE ="NV=\"7701001\" xsi:nil=\"true\"/>" ;
var PN_REFUSED_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801019\"/>";
var PN_UNABLE_TO_COMPLETE_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801023\"/>";
var PN_FINDING_NOT_PRESENT_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801005\"/>";
var FAX= "PhoneNumberType=\"9913001\"";
var HOME= "PhoneNumberType=\"9913003\"";
var MOBILE= "PhoneNumberType=\"9913005\"";
var PAGER= "PhoneNumberType=\"9913007\"";
var WORK= "PhoneNumberType=\"9913009\"";
var PERSONALEMAIL= "EmailAddressType=\"9904001\"";
var WORKEMAIL= "EmailAddressType=\"9904003\"";
var KPH= "VelocityUnit=\"9921001\"";
var MPH= "VelocityUnit=\"9921003\"";
var DELTA_VELOCITY_ORDINAL= "DeltaVelocityOrdinal=";
var MPH= "VelocityUnit=\"9921003\"";


var _retArray = [];

var getSectionIndex = function (sectionObject, sectionName)
    //Returns an array of index values for a given sectionName within a sectionObject
    // if sectionName does not exist within the sectionObject, return -1
{
    var _retValue = [];
    for (var d = 0; d < sectionObject.sections.length; d++) {
        if (sectionObject.sections[d].attributes.name == sectionName) {
            _retValue.push(d);
        }
    }
    if (_retValue.length == 0) {
        _retValue.push(-1);
    }
    return _retValue;
};
var seteInjury = function (businessObject) 
{
    if(typeof businessObject == undefined)
    {
        SetNotApplicable();
    }
 
    if(typeof businessObject["eInjury"] != undefined)
    {
        //eInjury.01///////////////////

        var isNotApplicableFlag = true;  //once I have real data, set to False
        _val = getValue(businessObject.elements, "eInjury.01");
        if (_val == null)
        {
            eInjury["CauseofInjury"] = "NOT RECORDED";
            eInjury["eInjury.01"] = V3NOT_RECORDED;
            v2Array.push({ section: "E10", element: "E10_01", val:  v2NOT_RECORDED});          
        }
        else 
        {
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _val.length; i++) 
            {
                arr1.push(_val[i]);
                arr2.push(setV2("eInjury.01", _val[i]));
                arr3.push(setCodeText("eInjury.01", _val[i]));
            };
            isNotApplicableFlag = false;
            eInjury["eInjury.01"] = arr1.slice(0);            
            eInjury["CauseofInjury"] = arr3.slice(0);  
            v2Array.push({ section: "E10", element: "E10_01", val:  arr2.slice(0)});          
        }; 

        //eInjury.02///////////////////
        _val = getValue(businessObject.elements, "eInjury.02");
        if (_val == null)
        {
            if(isRequiredStateElement("eInjury.02"))
            {
                eInjury["eInjury.01"] = V3NOT_RECORDED;
                eInjury["MechanismofInjury"] = "NOT RECORDED";
                v2Array.push({ section: "E10", element: "E10_03", val: V2NOT_RECORDED});                          
            }            
            else
            {
                eInjury["eInjury.02"] = v3NOT_REPORTING;
                eInjury["MechanismofInjury"] = "NOT REPORTING";
                v2Array.push({ section: "E10", element: "E10_03", val: v2NOT_REPORTING});                
            }
        }
        else 
        {
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _val.length; i++) 
            {
                arr1.push(_val[i]);
                arr2.push(setV2("eExam.04", _val[i]));
                arr3.push(setCodeText("eExam.04", _val[i]));
            };
            eInjury["eInjury.02"] = arr1.slice(0);
            eInjury["MechanismofInjury"] = arr3.slice(0);
            v2Array.push({ section: "E10", element: "E10_03", val: arr2.slice(0)});                
            isNotApplicableFlag = false;
        }; 


        //eInjury.03///////////////////
        _val = getValue(businessObject.elements, "eInjury.03");
        if (_val == null)
        {
            if(isRequiredStateElement("eInjury.03"))
            {
                eInjury["eInjury.03"] = V3NOT_RECORDED;
                eInjury["TraumaCenterCriteria"] = "NOT RECORDED";
            }
        }
        else 
        {
            var arr1 = [];
            var arr3 = [];
            for (var i = 0; i < _val.length; i++) 
            {
                arr1.push(_val[i]);
                arr3.push(setCodeText("eExam.04", _val[i]));
            };
            eInjury["eInjury.03"] = arr1.slice(0);
            eInjury["TraumaCenterCriteria"] = arr3.slice(0);
        }; 

        
        alert("eInjury.04 PN")
        //eInjury.04///////////////////
        _val = getValue(businessObject.elements, "eInjury.04");
        if (_val == null)
        {
            PNValue = getPertinentNegative("eInjury.04")
            if(PNValue != null)
            {
                if(PNValue =="8801005")
                {
                    eInjury["VehicularPedestrianorOtherInjuryRiskFactor"] = "REFUSED";
                    eInjury["eInjury.04"] = PN_REFUSED_IS_NILLABLE;
                    v2Array.push({ section: "E16", element: "E16_02", val: v2NOT_KNOWN});       
                }
            }
            else 
            {
                eInjury["VehicularPedestrianorOtherInjuryRiskFactor"] = "NOT RECORDED";
                eInjury["eInjury.04"] = V3NOT_RECORDED;
                v2Array.push({ section: "E10", element: "E10_04", val:  V2NOT_RECORDED});                
            }
        }
        else 
        {
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _val.length; i++) 
            {
                arr1.push(_val[i]);
                arr2.push(setV2("eInjury.04", _val[i]));
                arr3.push(setCodeText("eInjury.04", _val[i]));
            };
            eInjury["eInjury.04"] = arr1.slice(0);
            eInjury["VehicularPedestrianorOtherInjuryRiskFactor.04"] = arr3.slice(0);
            v2Array.push({ section: "E10", element: "E10_04", val:  arr2.slice(0)});     
        }; 

        ///eInjury.05////////////
        _val = getValue(businessObject.elements, "eInjury.05");
        if (_val == null)
        {
            if(isRequiredStateElement("eInjury.05"))
            {
                eInjury["eInjury.05"] = null;
                eInjury["MainAreaoftheVehicleImpactedbytheCollision"] = null;
                v2Array.push({ section: "E10", element: "E10_05", val:  null});
            }
        }
        else 
        {
            eInjury["eInjury.05"] = _val[0];
            eInjury["MainAreaoftheVehicleImpactedbytheCollision"] = _val[0];
            v2Array.push({ section: "E10", element: "E10_05", val:  setV2("eInjury.05",_val[0])}); 
        }; 

        //eInjury.06///////////
        _val = getValue(businessObject.elements, "eInjury.06");
        if (_val == null)
        {
            eInjury["eInjury.06"] = null;
            eInjury["LocationofPatientinVehicle"] = null;
            v2Array.push({ section: "E10", element: "E10_06", val:  null});         
        }
        else 
        {
            eInjury["eInjury.06"] = _val[0];
            eInjury["LocationofPatientinVehicle"] = setCodeText("eInjury.06", _val[0]);
            v2Array.push({ section: "E10", element: "E10_06", val:  setV2("eInjury.06",_val[0])}); 
        }; 

        //eInjury.07/////////
        _val = getValue(businessObject.elements, "eInjury.07");
        if (_val == null)
        {
            if(isRequiredStateElement("eInjury.07"))
            {
                eInjury["eInjury.07"] = V3NOT_RECORDED;
                eInjury["UseofOccupantSafetyEquipment"] = "NOT RECORDED";
                v2Array.push({ section: "E10", element: "E10_08", val:  V2NOT_RECORDED});
            }            
            else
            {
                eInjury["eInjury.07"] = v3NOT_REPORTING;
                eInjury["UseofOccupantSafetyEquipment"] = "NOT REPORTING";
                v2Array.push({ section: "E10", element: "E10_08", val:  v2NOT_REPORTING});
            }
        }
        else 
        {         
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _val.length; i++) 
            {
                arr1.push(_val[i]);
                arr2.push(setV2("eInjury.07", _val[i]));
                arr3.push(setCodeText("eInjury.07", _val[i]));
            };
            eInjury["eInjury.07"] = arr1.slice(0);
            eInjury["UseofOccupantSafetyEquipment"] = arr3.slice(0);
            v2Array.push({ section: "E10", element: "E10_08", val:  arr2.slice(0)});
        }; 

        //eInjury.08//////////
        _val = getValue(businessObject.elements, "eInjury.08");
        if (_val == null) 
        {          
            eInjury["eInjury.08"] = null;
            eInjury["AirbagDeployment"] = null;
            v2Array.push({ section: "E10", element: "E10_09", val:  null});
        }
        else 
        {
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _val.length; i++) 
            {
                arr1.push(_val[i]);
                arr2.push(setV2("eInjury.08", _val[i]));
                arr3.push(setCodeText("eInjury.08", _val[i]));
            };
            eInjury["eInjury.08"] = arr1.slice(0);
            eInjury["AirbagDeployment"] = arr3.slice(0);
            v2Array.push({ section: "E10", element: "E10_09", val:arr2.slice(0)});
        }; 
    };

    //eInjury.09/////////////
    _val = getValue(businessObject.elements, "eInjury.09");
    if (_val == null) 
    {
        eInjury["eInjury.09"] = null;
        eInjury["HeightofFall"] = null;
        v2Array.push({ section: "E10", element: "E10_10", val:  null});
    }
    else 
    {
        eInjury["eInjury.09"] = _val[0];
        eInjury["HeightofFall"] = _val[0];
        v2Array.push({ section: "E10", element: "E10_10", val:  _val});
    };
          
    //eInjury.10///////////////
    _val = getValue(businessObject.elements, "eInjury.10");
    if (_val == null) 
    {
        eInjury["eInjury.10"] = null;
        eInjury["OSHAPersonalProtectiveEquipmentUsed"] = null;
    }
    else 
    {     
        var arr1 = [];        
        var arr3 = [];
        for (var i = 0; i < _val.length; i++) 
        {
            arr1.push(_val[i]);    
            arr3.push(setCodeText("eInjury.10", _val[i]));
        };
        eInjury["eInjury.10"] = arr1.slice(0);
        eInjury["OSHAPersonalProtectiveEquipmentUsed"] = arr3.slice(0);
    };

    //eInjury.11///////
    _val = getValue(businessObject.elements, "eInjury.11");
    if (_val == null) 
    {
        eInjury["eInjury.11"] = null;   
        eInjury["ACNSystemCompanyProvidingACNData"] = null;   
    }
    else {
        eInjury["ACNSystemCompanyProvidingACNData"] = _val[0];
        eInjury["eInjury.11"] = _val[0];
    };


    //eInjury.12///////////
    _val = getValue(businessObject.elements, "eInjury.12");
    if (_val == null) 
    {
        CollisionGroup["eInjury.12"] = null;
        CollisionGroup["ACNIncidentID"] = null;
        
    }
    else 
    {        
        CollisionGroup["ACNIncidentID"] = _val[0];
        CollisionGroup["eInjury.12"] = _val[0];
    };

    //eInjury.13/////////////
    _val = getValue(businessObject.elements, "eInjury.13");
    if (_val == null) 
    {
        CollisionGroup["eInjury.13"] = null;       
        CollisionGroup["ACNCallBackPhoneNumber"] = null;       
    }
    else 
    {
        var arr1 = [];
        _phoneNumberType = getPhoneNumber(_val[0])
        if(_phoneNumberType !=null)
        {
            for (var i = 0; i < _val.length; i++) 
            {
                arr1[i] = _val[i];
                if (_phoneNumberType == "9913001") 
                {             
                    CollisionGroup["eInjury.13"] = FAX + " " +_val[i];
                    CollisionGroup["ACNCallBackPhoneNumber"] = FAX + " " +_val[i];                
                }
                else if (_phoneNumberType == "9913003") 
                {
                    CollisionGroup["eInjury.13"] = HOME + " " +_val[i];
                    CollisionGroup["ACNCallBackPhoneNumber"] = HOME + " " +_val[i];                
                }
                else if (_phoneNumberType == "9913005") 
                {
                    CollisionGroup["eInjury.13"] = MOBILE + " " +_val[i];
                    CollisionGroup["ACNCallBackPhoneNumber"] = MOBILE + " " +_val[i];
                }
                else if (_phoneNumberType == "9913007") 
                {
                    CollisionGroup["ACNCallBackPhoneNumber"] = PAGER + " " +_val[i];
                    CollisionGroup["eInjury.13"] = PAGER + " " +_val[i];
                }
                else if (_phoneNumberType == "9913009") 
                {
                    CollisionGroup["ACNCallBackPhoneNumber"] = WORK + " " +_val[i];
                    CollisionGroup["eInjury.13"] = WORK + " " +_val[i];
                }
                else if (_phoneNumberType == "9913003")
                {
                    CollisionGroup= _val[i];
                    CollisionGroup["eInjury.13"] = _val[0];
                }
            }
        }; 
    };

    //eInjury.14///////////////
    _val = getValue(businessObject.elements, "eInjury.14");
    if (_val == null) 
    {
        CollisionGroup["eInjury.14"] = null;               
        CollisionGroup["DateTimeofACNIncident"] = null;    
    }
    else 
    {
        CollisionGroup["DateTimeofACNIncident"] = _val[0];    
        CollisionGroup["eInjury.14"] = _val[0];
    };
          
    //eInjury.15//////////////  
    _val = getValue(businessObject.elements, "eInjury.15");
    if (_val == null) 
    {
        CollisionGroup["ACNIncidentLocation"] = null;        
        CollisionGroup["eInjury.15"] = null;        
    }
    else 
    {
        CollisionGroup["ACNIncidentLocation"] = _val[0];
        CollisionGroup["eInjury.15"] = _val[0];
    };

    //eInjury.16//////////////
    _val = getValue(businessObject.elements, "eInjury.16");
    if (_val == null) 
    {
        CollisionGroup["ACNIncidentVehicleBodyType"] = null;            
        CollisionGroup["eInjury.16"] = null;                       
    }
    else 
    {
        CollisionGroup["ACNIncidentVehicleBodyType"] = _val[0];            
        CollisionGroup["eInjury.16"] = _val[0];
    };

    //eInjury.17//////////////
    _val = getValue(businessObject.elements, "eInjury.17");
    if (_val == null) 
    {
        CollisionGroup["eInjury.17"] = null;                       
        CollisionGroup["ACNIncidentVehicleManufacturer"] = null;                       
    }
    else 
    {
        CollisionGroup["ACNIncidentVehicleManufacturer"] = _val[0];
        CollisionGroup["eInjury.17"] = _val[0];
    };

    //eInjury.18//////////////
    _val = getValue(businessObject.elements, "eInjury.18");
    if (_val == null) 
    {
        CollisionGroup["eInjury.18"] = null;      
        CollisionGroup["ACNIncidentVehicleMake"] = null;                  
    }
    else 
    {
        CollisionGroup["ACNIncidentVehicleMake"] = _val[0];      
        CollisionGroup["eInjury.18"] = _val[0];
    };

    //eInjury.19//////////////
    _val = getValue(businessObject.elements, "eInjury.19");
    if (_val == null) 
    {
        CollisionGroup["ACNIncidentVehicleModel"] = null;                                   
        CollisionGroup["eInjury.19"] = null;                                   
    }
    else 
    {
        CollisionGroup["ACNIncidentVehicleModel"] = _val[0];
        CollisionGroup["eInjury.19"] = _val[0];
    };

    //eInjury.20//////////////
    _val = getValue(businessObject.elements, "eInjury.20");
    if (_val == null) 
    {
        CollisionGroup["ACNIncidentVehicleModelYear"] = null;   
        CollisionGroup["eInjury.20"] = null;                               
    }
    else 
    {
        CollisionGroup["ACNIncidentVehicleModelYear"] = _val[0];   
        CollisionGroup["eInjury.20"] = _val[0];
    };

    //eInjury.21//////////////
    _val = getValue(businessObject.elements, "eInjury.21");
    if (_val == null) 
    {
        CollisionGroup["ACNIncidentMultipleImpacts"] = null;                               
        CollisionGroup["eInjury.21"] = null;                               
    }
    else 
    {
        CollisionGroup["eInjury.21"] = _val[0];
        CollisionGroup["ACNIncidentMultipleImpacts"] = _val[0];
    };


    //eInjury.22//////////////
    _val = getValue(businessObject.elements, "eInjury.22");
    if (_val == null) 
    {
        CollisionGroup["eInjury.22"] = null;
        CollisionGroup["ACNIncidentDeltaVelocity"] = null;
    }
    else 
    {
        var arr1 = [];        
        for (var i = 0; i < _val.length; i++) 
        {
            _velocityUnit = getVelocityUnit(_val[0]);
            if(_velocityUnit !=null)
                {
                if(_velocityUnit == 9921001 )
                {                    
                    arr1.push(KPH + _val[i]);                 
                }
                else if(_velocityUnit == 9921003 )
                {
                    arr1.push(MPH + _val[i]);                
                }
                else
                {
                    arr1.push(_val[i]);                
                }
            }
            eInjury["eInjury.22"] = arr1.slice(0);
        };


        //eInjury.23///////////
        _val = getValue(businessObject.elements, "eInjury.23");
        if (_val == null) 
        {
            CollisionGroup["ACNHighProbabilityofInjury"] = null;
            CollisionGroup["eInjury.22"] = null;
        }
        else 
        {
            CollisionGroup["ACNHighProbabilityofInjury"] =  setCodeText("eInjury.23",_val[0]);;
            CollisionGroup["eInjury.23"] = _val;
        };

        //eInjury.24/////////////
        _val = getValue(businessObject.elements, "eInjury.24");
        if (_val == null) 
        {
            CollisionGroup["ACNHighProbabilityofInjury"] = null;
            CollisionGroup["eInjury.22"] = null;
        }
        else 
        {
            CollisionGroup["ACNHighProbabilityofInjury"] = _val[0];
            CollisionGroup["eInjury.24"] = _val[0];
        };
    };
        	
    _sectionIndex = getSectionIndex(businessObject.sections[xx].attributes, "eInjury.SeatGroup");      
    for (var x = 0; x <_sectionIndex.length; x++)
    {     	
        elementList = businessObject.sections[i].attributes.elements;
         
        //eInjury.25////////
        _val = getValue(elementList, "eInjury.25");
        if (_val == null) 
        {
            SeatGroup["ACNIncidentRollover"] = null;                                                     
            SeatGroup["eInjury.25"] = null;                                                     
        }
        else 
        {
            SeatGroup["ACNIncidentRollover"] = _val[0];
            SeatGroup["eInjury.25"] = setCodeText("eInjury.25", _val[0]);
        };

        //eInjury.26////////                        
        _val = getValue(elementList, "eInjury.26");
        if (_val == null) 
        {
            SeatGroup["ACNVehicleSeatLocation"] = null;
            SeatGroup["eInjury.26"] = null;                                                   
        }
        else 
        {
            SeatGroup["eInjury.26"] = setCodeText("eInjury.26", _val[0]);
            SeatGroup["eInjury.26"] = _val[0];
        };

        //eInjury.27////////
        _val = getValue(businessObject.elements, "eInjury.27");
        if (_val == null) 
        {
            OLAPArray.push('/t/t' + "<SeatOccupied>" + null + "</>" + '\n');
            CollisionGroup["SeatOccupied"] = null;                           
            CollisionGroup["eInjury.27"] = null;                                                               
        }
        else 
        {            
            SeatGroup["eInjury.27"] = setCodeText("eInjury.27", _val[0]);
            SeatGroup["eInjury.27"] = _val[0];
        };

        //eInjury.28////////
        _val = getValue(businessObject.elements, "eInjury.28");
        if (_val == null) 
        {
            OLAPArray.push('/t/t' + "<SeatOccupied>" + null + "</>" + '\n');
            CollisionGroup["SeatOccupied"] = null;                                                               
            CollisionGroup["eInjury.28"] = null;                                                               
            
        }
        else 
        {
            SeatGroup["eInjury.28"] = setCodeText("eInjury.28", _val[0]);
            SeatGroup["eInjury.28"] = _val[0];
        };

        //eInjury.29////////
        _val = getValue(businessObject.elements, "eInjury.29");
        if (_val == null) 
        {
            SeatGroup["ACNIncidentSeatbeltUse"] = null;
            CollisionGroup["eInjury.29"] = null;                                                                                       
        }
        else 
        {
            SeatGroup["ACNIncidentSeatbeltUse"] = setCodeText("eInjury.29", _val[0]);
            SeatGroup["eInjury.29"] = _val[0];
        };

    };
};

    var isRequiredStateElement = function (elementID) {
        return true;
    };
    var getValue = function (payload, valueObject) {


        var _retValue = null;
        var _bFound = false;
        i = 0;
        while (i < payload.length) {
            if (_bFound == false) {
                _retVal = null;
                if (payload[i].name == valueObject) {
                    _bFound = true;
                    if (payload[i].values == undefined) {

                        _retVal = null;
                    }
                    else {
                        _retVal = payload[i].values;
                    }
                }
            }
            i++;
        }
        return _retVal;
    };

    function SetNotApplicable() 
    {
        eInjury["eInjury.01"] = V3NOT_APPLICABLE
        E10.E10_01 = v2NOT_APPLICABLE;
        _retArray.push("<eInjury.01" + NIL_V3NOT_APPLICABLE );

        eInjury["eInjury.02"] = V3NOT_APPLICABLE
        E10.E10_03 = v2NOT_APPLICABLE;
        _retArray.push("<eInjury.02" + NIL_V3NOT_APPLICABLE );

        eInjury["eInjury.03"] = V3NOT_APPLICABLE      
        _retArray.push("<eInjury.03" + NIL_V3NOT_APPLICABLE );

        eInjury["eInjury.04"] = V3NOT_APPLICABLE
        E10.E10_04 = v2NOT_APPLICABLE;
        _retArray.push("<eInjury.04" + NIL_V3NOT_APPLICABLE );

        eInjury["eInjury.05"] = V3NOT_APPLICABLE
        E10.E10_05 = v2NOT_APPLICABLE;
        _retArray.push("<eInjury.05" + NIL_V3NOT_APPLICABLE );

        eInjury["eInjury.06"] = V3NOT_APPLICABLE
        E10.E10_06 = v2NOT_APPLICABLE;
        _retArray.push("<eInjury.06" + NIL_V3NOT_APPLICABLE );

        eInjury["eInjury.07"] = V3NOT_APPLICABLE
        E10.E10_08 = v2NOT_APPLICABLE;
        _retArray.push("<eInjury.07" + NIL_V3NOT_APPLICABLE );

        
        eInjury["eInjury.08"] = V3NOT_APPLICABLE
        E10.E10_09 = v2NOT_APPLICABLE;
        _retArray.push("<eInjury.08" + NIL_V3NOT_APPLICABLE );

        
        eInjury["eInjury.09"] = V3NOT_APPLICABLE
        E10.E10_10 = v2NOT_APPLICABLE;
        _retArray.push("<eInjury.09" + NIL_V3NOT_APPLICABLE );

    };
    function setD2(NEMSISElementNumber, valueArray) {
        //    console.log(NEMSISElementNumber);
        var _retArray = [];
        //    console.log(valueArray);
        switch (NEMSISElementNumber) {
            case "eInjury.01":

                if (eInjury01[valueArray[0]] == undefined) {
                    _retArray.push(valueArray[0] + "UNDEFINED");
                }
                else {
                    _retArray.push(eInjury01[valueArray[0]]);
                }
                break;
            case "eInjury.02":
                for (i = 0; i < valueArray.length; i++) {
                    if (eInjury02[valueArray[i]] == undefined) {
                        _retArray.push(valueArray[i] + "UNDEFINED");
                    }
                    else {
                        _retArray.push(eInjury02[valueArray[i]]);
                    }
                }
                break;
            case "eInjury.04":

                if (eInjury04[valueArray[0]] == undefined) {
                    _retArray.push(valueArray[0] + "UNDEFINED");
                }
                else {
                    _retArray.push(eInjury04[valueArray[0]]);
                }
                break;
            case "eInjury.05":

                if (eInjury05[valueArray[0]] == undefined) {
                    _retArray.push(valueArray[0] + "UNDEFINED");
                }
                else {
                    _retArray.push(eInjury05[valueArray[0]]);
                }
                break;

            case "eInjury.06":
                alert("DO IT");
                if (eInjury06[valueArray[0]] == undefined) {
                    _retArray.push(valueArray[0] + "UNDEFINED");
                }
                else {
                    _retArray.push(eInjury06[valueArray[0]]);
                }
                break;
            case "eInjury.07":
                if (eInjury07[valueArray[0]] == undefined) {
                    _retArray.push(valueArray[0] + "UNDEFINED");
                }
                else 
                {
                    _retArray.push(eInjury07[valueArray[0]]);
                }
                break;
            case "eInjury.08":
                if (eInjury08[valueArray[0]] == undefined) 
                {
                    _retArray.push(valueArray[0] + "UNDEFINED");
                }
                else 
                {
                    _retArray.push(eInjury08[valueArray[0]]);
                }
                break;


            default:
                _retArray.push(NEMSISElementNumber = " version 2 not found");
        }

        return _retArray;

    }

    var eInjury01 = {
        "V95.9":"9500", 
        "V97":"9500", 
        "V97.2":"9500", 
        "V95.9":"9500", 
        "V96.9":"9500", 
        "V00.8":"9505",
        "V19.3":"9505",
        "V19.9":"9505",
        "W50":"9510", 
        "W54":"9510", 
        "W55":"9510", 
        "W53":"9510",
        "W64":"9510",
        "T50.90":"9515", 
        "T64":"9515",
        "T58.9":"9515",
        "T63":"9515",
        "T55":"9515",
        "T51.9":"9515",
        "T59.9":"9515",
        "T57.9":"9515",
        "T62.9":"9515",
        "T60.9":"9515",
        "T61.9":"9515",
        "T65.9":"9515",
        "T54.9":"9515",
        "T53.9":"9515",
        "T56.9":"9515",
        "T52.9":"9515",
        "T76.9":"9520",
        "W65":"9525",
        "W69":"9525",
        "V92":"9525", 
        "V90":"9525",
        "V92":"9525",
        "V90":"9525",
        "X38":"9525",
        "X37.0":"9525",
        "X71.9":"9525",
        "W74":"9525",
        "Y21.9":"9525",
        "W85":"9535",
        "T75.4":"9535",
        "X37.2":"9540",
        "W93":"9540", 
        "X31":"9540",
        "X11":"9545",
        "X11.0":"9545",
        "X19":"9545",
        "X12":"9545",
        "X18":"9545",
        "W92":"9545",
        "X30":"9545", 
        "X32":"9545",
        "X77.9":"9545",
        "X35":"9545",
        "Y27.9":"9550",
        "W52":"9550",
        "X34":"9550", 
        "W10.9":"9550",
        "W06":"9550",
        "W07":"9550",
        "W15":"9550",
        "W05":"9550",
        "W18.1":"9550",
        "W08":"9550",
        "W14":"9550",
        "W13.9":"9550",
        "W13.2":"9550",
        "W13.4":"9550",
        "W18.2":"9550",
        "W11":"9550",
        "W09":"9550",
        "W12":"9550",
        "W01":"9550",
        "W04":"9550",
        "W16":"9550",
        "Y30":"9550",
        "Y31":"9550",
        "X75":"9550",
        "X80":"9550",
        "17":"9550",
        "18":"9550",
        "W18.4":"9550",
        "V00.31":"9550",
        "V00.32":"9550",
        "W00.9":"9550",
        "X37.1":"9550",
        "W39":"9555", 
        "W38":"9555",
        "W40.9":"9555",
        "X02":"9555",
        "X03":"9555",
        "X04":"9555",
        "X06":"9555",
        "X00":"9555",
        "X01":"9555",
        "X75":"9555", 
        "X75":"9555",
        "W34":"9565",
        "W32":"9565", 
        "Y24.9":"9565",	
        "X74.9":"9570",
        "T75.0":"9575",
        "Y25":"9580",
        "X14":"9580",
        "X10":"9580",
        "X17":"9580",
        "X16":"9580",
        "X15":"9580",
        "W94":"9580",
        "W42":"9580",
        "W89.9":"9580",
        "W28":"9580",
        "V00.1":"9580",
        "V00.812":"9580",
        "T71.23":"9585",
        "T71.22":"9585", 
        "T71.13":"9585", 
        "T71.29":"9585", 
        "T71.21":"9585", 
        "T71.16":"9585", 
        "T71.1":"9585", 
        "T71.19":"9585", 
        "T71.12":"9585", 
        "T71.15":"9585", 
        "T71.14":"9585", 
        "T71.11":"9585",
        "T71.20":"9585",  
        "T71.9":"9585", 
        "X36":"9585", 
        "W99":"9585", 
        "W22.8":"9585", 
        "W21":"9585",
        "V69.3":"9590",
        "V69.9":"9590",
        "V59.3":"9590",
        "V59.9":"9590",
        "V39.3":"9590",
        "V39.9":"9590",
        "V81.9":"9590",
        "V82.9":"9590",
        "V81.9":"9590",
        "V86.99":"9590",
        "V84.9":"9590",
        "V85.9":"9590",
        "V83.9":"9590",
        "V79.3":"9595",
        "V79.9":"9595",
        "V49.3":"9595",
        "V49.9":"9595",
        "Y32":"9595",
        "X82":"9595",
        "V40.9":"9595",
        "V86.31":"9595",
        "V70.9":"9595",
        "V60.9":"9595",
        "V86.94":"9595",
        "V86.34":"9595",
        "V86.39":"9595",
        "V50.9":"9595",
        "V86.92":"9595",
        "V86.32":"9595",
        "V30.9":"9595",
        "V99":"9595",
        "V29.3":"9600",
        "V29.9":"9600",
        "V20.9":"9600",
        "V89.9":"9605",
        "V80.9":"9610",
        "V00.8":"9610",
        "V00.8":"9610",
        "Y03.0":"9610",
        "V00.2":"9610", 
        "X81":"9610",
        "V19.3":"9610",
        "V19.9":"9610",
        "V03.0":"9610",
        "V03.1":"9610",
        "V03.9":"9610",
        "V04.0":"9610",
        "V04.1":"9610",
        "V04.9":"9610",
        "V06.9":"9610",
        "V01":"9610",
        "V05.9":"9610",
        "V02.9":"9610",
        "V09.9":"9610",
        "V00.0":"9610",
        "V00.38":"9610",
        "V00.13":"9610",
        "W88":"9615",
        "W90":"9615",	
        "X02.1":"9625",
        "X03.1":"9625",
        "X00.1":"9625",
        "X01.1":"9625",
        "Y26":"9625",
        "X76":"9625",
        "W23":"9630",
        "Y29":"9630",
        "W25":"9630",
        "Y28.9":"9630",
        "W45":"9630", 
        "Y35":"9630",
        "X78.9":"9630",
        "W49.0":"9630",
        "W46":"9635", 
        "X79":"9635", 
        "X83":"9635",
        "Y37.9":"9635",
        "Y36.9":"9635",
        "T14.91":"9635", 
        "Y38":"9635",
        "Y38.6":"9635",
        "Y38.7":"9635",
        "W26":"9640", 
        "W20":"9640",
        "X37.9":"9640",	
        "W24":"9645",
        "T50.90":"9645",
        "W60":"9650", 
        "V93":"9650",
        "V91":"9650",
        "V94.9":"9650",
        "Y04.1":"1885",
        "Y03.0":"9595",
        "Y00":"9640",
        "Y04":"9635",
        "Y03":"9600",
        "X92.9":"9635",
        "Y04.1":"1885",
        "Y08":"9635",
        "Y01":"9635",
        "Y02":"9635",
        "X97":"9635",
        "X96.9":"9635",
        "X95.9":"9635",
        "X98.9":"9635",
        "X99.9":"9635",
        "Y09":"9635", 
        "Y38":"9635",
        "Y38.6":"9635",
        "X74":"9570", 
        "X75":"9625", 
        "X74.9":"9570", 
        "X76":"9625",  
        "X77.9":"9625", 
        "X78.9":"9635", 
        "X79":"9640", 
        "X80":"9550",
        "X81":"9595", 
        "X82":"9595", 
        "X83":"-10", 
        "T14.91":"-10"
    };
    var eInjury02 = {
        "2902001":"2035",
        "2902003":"2040",
        "2902005":"2045",
        "2902007":"2050"
    };

var eInjury04 = 
    {

        "2904001":"2085",
        "2904003":"-10",
        "2904005":"-10",
        "2904007":"2060",
        "2904009":"2065",
        "2904011":"2075",
        "2904013":"2055",
        "2904015":"-10",
        "2904017":"-10",
        "2904019":"-10",
        "2904021":"-10",
        "2904023":"-10",
   
    };
    var eInjury05 = {
        "0":"2140",
        "1":"2125",
        "2":"2135",
        "3":"2135",
        "4":"2135",
        "5":"2130",    
        "6":"2105",    
        "7":"2115",
        "8":"2120",
        "9":"2120",
        "10":"2120",
        "11":"2110",
        "12":"2100"}

var eInjury06 = {
    if(eInjury06 = "2906001")
    {
        "E10_06":"1",
        "E10_07":"2145"
}

    if(eInjury06 = "2906003")
{
        "E10_06":"1",
        "E10_07":"2155"
}

    if(eInjury06 = "2906005")
{
        "E10_06":"1"
        "E10_07":"2165"
}

    if(eInjury06 = "2906007")
{
        "E10_06":"50"
        "E10_07":"2160"
}

    if(eInjury06 = "2906009")
{
        "E10_06":"50"
        "E10_07":"2160"
}


    if(eInjury06 = "2906011")
{
        "E10_06":"50"
        "E10_07":"2160"
}
  
    if(eInjury06 = "2906013")
{
        "E10_06":"2"
        "E10_07":"2150"
}

    if(eInjury06 = "2906015")
{
        "E10_06":"2"
        "E10_07":"2155"
}
 
     if(eInjury06 = "2906017")
{
        "E10_06":"2"
        "E10_07":"2165"
}

    if(eInjury06 = "2906019")
{
        "E10_06":"50"
        "E10_07":"2160"
}

    if(eInjury06 = "2906021")
{
        "E10_06":"3"
        "E10_07":"2150"
}
    if(eInjury06 = "2906023")
{
        "E10_06":"3"
        "E10_07":"2155"
}

    if(eInjury06 = "2906023")
{
        "E10_06":"3"
        "E10_07":"2165"
}

    if(eInjury06 = "2906023")
{
        "E10_06":"50"
        "E10_07":"2160"
}

    if(eInjury06 = "2906023")
{
        "E10_06":"50"
        "E10_07":"-10"
}

}

var eInjury07 = {
    "2907001":"2170",
    "2907003":"2175",
    "2907005":"2180",
    "2907007":"2170",
    "2907009":"2170",
    "2907015":"2187",
    "2907017":"2190",
    "2907019":"2195",
    "2907021":"2200",
    "2907027":"2210",
    "2907029":"2185",
    "2907031":"2210"
}

var eInjury08 = {
    "2908001":"2225",
    "2908003":"2230",
    "2908005":"2235",
    "2908007":"2220",
    "2908009":"2215"
}