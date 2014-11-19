setV3XML = function (TheCall) {
   
    if (TheCall.CanWriteXML == false) {
        return null;
    };
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

    var XML = new XMLWriter('UTF-8', '1.0');
    XML.writeStartDocument();
    XML.writeStartElement('EMSDataSet');
    XML.writeAttributeString('xmlns:xsi', "http://www.w3.org/2001/XMLSchema-instance");
    XML.writeAttributeString('xsi:schemaLocation', "http://www.nemsis.org http://nemsis.org/media/XSD_v3/_nemsis_v3.3.4/3.3.4.140328/XSDs/NEMSIS_XSDs_v3.3.4.140328/EMSDataSet_v3.xsd  xmlns:xsi=http://www.w3.org/2001/XMLSchema-instance");
   

    XML.writeStartElement("Header");
    XML.writeStartElement("PatientCareReport");
    if (typeof TheCall.eRecord != 'undefined') {
        var obj = {};
        var obj = TheCall.eRecord;
        XML.writeStartElement("eRecord");

        if (typeof obj["eRecord.01"] != 'undefined') {
            if (TheCall.eRecord["eRecord.01"].IsNull == false) {
                XML.writeElementString("eRecord.01", TheCall.eRecord["eRecord.01"].vSet[0]);
            }
        };
        
        XML.writeStartElement("eRecord.SoftwareApplicationGroup");
        
        if (typeof obj["eRecord.02"] != 'undefined') {
            XML.writeStartElement("eRecord.SoftwareApplicationGroup");
            if (obj["eRecord.02"].IsNull == false) {
                XML.writeElementString("eRecord.02", obj["eRecord.02"].vSet[0]);
            }            
        };
        if (typeof obj["eRecord.03"] != 'undefined') {
            if (obj["eRecord.03"].IsNull == false) {
                XML.writeElementString("eRecord.03", obj["eRecord.03"].vSet[0]);
            }
        };
        if (typeof obj["eRecord.04"] != 'undefined') {
            if (obj["eRecord.04"].IsNull == false) {
                XML.writeElementString("eRecord.04", obj["eRecord.04"].vSet[0]);
            }
        };
        XML.writeEndElement();        
        XML.writeEndElement("eRecord");
    };
    //Dispatch
    if (typeof TheCall.eDispatch != 'undefined') {
        XML.writeStartElement("eDispatch");
        var obj = {};
        var obj = TheCall.eDispatch;
        if (obj["eDispatch.01"].IsNull == false) {
            XML.writeElementString("eDispatch.01", obj["eDispatch.01"].vSet[0]);
        }
        else {
            if (obj["eDispatch.01"].NV == true) {
            }
            XML.writeStartElement('eDispatch.01');
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeAttributeString('NV', obj["eDispatch.01"].vSet[0]);
            XML.writeEndElement();
        };
        if (obj["eDispatch.02"].IsNull == false) {
            XML.writeElementString("eDispatch.02", obj["eDispatch.02"].vSet[0]);
        }
        else {
            if (obj["eDispatch.02"].NV == true) {
            }
            XML.writeStartElement('eDispatch.02');
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeAttributeString('NV', obj["eDispatch.02"].vSet[0]);
            XML.writeEndElement();
        };

        if (typeof obj["eDispatch.03"].IsNull != 'undefined') {
            if (obj["eDispatch.03"].IsNull == false) {
                XML.writeElementString("eDispatch.03", obj["eDispatch.03"].vSet[0]);
            }
        };
        if (typeof obj["eDispatch.04"].IsNull != 'undefined') {
            if (obj["eDispatch.04"].IsNull == false) {
                XML.writeElementString("eDispatch.04", obj["eDispatch.04"].vSet[0]);
            }
        };

        if (typeof obj["eDispatch.05"].IsNull != 'undefined') {
            if (obj["eDispatch.05"].IsNull == false) {
                XML.writeElementString("eDispatch.05", obj["eDispatch.05"].vSet[0]);
            }
        };

        XML.writeEndElement("eDispatch");
    };
    //Disposition
    if (typeof TheCall.eDisposition != 'undefined') {
        var obj = {};
        var obj = obj;
        XML.writeStartElement("eDisposition");
        if (typeof obj["DestinationGroup"] != 'undefined') {
            XML.writeStartElement("eDisposition.DestinationGroup");

            if (typeof obj["eDisposition.01"] != 'undefined') {
                if (obj["eDisposition.01"].IsNull == false) {

                    XML.writeElementString("eDisposition.01", obj["eDisposition.01"].vSet[0]);
                }

                else {
                    if (obj["eDisposition.01"].NV == true) {
                        XML.writeStartElement('eDisposition.01');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eDisposition.01"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof ["eDisposition.02"] != 'undefined') {
                if (obj["eDisposition.02"].IsNull == false) {

                    XML.writeElementString("eDisposition.02", obj["eDisposition.02"].vSet[0]);
                }

                else {
                    if (obj["eDisposition.02"].NV == true) {
                        XML.writeStartElement('eDisposition.02');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eDisposition.02"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };
            if (typeof obj["eDisposition.03"] != 'undefined') {
                if (obj["eDisposition.03"].IsNull == false) {

                    XML.writeElementString("eDisposition.03", obj["eDisposition.03"].vSet[0]);
                }

                else {
                    if (obj["eDisposition.03"].NV == true) {
                        XML.writeStartElement('eDisposition.03');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eDisposition.03"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof obj["eDisposition.04"] != 'undefined') {
                if (obj["eDisposition.04"].IsNull == false) {

                    XML.writeElementString("eDisposition.04", obj["eDisposition.04"].vSet[0]);
                }

                else {
                    if (obj["eDisposition.04"].NV == true) {
                        XML.writeStartElement('eDisposition.04');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eDisposition.04"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof obj["eDisposition.05"] != 'undefined') {
                if (obj["eDisposition.05"].IsNull == false) {

                    XML.writeElementString("eDisposition.05", obj["eDisposition.05"].vSet[0]);
                }

                else {
                    if (obj["eDisposition.05"].NV == true) {
                        XML.writeStartElement('eDisposition.05');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eDisposition.05"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof obj["eDisposition.06"] != 'undefined') {
                if (obj["eDisposition.06"].IsNull == false) {

                    XML.writeElementString("eDisposition.06", obj["eDisposition.06"].vSet[0]);
                }

                else {
                    if (obj["eDisposition.06"].NV == true) {
                        XML.writeStartElement('eDisposition.06');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eDisposition.06"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof obj["eDisposition.07"] != 'undefined') {
                if (obj["eDisposition.07"].IsNull == false) {

                    XML.writeElementString("eDisposition.07", obj["eDisposition.07"].vSet[0]);
                }

                else {
                    if (obj["eDisposition.07"].NV == true) {
                        XML.writeStartElement('eDisposition.07');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eDisposition.07"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof obj["eDisposition.08"] != 'undefined') {
                if (obj["eDisposition.08"].IsNull == false) {
                    XML.writeElementString("eDisposition.08", obj["eDisposition.08"].vSet[0]);
                }
            };

            if (typeof obj["eDisposition.09"] != 'undefined') {
                if (obj["eDisposition.09"].IsNull == false) {
                    XML.writeElementString("eDisposition.09", obj["eDisposition.09"].vSet[0]);
                }
            };

            if (typeof obj["eDisposition.10"] != 'undefined') {
                if (obj["eDisposition.10"].IsNull == false) {
                    XML.writeElementString("eDisposition.10", obj["eDisposition.10"].vSet[0]);
                }
            };

            XML.writeEndElement();
        };
        /////////////////

        if (typeof obj["eDisposition.11"] != 'undefined') {
            if (obj["eDisposition.11"].IsNull == false) {

                XML.writeElementString("eDisposition.11", obj["eDisposition.11"].vSet[0]);
            }

            else {
                if (obj["eDisposition.11"].NV == true) {
                    XML.writeStartElement('eDisposition.11');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eDisposition.11"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof obj["eDisposition.12"] != 'undefined') {
            if (obj["eDisposition.12"].IsNull == false) {

                XML.writeElementString("eDisposition.12", obj["eDisposition.12"].vSet[0]);
            }

            else {
                if (obj["eDisposition.12"].NV == true) {
                    XML.writeStartElement('eDisposition.12');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eDisposition.12"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof obj["eDisposition.13"] != 'undefined') {
            if (obj["eDisposition.13"].IsNull == false) {
                for (var d = 0; d < obj["eDisposition.13"].vSet.length; d++) {
                    XML.writeElementString("eDisposition.13", obj["eDisposition.13"].vSet[d]);
                }
            }
            else {
                XML.writeElementString("eDisposition.13", "");
            }
        };
        if (typeof obj["eDisposition.14"] != 'undefined') {
            if (obj["eDisposition.14"].IsNull == false) {
                for (var d = 0; d < obj["eDisposition.14"].vSet.length; d++) {
                    XML.writeElementString("eDisposition.14", obj["eDisposition.14"].vSet[d]);
                }
            }
            else {
                XML.writeElementString("eDisposition.14", "");
            }
        };

        if (typeof obj["eDisposition.15"] != 'undefined') {
            if (obj["eDisposition.15"].IsNull == false) {
                XML.writeElementString("eDisposition.15", obj["eDisposition.15"].vSet[0]);
            }
            else {
                XML.writeElementString("eDisposition.15", "");
            }
        };

        if (typeof obj["eDisposition.16"] != 'undefined') {
            if (obj["eDisposition.16"].IsNull == false) {

                XML.writeElementString("eDisposition.16", obj["eDisposition.16"].vSet[0]);
            }

            else {
                if (obj["eDisposition.16"].NV == true) {
                    XML.writeStartElement('eDisposition.16');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eDisposition.16"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof obj["eDisposition.17"] != 'undefined') {
            if (obj["eDisposition.17"].IsNull == false) {

                XML.writeElementString("eDisposition.17", obj["eDisposition.17"].vSet[0]);
            }

            else {
                if (obj["eDisposition.17"].NV == true) {
                    XML.writeStartElement('eDisposition.17');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eDisposition.17"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof obj["eDisposition.18"] != 'undefined') {
            if (obj["eDisposition.18"].IsNull == false) {
                for (var d = 0; d < obj["eDisposition.18"].vSet.length; d++) {
                    XML.writeElementString("eDisposition.18", obj["eDisposition.18"].vSet[d]);
                }
            }
            else {
                if (obj["eDisposition.18"].NV == true) {
                    XML.writeStartElement('eDisposition.18');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eDisposition.18"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof obj["eDisposition.19"] != 'undefined') {
            if (obj["eDisposition.19"].IsNull == false) {

                XML.writeElementString("eDisposition.19", obj["eDisposition.19"].vSet[0]);
            }

            else {
                if (obj["eDisposition.19"].NV == true) {
                    XML.writeStartElement('eDisposition.19');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eDisposition.19"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof obj["eDisposition.20"] != 'undefined') {
            if (obj["eDisposition.20"].IsNull == false) {
                for (var d = 0; d < obj["eDisposition.20"].vSet.length; d++) {
                    XML.writeElementString("eDisposition.20", obj["eDisposition.20"].vSet[d]);
                }

            }

            else {
                if (obj["eDisposition.20"].NV == true) {
                    XML.writeStartElement('eDisposition.20');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eDisposition.20"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof obj["eDisposition.21"] != 'undefined') {
            if (obj["eDisposition.21"].IsNull == false) {

                XML.writeElementString("eDisposition.21", obj["eDisposition.21"].vSet[0]);
            }

            else {
                if (obj["eDisposition.21"].NV == true) {
                    XML.writeStartElement('eDisposition.21');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eDisposition.21"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof obj["eDisposition.22"] != 'undefined') {
            if (obj["eDisposition.22"].IsNull == false) {

                XML.writeElementString("eDisposition.22", obj["eDisposition.22"].vSet[0]);
            }

            else {
                if (obj["eDisposition.22"].NV == true) {
                    XML.writeStartElement('eDisposition.22');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eDisposition.22"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof obj["eDisposition.23"] != 'undefined') {
            if (obj["eDisposition.23"].IsNull == false) {

                XML.writeElementString("eDisposition.23", obj["eDisposition.23"].vSet[0]);
            }

            else {
                if (obj["eDisposition.23"].NV == true) {
                    XML.writeStartElement('eDisposition.23');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eDisposition.23"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof obj.HospitalTeamActivationGroup != 'undefined') {
            for (var i = 0; i < obj.HospitalTeamActivationGroup.length; i++) {
                if (obj["HospitalTeamActivationGroup"] != -1) {
                    XML.writeStartElement("eDisposition.HospitalTeamActivationGroup");
                    if (typeof obj.HospitalTeamActivationGroup[i]["eDisposition.24"] != 'undefined') {
                        if (obj.HospitalTeamActivationGroup[i]["eDisposition.24"].IsNull == false) {

                            XML.writeElementString("eDisposition.24", obj.HospitalTeamActivationGroup[i]["eDisposition.24"].vSet[0]);
                        }

                        else {
                            if (obj.HospitalTeamActivationGroup[i]["eDisposition.24"].NV == true) {
                                XML.writeStartElement('eDisposition.24');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.HospitalTeamActivationGroup[i]["eDisposition.24"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    };
                    if (typeof obj.HospitalTeamActivationGroup[i]["eDisposition.25"] != 'undefined') {
                        if (obj.HospitalTeamActivationGroup[i]["eDisposition.25"].IsNull == false) {
                            XML.writeElementString("eDisposition.23", obj.HospitalTeamActivationGroup[i]["eDisposition.25"].vSet[0]);
                        }

                        else {
                            if (obj.HospitalTeamActivationGroup[i]["eDisposition.25"].NV == true) {
                                XML.writeStartElement('eDisposition.25');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.HospitalTeamActivationGroup[i]["eDisposition.25"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    };
                    XML.writeEndElement();
                };
            };
            if (typeof obj["eDisposition.26"] != 'undefined') {
                if (obj["eDisposition.26"].IsNull == false) {
                    for (var d = 0; d < obj["eDisposition.26"].vSet.length; d++) {
                        XML.writeElementString("eDisposition.26", obj["eDisposition.26"].vSet[d]);
                    }
                }
            }
            else {
                XML.writeElementString("eDisposition.26", "");
            };
            XML.writeEndElement();
        }
    };
    //eTimes
    if (typeof TheCall.eTimes != 'undefined') {
        var obj = {};
        obj = TheCall.eTimes
        XML.writeStartElement("eTimes");
        if (typeof obj["eTimes.01"] != 'undefined') {
            if (obj["eTimes.01"].IsNull == false) {
                XML.writeElementString("eTimes.01", obj["eTimes.01"].vSet[0]);
            }
            else {
                if (obj["eTimes.01"].NV == true) {

                    XML.writeStartElement('eTimes.01');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eTimes.01"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof obj["eTimes.02"] != 'undefined') {
            if (obj["eTimes.02"].IsNull == false) {
                XML.writeElementString("eTimes.02", obj["eTimes.02"].vSet[0]);
            }
            else {
                XML.writeElementString("eTimes.02", "");
            }
        };

        if (typeof obj["eTimes.03"] != 'undefined') {
            if (obj["eTimes.03"].IsNull == false) {
                XML.writeElementString("eTimes.03", obj["eTimes.03"].vSet[0]);
            }
        };

        if (typeof obj["eTimes.04"] != 'undefined') {
            if (obj["eTimes.04"].IsNull == false) {
                XML.writeElementString("eTimes.04", obj["eTimes.04"].vSet[0]);
            }
            else {
                XML.writeElementString("eTimes.04", "");
            }
        };

        if (typeof obj["eTimes.05"] != 'undefined') {
            if (obj["eTimes.05"].IsNull == false) {
                XML.writeElementString("eTimes.05", obj["eTimes.05"].vSet[0]);
            }
            else {
                if (obj["eTimes.05"].NV == true) {
                }
                XML.writeStartElement('eTimes.05');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', obj["eTimes.05"].vSet[0]);
                XML.writeEndElement();
            }
        };

        if (typeof obj["eTimes.06"] != 'undefined') {
            if (obj["eTimes.06"].IsNull == false) {
                XML.writeElementString("eTimes.06", obj["eTimes.06"].vSet[0]);
            }
            else {
                if (obj["eTimes.06"].NV == true) {
                }
                XML.writeStartElement('eTimes.06');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', obj["eTimes.06"].vSet[0]);
                XML.writeEndElement();
            }
        };

        if (typeof obj["eTimes.07"] != 'undefined') {
            if (obj["eTimes.07"].IsNull == false) {
                XML.writeElementString("eTimes.07", obj["eTimes.07"].vSet[0]);
            }
            else {
                if (obj["eTimes.07"].NV == true) {
                }
                XML.writeStartElement('eTimes.07');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', obj["eTimes.07"].vSet[0]);
                XML.writeEndElement();
            }
        };

        if (typeof obj["eTimes.08"] != 'undefined') {
            if (obj["eTimes.08"].IsNull == false) {
                XML.writeElementString("eTimes.08", obj["eTimes.08"].vSet[0]);
            }
            else {
                if (obj["eTimes.08"].NV == true) {
                }
                XML.writeStartElement('eTimes.08');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', obj["eTimes.08"].vSet[0]);
                XML.writeEndElement();
            }
        };
        if (typeof obj["eTimes.09"] != 'undefined') {
            if (obj["eTimes.09"].IsNull == false) {
                XML.writeElementString("eTimes.09", obj["eTimes.09"].vSet[0]);
            }
            else {
                if (obj["eTimes.09"].NV == true) {
                }
                XML.writeStartElement('eTimes.09');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', obj["eTimes.09"].vSet[0]);
                XML.writeEndElement();
            }
        };

        if (typeof obj["eTimes.10"] != 'undefined') {
            if (obj["eTimes.10"].IsNull == false) {
                XML.writeElementString("eTimes.10", obj["eTimes.10"].vSet[0]);
            }
            else {
                XML.writeElementString("eTimes.10", "");
            }
        };

        if (typeof obj["eTimes.11"] != 'undefined') {
            if (obj["eTimes.11"].IsNull == false) {
                XML.writeElementString("eTimes.11", obj["eTimes.11"].vSet[0]);
            }
            else {
                if (obj["eTimes.11"].NV == true) {
                }
                XML.writeStartElement('eTimes.11');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', obj["eTimes.11"].vSet[0]);
                XML.writeEndElement();
            }
        };

        if (typeof obj["eTimes.12"] != 'undefined') {
            if (obj["eTimes.12"].IsNull == false) {
                XML.writeElementString("eTimes.12", obj["eTimes.12"].vSet[0]);
            }
            else {
                if (obj["eTimes.12"].NV == true) {
                }
                XML.writeStartElement('eTimes.12');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', obj["eTimes.12"].vSet[0]);
                XML.writeEndElement();
            }
        };

        if (typeof obj["eTimes.13"] != 'undefined') {
            if (obj["eTimes.13"].IsNull == false) {
                XML.writeElementString("eTimes.13", obj["eTimes.13"].vSet[0]);
            }
            else {
                XML.writeElementString("eTimes.13", "");
            }
        };
        if (typeof obj["eTimes.14"] != 'undefined') {
            if (obj["eTimes.14"].IsNull == false) {
                XML.writeElementString("eTimes.14", obj["eTimes.14"].vSet[0]); 
            }
            else {
                XML.writeElementString("eTimes.14", "");
            }
        };
        if (typeof obj["eTimes.15"] != 'undefined') {
            if (obj["eTimes.15"].IsNull == false) {
                XML.writeElementString("eTimes.15", obj["eTimes.15"].vSet[0]);
            }
            else {
                XML.writeElementString("eTimes.15", "");
            }
        };

        if (typeof obj["eTimes.16"] != 'undefined') {
            if (obj["eTimes.16"].IsNull == false) {
                XML.writeElementString("eTimes.16", obj["eTimes.16"].vSet[0]);
            }
            else {
                XML.writeElementString("eTimes.16", "");
            }
        };
        XML.writeEndElement()
        /////////////////////Response
    };
    //Response
    if (typeof TheCall.eResponse != 'undefined')
    {
        var obj = {};
        obj = TheCall.eResponse;
        XML.writeStartElement("eResponse");
        
        if (obj["AgencyGroup"] > 0) 
        {
            XML.writeStartElement("eResponse.AgencyGroup");
            if (typeof obj["eResponse.01"] != 'undefined') 
            {
                if (obj["eResponse.01"].IsNull == false) 
                {
                    XML.writeElementString("eResponse.01", obj["eResponse.01"].vSet[0]);
                }
            };
            
            if (typeof obj["eResponse.02"] != 'undefined') 
            {
                if (obj["eResponse.02"].IsNull == false) 
                {
                    XML.writeElementString("eResponse.02", obj["eResponse.02"].vSet[0]);
                }
                else 
                {
                    if (obj["eResponse.02"].NV == true) 
                    {                    
                    XML.writeStartElement('eResponse.02');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eResponse.02"].vSet[0]);
                    XML.writeEndElement();
                }
            };
            XML.writeEndElement();
        };
        
        if (typeof obj["eResponse.03"] != 'undefined') {
            if (obj["eResponse.03"].IsNull == false) {
                XML.writeElementString("eResponse.03", obj["eResponse.03"].vSet[0]);
            }
            else {
                if (obj["eResponse.03"].NV == true) {
                }
                XML.writeStartElement('eResponse.03');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', obj["eResponse.03"].vSet[0]);
                XML.writeEndElement();
            }
        };


        if (typeof obj["eResponse.04"] != 'undefined') {
            if (obj["eResponse.04"].IsNull == false) {
                XML.writeElementString("eResponse.04", obj["eResponse.04"].vSet[0]);
            }
            else {
                if (obj["eResponse.04"].NV == true) {
                }
                XML.writeStartElement('eResponse.04');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', obj["eResponse.04"].vSet[0]);
                XML.writeEndElement();
            }
        };
            
        if (obj["ServiceGroup"] > 0) {
            XML.writeStartElement("eResponse.AgencyServiceGroup");
            if (typeof obj["eResponse.05"] != 'undefined') {
                if (obj["eResponse.05"].IsNull == false) {
                    XML.writeElementString("eResponse.05", obj["eResponse.05"].vSet[0]);
                }
            };

            if (typeof obj["eResponse.06"] != 'undefined')
            {
                if (obj["eResponse.06"].IsNull == false)
                {
                    XML.writeElementString("eResponse.06", obj["eResponse.06"].vSet[0]);
                }
            };
            XML.writeEndElement();
        };
            
        if (typeof obj["eResponse.07"] != 'undefined') {
            if (obj["eResponse.07"].IsNull == false) {
                XML.writeElementString("eResponse.07", obj["eResponse.07"].vSet[0]);
            }
        };


        if (typeof obj["eResponse.08"] != 'undefined') {
            if (obj["eResponse.08"].IsNull == false) {
                for (var d = 0; d < obj["eResponse.08"].vSet.length; d++) {
                    XML.writeElementString("eResponse.08", obj["eResponse.08"].vSet[d]);
                }

            }

            else {
                if (obj["eResponse.08"].NV == true) {
                    XML.writeStartElement('eResponse.08');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eResponse.08"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof obj["eResponse.09"] != 'undefined') {
            if (obj["eResponse.09"].IsNull == false) {
                for (var d = 0; d < obj["eResponse.09"].vSet.length; d++) {
                    XML.writeElementString("eResponse.09", obj["eResponse.09"].vSet[d]);
                }

            }

            else {
                if (obj["eResponse.09"].NV == true) {
                    XML.writeStartElement('eResponse.09');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eResponse.09"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
            
        if (typeof obj["eResponse.10"] != 'undefined') {
            if (obj["eResponse.10"].IsNull == false) {
                for (var d = 0; d < obj["eResponse.10"].vSet.length; d++) {
                    XML.writeElementString("eResponse.10", obj["eResponse.10"].vSet[d]);
                }

            }

            else {
                if (obj["eResponse.10"].NV == true) {
                    XML.writeStartElement('eResponse.10');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eResponse.10"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof obj["eResponse.11"] != 'undefined') {
            if (obj["eResponse.11"].IsNull == false) {
                for (var d = 0; d < obj["eResponse.11"].vSet.length; d++) {
                    XML.writeElementString("eResponse.11", obj["eResponse.11"].vSet[d]);
                }
            }
            else {
                if (obj["eResponse.11"].NV == true) {
                    XML.writeStartElement('eResponse.11');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eResponse.11"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof obj["eResponse.12"] != 'undefined') {
            if (obj["eResponse.12"].IsNull == false) {
                for (var d = 0; d < obj["eResponse.12"].vSet.length; d++) {
                    XML.writeElementString("eResponse.12", obj["eResponse.12"].vSet[d]);
                }

            }

            else {
                if (obj["eResponse.12"].NV == true) {
                    XML.writeStartElement('eResponse.12');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eResponse.12"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
            


        if (typeof obj["eResponse.13"] != 'undefined') {
            if (obj["eResponse.13"].IsNull == false) {
                XML.writeElementString("eResponse.13", obj["eResponse.13"].vSet[0]);
            }

            else {
                if (obj["eResponse.13"].NV == true) {
                    XML.writeStartElement('eResponse.13');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eResponse.13"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof obj["eResponse.14"] != 'undefined') {
            if (obj["eResponse.14"].IsNull == false) {
                XML.writeElementString("eResponse.14", obj["eResponse.14"].vSet[0]);
            }

            else {
                if (obj["eResponse.14"].NV == true) {
                    XML.writeStartElement('eResponse.14');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eResponse.14"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        console.log(obj["eResponse.15"])
        if (typeof obj["eResponse.15"] != 'undefined') {
            if (obj["eResponse.15"].IsNull == false) {
                XML.writeElementString("eResponse.15", obj["eResponse.15"].vSet[0]);
            }
        };
            
        if (typeof obj["eResponse.16"] != 'undefined') {
            if (obj["eResponse.16"].IsNull == false) {
                XML.writeElementString("eResponse.16", obj["eResponse.16"].vSet[0]);
            }
        };
            
        if (typeof obj["eResponse.17"] != 'undefined') {
            if (obj["eResponse.17"].IsNull == false) {
                XML.writeElementString("eResponse.17", obj["eResponse.17"].vSet[0]);
            }
        };

        if (typeof obj["eResponse.18"] != 'undefined') {
            if (obj["eResponse.18"].IsNull == false) {
                XML.writeElementString("eResponse.18", obj["eResponse.18"].vSet[0]);
            }
        };

        if (typeof obj["eResponse.19"] != 'undefined') {
            if (obj["eResponse.19"].IsNull == false) {
                XML.writeElementString("eResponse.19", obj["eResponse.19"].vSet[0]);
            }
        };

        if (typeof obj["eResponse.20"] != 'undefined') {
            if (obj["eResponse.20"].IsNull == false) {
                XML.writeElementString("eResponse.20", obj["eResponse.20"].vSet[0]);
            }
        };
            
        if (typeof obj["eResponse.21"] != 'undefined') 
        {
            if (obj["eResponse.21"].IsNull == false) {
                XML.writeElementString("eResponse.21", obj["eResponse.21"].vSet[0]);
            }
        };
            
        if (typeof obj["eResponse.22"] != 'undefined') {
            if (obj["eResponse.22"].IsNull == false) {
                XML.writeElementString("eResponse.22", obj["eResponse.22"].vSet[0]);
            }
        };

            
        if (typeof obj["eResponse.23"] != 'undefined') 
        {
            if (obj["eResponse.23"].IsNull == false) 
            {
                XML.writeElementString("eResponse.23", obj["eResponse.23"].vSet[0]);
            }
        };
            

        if (typeof obj["eResponse.24"] != 'undefined') {
            if (obj["eResponse.24"].IsNull == false) {
                for (var d = 0; d < obj["eResponse.24"].vSet.length; d++) {
                    XML.writeElementString("eResponse.24", obj["eResponse.24"].vSet[d]);
                }

            }

            else {
                if (obj["eResponse.24"].NV == true) {
                    XML.writeStartElement('eResponse.24');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eResponse.24"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
            
            XML.writeEndElement();
        }
        
    };
    //Patient       
    if (typeof TheCall.ePatient != 'undefined') {
        var obj = {};
        obj = TheCall.ePatient;

        if (typeof obj["ePatient.01"] != 'undefined') {
            if (obj["ePatient.01"].IsNull == false) {
                XML.writeElementString("ePatient.01", obj["ePatient.01"].vSet[0]);
            }
        };
        if (obj["PatientNameGroup"] > 0) {
            XML.writeStartElement("ePatient.PatientNameGroup")
            if (typeof obj["ePatient.02"] != 'undefined') {
                if (obj["ePatient.02"].IsNull == false) {
                    XML.writeElementString("ePatient.02", obj["ePatient.02"].vSet[0]);
                }
                else {
                    if (obj["ePatient.02"].NV == true) {

                        XML.writeStartElement('ePatient.02');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["ePatient.02"].vSet[0]);
                        XML.writeEndElement();
                    }
                    else if (obj["ePatient.02"].PN == true) {
                        XML.writeStartElement('ePatient.02');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('PN', obj["ePatient.02"].vSet[0]);
                        XML.writeEndElement();

                    }
                }
            };

            if (typeof obj["ePatient.03"] != 'undefined') {
                if (obj["ePatient.03"].IsNull == false) {
                    XML.writeElementString("ePatient.03", obj["ePatient.03"].vSet[0]);
                }
                else {
                    if (obj["ePatient.03"].NV == true) {

                        XML.writeStartElement('ePatient.03');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["ePatient.03"].vSet[0]);
                        XML.writeEndElement();
                    }
                    else if (obj["ePatient.03"].PN == true) {
                        XML.writeStartElement('ePatient.03');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('PN', obj["ePatient.03"].vSet[0]);
                        XML.writeEndElement();

                    }
                }
            };

            if (typeof obj["ePatient.04"] != 'undefined') {
                if (obj["ePatient.04"].IsNull == false) {
                    XML.writeElementString("ePatient.04", obj["ePatient.04"].vSet[0]);
                }
            };
            XML.writeEndElement();
        };

        if (typeof obj["ePatient.05"] != 'undefined') {
            if (obj["ePatient.05"].IsNull == false) {
                XML.writeElementString("ePatient.05", obj["ePatient.05"].vSet[0]);
            }
        };

        if (typeof obj["ePatient.06"] != 'undefined') {
            if (obj["ePatient.06"].IsNull == false) {
                XML.writeElementString("ePatient.06", obj["ePatient.06"].vSet[0]);
            }
        };

        if (typeof obj["ePatient.07"] != 'undefined') {
            if (obj["ePatient.07"].IsNull == false) {
                XML.writeElementString("ePatient.07", obj["ePatient.07"].vSet[0]);
            }
            else {
                if (obj["ePatient.07"].NV == true) {
                }
                XML.writeStartElement('ePatient.07');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', obj["ePatient.07"].vSet[0]);
                XML.writeEndElement();
            }
        };

        if (typeof obj["ePatient.07"] != 'undefined') {
            if (obj["ePatient.08"].IsNull == false) {
                XML.writeElementString("ePatient.08", obj["ePatient.08"].vSet[0]);
            }
            else {7
                if (obj["ePatient.08"].NV == true) {
                }
                XML.writeStartElement('ePatient.08');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', obj["ePatient.08"].vSet[0]);
                XML.writeEndElement();
            }
        };

        if (typeof obj["ePatient.09"] != 'undefined') {
            if (obj["ePatient.09"].IsNull == false) {
                XML.writeElementString("ePatient.09", obj["ePatient.09"].vSet[0]);
            }
            else {
                if (obj["ePatient.09"].NV == true) {
                }
                XML.writeStartElement('ePatient.09');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', obj["ePatient.09"].vSet[0]);
                XML.writeEndElement();
            }
        };

        if (typeof obj["ePatient.10"] != 'undefined') {
            if (obj["ePatient.10"].IsNull == false) {
                XML.writeElementString("ePatient.10", obj["ePatient.10"].vSet[0]);
            }
        };

        if (typeof obj["ePatient.11"] != 'undefined') {
            if (obj["ePatient.11"].IsNull == false) {
                XML.writeElementString("ePatient.11", obj["ePatient.11"].vSet[0]);
            }
        };

        if (typeof obj["ePatient.12"] != 'undefined') {
            if (obj["ePatient.12"].IsNull == false) {
                XML.writeElementString("ePatient.12", obj["ePatient.12"].vSet[0]);
            }
        };

        if (typeof obj["ePatient.13"] != 'undefined') {
            if (obj["ePatient.13"].IsNull == false) {
                XML.writeElementString("ePatient.13", obj["ePatient.13"].vSet[0]);
            }
            else {
                if (obj["ePatient.13"].NV == true) {
                }
                XML.writeStartElement('ePatient.13');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', obj["ePatient.13"].vSet[0]);
                XML.writeEndElement();
            }
        };
        if (typeof obj["ePatient.14"] != 'undefined') 
        {
            if (obj["ePatient.14"].IsNull == false) {
                for (var i = 0; i < obj["ePatient.14"].vSet.length; i++) {
                    XML.writeElementString("ePatient.14", obj["ePatient.14"].vSet[i]);
                }
            }
            else {
                if (obj["ePatient.14"].NV == true) {
                    XML.writeStartElement('ePatient.14');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["ePatient.14"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (obj["AgeGroup"] > 0) {
            XML.writeStartElement("ePatient.AgeGroup")

            if (typeof obj["ePatient.15"] != 'undefined') {
                if (obj["ePatient.15"].IsNull == false) {
                    XML.writeElementString("ePatient.15", obj["ePatient.15"].vSet[0]);
                }
                else {
                    if (obj["ePatient.15"].NV == true) {
                    }
                    XML.writeStartElement('ePatient.15');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["ePatient.15"].vSet[0]);
                    XML.writeEndElement();
                }
            };

            if (typeof obj["ePatient.16"] != 'undefined') {
                if (obj["ePatient.16"].IsNull == false) {
                    XML.writeElementString("ePatient.16", obj["ePatient.16"].vSet[0]);
                }
                else {
                    if (obj["ePatient.16"].NV == true) {
                    }
                    XML.writeStartElement('ePatient.16');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["ePatient.16"].vSet[0]);
                    XML.writeEndElement();
                }
            };
            XML.writeEndElement()
            if (typeof obj["ePatient.17"] != 'undefined') {
                if (obj["ePatient.17"].IsNull == false) {
                    XML.writeElementString("ePatient.17", obj["ePatient.17"].vSet[0]);
                }
                else {
                    if (obj["ePatient.17"].NV == true) {
                    }
                    XML.writeStartElement('ePatient.17');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["ePatient.17"].vSet[0]);
                    XML.writeEndElement();
                }
            };

            if (typeof obj["ePatient.18"] != 'undefined') {
                if (obj["ePatient.18"].IsNull == false) {
                    for (var i = 0; i <= obj["ePatient.18"].vSet.length - 1; i++) {
                        if (obj["ePatient.18"].vSet[i].PhoneNumberType != "") {
                            XML.writeStartElement('ePatient.18');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('PhoneNumberType', obj["ePatient.18"].vSet[i].val);
                            XML.writeEndElement();
                        }
                        else {

                            XML.writeElementString("ePatient.18", obj["ePatient.18"].vSet[i].val);
                        }
                    }
                }
            };

            if (typeof obj["ePatient.19"] != 'undefined') {

                if (obj["ePatient.19"].IsNull == false) {
                    for (var i = 0; i <= obj["ePatient.19"].vSet.length - 1; i++) {
                        if (obj["ePatient.19"].vSet[i].PhoneNumberType != "") {
                            XML.writeStartElement('ePatient.19');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('EMailAddressType', obj["ePatient.19"].vSet[i].val);
                            XML.writeEndElement();
                        }
                        else {

                            XML.writeElementString("ePatient.18", obj["ePatient.18"].vSet[i].val);
                        }
                    }
                }
            };

            if (typeof obj["ePatient.20"] != 'undefined') {
                if (typeof obj["ePatient.20"] != 'undefined') {
                    if (obj["ePatient.20"].IsNull == false) {
                        XML.writeElementString("ePatient.20", obj["ePatient.20"].vSet[0]);
                    }
                }
            };

            if (typeof obj["ePatient.21"] != 'undefined') {
                if (typeof obj["ePatient.21"] != 'undefined') {
                    if (obj["ePatient.21"].IsNull == false) {
                        XML.writeElementString("ePatient.21", obj["ePatient.21"].vSet[0]);
                    }
                }
            };
            XML.writeEndElement
        };
    };
    //History
    if (typeof TheCall.eHistory != 'undefined')
    {
        var obj = {};
        var obj = TheCall.eHistory;
        XML.writeStartElement("eHistory")
        if (typeof obj["eHistory.01"] != 'undefined') {
            if (obj["eHistory.01"].IsNull == false) {
                for (var d = 0; d < obj["eHistory.01"].vSet.length; d++) {
                    XML.writeElementString("eHistory.01", obj["eHistory.01"].vSet[d]);
                }
            }

            else {
                if (obj["eHistory.01"].NV == true) {
                    XML.writeStartElement('eHistory.01');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eHistory.01"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };


        if (typeof obj["PractitionerGroup"] != 'undefined') {
            for (var d = 0; d < obj["PractitionerGroup"].length ; d++) {
                XML.writeStartElement("eHistory.PractitionerGroup")

                if (typeof obj["PractitionerGroup"][d]["eHistory.02"] != 'undefined') {
                    if (obj["PractitionerGroup"][d]["eHistory.02"].IsNull == false) {
                        XML.writeElementString("eHistory.02", obj["PractitionerGroup"][d]["eHistory.02"].vSet[0]);
                    }
                };

                if (typeof obj["PractitionerGroup"][d]["eHistory.03"] != 'undefined') {
                    if (obj["PractitionerGroup"][d]["eHistory.03"].IsNull == false) {
                        XML.writeElementString("eHistory.03", obj["PractitionerGroup"][d]["eHistory.03"].vSet[0]);
                    }
                };
                if (typeof obj["PractitionerGroup"][d]["eHistory.04"] != 'undefined') {
                    if (obj["PractitionerGroup"][d]["eHistory.04"].IsNull == false) {
                        XML.writeElementString("eHistory.04", obj["PractitionerGroup"][d]["eHistory.04"].vSet[0]);
                    }
                };
                XML.writeEndElement()
            }
        };


        if (typeof obj["eHistory.05"] != 'undefined') {
            if (obj["eHistory.05"].IsNull == false) {
                for (var d = 0; d < obj["eHistory.05"].vSet.length; d++) {
                    XML.writeElementString("eHistory.05", obj["eHistory.05"].vSet[d]);
                }
            }

            else {
                if (obj["eHistory.05"].NV == true) {
                    XML.writeStartElement('eHistory.0');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eHistory.05"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof obj["eHistory.06"] != 'undefined') {
            if (obj["eHistory.06"].IsNull == false) {
                XML.writeElementString("eHistory.06", obj["eHistory.06"].vSet[0]);
            }
            else {
                if (obj["eHistory.06"].NV == true) {

                    XML.writeStartElement('eHistory.06');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eHistory.06"].vSet[0]);
                    XML.writeEndElement();
                }
                else if (obj["eHistory.06"].PN == true) {
                    XML.writeStartElement('eHistory.06');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('PN', obj["eHistory.06"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };


        if (typeof obj["eHistory.07"] != 'undefined') {
            if (obj["eHistory.07"].IsNull == false) {
                for (var d = 0; d < obj["eHistory.07"].vSet.length; d++) {
                    XML.writeElementString("eHistory.07", obj["eHistory.07"].vSet[d]);
                }
            }
        };

        if (typeof obj["eHistory.08"] != 'undefined') {
            if (obj["eHistory.08"].IsNull == false) {
                for (var d = 0; d < obj["eHistory.08"].vSet.length; d++) {
                    XML.writeElementString("eHistory.08", obj["eHistory.08"].vSet[d]);
                }
            }
            else {
                if (obj["eHistory.08"].NV == true) {
                    XML.writeStartElement('eHistory.08');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eHistory.08"].vSet[0]);
                    XML.writeEndElement();
                }
                else if (obj["eHistory.08"].PN == true) {
                    XML.writeStartElement('eHistory.08');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('PN', obj["eHistory.08"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof obj["eHistory.09"] != 'undefined') {
            if (obj["eHistory.09"].IsNull == false) {
                for (var d = 0; d < obj["eHistory.09"].vSet.length; d++) {
                    XML.writeElementString("eHistory.09", obj["eHistory.09"].vSet[d]);
                }
            }
        };



        if (obj["ImmunizationsGroup"] > 0) {
            for (var d = 0; d < obj["ImmunizationsGroup"].length ; d++) {
                XML.writeStartElement("eHistory.ImmunizationsGroup")

                if (typeof obj["ImmunizationsGroup"][d]["eHistory.10"] != 'undefined') {
                    if (obj["ImmunizationsGroup"][d]["eHistory.10"].IsNull == false) {
                        XML.writeElementString("eHistory.10", obj["ImmunizationsGroup"][d]["eHistory.10"].vSet[0]);
                    }
                };

                if (typeof obj["ImmunizationsGroup"][d]["eHistory.11"] != 'undefined') {
                    if (obj["ImmunizationsGroup"][d]["eHistory.11"].IsNull == false) {
                        XML.writeElementString("eHistory.11", obj["ImmunizationsGroup"][d]["eHistory.11"].vSet[0]);
                    }
                };
                XML.writeEndElement()
            }
        };

        if (obj["CurrentMedsGroup"] > 0) {
            for (var d = 0; d < obj["CurrentMedsGroup"].length ; d++) {

                XML.writeStartElement("eHistory.CurrentMedsGroup")
                if (typeof obj["CurrentMedsGroup"][d]["eHistory.12"] != 'undefined') {
                    if (obj["CurrentMedsGroup"][d]["eHistory.12"].IsNull == false) {
                        XML.writeElementString("eHistory.12", obj["CurrentMedsGroup"][d]["eHistory.12"].vSet[0]);
                    }
                    else {
                        if (obj["CurrentMedsGroup"][d]["eHistory.12"].NV == true) {
                            XML.writeStartElement('eHistory.12');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["CurrentMedsGroup"][d]["eHistory.12"].vSet[0]);
                            XML.writeEndElement();
                        }
                        else if (obj["CurrentMedsGroup"][d]["eHistory.12"].PN == true) {
                            XML.writeStartElement('eHistory.12');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('PN', obj["CurrentMedsGroup"][d]["eHistory.12"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof obj["CurrentMedsGroup"][d]["eHistory.13"] != 'undefined') {
                    if (obj["CurrentMedsGroup"][d]["eHistory.13"].IsNull == false) {
                        XML.writeElementString("eHistory.13", obj["CurrentMedsGroup"][d]["eHistory.13"].vSet[0]);
                    }
                };
                if (typeof obj["CurrentMedsGroup"][d]["eHistory.14"] != 'undefined') {
                    if (obj["CurrentMedsGroup"][d]["eHistory.14"].IsNull == false) {
                        XML.writeElementString("eHistory.14", obj["CurrentMedsGroup"][d]["eHistory.14"].vSet[0]);
                    }
                };

                if (typeof obj["CurrentMedsGroup"][d]["eHistory.15"] != 'undefined') {
                    if (obj["CurrentMedsGroup"][d]["eHistory.15"].IsNull == false) {
                        XML.writeElementString("eHistory.15", obj["CurrentMedsGroup"][d]["eHistory.15"].vSet[0]);
                    }
                };

                XML.writeEndElement()
            }
        };


        if (typeof obj["eHistory.16"] != 'undefined') {
            if (obj["eHistory.16"].IsNull == false) {
                XML.writeElementString("eHistory.16", obj["eHistory.16"].vSet[0]);
            }
        };
        if (typeof obj["eHistory.17"] != 'undefined')
        {
            if (obj["eHistory.17"].IsNull == false)
            {
                XML.writeElementString("eHistory.17", obj["eHistory.17"].vSet[0]);
            }
            else {
                if (obj["eHistory.17"].PN == true) {
                    XML.writeStartElement('eHistory.17');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('PN', obj["eHistory.17"].vSet[0]);
                    XML.writeEndElement();
                
                }
                else if (obj["eHistory.17"].NV == true) {

                    XML.writeStartElement('eHistory.17');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eHistory.17"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };


        if (typeof obj["eHistory.18"] != 'undefined') {
            if (obj["eHistory.18"].IsNull == false) {
                XML.writeElementString("eHistory.18", obj["eHistory.18"].vSet[0]);
            }
            else {
                if (obj["eHistory.18"].PN == true) {
                    XML.writeStartElement('eHistory.18');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('PN', obj["eHistory.18"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof obj["eHistory.19"] != 'undefined') {
            if (obj["eHistory.19"].IsNull == false) {
                XML.writeElementString("eHistory.19", obj["eHistory.19"].vSet[0]);
            }
        };

        XML.writeEndElement()
    };
    //Payment
    if (typeof TheCall.ePayment != 'undefined') {
        var obj = {};
        var obj = TheCall.ePayment;
        XML.writeStartElement("ePayment")
        if (typeof obj["ePayment.01"] != 'undefined') {
            if (obj["ePayment.01"].IsNull == false) {
                XML.writeElementString("ePayment.01", obj["ePayment.01"].vSet[0]);
            }
            else {
                if (obj["ePayment.01"].NV == true) {
                    XML.writeStartElement('ePayment.01');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["ePayment.01"].vSet[0]);
                    XML.writeEndElement();
                }
                else if (obj["ePayment.01"].PN == true) {
                    XML.writeStartElement('ePayment.01');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('PN', obj["ePayment.01"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (obj["CertificateGroup"] > 0) {
            XML.writeStartElement("ePayment.CertificateGroup")
            if (typeof obj["ePayment.02"] != 'undefined') {
                if (obj["ePayment.02"].IsNull == false) {
                    XML.writeElementString("ePayment.02", obj["ePayment.02"].vSet[0]);
                }
            };
            if (typeof obj["ePayment.03"] != 'undefined') {
                if (obj["ePayment.03"].IsNull == false) {
                    XML.writeElementString("ePayment.03", obj["ePayment.03"].vSet[0]);
                }
            };

            if (typeof obj["ePayment.04"] != 'undefined') {
                if (obj["ePayment.04"].IsNull == false) {
                    for (var d = 0; d < obj["ePayment.04"].vSet.length; d++) {
                        XML.writeElementString("ePayment.04", obj["ePayment.04"].vSet[d]);
                    }
                }
            }
            if (typeof obj["ePayment.05"] != 'undefined') {
                if (obj["ePayment.05"].IsNull == false) {
                    XML.writeElementString("ePayment.05", obj["ePayment.05"].vSet[0]);
                }
            };
            if (typeof obj["ePayment.06"] != 'undefined') {
                if (obj["ePayment.06"].IsNull == false) {
                    XML.writeElementString("ePayment.06", obj["ePayment.06"].vSet[0]);
                }
            };
            if (typeof obj["ePayment.07"] != 'undefined') {
                if (obj["ePayment.07"].IsNull == false) {
                    XML.writeElementString("ePayment.07", obj["ePayment.07"].vSet[0]);
                }
            };
            XML.writeEndElement();
        };
        if (typeof obj["ePayment.08"] != 'undefined') {
            if (obj["ePayment.08"].IsNull == false) {
                XML.writeElementString("ePayment.08", obj["ePayment.08"].vSet[0]);
            }
        };
        if (obj["Insurancegroup"] > 0) {
            for (var d = 0; d < obj["InsuranceGroup"].length ; d++) {
                XML.writeStartElement("ePayment.InsuranceGroup")

                if (typeof obj["InsuranceGroup"][d]["ePayment.09"] != 'undefined') {
                    if (obj["InsuranceGroup"][d]["ePayment.09"].IsNull == false) {
                        XML.writeElementString("ePayment.09", obj["InsuranceGroup"][d]["ePayment.09"].vSet[0]);
                    }
                };
                if (typeof obj["InsuranceGroup"][d]["ePayment.10"] != 'undefined') {
                    if (obj["InsuranceGroup"][d]["ePayment.10"].IsNull == false) {
                        XML.writeElementString("ePayment.10", obj["InsuranceGroup"][d]["ePayment.10"].vSet[0]);
                    }
                };
                if (typeof obj["InsuranceGroup"][d]["ePayment.11"] != 'undefined') {
                    if (obj["InsuranceGroup"][d]["ePayment.11"].IsNull == false) {
                        XML.writeElementString("ePayment.11", obj["InsuranceGroup"][d]["ePayment.11"].vSet[0]);
                    }
                };
                if (typeof obj["InsuranceGroup"][d]["ePayment.12"] != 'undefined') {
                    if (obj["InsuranceGroup"][d]["ePayment.12"].IsNull == false) {
                        XML.writeElementString("ePayment.12", obj["InsuranceGroup"][d]["ePayment.12"].vSet[0]);
                    }
                };
                if (typeof obj["InsuranceGroup"][d]["ePayment.13"] != 'undefined') {
                    if (obj["InsuranceGroup"][d]["ePayment.13"].IsNull == false) {
                        XML.writeElementString("ePayment.13", obj["InsuranceGroup"][d]["ePayment.13"].vSet[0]);
                    }
                };
                if (typeof obj["InsuranceGroup"][d]["ePayment.14"] != 'undefined') {
                    if (obj["InsuranceGroup"][d]["ePayment.14"].IsNull == false) {
                        XML.writeElementString("ePayment.14", obj["InsuranceGroup"][d]["ePayment.14"].vSet[0]);
                    }
                };
                if (typeof obj["InsuranceGroup"][d]["ePayment.15"] != 'undefined') {
                    if (obj["InsuranceGroup"][d]["ePayment.15"].IsNull == false) {
                        XML.writeElementString("ePayment.15", obj["InsuranceGroup"][d]["ePayment.15"].vSet[0]);
                    }
                };
                if (typeof obj["InsuranceGroup"][d]["ePayment.16"] != 'undefined') {
                    if (obj["InsuranceGroup"][d]["ePayment.16"].IsNull == false) {
                        XML.writeElementString("ePayment.16", obj["InsuranceGroup"][d]["ePayment.16"].vSet[0]);
                    }
                };
                if (typeof obj["InsuranceGroup"][d]["ePayment.17"] != 'undefined') {
                    if (obj["InsuranceGroup"][d]["ePayment.17"].IsNull == false) {
                        XML.writeElementString("ePayment.17", obj["InsuranceGroup"][d]["ePayment.17"].vSet[0]);
                    }
                };
                if (typeof obj["InsuranceGroup"][d]["ePayment.18"] != 'undefined') {
                    if (obj["InsuranceGroup"][d]["ePayment.18"].IsNull == false) {
                        XML.writeElementString("ePayment.18", obj["InsuranceGroup"][d]["ePayment.18"].vSet[0]);
                    }
                };
                if (typeof obj["InsuranceGroup"][d]["ePayment.19"] != 'undefined') {
                    if (obj["InsuranceGroup"][d]["ePayment.19"].IsNull == false) {
                        XML.writeElementString("ePayment.19", obj["InsuranceGroup"][d]["ePayment.19"].vSet[0]);
                    }
                };
                if (typeof obj["InsuranceGroup"][d]["ePayment.20"] != 'undefined') {
                    if (obj["InsuranceGroup"][d]["ePayment.20"].IsNull == false) {
                        XML.writeElementString("ePayment.20", obj["InsuranceGroup"][d]["ePayment.20"].vSet[0]);
                    }
                };
                if (typeof obj["InsuranceGroup"][d]["ePayment.21"] != 'undefined') {
                    if (obj["InsuranceGroup"][d]["ePayment.21"].IsNull == false) {
                        XML.writeElementString("ePayment.21", obj["InsuranceGroup"][d]["ePayment.21"].vSet[0]);
                    }
                };
                if (typeof obj["InsuranceGroup"][d]["ePayment.22"] != 'undefined') {
                    if (obj["InsuranceGroup"][d]["ePayment.22"].IsNull == false) {
                        XML.writeElementString("ePayment.22", obj["InsuranceGroup"][d]["ePayment.22"].vSet[0]);
                    }
                };

                XML.writeEndElement();
            }
        };

        if (obj["ClosestRelativeGroup"] != -1) {
            XML.writeStartElement("ePayment.ClosestRelativeGroup")
            if (typeof obj["ePayment.23"] != 'undefined') {
                if (obj["ePayment.23"].IsNull == false) {
                    XML.writeElementString("ePayment.23", obj["ePayment.23"].vSet[0]);
                }
            };

            if (typeof obj["ePayment.27"] != 'undefined') {
                if (obj["ePayment.27"].IsNull == false) {
                    XML.writeElementString("ePayment.27", obj["ePayment.27"].vSet[0]);
                }
            };
            if (typeof obj["ePayment.25"] != 'undefined') {
                if (obj["ePayment.25"].IsNull == false) {
                    XML.writeElementString("ePayment.25", obj["ePayment.25"].vSet[0]);
                }
            };

            if (typeof obj["ePayment.26"] != 'undefined') {
                if (obj["ePayment.26"].IsNull == false) {
                    XML.writeElementString("ePayment.26", obj["ePayment.26"].vSet[0]);
                }
            };

            if (typeof obj["ePayment.27"] != 'undefined') {
                if (obj["ePayment.27"].IsNull == false) {
                    XML.writeElementString("ePayment.27", obj["ePayment.27"].vSet[0]);
                }
            };

            if (typeof obj["ePayment.28"] != 'undefined') {
                if (obj["ePayment.28"].IsNull == false) {
                    XML.writeElementString("ePayment.28", obj["ePayment.28"].vSet[0]);
                }
            };

            if (typeof obj["ePayment.29"] != 'undefined') {
                if (obj["ePayment.29"].IsNull == false) {
                    XML.writeElementString("ePayment.29", obj["ePayment.29"].vSet[0]);
                }
            };

            if (typeof obj["ePayment.30"] != 'undefined') {
                if (obj["ePayment.30"].IsNull == false) {
                    XML.writeElementString("ePayment.30", obj["ePayment.30"].vSet[0]);
                }
            };

            if (typeof obj["ePayment.31"] != 'undefined') {
                if (obj["ePayment.31"].IsNull == false) {
                    for (var d = 0; d < obj["ePayment.31"].vSet.length; d++) {
                        XML.writeElementString("ePayment.31", obj["ePayment.31"].vSet[d]);
                    }
                }
            };

            if (typeof obj["ePayment.32"] != 'undefined') {
                if (obj["ePayment.32"].IsNull == false) {
                    XML.writeElementString("ePayment.32", obj["ePayment.32"].vSet[0]);
                }
            };

            XML.writeEndElement();
        };
        if (obj["EmployerGroup"] > 0) {
            XML.writeStartElement("ePayment.EmployerGroup")
            if (typeof obj["ePayment.33"] != 'undefined') {
                if (obj["ePayment.33"].IsNull == false) {
                    XML.writeElementString("ePayment.33", obj["ePayment.33"].vSet[0]);
                }
            };

            if (typeof obj["ePayment.34"] != 'undefined') {
                if (obj["ePayment.34"].IsNull == false) {
                    XML.writeElementString("ePayment.34", obj["ePayment.34"].vSet[0]);
                }
            };

            if (typeof obj["ePayment.35"] != 'undefined') {
                if (obj["ePayment.35"].IsNull == false) {
                    XML.writeElementString("ePayment.35", obj["ePayment.35"].vSet[0]);
                }
            };

            if (typeof obj["ePayment.36"] != 'undefined') {
                if (obj["ePayment.36"].IsNull == false) {
                    XML.writeElementString("ePayment.36", obj["ePayment.36"].vSet[0]);
                }
            };

            if (typeof obj["ePayment.37"] != 'undefined') {
                if (obj["ePayment.37"].IsNull == false) {
                    XML.writeElementString("ePayment.37", obj["ePayment.37"].vSet[0]);
                }
            };

            if (typeof obj["ePayment.38"] != 'undefined') {
                if (obj["ePayment.38"].IsNull == false) {
                    XML.writeElementString("ePayment.38", obj["ePayment.38"].vSet[0]);
                }
            };

            if (typeof obj["ePayment.39"] != 'undefined') {
                if (obj["ePayment.39"].IsNull == false) {
                    XML.writeElementString("ePayment.39", obj["ePayment.39"].vSet[0]);
                }
            };

            XML.writeEndElement();
        };

        if (typeof obj["ePayment.40"] != 'undefined') {
            if (obj["ePayment.40"].IsNull == false) {
                XML.writeElementString("ePayment.40", obj["ePayment.40"].vSet[0]);
            }
        };
        if (typeof obj["ePayment.41"] != 'undefined') {
            if (obj["ePayment.41"].IsNull == false) {
                for (var d = 0; d < obj["ePayment.41"].vSet.length; d++) {
                    XML.writeElementString("ePayment.41", obj["ePayment.41"].vSet[d]);
                }
            }
        };
        if (typeof obj["ePayment.42"] != 'undefined') {
            if (obj["ePayment.42"].IsNull == false) {
                for (var d = 0; d < obj["ePayment.42"].vSet.length; d++) {
                    XML.writeElementString("ePayment.42", obj["ePayment.42"].vSet[d]);
                }
            }
        };
        if (typeof obj["ePayment.43"] != 'undefined') {
            if (obj["ePayment.43"].IsNull == false) {
                XML.writeElementString("ePayment.43", obj["ePayment.43"].vSet[0]);
            }
        };
        if (typeof obj["ePayment.44"] != 'undefined') {
            if (obj["ePayment.44"].IsNull == false) {
                for (var d = 0; d < obj["ePayment.44"].vSet.length; d++) {
                    XML.writeElementString("ePayment.44", obj["ePayment.44"].vSet[d]);
                }
            }
        };
        if (typeof obj["ePayment.45"] != 'undefined') {
            if (obj["ePayment.45"].IsNull == false) {
                XML.writeElementString("ePayment.45", obj["ePayment.45"].vSet[0]);
            }
        }
        if (typeof obj["ePayment.46"] != 'undefined') {
            if (obj["ePayment.46"].IsNull == false) {
                XML.writeElementString("ePayment.46", obj["ePayment.46"].vSet[0]);
            }
        }
        if (typeof obj["ePayment.47"] != 'undefined') {
            if (obj["ePayment.47"].IsNull == false) {
                for (var d = 0; d < obj["ePayment.47"].vSet.length; d++) {
                    XML.writeElementString("ePayment.47", obj["ePayment.47"].vSet[d]);
                }
            }
        }
        if (typeof obj["ePayment.48"] != 'undefined') {
            if (obj["ePayment.48"].IsNull == false) {
                XML.writeElementString("ePayment.48", obj["ePayment.48"].vSet[0]);
            }
        }
        if (typeof obj["ePayment.49"] != 'undefined') {
            if (obj["ePayment.49"].IsNull == false) {
                XML.writeElementString("ePayment.49", obj["ePayment.49"].vSet[0]);
            }
        };

        if (typeof obj["ePayment.50"] != 'undefined') {
            if (obj["ePayment.50"].IsNull == false) {
                XML.writeElementString("ePayment.50", obj["ePayment.50"].vSet[0]);
            }
            else {
                if (obj["ePayment.50"].NV == true) {
                    XML.writeStartElement('ePayment.50');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["ePayment.50"].vSet[0]);
                    XML.writeEndElement();

                };
                if (typeof obj["ePayment.51"] != 'undefined') {
                    if (obj["ePayment.51"].IsNull == false) {
                        for (var d = 0; d < obj["ePayment.51"].vSet.length; d++) {
                            XML.writeElementString("ePayment.51", obj["ePayment.51"].vSet[d]);
                        }
                    }
                }

                if (typeof obj["ePayment.52"] != 'undefined') {
                    if (obj["ePayment.52"].IsNull == false) {
                        for (var d = 0; d < obj["ePayment.52"].vSet.length; d++) {
                            XML.writeElementString("ePayment.52", obj["ePayment.52"].vSet[d]);
                        }
                    }
                };

                if (typeof obj["ePayment.53"] != 'undefined') {
                    if (obj["ePayment.53"].IsNull == false) {
                        XML.writeElementString("ePayment.53", obj["ePayment.53"].vSet[0]);
                    }
                };

                if (typeof obj["ePayment.54"] != 'undefined') {
                    if (obj["ePayment.54"].IsNull == false) {
                        XML.writeElementString("ePayment.54", obj["ePayment.54"].vSet[0]);
                    }
                };

                if (obj["SupplyItemGroup"] > 0) {
                    for (var d = 0; d < obj["SupplyItemGroup"].length ; d++) {
                        XML.writeStartElement("ePayment.SupplyItemGroup")
                        if (typeof obj["SupplyItemGroup"][d]["ePayment.55"] != 'undefined') {
                            if (obj["SupplyItemGroup"][d]["ePayment.55"].IsNull == false) {
                                XML.writeElementString("ePayment.55", obj["SupplyItemGroup"][d]["ePayment.55"].vSet[0]);
                            }
                        };

                        if (typeof obj["SupplyItemGroup"][d]["ePayment.56"] != 'undefined') {
                            if (obj["SupplyItemGroup"][d]["ePayment.56"].IsNull == false) {
                                XML.writeElementString("ePayment.56", obj["SupplyItemGroup"][d]["ePayment.56"].vSet[0]);
                            }
                        };
                        XML.writeEndElement();
                    }
                }
            }
        }
    };
    //Situation
    if (typeof TheCall.eSituation != 'undefined') {
        XML.writeStartElement("eSituation")
        var obj = {};
        var obj = TheCall.eSituation;
        if (typeof obj["eSituation.01"] != 'undefined') {
            if (obj["eSituation.01"].IsNull == false) {
                XML.writeElementString("eSituation.01", obj["eSituation.01"].vSet[0]);
            }
            else {
                if (obj["eSituation.01"].NV == true) {
                    XML.writeStartElement('eSituation.01');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eSituation.01"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof obj["eSituation.02"] != 'undefined') {
            if (obj["eSituation.02"].IsNull == false) {
                XML.writeElementString("eSituation.02", obj["eSituation.02"].vSet[0]);
            }
            else {
                if (obj["eSituation.02"].NV == true) {
                    XML.writeStartElement('eSituation.02');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eSituation.02"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof obj["PatientComplaintGroup"] !='undefined') {
            if (obj["PatientComplaintGroup"] !=-1) {
                for (var d = 0; d < obj["PatientComplaintGroup"].length ; d++) {
                    XML.writeStartElement("eSituation.PatientComplaintGroup")

                    if (typeof obj["PatientComplaintGroup"][d]["eSituation.03"] != 'undefined') {
                        if (obj["PatientComplaintGroup"][d]["eSituation.03"].IsNull == false) {
                            XML.writeElementString("eSituation.03", obj["PatientComplaintGroup"][d]["eSituation.03"].vSet[0]);
                        }
                        else {
                            if (obj["PatientComplaintGroup"][d]["eSituation.03"].NV == true) {
                                XML.writeStartElement('eSituation.03');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj["PatientComplaintGroup"][d]["eSituation.03"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    };

                    if (typeof obj["PatientComplaintGroup"][d]["eSituation.04"] != 'undefined') {
                        if (obj["PatientComplaintGroup"][d]["eSituation.04"].IsNull == false) {
                            XML.writeElementString("eSituation.04", obj["PatientComplaintGroup"][d]["eSituation.04"].vSet[0]);
                        }
                        else {
                            if (obj["PatientComplaintGroup"][d]["eSituation.04"].NV == true) {
                                XML.writeStartElement('eSituation.04');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj["PatientComplaintGroup"][d]["eSituation.04"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    };

                    if (typeof obj["PatientComplaintGroup"][d]["eSituation.05"] != 'undefined') {
                        if (obj["PatientComplaintGroup"][d]["eSituation.05"].IsNull == false) {
                            XML.writeElementString("eSituation.05", obj["PatientComplaintGroup"][d]["eSituation.05"].vSet[0]);
                        }
                        else {
                            if (obj["PatientComplaintGroup"][d]["eSituation.05"].NV == true) {
                                XML.writeStartElement('eSituation.05');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj["PatientComplaintGroup"][d]["eSituation.05"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    };

                    if (typeof obj["PatientComplaintGroup"][d]["eSituation.06"] != 'undefined') {
                        if (obj["PatientComplaintGroup"][d]["eSituation.06"].IsNull == false) {
                            XML.writeElementString("eSituation.06", obj["PatientComplaintGroup"][d]["eSituation.06"].vSet[0]);
                        }
                        else {
                            if (obj["PatientComplaintGroup"][d]["eSituation.06"].NV == true) {
                                XML.writeStartElement('eSituation.06');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj["PatientComplaintGroup"][d]["eSituation.06"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    };
                    XML.writeEndElement();
                }
            }
        };
        if (typeof obj["eSituation.07"] != 'undefined') {
            if (obj["eSituation.07"].IsNull == false) {
                XML.writeElementString("eSituation.07", obj["eSituation.07"].vSet[0]);
            }
            else {
                if (obj["eSituation.07"].NV == true) {
                    XML.writeStartElement('eSituation.07');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eSituation.07"].vSet[0]);
                    XML.writeEndElement();

                };
            }
        };
        if (typeof obj["eSituation.08"] != 'undefined') {
            if (obj["eSituation.08"].IsNull == false) {
                XML.writeElementString("eSituation.08", obj["eSituation.08"].vSet[0]);
            }
            else {
                if (obj["eSituation.08"].NV == true) {
                    XML.writeStartElement('eSituation.08');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eSituation.08"].vSet[0]);
                    XML.writeEndElement();

                };
            }
        };
        if (typeof obj["eSituation.09"] != 'undefined') {
            if (obj["eSituation.09"].IsNull == false) {
                XML.writeElementString("eSituation.09", obj["eSituation.09"].vSet[0]);
            }
            else {
                if (obj["eSituation.09"].NV == true) {
                    XML.writeStartElement('eSituation.09');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eSituation.09"].vSet[0]);
                    XML.writeEndElement();

                };
            }
        };
        if (typeof obj["eSituation.10"] != 'undefined') {
            if (obj["eSituation.10"].IsNull == false) {
                for (var d = 0; d < obj["eSituation.10"].vSet.length ; d++) {
                    XML.writeElementString("eSituation.10", obj["eSituation.10"].vSet[d].val);
                }
            }
            else {
                if (obj["eSituation.10"].NV == true) {
                    XML.writeStartElement('eSituation.10');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eSituation.10"].vSet[0]);
                    XML.writeEndElement();

                };
            }
        };
        if (typeof obj["eSituation.11"] != 'undefined') {
            if (obj["eSituation.11"].IsNull == false) {
                XML.writeElementString("eSituation.11", obj["eSituation.11"].vSet[0]);
            }
        };

        if (typeof obj["eSituation.12"] != 'undefined') {
            if (obj["eSituation.12"].IsNull == false) {
                for (var d = 0; d < obj["eSituation.12"].vSet.length ; d++) {
                    XML.writeElementString("eSituation.12", obj["eSituation.12"].vSet[d].val);
                }
            }
            else {
                if (obj["eSituation.12"].NV == true) {
                    XML.writeStartElement('eSituation.12');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eSituation.12"].vSet[0]);
                    XML.writeEndElement();
                };
            }
        };

        if (typeof obj["eSituation.13"] != 'undefined') {
            if (obj["eSituation.13"].IsNull == false) {
                XML.writeElementString("eSituation.13", obj["eSituation.13"].vSet[0]);
            }
        };
        if (typeof obj["WorkRelatedGroup"] != 'undefined') {
            if (obj["WorkRelatedGroup"] !=-1) {
                XML.writeStartElement("eSituation.WorkRelatedGroup")

                if (typeof obj["eSituation.14"] != 'undefined') {
                    if (obj["eSituation.14"].IsNull == false) {
                        XML.writeElementString("eSituation.14", obj["eSituation.14"].vSet[0]);
                    }

                    else {
                        if (obj["eSituation.14"].NV == true) {
                            XML.writeStartElement('eSituation.14');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eSituation.14"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };
                if (typeof obj["eSituation.15"] != 'undefined') {
                    if (obj["eSituation.15"].IsNull == false) {
                        XML.writeElementString("eSituation.15", obj["eSituation.15"].vSet[0]);
                    }
                };
                if (typeof obj["eSituation.16"] != 'undefined') {
                    if (obj["eSituation.16"].IsNull == false) {
                        XML.writeElementString("eSituation.16", obj["eSituation.16"].vSet[0]);
                    }
                };
                XML.writeEndElement();
            }
        };

        if (typeof obj["eSituation.17"] != 'undefined') {
            if (obj["eSituation.17"].IsNull == false) {
                for (var d = 0; d < obj["eSituation.17"].vSet.length ; d++) {
                    XML.writeElementString("eSituation.17", obj["eSituation.17"].vSet[d].val);
                }
            }
            else {
                if (obj["eSituation.17"].NV == true) {
                    XML.writeStartElement('eSituation.17');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eSituation.17"].vSet[0]);
                    XML.writeEndElement();
                }
            };
        };
        XML.writeEndElement();
    };
    //eScene
    if (typeof TheCall.eScene != 'undefined') {
        var obj = {};
        var obj = TheCall.eScene
        XML.writeStartElement("eScene")
        if (typeof obj["eScene.01"] != 'undefined')
        {
            if (obj["eScene.01"].IsNull == false) {
                XML.writeElementString("eScene.01", obj["eScene.01"].vSet[0]);
            }
            else {
                if (obj["eScene.01"].NV == true) {
                    XML.writeStartElement('eScene.01');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eScene.01"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof obj["ResponderGroup"] != 'undefined')
        {
            if (obj["ResponderGroup"] != -1) {
                for (var d = 0; d < obj["ResponderGroup"].length ; d++) {
    
                    XML.writeStartElement("eScene.ResponderGroup")

                    if (typeof obj["ResponderGroup"][d]["eScene.02"] != 'undefined') {
                        if (obj["ResponderGroup"][d]["eScene.02"].IsNull == false) {
                            XML.writeElementString("eScene.02", obj["ResponderGroup"][d]["eScene.02"].vSet[0]);
                        }
                    };

                    if (typeof obj["ResponderGroup"][d]["eScene.03"] != 'undefined') {
                        if (obj["ResponderGroup"][d]["eScene.03"].IsNull == false) {
                            XML.writeElementString("eScene.03", obj["ResponderGroup"][d]["eScene.03"].vSet[0]);
                        }
                    };

                    if (typeof obj["ResponderGroup"][d]["eScene.04"] != 'undefined') {
                        if (obj["ResponderGroup"][d]["eScene.04"].IsNull == false) {
                            XML.writeElementString("eScene.04", obj["ResponderGroup"][d]["eScene.04"].vSet[0]);
                        }
                    }
                    XML.writeEndElement();
                };
            };


            if (typeof obj["eScene.05"] != 'undefined') {
                if (obj["eScene.05"].IsNull == false) {
                    XML.writeElementString("eScene.05", obj["eScene.05"].vSet[0]);
                }
            };

            if (typeof obj["eScene.06"] != 'undefined') 
            {
                if (obj["eScene.06"].IsNull == false) {
                    XML.writeElementString("eScene.06", obj["eScene.06"].vSet[0]);
                }
                else {
                    if (obj["eScene.06"].NV == true) {
                        XML.writeStartElement('eScene.06');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eScene.06"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof obj["eScene.07"] != 'undefined') 
            {
                if (obj["eScene.07"].IsNull == false) {
                    XML.writeElementString("eScene.07", obj["eScene.07"].vSet[0]);
                }
                else {
                    if (obj["eScene.07"].NV == true) {
                        XML.writeStartElement('eScene.07');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eScene.07"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof obj["eScene.08"] != 'undefined') 
            {
                if (obj["eScene.08"].IsNull == false) {
                    XML.writeElementString("eScene.08", obj["eScene.08"].vSet[0]);
                }
                else {
                    if (obj["eScene.08"].NV == true) {
                        XML.writeStartElement('eScene.08');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eScene.08"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof obj["eScene.09"] != 'undefined') 
            {
                if (obj["eScene.09"].IsNull == false) {
                    XML.writeElementString("eScene.09", obj["eScene.09"].vSet[0]);
                }
                else {
                    if (obj["eScene.09"].NV == true) {
                        XML.writeStartElement('eScene.09');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eScene.09"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof obj["eScene.10"] != 'undefined') 
            {
                if (obj["eScene.10"].IsNull == false) {
                    XML.writeElementString("eScene.10", obj["eScene.10"].vSet[0]);
                }
                else {
                    if (obj["eScene.10"].NV == true) {
                        XML.writeStartElement('eScene.10');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eScene.10"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof obj["eScene.11"] != 'undefined') 
            {
                if (obj["eScene.11"].IsNull == false) {
                    XML.writeElementString("eScene.11", obj["eScene.11"].vSet[0]);
                }
            };

            if (typeof obj["eScene.12"] != 'undefined') 
            {
                if (obj["eScene.12"].IsNull == false) {
                    XML.writeElementString("eScene.12", obj["eScene.12"].vSet[0]);
                }
            };


            if (typeof obj["eScene.13"] != 'undefined') 
            {
                if (obj["eScene.13"].IsNull == false) {
                    XML.writeElementString("eScene.13", obj["eScene.13"].vSet[0]);
                }
            };
            if (typeof obj["eScene.14"] != 'undefined') 
            {
                if (obj["eScene.14"].IsNull == false) {
                    XML.writeElementString("eScene.14", obj["eScene.14"].vSet[0]);
                }
                else {
                    if (obj["eScene.14"].NV == true) {
                        XML.writeStartElement('eScene.14');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eScene.14"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof obj["eScene.15"] != 'undefined') 
            {
                if (obj["eScene.15"].IsNull == false) {
                    XML.writeElementString("eScene.15", obj["eScene.15"].vSet[0]);
                }
                else {
                    if (obj["eScene.15"].NV == true) {
                        XML.writeStartElement('eScene.15');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eScene.15"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof obj["eScene.16"] != 'undefined') 
            {
                if (obj["eScene.16"].IsNull == false) {
                    XML.writeElementString("eScene.16", obj["eScene.16"].vSet[0]);
                }
                else {
                    if (obj["eScene.16"].NV == true) {
                        XML.writeStartElement('eScene.16');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eScene.16"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };
            if (typeof obj["eScene.17"] != 'undefined') 
            {
                if (obj["eScene.17"].IsNull == false) {
                    XML.writeElementString("eScene.17", obj["eScene.17"].vSet[0]);
                }
                else {
                    if (obj["eScene.17"].NV == true) {
                        XML.writeStartElement('eScene.17');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eScene.17"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };
            if (typeof obj["eScene.18"] != 'undefined') 
            {
                if (obj["eScene.18"].IsNull == false) {
                    XML.writeElementString("eScene.18", obj["eScene.18"].vSet[0]);
                }
                else {
                    if (obj["eScene.18"].NV == true) {
                        XML.writeStartElement('eScene.18');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eScene.18"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };
            if (typeof obj["eScene.19"] != 'undefined') 
            {
                if (obj["eScene.19"].IsNull == false) {
                    XML.writeElementString("eScene.19", obj["eScene.19"].vSet[0]);
                }
                else {
                    if (obj["eScene.19"].NV == true) {
                        XML.writeStartElement('eScene.19');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eScene.19"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };
            if (typeof obj["eScene.20"] != 'undefined') 
            {
                if (obj["eScene.20"].IsNull == false) {
                    XML.writeElementString("eScene.20", obj["eScene.20"].vSet[0]);
                }
                else {
                    if (obj["eScene.20"].NV == true) {
                        XML.writeStartElement('eScene.20');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eScene.20"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof obj["eScene.21"] != 'undefined') 
            {
                if (obj["eScene.21"].IsNull == false) {
                    XML.writeElementString("eScene.21", obj["eScene.21"].vSet[0]);
                }
                else {
                    if (obj["eScene.21"].NV == true) {
                        XML.writeStartElement('eScene.21');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eScene.21"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof obj["eScene.22"] != 'undefined') 
            {
                if (obj["eScene.22"].IsNull == false) {
                    XML.writeElementString("eScene.22", obj["eScene.22"].vSet[0]);
                }
            };

            if (typeof obj["eScene.23"] != 'undefined') 
            {
                if (obj["eScene.23"].IsNull == false) {
                    XML.writeElementString("eScene.23", obj["eScene.23"].vSet[0]);
                }           
            }          
        };
        XML.writeEndElement();
    };
    //eAirway
    if (typeof TheCall.eAirway != 'undefined') {
        var obj = {};
        var obj = TheCall.eAirway
        if (typeof obj.AirwayGroup != 'undefined') {

            XML.writeStartElement("eAirway.AirwayGroup")


            if (typeof obj.AirwayGroup["eAirway.01"] != 'undefined')
            {
                if (obj.AirwayGroup["eAirway.01"].IsNull == false)
                {
                    for (var i = 0; i < obj.AirwayGroup["eAirway.01"].vSet.length; i++) {
                        XML.writeElementString("eAirway.01", obj.AirwayGroup["eAirway.01"].vSet[i]);
                    }
                }
                else {
                    if (obj.AirwayGroup["eAirway.01"].NV == true) {

                        XML.writeStartElement('eAirway.01');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj.AirwayGroup["eAirway.01"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };


            if (typeof obj.ConfirmationGroup != 'undefined') {
                for (var d = 0; d < obj.AirwayGroup["ConfirmationGroup"].length ; d++) {
                    XML.writeStartElement("eAirway.ConfirmationGroup");

                    if (typeof obj.AirwayGroup.ConfirmationGroup[d]["eAirway.02"] != 'undefined') {
                        if (obj.AirwayGroup.ConfirmationGroup[d]["eAirway.02"].IsNull == false) {
                            XML.writeElementString("eAirway.02", obj.AirwayGroup.ConfirmationGroup[d]["eAirway.02"].vSet[0]);
                        }
                        else {
                            if (obj.AirwayGroup.ConfirmationGroup[d]["eAirway.02"].NV == true) {

                                XML.writeStartElement("eAirway.02");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.AirwayGroup.ConfirmationGroup[d]["eAirway.02"].vSet[0]);
                                XML.writeEndElement();
                            };
                        }
                    };

                    if (typeof obj.AirwayGroup.ConfirmationGroup[d]["eAirway.03"] != 'undefined') {
                        if (obj.AirwayGroup.ConfirmationGroup[d]["eAirway.03"].IsNull == false) {
                            XML.writeElementString("eAirway.03", obj.AirwayGroup.ConfirmationGroup[d]["eAirway.03"].vSet[0]);
                        }
                        else {
                            if (obj.AirwayGroup.ConfirmationGroup[d]["eAirway.03"].NV == true) {

                                XML.writeStartElement("eAirway.03");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.AirwayGroup.ConfirmationGroup[d]["eAirway.03"].vSet[0]);
                                XML.writeEndElement();
                            };
                        }
                    };

                    if (typeof obj.AirwayGroup.ConfirmationGroup[d]["eAirway.04"] != 'undefined') {
                        if (obj.AirwayGroup.ConfirmationGroup[d]["eAirway.04"].IsNull == false) {
                            for (var i = 0; i < obj.AirwayGroup["ConfirmationGroup"][d]["eAirway.04"].vSet.length ; i++) {
                                {
                                    XML.writeElementString("eAirway.04", obj.AirwayGroup.ConfirmationGroup[d]["eAirway.04"].vSet[i]);
                                }
                            }
                        }
                        else {
                            if (obj.AirwayGroup.ConfirmationGroup[d]["eAirway.04"].NV == true) {

                                XML.writeStartElement("eAirway.04");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.AirwayGroup.ConfirmationGroup[d]["eAirway.04"].vSet[0]);
                                XML.writeEndElement();
                            };
                        }
                    };


                    if (typeof obj.AirwayGroup.ConfirmationGroup[d]["eAirway.05"] != 'undefined') {
                        if (obj.AirwayGroup.ConfirmationGroup[d]["eAirway.05"].IsNull == false) {
                            XML.writeElementString("eAirway.05", obj.AirwayGroup.ConfirmationGroup[d]["eAirway.05"].vSet[0]);
                        }
                        else {
                            if (obj.AirwayGroup.ConfirmationGroup[d]["eAirway.05"].NV == true) {

                                XML.writeStartElement("eAirway.05");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.AirwayGroup.ConfirmationGroup[d]["eAirway.05"].vSet[0]);
                                XML.writeEndElement();
                            };
                        }
                    };

                    if (typeof obj.AirwayGroup.ConfirmationGroup[d]["eAirway.06"] != 'undefined') {
                        if (obj.AirwayGroup.ConfirmationGroup[d]["eAirway.06"].IsNull == false) {
                            XML.writeElementString("eAirway.06", obj.AirwayGroup.ConfirmationGroup[d]["eAirway.06"].vSet[0]);
                        }
                        else {
                            if (obj.AirwayGroup.ConfirmationGroup[d]["eAirway.06"].NV == true) {

                                XML.writeStartElement("eAirway.06");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.AirwayGroup.ConfirmationGroup[d]["eAirway.06"].vSet[0]);
                                XML.writeEndElement();
                            };
                        }
                    };


                    if (typeof obj.AirwayGroup.ConfirmationGroup[d]["eAirway.07"] != 'undefined') {
                        if (obj.AirwayGroup.ConfirmationGroup[d]["eAirway.07"].IsNull == false) {
                            XML.writeElementString("eAirway.07", obj.AirwayGroup.ConfirmationGroup[d]["eAirway.07"].vSet[0]);
                        }
                        else {
                            if (obj.AirwayGroup.ConfirmationGroup[d]["eAirway.07"].NV == true) {

                                XML.writeStartElement("eAirway.07");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.AirwayGroup.ConfirmationGroup[d]["eAirway.07"].vSet[0]);
                                XML.writeEndElement();
                            };
                        }
                    };

                    if (typeof obj.AirwayGroup.ConfirmationGroup[d]["eAirway.08"] != 'undefined') {
                        if (obj.AirwayGroup.ConfirmationGroup[d]["eAirway.08"].IsNull == false) {
                            for (var i = 0; i < obj.AirwayGroup["ConfirmationGroup"][d]["eAirway.08"].vSet.length ; i++) {
                                {
                                    XML.writeElementString("eAirway.08", obj.AirwayGroup.ConfirmationGroup[d]["eAirway.08"].vSet[i]);
                                }
                            }
                        }
                        else {
                            if (obj.AirwayGroup.ConfirmationGroup[d]["eAirway.08"].NV == true) {

                                XML.writeStartElement("eAirway.08");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.AirwayGroup.ConfirmationGroup[d]["eAirway.08"].vSet[0]);
                                XML.writeEndElement();
                            };
                        }
                    };


                    if (typeof obj.AirwayGroup.ConfirmationGroup[d]["eAirway.09"] != 'undefined') {
                        if (obj.AirwayGroup.ConfirmationGroup[d]["eAirway.09"].IsNull == false) {
                            for (var i = 0; i < obj.AirwayGroup["ConfirmationGroup"][d]["eAirway.09"].vSet.length ; i++) {
                                {
                                    XML.writeElementString("eAirway.09", obj.AirwayGroup.ConfirmationGroup[d]["eAirway.09"].vSet[i]);
                                }
                            }
                        }
                        else {
                            if (obj.AirwayGroup.ConfirmationGroup[d]["eAirway.09"].NV == true) {

                                XML.writeStartElement("eAirway.09");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.AirwayGroup.ConfirmationGroup[d]["eAirway.09"].vSet[0]);
                                XML.writeEndElement();
                            };
                        }
                    };

                    XML.writeEndElement();
                };
                if (typeof obj.AirwayGroup["eAirway.10"] != 'undefined') {
                    if (obj.AirwayGroup["eAirway.10"].IsNull == false) {
                        XML.writeElementString("eAirway.10", obj.AirwayGroup["eAirway.10"].vSet[0]);
                    }
                };

                if (typeof obj.AirwayGroup["eAirway.11"] != 'undefined') {
                    if (obj.AirwayGroup["eAirway.11"].IsNull == false) {
                        XML.writeElementString("eAirway.11", obj.AirwayGroup["eAirway.11"].vSet[0]);
                    }
                };
            };
            XML.writeEndElement();
        }
    };
    //eArrest
    if (typeof TheCall.eArrest != 'undefined')
    {
        var obj = {};
        var obj = TheCall.eArrest
        XML.writeStartElement("eArrest")
        if (typeof obj["eArrest.01"] != 'undefined') {
            if (obj["eArrest.01"].IsNull == false) {
                XML.writeElementString("eArrest.01", obj["eArrest.01"].vSet[0]);
            }
            else {
                if (obj["eArrest.01"].NV == true) {
                    XML.writeStartElement('eArrest.01');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eArrest.01"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        
        if (typeof obj["eArrest.02"] != 'undefined') {
            if (obj["eArrest.02"].IsNull == false) {
                XML.writeElementString("eArrest.02", obj["eArrest.02"].vSet[0]);
            }
            else {
                if (obj["eArrest.02"].NV == true) {
                    XML.writeStartElement('eArrest.02');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eArrest.02"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        
        if (typeof obj["eArrest.03"] != 'undefined') {
            if (obj["eArrest.03"].IsNull == false) {
                for (var i = 0; i < obj["eArrest.03"].vSet.length; i++) 
                {
                    XML.writeElementString("eArrest.03", obj["eArrest.03"].vSet[i]);
                }
            }
            else {
                if (obj["eArrest.03"].NV == true) {
                    XML.writeStartElement('eArrest.03');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eArrest.03"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof obj["eArrest.04"] != 'undefined') 
        {
            if (obj["eArrest.04"].IsNull == false) 
            {
                for (var i = 0; i < obj["eArrest.04"].vSet.length; i++) 
                {
                    XML.writeElementString("eArrest.04", obj["eArrest.04"].vSet[i]);
                }            
            }
            else {
                if (obj["eArrest.04"].NV == true) {
                    XML.writeStartElement('eArrest.04');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eArrest.04"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof obj["eArrest.05"] != 'undefined') {
            if (obj["eArrest.05"].IsNull == false) {
                XML.writeElementString("eArrest.05", obj["eArrest.05"].vSet[0]);
            }
            else {
                if (obj["eArrest.05"].NV == true) {
                    XML.writeStartElement('eArrest.05');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eArrest.05"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        
        if (typeof obj["eArrest.06"] != 'undefined') 
        {
            if (obj["eArrest.06"].IsNull == false) 
            {
                for (var i = 0; i < obj["eArrest.06"].vSet.length; i++) 
                {
                    XML.writeElementString("eArrest.06", obj["eArrest.06"].vSet[i]);
                }                       
            }
        };

        if (typeof obj["eArrest.07"] != 'undefined') {
            if (obj["eArrest.07"].IsNull == false) {
                XML.writeElementString("eArrest.07", obj["eArrest.07"].vSet[0]);
            }
            else {
                if (obj["eArrest.07"].NV == true) {
                    XML.writeStartElement('eArrest.07');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eArrest.07"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof obj["eArrest.08"] != 'undefined') 
        {
            if (obj["eArrest.08"].IsNull == false) 
            {
                for (var i = 0; i < obj["eArrest.08"].vSet.length; i++) 
                {
                    XML.writeElementString("eArrest.08", obj["eArrest.08"].vSet[i]);
                }                        
            }          
        };

        if (typeof obj["eArrest.09"] != 'undefined') {
            if (obj["eArrest.09"].IsNull == false) {
                for (var i = 0; i < obj["eArrest.09"].vSet.length; i++) {
                    XML.writeElementString("eArrest.09", obj["eArrest.09"].vSet[i]);
                }
            }
            else {
                if (obj["eArrest.09"].NV == true) {
                    XML.writeStartElement('eArrest.09');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eArrest.09"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof obj["eArrest.10"] != 'undefined') {
            if (obj["eArrest.10"].IsNull == false) {
                XML.writeElementString("eArrest.10", obj["eArrest.10"].vSet[0]);
            }
            else {
                if (obj["eArrest.10"].NV == true) {
                    XML.writeStartElement('eArrest.10');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eArrest.10"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof obj["eArrest.11"] != 'undefined') {
            if (obj["eArrest.11"].IsNull == false) {
                XML.writeElementString("eArrest.11", obj["eArrest.11"].vSet[0]);
            }
            else {
                if (obj["eArrest.11"].NV == true) {
                    XML.writeStartElement('eArrest.11');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eArrest.11"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof obj["eArrest.12"] != 'undefined') {
            if (obj["eArrest.12"].IsNull == false) {
                for (var i = 0; i < obj["eArrest.12"].vSet.length; i++) 
                {
                    XML.writeElementString("eArrest.12", obj["eArrest.12"].vSet[i]);
                }                    }
            else {
                if (obj["eArrest.12"].NV == true) {
                    XML.writeStartElement('eArrest.12');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eArrest.12"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof obj["eArrest.13"] != 'undefined') 
        {
            if (obj["eArrest.13"].IsNull == false)
            {
                XML.writeElementString("eArrest.13", obj["eArrest.13"].vSet[0]);
            }
        };
         

        if (typeof obj["eArrest.14"] != 'undefined') {
            if (obj["eArrest.14"].IsNull == false) {
                XML.writeElementString("eArrest.14", obj["eArrest.14"].vSet[0]);
            }
            else {
                if (obj["eArrest.14"].NV == true) {
                    XML.writeStartElement('eArrest.14');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eArrest.14"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof obj["eArrest.15"] != 'undefined') {
            if (obj["eArrest.15"].IsNull == false) {
                XML.writeElementString("eArrest.15", obj["eArrest.15"].vSet[0]);
            }
            else {
                if (obj["eArrest.15"].NV == true) {
                    XML.writeStartElement('eArrest.15');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eArrest.15"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof obj["eArrest.16"] != 'undefined') {
            if (obj["eArrest.16"].IsNull == false) {
                XML.writeElementString("eArrest.16", obj["eArrest.16"].vSet[0]);
            }
            else {
                if (obj["eArrest.16"].NV == true) {
                    XML.writeStartElement('eArrest.16');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eArrest.16"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof obj["eArrest.17"] != 'undefined') {
            if (obj["eArrest.17"].IsNull == false) {
                for (var i = 0; i < obj["eArrest.17"].vSet.length; i++) {
                    XML.writeElementString("eArrest.17", obj["eArrest.17"].vSet[i]);
                }
            }
            else {
                if (obj["eArrest.17"].NV == true) {
                    XML.writeStartElement('eArrest.17');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eArrest.17"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof obj["eArrest.18"] != 'undefined') {
            if (obj["eArrest.18"].IsNull == false) {
                XML.writeElementString("eArrest.18", obj["eArrest.18"].vSet[0]);
            }
            else {
                if (obj["eArrest.18"].NV == true) {
                    XML.writeStartElement('eArrest.18');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eArrest.18"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        XML.writeEndElement();
    };
    //eOutcome
    if (typeof TheCall.eOutcome != 'undefined') {
        var obj = {};
        var obj = TheCall.eOutcome
        XML.writeStartElement("eOutcome")
        if (typeof obj["eOutcome.01"] != 'undefined') {
            if (obj["eOutcome.01"].IsNull == false) {
                XML.writeElementString("eOutcome.01", obj["eOutcome.01"].vSet[0]);
            }
            else {
                if (obj["eOutcome.01"].NV == true) {
                    XML.writeStartElement('eOutcome.01');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eOutcome.01"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof obj["eOutcome.02"] != 'undefined') {
            if (obj["eOutcome.02"].IsNull == false) {
                XML.writeElementString("eOutcome.02", obj["eOutcome.02"].vSet[0]);
            }
            else {
                if (obj["eOutcome.02"].NV == true) {
                    XML.writeStartElement('eOutcome.02');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eOutcome.02"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (obj["ExternalDataGroup"] != -1) {            
            for (var i = 0; i <= obj["ExternalDataGroup"].length - 1; i++)
            {
                XML.writeStartElement("eOutcome.ExternalDataGroup");
                if (typeof obj.ExternalDataGroup[i]["eOutcome.03"] != 'undefined') {
                    if (obj.ExternalDataGroup[i]["eOutcome.03"].IsNull == false) {
                        XML.writeElementString("eOutcome.03", obj.ExternalDataGroup[i]["eOutcome.03"].vSet[0]);
                    }
                };
                if (typeof obj.ExternalDataGroup[i]["eOutcome.04"] != 'undefined') {
                    if (obj.ExternalDataGroup[i]["eOutcome.04"].IsNull == false) {
                        XML.writeElementString("eOutcome.04", obj.ExternalDataGroup[i]["eOutcome.04"].vSet[0]);
                    }
                };

                if (typeof obj.ExternalDataGroup[i]["eOutcome.05"] != 'undefined') {
                    if (obj.ExternalDataGroup[i]["eOutcome.05"].IsNull == false) {
                        XML.writeElementString("eOutcome.05", obj.ExternalDataGroup[i]["eOutcome.05"].vSet[0]);
                    }
                };
                XML.writeEndElement();
            }
        };

        if (typeof obj["eOutcome.06"] != 'undefined') {
            if (obj["eOutcome.06"].IsNull == false) {
                XML.writeElementString("eOutcome.06", obj["eOutcome.06"].vSet[0]);
            }
        };

        if (typeof obj["eOutcome.07"] != 'undefined') {
            if (obj["eOutcome.07"].IsNull == false) {
                XML.writeElementString("eOutcome.07", obj["eOutcome.07"].vSet[0]);
            }
        };

        if (typeof obj["eOutcome.08"] != 'undefined')
        {
            if (obj["eOutcome.08"].IsNull == false)
            {
                XML.writeElementString("eOutcome.08", obj["eOutcome.08"].vSet[0]);
            }
        };

        if (typeof obj["eOutcome.09"] != 'undefined')
        {
            if (obj["eOutcome.09"].IsNull == false) {
                for (var i = 0; i <= obj["eOutcome.09"].vSet.length-1 ; i++) {
                    XML.writeElementString("eOutcome.09", obj["eOutcome.09"].vSet[i]);
                }
            }
        };

        if (typeof obj["eOutcome.10"] != 'undefined') {
            if (obj["eOutcome.10"].IsNull == false) {
                for (var i = 0; i <= obj["eOutcome.10"].vSet.length - 1; i++) {
                    XML.writeElementString("eOutcome.10", obj["eOutcome.10"].vSet[i]);
                }
            }
        };

        if (typeof obj["eOutcome.11"] != 'undefined') {
            if (obj["eOutcome.11"].IsNull == false) {
                XML.writeElementString("eOutcome.11", obj["eOutcome.11"].vSet[0]);
            }
        };

        if (typeof obj["eOutcome.12"] != 'undefined') {
            if (obj["eOutcome.12"].IsNull == false) {
                for (var i = 0; i <= obj["eOutcome.12"].vSet.length - 1; i++) {
                    XML.writeElementString("eOutcome.12", obj["eOutcome.12"].vSet[i]);
                }
            }
        };

        if (typeof obj["eOutcome.13"] != 'undefined') {
            if (obj["eOutcome.13"].IsNull == false) {
                for (var i = 0; i <= obj["eOutcome.13"].vSet.length - 1; i++) {
                    XML.writeElementString("eOutcome.13", obj["eOutcome.13"].vSet[i]);
                }
            }
        };

        if (typeof obj["eOutcome.14"] != 'undefined') {
            if (obj["eOutcome.14"].IsNull == false) {
                XML.writeElementString("eOutcome.14", obj["eOutcome.14"].vSet[0]);
            }
        };

        if (typeof obj["eOutcome.15"] != 'undefined') {
            if (obj["eOutcome.15"].IsNull == false) {
                XML.writeElementString("eOutcome.15", obj["eOutcome.15"].vSet[0]);
            }
        };

        if (typeof obj["eOutcome.16"] != 'undefined') {
            if (obj["eOutcome.16"].IsNull == false) {
                XML.writeElementString("eOutcome.16", obj["eOutcome.16"].vSet[0]);
            }
        };

        if (typeof obj["eOutcome.17"] != 'undefined') {
            if (obj["eOutcome.17"].IsNull == false) {
                XML.writeElementString("eOutcome.17", obj["eOutcome.17"].vSet[0]);
            }
        };
        XML.writeEndElement();
    };
    //eOther
    if (typeof TheCall.eOther != 'undefined') {
        var obj = {};
        var obj = TheCall.eOther
        XML.writeStartElement("eOther")
        if (typeof obj["eOther.01"] != 'undefined') {
            if (obj["eOther.01"].IsNull == false) {
                XML.writeElementString("eOther.01", obj["eOther.01"].vSet[0]);
            }
        };

        if (typeof obj["eOther.02"] != 'undefined') {
            if (obj["eOther.02"].IsNull == false) {
                XML.writeElementString("eOther.02", obj["eOther.02"].vSet[0]);
            }
        };

        if (obj["EMSCrewMemberGroup"] != -1) {
            for (var i = 0; i <= obj.EMSCrewMemberGroup.length - 1; i++) {
                XML.writeStartElement("eOther.EMSCrewMemberGroup");

                if (typeof obj.EMSCrewMemberGroup["eOther.03"] != 'undefined') {
                    if (obj["eOther.03"].IsNull == false) {
                        for (var d; d <= obj["EMSCrewMemberGroup"]["eOther.03"].vSet.length - d; i++)

                            XML.writeElementString("eOther.03", obj[i]["eOther.03"].vSet[d]);
                    }
                };
            };

            if (typeof obj.EMSCrewMemberGroup["eOther.04"] != 'undefined') {
                if (obj["eOther.04"].IsNull == false) {
                    XML.writeElementString("eOther.03", obj[i]["eOther.03"].vSet[0]);
                }
            };


            if (typeof obj.EMSCrewMemberGroup["eOther.05"] != 'undefined') {
                if (obj.EMSCrewMemberGroup["eOther.05"].IsNull == false) {
                    XML.writeElementString("eOther.05", eOther.EMSCrewMemberGroup["eOther.05"].vSet[0]);
                }
                else {
                    if (obj.EMSCrewMemberGroup["eOther.05"].NV == true) {
                        XML.writeStartElement('eOther.05');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', eOther.EMSCrewMemberGroup["eOther.05"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };


            if (typeof obj.EMSCrewMemberGroup["eOther.06"] != 'undefined') {
                if (obj.EMSCrewMemberGroup["eOther.06"].IsNull == false) {
                    XML.writeElementString("eOther.06", eOther.EMSCrewMemberGroup["eOther.06"].vSet[0]);
                }
                else {
                    if (obj.EMSCrewMemberGroup["eOther.06"].NV == true) {
                        XML.writeStartElement('eOther.06');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', eOther.EMSCrewMemberGroup["eOther.06"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            XML.writeEndElement();
        };

        if (typeof obj["eOther.07"] != 'undefined') {
            if (obj["eOther.07"].IsNull == false) {
                for (var d; d <= obj["eOther.07"].vSet.length - d; i++) {
                    XML.writeElementString("eOther.07", obj["eOther.07"].vSet[d]);
                }
            };
        };

        if (typeof obj["eOther.08"] != 'undefined') {
            if (obj["eOther.08"].IsNull == false) {
                XML.writeElementString("eOther.08", eOther["eOther.08"].vSet[0]);
            }
            else {
                if (obj["eOther.08"].NV == true) {
                    XML.writeStartElement('eOther.08');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eOther.08"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };


        if (obj["FileGroup"] != -1) {
            for (var i = 0; i <= obj["FileGroup"].length - 1; i++) {
                XML.writeStartElement("eOther.FileGroup");

                if (typeof obj.FileGroup[i]["eOther.09"] != 'undefined') {
                    if (obj.FileGroup[i]["eOther.09"].IsNull == false) {
                        XML.writeElementString("eOther.09", obj.FileGroup[i]["eOther.09"].vSet[0]);
                    }
                };

                if (typeof obj.FileGroup[i]["eOther.10"] != 'undefined') {
                    if (obj.FileGroup[i]["eOther.10"].IsNull == false) {
                        XML.writeElementString("eOther.10", obj.FileGroup[i]["eOther.10"].vSet[0]);
                    }
                };

                if (typeof obj.FileGroup[i]["eOther.11"] != 'undefined') {
                    if (obj.FileGroup[i]["eOther.11"].IsNull == false) {
                        XML.writeElementString("eOther.11", obj.FileGroup[i]["eOther.11"].vSet[0]);
                    }
                };

                XML.writeEndElement();
            }
        };

        if (obj["SignatureGroup"] != -1) {
            for (var i = 0; i <= obj["SignatureGroup"].length - 1; i++) {
                XML.writeStartElement("eOther.SignatureGroup");

                if (typeof obj.SignatureGroup[i]["eOther.12"] != 'undefined') {
                    if (obj.SignatureGroup[i]["eOther.12"].IsNull == false) {
                        XML.writeElementString("eOther.12", obj.SignatureGroup[i]["eOther.12"].vSet[0]);
                    }
                };
                if (typeof obj.SignatureGroup[i]["eOther.13"] != 'undefined') {
                    if (obj.SignatureGroup[i]["eOther.13"].IsNull == false) {
                        XML.writeElementString("eOther.13", obj.SignatureGroup[i]["eOther.13"].vSet[0]);
                    }
                };
                if (typeof obj.SignatureGroup[i]["eOther.14"] != 'undefined') {
                    if (obj.SignatureGroup[i]["eOther.14"].IsNull == false) {
                        XML.writeElementString("eOther.14", obj.SignatureGroup[i]["eOther.14"].vSet[0]);
                    }
                };
                if (typeof obj.SignatureGroup[i]["eOther.15"] != 'undefined') {
                    if (obj.SignatureGroup[i]["eOther.15"].IsNull == false) {
                        XML.writeElementString("eOther.15", obj.SignatureGroup[i]["eOther.15"].vSet[0]);
                    }
                };
                if (typeof obj.SignatureGroup[i]["eOther.16"] != 'undefined') {
                    if (obj.SignatureGroup[i]["eOther.16"].IsNull == false) {
                        XML.writeElementString("eOther.16", obj.SignatureGroup[i]["eOther.16"].vSet[0]);
                    }
                };
                if (typeof obj.SignatureGroup[i]["eOther.17"] != 'undefined') {
                    if (obj.SignatureGroup[i]["eOther.17"].IsNull == false) {
                        XML.writeElementString("eOther.17", obj.SignatureGroup[i]["eOther.17"].vSet[0]);
                    }
                };
                if (typeof obj.SignatureGroup[i]["eOther.18"] != 'undefined') {
                    if (obj.SignatureGroup[i]["eOther.18"].IsNull == false) {
                        XML.writeElementString("eOther.18", obj.SignatureGroup[i]["eOther.18"].vSet[0]);
                    }
                };
                if (typeof obj.SignatureGroup[i]["eOther.19"] != 'undefined') {
                    if (obj.SignatureGroup[i]["eOther.19"].IsNull == false) {
                        XML.writeElementString("eOther.19", obj.SignatureGroup[i]["eOther.19"].vSet[0]);
                    }
                };
                if (typeof obj.SignatureGroup[i]["eOther.20"] != 'undefined') {
                    if (obj.SignatureGroup[i]["eOther.20"].IsNull == false) {
                        XML.writeElementString("eOther.20", obj.SignatureGroup[i]["eOther.20"].vSet[0]);
                    }
                };
                if (typeof obj.SignatureGroup[i]["eOther.21"] != 'undefined') {
                    if (obj.SignatureGroup[i]["eOther.21"].IsNull == false) {
                        XML.writeElementString("eOther.21", obj.SignatureGroup[i]["eOther.21"].vSet[0]);
                    }
                };

                XML.writeEndElement();
            }
        }
    };
    //eInjury
    if (typeof TheCall.eInjury != 'undefined') {
        var obj = {};
        var obj = TheCall.eInjury
        XML.writeStartElement("eInjury");
        if (typeof obj["eInjury.01"] != 'undefined') {
            if (obj["eInjury.01"].IsNull == false) {
                for (var i = 0; i < obj["eInjury.01"].vSet.length; i++) {
                    XML.writeElementString("eInjury.01", obj["eInjury.01"].vSet[i]);
                }
            }
            else {
                if (typeof obj["eInjury.01"].NV != 'undefined') {

                    XML.writeStartElement('eInjury.01');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eInjury.01"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof obj["eInjury.02"] != 'undefined') {
            if (obj["eInjury.02"].IsNull == false) {
                for (var i = 0; i < obj["eInjury.02"].vSet.length; i++) {
                    XML.writeElementString("eInjury.02", obj["eInjury.02"].vSet[i]);
                }
            }
            else {
                if (typeof obj["eInjury.02"].NV != 'undefined') {

                    XML.writeStartElement('eInjury.02');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eInjury.02"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof obj["eInjury.03"] != 'undefined') {
            if (obj["eInjury.03"].IsNull == false) {
                for (var i = 0; i < obj["eInjury.03"].vSet.length; i++) {
                    XML.writeElementString("eInjury.03", obj["eInjury.03"].vSet[i]);
                }
            }
            else {
                if (typeof obj["eInjury.03"].NV != 'undefined') {

                    XML.writeStartElement('eInjury.03');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eInjury.03"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof obj["eInjury.04"] != 'undefined') {
            if (obj["eInjury.04"].IsNull == false) {
                for (var i = 0; i < obj["eInjury.04"].vSet.length; i++) {
                    XML.writeElementString("eInjury.04", obj["eInjury.04"].vSet[i]);
                }
            }
            else {
                if (typeof obj["eInjury.04"].NV != 'undefined') {

                    XML.writeStartElement('eInjury.04');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eInjury.04"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof obj["eInjury.05"] != 'undefined') {
            if (obj["eInjury.05"].IsNull == false) {
                XML.writeElementString("eInjury.05", obj["eInjury.05"].vSet[0]);
            }
        };
        if (typeof obj["eInjury.06"] != 'undefined') {
            if (obj["eInjury.06"].IsNull == false) {
                XML.writeElementString("eInjury.06", obj["eInjury.06"].vSet[0]);
            }
        };
        if (typeof obj["eInjury.07"] != 'undefined') {
            if (obj["eInjury.07"].IsNull == false) {
                for (var i = 0; i < obj["eInjury.07"].vSet.length; i++) {
                    XML.writeElementString("eInjury.07", obj["eInjury.07"].vSet[i]);
                }
            }
            else {
                if (typeof obj["eInjury.07"].NV != 'undefined') {

                    XML.writeStartElement('eInjury.07');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eInjury.07"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof obj["eInjury.08"] != 'undefined') {
            if (obj["eInjury.08"].IsNull == false) {
                for (var i = 0; i < obj["eInjury.08"].vSet.length; i++) {
                    XML.writeElementString("eInjury.08", obj["eInjury.08"].vSet[i]);
                }
            }
        };
        if (typeof obj["eInjury.09"] != 'undefined') {
            if (obj["eInjury.09"].IsNull == false) {
                XML.writeElementString("eInjury.09", obj["eInjury.09"].vSet[0]);
            }
        };
        if (typeof obj["eInjury.10"] != 'undefined') {
            if (obj["eInjury.10"].IsNull == false) {
                for (var i = 0; i < obj["eInjury.10"].vSet.length; i++) {
                    XML.writeElementString("eInjury.10", obj["eInjury.10"].vSet[i]);
                }
            }
            else {
                if (typeof obj["eInjury.10"].NV != 'undefined') {

                    XML.writeStartElement('eInjury.10');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eInjury.10"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (obj["CollisionGroup"] == 1) {
            XML.writeStartElement("eInjury.CollisionGroup");
            if (typeof obj["eInjury.11"] != 'undefined') {
                if (obj["eInjury.11"].IsNull == false) {
                    XML.writeElementString("eInjury.11", obj["eInjury.11"].vSet[0]);
                }
            };

            if (typeof obj["eInjury.12"] != 'undefined') {
                if (obj["eInjury.12"].IsNull == false) {
                    XML.writeElementString("eInjury.12", obj["eInjury.12"].vSet[0]);
                }
            };
            if (typeof obj["eInjury.13"] != 'undefined') {
                if (obj["eInjury.13"].IsNull == false) {
                    
                    for (var i = 0; i < obj["eInjury.13"].vSet.length; i++) {
                        XML.writeStartElement('eInjury.13');
                        if (obj["eInjury.13"].vSet[i].Type != null) {
                            XML.writeAttributeString('PhoneNumberType', obj["eInjury.13"].vSet[i].Type)
                        };
                        XML.writeString(obj["eInjury.13"].vSet[i].val)
                        XML.writeEndElement();
                    }
                }
                else {
                    if (typeof obj["eInjury.13"].NV != 'undefined') {

                        XML.writeStartElement('eInjury.13');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eInjury.13"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof obj["eInjury.14"] != 'undefined') {
                if (obj["eInjury.14"].IsNull == false) {
                    XML.writeElementString("eInjury.14", obj["eInjury.14"].vSet[0]);
                }
            };


            if (typeof obj["eInjury.15"] != 'undefined') {
                if (obj["eInjury.15"].IsNull == false) {
                    XML.writeElementString("eInjury.15", obj["eInjury.15"].vSet[0]);
                }
            };


            if (typeof obj["eInjury.16"] != 'undefined') {
                if (obj["eInjury.16"].IsNull == false) {
                    XML.writeElementString("eInjury.16", obj["eInjury.16"].vSet[0]);
                }
            };


            if (typeof obj["eInjury.17"] != 'undefined') {
                if (obj["eInjury.17"].IsNull == false) {
                    XML.writeElementString("eInjury.17", obj["eInjury.17"].vSet[0]);
                }
            };

            if (typeof obj["eInjury.18"] != 'undefined') {
                if (obj["eInjury.18"].IsNull == false) {
                    XML.writeElementString("eInjury.18", obj["eInjury.18"].vSet[0]);
                }
            };

            if (typeof obj["eInjury.19"] != 'undefined') {
                if (obj["eInjury.19"].IsNull == false) {
                    XML.writeElementString("eInjury.19", obj["eInjury.19"].vSet[0]);
                }
            };

            if (typeof obj["eInjury.20"] != 'undefined') {
                if (obj["eInjury.20"].IsNull == false) {
                    XML.writeElementString("eInjury.20", obj["eInjury.20"].vSet[0]);
                }
            };


            if (typeof obj["eInjury.21"] != 'undefined') {
                if (obj["eInjury.21"].IsNull == false) {
                    XML.writeElementString("eInjury.21", obj["eInjury.21"].vSet[0]);
                }
            };

 
            if (typeof obj["eInjury.22"] != 'undefined') {
                if (obj["eInjury.22"].IsNull == false) {
                    
                    for (var i = 0; i < obj["eInjury.22"].vSet.length; i++) {
                        
                        XML.writeStartElement('eInjury.22');
                        
                        if (typeof obj["eInjury.22"].vSet[i].DeltaVelocityOrdinal != 'undefined') {
                            if (obj["eInjury.22"].vSet[i].DeltaVelocityOrdinal != null) {
                                XML.writeAttributeString('DeltaVelocityOrdinal', obj["eInjury.22"].vSet[i].DeltaVelocityOrdinal)
                            }
                        };
                        if (typeof obj["eInjury.22"].vSet[i].VelocityUnit != 'undefined') {
                            if (obj["eInjury.22"].vSet[i].VelocityUnit != null) {
                                XML.writeAttributeString('VelocityUnit', obj["eInjury.22"].vSet[i].VelocityUnit)
                            }
                        };
                        
                        XML.writeString(obj["eInjury.22"].vSet[i].val)
                        XML.writeEndElement();
                    }
                }
                else {
                    if (typeof obj["eInjury.22"].NV != 'undefined') {

                        XML.writeStartElement('eInjury.22');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eInjury.22"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof obj["eInjury.23"] != 'undefined') {
                if (obj["eInjury.23"].IsNull == false) {
                    XML.writeElementString("eInjury.23", obj["eInjury.23"].vSet[0]);
                }
            };
            XML.writeEndElement();
        };
        

        if (typeof obj["SeatGroup"] != 'undefined')
        {
            if(obj["SeatGroup"] !=-1)
            {
                for (var i= 0; i < obj["SeatGroup"].length; i++) 
                {
                    XML.writeStartElement("eInjury.SeatGroup");
                    if (typeof obj.SeatGroup[i]["eInjury.26"] != 'undefined')
                    {
                        if (obj.SeatGroup[i]["eInjury.26"].IsNull == false)
                        {
                            XML.writeElementString("eInjury.26", obj.SeatGroup[i]["eInjury.26"].vSet[0]);
                        }
                    };

                    if (typeof obj.SeatGroup[i]["eInjury.27"] != 'undefined')
                    {
                        if (obj.SeatGroup[i]["eInjury.27"].IsNull == false)
                        {
                            XML.writeElementString("eInjury.27", obj.SeatGroup[i]["eInjury.27"].vSet[0]);
                        }
                    };

                    if (typeof obj.SeatGroup[i]["eInjury.28"] != 'undefined')
                    {
                        if (obj.SeatGroup[i]["eInjury.28"].IsNull == false)
                        {
                            XML.writeElementString("eInjury.28", obj.SeatGroup[i]["eInjury.28"].vSet[0]);
                        }
                    };
                    if (typeof obj.SeatGroup[i]["eInjury.29"] != 'undefined')
                    {
                        if (obj.SeatGroup[i]["eInjury.29"].IsNull == false)
                        {
                            XML.writeElementString("eInjury.29", obj.SeatGroup[i]["eInjury.29"].vSet[0]);
                        }
                    };
                    XML.writeEndElement();
                }
            }
        };

        XML.writeEndElement();
        XML.writeEndElement();
    };
    //eExam
    console.log(TheCall.eExam)
    if (typeof TheCall.eExam != 'undefined') 
    {
        var obj = {};
        var obj = TheCall.eExam
        XML.writeStartElement("eExam");
        if (typeof obj["eExam.01"] != 'undefined') {
            if (obj["eExam.01"].IsNull == false) {
                XML.writeElementString("eExam.01", obj["eExam.01"].vSet[0]);
            }
            else {
                if (typeof obj["eExam.01"].NV != 'undefined') {

                    XML.writeStartElement('eExam.01');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eExam.01"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof obj["eExam.02"] != 'undefined') {
            if (obj["eExam.02"].IsNull == false) {
                XML.writeElementString("eExam.02", obj["eExam.02"].vSet[0]);
            }
            else {
                if (typeof obj["eExam.02"].NV != 'undefined') {

                    XML.writeStartElement('eExam.02');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', obj["eExam.02"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof obj["AssessmentGroup"] != 'undefined') {
            if (typeof obj["AssessmentGroup"] != 'undefined') {
                for (var x = 0; x < obj.AssessmentGroup.length; x++) {
                    var aObj = {};
                    aObj = obj.AssessmentGroup[x];
                    XML.writeStartElement("eExam.AssessmentGroup");
                    if (typeof aObj["eExam.03"] != 'undefined') {
                        if (aObj["eExam.03"].IsNull == false) {
                            XML.writeElementString("eExam.03", aObj["eExam.03"].vSet[0]);
                        }
                    };
                    if (typeof aObj["eExam.04"] != 'undefined') {
                        if (aObj["eExam.04"].IsNull == false) {
                            for (var i = 0; i < aObj["eExam.04"].length; i++) {
                                XML.writeElementString("eExam.04", aObj["eExam.04"].vSet[i]);
                            }
                        };
                    };
                    
                    if (typeof obj.AssessmentGroup["eExam.05"] != 'undefined') {
                        if (obj.AssessmentGroup["eExam.05"].IsNull == false) {
                            for (var i = 0; i < obj.AssessmentGroup["eExam.05"].length; i++) {
                                XML.writeElementString("eExam.05", obj.AssessmentGroup[x]["eExam.05"].vSet[i]);
                            }
                        };
                    };

                    if (typeof obj.AssessmentGroup["eExam.06"] != 'undefined') {
                        if (obj.AssessmentGroup["eExam.06"].IsNull == false) {
                            for (var i = 0; i < obj.AssessmentGroup["eExam.06"].length; i++) {
                                XML.writeElementString("eExam.06", obj.AssessmentGroup[x]["eExam.06"].vSet[i]);
                            }
                        };
                    };

                    if (typeof obj.AssessmentGroup["eExam.07"] != 'undefined') {
                        if (obj.AssessmentGroup["eExam.07"].IsNull == false) {
                            for (var i = 0; i < obj.AssessmentGroup["eExam.07"].length; i++) {
                                XML.writeElementString("eExam.07", obj.AssessmentGroup[x]["eExam.07"].vSet[i]);
                            }
                        };
                    };


                    if (typeof obj.AssessmentGroup["eExam.08"] != 'undefined') {
                        if (obj.AssessmentGroup["eExam.08"].IsNull == false) {
                            for (var i = 0; i < obj.AssessmentGroup["eExam.08"].length; i++) {
                                XML.writeElementString("eExam.08", obj.AssessmentGroup[x]["eExam.08"].vSet[i]);
                            }
                        };
                    };
                    if (typeof obj.AssessmentGroup["eExam.09"] != 'undefined') {
                        if (obj.AssessmentGroup["eExam.09"].IsNull == false) {
                            for (var i = 0; i < obj.AssessmentGroup["eExam.09"].length; i++) {
                                XML.writeElementString("eExam.09", obj.AssessmentGroup[x]["eExam.09"].vSet[i]);
                            }
                        };
                    };
                    /*
                    /////////////////////AbdomenGroup
                    if (typeof TheCall.eExam["AbdomenGroup"] != 'undefined') {
                        if (typeof eExam["AbdomenGroup"] != 'undefined') {
                            for (var x = 0; x < obj.AssessmentGroup[x].AbdomenGroup.length; x++) {
                                XML.writeStartElement("eExam.AbdomenGroup");
                                if (typeof obj.AssessmentGroup[x].AbdomenGroup["eExam.10"] != 'undefined') {
                                    if (obj.AssessmentGroup[x].AbdomenGroup["eExam.10"].IsNull == false) {
                                        XML.writeElementString("eExam.10", obj.AssessmentGroup[x].AbdomenGroup["eExam.10"].vSet[0]);
                                    }
                                };

                                if (typeof obj.AssessmentGroup[x].AbdomenGroup["eExam.11"] != 'undefined') {
                                    if (obj.AssessmentGroup[x].AbdomenGroup["eExam.11"].IsNull == false) {
                                        for (var i = 0; i < obj.AssessmentGroup[x].AbdomenGroup["eExam.11"].length; i++) {
                                            XML.writeElementString("eExam.11", obj.AssessmentGroup[x].AbdomenGroup["eExam.11"].vSet[i]);
                                        }
                                    };
                                };
                                XML.writeEndElement();
                            };
                        }
                    };
                    if (typeof obj.AssessmentGroup[x]["eExam.12"] != 'undefined') {
                        if (obj.AssessmentGroup[x]["eExam.12"].IsNull == false) {
                            for (var i = 0; i < obj.AssessmentGroup[x]["eExam.12"].length; i++) {
                                XML.writeElementString("eExam.12", obj.AssessmentGroup[x]["eExam.12"].vSet[i]);
                            }
                        };
                    };
                    /////////////////////SpineGroup
                    if (typeof obj["SpineGroup"] != 'undefined') {
                        if (typeof obj["SpineGroup"] != 'undefined') {
                            for (var x = 0; x < obj.AssessmentGroup[x].SpineGroup.length; x++) {
                                XML.writeStartElement("eExam.SpineGroup");
                                if (typeof obj.AssessmentGroup[x].SpineGroup["eExam.13"] != 'undefined') {
                                    if (obj.AssessmentGroup[x].SpineGroup["eExam.13"].IsNull == false) {
                                        XML.writeElementString("eExam.13", obj.AssessmentGroup[x].SpineGroup["eExam.13"].vSet[0]);
                                    }
                                };

                                if (typeof obj.AssessmentGroup[x].SpineGroup["eExam.14"] != 'undefined') {
                                    if (obj.AssessmentGroup[x].SpineGroup["eExam.14"].IsNull == false) {
                                        for (var i = 0; i < obj.AssessmentGroup[x].SpineGroup["eExam.14"].length; i++) {
                                            XML.writeElementString("eExam.14", obj.AssessmentGroup[x].SpineGroup["eExam.14"].vSet[i]);
                                        }
                                    };
                                };
                                XML.writeEndElement();
                            };
                        }
                    };

                    /////////////////////ExtremityGroup
                    if (typeof obj["ExtremityGroup"] != 'undefined') {
                        if (typeof obj["ExtremityGroup"] != 'undefined') {
                            for (var x = 0; x < obj.AssessmentGroup[x].ExtremityGroup.length; x++) {
                                XML.writeStartElement("eExam.ExtremityGroup");
                                if (typeof obj.AssessmentGroup[x].ExtremityGroup["eExam.15"] != 'undefined') {
                                    if (obj.AssessmentGroup[x].ExtremityGroup["eExam.15"].IsNull == false) {
                                        XML.writeElementString("eExam.15", obj.AssessmentGroup[x].ExtremityGroup["eExam.15"].vSet[0]);
                                    }
                                };

                                if (typeof obj.AssessmentGroup[x].ExtremityGroup["eExam.16"] != 'undefined') {
                                    if (obj.AssessmentGroup[x].ExtremityGroup["eExam.16"].IsNull == false) {
                                        for (var i = 0; i < obj.AssessmentGroup[x].ExtremityGroup["eExam.16"].length; i++) {
                                            XML.writeElementString("eExam.16", obj.AssessmentGroup[x].ExtremityGroup["eExam.16"].vSet[i]);
                                        }
                                    };
                                };
                                XML.writeEndElement();
                            };
                        }
                    };

                    /////////////////////EyeGroup
                    if (typeof obj["EyeGroup"] != 'undefined') {
                        if (typeof obj["EyeGroup"] != 'undefined') {
                            for (var x = 0; x < obj.AssessmentGroup[x].EyeGroup.length; x++) {
                                XML.writeStartElement("eExam.EyeGroup");
                                if (typeof obj.AssessmentGroup[x].EyeGroup["eExam.17"] != 'undefined') {
                                    if (obj.AssessmentGroup[x].EyeGroup["eExam.17"].IsNull == false) {
                                        XML.writeElementString("eExam.17", obj.AssessmentGroup[x].EyeGroup["eExam.17"].vSet[0]);
                                    }
                                };

                                if (typeof obj.AssessmentGroup[x].EyeGroup["eExam.18"] != 'undefined') {
                                    if (obj.AssessmentGroup[x].EyeGroup["eExam.18"].IsNull == false) {
                                        for (var i = 0; i < obj.AssessmentGroup[x].EyeGroup["eExam.18"].length; i++) {
                                            XML.writeElementString("eExam.18", obj.AssessmentGroup[x].EyeGroup["eExam.18"].vSet[i]);
                                        }
                                    };
                                };
                                XML.writeEndElement();
                            };
                        }
                    };
                    if (typeof obj.AssessmentGroup[x]["eExam.19"] != 'undefined') {
                        if (obj.AssessmentGroup[x]["eExam.19"].IsNull == false) {
                            for (var i = 0; i < obj.AssessmentGroup[x]["eExam.19"].length; i++) {
                                XML.writeElementString("eExam.19", obj.AssessmentGroup[x]["eExam.19"].vSet[i]);
                            }
                        };
                    };

                    if (typeof obj.AssessmentGroup[x]["eExam.20"] != 'undefined') {
                        if (obj.AssessmentGroup[x]["eExam.20"].IsNull == false) {
                            for (var i = 0; i < obj.AssessmentGroup[x]["eExam.20"].length; i++) {
                                XML.writeElementString("eExam.20", obj.AssessmentGroup[x]["eExam.20"].vSet[i]);
                            }
                        };
                    };
                    */
                };
                
                XML.writeEndElement();
                XML.writeEndElement();
            }
        }
    };
    //eProceduree
    console.log(TheCall.eProcedures)
    if (typeof TheCall.eProcedures != 'undefined')
    {
        var obj = {};
        var obj = TheCall.eProcedures
        if (obj["ProcedureGroup"] != -1)
        {
            XML.writeStartElement("eProcedures");            
            for (var x = 0; x < obj.ProcedureGroup.length; x++)
            {
                XML.writeStartElement("eProcedure.ProcedureGroup");
                
                if (typeof obj.ProcedureGroup[x]["eProcedures.01"] != 'undefined') {
                    if (obj.ProcedureGroup[x]["eProcedures.01"].IsNull == false) {
                        XML.writeElementString("eProcedures.01", obj.ProcedureGroup[x]["eProcedures.01"].vSet[0]);
                    }
                    else {
                        if (typeof obj.ProcedureGroup[x]["eProcedures.01"].NV != 'undefined') {

                            XML.writeStartElement('eProcedures.01');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj.ProcedureGroup[x]["eProcedures.01"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof obj.ProcedureGroup[x]["eProcedures.02"] != 'undefined') {
                    if (obj.ProcedureGroup[x]["eProcedures.02"].IsNull == false) {
                        XML.writeElementString("eProcedures.02", obj.ProcedureGroup[x]["eProcedures.02"].vSet[0]);
                    }
                    else {
                        if (typeof obj.ProcedureGroup[x]["eProcedures.02"].NV != 'undefined') {

                            XML.writeStartElement('eProcedures.02');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj.ProcedureGroup[x]["eProcedures.02"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };
                
                if (typeof obj.ProcedureGroup[x]["eProcedures.03"] != 'undefined')
                {
                    if (obj.ProcedureGroup[x]["eProcedures.03"].IsNull == false)
                    {
                        XML.writeElementString("eProcedures.03", obj.ProcedureGroup[x]["eProcedures.03"].vSet[0]);
                    }
                    else
                    {
                       if (typeof obj.ProcedureGroup[x]["eProcedures.03"].PN != 'undefined')
                        {

                            XML.writeStartElement('eProcedures.03');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj.ProcedureGroup[x]["eProcedures.03"].vSet[0]);
                            XML.writeEndElement();
                        }

                        else
                        {
                            if (typeof obj.ProcedureGroup[x]["eProcedures.03"].NV != 'undefined')
                            {

                                XML.writeStartElement('eProcedures.03');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.ProcedureGroup[x]["eProcedures.03"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }                        
                        
                    }
                    
                };
                
                if (typeof obj.ProcedureGroup[x]["eProcedures.04"] != 'undefined') 
                {
                    if (obj.ProcedureGroup[x]["eProcedures.04"].IsNull == false) 
                    {
                        XML.writeElementString("eProcedures.04", obj.ProcedureGroup[x]["eProcedures.04"].vSet[0]);
                    }
                };

                if (typeof obj.ProcedureGroup[x]["eProcedures.05"] != 'undefined') 
                {
                    if (obj.ProcedureGroup[x]["eProcedures.05"].IsNull == false) 
                    {
                        XML.writeElementString("eProcedures.05", obj.ProcedureGroup[x]["eProcedures.05"].vSet[0]);
                    }
                    else {
                        if (typeof obj.ProcedureGroup[x]["eProcedures.05"].NV != 'undefined') {

                            XML.writeStartElement('eProcedures.05');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj.ProcedureGroup[x]["eProcedures.05"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };
                
                if (typeof obj.ProcedureGroup[x]["eProcedures.06"] != 'undefined') {
                    if (obj.ProcedureGroup[x]["eProcedures.06"].IsNull == false) {
                        XML.writeElementString("eProcedures.06", obj.ProcedureGroup[x]["eProcedures.06"].vSet[0]);
                    }
                    else {
                        if (typeof obj.ProcedureGroup[x]["eProcedures.06"].NV != 'undefined') {

                            XML.writeStartElement('eProcedures.06');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj.ProcedureGroup[x]["eProcedures.06"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };
            
                if (typeof obj.ProcedureGroup[x]["eProcedures.07"] != 'undefined') {
                    if (obj.ProcedureGroup[x]["eProcedures.07"].IsNull == false) {
                        for (var i = 0; i < obj.ProcedureGroup[x]["eProcedures.07"].vSet.length; i++)
                        {
                            XML.writeElementString("eProcedures.07", obj.ProcedureGroup[x]["eProcedures.07"].vSet[i]);
                        }
                    }
                    else
                    {
                        if (typeof obj.ProcedureGroup[x]["eProcedures.07"].NV != 'undefined') {

                            XML.writeStartElement('eProcedures.07');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj.ProcedureGroup[x]["eProcedures.07"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof obj.ProcedureGroup[x]["eProcedures.08"] != 'undefined') {
                    if (obj.ProcedureGroup[x]["eProcedures.08"].IsNull == false) {
                        XML.writeElementString("eProcedures.08", obj.ProcedureGroup[x]["eProcedures.08"].vSet[0]);
                    }
                    else {
                        if (typeof obj.ProcedureGroup[x]["eProcedures.08"].NV != 'undefined') {

                            XML.writeStartElement('eProcedures.08');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj.ProcedureGroup[x]["eProcedures.08"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof obj.ProcedureGroup[x]["eProcedures.09"] != 'undefined') {
                    if (obj.ProcedureGroup[x]["eProcedures.09"].IsNull == false) {
                        XML.writeElementString("eProcedures.09", obj.ProcedureGroup[x]["eProcedures.09"].vSet[0]);
                    }
                    else {
                        if (typeof obj.ProcedureGroup[x]["eProcedures.09"].NV != 'undefined') {

                            XML.writeStartElement('eProcedures.09');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj.ProcedureGroup[x]["eProcedures.09"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof obj.ProcedureGroup[x]["eProcedures.10"] != 'undefined') {
                    if (obj.ProcedureGroup[x]["eProcedures.10"].IsNull == false) {
                        XML.writeElementString("eProcedures.10", obj.ProcedureGroup[x]["eProcedures.10"].vSet[0]);
                    }
                    else {
                        if (typeof obj.ProcedureGroup[x]["eProcedures.10"].NV != 'undefined') {

                            XML.writeStartElement('eProcedures.10');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj.ProcedureGroup[x]["eProcedures.10"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof obj.ProcedureGroup[x]["eProcedures.11"] != 'undefined') {
                    if (obj.ProcedureGroup[x]["eProcedures.11"].IsNull == false) {
                        XML.writeElementString("eProcedures.11", obj.ProcedureGroup[x]["eProcedures.11"].vSet[0]);
                    }
                };

                if (typeof obj.ProcedureGroup[x]["eProcedures.12"] != 'undefined') {
                    if (obj.ProcedureGroup[x]["eProcedures.12"].IsNull == false) {
                        XML.writeElementString("eProcedures.12", obj.ProcedureGroup[x]["eProcedures.12"].vSet[0]);
                    }
                };

                if (typeof obj.ProcedureGroup[x]["eProcedures.13"] != 'undefined') {
                    if (obj.ProcedureGroup[x]["eProcedures.13"].IsNull == false) {
                        XML.writeElementString("eProcedures.13", obj.ProcedureGroup[x]["eProcedures.13"].vSet[0]);
                    }
                    else {
                        if (typeof obj.ProcedureGroup[x]["eProcedures.13"].NV != 'undefined') {

                            XML.writeStartElement('eProcedures.13');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj.ProcedureGroup[x]["eProcedures.13"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };
                
                XML.writeEndElement();

            };
            XML.writeEndElement();
        }
    };
    //eMedications
    if (typeof TheCall.eMedications != 'undefined')
    {
        var obj = {};
        var obj = TheCall.eMedications
        //   if (obj["MedicationGroup"] != -1) 
        //   {
        XML.writeStartElement("eMedications");        
        for (var x = 0; x < obj["MedicationGroup"].length; x++) {
            XML.writeStartElement("eMedications.MedicationGroup");
            if (typeof obj["MedicationGroup"][x]["eMedications.01"] != 'undefined')
            {
                if (obj["MedicationGroup"][x]["eMedications.01"].IsNull == false) {
                    XML.writeElementString("eMedications.01", obj["MedicationGroup"][x]["eMedications.01"].vSet[0]);
                }
                else {
                    if (typeof obj["MedicationGroup"][x]["eMedications.01"].NV != 'undefined') {

                        XML.writeStartElement('eMedications.01');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["MedicationGroup"][x]["eMedications.01"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof obj["MedicationGroup"][x]["eMedications.02"] != 'undefined')
            {
                if (obj["MedicationGroup"][x]["eMedications.02"].IsNull == false) {
                    XML.writeElementString("eMedications.02", obj["MedicationGroup"][x]["eMedications.02"].vSet[0]);
                }
                else {
                    if (typeof obj["MedicationGroup"][x]["eMedications.02"].NV != 'undefined') {

                        XML.writeStartElement('eMedications.02');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["MedicationGroup"][x]["eMedications.02"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof obj["MedicationGroup"][x]["eMedications.03"] != 'undefined')
            {
                if (obj["MedicationGroup"][x]["eMedications.03"].IsNull == false) {
                    XML.writeElementString("eMedications.03", obj["MedicationGroup"][x]["eMedications.03"].vSet[0]);
                }
                else {
                    if (typeof obj["MedicationGroup"][x]["eMedications.03"].NV != 'undefined') {

                        XML.writeStartElement('eMedications.03');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["MedicationGroup"][x]["eMedications.03"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };


            if (typeof obj["MedicationGroup"][x]["eMedications.04"] != 'undefined')
            {
                if (obj["MedicationGroup"][x]["eMedications.04"].IsNull == false) {
                    XML.writeElementString("eMedications.04", obj["MedicationGroup"][x]["eMedications.04"].vSet[0]);
                }
            };
            if (obj["MedicationGroup"][x].DosageGroup == 1)
            {
                XML.writeStartElement("eMedications.DosageGroup");

                if (typeof obj["MedicationGroup"][x]["eMedications.05"] != 'undefined')
                {
                    if (obj["MedicationGroup"][x]["eMedications.05"].IsNull == false) {
                        XML.writeElementString("eMedications.05", obj["MedicationGroup"][x]["eMedications.05"].vSet[0]);
                    }
                    else {
                        if (typeof obj["MedicationGroup"][x]["eMedications.05"].NV != 'undefined') {

                            XML.writeStartElement('eMedications.05');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["MedicationGroup"][x]["eMedications.05"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };


                if (typeof obj["MedicationGroup"][x]["eMedications.06"] != 'undefined')
                {
                    if (obj["MedicationGroup"][x]["eMedications.06"].IsNull == false) {
                        XML.writeElementString("eMedications.06", obj["MedicationGroup"][x]["eMedications.06"].vSet[0]);
                    }
                    else {
                        if (typeof obj["MedicationGroup"][x]["eMedications.06"].NV != 'undefined') {

                            XML.writeStartElement('eMedications.06');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["MedicationGroup"][x]["eMedications.06"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                XML.writeEndElement();
            };
            if (typeof obj["MedicationGroup"][x]["eMedications.07"] != 'undefined') {
                if (obj["MedicationGroup"][x]["eMedications.07"].IsNull == false) {
                    XML.writeElementString("eMedications.07", obj["MedicationGroup"][x]["eMedications.07"].vSet[0]);
                }
                else {
                    if (typeof obj["MedicationGroup"][x]["eMedications.07"].NV != 'undefined') {

                        XML.writeStartElement('eMedications.07');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["MedicationGroup"][x]["eMedications.07"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof obj["MedicationGroup"][x]["eMedications.08"] != 'undefined') {
                if (obj["MedicationGroup"][x]["eMedications.08"].IsNull == false) {
                    XML.writeElementString("eMedications.08", obj["MedicationGroup"][x]["eMedications.08"].vSet[0]);
                }
                else {
                    if (typeof obj["MedicationGroup"][x]["eMedications.08"].NV != 'undefined') {

                        XML.writeStartElement('eMedications.08');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["MedicationGroup"][x]["eMedications.08"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };


            if (typeof obj["MedicationGroup"][x]["eMedications.10"] != 'undefined') {
                if (obj["MedicationGroup"][x]["eMedications.10"].IsNull == false) {
                    XML.writeElementString("eMedications.10", obj["MedicationGroup"][x]["eMedications.10"].vSet[0]);
                }
                else {
                    if (typeof obj["MedicationGroup"][x]["eMedications.10"].NV != 'undefined') {

                        XML.writeStartElement('eMedications.10');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["MedicationGroup"][x]["eMedications.10"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };
            if (typeof obj["MedicationGroup"][x]["eMedications.11"] != 'undefined') {
                if (obj["MedicationGroup"][x]["eMedications.11"].IsNull == false) {
                    XML.writeElementString("eMedications.11", obj["MedicationGroup"][x]["eMedications.11"].vSet[0]);
                }
            };

            if (typeof obj["MedicationGroup"][x]["eMedications.12"] != 'undefined') {
                if (obj["MedicationGroup"][x]["eMedications.12"].IsNull == false) {
                    XML.writeElementString("eMedications.12", obj["MedicationGroup"][x]["eMedications.12"].vSet[0]);
                }
            };

            XML.writeEndElement();
        };        
        XML.writeEndElement();        
    };
    //eProtocols
    if (typeof TheCall.eProtocols != 'undefined') {
        var obj = {};
        var obj = TheCall.eProtocols
        if (obj["ProtocolGroup"] != -1) {
            XML.writeStartElement("eProtocols");
            for (var x = 0; x < obj["ProtocolGroup"].length; x++)
            {
                XML.writeStartElement("eProtocols.ProtocolGroup");
                if (typeof obj["ProtocolGroup"][x]["eProtocols.01"] != 'undefined') {
                    if (obj["ProtocolGroup"][x]["eProtocols.01"].IsNull == false) {
                        XML.writeElementString("eProtocols.01", obj["ProtocolGroup"][x]["eProtocols.01"].vSet[0]);
                    }
                    else {
                        if (typeof obj["ProtocolGroup"][x]["eProtocols.01"].NV != 'undefined') {

                            XML.writeStartElement('eProtocols.01');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["ProtocolGroup"][x]["eProtocols.01"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof obj["ProtocolGroup"][x]["eProtocols.02"] != 'undefined') {
                    if (obj["ProtocolGroup"][x]["eProtocols.02"].IsNull == false) {
                        XML.writeElementString("eProtocols.02", obj["ProtocolGroup"][x]["eProtocols.02"].vSet[0]);
                    }
                    else {
                        if (typeof obj["ProtocolGroup"][x]["eProtocols.02"].NV != 'undefined') {

                            XML.writeStartElement('eProtocols.02');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["ProtocolGroup"][x]["eProtocols.02"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };
                XML.writeEndElement();

            };
            XML.writeEndElement();
        }
    };
    //eVitals
    if (typeof TheCall.eVitals != 'undefined') {
        
        XML.writeStartElement("eVitals");
        for (var x = 0; x < TheCall.eVitals["VitalGroup"].length; x++) {
            var obj = {};
            var obj = TheCall.eVitals["VitalGroup"][x];
            
            XML.writeStartElement("eVitals.VitalGroup");


            if (typeof obj["eVitals.01"] != 'undefined') {
                if (obj["eVitals.01"].IsNull == false) {
                    XML.writeElementString("eVitals.01", obj["eVitals.01"].vSet[0]);
                }
                else {
                    if (typeof obj["eVitals.01"].NV != 'undefined') {

                        XML.writeStartElement('eVitals.01');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eVitals.01"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof obj["eVitals.02"] != 'undefined') {
                if (obj["eVitals.02"].IsNull == false) {
                    XML.writeElementString("eVitals.02", obj["eVitals.02"].vSet[0]);
                }
                else {
                    if (typeof obj["eVitals.02"].NV != 'undefined') {

                        XML.writeStartElement('eVitals.02');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eVitals.02"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

        //    if (typeof obj.CardiacRhythmGroup != 'undefined') {
                XML.writeStartElement("eVitals.CardiacRhythmGroup");

                if (typeof obj["eVitals.03"] != 'undefined') {
                    if (obj["eVitals.03"].IsNull == false) {
                        for (var i = 0; i < obj["eVitals.03"].vSet.length; i++) {
                            XML.writeElementString("eVitals.03", obj["eVitals.03"].vSet[i]);
                        }
                    }
                    else {
                        if (typeof obj["eVitals.03"].PN != 'undefined') {

                            XML.writeStartElement('eVitals.03');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.03"].vSet[0]);
                            XML.writeEndElement();
                        }
                        else if (typeof obj["eVitals.03"].NV != 'undefined') {

                            XML.writeStartElement('eVitals.03');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.03"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof obj["eVitals.04"] != 'undefined') {
                    if (obj["eVitals.04"].IsNull == false) {
                        XML.writeElementString("eVitals.04", obj["eVitals.04"].vSet[0]);
                    }
                    else {
                        if (typeof obj["eVitals.04"].NV != 'undefined') {

                            XML.writeStartElement('eVitals.04');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.04"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };
                if (typeof obj["eVitals.05"] != 'undefined') {
                    if (obj["eVitals.05"].IsNull == false) {
                        for (var i = 0; i < obj["eVitals.05"].vSet.length; i++) {
                            XML.writeElementString("eVitals.05", obj["eVitals.05"].vSet[i]);
                        }
                    }
                    else {
                        if (typeof obj["eVitals.05"].NV != 'undefined') {

                            XML.writeStartElement('eVitals.05');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.05"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };
                XML.writeEndElement();
          //  };
            
        //    if (typeof obj.BloodPressureGroup != 'undefined') {
                XML.writeStartElement("eVitals.BloodPressureGroup");
                if (typeof obj["eVitals.06"] != 'undefined') {
                    if (obj["eVitals.06"].IsNull == false) {
                        XML.writeElementString("eVitals.06", obj["eVitals.06"].vSet[0]);
                    }
                    else {
                        if (typeof obj["eVitals.06"].PN != 'undefined') {

                            XML.writeStartElement('eVitals.06');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.06"].vSet[0]);
                            XML.writeEndElement();
                        }
                        else if (typeof obj["eVitals.06"].NV != 'undefined') {

                            XML.writeStartElement('eVitals.06');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.06"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof obj["eVitals.07"] != 'undefined') {
                    if (obj["eVitals.07"].IsNull == false) {
                        XML.writeElementString("eVitals.07", obj["eVitals.07"].vSet[0]);
                    }
                    else {
                        if (typeof obj["eVitals.07"].PN != 'undefined') {

                            XML.writeStartElement('eVitals.07');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.07"].vSet[0]);
                            XML.writeEndElement();
                        }
                        else if (typeof obj["eVitals.07"].NV != 'undefined') {

                            XML.writeStartElement('eVitals.07');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.07"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof obj["eVitals.08"] != 'undefined') {
                    if (obj["eVitals.08"].IsNull == false) {
                        XML.writeElementString("eVitals.08", obj["eVitals.08"].vSet[0]);
                    }
                    else {
                        if (typeof obj["eVitals.08"].NV != 'undefined') {

                            XML.writeStartElement('eVitals.08');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.08"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof obj["eVitals.09"] != 'undefined') {
                    if (obj["eVitals.09"].IsNull == false) {
                        XML.writeElementString("eVitals.09", obj["eVitals.09"].vSet[0]);
                    }
                };

                XML.writeEndElement();
        //    };

         //   if (typeof obj.HeartRateGroup != 'undefined') {
                XML.writeStartElement("eVitals.HeartRateGroup");
                if (typeof obj["eVitals.10"] != 'undefined') {
                    if (obj["eVitals.10"].IsNull == false) {
                        XML.writeElementString("eVitals.10", obj["eVitals.10"].vSet[0]);
                    }
                    else {
                        if (typeof obj["eVitals.10"].PN != 'undefined') {

                            XML.writeStartElement('eVitals.10');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.10"].vSet[0]);
                            XML.writeEndElement();
                        }
                        else if (typeof obj["eVitals.10"].NV != 'undefined') {

                            XML.writeStartElement('eVitals.10');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.10"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof obj["eVitals.11"] != 'undefined') {
                    if (obj["eVitals.11"].IsNull == false) {
                        XML.writeElementString("eVitals.11", obj["eVitals.11"].vSet[0]);
                    }
                };

                XML.writeEndElement();
  //          };

            if (typeof obj["eVitals.12"] != 'undefined') {
                if (obj["eVitals.12"].IsNull == false) {
                    XML.writeElementString("eVitals.12", obj["eVitals.12"].vSet[0]);
                }
                else {
                    if (typeof obj["eVitals.12"].PN != 'undefined') {

                        XML.writeStartElement('eVitals.12');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eVitals.12"].vSet[0]);
                        XML.writeEndElement();
                    }
                    else if (typeof obj["eVitals.12"].NV != 'undefined') {

                        XML.writeStartElement('eVitals.12');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eVitals.12"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof obj["eVitals.13"] != 'undefined') {
                if (obj["eVitals.13"].IsNull == false) {
                    XML.writeElementString("eVitals.13", obj["eVitals.13"].vSet[0]);
                }
            };

            if (typeof obj["eVitals.14"] != 'undefined') {
                if (obj["eVitals.14"].IsNull == false) {
                    XML.writeElementString("eVitals.14", obj["eVitals.14"].vSet[0]);
                }
                else {
                    if (typeof obj["eVitals.14"].PN != 'undefined') {

                        XML.writeStartElement('eVitals.14');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eVitals.14"].vSet[0]);
                        XML.writeEndElement();
                    }
                    else if (typeof obj["eVitals.14"].NV != 'undefined') {

                        XML.writeStartElement('eVitals.14');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eVitals.14"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof obj["eVitals.15"] != 'undefined') {
                if (obj["eVitals.15"].IsNull == false) {
                    XML.writeElementString("eVitals.15", obj["eVitals.15"].vSet[0]);
                }
            };

            if (typeof obj["eVitals.16"] != 'undefined') {
                if (obj["eVitals.16"].IsNull == false) {
                    XML.writeElementString("eVitals.16", obj["eVitals.16"].vSet[0]);
                }
                else {
                    if (typeof obj["eVitals.16"].PN != 'undefined') {

                        XML.writeStartElement('eVitals.16');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eVitals.16"].vSet[0]);
                        XML.writeEndElement();
                    }
                    else if (typeof obj["eVitals.16"].NV != 'undefined') {

                        XML.writeStartElement('eVitals.16');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eVitals.16"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof obj["eVitals.17"] != 'undefined') {
                if (obj["eVitals.17"].IsNull == false) {
                    XML.writeElementString("eVitals.17", obj["eVitals.17"].vSet[0]);
                }
                else {
                    if (typeof obj["eVitals.17"].PN != 'undefined') {

                        XML.writeStartElement('eVitals.17');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eVitals.17"].vSet[0]);
                        XML.writeEndElement();
                    }
                    else if (typeof obj["eVitals.17"].NV != 'undefined') {

                        XML.writeStartElement('eVitals.17');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eVitals.17"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof obj["eVitals.18"] != 'undefined') {
                if (obj["eVitals.18"].IsNull == false) {
                    XML.writeElementString("eVitals.18", obj["eVitals.18"].vSet[0]);
                }
                else {
                    if (typeof obj["eVitals.18"].PN != 'undefined') {

                        XML.writeStartElement('eVitals.18');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eVitals.18"].vSet[0]);
                        XML.writeEndElement();
                    }
                    else if (typeof obj["eVitals.18"].NV != 'undefined') {

                        XML.writeStartElement('eVitals.18');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eVitals.18"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };
          //  if (typeof obj.GlascowScoreGroup != 'undefined') {
                XML.writeStartElement("eVitals.GlascowScoreGroup");
                if (typeof obj["eVitals.19"] != 'undefined') {
                    if (obj["eVitals.19"].IsNull == false) {
                        XML.writeElementString("eVitals.19", obj["eVitals.19"].vSet[0]);
                    }
                    else {
                        if (typeof obj["eVitals.19"].PN != 'undefined') {

                            XML.writeStartElement('eVitals.19');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.19"].vSet[0]);
                            XML.writeEndElement();
                        }
                        else if (typeof obj["eVitals.19"].NV != 'undefined') {

                            XML.writeStartElement('eVitals.19');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.19"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof obj["eVitals.20"] != 'undefined') {
                    if (obj["eVitals.20"].IsNull == false) {
                        XML.writeElementString("eVitals.20", obj["eVitals.20"].vSet[0]);
                    }
                    else {
                        if (typeof obj["eVitals.20"].PN != 'undefined') {

                            XML.writeStartElement('eVitals.20');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.20"].vSet[0]);
                            XML.writeEndElement();
                        }
                        else if (typeof obj["eVitals.20"].NV != 'undefined') {

                            XML.writeStartElement('eVitals.20');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.20"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof obj["eVitals.21"] != 'undefined') {
                    if (obj["eVitals.21"].IsNull == false) {
                        XML.writeElementString("eVitals.21", obj["eVitals.21"].vSet[0]);
                    }
                    else {
                        if (typeof obj["eVitals.21"].PN != 'undefined') {

                            XML.writeStartElement('eVitals.21');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.21"].vSet[0]);
                            XML.writeEndElement();
                        }
                        else if (typeof obj["eVitals.21"].NV != 'undefined') {

                            XML.writeStartElement('eVitals.21');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.21"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof obj["eVitals.21"] != 'undefined') {
                    if (obj["eVitals.22"].IsNull == false) {
                        XML.writeElementString("eVitals.22", obj["eVitals.22"].vSet[0]);
                    }
                    else {
                        if (typeof obj["eVitals.22"].PN != 'undefined') {

                            XML.writeStartElement('eVitals.22');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.22"].vSet[0]);
                            XML.writeEndElement();
                        }
                        else if (typeof obj["eVitals.22"].NV != 'undefined') {

                            XML.writeStartElement('eVitals.22');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.22"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof obj["eVitals.23"] != 'undefined') {
                    if (obj["eVitals.23"].IsNull == false) {
                        XML.writeElementString("eVitals.23", obj["eVitals.23"].vSet[0]);
                    }
                    else {
                        if (typeof obj["eVitals.23"].PN != 'undefined') {

                            XML.writeStartElement('eVitals.23');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.23"].vSet[0]);
                            XML.writeEndElement();
                        }
                        else if (typeof obj["eVitals.23"].NV != 'undefined') {

                            XML.writeStartElement('eVitals.23');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.23"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };
                XML.writeEndElement()
         //   };

        //    if (typeof obj.TemperatureGroup != 'undefined') {

                XML.writeStartElement("eVitals.TemperatureGroup");
                if (typeof obj["eVitals.24"] != 'undefined') {
                    if (obj["eVitals.24"].IsNull == false) {
                        XML.writeElementString("eVitals.24", obj["eVitals.24"].vSet[0]);
                    }
                    else {
                        if (typeof obj["eVitals.24"].PN != 'undefined') {

                            XML.writeStartElement('eVitals.24');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.24"].vSet[0]);
                            XML.writeEndElement();
                        }
                        else if (typeof obj["eVitals.24"].NV != 'undefined') {

                            XML.writeStartElement('eVitals.24');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.24"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof obj["eVitals.25"] != 'undefined') {
                    if (obj["eVitals.25"].IsNull == false) {
                        XML.writeElementString("eVitals.25", obj["eVitals.25"].vSet[0]);
                    }
                };
                XML.writeEndElement();
          //  };

            if (typeof obj["eVitals.26"] != 'undefined')
            {
                if (obj["eVitals.26"].IsNull == false)
                {
                    XML.writeElementString("eVitals.26", obj["eVitals.26"].vSet[0]);
                }
                else
                {
                    if (typeof obj["eVitals.26"].NV != 'undefined')
                    {

                        XML.writeStartElement('eVitals.26');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eVitals.26"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };
          //  if (typeof obj.PainScaleGroup != 'undefined') {

                XML.writeStartElement("eVitals.PainScaleGroup");
                if (typeof obj["eVitals.27"] != 'undefined') {
                    if (obj["eVitals.27"].IsNull == false) {
                        XML.writeElementString("eVitals.27", obj["eVitals.27"].vSet[0]);
                    }
                    else {
                        if (typeof obj["eVitals.27"].PN != 'undefined') {

                            XML.writeStartElement('eVitals.27');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.27"].vSet[0]);
                            XML.writeEndElement();
                        }
                        else if (typeof obj["eVitals.27"].NV != 'undefined') {

                            XML.writeStartElement('eVitals.27');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.27"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof obj["eVitals.28"] != 'undefined') {
                    if (obj["eVitals.28"].IsNull == false) {
                        XML.writeElementString("eVitals.28", obj["eVitals.28"].vSet[0]);
                    }
                    else {
                        if (typeof obj["eVitals.28"].NV != 'undefined') {

                            XML.writeStartElement('eVitals.28');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.28"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };
                XML.writeEndElement();
     //       };

       //     if (typeof obj.StrokeScaleGroup != 'undefined') {

                XML.writeStartElement("eVitals.StrokeScaleGroup");

                if (typeof obj["eVitals.29"] != 'undefined') {
                    if (obj["eVitals.29"].IsNull == false) {
                        XML.writeElementString("eVitals.29", obj["eVitals.29"].vSet[0]);
                    }
                    else {
                        if (typeof obj["eVitals.29"].PN != 'undefined') {

                            XML.writeStartElement('eVitals.29');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.29"].vSet[0]);
                            XML.writeEndElement();
                        }
                        else if (typeof obj["eVitals.29"].NV != 'undefined') {

                            XML.writeStartElement('eVitals.29');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.29"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof obj["eVitals.30"] != 'undefined') {
                    if (obj["eVitals.30"].IsNull == false) {
                        XML.writeElementString("eVitals.30", obj["eVitals.30"].vSet[0]);
                    }
                    else {
                        if (typeof obj["eVitals.30"].NV != 'undefined') {

                            XML.writeStartElement('eVitals.30');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.30"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                XML.writeEndElement();
         //   };
                if (typeof obj["eVitals.31"] != 'undefined') {
                    if (obj["eVitals.31"].IsNull == false) {
                        XML.writeElementString("eVitals.31", obj["eVitals.31"].vSet[0]);
                    }
                    else {
                        if (typeof obj["eVitals.31"].NV != 'undefined') {

                            XML.writeStartElement('eVitals.31');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.31"].vSet[0]);
                            XML.writeEndElement();
                        }
                        else if (typeof obj["eVitals.31"].PN != 'undefined') {

                            XML.writeStartElement('eVitals.31');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('PN', obj["eVitals.31"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };
        

            if (typeof obj["eVitals.32"] != 'undefined') 
            {
                if (obj["eVitals.32"].IsNull == false)
                {
                    XML.writeElementString("eVitals.32", obj["eVitals.32"].vSet[0]);
                }
                else
                {
                    if (typeof obj["eVitals.32"].PN != 'undefined')
                    {

                        XML.writeStartElement('eVitals.32');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('PN', obj["eVitals.32"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };
            if (typeof obj["eVitals.33"] != 'undefined') 
            {
                if (obj["eVitals.33"].IsNull == false)
                {
                    XML.writeElementString("eVitals.33", obj["eVitals.33"].vSet[0]);
                }
                else
                {
                    if (typeof obj["eVitals.33"].PN != 'undefined')
                    {

                        XML.writeStartElement('eVitals.33');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('PN', obj["eVitals.33"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };
            XML.writeEndElement();
            XML.writeEndElement();
        };
    };
    //eVitals
    if (typeof TheCall.eCrew != 'undefined') {
        //        if (obj["VitalGroup"] != -1) {

        for (var x = 0; x < TheCall.eCrew["CrewGroup"].length; x++) {

            XML.writeStartElement("eCrew");
            XML.writeStartElement("eCrew.CrewGroup");


            if (typeof TheCall.eCrew["CrewGroup"][x]["eCrew.01"] != 'undefined') {
                if (TheCall.eCrew["CrewGroup"][x]["eCrew.01"].IsNull == false) {
                    XML.writeElementString("eCrew.01", TheCall.eCrew["CrewGroup"][x]["eCrew.01"].vSet[0]);
                }
                else {
                    if (typeof TheCall.eCrew["CrewGroup"][x]["eCrew.01"].NV != 'undefined') {

                        XML.writeStartElement('eCrew.01');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eCrew["CrewGroup"][x]["eCrew.01"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };
            if (typeof TheCall.eCrew["CrewGroup"][x]["eCrew.02"] != 'undefined') {
                if (TheCall.eCrew["CrewGroup"][x]["eCrew.02"].IsNull == false) {
                    XML.writeElementString("eCrew.02", TheCall.eCrew["CrewGroup"][x]["eCrew.02"].vSet[0]);
                }
                else {
                    if (typeof TheCall.eCrew["CrewGroup"][x]["eCrew.02"].NV != 'undefined') {

                        XML.writeStartElement('eCrew.02');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eCrew["CrewGroup"][x]["eCrew.02"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };
            if (typeof TheCall.eCrew["CrewGroup"][x]["eCrew.03"] != 'undefined') {
                if (TheCall.eCrew["CrewGroup"][x]["eCrew.03"].IsNull == false) {
                    for (var i = 0; i < TheCall.eCrew["CrewGroup"][x]["eCrew.03"].vSet.length; i++) {
                        XML.writeElementString("eCrew.03", TheCall.eCrew["CrewGroup"][x]["eCrew.03"].vSet[i].val);
                    }
                }
                else {
                    if (typeof TheCall.eCrew["CrewGroup"][x]["eCrew.03"].NV != 'undefined') {

                        XML.writeStartElement('eCrew.03');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eCrew["CrewGroup"][x]["eCrew.03"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };
            
        }
    }
    XML.writeEndElement();
    //XML.writeAttributeString('timeStamp', Data);

    var XMLDoc = XML.flush()
    console.log(XMLDoc)
    return XMLDoc;

};
function XMLWriter(encoding, version) {
    if (encoding)
        this.encoding = encoding;
    if (version)
        this.version = version;
};
(function () {

    XMLWriter.prototype = {
        encoding: 'ISO-8859-1',// what is the encoding
        version: '1.0', //what xml version to use
        formatting: 'indented', //how to format the output (indented/none)  ?
        indentChar: '\t', //char to use for indent
        indentation: 1, //how many indentChar to add per level
        newLine: '\n', //character to separate nodes when formatting
        //start a new document, cleanup if we are reusing
        writeStartDocument: function (standalone) {
            this.close();//cleanup
            this.stack = [];
            this.standalone = standalone;
        },
        //get back to the root
        writeEndDocument: function () {
            this.active = this.root;
            this.stack = [];
        },
        //set the text of the doctype
        writeDocType: function (dt) {
            this.doctype = dt;
        },
        //start a new node with this name, and an optional namespace
        writeStartElement: function (name, ns) {
            if (ns)//namespace
                name = ns + ':' + name;

            var node = { n: name, a: {}, c: [] };//(n)ame, (a)ttributes, (c)hildren

            if (this.active) {
                this.active.c.push(node);
                this.stack.push(this.active);
            } else
                this.root = node;
            this.active = node;
        },
        //go up one node, if we are in the root, ignore it
        writeEndElement: function () {
            this.active = this.stack.pop() || this.root;
        },
        //add an attribute to the active node
        writeAttributeString: function (name, value) {
            if (this.active)
                this.active.a[name] = value;
        },
        //add a text node to the active node
        writeString: function (text) {
            if (this.active)
                this.active.c.push(text);
        },
        //shortcut, open an element, write the text and close
        writeElementString: function (name, text, ns) {
            this.writeStartElement(name, ns);
            this.writeString(text);
            this.writeEndElement();
        },
        //add a text node wrapped with CDATA
        writeCDATA: function (text) {
            this.writeString('<![CDATA[' + text + ']]>');
        },
        //add a text node wrapped in a comment
        writeComment: function (text) {
            this.writeString('<!-- ' + text + ' -->');
        },
        //generate the xml string, you can skip closing the last nodes
        flush: function () {
            if (this.stack && this.stack[0])//ensure it's closed
                this.writeEndDocument();

            var
                chr = '', indent = '', num = this.indentation,
                formatting = this.formatting.toLowerCase() == 'indented',
                buffer = '<?xml version="' + this.version + '" encoding="' + this.encoding + '"';

            if (this.standalone !== 'undefined')
                buffer += ' standalone="' + !!this.standalone + '"';
            buffer += ' ?>';

            buffer = [buffer];

            if (this.doctype && this.root)
                buffer.push("\'");

            if (formatting) {
                while (num--)
                    chr += this.indentChar;
            }

            if (this.root)//skip if no element was added
                format(this.root, indent, chr, buffer);

            return buffer.join(formatting ? this.newLine : '');
        },
        //cleanup, don't use again without calling startDocument
        close: function () {
            if (this.root)
                clean(this.root);
            this.active = this.root = this.stack = null;
        },
        /*  getDocument: window.ActiveXObject
              ? function () { //MSIE
                  var doc = new ActiveXObject('Microsoft.XMLDOM');
                  doc.async = false;
                  doc.loadXML(this.flush());
                  return doc;
              }
              : function () {// Mozilla, Firefox, Opera, etc.
                  return (new DOMParser()).parseFromString(this.flush(), 'text/xml');
              }
              */
    };

    //utility, you don't need it
    function clean(node) {
        var l = node.c.length;
        while (l--) {
            if (typeof node.c[l] == 'object')
                clean(node.c[l]);
        }
        node.n = node.a = node.c = null;
    };

    //utility, you don't need it
    function format(node, indent, chr, buffer) {
        var
            xml = indent + '<' + node.n,
            nc = node.c.length,
            attr, child, i = 0;

        for (attr in node.a)
            xml += ' ' + attr + '="' + node.a[attr] + '"';

        xml += nc ? '>' : ' />';

        buffer.push(xml);

        if (nc) {
            do {
                child = node.c[i++];
                if (typeof child == 'string') {
                    if (nc == 1)//single text node
                        return buffer.push(buffer.pop() + child + '</' + node.n + '>');
                    else //regular text node
                        buffer.push(indent + chr + child);
                } else if (typeof child == 'object') //element node
                    format(child, indent + chr, chr, buffer);
            } while (i < nc);
            buffer.push(indent + '</' + node.n + '>');
        }
    };

})();
