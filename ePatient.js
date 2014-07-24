var ErrorList = [];
var v3NOT_REPORTING = " NV=\"7701005\"";
var v3NOT_RECORDED = " NV=\"7701003\"";
var v2NOT_AVAILABLE = "-5";
var v2NOT_REPORTING = "-15";
var v2NOT_APPLICABLE = "-25"
var v2NOT_RECORDED = "-20";
var v2NOT_KNOWN = "-10";
var NIL_V3NOT_RECORDED = "NV=\"7701003\" xsi:nil=\"true\"/>";
var NIL_V3NOT_REPORTING = "NV=\"7701005\" xsi:nil=\"true\"/>";
var NIL_V3NOT_APPLICABLE = "NV=\"7701001\" xsi:nil=\"true\"/>";
var PN_REFUSED_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801019\"/>";
var PN_UNABLE_TO_COMPLETE_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801023\"/>";
var PN_FINDING_NOT_PRESENT_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801005\"/>";
var FAX = "PhoneNumberType=\"9913001\"";
var HOME = "PhoneNumberType=\"9913003\"";
var MOBILE = "PhoneNumberType=\"9913005\"";
var PAGER = "PhoneNumberType=\"9913007\"";
var WORK = "PhoneNumberType=\"9913009\"";
var PERSONALEMAIL = "EmailAddressType=\"9904001\"";
var WORKEMAIL = "EmailAddressType=\"9904003\"";


