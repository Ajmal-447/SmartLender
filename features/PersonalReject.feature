Feature: Personal Loan Application

Scenario Outline: Verify personal loan application detail with Additional Information
   Given I need to sent "<Username>" and "<Password>"
   When I need to check the values
   Then I need to give personal loan analyst feedback "<feedback>", "<Decision>", "<Reason>"
   Examples:
    | Username   | Password  | feedback | Decision                      |Reason|
    | Manager@PL | rules@PL1 | Test     | Reject |  Nil |