var Utils = require('cloud/UtilitiesCC.js');
var NOTRECORDED = '7701003';
var NOTREPORTING = '7701005';
var NOTAPPLICABLE = '7701001';
exports.seteExam = function (TheCall) {

    //0:1
    var eExam = new Object();
    var pExam = TheCall.pExam;

    eExam["IsValid"] = false;
    if (pExam.HasDataSet == false) {
        eExam = seteExamNull()
        return eExam;
    };
    if (typeof pExam.attributes.elements == 'undefined') {
        eExam = seteExamNull(TheCall)
        return eExam;
    };

    var _exArr = []
    _exArr = pExam.attributes.elements;
    if (_exArr.length == 0) {
        eExam = seteExamNull(TheCall)
    }
    else {

        ////////eExam.01 
        var _exam = [];
        var _val = [];
        var _text = [];
        var valObj = {};
        valObj.IsNull = true;
        _exam = Utils.getValue(_exArr, "eExam.01");
        if (_exam.IsNull != true) {
            _val.push(_exam.ValueArray[0].val);
            valObj.IsNull = false;
        }
        else {
            if (_exam.HasPN == true) {
                val.push("8801023");
                _text.push("Unable to Complete");
                valObj.NV = false;
            }
            else {
                if (TheCall.HasPatient == false) {
                    val.push(NOTAPPLICABLE);
                    _text.push("Not Applicable");
                    valObj.NV = true;
                }
                else if (Utils.ReportingRequired("eExam.01") == true) {
                    _val.push(NOTRECORDED);
                    _text.push("Not Recorded");
                    valObj.NV = true;
                }
                else {
                    _val.push(NOTREPORTING);
                    _text.push("Not Reporting");
                    valObj.NV = true;
                }
            }
        };
        valObj.vSet = _val.slice(0);
        eExam["eExam.01"] = valObj;
        delete valObj;


        /////////eExam.02
        var _exam = [];
        var _val = [];
        var _text = [];
        var valObj = {};
        valObj.IsNull = true;
        _exam = Utils.getValue(_exArr, "eExam.02");
        if (_exam.IsNull == true) {
            if (_exam.HasPN == true) {
                if (_exam.PN == "Refused") {
                    _val.push("8801019")
                    _text.push("Refused");
                    valObj.NV = false;
                }
                else {
                    _val.push("8801023");
                    _text.push("Unable to Complete");
                    valObj.NV = false;
                }
            }
            else {
                if (TheCall.IsCancelled == true) {
                    _val.push(NOTAPPLICABLE);
                    _text.push("Not Applicable");
                    valObj.NV = true;
                }
                else if (TheCall.HasPatient == false) {
                    _val.push(NOTAPPLICABLE);
                    _text.push("Not Applicable");
                    valObj.NV = true;
                }
                else if (Utils.ReportingRequired("eScene.17") == true) {
                    _val.push(NOTRECORDED);
                    _text.push("Not Recorded");
                    valObj.NV = true;
                }
                else {
                    _val.push(NOTREPORTING);
                    _text.push("Not Reporting");
                    valObj.NV = true;
                }
            }
        }
        else {
            _text.push(_exam.ValueArray[0].text);
            valObj.CodeText = _text.slice(0)
            _val.push(_exam.ValueArray[0].val);
            valObj.IsNull = false;
        };
        valObj.vSet = _val.slice(0);
        eExam["eExam.02"] = valObj;
        delete valObj;

        var AssessmentArray = [];
        ///////////////////////////////////////////////
        eExam["AssessmentGroup"] = -1;

        if (typeof pExam.attributes.sections != 'undefined') {
            var _sI = [];
            _sI = Utils.getSectionIndex(pExam, "eExam.AssessmentGroup");

            if (_sI[0] != -1) {
                eExam["AssessmentGroup"] = _sI.length;
                for (var xx = 0; xx < _sI.length; xx++) {

                    var eyeGroupArray = [];
                    var _assArr = pExam.attributes.sections[xx].attributes.elements;
                    if (_assArr.length > 0) {
                        var AssessmentGroup = new Object();

                        /////////eExam.03
                        var _exam = [];
                        var _val = [];
                        var valObj = {};
                        valObj.IsNull = true;
                        _exam = Utils.getValue(_assArr, "eExam.03");
                        if (_exam.IsNull != true) {
                            _val.push(_exam.ValueArray[0].val);
                            valObj.IsNull = false;

                            valObj.vSet = _val.slice(0);
                            AssessmentGroup["eExam.03"] = valObj;;
                            delete valObj;
                        };
                        /////////eExam.04
                        var _exam = [];
                        var _text = [];
                        var _val = [];
                        var valObj = {};
                        valObj.IsNull = true;
                        _exam = Utils.getValue(_assArr, "eExam.04");
                        if (_exam.IsNull != true) {
                            for (var i = 0; i < _exam.ValueArray.length; i++) {
                                if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) {
                                    _val.push(_exam.ValueArray[i].val);
                                    _text.push(_exam.ValueArray[0].text);

                                }
                            };
                            valObj.CodeText = _text.slice(0);
                            valObj.IsNull = false;
                            valObj.vSet = _val.slice(0);
                            AssessmentGroup["eExam.04"] = valObj;;
                            delete valObj;
                        };

                        /////////eExam.05
                        var _exam = [];
                        var _text = [];
                        var _val = [];
                        var valObj = {};
                        valObj.IsNull = true;
                        _exam = Utils.getValue(_assArr, "eExam.05");

                        if (_exam.HasPN == true) {
                            _val.push("8801005");
                            _text.push("Exam Finding NotPresent");
                            valObj.PN = true;

                        }
                        else {
                            if (_exam.IsNull == true) {

                                for (var i = 0; i < _exam.ValueArray.length; i++) {
                                    if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) {
                                        _val.push(_exam.ValueArray[i].val);
                                        _text.push(_exam.ValueArray[i].text);
                                        valObj.IsNull = false;
                                    }
                                }
                            }
                        };

                        valObj.CodeText = _text.slice(0);
                        valObj.vSet = _val.slice(0);
                        AssessmentGroup["eExam.05"] = valObj;;
                        delete valObj;


                        /////////eExam.06
                        var _exam = [];
                        var _val = [];
                        var _text = [];
                        var valObj = {};
                        valObj.IsNull = true;
                        _exam = Utils.getValue(_assArr, "eExam.06");
                        if (_exam.HasPN == true) {
                            _val.push("8801005");
                            _text.push("Exam Finding NotPresent");
                            valObj.PN = true;
                        }
                        else {
                            if (_exam.IsNull == false) {
                                for (var i = 0; i < _exam.ValueArray.length; i++) {
                                    if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) {
                                        _val.push(_exam.ValueArray[i].val);
                                        _text.push(_exam.ValueArray[i].text);
                                        valObj.IsNull = false;
                                    }
                                }

                            }
                        };
                        valObj.CodeText = _text.slice(0);
                        valObj.vSet = _val.slice(0);
                        AssessmentGroup["eExam.06"] = valObj;;
                        delete valObj;
                        console.log(AssessmentGroup["eExam.06"])

                        /////////eExam.07
                        var _exam = [];
                        var _text = [];
                        var _val = [];
                        var valObj = {};
                        valObj.IsNull = true;
                        _exam = Utils.getValue(_assArr, "eExam.07");
                        if (_exam.HasPN == true) {
                            _val.push("8801005");
                            _text.push("Exam Finding NotPresent");
                            valObj.PN = true;
                        }
                        else {
                            if (_exam.IsNull == false) {
                                for (var i = 0; i < _exam.ValueArray.length; i++) {
                                    if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) {
                                        _val.push(_exam.ValueArray[i].val);
                                        _text.push(_exam.ValueArray[i].text);
                                    }
                                }
                            }
                        };
                        valObj.IsNull = false;
                        valObj.CodeText = _text.slice(0);
                        valObj.vSet = _val.slice(0);
                        delete valObj;

                        /////////eExam.08
                        var _exam = [];
                        var _val = [];
                        var _text = [];
                        var valObj = {};
                        valObj.IsNull = true;
                        _exam = Utils.getValue(_assArr, "eExam.08");
                        if (_exam.HasPN == true) {
                            _val.push("8801005");
                            _text.push("Exam Finding NotPresent");
                            valObj.PN = true;
                        }
                        else {
                            if (_exam.IsNull == false) {
                                for (var i = 0; i < _exam.ValueArray.length; i++) {
                                    if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) {
                                        _val.push(_exam.ValueArray[i].val);
                                        _text.push(_exam.ValueArray[i].text);
                                        valObj.IsNull = false;
                                    }
                                }
                            }
                        };
                        valObj.CodeText = _text.slice(0);
                        valObj.vSet = _val.slice(0);
                        AssessmentGroup["eExam.08"] = valObj;
                        delete valObj;



                        /////////eExam.09
                        var _exam = [];
                        var _text = [];
                        var _val = [];
                        var valObj = {};
                        valObj.IsNull = true;

                        _exam = Utils.getValue(_assArr, "eExam.09");
                        if (_exam.HasPN == true) {
                            _val.push("8801005");
                            _text.push("Exam Finding NotPresent");
                            valObj.PN = true;
                        }
                        else {
                            if (_exam.IsNull == false) {
                                for (var i = 0; i < _exam.ValueArray.length; i++) {
                                    if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) {
                                        _val.push(_exam.ValueArray[i].val);
                                        _text.push(_exam.ValueArray[i].text);
                                        valObj.IsNull = false;
                                    };
                                }
                            }
                        };
                        valObj.CodeText = _text.slice(0);
                        valObj.vSet = _val.slice(0);
                        AssessmentGroup["eExam.09"] = valObj;
                        delete valObj;


                        /////////eExam.12
                        var _exam = [];
                        var _text = [];
                        var _val = [];
                        var valObj = {};
                        valObj.IsNull = true;

                        _exam = Utils.getValue(_assArr, "eExam.12");
                        if (_exam.HasPN == true) {
                            _val.push("8801005");
                            _text.push("Exam Finding NotPresent");
                            valObj.PN = true;
                        }
                        else {
                            if (_exam.IsNull != true) {
                                for (var i = 0; i < _exam.ValueArray.length; i++) {
                                    if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) {
                                        _val.push(_exam.ValueArray[i].val);
                                        valObj.IsNull = false;
                                        _text.push(_exam.ValueArray[i].text);
                                    }
                                }
                            }
                        };
                        valObj.CodeText = _text.slice(0);
                        valObj.vSet = _val.slice(0);
                        AssessmentGroup["eExam.12"] = valObj;;
                        delete valObj;


                        //AbdomenGroup////////////////////////////////////////////////////////////////////

                        if (typeof pExam.attributes.sections[xx].attributes.sections != 'undefined') {
                            var _s1 = [];
                            _s1 = Utils.getSectionIndex(pExam.attributes.sections[xx], "eExam.AbdomenGroup");
                            if (_s1[0] != -1) {
                                var AbdomenGroupArray = [];
                                for (var x = 0; x <= _s1.length - 1; x++) {
                                    var _abdArr = [];
                                    var _ex1 = [];
                                    var AbdomenGroup = {};
                                    _ex1 = pExam.attributes.sections[xx].attributes.sections[_s1[x]].attributes.elements;

                                    /////////eExam.10
                                    var _exam = [];
                                    var _val = [];
                                    var _text = [];
                                    var valObj = {};
                                    valObj.IsNull = true;
                                    _exam = Utils.getValue(_ex1, "eExam.10");
                                    if (_exam.IsNull != true) {
                                        _val.push(_exam.ValueArray[0].val);
                                        _text.push(_exam.ValueArray[0].text);
                                        valObj.IsNull = false;
                                        valObj.CodeText = _text.slice(0);
                                        valObj.vSet = _val.slice(0);
                                        AbdomenGroup["eExam.10"] = valObj;
                                        delete valObj;
                                    };

                                    /////////eExam.11
                                    var _exam = [];
                                    var _val = [];
                                    var _text = [];
                                    var valObj = {};
                                    valObj.IsNull = true;

                                    _exam = Utils.getValue(_ex1, "eExam.11");

                                    if (_exam.HasPN == true) {
                                        _val.push("8801005");
                                        _text.push("Exam Finding NotPresent");
                                        valObj.PN = true;
                                    }
                                    else {
                                        if (_exam.IsNull != true) {
                                            for (var i = 0; i < _exam.ValueArray.length; i++) {
                                                if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) {
                                                    _val.push(_exam.ValueArray[i].val);
                                                    _text.push(_exam.ValueArray[i].text);
                                                }
                                            }
                                        };
                                        valObj.CodeText = _text.slice(0);
                                        valObj.vSet = _val.slice(0);
                                        valObj.IsNull = false;
                                        AbdomenGroup["eExam.11"] = valObj;
                                        delete valObj;
                                    };

                                    AbdomenGroupArray.push(AbdomenGroup);
                                    delete AbdomenGroup
                                };
                                AssessmentGroup.AbdomenGroup = AbdomenGroupArray.slice(0);
                            }
                        };

                        ////////////////////////////// Spine Group////////////////////

                        _s2 = Utils.getSectionIndex(pExam.attributes.sections[xx], "eExam.SpineGroup");
                        if (_s2[0] != -1) {
                            var SpineGroupArray = [];
                            for (var x = 0; x < _s2.length; x++) {
                                var SpineGroup = {};

                                var _spGrp = [];
                                _spGrp = pExam.attributes.sections[xx].attributes.sections[_s2[x]].attributes.elements;

                                /////////eExam.13
                                var _exam = [];
                                var _text = [];
                                var _val = [];
                                var valObj = {};
                                valObj.IsNull = true;

                                _exam = Utils.getValue(_spGrp, "eExam.13");
                                if (_exam.IsNull != true) {
                                    _val.push(_exam.ValueArray[0].val);
                                    valObj.IsNull = false;
                                    _text.push(_exam.ValueArray[0].text);
                                    valObj.CodeText = _text.slice(0);

                                    valObj.vSet = _val.slice(0);
                                    SpineGroup["eExam.13"] = valObj;;
                                    delete valObj;
                                };

                                /////////eExam.14
                                var _exam = [];
                                var _val = [];
                                var _text = [];
                                var valObj = {};
                                valObj.IsNull = true;
                                _exam = Utils.getValue(_spGrp, "eExam.14");
                                if (_exam.HasPN == true) {
                                    _val.push("8801005");
                                    _text.push("Exam Finding NotPresent");
                                    valObj.PN = true;
                                }
                                else {
                                    if (_exam.IsNull != true) {
                                        for (var i = 0; i < _exam.ValueArray.length; i++) {
                                            if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) {
                                                _val.push(_exam.ValueArray[i].val);
                                                _text.push(_exam.ValueArray[i].text);
                                            }
                                        }
                                    }
                                };
                                valObj.CodeText = _text.slice(0);
                                valObj.IsNull = false;
                                valObj.vSet = _val.slice(0);
                                SpineGroup["eExam.14"] = valObj;;
                                delete valObj;

                                SpineGroupArray.push(SpineGroup)
                            }
                            AssessmentGroup.SpineGroup = SpineGroupArray.slice(0);
                        };

                        ////////////////////////ExtremityGroup ////////////////////                
                        var _s3 = [];
                        _s3 = Utils.getSectionIndex(pExam.attributes.sections[xx], "eExam.ExtremityGroup");
                        if (_s3[0] != -1) {
                            var ExtremityGroupArray = [];
                            for (var x = 0; x < _s3.length; x++) {
                                var ExtremityGroup = {};

                                var _ex2 = [];
                                _ex2 = pExam.attributes.sections[xx].attributes.sections[_s3[x]].attributes.elements;

                                /////////eExam.15
                                var _exam = [];
                                var _val = [];
                                var _text = [];
                                var valObj = {};
                                valObj.IsNull = true;
                                var _ex1 = []
                                _exam = Utils.getValue(_ex2, "eExam.15");
                                if (_exam.IsNull != true) {
                                    _val.push(_exam.ValueArray[0].val);
                                    valObj.IsNull = false;
                                    _text.push(_exam.ValueArray[0].text);

                                    valObj.CodeText = _text.slice(0);
                                    valObj.vSet = _val.slice(0);
                                    ExtremityGroup["eExam.15"] = valObj;;
                                    delete valObj;
                                };

                                /////////eExam.16
                                var _exam = [];
                                var _val = [];
                                var _text = [];
                                var valObj = {};
                                valObj.IsNull = true;

                                _exam = Utils.getValue(_ex2, "eExam.16");
                                if (_exam.HasPN == true) {
                                    _val.push("8801005");
                                    _text.push("Exam Finding NotPresent");
                                    valObj.PN = true;
                                }
                                else {
                                    if (_exam.IsNull != true) {
                                        for (var i = 0; i < _exam.ValueArray.length; i++) {
                                            if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) {
                                                _val.push(_exam.ValueArray[i].val);
                                                valObj.IsNull = false;
                                                valObj.IsNull = false;
                                            }
                                        }
                                    }
                                };
                                valObj.CodeText = _text.slice(0);
                                valObj.vSet = _val.slice(0);
                                ExtremityGroup["eExam.16"] = valObj;;
                                delete valObj;


                                ExtremityGroupArray.push(ExtremityGroup)
                                delete ExtremityGroup;
                            }
                            AssessmentGroup.ExtremityGroup = ExtremityGroupArray;
                        };


                        /////////////////////////////////////////////EyeGroup
                        var EyeGArray = [];
                        var EyeGroup = {};
                        _s4 = Utils.getSectionIndex(pExam.attributes.sections[xx], "eExam.EyeGroup");

                        if (_s4[0] != -1) {
                            for (var x = 0; x < _s4.length; x++) {
                                var _ex3 = [];
                                var _eyGrp = [];
                                _ex3 = pExam.attributes.sections[xx].attributes.sections[_s4[x]].attributes.elements;

                                /////////eExam.17
                                var _exam = [];
                                var _val = [];
                                var _text = [];
                                var valObj = {};
                                valObj.IsNull = true;

                                _exam = Utils.getValue(_ex3, "eExam.17");
                                if (_exam.IsNull != true) {
                                    _val.push(_exam.ValueArray[0].val);
                                    valObj.IsNull = false;
                                    _text.push(_exam.ValueArray[0].text);

                                    valObj.CodeText = _text.slice(0);
                                    valObj.vSet = _val.slice(0);
                                    EyeGroup["eExam.17"] = valObj;;
                                    delete valObj;
                                };


                                /////////eExam.18
                                var _exam = [];
                                var _val = [];
                                var _text = [];
                                var valObj = {};
                                valObj.IsNull = true;

                                _exam = Utils.getValue(_ex3, "eExam.18");
                                if (_exam.HasPN == true) {
                                    _val.push("8801005");
                                    _text.push("Exam Finding NotPresent");
                                    valObj.PN = true;
                                }
                                else {
                                    if (_exam.IsNull != true) {
                                        for (var i = 0; i < _exam.ValueArray.length; i++) {
                                            if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) {
                                                _val.push(_exam.ValueArray[i].val);
                                                _text.push(_exam.ValueArray[i].text);
                                                valObj.IsNull = false;
                                            }
                                        }
                                    }
                                };
                                valObj.CodeText = _text.slice(0);
                                valObj.vSet = _val.slice(0);
                                EyeGroup["eExam.18"] = valObj;;
                                delete valObj;

                                EyeGArray.push(EyeGroup)
                            };
                            AssessmentGroup.EyeGroup = EyeGArray.slice(0);
                        };


                        /////////eExam.19
                        var _exam = [];
                        var _val = [];
                        var valObj = {};
                        var _text = [];
                        valObj.IsNull = true;

                        _exam = Utils.getValue(_assArr, "eExam.19");

                        if (_exam.HasPN == true) {
                            _val.push("8801005");
                            _text.push("Exam Finding NotPresent");
                            valObj.PN = true;
                        }
                        else {
                            if (_exam.IsNull != true) {
                                for (var i = 0; i < _exam.ValueArray.length; i++) {
                                    if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) {
                                        _val.push(_exam.ValueArray[i].val);
                                        _text.push(_exam.ValueArray[i].text);
                                        valObj.IsNull = false;
                                    }
                                }
                            };
                            valObj.CodeText = _text.slice(0);
                            valObj.vSet = _val.slice(0);
                            AssessmentGroup["eExam.19"] = valObj;;
                            delete valObj;

                        }
                    }
                };



                /////////eExam.20
                var _exam = [];
                var _val = [];
                var _text = [];
                var valObj = {};
                valObj.IsNull = true;
                _exam = Utils.getValue(_assArr, "eExam.20");
                if (_exam.HasPN == true) {
                    _val.push("8801005");
                    _text.push("Exam Finding NotPresent");
                    valObj.PN = true;
                }
                else {
                    if (_exam.IsNull != true) {
                        for (var i = 0; i < _exam.ValueArray.length; i++) {
                            if ((_exam.ValueArray[i].HasValue == true) && (_val.indexOf(_exam.ValueArray[i].val) == -1)) {
                                _val.push(_exam.ValueArray[i].val);
                                _text.push(_exam.ValueArray[i].text);
                                valObj.IsNull = false;
                            }
                        }
                    }
                };
                valObj.CodeText = _text.slice(0);
                valObj.vSet = _val.slice(0);
                AssessmentGroup["eExam.20"] = valObj;;
                delete valObj;

                AssessmentArray.push(AssessmentGroup)
            };
            eExam.AssessmentGroup = AssessmentArray.slice(0);
        }
    }
    return eExam;
};

