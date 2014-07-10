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
var seteHistory = function (businessObject) 
{
    if(typeof businessObject == undefined)
    {
        //SetNotApplicable();
    }
    _retArray.push("<eLabs>" + '\n');
    OLAPArray.push("<eLabs>" + '\n');

    for (var i = 0; i < businessObject.sections.length ; i++)
    {
        elementList = businessObject.sections[i].attributes.elements;
        _retArray.push = ('/t' +"<eLabs.LabsGroup>");
        if(typeof businessObject["eLabs"] != undefined)
        {
            console.log(businessObject);
            console.log(businessObject["eLabs"].length);
                
            ///////////eLabs.01    
            _val = getValue(elementList, "eLabs.01");
            if (_val == null) 
            {          
                OLAPArray.push('\t\t\t' + "<DateTimeofLaboratoryorImagingResult>" + null + "</DateTimeofLaboratoryorImagingResult>" + '\n');
                LabsGroup["eLabs.01"] = null;
                _retArray.push('/t/t' +"<eLabs.01>" + null + "</eLabs.01>")
            }
            else 
            {
                OLAPArray.push('\t\t\t' + "<DateTimeofLaboratoryorImagingResult>" + _val+ "</DateTimeofLaboratoryorImagingResult>" + '\n');
                _retArray.push('/t/t' +"<eLabs.01>" + _val + "</eLabs.01>")
                LabsGroup["eLabs.01"] = _val;
            };


            ///////////eLabs.02
            _val = getValue(elementList, "eLabs.02");
            if (_val == null) 
            {
                OLAPArray.push('\t\t\t' + "<StudyResultPriortothisUnitEMSCare>" + null + "</StudyResultPriortothisUnitEMSCare>" + '\n');
                LabsGroup["eLabs.01"] = null;
                _retArray.push('/t/t' +"<eLabs.02>" + null + "</eLabs.02>")
            }
            else 
            {
                OLAPArray.push('\t\t\t' + "<StudyResultPriortothisUnitEMSCare>" + setCodeText("eLabs.02", _val) + "</StudyResultPriortothisUnitEMSCare>" + '\n');
                _retArray.push('/t/t' +"<eLabs.02>" + _val + "</eLabs.02>")
                LabsGroup["eLabs.02"] = _val;
            };
    
            ///////////////////LabResultGroup
            /////////////////////////////////////
            _sectionIndex = getSectionIndex(businessObject.sections[i].attributes, "eLabs.LabResultGroup");
            for (var x = 0; x < _sectionIndex.length; x++) 
            {
                var listOfElements = businessObject.sections[i].attributes.sections[_sectionIndex[x]].attributes.elements
                _retArray.push ('/t/t' +"<eLabs.LabResultGroup>");
                OLAPArray.push ('/t/t' +"<eLabs.LabResultGroup>");

                ///////////eLabs.03
                _val = getValue(businessObject.elements, "eLabs.03");
                if (_val == null) 
                {
                    OLAPArray.push('\t\t\t' + "<LaboratoryResultType>" + null + "</LaboratoryResultType>" + '\n');
                    LabResultGroup["eLabs.03"] = null;
                    _retArray.push('/t/t' +"<eLabs.03>" + null + "</eLabs.03>")

                }
                else 
                {
                    OLAPArray.push('\t\t\t' + "<LaboratoryResultType>" + setCodeText("eLabs.03", _val) + "</LaboratoryResultType>" + '\n');
                    _retArray.push('/t/t' +"<eLabs.03>" + _val + "</eLabs.03>")
                    LabResultGroup["eLabs.03"] = _val;
                };

                ///////////eLabs.04
                _val = getValue(businessObject.elements, "eLabs.04");
                if (_val == null) 
                {
                    OLAPArray.push('\t\t\t' + "<LaboratoryResult>" + null + "</LaboratoryResult>" + '\n');
                    LabResultGroup["eLabs.04"] = null;
                    _retArray.push('/t/t' +"<eLabs.04>" + null + "</eLabs.04>")          
                }
                else 
                {
                    OLAPArray.push('\t\t\t' + "<LaboratoryResult>" + _val + "</LaboratoryResult>" + '\n');
                    _retArray.push('/t/t' +"<eLabs.04>" + _val + "</eLabs.04>")
                    LabResultGroup["eLabs.04"] = _val;
                };
                _retArray.push ('/t/t' +"<eLabs.LabResultGroup>");
                OLAPArray.push ('/t/t' +"<eLabs.LabResultGroup>");
                
            };            
            ///////////////////LabImageGroup
            _sectionIndex = getSectionIndex(businessObject.sections[i].attributes, "eLabs.LabImageGroup");
            for (var x = 0; x < _sectionIndex.length; x++) 
            {
                var listOfElements = businessObject.sections[i].attributes.sections[_sectionIndex[x]].attributes.elements
                _retArray.push ('/t/t' +"<eLabs.LabImageGroup>");
                OLAPArray.push ('/t/t' +"<eLabs.LabImageGroup>");

                _val = getValue(listOfElements, "eLabs.05");
                if (_val == null) 
                {
                    OLAPArray.push('\t\t\t' + "<ImagingStudyType>" + null + "</ImagingStudyType>" + '\n');
                    LabResultGroup["eLabs.05"] = null;
                    _retArray.push('/t/t' +"<eLabs.05>" + null + "</eLabs.05>")          
                }
                else 
                {
                    OLAPArray.push('\t\t\t' + "<ImagingStudyType>" + setCodeText("eLabs.05", _val) + "</ImagingStudyType>" + '\n');
                    LabImageGroupArray.push('/t/t' +"<eLabs.05>" + _val + "</eLabs.05>")
                    LabImageGroup["eLabs.05"] = _val;
                };

                _val = getValue(listOfElements, "eLabs.06");
                if (_val == null) 
                {
                    OLAPArray.push('\t\t\t' + "<ImagingStudyResults>" + null + "</ImagingStudyResults>" + '\n');
                    LabResultGroup["eLabs.06"] = null;
                    _retArray.push('/t/t' +"<eLabs.06>" + null + "</eLabs.06>")          

                }
                else 
                {
                    OLAPArray.push('\t\t\t' + "<ImagingStudyResults>" +  _val+ "</ImagingStudyResults>" + '\n');
                    LabImageGroupArray.push('/t/t' +"<eLabs.06>" + _val + "</eLabs.06>")
                    LabImageGroup["eLabs.06"] = _val;
                };

                /////////////////////////////////

                _sectionIndex = getSectionIndex(businessObject.sections[i].attributes.sections[_sectionIndex[x]].attributes.sections, "eLabs.WaveformGraphicGroup");
                for (var k = 0; k < _sectionIndex.length; k++) 
                {
                    var _waveFormElements = businessObject.sections[i].attributes.sections[_sectionIndex[x]].attributes.section[k].attributes.elements;

                    _retArray.push ('/t/t/t' +"<eLabs.WaveformGraphicGroup>");
                    OLAPArray.push ('/t/t/t' +"<eLabs.WaveformGraphicGroup>");

                    _val = getValue(_waveFormElements, "eLabs.07");
                    if (_val == null) 
                    {
                        OLAPArray.push('/t/t/t/t' + "<ImagingStudyFileorWaveformGraphicType>" + null + "</ImagingStudyFileorWaveformGraphicType>" + '\n');
                        LabResultGroup["eLabs.07"] = null;
                        _retArray.push('/t/t/t/t' +"<eLabs.07>" + null + "</eLabs.06>")          
          
                    }
                    else 
                    {
                        OLAPArray.push('/t/t/t/t' + "<ImagingStudyFileorWaveformGraphicType>" + _val+ "</ImagingStudyFileorWaveformGraphicType>" + '\n');
                        _retArray.push('/t/t/t/t' +"<eLabs.07>" + _val + "</eLabs.07>")
                        WaveformGraphicGroup["eLabs.07"] = _val;
                    };

                    _val = getValue(_waveFormElements, "eLabs.08");
                    if (_val == null) 
                    {
                        OLAPArray.push('/t/t/t/t' + "<ImagingStudyFileorWaveformGraphic>" + null + "</ImagingStudyFileorWaveformGraphic>" + '\n');
                        LabResultGroup["eLabs.08"] = null;
                        _retArray.push('/t/t/t/t' +"<eLabs.08>" + null + "</eLabs.08>")                    
                    }
                    else 
                    {
                        OLAPArray.push('/t/t/t/t' + "<ImagingStudyFileorWaveformGraphic>" + _val+ "</ImagingStudyFileorWaveformGraphic>" + '\n');
                        _retArray.push('/t/t/t/t' +"<eLabs.08>" + _val + "</eLabs.08>")
                        WaveformGraphicGroup["eLabs.08"] = _val;
                    };
                    _retArray.push ('/t/t/t' +"</eLabs.WaveformGraphicGroup>");
                    OLAPArray.push ('/t/t/t' +"</eLabs.WaveformGraphicGroup>");
                    
                }                
                _retArray.push('/t/t' +"</LabImageGroup>");
                OLAPArray.push('/t/t' +"</LabImageGroup>");
            }
            ///////////////////LabImageGroup

            
            OLAPArray.push('/t/t' + "</eLabs.LabResultGroup>");
            OLAPArray.push = ('/t' + "</eLabs.LabsGroup>");
            OLAPArray.push = "</eLabs>";        
            _retArray.push('/t/t' +"</eLabs.LabResultGroup>");
            _retArray.push = ('/t' +"</eLabs.LabsGroup>");
            _retArray.push = "</eLabs>";
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

   
