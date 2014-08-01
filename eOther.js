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
var PN_NONE_REPORTED = "xsi:nil=\"true\" PN=\"8801015\"/>";
var PN_FINDING_NOT_PRESENT_IS_NILLABLE = "xsi:nil=\"true\" PN=\"8801005\"/>";
var PN_NO_KNOWN_DRUG_ALLERGY = "xsi:nil=\"true\" PN=\"8801013\"/>";	
var PN_UNRESPONSIVE = "xsi:nil=\"true\" PN=\"8801021\"/>";	
var FAX= "PhoneNumberType=\"9913001\"";
var HOME= "PhoneNumberType=\"9913003\"";
var MOBILE= "PhoneNumberType=\"9913005\"";
var PAGER= "PhoneNumberType=\"9913007\"";
var WORD= "PhoneNumberType=\"9913009\"";
var PERSONALEMAIL= "EmailAddressType=\"9904001\"";
var WORKEMAIL= "EmailAddressType=\"9904003\"";
var ICD10_CODE_TYPE = "CodeType=\"9924001\"";
var RXNORM_CODE_TYPE = "CodeType=\"9924003\"";


var _retArray = [];
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
}
var seteOther = function (businessObject) 
{
    if(typeof businessObject == undefined)
    {
        SetNotApplicable();
    }

    if (typeof businessObject["eOther"] != undefined)
    {
        console.log(businessObject);
        console.log(businessObject["eOther"].length);


        //eOther.01////////
        _val = getValue(businessObject.elements, "eOther.01");
        if (_val == null)
        {
            v2Array.push({ section: "E23", element: "E23_01", val: v2NOT_RECORDED });
            eOther["eOther.01"] = v3NOT_RECORDED;
            eOther["ReviewRequested"] = NOT_RECORDED;
        }
        else
        {
            v2Array.push({ section: "E23", element: "E23_01", val: SetD2("eOther.01", _val[0]) });
            eOther["eOther.01"] = _val[0];
            eOther["ReviewRequested"] = setCodeText("eOther.01", _val[0]);
        };

        //eOther.02//////////
        _val = getValue(businessObject.elements, "eOther.02");
        if (_val == null)
        {
            v2Array.push({ section: "E23", element: "E23_02", val: null });
            eOther["eOther.02"] = v3NOT_RECORDED;
            eOther["PotentialSystemofCareSpecialtyRegistryPatient"] = NOT_RECORDED;
        }
        else
        {
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _val.length; i++) 
            {
                arr1.push(_val[i]);
                arr2.push(setV2("eOther.03", _val[i]));
                arr3.push(setCodeText("eOther.03", _val[i]));
            }
        };
        isNotApplicableFlag = false;
        eOther["eOther.02"] = arr1.slice(0);
        eOther["PotentialSystemofCareSpecialtyRegistryPatient"] = arr3.slice(0);
        v2Array.push({ section: "E23", element: "E23_02", val: arr2.slice(0) });

        ///////////////////eOther.EMSCrewMemberGroup
        _sectionIndex = getSectionIndex(businessObject.sections[i].attributes, "eOther.EMSCrewMemberGroup");
        for (var x = 0; x < _sectionIndex.length; x++) 
        {
            var listOfElements = businessObject.sections[_sectionIndex[x]].attributes.elements
            
            //eOther.03//////////
            _val = getValue(businessObject.elements, "eOther.03");
            if (_val == null)
            {
                v2Array.push({ section: "E23", element: "E23_03", val: null });                
                EMSCrewMemberGroup["eOther.03"] = null;
                EMSCrewMemberGroup["PersonalProtectiveEquipmentUsed"] = null;
            }
            else
            {
                var arr1 = [];
                var arr2 = [];
                var arr3 = [];
                for (var i = 0; i < _val.length; i++) {
                    arr1.push(_val[i]);
                    arr2.push(setV2("eOther.04", _val[i]));
                    arr3.push(setCodeText("eOther.04", _val[i]));
                };
                isNotApplicableFlag = false;            
            };
            
            EMSCrewMemberGroup["eOther.02"] = arr1.slice(0);
            eOther["PersonalProtectiveEquipmentUsed"] = arr3.slice(0);
            v2Array.push({ section: "E23", element: "E23_03", val: arr2.slice(0) });                            
        };

        //eOther.04///////////
        _val = getValue(businessObject.elements, "eOther.04");
        if (_val == null)
        {
            EMSCrewMemberGroup["eOther.04"] = null;
            EMSCrewMemberGroup["CrewMemberID"] = null;
        }
        else
        {
            EMSCrewMemberGroup["eOther.04"] = _val[0];
            EMSCrewMemberGroup["CrewMemberID"] = _val[0];

        };

        //eOther.05/////////
        _val = getValue(businessObject.elements, "eOther.05");
        if (_val == null)
        {
            v2Array.push({ section: "E23", element: "E23_05", val: V2NOT_RECORDED });
            EMSCrewMemberGroup["eOther.05"] = V3NOT_RECORDED;        
            EMSCrewMemberGroup["SuspectedEMSWorkRelatedExposureInjuryorDeath"] = V3NOT_RECORDED;        
        }
        else 
        {
            v2Array.push({ section: "E23", element: "E23_05", val: SetD2("eOther.05", _val[0]) });
            EMSCrewMemberGroup["eOther.05"] = _val[0];
            EMSCrewMemberGroup["SuspectedEMSWorkRelatedExposureInjuryorDeath"] = setCodeText("eOther.05", _val[0]);                
        };

        //eOther.06/////////
        _val = getValue(businessObject.elements, "eOther.06");
        if (_val == null)
        {
            if (isRequiredStateElement("eOther.06"))
            {
                EMSCrewMemberGroup["eOther.06"] = v3NOT_RECORDED;
                EMSCrewMemberGroup["TypeofWorkRelatedInjuryDeathorSuspectedExposure"] = NOT_RECORDED;
                v2Array.push({ section: "E23", element: "E23_06", val: V2NOT_RECORDED });
            }
            else
            {
                EMSCrewMemberGroup["TypeofWorkRelatedInjuryDeathorSuspectedExposure"] = NOT_REPORTING;
                EMSCrewMemberGroup["eOther.06"] = v3NOT_REPORTING;
                v2Array.push({ section: "E23", element: "E23_06", val: v2NOT_REPORTING });
            }            
        }
        else 
        {
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _val.length; i++) 
            {
                arr1.push(_val[i]);
                arr2.push(setV2("eOther.06", _val[i]));
                arr3.push(setCodeText("eOther.06", _val[i]));
            };
            isNotApplicableFlag = false;      
            EMSCrewMemberGroup["eOther.06"] = arr1.slice(0);
            EMSCrewMemberGroup["TypeofWorkRelatedInjuryDeathorSuspectedExposure"] = arr3.slice(0);
            v2Array.push({ section: "E23", element: "E23_06", val: arr2.slice(0) });
        }
    };


        ///////////////////////////
        //eOther.07////////
        _val = getValue(businessObject.elements, "eOther.07");
        if (_val == null)
        {
            EMSCrewMemberGroup["eOther.07"] = null;
            EMSCrewMemberGroup["NaturalSuspectedIntentionalorUnintentionalDisaster"] = null;
            v2Array.push({ section: "E23", element: "E23_04", val: null });
        }
        else
        {
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < _val.length; i++) 
            {
                arr1.push(_val[i]);
                arr2.push(setV2("eOther.07", _val[i]));
                arr3.push(setCodeText("eOther.07", _val[i]));
            };
            isNotApplicableFlag = false;     
            EMSCrewMemberGroup["eOther.07"] = arr1.slice(0);
            EMSCrewMemberGroup["NaturalSuspectedIntentionalorUnintentionalDisaster"] = arr3.slice(0);
            v2Array.push({ section: "E23", element: "E23_04", val: arr2.slice(0) });

        };


        //eOther..08//////////
        _val = getValue(businessObject.elements, "eOther.08");
        if (_val == null)
        {
            if (isRequiredStateElement("eOther.08"))
            {
                eOther["eOther.08"] = v3NOT_RECORDED;
                eOther["CrewMemberCompletingthisReport"] = NOT_RECORDED;
                v2Array.push({ section: "E23", element: "E23_10", val: v2NOT_RECORDED });
            }
            else
            {
                eOther["CrewMemberCompletingthisReport"] = NOT_RECORDED;
                eOther["eOther.08"] = NOT_REPORTING;
                v2Array.push({ section: "E23", element: "E23_10", val: v2NOT_REPORTING });
            }
        }
        else
        {
            eOther["eOther.08"] = _val[0];
            eOther["CrewMemberCompletingthisReport"] = setCodeText("eOther.08", _val[0]);
            v2Array.push({ section: "E23", element: "E23_10", val: D2Val("eOther.08", _val[0]) });
        };

        ////////////////////////////

        ///////////////////eOther.FileGroup
        _sectionIndex = getSectionIndex(businessObject.sections[i].attributes, "eOther.FileGroup");
        for (var x = 0; x < _sectionIndex.length; x++) 
        {
            var listOfElements = businessObject.sections[_sectionIndex[x]].attributes.elements
            //eOther.09//////////
            _val = getValue(listOfElements, "eOther.09");
            if (_val == null)
            {
                FileGroup["ExternalElectronicDocuments"] = null;
                FileGroup["eOther.09"] = null;
            }
            else
            {
                FileGroup["ExternalElectronicDocuments"] = setCodeText("eOther.09", _val[0]);
                FileGroup["eOther.09"] = _val[0];                
            };

            //eOther.10//////////
            _val = getValue(listOfElements, "eOther.10");
            if (_val == null)
            {
                FileGroup["FileAttachmentType"] = null;
                FileGroup["eOther.10"] = null;
            }
            else
            {
                FileGroup["FileAttachmentType"] = _val[0];
                FileGroup["eOther.10"] = _val[0];                
            };


            //eOther.11//////////
            _val = getValue(listOfElements, "eOther.11");
            if (_val == null)
            {
                FileGroup["FileAttachmentImage"] = null;
                FileGroup["eOther.11"] = null;
            }
            else
            {
                FileGroup["FileAttachmentImage"] = _val[0];
                FileGroup["eOther.11"] = _val[0];
            }
        };
        _sectionIndex = getSectionIndex(businessObject.sections[i].attributes, "eOther.SignatureGroup");
        for (var x = 0; x < _sectionIndex.length; x++) 
        {
            var listOfElements = businessObject.sections[_sectionIndex[x]].attributes.elements
            //Other.12////////

            _val = getValue(listOfElements, "eOther.12");
            if (_val == null)
            {
                SignatureGroup["TypeofPersonSigning"] = null;
                SignatureGroup["eOther.12"] = null;
            }
            else
            {
                SignatureGroup["eOther.12"] = setCodeText("eOther.12", _val[0]);
                SignatureGroup["eOther.12"] = _val[0];
            };

            //eOther.13
            _val = getValue(listOfElements, "eOther.13");
            if (_val == null)
            {
                SignatureGroup["SignatureReason"] = null;
                SignatureGroup["eOther.13"] = null;
            }
            else
            {
                SignatureGroup["eOther.13"] = setCodeText("eOther.13",_val[0]);
                SignatureGroup["eOther.13"] = _val[0];
            };

            //ether.14/////////
            _val = getValue(listOfElements, "eOther.14");
            if (_val == null)
            {
                SignatureGroup["TypeOfPatientRepresentative"] = null;
                SignatureGroup["eOther.14"] = null;
            }
            else
            {                
                SignatureGroup["TypeOfPatientRepresentative"] = setCodeText("eOther.14",_val[0]);
                SignatureGroup["eOther.14"] = _val[0];
            };

            //eOther.15//////
            _val = getValue(listOfElements, "eOther.15");
            if (_val == null)
            {
                SignatureGroup["SignatureStatus"] = null;
                SignatureGroup["eOther.15"] = null;
            }
            else
            {
                SignatureGroup["SignatureStatus"] = setCodeText("eOther.15", _val[0]);
                SignatureGroup["eOther.15"] = _val[0];
            };

            //eOther.16/////////
            _val = getValue(listOfElements, "eOther.16");
            if (_val == null)
            {
                SignatureGroup["SignatureFileName"] = null;
                SignatureGroup["eOther.16"] = null;

            }
            else
            {
                SignatureGroup["SignatureFileName"] = setCodeText("eOther.16", _val[0]) ;
                SignatureGroup["eOther.16"] = _val;
            };

            //eOther.17////////
            _val = getValue(listOfElements, "eOther.17");
            if (_val == null)
            {
                SignatureGroup["SignatureFileType"] = null;
                SignatureGroup["eOther.17"] = null;
            }
            else
            {
                SignatureGroup["SignatureFileType"] = _val[0];
                SignatureGroup["eOther.17"] = _val[0];
            };

            //eOther.18///////
            _val = getValue(listOfElements, "eOther.18");
            if (_val == null)
            {
                OLAPArray.push('\t' + "<>" + null + "</SignatureGraphic>" + '\n');
                SignatureGroup["SignatureGraphic"] = null;
                SignatureGroup["eOther.18"] = null;

            }
            else
            {
                SignatureGroup["eOther.18"] = _val[0];
                SignatureGroup["SignatureGraphic"] = _val[0];
            };

            //eOther.19//////////
            _val = getValue(listOfElements, "eOther.19");
            if (_val == null)
            {
                SignatureGroup["DateTimeofSignature"] = null;
                SignatureGroup["eOther.19"] = null;
            }
            else
            {
                SignatureGroup["eOther.19"] = _val[0];
                SignatureGroup["DateTimeofSignature"] = _val[0];
            };

            //eOther.20///////
            _val = getValue(listOfElements, "eOther.20");
            if (_val == null)
            {
                OLAPArray.push('\t' + "<>" + null + "</SignatureLastName>" + '\n');
                SignatureGroup["SignatureLastName"] = null;
                SignatureGroup["eOt  her.20"] = null;
            }
            else
            {
                OLAPArray.push('\t' + "<SignatureLastName>" + _val + "</SignatureLastName>" + '\n');
                SignatureGroup["eOther.20"] = _val;
                _retArray.push('/t/t' + "<eOther.20>" + _val[0] + "</eOther.20>");
            };

            //eOther.21/////////
            _val = getValue(listOfElements, "eOther.21");
            if (_val == null)
            {
                OLAPArray.push('\t' + "<SignatureFirstName>" + null + "</SignatureFirstName>" + '\n');
                _retArray.push('/t/t' + "<eOther.21" + null + "</eOther.21>");
                SignatureGroup["eOther.21"] = null;
            }
            else
            {
                OLAPArray.push('\t' + "<SignatureFirstName>" + _val + "</SignatureFirstName>" + '\n');
                SignatureGroup["eOther.21"] = _val;
                _retArray.push('/t/t' + "<eOther.21>" + _val + "</eOther.21>");
            };
            _retArray.push('/t' + "</eOther.SignatureGroup>");
            OLAPArray.push('/t' + "</eOther.SignatureGroup>");
        };

        return _retArray;
        };

        
