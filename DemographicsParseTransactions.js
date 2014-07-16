var dAgency = new Object;
var AgencyServiceGroup = [];
var AgencyYearGroup = [];

dAgency = DemographicsObject.dAgency;
//////////////////////////
//Assemble TX Object
dAgency334.set("AgencyStateID", dAgency["dAgency.01"]);
dAgency334.set("AgencyNumber", dAgency["dAgency.02"]);
dAgency334.set("AgencyName", dAgency["dAgency.03"]);
dAgency334.set("AgencyState", dAgency["dAgency.04"]);
dAgency334.set("PrimaryServiceType", dAgency["dAgency.09"]);
dAgency334.set("OtherServiceTypes", dAgency["dAgency.10"]);
dAgency334.set("LevelOfService", dAgency["dAgency.11"]);
dAgency334.set("OrganizationStatus", dAgency["dAgency.12"]);
dAgency334.set("OrganizationType", dAgency["dAgency.13"]);
dAgency334.set("OrganizationTaxStatus", dAgency["dAgency.14"]);
dAgency334.set("TimeZone", dAgency["dAgency.23"]);
dAgency334.set("DayLightSavingTimeUseIndicator", dAgency["dAgency.24"]);
dAgency334.set("NationalProviderID", dAgency["dAgency.25"]);
dAgency334.set("FireDepartmentID", dAgency["dAgency.26"]);
dAgency334.set("EffectiveFrom", Date.Now);
dAgency334.set("EffectiveFrom", null);
dAgency334.set("Version2", D01)
dAgency334.set("dAgencyXML", XMLString)
dAgency334.set("D01XML", V2XMLString)

var _agArray = [];
for (var i = 0; i < dAgency.AgencyServiceGroup.length; i++) {
    var _ag = new _agencyServiceGroup();
    _ag.set("parent", dAgency334.id);
    _ag.set("ServiceAreaStates", dAgency.AgencyServiceGroup[i]["dAgency.05"]);
    _ag.set("ServiceAreaCounties", dAgency.AgencyServiceGroup[i]["dAgency.06"]);
    _ag.set("CensusTracts", dAgency.AgencyServiceGroup[i]["dAgency.07"]);
    _ag.set("ServiceAreaZIPCodes", dAgency.AgencyServiceGroup[i]["dAgency.08"]);
    _agArray.push(_ag);
};


var _agArray = [];
for (var i = 0; i < dAgency.AgencyYearGroup.length; i++) {
    var _ayg = new _agencyYearGroup();
    _ayg.set("parent", dAgency334.id);
    _ayg.set("StatisticalCalendarYear", dAgency.AgencyYearGroup[i]["dAgency.15"]);
    _ayg.set("TotalPrimaryServiceAreaSize", dAgency.AgencyYearGroup[i]["dAgency.16"]);
    _ayg.set("TotalServiceAreaPopulation", dAgency.AgencyYearGroup[i]["dAgency.17"]);
    _ayg.set("911EMSCallCenterVolumeperYear", dAgency.AgencyYearGroup[i]["dAgency.18"]);
    _ayg.set("DispatchVolumeperYear", dAgency.AgencyYearGroup[i]["dAgency.19"]);
    _ayg.set("PatientTransportVolumeperYear", dAgency.AgencyYearGroup[i]["dAgency.20"]);
    _ayg.set("PatientContactVolumeperYear", dAgency.AgencyYearGroup[i]["dAgency.21"]);
    _ayg.set("BillableCallsperYear", dAgency.AgencyYearGroup[i]["dAgency.22"]);
    _agArray.push(_ayg);
}
// JavaScript source code
/////////////////////////////////////////////////////////////////

var dContact334 = Parse.Object.extend("dContact334");

