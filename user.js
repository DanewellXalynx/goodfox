//Goodfox user.js to harden Mozilla Firefox//

//you are free to copy this file, commit to this file, redistribute it or fork it//

/*
Table of Contents:
__________________________
SEC-1 : Disable telemetry, studies, crash reports and similar
  1.1 : Telemetry
  1.2 : Studies
  1.3 : Crash Reports
__________________________
SEC-2 : Disable Mozilla bloat
  2.1 : Mozilla Junk
  2.2 : Search Suggestions
  2.3 : Autofill
  2.4 : Recommendations
__________________________
SEC-3 : Disable Google code
  3.1 : Google Analytics
  3.2 : Google Safe Browsing
__________________________
SEC-4 : Tracking and Fingerprinting protection
  4.1 : Fingerprinting Protection and ResistFingerprinting
  4.2 : WebGL
  4.3 : Enhanced Tracking Protection
___________________________
SEC-5 : Clear Data on Shutdown
___________________________
SEC-6 : Location Privacy
  6.1 : Geolocation
___________________________
*/

// [SEC-1] Disable telemetry, studies, crash reports and similar//
/*[1.1] telemetry*/
user_pref("devtools.onboarding.telemetry.logged", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
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
user_pref("toolkit.telemetry.coverage.opt-out", true)
user_pref("toolkit.coverage.opt-out", true);
user_pref("datareporting.sessions.current.clean ", true);
user_pref("toolkit.coverage.endpoint.base", "");
/*[1.2] studies*/
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
/*[1.3] crash reports*/
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

// [SEC-2] Disable Mozilla bloat//
/*[2.1] mozilla junk*/
user_pref("extensions.pocket.enabled", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.default.sites", "");
/*[2.2] search suggestions*/
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.trending.featureGate", false);
user_pref("browser.urlbar.addons.featureGate", false); //FF115+//
user_pref("browser.urlbar.mdn.featureGate", false); //FF117+//
user_pref("browser.urlbar.pocket.featureGate", false); //FF116+//
user_pref("browser.urlbar.weather.featureGate", false); //FF108+//
user_pref("browser.urlbar.yelp.featureGate", false); //FF124+//
/*[2.3] Autofill data*/
user_pref("browser.formfill.enable", false);
/*[2.4] recommendations*/
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.shopping.experience2023.enabled", false);

// [SEC-3] Disable google code//
/*[3.1] Google Analytics*/
user_pref("extensions.getAddons.showPane", false)
/*[3.2] Google Safe Browsing*/
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);

// [SEC-4] Tracking and Fingerprinting protection//
/*[4.1] fingerprinting protection*/
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.resistFingerprinting.pbmode", true);
user_pref("privacy.window.maxInnerWidth", 1600);
user_pref("privacy.window.maxInnerHeight", 900);
user_pref("privacy.resistFingerprinting.letterboxing", true);
user_pref("browser.display.use_system_colors", false);
user_pref("privacy.spoof_english", 1);
/*[4.2] WebGL*/
user_pref("webgl.disabled", true);
/*[4.3] ETP (enhanced tracking protection)*/
user_pref("browser.contentblocking.category", "strict");

// [SEC-5] Clear data on shutdown//
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown_v2.cache", true);
user_pref("privacy.clearOnShutdown_v2.cookiesAndStorage", true);
user_pref("privacy.clearOnShutdown_v2.historyFormDataAndDownloads", true);

// [SEC-6] Location Privacy//
/*[6.1] Geolocation*/
user_pref("geo.provider.ms-windows-location", false); //Windows//
user_pref("geo.provider.use_corelocation", false); //macOS//
user_pref("geo.provider.use_gpsd", false); //GNU/Linux//
user_pref("geo.provider.use_geoclue", false); //FF102+ GNU/Linux// 
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");

//
