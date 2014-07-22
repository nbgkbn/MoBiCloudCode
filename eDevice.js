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
var PN_CONTRAINDICATION_NOTED_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801001\"/>";
var PN_DENIED_BY_ORDER_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801003\"/>";


var seteDevice = function (businessObject) {
    var isNotApplicableFlag = true;  //once I have real data, set to False

    
    for (var xx = 0; xx < businessObject.sections.length; xx++) 
    {
        var elementList = businessObject.sections[xx].attributes.elements;        

        //eDevice.01/////////////
        _val = getValue(businessObject.elements, "eDevice.01");
        if (_val == null)
        {
            eDeviceGroup["eDevice.01"] = null;
            eDeviceGroup["MedicalDeviceSerialNumber"] = null;            
        }
        else
        {
            isNotApplicableFlag = false;
            eDeviceGroup["eDevice.01"] = _val[0];
            eDeviceGroup["MedicalDeviceSerialNumber"] = setCodeText("eDevice.01", _val)[0];
        };


        //eDevice.02////////////
        _val = getValue(businessObject.elements, "eDevice.02");
        if (_val == null)
        {            
            v2Array.push({ section: "E21", element: "E21_01", val:null });
            eDeviceGroup["eDevice.02"] = null;
            eDeviceGroup["DateTimeofEvent"] = null;
        }
        else
        {
            isNotApplicableFlag = false;            
            v2Array.push({ section: "E21", element: "E21_01", val: _val[0] });
            eDeviceGroup["eDevice.02"] = _val[0];
            eDeviceGroup["DateTimeofEvent"] = _val[0];
        };

        //eDevice.03////////////
        _val = getValue(businessObject.elements, "eDevice.03");
        if (_val == null)
        {
            eDeviceGroup["eDevice.03"] = null;
            eDeviceGroup["MedicalDeviceEventType"] = null;
            v2Array.push({ section: "E21", element: "E21_02", val: null });
        }
        else
        {
            isNotApplicableFlag = false;
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _val.length; i++)
            {
                arr1.push(_val[i]);
                arr2.push(SetV2("eDevice.03", _val[0]));
                arr3.push(setCodeText("eDevice.03", _val[0]));
            }
            eDeviceGroup["eDevice.03"] = arr1.slice(0);
            eDeviceGroup["MedicalDeviceEventType"] = arr3.slice(0);
            v2Array.push({ section: "E21", element: "E21_02", val: arr2.slice(0) });
        };

        ////////////////////////////////////////////
        ////////////////////////////////////////////

        //eDevice.04///////////////
        _val = getValue(businessObject.elements, "eDevice.04");
        if (_val == null)
        {
            eDeviceGroup["eDevice.04"] = null;
            eDeviceGroup["MedicalDeviceWaveformGraphicType"] = null;
            v2Array.push({ section: "E21", element: "E21_03", val: null });
        }
        else 
        {
            isNotApplicableFlag = false;
            v2Array.push({ section: "E21", element: "E21_03", val: setV2("eDevice.04", _val)[0] });
            eDeviceGroup["eDevice.04"] = _val[0];
            eDeviceGroup["MedicalDeviceWaveformGraphicType"] = _val[0];
        };

        //eDevice.05//////////////////
        _val = getValue(businessObject.elements, "eDevice.05");
        if (_val == null)
        {
            v2Array.push({ section: "E21", element: "E21_04", val: null });
            eDeviceGroup["eDevice.05"] = null;
            eDeviceGroup["MedicalDeviceWaveformGraphic"] = null;
        }
        else
        {
            isNotApplicableFlag = false;
            v2Array.push({ section: "E21", element: "E21_04", val: _val[0] });
            eDeviceGroup["eDevice.05"] = _val[0];
            eDeviceGroup["MedicalDeviceWaveformGraphic"] = _val[0];
        };

        //eDevice.06////////////////
        _val = getValue(businessObject.elements, "eDevice.06");
        if (_val == null)
        {
            v2Array.push({ section: "E21", element: "E21_05", val: null });
            eDeviceGroup["eDevice.06"] = null;
            eDeviceGroup["MedicalDeviceMode"] = null;
        }
        else
        {
            isNotApplicableFlag = false;
            v2Array.push({ section: "E21", element: "E21_05", val: setV2("eDevice.06", _val[0]) });
            eDeviceGroup["MedicalDeviceMode"] = _val[0];
            eDeviceGroup["eDevice.06"] = _val[0];
        };

        /////////////////////////////////////
        /////////////////////////////////////

        //eDevice.07////////////////
        _val = getValue(businessObject.elements, "eDevice.07");
        if (_val == null)
        {
            v2Array.push({ section: "E21", element: "E21_06", val: null });
            eDeviceGroup["eDevice.07"] = null;
            eDeviceGroup["MedicalDeviceECGLead"] = null;
        }
        else
        {
            isNotApplicableFlag = false;
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _val.length; i++)
            {
                arr1.push(_val[i]);
                arr2.push(SetV2("eDevice.07", _val[i]));
                arr3.push(setCodeText("eDevice.07", _val[i]));
            }
            eArrest["eDevice.07"] = arr1.slice(0);
            eArrest["MedicalDeviceECGLead"] = arr3.slice(0);
            v2Array.push({ section: "E21", element: "E21_06", val: arr2.slice(0) });
        };

        //eDevice.08////////////
        _val = getValue(businessObject.elements, "eDevice.08");
        if (_val == null)
        {
            v2Array.push({ section: "E21", element: "E21_07", val: null });
            eDeviceGroup["eDevice.07"] = null;
            eDeviceGroup["ECGInterpretation"] = null;
        }
        else
        {
            isNotApplicableFlag = false;
            v2Array.push({ section: "E21", element: "E21_07", val: _val[0] });
            eDeviceGroup["eDevice.08"] = _val[0];
            eDeviceGroup["ECGInterpretation"] = _val[0];
        };

        /////////////////////////////////

        //eDevice.09///////////
        _val = getValue(businessObject.elements, "eDevice.09");
        if (_val == null)
        {
            v2Array.push({ section: "E21", element: "E21_08", val: null });
            eDeviceGroup["eDevice.09"] = null;
            eDeviceGroup["TypeofShock"] = null;            
        }
        else
        {
            isNotApplicableFlag = false;
            v2Array.push({ section: "E21", element: "E21_08", val: setV2("eDevice.09", _val[0]) });
            eDeviceGroup["eDevice.09"] = _val[0];
            eDeviceGroup["TypeofShock"] = _setCodeText("eDevice.09", _val[0]);
        };

        //eDevice.10//////////////
        _val = getValue(businessObject.elements, "eDevice.10");
        if (_val == null)
        {
            v2Array.push({ section: "E21", element: "E21_09", val: null });
            eDeviceGroup["eDevice.10"] = null;
            eDeviceGroup["ShockorPacingEnergy"] = null;
        }
        else
        {
            isNotApplicableFlag = false;
            v2Array.push({ section: "E21", element: "E21_09", val: _val[0] });
            eDeviceGroup["eDevice.10"] = _val[0];
            eDeviceGroup["ShockorPacingEnergy"] = _val[0];            
        };

        //eDevice.11//////////////
        _val = getValue(businessObject.elements, "eDevice.11");
        if (_val == null)
        {
            v2Array.push({ section: "E21", element: "E21_10", val: null });
            eDeviceGroup["eDevice.11"] = null;
            eDeviceGroup["TotalNumberofShocksDelivered"] = null;
        }
        else
        {
            isNotApplicableFlag = false;
            eDeviceGroup["eDevice.11"] = _val[0];
            eDeviceGroup["TotalNumberofShocksDelivered"] = _val[0];
            v2Array.push({ section: "E21", element: "E21_10", val: _val});
        };

        //eDevice.12//////////////////////
        _val = getValue(businessObject.elements, "eDevice.12");
        if (_val == null)
        {
            v2Array.push({ section: "E21", element: "E21_11", val: null });
            eDeviceGroup["eDevice.12"] = null;
            eDeviceGroup["PacingRate"] = null;
        }
        else
        {
            isNotApplicableFlag = false;
            v2Array.push({ section: "E21", element: "E21_11", val: _val[0] });         
            eDeviceGroup["eDevice.12"] = _val[0];
            eDeviceGroup["PacingRate"] = _val[0];
        };
    };

    return _retArray;
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
}


