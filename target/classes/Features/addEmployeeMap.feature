Feature: Add Employee feature
Scenario: OrangeHRM add Employee scenario

Given User is already on Login page
When Title of Login page is OrangeHRM
Then User enters username and password
| username | password |
| admin | Password |

Then User clicks on Login button
Then User is on Home page
Then User moves to add employee page 
Then User enters employee details 
|firstname | lastname | Employee_Id | Username | Password | Confirm_Password |
| Tom      | Potter   | 2040        | tom_p    | test@123 | test@123 |
| Harry    | D        | 2041        | harry_d  | test@456 | test@456 |
| John     | B        | 2042        | john_b   | test@789 | test@789 |
| Vivan    | G        | 2043        | vivan_g  | test@012 | test@012 |


Then close the browser
