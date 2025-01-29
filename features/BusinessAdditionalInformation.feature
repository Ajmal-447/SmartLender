Feature: Business Loan Analyst

Scenario Outline: Verify Business loan application details
  Given pass the credentials "<Username>" and "<Password>"
  When Verify the values "<CaseID>"
  Then Pass the personal loan analyst feedback "<feedback>", "<Decision>"

Examples:

    | Username    | Password   | CaseID|feedback | Decision                       |
    | Manager@bl1 | rules@555  | 11044 |Test     | Request Additional Information |


