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
var OLAPArray = [];
var LocationGroup = new Object;

var getSectionIndex = function (businessObject, sectionName) {
    //console.log(businessObject)
    var _retValue = [];
    for (var d = 0; d < businessObject.sections.length; d++) {
        if (businessObject.sections[d].attributes.name == sectionName) {
            _retValue.push(d);
        }
    }
    if (_retValue.length == 0) {
        _retValue.push(-1);
    }
    return _retValue;
}

var setdLocation = function (businessObject) {
    console.log(businessObject.name)
    if (businessObject.name != "dLocation") {
        return null
    };

    var v2Array = [];
    var _retArray = [];
    var XMLString = "";
    _retArray.push("<dLocation>" + '\n');
    OLAPArray.push("<dLocation>" + '\n');

    _sectionIndex = getSectionIndex(businessObject, "dLocation.LocationGroup");

    console.log(_sectionIndex)

    for (var xx = 0; xx <_sectionIndex.length; xx++)
    {  

        var elementList = businessObject.sections[xx].attributes.elements;
        _retArray.push('\t' + "<dLocation.LocationGroup>" + '\n');
        OLAPArray.push('\t' + "<dLocation.LocationGroup>" + '\n');

        // console.log(elementList)

        //dLocation.01/////////
        _val = getdLocationValue(elementList, "dLocation.01");
        if (_val == null) {
            LocationGroup["dLocation.01"] = null;
            OLAPArray.push('\t\t' + "<LocationType>" + null + "</LocationType>" + '\n');
            _retArray.push('\t\t' + "<dLocation.01>" + null + "</dLocation.01>" + '\n');
        }
        else {
            OLAPArray.push('\t\t' + "<LocationType>" + setCodeText("dLocation.01", _val) + "</LocationType>" + '\n');
            LocationGroup["dLocation.01"] = _val;
            _retArray.push('\t\t' + "<dLocation.01>" + _val + "</dLocation.01>" + '\n');
        };

        //dLocation.02/////////
        _val = getdLocationValue(elementList, "dLocation.02");
        if (_val == null)
        {
            OLAPArray.push('\t\t' + "<LocationName>" + null + "</LocationName>" + '\n');
            LocationGroup["dLocation.02"] = null;
        }
        else
        {
            LocationGroup["dLocation.02"] = _val;
            OLAPArray.push('\t\t' + "<LocationName>" + _val + "</LocationName>" + '\n');
            _retArray.push('\t\t' + "<dLocation.02>" + _val + "</dLocation.02>" + '\n');
            v2Array.push({ section: "D05", element: "D05_01", val: _val });
        };

        //dLocation.03/////////
        _val = getdLocationValue(elementList, "dLocation.03");
        if (_val == null)
        {
            OLAPArray.push('\t\t' + "<LocationNumber>" + null + "</LocationNumber>" + '\n');
            LocationGroup["dLocation.03"] = null;
        }
        else
        {
            OLAPArray.push('\t\t' + "<LocationNumber>" + _val + "</LocationNumber>" + '\n');
            v2Array.push({ section: "D05", element: "D05_02", val: _val });
            LocationGroup["dLocation.03"] = _val;
            _retArray.push('\t\t' + "<dLocation.03>" + _val + "</dLocation.03>" + '\n');
        };

        //dLocation.04/////////
        _val = getdLocationValue(elementList, "dLocation.04");
        if (_val == null)
        {
            OLAPArray.push('\t\t' + "<GPS>" + null + "</GPS>" + '\n');
            LocationGroup["dLocation.04"] = null;
        }
        else {
            v2Array.push({ section: "D05", element: "D05_04", val: _val });
            LocationGroup["dLocation.04"] = _val;
            OLAPArray.push('\t\t' + "<GPS>" + _val + "</GPS>" + '\n');
            _retArray.push('\t\t' + "<dLocation.04>" + _val + "</dLocation.04>" + '\n');
        };

        //dLocation.05/////////
        _val = getdLocationValue(elementList, "dLocation.05");
        if (_val == null)
        {
            OLAPArray.push('\t\t' + "<NationalGridCoordinates>" + null + "</NationalGridCoordinates>" + '\n');
            LocationGroup["dLocation.05"] = null;
        }
        else
        {
            OLAPArray.push('\t\t' + "<NationalGridCoordinates>" + _val + "</NationalGridCoordinates>" + '\n');
            LocationGroup["dLocation.05"] = _val;
            _retArray.push('\t\t' + "<dLocation.05>" + _val + "</dLocation.05>" + '\n');
        };

        //dLocation.06/////////
        _val = getdLocationValue(elementList, "dLocation.06");
        if (_val == null)
        {
            OLAPArray.push('\t\t' + "<Address>" + null + "</Address>" + '\n');
            LocationGroup["dLocation.06"] = null;
        }
        else
        {
            OLAPArray.push('\t\t' + "<Address>" + _val + "</Address>" + '\n');
            v2Array.push({ section: "D05", element: "D05_05", val: _val });
            LocationGroup["dLocation.06"] = _val;
            _retArray.push('\t\t' + "<dLocation.06>" + _val + "</dLocation.06>" + '\n');

        };

        //dLocation.07/////////
        _val = getdLocationValue(elementList, "dLocation.07");
        if (_val == null)
        {
            OLAPArray.push('\t\t' + "<City>" + null + "</City>" + '\n');
            LocationGroup["dLocation.07"] = null;
        }
        else
        {
            OLAPArray.push('\t\t' + "<City>" + _val + "</City>" + '\n');
            v2Array.push({ section: "D05", element: "D05_06", val: _val });
            LocationGroup["dLocation.07"] = _val;
            _retArray.push('\t\t' + "<dLocation.07>" + _val + "</dLocation.07>" + '\n');
        };

        //dLocation.08/////////
        _val = getdLocationValue(elementList, "dLocation.08");
        if (_val == null)
        {
            OLAPArray.push('\t\t' + "<State>" + null + "</State>" + '\n');
            LocationGroup["dLocation.08"] = null;
        }
        else
        {
            OLAPArray.push('\t\t' + "<State>" + _val + "</State>" + '\n');
            v2Array.push({ section: "D05", element: "D05_07", val: _val });
            LocationGroup["dLocation.08"] = _val;
            _retArray.push('\t\t' + "<dLocation.08>" + _val + "</dLocation.08>" + '\n');
        };

        //dLocation.09/////////
        _val = getdLocationValue(elementList, "dLocation.09");
        if (_val == null)
        {
            OLAPArray.push('\t\t' + "<Zip>" + null + "</Zip>" + '\n');
            LocationGroup["dLocation.09"] = null;
        }
        else
        {
            OLAPArray.push('\t\t' + "<Zip>" + _val + "</Zip>" + '\n');
            LocationGroup["dLocation.09"] = _val;
            v2Array.push({ section: "D05", element: "D05_08", val: _val });
            _retArray.push('\t\t' + "<dLocation.09>" + _val + "</dLocation.09>" + '\n');
        };

        //dLocation.10/////////
        _val = getdLocationValue(elementList, "dLocation.10");
        if (_val == null)
        {
            OLAPArray.push('\t\t' + "<County>" + null + "</County>" + '\n');
            LocationGroup["dLocation.10"] = null;
        }
        else
        {
            OLAPArray.push('\t\t' + "<County>" + _val + "</County>" + '\n');
            LocationGroup["dLocation.10"] = _val;
            _retArray.push('\t\t' + "<dLocation.10>" + _val + "</dLocation.10>" + '\n');
        };

          
        //dLocation.11/////////
        _val = getdLocationValue(elementList, "dLocation.11");
        if (_val == null)
        {
            OLAPArray.push('\t\t' + "<Country>" + null + "</Country>" + '\n');
            LocationGroup["dLocation.11"] = null;
        }
        else
        {
            OLAPArray.push('\t\t' + "<Country>" + setCodeText("dLocation.11", _val) + "</Country>" + '\n');
            LocationGroup["dLocation.11"] = _val;
            _retArray.push('\t\t' + "<dLocation.11>" + _val + "</dLocation.11>" + '\n');
        };

        //dLocation.11/////////
        _val = getdLocationValue(elementList, "dLocation.12");
        if (_val == null)
        {
            LocationGroup["dLocation.12"] = null;
            OLAPArray.push('\t\t' + "<Phone>" + null + "</Phone>" + '\n');

        }
        else {
            var arr = [];
            var arr2 = [];
            for (var t = 0; t < _val.length; t++) {
                arr2.push(setV2("dLocation.12", _val));
                arr.push(_val[t]);
                _retArray.push('\t\t' + "<dLocation.12>" + _val[t] + "</dLocation.12>" + '\n');
                OLAPArray.push('\t\t' + "<Phone>" + _val[t] + "</Phone>" + '\n');
            }
            LocationGroup["dLocation.12 "] = arr.slice(0);
            v2Array.push({ section: "D05", element: "D05_06", val: arr2.slice(0) });

        };
        _retArray.push('\t' + "</dLocation.LocationGroup>" + '\n');
        OLAPArray.push('\t' + "</dLocation.LocationGroup>" + '\n');
    };
    _retArray.push("</dLocation>" + '\n');
    OLAPArray.push("</dLocation>" + '\n');

    for (var i = 0; i < _retArray.length ; i++) {
        XMLString = XMLString + _retArray[i];

    }
    console.log(XMLString)
    return LocationGroup;

};    //end of function   



