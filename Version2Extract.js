var setD2EMS = function (v2Array, V3Object) 
{
    if (v2Array.length == 0) {
        return "Error"
    };

    var d2Vals = [];
    

    /// E01_01 PATIENT CARE REPORT NUMBER
    
    d2Vals = getV2Values(V2XMLArray, "E01_01")
    if (d2Vals == null) {
        ErrorList.push({ Version: "2.2.1", Severity: "1", ElementID: "E01_01", Description: "PATIENT CARE REPORT NUMBER Mandatory value. " })
    }
    else {
        XML.Node("E01_01", d2Vals[0]);
    };

    /// E01_02 SOFTWARE CREATOR
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E01_02")
    if (d2Vals == null) {
        ErrorList.push({ Version: "2.2.1", Severity: "1", ElementID: "E01_02", Description: "SOFTWARE CREATOR Mandatory value. " })
    }
    else {
        XML.Node("E01_02", d2Vals[0]);
    };

    /// E01_03 SOFTWARE Name
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E01_03")
    if (d2Vals == null) {
        ErrorList.push({ Version: "2.2.1", Severity: "1", ElementID: "E01_03", Description: "SOFTWARE Name  value. " })
    }
    else {
        XML.Node("E01_03", d2Vals[0]);
    };


    /// E01_03 SOFTWARE Version
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E01_03")
    if (d2Vals == null) {
        ErrorList.push({ Version: "2.2.1", Severity: "1", ElementID: "E01_04", Description: "SOFTWARE Version MANDATORY value. " })
    }
    else {
        XML.Node("E01_04", d2Vals[0]);
    };

    ////////////////////////////////////////////////
    ////////////////////////////////////////////////

    //E02_01	EMS Agency Number
    //Same as EMS Agency Number (D01_01)
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E02_01")
    if (d2Vals == null) {
        ErrorList.push({ Version: "2.2.1", Severity: "1", ElementID: "E02_01", Description: "EMS Agency Number Version MANDATORY value. " })
    }
    else {
        XML.Node("E02_01", d2Vals[0]);
    };

   
    //E02_02	INCIDENT NUMBER
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E02_02")
    if (d2Vals == null) 
    {    
        if(DispatchisCancelled == true)
        {
            d2Vals.push("-5")            
        }
        else
        {
            d2Vals.push("-10")
        }
    }
    else 
    {
        XML.Node("E02_02", d2Vals[0]);
    };

    //E02_03	EMS UNIT (VEHICLE) RESPONSE NUMBER
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E02_03")
    if (d2Vals == null) 
    {    
        if(DispatchisCancelled() == true)
        {
            XML.Node("E02_03", "-5");
        }
        else
        {
            XML.Node("E02_03", "-10");
        }
    }
    else 
    {
        XML.Node("E02_03", d2Vals[0]);
    };

    /// E02_04	Type of Service Requested
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E02_04")
    if (d2Vals == null) {
        ErrorList.push({ Version: "2.2.1", Severity: "1", ElementID: "E02_04", Description: "Type of Service Requested MANDATORY value. " })
    }
    else {
        XML.Node("E02_04", d2Vals[0]);
    };

    /// E02_04	Type of Service Requested
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E02_04")
    if (d2Vals == null) {
        ErrorList.push({ Version: "2.2.1", Severity: "1", ElementID: "E02_05", Description: "Type of Service Requested MANDATORY value. " })
    }
    else {
        XML.Node("E02_04", d2Vals[0]);
    };

    /// E02_05	Primary Role of the Unit
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E02_05")
    if (d2Vals == null) {
        ErrorList.push({ Version: "2.2.1", Severity: "1", ElementID: "E02_05", Description: "Primary Role of the Unit MANDATORY value. " })
    }
    else {
        XML.Node("E02_05", d2Vals[0]);
    };
    
    /// E02_06	Type of Dispatch Delay
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E02_06")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true)        {
            XML.Node("E02_06", "-5");
        }
        else{
            XML.Node("E02_06", "-10");
        }
    }
    else{
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E02_06", d2Vals[i]);            
        };
              
        
    };


    /// E02_07	Type of Response Delay
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E02_07")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true)        {
            XML.Node("E02_07", "-5");        }
        else
        {
            XML.Node("E02_07", "-10");
        }
    }
    else 
    {
        for (var i = 0; i < d2Vals.length; i++)        {
            XML.Node("E02_07", d2Vals[i]);
        };
              
        
    };

    /// E02_08	Type of Scene Delay
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E02_08")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true)        {
            XML.Node("E02_08", "-5");
        }
        else        {
            XML.Node("E02_08", "-10");
        }
    }
    else     {
        for (var i = 0; i < d2Vals.length; i++)        {
            XML.Node("E02_08", d2Vals[i]);
        };
              

    };

    
    ///    E02_09	Type of Transport Delay
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E02_09")
    if (d2Vals == null) {
        if(DispatchisCancelled() == true){
            XML.Node("E02_09", "-5");
        }
        else {
            XML.Node("E02_09", "-10");
        }
    }
    else{
        for (var i = 0; i < d2Vals.length; i++){
            XML.Node("E02_09", d2Vals[i]);
        };
              

    };

    ///E02_10	Type of Turn-Around Delay
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E02_10")
    if (d2Vals == null) {
        if(DispatchisCancelled() == true){
            XML.Node("E02_10", "-5");
        }
        else {
            XML.Node("E02_10", "-10");
        }
    }
    else{
        for (var i = 0; i < d2Vals.length; i++){
            XML.Node("E02_10", d2Vals[i]);
        };              
    };
    

    ///E02_11	EMS UNIT/VEHICLE NUMBER
    //List box created from EMS Unit/Vehicle Number (D06_01)
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E02_11")
    if (d2Vals == null) {
        if(DispatchisCancelled() == true){
            XML.Node("E02_11", "-5");
        }
        else {
            XML.Node("E02_11", "-10");
        }
    }
    else{
              
        XML.Node("E02_11", d2Vals[0]);
    };
    
    /// E02_12	EMS Unit Call Sign (Radio Number)
    // List box created from Unit Call Sign (D04_02)
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E02_12")
    if (d2Vals == null) {
        if(getUnitCallSign() != null){
            XML.Node("E02_05", d2ValsgetUnitCallSign());
        }
        else{
            ErrorList.push({ Version: "2.2.1", Severity: "1", ElementID: "E02_05", Description: "Primary Role of the Unit MANDATORY value. " })
        }        
    }
    else {
        XML.Node("E02_05", d2Vals[0]);
    };
    
    ///E02_13	VEHICLE DISPATCH LOCATION
    //List box could be created from Station Name (D05_01), Hospitals Served (D04_11), and Other Destinations (D04_13)
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E02_13")
    if (d2Vals == null) {
        if(DispatchisCancelled() == true){
            XML.Node("E02_13", "-5");
        }
        else {
            XML.Node("E02_13", "-10");
        }
    }
    else{
              
        XML.Node("E02_13", d2Vals[0]);
    };

    ///E02_14	VEHICLE DISPATCH ZONE - from (D04_03)
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E02_14")
    if (d2Vals == null) {
        if(DispatchisCancelled() == true){
            XML.Node("E02_14", "-5");
        }
        else {
            XML.Node("E02_14", "-10");
        }
    }
    else{
              
        XML.Node("E02_14", d2Vals[0]);
    };
    
    ///E02_15	VEHICLE DISPATCH GPS LOCATION
    alert("Set <E02_15 Lat=3.14 Long=3.14/>")
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E02_15")
    if (d2Vals != null) {
        
        XML.Node("E02_15", d2Vals[0]);
    };

    ///E02_16	BEGINNING ODOMETER READING OF RESPONDING VEHICLE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E02_16")
    if (d2Vals != null) {
        
        XML.Node("E02_16", d2Vals[0]);
    };


    ///E02_17	ON-SCENE ODOMETER READING OF RESPONDING VEHICLE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E02_17")
    if (d2Vals != null) {
        
        XML.Node("E02_17", d2Vals[0]);
    };

    ///E02_18	PATIENT DESTINATION ODOMETER READING OF RESPONDING VEHICLE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E02_18")
    if (d2Vals != null) {
        
        XML.Node("E02_18", d2Vals[0]);
    };

    ///E02_19	ENDING ODOMETER READING OF RESPONDING VEHICLE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E02_19")
    if (d2Vals != null) {
        
        XML.Node("E02_19", d2Vals[0]);
    };

    /// E02_20	Response Mode to Scene
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E02_20")
    if (d2Vals == null) 
    {
        ErrorList.push({ Version: "2.2.1", Severity: "1", ElementID: "E02_20", Description: "Response Mode to Scene MANDATORY value. " })
    }            
    else 
    {
        XML.Node("E02_05", d2Vals[0]);
    };
    /////////////////////////////////////////

    ///E03_01	Complaint Reported  by Dispatch
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E03_01")
    if (d2Vals == null) {
        if(DispatchisCancelled() == true){
            XML.Node("E03_01", "-5");
        }
        else {
            XML.Node("E03_01", "-10");
        }
    }
    else{
              
        XML.Node("E03_01", d2Vals[0]);
    };
    
    
    ///E03_02	EMD Performed
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E03_02")
    if (d2Vals == null) {
        if(DispatchisCancelled() == true){
            XML.Node("E03_02", "-5");
        }
        else {
            XML.Node("E03_02", "-10");
        }
    }
    else{
              
        XML.Node("E03_02", d2Vals[0]);
    };

    ///E03_02	EMD CARD NUMBER
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E03_03")
    if (d2Vals == null) {
        if(DispatchisCancelled() == true){
            XML.Node("E03_03", "-5");
        }
        else {
            XML.Node("E03_03", "-10");
        }
    }
    else{              
        XML.Node("E03_03", d2Vals[0]);
    };
    /////////////////////////////////////////////////
    
    ///E04_01    CREW MEMBER ID
    d2Vals = [];
    var crewMemberID = null;
    d2Vals = getV2Values(V2XMLArray, "E04_01")
    if (d2Vals == null) {
        if(DispatchisCancelled() == true){
            XML.Node("E04_01", "-5");
        }
        else {
            XML.Node("E04_01", "-10");
        }
    }
    else{              
        crewMemberID = dVals2[0];
        XML.Node("E04_01", d2Vals[0]);
    };

    ///E04_012   CREW MEMBER ID
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E04_02")
    if(crewMemberID == null)
    {
        XML.Node("E04_02", "-5");
    }
    else
    {
        if (d2Vals == null) 
        {        
            XML.Node("E04_02", "-10");
        }
        else
        {              
            XML.Node("E04_02", d2Vals[0]);
        }
    };


    ///E04_03 CREW MEMBER LEVEL
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E04_03")
    if(crewMemberID == null)
    {
        XML.Node("E04_03", "-5");
    }
    else
    {
        if (d2Vals == null) 
        {        
            XML.Node("E04_03", "-10");
        }
        else
        {              
            XML.Node("E04_03", d2Vals[0]);
        }
    };

    //////////////////////////////////////
    ///E05_01  INCIDENT OR ONSET DATE/TIME 
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E05_01")
    if (d2Vals == null) 
    {
        XML.Node("E05_01", "");
    }
    else{        
        XML.Node("E05_01", d2Vals[0]);
    };

    /// E05_02	PSAP Call Date/Time
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E05_02")
    if (d2Vals == null) 
    {
        ErrorList.push({ Version: "2.2.1", Severity: "1", ElementID: "E05_02", Description: "PSAP Call Date/Time MANDATORY value. " })
    }            
    else 
    {
        XML.Node("E05_02", d2Vals[0]);
    };

    /// E05_03	DISPATCH NOTIFIED DATE/TIME 
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E05_03")
    if (d2Vals == null) 
    {
        XML.Node("E05_03", "");
    }
    else{        
        XML.Node("E05_03", d2Vals[0]);
    };


    ///     E05_04	Unit Notified by Dispatch Date/Time
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E05_04")
    if (d2Vals == null) 
    {
        ErrorList.push({ Version: "2.2.1", Severity: "1", ElementID: "E05_04", Description: "Unit Notified by Dispatch Date/Time MANDATORY value. " })
    }            
    else 
    {
        XML.Node("E05_04", d2Vals[0]);
    };

    
    /// E05_05	Unit En Route Date/Time
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E05_05")
    if (d2Vals == null) 
    {
        ErrorList.push({ Version: "2.2.1", Severity: "1", ElementID: "E05_05	", Description: "Unit En Route Date/Time MANDATORY value. " })
    }            
    else 
    {
        XML.Node("E05_05", d2Vals[0]);
    };


    ///E05_06	Unit Arrived on Scene Date/Time
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E05_06")
    if (d2Vals == null) 
    {
        ErrorList.push({ Version: "2.2.1", Severity: "1", ElementID: "E05_06", Description: "Unit Arrived on Scene  Date/Time MANDATORY value. " })
    }            
    else 
    {
        XML.Node("E05_06", d2Vals[0]);
    };

    ///E05_07	Arrived at Patient Date/Time
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E05_07")
    if (d2Vals == null) 
    {
        ErrorList.push({ Version: "2.2.1", Severity: "1", ElementID: "E05_07", Description: "Arrived at Patient Date/Time MANDATORY value. " })
    }            
    else 
    {
        XML.Node("E05_07", d2Vals[0]);
    };

    /// E05_08 TRANSFER OF PATIENT CARE DATE/TIME
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E05_08")
    if (d2Vals == null) 
    {
        XML.Node("E05_08", "");
    }
    else{        
        XML.Node("E05_08", d2Vals[0]);
    };

    ///E05_09	Unit Left Scene Date/Time
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E05_09")
    if (d2Vals == null) 
    {
        ErrorList.push({ Version: "2.2.1", Severity: "1", ElementID: "E05_09", Description: "Unit Left Scene Date/Time MANDATORY value. " })
    }            
    else 
    {
        XML.Node("E05_09", d2Vals[0]);
    };

    ///E05_10	Patient Arrived at Destination Date/Time
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E05_10")
    if (d2Vals == null) 
    {
        ErrorList.push({ Version: "2.2.1", Severity: "1", ElementID: "E05_10", Description: "Patient Arrived at Destination  Date/Time MANDATORY value. " })
    }            
    else 
    {
        XML.Node("E05_10", d2Vals[0]);
    };


    ///E05_11	Unit Back in Service Date/Time
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E05_11")
    if (d2Vals == null) 
    {
        ErrorList.push({ Version: "2.2.1", Severity: "1", ElementID: "E05_11", Description: "Unit Back in Service Date/Time MANDATORY value. " })
    }            
    else 
    {
        XML.Node("E05_11", d2Vals[0]);
    };


    /// E05_12 UNIT CANCELLED DATE/TIME
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E05_12")
    if (d2Vals == null) 
    {
        XML.Node("E05_12", "");
    }
    else{        
        XML.Node("E05_12", d2Vals[0]);
    };


    /// E05_13 UNIT BACK AT HOME LOCATION DATE/TIME 
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E05_13")
    if (d2Vals == null) 
    {
        XML.Node("E05_13", "");
    }
    else{        
        XML.Node("E05_13", d2Vals[0]);
    };
