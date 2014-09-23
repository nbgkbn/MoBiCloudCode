var setV3XML = function (TheCall) {
   
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
    //XML.writeAttributeString('xmlns', "http://www.nemsis.org  xsi:schemaLocation=http://www.nemsis.org http://nemsis.org/media/XSD_v3/_nemsis_v3.3.4/3.3.4.140328/XSDs/NEMSIS_XSDs_v3.3.4.140328/EMSDataSet_v3.xsd  xmlns:xsi=http://www.w3.org/2001/XMLSchema-instance") 
    XML.writeAttributeString('xmlns', 'http://www.nemsis.org'); 8
    XML.writeAttributeString('xsi:schemaLocation', '="http://www.nemsis.org http://www.nemsis.org/media/XSD/EMSDataSet.xsd');
    XML.writeAttributeString('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance');


    XML.writeStartElement("Header");
    XML.writeStartElement("PatientCareReport");
    if (typeof TheCall.eRecord != 'undefined') {
        XML.writeStartElement("eRecord");

        if (typeof TheCall.eRecord["eRecord.01"] != 'undefined') {
            if (TheCall.eRecord["eRecord.01"].IsNull == false) {
                XML.writeElementString("eRecord.01", TheCall.eRecord["eRecord.01"].vSet[0]);
            }
        };
        
        XML.writeStartElement("eRecord.SoftwareApplicationGroup");
        
        if (typeof TheCall.eRecord["eRecord.02"] != 'undefined') {
            XML.writeStartElement("eRecord.SoftwareApplicationGroup");
            if (TheCall.eRecord["eRecord.02"].IsNull == false) {
                XML.writeElementString("eRecord.02", TheCall.eRecord["eRecord.02"].vSet[0]);
            }            
        };
        if (typeof TheCall.eRecord["eRecord.03"] != 'undefined') {
            if (TheCall.eRecord["eRecord.03"].IsNull == false) {
                XML.writeElementString("eRecord.03", TheCall.eRecord["eRecord.03"].vSet[0]);
            }
        };
        if (typeof TheCall.eRecord["eRecord.04"] != 'undefined') {
            if (TheCall.eRecord["eRecord.04"].IsNull == false) {
                XML.writeElementString("eRecord.04", TheCall.eRecord["eRecord.04"].vSet[0]);
            }
        };
        XML.writeEndElement();        
        XML.writeEndElement("eRecord");
    };
    //Dispatch
    if (typeof TheCall.eDispatch != 'undefined') {
        XML.writeStartElement("eDispatch");
        if (TheCall.eDispatch["eDispatch.01"].IsNull == false) {
            XML.writeElementString("eDispatch.01", TheCall.eDispatch["eDispatch.01"].vSet[0]);
        }
        else {
            if (TheCall.eDispatch["eDispatch.02"].NV == true) {
            }
            XML.writeStartElement('eDispatch.02');
            XML.writeAttributeString('xsi:nil', 'true');
            XML.writeAttributeString('NV', TheCall.eDispatch["eDispatch.02"].vSet[0]);
            XML.writeEndElement();
        };

        if (typeof TheCall.eDispatch["eDispatch.03"].IsNull != 'undefined') {
            if (TheCall.eDispatch["eDispatch.03"].IsNull == false) {
                XML.writeElementString("eDispatch.03", TheCall.eDispatch["eDispatch.03"].vSet[0]);
            }
        };
        if (typeof TheCall.eDispatch["eDispatch.04"].IsNull != 'undefined') {
            if (TheCall.eDispatch["eDispatch.04"].IsNull == false) {
                XML.writeElementString("eDispatch.04", TheCall.eDispatch["eDispatch.04"].vSet[0]);
            }
        };

        if (typeof TheCall.eDispatch["eDispatch.05"].IsNull != 'undefined') {
            if (TheCall.eDispatch["eDispatch.05"].IsNull == false) {
                XML.writeElementString("eDispatch.05", TheCall.eDispatch["eDispatch.05"].vSet[0]);
            }
        };

        XML.writeEndElement("eDispatch");
    };
    //Disposition
    if (typeof TheCall.eDisposition != 'undefined') {
        XML.writeStartElement("eDisposition");
        if (typeof TheCall.eDisposition["DestinationGroup"] != 'undefined') {
            XML.writeStartElement("eDisposition.DestinationGroup");

            if (typeof TheCall.eDisposition["eDisposition.01"] != 'undefined') {
                if (TheCall.eDisposition["eDisposition.01"].IsNull == false) {

                    XML.writeElementString("eDisposition.01", TheCall.eDisposition["eDisposition.01"].vSet[0]);
                }

                else {
                    if (TheCall.eDisposition["eDisposition.01"].NV == true) {
                        XML.writeStartElement('eDisposition.01');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eDisposition["eDisposition.01"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eDisposition["eDisposition.02"] != 'undefined') {
                if (TheCall.eDisposition["eDisposition.02"].IsNull == false) {

                    XML.writeElementString("eDisposition.02", TheCall.eDisposition["eDisposition.02"].vSet[0]);
                }

                else {
                    if (TheCall.eDisposition["eDisposition.02"].NV == true) {
                        XML.writeStartElement('eDisposition.02');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eDisposition["eDisposition.02"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };
            if (typeof TheCall.eDisposition["eDisposition.03"] != 'undefined') {
                if (TheCall.eDisposition["eDisposition.03"].IsNull == false) {

                    XML.writeElementString("eDisposition.03", TheCall.eDisposition["eDisposition.03"].vSet[0]);
                }

                else {
                    if (TheCall.eDisposition["eDisposition.03"].NV == true) {
                        XML.writeStartElement('eDisposition.03');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eDisposition["eDisposition.03"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eDisposition["eDisposition.04"] != 'undefined') {
                if (TheCall.eDisposition["eDisposition.04"].IsNull == false) {

                    XML.writeElementString("eDisposition.04", TheCall.eDisposition["eDisposition.04"].vSet[0]);
                }

                else {
                    if (TheCall.eDisposition["eDisposition.04"].NV == true) {
                        XML.writeStartElement('eDisposition.04');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eDisposition["eDisposition.04"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eDisposition["eDisposition.05"] != 'undefined') {
                if (TheCall.eDisposition["eDisposition.05"].IsNull == false) {

                    XML.writeElementString("eDisposition.05", TheCall.eDisposition["eDisposition.05"].vSet[0]);
                }

                else {
                    if (TheCall.eDisposition["eDisposition.05"].NV == true) {
                        XML.writeStartElement('eDisposition.05');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eDisposition["eDisposition.05"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eDisposition["eDisposition.06"] != 'undefined') {
                if (TheCall.eDisposition["eDisposition.06"].IsNull == false) {

                    XML.writeElementString("eDisposition.06", TheCall.eDisposition["eDisposition.06"].vSet[0]);
                }

                else {
                    if (TheCall.eDisposition["eDisposition.06"].NV == true) {
                        XML.writeStartElement('eDisposition.06');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eDisposition["eDisposition.06"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eDisposition["eDisposition.07"] != 'undefined') {
                if (TheCall.eDisposition["eDisposition.07"].IsNull == false) {

                    XML.writeElementString("eDisposition.07", TheCall.eDisposition["eDisposition.07"].vSet[0]);
                }

                else {
                    if (TheCall.eDisposition["eDisposition.07"].NV == true) {
                        XML.writeStartElement('eDisposition.07');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eDisposition["eDisposition.07"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eDisposition["eDisposition.08"] != 'undefined') {
                if (TheCall.eDisposition["eDisposition.08"].IsNull == false) {
                    XML.writeElementString("eDisposition.08", TheCall.eDisposition["eDisposition.08"].vSet[0]);
                }
            };

            if (typeof TheCall.eDisposition["eDisposition.09"] != 'undefined') {
                if (TheCall.eDisposition["eDisposition.09"].IsNull == false) {
                    XML.writeElementString("eDisposition.09", TheCall.eDisposition["eDisposition.09"].vSet[0]);
                }
            };

            if (typeof TheCall.eDisposition["eDisposition.10"] != 'undefined') {
                if (TheCall.eDisposition["eDisposition.10"].IsNull == false) {
                    XML.writeElementString("eDisposition.10", TheCall.eDisposition["eDisposition.10"].vSet[0]);
                }
            };

            XML.writeEndElement();
        };
        /////////////////

        if (typeof TheCall.eDisposition["eDisposition.11"] != 'undefined') {
            if (TheCall.eDisposition["eDisposition.11"].IsNull == false) {

                XML.writeElementString("eDisposition.11", TheCall.eDisposition["eDisposition.11"].vSet[0]);
            }

            else {
                if (TheCall.eDisposition["eDisposition.11"].NV == true) {
                    XML.writeStartElement('eDisposition.11');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eDisposition["eDisposition.11"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eDisposition["eDisposition.12"] != 'undefined') {
            if (TheCall.eDisposition["eDisposition.12"].IsNull == false) {

                XML.writeElementString("eDisposition.12", TheCall.eDisposition["eDisposition.12"].vSet[0]);
            }

            else {
                if (TheCall.eDisposition["eDisposition.12"].NV == true) {
                    XML.writeStartElement('eDisposition.12');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eDisposition["eDisposition.12"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof TheCall.eDisposition["eDisposition.13"] != 'undefined') {
            if (TheCall.eDisposition["eDisposition.13"].IsNull == false) {
                for (var d = 0; d < TheCall.eDisposition["eDisposition.13"].vSet.length; d++) {
                    XML.writeElementString("eDisposition.13", TheCall.eDisposition["eDisposition.13"].vSet[d]);
                }
            }
            else {
                XML.writeElementString("eDisposition.13", "");
            }
        };
        if (typeof TheCall.eDisposition["eDisposition.14"] != 'undefined') {
            if (TheCall.eDisposition["eDisposition.14"].IsNull == false) {
                for (var d = 0; d < TheCall.eDisposition["eDisposition.14"].vSet.length; d++) {
                    XML.writeElementString("eDisposition.14", TheCall.eDisposition["eDisposition.14"].vSet[d]);
                }
            }
            else {
                XML.writeElementString("eDisposition.14", "");
            }
        };

        if (typeof TheCall.eDisposition["eDisposition.15"] != 'undefined') {
            if (TheCall.eDisposition["eDisposition.15"].IsNull == false) {
                XML.writeElementString("eDisposition.15", TheCall.eDisposition["eDisposition.15"].vSet[0]);
            }
            else {
                XML.writeElementString("eDisposition.15", "");
            }
        };

        if (typeof TheCall.eDisposition["eDisposition.16"] != 'undefined') {
            if (TheCall.eDisposition["eDisposition.16"].IsNull == false) {

                XML.writeElementString("eDisposition.16", TheCall.eDisposition["eDisposition.16"].vSet[0]);
            }

            else {
                if (TheCall.eDisposition["eDisposition.16"].NV == true) {
                    XML.writeStartElement('eDisposition.16');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eDisposition["eDisposition.16"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof TheCall.eDisposition["eDisposition.17"] != 'undefined') {
            if (TheCall.eDisposition["eDisposition.17"].IsNull == false) {

                XML.writeElementString("eDisposition.17", TheCall.eDisposition["eDisposition.17"].vSet[0]);
            }

            else {
                if (TheCall.eDisposition["eDisposition.17"].NV == true) {
                    XML.writeStartElement('eDisposition.17');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eDisposition["eDisposition.17"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eDisposition["eDisposition.18"] != 'undefined') {
            if (TheCall.eDisposition["eDisposition.18"].IsNull == false) {
                for (var d = 0; d < TheCall.eDisposition["eDisposition.18"].vSet.length; d++) {
                    XML.writeElementString("eDisposition.18", TheCall.eDisposition["eDisposition.18"].vSet[d]);
                }
            }
            else {
                if (TheCall.eDisposition["eDisposition.18"].NV == true) {
                    XML.writeStartElement('eDisposition.18');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eDisposition["eDisposition.18"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof TheCall.eDisposition["eDisposition.19"] != 'undefined') {
            if (TheCall.eDisposition["eDisposition.19"].IsNull == false) {

                XML.writeElementString("eDisposition.19", TheCall.eDisposition["eDisposition.19"].vSet[0]);
            }

            else {
                if (TheCall.eDisposition["eDisposition.19"].NV == true) {
                    XML.writeStartElement('eDisposition.19');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eDisposition["eDisposition.19"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof TheCall.eDisposition["eDisposition.20"] != 'undefined') {
            if (TheCall.eDisposition["eDisposition.20"].IsNull == false) {
                for (var d = 0; d < TheCall.eDisposition["eDisposition.20"].vSet.length; d++) {
                    XML.writeElementString("eDisposition.20", TheCall.eDisposition["eDisposition.20"].vSet[d]);
                }

            }

            else {
                if (TheCall.eDisposition["eDisposition.20"].NV == true) {
                    XML.writeStartElement('eDisposition.20');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eDisposition["eDisposition.20"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof TheCall.eDisposition["eDisposition.21"] != 'undefined') {
            if (TheCall.eDisposition["eDisposition.21"].IsNull == false) {

                XML.writeElementString("eDisposition.21", TheCall.eDisposition["eDisposition.21"].vSet[0]);
            }

            else {
                if (TheCall.eDisposition["eDisposition.21"].NV == true) {
                    XML.writeStartElement('eDisposition.21');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eDisposition["eDisposition.21"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof TheCall.eDisposition["eDisposition.22"] != 'undefined') {
            if (TheCall.eDisposition["eDisposition.22"].IsNull == false) {

                XML.writeElementString("eDisposition.22", TheCall.eDisposition["eDisposition.22"].vSet[0]);
            }

            else {
                if (TheCall.eDisposition["eDisposition.22"].NV == true) {
                    XML.writeStartElement('eDisposition.22');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eDisposition["eDisposition.22"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof TheCall.eDisposition["eDisposition.23"] != 'undefined') {
            if (TheCall.eDisposition["eDisposition.23"].IsNull == false) {

                XML.writeElementString("eDisposition.23", TheCall.eDisposition["eDisposition.23"].vSet[0]);
            }

            else {
                if (TheCall.eDisposition["eDisposition.23"].NV == true) {
                    XML.writeStartElement('eDisposition.23');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eDisposition["eDisposition.23"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof TheCall.eDisposition.HospitalTeamActivationGroup != 'undefined') {
            for (var i = 0; i < TheCall.eDisposition.HospitalTeamActivationGroup.length; i++) {
                if (TheCall.eDisposition["HospitalTeamActivationGroup"] != -1) {
                    XML.writeStartElement("eDisposition.HospitalTeamActivationGroup");
                    if (typeof TheCall.eDisposition.HospitalTeamActivationGroup[i]["eDisposition.27"] != 'undefined') {
                        if (TheCall.eDisposition.HospitalTeamActivationGroup[i]["eDisposition.27"].IsNull == false) {

                            XML.writeElementString("eDisposition.23", TheCall.eDisposition.HospitalTeamActivationGroup[i]["eDisposition.27"].vSet[0]);
                        }

                        else {
                            if (TheCall.eDisposition["eDisposition.27"].NV == true) {
                                XML.writeStartElement('eDisposition.27');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', TheCall.eDisposition.HospitalTeamActivationGroup[i]["eDisposition.27"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    };
                    if (typeof TheCall.eDisposition.HospitalTeamActivationGroup[i]["eDisposition.25"] != 'undefined') {
                        if (TheCall.eDisposition.HospitalTeamActivationGroup[i]["eDisposition.25"].IsNull == false) {
                            XML.writeElementString("eDisposition.23", TheCall.eDisposition.HospitalTeamActivationGroup[i]["eDisposition.25"].vSet[0]);
                        }

                        else {
                            if (TheCall.eDisposition["eDisposition.25"].NV == true) {
                                XML.writeStartElement('eDisposition.25');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', TheCall.eDisposition.HospitalTeamActivationGroup[i]["eDisposition.25"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    };
                    XML.writeEndElement();
                };
            };
            if (typeof TheCall.eDisposition["eDisposition.26"] != 'undefined') {
                if (TheCall.eDisposition["eDisposition.26"].IsNull == false) {
                    for (var d = 0; d < TheCall.eDisposition["eDisposition.26"].vSet.length; d++) {
                        XML.writeElementString("eDisposition.26", TheCall.eDisposition["eDisposition.26"].vSet[d]);
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
        XML.writeStartElement("eTimes");
        if (typeof TheCall.eTimes["eTimes.01"] != 'undefined') {
            if (TheCall.eTimes["eTimes.01"].IsNull == false) {
                XML.writeElementString("eTimes.01", TheCall.eTimes["eTimes.01"].vSet[0]);
            }
            else {
                if (TheCall.eTimes["eTimes.01"].NV == true) {

                    XML.writeStartElement('eTimes.01');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eTimes["eTimes.01"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eTimes["eTimes.02"] != 'undefined') {
            if (TheCall.eTimes["eTimes.02"].IsNull == false) {
                XML.writeElementString("eTimes.02", TheCall.eTimes["eTimes.02"].vSet[0]);
            }
            else {
                XML.writeElementString("eTimes.02", "");
            }
        };

        if (typeof TheCall.eTimes["eTimes.03"] != 'undefined') {
            if (TheCall.eTimes["eTimes.03"].IsNull == false) {
                XML.writeElementString("eTimes.03", TheCall.eTimes["eTimes.03"].vSet[0]);
            }
        };

        if (typeof TheCall.eTimes["eTimes.04"] != 'undefined') {
            if (TheCall.eTimes["eTimes.04"].IsNull == false) {
                XML.writeElementString("eTimes.04", TheCall.eTimes["eTimes.04"].vSet[0]);
            }
            else {
                XML.writeElementString("eTimes.04", "");
            }
        };

        if (typeof TheCall.eTimes["eTimes.05"] != 'undefined') {
            if (TheCall.eTimes["eTimes.05"].IsNull == false) {
                XML.writeElementString("eTimes.05", TheCall.eTimes["eTimes.05"].vSet[0]);
            }
            else {
                if (TheCall.eTimes["eTimes.05"].NV == true) {
                }
                XML.writeStartElement('eTimes.05');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', TheCall.eTimes["eTimes.05"].vSet[0]);
                XML.writeEndElement();
            }
        };

        if (typeof TheCall.eTimes["eTimes.06"] != 'undefined') {
            if (TheCall.eTimes["eTimes.06"].IsNull == false) {
                XML.writeElementString("eTimes.06", TheCall.eTimes["eTimes.06"].vSet[0]);
            }
            else {
                if (TheCall.eTimes["eTimes.06"].NV == true) {
                }
                XML.writeStartElement('eTimes.06');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', TheCall.eTimes["eTimes.06"].vSet[0]);
                XML.writeEndElement();
            }
        };

        if (typeof TheCall.eTimes["eTimes.07"] != 'undefined') {
            if (TheCall.eTimes["eTimes.07"].IsNull == false) {
                XML.writeElementString("eTimes.07", TheCall.eTimes["eTimes.07"].vSet[0]);
            }
            else {
                if (TheCall.eTimes["eTimes.07"].NV == true) {
                }
                XML.writeStartElement('eTimes.07');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', TheCall.eTimes["eTimes.07"].vSet[0]);
                XML.writeEndElement();
            }
        };

        if (typeof TheCall.eTimes["eTimes.08"] != 'undefined') {
            if (TheCall.eTimes["eTimes.08"].IsNull == false) {
                XML.writeElementString("eTimes.08", TheCall.eTimes["eTimes.08"].vSet[0]);
            }
            else {
                if (TheCall.eTimes["eTimes.08"].NV == true) {
                }
                XML.writeStartElement('eTimes.08');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', TheCall.eTimes["eTimes.08"].vSet[0]);
                XML.writeEndElement();
            }
        };
        if (typeof TheCall.eTimes["eTimes.09"] != 'undefined') {
            if (TheCall.eTimes["eTimes.09"].IsNull == false) {
                XML.writeElementString("eTimes.09", TheCall.eTimes["eTimes.09"].vSet[0]);
            }
            else {
                if (TheCall.eTimes["eTimes.09"].NV == true) {
                }
                XML.writeStartElement('eTimes.09');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', TheCall.eTimes["eTimes.09"].vSet[0]);
                XML.writeEndElement();
            }
        };

        if (typeof TheCall.eTimes["eTimes.10"] != 'undefined') {
            if (TheCall.eTimes["eTimes.10"].IsNull == false) {
                XML.writeElementString("eTimes.10", TheCall.eTimes["eTimes.10"].vSet[0]);
            }
            else {
                XML.writeElementString("eTimes.10", "");
            }
        };

        if (typeof TheCall.eTimes["eTimes.11"] != 'undefined') {
            if (TheCall.eTimes["eTimes.11"].IsNull == false) {
                XML.writeElementString("eTimes.11", TheCall.eTimes["eTimes.11"].vSet[0]);
            }
            else {
                if (TheCall.eTimes["eTimes.11"].NV == true) {
                }
                XML.writeStartElement('eTimes.11');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', TheCall.eTimes["eTimes.11"].vSet[0]);
                XML.writeEndElement();
            }
        };

        if (typeof TheCall.eTimes["eTimes.12"] != 'undefined') {
            if (TheCall.eTimes["eTimes.12"].IsNull == false) {
                XML.writeElementString("eTimes.12", TheCall.eTimes["eTimes.12"].vSet[0]);
            }
            else {
                if (TheCall.eTimes["eTimes.12"].NV == true) {
                }
                XML.writeStartElement('eTimes.12');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', TheCall.eTimes["eTimes.12"].vSet[0]);
                XML.writeEndElement();
            }
        };

        if (typeof TheCall.eTimes["eTimes.13"] != 'undefined') {
            if (TheCall.eTimes["eTimes.13"].IsNull == false) {
                XML.writeElementString("eTimes.13", TheCall.eTimes["eTimes.13"].vSet[0]);
            }
            else {
                XML.writeElementString("eTimes.13", "");
            }
        };
        if (typeof TheCall.eTimes["eTimes.14"] != 'undefined') {
            if (TheCall.eTimes["eTimes.14"].IsNull == false) {
                XML.writeElementString("eTimes.14", TheCall.eTimes["eTimes.14"].vSet[0]); 
            }
            else {
                XML.writeElementString("eTimes.14", "");
            }
        };
        if (typeof TheCall.eTimes["eTimes.15"] != 'undefined') {
            if (TheCall.eTimes["eTimes.15"].IsNull == false) {
                XML.writeElementString("eTimes.15", TheCall.eTimes["eTimes.15"].vSet[0]);
            }
            else {
                XML.writeElementString("eTimes.15", "");
            }
        };

        if (typeof TheCall.eTimes["eTimes.16"] != 'undefined') {
            if (TheCall.eTimes["eTimes.16"].IsNull == false) {
                XML.writeElementString("eTimes.16", TheCall.eTimes["eTimes.16"].vSet[0]);
            }
            else {
                XML.writeElementString("eTimes.16", "");
            }
        };
        XML.writeEndElement()
        /////////////////////Response
    };
    //Response
    if (typeof TheCall.eResponse != 'undefined') {
        XML.writeStartElement("eResponse");
        if (TheCall.eResponse["AgencyGroup"] > 0) {
            XML.writeStartElement("eResponse.AgencyGroup");
            if (typeof TheCall.eResponse["eResponse.01"] != 'undefined') {
                if (TheCall.eResponse["eResponse.01"].IsNull == false) {
                    XML.writeElementString("eResponse.01", TheCall.eResponse["eResponse.01"].vSet[0]);
                }
            };

            if (typeof TheCall.eResponse["eResponse.02"] != 'undefined') {
                if (TheCall.eResponse["eResponse.02"].IsNull == false) {
                    XML.writeElementString("eResponse.02", TheCall.eResponse["eResponse.02"].vSet[0]);
                }
                else {
                    if (TheCall.eResponse["eResponse.02"].NV == true) {
                    }
                    XML.writeStartElement('eResponse.02');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eResponse["eResponse.02"].vSet[0]);
                    XML.writeEndElement();
                }
            };
            XML.writeEndElement();
        };
        if (typeof TheCall.eResponse["eResponse.03"] != 'undefined') {
            if (TheCall.eResponse["eResponse.03"].IsNull == false) {
                XML.writeElementString("eResponse.03", TheCall.eResponse["eResponse.03"].vSet[0]);
            }
            else {
                if (TheCall.eResponse["eResponse.03"].NV == true) {
                }
                XML.writeStartElement('eResponse.03');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', TheCall.eResponse["eResponse.03"].vSet[0]);
                XML.writeEndElement();
            }
        };


        if (typeof TheCall.eResponse["eResponse.04"] != 'undefined') {
            if (TheCall.eResponse["eResponse.04"].IsNull == false) {
                XML.writeElementString("eResponse.04", TheCall.eResponse["eResponse.04"].vSet[0]);
            }
            else {
                if (TheCall.eResponse["eResponse.04"].NV == true) {
                }
                XML.writeStartElement('eResponse.04');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', TheCall.eResponse["eResponse.04"].vSet[0]);
                XML.writeEndElement();
            }
        };
        if (TheCall.eResponse["AgencyServiceGroup"] > 0) {
            XML.writeStartElement("eResponse.AgencyServiceGroup");
            if (typeof TheCall.eResponse["eResponse.05"] != 'undefined') {
                if (TheCall.eResponse["eResponse.05"].IsNull == false) {
                    XML.writeElementString("eResponse.05", TheCall.eResponse["eResponse.05"].vSet[0]);
                }
            };

            if (typeof TheCall.eResponse["eResponse.06"] != 'undefined') {
                if (TheCall.eResponse["eResponse.06"].IsNull == false) {
                    XML.writeElementString("eResponse.06", TheCall.eResponse["eResponse.06"].vSet[0]);
                }
                else {
                    if (TheCall.eResponse["eResponse.06"].NV == true) {
                    }
                    XML.writeStartElement('eResponse.06');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eResponse["eResponse.06"].vSet[0]);
                    XML.writeEndElement();
                }
            };
            XML.writeEndElement();
        };
        if (typeof TheCall.eResponse["eResponse.07"] != 'undefined') {
            if (TheCall.eResponse["eResponse.07"].IsNull == false) {
                XML.writeElementString("eResponse.07", TheCall.eResponse["eResponse.07"].vSet[0]);
            }
        };


        if (typeof TheCall.eResponse["eResponse.08"] != 'undefined') {
            if (TheCall.eResponse["eResponse.08"].IsNull == false) {
                for (var d = 0; d < TheCall.eResponse["eResponse.08"].vSet.length; d++) {
                    XML.writeElementString("eResponse.08", TheCall.eResponse["eResponse.08"].vSet[d]);
                }

            }

            else {
                if (TheCall.eResponse["eResponse.08"].NV == true) {
                    XML.writeStartElement('eResponse.08');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eResponse["eResponse.08"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eResponse["eResponse.09"] != 'undefined') {
            if (TheCall.eResponse["eResponse.09"].IsNull == false) {
                for (var d = 0; d < TheCall.eResponse["eResponse.09"].vSet.length; d++) {
                    XML.writeElementString("eResponse.09", TheCall.eResponse["eResponse.09"].vSet[d]);
                }

            }

            else {
                if (TheCall.eResponse["eResponse.09"].NV == true) {
                    XML.writeStartElement('eResponse.09');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eResponse["eResponse.09"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eResponse["eResponse.10"] != 'undefined') {
            if (TheCall.eResponse["eResponse.10"].IsNull == false) {
                for (var d = 0; d < TheCall.eResponse["eResponse.10"].vSet.length; d++) {
                    XML.writeElementString("eResponse.10", TheCall.eResponse["eResponse.10"].vSet[d]);
                }

            }

            else {
                if (TheCall.eResponse["eResponse.10"].NV == true) {
                    XML.writeStartElement('eResponse.10');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eResponse["eResponse.10"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof TheCall.eResponse["eResponse.11"] != 'undefined') {
            if (TheCall.eResponse["eResponse.11"].IsNull == false) {
                for (var d = 0; d < TheCall.eResponse["eResponse.11"].vSet.length; d++) {
                    XML.writeElementString("eResponse.11", TheCall.eResponse["eResponse.11"].vSet[d]);
                }
            }
            else {
                if (TheCall.eResponse["eResponse.11"].NV == true) {
                    XML.writeStartElement('eResponse.11');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eResponse["eResponse.11"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eResponse["eResponse.12"] != 'undefined') {
            if (TheCall.eResponse["eResponse.12"].IsNull == false) {
                for (var d = 0; d < TheCall.eResponse["eResponse.12"].vSet.length; d++) {
                    XML.writeElementString("eResponse.12", TheCall.eResponse["eResponse.12"].vSet[d]);
                }

            }

            else {
                if (TheCall.eResponse["eResponse.12"].NV == true) {
                    XML.writeStartElement('eResponse.12');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eResponse["eResponse.12"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };



        if (typeof TheCall.eResponse["eResponse.13"] != 'undefined') {
            if (TheCall.eResponse["eResponse.13"].IsNull == false) {
                XML.writeElementString("eResponse.13", TheCall.eResponse["eResponse.13"].vSet[0]);
            }

            else {
                if (TheCall.eResponse["eResponse.13"].NV == true) {
                    XML.writeStartElement('eResponse.13');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eResponse["eResponse.13"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eResponse["eResponse.14"] != 'undefined') {
            if (TheCall.eResponse["eResponse.14"].IsNull == false) {
                XML.writeElementString("eResponse.14", TheCall.eResponse["eResponse.14"].vSet[0]);
            }

            else {
                if (TheCall.eResponse["eResponse.14"].NV == true) {
                    XML.writeStartElement('eResponse.14');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eResponse["eResponse.14"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eResponse["eResponse.15"] != 'undefined') {
            if (TheCall.eResponse["eResponse.15"].IsNull == false) {
                XML.writeElementString("eResponse.15", TheCall.eResponse["eResponse.15"].vSet[0]);
            }

            else {
                if (TheCall.eResponse["eResponse.15"].NV == true) {
                    XML.writeStartElement('eResponse.15');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eResponse["eResponse.15"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eResponse["eResponse.16"] != 'undefined') {
            if (TheCall.eResponse["eResponse.16"].IsNull == false) {
                XML.writeElementString("eResponse.16", TheCall.eResponse["eResponse.16"].vSet[0]);
            }
        };

        if (typeof TheCall.eResponse["eResponse.17"] != 'undefined') {
            if (TheCall.eResponse["eResponse.17"].IsNull == false) {
                XML.writeElementString("eResponse.17", TheCall.eResponse["eResponse.17"].vSet[0]);
            }
        };

        if (typeof TheCall.eResponse["eResponse.18"] != 'undefined') {
            if (TheCall.eResponse["eResponse.18"].IsNull == false) {
                XML.writeElementString("eResponse.18", TheCall.eResponse["eResponse.18"].vSet[0]);
            }
        };

        if (typeof TheCall.eResponse["eResponse.19"] != 'undefined') {
            if (TheCall.eResponse["eResponse.19"].IsNull == false) {
                XML.writeElementString("eResponse.19", TheCall.eResponse["eResponse.19"].vSet[0]);
            }

            else {
                if (TheCall.eResponse["eResponse.19"].NV == true) {
                    XML.writeStartElement('eResponse.19');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eResponse["eResponse.19"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eResponse["eResponse.20"] != 'undefined') {
            if (TheCall.eResponse["eResponse.20"].IsNull == false) {
                XML.writeElementString("eResponse.20", TheCall.eResponse["eResponse.20"].vSet[0]);
            }

            else {
                if (TheCall.eResponse["eResponse.20"].NV == true) {
                    XML.writeStartElement('eResponse.20');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eResponse["eResponse.20"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eResponse["eResponse.21"] != 'undefined') {
            if (TheCall.eResponse["eResponse.21"].IsNull == false) {
                XML.writeElementString("eResponse.21", TheCall.eResponse["eResponse.21"].vSet[0]);
            }

            else {
                if (TheCall.eResponse["eResponse.21"].NV == true) {
                    XML.writeStartElement('eResponse.21');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eResponse["eResponse.21"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eResponse["eResponse.22"] != 'undefined') {
            if (TheCall.eResponse["eResponse.22"].IsNull == false) {
                XML.writeElementString("eResponse.22", TheCall.eResponse["eResponse.22"].vSet[0]);
            }

            else {
                if (TheCall.eResponse["eResponse.22"].NV == true) {
                    XML.writeStartElement('eResponse.22');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eResponse["eResponse.22"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eResponse["eResponse.23"] != 'undefined') {
            if (TheCall.eResponse["eResponse.23"].IsNull == false) {
                XML.writeElementString("eResponse.23", TheCall.eResponse["eResponse.23"].vSet[0]);
            }

            else {
                if (TheCall.eResponse["eResponse.23"].NV == true) {
                    XML.writeStartElement('eResponse.23');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eResponse["eResponse.23"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };


        if (typeof TheCall.eResponse["eResponse.27"] != 'undefined') {
            if (TheCall.eResponse["eResponse.27"].IsNull == false) {
                for (var d = 0; d < TheCall.eResponse["eResponse.27"].vSet.length; d++) {
                    XML.writeElementString("eResponse.27", TheCall.eResponse["eResponse.27"].vSet[d]);
                }

            }

            else {
                if (TheCall.eResponse["eResponse.27"].NV == true) {
                    XML.writeStartElement('eResponse.27');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eResponse["eResponse.27"].vSet[0]);
                    XML.writeEndElement();
                }
            };
            XML.writeEndElement();
        }
    };
    //Patient       
    if (typeof TheCall.ePatient != 'undefined') {
        if (typeof TheCall.ePatient["ePatient.01"] != 'undefined') {
            if (TheCall.ePatient["ePatient.01"].IsNull == false) {
                XML.writeElementString("ePatient.01", TheCall.ePatient["ePatient.01"].vSet[0]);
            }
        };
        if (TheCall.ePatient["PatientNameGroup"] > 0) {
            XML.writeStartElement("ePatient.PatientNameGroup")
            if (typeof TheCall.ePatient["ePatient.02"] != 'undefined') {
                if (TheCall.ePatient["ePatient.02"].IsNull == false) {
                    XML.writeElementString("ePatient.02", TheCall.ePatient["ePatient.02"].vSet[0]);
                }
                else {
                    if (TheCall.ePatient["ePatient.02"].NV == true) {

                        XML.writeStartElement('ePatient.02');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.ePatient["ePatient.02"].vSet[0]);
                        XML.writeEndElement();
                    }
                    else if (TheCall.ePatient["ePatient.02"].PN == true) {
                        XML.writeStartElement('ePatient.02');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('PN', TheCall.ePatient["ePatient.02"].vSet[0]);
                        XML.writeEndElement();

                    }
                }
            };

            if (typeof TheCall.ePatient["ePatient.03"] != 'undefined') {
                if (TheCall.ePatient["ePatient.03"].IsNull == false) {
                    XML.writeElementString("ePatient.03", TheCall.ePatient["ePatient.03"].vSet[0]);
                }
                else {
                    if (TheCall.ePatient["ePatient.03"].NV == true) {

                        XML.writeStartElement('ePatient.03');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.ePatient["ePatient.03"].vSet[0]);
                        XML.writeEndElement();
                    }
                    else if (TheCall.ePatient["ePatient.03"].PN == true) {
                        XML.writeStartElement('ePatient.03');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('PN', TheCall.ePatient["ePatient.03"].vSet[0]);
                        XML.writeEndElement();

                    }
                }
            };

            if (typeof TheCall.ePatient["ePatient.04"] != 'undefined') {
                if (TheCall.ePatient["ePatient.04"].IsNull == false) {
                    XML.writeElementString("ePatient.04", TheCall.ePatient["ePatient.04"].vSet[0]);
                }
            };
            XML.writeEndElement();
        };

        if (typeof TheCall.ePatient["ePatient.05"] != 'undefined') {
            if (TheCall.ePatient["ePatient.05"].IsNull == false) {
                XML.writeElementString("ePatient.05", TheCall.ePatient["ePatient.05"].vSet[0]);
            }
        };

        if (typeof TheCall.ePatient["ePatient.06"] != 'undefined') {
            if (TheCall.ePatient["ePatient.06"].IsNull == false) {
                XML.writeElementString("ePatient.06", TheCall.ePatient["ePatient.06"].vSet[0]);
            }
        };

        if (typeof TheCall.ePatient["ePatient.07"] != 'undefined') {
            if (TheCall.ePatient["ePatient.07"].IsNull == false) {
                XML.writeElementString("ePatient.07", TheCall.ePatient["ePatient.07"].vSet[0]);
            }
            else {
                if (TheCall.ePatient["ePatient.07"].NV == true) {
                }
                XML.writeStartElement('ePatient.07');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', TheCall.ePatient["ePatient.07"].vSet[0]);
                XML.writeEndElement();
            }
        };

        if (typeof TheCall.ePatient["ePatient.07"] != 'undefined') {
            if (TheCall.ePatient["ePatient.08"].IsNull == false) {
                XML.writeElementString("ePatient.08", TheCall.ePatient["ePatient.08"].vSet[0]);
            }
            else {7
                if (TheCall.ePatient["ePatient.08"].NV == true) {
                }
                XML.writeStartElement('ePatient.08');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', TheCall.ePatient["ePatient.08"].vSet[0]);
                XML.writeEndElement();
            }
        };

        if (typeof TheCall.ePatient["ePatient.09"] != 'undefined') {
            if (TheCall.ePatient["ePatient.09"].IsNull == false) {
                XML.writeElementString("ePatient.09", TheCall.ePatient["ePatient.09"].vSet[0]);
            }
            else {
                if (TheCall.ePatient["ePatient.09"].NV == true) {
                }
                XML.writeStartElement('ePatient.09');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', TheCall.ePatient["ePatient.09"].vSet[0]);
                XML.writeEndElement();
            }
        };

        if (typeof TheCall.ePatient["ePatient.10"] != 'undefined') {
            if (TheCall.ePatient["ePatient.10"].IsNull == false) {
                XML.writeElementString("ePatient.10", TheCall.ePatient["ePatient.10"].vSet[0]);
            }
        };

        if (typeof TheCall.ePatient["ePatient.11"] != 'undefined') {
            if (TheCall.ePatient["ePatient.11"].IsNull == false) {
                XML.writeElementString("ePatient.11", TheCall.ePatient["ePatient.11"].vSet[0]);
            }
        };

        if (typeof TheCall.ePatient["ePatient.12"] != 'undefined') {
            if (TheCall.ePatient["ePatient.12"].IsNull == false) {
                XML.writeElementString("ePatient.12", TheCall.ePatient["ePatient.12"].vSet[0]);
            }
        };

        if (typeof TheCall.ePatient["ePatient.13"] != 'undefined') {
            if (TheCall.ePatient["ePatient.13"].IsNull == false) {
                XML.writeElementString("ePatient.13", TheCall.ePatient["ePatient.13"].vSet[0]);
            }
            else {
                if (TheCall.ePatient["ePatient.13"].NV == true) {
                }
                XML.writeStartElement('ePatient.13');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', TheCall.ePatient["ePatient.13"].vSet[0]);
                XML.writeEndElement();
            }
        };
        if (typeof TheCall.ePatient["ePatient.14"] != 'undefined') 
        {
            if (TheCall.ePatient["ePatient.14"].IsNull == false) {
                for (var i = 0; i < TheCall.ePatient["ePatient.14"].vSet.length; i++) {
                    XML.writeElementString("ePatient.14", TheCall.ePatient["ePatient.14"].vSet[i]);
                }
            }
            else {
                if (TheCall.ePatient["ePatient.14"].NV == true) {
                    XML.writeStartElement('ePatient.14');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.ePatient["ePatient.14"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (TheCall.ePatient["AgeGroup"] > 0) {
            XML.writeStartElement("ePatient.AgeGroup")

            if (typeof TheCall.ePatient["ePatient.15"] != 'undefined') {
                if (TheCall.ePatient["ePatient.15"].IsNull == false) {
                    XML.writeElementString("ePatient.15", TheCall.ePatient["ePatient.15"].vSet[0]);
                }
                else {
                    if (TheCall.ePatient["ePatient.15"].NV == true) {
                    }
                    XML.writeStartElement('ePatient.15');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.ePatient["ePatient.15"].vSet[0]);
                    XML.writeEndElement();
                }
            };

            if (typeof TheCall.ePatient["ePatient.16"] != 'undefined') {
                if (TheCall.ePatient["ePatient.16"].IsNull == false) {
                    XML.writeElementString("ePatient.16", TheCall.ePatient["ePatient.16"].vSet[0]);
                }
                else {
                    if (TheCall.ePatient["ePatient.16"].NV == true) {
                    }
                    XML.writeStartElement('ePatient.16');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.ePatient["ePatient.16"].vSet[0]);
                    XML.writeEndElement();
                }
            };
            XML.writeEndElement()
            if (typeof TheCall.ePatient["ePatient.17"] != 'undefined') {
                if (TheCall.ePatient["ePatient.17"].IsNull == false) {
                    XML.writeElementString("ePatient.17", TheCall.ePatient["ePatient.17"].vSet[0]);
                }
                else {
                    if (TheCall.ePatient["ePatient.17"].NV == true) {
                    }
                    XML.writeStartElement('ePatient.17');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.ePatient["ePatient.17"].vSet[0]);
                    XML.writeEndElement();
                }
            };

            if (typeof TheCall.ePatient["ePatient.18"] != 'undefined') {
                if (TheCall.ePatient["ePatient.18"].IsNull == false) {
                    for (var i = 0; i <= TheCall.ePatient["ePatient.18"].vSet.length - 1; i++) {
                        if (TheCall.ePatient["ePatient.18"].vSet[i].PhoneNumberType != "") {
                            XML.writeStartElement('ePatient.18');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('PhoneNumberType', TheCall.ePatient["ePatient.18"].vSet[i].val);
                            XML.writeEndElement();
                        }
                        else {

                            XML.writeElementString("ePatient.18", TheCall.ePatient["ePatient.18"].vSet[i].val);
                        }
                    }
                }
            };

            if (typeof TheCall.ePatient["ePatient.19"] != 'undefined') {

                if (TheCall.ePatient["ePatient.19"].IsNull == false) {
                    for (var i = 0; i <= TheCall.ePatient["ePatient.19"].vSet.length - 1; i++) {
                        if (TheCall.ePatient["ePatient.19"].vSet[i].PhoneNumberType != "") {
                            XML.writeStartElement('ePatient.19');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('EMailAddressType', TheCall.ePatient["ePatient.19"].vSet[i].val);
                            XML.writeEndElement();
                        }
                        else {

                            XML.writeElementString("ePatient.18", TheCall.ePatient["ePatient.18"].vSet[i].val);
                        }
                    }
                }
            };

            if (typeof TheCall.ePatient["ePatient.20"] != 'undefined') {
                if (typeof TheCall.ePatient["ePatient.20"] != 'undefined') {
                    if (TheCall.ePatient["ePatient.20"].IsNull == false) {
                        XML.writeElementString("ePatient.20", TheCall.ePatient["ePatient.20"].vSet[0]);
                    }
                }
            };

            if (typeof TheCall.ePatient["ePatient.21"] != 'undefined') {
                if (typeof TheCall.ePatient["ePatient.21"] != 'undefined') {
                    if (TheCall.ePatient["ePatient.21"].IsNull == false) {
                        XML.writeElementString("ePatient.21", TheCall.ePatient["ePatient.21"].vSet[0]);
                    }
                }
            };
            XML.writeEndElement
        };
    };
    //History
    if (typeof TheCall.eHistory != 'undefined')
    {
        XML.writeStartElement("eHistory")
        if (typeof TheCall.eHistory["eHistory.01"] != 'undefined') {
            if (TheCall.eHistory["eHistory.01"].IsNull == false) {
                for (var d = 0; d < TheCall.eHistory["eHistory.01"].vSet.length; d++) {
                    XML.writeElementString("eHistory.01", TheCall.eHistory["eHistory.01"].vSet[d]);
                }
            }

            else {
                if (TheCall.eHistory["eHistory.01"].NV == true) {
                    XML.writeStartElement('eHistory.01');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eHistory["eHistory.01"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };


        if (typeof TheCall.eHistory["PractitionerGroup"] != 'undefined') {
            for (var d = 0; d < TheCall.eHistory["PractitionerGroup"].length ; d++) {
                XML.writeStartElement("eHistory.PractitionerGroup")

                if (typeof TheCall.eHistory["PractitionerGroup"][d]["eHistory.02"] != 'undefined') {
                    if (TheCall.eHistory["PractitionerGroup"][d]["eHistory.02"].IsNull == false) {
                        XML.writeElementString("eHistory.02", TheCall.eHistory["PractitionerGroup"][d]["eHistory.02"].vSet[0]);
                    }
                };

                if (typeof TheCall.eHistory["PractitionerGroup"][d]["eHistory.03"] != 'undefined') {
                    if (TheCall.eHistory["PractitionerGroup"][d]["eHistory.03"].IsNull == false) {
                        XML.writeElementString("eHistory.03", TheCall.eHistory["PractitionerGroup"][d]["eHistory.03"].vSet[0]);
                    }
                };
                if (typeof TheCall.eHistory["PractitionerGroup"][d]["eHistory.04"] != 'undefined') {
                    if (TheCall.eHistory["PractitionerGroup"][d]["eHistory.04"].IsNull == false) {
                        XML.writeElementString("eHistory.04", TheCall.eHistory["PractitionerGroup"][d]["eHistory.04"].vSet[0]);
                    }
                };
                XML.writeEndElement()
            }
        };


        if (typeof TheCall.eHistory["eHistory.05"] != 'undefined') {
            if (TheCall.eHistory["eHistory.05"].IsNull == false) {
                for (var d = 0; d < TheCall.eHistory["eHistory.05"].vSet.length; d++) {
                    XML.writeElementString("eHistory.05", TheCall.eHistory["eHistory.05"].vSet[d]);
                }
            }

            else {
                if (TheCall.eHistory["eHistory.05"].NV == true) {
                    XML.writeStartElement('eHistory.0');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eHistory["eHistory.05"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eHistory["eHistory.06"] != 'undefined') {
            if (TheCall.eHistory["eHistory.06"].IsNull == false) {
                XML.writeElementString("eHistory.06", TheCall.eHistory["eHistory.06"].vSet[0]);
            }
            else {
                if (TheCall.eHistory["eHistory.06"].NV == true) {

                    XML.writeStartElement('eHistory.06');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eHistory["eHistory.06"].vSet[0]);
                    XML.writeEndElement();
                }
                else if (TheCall.eHistory["eHistory.06"].PN == true) {
                    XML.writeStartElement('eHistory.06');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('PN', TheCall.eHistory["eHistory.06"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };


        if (typeof TheCall.eHistory["eHistory.07"] != 'undefined') {
            if (TheCall.eHistory["eHistory.07"].IsNull == false) {
                for (var d = 0; d < TheCall.eHistory["eHistory.07"].vSet.length; d++) {
                    XML.writeElementString("eHistory.07", TheCall.eHistory["eHistory.07"].vSet[d]);
                }
            }
        };

        if (typeof TheCall.eHistory["eHistory.08"] != 'undefined') {
            if (TheCall.eHistory["eHistory.08"].IsNull == false) {
                for (var d = 0; d < TheCall.eHistory["eHistory.08"].vSet.length; d++) {
                    XML.writeElementString("eHistory.08", TheCall.eHistory["eHistory.08"].vSet[d]);
                }
            }
            else {
                if (TheCall.eHistory["eHistory.08"].NV == true) {
                    XML.writeStartElement('eHistory.08');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eHistory["eHistory.08"].vSet[0]);
                    XML.writeEndElement();
                }
                else if (TheCall.eHistory["eHistory.08"].PN == true) {
                    XML.writeStartElement('eHistory.08');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('PN', TheCall.eHistory["eHistory.08"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eHistory["eHistory.09"] != 'undefined') {
            if (TheCall.eHistory["eHistory.09"].IsNull == false) {
                for (var d = 0; d < TheCall.eHistory["eHistory.09"].vSet.length; d++) {
                    XML.writeElementString("eHistory.09", TheCall.eHistory["eHistory.09"].vSet[d]);
                }
            }
        };



        if (TheCall.eHistory["ImmunizationsGroup"] > 0) {
            for (var d = 0; d < TheCall.eHistory["ImmunizationsGroup"].length ; d++) {
                XML.writeStartElement("eHistory.ImmunizationsGroup")

                if (typeof TheCall.eHistory["ImmunizationsGroup"][d]["eHistory.10"] != 'undefined') {
                    if (TheCall.eHistory["ImmunizationsGroup"][d]["eHistory.10"].IsNull == false) {
                        XML.writeElementString("eHistory.10", TheCall.eHistory["ImmunizationsGroup"][d]["eHistory.10"].vSet[0]);
                    }
                };

                if (typeof TheCall.eHistory["ImmunizationsGroup"][d]["eHistory.11"] != 'undefined') {
                    if (TheCall.eHistory["ImmunizationsGroup"][d]["eHistory.11"].IsNull == false) {
                        XML.writeElementString("eHistory.11", TheCall.eHistory["ImmunizationsGroup"][d]["eHistory.11"].vSet[0]);
                    }
                };
                XML.writeEndElement()
            }
        };

        if (TheCall.eHistory["CurrentMedsGroup"] > 0) {
            for (var d = 0; d < TheCall.eHistory["CurrentMedsGroup"].length ; d++) {

                XML.writeStartElement("eHistory.CurrentMedsGroup")
                if (typeof TheCall.eHistory["CurrentMedsGroup"][d]["eHistory.12"] != 'undefined') {
                    if (TheCall.eHistory["CurrentMedsGroup"][d]["eHistory.12"].IsNull == false) {
                        XML.writeElementString("eHistory.12", TheCall.eHistory["CurrentMedsGroup"][d]["eHistory.12"].vSet[0]);
                    }
                    else {
                        if (TheCall.eHistory["CurrentMedsGroup"][d]["eHistory.12"].NV == true) {
                            XML.writeStartElement('eHistory.12');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', TheCall.eHistory["CurrentMedsGroup"][d]["eHistory.12"].vSet[0]);
                            XML.writeEndElement();
                        }
                        else if (TheCall.eHistory["CurrentMedsGroup"][d]["eHistory.12"].PN == true) {
                            XML.writeStartElement('eHistory.12');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('PN', TheCall.eHistory["CurrentMedsGroup"][d]["eHistory.12"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof TheCall.eHistory["CurrentMedsGroup"][d]["eHistory.13"] != 'undefined') {
                    if (TheCall.eHistory["CurrentMedsGroup"][d]["eHistory.13"].IsNull == false) {
                        XML.writeElementString("eHistory.13", TheCall.eHistory["CurrentMedsGroup"][d]["eHistory.13"].vSet[0]);
                    }
                };
                if (typeof TheCall.eHistory["CurrentMedsGroup"][d]["eHistory.14"] != 'undefined') {
                    if (TheCall.eHistory["CurrentMedsGroup"][d]["eHistory.14"].IsNull == false) {
                        XML.writeElementString("eHistory.14", TheCall.eHistory["CurrentMedsGroup"][d]["eHistory.14"].vSet[0]);
                    }
                };

                if (typeof TheCall.eHistory["CurrentMedsGroup"][d]["eHistory.15"] != 'undefined') {
                    if (TheCall.eHistory["CurrentMedsGroup"][d]["eHistory.15"].IsNull == false) {
                        XML.writeElementString("eHistory.15", TheCall.eHistory["CurrentMedsGroup"][d]["eHistory.15"].vSet[0]);
                    }
                };

                XML.writeEndElement()
            }
        };


        if (typeof TheCall.eHistory["eHistory.16"] != 'undefined') {
            if (TheCall.eHistory["eHistory.16"].IsNull == false) {
                XML.writeElementString("eHistory.16", TheCall.eHistory["eHistory.16"].vSet[0]);
            }
        };
        if (typeof TheCall.eHistory["eHistory.17"] != 'undefined')
        {
            if (TheCall.eHistory["eHistory.17"].IsNull == false)
            {
                XML.writeElementString("eHistory.17", TheCall.eHistory["eHistory.17"].vSet[0]);
            }
            else {
                if (TheCall.eHistory["eHistory.17"].PN == true) {
                    XML.writeStartElement('eHistory.17');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('PN', TheCall.eHistory["eHistory.17"].vSet[0]);
                    XML.writeEndElement();
                
                }
                else if (TheCall.eHistory["eHistory.17"].NV == true) {

                    XML.writeStartElement('eHistory.17');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eHistory["eHistory.17"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };


        if (typeof TheCall.eHistory["eHistory.18"] != 'undefined') {
            if (TheCall.eHistory["eHistory.18"].IsNull == false) {
                XML.writeElementString("eHistory.18", TheCall.eHistory["eHistory.18"].vSet[0]);
            }
            else {
                if (TheCall.eHistory["eHistory.18"].PN == true) {
                    XML.writeStartElement('eHistory.18');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('PN', TheCall.eHistory["eHistory.18"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof TheCall.eHistory["eHistory.19"] != 'undefined') {
            if (TheCall.eHistory["eHistory.19"].IsNull == false) {
                XML.writeElementString("eHistory.19", TheCall.eHistory["eHistory.19"].vSet[0]);
            }
        };

        XML.writeEndElement()
    };
    //Payment
    if (typeof TheCall.ePayment != 'undefined') {
        XML.writeStartElement("ePayment")
        if (typeof TheCall.ePayment["ePayment.01"] != 'undefined') {
            if (TheCall.ePayment["ePayment.01"].IsNull == false) {
                XML.writeElementString("ePayment.01", TheCall.ePayment["ePayment.01"].vSet[0]);
            }
            else {
                if (TheCall.ePayment["ePayment.01"].NV == true) {
                    XML.writeStartElement('ePayment.01');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.ePayment["ePayment.01"].vSet[0]);
                    XML.writeEndElement();
                }
                else if (TheCall.ePayment["ePayment.01"].PN == true) {
                    XML.writeStartElement('ePayment.01');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('PN', TheCall.ePayment["ePayment.01"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (TheCall.ePayment["CertificateGroup"] > 0) {
            XML.writeStartElement("ePayment.CertificateGroup")
            if (typeof TheCall.ePayment["ePayment.02"] != 'undefined') {
                if (TheCall.ePayment["ePayment.02"].IsNull == false) {
                    XML.writeElementString("ePayment.02", TheCall.ePayment["ePayment.02"].vSet[0]);
                }
            };
            if (typeof TheCall.ePayment["ePayment.03"] != 'undefined') {
                if (TheCall.ePayment["ePayment.03"].IsNull == false) {
                    XML.writeElementString("ePayment.03", TheCall.ePayment["ePayment.03"].vSet[0]);
                }
            };

            if (typeof TheCall.ePayment["ePayment.04"] != 'undefined') {
                if (TheCall.ePayment["ePayment.04"].IsNull == false) {
                    for (var d = 0; d < TheCall.ePayment["ePayment.04"].vSet.length; d++) {
                        XML.writeElementString("ePayment.04", TheCall.ePayment["ePayment.04"].vSet[d]);
                    }
                }
            }
            if (typeof TheCall.ePayment["ePayment.05"] != 'undefined') {
                if (TheCall.ePayment["ePayment.05"].IsNull == false) {
                    XML.writeElementString("ePayment.05", TheCall.ePayment["ePayment.05"].vSet[0]);
                }
            };
            if (typeof TheCall.ePayment["ePayment.06"] != 'undefined') {
                if (TheCall.ePayment["ePayment.06"].IsNull == false) {
                    XML.writeElementString("ePayment.06", TheCall.ePayment["ePayment.06"].vSet[0]);
                }
            };
            if (typeof TheCall.ePayment["ePayment.07"] != 'undefined') {
                if (TheCall.ePayment["ePayment.07"].IsNull == false) {
                    XML.writeElementString("ePayment.07", TheCall.ePayment["ePayment.07"].vSet[0]);
                }
            };
            XML.writeEndElement();
        };
        if (typeof TheCall.ePayment["ePayment.08"] != 'undefined') {
            if (TheCall.ePayment["ePayment.08"].IsNull == false) {
                XML.writeElementString("ePayment.08", TheCall.ePayment["ePayment.08"].vSet[0]);
            }
        };
        if (TheCall.ePayment["Insurancegroup"] > 0) {
            for (var d = 0; d < TheCall.ePayment["InsuranceGroup"].length ; d++) {
                XML.writeStartElement("ePayment.InsuranceGroup")

                if (typeof TheCall.ePayment["InsuranceGroup"][d]["ePayment.09"] != 'undefined') {
                    if (TheCall.ePayment["InsuranceGroup"][d]["ePayment.09"].IsNull == false) {
                        XML.writeElementString("ePayment.09", TheCall.ePayment["InsuranceGroup"][d]["ePayment.09"].vSet[0]);
                    }
                };
                if (typeof TheCall.ePayment["InsuranceGroup"][d]["ePayment.10"] != 'undefined') {
                    if (TheCall.ePayment["InsuranceGroup"][d]["ePayment.10"].IsNull == false) {
                        XML.writeElementString("ePayment.10", TheCall.ePayment["InsuranceGroup"][d]["ePayment.10"].vSet[0]);
                    }
                };
                if (typeof TheCall.ePayment["InsuranceGroup"][d]["ePayment.11"] != 'undefined') {
                    if (TheCall.ePayment["InsuranceGroup"][d]["ePayment.11"].IsNull == false) {
                        XML.writeElementString("ePayment.11", TheCall.ePayment["InsuranceGroup"][d]["ePayment.11"].vSet[0]);
                    }
                };
                if (typeof TheCall.ePayment["InsuranceGroup"][d]["ePayment.12"] != 'undefined') {
                    if (TheCall.ePayment["InsuranceGroup"][d]["ePayment.12"].IsNull == false) {
                        XML.writeElementString("ePayment.12", TheCall.ePayment["InsuranceGroup"][d]["ePayment.12"].vSet[0]);
                    }
                };
                if (typeof TheCall.ePayment["InsuranceGroup"][d]["ePayment.13"] != 'undefined') {
                    if (TheCall.ePayment["InsuranceGroup"][d]["ePayment.13"].IsNull == false) {
                        XML.writeElementString("ePayment.13", TheCall.ePayment["InsuranceGroup"][d]["ePayment.13"].vSet[0]);
                    }
                };
                if (typeof TheCall.ePayment["InsuranceGroup"][d]["ePayment.14"] != 'undefined') {
                    if (TheCall.ePayment["InsuranceGroup"][d]["ePayment.14"].IsNull == false) {
                        XML.writeElementString("ePayment.14", TheCall.ePayment["InsuranceGroup"][d]["ePayment.14"].vSet[0]);
                    }
                };
                if (typeof TheCall.ePayment["InsuranceGroup"][d]["ePayment.15"] != 'undefined') {
                    if (TheCall.ePayment["InsuranceGroup"][d]["ePayment.15"].IsNull == false) {
                        XML.writeElementString("ePayment.15", TheCall.ePayment["InsuranceGroup"][d]["ePayment.15"].vSet[0]);
                    }
                };
                if (typeof TheCall.ePayment["InsuranceGroup"][d]["ePayment.16"] != 'undefined') {
                    if (TheCall.ePayment["InsuranceGroup"][d]["ePayment.16"].IsNull == false) {
                        XML.writeElementString("ePayment.16", TheCall.ePayment["InsuranceGroup"][d]["ePayment.16"].vSet[0]);
                    }
                };
                if (typeof TheCall.ePayment["InsuranceGroup"][d]["ePayment.17"] != 'undefined') {
                    if (TheCall.ePayment["InsuranceGroup"][d]["ePayment.17"].IsNull == false) {
                        XML.writeElementString("ePayment.17", TheCall.ePayment["InsuranceGroup"][d]["ePayment.17"].vSet[0]);
                    }
                };
                if (typeof TheCall.ePayment["InsuranceGroup"][d]["ePayment.18"] != 'undefined') {
                    if (TheCall.ePayment["InsuranceGroup"][d]["ePayment.18"].IsNull == false) {
                        XML.writeElementString("ePayment.18", TheCall.ePayment["InsuranceGroup"][d]["ePayment.18"].vSet[0]);
                    }
                };
                if (typeof TheCall.ePayment["InsuranceGroup"][d]["ePayment.19"] != 'undefined') {
                    if (TheCall.ePayment["InsuranceGroup"][d]["ePayment.19"].IsNull == false) {
                        XML.writeElementString("ePayment.19", TheCall.ePayment["InsuranceGroup"][d]["ePayment.19"].vSet[0]);
                    }
                };
                if (typeof TheCall.ePayment["InsuranceGroup"][d]["ePayment.20"] != 'undefined') {
                    if (TheCall.ePayment["InsuranceGroup"][d]["ePayment.20"].IsNull == false) {
                        XML.writeElementString("ePayment.20", TheCall.ePayment["InsuranceGroup"][d]["ePayment.20"].vSet[0]);
                    }
                };
                if (typeof TheCall.ePayment["InsuranceGroup"][d]["ePayment.21"] != 'undefined') {
                    if (TheCall.ePayment["InsuranceGroup"][d]["ePayment.21"].IsNull == false) {
                        XML.writeElementString("ePayment.21", TheCall.ePayment["InsuranceGroup"][d]["ePayment.21"].vSet[0]);
                    }
                };
                if (typeof TheCall.ePayment["InsuranceGroup"][d]["ePayment.22"] != 'undefined') {
                    if (TheCall.ePayment["InsuranceGroup"][d]["ePayment.22"].IsNull == false) {
                        XML.writeElementString("ePayment.22", TheCall.ePayment["InsuranceGroup"][d]["ePayment.22"].vSet[0]);
                    }
                };

                XML.writeEndElement();
            }
        };

        if (TheCall.ePayment["ClosestRelativeGroup"] != -1) {
            XML.writeStartElement("ePayment.ClosestRelativeGroup")
            if (typeof TheCall.ePayment["ePayment.23"] != 'undefined') {
                if (TheCall.ePayment["ePayment.23"].IsNull == false) {
                    XML.writeElementString("ePayment.23", TheCall.ePayment["ePayment.23"].vSet[0]);
                }
            };

            if (typeof TheCall.ePayment["ePayment.27"] != 'undefined') {
                if (TheCall.ePayment["ePayment.27"].IsNull == false) {
                    XML.writeElementString("ePayment.27", TheCall.ePayment["ePayment.27"].vSet[0]);
                }
            };
            if (typeof TheCall.ePayment["ePayment.25"] != 'undefined') {
                if (TheCall.ePayment["ePayment.25"].IsNull == false) {
                    XML.writeElementString("ePayment.25", TheCall.ePayment["ePayment.25"].vSet[0]);
                }
            };

            if (typeof TheCall.ePayment["ePayment.26"] != 'undefined') {
                if (TheCall.ePayment["ePayment.26"].IsNull == false) {
                    XML.writeElementString("ePayment.26", TheCall.ePayment["ePayment.26"].vSet[0]);
                }
            };

            if (typeof TheCall.ePayment["ePayment.27"] != 'undefined') {
                if (TheCall.ePayment["ePayment.27"].IsNull == false) {
                    XML.writeElementString("ePayment.27", TheCall.ePayment["ePayment.27"].vSet[0]);
                }
            };

            if (typeof TheCall.ePayment["ePayment.28"] != 'undefined') {
                if (TheCall.ePayment["ePayment.28"].IsNull == false) {
                    XML.writeElementString("ePayment.28", TheCall.ePayment["ePayment.28"].vSet[0]);
                }
            };

            if (typeof TheCall.ePayment["ePayment.29"] != 'undefined') {
                if (TheCall.ePayment["ePayment.29"].IsNull == false) {
                    XML.writeElementString("ePayment.29", TheCall.ePayment["ePayment.29"].vSet[0]);
                }
            };

            if (typeof TheCall.ePayment["ePayment.30"] != 'undefined') {
                if (TheCall.ePayment["ePayment.30"].IsNull == false) {
                    XML.writeElementString("ePayment.30", TheCall.ePayment["ePayment.30"].vSet[0]);
                }
            };

            if (typeof TheCall.ePayment["ePayment.31"] != 'undefined') {
                if (TheCall.ePayment["ePayment.31"].IsNull == false) {
                    for (var d = 0; d < TheCall.ePayment["ePayment.31"].vSet.length; d++) {
                        XML.writeElementString("ePayment.31", TheCall.ePayment["ePayment.31"].vSet[d]);
                    }
                }
            };

            if (typeof TheCall.ePayment["ePayment.32"] != 'undefined') {
                if (TheCall.ePayment["ePayment.32"].IsNull == false) {
                    XML.writeElementString("ePayment.32", TheCall.ePayment["ePayment.32"].vSet[0]);
                }
            };

            XML.writeEndElement();
        };
        if (TheCall.ePayment["EmployerGroup"] > 0) {
            XML.writeStartElement("ePayment.EmployerGroup")
            if (typeof TheCall.ePayment["ePayment.33"] != 'undefined') {
                if (TheCall.ePayment["ePayment.33"].IsNull == false) {
                    XML.writeElementString("ePayment.33", TheCall.ePayment["ePayment.33"].vSet[0]);
                }
            };

            if (typeof TheCall.ePayment["ePayment.34"] != 'undefined') {
                if (TheCall.ePayment["ePayment.34"].IsNull == false) {
                    XML.writeElementString("ePayment.34", TheCall.ePayment["ePayment.34"].vSet[0]);
                }
            };

            if (typeof TheCall.ePayment["ePayment.35"] != 'undefined') {
                if (TheCall.ePayment["ePayment.35"].IsNull == false) {
                    XML.writeElementString("ePayment.35", TheCall.ePayment["ePayment.35"].vSet[0]);
                }
            };

            if (typeof TheCall.ePayment["ePayment.36"] != 'undefined') {
                if (TheCall.ePayment["ePayment.36"].IsNull == false) {
                    XML.writeElementString("ePayment.36", TheCall.ePayment["ePayment.36"].vSet[0]);
                }
            };

            if (typeof TheCall.ePayment["ePayment.37"] != 'undefined') {
                if (TheCall.ePayment["ePayment.37"].IsNull == false) {
                    XML.writeElementString("ePayment.37", TheCall.ePayment["ePayment.37"].vSet[0]);
                }
            };

            if (typeof TheCall.ePayment["ePayment.38"] != 'undefined') {
                if (TheCall.ePayment["ePayment.38"].IsNull == false) {
                    XML.writeElementString("ePayment.38", TheCall.ePayment["ePayment.38"].vSet[0]);
                }
            };

            if (typeof TheCall.ePayment["ePayment.39"] != 'undefined') {
                if (TheCall.ePayment["ePayment.39"].IsNull == false) {
                    XML.writeElementString("ePayment.39", TheCall.ePayment["ePayment.39"].vSet[0]);
                }
            };

            XML.writeEndElement();
        };

        if (typeof TheCall.ePayment["ePayment.40"] != 'undefined') {
            if (TheCall.ePayment["ePayment.40"].IsNull == false) {
                XML.writeElementString("ePayment.40", TheCall.ePayment["ePayment.40"].vSet[0]);
            }
        };
        if (typeof TheCall.ePayment["ePayment.41"] != 'undefined') {
            if (TheCall.ePayment["ePayment.41"].IsNull == false) {
                for (var d = 0; d < TheCall.ePayment["ePayment.41"].vSet.length; d++) {
                    XML.writeElementString("ePayment.41", TheCall.ePayment["ePayment.41"].vSet[d]);
                }
            }
        };
        if (typeof TheCall.ePayment["ePayment.42"] != 'undefined') {
            if (TheCall.ePayment["ePayment.42"].IsNull == false) {
                for (var d = 0; d < TheCall.ePayment["ePayment.42"].vSet.length; d++) {
                    XML.writeElementString("ePayment.42", TheCall.ePayment["ePayment.42"].vSet[d]);
                }
            }
        };
        if (typeof TheCall.ePayment["ePayment.43"] != 'undefined') {
            if (TheCall.ePayment["ePayment.43"].IsNull == false) {
                XML.writeElementString("ePayment.43", TheCall.ePayment["ePayment.43"].vSet[0]);
            }
        };
        if (typeof TheCall.ePayment["ePayment.44"] != 'undefined') {
            if (TheCall.ePayment["ePayment.44"].IsNull == false) {
                for (var d = 0; d < TheCall.ePayment["ePayment.44"].vSet.length; d++) {
                    XML.writeElementString("ePayment.44", TheCall.ePayment["ePayment.44"].vSet[d]);
                }
            }
        };
        if (typeof TheCall.ePayment["ePayment.45"] != 'undefined') {
            if (TheCall.ePayment["ePayment.45"].IsNull == false) {
                XML.writeElementString("ePayment.45", TheCall.ePayment["ePayment.45"].vSet[0]);
            }
        }
        if (typeof TheCall.ePayment["ePayment.46"] != 'undefined') {
            if (TheCall.ePayment["ePayment.46"].IsNull == false) {
                XML.writeElementString("ePayment.46", TheCall.ePayment["ePayment.46"].vSet[0]);
            }
        }
        if (typeof TheCall.ePayment["ePayment.47"] != 'undefined') {
            if (TheCall.ePayment["ePayment.47"].IsNull == false) {
                for (var d = 0; d < TheCall.ePayment["ePayment.47"].vSet.length; d++) {
                    XML.writeElementString("ePayment.47", TheCall.ePayment["ePayment.47"].vSet[d]);
                }
            }
        }
        if (typeof TheCall.ePayment["ePayment.48"] != 'undefined') {
            if (TheCall.ePayment["ePayment.48"].IsNull == false) {
                XML.writeElementString("ePayment.48", TheCall.ePayment["ePayment.48"].vSet[0]);
            }
        }
        if (typeof TheCall.ePayment["ePayment.49"] != 'undefined') {
            if (TheCall.ePayment["ePayment.49"].IsNull == false) {
                XML.writeElementString("ePayment.49", TheCall.ePayment["ePayment.49"].vSet[0]);
            }
        };

        if (typeof TheCall.ePayment["ePayment.50"] != 'undefined') {
            if (TheCall.ePayment["ePayment.50"].IsNull == false) {
                XML.writeElementString("ePayment.50", TheCall.ePayment["ePayment.50"].vSet[0]);
            }
            else {
                if (TheCall.ePayment["ePayment.50"].NV == true) {
                    XML.writeStartElement('ePayment.50');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.ePayment["ePayment.50"].vSet[0]);
                    XML.writeEndElement();

                };
                if (typeof TheCall.ePayment["ePayment.51"] != 'undefined') {
                    if (TheCall.ePayment["ePayment.51"].IsNull == false) {
                        for (var d = 0; d < TheCall.ePayment["ePayment.51"].vSet.length; d++) {
                            XML.writeElementString("ePayment.51", TheCall.ePayment["ePayment.51"].vSet[d]);
                        }
                    }
                }

                if (typeof TheCall.ePayment["ePayment.52"] != 'undefined') {
                    if (TheCall.ePayment["ePayment.52"].IsNull == false) {
                        for (var d = 0; d < TheCall.ePayment["ePayment.52"].vSet.length; d++) {
                            XML.writeElementString("ePayment.52", TheCall.ePayment["ePayment.52"].vSet[d]);
                        }
                    }
                };

                if (typeof TheCall.ePayment["ePayment.53"] != 'undefined') {
                    if (TheCall.ePayment["ePayment.53"].IsNull == false) {
                        XML.writeElementString("ePayment.53", TheCall.ePayment["ePayment.53"].vSet[0]);
                    }
                };

                if (typeof TheCall.ePayment["ePayment.54"] != 'undefined') {
                    if (TheCall.ePayment["ePayment.54"].IsNull == false) {
                        XML.writeElementString("ePayment.54", TheCall.ePayment["ePayment.54"].vSet[0]);
                    }
                };

                if (TheCall.ePayment["SupplyItemGroup"] > 0) {
                    for (var d = 0; d < TheCall.ePayment["SupplyItemGroup"].length ; d++) {
                        XML.writeStartElement("ePayment.SupplyItemGroup")
                        if (typeof TheCall.ePayment["SupplyItemGroup"][d]["ePayment.55"] != 'undefined') {
                            if (TheCall.ePayment["SupplyItemGroup"][d]["ePayment.55"].IsNull == false) {
                                XML.writeElementString("ePayment.55", TheCall.ePayment["SupplyItemGroup"][d]["ePayment.55"].vSet[0]);
                            }
                        };

                        if (typeof TheCall.ePayment["SupplyItemGroup"][d]["ePayment.56"] != 'undefined') {
                            if (TheCall.ePayment["SupplyItemGroup"][d]["ePayment.56"].IsNull == false) {
                                XML.writeElementString("ePayment.56", TheCall.ePayment["SupplyItemGroup"][d]["ePayment.56"].vSet[0]);
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

        if (typeof TheCall.eSituation["eSituation.01"] != 'undefined') {
            if (TheCall.eSituation["eSituation.01"].IsNull == false) {
                XML.writeElementString("eSituation.01", TheCall.eSituation["eSituation.01"].vSet[0]);
            }
            else {
                if (TheCall.eSituation["eSituation.01"].NV == true) {
                    XML.writeStartElement('eSituation.01');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eSituation["eSituation.01"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof TheCall.eSituation["eSituation.02"] != 'undefined') {
            if (TheCall.eSituation["eSituation.02"].IsNull == false) {
                XML.writeElementString("eSituation.02", TheCall.eSituation["eSituation.02"].vSet[0]);
            }
            else {
                if (TheCall.eSituation["eSituation.02"].NV == true) {
                    XML.writeStartElement('eSituation.02');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eSituation["eSituation.02"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof TheCall.eSituation["PatientComplaintGroup"] !='undefined') {
            if (TheCall.eSituation["PatientComplaintGroup"] !=-1) {
                for (var d = 0; d < TheCall.eSituation["PatientComplaintGroup"].length ; d++) {
                    XML.writeStartElement("eSituation.PatientComplaintGroup")

                    if (typeof TheCall.eSituation["PatientComplaintGroup"][d]["eSituation.03"] != 'undefined') {
                        if (TheCall.eSituation["PatientComplaintGroup"][d]["eSituation.03"].IsNull == false) {
                            XML.writeElementString("eSituation.03", TheCall.eSituation["PatientComplaintGroup"][d]["eSituation.03"].vSet[0]);
                        }
                        else {
                            if (TheCall.eSituation["PatientComplaintGroup"][d]["eSituation.03"].NV == true) {
                                XML.writeStartElement('eSituation.03');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', TheCall.eSituation["PatientComplaintGroup"][d]["eSituation.03"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    };

                    if (typeof TheCall.eSituation["PatientComplaintGroup"][d]["eSituation.04"] != 'undefined') {
                        if (TheCall.eSituation["PatientComplaintGroup"][d]["eSituation.04"].IsNull == false) {
                            XML.writeElementString("eSituation.04", TheCall.eSituation["PatientComplaintGroup"][d]["eSituation.04"].vSet[0]);
                        }
                        else {
                            if (TheCall.eSituation["PatientComplaintGroup"][d]["eSituation.04"].NV == true) {
                                XML.writeStartElement('eSituation.04');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', TheCall.eSituation["PatientComplaintGroup"][d]["eSituation.04"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    };

                    if (typeof TheCall.eSituation["PatientComplaintGroup"][d]["eSituation.05"] != 'undefined') {
                        if (TheCall.eSituation["PatientComplaintGroup"][d]["eSituation.05"].IsNull == false) {
                            XML.writeElementString("eSituation.05", TheCall.eSituation["PatientComplaintGroup"][d]["eSituation.05"].vSet[0]);
                        }
                        else {
                            if (TheCall.eSituation["PatientComplaintGroup"][d]["eSituation.05"].NV == true) {
                                XML.writeStartElement('eSituation.05');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', TheCall.eSituation["PatientComplaintGroup"][d]["eSituation.05"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    };

                    if (typeof TheCall.eSituation["PatientComplaintGroup"][d]["eSituation.06"] != 'undefined') {
                        if (TheCall.eSituation["PatientComplaintGroup"][d]["eSituation.06"].IsNull == false) {
                            XML.writeElementString("eSituation.06", TheCall.eSituation["PatientComplaintGroup"][d]["eSituation.06"].vSet[0]);
                        }
                        else {
                            if (TheCall.eSituation["PatientComplaintGroup"][d]["eSituation.06"].NV == true) {
                                XML.writeStartElement('eSituation.06');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', TheCall.eSituation["PatientComplaintGroup"][d]["eSituation.06"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    };
                    XML.writeEndElement();
                }
            }
        };
        if (typeof TheCall.eSituation["eSituation.07"] != 'undefined') {
            if (TheCall.eSituation["eSituation.07"].IsNull == false) {
                XML.writeElementString("eSituation.07", TheCall.eSituation["eSituation.07"].vSet[0]);
            }
            else {
                if (TheCall.eSituation["eSituation.07"].NV == true) {
                    XML.writeStartElement('eSituation.07');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eSituation["eSituation.07"].vSet[0]);
                    XML.writeEndElement();

                };
            }
        };
        if (typeof TheCall.eSituation["eSituation.08"] != 'undefined') {
            if (TheCall.eSituation["eSituation.08"].IsNull == false) {
                XML.writeElementString("eSituation.08", TheCall.eSituation["eSituation.08"].vSet[0]);
            }
            else {
                if (TheCall.eSituation["eSituation.08"].NV == true) {
                    XML.writeStartElement('eSituation.08');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eSituation["eSituation.08"].vSet[0]);
                    XML.writeEndElement();

                };
            }
        };
        if (typeof TheCall.eSituation["eSituation.09"] != 'undefined') {
            if (TheCall.eSituation["eSituation.09"].IsNull == false) {
                XML.writeElementString("eSituation.09", TheCall.eSituation["eSituation.09"].vSet[0]);
            }
            else {
                if (TheCall.eSituation["eSituation.09"].NV == true) {
                    XML.writeStartElement('eSituation.09');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eSituation["eSituation.09"].vSet[0]);
                    XML.writeEndElement();

                };
            }
        };
        if (typeof TheCall.eSituation["eSituation.10"] != 'undefined') {
            if (TheCall.eSituation["eSituation.10"].IsNull == false) {
                for (var d = 0; d < TheCall.eSituation["eSituation.10"].vSet.length ; d++) {
                    XML.writeElementString("eSituation.10", TheCall.eSituation["eSituation.10"].vSet[d].val);
                }
            }
            else {
                if (TheCall.eSituation["eSituation.10"].NV == true) {
                    XML.writeStartElement('eSituation.10');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eSituation["eSituation.10"].vSet[0]);
                    XML.writeEndElement();

                };
            }
        };
        if (typeof TheCall.eSituation["eSituation.11"] != 'undefined') {
            if (TheCall.eSituation["eSituation.11"].IsNull == false) {
                XML.writeElementString("eSituation.11", TheCall.eSituation["eSituation.11"].vSet[0]);
            }
        };

        if (typeof TheCall.eSituation["eSituation.12"] != 'undefined') {
            if (TheCall.eSituation["eSituation.12"].IsNull == false) {
                for (var d = 0; d < TheCall.eSituation["eSituation.12"].vSet.length ; d++) {
                    XML.writeElementString("eSituation.12", TheCall.eSituation["eSituation.12"].vSet[d].val);
                }
            }
            else {
                if (TheCall.eSituation["eSituation.12"].NV == true) {
                    XML.writeStartElement('eSituation.12');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eSituation["eSituation.12"].vSet[0]);
                    XML.writeEndElement();
                };
            }
        };

        if (typeof TheCall.eSituation["eSituation.13"] != 'undefined') {
            if (TheCall.eSituation["eSituation.13"].IsNull == false) {
                XML.writeElementString("eSituation.13", TheCall.eSituation["eSituation.13"].vSet[0]);
            }
        };
        if (typeof TheCall.eSituation["WorkRelatedGroup"] != 'undefined') {
            if (TheCall.eSituation["WorkRelatedGroup"] !=-1) {
                XML.writeStartElement("eSituation.WorkRelatedGroup")

                if (typeof TheCall.eSituation["eSituation.14"] != 'undefined') {
                    if (TheCall.eSituation["eSituation.14"].IsNull == false) {
                        XML.writeElementString("eSituation.14", TheCall.eSituation["eSituation.14"].vSet[0]);
                    }

                    else {
                        if (TheCall.eSituation["eSituation.14"].NV == true) {
                            XML.writeStartElement('eSituation.14');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', TheCall.eSituation["eSituation.14"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };
                if (typeof TheCall.eSituation["eSituation.15"] != 'undefined') {
                    if (TheCall.eSituation["eSituation.15"].IsNull == false) {
                        XML.writeElementString("eSituation.15", TheCall.eSituation["eSituation.15"].vSet[0]);
                    }
                };
                if (typeof TheCall.eSituation["eSituation.16"] != 'undefined') {
                    if (TheCall.eSituation["eSituation.16"].IsNull == false) {
                        XML.writeElementString("eSituation.16", TheCall.eSituation["eSituation.16"].vSet[0]);
                    }
                };
                XML.writeEndElement();
            }
        };

        if (typeof TheCall.eSituation["eSituation.17"] != 'undefined') {
            if (TheCall.eSituation["eSituation.17"].IsNull == false) {
                for (var d = 0; d < TheCall.eSituation["eSituation.17"].vSet.length ; d++) {
                    XML.writeElementString("eSituation.17", TheCall.eSituation["eSituation.17"].vSet[d].val);
                }
            }
            else {
                if (TheCall.eSituation["eSituation.17"].NV == true) {
                    XML.writeStartElement('eSituation.17');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eSituation["eSituation.17"].vSet[0]);
                    XML.writeEndElement();
                }
            };
        };
        XML.writeEndElement();
    };
    //eScene
    if (typeof TheCall.eScene != 'undefined') {
        XML.writeStartElement("eScene")
        if (typeof TheCall.eScene["eScene.01"] != 'undefined')
        {
            if (TheCall.eScene["eScene.01"].IsNull == false) {
                XML.writeElementString("eScene.01", TheCall.eScene["eScene.01"].vSet[0]);
            }
            else {
                if (TheCall.eScene["eScene.01"].NV == true) {
                    XML.writeStartElement('eScene.01');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eScene["eScene.01"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof TheCall.eScene["ResponderGroup"] != 'undefined')
        {
            if (TheCall.eScene["ResponderGroup"] != -1) {
                for (var d = 0; d < TheCall.eScene["ResponderGroup"].length ; d++) {
    
                    XML.writeStartElement("eScene.ResponderGroup")

                    if (typeof TheCall.eScene["ResponderGroup"][d]["eScene.02"] != 'undefined') {
                        if (TheCall.eScene["ResponderGroup"][d]["eScene.02"].IsNull == false) {
                            XML.writeElementString("eScene.02", TheCall.eScene["ResponderGroup"][d]["eScene.02"].vSet[0]);
                        }
                    };

                    if (typeof TheCall.eScene["ResponderGroup"][d]["eScene.03"] != 'undefined') {
                        if (TheCall.eScene["ResponderGroup"][d]["eScene.03"].IsNull == false) {
                            XML.writeElementString("eScene.03", TheCall.eScene["ResponderGroup"][d]["eScene.03"].vSet[0]);
                        }
                    };

                    if (typeof TheCall.eScene["ResponderGroup"][d]["eScene.04"] != 'undefined') {
                        if (TheCall.eScene["ResponderGroup"][d]["eScene.04"].IsNull == false) {
                            XML.writeElementString("eScene.04", TheCall.eScene["ResponderGroup"][d]["eScene.04"].vSet[0]);
                        }
                    }
                    XML.writeEndElement();
                };
            };


            if (typeof TheCall.eScene["eScene.05"] != 'undefined') {
                if (TheCall.eScene["eScene.05"].IsNull == false) {
                    XML.writeElementString("eScene.05", TheCall.eScene["eScene.05"].vSet[0]);
                }
            };

            if (typeof TheCall.eScene["eScene.06"] != 'undefined') 
            {
                if (TheCall.eScene["eScene.06"].IsNull == false) {
                    XML.writeElementString("eScene.06", TheCall.eScene["eScene.06"].vSet[0]);
                }
                else {
                    if (TheCall.eScene["eScene.06"].NV == true) {
                        XML.writeStartElement('eScene.06');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eScene["eScene.06"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eScene["eScene.07"] != 'undefined') 
            {
                if (TheCall.eScene["eScene.07"].IsNull == false) {
                    XML.writeElementString("eScene.07", TheCall.eScene["eScene.07"].vSet[0]);
                }
                else {
                    if (TheCall.eScene["eScene.07"].NV == true) {
                        XML.writeStartElement('eScene.07');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eScene["eScene.07"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eScene["eScene.08"] != 'undefined') 
            {
                if (TheCall.eScene["eScene.08"].IsNull == false) {
                    XML.writeElementString("eScene.08", TheCall.eScene["eScene.08"].vSet[0]);
                }
                else {
                    if (TheCall.eScene["eScene.08"].NV == true) {
                        XML.writeStartElement('eScene.08');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eScene["eScene.08"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eScene["eScene.09"] != 'undefined') 
            {
                if (TheCall.eScene["eScene.09"].IsNull == false) {
                    XML.writeElementString("eScene.09", TheCall.eScene["eScene.09"].vSet[0]);
                }
                else {
                    if (TheCall.eScene["eScene.09"].NV == true) {
                        XML.writeStartElement('eScene.09');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eScene["eScene.09"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eScene["eScene.10"] != 'undefined') 
            {
                if (TheCall.eScene["eScene.10"].IsNull == false) {
                    XML.writeElementString("eScene.10", TheCall.eScene["eScene.10"].vSet[0]);
                }
                else {
                    if (TheCall.eScene["eScene.10"].NV == true) {
                        XML.writeStartElement('eScene.10');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eScene["eScene.10"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eScene["eScene.11"] != 'undefined') 
            {
                if (TheCall.eScene["eScene.11"].IsNull == false) {
                    XML.writeElementString("eScene.11", TheCall.eScene["eScene.11"].vSet[0]);
                }
            };

            if (typeof TheCall.eScene["eScene.12"] != 'undefined') 
            {
                if (TheCall.eScene["eScene.12"].IsNull == false) {
                    XML.writeElementString("eScene.12", TheCall.eScene["eScene.12"].vSet[0]);
                }
            };


            if (typeof TheCall.eScene["eScene.13"] != 'undefined') 
            {
                if (TheCall.eScene["eScene.13"].IsNull == false) {
                    XML.writeElementString("eScene.13", TheCall.eScene["eScene.13"].vSet[0]);
                }
            };
            if (typeof TheCall.eScene["eScene.14"] != 'undefined') 
            {
                if (TheCall.eScene["eScene.14"].IsNull == false) {
                    XML.writeElementString("eScene.14", TheCall.eScene["eScene.14"].vSet[0]);
                }
                else {
                    if (TheCall.eScene["eScene.14"].NV == true) {
                        XML.writeStartElement('eScene.14');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eScene["eScene.14"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eScene["eScene.15"] != 'undefined') 
            {
                if (TheCall.eScene["eScene.15"].IsNull == false) {
                    XML.writeElementString("eScene.15", TheCall.eScene["eScene.15"].vSet[0]);
                }
                else {
                    if (TheCall.eScene["eScene.15"].NV == true) {
                        XML.writeStartElement('eScene.15');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eScene["eScene.15"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eScene["eScene.16"] != 'undefined') 
            {
                if (TheCall.eScene["eScene.16"].IsNull == false) {
                    XML.writeElementString("eScene.16", TheCall.eScene["eScene.16"].vSet[0]);
                }
                else {
                    if (TheCall.eScene["eScene.16"].NV == true) {
                        XML.writeStartElement('eScene.16');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eScene["eScene.16"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };
            if (typeof TheCall.eScene["eScene.17"] != 'undefined') 
            {
                if (TheCall.eScene["eScene.17"].IsNull == false) {
                    XML.writeElementString("eScene.17", TheCall.eScene["eScene.17"].vSet[0]);
                }
                else {
                    if (TheCall.eScene["eScene.17"].NV == true) {
                        XML.writeStartElement('eScene.17');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eScene["eScene.17"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };
            if (typeof TheCall.eScene["eScene.18"] != 'undefined') 
            {
                if (TheCall.eScene["eScene.18"].IsNull == false) {
                    XML.writeElementString("eScene.18", TheCall.eScene["eScene.18"].vSet[0]);
                }
                else {
                    if (TheCall.eScene["eScene.18"].NV == true) {
                        XML.writeStartElement('eScene.18');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eScene["eScene.18"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };
            if (typeof TheCall.eScene["eScene.19"] != 'undefined') 
            {
                if (TheCall.eScene["eScene.19"].IsNull == false) {
                    XML.writeElementString("eScene.19", TheCall.eScene["eScene.19"].vSet[0]);
                }
                else {
                    if (TheCall.eScene["eScene.19"].NV == true) {
                        XML.writeStartElement('eScene.19');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eScene["eScene.19"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };
            if (typeof TheCall.eScene["eScene.20"] != 'undefined') 
            {
                if (TheCall.eScene["eScene.20"].IsNull == false) {
                    XML.writeElementString("eScene.20", TheCall.eScene["eScene.20"].vSet[0]);
                }
                else {
                    if (TheCall.eScene["eScene.20"].NV == true) {
                        XML.writeStartElement('eScene.20');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eScene["eScene.20"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eScene["eScene.21"] != 'undefined') 
            {
                if (TheCall.eScene["eScene.21"].IsNull == false) {
                    XML.writeElementString("eScene.21", TheCall.eScene["eScene.21"].vSet[0]);
                }
                else {
                    if (TheCall.eScene["eScene.21"].NV == true) {
                        XML.writeStartElement('eScene.21');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eScene["eScene.21"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eScene["eScene.22"] != 'undefined') 
            {
                if (TheCall.eScene["eScene.22"].IsNull == false) {
                    XML.writeElementString("eScene.22", TheCall.eScene["eScene.22"].vSet[0]);
                }
            };

            if (typeof TheCall.eScene["eScene.23"] != 'undefined') 
            {
                if (TheCall.eScene["eScene.23"].IsNull == false) {
                    XML.writeElementString("eScene.23", TheCall.eScene["eScene.23"].vSet[0]);
                }           
            }          
        };
        XML.writeEndElement();
    };
    //eAirway
    if (typeof TheCall.eAirway != 'undefined') {
        if (typeof TheCall.eAirway.AirwayGroup != 'undefined') {


            XML.writeStartElement("eAirway.AirwayGroup")


            if (typeof TheCall.eAirway.AirwayGroup["eAirway.01"] != 'undefined')
            {
                if (TheCall.eAirway.AirwayGroup["eAirway.01"].IsNull == false)
                {
                    for (var i = 0; i < TheCall.eAirway.AirwayGroup["eAirway.01"].vSet.length; i++) {
                        XML.writeElementString("eAirway.01", TheCall.eAirway.AirwayGroup["eAirway.01"].vSet[i]);
                    }
                }
                else {
                    if (TheCall.eAirway.AirwayGroup["eAirway.01"].NV == true) {

                        XML.writeStartElement('eAirway.01');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eAirway.AirwayGroup["eAirway.01"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };


            if (typeof TheCall.eAirway.ConfirmationGroup != 'undefined') {
                for (var d = 0; d < TheCall.eAirway.AirwayGroup["ConfirmationGroup"].length ; d++) {
                    XML.writeStartElement("eAirway.ConfirmationGroup");

                    if (typeof TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.02"] != 'undefined') {
                        if (TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.02"].IsNull == false) {
                            XML.writeElementString("eAirway.02", TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.02"].vSet[0]);
                        }
                        else {
                            if (TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.02"].NV == true) {

                                XML.writeStartElement("eAirway.02");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.02"].vSet[0]);
                                XML.writeEndElement();
                            };
                        }
                    };

                    if (typeof TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.03"] != 'undefined') {
                        if (TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.03"].IsNull == false) {
                            XML.writeElementString("eAirway.03", TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.03"].vSet[0]);
                        }
                        else {
                            if (TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.03"].NV == true) {

                                XML.writeStartElement("eAirway.03");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.03"].vSet[0]);
                                XML.writeEndElement();
                            };
                        }
                    };

                    if (typeof TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.04"] != 'undefined') {
                        if (TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.04"].IsNull == false) {
                            for (var i = 0; i < TheCall.eAirway.AirwayGroup["ConfirmationGroup"][d]["eAirway.04"].vSet.length ; i++) {
                                {
                                    XML.writeElementString("eAirway.04", TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.04"].vSet[i]);
                                }
                            }
                        }
                        else {
                            if (TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.04"].NV == true) {

                                XML.writeStartElement("eAirway.04");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.04"].vSet[0]);
                                XML.writeEndElement();
                            };
                        }
                    };


                    if (typeof TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.05"] != 'undefined') {
                        if (TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.05"].IsNull == false) {
                            XML.writeElementString("eAirway.05", TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.05"].vSet[0]);
                        }
                        else {
                            if (TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.05"].NV == true) {

                                XML.writeStartElement("eAirway.05");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.05"].vSet[0]);
                                XML.writeEndElement();
                            };
                        }
                    };

                    if (typeof TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.06"] != 'undefined') {
                        if (TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.06"].IsNull == false) {
                            XML.writeElementString("eAirway.06", TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.06"].vSet[0]);
                        }
                        else {
                            if (TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.06"].NV == true) {

                                XML.writeStartElement("eAirway.06");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.06"].vSet[0]);
                                XML.writeEndElement();
                            };
                        }
                    };


                    if (typeof TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.07"] != 'undefined') {
                        if (TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.07"].IsNull == false) {
                            XML.writeElementString("eAirway.07", TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.07"].vSet[0]);
                        }
                        else {
                            if (TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.07"].NV == true) {

                                XML.writeStartElement("eAirway.07");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.07"].vSet[0]);
                                XML.writeEndElement();
                            };
                        }
                    };

                    if (typeof TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.08"] != 'undefined') {
                        if (TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.08"].IsNull == false) {
                            for (var i = 0; i < TheCall.eAirway.AirwayGroup["ConfirmationGroup"][d]["eAirway.08"].vSet.length ; i++) {
                                {
                                    XML.writeElementString("eAirway.08", TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.08"].vSet[i]);
                                }
                            }
                        }
                        else {
                            if (TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.08"].NV == true) {

                                XML.writeStartElement("eAirway.08");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.08"].vSet[0]);
                                XML.writeEndElement();
                            };
                        }
                    };


                    if (typeof TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.09"] != 'undefined') {
                        if (TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.09"].IsNull == false) {
                            for (var i = 0; i < TheCall.eAirway.AirwayGroup["ConfirmationGroup"][d]["eAirway.09"].vSet.length ; i++) {
                                {
                                    XML.writeElementString("eAirway.09", TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.09"].vSet[i]);
                                }
                            }
                        }
                        else {
                            if (TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.09"].NV == true) {

                                XML.writeStartElement("eAirway.09");
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.09"].vSet[0]);
                                XML.writeEndElement();
                            };
                        }
                    };

                    XML.writeEndElement();
                };
                if (typeof TheCall.eAirway.AirwayGroup["eAirway.10"] != 'undefined') {
                    if (TheCall.eAirway.AirwayGroup["eAirway.10"].IsNull == false) {
                        XML.writeElementString("eAirway.10", TheCall.eAirway.AirwayGroup["eAirway.10"].vSet[0]);
                    }
                };

                if (typeof TheCall.eAirway.AirwayGroup["eAirway.11"] != 'undefined') {
                    if (TheCall.eAirway.AirwayGroup["eAirway.11"].IsNull == false) {
                        XML.writeElementString("eAirway.11", TheCall.eAirway.AirwayGroup["eAirway.11"].vSet[0]);
                    }
                };
            };
            XML.writeEndElement();
        }
    };
    //eArrest
    if (typeof TheCall.eArrest != 'undefined')
    {
        XML.writeStartElement("eArrest")
        if (typeof TheCall.eArrest["eArrest.01"] != 'undefined') {
            if (TheCall.eArrest["eArrest.01"].IsNull == false) {
                XML.writeElementString("eArrest.01", TheCall.eArrest["eArrest.01"].vSet);
            }
            else {
                if (TheCall.eArrest["eArrest.01"].NV == true) {
                    XML.writeStartElement('eArrest.01');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eArrest["eArrest.01"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof TheCall.eArrest["eArrest.02"] != 'undefined') {
            if (TheCall.eArrest["eArrest.02"].IsNull == false) {
                XML.writeElementString("eArrest.02", TheCall.eArrest["eArrest.02"].vSet[0]);
            }
            else {
                if (TheCall.eArrest["eArrest.02"].NV == true) {
                    XML.writeStartElement('eArrest.02');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eArrest["eArrest.02"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        
        if (typeof TheCall.eArrest["eArrest.03"] != 'undefined') {
            if (TheCall.eArrest["eArrest.03"].IsNull == false) {
                for (var i = 0; i < TheCall.eArrest["eArrest.03"].vSet.length; i++) 
                {
                    XML.writeElementString("eArrest.03", TheCall.eArrest["eArrest.03"].vSet[i]);
                }
            }
            else {
                if (TheCall.eArrest["eArrest.03"].NV == true) {
                    XML.writeStartElement('eArrest.03');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eArrest["eArrest.03"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eArrest["eArrest.04"] != 'undefined') 
        {
            if (TheCall.eArrest["eArrest.04"].IsNull == false) 
            {
                for (var i = 0; i < TheCall.eArrest["eArrest.04"].vSet.length; i++) 
                {
                    XML.writeElementString("eArrest.04", TheCall.eArrest["eArrest.04"].vSet[i]);
                }            
            }
            else {
                if (TheCall.eArrest["eArrest.04"].NV == true) {
                    XML.writeStartElement('eArrest.04');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eArrest["eArrest.04"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eArrest["eArrest.05"] != 'undefined') {
            if (TheCall.eArrest["eArrest.05"].IsNull == false) {
                XML.writeElementString("eArrest.05", TheCall.eArrest["eArrest.05"].vSet[0]);
            }
            else {
                if (TheCall.eArrest["eArrest.05"].NV == true) {
                    XML.writeStartElement('eArrest.05');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eArrest["eArrest.05"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eArrest["eArrest.06"] != 'undefined') 
        {
            if (TheCall.eArrest["eArrest.06"].IsNull == false) 
            {
                for (var i = 0; i < TheCall.eArrest["eArrest.06"].vSet.length; i++) 
                {
                    XML.writeElementString("eArrest.06", TheCall.eArrest["eArrest.06"].vSet[i]);
                }                       
            }
        };

        if (typeof TheCall.eArrest["eArrest.07"] != 'undefined') {
            if (TheCall.eArrest["eArrest.07"].IsNull == false) {
                XML.writeElementString("eArrest.07", TheCall.eArrest["eArrest.07"].vSet[0]);
            }
            else {
                if (TheCall.eArrest["eArrest.07"].NV == true) {
                    XML.writeStartElement('eArrest.07');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eArrest["eArrest.07"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof TheCall.eArrest["eArrest.08"] != 'undefined') 
        {
            if (TheCall.eArrest["eArrest.08"].IsNull == false) 
            {
                for (var i = 0; i < TheCall.eArrest["eArrest.08"].vSet.length; i++) 
                {
                    XML.writeElementString("eArrest.08", TheCall.eArrest["eArrest.08"].vSet[i]);
                }                        
            }          
        };

        if (typeof TheCall.eArrest["eArrest.09"] != 'undefined') {
            if (TheCall.eArrest["eArrest.09"].IsNull == false) {
                for (var i = 0; i < TheCall.eArrest["eArrest.09"].vSet.length; i++) {
                    XML.writeElementString("eArrest.09", TheCall.eArrest["eArrest.09"].vSet[i]);
                }
            }
            else {
                if (TheCall.eArrest["eArrest.09"].NV == true) {
                    XML.writeStartElement('eArrest.09');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eArrest["eArrest.09"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eArrest["eArrest.10"] != 'undefined') {
            if (TheCall.eArrest["eArrest.10"].IsNull == false) {
                XML.writeElementString("eArrest.10", TheCall.eArrest["eArrest.10"].vSet[0]);
            }
            else {
                if (TheCall.eArrest["eArrest.10"].NV == true) {
                    XML.writeStartElement('eArrest.10');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eArrest["eArrest.10"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eArrest["eArrest.11"] != 'undefined') {
            if (TheCall.eArrest["eArrest.11"].IsNull == false) {
                XML.writeElementString("eArrest.11", TheCall.eArrest["eArrest.11"].vSet[0]);
            }
            else {
                if (TheCall.eArrest["eArrest.11"].NV == true) {
                    XML.writeStartElement('eArrest.11');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eArrest["eArrest.11"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eArrest["eArrest.12"] != 'undefined') {
            if (TheCall.eArrest["eArrest.12"].IsNull == false) {
                for (var i = 0; i < TheCall.eArrest["eArrest.12"].vSet.length; i++) 
                {
                    XML.writeElementString("eArrest.12", TheCall.eArrest["eArrest.12"].vSet[i]);
                }                    }
            else {
                if (TheCall.eArrest["eArrest.12"].NV == true) {
                    XML.writeStartElement('eArrest.12');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eArrest["eArrest.12"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof TheCall.eArrest["eArrest.13"] != 'undefined') 
        {
            if (TheCall.eArrest["eArrest.13"].IsNull == false)
            {
                XML.writeElementString("eArrest.13", TheCall.eArrest["eArrest.13"].vSet[0]);
            }
        };
         

        if (typeof TheCall.eArrest["eArrest.14"] != 'undefined') {
            if (TheCall.eArrest["eArrest.14"].IsNull == false) {
                XML.writeElementString("eArrest.14", TheCall.eArrest["eArrest.14"].vSet[0]);
            }
            else {
                if (TheCall.eArrest["eArrest.14"].NV == true) {
                    XML.writeStartElement('eArrest.14');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eArrest["eArrest.14"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eArrest["eArrest.15"] != 'undefined') {
            if (TheCall.eArrest["eArrest.15"].IsNull == false) {
                XML.writeElementString("eArrest.15", TheCall.eArrest["eArrest.15"].vSet[0]);
            }
            else {
                if (TheCall.eArrest["eArrest.15"].NV == true) {
                    XML.writeStartElement('eArrest.15');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eArrest["eArrest.15"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eArrest["eArrest.16"] != 'undefined') {
            if (TheCall.eArrest["eArrest.16"].IsNull == false) {
                XML.writeElementString("eArrest.16", TheCall.eArrest["eArrest.16"].vSet[0]);
            }
            else {
                if (TheCall.eArrest["eArrest.16"].NV == true) {
                    XML.writeStartElement('eArrest.16');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eArrest["eArrest.16"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eArrest["eArrest.17"] != 'undefined') {
            if (TheCall.eArrest["eArrest.17"].IsNull == false) {
                for (var i = 0; i < TheCall.eArrest["eArrest.17"].vSet.length; i++) {
                    XML.writeElementString("eArrest.17", TheCall.eArrest["eArrest.17"].vSet[i]);
                }
            }
            else {
                if (TheCall.eArrest["eArrest.17"].NV == true) {
                    XML.writeStartElement('eArrest.17');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eArrest["eArrest.17"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eArrest["eArrest.18"] != 'undefined') {
            if (TheCall.eArrest["eArrest.18"].IsNull == false) {
                XML.writeElementString("eArrest.18", TheCall.eArrest["eArrest.18"].vSet[0]);
            }
            else {
                if (TheCall.eArrest["eArrest.18"].NV == true) {
                    XML.writeStartElement('eArrest.18');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eArrest["eArrest.18"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        
        XML.writeEndElement();
    };
    //eOutcome
    if (typeof TheCall.eOutcome != 'undefined') {
        XML.writeStartElement("eOutcome")
        if (typeof TheCall.eOutcome["eOutcome.01"] != 'undefined') {
            if (TheCall.eOutcome["eOutcome.01"].IsNull == false) {
                XML.writeElementString("eOutcome.01", TheCall.eOutcome["eOutcome.01"].vSet[0]);
            }
            else {
                if (TheCall.eOutcome["eOutcome.01"].NV == true) {
                    XML.writeStartElement('eOutcome.01');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eOutcome["eOutcome.01"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eOutcome["eOutcome.02"] != 'undefined') {
            if (TheCall.eOutcome["eOutcome.02"].IsNull == false) {
                XML.writeElementString("eOutcome.02", TheCall.eOutcome["eOutcome.02"].vSet[0]);
            }
            else {
                if (TheCall.eOutcome["eOutcome.02"].NV == true) {
                    XML.writeStartElement('eOutcome.02');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eOutcome["eOutcome.02"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (TheCall.eOutcome["ExternalDataGroup"] != -1) {            
            for (var i = 0; i <= TheCall.eOutcome["ExternalDataGroup"].length - 1; i++)
            {
                XML.writeStartElement("eOutcome.ExternalDataGroup");
                if (typeof TheCall.eOutcome.ExternalDataGroup[i]["eOutcome.03"] != 'undefined') {
                    if (TheCall.eOutcome.ExternalDataGroup[i]["eOutcome.03"].IsNull == false) {
                        XML.writeElementString("eOutcome.03", TheCall.eOutcome.ExternalDataGroup[i]["eOutcome.03"].vSet[0]);
                    }
                };
                if (typeof TheCall.eOutcome.ExternalDataGroup[i]["eOutcome.04"] != 'undefined') {
                    if (TheCall.eOutcome.ExternalDataGroup[i]["eOutcome.04"].IsNull == false) {
                        XML.writeElementString("eOutcome.04", TheCall.eOutcome.ExternalDataGroup[i]["eOutcome.04"].vSet[0]);
                    }
                };

                if (typeof TheCall.eOutcome.ExternalDataGroup[i]["eOutcome.05"] != 'undefined') {
                    if (TheCall.eOutcome.ExternalDataGroup[i]["eOutcome.05"].IsNull == false) {
                        XML.writeElementString("eOutcome.05", TheCall.eOutcome.ExternalDataGroup[i]["eOutcome.05"].vSet[0]);
                    }
                };
                XML.writeEndElement();
            }
        };

        if (typeof TheCall.eOutcome["eOutcome.06"] != 'undefined') {
            if (TheCall.eOutcome["eOutcome.06"].IsNull == false) {
                XML.writeElementString("eOutcome.06", TheCall.eOutcome["eOutcome.06"].vSet[0]);
            }
        };

        if (typeof TheCall.eOutcome["eOutcome.07"] != 'undefined') {
            if (TheCall.eOutcome["eOutcome.07"].IsNull == false) {
                XML.writeElementString("eOutcome.07", TheCall.eOutcome["eOutcome.07"].vSet[0]);
            }
        };

        if (typeof TheCall.eOutcome["eOutcome.08"] != 'undefined')
        {
            if (TheCall.eOutcome["eOutcome.08"].IsNull == false)
            {
                XML.writeElementString("eOutcome.08", TheCall.eOutcome["eOutcome.08"].vSet[0]);
            }
        };

        if (typeof TheCall.eOutcome["eOutcome.09"] != 'undefined')
        {
            if (TheCall.eOutcome["eOutcome.09"].IsNull == false) {
                for (var i = 0; i <= TheCall.eOutcome["eOutcome.09"].vSet.length-1 ; i++) {
                    XML.writeElementString("eOutcome.09", TheCall.eOutcome["eOutcome.09"].vSet[i]);
                }
            }
        };

        if (typeof TheCall.eOutcome["eOutcome.10"] != 'undefined') {
            if (TheCall.eOutcome["eOutcome.10"].IsNull == false) {
                for (var i = 0; i <= TheCall.eOutcome["eOutcome.10"].vSet.length - 1; i++) {
                    XML.writeElementString("eOutcome.10", TheCall.eOutcome["eOutcome.10"].vSet[i]);
                }
            }
        };

        if (typeof TheCall.eOutcome["eOutcome.11"] != 'undefined') {
            if (TheCall.eOutcome["eOutcome.11"].IsNull == false) {
                XML.writeElementString("eOutcome.11", TheCall.eOutcome["eOutcome.11"].vSet[0]);
            }
        };

        if (typeof TheCall.eOutcome["eOutcome.12"] != 'undefined') {
            if (TheCall.eOutcome["eOutcome.12"].IsNull == false) {
                for (var i = 0; i <= TheCall.eOutcome["eOutcome.12"].vSet.length - 1; i++) {
                    XML.writeElementString("eOutcome.12", TheCall.eOutcome["eOutcome.12"].vSet[i]);
                }
            }
        };

        if (typeof TheCall.eOutcome["eOutcome.13"] != 'undefined') {
            if (TheCall.eOutcome["eOutcome.13"].IsNull == false) {
                for (var i = 0; i <= TheCall.eOutcome["eOutcome.13"].vSet.length - 1; i++) {
                    XML.writeElementString("eOutcome.13", TheCall.eOutcome["eOutcome.13"].vSet[i]);
                }
            }
        };

        if (typeof TheCall.eOutcome["eOutcome.14"] != 'undefined') {
            if (TheCall.eOutcome["eOutcome.14"].IsNull == false) {
                XML.writeElementString("eOutcome.14", TheCall.eOutcome["eOutcome.14"].vSet[0]);
            }
        };

        if (typeof TheCall.eOutcome["eOutcome.15"] != 'undefined') {
            if (TheCall.eOutcome["eOutcome.15"].IsNull == false) {
                XML.writeElementString("eOutcome.15", TheCall.eOutcome["eOutcome.15"].vSet[0]);
            }
        };

        if (typeof TheCall.eOutcome["eOutcome.16"] != 'undefined') {
            if (TheCall.eOutcome["eOutcome.16"].IsNull == false) {
                XML.writeElementString("eOutcome.16", TheCall.eOutcome["eOutcome.16"].vSet[0]);
            }
        };

        if (typeof TheCall.eOutcome["eOutcome.17"] != 'undefined') {
            if (TheCall.eOutcome["eOutcome.17"].IsNull == false) {
                XML.writeElementString("eOutcome.17", TheCall.eOutcome["eOutcome.17"].vSet[0]);
            }
        };
        XML.writeEndElement();
    };
    //eOther
    if (typeof TheCall.eOther != 'undefined') {
        XML.writeStartElement("eOther")
        if (typeof TheCall.eOther["eOther.01"] != 'undefined') {
            if (TheCall.eOther["eOther.01"].IsNull == false) {
                XML.writeElementString("eOther.01", TheCall.eOther["eOther.01"].vSet[0]);
            }
        };

        if (typeof TheCall.eOther["eOther.02"] != 'undefined') {
            if (TheCall.eOther["eOther.02"].IsNull == false) {
                XML.writeElementString("eOther.02", TheCall.eOther["eOther.02"].vSet[0]);
            }
        };

        if (TheCall.eOther["EMSCrewMemberGroup"] != -1) {
            for (var i = 0; i <= TheCall.eOther.EMSCrewMemberGroup.length - 1; i++) {
                XML.writeStartElement("eOther.EMSCrewMemberGroup");

                if (typeof TheCall.eOther.EMSCrewMemberGroup["eOther.03"] != 'undefined') {
                    if (TheCall.eOther["eOther.03"].IsNull == false) {
                        for (var d; d <= TheCall.eOther["EMSCrewMemberGroup"]["eOther.03"].vSet.length - d; i++)

                            XML.writeElementString("eOther.03", TheCall.eOther[i]["eOther.03"].vSet[d]);
                    }
                };
            };

            if (typeof TheCall.eOther.EMSCrewMemberGroup["eOther.04"] != 'undefined') {
                if (TheCall.eOther["eOther.04"].IsNull == false) {
                    XML.writeElementString("eOther.03", TheCall.eOther[i]["eOther.03"].vSet[0]);
                }
            };


            if (typeof TheCall.eOther.EMSCrewMemberGroup["eOther.05"] != 'undefined') {
                if (TheCall.eOther.EMSCrewMemberGroup["eOther.05"].IsNull == false) {
                    XML.writeElementString("eOther.05", eOther.EMSCrewMemberGroup["eOther.05"].vSet[0]);
                }
                else {
                    if (TheCall.eOther.EMSCrewMemberGroup["eOther.05"].NV == true) {
                        XML.writeStartElement('eOther.05');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', eOther.EMSCrewMemberGroup["eOther.05"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };


            if (typeof TheCall.eOther.EMSCrewMemberGroup["eOther.06"] != 'undefined') {
                if (TheCall.eOther.EMSCrewMemberGroup["eOther.06"].IsNull == false) {
                    XML.writeElementString("eOther.06", eOther.EMSCrewMemberGroup["eOther.06"].vSet[0]);
                }
                else {
                    if (TheCall.eOther.EMSCrewMemberGroup["eOther.06"].NV == true) {
                        XML.writeStartElement('eOther.06');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', eOther.EMSCrewMemberGroup["eOther.06"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            XML.writeEndElement();
        };

        if (typeof TheCall.eOther["eOther.07"] != 'undefined') {
            if (TheCall.eOther["eOther.07"].IsNull == false) {
                for (var d; d <= TheCall.eOutcome["eOther.07"].vSet.length - d; i++) {
                    XML.writeElementString("eOther.07", TheCall.eOther["eOther.07"].vSet[d]);
                }
            };
        };

        if (typeof TheCall.eOther["eOther.08"] != 'undefined') {
            if (TheCall.eOther["eOther.08"].IsNull == false) {
                XML.writeElementString("eOther.08", eOther["eOther.08"].vSet[0]);
            }
            else {
                if (TheCall.eOther["eOther.08"].NV == true) {
                    XML.writeStartElement('eOther.08');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eOther["eOther.08"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };


        if (TheCall.eOther["FileGroup"] != -1) {
            for (var i = 0; i <= TheCall.eOutcome["FileGroup"].length - 1; i++) {
                XML.writeStartElement("eOther.FileGroup");

                if (typeof TheCall.eOther.FileGroup[i]["eOther.09"] != 'undefined') {
                    if (TheCall.eOther.FileGroup[i]["eOther.09"].IsNull == false) {
                        XML.writeElementString("eOther.09", TheCall.eOther.FileGroup[i]["eOther.09"].vSet[0]);
                    }
                };

                if (typeof TheCall.eOther.FileGroup[i]["eOther.10"] != 'undefined') {
                    if (TheCall.eOther.FileGroup[i]["eOther.10"].IsNull == false) {
                        XML.writeElementString("eOther.10", TheCall.eOther.FileGroup[i]["eOther.10"].vSet[0]);
                    }
                };

                if (typeof TheCall.eOther.FileGroup[i]["eOther.11"] != 'undefined') {
                    if (TheCall.eOther.FileGroup[i]["eOther.11"].IsNull == false) {
                        XML.writeElementString("eOther.11", TheCall.eOther.FileGroup[i]["eOther.11"].vSet[0]);
                    }
                };

                XML.writeEndElement();
            }
        };

        if (TheCall.eOther["SignatureGroup"] != -1) {
            for (var i = 0; i <= TheCall.eOutcome["SignatureGroup"].length - 1; i++) {
                XML.writeStartElement("eOther.SignatureGroup");

                if (typeof TheCall.eOther.SignatureGroup[i]["eOther.12"] != 'undefined') {
                    if (TheCall.eOther.SignatureGroup[i]["eOther.12"].IsNull == false) {
                        XML.writeElementString("eOther.12", TheCall.eOther.SignatureGroup[i]["eOther.12"].vSet[0]);
                    }
                };
                if (typeof TheCall.eOther.SignatureGroup[i]["eOther.13"] != 'undefined') {
                    if (TheCall.eOther.SignatureGroup[i]["eOther.13"].IsNull == false) {
                        XML.writeElementString("eOther.13", TheCall.eOther.SignatureGroup[i]["eOther.13"].vSet[0]);
                    }
                };
                if (typeof TheCall.eOther.SignatureGroup[i]["eOther.14"] != 'undefined') {
                    if (TheCall.eOther.SignatureGroup[i]["eOther.14"].IsNull == false) {
                        XML.writeElementString("eOther.14", TheCall.eOther.SignatureGroup[i]["eOther.14"].vSet[0]);
                    }
                };
                if (typeof TheCall.eOther.SignatureGroup[i]["eOther.15"] != 'undefined') {
                    if (TheCall.eOther.SignatureGroup[i]["eOther.15"].IsNull == false) {
                        XML.writeElementString("eOther.15", TheCall.eOther.SignatureGroup[i]["eOther.15"].vSet[0]);
                    }
                };
                if (typeof TheCall.eOther.SignatureGroup[i]["eOther.16"] != 'undefined') {
                    if (TheCall.eOther.SignatureGroup[i]["eOther.16"].IsNull == false) {
                        XML.writeElementString("eOther.16", TheCall.eOther.SignatureGroup[i]["eOther.16"].vSet[0]);
                    }
                };
                if (typeof TheCall.eOther.SignatureGroup[i]["eOther.17"] != 'undefined') {
                    if (TheCall.eOther.SignatureGroup[i]["eOther.17"].IsNull == false) {
                        XML.writeElementString("eOther.17", TheCall.eOther.SignatureGroup[i]["eOther.17"].vSet[0]);
                    }
                };
                if (typeof TheCall.eOther.SignatureGroup[i]["eOther.18"] != 'undefined') {
                    if (TheCall.eOther.SignatureGroup[i]["eOther.18"].IsNull == false) {
                        XML.writeElementString("eOther.18", TheCall.eOther.SignatureGroup[i]["eOther.18"].vSet[0]);
                    }
                };
                if (typeof TheCall.eOther.SignatureGroup[i]["eOther.19"] != 'undefined') {
                    if (TheCall.eOther.SignatureGroup[i]["eOther.19"].IsNull == false) {
                        XML.writeElementString("eOther.19", TheCall.eOther.SignatureGroup[i]["eOther.19"].vSet[0]);
                    }
                };
                if (typeof TheCall.eOther.SignatureGroup[i]["eOther.20"] != 'undefined') {
                    if (TheCall.eOther.SignatureGroup[i]["eOther.20"].IsNull == false) {
                        XML.writeElementString("eOther.20", TheCall.eOther.SignatureGroup[i]["eOther.20"].vSet[0]);
                    }
                };
                if (typeof TheCall.eOther.SignatureGroup[i]["eOther.21"] != 'undefined') {
                    if (TheCall.eOther.SignatureGroup[i]["eOther.21"].IsNull == false) {
                        XML.writeElementString("eOther.21", TheCall.eOther.SignatureGroup[i]["eOther.21"].vSet[0]);
                    }
                };

                XML.writeEndElement();
            }
        }
    };
    //eInjury
    if (typeof TheCall.eInjury != 'undefined') {
        XML.writeStartElement("eInjury");
        if (typeof TheCall.eInjury["eInjury.01"] != 'undefined') {
            if (TheCall.eInjury["eInjury.01"].IsNull == false) {
                XML.writeElementString("eInjury.01", TheCall.eInjury["eInjury.01"].vSet[0]);
            }
            else {
                if (typeof TheCall.eInjury["eInjury.01"].NV != 'undefined') {

                    XML.writeStartElement('eInjury.01');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eInjury["eInjury.01"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };


        if (typeof TheCall.eInjury["eInjury.02"] != 'undefined') {
            if (TheCall.eInjury["eInjury.02"].IsNull == false) {
                XML.writeElementString("eInjury.02", TheCall.eInjury["eInjury.02"].vSet[0]);
            }
            else {
                if (typeof TheCall.eInjury["eInjury.02"].NV != 'undefined') {

                    XML.writeStartElement('eInjury.02');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eInjury["eInjury.02"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eInjury["eInjury.03"] != 'undefined') {
            if (TheCall.eInjury["eInjury.03"].IsNull == false) {
                XML.writeElementString("eInjury.03", TheCall.eInjury["eInjury.03"].vSet[0]);
            }
            else {
                if (typeof TheCall.eInjury["eInjury.03"].NV != 'undefined') {

                    XML.writeStartElement('eInjury.03');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eInjury["eInjury.03"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eInjury["eInjury.04"] != 'undefined') {
            if (TheCall.eInjury["eInjury.04"].IsNull == false) {
                XML.writeElementString("eInjury.04", TheCall.eInjury["eInjury.04"].vSet[0]);
            }
            else {
                if (typeof TheCall.eInjury["eInjury.04"].NV != 'undefined') {

                    XML.writeStartElement('eInjury.04');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eInjury["eInjury.04"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eInjury["eInjury.05"] != 'undefined') {
            if (TheCall.eInjury["eInjury.05"].IsNull == false) {
                XML.writeElementString("eInjury.05", TheCall.eInjury["eInjury.05"].vSet[0]);
            }
        };
        if (typeof TheCall.eInjury["eInjury.06"] != 'undefined') {
            if (TheCall.eInjury["eInjury.06"].IsNull == false) {
                XML.writeElementString("eInjury.06", TheCall.eInjury["eInjury.06"].vSet[0]);
            }
        };
        if (typeof TheCall.eInjury["eInjury.07"] != 'undefined') {
            if (TheCall.eInjury["eInjury.07"].IsNull == false) {
                for (var i = 0; i < TheCall.eInjury["eInjury.07"].vSet; i++) {
                    XML.writeElementString("eInjury.07", TheCall.eInjury["eInjury.07"].vSet[i]);
                }
            }
            else {
                if (typeof TheCall.eInjury["eInjury.07"].NV != 'undefined') {

                    XML.writeStartElement('eInjury.07');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eInjury["eInjury.07"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eInjury["eInjury.08"] != 'undefined') {
            if (TheCall.eInjury["eInjury.08"].IsNull == false) {
                for (var i = 0; i < TheCall.eInjury["eInjury.08"].vSet.length; i++) {
                    XML.writeElementString("eInjury.08", TheCall.eInjury["eInjury.08"].vSet[i]);
                }
            }
        };
        if (typeof TheCall.eInjury["eInjury.09"] != 'undefined') {
            if (TheCall.eInjury["eInjury.09"].IsNull == false) {
                XML.writeElementString("eInjury.09", TheCall.eInjury["eInjury.09"].vSet[0]);
            }
        };
        if (typeof TheCall.eInjury["eInjury.10"] != 'undefined') {
            if (TheCall.eInjury["eInjury.10"].IsNull == false) {
                for (var i = 0; i < TheCall.eInjury["eInjury.10"].vSet; i++) {
                    XML.writeElementString("eInjury.10", TheCall.eInjury["eInjury.10"].vSet[i]);
                }
            }
            else {
                if (typeof TheCall.eInjury["eInjury.10"].NV != 'undefined') {

                    XML.writeStartElement('eInjury.10');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eInjury["eInjury.10"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        XML.writeStartElement("eInjury.CollisionGroup");
        if (typeof TheCall.eInjury["eInjury.11"] != 'undefined') {
            if (TheCall.eInjury["eInjury.11"].IsNull == false) {
                XML.writeElementString("eInjury.11", TheCall.eInjury["eInjury.11"].vSet[0]);
            }
        };
 
        if (typeof TheCall.eInjury["eInjury.12"] != 'undefined') {
            if (TheCall.eInjury["eInjury.12"].IsNull == false) {
                XML.writeElementString("eInjury.12", TheCall.eInjury["eInjury.12"].vSet[0]);
            }
        };
 
        if (typeof TheCall.eInjury["eInjury.13"] != 'undefined') {
            if (TheCall.eInjury["eInjury.13"].IsNull == false) {
                for (var i = 0; i < TheCall.eInjury["eInjury.13"].vSet; i++) {
                    XML.writeElementString("eInjury.13", TheCall.eInjury["eInjury.13"].vSet[i]);
                }
            }
            else {
                if (typeof TheCall.eInjury["eInjury.13"].NV != 'undefined') {

                    XML.writeStartElement('eInjury.13');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eInjury["eInjury.13"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eInjury["eInjury.14"] != 'undefined') {
            if (TheCall.eInjury["eInjury.14"].IsNull == false) {
                XML.writeElementString("eInjury.14", TheCall.eInjury["eInjury.14"].vSet[0]);
            }
        };
 

        if (typeof TheCall.eInjury["eInjury.15"] != 'undefined') {
            if (TheCall.eInjury["eInjury.15"].IsNull == false) {
                XML.writeElementString("eInjury.15", TheCall.eInjury["eInjury.15"].vSet[0]);
            }
        };
 
        
        if (typeof TheCall.eInjury["eInjury.16"] != 'undefined') {
            if (TheCall.eInjury["eInjury.16"].IsNull == false) {
                XML.writeElementString("eInjury.16", TheCall.eInjury["eInjury.16"].vSet[0]);
            }
        };
 
        
        if (typeof TheCall.eInjury["eInjury.17"] != 'undefined') {
            if (TheCall.eInjury["eInjury.17"].IsNull == false) {
                XML.writeElementString("eInjury.17", TheCall.eInjury["eInjury.17"].vSet[0]);
            }
        };
 
        
        if (typeof TheCall.eInjury["eInjury.18"] != 'undefined') {
            if (TheCall.eInjury["eInjury.18"].IsNull == false) {
                XML.writeElementString("eInjury.18", TheCall.eInjury["eInjury.18"].vSet[0]);
            }
        };
 
        
        if (typeof TheCall.eInjury["eInjury.19"] != 'undefined') {
            if (TheCall.eInjury["eInjury.19"].IsNull == false) {
                XML.writeElementString("eInjury.19", TheCall.eInjury["eInjury.19"].vSet[0]);
            }
        };
 
        if (typeof TheCall.eInjury["eInjury.20"] != 'undefined') {
            if (TheCall.eInjury["eInjury.20"].IsNull == false) {
                XML.writeElementString("eInjury.20", TheCall.eInjury["eInjury.20"].vSet[0]);
            }
        };
 
        
        if (typeof TheCall.eInjury["eInjury.21"] != 'undefined') {
            if (TheCall.eInjury["eInjury.21"].IsNull == false) {
                XML.writeElementString("eInjury.21", TheCall.eInjury["eInjury.21"].vSet[0]);
            }
        };
 
        if (typeof TheCall.eInjury["eInjury.22"] != 'undefined') {
            if (TheCall.eInjury["eInjury.22"].IsNull == false) {
                for (var i = 0; i < TheCall.eInjury["eInjury.22"].vSet; i++) {
                    XML.writeElementString("eInjury.22", TheCall.eInjury["eInjury.22"].vSet[i]);
                }
            }
            else {
                if (typeof TheCall.eInjury["eInjury.22"].NV != 'undefined') {

                    XML.writeStartElement('eInjury.22');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eInjury["eInjury.22"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eInjury["eInjury.23"] != 'undefined') {
            if (TheCall.eInjury["eInjury.23"].IsNull == false) {
                XML.writeElementString("eInjury.23", TheCall.eInjury["eInjury.23"].vSet[0]);
            }
        };

        TheCall.eInjury["SeatGroup"]
        

        if(typeof TheCall.eInjury["SeatGroup"] !='undefined')
        {
            if(TheCall.eInjury["SeatGroup"] !=-1)
            {
                for (var i= 0; i < TheCall.eInjury["SeatGroup"].length; i++) 
                {
                    XML.writeStartElement("eInjury.SeatGroup");
                    if (typeof TheCall.eInjury.SeatGroup["eInjury.26"] != 'undefined') 
                    {
                        if (TheCall.eInjury.SeatGroup["eInjury.26"].IsNull == false) 
                        {
                            XML.writeElementString("eInjury.26", TheCall.eInjury.SeatGroup[I]["eInjury.26"].vSet[0]);
                        }
                    };

                    if (typeof TheCall.eInjury.SeatGroup["eInjury.27"] != 'undefined') 
                    {
                        if (TheCall.eInjury.SeatGroup["eInjury.27"].IsNull == false) 
                        {
                            XML.writeElementString("eInjury.27", TheCall.eInjury.SeatGroup[I]["eInjury.27"].vSet[0]);
                        }
                    };

                    if (typeof TheCall.eInjury.SeatGroup["eInjury.28"] != 'undefined') 
                    {
                        if (TheCall.eInjury.SeatGroup["eInjury.28"].IsNull == false) 
                        {
                            XML.writeElementString("eInjury.28", TheCall.eInjury.SeatGroup[I]["eInjury.28"].vSet[0]);
                        }
                    };
                    if (typeof TheCall.eInjury.SeatGroup["eInjury.29"] != 'undefined') 
                    {
                        if (TheCall.eInjury.SeatGroup["eInjury.29"].IsNull == false) 
                        {
                            XML.writeElementString("eInjury.29", TheCall.eInjury.SeatGroup[I]["eInjury.29"].vSet[0]);
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
    if (typeof TheCall.eExam != 'undefined') {
        XML.writeStartElement("eExam");
        if (typeof TheCall.eExam["eExam.01"] != 'undefined') {
            if (TheCall.eExam["eExam.01"].IsNull == false) {
                XML.writeElementString("eExam.01", TheCall.eExam["eExam.01"].vSet[0]);
            }
            else {
                if (typeof TheCall.eExam["eExam.01"].NV != 'undefined') {

                    XML.writeStartElement('eExam.01');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eExam["eExam.01"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };

        if (typeof TheCall.eExam["eExam.02"] != 'undefined') {
            if (TheCall.eExam["eExam.02"].IsNull == false) {
                XML.writeElementString("eExam.02", TheCall.eExam["eExam.02"].vSet[0]);
            }
            else {
                if (typeof TheCall.eExam["eExam.02"].NV != 'undefined') {

                    XML.writeStartElement('eExam.02');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eExam["eExam.02"].vSet[0]);
                    XML.writeEndElement();
                }
            }
        };
        if (typeof TheCall.eExam["AssessmentGroup"] != 'undefined') {
            if (typeof TheCall.eExam["AssessmentGroup"] != 'undefined') {
                for (var x = 0; x < TheCall.eExam.AssessmentGroup.length; x++) {
                    XML.writeStartElement("eExam.AssessmentGroup");
                    if (typeof TheCall.eExam.AssessmentGroup["eExam.03"] != 'undefined') {
                        if (TheCall.eExam.AssessmentGroup[x]["eExam.03"].IsNull == false) {
                            XML.writeElementString("eExam.03", TheCall.eExam.AssessmentGroup["eExam.03"].vSet[0]);
                        }
                    };
                    if (typeof TheCall.eExam.AssessmentGroup["eExam.04"] != 'undefined') {
                        if (TheCall.eExam.AssessmentGroup["eExam.04"].IsNull == false) {
                            for (var i = 0; i < TheCall.eExam.AssessmentGroup["eExam.04"].length; i++) {
                                XML.writeElementString("eExam.04", TheCall.eExam.AssessmentGroup[x]["eExam.04"].vSet[i]);
                            }
                        };
                    };

                    if (typeof TheCall.eExam.AssessmentGroup["eExam.05"] != 'undefined') {
                        if (TheCall.eExam.AssessmentGroup["eExam.05"].IsNull == false) {
                            for (var i = 0; i < TheCall.eExam.AssessmentGroup["eExam.05"].length; i++) {
                                XML.writeElementString("eExam.05", TheCall.eExam.AssessmentGroup[x]["eExam.05"].vSet[i]);
                            }
                        };
                    };

                    if (typeof TheCall.eExam.AssessmentGroup["eExam.06"] != 'undefined') {
                        if (TheCall.eExam.AssessmentGroup["eExam.06"].IsNull == false) {
                            for (var i = 0; i < TheCall.eExam.AssessmentGroup["eExam.06"].length; i++) {
                                XML.writeElementString("eExam.06", TheCall.eExam.AssessmentGroup[x]["eExam.06"].vSet[i]);
                            }
                        };
                    };

                    if (typeof TheCall.eExam.AssessmentGroup["eExam.07"] != 'undefined') {
                        if (TheCall.eExam.AssessmentGroup["eExam.07"].IsNull == false) {
                            for (var i = 0; i < TheCall.eExam.AssessmentGroup["eExam.07"].length; i++) {
                                XML.writeElementString("eExam.07", TheCall.eExam.AssessmentGroup[x]["eExam.07"].vSet[i]);
                            }
                        };
                    };


                    if (typeof TheCall.eExam.AssessmentGroup["eExam.08"] != 'undefined') {
                        if (TheCall.eExam.AssessmentGroup["eExam.08"].IsNull == false) {
                            for (var i = 0; i < TheCall.eExam.AssessmentGroup["eExam.08"].length; i++) {
                                XML.writeElementString("eExam.08", TheCall.eExam.AssessmentGroup[x]["eExam.08"].vSet[i]);
                            }
                        };
                    };
                    if (typeof TheCall.eExam.AssessmentGroup["eExam.09"] != 'undefined') {
                        if (TheCall.eExam.AssessmentGroup["eExam.09"].IsNull == false) {
                            for (var i = 0; i < TheCall.eExam.AssessmentGroup["eExam.09"].length; i++) {
                                XML.writeElementString("eExam.09", TheCall.eExam.AssessmentGroup[x]["eExam.09"].vSet[i]);
                            }
                        };
                    };

                    /////////////////////AbdomenGroup
                    if (typeof eExam["AbdomenGroup"] != 'undefined') {
                        if (typeof eExam["AbdomenGroup"] != 'undefined') {
                            for (var x = 0; x < TheCall.eExam.AssessmentGroup[x].AbdomenGroup.length; x++) {
                                XML.writeStartElement("eExam.AbdomenGroup");
                                if (typeof TheCall.eExam.AssessmentGroup[x].AbdomenGroup["eExam.10"] != 'undefined') {
                                    if (TheCall.eExam.AssessmentGroup[x].AbdomenGroup["eExam.10"].IsNull == false) {
                                        XML.writeElementString("eExam.10", TheCall.eExam.AssessmentGroup[x].AbdomenGroup["eExam.10"].vSet[0]);
                                    }
                                };

                                if (typeof TheCall.eExam.AssessmentGroup[x].AbdomenGroup["eExam.11"] != 'undefined') {
                                    if (TheCall.eExam.AssessmentGroup[x].AbdomenGroup["eExam.11"].IsNull == false) {
                                        for (var i = 0; i < TheCall.eExam.AssessmentGroup[x].AbdomenGroup["eExam.11"].length; i++) {
                                            XML.writeElementString("eExam.11", TheCall.eExam.AssessmentGroup[x].AbdomenGroup["eExam.11"].vSet[i]);
                                        }
                                    };
                                };
                                XML.writeEndElement();
                            };
                        }
                    };
                    if (typeof TheCall.eExam.AssessmentGroup[x]["eExam.12"] != 'undefined') {
                        if (TheCall.eExam.AssessmentGroup[x]["eExam.12"].IsNull == false) {
                            for (var i = 0; i < TheCall.eExam.AssessmentGroup[x]["eExam.12"].length; i++) {
                                XML.writeElementString("eExam.12", TheCall.eExam.AssessmentGroup[x]["eExam.12"].vSet[i]);
                            }
                        };
                    };
                    /////////////////////SpineGroup
                    if (typeof eExam["SpineGroup"] != 'undefined') {
                        if (typeof eExam["SpineGroup"] != 'undefined') {
                            for (var x = 0; x < TheCall.eExam.AssessmentGroup[x].SpineGroup.length; x++) {
                                XML.writeStartElement("eExam.SpineGroup");
                                if (typeof TheCall.eExam.AssessmentGroup[x].SpineGroup["eExam.13"] != 'undefined') {
                                    if (TheCall.eExam.AssessmentGroup[x].SpineGroup["eExam.13"].IsNull == false) {
                                        XML.writeElementString("eExam.13", TheCall.eExam.AssessmentGroup[x].SpineGroup["eExam.13"].vSet[0]);
                                    }
                                };

                                if (typeof TheCall.eExam.AssessmentGroup[x].SpineGroup["eExam.14"] != 'undefined') {
                                    if (TheCall.eExam.AssessmentGroup[x].SpineGroup["eExam.14"].IsNull == false) {
                                        for (var i = 0; i < TheCall.eExam.AssessmentGroup[x].SpineGroup["eExam.14"].length; i++) {
                                            XML.writeElementString("eExam.14", TheCall.eExam.AssessmentGroup[x].SpineGroup["eExam.14"].vSet[i]);
                                        }
                                    };
                                };
                                XML.writeEndElement();
                            };
                        }
                    };

                    /////////////////////ExtremityGroup
                    if (typeof eExam["ExtremityGroup"] != 'undefined') {
                        if (typeof eExam["ExtremityGroup"] != 'undefined') {
                            for (var x = 0; x < TheCall.eExam.AssessmentGroup[x].ExtremityGroup.length; x++) {
                                XML.writeStartElement("eExam.ExtremityGroup");
                                if (typeof TheCall.eExam.AssessmentGroup[x].ExtremityGroup["eExam.15"] != 'undefined') {
                                    if (TheCall.eExam.AssessmentGroup[x].ExtremityGroup["eExam.15"].IsNull == false) {
                                        XML.writeElementString("eExam.15", TheCall.eExam.AssessmentGroup[x].ExtremityGroup["eExam.15"].vSet[0]);
                                    }
                                };

                                if (typeof TheCall.eExam.AssessmentGroup[x].ExtremityGroup["eExam.16"] != 'undefined') {
                                    if (TheCall.eExam.AssessmentGroup[x].ExtremityGroup["eExam.16"].IsNull == false) {
                                        for (var i = 0; i < TheCall.eExam.AssessmentGroup[x].ExtremityGroup["eExam.16"].length; i++) {
                                            XML.writeElementString("eExam.16", TheCall.eExam.AssessmentGroup[x].ExtremityGroup["eExam.16"].vSet[i]);
                                        }
                                    };
                                };
                                XML.writeEndElement();
                            };
                        }
                    };

                    /////////////////////EyeGroup
                    if (typeof eExam["EyeGroup"] != 'undefined') {
                        if (typeof eExam["EyeGroup"] != 'undefined') {
                            for (var x = 0; x < TheCall.eExam.AssessmentGroup[x].EyeGroup.length; x++) {
                                XML.writeStartElement("eExam.EyeGroup");
                                if (typeof TheCall.eExam.AssessmentGroup[x].EyeGroup["eExam.17"] != 'undefined') {
                                    if (TheCall.eExam.AssessmentGroup[x].EyeGroup["eExam.17"].IsNull == false) {
                                        XML.writeElementString("eExam.17", TheCall.eExam.AssessmentGroup[x].EyeGroup["eExam.17"].vSet[0]);
                                    }
                                };

                                if (typeof TheCall.eExam.AssessmentGroup[x].EyeGroup["eExam.18"] != 'undefined') {
                                    if (TheCall.eExam.AssessmentGroup[x].EyeGroup["eExam.18"].IsNull == false) {
                                        for (var i = 0; i < TheCall.eExam.AssessmentGroup[x].EyeGroup["eExam.18"].length; i++) {
                                            XML.writeElementString("eExam.18", TheCall.eExam.AssessmentGroup[x].EyeGroup["eExam.18"].vSet[i]);
                                        }
                                    };
                                };
                                XML.writeEndElement();
                            };
                        }
                    };
                    if (typeof TheCall.eExam.AssessmentGroup[x]["eExam.19"] != 'undefined') {
                        if (TheCall.eExam.AssessmentGroup[x]["eExam.19"].IsNull == false) {
                            for (var i = 0; i < TheCall.eExam.AssessmentGroup[x]["eExam.19"].length; i++) {
                                XML.writeElementString("eExam.19", TheCall.eExam.AssessmentGroup[x]["eExam.19"].vSet[i]);
                            }
                        };
                    };

                    if (typeof TheCall.eExam.AssessmentGroup[x]["eExam.20"] != 'undefined') {
                        if (TheCall.eExam.AssessmentGroup[x]["eExam.20"].IsNull == false) {
                            for (var i = 0; i < TheCall.eExam.AssessmentGroup[x]["eExam.20"].length; i++) {
                                XML.writeElementString("eExam.20", TheCall.eExam.AssessmentGroup[x]["eExam.20"].vSet[i]);
                            }
                        };
                    };
                };

                XML.writeEndElement();
                XML.writeEndElement();
            }
        }
    };
    //eProceduree
    if (typeof TheCall.eProcedures != 'undefined') {
        if (TheCall.eProcedures["ProcedureGroup"] != -1) {
            XML.writeStartElement("eProcedures");
            XML.writeStartElement("eProcedure.ProcedureGroup");

            for (var x = 0; x < TheCall.eProcedures.ProcedureGroup.length; x++) {

                if (typeof TheCall.eProcedures.ProcedureGroup[x]["eProcedures.01"] != 'undefined') {
                    if (TheCall.eProcedures.ProcedureGroup[x]["eProcedures.01"].IsNull == false) {
                        XML.writeElementString("eProcedures.01", TheCall.eProcedures.ProcedureGroup[x]["eProcedures.01"].vSet[0]);
                    }
                    else {
                        if (typeof TheCall.eProcedures.ProcedureGroup[x]["eProcedures.01"].NV != 'undefined') {

                            XML.writeStartElement('eProcedures.01');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', TheCall.eProcedures.ProcedureGroup[x]["eProcedures.01"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof TheCall.eProcedures.ProcedureGroup[x]["eProcedures.02"] != 'undefined') {
                    if (TheCall.eProcedures.ProcedureGroup[x]["eProcedures.02"].IsNull == false) {
                        XML.writeElementString("eProcedures.02", TheCall.ProcedureGroup[x].eProcedures["eProcedures.02"].vSet[0]);
                    }
                    else {
                        if (typeof TheCall.eProcedures.ProcedureGroup[x]["eProcedures.02"].NV != 'undefined') {

                            XML.writeStartElement('eProcedures.02');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', TheCall.eProcedures.ProcedureGroup[x]["eProcedures.02"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };
                
                if (typeof TheCall.eProcedures.ProcedureGroup[x]["eProcedures.03"] != 'undefined') 
                {
                    if (TheCall.eProcedures.ProcedureGroup[x]["eProcedures.03"].IsNull == false) 
                    {
                        XML.writeElementString("eProcedures.03", TheCall.eProcedures.ProcedureGroup[x]["eProcedures.03"].vSet[0]);
                    }
                    else 
                    {
                        if (typeof TheCall.eProcedures.ProcedureGroup[x]["eProcedures.03"].PN != 'undefined') 
                        {

                            XML.writeStartElement('eProcedures.03');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', TheCall.eProcedures.ProcedureGroup[x]["eProcedures.03"].vSet[0]);
                            XML.writeEndElement();
                        }
                    
                        else {
                            if (typeof TheCall.eProcedures.ProcedureGroup[x]["eProcedures.03"].NV != 'undefined') {

                                XML.writeStartElement('eProcedures.03');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', TheCall.eProcedures.ProcedureGroup[x]["eProcedures.03"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                };

                if (typeof TheCall.eProcedures.ProcedureGroup[x]["eProcedures.04"] != 'undefined') {
                    if (TheCall.eProcedures.ProcedureGroup[x]["eProcedures.04"].IsNull == false) {
                        XML.writeElementString("eProcedures.03", TheCall.eProcedures.ProcedureGroup[x]["eProcedures.03"].vSet[0]);
                    }
                };

                if (typeof TheCall.eProcedures.ProcedureGroup[x]["eProcedures.05"] != 'undefined') {
                    if (TheCall.eProcedures.ProcedureGroup[x]["eProcedures.05"].IsNull == false) {
                        XML.writeElementString("eProcedures.05", TheCall.eProcedures.ProcedureGroup[x]["eProcedures.05"].vSet[0]);
                    }
                    else {
                        if (typeof TheCall.eProcedures.ProcedureGroup[x]["eProcedures.05"].NV != 'undefined') {

                            XML.writeStartElement('eProcedures.05');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', TheCall.eProcedures.ProcedureGroup[x]["eProcedures.05"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof TheCall.eProcedures.ProcedureGroup[x]["eProcedures.06"] != 'undefined') {
                    if (TheCall.eProcedures.ProcedureGroup[x]["eProcedures.06"].IsNull == false) {
                        XML.writeElementString("eProcedures.06", TheCall.eProcedures.ProcedureGroup[x]["eProcedures.06"].vSet[0]);
                    }
                    else {
                        if (typeof TheCall.eProcedures.ProcedureGroup[x]["eProcedures.06"].NV != 'undefined') {

                            XML.writeStartElement('eProcedures.06');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', TheCall.eProcedures.ProcedureGroup[x]["eProcedures.06"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof TheCall.eProcedures.ProcedureGroup[x]["eProcedures.07"] != 'undefined') {
                    if (TheCall.eProcedures.ProcedureGroup[x]["eProcedures.07"].IsNull == false) {
                        XML.writeElementString("eProcedures.07", TheCall.eProcedures.ProcedureGroup[x]["eProcedures.07"].vSet[0]);
                    }
                    else {
                        if (typeof TheCall.eProcedures.ProcedureGroup[x]["eProcedures.07"].NV != 'undefined') {

                            XML.writeStartElement('eProcedures.07');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', TheCall.eProcedures.ProcedureGroup[x]["eProcedures.07"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof TheCall.eProcedures.ProcedureGroup[x]["eProcedures.08"] != 'undefined') {
                    if (TheCall.eProcedures.ProcedureGroup[x]["eProcedures.08"].IsNull == false) {
                        XML.writeElementString("eProcedures.08", TheCall.eProcedures.ProcedureGroup[x]["eProcedures.08"].vSet[0]);
                    }
                    else {
                        if (typeof TheCall.eProcedures.ProcedureGroup[x]["eProcedures.08"].NV != 'undefined') {

                            XML.writeStartElement('eProcedures.08');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', TheCall.eProcedures.ProcedureGroup[x]["eProcedures.08"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof TheCall.eProcedures.ProcedureGroup[x]["eProcedures.09"] != 'undefined') {
                    if (TheCall.eProcedures.ProcedureGroup[x]["eProcedures.09"].IsNull == false) {
                        XML.writeElementString("eProcedures.09", TheCall.eProcedures.ProcedureGroup[x]["eProcedures.09"].vSet[0]);
                    }
                    else {
                        if (typeof TheCall.eProcedures.ProcedureGroup[x]["eProcedures.09"].NV != 'undefined') {

                            XML.writeStartElement('eProcedures.09');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', TheCall.eProcedures.ProcedureGroup[x]["eProcedures.09"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof TheCall.eProcedures.ProcedureGroup[x]["eProcedures.10"] != 'undefined') {
                    if (TheCall.eProcedures.ProcedureGroup[x]["eProcedures.10"].IsNull == false) {
                        XML.writeElementString("eProcedures.10", TheCall.eProcedures.ProcedureGroup[x]["eProcedures.10"].vSet[0]);
                    }
                    else {
                        if (typeof TheCall.eProcedures.ProcedureGroup[x]["eProcedures.10"].NV != 'undefined') {

                            XML.writeStartElement('eProcedures.10');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', TheCall.eProcedures.ProcedureGroup[x]["eProcedures.10"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof TheCall.eProcedures.ProcedureGroup[x]["eProcedures.11"] != 'undefined') {
                    if (TheCall.eProcedures.ProcedureGroup[x]["eProcedures.11"].IsNull == false) {
                        XML.writeElementString("eProcedures.03", TheCall.eProcedures.ProcedureGroup[x]["eProcedures.03"].vSet[0]);
                    }
                };

                if (typeof TheCall.eProcedures.ProcedureGroup[x]["eProcedures.12"] != 'undefined') {
                    if (TheCall.eProcedures.ProcedureGroup[x]["eProcedures.12"].IsNull == false) {
                        XML.writeElementString("eProcedures.03", TheCall.eProcedures.ProcedureGroup[x]["eProcedures.03"].vSet[0]);
                    }
                };

                if (typeof TheCall.eProcedures.ProcedureGroup[x]["eProcedures.13"] != 'undefined') {
                    if (TheCall.eProcedures.ProcedureGroup[x]["eProcedures.13"].IsNull == false) {
                        XML.writeElementString("eProcedures.13", TheCall.eProcedures.ProcedureGroup[x]["eProcedures.13"].vSet[0]);
                    }
                    else {
                        if (typeof TheCall.eProcedures.ProcedureGroup[x]["eProcedures.13"].NV != 'undefined') {

                            XML.writeStartElement('eProcedures.13');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', TheCall.eProcedures.ProcedureGroup[x]["eProcedures.13"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };
                XML.writeEndElement();
                XML.writeEndElement();
            }
        }
    };
    //eMedications
    if (typeof TheCall.eMedications!= 'undefined') 
    {
        //   if (TheCall.eMedications["MedicationGroup"] != -1) 
        //   {
        XML.writeStartElement("eMedications");
        XML.writeStartElement("eMedications.MedicationGroup");

        for (var x = 0; x < TheCall.eMedications["MedicationGroup"].length; x++) {

            if (typeof TheCall.eMedications["MedicationGroup"][x]["eMedications.01"] != 'undefined') 
            {
                if (TheCall.eMedications["MedicationGroup"][x]["eMedications.01"].IsNull == false) {
                    XML.writeElementString("eMedications.01", TheCall.eMedications["MedicationGroup"][x]["eMedications.01"].vSet[0]);
                }
                else {
                    if (typeof TheCall.eMedications["MedicationGroup"][x]["eMedications.01"].NV != 'undefined') {

                        XML.writeStartElement('eMedications.01');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eMedications["MedicationGroup"][x]["eMedications.01"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eMedications["MedicationGroup"][x]["eMedications.02"] != 'undefined') 
            {
                if (TheCall.eMedications["MedicationGroup"][x]["eMedications.02"].IsNull == false) {
                    XML.writeElementString("eMedications.02", TheCall.eMedications["MedicationGroup"][x]["eMedications.02"].vSet[0]);
                }
                else {
                    if (typeof TheCall.eMedications["MedicationGroup"][x]["eMedications.02"].NV != 'undefined') {

                        XML.writeStartElement('eMedications.02');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eMedications["MedicationGroup"][x]["eMedications.02"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eMedications["MedicationGroup"][x]["eMedications.03"] != 'undefined') 
            {
                if (TheCall.eMedications["MedicationGroup"][x]["eMedications.03"].IsNull == false) {
                    XML.writeElementString("eMedications.03", TheCall.eMedications["MedicationGroup"][x]["eMedications.03"].vSet[0]);
                }
                else {
                    if (typeof TheCall.eMedications["MedicationGroup"][x]["eMedications.03"].NV != 'undefined') {

                        XML.writeStartElement('eMedications.03');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eMedications["MedicationGroup"][x]["eMedications.03"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };


            if (typeof TheCall.eMedications["MedicationGroup"][x]["eMedications.04"] != 'undefined') 
            {
                if (TheCall.eMedications["MedicationGroup"][x]["eMedications.04"].IsNull == false) {
                    XML.writeElementString("eMedications.04", TheCall.eMedications["MedicationGroup"][x]["eMedications.04"].vSet[0]);
                }
            };

            XML.writeElementString("eMedications.DosageGroup");

            if (typeof TheCall.eMedications["MedicationGroup"][x]["eMedications.05"] != 'undefined') 
            {
                if (TheCall.eMedications["MedicationGroup"][x]["eMedications.05"].IsNull == false) {
                    XML.writeElementString("eMedications.05", TheCall.eMedications["MedicationGroup"][x]["eMedications.05"].vSet[0]);
                }
                else {
                    if (typeof TheCall.eMedications["MedicationGroup"][x]["eMedications.05"].NV != 'undefined') {

                        XML.writeStartElement('eMedications.05');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eMedications["MedicationGroup"][x]["eMedications.05"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };


            if (typeof TheCall.eMedications["MedicationGroup"][x]["eMedications.06"] != 'undefined') 
            {
                if (TheCall.eMedications["MedicationGroup"][x]["eMedications.06"].IsNull == false) {
                    XML.writeElementString("eMedications.06", TheCall.eMedications["MedicationGroup"][x]["eMedications.06"].vSet[0]);
                }
                else {
                    if (typeof TheCall.eMedications["MedicationGroup"][x]["eMedications.06"].NV != 'undefined') {

                        XML.writeStartElement('eMedications.06');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eMedications["MedicationGroup"][x]["eMedications.06"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            XML.writeEndElement();

            if (typeof TheCall.eMedications["MedicationGroup"][x]["eMedications.07"] != 'undefined') 
            {
                if (TheCall.eMedications["MedicationGroup"][x]["eMedications.07"].IsNull == false) {
                    XML.writeElementString("eMedications.07", TheCall.eMedications["MedicationGroup"][x]["eMedications.07"].vSet[0]);
                }
                else {
                    if (typeof TheCall.eMedications["MedicationGroup"][x]["eMedications.07"].NV != 'undefined') {

                        XML.writeStartElement('eMedications.07');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eMedications["MedicationGroup"][x]["eMedications.07"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eMedications["MedicationGroup"][x]["eMedications.08"] != 'undefined') 
            {
                if (TheCall.eMedications["MedicationGroup"][x]["eMedications.08"].IsNull == false) {
                    XML.writeElementString("eMedications.08", TheCall.eMedications["MedicationGroup"][x]["eMedications.08"].vSet[0]);
                }
                else {
                    if (typeof TheCall.eMedications["MedicationGroup"][x]["eMedications.08"].NV != 'undefined') {

                        XML.writeStartElement('eMedications.08');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eMedications["MedicationGroup"][x]["eMedications.08"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };


            if (typeof TheCall.eMedications["MedicationGroup"][x]["eMedications.10"] != 'undefined') 
            {
                if (TheCall.eMedications["MedicationGroup"][x]["eMedications.10"].IsNull == false) {
                    XML.writeElementString("eMedications.10", TheCall.eMedications["MedicationGroup"][x]["eMedications.10"].vSet[0]);
                }
                else {
                    if (typeof TheCall.eMedications["MedicationGroup"][x]["eMedications.10"].NV != 'undefined') {

                        XML.writeStartElement('eMedications.10');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eMedications["MedicationGroup"][x]["eMedications.10"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eMedications["MedicationGroup"][x]["eMedications.11"] != 'undefined') 
            {
                if (TheCall.eMedications["MedicationGroup"][x]["eMedications.11"].IsNull == false) {
                    XML.writeElementString("eMedications.11", TheCall.eMedications["MedicationGroup"][x]["eMedications.11"].vSet[0]);
                }
            };

            if (typeof TheCall.eMedications["MedicationGroup"][x]["eMedications.12"] != 'undefined') 
            {
                if (TheCall.eMedications["MedicationGroup"][x]["eMedications.12"].IsNull == false) {
                    XML.writeElementString("eMedications.12", TheCall.eMedications["MedicationGroup"][x]["eMedications.12"].vSet[0]);
                }
            };
            XML.writeEndElement();
            XML.writeEndElement();
        }
        //   }
    };
    //eProtocols
    if (typeof TheCall.eProtocols != 'undefined') {
        if (TheCall.eProtocols["ProtocolGroup"] != -1) {

            for (var x = 0; x < TheCall.eProtocols["ProtocolGroup"].length; x++) {

                XML.writeStartElement("eProtocols");
                XML.writeStartElement("eProtocols.ProtocolGroup");


                if (typeof TheCall.eProtocols["ProtocolGroup"][x]["eProtocols.01"] != 'undefined') {
                    if (TheCall.eProtocols["ProtocolGroup"][x]["eProtocols.01"].IsNull == false) {
                        XML.writeElementString("eProtocols.01", TheCall.eProtocols["ProtocolGroup"][x]["eProtocols.01"].vSet[0]);
                    }
                    else {
                        if (typeof TheCall.eProtocols["ProtocolGroup"][x]["eProtocols.01"].NV != 'undefined') {

                            XML.writeStartElement('eProtocols.01');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', TheCall.eProtocols["ProtocolGroup"][x]["eProtocols.01"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof TheCall.eProtocols["ProtocolGroup"][x]["eProtocols.02"] != 'undefined') {
                    if (TheCall.eProtocols["ProtocolGroup"][x]["eProtocols.02"].IsNull == false) {
                        XML.writeElementString("eProtocols.02", TheCall.eProtocols["ProtocolGroup"][x]["eProtocols.02"].vSet[0]);
                    }
                    else {
                        if (typeof TheCall.eProtocols["ProtocolGroup"][x]["eProtocols.02"].NV != 'undefined') {

                            XML.writeStartElement('eProtocols.02');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', TheCall.eProtocols["ProtocolGroup"][x]["eProtocols.02"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };
                XML.writeEndElement();
                XML.writeEndElement();
            }
        }
    };

    //eVitals
    if (typeof TheCall.eVitals != 'undefined') {
        //        if (TheCall.eVitals["VitalGroup"] != -1) {

        for (var x = 0; x < TheCall.eVitals["VitalGroup"].length; x++) {

            XML.writeStartElement("eVitals");
            XML.writeStartElement("eVitals.VitalGroup");


            if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.01"] != 'undefined') {
                if (TheCall.eVitals["VitalGroup"][x]["eVitals.01"].IsNull == false) {
                    XML.writeElementString("eProtocols.01", TheCall.eVitals["VitalGroup"][x]["eVitals.01"].vSet[0]);
                }
                else {
                    if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.01"].NV != 'undefined') {

                        XML.writeStartElement('eVitals.01');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.01"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.02"] != 'undefined') {
                if (TheCall.eVitals["VitalGroup"][x]["eVitals.02"].IsNull == false) {
                    XML.writeElementString("eVitals.02", TheCall.eVitals["VitalGroup"][x]["eVitals.02"].vSet[0]);
                }
                else {
                    if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.02"].NV != 'undefined') {

                        XML.writeStartElement('eVitals.02');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.02"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            XML.writeStartElement("eVitals.CardiacRhythmGroup");

            if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.03"] != 'undefined') {
                if (TheCall.eVitals["VitalGroup"][x]["eVitals.03"].IsNull == false) {
                    XML.writeElementString("eVitals.03", TheCall.eVitals["VitalGroup"][x]["eVitals.03"].vSet[0]);
                }
                else {
                    if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.03"].PN != 'undefined') {

                        XML.writeStartElement('eVitals.03');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.03"].vSet[0]);
                        XML.writeEndElement();
                    }
                    else if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.03"].NV != 'undefined') {

                        XML.writeStartElement('eVitals.03');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.03"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.04"] != 'undefined') {
                if (TheCall.eVitals["VitalGroup"][x]["eVitals.04"].IsNull == false) {
                    XML.writeElementString("eVitals.04", TheCall.eVitals["VitalGroup"][x]["eVitals.04"].vSet[0]);
                }
                else {
                    if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.04"].NV != 'undefined') {

                        XML.writeStartElement('eVitals.04');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.04"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };
            if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.05"] != 'undefined') {
                if (TheCall.eVitals["VitalGroup"][x]["eVitals.05"].IsNull == false) {
                    XML.writeElementString("eVitals.05", TheCall.eVitals["VitalGroup"][x]["eVitals.05"].vSet[0]);
                }
                else {
                    if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.05"].NV != 'undefined') {

                        XML.writeStartElement('eVitals.05');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.05"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };
            XML.writeEndElement();
            XML.writeStartElement("eVitals.BloodPressureGroup");
            if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.06"] != 'undefined') {
                if (TheCall.eVitals["VitalGroup"][x]["eVitals.06"].IsNull == false) {
                    XML.writeElementString("eVitals.06", TheCall.eVitals["VitalGroup"][x]["eVitals.06"].vSet[0]);
                }
                else {
                    if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.06"].PN != 'undefined') {

                        XML.writeStartElement('eVitals.06');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.06"].vSet[0]);
                        XML.writeEndElement();
                    }
                    else if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.06"].NV != 'undefined') {

                        XML.writeStartElement('eVitals.06');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.06"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };
                
            if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.07"] != 'undefined') {
                if (TheCall.eVitals["VitalGroup"][x]["eVitals.07"].IsNull == false) {
                    XML.writeElementString("eVitals.07", TheCall.eVitals["VitalGroup"][x]["eVitals.07"].vSet[0]);
                }
                else {
                    if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.07"].PN != 'undefined') {

                        XML.writeStartElement('eVitals.07');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.07"].vSet[0]);
                        XML.writeEndElement();
                    }
                    else if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.07"].NV != 'undefined') {

                        XML.writeStartElement('eVitals.07');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.07"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.08"] != 'undefined') {
                if (TheCall.eVitals["VitalGroup"][x]["eVitals.08"].IsNull == false) {
                    XML.writeElementString("eVitals.08", TheCall.eVitals["VitalGroup"][x]["eVitals.08"].vSet[0]);
                }
                else {
                    if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.08"].NV != 'undefined') {

                        XML.writeStartElement('eVitals.08');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.08"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.09"] != 'undefined') {
                if (TheCall.eVitals["VitalGroup"][x]["eVitals.09"].IsNull == false) {
                    XML.writeElementString("eVitals.09", TheCall.eVitals["VitalGroup"][x]["eVitals.09"].vSet[0]);
                }
            };
            XML.writeEndElement();
            XML.writeStartElement("eVitals.HeartRateGroup");
            if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.10"] != 'undefined') {
                if (TheCall.eVitals["VitalGroup"][x]["eVitals.10"].IsNull == false) {
                    XML.writeElementString("eVitals.10", TheCall.eVitals["VitalGroup"][x]["eVitals.10"].vSet[0]);
                }
                else {
                    if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.10"].PN != 'undefined') {

                        XML.writeStartElement('eVitals.10');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.10"].vSet[0]);
                        XML.writeEndElement();
                    }
                    else if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.10"].NV != 'undefined') {

                        XML.writeStartElement('eVitals.10');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.10"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.11"] != 'undefined') {
                if (TheCall.eVitals["VitalGroup"][x]["eVitals.11"].IsNull == false) {
                    XML.writeElementString("eVitals.11", TheCall.eVitals["VitalGroup"][x]["eVitals.11"].vSet[0]);
                }
            };

            XML.writeEndElement();

            if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.12"] != 'undefined') {
                if (TheCall.eVitals["VitalGroup"][x]["eVitals.12"].IsNull == false) {
                    XML.writeElementString("eVitals.12", TheCall.eVitals["VitalGroup"][x]["eVitals.12"].vSet[0]);
                }
                else {
                    if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.12"].PN != 'undefined') {

                        XML.writeStartElement('eVitals.12');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.12"].vSet[0]);
                        XML.writeEndElement();
                    }
                    else if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.12"].NV != 'undefined') {

                        XML.writeStartElement('eVitals.12');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.12"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.13"] != 'undefined') {
                if (TheCall.eVitals["VitalGroup"][x]["eVitals.13"].IsNull == false) {
                    XML.writeElementString("eVitals.13", TheCall.eVitals["VitalGroup"][x]["eVitals.13"].vSet[0]);
                }
            };

            if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.14"] != 'undefined') {
                if (TheCall.eVitals["VitalGroup"][x]["eVitals.14"].IsNull == false) {
                    XML.writeElementString("eVitals.14", TheCall.eVitals["VitalGroup"][x]["eVitals.14"].vSet[0]);
                }
                else {
                    if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.14"].PN != 'undefined') {

                        XML.writeStartElement('eVitals.14');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.14"].vSet[0]);
                        XML.writeEndElement();
                    }
                    else if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.14"].NV != 'undefined') {

                        XML.writeStartElement('eVitals.14');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.14"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.15"] != 'undefined') {
                if (TheCall.eVitals["VitalGroup"][x]["eVitals.15"].IsNull == false) {
                    XML.writeElementString("eVitals.15", TheCall.eVitals["VitalGroup"][x]["eVitals.15"].vSet[0]);
                }
            };

            if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.16"] != 'undefined') {
                if (TheCall.eVitals["VitalGroup"][x]["eVitals.16"].IsNull == false) {
                    XML.writeElementString("eVitals.16", TheCall.eVitals["VitalGroup"][x]["eVitals.16"].vSet[0]);
                }
                else {
                    if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.16"].PN != 'undefined') {

                        XML.writeStartElement('eVitals.16');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.16"].vSet[0]);
                        XML.writeEndElement();
                    }
                    else if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.16"].NV != 'undefined') {

                        XML.writeStartElement('eVitals.16');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.16"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.17"] != 'undefined') {
                if (TheCall.eVitals["VitalGroup"][x]["eVitals.17"].IsNull == false) {
                    XML.writeElementString("eVitals.17", TheCall.eVitals["VitalGroup"][x]["eVitals.17"].vSet[0]);
                }
                else {
                    if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.17"].PN != 'undefined') {

                        XML.writeStartElement('eVitals.17');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.17"].vSet[0]);
                        XML.writeEndElement();
                    }
                    else if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.17"].NV != 'undefined') {

                        XML.writeStartElement('eVitals.17');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.17"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.18"] != 'undefined') {
                if (TheCall.eVitals["VitalGroup"][x]["eVitals.18"].IsNull == false) {
                    XML.writeElementString("eVitals.18", TheCall.eVitals["VitalGroup"][x]["eVitals.18"].vSet[0]);
                }
                else {
                    if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.18"].PN != 'undefined') {

                        XML.writeStartElement('eVitals.18');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.18"].vSet[0]);
                        XML.writeEndElement();
                    }
                    else if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.18"].NV != 'undefined') {

                        XML.writeStartElement('eVitals.18');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.18"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            XML.writeStartElement("eVitals.GlascowScoreGroup");
            if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.19"] != 'undefined') {
                if (TheCall.eVitals["VitalGroup"][x]["eVitals.19"].IsNull == false) {
                    XML.writeElementString("eVitals.19", TheCall.eVitals["VitalGroup"][x]["eVitals.19"].vSet[0]);
                }
                else {
                    if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.19"].PN != 'undefined') {

                        XML.writeStartElement('eVitals.19');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.19"].vSet[0]);
                        XML.writeEndElement();
                    }
                    else if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.19"].NV != 'undefined') {

                        XML.writeStartElement('eVitals.19');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.19"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.20"] != 'undefined') {
                if (TheCall.eVitals["VitalGroup"][x]["eVitals.20"].IsNull == false) {
                    XML.writeElementString("eVitals.20", TheCall.eVitals["VitalGroup"][x]["eVitals.20"].vSet[0]);
                }
                else {
                    if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.20"].PN != 'undefined') {

                        XML.writeStartElement('eVitals.20');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.20"].vSet[0]);
                        XML.writeEndElement();
                    }
                    else if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.20"].NV != 'undefined') {

                        XML.writeStartElement('eVitals.20');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.20"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.21"] != 'undefined') {
                if (TheCall.eVitals["VitalGroup"][x]["eVitals.21"].IsNull == false) {
                    XML.writeElementString("eVitals.21", TheCall.eVitals["VitalGroup"][x]["eVitals.21"].vSet[0]);
                }
                else {
                    if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.21"].PN != 'undefined') {

                        XML.writeStartElement('eVitals.21');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.21"].vSet[0]);
                        XML.writeEndElement();
                    }
                    else if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.21"].NV != 'undefined') {

                        XML.writeStartElement('eVitals.21');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.21"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.21"] != 'undefined') {
                if (TheCall.eVitals["VitalGroup"][x]["eVitals.22"].IsNull == false) {
                    XML.writeElementString("eVitals.22", TheCall.eVitals["VitalGroup"][x]["eVitals.22"].vSet[0]);
                }
                else {
                    if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.22"].PN != 'undefined') {

                        XML.writeStartElement('eVitals.22');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.22"].vSet[0]);
                        XML.writeEndElement();
                    }
                    else if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.22"].NV != 'undefined') {

                        XML.writeStartElement('eVitals.22');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.22"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.23"] != 'undefined') {
                if (TheCall.eVitals["VitalGroup"][x]["eVitals.23"].IsNull == false) {
                    XML.writeElementString("eVitals.23", TheCall.eVitals["VitalGroup"][x]["eVitals.23"].vSet[0]);
                }
                else {
                    if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.23"].PN != 'undefined') {

                        XML.writeStartElement('eVitals.23');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.23"].vSet[0]);
                        XML.writeEndElement();
                    }
                    else if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.23"].NV != 'undefined') {

                        XML.writeStartElement('eVitals.23');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.23"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };
            XML.writeEndElement()
            XML.writeStartElement("eVitals.TemperatureGroup");
            if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.24"] != 'undefined') {
                if (TheCall.eVitals["VitalGroup"][x]["eVitals.24"].IsNull == false) {
                    XML.writeElementString("eVitals.24", TheCall.eVitals["VitalGroup"][x]["eVitals.24"].vSet[0]);
                }
                else {
                    if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.24"].PN != 'undefined') {

                        XML.writeStartElement('eVitals.24');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.24"].vSet[0]);
                        XML.writeEndElement();
                    }
                    else if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.24"].NV != 'undefined') {

                        XML.writeStartElement('eVitals.24');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.24"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.25"] != 'undefined') {
                if (TheCall.eVitals["VitalGroup"][x]["eVitals.25"].IsNull == false) {
                    XML.writeElementString("eVitals.25", TheCall.eVitals["VitalGroup"][x]["eVitals.25"].vSet[0]);
                }
            };
            XML.writeEndElement();

            if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.26"] != 'undefined')
            {
                if (TheCall.eVitals["VitalGroup"][x]["eVitals.26"].IsNull == false)
                {
                    XML.writeElementString("eVitals.26", TheCall.eVitals["VitalGroup"][x]["eVitals.26"].vSet[0]);
                }
                else
                {
                    if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.26"].NV != 'undefined')
                    {

                        XML.writeStartElement('eVitals.26');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.26"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };
            XML.writeStartElement("eVitals.PainScaleGroup");
            if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.27"] != 'undefined') 
            {
                if (TheCall.eVitals["VitalGroup"][x]["eVitals.27"].IsNull == false) {
                    XML.writeElementString("eVitals.27", TheCall.eVitals["VitalGroup"][x]["eVitals.27"].vSet[0]);
                }
                else {
                    if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.27"].PN != 'undefined') {

                        XML.writeStartElement('eVitals.27');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.27"].vSet[0]);
                        XML.writeEndElement();
                    }
                    else if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.27"].NV != 'undefined') {

                        XML.writeStartElement('eVitals.27');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.27"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.28"] != 'undefined') {
                if (TheCall.eVitals["VitalGroup"][x]["eVitals.28"].IsNull == false) {
                    XML.writeElementString("eVitals.28", TheCall.eVitals["VitalGroup"][x]["eVitals.28"].vSet[0]);
                }
                else {
                    if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.28"].NV != 'undefined') {

                        XML.writeStartElement('eVitals.28');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.28"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };
            XML.writeEndElement();

            XML.writeStartElement("eVitals.StrokeScaleGroup");
        
            if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.29"] != 'undefined') 
            {
                if (TheCall.eVitals["VitalGroup"][x]["eVitals.29"].IsNull == false) {
                    XML.writeElementString("eVitals.29", TheCall.eVitals["VitalGroup"][x]["eVitals.29"].vSet[0]);
                }
                else {
                    if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.29"].PN != 'undefined') {

                        XML.writeStartElement('eVitals.29');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.29"].vSet[0]);
                        XML.writeEndElement();
                    }
                    else if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.29"].NV != 'undefined') {

                        XML.writeStartElement('eVitals.29');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.29"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };
 
            if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.30"] != 'undefined') 
            {
                if (TheCall.eVitals["VitalGroup"][x]["eVitals.30"].IsNull == false)
                {
                    XML.writeElementString("eVitals.30", TheCall.eVitals["VitalGroup"][x]["eVitals.30"].vSet[0]);
                }
                else
                {
                    if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.30"].NV != 'undefined')
                    {

                        XML.writeStartElement('eVitals.30');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.30"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            XML.writeEndElement();

            if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.31"] != 'undefined') {
                if (TheCall.eVitals["VitalGroup"][x]["eVitals.31"].IsNull == false)
                {
                    XML.writeElementString("eVitals.31", TheCall.eVitals["VitalGroup"][x]["eVitals.31"].vSet[0]);
                }
                else
                {
                    if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.31"].NV != 'undefined')
                    {

                        XML.writeStartElement('eVitals.31');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.31"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        

            if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.32"] != 'undefined') 
            {
                if (TheCall.eVitals["VitalGroup"][x]["eVitals.32"].IsNull == false)
                {
                    XML.writeElementString("eVitals.32", TheCall.eVitals["VitalGroup"][x]["eVitals.32"].vSet[0]);
                }
                else
                {
                    if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.32"].PN != 'undefined')
                    {

                        XML.writeStartElement('eVitals.32');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.32"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };

            if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.33"] != 'undefined') 
            {
                if (TheCall.eVitals["VitalGroup"][x]["eVitals.33"].IsNull == false)
                {
                    XML.writeElementString("eVitals.33", TheCall.eVitals["VitalGroup"][x]["eVitals.33"].vSet[0]);
                }
                else
                {
                    if (typeof TheCall.eVitals["VitalGroup"][x]["eVitals.33"].PN != 'undefined')
                    {

                        XML.writeStartElement('eVitals.33');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eVitals["VitalGroup"][x]["eVitals.33"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };
            XML.writeEndElement();
            XML.writeEndElement();
        };
    };


    XML.writeEndElement();
    //XML.writeAttributeString('timeStamp', Data);
    var XMLDoc = XML.flush()
    console.log(XMLDoc)
    return XML;

};
