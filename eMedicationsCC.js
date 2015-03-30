var Utils = require('cloud/UtilitiesCC.js');
var NOTRECORDED = '7701003';
var NOTREPORTING = '7701005';
var NOTAPPLICABLE = '7701001';
exports.seteMedications = function (TheCall) {
    //1:1
    var pMedications = new Object();
    var eMedications = new Object();
    eMedications.IsValid = false;

    pMedications = TheCall.pMedications;

    if (pMedications.HasDataSet == false) {
        var MG = new Object()
        MG = seteMedicationGroupNull(TheCall)
        eMedications.MedicationGroup = MG;
        return eMedications;
    };
    if (typeof pMedications.attributes.sections == 'undefined') {
        var MG = new Object()
        MG = seteMedicationGroupNull(TheCall)
        eMedications.MedicationGroup = MG;
        return eMedications;
    }
    else {
        var _sI = [];
        _sI = Utils.getSectionIndex(pMedications, "eMedications.MedicationGroup");
        if (_sI[0] == -1) {
            var MG = new Object()
            MG = seteMedicationGroupNull(Thecall)
            eMedications.MedicationGroup = MG;
        }
        else {

            var MedicationGroupArray = [];

            for (var xx = 0; xx < _sI.length; xx++) {

                var MedicationGroup = new Object();
                var _eL = [];
                _eL = pMedications.attributes.sections[xx].attributes.elements;

                if (_eL[0] == -1) {
                    var MG = new Object()
                    MG = seteMedicationGroupNull()
                    eMedications.MedicationGroup = MG;
                }
                else {
                    //eMedications.03////////
                    var _meds = [];
                    var _val = [];
                    var _text = [];
                    var valObj = {};
                    valObj.IsNull = true;

                    _meds = Utils.getValue(_eL, "eMedications.03");
                    if (_meds.IsNull == true) {

                        if (TheCall.HasPatient == false) {
                            _val.push(NOTAPPLICABLE);
                            _text.push("Not Applicable");
                            valObj.NV = true;
                        }
                        else {
                            _val.push(NOTRECORDED);
                            _text.push("Not Recorded");
                            valObj.NV = true;
                        }
                    }
                    else {
                        /*If Medication is required by Protocol
                        if (IsRequiredByProtocol(_meds.ValueArray[0].val))
                        {
                            alert()
                            _meds.HasPN = true
                            _meds.pn == "ContraindicationNoted"
                        };
                        */

                        if (_meds.HasPN == true) {
                            if (_meds.pn = "ContraindicationNoted") {
                                _val.push("8801001");
                                _text.push("Contraindication Noted");
                                valObj.NV = true;

                            }
                            else if (_meds.pn == "DeniedByOrder") {
                                _val.push("8801003");
                                _text.push("Denied By Order");
                                valObj.NV = true;
                            }
                            else if (_meds.pn == "Refused") {
                                _val.push("8801019");
                                _text.push("Refused");
                                valObj.PN = true;
                            }
                            else if (_meds.pn == "UnabletoComplete") {
                                _val.push("8801023")
                                _text.push("Unable to Complete");
                                valObj.PN = true;
                            }
                            else if (_meds.pn == "MedicationAlreadyTaken") {
                                _val.push("8801009");
                                _text.push("Medication Already Taken");
                                valObj.PN = true;
                            }
                            else if (_meds.pn == "MedicationAllergy") {
                                _val.push("8801007");
                                _text.push("Medication Allergy");
                                valObj.PN = true;
                            }
                            else if (_meds.pn == "UnabletoComplete") {
                                _val.push("8801023")
                                _text.push("Unable to Complete");
                                valObj.PN = true;
                            }
                        };

                        _val.push(_meds.ValueArray[0].val);
                        valObj.IsNull = false;
                        valObj.vSet = _val.slice(0);
                    };

                    valObj.CodeText = _text.slice(0);
                    valObj.vSet = _val.slice(0);
                    MedicationGroup["eMedications.03"] = valObj;
                    delete valObj;


                    //eMedications.01////////
                    var _meds = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _meds = Utils.getValue(_eL, "eMedications.01");
                    if (_meds.IsNull == false) {
                        _val.push(_meds.ValueArray[0].val);
                        valObj.IsNull = false;
                    }
                    else {
                        if (TheCall.HasPatient == false) {
                            _val.push(NOTAPPLICABLE);
                            _text.push("Not Applicable");
                            valObj.NV = true;
                        }
                        else {
                            _val.push(NOTRECORDED);
                            _text.push("Not Recorded");
                            valObj.NV = true;
                        };
                    };
                    valObj.vSet = _val.slice(0);
                    MedicationGroup["eMedications.01"] = valObj;
                    delete valObj;



                    //eMedications.02////////
                    var _meds = [];
                    var _val = [];
                    var _text = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _meds = Utils.getValue(_eL, "eMedications.02");

                    if (_meds.IsNull != true) {
                        _val.push(_meds.ValueArray[0].val);
                        valObj.IsNull = false;
                        _text.push(_meds.ValueArray[0].text);
                    }
                    else {
                        if (TheCall.HasPatient == false) {
                            _val.push(NOTAPPLICABLE);
                            _text.push("Not Applicable");
                            valObj.NV = true;
                        }
                        else {
                            _val.push(NOTRECORDED);
                            _text.push("Not Recorded");
                            valObj.NV = true;
                        }
                    };

                    valObj.CodeText = _text.slice(0);
                    valObj.vSet = _val.slice(0);
                    MedicationGroup["eMedications.02"] = valObj;
                    delete valObj;

                    //eMedications.04////////
                    var _meds = [];
                    var _val = [];
                    var _text = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _meds = Utils.getValue(_eL, "eMedications.04");
                    if (_meds.IsNull != true) {
                        _val.push(_meds.ValueArray[0].val);
                        valObj.IsNull = false;
                        _text.push(_meds.ValueArray[0].text);
                        valObj.CodeText = _text.slice(0);
                        valObj.vSet = _val.slice(0);
                        MedicationGroup["eMedications.04"] = valObj;
                        delete valObj;
                    };

                    //////////////////////////////////////////////
                    //////////////////////////////////////////////

                    var _s1 = [];
                    _s1 = Utils.getSectionIndex(pMedications.attributes.sections[xx], "eMedications.DosageGroup");

                    if (_s1[0] == -1) {
                        MedicationGroup["DosageGroup"] = this.seteMedicationDosageGroupNull(TheCall);
                    }
                    else {
                        var MedsDosage = {};
                        var _eD = [];
                        _eD = pMedications.attributes.sections[xx].attributes.sections[_s1].attributes.elements;
                        if (_eD.length == 0) {
                            MedicationGroup["DosageGroup"] = this.seteMedicationDosageGroupNull(TheCall);
                        }
                        else {

                            //eMedications.05/////////////
                            var _meds = [];
                            var _val = [];
                            var valObj = {};
                            valObj.IsNull = true;
                            _meds = Utils.getValue(_eD, "eMedications.05");
                            if (_meds.IsNull != true) {
                                _val.push(_meds.ValueArray[0].val);
                                valObj.IsNull = false;
                            }
                            else {
                                if (TheCall.HasPatient == false) {
                                    _val.push(NOTAPPLICABLE);
                                    _text.push("Not Applicable");
                                    valObj.NV = true;
                                }
                                else {
                                    _val.push(NOTRECORDED);
                                    _text.push("Not Recorded");
                                    valObj.NV = true;
                                };
                            };
                            valObj.vSet = _val.slice(0);
                            MedsDosage["eMedications.05"] = valObj;
                            delete valObj;


                            //eMedications.06//////////////
                            var _meds = [];
                            var _val = [];
                            var valObj = {};
                            valObj.IsNull = true;
                            var _text = [];
                            _meds = Utils.getValue(_eD, "eMedications.06");
                            if (_meds.IsNull != true) {
                                _val.push(_meds.ValueArray[0].val);
                                valObj.IsNull = false;
                                _text.push(_meds.ValueArray[0].text);
                            }
                            else {
                                if (TheCall.HasPatient == false) {
                                    _val.push(NOTAPPLICABLE);
                                    _text.push("Not Applicable");
                                    valObj.NV = true;
                                }
                                else {
                                    _val.push(NOTRECORDED);
                                    _text.push("Not Recorded");
                                    valObj.NV = true;
                                };
                            };

                            valObj.CodeText = _text.slice(0);
                            valObj.vSet = _val.slice(0);
                            MedsDosage["eMedications.06"] = valObj;
                            delete valObj;

                            var DosageGroup = {};
                            DosageGroup["eMedications.05"] = MedsDosage["eMedications.05"];
                            DosageGroup["eMedications.06"] = MedsDosage["eMedications.06"];
                            MedicationGroup.DosageGroup = DosageGroup;

                        }
                    };

                    //eMedications.07/////////////////
                    var _meds = [];
                    var _val = [];
                    var _text = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _meds = Utils.getValue(_eL, "eMedications.07");
                    if (_meds.IsNull != true) {
                        _val.push(_meds.ValueArray[0].val);
                        valObj.IsNull = false;
                        _text.push(_meds.ValueArray[0].text);
                    }
                    else {
                        if (TheCall.HasPatient == false) {
                            _val.push(NOTAPPLICABLE);
                            _text.push("Not Applicable");
                            valObj.NV = true;
                        }
                        else {
                            _val.push(NOTRECORDED);
                            _text.push("Not Recorded");
                            valObj.NV = true;
                        };
                    };

                    valObj.CodeText = _text.slice(0);
                    valObj.vSet = _val.slice(0);
                    MedicationGroup["eMedications.07"] = valObj;
                    delete valObj;

                    //eMedications.08////////////
                    var _meds = [];
                    var _val = [];
                    var valObj = {};
                    var _text = [];
                    valObj.IsNull = true;
                    _meds = Utils.getValue(_eL, "eMedications.08");

                    if (_meds.IsNull != true) {
                        for (var i = 0; i < _meds.ValueArray.length; i++) {
                            if ((_meds.ValueArray[i].HasValue == true) && (_val.indexOf(_meds.ValueArray[i].val) == -1)) {
                                _val.push(_meds.ValueArray[i].val);
                                _text.push(_meds.ValueArray[i].text);
                                valObj.IsNull = false;
                            }
                        }
                    }
                    else {
                        if (TheCall.HasPatient == false) {
                            _val.push(NOTAPPLICABLE);
                            _text.push("Not Applicable");
                            valObj.NV = true;
                        }
                        else {
                            _val.push(NOTRECORDED);
                            _text.push("Not Recorded");
                            valObj.NV = true;
                        }
                    };
                    valObj.CodeText = _text.slice(0);
                    valObj.vSet = _val.slice(0);
                    MedicationGroup["eMedications.08"] = valObj;
                    delete valObj;


                    //eMedications.09//////////////
                    var _meds = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _meds = Utils.getValue(_eL, "eMedications.09");
                    if (_meds.IsNull != true) {
                        _val.push(_meds.ValueArray[0].val);
                        valObj.IsNull = false;
                    }
                    else {
                        if (TheCall.HasPatient == false) {
                            _val.push(NOTAPPLICABLE);
                            valObj.NV = true;
                        }
                        else if (Utils.ReportingRequired("eHistory.05") == true) {
                            _val.push(NOTRECORDED);
                            valObj.NV = true;
                        }
                        else {
                            _val.push(NOTREPORTING);
                            valObj.NV = true;
                        }
                    };
                    valObj.vSet = _val.slice(0);
                    MedicationGroup["eMedications.09"] = valObj;
                    delete valObj;


                    //eMedications.10////////////

                    var _meds = [];
                    var _val = [];
                    var _text = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _meds = Utils.getValue(_eL, "eMedications.10");
                    if (_meds.IsNull != true) {
                        _val.push(_meds.ValueArray[0].val);
                        valObj.IsNull = false;
                        valObj.vSet = _val.slice(0);
                        _text.push(_meds.ValueArray[0].text);
                    }
                    else {
                        if (TheCall.HasPatient == false) {
                            _val.push(NOTAPPLICABLE);
                            valObj.NV = true;
                        }
                        else {
                            _val.push(NOTREPORTING);
                            valObj.NV = true;
                        }
                    };
                    valObj.vSet = _val.slice(0);
                    valObj.CodeText = _text.slice(0);
                    MedicationGroup["eMedications.10"] = valObj;
                    delete valObj;

                    //eMedications.11///////////
                    var _meds = [];
                    var _val = [];
                    var _text = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _meds = Utils.getValue(_eL, "eMedications.11");
                    if (_meds.IsNull != true) {
                        _val.push(_meds.ValueArray[0].val);
                        valObj.IsNull = false;
                        valObj.vSet = _val.slice(0);
                        _text.push(_meds.ValueArray[0].text);
                        valObj.CodeText = _text.slice(0);
                        MedicationGroup["eMedications.11"] = valObj;
                        delete valObj;
                    };

                    //eMedications.12/////////////
                    var _meds = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;

                    _meds = Utils.getValue(_eL, "eMedications.12");
                    if (_meds.IsNull != true) {
                        _val.push(_meds.ValueArray[0].val);
                        valObj.IsNull = false;

                        valObj.vSet = _val.slice(0);
                        MedicationGroup["eMedications.12"] = valObj;
                        delete valObj;
                    }

                    MedicationGroupArray.push(MedicationGroup);

                };
                eMedications.MedicationGroup = MedicationGroupArray.slice(0);

            }

        }
    };
    return eMedications;
};

