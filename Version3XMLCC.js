var Utils = require('cloud/Utilities.js');
var jsXML = require('cloud/JSXMLWriter.js');
exports.setV3XML = function (TheCall) {
    //   if (TheCall.CanWriteXML == false) 
    //   {
    //       return null;
    //   };


    var XML = new jsXML.XMLWriter('UTF-8', '1.0');
    //var XML = new XMLWriter('UTF-8', '1.0');


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
                XML.writeElementString("eRecord.01", escapeXml(obj["eRecord.01"].vSet[0]));
            }
        };

        XML.writeStartElement("eRecord.SoftwareApplicationGroup");

        if (typeof obj["eRecord.02"] != 'undefined') {
            if (obj["eRecord.02"].IsNull == false) {
                XML.writeElementString("eRecord.02", escapeXml(obj["eRecord.02"].vSet[0]));
            }
        };
        if (typeof obj["eRecord.03"] != 'undefined') {
            if (obj["eRecord.03"].IsNull == false) {
                XML.writeElementString("eRecord.03", escapeXml(obj["eRecord.03"].vSet[0]));
            }
        };
        if (typeof obj["eRecord.04"] != 'undefined') {
            if (obj["eRecord.04"].IsNull == false) {
                XML.writeElementString("eRecord.04", escapeXml(obj["eRecord.04"].vSet[0]));
            }
        };
        XML.writeEndElement("eRecord.SoftwareApplicationGroup");
        XML.writeEndElement("eRecord");
    };
    if (typeof TheCall.eDispatch != 'undefined') {
        XML.writeStartElement("eDispatch");
        var obj = {};
        var obj = TheCall.eDispatch;
        if (typeof obj["eDispatch.01"] != 'undefined') {
            if (obj["eDispatch.01"].IsNull == false) {
                XML.writeElementString("eDispatch.01", escapeXml(obj["eDispatch.01"].vSet[0]));

            }
        };

        if (typeof obj["eDispatch.02"] != 'undefined') {
            if (obj["eDispatch.02"].IsNull == false) {
                XML.writeElementString("eDispatch.02", obj["eDispatch.02"].vSet[0]);
            }
            else {
                if (typeof obj["eDispatch.02"].NV != 'undefined') {
                    if (obj["eDispatch.02"].NV == true) {
                        XML.writeStartElement('eDispatch.02');
                        XML.writeAttributeString("NV", obj["eDispatch.02"].vSet[0]);
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eDispatch.03"] != 'undefined') {
            if (obj["eDispatch.03"].IsNull == false) {
                XML.writeElementString("eDispatch.03", escapeXml(obj["eDispatch.03"].vSet[0]));
            }
        };

        if (typeof obj["eDispatch.04"] != 'undefined') {
            if (obj["eDispatch.04"].IsNull == false) {
                XML.writeElementString("eDispatch.04", escapeXml(obj["eDispatch.04"].vSet[0]));
            }
        };

        if (typeof obj["eDispatch.05"] != 'undefined') {
            if (obj["eDispatch.05"].IsNull == false) {
                XML.writeElementString("eDispatch.05", obj["eDispatch.05"].vSet[0]);
            }
        };

        XML.writeEndElement("eDispatch");
    };

    if (typeof TheCall.eDisposition != 'undefined') {
        var obj = {};
        var obj = TheCall.eDisposition;
        XML.writeStartElement("eDisposition");
        if (typeof obj["DestinationGroup"] != 'undefined') {
            var objD = obj["DestinationGroup"];
            XML.writeStartElement("eDisposition.DestinationGroup");

            if (typeof objD["eDisposition.01"] != 'undefined') {
                if (["eDisposition.01"].IsNull == false) {
                    XML.writeElementString("eDisposition.01", escapeXml(objD["eDisposition.01"].vSet[0]));
                }

                else {
                    if (typeof objD["eDisposition.01"].NV != 'undefined') {
                        if (objD["eDisposition.01"].NV == true) {
                            XML.writeStartElement('eDisposition.01');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeString(objD["eDisposition.01"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                }
            };

            if (typeof ["eDisposition.02"] != 'undefined') {
                if (objD["eDisposition.02"].IsNull == false) {

                    XML.writeElementString("eDisposition.02", objD["eDisposition.02"].vSet[0]);
                }

                else {
                    if (typeof objD["eDisposition.02"].NV != 'undefined') {
                        if (objD["eDisposition.02"].NV == true) {
                            XML.writeStartElement('eDisposition.02');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeString(objD["eDisposition.02"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                }
            };

            if (typeof objD["eDisposition.03"] != 'undefined') {
                if (objD["eDisposition.03"].IsNull == false) {

                    XML.writeElementString("eDisposition.03", escapeXml(objD["eDisposition.03"].vSet[0]));
                }

                else {
                    if (typeof objD["eDisposition.03"].NV != 'undefined') {
                        if (objD["eDisposition.03"].NV == true) {
                            XML.writeStartElement('eDisposition.03');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeString(objD["eDisposition.03"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                }
            };

            if (typeof objD["eDisposition.04"] != 'undefined') {
                if (objD["eDisposition.04"].IsNull == false) {
                    XML.writeElementString("eDisposition.04", objD["eDisposition.04"].vSet[0]);
                }
            };

            if (typeof objD["eDisposition.05"] != 'undefined') {
                if (objD["eDisposition.05"].IsNull == false) {
                    XML.writeElementString("eDisposition.05", objD["eDisposition.05"].vSet[0]);
                }

                else {
                    if (typeof objD["eDisposition.05"].NV != 'undefined') {
                        if (typeof objD["eDisposition.05"].NV != 'undefined') {
                            if (objD["eDisposition.05"].NV == true) {
                                XML.writeStartElement('eDisposition.05');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeString(objD["eDisposition.05"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                }
            };

            if (typeof objD["eDisposition.06"] != 'undefined') {
                if (objD["eDisposition.06"].IsNull == false) {

                    XML.writeElementString("eDisposition.06", objD["eDisposition.06"].vSet[0]);
                }

                else {
                    if (typeof objD["eDisposition.06"].NV != 'undefined') {
                        if (objD["eDisposition.06"].NV == true) {
                            XML.writeStartElement('eDisposition.06');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeString(objD["eDisposition.06"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                }
            };

            if (typeof objD["eDisposition.07"] != 'undefined') {
                if (objD["eDisposition.07"].IsNull == false) {

                    XML.writeElementString("eDisposition.07", objD["eDisposition.07"].vSet[0]);
                }

                else {
                    if (typeof objD["eDisposition.07"].NV != 'undefined') {
                        if (objD["eDisposition.07"].NV == true) {
                            XML.writeStartElement('eDisposition.07');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeString(objD["eDisposition.07"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                }
            };

            if (typeof objD["eDisposition.08"] != 'undefined') {
                if (objD["eDisposition.08"].IsNull == false) {
                    XML.writeElementString("eDisposition.08", objD["eDisposition.08"].vSet[0]);
                }
            };

            if (typeof objD["eDisposition.09"] != 'undefined') {
                if (objD["eDisposition.09"].IsNull == false) {
                    XML.writeElementString("eDisposition.09", objD["eDisposition.09"].vSet[0]);
                }
            };

            if (typeof objD["eDisposition.10"] != 'undefined') {
                if (objD["eDisposition.10"].IsNull == false) {
                    XML.writeElementString("eDisposition.10", objD["eDisposition.10"].vSet[0]);
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
                if (typeof obj["eDisposition.11"].NV != 'undefined') {
                    if (obj["eDisposition.11"].NV == true) {
                        XML.writeStartElement('eDisposition.11');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeString(obj["eDisposition.11"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eDisposition.12"] != 'undefined') {
            if (obj["eDisposition.12"].IsNull == false) {
                XML.writeElementString("eDisposition.12", obj["eDisposition.12"].vSet[0]);
            }
            else {
                if (typeof objD["eDisposition.12"].NV != 'undefined') {
                    if (obj["eDisposition.12"].NV == true) {
                        XML.writeStartElement('eDisposition.12');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeString(obj["eDisposition.12"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eDisposition.13"] != 'undefined') {
            if (obj["eDisposition.13"].IsNull == false) {
                for (var d = 0; d < obj["eDisposition.13"].vSet.length; d++) {
                    XML.writeElementString("eDisposition.13", obj["eDisposition.13"].vSet[d]);
                }
            }
        };

        if (typeof obj["eDisposition.14"] != 'undefined') {
            if (obj["eDisposition.14"].IsNull == false) {
                for (var d = 0; d < obj["eDisposition.14"].vSet.length; d++) {
                    XML.writeElementString("eDisposition.14", obj["eDisposition.14"].vSet[d]);
                }
            }
        };

        if (typeof obj["eDisposition.15"] != 'undefined') {
            if (obj["eDisposition.15"].IsNull == false) {
                XML.writeElementString("eDisposition.15", obj["eDisposition.15"].vSet[0]);
            }
        };

        if (typeof obj["eDisposition.16"] != 'undefined') {
            XML.writeElementString("eDisposition.16", obj["eDisposition.16"].vSet[0]);
            if (obj["eDisposition.16"].IsNull == false) {
                XML.writeElementString("eDisposition.16", obj["eDisposition.16"].vSet[0]);
            }
            else {
                if (typeof obj["eDisposition.16"].NV != 'undefined') {
                    if (obj["eDisposition.16"].NV == true) {
                        XML.writeStartElement('eDisposition.16');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeString(obj["eDisposition.16"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };
        if (typeof obj["eDisposition.17"] != 'undefined') {
            if (obj["eDisposition.17"].IsNull == false) {
                XML.writeElementString("eDisposition.17", obj["eDisposition.17"].vSet[0]);
            }
            else {
                if (typeof obj["eDisposition.17"].NV != 'undefined') {
                    if (obj["eDisposition.17"].NV == true) {
                        XML.writeStartElement('eDisposition.17');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeString(obj["eDisposition.17"].vSet[0]);
                        XML.writeEndElement();
                    }
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
                if (typeof obj["eDisposition.18"].NV != 'undefined') {
                    if (obj["eDisposition.18"].NV == true) {
                        XML.writeStartElement('eDisposition.18');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeString(obj["eDisposition.18"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eDisposition.19"] != 'undefined') {
            if (obj["eDisposition.19"].IsNull == false) {
                XML.writeElementString("eDisposition.19", obj["eDisposition.19"].vSet[0]);
            }
            else {
                if (typeof obj["eDisposition.19"].NV != 'undefined') {
                    if (obj["eDisposition.19"].NV == true) {
                        XML.writeStartElement('eDisposition.19');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeString(obj["eDisposition.19"].vSet[0]);
                        XML.writeEndElement();
                    }
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
                if (typeof obj["eDisposition.20"].NV != 'undefined') {
                    if (obj["eDisposition.20"].NV == true) {
                        XML.writeStartElement('eDisposition.20');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeString(obj["eDisposition.20"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eDisposition.21"] != 'undefined') {
            if (obj["eDisposition.21"].IsNull == false) {
                XML.writeElementString("eDisposition.21", obj["eDisposition.21"].vSet[0]);
            }
            else {
                if (typeof obj["eDisposition.21"].NV != 'undefined') {
                    if (obj["eDisposition.21"].NV == true) {
                        XML.writeStartElement('eDisposition.21');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeString(obj["eDisposition.21"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };
        if (typeof obj["eDisposition.22"] != 'undefined') {
            if (obj["eDisposition.22"].IsNull == false) {

                XML.writeElementString("eDisposition.22", obj["eDisposition.22"].vSet[0]);
            }

            else {
                if (typeof obj["eDisposition.22"].NV != 'undefined') {
                    if (obj["eDisposition.22"].NV == true) {
                        XML.writeStartElement('eDisposition.22');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeString(obj["eDisposition.22"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eDisposition.23"] != 'undefined') {
            if (obj["eDisposition.23"].IsNull == false) {
                XML.writeElementString("eDisposition.23", obj["eDisposition.23"].vSet[0]);
            }
            else {
                if (typeof obj["eDisposition.23"].NV != 'undefined') {
                    if (obj["eDisposition.23"].NV == true) {
                        XML.writeStartElement('eDisposition.23');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeString(obj["eDisposition.23"].vSet[0]);
                        XML.writeEndElement();
                    }
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
                            if (typeof obj.HospitalTeamActivationGroup[i]["eDisposition.24"].NV != 'undefined') {
                                if (obj.HospitalTeamActivationGroup[i]["eDisposition.24"].NV == true) {
                                    XML.writeStartElement('eDisposition.24');
                                    XML.writeAttributeString('xsi:nil', 'true');
                                    XML.writeString(obj.HospitalTeamActivationGroup[i]["eDisposition.24"].vSet[0]);
                                    XML.writeEndElement();
                                }
                            }
                        }
                    };
                    if (typeof obj.HospitalTeamActivationGroup[i]["eDisposition.25"] != 'undefined') {
                        if (obj.HospitalTeamActivationGroup[i]["eDisposition.25"].IsNull == false) {
                            XML.writeElementString("eDisposition.23", obj.HospitalTeamActivationGroup[i]["eDisposition.25"].vSet[0]);
                        }

                        else {
                            if (typeof obj.HospitalTeamActivationGroup[i]["eDisposition.25"].NV != 'undefined') {
                                if (obj.HospitalTeamActivationGroup[i]["eDisposition.25"].NV == true) {
                                    XML.writeStartElement('eDisposition.25');
                                    XML.writeAttributeString('xsi:nil', 'true');
                                    XML.writeString(obj.HospitalTeamActivationGroup[i]["eDisposition.25"].vSet[0]);
                                    XML.writeEndElement();
                                }
                            }
                        }
                    };
                    XML.writeEndElement();
                };
            }
        };
        if (typeof obj["eDisposition.26"] != 'undefined') {
            if (obj["eDisposition.26"].IsNull == false) {
                for (var d = 0; d < obj["eDisposition.26"].vSet.length; d++) {
                    XML.writeElementString("eDisposition.26", obj["eDisposition.26"].vSet[d]);
                }
            }
        };
        XML.writeEndElement();
    };

    if (typeof TheCall.eTimes != 'undefined') {
        var obj = {};
        obj = TheCall.eTimes;
        XML.writeStartElement("eTimes");
        if (typeof obj["eTimes.01"] != 'undefined') {
            if (obj["eTimes.01"].IsNull == false) {
                XML.writeElementString("eTimes.01", obj["eTimes.01"].vSet[0]);
            }
            else {
                if (typeof obj["eTimes.01"].NV != 'undefined') {
                    if (obj["eTimes.01"].NV == true) {
                        XML.writeStartElement('eTimes.01');
                        XML.writeAttributeString("NV", obj["eTimes.01"].vSet[0]);
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eTimes.02"] != 'undefined') {
            if (obj["eTimes.02"].IsNull == false) {
                XML.writeElementString("eTimes.02", obj["eTimes.02"].vSet[0]);
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
        };

        if (typeof obj["eTimes.05"] != 'undefined') {
            if (obj["eTimes.05"].IsNull == false) {
                XML.writeElementString("eTimes.05", obj["eTimes.05"].vSet[0]);
            }
            else {
                if (typeof obj["eTimes.05"].NV != 'undefined') {
                    if (obj["eTimes.05"].NV == true) {
                        XML.writeStartElement('eTimes.05');
                        XML.writeAttributeString("NV", obj["eTimes.05"].vSet[0]);
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eTimes.06"] != 'undefined') {
            if (obj["eTimes.06"].IsNull == false) {
                XML.writeElementString("eTimes.06", obj["eTimes.06"].vSet[0]);
            }
            else {
                if (typeof obj["eTimes.05"].NV != 'undefined') {
                    if (obj["eTimes.06"].NV == true) {
                        XML.writeStartElement('eTimes.06');
                        XML.writeAttributeString("NV", obj["eTimes.06"].vSet[0]);
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eTimes.07"] != 'undefined') {
            if (obj["eTimes.07"].IsNull == false) {
                XML.writeElementString("eTimes.07", obj["eTimes.07"].vSet[0]);
            }
            else {
                if (typeof obj["eTimes.07"].NV != 'undefined') {
                    if (obj["eTimes.07"].NV == true) {
                        XML.writeStartElement('eTimes.07');
                        XML.writeAttributeString("NV", obj["eTimes.07"].vSet[0]);
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eTimes.08"] != 'undefined') {
            if (obj["eTimes.08"].IsNull == false) {
                XML.writeElementString("eTimes.08", obj["eTimes.08"].vSet[0]);
            }
            else {
                if (typeof obj["eTimes.08"].NV != 'undefined') {
                    if (obj["eTimes.08"].NV == true) {
                        XML.writeStartElement('eTimes.08');
                        XML.writeAttributeString("NV", obj["eTimes.08"].vSet[0]);
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();
                    }
                }
            }
        };
        if (typeof obj["eTimes.09"] != 'undefined') {
            if (obj["eTimes.09"].IsNull == false) {
                XML.writeElementString("eTimes.09", obj["eTimes.09"].vSet[0]);
            }
            else {
                if (typeof obj["eTimes.09"].NV != 'undefined') {
                    if (obj["eTimes.09"].NV == true) {
                        XML.writeStartElement('eTimes.09');
                        XML.writeAttributeString("NV", obj["eTimes.09"].vSet[0]);
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eTimes.10"] != 'undefined') {
            if (obj["eTimes.10"].IsNull == false) {
                XML.writeElementString("eTimes.10", obj["eTimes.10"].vSet[0]);
            }
        };

        if (typeof obj["eTimes.11"] != 'undefined') {
            if (obj["eTimes.11"].IsNull == false) {
                XML.writeElementString("eTimes.11", obj["eTimes.11"].vSet[0]);
            }
            else {
                if (typeof obj["eTimes.11"].NV != 'undefined') {
                    if (obj["eTimes.11"].NV == true) {
                        XML.writeStartElement('eTimes.11');
                        XML.writeAttributeString("NV", obj["eTimes.11"].vSet[0]);
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eTimes.12"] != 'undefined') {
            if (obj["eTimes.12"].IsNull == false) {
                XML.writeElementString("eTimes.12", obj["eTimes.12"].vSet[0]);
            }
            else {
                if (typeof obj["eTimes.12"].NV != 'undefined') {
                    if (obj["eTimes.12"].NV == true) {
                        XML.writeStartElement('eTimes.12');
                        XML.writeAttributeString("NV", obj["eTimes.12"].vSet[0]);
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eTimes.13"] != 'undefined') {
            if (obj["eTimes.13"].IsNull == false) {
                XML.writeElementString("eTimes.13", obj["eTimes.13"].vSet[0]);
            }
            else {
                if (typeof obj["eTimes.13"].NV != 'undefined') {
                    if (obj["eTimes.13"].NV == true) {
                        XML.writeStartElement('eTimes.11');
                        XML.writeAttributeString("NV", obj["eTimes.13"].vSet[0]);
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eTimes.14"] != 'undefined') {
            if (obj["eTimes.14"].IsNull == false) {
                XML.writeElementString("eTimes.14", obj["eTimes.14"].vSet[0]);
            }
        };
        if (typeof obj["eTimes.15"] != 'undefined') {
            if (obj["eTimes.15"].IsNull == false) {
                XML.writeElementString("eTimes.15", obj["eTimes.15"].vSet[0]);
            }
        };

        if (typeof obj["eTimes.16"] != 'undefined') {
            if (obj["eTimes.16"].IsNull == false) {
                XML.writeElementString("eTimes.16", obj["eTimes.16"].vSet[0]);
            }
        };

        XML.writeEndElement()

    };

    if (typeof TheCall.eResponse != 'undefined') {
        var obj = {};
        obj = TheCall.eResponse;
        XML.writeStartElement("eResponse");
        if (typeof obj["AgencyGroup"] != 'undefined') {
            var objA = obj["AgencyGroup"];
            XML.writeStartElement("eResponse.AgencyGroup");
            if (typeof objA["eResponse.01"] != 'undefined') {
                if (objA["eResponse.01"].IsNull == false) {
                    XML.writeElementString("eResponse.01", escapeXml(objA["eResponse.01"].vSet[0]));
                }
            };

            if (typeof objA["eResponse.02"] != 'undefined') {
                if (objA["eResponse.02"].IsNull == false) {
                    XML.writeElementString("eResponse.02", escapeXml(objA["eResponse.02"].vSet[0]));
                }
                else {
                    if (typeof objA["eResponse.02"].NV != 'undefined') {
                        if (objA["eResponse.02"].NV == true) {
                            XML.writeStartElement('eResponse.02');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeString(objA["eResponse.02"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                }
            };
            XML.writeEndElement();
        };

        if (typeof obj["eResponse.03"] != 'undefined') {
            if (obj["eResponse.03"].IsNull == false) {
                XML.writeElementString("eResponse.03", obj["eResponse.03"].vSet[0]);
            }
            else {
                if (typeof objA["eResponse.03"].NV != 'undefined') {
                    if (obj["eResponse.03"].NV == true) {
                        XML.writeStartElement('eResponse.03');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeString(obj["eResponse.03"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };


        if (typeof obj["eResponse.04"] != 'undefined') {
            if (obj["eResponse.04"].IsNull == false) {
                XML.writeElementString("eResponse.04", escapeXml(obj["eResponse.04"].vSet[0]));
            }
            else {
                if (typeof obj["eResponse.04"].NV != 'undefined') {
                    if (obj["eResponse.04"].NV == true) {
                        XML.writeStartElement('eResponse.04');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString("NV", obj["eResponse.04"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["AgencyServiceGroup"] != 'undefined') {
            XML.writeStartElement("eResponse.AgencyServiceGroup");
            var objS = obj["AgencyServiceGroup"];
            if (typeof objS["eResponse.05"] != 'undefined') {
                if (objS["eResponse.05"].IsNull == false) {
                    XML.writeElementString("eResponse.05", objS["eResponse.05"].vSet[0]);
                }
            };

            if (typeof objS["eResponse.06"] != 'undefined') {
                if (objS["eResponse.06"].IsNull == false) {
                    XML.writeElementString("eResponse.06", objS["eResponse.06"].vSet[0]);
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
                if (typeof obj["eResponse.08"].NV != 'undefined') {
                    if (obj["eResponse.08"].NV == true) {
                        XML.writeStartElement('eResponse.08');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString("NV", obj["eResponse.08"].vSet[0]);
                        XML.writeEndElement();
                    }
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
                if (typeof obj["eResponse.09"].NV != 'undefined') {
                    if (obj["eResponse.09"].NV == true) {
                        XML.writeStartElement('eResponse.09');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString("NV", obj["eResponse.09"].vSet[0]);
                        XML.writeEndElement();
                    }
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
                if (typeof obj["eResponse.10"].NV != 'undefined') {
                    if (obj["eResponse.10"].NV == true) {
                        XML.writeStartElement('eResponse.10');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString("NV", obj["eResponse.10"].vSet[0]);
                        XML.writeEndElement();
                    }
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
                if (typeof obj["eResponse.11"].NV != 'undefined') {
                    if (obj["eResponse.11"].NV == true) {
                        XML.writeStartElement('eResponse.11');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString("NV", obj["eResponse.11"].vSet[0]);
                        XML.writeEndElement();
                    }
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
                if (typeof obj["eResponse.12"].NV != 'undefined') {
                    if (obj["eResponse.12"].NV == true) {
                        XML.writeStartElement('eResponse.12');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString("NV", obj["eResponse.12"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eResponse.13"] != 'undefined') {
            if (obj["eResponse.13"].IsNull == false) {
                XML.writeElementString("eResponse.13", escapeXml(obj["eResponse.13"].vSet[0]));
            }
            else {
                if (typeof obj["eResponse.13"].NV != 'undefined') {
                    if (obj["eResponse.13"].NV == true) {
                        XML.writeStartElement('eResponse.13');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eResponse.13"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eResponse.14"] != 'undefined') {
            if (obj["eResponse.14"].IsNull == false) {
                XML.writeElementString("eResponse.14", escapeXml(obj["eResponse.14"].vSet[0]));
            }

            else {
                if (typeof obj["eResponse.14"].NV != 'undefined') {
                    if (obj["eResponse.14"].NV == true) {
                        XML.writeStartElement('eResponse.14');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eResponse.14"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eResponse.15"] != 'undefined') {
            if (obj["eResponse.15"].IsNull == false) {
                XML.writeElementString("eResponse.15", obj["eResponse.15"].vSet[0]);
            }
        };

        if (typeof obj["eResponse.16"] != 'undefined') {
            if (obj["eResponse.16"].IsNull == false) {
                XML.writeElementString("eResponse.16", escapeXml(obj["eResponse.16"].vSet[0]));
            }
        };

        if (typeof obj["eResponse.17"] != 'undefined') {
            if (obj["eResponse.17"].IsNull == false) {
                XML.writeElementString("eResponse.17", escapeXml(obj["eResponse.17"].vSet[0]));
            }
        };

        if (typeof obj["eResponse.18"] != 'undefined') {
            if (obj["eResponse.18"].IsNull == false) {
                XML.writeElementString("eResponse.18", escapeXml(obj["eResponse.18"].vSet[0]));
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

        if (typeof obj["eResponse.21"] != 'undefined') {
            if (obj["eResponse.21"].IsNull == false) {
                XML.writeElementString("eResponse.21", obj["eResponse.21"].vSet[0]);
            }
        };

        if (typeof obj["eResponse.22"] != 'undefined') {
            if (obj["eResponse.22"].IsNull == false) {
                XML.writeElementString("eResponse.22", obj["eResponse.22"].vSet[0]);
            }
        };


        if (typeof obj["eResponse.23"] != 'undefined') {
            if (obj["eResponse.23"].IsNull == false) {
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
                if (typeof obj["eResponse.24"].NV != 'undefined') {
                    if (obj["eResponse.24"].NV == true) {
                        XML.writeStartElement('eResponse.24');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eResponse.24"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };
        XML.writeEndElement();
    };

    if (typeof TheCall.ePatient != 'undefined') {
        XML.writeStartElement("ePatient")
        var obj = {};

        obj = TheCall.ePatient;
        if (typeof obj["ePatient.01"] != 'undefined') {
            if (obj["ePatient.01"].IsNull == false) {
                XML.writeElementString("ePatient.01", escapeXml(obj["ePatient.01"].vSet[0]));
            }
        };


        if (typeof obj.PatientNameGroup != 'undefined') {
            XML.writeStartElement("ePatient.PatientNameGroup")
            var objN = obj.PatientNameGroup;

            if (typeof objN["ePatient.02"] != 'undefined') {
                if (objN["ePatient.02"].IsNull == false) {
                    if (typeof objN["ePatient.02"].PN == 'undefined') {
                        XML.writeElementString("ePatient.02", escapeXml(objN["ePatient.02"].vSet[0]));
                    }
                    else {
                        if (objN["ePatient.02"].PN == true) {
                            XML.writeStartElement('ePatient.02');
                            XML.writeAttributeString('PN', objN["ePatient.02"].PN);
                            XML.writeString(escapeXml(objN["ePatient.02"].vSet[0]));
                            XML.writeEndElement();
                        }
                    }
                }
                else {

                    if (typeof objN["ePatient.02"].PN != 'undefined') {
                        if (objN["ePatient.02"].PN == true) {
                            XML.writeStartElement('ePatient.02');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('PN', objN["ePatient.02"].PN);
                            XML.writeEndElement();
                        }
                    }
                    else {
                        if (typeof objN["ePatient.03"].NV != 'undefined') {
                            if (objN["ePatient.02"].NV == true) {
                                XML.writeStartElement('ePatient.02');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', objN["ePatient.02"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                }
            };

            if (typeof objN["ePatient.03"] != 'undefined') {
                if (objN["ePatient.03"].IsNull == false) {
                    if (typeof objN["ePatient.03"].PN == 'undefined') {
                        XML.writeElementString("ePatient.03", escapeXml(objN["ePatient.03"].vSet[0]));
                    }
                    else {
                        XML.writeStartElement('ePatient.03');
                        XML.writeAttributeString('PN', objN["ePatient.03"].PN);
                        XML.writeString(escapeXml(objN["ePatient.03"].vSet[0]));
                        XML.writeEndElement();
                    }
                }
                else {

                    if (typeof objN["ePatient.03"].PN != 'undefined') {
                        if (objN["ePatient.03"].PN == true) {
                            XML.writeStartElement('ePatient.03');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('PN', objN["ePatient.03"].PN);
                            XML.writeEndElement();
                        }
                    }
                    else {
                        if (typeof obj["ePatient.03"].NV != 'undefined') {
                            if (objN["ePatient.03"].NV == true) {
                                XML.writeStartElement('ePatient.03');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', objN["ePatient.03"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                }
            };

            if (typeof objN["ePatient.04"] != 'undefined') {
                if (objN["ePatient.04"].IsNull == false) {
                    XML.writeElementString("ePatient.04", escapeXml(objN["ePatient.04"].vSet[0]));
                }
            };
            XML.writeEndElement();
        };

        if (typeof obj["ePatient.05"] != 'undefined') {
            if (obj["ePatient.05"].IsNull == false) {
                XML.writeElementString("ePatient.05", escapeXml(obj["ePatient.05"].vSet[0]));
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
                if (typeof obj["ePatient.07"].NV != 'undefined') {
                    if (obj["ePatient.07"].NV == true) {
                        XML.writeStartElement('ePatient.07');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["ePatient.07"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["ePatient.08"] != 'undefined') {

            if (obj["ePatient.08"].IsNull == false) {
                XML.writeElementString("ePatient.08", obj["ePatient.08"].vSet[0]);
            }
            else {
                if (typeof obj["ePatient.08"].NV != 'undefined') {
                    if (obj["ePatient.08"].NV == true) {
                        XML.writeStartElement('ePatient.08');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["ePatient.08"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["ePatient.09"] != 'undefined') {
            if (obj["ePatient.09"].IsNull == false) {
                XML.writeElementString("ePatient.09", obj["ePatient.09"].vSet[0]);
            }
            else {
                if (typeof obj["ePatient.09"].NV != 'undefined') {
                    if (obj["ePatient.09"].NV == true) {
                        XML.writeStartElement('ePatient.09');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["ePatient.09"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
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
                if (typeof obj["ePatient.13"].NV != 'undefined') {
                    if (obj["ePatient.13"].NV == true) {
                        XML.writeStartElement('ePatient.13');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["ePatient.13"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };


        if (typeof obj["ePatient.14"] != 'undefined') {
            if (obj["ePatient.14"].IsNull == false) {
                for (var i = 0; i < obj["ePatient.14"].vSet.length; i++) {
                    XML.writeElementString("ePatient.14", obj["ePatient.14"].vSet[i]);
                }
            }
            else {
                if (typeof obj["ePatient.14"].NV != 'undefined') {
                    if (obj["ePatient.14"].NV == true) {
                        XML.writeStartElement('ePatient.14');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["ePatient.14"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj.AgeGroup != 'undefined') {
            XML.writeStartElement("ePatient.AgeGroup")
            if (typeof obj.AgeGroup["ePatient.15"] != 'undefined') {

                if (obj.AgeGroup["ePatient.15"].IsNull == false) {
                    XML.writeElementString("ePatient.15", obj.AgeGroup["ePatient.15"].vSet[0]);
                }
                else {
                    if (typeof obj.AgeGroup["ePatient.15"].NV != 'undefined') {
                        if (obj.AgeGroup["ePatient.15"].NV == true) {
                            XML.writeStartElement('ePatient.15');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj.AgeGroup["ePatient.15"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                }
            };

            if (typeof obj.AgeGroup["ePatient.16"] != 'undefined') {

                if (obj.AgeGroup["ePatient.16"].IsNull == false) {
                    XML.writeElementString("ePatient.16", obj.AgeGroup["ePatient.16"].vSet[0]);
                }
                else {
                    if (typeof obj.AgeGroup["ePatient.16"].NV != 'undefined') {
                        if (obj.AgeGroup["ePatient.16"].NV == true) {
                            XML.writeStartElement('ePatient.16');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj.AgeGroup["ePatient.16"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                }
            };

            XML.writeEndElement()
        };

        if (typeof obj["ePatient.17"] != 'undefined') {
            if (obj["ePatient.17"].IsNull == false) {
                XML.writeElementString("ePatient.17", obj["ePatient.17"].vSet[0]);
            }
            else {
                if (obj["ePatient.17"].NV != 'undefined') {
                    if (obj["ePatient.17"].NV == true) {
                        XML.writeStartElement('ePatient.17');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["ePatient.17"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["ePatient.18"] != 'undefined') {
            if (obj["ePatient.18"].IsNull == false) {
                for (var i = 0; i <= obj["ePatient.18"].vSet.length - 1; i++) {
                    if (typeof obj["ePatient.18"].vSet[i].PhoneType != 'undefined') {
                        XML.writeStartElement('ePatient.18');
                        XML.writeAttributeString('PhoneNumberType', obj["ePatient.18"].vSet[i].PhoneType);
                        XML.writeString(escapeXml(obj["ePatient.18"].vSet[i].val));
                        XML.writeEndElement();
                    }
                    else {

                        XML.writeElementString("ePatient.18", escapeXml(obj["ePatient.18"].vSet[i].val));
                    }
                }
            }
        };

        if (typeof obj["ePatient.19"] != 'undefined') {

            if (obj["ePatient.19"].IsNull == false) {
                for (var i = 0; i <= obj["ePatient.19"].vSet.length - 1; i++) {
                    if (typeof obj["ePatient.19"].vSet[i].EMailType != 'undefined') {
                        if (obj["ePatient.19"].vSet[i].EMailType != "") {
                            XML.writeStartElement('EMailType');
                            XML.writeAttributeString('EmailType', obj["ePatient.19"].vSet[i].EMailType);
                            XML.writeString(escapeXml(obj["ePatient.19"].vSet[i].val));
                            XML.writeEndElement();
                        }
                        else {

                            XML.writeElementString("ePatient.19", escapeXml(obj["ePatient.19"].vSet[i].val));
                        }
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
                    XML.writeElementString("ePatient.21", escapeXml(obj["ePatient.21"].vSet[0]));
                }
            }
        };

        XML.writeEndElement()

    };

    if (typeof TheCall.eHistory != 'undefined') {
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
                if (typeof obj["eHistory.01"].NV != 'undefined') {
                    if (obj["eHistory.01"].NV == true) {
                        XML.writeStartElement('eHistory.01');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eHistory.01"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };


        if (typeof obj["PractitionerGroup"] != 'undefined') {
            for (var d = 0; d < obj["PractitionerGroup"].length ; d++) {
                XML.writeStartElement("eHistory.PractitionerGroup")

                if (typeof obj["PractitionerGroup"][d]["eHistory.02"] != 'undefined') {
                    if (obj["PractitionerGroup"][d]["eHistory.02"].IsNull == false) {
                        XML.writeElementString("eHistory.02", escapeXml(obj["PractitionerGroup"][d]["eHistory.02"].vSet[0]));
                    }
                };

                if (typeof obj["PractitionerGroup"][d]["eHistory.03"] != 'undefined') {
                    if (obj["PractitionerGroup"][d]["eHistory.03"].IsNull == false) {
                        XML.writeElementString("eHistory.03", escapeXml(obj["PractitionerGroup"][d]["eHistory.03"].vSet[0]));
                    }
                };
                if (typeof obj["PractitionerGroup"][d]["eHistory.04"] != 'undefined') {
                    if (obj["PractitionerGroup"][d]["eHistory.04"].IsNull == false) {
                        //h["eHistory.04"] = obj["PractitionerGroup"][d]["eHistory.04"].vSet[0];
                        XML.writeElementString("eHistory.04", escapeXml(obj["PractitionerGroup"][d]["eHistory.04"].vSet[0]));
                    }
                };

                XML.writeEndElement()
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

                if (typeof obj["eHistory.05"].NV != 'undefined') {
                    if (obj["eHistory.05"].NV == true) {
                        XML.writeStartElement('eHistory.05');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eHistory.05"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eHistory.06"] != 'undefined') {
            if (obj["eHistory.06"].IsNull == false) {
                XML.writeElementString("eHistory.06", escapeXml(obj["eHistory.06"].vSet[0]));
            }

            else {
                if (typeof obj["eHistory.06"].NV != 'undefined') {
                    if (obj["eHistory.06"].NV == true) {
                        XML.writeStartElement('eHistory.06');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eHistory.06"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
                else if (typeof obj["eHistory.06"].PN != 'undefined') {
                    if (obj["eHistory.06"].PN == true) {
                        XML.writeStartElement('eHistory.06');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('PN', obj["eHistory.06"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };


        if (typeof obj["eHistory.07"] != 'undefined') {
            if (obj["eHistory.07"].IsNull == false) {
                for (var d = 0; d < obj["eHistory.07"].vSet.length; d++) {
                    XML.writeElementString("eHistory.07", escapeXml(obj["eHistory.07"].vSet[d]));
                }
            }
        };

        if (typeof obj["eHistory.08"] != 'undefined') {
            if (obj["eHistory.08"].IsNull == false) {
                for (var d = 0; d < obj["eHistory.08"].vSet.length; d++) {
                    XML.writeElementString("eHistory.08", escapeXml(obj["eHistory.08"].vSet[d]));
                }
            }
            else {
                if (typeof obj["eHistory.08"].NV != 'undefined') {
                    if (obj["eHistory.08"].NV == true) {
                        XML.writeStartElement('eHistory.08');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eHistory.08"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
                else if (typeof obj["eHistory.08"].PN != 'undefined') {
                    if (obj["eHistory.08"].PN == true) {
                        XML.writeStartElement('eHistory.08');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('PN', obj["eHistory.08"].vSet[0]);
                        XML.writeEndElement();
                    }
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

            for (var d = 0; d < obj["ImmunizationsGroup"].vSet.length ; d++) {
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

        if (typeof obj["CurrentMedsGroup"] != 'undefined') {
            for (var d = 0; d < obj["CurrentMedsGroup"].length ; d++) {
                XML.writeStartElement("eHistory.CurrentMedsGroup")
                if (typeof obj["CurrentMedsGroup"][d]["eHistory.12"] != 'undefined') {
                    if (obj["CurrentMedsGroup"][d]["eHistory.12"].IsNull == false) {
                        XML.writeElementString("eHistory.12", escapeXml(obj["CurrentMedsGroup"][d]["eHistory.12"].vSet[0]));
                    }
                    else {
                        if (typeof obj["CurrentMedsGroup"][d]["eHistory.12"].NV != 'undefined') {
                            if (obj["CurrentMedsGroup"][d]["eHistory.12"].NV == true) {
                                XML.writeStartElement('eHistory.12');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj["CurrentMedsGroup"][d]["eHistory.12"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                        else if (typeof obj["CurrentMedsGroup"][d]["eHistory.12"].PN != 'undefined') {
                            if (obj["CurrentMedsGroup"][d]["eHistory.12"].PN == true) {
                                XML.writeStartElement('eHistory.12');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('PN', obj["CurrentMedsGroup"][d]["eHistory.12"].vSet[0]);
                                XML.writeEndElement();
                            }
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
        if (typeof obj["eHistory.17"] != 'undefined') {
            if (obj["eHistory.17"].IsNull == false) {
                XML.writeElementString("eHistory.17", obj["eHistory.17"].vSet[0]);
            }
            else {
                if (typeof obj["eHistory.17"].PN != 'undefined') {
                    if (obj["eHistory.17"].PN == true) {
                        XML.writeStartElement('eHistory.17');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('PN', obj["eHistory.17"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
                else if (typeof obj["eHistory.17"].NV != 'undefined') {
                    if (obj["eHistory.17"].NV == true) {
                        XML.writeStartElement('eHistory.17');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eHistory.17"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };


        if (typeof obj["eHistory.18"] != 'undefined') {
            if (obj["eHistory.18"].IsNull == false) {
                XML.writeElementString("eHistory.18", obj["eHistory.18"].vSet[0]);
            }
            else {
                if (typeof obj["eHistory.18"].PN != 'undefined') {
                    if (obj["eHistory.18"].PN == true) {
                        XML.writeStartElement('eHistory.18');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('PN', obj["eHistory.18"].vSet[0]);
                        XML.writeEndElement();
                    }
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


    if (typeof TheCall.ePayment != 'undefined') {
        var obj = {};

        var obj = TheCall.ePayment;
        XML.writeStartElement("ePayment")
        if (typeof obj["ePayment.01"] != 'undefined') {
            if (obj["ePayment.01"].IsNull == false) {
                XML.writeElementString("ePayment.01", obj["ePayment.01"].vSet[0]);
            }
            else {
                if (typeof obj["ePayment.01"].NV != 'undefined') {
                    if (obj["ePayment.01"].NV == true) {
                        XML.writeStartElement('ePayment.01');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["ePayment.01"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["CertificateGroup"] != 'undefined') {
            var objCI = new Object();
            objCI = obj["CertificateGroup"];
            XML.writeStartElement("ePayment.CertificateGroup")

            if (typeof objCI["ePayment.02"] != 'undefined') {
                if (objCI["ePayment.02"].IsNull == false) {
                    XML.writeElementString("ePayment.02", objCI["ePayment.02"].vSet[0]);
                }
            };
            if (typeof objCI["ePayment.03"] != 'undefined') {
                if (objCI["ePayment.03"].IsNull == false) {
                    XML.writeElementString("ePayment.03", objCI["ePayment.03"].vSet[0]);
                }
            };

            if (typeof objCI["ePayment.04"] != 'undefined') {
                if (objCI["ePayment.04"].IsNull == false) {
                    for (var d = 0; d < objCI["ePayment.04"].vSet.length; d++) {
                        XML.writeElementString("ePayment.04", objCI["ePayment.04"].vSet[d]);
                    }
                }
            }
            if (typeof objCI["ePayment.05"] != 'undefined') {
                if (objCI["ePayment.05"].IsNull == false) {
                    XML.writeElementString("ePayment.05", objCI["ePayment.05"].vSet[0]);
                }
            };
            if (typeof objCI["ePayment.06"] != 'undefined') {
                if (objCI["ePayment.06"].IsNull == false) {
                    XML.writeElementString("ePayment.06", escapeXml(objCI["ePayment.06"].vSet[0]));
                }
            };
            if (typeof objCI["ePayment.07"] != 'undefined') {
                if (objCI["ePayment.07"].IsNull == false) {
                    XML.writeElementString("ePayment.07", escapeXml(objCI["ePayment.07"].vSet[0]));
                }
            };
            XML.writeEndElement();
        };

        if (typeof obj["ePayment.08"] != 'undefined') {
            if (obj["ePayment.08"].IsNull == false) {
                XML.writeElementString("ePayment.08", obj["ePayment.08"].vSet[0]);
            }
        };
        if (typeof obj["Insurancegroup"] != 'undefined') {
            for (var d = 0; d < obj["InsuranceGroup"].vSet.length ; d++) {
                var obj1 = new Object();
                obj1 = obj["InsuranceGroup"][d];
                XML.writeStartElement("ePayment.InsuranceGroup")

                if (typeof obj1["ePayment.09"] != 'undefined') {
                    if (obj1["ePayment.09"].IsNull == false) {
                        XML.writeElementString("ePayment.09", escapeXml(obj1["ePayment.09"].vSet[0]));
                    }
                };
                if (typeof obj1["ePayment.10"] != 'undefined') {
                    if (obj1["ePayment.10"].IsNull == false) {
                        XML.writeElementString("ePayment.10", escapeXml(obj1["ePayment.10"].vSet[0]));
                    }
                };
                if (typeof obj1["ePayment.11"] != 'undefined') {
                    if (obj1["ePayment.11"].IsNull == false) {
                        XML.writeElementString("ePayment.11", obj1["ePayment.11"].vSet[0]);
                    }
                };
                if (typeof obj1["ePayment.12"] != 'undefined') {
                    if (obj1["ePayment.12"].IsNull == false) {
                        XML.writeElementString("ePayment.12", escapeXml(obj1["ePayment.12"].vSet[0]));
                    }
                };
                if (typeof obj1["ePayment.13"] != 'undefined') {
                    if (obj1["ePayment.13"].IsNull == false) {
                        XML.writeElementString("ePayment.13", escapeXml(obj1["ePayment.13"].vSet[0]));
                    }
                };
                if (typeof obj1["ePayment.14"] != 'undefined') {
                    if (obj1["ePayment.14"].IsNull == false) {
                        XML.writeElementString("ePayment.14", obj1["ePayment.14"].vSet[0]);
                    }
                };
                if (typeof obj1["ePayment.15"] != 'undefined') {
                    if (obj1["ePayment.15"].IsNull == false) {
                        XML.writeElementString("ePayment.15", obj1["ePayment.15"].vSet[0]);
                    }
                };
                if (typeof obj1["ePayment.16"] != 'undefined') {
                    if (obj1["ePayment.16"].IsNull == false) {
                        ins["ePayment.16"] = obj1["ePayment.16"].vSet[0];
                        XML.writeElementString("ePayment.16", obj1["ePayment.16"].vSet[0]);
                    }
                };
                if (typeof obj1["ePayment.17"] != 'undefined') {
                    if (obj1["ePayment.17"].IsNull == false) {
                        XML.writeElementString("ePayment.17", escapeXml(obj1["ePayment.17"].vSet[0]));
                    }
                };
                if (typeof obj1["ePayment.18"] != 'undefined') {
                    if (obj1["ePayment.18"].IsNull == false) {
                        XML.writeElementString("ePayment.18", escapeXml(obj1["ePayment.18"].vSet[0]));
                    }
                };
                if (typeof obj1["ePayment.19"] != 'undefined') {
                    if (obj1["ePayment.19"].IsNull == false) {
                        XML.writeElementString("ePayment.19", escapeXml(obj1["ePayment.19"].vSet[0]));
                    }
                };
                if (typeof obj1["ePayment.20"] != 'undefined') {
                    if (obj1["ePayment.20"].IsNull == false) {
                        XML.writeElementString("ePayment.20", escapeXml(obj1["ePayment.20"].vSet[0]));
                    }
                };
                if (typeof obj1["ePayment.21"] != 'undefined') {
                    if (obj1["ePayment.21"].IsNull == false) {
                        XML.writeElementString("ePayment.21", escapeXml(obj1["ePayment.21"].vSet[0]));
                    }
                };
                if (typeof obj1["ePayment.22"] != 'undefined') {
                    if (obj1["ePayment.22"].IsNull == false) {
                        XML.writeElementString("ePayment.22", obj1["ePayment.22"].vSet[0]);
                    }
                };
                XML.writeEndElement();
            }
        };
        if (typeof obj["ClosestRelativeGroup"] != 'undefined') {
            var objC = new Object();
            objC = obj["ClosestRelativeGroup"];
            {
                XML.writeStartElement("ePayment.ClosestRelativeGroup")
                if (typeof objC["ePayment.23"] != 'undefined') {
                    if (objC["ePayment.23"].IsNull == false) {
                        XML.writeElementString("ePayment.23", escapeXml(objC["ePayment.23"].vSet[0]));
                    }
                };

                if (typeof objC["ePayment.24"] != 'undefined') {
                    if (objC["ePayment.24"].IsNull == false) {
                        XML.writeElementString("ePayment.24", escapeXml(objC["ePayment.24"].vSet[0]));
                    }
                };
                if (typeof objC["ePayment.25"] != 'undefined') {
                    if (objC["ePayment.25"].IsNull == false) {
                        XML.writeElementString("ePayment.25", escapeXml(objC["ePayment.25"].vSet[0]));
                    }
                };

                if (typeof objC["ePayment.26"] != 'undefined') {
                    if (objC["ePayment.26"].IsNull == false) {
                        XML.writeElementString("ePayment.26", escapeXml(objC["ePayment.26"].vSet[0]));
                    }
                };

                if (typeof objC["ePayment.27"] != 'undefined') {
                    if (objC["ePayment.27"].IsNull == false) {
                        XML.writeElementString("ePayment.27", objC["ePayment.27"].vSet[0]);
                    }
                };

                if (typeof objC["ePayment.28"] != 'undefined') {
                    if (objC["ePayment.28"].IsNull == false) {
                        XML.writeElementString("ePayment.28", objC["ePayment.28"].vSet[0]);
                    }
                };

                if (typeof objC["ePayment.29"] != 'undefined') {
                    if (objC["ePayment.29"].IsNull == false) {
                        XML.writeElementString("ePayment.29", objC["ePayment.29"].vSet[0]);
                    }
                };

                if (typeof objC["ePayment.30"] != 'undefined') {
                    if (objC["ePayment.30"].IsNull == false) {
                        XML.writeElementString("ePayment.30", objC["ePayment.30"].vSet[0]);
                    }
                };

                if (typeof objC["ePayment.31"] != 'undefined') {
                    if (objC["ePayment.31"].IsNull == false) {
                        for (var d = 0; d < objC["ePayment.31"].vSet.length; d++) {
                            XML.writeElementString("ePayment.31", escapeXml(objC["ePayment.31"].vSet[d]));
                        }
                    }
                };

                if (typeof objC["ePayment.32"] != 'undefined') {
                    if (objC["ePayment.32"].IsNull == false) {
                        XML.writeElementString("ePayment.32", objC["ePayment.32"].vSet[0]);
                    }
                };

                XML.writeEndElement();
            }
        };
        if (typeof obj["EmployerGroup"] != 'undefined') {
            var objE = new Object();
            objE = obj["EmployerGroup"];
            XML.writeStartElement("ePayment.EmployerGroup")
            if (typeof objE["ePayment.33"] != 'undefined') {
                if (objE["ePayment.33"].IsNull == false) {
                    XML.writeElementString("ePayment.33", escapeXml(objE["ePayment.33"].vSet[0]));
                }
            };

            if (typeof objE["ePayment.34"] != 'undefined') {
                if (objE["ePayment.34"].IsNull == false) {
                    XML.writeElementString("ePayment.34", escapeXml(objE["ePayment.34"].vSet[0]));
                }
            };

            if (typeof objE["ePayment.35"] != 'undefined') {
                if (objE["ePayment.35"].IsNull == false) {
                    XML.writeElementString("ePayment.35", escapeXml(objE["ePayment.35"].vSet[0]));
                }
            };

            if (typeof objE["ePayment.36"] != 'undefined') {
                if (objE["ePayment.36"].IsNull == false) {
                    XML.writeElementString("ePayment.36", objE["ePayment.36"].vSet[0]);
                }
            };

            if (typeof objE["ePayment.37"] != 'undefined') {
                if (objE["ePayment.37"].IsNull == false) {
                    XML.writeElementString("ePayment.37", objE["ePayment.37"].vSet[0]);
                }
            };

            if (typeof objE["ePayment.38"] != 'undefined') {
                if (objE["ePayment.38"].IsNull == false) {
                    XML.writeElementString("ePayment.38", objE["ePayment.38"].vSet[0]);
                }
            };

            if (typeof objE["ePayment.39"] != 'undefined') {
                if (objE["ePayment.39"].IsNull == false) {
                    XML.writeElementString("ePayment.39", escapeXml(objE["ePayment.39"].vSet[0]));
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
                XML.writeElementString("ePayment.45", escapeXml(obj["ePayment.45"].vSet[0]));
            }
        }
        if (typeof obj["ePayment.46"] != 'undefined') {
            if (obj["ePayment.46"].IsNull == false) {
                XML.writeElementString("ePayment.46", escapeXml(obj["ePayment.46"].vSet[0]));
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
                if (typeof obj["ePayment.50"].NV != 'undefined') {
                    if (obj["ePayment.50"].NV == true) {
                        XML.writeStartElement('ePayment.50');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["ePayment.50"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
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
                XML.writeElementString("ePayment.53", escapeXml(obj["ePayment.53"].vSet[0]));
            }
        };

        if (typeof obj["ePayment.54"] != 'undefined') {
            if (obj["ePayment.54"].IsNull == false) {
                XML.writeElementString("ePayment.54", escapeXml(obj["ePayment.54"].vSet[0]));
            }
        };

        if (typeof obj["SupplyItemGroup"] != 'undefined') {
            for (var d = 0; d < obj["SupplyItemGroup"].vSet.length ; d++) {
                var obj2 = {}
                obj2 = obj["SupplyItemGroup"][d]
                XML.writeStartElement("ePayment.SupplyItemGroup")
                if (typeof obj2["ePayment.55"] != 'undefined') {
                    if (obj2["ePayment.55"].IsNull == false) {
                        XML.writeElementString("ePayment.55", escapeXml(obj2["ePayment.55"].vSet[0]));
                    }
                };

                if (typeof obj2["ePayment.56"] != 'undefined') {
                    if (obj2["ePayment.56"].IsNull == false) {
                        XML.writeElementString("ePayment.56", obj2["ePayment.56"].vSet[0]);
                    }
                };
                XML.writeEndElement();
            };
        };
        XML.writeEndElement();
    };


    if (typeof TheCall.eSituation != 'undefined') {
        XML.writeStartElement("eSituation")
        var obj = {};
        var obj = TheCall.eSituation;
        if (typeof obj["eSituation.01"] != 'undefined') {
            if (obj["eSituation.01"].IsNull == false) {
                XML.writeElementString("eSituation.01", obj["eSituation.01"].vSet[0]);
            }
            else {
                if (typeof obj["eSituation.01"].NV != 'undefined') {
                    if (obj["eSituation.01"].NV == true) {
                        XML.writeStartElement('eSituation.01');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eSituation.01"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };
        if (typeof obj["eSituation.02"] != 'undefined') {
            if (obj["eSituation.02"].IsNull == false) {
                XML.writeElementString("eSituation.02", obj["eSituation.02"].vSet[0]);
            }
            else {
                if (typeof obj["eSituation.02"].NV != 'undefined') {
                    if (obj["eSituation.02"].NV == true) {
                        XML.writeStartElement('eSituation.02');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eSituation.02"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };
        if (typeof obj["PatientComplaintGroup"] != 'undefined') {
            for (var d = 0; d < obj["PatientComplaintGroup"].length ; d++) {
                var obj1 = {};
                obj1 = obj["PatientComplaintGroup"][d];
                XML.writeStartElement("eSituation.PatientComplaintGroup")
                if (typeof obj1["eSituation.03"] != 'undefined') {
                    if (obj1["eSituation.03"].IsNull == false) {
                        XML.writeElementString("eSituation.03", obj1["eSituation.03"].vSet[0]);
                    }
                    else {
                        if (typeof obj1["eSituation.03"].NV != 'undefined') {
                            if (obj1["eSituation.03"].NV == true) {
                                XML.writeStartElement('eSituation.03');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj1["eSituation.03"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                };

                if (typeof obj1["eSituation.04"] != 'undefined') {
                    if (obj1["eSituation.04"].IsNull == false) {
                        XML.writeElementString("eSituation.04", escapeXml(obj1["eSituation.04"].vSet[0]));
                    }
                    else {
                        if (typeof obj1["eSituation.04"].NV != 'undefined') {
                            if (obj1["eSituation.04"].NV == true) {
                                XML.writeStartElement('eSituation.04');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj1["eSituation.04"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                };

                if (typeof obj1["eSituation.05"] != 'undefined') {
                    if (obj1["eSituation.05"].IsNull == false) {
                        XML.writeElementString("eSituation.05", obj1["eSituation.05"].vSet[0]);
                    }
                    else {
                        if (typeof obj1["eSituation.05"].NV != 'undefined') {
                            if (obj1["eSituation.05"].NV == true) {
                                XML.writeStartElement('eSituation.05');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj1["eSituation.05"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                };

                if (typeof obj1["eSituation.06"] != 'undefined') {
                    if (obj1["eSituation.06"].IsNull == false) {
                        XML.writeElementString("eSituation.06", obj1["eSituation.06"].vSet[0]);
                    }
                    else {
                        if (typeof obj1["eSituation.06"].NV != 'undefined') {
                            if (obj1["eSituation.06"].NV == true) {
                                XML.writeStartElement('eSituation.06');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj1["eSituation.06"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                };
                XML.writeEndElement();
            }
        };
        if (typeof obj["eSituation.07"] != 'undefined') {
            if (obj["eSituation.07"].IsNull == false) {
                XML.writeElementString("eSituation.07", obj["eSituation.07"].vSet[0]);
            }
            else {
                if (typeof obj["eSituation.07"].NV != 'undefined') {
                    if (obj["eSituation.07"].NV == true) {
                        XML.writeStartElement('eSituation.07');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eSituation.07"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };
        if (typeof obj["eSituation.08"] != 'undefined') {
            if (obj["eSituation.08"].IsNull == false) {
                XML.writeElementString("eSituation.08", obj["eSituation.08"].vSet[0]);
            }
            else {
                if (typeof obj["eSituation.08"].NV != 'undefined') {
                    if (obj["eSituation.08"].NV == true) {
                        XML.writeStartElement('eSituation.08');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eSituation.08"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };
        if (typeof obj["eSituation.09"] != 'undefined') {
            if (obj["eSituation.09"].IsNull == false) {
                XML.writeElementString("eSituation.09", escapeXml(obj["eSituation.09"].vSet[0]));
            }
            else {
                if (typeof obj["eSituation.09"].NV != 'undefined') {
                    if (obj["eSituation.09"].NV == true) {
                        XML.writeStartElement('eSituation.09');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eSituation.09"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };
        if (typeof obj["eSituation.10"] != 'undefined') {
            if (obj["eSituation.10"].IsNull == false) {
                for (var d = 0; d < obj["eSituation.10"].vSet.length ; d++) {
                    XML.writeElementString("eSituation.10", escapeXml(obj["eSituation.10"].vSet[d]));
                }
            }
            else {
                if (typeof obj["eSituation.10"].NV != 'undefined') {
                    if (obj["eSituation.10"].NV == true) {
                        XML.writeStartElement('eSituation.10');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eSituation.10"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };
        if (typeof obj["eSituation.11"] != 'undefined') {
            if (obj["eSituation.11"].IsNull == false) {
                XML.writeElementString("eSituation.11", escapeXml(obj["eSituation.11"].vSet[0]));
            }
        };

        if (typeof obj["eSituation.12"] != 'undefined') {
            if (obj["eSituation.12"].IsNull == false) {
                for (var d = 0; d < obj["eSituation.12"].vSet.length ; d++) {
                    XML.writeElementString("eSituation.12", escapeXml(obj["eSituation.12"].vSet[d]));
                }
            }
            else {
                if (typeof obj["eSituation.12"].NV != 'undefined') {
                    if (obj["eSituation.12"].NV == true) {
                        XML.writeStartElement('eSituation.12');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eSituation.12"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eSituation.13"] != 'undefined') {
            if (obj["eSituation.13"].IsNull == false) {
                XML.writeElementString("eSituation.13", obj["eSituation.13"].vSet[0]);
            }
        };
        if (typeof obj["WorkRelatedGroup"] != 'undefined') {
            var objW = new Object();
            objW = obj["WorkRelatedGroup"];

            XML.writeStartElement("eSituation.WorkRelatedGroup")

            if (typeof objW["eSituation.14"] != 'undefined') {
                if (objW["eSituation.14"].IsNull == false) {
                    XML.writeElementString("eSituation.14", objW["eSituation.14"].vSet[0]);
                }

                else {
                    if (typeof objW["eSituation.14"].NV != 'undefined') {
                        if (objW["eSituation.14"].NV == true) {
                            XML.writeStartElement('eSituation.14');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', objW["eSituation.14"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                }
            };
            if (typeof objW["eSituation.15"] != 'undefined') {
                if (objW["eSituation.15"].IsNull == false) {
                    XML.writeElementString("eSituation.15", objW["eSituation.15"].vSet[0]);
                }
            };
            if (typeof objW["eSituation.16"] != 'undefined') {
                if (objW["eSituation.16"].IsNull == false) {
                    XML.writeElementString("eSituation.16", objW["eSituation.16"].vSet[0]);
                }
            };
            XML.writeEndElement();

        };

        if (typeof obj["eSituation.17"] != 'undefined') {
            if (obj["eSituation.17"].IsNull == false) {
                for (var d = 0; d < obj["eSituation.17"].vSet.length ; d++) {
                    XML.writeElementString("eSituation.17", escapeXml(obj["eSituation.17"].vSet[d]));
                }
            }
            else {
                if (typeof obj["eSituation.17"].NV != 'undefined') {
                    if (obj["eSituation.17"].NV == true) {
                        XML.writeStartElement('eSituation.17');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eSituation.17"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            };
        };
        XML.writeEndElement();
    };


    if (typeof TheCall.eScene != 'undefined') {
        var obj = {};
        var obj = TheCall.eScene
        XML.writeStartElement("eScene")
        if (typeof obj["eScene.01"] != 'undefined') {
            if (obj["eScene.01"].IsNull == false) {
                XML.writeElementString("eScene.01", obj["eScene.01"].vSet[0]);
            }
            else {
                if (typeof obj["eScene.01"].NV != 'undefined') {
                    if (obj["eScene.01"].NV == true) {
                        XML.writeStartElement('eScene.01');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eScene.01"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };
        if (typeof obj["ResponderGroup"] != 'undefined') {
            for (var d = 0; d < obj["ResponderGroup"].length ; d++) {
                var obj1 = new Object();
                obj1 = obj["ResponderGroup"][d];
                XML.writeStartElement("eScene.ResponderGroup")

                if (typeof obj1["eScene.02"] != 'undefined') {
                    if (obj1["eScene.02"].IsNull == false) {
                        XML.writeElementString("eScene.02", escapeXml(obj1["eScene.02"].vSet[0]));
                    }
                };

                if (typeof obj1["eScene.03"] != 'undefined') {
                    if (obj1["eScene.03"].IsNull == false) {
                        XML.writeElementString("eScene.03", escapeXml(obj1["eScene.03"].vSet[0]));
                    }
                };

                if (typeof obj1["eScene.04"] != 'undefined') {
                    if (obj1["eScene.04"].IsNull == false) {
                        XML.writeElementString("eScene.04", obj1["eScene.04"].vSet[0]);
                    }
                };
                XML.writeEndElement();
            }
        };


        if (typeof obj["eScene.05"] != 'undefined') {
            if (obj["eScene.05"].IsNull == false) {
                XML.writeElementString("eScene.05", obj["eScene.05"].vSet[0]);
            }
        };

        if (typeof obj["eScene.06"] != 'undefined') {
            if (obj["eScene.06"].IsNull == false) {
                XML.writeElementString("eScene.06", obj["eScene.06"].vSet[0]);
            }
            else {
                if (typeof obj["eScene.06"].NV != 'undefined') {
                    if (obj["eScene.06"].NV == true) {
                        XML.writeStartElement('eScene.06');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eScene.06"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eScene.07"] != 'undefined') {
            if (obj["eScene.07"].IsNull == false) {
                XML.writeElementString("eScene.07", obj["eScene.07"].vSet[0]);
            }
            else {
                if (typeof obj["eScene.07"].NV != 'undefined') {
                    if (obj["eScene.07"].NV == true) {
                        XML.writeStartElement('eScene.07');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eScene.07"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eScene.08"] != 'undefined') {
            if (obj["eScene.08"].IsNull == false) {
                XML.writeElementString("eScene.08", obj["eScene.08"].vSet[0]);
            }
            else {
                if (typeof obj["eScene.08"].NV != 'undefined') {
                    if (obj["eScene.08"].NV == true) {
                        XML.writeStartElement('eScene.08');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eScene.08"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eScene.09"] != 'undefined') {
            if (obj["eScene.09"].IsNull == false) {
                XML.writeElementString("eScene.09", escapeXml(obj["eScene.09"].vSet[0]));
            }
            else {
                if (typeof obj["eScene.09"].NV != 'undefined') {
                    if (obj["eScene.09"].NV == true) {
                        XML.writeStartElement('eScene.09');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eScene.09"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eScene.10"] != 'undefined') {
            if (obj["eScene.10"].IsNull == false) {
                XML.writeElementString("eScene.10", obj["eScene.10"].vSet[0]);
            }
            else {
                if (typeof obj["eScene.10"].NV != 'undefined') {
                    if (obj["eScene.10"].NV == true) {
                        XML.writeStartElement('eScene.10');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eScene.10"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eScene.11"] != 'undefined') {
            if (obj["eScene.11"].IsNull == false) {
                XML.writeElementString("eScene.11", obj["eScene.11"].vSet[0]);
            }
        };

        if (typeof obj["eScene.12"] != 'undefined') {
            if (obj["eScene.12"].IsNull == false) {
                XML.writeElementString("eScene.12", obj["eScene.12"].vSet[0]);
            }
        };


        if (typeof obj["eScene.13"] != 'undefined') {
            if (obj["eScene.13"].IsNull == false) {
                XML.writeElementString("eScene.13", escapeXml(obj["eScene.13"].vSet[0]));
            }
        };

        if (typeof obj["eScene.14"] != 'undefined') {
            if (obj["eScene.14"].IsNull == false) {
                XML.writeElementString("eScene.14", escapeXml(obj["eScene.14"].vSet[0]));
            }
            else {
                if (typeof obj["eScene.14"].NV != 'undefined') {
                    if (obj["eScene.14"].NV == true) {
                        XML.writeStartElement('eScene.14');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eScene.14"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eScene.15"] != 'undefined') {
            if (obj["eScene.15"].IsNull == false) {
                XML.writeElementString("eScene.15", escapeXml(obj["eScene.15"].vSet[0]));
            }
            else {
                if (typeof obj["eScene.15"].NV != 'undefined') {
                    if (obj["eScene.15"].NV == true) {
                        XML.writeStartElement('eScene.15');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eScene.15"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eScene.16"] != 'undefined') {
            if (obj["eScene.16"].IsNull == false) {
                XML.writeElementString("eScene.16", escapeXml(obj["eScene.16"].vSet[0]));
            }
            else {
                if (typeof obj["eScene.16"].NV != 'undefined') {
                    if (obj["eScene.16"].NV == true) {
                        XML.writeStartElement('eScene.16');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eScene.16"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eScene.17"] != 'undefined') {
            if (obj["eScene.17"].IsNull == false) {
                XML.writeElementString("eScene.17", obj["eScene.17"].vSet[0]);
            }
            else {
                if (typeof obj["eScene.17"].NV != 'undefined') {
                    if (obj["eScene.17"].NV == true) {
                        XML.writeStartElement('eScene.17');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eScene.17"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eScene.18"] != 'undefined') {
            if (obj["eScene.18"].IsNull == false) {
                XML.writeElementString("eScene.18", obj["eScene.18"].vSet[0]);
            }
            else {
                if (typeof obj["eScene.18"].NV != 'undefined') {
                    if (obj["eScene.18"].NV == true) {
                        XML.writeStartElement('eScene.18');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eScene.18"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eScene.19"] != 'undefined') {
            if (obj["eScene.19"].IsNull == false) {
                XML.writeElementString("eScene.19", obj["eScene.19"].vSet[0]);
            }
            else {
                if (typeof obj["eScene.19"].NV != 'undefined') {
                    if (obj["eScene.19"].NV == true) {
                        XML.writeStartElement('eScene.19');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eScene.19"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eScene.20"] != 'undefined') {
            if (obj["eScene.20"].IsNull == false) {
                XML.writeElementString("eScene.20", escapeXml(obj["eScene.20"].vSet[0]));
            }
            else {
                if (typeof obj["eScene.20"].NV != 'undefined') {
                    if (obj["eScene.20"].NV == true) {
                        XML.writeStartElement('eScene.20');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eScene.20"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eScene.21"] != 'undefined') {
            if (obj["eScene.21"].IsNull == false) {
                XML.writeElementString("eScene.21", obj["eScene.21"].vSet[0]);
            }
            else {
                if (typeof obj["eScene.21"].NV != 'undefined') {
                    if (obj["eScene.21"].NV == true) {
                        XML.writeStartElement('eScene.21');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eScene.21"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eScene.22"] != 'undefined') {
            if (obj["eScene.22"].IsNull == false) {
                XML.writeElementString("eScene.22", obj["eScene.22"].vSet[0]);
            }
        };

        if (typeof obj["eScene.23"] != 'undefined') {
            if (obj["eScene.23"].IsNull == false) {
                XML.writeElementString("eScene.23", obj["eScene.23"].vSet[0]);
            }
        }
        XML.writeEndElement();
    };


    if (typeof TheCall.eAirway != 'undefined') {
        var obj = {};
        var obj = TheCall.eAirway
        if (typeof obj.AirwayGroup != 'undefined') {
            XML.writeStartElement("eAirway.AirwayGroup")
            if (typeof obj.AirwayGroup["eAirway.01"] != 'undefined') {
                if (obj.AirwayGroup["eAirway.01"].IsNull == false) {
                    for (var i = 0; i < obj.AirwayGroup["eAirway.01"].vSet.length; i++) {
                        XML.writeElementString("eAirway.01", obj.AirwayGroup["eAirway.01"].vSet[i]);

                    }
                }
                else {
                    if (typeof obj.AirwayGroup["eAirway.01"].NV != 'undefined') {
                        if (obj.AirwayGroup["eAirway.01"].NV == true) {
                            XML.writeStartElement('eAirway.01');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj.AirwayGroup["eAirway.01"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                }
            };


            if (typeof obj.ConfirmationGroup != 'undefined') {
                for (var d = 0; d < obj.AirwayGroup["ConfirmationGroup"].vSet.length ; d++) {
                    var obj1 = {};
                    XML.writeStartElement("eAirway.ConfirmationGroup");

                    if (typeof obj1["eAirway.02"] != 'undefined') {
                        if (obj1["eAirway.02"].IsNull == false) {
                            XML.writeElementString("eAirway.02", obj1["eAirway.02"].vSet[0]);
                        }
                        else {
                            if (typeof obj1["eAirway.02"].NV != 'undefined') {
                                if (obj1["eAirway.02"].NV == true) {
                                    XML.writeStartElement("eAirway.02");
                                    XML.writeAttributeString('xsi:nil', 'true');
                                    XML.writeAttributeString('NV', obj1["eAirway.02"].vSet[0]);
                                    XML.writeEndElement();
                                }
                            }
                        }
                    };

                    if (typeof obj1["eAirway.03"] != 'undefined') {
                        if (obj1["eAirway.03"].IsNull == false) {
                            XML.writeElementString("eAirway.03", obj1["eAirway.03"].vSet[0]);
                        }
                        else {
                            if (typeof obj1["eAirway.03"].NV != 'undefined') {
                                if (obj1["eAirway.03"].NV == true) {
                                    XML.writeStartElement("eAirway.03");
                                    XML.writeAttributeString('xsi:nil', 'true');
                                    XML.writeAttributeString('NV', obj1["eAirway.03"].vSet[0]);
                                    XML.writeEndElement();
                                }
                            }
                        }
                    };

                    if (typeof obj1["eAirway.04"] != 'undefined') {
                        if (obj1["eAirway.04"].IsNull == false) {
                            for (var i = 0; i < obj.AirwayGroup["ConfirmationGroup"][d]["eAirway.04"].vSet.length ; i++) {
                                {
                                    XML.writeElementString("eAirway.04", obj1["eAirway.04"].vSet[i]);
                                }
                            }
                        }
                        else {
                            if (typeof obj1["eAirway.04"].NV != 'undefined') {
                                if (obj1["eAirway.04"].NV == true) {
                                    XML.writeStartElement("eAirway.04");
                                    XML.writeAttributeString('xsi:nil', 'true');
                                    XML.writeAttributeString('NV', obj1["eAirway.04"].vSet[0]);
                                    XML.writeEndElement();
                                };
                            }
                        }
                    };


                    if (typeof obj1["eAirway.05"] != 'undefined') {
                        if (obj1["eAirway.05"].IsNull == false) {
                            XML.writeElementString("eAirway.05", obj1["eAirway.05"].vSet[0]);
                        }
                        else {
                            if (typeof obj1["eAirway.05"].NV != 'undefined') {
                                if (obj1["eAirway.05"].NV == true) {
                                    XML.writeStartElement("eAirway.05");
                                    XML.writeAttributeString('xsi:nil', 'true');
                                    XML.writeAttributeString('NV', obj1["eAirway.05"].vSet[0]);
                                    XML.writeEndElement();
                                }
                            }
                        }
                    };

                    if (typeof obj1["eAirway.06"] != 'undefined') {
                        if (obj1["eAirway.06"].IsNull == false) {
                            XML.writeElementString("eAirway.06", obj1["eAirway.06"].vSet[0]);
                        }
                        else {
                            if (typeof obj1["eAirway.06"].NV != 'undefined') {
                                if (obj1["eAirway.06"].NV == true) {
                                    XML.writeStartElement("eAirway.06");
                                    XML.writeAttributeString('xsi:nil', 'true');
                                    XML.writeAttributeString('NV', obj1["eAirway.06"].vSet[0]);
                                    XML.writeEndElement();
                                }
                            }
                        }
                    };


                    if (typeof obj1["eAirway.07"] != 'undefined') {
                        if (obj1["eAirway.07"].IsNull == false) {
                            XML.writeElementString("eAirway.07", obj1["eAirway.07"].vSet[0]);
                        }
                        else {
                            if (typeof obj1["eAirway.07"].NV != 'undefined') {
                                if (obj1["eAirway.07"].NV == true) {

                                    XML.writeStartElement("eAirway.07");
                                    XML.writeAttributeString('xsi:nil', 'true');
                                    XML.writeAttributeString('NV', obj1["eAirway.07"].vSet[0]);
                                    XML.writeEndElement();
                                }
                            }
                        }
                    };

                    if (typeof obj1["eAirway.08"] != 'undefined') {
                        if (obj1["eAirway.08"].IsNull == false) {
                            for (var i = 0; i < obj1["eAirway.08"].vSet.length ; i++) {
                                {
                                    XML.writeElementString("eAirway.08", obj1["eAirway.08"].vSet[i]);
                                }
                            }
                        }
                        else {
                            if (typeof obj1["eAirway.08"].NV != 'undefined') {
                                if (obj1["eAirway.08"].NV == true) {
                                    XML.writeStartElement("eAirway.08");
                                    XML.writeAttributeString('xsi:nil', 'true');
                                    XML.writeAttributeString('NV', obj1["eAirway.08"].vSet[0]);
                                    XML.writeEndElement();
                                }
                            }
                        }
                    };


                    if (typeof obj1["eAirway.09"] != 'undefined') {
                        if (obj1["eAirway.09"].IsNull == false) {
                            for (var i = 0; i < obj1["eAirway.09"].vSet.length ; i++) {
                                {
                                    XML.writeElementString("eAirway.09", obj1["eAirway.09"].vSet[i]);
                                }
                            }
                        }
                        else {
                            if (typeof obj1["eAirway.09"].NV != 'undefined') {
                                if (obj1["eAirway.09"].NV == true) {
                                    XML.writeStartElement("eAirway.09");
                                    XML.writeAttributeString('xsi:nil', 'true');
                                    XML.writeAttributeString('NV', obj1["eAirway.09"].vSet[0]);
                                    XML.writeEndElement();
                                }
                            }
                        }
                    };
                    XML.writeEndElement();
                };
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

            XML.writeEndElement();
        }
    };

    if (typeof TheCall.eArrest != 'undefined') {
        var obj = {};
        var obj = TheCall.eArrest
        XML.writeStartElement("eArrest")
        if (typeof obj["eArrest.01"] != 'undefined') {
            if (obj["eArrest.01"].IsNull == false) {
                XML.writeElementString("eArrest.01", obj["eArrest.01"].vSet[0]);
            }
            else {
                if (typeof obj["eArrest.01"].NV != 'undefined') {
                    if (obj["eArrest.01"].NV == true) {
                        XML.writeStartElement('eArrest.01');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eArrest.01"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eArrest.02"] != 'undefined') {
            if (obj["eArrest.02"].IsNull == false) {
                XML.writeElementString("eArrest.02", obj["eArrest.02"].vSet[0]);
            }
            else {
                if (typeof obj["eArrest.02"].NV != 'undefined') {
                    if (obj["eArrest.02"].NV == true) {
                        XML.writeStartElement('eArrest.02');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eArrest.02"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eArrest.03"] != 'undefined') {
            if (obj["eArrest.03"].IsNull == false) {
                for (var i = 0; i < obj["eArrest.03"].vSet.length; i++) {
                    XML.writeElementString("eArrest.03", obj["eArrest.03"].vSet[i]);
                }
            }
            else {
                if (typeof obj["eArrest.03"].NV != 'undefined') {
                    if (obj["eArrest.03"].NV == true) {
                        XML.writeStartElement('eArrest.03');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eArrest.03"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eArrest.04"] != 'undefined') {
            if (obj["eArrest.04"].IsNull == false) {
                for (var i = 0; i < obj["eArrest.04"].vSet.length; i++) {
                    XML.writeElementString("eArrest.04", obj["eArrest.04"].vSet[i]);
                }
            }
            else {
                if (typeof obj["eArrest.04"].NV != 'undefined') {
                    if (obj["eArrest.04"].NV == true) {
                        XML.writeStartElement('eArrest.04');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eArrest.04"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eArrest.05"] != 'undefined') {
            if (obj["eArrest.05"].IsNull == false) {
                XML.writeElementString("eArrest.05", obj["eArrest.05"].vSet[0]);
            }
            else {
                if (typeof obj["eArrest.05"].NV != 'undefined') {
                    if (obj["eArrest.05"].NV == true) {
                        XML.writeStartElement('eArrest.05');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eArrest.05"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eArrest.06"] != 'undefined') {
            if (obj["eArrest.06"].IsNull == false) {
                for (var i = 0; i < obj["eArrest.06"].vSet.length; i++) {
                    XML.writeElementString("eArrest.06", obj["eArrest.06"].vSet[i]);
                }
            }
        };

        if (typeof obj["eArrest.07"] != 'undefined') {
            if (obj["eArrest.07"].IsNull == false) {
                XML.writeElementString("eArrest.07", obj["eArrest.07"].vSet[0]);
            }
            else {
                if (typeof obj["eArrest.07"].NV != 'undefined') {
                    if (obj["eArrest.07"].NV == true) {
                        XML.writeStartElement('eArrest.07');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eArrest.07"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };
        if (typeof obj["eArrest.08"] != 'undefined') {
            if (obj["eArrest.08"].IsNull == false) {
                for (var i = 0; i < obj["eArrest.08"].vSet.length; i++) {
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
                if (typeof obj["eArrest.09"].NV != 'undefined') {
                    if (obj["eArrest.09"].NV == true) {
                        XML.writeStartElement('eArrest.09');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eArrest.09"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eArrest.10"] != 'undefined') {
            if (obj["eArrest.10"].IsNull == false) {
                XML.writeElementString("eArrest.10", obj["eArrest.10"].vSet[0]);
            }
            else {
                if (typeof obj["eArrest.10"].NV != 'undefined') {
                    if (obj["eArrest.10"].NV == true) {
                        XML.writeStartElement('eArrest.10');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eArrest.10"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eArrest.11"] != 'undefined') {
            if (obj["eArrest.11"].IsNull == false) {
                XML.writeElementString("eArrest.11", obj["eArrest.11"].vSet[0]);
            }
            else {
                if (typeof obj["eArrest.11"].NV != 'undefined') {
                    if (obj["eArrest.11"].NV == true) {
                        XML.writeStartElement('eArrest.11');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eArrest.11"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eArrest.12"] != 'undefined') {
            if (obj["eArrest.12"].IsNull == false) {
                for (var i = 0; i < obj["eArrest.12"].vSet.length; i++) {
                    XML.writeElementString("eArrest.12", obj["eArrest.12"].vSet[i]);
                }
            }
            else {
                if (typeof obj["eArrest.12"].NV != 'undefined') {
                    if (obj["eArrest.12"].NV == true) {
                        XML.writeStartElement('eArrest.12');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eArrest.12"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };
        if (typeof obj["eArrest.13"] != 'undefined') {
            if (obj["eArrest.13"].IsNull == false) {
                XML.writeElementString("eArrest.13", obj["eArrest.13"].vSet[0]);
            }
        };


        if (typeof obj["eArrest.14"] != 'undefined') {
            if (obj["eArrest.14"].IsNull == false) {
                XML.writeElementString("eArrest.14", obj["eArrest.14"].vSet[0]);
            }
            else {
                if (typeof obj["eArrest.14"].NV != 'undefined') {
                    if (obj["eArrest.14"].NV == true) {
                        XML.writeStartElement('eArrest.14');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eArrest.14"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eArrest.15"] != 'undefined') {
            if (obj["eArrest.15"].IsNull == false) {
                XML.writeElementString("eArrest.15", obj["eArrest.15"].vSet[0]);
            }
            else {
                if (typeof obj["eArrest.15"].NV != 'undefined') {
                    if (obj["eArrest.15"].NV == true) {
                        XML.writeStartElement('eArrest.15');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eArrest.15"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eArrest.16"] != 'undefined') {
            if (obj["eArrest.16"].IsNull == false) {
                XML.writeElementString("eArrest.16", obj["eArrest.16"].vSet[0]);
            }
            else {
                if (typeof obj["eArrest.16"].NV != 'undefined') {
                    if (obj["eArrest.16"].NV == true) {
                        XML.writeStartElement('eArrest.16');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eArrest.16"].vSet[0]);
                        XML.writeEndElement();
                    }
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
                if (typeof obj["eArrest.17"].NV != 'undefined') {
                    if (obj["eArrest.17"].NV == true) {
                        XML.writeStartElement('eArrest.17');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eArrest.17"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eArrest.18"] != 'undefined') {
            if (obj["eArrest.18"].IsNull == false) {
                XML.writeElementString("eArrest.18", obj["eArrest.18"].vSet[0]);
            }
            else {
                if (typeof obj["eArrest.18"].NV != 'undefined') {
                    if (obj["eArrest.18"].NV == true) {
                        XML.writeStartElement('eArrest.18');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eArrest.18"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };
        XML.writeEndElement();
    };


    if (typeof TheCall.eOutcome != 'undefined') {
        var obj = {};
        var obj = TheCall.eOutcome
        XML.writeStartElement("eOutcome")
        if (typeof obj["eOutcome.01"] != 'undefined') {
            if (obj["eOutcome.01"].IsNull == false) {
                XML.writeElementString("eOutcome.01", obj["eOutcome.01"].vSet[0]);
            }
            else {
                if (typeof obj["eOutcome.01"].NV != 'undefined') {
                    if (obj["eOutcome.01"].NV == true) {
                        XML.writeStartElement('eOutcome.01');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eOutcome.01"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eOutcome.02"] != 'undefined') {
            if (obj["eOutcome.02"].IsNull == false) {
                XML.writeElementString("eOutcome.02", obj["eOutcome.02"].vSet[0]);
            }
            else {
                if (typeof obj["eOutcome.02"].NV != 'undefined') {
                    if (obj["eOutcome.02"].NV == true) {
                        XML.writeStartElement('eOutcome.02');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eOutcome.02"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };
        if (typeof obj["ExternalDataGroup"] != 'undefined') {
            for (var i = 0; i <= obj["ExternalDataGroup"].length - 1; i++) {
                var obj1 = {}
                XML.writeStartElement("eOutcome.ExternalDataGroup");
                if (typeof obj1["eOutcome.03"] != 'undefined') {
                    if (obj1["eOutcome.03"].IsNull == false) {
                        XML.writeElementString("eOutcome.03", obj1["eOutcome.03"].vSet[0]);
                    }
                };
                if (typeof obj1["eOutcome.04"] != 'undefined') {
                    if (obj1["eOutcome.04"].IsNull == false) {
                        XML.writeElementString("eOutcome.04", escapeXml(obj1["eOutcome.04"].vSet[0]));
                    }
                };

                if (typeof obj1["eOutcome.05"] != 'undefined') {
                    if (obj1["eOutcome.05"].IsNull == false) {
                        XML.writeElementString("eOutcome.05", escapeXml(obj1["eOutcome.05"].vSet[0]));
                    }
                };
                XML.writeEndElement();
            };
        };

        if (typeof obj["eOutcome.06"] != 'undefined') {
            if (obj["eOutcome.06"].IsNull == false) {
                XML.writeElementString("eOutcome.06", escapeXml(obj["eOutcome.06"].vSet[0]));
            }
        };

        if (typeof obj["eOutcome.07"] != 'undefined') {
            if (obj["eOutcome.07"].IsNull == false) {
                XML.writeElementString("eOutcome.07", obj["eOutcome.07"].vSet[0]);
            }
        };

        if (typeof obj["eOutcome.08"] != 'undefined') {
            if (obj["eOutcome.08"].IsNull == false) {
                XML.writeElementString("eOutcome.08", escapeXml(obj["eOutcome.08"].vSet[0]));
            }
        };

        if (typeof obj["eOutcome.09"] != 'undefined') {
            if (obj["eOutcome.09"].IsNull == false) {
                for (var i = 0; i <= obj["eOutcome.09"].vSet.length - 1 ; i++) {
                    XML.writeElementString("eOutcome.09", escapeXml(obj["eOutcome.09"].vSet[i]));
                }
            }
        };

        if (typeof obj["eOutcome.10"] != 'undefined') {
            if (obj["eOutcome.10"].IsNull == false) {
                for (var i = 0; i <= obj["eOutcome.10"].vSet.length - 1; i++) {
                    XML.writeElementString("eOutcome.10", escapeXml(obj["eOutcome.10"].vSet[i]));
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
                    XML.writeElementString("eOutcome.12", escapeXml(obj["eOutcome.12"].vSet[i]));
                }
            }
        };

        if (typeof obj["eOutcome.13"] != 'undefined') {
            if (obj["eOutcome.13"].IsNull == false) {
                for (var i = 0; i <= obj["eOutcome.13"].vSet.length - 1; i++) {
                    XML.writeElementString("eOutcome.13", escapeXml(obj["eOutcome.13"].vSet[i]));
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
    if (typeof TheCall.eDevice != 'undefined') {
        if (typeof TheCall.eDevice.DeviceGroup != 'undefined') {
            XML.writeStartElement("eDevice")
            for (var i = 0; i <= TheCall.eDevice.DeviceGroup.length; i++) {
                XML.writeStartElement("eDevice.DeviceGroup")
                var obj = TheCall.eDevice.DeviceGroup[i];
                XML.writeStartElement("eDevice")
                if (typeof obj["eDevice.01"] != 'undefined') {
                    if (obj["eDevice.01"].IsNull == false) {
                        XML.writeElementString("eDevice.01", obj["eDevice.01"].vSet[0]);
                    }
                };

                if (typeof obj["eDevice.02"] != 'undefined') {
                    if (obj["eDevice.02"].IsNull == false) {
                        XML.writeElementString("eDevice.02", obj["eDevice.02"].vSet[0]);
                    }
                };

                if (typeof obj["eDevice.02"] != 'undefined') {
                    if (obj["eDevice.02"].IsNull == false) {
                        for (var i = 0; i <= obj["eDevice.02"].length; i++)
                            XML.writeElementString("eDevice.02", obj["eDevice.02"][i].vSet[0]);
                    }
                };
                if (obj["WaveformGroup"] != 'undefined') {
                    XML.writeStartElement("eDevice.WaveformGroup")
                    if (typeof obj["WaveformGroup"]["eDevice.04"] != 'undefined') {
                        if (obj["WaveformGroup"]["eDevice.04"].IsNull == false) {
                            XML.writeElementString("eDevice.04", obj["WaveformGroup"]["eDevice.04"].vSet[0]);
                        }
                    };

                    if (typeof obj["WaveformGroup"]["eDevice.05"] != 'undefined') {
                        if (obj["WaveformGroup"]["eDevice.05"].IsNull == false) {
                            XML.writeElementString("eDevice.05", obj["WaveformGroup"]["eDevice.05"].vSet[0]);
                        }
                    };

                    if (typeof obj["WaveformGroup"]["eDevice.06"] != 'undefined') {
                        if (obj["WaveformGroup"]["eDevice.06"].IsNull == false) {
                            XML.writeElementString("eDevice.06", obj["WaveformGroup"]["eDevice.06"].vSet[0]);
                        }
                    }
                    XML.writeEndElement();
                };

                if (typeof obj["eDevice.07"] != 'undefined') {
                    if (obj["eDevice.07"].IsNull == false) {
                        for (var i = 0; i <= obj["eDevice.07"].length; i++)
                            XML.writeElementString("eDevice.07", obj["eDevice.07"][i].vSet[0]);
                    }
                };

                if (typeof obj["eDevice.08"] != 'undefined') {
                    if (obj["eDevice.08"].IsNull == false) {
                        XML.writeElementString("eDevice.08", obj["eDevice.08"].vSet[0]);
                    }
                };

                if (obj["ShockGroup"] != 'undefined') {
                    XML.writeStartElement("eDevice.ShockGroup")
                    if (typeof obj["ShockGroup"]["eDevice.09"] != 'undefined') {
                        if (obj["ShockGroup"]["eDevice.09"].IsNull == false) {
                            XML.writeElementString("eDevice.09", obj["ShockGroup"]["eDevice.09"].vSet[0]);
                        }
                    };

                    if (typeof obj["ShockGroup"]["eDevice.10"] != 'undefined') {
                        if (obj["ShockGroup"]["eDevice.10"].IsNull == false) {
                            XML.writeElementString("eDevice.10", obj["ShockGroup"]["eDevice.10"].vSet[0]);
                        }
                    };
                    if (typeof obj["ShockGroup"]["eDevice.11"] != 'undefined') {
                        if (obj["ShockGroup"]["eDevice.11"].IsNull == false) {
                            XML.writeElementString("eDevice.11", obj["ShockGroup"]["eDevice.11"].vSet[0]);
                        }
                    };
                    if (typeof obj["ShockGroup"]["eDevice.12"] != 'undefined') {
                        if (obj["ShockGroup"]["eDevice.12"].IsNull == false) {
                            XML.writeElementString("eDevice.12", obj["ShockGroup"]["eDevice.12"].vSet[0]);
                        }
                    };
                    XML.writeEndElement();
                };
                XML.writeEndElement();
            };
            XML.writeEndElement();
        }
    };

    if (typeof TheCall.eOther != 'undefined') {
        var obj = {};
        var obj = TheCall.eOther
        XML.writeStartElement("eOther")
        if (typeof obj["eOther.01"] != 'undefined') {
            if (obj["eOther.01"].IsNull == false) {
                XML.writeElementString("eOther.01", obj["eOther.01"].vSet);
            }
        };

        if (typeof obj["eOther.02"] != 'undefined') {
            if (obj["eOther.02"].IsNull == false) {
                XML.writeElementString("eOther.02", obj["eOther.02"].vSet[0]);
            }
        };

        if (typeof obj["EMSCrewMemberGroup"] != 'undefined') {
            for (var i = 0; i <= obj.EMSCrewMemberGroup.length - 1; i++) {
                var cmObj = {};
                cmObj = obj.EMSCrewMemberGroup[i];
                XML.writeStartElement("eOther.EMSCrewMemberGroup");

                if (typeof cmObj["eOther.03"] != 'undefined') {
                    if (cmObj["eOther.03"].IsNull == false) {
                        for (var d = 0; d <= cmObj["eOther.03"].vSet.length - d; d++) {
                            XML.writeElementString("eOther.03", cmObj["eOther.03"].vSet[d]);
                        }
                    };


                    if (typeof cmObj["eOther.04"] != 'undefined') {
                        if (cmObj["eOther.04"].IsNull == false) {
                            XML.writeElementString("eOther.04", cmObj["eOther.04"].vSet[0]);
                        }
                    };


                    if (typeof cmObj["eOther.05"] != 'undefined') {
                        if (cmObj["eOther.05"].IsNull == false) {
                            XML.writeElementString("eOther.05", cmObj["eOther.05"].vSet[0]);
                        }
                        else {
                            if (typeof cmObj["eOther.05"].NV != 'undefined') {
                                if (cmObj["eOther.05"].NV == true) {
                                    XML.writeStartElement('eOther.05');
                                    XML.writeAttributeString('xsi:nil', 'true');
                                    XML.writeAttributeString('NV', cmObj["eOther.05"].vSet[0]);
                                    XML.writeEndElement();
                                }
                            }
                        }
                    };


                    if (typeof cmObj["eOther.06"] != 'undefined') {
                        if (cmObj["eOther.06"].IsNull == false) {
                            XML.writeElementString("eOther.06", cmObj["eOther.06"].vSet[0]);
                        }
                        else {
                            if (typeof cmObj["eOther.06"].NV != 'undefined') {
                                if (cmObj["eOther.06"].NV == true) {
                                    XML.writeStartElement('eOther.06');
                                    XML.writeAttributeString('xsi:nil', 'true');
                                    XML.writeAttributeString('NV', cmObj["eOther.06"].vSet[0]);
                                    XML.writeEndElement();
                                }
                            }
                        }
                    };
                    XML.writeEndElement();
                }
            }
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
                XML.writeElementString("eOther.08", obj["eOther.08"].vSet[0]);
            }
            else {
                if (typeof cmObj["eOther.08"].NV != 'undefined') {
                    if (obj["eOther.08"].NV == true) {
                        XML.writeStartElement('eOther.08');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eOther.08"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };


        if (typeof obj["FileGroup"] != 'undefined') {

            for (var i = 0; i <= obj["FileGroup"].length - 1; i++) {
                var obj2 = {}
                obj2 = obj["FileGroup"][i]
                XML.writeStartElement("eOther.FileGroup");

                if (typeof obj2["eOther.09"] != 'undefined') {
                    if (obj2["eOther.09"].IsNull == false) {
                        XML.writeElementString("eOther.09", obj2["eOther.09"].vSet[0]);
                    }
                };

                if (typeof obj2["eOther.10"] != 'undefined') {
                    if (obj2["eOther.10"].IsNull == false) {
                        XML.writeElementString("eOther.10", obj2["eOther.10"].vSet[0]);
                    }
                };

                if (typeof obj2["eOther.11"] != 'undefined') {
                    if (obj2["eOther.11"].IsNull == false) {
                        XML.writeElementString("eOther.11", obj2["eOther.11"].vSet[0]);
                    }
                };
                XML.writeEndElement();
            }
        };
        if (typeof obj["SignatureGroup"] != 'undefined') {
            for (var i = 0; i <= obj["SignatureGroup"].length - 1; i++) {
                var obj3 = {};
                obj3 = obj["SignatureGroup"][i];
                XML.writeStartElement("eOther.SignatureGroup");

                if (typeof obj3["eOther.12"] != 'undefined') {
                    if (obj3["eOther.12"].IsNull == false) {
                        XML.writeElementString("eOther.12", obj3["eOther.12"].vSet[0]);
                    }
                };
                if (typeof obj3["eOther.13"] != 'undefined') {
                    if (obj3["eOther.13"].IsNull == false) {
                        XML.writeElementString("eOther.13", obj3["eOther.13"].vSet[0]);
                    }
                };
                if (typeof obj3["eOther.14"] != 'undefined') {
                    if (obj3["eOther.14"].IsNull == false) {
                        XML.writeElementString("eOther.14", obj3["eOther.14"].vSet[0]);
                    }
                };
                if (typeof obj3["eOther.15"] != 'undefined') {
                    if (obj3["eOther.15"].IsNull == false) {
                        XML.writeElementString("eOther.15", obj3["eOther.15"].vSet[0]);
                    }
                };
                if (typeof obj3["eOther.16"] != 'undefined') {
                    if (obj3["eOther.16"].IsNull == false) {
                        XML.writeElementString("eOther.16", obj3["eOther.16"].vSet[0]);
                    }
                };
                if (typeof obj3["eOther.17"] != 'undefined') {
                    if (obj3["eOther.17"].IsNull == false) {
                        XML.writeElementString("eOther.17", obj3["eOther.17"].vSet[0]);
                    }
                };
                if (typeof obj3["eOther.18"] != 'undefined') {
                    if (obj3["eOther.18"].IsNull == false) {
                        XML.writeElementString("eOther.18", obj3["eOther.18"].vSet[0]);
                    }
                };
                if (typeof obj3["eOther.19"] != 'undefined') {
                    if (obj3["eOther.19"].IsNull == false) {
                        XML.writeElementString("eOther.19", obj3["eOther.19"].vSet[0]);
                    }
                };
                if (typeof obj3["eOther.20"] != 'undefined') {
                    if (obj3["eOther.20"].IsNull == false) {
                        XML.writeElementString("eOther.20", obj3["eOther.20"].vSet[0]);
                    }
                };
                if (typeof obj3["eOther.21"] != 'undefined') {
                    if (obj3["eOther.21"].IsNull == false) {
                        XML.writeElementString("eOther.21", obj3["eOther.21"].vSet[0]);
                    }
                };
                XML.writeEndElement();
            }
        };

        XML.writeEndElement();
    };

    if (typeof TheCall.eInjury != 'undefined') {
        var obj = {};
        var obj = TheCall.eInjury;
        XML.writeStartElement("eInjury");
        if (typeof obj["eInjury.01"] != 'undefined') {
            if (obj["eInjury.01"].IsNull == false) {
                for (var i = 0; i < obj["eInjury.01"].vSet.length; i++) {
                    XML.writeElementString("eInjury.01", escapeXml(obj["eInjury.01"].vSet[i]));
                }
            }
            else {
                if (typeof obj["eInjury.01"].NV != 'undefined') {
                    if (obj["eInjury.01"].NV == true) {
                        XML.writeStartElement('eInjury.01');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eInjury.01"].vSet[0]);
                        XML.writeEndElement();
                    }
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
                    if (obj["eInjury.02"].NV == true) {
                        XML.writeStartElement('eInjury.02');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eInjury.02"].vSet[0]);
                        XML.writeEndElement();
                    }
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
                    if (obj["eInjury.03"].NV == true) {
                        XML.writeStartElement('eInjury.03');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eInjury.03"].vSet[0]);
                        XML.writeEndElement();
                    }
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
                    if (obj["eInjury.04"].NV == true) {
                        XML.writeStartElement('eInjury.04');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eInjury.04"].vSet[0]);
                        XML.writeEndElement();
                    }
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
                    if (obj["eInjury.07"].NV == true) {
                        XML.writeStartElement('eInjury.07');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eInjury.07"].vSet[0]);
                        XML.writeEndElement();
                    }
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
                    if (obj["eInjury.10"].NV == true) {
                        XML.writeStartElement('eInjury.10');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eInjury.10"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["CollisionGroup"] != 'undefined') {
            XML.writeStartElement("eInjury.CollisionGroup");
            if (typeof obj["eInjury.11"] != 'undefined') {
                if (obj["eInjury.11"].IsNull == false) {
                    XML.writeElementString("eInjury.11", escapeXml(obj["eInjury.11"].vSet[0]));
                }
            };

            if (typeof obj["eInjury.12"] != 'undefined') {
                if (obj["eInjury.12"].IsNull == false) {
                    XML.writeElementString("eInjury.12", escapeXml(obj["eInjury.12"].vSet[0]));
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
                        if (obj["eInjury.13"].NV == true) {
                            XML.writeStartElement('eInjury.13');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eInjury.13"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                }
            };

            if (typeof obj["eInjury.14"] != 'undefined') {
                if (obj["eInjury.14"].IsNull == false) {
                    iJ["eInjury.14"] = obj["eInjury.14"].vSet[0];
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
                    XML.writeElementString("eInjury.16", escapeXml(obj["eInjury.16"].vSet[0]));
                }
            };


            if (typeof obj["eInjury.17"] != 'undefined') {
                if (obj["eInjury.17"].IsNull == false) {
                    XML.writeElementString("eInjury.17", escapeXml(obj["eInjury.17"].vSet[0]));
                }
            };

            if (typeof obj["eInjury.18"] != 'undefined') {
                if (obj["eInjury.18"].IsNull == false) {
                    XML.writeElementString("eInjury.18", escapeXml(obj["eInjury.18"].vSet[0]));
                }
            };

            if (typeof obj["eInjury.19"] != 'undefined') {
                if (obj["eInjury.19"].IsNull == false) {
                    XML.writeElementString("eInjury.19", escapeXml(obj["eInjury.19"].vSet[0]));
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
                        if (obj["eInjury.22"].NV == true) {
                            XML.writeStartElement('eInjury.22');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eInjury.22"].vSet[0]);
                            XML.writeEndElement();
                        }
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


        if (typeof obj["SeatGroup"] != 'undefined') {

            for (var i = 0; i < obj["SeatGroup"].vSet.length; i++) {
                var obj1 = {};
                obj1 = obj.SeatGroup[i]
                XML.writeStartElement("eInjury.SeatGroup");
                if (typeof obj1["eInjury.26"] != 'undefined') {
                    if (obj1["eInjury.26"].IsNull == false) {
                        XML.writeElementString("eInjury.26", obj1["eInjury.26"].vSet[0]);
                    }
                };

                if (typeof obj1["eInjury.27"] != 'undefined') {
                    if (obj1["eInjury.27"].IsNull == false) {
                        XML.writeElementString("eInjury.27", obj1["eInjury.27"].vSet[0]);
                    }
                };

                if (typeof obj1["eInjury.28"] != 'undefined') {
                    if (obj1["eInjury.28"].IsNull == false) {
                        XML.writeElementString("eInjury.28", obj1["eInjury.28"].vSet[0]);
                    }
                };
                if (typeof obj1["eInjury.29"] != 'undefined') {
                    if (obj1["eInjury.29"].IsNull == false) {
                        XML.writeElementString("eInjury.29", obj1["eInjury.29"].vSet[0]);
                    }
                };
                XML.writeEndElement();
            }
        };
        XML.writeEndElement();

    };

    //eNarrative
    if (typeof TheCall.eNarrative != 'undefined') {

        if (typeof TheCall.eNarrative["eNarrative.01"] != 'undefined') {

            if (TheCall.eNarrative["eNarrative.01"].IsNull == false) {
                XML.writeStartElement("eNarrative");
                XML.writeElementString("eNarrative.01", escapeXml(TheCall.eNarrative["eNarrative.01"].vSet[0]));
                XML.writeEndElement();
            }
            else {
                if (typeof TheCall.eNarrative["eNarrative.01"].NV != 'undefined') {
                    if (TheCall.eNarrative["eNarrative.01"].NV == true) {

                        XML.writeStartElement("eNarrative");
                        XML.writeStartElement('eNarrative.01');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', TheCall.eNarrative["eNarrative.01"].vSet[0]);
                        XML.writeEndElement();
                        XML.writeEndElement();
                    }
                }
            }
        }
    };

    if (typeof TheCall.eExam != 'undefined') {
        var obj = {};
        var obj = TheCall.eExam
        XML.writeStartElement("eExam");
        if (typeof obj["eExam.01"] != 'undefined') {
            if (obj["eExam.01"].IsNull == false) {
                if (obj["eExam.01"].vSet[0] !== null) {
                    XML.writeElementString("eExam.01", obj["eExam.01"].vSet[0]);
                }
            }
            else {
                if (typeof obj["eExam.01"].NV != 'undefined') {
                    if (obj["eExam.01"].NV == true) {
                        XML.writeStartElement('eExam.01');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eExam.01"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };

        if (typeof obj["eExam.02"] != 'undefined') {
            if (obj["eExam.02"].IsNull == false) {
                if (obj["eExam.02"].vSet[0] !== null) {
                    XML.writeElementString("eExam.02", obj["eExam.02"].vSet[0]);
                }
            }
            else {
                if (typeof obj["eExam.02"].NV != 'undefined') {
                    if (obj["eExam.02"].NV == true) {
                        XML.writeStartElement('eExam.02');
                        XML.writeAttributeString('xsi:nil', 'true');
                        XML.writeAttributeString('NV', obj["eExam.02"].vSet[0]);
                        XML.writeEndElement();
                    }
                }
            }
        };
        if (typeof obj["AssessmentGroup"] != 'undefined') {
            if (typeof obj["AssessmentGroup"] != 'undefined') {

                for (var x = 0; x < obj["AssessmentGroup"].length; x++) {
                    var aObj = {};
                    aObj = obj["AssessmentGroup"][x];
                    XML.writeStartElement("eExam.AssessmentGroup");
                    if (typeof aObj["eExam.03"] != 'undefined') {
                        if (aObj["eExam.03"].IsNull == false) {
                            if (aObj["eExam.03"].vSet[0] !== null) {
                                XML.writeElementString("eExam.03", aObj["eExam.03"].vSet[0]);
                            }
                        }
                    };

                    if (typeof aObj["eExam.04"] != 'undefined') {
                        if (aObj["eExam.04"].IsNull == false) {
                            for (var i = 0; i < aObj["eExam.04"].vSet.length; i++) {
                                if (aObj["eExam.04"].vSet[i] !== null) {
                                    XML.writeElementString("eExam.04", aObj["eExam.04"].vSet[i]);
                                }
                            }
                        };
                    };
                    if (typeof aObj["eExam.05"] != 'undefined') {
                        if (aObj["eExam.05"].IsNull == false) {
                            for (var i = 0; i < aObj["eExam.05"].vSet.length; i++) {
                                if (aObj["eExam.05"].vSet[i] !== null) {
                                    if (aObj["eExam.05"].vSet[i] !== null) {
                                        XML.writeElementString("eExam.05", aObj["eExam.05"].vSet[i]);
                                    }
                                }
                            }
                        }
                    };


                    if (typeof aObj["eExam.06"] != 'undefined') {
                        if (aObj["eExam.06"].IsNull == false) {
                            for (var i = 0; i < aObj["eExam.06"].vSet.length; i++) {
                                if (aObj["eExam.06"].vSet[i] !== null) {
                                    XML.writeElementString("eExam.06", aObj["eExam.06"].vSet[i]);
                                }
                            }
                        }
                    };

                    if (typeof aObj["eExam.07"] != 'undefined') {
                        if (aObj["eExam.07"].IsNull == false) {
                            for (var i = 0; i < aObj["eExam.07"].vSet.length; i++) {
                                if (aObj["eExam.07"].vSet[i] !== null) {
                                    XML.writeElementString("eExam.07", aObj["eExam.07"].vSet[i]);
                                }
                            }
                        }
                    };


                    if (typeof aObj["eExam.08"] != 'undefined') {
                        if (aObj["eExam.08"].IsNull == false) {
                            for (var i = 0; i < aObj["eExam.08"].vSet.length; i++) {
                                if (aObj["eExam.08"].vSet[i] !== null) {
                                    XML.writeElementString("eExam.08", aObj["eExam.08"].vSet[i]);
                                }
                            }
                        }
                    };

                    if (typeof aObj["eExam.09"] != 'undefined') {
                        if (aObj["eExam.09"].IsNull == false) {
                            for (var i = 0; i < aObj["eExam.09"].vSet.length; i++) {
                                if (aObj["eExam.09"].vSet[i] !== null) {
                                    XML.writeElementString("eExam.09", aObj["eExam.09"].vSet[i]);
                                }
                            }
                        }
                    };

                    /////////////////////AbdomenGroup
                    if (typeof aObj["AbdomenGroup"] != 'undefined') {
                        for (var xx = 0; xx < aObj.AbdomenGroup.length; xx++) {
                            var obj1 = {};
                            var obj1 = aObj.AbdomenGroup[xx];

                            XML.writeStartElement("eExam.AbdomenGroup");
                            if (typeof obj1["eExam.10"] != 'undefined') {
                                if (obj1["eExam.10"].IsNull == false) {
                                    if (obj1["eExam.10"].vSet[0] !== null) {
                                        XML.writeElementString("eExam.10", obj1["eExam.10"].vSet[0]);
                                    }
                                }
                            };

                            if (typeof obj1["eExam.11"] != 'undefined') {
                                if (obj1["eExam.11"].IsNull == false) {
                                    for (var i = 0; i < obj1["eExam.11"].vSet.length; i++) {
                                        if (obj1["eExam.11"].vSet[0] !== null) {
                                            XML.writeElementString("eExam.11", obj1["eExam.11"].vSet[i]);
                                        }
                                    }
                                }
                            };
                            XML.writeEndElement();
                        };

                    };
                    if (typeof aObj["eExam.12"] != 'undefined') {
                        if (aObj["eExam.12"].IsNull == false) {
                            for (var i = 0; i < aObj["eExam.12"].vSet.length; i++) {
                                if (aObj["eExam.12"].vSet[i] !== null) {
                                    XML.writeElementString("eExam.12", aObj["eExam.12"].vSet[i]);
                                }
                            }
                        }
                    };
                    /////////////////////SpineGroup
                    if (typeof aObj["SpineGroup"] != 'undefined') {
                        for (var xx = 0; xx < aObj.SpineGroup.length; xx++) {
                            var obj2 = {}
                            obj2 = aObj.SpineGroup[xx];
                            XML.writeStartElement("eExam.SpineGroup");
                            if (typeof obj2["eExam.13"] != 'undefined') {
                                if (obj2["eExam.13"].IsNull == false) {
                                    if (obj2["eExam.13"].vSet[0] !== null) {
                                        XML.writeElementString("eExam.13", obj2["eExam.13"].vSet[0]);
                                    }
                                }
                            };

                            if (typeof obj2["eExam.14"] != 'undefined') {
                                if (obj2["eExam.14"].IsNull == false) {
                                    for (var i = 0; i < obj2["eExam.14"].vSet.length; i++) {
                                        if (obj2["eExam.14"].vSet[0] !== null) {
                                            XML.writeElementString("eExam.14", obj2["eExam.14"].vSet[i]);
                                        }
                                    }
                                }
                            };
                            XML.writeEndElement();
                        };
                    };

                    /////////////////////ExtremityGroup
                    if (typeof aObj["ExtremityGroup"] != 'undefined') {
                        for (var xx = 0; xx < aObj.ExtremityGroup.length; xx++) {
                            var obj3 = {};
                            obj3 = aObj.ExtremityGroup[xx]
                            XML.writeStartElement("eExam.ExtremityGroup");
                            if (typeof obj3["eExam.15"] != 'undefined') {
                                if (obj3["eExam.15"].IsNull == false) {
                                    XML.writeElementString("eExam.15", obj3["eExam.15"].vSet[0]);
                                }
                            };

                            if (typeof obj3["eExam.16"] != 'undefined') {
                                if (obj3["eExam.16"].IsNull == false) {
                                    for (var i = 0; i < obj3["eExam.16"].vSet.length; i++) {
                                        if (obj3["eExam.16"].vSet[i] !== null) {
                                            XML.writeElementString("eExam.16", obj3["eExam.16"].vSet[i]);
                                        }
                                    }
                                }
                            };
                            XML.writeEndElement();
                        }
                    };

                    /////////////////////EyeGroup
                    if (typeof aObj["EyeGroup"] != 'undefined') {
                        for (var xx = 0; xx < aObj.EyeGroup.length; xx++) {
                            var obj4 = {}
                            obj4 = aObj.EyeGroup[xx];
                            XML.writeStartElement("eExam.EyeGroup");
                            if (typeof obj4["eExam.17"] != 'undefined') {
                                if (obj4["eExam.17"].IsNull == false) {
                                    if (obj4["eExam.17"].vSet[0] !== null) {
                                        XML.writeElementString("eExam.17", obj4["eExam.17"].vSet[0]);
                                    }
                                }
                            };

                            if (typeof obj4["eExam.18"] != 'undefined') {
                                if (obj4["eExam.18"].IsNull == false) {
                                    for (var i = 0; i < obj4["eExam.18"].vSet.length; i++) {
                                        if (obj4["eExam.18"].vSet[i] !== null) {
                                            XML.writeElementString("eExam.18", obj4["eExam.18"].vSet[i]);
                                        }
                                    }
                                }
                            };
                            XML.writeEndElement();
                        }
                    };

                    if (typeof aObj["eExam.19"] != 'undefined') {
                        if (aObj["eExam.19"].IsNull == false) {
                            for (var i = 0; i < aObj["eExam.19"].vSet.length; i++) {
                                if (aObj["eExam.19"].vSet[i] !== null) {
                                    XML.writeElementString("eExam.19", aObj["eExam.19"].vSet[i]);
                                }
                            }
                        }
                    };

                    if (typeof aObj["eExam.20"] != 'undefined') {
                        if (aObj["eExam.20"].IsNull == false) {
                            for (var i = 0; i < aObj["eExam.20"].vSet.length; i++) {
                                if (aObj["eExam.20"].vSet[i] !== null) {
                                    XML.writeElementString("eExam.20", aObj["eExam.20"].vSet[i]);
                                }
                            }
                        }
                    };

                };
                XML.writeEndElement();
                XML.writeEndElement();
            };
        };

    };


    //eProcedure
    if (typeof TheCall.eProcedures != 'undefined') {
        if (typeof TheCall.eProcedures["ProcedureGroup"] != 'undefined') {
            XML.writeStartElement("eProcedures");

            for (var x = 0; x < TheCall.eProcedures.ProcedureGroup.length; x++) {
                var Obj = {};
                Obj = TheCall.eProcedures.ProcedureGroup[x]
                XML.writeStartElement("eProcedure.ProcedureGroup");

                if (typeof Obj["eProcedures.01"] != 'undefined') {
                    if (Obj["eProcedures.01"].IsNull == false) {
                        XML.writeElementString("eProcedures.01", Obj["eProcedures.01"].vSet[0]);
                    }
                    else {
                        if (typeof Obj["eProcedures.01"].NV != 'undefined') {
                            if (Obj["eProcedures.01"].NV == true) {
                                XML.writeStartElement('eProcedures.01');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', Obj["eProcedures.01"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                };

                if (typeof Obj["eProcedures.02"] != 'undefined') {
                    if (Obj["eProcedures.02"].IsNull == false) {
                        XML.writeElementString("eProcedures.02", Obj["eProcedures.02"].vSet[0]);
                    }
                    else {
                        if (typeof Obj["eProcedures.02"].NV != 'undefined') {
                            XML.writeStartElement('eProcedures.02');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', Obj["eProcedures.02"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof Obj["eProcedures.03"] != 'undefined') {
                    if (Obj["eProcedures.03"].IsNull == false) {
                        if (typeof Obj["eProcedures.03"].PN != 'undefined') {
                            XML.writeStartElement('eProcedures.03');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', Obj["eProcedures.03"].vSet[0]);
                            XML.writeEndElement();
                        }
                        else {
                            XML.writeElementString("eProcedures.03", escapeXml(Obj["eProcedures.03"].vSet[0]));
                        }
                    }
                    else {
                        if (typeof Obj["eProcedures.03"].PN != 'undefined') {
                            if (Obj["eProcedures.03"].PN == true) {
                                XML.writeStartElement('eProcedures.03');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', Obj["eProcedures.03"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                        else {
                            if (typeof Obj["eProcedures.03"].NV != 'undefined') {
                                XML.writeStartElement('eProcedures.03');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', Obj["eProcedures.03"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                };

                if (typeof Obj["eProcedures.04"] != 'undefined') {
                    if (Obj["eProcedures.04"].IsNull == false) {
                        XML.writeElementString("eProcedures.04", escapeXml(Obj["eProcedures.04"].vSet[0]));
                    }
                };

                if (typeof Obj["eProcedures.05"] != 'undefined') {
                    if (Obj["eProcedures.05"].IsNull == false) {
                        XML.writeElementString("eProcedures.05", Obj["eProcedures.05"].vSet[0]);
                    }
                    else {
                        if (typeof Obj["eProcedures.05"].NV != 'undefined') {
                            XML.writeStartElement('eProcedures.05');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', Obj["eProcedures.05"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof Obj["eProcedures.06"] != 'undefined') {
                    if (Obj["eProcedures.06"].IsNull == false) {
                        XML.writeElementString("eProcedures.06", Obj["eProcedures.06"].vSet[0]);
                    }
                    else {
                        if (typeof Obj["eProcedures.06"].NV != 'undefined') {
                            XML.writeStartElement('eProcedures.06');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', Obj["eProcedures.06"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof Obj["eProcedures.07"] != 'undefined') {
                    if (Obj["eProcedures.07"].IsNull == false) {
                        for (var i = 0; i < Obj["eProcedures.07"].vSet.length; i++) {
                            XML.writeElementString("eProcedures.07", Obj["eProcedures.07"].vSet[i]);
                        }
                    }
                    else {
                        if (typeof Obj["eProcedures.07"].NV != 'undefined') {
                            XML.writeStartElement('eProcedures.07');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', Obj["eProcedures.07"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof Obj["eProcedures.08"] != 'undefined') {
                    if (Obj["eProcedures.08"].IsNull == false) {
                        XML.writeElementString("eProcedures.08", Obj["eProcedures.08"].vSet[0]);
                    }
                    else {
                        if (typeof Obj["eProcedures.08"].NV != 'undefined') {
                            XML.writeStartElement('eProcedures.08');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', Obj["eProcedures.08"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof Obj["eProcedures.09"] != 'undefined') {
                    if (Obj["eProcedures.09"].IsNull == false) {
                        XML.writeElementString("eProcedures.09", Obj["eProcedures.09"].vSet[0]);
                    }

                    else {
                        if (typeof Obj["eProcedures.09"].NV != 'undefined') {
                            XML.writeStartElement('eProcedures.09');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', Obj["eProcedures.09"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof Obj["eProcedures.10"] != 'undefined') {
                    if (Obj["eProcedures.10"].IsNull == false) {
                        XML.writeElementString("eProcedures.10", Obj["eProcedures.10"].vSet[0]);
                    }
                    else {
                        if (typeof Obj["eProcedures.10"].NV != 'undefined') {
                            XML.writeStartElement('eProcedures.10');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', Obj["eProcedures.10"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof Obj["eProcedures.11"] != 'undefined') {
                    if (Obj["eProcedures.11"].IsNull == false) {
                        XML.writeElementString("eProcedures.11", Obj["eProcedures.11"].vSet[0]);
                    }
                };

                if (typeof Obj["eProcedures.12"] != 'undefined') {
                    if (Obj["eProcedures.12"].IsNull == false) {
                        XML.writeElementString("eProcedures.12", escapeXml(Obj["eProcedures.12"].vSet[0]));
                    }
                };

                if (typeof Obj["eProcedures.13"] != 'undefined') {
                    if (Obj["eProcedures.13"].IsNull == false) {
                        XML.writeElementString("eProcedures.13", Obj["eProcedures.13"].vSet[0]);
                    }
                    else {
                        if (typeof Obj["eProcedures.13"].NV != 'undefined') {
                            XML.writeStartElement('eProcedures.13');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', Obj["eProcedures.13"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                XML.writeEndElement();
            };
            XML.writeEndElement();
        };
    };


    //eMedications
    if (typeof TheCall.eMedications != 'undefined') {
        if (typeof TheCall.eMedications.MedicationGroup != 'undefined') {
            XML.writeStartElement("eMedications");
            for (var x = 0; x < TheCall.eMedications["MedicationGroup"].length; x++) {
                var obj = {}
                obj = TheCall.eMedications["MedicationGroup"][x];

                XML.writeStartElement("eMedications.MedicationGroup");
                if (typeof obj["eMedications.01"] != 'undefined') {

                    if (obj["eMedications.01"].IsNull == false) {
                        XML.writeElementString("eMedications.01", obj["eMedications.01"].vSet[0]);
                    }
                    else {
                        if (typeof obj["eMedications.01"].NV != 'undefined') {
                            if (obj["eMedications.01"].NV == true) {
                                XML.writeStartElement('eMedications.01');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj["eMedications.01"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                };

                if (typeof obj["eMedications.02"] != 'undefined') {
                    if (obj["eMedications.02"].IsNull == false) {
                        XML.writeElementString("eMedications.02", obj["eMedications.02"].vSet[0]);
                    }
                    else {
                        if (typeof obj["eMedications.02"].NV != 'undefined') {
                            if (obj["eMedications.02"].NV == true) {
                                XML.writeStartElement('eMedications.02');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj["eMedications.02"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                };
                if (typeof obj["eMedications.03"] != 'undefined') {
                    if (obj["eMedications.03"].IsNull == false) {
                        if (typeof obj["eMedications.03"].PN != 'undefined') {
                            if (obj["eMedications.03"].PN == true) {
                                XML.writeStartElement('eMedications.03');
                                XML.writeAttributeString("PN", obj["eMedications.03"].PN);
                                XML.writeString(obj["eMedications.03"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                        else {
                            XML.writeElementString("eMedications.03", escapeXml(obj["eMedications.03"].vSet[0]));
                        }
                    }
                    else {
                        if (typeof obj["eMedications.03"].PN != 'undefined') {
                            if (obj["eMedications.01"].PN == true) {
                                XML.writeStartElement('eMedications.03');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj["eMedications.03"].vSet[0]);
                                XML.writeEndElement();
                            }

                        }
                        else {
                            if (typeof obj["eMedications.03"].NV != 'undefined') {
                                if (obj["eMedications.03"].NV == true) {
                                    XML.writeStartElement('eMedications.03');
                                    XML.writeAttributeString('xsi:nil', 'true');
                                    XML.writeAttributeString('NV', obj["eMedications.03"].vSet[0]);
                                    XML.writeEndElement();
                                }
                            }
                        }
                    }
                };



                if (typeof obj["eMedications.04"] != 'undefined') {
                    if (obj["eMedications.04"].IsNull == false) {
                        XML.writeElementString("eMedications.04", obj["eMedications.04"].vSet[0]);
                    }
                };
                if (obj.DosageGroup == 1) {
                    XML.writeStartElement("eMedications.DosageGroup");

                    if (typeof obj["eMedications.05"] != 'undefined') {
                        if (obj["eMedications.05"].IsNull == false) {
                            XML.writeElementString("eMedications.05", obj["eMedications.05"].vSet[0]);
                        }
                        else {
                            if (typeof obj["eMedications.05"].NV != 'undefined') {
                                if (obj["eMedications.05"].NV == true) {
                                    XML.writeStartElement('eMedications.05');
                                    XML.writeAttributeString('xsi:nil', 'true');
                                    XML.writeAttributeString('NV', obj["eMedications.05"].vSet[0]);
                                    XML.writeEndElement();
                                }
                            }
                        }
                    };


                    if (typeof obj["eMedications.06"] != 'undefined') {
                        if (obj["eMedications.06"].IsNull == false) {
                            XML.writeElementString("eMedications.06", obj["eMedications.06"].vSet[0]);
                        }
                        else {
                            if (typeof obj["eMedications.06"].NV != 'undefined') {
                                if (obj["eMedications.06"].NV == true) {
                                    XML.writeStartElement('eMedications.06');
                                    XML.writeAttributeString('xsi:nil', 'true');
                                    XML.writeAttributeString('NV', obj["eMedications.06"].vSet[0]);
                                    XML.writeEndElement();
                                }
                            }
                        }
                    };

                    XML.writeEndElement();
                };
                if (typeof obj["eMedications.07"] != 'undefined') {
                    if (obj["eMedications.07"].IsNull == false) {
                        XML.writeElementString("eMedications.07", obj["eMedications.07"].vSet[0]);
                    }
                    else {
                        if (typeof obj["eMedications.07"].NV != 'undefined') {
                            if (obj["eMedications.07"].NV == true) {
                                XML.writeStartElement('eMedications.07');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj["eMedications.07"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                };

                if (typeof obj["eMedications.08"] != 'undefined') {
                    if (obj["eMedications.08"].IsNull == false) {
                        XML.writeElementString("eMedications.08", obj["eMedications.08"].vSet[0]);
                    }
                    else {
                        if (typeof obj["eMedications.08"].NV != 'undefined') {
                            if (obj["eMedications.08"].NV == true) {
                                XML.writeStartElement('eMedications.08');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj["eMedications.08"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                };
                if (typeof obj["eMedications.09"] != 'undefined') {
                    if (obj["eMedications.09"].IsNull == false) {
                        XML.writeElementString("eMedications.09", escapeXml(["eMedications.09"].vSet[0]));
                    }
                    else {
                        if (typeof obj["eMedications.09"].NV != 'undefined') {
                            if (obj["eMedications.09"].NV == true) {
                                XML.writeStartElement('eMedications.09');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj["eMedications.09"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                };


                if (typeof obj["eMedications.10"] != 'undefined') {
                    if (obj["eMedications.10"].IsNull == false) {
                        XML.writeElementString("eMedications.10", obj["eMedications.10"].vSet[0]);
                    }
                    else {
                        if (typeof obj["eMedications.10"].NV != 'undefined') {
                            if (obj["eMedications.10"].NV == true) {
                                XML.writeStartElement('eMedications.10');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj["eMedications.10"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                };
                if (typeof obj["eMedications.11"] != 'undefined') {
                    if (obj["eMedications.11"].IsNull == false) {
                        XML.writeElementString("eMedications.11", obj["eMedications.11"].vSet[0]);
                    }
                };

                if (typeof obj["eMedications.12"] != 'undefined') {
                    if (obj["eMedications.12"].IsNull == false) {
                        XML.writeElementString("eMedications.12", escapeXml(obj["eMedications.12"].vSet[0]));
                    }
                };
                XML.writeEndElement();
            }
            XML.writeEndElement();
        }
    };
    //eProtocols

    if (typeof TheCall.eProtocols != 'undefined') {
        if (typeof TheCall.eProtocols.ProtocolGroup != 'undefined') {

            XML.writeStartElement("eProtocols");
            for (var x = 0; x < TheCall.eProtocols["ProtocolGroup"].length; x++) {
                var obj = {};
                obj = TheCall.eProtocols["ProtocolGroup"][x]
                XML.writeStartElement("eProtocols.ProtocolGroup");
                if (typeof obj["eProtocols.01"] != 'undefined') {
                    if (obj["eProtocols.01"].IsNull == false) {
                        XML.writeElementString("eProtocols.01", obj["eProtocols.01"].vSet[0]);
                    }
                    else {
                        if (typeof obj["eProtocols.01"].NV != 'undefined') {
                            XML.writeStartElement('eProtocols.01');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eProtocols.01"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                };

                if (typeof obj["eProtocols.02"] != 'undefined') {
                    if (obj["eProtocols.02"].IsNull == false) {
                        XML.writeElementString("eProtocols.02", obj["eProtocols.02"].vSet[0]);
                    }
                    else {
                        if (typeof obj["eProtocols.02"].NV != 'undefined') {
                            XML.writeStartElement('eProtocols.02');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eProtocols.02"].vSet[0]);
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
                        if (obj["eVitals.01"].NV == true) {
                            XML.writeStartElement('eVitals.01');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.01"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                }
            };

            if (typeof obj["eVitals.02"] != 'undefined') {
                if (obj["eVitals.02"].IsNull == false) {
                    XML.writeElementString("eVitals.02", obj["eVitals.02"].vSet[0]);
                }
                else {
                    if (typeof obj["eVitals.02"].NV != 'undefined') {
                        if (obj["eVitals.02"].NV == true) {
                            XML.writeStartElement('eVitals.02');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.02"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                }
            };

            if (typeof obj.CardiacRhythmGroup != 'undefined') {
                XML.writeStartElement("eVitals.CardiacRhythmGroup");

                if (typeof obj.CardiacRhythmGroup["eVitals.03"] != 'undefined') {
                    if (obj.CardiacRhythmGroup["eVitals.03"].IsNull == false) {
                        for (var i = 0; i < obj.CardiacRhythmGroup["eVitals.03"].vSet.length; i++) {
                            XML.writeElementString("eVitals.03", obj.CardiacRhythmGroup["eVitals.03"].vSet[i]);
                        }
                    }
                    else {
                        if (typeof obj.CardiacRhythmGroup["eVitals.03"].PN != 'undefined') {
                            if (obj.CardiacRhythmGroup["eVitals.03"].PN == true) {
                                XML.writeStartElement('eVitals.03');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.CardiacRhythmGroup["eVitals.03"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                        else if (typeof obj.CardiacRhythmGroup["eVitals.03"].NV != 'undefined') {
                            if (obj.CardiacRhythmGroup["eVitals.03"].NV == true) {
                                XML.writeStartElement('eVitals.03');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.CardiacRhythmGroup["eVitals.03"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                };

                if (typeof obj.CardiacRhythmGroup["eVitals.04"] != 'undefined') {
                    if (obj.CardiacRhythmGroup["eVitals.04"].IsNull == false) {
                        XML.writeElementString("eVitals.04", obj.CardiacRhythmGroup["eVitals.04"].vSet[0]);
                    }
                    else {
                        if (typeof obj.CardiacRhythmGroup["eVitals.04"].NV != 'undefined') {
                            if (obj.CardiacRhythmGroup["eVitals.04"].NV == true) {
                                XML.writeStartElement('eVitals.04');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.CardiacRhythmGroup["eVitals.04"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                };

                if (typeof obj.CardiacRhythmGroup["eVitals.05"] != 'undefined') {
                    if (obj.CardiacRhythmGroup["eVitals.05"].IsNull == false) {
                        for (var i = 0; i < obj.CardiacRhythmGroup["eVitals.05"].vSet.length; i++) {
                            XML.writeElementString("eVitals.05", obj.CardiacRhythmGroup["eVitals.05"].vSet[i]);
                        }
                    }
                    else {
                        if (typeof obj.CardiacRhythmGroup["eVitals.05"].NV != 'undefined') {
                            if (obj.CardiacRhythmGroup["eVitals.05"].NV == true) {
                                XML.writeStartElement('eVitals.05');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.CardiacRhythmGroup["eVitals.05"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                };
                XML.writeEndElement();
            };

            if (typeof obj.BloodPressureGroup != 'undefined') {
                XML.writeStartElement("eVitals.BloodPressureGroup");
                if (typeof obj.BloodPressureGroup["eVitals.06"] != 'undefined') {
                    if (obj.BloodPressureGroup["eVitals.06"].IsNull == false) {
                        XML.writeElementString("eVitals.06", obj.BloodPressureGroup["eVitals.06"].vSet[0]);
                    }
                    else {
                        if (typeof obj.BloodPressureGroup["eVitals.06"].PN != 'undefined') {
                            if (obj.BloodPressureGroup["eVitals.06"].PN == true) {
                                XML.writeStartElement('eVitals.06');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.BloodPressureGroup["eVitals.06"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                        else if (typeof obj.BloodPressureGroup["eVitals.06"].NV != 'undefined') {
                            if (obj.BloodPressureGroup["eVitals.06"].NV == true) {
                                XML.writeStartElement('eVitals.06');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.BloodPressureGroup["eVitals.06"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                };

                if (typeof obj.BloodPressureGroup["eVitals.07"] != 'undefined') {
                    if (obj.BloodPressureGroup["eVitals.07"].IsNull == false) {
                        XML.writeElementString("eVitals.07", obj.BloodPressureGroup["eVitals.07"].vSet[0]);
                    }
                    else {
                        if (typeof obj.BloodPressureGroup["eVitals.07"].PN != 'undefined') {
                            if (obj.BloodPressureGroup["eVitals.07"].PN == true) {
                                XML.writeStartElement('eVitals.07');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.BloodPressureGroup["eVitals.07"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                        else if (typeof obj.BloodPressureGroup["eVitals.07"].NV != 'undefined') {
                            if (obj.BloodPressureGroup["eVitals.07"].NV == true) {
                                XML.writeStartElement('eVitals.07');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.BloodPressureGroup["eVitals.07"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                };

                if (typeof obj.BloodPressureGroup["eVitals.08"] != 'undefined') {
                    if (obj.BloodPressureGroup["eVitals.08"].IsNull == false) {
                        XML.writeElementString("eVitals.08", obj.BloodPressureGroup["eVitals.08"].vSet[0]);
                    }
                    else {
                        if (typeof obj.BloodPressureGroup["eVitals.08"].NV != 'undefined') {
                            if (obj.BloodPressureGroup["eVitals.08"].NV == true) {
                                XML.writeStartElement('eVitals.08');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.BloodPressureGroup["eVitals.08"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                };

                if (typeof obj.BloodPressureGroup["eVitals.09"] != 'undefined') {
                    if (obj.BloodPressureGroup["eVitals.09"].IsNull == false) {
                        XML.writeElementString("eVitals.09", obj.BloodPressureGroup["eVitals.09"].vSet[0]);
                    }
                };

                XML.writeEndElement();
            };

            if (typeof obj.HeartRateGroup != 'undefined') {
                XML.writeStartElement("eVitals.HeartRateGroup");
                if (typeof obj.HeartRateGroup["eVitals.10"] != 'undefined') {
                    if (obj.HeartRateGroup["eVitals.10"].IsNull == false) {
                        XML.writeElementString("eVitals.10", obj.HeartRateGroup["eVitals.10"].vSet[0]);
                    }
                    else {
                        if (typeof obj.HeartRateGroup["eVitals.10"].PN != 'undefined') {
                            if (obj.HeartRateGroup["eVitals.10"].PN == true) {
                                XML.writeStartElement('eVitals.10');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.HeartRateGroup["eVitals.10"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                        else if (typeof obj.HeartRateGroup["eVitals.10"].NV != 'undefined') {
                            if (obj.HeartRateGroup["eVitals.10"].NV == true) {
                                XML.writeStartElement('eVitals.10');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.HeartRateGroup["eVitals.10"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                };

                if (typeof obj.HeartRateGroup["eVitals.11"] != 'undefined') {
                    if (obj.HeartRateGroup["eVitals.11"].IsNull == false) {
                        XML.writeElementString("eVitals.11", obj.HeartRateGroup["eVitals.11"].vSet[0]);
                    }
                };

                XML.writeEndElement();
            };

            if (typeof obj["eVitals.12"] != 'undefined') {
                if (obj["eVitals.12"].IsNull == false) {
                    XML.writeElementString("eVitals.12", obj["eVitals.12"].vSet[0]);
                }
                else {
                    if (typeof obj["eVitals.12"].PN != 'undefined') {
                        if (obj["eVitals.12"].PN == true) {
                            XML.writeStartElement('eVitals.12');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.12"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                    else if (typeof obj["eVitals.12"].NV != 'undefined') {
                        if (obj["eVitals.12"].NV == true) {
                            XML.writeStartElement('eVitals.12');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.12"].vSet[0]);
                            XML.writeEndElement();
                        }
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
                        if (obj["eVitals.14"].PN == true) {
                            XML.writeStartElement('eVitals.14');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.14"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                    else if (typeof obj["eVitals.14"].NV != 'undefined') {
                        if (obj["eVitals.14"].NV == true) {
                            XML.writeStartElement('eVitals.14');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.14"].vSet[0]);
                            XML.writeEndElement();
                        }
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
                        if (obj["eVitals.16"].PN == true) {
                            XML.writeStartElement('eVitals.16');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.16"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                    else if (typeof obj["eVitals.16"].NV != 'undefined') {
                        if (typeof obj["eVitals.16"].NV == true) {
                            XML.writeStartElement('eVitals.16');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.16"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                }
            };


            if (typeof obj["eVitals.17"] != 'undefined') {
                if (obj["eVitals.17"].IsNull == false) {
                    XML.writeElementString("eVitals.17", obj["eVitals.17"].vSet[0]);
                }
                else {
                    if (typeof obj["eVitals.17"].PN != 'undefined') {
                        if (obj["eVitals.17"].PN == true) {
                            XML.writeStartElement('eVitals.17');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.17"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                    else if (typeof obj["eVitals.17"].NV != 'undefined') {
                        if (obj["eVitals.17"].NV == true) {
                            XML.writeStartElement('eVitals.17');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.17"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                }
            };

            if (typeof obj["eVitals.18"] != 'undefined') {
                if (obj["eVitals.18"].IsNull == false) {
                    XML.writeElementString("eVitals.18", obj["eVitals.18"].vSet[0]);
                }
                else {
                    if (typeof obj["eVitals.18"].PN != 'undefined') {
                        if (obj["eVitals.18"].PN == true) {
                            XML.writeStartElement('eVitals.18');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.18"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                    else if (typeof obj["eVitals.18"].NV != 'undefined') {
                        if (obj["eVitals.18"].NV == true) {
                            XML.writeStartElement('eVitals.18');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.18"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                }
            };

            if (typeof obj.GlascowScoreGroup != 'undefined') {
                XML.writeStartElement("eVitals.GlascowScoreGroup");
                if (typeof obj.GlascowScoreGroup["eVitals.19"] != 'undefined') {
                    if (obj.GlascowScoreGroup["eVitals.19"].IsNull == false) {
                        XML.writeElementString("eVitals.19", obj.GlascowScoreGroup["eVitals.19"].vSet[0]);
                    }
                    else {
                        if (typeof obj.GlascowScoreGroup["eVitals.19"].PN != 'undefined') {
                            if (obj.GlascowScoreGroup["eVitals.19"].PN == true) {
                                XML.writeStartElement('eVitals.19');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.GlascowScoreGroup["eVitals.19"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                        else if (typeof obj.GlascowScoreGroup["eVitals.19"].NV != 'undefined') {
                            if (obj.GlascowScoreGroup["eVitals.19"].NV == true) {
                                XML.writeStartElement('eVitals.19');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.GlascowScoreGroup["eVitals.19"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                };

                if (typeof obj.GlascowScoreGroup["eVitals.20"] != 'undefined') {
                    if (obj.GlascowScoreGroup["eVitals.20"].IsNull == false) {
                        XML.writeElementString("eVitals.20", obj.GlascowScoreGroup["eVitals.20"].vSet[0]);
                    }
                    else {
                        if (typeof obj.GlascowScoreGroup["eVitals.20"].PN != 'undefined') {
                            if (obj.GlascowScoreGroup["eVitals.20"].PN == true) {
                                XML.writeStartElement('eVitals.20');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.GlascowScoreGroup["eVitals.20"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                        else if (typeof obj.GlascowScoreGroup["eVitals.20"].NV != 'undefined') {
                            if (obj.GlascowScoreGroup["eVitals.20"].NV == true) {
                                XML.writeStartElement('eVitals.20');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.GlascowScoreGroup["eVitals.20"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                };

                if (typeof obj.GlascowScoreGroup["eVitals.21"] != 'undefined') {
                    if (obj.GlascowScoreGroup["eVitals.21"].IsNull == false) {
                        XML.writeElementString("eVitals.21", obj.GlascowScoreGroup["eVitals.21"].vSet[0]);
                    }
                    else {
                        if (typeof obj.GlascowScoreGroup["eVitals.21"].PN != 'undefined') {
                            if (obj.GlascowScoreGroup["eVitals.21"].PN == true) {
                                XML.writeStartElement('eVitals.21');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.GlascowScoreGroup["eVitals.21"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                        else if (typeof obj.GlascowScoreGroup["eVitals.21"].NV != 'undefined') {
                            if (obj.GlascowScoreGroup["eVitals.21"].NV == true) {
                                XML.writeStartElement('eVitals.21');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.GlascowScoreGroup["eVitals.21"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                };

                if (typeof obj.GlascowScoreGroup["eVitals.21"] != 'undefined') {
                    if (obj.GlascowScoreGroup["eVitals.22"].IsNull == false) {
                        XML.writeElementString("eVitals.22", obj.GlascowScoreGroup["eVitals.22"].vSet[0]);
                    }
                    else {
                        if (typeof obj.GlascowScoreGroup["eVitals.22"].PN != 'undefined') {
                            if (obj.GlascowScoreGroup["eVitals.22"].PN == true) {
                                XML.writeStartElement('eVitals.22');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.GlascowScoreGroup["eVitals.22"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                        else if (typeof obj.GlascowScoreGroup["eVitals.22"].NV != 'undefined') {
                            if (obj.GlascowScoreGroup["eVitals.22"].NV == true) {
                                XML.writeStartElement('eVitals.22');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.GlascowScoreGroup["eVitals.22"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                };

                if (typeof obj.GlascowScoreGroup["eVitals.23"] != 'undefined') {
                    if (obj.GlascowScoreGroup["eVitals.23"].IsNull == false) {
                        XML.writeElementString("eVitals.23", obj.GlascowScoreGroup["eVitals.23"].vSet[0]);
                    }
                    else {
                        if (typeof obj.GlascowScoreGroup["eVitals.23"].PN != 'undefined') {
                            if (obj.GlascowScoreGroup["eVitals.23"].PN == true) {
                                XML.writeStartElement('eVitals.23');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.GlascowScoreGroup["eVitals.23"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                        else if (typeof obj.GlascowScoreGroup["eVitals.23"].NV != 'undefined') {
                            if (obj.GlascowScoreGroup["eVitals.23"].NV == true) {
                                XML.writeStartElement('eVitals.23');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.GlascowScoreGroup["eVitals.23"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                };

                XML.writeEndElement()
            };

            if (typeof obj.TemperatureGroup != 'undefined') {

                XML.writeStartElement("eVitals.TemperatureGroup");
                if (typeof obj.TemperatureGroup["eVitals.24"] != 'undefined') {
                    if (obj.TemperatureGroup["eVitals.24"].IsNull == false) {
                        XML.writeElementString("eVitals.24", obj.TemperatureGroup["eVitals.24"].vSet[0]);
                    }
                    else {
                        if (typeof obj.TemperatureGroup["eVitals.24"].PN != 'undefined') {
                            if (obj.TemperatureGroup["eVitals.24"].PN == true) {
                                XML.writeStartElement('eVitals.24');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.TemperatureGroup["eVitals.24"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                        else if (typeof obj.TemperatureGroup["eVitals.24"].NV != 'undefined') {
                            if (obj.TemperatureGroup["eVitals.24"].NV == true) {
                                XML.writeStartElement('eVitals.24');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.TemperatureGroup["eVitals.24"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                };

                if (typeof obj.TemperatureGroup["eVitals.25"] != 'undefined') {
                    if (obj.TemperatureGroup["eVitals.25"].IsNull == false) {
                        XML.writeElementString("eVitals.25", obj.TemperatureGroup["eVitals.25"].vSet[0]);
                    }
                };
                XML.writeEndElement();
            };

            if (typeof obj["eVitals.26"] != 'undefined') {
                if (obj["eVitals.26"].IsNull == false) {
                    XML.writeElementString("eVitals.26", obj["eVitals.26"].vSet[0]);
                }
                else {
                    if (typeof obj["eVitals.26"].NV != 'undefined') {
                        if (obj["eVitals.26"].NV == null) {
                            XML.writeStartElement('eVitals.26');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.26"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                }
            };
            if (typeof obj.PainScaleGroup != 'undefined') {
                XML.writeStartElement("eVitals.PainScaleGroup");
                if (typeof obj.PainScaleGroup["eVitals.27"] != 'undefined') {
                    if (obj.PainScaleGroup["eVitals.27"].IsNull == false) {
                        XML.writeElementString("eVitals.27", obj.PainScaleGroup["eVitals.27"].vSet[0]);
                    }
                    else {
                        if (typeof obj.PainScaleGroup["eVitals.27"].PN != 'undefined') {
                            if (obj.PainScaleGroup["eVitals.27"].PN == true) {
                                XML.writeStartElement('eVitals.27');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.PainScaleGroup["eVitals.27"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                        else if (typeof obj.PainScaleGroup["eVitals.27"].NV != 'undefined') {
                            if (obj.PainScaleGroup["eVitals.27"].NV == true) {
                                XML.writeStartElement('eVitals.27');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.PainScaleGroup["eVitals.27"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                };

                if (typeof obj.PainScaleGroup["eVitals.28"] != 'undefined') {
                    if (obj.PainScaleGroup["eVitals.28"].IsNull == false) {
                        XML.writeElementString("eVitals.28", obj.PainScaleGroup["eVitals.28"].vSet[0]);
                    }
                    else {
                        if (typeof obj.PainScaleGroup["eVitals.28"].NV != 'undefined') {
                            if (obj.PainScaleGroup["eVitals.28"].NV == true) {
                                XML.writeStartElement('eVitals.28');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.PainScaleGroup["eVitals.28"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                };
                XML.writeEndElement();
            };

            if (typeof obj.StrokeScaleGroup != 'undefined') {
                XML.writeStartElement("eVitals.StrokeScaleGroup");

                if (typeof obj.StrokeScaleGroup["eVitals.29"] != 'undefined') {
                    if (obj.StrokeScaleGroup["eVitals.29"].IsNull == false) {
                        XML.writeElementString("eVitals.29", obj.StrokeScaleGroup["eVitals.29"].vSet[0]);
                    }
                    else {
                        if (typeof obj.StrokeScaleGroup["eVitals.29"].PN != 'undefined') {
                            if (obj.StrokeScaleGroup["eVitals.29"].PN == true) {
                                XML.writeStartElement('eVitals.29');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.StrokeScaleGroup["eVitals.29"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                        else if (typeof obj.StrokeScaleGroup["eVitals.29"].NV != 'undefined') {
                            if (obj.StrokeScaleGroup["eVitals.29"].NV == true) {
                                XML.writeStartElement('eVitals.29');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.StrokeScaleGroup["eVitals.29"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                };

                if (typeof obj.StrokeScaleGroup["eVitals.30"] != 'undefined') {
                    if (obj.StrokeScaleGroup["eVitals.30"].IsNull == false) {
                        XML.writeElementString("eVitals.30", obj.StrokeScaleGroup["eVitals.30"].vSet[0]);
                    }
                    else {
                        if (typeof obj.StrokeScaleGroup["eVitals.30"].NV != 'undefined') {
                            if (obj.StrokeScaleGroup["eVitals.30"].NV == true) {
                                XML.writeStartElement('eVitals.30');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj.StrokeScaleGroup["eVitals.30"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                };

                XML.writeEndElement();
            };
            if (typeof obj["eVitals.31"] != 'undefined') {
                if (obj["eVitals.31"].IsNull == false) {
                    XML.writeElementString("eVitals.31", obj["eVitals.31"].vSet[0]);
                }
                else {
                    if (typeof obj["eVitals.31"].NV != 'undefined') {
                        if (obj["eVitals.31"].NV == true) {
                            XML.writeStartElement('eVitals.31');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('NV', obj["eVitals.31"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                    else if (typeof obj["eVitals.31"].PN != 'undefined') {
                        if (obj["eVitals.31"].PN == true) {

                            XML.writeStartElement('eVitals.31');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('PN', obj["eVitals.31"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                }
            };


            if (typeof obj["eVitals.32"] != 'undefined') {
                if (obj["eVitals.32"].IsNull == false) {
                    XML.writeElementString("eVitals.32", obj["eVitals.32"].vSet[0]);
                }
                else {
                    if (typeof obj["eVitals.32"].PN != 'undefined') {
                        if (obj["eVitals.32"].PN == true) {
                            XML.writeStartElement('eVitals.32');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('PN', obj["eVitals.32"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                }
            };
            if (typeof obj["eVitals.33"] != 'undefined') {
                if (obj["eVitals.33"].IsNull == false) {
                    XML.writeElementString("eVitals.33", obj["eVitals.33"].vSet[0]);
                }
                else {
                    if (typeof obj["eVitals.33"].PN != 'undefined') {
                        if (obj["eVitals.33"].PN == true) {
                            XML.writeStartElement('eVitals.33');
                            XML.writeAttributeString('xsi:nil', 'true');
                            XML.writeAttributeString('PN', obj["eVitals.33"].vSet[0]);
                            XML.writeEndElement();
                        }
                    }
                }

            };
            XML.writeEndElement();
            XML.writeEndElement();
        }
    };

    //eCrew

    if (typeof TheCall.eCrew != 'undefined') {
        if (typeof TheCall.eCrew["CrewGroup"] != 'undefined') {
            for (var x = 0; x < TheCall.eCrew["CrewGroup"].length; x++) {
                var obj = {};
                obj = TheCall.eCrew["CrewGroup"][x]
                XML.writeStartElement("eCrew");
                XML.writeStartElement("eCrew.CrewGroup");


                if (typeof obj["eCrew.01"] != 'undefined') {
                    if (obj["eCrew.01"].IsNull == false) {
                        XML.writeElementString("eCrew.01", escapeXml(obj["eCrew.01"].vSet[0]));
                    }
                    else {
                        if (typeof obj["eCrew.01"].NV != 'undefined') {
                            if (obj["eCrew.01"].NV == true) {
                                XML.writeStartElement('eCrew.01');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj["eCrew.01"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                };

                if (typeof obj["eCrew.02"] != 'undefined') {
                    if (obj["eCrew.02"].IsNull == false) {
                        XML.writeElementString("eCrew.02", obj["eCrew.02"].vSet[0]);
                    }
                    else {
                        if (typeof obj["eCrew.02"].NV != 'undefined') {
                            if (obj["eCrew.02"].NV == true) {
                                XML.writeStartElement('eCrew.02');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj["eCrew.02"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                };
                if (typeof obj["eCrew.03"] != 'undefined') {
                    if (obj["eCrew.03"].IsNull == false) {
                        for (var i = 0; i < obj["eCrew.03"].vSet.length; i++) {
                            XML.writeElementString("eCrew.03", obj["eCrew.03"].vSet[i].val);
                        }
                    }
                    else {
                        if (typeof obj["eCrew.03"].NV != 'undefined') {
                            if (obj["eCrew.03"].NV == true) {
                                XML.writeStartElement('eCrew.03');
                                XML.writeAttributeString('xsi:nil', 'true');
                                XML.writeAttributeString('NV', obj["eCrew.03"].vSet[0]);
                                XML.writeEndElement();
                            }
                        }
                    }
                };
                XML.writeEndElement();
            }
        }
    };

    XML.writeEndElement();
    var XMLDoc = XML.flush()
    return XMLDoc;

};

    function escapeXml(unsafe) {
        if (typeof unsafe != 'undefined') {
            if (unsafe != null) {
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
        }

    };

