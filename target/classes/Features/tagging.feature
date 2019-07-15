@FunctionalTest
Feature: OrangeHRM application testing

@SmokeTest @Regressiontest
Scenario: Login with valid username and valid password
Given This is valid login test case

@SmokeTest @Regressiontest
Scenario: Login with invalid username and valid password
Given This is invalid login test case

@SmokeTest
Scenario: Create an employee
Given This is employee test case

@SmokeTest
Scenario: Create an admin
Given This is admin test case

@Regressiontest
Scenario: Assign leave for an employee
Given This is leave test case

@Regressiontest
Scenario: Create timesheet for an employee
Given This is timesheet test case

@Regressiontest
Scenario: Search an employee
Given This is employee test case

@Regressiontest
Scenario: Create attendance Total Summary Report for an employee
Given This is attendance test case

@Regressiontest
Scenario: Add job title
Given This is job test case

@SmokeTest @Regressiontest
Scenario: Search for candidate 
Given This is candidate test case

@SmokeTest @Regressiontest
Scenario: Search for vacancy 
Given This is vacancy test case

@SmokeTest @Regressiontest
Scenario: Verify Orange HRM logo 
Given This is logo test case

@Regressiontest
Scenario: Verify Change Password link 
Given This is password test case

@Regressiontest
Scenario: Verify all the links on homepage 
Given This is homepage test case

@Regressiontest
Scenario: search for Performance review of an employee 
Given This is Performance review test case

@SmokeTest @Regressiontest
Scenario: Application logout
Given This is logout test case