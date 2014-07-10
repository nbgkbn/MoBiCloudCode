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

var PN_REFUSED_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801019\"/>";
var PN_UNABLE_TO_COMPLETE_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801023\"/>";
var PN_FINDING_NOT_PRESENT_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801005\"/>";

var XMLString = "";

var dContact = new Object;
var ContactInfoGroup = new Object;
var EMSMedicalDirectorGroup = new Object;

var setdContact = function (businessObject)
{
    //If empty object, Set to Not Applicablt
    if (businessObject == undefined) {
        _retArray = setNotApplicableAll();
        console.log(_retArray)
        for (var i = 0; i < _retArray.length ; i++) {
            XMLString = XMLString + _retArray[i];

        }
        console.log(XMLString)
        return _retArray;
    };

    var _retArray = [];
    var OLAPArray = [];
    var v2Array  = [];
    console.log(businessObject);
    _retArray.push("<dContact>" + '\n');
    OLAPArray.push("<dContact>" + '\n');

    for (var xx = 0; xx < businessObject.sections.length; xx++)
    {
        var elementList = businessObject.sections[xx].attributes.elements;
        _retArray.push('\t' + "<dContact.ContactInfoGroup>" + '\n');
        OLAPArray.push('\t' + "<dContact.ContactInfoGroup>" + '\n');

        // dContact.01/////////////
        _val = getdContactValue(elementList, "dContact.01");
        if (_val == null)
        {
            if(isRequiredStateElement("dContact.01") == true)
            {
                ContactInfoGroup["ContactInfoGroup.01"] = v3NOT_RECORDED;
                _retArray.push('\t\t' + "<dContact.01" + NIL_V3NOT_RECORDED + '\n');
                OLAPArray.push('\t\t' + "<AgencyContactType>" + "NOT_RECORDED" + "</AgencyContactType>" + '\n');
            }
            else
            {
                _retArray.push('\t\t' + "<dContact.01" + NIL_V3NOT_REPORTING + '\n');          
                ContactInfoGroup["ContactInfoGroup.01"] = V3NOT_REPORTING;
                OLAPArray.push('\t\t' + "<AgencyContactType>" + "NOT_REPORTING" + "</AgencyContactType>" + '\n');
            }
        }
        else
        {
            alert("mo")
            _retArray.push('\t\t' + "<dContact.01>" + _val + "</dContact.01>" + '\n');
            ContactInfoGroup["ContactInfoGroup.01"] = _val;
            OLAPArray.push('\t\t' + "<AgencyContactType>" + setCodeText("dContact.01", _val) + "</AgencyContactType>" + '\n');

        };
        
        // dContact.02/////////////
        _val = getdContactValue(elementList, "dContact.02");
        if (_val == null)
        {
            if(isRequiredStateElement("dContact.02") ==- true)
            {
                ContactInfoGroup["dContact.02"] = v3NOT_RECORDED;
                _retArray.push('\t\t' + "<dContact.02" + NIL_V3NOT_RECORDED + '\n');
                v2Array.push({ section: "D02", element: "D02_01", val: null });
                OLAPArray.push('\t\t' + "<ContactLastName>" + "NOT_RECORDED" + "</ContactLastName>" + '\n');
            }
            else
            {
                ContactInfoGroup["dContact.02"] = v2NOT_REPORTING
                v2Array.push({ section: "D02", element: "D02_01", val: v2NOT_REPORTING });
                _retArray.push('\t\t' + "<dContact.02" + NIL_V3NOT_REPORTING + '\n');
                OLAPArray.push('\t\t' + "<ContactLastName>" + "NOT_REPORTING" + "</ContactLastName>" + '\n');
            }
        }
        else
        {
            ContactInfoGroup["dContact.02"] = _val;
            _retArray.push('\t\t' + "<dContact.02>" + _val + "</dContact.02>" + '\n');
            v2Array.push({ section: "D02", element: "D02_01", val: _val });
            OLAPArray.push('\t\t' + "<ContactLastName>" + _val + "</ContactLastName>" + '\n');
        };
        

        // dContact.03/////////////
        _val = getdContactValue(elementList, "dContact.03");
        if (_val == null)
        {
            if(isRequiredStateElement("dContact.03") ==- true)
            {
                ContactInfoGroup["dContact.03"] = v3NOT_RECORDED;
                OLAPArray.push('\t\t' + "<ContactFirstName>" + "NOT_RECORDED" + "</ContactFirstName>" + '\n');
                _retArray.push('\t\t' + "<dContact.03" + NIL_V3NOT_RECORDED + '\n');
                v2Array.push({ section: "D02", element: "D02_03", val: NIL_V3NOT_RECORDED });
            }
            else
            {
                ContactInfoGroup["dContact.03"] = v2NOT_REPORTING
                OLAPArray.push('\t\t' + "<ContactFirstName>" + "NOT_REPORTING" + "</ContactFirstName>" + '\n');
                _retArray.push('\t\t' + "<dContact.03" + NIL_V3NOT_REPORTING + '\n');
                v2Array.push({ section: "D02", element: "D02_03", val: v2NOT_REPORTING });
            }
        }
        else
        {
            ContactInfoGroup["dContact.03"] = _val;
            _retArray.push('\t\t' +"<dContact.03>" + _val + "</dContact.03>"+ '\n');
            v2Array.push({ section: "D02", element: "D02_03", val: _val });
            OLAPArray.push('\t\t' + "<ContactFirstName>" + _val + "</ContactFirstName>" + '\n');
        };
        
        // dContact.04/////////////
        _val = getdContactValue(elementList, "dContact.04");
        if (_val == null)
        {
            OLAPArray.push('\t\t' + "<ContactMiddleName>" + null + "</ContactMiddleName>" + '\n');
            v2Array.push({ section: "D02", element: "D02_02", val: v2NOT_KNOWN });
            _retArray.push('\t\t' + "<dContact.04>" + null + "</dContact.04>" + '\n');
        }
        else
        {
            ContactInfoGroup["dContact.04"] = _val;            
            v2Array.push({ section: "D02", element: "D02_02", val: _val });
            _retArray.push('\t\t' + "<dContact.04>" + _val + "</dContact.04>" + '\n');
            OLAPArray.push('\t\t' + "<ContactMiddleName>" + _val + "</ContactMiddleName>" + '\n');
        };

        
        // dContact.05/////////////
        _val = getdContactValue(elementList, "dContact.05");
        if (_val == null)
        {
            if(isRequiredStateElement("dContact.05") ==- true)
            {
                _retArray.push('\t\t' + "<dContact.05" + NIL_V3NOT_RECORDED + '\n');
                v2Array.push({ section: "D02", element: "D02_04", val: v2NOT_RECORDED });
                OLAPArray.push('\t\t' + "<ContactAddress>" + "NOT_RECORDED" + "</ContactAddress>" + '\n');
            }
            else
            {
                ContactInfoGroup["dContact.05"] = v2NOT_REPORTING;
                OLAPArray.push('\t\t' + "<ContactAddress>" + "NOT_REPORTING" + "</ContactAddress>" + '\n');
                v2Array.push({ section: "D02", element: "D02_04", val: v2NOT_REPORTING });
                _retArray.push('\t\t' +"<dContact.05" + NIL_V3NOT_REPORTING + '\n');
            }
        }
        else
        {
            _retArray.push('\t\t' + "<dContact.05>" + _val + "</dContact.05>" + '\n');
            v2Array.push({ section: "D02", element: "D02_04", val: _val });
            ContactInfoGroup["dContact.05"] = _val;
            OLAPArray.push('\t\t' + "<ContactAddress>" + _val + "</ContactAddress>" + '\n');
        };

        // dContact.06/////////////
        _val = getdContactValue(elementList, "dContact.06");      
        if (_val == null)
        {
            if(isRequiredStateElement("dContact.06") ==- true)
            {
                OLAPArray.push('\t\t' + "<ContactCity>" + "NOT_RECORDED" + "</ContactCity>" + '\n');
                _retArray.push('\t\t' +"<dContact.06" + NIL_V3NOT_RECORDED + '\n');
                ContactInfoGroup["dContact.06"] = v3NOT_RECORDED;
                v2Array.push({ section: "D02", element: "D02_05", val: v2NOT_RECORDED });
            }
            else
            {
                ContactInfoGroup["dContact.06"] = v2NOT_REPORTING;                
                v2Array.push({ section: "D02", element: "D02_05", val: v2NOT_REPORTING });
                _retArray.push('\t\t' + "<dContact.06" + NIL_V3NOT_REPORTING + '\n');
                OLAPArray.push('\t\t' + "<ContactCity>" + "NOT_REPORTING" + "</ContactCity>" + '\n');
        }
        }
        else
        {
            ContactInfoGroup["dContact.06"] = _val;
            _retArray.push('\t\t' +"<dContact.06>" + _val + "</dContact.06>"+ '\n');
            v2Array.push({ section: "D02", element: "D02_05", val: _val });
            OLAPArray.push('\t\t' + "<ContactCity>" + _val + "</ContactCity>" + '\n');
        };
        
        // dContact.07/////////////
        _val = getdContactValue(elementList, "dContact.07");
        if (_val == null)
        {
            if(isRequiredStateElement("dContact.07") ==- true)
            {
                OLAPArray.push('\t\t' + "<ContactState>" + "NOT_RECORDED" + "</ContactState>" + '\n');
                ContactInfoGroup["dContact.07"] = v3NOT_RECORDED;
                v2Array.push({ section: "D02", element: "D02_06", val: v2NOT_RECORDED });
                _retArray.push('\t\t' +"<dContact.07" + NIL_V3NOT_RECORDED + '\n');
            }
            else
            {
                ContactInfoGroup["dContact.07"] = v2NOT_REPORTING;
                OLAPArray.push('\t\t' + "<ContactState>" + "NOT_REPORTING" + "</ContactState>" + '\n');
                v2Array.push({ section: "D02", element: "D02_06", val: v2NOT_REPORTING });
                _retArray.push('\t\t' +"<dContact.07" + NIL_V3NOT_REPORTING + '\n');
            }
        }
        else
        {
            ContactInfoGroup["dContact.07"] = _val;
            _retArray.push('\t\t' + "<dContact.07>" + _val + "</dContact.07>" + '\n');
            v2Array.push({ section: "D02", element: "D02_06", val: _val });
            OLAPArray.push('\t\t' + "<ContactState>" + _val + "</ContactState>" + '\n');
        };
        
// dContact.08/////////////
        _val = getdContactValue(elementList, "dContact.08");
        if (_val == null)
        {
            if(isRequiredStateElement("dContact.08") ==- true)
            {
                OLAPArray.push('\t\t' + "<ContactZIPCode>" + "NOT_RECORDED" + "</ContactZIPCode>" + '\n');
                ContactInfoGroup["dContact.08"] = v3NOT_RECORDED;
                _retArray.push('\t\t' + "<dContact.08" + NIL_V3NOT_RECORDED + '\n');
                v2Array.push({ section: "D02", element: "D02_07", val: NIL_V3NOT_RECORDED });
            }
            else
            {
                ContactInfoGroup["dContact.08"] = v2NOT_REPORTING;
                OLAPArray.push('\t\t' + "<ContactZIPCode>" + "NOT_REPORTING" + "</ContactZIPCode>" + '\n');                
                _retArray.push('\t\t' + "<dContact.08" + NIL_V3NOT_REPORTING + '\n');
                v2Array.push({ section: "D02", element: "D02_07", val: NIL_V3NOT_REPORTING });
            }
        }
        else
        {
            ContactInfoGroup["dContact.08"] = _val;
            OLAPArray.push('\t\t' + "<ContactZIPCode>" + _val + "</ContactZIPCode>" + '\n');
            _retArray.push('\t\t' + "<dContact.08>" + _val + "</dContact.08>" + '\n');
            v2Array.push({ section: "D02", element: "D02_07", val: _val });
        };


// dContact.09/////////////
        _val = getdContactValue(elementList, "dContact.09");
        if (_val == null)
        {
            ContactInfoGroup["dContact.09"] = null;
            _retArray.push('\t\t' + "<dContact.09>" + null + "</dContact.09>" + '\n');
            OLAPArray.push('\t\t' + "<ContactCountry>" + null + "</ContactCountry>" + '\n');
        }
        else
        {
            ContactInfoGroup["dContact.09"] = _val;
            _retArray.push('\t\t' + "<dContact.09>" + _val + "</dContact.09>" + '\n');
            OLAPArray.push('\t\t' + "<ContactCountry>" + setCodeText("dContact.09", _val) + "</ContactCountry>" + '\n');
        };

        
// dContact.10/////////////
        _val = getdContactValue(elementList, "dContact.10");
        if (_val == null)
        {
            if(isRequiredStateElement("dContact.10") ==- true)
            {
                dContact.ContactInfoGroup["dContact.10"] = v3NOT_RECORDED;
                v2Array.push({ section: "D02", element: "D02_08", val: v2NOT_RECORDED });
                _retArray.push('\t\t' + "<dContact.10" + NIL_V3NOT_RECORDED + '\n');
                OLAPArray.push('\t\t' + "<ContactPhoneNumber>" + "NOT_RECORDED" + "</ContactPhoneNumber>" + '\n');

            }
            else
            {
                ContactInfoGroup["dContact.10"] = v2NOT_REPORTING
                v2Array.push({ section: "D02", element: "D02_08", val: v2NOT_REPORTING });
                _retArray.push('\t\t' + "<dContact.08" + NIL_V3NOT_REPORTING + '\n');
                OLAPArray.push('\t\t' + "<ContactPhoneNumber>" + "NOT_REPORTING" + "</ContactPhoneNumber>" + '\n');
            }
        }
        else
        {
            ContactInfoGroup["dContact.10"] = _val;
            v2Array.push({ section: "D02", element: "D02_08", val: _val });
            _retArray.push('\t\t' + "<dContact.10>" + _val + "</dContact.10>" + '\n');
            OLAPArray.push('\t\t' + "<ContactPhoneNumber>" + _val + "</ContactPhoneNumber>" + '\n');
        };

// dContact.11/////////////
        _val = getdContactValue(elementList, "dContact.11");
        if (_val == null)
        {
            if(isRequiredStateElement("dContact.11") ==- true)
            {
                ContactInfoGroup["dContact.11"] = v3NOT_RECORDED;
                v2Array.push({ section: "D02", element: "D02_10", val: v2NOT_RECORDED });
                _retArray.push('\t\t' + "<dContact.11" + NIL_V3NOT_RECORDED + '\n');
                OLAPArray.push('\t\t' + "<EmailAddress>" + "NOT_RECORDED" + "</EmailAddress>" + '\n');
            }
            else
            {
                ContactInfoGroup["dContact.11"] = v2NOT_REPORTING;
                _retArray.push('\t\t' + "<dContact.11" + NIL_V3NOT_REPORTING + '\n');
                v2Array.push({ section: "D02", element: "D02_10", val: v2NOT_REPORTING });
                OLAPArray.push('\t\t' + "<EmailAddress>" + "NOT_REPORTING" + "</EmailAddress>" + '\n');
            }
        }
        else
        {
            ContactInfoGroup["dContact.11"] = _val;
            v2Array.push({ section: "D02", element: "D02_10", val: _val });
            _retArray.push('\t\t' + "<dContact.11>" + _val + "</dContact.11>" + '\n');
            OLAPArray.push('\t\t' + "<EmailAddress>" + _val + "</EmailAddress>" + '\n');
        };

// dContact.12/////////////
        _val = getdContactValue(elementList, "dContact.12");
        if (_val == null)
        {
            if(isRequiredStateElement("dContact.12") ==- true)
            {
                ContactInfoGroup["dContact.12"] = v3NOT_RECORDED;
                v2Array.push({ section: "D02", element: "D02_11", val: v2NOT_RECORDED });
                _retArray.push('\t\t' +"<dContact.12" + NIL_V3NOT_RECORDED + '\n');
                OLAPArray.push('\t\t' + "<WebAddress>" + "NOT_RECORDED" + "</WebAddress>" + '\n');
            }
            else
            {
                ContactInfoGroup["dContact.12"] = v2NOT_REPORTING
                v2Array.push({ section: "D02", element: "D02_11", val: v2NOT_REPORTING });
                _retArray.push('\t\t' + "<dContact.12" + NIL_V3NOT_REPORTING + '\n');
                OLAPArray.push('\t\t' + "<WebAddress>" + "NOT_REPORTING" + "</WebAddress>" + '\n');
            }
        }
        else
        {
            ContactInfoGroup["dContact.12"] = _val;
            v2Array.push({ section: "D02", element: "D02_11", val: _val });
            _retArray.push('\t\t' + "<dContact.12>" + _val + "</dContact.12>" + '\n');
            OLAPArray.push('\t\t' + "<WebAddress>" + _val + "</WebAddress>" + '\n');

        };
//////////////////////////////
        _retArray.push('\t\t' + "<dContact.EMSMedicalDirectorGroup>" + '\n');
        OLAPArray.push('\t\t' + "<dContact.EMSMedicalDirectorGroup>" + '\n');

        // dContact.13/////////////
        elementList = businessObject.sections[xx].attributes.sections[0].attributes.elements
        //console.log( businessObject.sections[xx].attributes.sections[0].attributes.elements)
        _val = getdContactValue(elementList, "dContact.13");
        if (_val == null)
        {
            if(isRequiredStateElement("dContact.13") ==- true)
            {
                ContactInfoGroup["dContact.13"] = v3NOT_RECORDED;
                _retArray.push('\t\t\t' + "<dContact.12" + NIL_V3NOT_RECORDED + '\n');
                OLAPArray.push('\t\t\t' + "<MedicalDirectorDegree>" + "NOT_RECORDED" + "</MedicalDirectorDegree>" + '\n');
            }
            else
            {
                ContactInfoGroup["dContact.13"] = v3NOT_REPORTING
                _retArray.push('\t\t\t' + "<dContact.13" + NIL_V3NOT_REPORTING + '\n');
                OLAPArray.push('\t\t\t' + "<MedicalDirectorDegree>" + "NOT_REPORTING" + "</MedicalDirectorDegree>" + '\n');
            }
        }
        else
        {
            ContactInfoGroup["dContact.13"] = _val;
            _retArray.push('\t\t\t' + "<dContact.13>" + _val + "</dContact.13>" + '\n');
            OLAPArray.push('\t\t\t' + "<MedicalDirectorDegree>" + setCodeText("dContact.13", _val) + "</MedicalDirectorDegree>" + '\n');
        };

// dContact.14/////////////
        _val = getdContactValue(elementList, "dContact.14");
        if (_val == null)
        {
            if(isRequiredStateElement("dContact.14") ==- true)
            {
                ContactInfoGroup["dContact.14"] = v3NOT_RECORDED;
                _retArray.push('\t\t\t' + "<dContact.14" + NIL_V3NOT_RECORDED + '\n');
                OLAPArray.push('\t\t\t' + "<MedicalDirectorBoardCertificationType>" + "NOT_RECORDED" + "</MedicalDirectorBoardCertificationType>" + '\n');
            }
            else
            {
                ContactInfoGroup["dContact.14"] = v3NOT_REPORTING
                _retArray.push('\t\t\t' + "<dContact.14" + NIL_V3NOT_REPORTING + '\n');
                OLAPArray.push('\t\t\t' + "<MedicalDirectorBoardCertificationType>" + "NOT_REPORTING" + "</MedicalDirectorBoardCertificationType>" + '\n');
            }
        }
        else
        {
            ContactInfoGroup["dContact.14"] = _val;
            _retArray.push('\t\t\t' + "<dContact.14>" + _val + "</dContact.14>" + '\n');
            OLAPArray.push('\t\t\t' + "<MedicalDirectorBoardCertificationType>" + setCodeText("dContact.14", _val) + "</MedicalDirectorBoardCertificationType>" + '\n');
        };

// dContact.15/////////////
        _val = getdContactValue(elementList, "dContact.15");
        if (_val == null)
        {
            OLAPArray.push('\t\t\t' + "<MedicalDirectorCompensation>" + null + "</MedicalDirectorCompensation>" + '\n');
            _retArray.push('\t\t\t'+ "<dContact.15>" + null+ "</dContact.15>"+ '\n');
        }
        else
        {
            OLAPArray.push('\t\t\t' + "<MedicalDirectorCompensation>" + _val + "</MedicalDirectorCompensation>" + '\n');
            ContactInfoGroup["dContact.15"] = _val;
            _retArray.push('\t\t\t' + "<dContact.15>" + setCodeText("dContact.15", _val) + "</dContact.15>" + '\n');
        };

// dContact.16/////////////
        _val = getdContactValue(elementList, "dContact.16");
        if (_val == null)
        {
            OLAPArray.push('\t\t\t' + "<MedicalDirectorFellowshipTrainedStatus>" + null + "</MedicalDirectorFellowshipTrainedStatus>" + '\n');
            _retArray.push('\t\t\t'+ "<dContact.16>" + null + "</dContact.16>"+ '\n');
        }
        else
        {
            OLAPArray.push('\t\t\t' + "<MedicalDirectorFellowshipTrainedStatus>" + _val + "</MedicalDirectorFellowshipTrainedStatus>" + '\n');
            ContactInfoGroup["dContact.16"] = _val;
            _retArray.push('\t\t\t' + "<dContact.16>" + setCodeText("dContact.16", _val) + "</dContact.16>" + '\n');
        };


        OLAPArray.push('\t\t' + "</dContact.EMSMedicalDirectorGroup>" + '\n');
        OLAPArray.push('\t' + "</dContact.ContactInfoGroup>" + '\n');
        _retArray.push('\t\t' + "</dContact.EMSMedicalDirectorGroup>" + '\n');
        _retArray.push('\t' + "</dContact.ContactInfoGroup>" + '\n');


} // loop term
    OLAPArray.push("</dContact>" + '\n');
    _retArray.push("</dContact>" + '\n');

    for (var i = 0; i < _retArray.length ; i++) {
        XMLString = XMLString + _retArray[i];

    }
    console.log(XMLString)

    XMLString=""
    for (var i = 0; i < OLAPArray.length ; i++) {
        XMLString = XMLString + OLAPArray[i];

    }
    console.log(XMLString)


var dContact334 = Parse.Object.extend("dContact334");
var dContact334 = new dContact334();


dContact334.set("AgencyContactType", ContactInfoGroup["dContact.01"]);
dContact334.set("AgencyContactLastName", ContactInfoGroup["dContact.02"]);
dContact334.set("AgencyName", ContactInfoGroup["dContact.03"]);
dContact334.set("AgencyContactFirstName", ContactInfoGroup["dContact.04"]);
dContact334.set("AgencyContactMiddleNameInitial", ContactInfoGroup["dContact.04"]);
dContact334.set("AgencyContactAddress", ContactInfoGroup["dContact.05"]);
dContact334.set("AgencyContactCity", ContactInfoGroup["dContact.06"]);
dContact334.set("AgencyContactState", ContactInfoGroup["dContact.07"]);
dContact334.set("AgencyContactZIPCode", ContactInfoGroup["dContact.08"]);
dContact334.set("AgencyContactCountry", ContactInfoGroup["dContact.09"]);
dContact334.set("AgencyContactPhoneNumber", ContactInfoGroup["dContact.10"]);
dContact334.set("AgencyContactEmailAddress", ContactInfoGroup["dContact.11"]);
dContact334.set("EMSAgencyContactWebAddress", ContactInfoGroup["dContact.12"]);
dContact334.set("AgencyMedicalDirectorDegree", ContactInfoGroup["dContact.13"]);
dContact334.set("AgencyMedicalDirectorBoardCertificationType", ContactInfoGroup["dContact.14"]);
dContact334.set("MedicalDirectorCompensation", ContactInfoGroup["dContact.15"]);
dContact334.set("EMSMedicalDirectorFellowshipTrainedStatus", ContactInfoGroup["dContact.16"]);
dContact334.set("EffectiveFrom", Date.Now);
dContact334.set("EffectiveFrom", null);
//dContact334.set("Version2", D01)
dContact334.set("dAgencyXML", XMLString)
//dContact334.set("D01XML", V2XMLString)

var _contactInfoGroup = Parse.Object.extend("ContactInfoGroup");



};    //end of function

