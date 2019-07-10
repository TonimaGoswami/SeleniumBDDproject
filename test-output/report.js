$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/tanu/eclipse-workspace/FreeCRMBDDFramework/src/main/java/Features/addEmployeeMap.feature");
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
        "username",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "admin",
        "Password"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User is on Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User moves to add employee page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters employee details",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "Employee_Id",
        "Username",
        "Password",
        "Confirm_Password"
      ],
      "line": 14
    },
    {
      "cells": [
        "Tom",
        "Potter",
        "2040",
        "tom_p",
        "test@123",
        "test@123"
      ],
      "line": 15
    },
    {
      "cells": [
        "Harry",
        "D",
        "2041",
        "harry_d",
        "test@456",
        "test@456"
      ],
      "line": 16
    },
    {
      "cells": [
        "John",
        "B",
        "2042",
        "john_b",
        "test@789",
        "test@789"
      ],
      "line": 17
    },
    {
      "cells": [
        "Vivan",
        "G",
        "2043",
        "vivan_g",
        "test@012",
        "test@012"
      ],
      "line": 18
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AddemployeeWithMapStepdefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 4047817169,
  "status": "passed"
});
formatter.match({
  "location": "AddemployeeWithMapStepdefinition.title_of_login_page_is_OrangeHRM()"
});
formatter.result({
  "duration": 9515318,
  "status": "passed"
});
formatter.match({
  "location": "AddemployeeWithMapStepdefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 312618707,
  "status": "passed"
});
formatter.match({
  "location": "AddemployeeWithMapStepdefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 1481604845,
  "status": "passed"
});
formatter.match({
  "location": "AddemployeeWithMapStepdefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 58288552,
  "status": "passed"
});
formatter.match({
  "location": "AddemployeeWithMapStepdefinition.user_moves_to_add_employee_page()"
});
formatter.result({
  "duration": 1107020235,
  "status": "passed"
});
formatter.match({
  "location": "AddemployeeWithMapStepdefinition.user_enters_employee_details(DataTable)"
});
formatter.result({
  "duration": 2648130977,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d75.0.3770.100)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dMac OS X 10.14.4 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Tonimas-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:10c1:3c6e:ef6f:b409%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.4\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: /var/folders/kq/djv8wj7n0cz...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53131}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 75.0.3770.100, webStorageEnabled: true}\nSession ID: 01ecc507c0d2af37eab0b4adbcd90ad8\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\n\tat stepDefinition.AddemployeeWithMapStepdefinition.user_enters_employee_details(AddemployeeWithMapStepdefinition.java:73)\n\tat ✽.Then User enters employee details(/Users/tanu/eclipse-workspace/FreeCRMBDDFramework/src/main/java/Features/addEmployeeMap.feature:13)\n",
  "status": "failed"
});
formatter.match({
  "location": "AddemployeeWithMapStepdefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});