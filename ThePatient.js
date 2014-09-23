var setePatient = function (TheCall) 
{    
    var pPatient = new Object()
    var ePatient = new Object()
    
    pPatient = TheCall.pPatient;
    
    if (pPatient.HasDataSet == false)
    {

        ePatient["IsValid"] = false;
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "ePatient", Description: "Missing Mandatory.  ePatient.HasDataSet = false" })   
    }
    else
    {
        ePatient["IsValid"] = false;
        var _eL = []
        _eL = pPatient.attributes.elements;
        if(_eL.length !=-1)
        {
            ePatient["IsValid"] = true;
        }
    };
    
    //////////////////////ePatient.01
    var _patient = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (ePatient["IsValid"] == true) 
    {
        _patient = getValue(_eL, "ePatient.01");
        if (_patient.IsNull != true)
        {
            valObj.IsNull = false;
            _val.push(_patient.ValueArray[0].val);

        };
        valObj.vSet = _val.slice(0);
        ePatient["ePatient.01"] = valObj;
        delete valObj;
    };

    ///////////ePatient.05////////
    var _patient = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;

    if (ePatient["IsValid"] == true)
    {
        _patient = getValue(_eL, "ePatient.05");        
        if (_patient.IsNull == true)
        {
            if (isRequiredStateElement("ePatient.05") == true)
            {
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "ePatient", Description: "Missing Mandatory.  Patient Address" })                    
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
    if (ePatient["IsValid"] == true)
    {
        _patient = getValue(_eL, "ePatient.06");            
        if (_patient.IsNull == true)
        {
            if (isRequiredStateElement("ePatient.06") == true)
            {
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "ePatient", Description: "Missing Mandatory.  Patient Address" })
            }
        }
        else
        {
            _val.push(_patient.ValueArray[0].val[0]);
            valObj.IsNull = false;
        }
            valObj.vSet = _val.slice(0);
            ePatient["ePatient.06"] = valObj;
            delete valObj;        
    };


    ///////////ePatient.07////////
    var _patient = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;

    if (ePatient["IsValid"] == true)
    {
        _patient = getValue(_eL, "ePatient.07");            
        if (_patient.IsNull == true) 
        {
            if (isRequiredStateElement("ePatient.07")) 
            {
                _val.push("7701003");
                valObj.NV = true;
            }
        }
        else {
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
    ePatient["ePatient.07"] = valObj;
    delete valObj;

    ///////////ePatient.08////////
    var _patient = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (ePatient["IsValid"] == true) 
    {
        _patient = getValue(_eL, "ePatient.08");
        if (_patient.IsNull == true)
        {
            if (isRequiredStateElement("ePatient.08"))
            {
                _val.push("7701003");
                valObj.NV = true;
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
    ePatient["ePatient.08"] = valObj;
    delete valObj;

    ///////////ePatient.09////////
    var _patient = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (ePatient["IsValid"] == true)
    {
        _patient = getValue(_eL, "ePatient.09");
        if (_patient.IsNull == true)
        {
            if (isRequiredStateElement("ePatient.09"))
            {
                _val.push("7701003");
                valObj.NV = true;
            }
        }
        else
        {
            _val.push(_patient.ValueArray[0].val);
            valObj.IsNull = false;
        }
    }
    else {
        _val.push("7701001");
        valObj.NV = true;
    };
    valObj.vSet = _val.slice(0);
    ePatient["ePatient.09"] = valObj;
    delete valObj;

    
    ///////////ePatient.10////////
    var _patient = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (ePatient["IsValid"] == true)
    {
        _patient = getValue(_eL, "ePatient.10");
        if (_patient.IsNull != true)
        {
            _val.push(_patient.ValueArray[0].val);
            valObj.IsNull = false;
        }
    };
    valObj.vSet = _val.slice(0);
    ePatient["ePatient.10"] = valObj;
    delete valObj;

    ///////////ePatient.11////////
    var _patient = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (ePatient["IsValid"] == true)
    {
         _patient = getValue(_eL, "ePatient.11");
        if (_patient.IsNull != true)
        {
            _val.push(_patient.ValueArray[0].val);
            valObj.IsNull = false;
        }
    };
    valObj.vSet = _val.slice(0);
    ePatient["ePatient.11"] = valObj;
    delete valObj;

    ///////////ePatient.12////////
    var _patient = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (ePatient["IsValid"] == true)
    {
        _patient = getValue(_eL, "ePatient.12");
        if (_patient.IsNull != true)
        {
            _val.push(_patient.ValueArray[0].val);
            valObj.IsNull = false;
        }
    };
    valObj.vSet = _val.slice(0);
    ePatient["ePatient.12"] = valObj;
    delete valObj;

    ///////////ePatient.13////////
    var _patient = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (ePatient["IsValid"] == true)
    {
        _patient = getValue(_eL, "ePatient.13");            
        if (_patient.IsNull == true)
        {
            if (isRequiredStateElement("ePatient.13"))
            {
                _val.push("7701003");
                valObj.NV = true;
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
    ePatient["ePatient.13"] = valObj;
    delete valObj;

    ///////////ePatient.14////////
    var _patient = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (ePatient["IsValid"] == true)
    {
        _patient = getValue(_eL, "ePatient.14");            
        if (_patient.IsNull == true) 
        {
            if (isRequiredStateElement("ePatient.14")) 
            {
                _val.push("7701003")
                valObj.NV = true;
            }
        }
        else 
        {
            for (var i = 0; i < _patient.ValueArray.length; i++)
            {
                if ((_patient.ValueArray[i].HasValue == true) && (_val.indexOf(_patient.ValueArray[i].val) == -1))
                {
                    _val.push(_patient.ValueArray[i].val);
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
    ePatient["ePatient.14"] = valObj;
    delete valObj;
    
    ///////////ePatient.17////////
    var _patient = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (ePatient["IsValid"] == true)
    {
        _patient = getValue(_eL, "ePatient.17");            
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
            else
            {
                if (isRequiredStateElement("ePatient.17"))
                {
                    _val.push("7701003")
                    valObj.NV = true;
                }
                else {
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
        _val.push("7701001")
        valObj.NV = true;
    };
    valObj.vSet = _val.slice(0);
    ePatient["ePatient.17"] = valObj;
    delete valObj;


    //ePatient.18////////////
    var _patient = [];
    var _val = [];
    var valObj = {};
    ph = [];
    valObj.IsNull = true;
    if (ePatient["IsValid"] == true)
    {
        _patient = getValue(_eL, "ePatient.18");
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
    if (ePatient["IsValid"] == true)
    {
        _patient = getValue(_eL, "ePatient.19");
        if (_patient.IsNull != true) 
        {
            for (var i = 0; i < _patient.ValueArray.length; i++) 
            {
                ph = [];
                if (typeof _patient.ValueArray[i].EMailType != 'undefined') 
                {
                    ph.EmailType = _patient.ValueArray[i].EMailType;
                };
                ph.val = _patient.ValueArray[i].val;
                valObj.IsNull = false;
                _val.push(ph)
            }
        }
    };
    valObj.vSet = _val.slice(0);
    ePatient["ePatient.19"] = valObj;
    delete valObj;

    //ePatient.20////////////
    var _patient = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (ePatient["IsValid"] == true)
    {
        _patient = getValue(_eL, "ePatient.20");            
        if (_patient.IsNull != true) 
        {
            _val.push(_patient.ValueArray[0].val);
            valObj.IsNull = false;
        }
    };
    valObj.vSet = _val.slice(0);
    ePatient["ePatient.20"] = valObj;
    delete valObj;

    //ePatient.21////////////
    var _patient = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (ePatient["IsValid"] == true)
    {
        _patient = getValue(_eL, "ePatient.21");            
        if (_patient.IsNull != true) 
        {
            _val.push(_patient.ValueArray[0].val);
            valObj.IsNull = false;
        }
    };
    valObj.vSet = _val.slice(0);
    ePatient["ePatient.20"] = valObj;
    delete valObj;

  
    ////////////////////////////////////NAME GROUP////////////////////////////
    ePatient["PatientNameGroup"] = -1;
    if (pPatient.HasDataSet == true)
    {
        if (typeof pPatient.attributes.sections != 'undefined') 
        {
            _nI = getSectionIndex(pPatient, "ePatient.PatientNameGroup");
            if (_nI != -1) 
            {
                _PNG = []
                var _PNG = pPatient.attributes.sections[_nI].attributes.elements;
                if (_PNG.length != -1) 
                {
                    ePatient["PatientNameGroup"] = 1;
                }
            }
        }
    };

    //////////////////////ePatient.02
    var _patient = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (ePatient["IsValid"] == true)
    {
        _patient = getValue(_PNG, "ePatient.02");        
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
    ePatient["ePatient.02"] = valObj;
    delete valObj;

    ///////////ePatient.03////////
    var _patient = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (ePatient["IsValid"] == true)
    {
        _patient = getValue(_PNG, "ePatient.03");        
        if (_patient.IsNull == true) 
        {
            if (_patient.HasPN == true) 
            {
                if (_patient.ValueArray[0].pn[0] == "R") 
                {
                    _val.push("8801019");
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

    ePatient["ePatient.03"] = valObj;
    delete valObj;


    ///////////ePatient.04////////
    var _patient = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (ePatient["IsValid"] == true)
    {
        _patient = getValue(_PNG, "ePatient.04");        
        if (_patient.IsNull != true)
        {
            _val.push(_patient.ValueArray[0].val);
            valObj.IsNull = false;
        }
    };
    valObj.vSet = _val.slice(0);
    ePatient["ePatient.04"] = valObj;
    delete valObj;

        //////////////////////AGE GROUP
        ////////////////////////////////////NAME GROUP////////////////////////////
    ePatient["AgeGroup"] = -1
    if (pPatient.HasDataSet == true) 
    {
        if (typeof pPatient.attributes.sections != 'undefined') 
        {
            var _sI = [];
            _sI = getSectionIndex(pPatient, "ePatient.AgeGroup");
            if (_sI[0] >= 0) 
            {
                ePatient["AgeGroup"] = 1;
                _PAG = []
                var _PAG = pPatient.attributes.sections[_sI].attributes.elements;
            }
        }
    };
    ///////////ePatient.15////////
    var _patient = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (ePatient["AgeGroup"] == 1) 
    {
        _patient = getValue(_PAG, "ePatient.15");
        if (_patient.IsNull == true) 
        {
            if (isRequiredStateElement("ePatient.15")) 
            {
                _val.push("7701003")
                valObj.NV = true;
            }
        }
        else 
        {
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
    if (ePatient["AgeGroup"] == 1) 
    {
        _patient = getValue(_PAG, "ePatient.16");
        if (_patient.IsNull == true) 
        {
            if (isRequiredStateElement("ePatient.16")) 
            {
                _val.push("7701003")
                valObj.NV = true;
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
        _val.push("7701001")
        valObj.NV = true;
    };
    valObj.vSet = _val.slice(0);
    ePatient["ePatient.16"] = valObj;
    delete valObj;
    
       
    if (ErrorList.length != 0)
    {
        ePatient.Errors = ErrorList.slice(0);
        ePatient.HasErrors =true
        ePatient.ErrorCount = ErrorList.length;
    };

    return ePatient;
};
var seteHistory = function (TheCall) 
{
    TheCall["HasPatient"] = true
    
    var eHistory = new Object();
    var pHistory = new Object();
    pHistory = TheCall.pHistory;
    var ErrorList = [];
    eHistory["IsValid"] = false;
    if (pHistory.HasDataSet == false) {
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "eHistory", Description: "Missing Mandatory.  eHistory.HasDataSet = false" })
        eHistory["IsValid"] = false;
    };

    if (pHistory.HasDataSet == true) {
        if (typeof pHistory.attributes.elements != 'undefined') {
            var _eL = [];
            var _eL = pHistory.attributes.elements;
            eHistory["IsValid"] = true;
        }
    };
    

    ////////eHistory.01
    var _history = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if ((eHistory.IsValid == true) && (TheCall["HasPatient"] == true))
    {
        _history = getValue(_eL, "eHistory.01");        
        if (_history.IsNull == true)
        {
            if (isRequiredStateElement("eHistory.01") == true)
            {
                _val.push("7701003")
                valObj.NV = true;
            }
            else {
                _val.push("7701005")
                valObj.NV = true;

            }
        }
        else 
        {
            for (var i = 0; i < _history.ValueArray.length; i++) 
            {
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
    if ((eHistory.IsValid == true)&&(TheCall["HasPatient"]==true))
    {
        _history = getValue(_eL, "eHistory.05");

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
    if ((eHistory.IsValid == true)&&(TheCall["HasPatient"]==true))
    {            
        _history = getValue(_eL, "eHistory.06");
        if (_history.IsNull == true)
        {
            if (_history.HasPN == true)
            {
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
            else {
                if (isRequiredStateElement("eHistory.06") == true) {
                    _val.push("7701003")
                    valObj.NV = true;
                }
                else {
                    _val.push("7701005")
                    valObj.NV = true;
                }
            }
        }
        else
        {
            for (var i = 0; i < _history.ValueArray.length; i++)
            {
                if ((_history.ValueArray[i].HasValue == true) && (_val.indexOf(_history.ValueArray[i].val) == -1))
                {
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
    if ((eHistory.IsValid == true)&&(TheCall["HasPatient"]==true))
    {
        _history = getValue(_eL, "eHistory.07");
        if (_history.IsNull != true)
        {
            for (var i = 0; i < _history.ValueArray.length; i++) {
                if ((_history.ValueArray[i].HasValue == true) && (_val.indexOf(_history.ValueArray[i].val) == -1)) {
                    _val.push(_history.ValueArray[i].val)
                    valObj.IsNull = false;
                }
            };

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
    if ((eHistory.IsValid == true)&&(TheCall["HasPatient"]==true)){
    _history = getValue(_eL, "eHistory.08");

        if (_history.IsNull == true)
        {
            if (_history.HasPN == true)
            {
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
    if ((eHistory.IsValid == true)&&(TheCall["HasPatient"]==true)){
    _history = getValue(_eL, "eHistory.09");
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
    if ((eHistory.IsValid == true)&&(TheCall["HasPatient"]==true)){
    _history = getValue(_eL, "eHistory.16");        
        if (_history.IsNull != true) {
            _val.push(_history.ValueArray[0].val)
            valObj.IsNull = false;
            valObj.vSet = _val.slice(0);
        }
    };
    
    eHistory["eHistory.16"] = valObj;
    delete valObj;

    ////////eHistory.17
    var _history = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if ((eHistory.IsValid == true) && (TheCall["HasPatient"] == true))
    {
        _history = getValue(_eL, "eHistory.17");     
        if (_history.IsNull == true)
        {
            if (_history.HasPN == true)
            {
                if (_history.PN == "Refused")
                {
                    _val.push("8801019")
                    valObj.PN = true;
                }
                else if (_history.PN == "NoneReported")
                {
                    _val.push("8801015")
                    valObj.PN = true;
                }
                else
                {
                    _val.push("8801023")
                    valObj.PN = true;
                }
            }
            if (isRequiredStateElement("eHistory.17") == true)
            {
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
            }            
        }
    }
    else 
    {        
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
    if ((eHistory.IsValid == true)&&(TheCall["HasPatient"]==true)){
    _history = getValue(_eL, "eHistory.18");
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
    if ((eHistory.IsValid == true)&&(TheCall["HasPatient"]==true)){
    _history = getValue(_eL, "eHistory.19");

        if (_history.IsNull != true) {
            _val.push(_history.ValueArray[0].val)
            valObj.IsNull = false;
            valObj.vSet = _val.slice(0);
        };
        
        eHistory["eHistory.19"] = valObj;
        delete valObj;
        
//////////////////////////////////////////////////////////
        
        eHistory["PractitionerGroup"] = -1;
        if (typeof pHistory.attributes.sections != 'undefined')
        {
            PractitionerGroupArray = [];
            _sectionIndex = getSectionIndex(pHistory, "eHistory.PractitionerGroup");
        
            if ((eHistory.IsValid == true) && _sectionIndex.length > 0) 
            {
                eHistory["PractitionerGroup"]= _sectionIndex.length
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
                }                
            }
        };
        eHistory["ImmunizationsGroup"]=-1;
        if (typeof pHistory.attributes.sections != 'undefined') {
            ////////////////////////////////                    
            ImmunGroupArray = [];
            _sI = getSectionIndex(pHistory, "eHistory.ImmunizationsGroup");
                    
            if ((eHistory.IsValid == true) && _sI.length > 0) {
                eHistory["ImmunizationsGroup"]=_sI.length;
                for (var x = 0; x < _sI.length; x++) {
                    var ImmunizationsGroup = new Object();
                    var _eIMG = [];
                    var _eIMG = pHistory.attributes.sections[_sI[x]].attributes.elements;
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
                }
            }                    
        };
        
        ////////////////////////////////
        eHistory["CurrentMedsGroup"]=-1;
        if (typeof pHistory.attributes.sections != 'undefined') 
        {
            _sectionIndex = getSectionIndex(pHistory, "eHistory.CurrentMedsGroup");
            if ((eHistory.IsValid == true) && _sectionIndex.length > 0)
            {
                eHistory["CurrentMedsGroup"]=_sectionIndex.length;
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

    if (ErrorList.length > 0)
    {
        eHistory.HasErrors = true;
        eHistory.Errors = ErrorList.slice(0);
        eHistory.ErrorCount = ErrorList.length;
    };
    
return eHistory;
  
}; 
var seteOutcome = function (TheCall)
{

    var pOutcome = new Object();
    var eOutcome = new Object();
    pOutcome = TheCall.pOutcome
    var _vg = [];
    eOutcome.IsValid = false;
    
    var _outcome = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (pOutcome.HasDataSet == true) 
    {
        if(typeof pOutcome.attributes.elements !='undefined')
        {
            var _eL = [];
            _eL = pOutcome.attributes.elements;
            if(_eL[0] !=-1)
            {
                eOutcome.IsValid = true;
            }
        }
    };
    
    //eOutcome.01/////////
    var _outcome = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (eOutcome.IsValid == true) {
        _outcome = getValue(_eL, "eOutcome.01");        
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

    if (eOutcome.IsValid == true) 
    {
        _outcome = getValue(_eL, "eOutcome.02");
        if (_outcome.IsNull == true) 
        {
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
    eOutcome["ExternalDataGroup"] = -1;
    var OutcomeGroupArray = [];
    if ((eOutcome.IsValid == true) &&(typeof pOutcome.attributes.sections !='undefined'))
    {
        _s1 = getSectionIndex(pOutcome, "eOutcome.ExternalDataGroup");
        if (_s1 != -1) 
        {            
            eOutcome["ExternalDataGroup"] = _s1.length;
        }
    };
    if (eOutcome["ExternalDataGroup"] != -1)
    {
        for (var x = 0; x <= _s1.length - 1; x++)
        {
            var ExternalDataGroup = new Object();
            var _eDG = []
            _eDG = pOutcome.attributes.sections[_s1[x]].attributes.elements;
            //eOutcome.03/////////
            var _outcome = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;

            _outcome = getValue(_eDG, "eOutcome.03");
            if (_outcome.IsNull != true) {
                _val.push(_outcome.ValueArray[0].val);
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
            };
            ExternalDataGroup["eOutcome.03"] = valObj;
            delete valObj;


            //eOutcome.04/////////
            var _outcome = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _outcome = getValue(_eDG, "eOutcome.04");
            if (_outcome.IsNull != true) {
                _val.push(_outcome.ValueArray[0].val);
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
            };

            ExternalDataGroup["eOutcome.04"] = valObj;
            delete valObj;


            //eOutcome.05/////////
            var _outcome = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _outcome = getValue(_eDG, "eOutcome.05");
            if (_outcome.IsNull != true) {
                _val.push(_outcome.ValueArray[0].val);
                valObj.IsNull = false;
            };
            valObj.vSet = _val.slice(0);
            ExternalDataGroup["eOutcome.05"] = valObj;
            delete valObj;
            OutcomeGroupArray.push(ExternalDataGroup);
        }
    };
    if (OutcomeGroupArray.length > 0) {
        eOutcome.ExternalDataGroup = OutcomeGroupArray.slice(0);
    };
    
    //////////////////////////////////////////
    //eOutcome.06/////////
    var _outcome = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;

    if (eOutcome.IsValid == true)
    {
        _outcome = getValue(_eL, "eOutcome.06");
        if (_outcome.IsNull != true) 
        {
            _val.push(_outcome.ValueArray[0].val);
            valObj.IsNull = false;
            valObj.vSet = _val.slice(0);
        };
            
        eOutcome["eOutcome.06"] = valObj;
        delete valObj;
    };


    //eOutcome.07/////////
    var _outcome = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;

    if (eOutcome.IsValid == true) 
    {
        _outcome = getValue(_eL, "eOutcome.07");
          
        if (_outcome.IsNull != true) 
        {
            _val.push(_outcome.ValueArray[0].val);
            valObj.IsNull = false;
            valObj.vSet = _val.slice(0);
        };                        
        eOutcome["eOutcome.07"] = valObj;
        delete valObj;
    };
    
    //eOutcome.08/////////
    var _outcome = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    
    if (eOutcome.IsValid == true) 
    {
        _outcome = getValue(_eL, "eOutcome.08");    
        if (_outcome.IsNull != true) 
        {
            _val.push(_outcome.ValueArray[0].val);
            valObj.IsNull = false;
            valObj.vSet = _val.slice(0);
        }
    };            
    eOutcome["eOutcome.08"] = valObj;
    delete valObj;

    //eOutcome.09/////////
    var _outcome = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (eOutcome.IsValid == true)
    {
        _outcome = getValue(_eL, "eOutcome.09");
        
        if (_outcome.IsNull != true)
        {
            for (var i = 0; i < _outcome.ValueArray.length; i++)
            {
                if ((_outcome.ValueArray[i].HasValue == true) && (_val.indexOf(_outcome.ValueArray[i].val) == -1))
                {
                    _val.push(_outcome.ValueArray[i].val);
                    valObj.IsNull = false;
                }
            };
            valObj.vSet = _val.slice(0);
        }
    };

    eOutcome["eOutcome.09"] = valObj;
    delete valObj;

    //eOutcome.10/////////
    var _outcome = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (eOutcome.IsValid == true) {
        _outcome = getValue(_eL, "eOutcome.10");            
        if (_outcome.IsNull != true) {
            for (var i = 0; i < _outcome.ValueArray.length; i++) {
                if ((_outcome.ValueArray[i].HasValue == true) && (_val.indexOf(_outcome.ValueArray[i].val) == -1)) {
                    _val.push(_outcome.ValueArray[i].val);
                    valObj.IsNull = false;
                }
            };
            valObj.vSet = _val.slice(0);
        }
    };
            
    eOutcome["eOutcome.10"] = valObj;
    delete valObj;

    //eOutcome.11/////////
    var _outcome = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;

    if (eOutcome.IsValid == true) {
        _outcome = getValue(_eL, "eOutcome.11");            
        if (_outcome.IsNull != true) 
        {
            _val.push(_outcome.ValueArray[0].val);
            valObj.IsNull = false;
            valObj.vSet = _val.slice(0);
        }
    };
            
    eOutcome["eOutcome.11"] = valObj;
    delete valObj;
    
    //eOutcome.12/////////
    var _outcome = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;

    if (eOutcome.IsValid == true) {
        _outcome = getValue(_eL, "eOutcome.12");            
        if (_outcome.IsNull != true) {
            for (var i = 0; i < _outcome.ValueArray.length; i++) {
                if ((_outcome.ValueArray[i].HasValue == true) && (_val.indexOf(_outcome.ValueArray[i].val) == -1)) {
                    _val.push(_outcome.ValueArray[i].val);
                    valObj.IsNull = false;
                }
            };
            valObj.vSet = _val.slice(0);
        }
    };

    eOutcome["eOutcome.12"] = valObj;
    delete valObj;

    //eOutcome.13/////////
    var _outcome = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
            
    if (eOutcome.IsValid == true) {
        _outcome = getValue(_eL, "eOutcome.13");
        if (_outcome.IsNull != true) {
            for (var i = 0; i < _outcome.ValueArray.length; i++) {
                if ((_outcome.ValueArray[i].HasValue == true) && (_val.indexOf(_outcome.ValueArray[i].val) == -1)) {
                    _val.push(_outcome.ValueArray[i].val);
                    valObj.IsNull = false;
                }
            };
            valObj.vSet = _val.slice(0);
        }
    };
            
    eOutcome["eOutcome.13"] = valObj;
    delete valObj;

    //eOutcome.14/////////
    var _outcome = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (eOutcome.IsValid == true)
    {
        _outcome = getValue(_eL, "eOutcome.14");    
        if (_outcome.IsNull != true) {
            _val.push(_outcome.ValueArray[0].val);
            valObj.IsNull = false;
            valObj.vSet = _val.slice(0);
        }
    };

    eOutcome["eOutcome.14"] = valObj;
    delete valObj;

    //eOutcome.15/////////
    var _outcome = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    
    if (eOutcome.IsValid == true)
    {
        _outcome = getValue(_eL, "eOutcome.15");    
        if (_outcome.IsNull != true) {
            _val.push(_outcome.ValueArray[0].val);
            valObj.IsNull = false;
            valObj.vSet = _val.slice(0);
        }
    };
    eOutcome["eOutcome.15"] = valObj;
    delete valObj;

    //eOutcome.16/////////
    var _outcome = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (eOutcome.IsValid == true) {
        _outcome = getValue(_eL, "eOutcome.16");
        if (_outcome.IsNull != true) {
            _val.push(_outcome.ValueArray[0].val);
            valObj.IsNull = false;
            valObj.vSet = _val.slice(0);
        }
    };
    eOutcome["eOutcome.16"] = valObj;
    delete valObj;

    //eOutcome.17/////////
    var _outcome = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (eOutcome.IsValid == true)
    {
        _outcome = getValue(_eL, "eOutcome.17");
        if (_outcome.IsNull != true) {
            _val.push(_outcome.ValueArray[0].val);
            valObj.IsNull = false;
            valObj.vSet = _val.slice(0);
        }
    };
    eOutcome["eOutcome.17"] = valObj;
    delete valObj;
    return eOutcome;
    
};  
var seteOther = function (TheCall) 
{    
    var eOther = new Object();

    var pOther = new Object();
    pOther = TheCall.pOther
    eOther.IsValid = false;



    if (pOther.HasDataSet == true)
    {
        if (typeof pOther.attributes.elements != 'undefined')
        {
            var _eL = []
            _eL = pOther.attributes.elements
            if (_eL != -1)
            {
                eOther.IsValid = true;
            }
        }
    }
    else
    {
        eOther.IsValid = false;
    };
         
    //eOther.01////////
    var _other = []
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if(eOther.IsValid==true)
    {
        _other = getValue(_eL, "eOther.01");
        if (_other.IsNull != true)
        {
            _val = _other.ValueArray[0].val;
            valObj.IsNull = false;
            valObj.vSet = _val.slice(0);
        };
             
    };
    
    eOther["eOther.01"] = valObj;
    delete valObj;

    //eOther.02//////////
    var _other = []
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if(eOther.IsValid==true)
    {
        _other = getValue(_eL, "eOther.02");
        if (_other.IsNull != true) 
        {
            for (var i = 0; i < _other.ValueArray.length; i++) 
            {
                if ((_other.ValueArray[i].HasValue == true) && (_val.indexOf(_other.ValueArray[i].val) == -1)) 
                {
                    _val.push(_other.ValueArray[i].val);
                    valObj.IsNull = false;
                }
            };
            valObj.vSet = _val.slice(0);
        }
    };            
    eOther["eOther.02"] = valObj;
    delete valObj;

          
    eOther["EMSCrewMemberGroup"] = -1
    var EMSCrewMemberGroupArray = []
    ///////////////////eOther.EMSCrewMemberGroup
    if (eOther.IsValid== true)
    {
        if (typeof pOther.attributes.sections != 'undefined') {
            _sectionIndex = [];
            _sectionIndex = getSectionIndex(pOther, "eOther.EMSCrewMemberGroup");
            if (_sectionIndex.length >0)
            {
                eOther["EMSCrewMemberGroup"] = _sectionIndex.length
            }            
        }
    };
    if (eOther["EMSCrewMemberGroup"] == -1)
    {
        var EMSCrewMemberGP = new Object();
        var _other = []
        var _val = [];
        var valObj = {};
        if (typeof TheCall.Cancelled == 'undefined')
        {
            _val.push("7701001");
            valObj.NV = true;
        }
        else
        {
            _val.push("7701003");
            valObj.NV = true;
        }
        valObj.vSet = _val.slice(0);
        EMSCrewMemberGP["eOther.05"] = valObj;
    }
    else
    {
        for (var x = 0; x < _sectionIndex.length; x++) 
        {
            var EMSCrewMemberGP = new Object();
            var _EMSC = [];
            _EMSC = pOther.attributes.sections[_sectionIndex[x]].attributes.elements

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
                valObj.vSet = _val.slice(0);
            };
            EMSCrewMemberGP["eOther.03"] = valObj;
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
            EMSCrewMemberGP["eOther.04"] = valObj;
            delete valObj;

            //eOther.05/////////
            var _other = []
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            _other = getValue(_EMSC, "eOther.05");
            eOther["WorkInjury"] = false;
            if (_other.IsNull == true)
            {
                _val.push("7701003");
                valObj.NV = true;
            }
            else
            {
                _val = _other.ValueArray[0].val;
                valObj.IsNull = false;
                EMSCrewMemberGP["WorkInjury"] = true;
            };
                
            valObj.vSet = _val.slice(0);
            eOther["eOther.05"] = valObj;
            delete valObj;

            //eOther.06/////////
            var _other = []
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            if (eOther.WorkInjury == true) 
            {
                _other = getValue(_EMSC, "eOther.06");      
                if (_other.IsNull == true) 
                {
                    if (isRequiredStateElement("eOther.06")) 
                    {
                        _val.push("7701003")
                        valObj.NV = true;
                    }
                    else 
                    {
                        _val.push("7701005")
                        valObj.NV = true;
                    }
                }
                else 
                {
                    for (var i = 0; i < _other.ValueArray.length; i++) 
                    {
                        if ((_other.ValueArray[i].HasValue == true) && (_val.indexOf(_other.ValueArray[i].val) == -1)) 
                        {
                            _val.push(_other.ValueArray[i].val);
                            valObj.IsNull = false;
                        }
                    };
          
                }
            }
            else 
            {
                _val.push("7701001")
                valObj.NV = true;
            };
            valObj.vSet = _val.slice(0);
            EMSCrewMemberGP["eOther.06"] = valObj;
            delete valObj;

            EMSCrewMemberGroupArray.push(EMSCrewMemberGP);
        }
    };
   
    eOther.EMSCrewMemberGroup=EMSCrewMemberGroupArray.slice();

        ///////////////////////////
        //eOther.07////////
        var _other = []
        var _val = [];
        var valObj = {};
        valObj.IsNull = true; 
        if (eOther.IsValid == true) 
        {
        _other = getValue(businessObject.elements, "eOther.07");        
            if (_other.IsNull != true) {
                for (var i = 0; i < _other.ValueArray.length; i++) {
                    if ((_other.ValueArray[i].HasValue == true) && (_val.indexOf(_other.ValueArray[i].val) == -1)) {
                        _val.push(_other.ValueArray[i].val);
                        valObj.IsNull = false;
                    }
                };
                valObj.vSet = _val.slice(0);
            }
        };        
        eOther["eOther.07"] = valObj;
        delete valObj;

        //eOther..08//////////
        var _other = []
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        if (eOther.IsValid == true)  
        {
            _other = getValue(businessObject.elements, "eOther.08");        
            if (_other.IsNull == true) 
            {
                if (isRequiredStateElement("eOther.08")) 
                {
                    _val.push("7701003")
                    valObj.NV = true;
                }
                else 
                {
                    _val.push("7701005")
                    valObj.NV = true;
                }
            }
            else 
            {
                _val = _other.ValueArray[0].val;
                valObj.IsNull = false;
            }
        }
        else 
        {
            _val.push("7701001")
            valObj.NV = true;
        };        
        valObj.vSet = _val.slice(0);
        eOther["eOther.08"] = valObj;
        delete valObj;


        ///////////////////eOther.FileGroup
        eOther["FileGroup"] =-1;
        if ((eOther.IsCallValid == true) && (typeof pOther.attributes.sections !='undefined'))
        {
            var _sI = [];
            _sI = getSectionIndex(pOther.attributes.sections, "eOther.FileGroup");
            if (_sI != -1) 
            {
                var FGArray = [];
                eOther["FileGroup"] =_sI.length;

                for (var x = 0; x < _sI.length; x++) 
                {                    
                    var _eFG = [];
                    _eFG = pOther.attributes.sections[_sectionIndex[x]].attributes.elements

                    var FileGroup = new Object();

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
                    FileGroup["eOther.09"] = valObj;
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
                    FileGroup["eOther.10"] = valObj;
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
                    FileGroup["eOther.11"] = valObj;
                    delete valObj;

                    FGArray.push(FileGroup)
                };
                eOther.FileGroup = FGArray.slice(0);
            }
        };

        /////////////////////////////
        eOther["SignatureGroup"]=-1
        if ((typeof TheCall.Patient != 'undefined') &&(typeof pOther.attributes.sections !='undefined'))
        {
            var _s2=[];
            _s2 = getSectionIndex(pOther.attributes.sections, "eOther.SignatureGroup");
            if (_s2 != -1) 
            {
                for (var x = 0; x < _s2.length; x++) 
                {
                    var _sig = []
                    var _eSG = pOther.attributesbusinessObject.sections[_s2[x]].attributes.elements

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
       
  return eOther
  };
var seteDevice = function (TheCall) 
{
 
    var eDevice = new Object();
    var pDevice = TheCall.pDevice
    var DeviceGroup = new Object();
    
    eDevice.IsValid = false;
    eDevice["DeviceGroup"] = -1;
    if (pDevice.HasDataSet == true) 
    {
        if (typeof pDevice.attributes.sections != 'undefined')
        {
            var _sI = [];
            _sI = getSectionIndex(pDevice, "eDevice.DeviceGroup")
            
            if (_sectionIndex[0] != -1) {
                eDevice["DeviceGroup"] = _sI.length;
                eDevice.IsValid = true;
            }
        }
    };
    for (var xx = 0; xx < _sI.length; xx++)
    {
        DeviceGroup = new Object();

        var _eL = pDevice.attributes.sections[_sectionIndex[xx]].attributes.elements;

        //edevice.01/////////////////////////////
        var _device = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        if (eDevice.IsValid == true) {
            _device = getValue(_eL, "eDevice.01");
            if ((_device.IsNull != true) && (typeof _device.ValueArray[0] != 'undefined'))
                _val.push(_device.ValueArray[0].val);
            valObj.vSet = _val.slice(0);
            DeviceGroup["eDevice.01"] = valObj;
            delete valObj;
        }


        //edevice.02/////////////////////////////
        var _device = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        if (eDevice.IsValid == true) {
            _device = getValue(_eL, "eDevice.02");
            if ((_device.IsNull != true) && (typeof _device.ValueArray[0] != 'undefined'))
                _val.push(_device.ValueArray[0].val);
            valObj.IsNull = false;
            valObj.vSet = _val.slice(0);
            DeviceGroup["eDevice.02"] = valObj;
            delete valObj;
        };

        //edevice.03/////////////////////////////
        var _device = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        if (eDevice.IsValid == true) {
            _device = getValue(_eL, "eDevice.03");

            if (_device.IsNull != true) {
                for (var i = 0; i <= _device.Count - 1; i++) {
                    if ((_device.ValueArray[i].HasValue == true) && (_val.indexOf(_device.ValueArray[i].val) == -1)) {
                        _val.push(_device.ValueArray[i].val);
                    }
                };

                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
                DeviceGroup["eDevice.03"] = valObj;
                delete valObj;
            }
        };        
        eDevice["WaveformGroup"] = -1;
        if ((typeof pDevice.attributes.sections != 'undefined') && (eDevice.IsValid == true)) {
            var _wFG = []
            _wFG = getSectionIndex(pDevice.attributes.sections[xx], "eDevice.WaveformGroup");
            if (_wFG[0] != -1) {
                eDevice["eDevice.WaveformGroup"] = 1;
            }
        };

        ///////////////WaveForm
        if (_wFG != -1) {
                        
            var _eRG = [];
            var _eRG = pDevice.attributes.sections[_sectionIndex[xx]].attributes.sections[_wFG].attributes.elements;
            //edevice.04/////////////////////////////
            var _device = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            if(eDevice.IsValid == true)
            {
                _device = getValue(_eRG, "eDevice.04");
         
                if (_device.IsNull != true) 
                {
                    if (typeof _device.ValueArray[0] != 'undefined') {
                        _val.push(_device.ValueArray[0].val);
                    }
                    valObj.IsNull = false;                   
                    valObj.vSet = _val.slice(0);
                    DeviceGroup["eDevice.04"] = valObj;
                    delete valObj;
                }
            };
         
            //edevice.05/////////////////////////////
            var _device = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            if(eDevice.IsValid == true)
            {
                _device = getValue(_eRG, "eDevice.05");
         
                if (_device.IsNull != true) 
                {
                    if (typeof _device.ValueArray[0] != 'undefined') {
                        _val.push(_device.ValueArray[0].val);
                    };
                    valObj.IsNull = false;                   
                    valObj.vSet = _val.slice(0);
                    DeviceGroup["eDevice.05"] = valObj;
                    delete valObj;
                }
            };
         
            //edevice.06/////////////////////////////
            var _device = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            if(eDevice.IsValid == true)
            {
                _device = getValue(_eRG, "eDevice.06");
         
                if (_device.IsNull != true) 
                {
                    if (typeof _device.ValueArray[0] != 'undefined') {
                        _val.push(_device.ValueArray[0].val);
                    };
                    valObj.IsNull = false;                   
                    valObj.vSet = _val.slice(0);
                    DeviceGroup["eDevice.06"] = valObj;
                    delete valObj;
                }
            }
                         
        };
    
    
        //edevice.07/////////////////////////////
        var _device = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        if (eDevice.IsValid == true) {
            _device = getValue(_eL, "eDevice.07");
    
            if (_device.IsNull != true) {
                for (var i = 0; i <= _device.Count - 1; i++) {
                    if ((_device.ValueArray[i].HasValue == true) && (_val.indexOf(_device.ValueArray[i].val) == -1)) {
                        _val.push(_device.ValueArray[i].val);
                    }
                };
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
                DeviceGroup["eDevice.07"] = valObj;
                delete valObj;
            }
        };
    
        //edevice.08/////////////////////////////
        var _device = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        if (eDevice.IsValid == true) {
            _device = getValue(_eL, "eDevice.08");
            if (_device.IsNull != true) {
                _val.push(_device.ValueArray[0].val);
                valObj.IsNull = false;
                valObj.vSet = _val.slice(0);
                DeviceGroup["eDevice.08"] = valObj;
                delete valObj;
            }
                        
        };


        ///////////////Shock
        eDevice["eDevice.ShockGroup"] = -1;
        if (typeof pDevice.attributes.sections[xx].attributes.sections != 'undefined') {
            {
                var _cSG = [];
                _cSG = getSectionIndex(pDevice.attributes.sections[xx], "eDevice.ShockGroup")
            };
            if (_cSG != -1)
            {
                eDevice["eDevice.ShockGroup"] = 1;
                var _eSG = [];
                var _eSG = pDevice.attributes.sections[_sectionIndex[xx]].attributes.sections[_cSG].attributes.elements;

                var _device = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                if (eDevice.IsValid == true) {
                    _device = getValue(_eSG, "eDevice.09");

                    if (_device.IsNull != true) {
                        _val.push(_device.ValueArray[0].val);
                        valObj.IsNull = false;
                        valObj.vSet = _val.slice(0);
                        DeviceGroup["eDevice.09"] = valObj;
                        delete valObj;
                    }
                };

                var _device = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                if (eDevice.IsValid == true) {
                    _device = getValue(_eSG, "eDevice.10");

                    if (_device.IsNull != true) {
                        _val.push(_device.ValueArray[0].val);
                        valObj.IsNull = false;
                        valObj.vSet = _val.slice(0);
                        DeviceGroup["eDevice.10"] = valObj;
                        delete valObj;
                    }
                };
                var _device = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                if (eDevice.IsValid == true) {
                    _device = getValue(_eSG, "eDevice.11");

                    if (_device.IsNull != true) {
                        _val.push(_device.ValueArray[0].val);
                        valObj.IsNull = false;
                        valObj.vSet = _val.slice(0);
                        DeviceGroup["eDevice.11"] = valObj;
                        delete valObj;
                    }
                };


                var _device = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                if (eDevice.IsValid == true) {
                    _device = getValue(_eSG, "eDevice.12");

                    if (_device.IsNull != true) {
                        _val.push(_device.ValueArray[0].val);
                        valObj.IsNull = false;
                        valObj.vSet = _val.slice(0);
                        DeviceGroup["eDevice.12"] = valObj;
                        delete valObj;
                    }

                }

            }
        };
        dGroupArray.push(DeviceGroup)   
    };
            
      eDevice.DeviceGroup=dGroupArray.slice(0)
return eDevice;

};
var setePayment = function (TheCall) 
{
 
    var ePayment = new Object();
    var pPayment = new Object();
    pPayment = TheCall.pPayment;
    var ErrorList = [];
   
    if (pPayment.HasDataSet == false) 
    {
        ePayment["IsValid"] = false;
        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "Payment", Description: "Missing Mandatory.  ePayment.HasDataSet = false" })             
    };
             
    ///////////ONLY BILLING TRANSPORT CALLS
    ePayment["IsInsurance"] = false;
    ePayment["IsMedicaid"] = false;
    ePayment["IsMedicare"] = false;
    ePayment["IsNotBilled"] = false;
    ePayment["IsValid"] = false;
    if (pPayment.HasDataSet == true) {
        if (typeof pPayment.attributes.elements != 'undefined') {
            var _eP = [];
            _eP = pPayment.attributes.elements;
            if (_eP[0] != -1) {
                ePayment["IsValid"] = true;
                if (TheCall.HasPatient == false) {
                    ePayment["IsValid"] = false;  //gotta have a patient to bill
                }
            }
        }
    };
    //////////////////ePayment.01   
    var _payment = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
     
    if (ePayment["IsValid"] == true)
    {
        _payment = getValue(_eP, "ePayment.01");       
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
    if (pPayment.HasDataSet == true) {
        ePayment["CertificateGroup"] = -1;
        if (typeof pPayment.attributes.sections != 'undefined') {
            _sI = getSectionIndex(pPayment, "ePayment.CertificateGroup");
            if (_sI[0] != -1) {
                ePayment["CertificateGroup"] = 1;
                if ((ePayment.IsValid == true) && _sI.length > 0) {

                    var _cel = [];
                    var _cel = pPayment.attributes.sections[_sI[0]].attributes.elements;
                }
            }
        }
    };
 
 
    //////////////////ePayment.02
    var _payment = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (ePayment["CertificateGroup"] == 1) 
    {
        _payment = getValue(_cel, "ePayment.02");

        if (_payment.IsNull != true) {
            _val.push(_payment.ValueArray[0].val);
            if (_val == "9922001") // If Phsysicans Certification is No, Check for Medicaide/air.
            {
                if ((TheCall.IsEmergent == false && ePayment.isMedicaid == true && ePayment.isMedicare == true)) {
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "Payment", Description: "ePayment.02", Description: "PCS required for Payment Type Medicare/Medicaid" })             
                }
            }
            else {
                _val.push(_payment.ValueArray[0].val);
                valObj.IsNull = false;
            }
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
    if (ePayment["CertificateGroup"] == 1) 
    {
        _payment = getValue(_cel, "ePayment.03");
        if (_payment.IsNull != true) {
            _val.push(_payment.ValueArray[0].val);
            if ((ePayment["ePayment.02"] == null) && (ePayment["ePayment.02"] == "9922001")) //if No PCS
            {
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "Payment", Description: "ePayment.02", Description: "Certification Date Provided with null Certification" });
            }
            else {
                _val.push(_payment.ValueArray[0].val);
                valObj.IsNull = false;
            }
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
    if (ePayment["CertificateGroup"] == 1) 
    {
        _payment = getValue(_cel, "ePayment.04");
        if (_payment.IsNull != true) 
        {
            if ((ePayment["ePayment.02"] == null && ePayment["ePayment.02"] == "9922001")) //if No PCS
            {
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "Payment", Description: "ePayment.02", Description: "Certification Reason Provided with null Certification"}); 
            }
            else 
            {
                for (var i = 0; i < _payment.ValueArray.length; i++) 
                {
                    if ((_payment.ValueArray[i].HasValue == true) && (_val.indexOf(_payment.ValueArray[i].val) == -1)) {
                        _val.push(_payment.ValueArray[i].val);
                        valObj.IsNull = false;
                    }
                };
            }
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
    if (ePayment["CertificateGroup"] == 1) 
    {
        _payment = getValue(_cel, "ePayment.05");
        if (_payment.IsNull != true) 
        {
            _val.push(_payment.ValueArray[0].val);
            valObj.IsNull = false;
        }
    };
    valObj.vSet = _val.slice(0);
    ePayment["ePayment.05"] = valObj;
    delete valObj;
                
    //////////////////ePayment.06
    var _payment = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
                
    if (ePayment["CertificateGroup"] == 1)
    {
        _payment = getValue(_cel, "ePayment.06");
        if (_payment.IsNull != true) 
        {
            _val.push(_payment.ValueArray[0].val);
                
            if ((ePayment["ePayment.02"] == null && ePayment["ePayment.02"] == "9922001")) //if No PCS
            {
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "Payment", Description: "ePayment.02", Description: "Certification Provider Type with null Certification"});
            }
            else if ((ePayment["ePayment.02"] == null && ePayment["ePayment.02"] == "9922001")) //if No PCS
            {
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "Payment", Description: "ePayment.02", Description: "Certification Provider Type with null Certification"});
            }
            else {
                _val.push(_payment.ValueArray[0].val);
                valObj.IsNull = false;
            }
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
    if (ePayment["ePayment.CertificateGroup"] == 1) 
    {
        _payment = getValue(_cel, "ePayment.07");
        if (_payment.IsNull != true) 
        {
            _val.push(_payment.ValueArray[0].val);
            if ((ePayment["ePayment.02"] == null && ePayment["ePayment.02"] == "9922001")) //if No PCS
            {
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "Payment", Description: "ePayment.02", Description: "Certification Provider Type with null Certification"});
    
            }
            else {
                _val.push(_payment.ValueArray[0].val);
                valObj.IsNull = false;
            }
        }
    };
    valObj.vSet = _val.slice(0);
    ePayment["ePayment.07"] = valObj;
    delete valObj;
     
    
    //////////////////ePayment.08
    var _payment = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (ePayment["IsValid"] == true)
    {
        _payment = getValue(_eP, "ePayment.08");
        if (_payment.IsNull != true) 
        {
            _val.push(_payment.ValueArray[0].val);
            valObj.IsNull = false;
        }
    };
    valObj.vSet = _val.slice(0);
    ePayment["ePayment.08"] = valObj;
    delete valObj;
    // IF NOT INSURED, SET TO NA!~
        
    ///////////////////////////////////////////////ePayment.InsuranceGroup
    ePayment["Insurancegroup"] = -1;
    if (pPayment.HasDataSet == true) 
    {
        if (typeof pPayment.attributes.sections != 'undefined') 
        {
            _sING = getSectionIndex(pPayment, "ePayment.InsuranceGroup");
            if (_sING[0] != -1) {
                ePayment["Insurancegroup"] = _sING.length;
            }
        }
    };
    if ((ePayment.IsValid == true) && _sING.length > 0) 
    {
        InsGrpArray = [];
        for (var i = 0; i < _sING.length; i++) 
        {
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
                        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "Payment", Description: "ePayment.02", Description: "Insurance Not selected Payment type" });
                    }
                };
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
                        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "Payment", Description: "ePayment.02", Description: "Insurance Not selected Payment type" });
                    }
                };
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
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "Payment", Description: "ePayment.02", Description: "Insurance Not selected Payment type" });

                };

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
                        ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "Payment", Description: "ePayment.02", Description: "Insurance Not selected Payment type" });
                    }
                };

                _val.push(_payment.ValueArray[0].val);
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
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "Payment", Description: "ePayment.02", Description: "Insurance Not selected Payment type" });
                };

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
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "Payment", Description: "ePayment.02", Description: "Insurance Not selected Payment type" });
                };

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
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "Payment", Description: "ePayment.02", Description: "Insurance Not selected Payment type" });
                };
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
                if (ePayment["IsInsurance"] == false) {
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "Payment", Description: "ePayment.02", Description: "Insurance Not selected Payment type" });
                };
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
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "Payment", Description: "ePayment.02", Description: "Insurance Not selected Payment type" });
                };
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
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "Payment", Description: "ePayment.02", Description: "Insurance Not selected Payment type" });
                };
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
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "Payment", Description: "ePayment.02", Description: "Insurance Not selected Payment type" });

                };
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
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "Payment", Description: "ePayment.02", Description: "Insurance Not selected Payment type" });
                };

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
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "Payment", Description: "ePayment.02", Description: "Insurance Not selected Payment type" });
                };

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
                    ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "Payment", Description: "ePayment.02", Description: "Insurance Not selected Payment type" });
                };
                valObj.IsNull = false;
            };
            valObj.vSet = _val.slice(0);
            InsuranceGroup["ePayment.22"] = valObj;
            delete valObj;

            InsGrpArray.push(InsuranceGroup)
        };
        if (InsGrpArray.length > 0) 
        {
            ePayment.InsuranceGroup = InsGrpArray.slice(0);
        }
    };
  
    
    
    ///////////////////////////////////////////////ePayment.ClosestRelativeGroup
    ePayment["ClosestRelativeGroup"] = -1;
    if (pPayment.HasDataSet == true) 
    {
        if (typeof pPayment.attributes.sections != 'undefined') 
        {
            _cRG = getSectionIndex(pPayment, "ePayment.ClosestRelativeGroup");
            if (_cRG[0] != -1)
            {
                ePayment["ClosestRelativeGroup"] = 1;
            }
        }
    };
           
    if ((ePayment.IsValid == true) && (ePayment["ClosestRelativeGroup"] == 1))
    {
                
        InsGrpArray = [];
        var _clrg = [];
        _clrg = pPayment.attributes.sections[_cRG[0]].attributes.elements
        ePayment["ClosestLivingRelative"] = 1;
                
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
        if (_payment.IsNull != true) 
        {
            if (ePayment["ClosestLivingRelative"] == false) 
            {
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "Payment", Description: "ePayment.02", Description: "Closest Living Relative Not Identified - No Name"});
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
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "Payment", Description: "ePayment.02", Description: "Closest Living Relative Not Identified - No Name"});
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
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "Payment", Description: "ePayment.02", Description: "Closest Living Relative Not Identified - No Name"});
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
        if (_payment.IsNull != true) 
        {
            _val.push(_payment.ValueArray[0].val);
            if (ePayment["ClosestLivingRelative"] == false) {
                ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "Payment", Description: "ePayment.02", Description: "Closest Living Relative Not Identified - No Name"});
            }
            else {
                _val.push(_payment.ValueArray[0].val);
                valObj.IsNull = false;
            }
        };
        valObj.vSet = _val.slice(0);
        ePayment["ePayment.28"] = valObj;
        delete valObj;
        
    //////////////////ePayment.29
    var _payment = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
                
                
    _payment = getValue(_clrg, "ePayment.29");
    if (_payment.IsNull != true) {
        _val.push(_payment.ValueArray[0].val);
        if (ePayment["ClosestLivingRelative"] == false) {
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "Payment", Description: "ePayment.02", Description: "Closest Living Relative Not Identified - No Name"});
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
            ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "Payment", Description: "ePayment.02", Description: "Closest Living Relative Not Identified - No Name"});
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
        //ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "Payment", Description: "ePayment.02", Description: 
        //      _Payment.Error = "Closest Living Relative Not Identified - No Name"
        //  }
        //  else {
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
    
};
   
    /////////////////////////////ePayment.EmployerGroup
    ePayment["EmployerGroup"]=-1;
    if(pPayment.HasDataSet ==true)
    {
        if(typeof pPayment.attributes.sections !='undefined')
        {
            _sectionIndex = getSectionIndex(pPayment, "ePayment.EmployerGroup"); 
            if (_sectionIndex >= 0) 
            {
                ePayment["EmployerGroup"]=1;
                var _eg =[];
                _eg = pPayment.attributes.sections[_sectionIndex].attributes.elements
            }
        }
    };
    //////////////////ePayment.33
    var _payment = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true; 
    if(ePayment["EmployerGroup"]==1)
    {
        _payment = getValue(_eg, "ePayment.33");
        if (_payment.IsNull != true) 
        {
            _val.push(_payment.ValueArray[0].val);
            valObj.IsNull = false;
        };
    }
    valObj.vSet = _val.slice(0);
    ePayment["ePayment.33"] = valObj;
    delete valObj;
 
    //////////////////ePayment.34
    var _payment = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true; 
    if(ePayment["EmployerGroup"]==1)
    {
        _payment = getValue(_eg, "ePayment.34");
        if (_payment.IsNull != true) 
        {
            _val.push(_payment.ValueArray[0].val);
            valObj.IsNull = false;
        }
    };
    valObj.vSet = _val.slice(0);
    ePayment["ePayment.34"] = valObj;
    delete valObj;
 
    //////////////////ePayment.35
    var _payment = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true; 
    if(ePayment["EmployerGroup"]==1)
    {
        _payment = getValue(_eg, "ePayment.35");
        if (_payment.IsNull != true) 
        {
            _val.push(_payment.ValueArray[0].val);
            valObj.IsNull = false;
        }
    };
    valObj.vSet = _val.slice(0);
    ePayment["ePayment.35"] = valObj;
    delete valObj;
 
    //////////////////ePayment.36
    var _payment = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true; 
    if(ePayment["EmployerGroup"]==1)
    {
        _payment = getValue(_eg, "ePayment.36");
        if (_payment.IsNull != true) 
        {
            _val.push(_payment.ValueArray[0].val);
            valObj.IsNull = false;
        }
    };
    valObj.vSet = _val.slice(0);
    ePayment["ePayment.36"] = valObj;
    delete valObj;
 
    //////////////////ePayment.37
    var _payment = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if(ePayment["EmployerGroup"]==1)
    {
        _payment = getValue(_eg, "ePayment.37");
        if (_payment.IsNull != true) 
        {
            _val.push(_payment.ValueArray[0].val);
            valObj.IsNull = false;
        }
    };
    valObj.vSet = _val.slice(0);
    ePayment["ePayment.37"] = valObj;
    delete valObj;
 
    //////////////////ePayment.38
    var _payment = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true; 
    if(ePayment["EmployerGroup"]==1)
    {
        _payment = getValue(_eg, "ePayment.38");
        if (_payment.IsNull != true) 
        {
            _val.push(_payment.ValueArray[0].val);
            valObj.IsNull = false;
 
        }
    };
    valObj.vSet = _val.slice(0);
    ePayment["ePayment.38"] = valObj;
    delete valObj;
 
 
    //////////////////ePayment.39
    var _payment = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true; 
    if(ePayment["EmployerGroup"]==1)
    {
        _payment = getValue(_eg, "ePayment.39");
        if (_payment.IsNull != true) 
        {
            //  if (ePayment["hasClosestLivingRelative"] == false) {
            //ErrorList.push({ Version: "3.3.4", Severity: "1", ElementID: "Payment", Description: "ePayment.02", Description: 
            //      _Payment.Error = "Closest Living Relative Not Identified - No Name"
            //  }
            //  else {
            for (var i = 0; i < _payment.ValueArray.length; i++) 
            {
                _phoneType = "";
                if ((_payment.ValueArray[i].HasValue == true) && (_val.indexOf(_payment.ValueArray[i].val) == -1)) 
                {
                    var _pObj = new Object();
                    _val.push(_payment.ValueArray[i].val)
                    _phoneType = _payment.ValueArray[i].PhoneNumberType
                    if (_payment.ValueArray[i].val != null) 
                    { 
                        valObj.IsNull = false;
                    };
                };
            }
            //};
        }
    };
    valObj.vSet = _val.slice(0);
    ePayment["ePayment.39"] = valObj;
    delete valObj;
        
    
    
    //////////////////ePayment.40
    var _payment = [];
    var _val = [];
    var valObj = {};
    valObj.IsNull = true;
    if (ePayment["IsValid"] == true)    {
        _payment = getValue(_eP, "ePayment.40");
        if (_payment.IsNull != true) {
            _val.push(_payment.ValueArray[0].val);
            valObj.IsNull = false;
        }
    };
    valObj.vSet = _val.slice(0);
    ePayment["ePayment.40"] = valObj;
    delete valObj;
 
     //////////////////ePayment.41
     var _payment = [];
     var _val = [];
     var valObj = {};
     valObj.IsNull = true;
     if (ePayment["IsValid"] == true)    {
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
         
         }
     };
    valObj.vSet = _val.slice(0);
    ePayment["ePayment.41"] = valObj;
    delete valObj;
 
     //////////////////ePayment.42
     var _payment = [];
     var _val = [];
     var valObj = {};
     valObj.IsNull = true;
     if (ePayment["IsValid"] == true)    {
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
         }
     };
     valObj.vSet = _val.slice(0);
     ePayment["ePayment.42"] = valObj;
     delete valObj;
 
     //////////////////ePayment.43
     var _payment = [];
     var _val = [];
     var valObj = {};
     valObj.IsNull = true;
     if (ePayment["IsValid"] == true)    {
         _payment = getValue(_eP, "ePayment.43");
         if (_payment.IsNull != true) {
             _val.push(_payment.ValueArray[0].val);
             valObj.IsNull = false;
         }
     };
     valObj.vSet = _val.slice(0);
     ePayment["ePayment.43"] = valObj;
     delete valObj;

     //////////////////ePayment.44
     var _val = [];
     var valObj = {};
     valObj.IsNull = true;
     if (ePayment["IsValid"] == true)    {
         _payment = getValue(_eP, "ePayment.44");
         if (_payment.IsNull != true) {
             for (var i = 0; i < _payment.ValueArray.length; i++) {
                 if ((_payment.ValueArray[i].HasValue == true) && (_val.indexOf(_payment.ValueArray[i].val) == -1)) {
                     _val.push(_payment.ValueArray[i].val);
                     valObj.IsNull = false;
                 }
             };
         }
     };
     valObj.vSet = _val.slice(0);
     ePayment["ePayment.44"] = valObj;
     delete valObj;
 
 
     //////////////////ePayment.45
     var _payment = [];
     var _val = [];
     var valObj = {};
     valObj.IsNull = true;
     if (ePayment["IsValid"] == true)    {
         _payment = getValue(_eP, "ePayment.45");
         if (_payment.IsNull != true) {
             _val.push(_payment.ValueArray[0].val);
             valObj.IsNull = false;
 
         }
     };
     valObj.vSet = _val.slice(0);
     ePayment["ePayment.45"] = valObj;
     delete valObj;
 
     //////////////////ePayment.46
     var _payment = [];
     var _val = [];
     var valObj = {};
     valObj.IsNull = true;
     if (ePayment["IsValid"] == true)    {
         _payment = getValue(_eP, "ePayment.46");
         if (_payment.IsNull != true) {
             _val.push(_payment.ValueArray[0].val);
             valObj.IsNull = false;
         }
     };
     valObj.vSet = _val.slice(0);
     ePayment["ePayment.46"] = valObj;
     delete valObj;
 
     //////////////////ePayment.47
     var _payment = [];
     var _val = [];
     var valObj = {};
     valObj.IsNull = true;
     if (ePayment["IsValid"] == true)    {
         _payment = getValue(_eP, "ePayment.47");
         if (_payment.IsNull != true) {
             for (var i = 0; i < _payment.ValueArray.length; i++) {
                 if ((_payment.ValueArray[i].HasValue == true) && (_val.indexOf(_payment.ValueArray[i].val) == -1)) {
                     if (_payment.ValueArray[i].val.length == 1) {
                         _val.push("0" + _payment.ValueArray[i].val)
                     }
                     else {
                         _val.push(_payment.ValueArray[i].val);
                         valObj.IsNull = false;
                     }
                 };
             }
         }
     };
     valObj.vSet = _val.slice(0);
     ePayment["ePayment.47"] = valObj;
     delete valObj;
 
     //////////////////ePayment.48
     var _payment = [];
     var _val = [];
     var valObj = {};
     valObj.IsNull = true;
     if (ePayment["IsValid"] == true)    {
         _payment = getValue(_eP, "ePayment.48");
         if (_payment.IsNull != true) {
             _val.push(_payment.ValueArray[0].val);
             valObj.IsNull = false;
         }
     };
     valObj.vSet = _val.slice(0);
     ePayment["ePayment.48"] = valObj;
     delete valObj;
 
     //////////////////ePayment.49
     var _payment = [];
     var _val = [];
     var valObj = {};
     valObj.IsNull = true;
     if (ePayment["IsValid"] == true)    {
         _payment = getValue(_eP, "ePayment.49");
         if (_payment.IsNull != true) {
             _val.push(_payment.ValueArray[0].val);
             valObj.IsNull = false; 
         }
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
     if (ePayment["IsValid"] == true)    
     {
         _payment = getValue(_eP, "ePayment.50");      
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
     else 
     {
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
     if (ePayment["IsValid"] == true)    
     {
         _payment = getValue(_eP, "ePayment.51");
         if (_payment.IsNull != true) {
             _val.push(_payment.ValueArray[0].val);
             valObj.IsNull = false;
 
         }
     };
     valObj.vSet = _val.slice(0);
     ePayment["ePayment.51"] = valObj;
     delete valObj;
 
     //////////////////ePayment.52
     var _payment = [];
     var _val = [];
     var valObj = {};
     valObj.IsNull = true;
     if (ePayment["IsValid"] == true)    {
         _payment = getValue(_eP, "ePayment.52");
         if (_payment.IsNull != true) {
             _val.push(_payment.ValueArray[0].val);
             valObj.IsNull = false; 
         }
     };
     valObj.vSet = _val.slice(0);
     ePayment["ePayment.52"] = valObj;
     delete valObj;
 
     //////////////////ePayment.53
     var _payment = [];
     var _val = [];
     var valObj = {};
     valObj.IsNull = true;
     if (ePayment["IsValid"] == true){
         payment = getValue(_eP, "ePayment.53");
         if (_payment.IsNull != true) {
             _val.push(_payment.ValueArray[0].val);
             valObj.IsNull = false;
         }
     };
     valObj.vSet = _val.slice(0);
     ePayment["ePayment.53"] = valObj;
     delete valObj;
 
     //////////////////ePayment.54
     var _payment = [];
     var _val = [];
     var valObj = {};
     valObj.IsNull = true;
     if (ePayment["IsValid"] == true){
         _payment = getValue(_eP, "ePayment.54");
         if (_payment.IsNull != true) {
             _val.push(_payment.ValueArray[0].val);
             valObj.IsNull = false;
         }
     };
     valObj.vSet = _val.slice(0);
     ePayment["ePayment.54"] = valObj;
     delete valObj;
 
    ///////////////////////////////////////////////ePayment.SupplyItemGroup
     ePayment["SupplyItemGroup"] = -1;
     if (pPayment.HasDataSet == true) {
         if (typeof pPayment.attributes.sections != 'undefined') {
             var _sIG = [];
             _sIG = getSectionIndex(pPayment, "ePayment.SupplyItemGroup");
             ePayment["SupplyItemGroup"] = _sIG.length;
         }
     };
     if (ePayment["SupplyItemGroup"] > 0)
    {
        ePayment["SupplyItemGroup"]=_sIG.length;
 
        InsGrpArray = [];
        for (var i = 0; i < _sIG.length; i++)
        {
 
            var SupplyGroup = new Object();
 
            var _lsp = pPayment.attributes.sections[_sIG[i]].attributes.elements
 
 
            //////////////////ePayment.55
            var _payment = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
 
            sgArr = [];
            _payment = getValue(_lsp, "ePayment.55");
            if (_payment.IsNull != true)
            {
                _val.push(_payment.ValueArray[0].val);
                valObj.IsNull = false;
            };
            valObj.vSet = _val.slice(0);
            SupplyGroup["ePayment.55"] = valObj;
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
            InsGrpArray.push(SupplyGroup);
        }                 
        ePayment.SupplyItemGroup = InsGrpArray;            
    };         
    return ePayment;    
};
var seteLabs = function (TheCall) {

    var eLabs = new Object();
    var pLabs = TheCall.pLabs;
    eLabs["IsValid"] = false;
    eLabs["LabGroup"] = -1;
    if (pLabs.HasDataSet != true)
    {
        if (typeof pLabs.attributes.elements != 'undefined')
        {
            var _exArr = []
            _exArr = pLabs;
            if (_exArr.length > 0)
            {
                eLabs["LabGroup"] = _exArr.length;
            }
        }
    };
    for (var x = 0; x < _exArr.length; x++) {
        ////////eLab.01 
        var _lab = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        if (eLab.IsValid == true) {
            _lab = getValue(_exArr, "eLab.01");
            if (_elab.IsNull != true) {
                _val.push(_lab.ValueArray[0].val);
                valObj.IsNull = false;
            }
        };
        valObj.vSet = _val.slice(0);
        LabGroup["eLab.01"] = valObj;
        delete valObj;


        ////////eLab.02
        var _lab = [];
        var _val = [];
        var valObj = {};
        valObj.IsNull = true;
        if (eLab.IsValid == true) {
            _lab = getValue(_exArr, "eLab.02");
            if (_elab.IsNull != true) {
                _val.push(_lab.ValueArray[0].val);
                valObj.IsNull = false;
            }
        };
        valObj.vSet = _val.slice(0);
        LabGroup["eLab.02"] = valObj;
        delete valObj;
        //////////////////////////////////////ResultGroup
        eLabs["ResultGroup"] = -1;
        if (pLabs.HasDataSet != true) {
            if (typeof pLabs.attributes.sections[x].attributes.sections != 'undefined') {
                var _exArr2 = []
                _exArr2 = pLabs.attributes.sections[x];
                if (_exArr2.length > 0) {
                    eLabs["ResultGroup"] = _exArr2.length;
                }
            }
        };

        for (var xx = 0; xx < _exArr2.length; xx++) {
            var _lab = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            if (eLab.IsValid == true) {
                _lab = getValue(_exArr, "eLab.03");
                if (_elab.IsNull != true) {
                    _val.push(_lab.ValueArray[0].val);
                    valObj.IsNull = false;
                }
            };
            valObj.vSet = _val.slice(0);
            ResultGroup["eLab.03"] = valObj;
            delete valObj;

            var _lab = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            if (eLab.IsValid == true) {
                _lab = getValue(_exArr, "eLab.04");
                if (_elab.IsNull != true) {
                    _val.push(_lab.ValueArray[0].val);
                    valObj.IsNull = false;
                }
            };
            valObj.vSet = _val.slice(0);
            ResultGroup["eLab.04"] = valObj;
            delete valObj;
        };

        ///////////////////////////////////////ImageGroup
        eLabs["ImageGroup"] = -1;
        if (pLabs.HasDataSet != true) {
            if (typeof pLabs.attributes.sections[x].attributes.sections != 'undefined') {
                var _exArr2 = []
                _exArr2 = pLabs.attributes.sections[x];
                if (_exArr2.length > 0) {
                    eLabs["ImageGroup"] = _exArr2.length;
                }
            }
        };

        for (var yy = 0; yy < _exArr2.length; yy++) {
            var _lab = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            if (eLab.IsValid == true) {
                _lab = getValue(_exArr, "eLab.05");
                if (_elab.IsNull != true) {
                    _val.push(_lab.ValueArray[0].val);
                    valObj.IsNull = false;
                }
            };
            valObj.vSet = _val.slice(0);
            ResultGroup["eLab.05"] = valObj;
            delete valObj;

            var _lab = [];
            var _val = [];
            var valObj = {};
            valObj.IsNull = true;
            if (eLab.IsValid == true) {
                _lab = getValue(_exArr, "eLab.06");
                if (_elab.IsNull != true) {
                    _val.push(_lab.ValueArray[0].val);
                    valObj.IsNull = false;
                }
            };
            valObj.vSet = _val.slice(0);
            ResultGroup["eLab.06"] = valObj;
            delete valObj;

            ///////////////////////////////////////WaveFormGraphicGroup
            eLabs["WaveFormGraphicGroup"] = -1;
            if (pLabs.HasDataSet != true) {
                if (typeof pLabs.attributes.sections[x].attributes.sections != 'undefined') {
                    var _exArr2 = []
                    _exArr2 = pLabs.attributes.sections[x];
                    if (_exArr2.length > 0) {
                        eLabs["WaveFormGraphicGroup"] = _exArr2.length;
                    }
                }
            };

            for (var yyy = 0; yyy < _exArr2.length; yyy++) {
                var _lab = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                if (eLab.IsValid == true) {
                    _lab = getValue(_exArr, "eLab.07");
                    if (_elab.IsNull != true) {
                        _val.push(_lab.ValueArray[0].val);
                        valObj.IsNull = false;
                    }
                };
                valObj.vSet = _val.slice(0);
                WaveFormGraphicGroup["eLab.07"] = valObj;
                delete valObj;

                var _lab = [];
                var _val = [];
                var valObj = {};
                valObj.IsNull = true;
                if (eLab.IsValid == true) {
                    _lab = getValue(_exArr, "eLab.08");
                    if (_elab.IsNull != true) {
                        _val.push(_lab.ValueArray[0].val);
                        valObj.IsNull = false;
                    }
                };
                valObj.vSet = _val.slice(0);
                WaveFormGraphicGroup["eLab.08"] = valObj;
                delete valObj;
            }
        }
    };
    return eLabs
};