var setePatient = function (TheCall) {
    var pPatient = new Object()
    var ePatient = new Object()
    pPatient = TheCall.pPatient;
    
    if (pPatient.HasDataSet == false){
        
        ePatient["IsValid"] = false;
        ePatient["HasErrors"] = true;
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "ePatient", Description: "Missing Mandatory.  ePatient.HasDataSet = false" })
        ePatient.Errors = ErrorList.slice(0);
        return ePatient;
    }
    else{
        
        ePatient["HasPatient"] =true;
        var _eL = []
        
        _eL = pPatient.attributes.elements;
        
        if (ePatient["HasPatient"] == true) 
        {            
            //////////////////////ePatient.01
            var _patient = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _patient = getValue(_eL, "ePatient.01");
            if (_patient.IsNull != true) {
                valObj.IsNull = false;
                _val.push(_patient.ValueArray[0].val);

            };
            valObj.vSet = _val.slice(0);
            ePatient["ePatient.01"] = valObj;
            delete valObj;

            ///////////ePatient.05////////
            var _patient = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;

            _patient = getValue(_eL, "ePatient.05");
            if (ePatient["HasPatient"] == true) {
                if (_patient.IsNull == true) {
                    if (isRequiredStateElement("ePatient.05") == true) {

                        ePatient["HasErrors"] = true;
                        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "ePatient", Description: "Missing Mandatory.  Patient Address" })
                        ePatient.Errors = ErrorList.slice(0);
                    }
                }
                else {
                    _val.push(_patient.ValueArray[0].val);
                    valObj.IsNull = false;

                    valObj.vSet = _val.slice(0);
                    ePatient["ePatient.05"] = valObj;
                    delete valObj;
                }
            };
                  
            
            ///////////ePatient.06////////
            _patient = getValue(_eL, "ePatient.06");
            if (ePatient["HasPatient"] == true) {
                if (_patient.IsNull == true) {
                    if (isRequiredStateElement("ePatient.06") == true) {

                        ePatient["HasErrors"] = true;
                        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "ePatient", Description: "Missing Mandatory.  Patient Address" })
                        ePatient.Errors = ErrorList.slice(0);
                    }
                }
                else {
                    _val.push(_patient.ValueArray[0].val[0]);
                    valObj.IsNull = false;

                    valObj.vSet = _val.slice(0);
                    ePatient["ePatient.06"] = valObj;
                    delete valObj;
                }
            };
            

            ///////////ePatient.07////////
            var _patient = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;

            _patient = getValue(_eL, "ePatient.07");
            if (ePatient["HasPatient"] == true) 
            {
                if (_patient.IsNull == true) {
                    if (isRequiredStateElement("ePatient.07")) {
                        _val.push("7701003");
                        valObj.NV = true;
                    }
                }
                else {
                    _val.push(_patient.ValueArray[0].val);
                    valObj.IsNull = false;
                    valObj.vSet = _val.slice(0);
                }
            }
            else {
                _val.push("7701001");
                valObj.NV = true;
            };
            valObj.vSet = _val.slice(0);
            ePatient["ePatient.07"] =  valObj;            
            delete valObj;
    
            ///////////ePatient.08////////
            var _patient = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _patient = getValue(_eL, "ePatient.08");
            if (ePatient["HasPatient"] == true) 
            {
                if (_patient.IsNull == true) 
                {
                    if (isRequiredStateElement("ePatient.08")) {
                        _val.push("7701003");
                        valObj.NV = true;
                    }
                }
                else {
                    _val.push(_patient.ValueArray[0].val);
                    valObj.IsNull = false;
                }
            }
            else {
                _val.push("7701001");
                valObj.NV = true;

            };
            valObj.vSet = _val.slice(0);
            ePatient["ePatient.08"] =  valObj;            
            delete valObj;
            
            ///////////ePatient.09////////
            var _patient = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _patient = getValue(_eL, "ePatient.09");
            if (ePatient["HasPatient"] == true) {
                if (_patient.IsNull == true) {
                    if (isRequiredStateElement("ePatient.09")) {
                        _val.push("7701003");
                        valObj.NV = true;
                    }
                }
                else {
                    _val.push(_patient.ValueArray[0].val);
                    valObj.IsNull = false;

                }
            }
            else {
                _val.push("7701001");
                valObj.NV = true;
            };
            valObj.vSet = _val.slice(0);
            ePatient["ePatient.09"] =  valObj;            
            delete valObj;


            ///////////ePatient.10////////
            var _patient = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _patient = getValue(_eL, "ePatient.10");
            if (ePatient["HasPatient"] == true) {
                if (_patient.IsNull != true) {
                    _val.push(_patient.ValueArray[0].val);
                    valObj.IsNull = false;
                }
            };
            valObj.vSet = _val.slice(0);
            ePatient["ePatient.10"] =  valObj;            
            delete valObj;

            ///////////ePatient.11////////
            var _patient = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _patient = getValue(_eL, "ePatient.11");
            if (ePatient["HasPatient"] == true) {
                if (_patient.IsNull != true) {
                    _val.push(_patient.ValueArray[0].val);
                    valObj.IsNull = false;
                
                }
            };
            valObj.vSet = _val.slice(0);
            ePatient["ePatient.11"] =  valObj;            
            delete valObj;

            ///////////ePatient.12////////
            var _patient = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _patient = getValue(_eL, "ePatient.12");
            if (ePatient["HasPatient"] == true) {
                if (_patient.IsNull != true) {
                    _val.push(_patient.ValueArray[0].val);
                    valObj.IsNull = false;
                    
                }
            };
            valObj.vSet = _val.slice(0);
            ePatient["ePatient.12"] =  valObj;            
            delete valObj;

            ///////////ePatient.13////////
            var _patient = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _patient = getValue(_eL, "ePatient.13");
            if (ePatient["HasPatient"] == true) {
                if (_patient.IsNull == true) {
                    if (isRequiredStateElement("ePatient.13")) {
                        _val.push("7701003");
                        valObj.NV = true;
                    }
                }
                else {
                    _val.push(_patient.ValueArray[0].val);
                    valObj.IsNull = false;
                }
            }
            else {
                _val.push("7701001");
                valObj.NV = true;

            };
            valObj.vSet = _val.slice(0);
            ePatient["ePatient.13"] =  valObj;            
            delete valObj;
            
            ///////////ePatient.14////////
            var _patient = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _patient = getValue(_eL, "ePatient.14");
            if (ePatient["HasPatient"] == true) {
                if (_patient.IsNull == true) {
                    if (isRequiredStateElement("ePatient.14")) {
                        _val.push("7701003")
                        valObj.NV = true;
                    }
                }
                else {
                    for (var i = 0; i < _patient.ValueArray.length; i++) {
                        if ((_patient.ValueArray[i].HasValue == true) && (_val.indexOf(_patient.ValueArray[i].val) == -1)) {
                            _val.push(_patient.ValueArray[0].val);
                            valObj.IsNull = false;
                        }
                    };
                }
            }
            else {
                _val.push("7701001");
                valObj.NV = true;
            };
            valObj.vSet = _val.slice(0);
            ePatient["ePatient.14"] =  valObj;            
            delete valObj;

            ///////////ePatient.17////////
            var _patient = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _patient = getValue(_eL, "ePatient.17");
            if (ePatient["HasPatient"] == true) {
                if (_patient.IsNull == true) 
                {
                    if (_patient.HasPN == true) 
                    {
                        if (_patient.ValueArray[0].pn[0] == "D")
                        {
                            _val.push("8801003")
                            valObj.PN = true;
                        }
                        else if (_patient.ValueArray[0].pn[0] == "R")
                        {
                            _val.push("8801019")
                            valObj.PN = true;
                        }
                        else if (_patient.ValueArray[0].pn[0] == "U")
                        {
                            _val.push("8801023")
                            valObj.PN = true;
                        }
                    }
                    else {
                        if (isRequiredStateElement("ePatient.17")) {
                            _val.push("7701003")
                            valObj.NV = true;
                        }
                        else {
                            _val.push("7701005")
                            valObj.NV = true;
                        }
                    }
                }
                else {
                    _val.push(_patient.ValueArray[0].val);
                    valObj.IsNull = false;
                    
                }
            }
            else {
                _val.push("7701001")
                valObj.NV = true;
            };
            valObj.vSet = _val.slice(0);
            ePatient["ePatient.17"] =  valObj;            
            delete valObj;

            
            //ePatient.18////////////
            var _patient = [];
            var _val = [];
            var valObj = {};
            ph = [];
            valObj.IsNull = true;
            _patient = getValue(_eL, "ePatient.18");            
            if (ePatient["HasPatient"] == true)
            {
                if (_patient.IsNull != true)
                {
                    for (var i = 0; i < _patient.ValueArray.length; i++)
                    {
                        ph = [];
                        if (typeof _patient.ValueArray[i].PhoneNumberType != 'undefined') {
                            ph.PhoneNumberType = _patient.ValueArray[i].PhoneNumberType;
                        };
                        ph.val = _patient.ValueArray[i].val;
                        valObj.IsNull = false;
                        _val.push(ph)
                    }
                };
            };
             valObj.vSet = _val.slice(0);            
            ePatient["ePatient.18"] = valObj;            
            delete valObj;

            //ePatient.19////////////
            var _patient = [];
            var _val = [];
            var valObj = {};
            ph = [];
            valObj.IsNull = true;
            _patient = getValue(_eL, "ePatient.19");

            if (ePatient["HasPatient"] == true) {
                if (_patient.IsNull != true) {
                    for (var i = 0; i < _patient.ValueArray.length; i++) {
                        ph = [];
                        if (typeof _patient.ValueArray[i].EMailType != 'undefined') {
                            ph.EmailType = _patient.ValueArray[i].EMailType;
                        };
                        ph.val = _patient.ValueArray[i].val;
                        valObj.IsNull = false;
                        _val.push(ph)
                    }
                };
            };
            valObj.vSet = _val.slice(0);
            ePatient["ePatient.19"] = valObj;
            delete valObj;

            //ePatient.20////////////
            var _patient = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _patient = getValue(_eL, "ePatient.20");
            if (ePatient["HasPatient"] == true) {
                if (_patient.IsNull != true) {
                    _val.push(_patient.ValueArray[0].val);
                }
            };
            valObj.vSet = _val.slice(0);
            ePatient["ePatient.20"] =  valObj;            
            delete valObj;

            //ePatient.21////////////
            var _patient = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _patient = getValue(_eL, "ePatient.21");
            if (ePatient["HasPatient"] == true) {
                if (_patient.IsNull != true) {
                    _val.push(_patient.ValueArray[0].val);
                }
            };
            valObj.vSet = _val.slice(0);
            ePatient["ePatient.20"] =  valObj;            
            delete valObj;
            
      
        };
      
    ////////////////////////////////////NAME GROUP////////////////////////////
    
        _nI = getSectionIndex(pPatient, "ePatient.PatientNameGroup");
        if (_nI != -1)
        {
            _PNG = []
            var _PNG = pPatient.attributes.sections[_nI].attributes.elements;
            
            //////////////////////ePatient.02
            var _patient = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _patient = getValue(_PNG, "ePatient.02");            
            if (ePatient["HasPatient"] == true)
            {
                if (_patient.IsNull == true)
                {
                    if (_patient.HasPN == true)
                    {
                    if (_patient.ValueArray[0].pn[0] == "R")
                        {
                            _val.push("8801019")
                            valObj.PN = true;
                        }
                    else if (_patient.ValueArray[0].pn[0] == "U")
                            {
                            _val.push("8801023");
                            valObj.PN = true;
                        }
                    }
                    else 
                    {
                        if (isRequiredStateElement("ePatient.02")) 
                        {
                            _val.push("7701003");
                            valObj.NV = true;
                        }
                        else 
                        {
                            _val.push("7701005")
                            valObj.NV = true;
                        }
                    }
                }
                else {
                    _val.push(_patient.ValueArray[0].val);
                    valObj.IsNull = false;
                }
            }
            else {
                _val.push("7701001")
                valObj.NV = true;
            };
            valObj.vSet = _val.slice(0);
            ePatient["ePatient.02"]= valObj;            
            delete valObj;
            
            ///////////ePatient.03////////
            var _patient = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _patient = getValue(_PNG, "ePatient.03");

            
            if (ePatient["HasPatient"] == true)
            {
                if (_patient.IsNull == true)
                {
                    if (_patient.HasPN == true)
                    {
                    if (_patient.ValueArray[0].pn[0] == "R")
                        {
                            _val.push("8801019");
                            valObj.PN = true;
                        }
                    else if (_patient.ValueArray[0].pn[0] == "U"){
                            _val.push("8801023");
                            valObj.PN = true;
                        }
                    }
                    else 
                    {
                        if (isRequiredStateElement("ePatient.03")) 
                        {
                            _val.push("7701003");
                            valObj.NV = true;
                        }
                        else 
                        {
                            _val.push("7701005")
                            valObj.NV = true;
                        }
                    }
                }
                else 
                {
                    _val.push(_patient.ValueArray[0].val);
                    valObj.IsNull = false;

                }
            }
            else 
            {
                _val.push("7701001");
                valObj.NV = true;
            };
            valObj.vSet = _val.slice(0);
            
            ePatient["ePatient.03"]= valObj;            
            delete valObj;


            ///////////ePatient.04////////
            var _patient = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _patient = getValue(_PNG, "ePatient.04");
            if (ePatient["HasPatient"] == true) 
            {
                if (_patient.IsNull != true) 
                {
                    _val.push(_patient.ValueArray[0].val);
                    valObj.IsNull = false;

                }
            };
            valObj.vSet = _val.slice(0);
            ePatient["ePatient.04"]= valObj;            
            delete valObj;
        };
        //////////////////////AGE GROUP
        ////////////////////////////////////NAME GROUP////////////////////////////
        
            var _sI = [];
            _sI = getSectionIndex(pPatient, "ePatient.AgeGroup");            
            if (_sI[0] != -1)
            {
                _PAG = []
                var _PAG = pPatient.attributes.sections[_sI].attributes.elements;

                ///////////ePatient.15////////
                var _patient = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _patient = getValue(_PAG, "ePatient.15");
                if (ePatient["HasPatient"] == true) {
                    if (_patient.IsNull == true) {
                        if (isRequiredStateElement("ePatient.15")) {
                            _val.push("7701003")
                            valObj.NV = true;
                        }
                    }
                    else {
                        _val.push(_patient.ValueArray[0].val);
                        valObj.IsNull = false;
                    }
                }
                else {
                    _val.push("7701001")
                    valObj.NV = true;
                };
                valObj.vSet = _val.slice(0);
                ePatient["ePatient.15"] = valObj;
                delete valObj;

                ///////////ePatient.16////////
                var _patient = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _patient = getValue(_PAG, "ePatient.16");
                if (ePatient["HasPatient"] == true) {
                    if (_patient.IsNull == true) {
                        if (isRequiredStateElement("ePatient.16")) {
                            _val.push("7701003")
                            valObj.NV = true;
                        }
                    }
                    else {
                        _val.push(_patient.ValueArray[0].val);
                        valObj.IsNull = false;
                    }
                }
                else {
                    _val.push("7701001")
                    valObj.NV = true;
                };
                valObj.vSet = _val.slice(0);
                ePatient["ePatient.16"] = valObj;
                delete valObj;
            }
    };
    
    
    return ePatient;
};
var seteHistory = function (TheCall) 
{
    var eHistory = new Object();
    var pHistory = new Object();
    pHistory = TheCall.pHistory;
    if (pHistory.HasDataSet == false) {

        eHistory["IsValid"] = false;
        eHistory["HasErrors"] = true;
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eHistory", Description: "Missing Mandatory.  eHistory.HasDataSet = false" })
        eHistory.Errors = ErrorList.slice(0);
        return eHistory;
    }
    else {
        eHistory["IsValid"] = true;
        eHistory["HasPatient"] = true;
        var _eL = []
        ////////eHistory.01


        var _eL = [];
        var _eL = pHistory.attributes.elements;

        var _history = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _history = getValue(_eL, "eHistory.01");
        if (eHistory.IsValid == true) {
            if (_history.IsNull == true)
                if (isRequiredStateElement("eHistory.01") == true) {
                    _val.push("7701003")
                    valObj.NV = true;

                }
                else {
                    _val.push("7701005")
                    valObj.NV = true;

                }
            else {
                for (var i = 0; i < _history.ValueArray.length; i++) {
                    if ((_history.ValueArray[i].HasValue == true) && (_val.indexOf(_history.ValueArray[i].val) == -1)) {
                        _val.push(_history.ValueArray[i].val)
                        valObj.IsNull = false;
                    }
                };
            }
        }
        else {
            _val.push("7701001")
            valObj.NV = true;

        };
        valObj.vSet = _val.slice(0);
        eHistory["eHistory.01"] = valObj;
        delete valObj;

        ////////eHistory.05
        var _history = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _history = getValue(_eL, "eHistory.05");
        if (eHistory.IsValid == true) {
            if (_history.IsNull == true) {
                if (isRequiredStateElement("eHistory.05") == true) {
                    _val.push("7701003")
                    valObj.NV = true;
                }
                else {
                    _val.push("7701005")
                    valObj.NV = true;
                }
            }
            else {
                for (var i = 0; i < _history.ValueArray.length; i++) {
                    if ((_history.ValueArray[i].HasValue == true) && (_val.indexOf(_history.ValueArray[i].val) == -1)) {
                        _val.push(_history.ValueArray[i].val);
                        valObj.IsNull = false;
                    }
                };
            }
        }
        else {
            _val.push("7701001")
            valObj.NV = true;

        };
        valObj.vSet = _val.slice(0);
        eHistory["eHistory.05"] = valObj;
        delete valObj;

        ////////eHistory.06
        var _history = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _history = getValue(_eL, "eHistory.06");
        if (eHistory.IsValid == true) {
            if (_history.IsNull == true) {
                if (_history.HasPN == true) {
                    if (_history.ValueArray[0].pn[0] == "R") {
                        _val.push("8801019");
                        valObj.PN = true;
                    }
                    else if (_history.ValueArray[0].pn[0] == "U") {
                        _val.push("8801013")
                        valObj.PN = true;
                    }
                    else if (_history.ValueArray[0].pn[0] == "N") {
                        _val.push("8801023");
                        valObj.PN = true;
                    }
                }
                else
                    if (isRequiredStateElement("eHistory.06") == true) {
                        _val.push("7701003")
                        valObj.NV = true;
                    }
                    else {
                        _val.push("7701005")
                        valObj.NV = true;
                    }
            }

            else {
                for (var i = 0; i < _history.ValueArray.length; i++) {
                    if ((_history.ValueArray[i].HasValue == true) && (_val.indexOf(_history.ValueArray[i].val) == -1)) {
                        _val.push(_history.ValueArray[i].val)
                        valObj.IsNull = false;
                    }
                };
            }
        }
        else {
            _val.push("7701001")
            valObj.NV = true;

        };
        valObj.vSet = _val.slice(0);
        eHistory["eHistory.06"] = valObj;
        delete valObj;



        ////////eHistory.07
        var _history = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _history = getValue(_eL, "eHistory.07");
        if (eHistory.IsValid == false) {
            if (_history.IsNull != true) {
                var arr2 = [];
                for (var i = 0; i < _history.ValueArray.length; i++) {
                    if ((_history.ValueArray[i].HasValue == true) && (_val.indexOf(_history.ValueArray[i].val) == -1)) {
                        _val.push(_history.ValueArray[i].val)
                        valObj.IsNull = false;
                    }
                }
            }
        };
        valObj.vSet = _val.slice(0);
        eHistory["eHistory.07"] = valObj;
        delete valObj;


        ////////eHistory.08
        var _history = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _history = getValue(_eL, "eHistory.08");

        if (eHistory.IsValid == true) {
            if (_history.IsNull == true) {
                if (_history.HasPN == true) {

                    if (_history.ValueArray[0].pn[0] == "R") {
                        _val.push("8801019");
                        valObj.PN = true;
                    }
                    else if (_history.ValueArray[0].pn[0] == "UnabletoComplete") {
                        _val.push("8801023")
                        valObj.PN = true;
                    }
                    else if (_history.ValueArray[0].pn == "Unresponsive") {
                        _val.push("8801021");
                        valObj.PN = true;
                    }

                    else if (_history.ValueArray[0].pn[0] == "N") {
                        _val.push("8801015");
                        valObj.PN = true;
                    }
                }
                else {
                    if (isRequiredStateElement("eHistory.08") == true) {
                        _val.push("7701003")
                        valObj.NV = true;

                    }
                    else {
                        _val.push("7701005")
                        valObj.NV = true;

                    }
                }
            }
            else {
                for (var i = 0; i < _history.ValueArray.length; i++) {
                    if ((_history.ValueArray[i].HasValue == true) && (_val.indexOf(_history.ValueArray[i].val) == -1)) {
                        _val.push(_history.ValueArray[i].val)
                        valObj.IsNull = false;
                    }
                }
            }
        }
        else {
            _val.push("7701001")
            valObj.NV = true;

        };
        valObj.vSet = _val.slice(0);

        eHistory["eHistory.08"] = valObj;
        delete valObj;


        ////////eHistory.09
        var _history = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;

        _history = getValue(_eL, "eHistory.09");
        if (eHistory.IsValid == true) {
            if (_history.IsNull != true) {
                for (var i = 0; i < _history.ValueArray.length; i++) {
                    if ((_history.ValueArray[i].HasValue == true) && (_val.indexOf(_history.ValueArray[i].val) == -1)) {
                        _val.push(_history.ValueArray[i].val)
                        valObj.IsNull = false;
                    }
                };
            }
        };
        valObj.vSet = _val.slice(0);
        eHistory["eHistory.09"] = valObj;
        delete valObj;


        ////////eHistory.16
        var _history = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _history = getValue(_eL, "eHistory.16");
        if ((eHistory.IsValid == true)) {
            if (_history.IsNull != true) {
                _val.push(_history.ValueArray[0].val)
                valObj.IsNull = false;
            }
        };
        valObj.vSet = _val.slice(0);
        eHistory["eHistory.16"] = valObj;
        delete valObj;



        ////////eHistory.17
        var _history = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _history = getValue(_eL, "eHistory.17");
        if ((eHistory.IsValid == true)) {
            if (_history.IsNull == true) {
                if (isRequiredStateElement("eHistory.17") == true) {
                    _val.push("7701003")
                    valObj.NV = true;

                }
                else {
                    _val.push("7701005")
                    valObj.NV = true;
                }
            }
            else {
                for (var i = 0; i < _history.ValueArray.length; i++) {
                    if ((_history.ValueArray[i].HasValue == true) && (_val.indexOf(_history.ValueArray[i].val) == -1)) {
                        _val.push(_history.ValueArray[i].val);
                        valObj.IsNull = false;
                    }
                };
            }
        }
        else {
            _val.push("7701001")
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eHistory["eHistory.17"] = valObj;
        delete valObj;



        ////////eHistory.18
        var _history = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;

        _history = getValue(_eL, "eHistory.18");
        if ((eHistory.IsValid == true)) {
            if (_history.IsNull == true) {
                if (_history.HasPN == true) {
                    if (_history.ValueArray[0].pn[0] == "R") {
                        _val.push("8801019")
                        valObj.PN = true;
                    }
                    else if (_history.ValueArray[0].pn[0] == "U") {
                        _val.push("8801013");
                        valObj.PN = true;
                    }
                }
            }
            else {
                _val.push(_history.ValueArray[0].val)
                valObj.IsNull = false;
            }
        };
        valObj.vSet = _val.slice(0);
        eHistory["eHistory.18"] = valObj;
        delete valObj;


        ////////eHistory.19
        var _history = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _history = getValue(_eL, "eHistory.19");
        if (eHistory.IsValid == true) {

            if (_history.IsNull != true) {
                _val.push(_history.ValueArray[0].val)
                valObj.IsNull = false;
            };
            valObj.vSet = _val.slice(0);
            eHistory["eHistory.18"] = valObj;
            delete valObj;
//////////////////////////////////////////////////////////

            if (typeof pHistory.attributes.sections != 'undefined') {
                PractitionerGroupArray = [];
                _sectionIndex = getSectionIndex(pHistory, "eHistory.PractitionerGroup");                
                if ((eHistory.IsValid == true) && _sectionIndex.length > 0) {
                    
                    for (var x = 0; x < _sectionIndex.length; x++)
                    {
                        PractitionerGroup = new Object();
                        var _pGRP = [];
                        var _pGRP = pHistory.attributes.sections[_sectionIndex[x]].attributes.elements;
                        /////////eHistory.02
                        var _history = [];
                        var _val = [];
                        var valObj = {};
                        valObj.IsNull = true;

                        _history = getValue(_pGRP, "eHistory.02");
                        if (eHistory.IsValid == true) {
                            if (_history.IsNull != true) {
                                _val.push(_history.ValueArray[0].val)
                                valObj.IsNull = false;
                            }
                        };
                        valObj.vSet = _val.slice(0);
                        PractitionerGroup["eHistory.02"] = valObj;
                        delete valObj;


                        /////////eHistory.03
                        var _history = [];
                        var _val = [];
                        var valObj = {};
                        valObj.IsNull = true;

                        _history = getValue(_pGRP, "eHistory.03");
                        if (eHistory.IsValid == true) {
                            if (_history.IsNull != true) {
                                _val.push(_history.ValueArray[0].val)
                                valObj.IsNull = false;
                            }
                        };
                        valObj.vSet = _val.slice(0);
                        PractitionerGroup["eHistory.03"] = valObj;
                        delete valObj;


                        /////////eHistory.04
                        var _history = [];
                        var _val = [];
                        var valObj = {};
                        valObj.IsNull = true;

                        _history = getValue(_pGRP, "eHistory.04");
                        if (eHistory.IsValid == true) {
                            if (_history.IsNull != true) {
                                _val.push(_history.ValueArray[0].val)
                                valObj.IsNull = false;
                            }
                        };
                        valObj.vSet = _val.slice(0);
                        PractitionerGroup["eHistory.04"] = valObj;
                        delete valObj;
                        PractitionerGroupArray.push(PractitionerGroup)
                    };
                    
                };                
                if (typeof pHistory.attributes.sections != 'undefined') {
                    ////////////////////////////////                    
                    ImmunGroupArray = [];

                    _sectionIndex = getSectionIndex(pHistory, "eHistory.ImmunizationsGroup");
                    if ((eHistory.IsValid == true) && _sectionIndex.length > 0) {
                        for (var x = 0; x < _sectionIndex.length; x++) {
                            var ImmunizationsGroup = new Object();
                            var _eIMG = [];
                            var _eIMG = pHistory.attributes.sections[_sectionIndex[x]].attributes.elements;
                            /////////eHistory.10
                            var _history = [];
                            var _val = [];
                            var valObj = {};
                            valObj.IsNull = true;

                            _history = getValue(_eIMG, "eHistory.10");
                            if (_history.IsNull != true) {
                                _val.push(_history.ValueArray[0].val)
                                valObj.IsNull = false;
                            };
                            valObj.vSet = _val.slice(0);
                            ImmunizationsGroup["eHistory.10"] = valObj;
                            delete valObj;


                            /////////eHistory.11
                            var _history = [];
                            var _val = [];
                            var valObj = {};
                            valObj.IsNull = true;
                            _history = getValue(_eIMG, "eHistory.11");
                            if (_history.IsNull != true) {
                                _val.push(_history.ValueArray[0].val)
                                valObj.IsNull = false;
                            };

                            valObj.vSet = _val.slice(0);
                            ImmunizationsGroup["eHistory.11"] = valObj;
                            delete valObj;

                            ImmunGroupArray.push(ImmunizationsGroup)
                        };
                    };

                };
                ////////////////////////////////
                if (typeof pHistory.attributes.sections != 'undefined') {
                    _sectionIndex = getSectionIndex(pHistory, "eHistory.CurrentMedsGroup");
                    if ((eHistory.IsValid == true) && _sectionIndex.length > 0)
                    {
                        var CurrentMedsGroupArray = [];
                        for (var x = 0; x < _sectionIndex.length; x++)
                        {
                            var _eCMG = [];
                            var _eCMG = pHistory.attributes.sections[_sectionIndex[x]].attributes.elements;
                            CurrentMedsGroup = new Object();
                            ////////eHistory.12
                            var _history = [];
                            var _val = [];
                            var valObj = {};
                            valObj.IsNull = true;
                            _history = getValue(_eCMG, "eHistory.12");
                            if (_history.IsNull == true) {
                                if (_history.HasPN == true) {

                                    if (_history.ValueArray[0].pn[0] == "R") {
                                        _val.push("8801019");
                                        valObj.PN = true;
                                    }
                                    else if (_history.ValueArray[0].pn[0] == "UnabletoComplete") {
                                        _val.push("8801023")
                                        valObj.PN = true;
                                    }
                                    else if (_history.ValueArray[0].pn == "Unresponsive") {
                                        _val.push("8801021");
                                        valObj.PN = true;
                                    }

                                    else if (_history.ValueArray[0].pn[0] == "N") {
                                        _val.push("8801015");
                                        valObj.PN = true;
                                    }
                                }

                                else {

                                    if (isRequiredStateElement("eHistory.12") == true) {
                                        _val.push("7701003")
                                        valObj.NV = true;
                                    }
                                    else {
                                        _val.push("7701005")
                                        valObj.NV = true;
                                    }
                                }
                            }
                            else {
                                _val.push(_history.ValueArray[0].val)
                                valObj.IsNull = false;
                            };
                            valObj.vSet = _val.slice(0);
                            CurrentMedsGroup["eHistory.12"] = valObj;
                            delete valObj;


                            ////////eHistory.13
                            var _history = [];
                            var _val = [];
                            var valObj = {};
                            valObj.IsNull = true;
                            _history = getValue(_eCMG, "eHistory.13");
                            if (_history.IsNull != true) {
                                _val.push(_history.ValueArray[0].val)
                                valObj.IsNull = false;
                            };
                            valObj.vSet = _val.slice(0);
                            CurrentMedsGroup["eHistory.13"] = valObj;
                            delete valObj;



                            ////////eHistory.14
                            var _history = [];
                            var _val = [];
                            var valObj = {};
                            valObj.IsNull = true;
                            _history = getValue(_eCMG, "eHistory.14");
                            if (_history.IsNull != true) {
                                _val.push(_history.ValueArray[0].val)
                                valObj.IsNull = false;
                            };
                            valObj.vSet = _val.slice(0);
                            CurrentMedsGroup["eHistory.14"] = valObj;
                            delete valObj;

                            ////////eHistory.15
                            var _history = [];
                            var _val = [];
                            var valObj = {};
                            valObj.IsNull = true;
                            _history = getValue(_eCMG, "eHistory.15");
                            if (_history.IsNull != true) {
                                _val.push(_history.ValueArray[0].val)
                                valObj.IsNull = false;
                            };
                            valObj.vSet = _val.slice(0);
                            CurrentMedsGroup["eHistory.15"] = valObj;
                            delete valObj;

                            CurrentMedsGroupArray.push(CurrentMedsGroup)
                        };
                        
                    }
                }
            }
        };
        if ((typeof ImmunGroupArray != 'undefined') && (ImmunGroupArray.length > 0)) {
            eHistory.ImmunizationsGroup = ImmunGroupArray;
        };
        if ((typeof CurrentMedsGroupArray != 'undefined') && (CurrentMedsGroupArray.length > 0)) {
            eHistory.CurrentMedsGroup = CurrentMedsGroupArray;
        };
        if ((typeof PractitionerGroupArray != 'undefined') && (PractitionerGroupArray.length > 0)) {
            eHistory.PractitionerGroup = PractitionerGroupArray;
        };        
    };
    return eHistory;
    
};
var setePayment = function (TheCall) {
    
    var ePayment = new Object();
    var pPayment = new Object();
    pPayment = TheCall.pPayment;
   // console.log(TheCall.pPayment.attributes.elements)
  
    if (pPayment.HasDataSet == false) {
        ePayment["IsValid"] = false;
        ePayment["HasErrors"] = true;
        //ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "Payment", Description: "Missing Mandatory.  ePayment.HasDataSet = false" })
        // ePayment.Errors = ErrorList.slice(0);
        //return ePayment;
    }
    else {
        ePayment["IsValid"] = true;
        ePayment["HasErrors"] = false;
    };
    
        
    ///////////ONLY BILLING TRANSPORT CALLS
    ePayment["IsInsurance"] = false;
    ePayment["IsMedicaid"] = false;
    ePayment["IsMedicare"] = false;
    ePayment["IsNotBilled"] = false;
    
   // if (typeof ePayment["IsValid"] == true) {
        var _eP = [];
        _eP = pPayment.attributes.elements;
        if (_eP[0] != -1) {
            ePayment["IsValid"] = true;
        }
  //  };
    ////////////////////////////////


    
        //////////////////ePayment.01   
    var _payment = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    
    if (ePayment["IsValid"] == true)
    {
        _payment = getValue(_eP, "ePayment.01");
        console.log(_payment)
        if (_payment.IsNull == true)

        {
            valObj.NV = true;
            _val.push("7701003")
            valObj.IsNull = true;
        }
        else
        {
            _val.push(_payment.ValueArray[0].val);
            if ((_val[0] == "2601001")&&(_val[0]== "2601013"))
            {
                PaymentType = "Insurance"
                ePayment["IsInsurance"] = true;
            };
            if (_val[0] == "2601003")
            {
                ePayment.PaymentType = "Medicaid"
                ePayment["IsMedicaid"] = true;
            };
            if (_val[0] == "2601005") {
                ePayment["IsMedicare"] = true;
                ePayment.PaymentType = "Medicare"
            };
            if (_val[0] == "2601007") {
                ePayment.PaymentType = "Not Billed"
                ePayment["IsNotBilled"] = true;
            };
            valObj.IsNull = false;
        }
    }
    else
    {
        valObj.NV = true;
        _val.push("7701001")
        valObj.IsNull = true;
    };
    valObj.vSet = _val.slice(0);
    ePayment["ePayment.01"] = valObj;
    delete valObj;

    ////////////////////////////////

    if (typeof pPayment.attributes.sections != 'undefined') {
        _sI = getSectionIndex(pPayment, "ePayment.CertificateGroup");
        if (_sI[0] != -1) {
            if ((ePayment.IsValid == true) && _sectionIndex.length > 0) {

                var _cel = [];
                var _cel = pPayment.attributes.sections[_sI[0]].attributes.elements


                //////////////////ePayment.02
                var _payment = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _payment = getValue(_cel, "ePayment.02");

                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);
                    if (_val == "9922001") // If Phsysicans Certification is No, Check for Medicaide/air.
                    {
                        if ((TheCall.IsEmergent == false && ePayment.isMedicaid == true && ePayment.isMedicare == true)) {
                            Payment.HasErrors = true;
                            //ErrorList.push({ Version: "3.3.4", Severity: "2", ElementID: "ePayment.02", Description: "PCS required for Payment Type Medicare/Medicaid" })
                        }
                    }
                    else {
                        _val.push(_payment.ValueArray[0].val);
                        valObj.IsNull = false;
                    }
                };
                valObj.vSet = _val.slice(0);
                ePayment["ePayment.02"] = valObj;
                delete valObj;

                //////////////////ePayment.03
                var _payment = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;

                _payment = getValue(_cel, "ePayment.03");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);
                    if ((ePayment["ePayment.02"] == null) && (ePayment["ePayment.02"] == "9922001")) //if No PCS
                    {
                        Payment.Error = "Certification Date Provided with null Certification";
                        Payment.HasErrors = true;
                    }
                    else {
                        _val.push(_payment.ValueArray[0].val);
                        valObj.IsNull = false;
                    }
                };
                valObj.vSet = _val.slice(0);
                ePayment["ePayment.03"] = valObj;
                delete valObj;;

                //ePayment.04////////////
                var _payment = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;

                _payment = getValue(_cel, "ePayment.04");
                if (_payment.IsNull != true) {
                    if ((ePayment["ePayment.02"] == null && ePayment["ePayment.02"] == "9922001")) //if No PCS
                    {
                        Payment.Error = "Certification Reason Provided with null Certification";
                        Payment.HasErrors = true;
                    }
                    else {
                        for (var i = 0; i < _payment.ValueArray.length; i++) {
                            if ((_payment.ValueArray[i].HasValue == true) && (_val.indexOf(_payment.ValueArray[i].val) == -1)) {
                                _val.push(_payment.ValueArray[i].val);
                                valObj.IsNull = false;
                            }
                        };
                    }
                };
                valObj.vSet = _val.slice(0);
                ePayment["ePayment.04"] = valObj;
                delete valObj;

                //////////////////ePayment.05
                var _payment = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;

                _payment = getValue(_cel, "ePayment.05");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);
                    valObj.IsNull = false;
                };
                valObj.vSet = _val.slice(0);
                ePayment["ePayment.05"] = valObj;
                delete valObj;

                //////////////////ePayment.06
                var _payment = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;

                _payment = getValue(_cel, "ePayment.06");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);

                    if ((ePayment["ePayment.02"] == null && ePayment["ePayment.02"] == "9922001")) //if No PCS
                    {
                        Payment.Error = "Certification Provider Type with null Certification";
                        Payment.HasErrors = true;
                    }
                    else if ((ePayment["ePayment.02"] == null && ePayment["ePayment.02"] == "9922001")) //if No PCS
                    {
                        Payment.Error = "Certification Provider Type with null Certification";
                        Payment.HasErrors = true;
                    }
                    else {
                        _val.push(_payment.ValueArray[0].val);
                        valObj.IsNull = false;
                    }
                };
                valObj.vSet = _val.slice(0);
                ePayment["ePayment.06"] = valObj;
                delete valObj;
            

            //////////////////ePayment.07
            var _payment = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;

            _payment = getValue(_cel, "ePayment.07");
            if (_payment.IsNull != true) {
                _val.push(_payment.ValueArray[0].val);
                if ((ePayment["ePayment.02"] == null && ePayment["ePayment.02"] == "9922001")) //if No PCS
                {
                    Payment.Error = "Certification Provider Type with null Certification";
                    Payment.HasErrors = true;
                }
                else {
                    _val.push(_payment.ValueArray[0].val);
                    valObj.IsNull = false;
                };
                valObj.vSet = _val.slice(0);
                ePayment["ePayment.07"] = valObj;
                delete valObj;
            }
        }
    }
};
        
    

    //////////////////ePayment.08
    var _payment = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    _payment = getValue(_eP, "ePayment.08");
    if (_payment.IsNull != true) {
        _val.push(_payment.ValueArray[0].val);
        valObj.IsNull = false;
    };
    valObj.vSet = _val.slice(0);
    ePayment["ePayment.08"] = valObj;
    delete valObj;
    // IF NOT INSURED, SET TO NA!~
    
    ///////////////////////////////////////////////ePayment.InsuranceGroup
    if (typeof pPayment.attributes.sections != 'undefined') {
        _sING = getSectionIndex(pPayment, "ePayment.InsuranceGroup");
        if (_sING[0] != -1) {
            if ((ePayment.IsValid == true) && _sING.length > 0) {

                InsGrpArray = [];
                for (var i = 0; i < _sING.length; i++) {
                    var InsuranceGroup = new Object();

                    var listOfElements = pPayment.attributes.sections[_sING[i]].attributes.elements
                    //////////////////ePayment.09
                    var _payment = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _payment = getValue(listOfElements, "ePayment.09");
                    if (_payment.IsNull != true) {
                        _val.push(_payment.ValueArray[0].val);
                        if (ePayment["isInsurance"] == true) {
                            {
                                Payment.Error = "Insurance Not selected Payment type"
                                Payment.HasErrors = true;
                            }
                        };
                        _val.push(_payment.ValueArray[0].val);
                        valObj.IsNull = false;
                    };
                    valObj.vSet = _val.slice(0);
                    InsuranceGroup["ePayment.09"] = valObj;
                    delete valObj;

                    //////////////////ePayment.10
                    var _payment = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _payment = getValue(listOfElements, "ePayment.10");
                    if (_payment.IsNull != true) {
                        _val.push(_payment.ValueArray[0].val);
                        if (ePayment["isInsurance"] == false) {
                            {
                                Payment.Error = "Insurance Not selected Payment type"
                                Payment.HasErrors = true;
                            }
                        };
                        _val.push(_payment.ValueArray[0].val);
                        valObj.IsNull = false;
                    };
                    valObj.vSet = _val.slice(0);
                    InsuranceGroup["ePayment.10"] = valObj;
                    delete valObj;

                    //////////////////ePayment.11
                    var _payment = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _payment = getValue(listOfElements, "ePayment.11");
                    if (_payment.IsNull == true) {
                        _Payment.HasData = false;
                    }
                    else {
                        _val.push(_payment.ValueArray[0].val);
                        if (ePayment["isInsurance"] == false) {
                            {
                                Payment.Error = "Insurance Not selected Payment type"
                                Payment.HasErrors = true;
                            }
                        };

                        _val.push(_payment.ValueArray[0].val);
                        valObj.IsNull = false;
                    };
                    valObj.vSet = _val.slice(0);
                    InsuranceGroup["ePayment.11"] = valObj;
                    delete valObj;

                    //////////////////ePayment.12
                    var _payment = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;

                    _payment = getValue(listOfElements, "ePayment.12");
                    if (_payment.IsNull != true) {
                        _val.push(_payment.ValueArray[0].val);
                        if (ePayment["isInsurance"] == false) {
                            {
                                Payment.Error = "Insurance Not selected Payment type"
                                Payment.HasErrors = true;
                            }
                        };

                        _val.push(_payment.ValueArray[0].val);
                        valObj.IsNull = false;
                    };
                    valObj.vSet = _val.slice(0);
                    InsuranceGroup["ePayment.12"] = valObj;
                    delete valObj;
                    //////////////////ePayment.13
                    var _payment = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;

                    _payment = getValue(listOfElements, "ePayment.13");
                    if (_payment.IsNull != true) {
                        _val.push(_payment.ValueArray[0].val);
                        if (ePayment["isInsurance"] == false) {
                            {
                                Payment.Error = "Insurance Not selected Payment type"
                                Payment.HasErrors = true;
                            }
                        };

                        _val.push(_payment.ValueArray[0].val);
                        valObj.IsNull = false;
                    };
                    valObj.vSet = _val.slice(0);
                    InsuranceGroup["ePayment.13"] = valObj;
                    delete valObj;


                    //////////////////ePayment.14
                    var _payment = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;

                    _payment = getValue(listOfElements, "ePayment.14");
                    if (_payment.IsNull != true) {
                        _val.push(_payment.ValueArray[0].val);
                        if (ePayment["isInsurance"] == false) {
                            {
                                Payment.Error = "Insurance Not selected Payment type"
                                Payment.HasErrors = true;
                            }
                        };

                        _val.push(_payment.ValueArray[0].val);
                        valObj.IsNull = false;
                    };
                    valObj.vSet = _val.slice(0);
                    InsuranceGroup["ePayment.14"] = valObj;
                    delete valObj;

                    //////////////////ePayment.15
                    var _payment = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;


                    _payment = getValue(listOfElements, "ePayment.15");
                    if (_payment.IsNull != true) {
                        _val.push(_payment.ValueArray[0].val);
                        if (ePayment["isInsurance"] == false) {
                            {
                                Payment.Error = "Insurance Not selected Payment type";
                                Payment.HasErrors = true;
                            }
                        };
                        _val.push(_payment.ValueArray[0].val);
                        valObj.IsNull = false;
                    };
                    valObj.vSet = _val.slice(0);
                    InsuranceGroup["ePayment.15"] = valObj;
                    delete valObj;

                    //////////////////ePayment.16
                    var _payment = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;

                    _payment = getValue(listOfElements, "ePayment.16");
                    if (_payment.IsNull != true) {
                        _val.push(_payment.ValueArray[0].val);
                        if (ePayment["isInsurance"] == false) {
                            Payment.Error = "Insurance Not selected Payment type"
                            Payment.HasErrors = true;
                        };

                        _val.push(_payment.ValueArray[0].val);
                        valObj.IsNull = false;
                    };
                    valObj.vSet = _val.slice(0);
                    InsuranceGroup["ePayment.16"] = valObj;
                    delete valObj;


                    //////////////////ePayment.17

                    var _payment = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;

                    _payment = getValue(listOfElements, "ePayment.17");
                    if (_payment.IsNull != true) {
                        _val.push(_payment.ValueArray[0].val);
                        if (ePayment["isInsurance"] == false) {
                            {
                                Payment.Error = "Insurance Not selected Payment type"
                            }
                        };

                        _val.push(_payment.ValueArray[0].val);
                        valObj.IsNull = false;
                    };
                    valObj.vSet = _val.slice(0);
                    InsuranceGroup["ePayment.17"] = valObj;
                    delete valObj;

                    //////////////////ePayment.18   
                    var _payment = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;


                    _payment = getValue(listOfElements, "ePayment.18");
                    if (_payment.IsNull != true) {
                        _val.push(_payment.ValueArray[0].val);
                        if (ePayment["isInsurance"] == false) {
                            {
                                Payment.Error = "Insurance Not selected Payment type"
                            }
                        };
                        _val.push(_payment.ValueArray[0].val);
                        valObj.IsNull = false;
                    };
                    valObj.vSet = _val.slice(0);
                    InsuranceGroup["ePayment.18"] = valObj;
                    delete valObj;

                    //////////////////ePayment.19.
                    var _payment = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _payment = getValue(listOfElements, "ePayment.19");
                    if (_payment.IsNull != true) {
                        _val.push(_payment.ValueArray[0].val);
                        if (ePayment["isInsurance"] == false) {
                            {
                                _Payment.Error = "Insurance Not selected Payment type"
                            }
                        };

                        _val.push(_payment.ValueArray[0].val);
                        valObj.IsNull = false;
                    };
                    valObj.vSet = _val.slice(0);
                    InsuranceGroup["ePayment.19"] = valObj;
                    delete valObj;

                    //////////////////ePayment.20
                    var _payment = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;

                    _payment = getValue(listOfElements, "ePayment.20");
                    if (_payment.IsNull != true) {
                        _val.push(_payment.ValueArray[0].val);
                        if (ePayment["isInsurance"] == false) {
                            {
                                _Payment.Error = "Insurance Not selected Payment type"
                            }
                        };

                        _val.push(_payment.ValueArray[0].val);
                        valObj.IsNull = false;
                    };
                    valObj.vSet = _val.slice(0);
                    InsuranceGroup["ePayment.20"] = valObj;
                    delete valObj;

                    //////////////////ePayment.21
                    var _payment = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;

                    _payment = getValue(listOfElements, "ePayment.21");
                    if (_payment.IsNull != true) {
                        _val.push(_payment.ValueArray[0].val);
                        if (ePayment["isInsurance"] == false) {
                            {
                                Payment.Error = "Insurance Not selected Payment type"
                            }
                        };

                        _val.push(_payment.ValueArray[0].val);
                        valObj.IsNull = false;
                    };
                    valObj.vSet = _val.slice(0);
                    InsuranceGroup["ePayment.21"] = valObj;
                    delete valObj;

                    //////////////////ePayment.22
                    var _payment = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;


                    _payment = getValue(listOfElements, "ePayment.22");
                    if (_payment.IsNull != true) {
                        _val.push(_payment.ValueArray[0].val);
                        if (ePayment["isInsurance"] == false) {
                            {
                                Payment.Error = "Insurance Not selected Payment type"
                            }
                        };

                        _val.push(_payment.ValueArray[0].val);
                        valObj.IsNull = false;
                    };
                    valObj.vSet = _val.slice(0);
                    InsuranceGroup["ePayment.22"] = valObj;
                    delete valObj;

                    InsGrpArray.push(InsuranceGroup)
                };
                if (InsGrpArray.length > 0) {
                    ePayment.InsuranceGroup = InsGrpArray.slice(0);
                }
            }
        }
    };

    
             
    ///////////////////////////////////////////////ePayment.InsuranceGroup
    if (typeof pPayment.attributes.sections != 'undefined') 
    {
        _cRG = getSectionIndex(pPayment, "ePayment.ClosestRelativeGroup");
        if (_cRG[0] != -1) {
            if ((ePayment.IsValid == true) && _cRG.length > 0) {

                InsGrpArray = [];
                var _clrg = [];
                _clrg = pPayment.attributes.sections[_cRG[0]].attributes.elements
                ePayment["ClosestLivingRelative"] = false;

                //////////////////ePayment.23
                var _payment = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;

                _payment = getValue(_clrg, "ePayment.23");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);
                    valObj.IsNull = false;
                };
                valObj.vSet = _val.slice(0);
                ePayment["ePayment.23"] = valObj;
                delete valObj;

                //////////////////ePayment.24
                var _payment = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;

                _payment = getValue(_clrg, "ePayment.24");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);
                    valObj.IsNull = false;
                };
                valObj.vSet = _val.slice(0);
                ePayment["ePayment.24"] = valObj;
                delete valObj;

                //////////////////ePayment.25
                var _payment = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;

                _payment = getValue(_clrg, "ePayment.25");
                if (_payment.IsNull != true) {
                    if (ePayment["ClosestLivingRelative"] == false) {
                        ePayment.Error = "Closest Living Relative Not Identified - No Name"
                    }
                    else {
                        _val.push(_payment.ValueArray[0].val);
                        valObj.IsNull = false;
                    }
                };
                valObj.vSet = _val.slice(0);
                ePayment["ePayment.25"] = valObj;
                delete valObj;

                //////////////////ePayment.26
                var _payment = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;


                _payment = getValue(_clrg, "ePayment.26");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);
                    if (ePayment["ClosestLivingRelative"] == false) {
                        ePayment.Error = "Closest Living Relative Not Identified - No Name"
                    }
                    else {
                        _val.push(_payment.ValueArray[0].val);
                        valObj.IsNull = false;
                    }
                };
                valObj.vSet = _val.slice(0);
                ePayment["ePayment.26"] = valObj;
                delete valObj;

                //////////////////ePayment.27
                var _payment = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;


                _payment = getValue(_clrg, "ePayment.27");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);
                    if (ePayment["ClosestLivingRelative"] == false) {
                        ePayment.Error = "Closest Living Relative Not Identified - No Name"
                    }
                    else {
                        _val.push(_payment.ValueArray[0].val);
                        valObj.IsNull = false;
                    }
                };
                valObj.vSet = _val.slice(0);
                ePayment["ePayment.27"] = valObj;
                delete valObj;

                //////////////////ePayment.28
                var _payment = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _payment = getValue(_clrg, "ePayment.28");
                if (_payment.IsNull != true) {
                    _val.push(_payment.ValueArray[0].val);
                    if (ePayment["ClosestLivingRelative"] == false) {
                        ePayment.Error = "Closest Living Relative Not Identified - No Name"
                    }
                    else {
                        _val.push(_payment.ValueArray[0].val);
                        valObj.IsNull = false;
                    }
                };
                valObj.vSet = _val.slice(0);
                ePayment["ePayment.28"] = valObj;
                delete valObj;
            };
            //////////////////ePayment.29
            var _payment = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;


            _payment = getValue(_clrg, "ePayment.29");
            if (_payment.IsNull != true) {
                _val.push(_payment.ValueArray[0].val);
                if (ePayment["ClosestLivingRelative"] == false) {
                    ePayment.Error = "Closest Living Relative Not Identified - No Name"
                }
                else {
                    _val.push(_payment.ValueArray[0].val);
                    valObj.IsNull = false;
                }
            };
            valObj.vSet = _val.slice(0);
            ePayment["ePayment.29"] = valObj;
            delete valObj;

            //////////////////ePayment.30
            var _payment = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _payment = getValue(_clrg, "ePayment.30");
            if (_payment.IsNull != true) {
                _val.push(_payment.ValueArray[0].val);
                if (ePayment["hasClosestLivingRelative"] == false) {
                    ePayment.Error = "Closest Living Relative Not Identified - No Name"
                }
                else {

                    _val.push(_payment.ValueArray[0].val);
                    valObj.IsNull = false;
                }
            };
            valObj.vSet = _val.slice(0);
            ePayment["ePayment.30"] = valObj;
            delete valObj;

            //////////////////ePayment.31
            var _payment = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _payment = getValue(_clrg, "ePayment.31");
            if (_payment.IsNull != true) {
                //  if (ePayment["hasClosestLivingRelative"] == false) {
                //      _Payment.Error = "Closest Living Relative Not Identified - No Name"
                //  }
                //  else {
                var arr2 = [];
                for (var i = 0; i < _payment.ValueArray.length; i++) {
                    _phoneType = "";
                    if ((_payment.ValueArray[i].HasValue == true) && (_val.indexOf(_payment.ValueArray[i].val) == -1)) {
                        var _pObj = new Object();
                        _val.push(_payment.ValueArray[i].val);

                    };
                }
                //};

                valObj.IsNull = false;
            };
            valObj.vSet = _val.slice(0);
            ePayment["ePayment.37"] = valObj;
            delete valObj;

            //////////////////ePayment.32
            var _payment = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;

            _payment = getValue(_clrg, "ePayment.32");
            if (_payment.IsNull != true) {
                _val.push(_payment.ValueArray[0].val);
                valObj.IsNull = false;
            };
            valObj.vSet = _val.slice(0);
            ePayment["ePayment.32"] = valObj;
            delete valObj;
        
    }
};//ClosestRelativeGroup



    _sectionIndex = getSectionIndex(pPayment, "ePayment.EmployerGroup");
    if (_sectionIndex >= 0) {
        var _eg = pPayment.attributes.sections[_sectionIndex].attributes.elements
        //////////////////ePayment.33
        var _payment = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;

        _payment = getValue(_eg, "ePayment.33");
        if (_payment.IsNull != true) {
            _val.push(_payment.ValueArray[0].val);
            valObj.IsNull = false;
        };
        valObj.vSet = _val.slice(0);
        ePayment["ePayment.33"] = valObj;
        delete valObj;

        //////////////////ePayment.34
        var _payment = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;


        _payment = getValue(_eg, "ePayment.34");
        if (_payment.IsNull != true) {
            _val.push(_payment.ValueArray[0].val);
            valObj.IsNull = false;
        };
        valObj.vSet = _val.slice(0);
        ePayment["ePayment.34"] = valObj;
        delete valObj;

        //////////////////ePayment.35
        var _payment = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;

        _payment = getValue(_eg, "ePayment.35");
        if (_payment.IsNull != true) {
            _val.push(_payment.ValueArray[0].val);
            valObj.IsNull = false;
        };
        valObj.vSet = _val.slice(0);
        ePayment["ePayment.35"] = valObj;
        delete valObj;

        //////////////////ePayment.36
        var _payment = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;


        _payment = getValue(_eg, "ePayment.36");
        if (_payment.IsNull != true) {
            _val.push(_payment.ValueArray[0].val);
            valObj.IsNull = false;
        };
        valObj.vSet = _val.slice(0);
        ePayment["ePayment.36"] = valObj;
        delete valObj;

        //////////////////ePayment.37
        var _payment = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;


        _payment = getValue(_eg, "ePayment.37");

        if (_payment.IsNull != true) {
            _val.push(_payment.ValueArray[0].val);
            valObj.IsNull = false;
        };
        valObj.vSet = _val.slice(0);
        ePayment["ePayment.37"] = valObj;
        delete valObj;

        //////////////////ePayment.38
        var _payment = []
        var _val = []

        _payment = getValue(_eg, "ePayment.38");
        if (_payment.IsNull != true) {
            _val.push(_payment.ValueArray[0].val);
            valObj.IsNull = false;

        };
        valObj.vSet = _val.slice(0);
        ePayment["ePayment.38"] = valObj;
        delete valObj;


        //////////////////ePayment.39
        var _payment = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;

        _payment = getValue(_eg, "ePayment.39");
        if (_payment.IsNull != true) {
            //  if (ePayment["hasClosestLivingRelative"] == false) {
            //      _Payment.Error = "Closest Living Relative Not Identified - No Name"
            //  }
            //  else {
            for (var i = 0; i < _payment.ValueArray.length; i++) {
                _phoneType = "";
                if ((_payment.ValueArray[i].HasValue == true) && (_val.indexOf(_payment.ValueArray[i].val) == -1)) {
                    var _pObj = new Object();
                    _val.push(_payment.ValueArray[i].val)
                    _phoneType = _payment.ValueArray[i].PhoneNumberType
                    if (_payment.ValueArray[i].val != null) {

                        valObj.IsNull = false;
                    };
                };
            }
            //};
        };
        valObj.vSet = _val.slice(0);
        ePayment["ePayment.39"] = valObj;
        delete valObj;
    };
   
    //////////////////ePayment.40
    var _payment = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    _payment = getValue(_eP, "ePayment.40");
    if (_payment.IsNull != true) {
        _val.push(_payment.ValueArray[0].val);
        valObj.IsNull = false;
    };
    valObj.vSet = _val.slice(0);
    ePayment["ePayment.40"] = valObj;
    delete valObj;

    //////////////////ePayment.41
    var _payment = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    _payment = getValue(_eP, "ePayment.41");

        if (_payment.IsNull != true) 
        {        
            for (var i = 0; i < _payment.ValueArray.length; i++) 
            {
                if ((_payment.ValueArray[i].HasValue == true) && (_val.indexOf(_payment.ValueArray[i].val) == -1)) 
                {
                    _val.push(_payment.ValueArray[i].val);
                    valObj.IsNull = false;
                }
            };
        
        };
        valObj.vSet = _val.slice(0);
        ePayment["ePayment.41"] = valObj;
        delete valObj;

    //////////////////ePayment.42
    var _payment = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    _payment = getValue(_eP, "ePayment.42");
    if (_payment.IsNull != true) {                
        for (var i = 0; i < _payment.ValueArray.length; i++) 
        {
            if ((_payment.ValueArray[i].HasValue == true) && (_val.indexOf(_payment.ValueArray[i].val) == -1)) 
            {
                _val.push(_payment.ValueArray[i].val);
                valObj.IsNull = false;
            }
        };
    };
    valObj.vSet = _val.slice(0);
    ePayment["ePayment.42"] = valObj;
    delete valObj;

    //////////////////ePayment.43
    var _payment = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;

    _payment = getValue(_eP, "ePayment.43");
    if (_payment.IsNull != true) {
        _val.push(_payment.ValueArray[0].val);
        valObj.IsNull = false;
    };
    valObj.vSet = _val.slice(0);
    ePayment["ePayment.43"] = valObj;
    delete valObj;

    //////////////////ePayment.44
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    _payment = getValue(_eP, "ePayment.44");
    if (_payment.IsNull != true) {
        for (var i = 0; i < _payment.ValueArray.length; i++) {
            if ((_payment.ValueArray[i].HasValue == true) && (_val.indexOf(_payment.ValueArray[i].val) == -1)) {
                _val.push(_payment.ValueArray[i].val);
                valObj.IsNull = false;
            }
        };
    };
    valObj.vSet = _val.slice(0);
    ePayment["ePayment.44"] = valObj;
    delete valObj;


    //////////////////ePayment.45
    var _payment = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;

    _payment = getValue(_eP, "ePayment.45");
    if (_payment.IsNull != true) {
        _val.push(_payment.ValueArray[0].val);
        valObj.IsNull = false;

    };
    valObj.vSet = _val.slice(0);
    ePayment["ePayment.45"] = valObj;
    delete valObj;

    //////////////////ePayment.46
    var _payment = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;

    _payment = getValue(_eP, "ePayment.46");
    if (_payment.IsNull != true) {
        _val.push(_payment.ValueArray[0].val);
        valObj.IsNull = false;
    };
    valObj.vSet = _val.slice(0);
    ePayment["ePayment.46"] = valObj;
    delete valObj;

    //////////////////ePayment.47
    var _payment = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    _payment = getValue(_eP, "ePayment.47");
    if (_payment.IsNull != true) {
        for (var i = 0; i < _payment.ValueArray.length; i++) {
            if ((_payment.ValueArray[i].HasValue == true) && (_val.indexOf(_payment.ValueArray[i].val) == -1)) {
                _val.push(_payment.ValueArray[i].val);
                valObj.IsNull = false;
            }
        };
    };
    valObj.vSet = _val.slice(0);
    ePayment["ePayment.47"] = valObj;
    delete valObj;

    //////////////////ePayment.48
    var _payment = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;

    _payment = getValue(_eP, "ePayment.48");
    if (_payment.IsNull != true) {
        _val.push(_payment.ValueArray[0].val);
        valObj.IsNull = false;
    };
    valObj.vSet = _val.slice(0);
    ePayment["ePayment.48"] = valObj;
    delete valObj;

    //////////////////ePayment.49
    var _payment = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;

    _payment = getValue(_eP, "ePayment.49");
    if (_payment.IsNull != true) {
        _val.push(_payment.ValueArray[0].val);
        valObj.IsNull = false;

    };
    valObj.vSet = _val.slice(0);
    ePayment["ePayment.49"] = valObj;
    delete valObj;

    // IF CANCELLED, NOT APPLICABLE
    //////////////////ePayment.50
    var _payment = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;

    _payment = getValue(_eP, "ePayment.50");
    if (TheCall.IsCancelled != true) 
    {
        if (_payment.IsNull == true) 
        {
            if (isRequiredStateElement("ePayment.50")) 
            {
                _val.push("7701003")
                valObj.NV = true;                        
            }
        }
        else 
        {
            _val.push(_payment.ValueArray[0].val);
            valObj.IsNull = false;
        }
    }
    else {
        _val.push("7701001")
        valObj.NV = true;
    };
    valObj.vSet = _val.slice(0);
    ePayment["ePayment.50"] = valObj;
    delete valObj;

    //////////////////ePayment.51
    var _payment = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;

    _payment = getValue(_eP, "ePayment.51");
    if (_payment.IsNull != true) {
        _val.push(_payment.ValueArray[0].val);
        valObj.IsNull = false;

    };
    valObj.vSet = _val.slice(0);
    ePayment["ePayment.51"] = valObj;
    delete valObj;

    //////////////////ePayment.52
    var _payment = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;

    _payment = getValue(_eP, "ePayment.52");
    if (_payment.IsNull != true) {
        _val.push(_payment.ValueArray[0].val);
        valObj.IsNull = false;

    };
    valObj.vSet = _val.slice(0);
    ePayment["ePayment.52"] = valObj;
    delete valObj;

    //////////////////ePayment.53
    var _payment = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    _payment = getValue(_eP, "ePayment.53");
    if (_payment.IsNull != true) {
        _val.push(_payment.ValueArray[0].val);
        valObj.IsNull = false;
    };
    valObj.vSet = _val.slice(0);
    ePayment["ePayment.53"] = valObj;
    delete valObj;

    //////////////////ePayment.54
    var _payment = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;

    _payment = getValue(_eP, "ePayment.54");
    if (_payment.IsNull != true) {
        _val.push(_payment.ValueArray[0].val);
        valObj.IsNull = false;
    };
    valObj.vSet = _val.slice(0);
    ePayment["ePayment.54"] = valObj;
    delete valObj;

    ///////////////////////////////////////////////ePayment.InsuranceGroup
    if (typeof pPayment.attributes.sections != 'undefined')
    {
        var _sIG = [];
        _sIG = getSectionIndex(pPayment, "ePayment.SupplyItemGroup");
        if (_sIG[0] != -1)
        {
            if ((ePayment.IsValid == true) && _sIG.length > 0)
            {

                InsGrpArray = [];
                for (var i = 0; i < _sIG.length; i++)
                {

                    var SupplyGroup = new Object();

                    var _lsp = pPayment.attributes.sections[_sIG[i]].attributes.elements
                    console.log(_lsp)


                    //////////////////ePayment.55
                    var _payment = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;

                    sgArr = [];
                    _payment = getValue(_lsp, "ePayment.55");
                    console.log(_payment)
                    if (_payment.IsNull != true)
                    {
                        _val.push(_payment.ValueArray[0].val);
                        valObj.IsNull = false;
                    };
                    valObj.vSet = _val.slice(0);
                    SupplyGroup["ePayment.55"] = valObj;
                    console.log(valObj)
                    delete valObj;

                    //////////////////ePayment.56
                    var _payment = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _payment = getValue(_lsp, "ePayment.56");
                    if (_payment.IsNull != true) {
                        _val.push(_payment.ValueArray[0].val);
                        valObj.IsNull = false;
                    };
                    valObj.vSet = _val.slice(0);
                    SupplyGroup["ePayment.56"] = valObj;
                    delete valObj;
                    console.log(SupplyGroup)
                    
                    InsGrpArray.push(SupplyGroup);
                    
                };
                ePayment.SupplyItemGroup = InsGrpArray;
            }
        }
    };

    

    console.log(ePayment)
    return ePayment;
    
}
var seteOutcome = function (TheCall) {
    
    var eOutcome = new Object();
    var pOutcome = new Object();
    pOutcome = TheCall.pOutcome
    var _vg = [];
    if (pOutcome.HasDataSet == false) {
        eOutcome.IsValid = false;
    }
    else {
        eOutcome.IsValid = true;
    }
    
    var _outcome = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (pOutcome.HasDataSet == true) {
        var _eL = [];
        _eL = pOutcome.attributes.elements;

    };
    // console.log(elementList)


    if (eInjury.IsValid == true) //if have a transport, forgot the data, 
    {
        var ExternalDataGroup = new Object();
        
        //eOutcome.01/////////
        var _outcome = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;

        _outcome = getValue(_eL, "eOutcome.01");
        if (eOutcome.IsValid == true) {
            if (_outcome.IsNull == true) {
                _val.push("7701003")
                valObj.NV = true;

            }
            else {
                _val.push(_outcome.ValueArray[0].val);
                valObj.IsNull = false;

            }
        }
        else {
            _val.push("7701001")
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eOutcome["eOutcome.01"] = valObj;
        delete valObj;

        //eOutcome.02/////////
        var _outcome = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;

        _outcome = getValue(_eL, "eOutcome.02");
        if (eOutcome.IsValid == true) {
            if (_outcome.IsNull == true) {
                _val.push("7701003")
                valObj.NV = true;
            }
            else {
                _val.push(_outcome.ValueArray[0].val);
                valObj.IsNull = false;
            }
        }
        else {
            _val.push("7701001");
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eOutcome["eOutcome.02"] = valObj;
        delete valObj;


        /////////////////////////////////
        if (eOutcome.IsValid == true) {
            _s1 = getSectionIndex(pExam.attributes.sections[xx], "eOutcome.ExternalDataGroup");
            if (_s1 != -1) {
                var OutcomeGroupArray = [];
                for (var x = 0; x <= _s1.length - 1; x++) {
                    var _eDG = []
                    _ex1 = pOutcome.attributes.sections[_s1[x]].attributes.elements;

                    //eOutcome.03/////////
                    var _outcome = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;

                    _outcome = getValue(_ex1, "eOutcome.03");
                    if (_outcome.IsNull != true) {
                        _val.push(_outcome.ValueArray[0].val);
                        valObj.IsNull = false;
                    };
                    valObj.vSet = _val.slice(0);
                    eOutcome["eOutcome.03"] = valObj;
                    delete valObj;


                    //eOutcome.04/////////
                    var _outcome = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _outcome = getValue(_ex1, "eOutcome.04");
                    if (_outcome.IsNull != true) {
                        _val.push(_outcome.ValueArray[0].val);
                        valObj.IsNull = false;
                    };
                    valObj.vSet = _val.slice(0);
                    eOutcome["eOutcome.04"] = valObj;
                    delete valObj;


                    //eOutcome.05/////////
                    var _outcome = [];
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _outcome = getValue(_ex1, "eOutcome.05");
                    if (_outcome.IsNull != true) {
                        _val.push(_outcome.ValueArray[0].val);
                        valObj.IsNull = false;
                    };
                    valObj.vSet = _val.slice(0);
                    eOutcome["eOutcome.05"] = valObj;
                    delete valObj;

                    OutcomeGroupArray.push(_eDG);
                }
            };
            //////////////////////////////////////////

            //eOutcome.06/////////
            var _outcome = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;

            _outcome = getValue(_eL, "eOutcome.06");
            if (eOutcome.IsValid == true) {
                if (_outcome.IsNull != true) {
                    _val.push(_outcome.ValueArray[0].val);
                    valObj.IsNull = false;
                };
                valObj.vSet = _val.slice(0);
                eOutcome["eOutcome.06"] = valObj;
                delete valObj;


                //eOutcome.07/////////
                var _outcome = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;

                _outcome = getValue(_eL, "eOutcome.07");
                if (eOutcome.IsValid == true) {
                    if (_outcome.IsNull != true) {
                        _val.push(_outcome.ValueArray[0].val);
                        valObj.IsNull = false;
                    }
                };
                valObj.vSet = _val.slice(0);
                eOutcome["eOutcome.07"] = valObj;
                delete valObj;

                //eOutcome.08/////////
                var _outcome = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _outcome = getValue(_eL, "eOutcome.08");
                if (eOutcome.IsValid == true) {
                    if (_outcome.IsNull != true) {
                        _val.push(_outcome.ValueArray[0].val);
                        valObj.IsNull = false;
                    }
                };
                valObj.vSet = _val.slice(0);
                eOutcome["eOutcome.08"] = valObj;
                delete valObj;

                //eOutcome.09/////////
                var _outcome = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _outcome = getValue(_eL, "eOutcome.09");
                if (eOutcome.IsValid == true) {
                    if (_outcome.IsNull != true) {
                        _val.push(_outcome.ValueArray[0].val);
                        valObj.IsNull = false;
                    }
                };
                valObj.vSet = _val.slice(0);
                eOutcome["eOutcome.09"] = valObj;
                delete valObj;

                //eOutcome.10/////////
                var _outcome = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _outcome = getValue(_eL, "eOutcome.10");
                if (eOutcome.IsValid == true) {
                    if (_outcome.IsNull != true) {
                        var arr2 = [];
                        for (var i = 0; i < _outcome.ValueArray.length; i++) {
                            if ((_outcome.ValueArray[i].HasValue == true) && (_val.indexOf(_outcome.ValueArray[i].val) == -1)) {
                                _val.push(_outcome.ValueArray[i].val);
                                valObj.IsNull = false;
                            }
                        }
                    }
                };
                valObj.vSet = _val.slice(0);
                eOutcome["eOutcome.10"] = valObj;
                delete valObj;

                //eOutcome.11/////////
                var _outcome = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;

                _outcome = getValue(_eL, "eOutcome.11");
                if (eOutcome.IsValid == true) {
                    if (_outcome.IsNull != true) {
                        _val.push(_outcome.ValueArray[0].val);
                        valObj.IsNull = false;
                    }
                };
                valObj.vSet = _val.slice(0);
                eOutcome["eOutcome.11"] = valObj;
                delete valObj;

                //eOutcome.12/////////
                var _outcome = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;

                _outcome = getValue(_eL, "eOutcome.12");
                if (eOutcome.IsValid == true) {
                    if (_outcome.IsNull != true) {
                        for (var i = 0; i < _outcome.ValueArray.length; i++) {
                            if ((_outcome.ValueArray[i].HasValue == true) && (_val.indexOf(_outcome.ValueArray[i].val) == -1)) {
                                _val.push(_outcome.ValueArray[i].val);
                                valObj.IsNull = false;
                            }
                        };
                    }
                };
                valObj.vSet = _val.slice(0);
                eOutcome["eOutcome.12"] = valObj;
                delete valObj;

                //eOutcome.13/////////
                var _outcome = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _outcome = getValue(_eL, "eOutcome.13");
                if (eOutcome.IsValid == true) {
                    if (_outcome.IsNull != true) {
                        for (var i = 0; i < _outcome.ValueArray.length; i++) {
                            if ((_outcome.ValueArray[i].HasValue == true) && (_val.indexOf(_outcome.ValueArray[i].val) == -1)) {
                                _val.push(_outcome.ValueArray[i].val);
                                valObj.IsNull = false;
                            }
                        };
                    }
                };
                valObj.vSet = _val.slice(0);
                eOutcome["eOutcome.13"] = valObj;
                delete valObj;

                //eOutcome.14/////////
                var _outcome = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _outcome = getValue(_eL, "eOutcome.14");
                if (eOutcome.IsValid == true) {
                    if (_outcome.IsNull != true) {
                        _val.push(_outcome.ValueArray[0].val);
                        valObj.IsNull = false;
                    }
                };
                valObj.vSet = _val.slice(0);
                eOutcome["eOutcome.14"] = valObj;
                delete valObj;

                //eOutcome.15/////////
                var _outcome = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _outcome = getValue(_eL, "eOutcome.15");
                if (eOutcome.IsValid == true) {
                    if (_outcome.IsNull != true) {
                        _val.push(_outcome.ValueArray[0].val);
                        valObj.IsNull = false;
                    }
                };
                valObj.vSet = _val.slice(0);
                eOutcome["eOutcome.15"] = valObj;
                delete valObj;

                //eOutcome.16/////////
                var _outcome = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                _outcome = getValue(elementList, "eOutcome.16");
                if (eOutcome.IsValid == true) {
                    if (_outcome.IsNull != true) {
                        _val.push(_outcome.ValueArray[0].val);
                        valObj.IsNull = false;
                    }
                };
                valObj.vSet = _val.slice(0);
                eOutcome["eOutcome.16"] = valObj;
                delete valObj;

                //eOutcome.17/////////
                var _outcome = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;

                _outcome = getValue(elementList, "eOutcome.17");
                if (eOutcome.IsValid == true) {
                    if (_outcome.IsNull != true) {
                        _val.push(_outcome.ValueArray[0].val);
                        valObj.IsNull = false;
                    }
                };
                valObj.vSet = _val.slice(0);
                eOutcome["eOutcome.17"] = valObj;
                delete valObj;
            }
        };
        return eOutcome;
    };
    var seteOther = function (TheCall) {
        var eOther = new Object();
        var pOther = new Object();
        pOther = TheCall.pOther

        if (pOther.HasDataSet == false) {
            eOther = setNotApplicableAll();
            return eAirway;
        };


        if (eOther.HasDataSet == true) {
            var _eL = pOther.attributes.sections[a].attributes.elements

            //eOther.01////////
            var _other = []
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _other = getValue(_eL, "eOther.01");
            if (_other.IsNull != true) {
                _val = _other.ValueArray[0].val;
                valObj.IsNull = false;
            };
            valObj.vSet = _val.slice(0);
            eOther["eOther.01"] = valObj;
            delete valObj;


            //eOther.02//////////
            var _other = []
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _other = getValue(_eL, "eOther.02");

            if (_other.IsNull != true) {
                for (var i = 0; i < _other.ValueArray.length; i++) {
                    if ((_other.ValueArray[i].HasValue == true) && (_val.indexOf(_other.ValueArray[i].val) == -1)) {
                        _val.push(_other.ValueArray[i].val);
                        valObj.IsNull = false;
                    }
                }

                _eOther.Value = arr1.slice(0);
            };
            valObj.vSet = _val.slice(0);
            eOther["eOther.02"] = valObj;
            delete valObj;


            ///////////////////eOther.EMSCrewMemberGroup
            _sectionIndex = getSectionIndex(pOther.attributes.sections[i].attributes, "eOther.EMSCrewMemberGroup");
            if (_sectionIndex > -1) {
                for (var x = 0; x < _sectionIndex.length; x++) {
                    var _EMSC = pOther.attributes.sections[_sectionIndex[x]].attributes.elements

                    //eOther.03//////////
                    var _other = []
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _other = getValue(_EMSC, "eOther.03");
                    if (_other.IsNull != true) {
                        for (var i = 0; i < _other.ValueArray.length; i++) {
                            if ((_other.ValueArray[i].HasValue == true) && (_val.indexOf(_other.ValueArray[i].val) == -1)) {
                                _val.push(_other.ValueArray[i].val);
                                valObj.IsNull = false;
                            }
                        };
                    };
                }
            };
            valObj.vSet = _val.slice(0);
            eOther["eOther.03"] = valObj;
            delete valObj;

            //eOther.04///////////
            var _other = []
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;

            _other = getValue(_EMSC, "eOther.04");
            if (_other.IsNull != true) {
                _val = _other.ValueArray[0].val;
                valObj.IsNull = false;
            };
            valObj.vSet = _val.slice(0);
            eOther["eOther.04"] = valObj;
            delete valObj;

            //eOther.05/////////
            var _other = []
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _other = getValue(_EMSC, "eOther.05");
            eOther["WorkInjury"] = false;

            if (_other.IsNull == true) {
                _eOther.NV = "7701003";
            }
            else {
                _val = _other.ValueArray[0].val;
                valObj.IsNull = false;
                eOther["WorkInjury"] = true;
            }
        }
        else {
            _eOther.NV = "7701001";
        };
        valObj.vSet = _val.slice(0);
        eOther["eOther.05"] = valObj;
        delete valObj;

        //eOther.06/////////
        var _other = []
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;

        _other = getValue(_EMSC, "eOther.06");
        if (eOther.WorkInjury == true) {
            if (_other.IsNull == true) {
                if (isRequiredStateElement("eOther.06")) {
                    _val.push("7701003")
                    valObj.NV = true;
                }
                else {
                    _val.push("7701005")
                    valObj.NV = true;
                }
            }
            else {
                for (var i = 0; i < _other.ValueArray.length; i++) {
                    if ((_other.ValueArray[i].HasValue == true) && (_val.indexOf(_other.ValueArray[i].val) == -1)) {
                        _val.push(_other.ValueArray[i].val);
                        valObj.IsNull = false;
                    }
                };
            }
        }
        else {
            _val.push("7701001")
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eOther["eOther.06"] = valObj;
        delete valObj;
        ///////////////////////////
        //eOther.07////////
        var _other = []
        var _val = [];
        var valObj = {};
        valObj.IsNull = true; _other = getValue(businessObject.elements, "eOther.07");
        if (eOther.IsCallValid == true) {
            if (_other.IsNull != true) {
                for (var i = 0; i < _other.ValueArray.length; i++) {
                    if ((_other.ValueArray[i].HasValue == true) && (_val.indexOf(_other.ValueArray[i].val) == -1)) {
                        _val.push(_other.ValueArray[i].val);
                        valObj.IsNull = false;
                    }
                };
            }
        };
        valObj.vSet = _val.slice(0);
        eOther["eOther.07"] = valObj;
        delete valObj;

        //eOther..08//////////
        var _other = []
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        _other = getValue(businessObject.elements, "eOther.08");
        if (eOther.IsCallValid == true)  //Wouldn't use protective equipment on a no call
        {
            if (_other.IsNull == true) {
                if (isRequiredStateElement("eOther.08")) {
                    _val.push("7701003")
                    valObj.NV = true;

                }
                else {
                    _val.push("7701005")
                    valObj.NV = true;
                }
            }
            else {
                _val = _other.ValueArray[0].val;
                valObj.IsNull = false;
            }
        }
        else {
            _val.push("7701001")
            valObj.NV = true;
        };
        valObj.vSet = _val.slice(0);
        eOther["eOther.08"] = valObj;
        delete valObj;


        ///////////////////eOther.FileGroup
        if (eOther.IsCallValid == true) {
            _sectionIndex = getSectionIndex(pOther.attributes.sections[i].attributes, "eOther.FileGroup");
            if (_sectionIndex > -1) {
                for (var x = 0; x < _sectionIndex.length; x++) {
                    var _fg = [];
                    var _eFG = [];
                    _eFG = pOther.attributes.sections[_sectionIndex[x]].attributes.elements

                    //eOther.09//////////
                    var _other = []
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;

                    _other = getValue(_eFG, "eOther.09");
                    if (_other.IsNull != true) {
                        _val = _other.ValueArray[0].val;
                        valObj.IsNull = false;
                    };
                    valObj.vSet = _val.slice(0);
                    eOther["eOther.09"] = valObj;
                    delete valObj;

                    //eOther.10//////////
                    var _other = []
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;

                    _other = getValue(_eFG, "eOther.10");
                    if (_other.IsNull == true) {
                        _val = _other.ValueArray[0].val;
                        valObj.IsNull = false;
                    };
                    valObj.vSet = _val.slice(0);
                    eOther["eOther.10"] = valObj;
                    delete valObj;


                    //eOther.11//////////
                    var _other = []
                    var _val = [];
                    var valObj = {};
                    valObj.IsNull = true;
                    _other = getValue(_eFG, "eOther.11");
                    if (_other.IsNull != true) {
                        _val = _other.ValueArray[0].val;
                        valObj.IsNull = false;
                    };
                    valObj.vSet = _val.slice(0);
                    eOther["eOther.11"] = valObj;
                    delete valObj;
                };

                if (ePatient["HasPatient"] == true) {
                    _sectionIndex1 = getSectionIndex(pOther.attributes.sections, "eOther.SignatureGroup");
                    if (_sectionIndex1 > -1) {
                        for (var x = 0; x < _sectionIndex.length; x++) {
                            var _sig = []
                            var _eSG = pOther.attributesbusinessObject.sections[_sectionIndex[x]].attributes.elements

                            //Other.12////////
                            var _other = []
                            var _val = [];
                            var valObj = {};
                            valObj.IsNull = true;

                            _other = getValue(_eSG, "eOther.12");
                            if (_other.IsNull == true) {
                                _val = _other.ValueArray[0].val;
                                valObj.IsNull = false;
                            };
                            valObj.vSet = _val.slice(0);
                            eOther["eOther.12"] = valObj;
                            delete valObj;

                            //eOther.13
                            var _other = []
                            var _val = [];
                            var valObj = {};
                            valObj.IsNull = true;

                            _other = getValue(_eSG, "eOther.13");
                            if (_other.IsNull == true) {
                                _val = _other.ValueArray[0].val;
                                valObj.IsNull = false;
                            };
                            valObj.vSet = _val.slice(0);
                            eOther["eOther.13"] = valObj;
                            delete valObj;


                            //ether.14/////////
                            var _other = []
                            var _val = [];
                            var valObj = {};
                            valObj.IsNull = true;

                            _other = getValue(_eSG, "eOther.14");
                            if (_other.IsNull != true) {
                                _val = _other.ValueArray[0].val;
                                valObj.IsNull = false;
                            };
                            valObj.vSet = _val.slice(0);
                            eOther["eOther.14"] = valObj;
                            delete valObj;


                            //eOther.15//////
                            var _other = []
                            var _val = [];
                            var valObj = {};
                            valObj.IsNull = true;

                            _other = getValue(_eSG, "eOther.15");
                            if (_other.IsNull == true) {
                                _val = _other.ValueArray[0].val;
                                valObj.IsNull = false;
                            };
                            valObj.vSet = _val.slice(0);
                            eOther["eOther.15"] = valObj;
                            delete valObj;

                            //eOther.16/////////
                            var _other = []
                            var _val = [];
                            var valObj = {};
                            valObj.IsNull = true;

                            _other = getValue(_eSG, "eOther.16");
                            if (_other.IsNull == true) {
                                _val = _other.ValueArray[0].val;
                                valObj.IsNull = false;
                            };
                            valObj.vSet = _val.slice(0);
                            eOther["eOther.16"] = valObj;
                            delete valObj;

                            //eOther.17////////
                            var _other = []
                            var _val = [];
                            var valObj = {};
                            valObj.IsNull = true;

                            _other = getValue(_eSG, "eOther.17");
                            if (_other.IsNull == true) {
                                _val = _other.ValueArray[0].val;
                                valObj.IsNull = false;
                            };
                            valObj.vSet = _val.slice(0);
                            eOther["eOther.17"] = valObj;
                            delete valObj;

                            //eOther.18///////
                            var _other = []
                            var _val = [];
                            var valObj = {};
                            valObj.IsNull = true;

                            _other = getValue(_eSG, "eOther.18");
                            if (_other.IsNull == true) {
                                _val = _other.ValueArray[0].val;
                                valObj.IsNull = false;
                            };
                            valObj.vSet = _val.slice(0);
                            eOther["eOther.18"] = valObj;
                            delete valObj;

                            //eOther.19//////////
                            var _other = []
                            var _val = [];
                            var valObj = {};
                            valObj.IsNull = true;

                            _other = getValue(_eSG, "eOther.19");
                            if (_other.IsNull == true) {
                                _val = _other.ValueArray[0].val;
                                valObj.IsNull = false;
                            };
                            valObj.vSet = _val.slice(0);
                            eOther["eOther.19"] = valObj;
                            delete valObj;

                            //eOther.20///////
                            var _other = []
                            var _val = [];
                            var valObj = {};
                            valObj.IsNull = true;

                            _other = getValue(_eSG, "eOther.20");
                            if (_other.IsNull == true) {
                                _val = _other.ValueArray[0].val;
                                valObj.IsNull = false;
                            };
                            valObj.vSet = _val.slice(0);
                            eOther["eOther.20"] = valObj;
                            delete valObj;

                            //eOther.21/////////
                            var _other = []
                            var _val = [];
                            var valObj = {};
                            valObj.IsNull = true;

                            _other = getValue(_eSG, "eOther.21");
                            if (_other.IsNull == true) {
                                _val = _other.ValueArray[0].val;
                                valObj.IsNull = false;
                            };
                            valObj.vSet = _val.slice(0);
                            eOther["eOther.21"] = valObj;
                            delete valObj;
                        }
                    }
                };
            }
        }
    }
    return eOther;
};
  
