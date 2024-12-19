Feature: Personal Loan Application

Scenario Outline: Verify personal loan application detail with Additional Information
   Given I am sent "<Username>" and "<Password>"
   When I want to verify the values
   Then I give personal loan analyst feedback "<feedback>", "<Decision>"
   Examples:
    | Username   | Password  | feedback | Decision                      |
    | Manager@PL | rules@PL1 | Test     | Approve |