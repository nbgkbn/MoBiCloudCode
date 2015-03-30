var Utils = require('cloud/UtilitiesCC.js'); var V2Utils = require('cloud/ConversionUtilsCC.js');
exports.setE13 = function (TC) {

    if (typeof TC.eNarrative == 'undefined') {
        var E13 = {};
        E13.IsUndefined = true;
        return E13
    }
    else {

        e13.E13_01 = "";
        if (TC.eNarrative["eNarrative.01"].IsNull == false) {

            e13.E13_01 = TC.eNarrative["eNarrative.01"].vSet[0];
        }
    }

    if ((typeof e13.E13_01 != 'undefined') && (Utils.IsGo(e13.E13_01) == true))
    {
        E13.E13_01 = e13.E13_01
    }
    else
    {
        E13.E13_01 = "-10"
    };
    E13.IsUndefined = false;
    E13.ErrorList = ErrorList;
    return E13;
};