dContact = DemographicsObject.dContact
for (var i = 0; i < dContact.ContactInfoGroup.length; i++) {
    dContact334 = dContact.ContactInfoGroup[i]
    dContact334.set("AgencyContactType", ContactInfoGroup["dContact.01"]);
    dContact334.set("AgencyContactLastName", ContactInfoGroup["dContact.02"]);
    dContact334.set("AgencyName", ContactInfoGroup["dContact.03"]);
    dContact334.set("AgencyContactFirstName", ContactInfoGroup["dContact.04"]);
    dContact334.set("AgencyContactMiddleNameInitial", ContactInfoGroup["dContact.04"]);
    dContact334.set("AgencyContactAddress", ContactInfoGroup["dContact.05"]);
    dContact334.set("AgencyContactCity", ContactInfoGroup["dContact.06"]);
    dContact334.set("AgencyContactState", ContactInfoGroup["dContact.07"]);
    dContact334.set("AgencyContactZIPCode", ContactInfoGroup["dContact.08"]);
    dContact334.set("AgencyContactCountry", ContactInfoGroup["dContact.09"]);
    dContact334.set("AgencyContactPhoneNumber", ContactInfoGroup["dContact.10"]);
    dContact334.set("AgencyContactEmailAddress", ContactInfoGroup["dContact.11"]);
    dContact334.set("EMSAgencyContactWebAddress", ContactInfoGroup["dContact.12"]);
    dContact334.set("AgencyMedicalDirectorDegree", ContactInfoGroup["dContact.13"]);
    dContact334.set("AgencyMedicalDirectorBoardCertificationType", ContactInfoGroup["dContact.14"]);
    dContact334.set("MedicalDirectorCompensation", ContactInfoGroup["dContact.15"]);
    dContact334.set("EMSMedicalDirectorFellowshipTrainedStatus", ContactInfoGroup["dContact.16"]);
    dContact334.set("EffectiveFrom", Date.Now);
    dContact334.set("EffectiveFrom", null);
};
/////////////////////////////////////////////////////

var ConfigurationGroup334 = Parse.Object.extend("ConfigurationGroup");
var ProcedureGroup334 = Parse.Object.extend("ProcedureGroup");
dConfiguration334 = DemographicsObject.dConfiguration;
for (var x = 0; x < DemographicsObject.dConfiguration.ConfigurationGroup.length; x++) {
    ConfigurationGroup = DemographicsObject.dConfiguration.ConfigurationGroup[x];
    ConfigurationGroup334.set("StateAssociatedwithCertificationLevels", ConfigurationGroup["dConfiguration.01"]);
    ConfigurationGroup334.set("State CertificationLevels", ConfigurationGroup["dConfiguration.02"]);
    ConfigurationGroup334.set("ProceduresPermittedbytheState", ConfigurationGroup["dConfiguration.03"]);
    ConfigurationGroup334.set("MedicationsPermittedbytheState", ConfigurationGroup["dConfiguration.04"]);
    ConfigurationGroup334.set("ProtocolsPermittedbytheState", ConfigurationGroup["dConfiguration.05"]);

    for (var i = 0; i < DemographicsObject.dConfiguration.ConfigurationGroup[x].ProcedureGroup.length; i++) {
        ProcedureGroup = DemographicsObject.dConfiguration.ConfigurationGroup[x].ProcedureGroup[i];
        ProcedureGroup334["EMSCertificationLevelsPermittedtoPerformEachProcedure"] = ProcedureGroup["dConfiguration.06"];
        ProcedureGroup334.set["EMSAgencyProcedures"] = ProcedureGroup["dConfiguration.07"];
    };
    for (var i = 0; i < DemographicsObject.dConfiguration.ConfigurationGroup[x].MedicationGroup.length; i++) {
        MedicationGroup = DemographicsObject.dConfiguration.ConfigurationGroup[x].MedicationGroup[i];
        MedicationGroup334["EMSCertificationLevelsPermittedtoAdministerEachMedication"] = MedicationGroup["dConfiguration.08"];;
        MedicationGroup334["EMSAgencyMedications"] = MedicationGroup["dConfiguration.09"];;
    };

    ConfigurationGroup334.set("EMSCertificationLevelsPermittedtoPerformEachProcedure", ConfigurationGroup["dConfiguration.10"]);
    ConfigurationGroup334.set("EMSAgencySpecialtyServiceCapability", ConfigurationGroup["dConfiguration.11"]);
    ConfigurationGroup334.set("BillingStatus", ConfigurationGroup["dConfiguration.12"]);
    ConfigurationGroup334.set("BillingStatus", ConfigurationGroup["dConfiguration.13"]);
    ConfigurationGroup334.set("PatientMonitoringCapabilityies", ConfigurationGroup["dConfiguration.15"]);
    ConfigurationGroup334.set("CrewCallSign", ConfigurationGroup["dConfiguration.16"]);
    ConfigurationGroup334.set("DispatchCenterNameorID", ConfigurationGroup["dConfiguration.17"]);
};



