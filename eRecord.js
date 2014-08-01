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

var eRecord = new Object();
var seteeRecord = function (businessObject) {
    if (typeof businessObject == undefined) {
        SetNotApplicable();
        return _retArray;
    };

    v2Array.push({ section: "E01", element: "E01_04", val: "0.1" });
    eRecord["eRecord.04"] = "0.1";
    eRecord["SoftwareVersion"] = "0.1";

    eRecord["eRecord.02"] = "Data InMotion Inc.";
    eRecord["SoftwareCreator"] = "Data InMotion Inc.";
    v2Array.push({ section: "E01", element: "E01_02", val: "Data InMotion Inc." });

    v2Array.push({ section: "E02", element: "E02_03", val: "MoBi" });
    eRecord["eRecord.03"] = "MoBi";
    eRecord["SoftwareName"] = "MoBi";


    //////////////////////eRecord.01
  
    _val = getValue(businessObject.elements, "eRecord.01");
    if (_val == null)
    {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eRecord.01", Description: "PCR Number  MANDATORY" })
        eRecord["PCR"] = null;
        eRecord["eRecord.01"] = null;
    }
    else
    {
        v2Array.push({ section: "E01", element: "E01_01", val: _val[0] });
        eRecord["eRecord.01"] = _val[0];
        eRecord["PCR"] = _val[0];
    };

    /*  //////////////////////eRecord.02
    _val = getValue(elementList, "eRecord.02");
   if (_val == null)
    {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eRecord.02", Description: "Software Creator MANDATORY" })
        eRecord["eRecord.02"] = null;
        eRecord["SoftwareCreator"] = null;
        v2Array.push({ section: "E01", element: "E01_02", val: v2NOT_RECORDED });
        
    }
    else
    {
    
        eRecord["eRecord.02"] = "Data InMotion Inc.";
        eRecord["SoftwareCreator"] = "Data InMotion Inc.";
        v2Array.push({ section: "E01", element: "E01_02", val: "Data InMotion Inc." });
    //};

    //////////////////////eRecord.03
    _val = getValue(businessObject.elements, "eRecord.03");
    if (_val == null) {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eRecord.03", Description: "Software Name MANDATORY" })
        v2Array.push({ section: "E01", element: "E01_03", val: v2NOT_RECORDED });
        eRecord["eRecord.03"] = null;
        eRecord["SoftwareName"] = null;
    }
    else
    {
        v2Array.push({ section: "E02", element: "E02_03", val: "MoBi" });
        eRecord["eRecord.03"] = "MoBi";
        eRecord["SoftwareName"] = "MoBi";
    };


    //////////////////////eRecord.04
    _val = getValue(businessObject.elements, "eRecord.04");
    if (_val == null)
    {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eRecord.04", Description: "Software Version MANDATORY" })
        v2Array.push({ section: "E01", element: "E01_04", val: v2NOT_RECORDED });
        eRecord["eRecord.04"] = null;
        eRecord["SoftwareVersion"] = null;
    }
    else
    {
        v2Array.push({ section: "E01", element: "E01_04", val: "0.1" });
        eRecord["eRecord.04"] = "0.1";
        eRecord["SoftwareVersion"] = "0.1";
    };
    */
};

    var getValue = function (businessObject, valueObject) {
        //console.log(businessObject.length);
        var _retValue = null;
        var _bFound = false;
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
