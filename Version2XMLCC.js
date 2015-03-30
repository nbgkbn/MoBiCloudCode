var Utils = require('cloud/UtilitiesCC.js');
var jsXML = require('cloud/JSXMLWriter.js');
exports.setV2XML = function (EMSDataSet)
{
    var eDS = EMSDataSet;
    
    var NAPP = "-25";
    var NA = "-5";
    var NKA = "-10";
    var specMap = {
        "7701001": "-5",
        "7701003": "-15",
        "7701005": "-20",
        "8801005": "-10",
        "8801013": "-10",
        "8801015": "-10",
        "8801017": "-10",
        "8801019": "-10",
        "8801021": "-10",
        "8801023": "-10"
    };
    var specVal = ["7701001", "7701003", "7701005", "8801005", "8801013", "8801015", "8801017", "8801019", "8801021", "8801023"];

    //var v2XML = new XMLWriter('UTF-8', '1.0');
    var v2XML = new jsXML.XMLWriter('UTF-8', '1.0');
    v2XML.writeStartDocument();
    v2XML.writeStartElement('EMSDataSet');
    v2XML.writeAttributeString('xmlns', "http://www.nemsis.org")
    v2XML.writeAttributeString('xmlns:xsi', "http://www.w3.org/2001/XMLSchema-instance")
    v2XML.writeAttributeString('xsi:schemaLocation', "http://www.nemsis.org http://nemsis.org/media/XSD_v3/_nemsis_v3.3.4/3.3.4.140328/XSDs/NEMSIS_XSDs_v3.3.4.140328/EMSDataSet_v3.xsd")


    v2XML.writeStartElement("Header");
    v2XML.writeElementString("D01_01", "string");
    v2XML.writeElementString("D01_03", "string");
    v2XML.writeElementString("D01_04", "string");
    v2XML.writeElementString("D01_07", "string");
    v2XML.writeElementString("D01_08", "string");
    v2XML.writeElementString("D01_09", "string");
    v2XML.writeElementString("D01_21", "string");
    v2XML.writeElementString("D02_07", "string");

    v2XML.writeEndElement("Header");
    
    if (typeof eDS.E01 != 'undefined')
    {
        v2XML.writeStartElement("E01");

        if (typeof eDS.E01.E01_01 != 'undefined')
        {
            if (IsOk(eDS.E01.E01_01) == true)
            {
                v2XML.writeElementString("E01_01", eDS.E01.E01_01)
            }
        };
        if (typeof eDS.E01.E01_02 != 'undefined')
        {
            if (IsOk(eDS.E01.E01_02) == true)
            {
                v2XML.writeElementString("E01_02", eDS.E01.E01_02)
            }
        };
        if (typeof eDS.E01.E01_03 != 'undefined')
        {
            if (IsOk(eDS.E01.E01_03) == true)
            {
                v2XML.writeElementString("E01_03", eDS.E01.E01_03)
            }
        };
        if (typeof eDS.E01.E01_04 != 'undefined')
        {
            if (IsOk(eDS.E01.E01_04) == true)
            {
                v2XML.writeElementString("E01_04", eDS.E01.E01_04)
            }
        };
        v2XML.writeEndElement("E01");
    };
    if (typeof eDS.E02 != 'undefined')
    {
        v2XML.writeStartElement("E02");

        if (typeof eDS.E02.E02_01 != 'undefined')
        {
            if (IsOk(eDS.E02.E02_01) == true)
            {
                v2XML.writeElementString("E02_01", eDS.E02.E02_01);
            }
        };
        if ((typeof eDS.E02.E02_02 != 'undefined') && (IsOk(eDS.E02.E02_02) == true))
        {
            v2XML.writeElementString("E02_02", eDS.E02.E02_02);
        };

        if ((typeof eDS.E02.E02_03 != 'undefined') && (IsOk(eDS.E02.E02_03) == true))
        {
            v2XML.writeElementString("E02_03", eDS.E02.E02_03);
        };

        if ((typeof eDS.E02.E02_04 != 'undefined') && (IsOk(eDS.E02.E02_04) == true))
        {
            {
                v2XML.writeElementString("E02_04", eDS.E02.E02_04);
            }
        };

        if ((typeof eDS.E02.E02_05 != 'undefined') && (IsOk(eDS.E02.E02_05) == true))
        {
            {
                v2XML.writeElementString("E02_05", eDS.E02.E02_05);
            }
        };

        if (typeof eDS.E02.E02_06 != 'undefined')
        {
            for (var i = 0; i < eDS.E02.E02_06.length; i++)
            {
                if (IsOk(eDS.E02.E02_06[i]) == true)
                {
                    v2XML.writeElementString("E02_06", eDS.E02.E02_06[i]);
                }
            }
        };
        if (typeof eDS.E02.E02_07 != 'undefined')
        {
            for (var i = 0; i < eDS.E02.E02_07.length; i++)
            {
                if (IsOk(eDS.E02.E02_07[i]) == true)
                {
                    v2XML.writeElementString("E02_07", eDS.E02.E02_07[i]);
                }
            }
        };
        if (typeof eDS.E02.E02_08 != 'undefined')
        {
            for (var i = 0; i < eDS.E02.E02_08.length; i++)
            {
                if (IsOk(eDS.E02.E02_08[i]) == true)
                {
                    v2XML.writeElementString("E02_08", eDS.E02.E02_08[i]);
                }
            }
        };
        if (typeof eDS.E02.E02_09 != 'undefined')
        {
            for (var i = 0; i < eDS.E02.E02_09.length; i++)
            {
                if (IsOk(eDS.E02.E02_09[i]) == true)
                {
                    v2XML.writeElementString("E02_09", eDS.E02.E02_09[i]);
                }
            }
        };
        if (typeof eDS.E02.E02_10 != 'undefined')
        {
            for (var i = 0; i < eDS.E02.E02_10.length; i++)
            {
                if (IsOk(eDS.E02.E02_10[i]) == true)
                {
                    v2XML.writeElementString("E02_10", eDS.E02.E02_10[i]);
                }
            }
        };
        if (typeof eDS.E02.E02_11 != 'undefined')
        {
            if (IsOk(eDS.E02.E02_11) == true)
            {
                v2XML.writeElementString("E02_11", eDS.E02.E02_11);
            }
        };
        if (typeof eDS.E02.E02_12 != 'undefined')
        {
            if (eDS.E02.E02_12.length != 0)
            {
                if (IsOk(eDS.E02.E02_12) == true)
                {
                    v2XML.writeElementString("E02_12", eDS.E02.E02_12);
                }
            }
        };
        if (typeof eDS.E02.E02_13 != 'undefined')
        {
            if (IsOk(eDS.E02.E02_13) == true)
            {
                v2XML.writeElementString("E02_13", this.escapeXml( eDS.E02.E02_13));
            }
        };
        if (typeof eDS.E02.E02_14 != 'undefined')
        {
            if (IsOk(eDS.E02.E02_14) == true)
            {
                v2XML.writeElementString("E02_14", eDS.E02.E02_14);
            }
        };
        if (typeof eDS.E02.E02_15 != 'undefined')
        {
            if (IsOk(eDS.E02.E02_E15) == true)
            {
                v2XML.writeElementString("E02_15", eDS.E02.E02_15);
            }
        };
        if (typeof eDS.E02.E02_16 != 'undefined')
        {
            if (IsOk(eDS.E02.E02_E16) == true)
            {
                v2XML.writeElementString("E02_16", eDS.E02.E02_16);
            }
        };
        if (typeof eDS.E02.E02_17 != 'undefined')
        {
            if (IsOk(eDS.E02.E02_17) == true)
            {
                v2XML.writeElementString("E02_17", eDS.E02.E02_17);
            }
        };
        if (typeof eDS.E02.E02_18 != 'undefined')
        {
            if (eDS.E02.E02_18.length != 0)
            {
                v2XML.writeElementString("E02_18", eDS.E02.E02_18);
            }
        };
        if (typeof eDS.E02.E02_19 != 'undefined')
        {
            if (eDS.E02.E02_19.length != 0)
            {
                v2XML.writeElementString("E02_19", eDS.E02.E02_19);
            }
        };
        if (typeof eDS.E02.E02_20 != 'undefined')
        {
            if (eDS.E02.E02_20.length != 0)
            {
                v2XML.writeElementString("E02_20", eDS.E02.E02_20);
            }
        };

        v2XML.writeEndElement("E02");
        ////////////////////////////////////////////////////
    };
    
    
    if (typeof eDS.E03 != 'undefined') {
        v2XML.writeStartElement("E03");       
        if (typeof eDS.E03.E03_01 != 'undefined')         {
            if (IsOk(eDS.E03.E03_01)==true) 
            {
                v2XML.writeElementString("E03_01", eDS.E03.E03_01);
            }
        };
        if (typeof eDS.E03.E03_02 != 'undefined')         {
            if (IsOk(eDS.E03.E03_02)==true) 
            {
                v2XML.writeElementString("E03_02", eDS.E03.E03_02);
            }
        };
        if (typeof eDS.E03.E03_03 != 'undefined')         {
            if (IsOk(eDS.E03.E03_03)==true) 
            {
                v2XML.writeElementString("E03_03", this.escapeXml(eDS.E03.E03_03));
            }
        };
        v2XML.writeEndElement("E03");
    };

    
    if (typeof eDS.E04 != 'undefined') {

        for (var x = 0; x < eDS.E04.length; x++) {
            v2XML.writeStartElement("E04");
            
            if (typeof eDS.E04[x].E04_01 != 'undefined') {
                if (IsOk(eDS.E04[x].E04_01)==true) {
                    v2XML.writeElementString("E04_01", this.escapeXml(eDS.E04[x].E04_01));
                }
            };
            if (typeof eDS.E04[x].E04_02 != 'undefined') {
                if (IsOk(eDS.E04[x].E04_02)==true) {
                    v2XML.writeElementString("E04_02", eDS.E04[x].E04_02);
                }
            };
            if (typeof eDS.E04[x].E04_03 != 'undefined') {
                if (IsOk(eDS.E04[x].E04_03)==true) {
                    v2XML.writeElementString("E04_03", eDS.E04[x].E04_03)
                }
            };
          
            v2XML.writeEndElement("E04");
        }        
    };    
    
    if (typeof eDS.E05 != 'undefined') 
    {
        v2XML.writeStartElement("E05");
        if (typeof eDS.E05.E05_01 != 'undefined') {
            if (IsOk(eDS.E05.E05_01)==true) {
                v2XML.writeElementString("E05_01", eDS.E05.E05_01)
            }
        };
        if (typeof eDS.E05.E05_02 != 'undefined')
        {
            if (IsOk(eDS.E05.E05_02) == true)
            {
                v2XML.writeElementString("E05_02", eDS.E05.E05_02)
            }
            else
            {
                v2XML.writeStartElement('E05_02');
                v2XML.writeAttributeString('xsi:nil', 'true');
                v2XML.writeEndElement();
            }
        };
        if (typeof eDS.E05.E05_03 != 'undefined') {
            if (IsOk(eDS.E05.E05_03)==true) 
            {
                v2XML.writeElementString("E05_03", eDS.E05.E05_03)
            }    
        };
        if (typeof eDS.E05.E05_04 != 'undefined') {
            if (IsOk(eDS.E05.E05_04)==true) {
                v2XML.writeElementString("E05_04", eDS.E05.E05_04)
            }
            else
            {
                v2XML.writeStartElement('E05_04');
                v2XML.writeAttributeString('xsi:nil', 'true');
                v2XML.writeEndElement();
            }

        };
        if (typeof eDS.E05.E05_05 != 'undefined') {
            if (IsOk(eDS.E05.E05_05)==true) {
                v2XML.writeElementString("E05_05", eDS.E05.E05_05)
            }
            else
            {
                v2XML.writeStartElement('E05_05');
                v2XML.writeAttributeString('xsi:nil', 'true');
                v2XML.writeEndElement();
            }

        };
        if (typeof eDS.E05.E05_06 != 'undefined') {
            if (IsOk(eDS.E05.E05_06)==true) {
                v2XML.writeElementString("E05_06", eDS.E05.E05_06)
            }
            else
            {
                v2XML.writeStartElement('E05_06');
                v2XML.writeAttributeString('xsi:nil', 'true');
                v2XML.writeEndElement();
            }

        };
        if (typeof eDS.E05.E05_07 != 'undefined') {
            if (IsOk(eDS.E05.E05_07)==true) {
                v2XML.writeElementString("E05_07", eDS.E05.E05_07)
            }
            else
            {
                v2XML.writeStartElement('E05_07');
                v2XML.writeAttributeString('xsi:nil', 'true');
                v2XML.writeEndElement();
            }

        };
        if (typeof eDS.E05.E05_08 != 'undefined') {
            if (IsOk(eDS.E05.E05_08)==true) {
                v2XML.writeElementString("E05_08", eDS.E05.E05_08)
            }
            else
            {
                v2XML.writeStartElement('E05_08');
                v2XML.writeAttributeString('xsi:nil', 'true');
                v2XML.writeEndElement();
            }

        };
        if (typeof eDS.E05.E05_09 != 'undefined') {
            if (IsOk(eDS.E05.E05_09)==true) {
                v2XML.writeElementString("E05_09", eDS.E05.E05_09)
            }
            else
            {
                v2XML.writeStartElement('E05_09');
                v2XML.writeAttributeString('xsi:nil', 'true');
                v2XML.writeEndElement();
            }
        };

        if (typeof eDS.E05.E05_10 != 'undefined') {
            if (IsOk(eDS.E05.E05_10)==true) {
                v2XML.writeElementString("E05_10", eDS.E05.E05_10)
            }
        };
        if (typeof eDS.E05.E05_11 != 'undefined') {
            if (IsOk(eDS.E05.E05_11)==true) {
                v2XML.writeElementString("E05_11", eDS.E05.E05_11)
            }
            else
            {
                v2XML.writeStartElement('E05_10');
                v2XML.writeAttributeString('xsi:nil', 'true');
                v2XML.writeEndElement();
            }

        };
        if (typeof eDS.E05.E05_12 != 'undefined') {
            if (IsOk(eDS.E05.E05_12)==true) {
                v2XML.writeElementString("E05_12", eDS.E05.E05_12)
            }
            else
            {
                v2XML.writeStartElement('E05_12');
                v2XML.writeAttributeString('xsi:nil', 'true');
                v2XML.writeEndElement();
            }
        };
        if (typeof eDS.E05.E05_13 != 'undefined') 
        {
            if (IsOk(eDS.E05.E05_13) == true) {
                v2XML.writeElementString("E05_13", eDS.E05.E05_13)
            }
            else
            {
                v2XML.writeStartElement('E05_13');
                v2XML.writeAttributeString('xsi:nil', 'true');
                v2XML.writeEndElement();
            }

        };
        v2XML.writeEndElement("E05");
    };
    
    if (typeof eDS.E06 != 'undefined') {
        v2XML.writeStartElement("E06");
        if (typeof eDS.E06.E06_01_0 != 'undefined')
        {
            v2XML.writeStartElement("E06_01_0");

            if (typeof eDS.E06.E06_01_0.E06_01 != 'undefined')
            {
                if (IsOk(eDS.E06.E06_01_0.E06_01) == true)
                {
                    v2XML.writeElementString("E06_01", this.escapeXml(eDS.E06.E06_01_0.E06_01));
                }
            };

            if (typeof eDS.E06.E06_01_0.E06_02 != 'undefined')
            {
                if (IsOk(eDS.E06.E06_01_0.E06_02) == true)
                {
                    v2XML.writeElementString("E06_02", this.escapeXml(eDS.E06.E06_01_0.E06_02));
                }
            };

            if (typeof eDS.E06.E06_01_0.E06_03 != 'undefined')
            {
                if (IsOk(eDS.E06.E06_01_0.E06_03) == true)
                {
                    v2XML.writeElementString("E06_03", this.escapeXml(eDS.E06.E06_01_0.E06_03));
                }
            };
            v2XML.writeEndElement("E06_01_0");
        };

        if (typeof eDS.E06.E06_04_0 != 'undefined')
        {
            v2XML.writeStartElement("E06_04_0");
            if (typeof eDS.E06.E06_04_0.E06_04 != 'undefined')
            {
                if (IsOk(eDS.E06.E06_04_0.E06_04) == true)
                {
                    v2XML.writeElementString("E06_04", this.escapeXml(eDS.E06.E06_04_0.E06_04))
                }
            };
            if (typeof eDS.E06.E06_04_0.E06_05 != 'undefined')
            {
                if (IsOk(eDS.E06.E06_04_0.E06_05) == true)
                {
                    v2XML.writeElementString("E06_05", this.escapeXml(eDS.E06.E06_04_0.E06_05));
                }
            };

            if (typeof eDS.E06.E06_04_0.E06_06 != 'undefined')
            {
                if (IsOk(eDS.E06.E06_04_0.E06_06) == true)
                {
                    v2XML.writeElementString("E06_06", eDS.E06.E06_04_0.E06_06)
                }
            };

            if (typeof eDS.E06.E06_04_0.E06_07 != 'undefined')
            {
                if (IsOk(eDS.E06.E06_04_0.E06_07) == true)
                {
                    v2XML.writeElementString("E06_07", eDS.E06.E06_04_0.E06_07)
                }
            };
            if (typeof eDS.E06.E06_04_0.E06_08 != 'undefined')
            {
                if (IsOk(eDS.E06.E06_04_0.E06_08) == true)
                {
                    v2XML.writeElementString("E06_08", eDS.E06.E06_04_0.E06_08)
                }
            };

            v2XML.writeEndElement("E06_04_0");
        };

        if (typeof eDS.E06.E06_09 != 'undefined') {
            if (IsOk(eDS.E06.E06_09) == true) {
                v2XML.writeElementString("E06_09", eDS.E06.E06_09)
            }
        };

        if (typeof eDS.E06.E06_10 != 'undefined') {
            if (IsOk(eDS.E06.E06_10) == true) {
                v2XML.writeElementString("E06_10", eDS.E06.E06_10)
            }
        };
        if (typeof eDS.E06.E06_11 != 'undefined') {
            if (IsOk(eDS.E06.E06_11) == true) {
                v2XML.writeElementString("E06_11", eDS.E06.E06_11)
            }
        };
        if (typeof eDS.E06.E06_12 != 'undefined') {
            //  for (var i = 0; i < eDS.E06.E06_12.length; i++) {
            if (IsOk(eDS.E06.E06_12) == true) {
                v2XML.writeElementString("E06_12", eDS.E06.E06_12)
                //     }
            }
        };
        if (typeof eDS.E06.E06_13 != 'undefined') {
            if (IsOk(eDS.E06.E06_13) == true) {
                v2XML.writeElementString("E06_13", eDS.E06.E06_13)
            }
        };

        if (typeof eDS.E06.E06_14_0 != 'undefined')
        {

                v2XML.writeStartElement("E06_14_0");
                if (eDS.E06.E06_14_0.E06_14 != 'undefined')
                {
                    if (IsOk(eDS.E06.E06_14_0.E06_14) == true)
                    {
                        v2XML.writeElementString("E06_14", eDS.E06.E06_14_0.E06_14)
                    }
                };
                if (eDS.E06.E06_14_0.E06_15 != 'undefined')
                {
                    if (IsOk(eDS.E06.E06_14_0.E06_15) == true)
                    {
                        v2XML.writeElementString("E06_15", eDS.E06.E06_14_0.E06_15)
                    }
                };
                v2XML.writeEndElement("E06_14_0");
        };

        if (typeof eDS.E06.E06_16 != 'undefined') {
            if (IsOk(eDS.E06.E06_16) == true) {
                v2XML.writeElementString("E06_16", eDS.E06.E06_16)
            }
        };

        if (typeof eDS.E06.E06_17 != 'undefined') {
            if (IsOk(eDS.E06.E06_17) == true) {
                v2XML.writeElementString("E06_17", this.escapeXml(eDS.E06.E06_17));
            }
        };

        if (typeof eDS.E06.E06_19_0 != 'undefined')
        {
            v2XML.writeStartElement("E06_19_0");
            if (typeof eDS.E06.E06_19_0.E06_18 != 'undefined')
            {
                if (IsOk(eDS.E06.E06_19_0.E06_18) == true)
                {
                    v2XML.writeElementString("E06_18", eDS.E06.E06_19_0.E06_18)
                }
            };
            if (typeof eDS.E06.E06_19_0.E06_19 != 'undefined')
            {
                if (IsOk(eDS.E06.E06_19_0.E06_19) == true)
                {
                    v2XML.writeElementString("E06_19", this.escapeXml(eDS.E06.E06_19_0.E06_19));
                }
            };

            v2XML.writeEndElement("E06_19_0");
        };

        v2XML.writeEndElement("E06");
    };
    
    if (typeof eDS.E07 != 'undefined') {
        v2XML.writeStartElement("E07");

        if (typeof eDS.E07.E07_01 != 'undefined') {
            if (IsOk(eDS.E07.E07_01)==true) {
                v2XML.writeElementString("E07_01", eDS.E07.E07_01)
            }
        };
        
        if (typeof eDS.E07.E07_02 != 'undefined') {
            if (IsOk(eDS.E07.E07_02)==true) {
                v2XML.writeElementString("E07_02", eDS.E07.E07_02);
            }
        };
        if (typeof eDS.E07.E07_03_0 != 'undefined')
        {
            for (var i = 0; i < eDS.E07.E07_03_0.length; i++)
            {
                var eObj = {};
                eObj = eDS.E07.E07_03_0[i];
                
                if (typeof eDS.E07.E07_03_0[i] != 'undefined')
                {
                    v2XML.writeStartElement("E07_03_0");
                    {
                        if (IsOk(eObj.E07_03) == true)
                        {
                            v2XML.writeElementString("E07_03", this.escapeXml(eObj.E07_03));
                        }
                    };

                    if (typeof eObj.E07_04 != 'undefined')
                    {
                        if (IsOk(eObj.E07_04) == true)
                        {
                            v2XML.writeElementString("E07_04", eObj.E07_04)
                        }
                    };

                    if (typeof eObj.E07_05_0 != 'undefined')
                    {
                        {
                            v2XML.writeStartElement("E07_05_0");
                            if (typeof eObj.E07_05_0.E07_05 != 'undefined')
                            {
                                if (IsOk(eObj.E07_05_0.E07_05) == true)
                                {
                                    v2XML.writeElementString("E07_05", this.escapeXml(eObj.E07_05_0.E07_05));
                                }
                            };
                            if (typeof eObj.E07_05_0.E07_06 != 'undefined')
                            {
                                if (IsOk(eObj.E07_05_0.E07_06) == true)
                                {
                                    v2XML.writeElementString("E07_06", eObj.E07_05_0.E07_06)
                                }
                            };
                            if (typeof eObj.E07_05_0.E07_07 != 'undefined')
                            {
                                if (IsOk(eObj.E07_05_0.E07_07) == true)
                                {
                                    v2XML.writeElementString("E07_07", eObj.E07_05_0.E07_07)
                                }
                            };
                            if (typeof eObj.E07_08 != 'undefined')
                            {
                                if (IsOk(eObj.E07_05_0.E07_08) == true)
                                {
                                    v2XML.writeElementString("E07_08", eObj.E07_05_0.E07_08)
                                }
                            };

                            v2XML.writeEndElement("E07_05_0");
                        };

                        if (typeof eObj.E07_09 != 'undefined')
                        {
                            if (IsOk(eObj.E07.E07_09) == true)
                            {
                                v2XML.writeElementString("E07_09", this.escapeXml(eObj.E07_09));
                            }
                        };
                        if (typeof eObj.E07_10 != 'undefined')
                        {
                            if (IsOk(eObj.E07.E07_10) == true)
                            {
                                v2XML.writeElementString("E07_10", this.escapeXml(eObj.E07_10));
                            }
                        };

                        if (typeof eObj.E07_11_0 != 'undefined')
                        {
                            {
                                v2XML.writeStartElement("E07_11_0");
                                if (typeof eObj.E07_11_0.E07_11 != 'undefined')
                                {
                                    if (IsOk(eObj.E07_11_0.E07_11) == true)
                                    {
                                        v2XML.writeElementString("E07_11", this.escapeXml(eObj.E07_11_0.E07_11));
                                    }
                                };

                                if (typeof eObj.E07_11_0.E07_12 != 'undefined')
                                {
                                    if (IsOk(eObj.E07_11_0.E07_12) == true)
                                    {
                                        v2XML.writeElementString("E07_12", this.escapeXml(eObj.E07_11_0.E07_12));
                                    }
                                };

                                if (typeof eObj.E07_11_0.E07_13 != 'undefined')
                                {
                                    if (IsOk(eObj.E07_11_0.E07_13) == true)
                                    {
                                        v2XML.writeElementString("E07_13", this.escapeXml(eObj.E07_11_0.E07_13));
                                    }
                                };
                                v2XML.writeEndElement("E07_11_0");
                            }
                        };
                        if (typeof eObj.E07_14 != 'undefined')
                        {
                            if (IsOk(eDS.E07.E07_14) == true)
                            {
                                v2XML.writeElementString("E07_14", eObj.E07_14)
                            }
                        };

                        v2XML.writeEndElement("E07_03_0");
                    }
                }
            }
        };
        
        if (typeof eDS.E07.E07_15 != 'undefined') {
            if (IsOk(eDS.E07.E07_15)==true) {
                v2XML.writeElementString("E07_15", eDS.E07.E07_15)
            }
        };
        if (typeof eDS.E07.E07_16 != 'undefined') {
            if (IsOk(eDS.E07.E07_16)==true) {
                v2XML.writeElementString("E07_16", eDS.E07.E07_16)
            }
        };
        if (typeof eDS.E07.E07_17 != 'undefined') {
            if (IsOk(eDS.E07.E07_17)==true) {
                v2XML.writeElementString("E07_17", eDS.E07.E07_17)
            }
            
        };

        
        if (typeof eDS.E07.E07_18_0 != 'undefined')
        {
            var iobj = eDS.E07.E07_18_0;

            v2XML.writeStartElement("E07_18_0");
            if (typeof iobj.E07_18_1 != 'undefined')
            {
                v2XML.writeStartElement("E07_18_01");

                if (typeof iobj.E07_18_1.E07_18 != 'undefined')
                {
                    if (IsOk(iobj.E07_18_1.E07_18) == true)
                    {
                        v2XML.writeElementString("E07_18", this.escapeXml(iobj.E07_18_1.E07_18));
                    }
                }
                if (typeof iobj.E07_18_1.E07_19 != 'undefined')
                {
                    if (IsOk(iobj.E07_18_1.E07_19) == true)
                    {
                        v2XML.writeElementString("E07_19", this.escapeXml(iobj.E07_18_1.E07_19));
                    }
                };
                if (typeof iobj.E07_18_1.E07_20 != 'undefined')
                {
                    if (IsOk(iobj.E07_18_1.E07_20) == true)
                    {
                        v2XML.writeElementString("E07_20", this.escapeXml(iobj.E07_18_1.E07_20));
                    }
                };
                v2XML.writeEndElement("E07_18_1");
            };

            if (typeof iobj.E07_21_0 != 'undefined')
            {
                v2XML.writeStartElement("E07_21_0");
                if (typeof iobj.E07_21_0.E07_21 != 'undefined')
                {
                    v2XML.writeEndElement("E07_21_0");
                    if (IsOk(iobj.E07_21_0.E07_21) == true)
                    {
                        v2XML.writeElementString("E07_21", this.escapeXml(iobj.E07_21_0.E07_21));
                    }
                };
                if (typeof iobj.E07_21_0.E07_22 != 'undefined')
                {
                    if (IsOk(iobj.E07_21_0.E07_22) == true)
                    {
                        v2XML.writeElementString("E07_22", iobj.E07_21_0.E07_22)
                    }
                };
                if (typeof iobj.E07_21_0.E07_23 != 'undefined')
                {
                    if (IsOk(iobj.E07_21_0.E07_23) == true)
                    {
                        v2XML.writeElementString("E07_23", iobj.E07_21_0.E07_23)
                    }
                };
                if (typeof iobj.E07_21_0.E07_24 != 'undefined')
                {
                    if (IsOk(iobj.E07_21_0.E07_24) == true)
                    {
                        v2XML.writeElementString("E07_24", iobj.E07_21_0.E07_24)
                    }
                }

                v2XML.writeEndElement("E07_21_0");
            };

            if (typeof iobj.E07_25 != 'undefined')
            {
                if (IsOk(iobj.E07_25) == true)
                {
                    v2XML.writeElementString("E07_25", iobj.E07_25)
                }
            };
            if (typeof iobj.E07_26 != 'undefined')
            {
                if (IsOk(iobj.E07_26) == true)
                {
                    v2XML.writeElementString("E07_26", iobj.E07_26)
                }
            };
            v2XML.writeEndElement("E07_18_0");
        };


        if (typeof eDS.E07.E07_27_0 != 'undefined')
        {
            var bObj = eDS.E07.E07_27_0
            v2XML.writeStartElement("E07_27_0");
            if (typeof bObj.E07_27 != 'undefined')
            {
                if (IsOk(bObj.E07_27) == true)
                {
                    v2XML.writeElementString("E07_27", this.escapeXml(bObj.E07_27));
                }
            };

            if (typeof bObj.E07_28_0 != 'undefined')
            {

                v2XML.writeStartElement("E07_28_0");
                if (bObj.E07_28_0.E07_28 != 'undefined')
                {
                    if (IsOk(bObj.E07_28_0.E07_28) == true)
                    {
                        v2XML.writeElementString("E07_28", this.escapeXml(bObj.E07_28_0.E07_28))
                    }
                }

                if (bObj.E07_28_0.E07_29 != 'undefined')
                {
                    if (IsOk(bObj.E07_28_0.E07_29) == true)
                    {
                        v2XML.writeElementString("E07_29", bObj.E07_28_0.E07_29)
                    }
                };

                if (bObj.E07_28_0.E07_30 != 'undefined')
                {
                    if (IsOk(bObj.E07_28_0.E07_30) == true)
                    {
                        v2XML.writeElementString("E07_30", bObj.E07_28_0.E07_30)
                    }
                };

                if (bObj.E07_28_0.E07_31 != 'undefined')
                {
                    if (IsOk(bObj.E07_28_0.E07_31) == true)
                    {
                        v2XML.writeElementString("E07_31", bObj.E07_28_0.E07_31)
                    }
                };

                v2XML.writeEndElement("E07_28_0");
            };
            v2XML.writeEndElement("E07_27_0");

        };

            if (typeof eDS.E07.E07_32 != 'undefined') {
                if (IsOk(eDS.E07.E07_32) == true) {
                    v2XML.writeElementString("E07_32", eDS.E07.E07_32)
                }
            };
            if (typeof eDS.E07.E07_33 != 'undefined') {
                if (IsOk(eDS.E07.E07_33) == true) {
                    v2XML.writeElementString("E07_33", eDS.E07.E07_33)
                }
            };
            if (typeof eDS.E07.E07_34 != 'undefined') {
                if (IsOk(eDS.E07.E07_34) == true) {
                    v2XML.writeElementString("E07_34", eDS.E07.E07_34)
                }
            };
            if (typeof eDS.E07.E07_35_0 != 'undefined')
            {
                v2XML.writeStartElement("E07_35_0");


                for (var i = 0; i < eDS.E07.E07_35_0.length; i++)
                {
                    if (typeof eDS.E07.E07_35_0[i].E07_35 != 'undefined')
                    {
                        if (IsOk(eDS.E07.E07_35_0.E07_35[i].E07_35) == true)
                        {
                            v2XML.writeElementString("E07_35", eDS.E07.E07_35_0[i].E07_35);
                        }
                    }


                    if (typeof eDS.E07.E07_35_0[i].E07_36 != 'undefined')
                    {
                        if (IsOk(eDS.E07.E07_35_0[i].E07_36) == true)
                        {
                            v2XML.writeElementString("E07_36", this.escapeXml(eDS.E07.E07_35_0[i].E07_36));
                        }
                    };
                    v2XML.writeEndElement("E07_37_0");

                }
            };

        if (typeof eDS.E07.E07_37 != 'undefined') {
            for (var i = 0; i < eDS.E07.E07_37.length; i++) {
                if (IsOk(eDS.E07.E07_37[i])==true) {
                    v2XML.writeElementString("E07_37", eDS.E07.E07_37[i])
                }
            }
        };
        
        v2XML.writeEndElement("E07");
        
    };
    
    if (typeof eDS.E08 != 'undefined') {
        v2XML.writeStartElement("E08");
        
        if (typeof eDS.E08.E08_01 != 'undefined') {
            for (var i = 0; i < eDS.E08.E08_01.length; i++) {
                if (IsOk(eDS.E08.E08_01[i])==true) {                
                    v2XML.writeElementString("E08_01", eDS.E08.E08_01[i]);
                }
            }
        };
        if (typeof eDS.E08.E08_02 != 'undefined') {
            for (var i = 0; i < eDS.E08.E08_02.length; i++) {
                if (IsOk(eDS.E08.E08_02[i])==true) {                
                    v2XML.writeElementString("E08_02", eDS.E08.E08_02[i]);
                }
            }
        };
        if (typeof eDS.E08.E08_03 != 'undefined') {
            if (IsOk(eDS.E08.E08_03)==true) {                
                v2XML.writeElementString("E08_03", eDS.E08.E08_03)
            }
        };
        if (typeof eDS.E08.E08_04 != 'undefined') {
            if (IsOk(eDS.E08.E08_04)==true) {                
                v2XML.writeElementString("E08_04", eDS.E08.E08_04)
            }
        };
        if (typeof eDS.E08.E08_05 != 'undefined') {
            if (IsOk(eDS.E08.E08_05)==true) {                
                v2XML.writeElementString("E08_05", eDS.E08.E08_05)
            }
        };
        if (typeof eDS.E08.E08_06 != 'undefined') {
            if (IsOk(eDS.E08.E08_06)==true) {                
                v2XML.writeElementString("E08_06", eDS.E08.E08_06)
            }
        };
        if (typeof eDS.E08.E08_07 != 'undefined')
        {
            if (IsOk(eDS.E08.E08_07)==true) {                
                v2XML.writeElementString("E08_07", eDS.E08.E08_07);
                
            }
        };

        if (typeof eDS.E08.E08_08 != 'undefined') {
            if (IsOk(eDS.E08.E08_08)==true) {                
                v2XML.writeElementString("E08_08", this.escapeXml(eDS.E08.E08_08));
            }
        };
        if (typeof eDS.E08.E08_09 != 'undefined') {
            if (IsOk(eDS.E08.E08_09)==true) {                
                v2XML.writeElementString("E08_09", eDS.E08.E08_09)
            }
        };
        if (typeof eDS.E08.E08_10 != 'undefined') {
            if (IsOk(eDS.E08.E08_10)==true) {                
                v2XML.writeElementString("E08_10", this.escapeXml(eDS.E08.E08_10));
            }
        };
        
        if (typeof eDS.E08.E08_11_0 != 'undefined')
        {
            var obj = eDS.E08.E08_11_0
            v2XML.writeStartElement("E08_11_0");
            if (typeof obj.E08_11 != 'undefined')
            {
                if (obj.E08_11.length != 0)
                {
                    v2XML.writeElementString("E08_11", this.escapeXml(obj.E08_11))
                }
            };
            if (typeof obj.E08_12 != 'undefined')
            {
                if (obj.E08_12.length != 0)
                {
                    v2XML.writeElementString("E08_12", obj.E08_12)
                }
            };
            if (typeof obj.E08_13 != 'undefined')
            {
                if (obj.E08_13.length != 0)
                {
                    v2XML.writeElementString("E08_13", obj.E08_13)
                }
            };
            if (typeof obj.E08_14 != 'undefined')
            {
                if (obj.E08_14.length != 0)
                {
                    v2XML.writeElementString("E08_14", obj.E08_14)
                }
            };
            if (typeof obj.E08_15 != 'undefined')
            {
                if (obj.E08_15.length != 0)
                {
                    v2XML.writeElementString("E08_15", obj.E08_15)
                }
            };
            v2XML.writeEndElement("E08_11_0");
        };
        
        v2XML.writeEndElement("E08");
    };    
    
    
    if (typeof eDS.E09 != 'undefined') {
        v2XML.writeStartElement("E09");

        if (typeof eDS.E09.E09_01 != 'undefined') {            
            for (var i = 0; i < eDS.E09.E09_01.length; i++)
            {
                if (IsOk(eDS.E09.E09_01[i])==true) 
                {
                    v2XML.writeElementString("E09_01", eDS.E09.E09_01[i]);
                }
            }
        };
        
        if (typeof eDS.E09.E09_02 != 'undefined') {
            for (var i = 0; i < eDS.E09.E09_02.length; i++)
            {
                if (IsOk(eDS.E09.E09_02[i]) == true) {
                    v2XML.writeElementString("E09_02", eDS.E09.E09_02[i]);
                }
            }
        };
        
        if (typeof eDS.E09.E09_03 != 'undefined') {
            if (IsOk(eDS.E09.E09_03)==true) {                
                v2XML.writeElementString("E09_03", eDS.E09.E09_03)
            }
        };

        
        if (typeof eDS.E09.E09_04 != 'undefined') {
            if (IsOk(eDS.E09.E09_04)==true) {                
                v2XML.writeElementString("E09_04", eDS.E09.E09_04)
            }
        };

        if (typeof eDS.E09.E09_05 != 'undefined') {
            if (IsOk(eDS.E09.E09_05)==true) {                
                v2XML.writeElementString("E09_05", this.escapeXml(eDS.E09.E09_05));
            }
        };
        if (typeof eDS.E09_06_0 != 'undefined') 
        {
            if (eDS.E09_06_0 == true)
            {
                v2XML.writeStartElement("E09_06_0");
                if (typeof eDS.E09_06_0.E09_06 != 'undefined')
                {
                    if (IsOk(eDS.E09_06_0.E09_06) == true)
                    {
                        v2XML.writeElementString("E09_06", eDS.E09_06_0.E09_06)
                    }
                };
                if (typeof eDS.E09_06_0.E09_07 != 'undefined')
                {
                    if (IsOk(eDS.E09_06_0.E09_07) == true)
                    {
                        v2XML.writeElementString("E09_07", eDS.E09_06_0.E09_07)
                    }
                };
                v2XML.writeEndElement("E09_06_0");
            }
        };

        if (typeof eDS.E09.E09_08 != 'undefined') {
            if (IsOk(eDS.E09.E09_08)==true) {                
                v2XML.writeElementString("E09_08", this.escapeXml(eDS.E09.E09_08))
            }
        };
        if (typeof eDS.E09_09_0 != 'undefined')
        {
            if (typeof eDS.E09_09_0.E09_09 != 'undefined')
            {
                if (IsOk(eDS.E09_09_0.E09_09) == true)
                {
                    v2XML.writeElementString("E09_09", eDS.E09_09_0.E09_09)
                    }
                };
            if (typeof eDS.E09_09_0.E09_10 != 'undefined')
            {
                if (IsOk(eDS.E09_09_0.E09_10) == true)
                {
                    v2XML.writeElementString("E09_10", eDS.E09_09_0.E09_10)
                    }
                };

                v2XML.writeEndElement("E09_09_0");            
        };

        if (typeof eDS.E09.E09_11 != 'undefined') {
            if (IsOk(eDS.E09.E09_11)==true) {                
                v2XML.writeElementString("E09_11", eDS.E09.E09_11)
            }
        };

        if (typeof eDS.E09.E09_12 != 'undefined') {
            if (IsOk(eDS.E09.E09_12)==true) {                
                v2XML.writeElementString("E09_12", eDS.E09.E09_12)
            }
        };

        if (typeof eDS.E09.E09_13 != 'undefined') {
            if (IsOk(eDS.E09.E09_13)==true) {                
                v2XML.writeElementString("E09_13", eDS.E09.E09_13)
            }
        };
        if (typeof eDS.E09.E09_14 != 'undefined') {
            for (var i = 0; i < eDS.E09.E09_14.length; i++) {
                if (IsOk(eDS.E09.E09_14[i])==true) {                
                    v2XML.writeElementString("E09_14", eDS.E09.E09_14[i]);
                }
            }
        };
        if (typeof eDS.E09.E09_15 != 'undefined') {
            if (IsOk(eDS.E09.E09_15)==true) {                
                v2XML.writeElementString("E09_15", eDS.E09.E09_15)
            }
        };
        if (typeof eDS.E09.E09_16 != 'undefined') {
            if (IsOk(eDS.E09.E09_16[0]) == true)
            {
                v2XML.writeElementString("E09_16", eDS.E09.E09_16[0])
            }
        };
        
        v2XML.writeEndElement("E09");
    };
    
    if (typeof eDS.E10 != 'undefined') {
        v2XML.writeStartElement("E10");
        if (typeof eDS.E10.E10_01 != 'undefined')
        {
            if (IsOk(eDS.E10.E10_01) == true)
            {
                v2XML.writeElementString("E10_01", eDS.E10.E10_01);
            }
        };
        if (typeof eDS.E10.E10_02 != 'undefined')
        {
            if (IsOk(eDS.E10.E10_02) == true)
            {
                v2XML.writeElementString("E10_02", eDS.E10.E10_02);
            }
        };

        if (typeof eDS.E10.E10_03 != 'undefined')
        {
            for (var i = 0; i < eDS.E10.E10_03.length; i++)
            {
                if (IsOk(eDS.E10.E10_03[i]) == true)
                {
                    v2XML.writeElementString("E10_03", eDS.E10.E10_03[i]);
                }
            }
        };
        if (typeof eDS.E10.E10_04 != 'undefined')
        {
            for (var i = 0; i < eDS.E10.E10_04.length; i++)
            {
                if (IsOk(eDS.E10.E10_04[i]) == true)
                {
                    v2XML.writeElementString("E10_04", eDS.E10.E10_04[i]);
                }
            }
        };

        if (typeof eDS.E10.E10_05 != 'undefined')
        {
            for (var i = 0; i < eDS.E10.E10_05.length; i++)
            {
                if (IsOk(eDS.E10.E10_05[i]) == true)
                {
                    v2XML.writeElementString("E10_05", eDS.E10.E10_05[i]);
                }
            }
        };
        if (typeof eDS.E10.E10_06_0 != 'undefined') {
            if (eDS.E10.E10_06_0 == true) 
            {
                v2XML.writeStartElement("E10_06_0");
                if (typeof eDS.E10.E10_06 != 'undefined')
                {
                    if (IsOk(eDS.E10.E10_06[i]) == true)
                    {
                        v2XML.writeElementString("E10_06", this.escapeXml(eDS.E10.E10_06));
                    }
                };

                if (typeof eDS.E10.E10_07 != 'undefined')
                {
                    if (IsOk(eDS.E10.E10_07[i]) == true)
                    {
                        v2XML.writeElementString("E10_07", eDS.E10.E10_07);
                    }
                };

                v2XML.writeEndElement("E10_06_0");
            }
        };
        if (typeof eDS.E10.E10_08 != 'undefined')
        {
            for (var i = 0; i < eDS.E10.E10_08.length; i++)
            {
                if (IsOk(eDS.E10.E10_08[i]) == true)
                {
                    v2XML.writeElementString("E10_08", eDS.E10.E10_08[i]);
                }
            }
        };

        if (typeof eDS.E10.E10_09 != 'undefined')
        {
            for (var i = 0; i < eDS.E10.E10_09.length; i++)
            {
                if (IsOk(eDS.E10.E10_09[i]) == true)
                {
                    v2XML.writeElementString("E10_09", eDS.E10.E10_09[i]);
                }
            }
        };

        if (typeof eDS.E10.E10_10 != 'undefined')
        {
            if (IsOk(eDS.E10.E10_10) == true)
            {
                v2XML.writeElementString("E10_10", eDS.E10.E10_10);
            }
        };

        v2XML.writeEndElement("E10");
    };
    
        if (typeof eDS.E11 != 'undefined')
        {
        v2XML.writeStartElement("E11");
        
        if (typeof eDS.E11.E11_01 != 'undefined') {
            if (IsOk(eDS.E11.E11_01)==true) {                
                v2XML.writeElementString("E11_01", eDS.E11.E11_01)
            }
        };

        if (typeof eDS.E11.E11_02 != 'undefined') {
            if (IsOk(eDS.E11.E11_02)==true) {
                v2XML.writeElementString("E11_02", eDS.E11.E11_02)
            }
        };

        if (typeof eDS.E11.E11_03 != 'undefined') {
            for (var i = 0; i < eDS.E11.E11_03.length; i++) {
                if (IsOk(eDS.E11.E11_03[i])==true) {                
                    v2XML.writeElementString("E11_03", eDS.E11.E11_03[i]);
                }
            }
        };
            
        if (typeof eDS.E11.E11_04 != 'undefined') {
            if (IsOk(eDS.E11.E11_04)==true) {                
                v2XML.writeElementString("E11_04", eDS.E11.E11_04)
            }
        };
        if (typeof eDS.E11.E11_05 != 'undefined') {
            if (IsOk(eDS.E11.E11_05)==true) 
            {                
                v2XML.writeElementString("E11_05", eDS.E11.E11_05)
            }
        };
        if (typeof eDS.E11.E11_06 != 'undefined') {
            if (IsOk(eDS.E11.E11_06)==true) {                
                v2XML.writeElementString("E11_06", eDS.E11.E11_06)
            }
        };
        if (typeof eDS.E11.E11_07 != 'undefined') {
            if (IsOk(eDS.E11.E11_07)==true) {                
                v2XML.writeElementString("E11_07", eDS.E11.E11_07)
            }
        };
        if (typeof eDS.E11.E11_08 != 'undefined') {
            if (IsOk(eDS.E11.E11_08)==true) {                
                v2XML.writeElementString("E11_08", eDS.E11.E11_08)
            }
        };
        if (typeof eDS.E11.E11_09 != 'undefined') {
            if (IsOk(eDS.E11.E11_09)==true) {                
                v2XML.writeElementString("E11_09", eDS.E11.E11_09)
            }
        };
        if (typeof eDS.E11.E11_10 != 'undefined') {
            if (eDS.E11.E11_10.length != 0) {
                v2XML.writeElementString("E11_10", eDS.E11.E11_10)
            }
        };
        
        if (typeof eDS.E11.E11_11 != 'undefined') {
            for (var i = 0; i < eDS.E11.E11_11.length; i++)
            {
                if (IsOk(eDS.E11.E11_11[i]) == true)
                {
                    v2XML.writeElementString("E11_11", eDS.E11.E11_11[i]);
                }
            }
        };
        
        v2XML.writeEndElement("E11");
    };
    
        if (typeof eDS.E12 != 'undefined')
        {
            
            v2XML.writeStartElement("E12");
        
            if (typeof eDS.E12.E12_01 != 'undefined')
            {
                for (var i = 0; i < eDS.E12.E12_01.length; i++) 
                {
                    if (IsOk(eDS.E12.E12_01[i]) == true)
                    {
                        v2XML.writeElementString("E12_01", eDS.E12.E12_01[i]);
                    }
                }
            };
            
            if (typeof eDS.E12.E12_02 != 'undefined') 
            {
                if (IsOk(eDS.E12.E12_02)==true) {
                    v2XML.writeElementString("E12_02", this.escapeXml(eDS.E12.E12_02));
                }
            };
            
            if (typeof eDS.E12.E12_03 != 'undefined') 
            {
                if (IsOk(eDS.E12.E12_03)==true) {
                    v2XML.writeElementString("E12_03", this.escapeXml(eDS.E12.E12_03));
                }
            };

            
            if (typeof eDS.E12.E12_4_0 != 'undefined')
            {
                    v2XML.writeStartElement("E12_4_0");
                    if (typeof eDS.E12.E12_4_0.E12_04 != 'undefined')
                    {
                        if (IsOk(eDS.E12.E12_4_0.E12_04) == true)
                        {
                            v2XML.writeElementString("E12_04", this.escapeXml(eDS.E12.E12_4_0.E12_04))
                        }
                    };

                    if (typeof eDS.E12.E12_4_0.E12_05 != 'undefined')
                    {
                        if (IsOk(eDS.E12.E12_4_0.E12_05) == true)
                        {
                            v2XML.writeElementString("E12_05", this.escapeXml(eDS.E12.E12_4_0.E12_05));
                        }
                    };
                    if (typeof eDS.E12.E12_4_0.E12_06 != 'undefined')
                    {
                        if (IsOk(eDS.E12.E12_4_0.E12_06) == true)
                        {
                            v2XML.writeElementString("E12_06", this.escapeXml(eDS.E12.E12_4_0.E12_06));
                        }
                    };
                    v2XML.writeEndElement("E12_4_0");

            };
            
            if (typeof eDS.E12.E12_07 != 'undefined') {
                for (var i = 0; i < eDS.E12.E12_07.length; i++) {
                    if (IsOk(eDS.E12.E12_07[i]) == true) {
                        v2XML.writeElementString("E12_07", eDS.E12.E12_07[i]);
                    }
                }
            };

            if (typeof eDS.E12.E12_08 != 'undefined') {
                for (var i = 0; i < eDS.E12.E12_08.length; i++) {
                    if (IsOk(eDS.E12.E12_08[i]) == true) {
                        v2XML.writeElementString("E12_08", eDS.E12.E12_08[i]);
                    }
                }
            };
            if (typeof eDS.E12.E12_09 != 'undefined') {
                for (var i = 0; i < eDS.E12.E12_09.length; i++) {
                    if (IsOk(eDS.E12.E12_09[i]) == true) {
                        v2XML.writeElementString("E12_09", eDS.E12.E12_09[i]);
                    }
                }
            };
            if (typeof eDS.E12.E12_10 != 'undefined') {
                for (var i = 0; i < eDS.E12.E12_10.length; i++) {
                    if (IsOk(eDS.E12.E12_10[i]) == true) {
                        v2XML.writeElementString("E12_10", eDS.E12.E12_10[i]);
                    }
                }
            };
            if (typeof eDS.E12.E12_11 != 'undefined') {
                if (IsOk(eDS.E12.E12_11) == true) {
                    v2XML.writeElementString("E12_11", eDS.E12.E12_11)
                }
            };

            if (typeof eDS.E12.E12_12_0 != 'undefined')
            {
                for (var x = 0; x< eDS.E12.E12_12_0.length; x++) {

                    if (typeof eDS.E12.E12_12_0[x].E12_12 != 'undefined') 
                    {
                        v2XML.writeStartElement("E12_12_0");
                        if (typeof eDS.E12.E12_12_0[x].E12_12 != 'undefined') {

                            if (IsOk(eDS.E12.E12_12_0[x].E12_12) == true) {
                                v2XML.writeElementString("E12_12", eDS.E12.E12_12_0[x].E12_12);
                            }
                        };

                        if (typeof eDS.E12.E12_12_0[x].E12_13 != 'undefined') {
                            v2XML.writeElementString("E12_13", eDS.E12.E12_12_0[x].E12_13)
                        };
                        v2XML.writeEndElement("E12_12_0");
                    }
                }
            };
            
            if (typeof eDS.E13 != 'undefined')
            {
                v2XML.writeStartElement("E13");

                if (typeof eDS.E13.E13_01 != 'undefined') {

                    if (IsOk(eDS.E13.E13_01) == true) {
                        v2XML.writeElementString("E13_01", this.escapeXml(eDS.E13.E13_01));
                    }

                };

                v2XML.writeEndElement("E13");
            }
            if (typeof eDS.E12.E12_14_0 != 'undefined')
            {
                if (eDS.E12.E12_14_0.length > 0)
                {
                    for (var x = 0; x< eDS.E12.E12_14_0.length; x++) {
                        v2XML.writeStartElement("E12_14_0");
                        if (typeof eDS.E12.E12_14_0[x].E12_14 != 'undefined') {

                            if (IsOk(eDS.E12.E12_14_0[x].E12_14) == true) {
                                v2XML.writeElementString("E12_14", eDS.E12.E12_14_0[x].E12_14);
                            }

                        };
                        if (typeof eDS.E12.E12_14_0[x].E12_15_0 != 'undefined') {

                                v2XML.writeStartElement("E12_15_0");
                                if (typeof eDS.E12.E12_14_0[x].E12_15_0.E12_15 != 'undefined') {
                                    if (IsOk(eDS.E12.E12_14_0[x].E12_15_0.E12_15) == true) {
                                        v2XML.writeElementString("E12_15", eDS.E12.E12_14_0[x].E12_15_0.E12_15)
                                    }
                                };

                                if (typeof eDS.E12.E12_14_0[x].E12_15_0.E12_16 != 'undefined') {
                                    if (IsOk(eDS.E12.E12_14_0[x].E12_15_0.E12_16) == true) {
                                        v2XML.writeElementString("E12_16", eDS.E12.E12_14_0[x].E12_15_0.E12_16)
                                    }
                                }
                                v2XML.writeEndElement("E12_15_0");

                            };
                            if (typeof eDS.E12.E12_14_0[x].E12_17 != 'undefined') {
                                if (IsOk(eDS.E12.E12_14_0[x].E12_17) == true) {
                                    v2XML.writeElementString("E12_17", eDS.E12.E12_14_0[x].E12_17)
                                }
                            };                        
                            v2XML.writeEndElement("E12_14_0");

                    }
                }
            }
        //};
            
        if (typeof eDS.E12.E12_18 != 'undefined') {
            if (IsOk(eDS.E12.E12_18)==true) {
                v2XML.writeElementString("E12_18", eDS.E12.E12_18)
            }
        };

        if (typeof eDS.E12.E12_19 != 'undefined') {
            for (var i = 0; i < eDS.E12.E12_19.length; i++) {
                if (IsOk(eDS.E12.E12_19[i])==true) {
                    v2XML.writeElementString("E12_19", eDS.E12.E12_19[i]);
                }
            }
        };
        if (typeof eDS.E12.E12_20 != 'undefined') {
            if (IsOk(eDS.E12.E12_20)==true) {
                v2XML.writeElementString("E12_20", eDS.E12.E12_20)
            }
        };      
        
        v2XML.writeEndElement("E12");
        
    };
    
/*
    
    if (typeof eDS.E13 != 'undefined') {
        v2XML.writeStartElement("E13");

        if (typeof eDS.E13.E13_01 != 'undefined') {
            if (IsOk(eDS.E13.E13_01) == true) {
                v2XML.writeElementString("E13_01", eDS.E13.E13_01)
            }
        };

        v2XML.writeEndElement("E13");
    };
    */

    if (typeof eDS.E14 != 'undefined') {
        for (var x = 0; x < eDS.E14.length; x++) {
            v2XML.writeStartElement("E14");
            if (typeof eDS.E14[x].E14_01 != 'undefined') {
                if (IsOk(eDS.E14[x].E14_01) == true) {
                    v2XML.writeElementString("E14_01", eDS.E14[x].E14_01)
                }
            };
            if (typeof eDS.E14[x].E14_02 != 'undefined') {
                if (IsOk(eDS.E14[x].E14_02) == true) {
                    v2XML.writeElementString("E14_02", eDS.E14[x].E14_02)
                }
            };
            if (typeof eDS.E14[x].E14_03 != 'undefined') {
                for (var i = 0; i < eDS.E14[x].E14_03.length; i++) {
                    if (IsOk(eDS.E14[x].E14_03[i]) == true) {
                        v2XML.writeElementString("E14_03", eDS.E14[x].E14_03[i]);
                    }
                }
            };

            if (typeof eDS.E14[x].E14_04_0 != 'undefined') {
                if (eDS.E14[x].E14_04_0 == true) {
                    v2XML.writeStartElement("E14_04_0");

                    if (typeof eDS.E14[x].E14_04 != 'undefined') {
                        if (IsOk(eDS.E14[x].E14_04) == true) {
                            v2XML.writeElementString("E14_04", eDS.E14[x].E14_04)
                        }
                    };
                    if (typeof eDS.E14[x].E14_05 != 'undefined') {
                        if (IsOk(eDS.E14[x].E14_05) == true) {
                            v2XML.writeElementString("E14_05", eDS.E14[x].E14_05)
                        }
                    };
                    if (typeof eDS.E14[x].E14_06 != 'undefined') {
                        if (IsOk(eDS.E14[x].E14_06) == true) {
                            v2XML.writeElementString("E14_06", eDS.E14[x].E14_06)
                        }
                    };
                    v2XML.writeEndElement("E14_04_0");
                }
            };

            if (typeof eDS.E14[x].E14_07 != 'undefined') {
                if (IsOk(eDS.E14[x].E14_07) == true) {
                    v2XML.writeElementString("E14_07", eDS.E14[x].E14_07)
                }
            };
            if (typeof eDS.E14[x].E14_08 != 'undefined') {
                if (IsOk(eDS.E14[x].E14_08) == true) {
                    v2XML.writeElementString("E14_08", eDS.E14[x].E14_08)
                }
            };
            if (typeof eDS.E14[x].E14_09 != 'undefined') {
                if (IsOk(eDS.E14[x].E14_09) == true) {
                    v2XML.writeElementString("E14_09", eDS.E14[x].E14_09)
                }
            };
            if (typeof eDS.E14[x].E14_10 != 'undefined') {
                if (IsOk(eDS.E14[x].E14_10) == true) {
                    v2XML.writeElementString("E14_10", eDS.E14[x].E14_10)
                }
            };
            if (typeof eDS.E14[x].E14_11 != 'undefined') {
                if (IsOk(eDS.E14[x].E14_11) == true) {
                    v2XML.writeElementString("E14_11", eDS.E14[x].E14_11)
                }
            };
            if (typeof eDS.E14[x].E14_12 != 'undefined') {
                if (IsOk(eDS.E14[x].E14_12) == true) {
                    v2XML.writeElementString("E14_12", eDS.E14[x].E14_12)
                }
            };
            if (typeof eDS.E14[x].E14_13 != 'undefined') {
                if (IsOk(eDS.E14[x].E14_13) == true) {
                    v2XML.writeElementString("E14_13", eDS.E14[x].E14_13)
                }
            };
            if (typeof eDS.E14[x].E14_14 != 'undefined') {
                if (IsOk(eDS.E14[x].E14_14) == true) {
                    v2XML.writeElementString("E14_14", eDS.E14[x].E14_14)
                }
            };

            if (typeof eDS.E14[x].E14_15_0 != 'undefined') {
                if (eDS.E14[x].E14_15_0 == true) {

                    v2XML.writeStartElement("E14_15_0");
                    if (typeof eDS.E14[x].E14_15 != 'undefined') {
                        if (IsOk(eDS.E14[x].E14_15) == true) {
                            v2XML.writeElementString("E14_15", eDS.E14[x].E14_15)
                        }
                    };

                    if (typeof eDS.E14[x].E14_16 != 'undefined') {
                        if (IsOk(eDS.E14[x].E14_16) == true) {
                            v2XML.writeElementString("E14_16", eDS.E14[x].E14_16)
                        }
                    };

                    if (typeof eDS.E14[x].E14_17 != 'undefined') {
                        if (IsOk(eDS.E14[x].E14_17) == true) {
                            v2XML.writeElementString("E14_17", eDS.E14[x].E14_17)
                        }
                    };

                    if (typeof eDS.E14[x].E14_18 != 'undefined') {
                        if (IsOk(eDS.E14[x].E14_18) == true) {
                            v2XML.writeElementString("E14_18", eDS.E14[x].E14_18)
                        }
                    };

                    v2XML.writeEndElement("E14_15_0");
                }
            }
            if (typeof eDS.E14[x].E14_19 != 'undefined') {
                if (IsOk(eDS.E14[x].E14_19) == true) {
                    v2XML.writeElementString("E14_19", eDS.E14[x].E14_19)
                }
            };
            if (typeof eDS.E14[x].E14_20_0 != 'undefined') {
                if (eDS.E14[x].E14_20_0 == true) {

                    v2XML.writeStartElement("E14_20_0");
                    if (typeof eDS.E14[x].E14_20 != 'undefined') {
                        if (IsOk(eDS.E14[x].E14_20) == true) {
                            v2XML.writeElementString("E14_20", eDS.E14[x].E14_19)
                        }
                    };

                    if (typeof eDS.E14[x].E14_21 != 'undefined') {
                        if (IsOk(eDS.E14[x].E14_21) == true) {
                            v2XML.writeElementString("E14_21", eDS.E14[x].E14_21)
                        }
                    };
                    v2XML.writeEndElement("E14_20_0");
                }
            }

            if (typeof eDS.E14[x].E14_22 != 'undefined') {
                if (IsOk(eDS.E14[x].E14_22) == true) {
                    v2XML.writeElementString("E14_22", eDS.E14[x].E14_22)
                }
            };
            if (typeof eDS.E14[x].E14_23 != 'undefined') {
                if (IsOk(eDS.E14[x].E14_23) == true) {
                    v2XML.writeElementString("E14_23", eDS.E14[x].E14_23)
                }
            };
            if (typeof eDS.E14[x].E14_24 != 'undefined') {
                if (IsOk(eDS.E14[x].E14_24) == true) {
                    v2XML.writeElementString("E14_24", eDS.E14[x].E14_24)
                }
            };
            if (typeof eDS.E14[x].E14_25 != 'undefined') {
                if (IsOk(eDS.E14[x].E14_25) == true) {
                    v2XML.writeElementString("E14_25", eDS.E14[x].E14_25)
                }
            };
            if (typeof eDS.E14[x].E14_26 != 'undefined') {
                if (IsOk(eDS.E14[x].E14_26) == true) {
                    v2XML.writeElementString("E14_26", eDS.E14[x].E14_26)
                }
            };
            if (typeof eDS.E14[x].E14_27 != 'undefined') {
                if (IsOk(eDS.E14[x].E14_27) == true) {
                    v2XML.writeElementString("E14_27", eDS.E14[x].E14_27)
                }
            };

            if (typeof eDS.E14[x].E14_28 != 'undefined') {
                if (IsOk(eDS.E14[x].E14_28) == true) {
                    v2XML.writeElementString("E14_28", eDS.E14[x].E14_28)
                }
            };
            v2XML.writeEndElement("E14");
        }
    };
    
    
    if (typeof eDS.E15 != 'undefined')
    {
        v2XML.writeStartElement("E15");
        if (typeof eDS.E15.E15_01 != 'undefined') {            
            if (IsOk(eDS.E15.E15_01)==true) {
                v2XML.writeElementString("E15_01", eDS.E15.E15_01);            
            }
        };

        if (typeof eDS.E15.E15_02 != 'undefined') {
            if (IsOk(eDS.E15.E15_02)==true) {
                v2XML.writeElementString("E15_02", eDS.E15.E15_02);            
            }
        };

        if (typeof eDS.E15.E15_03 != 'undefined') {
            if (IsOk(eDS.E15.E15_03)==true) {
                v2XML.writeElementString("E15_03", eDS.E15.E15_03);
            }
        };
        if (typeof eDS.E15.E15_04 != 'undefined') {
            if (IsOk(eDS.E15.E15_04)==true) {
                v2XML.writeElementString("E15_04", eDS.E15.E15_04);
            }
        };
        if (typeof eDS.E15.E15_05 != 'undefined') {
            if (IsOk(eDS.E15.E15_05)==true) {
                v2XML.writeElementString("E15_05", eDS.E15.E15_05);
            }
        };
        if (typeof eDS.E15.E15_06 != 'undefined') {
            if (IsOk(eDS.E15.E15_06)==true) {
                v2XML.writeElementString("E15_06", eDS.E15.E15_06);
            }
        };
        if (typeof eDS.E15.E15_07 != 'undefined') {
            if (IsOk(eDS.E15.E15_07)==true) {
                v2XML.writeElementString("E15_07", eDS.E15.E15_07);
            }
        };
        if (typeof eDS.E15.E15_08 != 'undefined') {
            if (IsOk(eDS.E15.E15_08)==true) {
                v2XML.writeElementString("E15_08", eDS.E15.E15_08);
            }
        };
        if (typeof eDS.E15.E15_09 != 'undefined') {
            if (IsOk(eDS.E15.E15_09)==true) {
                v2XML.writeElementString("E15_09", eDS.E15.E15_09);
            }
        };
        if (typeof eDS.E15.E15_10 != 'undefined') {
            if (IsOk(eDS.E15.E15_10)==true) {
                v2XML.writeElementString("E15_10", eDS.E15.E15_10);
            }
        };
        if (typeof eDS.E15.E15_11 != 'undefined') {
            if (IsOk(eDS.E15.E15_11)==true) {
                v2XML.writeElementString("E15_11", eDS.E15.E15_11);
            }
        };
        
        v2XML.writeEndElement("E15");
    };
    
    if (typeof eDS.E16 != 'undefined') {
        v2XML.writeStartElement("E16");
        
        if (typeof eDS.E16.E16_01 != 'undefined')
        {
            if (IsOk(eDS.E16.E16_01)==true) {
                v2XML.writeElementString("E16_01", eDS.E16.E16_01)
            }
        };
        
        if (typeof eDS.E16.E16_02 != 'undefined')
        {
            if (IsOk(eDS.E16.E16_02)==true) {
                v2XML.writeElementString("E16_02", eDS.E16.E16_02)
            }
        };
        
        if (typeof eDS.E16.E16_00_0 != 'undefined') {
            for (var i = 0; i < eDS.E16.E16_00_0.length; i++) {
                var obj = {};
                obj = eDS.E16.E16_00_0[i];
                v2XML.writeStartElement("E16_00_0");

                if (typeof obj.E16_03 != 'undefined') {
                    if (IsOk(obj.E16_03) == true) {
                        v2XML.writeElementString("E16_03", obj.E16_03)
                    }
                };
                if (typeof obj.E16_04 != 'undefined') {
                    for (var x = 0; x < obj.E16_04.length; x++) {
                        if (IsOk(obj.E16_04[i]) == true) {
                            v2XML.writeElementString("E16_04", obj.E16_04[x])
                        }
                    }
                };
                if (typeof obj.E16_05 != 'undefined') {
                    for (var x = 0; x < obj.E16_05.length; x++) {
                        if (IsOk(obj.E16_05[i]) == true) {
                            v2XML.writeElementString("E16_05", obj.E16_05[x])
                        }
                    }
                };
                if (typeof obj.E16_06 != 'undefined') {
                    for (var x = 0; x < obj.E16_06.length; x++) {
                        if (IsOk(obj.E16_06[i]) == true) {
                            v2XML.writeElementString("E16_06", obj.E16_06[x])
                        }
                    }
                };
                if (typeof obj.E16_07 != 'undefined') {
                    for (var x = 0; x < obj.E16_07.length; x++) {
                        if (IsOk(obj.E16_07[i]) == true) {
                            v2XML.writeElementString("E16_07", obj.E16_07[x])
                        }
                    }
                };
                if (typeof obj.E16_08 != 'undefined') {
                    for (var x = 0; x < obj.E16_08.length; x++) {
                        if (IsOk(obj.E16_08[i]) == true) {
                            v2XML.writeElementString("E16_08", obj.E16_08[x])
                        }
                    }
                };
                if (typeof obj.E16_09 != 'undefined') {
                    for (var x = 0; x < obj.E16_09.length; x++) {
                        if (IsOk(obj.E16_09[i]) == true) {
                            v2XML.writeElementString("E16_09", obj.E16_09[x])
                        }
                    }
                };

                if (typeof obj.E16_10 != 'undefined') {
                    for (var x = 0; x < obj.E16_10.length; x++) {
                        if (IsOk(obj.E16_10[i]) == true) {
                            v2XML.writeElementString("E16_10", obj.E16_10[x])
                        }
                    }
                };

                if (typeof obj.E16_11 != 'undefined') {
                    for (var x = 0; x < obj.E16_11.length; x++) {
                        if (IsOk(obj.E16_11[i]) == true) {
                            v2XML.writeElementString("E16_11", obj.E16_11[x])
                        }
                    }
                };
                if (typeof obj.E16_12 != 'undefined') {
                    for (var x = 0; x < obj.E16_12.length; x++) {
                        if (IsOk(obj.E16_12[i]) == true) {
                            v2XML.writeElementString("E16_12", obj.E16_12[x])
                        }
                    }
                };
                if (typeof obj.E16_13 != 'undefined') {
                    for (var x = 0; x < obj.E16_13.length; x++) {
                        if (IsOk(obj.E16_13[i]) == true) {
                            v2XML.writeElementString("E16_13", obj.E16_13[x])
                        }
                    }
                };
                if (typeof obj.E16_14 != 'undefined') {
                    for (var x = 0; x < obj.E16_14.length; x++) {
                        if (IsOk(obj.E16_14[i]) == true) {
                            v2XML.writeElementString("E16_14", obj.E16_14[x])
                        }
                    }
                };
                if (typeof obj.E16_15 != 'undefined') {
                    for (var x = 0; x < obj.E16_15.length; x++) {
                        if (IsOk(obj.E16_15[i]) == true) {
                            v2XML.writeElementString("E16_15", obj.E16_15[x])
                        }
                    }
                };
                if (typeof obj.E16_16 != 'undefined') {
                    for (var x = 0; x < obj.E16_16.length; x++) {
                        if (IsOk(obj.E16_16[i]) == true) {
                            v2XML.writeElementString("E16_16", obj.E16_16[x])
                        }
                    }
                };
                if (typeof obj.E16_17 != 'undefined') {
                    for (var x = 0; x < obj.E16_17.length; x++) {
                        if (IsOk(obj.E16_17[i]) == true) {
                            v2XML.writeElementString("E16_17", obj.E16_17[x])
                        }
                    }
                };
                if (typeof obj.E16_18 != 'undefined') {
                    for (var x = 0; x < obj.E16_18.length; x++) {
                        if (IsOk(obj.E16_18[i]) == true) {
                            v2XML.writeElementString("E16_18", obj.E16_18[x])
                        }
                    }
                };
                if (typeof obj.E16_19 != 'undefined') {
                    for (var x = 0; x < obj.E16_19.length; x++) {
                        if (IsOk(obj.E16_19[i]) == true) {
                            v2XML.writeElementString("E16_19", obj.E16_19[x])
                        }
                    }
                };
                if (typeof obj.E16_20 != 'undefined') {
                    for (var x = 0; x < obj.E16_20.length; x++) {
                        if (IsOk(obj.E16_20[i]) == true) {
                            v2XML.writeElementString("E16_20", obj.E16_20[x])
                        }
                    }
                };
                if (typeof obj.E16_21 != 'undefined') {
                    for (var x = 0; x < obj.E16_21.length; x++) {
                        if (IsOk(obj.E16_21[i]) == true) {
                            v2XML.writeElementString("E16_21", obj.E16_21[x])
                        }
                    }
                };
                if (typeof obj.E16_22 != 'undefined') {
                    for (var x = 0; x < obj.E16_22.length; x++) {
                        if (IsOk(obj.E16_22[i]) == true) {
                            v2XML.writeElementString("E16_22", obj.E16_22[x])
                        }
                    }
                };
                if (typeof obj.E16_23 != 'undefined') {
                    for (var x = 0; x < obj.E16_23.length; x++) {
                        if (IsOk(obj.E16_23[i]) == true) {
                            v2XML.writeElementString("E16_23", obj.E16_23[x])
                        }
                    }
                };
                if (typeof obj.E16_24 != 'undefined') {
                    for (var x = 0; x < obj.E16_24.length; x++) {
                        if (IsOk(obj.E16_24[i]) == true) {
                            v2XML.writeElementString("E16_24", obj.E16_24[x])
                        }
                    }
                }
                v2XML.writeEndElement("E16_00_0");
            }
        };
        v2XML.writeEndElement("E16");
    };    
    
        
    if (typeof eDS.E17 != 'undefined')
    {
        if (typeof eDS.E17.E17_01 != 'undefined')
        {
            v2XML.writeStartElement("E17");
            for (var i = 0; i < eDS.E17.E17_01.length; i++)
            {
                if (IsOk(eDS.E17.E17_01[i]) == true)
                {
                    v2XML.writeElementString("E17_01", eDS.E17.E17_01[i]);
                }
            };
            v2XML.writeEndElement("E17");
        }
    };

    if (typeof eDS.E18 != 'undefined')
    {
        for (var x = 0; x < eDS.E18.length; x++) {
            var obj = {};
            obj = eDS.E18[x];

            v2XML.writeStartElement("E18");
            if (typeof obj.E18_01 != 'undefined') {
                if (IsOk(obj.E18_01) == true) {
                    v2XML.writeElementString("E18_01", obj.E18_01)
                }
            };

            if (typeof obj.E18_02 != 'undefined') {
                if (IsOk(obj.E18_02) == true) {
                    v2XML.writeElementString("E18_02", obj.E18_02)
                }
            };
            if (typeof obj.E18_03 != 'undefined') {
                if (IsOk(obj.E18_03) == true) {
                    v2XML.writeElementString("E18_03", obj.E18_03)
                }
            };
            if (typeof obj.E18_04 != 'undefined') {
                if (IsOk(obj.E18_04) == true) {
                    v2XML.writeElementString("E18_04", obj.E18_04)
                }
            };

            if (typeof obj.E18_05_0 != 'undefined') {
                var iobj = obj.E18_05_0;
                v2XML.writeStartElement("E18_05_0");
                if (typeof iobj.E18_05 != 'undefined') {
                    if (IsOk(iobj.E18_05) == true) {
                        v2XML.writeElementString("E18_05", iobj.E18_05)
                    }
                };
                if (typeof iobj.E18_06 != 'undefined') {
                    if (IsOk(iobj.E18_06) == true) {
                        v2XML.writeElementString("E18_06", iobj.E18_06)
                    }
                };
                v2XML.writeEndElement("E18_05_0");

            }
        };

        if (typeof obj.E18_07 != 'undefined') {
            if (IsOk(obj.E18_07)==true){
                v2XML.writeElementString("E18_07", obj.E18_07)
            }
        };

        if (typeof obj.E18_08 != 'undefined') {
            for (var i = 0; i < obj.E18_08.length; i++) {
                if (IsOk(obj.E18_08[i])==true)
                {
                    v2XML.writeElementString("E18_08", obj.E18_08[i]);
                }
            }
        };
        if (typeof obj.E18_09 != 'undefined') {
            if (IsOk(obj.E18_09)==true){
                v2XML.writeElementString("E18_09", this.escapeXml(obj.E18_09))
            }
        };
        if (typeof obj.E18_10 != 'undefined') {
            if (IsOk(obj.E18_10)==true)
            {
                v2XML.writeElementString("E18_10", obj.E18_10)
            }
        };
        if (typeof obj.E18_11 != 'undefined') {
            if (IsOk(obj.E18_11)==true)
            {
                v2XML.writeElementString("E18_11", this.escapeXml(obj.E18_11))
            }
        };
        v2XML.writeEndElement("E18");
        
    };


    if (typeof eDS.E19 != 'undefined')
    {
        v2XML.writeStartElement("E19");
        if (typeof eDS.E19.E19_01_0 != 'undefined')
        {
            
            for (var x = 0; x < eDS.E19.E19_01_0.length; x++) 
            {
             
                v2XML.writeStartElement("E19_01_0");
                    
                var eObj = {};
                eObj = eDS.E19.E19_01_0[x];

                if (typeof eObj.E19_01 != 'undefined') {
                    if (IsOk(eObj.E19_01) == true) {
                        v2XML.writeElementString("E19_01", eObj.E19_01)
                    }
                };
                
                if (typeof eObj.E19_02 != 'undefined') {
                    if (IsOk(eObj.E19_02) == true) {
                        v2XML.writeElementString("E19_02", eObj.E19_02)
                    }
                };
                
                if (typeof eObj.E19_03 != 'undefined')
                {
                    if (IsOk(eObj.E19_03) == true) {
                        v2XML.writeElementString("E19_03", this.escapeXml(eObj.E19_03));
                      
                    }
                };
                
                
                if (typeof eObj.E19_04 != 'undefined') {
                    if (IsOk(eObj.E19_04) == true) {
                        v2XML.writeElementString("E19_04", this.escapeXml(eObj.E19_04));
                    }
                };
                
                if (typeof eObj.E19_05 != 'undefined') {
                    if (IsOk(eObj.E19_05) == true) {
                        v2XML.writeElementString("E19_05", this.escapeXml(eObj.E19_05))
                    }
                };
                
                if (typeof eObj.E19_06 != 'undefined') {
                    if (IsOk(eObj.E19_05) == true) {
                        v2XML.writeElementString("E19_06", eObj.E19_06)
                    }
                };
                if (typeof eObj.E19_07 != 'undefined') {
                    for (var i = 0; i < eObj.E19_07.length-1; i++) {
                        if (IsOk(eObj.E19_07[i]) == true) {
                            v2XML.writeElementString("E19_07", eObj.E19_07[i]);
                        }
                    }
                };
                
                if (typeof eObj.E19_08 != 'undefined') {
                    if (IsOk(eObj.E19_08) == true) {
                        v2XML.writeElementString("E19_08", eObj.E19_08)
                    }
                };
                if (typeof eObj.E19_09 != 'undefined') {
                    if (IsOk(eObj.E19_19) == true) {
                        v2XML.writeElementString("E19_09", this.escapeXml(eObj.E19_09));
                    }
                };

                if (typeof eObj.E19_10 != 'undefined') {
                    if (IsOk(eObj.E19_10) == true) {
                        v2XML.writeElementString("E19_10", eObj.E19_10)
                    }
                };
                if (typeof eObj.E19_11 != 'undefined') {
                    if (IsOk(eObj.E19_11) == true) {
                        v2XML.writeElementString("E19_11", this.escapeXml(eObj.E19_11));
                    }
                };
                
                v2XML.writeEndElement("E19_01_0");            
                
            }
        };
        
        if (typeof eDS.E19_12 != 'undefined')
        {
            for (var i = 0; i < eDS.E19_12.length; i++)
            {
                if (IsOk(eDS.E19_12[i]) == true)
                {
                    v2XML.writeElementString("E19_12", eDS.E19_12[i]);
                }
            }
        };
        if (typeof eDS.E19_13 != 'undefined')
        {
            for (var i = 0; i < eDS.E19_13.length; i++)
            {
                if (IsOk(eDS.E19_13[i]) == true)
                {
                    v2XML.writeElementString("E19_13", eDS.E19_13[i]);
                }
            }
        };

        if (typeof eDS.E19_14 != 'undefined')
        {
            for (var i = 0; i < eDS.E19_14.length; i++)
            {
                if (IsOk(eDS.E19_14[i]) == true)
                {
                    v2XML.writeElementString("E19_14", eDS.E19_14[i]);
                }
            }       
        };        
        v2XML.writeEndElement("E19");                    
    };


    if (typeof eDS.E20 != 'undefined') {
        v2XML.writeStartElement("E20");

        if (typeof eDS.E20.E20_01!= 'undefined') {
            if (IsOk(eDS.E20.E20_01) == true) {
                v2XML.writeElementString("E20_01", this.escapeXml(eDS.E20.E20_01));
            }
        };
        if (typeof eDS.E20.E20_02 != 'undefined') {
            if (IsOk(eDS.E20.E20_02) == true) {
                v2XML.writeElementString("E20_02", this.escapeXml(eDS.E20.E20_02));
            }
        };
        if (typeof eDS.E20.E20_03_0 != 'undefined') {
            if (eDS.E20.E20_03_0 == true) {
                v2XML.writeStartElement("E20_03_0");
                if (typeof eDS.E20.E20_03 != 'undefined') {
                    if (IsOk(eDS.E20.E20_03) == true) {
                        v2XML.writeElementString("E20_03", this.escapeXml(eDS.E20.E20_03));
                    }
                };
                if (typeof eDS.E20.E20_04 != 'undefined') {
                    if (IsOk(eDS.E20.E20_04) == true) {
                        v2XML.writeElementString("E20_04", eDS.E20.E20_04)
                    }
                };
                if (typeof eDS.E20.E20_05 != 'undefined') {
                    if (IsOk(eDS.E20.E20_05) == true) {
                        v2XML.writeElementString("E20_05", eDS.E20.E20_05)
                    }
                };
                if (typeof eDS.E20.E20_07 != 'undefined') {
                    if (IsOk(eDS.E20.E20_07) == true) {
                        v2XML.writeElementString("E20_07", this.escapeXml(eDS.E20.E20_07));
                    }
                };
                v2XML.writeEndElement("E20_03_0");
            }
        };

        if (typeof eDS.E20.E20_06 != 'undefined') {
            if (IsOk(eDS.E20.E20_06) == true) {
                v2XML.writeElementString("E20_06", eDS.E20.E20_06)
            }
        };
        if (typeof eDS.E20.E20_08 != 'undefined') {
            if (IsOk(eDS.E20.E20_08) == true) 
            {
                v2XML.writeElementString("E20_08", this.escapeXml(eDS.E20.E20_08));
                //v2XML.writeElementString("E20_08", "CREATE LAT/LON ATTRIBUTES")
            }
        };
        if (typeof eDS.E20.E20_09 != 'undefined') 
        {
            if (IsOk(eDS.E20.E20_00) == true) {
                v2XML.writeElementString("E20_09", eDS.E20.E20_09)
            }
        };
        if (typeof eDS.E20.E20_10 != 'undefined') {
            if (IsOk(eDS.E20.E20_10) == true) {
                v2XML.writeElementString("E20_10", eDS.E20.E20_10)
            }
        };
        if (typeof eDS.E20.E20_11 != 'undefined') {
            if (IsOk(eDS.E20.E20_11) == true) {
                v2XML.writeElementString("E20_11", eDS.E20.E20_11)
            }
        };
        if (typeof eDS.E20.E20_12 != 'undefined') {
            if (IsOk(eDS.E20.E20_12) == true) {
                v2XML.writeElementString("E20_12", eDS.E20.E20_12)
            }
        };
        if (typeof eDS.E20.E20_13 != 'undefined') {
            if (IsOk(eDS.E20.E20_13) == true) {
                v2XML.writeElementString("E20_13", eDS.E20.E20_13)
            }
        };
        if (typeof eDS.E20.E20_14 != 'undefined') {
            if (IsOk(eDS.E20.E20_14) == true) {
                v2XML.writeElementString("E20_14", eDS.E20.E20_14)
            }
        };
        if (typeof eDS.E20.E20_15 != 'undefined') {
            if (IsOk(eDS.E20.E20_15) == true) {
                v2XML.writeElementString("E20_15", eDS.E20.E20_15)
            }
        };
        if (typeof eDS.E20.E20_16 != 'undefined') {
            if (IsOk(eDS.E20.E20_16) == true) {
                v2XML.writeElementString("E20_16", eDS.E20.E20_16)
            }
        }
        if (typeof eDS.E20.E20_17 != 'undefined') {
            if (IsOk(eDS.E20.E20_17) == true) {
                v2XML.writeElementString("E20_17", eDS.E20.E20_17)
            }
        };
        v2XML.writeEndElement("E20");

    };
    
    if (typeof eDS.E21 != 'undefined') {
        for (var x = 0; x < eDS.E21.length; x++)
            var obj = eDS.E21[x];
        v2XML.writeStartElement("E21");

        if (typeof obj.E21_01 != 'undefined') 
        {            
            if (IsOk(obj.E21_01) == true) {
                v2XML.writeElementString("E21_01", obj.E21_01)
            }
        };

        NEIL
        if (typeof obj.E21_02 != 'undefined') {
            for (var i = 0; i < obj.E21_02.length; i++) {
                if (IsOk(obj.E21_02[i]) == true) {
                    v2XML.writeElementString("E21_02", obj.E21_02[i])
                }
            }
        };
        if (typeof obj.E21_03_0 != 'undefined') {
            if (eDS.E21.E21_03_0 == true) {
                v2XML.writeStartElement("E21_03_0");
                if (typeof eDS.E21.E21_03 != 'undefined') {
                    if (IsOk(eDS.E21.E21_03) == true) {
                        v2XML.writeElementString("E21_03", this.escapeXml(eDS.E21.E21_03));
                    }
                };

                if (typeof eDS.E21.E21_04 != 'undefined') {
                    v2XML.writeElementString("E21_04", eDS.E21.E21_04)
                };
                v2XML.writeEndElement("E21_03_0");
            }
        };
        if (typeof eDS.E21.E21_05 != 'undefined') {
            if (IsOk(eDS.E21.E21_05) == true) {
                v2XML.writeElementString("E21_05", eDS.E21.E21_05)
            }
        };
        if (typeof eDS.E21.E21_06 != 'undefined') 
        {
            for (var i = 0; i < eDS.E21.E21_06.length; i++)
            {
                if (IsOk(eDS.E21.E21_06[i]) == true)
                {
                    v2XML.writeElementString("E21_06", eDS.E21.E21_06)
                }
            }
        };

        if (typeof eDS.E21.E21_07 != 'undefined') {
            if (IsOk(eDS.E21.E21_07) == true) {
                v2XML.writeElementString("E21_07", eDS.E21.E21_07)
            }
        };

        if (typeof eDS.E21.E21_08 != 'undefined') {
            if (IsOk(eDS.E21.E21_08) == true) {
                v2XML.writeElementString("E21_08", this.escapeXml(eDS.E21.E21_08));
            }
        };

        if (typeof eDS.E21.E21_09 != 'undefined') {
            if (IsOk(eDS.E21.E21_09) == true) {
                v2XML.writeElementString("E21_09", eDS.E21.E21_09)
            }
        };

        if (typeof eDS.E21.E21_10 != 'undefined') {
            if (IsOk(eDS.E21.E21_10) == true) {
                v2XML.writeElementString("E21_10", eDS.E21.E21_10)
            }
        };

        if (typeof eDS.E21.E21_11 != 'undefined') {
            if (IsOk(eDS.E21.E21_11) == true) {
                v2XML.writeElementString("E21_11", eDS.E21.E21_11)
            }
        };

        if (typeof eDS.E21.E21_12 != 'undefined') {
            if (IsOk(eDS.E21.E21_12) == true)
            {
                v2XML.writeElementString("E21_12", eDS.E21.E21_12)
            }
        };

        if (typeof eDS.E21.E21_13 != 'undefined') {
            if (IsOk(eDS.E21.E21_13) == true) {
                v2XML.writeElementString("E21_13", eDS.E21.E21_13)
            }
        };

        if (typeof eDS.E21.E21_14 != 'undefined') {
            if (IsOk(eDS.E21.E21_14) == true) {
                v2XML.writeElementString("E21_14", eDS.E21.E21_14)
            }
        };

        if (typeof eDS.E21.E21_15 != 'undefined') {
            if (IsOk(eDS.E21.E21_15) == true) {
                v2XML.writeElementString("E21_15", eDS.E21.E21_15)
            }
        };

        if (typeof eDS.E21.E21_16 != 'undefined') {
            if (IsOk(eDS.E21.E21_16) == true) {
                v2XML.writeElementString("E21_16", eDS.E21.E21_16)
            }
        };

        if (typeof eDS.E21.E21_17 != 'undefined') {
            if (IsOk(eDS.E21.E21_17) == true) {
                v2XML.writeElementString("E21_17", eDS.E21.E21_17)
            }
        };
        if (check2118(eDS.E21) == true) {
            v2XML.writeStartElement("E21_18_0");
            if (typeof eDS.E21.E21_18 != 'undefined') {
                if (IsOk(eDS.E21.E21_18) == true) {
                    v2XML.writeElementString("E21_18", eDS.E21.E21_18)
                }
            };
            if (typeof eDS.E21.E21_19 != 'undefined') {
                if (IsOk(eDS.E21.E21_19) == true) {
                    v2XML.writeElementString("E21_19", eDS.E21.E21_19)
                }
            };
            v2XML.writeEndElement("E21_18_0");
        };
        if (typeof eDS.E21.E21_20 != 'undefined') {
            if (IsOk(eDS.E21.E21_20) == true) {
                v2XML.writeElementString("E21_20", eDS.E21.E21_20)
            }
        };
        v2XML.writeEndElement("E21")
    };   

    
    if (typeof eDS.E22 != 'undefined') {
        v2XML.writeStartElement("E22");

        if (typeof eDS.E22.E22_01 != 'undefined') {
            if (IsOk(eDS.E22.E22_01) == true) {
                v2XML.writeElementString("E22_01", eDS.E22.E22_01)
            }
        };

        if (typeof eDS.E22.E22_02 != 'undefined') {
            if (IsOk(eDS.E22.E22_02) == true) {
                v2XML.writeElementString("E22_02", eDS.E22.E22_02)
            }
        };

        if (typeof eDS.E22.E22_03 != 'undefined') {
            if (IsOk(eDS.E22.E22_03) == true) {
                v2XML.writeElementString("E22_03", this.escapeXml(eDS.E22.E22_03));
            }
        };

        if (typeof eDS.E22.E22_04 != 'undefined') {
            if (IsOk(eDS.E22.E22_04) == true) {
                v2XML.writeElementString("E22_04", this.escapeXml(eDS.E22.E22_04));
            }
        };
        if (typeof eDS.E22.E22_05 != 'undefined') {
            if (IsOk(eDS.E22.E22_05) == true) {
                v2XML.writeElementString("E22_05", this.escapeXml(eDS.E22.E22_05));
            }
        };

        if (typeof eDS.E22.E22_06 != 'undefined') {
            if (IsOk(eDS.E22.E22_06) == true) {
                v2XML.writeElementString("E22_06", this.escapeXml(eDS.E22.E22_06));
            }
        };
        v2XML.writeEndElement("E22");
    };

    
    if (typeof eDS.E23 != 'undefined') {
        v2XML.writeStartElement("E23");
        if (eDS.E23.E23_01 != 'undefined') {
            if (IsOk(eDS.E23.E23_01) == true) {
                v2XML.writeElementString("E23_01", eDS.E23.E23_01)
            }
        };
        if (typeof eDS.E23.E23_02 != 'undefined') {
            for (var i = 0; i < eDS.E23.E23_02.length; i++) {
                if (IsOk(eDS.E23.E23_02[i]) == true) {
                    v2XML.writeElementString("E23_02", eDS.E23.E23_02[i]);
                }
            }
        };
        
        if (typeof eDS.E23.E23_03 != 'undefined') {

            for (var i = 0; i < eDS.E23.E23_03.length; i++) {
                if (IsOk(eDS.E23.E23_03[i]) == true) {
                    v2XML.writeElementString("E23_03", eDS.E23.E23_03[i]);
                }
            }
        };
        if (typeof eDS.E23.E23_04 != 'undefined') {

            for (var i = 0; i < eDS.E23.E23_04.length; i++) {
                if (IsOk(eDS.E23.E23_04[i]) == true) {
                    v2XML.writeElementString("E23_04", eDS.E23.E23_04[i]);
                }
            }
        };
        
        if (typeof eDS.E23.E23_05 != 'undefined') {

            if (IsOk(eDS.E23.E23_05[i]) == true) {
                v2XML.writeElementString("E23_05", eDS.E23.E23_05);                
            }
        };
        
        if (typeof eDS.E23.E23_06 != 'undefined')
        {

            for (var i = 0; i < eDS.E23.E23_06.length; i++)
            {

                if (IsOk(eDS.E23.E23_06[i]) == true)
                {
                    v2XML.writeElementString("E23_06", eDS.E23.E23_06[i]);
                }
            }
        };

        if (typeof eDS.E23.E23_07 != 'undefined')
        {
            for (var i = 0; i < eDS.E23.E23_07.length; i++)
            {

                if (IsOk(eDS.E23.E23_07[i]) == true)
                {
                    v2XML.writeElementString("E23_07", eDS.E23.E23_07[i]);
                }
            }
        };


        
        if (typeof eDS.E23.E23_08 != 'undefined') {
            if (IsOk(eDS.E23.E23_08) == true) {
                v2XML.writeElementString("E23_08", eDS.E23.E23_08)
            }
        };
        
        //if (check2309(eDS.E21) == true) {
            v2XML.writeStartElement("E23_09_0");
            if (typeof eDS.E23.E23_09 != 'undefined') {
                if (IsOk(eDS.E23.E23_09) == true) {
                    v2XML.writeElementString("E23_09", this.escapeXml(eDS.E23.E23_09));
                }
            };
        
            if (typeof eDS.E23.E23_11 != 'undefined') {
                if (IsOk(eDS.E23.E23_11) == true) {
                    v2XML.writeElementString("E23_11", this.escapeXml(eDS.E23.E23_11));
                }
            };
            v2XML.writeEndElement("E23_09_0");
        //};
        
        if (typeof eDS.E23.E23_10 != 'undefined') {
            if (IsOk(eDS.E23.E23_10) == true) {
                v2XML.writeElementString("E23_10", this.escapeXml(eDS.E23.E23_10));
            }
        }      
    };
        
    
        v2XML.writeEndElement("E23");
    //};
    
        v2XML.writeEndElement();
    //XML.writeAttributeString('timeStamp', Data);
        var XMLDoc = v2XML.flush()
        return XMLDoc;
};
    
var IsOk = function (valObject)
{
    
    if (typeof valObject == 'undefined')
    {
        
        return false;
    }
    else
    {
        if (valObject.length === 0)
        { //empty object
            
            return false;
        }
    };
    if (valObject == null)
    {       
        return false;
    }

    else
    {
        return true;
    }
};

function escapeXml(unsafe) {
    return unsafe.replace(/[<>&'"]/g, function (c) {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '\'': return '&apos;';
            case '"': return '&quot;';
        }
    });
}