var seteExamNull = function () {

    ////////eExam.01 
    var _exam = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;

    if (TheCall.IsCancelled == true) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable");
        valObj.NV = true;
    }
    else if (TheCall.HasPatient == false) {
        val.push(NOTAPPLICABLE);
        _text.push("Not Applicable");
        valObj.NV = true;
    }
    else if (Utils.ReportingRequired("eExam.01") == true) {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded");
        valObj.NV = true;
    }
    else {
        _val.push(NOTREPORTING);
        _text.push("Not Reporting");
        valObj.NV = true;
    };

    valObj.vSet = _val.slice(0);
    eExam["eExam.01"] = valObj;
    delete valObj;

    ////////eExam.02
    var _exam = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;

    if (TheCall.IsCancelled == true) {
        _val.push(NOTAPPLICABLE);
        _text.push("Not Applicable");
        valObj.NV = true;
    }
    else if (TheCall.HasPatient == false) {
        val.push(NOTAPPLICABLE);
        _text.push("Not Applicable");
        valObj.NV = true;
    }
    else if (Utils.ReportingRequired("eExam.02") == true) {
        _val.push(NOTRECORDED);
        _text.push("Not Recorded");
        valObj.NV = true;
    }
    else {
        _val.push(NOTREPORTING);
        _text.push("Not Reporting");
        valObj.NV = true;
    };

    valObj.vSet = _val.slice(0);
    eExam["eExam.02"] = valObj;
    delete valObj;

    return eExam;
}