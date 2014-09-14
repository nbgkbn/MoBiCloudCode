var setV3XML = function (TheCall) {
    console.log(TheCall)
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

        if (TheCall.eRecord["eRecord.01"].IsNull == false) {
            XML.writeElementString("eRecord.01", TheCall.eRecord["eRecord.01"].vSet[0]);
        };
        XML.writeStartElement("eRecord.SoftwareApplicationGroup");
        if (TheCall.eRecord["eRecord.02"].IsNull == false) {
            XML.writeElementString("eRecord.02", TheCall.eRecord["eRecord.02"].vSet[0]);
        };
        if (TheCall.eRecord["eRecord.03"].IsNull == false) {
            XML.writeElementString("eRecord.03", TheCall.eRecord["eRecord.03"].vSet[0]);
        };
        if (TheCall.eRecord["eRecord.04"].IsNull == false) {
            XML.writeElementString("eRecord.04", TheCall.eRecord["eRecord.04"].vSet[0]);
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
                    if (typeof TheCall.eDisposition.HospitalTeamActivationGroup[i]["eDisposition.24"] != 'undefined') {
                        if (TheCall.eDisposition.HospitalTeamActivationGroup[i]["eDisposition.24"].IsNull == false) {

                            XML.writeElementString("eDisposition.23", TheCall.eDisposition.HospitalTeamActivationGroup[i]["eDisposition.24"].vSet[0]);
                        }

                        else {
                            if (TheCall.eDisposition["eDisposition.24"].NV == true) {
                                XML.writeStartElement('eDisposition.24');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', TheCall.eDisposition.HospitalTeamActivationGroup[i]["eDisposition.24"].vSet[0]);
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
            //    console.log(TheCall.eResponse["eResponse.07"].IsNull)
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


        if (typeof TheCall.eResponse["eResponse.24"] != 'undefined') {
            if (TheCall.eResponse["eResponse.24"].IsNull == false) {
                for (var d = 0; d < TheCall.eResponse["eResponse.24"].vSet.length; d++) {
                    XML.writeElementString("eResponse.24", TheCall.eResponse["eResponse.24"].vSet[d]);
                }

            }

            else {
                if (TheCall.eResponse["eResponse.24"].NV == true) {
                    XML.writeStartElement('eResponse.24');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eResponse["eResponse.24"].vSet[0]);
                    XML.writeEndElement();
                }
            };
            XML.writeEndElement();
        }
    };
    //Patient       
    if (typeof TheCall.ePatient != 'undefined') {
        TheCall.eSituation["PatientComplaintGroup"].length
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
            else {
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

        if (typeof TheCall.ePatient["ePatient.14"] != 'undefined') {
            if (TheCall.ePatient["ePatient.14"].IsNull == false) {
                XML.writeElementString("ePatient.14", TheCall.ePatient["ePatient.14"].vSet[0]);
            }
            else {
                if (TheCall.ePatient["ePatient.14"].NV == true) {
                }
                XML.writeStartElement('ePatient.14');
                XML.writeAttributeString('xsi:nil', 'true');
                XML.writeAttributeString('NV', TheCall.ePatient["ePatient.14"].vSet[0]);
                XML.writeEndElement();
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
    if (typeof TheCall.eHistory != 'undefined') {
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


        if (TheCall.eHistory["eHistory.05"] != 'undefined') {
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


        if (TheCall.eHistory["eHistory.16"] != 'undefined') {
            if (TheCall.eHistory["eHistory.16"].IsNull == false) {
                XML.writeElementString("eHistory.16", TheCall.eHistory["eHistory.16"].vSet[0]);
            }
        };

        if (typeof TheCall.eHistory["eHistory.17"] != 'undefined') {
            if (TheCall.eHistory["eHistory.17"].IsNull == false) {
                XML.writeElementString("eHistory.17", TheCall.eHistory["eHistory.17"].vSet[0]);
            }
            else {
                if (TheCall.eHistory["eHistory.17"].NV == true) {

                    XML.writeStartElement('eHistory.17');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('NV', TheCall.eHistory["eHistory.17"].vSet[0]);
                    XML.writeEndElement();
                }
                else if (TheCall.eHistory["eHistory.17"].PN == true) {
                    XML.writeStartElement('eHistory.17');
                    XML.writeAttributeString('xsi:nil', 'true');
                    XML.writeAttributeString('PN', TheCall.eHistory["eHistory.17"].vSet[0]);
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

        XML.writeStartElement("ePayment.ClosestRelativeGroup")
        if (typeof TheCall.ePayment["ePayment.23"] != 'undefined') {
            if (TheCall.ePayment["ePayment.23"].IsNull == false) {
                XML.writeElementString("ePayment.23", TheCall.ePayment["ePayment.23"].vSet[0]);
            }
        };

        if (typeof TheCall.ePayment["ePayment.24"] != 'undefined') {
            if (TheCall.ePayment["ePayment.24"].IsNull == false) {
                XML.writeElementString("ePayment.24", TheCall.ePayment["ePayment.24"].vSet[0]);
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
                        console.log(TheCall.ePayment["SupplyItemGroup"][d])
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
    };
    ////////////////////////////////eScene
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
    console.log(TheCall.eAirway)
    if (typeof TheCall.eAirway != 'undefined') {
        if (typeof TheCall.eAirway.AirwayGroup != 'undefined') {


            XML.writeStartElement("eAirway.AirwayGroup")


            if (typeof TheCall.eAirway.AirwayGroup["eAirway.01"] != 'undefined') {
                if (TheCall.eAirway.AirwayGroup["eAirway.01"].IsNull == false) {
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
            console.log(TheCall.eAirway.ConfirmationGroup)
            if (typeof TheCall.eAirway.ConfirmationGroup != 'undefined') {
                for (var d = 0; d < TheCall.eAirway.AirwayGroup["ConfirmationGroup"].length ; d++) {
                    XML.writeStartElement("eAirway.ConfirmationGroup");

                    if (typeof TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.02"] != 'undefined')
                    {
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

                    console.log(TheCall.eAirway.AirwayGroup.ConfirmationGroup[d])
                    if (typeof TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.04"] != 'undefined')
                    {
                        if (TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.04"].IsNull == false) 
                        {
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

                    console.log(TheCall.eAirway.AirwayGroup.ConfirmationGroup[d]["eAirway.06"])
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
                }
            }
        }
    };

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
        console.log(TheCall.eArrest["eArrest.02"])
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
        console.log(TheCall.eArrest["eArrest.13"].IsNull)
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
    XML.writeEndElement();
    XML.writeEndElement();
    XML.writeEndElement();
    XML.writeEndElement();
    XML.writeEndElement();
    //XML.writeAttributeString('timeStamp', Data);
    var XMLDoc = XML.flush()
    console.log(XMLDoc)
    return XML;


};