var DeviceGroup334 = Parse.Object.extend("DeviceGroup");
dDevice334 = DemographicsObject.dDevice;

for (var x = 0; x < DemographicsObject.dDevice.DeviceGroup.length; x++) {
    DeviceGroup = DemographicsObject.dDevice.DeviceGroup[x];
    DeviceGroup334.set("parent", dAgency334.id);
    DeviceGroup334.set("SerialNumber", DeviceGroup["dDevice.01"]);
    DeviceGroup334.set("NameorID", DeviceGroup["dDevice.02"]);
    DeviceGroup334.set("DeviceType", DeviceGroup["dDevice.03"]);
    DeviceGroup334.set("Manufacturer", DeviceGroup["dDevice.04"]);
    DeviceGroup334.set("ModelNumber", DeviceGroup["dDevice.05"]);
    DeviceGroup334.set("PurchaseDate", DeviceGroup["dDevice.06"]);
}


//////////////////////////////////////////////////
var dFacilityGroup334 = Parse.Object.extend("dFacilityGroup");
var FacilityGroup334 = Parse.Object.extend("FacilityGroup");
dFacility334 = DemographicsObject.dFacility;
for (var x = 0; x < DemographicsObject.dFacility.dFacilityGroup.length; x++) 
{
    dFacilityGroup = DemographicsObject.dFacility.dFacilityGroup[x];

    dFacilityGroup334.set("parent", dAgency334.id);
    dFacilityGroup334.set("FacilityType", dFacilityGroup["dFacility.01"]);

    for (var i = 0; i < DemographicsObject.dFacility.dFacilityGroup[x].FacilityGroup.length; i++) 
    {
        FacilityGroup334 = DemographicsObject.dFacility.dFacilityGroup[x].FacilityGroup[i]
        FacilityGroup334.set("parent", dAgency334.id);
        FacilityGroup334.set("FacilityName", FacilityGroup["dFacility.02"]);
        FacilityGroup334.set("FacilityLocationCode", FacilityGroup["dFacility.03"]);
        FacilityGroup334.set("HospitalDesignations", FacilityGroup["dFacility.04"]);
        FacilityGroup334.set("FacilityNationalProviderIdentifier", FacilityGroup["dFacility.05"]);
        FacilityGroup334.set("FacilityRoomSuiteorApartment", FacilityGroup["dFacility.06"]);
        FacilityGroup334.set("FacilityStreetAddress", FacilityGroup["dFacility.07"]);
        FacilityGroup334.set("FacilityCity", FacilityGroup["dFacility.08"]);
        FacilityGroup334.set("FacilityState", FacilityGroup["dFacility.09"]);
        FacilityGroup334.set("FacilityZIPCode", FacilityGroup["dFacility.10"]);
        FacilityGroup334.set("FacilityCounty", FacilityGroup["dFacility.11"]);
        FacilityGroup334.set("FacilityCountry", FacilityGroup["dFacility.12"]);
        FacilityGroup334.set("FacilityGPSLocation", FacilityGroup["dFacility.13"]);
        FacilityGroup334.set("FacilityUSNationalGridCoordinates", FacilityGroup["dFacility.14"]);
    }
};


