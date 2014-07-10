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

var dFacility = new Object;
var dFacilityGroup = new Object;
var FacilityArray = new Array();
var FacilityGroupArray = new Array();
var OLAPArray = [];


var getSectionIndex = function (sectionObject, sectionName)
{
    console.log(sectionObject);
    var intObjects = sectionObject.length;
    //console.log(intObjects)
    var _retValue = [];
    for (var d = 0; d < intObjects ; d++) {
        if (sectionObject[d].attributes.name == sectionName) {
            _retValue.push(d);
        }
    }
    if (_retValue.length == 0) {
        _retValue.push(-1);
    }
    return _retValue;
};


var setdFacility = function (businessObject)
{
    var _retArray = [];
    var v2Array = [];
    
    _retArray.push("<dFacility>" + '\n');
    OLAPArray.push("<dFacility>" + '\n');
    console.log(businessObject);
  //  console.log(businessObject.sections.length);
    
    for (var a = 0; a < businessObject.sections.length; a++) {

        FacilityArray.push('\t' + "<dFacilityGroup>" + '\n');
        OLAPArray.push('\t' + "<dFacilityGroup>" + '\n');
        // console.log(businessObject.sections[a].attributes.name);
        // console.log(businessObject.sections[a].attributes.sections[0].attributes.elements);

        //dFacility.01/////////
        _val = getdFacilityValue(businessObject.sections[a].attributes.elements, "dFacility.01");
        if (_val == null) {
            dFacility["dFacility.01"] = null;
            _retArray.push('\t\t' + "<dFacility.01>" + null + "</dFacility.01>" + '\n');
            OLAPArray.push('\t' + "<FacilityType>" + null + "</FacilityType>" + '\n');
        }
        else {
            dFacility["dFacility.01"] = _val;
            _retArray.push('\t\t' + "<dFacility.01>" + _val + "</dFacility.01>" + '\n');
            v2Array.push({ section: "D04", element: "D04_15", val: setD2("dFacility.01", _val) });
            OLAPArray.push('\t' + "<FacilityType>" + setCodeText("dFacility.01", _val) + "</FacilityType>" + '\n');
        };

        //Verify Section and set dFacilityGroup        
        if (businessObject.sections[a].attributes.sections != undefined) {
            _sectionIndex = getSectionIndex(businessObject.sections[a].attributes.sections, "dFacility.FacilityGroup");

            for (var b = 0; b < _sectionIndex.length; b++) {
                //    console.log(businessObject.sections[a].attributes.sections[_sectionIndex[b]].attributes.elements)
                var _groupObject = businessObject.sections[a].attributes.sections[b].attributes.elements;

                _retArray.push('\t\t' + "<dFacility.FacilityGroup>" + '\n')
                OLAPArray.push('\t\t' + "<dFacility.FacilityGroup>" + '\n')


                //dFacility.02/////////
                _val = getdFacilityValue(_groupObject, "dFacility.02");
                if (_val == null) {
                    dFacilityGroup["dFacility.02"] = null;
                    _retArray.push('\t\t\t' + "<dFacility.02>" + null + "</dFacility.02>" + '\n');
                    OLAPArray.push('\t\t\t' + "<FacilityName>" + null + "</FacilityName>" + '\n');
                }
                else {
                    dFacilityGroup["dFacility.02"] = _val[0];
                    _retArray.push('\t\t\t' + "<dFacility.02>" + _val + "</dFacility.02>" + '\n');
                    v2Array.push({ section: "D04", element: "D04_11", val: _val });
                    OLAPArray.push('\t\t\t' + "<FacilityName>" + _val + "</FacilityName>" + '\n');
                };

                //dFacility.03/////////
                _val = getdFacilityValue(_groupObject, "dFacility.03");
                if (_val == null) {
                    OLAPArray.push('\t\t\t' + "<LocationCode>" + null + "</LocationCode>" + '\n');
                    dFacilityGroup["dFacility.03"] = null;
                    _retArray.push('\t\t\t' + "<dFacility.03>" + null + "</dFacility.03>" + '\n');

                }
                else {
                    OLAPArray.push('\t\t\t' + "<LocationCode>" + _val + "</LocationCode>" + '\n');
                    dFacilityGroup["dFacility.03"] = _val;
                    _retArray.push('\t\t\t' + "<dFacility.03>" + _val + "</dFacility.03>" + '\n');
                    v2Array.push({ section: "D04", element: "D04_12", val: _val });

                };

                //dFacility.04/////////
                _val = getdFacilityValue(_groupObject, "dFacility.04");
                if (_val == null) {
                    dFacilityGroup["dFacility.04"] = null;
                    _retArray.push('\t\t\t' + "<dFacility.04>" + null + "</dFacility.04>" + '\n');
                    OLAPArray.push('\t\t\t' + "<HospitalDesignations>" + setCodeText("dFacility.04", _val) + "</HospitalDesignations>" + '\n');
                }
                else {
                    var arr = [];
                    for (var t = 0; t < _val.length; t++) {
                        arr.push(_val[t]);
                        _retArray.push('\t\t\t' + "<dFacility.04>" + _val[t] + "</dFacility.04>" + '\n');
                        OLAPArray.push('\t\t\t' + "<HospitalDesignations>" + _val[t] + "</HospitalDesignations>" + '\n');
                    }
                    dFacilityGroup["dFacility.04"] = arr.slice(0);
                };

                //dFacility.05/////////
                _val = getdFacilityValue(_groupObject, "dFacility.05");
                if (_val == null) {
                    _retArray.push('\t\t\t' + "<dFacility.05>" + null + "</dFacility.05>" + '\n');
                    dFacilityGroup["dFacility.05"] = null;
                    OLAPArray.push('\t\t\t' + "<NationalProviderIdentifier>" + null + "</NationalProviderIdentifier>" + '\n');
                }
                else {
                    dFacilityGroup["dFacility.05"] = _val;
                    _retArray.push('\t\t\t' + "<dFacility.05>" + _val + "</dFacility.05>" + '\n');
                    OLAPArray.push('\t\t\t' + "<NationalProviderIdentifier>" + _val + "</NationalProviderIdentifier>" + '\n');
                };


                //dFacility.06/////////
                _val = getdFacilityValue(_groupObject, "dFacility.06");
                if (_val == null) {
                    dFacilityGroup["dFacility.06"] = null;
                    _retArray.push('\t\t\t' + "<dFacility.06>" + null + "</dFacility.06>" + '\n');
                    OLAPArray.push('\t\t\t' + "<Room>" + null + "</Room>" + '\n');
                }
                else {
                    dFacilityGroup["dFacility.06"] = _val;
                    OLAPArray.push('\t\t\t' + "<Room>" + _val + "</Room>" + '\n');
                    _retArray.push('\t\t\t' + "<dFacility.06>" + _val + "</dFacility.06>" + '\n');
                };

                //dFacility.07/////////
                _val = getdFacilityValue(_groupObject, "dFacility.07");
                if (_val == null) {
                    dFacilityGroup["dFacility.07"] = null;
                    OLAPArray.push('\t\t\t' + "<StreetAddress>" + null + "</StreetAddress>" + '\n');
                    _retArray.push('\t\t\t' + "<dFacility.07>" + null + "</dFacility.07>" + '\n');
                }
                else {
                    dFacilityGroup["dFacility.07"] = _val;
                    OLAPArray.push('\t\t\t' + "<StreetAddress>" + _val + "</StreetAddress>" + '\n');
                    _retArray.push('\t\t\t' + "<dFacility.07>" + _val + "</dFacility.07>" + '\n');
                };

                //dFacility.08/////////
                _val = getdFacilityValue(_groupObject, "dFacility.08");
                if (_val == null) {
                    dFacilityGroup["dFacility.08"] = null;
                    OLAPArray.push('\t\t\t' + "<City>" + null + "</City>" + '\n');
                    _retArray.push('\t\t\t' + "<dFacility.08>" + null + "</dFacility.08>" + '\n');
                }
                else {
                    dFacilityGroup["dFacility.08"] = _val;
                    OLAPArray.push('\t\t\t' + "<City>" + _val + "</City>" + '\n');
                    _retArray.push('\t\t\t' + "<dFacility.08>" + _val + "</dFacility.08>" + '\n');
                };

                //dFacility.09/////////
                _val = getdFacilityValue(_groupObject, "dFacility.09");
                if (_val == null) {
                    dFacilityGroup["dFacility.09"] = null;
                    OLAPArray.push('\t\t\t' + "<State>" + null + "</State>" + '\n');
                    _retArray.push('\t\t\t' + "<dFacility.09>" + null + "</dFacility.09>" + '\n');
                }
                else {
                    OLAPArray.push('\t\t\t' + "<State>" + _val + "</State>" + '\n');
                    _retArray.push('\t\t\t' + "<dFacility.09>" + _val + "</dFacility.09>" + '\n');
                    dFacilityGroup["dFacility.09"] = _val;
                };

                //dFacility.10/////////
                _val = getdFacilityValue(_groupObject, "dFacility.10");
                if (_val == null) {
                    OLAPArray.push('\t\t\t' + "<Zip>" + null + "</Zip>" + '\n');
                    dFacilityGroup["dFacility.10"] = null;
                    _retArray.push('\t\t\t' + "<dFacility.10>" + null + "</dFacility.10>" + '\n');
                }
                else {
                    OLAPArray.push('\t\t\t' + "<Zip>" + null + "</Zip>" + '\n');
                    _retArray.push('\t\t\t' + "<dFacility.10>" + _val + "</dFacility.10>" + '\n');
                    dFacilityGroup["dFacility.10 "] = _val;
                };

                //dFacility.11/////////
                _val = getdFacilityValue(_groupObject, "dFacility.11");
                if (_val == null) {
                    OLAPArray.push('\t\t\t' + "<County>" + null + "</County>" + '\n');
                    dFacilityGroup["dFacility.11"] = null;
                    _retArray.push('\t\t\t' + "<dFacility.11>" + null + "</dFacility.11>" + '\n');
                }
                else {
                    OLAPArray.push('\t\t\t' + "<County>" + _val + "</County>" + '\n');
                    _retArray.push('\t\t\t' + "<dFacility.11>" + _val + "</dFacility.11>" + '\n');
                    dFacilityGroup["dFacility.11 "] = _val;
                };

                //dFacility.12/////////
                _val = getdFacilityValue(_groupObject, "dFacility.12");
                if (_val == null) {
                    dFacilityGroup["dFacility.12"] = null;
                    OLAPArray.push('\t\t\t' + "<Country>" + null + "</Country>" + '\n');
                    _retArray.push('\t\t\t' + "<dFacility.12>" + null + "</dFacility.12>" + '\n');
                }
                else {
                    _retArray.push('\t\t\t' + "<dFacility.12>" + _val + "</dFacility.12>" + '\n');
                    OLAPArray.push('\t\t\t' + "<Country>" + setCodeText("dFacility.12", _val) + "</Country>" + '\n');
                    dFacilityGroup["dFacility.12 "] = _val;
                };

                _val = getdFacilityValue(_groupObject, "dFacility.13");
                if (_val == null) {
                    dFacilityGroup["dFacility.13"] = null;
                    _retArray.push('\t\t\t' + "<dFacility.13>" + null + "</dFacility.13>" + '\n');
                    OLAPArray.push('\t\t\t' + "<GPS>" + null + "</GPS>" + '\n');
                }
                else {
                    _retArray.push('\t\t\t' + "<dFacility.13>" + _val + "</dFacility.13>" + '\n');
                    dFacilityGroup["dFacility.13 "] = _val;
                    OLAPArray.push('\t\t\t' + "<GPS>" + _val + "</GPS>" + '\n');
                };

                _val = getdFacilityValue(_groupObject, "dFacility.14");
                if (_val == null) {
                    dFacilityGroup["dFacility.14"] = null;
                    _retArray.push('\t\t\t' + "<dFacility.14>" + null + "</dFacility.14>" + '\n');
                    OLAPArray.push('\t\t\t' + "<NationalGridLocation>" + null + "</NationalGridLocation>" + '\n');
                }
                else {
                    OLAPArray.push('\t\t\t' + "<NationalGridLocation>" + _val + "</NationalGridLocation>" + '\n');
                    _retArray.push('\t\t\t' + "<dFacility.14>" + _val + "</dFacility.14>" + '\n');
                    dFacilityGroup["dFacility.14 "] = _val;
                };
                _retArray.push('\t\t' + "</dFacility.FacilityGroup>" + '\n')
                OLAPArray.push('\t\t' + "</dFacility.FacilityGroup>" + '\n')
            }
        }
    };
    _retArray.push('\t' + "</dFacilityGroup>" + '\n');
    OLAPArray.push('\t' + "</dFacilityGroup>" + '\n');
       

        var XMLString = ""
        for (var i = 0; i < _retArray.length ; i++)
        {
            XMLString = XMLString + _retArray[i];
        }
        console.log(XMLString)

        var XMLString = ""
        for (var i = 0; i < OLAPArray.length ; i++) {
            XMLString = XMLString + OLAPArray[i];
        }
        console.log(v2Array)

        /*   for (var i = 0; i < FacilityArray.length; i++) 
           {
               var FAC334 = new Object;
               FAC334["Type of Facility"] = _retArray[i]["dFacility.01"];
               for (var a = 0; a < FacilityGroupArray.length; a++) 
               {
                   NEIL AYG334["TotalPrimaryServiceAreaSize"] = AgencyYearGroupArray[i]["dAgency.16"];
                   AYG334["TotalServiceAreaPopulation"] = AgencyYearGroupArray[i]["dAgency.17"];
                   AYG334["911EMSCallCenterVolumeperYear"] = AgencyYearGroupArray[i]["dAgency.18"];
                   AYG334["DispatchVolumeperYear"] = AgencyYearGroupArray[i]["dAgency.19"];
                   AYG334["PatientTransportVolumeperYear"] = AgencyYearGroupArray[i]["dAgency.20"];
                   AYG334["PatientContactVolumeperYear"] = AgencyYearGroupArray[i]["dAgency.21"];
                   AYG334["BillableCallsperYear"] = AgencyYearGroupArray[i]["dAgency.22"];
                   AgencyYearGroup.push(AYG334);
                   //dAgency.AgencyYearGroup.push(AYG334);
               }
               */
    



        };    //end of function   



        var isRequiredStateElement = function (elementID) {
            return true;
        };
        var getdFacilityValue = function (elementList, valueObject) {
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

        function setD2(NEMSISElementNumber, valueArray) {
            //  console.log(NEMSISElementNumber);
            var _retArray = "";
            //console.log(valueArray);
            switch (NEMSISElementNumber) {
                case "dFacility.01":

                    if (dFacility01 == undefined) {
                        _retArray = valueArray + "UNDEFINED";
                    }
                    else {
                        _retArray = dFacility01[valueArray];
                    }
                    break;
                default:
                    _retArray =NEMSISElementNumber = " version 2 not found";
            }

            return _retArray;

        }
        var dFacility01 = {

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
                case "dFacility.01":
                    if (dFacility334_01[codeVal] == undefined) {
                        _return = codeVal;
                    }
                    else {
                        _return = dFacility334_01[codeVal];
                    }
                    break;

                case "dFacility.04":
                    if (dFacility334_04[codeVal] == undefined) {
                        _return = codeVal;
                    }
                    else {
                        _return = dFacility334_04[codeVal];
                    }
                    break;

                case "dFacility.12":
                    if (dFacility334_12[codeVal] == undefined) {
                        _return = codeVal;
                    }
                    else {
                        _return = dFacility334_12[codeVal];
                    }
                    break;

                default:
                    _return = " UNDEFINED";
            }
            return _return;

        }



    var dFacility334_01 = {
        "1701001": "Assisted Living Facility",
        "1701003": "Clinic",
        "1701005": "Hospital",
        "1701007": "Nursing Home",
        "1701009": "Other (Not Listed)",
        "1701011": "Urgent Care"
    };

    var dFacility334_04 = {
        "9908001" : "Behavioral Health", 
        "9908003" : "Burn Center", 
        "9908005" : "Critical Access Hospital", 
        "9908007" : "Hospital (General)", 
        "9908009" : "Neonatal Center", 
        "9908011" : "Pediatric Center", 
        "9908013" : "STEMI", 
        "9908015" : "STEMI Center (24/7)", 
        "9908017" : "Stroke Center", 
        "9908019" : "Rehab Center", 
        "9908021" : "Trauma Center Level 1", 
        "9908023" : "Trauma Center Level 2", 
        "9908025" : "Trauma Center Level 3", 
        "9908027" : "Trauma Center Level 4", 
        "9908029": "Trauma Center Level 5"
    };


    var dFacility334_12 = {
        "CA" : "Canada", 
        "MX" : "Mexico", 
        "US" : "United States", 
    };