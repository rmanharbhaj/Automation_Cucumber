$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/rjghori/eclipse-workspace/AutomationCucumberProject/src/main/java/features/Automation_Login.feature");
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
  "line": 20,
  "name": "Automation Login Feature",
  "description": "",
  "id": "automation-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 23,
      "value": "#(1)----------------Simple data driven - without examples-----------*"
    },
    {
      "line": 25,
      "value": "#Scenario: Automation Login Test Scenario"
    },
    {
      "line": 26,
      "value": "#Given user is already on login page"
    },
    {
      "line": 27,
      "value": "#When title is \"Login - My Store\""
    },
    {
      "line": 28,
      "value": "#Then user enters \"rmanharbhaj@thebrick.com\" and \"Ridje123\""
    },
    {
      "line": 29,
      "value": "#Then user clicks on signIn button"
    },
    {
      "line": 30,
      "value": "#Then user is on home page"
    },
    {
      "line": 31,
      "value": "#Then user quit"
    },
    {
      "line": 33,
      "value": "#(2)----------------Simple data driven - with examples + Scenario Outline-----------*"
    }
  ],
  "line": 35,
  "name": "Automation Login Test Scenario",
  "description": "",
  "id": "automation-login-feature;automation-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "title is \"Login - My Store\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "user clicks on signIn button",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "user quit",
  "keyword": "Then "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "automation-login-feature;automation-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 44,
      "id": "automation-login-feature;automation-login-test-scenario;;1"
    },
    {
      "cells": [
        "rmanharbhaj@thebrick.com",
        "Ridje123"
      ],
      "line": 45,
      "id": "automation-login-feature;automation-login-test-scenario;;2"
    },
    {
      "cells": [
        "rj123@gmail.com",
        "rj123"
      ],
      "line": 46,
      "id": "automation-login-feature;automation-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 45,
  "name": "Automation Login Test Scenario",
  "description": "",
  "id": "automation-login-feature;automation-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "title is \"Login - My Store\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "user enters \"rmanharbhaj@thebrick.com\" and \"Ridje123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "user clicks on signIn button",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "user quit",
  "keyword": "Then "
});
formatter.match({
  "location": "AutomationLoginStepDefinations.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 5439796084,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login - My Store",
      "offset": 10
    }
  ],
  "location": "AutomationLoginStepDefinations.title_is(String)"
});
formatter.result({
  "duration": 18322000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rmanharbhaj@thebrick.com",
      "offset": 13
    },
    {
      "val": "Ridje123",
      "offset": 44
    }
  ],
  "location": "AutomationLoginStepDefinations.user_enters_and(String,String)"
});
formatter.result({
  "duration": 356475917,
  "status": "passed"
});
formatter.match({
  "location": "AutomationLoginStepDefinations.user_clicks_on_signIn_button()"
});
formatter.result({
  "duration": 1528053458,
  "status": "passed"
});
formatter.match({
  "location": "AutomationLoginStepDefinations.user_is_on_home_page()"
});
formatter.result({
  "duration": 5760916,
  "status": "passed"
});
formatter.match({
  "location": "AutomationLoginStepDefinations.user_quit()"
});
formatter.result({
  "duration": 86651583,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Automation Login Test Scenario",
  "description": "",
  "id": "automation-login-feature;automation-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "title is \"Login - My Store\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "user enters \"rj123@gmail.com\" and \"rj123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "user clicks on signIn button",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "user quit",
  "keyword": "Then "
});
formatter.match({
  "location": "AutomationLoginStepDefinations.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 4312465000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login - My Store",
      "offset": 10
    }
  ],
  "location": "AutomationLoginStepDefinations.title_is(String)"
});
formatter.result({
  "duration": 18847958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rj123@gmail.com",
      "offset": 13
    },
    {
      "val": "rj123",
      "offset": 35
    }
  ],
  "location": "AutomationLoginStepDefinations.user_enters_and(String,String)"
});
formatter.result({
  "duration": 351055833,
  "status": "passed"
});
formatter.match({
  "location": "AutomationLoginStepDefinations.user_clicks_on_signIn_button()"
});
formatter.result({
  "duration": 1347789458,
  "status": "passed"
});
formatter.match({
  "location": "AutomationLoginStepDefinations.user_is_on_home_page()"
});
formatter.result({
  "duration": 9141375,
  "status": "passed"
});
formatter.match({
  "location": "AutomationLoginStepDefinations.user_quit()"
});
formatter.result({
  "duration": 77391708,
  "status": "passed"
});
});