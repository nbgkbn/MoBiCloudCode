var Utils = require('cloud/UtilitiesCC.js');
var V2Utils = require('cloud/ConversionUtilsCC.js');
exports.setE15 = function (TheCall)
{
    var TC = TheCall;
    if (typeof TC.eExam == 'undefined') {
        var E15 = {};
        E15.IsUndefined = true;
        return E15;
    }
    else {
        var E15 = {};
        E15.IsUndefined = false;

        if (typeof TheCall.VehicularIncident == 'undefined') {
            E15.E15_01 = NOTRECORDED
        }
        else {
            if (TheCall.VehicularIncident == true) {
                if (typeof TC.eExam.AssessmentGroup["eExam.04"] != 'undefined') { //Head
                    for (var d = 0; d < TC.eExam["eExam.04"].vSet.length; d++) {
                        var obj = TC.eExam.AssessmentGroup["eExam.04"][d];
                        if (obj == "3504001") //Clammy
                        {
                            E15_01.push("3360")
                        }
                        else if (obj == "3504003") //Cold
                        {
                            E15_01.push("3360")
                        }
                        else if (obj == "3504005") //Cyanotic
                        {
                            E15_01.push("3360")
                        }
                        else if (obj == "3504007") //Diaphoretic
                        {
                            E15_01.push("3360")
                        }

                        else if (obj == "3504009") //Dry
                        {
                            E15_01.push("3360")
                        }
                        else if (obj == "3504011") //Flushed
                        {
                            E15_01.push("3360")
                        }
                        else if (obj == "3504013") //Hot
                        {
                            E15_01.push("3335")
                        }
                        else if (obj == "3504015") //Jaundiced
                        {
                            E15_01.push("3360")
                        }
                        else if (obj == "3504017") //Lividity
                        {
                            E15_01.push("3370")
                        }
                        else if (obj == "3504019") //Mottled
                        {
                            E15_01.push("3360")
                        }
                        else if (obj == "3504021") //Normal
                        {
                            E15_01.push("3365")
                        }
                        else if (obj == "3504023") //Not Done
                        {
                            E15_01.push("-5")
                        }
                        else if (obj == "3504025") //Pale
                        {
                            E15_01.push("3360")
                        }
                        else if (obj == "3504027") //Poor Turgor
                        {
                            E15_01.push("3370")
                        }
                        else if (obj == "3504029") //Red (Erythematous)
                        {
                            E15_01.push("3370")
                        }
                        else if (obj == "3504031") //Tenting
                        {
                            E15_01.push("3360")
                        }
                        else if (obj == "3504033") //Warm
                        {
                            E15_01.push("3335")
                        }
                    }
                };
                if (typeof TC.eExam.AssessmentGroup["eExam.05"] != 'undefined') { //Head
                    for (var d = 0; d < TC.eExam.AssessmentGroup["eExam.05"].vSet.length; d++) {
                        var obj = TC.eExam.AssessmentGroup["eExam.05"][d];
                        if (obj == "3505001") //Blunt
                        {
                            E15_02.push("3370")
                        }
                        else if (obj == "3505003") //Blunt
                        {
                            E15_02.push("3370")
                        }
                        else if (obj == "3505005") //Bleeding
                        {
                            E15_02.push("3325")
                        }
                        else if (obj == "3505007") //Bleeding
                        {
                            E15_02.push("3335")
                        }

                        else if (obj == "3505009") //Burn
                        {
                            E15_02.push("3335")
                        }
                        else if (obj == "3505011") //Burn
                        {
                            E15_02.push("3335")
                        }
                        else if (obj == "3505013") //Burn
                        {
                            E15_02.push("3335")
                        }

                        else if (obj == "3505015") //Burn
                        {
                            E15_02.push("3335")
                        }
                        else if (obj == "3505017") //Decap
                        {
                            E15_02.push("3345")
                        }
                        else if (obj == "3505019") //Deform
                        {
                            E15_02.push("3325")
                        }
                        else if (obj == "3505021") //Drainage
                        {
                            E15_02.push("3365")
                        }
                        else if (obj == "3505023") //Foriegn body
                        {
                            E15_02.push("3320")
                        }
                        else if (obj == "3505025") //Gun
                        {
                            E15_02.push("3350")
                        }
                        else if (obj == "3505027") //Gun
                        {
                            E15_02.push("3350")
                        }
                        else if (obj == "3505029") //Laceration
                        {
                            E15_02.push("3355")
                        }
                        else if (obj == "3505031") //Mass/Lesion
                        {
                            E15_02.push("3360")
                        }
                        else if (obj == "3505033") //Gun
                        {
                            //E15_02.push("3320")
                        }
                        else if (obj == "3505035") //Gun
                        {
                            E15_02.push("-5")
                        }
                        else if (obj == "3505037") //Pain
                        {
                            E15_02.push("3360")
                        }
                        else if (obj == "3505039") //Stab
                        {
                            E15_02.push("3365")
                        }
                        else if (obj == "3505045") //Gun
                        {
                            E15_02.push("3350")
                        }
                        else if (obj == "3505047") //Gun
                        {
                            E15_02.push("3340")
                        }
                        else if (obj == "3505049") //Gun
                        {
                            E15_02.push("3370")
                        }
                        else if (obj == "3505051") //Gun
                        {
                            E15_02.push("3370")
                        }
                        else if (obj == "3505052") //Gun
                        {
                            E15_02.push("3370")
                        };
                    }
                };
                if (typeof TC.eExam.AssessmentGroup["eExam.06"] != 'undefined') //face
                {
                    for (var d = 0; d < TC.eExam.AssessmentGroup["eExam.06"].vSet.length; d++) {
                        var obj = TC.eExam.AssessmentGroup["eExam.06"][d];
                        if (obj == "3506001") //Blunt
                        {
                            E15_03.push("3370")
                        }
                        else if (obj == "3506003") //Blunt
                        {
                            E15_03.push("3370")
                        }
                        else if (obj == "3506005") //Bleeding
                        {
                            E15_03.push("3325")
                        }
                        else if (obj == "3506007") //Bleeding
                        {
                            E15_03.push("3335")
                        }
                        else if (obj == "3506009") //Burn
                        {
                            E15_03.push("3335")
                        }
                        else if (obj == "3506011") //Burn
                        {
                            E15_03.push("3335")
                        }
                        else if (obj == "3506013") //Burn
                        {
                            E15_03.push("3335")
                        }

                        else if (obj == "3506015") //Burn
                        {
                            E15_03.push("3335")
                        }

                        else if (obj == "3506017") //Burn
                        {
                            E15_03.push("3335")
                        }
                        else if (obj == "3506019") //Decap
                        {
                            E15_03.push("3345")
                        }
                        else if (obj == "3506021") //Deform
                        {
                            E15_03.push("3325")
                        }
                        else if (obj == "3506023") //Drainage
                        {
                            E15_03.push("3365")
                        }
                        else if (obj == "3506025") //Foriegn body
                        {
                            E15_03.push("3320")
                        }
                        else if (obj == "3506027") //Gun
                        {
                            E15_03.push("3350")
                        }
                        else if (obj == "3506029") //Gun
                        {
                            E15_03.push("3350")
                        }
                        else if (obj == "3506031") //Laceration
                        {
                            E15_03.push("3355")
                        }
                        else if (obj == "3506033") //Mass/Lesion
                        {
                            E15_03.push("3360")
                        }
                        else if (obj == "3506035") //Normal
                        {
                            E15_03.push("-5")
                        }
                        else if (obj == "3506037") //Not Done
                        {
                            E15_03.push("-10")
                        }
                        else if (obj == "3506039") //Pain
                        {
                            E15_03.push("3360")
                        }
                        else if (obj == "3506041") //Puncture
                        {
                            E15_03.push("3365")
                        }
                        else if (obj == "3506047") //Gun
                        {
                            E15_03.push("3340")
                        }
                        else if (obj == "3506049") //Crush
                        {
                            E15_03.push("3340")
                        }
                        else if (obj == "3506051") //Tenderness
                        {
                            E15_03.push("3370")
                        }
                        else if (obj == "3506053") //Gun
                        {
                            E15_03.push("3370")
                        }
                        else if (obj == "3506055") //Gun
                        {
                            E15_03.push("3370")
                        };
                    }
                };
                if (typeof TC.eExam.AssessmentGroup["eExam.07"] != 'undefined') //neck
                {
                    for (var d = 0; d < TC.eExam.AssessmentGroup["eExam.07"].vSet.length; d++) {
                        var obj = TC.eExam.AssessmentGroup["eExam.07"][d];
                        if (obj == "3507001") //Abrassion
                        {
                            E15_04.push("3370")
                        }
                        else if (obj == "3507003") //Avulsion
                        {
                            E15_04.push("3370")
                        }
                        else if (obj == "3507005") //Bleeding
                        {
                            E15_04.push("3325")
                        }
                        else if (obj == "3507007") //Bleeding
                        {
                            E15_04.push("3335")
                        }
                        else if (obj == "3507009") //Burn
                        {
                            E15_04.push("3335")
                        }
                        else if (obj == "3507011") //Burn
                        {
                            E15_04.push("3335")
                        }
                        else if (obj == "3507013") //Burn
                        {
                            E15_04.push("3335")
                        }
                        else if (obj == "3507015") //Burn
                        {
                            E15_04.push("3335")
                        }
                        else if (obj == "3507017") //Decap
                        {
                            E15_04.push("3345")
                        }
                        else if (obj == "3507019") //Foriegn body
                        {
                            E15_04.push("3320")
                        }
                        else if (obj == "3507021") //Gun
                        {
                            E15_04.push("3350")
                        }
                        else if (obj == "3507023") //Gun
                        {
                            E15_04.push("3350")
                        }
                        else if (obj == "3507025") //Gun
                        {
                            E15_04.push("3360")
                        }
                        else if (obj == "3507027") //Laceration
                        {
                            E15_04.push("3355")
                        }
                        else if (obj == "3507029") //Normal
                        {
                            E15_04.push("-10")
                        }
                        else if (obj == "3507031") //Not Done
                        {
                            E15_04.push("-5")
                        }
                        else if (obj == "3507033") //Pain
                        {
                            E15_04.push("3360")
                        }
                        else if (obj == "3507035") //Puncture
                        {
                            E15_04.push("3365")
                        }
                        else if (obj == "3507037") //Stridor
                        {
                            E15_04.push("3360")
                        }
                        else if (obj == "3507039") //Subcutaneous air
                        {
                            E15_04.push("3360")
                        }
                        else if (obj == "3507051") //Tenderness
                        {
                            E15_04.push("3370")
                        }
                        else if (obj == "3507045") //Tracheal Deviation Left
                        {
                            E15_04.push("3360")
                        }
                        else if (obj == "3507047") //Tracheal Deviation Right
                        {
                            E15_04.push("3360")
                        }
                        else if (obj == "3507049") //Gun
                        {
                            E15_04.push("3340")
                        }
                        else if (obj == "3507051") //Crush
                        {
                            E15_04.push("3340")
                        }
                        else if (obj == "3507053") //Swelling
                        {
                            E15_04.push("3370")
                        }
                        else if (obj == "3507055") //Contusion
                        {
                            E15_04.push("3370")
                        }
                        else if (obj == "3507057") //Deform
                        {
                            E15_04.push("3360")
                        }
                        else if (obj == "3507047") //Tenderness
                        {
                            E15_04.push("3360")
                        }
                    }
                };
                if (typeof TC.eExam.AssessmentGroup["eExam.08"] != 'undefined') //neck
                {
                    for (var d = 0; d < TC.eExam.AssessmentGroup["eExam.08"].vSet.length; d++) {
                        var obj = TC.eExam.AssessmentGroup["eExam.08"][d];
                        if (obj == "3508001") //Abrassion
                        {
                            E15_05.push("3370")
                        }
                        else if (obj == "3508003") //Avulsion
                        {
                            E15_05.push("3370")
                        }
                        else if (obj == "3508005") //Bleeding
                        {
                            E15_05.push("3325")
                        }
                        else if (obj == "3508007") //Bleeding
                        {
                            E15_05.push("3335")
                        }
                        else if (obj == "3508009") //Burn
                        {
                            E15_05.push("3335")
                        }
                        else if (obj == "3508011") //Breath Sounds-Absent-Left
                        {
                            E15_05.push("3360")
                        }
                        else if (obj == "3508013") //Breath Sounds-Absent-Right
                        {
                            E15_05.push("3360")
                        }
                        else if (obj == "3508015") //Breath Sounds-Decrease-Left
                        {
                            E15_05.push("3360")
                        }
                        else if (obj == "3508017") //Breath Sounds-Decrease-Rights
                        {
                            E15_05.push("3360")
                        }
                        else if (obj == "3508019") //Breath Sounds-equal
                        {
                            E15_05.push("-10")
                        }
                        else if (obj == "3508021") //Breath Sounds-Normal Right
                        {
                            E15_05.push("-10")
                        }
                        else if (obj == "3508023") //Breath Sounds-Normal Left
                        {
                            E15_05.push("-10")
                        }
                        else if (obj == "3508025") //Burn
                        {
                            E15_05.push("3335")
                        }
                        else if (obj == "3508027") //Burn
                        {
                            E15_05.push("3355")
                        }
                        else if (obj == "3508029") //Burn
                        {
                            E15_05.push("3335")
                        }
                        else if (obj == "3508031") //Burn
                        {
                            E15_05.push("3335")
                        }
                        else if (obj == "3508033") //Crush
                        {
                            E15_05.push("3340")
                        }
                        else if (obj == "3508035") //Deform
                        {
                            E15_05.push("3360")
                        }
                        else if (obj == "3508037") //Flail Left
                        {
                            E15_05.push("3345")
                        }
                        else if (obj == "3508039") //Flail Right
                        {
                            E15_05.push("3345")
                        }
                        else if (obj == "3508041") //Foreing
                        {
                            E15_05.push("3355")
                        }
                        else if (obj == "3508043") //Gun
                        {
                            E15_05.push("3350")
                        }
                        else if (obj == "3508045") //Gun
                        {
                            E15_05.push("3350")
                        }
                        else if (obj == "3508047") //Increased Resp
                        {
                            E15_05.push("3360")
                        }
                        else if (obj == "3508049") //Implanted Device
                        {
                            E15_05.push("-10")
                        }
                        else if (obj == "3508051") //Laceration
                        {
                            E15_05.push("3355")
                        }
                        else if (obj == "3508053") //Norm
                        {
                            E15_05.push("-10")
                        }
                        else if (obj == "3508055") //not Done
                        {
                            E15_05.push("-10")
                        }
                        else if (obj == "3508057") //Pain
                        {
                            E15_05.push("3360")
                        }
                        else if (obj == "3508059") //Pain
                        {
                            E15_05.push("3360")
                        }
                        else if (obj == "3508061") //Pain
                        {
                            E15_05.push("3360")
                        }
                        else if (obj == "3508063") //Puncture
                        {
                            E15_05.push("3365")
                        }
                        else if (obj == "3508065") //Rales
                        {
                            E15_05.push("3360")
                        }
                        else if (obj == "3508067") //Rales
                        {
                            E15_05.push("3360")
                        }
                        else if (obj == "3508069") //Rhonchi
                        {
                            E15_05.push("3360")
                        }
                        else if (obj == "3508071") //Rhonchi
                        {
                            E15_05.push("3360")
                        }
                        else if (obj == "3508073") //Rhonchi
                        {
                            E15_05.push("3360")
                        }
                        else if (obj == "3508075") //Rhonchi
                        {
                            E15_05.push("3360")
                        }
                        else if (obj == "3508077") //Stridor
                        {
                            E15_05.push("3360")
                        }
                        else if (obj == "3508079") //Stridor
                        {
                            E15_05.push("3360")
                        }
                        else if (obj == "3508085") //Stridor
                        {
                            E15_05.push("3370")
                        }
                        else if (obj == "3508087") //Stridor
                        {
                            E15_05.push("3360")
                        }
                        else if (obj == "3508089") //Wheezing
                        {
                            E15_05.push("3360")
                        }
                        else if (obj == "3508091") //Wheezing
                        {
                            E15_05.push("3360")
                        }
                        else if (obj == "3508093") //Wheezing
                        {
                            E15_05.push("3360")
                        }
                        else if (obj == "3508095") //Wheezing
                        {
                            E15_05.push("3360")
                        }
                        else if (obj == "3508097") //Gun
                        {
                            E15_05.push("3350")
                        }
                        else if (obj == "3508099") //Wheezing
                        {
                            E15_05.push("3370")
                        }
                        else if (obj == "3508101") //Wheezing
                        {
                            E15_05.push("3370")
                        }
                    }
                };
                if (typeof TC.eExam.AssessmentGroup["eExam.11"] != 'undefined') //neck
                {
                    for (var d = 0; d < TC.eExam.AssessmentGroup["eExam.11"].vSet.length; d++) {
                        var obj = TC.eExam.AssessmentGroup["eExam.11"][d];
                        if (obj == "3511001") //Abrassion
                        {
                            E15_06.push("3370")
                        }
                        else if (obj == "3511003") //Avulsion
                        {
                            E15_06.push("3370")
                        }
                        else if (obj == "3511005") //Bleeding
                        {
                            E15_06.push("3325")
                        }
                        else if (obj == "3511007") //Bleeding
                        {
                            E15_06.push("3335")
                        }
                        else if (obj == "3511009") //Bowel Sounds Abscent
                        {
                            E15_06.push("3360")
                        }
                        else if (obj == "3511011") //Bowel Sounds Present
                        {
                            E15_06.push("3360")
                        }
                        else if (obj == "3511013") //Burn
                        {
                            E15_06.push("3335")
                        }
                        else if (obj == "3511015") //Burn
                        {
                            E15_06.push("3335")
                        }
                        else if (obj == "3511017") //Burn
                        {
                            E15_06.push("3335")
                        }
                        else if (obj == "3511021") //Distension
                        {
                            E15_06.push("3360")
                        }
                        else if (obj == "3511023") //Foriegn Body
                        {
                            E15_06.push("3355")
                        }
                        else if (obj == "3511025") //Guarding
                        {
                            E15_06.push("3360")
                        }
                        else if (obj == "3511027") //gun
                        {
                            E15_06.push("3350")
                        }
                        else if (obj == "3511029") //Gun
                        {
                            E15_06.push("3350")
                        }
                        else if (obj == "3511031") //Laceration
                        {
                            E15_06.push("3355")
                        }
                        else if (obj == "3511033") //Mass Lesion
                        {
                            E15_06.push("3370")
                        }
                        else if (obj == "3511035") //Mass Pulsating
                        {
                            E15_06.push("3370")
                        }
                        else if (obj == "3511037") //Normal
                        {
                            E15_06.push("-10")
                        }
                        else if (obj == "3511039") //Not Done
                        {
                            E15_06.push("-10")
                        }
                        else if (obj == "3511041") //Paim
                        {
                            E15_06.push("3360")
                        }
                        else if (obj == "3511043") //Pregnant
                        {
                            E15_06.push("3360")
                        }
                        else if (obj == "3511045") //Puncture
                        {
                            E15_06.push("3365")
                        }
                        else if (obj == "3511051") //Tenderness
                        {
                            E15_06.push("3360")
                        }
                        else if (obj == "3511053") //Gun
                        {
                            E15_06.push("3350")
                        }
                        else if (obj == "3511055") //Crush
                        {
                            E15_06.push("3340")
                        }
                        else if (obj == "3511057") //Swelling
                        {
                            E15_06.push("3370")
                        }
                        else if (obj == "3511059") //Contussion
                        {
                            E15_06.push("3360")
                        }
                        else if (obj == "3511061") //De
                        {
                            E15_06.push("3360")
                        }
                    }
                };
                if (typeof TC.eExam.AssessmentGroup["eExam.14"] != 'undefined') //neck
                {
                    for (var d = 0; d < TC.eExam.AssessmentGroup["eExam.14"].vSet.length; d++) {
                        var obj = TC.eExam.AssessmentGroup["eExam.14"][d];
                        if (obj == "3514001") //Abrassion
                        {
                            E15_07.push("3370")
                        }
                        else if (obj == "3514003") //Avulsion
                        {
                            E15_07.push("3370")
                        }
                        else if (obj == "3514005") //Bleeding
                        {
                            E15_07.push("3325")
                        }
                        else if (obj == "3514007") //Bleeding
                        {
                            E15_07.push("3335")
                        }
                        else if (obj == "3514009") //Burn
                        {
                            E15_07.push("3335")
                        }
                        else if (obj == "3514011") //Burn
                        {
                            E15_07.push("3335")
                        }
                        else if (obj == "3514013") //Burn
                        {
                            E15_07.push("3335")
                        }
                        else if (obj == "3514015") //Burn
                        {
                            E15_07.push("3335")
                        }
                        else if (obj == "3514017") //Deform
                        {
                            E15_07.push("3360")
                        }
                        else if (obj == "3514019") //Foreign
                        {
                            E15_07.push("3360")
                        }
                        else if (obj == "3514021") //Gun
                        {
                            E15_07.push("3350")
                        }
                        else if (obj == "3514023") //Gun
                        {
                            E15_07.push("3350")
                        }
                        else if (obj == "3514025") //Laceration
                        {
                            E15_07.push("3355")
                        }
                        else if (obj == "3514027") //Normal
                        {
                            E15_07.push("-10")
                        }
                        else if (obj == "3514029") //Not Done
                        {
                            E15_07.push("-10")
                        }
                        else if (obj == "3514031") //Pain
                        {
                            E15_07.push("3360")
                        }
                        else if (obj == "3514033") //Pain
                        {
                            E15_07.push("3360")
                        }
                        else if (obj == "3514035") //Puncture
                        {
                            E15_07.push("3365")
                        }
                        else if (obj == "3514041") //Tenderneess
                        {
                            E15_07.push("3360")
                        }
                        else if (obj == "3514043") //Tenderness
                        {
                            E15_07.push("3360")
                        }
                        else if (obj == "3514045") //Tenderness
                        {
                            E15_07.push("3360")
                        }
                        else if (obj == "3514047") //Gun
                        {
                            E15_07.push("3350")
                        }
                        else if (obj == "3514049") //Pregnant
                        {
                            E15_07.push("3340")
                        }
                        else if (obj == "3514051") //Swelling
                        {
                            E15_07.push("3370")
                        }
                        else if (obj == "3514053") //Contussion 
                        {
                            E15_07.push("3370")
                        }
                        else if (obj == "3514055") //Tenderness
                        {
                            E15_07.push("3360")
                        }
                    }
                };
                if (typeof TC.eExam.AssessmentGroup["eExam.16"] != 'undefined') //neck
                {
                    for (var d = 0; d < TC.eExam.AssessmentGroup["eExam.16"].vSet.length; d++) {
                        var obj = TC.eExam.AssessmentGroup["eExam.16"][d];
                        if (obj == "3516001") //Abrassion
                        {
                            E15_08.push("3370")
                        }
                        else if (obj == "3516003") //Amp
                        {
                            E15_08.push("3320")
                        }
                        else if (obj == "3516005") //Amp
                        {
                            E15_08.push("3320")
                        }
                        else if (obj == "3516007") //Avulstion
                        {
                            E15_08.push("3370")
                        }
                        else if (obj == "3516009") //Bleeding
                        {
                            E15_08.push("3325")
                        }
                        else if (obj == "3516011") //Bleeding
                        {
                            E15_08.push("3330")
                        }
                        else if (obj == "3516013") //Burn
                        {
                            E15_08.push("3335")
                        }
                        else if (obj == "3516015") //Burn
                        {
                            E15_08.push("3335")
                        }
                        else if (obj == "3516017") //Burn
                        {
                            E15_08.push("3335")
                        }
                        else if (obj == "3516019") //Burn
                        {
                            E15_08.push("3335")
                        }
                        else if (obj == "3516021") //Clubbing
                        {
                            E15_08.push("3370")
                        }
                        else if (obj == "3516025") //Crush
                        {
                            E15_08.push("3340")
                        }
                        else if (obj == "3516025") //Deform
                        {
                            E15_08.push("3355")
                        }
                        else if (obj == "3516027") //Disloc
                        {
                            E15_08.push("3345")
                        }
                        else if (obj == "3516029") //Edma
                        {
                            E15_08.push("3370")
                        }
                        else if (obj == "3516031") //Foriegn Body
                        {
                            E15_08.push("3355")
                        }
                        else if (obj == "3516033") //Fracture
                        {
                            E15_08.push("3345")
                        }
                        else if (obj == "3516035") //Fracture
                        {
                            E15_08.push("3345")
                        }
                        else if (obj == "3516037") //Gun
                        {
                            E15_08.push("3350")
                        }
                        else if (obj == "3516039") //Gun
                        {
                            E15_08.push("3350")
                        }
                        else if (obj == "3516041") //Tenderneess
                        {
                            E15_08.push("3355")
                        }
                        else if (obj == "3516043") //Motor Function-Abnormal/Weakness
                        {
                            E15_08.push("3360")
                        }
                        else if (obj == "3516045") //Motor Function
                        {
                            E15_08.push("3360")
                        }
                        else if (obj == "3516047") //Motor Function
                        {
                            E15_08.push("3360")
                        }
                        else if (obj == "3516049") //Normal
                        {
                            E15_08.push("-10")
                        }
                        else if (obj == "3516051") //Done
                        {
                            E15_08.push("-10")
                        }
                        else if (obj == "3516053") //Pain
                        {
                            E15_08.push("3360")
                        }
                        else if (obj == "3516055") //Pulse
                        {
                            E15_08.push("3360")
                        }
                        else if (obj == "3516057") //Pulse
                        {
                            E15_08.push("3360")
                        }
                        else if (obj == "3516059") //Pulse
                        {
                            E15_08.push("3360")
                        }
                        else if (obj == "3516061") //Pulse
                        {
                            E15_08.push("3360")
                        }
                        else if (obj == "3516063") //Puncture
                        {
                            E15_08.push("3365")
                        }
                        else if (obj == "3516065") //Sensation
                        {
                            E15_08.push("3360")
                        }
                        else if (obj == "3516067") //Sensation
                        {
                            E15_08.push("3360")
                        }
                        else if (obj == "3516069") //Sensation
                        {
                            E15_08.push("-10")
                        }
                        else if (obj == "3516071") //Tenderness
                        {
                            E15_08.push("3360")
                        }
                        else if (obj == "3516077") //Gun
                        {
                            E15_08.push("3350")
                        }
                        else if (obj == "3516079") //Swelling
                        {
                            E15_08.push("3360")
                        }
                        else if (obj == "3516079") //Contusion
                        {
                            E15_08.push("3360")
                        }
                    }
                }




                if (typeof E15_01 != 'undefined') {
                    E15.E15_01 = E15.E15_01;
                };
                if (typeof E15_02 != 'undefined') {
                    E15.E15_02 = E15.E15_02;
                };
                if (typeof E15_03 != 'undefined') {
                    E15.E15_03 = E15.E15_03;
                };
                if (typeof E15_04 != 'undefined') {
                    E15.E15_04 = E15.E15_04;
                };
                if (typeof E15_05 != 'undefined') {
                    E15.E15_05 = E15.E15_05;
                };
                if (typeof E15_06 != 'undefined') {
                    E15.E15_06 = E15.E15_06;
                };
                if (typeof E15_07 != 'undefined') {
                    E15.E15_07 = E15.E15_07;
                };
                if (typeof E15_08 != 'undefined') {
                    E15.E15_08 = E15.E15_08;
                };
                if (typeof E15_09 != 'undefined') {
                    E15.E15_09 = E15.E15_09;
                };
                if (typeof E15_10 != 'undefined') {
                    E15.E15_10 = E15.E15_10;
                };
                if (typeof E15_11 != 'undefined') {
                    E15.E15_11 = E15.E15_11;
                }
            }
            else {
                E15.E15_01 = NOTRECORDED
            }
        }
    };
    
    E15.IsUndefined = false;
    return E15;

};