var ErrorList = [];
var v3NOT_REPORTING = " NV=\"7701005\"";
var v3NOT_RECORDED = " NV=\"7701003\"";N
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

var eArrest = new Object;
var E11 = new Object;
var _retArray = [];
var XMLString = ""
var seteCrew = function (businessObject) {
    if (businessObject.name != "eCrew") {
        return null
    };

    var _retArray = [];
    if (businessObject == undefined) {
        _retArray = setNotApplicableAll();
        console.log(_retArray)
        for (var i = 0; i < _retArray.length ; i++) {
            XMLString = XMLString + _retArray[i];

        }
        console.log(XMLString)
        return _retArray;
    }
    _retArray.push("<eCrew>" + '\n');
    for (var i = 0; i < businessObject.sections.length; i++)
    {
        
        _retArray.push('\t' + "<eCrew.CrewGroup>" + '\n');

        //eCrew.01/////////////
        _val = getValue(businessObject.elements, "eCrew.01");
        if (_val == null) 
        {
            if (isRequiredStateElement("eCrew.01") == true) 
            {
                _retArray.push('\t\t' + "<eCrew.01" + v3NOT_RECORDED + '\n');
                OLAPArray.push('\t\t' + "<CrewMemberID>" + v3NOT_RECORDED + "</CrewMemberID>" + '\n');
                CrewGroup["eCrew.01"] = v3NOT_RECORDED;
                v2Array.push({ section: "E04", element: "E04_01", val: v2NOT_RECORDED });
            }
            else 
            {
                OLAPArray.push('\t\t' + "<CrewMemberID>" + v3NOT_REPORTING+ "</CrewMemberID>" + '\n');
                CrewGroup["eCrew.01"] = v3NOT_REPORTING;
                _retArray.push('\t\t' + "<eCrew.01" + NIL_V3NOT_REPORTING + '\n');
                v2Array.push({ section: "E04", element: "E04_01", val: v2NOT_REPORTING });
            }
        }
        else 
        {
            OLAPArray.push('\t\t' + "<CrewMemberID>" + _val+ "</CrewMemberID>" + '\n');
            E04.E04_01 = _val;
            CrewGroup["eCrew.01"] = _val;
            _retArray.push('\t\t' + "<eCrew.01>" + _val + "</eCrew.01>" + '\n');
        };

        //eCrew.02/////////////
        _val = getValue(businessObject.elements, "eCrew.02");
        if (_val == null) 
        {
            if (isRequiredStateElement("eCrew.02") == true) 
            {
                OLAPArray.push('\t\t' + "<CrewMemberLevel>" + "NOT_RECORDED" + "</CrewMemberLevel>" + '\n');
                _retArray.push('\t\t' + "<eCrew.02" + v3NOT_RECORDED + '\n');
                CrewGroup["eCrew.02"] = v3NOT_RECORDED;
                v2Array.push({ section: "E04", element: "E04_03", val: v2NOT_RECORDED });
            }
            else 
            {
                OLAPArray.push('\t\t' + "<CrewMemberLevel>" + "NOT_REPORTING"+ "</CrewMemberLevel>" + '\n');
                CrewGroup["eCrew.02"] = v3NOT_REPORTING;
                _retArray.push('\t\t' + "<eCrew.02" + NIL_V3NOT_REPORTING + '\n');
                v2Array.push({ section: "E04", element: "E04_03", val: v2NOT_REPORTING });
            }
        }
        else 
        {
            OLAPArray.push('\t\t' + "<CrewMemberLevel>" +  setCodeText("eCrew.02", _val)+ "</CrewMemberLevel>" + '\n');
            v2Array.push({ section: "E04", element: "E04_03", val: setV2("eCrew.02", _val)});
            CrewGroup["eCrew.02"] = _val;
            _retArray.push('\t\t' + "<eCrew.02>" + _val + "</eCrew.02>" + '\n');
        };

        //eCrew.03/////////////
        _val = getValue(businessObject.elements, "eCrew.03");
        if (_val == null) 
        {
            if (isRequiredStateElement("eCrew.03") == true) 
            {
                OLAPArray.push('\t\t' + "<CrewMemberResponseRole>" + "NOT_RECORDED" + "</CrewMemberResponseRole>" + '\n');
                _retArray.push('\t\t' + "<eCrew.03" + v3NOT_RECORDED + '\n');
                CrewGroup["eCrew.03"] = v3NOT_RECORDED;
                v2Array.push({ section: "E04", element: "E04_02", val: v2NOT_RECORDED});
            }
            else 
            {
                v2Array.push({ section: "E04", element: "E04_02", val: v2NOT_REPORTING});
                OLAPArray.push('\t\t' + "<CrewMemberResponseRole>" + "NOT_REPORTING" + "</CrewMemberResponseRole>" + '\n');
                CrewGroup["eCrew.03"] = v3NOT_REPORTING;
                _retArray.push('\t\t' + "<eCrew.03" + NIL_V3NOT_REPORTING + '\n');
            }
        }
        else 
        {
            v2Array.push({ section: "E04", element: "E04_02", val: setV2("eCrew.03", _val)});
            CrewGroup["eCrew.03"] = _val[0];
            OLAPArray.push('\t\t' + "<CrewMemberResponseRole>" + setCodeText("eCrew.03", _val) + "</CrewMemberResponseRole>" + '\n');
            _retArray.push('\t\t' + "<eCrew.03>" + _val[0] + "</eCrew.03>" + '\n');
        };
        _retArray.push('\t' + "</eCrew.CrewGroup>" + '\n');

    }
};