var isRequiredStateElement = function (elementID) {
    return true;
};
var getdLocationValue = function (payload, valueObject) {
    var _retVal = [];
    i = 0;

    for (var i = 0; i < payload.length ; i++) {
        if (payload[i].attributes.title == valueObject) {
            //  console.log(valueObject)
            //  console.log(payload[i].attributes.value)
            if (payload[i].attributes.value == undefined) {
                _retVal.push(null);
            }
            else {
                _retVal.push(payload[i].attributes.value);
            }
        }
    }
    return _retVal;
};

function setV2(NEMSISElementNumber, valueArray) {
    //    console.log(NEMSISElementNumber);
    var _retArray = [];

    //    console.log(valueArray);
    switch (NEMSISElementNumber) {
        case "dLocation.01":

            if (dLocation01[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(dLocation01[valueArray[0]]);
            }
            break;
        default:
            _retArray.push(NEMSISElementNumber = " version 2 not found");
    }

    return _retArray;

};
var dLocation01 = {

    "1701001": "7320",
    "1701005": "7280",
    "1701003": "7290",
    "1701009": "7300",
    "1701007": "7320",
    "1701011": "7280",

};
function setCodeText(NEMSISElementNumber, codeVal) {
    var _return = [];


    switch (NEMSISElementNumber) {
        case "dLocation.01":
            if (dLocation334_01[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dLocation334_01[codeVal];
            }
            break;

        case "dLocation.11":
            if (dLocation334_11[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dLocation334_11[codeVal];
            }
            break;

        default:
            _return = " UNDEFINED";
    }
    return _return;

}



var dLocation334_01 = {
    "1301001" : "EMS Agency Headquarters", 
    "1301003" : "EMS Staging Area", 
    "1301005" : "EMS Station", 
    "1301007" : "Other (Not Listed)"
};
var dLocation334_11 = {

    "CA": "Canada",
    "MX": "Mexico",
    "US": "United States"
};
