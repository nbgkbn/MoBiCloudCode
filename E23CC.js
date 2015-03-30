var Utils = require('cloud/UtilitiesCC.js');
var V2Utils = require('cloud/ConversionUtilsCC.js');
exports.setE23 = function (TheCall) {
    var TC = TheCall;
    if (typeof TC.eOther == 'undefined') {
        var E23 = {};
        E23.IsUndefined = true;
        return E23;
    }
    else
    {
        var CrewExposure = false;
        var e23 = {};

        if (typeof TC.eOther["eOther.01"] != 'undefined') {
            e23.E23_01 = "";
            if (TC.eOther["eOther.01"].IsNull != true) {
                e23.E23_01 = TC.eOther["eOther.01"].vSet[0];
            }
        };
        
        if (typeof TC.eOther["eOther.02"] != 'undefined') {
            var E23_02 = [];
            if (TC.eOther["eOther.02"].IsNull != true) {
                for (var d = 0; d < TC.eOther["eOther.02"].vSet.length; d++) {
                    E23_02.push(TC.eOther["eOther.02"].vSet[0]);
                }
                e23.E23_02 = E23_02
            }
        };

        var E23_05 = [];
        var E23_06 = [];
        var E23_07 = [];
        if (typeof TC.eOther.EMSCrewMemberGroup != 'undefined') {
            for (var d = 0; d < TC.eOther.EMSCrewMemberGroup.length; d++) {
                if (typeof TC.eOther.EMSCrewMemberGroup[d]["eOther.03"] != 'undefined')
                {
                    //Determine if Crewmember exposed
                    if (typeof TC.eOther.EMSCrewMemberGroup[d]["eOther.05"] != 'undefined')
                    {
                        if (TC.eOther.EMSCrewMemberGroup[d]["eOther.05"].IsNull == false)
                        {
                            E23_05.push(V2Utils.setV2("eOther.05", TC.eOther.EMSCrewMemberGroup[d]["eOther.05"].vSet[0]));
                            if (TC.eOther.EMSCrewMemberGroup[d]["eOther.05"].vSet[0] == '9923003') //Yes, Crew Exposed
                            {
                                CrewExposure = true;
                            }

                        };
                        e23.E23_05 = E23_05;

                    };

                    
                    if (typeof TC.eOther.EMSCrewMemberGroup[d]["eOther.04"] != 'undefined')
                    {
                        if (TC.eOther.EMSCrewMemberGroup[d]["eOther.04"].IsNull == false)
                        {
                            for (var i = 0; i < TC.eOther.EMSCrewMemberGroup[d]["eOther.04"].vSet.length; i++)
                            {
                                E23_07.push(V2Utils.setV2("eOther.04", TC.eOther.EMSCrewMemberGroup[d]["eOther.04"].vSet[i]));
                            };
                            e23.E23_07 = E23_07;
                        }
                    };

                    var E23_03 = [];
                    if (TC.eOther.EMSCrewMemberGroup[d]["eOther.03"].IsNull == false)
                    {
                        for (var i = 0; i < TC.eOther.EMSCrewMemberGroup[d]["eOther.03"].vSet.length; i++)
                        {
                            E23_03.push(V2Utils.setV2("eOther.03", TC.eOther.EMSCrewMemberGroup[d]["eOther.03"].vSet[i]));
                        };
                        e23.E23_03 = E23_03;
                    };

                    if (typeof TC.eOther.EMSCrewMemberGroup[d]["eOther.06"] != 'undefined') {
                        if (TC.eOther.EMSCrewMemberGroup[d]["eOther.06"].IsNull == false) {
                            for (var i = 0; i < TC.eOther.EMSCrewMemberGroup[d]["eOther.06"].vSet.length; i++) {
                                E23_06.push(V2Utils.setV2("eOther.06", TC.eOther.EMSCrewMemberGroup[d]["eOther.06"].vSet[i]));
                            };
                            e23.E23_06 = E23_06;
                        }
                    }
                }
            }
        };

        if (typeof TC.eOther["eOther.07"] != 'undefined') {
            e23.E23_06 = E23_06;
            if (TC.eOther["eOther.07"].IsNull == false) {

                for (var d = 0; d < TC.eOther["eOther.07"].vSet.length; d++) {
                    E23_04.push(V2Utils.setV2("eOther.07", TC.eOther["eOther.07"].vSet[i]));
                };
                e23.E23_04 = E23_04;
            }
        };


        if (typeof TC.eOther["eOther.08"] != 'undefined') {
            e23.E23_10 = "";
            if (TC.eOther["eOther.08"].IsNull == false) {

                e23.E23_10 = TC.eOther["eOther.08"].CodeText[0];
            }
        };
        /////////////////////////////////////////
        /////////////////////////////////////////
        var E23 = {};
        if ((typeof e23.E23_01 != 'undefined') && (Utils.IsGo(e23.E23_01) == true)) {
            E23.E23_01 = e23.E23_01;
        }
        else {
            E23.E23_01 = "-10";
        }

        var e2302 = [];
        if ((typeof e23.E23_02 != 'undefined') && (Utils.IsGo(e23.E23_02) == true)) {
            e2302 = e23.E23_02;
            
        }
        else {
            if (TheCall.HasPatient == false) {
                e2302.push("-25");
            }
            else
            {
                e2302.push("-10");

            }
        };
        E23.E23_02 = e2302;

        var e2303 = [];
        if ((typeof e23.E23_03 != 'undefined') && (Utils.IsGo(e23.E23_03) == true)) {
            e2303 = e23.E23_03;
        }
        else {
            if (TheCall.HasPatient == false) {
                e2303.push("-25");
            }
            else
            {
                e2303.push("-10");                
            }
        };
        E23.E23_03 = e2303;

        var e2304 = [];
        if ((typeof e23.E23_04 != 'undefined') && (Utils.IsGo(e23.E23_04) == true)) {
            e2304 = e23.E23_04;
        }
        else {
            if (TheCall.HasPatient == false) {
                e2304.push("-25");
            }
            else
            {
                e2304.push("-10");
            }
        };
        E23.E23_04 = e2304;

        var Contact = false;
        if ((typeof e23.E23_05 != 'undefined') && (Utils.IsGo(e23.E23_05) == true)) {
            E23.E23_05 = e23.E23_05;
            Contact = true;
        }
        else {
            if (TheCall.HasPatient == false) {
                E23.E23_05 = "-25";
            }
            else {
                E23.E23_05 = "-10";
            }
        };

        var e2306 = [];
        if (Contact == true)
        {            
            if ((typeof e23.E23_06 != 'undefined') && (Utils.IsGo(e23.E23_06) == true)) {
                e2306 = e23.E23_06;
            }
            else {

                e2306.push("-10");
            }
        }
        else
        {
            e2306.push("-25");
        };
        E23.E23_06 = e2306;

        var e2307 = [];
        if (Contact == true)
        {            
            if ((typeof e23.E23_07 != 'undefined') && (Utils.IsGo(e23.E23_07) == true))
            {
                e2307 = e23.E23_07;
            }
            else {

                e2307.push("-10");
            }
        }
        else {
            e2307.push("-25");
        };
        E23.E23_07 = e2307;

        if ((typeof e23.E23_08 != 'undefined') && (Utils.IsGo(e23.E23_08) == true)) {
            E23.E23_08 = e23.E23_08;
        }
        else {

            E23.E23_08 = "-10";
        };

        var E2309 = false;
        if ((typeof e23.E23_09 != 'undefined') && (Utils.IsGo(e23.E23_09) == true)) {
            E23.E23_09 = e23.E23_09;
            E2309 = true;
        }
        else {

            E23.E23_09 = "-10";
        };
        //if (ReportWrit == true) {
        if ((typeof e23.E23_11 != 'undefined') && (Utils.IsGo(e23.E23_11) == true)) {
            E23.E23_11 = e23.E23_11;
            E2309 = true;
        }
        else {
            E23.E23_11 = "-10";
        };
        //}
        //else {
        //    E23.E23_11 = "-25";
        // }

        
        if ((typeof e23.E23_10 != 'undefined') && (Utils.IsGo(e23.E23_10) == true))
        {
            E23.E23_10 = e23.E23_10;
            E2309 = true;
        }
        else
        {
            E23.E23_10 = "-10";
        };
        
        
        


        
    };
    E23.ErrorList = ErrorList;
    E23.IsUndefined = false;
    return E23;

};