//////////////////////////////////

    
    if(DiapatchCancelled == true)
    {
        XML.Node("E06_01", "-25");
        XML.Node("E06_02", "-25");
        XML.Node("E06_03", "-25");
        XML.Node("E06_04", "-25");
        XML.Node("E06_05", "-25");
    }
    else
    {

        ///E06_01    PATIENT LAST NAME
        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "E06_01")
        if (d2Vals == null) {
            if(NoPatient() == true){
                XML.Node("E06_01", "-25");
            }
            else {
                XML.Node("E06_01", "-10");
            }
        }
        else{              
            XML.Node("E06_01", d2Vals[0]);
        };

        ///E06_02    PATIENT FIRST NAME
        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "E06_02")
        if (d2Vals == null) {
            if(NoPatient() == true){
                XML.Node("E06_02", "-25");
            }
            else {
                XML.Node("E06_02", "-10");
            }
        }
        else{              
            XML.Node("E06_02", d2Vals[0]);
        };


        ///E06_03    PATIENT MIDDLE NAME
        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "E06_03")
        if (d2Vals == null) {
            if(NoPatient() == true){
                XML.Node("E06_03", "-25");
            }
            else {
                XML.Node("E06_03", "-10");
            }
        }
        else{              
            XML.Node("E06_03", d2Vals[0]);
        };

        ///E06_04    PATIENT ADDRESS 
        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "E06_04")
        if (d2Vals == null) {
            if(NoPatient() == true){
                XML.Node("E06_04", "-25");
            }
            else {
                XML.Node("E06_04", "-10");
            }
        }
        else{              
            XML.Node("E06_04", d2Vals[0]);
        };

        ///E06_05    PATIENT CITY
        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "E06_05")
        if (d2Vals == null) {
            if(NoPatient() == true){
                XML.Node("E06_05", "-25");
            }
            else {
                XML.Node("E06_05", "-10");
            }
        }
        else{              
            XML.Node("E06_05", d2Vals[0]);
        };


        ///E06_06   PATIENT COUNTY (FIPS CODE)
        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "E06_06")
        if (d2Vals == null) {
            if(NoPatient() == true){
                XML.Node("E06_06", "-25");
            }
            else {
                XML.Node("E06_06", "-10");
            }
        }
        else{              
            XML.Node("E06_06", d2Vals[0]);
        };

        ///E06_07   PATIENT STATE (FIPS CODE)
        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "E06_07")
        if (d2Vals == null) {
            if(NoPatient() == true){
                XML.Node("E06_07", "-25");
            }
            else {
                XML.Node("E06_07", "-10");
            }
        }
        else{              
            XML.Node("E06_07", d2Vals[0]);
        };

        
        ///E06_08   PATIENT ZIP
        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "E06_08")
        if (d2Vals == null) {
            if(NoPatient() == true){
                XML.Node("E06_08", "-25");
            }
            else {
                XML.Node("E06_08", "-20");
            }
        }
        else{              
            XML.Node("E06_08", d2Vals[0]);
        };

        ///E06_09   PATIENT STATE (FIPS CODE)
        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "E06_09")
        if (d2Vals == null) {
            if(NoPatient() == true){
                XML.Node("E06_09", "-25");
            }
            else {
                XML.Node("E06_09", "-10");
            }
        }
        else{              
            XML.Node("E06_09", d2Vals[0]);
        };

        ///E06_10   PATIENT SSN
        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "E06_10")
        if (d2Vals == null) {
            if(NoPatient() == true){
                XML.Node("E06_10", "-25");
            }
            else {
                XML.Node("E06_10", "-10");
            }
        }
        else{              
            XML.Node("E06_10", d2Vals[0]);
        };

        ///E06_11   PATIENT GENDER
        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "E06_11")
        if (d2Vals == null) {
            if(NoPatient() == true){
                XML.Node("E06_11", "-25");
            }
            else {
                XML.Node("E06_11", "-20");
            }
        }
        else{              
            XML.Node("E06_11", d2Vals[0]);
        };

        
        ///E06_12   PATIENT RACE
        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "E06_12")
        if (d2Vals == null) {
            if(NoPatient() == true){
                XML.Node("E06_12", "-25");
            }
            else {
                XML.Node("E06_12", "-20");
            }
        }
        else{              
            XML.Node("E06_12", d2Vals[0]);
        };

        ///E06_13   PATIENT ETHNICITY
        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "E06_13")
        if (d2Vals == null) {
            if(NoPatient() == true){
                XML.Node("E06_13", "-25");
            }
            else {
                XML.Node("E06_13", "-20");
            }
        }
        else{              
            XML.Node("E06_13", d2Vals[0]);
        };

        ///E06_14  PATIENT AGE
        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "E06_14")
        if (d2Vals == null) {
            if(NoPatient() == true){
                XML.Node("E06_14", "-25");
            }
            else {
                XML.Node("E06_14", "-20");
            }
        }
        else{              
            XML.Node("E06_14", d2Vals[0]);
        };


        ///E06_15  PATIENT AGE UNITS
        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "E06_15")
        if (d2Vals == null) {
            if(NoPatient() == true){
                XML.Node("E06_15", "-25");
            }
            else {
                XML.Node("E06_15", "-20");
            }
        }
        else{              
            XML.Node("E06_15", d2Vals[0]);
        };


        ///E06_16  PATIENT DOB
        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "E06_16")
        if (d2Vals == null) {
            if(NoPatient() == true){
                XML.Node("E06_16", "-25");
            }
            else {
                XML.Node("E06_16", "-10");
            }
        }
        else{              
            XML.Node("E06_16", d2Vals[0]);
        };

        ///E06_17  PATIENT PRIMARY PHONE
        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "E06_17")
        if (d2Vals == null) {
            if(NoPatient() == true){
                XML.Node("E06_17", "-25");
            }
            else {
                XML.Node("E06_17", "-10");
            }
        }
        else{              
            XML.Node("E06_17", d2Vals[0]);
        };

        ///E06_18  PATIENT STATE ISSUEING DRIVERS LICENCE
        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "E06_18")
        if (d2Vals == null) {
            if(NoPatient() == true){
                XML.Node("E06_18", "-25");
            }
            else {
                XML.Node("E06_18", "-10");
            }
        }
        else{              
            XML.Node("E06_18", d2Vals[0]);
        };

        ///E06_19  PATIENT DRIVER'S LICENSE NUMBER
        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "E06_19")
        if (d2Vals == null) {
            if(NoPatient() == true){
                XML.Node("E06_19", "-25");
            }
            else {
                XML.Node("E06_19", "-10");
            }
        }
        else{              
            XML.Node("E06_19", d2Vals[0]);
        };


    //////////////////////////////////////

    /// E07_01 PRIMARY METHOD OF PAYMENT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_01")
    if (d2Vals == null) {
        XML.Node("E07_01", "-25");
    }
    else{              
        XML.Node("E07_01", d2Vals[0]);
    };  
    
    
    /// E07_02 CERTIFICATE OF MEDICAL NECESSITY
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_02")
    if (d2Vals == null) {
        XML.Node("E07_02", null);     
    }
    else{              
        XML.Node("E07_02", d2Vals[0]);
    };  
    
    
    /// E07_03 INSURANCE COMPANY ID/NAME
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_03")
    if (d2Vals == null) {        
        XML.Node("E07_03", null);        
    }
    else{              
        XML.Node("E07_03", d2Vals[0]);
    };  
    

        /// E07_04 INSURANCE COMPANY BILLING PRIORITY
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_04")
    if (d2Vals == null) {
        XML.Node("E07_04", null);
    }
    else{              
        XML.Node("E07_04", d2Vals[0]);
    };  

    
        /// E07_05 INSURANCE COMPANY BILLING PRIORITY
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_05")
    if (d2Vals == null) {
        XML.Node("E07_05", null);
    }
    else{              
        XML.Node("E07_05", d2Vals[0]);
    };  
    
    /// E07_06 INSURANCE COMPANY CITY
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_06")
    if (d2Vals == null) {
        XML.Node("E07_06", null);
    }
    else{              
        XML.Node("E07_06", d2Vals[0]);
    };  
        
    /// E07_07 INSURANCE COMPANY BILLING PRIORITY
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_07")
    if (d2Vals == null) {
        XML.Node("E07_07", null);
    }
    else{              
        XML.Node("E07_07", d2Vals[0]);
    };  
    

        /// E07_08 INSURANCE COMPANY BILLING PRIORITY
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_08")
    if (d2Vals == null) {
        XML.Node("E07_08", null);
    }
    else{              
        XML.Node("E07_08", d2Vals[0]);
    };  
    

        /// E07_09 INSURANCE COMPANY  GROUP ID/NAME
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_09")
    if (d2Vals == null) {
        XML.Node("E07_09", null);
    }
    else{              
        XML.Node("E07_09", d2Vals[0]);
    };  

        /// E07_109 INSURANCE POLICY ID
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_10")
    if (d2Vals == null) {
        XML.Node("E07_10", null);
    }
    else{              
        XML.Node("E07_10", d2Vals[0]);
    };  

        /// E07_11 LAST NAME OF THE INSURED
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_11")
    if (d2Vals == null) {
        XML.Node("E07_11", null);
    }
    else{              
        XML.Node("E07_11", d2Vals[0]);
    };  

    /// E07_12 FIRST NAME OF THE INSURED
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_12")
    if (d2Vals == null) {
        XML.Node("E07_12", null);
    }
    else{              
        XML.Node("E07_12", d2Vals[0]);
    };  

    /// E07_13 INSURANCE POLICY ID
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_13")
    if (d2Vals == null) {
        XML.Node("E07_13", null);
    }
    else{              
        XML.Node("E07_13", d2Vals[0]);
    };  
    

    /// E07_14 RELATIONSHIP TO THE INSURED
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_14")
    if (d2Vals == null) {
        XML.Node("E07_14", null);
    }
    else{              
        XML.Node("E07_14", d2Vals[0]);
    };  
    

        /// E07_15 WORK RELATED
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_15")
    if (d2Vals == null) {
        XML.Node("E07_15", null);
    }
    else{              
        XML.Node("E07_15", d2Vals[0]);
    };  

    /// E07_16 PATIENT’S OCCUPATIONAL INDUSTRY
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_16")
    if (d2Vals == null) {
        XML.Node("E07_16", null);
    }
    else{              
        XML.Node("E07_16", d2Vals[0]);
    };  


        /// E07_17 PATIENT’S OCCUPATION
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_17")
    if (d2Vals == null) {
        XML.Node("E07_17", null);
    }
    else{              
        XML.Node("E07_17", d2Vals[0]);
    };  


    /// E07_18 CLOSEST RELATIVE/GUARDIAN LAST NAME
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_18")
    if (d2Vals == null) {
        XML.Node("E07_18", null);
    }
    else{              
        XML.Node("E07_18", d2Vals[0]);
    };  


    /// E07_19 CLOSEST RELATIVE/GUARDIAN FIRST NAME
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_19")
    if (d2Vals == null) {
        XML.Node("E07_19", null);
    }
    else{              
        XML.Node("E07_19", d2Vals[0]);
    };

        /// E07_20 CLOSEST RELATIVE/GUARDIAN MIDDLE NAME
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_20")
    if (d2Vals == null) {
        XML.Node("E07_20", null);
    }
    else{              
        XML.Node("E07_20", d2Vals[0]);
    };

        /// E07_21 CLOSEST RELATIVE/GUARDIAN Address
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_21")
    if (d2Vals == null) {
        XML.Node("E07_21", null);
    }
    else{              
        XML.Node("E07_21", d2Vals[0]);
    };

        /// E07_21 CLOSEST RELATIVE/GUARDIAN CITY
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_22")
    if (d2Vals == null) {
        XML.Node("E07_22", null);
    }
    else{              
        XML.Node("E07_22", d2Vals[0]);
    };

        /// E07_23 CLOSEST RELATIVE/GUARDIAN STATE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_23")
    if (d2Vals == null) {
        XML.Node("E07_23", null);
    }
    else{              
        XML.Node("E07_23", d2Vals[0]);
    };

        /// E07_24 CLOSEST RELATIVE/GUARDIAN ZIP
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_24")
    if (d2Vals == null) {
        XML.Node("E07_24", null);
    }
    else{              
        XML.Node("E07_24", d2Vals[0]);
    };

    
    /// E07_25 CLOSEST RELATIVE/GUARDIAN PHONE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_25")
    if (d2Vals == null) {
        XML.Node("E07_25", null);
    }
    else{              
        XML.Node("E07_25", d2Vals[0]);
    };
    
        /// E07_26 CLOSEST RELATIVE/GUARDIAN RELATIONSHIP
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_26")
    if (d2Vals == null) {
        XML.Node("E07_26", null);
    }
    else{              
        XML.Node("E07_26", d2Vals[0]);
    };

        
    /// E07_27 PATIENT EMPLOYER
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_27")
    if (d2Vals == null) {
        XML.Node("E07_27", null);
    }
    else{              
        XML.Node("E07_27", d2Vals[0]);
    };
    

        
    /// E07_28 PATIENT EMPLOYER ADDRESS
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_28")
    if (d2Vals == null) {
        XML.Node("E07_28", null);
    }
    else{              
        XML.Node("E07_28", d2Vals[0]);
    };
    
         
        /// E07_29 PATIENT EMPLOYER CITY
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_29")
    if (d2Vals == null) {
        XML.Node("E07_29", null);
    }
    else{              
        XML.Node("E07_29", d2Vals[0]);
    };


    /// E07_30 PATIENT EMPLOYER STATE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_30")
    if (d2Vals == null) {
        XML.Node("E07_30", null);
    }
    else{              
        XML.Node("E07_30", d2Vals[0]);
    };
       
        /// E07_31 PATIENT EMPLOYER STATE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_31")
    if (d2Vals == null) {
        XML.Node("E07_31", null);
    }
    else{              
        XML.Node("E07_31", d2Vals[0]);
    };
          
    /// E07_32 PATIENT EMPLOYER STATE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_32")
    if (d2Vals == null) {
        XML.Node("E07_32", null);
    }
    else{              
        XML.Node("E07_32", d2Vals[0]);
    };    
    
    /// E07_33 RESPONSE URGENCY
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_33")
    if (d2Vals == null) {
        XML.Node("E07_33", null);
    }
    else{              
        XML.Node("E07_33", d2Vals[0]);
    };

        /// E07_34 CMS SERVICE LEVEL
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_34")
    if (d2Vals == null) {
        XML.Node("E07_34", null);
    }
    else{              
        XML.Node("E07_34", d2Vals[0]);
    };


        /// E07_35	CONDITION CODE NUMBER
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_35")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E07_35", "-5");        
        }
        else{
            XML.Node("E07_35", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E07_35", d2Vals[i]);
        };              
    };

        /// E07_36	ICD-9 CODE FOR THE CONDITION CODE NUMBER
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_36")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E07_36", "-5");        
        }
        else{
            XML.Node("E07_36", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E07_36", d2Vals[i]);
        };              
    };

        /// E07_37	CONDITION CODE MODIFIER
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E07_37")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E07_37", "-5");        
        }
        else{
            XML.Node("E07_37", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E07_37", d2Vals[i]);
        };              
    };

