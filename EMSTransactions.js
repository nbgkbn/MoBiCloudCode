var AirwayGroup334 = Parse.Object.extend("AirwayGroup");
var ConfirmationGroup334 = Parse.Object.extend("ConfirmationGroup");
eAirway334 = EMSObject.eAirway;
for (var x = 0; x < EMSObject.eAirway.AirwayGroup.length; x++)
{
    AirwayGroup = EMSObject.eAirway.AirwayGroup[x];
    AirwayGroup334.set("IndicationsforInvasiveAirway", AirwayGroup["eAirway.01"]);
    AirwayGroup334.set("DateTimeDecisiontoManagethePatientwithanInvasiveAirway", AirwayGroup["eAirway.02"]);
    AirwayGroup334.set("DateTimeInvasiveAirwayPlacementAttemptsAbandoned", AirwayGroup["eAirway.03"]);
    
    for (var i = 0; i < EMSObject.eAirway.AirwayGroup[x].ConfirmationGroup.length; i++)
    {
        ConfirmationGroup = EMSObject.eAirway.AirwayGroup[x].ConfirmationGroup[x];
        ConfirmationGroup334.set["DateTimeAirwayDevicePlacementConfirmation"] = ConfirmationGroup["eAirway.02"];
        ConfirmationGroup334.set["AirwayDeviceBeingConfirmed"] = ConfirmationGroup["eAirway.03"];
        ConfirmationGroup334.set["AirwayDevicePlacementConfirmedMethods"] = eAirway["eAirway.04"];
        ConfirmationGroup334.set["TubeDepth"] = ConfirmationGroup["eAirway.05"];
        ConfirmationGroup334.set["TypeofIndividualConfirmingAirwayDevicePlacement"] = ConfirmationGroup["eAirway.06"];
        ConfirmationGroup334.set["CrewMemberID"] = ConfirmationGroup["eAirway.07"];
        ConfirmationGroup334.set["AirwayComplicationsEncountered"] = ConfirmationGroup["eAirway.08"];
        ConfirmationGroup334.set["SuspectedReasonsforFailedAirwayProcedure"] = ConfirmationGroup["eAirway.08"];

    }
};

/////////////////////////////////////////////


var eArrest334 = Parse.Object.extend("eArrest334");
eArrest = EMSObject.eArrest;

eArrest334.set("CardiacArrest", eArrest["eArrest.01"]);
eArrest334.set("CardiacArrestEtiology", eArrest["eArrest.02"]);
eArrest334.set("ResuscitationAttemptedByEMS", eArrest["eArrest.03"]);
eArrest334.set("Arrest Witnessed By", eArrest["eArrest.04"]);
eArrest334.set("CPRCareProvidedPriortoEMSArrival", eArrest["eArrest.05"]);
eArrest334.set("WhoProvidedCPRPriortoEMSArrival", eArrest["eArrest.06"]);
eArrest334.set("AEDUsePriortoEMSArrival", eArrest["eArrest.07"]);
eArrest334.set("WhoUsedAEDPriortoEMSArrival", eArrest["eArrest.08"]);
eArrest334.set("TypeofCPRProvided", eArrest["eArrest.09"]);
eArrest334.set("TherapeuticHypothermiaInitiated", eArrest["eArrest.10"]);
eArrest334.set("FirstMonitoredArrestRhythmofthePatient", eArrest["eArrest.11"]);
eArrest334.set("AnyReturnofSpontaneousCirculation", eArrest["eArrest.12"]);
eArrest334.set("NeurologicalOutcomeatHospitalDischarge", eArrest["eArrest.13"]);
eArrest334.set("DateTimeofCardiacArrest", eArrest["eArrest.14"]);
eArrest334.set("DateTimeResuscitationDiscontinued", eArrest["eArrest.15"]);
eArrest334.set("ReasonCPRResuscitationDiscontinued", eArrest["eArrest.16"]);
eArrest334.set("CardiacRhythmonArrivalatDestination", eArrest["eArrest.17"]);
eArrest334.set("CardiacRhythmonArrivalatDestination", eArrest["eArrest.18"]);
;

/////////////////////////////////
var CrewGroup334 = Parse.Object.extend("CrewGroup");

eCrew334 = EMSObject.eCrew;
for (var x = 0; x < EMSObject.eCrew.CrewGroup.length; x++) {
    CrewGroup = EMSObject.eCrew.CrewGroup[x];
    CrewGroup334.set("MemberID", CrewGroup["eCrew.01"]);
    CrewGroup334.set("MemberLevel", CrewGroup["eCrew.02"]);
    CrewGroup334.set("MemberResponseRole", CrewGroup["eCrew.03"]);
};


/////////////////////////////////
var DeviceGroup334 = Parse.Object.extend("DeviceGroup");

eDevice334 = EMSObject.eDevice;
for (var x = 0; x < EMSObject.eDevice.DeviceGroup.length; x++) {
    DeviceGroup = EMSObject.eDevice.DeviceGroup[x];
    DeviceGroup334.set("DeviceSerialNumber", DeviceGroup["eDevice.01"]);
    DeviceGroup334.set("DateTimeofEvent", DeviceGroup["eDevice.02"]);
    DeviceGroup334.set("DeviceEventType", DeviceGroup["eDevice.03"]);

    DeviceGroup334.set("DeviceWaveformGraphicType", DeviceGroup["eDevice.04"]);
    DeviceGroup334.set("DeviceWaveformGraphic", DeviceGroup["eDevice.05"]);
    DeviceGroup334.set("DeviceMode", DeviceGroup["eDevice.06"]);

    DeviceGroup334.set("DeviceECGLead", DeviceGroup["eDevice.07"]);
    DeviceGroup334.set("DeviceECGInterpretation", DeviceGroup["eDevice.08"]);
    DeviceGroup334.set("TypeofShock", DeviceGroup["eDevice.09"]);

    DeviceGroup334.set("ShockorPacingEnergy", DeviceGroup["eDevice.10"]);
    DeviceGroup334.set("TotalNumberofShocksDelivered", DeviceGroup["eDevice.11"]);
    DeviceGroup334.set("PacingRate", DeviceGroup["eDevice.12"]);
};
//////////////////////////////////////////

var Dispatch334 = Parse.Object.extend("Dispatch");

eDispatch334 = EMSObject.eDispatch;