function setD2(NEMSISElementNumber, valueArray) {
    //    console.log(NEMSISElementNumber);
    var _retArray = [];
    //    console.log(valueArray);
    switch (NEMSISElementNumber) {
        case "eDevice.02":

            if (eDevice02[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eDevice02[valueArray[0]]);
            }
            break;
        case "eDevice.03":
            for (i = 0; i < valueArray.length; i++) {
                if (eDevice03[valueArray[i]] == undefined) {
                    _retArray.push(valueArray[i] + "UNDEFINED");
                }
                else {
                    _retArray.push(eDevice03[valueArray[i]]);
                }
            }
            break;
        case "eDevice.04":
            if (eDevice04[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eDevice04[valueArray[0]]);
            }
            break;

        case "eDevice.06":
            if (eDevice06[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eDevice06[valueArray[0]]);
            }
            break;


        case "eDevice.07":
            if (eDevice07[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eDevice07[valueArray[0]]);
            }
            break;

        case "eDevice.08":
            if (eDevice08[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eDevice08[valueArray[0]]);
            }
            break;

        default:
            _retArray.push(NEMSISElementNumber = " version 2 not found");
    }

    return _retArray;
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
        "4109001":"5310",
        "4109003":"5311"
    }


    var eDevice334_02 = {

    "4103001" : "12-Lead ECG", 
    "4103003" : "Analysis (Button Pressed)", 
    "4103005" : "CO2", 
    "4103007" : "Date Transmitted", 
    "4103009" : "Defibrillation", 
    "4103011" : "ECG-Monitor", 
    "4103013" : "Heart Rate", 
    "4103015" : "Invasive Pressure 1", 
    "4103017" : "Invasive Pressure 2", 
    "4103019" : "No Shock Advised", 
    "4103021" : "Non-Invasive BP", 
    "4103023" : "Other", 
    "4103025" : "Pacing Electrical Capture", 
    "4103027" : "Pacing Started", 
    "4103029" : "Pacing Stopped", 
    "4103031" : "Patient Connected", 
    "4103033" : "Power On", 
    "4103035" : "Pulse Oximetry", 
    "4103037" : "Pulse Rate", 
    "4103039" : "Respiratory Rate", 
    "4103041" : "Shock Advised", 
    "4103043" : "Sync Off", 
    "4103045" : "Sync On", 
    "4103047" : "Temperature 1", 
    "4103049" : "Temperature 2"
};

