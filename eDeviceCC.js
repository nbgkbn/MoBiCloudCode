var Utils = require('cloud/UtilitiesCC.js');
exports.seteDevice = function (TheCall) {

    var eDevice = new Object();
    var pDevice = TheCall.pDevice
    var DeviceGroup = new Object();
    eDevice.IsValid = false;
    eDevice["DeviceGroup"] = 0;

    if (pDevice.HasDataSet == true) {
        if (typeof pDevice.attributes.sections != 'undefined')
        {
            var _sI = [];
            _sI = Utils.getSectionIndex(pDevice, "eDevice.DeviceGroup")

            if (_sI[0] != -1)
            {
                eDevice["DeviceGroup"] = _sI.length;
                eDevice.IsValid = true;

                for (var xx = 0; xx < _sI.length; xx++)
                {
                    DeviceGroup = new Object();

                    var _eL = pDevice.attributes.sections[_sectionIndex[xx]].attributes.elements;
                    if (_eL.length > 0)
                    {
                        //edevice.01/////////////////////////////
                        var _device = [];
                        var _val = [];
                        var valObj = {};
                        valObj.IsNull = true;
                        _device = Utils.getValue(_eL, "eDevice.01");
                        if (_device.IsNull != true)
                        {
                            _val.push(_device.ValueArray[0].val);
                            valObj.vSet = _val.slice(0);
                            DeviceGroup["eDevice.01"] = valObj;
                            delete valObj;
                        };


                        //edevice.02/////////////////////////////
                        var _device = [];
                        var _val = [];
                        var valObj = {};
                        valObj.IsNull = true;
                        _device = Utils.getValue(_eL, "eDevice.02");
                        if (_device.IsNull != true)
                        {
                            _val.push(_device.ValueArray[0].val);
                            valObj.IsNull = false;
                            valObj.vSet = _val.slice(0);
                            DeviceGroup["eDevice.02"] = valObj;
                            delete valObj;
                        };

                        //edevice.03/////////////////////////////
                        var _device = [];
                        var _val = [];
                        var _text = [];
                        var valObj = {};
                        valObj.IsNull = true;
                        _device = Utils.getValue(_eL, "eDevice.03");

                        if (_device.IsNull != true)
                        {
                            for (var i = 0; i <= _device.Count - 1; i++)
                            {
                                if ((_device.ValueArray[i].HasValue == true) && (_val.indexOf(_device.ValueArray[i].val) == -1))
                                {
                                    _val.push(_device.ValueArray[i].val);
                                    _text.push(_device.ValueArray[i].text);
                                }
                            };
                            valObj.CodeText = _text.slice(0);
                            valObj.IsNull = false;
                            valObj.vSet = _val.slice(0);
                            DeviceGroup["eDevice.03"] = valObj;
                            delete valObj;
                        };

                        eDevice["WaveformGroup"] = 0;
                        if (typeof pDevice.attributes.sections != 'undefined')
                        {
                            var _wFG = []
                            _wFG = Utils.getSectionIndex(pDevice.attributes.sections[xx], "eDevice.WaveformGroup");
                            if (_wFG[0] != -1)
                            {

                                ///////////////WaveForm
                                var _eRG = [];
                                var _eRG = pDevice.attributes.sections[_sectionIndex[xx]].attributes.sections[_wFG].attributes.elements;
                                //edevice.04/////////////////////////////
                                var _device = [];
                                var _val = [];
                                var valObj = {};
                                valObj.IsNull = true;
                                _device = Utils.getValue(_eRG, "eDevice.04");

                                if (_device.IsNull != true)
                                {
                                    _val.push(_device.ValueArray[0].val);
                                    valObj.IsNull = false;
                                    valObj.vSet = _val.slice(0);
                                    DeviceGroup["eDevice.04"] = valObj;
                                    delete valObj;
                                };

                                //edevice.05/////////////////////////////
                                var _device = [];
                                var _val = [];
                                var valObj = {};
                                valObj.IsNull = true;
                                _device = Utils.getValue(_eRG, "eDevice.05");
                                if (_device.IsNull != true)
                                {

                                    _val.push(_device.ValueArray[0].val);
                                    valObj.IsNull = false;
                                    valObj.vSet = _val.slice(0);
                                    DeviceGroup["eDevice.05"] = valObj;
                                    delete valObj;
                                }
                            };

                                //edevice.06/////////////////////////////
                                var _device = [];
                                var _val = [];
                                var _text = [];
                                var valObj = {};
                                valObj.IsNull = true;

                                _device = Utils.getValue(_eRG, "eDevice.06");

                                if (_device.IsNull != true)
                                {
                                    _val.push(_device.ValueArray[0].val);
                                    valObj.IsNull = false;
                                    _text.push(_dispatch.ValueArray[0].text);

                                    valObj.CodeText = _text.slice(0);
                                    valObj.vSet = _val.slice(0);
                                    DeviceGroup["eDevice.06"] = valObj;
                                    delete valObj;
                                }
                        };

                        //edevice.07/////////////////////////////
                        var _device = [];
                        var _text = [];
                        var _val = [];
                        var valObj = {};
                        valObj.IsNull = true;
                        if (eDevice.IsValid == true)
                        {
                            _device = Utils.getValue(_eL, "eDevice.07");

                            if (_device.IsNull != true)
                            {
                                for (var i = 0; i <= _device.Count - 1; i++)
                                {
                                    if ((_device.ValueArray[i].HasValue == true) && (_val.indexOf(_device.ValueArray[i].val) == -1))
                                    {
                                        _val.push(_device.ValueArray[i].val);
                                        _text.push(_device.ValueArray[i].text);
                                    }
                                };
                                valObj.CodeText = _text.slice(0);
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
                        _device = Utils.getValue(_eL, "eDevice.08");
                        if (_device.IsNull != true)
                        {
                            _val.push(_device.ValueArray[0].val);
                            valObj.IsNull = false;
                            valObj.vSet = _val.slice(0);
                            DeviceGroup["eDevice.08"] = valObj;
                            delete valObj;
                        };

                        ///////////////Shock
                        eDevice["eDevice.ShockGroup"] = -1;
                        if (typeof pDevice.attributes.sections[xx].attributes.sections != 'undefined')
                        {
                            {
                                var _cSG = [];
                                _cSG = Utils.getSectionIndex(pDevice.attributes.sections[xx], "eDevice.ShockGroup")
                                if (_cSG.length > 0)
                                {
                                    eDevice["eDevice.ShockGroup"] = 1;
                                    var _eSG = [];
                                    var _eSG = pDevice.attributes.sections[_sectionIndex[xx]].attributes.sections[_cSG].attributes.elements;

                                    var _device = [];
                                    var _val = [];
                                    var _text = [];
                                    var valObj = {};
                                    valObj.IsNull = true;

                                    _device = Utils.getValue(_eSG, "eDevice.09");
                                    if (_device.IsNull != true)
                                    {
                                        _val.push(_device.ValueArray[0].val);
                                        valObj.IsNull = false;
                                        _text.push(_dispatch.ValueArray[0].text);
                                        valObj.CodeText = _text.slice(0);
                                        valObj.vSet = _val.slice(0);
                                        DeviceGroup["eDevice.09"] = valObj;
                                        delete valObj;
                                    };

                                    var _device = [];
                                    var _val = [];
                                    var valObj = {};
                                    valObj.IsNull = true;
                                    _device = Utils.getValue(_eSG, "eDevice.10");

                                    if (_device.IsNull != true)
                                    {
                                        _val.push(_device.ValueArray[0].val);
                                        valObj.IsNull = false;
                                        valObj.vSet = _val.slice(0);
                                        DeviceGroup["eDevice.10"] = valObj;
                                        delete valObj;
                                    };

                                    var _device = [];
                                    var _val = [];
                                    var valObj = {};
                                    valObj.IsNull = true;
                                    _device = Utils.getValue(_eSG, "eDevice.11");

                                    if (_device.IsNull != true)
                                    {
                                        _val.push(_device.ValueArray[0].val);
                                        valObj.IsNull = false;
                                        valObj.vSet = _val.slice(0);
                                        DeviceGroup["eDevice.11"] = valObj;
                                        delete valObj;
                                    };

                                    var _device = [];
                                    var _val = [];
                                    var valObj = {};
                                    valObj.IsNull = true;
                                    _device = Utils.getValue(_eSG, "eDevice.12");

                                    if (_device.IsNull != true)
                                    {
                                        _val.push(_device.ValueArray[0].val);
                                        valObj.IsNull = false;
                                        valObj.vSet = _val.slice(0);
                                        DeviceGroup["eDevice.12"] = valObj;
                                        delete valObj;
                                    };
                                }
                            }
                        }
                    }
                }
            }
        };


        dGroupArray.push(DeviceGroup)
        eDevice.DeviceGroup = dGroupArray.slice(0)
    };
    return eDevice;

};