var LocationGroup334 = Parse.Object.extend("LocationGroup");
dLocation = DemographicsObject.dLocation;
for (var x = 0; x < DemographicsObject.dLocation.LocationGroup.length; x++) {
    LocationGroup = DemographicsObject.dLocation.dLocationGroup[x];

    dFacilityGroup334.set("parent", dAgency334.id);
    dFacilityGroup334.set("FacilityType", dFacilityGroup["dFacility.01"]);

    for (var i = 0; i < DemographicsObject.dFacility.dFacilityGroup[x].FacilityGroup.length; i++) {
        LocationGroup = DemographicsObject.dLocation.LocationGroup[i]

        LocationGroup334.set("parent", dAgency334.id);
        LocationGroup334.set("LocationType", LocationGroup["dLocation.01"]);
        LocationGroup334.set("Name", LocationGroup["dLocation.02"]);
        LocationGroup334.set("Number", LocationGroup["dLocation.03"]);
        LocationGroup334.set("LocationGPSLocation", LocationGroup["dLocation.04"]);
        LocationGroup334.set("LocationUSNationalGridCoordinates", LocationGroup["dLocation.05"]);
        LocationGroup334.set("LocationStreetAddress", LocationGroup["dLocation.06"]);
        LocationGroup334.set("LocationCity", LocationGroup["dLocation.07"]);
        LocationGroup334.set("LocationState", LocationGroup["dLocation.08"]);
        LocationGroup334.set("LocationZIPCode", LocationGroup["dLocation.09"]);
        LocationGroup334.set("LocationCounty", LocationGroup["dLocation.10"]);
        LocationGroup334.set("LocationCountry", LocationGroup["dLocation.11"]);
        LocationGroup334.set("LocationPhoneNumbers", LocationGroup["dLocation.12"]);

    }
};




dLocation = DemographicsObject.dLocation;
var LocationGroup334 = Parse.Object.extend("LocationGroup");

for (var x = 0; x < DemographicsObject.dLocation.LocationGroup.length; x++) {
    LocationGroup = DemographicsObject.dLocation.dLocationGroup[x];

    dFacilityGroup334.set("parent", dAgency334.id);
    dFacilityGroup334.set("FacilityType", dFacilityGroup["dFacility.01"]);

    for (var i = 0; i < DemographicsObject.dFacility.dFacilityGroup[x].FacilityGroup.length; i++) {
        LocationGroup = DemographicsObject.dLocation.LocationGroup[i]

        LocationGroup334.set("parent", dAgency334.id);
        LocationGroup334.set("LocationType", LocationGroup["dLocation.01"]);
        LocationGroup334.set("Name", LocationGroup["dLocation.02"]);
        LocationGroup334.set("Number", LocationGroup["dLocation.03"]);
        LocationGroup334.set("LocationGPSLocation", LocationGroup["dLocation.04"]);
        LocationGroup334.set("LocationUSNationalGridCoordinates", LocationGroup["dLocation.05"]);
        LocationGroup334.set("LocationStreetAddress", LocationGroup["dLocation.06"]);
        LocationGroup334.set("LocationCity", LocationGroup["dLocation.07"]);
        LocationGroup334.set("LocationState", LocationGroup["dLocation.08"]);
        LocationGroup334.set("LocationZIPCode", LocationGroup["dLocation.09"]);
        LocationGroup334.set("LocationCounty", LocationGroup["dLocation.10"]);
        LocationGroup334.set("LocationCountry", LocationGroup["dLocation.11"]);
        LocationGroup334.set("LocationPhoneNumbers", LocationGroup["dLocation.12"]);

    }
};
////////////////////////////////////////
dPersonnel = DemographicsObject.dPersonnel;
var PersonnelGroup334 = Parse.Object.extend("PersonnelGroup");