var setNotApplicableAll = function (businessObject) {
    v2Array.push({ section: "E04", element: "E04_01", val: v2NOT_APPLICABLE });
    v2Array.push({ section: "E04", element: "E04_02", val: v2NOT_APPLICABLE });
    v2Array.push({ section: "E04", element: "E04_03", val: v2NOT_APPLICABLE });

    _retArray.push("<dContact>" + '\n');
    _retArray.push("<dContact.ContactInfoGroup>" + '\n');
    _retArray.push('\t' + "<dContact.01>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<dContact.02>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<dContact.03>" + NIL_V3NOT_APPLICABLE + '\n');

    _retArray.push('\t' + "<dContact.05>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<dContact.06>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<dContact.07>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<dContact.08>" + NIL_V3NOT_APPLICABLE + '\n');

    _retArray.push('\t' + "<dContact.10>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<dContact.11>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<dContact.12>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<dContact.13>" + NIL_V3NOT_APPLICABLE + '\n');
    _retArray.push('\t' + "<dContact.14>" + NIL_V3NOT_APPLICABLE + '\n');


    _retArray.push("/<dContact.ContactInfoGroup>" + '\n');
    _retArray.push("<dContact>" + '\n');
    // console.log(_retArray);
    return _retArray;

}



var isRequiredStateElement = function (elementID) {
    return true;
};
var getdContactValue = function (payload, valueObject) {
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



function setCodeText(NEMSISElementNumber, codeVal) {
    var _return = [];
    
   
    switch (NEMSISElementNumber) {
        case "dContact.01":
            if (dContact334_01[codeVal] == undefined)
            {
                _return = codeVal ;
            }
            else {
                _return = dContact334_01[codeVal];
            }
            break;
      
        case "dContact.09":
            if (dContact334_09[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dContact334_09[codeVal];
            }
            break;
      
        case "dContact.13":
            if (dContact334_13[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dContact334_13[codeVal];
            }
            break;
      
        case "dContact.14":
            if (dContact334_14[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dContact334_14[codeVal];
            }
            break;
                  
        case "dContact.15":
            if (dContact334_15[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dContact334_15[codeVal];
            }
            break;
                  
        case "dContact.16":
            if (dContact334_16[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dContact334_16[codeVal];
            }
            break;
        default:
            _return = " UNDEFINED";
    }
    return _return;

}

var dContact334_01 = {
    "1101001": "Administrative Assistant",
    "1101003": "EMS Agency Director/Chief/Lead Administrator/CEO",
    "1101005": "EMS Assistant Agency Director/Chief/Administrator/CEO",
    "1101007": "EMS Assistant Medical Director",
    "1101009": "EMS IT/Data Specialist",
    "1101011": "EMS Medical Director",
    "1101013": "EMS Quality/Performance Improvement Specialist",
    "1101015": "EMS Training/Education Specialist",
    "1101017": "Other (Not Listed)"
};
var dContact334_09 = {
    "CA": "Canada",
    "MX": "Mexico",
    "US": "United States"
};

var dContact334_13 = {

    "1113001": "Doctor of Medicine",
    "1113003": "Doctor of Osteopathy"
};

var dContact334_14 = {
    "1114001" : "Allergy and Immunology", 
    "1114003" : "Anesthesiology", 
    "1114005" : "Colon and Rectal Surgery", 
    "1114007" : "Dermatology", 
    "1114009" : "Emergency Medicine", 
    "1114011" : "Family Medicine", 
    "1114013" : "Internal Medicine", 
    "1114015" : "Neurological Surgery", 
    "1114017" : "Neurology", 
    "1114019" : "None (Not Board Certified)", 
    "1114021" : "Obstetrics and Gynecology", 
    "1114023" : "Ophthalmology", 
    "1114025" : "Orthopedic Surgery", 
    "1114027" : "Otolaryngology", 
    "1114029" : "Pediatrics", 
    "1114031" : "Physical Medicine and Rehabilitation", 
    "1114033" : "Plastic Surgery", 
    "1114035" : "Psychiatry", 
    "1114037" : "Surgery", 
    "1114039" : "Thoracic Surgery", 
    "1114041" : "Urology", 
    "1114043" : "Vascular Surgery", 
};

var dContact334_15 = {
    "1115001" : "Compensated", 
    "1115003" : "Non-Compensated"
};

var dContact334_16 = {
    "9923001" : "No", 
    "9923003" : "Yes", 
};