Dispatch = EMSObject.Dispatch;
Dispatch334.set("ComplaintReportedbyDispatch", Dispatch["eDevice.01"]);
Dispatch334.set("EMDPerformed", Dispatch["eDevice.02"]);
Dispatch334.set("EMDCardNumber", Dispatch["eDevice.03"]);
Dispatch334.set("DispatchCenterName", Dispatch["eDevice.04"]);
Dispatch334.set("DispatchPriority", Dispatch["eDevice.05"]);


///////////////////////////////////////////////////


var Disposition334 = Parse.Object.extend("Disposition");

eDisposition334 = EMSObject.eDisposition;

Disposition = EMSObject.Disposition;
Disposition334.set("DestinationTransferredToName", Disposition["eDisposition.01"]);
Disposition334.set("DestinationTransferredToCode", Disposition["eDisposition.02"]);
Disposition334.set("StreetAddress", Disposition["eDisposition.03"]);
Disposition334.set("City", Disposition["eDisposition.04"]);
Disposition334.set("State", Disposition["eDisposition.05"]);
Disposition334.set("County", Disposition["eDisposition.06"]);
Disposition334.set("Zip", Disposition["eDisposition.07"]);
Disposition334.set("Country", Disposition["eDisposition.08"]);
Disposition334.set("GPS", Disposition["eDisposition.09"]);
Disposition334.set("NationalCoordinates", Disposition["eDisposition.10"]);

Disposition334.set("NumberofPatientsTransportedinthisEMSUnit", Disposition["eDisposition.11"]);
Disposition334.set("IncidentPatientDisposition", Disposition["eDisposition.12"]);
Disposition334.set("HowPatientWasMovedtoAmbulances", Disposition["eDisposition.13"]);
Disposition334.set("PositionofPatientDuringTransports", Disposition["eDisposition.14"]);
Disposition334.set("HowPatientWasTransportedFromAmbulance", Disposition["eDisposition.15"]);

Disposition334.set("EMSTransportMethod", Disposition["eDisposition.16"]);
Disposition334.set("TransportModefromScene", Disposition["eDisposition.17"]);
Disposition334.set("AdditionalTransportModeDescriptors", Disposition["eDisposition.18"]);
Disposition334.set("ConditionofPatientatDestination", Disposition["eDisposition.19"]);
Disposition334.set("ReasonforChoosingDestinations", Disposition["eDisposition.20"]);
Disposition334.set("TypeofDestination", Disposition["eDisposition.21"]);
Disposition334.set("HospitalInPatientDestination", Disposition["eDisposition.22"]);
Disposition334.set("HospitalDesignation", Disposition["eDisposition.23"]);
Disposition334.set("DispositionInstructionsProvided", Disposition["eDisposition.26"]);


var HospitalTeamActivationGroup334 = Parse.Object.extend("HospitalTeamActivationGroup");

for (var x = 0; x < EMSObject.eDisposition.HospitalTeamActivationGroup.length; x++) {
    HospitalTeamActivationGroup = EMSObject.eDisposition.HospitalTeamActivationGroup[x];
        HospitalTeamActivationGroup334.set("DestinationTeamPreArrivalAlertorActivation", HospitalTeamActivationGroup["eDisposition.24"]);
        HospitalTeamActivationGroup334.set("DateTimeofDestinationPrearrivalAlertorActivation", HospitalTeamActivationGroup["eDisposition.25"]);
};



///////////////////////////////////////////////////


var Exam334 = Parse.Object.extend("Exam");

eExam334 = EMSObject.eExam;
var AssessmentGroup334 = Parse.Object.extend("AssessmentGroup");
var AbdomenGroup334= Parse.Object.extend("AbdomenGroup");
var ExtremityGroup334= Parse.Object.extend("ExtremityGroup");
var EyeGroup334= Parse.Object.extend("EyeGroup");
var SpineGroup334= Parse.Object.extend("SpineGroup");

eExam = EMSObject.Exam;
Exam334.set("EstimatedBodyWeightinKilograms", eExam["eExam.01"]);
Exam334.set("LengthBasedTapeMeasure", eExam["eExam.02"]);
Exam334.set("MentalStatusAssessments", eExam["eExam.19"]);
Exam334.set("NeurologicalAssessments", eExam["eExam.20"]);



for (var x = 0; x < EMSObject.eExam.AssessmentGroup.length; x++) {

    AssessmentGroup = EMSObject.eExam.AssessmentGroup[x];
    AssessmentGroup334.set("DateTimeofAssessment", AssessmentGroup["eExam.03"]);
    AssessmentGroup334.set("SkinAssessments", AssessmentGroup["eExam.04"]);
    AssessmentGroup334.set("HeadAssessments", AssessmentGroup["eExam.05"]);
    AssessmentGroup334.set("FaceAssessments", AssessmentGroup["eExam.06"]);
    AssessmentGroup334.set("NeckAssessments", AssessmentGroup["eExam.07"]);
    AssessmentGroup334.set("ChestLungsAssessments", AssessmentGroup["eExam.08"]);
    AssessmentGroup334.set("HearthAssessments", AssessmentGroup["eExam.09"]);
    AssessmentGroup334.set("PelvicAssessments", AssessmentGroup["eExam.12"]);
    AssessmentGroup334.set("MentalStatusAssessments", AssessmentGroup["eExam.19"]);
    AssessmentGroup334.set("NeurologicalAssessments", AssessmentGroup["eExam.20"]);

    for (var y = 0; y < EMSObject.eExam.AssessmentGroup[x].AbdomenGroup.length; y++) {
        AbdomenGroup = EMSObject.eExam.AssessmentGroup[x].AbdomenGroup[y]
        AbdomenGroup334.set("AbdominalAssessmentFindingLocation", AbdomenGroup["eExam.10"]);
        AbdomenGroup334.set("AbdominalAssessment ", AbdomenGroup["eExam.11"]);
    }

    for (var y = 0; y < EMSObject.eExam.AssessmentGroup[x].SpineGroup.length; y++) {
        SpineGroup = EMSObject.eExam.AssessmentGroup[x].SpineGroup[y]
        SpineGroup334.set("BackandSpineAssessmentFindingLocation", SpineGroup["eExam.13"]);
        SpineGroup334.set("BackandSpineAssessment ", SpineGroup["eExam.14"]);
    }
    
    for (var y = 0; y < EMSObject.eExam.AssessmentGroup[x].ExtremityGroup.length; y++) {
        ExtremityGroup = EMSObject.eExam.AssessmentGroup[x].ExtremityGroup[y]
        ExtremityGroup334.set("ExtremityFindingLocation", ExtremityGroup["eExam.15"]);
        ExtremityGroup334.set("ExtremityAssessment ", ExtremityGroup["eExam.16"]);

    }

    
    for (var y = 0; y < EMSObject.eExam.AssessmentGroup[x].EyeGroup.length; y++) {
        EyeGroup= EMSObject.eExam.AssessmentGroup[x].EyeGroup[y]
        EyeGroup334.set("EyeFindingLocation", EyeGroup["eExam.15"]);
        EyeGroup334.set("EyeAssessment ", EyeGroup["eExam.16"]);
    }    
};




