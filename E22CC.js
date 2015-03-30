var Utils = require('cloud/UtilitiesCC.js');
var V2Utils = require('cloud/ConversionUtilsCC.js');
exports.setE22 = function (TheCall)
{
    var TC = TheCall;

    if (typeof TC.eOutcome == 'undefined') {
        var E22 = {};
        E22.IsUndefined = true;
        return E22;
    }
    else {
        var e22 = {};

        if (typeof TC.eOutcome["eOutcome.01"] != 'undefined') {
            e22.E22_01 = "";
            if (TC.eOutcome["eOutcome.01"].IsNull == false) {
                e22.E22_01 = V2Utils.setV2("eOutcome.01", TC.eOutcome["eOutcome.01"].vSet[0]);
            }
        };

        if (typeof TC.eOutcome["eOutcome.02"] != 'undefined') {
            e22.E22_02 = "";
            if (TC.eOutcome["eOutcome.02"].IsNull == false) {
                e22.E22_02 = V2Utils.setV2("eOutcome.02", TC.eOutcome["eOutcome.02"].vSet[0]);
            }
        };
        //Law Enforcement ID
        if (typeof TC.eOutcome["eOutcome.03"] != 'undefined') {
            if (TC.eOutcome["eOutcome.03"].IsNull == false) {
                if (TC.eOutcome["eOutcome.03"].vSet[0] == "4303009");  //Fire Incident Report
                {
                    if (typeof TC.eOutcome["eOutcome.04"] != 'undefined') {
                        if (TC.eOutcome["eOutcome.04"].IsNull == false) {
                            e22.E22_03 = TC.eOutcome["eOutcome.04"].vSet[0];
                        }
                    }
                }
            }
        };

        //Trauma Registry ID
        if (typeof TC.eOutcome["eOutcome.03"] != 'undefined') {
            if (TC.eOutcome["eOutcome.03"].IsNull == false) {
                if (TC.eOutcome["eOutcome.03"].vSet[0] == "4303025");  //Fire Incident Report
                {
                    if (typeof TC.eOutcome["eOutcome.04"] != 'undefined') {
                        if (TC.eOutcome["eOutcome.04"].IsNull == false) {
                            e22.E22_04 = TC.eOutcome["eOutcome.04"].vSet[0];
                        }
                    }
                }
            }
        };

        //Fire Incident Report
        if (typeof TC.eOutcome["eOutcome.03"] != 'undefined') {
            if (TC.eOutcome["eOutcome.03"].IsNull == false) {
                if (TC.eOutcome["eOutcome.03"].vSet[0] == "4303003");  
                {
                    if (typeof TC.eOutcome["eOutcome.04"] != 'undefined') {
                        if (TC.eOutcome["eOutcome.04"].IsNull == false) {
                            e22.E22_05 = TC.eOutcome["eOutcome.04"].vSet[0];
                        }
                    }
                }
            }
        };

        //Patient ID
        if (typeof TC.eOutcome["eOutcome.03"] != 'undefined') {
            if (TC.eOutcome["eOutcome.03"].IsNull == false) {
                if (TC.eOutcome["eOutcome.03"].vSet[0] == "4303017");  
                {
                    if (typeof TC.eOutcome["eOutcome.04"] != 'undefined') {
                        if (TC.eOutcome["eOutcome.04"].IsNull == false) {
                            e22.E22_06 = TC.eOutcome["eOutcome.04"].vSet[0];
                        }
                    }
                }
            }
        };

        var E22 = {};

        if ((typeof e22.E22_01 != 'undefined') && (Utils.IsGo(e22.E22_01) == true)) {
            E22.E22_01 = e22.E22_01
        };

        if ((typeof e22.E22_02 != 'undefined') && (Utils.IsGo(e22.E22_02) == true)) {
            E22.E22_02 = e22.E22_02
        };
    };
    E22.IsUndefined = false;
    E22.ErrorList = ErrorList;
    return E22;
};