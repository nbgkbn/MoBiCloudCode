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
    if(typeof businessObject == undefined)
    {
        SetNotApplicable();
        return _retArray;
    }
    _retArray.push("<eDevice>")
    OLAPArray.push("<eDevice>")
    for (var xx = 0; xx < businessObject.sections.length; xx++) 
    {
        var elementList = businessObject.sections[xx].attributes.elements;
        console.log(isDefined("eDevice"));  // if Not, set all to NOT_APPLICABLE
        return;
        var _retArray = [];


        _retArray.push('\t' + "<eDeviceGroup>")
        OLAPArray.push('\t' + "<eDeviceGroup>")

        //eDevice.01/////////////
        _val = getValue(businessObject.elements, "eDevice.01");
        if (_val == null)
        {
            eDeviceGroup["eDevice.01"] = null;
            OLAPArray.push('\t' + "<MedicalDeviceSerialNumber>" + null + "</MedicalDeviceSerialNumber>" + '\n');
        }
        else
        {
            OLAPArray.push('\t' + "<MedicalDeviceSerialNumber>" + setCodeText("eDevice.01", _val) + "</MedicalDeviceSerialNumber>" + '\n');
            _retArray.push('\t' + "<eDevice.01>" + _val + "</eDevice.01>")
            eDeviceGroup["eDevice.01"] = _val;
        };


        //eDevice.02////////////
        _val = getValue(businessObject.elements, "eDevice.02");
        if (_val == null)
        {
            OLAPArray.push('\t' + "<DateTimeofEvent>" + null + "</DateTimeofEvent>" + '\n');
            v2Array.push({ section: "E21", element: "E21_01", val: "" });
            eDeviceGroup["eDevice.02"] = null;
            _retArray.push('\t' + "<eDevice.02>" + null + "</eDevice.02>")
        }
        else
        {
            OLAPArray.push('\t' + "<DateTimeofEvent>" + _val + "</DateTimeofEvent>" + '\n');
            _retArray.push('\t' + "<eDevice.02>" + _val + "</eDevice.02>")
            v2Array.push({ section: "E21", element: "E21_01", val: _val });
            eDeviceGroup["eDevice.02"] = _val;
        };

        //eDevice.03////////////
        _val = getValue(businessObject.elements, "eDevice.03");
        if (_val == null)
        {
            OLAPArray.push('\t\t' + "<MedicalDeviceEventType>" + null + "</MedicalDeviceEventType>" + '\n');
            eDeviceGroup["eDevice.03"] = null;
            _retArray.push('\t\t' + "<eDevice.03>" + null + "</eDevice.03>");
            v2Array.push({ section: "E21", element: "E21_02", val: _val });
        }
        else
        {
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _val.length; i++) {
                arr1[i] = _val[i];
                arr2[i] = SetV2("eDevice.03", _val[0]);
                _retArray.push('\t\t' + "<eDevice.03>" + _val[i] + "</eDevice.03>");
                OLAPArray.push('\t\t' + "<MedicalDeviceEventType>" + setCodeText("eDevice.03", _val[i]) + "</MedicalDeviceEventType>" + '\n');
            }
            eDeviceGroup["eDevice.03"] = arr1.slice(0);
            v2Array.push({ section: "E21", element: "E21_02", val: arr2.slice(0) });
        };

        ////////////////////////////////////////////
        ////////////////////////////////////////////
        _retArray.push('\t\t' + "<eDevice.WaveformGroup>")
        OLAPArray.push('\t\t' + "<eDevice.WaveformGroup>")

        //eDevice.04///////////////
        _val = getValue(businessObject.elements, "eDevice.04");
        if (_val == null)
        {
            v2Array.push({ section: "E21", element: "E21_03", val: null });
            _retArray.push('\t\t\t' + "<eDevice.04>" + null + "</eDevice.04>")
            OLAPArray.push('\t\t\t' + "<MedicalDeviceWaveformGraphicType>" + null + "</MedicalDeviceWaveformGraphicType>" + '\n');
        }
        else 
        {
            v2Array.push({ section: "E21", element: "E21_03", val: setV2("eDevice.04", _val) });
            OLAPArray.push('\t\t\t' + "<MedicalDeviceWaveformGraphicType>" + _val + "</MedicalDeviceWaveformGraphicType>" + '\n');
            _retArray.push('\t\t\t' + "<eDevice.04>" + _val + "</eDevice.04>")
            eDeviceGroup["eDevice.04"] = _val;
        };

        //eDevice.05//////////////////
        _val = getValue(businessObject.elements, "eDevice.05");
        if (_val == null)
        {
            v2Array.push({ section: "E21", element: "E21_04", val: null });
            _retArray.push('\t\t\t' + "<eDevice.05>" + null + "</eDevice.05>")
            OLAPArray.push('\t\t\t' + "<MedicalDeviceWaveformGraphic>" + null + "</MedicalDeviceWaveformGraphic>" + '\n');
            eDeviceGroup["eDevice.05"] = null;
        }
        else {
            _retArray.push('\t\t\t' + "<eDevice.05>" + _val + "</eDevice.05>")
            OLAPArray.push('\t\t\t' + "<MedicalDeviceWaveformGraphic>" + _val + "</MedicalDeviceWaveformGraphic>" + '\n');
            v2Array.push({ section: "E21", element: "E21_04", val: null });
            eDeviceGroup["eDevice.05"] = _val;
        };

        //eDevice.06////////////////
        _val = getValue(businessObject.elements, "eDevice.06");
        if (_val == null)
        {
            v2Array.push({ section: "E21", element: "E21_05", val: null });
            _retArray.push('\t\t\t' + "<eDevice.06>" + null + "</eDevice.06>")
            OLAPArray.push('\t\t\t' + "<MedicalDeviceMode>" + null + "</MedicalDeviceMode>" + '\n');
            eDeviceGroup["eDevice.06"] = null;
        }
        else
        {
            v2Array.push({ section: "E21", element: "E21_05", val: setV2("eDevice.06", _val) });
            _retArray.push('\t\t\t' + "<eDevice.06>" + _val + "</eDevice.06>")
            OLAPArray.push('\t\t\t' + "<MedicalDeviceMode>" + setCodeText("eDevice.06", _val) + "</MedicalDeviceMode>" + '\n');

            eDeviceGroup["eDevice.06"] = _val[0];
        };

        _retArray.push('\t\t' + "</eDevice.WaveformGroup>")
        OLAPArray.push('\t\t' + "</eDevice.WaveformGroup>")
        /////////////////////////////////////
        /////////////////////////////////////

        //eDevice.07////////////////
        _val = getValue(businessObject.elements, "eDevice.07");
        if (_val == null)
        {
            v2Array.push({ section: "E21", element: "E21_06", val: null });
            _retArray.push('\t\t' + "<eDevice.07>" + null + "</eDevice.07>")
            OLAPArray.push('\t\t' + "<MedicalDeviceECGLead>" + null + "</MedicalDeviceECGLead>" + '\n');
            eDeviceGroup["eDevice.07"] = null;
        }
        else
        {
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _val.length; i++)
            {
                arr1[i] = _val[i];
                arr2[i] = SetV2("eDevice.07", _val[0]);
                _retArray.push('\t\t' + "<eDevice.07>" + _val[i] + "</eDevice.07>");
                OLAPArray.push('\t\t' + "<MedicalDeviceECGLead>" + setCodeText("eDevice.06", _val[i]) + "</MedicalDeviceECGLead>" + '\n');
            }
            eArrest["eDevice.07"] = arr1.slice(0);
            v2Array.push({ section: "E21", element: "E21_06", val: arr2.slice(0) });
        };

        //eDevice.08////////////
        _val = getValue(businessObject.elements, "eDevice.08");
        if (_val == null)
        {
            v2Array.push({ section: "E21", element: "E21_07", val: null });
            _retArray.push('\t\t' + "<eDevice.08>" + null + "</eDevice.08>")
            OLAPArray.push('\t\t' + "<ECGInterpretation>" + null + "</ECGInterpretation>" + '\n');
            eDeviceGroup["eDevice.07"] = null;
        }
        else
        {
            OLAPArray.push('\t\t' + "<ECGInterpretation>" + _val + "</ECGInterpretation>" + '\n');
            _retArray.push('\t\t' + "<eDevice.08>" + _val + "</eDevice.08>");
            v2Array.push({ section: "E21", element: "E21_07", val: _val });
            eDeviceGroup["eDevice.08"] = _val;
        };

        /////////////////////////////////
        /////////////////////////////////

        _retArray.push('\t\t' + "<eDevice.ShockGroup>")
        OLAPArray.push('\t\t' + "<eDevice.ShockGroup>")

        //eDevice.09///////////
        _val = getValue(businessObject.elements, "eDevice.09");
        if (_val == null)
        {
            v2Array.push({ section: "E21", element: "E21_08", val: null });
            _retArray.push('\t\t\t' + "<eDevice.09>" + null + "</eDevice.09>")
            OLAPArray.push('\t\t\t' + "<TypeofShock>" + null + "</TypeofShock>" + '\n');
            eDeviceGroup["eDevice.09"] = null;
        }
        else
        {
            v2Array.push({ section: "E21", element: "E21_08", val: setV2("eDevice.09", _val) });
            _retArray.push('\t\t\t' +"<eDevice.09>" + _val + "</eDevice.09>")
            OLAPArray.push('\t\t' + "<TypeofShock>" + setCodeText("eDevice.09", _val) + "</TypeofShock>" + '\n');
            eDeviceGroup["eDevice.09"] = _val;
        };

        //eDevice.10//////////////
        _val = getValue(businessObject.elements, "eDevice.10");
        if (_val == null)
        {
            v2Array.push({ section: "E21", element: "E21_09", val: null });
            _retArray.push('\t\t\t' + "<eDevice.10>" + null + "</eDevice.10>")
            OLAPArray.push('\t\t\t' + "<ShockorPacingEnergy>" + null + "</ShockorPacingEnergy>" + '\n');
            eDeviceGroup["eDevice.10"] = null;

        }
        else
        {
            _retArray.push('\t\t\t' +"<eDevice.10>" + _val + "</eDevice.10>")
            v2Array.push({ section: "E21", element: "E21_09", val: _val });
            eDeviceGroup["eDevice.10"] = _val;
            OLAPArray.push('\t\t\t' + "<ShockorPacingEnergy>" + _val + "</ShockorPacingEnergy>" + '\n');
        };

        //eDevice.11//////////////
        _val = getValue(businessObject.elements, "eDevice.11");
        if (_val == null)
        {
            v2Array.push({ section: "E21", element: "E21_10", val: null });
            _retArray.push('\t\t\t' + "<eDevice.11>" + null + "</eDevice.11>")
            OLAPArray.push('\t\t\t' + "<TotalNumberofShocksDelivered>" + null + "</TotalNumberofShocksDelivered>" + '\n');
            eDeviceGroup["eDevice.11"] = null;

        }
        else
        {
            OLAPArray.push('\t\t\t' + "<TotalNumberofShocksDelivered>" + _val + "</TotalNumberofShocksDelivered>" + '\n');
            _retArray.push('\t\t\t' +"<eDevice.11>" + _val + "</eDevice.11>")
            eDeviceGroup["eDevice.11"] = _val[0];
            v2Array.push({ section: "E21", element: "E21_10", val: _val});
        };

        //eDevice.12//////////////////////
        _val = getValue(businessObject.elements, "eDevice.12");
        if (_val == null)
        {
            v2Array.push({ section: "E21", element: "E21_11", val: null });
            _retArray.push('\t\t\t' + "<eDevice.12>" + null + "</eDevice.12>")
            OLAPArray.push('\t\t\t' + "<PacingRate>" + null + "</PacingRate>" + '\n');
            eDeviceGroup["eDevice.12"] = null;

        }
        else
        {
            _retArray.push('\t\t\t' + "<eDevice.12>" + _val + "</eDevice.12>");
            v2Array.push({ section: "E21", element: "E21_11", val: _val });
            OLAPArray.push('\t\t\t' + "<PacingRate>" + _val + "</PacingRate>" + '\n');
            eDeviceGroup["eDevice.12"] = _val;
        };
        OLAPArray.push('\t\t' + "<eDevice.ShockGroup>")
        OLAPArray.push('\t' + "<eDevice.DeviceGroup>")
        _retArray.push('\t\t' + "<eDevice.ShockGroup>")
        _retArray.push('\t' + "</eDevice.DeviceGroup>")
    };
    OLAPArray.push("</eDevice>")
    _retArray.push("</eDevice>")

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
