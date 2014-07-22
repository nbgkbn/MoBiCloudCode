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

_retArray.push = "<eLabs>";
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
var seteLabs = function (businessObject) 
{


    for (var i = 0; i < businessObject.sections.length ; i++)
    {
        elementList = businessObject.sections[i].attributes.elements;        
        if(typeof businessObject["eLabs"] != undefined)
        {
            console.log(businessObject);
            console.log(businessObject["eLabs"].length);
                
            ///////////eLabs.01    
            _val = getValue(elementList, "eLabs.01");
            if (_val == null) 
            {          
                LabsGroup["eLabs.01"] = null;
                LabsGroup["DateTimeofLaboratoryorImagingResult"] = null;
            }
            else 
            {
                LabsGroup["eLabs.01"] = _val[0];
                LabsGroup["DateTimeofLaboratoryorImagingResult"] = _val[0];
            };


            ///////////eLabs.02
            _val = getValue(elementList, "eLabs.02");
            if (_val == null) 
            {
                LabsGroup["eLabs.02"] = null;
                LabsGroup["StudyResultPriortothisUnitEMSCare"] = null;
            }
            else 
            {
                LabsGroup["eLabs.02"] = _val[0];
                LabsGroup["StudyResultPriortothisUnitEMSCare"] = _val[0];
            };
    
            ///////////////////LabResultGroup
            /////////////////////////////////////
            _sectionIndex = getSectionIndex(businessObject.sections[i].attributes, "eLabs.LabResultGroup");
            for (var x = 0; x < _sectionIndex.length; x++) 
            {
                var listOfElements = businessObject.sections[i].attributes.sections[_sectionIndex[x]].attributes.elements
                ///////////eLabs.03
                _val = getValue(businessObject.elements, "eLabs.03");
                if (_val == null) 
                {
                    LabResultGroup["eLabs.03"] = null;
                    LabResultGroup["LaboratoryResultType"] = null;
                }
                else 
                {
                    LabResultGroup["eLabs.03"] = _val[0];
                    LabResultGroup["LaboratoryResultType"] = _val[0];
                };

                ///////////eLabs.04
                _val = getValue(businessObject.elements, "eLabs.04");
                if (_val == null) 
                {
                    LabResultGroup["eLabs.04"] = null;
                    LabResultGroup["LaboratoryResult"] = null;
                }
                else 
                {
                    LabResultGroup["eLabs.04"] = _val[0];
                    LabResultGroup["LaboratoryResult"] = _val[0];
                };
            };            
            ///////////////////LabImageGroup
            _sectionIndex = getSectionIndex(businessObject.sections[i].attributes, "eLabs.LabImageGroup");
            for (var x = 0; x < _sectionIndex.length; x++) 
            {
                var listOfElements = businessObject.sections[i].attributes.sections[_sectionIndex[x]].attributes.elements

                _val = getValue(listOfElements, "eLabs.05");
                if (_val == null) 
                {
                    LabResultGroup["eLabs.05"] = null;
                    LabResultGroup["ImagingStudyType"] = null;
                }
                else 
                {
                    LabResultGroup["eLabs.05"] = _val[0];
                    LabResultGroup["ImagingStudyType"] = _val[0];
                };

                _val = getValue(listOfElements, "eLabs.06");
                if (_val == null) 
                {
                    LabResultGroup["eLabs.06"] = null;
                    LabResultGroup["ImagingStudyResults"] = null;
                }
                else 
                {
                    LabResultGroup["eLabs.06"] = _val[0];
                    LabResultGroup["ImagingStudyResults"] = _val[0];
                };

                /////////////////////////////////

                _sectionIndex = getSectionIndex(businessObject.sections[i].attributes.sections[_sectionIndex[x]].attributes.sections, "eLabs.WaveformGraphicGroup");
                for (var k = 0; k < _sectionIndex.length; k++) 
                {
                    var _waveFormElements = businessObject.sections[i].attributes.sections[_sectionIndex[x]].attributes.section[k].attributes.elements;
                    _val = getValue(_waveFormElements, "eLabs.07");
                    if (_val == null) 
                    {
                        LabResultGroup["eLabs.07"] = null;
                        LabResultGroup["ImagingStudyFileorWaveformGraphicType"] = null;          
                    }
                    else 
                    {
                        LabResultGroup["eLabs.07"] = _val[0];
                        LabResultGroup["ImagingStudyFileorWaveformGraphicType"] = _val[0];
                    };

                    _val = getValue(_waveFormElements, "eLabs.08");
                    if (_val == null) 
                    {
                        LabResultGroup["eLabs.08"] = null;
                        LabResultGroup["ImagingStudyFileorWaveformGraphic"] = null;
                    }
                    else 
                    {
                        LabResultGroup["eLabs.08"] = _val[0];
                        LabResultGroup["ImagingStudyFileorWaveformGraphic"] = _val[0];
                    };
                    
                }                
            }
            ///////////////////LabImageGroup            
        }
        return _retArray;
    };

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

   
