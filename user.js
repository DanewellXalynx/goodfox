//Goodfox user.js to harden Mozilla Firefox//

//you are free to copy this file, commit to this file, redistribute it or fork it//

//Disable telemetry collected by firefox//
user_pref("devtools.onboarding.telemetry.logged", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled ", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("devtools.onboarding.telemetry.logged", false);
user_pref("datareporting.healthreport.uploadEnabled ", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.sessions.current.clean ", true);

//Disable Mozilla junk (work in progress)//
user_pref("extensions.pocket.enabled", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);

//Fingerprinting Protection (work in progress)//
user_pref("privacy.resistFingerprinting", true);
