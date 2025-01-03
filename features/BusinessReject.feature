Feature: Business Loan Application

Scenario Outline: Verify personal loan application detail with Additional Information
   Given I need to pass "<Username>" and "<Password>"
   When I need to check their values
   Then I need to give the personal loan analyst feedback "<feedback>", "<Decision>", "<Reason>"
   Examples:
    | Username   | Password  | feedback | Decision                      |Reason|
    | Manager@bl1 | rules@222 | Test     | Reject |  Nil |