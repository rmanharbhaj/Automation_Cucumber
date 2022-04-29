$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Automation_Login.feature");
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
formatter.scenario({
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
    },
    {
      "line": 35,
      "value": "#Scenario Outline: Automation Login Test Scenario"
    },
    {
      "line": 36,
      "value": "#Given user is already on login page"
    },
    {
      "line": 37,
      "value": "#When title is \"Login - My Store\""
    },
    {
      "line": 38,
      "value": "#Then user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\""
    },
    {
      "line": 39,
      "value": "#Then user clicks on signIn button"
    },
    {
      "line": 40,
      "value": "#Then user is on home page"
    },
    {
      "line": 41,
      "value": "#\t\tThen user quit"
    },
    {
      "line": 42,
      "value": "#"
    },
    {
      "line": 43,
      "value": "#Examples:"
    },
    {
      "line": 44,
      "value": "#| username | password |"
    },
    {
      "line": 45,
      "value": "#| rmanharbhaj@thebrick.com | Ridje123 |"
    },
    {
      "line": 46,
      "value": "#| rj123@gmail.com          | rj123    |"
    },
    {
      "line": 49,
      "value": "#(3)----------------Simple data driven - with table-----------*"
    }
  ],
  "line": 51,
  "name": "Automation Login Test Scenario",
  "description": "",
  "id": "automation-login-feature;automation-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 52,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "title is \"Login - My Store\"",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "user enters username and passsword",
  "rows": [
    {
      "cells": [
        "rmanharbhaj@thebrick.com",
        "Ridje123"
      ],
      "line": 55
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 56,
      "value": "#| rj123@gmail.com          | rj123    |"
    }
  ],
  "line": 57,
  "name": "user clicks on signIn button",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "user quit",
  "keyword": "Then "
});
formatter.match({
  "location": "AutomationLoginStepDefinations.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 6390719791,
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
  "duration": 18364292,
  "status": "passed"
});
formatter.match({
  "location": "AutomationLoginStepDefinations.user_enters_username_and_passsword(DataTable)"
});
formatter.result({
  "duration": 344556334,
  "status": "passed"
});
formatter.match({
  "location": "AutomationLoginStepDefinations.user_clicks_on_signIn_button()"
});
formatter.result({
  "duration": 3664381500,
  "status": "passed"
});
formatter.match({
  "location": "AutomationLoginStepDefinations.user_is_on_home_page()"
});
formatter.result({
  "duration": 6886167,
  "status": "passed"
});
formatter.match({
  "location": "AutomationLoginStepDefinations.user_quit()"
});
formatter.result({
  "duration": 81077667,
  "status": "passed"
});
});