var eDevice334_06 = {
   "4106001" : "Advisory", 
   "4106003" : "Automated", 
   "4106005" : "Demand", 
   "4106007" : "Manual", 
   "4106009" : "Mid-Stream", 
   "4106011" : "Sensing", 
   "4106013" : "Side-Stream"
    };

var eDevice334_07 = {
   "4107001" : "I", 
   "4107003" : "II", 
   "4107005" : "III", 
   "4107007" : "AVR", 
   "4107009" : "AVL", 
   "4107011" : "AVF", 
   "4107013" : "Paddle", 
   "4107015" : "Pads", 
   "4107017" : "V1", 
   "4107019" : "V2", 
   "4107021" : "V3", 
   "4107023" : "V3r", 
   "4107025" : "V4", 
   "4107027" : "V4r", 
   "4107029" : "V5", 
   "4107031" : "V5r", 
   "4107033" : "V6", 
   "4107035" : "V6r", 
   "4107037" : "V7", 
   "4107039" : "V8", 
   "4107041" : "V9"
    };
var eDevice334_09 = {
    "4109001" : "Biphasic", 
    "4109003" : "Monophasic", 
};

function setCodeText(NEMSISElementNumber, valueArray) {
    var _return = [];
    switch (NEMSISElementNumber) {
        case "eDevice.03":
            if (eDevice334_03[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eDevice334_03[valueArray];
            }
            break;
        case "eDevice.06":
            if (eDevice334_06[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eDevice334_06[valueArray];
            }
            break;
        case "eDevice.07":
            if (eDevice334_07[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eDevice334_07[valueArray];
            }
            break;
        case "eDevice.06":
            if (eDevice334_06[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eDevice334_06[valueArray];
            }
            break;
        case "eDevice.07":
            if (eDevice334_07[valueArray] == undefined) {
                _return = valueArray + " UNDEFINED";
            }
            else {
                _return = eDevice334_07[valueArray];
            }
            break;


        default:
            _return = " UNDEFINED";
    }
    return _return;

};
