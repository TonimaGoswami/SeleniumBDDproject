$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/tanu/eclipse-workspace/FreeCRMBDDFramework/src/main/java/Features/create_user.feature");
formatter.feature({
  "line": 1,
  "name": "OrangeHRM create user feature",
  "description": "",
  "id": "orangehrm-create-user-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "OrangeHRM  create a new employee scenario",
  "description": "",
  "id": "orangehrm-create-user-feature;orangehrm--create-a-new-employee-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Title of Login page is OrangeHRM",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User is on Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User moves to Admin page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Add button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User moves to Add User page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User creates \"\u003cEmployee_Name\u003e\" and \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\" and \"\u003cConfirm_Password\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "orangehrm-create-user-feature;orangehrm--create-a-new-employee-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Employee_Name",
        "Username",
        "Password",
        "Confirm_Password"
      ],
      "line": 16,
      "id": "orangehrm-create-user-feature;orangehrm--create-a-new-employee-scenario;;1"
    },
    {
      "cells": [
        "admin",
        "Password",
        "Tom Alter",
        "Tom",
        "test123",
        "test123"
      ],
      "line": 17,
      "id": "orangehrm-create-user-feature;orangehrm--create-a-new-employee-scenario;;2"
    },
    {
      "cells": [
        "admin",
        "Password",
        "John D",
        "John",
        "test456",
        "test456"
      ],
      "line": 18,
      "id": "orangehrm-create-user-feature;orangehrm--create-a-new-employee-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "OrangeHRM  create a new employee scenario",
  "description": "",
  "id": "orangehrm-create-user-feature;orangehrm--create-a-new-employee-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Title of Login page is OrangeHRM",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User enters \"admin\" and \"Password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User is on Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User moves to Admin page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Add button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User moves to Add User page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User creates \"Tom Alter\" and \"Tom\" and \"test123\" and \"test123\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 3703169635,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_OrangeHRM()"
});
formatter.result({
  "duration": 10076212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "Password",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 262445649,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 1502566628,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 43069923,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_admin_page()"
});
formatter.result({
  "duration": 1050811464,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_add_button()"
});
formatter.result({
  "duration": 699250243,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_add_user_page()"
});
formatter.result({
  "duration": 51395891,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom Alter",
      "offset": 14
    },
    {
      "val": "Tom",
      "offset": 30
    },
    {
      "val": "test123",
      "offset": 40
    },
    {
      "val": "test123",
      "offset": 54
    }
  ],
  "location": "LoginStepDefinition.user_creates_EmployeeName_and_Username_and_Password_and_Confirm_Password(String,String,String,String)"
});
formatter.result({
  "duration": 391238034,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_save_button()"
});
formatter.result({
  "duration": 93961296,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 111884280,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "OrangeHRM  create a new employee scenario",
  "description": "",
  "id": "orangehrm-create-user-feature;orangehrm--create-a-new-employee-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Title of Login page is OrangeHRM",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User enters \"admin\" and \"Password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User is on Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User moves to Admin page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Add button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User moves to Add User page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User creates \"John D\" and \"John\" and \"test456\" and \"test456\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 2489010266,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_OrangeHRM()"
});
formatter.result({
  "duration": 8773479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "Password",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 280527390,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 1402024385,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 41791564,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_admin_page()"
});
formatter.result({
  "duration": 977181015,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_add_button()"
});
formatter.result({
  "duration": 497160780,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_add_user_page()"
});
formatter.result({
  "duration": 38891738,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John D",
      "offset": 14
    },
    {
      "val": "John",
      "offset": 27
    },
    {
      "val": "test456",
      "offset": 38
    },
    {
      "val": "test456",
      "offset": 52
    }
  ],
  "location": "LoginStepDefinition.user_creates_EmployeeName_and_Username_and_Password_and_Confirm_Password(String,String,String,String)"
});
formatter.result({
  "duration": 407126380,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_save_button()"
});
formatter.result({
  "duration": 84899588,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 118798452,
  "status": "passed"
});
});