var Utils = require('cloud/UtilitiesCC.js');
var V2Utils = require('cloud/ConversionUtilsCC.js');
exports.setE17 = function (TheCall)
{
    var TC = TheCall;
    if (typeof TC.eProtocols == 'undefined')
    {
        var E17 = {};
        E17.IsUndefined = true;
        return E17;
    }
    else
    {
        var E17 = {};
        var E17_01 = [];

        for (var xx = 0; xx < TC.eProtocols.ProtocolGroup.length; xx++)
        {            

            if (typeof TC.eProtocols.ProtocolGroup[xx]["eProtocols.01"] != 'undefined')
            {
                
                if (TC.eProtocols.ProtocolGroup[xx]["eProtocols.01"].IsNull != true)
                {
                    E17_01.push(setV2("eProtocols.01", TC.eProtocols.ProtocolGroup[xx]["eProtocols.01"].vSet[0]));
                };
            
            };
        }
    };
    var ErrorList = [];
   // if (TheCall.HasPatient == false)
   // {

   //     E17_01.push("-25");
//    };

    E17.E17_01 = E17_01;
    E17.ErrorList = ErrorList;
    E17.IsUndefined = false;
    return E17;

};
