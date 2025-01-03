Feature: Business Loan Application

Scenario Outline: Verify Business loan application detail with Additional Information
   Given give the "<Username>" and "<Password>"
   When I want to verify the values of the cases
   Then I give personal loan analyst feedback comments "<feedback>", "<Decision>"

   Examples:
    | Username   | Password  | feedback | Decision                      |
    | Manager@bl1 | rules@222 | Test     | Approve |