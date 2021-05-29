import ff from "./ff.js";
//import ff from "https://fastframework.ga/ff.js";

ff.activateShortcuts();
ff.defineShortcut("_", alert);

_("Alert called from main.js file");
