Feature: Personal Loan Analyst

Scenario Outline: Verify personal loan application details
  Given I  pass the credentials "<Username>" and "<Password>"
  When I cross check  the values
  Then I Pass personal loan analyst feedback "<feedback>", "<Decision>"

Examples:
    | Username   | Password  | feedback | Decision                      |
    | Manager@bl1 | rules@111 | Test     | Request Additional Information |