var setNotApplicable = function (elementID) {

    _retArray.push("<eOther.05" + NIL_V3NOT_APPLICABLE);
    EMSCrewMemberGroup["eOther.05"] = v3NOT_APPLICABLE;
    E23.E23_05 = v2NOT_APPLICABLE;

    _retArray.push("<eOther.06" + NIL_V3NOT_APPLICABLE);
    EMSCrewMemberGroup["eOther.06"] = v3NOT_APPLICABLE;
    E23.E23_06 = v2NOT_APPLICABLE;

    _retArray.push("<eOther.08" + NIL_V3NOT_APPLICABLE);
    eOther["eOther.08"] = v3NOT_APPLICABLE;
    E23.E23_10 = v2NOT_APPLICABLE;
}


var isRequiredStateElement = function (elementID) {
    return true;
};
var getValue = function (payload, valueObject) {


    var _retValue = null;
    var _bFound = false;
    i = 0;
    while (i < payload.length) {
        if (_bFound == false) {
            _retVal = null;
            if (payload[i].name == valueObject) {
                _bFound = true;
                if (payload[i].values == undefined) {

                    _retVal = null;
                }
                else {
                    _retVal = payload[i].values;
                }
            }
        }
        i++;
    }
    return _retVal;
};

function setD2(NEMSISElementNumber, valueArray) {
    //    console.log(NEMSISElementNumber);
    var _retArray = [];
    //    console.log(valueArray);
    switch (NEMSISElementNumber) {
        case "eOther.01":

            if (eOther01[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eOther01[valueArray[0]]);
            }
            break;
        case "eOther.02":
            for (i = 0; i < valueArray.length; i++) {
                if (eOther02[valueArray[i]] == undefined) {
                    _retArray.push(valueArray[i] + "UNDEFINED");
                }
                else {
                    _retArray.push(eOther02[valueArray[i]]);
                }
            }
            break;
        case "eOther.03":
            for (i = 0; i < valueArray.length; i++) {
                if (eOther03[valueArray[i]] == undefined) {
                    _retArray.push(valueArray[i] + "UNDEFINED");
                }
                else {
                    _retArray.push(eOther03[valueArray[i]]);
                }
            }
            break;
        case "eOther.07":

            if (eOther07[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eOther07[valueArray[0]]);
            }
            break;
        default:
            _retArray.push(NEMSISElementNumber = " version 2 not found");
    }

    return _retArray;

};

