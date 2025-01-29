Feature: Personal Loan Application

Scenario Outline: Verify personal loan application detail with Additional Information
   Given I am sent "<Username>" and "<Password>"
   When I want to verify the values "<CaseID>"
   Then I give personal loan analyst feedback "<feedback>", "<Decision>"
   Examples:
    | Username   | Password  |CaseID|feedback | Decision     |
    | planalyst  | rules@321 |10044 |Test     | Approve      |