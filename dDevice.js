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


var dDevice = new Object;
var DeviceGroup = new Object;
var OLAPArray = [];

var setdDevice = function (businessObject) {
    var _retArray = [];
    var v2Array = [];

    _retArray.push("<dDevice>" + '\n');
    OLAPArray.push("<dDevice>" + '\n');

    console.log(businessObject);
//    console.log(businessObject.sections.length);
    for (var xx = 0; xx < businessObject.sections.length; xx++)
    {
        _retArray.push('\t' +"<dDeviceInfoGroup>" + '\n');
        OLAPArray.push('\t' +"<dDeviceInfoGroup>" + '\n');
        var elementList = businessObject.sections[xx].attributes.elements;
        console.log(elementList);

        ///dDevice.01 
        _val = getdDeviceValue(elementList, "dDevice.01");
        if (_val == null) {
            DeviceGroup["dDevice.01"] = null;
            _retArray.push('\t\t' + "<dDevice.01>" + null + "</dDevice.01>" + '\n');
            OLAPArray.push('\t\t' + "<DeviceSerialNumber>" + null + "</DeviceSerialNumber>" + '\n');
        }
        else 
        {
            DeviceGroup["dDevice.01"] = _val[0];
            _retArray.push('\t\t' + "<dDevice.01>" + _val + "</dDevice.01>" + '\n');
            v2Array.push({ section: "D09", element: "D09_01", val: _val });
            OLAPArray.push('\t\t' + "<DeviceSerialNumber>" + _val + "</DeviceSerialNumber>" + '\n');
        };

        ///dDevice.02 
        _val = getdDeviceValue(elementList, "dDevice.02");
        if (_val == null) 
        {
            DeviceGroup["dDevice.02"] = null;
            _retArray.push('\t\t' + "<dDevice.02>" + null + "</dDevice.02>" + '\n');
            OLAPArray.push('\t\t' + "<DeviceName>" + null + "</DeviceName>" + '\n');
        }
        else 
        {
            DeviceGroup["dDevice.02"] = _val[0];
            _retArray.push('\t\t' + "<dDevice.02>" + _val[0] + "</dDevice.02>" + '\n');
            v2Array.push({ section: "D09", element: "D09_02", val: _val });
            OLAPArray.push('\t\t' + "<DeviceName>" + _val + "</DeviceName>" + '\n');
        };

        ///dDevice.03
        _val = getdDeviceValue(elementList, "dDevice.03");
        if (_val == null)
        {
            OLAPArray.push('\t\t' + "<MedicalDeviceType>" + null + "</MedicalDeviceType>" + '\n');
            DeviceGroup["dDevice.03"] = null;
            _retArray.push('\t\t' + "<dDevice.03>" + null + "</dDevice.03>" + '\n');
        }
        else 
        {
            var arr = [];
            for (var t = 0; t < _val.length; t++) 
            {
                OLAPArray.push('\t\t' + "<MedicalDeviceType>" + setCodeText("dDevice.03", _val[t]) + "</MedicalDeviceType>" + '\n');
                v2Array.push({ section: "D02", element: "D02_01", val: null });
                arr.push(_val[t]);             
                _retArray.push('\t\t' + "<dDevice.03>" + _val[t] + "</dDevice.03>" + '\n');             
            }
            DeviceGroup["dDevice.03"] = arr.slice(0);
        };

        ///dDevice.04
        _val = getdDeviceValue(elementList, "dDevice.04");
        if (_val == null) {
            DeviceGroup["dDevice.04"] = null;
            _retArray.push('\t\t' + "<dDevice.04>" + null + "</dDevice.04>" + '\n');
            OLAPArray.push('\t\t' + "<DeviceManufacturer>" + null + "</DeviceManufacturer>" + '\n');
            v2Array.push({ section: "D09", element: "D09_03", val: null });
        }
        else {
            DeviceGroup["dDevice.04"] = _val[0];
            OLAPArray.push('\t\t' + "<DeviceManufacturer>" + _val + "</DeviceManufacturer>" + '\n');
            _retArray.push('\t\t' + "<dDevice.04>" + _val + "</dDevice.04>" + '\n');
            v2Array.push({ section: "D09", element: "D09_03", val: _val });
        };

        ///dDevice.05
        _val = getdDeviceValue(elementList, "dDevice.05");
        if (_val == null) {
            DeviceGroup["dDevice.05"] = null;
            _retArray.push('\t\t' + "<dDevice.05>" + null + "</dDevice.05>" + '\n');
            OLAPArray.push('\t\t' + "<DeviceModelNumber>" + null + "</DeviceModelNumber>" + '\n');
        }
        else {
            DeviceGroup["dDevice.05"] = _val[0];
            _retArray.push('\t\t' + "<dDevice.04>" + _val[0] + "</dDevice.04>" + '\n');
            v2Array.push({ section: "D09", element: "D09_04", val: _val });
            OLAPArray.push('\t\t' + "<DeviceModelNumber>" + _val + "</DeviceModelNumber>" + '\n');
        };

        ///dDevice.06
        _val = getdDeviceValue(elementList, "dDevice.06");
        if (_val == null) {
            DeviceGroup["dDevice.06"] = null;
            _retArray.push('\t\t' + "<dDevice.06>" + null + "</dDevice.06>" + '\n');
            OLAPArray.push('\t\t' + "<DevicePurchaseDate>" + null + "</DevicePurchaseDate>" + '\n');
        }
        else 
        {
            DeviceGroup["dDevice.06"] = _val;
            _retArray.push('\t\t' + "<dDevice.06>" + _val + "</dDevice.06>" + '\n');
            v2Array.push({ section: "D09", element: "D09_05", val: _val });
            OLAPArray.push('\t\t' + "<DevicePurchaseDate>" + _val + "</DevicePurchaseDate>" + '\n');
        };

 /*       _retArray.push('\t' + "</DeviceInfoGroup>" + '\n');
        var _ag = new _deviceInfoGroup();
        _ag.set("parent", dAgency334.id);
        var _ag = new (_deviceInfoGroup);
        _ag.set("parent", dAgency334.id);
        _ag.set("Medical Device Serial Number", DeviceGroup["dDevice.01"]);
        _ag.set("Medical Device Name or ID", DeviceGroup["dDevice.02"]);
        _ag.set("Medical Device Type", DeviceGroup["dDevice.03"]);
        _ag.set("Medical Device Manufacturer", DeviceGroup["dDevice.04"]);
        _ag.set("Medical Device Model Number", DeviceGroup["dDevice.05"]);
        _ag.set("Medical Device Purchase Date", DeviceGroup["dDevice.06"]);
        _agArray.push(_ag);
        */
        _retArray.push('\t' + "</dDeviceInfoGroup>" + '\n');
        OLAPArray.push('\t' + "</dDeviceInfoGroup>" + '\n');
    } // loop term


    _retArray.push("</dDevice>");
    OLAPArray.push("</dDevice>");

    var XMLString = ""

    for (var i = 0; i < OLAPArray.length ; i++) {
        XMLString = XMLString + OLAPArray[i];

    }
    console.log(XMLString)
    XMLString = ""
    for (var i = 0; i < _retArray.length ; i++) {
        XMLString = XMLString + _retArray[i];

    }
    console.log(XMLString)
};    //end of function   


