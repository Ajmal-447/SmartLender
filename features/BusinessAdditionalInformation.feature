Feature: Business Loan Analyst

Scenario Outline: Verify personal loan application details
  Given pass the credentials "<Username>" and "<Password>"
  When Verify the values
  Then Pass the personal loan analyst feedback "<feedback>", "<Decision>"

Examples:
    | Username   | Password  | feedback | Decision                      |
    | Manager@bl1 | rules@222 | Test     | Request Additional Information |
