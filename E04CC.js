var Utils = require('cloud/UtilitiesCC.js');
var V2Utils = require('cloud/ConversionUtilsCC.js');
exports.setE04 = function (TC)
{    

    if (typeof TC.eCrew == 'undefined')
    {
        var E04 = {};
        E04.IsUndefined = true;
        return E04;
    }
    else {
        
        if (typeof TC.eCrew != 'undefined')
        {
            var E4Array = [];
            var E04 = [];
            for (var i = 0; i < TC.eCrew.CrewGroup.length; i++)
            {
                var eCG = {};
                eCG = TC.eCrew.CrewGroup[i];
                var E4 = new Object();

                if (typeof eCG["eCrew.01"] != 'undefined')
                {
                    E4.E04_01 = "";
                    if (eCG["eCrew.01"].IsNull != true)
                    {
                        E4.E04_01 = V2Utils.setV2("eCrew.01", eCG["eCrew.01"].vSet[0]);
                    }
                };

                if (typeof eCG["eCrew.02"] != 'undefined')
                {
                    E4.E04_03 = "";
                    if (eCG["eCrew.02"].IsNull == false)
                    {
                        E4.E04_03 = V2Utils.setV2("eCrew.02", eCG["eCrew.02"].vSet[0]);
                    }
                };

                if (typeof eCG["eCrew.03"] != 'undefined')
                {
                    E4.E04_02 = "";
                    if (eCG["eCrew.03"].IsNull == false)
                    {
                        E4.E04_02 = V2Utils.setV2("eCrew.03", eCG["eCrew.03"].vSet[0].val);
                    };
                    E4Array.push(E4);
                };
            }
        };
        var E04Array = [];
        for (var i = 0; i < E4Array.length; i++)
        {
            var obj = E4Array[i]
            var e04 = {}
            if ((typeof obj.E04_01 != 'undefined') && (Utils.IsGo(obj.E04_01) == true))
            {
                e04.E04_01 = obj.E04_01
            }
            else
            {
                e04.E04_01 = "-20"
            };

            if ((typeof obj.E04_02 != 'undefined') && (Utils.IsGo(obj.E04_02) == true))
            {
                e04.E04_02 = obj.E04_02
            }
            else
            {
                e04.E04_02 = "-20"
            };

            if ((typeof obj.E04_03 != 'undefined') && (Utils.IsGo(obj.E04_03) == true))
            {
                e04.E04_03 = obj.E04_03
            }
            else
            {
                e04.E04_03 = "-20"
            };
            E04Array.push(e04);
        }
    };   
    E04 = E04Array;
    E04.ErrorList = ErrorList;
    E04.IsUndefined = false;
    return E04;
};