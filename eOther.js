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

    if (typeof businessObject["eOther"] != undefined) {
        console.log(businessObject);
        console.log(businessObject["eOther"].length);

        _retArray.push("<eOther>");
        OLAPArray.push("<eOther>");

        //eOther.01////////
        _val = getValue(businessObject.elements, "eOther.01");
        if (_val == null)
        {
            v2Array.push({ section: "E23", element: "E23_01", val: v2NOT_RECORDED });
            _retArray.push('\t' + "<eOther.01" + v3NOT_RECORDED + '\n');
            eOther["eOther.01"] = v3NOT_RECORDED;
            OLAPArray.push('\t' + "<ReviewRequested>" + "NOT RECORDED" + "</ReviewRequested>" + '\n');
        }
        else
        {
            OLAPArray.push('\t' + "<ReviewRequested>" + setCodeText("eOther.01", _val) + "</ReviewRequested>" + '\n');
            _retArray.push('\t' + "<eOther.01>" + _val + "</eOther.01>");
            v2Array.push({ section: "E23", element: "E23_01", val: SetD2("eOther.01", _val) });
            eOther["eOther.01"] = _val;
        };

        //eOther.02//////////
        _val = getValue(businessObject.elements, "eOther.02");
        if (_val == null)
        {
            v2Array.push({ section: "E23", element: "E23_02", val: null });
            _retArray.push('/t' + "<eOther.02>" + null + "</eOther.02>");
            eOther["eOther.02"] = v3NOT_RECORDED;
            OLAPArray.push('\t' + "<PotentialSystemofCareSpecialtyRegistryPatient>" + "NOT RECORDED" + "</PotentialSystemofCareSpecialtyRegistryPatient>" + '\n');

        }
        else
        {
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _val.length; i++)
            {
                arr1[i]=_val[i];
                v2Array.push({ section: "E23", element: "E23_02", val: SetV2("eOther.02", _val[i]) });
                OLAPArray.push('\t' + "<PotentialSystemofCareSpecialtyRegistryPatient>" + setCodeText("eOther.02", _val[i]) + "</PotentialSystemofCareSpecialtyRegistryPatient>" + '\n');
                _retArray.push('/t' + "<eOther.02>" + _val[i] + "</eOther.02>");
            }
            eOther["eOther.02"] = arr1.slice(0);
        };
        ///////////////////eOther.EMSCrewMemberGroup
        _sectionIndex = getSectionIndex(businessObject.sections[i].attributes, "eOther.EMSCrewMemberGroup");
        for (var x = 0; x < _sectionIndex.length; x++) 
        {
            var listOfElements = businessObject.sections[_sectionIndex[x]].attributes.elements
            _retArray.push('/t' + "<eOther.EMSCrewMemberGroup>");
            OLAPArray.push('/t' + "<eOther.EMSCrewMemberGroup>");
            
            //eOther.03//////////
            _val = getValue(businessObject.elements, "eOther.03");
            if (_val == null)
            {
                v2Array.push({ section: "E23", element: "E23_03", val: null });
                _retArray.push('/t' + "<eOther.03>" + null + "</eOther.03>");
                EMSCrewMemberGroup["eOther.03"] = null;
                OLAPArray.push('\t' + "<PersonalProtectiveEquipmentUsed>" + null + "</PersonalProtectiveEquipmentUsed>" + '\n');
            }
            else
            {
                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _val.length; i++)
                {
                    arr1[i]=_val[i];
                    v2Array.push({ section: "E23", element: "E23_03", val: SetV2("eOther.03", _val[i]) });
                    OLAPArray.push('\t' + "<PersonalProtectiveEquipmentUsed>" + setCodeText("eOther.03", _val[i]) + "</PersonalProtectiveEquipmentUsed>" + '\n');
                    _retArray.push('/t/t' +"<eOther.03>" + _val[i] + "</eOther.03>");
                }
                EMSCrewMemberGroup["eOther.03"] = arr1.slice(0);

            };

            //eOther.04///////////
            _val = getValue(businessObject.elements, "eOther.04");
            if (_val == null)
            {
                EMSCrewMemberGroup["eOther.04"] = null;
                _retArray.push('\t' + "<eOther.04>" + null + "</eOther.04>");               
                OLAPArray.push('\t' + "<CrewMemberID>" + null + "</CrewMemberID>" + '\n');

            }
            else
            {
                EMSCrewMemberGroup["eOther.04"] = _val;
                _retArray.push('/t/t' + "<eOther.04>" + _val + "</eOther.04>")
                OLAPArray.push('\t' + "<CrewMemberID>" + _val + "</CrewMemberID>" + '\n');
            };

            //eOther.05/////////
            _val = getValue(businessObject.elements, "eOther.05");
            if (_val == null)
            {
                OLAPArray.push('\t' + "<SuspectedEMSWorkRelatedExposureInjuryorDeath>" + "NOT RECORDED" + "</SuspectedEMSWorkRelatedExposureInjuryorDeath>" + '\n');
                v2Array.push({ section: "E23", element: "E23_05", val: V2NOT_RECORDED });
                _retArray.push('/t/t' + "<eOther.05" + NIL_V3NOT_RECORDED);
                EMSCrewMemberGroup["eOther.05"] = V3NOT_RECORDED;             
            }
            else 
            {
                OLAPArray.push('\t' + "<SuspectedEMSWorkRelatedExposureInjuryorDeath>" + setCodeText("eOther.05", _val[i]) + "</SuspectedEMSWorkRelatedExposureInjuryorDeath>" + '\n');
                _retArray.push('/t/t' + "<eOther.05>" + _val + "</eOther.05>")
                v2Array.push({ section: "E23", element: "E23_05", val: SetD2("eOther.05", _val) });
                EMSCrewMemberGroup["eOther.05"] = _val[0];

            };

            //eOther.06/////////
            _val = getValue(businessObject.elements, "eOther.06");
            if (_val == null)
            {
                if (isRequiredStateElement("eOther.06"))
                {
                    OLAPArray.push('\t' + "<TypeofWorkRelatedInjuryDeathorSuspectedExposure>" + "NOT RECORDED" + "</TypeofWorkRelatedInjuryDeathorSuspectedExposure>" + '\n');
                    _retArray.push('/t/t' + "<eOther.06" + NIL_V3NOT_RECORDED);
                    EMSCrewMemberGroup["eOther.06"] = v3NOT_RECORDED;
                    v2Array.push({ section: "E23", element: "E23_06", val: V2NOT_RECORDED });
                }
                else
                {
                    OLAPArray.push('\t' + "<TypeofWorkRelatedInjuryDeathorSuspectedExposure>" + "NOT REPORTING" + "</TypeofWorkRelatedInjuryDeathorSuspectedExposure>" + '\n');
                    _retArray.push('/t/t' + "<eOther.06" + NIL_V3NOT_REPORTING);
                    EMSCrewMemberGroup["eOther.06"] = v3NOT_REPORTING;
                    v2Array.push({ section: "E23", element: "E23_06", val: v2NOT_REPORTING });
                }            
            }
            else 
            {
                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < _val.length; i++)
                {
                    OLAPArray.push('\t' + "<TypeofWorkRelatedInjuryDeathorSuspectedExposure>" + setCodeText("eOther.06", _val[i]) + "</TypeofWorkRelatedInjuryDeathorSuspectedExposure>" + '\n');
                    v2Array.push({ section: "E23", element: "E23_06", val: SetV2("eOther.06", _val[i]) });
                    arr1.push(_val[i]);
                    _retArray.push('/t/t' +"<eOther.06>" + _val[i] + "</eOther.06>");
                }
                EMSCrewMemberGroup["eOther.06"] = arr1.slice(0);
            };

            _retArray.push('/t' + "</EMSCrewMemberGroup>");
            OLAPArray.push('/t' + "</EMSCrewMemberGroup>");
        }        


        ///////////////////////////
        //eOther.07////////
        _val = getValue(businessObject.elements, "eOther.07");
        if (_val == null)
        {
            OLAPArray.push('\t' + "<NaturalSuspectedIntentionalorUnintentionalDisaster>" + null + "</NaturalSuspectedIntentionalorUnintentionalDisaster>" + '\n');
            _retArray.push('/t' + "<eOther.07>" + null + "</eOther.07>");
            EMSCrewMemberGroup["eOther.07"] = null;
            v2Array.push({ section: "E23", element: "E23_04", val: null });
        }
        else
        {
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < _val.length; i++)
            {
                OLAPArray.push('\t' + "<NaturalSuspectedIntentionalorUnintentionalDisaster>" + setCodeText("eOther.07", _val[i]) + "</NaturalSuspectedIntentionalorUnintentionalDisaster>" + '\n');
                arr1.push(_val[i]);
                v2Array.push({ section: "E23", element: "E23_06", val: SetV2("eOther.07", _val[i]) });
                _retArray.push('/t' + "<eOther.07>" + _val[i] + "</eOther.07>");
            }
            eOther["eOther.07"] = arr1.slice(0);            
        };


        //eOther..08//////////
        _val = getValue(businessObject.elements, "eOther.08");
        if (_val == null)
        {
            if (isRequiredStateElement("eOther.08"))
            {
                OLAPArray.push('\t' + "<CrewMemberCompletingthisReport>" + "NOT RECORDED" + "</CrewMemberCompletingthisReport>" + '\n');
                _retArray.push('/t' + "<eOther.08" + NIL_V3NOT_RECORDED);
                eOther["eOther.08"] = v3NOT_RECORDED;
                v2Array.push({ section: "E23", element: "E23_10", val: v2NOT_RECORDED });
            }
            else
            {
                OLAPArray.push('\t' + "<CrewMemberCompletingthisReport>" + "NOT REPORTING" + "</CrewMemberCompletingthisReport>" + '\n');
                _retArray.push('/t' + "<eOther.08" + NIL_V3NOT_REPORTING);
                eOther["eOther.08"] = v3NOT_REPORTING;
                v2Array.push({ section: "E23", element: "E23_10", val: v2NOT_REPORTING });
            }
        }
        else
        {
            OLAPArray.push('\t' + "<CrewMemberCompletingthisReport>" + setCodeText("eOther.08", _val) + "</CrewMemberCompletingthisReport>" + '\n');
            _retArray.push('/t' + "<eOther.08>" + _val + "</eOther.08>")
            eOther["eOther.08"] = _val;
            v2Array.push({ section: "E23", element: "E23_10", val: D2Val("eOther.08", _val[0]) });
        };

        ////////////////////////////

        ///////////////////eOther.FileGroup
        _sectionIndex = getSectionIndex(businessObject.sections[i].attributes, "eOther.FileGroup");
        for (var x = 0; x < _sectionIndex.length; x++) 
        {
            var listOfElements = businessObject.sections[_sectionIndex[x]].attributes.elements
            OLAPArray.push('/t' + "<eOther.FileGroup>");
            _retArray.push('/t' + "<eOther.FileGroup>");
            
            //eOther.09//////////
            _val = getValue(listOfElements, "eOther.09");
            if (_val == null)
            {
                OLAPArray.push('\t' + "<ExternalElectronicDocuments>" + null + "</ExternalElectronicDocuments>" + '\n');
                _retArray.push('/t/t' + "<eOther.09>" + null + "</eOther.09>");
                eOther["eOther.09"] = null;
            }
            else
            {
                OLAPArray.push('\t' + "<ExternalElectronicDocuments>" + setCodeText("eOther.09", _val) + "</ExternalElectronicDocuments>" + '\n');
                _retArray.push('/t/t' + "<eOther.09>" + _val + "</eOther.09>");
                FileGroup["eOther.09"] = arr1.slice(0);                
            };

            //eOther.10//////////
            _val = getValue(listOfElements, "eOther.10");
            if (_val == null)
            {
                OLAPArray.push('\t' + "<FileAttachmentType>" + null + "</FileAttachmentType>" + '\n');
                _retArray.push('/t/t' + "<eOther.10>" + null + "</eOther.10>");
                eOther["eOther.10"] = null;

            }
            else
            {
                OLAPArray.push('\t' + "<FileAttachmentType>" + _val + "</FileAttachmentType>" + '\n');
                _retArray.push('/t/t' + "<eOther.10>" + _val + "</eOther.10>");
                FileGroup["eOther.10"] = arr1.slice(0);                
            };


            //eOther.11//////////
            _val = getValue(listOfElements, "eOther.11");
            if (_val == null)
            {
                OLAPArray.push('\t' + "<FileAttachmentImage>" + null + "</FileAttachmentImage>" + '\n');
                _retArray.push('/t/t' + "<eOther.11>" + null + "</eOther.11>");
                eOther["eOther.11"] = null;
            }
            else
            {
                OLAPArray.push('\t' + "<FileAttachmentImage>" + _val + "</FileAttachmentImage>" + '\n');
                _retArray.push('/t/t' + "<eOther.11>" + _val + "</eOther.11>");
                FileGroup["eOther.11"] = _val;                
            };

            
            _retArray.push('/t' + "</eOther.FileGroup>");
            OLAPArray.push('/t' + "</eOther.FileGroup>");
        }
        ///////////////////////////////////eOther.SignatureGroup

        
        ///////////////////eOther.FileGroup
        _sectionIndex = getSectionIndex(businessObject.sections[i].attributes, "eOther.SignatureGroup");
        for (var x = 0; x < _sectionIndex.length; x++) 
        {
            var listOfElements = businessObject.sections[_sectionIndex[x]].attributes.elements
            _retArray.push('/t' + "<eOther.SignatureGroup>");
            OLAPArray.push('/t' + "<eOther.SignatureGroup>");

            //Other.12////////
            _val = getValue(listOfElements, "eOther.12");
            if (_val == null)
            {
                OLAPArray.push('\t' + "<TypeofPersonSigning>" + null + "</TypeofPersonSigning>" + '\n');
                _retArray.push('/t/t' + "<eOther.12>" + null + "</eOther.12>");
                SignatureGroup["eOther.12"] = null;
            }
            else
            {
                OLAPArray.push('\t' + "<ExternalElectronicDocuments>" + setCodeText("eOther.12", _val) + "</ExternalElectronicDocuments>" + '\n');
                _retArray.push('/t/t' + "<eOther.12>" + _val + "</eOther.12>")
                SignatureGroup["eOther.12"] = _val;
            };

            //eOther.13
            _val = getValue(listOfElements, "eOther.13");
            if (_val == null)
            {
                OLAPArray.push('\t' + "<SignatureReason>" + null + "</SignatureReason>" + '\n');
                _retArray.push('/t/t' + "<eOther.13" + null + "</eOther.13>");
                SignatureGroup["eOther.13"] = null;
            }
            else
            {
                OLAPArray.push('\t' + "<SignatureReason>" + setCodeText("eOther.13", _val) + "</SignatureReason>" + '\n');
                _retArray.push('/t/t' + "<eOther.13>" + _val + "</eOther.13>")
                SignatureGroup["eOther.13"] = _val;
            };

            //ether.14/////////
            _val = getValue(listOfElements, "eOther.14");
            if (_val == null)
            {
                OLAPArray.push('\t' + "<TypeOfPatientRepresentative>" + null + "</TypeOfPatientRepresentative>" + '\n');
                _retArray.push('/t/t' + "<eOther.14" + null + "</eOther.14>");
                SignatureGroup["eOther.14"] = null;

            }
            else
            {
                OLAPArray.push('\t' + "<TypeOfPatientRepresentative>" + setCodeText("eOther.14", _val) + "</TypeOfPatientRepresentative>" + '\n');
                _retArray.push('/t/t' + "<eOther.14>" + _val + "</eOther.14>")
                SignatureGroup["eOther.14"] = _val;
            };

            //eOther.15//////
            _val = getValue(listOfElements, "eOther.15");
            if (_val == null)
            {
                OLAPArray.push('\t' + "<SignatureStatus>" + null + "</SignatureStatus>" + '\n');
                _retArray.push('/t/t' + "<eOther.15" + null + "</eOther.15>");
                SignatureGroup["eOther.15"] = null;
            }
            else
            {
                OLAPArray.push('\t' + "<SignatureStatus>" + setCodeText("eOther.15", _val) + "</SignatureStatus>" + '\n');
                _retArray.push('/t/t' + "<eOther.15>" + _val + "</eOther.15>")
                SignatureGroup["eOther.15"] = _val;
            };

            //eOther.16/////////
            _val = getValue(listOfElements, "eOther.16");
            if (_val == null)
            {
                OLAPArray.push('\t' + "<SignatureFileName>" + null + "</SignatureFileName>" + '\n');
                _retArray.push('/t/t' + "<eOther.16" + null + "</eOther.16>");
                SignatureGroup["eOther.16"] = null;

            }
            else
            {
                OLAPArray.push('\t' + "<SignatureFileName>" + setCodeText("eOther.15", _val) + "</SignatureFileName>" + '\n');
                _retArray.push('/t/t' + "<eOther.16>" + _val + "</eOther.16>")
                SignatureGroup["eOther.16"] = _val;
            };

            //eOther.17////////
            _val = getValue(listOfElements, "eOther.17");
            if (_val == null)
            {
                OLAPArray.push('\t' + "<SignatureFileType>" + null + "</SignatureFileType>" + '\n');
                _retArray.push('/t/t' + "<eOther.17" + null + "</eOther.17>");
                SignatureGroup["eOther.17"] = null;
            }
            else
            {
                OLAPArray.push('\t' + "<SignatureFileType>" + _val + "</SignatureFileType>" + '\n');
                _retArray.push('/t/t' + "<eOther.17>" + _val + "</eOther.17>")
                SignatureGroup["eOther.17"] = _val;
            };

            //eOther.18///////
            _val = getValue(listOfElements, "eOther.18");
            if (_val == null)
            {
                OLAPArray.push('\t' + "<SignatureGraphic>" + null + "</SignatureGraphic>" + '\n');
                _retArray.push('/t/t' + "<eOther.18" + null + "</eOther.18>");
                SignatureGroup["eOther.18"] = null;

            }
            else
            {
                OLAPArray.push('\t' + "<SignatureGraphic>" + _val + "</SignatureGraphic>" + '\n');
                SignatureGroup["eOther.18"] = _val;
                _retArray.push('/t/t' + "<eOther.18>" + _val + "</eOther.18>");
            };

            //eOther.19//////////
            _val = getValue(listOfElements, "eOther.19");
            if (_val == null)
            {
                OLAPArray.push('\t' + "<DateTimeofSignature>" + null + "</DateTimeofSignature>" + '\n');
                _retArray.push('/t/t' + "<eOther.19" + null + "</eOther.19>");
                SignatureGroup["eOther.19"] = null;
            }
            else
            {
                OLAPArray.push('\t' + "<DateTimeofSignature>" + _val + "</DateTimeofSignature>" + '\n');
                SignatureGroup["eOther.19"] = _val;
                _retArray.push('/t/t' + "<eOther.19>" + _val + "</eOther.19>");
            };

            //eOther.20///////
            _val = getValue(listOfElements, "eOther.20");
            if (_val == null)
            {
                OLAPArray.push('\t' + "<SignatureLastName>" + null + "</SignatureLastName>" + '\n');
                _retArray.push('/t/t' + "<eOther.20" + null + "</eOther.20>");
                SignatureGroup["eOther.20"] = null;
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
