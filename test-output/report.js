$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/tanu/eclipse-workspace/FreeCRMBDDFramework/src/main/java/Features/addEmployee.feature");
formatter.feature({
  "line": 1,
  "name": "Add Employee feature",
  "description": "",
  "id": "add-employee-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "OrangeHRM add Employee scenario",
  "description": "",
  "id": "add-employee-feature;orangehrm-add-employee-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Title of Login page is OrangeHRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters username and password",
  "rows": [
    {
      "cells": [
        "admin",
        "Password"
      ],
      "line": 7
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User is on Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User moves to add employee page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enters firstname and lastname and Username and Password and Confirm_Password",
  "rows": [
    {
      "cells": [
        "Tom",
        "Potter",
        "tom_p",
        "test@123",
        "test@123"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks save button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AddEmployeeStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 3559461278,
  "status": "passed"
});
formatter.match({
  "location": "AddEmployeeStepDefinition.title_of_login_page_is_OrangeHRM()"
});
formatter.result({
  "duration": 11511838,
  "status": "passed"
});
formatter.match({
  "location": "AddEmployeeStepDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 256291606,
  "status": "passed"
});
formatter.match({
  "location": "AddEmployeeStepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 1552473459,
  "status": "passed"
});
formatter.match({
  "location": "AddEmployeeStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 43802659,
  "status": "passed"
});
formatter.match({
  "location": "AddEmployeeStepDefinition.user_moves_to_add_employee_page()"
});
formatter.result({
  "duration": 912849716,
  "status": "passed"
});
formatter.match({
  "location": "AddEmployeeStepDefinition.user_enters_firstname_and_lastname_and_Username_and_Password_and_Confirm_Password(DataTable)"
});
formatter.result({
  "duration": 555853070,
  "status": "passed"
});
formatter.match({
  "location": "AddEmployeeStepDefinition.user_clicks_save_button()"
});
formatter.result({
  "duration": 817357163,
  "status": "passed"
});
formatter.match({
  "location": "AddEmployeeStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 126685299,
  "status": "passed"
});
});