/////////////////////////////////////////////////////////////SCENE

        /// E08_01	OTHER EMS AGENCIES AT SCENE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E08_01")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E08_01", "-5");        
        }
        else{
            XML.Node("E08_01", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E08_01", d2Vals[i]);
        };              
    };


        /// E08_02 OTHER SERVICES AT SCENE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E08_02")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E08_02", "-5");        
        }
        else{
            XML.Node("E08_02", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E08_02", d2Vals[i]);
        };              
    };

        alert("CALC")
    /// E08_03 ESTIMATED DATE/TIME INITIAL RESPONDER ARRIVED ON SCENE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E08_03")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E08_03", "-5");        
        }
        else{
            XML.Node("E08_03", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E08_03", d2Vals[i]);
        };              
    };

    /// E08_04 DATE/TIME INITIAL RESPONDER ARRIVED ON SCENE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E08_04")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E08_04", "-5");        
        }
        else{
            XML.Node("E08_04", "-10");
        }
    }
    else {        
            XML.Node("E08_04", d2Vals[0]);        
    };


    /// E08_05 NUMBER OF PATIENTS AT SCENE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E08_05")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E08_05", "-5");        
        }
        else{
            XML.Node("E08_05", "-10");
        }
    }
    else {
            XML.Node("E08_05", d2Vals[0]);
    };

    /// E08_06 MASS CASUALTY INCIDENT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E08_06")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E08_06", "-5");        
        }
        else{
            XML.Node("E08_06", "-10");
        }
    }
    else {
        XML.Node("E08_06", d2Vals[0]);
    };

    /// E08_07 MASS CASUALTY INCIDENT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E08_07")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E08_07", "-5");        
        }
        else{
            XML.Node("E08_07", "-10");
        }
    }
    else {
        XML.Node("E08_07", d2Vals[0]);
    };


    /// E08_08 INCIDENT FACILITY CODE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E08_08")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E08_08", "-5");        
        }
        else{
            XML.Node("E08_08", "-10");
        }
    }
    else {
        XML.Node("E08_08", d2Vals[0]);
    };


    /// E08_09 INCIDENT SCENE ZONE NUMBER
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E08_09")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E08_09", "-5");        
        }
        else{
            XML.Node("E08_09", "-10");
        }
    }
    else {
        XML.Node("E08_09", d2Vals[0]);
    };

    /// E08_10 INCIDENT SCENE SCENE GPS LOCATION
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E08_10")
    if (d2Vals != null)     {
        XML.Node("E08_09", d2Vals[0]);
    };


    /// E08_11 INCIDENT ADDRESS
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E08_11")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E08_11", "-5");        
        }
        else{
            XML.Node("E08_11", "-10");
        }
    }
    else {
        XML.Node("E08_11", d2Vals[0]);
    };

        /// E08_12 INCIDENT CITY
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E08_12")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E08_12", "-5");        
        }
        else{
            XML.Node("E08_12", "-10");
        }
    }
    else {
        XML.Node("E08_12", d2Vals[0]);
    };

    /// E08_13 INCIDENT COUNTY
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E08_13")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E08_13", "-5");        
        }
        else{
            XML.Node("E08_13", "-10");
        }
    }
    else {
        XML.Node("E08_13", d2Vals[0]);
    };


    /// E08_14 INCIDENT COUNTY
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E08_14")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E08_14", "-5");        
        }
        else{
            XML.Node("E08_14", "-10");
        }
    }
    else {
        XML.Node("E08_14", d2Vals[0]);
    };

        
        /// E08_15 INCIDENT COUNTY
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E08_15")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E08_15", "-5");        
        }
        else{
            XML.Node("E08_15", "-10");
        }
    }
    else {
        XML.Node("E08_15", d2Vals[0]);
    };

