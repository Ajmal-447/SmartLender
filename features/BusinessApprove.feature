Feature: Business Loan Application

Scenario Outline: Verify Business loan application detail with Additional Information
   Given give the "<Username>" and "<Password>"
   When I want to verify the values of the cases "<CaseID>"
   Then I give personal loan analyst feedback comments "<feedback>", "<Decision>"

   Examples:
    | Username    | Password   | CaseID |feedback | Decision  |
    | Manager@bl1 | rules@555  | 11057  |Test     | Approve   |