var isRequiredStateElement = function (elementID) {
    return true;
};
var getdDeviceValue = function (elementList, valueObject) {
    var _arr = [];
    for (var i = 0; i < elementList.length; i++) {
        if (elementList[i].attributes.title == valueObject) {
            if (elementList[i].attributes.value == undefined) {
                return null;
            }
            else {
                _arr.push(elementList[i].attributes.value);
            }
        }
    };
    return _arr;
};




    var setCodeText = function (elementList, valueObject) {
        var _arr = [];
        for (var i = 0; i < elementList.length; i++) {
            if (elementList[i].attributes.title == valueObject) {
                if (elementList[i].attributes.value == undefined) {
                    return null;
                }
                else {
                    _arr.push(elementList[i].attributes.value);
                }
            }
        };
        return _arr;
    };
var dDevice334_03 = {

    "1603001" : "Capnography-Numeric", 
    "1603003" : "Capnography-Waveform", 
    "1603005" : "Chemistry Measurement-Blood or Serum", 
    "1603007" : "Chemistry Measurement-Glucometer", 
    "1603009" : "Chemistry Measurement-Urine", 
    "1603011" : "CPR-External Device", 
    "1603013" : "Defibrillator-Automated", 
    "1603015" : "Defibrillator-Manual", 
    "1603017" : "ECG-12 Lead or Greater", 
    "1603019" : "ECG-Less than 12 Lead (Cardiac Monitor)", 
    "1603021" : "Medication Infusion Pump", 
    "1603023" : "Other (Not Listed)", 
    "1603025" : "Oximetry-Carbon Monoxide", 
    "1603027" : "Oximetry-Oxygen", 
    "1603029" : "Pressure Monitors-Invasive", 
    "1603031" : "Pressure Monitors-Non-Invasive", 
    "1603033" : "Respirator (BLS)", 
    "1603035" : "Ventilator (ALS)", 
    "1603037" : "Ventilator Assistance-BiPAP", 
    "1603039" : "Ventilator Assistance-CPAP"

};