for (var i = 0; i < DemographicsObject.dPersonnel.PersonnelGroup.length; i++) {

    PersonnelGroup = DemographicsObject.dLocation.dPersonnel.PersonnelGroup[i]

    PersonnelGroup334.set("parent", dAgency334.id);
    PersonnelGroup334.set("LastName", PersonnelGroup["dPersonnel.01"]);
    PersonnelGroup334.set("FirstName", PersonnelGroup["dPersonnel.02"]);
    PersonnelGroup334.set("MI", PersonnelGroup["dPersonnel.03"]);
    PersonnelGroup334.set("Address", PersonnelGroup["dPersonnel.04"]);
    PersonnelGroup334.set("City", PersonnelGroup["dPersonnel.05"]);
    PersonnelGroup334.set("State", PersonnelGroup["dPersonnel.06"]);
    PersonnelGroup334.set("Zip", PersonnelGroup["dPersonnel.07"]);
    PersonnelGroup334.set("Country", PersonnelGroup["dPersonnel.08"]);
    PersonnelGroup334.set("PhoneNumbers", PersonnelGroup["dPersonnel.09"]);
    PersonnelGroup334.set("eMailAddresses", PersonnelGroup["dPersonnel.10"]);
    PersonnelGroup334.set("DateOfBirthy", PersonnelGroup["dPersonnel.11"]);
    PersonnelGroup334.set("Gender", PersonnelGroup["dPersonnel.12"]);
    PersonnelGroup334.set("Race", PersonnelGroup["dPersonnel.13"]);
    PersonnelGroup334.set("Citizenship", PersonnelGroup["dPersonnel.14"]);
    PersonnelGroup334.set("HighestDegree", PersonnelGroup["dPersonnel.15"]);
    PersonnelGroup334.set("FieldOfStudies", PersonnelGroup["dPersonnel.16"]);
    PersonnelGroup334.set("VehicleLicenseTypes", PersonnelGroup["dPersonnel.17"]);
    PersonnelGroup334.set("ForiegnLanguages", PersonnelGroup["dPersonnel.20"]);
    PersonnelGroup334.set("AgencyID", PersonnelGroup["dPersonnel.21"]);
    PersonnelGroup334.set("CertificationLevel", PersonnelGroup["dPersonnel.28"]);
    PersonnelGroup334.set("NationalRegistryID", PersonnelGroup["dPersonnel.29"]);
    PersonnelGroup334.set("NationalRegistryIDExpirationDate", PersonnelGroup["dPersonnel.30"]);
    PersonnelGroup334.set("EmploymentStatus", PersonnelGroup["dPersonnel.31"]);
    PersonnelGroup334.set("EmploymentStatusDate", PersonnelGroup["dPersonnel.32"]);
    PersonnelGroup334.set("HireDate", PersonnelGroup["dPersonnel.33"]);
    PersonnelGroup334.set("JobRole", PersonnelGroup["dPersonnel.34"]);
    PersonnelGroup334.set("OtherJobRoles", PersonnelGroup["dPersonnel.35"]);
    PersonnelGroup334.set("TotalServiceYears", PersonnelGroup["dPersonnel.36"]);
    PersonnelGroup334.set("DocumentedLengthOfService", PersonnelGroup["dPersonnel.37"]);

    for (var x = 0; x < DemographicsObject.dPersonnel.PersonnelGroup[i].ImmunizationsGroup.length; x++) {
        ImmunizationsGroup = DemographicsObjectDemographicsObject.dPersonnel.PersonnelGroup[x].ImmunizationsGroup[i]
        ImmunizationsGroup334.set("parent", dAgency334.id);
        ImmunizationsGroup334.set("ImmunizationStatus", ImmunizationsGroup["dPersonnel.18"]);
        ImmunizationsGroup334.set("ImmunizationYear", ImmunizationsGroup["dPersonnel.19"]);
    };

    for (var x = 0; x < DemographicsObject.dPersonnel.PersonnelGroup[i].LicensureGroup.length; x++) {
        LicensureGroup = DemographicsObjectDemographicsObject.dPersonnel.PersonnelGroup[x].LicensureGroup[i]
        LicensureGroup334.set("StateOfLicensure", LocationGroup["dPersonnel.22"]);
        LicensureGroup334.set("LicenseID", LocationGroup["dPersonnel.23"]);
        LicensureGroup334.set("CertificationLevel", LocationGroup["dPersonnel.24"]);
        LicensureGroup334.set("CertificationDate", LocationGroup["dPersonnel.25"]);
        LicensureGroup334.set("LicenseIssueDate", LocationGroup["dPersonnel.26"]);
        LicensureGroup334.set("LicenseExpirationDate", LocationGroup["dPersonnel.27"]);
    };

    for (var x = 0; x < DemographicsObject.dPersonnel.PersonnelGroup[i].CertificationLevelGroup.length; x++) {
        CertificationLevelGroup = DemographicsObjectDemographicsObject.dPersonnel.PersonnelGroup[x].CertificationLevelGroup[i]
        CertificationLevelGroup334.set("PracticeLevel", CertificationLevelGroup["dPersonnel.38"]);
        CertificationLevelGroup334.set("DateOfCertificationForAgency", CertificationLevelGroup["dPersonnel.39"]);
    }
};

