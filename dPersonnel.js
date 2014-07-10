var ErrorList = [];
var v3NOT_REPORTING = " NV=\"7701005\"";
var v3NOT_RECORDED = " NV=\"7701003\"";
var v2NOT_AVAILABLE = "-5";
var v2NOT_REPORTING = "-15";
var v2NOT_APPLICABLE = "-25"
var v2NOT_RECORDED = "-20";
var v2NOT_KNOWN = "-10";
var NIL_V3NOT_RECORDED =  "NV=\"7701003\" xsi:nil=\"true\"/>" ;
var NIL_V3NOT_REPORTING = "NV=\"7701005\" xsi:nil=\"true\"/>" ;
var NIL_V3NOT_APPLICABLE ="NV=\"7701001\" xsi:nil=\"true\"/>" ;
var PN_REFUSED_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801019\"/>";
var PN_UNABLE_TO_COMPLETE_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801023\"/>";
var PN_FINDING_NOT_PRESENT_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801005\"/>";

var dPersonnel = new Object;
var PersonnelGroup = new Object;
var NameGroup = new Object;
var AddressGroup = new Object;
var ImmunizationsGroup = new Object;
var LicensureGroup = new Object;
var CertificationLevelGroup = new Object;
var _retArray = [];
var OLAPArray = [];
var XMLString = "";
var v2Array = [];

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
}

