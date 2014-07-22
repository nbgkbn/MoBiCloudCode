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

var dLocation= new Object;
var LocationGroup = new Object;
var LocationGroupArray = [];

var getSectionIndex = function (businessObject, sectionName)
{
    //console.log(businessObject)
    var _retValue = [];
    for (var d = 0; d < businessObject.sections.length; d++)
    {
        if (businessObject.sections[d].attributes.name == sectionName)
        {
            _retValue.push(d);
        }
    }
    if (_retValue.length == 0)
    {
        _retValue.push(-1);
    }
    return _retValue;
};

var setdLocation = function (businessObject)
{
    console.log(businessObject.name)
    if (businessObject.name != "dLocation")
    {
        return null
    };
    V3XML.BeginNode("dFacility");
    OLAPXML.BeginNode("dFacility");
    _sectionIndex = getSectionIndex(businessObject, "dLocation.LocationGroup");

    console.log(_sectionIndex)

    for (var xx = 0; xx < _sectionIndex.length; xx++)
    {
        var elementList = businessObject.sections[xx].attributes.elements;
        V3XML.BeginNode("dLocation.LocationGroup");
        OLAPXML.BeginNode("dLocation.LocationGroup");


        // console.log(elementList)

        //dLocation.01/////////
        _val = getdLocationValue(elementList, "dLocation.01");
        if (_val == null)
        {
            LocationGroup["dLocation.01"] = null;
            V3XML.Node("dLocation.01", null);
            OLAPXML.Node("LocationType", null);
            LocationGroup["LocationType"] = null;
        }
        else
        {
            LocationGroup["dLocation.01"] = _val[0];
            V3XML.Node("dLocation.01", _val[0]);
            OLAPXML.Node("LocationType", setCodeText("dLocation.01", _val[0]));
            LocationGroup["LocationType"] = setCodeText("dLocation.01", _val[0]);
        };

        //dLocation.02/////////
        _val = getdLocationValue(elementList, "dLocation.02");
        if (_val == null)
        {
            LocationGroup["dLocation.02"] = null;
            V3XML.Node("dLocation.02", null);
            OLAPXML.Node("LocationName", null);
            LocationGroup["LocationName"] = null;
        }
        else
        {
            LocationGroup["dLocation.02"] = _val[0];
            V3XML.Node("dLocation.02", _val[0]);
            OLAPXML.Node("LocationName", _val[0]);
            LocationGroup["LocationName"] = _val[0];
        };

        //dLocation.03/////////
        _val = getdLocationValue(elementList, "dLocation.03");
        if (_val == null)
        {
            LocationGroup["dLocation.03"] = null;
            V3XML.Node("dLocation.03", null);
            OLAPXML.Node("LocationNumber", null);
            LocationGroup["LocationNumber"] = null;
            _v2Array.push({ section: "D05", element: "D05_02", val: null });
        }
        else
        {
            LocationGroup["dLocation.03"] = _val[0];
            V3XML.Node("dLocation.03", _val[0]);
            OLAPXML.Node("LocationNumber", _val[0]);
            LocationGroup["LocationNumber"] = _val[0];
            _v2Array.push({ section: "D05", element: "D05_02", val: _val[0] });
        };

        //dLocation.04/////////
        _val = getdLocationValue(elementList, "dLocation.04");
        if (_val == null)
        {
            LocationGroup["dLocation.04"] = null;
            V3XML.Node("dLocation.04", null);
            OLAPXML.Node("GPS", null);
            LocationGroup["GPS"] = null;
            _v2Array.push({ section: "D05", element: "D05_04", val: null });
        }
        else
        {
            LocationGroup["dLocation.04"] = _val[0];
            V3XML.Node("dLocation.04", _val[0]);
            OLAPXML.Node("GPS", _val[0]);
            LocationGroup["GPS"] = _val[0];
            _v2Array.push({ section: "D05", element: "D05_04", val: _val[0] });
        };

        //dLocation.05/////////
        _val = getdLocationValue(elementList, "dLocation.05");
        if (_val == null)
        {
            LocationGroup["dLocation.05"] = null;
            V3XML.Node("dLocation.05", null);
            OLAPXML.Node("NationalGridCoordinates", null);
            LocationGroup["NationalGridCoordinates"] = null;
        }
        else
        {
            LocationGroup["dLocation.05"] = _val[0];
            V3XML.Node("dLocation.05", _val[0]);
            OLAPXML.Node("NationalGridCoordinates", _val[0]);
            LocationGroup["NationalGridCoordinates"] = _val[0];
        };

        //dLocation.06/////////
        _val = getdLocationValue(elementList, "dLocation.06");
        if (_val == null)
        {
            LocationGroup["dLocation.06"] = null;
            V3XML.Node("dLocation.06", null);
            OLAPXML.Node("Address", null);
            LocationGroup["Address"] = null;
            _v2Array.push({ section: "D05", element: "D05_05", val: null });
        }
        else
        {
            LocationGroup["dLocation.06"] = _val[0];
            V3XML.Node("dLocation.06", _val[0]);
            OLAPXML.Node("Address", _val[0]);
            LocationGroup["Address"] = _val[0];
            _v2Array.push({ section: "D05", element: "D05_05", val: _val[0] });
        };

        //dLocation.07/////////
        _val = getdLocationValue(elementList, "dLocation.07");
        if (_val == null)
        {
            LocationGroup["dLocation.07"] = null;
            V3XML.Node("dLocation.07", null);
            OLAPXML.Node("City", null);
            LocationGroup["City"] = null;
            _v2Array.push({ section: "D05", element: "D05_06", val: null });
        }
        else
        {
            LocationGroup["dLocation.07"] = _val[0];
            V3XML.Node("dLocation.07", _val[0]);
            OLAPXML.Node("City", _val[0]);
            LocationGroup["City"] = _val[0];
            _v2Array.push({ section: "D05", element: "D05_06", val: _val[0] });
        };

        //dLocation.08/////////
        _val = getdLocationValue(elementList, "dLocation.08");
        if (_val == null)
        {
            LocationGroup["dLocation.08"] = null;
            V3XML.Node("dLocation.08", null);
            OLAPXML.Node("State", null);
            LocationGroup["State"] = null;
            _v2Array.push({ section: "D05", element: "D05_07", val: null });
        }
        else
        {
            LocationGroup["dLocation.08"] = _val[0];
            V3XML.Node("dLocation.08", _val[0]);
            OLAPXML.Node("State", _val[0]);
            LocationGroup["State"] = _val[0];
            _v2Array.push({ section: "D05", element: "D05_07", val: _val[0] });
        };

        //dLocation.09/////////
        _val = getdLocationValue(elementList, "dLocation.09");
        if (_val == null)
        {
            LocationGroup["dLocation.09"] = null;
            V3XML.Node("dLocation.09", null);
            OLAPXML.Node("Zip", null);
            LocationGroup["Zip"] = null;
            _v2Array.push({ section: "D05", element: "D05_08", val: null });
        }
        else
        {
            LocationGroup["dLocation.09"] = _val[0];
            V3XML.Node("dLocation.09", _val[0]);
            OLAPXML.Node("Zip", _val[0]);
            LocationGroup["Zip"] = _val[0];
            _v2Array.push({ section: "D05", element: "D05_08", val: _val[0] });
        };

        //dLocation.10/////////
        _val = getdLocationValue(elementList, "dLocation.10");
        if (_val == null)
        {
            LocationGroup["dLocation.10"] = null;
            V3XML.Node("dLocation.10", null);
            OLAPXML.Node("County", null);
            LocationGroup["County"] = null;
        }
        else
        {
            LocationGroup["dLocation.10"] = _val[0];
            V3XML.Node("dLocation.10", _val[0]);
            OLAPXML.Node("County", _val[0]);
            LocationGroup["County"] = _val[0];
        };


        //dLocation.11/////////
        _val = getdLocationValue(elementList, "dLocation.11");
        if (_val == null)
        {
            LocationGroup["dLocation.11"] = null;
            V3XML.Node("dLocation.11", null);
            OLAPXML.Node("Country", null);
            LocationGroup["Country"] = null;
        }
        else
        {
            LocationGroup["dLocation.11"] = _val[0];
            V3XML.Node("dLocation.11", _val[0]);
            OLAPXML.Node("Country", setCodeText("dLocation.11", _val[0]));
            LocationGroup["Country"] = setCodeText("dLocation.11", _val[0]);
        };

        //dLocation.12/////////
        _val = getValue(elementList, "dLocation.12");
        if (_val == null) {
            if (isRequiredStateElement("dLocation.12") == - true) {
                V3XML.BeginNode("dLocation.12")
                ContactInfoGroup["dLocation.12"] = v3NOT_RECORDED;
                ContactInfoGroup["LocationPhoneNumber"] = v3NOT_RECORDED;
                V3XML.Attrib("dLocation.12", NIL_V3NOT_RECORDED);
                OLAPXML.Node("LocationPhoneNumber", "NOT RECORDED");
                V3XML.EndNode();
            }
            else
            {
                V3XML.BeginNode("dLocation.12")
                ContactInfoGroup["dLocation.12"] = v3NOT_REPORTING;
                ContactInfoGroup["LocationPhoneNumber"] = v3NOT_REPORTING;
                V3XML.Attrib("dLocation.12", NIL_V3NOT_REPORTING);
                OLAPXML.Node("LocationPhoneNumber", "NOT REPORTED");
                V3XML.EndNode();
            }
        }
        else {
            arr1 = [];
            for (var i = 0; i < _val.length; i++) {
                var PhoneNumberType = setPhoneNumberType("dLocation.12", _val[i]);

                if (PhoneNumberType == "9913001") {
                    V3XML.BeginNode("dLocation.12")
                    V3XML.AttribNoEQ(FAX, _val[i])

                    OLAPXML.BeginNode("LocationPhoneNumber")
                    OLAPXML.AttribNoEQ(FAX, _val[i])
                    OLAPXML.EndNode();

                    arr1.push("FAX  " + _val[i]);
                }
                else if (PhoneNumberType == "9913003") {
                    V3XML.BeginNode("dLocation.12")
                    V3XML.AttribNoEQ(HOME, _val[i])
                
                    OLAPXML.BeginNode("LocationPhoneNumber")
                    OLAPXML.AttribNoEQ(HOME, _val[i])
                    OLAPXML.EndNode();

                    arr1.push("HOME  " + _val[i]);
                }
                else if (PhoneNumberType == "9913005") {
                    V3XML.BeginNode("dLocation.12")
                    V3XML.AttribNoEQ(MOBILE, _val[i])
                
                    OLAPXML.BeginNode("LocationPhoneNumber")
                    OLAPXML.AttribNoEQ(MOBILE, _val[i])
                    OLAPXML.EndNode();

                    arr1.push("MOBILE  " + _val[i]);
                }
                else if (PhoneNumberType == "9913007") {
                    V3XML.BeginNode("dLocation.12")
                    V3XML.AttribNoEQ(PAGER, _val[i])
                
                    OLAPXML.BeginNode("LocationPhoneNumber")
                    OLAPXML.AttribNoEQ(PAGER, _val[i])
                
                }
                else if (PhoneNumberType == "9913009") {
                    V3XML.BeginNode("dLocation.12")
                    V3XML.AttribNoEQ(WORKPHONE, _val[i])
                
                    OLAPXML.BeginNode("LocationPhoneNumber")
                    OLAPXML.AttribNoEQ(WORKPHONE, _val[i])
                
                    arr1.push("WORK  " + _val[i]);
                }
                else {
                    console.log(_val[i])
                    _v2Array.push({ section: "D05", element: "D05_09", val: _val[i] });
                    V3XML.Node("dLocation.12")
                    V3XML.AttribNoEQ(WORKPHONE, _val[i])
                
                    OLAPXML.BeginNode("LocationPhoneNumber")
                    OLAPXML.AttribNoEQ(WORKPHONE, _val[i])
                
                }
                
            };
            LocationGroup["dLocation.12"] = arr1.slice(0);
            LocationGroup["LocationPhoneNumber"] = arr1.slice(0);
        };

        LocationGroupArray.push(LocationGroup)

        V3XML.EndNode();
        OLAPXML.EndNode();

    };
    V3XML.EndNode();
    OLAPXML.EndNode();


    if (LocationGroupArray.length > 0) {
        dLocation.LocationGroup = LocationGroupArray;
    };


    return dLocation;


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
    "1301001": "EMS Agency Headquarters",
    "1301003": "EMS Staging Area",
    "1301005": "EMS Station",
    "1301007": "Other (Not Listed)"
};
var dLocation334_11 = {

    "CA": "Canada",
    "MX": "Mexico",
    "US": "United States"
};
