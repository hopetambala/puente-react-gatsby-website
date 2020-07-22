var GLOBAL_LANGUAGE = 'SPANISH';
var code = "enUS"


if (GLOBAL_LANGUAGE === 'SPANISH') {
    code = "esDO"
}

var LANGUAGESETTINGS = {
    contentfulLandingPage:`${code}_contentfulLandingPage`,
    contentfulProjectTypes:`${code}_contentfulProjectTypes`,
    contentfulAboutPage:`${code}_contentfulAboutPage`,
    contentfulFeaturedVolunteers:`${code}_contentfulFeaturedVolunteers`,
    contentfulMerchandisePage:`${code}_contentfulMerchandisePage`
    
}




export { GLOBAL_LANGUAGE, LANGUAGESETTINGS }