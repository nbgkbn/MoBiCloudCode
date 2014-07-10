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
var D04 = new Object;
var dConfiguration = new Object;
var ConfigurationGroup = new Object;
var ProcedureGroup = new Object;
var MedicationGroup = new Object;

var MedicationGroup334 = Parse.Object.extend("MedicationGroup334");
var MedicationGroup334 = new MedicationGroup334();

var ProcedureGroup334 = Parse.Object.extend("ProcedureGroup334");
var ProcedureGroup334 = new ProcedureGroup334();

var ConfigurationGroup334 = Parse.Object.extend("ConfigurationGroup334");
var ConfigurationGroup334 = new ConfigurationGroup334();

var getSectionIndex = function (groupObject, sectionName) 
{
    console.log(groupObject[0].attributes)
    var _retValue = [];
    for (var d = 0; d < groupObject.length; d++)      
    {
        console.log(groupObject.length)
        if (groupObject[d].attributes.name== sectionName)
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

var setdConfiguration = function (businessObject) 
{
    console.log(businessObject);
    var _retArray = [];
    var OLAPAray = [];

    _retArray.push("<dConfiguration>" + '\n');
    OLAPAray.push('\t' + "<dConfiguration>" + '\n');

    for (var xx = 0; xx < businessObject.sections.length; xx++) 
    {
        _retArray.push('\t' + "<dConfigurationGroup>" + '\n');
        OLAPAray.push('\t' + "<dConfigurationGroup>" + '\n');

        ///dConfiguration.01 
        var elementList = businessObject.sections[xx].attributes.elements;
        _val = getdConfigurationValue(elementList, "dConfiguration.01");

        if (_val == null) 
        {
            ErrorList.push("dConfiguration.01 Mandatory Element");
        }
        else 
        {
            ConfigurationGroup["dConfiguration.01"] = _val;
            _retArray.push('\t\t' + "<dConfiguration.01>" + _val + "</dConfiguration.01>" + '\n');
            OLAPArray.push('\t\t' + "<ConfigurationState>" + _val + "</ConfigurationState>" + '\n');
        };

        ///dConfiguration.02 
        _val = getdConfigurationValue(elementList, "dConfiguration.02");
        if (_val == null) 
        {
            ErrorList.push("dConfiguration.02 Mandatory Element");            
        }
        else 
        {
            var arr2 = []
            var arr = []
            for (var t = 0; t < _val.length; t++) 
            {
                arr.push(_val[t]);
                v2Array.push({ section: "D04", element: "D04_01", val: setV2("dConfiguration.02", _val[t]) });
                _retArray.push('\t\t' + "<dConfiguration.02>" + _val[t] + "</dConfiguration.02>" + '\n');
                OLAPArray.push('\t\t' + "<LicensureLevels>" + setCodeText("dConfiguration.02", _val[t]) + "</LicensureLevels>" + '\n');
            }
            ConfigurationGroup["dConfiguration.02"] = arr.slice(0);
        };

        ///dConfiguration.03 
        _val = getdConfigurationValue(elementList, "dConfiguration.03");
        if (_val == null)
        {
            if (isRequiredStateElement("dConfiguration.03") == true) {
                ConfigurationGroup["dConfiguration.03"] = v3NOT_RECORDED;
                _retArray.push('\t' + "<dConfiguration.03" + NIL_V3NOT_RECORDED + '\n');
                OLAPArray.push('\t\t' + "<ProceduresPermittedbytheState>" + "NOT_RECORDED" + "</ProceduresPermittedbytheState>" + '\n');
            }
        }
        else 
        {
            var arr = []
            for (var t = 0; t < _val.length; t++) 
            {
                arr.push(_val[t]);
                _retArray.push('\t\t' + "<dConfiguration.03>" + _val[t] + "</dConfiguration.03>" + '\n');
                OLAPArray.push('\t\t' + "<ProceduresPermittedbytheState>" + setCodeText("dConfiguration.03", _val[t]) + "</ProceduresPermittedbytheState>" + '\n');
            }
            ConfigurationGroup["dConfiguration.03"] = arr.slice(0);
        };

        ///dConfiguration.04 
        _val = getdConfigurationValue(elementList, "dConfiguration.04");
        if (_val == null) 
        {
            if (isRequiredStateElement("dConfiguration.04") == true) {
                ConfigurationGroup["dConfiguration.04"] = v3NOT_RECORDED;
                _retArray.push('\t' + "<dConfiguration.04" + NIL_V3NOT_RECORDED + '\n');
                OLAPArray.push('\t\t' + "<MedicationsPermittedbytheState>" + "NOT_RECORDED" + "</MedicationsPermittedbytheState>" + '\n');
            }
        }
        else 
        {
            var arr = []
            for (var t = 0; t < _val.length; t++) 
            {
                arr.push(_val[t]);
                _retArray.push('\t\t' + "<dConfiguration.04>" + _val[t] + "</dConfiguration.04>" + '\n');
                OLAPArray.push('\t\t' + "<MedicationsPermittedbytheState>" + setCodeText("dConfiguration.04", _val[t]) + "</ MedicationsPermittedbytheState>" + '\n');
            }
            ConfigurationGroup["dConfiguration.04"] = arr.slice(0);            
        };

        ///dConfiguration.05 
        _val = getdConfigurationValue(elementList, "dConfiguration.05");
        if (_val == null) 
        {
            if (isRequiredStateElement("dConfiguration.05") == true)
            {
                ConfigurationGroup["dConfiguration.05"] = v3NOT_RECORDED;
                _retArray.push('\t' + "<dConfiguration.05" + NIL_V3NOT_RECORDED + '\n');
                OLAPArray.push('\t\t' + "<ProtocolsPermittedbytheState>" + "NOT_RECORDED" + "</ProtocolsPermittedbytheState>" + '\n');
            }
        }
        else 
        {
            var arr = []
            for (var t = 0; t < _val.length; t++) 
            {
                arr.push(_val[t]);
                _retArray.push('\t\t' + "<dConfiguration.05>" + _val[t] + "</dConfiguration.05>" + '\n');
                OLAPArray.push('\t\t' + "<ProtocolsPermittedbytheState>" + setCodeText("dConfiguration.05", _val[t]) + "</ProtocolsPermittedbytheState>" + '\n');
            }
            ConfigurationGroup["dConfiguration.05"] = arr.slice(0);

        };


        ///////////////////////ProcedureGroup
        console.log(businessObject.sections[xx].attributes.sections)
        _sectionIndex = getSectionIndex(businessObject.sections[xx].attributes.sections, "dConfiguration.ProcedureGroup");
        console.log(_sectionIndex)
        var _ProcedureGroupArray = new Array();
        for (var x = 0; x < _sectionIndex.length; x++) 
        {
            _ProcedureGroupArray.push('\t\t' + "<dConfiguration.ProcedureGroup>" + '\n');
            OLAPArray.push('\t\t' + "<dConfiguration.ProcedureGroup>" + '\n');

            var ProcedureGroup = new Object;
            _pgElementList = businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements;

            ///dConfiguration.06 
            _val = getdConfigurationValue(_pgElementList, "dConfiguration.06");
            if (_val == null) 
            {
                ErrorList.push("dConfiguration.06 Mandatory Element");
            }
            else 
            {
                _ProcedureGroupArray.push('\t\t\t' + "<dConfiguration.06>" + _val + "</dConfiguration.06>" + '\n');
                OLAPArray.push('\t\t\t' + "<CertificationLevelsPermittedtoPerformEachProcedure>" + setCodeText("dConfiguration.06", _val) + "</CertificationLevelsPermittedtoPerformEachProcedure>" + '\n');
                ProcedureGroup["dConfiguration.06"] = _val;;
                v2Array.push({ section: "D04", element: "D04_05", val: setV2("dConfiguration.06", _val) });
            };

            ///dConfiguration.07 
            _val = getdConfigurationValue(_pgElementList, "dConfiguration.07");
            if (_val == null) 
            {
                ErrorList.push("dConfiguration.07 Mandatory Element");
            }
            else 
            {
                var arr = [];
                var arr2 = [];
                for (var t = 0; t < _val.length; t++) 
                {
                    arr2.push();
                    arr.push(_val[t]);
                    _ProcedureGroupArray.push('\t\t\t' + "<dConfiguration.07>" + _val[t] + "</dConfiguration.07>" + '\n');
                    OLAPArray.push('\t\t\t' + "<EMSAgencyProcedures>" + setCodeText("dConfiguration.07", _val[t]) + "</EMSAgencyProcedures>" + '\n');
                    v2Array.push({ section: "D04", element: "D04_04", val: setV2("dConfiguration.07", _val[t]) });
                }
                ProcedureGroup["dConfiguration.07"] = arr.slice(0);                
                
            };
            _ProcedureGroupArray.push('\t\t' + "</dConfiguration.ProcedureGroup>" + '\n');
            OLAPArray.push('\t\t' + "</dConfiguration.ProcedureGroup>" + '\n');
        };
        //////////////////////////////
        _retArray = _retArray.concat(_ProcedureGroupArray);

        ///////////////////////dConfiguration.MedicationGroup
        _sectionIndex = getSectionIndex(businessObject.sections[xx].attributes.sections, "dConfiguration.MedicationGroup");

        // console.log(_sectionIndex)
        var _MedicationGroupArray = new Array();
        for (var x = 0; x < _sectionIndex.length; x++) 
        {
            _MedicationGroupArray.push('\t\t' + "<dConfiguration.MedicationGroup>" + '\n');
            OLAPArray.push('\t\t' + "<dConfiguration.MedicationGroup>" + '\n');

            var MedicationGroup = new Object;
            _pgElementList = businessObject.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements;

            ///dConfiguration.08 
            _val = getdConfigurationValue(_pgElementList, "dConfiguration.08");
            if (_val == null) 
            {
                ErrorList.push("dConfiguration.08 Mandatory Element");
            }
            else
            {
                OLAPArray.push('\t\t\t' + "<EMSCertificationLevelsPermittedtoAdministerEachMedication>" + setCodeText("dConfiguration.08", _val[t]) + "</EMSCertificationLevelsPermittedtoAdministerEachMedication>" + '\n');
                v2Array.push({ section: "D04", element: "D04_04", val: setV2("dConfiguration.08", _val) });
                MedicationGroup["dConfiguration.08"] = arr.slice(0);               
            };

            ///dConfiguration.09 
            _val = getdConfigurationValue(_pgElementList, "dConfiguration.09");
            if (_val == null) 
            {
                ErrorList.push("dConfiguration.09 Madatory Element");
            }
            else 
            {
                var arr = [];
                var arr2 = [];
                for (var t = 0; t < _val.length; t++) 
                {
                    v2Array.push({ section: "D04", element: "D04_04", val: setV2("dConfiguration.08", setV2("dConfiguration.09", _val)) });
                    arr.push(_val[t]);
                    _MedicationGroupArray.push('\t\t\t' + "<dConfiguration.09>" + _val[t] + "</dConfiguration.09>" + '\n');
                    OLAPArray.push('\t\t\t' + "<EMSAgencyMedications>" + setCodeText("dConfiguration.09", _val[t]) + "</EMSAgencyMedications>" + '\n');
                }
                MedicationGroup["dConfiguration.09"] = arr.slice(0);              
            };

            OLAPArray.push('\t\t' + "</dConfiguration.MedicationGroup>" + '\n');
            _MedicationGroupArray.push('\t\t' + "</dConfiguration.MedicationGroup>" + '\n');
        };

        _retArray = _retArray.concat(_MedicationGroupArray);

        ///dConfiguration.10 
        _val = getdConfigurationValue(elementList, "dConfiguration.10");
        if (_val == null) 
        {
            ErrorList.push("dConfiguration.10 Mandatory Element");
        }
        else 
        {
            var arr = [];
            var arr2 = [];
            for (var t = 0; t < _val.length; t++) 
            {
                v2Array.push({ section: "D04", element: "D04_08", val: setV2("dConfiguration.10", _val) });
                arr2.push();
                _retArray.push('\t\t' + "<dConfiguration.10>" + _val[t] + "</dConfiguration.10>" + '\n');
                OLAPArray.push('\t\t' + "<EMSAgencyProtocols>" + setCodeText("dConfiguration.10", _val[t]) + "</EMSAgencyProtocols>" + '\n');
            }
            ConfigurationGroup["dConfiguration.10"] = arr.slice(0);                        
        };

        ///dConfiguration.11 
        _val = getdConfigurationValue(elementList, "dConfiguration.11");
        if (_val == null) 
        {
            ErrorList.push("dConfiguration.11 Mandatory Element");
        }
        else 
        {
            var arr = [];
            for (var t = 0; t < _val.length; t++) 
            {
                arr.push(_val[t]);
                arr2.push(setV2("dConfiguration.11", _val));
                _retArray.push('\t\t' + "<dConfiguration.11>" + _val[t] + "</dConfiguration.11>" + '\n');
                OLAPArray.push('\t\t' + "<EMSAgencySpecialtyServiceCapability>" + setCodeText("dConfiguration.11", _val[t]) + "</EMSAgencySpecialtyServiceCapability>" + '\n');
            }
            ConfigurationGroup["dConfiguration.11"] = arr.slice(0);            
        };


        ///dConfiguration.12 
        _val = getdConfigurationValue(elementList, "dConfiguration.12");
        if (_val == null) 
        {
            v2Array.push({ section: "D04", element: "D04_10", val: null });
            _retArray.push('\t\t' + "<dConfiguration.12>" + null + "</dConfiguration.12>" + '\n');
            OLAPArray.push('\t\t' + "<BillingStatus>" + null + "</BillingStatus>" + '\n');
        }
        else 
        {
            _retArray.push('\t\t' + "<dConfiguration.12>" + _val + "</dConfiguration.12>" + '\n');
            ConfigurationGroup["dConfiguration.12"] = _val;            
            v2Array.push({ section: "D04", element: "D04_10", val: setV2("dConfiguration.12", _val) });
            OLAPArray.push('\t\t' + "<BillingStatus>" + setCodeText("dConfiguration.12", _val) + "</BillingStatus>" + '\n');
        };

        ///dConfiguration.13 
        _val = getdConfigurationValue(elementList, "dConfiguration.13");
        if (_val == null)
        {
            ErrorList.push("dConfiguration.13 Mandatory Element");
        }
        else
        {
            _retArray.push('\t\t' + "<dConfiguration.13>" + _val + "</dConfiguration.13>" + '\n');
            ConfigurationGroup["dConfiguration.13"] = _val;
            OLAPArray.push('\t\t' + "<EMDProvidedtoEMSAgencyServiceArea>" + setCodeText("dConfiguration.13", _val) + "</EMDProvidedtoEMSAgencyServiceArea>" + '\n');
        };


        ///dConfiguration.14 
        _val = getdConfigurationValue(elementList, "dConfiguration.14");
        if (_val == null) 
        {
            if (isRequiredStateElement("dConfiguration.14") == true) 
            {
                ConfigurationGroup["dConfiguration.14"] = v3NOT_RECORDED;           
                _retArray.push('\t\t' + "<dConfiguration.14" + NIL_V3NOT_RECORDED + '\n');
                OLAPArray.push('\t\t' + "<EMDVendor>" + "NOT_RECORDED" + "</EMDVendor>" + '\n');
            }
            else 
            {
                _retArray.push('\t\t' + "<dConfiguration.14" + NIL_V3NOT_REPORTING + '\n');
                ConfigurationGroup["dConfiguration.14"] = v2NOT_REPORTING
                ConfigurationGroup334.set("EMDVendor", v2NOT_REPORTING);
                OLAPArray.push('\t\t' + "<EMDVendor>" + "NOT_REPORTING" + "</EMDVendor>" + '\n');
            }
        }
        else 
        {
            var arr = [];
            for (var t = 0; t < _val.length; t++) 
            {
                arr.push(_val[t]);
                _retArray.push('\t\t' + "<dConfiguration.14>" + _val[t] + "</dConfiguration.14>" + '\n');
                OLAPArray.push('\t\t' + "<EMDVendor>" + _val[t] + "</EMDVendor>" + '\n');
                v2Array.push({ section: "D04", element: "D04_17", val: _val });
            }
            ConfigurationGroup["dConfiguration.14"] = arr.slice(0);                      
        };

        ///dConfiguration.15 
        _val = getdConfigurationValue(elementList, "dConfiguration.15");
        if (_val == null) 
        {
            ErrorList.push("dConfiguration.15 Madatory Element");
        }
        else 
        {
            var arr = [];
            for (var t = 0; t < _val.length; t++) 
            {
                arr.push(_val[t]);
                _retArray.push('\t\t' + "<dConfiguration.15>" + _val[t] + "</dConfiguration.15>" + '\n');
                OLAPArray.push('\t\t\t' + "<PatientMonitoringCapabilities>" + _val[t] + "</PatientMonitoringCapabilities>" + '\n');
            }
            ConfigurationGroup["dConfiguration.15"] = arr.slice(0);
        };


        ///dConfiguration.16 
        _val = getdConfigurationValue(elementList, "dConfiguration.16");
        if (_val == null) 
        {
            ErrorList.push("dConfiguration.16 Mandatory Element");
        }
        else 
        {
            var arr = [];
            var arr2 = [];
            for (var t = 0; t < _val.length; t++) 
            {
                arr.push(_val[t]);
                v2Array.push({ section: "D04", element: "D04_02", val: setV2("dConfiguration.11", _val[t]) });
                _retArray.push('\t\t' + "<dConfiguration.16>" + _val[t] + "</dConfiguration.16>" + '\n');
                OLAPArray.push('\t\t\t' + "<CrewCallSign>" + _val[t] + "</CrewCallSign>" + '\n');
            }
            ConfigurationGroup["dConfiguration.16"] = arr.slice(0);            
        };

        ///dConfiguration.17 
        _val = getdConfigurationValue(elementList, "dConfiguration.17");
        if (_val == null) 
        {
            _retArray.push('\t\t' + "<dConfiguration.17>" + null + "</dConfiguration.17>" + '\n');
            OLAPArray.push('\t\t\t' + "<DispatchCenterID>" + null + "</DispatchCenterID>" + '\n');
        }
        else 
        {
            var arr = []
            for (var t = 0; t < _val.length; t++) 
            {
                arr.push(_val[t]);
                _retArray.push('\t\t' + "<dConfiguration.17>" + _val[t] + "</dConfiguration.17>" + '\n');
                OLAPArray.push('\t\t\t' + "<DispatchCenterID>" + _val[t] + "</DispatchCenterID>" + '\n');
            }
            ConfigurationGroup["dConfiguration.17"] = arr.slice(0);
        };


        _retArray.push('\t' + "</dConfigurationGroup>" + '\n');
        OLAPArray.push('\t' + "</dConfigurationGroup>" + '\n');
    };

    OLAPArray.push("</dConfiguration>" + '\n');
    _retArray.push("</dConfiguration>" + '\n');
    for (var i = 0; i < OLAPArray.length ; i++) {
        XMLString = XMLString + OLAPArray[i];
    };

    ConfigurationGroup334.set("StateAssociatedwithCertificationLevels", ConfigurationGroup["dConfiguration.01"]);
    ConfigurationGroup334.set("State CertificationLevels", ConfigurationGroup["dConfiguration.02"]);
    ConfigurationGroup334.set("ProceduresPermittedbytheState", ConfigurationGroup["dConfiguration.03"]);
    ConfigurationGroup334.set("MedicationsPermittedbytheState", ConfigurationGroup["dConfiguration.04"]);
    ConfigurationGroup334.set("ProtocolsPermittedbytheState", ConfigurationGroup["dConfiguration.05"]);
    

    
    for (var i = 0; i < _ProcedureGroupArray.length; i++)
    {
        var ASG334 = new Object;

        ProcedureGroup334["EMSCertificationLevelsPermittedtoPerformEachProcedure"] = _ProcedureGroupArray[i]["dConfiguration.05"];
        ProcedureGroup334.set["EMSAgencyProcedures"] = _ProcedureGroupArray[i]["dConfiguration.05"];
        ProcedureGroupArray.push(ProcedureGroup334)
    };
    MedicationGroup334["EMSCertificationLevelsPermittedtoAdministerEachMedication"] = _val;
    MedicationGroup334["EMSAgencyMedications"] = _val;

    ConfigurationGroup334.set("EMSCertificationLevelsPermittedtoPerformEachProcedure", ConfigurationGroup["dConfiguration.10"]);
    ConfigurationGroup334.set("EMSAgencySpecialtyServiceCapability", ConfigurationGroup["dConfiguration.11"]);

    ConfigurationGroup334.set("BillingStatus", ConfigurationGroup["dConfiguration.12"]);
    ConfigurationGroup334.set("BillingStatus", ConfigurationGroup["dConfiguration.13"]);
    ConfigurationGroup334.set("EMDVendor", ConfigurationGroup["dConfiguration.14"]);



    console.log(XMLString)
    saveV2(businessObject.agencyId, v2Array);
};

var saveV2 = function (AgencyId, v2ObjList) 
{
        console.log(v2ObjList.length)
        var newDEM = new Array();
        var tempArray = new Array();
        for (var i = 0; i < v2ObjList.length; i++) {
            //add these entries to db
            var DataClass = Parse.Object.extend("V2Demographics");
            var newRec = new DataClass();
            //    v2Array.push({ section:"D01",element:"D01_10",val: _val });
            var origRec = v2ObjList[i];
            newRec.set("AgencyID", AgencyId);
            newRec.set("section", origRec.section);
            newRec.set("element", origRec.element);
            if (origRec.val instanceof Array) 
            {
                newRec.set("value", origRec.val);
            }
            else 
            {
                tempArray.push(origRec.val)
                newRec.set("value", tempArray);
            }
            newDEM[i] = newRec; //add another item to list        
        }

        Parse.Object.saveAll(newDEM, 
            {
                success: function (list) 
                {
                // All the objects were saved.
                alert("ok ");  //saveAll is now finished and we can properly exit with confidence :-)
            },
                error: function (error) 
                {
                // An error occurred while saving one of the objects.
                alert("Error: " + error.code + " " + error.message);
            },
        });

        //default body does not do  response.success or response.error 
    
};



var isRequiredStateElement = function (elementID) {
    return true;
};
var getdConfigurationValue = function (payload, valueObject) {
    var _retVal = [];
    i = 0;

    for (var i = 0; i < payload.length ; i++) {    
        if (payload[i].attributes.title == valueObject) 
        {
              //  console.log(valueObject)
              //  console.log(payload[i].attributes.value)
            if (payload[i].attributes.value == undefined) 
            {
                _retVal.push(null);
            }
            else 
            {
                _retVal.push(payload[i].attributes.value);
            }
        }
    }
    return _retVal;
};