///////////////////////////////////////////////////


var eHistory = Parse.Object.extend("eHistory");

eHistory334 = EMSObject.eHistory;
var PractitionerGroup334 = Parse.Object.extend("PractitionerGroup");
var ImmunizationsGroup334 = Parse.Object.extend("ImmunizationsGroup");
var CurrentMedsGroup334 = Parse.Object.extend("CurrentMedsGroup");



eHistory334.set("Barriers to Patient Care", eHistory["eHistory.01"]);
eHistory334.set(" Advance Directives", eHistory["eHistory.05"]);
eHistory334.set("Medication Allergies", eHistory["eHistory.06"]);
eHistory334.set("Environmental/Food Allergies", eHistory["eHistory.07"]);
eHistory334.set("Medical/Surgical History", eHistory["eHistory.08"]);
eHistory334.set("Medical History Obtained From", eHistory["eHistory.09"]);
eHistory334.set("Presence of Emergency Information Form", eHistory["eHistory.16"]);
eHistory334.set("Alcohol/Drug Use Indicators", eHistory["eHistory.17"]);
eHistory334.set("Pregnancy", eHistory["eHistory.18"]);
eHistory334.set("Last Oral Intake", eHistory["eHistory.19"]);

   
for (var y = 0; y < EMSObject.eHistory.PractitionerGroup.length; y++) {
    PractitionerGroup = EMSObject.eHistory.PractitionerGroup[y]
    PractitionerGroup334.set("PracticionerLastName", PractitionerGroup["eHistory.02"]);
    PractitionerGroup334.set("PracticionerFirstName ", PractitionerGroup["eHistory.03"]);
    PractitionerGroup334.set("PracticionerMioddleName ", PractitionerGroup["eHistory.04"]);
};

for (var y = 0; y < EMSObject.eHistory.ImmunizationsGroup.length; y++) {
    ImmunizationsGroup = EMSObject.eHistory.AssessmentGroupImmunizationsGroup[y]
    ImmunizationsGroup334.set("TypeofImmunization", ImmunizationsGroup["eHistory.10"]);
    ImmunizationsGroup334.set("DateofImmunization ", ImmunizationsGroup["eHistory.11"]);
};

for (var y = 0; y < EMSObject.eHistory.CurrentMedsGroup.length; y++) {
    CurrentMedsGroup = EMSObject.eHistory.AssessmentGroup[x].CurrentMedsGroup[y]
    CurrentMedsGroup334.set("CurrentMedications", CurrentMedsGroup["eHistory.12"]);
    CurrentMedsGroup334.set("CurrentMedicationsDosage", CurrentMedsGroup["eHistory.13"]);
    CurrentMedsGroup334.set("CurrentMedicationsDosageUnit", CurrentMedsGroup["eHistory.14"]);
    CurrentMedsGroup334.set("CurrentMedicationAdministrationRoute", CurrentMedsGroup["eHistory.15"]);
};


///////////////////////////////////////////////////


var eInjury = Parse.Object.extend("eInjury");
var SeatGroup = Parse.Object.extend("SeatGroup");
eInjury334 = EMSObject.eInjury;


eInjury334.set("CauseofInjury", eInjury["eInjury.01"]);
eInjury334.set("MechanismofInjury", eInjury["eInjury.02"]);
eInjury334.set("TraumaCenterCriteria", eInjury["eInjury.03"]);
eInjury334.set("VehicularPedestrianorOtherInjuryRiskFactors", eInjury["eInjury.04"]);
eInjury334.set("MainAreaoftheVehicleImpactedbytheCollision", eInjury["eInjury.05"]);
eInjury334.set("LocationofPatientinVehicle", eInjury["eInjury.06"]);
eInjury334.set("UseofOccupantSafetyEquipments", eInjury["eInjury.07"]);
eInjury334.set("AirbagDeployment", eInjury["eInjury.08"]);
eInjury334.set("HeightofFall", eInjury["eInjury.09"]);
eInjury334.set("OSHAPersonalProtectiveEquipmentUsed", eInjury["eInjury.10"]);
eInjury334.set("ACNSystemCompanyProvidingACNData", eInjury["eInjury.11"]);
eInjury334.set("ACNIncidentID", eInjury["eInjury.12"]);
eInjury334.set("ACNCallBackPhoneNumbers", eInjury["eInjury.13"]);
eInjury334.set("DateTimeofACNIncident", eInjury["eInjury.14"]);
eInjury334.set("ACNIncidentLocation", eInjury["eInjury.15"]);
eInjury334.set("ACNIncidentVehicleBodyType", eInjury["eInjury.16"]);
eInjury334.set("ACNIncidentVehicleManufacturer", eInjury["eInjury.17"]);
eInjury334.set("ACNIncidentVehicleMake", eInjury["eInjury.18"]);
eInjury334.set("ACNIncidentVehicleModel", eInjury["eInjury.19"]);
eInjury334.set("ACNIncidentVehicleModelYear", eInjury["eInjury.20"]);
eInjury334.set("ACNIncidentMultipleImpacts", eInjury["eInjury.21"]);
eInjury334.set("ACNIncidentDeltaVelocitys", eInjury["eInjury.22"]);
eInjury334.set("ACNHighProbabilityofInjury", eInjury["eInjury.23"]);
eInjury334.set("ACNIncidentPDOF", eInjury["eInjury.24"]);
eInjury334.set("ACNIncidentRollover", eInjury["eInjury.25"]);

for (var y = 0; y < EMSObject.eInjury.SeatGroup.length; y++) {
    SeatGroup = EMSObject.eInjury.SeatGroup[y]
    SeatGroup334.set("ACNVehicleSeatLocation", SeatGroup["eInjury.26"]);
    SeatGroup334.set("SeatOccupied ", SeatGroup["eInjury.27"]);
    SeatGroup334.set("ACNIncidentSeatbeltUse", SeatGroup["eInjury.28"]);
    SeatGroup334.set("ACNIncidentAirbagDeployed ", SeatGroup["eInjury.29"]);
};



