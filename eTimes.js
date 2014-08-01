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
PN_FINDING_NOT_PRESENT_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801005\"/>";

var eTimes = new Object;
var _retArray = [];
var OLAPArray = [];

_retArray.push("<dAgency>" + '\n');
OLAPArray.push("<dAgency>" + '\n');

var seteTimes = function (businessObject) {
    if(typeof businessObject == undefined)
    {
        SetNotApplicable();
    }


    if(typeof businessObject["eTimes"] != undefined)
    {
       
        //eTimes.01//////////////////

        console.log("Need 911 Ruling on Applicable")
        _val = getValue(businessObject.elements, "eTimes.01");
        if (_val == null)
        {
            v2Array.push({ section: "E05", element: "E05_02", val: null });
            if(isRequiredStateElement("eTimes.01"))
            {
                eTimes["dTimes.01"] = v3NOT_RECORDED;
                eTimes["PSAPCallDateTime"] = v3NOT_RECORDED;
            }
        }
        else 
        {
            eTimes["PSAPCallDateTime"] = _val[0];
            eTimes["dTimes.01"] = _val[0];
            v2Array.push({ section: "E05", element: "E05_02", val: _val[0] });
        }; 

        //eTimes.02//////////////////
        _val = getValue(businessObject.elements, "dTimes.02");
        if (_val == null)
        {
            eTimes["dTimes.02"] = null
            eTimes["DispatchNotifiedDateTime"] = null;
            v2Array.push({ section: "E05", element: "E05_03", val: null });
            OLAPArray.push('\t' + "<>" + null + "</DispatchNotifiedDateTime>" + '\n');
        }
        else 
        {
            eTimes["DispatchNotifiedDateTime"] = _val[0];
            v2Array.push({ section: "E05", element: "E05_03", val: _val[0] });
            eTimes["dTimes.02"] = _val[0];
        }; 

        //eTimes.03//////////////////
        _val = getValue(businessObject.elements, "dTimes.03");
        if (_val == null)
        {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dTimes.03", Description: "Unit Notified by Dispatch Date/Time Mandatory value. " })
            eTimes["dTimes.03"] = null;
            eTimes["UnitNotifiedbyDispatchDateTime"] = null;
            v2Array.push({ section: "E05", element: "E05_04", val: null });
        }
        else 
        {
            // Time Rules:
            //eAirway.10: Date/Time Decision to Manage the Patient with an Invasive Airway should not occur prior 
            //to: Unit Notified by Dispatch Date/Time

            if (eAirwayGroup["eAirway.10"] != null) {
                if (eAirwayGroup["eAirway.10"] >= _val[0]) {
                    ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "dTimes.03", Description: "Validation Error: eAirway.10 Date/Time Decision to Manage the Patient with an Invasive Airway should not occur prior to: Unit Notified by Dispatch Date/Time" })
                }
            };

            if (eAirwayGroup["eAirway.11"] != null) {
                if (eAirwayGroup["eAirway.11"] >= _val[0]) {
                    ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "dTimes.03", Description: "Validation Error: eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Date/Time Decision to Manage the Patient with an Invasive Airway, Unit Notified by Dispatch Date/Time" })
                }
            };
            v2Array.push({ section: "E05", element: "E05_04", val: _val[0] });
            eTimes["dTimes.03"] = _val[0];
            eTimes["UnitNotifiedbyDispatchDateTime"] = _val[0];
        }; 

        //eTimes.04//////////////////
        _val = getValue(businessObject.elements, "dTimes.04");
        if (_val == null)
        {
            eTimes["dTimes.03"] = null;
            eTimes["DispatchAcknowledgedDateTime"] = null;
        }
        else 
        {

            if (eAirwayGroup["eAirway.11"] != null) {
                if (eAirwayGroup["eAirway.11"] >= _val[0]) {
                    ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "dTimes.04", Description: "Validation Error: eAirway.11: eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Dispatch Acknowledged Date/Time" })
                }
            };

            eTimes["dTimes.04"] = _val[0];
            eTimes["DispatchAcknowledgedDateTime"] = _val[0];
        }; 

        //eTimes.05//////////////////
        console.log("Business Rule Not Applicable")
        _val = getValue(businessObject.elements, "eTimes.05");
        if (_val == null)
        {
            if(isRequiredStateElement("eTimes.05"))
            {
                v2Array.push({ section: "E05", element: "E05_05", val: null });             
                eTimes["dTimes.05"] = v3NOT_RECORDED;
                eTimes["UnitEnRouteDateTime"] = NOT_RECORDED;
            }
        }
        else 
        {
            eTimes["dTimes.05"] = _val[0];
            eTimes["UnitEnRouteDateTime"] = _val[0];
            v2Array.push({ section: "E05", element: "E05_05", val: _val });
        }; 


        //eTimes.06//////////////////
        console.log("Business Rule Not Applicable")
        _val = getValue(businessObject.elements, "eTimes.06");
        if (_val == null)
        {
            if(isRequiredStateElement("eTimes.06"))
            {
                v2Array.push({ section: "E05", element: "E05_06", val: null });
                eTimes["dTimes.06"] = v3NOT_RECORDED;
                eTimes["UnitArrivedonSceneDateTime"] = NOT_RECORDED;
            }
        }
        else 
        {
            v2Array.push({ section: "E05", element: "E05_06", val: _val[0] });
            eTimes["dTimes.06"] = _val[0];
            eTimes["UnitArrivedonSceneDateTime"] = _val[0];
        }; 

        //eTimes.07//////////////////
        //eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Date/Time 
        //Arrived at Patient Date/Time. 
        console.log("Business Rule not Applicable")
        _val = getValue(businessObject.elements, "eTimes.07");
        if (_val == null)
        {
            if(isRequiredStateElement("eTimes.07"))
            {
                v2Array.push({ section: "E05", element: "E05_07", val: null });               
                eTimes["dTimes.07"] = v3NOT_RECORDED;
                eTimes["ArrivedatPatientDateTime"] = NOT_RECORDED;
            }
        }
        else 
        {
            if (eAirwayGroup["eAirway.11"] != null) {
                if (eAirwayGroup["eAirway.11"] >= _val[0]) {
                    ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "dTimes.07", Description: "Validation Error: eAirway.11: Date/Time Invasive Airway Placement Attempts Abandoned should not occur prior to: Date/Time Arrived at Patient Date/Time."  })
                }
            };

            v2Array.push({ section: "E05", element: "E05_07", val: _val[0] });
            eTimes["ArrivedatPatientDateTime"] = _val[0];
            eTimes["dTimes.07"] = _val[0];
        }; 
                
        //eTimes.08//////////////////
        console.log("Business Rule not Applicable")
        _val = getValue(businessObject.elements, "eTimes.08");
        if (_val == null)
        {
            if(isRequiredStateElement("eTimes.08"))
            {
                v2Array.push({ section: "E05", element: "E05_08", val: v2NOT_RECORDED});
                eTimes["dTimes.08"] = v3NOT_RECORDED;
                eTimes["TransferofEMSPatientCareDateTime"] = NOT_RECORDED;
            }  
            else
            {
                v2Array.push({ section: "E05", element: "E05_08", val: v2NOT_REPORTING});
                eTimes["dTimes.08"] = v3NOT_REPORTING;
                eTimes["TransferofEMSPatientCareDateTime"] = NOT_REPORTING;
            }
        }
        else 
        {
            v2Array.push({ section: "E05", element: "E05_08", val: _val});
            eTimes["TransferofEMSPatientCareDateTime"] = _val[0];
            eTimes["dTimes.08"] = _val[0];
        }; 


        //eTimes.09//////////////////
        console.log("Business Rule not Applicable")

        _val = getValue(businessObject.elements, "eTimes.09");
        if (_val == null)
        {
            if(isRequiredStateElement("eTimes.09"))
            {
                v2Array.push({ section: "E05", element: "E05_09", val: v2NOT_RECORDED});
                eTimes["dTimes.09"] = v3NOT_RECORDED;
                eTimes["UnitLeftSceneDateTime"] = NOT_RECORDED;
            }    
        }
        else 
        {
            v2Array.push({ section: "E05", element: "E05_09", val: _val[0]});
            eTimes["dTimes.09"] = _val[0];
            eTimes["UnitLeftSceneDateTime"] = _val[0];
        }; 

        //eTimes.10//////////////////
        _val = getValue(businessObject.elements, "dTimes.10");
        if (_val == null)
        {
            eTimes["dTimes.10"] = null;
            eTimes["ArrivalatDestinationLandingAreaDateTime"] = null;
        }
        else 
        {
            eTimes["ArrivalatDestinationLandingAreaDateTime"] = _val[0];
            eTimes["dTimes.10"] = _val[0];
        }; 

        //eTimes.11//////////////////
        console.log("Business Rule not Applicable")
        _val = getValue(businessObject.elements, "eTimes.11");
        if (_val == null)
        {
            if(isRequiredStateElement("eTimes.11"))
            {
                v2Array.push({ section: "E05", element: "E05_10", val: v2NOT_RECORDED});
                eTimes["dTimes.11"] = v3NOT_RECORDED;
                eTimes["PatientArrivedatDestinationDateTime"] = NOT_RECORDED;
            }  
        }
        else 
        {
            eTimes["PatientArrivedatDestinationDateTime"] = _val[0];
            v2Array.push({ section: "E05", element: "E05_10", val: _val[0] });
            eTimes["dTimes.11"] = _val[0];
        }; 


        //eTimes.12//////////////////
        console.log("Business Rule not Applicable")
        _val = getValue(businessObject.elements, "eTimes.12");
        if (_val == null)
        {
            if(isRequiredStateElement("eTimes.12"))
            {
                eTimes["dTimes.11"] = v3NOT_RECORDED;
                eTimes["DestinationPatientTransferofCareDateTime"] = NOT_RECORDED;
            }  
        }
        else 
        {
            eTimes["DestinationPatientTransferofCareDateTime"] = _val[0];
            eTimes["dTimes.12"] = _val[0];
        }; 

        //eTimes.13//////////////////
        _val = getValue(businessObject.elements, "dTimes.13");
        if (_val == null)
        {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dTimes.13", Description: "Unit Back in Service Date/Time Mandatory Value " })
            eTimes["dTimes.13"] = null;
            eTimes["UnitBackinServiceDateTime"] = null;
        }
        else 
        {
            v2Array.push({ section: "E05", element: "E05_11", val: _val[0]});
            eTimes["dTimes.13"] = _val[0];
            eTimes["UnitBackinServiceDateTime"] = _val[0];
        }; 


        //eTimes.14//////////////////
        _val = getValue(businessObject.elements, "eTimes.14");
        if (_val == null)
        {
            if(isRequiredStateElement("eTimes.14"))
            {
                eTimes["dTimes.14"] = null;
                eTimes["UnitCanceledDateTime"] = null;
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dTimes.14", Description: "Unit Canceled Date/Time:  eTimes 14 Mandatory " })
            }  
        }
        else 
        {
            v2Array.push({ section: "E05", element: "E05_12", val: _val[0] });
            eTimes["dTimes.14"] = _val[0];
            eTimes["UnitCanceledDateTime"] = _val[0];
        }; 


        //eTimes.15//////////////////
        _val = getValue(businessObject.elements, "eTimes.15");
        if (_val == null)
        {
            v2Array.push({ section: "E05", element: "E05_13", val: null});
            eTimes["dTimes.15"] = null;
            eTimes["UnitBackatHomeLocationDateTime"] = null;
        }
        else 
        {
            v2Array.push({ section: "E05", element: "E05_13", val: _val[0]});
            eTimes["UnitBackatHomeLocationDateTime"] = _val[0];
            eTimes["dTimes.15"] = _val[0];
        }; 

        //eTimes.16/////////////////
        _val = getValue(businessObject.elements, "eTimes.16");
        if (_val == null)
        {
            eTimes["dTimes.16"] = null;
            eTimes["EMSCallCompletedDateTime"] = null;
        }
        else 
        {
            OLAPArray.push('\t' + "<EMSCallCompletedDateTime>" + _val + "</EMSCallCompletedDateTime>" + '\n');
            eTimes["EMSCallCompletedDateTime"] = _val[0];
            eTimes["dTimes.16"] = _val[0];
        };
    }
};    //end of function   




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

/*   <sch:let name="eTimes.05" value="if($no_scene or nem:eTimes/nem:eTimes.05 != '') then '' else key('nemSch_key_elements', 'eTimes.05', $nemSch_elements)"/>

    <sch:let name="eTimes.06" value="if($no_scene or nem:eTimes/nem:eTimes.06 != '') then '' else key('nemSch_key_elements', 'eTimes.06', $nemSch_elements)"/>

    <sch:let name="eTimes.07" value="if($no_patient or nem:eTimes/nem:eTimes.07 != '') then '' else key('nemSch_key_elements', 'eTimes.07', $nemSch_elements)"/>

    <sch:let name="eTimes.09" value="if($no_scene or nem:eTimes/nem:eTimes.09 != '') then '' else key('nemSch_key_elements', 'eTimes.09', $nemSch_elements)"/>

    <sch:let name="eTimes.11" value="if($no_transport or nem:eTimes/nem:eTimes.11 != '') then '' else key('nemSch_key_elements', 'eTimes.11', $nemSch_elements)"/>

    <sch:let name="eTimes.12" value="if($no_transport or nem:eTimes/nem:eTimes.12 != '') then '' else key('nemSch_key_elements', 'eTimes.12', $nemSch_elements)"/>
*/