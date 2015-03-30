var Utils = require('cloud/UtilitiesCC.js');
var V2Utils = require('cloud/ConversionUtilsCC.js');
exports.setE18 = function (TheCall)
{
    var TC = TheCall
    if (typeof TC.eMedications == 'undefined')
    {
        var E18 = {};
        E18.IsUndefined = true;
        return E18;
    }
    else
    {
        var E18Array = [];
        if (typeof TC.eMedications.MedicationGroup != 'undefined')
        {
            for (var xx = 0; xx < TC.eMedications.MedicationGroup.length; xx++)
            {
                var E18 = {};
                if (typeof TC.eMedications.MedicationGroup[xx] != undefined)
                {
                    E18.E18_01 = "";
                    if (typeof TC.eMedications.MedicationGroup[xx]["eMedications.01"] != 'undefined')
                    {
                        if (TC.eMedications.MedicationGroup[xx]["eMedications.01"].IsNull == false)
                        {
                            E18.E18_01 = TC.eMedications.MedicationGroup[xx]["eMedications.01"].vSet[0];
                        }
                    };

                    if (typeof TC.eMedications.MedicationGroup[xx]["eMedications.02"] != 'undefined')
                    {
                        E18.E18_02 = "";
                        if (TC.eMedications.MedicationGroup[xx]["eMedications.02"].IsNull == false)
                        {
                            E18.E18_02 = V2Utils.setV2("eMedications.02", TC.eMedications.MedicationGroup[xx]["eMedications.02"].vSet[0]);
                        }
                    };

                    if (typeof TC.eMedications.MedicationGroup[xx]["eMedications.03"] != 'undefined')
                    {
                        E18.E18_03 = "";
                        if (TC.eMedications.MedicationGroup[xx]["eMedications.03"].IsNull == false)
                        {
                            E18.E18_03 = TC.eMedications.MedicationGroup[xx]["eMedications.03"].CodeText[0];
                            //E18.E18_03 = TC.eMedications.MedicationGroup[xx]["eMedications.03"].vSet[0];
                        }
                    };

                    if (typeof TC.eMedications.MedicationGroup[xx]["eMedications.04"] != 'undefined')
                    {
                        E18.E18_04 = "";
                        if (TC.eMedications.MedicationGroup[xx]["eMedications.04"].IsNull == false)
                        {
                            E18.E18_04 = V2Utils.setV2("eMedications.04", TC.eMedications.MedicationGroup[xx]["eMedications.04"].vSet[0]);
                        }
                    };

                    //DosageGroup
                    if (typeof TC.eMedications.MedicationGroup[xx].DosageGroup != 'undefined') {
                        if (typeof TC.eMedications.MedicationGroup[xx].DosageGroup["eMedications.05"] != 'undefined') {
                            E18.E18_05 = "";
                            if (TC.eMedications.MedicationGroup[xx].DosageGroup["eMedications.05"].IsNull == false) {
                                E18.E18_05 = V2Utils.setV2("eMedications.05", TC.eMedications.MedicationGroup[xx].DosageGroup["eMedications.05"].vSet[0]);
                            }
                        };

                        if (typeof TC.eMedications.MedicationGroup[xx].DosageGroup["eMedications.06"] != 'undefined')
                        {
                            E18.E18_06 = "";
                            if (TC.eMedications.MedicationGroup[xx].DosageGroup["eMedications.06"].IsNull == false) {
                                E18.E18_06 = V2Utils.setV2("eMedications.06", TC.eMedications.MedicationGroup[xx].DosageGroup["eMedications.06"].vSet[0]);
                            }
                        }
                    };

                    if (typeof TC.eMedications.MedicationGroup[xx]["eMedications.07"] != 'undefined')
                    {
                        E18.E18_07 = "";
                        if (TC.eMedications.MedicationGroup[xx]["eMedications.07"].IsNull == false)
                        {
                            E18.E18_07 = V2Utils.setV2("eMedications.07", TC.eMedications.MedicationGroup[xx]["eMedications.07"].vSet[0]);
                        }
                    };

                    if (typeof TC.eMedications.MedicationGroup[xx]["eMedications.08"] != 'undefined')
                    {
                        E18_08 = [];
                        if (TC.eMedications.MedicationGroup[xx]["eMedications.08"].IsNull == false)
                        {
                            for (var i = 0; i < TC.eMedications.MedicationGroup[xx]["eMedications.08"].length; i++)
                            {
                                E18_08.push(V2Utils.setV2("eMedications.08", TC.eMedications.MedicationGroup[xx]["eMedications.08"].vSet[i]));
                            };
                            E18.E18_08 = E18_08;
                        }
                    };

                    if (typeof TC.eMedications.MedicationGroup[xx]["eMedications.09"] != 'undefined')
                    {
                        var E18_09 = "";
                        if (TC.eMedications.MedicationGroup[xx]["eMedications.09"].IsNull == false)
                        {
                            E18.E18_09 = V2Utils.setV2("eMedications.09", TC.eMedications.MedicationGroup[xx]["eMedications.09"].vSet[0]);
                        }
                    };

                    if (typeof TC.eMedications.MedicationGroup[xx]["eMedications.11"] != 'undefined')
                    {
                        E18.E18_10 = "";
                        if (TC.eMedications.MedicationGroup[xx]["eMedications.11"].IsNull == false)
                        {
                            E18.E18_10 = V2Utils.setV2("eMedications.11", TC.eMedications.MedicationGroup[xx]["eMedications.11"].vSet[0]);
                        }
                    };

                    if (typeof TC.eMedications.MedicationGroup[xx]["eMedications.12"] != 'undefined')
                    {
                        E18.E18_11 = "";
                        if (TC.eMedications.MedicationGroup[xx]["eMedications.12"].IsNull == false)
                        {
                            E18.E18_11 = TC.eMedications.MedicationGroup[xx]["eMedications.12"].vSet[0];
                        }
                    };
                    E18Array.push(E18);
                }
            }
        }
    };

    //if (TheCall.HasPatient == false)
    if (1 == 2)
    {

    }
    else
    {
        var MedDate;
        var e18arr = [];
        for (var xx = 0; xx < E18Array.length; xx++)
        {
            var e18 = E18Array[xx]
            MedDate = false
            var _e18 = {}
            if ((typeof e18.E18_01 != 'undefined') && (Utils.IsGo(e18.E18_01) == true))
            {
                _e18.E18_01 = e18.E18_01
                MedDate = true;
            };

            if ((typeof e18.E18_02 != 'undefined') && (Utils.IsGo(e18.E18_02) == true)) {
                _e18.E18_02 = e18.E18_02
            };

            var MedGiven = false;
            if ((typeof e18.E18_03 != 'undefined') && (Utils.IsGo(e18.E18_03) == true))
            {
                _e18.E18_03 = e18.E18_03
                MedGiven = true;
            };

            if ((typeof e18.E18_04 != 'undefined') && (Utils.IsGo(e18.E18_04) == true))
            {
                _e18.E18_04 = e18.E18_04
            
            };

            

            var E1805 = false;
            if ((typeof e18.E18_05 != 'undefined') && (Utils.IsGo(e18.E18_05) == true))
            {
                _e18.E18_05 = e18.E18_05;
                E1805 = true;
            }

            if ((typeof e18.E18_06 != 'undefined') && (Utils.IsGo(e18.E18_06) == true)) {
                if (E1805 == false) {
                    Error.Level = "ELEM";
                    Error.Type = "VAL";
                    Error.Att = "E18_06"
                    Error.Text = "Dosage Unit without Dosage"
                    ErrorList.push(Error)
                }
                else {
                    _e18.E18_06 = e18.E18_06;
                    E1805 = true;
                }
            };

            if (E1805 == true) {
                var E18_05_0 = {};
                E18_05_0.E18_05 = _e18.E18_05;
                E18_05_0.E18_06 = _e18.E18_06;
                _e18.E18_05_0 = E18_05_0;
                
            };
            if ((typeof e18.E18_07 != 'undefined') && (Utils.IsGo(e18.E18_07) == true))
            {
                if (MedGiven == false)
                {
                    Error.Level = "ELEM";
                    Error.Type = "VAL";
                    Error.Att = "E18_06"
                    Error.Text = "Dosage Unit without Dosage"
                    ErrorList.push(Error)
                }
                else
                {
                    _e18.E18_06 = e18.E18_06;
                }            
            };

            E18_08 = [];
            if ((typeof e18.E18_08 != 'undefined') && (Utils.IsGo(e18.E18_08) == true))
            {
                if (MedGiven == false)
                {
                    Error.Level = "ELEM";
                    Error.Type = "VAL";
                    Error.Att = "E18_08"
                    Error.Text = "Medication Complication without Medication"
                    ErrorList.push(Error)
                }
                else
                {
                    E18_08 = e18.E18_08;
                }
            }
            else
            {
                E18_08.push("-20");
            };
            _e18.E18_08 = E18_08
            if ((typeof e18.E18_09 != 'undefined') && (Utils.IsGo(e18.E18_09) == true)) {
                if (MedGiven == false) {
                    Error.Level = "ELEM";
                    Error.Type = "VAL";
                    Error.Att = "E18_09"
                    Error.Text = "Medication Crew without Medication"
                    ErrorList.push(Error)
                }
                else {
                    _e18.E18_09 = e18.E18_09;
                }
            };

            if ((typeof e18.E18_10 != 'undefined') && (Utils.IsGo(e18.E18_10) == true)) {
                if (MedGiven == false) {
                    Error.Level = "ELEM";
                    Error.Type = "VAL";
                    Error.Att = "E18_10"
                    Error.Text = "Medication Authorization without Medication"
                    ErrorList.push(Error)
                }
                else {
                    _e18.E18_10 = e18.E18_10;
                }
            };


            if ((typeof e18.E18_11 != 'undefined') && (Utils.IsGo(e18.E18_11) == true)) {
                if (MedGiven == false) {
                    Error.Level = "ELEM";
                    Error.Type = "VAL";
                    Error.Att = "E18_11"
                    Error.Text = "Medication Authorization Physician without Medication"
                    ErrorList.push(Error)
                }
                else {
                    _e18.E18_11 = e18.E18_11;
                }
            };
           
        e18arr.push(_e18)
        
        };
        
        E18 = e18arr;
    };


    E18.ErrorList = ErrorList;
    E18.IsUndefined = false;
    return E18;
};

