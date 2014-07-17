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

var dPersonnel = new Object;
var PersonnelGroup = new Object;
var ImmunizationsGroup = new Object;
var ImmunizationsGroupArray = [];
var LicensureGroup = new Object;
var LicensureGroupArray = [];
var CertificationLevelGroup = new Object;
var CertificationLevelGroupArray = [];

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
};

var setdPersonnel = function (personnelObject) 
{

    var dPersonnel = new Object;
    var PersonnelGroup = new Object;
    var NameGroup = new Object;
    var AddressGroup = new Object;
    var ImmunizationsGroup = new Object;
    var LicensureGroup = new Object;
    var CertificationLevelGroup = new Object;
    var _retArray = [];
    var _v2Array = [];
    var _sectionIndex = 0;
    //alert("need dPateient v2 codes")
    V3XML.BeginNode("dPersonnel");
    OLAPXML.BeginNode("dPersonnel");
    for (var xx = 0; xx < personnelObject.attributes.sections.length; xx++) //All dPersonnelGroup
    {
        _sectionIndex = getSectionIndex(personnelObject.attributes.sections[xx].attributes, "dPersonnel.NameGroup");
        //  console.log(_sectionIndex)
        var elementList = personnelObject.attributes.sections[xx].attributes.elements;

        V3XML.BeginNode("dPersonnel.PersonnelGroup");
        OLAPXML.BeginNode("dPersonnel.PersonnelGroup");

        V3XML.BeginNode("dPersonnel.NameGroup");
        OLAPXML.BeginNode("dPersonnel.NameGroup");

        elementList = personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[0]].attributes.elements;

        //////////dPersonnl.01
        _val = getValue(elementList, "dPersonnel.01");
        if (_val == null) 
        {
            V3XML.BeginNode("dPersonnel.01")
            OLAPXML.BeginNode("dPersonnel.01")
            
            if (isRequiredStateElement("dPersonnel.01") == true) 
            {
                V3XML.Attrib("dPersonnel.01", NIL_V3NOT_RECORDED);
                OLAPXML.Node("LastName", "NOT RECORDED");
                PersonnelGroup["dPersonnel.01"] = v3NOT_RECORDED;
                PersonnelGroup["LastName"] = v3NOT_RECORDED;
                _v2Array.push({ section: "D08", element: "D08_01", val: v2NOT_RECORDED });
            }
            else 
            {
                V3XML.Attrib("dPersonnel.01", NIL_V3NOT_REPORTING);
                OLAPXML.Node("LastName", "NOT RECORDED");
                PersonnelGroup["dPersonnel.01"] = v3NOT_REPORTING;
                PersonnelGroup["LastName"] = v3NOT_REPORTING;
                _v2Array.push({ section: "D08", element: "D08_01", val: v2NOT_REPORTING });
            }
            V3XML.EndNode();
        }
        else 
        {
            V3XML.Node("dPersonnel.01", _val[0]);
            OLAPXML.Node("LastName", _val[0]);
            _v2Array.push({ section: "D08", element: "D08_01", val: _val[0] });
            PersonnelGroup["dPersonnel.01"] = _val[0];
            PersonnelGroup["LastName"] = _val[0];
        };

        //////////dPersonnl.02
        _val = getValue(elementList, "dPersonnel.02");
        if (_val == null) 
        {
            V3XML.BeginNode("dPersonnel.02")
            OLAPXML.BeginNode("dPersonnel.02")
        
            if (isRequiredStateElement("dPersonnel.02") == true) 
            {
                V3XML.Attrib("dPersonnel.02", NIL_V3NOT_RECORDED);
                OLAPXML.Node("FirstName", "NOT RECORDED");
                PersonnelGroup["dPersonnel.02"] = v3NOT_RECORDED;
                PersonnelGroup["FirstName"] = v3NOT_RECORDED;
                _v2Array.push({ section: "D08", element: "D08_03", val: v2NOT_RECORDED });
            }
            else 
            {
                V3XML.Attrib("dPersonnel.02", NIL_V3NOT_REPORTING);
                OLAPXML.Node("FirstName", "NOT RECORDED");
                PersonnelGroup["dPersonnel.02"] = v3NOT_REPORTING;
                PersonnelGroup["FirstName"] = v3NOT_REPORTING;
                _v2Array.push({ section: "D08", element: "D08_03", val: v2NOT_REPORTING });
            }
            V3XML.EndNode();
        }
        else 
        {
            V3XML.Node("dPersonnel.02", _val[0]);
            OLAPXML.Node("FirstName", _val[0]);
            _v2Array.push({ section: "D08", element: "D08_03", val: _val[0] });
            PersonnelGroup["dPersonnel.02"] = _val[0];
            PersonnelGroup["FirstName"] = _val[0];
        };
        //////////dPersonnel.03
        _val = getValue(elementList, "dPersonnel.03");
        if (_val == null) 
        {
            V3XML.BeginNode("dPersonnel.03")
            OLAPXML.BeginNode("dPersonnel.03")
            if (isRequiredStateElement("dPersonnel.03") == true) 
            {
                V3XML.Attrib("dPersonnel.03", NIL_V3NOT_RECORDED);
                OLAPXML.Node("MiddleName", "NOT RECORDED");
                PersonnelGroup["dPersonnel.03"] = v3NOT_RECORDED;
                PersonnelGroup["MiddleName"] = v3NOT_RECORDED;
                _v2Array.push({ section: "D08", element: "D08_02", val: v2NOT_RECORDED });
            }
            else 
            {
                V3XML.Attrib("dPersonnel.03", NIL_V3NOT_REPORTING);
                OLAPXML.Node("MiddleName", "NOT RECORDED");
                PersonnelGroup["dPersonnel.03"] = v3NOT_REPORTING;
                PersonnelGroup["MiddleName"] = v3NOT_REPORTING;
                _v2Array.push({ section: "D08", element: "D08_02", val: v2NOT_REPORTING });
            }
            V3XML.EndNode();
        }
        else 
        {
            V3XML.Node("dPersonnel.03", _val[0]);
            OLAPXML.Node("MiddleName", _val[0]);
            _v2Array.push({ section: "D08", element: "D08_02", val: _val[0] });
            PersonnelGroup["dPersonnel.03"] = _val[0];
            PersonnelGroup["MiddleName"] = _val[0];
        };
        //////////////////////////////////////////////////////////////

        V3XML.EndNode();
        OLAPXML.EndNode();
        
        V3XML.BeginNode("dPersonnel.AddressGroup");
        OLAPXML.BeginNode("dPersonnel.AddressGroup");
        //////////dPersonnel.04
        _val = getValue(elementList, "dPersonnel.04");
        if (_val == null)
        {
            V3XML.Node("dPersonnel.04", null);
            OLAPXML.Node("MailingAddress", null);
            _v2Array.push({ section: "D08", element: "D08_04", val: null });
            PersonnelGroup["dPersonnel.04"] = null;
            PersonnelGroup["MailingAddress"] = null;
        }
        else
        {
            V3XML.Node("dPersonnel.04", _val[0]);
            OLAPXML.Node("MailingAddress", _val[0]);
            _v2Array.push({ section: "D08", element: "D08_04", val: _val[0] });
            PersonnelGroup["dPersonnel.04"] = _val[0];
            PersonnelGroup["MailingAddress"] = _val[0];
        };

        //////////dPersonnel.05
        _val = getValue(elementList, "dPersonnel.05");
        if (_val == null)
        {
            V3XML.Node("dPersonnel.05", null);
            OLAPXML.Node("City", null);
            _v2Array.push({ section: "D08", element: "D08_05", val: null });
            PersonnelGroup["dPersonnel.05"] = null;
            PersonnelGroup["City"] = null;
        }
        else
        {
            V3XML.Node("dPersonnel.05", _val[0]);
            OLAPXML.Node("City", null);
            _v2Array.push({ section: "D08", element: "D08_05", val: _val[0] });
            PersonnelGroup["dPersonnel.05"] = _val[0];
            PersonnelGroup["City"] = _val[0];
        };

        //////////dPersonnel.06
        _val = getValue(elementList, "dPersonnel.06");
        if (_val == null)
        {
            V3XML.Node("dPersonnel.06", null);
            OLAPXML.Node("State", null);
            _v2Array.push({ section: "D08", element: "D08_06", val: null });
            PersonnelGroup["dPersonnel.06"] = null;
            PersonnelGroup["State"] = null;
        }
        else
        {
            V3XML.Node("dPersonnel.06", _val[0]);
            OLAPXML.Node("State", _val[0]);
            _v2Array.push({ section: "D08", element: "D08_06", val: _val[0] });
            PersonnelGroup["dPersonnel.06"] = _val[0];
            PersonnelGroup["State"] = _val[0];
        };

        //////////dPersonnel.07
        _val = getValue(elementList, "dPersonnel.07");
        if (_val == null)
        {
            V3XML.Node("dPersonnel.07", null);
            OLAPXML.Node("Zip", null);
            _v2Array.push({ section: "D08", element: "D08_07", val: null });
            PersonnelGroup["dPersonnel.07"] = null;
            PersonnelGroup["Zip"] = null;
        }
        else
        {
            V3XML.Node("dPersonnel.07", _val[0]);
            OLAPXML.Node("Zip", _val[0]);
            _v2Array.push({ section: "D08", element: "D08_07", val: _val[0] });
            PersonnelGroup["dPersonnel.07"] = _val[0];
            PersonnelGroup["Zip"] = _val[0];
        };

        //////////dPersonnel.08
        _val = getValue(elementList, "dPersonnel.08");
        if (_val == null)
        {
            V3XML.Node("dPersonnel.08", null);
            OLAPXML.Node("Country", null);
            PersonnelGroup["dPersonnel.08"] = null;
            PersonnelGroup["Country"] = null;
        }
        else
        {
            V3XML.Node("dPersonnel.08", null);
            OLAPXML.Node("Country", setCodeText("dPersonnel.08", _val[0]));
            PersonnelGroup["dPersonnel.08"] = null;
            PersonnelGroup["Country"] = setCodeText("dPersonnel.08", _val[0]);
        };
        V3XML.EndNode()
        OLAPXML.EndNode()
        ///////////////////////////////////////////
        ///////////////////////////////////////////

        //////////dPersonnel.09
        _val = getValue(elementList, "dPersonnel.09");
        if (_val == null) 
        {            
            PersonnelGroup["dPersonnel.09"] = null;
            PersonnelGroup["PhoneNumber"] = null;
            V3XML.Node("dPersonnel.09", null);
            OLAPXML.Node("PhoneNumber", null);

        }
        else 
        {
            arr1 = [];
            for (var i = 0; i < _val.length; i++) 
            {
                var PhoneNumberType = setPhoneNumberType("dPersonnel.09", _val[i]);
                if (PhoneNumberType == "9913001") 
                {
                    V3XML.BeginNode("dPersonnel.09")
                    V3XML.AttribNoEQ(FAX, _val[i])
                    OLAPXML.BeginNode("PhoneNumber")
                    OLAPXML.AttribNoEQ(FAX, _val[i])
                    OLAPXML.EndNode();
                    arr1.push("FAX  " + _val[i]);
                }
                else if (PhoneNumberType == "9913003") 
                {
                    V3XML.BeginNode("dPersonnel.09")
                    V3XML.AttribNoEQ(HOME, _val[i])                
                    OLAPXML.BeginNode("PhoneNumber")
                    OLAPXML.AttribNoEQ(HOME, _val[i])
                    OLAPXML.EndNode();
                    arr1.push("HOME  " + _val[i]);
                }
                else if (PhoneNumberType == "9913005") 
                {
                    V3XML.BeginNode("dPersonnel.09")
                    V3XML.AttribNoEQ(MOBILE, _val[i])
                    OLAPXML.BeginNode("PhoneNumber")
                    OLAPXML.AttribNoEQ(MOBILE, _val[i])
                    OLAPXML.EndNode();
                    arr1.push("MOBILE  " + _val[i]);
                }
                else if (PhoneNumberType == "9913007") 
                {
                    V3XML.BeginNode("dPersonnel.09")
                    V3XML.AttribNoEQ(PAGER, _val[i])
                    OLAPXML.BeginNode("PhoneNumber")
                    OLAPXML.AttribNoEQ(PAGER, _val[i])
                }
                else if (PhoneNumberType == "9913009") 
                {
                    V3XML.BeginNode("dPersonnel.09")
                    V3XML.AttribNoEQ(WORKPHONE, _val[i])
                    OLAPXML.BeginNode("PhoneNumber")
                    OLAPXML.AttribNoEQ(WORKPHONE, _val[i])
                    arr1.push("WORK  " + _val[i]);
                }
                else
                {
                    console.log(_val[i])
                    _v2Array.push({ section: "D08", element: "D08_08", val: _val[i] });
                    V3XML.Node("dPersonnel.09")
                    V3XML.AttribNoEQ(WORKPHONE, _val[i])                
                    OLAPXML.BeginNode("PhoneNumber")
                    OLAPXML.AttribNoEQ(WORKPHONE, _val[i])
                }
            }
            PersonnelGroup["dPersonnel.09"] = arr1.slice(0);
            PersonnelGroup["PhoneNumber"] = arr1.slice(0);
            _v2Array.push({ section: "D08", element: "D08_08", val: _val[0] });    
        };


        //////////dPersonnel.10
        _val = getValue(elementList, "dPersonnel.10");
        if (_val == null)
        {
            PersonnelGroup["dPersonnel.10"] = null;
            PersonnelGroup["Email"] = null;
            V3XML.Node("dPersonnel.10", null);
            OLAPXML.Node("Email", null);
        }
        else 
        {
            var arr = [];
            var arr2 = [];
            for (var t = 0; t < _val.length; t++)
            {
                arr.push(_val[t]);
                //arr2.push(setV2("dPersonnel.10", _val));
                arr2.push(setV2("dPersonnel.10", _val));
                V3XML.Node("dPersonnel.10", _val[t]);
                OLAPXML.Node("Email", _val[t]);
            }
            PersonnelGroup["dPersonnel.10"] = arr.slice(0);
            PersonnelGroup["Email"] = arr.slice(0);
            _v2Array.push({ section: "D08", element: "D08_10", val: arr2.slice(0) });
        };

        //////////dPersonnel.11
        _val = getValue(elementList, "dPersonnel.11");
        if (_val == null)
        {
         
            ContactInfoGroup["dContact.11"] = v3NOT_RECORDED;
            ContactInfoGroup["ContactEmail"] = v3NOT_RECORDED;
            V3XML.Attrib("dContact.11", NIL_V3NOT_RECORDED);
            OLAPXML.Node("ContactEmail", "NOT RECORDED");
            V3XML.EndNode();
        }
        else 
        {
            arr1 = [];
            for (var i = 0; i < _val.length; i++) 
            {
                var eMailType = seteMailType("dContact.11", _val[i]);

                if (eMailType == "9904001") 
                {
                    V3XML.BeginNode("dContact.11")
                    V3XML.AttribNoEQ(PERSONALEMAIL, _val[i])
                    V3XML.EndNode();
                    OLAPXML.BeginNode("ContactEmail")
                    OLAPXML.AttribNoEQ(PERSONALEMAIL, _val[i])
                    OLAPXML.EndNode();
                    arr1.push("FAX  " + _val[i]);
                }
                else if (PhoneNumberType == "9904001") 
                {
                    V3XML.BeginNode("dContact.11")
                    V3XML.AttribNoEQ(WORKEMAIL, _val[i])
                    V3XML.EndNode();
                    OLAPXML.BeginNode("ContactEmail")
                    OLAPXML.AttribNoEQ(WORKEMAIL, _val[i])
                    OLAPXML.EndNode();
                    arr1.push("HOME  " + _val[i]);
                }
            };
            ContactInfoGroup["dContact.11"] = arr1.slice(0);
            ContactInfoGroup["ContactEmail"] = arr1.slice(0);
            _v2Array.push({ section: "D02", element: "D02_10", val: _val[0] });
        };
        //////////dPersonnel.12
        _val = getValue(elementList, "dPersonnel.12");
        if (_val == null)
        {
            if (isRequiredStateElement("dPersonnel.12") == true)
            {
                _v2Array.push({ section: "D08", element: "D08_12", val: v2NOT_RECORDED });
                V3XML.BeginNode("dPersonnel.12")
                V3XML.Attrib("dPersonnel.12", NIL_V3NOT_RECORDED);
                OLAPXML.Node("Gender", "NOT RECORDED");
                PersonnelGroup["Gender"] = v3NOT_RECORDED;
                PersonnelGroup["dPersonnel.12"] = v3NOT_RECORDED;
                V3XML.EndNode();
            }
            else 
            {
                _v2Array.push({ section: "D08", element: "D08_12", val: v2NOT_REPORTING });
                V3XML.BeginNode("dPersonnel.12")
                V3XML.Attrib("dPersonnel.12", NIL_V3NOT_REPORTING);
                OLAPXML.Node("Gender", "NOT RECORDED");
                PersonnelGroup["Gender"] = v3NOT_REPORTING;
                PersonnelGroup["dPersonnel.12"] = v3NOT_REPORTING;
                V3XML.EndNode();
            }
        }
        else
        {
            V3XML.Node("dPersonnel.12", _val[0]);
            OLAPXML.Node("Gender", _val[0]);
            ContactInfoGroup["dPersonnel.12"] = _val[0];
            ContactInfoGroup["Gender"] = _val[0];
            _v2Array.push({ section: "D08", element: "D08_12", val: _val[0] });
        };


        //////////dPersonnel.13
        _val = getValue(elementList, "dPersonnel.13");
        if (_val == null)
        {
            if (isRequiredStateElement("dPersonnel.13") == true)
            {
                _v2Array.push({ section: "D08", element: "D08_13", val: v2NOT_RECORDED });
                V3XML.BeginNode("dPersonnel.13")
                V3XML.Attrib("dPersonnel.13", NIL_V3NOT_RECORDED);
                OLAPXML.Node("Race", "NOT RECORDED");
                PersonnelGroup["Race"] = v3NOT_RECORDED;
                PersonnelGroup["dPersonnel.13"] = v3NOT_RECORDED;
                V3XML.EndNode();
            }
            else 
            {
                _v2Array.push({ section: "D08", element: "D08_13", val: v2NOT_REPORTING });
                V3XML.BeginNode("dPersonnel.13")
                V3XML.Attrib("dPersonnel.13", NIL_V3NOT_REPORTING);
                OLAPXML.Node("Race", "NOT RECORDED");
                PersonnelGroup["Race"] = v3NOT_REPORTING;
                PersonnelGroup["dPersonnel.13"] = v3NOT_REPORTING;
                V3XML.EndNode();
            }
        }
        else 
        {
            var arr = [];
            var arr2 = [];
            var arr3 = [];
            for (var t = 0; t < _val.length; t++) 
            {
                arr.push(_val[t]);
                arr2.push(setV2("dPersonnel.13", _val[t]));
                arr3.push(setCodeText("dPersonnel.13", _val[t]));
                V3XML.Node("dPersonnel.13", _val[t]);
                OLAPXML.Node("Race", setCodeText("dPersonnel.13", _val[t]));
            }
            PersonnelGroup["dPersonnel.13"] = arr.slice(0);
            PersonnelGroup["Race"] = arr3.slice(0);
            _v2Array.push({ section: "D08", element: "D08_13", val: arr2.slice(0) });
        };

        //////////dPersonnel.14
        _val = getValue(elementList, "dPersonnel.14");
        if (_val == null)
        {
            V3XML.Node("dPersonnel.14", null);
            OLAPXML.Node("Citizenship", null);
            PersonnelGroup["dPersonnel.14"] = null;
            PersonnelGroup["Citizenship"] = null;
        }
        else
        {
            V3XML.Node("dPersonnel.14", _val[0]);
            OLAPXML.Node("Citizenship", setCodeText("dPersonnel.14", _val[0]));
            PersonnelGroup["dPersonnel.14"] = null;
            PersonnelGroup["Citizenship"] = setCodeText("dPersonnel.14", _val[0]);
        };

        //////////dPersonnel.15
        _val = getValue(elementList, "dPersonnel.15");
        if (_val == null)
        {
            V3XML.Node("dPersonnel.15", null);
            OLAPXML.Node("HighestEducationalDegree", null);
            PersonnelGroup["dPersonnel.15"] = null;
            PersonnelGroup["HighestEducationalDegree"] = null;
        }
        else
        {
            V3XML.Node("dPersonnel.15", _val[0]);
            OLAPXML.Node("HighestEducationalDegree", setCodeText("dPersonnel.15", _val[0]));
            PersonnelGroup["dPersonnel.15"] = _val[0];
            PersonnelGroup["HighestEducationalDegree"] = setCodeText("dPersonnel.15", _val[0]);
        };

        //////////dPersonnel.16
        _val = getValue(elementList, "dPersonnel.16");
        if (_val == null)
        {
            V3XML.Node("dPersonnel.16", null);
            OLAPXML.Node("DegreeSubject", null);
            PersonnelGroup["dPersonnel.16"] = null;
            PersonnelGroup["DegreeSubject"] = null;
        }
        else
        {
            var arr = [];
            var arr2 = [];
            for (var t = 0; t < _val.length; t++) 
            {
                arr.push(_val[t]);
                arr2.push(setCodeText("dPersonnel.16", _val[t]));
                V3XML.Node("dPersonnel.16", null);
                OLAPXML.Node("DegreeSubject", setCodeText("dPersonnel.16", _val[t]));
            }
            PersonnelGroup["dPersonnel.16"] = arr.slice(0);
            PersonnelGroup["DegreeSubject"] = arr2.slice(0);
        };

        //////////dPersonnel.17
        _val = getValue(elementList, "dPersonnel.17");
        if (_val == null)
        {
            V3XML.Node("dPersonnel.17", null);
            OLAPXML.Node("MotorVehicleLicenseType", null);
            PersonnelGroup["dPersonnel.17"] = null;
            PersonnelGroup["MotorVehicleLicenseType"] = null;
        }
        var arr = [];
        var arr2 = [];
        for (var t = 0; t < _val.length; t++)
        {
            arr.push(_val[t]);
            arr2.push(setCodeText("dPersonnel.17", _val[t]));
            V3XML.Node("dPersonnel.17", null);
            OLAPXML.Node("MotorVehicleLicenseType", setCodeText("dPersonnel.17", _val[t]));                
        }
        PersonnelGroup["MotorVehicleLicenseType"] = arr2.slice(0);
        PersonnelGroup["dPersonnel.17"] = arr.slice(0);
    };

    ///////////////////////////////////////////////////////
    ///////////////////////ImmunizationsGroup
    _sectionIndex = getSectionIndex(personnelObject.attributes.sections[xx].attributes, "dPersonnel.ImmunizationsGroup");
    // console.log(_sectionIndex)
    ImmunizationsGroupelementList = personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements;

    for (var x = 0; x < _sectionIndex.length; x++) {
        //            console.log(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements)

        V3XML.BeginNode("dPersonnel.ImmunizationsGroup")
        OLAPXML.BeginNode("dPersonnel.ImmunizationsGroup")
        //////////dPersonnel.18
        _val = getValue(ImmunizationsGroupelementList, "dPersonnel.18");
        if (_val == null) 
        {
            V3XML.Node("dPersonnel.18", null);
            OLAPXML.Node("ImmunizationStatus", null);
            ImmunizationsGroup["dPersonnel.18"] = null;
            ImmunizationsGroup["ImmunizationStatus"] = null;                
        }
        else {

            V3XML.Node("dPersonnel.18", _val[0]);
            OLAPXML.Node("ImmunizationStatus", setCodeText("dPersonnel.18", _val[0]));                
            ImmunizationsGroup["dPersonnel.18"] = _val[0];
            ImmunizationsGroup["ImmunizationStatus"] = setCodeText("dPersonnel.18", _val[0]);
        };

        //////////dPersonnel.19
        _val = getValue(ImmunizationsGroupelementList, "dPersonnel.19");
        if (_val == null) 
        {
            V3XML.Node("dPersonnel.19", null);
            OLAPXML.Node("ImmunizationYear", null);
            ImmunizationsGroup["dPersonnel.19"] = null;
            ImmunizationsGroup["ImmunizationYear"] = null;                
        }
        else 
        {
            V3XML.Node("dPersonnel.19", _val[0]);
            OLAPXML.Node("ImmunizationYear", _val[0]);
            ImmunizationsGroup["dPersonnel.19"] = _val[0];
            ImmunizationsGroup["ImmunizationYear"] = _val[0]; 
        };
        V3XML.EndNode();
        OLAPXML.EndNode();
    };
    //////////////////////////////////////////
    //////////////////////////////////////////

    //////////dPersonnel.20
    _val = getValue(elementList, "dPersonnel.20");
    if (_val == null) 
    {
        V3XML.Node("dPersonnel.20", null);
        OLAPXML.Node("ForeignLanguageAbility", null);
        PersonnelGroup["dPersonnel.20"] = null;
        PersonnelGroup["ForeignLanguageAbility"] = null;                
    }
    else 
    {
        var arr = [];
        var arr2 = [];
        for (var t = 0; t < _val.length; t++) 
        {
            arr.push(_val[t]);
            arr2.push(setCodeText("dPersonnel.20", _val[t]));
            V3XML.Node("dPersonnel.20", null);
            OLAPXML.Node("ForeignLanguageAbility", setCodeText("dPersonnel.20", _val[t]));        
        }
        PersonnelGroup["dPersonnel.20"] = arr.slice(0);
        PersonnelGroup["ForeignLanguageAbility"] = arr2.slice(0);
    };

    //////////dPersonnel.21
    _val = getValue(elementList, "dPersonnel.21");
    if (_val == null) 
    {
        V3XML.Node("dPersonnel.21", null);
        OLAPXML.Node("PersonnelAgencyIDNumber", null);
        PersonnelGroup["dPersonnel.21"] = null;
        PersonnelGroup["PersonnelAgencyIDNumber"] = null;          
        _v2Array.push({ section: "D07", element: "D07_01", val: null});
    }
    else 
    {
        _v2Array.push({ section: "D07", element: "D07_01", val: _val[0]});
        PersonnelGroup["dPersonnel.21"] = _val[0];
        OLAPXML.Node("PersonnelAgencyIDNumber", _val[0]);
        V3XML.Node("dPersonnel.21", _val[0]);
        PersonnelGroup["PersonnelAgencyIDNumber"] = _val[0];
    };

    ////////////////////////////LicensureGroup
    _sectionIndex = getSectionIndex(personnelObject.attributes.sections[xx].attributes, "dPersonnel.LicensureGroup");

    for (var x = 0; x < _sectionIndex.length; x++) 
    {
        OLAPXML.BeginNode("dPersonnel.LicensureGroup")
        V3XML.BeginNode("dPersonnel.LicensureGroup")

        // console.log(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements)
        //dPersonnel.22
        _val = getValue(personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.22");
        if (_val == null) 
        {
            if (isRequiredStateElement("dPersonnel.22") == - true) 
            {
                V3XML.BeginNode("dPersonnel.22")
                V3XML.Attrib("dPersonnel.22", NIL_V3NOT_RECORDED);
                OLAPXML.Node("StateofLicensure", "NOT RECORDED");
                LicensureGroup["StateofLicensure"] = v3NOT_RECORDED;
                LicensureGroup["dPersonnel.22"] = v3NOT_RECORDED;
            }
            else 
            {
                V3XML.BeginNode("dPersonnel.22")
                V3XML.Attrib("dPersonnel.22", NIL_V3NOT_REPORTING);
                OLAPXML.Node("StateofLicensure", "NOT REPORTING");
                LicensureGroup["StateofLicensure"] = v3NOT_REPORTING;
                LicensureGroup["dPersonnel.22"] = v3NOT_REPORTING;
            }
            V3XML.EndNode();
        }                
        else
        {
            OLAPXML.Node("StateofLicensure", _val[0]);
            ["StateofLicensure"] = _val[0];
            LicensureGroup["dPersonnel.22"] = _val[0];
            V3XML.Node("dPersonnel.22", _val[0]);
            LicensureGroup["StateofLicensure"] = _val[0];
        };


        //dPersonnel.23
        _val = getValue(personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.23");
        if (_val == null) 
        {
            _v2Array.push({ section: "D07", element: "D07_02", val: null});
            if (isRequiredStateElement("dPersonnel.23") == - true) 
            {
                V3XML.BeginNode("dPersonnel.23")
                V3XML.Attrib("dPersonnel.23", NIL_V3NOT_RECORDED);
                OLAPXML.Node("StateLicensureIDNumber", "NOT RECORDED");
                LicensureGroup["StateLicensureIDNumber"] = v3NOT_RECORDED;
                LicensureGroup["dPersonnel.23"] = v3NOT_RECORDED;
                    
            }
            else 
            {
                V3XML.BeginNode("dPersonnel.23")
                V3XML.Attrib("dPersonnel.23", NIL_V3NOT_REPORTING);
                OLAPXML.Node("StateLicensureIDNumber", "NOT REPORTING");
                LicensureGroup["StateLicensureIDNumber"] = v3NOT_REPORTING;
                LicensureGroup["dPersonnel.23"] = v3NOT_REPORTING;
            }
            V3XML.EndNode();
        }                
        else
        {
            OLAPXML.Node("StateLicensureIDNumber", _val[0]);
            V3XML.Node("dPersonnel.23", _val[0]);
            ["StateLicensureIDNumber"] = _val[0];
            LicensureGroup["dPersonnel.23"] = _val[0];
            LicensureGroup["StateLicensureIDNumber"] = _val[0];
            _v2Array.push({ section: "D07", element: "D07_02", val: null});
        };

        //dPersonnel.24
        _val = getValue(personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.24");
        if (_val == null) 
        {
            if (isRequiredStateElement("dPersonnel.24") == true) 
            {
                V3XML.BeginNode("dPersonnel.24")
                V3XML.Attrib("dPersonnel.24", NIL_V3NOT_RECORDED);
                OLAPXML.Node("EMSCertificationLicensureLevel", "NOT RECORDED");
                LicensureGroup["EMSCertificationLicensureLevel"] = v3NOT_RECORDED;
                LicensureGroup["dPersonnel.24"] = v3NOT_RECORDED;
                V3XML.EndNode();
                _v2Array.push({ section: "D08", element: "D08_15", val: null });
            }
        }
        else
        {
            _v2Array.push({ section: "D08", element: "D08_15", val: setV2("dPersonnel.24", _val[0])});
            OLAPXML.Node("EMSCertificationLicensureLevel", _val[0]);
            V3XML.Node("dPersonnel.24", _val[0]);
            LicensureGroup["EMSCertificationLicensureLevel"] = setCodeText("dPersonnel.24", _val[t0]);
            LicensureGroup["dPersonnel.24"] = _val[0];
        };

            
        //dPersonnel.25
        _val = getValue(personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.24");
        if (_val == null) 
        {
            _v2Array.push({ section: "D08", element: "D08_17", val: null});
            OLAPXML.Node("EMSCurrentCertificationDate", null);
            V3XML.Node("dPersonnel.25", null);
            LicensureGroup["EMSCurrentCertificationDate"] = null;
            LicensureGroup["dPersonnel.25"] = null;
                
        }
        else {
            _v2Array.push({ section: "D08", element: "D08_17", val:  _val[0]});
            OLAPXML.Node("EMSCurrentCertificationDate", _val[0]);
            V3XML.Node("dPersonnel.25", _val[0]);
            LicensureGroup["EMSCurrentCertificationDate"] =  _val[t0];
            LicensureGroup["dPersonnel.25"] = _val[0];
        };

        //dPersonnel.26
        _val = getValue(personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.24");
        if (_val == null) 
        {
            _v2Array.push({ section: "D08", element: "D08_18", val: null});
            OLAPXML.Node("InitialStateLicensureIssueDate", null);
            V3XML.Node("dPersonnel.26", null);
            LicensureGroup["InitialStateLicensureIssueDate"] = null;
            LicensureGroup["dPersonnel.26"] = null;
        }
        else 
        {
            _v2Array.push({ section: "D08", element: "D08_18", val: _val[0]});
            OLAPXML.Node("InitialStateLicensureIssueDate", _val[0]);
            V3XML.Node("dPersonnel.26", _val[0]);
            LicensureGroup["InitialStateLicensureIssueDate"] = _val[0];
            LicensureGroup["dPersonnel.26"] = _val[0];
        };

        //dPersonnel.27
        _val = getValue(personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.24");
        if (_val == null) 
        {                
            OLAPXML.Node("CurrentStateLicensureExpirationDate", null);
            V3XML.Node("dPersonnel.27", null);
            LicensureGroup["CurrentStateLicensureExpirationDate"] = null;
            LicensureGroup["dPersonnel.27"] = null;

        }
        else {
            OLAPXML.Node("CurrentStateLicensureExpirationDate", _val[0]);
            V3XML.Node("dPersonnel.27", _val[0]);
            LicensureGroup["CurrentStateLicensureExpirationDate"] = _val[0];
            LicensureGroup["dPersonnel.27"] = _val[0];
        };

        OLAPXML.EndNode();
        V3XML.EndNode();
    };

    //dPersonnel.28
    _val = getValue(elementList, "dPersonnel.28");
    if (_val == null) 
    {
        OLAPXML.Node("NationalRegistryNumber", null);
        V3XML.Node("dPersonnel.28", null);
        PersonnelGroup["NationalRegistryNumber"] = null;
        PersonnelGroup["dPersonnel.28"] = null;
    }
    else 
    {
        OLAPXML.Node("NationalRegistryNumber", _val[0]);
        V3XML.Node("dPersonnel.28", _val[0]);
        PersonnelGroup["NationalRegistryNumber"] = _val[0];
        PersonnelGroup["dPersonnel.28"] = _val[0];
    };

    //dPersonnel.29
    _val = getValue(elementList, "dPersonnel.29");
    if (_val == null) 
    {
        OLAPXML.Node("NationalRegistryCertificationLevel", null);
        V3XML.Node("dPersonnel.29", null);
        PersonnelGroup["NationalRegistryCertificationLevel"] = null;
        PersonnelGroup["dPersonnel.29"] = null;
    }
    else 
    {
        OLAPXML.Node("NationalRegistryCertificationLevel", setCodeText("dPersonnel.29", _val[0]));
        V3XML.Node("dPersonnel.29", _val[0]);
        PersonnelGroup["NationalRegistryCertificationLevel"] = setCodeText("dPersonnel.29", _val[0]);
        PersonnelGroup["dPersonnel.29"] = _val[0];
    };

    //dPersonnel.30
    _val = getValue(elementList, "dPersonnel.30");
    if (_val == null) 
    {
        OLAPXML.Node("CurrentNationalRegistryExpirationDate", null);
        V3XML.Node("dPersonnel.30", null);
        PersonnelGroup["CurrentNationalRegistryExpirationDate"] = null;
        PersonnelGroup["dPersonnel.30"] = null;
    }
    else 
    {
        OLAPXML.Node("CurrentNationalRegistryExpirationDate", _val[0]);
        V3XML.Node("dPersonnel.30", _val[0]);
        PersonnelGroup["CurrentNationalRegistryExpirationDate"] = _val[0];
        PersonnelGroup["dPersonnel.30"] = _val[0];
    };

    //dPersonnel.31

    _val = getValue(elementList, "dPersonnel.31");
    if (_val == null) 
    {
        _v2Array.push({ section: "D07", element: "D07_03", val: null});
        if (isRequiredStateElement("dPersonnel.31") == true) 
        {
            V3XML.BeginNode("dPersonnel.31")
            V3XML.Attrib("dPersonnel.31", NIL_V3NOT_RECORDED);
            OLAPXML.Node("EmploymentStatus", "NOT RECORDED");
            PersonnelGroup["EmploymentStatus"] = v3NOT_RECORDED;
            PersonnelGroup["dPersonnel.31"] = v3NOT_RECORDED;
        }
        else 
        {
            V3XML.BeginNode("dPersonnel.31")
            V3XML.Attrib("dPersonnel.31", NIL_V3NOT_REPORTING);
            OLAPXML.Node("EmploymentStatus", "NOT REPORTING");
            PersonnelGroup["EmploymentStatus"] = v3NOT_REPORTING;
            PersonnelGroup["dPersonnel.31"] = v3NOT_REPORTING;
        }
        V3XML.EndNode();
    }        
    else 
    {
        _v2Array.push({ section: "D07", element: "D07_03", val: setV2("dPersonnel.31", _val[0])});
        OLAPXML.Node("EmploymentStatus", setCodeText("dPersonnel.31", _val[0]));
        V3XML.Node("dPersonnel.31", _val[0]);
        PersonnelGroup["EmploymentStatus"] = setCodeText("dPersonnel.31", _val[0]);
        PersonnelGroup["dPersonnel.31"] = _val[0];
    };

    //dPersonnel.32
    _val = getValue(elementList, "dPersonnel.32");
    if (_val == null)   
    {
        if (isRequiredStateElement("dPersonnel.32") == true) 
        {
            V3XML.BeginNode("dPersonnel.32")
            V3XML.Attrib("dPersonnel.32", NIL_V3NOT_RECORDED);
            OLAPXML.Node("EmploymentStatusDate", "NOT RECORDED");
            PersonnelGroup["EmploymentStatusDate"] = v3NOT_RECORDED;
            PersonnelGroup["dPersonnel.32"] = v3NOT_RECORDED;
        }
        else 
        {
            V3XML.BeginNode("dPersonnel.32")
            V3XML.Attrib("dPersonnel.32", NIL_V3NOT_REPORTING);
            OLAPXML.Node("EmploymentStatusDate", "NOT REPORTING");
            PersonnelGroup["EmploymentStatusDate"] = v3NOT_REPORTING;
            PersonnelGroup["dPersonnel.32"] = v3NOT_REPORTING;
        }
        V3XML.EndNode();
    }
    else 
    {            
        OLAPXML.Node("EmploymentStatusDate",  _val[0]);
        V3XML.Node("dPersonnel.32", _val[0]);
        PersonnelGroup["EmploymentStatusDate"] = "dPersonnel.30", _val[0];
        PersonnelGroup["dPersonnel.32"] = _val[0];
    };


    //dPersonnel.33
    _val = getValue(elementList, "dPersonnel.33");
    if (_val == null) 
    {
        OLAPXML.Node("HireDate",  null);
        V3XML.Node("dPersonnel.33", null);
        PersonnelGroup["HireDate"] = "dPersonnel.30", null;
        PersonnelGroup["dPersonnel.33"] = null;
    }
    else 
    {
        OLAPXML.Node("HireDate",  _val[0]);
        V3XML.Node("dPersonnel.33", _val[0]);
        PersonnelGroup["HireDate"] = "dPersonnel.30", _val[0];
        PersonnelGroup["dPersonnel.32"] = _val[0];
    };

    //dPersonnel.34
    _val = getValue(elementList, "dPersonnel.34");
    if (_val == null)   
    {
        if (isRequiredStateElement("dPersonnel.34") == true) 
        {
            V3XML.BeginNode("dPersonnel.34")
            V3XML.Attrib("dPersonnel.34", NIL_V3NOT_RECORDED);
            OLAPXML.Node("PrimaryEMSJobRole", "NOT RECORDED");
            PersonnelGroup["PrimaryEMSJobRole"] = v3NOT_RECORDED;
            PersonnelGroup["dPersonnel.34"] = v3NOT_RECORDED;
        }
        else 
        {
            V3XML.BeginNode("dPersonnel.34")
            V3XML.Attrib("dPersonnel.34", NIL_V3NOT_REPORTING);
            OLAPXML.Node("PrimaryEMSJobRole", "NOT REPORTING");
            PersonnelGroup["PrimaryEMSJobRole"] = v3NOT_REPORTING;
            PersonnelGroup["dPersonnel.34"] = v3NOT_REPORTING;
        }
        V3XML.EndNode();
    }
    else 
    {            
        OLAPXML.Node("PrimaryEMSJobRole",  setCodeText("dPersonnel.34", _val[0]));
        V3XML.Node("dPersonnel.34", _val[0]);
        PersonnelGroup["PrimaryEMSJobRole"] = setCodeText("dPersonnel.34", _val[0]);
        PersonnelGroup["dPersonnel.34"] = _val[0];
    };        

    //dPersonnel.35
    _val = getValue(elementList, "dPersonnel.35");
    if (_val == null) {
        if (isRequiredStateElement("dPersonnel.35") == true) 
        {
            V3XML.BeginNode("dPersonnel.35")
            V3XML.Attrib("dPersonnel.35", NIL_V3NOT_RECORDED);
            OLAPXML.Node("OtherJobResponsibilities", "NOT RECORDED");
            PersonnelGroup["OtherJobResponsibilities"] = v3NOT_RECORDED;
            PersonnelGroup["dPersonnel.35"] = v3NOT_RECORDED;
        }
        else 
        {
            V3XML.BeginNode("dPersonnel.35")
            V3XML.Attrib("dPersonnel.35", NIL_V3NOT_REPORTING);
            OLAPXML.Node("OtherJobResponsibilities", "NOT REPORTING");
            PersonnelGroup["OtherJobResponsibilities"] = v3NOT_REPORTING;
            PersonnelGroup["dPersonnel.35"] = v3NOT_REPORTING;
        }
        V3XML.EndNode();
    }
    else 
    {
        var arr = [];
        var arr2 = [];        
        for (var t = 0; t < _val.length; t++) 
        {
            OLAPXML.Node("OtherJobResponsibilities",setCodeText("dPersonnel.35", _val[t]));
            V3XML.Node("dPersonnel.35", _val[t]);                                
        };
        PersonnelGroup["dPersonnel.35"] = arr.slice(0);
        PersonnelGroup["OtherJobResponsibilities"] = arr2.slice(0);
    };


    //dPersonnel.36
    _val = getValue(elementList, "dPersonnel.36");
    if (_val == null) 
    {
        OLAPXML.Node("TotalLengthofServiceinYears", null);
        V3XML.Node("dPersonnel.36", null);
        PersonnelGroup["TotalLengthofServiceinYears"] = null;
        PersonnelGroup["dPersonnel.36"] = null;
        _v2Array.push({ section: "D08", element: "D08_19", val: null});
    }
    else 
    {
        _v2Array.push({ section: "D08", element: "D08_19", val: _val[0]});
        OLAPXML.Node("TotalLengthofServiceinYears", _val[0]);
        V3XML.Node("dPersonnel.36", _val[0]);
        PersonnelGroup["TotalLengthofServiceinYears"] = _val[0];
        PersonnelGroup["dPersonnel.36"] = _val[0];
    };

    //dPersonnel.37
    _val = getValue(elementList, "dPersonnel.37");
    if (_val == null) 
    {
        OLAPXML.Node("DateLengthofServiceDocumented", null);
        V3XML.Node("dPersonnel.37", null);
        PersonnelGroup["DateLengthofServiceDocumented"] = null;
        PersonnelGroup["dPersonnel.37"] = null;
        _v2Array.push({ section: "D08", element: "D08_20", val: null});
    }
    else 
    {
        _v2Array.push({ section: "D08", element: "D08_20", val: _val[0]});
        OLAPXML.Node("DateLengthofServiceDocumented", _val[0]);
        V3XML.Node("dPersonnel.37", _val[0]);
        PersonnelGroup["DateLengthofServiceDocumented"] = _val[0];
        PersonnelGroup["dPersonnel.37"] = _val[0];
    };
    ////////////////////////////CertificationLevelGroup
    _sectionIndex = getSectionIndex(personnelObject.attributes.sections[xx].attributes, "dPersonnel.CertificationLevelGroup");

    if (_sectionIndex > 0) 
    {
        for (var x = 0; x < _sectionIndex.length; x++) 
        {
            // console.log(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements)
            OLAPXML.BeginNode("dPersonnel.CertificationLevelGroup");
            V3XML.BeginNode("dPersonnel.CertificationLevelGroup");

            //dPersonnel.38
            _val = getValue(personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.38");
            if (_val == null) 
            {
                OLAPXML.Node("ProfessionalPracticeLevel", null);
                V3XML.Node("dPersonnel.38", null);
                CertificationLevelGroup["ProfessionalPracticeLevel"] = null;
                CertificationLevelGroup["dPersonnel.38"] = null;
                _v2Array.push({ section: "D07", element: "D07_05", val: null});
            }
            else 
            {
                _v2Array.push({ section: "D07", element: "D07_05", val: setV2("dPersonnel.38", _val[0])});
                OLAPXML.Node("ProfessionalPracticeLevel", setCodeText("dPersonnel.38", _val[0]));
                V3XML.Node("dPersonnel.38", _val[0]);
                CertificationLevelGroup["ProfessionalPracticeLevel"] = setCodeText("dPersonnel.38", _val[0]);
                CertificationLevelGroup["dPersonnel.38"] = _val[0];
            };

            //dPersonnel.39
            _val = getValue(personnelObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.39");
            if (_val == null) 
            {
                OLAPXML.Node("DateofProfessionalCertificationorLicensureforAgency", null);
                V3XML.Node("dPersonnel.39", null);
                CertificationLevelGroup["DateofProfessionalCertificationorLicensureforAgency"] = null;
                CertificationLevelGroup["dPersonnel.98"] = null;
                _v2Array.push({ section: "D07", element: "D07_06", val: null });
            }
            else 
            {
                _v2Array.push({ section: "D07", element: "D07_06", val: _val[0]});
                OLAPXML.Node("DateofProfessionalCertificationorLicensureforAgency", _val[0]);
                V3XML.Node("dPersonnel.39", _val[0]);
                CertificationLevelGroup["DateofProfessionalCertificationorLicensureforAgency"] = setCodeText("dPersonnel.38", _val[0]);
                CertificationLevelGroup["dPersonnel.39"] = _val[0];
            };
 
            OLAPXML.EndNode();
            V3XML.EndNode();                  
        };
    };
    OLAPXML.EndNode();
    V3XML.EndNode();
  
    return _retArray;
};



var dPersonnel334_12 = {
    "9906001": "Female",
    "9906003": "Male",
    "9906005": "Unknown (Unable to Determine)"
};

var dPersonnel334_13 = {
    "1513001": "American Indian or Alaska Native",
    "1513003": "Asian",
    "1513005": "Black or African American",
    "1513007": "Hispanic or Latino",
    "1513009": "Native Hawaiian or Other Pacific Islander",
    "1513011": "White"
};

var dPersonnel334_15 = {
    "1515001": "No Schooling Completed",
    "1515003": "Nursery School to 4th Grade",
    "1515005": "5th Grade or 6th Grade",
    "1515007": "7th Grade or 8th Grade",
    "1515009": "9th Grade",
    "1515011": "10th Grade",
    "1515013": "11th Grade",
    "1515015": "12th Grade; No Diploma",
    "1515017": "High School Graduate-Diploma or the Equivalent (GED)",
    "1515019": "Some College Credit; but Less than 1 Year",
    "1515021": "1 or More Years of College; No Degree",
    "1515023": "Associate Degree",
    "1515025": "Bachelor's Degree",
    "1515027": "Master's Degree",
    "1515029": "Professional Degree (i.e. MD; DDS; DVM; LLB; JD)",
    "1515031": "Doctorate Degree (i.e. PhD; EdD)"
};

var dPersonnel334_16 = {
    "1516001": "Agriculture and Natural Resources",
    "1516003": "Architecture and Related Services",
    "1516005": "Area; Ethnic; Cultural; and Gender Studies",
    "1516007": "Biological and Biomedical Sciences",
    "1516009": "Business",
    "1516011": "Communication; Journalism; and Related Programs",
    "1516013": "Communications Technologies",
    "1516015": "Computer and Information Sciences",
    "1516017": "Education",
    "1516019": "Emergency Medical Services",
    "1516021": "Engineering",
    "1516023": "Engineering Technologies",
    "1516025": "English Language and Literature/Letters",
    "1516027": "Family and Consumer Sciences/Human Sciences",
    "1516029": "Fire Science",
    "1516031": "Foreign Languages; Literatures; and Linguistics",
    "1516033": "Health Professions and Related Clinical Sciences; Not Including Emergency Medical Services",
    "1516035": "Legal Professions and Studies",
    "1516037": "Liberal Arts and Sciences; General Studies; and Humanities",
    "1516039": "Library Science",
    "1516041": "Mathematics and Statistics",
    "1516043": "Military Technologies",
    "1516045": "Multi/Interdisciplinary Studies",
    "1516047": "Not Classified by Field of Study",
    "1516049": "None",
    "1516051": "Parks; Recreation; Leisure and Fitness Studies",
    "1516053": "Philosophy and Religious Studies",
    "1516055": "Physical Sciences and Science Technologies",
    "1516057": "Precision Production",
    "1516059": "Psychology",
    "1516061": "Public Administration and Social Services",
    "1516063": "Security and Protective Services; Not Including Fire Science",
    "1516065": "Social Sciences and History",
    "1516067": "Theology and Religious Vocations",
    "1516069": "Transportation and Materials Moving",
    "1516071": "Visual and Performing Arts"
};

var dPersonnel334_17 = {
    "1517001": "All-Terrain Vehicle (ATV)",
    "1517003": "Commercial Class A",
    "1517005": "Commercial Class B",
    "1517007": "Commercial Class C",
    "1517009": "Motorcycle-Class M",
    "1517011": "None",
    "1517013": "Operator Class D (Normal)",
    "1517015": "Other (Not Listed)",
    "1517017": "Pilot-Rotor Wing Air",
    "1517019": "Pilot-Fixed Wing Air",
    "1517021": "Snowmobile",
    "1517023": "Taxi and Livery Class E"

};

var dPersonnel334_18 = {
    "1517001": "All-Terrain Vehicle (ATV)",
    "1517003": "Commercial Class A",
    "1517005": "Commercial Class B",
    "1517007": "Commercial Class C",
    "1517009": "Motorcycle-Class M",
    "1517011": "None",
    "1517013": "Operator Class D (Normal)",
    "1517015": "Other (Not Listed)",
    "1517017": "Pilot-Rotor Wing Air",
    "1517019": "Pilot-Fixed Wing Air",
    "1517021": "Snowmobile",
    "1517023": "Taxi and Livery Class E"

};
var dPersonnel334_20 = {
    "amh": "Amharic",
    "ara": "Arabic",
    "arm": "Armenian",
    "ben": "Bengali",
    "crp": "Cajun (Creole and Pidgins)",
    "chi": "Chinese",
    "hrv": "Croatian",
    "cze": "Czech",
    "dan": "Danish",
    "dut": "Dutch",
    "fin": "Finnish",
    "tai": "Formosan",
    "fre": "French",
    "cpf": "French Creole",
    "ger": "German",
    "gre": "Greek",
    "guj": "Gujarati",
    "heb": "Hebrew",
    "hin": "Hindi (Urdu)",
    "hun": "Hungarian",
    "ilo": "Ilocano",
    "itl": "Italian",
    "jpn": "Japanese",
    "kor": "Korean",
    "kro": "Kru",
    "lit": "Lithuanian",
    "mal": "Malayalam",
    "hmn": "Miao (Hmong)",
    "mkh": "Mon-Khmer (Cambodian)",
    "nav": "Navaho",
    "nno": "Norwegian",
    "pan": "Panjabi",
    "gem": "Pennsylvania Dutch (Germanic Other)",
    "per": "Persian",
    "pol": "Polish",
    "por": "Portuguese",
    "rum": "Romanian",
    "rus": "Russian",
    "smo": "Samoan",
    "srp": "Serbo-Croatian",
    "slo": "Slovak",
    "spa": "Spanish",
    "swe": "Swedish",
    "syr": "Syriac",
    "tgl": "Tagalog",
    "tha": "Thai (Laotian)",
    "tur": "Turkish",
    "ukr": "Ukrainian",
    "vie": "Vietnamese",
    "yid": "Yiddish",

};

var dPersonnel334_24 = {
    "9917001": "2009 Advanced Emergency Medical Technician (AEMT)",
    "9917003": "2009 Emergency Medical Responder (EMR)",
    "9917005": "2009 Emergency Medical Technician",
    "9917007": "2009 Paramedic",
    "9917009": "First Responder",
    "9917011": "EMT-Basic",
    "9917013": "EMT-Intermediate",
    "9917015": "EMT-Paramedic",
    "9917017": "Nurse",
    "9917019": "Physician",
    "9917021": "Critical Care Paramedic",
    "9917023": "Community Paramedicine",

};

var dPersonnel334_29 = {
    "1529901": "2009 Advanced Emergency Medical Technician(AEMT)",
    "1529003": "2009 Emergency Medical Responder (EMR)",
    "1529005": "2009 Emergency Medical Technician",
    "1529007": "2009 Paramedic",
    "1529009": "EMT-Basic",
    "1529011": "EMT-Intermediate",
    "1529013": "EMT-Paramedic",
    "1529015": "First Responder",

};

var dPersonnel334_31 = {
    "1531001": "Full Time Paid Employee",
    "1531003": "Part Time Paid Employee",
    "1531005": "Volunteer",
    "1531007": "Neither an Employee Nor a Volunteer",

};

var dPersonnel334_34 = {
    "1531001": "Full Time Paid Employee",
    "1531003": "Part Time Paid Employee",
    "1531005": "Volunteer",
    "1531007": "Neither an Employee Nor a Volunteer",

};

var dPersonnel334_35 = {
    "1531001": "Full Time Paid Employee",
    "1531003": "Part Time Paid Employee",
    "1531005": "Volunteer",
    "1531007": "Neither an Employee Nor a Volunteer",

};

var dPersonnel334_38 = {
    "9917001": "2009 Advanced Emergency Medical Technician (AEMT)",
    "9917003": "2009 Emergency Medical Responder (EMR)",
    "9917005": "2009 Emergency Medical Technician",
    "9917007": "2009 Paramedic",
    "9917009": "First Responder",
    "9917011": "EMT-Basic",
    "9917013": "EMT-Intermediate",
    "9917015": "EMT-Paramedic",
    "9917017": "Nurse",
    "9917019": "Physician",
    "9917021": "Critical Care Paramedic",
    "9917023": "Community Paramedicine",

};