///////////////////////////////////////////////////

var eLabs = EMSObject.eLabs
var eLabs334 = Parse.Object.extend("eLabs");
var LabsGroup334 = Parse.Object.extend("LabsGroup");
var LabResultsGroup334 = Parse.Object.extend("LabResultsGroup");
var LabImageGroup334 = Parse.Object.extend("LabImageGroup");
var WaveformGraphicGroup334 = Parse.Object.extend("WaveformGraphicGroup");

for (var i = 0; i < EMSObject.eLabs.LabGroup.length; i++) {

    LabGroup = EMSObject.eLabs.LabGroup[i];
    LabGroup334.set("DateTimeofLaboratoryorImagingResult", LabGroup["eLabs.01"]);
    LabGroup334.set("StudyResultPriortothisUnitEMSCare", LabGroup["eLabs.02"]);

    for (var x = 0; x < EMSObject.eLabs.LabGroup[i].LabResultGroup.length; x++) {
        LabResultGroup = EMSObject.eLabs.LabGroup[i].LabResultGroup[x];
        LabResultGroup334.set("LaboratoryResultType", LabResultGroup["eLabs.03"]);
        LabResultGroup334.set("LaboratoryResult", LabResultGroup["eLabs.03"]);
    };

    for (var x = 0; x < EMSObject.eLabs.LabGroup[i].LabImageGroup.length; x++) {
        LabImageGroup = EMSObject.eLabs.LabGroup[i].LabImageGroup[x];
        LabImageGroup334.set("ImagingStudyType", LabImageGroup["eLabs.05"]);
        LabImageGroup334.set("ImagingStudyResults", LabImageGroup["eLabs.06"]);

        for (var y = 0; y < EMSObject.eLabs.LabGroup[i].LabImageGroup[x].WaveformGraphicGroup.length; y++) {
            WaveformGraphicGroup = EMSObject.eLabs.LabGroup[i].LabImageGroup[x].WaveformGraphicGroup;
            WaveformGraphicGroup334.set("ImagingStudyFileorWaveformGraphicType", WaveformGraphicGroup["eLabs.07"]);
            WaveformGraphicGroup334.set("ImagingStudyFileorWaveformGraphic", WaveformGraphicGroup["eLabs.08"]);
        }
    };
};

////////////////////////////////////////////////

var eMedications = Parse.Object.extend("eMedications");
var MedicationsGroups334 = Parse.Object.extend("MedicationsGroup");
var eMedications = EMSObject.eMedications

MedicationsGroups334.set("Date/Time Medication Administered", eMedications["eMedications.01"]);
MedicationsGroups334.set("MedicationAdministeredPriortothisUnitEMSCare", eMedications["eMedications.02"]);
MedicationsGroups334.set("MedicationGiven", eMedications["eMedications.03"]);
MedicationsGroups334.set("MedicationAdministeredRoute", eMedications["eMedications.04"]);
MedicationsGroups334.set("MedicationDosage", eMedications["eMedications.05"]);
MedicationsGroups334.set("MedicationDosageUnits", eMedications["eMedications.06"]);
MedicationsGroups334.set("ResponsetoMedication", eMedications["eMedications.07"]);
MedicationsGroups334.set("MedicationComplication", eMedications["eMedications.08"]);
MedicationsGroups334.set("MedicationCrewID", eMedications["eMedications.09"]);
MedicationsGroups334.set("RoleTypeofPersonAdministeringMedication", eMedications["eMedications.10"]);
MedicationsGroups334.set("MedicationAuthorization", eMedications["eMedications.11"]);
MedicationsGroups334.set("MedicationAuthorizingPhysician", eMedications["eMedications.12"]);

///////////////////////////////////////////


var eOther334 = Parse.Object.extend("eOther");
var EMSCrewMemberGroup334 = Parse.Object.extend("EMSCrewMemberGroup");
var FileGroup334 = Parse.Object.extend("FileGroup");
var SignatureGroup334 = Parse.Object.extend("SignatureGroup");

var eOther = EMSObject.eOther

eOther334.set("ReviewRequested", eOther["eOther.01"]);
eOther334.set("PotentialSystemofCareSpecialtyRegistryPatients", eOther["eOther.02"]);
eOther334.set("NaturalSuspectedIntentionalorUnintentionalDisasters", eOther["eOther.07"]);
eOther334.set("CrewMemberCompletingthisReport", eOther["eOther.08"]);

for (var i = 0; i < EMSObject.eOther.EMSCrewMemberGroup.length; i++) {

    EMSCrewMemberGroup = EMSObject.eOther.EMSCrewMemberGroup[i];
    EMSCrewMemberGroup334.set("PersonalProtectiveEquipmentUsed", EMSCrewMemberGroup["eOther.03"]);
    EMSCrewMemberGroup334.set("EMSProfessionalID", EMSCrewMemberGroup["eOther.04"]);
    EMSCrewMemberGroup334.set("SuspectedEMSWorkRelatedExposureInjuryorDeath", EMSCrewMemberGroup["eOther.05"]);
    EMSCrewMemberGroup334.set("TypeofWorkRelatedInjuryDeathorSuspectedExposure", EMSCrewMemberGroup["eOther.06"]);
};
for (var x = 0; x < EMSObject.eOther.FileGroup.length; x++) {
    FileGroup = EMSObject.eLabs.LabGroup[i].LabResultGroup[x];
    FileGroup334.set("LaboratoryResultType", FileGroup["eOther.09"]);
    FileGroup334.set("LaboratoryResultType", FileGroup["eOther.10"]);
    FileGroup334.set("LaboratoryResultType", FileGroup["eOther.11"]);
};

for (var x = 0; x < EMSObject.eOther.SignatureGroup.length; x++) {
    SignatureGroup = EMSObject.eLabs.LabGroup[i].LabImageGroup[x];
    SignatureGroup334.set("TypeofPersonSigning", SignatureGroup["eOther.12"]);
    SignatureGroup334.set("SignatureReason", SignatureGroup["eOther.13"]);
    SignatureGroup334.set("TypeOfPatientRepresentative", SignatureGroup["eOther.14"]);
    SignatureGroup334.set("SignatureStatus", SignatureGroup["eOther.15"]);
    SignatureGroup334.set("SignatureFileName", SignatureGroup["eOther.16"]);
    SignatureGroup334.set("SignatureFileType", SignatureGroup["eOther.17"]);
    SignatureGroup334.set("SignatureGraphic", SignatureGroup["eOther.18"]);
    SignatureGroup334.set("DateTimeofSignature", SignatureGroup["eOther.19"]);
    SignatureGroup334.set("LastName", SignatureGroup["eOther.20"]);
    SignatureGroup334.set("FirstName", SignatureGroup["eOther.21"]);
};



