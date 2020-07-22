var GLOBAL_LANGUAGE = 'ENGLISH';

var LANGUAGESETTINGS = {
    landingPage:"enUS",
    projects:"enUS_projects"
}

if (GLOBAL_LANGUAGE === 'SPANISH') {
    LANGUAGESETTINGS["landingPage"] = 'esDO';
    LANGUAGESETTINGS["projects"] = 'esDO_projects';
}

else {
    LANGUAGESETTINGS["landingPage"] = 'enUS';
    LANGUAGESETTINGS["projects"] = 'enUS_projects';
}




export { GLOBAL_LANGUAGE, LANGUAGESETTINGS }