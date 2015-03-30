var Utils = require('cloud/UtilitiesCC.js');
var V2Utils = require('cloud/ConversionUtilsCC.js');
exports.setE09 = function (TheCall)
{
    var TC = TheCall;
    if (typeof TC.eSituation == 'undefined') {

        var E09 = {};
        E09.IsUndefined = true;
        return E09;
    }
    else {
        
        var E9 = {};
        if (typeof TC.eSituation != 'undefined') {
            if (TC.eSituation["eSituation.02"].IsNull == false) {
                E9.E09_04 = V2Utils.setV2("eSituation.02", TC.eSituation["eSituation.02"].vSet[0]);
            }
        };

        ///////Complaint Group  0:M
        //Version 3 is canonical, version 2 is non-normalized thus the method below

        
        
        if (typeof TC.eSituation.PatientComplaintGroup != 'undefined') {
            for (var aa = 0; aa < TC.eSituation.PatientComplaintGroup.length; aa++) {
                if (typeof TC.eSituation.PatientComplaintGroup[aa] != 'undefined') {
                    var complaintType = "Other";
                    if (TC.eSituation.PatientComplaintGroup[aa]["eSituation.03"].IsNull != true) {
                        if (TC.eSituation.PatientComplaintGroup[aa]["eSituation.03"].vSet[0] == "2803001") {
                            complaintType = "Chief";
                        };
                        if (TC.eSituation.PatientComplaintGroup[aa]["eSituation.03"].vSet[0] == "2803005") {
                            complaintType = "Secondary";
                        };
                    }
                    
                    E9.E09_05 = "";
                    if (TC.eSituation.PatientComplaintGroup[aa]["eSituation.04"].IsNull == false) {
                        if (complaintType == "Chief") {
                            E9.E09_05 = TC.eSituation.PatientComplaintGroup[aa]["eSituation.04"].vSet[0];
                        };
                        if (complaintType == "Secondary") {
                            E9.E09_08 = TC.eSituation.PatientComplaintGroup[aa]["eSituation.04"].vSet[0];
                        }
                    };

                    if (typeof TC.eSituation.PatientComplaintGroup[aa]["eSituation.05"] != 'undefined') {
                        if (TC.eSituation.PatientComplaintGroup[aa]["eSituation.05"].IsNull == false) {
                            if (complaintType == "Chief") {
                                E9.E09_06 = TC.eSituation.PatientComplaintGroup[aa]["eSituation.05"].vSet[0];
                            };
                            if (complaintType == "Secondary") {
                                E9.E09_09 = TC.eSituation.PatientComplaintGroup[aa]["eSituation.05"].vSet[0];
                            }
                        }
                    };

                    if (typeof TC.eSituation.PatientComplaintGroup[aa]["eSituation.06"] != 'undefined') {
                        if (TC.eSituation.PatientComplaintGroup[aa]["eSituation.06"].IsNull == false) {
                            if (complaintType == "Chief") {
                                E9.E09_07 = V2Utils.setV2("eSituation.06", TC.eSituation.PatientComplaintGroup[aa]["eSituation.06"].vSet[0]);

                            };
                            if (complaintType == "Secondary") {
                                E9.E09_10 = V2Utils.setV2("eSituation.06", TC.eSituation.PatientComplaintGroup[aa]["eSituation.06"].vSet[0]);
                            }
                        }
                    }
                }
            }
        };
        
        
        //////////////End Complaint Group
        E9.E09_11 = "";

        if (typeof TC.eSituation["eSituation.07"] != 'undefined') {
            if (TC.eSituation["eSituation.07"].IsNull == false) {
                E9.E09_11 = V2Utils.setV2("eSituation.07", TC.eSituation["eSituation.07"].vSet[0]);
            }
        };
        
        E9.E09_12 = "";
        if (typeof TC.eSituation["eSituation.08"] != 'undefined') {
            if (TC.eSituation["eSituation.08"].IsNull == false) {
                E9.E09_12 = V2Utils.setV2("eSituation.08", TC.eSituation["eSituation.08"].vSet[0]);
            }
        };

        E9.E09_13 = "";

        if (typeof TC.eSituation["eSituation.09"] != 'undefined') {
            if (TC.eSituation["eSituation.09"].IsNull == false) {
                E9.E09_13 = TC.eSituation["eSituation.09"].vSet[0];
            }
        };
        
        var E09_14 = [];
        if (typeof TC.eSituation != 'undefined') {
            if (typeof TC.eSituation["eSituation.10"] != 'undefined') {
                if (TC.eSituation["eSituation.10"].IsNull == false) {
                    for (var i = 0; i < TC.eSituation["eSituation.10"].vSet.length; i++) {
                        E09_14.push(TC.eSituation["eSituation.10"].vSet[i]);
                    }
                };
                E9.E09_14 = E09_14;
            }
        };
        
        E9.E09_15 = "";
        if (typeof TC.eSituation != 'undefined') {
            if (typeof TC.eSituation["eSituation.11"] != 'undefined') {
                if (TC.eSituation["eSituation.11"].IsNull == false) {
                    E9.E09_15 = TC.eSituation["eSituation.11"].vSet[0];
                }
            }
        };
        
        E9.E09_16 = "";
        if (typeof TC.eSituation != 'undefined') {
            if (typeof TC.eSituation["eSituation.12"] != 'undefined') {
                if (TC.eSituation["eSituation.12"].IsNull == false) {
                    var E09_16 = {};
                    
                        E09_16 = TC.eSituation["eSituation.12"].vSet[0];
                    
                    E9.E09_16 = E09_16;
                }
            }
        };
        
        // eSituation 14, 15, 16 are E07 values        
        
    };
    
    var E09 = {};
    if (TheCall.HasPatient == false)
    {
        /*    E09.E09_01 = "-25"
        E09.E09_02 = "-25"
        E09.E09_03 = "-25"
        E09.E09_04 = "-25"
        E09.E09_06 = "-25"
        E09.E09_13 = "-25"
        E09.E09_14 = "-25"
        */
    }
    else
    {
        E09A = [];
        if ((typeof E9.E09_01 != 'undefined') && (Utils.IsGo(E9.E09_01) == true))
        {
            
            for (var i = 0; i < E9.E09_01.length; i++)
            {
                E09A.push(E9.E09_01[i]);
            }

        }
        else
        {
            E09A.push("-20");
        };
        
        E09.E09_01 = E09A;
        E09.E09_02 = E09A;
        E09.E09_03 = "-20";

        E092 = [];
        //if (E09.E09_02 != "-25")
        //{
        if ((typeof E9.E09_02 != 'undefined') && (Utils.IsGo(E9.E09_02) == true))
        {
            for (var i = 0; i < E9.E09_01.length; i++)
            {
                E092.push(E9.E09_02[i]);
            }
        };
          //  else
            //{
              //  E092.push("-20");
            //}
        //};
      
        E09.E09_03 = "-20";

        if ((typeof E9.E09_04 != 'undefined') && (Utils.IsGo(E9.E09_04) == true))
        {
            E09.E09_04 = E9.E09_04
        }
        else
        {
            E09.E09_04 = "-20"
        }

        
        if ((typeof E9.E09_05 != 'undefined') && (Utils.IsGo(E9.E09_05) == true))
        {
            E09.E09_05 = E9.E09_05
        }
        else
        {
            E09.E09_05 = "-20"
            E09.E09_06 = "-25"
            E09.E09_06 = "-25"
            E09.E09_11 = "-25"
            E09.E09_12 = "-25"
        };

        //////////////////////////////////////////////////
        var E0906 = false;
        //if (E09.E09_06 != "-25")        {
            if ((typeof E9.E09_06 != 'undefined') && (Utils.IsGo(E9.E09_06) == true))
            {
                E09.E09_06 = E9.E09_06;
                E0906 = true;
            }
            else
            {
                E09.E09_06 = "-20";
            }
        //};

        //if (E09.E09_07 != "-25")        {
            if ((typeof E9.E09_07 != 'undefined') && (Utils.IsGo(E9.E09_07) == true))
            {
                E09.E09_07 = E9.E09_07;
                E0906 = true;
            }
            else
            {
                E09.E09_07 = "-20";
            };
        //};
            if (E0906 == true)
            {
                var E09_06_0 = {};
                E09_06_0.E09_06 = E09.E09_06;
                E09_06_0.E09_07 = E09.E09_07;
                E09.E09_06_0 = E09_06_0;

            };
        //////////////////////////////////////////////////
        if ((typeof E9.E09_08 != 'undefined') && (Utils.IsGo(E9.E09_08) == true))
        {
            E09.E09_08 = E9.E09_08
        }
        else
        {
            E09.E09_08 = "-20"
            E09.E09_09 = "-25"
            E09.E09_10 = "-25"
        };

        //////////////////////////////////////////////////
        var E0909 = false;
        //if (E09.E09_09 != "-25")        {
            if ((typeof E9.E09_09 != 'undefined') && (Utils.IsGo(E9.E09_09) == true))
            {
                E09.E09_09 = E9.E09_09;
                E0909 = true;
            }
            else
            {
                E09.E09_09 = "-20";
            }
        //};
        
        //if (E09.E09_10 != "-25")        {
            if ((typeof E9.E09_10 != 'undefined') && (Utils.IsGo(E9.E09_10) == true))
            {
                E09.E09_10 = E9.E09_10;
                E0909 = true;
            }
            else
            {
                E09.E09_10 = "-20"
            }
        //};
            if (E0909 == true) {
                var E09_09_0 = {};
                E09_09_0.E09_06 = E09.E09_06;
                E09_09_0.E09_07 = E09.E09_07;
                E09.E09_09_0 = E09_09_0
            };
        //////////////////////////////////////////////////
        //if (E09.E09_05 != "-25")        {
            if ((typeof E9.E09_11 != 'undefined') && (Utils.IsGo(E9.E09_11) == true))
            {
                E09.E09_11 = E9.E09_11
            }
            else
            {
                E09.E09_11 = "-20"
            }
        //};

        
        //if (E09.E09_05 != "-25")        {
            if ((typeof E9.E09_12 != 'undefined') && (Utils.IsGo(E9.E09_12) == true))
            {
                E09.E09_12 = E9.E09_12
            }
            else
            {
                E09.E09_12 = "-20"
            }
        //};

        if ((typeof E9.E09_13 != 'undefined') && (Utils.IsGo(E9.E09_13) == true))
        {
            E09.E09_13 = E9.E09_13
        }
        else
        {
            E09.E09_13 = "-20"
        };

        if ((typeof E9.E09_14 != 'undefined') && (Utils.IsGo(E9.E09_14) == true))
        {
            var E09_14 = [];
            E09_14 = E9.E09_14
            E09.E09_14 = E09_14;

        }
        else
        {
            E09.E09_14 = "-20"
        }

        if ((typeof E9.E09_15 != 'undefined') && (Utils.IsGo(E9.E09_15) == true))
        {
            E09.E09_15 = E9.E09_15;

        }
        else
        {
            E09.E09_15 = "-20"
        };
        
        if ((typeof E9.E09_16 != 'undefined') && (Utils.IsGo(E9.E09_16) == true))
        {
            E09.E09_16 = E9.E09_16;

        }
        else
        {
            E09.E09_16 = "-20"
        };
            
    };
    E09.IsUndefined = false;
    E09.ErrorList = ErrorList;
    return E09
};
