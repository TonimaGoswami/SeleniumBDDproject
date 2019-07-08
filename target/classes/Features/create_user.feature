Feature: OrangeHRM create user feature
Scenario Outline: OrangeHRM  create a new employee scenario
Given User is already on Login page
When Title of Login page is OrangeHRM
Then User enters "<username>" and "<password>" 
Then User clicks on Login button
Then User is on Home page
Then User moves to Admin page
Then User clicks on Add button
Then User moves to Add User page
Then User creates "<Employee_Name>" and "<Username>" and "<Password>" and "<Confirm_Password>"
Then User clicks Save button
Then close the browser

Examples:
	| username | password | Employee_Name | Username | Password | Confirm_Password |
	| admin    | Password | Tom Alter     | Tom      | test123  | test123         |
	| admin    | Password | John D        | John     | test456  | test456         |
	
	