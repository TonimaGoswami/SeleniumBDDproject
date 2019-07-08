Feature: OrangeHRM BDD feature
#Scenario: OrangeHRM login test scenario

## data driven testing without Example keyword
#Given User is already on Login page
#When Title of Login page is OrangeHRM
## enter username and password in feature file 
#Then User enters "admin" and "Password"  
#Then User clicks on Login button
#Then User is on Home page

#data driven testing with Example keyword

Scenario Outline: OrangeHRM login test scenario
Given User is already on Login page
When Title of Login page is OrangeHRM
Then User enters "<username>" and "<password>" 
Then User clicks on Login button
Then User is on Home page
Then close the browser

Examples:
	| username | password |
	| admin    | Password |
	| naveenk  | test@123 |