//////////////////////////////////////
dState = DemographicsObject.dState;
var State334 = Parse.Object.extend("State");

for (var i = 0; i < DemographicsObject.dState.length; i++)
{
    State334.set("RequiredElement", DemographicsObject.dState[i]["dState.01"]);
};

////////////////////////////////////////
dVehicle = DemographicsObject.dVehicle;
var VehicleGroup334 = Parse.Object.extend("VehicleGroup");
var VehicleCertificationsLevelGroup334 = Parse.Object.extend("VehicleCertificationsLevelGroup");
var VehicleYearGroup334 = Parse.Object.extend("VehicleYearGroup");

for (var i = 0; i < DemographicsObject.dVehicle.VehicleGroup.length; i++) {

    VehicleGroup = DemographicsObject.dVehicle.VehicleGroup[i]

    VehicleGroup334.set("parent", dAgency334.id);
    VehicleGroup334.set("UnitVehicleNumber", VehicleGroup["dVehicle.01"]);
    VehicleGroup334.set("VIN", VehicleGroup["dVehicle.02"]);
    VehicleGroup334.set("CallSign", VehicleGroup["dVehicle.03"]);
    VehicleGroup334.set("VehicleType", VehicleGroup["dVehicle.04"]);

    
    VehicleGroupGroup334.set("InitialCost", VehicleGroup["dVehicle.09"]);
    VehicleGroupGroup334.set("ModelYear", VehicleGroup["dVehicle.10"]);

    for (var x = 0; x < DemographicsObject.dVehicle.VehicleGroup[i].VehicleCertificationLevelsGroup.length; x++) {

        VehicleCertificationLevelsGroup = DemographicsObject.dVehicle.VehicleGroup[i].VehicleCertificationLevelsGroup[x]

        VehicleCertificationLevelsGroup334.set("CrewStateCertificationLicensureLevels", VehicleCertificationLevelsGroup["dVehicle.05"]);
        VehicleCertificationLevelsGroup334.set("NumberofEachEMSPersonnelLevelonNormal911AmbulanceResponse", VehicleCertificationLevelsGroup["dVehicle.06"]);
        VehicleCertificationLevelsGroup334.set("NumberofEachEMSPersonnelLeveonNormal911ResponseNon-TransportVehicle", VehicleCertificationLevelsGroup["dVehicle.07"]);
        VehicleCertificationLevelsGroup334.set("NumberofEachEMSPersonnelLevelonNormalMedicalNon911TransportAmbulance", VehicleCertificationLevelsGroup["dVehicle.08"]);
    };


    for (var y = 0; y < DemographicsObject.dVehicle.VehicleGroup[i].VehicleYear.length; y++) {

        VehicleGroup = DemographicsObject.dVehicle.VehicleGroup[i].VehicleYear[y]

        VehicleGroup334.set("YearMilesKilometersHoursAccrued", PersonnelGroup["dVehicle.11"]);
        VehicleGroup334.set("AnnualVehicleHours", PersonnelGroup["dVehicle.12"]);
        VehicleGroupGroup334.set("AnnualVehicleMilesKilometers", PersonnelGroup["dVehicle.13"]);
    };

};