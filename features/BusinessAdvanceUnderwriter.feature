Feature: Personal Loan Analyst

  Scenario Outline: Verify Business loan application details
    Given I want to sent the username and password "<Username>" and "<Password>"
    When verify the values "<CaseID>"
    Then set the loan analyst feedback "<feedback>", "<Decision>"

  Examples:
    | Username    | Password  | CaseID  | feedback | Decision                |
    | Manager@bl1 | rules@555 | 11044   | Test     | Advance to Underwriting |
