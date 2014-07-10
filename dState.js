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
var NameGroup = new Object;
var AddressGroup = new Object;
var ImmunizationsGroup = new Object;
var LicensureGroup = new Object;
var CertificationLevelGroup = new Object;

var OLAPArray = [];
var _retArray = [];

var setdState = function (businessObject) {

    //console.log(businessObject);

    var _retArray = [];
    var _sectionIndex = 0;
    // console.log(businessObject);
    _retArray.push("<dPersonnel>" + '\n');
    OLAPArray.push("<dPersonnel>" + '\n');
    for (var xx = 0; xx < businessObject.length; xx++) //All dPersonnelGroup
    {
        var elementList = businessObject[xx].attributes.elements;

        _retArray.push('\t' + "<dState>" + '\n');
        OLAPArray.push('\t' + "<dState>" + '\n');
        //////////dPersonnl.01

        _val = getdStateValue(businessObject[xx].attributes.elements);
        if (_val[0] == null) 
        {
            dState["dState.01"] = null;
            OLAPArray.push('\t\t' + "<StateRequiredElement>" + null + "</StateRequiredElement>" + '\n');
            _retArray.push('\t\t\t' + "<dState.01>" + _val[0] + "</dState.01>" + '\n');
        }
        else 
        {
            console.log(_val.length)
            for (var t = 0; t < _val.length; t++) {
                arr.push(_val[t]);
                OLAPArray.push('\t\t' + "<StateRequiredElement>" + _val[t] + "</StateRequiredElement>" + '\n');
                _retArray.push('\t\t\t' + "<dState.01>" + _val[t] + "</dState.01>" + '\n');
            }
            dState["dState.01"] = arr.slice(0);

        }

        _retArray.push('\t' + "</dState>" + '\n');
        OLAPArray.push('\t' + "</dState>" + '\n');
    }

    
    for (var i = 0; i < _retArray.length ; i++) {
        XMLString = XMLString + _retArray[i];

    }
    console.log(XMLString)
    return _retArray;
};