var eOther01 =
{
    "9923001":"0",
    "9923003":"1"
};

var eOther02 = {
    "4502001":"5430",
    "4502003":"5395",
    "4502005":"5400",
    "4502007":"5405",
    "4502009":"5410",
    "4502011":"5430",
    "4502013":"5405",
    "4502015":"5430",
    "4502017":"5420",
    "4502019":"5425"
};

var eOther03 = {

    "4503001":"5435",
    "4503003":"5440",
    "4503005":"5465",
    "4503007":"5445",
    "4503009":"5450",
    "4503011":"5455",
    "4503013":"5465",
    "4503015":"5460",
    "4503017":"5460",
    "4503019":"5465",
    "4503021":"5465",
    "4503023":"5465"
};

var eOther06 =
    {
    "4506001":"5580",
    "4506003":"5580",
    "4506005":"5580",
    "4506007":"5560",
    "4506009":"5540",
    "4506011":"5550",
    "4506013":"5545",
    "4506015":"5555",
    "4506017":"5565",
    "4506019":"5570",
    "4506021":"5560",
    "4506023":"5575",
    "4506021":"5575",
    "4506027":"5585",
    "4506029":"-10"
    }
var eOther07 =
{
    "4507001":"5470",
    "4507003":"5475",
    "4507005":"5480",
    "4507007":"5485",
    "4507009":"5490",
    "4507011":"5495",
    "4507013":"5500",
    "4507017":"5505",
    "4507019":"5510",
    "4507021":"5515",
    "4507023":"5520",
    "4507025":"5525",
    "4507027":"5530"

};
};
