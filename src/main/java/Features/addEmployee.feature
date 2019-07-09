Feature: Add Employee feature
Scenario: OrangeHRM add Employee scenario

Given User is already on Login page
When Title of Login page is OrangeHRM
Then User enters username and password
| admin | Password |
Then User clicks on Login button
Then User is on Home page
Then User moves to add employee page 
Then User enters firstname and lastname and Username and Password and Confirm_Password
| Tom | Potter | tom_p | test@123 | test@123 |
Then User clicks save button
Then close the browser