/////////////////////////////////////////////////SITUATION

        /// E09_01 PRIOR AID
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E09_01")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E09_01", "-5");        
        }
        else{
            XML.Node("E09_01", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E09_01", d2Vals[i]);
        };              
    };

        /// E09_02 PRIOR AID  PERFORMED BY
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E09_02")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E09_02", "-5");        
        }
        else{
            XML.Node("E09_02", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E09_02", d2Vals[i]);
        };              
    };

        /// E09_03 OUTCOME OF THE PRIOR AID
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E09_03")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E09_03", "-5");        
        }
        else{
            XML.Node("E09_03", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E09_03", d2Vals[i]);
        };              
    };
        
    /// E09_04 POSSIBLE INJURY
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E09_04")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E09_04", "-25");        
        }
        else{
            XML.Node("E09_04", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E09_04", d2Vals[i]);
        };              
    };
        
        /// E09_05 CHIEF COMPLAINT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E09_05")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E09_05", "-5");        
        }
        else{
            XML.Node("E09_05", "-10");
        }
    }
    else {
            XML.Node("E09_05", d2Vals[0]);
    };
        
    /// E09_06 DURATION OF CHIEF COMPLAINT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E09_06")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E09_06", "-25");        
        }
        else{
            XML.Node("E09_06", "-10");
        }
    }
    else {
        XML.Node("E09_06", d2Vals[0]);
    };
        
    
    /// E09_07 TIME UNITS OF CHIEF COMPLAINT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E09_07")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E09_07", "-25");        
        }
        else{
            XML.Node("E09_07", "-10");
        }
    }
    else {
        XML.Node("E09_07", d2Vals[0]);
    };
        
        /// E09_08 SECONDARY COMPLAINT NARRATIVE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E09_08")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E09_08", "-25");        
        }
        else{
            XML.Node("E09_08", "-10");
        }
    }
    else {
        XML.Node("E09_08", d2Vals[0]);
    };     

        /// E09_09 DURATION OF SECONDARY COMPLAINT 
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E09_09")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E09_09", "-25");        
        }
        else{
            XML.Node("E09_09", "-10");
        }
    }
    else {
        XML.Node("E09_09", d2Vals[0]);
    };     

    
        /// E09_10 TIME UNITS OF DURATION OF SECONDARY COMPLAINT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E09_10")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E09_10", "-25");        
        }
        else{
            XML.Node("E09_10", "-10");
        }
    }
    else {
        XML.Node("E09_10", d2Vals[0]);
    };     

        /// E09_11 CHIEF COMPLAINT ANATOMIC LOCATION
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E09_11")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E09_11", "-25");        
        }
        else{
            XML.Node("E09_11", "-10");
        }
    }
    else {
        XML.Node("E09_11", d2Vals[0]);
    };  


        /// E09_12CHIEF COMPLAINT ORGAN SYSTEM
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E09_12")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E09_12", "-25");        
        }
        else{
            XML.Node("E09_12", "-10");
        }
    }
    else {
        XML.Node("E09_12", d2Vals[0]);
    };  


        
    /// E09_13 PRIMARY SYMPTOM
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E09_13")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E09_13", "-25");        
        }
        else{
            XML.Node("E09_13", "-10");
        }
    }
    else {
        XML.Node("E09_13", d2Vals[0]);
    };  

        /// E09_14 OTHER ASSOCIATED SYMPTOMS
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E09_04")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E09_14", "-5");        
        }
        else{
            XML.Node("E09_14", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E09_14", d2Vals[i]);
        };              
    };
        
        /// E09_15 PROVIDERS PRIMARY IMPRESSION
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E09_15")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E09_15", "-25");        
        }
        else{
            XML.Node("E09_15", "-10");
        }
    }
    else {
        XML.Node("E09_15", d2Vals[0]);
    };     

        /// E09_16 PROVIDERS SECONDARY IMPRESSION
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E09_16")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E09_16", "-25");        
        }
        else{
            XML.Node("E09_16", "-10");
        }
    }
    else {
        XML.Node("E09_16", d2Vals[0]);
    };  

