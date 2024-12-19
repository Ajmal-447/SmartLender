Feature: Personal Loan Analyst

Scenario Outline: Verify personal loan application details
  Given I  given the username and password "<Username>" and "<Password>"
  When I verify the values
  Then I set the loan analyst feedback "<feedback>", "<Decision>"

Examples:
    | Username   | Password  | feedback | Decision                      |
    | Manager@bl1 | rules@111 | Test     | Advance to Underwriting |