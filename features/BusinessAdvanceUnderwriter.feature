Feature: Personal Loan Analyst

  Scenario Outline: Verify personal loan application details
    Given I want to sent the username and password "<Username>" and "<Password>"
    When verify the values
    Then set the loan analyst feedback "<feedback>", "<Decision>"

  Examples:
    | Username    | Password  | feedback | Decision                |
    | Manager@bl1 | rules@222 | Test     | Advance to Underwriting |