//////////////////////////////// TRAUMA

    /// E10_01 CAUSE OF INJURY    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E10_01")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E10_01", "-25");        
        }
        else{
            XML.Node("E10_01", "-10");
        }
    }
    else {
        XML.Node("E10_01", d2Vals[0]);
    }; 
    

        /// E10_02 INTENT OF THE INJURY    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E10_02")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E10_02", "-25");        
        }
        else{
            XML.Node("E10_02", "-10");
        }
    }
    else {
        XML.Node("E10_02", d2Vals[0]);
    }; 
        
    /// E10_03 MECHANISM OF INJURY
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E10_03")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E10_03", "-5");        
        }
        else{
            XML.Node("E10_03", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E10_03", d2Vals[i]);
        };              
    };    
    
    
    /// E10_04 VEHICULAR INJURY INDICATORS
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E10_04")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E10_04", "-25");        
        }
        else{
            XML.Node("E10_04", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E10_04", d2Vals[i]);
        };              
    };    
    
 
    /// E10_05 AREA OF THE VEHICLE IMPACTED BY THE COLLISION
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E10_05")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E10_05", "-25");        
        }
        else{
            XML.Node("E10_05", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E10_05", d2Vals[i]);
        };              
    };    
    
    
        /// E10_06 SEAT ROW LOCATION OF PATIENT IN VEHICLE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E10_06")
    if (d2Vals != null)     {
            XML.Node("E10_06", d2Vals[0]);
    };              
        
        /// E10_07 POSITION OF PATIENT IN THE SEAT OF THE VEHICLE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E10_07")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E10_07", "-25");        
        }
        else{
            XML.Node("E10_07", "-10");
        }
    }
    else {
        XML.Node("E10_07", d2Vals[0]);
    };    
    
 
        /// E10_08 USE OF OCCUPANT SAFETY EQUIPMENT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E10_08")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E10_08", "-25");        
        }
        else{
            XML.Node("E10_08", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E10_08", d2Vals[i]);
        };              
    };    
            

        
        /// E10_09 AIRBAG
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E10_09")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E10_09", "-25");        
        }
        else{
            XML.Node("E10_09", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E10_09", d2Vals[i]);
        };              
    };    


                
        /// E10_10 AIRBAG
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E10_10")
    if (d2Vals != null)     
            XML.Node("E10_09", d2Vals[0]);
    };    






 };

    
    



  
    E08_15	Incident ZIP Code
    E09_01	Prior Aid
    E09_02	Prior Aid Performed by
    E09_03	Outcome of the Prior  Aid
    E09_04	Possible Injury
    E09_11	Chief Complaint Anatomic Location
    E09_12	Chief Complaint Organ System
    E09_13	Primary Symptom
    E09_14	Other Associated Symptoms
    E09_15	Providers Primary Impression
    E09_16	Provider’s Secondary Impression
    E10_01	Cause of Injury
    E11_01	Cardiac Arrest
    E11_02	Cardiac Arrest Etiology
    E11_03	Resuscitation Attempted
    E12_01	Barriers to Patient Care
    E12_19	Alcohol/Drug Use Indicators
    E18_03	Medication Given
    E18_08	Medication Complication
    E19_03	Procedure
    E19_05	Number of Procedure Attempts
    E19_06	Procedure Successful
    E19_07	Procedure Complication
    E20_07	Destination Zip Code
    E20_10	Incident/Patient Disposition
    E20_14	Transport Mode from Scene
    E20_16	Reason for Choosing Destination
    E20_17	Type of Destination
    E22_01	Emergency Department Disposition
    E22_02	Hospital Disposition


};//