var Utils = require('cloud/UtilitiesCC.js');
var V2Utils = require('cloud/ConversionUtilsCC.js');
exports.setE19 = function (TheCall) {
    var TC = TheCall;
    var ErrorList = [];
    
var Airway=["232708009", "232664002","425447009","243140006","243142003","182705007","264957007",
    "55628002", "47545007","241726007","232690004","232689008","232692007","428482009","425543005",
    "232707004","23690002","232685002","232679009","418613003", "232674004","241689008","397874007",
    "424979004","78121007", "673005","243180002", "182692007","232673005", "7443007", "45851008",
    "397892004","230040009", "427753009", "2267008", "448442005","385857005"]

    if (typeof TC.eProcedures == 'undefined') {
        var E19 = {};
        E19.IsUndefined = true;
        return E19;

    }
    else
    {
        var e19 = {};
        var E19Array = [];
        for (var xx = 0; xx < TC.eProcedures.ProcedureGroup.length; xx++)
        {
            var obj = TC.eProcedures.ProcedureGroup[xx]

            if (typeof obj["eProcedures.01"] != 'undefined')
            {

                e19.E19_01 = "";
                if (obj["eProcedures.01"].IsNull == false)
                {
                    e19.E19_01 = obj["eProcedures.01"].vSet[0];
                }
            };
            
            if (typeof obj["eProcedures.02"] != 'undefined')
            {
                e19.E19_02 = "";
                if (obj["eProcedures.02"].IsNull == false)
                {
                    e19.E19_02 = V2Utils.setV2("eProcedures.02", obj["eProcedures.02"].vSet[0]);
                }
            };


            if (typeof obj["eProcedures.03"] != 'undefined')
            {
                e19.E19_03 = "";
                if (obj["eProcedures.03"].IsNull == false)
                {
                    e19.E19_03 = V2Utils.setV2("eProcedures.03", obj["eProcedures.03"].vSet[0]);
                }
            };


            if (typeof obj["eProcedures.04"] != 'undefined')
            {
                e19.E19_04 = "";
                if (obj["eProcedures.04"].IsNull == false)
                {
                    e19.E19_04 = obj["eProcedures.04"].vSet[0];
                }
            };


            if (typeof obj["eProcedures.05"] != 'undefined')
            {
                e19.E19_05 = "";
                if (obj["eProcedures.05"].IsNull == false)
                {
                    e19.E19_05 = obj["eProcedures.05"].vSet[0];
                }
            };

            if (typeof obj["eProcedures.06"] != 'undefined')
            {
                e19.E19_06 = "";
                if (obj["eProcedures.06"].IsNull == false)
                {
                    e19.E19_06 = V2Utils.setV2("eProcedures.06", obj["eProcedures.06"].vSet[0]);
                }
            };


            if (typeof obj["eProcedures.07"] != 'undefined')
            {
                var E19_07 = [];
                if (obj["eProcedures.07"].IsNull == false)
                {
                    for (var i = 0; i < obj["eProcedures.07"].vSet.length; i++)
                    {
                        E19_07.push(V2Utils.setV2("eProcedures.07", obj["eProcedures.07"].vSet[i]));
                    };
                    e19.E19_07 = E19_07;
                }
            };

            if (typeof obj["eProcedures.08"] != 'undefined')
            {
                e19.E19_08 = "";
                if (obj["eProcedures.08"].IsNull == false)
                {
                    e19.E19_08 = V2Utils.setV2("eProcedures.08", obj["eProcedures.08"].vSet[0]);
                }
            };
            
            if (typeof obj["eProcedures.09"] != 'undefined')
            {
                e19.E19_09 = "";
                if (obj["eProcedures.09"].IsNull == false)
                {
                    e19.E19_09 = V2Utils.setV2("eProcedures.09", obj["eProcedures.09"].vSet[0]);
                }
            };


            if (typeof obj["eProcedures.11"] != 'undefined')
            {
                e19.E19_10 = "";
                if (obj["eProcedures.11"].IsNull == false)
                {
                    e19.E19_10 = V2Utils.setV2("eProcedures.11", obj["eProcedures.11"].vSet[0]);
                }
            };


            if (typeof obj["eProcedures.12"] != 'undefined')
            {
                e19.E19_11 = "";
                if (obj["eProcedures.12"].IsNull != true)
                {
                    e19.E19_11 = obj["eProcedures.12"].vSet[0];
                }
            };


            if (typeof obj["eProcedures.13"] != 'undefined')
            {
                e19.E19_12 = "";
                if (obj["eProcedures.13"].IsNull != true)
                {
                    e19.E19_12 = V2Utils.setV2("eProcedures.13", obj["eProcedures.13"].vSet[0]);
                }
            };


            if (typeof TC.eAirway != 'undefined') {
                e19.E19_13 = "";
                if (typeof TC.eAirway["eAirway.03"] != 'undefined') {
                    if (TC.eAirway["eAirway.03"] == "4003003") {
                        e19.E19_13 = V2Utils.setV2("eProcedures.13", TC.eProcedures.ProcedureGroup[xx]["eProcedures.13"].vSet[0]);
                    }
                }
            };
            E19Array.push(e19)
            
        };
        
    };
        
            var E19 = {};
            
    TheCall.HasPatient == true
    //if (TheCall.HasPatient == false) {
    if (true == false) {
        E19.E19_02 = "-25";
        E19.E19_03 = "-25";
        E19.E19_04 = "-25";
        E19.E19_05 = "-25";
        E19.E19_06 = "-25";
        E19.E19_07 = "-25";
    }
    else {

        var HasProc;
        var HasProcTime;

        if (E19Array.length > 0) {
            var E1901 = [];
            for (var xx = 0; xx < E19Array.length; xx++) 
            {
                var e19 = E19Array[xx]
                var E19a = {}
                HasProcTime = false
      
                if ((typeof e19.E19_01 != 'undefined') && (e19.E19_01.length > 0))
                {
                    E19a.E19_01 = e19.E19_01
                    HasProcTime = true
                };
                
                if ((typeof e19.E19_02 != 'undefined') && (e19.E19_02.length > 0)) {
                    E19a.E19_02 = e19.E19_02
                };
                
                HasProc = false;
                if ((typeof e19.E19_03 != 'undefined') && (e19.E19_03.length > 0))
                {
                    E19a.E19_03 = e19.E19_03
                    HasProc = true;
                };
                
                //if (HasProc == true) {
                if ((typeof e19.E19_04 != 'undefined') && (e19.E19_04.length > 0)) {
                    E19a.E19_04 = e19.E19_04
                };
                

                if (HasProc == true) {
                    if ((typeof e19.E19_05 != 'undefined') && (e19.E19_05.length > 0)) {
                        E19a.E19_05 = e19.E19_05
                    }
                    else {
                        E19a.E19_05 = "-10"
                    }
                }
                else {
                    E19a.E19_05 = "-25"
                };

                if (HasProc == true) {
                    if ((typeof e19.E19_06 != 'undefined') && (e19.E19_06.length > 0)) {
                        E19a.E19_06 = e19.E19_06
                    }
                    else {
                        E19a.E19_06 = "-10"
                    }
                }
                else {
                    E19a.E19_06 = "-25"
                };

                var e1907 = [];
                if (HasProc == true) {
                    if ((typeof e19.E19_07 != 'undefined') && (e19.E19_07.length > 0)) {
                        e1907.push(e19.E19_07);
                    }
                    else {
                        e1907.push("-10")
                    }
                }
                else {
                    e1907.push("-25")
                };
                E19a.E19_07 = e1907;


                if (HasProc == true) {
                    if ((typeof e19.E19_08 != 'undefined') && (e19.E19_08.length > 0)) {
                        E19a.E19_08 = e19.E19_08
                    }
                    else {
                        E19a.E19_08 = "-10"
                    }
                }
                else {
                    E19a.E19_08 = "-25"
                };

                if (HasProc == true) {
                    if ((typeof e19.E19_09 != 'undefined') && (e19.E19_09.length > 0)) {
                        E19a.E19_09 = e19.E19_09
                    }
                    else {
                        E19a.E19_09 = "-10"
                    }
                }
                else {
                    E19a.E19_09 = "-25"
                };


                if (HasProc == true) {
                    if ((typeof e19.E19_10 != 'undefined') && (e19.E19_10.length > 0)) {
                        E19a.E19_10 = e19.E19_10
                    }
                    else {
                        E19a.E19_10 = "-10"
                    }
                }
                else {
                    E19a.E19_10 = "-25"
                };


                if (HasProc == true) {
                    if ((typeof e19.E19_11 != 'undefined') && (e19.E19_11.length > 0)) {
                        E19a.E19_11 = e19.E19_11
                    }
                    else {
                        E19a.E19_11 = "-10"
                    }
                }
                else {
                    E19a.E19_11 = "-25"
                };
                E1901.push(E19a);
            };
            if (E1901.length > 0)
            {
                var E19_01_0 = {};
                E19_01_0 = E1901;
                E19.E19_01_0 = E19_01_0;
            }


            if (HasProc == true) {
                if ((typeof e19.E19_12 != 'undefined') && (e19.E19_12.length > 0)) {
                    E19a.E19_12 = e19.E19_12
                }
                else {
                    E19a.E19_12 = "-10"
                }
            }
            else {
                E19a.E19_12 = "-25"
            };


            ///airway
            if (TheCall.HasAirway == true) {
                if ((typeof e19.E19_13 != 'undefined') && (e19.E19_13.length > 0)) {
                    E19a.E19_13 = e19.E19_13
                }
                else {
                    E19a.E19_13 = "-10"
                }
            }
            else {
                E19a.E19_13 = "-25"
            };

            if (TheCall.HasAirway == true) {
                if ((typeof e19.E19_14 != 'undefined') && (e19.E19_14.length > 0)) {
                    E19a.E19_14 = e19.E19_14
                }
                else {
                    E19a.E19_14 = "-10"
                }
            }
            else {
                E19a.E19_14 = "-25"
            };

            
            if (E19_01_0.length > 0) {
                var E19_01_0 = E19_01_0;
                E19.E19_01_0 = E19_01_0;
            }
            
        
        }
    
        
    };

    E19.ErrorList = ErrorList;
    E19.IsUndefined = false;
    return E19
};

