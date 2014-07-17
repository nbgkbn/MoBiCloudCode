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
var setdVehicle = function (dVehicleObject)
{
    var dVehicle = new Object;
    var VehicleGroup = new Object;

    V3XML.BeginNode("dVehicle");
    OLAPXML.BeginNode("dVehicle");
    
    for (var xx = 0; xx < dVehicleObject.attributes.sections.length; xx++)
    {
        var elementList = dVehicleObject.attributes.sections[xx].attributes.elements;
        V3XML.BeginNode("dVehicle.VehicleGroup");
        OLAPXML.BeginNode("dVehicle.VehicleGroup");

        ///////dVehicle.01
        _val = getValue(elementList, "dVehicle.01");
        if (_val == null)
        {
            if (isRequiredStateElement("dVehicle.01") == - true)
            {
                _v2Array.push({ section: "D06", element: "D06_01", val: v2NOT_RECORDED });
                V3XML.BeginNode("dVehicle.01")
                V3XML.Attrib("dVehicle.01", NIL_V3NOT_RECORDED);
                OLAPXML.Node("UnitVehicleNumber", "NOT RECORDED");
                VehicleGroup["UnitVehicleNumber"] = v3NOT_RECORDED;
                ["dVehicle.01"] = v3NOT_RECORDED;
                V3XML.EndNode();
            }
            else
            {
                _v2Array.push({ section: "D06", element: "D06_01", val: v2NOT_REPORTING });
                V3XML.BeginNode("dVehicle.01")
                V3XML.Attrib("dVehicle.01", NIL_V3NOT_REPORTING);
                OLAPXML.Node("UnitVehicleNumber", "NOT REPORTING");
                VehicleGroup["UnitVehicleNumber"] = v3NOT_REPORTING;
                ["dVehicle.01"] = v3NOT_REPORTING;
                V3XML.EndNode();
            }
        }
        else
        {
            V3XML.Node("dVehicle.01", _val[0]);
            OLAPXML.Node("UnitVehicleNumber", _val[0]);
            _v2Array.push({ section: "D08", element: "D08_01", val: _val[0] });
            VehicleGroup["dVehicle.01"] = _val[0];
            VehicleGroup["UnitVehicleNumber"] = _val[0];
        };


        ///////dVehicle.02
        _val = getValue(elementList, "dVehicle.02");
        if (_val == null)
        {
            V3XML.Node("dVehicle.02", null);
            OLAPXML.Node("VIN", null);
            VehicleGroup["dVehicle.02"] = null;
            VehicleGroup["VIN"] = null;
        }
        else
        {
            V3XML.Node("dVehicle.02", _val[0]);
            OLAPXML.Node("VIN", _val[0]);
            VehicleGroup["dVehicle.02"] = _val[0];
            VehicleGroup["VIN"] = _val[0];
        };

        ///////dVehicle.03
        _val = getValue(elementList, "dVehicle.03");
        if (_val == null)
        {
            V3XML.Node("dVehicle.03", null);
            OLAPXML.Node("UnitCallSign", null);
            VehicleGroup["dVehicle.03"] = null;
            VehicleGroup["UnitCallSign"] = null;
        }
        else
        {
            V3XML.Node("dVehicle.03", _val[0]);
            OLAPXML.Node("UnitCallSign", _val[0]);
            VehicleGroup["dVehicle.03"] = _val[0];
            VehicleGroup["UnitCallSign"] = _val[0];
        };


        ///////dVehicle.04
        _val = getValue(elementList, "dVehicle.04");
        if (_val == null) {
            if (isRequiredStateElement("dVehicle.04") == - true)
            {
                V3XML.Attrib("dVehicle.04", NIL_V3NOT_RECORDED);
                OLAPXML.Node("VehicleType", "NOT RECORDED");
                PersonnelGroup["dVehicle.04"] = v3NOT_RECORDED;
                PersonnelGroup["VehicleType"] = v3NOT_RECORDED;
                _v2Array.push({ section: "D06", element: "D06_03", val: v2NOT_RECORDED });
            }
            else
            {
                V3XML.Attrib("dVehicle.04", NIL_V3NOT_REPORTING);
                OLAPXML.Node("VehicleType", "NOT REPORTING");
                PersonnelGroup["dVehicle.04"] = v3NOT_REPORTING;
                PersonnelGroup["VehicleType"] = v3NOT_REPORTING;
                _v2Array.push({ section: "D06", element: "D06_03", val: v2NOT_REPORTING });
            }
        }
        else
        {
            V3XML.Node("dVehicle.04", _val[0]);
            OLAPXML.Node("VehicleType", setCodeText("dVehicle.04", _val[t]));
            VehicleGroup["dVehicle.04"] = _val[0];
            VehicleGroup["VehicleType"] = setCodeText("dVehicle.04", _val[t]);
            _v2Array.push({ section: "D06", element: "D06_03", val: setV2("dVehicle.04", _val) });
        };

        ///////////////        
        _sectionIndex = getSectionIndex(dVehicleObject.attributes.sections[xx].attributes, "dVehicle.VehicleCertificationLevelsGroup");


        for (var x = 0; x < _sectionIndex.length; x++)
        {
            _retArray.push('\t\t' + "<dVehicle.VehicleCertificationLevelsGroup>" + '\n');
            _OLAPArray.push('\t\t' + "<dVehicle.VehicleCertificationLevelsGroup>" + '\n');
            //////////////////dVehicle.05
            _val = getValue(dVehicleObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dVehicle.05");
            if (_val == null)
            {
                V3XML.Node("dVehicle.05", null);
                OLAPXML.Node("CrewStateLicensureLevels", null);
                VehicleCertificationLevelsGroup["dVehicle.05"] = _val[0];
                VehicleCertificationLevelsGroup["CrewStateLicensureLevels"] = null;
                _v2Array.push({ section: "D06", element: "D06_04", val: null });
            }
            else
            {
                V3XML.Node("dVehicle.05", _val[0]);
                OLAPXML.Node("CrewStateLicensureLevels", setCodeText("dVehicle.04", _val[t]));
                VehicleCertificationLevelsGroup["dVehicle.05"] = _val[0];
                VehicleCertificationLevelsGroup["CrewStateLicensureLevels"] = setCodeText("dVehicle.04", _val[t]);
                _v2Array.push({ section: "D06", element: "D06_04", val: setV2("dVehicle.05", _val) });
            };

            //////////////////dVehicle.06
            _val = getValue(dVehicleObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dVehicle.06");
            if (_val == null)
            {
                V3XML.Node("dVehicle.06", null);
                OLAPXML.Node("NumberEMSPersonnelonNormal911", null);
                VehicleCertificationLevelsGroup["dVehicle.06"] = null;
                VehicleCertificationLevelsGroup["NumberEMSPersonnelonNormal911"] = null;
                _v2Array.push({ section: "D06", element: "D06_05", val: null });
            }
            else
            {
                V3XML.Node("dVehicle.06", _val[0]);
                OLAPXML.Node("NumberEMSPersonnelonNormal911", _val[0]);
                VehicleCertificationLevelsGroup["dVehicle.06"] = _val[0];
                VehicleCertificationLevelsGroup["NumberEMSPersonnelonNormal911"] = _val[0];
                _v2Array.push({ section: "D06", element: "D06_05", val: _val[0] });
            };

            //////////////////dVehicle.07
            _val = getValue(dVehicleObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dVehicle.07");
            if (_val == null)
            {
                V3XML.Node("dVehicle.07", null);
                OLAPXML.Node("NumberEMSPersonnelLevelNormal911ResponseNonTransport", null);
                VehicleCertificationLevelsGroup["dVehicle.07"] = null;
                VehicleCertificationLevelsGroup["NumberEMSPersonnelLevelNormal911ResponseNonTransport"] = null;
            }
            else
            {
                V3XML.Node("dVehicle.07", _val[0]);
                OLAPXML.Node("NumberEMSPersonnelLevelNormal911ResponseNonTransport", _val[0]);
                VehicleCertificationLevelsGroup["dVehicle.07"] = _val[0];
                VehicleCertificationLevelsGroup["NumberEMSPersonnelLevelNormal911ResponseNonTransport"] = _val[0];
            };

            //////////////////dVehicle.08
            _val = getValue(dVehicleObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dVehicle.08");
            if (_val == null)
            {
                V3XML.Node("dVehicle.08", null);
                OLAPXML.Node("NumberEMSPersonnelLevelNormal911ResponseTransport", null);
                VehicleCertificationLevelsGroup["dVehicle.08"] = null;
                VehicleCertificationLevelsGroup["NumberEMSPersonnelLevelNormal911ResponseTransport"] = null;

            }
            else
            {
                V3XML.Node("dVehicle.08", _val[0]);
                OLAPXML.Node("NumberEMSPersonnelLevelNormal911ResponseTransport", _val[0]);
                VehicleCertificationLevelsGroup["dVehicle.08"] = _val[0];
                VehicleCertificationLevelsGroup["NumberEMSPersonnelLevelNormal911ResponseTransport"] = _val[0];
            };

            OLAPXML.EndNode();
            V3XML.EndNode();
        };

        /////////////dVehicle.09
        _val = getValue(elementList, "dVehicle.09");
        if (_val == null)
        {
            V3XML.Node("dVehicle.09", null);
            OLAPXML.Node("VehicleInitialCost", null);
            VehicleGroup["dVehicle.09"] = null;
            VehicleGroup["VehicleInitialCost"] = null;
            _v2Array.push({ section: "D06", element: "D06_06", val: null });
        }
        else
        {
            V3XML.Node("dVehicle.09", null);
            OLAPXML.Node("VehicleInitialCost", null);
            VehicleGroup["dVehicle.09"] = null;
            VehicleGroup["VehicleInitialCost"] = null;
            _v2Array.push({ section: "D06", element: "D06_06", val: _val });
        };

        /////////////dVehicle.10
        _val = getValue(elementList, "dVehicle.10");
        if (_val == null)
        {
            if (isRequiredStateElement("dVehicle.10") == - true)
            {
                V3XML.BeginNode("dVehicle.10")
                V3XML.Attrib("dVehicle.10", NIL_V3NOT_RECORDED);
                OLAPXML.Node("ModelYear", "NOT RECORDED");
                VehicleGroup["ModelYear"] = v3NOT_RECORDED;
                VehicleGroup["dVehicle.10"] = v3NOT_RECORDED;
                _v2Array.push({ section: "D06", element: "D06_07", val: v2NOT_RECORDED });
            }
            else
            {
                V3XML.BeginNode("dVehicle.10")
                V3XML.Attrib("dVehicle.10", NIL_V3NOT_REPORTING);
                OLAPXML.Node("ModelYear", "NOT REPORTING");
                VehicleGroup["ModelYear"] = v3NOT_REPORTING;
                VehicleGroup["dVehicle.10"] = v3NOT_REPORTING;
                _v2Array.push({ section: "D06", element: "D06_07", val: v2NOT_REPORTING });
            }
        }
        else
        {
            V3XML.Node("dVehicle.10", _val[0]);
            OLAPXML.Node("ModelYear", _val[0]);
            VehicleGroup["dVehicle.10"] = _val[0];
            VehicleGroup["ModelYear"] = _val[0];
            _v2Array.push({ section: "D06", element: "D06_07", val: _val[0] });
        };

        _sectionIndex = getSectionIndex(dVehicleObject.attributes.sections[xx].attributes, "dVehicle.YearGroup");
        // console.log(_sectionIndex)


        for (var x = 0; x < _sectionIndex.length; x++)
        {

            OLAPXML.BeginNode("dVehicle.YearGroup")
            V3XML.BeginNode("dVehicle.YearGroup")

            _val = getValue(dVehicleObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dVehicle.11");
            if (_val == null)
            {
                V3XML.Node("dVehicle.11", null);
                OLAPXML.Node("MilesKilometersHoursAccrued", null);
                YearGroup["dVehicle.11"] = null;
                YearGroup["MilesKilometersHoursAccrued"] = null;
                _v2Array.push({ section: "D06", element: "D06_08", val: null });

            }
            else
            {
                V3XML.Node("dVehicle.11", _val[0]);
                OLAPXML.Node("MilesKilometersHoursAccrued", _val[0]);
                YearGroup["dVehicle.11"] = _val[0];
                YearGroup["MilesKilometersHoursAccrued"] = _val[0];
                _v2Array.push({ section: "D06", element: "D06_08", val: _val[0] });
            };

            _val = getValue(dVehicleObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dVehicle.12");
            if (_val == null)
            {
                V3XML.Node("dVehicle.12", null);
                OLAPXML.Node("AnnualVehicleHours", null);
                YearGroup["dVehicle.12"] = null;
                YearGroup["AnnualVehicleHours"] = null;
                _v2Array.push({ section: "D06", element: "D06_09", val: null });
            }
            else
            {
                V3XML.Node("dVehicle.12", _val[0]);
                OLAPXML.Node("AnnualVehicleHours", _val[0]);
                YearGroup["dVehicle.12"] = _val[0];
                YearGroup["AnnualVehicleHours"] = _val[0];
                _v2Array.push({ section: "D06", element: "D06_09", val: _val[0] });
            };


            //////////dVehicle.13
            _val = getValue(dVehicleObject.attributes.sections[xx].attributes.sections[_sectionIndex[x]].attributes.elements, "dVehicle.13");
            if (_val == null)
            {
                V3XML.Node("dVehicle.13", null);
                OLAPXML.Node("AnnualVehicleMiles", null);
                YearGroup["dVehicle.13"] = null;
                YearGroup["AnnualVehicleMiles"] = null;
                _v2Array.push({ section: "D06", element: "D06_10", val: null });
            }
            else
            {
                V3XML.Node("dVehicle.13", _val[0]);
                OLAPXML.Node("AnnualVehicleMiles", _val[0]);
                YearGroup["dVehicle.13"] = _val[0];
                YearGroup["AnnualVehicleMiles"] = _val[0];
                _v2Array.push({ section: "D06", element: "D06_10", val: _val[0] });
            };
            OLAPXML.EndNode();
            V3XML.EndNode();
        };

        OLAPXML.EndNode();
        V3XML.EndNode();

    } // loop term
    OLAPXML.EndNode();
    V3XML.EndNode();

    //console.log(OLAPArrayString)
};    //end of function   
