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

var eDisposition = new Object;
var DestinationGroup = [];
var HospitalTeamActivationGroup = [];
var HospitalTeamActivationGroupArray = [];
var AgencyYearGroupArray = [];
var E20 = new Object;
var _retArray = [];
var XMLString = ""
var OLAPArray = [];

var seteDisposition = function (businessObject)
{
    
    //eDisposition.01////
    _val = getValue(_elementList, "eDisposition.01");
    if (_val == null)
    {
        if (isRequiredStateElement("eDisposition.01") == true)
        {
            DestinationGroup["eDisposition.01"] = v3NOT_RECORDED;
            DestinationGroup["TransferredToName"] = v3NOT_RECORDED;
            v2Array.push({ section: "E20", element: "E20_01", val: v2NOT_RECORDED });
        }
        else
        {
            DestinationGroup["eDisposition.01"] = v2NOT_REPORTING;
            DestinationGroup["TransferredToName"] = v2NOT_REPORTING;
            v2Array.push({ section: "E20", element: "E20_01", val: v2NOT_REPORTING });
        }
    }
    else
    {
        v2Array.push({ section: "E20", element: "E20_01", val: _val[0] });
        DestinationGroup["eDisposition.01"] = _val[0];
        DestinationGroup["eDisposition.TransferredToName"] = _val[0];
    };


    //eDisposition.02////
    _val = getValue(_elementList, "eDisposition.02");
    if (_val == null)
    {
        if (isRequiredStateElement("eDisposition.02") == true)
        {
            DestinationGroup["eDisposition.02"] = v3NOT_RECORDED;
            DestinationGroup["TransferredToCode"] = v3NOT_RECORDED;            
            v2Array.push({ section: "E20", element: "E20_02", val: v2NOT_RECORDED });
        }
        else
        {
            DestinationGroup["TransferredToCode"] = v2NOT_REPORTING;
            DestinationGroup["eDisposition.02"] = v2NOT_REPORTING;
            v2Array.push({ section: "E20", element: "E20_02", val: v2NOT_REPORTING });
        }
    }
    else
    {
        DestinationGroup["eDisposition.02"] = _val[0];
        DestinationGroup["TransferredToCode"] = _val[0];
        v2Array.push({ section: "E20", element: "E20_02", val: _val[0] });
    };

    //eDisposition.03////
    _val = getValue(_elementList, "eDisposition.03");
    if (_val == null)
    {
        if (isRequiredStateElement("eDisposition.03") == true)
        {
            DestinationGroup["eDisposition.03"] = v3NOT_RECORDED;
            DestinationGroup["Address"] = v3NOT_RECORDED;
            v2Array.push({ section: "E20", element: "E20_03", val: v2NOT_RECORDED });
        }
        else
        {
            DestinationGroup["eDisposition.03"] = v2NOT_REPORTING;
            DestinationGroup["Address"] = v2NOT_REPORTING;
            v2Array.push({ section: "E20", element: "E20_02", val: v2NOT_REPORTING });
        }
    }
    else
    {
        DestinationGroup["eDisposition.03"] = _val[0];
        DestinationGroup["Address"] = _val[0];
        v2Array.push({ section: "E20", element: "E20_02", val: _val[0] });
    };


    //eDisposition.04////
    _val = getValue(_elementList, "eDisposition.04");
    if (_val == null) 
    {
        DestinationGroup["eDisposition.03"] = "";
        DestinationGroup["City"] = "";
        v2Array.push({ section: "E20", element: "E20_04", val: v3NOT_RECORDED });
    }    
    else 
    {
        DestinationGroup["eDisposition.04"] = _val[0];
        DestinationGroup["City"] = _val[0];
        v2Array.push({ section: "E20", element: "E20_04", val: _val[0] });
    };

    //eDisposition.05////
    _val = getValue(_elementList, "eDisposition.05");
    if (_val == null) 
    {
        DestinationGroup["eDisposition.05"] = v3NOT_RECORDED;
        DestinationGroup["State"] = v3NOT_RECORDED;
        v2Array.push({ section: "E20", element: "E20_05", val: v2NOT_RECORDED });
    }    
    else 
    {
        DestinationGroup["eDisposition.05"] = _val[0];
        DestinationGroup["State"] = _val[0];
        v2Array.push({ section: "E20", element: "E20_05", val: _val[0] });
    };

    //eDisposition.06////
    _val = getValue(_elementList, "eDisposition.06");
    if (_val == null) 
    {
        DestinationGroup["eDisposition.06"] = v3NOT_RECORDED;
        DestinationGroup["County"] = v3NOT_RECORDED;        
        v2Array.push({ section: "E20", element: "E20_06", val: v2NOT_RECORDED });
    }    
    else 
    {
        DestinationGroup["eDisposition.06"] = _val[0];
        DestinationGroup["County"] = _val[0];      
        v2Array.push({ section: "E20", element: "E20_06", val: _val[0] });
    
    };


    //eDisposition.07////
    _val = getValue(_elementList, "eDisposition.07");
    if (_val == null) 
    {
        DestinationGroup["eDisposition.07"] = v3NOT_RECORDED;
        DestinationGroup["ZIP"] = v3NOT_RECORDED;
        _retArray.push('\t\t\t' + "<eDisposition.07" + NIL_V3NOT_RECORDED + '\n');
        OLAPArray.push('\t\t\t' + "<DestinationCode>" + "NOT RECORDED" + "</DestinationZIPCode>" + '\n');
        v2Array.push({ section: "E20", element: "E20_07", val: v2NOT_RECORDED });
    }
    
    else 
    {
        DestinationGroup["eDisposition.07"] = _val[0];
        DestinationGroup["ZIP"] = _val[0];
        v2Array.push({ section: "E20", element: "E20_07", val: _val });
        console.log("Better be dFacility.10 ZIP")
    };



    //eDisposition.08////
    _val = getValue(_elementList, "eDisposition.08");
    if (_val == null) 
    {
        DestinationGroup["eDisposition.08"] = null;
        DestinationGroup["Country"] = null;
    }
    else 
    {
        console.log("Better be dFacility.12 - Country")
        DestinationGroup["eDisposition.08"] = _val[0];
        DestinationGroup["Country"] = _val[0];
    };

    _retArray.push('\t'+"</eDisposition.DestinationGroup>" + '\n');
    
    ////////////////////////////////////
    ////////////////////////////////////

    //eDisposition.09////
    _val = getValue(_elementList, "eDisposition.09");
    if (_val == null) 
    {
        DestinationGroup["eDisposition.09"] = null;
        DestinationGroup["GPSLocation"] = null;
        v2Array.push({ section: "E20", element: "E20_08", val: null });
    }
    else 
    {
        DestinationGroup["eDisposition.09"] = _val[0];
        DestinationGroup["GPSLocation"] = _val[0];
        v2Array.push({ section: "E20", element: "E20_08", val: _val[0]});
    };

    //eDisposition.10////
    _val = getValue(_elementList, "eDisposition.10");
    if (_val == null) 
    {
        DestinationGroup["eDisposition.10"] = null;
        DestinationGroup["USNationalGridCoordinates"] = null;
    }
    else 
    {
        console.log("Better be dFacility.14 - Country")
        DestinationGroup["eDisposition.10"] = _val[0];
        DestinationGroup["USNationalGridCoordinates"] = _val[0];
    };


    //eDisposition.11////
    _val = getValue(_elementList, "eDisposition.11");
    if (_val == null) 
    {
        if (isRequiredStateElement("eDisposition.11") == true) 
        {
            DestinationGroup["eDisposition.11"] = v3NOT_RECORDED;
            DestinationGroup["NumberofPatientsTransportedinthisEMSUnit"] = v3NOT_RECORDED;
        }
        else
        {
            DestinationGroup["eDisposition.11"] = v2NOT_REPORTING;
            DestinationGroup["NumberofPatientsTransportedinthisEMSUnit"] = v2NOT_REPORTING;
        }
    }
    else
    {
        DestinationGroup["eDisposition.11"] = _val[0];
        DestinationGroup["NumberofPatientsTransportedinthisEMSUnit"] = _val[0];
    };

    //eDisposition.12////
    _val = getValue(_elementList, "eDisposition.12");
    if (_val == null) 
    {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eDisposition.12", Description: "Incident/Patient Disposition Mandatory" })
    }
    else 
    {
        OLAPArray.push('\t\t\t' + "<>" + setCodeText("eDisposition.12", _val) + "</IncidentPatientDisposition>" + '\n');
        DestinationGroup["eDisposition.12"] = _val[0];
        DestinationGroup["IncidentPatientDisposition"] = setCodeText("eDisposition.12", _val[0]);
        v2Array.push({ section: "E20", element: "E20_10", val: setV2("eDisposition.12", _val) });
    };

    //eDisposition.13////
    _val = getValue(businessObject.elements, "eDisposition.13");
    if (_val == null)
    {
        DestinationGroup["eDisposition.13"] = null;
        DestinationGroup["HowPatientWasMovedtoAmbulance"] = null;
        v2Array.push({ section: "E20", element: "E20_11", val: null });
    }
    else
    {
        var arr1 = [];
        var arr2 = [];
        var arr3 = [];
        
        for (var i = 0; i < _val.length; i++) 
        {
            arr1.push(_val[i]);            
            arr2.push(setV2("eDisposition.13", _val[i]));
            arr3.push(setCodeText("eDisposition.13", _val[i]));
        }
        v2Array.push({ section: "E20", element: "E20_11", val: arr2.slice(0) });
        DestinationGroup["eDisposition.13"] = arr1.slice(0);
        DestinationGroup["HowPatientWasMovedtoAmbulance"] = arr3.slice(0);
    };

    //eDisposition.14////
    _val = getValue(businessObject.elements, "eDisposition.14");
    if (_val == null) 
    {
        DestinationGroup["eDisposition.14"] = null;
        DestinationGroup["PositionofPatientDuringTransport"] = null;
        v2Array.push({ section: "E20", element: "E20_12", val: null });
    }
    else
    {
        var arr1 = [];
        var arr2 = [];
        var arr3 = [];
        
        for (var i = 0; i < _val.length; i++) 
        {
            arr1.push(_val[i]);            
            arr2.push(setV2("eDisposition.14", _val[i]));
            arr3.push(setCodeText("eDisposition.14", _val[i]));

        }
        v2Array.push({ section: "E20", element: "E20_12", val:  arr2.slice(0) });
        DestinationGroup["eDisposition.14"] = arr1.slice(0);
        DestinationGroup["PositionofPatientDuringTransport"] = arr3.slice(0);
    };

    //eDisposition.15////
    _val = getValue(businessObject.elements, "eDisposition.15");
    if (_val == null) 
    {
        DestinationGroup["eDisposition.15"] = null;
        DestinationGroup["HowPatientWasTransportedFromAmbulance"] = null;
        v2Array.push({ section: "E20", element: "E20_13", val: null });
    }
    else
    {
        DestinationGroup["HowPatientWasTransportedFromAmbulance"] = _val[0];
        DestinationGroup["eDisposition.15"] = _val[0];
        v2Array.push({ section: "E20", element: "E20_13", val: setV2("eDisposition.15", _val[0]) });
    };

    //eDisposition.16////
    _val = getValue(_elementList, "eDisposition.16");
    if (_val == null) 
    {
        DestinationGroup["eDisposition.16"] = v3NOT_RECORDED;
        DestinationGroup["EMSTransportMethod"] = v3NOT_RECORDED;
    }
    else 
    {
        DestinationGroup["EMSTransportMethod"] = _val[0];
        DestinationGroup["eDisposition.16"] = _val[0];
    };

    //eDisposition.17////
    _val = getValue(_elementList, "eDisposition.17");
    if (_val == null) 
    {
        DestinationGroup["eDisposition.17"] = v3NOT_RECORDED;
        DestinationGroup["TransportModefromScene"] = v3NOT_RECORDED;
        v2Array.push({ section: "E20", element: "E20_14", val: v2NOT_RECORDED });
    }
    else 
    {
        DestinationGroup["TransportModefromScene"] = setCodeText("eDisposition.17", _val[0]) 
        v2Array.push({ section: "E20", element: "E20_14", val: setV2("eDisposition.17", _val[0]) });
        DestinationGroup["eDisposition.17"] = _val[0];
    };

    //eDisposition.18////
    _val = getValue(businessObject.elements, "eDisposition.18");
    if (_val == null) 
    {
        DestinationGroup["eDisposition.17"] = v3NOT_RECORDED;
        DestinationGroup["AdditionalTransportModeDescriptors"] = v3NOT_RECORDED;
    }
    else
    {
        var arr1 = [];
        var arr2 = [];
        for (var i = 0; i < _val.length; i++)
        {
            arr1.push(_val[i]);            
            arr2.push(setCodeText("eDisposition.18", _val[i]));
        }
        DestinationGroup["eDisposition.18"] = arr1.slice(0);
        DestinationGroup["AdditionalTransportModeDescriptors"] = arr2.slice(0);
    };

    //eDisposition.19////
    _val = getValue(_elementList, "eDisposition.19");
    if (_val == null) 
    {
        v2Array.push({ section: "E20", element: "E20_15", val: v2NOT_RECORDED });
        DestinationGroup["eDisposition.19"] = v3NOT_RECORDED;
        DestinationGroup["ConditionofPatientatDestination"] = v3NOT_RECORDED;
    }
    else 
    {
        v2Array.push({ section: "E20", element: "E20_15", val: setV2("eDisposition.19", _val[0])});
        DestinationGroup["eDisposition.19"] = _val[0];
        DestinationGroup["ConditionofPatientatDestination"] = (setCodeText("eDisposition.19", _val[0]));
    };

    //eDisposition.20////
    _val = getValue(businessObject.elements, "eDisposition.20");
    if (_val == null) 
    {
        DestinationGroup["eDisposition.20"] = v3NOT_RECORDED;
        DestinationGroup["ReasonforChoosingDestination"] = v3NOT_RECORDED;
        v2Array.push({ section: "E20", element: "E20_16", val: v2NOT_RECORDED });
    }
    else
    {
        var arr1 = [];
        var arr2 = [];
        var arr3 = [];
        for (var i = 0; i < _val.length; i++)
        {
            arr1.push(_val[i]);            
            arr3.push(setV2("eDisposition.20", _val[i]));
            arr3.push(setCodeText("eDisposition.20", _val[i]));                        
        }
        v2Array.push({ section: "E20", element: "E20_16", val:arr2.slice(0)  });
        DestinationGroup["eDisposition.20"] = arr1.slice(0);        
        DestinationGroup["ReasonforChoosingDestination"] = arr3.slice(0);      
    };

    
    //eDisposition.21////
    _val = getValue(_elementList, "eDisposition.21");
    if (_val == null) 
    {
        DestinationGroup["eDisposition.21"] = v3NOT_RECORDED;
        DestinationGroup["TypeofDestination"] = v3NOT_RECORDED;
        v2Array.push({ section: "E20", element: "E20_17", val: v2NOT_RECORDED });
    }
    else 
    {
        OLAPArray.push('\t\t\t' + "<>" +  + "</TypeofDestination>" + '\n');
        DestinationGroup["eDisposition.21"] = _val[0];
        DestinationGroup["TypeofDestination"] = setCodeText("eDisposition.21", _val[0])
        v2Array.push({ section: "E20", element: "E20_17", val: setV2("eDisposition.21", _val[0])});
    };

    //eDisposition.22////
    _val = getValue(_elementList, "eDisposition.22");
    if (_val == null) 
    {
        DestinationGroup["eDisposition.22"] = v3NOT_RECORDED;
        DestinationGroup["HospitalInPatientDestination"] = v3NOT_RECORDED;
    }
    else 
    {
        DestinationGroup["eDisposition.22"] = _val[0];
        DestinationGroup["HospitalInPatientDestination"] = setCodeText("eDisposition.22", _val[0]);
    };

    //eDisposition.23////
    _val = getValue(_elementList, "eDisposition.23");
    if (_val == null) 
    {
        DestinationGroup["eDisposition.22"] = v3NOT_RECORDED;
        DestinationGroup["HospitalDesignation"] = v3NOT_RECORDED;
    }
    else 
    {
        OLAPArray.push('\t\t\t' + "<>" +  + "</HospitalDesignation>" + '\n');
        DestinationGroup["eDisposition.23"] = _val[0];
        DestinationGroup["HospitalDesignation"] = setCodeText("eDisposition.23", _val[0]);
    };


    _sectionIndex = getSectionIndex(businessObject, "eDisposition.HospitalTeamActivationGroup");
    for (var x = 0; x < _sectionIndex.length; x++) {
        {
        
            //eDisposition.24////
            _val = getValue(businessObject.sections[xx].attributes.sections[_sectionIndexi].attributes.elements, "eDisposition.24");
            if (_val == null) 
            {
                DestinationGroup["eDisposition.24"] = v3NOT_RECORDED;
                DestinationGroup["DestinationTeamPreArrivalAlertorActivation"] = v3NOT_RECORDED;
            }
            else 
            {
                HospitalTeamActivationGroup["eDisposition.24"] = _val[0];
                HospitalTeamActivationGroup["DestinationTeamPreArrivalAlertorActivation"] =  setCodeText("eDisposition.24", _val[0]);;
            };

            //eDisposition.25////
            _val = getValue(_elementList, "eDisposition.25");
            if (_val == null) 
            {
                DestinationGroup["eDisposition.25"] = v3NOT_RECORDED;
                DestinationGroup["DateTimeofDestinationPrearrivalAlertorActivation"] = v3NOT_RECORDED;
            }
            else 
            {               
                HospitalTeamActivationGroup["eDisposition.25"] = _val[0];
                HospitalTeamActivationGroup["DateTimeofDestinationPrearrivalAlertorActivation"] = _val[0];                
            };
        };

        //eDisposition.26////
        _val = getValue(_elementList, "eDisposition.26");
        if (_val == null) 
        {
            DestinationGroup["eDisposition.25"] = null;
            DestinationGroup["DispositionInstructionsProvided"] = null;
        }
        else 
        {

            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _val.length; i++)
            {
                arr1.push(_val[i]);            
                arr3.push(setV2("eDisposition.25", _val[i]));
                arr3.push(setCodeText("eDisposition.25", _val[i])); 
                
               
                OLAPArray.push('\t\t\t\t' + "<>" + setCodeText("eDisposition.26", _val[i]) + "</DispositionInstructionsProvided>" + '\n');               
                _retArray.push('\t\t\t' + "<eDisposition.26>" + _val[i]  + "</eDisposition.26>" + '\n');
            };
            v2Array.push({ section: "E04", element: "E04_02", val: arr2.slice(0) });
            DestinationGroup["eDisposition.26"] =arr1.slice(0);
            DestinationGroup["DispositionInstructionsProvided"] =arr3.slice(0);
    };


    var setNotApplicableAll = function (businessObject)
    {
        v2Array.push({ section: "E20", element: "E20_01", val: v2NOT_APPLICABLE });
        v2Array.push({ section: "E20", element: "E20_02", val: v2NOT_APPLICABLE });
        v2Array.push({ section: "E20", element: "E20_03", val: v2NOT_APPLICABLE });
        v2Array.push({ section: "E20", element: "E20_04", val: v2NOT_APPLICABLE });
        v2Array.push({ section: "E20", element: "E20_05", val: v2NOT_APPLICABLE });
        v2Array.push({ section: "E20", element: "E20_06", val: v2NOT_APPLICABLE });
        v2Array.push({ section: "E20", element: "E20_07", val: v2NOT_APPLICABLE });
        v2Array.push({ section: "E20", element: "E20_09", val: v2NOT_APPLICABLE });
        v2Array.push({ section: "E20", element: "E20_11", val: v2NOT_APPLICABLE });
        v2Array.push({ section: "E20", element: "E20_12", val: v2NOT_APPLICABLE });
        v2Array.push({ section: "E20", element: "E20_13", val: v2NOT_APPLICABLE });
        v2Array.push({ section: "E20", element: "E20_14", val: v2NOT_APPLICABLE });
        v2Array.push({ section: "E20", element: "E20_15", val: v2NOT_APPLICABLE });
        v2Array.push({ section: "E20", element: "E20_16", val: v2NOT_APPLICABLE });
        v2Array.push({ section: "E20", element: "E20_17", val: v2NOT_APPLICABLE });

        _retArray.push("<eDisposition>" + '\n');
        _retArray.push('\t' + "<eDisposition.DestinationGroup>" + '\n');

        if (isRequiredStateElement("eDisposition.01") == true) {
            _retArray.push('\t\t' + "<eDisposition.01>" + NIL_V3NOT_APPLICABLE + '\n');
        }

        if (isRequiredStateElement("eDisposition.02") == true) {
            _retArray.push('\t\t' + "<eDisposition.02>" + NIL_V3NOT_APPLICABLE + '\n');
        }

        if (isRequiredStateElement("eDisposition.03") == true) {
            _retArray.push('\t\t' + "<eDisposition.03>" + NIL_V3NOT_APPLICABLE + '\n');
        }
        if (isRequiredStateElement("eDisposition.04") == true) {
            _retArray.push('\t\t' + "<eDisposition.04>" + NIL_V3NOT_APPLICABLE + '\n');
        }

        _retArray.push('\t' + "<eDisposition.05>" + NIL_V3NOT_APPLICABLE + '\n');
        _retArray.push('\t' + "<eDisposition.06>" + NIL_V3NOT_APPLICABLE + '\n');
        _retArray.push('\t' + "<eDisposition.07>" + NIL_V3NOT_APPLICABLE + '\n');

        if (isRequiredStateElement("eDisposition.11") == true) {
            _retArray.push('\t\t' + "<eDisposition.11>" + NIL_V3NOT_APPLICABLE + '\n');
        }

        _retArray.push('\t' + "<eDisposition.12>" + NIL_V3NOT_APPLICABLE + '\n');
        _retArray.push('\t' + "<eDisposition.16>" + NIL_V3NOT_APPLICABLE + '\n');
        _retArray.push('\t' + "<eDisposition.17>" + NIL_V3NOT_APPLICABLE + '\n');
        _retArray.push('\t' + "<eDisposition.18>" + NIL_V3NOT_APPLICABLE + '\n');
        _retArray.push('\t' + "<eDisposition.19>" + NIL_V3NOT_APPLICABLE + '\n');
        _retArray.push('\t' + "<eDisposition.20>" + NIL_V3NOT_APPLICABLE + '\n');
        _retArray.push('\t' + "<eDisposition.21>" + NIL_V3NOT_APPLICABLE + '\n');
        _retArray.push('\t' + "<eDisposition.22>" + NIL_V3NOT_APPLICABLE + '\n');
        _retArray.push('\t' + "<eDisposition.23>" + NIL_V3NOT_APPLICABLE + '\n');
        _retArray.push('\t' + "<eDisposition.24>" + NIL_V3NOT_APPLICABLE + '\n');
        _retArray.push('\t' + "<eDisposition.25>" + NIL_V3NOT_APPLICABLE + '\n');


    };

    function setD2(NEMSISElementNumber, valueArray) {
        //    console.log(NEMSISElementNumber);
        var _retArray = [];
        //    console.log(valueArray);
        switch (NEMSISElementNumber) {
            case "eDisposition.12":

                if (eDisposition12[valueArray[0]] == undefined) {
                    _retArray.push(valueArray[0] + "UNDEFINED");
                }
                else {
                    _retArray.push(eDisposition12[valueArray[0]]);
                }
                break;
            case "eDisposition.13":
                for (i = 0; i < valueArray.length; i++) {
                    if (eDisposition13[valueArray[i]] == undefined) {
                        _retArray.push(valueArray[i] + "UNDEFINED");
                    }
                    else {
                        _retArray.push(eDisposition13[valueArray[i]]);
                    }
                }
                break;
            case "eDisposition.14":

                if (eDisposition14[valueArray[0]] == undefined) {
                    _retArray.push(valueArray[0] + "UNDEFINED");
                }
                else {
                    _retArray.push(eDisposition14[valueArray[0]]);
                }
                break;

            case "eDisposition.15":

                if (eDisposition15[valueArray[0]] == undefined) {
                    _retArray.push(valueArray[0] + "UNDEFINED");
                }
                else {
                    _retArray.push(eDisposition15[valueArray[0]]);
                }
                break;
                
            case "eDisposition.17":

                if (eDisposition17[valueArray[0]] == undefined) {
                    _retArray.push(valueArray[0] + "UNDEFINED");
                }
                else {
                    _retArray.push(eDisposition17[valueArray[0]]);
                }
                break;

                
            case "eDisposition.19":

                if (eDisposition19[valueArray[0]] == undefined) {
                    _retArray.push(valueArray[0] + "UNDEFINED");
                }
                else {
                    _retArray.push(eDisposition19[valueArray[0]]);
                }
                break;

            case "eDisposition.20":

                if (eDisposition20[valueArray[0]] == undefined) {
                    _retArray.push(valueArray[0] + "UNDEFINED");
                }
                else {
                    _retArray.push(eDisposition20[valueArray[0]]);
                }
                break;

                
            case "eDisposition.21":

                if (eDisposition21[valueArray[0]] == undefined) {
                    _retArray.push(valueArray[0] + "UNDEFINED");
                }
                else {
                    _retArray.push(eDisposition21[valueArray[0]]);
                }
                break;
            default:
                _retArray.push(NEMSISElementNumber = " version 2 not found");
        }
        return _retArray;
    };
    var eDisposition12 = {
        "4212001":"4845",
        "4212003":"4850",
        "4212005":"4845",
        "4212007":"4815",
        "4212009":"4815",
        "4212011":"4825",
        "4212013":"4820",
        "4212015":"4820",
        "4212017":"4820",
        "4212019":"4820",
        "4212021":"4830",
        "4212023":"4835",
        "4212025":"4835",
        "4212027":"4840",
        "4212029":"4840",
        "4212031":"4845",
        "4212033":"4850",
        "4212035":"4855",
        "4212037":"4860",
        "4212039":"4830",
        "4212041":"4830",
        "4212043":"4830"
    };

    var eDisposition13 = {
        "9909001":"4865",
        "9909003":"4885",
        "9909005":"4885",
        "9909007":"4870",
        "9909009":"4885",
        "9909011":"4875",
        "9909013":"4880",
        "9909015":"4885"
    };

    var eDisposition14 = {
        "4214001":"4890",
        "4214003":"4895",
        "4214005":"4900",
        "4214007":"4900",
        "4214009":"4925",
        "4214011":"4905",
        "4214013":"4910",
        "4214015":"4915",
        "4214017":"4920",
        "4214019":"4925"
    };

    var eDisposition15 = {
        "9909001":"4930",
        "9909003":"4950",
        "9909005":"4950",
        "9909007":"4935",
        "9909009":"4950",
        "9909011":"4940",
        "9909013":"4945",
        "9909015":"4950"

    };

    var eDisposition17 = {
        "4217001":"4965",
        "4217003":"4955",
        "4217005":"4970",
        "4217007":"4960"
    };

    var eDisposition19 = {
        "9916001":"4975",
        "9916003":"4980",
        "9916005":"4985"
    }

    var eDisposition20 = {
        "4220001":"4990",
        "4220003":"4995",
        "4220005":"5000",
        "4220007":"5005",
        "4220009":"5010",
        "4220011":"5015",
        "4220013":"5020",
        "4220015":"5025",
        "4220017":"5030",
        "4220019":"5035",
        "4220021":"5040"
    };

    var eDisposition21 = {
        "4221001":"7270",
        "4221003":"7280",
        "4221005":"7290",
        "4221007":"7290",
        "4221009":"7300",
        "4221011":"7310",
        "4221013":"7330",
        "4221015":"7340",
        "4221017":"7350",
        "4221019":"7360"
    };

    function setCodeText(NEMSISElementNumber, valueArray) {
        var _return = [];
        switch (NEMSISElementNumber) {
            case "eDisposition.12":
                if (eDisposition334_12[valueArray] == undefined) {
                    _return = valueArray + " UNDEFINED";
                }
                else {
                    _return = eDisposition334_12[valueArray];
                }
                break;
            case "eDisposition.13":
                if (eDisposition334_13[valueArray] == undefined) {
                    _return = valueArray + " UNDEFINED";
                }
                else {
                    _return = eDisposition334_13[valueArray];
                }
                break;

            case "eDisposition.14":
                if (eDisposition334_14[valueArray] == undefined) {
                    _return = valueArray + " UNDEFINED";
                }
                else {
                    _return = eDisposition334_14[valueArray];
                }
                break;

            case "eDisposition.15":
                if (eDisposition334_15[valueArray] == undefined) {
                    _return = valueArray + " UNDEFINED";
                }
                else {
                    _return = eDisposition334_15[valueArray];
                }
                break;

            case "eDisposition.16":
                if (eDisposition334_16[valueArray] == undefined) {
                    _return = valueArray + " UNDEFINED";
                }
                else {
                    _return = eDisposition334_16[valueArray];
                }
                break;

            case "eDisposition.17":
                if (eDisposition334_17[valueArray] == undefined) {
                    _return = valueArray + " UNDEFINED";
                }
                else {
                    _return = eDisposition334_17[valueArray];
                }
                break;

            case "eDisposition.18":
                if (eDisposition334_18[valueArray] == undefined) {
                    _return = valueArray + " UNDEFINED";
                }
                else {
                    _return = eDisposition334_18[valueArray];
                }
                break;

            case "eDisposition.19":
                if (eDisposition334_19[valueArray] == undefined) {
                    _return = valueArray + " UNDEFINED";
                }
                else {
                    _return = eDisposition334_19[valueArray];
                }
                break;

            case "eDisposition.20":
                if (eDisposition334_20[valueArray] == undefined) {
                    _return = valueArray + " UNDEFINED";
                }
                else {
                    _return = eDisposition334_20[valueArray];
                }
                break;

            case "eDisposition.21":
                if (eDisposition334_21[valueArray] == undefined) {
                    _return = valueArray + " UNDEFINED";
                }
                else {
                    _return = eDisposition334_21[valueArray];
                }
                break;

            case "eDisposition.22":
                if (eDisposition334_22[valueArray] == undefined) {
                    _return = valueArray + " UNDEFINED";
                }
                else {
                    _return = eDisposition334_22[valueArray];
                }
                break;

                
            case "eDisposition.24":
                if (eDisposition334_24[valueArray] == undefined) {
                    _return = valueArray + " UNDEFINED";
                }
                else {
                    _return = eDisposition334_24[valueArray];
                }
                break;

            case "eDisposition.26":
                if (eDisposition334_26[valueArray] == undefined) {
                    _return = valueArray + " UNDEFINED";
                }
                else {
                    _return = eDisposition334_26[valueArray];
                }
                break;
            default:
                _return = " UNDEFINED";
        }
        return _return;

    };

    var eDisposition334_12 = {
        "4212003" : "Assist; Public", 
        "4212005" : "Assist; Unit", 
        "4212007" : "Canceled (Prior to Arrival At Scene)", 
        "4212009" : "No Patient Contact (Canceled on Scene)", 
        "4212011" : "No Patient Found (Canceled on Scene)", 
        "4212013" : "Patient Dead at Scene-No Resuscitation Attempted (With Transport)", 
        "4212015" : "Patient Dead at Scene-No Resuscitation Attempted (Without Transport)", 
        "4212017" : "Patient Dead at Scene-Resuscitation Attempted (With Transport)", 
        "4212019" : "Patient Dead at Scene-Resuscitation Attempted (Without Transport)", 
        "4212021" : "Patient Evaluated; No Treatment/Transport Required", 
        "4212023" : "Patient Refused Evaluation/Care (With Transport)", 
        "4212025" : "Patient Refused Evaluation/Care (Without Transport)", 
        "4212027" : "Patient Treated; Released (AMA)", 
        "4212029" : "Patient Treated; Released (per protocol)", 
        "4212031" : "Patient Treated; Transferred Care to Another EMS Professional", 
        "4212033" : "Patient Treated; Transported by EMS", 
        "4212035" : "Patient Treated; Transported by Law Enforcement", 
        "4212037" : "Patient Treated; Transported by Private Vehicle", 
        "4212039" : "Standby-No Services or Support Provided", 
        "4212041" : "Standby-Public Safety; Fire; or EMS Operational Support Provided", 
        "4212043" : "Transport of Body Parts or Organs Only"
    };

    var eDisposition334_13 = {
        "9909001" : "Assisted/Walk", 
        "9909003" : "Backboard", 
        "9909005" : "Chair", 
        "9909007" : "Carried", 
        "9909009" : "Other (Not Listed)", 
        "9909011" : "Stairchair", 
        "9909013" : "Stretcher", 
        "9909015" : "Wheelchair"
    };

    var eDisposition334_14 = 
        {
            "4214001" : "Car Seat", 
            "4214003" : "Fowlers (Semi-Upright Sitting)", 
            "4214005" : "Lateral Left", 
            "4214007" : "Lateral Right", 
            "4214009" : "Other (Not Listed)", 
            "4214011" : "Prone", 
            "4214013" : "Semi-Fowlers", 
            "4214015" : "Sitting", 
            "4214017" : "Supine", 
            "4214019" : "Trendelenburg"
        };

    var eDisposition334_15 = 
        {
            "9909001" : "Assisted/Walk", 
            "9909003" : "Backboard", 
            "9909005" : "Chair", 
            "9909007" : "Carried", 
            "9909009" : "Other (Not Listed)", 
            "9909011" : "Stairchair", 
            "9909013" : "Stretcher", 
            "9909015" : "Wheelchair"
        };

    var eDisposition334_16 = 
        {
            "4216001" : "Air Medical-Fixed Wing", 
            "4216003" : "Air Medical-Rotor Craft", 
            "4216005" : "Ground-Ambulance", 
            "4216007" : "Ground-ATV or Rescue Vehicle", 
            "4216009" : "Ground-Bariatric", 
            "4216011" : "Ground-Other Not Listed", 
            "4216013" : "Ground-Mass Casualty Bus/Vehicle", 
            "4216015" : "Ground-Wheelchair Van", 
            "4216017" : "Water-Boat"
        };

    var eDisposition334_17 = {
        "4217001" : "Emergent (Immediate Response)", 
        "4217003" : "Emergent Downgraded to Non-Emergent", 
        "4217005" : "Non-Emergent", 
        "4217007" : "Non-Emergent Upgraded to Emergent"
    };

    var eDisposition334_18 = {
        "4218001" : "Intersection Navigation-Against Normal Light Patterns", 
        "4218003" : "Intersection Navigation-With Automated Light Changing Technology", 
        "4218005" : "Intersection Navigation-With Normal Light Patterns", 
        "4218007" : "Speed-Enhanced per Local Policy", 
        "4218009" : "Speed-Normal Traffic"
    };

    var eDisposition334_19 = {
        "9916001" : "Improved", 
        "9916003" : "Unchanged", 
        "9916005" : "Worse" 
    }
    var eDisposition334_20 = {
        "4220001" : "Closest Facility", 
        "4220003" : "Diversion", 
        "4220005" : "Family Choice", 
        "4220007" : "Insurance Status/Requirement", 
        "4220009" : "Law Enforcement Choice", 
        "4220011" : "On-Line/On-Scene Medical Direction", 
        "4220013" : "Other (Not Listed)", 
        "4220015" : "Patient's Choice", 
        "4220017" : "Patient's Physician's Choice", 
        "4220019" : "Protocol", 
        "4220021" : "Regional Specialty Center", 
    };

    var eDisposition334_21 = {
        "4221001" : "Home", 
        "4221003" : "Hospital-Emergency Department", 
        "4221005" : "Hospital-Non-Emergency Department Bed", 
        "4221007" : "Medical Office/Clinic", 
        "4221009" : "Morgue/Mortuary", 
        "4221011" : "Nursing Home/Assisted Living Facility", 
        "4221013" : "Other (Not Listed)", 
        "4221015" : "Other EMS Responder (air)", 
        "4221017" : "Other EMS Responder (ground)", 
        "4221019" : "Police/Jail", 
    };
    var eDisposition334_22 = {
        "4222001" : "Hospital-Burn", 
        "4222003" : "Hospital-Cath Lab", 
        "4222005" : "Hospital-CCU", 
        "4222007" : "Hospital-Endoscopy", 
        "4222009" : "Hospital-Hospice", 
        "4222011" : "Hospital-Hyperbaric Oxygen Treatment", 
        "4222013" : "Hospital-ICU", 
        "4222015" : "Hospital-Labor & Delivery", 
        "4222017" : "Hospital-Med/Surg", 
        "4222019" : "Hospital-Mental Health", 
    };

    var eDisposition334_24 = {
        "4224003" : "Yes-Adult Trauma", 
        "4224005" : "Yes-Cardiac Arrest", 
        "4224007" : "Yes-Obstetrics", 
        "4224009" : "Yes-Other", 
        "4224011" : "Yes-Pediatric Trauma", 
        "4224013" : "Yes-STEMI", 
        "4224015" : "Yes-Stroke"
    };

    var eDisposition334_22 = 
        {
            "4226003" : "Contact 911 or see your Doctor if problem worsens", 
            "4226005" : "Other Not Listed (Described in Narrative)", 
            "4226007" : "Problem Specific Instructions Provided", 
            "4226009" : "See Your Doctor or the Emergency Department immediately", 
            "4226011" : "See Your Doctor or the Emergency Department in the next 24 hours", 
            "4226013" : "See Your Doctor or the Emergency Department in the next 4 hours", 
            "4226015" : "See Your Doctor within the next one week", 
        };