var seteMedicationGroupNull = function (TheCall) {
    var MEDG = new Object()

    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (TheCall.HasPatient == false) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable");
        valObj.NV = true;
    }
    else {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded");
        valObj.NV = true;
    };

    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    MEDG["eMedications.01"] = valObj;
    MEDG["eMedications.02"] = valObj;
    MEDG["eMedications.03"] = valObj;
    MEDG["eMedications.07"] = valObj;
    MEDG["eMedications.08"] = valObj;
    MEDG["eMedications.10"] = valObj;


    var _val = [];
    var valObj = {};
    valObj.IsNull = true;

    if (TheCall.HasPatient == false) {
        if (Utils.ReportingRequired("eMedications.09") == true) {
            _val.push(NOTAPPLICABLE);
            _text.push("Not Applicable");
            valObj.NV = true;
        }
        else {
            _val.push(NOTREPORTING);
            _text.push("Not Reporting");
            valObj.NV = true;
        }
    }

    else {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded");
        valObj.NV = true;
    };

    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    MEDG["eMedications.09"] = valObj;

    MEDG.DosageGroup = seteMedicationDosageGroupNull();

    return MEDG;
};

var seteMedicationDosageGroupNull = function (TheCall) {
    var DOSE = new Object()

    var eScene = new Object();

    var _val = [];
    var _text = [];
    var valObj = {};
    valObj.IsNull = true;
    if (TheCall.HasPatient == false) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable");
        valObj.NV = true;
    }
    else {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded");
        valObj.NV = true;
    };

    valObj.CodeText = _text.slice(0);
    valObj.vSet = _val.slice(0);
    DOSE["eMedications.05"] = valObj;
    DOSE["eMedications.06"] = valObj;

    return DOSE;

};