///////////////////////////////////////////


var eOutcome334 = Parse.Object.extend("eOutcome");
var ExternalDataGroup334 = Parse.Object.extend("ExternalDataGroup");
var eOutcome = EMSObject.eOutcome
eOutcome334.set("EmergencyDepartmentDisposition", eOutcome["eOutcome.01"]);
eOutcome334.set("HospitalDisposition", eOutcome["eOutcome.02"]);
eOutcome334.set("EmergencyDepartmentChiefComplaint", eOutcome["eOutcome.06"]);
eOutcome334.set("FirstEDSystolicBloodPressure", eOutcome["eOutcome.07"]);
eOutcome334.set("EmergencyDepartmentRecordedCauseofInjury", eOutcome["eOutcome.08"]);
eOutcome334.set("EmergencyDepartmentProcedures", eOutcome["eOutcome.09"]);
eOutcome334.set("EmergencyDepartmentDiagnosis", eOutcome["eOutcome.10"]);
eOutcome334.set("DateTimeofHospitalAdmission", eOutcome["eOutcome.11"]);
eOutcome334.set("HospitalProcedures", eOutcome["eOutcome.12"]);
eOutcome334.set("HospitalDiagnosis", eOutcome["eOutcome.13"]);
eOutcome334.set("TotalICULengthofStay", eOutcome["eOutcome.14"]);
eOutcome334.set("TotalVentilatorDays", eOutcome["eOutcome.15"]);
eOutcome334.set("DateTimeofHospitalDischarge", eOutcome["eOutcome.16"]);
eOutcome334.set("OutcomeatHospitalDischarge", eOutcome["eOutcome.17"]);

for (var i = 0; i < EMSObject.eOutcome.ExternalDataGroup.length; i++) {
    ExternalDataGroup = EMSObject.eOutcome.ExternalDataGroup[i];
    ExternalDataGroup334.set("ExternalReportIDNumberType", ExternalDataGroup["eOutcome.03"]);
    ExternalDataGroup334.set("ExternalReportIDNumber", ExternalDataGroup["eOutcome.04"]);
    ExternalDataGroup334.set("OtherReportRegistryType", ExternalDataGroup["eOutcome.05"]);    
};


///////////////////////////////////////////


var ePatient334 = Parse.Object.extend("ePatient");
var ePatient = EMSObject.ePatient

