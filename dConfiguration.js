var setdConfiguration = function (configurationObject) {

    var _arr = []
    var _arrV2 = []
    var dConfiguration = new Object();
    var ConfigurationGroup = new Object();


    V3XMLXML.BeginNode("dConfiguration");
    OLAPXML.BeginNode("dConfiguration");


    for (var xx = 0; xx < configurationObject.attributes.sections.length; xx++) {
        V3XMLXML.BeginNode("dConfiguration.ConfigurationGroup>");
        OLAPXML.BeginNode("dConfiguration.ConfigurationGroup>");

        ///dConfiguration.01 
        var elementList = configurationObject.attributes.sections[xx].attributes.elements;
        _val = getValue(elementList, "dConfiguration.01");

        if (_val == null) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dConfiguration.01", Description: " State Associated with the Certification/Licensure Levels MANDATORY" })
        }
        else {

            V3XML.Node("dConfiguration.01", _val[0]);
            OLAPXML.Node("ConfigurationState", _val[0]);
            ConfigurationGroup["dConfiguration.01"] = _val[0];
            ConfigurationGroup["ConfigurationState"] = _val[0];
        };

        ///dConfiguration.02 
        _val = getValue(elementList, "dConfiguration.02");
        if (_val == null) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dConfiguration.01", Description: " State Certification/Licensure Levels MANDATORY" })
        }
        else {
            _arr = [];
            _arrV2 = [];
            for (var t = 0; t < _val.length; t++) {
                V3XML.Node("dConfiguration.02", _val[t]);
                OLAPXML.Node("ConfigurationState", _val[t]);
                _arr.push(_val[t]);
                _arrV2.push(setV2("dConfiguration.02", _val[t]));
            }
            ConfigurationGroup["dConfiguration.02"] = _arr.slice(0);
            ConfigurationGroup["ConfigurationState"] = _arr.slice(0);

            _v2Array.push({ section: "D04", element: "D04_01", val: _arrV2.slice(0) });
        };

        ///dConfiguration.03 
        _val = getValue(elementList, "dConfiguration.03");
        if (_val == null) {
            if (isRequiredStateElement("dConfiguration.03") == true) {
                V3XMLXML.BeginNode("dConfiguration.03")
                ConfigurationGroup["dConfiguration.03"] = v3NOT_RECORDED;
                ConfigurationGroup["ProceduresPermittedbytheState"] = v3NOT_RECORDED;
                V3XML.Attrib("dConfiguration.03", NIL_V3NOT_RECORDED);
                OLAPXML.Node("ProceduresPermittedbytheState", "NOT RECORDED");
                V3XMLXML.EndNode();
            }
        }
        else {
            _arr = [];
            for (var t = 0; t < _val.length; t++) {
                V3XML.Node("dConfiguration.03", _val[t]);
                OLAPXML.Node("ConfigurationState", _val[t]);
                _arr.push(_val[t]);
                _arrV2.push(setV2("dConfiguration.02", _val[t]));
            };
            ConfigurationGroup["dConfiguration.03"] = _arr.slice(0);
            ConfigurationGroup["ConfigurationState"] = _arr.slice(0);
        };

        ///dConfiguration.04 
        _val = getValue(elementList, "dConfiguration.04");
        if (_val == null) {
            if (isRequiredStateElement("dConfiguration.04") == true) {
                V3XMLXML.BeginNode("dConfiguration.04")
                ConfigurationGroup["dConfiguration.04"] = v3NOT_RECORDED;
                ConfigurationGroup["MedicationsPermittedbytheState"] = v3NOT_RECORDED;
                V3XML.Attrib("dConfiguration.04", NIL_V3NOT_RECORDED);
                OLAPXML.Node("MedicationsPermittedbytheState", "NOT RECORDED");
                V3XMLXML.EndNode();
            }
        }
        else {
            _arr = [];
            for (var t = 0; t < _val.length; t++) {
                V3XML.Node("dConfiguration.04", _val[t]);
                OLAPXML.Node("MedicationsPermittedbytheState", _val[t]);
                _arr.push(_val[t]);
                _arrV2.push(setV2("dConfiguration.04", _val[t]));

            }
            ConfigurationGroup["dConfiguration.04"] = _arr.slice(0);
            ConfigurationGroup["MedicationsPermittedbytheState"] = _arr.slice(0);
        };

        ///dConfiguration.05 
        _val = getValue(elementList, "dConfiguration.05");
        if (_val == null) {
            if (isRequiredStateElement("dConfiguration.05") == true) {
                V3XMLXML.BeginNode("dConfiguration.05")
                ConfigurationGroup["dConfiguration.05"] = v3NOT_RECORDED;
                ConfigurationGroup["ProtocolsPermittedbytheState"] = v3NOT_RECORDED;
                V3XML.Attrib("dConfiguration.05", NIL_V3NOT_RECORDED);
                OLAPXML.Node("ProtocolsPermittedbytheState", "NOT RECORDED");
                V3XMLXML.EndNode();
            };
        }
        else {
            _arr = []
            for (var t = 0; t < _val.length; t++) {
                V3XML.Node("dConfiguration.05", _val[t]);
                OLAPXML.Node("ProtocolsPermittedbytheState", _val[t]);
                _arr.push(_val[t]);
                _arrV2.push(setV2("dConfiguration.05", _val[t]));
            };
            ConfigurationGroup["ProtocolsPermittedbytheState"] = _arr.slice(0);
            ConfigurationGroup["dConfiguration.05"] = _arr.slice(0);
        };


        ///////////////////////ProcedureGroup
        //        _sectionIndex = getSectionIndex(agencyObject.attributes, "dAgency.AgencyServiceGroup");
        _sectionIndex = getSectionIndex(configurationObject.attributes.sections[xx].attributes, "dConfiguration.ProcedureGroup");
        for (var x = 0; x < _sectionIndex.length; x++) {
            V3XML.BeginNode("dConfiguration.ProcedureGroup");
            OLAPXML.BeginNode("dConfiguration.ProcedureGroup");

            var ProcedureGroup = new Object;
            _pgElementList = configurationObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements;

            ///dConfiguration.06 
            _val = getValue(_pgElementList, "dConfiguration.06");
            if (_val == null) {
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dConfiguration.06", Description: "EMS Certification Levels Permitted to Perform Each Procedure MANDATORY" })
            }
            else {
                V3XML.Node("dConfiguration.06", _val[0]);
                OLAPXML.Node("CertificationLevelsPermittedtoPerformEachProcedure", _val[0]);
                ProcedureGroup["CertificationLevelsPermittedtoPerformEachProcedure"] = _val[0];
                ProcedureGroup["dConfiguration.06"] = _val[0];
                _v2Array.push({ section: "D04", element: "D04_05", val: setV2("dConfiguration.06", _val) });
            };

            ///dConfiguration.07 
            _val = getValue(_pgElementList, "dConfiguration.07");
            if (_val == null) {
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dConfiguration.07", Description: " EMS Agency Procedures MANDATORY" })
            }
            else {
                _arr = [];
                _arrV2 = [];
                _valrrV2 = [];

                for (var t = 0; t < _val.length; t++) {
                    V3XML.Node("dConfiguration.07", _val[t]);
                    OLAPXML.Node("EMSAgencyProcedures", setCodeText("dConfiguration.07", _val[t]));
                    _valrrV2.push(setCodeText("dConfiguration.07", _val[t]));
                    _arr.push(_val[t]);
                    _arrV2.push(setV2("dConfiguration.07", _val[t]));
                };
                _v2Array.push({ section: "D04", element: "D04_04", val: _arrV2.slice(0) });
                ProcedureGroup["dConfiguration.07"] = _arr.slice(0);
                ProcedureGroup["CertificationLevelsPermittedtoPerformEachProcedure"] = _valrrV2.slice(0);;

            };

            V3XML.EndNode()
            OLAPXML.EndNode()
        };
        //////////////////////////////
        ///////////////////////dConfiguration.MedicationGroup

        _sectionIndex = getSectionIndex(configurationObject.attributes.sections[xx].attributes, "dConfiguration.MedicationGroup");

        // console.log(_sectionIndex)
        var _MedicationGroupArray = new Array();
        for (var x = 0; x < _sectionIndex.length; x++) {

            V3XML.BeginNode("dConfiguration.MedicationGroup");
            OLAPXML.BeginNode("dConfiguration.MedicationGroup");

            var MedicationGroup = new Object;
            _pgElementList = configurationObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements;

            ///dConfiguration.08 
            _val = getValue(_pgElementList, "dConfiguration.08");
            if (_val == null) {
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dConfiguration.08", Description: "EMS Certification Levels Permitted to Perform Each Procedure MANDATORY" })
            }
            else {
                V3XML.Node("dConfiguration.08", _val[0]);
                OLAPXML.Node("CertificationLevelsPermittedtoPerformEachMedication", _val[0]);
                MedicationGroup["CertificationLevelsPermittedtoPerformEachMedication"] = _val[0];
                MedicationGroup["dConfiguration.08"] = _val[0];
                _v2Array.push({ section: "D04", element: "D04_07", val: setV2("dConfiguration.08", _val) });
            };

            ///dConfiguration.09 
            _val = getValue(_pgElementList, "dConfiguration.09");
            if (_val == null) {
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dConfiguration.08", Description: "EMS Agency Medications MANDATORY" })
            }
            else {
                _arr = [];
                _arrV2 = [];
                for (var t = 0; t < _val.length; t++) {
                    _arr.push(_val);
                    _arrV2.push(setV2("dConfiguration.09", _val[t]));
                    V3XML.Node("dConfiguration.08", _val[t]);
                    OLAPXML.Node("AgencyMedications", _val[t]);
                };
                _v2Array.push({ section: "D04", element: "D04_04", val: _arrV2.slice(0) });
                MedicationGroup["dConfiguration.09"] = _arr.slice(0);
                MedicationGroup["AgencyMedications"] = _arr.slice(0);
            };
            _MedicationGroupArray.push(MedicationsGroup)
            V3XML.EndNode()
            OLAPXML.EndNode()
        };

        ///dConfiguration.10 
        _val = getValue(elementList, "dConfiguration.10");
        if (_val == null) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dConfiguration.08", Description: "EMS Agency Protocols MANDATORY" })
        }
        else {
            _arr = [];
            _arrV2 = [];
            _arrrV3 = [];
            for (var t = 0; t < _val.length; t++) {
                _arr.push(_val);
                _arrV2.push(setV2("dConfiguration.10", _val));
                V3XML.Node("dConfiguration.10", _val[t]);
                OLAPXML.Node("AgencyProtocols", setCodeText("dConfiguration.10", _val[t]));
                _arrrV3.push(setCodeText("dConfiguration.10", _val[t]));

            }
            ConfigurationGroup["dConfiguration.10"] = _arr.slice(0);
            ConfigurationGroup["dConfiguration.10"] = _arrrV3.slice(0);
            _v2Array.push({ section: "D04", element: "D04_08", val: _arrV2 });
        };

        ///dConfiguration.11 
        _val = getValue(elementList, "dConfiguration.11");
        if (_val == null) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dConfiguration.08", Description: " EMS Agency Specialty Service Capability MANDATORY" })
        }
        else {
            for (var t = 0; t < _val.length; t++) {
                _arr.push(_val[t]);
                _retArray.push('\t\t' + "<dConfiguration.11>" + _val[t] + "</dConfiguration.11>" + '\n');
                _OLAPArray.push('\t\t' + "<EMSAgencySpecialtyServiceCapability>" + setCodeText("dConfiguration.11", _val[t]) + "</EMSAgencySpecialtyServiceCapability>" + '\n');
            }
            ConfigurationGroup["dConfiguration.11"] = _arr.slice(0);
        };


        ///dConfiguration.12 
        _val = getValue(elementList, "dConfiguration.12");
        if (_val == null) {
            V3XML.Node("dConfiguration.10", null);
            OLAPXML.Node("BillingStatus", null);
            _v2Array.push({ section: "D04", element: "D04_10", val: null });

        }
        else {
            V3XML.Node("dConfiguration.12", _val[0]);
            OLAPXML.Node("BillingStatus", setCodeText("dConfiguration.12", _val[0]));
            _v2Array.push({ section: "D04", element: "D04_10", val: null });
            ConfigurationGroup["dConfiguration.12"] = _val[0];
            _v2Array.push({ section: "D04", element: "D04_10", val: setV2("dConfiguration.12", _val) });
        };

        ///dConfiguration.13 
        _val = getValue(elementList, "dConfiguration.13");
        if (_val == null) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dConfiguration.08", Description: " Emergency Medical Dispatch (EMD) MANDATORY" })
        }
        else {
            V3XML.Node("dConfiguration.13", _val[0]);
            OLAPXML.Node("EMDProvidedtoEMSAgencyServiceArea", setCodeText("dConfiguration.13", _val[0]));
            _v2Array.push({ section: "D04", element: "D04_10", val: null });
            ConfigurationGroup["dConfiguration.13"] = _val[0];
            ConfigurationGroup["EMDProvidedtoEMSAgencyServiceArea"] = setCodeText("dConfiguration.13", _val[0]);
        };


        ///dConfiguration.14 
        _val = getValue(elementList, "dConfiguration.14");
        if (_val == null) {
            V3XMLXML.BeginNode("dAgency.14")
            OLAPXML.BeginNode("dAgency.14")
            if (isRequiredStateElement("dConfiguration.14") == true) {
                V3XML.Attrib("dConfiguration.14", NIL_V3NOT_RECORDED);
                OLAPXML.Node("EMDVendor", "NOT RECORDED");
                ConfigurationGroup["dConfiguration.14"] = v3NOT_RECORDED;
                ConfigurationGroup["EMDVendor"] = v3NOT_RECORDED;
                _v2Array.push({ section: "D04", element: "D04_17", val: v2NOT_RECORDED });
            }
            else {
                V3XML.Attrib("dConfiguration.14", NIL_V3NOT_REPORTING);
                OLAPXML.Node("EMDVendor", "NOT RECORDED");
                ConfigurationGroup["dConfiguration.14"] = v3NOT_REPORTING;
                ConfigurationGroup["EMDVendor"] = v3NOT_REPORTING;
                _v2Array.push({ section: "D04", element: "D04_17", val: v2NOT_REPORTING });
            }
            V3XML.EndNode();
        }
        else {
            _arr = [];
            for (var t = 0; t < _val.length; t++) {
                _arr.push(_val[t]);
                V3XML.Node("dConfiguration.14", _val[t]);
                OLAPXML.Node("EMDVendor", _val[t]);
            }
            _v2Array.push({ section: "D04", element: "D04_17", val: _arr[0] });  //Version 2 has but one
            ConfigurationGroup["dConfiguration.14"] = _arr.slice(0);
            ConfigurationGroup["EMDVendor"] = _arr.slice(0);
        };

        ///dConfiguration.15 
        _val = getValue(elementList, "dConfiguration.15");
        if (_val == null) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dConfiguration.08", Description: "Patient Monitoring Capability(ies) MANDATORY" })
        }
        else {
            var _arr = [];
            var _arrV3 = [];
            for (var t = 0; t < _val.length; t++) {
                _arr.push(_val[t]);
                _arr.push(setCodeText("dConfiguration.15", _val[t]));
                V3XML.Node("dConfiguration.14", _val[t]);
                OLAPXML.Node("PatientMonitoringCapabilityies", setCodeText("dConfiguration.15", _val[t]));
            }
            ConfigurationGroup["dConfiguration.15"] = _arr.slice(0);
            ConfigurationGroup["PatientMonitoringCapabilityies"] = _arrV3.slice(0);
        };


        ///dConfiguration.16 
        _val = getValue(elementList, "dConfiguration.16");
        if (_val == null) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "dConfiguration.08", Description: "Crew Call Sign MANDATORY" })
        }
        else {
            var _arr = [];
            var _arrV2 = [];
            var _arrV3 = [];
            for (var t = 0; t < _val.length; t++) {
                _arr.push(_val[t]);

                V3XML.Node("dConfiguration.16", _val[t]);
                OLAPXML.Node("CrewCallSign", setCodeText("dConfiguration.15", _val[t]));

            }
            ConfigurationGroup["dConfiguration.16"] = _arr.slice(0);
            ConfigurationGroup["CrewCallSign"] = _arr.slice(0);
            _v2Array.push({ section: "D04", element: "D04_02", val: _arr.slice(0) });
        };

        ///dConfiguration.17 
        _val = getValue(elementList, "dConfiguration.17");
        if (_val == null) {
            V3XML.Node("dConfiguration.16", null);
            OLAPXML.Node("DispatchCenterID", null);
            ConfigurationGroup["dConfiguration.17"] = null;
            ConfigurationGroup["DispatchCenterID"] = null;

        }
        else {
            var _arr = [];
            for (var t = 0; t < _val.length; t++) {
                _arr.push(_val[t]);
                V3XML.Node("dConfiguration.16", _val[t]);
                OLAPXML.Node("DispatchCenterID", _val[t]);
            }
            ConfigurationGroup["dConfiguration.17"] = _arr.slice(0);
            ConfigurationGroup["DispatchCenterID"] = _arr.slice(0);;
        };
        OLAPXML.EndNode();
        V3XML.EndNode();

    };

    OLAPXML.EndNode();
    V3XML.EndNode();
    ////////////////////////////////////
    ////////////////////////////////////
    //XMLString to dConfigurations
    ConfigurationGroup.ProcedureGroup = ProcedureGroup;
    ConfigurationGroup.MedicationGroup = MedicationGroup;
    dConfiguration.ConfigurationGroup = ConfigurationGroup;

    return dConfiguration;
};