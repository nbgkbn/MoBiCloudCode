var ErrorList = [];

exports.ReportingRequired = function (ElementName) {
    return true;
}
//var getSectionIndex = function (sectionObject, sectionName)
exports.getSectionIndex = function (sectionObject, sectionName) {
    //Returns an array of index values for a given sectionName within a sectionObject
    // if sectionName does not exist within the sectionObject, return -1
    var _retValue = [];
    if (typeof sectionObject.attributes.sections != 'undefined') {
        for (var d = 0; d < sectionObject.attributes.sections.length; d++) {

            if (sectionObject.attributes.sections[d].attributes.name == sectionName) {
                _retValue.push(d);
            }
        }
    };
    if (_retValue.length == 0) {
        _retValue.push(-1);
    }

    return _retValue;
};
//var getValue = function (elementList, valueElement) {
exports.getValue = function (elementList, valueElement) {
    //Gets NEMSIS values from list of NEMSIS elements
    //Sets ReturnObject as Array of valueElement value objects.
    //elementList: Entire corpus of valueObjects for a given section - eHistory.01, eHistory.02, eHistory.01
    //valueElement:  The NEMSIS value sought
    var _arr = [];
    var returnObject = new Object();
    var valueObject = new Object();
    returnObject.val = null;
    if (elementList != 'undefined') {

        for (var i = 0; i < elementList.length; i++) //Run through entire array of valueObjects
        {

            if (elementList[i].attributes.title == valueElement) //when elementList.item equals valueElement sought, process
            {

                var returnObject = new Object(); //if valueElement in list, return an Object.
                valueObject.Count = 0;
                valueObject.IsNull = true;
                returnObject.val = null;
                returnObject.text = null;
                returnObject.datavalue = null;
                //if ((typeof elementList[i].attributes.value == 'undefined')||(elementList[i].attributes.value ==null ))   //Determine if valueObject exists
                if (elementList[i].attributes.value == "")   //Determine if valueObject exists
                {
                    //If Not, retrun NullObject assertion
                    valueObject.Count = 0;
                    returnObject.HasValue = false;
                    valueObject.IsNull = true;
                    returnObject.val = null;
                    returnObject.datavalue = null;
                    returnObject.text = null;
                    _arr.push(returnObject);
                    valueObject.Count = _arr.length;
                    valueObject.ValueArray = _arr;

                    //Pertient Negatives
                    if (elementList[i].attributes.pn != 'undefined') {
                        if (elementList[i].attributes.pn.length > 0) {
                            valueObject.pn = elementList[i].attributes.pn;
                            valueObject.HasPN = true;
                        }

                    };
                    return valueObject;

                }
                else if (elementList[i].attributes.value === null)   //Determine if valueObject exists
                {
                    //If Not, retrun NullObject assertion
                    valueObject.Count = 0;
                    returnObject.HasValue = false;
                    valueObject.IsNull = true;
                    returnObject.val = null;
                    returnObject.datavalue = null;
                    returnObject.text = null;
                    _arr.push(returnObject);
                    valueObject.Count = _arr.length;
                    valueObject.ValueArray = _arr;

                    //Pertient Negatives
                    if (elementList[i].attributes.pn != 'undefined') {
                        if (elementList[i].attributes.pn.length > 0) {
                            valueObject.pn = elementList[i].attributes.pn;
                            valueObject.HasPN = true;
                        }

                    };
                    return valueObject;
                }
                else {
                    if (typeof elementList[i].attributes.value != 'undefined') {
                        if (elementList[i].attributes.value.trim().length != 0)  //Can't trust data in this world.  
                        {
                            valueObject.IsNull = false;                                 // The Object has valid Value, so set IsNull 
                            returnObject.val = elementList[i].attributes.value.trim();  // Good data, assign it to return object
                            if (typeof elementList[i].attributes.codeString != 'undefined') {
                                returnObject.text = elementList[i].attributes.codeString.trim();  // Good data, assign it to return object
                            }
                            else {
                                returnObject.text = null;
                            };

                            //Pertient Negatives
                            if (elementList[i].attributes.pn != 'undefined') {
                                if (elementList[i].attributes.pn.length > 0) {
                                    returnObject.pn = elementList[i].attributes.pn;
                                    valueObject.HasPN = true;
                                }

                            };


                            //Exceptional Values, PhoneNumber, eMail Address, DrugCode Type
                            if (typeof elementList[i].attributes.params != 'undefined') {
                                if (typeof elementList[i].attributes.params.PhoneNumberType != 'undefined') {
                                    returnObject.PhoneNumberType = elementList[i].attributes.params.PhoneNumberType.value;
                                } else if (typeof elementList[i].attributes.params.EmailType != 'undefined') {
                                    returnObject.EmailType = elementList[i].attributes.params.EmailAddressType.value;
                                }
                                else {
                                    returnObject.Params = elementList[i].attributes.params;
                                }
                            }


                        }
                    }
                };
                //PN values, find the Pertinent Negatives

                // if ((elementList[i].attributes.pn != "") && (elementList[i].attributes.pn != 'undefined'))

                if (_arr.indexOf(returnObject.val) == -1) {
                    returnObject.HasValue = true;
                    _arr.push(returnObject);
                };

                returnObject = null;
            }
        };
        valueObject.Count = _arr.length;
        valueObject.ValueArray = _arr;
        return valueObject;
    };
};

exports.IsGo = function (valObject) {
    if (typeof valObject == 'undefined') {
        return false;
    };
    if (valObject == null) {
        return false;
    };

    if (valObject.length === 0) {
        return false;
    };
    return true;
};