ePatient334.set("EMSPatientID", ePatient["ePatient.01"]);
ePatient334.set("LastName", ePatient["ePatient.02"]);
ePatient334.set("FirstName", ePatient["ePatient.03"]);
ePatient334.set("Middle", ePatient["ePatient.04"];
ePatient334.set("Address", ePatient["ePatient.05"]);
ePatient334.set("City", ePatient["ePatient.06"]);
ePatient334.set("County", ePatient["ePatient.07"]);
ePatient334.set("State", ePatient["ePatient.08"]);
ePatient334.set("Zip", ePatient["ePatient.09"]);
ePatient334.set("Country", ePatient["ePatient.10"]);
ePatient334.set("CensusTract", ePatient["ePatient.11"]);
ePatient334.set("SSN", ePatient["ePatient.12"]);
ePatient334.set("Gender", ePatient["ePatient.13"]);
ePatient334.set("Race", ePatient["ePatient.14"]);
ePatient334.set("Age", ePatient["ePatient.15"]);
ePatient334.set("AgeUnits", ePatient["ePatient.16"]);
ePatient334.set("DateOfBirth", ePatient["ePatient.17"]);
ePatient334.set("PhoneNumbers", ePatient["ePatient.18"]);
ePatient334.set("eMailAddresses", ePatient["ePatient.19"]);
ePatient334.set("StateIssuingDriversLicense", ePatient["ePatient.20"]);
ePatient334.set("DriversLicenseNumber", ePatient["ePatient.21"]);



///////////////////////////////////////////


var ePayment334 = Parse.Object.extend("ePayment");

var InsuranceGroup334 = Parse.Object.extend("InsuranceGroup");
var SuppplyItemGroup334 = Parse.Object.extend("SuppplyItemGroup");

var ePayment = EMSObject.ePayment;

ePayment334.set(" Primary Method of Payment", ePayment["ePayment.01"]);
ePayment334.set("Physician Certification Statement", ePayment["ePayment.02"]);
ePayment334.set("Date Physician Certification Statement Signed", ePayment["ePayment.03"]);
ePayment334.set("Reason for Physician Certification Statement", ePayment["ePayment.04"];
ePayment334.set("Healthcare Provider Type Signing Physician Certification Statement", ePayment["ePayment.05"]);
ePayment334.set("Last Name of Individual Signing Physician Certification Statement", ePayment["ePayment.06"]);
ePayment334.set("First Name of Individual Signing Physician Certification Statement", ePayment["ePayment.07"]);
ePayment334.set("Patient Resides in Service Area", ePayment["ePayment.08"]);


for (var i = 0; i < EMSObject.ePayment.InsuranceGroup.length; i++) {
    InsuranceGroup= ePayment.InsuranceGroup[i];
    ePayment334.set("InsuranceCompanyID", ePayment["ePayment.09"]);
    ePayment334.set("CompanyName", ePayment["ePayment.10"]);
    ePayment334.set("BillingPriority", ePayment["ePayment.11"]);
    ePayment334.set("Address", ePayment["ePayment.12"]);
    ePayment334.set("City", ePayment["ePayment.13"]);
    ePayment334.set("State", ePayment["ePayment.14"]);
    ePayment334.set("Zip", ePayment["ePayment.15"]);
    ePayment334.set("Country", ePayment["ePayment.16"]);
    ePayment334.set("GroupIDName", ePayment["ePayment.17"]);
    ePayment334.set("PolicyIDNumber", ePayment["ePayment.18"]);
    ePayment334.set("InsuredLastName", ePayment["ePayment.19"]);
    ePayment334.set("InsuredFirstName", ePayment["ePayment.20"]);
    ePayment334.set("InsuredMiddleName", ePayment["ePayment.21"]);
    ePayment334.set("RelationshipToInsured", ePayment["ePayment.21"]);
};


ePayment334.set("ClosestRelativeGuardianLastName", ePayment["ePayment.23"]);
ePayment334.set("ClosestRelativeGuardianFirstName", ePayment["ePayment.24"]);
ePayment334.set("ClosestRelativeGuardianMiddleInitialName", ePayment["ePayment.25"]);
ePayment334.set("ClosestRelativeGuardianStreetAddress", ePayment["ePayment.26"]);
ePayment334.set("ClosestRelativeGuardianCity", ePayment["ePayment.27"]);
ePayment334.set("ClosestRelativeGuardianState", ePayment["ePayment.28"]);
ePayment334.set("ClosestRelativeGuardianZIPCode", ePayment["ePayment.29"]);
ePayment334.set("ClosestRelativeGuardianCountry", ePayment["ePayment.30"]);
ePayment334.set("ClosestRelativeGuardianPhoneNumber", ePayment["ePayment.31"]);
ePayment334.set("ClosestRelativeGuardianRelationship", ePayment["ePayment.32"]);
ePayment334.set("PatientEmployer", ePayment["ePayment.33"]);
ePayment334.set("PatientEmployerAddress", ePayment["ePayment.34"]);
ePayment334.set("PatientEmployerCity", ePayment["ePayment.35"]);
ePayment334.set("PatientEmployerState", ePayment["ePayment.36"]);
ePayment334.set("PatientEmployerZIPCode", ePayment["ePayment.37"]);
ePayment334.set("PatientEmployerCountry", ePayment["ePayment.38"]);
ePayment334.set("PatientEmployerPrimaryPhoneNumber", ePayment["ePayment.39"]);
ePayment334.set("ResponseUrgency", ePayment["ePayment.40"]);
ePayment334.set("PatientTransportAssessment", ePayment["ePayment.41"]);
ePayment334.set("SpecialtyCareTransportCareProvider", ePayment["ePayment.42"]);
ePayment334.set("AmbulanceTransportCode", ePayment["ePayment.43"]);
ePayment334.set("AmbulanceTransportReasonCode", ePayment["ePayment.44"]);
ePayment334.set("RoundTripPurposeDescription", ePayment["ePayment.45"]);
ePayment334.set("StretcherPurposeDescription", ePayment["ePayment.46"]);
ePayment334.set("AmbulanceConditionsIndicator", ePayment["ePayment.47"]);
ePayment334.set("MileagetoClosestHospitalFacility", ePayment["ePayment.48"]);
ePayment334.set("ALSAssessmentPerformedandWarranted", ePayment["ePayment.49"]);
ePayment334.set("CMSServiceLevel", ePayment["ePayment.50"]);
ePayment334.set("EMSConditionCode", ePayment["ePayment.51"]);
ePayment334.set("CMSTransportationIndicator", ePayment["ePayment.52"]);
ePayment334.set("TransportAuthorizationCode", ePayment["ePayment.53"]);
ePayment334.set("PriorAuthorizationCodePayer", ePayment["ePayment.54"]);


for (var i = 0; i < EMSObject.ePayment.SupplyItemGroup.length; i++) {
    SupplyItemGroup= ePayment.InsuranceGroup[i];
    SupplyItemGroup334.set("SupplyItemUsedName", SupplyItemGroup["ePayment.55"]);
    SupplyItemGroup334.set("NumberofSupplyItemUsed", SupplyItemGroup["ePayment.56"]);
};

/////////////////////////////////////

var eProcedures334 = Parse.Object.extend("eProcedures");
var ProcedureGroup334 = Parse.Object.extend("ProcedureGroup");
var eProcedures= EMSObject.eProcedures;

for (var i = 0; i < eProcedures.ProcedureGroup.length; i++) {
    ProcedureGroup= eProcedures.ProcedureGroup[i];
    ProcedureGroup334.set("DateTimeProcedurePerformed", ProcedureGroup["eProcedures.01"]);
    ProcedureGroup334.set("ProcedurePerformedPriortothisUnitEMSCare", ProcedureGroup["eProcedures.02"]);
    ProcedureGroup334.set("Procedure", ProcedureGroup["eProcedures.03"]);
    ProcedureGroup334.set("SizeofProcedureEquipment", ProcedureGroup["eProcedures.04"]);
    ProcedureGroup334.set("NumberofProcedureAttempts", ProcedureGroup["eProcedures.05"]);
    ProcedureGroup334.set("ProcedureSuccessful", ProcedureGroup["eProcedures.06"]);
    ProcedureGroup334.set("ProcedureComplication", ProcedureGroup["eProcedures.07"]);
    ProcedureGroup334.set("ResponsetoProcedure", ProcedureGroup["eProcedures.08"]);
    ProcedureGroup334.set("ProcedureCrewMembersID", ProcedureGroup["eProcedures.09"]);
    ProcedureGroup334.set("RoleTypeofPersonPerformingtheProcedure", ProcedureGroup["eProcedures.10"]);
    ProcedureGroup334.set("ProcedureAuthorization", ProcedureGroup["eProcedures.11"]);
    ProcedureGroup334.set("ProcedureAuthorizingPhysician", ProcedureGroup["eProcedures.12"]);
    ProcedureGroup334.set("VascularAccessLocation", ProcedureGroup["eProcedures.13"]);
};

/////////////////////////////////
var eProtocols334 = Parse.Object.extend("eProtocols");
var eProtocols= EMSObject.eProtocols;
var ProtocolsGroup334 = Parse.Object.extend("ProtocolsGroup");


for (var i = 0; i < eProtocols.ProtocolsGroup.length; i++) {
    ProtocolsGroup= eProtocols.ProtocolsGroup[i];
    ProtocolsGroup334.set("Protocols Used", ProtocolsGroup["Protocols.01"]);
    ProtocolsGroup334.set("Protocol Age Category", ProtocolsGroup["Protocols.02"]);
};


/////////////////////////////
var eRecord334 = Parse.Object.extend("eRecord");
var eRecord= EMSObject.eRecord;
eRecord334.set("PatientCareReportNumber", eRecord["eRecord.01"]);
eRecord334.set("SoftwareCreator", eRecord["eRecord.02"]);
eRecord334.set("SoftwareName", eRecord["eRecord.03"]);
eRecord334.set("SoftwareVersion", eRecord["eRecord.04"]);
    

///////////////////////////////////////////


var eScene334 = Parse.Object.extend("eScene");
var eScene= EMSObject.eScene;
var ResponderGroup334 = Parse.Object.extend("ResponderGroup");

eScene334.set("FirstEMSUnitonScene", eScene["eScene.01"]);

for (var i = 0; i < EMSObject.eScene.ResponderGroup.length; i++) {
    ResponderGroup =EMSObject.eScene.ResponderGroup[i];

    ResponderGroup334.set("OtherEMSorPublicSafetyAgenciesatScene", ResponderGroup["eScene.02"]);
    ResponderGroup334.set("OtherEMSorPublicSafetyAgencyIDNumber", ResponderGroup["eScene.03"]);
    ResponderGroup334.set("TypeofOtherServiceatScene", ResponderGroup["eScene.04"]);
};
eScene334.set("DateTimeInitialResponderArrivedonScene", eScene["eScene.05"]);
eScene334.set("NumberofPatientsatScene", eScene["eScene.06"]);
eScene334.set("MassCasualtyIncident", eScene["eScene.07"]);
eScene334.set("TriageClassificationforMCIPatient", eScene["eScene.08"]);
eScene334.set("IncidentLocationType", eScene["eScene.09"]);
eScene334.set("IncidentFacilityCode", eScene["eScene.10"]);
eScene334.set("SceneGPSLocation", eScene["eScene.11"]);
eScene334.set("SceneUSNationalGridCoordinates", eScene["eScene.12"]);
eScene334.set("IncidentFacilityorLocationName", eScene["eScene.13"]);
eScene334.set("MilePostorMajorRoadway", eScene["eScene.14"]);
eScene334.set("IncidentStreetAddress", eScene["eScene.15"]);
eScene334.set("IncidentApartmentSuiteorRoom", eScene["eScene.16"]);
eScene334.set("IncidentCity", eScene["eScene.17"]);
eScene334.set("IncidentState", eScene["eScene.18"]);
eScene334.set("IncidentZIPCode", eScene["eScene.19"]);
eScene334.set("SceneCrossStreetorDirections", eScene["eScene.20"]);
eScene334.set("IncidentCounty", eScene["eScene.21"]);
eScene334.set("IncidentCountry", eScene["eScene.22"]);
eScene334.set("IncidentCensusTract", eScene["eScene.23"]);



//////////////////////////////////////////
var eResponse334 = Parse.Object.extend("eResponse");
var eResponse= EMSObject.eResponse;

eResponse334.set("EMSAgencyNumber", eResponse["eResponse.01"]);
eResponse334.set("EMSAgencyName", eResponse["eResponse.02"]);
eResponse334.set("IncidentNumber", eResponse["eResponse.03"]);
eResponse334.set("EMSResponseNumber", eResponse["eResponse.04"]);
eResponse334.set("TypeofServiceRequested", eResponse["eResponse.05"]);
eResponse334.set("StandbyPurpose", eResponse["eResponse.06"]);
eResponse334.set("PrimaryRoleoftheUnit", eResponse["eResponse.07"]);
eResponse334.set("TypeofDispatchDelay", eResponse["eResponse.08"]);
eResponse334.set("TypeofResponseDelay", eResponse["eResponse.09"]);
eResponse334.set("TypeofSceneDelay", eResponse["eResponse.10"]);
eResponse334.set("TypeofTransportDelay", eResponse["eResponse.11"]);
eResponse334.set("TypeofTurnAroundDelay", eResponse["eResponse.12"]);
eResponse334.set("EMSVehicleNumber", eResponse["eResponse.13"]);
eResponse334.set("EMSUnitCallSign", eResponse["eResponse.14"]);
eResponse334.set("LevelofCareofThisUnit", eResponse["eResponse.15"]);
eResponse334.set("VehicleDispatchLocation", eResponse["eResponse.16"]);
eResponse334.set("VehicleDispatchGPS", eResponse["eResponse.17"]);
eResponse334.set("VehicleDispatchNationalGrid", eResponse["eResponse.18"]);
eResponse334.set("BeginningOdometerReadingofRespondingVehicle", eResponse["eResponse.19"]);
eResponse334.set("OnSceneOdometerReadingofRespondingVehicle", eResponse["eResponse.20"]);
eResponse334.set("PatientDestinationOdometerReadingofRespondingVehicle", eResponse["eResponse.21"]);
eResponse334.set("EndingOdometerReadingofRespondingVehicle", eResponse["eResponse.22"]);
eResponse334.set("ResponseModetoScene", eResponse["eResponse.23"]);
eResponse334.set("AdditionalResponseModeDescriptors", eResponse["eResponse.24"]);


//////////////////////////////////////
eState = EMSObject.eState;
var eState334 = Parse.Object.extend("eState");

for (var i = 0; i < DemographicsObject.eState.length; i++)
{
    eState334.set("RequiredElement", EMSObject.eState[i]["dState.01"]);
};
//////////////////////////////////////
eNarrative= EMSObject.Narrative;
var eNarrative334 = Parse.Object.extend("eNarrative");

eNarrative334.set("PatientCareReportNarrative", eNarrative["Narrative.01"]);


//////////////////////////////////////////
var eTimes334 = Parse.Object.extend("eTimes");
var eTimes= EMSObject.eTimes;

eTimes334.set("PSAPCallDateTime", eTimes["eTimes.01"]);
eTimes334.set("DispatchNotifiedDateTime", eTimes["eTimes.02"]);
eTimes334.set("UnitNotifiedbyDispatchDateTime", eTimes["eTimes.03"]);
eTimes334.set("DispatchAcknowledgedDateTime", eTimes["eTimes.04"]);
eTimes334.set("UnitEnRouteDateTime", eTimes["eTimes.05"]);
eTimes334.set("UnitArrivedonSceneDateTime", eTimes["eTimes.06"]);
eTimes334.set("ArrivedatPatientDateTime", eTimes["eTimes.07"]);
eTimes334.set("TransferofEMSPatientCareDateTime", eTimes["eTimes.08"]);
eTimes334.set("UnitLeftSceneDateTime", eTimes["eTimes.09"]);
eTimes334.set("ArrivalatDestinationLandingAreaDateTime", eTimes["eTimes.10"]);
eTimes334.set("PatientArrivedatDestinationDateTime", eTimes["eTimes.11"]);
eTimes334.set("DestinationPatientTransferofCareDateTime", eTimes["eTimes.12"]);
eTimes334.set("UnitBackinServiceDateTime", eTimes["eTimes.13"]);
eTimes334.set("UnitCanceledDateTime", eTimes["eTimes.14"]);
eTimes334.set("UnitBackatHomeLocationDateTime", eTimes["eTimes.15"]);
eTimes334.set("EMSCallCompletedDateTime", eTimes["eTimes.16"]);


/////////////////////////////

var eVitals334= Parse.Object.extend("eVitals");
var eVitals= EMSObject.eScene;
var eVitalsGroup334 = Parse.Object.extend("VitalGroup");


for (var i = 0; i < EMSObject.eVitals.VitalGroup.length; i++) 
{
    VitalGroup=EMSObject.eVitals.VitalGroup[i];

    eVitalsGroup334.set("DateTimeVitalSignsTaken", VitalGroup["eVitals.01"]);
    eVitalsGroup334.set("ObtainedPriortothisUnitEMSCare", VitalGroup["eVitals.02"]);
    eVitalsGroup334.set("CardiacRhythmElectrocardiography ", VitalGroup["eVitals.03"]);
    eVitalsGroup334.set("ECGType", VitalGroup["eVitals.04"]);
    eVitalsGroup334.set("MethodofECGInterpretation", VitalGroup["eVitals.05"]);
    eVitalsGroup334.set("SBP", VitalGroup["eVitals.06"]);
    eVitalsGroup334.set("DBP", VitalGroup["eVitals.07"]);
    eVitalsGroup334.set("MethodofBloodPressureMeasurement", VitalGroup["eVitals.08"]);
    eVitalsGroup334.set("MeanArterialPressure", VitalGroup["eVitals.09"]);
    eVitalsGroup334.set("HeartRate", VitalGroup["eVitals.10"]);
    eVitalsGroup334.set("MethodofHeartRateMeasurement", VitalGroup["eVitals.11"]);
    eVitalsGroup334.set("PulseOximetry", VitalGroup["eVitals.12"]);
    eVitalsGroup334.set("PulseRhythm", VitalGroup["eVitals.13"]);
    eVitalsGroup334.set("RespiratoryRate", VitalGroup["eVitals.14"]);
    eVitalsGroup334.set("RespiratoryEffort", VitalGroup["eVitals.15"]);
    eVitalsGroup334.set("CarbonDioxide", VitalGroup["eVitals.16"]);
    eVitalsGroup334.set("CarbonMonoxide", VitalGroup["eVitals.17"]);
    eVitalsGroup334.set("BloodGlucoseLevel", VitalGroup["eVitals.18"]);
    eVitalsGroup334.set("GlasgowComaScoreEye", VitalGroup["eVitals.19"]);
    eVitalsGroup334.set("GlasgowComaScoreVerbal", VitalGroup["eVitals.20"]);
    eVitalsGroup334.set("GlasgowComaScoreMotor", VitalGroup["eVitals.21"]);
    eVitalsGroup334.set("GlasgowComaScoreQualifier", VitalGroup["eVitals.22"]);
    eVitalsGroup334.set("TotalGlasgowComaScore", VitalGroup["eVitals.23"]);
    eVitalsGroup334.set("Temperature", VitalGroup["eVitals.24"]);
    eVitalsGroup334.set("TemperatureMethod", VitalGroup["eVitals.25"]);
    eVitalsGroup334.set("LevelofResponsiveness", VitalGroup["eVitals.26"]);
    eVitalsGroup334.set("PainScaleScore", VitalGroup["eVitals.27"]);
    eVitalsGroup334.set("PainScaleType", VitalGroup["eVitals.28"]);
    eVitalsGroup334.set("StrokeScaleScore", VitalGroup["eVitals.29"]);
    eVitalsGroup334.set("StrokeScaleType", VitalGroup["eVitals.30"]);
    eVitalsGroup334.set("ReperfusionChecklist", VitalGroup["eVitals.31"]);
    eVitalsGroup334.set("APGAR", VitalGroup["eVitals.32"]);
    eVitalsGroup334.set("RevisedTraumaScore", VitalGroup["eVitals.33"]);
};

/////////////////////////////

var eSituation334= Parse.Object.extend("eSituation");
var eSituation= EMSObject.Situation;
var PatientComplaintGroup334 = Parse.Object.extend("PatientComplaintGroup");


for (var i = 0; i < EMSObject.eSituation.VitalGroup.length; i++) 
{
    VitalGroup=EMSObject.eSituation.VitalGroup[i];

    eSituation334.set("DateTimeofSymptomOnsetLastNormal", eSituation["eSituation.01"]);
    eSituation334.set("PossibleInjury", eSituation["eSituation.02"]);

    for (var x = 0; x < EMSObject.eSituation.VitalGroup.PatientComplaintGroup.length; x++) 
    {
        PatientComplaintGroup=EMSObject.eVitals.VitalGroup[i].PatientComplaintGroup[x];
        PatientComplaintGroup334.set("ComplaintType ", PatientComplaintGroup["eSituation.03"]);
        PatientComplaintGroup334.set("Complaint", PatientComplaintGroup["eSituation.04"]);
        PatientComplaintGroup334.set("DurationofComplaint", PatientComplaintGroup["eSituation.05"]);
        PatientComplaintGroup334.set("TimeUnitsofDurationofComplaint", PatientComplaintGroup["eSituation.06"]);
        PatientComplaintGroup334.set("ChiefComplaintAnatomicLocation", PatientComplaintGroup["eSituation.07"]);
    };
    eSituation334.set("ChiefComplaintOrganSystem", eSituation["eSituation.08"]);
    eSituation334.set("PrimarySymptom", eSituation["eSituation.09"]);
    eSituation334.set("OtherAssociatedSymptoms", eSituation["eSituation.10"]);
    eSituation334.set("ProviderPrimaryImpression", eSituation["eSituation.11"]);
    eSituation334.set("ProviderSecondaryImpressions", eSituation["eSituation.12"]);
    eSituation334.set("InitialPatientAcuity", eSituation["eSituation.13"]);

    eSituation334.set("WorkRelatedIllnessInjury", eSituation["eSituation.14"]);
    eSituation334.set("PatientOccupationalIndustry", eSituation["eSituation.15"]);
    eSituation334.set("PatientOccupation", eSituation["eSituation.16"]);
    eSituation334.set("PatientActivity", eSituation["eSituation.17"]);
    
};