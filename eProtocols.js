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

var seteProcedures = function (businessObject) {
    var isNotApplicableFlag = true;  //once I have real data, set to False    

    
    for (var xx = 0; xx < businessObject.sections.length; xx++)
    {
        var elementList = businessObject.sections[xx].attributes.elements;
    
        ///////////eProtocols.01////////
        _val = getValue(elementList, "eProtocols.01");
        if (_val == null)
        {
            ProtocolsGroup["ProtocolsUsed"] = NOT_RECORDED;
            ProtocolsGroup["eProtocols.01"] = v3NOT_RECORDED;
            v2Array.push({ section: "E17", element: "E17_11", val: V2NOT_RECORDED });            
        }
        else
        {
            isNotApplicableFlag = false;
            ProtocolsGroup["eProtocols.01"] = _val[0];
            ProtocolsGroup["ProtocolsUsed"] = setCodeText("eProtocols.01", _val[0]);
            v2Array.push({ section: "E17", element: "E17_11", val: setV2("eProtocols.01", _val[0]) });
        };

        ///////////eProtocols.02////////
        _val = getValue(elementList, "eProtocols.02");
        if (_val == null)
        {
            ProtocolsGroup["eProtocols.02"] = V3NOT_RECORDED;
            ProtocolsGroup["ProtocolAgeCategory"] = NOT_RECORDED;
        }
        else
        {
            isNotApplicableFlag = false;
            ProtocolsGroup["eProtocols.02"] = _val[0];
            ProtocolsGroup["ProtocolAgeCategory"] = setCodeText("eProtocols.02", _val[0]);

        };

    }

};

var getValue = function (businessObject, valueObject) {
    //console.log(businessObject.length);
    var _retValue = null;
    var _bFound = false;
    i = 0;
    while (i < businessObject.length) {
        if (_bFound == false) {
            if (businessObject[i].attributes.title == valueObject) {
                _bFound = true;
                if (businessObject[i].attributes.value == undefined) {

                    _retVal = null;
                }
                else {
                    _retVal = businessObject[i].attributes.value;
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
        case "eProtocols.01":

            if (eProtocols01[valueArray[0]] == undefined) {
                _retArray.push(valueArray[0] + "UNDEFINED");
            }
            else {
                _retArray.push(eProtocols01[valueArray[0]]);
            }
            break;
        default:
            _retArray.push(NEMSISElementNumber = " version 2 not found");
    }

    return _retArray;
};

    var eProtocols01 = {
    "9914001":	"6730",
    "9914003":	"6740",
    "9914005":	"6730",
    "9914007":	"6760",
    "9914009":	"6730",
    "9914011":	"6850",
    "9914013":	"6850",
    "9914015":	"6850",
    "9914017":	"6850",
    "9914019":	"7130",
    "9914021":	"6785",
    "9914023":	"6875",
    "9914025":	"6875",
    "9914027":	"6980",
    "9914029":	"6960",
    "9914031":	"6980",
    "9914033":  "6911",		
    "9914035":	"6911",	
    "9914037":	"6913",
    "9914039":	"6911",
    "9914041":	"6925",
    "9914043":	"6914",
    "9914045":	"6920",
    "9914047":	"6915",
    "9914049":	"6916",
    "9914051":	"6800",
    "9914053":	"6810",
    "9914055":	"6850",
    "9914057":	"6880",
    "9914059":	"6910",
    "9914061":	"6930",
    "9914063":	"7220",
    "9914065":	"6881",
    "9914067":	"6990",
    "9914069":	"6881",	
    "9914071":	"7040",	
    "9914073":	"7180",
    "9914075":	"7220",
    "9914077":	"7215",
    "9914079":	"6820",
    "9914081":	"6820",
    "9914083":	"7000",
    "9914085":	"6840",
    "9914087":	"6850",
    "9914089":	"7000",
    "9914091":	"6892",
    "9914093":	"6890",
    "9914095":	"6900",
    "9914097":	"6920",
    "9914099":	"6925",
    "9914101":	"6940",
    "9914103":	"7000",
    "9914105":	"7000",
    "9914107":	"7175",
    "9914109":	"6720",
    "9914111":	"6770",
    "9914113":	"6780",
    "9914115":	"6830",
    "9914117":	"6860",
    "9914119":	"6885",
    "9914121":	"6945",
    "9914123":	"6950",
    "9914125":	"6965",
    "9914127":	"6970",
    "9914129":	"7160",
    "9914131":	"7251",
    "9914133":	"7010",
    "9914135":	"7030",
    "9914137":	"7140",
    "9914139":	"7160",
    "9914141":	"7170",
    "9914143":	"7200",
    "9914145":	"7200",
    "9914147":	"6791",
    "9914149":	"7210",
    "9914151":	"7240",
    "9914153":	"7040",
    "9914155":	"6935",
    "9914157":	"7020",
    "9914159":	"6935",
    "9914161":	"6935",
    "9914163":	"7020",
    "9914165":	"7040",
    "9914167":	"6911",
    "9914169":	"6850",
    "9914171":	"6850",
    "9914173":	"6911",
    "9914175":	"7220",
    "9914177":	"7220",
    "9914179":	"7220",
    "9914181":	"7220",	
    "9914183":	"7220",
    "9914185":	"7220",
    "9914187":	"6810",
    "9914189":	"7040",
    "9914191":	"7220",
    "9914193":	"7000",
    "9914195":	"6945",	
    "9914197":	"7220",	
    "9914199":	"7240"
	

    }