var setdPersonnel = function (businessObject) {

    console.log(businessObject.name)
    if (businessObject.name != "dPersonnel") {
        return null;
    };

    var _retArray = [];
    var _sectionIndex = 0;
   // console.log(businessObject);
    _retArray.push("<dPersonnel>" + '\n');
    OLAPArray.push("<dPersonnel>" + '\n');
    for (var xx = 0; xx < businessObject.sections.length; xx++) //All dPersonnelGroup
    {
        _sectionIndex = getSectionIndex(businessObject.sections[xx].attributes, "dPersonnel.NameGroup");      
      //  console.log(_sectionIndex)
        var elementList = businessObject.sections[xx].attributes.elements;

        _retArray.push('\t' + "<dPersonnel.PersonnelGroup>" + '\n');
        OLAPArray.push('\t' + "<dPersonnel.PersonnelGroup>" + '\n');
        //////////dPersonnl.01

        _retArray.push('\t\t' + "<dPersonnel.NameGroup>" + '\n');
        OLAPArray.push('\t\t' + "<dPersonnel.NameGroup>" + '\n');

        _val = getdPersonnelValue(businessObject.sections[xx].attributes.sections[_sectionIndex[0]].attributes.elements, "dPersonnel.01");
        if (_val[0] == null) {
            if (isRequiredStateElement("dPersonnel.01") == true)
            {
                ErrorList.push("dPersonnel.01 required");
                _retArray.push('\t\t\t' + "<dPersonnel.01" + NIL_V3NOT_RECORDED + '\n');
                NameGroup["dPersonnel.01"] = V3NOT_RECORDED;
                v2Array.push({ section: "D08", element: "D08_01", val: v2NOT_RECORDED });
                OLAPArray.push('\t\t\t' + "<LastName>" + "NOT_RECORDED" + "</LastName>" + '\n');
            }
            else
            {
                OLAPArray.push('\t\t\t' + "<LastName>" + "NOT_REPORTING" + "</LastName>" + '\n');
                _retArray.push('\t\t\t' + "<dPersonnel.01" + NIL_V3NOT_REPORTING + '\n');
                v2Array.push({ section: "D08", element: "D08_01", val: v2NOT_REPORTING });
                NameGroup["dPersonnel.01"] = REPORTING;
            }
        }
        else
        {
            v2Array.push({ section: "D08", element: "D08_01", val: _val });
            NameGroup["dPersonnel.01"] = _val[0];
            OLAPArray.push('\t\t\t' + "<LastName>" + _val + "</LastName>" + '\n');
            _retArray.push('\t\t\t' + "<dPersonnel.01>" + _val[0] + "</dPersonnel.01>" + '\n');
        };

        //////////dPersonnl.02
        _val = getdPersonnelValue(businessObject.sections[xx].attributes.sections[_sectionIndex[0]].attributes.elements, "dPersonnel.02");
        if (_val[0] == null) {
            if (isRequiredStateElement("dPersonnel.02") == true)
            {
                ErrorList.push("dPersonnel.02 required");
                _retArray.push('\t\t\t' + "<dPersonnel.02" + NIL_V3NOT_RECORDED + '\n');
                v2Array.push({ section: "D08", element: "D08_03", val: v2NOT_RECORDED });
                OLAPArray.push('\t\t\t' + "<FirstName>" + "NOT_RECORDED" + "</FirstName>" + '\n');
                NameGroup["dPersonnel.02"] = V3NOT_RECORDED;
            }
            else
            {
                NameGroup["dPersonnel.02"] = V3NOT_REPORTING;
                OLAPArray.push('\t\t\t' + "<FirstName>" + "NOT_REPORTING" + "</FirstName>" + '\n');
                _retArray.push('\t\t\t' + "<dPersonnel.02" + NIL_V3NOT_REPORTING + '\n');
                v2Array.push({ section: "D08", element: "D08_03", val: v2NOT_REPORTING });
            }
        }
        else
        {
            OLAPArray.push('\t\t\t' + "<FirstName>" + _val + "</FirstName>" + '\n');
            v2Array.push({ section: "D08", element: "D08_03", val: _val });
            NameGroup["dPersonnel.02"] = _val[0];
            _retArray.push('\t\t\t' + "<dPersonnel.02>" + _val[0] + "</dPersonnel.02>" + '\n');
        };

        //////////dPersonnel.03
        _val = getdPersonnelValue(businessObject.sections[xx].attributes.sections[_sectionIndex[0]].attributes.elements, "dPersonnel.03");
        if (_val[0] == null)
        {
            if (isRequiredStateElement("dPersonnel.03") == true) {
                ErrorList.push("dPersonnel.03 required");
                OLAPArray.push('\t\t\t' + "<MI>" + "NOT_RECORDED" + "</MI>" + '\n');
                _retArray.push('\t\t\t' + "<dPersonnel.03" + NIL_V3NOT_RECORDED + '\n');
                v2Array.push({ section: "D08", element: "D08_02", val: v2NOT_RECORDED });
                NameGroup["dPersonnel.03"] = V3NOT_RECORDED;
            }
            else
            {
                OLAPArray.push('\t\t\t' + "<MI>" + "NOT_REPORTING" + "</MI>" + '\n');
                _retArray.push('\t\t\t' + "<dPersonnel.03" + NIL_V3NOT_REPORTING + '\n');                
                v2Array.push({ section: "D08", element: "D08_02", val: v2NOT_REPORTING });
                NameGroup["dPersonnel.03"] = V3NOT_REPORTING;
            }
        }
        else
        {
            v2Array.push({ section: "D08", element: "D08_02", val: _val });
            NameGroup["dPersonnel.03"] = _val[0];
            _retArray.push('\t\t\t' + "<dPersonnel.03>" + _val[0] + "</dPersonnel.03>" + '\n');
            OLAPArray.push('\t\t\t' + "<MI>" + _val + "</MI>" + '\n');
        };
        //////////////////////////////////////////////////////////////
        _retArray.push('\t\t' + "</dPersonnel.NameGroup>" + '\n');
        _retArray.push('\t\t' + "<dPersonnel.AddressGroup>" + '\n');

        OLAPArray.push('\t\t' + "</dPersonnel.NameGroup>" + '\n');
        OLAPArray.push('\t\t' + "<dPersonnel.AddressGroup>" + '\n');

        _sectionIndex = getSectionIndex(businessObject.sections[xx].attributes, "dPersonnel.AddressGroup");
        //   console.log(_sectionIndex)

        //////////dPersonnel.04
        _val = getdPersonnelValue(businessObject.sections[xx].attributes.sections[_sectionIndex[0]].attributes.elements, "dPersonnel.04");
        if (_val[0] == null)
        {
                AddressGroup["dPersonnel.04"] = null;
                _retArray.push('\t\t\t' + "<dPersonnel.04>" + null + "</dPersonnel.04>" + '\n');
                OLAPArray.push('\t\t\t' + "<MailingAddress>" + null + "</MailingAddress>" + '\n');
        }
        else
        {
            OLAPArray.push('\t\t\t' + "<MailingAddress>" + _val + "</MailingAddress>" + '\n');
            AddressGroup["dPersonnel.04"] = _val[0];
            _retArray.push('\t\t\t' + "<dPersonnel.04>" + _val[0] + "</dPersonnel.04>" + '\n');
            v2Array.push({ section: "D08", element: "D08_04", val: _val });
        };

        //////////dPersonnel.05
        _val = getdPersonnelValue(businessObject.sections[xx].attributes.sections[_sectionIndex[0]].attributes.elements, "dPersonnel.05");
        if (_val[0] == null)
        {
            OLAPArray.push('\t\t\t' + "<City>" + null + "</City>" + '\n');
            AddressGroup["dPersonnel.05"] = null;
            _retArray.push('\t\t\t' + "<dPersonnel.05>" + null + "</dPersonnel.05>" + '\n');
        }
        else
        {
            OLAPArray.push('\t\t\t' + "<City>" + _val + "</City>" + '\n');
            AddressGroup["dPersonnel.05"] = _val[0];
            _retArray.push('\t\t\t' + "<dPersonnel.05>" + _val[0] + "</dPersonnel.05>" + '\n');
            v2Array.push({ section: "D08", element: "D08_05", val: _val });
        };

        //////////dPersonnel.06
        _val = getdPersonnelValue(businessObject.sections[xx].attributes.sections[_sectionIndex[0]].attributes.elements, "dPersonnel.06");
        if (_val[0] == null)
        {
            OLAPArray.push('\t\t\t' + "<State>" + null + "</State>" + '\n');
            AddressGroup["dPersonnel.06"] = null;
            _retArray.push('\t\t\t' + "<dPersonnel.06>" + null + "</dPersonnel.06>" + '\n');
        }
        else
        {
            OLAPArray.push('\t\t\t' + "<State>" + _val + "</State>" + '\n');
            v2Array.push({ section: "D08", element: "D08_06", val: _val });
            AddressGroup["dPersonnel.06"] = _val;
            _retArray.push('\t\t\t' + "<dPersonnel.06>" + _val + "</dPersonnel.06>" + '\n');
        };

        //////////dPersonnel.07
        _val = getdPersonnelValue(businessObject.sections[xx].attributes.sections[_sectionIndex[0]].attributes.elements, "dPersonnel.07");
        if (_val[0] == null)
        {
            OLAPArray.push('\t\t\t' + "<Zip>" + null + "</Zip>" + '\n');
            AddressGroup["dPersonnel.07"] = null;
            _retArray.push('\t\t\t' + "<dPersonnel.07>" + null + "</dPersonnel.07>" + '\n');
        }
        else
        {
            OLAPArray.push('\t\t\t' + "<Zip>" + _val + "</Zip>" + '\n');
            v2Array.push({ section: "D08", element: "D08_07", val: _val });
            AddressGroup["dPersonnel.07"] = _val[0];
            _retArray.push('\t\t\t' + "<dPersonnel.07>" + _val[0] + "</dPersonnel.07>" + '\n');
        };

        //////////dPersonnel.08
        _val = getdPersonnelValue(businessObject.sections[xx].attributes.sections[_sectionIndex[0]].attributes.elements, "dPersonnel.08");
        if (_val[0] == null)
        {
            OLAPArray.push('\t\t\t' + "<Country>" + null + "</Country>" + '\n');
            _retArray.push('\t\t\t' + "<dPersonnel.08>" + null + "</dPersonnel.08>" + '\n');
            AddressGroup["dPersonnel.08"] = null;
        }
        else
        {
            OLAPArray.push('\t\t\t' + "<Country>" + _val + "</Country>" + '\n');
            AddressGroup["dPersonnel.08"] = _val;
            _retArray.push('\t\t\t' + "<dPersonnel.08>" + _val + "</dPersonnel.08>" + '\n');
        };

        OLAPArray.push('\t\t' + "</dPersonnel.AddressGroup>" + '\n');
        _retArray.push('\t\t' + "</dPersonnel.AddressGroup>" + '\n');
        ///////////////////////////////////////////
        ///////////////////////////////////////////
        
        //////////dPersonnel.09
        _val= getdPersonnelValue(elementList, "dPersonnel.09");
        if (_val == null) {
              OLAPArray.push('\t\t' + "<PhoneNumber>" + null + "</PhoneNumber>" + '\n');
            _retArray.push('\t\t' + "<dPersonnel.09>" + null + '\n');
            v2Array.push({ section: "D08", element: "D08_12", val: null });                
        }
        else
        {
            var arr = [];
            var arr2 = [];
            console.log(_val.length)
            for (var t = 0; t < _val.length; t++)
            {
                arr.push(_val[t]);
                arr2.push(setV2("dPersonnel.09", _val[t]));
                _retArray.push('\t\t' + "<dPersonnel.09>" + _val[t] + "</dPersonnel.09>" + '\n');
                OLAPArray.push('\t\t' + "<PhoneNumber>" + _val[t] + "</PhoneNumber>" + '\n');
            }
            PersonnelGroup["dPersonnel.09"] = arr.slice(0);
            v2Array.push({ section: "D08", element: "D08_12", val: arr2.slice(0) });
        };

        //////////dPersonnel.10
        _val = getdPersonnelValue(elementList, "dPersonnel.10");
        if (_val[0] == null) {
            PersonnelGroup["dPersonnel.10"] = null;
            OLAPArray.push('\t\t' + "<EMail>" + null + "</EMail>" + '\n');
            _retArray.push('\t\t' + "<dPersonnel.10>" + null + "</dPersonnel.10>" + '\n');
        }
        else
        {
            var arr = [];
            var arr2 = [];
            for (var t = 0; t < _val[0].length; t++) {
                arr.push(_val[t]);
                arr2.push(setV2("dPersonnel.10", _val));
                _retArray.push('\t\t' + "<dPersonnel.10>" + _val[t] + "</dPersonnel.10>" + '\n');
                OLAPArray.push('\t\t' + "<EMail>" + _val[t] + "</EMail>" + '\n');
            }
            PersonnelGroup["dPersonnel.10"] = arr.slice(0);
            v2Array.push({ section: "D08", element: "D08_10", val: arr2.slice(0) });
        };

        //////////dPersonnel.11
        _val = getdPersonnelValue(elementList, "dPersonnel.11");
        if (_val[0] == null) {
            if (isRequiredStateElement("dPersonnel.11") == true)
            {
                OLAPArray.push('\t\t' + "<DOB>" + "NOT_RECORDED" + "</DOB>" + '\n');
                ErrorList.push("dPersonnel.11 required");
                _retArray.push('\t\t' + "<dPersonnel.11>" + NIL_V3NOT_RECORDED + '\n');
                v2Array.push({ section: "D08", element: "D08_11", val: v2NOT_RECORDED });
                PersonnelGroup["dPersonnel.11"] = v3NOT_RECORDED;
            }
            else
            {
                OLAPArray.push('\t\t' + "<DOB>" + "NOT_REPORTING" + "</DOB>" + '\n');
                _retArray.push('\t\t' + "<dPersonnel.11>" + NIL_V3NOT_REPORTING + '\n');
                v2Array.push({ section: "D08", element: "D08_11", val: v2NOT_REPORTING });
                PersonnelGroup["dPersonnel.11"] = v3NOT_REPORTING;
            }
            
        }
        else
        {
            PersonnelGroup["dPersonnel.11"] = _val;
            _retArray.push('\t\t' + "<dPersonnel.11>" + _val + "</dPersonnel.11>" + '\n');
            v2Array.push({ section: "D08", element: "D08_11", val: _val });
            OLAPArray.push('\t\t' + "<DOB>" + _val + "</DOB>" + '\n');

        };

        //////////dPersonnel.12
        _val = getdPersonnelValue(elementList, "dPersonnel.12");
        if (_val[0] == null)
        {
            if (isRequiredStateElement("dPersonnel.12") == true)
            {
                ErrorList.push("dPersonnel.12 required");
                OLAPArray.push('\t\t' + "<Gender>" + "NOT_RECORDED" + "</Gender>" + '\n');
                _retArray.push('\t\t' + "<dPersonnel.12>" + NIL_V3NOT_RECORDED + '\n');
                v2Array.push({ section: "D08", element: "D08_12", val: v2NOT_RECORDED });
                PersonnelGroup["dPersonnel.12"] = v3NOT_RECORDED
            }
            else
            {
                v2Array.push({ section: "D08", element: "D08_12", val: v2NOT_REPORTING });
                OLAPArray.push('\t\t' + "<Gender>" + "NOT_REPORTING" + "</Gender>" + '\n');
                _retArray.push('\t\t' + "<dPersonnel.12>" + NIL_V3NOT_REPORTING + '\n');
                PersonnelGroup["dPersonnel.12"] = v3NOT_REPORTING;
            }
        }
        else
        {
            OLAPArray.push('\t\t' + "<Gender>" + _val + "</Gender>" + '\n');
            PersonnelGroup["dPersonnel.12"] = _val[0];
            _retArray.push('\t\t' + "<dPersonnel.12>" + _val[0] + "</dPersonnel.12>" + '\n');
            v2Array.push({ section: "D08", element: "D08_12", val: setV2("dPersonnel.12", _val[0]) });
        };


        //////////dPersonnel.13
        _val = getdPersonnelValue(elementList, "dPersonnel.13");
        if (_val[0] == null)
        {
            if (isRequiredStateElement("dPersonnel.13") == true)
            {
                OLAPArray.push('\t\t' + "<Race>" + "NOT_RECORDED" + "</Race>" + '\n');
                ErrorList.push("dPersonnel.13 required");
                _retArray.push('\t\t' + "<dPersonnel.13>" + NIL_V3NOT_RECORDED + '\n');
                v2Array.push({ section: "D08", element: "D08_13", val: v2NOT_RECORDED });
                PersonnelGroup["dPersonnel.13"] = v3NOT_RECORDED;
            }
            else
            {
                OLAPArray.push('\t\t' + "<Race>" + "NOT_REPORTING" + "</Race>" + '\n');
                v2Array.push({ section: "D08", element: "D08_13", val: v2NOT_REPORTING });
                _retArray.push("<dPersonnel.13>" + NIL_V3NOT_REPORTING + '\n');
                PersonnelGroup["dPersonnel.13"] = v3NOT_REPORTING;
            }
        }
        else
        {
            var arr = [];
            var arr2 = [];
            for (var t = 0; t < _val.length; t++) {
                arr.push(_val[t]);
                arr2.push(setV2("dPersonnel.13", _val[t]));
                OLAPArray.push('\t\t' + "<Race>" + _val[t] + "</Race>" + '\n');
                _retArray.push('\t\t' + "<dPersonnel.13>" + _val[t] + "</dPersonnel.13>" + '\n');
            }
            PersonnelGroup["dPersonnel.13"] = arr.slice(0);
            v2Array.push({ section: "D08", element: "D08_13", val: arr2.slice(0) });
        };

        //////////dPersonnel.15
        _val = getdPersonnelValue(elementList, "dPersonnel.14");
        if (_val[0] == null)
        {
            OLAPArray.push('\t\t' + "<Citizenship>" + null + "</Citizenship>" + '\n');
            _retArray.push('\t\t' + "<dPersonnel.14>" + null + "</dPersonnel.14>" + '\n');
            PersonnelGroup["dPersonnel.14"] = null;
        }
        else
        {
            OLAPArray.push('\t\t' + "<Citizenship>" + _val[t] + "</Citizenship>" + '\n');
            PersonnelGroup["dPersonnel.14"] = _val;
            _retArray.push('\t\t' + "<dPersonnel.14>" + _val + "</dPersonnel.14>" + '\n');

        };

        //////////dPersonnel.15
        _val = getdPersonnelValue(elementList, "dPersonnel.15");
        if (_val[0] == null)
        {
            OLAPArray.push('\t\t' + "<HighestEducationalDegree>" + null + "</HighestEducationalDegree>" + '\n');
            PersonnelGroup["dPersonnel.15"] = null;
            _retArray.push('\t\t' + "<dPersonnel.15>" + null + "</dPersonnel.15>" + '\n');
        }
        else
        {
            OLAPArray.push('\t\t' + "<HighestEducationalDegree>" + _val + "</HighestEducationalDegree>" + '\n');
            PersonnelGroup["dPersonnel.15"] = _val;
            _retArray.push('\t\t' + "<dPersonnel.15>" + _val + "</dPersonnel.15>" + '\n');
        };

        //////////dPersonnel.16
        _val = getdPersonnelValue(elementList, "dPersonnel.16");
        if (_val[0] == null)
        {
            OLAPArray.push('\t\t' + "<DegreeSubject>" + null + "</DegreeSubject>" + '\n');
            _retArray.push('\t\t' + "<dPersonnel.16>" + null + "</dPersonnel.16>" + '\n');
            PersonnelGroup["dPersonnel.16"] = null;
        }
        else
        {
            var arr = [];
            for (var t = 0; t < _val.length; t++)
            {
                arr.push(_val[t]);
                _retArray.push('\t\t' + "<dPersonnel.16>" + _val[t] + "</dPersonnel.16>" + '\n');
                OLAPArray.push('\t\t' + "<DegreeSubject>" + _val[t] + "</DegreeSubject>" + '\n');
            }
            PersonnelGroup["dPersonnel.16"] = arr.slice(0);
        };

        //////////dPersonnel.17
        _val = getdPersonnelValue(elementList, "dPersonnel.17");
        if (_val[0] == null)
        {
            OLAPArray.push('\t\t' + "<MotorVehicleLicenseType>" + null + "</MotorVehicleLicenseType>" + '\n');
            _retArray.push('\t\t' + "<dPersonnel.17>" + null + "</dPersonnel.17>" + '\n');
            PersonnelGroup["dPersonnel.17"] = null;
        }
        else
        {
            var arr = [];
            for (var t = 0; t < _val.length; t++) {
                arr.push(_val[t]);
                _retArray.push('\t\t' + "<dPersonnel.17>" + _val[t] + "</dPersonnel.17>" + '\n');
                OLAPArray.push('\t\t' + "<MotorVehicleLicenseType>" + _val[t] + "</MotorVehicleLicenseType>" + '\n');
            }
            PersonnelGroup["dPersonnel.17"] = arr.slice(0);
        };

        ///////////////////////////////////////////////////////
        ///////////////////////ImmunizationsGroup
        _sectionIndex = getSectionIndex(businessObject.sections[xx].attributes, "dPersonnel.ImmunizationsGroup");
       // console.log(_sectionIndex)
   
        
        for (var x = 0; x < _sectionIndex.length; x++) {
            //            console.log(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements)

            _retArray.push('\t\t' + "<dPersonnel.ImmunizationsGroup>" + '\n');
            OLAPArray.push('\t\t' + "<dPersonnel.ImmunizationsGroup>" + '\n');

            //////////dPersonnel.18
            _val = getdPersonnelValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.18");
            if (_val[0] == null) {
                OLAPArray.push('\t\t\t' + "<ImmunizationStatus>" + null + "</ImmunizationStatus>" + '\n');
                _retArray.push('\t\t\t' + "<dPersonnel.18>" + null + "</dPersonnel.18>" + '\n');
                AddressGroup["dPersonnel.18"] = null;
            }
            else {
                OLAPArray.push('\t\t\t' + "<ImmunizationStatus>" + _val + "</ImmunizationStatus>" + '\n');
                AddressGroup["dPersonnel.18"] = _val;
                _retArray.push('\t\t\t' + "<dPersonnel.18>" + _val + "</dPersonnel.18>" + '\n');
            };

            //////////dPersonnel.19
            _val = getdPersonnelValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.19");
            if (_val[0] == null) {
                OLAPArray.push('\t\t\t' + "<ImmunizationYear>" + null + "</ImmunizationYear>" + '\n');
                _retArray.push('\t\t\t' + "<dPersonnel.19>" + null + "</dPersonnel.19>" + '\n');
                AddressGroup["dPersonnel.19"] = null;
            }
            else {
                OLAPArray.push('\t\t\t' + "<ImmunizationYear>" + _val + "</ImmunizationYear>" + '\n');
                AddressGroup["dPersonnel.19"] = _val;
                _retArray.push('\t\t\t' + "<dPersonnel.19>" + _val + "</dPersonnel.19>" + '\n');
            };

            _retArray.push('\t\t' + "</dPersonnel.ImmunizationsGroup>" + '\n');
            OLAPArray.push('\t\t' + "</dPersonnel.ImmunizationsGroup>" + '\n');
        };
        //////////////////////////////////////////
        //////////////////////////////////////////

        //////////dPersonnel.20
        _val = getdPersonnelValue(elementList, "dPersonnel.20");
        if (_val == null)
        {
            OLAPArray.push('\t\t' + "<ForeignLanguageAbility>" + null + "</ForeignLanguageAbility>" + '\n');
            _retArray.push('\t\t' + "<dPersonnel.20>" + null + "</dPersonnel.20>" + '\n');
            PersonnelGroup["dPersonnel.20"] = null;
        }
        else
        {
            var arr = [];
            for (var t = 0; t < _val.length; t++)
            {
                arr.push(_val[t]);
                OLAPArray.push('\t\t' + "<ForeignLanguageAbility>" + _val[t] + "</ForeignLanguageAbility>" + '\n');
                _retArray.push('\t\t' + "<dPersonnel.20>" + _val[t] + "</dPersonnel.20>" + '\n');
            }
            PersonnelGroup["dPersonnel.20"] = arr.slice(0);
        };

        //////////dPersonnel.21
        _val = getdPersonnelValue(elementList, "dPersonnel.21");
        if (_val == null)
        {
            OLAPArray.push('\t\t' + "<PersonnelAgencyIDNumber>" + null + "</PersonnelAgencyIDNumber>" + '\n');
            _retArray.push('\t\t' + "<dPersonnel.21>" + null + "</dPersonnel.21>" + '\n');
            PersonnelGroup["dPersonnel.21"] = null;
        }
        else
        {
            PersonnelGroup["dPersonnel.21"] = _val;
            _retArray.push('\t\t' + "<dPersonnel.21>" + _val + "</dPersonnel.21>" + '\n');
            OLAPArray.push('\t\t' + "<PersonnelAgencyIDNumber>" + _val + "</PersonnelAgencyIDNumber>" + '\n');
            v2Array.push({ section: "D08", element: "D08_13", val: _val });
        };

        ////////////////////////////LicensureGroup
        _sectionIndex = getSectionIndex(businessObject.sections[xx].attributes, "dPersonnel.LicensureGroup");
        OLAPArray.push('\t\t' + "<dPersonnel.LicensureGroup>" + '\n');
        _retArray.push('\t\t' + "<dPersonnel.LicensureGroup>" + '\n');
        
        for (var x = 0; x < _sectionIndex.length; x++) {
           // console.log(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements)
            //dPersonnel.22
            _val = getdPersonnelValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.22");
            if (_val[0] == null) {
                if (isRequiredStateElement("dPersonnel.22") == true) {
                    ErrorList.push("dPersonnel.22 required");
                    _retArray.push('\t\t\t' + "<dPersonnel.22>" + NIL_V3NOT_RECORDED + '\n');
                    OLAPArray.push('\t\t\t' + "<StateofLicensure>" + "NOT_RECORDED" + "</StateofLicensure>" + '\n');
                }
                else
                {
                    OLAPArray.push('\t\t\t' + "<StateofLicensure>" + "NOT_REPORTING" + "</StateofLicensure>" + '\n');
                    _retArray.push('\t\t\t' + "<dPersonnel.22>" + NIL_V3NOT_REPORTING + '\n');
                }
            }
            else
            {
                OLAPArray.push('\t\t\t' + "<StateofLicensure>" + _val + "</StateofLicensure>" + '\n');
                _retArray.push('\t\t\t' + "<dPersonnel.22>" + _val + "</dPersonnel.22>" + '\n');
                LicensureGroup["dPersonnel.22"] = _val;
            };


            //dPersonnel.23
            _val = getdPersonnelValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.23");
            if (_val == null) {
                if (isRequiredStateElement("dPersonnel.23") == true)
                {
                    OLAPArray.push('\t\t\t' + "<StateLicensureIDNumber>" + "NOT_RECORDED" + "</StateLicensureIDNumber>" + '\n');
                    ErrorList.push("dPersonnel.23 required");
                    _retArray.push('\t\t\t' + "<dPersonnel.23>" + NIL_V3NOT_RECORDED + '\n');
                }
                else
                {
                    OLAPArray.push('\t\t\t' + "<StateLicensureIDNumber>" + "NOT_REPORTING" + "</StateLicensureIDNumber>" + '\n');
                    _retArray.push('\t\t\t' + "<dPersonnel.23>" + NIL_V3NOT_REPORTING + '\n');
                }
            }
            else {
                _retArray.push('\t\t\t' + "<dPersonnel.23>" + _val + "</dPersonnel.23>" + '\n');
                OLAPArray.push('\t\t\t' + "<StateLicensureIDNumber>" + _val + "</StateLicensureIDNumber>" + '\n');
                LicensureGroup["dPersonnel.23"] = _val;
            };

            //dPersonnel.24
            _val = getdPersonnelValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.24");
            if (_val[0] == null) {
                if (isRequiredStateElement("dPersonnel.24") == true)
                {
                    OLAPArray.push('\t\t\t' + "<EMSCertificationLicensureLevel>" + "NOT_RECORDED" + "</EMSCertificationLicensureLevel>" + '\n');
                    ErrorList.push("dPersonnel.24 required");
                    _retArray.push('\t\t\t' + "<dPersonnel.24>" + NIL_V3NOT_RECORDED + '\n');
                }
                else
                {
                    OLAPArray.push('\t\t\t' + "<EMSCertificationLicensureLevel>" + "NOT_RECORDED" + "</EMSCertificationLicensureLevel>" + '\n');
                    _retArray.push('\t\t\t' + "<dPersonnel.24>" + NIL_V3NOT_REPORTING + '\n');
                }
            }
            else
            {
                OLAPArray.push('\t\t\t' + "<EMSCertificationLicensureLevel>" + _val + "</EMSCertificationLicensureLevel>" + '\n');
                _retArray.push('\t\t\t' + "<dPersonnel.24>" + _val[0] + "</dPersonnel.24>" + '\n');
                LicensureGroup["dPersonnel.24"] = _val[0];
            };

            //dPersonnel.25
            _val = getdPersonnelValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.24");
            if (_val[0] == null) {
                _retArray.push('\t\t\t' + "<dPersonnel.25>" + null + "</dPersonnel.25>" + '\n');
                OLAPArray.push('\t\t\t' + "<EMSCurrentCertificationDate>" + null + "</EMSCurrentCertificationDate>" + '\n');
                LicensureGroup["dPersonnel.25"] = null;
            }
            else {
                _retArray.push('\t\t\t' + "<dPersonnel.25>" + _val[0] + "</dPersonnel.25>" + '\n');
                OLAPArray.push('\t\t\t' + "<EMSCurrentCertificationDate>" + _val[0] + "</EMSCurrentCertificationDate>" + '\n');
                LicensureGroup["dPersonnel.25"] = _val[0];
            };

            //dPersonnel.26
            _val = getdPersonnelValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.24");
            if (_val[0] == null)
            {
                OLAPArray.push('\t\t\t' + "<InitialStateLicensureIssueDate>" + null + "</InitialStateLicensureIssueDate>" + '\n');
                _retArray.push('\t\t\t' + "<dPersonnel.26>" + null + "</dPersonnel.26>" + '\n');
                LicensureGroup["dPersonnel.26"] = null;
            }
            else
            {
                OLAPArray.push('\t\t\t' + "<InitialStateLicensureIssueDate>" + _val[0] + "</InitialStateLicensureIssueDate>" + '\n');
                _retArray.push('\t\t\t' + "<dPersonnel.26>" + _val[0] + "</dPersonnel.26>" + '\n');
                LicensureGroup["dPersonnel.26"] = _val[0];
            };

            //dPersonnel.27
            _val = getdPersonnelValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.24");
            if (_val[0] == null)
            {
                OLAPArray.push('\t\t\t' + "<CurrentStateLicensureExpirationDate>" + null + "</CurrentStateLicensureExpirationDate>" + '\n');
                _retArray.push('\t\t\t' + "<dPersonnel.27>" + null + "</dPersonnel.27>" + '\n');
                LicensureGroup["dPersonnel.27"] = null;
            }
            else
            {
                OLAPArray.push('\t\t\t' + "<CurrentStateLicensureExpirationDate>" + _val[0] + "</CurrentStateLicensureExpirationDate>" + '\n');
                _retArray.push('\t\t\t' + "<dPersonnel.27>" + _val[0] + "</dPersonnel.27>" + '\n');
                LicensureGroup["dPersonnel.27"] = _val[0];
            };


            _retArray.push('\t\t' + "</dPersonnel.LicensureGroup>" + '\n');
            OLAPArray.push('\t\t' + "</dPersonnel.LicensureGroup>" + '\n');
        };
 
        //dPersonnel.28
        _val = getdPersonnelValue(elementList, "dPersonnel.28");
        if (_val[0] == null)
        {
            OLAPArray.push('\t\t' + "<NationalRegistryNumber>" + null + "</NationalRegistryNumber>" + '\n');
            PersonnelGroup["dPersonnel.28"] = null;
            _retArray.push('\t\t' + "<dPersonnel.28>" + null + "</dPersonnel.28>" + '\n');
        }
        else
        {
            OLAPArray.push('\t\t' + "<NationalRegistryNumber>" + _val[0] + "</NationalRegistryNumber>" + '\n');
            PersonnelGroup["dPersonnel.28"] = _val[0];
            _retArray.push('\t\t' + "<dPersonnel.28>" + _val[0] + "</dPersonnel.28>" + '\n');
        };

        //dPersonnel.29
        _val = getdPersonnelValue(elementList, "dPersonnel.29");
        if (_val[0] == null)
        {
            OLAPArray.push('\t\t' + "<NationalRegistryCertificationLevel>" + null + "</NationalRegistryCertificationLevel>" + '\n');
            PersonnelGroup["dPersonnel.29"] = null;
            _retArray.push('\t\t' + "<dPersonnel.29>" + null + "</dPersonnel.29>" + '\n');
        }
        else
        {
            OLAPArray.push('\t\t' + "<NationalRegistryCertificationLevel>" + _val[0] + "</NationalRegistryCertificationLevel>" + '\n');
            PersonnelGroup["dPersonnel.29"] = _val[0];
            _retArray.push('\t\t' + "<dPersonnel.29>" + _val[0] + "</dPersonnel.29>" + '\n');
        };

        //dPersonnel.30
        _val = getdPersonnelValue(elementList, "dPersonnel.30");
        if (_val[0] == null)
        {
            OLAPArray.push('\t\t' + "<CurrentNationalRegistryExpirationDate>" + null + "</CurrentNationalRegistryExpirationDate>" + '\n');
            PersonnelGroup["dPersonnel.30"] = null;
            _retArray.push('\t\t' + "<dPersonnel.30>" + null + "</dPersonnel.30>" + '\n');
        }
        else
        {
            OLAPArray.push('\t\t' + "<CurrentNationalRegistryExpirationDate>" + _val[0] + "</CurrentNationalRegistryExpirationDate>" + '\n');
            PersonnelGroup["dPersonnel.30"] = _val[0];
            _retArray.push('\t\t' + "<dPersonnel.30>" + _val[0] + "</dPersonnel.30>" + '\n');
        };

        //dPersonnel.31

        _val = getdPersonnelValue(elementList, "dPersonnel.31");
        if (_val[0] == null) {
            if (isRequiredStateElement("dPersonnel.31") == true)
            {
                
                ErrorList.push("dPersonnel.13 required");
                _retArray.push('\t\t' + "<dPersonnel.31>" + NIL_V3NOT_RECORDED + '\n');
                v2Array.push({ section: "D07", element: "D07_03", val: v2NOT_RECORDED });
                PersonnelGroup["dPersonnel.31"] = v3NOT_RECORDED;
                OLAPArray.push('\t\t' + "<EmploymentStatus>" + "NOT_RECORDED" + "</EmploymentStatus>" + '\n');
            }
            else
            {
                _retArray.push('\t\t' + "<dPersonnel.31>" + NIL_V3NOT_REPORTING + '\n');
                OLAPArray.push('\t\t' + "<EmploymentStatus>" + "NOT_REPORTING" + "</EmploymentStatus>" + '\n');
                v2Array.push({ section: "D07", element: "D07_03", val: v2NOT_REPORTING });
                PersonnelGroup["dPersonnel.31"] = V3NOT_REPORTING;
            }            
        }
        else
        {
            PersonnelGroup["dPersonnel.31"] = _val[0];
            OLAPArray.push('\t\t' + "<EmploymentStatus>" + _val[0] + "</EmploymentStatus>" + '\n');
            v2Array.push({ section: "D07", element: "D07_03", val: setD2("dPersonnel.31", _val[0]) });
            _retArray.push('\t\t' + "<dPersonnel.31>" + _val[0] + "</dPersonnel.31>" + '\n');
        };

        //dPersonnel.32
        _val = getdPersonnelValue(elementList, "dPersonnel.32");
        if (_val[0] == null) {
            if (isRequiredStateElement("dPersonnel.32") == true)
            {
                ErrorList.push("dPersonnel.32 required");
                _retArray.push('\t\t' + "<dPersonnel.32>" + NIL_V3NOT_RECORDED + '\n');
                v2Array.push({ section: "D07", element: "D07_04", val: v2NOT_RECORDED });
                PersonnelGroup["dPersonnel.32"] = v3NOT_RECORDED;
                OLAPArray.push('\t\t' + "<EmploymentStatusDate>" + "NOT_RECORDED" + "</EmploymentStatusDate>" + '\n');
            }
            else
            {
                v2Array.push({ section: "D07", element: "D07_04", val: v2NOT_REPORTING });
                _retArray.push('\t\t' + "<dPersonnel.32>" + NIL_V3NOT_REPORTING + '\n');
                PersonnelGroup["dPersonnel.32"] = V3NOT_REPORTING;
                OLAPArray.push('\t\t' + "<EmploymentStatusDate>" + "NOT_REPORTING" + "</EmploymentStatusDate>" + '\n');
            }
        }
        else
        {
            PersonnelGroup["dPersonnel.32"] = _val[0];
            _retArray.push('\t\t' + "<dPersonnel.32>" + _val[0] + "</dPersonnel.32>" + '\n');
            v2Array.push({ section: "D07", element: "D07_04", val: _val });
            OLAPArray.push('\t\t' + "<EmploymentStatusDate>" + _val + "</EmploymentStatusDate>" + '\n');
        };


        //dPersonnel.33
        _val = getdPersonnelValue(elementList, "dPersonnel.33");
        if (_val[0] == null)
        {
            PersonnelGroup["dPersonnel.33"] = null;
            _retArray.push('\t\t' + "<dPersonnel.33>" + null + "</dPersonnel.33>" + '\n');
            OLAPArray.push('\t\t' + "<Hire Date>" + null + "</HireDate>" + '\n');
        }
        else
        {
            OLAPArray.push('\t\t' + "<Hire Date>" + _val[0] + "</HireDate>" + '\n');
            PersonnelGroup["dPersonnel.33"] = _val[0];
            _retArray.push('\t\t' + "<dPersonnel.33>" + _val[0] + "</dPersonnel.33>" + '\n');
        };

        //dPersonnel.34
        _val = getdPersonnelValue(elementList, "dPersonnel.34");
        if (_val[0] == null) {
            if (isRequiredStateElement("dPersonnel.34") == true)
            {
                PersonnelGroup["dPersonnel.34"] = v3NOT_RECORDED;
                OLAPArray.push('\t\t' + "<PrimaryEMSJobRole>" + "NOT_RECORDED" + "</PrimaryEMSJobRole>" + '\n');
                ErrorList.push("dPersonnel.34 required");
                _retArray.push('\t\t' + "<dPersonnel.34>" + NIL_V3NOT_RECORDED + '\n');
            }
            else
            {
                _retArray.push('\t\t' + "<dPersonnel.34>" + NIL_V3NOT_REPORTING + '\n');
                PersonnelGroup["dPersonnel.34"] = V3NOT_REPORTING;
                OLAPArray.push('\t\t' + "<PrimaryEMSJobRole>" + "NOT_REPORTING" + "</PrimaryEMSJobRole>" + '\n');
            }

        }
        else
        {
            PersonnelGroup["dPersonnel.34"] = _val[0];
            _retArray.push('\t\t' + "<dPersonnel.34>" + _val[0] + "</dPersonnel.34>" + '\n');
            OLAPArray.push('\t\t' + "<PrimaryEMSJobRole>" + _val[0] + "</PrimaryEMSJobRole>" + '\n');
        };

        //dPersonnel.35
        _val = getdPersonnelValue(elementList, "dPersonnel.35");
        if (_val[0] == null)
        {
            if (isRequiredStateElement("dPersonnel.35") == true)
            {
                ErrorList.push("dPersonnel.35 required");
                _retArray.push('\t\t' + "<dPersonnel.35>" + NIL_V3NOT_RECORDED + '\n');
                PersonnelGroup["dPersonnel.35"] = v3NOT_RECORDED;
                OLAPArray.push('\t\t' + "<OtherJobResponsibilities>" + "NOT_RECORDED" + "</OtherJobResponsibilities>" + '\n');
            }
            else
            {
                _retArray.push('\t\t' + "<dPersonnel.35>" + NIL_V3NOT_REPORTING + '\n');
                PersonnelGroup["dPersonnel.35"] = V3NOT_REPORTING;
                OLAPArray.push('\t\t' + "<OtherJobResponsibilities>" + "NOT_REPORTING" + "</OtherJobResponsibilities>" + '\n');
            }
        }
        else
        {
            for (var t = 0; t < _val[0].length; t++)
            {
                arr.push(_val[t]);
                _retArray.push('\t\t' + "<dPersonnel.35>" + _val[t] + "</dPersonnel.35>" + '\n');
                OLAPArray.push('\t\t' + "<OtherJobResponsibilities>" + _val[t] + "</OtherJobResponsibilities>" + '\n');
            }
            PersonnelGroup["dPersonnel.35"] = arr.slice(0);
        };

        _val = getdPersonnelValue(elementList, "dPersonnel.36");
        if (_val[0] == null) {
            PersonnelGroup["dPersonnel.36"] = null;
            _retArray.push('\t\t' + "<dPersonnel.36>" + null + "</dPersonnel.36>" + '\n');
            OLAPArray.push('\t\t' + "<TotalLengthofServiceinYears>" + null + "</TotalLengthofServiceinYears>" + '\n');
            v2Array.push({ section: "D08", element: "D08_19", val: null });
        }
        else
        {
            PersonnelGroup["dPersonnel.36"] = _val[0];
            _retArray.push('\t\t' + "<dPersonnel.36>" + _val[0] + "</dPersonnel.36>" + '\n');
            OLAPArray.push('\t\t' + "<TotalLengthofServiceinYears>" + n_val + "</TotalLengthofServiceinYears>" + '\n');
            v2Array.push({ section: "D08", element: "D08_19", val: _val });
        };

        _val = getdPersonnelValue(elementList, "dPersonnel.37");
        if (_val[0] == null)
        {
            OLAPArray.push('\t\t' + "<DateLengthofServiceDocumented>" + null + "</DateLengthofServiceDocumented>" + '\n');
            PersonnelGroup["dPersonnel.37"] = null;
            _retArray.push('\t\t' + "<dPersonnel.37>" + null + "</dPersonnel.37>" + '\n');
            v2Array.push({ section: "D08", element: "D08_20", val: null });
        }
        else
        {
            OLAPArray.push('\t\t' + "<DateLengthofServiceDocumented>" + _val + "</DateLengthofServiceDocumented>" + '\n');
            PersonnelGroup["dPersonnel.37"] = _val;
            v2Array.push({ section: "D08", element: "D08_20", val: _val });
            _retArray.push('\t\t' + "<dPersonnel.37>" + _val + "</dPersonnel.37>" + '\n');
        };
            
        ////////////////////////////CertificationLevelGroup
        _sectionIndex = getSectionIndex(businessObject.sections[xx].attributes, "dPersonnel.CertificationLevelGroup");
        console.log(_sectionIndex)
        console.log(_sectionIndex.length)

        if (_sectionIndex > 0)
        {
            for (var x = 0; x < _sectionIndex.length; x++) {
                // console.log(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements)

                _retArray.push('\t\t' + "<dPersonnel.CertificationLevelGroup>" + '\n');
                OLAPArray.push('\t\t' + "<dPersonnel.CertificationLevelGroup>" + '\n');

                //dPersonnel.38
                _val = getdPersonnelValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.38");
                if (_val[0] == null) {
                    _retArray.push('\t\t\t' + "<dPersonnel.38>" + null + "</dPersonnel.38>" + '\n');
                    OLAPArray.push('\t\t\t' + "<EMSProfessionalPracticeLevel>" + null + "</EMSProfessionalPracticeLevel>" + '\n');
                    CertificationLevelGroup["dPersonnel.38"] = null;
                    v2Array.push({ section: "D07", element: "D07_05", val: null });
                }
                else
                {
                    OLAPArray.push('\t\t\t' + "<EMSProfessionalPracticeLevel>" + _val[0] + "</EMSProfessionalPracticeLevel>" + '\n');
                    _retArray.push('\t\t\t' + "<dPersonnel.38>" + _val[0] + "</dPersonnel.38>" + '\n');
                    CertificationLevelGroup["dPersonnel.38"] = _val[0];
                    v2Array.push({ section: "D07", element: "D07_05", val: _val[0] });
                };

                //dPersonnel.39
                _val = getdPersonnelValue(businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dPersonnel.39");
                if (_val[0] == null)
                {
                    v2Array.push({ section: "D07", element: "D07_06", val: null });
                    _retArray.push('\t\t\t' + "<dPersonnel.39>" + null + "</dPersonnel.39>" + '\n');
                    OLAPArray.push('\t\t\t' + "<DateofProfessionalCertificationorLicensureforAgency>" + null + "</DateofProfessionalCertificationorLicensureforAgency>" + '\n');
                    CertificationLevelGroup["dPersonnel.39"] = null;
                }
                else
                {
                    v2Array.push({ section: "D07", element: "D07_06", val: _val[0] });
                    OLAPArray.push('\t\t\t' + "<DateofProfessionalCertificationorLicensureforAgency>" + _val[0] + "</DateofProfessionalCertificationorLicensureforAgency>" + '\n');
                    _retArray.push('\t\t\t' + "<dPersonnel.39>" + _val[0] + "</dPersonnel.39>" + '\n');
                    CertificationLevelGroup["dPersonnel.39"] = _val[0];
                };


                _retArray.push('\t\t' + "</dPersonnel.CertificationLevelGroup>" + '\n');
                OLAPArray.push('\t\t' + "</dPersonnel.CertificationLevelGroup>" + '\n');
            };
        }


        _retArray.push('\t' + "</PersonnelGroup>" + '\n');
        OLAPArray.push('\t' + "</PersonnelGroup>" + '\n');
    }

    _retArray.push("</dPersonnel>" + '\n');
    OLAPArray.push("</dPersonnel>" + '\n');

    for (var i = 0; i < _retArray.length ; i++) {
        XMLString = XMLString + _retArray[i];

    }
    console.log(XMLString)
    return _retArray;
};



var isRequiredStateElement = function (elementID) {
    return true;
};
var getdPersonnelValue = function (payload, valueObject)
{
    var _retVal = [];
    var _bFound = false;
//        console.log(valueObject)
//       console.log(payload)
    i = 0;
    while (i < payload.length) {
        if (_bFound == false) {
            if (payload[i].attributes.title == valueObject) {
                _bFound = true;
                if (payload[i].attributes.value == undefined) {
                    _retVal.push(null);
                }
                else {
                    _retVal.push(payload[i].attributes.value);
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
        case "dPersonnel.12":

            if (dPersonnel09CodeMap[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(dPersonnel09CodeMap[valueArray[0]]);
            }
            break;
        case "dPersonnel.10":
            for (i = 0; i < valueArray.length; i++) {
                if (dPersonnel10CodeMap[valueArray[i]] == undefined) {
                    _retArray.push(valueArray[i] + "UNDEFINED");
                }
                else {
                    _retArray.push(dPersonnel09CodeMap[valueArray[i]]);
                }
            }
            break;
        case "dPersonnel.11":

            if (dPersonnel11CodeMap[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(dPersonnel11CodeMap[valueArray[0]]);
            }
            break;
        default:
            _retArray.push(NEMSISElementNumber = " version 2 not found");
    }

    return _retArray;

}
function setCodeText(NEMSISElementNumber, codeVal) {
    var _return = [];


    switch (NEMSISElementNumber) {
        case "dPersonnel.12":
            if (dPersonnel334_12[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dPersonnel334_12[codeVal];
            }
            break;

        case "dPersonnel.13":
            if (dPersonnel334_13[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dPersonnel334_13[codeVal];
            }
            break;
        case "dPersonnel.15":
            if (dPersonnel334_15[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dPersonnel334_15[codeVal];
            }
            break;
        case "dPersonnel.16":
            if (dPersonnel334_16[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dPersonnel334_16[codeVal];
            }
            break;

        case "dPersonnel.17":
            if (dPersonnel334_17[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dPersonnel334_17[codeVal];
            }
            break;
        case "dPersonnel.18":
            if (dPersonnel334_18[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dPersonnel334_18[codeVal];
            }
            break;
        case "dPersonnel.20":
            if (dPersonnel334_20[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dPersonnel334_20[codeVal];
            }
            break;
        case "dPersonnel.24":
            if (dPersonnel334_24[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dPersonnel334_24[codeVal];
            }
            break;

        case "dPersonnel.29":
            if (dPersonnel334_29[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dPersonnel334_29[codeVal];
            }
            break;
        case "dPersonnel.31":
            if (dPersonnel334_31[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dPersonnel334_31[codeVal];
            }
            break;
        case "dPersonnel.34":
            if (dPersonnel334_34[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dPersonnel334_34[codeVal];
            }
            break;
        case "dPersonnel.35":
            if (dPersonnel334_35[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dPersonnel334_35[codeVal];
            }
            break;
        case "dPersonnel.38":
            if (dPersonnel334_38[codeVal] == undefined) {
                _return = codeVal;
            }
            else {
                _return = dPersonnel334_38[codeVal];
            }
            break;
        default:
            _return = " UNDEFINED";
    }
    return _return;

};

var dPersonnel334_12 = {
    "9906001" : "Female", 
    "9906003": "Male",
    "9906005": "Unknown (Unable to Determine)"
};

var dPersonnel334_13 = {
    "1513001" : "American Indian or Alaska Native", 
    "1513003" : "Asian", 
    "1513005" : "Black or African American", 
    "1513007" : "Hispanic or Latino", 
    "1513009" : "Native Hawaiian or Other Pacific Islander", 
    "1513011" : "White"
};

var dPersonnel334_15 = {
    "1515001" : "No Schooling Completed", 
"1515003" : "Nursery School to 4th Grade", 
    "1515005" : "5th Grade or 6th Grade", 
    "1515007" : "7th Grade or 8th Grade", 
    "1515009" : "9th Grade", 
    "1515011" : "10th Grade", 
    "1515013" : "11th Grade", 
    "1515015" : "12th Grade; No Diploma", 
    "1515017" : "High School Graduate-Diploma or the Equivalent (GED)", 
    "1515019" : "Some College Credit; but Less than 1 Year", 
    "1515021" : "1 or More Years of College; No Degree", 
    "1515023" : "Associate Degree", 
    "1515025" : "Bachelor's Degree", 
    "1515027" : "Master's Degree", 
    "1515029" : "Professional Degree (i.e. MD; DDS; DVM; LLB; JD)", 
    "1515031" : "Doctorate Degree (i.e. PhD; EdD)"
};

var dPersonnel334_16 = {
    "1516001" : "Agriculture and Natural Resources", 
    "1516003" : "Architecture and Related Services", 
    "1516005" : "Area; Ethnic; Cultural; and Gender Studies", 
    "1516007" : "Biological and Biomedical Sciences", 
    "1516009" : "Business", 
    "1516011" : "Communication; Journalism; and Related Programs", 
    "1516013" : "Communications Technologies", 
    "1516015" : "Computer and Information Sciences", 
    "1516017" : "Education", 
    "1516019" : "Emergency Medical Services", 
    "1516021" : "Engineering", 
    "1516023" : "Engineering Technologies", 
    "1516025" : "English Language and Literature/Letters", 
    "1516027" : "Family and Consumer Sciences/Human Sciences", 
    "1516029" : "Fire Science", 
    "1516031" : "Foreign Languages; Literatures; and Linguistics", 
    "1516033" : "Health Professions and Related Clinical Sciences; Not Including Emergency Medical Services", 
    "1516035" : "Legal Professions and Studies", 
    "1516037" : "Liberal Arts and Sciences; General Studies; and Humanities", 
    "1516039" : "Library Science", 
    "1516041" : "Mathematics and Statistics", 
    "1516043" : "Military Technologies", 
    "1516045" : "Multi/Interdisciplinary Studies", 
    "1516047" : "Not Classified by Field of Study", 
    "1516049" : "None", 
    "1516051" : "Parks; Recreation; Leisure and Fitness Studies", 
    "1516053" : "Philosophy and Religious Studies", 
    "1516055" : "Physical Sciences and Science Technologies", 
    "1516057" : "Precision Production", 
    "1516059" : "Psychology", 
    "1516061" : "Public Administration and Social Services", 
    "1516063" : "Security and Protective Services; Not Including Fire Science", 
    "1516065" : "Social Sciences and History", 
    "1516067" : "Theology and Religious Vocations", 
    "1516069" : "Transportation and Materials Moving", 
    "1516071" : "Visual and Performing Arts"
};

var dPersonnel334_17 = {
    "1517001" : "All-Terrain Vehicle (ATV)", 
    "1517003" : "Commercial Class A", 
    "1517005" : "Commercial Class B", 
    "1517007" : "Commercial Class C", 
    "1517009" : "Motorcycle-Class M", 
    "1517011" : "None", 
    "1517013" : "Operator Class D (Normal)", 
    "1517015" : "Other (Not Listed)", 
    "1517017" : "Pilot-Rotor Wing Air", 
    "1517019" : "Pilot-Fixed Wing Air", 
    "1517021" : "Snowmobile", 
    "1517023" : "Taxi and Livery Class E"

};

var dPersonnel334_18 = {
    "1517001" : "All-Terrain Vehicle (ATV)", 
    "1517003" : "Commercial Class A", 
    "1517005" : "Commercial Class B", 
    "1517007" : "Commercial Class C", 
    "1517009" : "Motorcycle-Class M", 
    "1517011" : "None", 
    "1517013" : "Operator Class D (Normal)", 
    "1517015" : "Other (Not Listed)", 
    "1517017" : "Pilot-Rotor Wing Air", 
    "1517019" : "Pilot-Fixed Wing Air", 
    "1517021" : "Snowmobile", 
    "1517023" : "Taxi and Livery Class E"

};
var dPersonnel334_20 = {
    "amh" : "Amharic", 
    "ara" : "Arabic", 
    "arm" : "Armenian", 
    "ben" : "Bengali", 
    "crp" : "Cajun (Creole and Pidgins)", 
    "chi" : "Chinese", 
    "hrv" : "Croatian", 
    "cze" : "Czech", 
    "dan" : "Danish", 
    "dut" : "Dutch", 
    "fin" : "Finnish", 
    "tai" : "Formosan", 
    "fre" : "French", 
    "cpf" : "French Creole", 
    "ger" : "German", 
    "gre" : "Greek", 
    "guj" : "Gujarati", 
    "heb" : "Hebrew", 
    "hin" : "Hindi (Urdu)", 
    "hun" : "Hungarian", 
    "ilo" : "Ilocano", 
    "itl" : "Italian", 
    "jpn" : "Japanese", 
    "kor" : "Korean", 
    "kro" : "Kru", 
    "lit" : "Lithuanian", 
    "mal" : "Malayalam", 
    "hmn" : "Miao (Hmong)", 
    "mkh" : "Mon-Khmer (Cambodian)", 
    "nav" : "Navaho", 
    "nno" : "Norwegian", 
    "pan" : "Panjabi", 
    "gem" : "Pennsylvania Dutch (Germanic Other)", 
    "per" : "Persian", 
    "pol" : "Polish", 
    "por" : "Portuguese", 
    "rum" : "Romanian", 
    "rus" : "Russian", 
    "smo" : "Samoan", 
    "srp" : "Serbo-Croatian", 
    "slo" : "Slovak", 
    "spa" : "Spanish", 
    "swe" : "Swedish", 
    "syr" : "Syriac", 
    "tgl" : "Tagalog", 
    "tha" : "Thai (Laotian)", 
    "tur" : "Turkish", 
    "ukr" : "Ukrainian", 
    "vie" : "Vietnamese", 
    "yid" : "Yiddish", 

};

var dPersonnel334_24 = {
    "9917001" : "2009 Advanced Emergency Medical Technician (AEMT)", 
    "9917003" : "2009 Emergency Medical Responder (EMR)", 
    "9917005" : "2009 Emergency Medical Technician", 
    "9917007" : "2009 Paramedic", 
    "9917009" : "First Responder", 
    "9917011" : "EMT-Basic", 
    "9917013" : "EMT-Intermediate", 
    "9917015" : "EMT-Paramedic", 
    "9917017" : "Nurse", 
    "9917019" : "Physician", 
    "9917021" : "Critical Care Paramedic", 
    "9917023" : "Community Paramedicine", 

};

var dPersonnel334_29 = {
    "1529901" : "2009 Advanced Emergency Medical Technician(AEMT)", 
    "1529003" : "2009 Emergency Medical Responder (EMR)", 
    "1529005" : "2009 Emergency Medical Technician", 
    "1529007" : "2009 Paramedic", 
    "1529009" : "EMT-Basic", 
    "1529011" : "EMT-Intermediate", 
    "1529013" : "EMT-Paramedic", 
    "1529015" : "First Responder", 

};

var dPersonnel334_31 = {
    "1531001" : "Full Time Paid Employee", 
    "1531003" : "Part Time Paid Employee", 
    "1531005" : "Volunteer", 
    "1531007" : "Neither an Employee Nor a Volunteer", 

};

var dPersonnel334_34 = {
    "1531001" : "Full Time Paid Employee", 
    "1531003" : "Part Time Paid Employee", 
    "1531005" : "Volunteer", 
    "1531007" : "Neither an Employee Nor a Volunteer", 

};

var dPersonnel334_35 = {
    "1531001" : "Full Time Paid Employee", 
    "1531003" : "Part Time Paid Employee", 
    "1531005" : "Volunteer", 
    "1531007" : "Neither an Employee Nor a Volunteer", 

};

var dPersonnel334_38 = {
    "9917001" : "2009 Advanced Emergency Medical Technician (AEMT)", 
    "9917003" : "2009 Emergency Medical Responder (EMR)", 
    "9917005" : "2009 Emergency Medical Technician", 
    "9917007" : "2009 Paramedic", 
    "9917009" : "First Responder", 
    "9917011" : "EMT-Basic", 
    "9917013" : "EMT-Intermediate", 
    "9917015" : "EMT-Paramedic", 
    "9917017" : "Nurse", 
    "9917019" : "Physician", 
    "9917021" : "Critical Care Paramedic", 
    "9917023" : "Community Paramedicine", 

};

