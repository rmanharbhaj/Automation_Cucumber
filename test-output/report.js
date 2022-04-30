$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("map.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 19,
  "name": "Automation LoginMap Feature",
  "description": "",
  "id": "automation-loginmap-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 23,
  "name": "Automation LoginMap Test Scenario",
  "description": "",
  "id": "automation-loginmap-feature;automation-loginmap-test-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@SmokeTest"
    },
    {
      "line": 22,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Mapuser is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Maptitle is \"Login - My Store\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Mapuser enters username and passsword",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 28
    },
    {
      "cells": [
        "rmanharbhaj@thebrick.com",
        "Ridje123"
      ],
      "line": 29
    },
    {
      "cells": [
        "rj123@gmail.com",
        "rj123"
      ],
      "line": 30
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Mapuser quit",
  "keyword": "Then "
});
formatter.match({
  "location": "AutomationLoginMapstepDefinations.mapuser_is_already_on_login_page()"
});
formatter.result({
  "duration": 5251796666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login - My Store",
      "offset": 13
    }
  ],
  "location": "AutomationLoginMapstepDefinations.maptitle_is(String)"
});
formatter.result({
  "duration": 18404375,
  "status": "passed"
});
formatter.match({
  "location": "AutomationLoginMapstepDefinations.mapuser_enters_username_and_passsword(DataTable)"
});
formatter.result({
  "duration": 7930404250,
  "status": "passed"
});
formatter.match({
  "location": "AutomationLoginMapstepDefinations.mapuser_quit()"
});
formatter.result({
  "duration": 80631750,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Automation sign in Test",
  "description": "",
  "id": "automation-loginmap-feature;automation-sign-in-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@SmokeTest"
    },
    {
      "line": 34,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "user is on Sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "AutomationLoginMapstepDefinations.user_is_on_Sign_in_page()"
});
formatter.result({
  "duration": 210833,
  "status": "passed"
});
});