var setePatient = function (businessObject)
{
    var _retArray = [];
    var OLAPArray = [];

    if (typeof businessObject == undefined)
    {
        SetNotApplicable();
        return _retArray;
    }
    var elementList = businessObject.attributes.elements;


    console.log(businessObject);

    
    //////////////////////ePatient.01
    _val = getValue(elementList, "ePatient.01");
    if (_val == null)
    {
        ePatient["ePatient.01"] = null;
        ePatient["EMSPatientID"] = null;
    }
    else
    {
        ePatient["ePatient.01"] = _val[0];
        ePatient["EMSPatientID"] = _val[0];
    };

    //////////////////////ePatient.02
   
    _val = getValue(elementList, "ePatient.02");
    if (_val == null) {
        PNValue = getPertinentNegative("ePatient.02")
        if (PNValue != null) {
            if (PNValue == "8801019")
            {
                ePatient["ePatient.02"] = PN_REFUSED_IS_NILLABLE;
                ePatient["LastName"] = "8801019";
                v2Array.push({ section: "E06", element: "E06_01", val: v2NOT_KNOWN });
            }
            else if (PNValue == "8801023")
            {
                ePatient["ePatient.02"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                ePatient["LastName"] = "8801023";
                v2Array.push({ section: "E06", element: "E06_01", val: v2NOT_KNOWN });
            }
        }
        else {
            if (isRequiredStateElement("ePatient.02"))
            {
                ePatient["ePatient.02"] = v3NOT_RECORDED;
                ePatient["ePatient.02"] = NOT_RECORDED;
                v2Array.push({ section: "E06", element: "E06_01", val: v2NOT_RECORDED });
            }
            else
            {
                ePatient["ePatient.02"] = v3NOT_REPORTING;
                ePatient["LastName"] = NOT_REPORTING;
                v2Array.push({ section: "E06", element: "E06_01", val: v2NOT_REPORTING });
            }
        }
    }
    else
    {
        ePatient["ePatient.02"] = _val[0];
        ePatient["LastName"] = _val[0];
        v2Array.push({ section: "E06", element: "E06_01", val: _val[0] });
    };

    ///////////ePatient.03////////
    _val = getValue(elementList, "ePatient.03");
    if (_val == null)
    {
        PNValue = getPertinentNegative("ePatient.03")
        if (PNValue != null)
        {
            if (PNValue == "8801019")
            {
                ePatient["FirstName"] = PN_REFUSED_IS_NILLABLE;
                ePatient["ePatient.03"] = "8801019";
                v2Array.push({ section: "E06", element: "E06_02", val: v2NOT_KNOWN });
            }

            else if (PNValue == "8801023")
            {
                ePatient["ePatient.03"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE;
                ePatient["FirstName"] = "8801023";
                v2Array.push({ section: "E06", element: "E06_02", val: v2NOT_KNOWN });
            }
        }
        else
        {
            if (isRequiredStateElement("ePatient.03"))
            {
                ePatient["ePatient.03"] = v3NOT_RECORDED;
                ePatient["FirstName"] = NOT_RECORDED;
                v2Array.push({ section: "E06", element: "E06_02", val: v2NOT_RECORDED });
            }
            else
            {
                ePatient["ePatient.03"] = v3NOT_REPORTING;
                ePatient["FirstName"] = NOT_REPORTING;
                v2Array.push({ section: "E06", element: "E06_02", val: v2NOT_REPORTING });
            }
        }
    }
    else
    {
        ePatient["ePatient.03"] = _val[0];
        ePatient["FirstName"] = _val[0];
        v2Array.push({ section: "E06", element: "E06_02", val: _val[0] });
    };

    ///////////ePatient.03////////
    _val = getValue(elementList, "ePatient.04");
    if (_val == null)
    {
        ePatient["ePatient.04"] = null;
        ePatient["MiddleInitialName"] = null;
        v2Array.push({ section: "E06", element: "E06_03", val: null });
    }
    else
    {
        ePatient["ePatient.04"] = _val[0];
        ePatient["MiddleInitialName"] = _val[0];
        v2Array.push({ section: "E06", element: "E06_03", val: _val[0] });
    };
    

    ///////////ePatient.05////////
    _val = getValue(elementList, "ePatient.05");
    if (_val == null)
    {
        ePatient["ePatient.05"] = null;
        ePatient["PatientsHomeAddress"] = null;
        v2Array.push({ section: "E06", element: "E06_04", val: v2NOT_RECORDED });
    }
    else
    {
        ePatient["ePatient.05"] = _val[0];
        ePatient["PatientsHomeAddress"] = _val[0];
        v2Array.push({ section: "E06", element: "E06_04", val: _val[0] });
    };

    ///////////ePatient.06////////
    _val = getValue(elementList, "ePatient.06");
    if (_val == null)
    {
        ePatient["ePatient.06"] = null;
        ePatient["PatientsHomeCity"] = null;
        v2Array.push({ section: "E06", element: "E06_05", val: v2NOT_RECORDED });

    }
    else
    {
        ePatient["ePatient.06"] = _val[0];
        ePatient["PatientsHomeCity"] = _val[0];
        v2Array.push({ section: "E06", element: "E06_05", val: _val[0] });
    };

    ///////////ePatient.07////////
    _val = getValue(elementList, "ePatient.07");
    if (_val == null)
    {
        if (isRequiredStateElement("ePatient.07"))
        {
            ePatient["ePatient.07"] = v3NOT_RECORDED;
            ePatient["PatientsHomeCounty"] = NOT_RECORDED;
            v2Array.push({ section: "E06", element: "E06_06", val: v2NOT_RECORDED });
        }        
    }
    else
    {
        ePatient["PatientsHomeCounty"] = _val[0];
        ePatient["ePatient.07"] = _val[0];
        v2Array.push({ section: "E06", element: "E06_06", val: _val[0] });
    };

    ///////////ePatient.08////////
    _val = getValue(elementList, "ePatient.08");
    if (_val == null)
    {
        if (isRequiredStateElement("ePatient.08"))
        {
            ePatient["ePatient.08"] = v3NOT_RECORDED;
            ePatient["PatientsHomeState"] = NOT_RECORDED;
            v2Array.push({ section: "E06", element: "E06_07", val: v2NOT_RECORDED });
        }
    }
    else
    {
        ePatient["ePatient.08"] = _val[0];
        ePatient["PatientsHomeState"] = _val[0];
        v2Array.push({ section: "E06", element: "E06_07", val: _val[0] });
    };


    ///////////ePatient.09////////
    _val = getValue(elementList, "ePatient.09");
    if (_val == null)
    {
        if (isRequiredStateElement("ePatient.09"))
        {
            ePatient["ePatient.09"] = NIL_V3NOT_RECORDED;
            ePatient["PatientsHomeZip"] = NOT_RECORDED;
            v2Array.push({ section: "E06", element: "E06_08", val: v2NOT_REPORTING });
        }
    }
    else
    {
        ePatient["ePatient.09"] = _val[0];
        ePatient["PatientsHomeZip"] = _val[0];
        v2Array.push({ section: "E06", element: "E06_08", val: _val[0] });
    };


    ///////////ePatient.10////////
    _val = getValue(elementList, "ePatient.10");
    if (_val == null)
    {
        ePatient["ePatient.10"] = null;
        ePatient["PatientsHomeCountry"] = null;
        v2Array.push({ section: "E06", element: "E06_09", val: v2NOT_REPORTING });
    }
    else
    {
        ePatient["ePatient.10"] = _val[0];
        ePatient["PatientsHomeCountry"] = _val[0];
        v2Array.push({ section: "E06", element: "E06_09", val: _val[0] });
    };


    ///////////ePatient.11////////
    _val = getValue(elementList, "ePatient.11");
    if (_val == null)
    {
        ePatient["ePatient.11"] = null;
        ePatient["PatientHomeCensusTract"] = null;
    }
    else
    {
        ePatient["PatientHomeCensusTract"] = _val[0];
        ePatient["ePatient.11"] = _val[0];
    };

    ///////////ePatient.12////////
    _val = getValue(elementList, "ePatient.12");
    if (_val == null)
    {
        ePatient["ePatient.12"] = null;
        ePatient["SocialSecurityNumber"] = null;
    }
    else
    {
        ePatient["SocialSecurityNumber"] = _val[0];
        ePatient["ePatient.12"] = _val[0];    
    };


    ///////////ePatient.13////////
    _val = getValue(elementList, "ePatient.13");
    if (_val == null)
    {
        if (isRequiredStateElement("ePatient.13"))
        {
            ePatient["ePatient.13"] = NIL_V3NOT_RECORDED;
            ePatient["Gender"] = NOT_RECORDED;
            v2Array.push({ section: "E06", element: "E06_11", val: v2NOT_REPORTING });
        }        
    }
    else
    {
        ePatient["Gender"] = setCodeText("ePatient.13", _val[0]);
        ePatient["ePatient.13"] = _val[0];
        v2Array.push({ section: "E06", element: "E06_11", val: setV2("ePatient.13", _val[0]) });
    };


///////////ePatient.14////////
    _val = getValue(elementList, "ePatient.14");
    if (_val == null) 
    {
        if (isRequiredStateElement("ePatient.14")) 
        {
            ePatient["ePatient.14"] = null;
            ePatient["Race"] = null;
            v2Array.push({ section: "E06", element: "E06_12", val: v2NOT_RECORDED });
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
            arr2.push(SetV2("ePatient.14", _val[i]));
            arr3.push(setCodeText("ePatient.14", _val[i]));
        };
        v2Array.push({ section: "E06", element: "E06_12", val: arr2.slice(0) });
        ePatient["ePatient.14"] = arr1.slice(0);
        ePatient["Race"] = arr3.slice(0);
    };

    
    
///////////ePatient.15////////
    _val = getValue(elementList, "ePatient.15");
    if (_val == null) 
    {
        if (isRequiredStateElement("ePatient.15")) 
        {
            ePatient["ePatient.15"] = null;
            ePatient["Age"] = null;
            v2Array.push({ section: "E06", element: "E06_14", val: v2NOT_RECORDED });    
        }        
    }
    else 
    {
        ePatient["ePatient.15"] = _val[0];
        ePatient["Age"] = _val[0];
        v2Array.push({ section: "E06", element: "E06_14", val: _val[0] });
    };

    ///////////ePatient.16////////
    _val = getValue(elementList, "ePatient.16");
    if (_val == null) 
    {
        if (isRequiredStateElement("ePatient.16")) 
        {
            ePatient["ePatient.16"] = NIL_V3NOT_RECORDED;
            ePatient["AgeUnits"] = NOT_RECORDED;
            v2Array.push({ section: "E06", element: "E06_14", val: v2NOT_RECORDED });            
        }
    }
    else 
    {
        ePatient["ePatient.16"] = _val[0];
        ePatient["AgeUnits"] = setCodeText("ePatient.16", _val[0];
        v2Array.push({ section: "E06", element: "E06_14", val: SetV2("ePatient.16", _val[0]) });
    };

    ///////////ePatient.17////////
    _val = getValue(elementList, "ePatient.17");
    if (_val == null) {
        PNValue = getPertinentNegative("ePatient.17")
        if (PNValue != null) {
            if (PNValue == "8801019")
            {
                ePatient["DateOfBirth"] = "8801019";
                ePatient["ePatient.17"] = PN_REFUSED_IS_NILLABLE ;
                v2Array.push({ section: "E06", element: "E06_16", val: v2NOT_KNOWN });
            }

            else if (PNValue == "8801023")
            {
                ePatient["ePatient.17"] = "8801023";
                ePatient["DateOfBirth"] = PN_UNABLE_TO_COMPLETE_IS_NILLABLE ;
                v2Array.push({ section: "E06", element: "E06_16", val: v2NOT_KNOWN });
            }
        }
        else 
        {
            if (isRequiredStateElement("ePatient.17"))
            {
                ePatient["ePatient.17"] = NIL_V3NOT_RECORDED;
                ePatient["DateOfBirth"] = NOT_RECORDED;
                v2Array.push({ section: "E06", element: "E06_16", val: v2NOT_RECORDED });
            }
            else {
                ePatient["ePatient.17"] = NIL_V3NOT_REPORTING ;
                ePatient["DateOfBirth"] = NOT_REPORTING;
                v2Array.push({ section: "E06", element: "E06_16", val: v2NOT_REPORTING });
            }
        }
    }
    else
    {
        ePatient["ePatient.17"] = _val[0];
        ePatient["DateOfBirth"] = _val[0];
        v2Array.push({ section: "E06", element: "E06_16", val: _val[0] });
    };


    //ePatient.18////////////
    _val = getValue(elementList, "ePatient.18");
    if (_val == null)
    {
        ePatient["ePatient.18"] = null;
        ePatient["PatientPhoneNumber"] = null;
        v2Array.push({ section: "E06", element: "E06_17", val: v2NOT_KNOWN });
    }
    else
    {
        sPatHomeNum ="";
        var arr1 = [];
        var arr2 = [];
        for (var i = 0; i < _val.length; i++) {
            var PhoneNumberType = setPhoneNumberType("ePatient.18", _val[i]);
           
            if (PhoneNumberType == "9913001")
            {
                arr1.push("FAX  " + _val[i]);
                arr2.push("9913001  " + _val[i]);
            }
            else if (PhoneNumberType == "9913003")
            {
                arr1.push("HOME  " + _val[i]);
                arr1.push("9913003  " + _val[i]);
                sPatNum = _val[i];
             
            }
            else if (PhoneNumberType == "9913005")
            {
                arr1.push("MOBILE  " + _val[i]);
                arr2.push("9913005  " + _val[i]);               
            }
            else if (PhoneNumberType == "9913007")
            {
                arr1.push("PAGER " + _val[i]);
                arr2.push("9913007 " + _val[i]);
            }
            else if (PhoneNumberType == "9913009")
            {
                arr1.push("WORK " + _val[i]);
                arr2.push("9913009 " + _val[i]);
            }
            else
            {
                arr1.push(_val[i]);

                arr2.push(_val[i]);               
            }
        }       
        if(sPatHomeNum == null)
        {
            for (var i = 0; i < _val.length; i++) {
                if(val[i] !=null)
                {
                    sPatHomeNum = _val[i]

                }
            }
        };            
        ePatient["ePatient.18"] = arr1.slice(0);
        ePatient["PatientPhoneNumber"] = arr2.slice(0);
        v2Array.push({ section: "E06", element: "E06_17", val: sPatHomeNum });
    };


    //ePatient.19////////////
    _val = getValue(elementList, "ePatient.19");
    if (_val == null)
    {
        ePatient["ePatient.19"] = null;
        ePatient["PatientEmailAddress"] = null;
    }
    else
    {
        var eMailType = geteMailType("ePatient.19", _val[i]);
        var arr1 = [];       
        var arr2 = [];       
        for (var i = 0; i < _val.length; i++)
        {
            var eMailType = seteMailType("ePatient.19", _val[0][i]);

            if (eMailType == "9904001")
            {
                arr1.push("PERSONALEMAIL " + _val[i]);
                arr2.push("9904001 " + _val[i]);

            }
            else if (eMailType == "9913003")
            {
                arr1.push("WORKEMAIL " + _val[i]);
                arr2.push("9904003 " + _val[i]);
            }
            else
            {
                arr1.push(_val[i]);
                arr2.push( _val[i]);
            }
        }
        ePatient["ePatient.19"] = arr1.slice(0);
        ePatient["PatientEmailAddress"] = arr1.slice(0);
    };


    //ePatient.20////////////
    _val = getValue(elementList, "ePatient.20");
    if (_val == null)
    {
        ePatient["ePatient.20"] = null;
        ePatient["StateIssuingDriverLicense"] = null;
        v2Array.push({ section: "E06", element: "E06_18", val: v2NOT_KNOWN });
    }
    else
    {
        ePatient["StateIssuingDriverLicense"] = setCodeText("ePatient.19", _val[0]);
        v2Array.push({ section: "E06", element: "E06_18", val: setV2("ePatient.19", _val[0]) });
        ePatient["ePatient.20"] = _val[0];
    };


    _val = getValue(elementList, "ePatient.21");
    if (_val == null)
    {
        ePatient["ePatient.21"] = null;
        ePatient["DriverLicenseNumber"] = null;
        v2Array.push({ section: "E06", element: "E06_19", val: v2NOT_KNOWN });
    }
    else
    {
        ePatient["ePatient.21"] = _val[0];
        ePatient["DriverLicenseNumber"] = _val[0];
        v2Array.push({ section: "E06", element: "E06_19", val: _val[0]});
    };

    
};


////////////////////////////////////////////////////
var isRequiredStateElement = function (elementID) {
    return true;
};
var getValue = function (businessObject, valueObject) {
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



function setV2(NEMSISElementNumber, valueArray) {
    //    console.log(NEMSISElementNumber);
    var _retArray = [];
    //    console.log(valueArray);
    switch (NEMSISElementNumber) {
        case "ePatient.13":

            if (ePatient13[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(ePatient13[valueArray[0]]);
            }
            break;
        case "ePatient.14":

            if (ePatient14[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(ePatient14[valueArray[0]]);
            }
            break;

        case "ePatient.16":

            if (ePatient16[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(ePatient16[valueArray[0]]);
            }
            break;

        default:
            _retArray.push(NEMSISElementNumber = " version 2 not found");
    }
    return _retArray;
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


var ePatient334_13 = {
    "9906001" : "Female", 
    "9906003" : "Male", 
    "9906005" : "Unknown (Unable to Determine)", 
};
var ePatient334_14 = {
    "2514001" : "American Indian or Alaska Native", 
    "2514003" : "Asian", 
    "2514005" : "Black or African American", 
    "2514007" : "Hispanic or Latino", 
    "2514009" : "Native Hawaiian or Other Pacific Islander", 
    "2514011" : "White"
};
var ePatient334_16 = {
    "2516001": "Days",
    "2516003": "Hours",
    "2516005": "Minutes",
    "2516007": "Months",
    "2516009": "Years"
};

function setCodeText(NEMSISElementNumber, valueArray) {
    var _return = [];
    switch (NEMSISElementNumber) {
        case "ePatient.13":
            if (ePatient334_13[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = ePatient334_13[valueArray];
            }
            break;
        case "ePatient.14":
            if (ePatient334_14[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = ePatient334_14[valueArray];
            }
            break;

        case "ePatient.16":
            if (ePatient334_16[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = ePatient334_16[valueArray];
            }
            break;

        default:
            _return = " UNDEFINED";
    }
    return _return;

};

/*    <sch:let name="ePatient.13" value="if($no_patient or nem:ePatient/nem:ePatient.13 != '') then '' else key('nemSch_key_elements', 'ePatient.13', $nemSch_elements)"/>

    <sch:let name="ePatient.15" value="if($no_patient or nem:ePatient/nem:ePatient.AgeGroup/nem:ePatient.15 != '') then '' else key('nemSch_key_elements', 'ePatient.15', $nemSch_elements)"/>
*/