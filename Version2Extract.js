var setD2EMS = function (v2Array, V3Object) 
{
    if (v2Array.length == 0) {
        return "Error"
    };

    var d2Vals = [];
    

    /// E01_01 PATIENT CARE REPORT NUMBER
    XML.BeginNode("Record")
    XML.BeginNode("E01")
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
    XML.EndNode()


    XML.BeginNode("E02")
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
    if (d2Vals == null) {
        if (DispatchisCancelled == true) {
            XML.Node("E02_02", "-5");
        }
        else {
            XML.Node("E02_02", "-10");
        }
    }
    else {
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
    XML.EndNode();
    /////////////////////////////////////////
    XML.BeginNode("E03")
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

    XML.EndNode()

    /////////////////////////////////////////////////
    
    XML.BeginNode("E04")
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

    ///E04_02   CREW MEMBER ID
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
    if (crewMemberID == null) {
        XML.Node("E04_03", "-5");
    }
    else {
        if (d2Vals == null) {
            XML.Node("E04_03", "-10");
        }
        else {
            XML.Node("E04_03", d2Vals[0]);
        }
    };
    XML.EndNode()
    //////////////////////////////////////
    ///E05_01  INCIDENT OR ONSET DATE/TIME 
    XML.BeginNode("E05")
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

    XML.EndNode()
    //////////////////////////////////

    XML.BeginNode("E06")
    XML.BeginNode("E06_1_0")
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
                XML.Node("E06_01", "-5");
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
    XML.EndNode();
    XML.BeginNode("E06_4_0")
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
    XML.EndNode();

        ///E06_06   PATIENT COUNTY (FIPS CODE)
        d2Vals = [];
        d2Vals = getV2Values(V2XMLArray, "E06_06")
        if (d2Vals == null) {
            if (NoPatient() == true) {
                XML.Node("E06_06", "-25");
            }
            else {
                XML.Node("E06_06", "-10");
            }
        }
        else {
            XML.Node("E06_06", d2Vals[0]);
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

    XML.BeginNode("E06_14_0")
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
        XML.EndNode();
    
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
    XML.BeginNode("E06_19_0")
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

        XML.EndNode()
    XML.EndNode()

        //////////////////////////////////////
        XML.BeginNode("E07")

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
    
    XML.BeginNode("E07_03_0")
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

                XML.BeginNode("E07_05_0")
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
    
                XML.EndNode();
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

            XML.BeginNode("E07_11_0")
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
        XML.EndNode();
    XML.EndNode();

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

        NEIL






















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

        XML.EndNode()

        /////////////////////////////////////////////////////////////SCENE
        XML.BeginNode("E08")
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
        XML.EndNode()
        /////////////////////////////////////////////////SITUATION
        XML.BeginNode("E09")
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
        XML.EndNode()
        //////////////////////////////// TRAUMA
        XML.BeginNode("E10")
        /// E10_01 CAUSE OF INJURY
        d2Vals = [];
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
    

        /// E10_02 INTENT OF THE INJURY
        d2Vals = [];
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
    XML.EndNode();
    //////////////////////////////////////////////SITUATION/CPR

    XML.BeginNode("E11");
    /// E11_01 CARDIAC ARREST
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E11_01")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E11_01", "-25");        
        }
        else{
            XML.Node("E11_01", "-10");
        }
    }
    else {
        XML.Node("E11_01", d2Vals[0]);
    };    


    /// E11_02 CARDIAC ARREST ETIOLOGY
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E11_02")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E11_02", "-25");        
        }
        else{
            XML.Node("E11_02", "-10");
        }
    }
    else {
        XML.Node("E11_02", d2Vals[0]);
    };    

    /// E11_03 RESUSCITATION ATTEMPTED

    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E11_03")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E11_03", "-25");        
        }
        else{
            XML.Node("E11_03", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E11_03", d2Vals[i]);
        };              
    };    
            
    /// E11_04 ARREST WITNESSED BY
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E11_04")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E11_04", "-25");        
        }
        else{
            XML.Node("E11_04", "-10");
        }
    }
    else {
        XML.Node("E11_04", d2Vals[0]);
    };    

    /// E11_05 FIRST MONITORED RHYTHM OF THE PATIENT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E11_05")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E11_05", "-25");        
        }
        else{
            XML.Node("E11_05", "-10");
        }
    }
    else {
        XML.Node("E11_05", d2Vals[0]);
    };   

    /// E11_06 ANY RETURN OF SPONTANEOUS CIRCULATION
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E11_06")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E11_06", "-25");        
        }
        else{
            XML.Node("E11_06", "-10");
        }
    }
    else {
        XML.Node("E11_06", d2Vals[0]);
    };   


    /// E11_07 NEUROLOGICAL OUTCOME AT HOSPITAL DISCHARGE 
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E11_07")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E11_07", "-25");        
        }
        else{
            XML.Node("E11_07", "-10");
        }
    }
    else {
        XML.Node("E11_07", d2Vals[0]);
    };   

    /// E11_08 ESTIMATED TIME OF ARREST PRIOR TO EMS ARRIVAL
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E11_08")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E11_08", "-25");        
        }
        else{
            XML.Node("E11_08", "-10");
        }
    }
    else {
        XML.Node("E11_08", d2Vals[0]);
    };   

    /// E11_09 ESTIMATED TIME OF ARREST PRIOR TO EMS ARRIVAL
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E11_09")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E11_09", "-25");        
        }
        else{
            XML.Node("E11_09", "-10");
        }
    }
    else {
        XML.Node("E11_09", d2Vals[0]);
    };   


    /// E11_10 REASON CPR DISCONTINUED
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E11_10")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E11_10", "-25");        
        }
        else{
            XML.Node("E11_10", "-10");
        }
    }
    else {
        XML.Node("E11_10", d2Vals[0]);
    };   
    //E11_11 CARDIAC RHYTHM ON ARRIVAL AT DESTINATION
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E11_11")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E11_11", "-25");        
        }
        else{
            XML.Node("E11_11", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E11_11", d2Vals[i]);
        };              
    }; 

    XML.EndNode()
    ////////////////////////////////////MEDICAL HISTORY

    XML.BeginNode("E12")
    //E12_01    BARRIERS TO PATIENT CARE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E12_01")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E12_01", "-25");        
        }
        else{
            XML.Node("E12_01", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E12_01", d2Vals[i]);
        };              
    }; 


    //E12_02   SENDING FACILITY MEDICAL RECORD NUMBER
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E12_02")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E12_02", "-25");        
        }
        else{
            XML.Node("E12_02", "-10");
        }
    }
    else {
        XML.Node("E12_02", d2Vals[0]);
    }; 


    //E12_03   DESTINATION MEDICAL RECORD NUMBER
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E12_03")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E12_03", "-25");        
        }
        else{
            XML.Node("E12_03", "-10");
        }
    }
    else {
        XML.Node("E12_03", d2Vals[0]);
    };

    //E12_04   FIRST NAME OF PATIENT'S PRIMARY PRACTITIONER
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E12_04")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E12_04", "-25");        
        }
        else{
            XML.Node("E12_04", "-10");
        }
    }
    else {
        XML.Node("E12_04", d2Vals[0]);
    };
    //E12_05  MIDDLE NAME OF PATIENT'S PRIMARY PRACTITIONER
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E12_05")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E12_05", "-25");        
        }
        else{
            XML.Node("E12_05", "-10");
        }
    }
    else {
        XML.Node("E12_05", d2Vals[0]);
    };
    //E12_06   LAST NAME OF PATIENT'S PRIMARY PRACTITIONER
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E12_06")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E12_06", "-25");        
        }
        else{
            XML.Node("E12_06", "-10");
        }
    }
    else {
        XML.Node("E12_06", d2Vals[0]);
    };

    //E12_07 ADVANCED DIRECTIVES
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E12_07")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E12_07", "-25");        
        }
        else{
            XML.Node("E12_07", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E12_07", d2Vals[i]);
        };              
    }; 

    //E12_08 MEDICATION ALLERGIES
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E12_08")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E12_08", "-25");        
        }
        else{
            XML.Node("E12_08", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E12_08", d2Vals[i]);
        };              
    }; 

    
    //E12_09 ENVIRONMENTAL/FOOD ALLERGIES
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E12_09")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E12_09", "-25");        
        }
        else{
            XML.Node("E12_09", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E12_09", d2Vals[i]);
        };              
    }; 

    //E12_10 MEDICAL/SURGICAL HISTORY
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E12_10")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E12_10", "-25");        
        }
        else{
            XML.Node("E12_10", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E12_10", d2Vals[i]);
        };              
    }; 

    //E12_11 MEDICAL HISTORY OBTAINED FROM
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E12_11")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E12_11", "-25");        
        }
        else{
            XML.Node("E12_11", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E12_10", d2Vals[0]);
        }
    }; 


    //E12_12 IMMUNIZATION HISTORY
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E12_12")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E12_12", "-25");        
        }
        else{
            XML.Node("E12_12", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E12_12", d2Vals[i]);
        };              
    }; 

    //E12_13 MEDICAL HISTORY OBTAINED FROM
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E12_13")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E12_13", "-25");        
        }
        else{
            XML.Node("E12_13", "-10");
        }
    }
    else {
        XML.Node("E12_13", d2Vals[0]);
    }; 

    LOOP
    //E12_14 CURRENT MEDICATIONS
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E12_14")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E12_14", "-25");        
        }
        else{
            XML.Node("E12_14", "-10");
        }
    }
    else {

        XML.Node("E12_14", d2Vals[0]);
        
    }; 

    //E12_15 CURRENT MEDICATION DOSAGE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E12_15")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E12_15", "-25");        
        }
        else{
            XML.Node("E12_15", "-10");
        }
    }
    else {

            XML.Node("E12_15", d2Vals[0]);

    }; 

    //E12_16 CURRENT MEDICATION DOSAGE UNIT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E12_16")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E12_16", "-25");        
        }
        else{
            XML.Node("E12_16", "-10");
        }
    }
    else {

        XML.Node("E12_16", d2Vals[0]);
    }; 


    //E12_17 CURRENT MEDICATION ADMINISTRATION ROUTE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E12_17")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E12_17", "-25");        
        }
        else{
            XML.Node("E12_17", "-10");
        }
    }
    else {

        XML.Node("E12_17", d2Vals[0]);
    }; 


    //E12_18 PRESENCE OF EMERGENCY INFORMATION FORM
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E12_18")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E12_18", "-25");        
        }
        else{
            XML.Node("E12_18", "-10");
        }
    }
    else {

        XML.Node("E12_18", d2Vals[0]);
    }; 


    //E12_19 ALCOHOL/DRUG USE INDICATORS
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E12_19")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E12_19", "-25");        
        }
        else{
            XML.Node("E12_19", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E12_19", d2Vals[i]);
        };              
    }; 


    //E12_20 PRESENCE OF EMERGENCY INFORMATION FORM
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E12_20")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E12_20", "-25");        
        }
        else{
            XML.Node("E12_20", "-10");
        }
    }
    else {

        XML.Node("E12_20", d2Vals[0]);
    }; 
    XML.EndNode()

    //////////////////////////////////NARRATIVE
    XML.BeginNode("E13")

    //E13_01 RUN REPORT NARRATIVE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E13_01")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E13_01", "-25");        
        }
        else{
            XML.Node("E13_01", "-10");
        }
    }
    else {

        XML.Node("E13_01", d2Vals[0]);
    }; 

    XML.EndNode()

    //////////////////////////////////VITAL SIGNS
    XML.BeginNode("E14")

    //E14_01 DATE/TIME VITAL SIGNS TAKEN
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E14_01")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E14_01", "");        
        }
        else{
            XML.Node("E14_01", "");
        }
    }
    else {
        XML.Node("E14_01", d2Vals[0]);
    }; 


    //E14_02 OBTAINED PRIOR TO THIS UNITS EMS CARE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E14_02")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E14_02", "-25");        
        }
        else{
            XML.Node("E14_02", "-10");
        }
    }
    else {

        XML.Node("E14_02", d2Vals[0]);
    }; 

    
    //E14_03 CARDIAC RHYTHM
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E14_03")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E14_03", "-25");        
        }
        else{
            XML.Node("E14_03", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E14_03", d2Vals[i]);
        };              
    }; 

    //E14_04 SBP (SYSTOLIC BLOOD PRESSURE)
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E14_04")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E14_04", "");        
        }
        else{
            XML.Node("E14_04", "");
        }
    }
    else {
        XML.Node("E14_04", d2Vals[0]);
    }; 


    //E14_05 DBP (SYSTOLIC BLOOD PRESSURE)
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E14_05")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E14_05", "");        
        }
        else{
            XML.Node("E14_05", "");
        }
    }
    else {
        XML.Node("E14_05", d2Vals[0]);
    }; 

    
    //E14_06 METHOD OF BLOOD PRESSURE MEASUREMENT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E14_06")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E14_06", "");        
        }
        else{
            XML.Node("E14_06", "");
        }
    }
    else {
        XML.Node("E14_06", d2Vals[0]);
    }; 

    //E14_07 METHOD OF BLOOD PRESSURE MEASUREMENT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E14_07")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E14_07", "");        
        }
        else{
            XML.Node("E14_07", "");
        }
    }
    else {
        XML.Node("E14_07", d2Vals[0]);
    }; 

    //E14_08 ELECTRONIC MONITOR RATE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E14_08")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E14_08", "");        
        }
        else{
            XML.Node("E14_08", "");
        }
    }
    else {
        XML.Node("E14_08", d2Vals[0]);
    }; 


    //E14_09 PULSE OXIMETRY
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E14_09")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E14_09", "");        
        }
        else{
            XML.Node("E14_09", "");
        }
    }
    else {
        XML.Node("E14_09", d2Vals[0]);
    }; 


    //E14_10 PULSE OXIMETRY
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E14_10")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E14_10", "-25");        
        }
        else{
            XML.Node("E14_10", "-10");
        }
    }
    else {
        XML.Node("E14_10", d2Vals[0]);
    }; 

    //E14_11 RESPIRATORY RATE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E14_11")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E14_11", "");        
        }
        else{
            XML.Node("E14_11", "");
        }
    }
    else {
        XML.Node("E14_11", d2Vals[0]);
    }; 


    //E14_12 RESPIRATORY EFFORT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E14_12")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E14_12", "-25");        
        }
        else{
            XML.Node("E14_12", "-10");
        }
    }
    else {
        XML.Node("E14_12", d2Vals[0]);
    }; 

    //E14_13 CARBON DIOXIDE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E14_13")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E14_13", "");        
        }
        else{
            XML.Node("E14_13", "");
        }
    }
    else {
        XML.Node("E14_13", d2Vals[0]);
    }; 


    //E14_14 BLOOD GLUCOSE LEVEL
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E14_14")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E14_14", "");        
        }
        else{
            XML.Node("E14_14", "");
        }
    }
    else {
        XML.Node("E14_14", d2Vals[0]);
    }; 


    //E14_15 GLASGOW COMA SCORE-EYE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E14_15")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E14_15", "");        
        }
        else{
            XML.Node("E14_15", "");
        }
    }
    else {
        XML.Node("E14_15", d2Vals[0]);
    }; 

    //E14_16 GLASGOW COMA SCORE-VERBAL
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E14_16")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E14_16", "");        
        }
        else{
            XML.Node("E14_16", "");
        }
    }
    else {
        XML.Node("E14_16", d2Vals[0]);
    }; 

    //E14_17 GLASGOW COMA SCORE-VERBAL
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E14_17")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E14_17", "");        
        }
        else{
            XML.Node("E14_17", "");
        }
    }
    else {
        XML.Node("E14_17", d2Vals[0]);
    }; 

    
    //E14_18 GLASGOW COMA SCORE-QUALIFIER
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E14_18")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E14_18", "");        
        }
        else{
            XML.Node("E14_18", "");
        }
    }
    else {
        XML.Node("E14_18", d2Vals[0]);
    }; 

    //E14_19 GLASGOW TOTAL COMA SCORE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E14_19")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E14_19", "");        
        }
        else{
            XML.Node("E14_19", "");
        }
    }
    else {
        XML.Node("E14_19", d2Vals[0]);
    }; 


    //E14_20 TEMPERATURE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E14_20")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E14_20", "");        
        }
        else{
            XML.Node("E14_20", "");
        }
    }
    else {
        XML.Node("E14_20", d2Vals[0]);
    }; 


    //E14_21 TEMPERATURE METHOD
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E14_21")
    if (d2Vals == null)     {
    }
    else {
        XML.Node("E14_20", d2Vals[0]);
    };


    //E14_22 LEVEL OF RESPONSIVENESS
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E14_22")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E14_22", "-25");        
        }
        else{
            XML.Node("E14_22", "-10");
        }
    }
    else {
        XML.Node("E14_22", d2Vals[0]);
    };

    //E14_23 PAIN SCALE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E14_23")
    if (d2Vals == null)     {
    }
    else {
        XML.Node("E14_23", d2Vals[0]);
    };

    //E14_24 STROKE SCALE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E14_24")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E14_24", "-25");        
        }
        else{
            XML.Node("E14_24", "-10");
        }
    }
    else {
        XML.Node("E14_24", d2Vals[0]);
    };

    //E14_25 THROMBOLYTIC SCREEN
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E14_25")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E14_25", "-25");        
        }
        else{
            XML.Node("E14_25", "-10");
        }
    }
    else {
        XML.Node("E14_25", d2Vals[0]);
    };

    //E14_26 APGAR
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E14_26")
    if (d2Vals == null)     {
    }
    else {
        XML.Node("E14_26", d2Vals[0]);
    };

    //E14_27 REVISED TRAUMA SCORE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E14_27")
    if (d2Vals == null)     {
    }
    else {
        XML.Node("E14_27", d2Vals[0]);
    };

    //E14_28 PEDIATRIC TRAUMA SCORE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E14_28")
    if (d2Vals == null)     {
    }
    else {
        XML.Node("E14_28", d2Vals[0]);
    };
    XML.EndNode()

    ///////////////////////////// ASSESSMENT INJURY
    XML.BeginNode("E15")
    
    //E15_01  NHTSA INJURY MATRIX EXTERNAL/SKIN
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E15_01")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E15_01", "-25");        
        }
        else{
            XML.Node("E15_01", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E15_01", d2Vals[i]);
        };              
    }; 

    //E15_02    NHTSA INJURY MATRIX HEAD
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E15_02")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E15_02", "-25");        
        }
        else{
            XML.Node("E15_02", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E15_02", d2Vals[i]);
        };              
    }; 

    //E15_03    NHTSA INJURY MATRIX FACE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E15_03")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E15_03", "-25");        
        }
        else{
            XML.Node("E15_03", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E15_03", d2Vals[i]);
        };                      
    };

    //E15_04    NHTSA INJURY MATRIX NECK
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E15_04")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E15_04", "-25");        
        }
        else{
            XML.Node("E15_04", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E15_04", d2Vals[i]);
        };              
    };

    //E15_05    NHTSA INJURY MATRIX THORAX
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E15_05")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E15_05", "-25");        
        }
        else{
            XML.Node("E15_05", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E15_05", d2Vals[i]);
        };              
    };


    //E15_06   NHTSA INJURY MATRIX ABDOMEN
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E15_06")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E15_06", "-25");        
        }
        else{
            XML.Node("E15_06", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E15_06", d2Vals[i]);
        };              
    };

    //E15_07   NHTSA INJURY MATRIX SPINE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E15_07")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E15_07", "-25");        
        }
        else{
            XML.Node("E15_07", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E15_07", d2Vals[i]);
        };              
    };

    //E15_08   NHTSA INJURY MATRIX EXTREMITIES
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E15_08")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E15_08", "-25");        
        }
        else{
            XML.Node("E15_08", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E15_08", d2Vals[i]);
        };              
    };
    //E15_09   NHTSA INJURY MATRIX PELVIS
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E15_09")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E15_09", "-25");        
        }
        else{
            XML.Node("E15_09", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E15_09", d2Vals[i]);
        };              
    };
    //E15_10   NHTSA INJURY MATRIX EXTREMITIES
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E15_10")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E15_10", "-25");        
        }
        else{
            XML.Node("E15_10", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E15_10", d2Vals[i]);
        };              
    };
    //E15_11   NHTSA INJURY MATRIX UNSPECIFIED
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E15_11")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E15_11", "-25");        
        }
        else{
            XML.Node("E15_11", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E15_11", d2Vals[i]);
        };              
    };

    XML.EndNode()
    //////////////////////ASSESSMENT EXAM
    XML.BeginNode("E16")
    //E16_01   ESTIMATED BODY WEIGHT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E16_01")
    if (d2Vals == null)     {
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E15_11", d2Vals[i]);
        };              
    }

    //E16_02 BROSELOW/LUTEN COLOR
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E16_02")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E16_02", "-25");        
        }
        else{
            XML.Node("E16_02", "-10");
        }
    }
    else {
        XML.Node("E16_02", d2Vals[0]);        
    };


    //E16_03 DATE/TIME OF ASSESSMENT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E16_03")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E16_03", "-25");        
        }
        else{
            XML.Node("E16_03", "-10");
        }
    }
    else {
        XML.Node("E16_03", d2Vals[0]);        
    };


    LOOP
    //E16_04 DATE/TIME OF ASSESSMENT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E16_04")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E16_04", "-25");        
        }
        else{
            XML.Node("E16_04", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E16_04", d2Vals[i]);        
        }
    };

    //E16_05 HEAD/FACE ASSESSMENT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E16_05")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E16_05", "-25");        
        }
        else{
            XML.Node("E16_05", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E16_05", d2Vals[i]);        
        }
    };

    //E16_06 NECK ASSESSMENT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E16_06")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E16_06", "-25");        
        }
        else{
            XML.Node("E16_06", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E16_06", d2Vals[i]);        
        }
    };

    //E16_07 CHEST/LUNG ASSESSMENT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E16_07")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E16_07", "-25");        
        }
        else{
            XML.Node("E16_07", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E16_07", d2Vals[i]);        
        }
    };
    //E16_08 HEART ASSESSMENT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E16_08")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E16_08", "-25");        
        }
        else{
            XML.Node("E16_08", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E16_08", d2Vals[i]);        
        }
    };

    //E16_09 ABDOMEN LEFT UPPER ASSESSMENT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E16_09")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E16_09", "-25");        
        }
        else{
            XML.Node("E16_09", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E16_09", d2Vals[i]);        
        }
    };

    //E16_10 ABDOMEN LEFT lower ASSESSMENT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E16_10")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E16_10", "-25");        
        }
        else{
            XML.Node("E16_10", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E16_10", d2Vals[i]);        
        }
    };
    //E16_11 ABDOMEN RIGHT UPPER ASSESSMENT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E16_11")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E16_11", "-25");        
        }
        else{
            XML.Node("E16_11", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E16_11", d2Vals[i]);        
        }
    };
    //E16_12 ABDOMEN RIGHT LOWER ASSESSMENT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E16_12")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E16_12", "-25");        
        }
        else{
            XML.Node("E16_12", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E16_12", d2Vals[i]);        
        }
    };
    //E16_13 GU ASSESSMENT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E16_13")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E16_13", "-25");        
        }
        else{
            XML.Node("E16_13", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E16_13", d2Vals[i]);        
        }
    };
    //E16_14 BACK CERVICAL ASSESSMENT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E16_14")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E16_14", "-25");        
        }
        else{
            XML.Node("E16_14", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E16_14", d2Vals[i]);        
        }
    };
    //E16_15 BACK THORACIC  ASSESSMENT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E16_15")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E16_15", "-25");        
        }
        else{
            XML.Node("E16_15", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E16_15", d2Vals[i]);        
        }
    };
    //E16_16 BACK LUMBAR/SACRAL ASSESSMENT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E16_16")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E16_16", "-25");        
        }
        else{
            XML.Node("E16_16", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E16_16", d2Vals[i]);        
        }
    };
    //E16_17 EXTREMITIES-RIGHT UPPER ASSESSMENT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E16_17")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E16_17", "-25");        
        }
        else{
            XML.Node("E16_17", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E16_17", d2Vals[i]);        
        }
    };

    //E16_18 EXTREMITIES-RIGHT LOWER ASSESSMENT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E16_18")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E16_18", "-25");        
        }
        else{
            XML.Node("E16_18", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E16_18", d2Vals[i]);        
        }
    };
    //E16_19 EXTREMITIES-LEFT UPPER ASSESSMENT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E16_19")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E16_19", "-25");        
        }
        else{
            XML.Node("E16_19", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E16_19", d2Vals[i]);        
        }
    };
    //E16_20 EXTREMITIES-LEFT LOWER ASSESSMENT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E16_20")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E16_20", "-25");        
        }
        else{
            XML.Node("E16_20", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E16_20", d2Vals[i]);        
        }
    };
    //E16_21 EYES-LEFT ASSESSMENT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E16_21")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E16_21", "-25");        
        }
        else{
            XML.Node("E16_21", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E16_21", d2Vals[i]);        
        }
    };
    //E16_22 EYES-RIGHT ASSESSMENT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E16_22")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E16_22", "-25");        
        }
        else{
            XML.Node("E16_22", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E16_22", d2Vals[i]);        
        }
    };
    //E16_23 MENTAL STATUS ASSESSMENT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E16_23")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E16_23", "-25");        
        }
        else{
            XML.Node("E16_23", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E16_23", d2Vals[i]);        
        }
    };
    //E16_24 NEUROLOGICAL ASSESSMENT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E16_24")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E16_24", "-25");        
        }
        else{
            XML.Node("E16_24", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E16_24", d2Vals[i]);        
        }
    };
    
    XML.EndNode()
    //////////////////////////////INTERVENTION
    XML.BeginNode("E17")

    //E17_01   PROTOCOLS USED   
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E17_01")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E17_01", "-25");        
        }
        else{
            XML.Node("E17_01", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E17_01", d2Vals[i]);        
        }
    };
   
    XML.EndNode()

    //////////////////////////////INTERVENTION/MEDICATION
    XML.BeginNode("E18")

    //E18_01 DATE/TIME MEDICATION ADMINISTERED
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E18_01")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E18_01", "");        
        }
        else{
            XML.Node("E18_01", "");
        }
    }
    else {
        XML.Node("E18_01", d2Vals[0]);        
    };

    //E18_02  MEDICATION ADMINISTERED PRIOR TO THIS UNITS EMS CARE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E18_02")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E18_02", "-25");        
        }
        else{
            XML.Node("E18_02", "-10");
        }
    }
    else {
        XML.Node("E18_02", d2Vals[0]);        
    };
    //E18_03  MEDICATION GIVEN
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E18_03")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E18_03", "-25");        
        }
        else{
            XML.Node("E18_03", "-10");
        }
    }
    else {
        XML.Node("E18_03", d2Vals[0]);        
    };

    //E18_04 MEDICATION ADMINISTERED ROUTE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E18_04")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E18_04", "-25");        
        }
        else{
            XML.Node("E18_04", "-10");
        }
    }
    else {
        XML.Node("E18_04", d2Vals[0]);        
    };

    //E18_05 MEDICATION DOGAGE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E18_05")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E18_05", "-25");        
        }
        else{
            XML.Node("E18_05", "-10");
        }
    }
    else {
        XML.Node("E18_05", d2Vals[0]);        
    };

    //E18_06 MEDICATION DOGAGE UNITS
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E18_06")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E18_06", "-25");        
        }
        else{
            XML.Node("E18_06", "-10");
        }
    }
    else {
        XML.Node("E18_06", d2Vals[0]);        
    };
    //E18_07 RESPONSE TO MEDICATION
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E18_07")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E18_07", "-25");        
        }
        else{
            XML.Node("E18_07", "-10");
        }
    }
    else {
        XML.Node("E18_07", d2Vals[0]);        
    };

    //E18_08 MEDICATION COMPLICATION
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E18_08")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E18_08", "-25");        
        }
        else{
            XML.Node("E18_08", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E18_08", d2Vals[i]);        
        }
    };

    //E18_09 MEDICATION CREW MEMBER ID
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E18_09")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E18_09", "-25");        
        }
        else{
            XML.Node("E18_09", "-10");
        }
    }
    else {
        XML.Node("E18_09", d2Vals[0]);        
    };

    //E18_10 MEDICATION AUTHORIZATION
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E18_10")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E18_10", "-25");        
        }
        else{
            XML.Node("E18_10", "-10");
        }
    }
    else {
        XML.Node("E18_10", d2Vals[0]);        
    };

    //E18_11 MEDICATION AUTHORIZING PHYSICIAN
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E18_11")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E18_11", "-25");        
        }
        else{
            XML.Node("E18_11", "-10");
        }
    }
    else {
        XML.Node("E18_11", d2Vals[0]);        
    };
    XML.EndNode()
    ///////////////////////////////////////INTERVENTION/PROCEDURE
    XML.BeginNode("E19")

    //E19_01 DATE/TIME PROCEDURE PERFORMED SUCCESSFULLY
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E19_01")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E19_01", "");        
        }
        else{
            XML.Node("E19_01", "");
        }
    }
    else {
        XML.Node("E19_01", d2Vals[0]);        
    };

    //E19_02 PROCEDURE PERFORMED PRIOR TO THIS UNITS EMS CARE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E19_02")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E19_02", "-25");        
        }
        else{
            XML.Node("E19_02", "-10");
        }
    }
    else {
        XML.Node("E19_02", d2Vals[0]);        
    };

    //E19_03 PROCEDURE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E19_03")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E19_03", "-25");        
        }
        else{
            XML.Node("E19_03", "-10");
        }
    }
    else {
        XML.Node("E19_03", d2Vals[0]);        
    };

    //E19_04 SIZE OF PROCEDURE EQUIPMENT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E19_04")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E19_04", "-25");        
        }
        else{
            XML.Node("E19_04", "-10");
        }
    }
    else {
        XML.Node("E19_04", d2Vals[0]);        
    };
    //E19_05 NUMBER OF PROCEDURE ATTEMPTS
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E19_05")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E19_05", "-25");        
        }
        else{
            XML.Node("E19_05", "-10");
        }
    }
    else {
        XML.Node("E19_05", d2Vals[0]);        
    };

    //E19_06 PROCEDURE SUCCESSFUL
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E19_06")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E19_06", "-25");        
        }
        else{
            XML.Node("E19_06", "-10");
        }
    }
    else {
        XML.Node("E19_06", d2Vals[0]);        
    };

    
    //E19_07 PROCEDURE COMPLICATION
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E19_07")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E19_07", "-25");        
        }
        else{
            XML.Node("E19_07", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E19_07", d2Vals[i]);        
        }
    };


    //E19_08 RESPONSE TO PROCEDURE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E19_08")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E19_08", "-25");        
        }
        else{
            XML.Node("E19_08", "-10");
        }
    }
    else {
        XML.Node("E19_08", d2Vals[0]);        
    };

    //E19_09 PROCEDURE CREW MEMBERS ID
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E19_09")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E19_09", "-25");        
        }
        else{
            XML.Node("E19_09", "-10");
        }
    }
    else {
        XML.Node("E19_09", d2Vals[0]);        
    };
    //E19_10 PROCEDURE AUTHORIZATION
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E19_10")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E19_10", "-25");        
        }
        else{
            XML.Node("E19_10", "-10");
        }
    }
    else {
        XML.Node("E19_10", d2Vals[0]);        
    };
    //E19_11 PROCEDURE AUTHORIZING MD
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E19_11")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E19_11", "-25");        
        }
        else{
            XML.Node("E19_11", "-10");
        }
    }
    else {
        XML.Node("E19_11", d2Vals[0]);        
    };

    //E19_12 SUCCESSFUL IV SITE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E19_12")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E19_12", "-25");        
        }
        else{
            XML.Node("E19_12", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E19_12", d2Vals[i]);        
        }
    };

    //E19_13 TUBE CONFIRMATION
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E19_13")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E19_13", "-25");        
        }
        else{
            XML.Node("E19_13", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E19_13", d2Vals[i]);        
        }
    };
    //E19_14 DESTINATION CONFIRMATION OF TUBE PLACEMENT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E19_14")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E19_14", "-25");        
        }
        else{
            XML.Node("E19_14", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E19_14", d2Vals[i]);        
        }
    };

    XML.EndNode()

    //////////////////////////////DISPOSITION
    XML.BeginNode("E20")

    //E20_01    DESTINATION/TRANSFERRED TO, NAME
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E20_01")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E20_01", "-25");        
        }
        else{
            XML.Node("E20_01", "-10");
        }
    }
    else {
        XML.Node("E20_01", d2Vals[0]);        
    };

    //E20_02    DESTINATION/TRANSFERRED TO, CODE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E20_02")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E20_02", "-25");        
        }
        else{
            XML.Node("E20_02", "-10");
        }
    }
    else {
        XML.Node("E20_02", d2Vals[0]);        
    };


    //E20_03  DESTINATION/TRANSFERRED TO, ADDRESS
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E20_03")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E20_03", "-25");        
        }
        else{
            XML.Node("E20_03", "-10");
        }
    }
    else {
        XML.Node("E20_03", d2Vals[0]);        
    };
    //E20_04  DESTINATION/TRANSFERRED TO, CITY
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E20_04")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E20_04", "-25");        
        }
        else{
            XML.Node("E20_04", "-10");
        }
    }
    else {
        XML.Node("E20_04", d2Vals[0]);        
    };

    //E20_05  DESTINATION/TRANSFERRED TO, STATE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E20_05")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E20_05", "-25");        
        }
        else{
            XML.Node("E20_05", "-10");
        }
    }
    else {
        XML.Node("E20_05", d2Vals[0]);        
    };

    //E20_06  DESTINATION/TRANSFERRED TO, COUNTY
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E20_06")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E20_06", "-25");        
        }
        else{
            XML.Node("E20_06", "-10");
        }
    }
    else {
        XML.Node("E20_06", d2Vals[0]);        
    };

    //E20_07  DESTINATION/TRANSFERRED TO, ZIP
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E20_07")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E20_07", "-25");        
        }
        else{
            XML.Node("E20_07", "-10");
        }
    }
    else {
        XML.Node("E20_07", d2Vals[0]);        
    };

    //E20_08  DESTINATION/TRANSFERRED TO, GPS
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E20_08")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E20_08", "-25");        
        }
        else{
            XML.Node("E20_08", "-10");
        }
    }
    else {
        XML.Node("E20_08", d2Vals[0]);        
    };


    //E20_09  DESTINATION ZONE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E20_09")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E20_08", "-25");        
        }
        else{
            XML.Node("E20_08", "-10");
        }
    }
    else {
        XML.Node("E20_08", d2Vals[0]);        
    };

    //E20_10  INCIDENT/PATIENT DISPOSITION
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E20_10")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E20_10", "-25");        
        }
        else{
            XML.Node("E20_10", "-10");
        }
    }
    else {
        XML.Node("E20_10", d2Vals[0]);        
    };

    //E20_11  HOW PATIENT WAS MOVED TO AMBULANCE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E20_11")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E20_11", "-25");        
        }
        else{
            XML.Node("E20_11", "-10");
        }
    }
    else {
        XML.Node("E20_11", d2Vals[0]);        
    };


    
    //E20_12  POSITION OF PATIENT DURING TRANSPORT
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E20_12")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E20_12", "-25");        
        }
        else{
            XML.Node("E20_12", "-10");
        }
    }
    else {
        XML.Node("E20_12", d2Vals[0]);        
    };

    //E20_13  HOW PATIENT WAS TRANSPORTED FROM AMBULANCE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E20_13")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E20_13", "-25");        
        }
        else{
            XML.Node("E20_13", "-10");
        }
    }
    else {
        XML.Node("E20_13", d2Vals[0]);        
    };
    //E20_14  TRANSPORT MODE FROM SCENE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E20_14")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E20_14", "-25");        
        }
        else{
            XML.Node("E20_14", "-10");
        }
    }
    else {
        XML.Node("E20_14", d2Vals[0]);        
    };


    //E20_15 CONDITION OF PATIENT AT DESTINATION
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E20_15")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E20_15", "-25");        
        }
        else{
            XML.Node("E20_15", "-10");
        }
    }
    else {
        XML.Node("E20_15", d2Vals[0]);        
    };

    //E20_16 REASON FOR CHOOSING DESTINATION
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E20_16")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E20_16", "-25");        
        }
        else{
            XML.Node("E20_16", "-10");
        }
    }
    else {
        XML.Node("E20_16", d2Vals[0]);        
    };

    //E20_17 TYPE OF DESTINATION
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E20_17")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E20_17", "-25");        
        }
        else{
            XML.Node("E20_17", "-10");
        }
    }
    else {
        XML.Node("E20_17", d2Vals[0]);        
    };

    ////////////////////////////////MEDICAL DEVICE DATA
    XML.EndNode()

    LOOP

    XML.BeginNode("E21")
    //E21_01 EVENT DATE/TIME

    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E21_01")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E21_01", "");        
        }
        else{
            XML.Node("E21_01", "");
        }
    }
    else {
        XML.Node("E21_01", d2Vals[0]);        
    };

    //E21_02 MEDICAL DEVICE EVENT NAME
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E21_02")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E21_02", "-25");        
        }
        else{
            XML.Node("E21_02", "-10");
        }
    }
    else {
        XML.Node("E21_02", d2Vals[0]);        
    };

    //E21_03 WAVEFORM GRAPHIC TYPE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E21_03")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E21_03", "-25");        
        }
        else{
            XML.Node("E21_03", "-10");
        }
    }
    else {
        XML.Node("E21_03", d2Vals[0]);        
    };

    //E21_04 WAVEFORM GRAPHIC
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E21_04")
    if (d2Vals == null)     {
       
    }
    else {
        XML.Node("E21_04", d2Vals[0]);        
    };

    //E21_05 AED, PACING, OR CO2 MODE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E21_05")
    if (d2Vals == null)     {
       
    }
    else {
        XML.Node("E21_05", d2Vals[0]);        
    };

    
    //E21_06 ECG LEAD
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E21_06")
    if (d2Vals == null)     {
    }
    else {
        XML.Node("E21_06", d2Vals[0]);        
    };

       
    //E21_07 ECG INTERPRETATION
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E21_07")
    if (d2Vals == null)     {
    }
    else {
        XML.Node("E21_07", d2Vals[0]);        
    };
    //E21_08 TYPE OF SHOCK
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E21_08")
    if (d2Vals == null)     {
    }
    else {
        XML.Node("E21_08", d2Vals[0]);        
    };

    //E21_09 SHOCK OR PACING ENERGY
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E21_09")
    if (d2Vals == null)     {
    }
    else {
        XML.Node("E21_09", d2Vals[0]);        
    };

    //E21_10 TOTAL NUMBER OF SHOCKS DELIVERED
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E21_10")
    if (d2Vals == null)     {
    }
    else {
        XML.Node("E21_10", d2Vals[0]);        
    };

    //E21_11 TOTAL NUMBER OF SHOCKS DELIVERED
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E21_11")
    if (d2Vals == null)     {
    }
    else {
        XML.Node("E21_11", d2Vals[0]);        
    };

    //E21_12 DEVICE HEART RATE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E21_12")
    if (d2Vals == null)     {
    }
    else {
        XML.Node("E21_12", d2Vals[0]);        
    };

    //E21_13 DEVICE PULSE RATE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E21_13")
    if (d2Vals == null)     {
    }
    else {
        XML.Node("E21_13", d2Vals[0]);        
    };


    
    //E21_14 DEVICE SYSTOLIC BLOOD PRESSURE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E21_14")
    if (d2Vals == null)     {
    }
    else {
        XML.Node("E21_14", d2Vals[0]);        
    };

    
    //E21_15 DEVICE DIASTOLIC BLOOD PRESSURE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E21_15")
    if (d2Vals == null)     {
    }
    else {
        XML.Node("E21_15", d2Vals[0]);        
    };


    //E21_16 DEVICE RESPIRATORY RATE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E21_16")
    if (d2Vals == null)     {
    }
    else {
        XML.Node("E21_16", d2Vals[0]);        
    };

    //E21_17 DEVICE PULSE OXIMETRY
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E21_17")
    if (d2Vals == null)     {
    }
    else {
        XML.Node("E21_17", d2Vals[0]);        
    };

    //E21_18 DEVICE CO2 OR ETCO2
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E21_18")
    if (d2Vals == null)     {
    }
    else {
        XML.Node("E21_18", d2Vals[0]);        
    };

    //E21_19 DEVICE CO2 OR ETCO2
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E21_19")
    if (d2Vals == null)     {
    }
    else {
        XML.Node("E21_19", d2Vals[0]);        
    };


    //E21_20 DEVICE CO2 OR ETCO2
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E21_20")
    if (d2Vals == null)     {
    }
    else {
        XML.Node("E21_20", d2Vals[0]);        
    };

    XML.EndNode()
    ///////////////////////OUTCOME AND LINKAGE
    XML.BeginNode("E21")
    //E22_01 EMERGENCY DEPARTMENT DISPOSITION
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E22_01")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E22_01", "-25");        
        }
        else{
            XML.Node("E22_01", "-10");
        }
    }
    else {
        XML.Node("E22_01", d2Vals[0]);        
    };

    //E22_02 HOSPITAL DISPOSITION
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E22_02")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E22_02", "-25");        
        }
        else{
            XML.Node("E22_02", "-10");
        }
    }
    else {
        XML.Node("E22_02", d2Vals[0]);        
    };

    //E22_03 LAW ENFORCEMENT/CRASH REPORT NUMBER
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E22_03")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E22_03", "-25");        
        }
        else{
            XML.Node("E22_03", "-10");
        }
    }
    else {
        XML.Node("E22_03", d2Vals[0]);        
    };
    //E22_04 TRAUMA REGISTRY ID
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E22_04")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E22_04", "-25");        
        }
        else{
            XML.Node("E22_04", "-10");
        }
    }
    else {
        XML.Node("E22_04", d2Vals[0]);        
    };

    //E22_05 FIRE INCIDENT REPORT NUMBER
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E22_05")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E22_05", "-25");        
        }
        else{
            XML.Node("E22_05", "-10");
        }
    }
    else {
        XML.Node("E22_05", d2Vals[0]);        
    };

    //E22_06 PATIENT ID BAND/TAG NUMBER
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E22_06")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E22_06", "-25");        
        }
        else{
            XML.Node("E22_06", "-10");
        }
    }
    else {
        XML.Node("E22_06", d2Vals[0]);        
    };

    XML.EndNode()

    ////////////////////////////MISCELLANEOUS
    XML.BeginNode("E23")
    //E23_01 REVIEW REQUESTED
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E23_01")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E23_01", "-25");        
        }
        else{
            XML.Node("E23_01", "-10");
        }
    }
    else {
        XML.Node("E23_01", d2Vals[0]);        
    };

    //E23_02 POTENTIAL REGISTRY CANDIDATE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E23_02")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E23_02", "-25");        
        }
        else{
            XML.Node("E23_02", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E23_02", d2Vals[i]);        
        }
    };    
    
    //E23_03 POTENTIAL REGISTRY CANDIDATE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E23_03")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E23_03", "-25");        
        }
        else{
            XML.Node("E23_03", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E23_03", d2Vals[i]);        
        }
    };  

    //E23_04 SUSPECTED INTENTIONAL, OR UNINTENTIONAL DISASTER
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E23_04")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E23_04", "-25");        
        }
        else{
            XML.Node("E23_04", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E23_04", d2Vals[i]);        
        }
    };  


    //E23_05 SUSPECTED CONTACT WITH BLOOD/BODY FLUIDS OF EMS INJURY OR DEATH
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E23_05")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E23_05", "-25");        
        }
        else{
            XML.Node("E23_05", "-10");
        }
    }
    else {
        XML.Node("E23_05", d2Vals[0]);        
    };


    //E23_06 TYPE OF SUSPECTED BLOOD/BODY FLUID EXPOSURE, INJURY, OR 
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E23_06")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E23_06", "-25");        
        }
        else{
            XML.Node("E23_06", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E23_06", d2Vals[i]);        
        }
    }; 

    //E23_07 PERSONNEL EXPOSED 
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E23_07")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E23_07", "-25");        
        }
        else{
            XML.Node("E23_07", "-10");
        }
    }
    else {
        for (var i = 0; i < d2Vals.length; i++) {
            XML.Node("E23_07", d2Vals[i]);        
        }
    };

    //E23_08 REQUIRED REPORTABLE CONDITIONS
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E23_08")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E23_08", "-25");        
        }
        else{
            XML.Node("E23_08", "-10");
        }
    }
    else {
        XML.Node("E23_08", d2Vals[0]);                
    };

    //E23_09 RESEARCH SURVEY FIELD
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E23_09")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E23_09", "-25");        
        }
        else{
            XML.Node("E23_09", "-10");
        }
    }
    else {
        XML.Node("E23_09", d2Vals[0]);                
    };

    //E23_10 WHO GENERATED THIS REPORT?
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E23_10")
    if (d2Vals == null)     {
        if(DispatchisCancelled() == true){
            XML.Node("E23_10", "-25");        
        }
        else{
            XML.Node("E23_10", "-10");
        }
    }
    else {
        XML.Node("E23_10", d2Vals[0]);                
    };

    //E23_11 RESEARCH SURVEY FIELD TITLE
    d2Vals = [];
    d2Vals = getV2Values(V2XMLArray, "E23_11")
    if (d2Vals == null)     {
    }
    else {
        XML.Node("E23_11", d2Vals[0]);                
    };
    XML.EndNode()
    XML.EndNode()

};
