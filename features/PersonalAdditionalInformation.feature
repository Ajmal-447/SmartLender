Feature: Personal Loan Analyst

Scenario Outline: Verify personal loan application details
  Given I give the values with "<Username>" and "<Password>"
  When I Validate the values
  Then I enter personal loan analyst feedback "<feedback>", "<Decision>", "<info>"

Examples:
    | Username   | Password  | feedback | Decision                      |info|
    | Manager@PL | rules@PL1 | Test     | Request Additional Information |aadhar|
