$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FirstFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Automation test Practice website",
  "description": "",
  "id": "automation-test-practice-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1911805767,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Wiki search for String",
  "description": "",
  "id": "automation-test-practice-website;wiki-search-for-string",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Navigate to website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Search for fish in wikipedia",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Verify the search page heading is fish",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify search page for other Languages",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I navigate to different language Italiano",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I verify search page of new language has English",
  "keyword": "Then "
});
formatter.match({
  "location": "homepagestepdefs.navigateToWebsite()"
});
formatter.result({
  "duration": 876040227,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fish",
      "offset": 11
    }
  ],
  "location": "homepagestepdefs.searchForInWikipedia(String)"
});
formatter.result({
  "duration": 1926764755,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fish",
      "offset": 34
    }
  ],
  "location": "homepagestepdefs.verifyTheSearchPageHeadingIs(String)"
});
formatter.result({
  "duration": 305937638,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Languages",
      "offset": 29
    }
  ],
  "location": "homepagestepdefs.verifySearchPageForOtherLanguages(String)"
});
formatter.result({
  "duration": 178030220,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Italiano",
      "offset": 33
    }
  ],
  "location": "homepagestepdefs.iNavigateToDifferentLanguage(String)"
});
formatter.result({
  "duration": 1670392754,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "English",
      "offset": 41
    }
  ],
  "location": "homepagestepdefs.iVerifySearchPageOfNewLanguageHasEnglish(String)"
});
formatter.result({
  "duration": 44717058,
  "status": "passed"
});
formatter.after({
  "duration": 106134249,
  "status": "passed"
});
});