var setNotApplicableAll = function (businessObject) 
{
    v2Array.push({ section: "E04", element: "E04_01", val: v2NOT_APPLICABLE});
    v2Array.push({ section: "E04", element: "E04_02", val: v2NOT_APPLICABLE});
    v2Array.push({ section: "E04", element: "E04_03", val: v2NOT_APPLICABLE});

    _retArray.push("<eCrew>" + '\n');
    _retArray.push('\t' + "<eCrew.CrewGroup>" + '\n');
    _retArray.push('\t' + "<eCrew.01>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<eCrew.02>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<eCrew.03>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "</eCrew.CrewGroup>" + '\n');
    _retArray.push("</eCrew>" + '\n');
    // console.log(_retArray);
    return _retArray;

}



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
            case "eCrew.02":

                if (eCrew02[valueArray[0]] == undefined) {
                    _retArray.push(valueArray[0] + "UNDEFINED");
                }
                else {
                    _retArray.push(eCrew02[valueArray[0]]);
                }
                break;
            case "eCrew.03":
                for (i = 0; i < valueArray.length; i++) {
                    if (eCrew03[valueArray[i]] == undefined) {
                        _retArray.push(valueArray[i] + "UNDEFINED");
                    }
                    else {
                        _retArray.push(eCrew03[valueArray[i]]);
                    }
                }
                break;
           
            default:
                _retArray.push(NEMSISElementNumber = " version 2 not found");
        }

        return _retArray;

    };

    var eCrew03 = {
        "2403001":"580",
        "2403003":"580",
        "2403005":"595",
        "2403007":"590",
        "2403009":"600",	
        "2403011":"585",
        "2403013":"590"	};	
	
    var eCrew02 = {
        "9925001":"6110",
        "9925003":"6100",
        "9925005":"6090",
        "9925007":"6110",
        "9925013":"	6120",
        "9925015":"	6090",
        "9925017":"	6100",
        "9925019":"	6110",
        "9925021":"	6111",
        "9925023":"	640",
        "9925025":"	645",
        "9925027":"	6112",
        "9925031":"635",
        "9925033":"6110",
        "9925034":"610",
        "9925037":"611",
        "9925039":"6110",
        "9925041":"6111",
        "9925043":"6111"
    };
    function setCodeText(NEMSISElementNumber, codeVal) {
        var _return = [];


        switch (NEMSISElementNumber) {
            case "eCrew.02":
                if (eCrew334_02[codeVal] == undefined) {
                    _return = codeVal;
                }
                else {
                    _return = eCrew334_02[codeVal];
                }
                break;
            case "eCrew.03":
                if (eCrew334_03[codeVal] == undefined) {
                    _return = codeVal;
                }
                else {
                    _return = eCrew334_03[codeVal];
                }
                break;



            default:
                _return = " UNDEFINED";
        }
        return _return;

    };

var eCrew334_02 = {
    "2402001" : "2009 Advanced Emergency Medical Technician (AEMT)", 
    "2402003" : "2009 Emergency Medical Responder (EMR)", 
    "2402005" : "2009 Emergency Medical Technician (EMT)", 
    "2402007" : "2009 Paramedic", 
    "2402009" : "First Responder", 
    "2402011" : "EMT-Basic", 
    "2402013" : "EMT-Intermediate", 
    "2402015" : "EMT-Paramedic", 
    "2402017" : "Nurse", 
    "2402019" : "Other Healthcare Professional", 
    "2402021" : "Other Non-Healthcare Professional", 
    "2402023" : "Physician", 
    "2402025" : "Respiratory Therapist", 
    "2402027" : "Student", 
    "2402029" : "Critical Care Paramedic", 
    "2402031" : "Community Paramedicine" 
};

var eCrew334_03= {

"2403001" : "Driver/Pilot-Response", 
"2403003" : "Driver/Pilot-Transport", 
"2403005" : "Other (Not Listed)", 
"2403007" : "Other Patient Caregiver-At Scene", 
"2403009" : "Other Patient Caregiver-Transport", 
"2403011" : "Primary Patient Caregiver-At Scene", 
"2403013" : "Primary Patient Caregiver-Transport" 
}
