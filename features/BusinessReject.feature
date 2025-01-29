Feature: Business Loan Application

Scenario Outline: Verify Business loan application detail with Additional Information
   Given I need to pass "<Username>" and "<Password>"
   When I need to check their values "<CaseID>"
   Then I need to give the personal loan analyst feedback "<feedback>", "<Decision>", "<Reason>"
   Examples:
    | Username    | Password  |CaseID| feedback | Decision                      |Reason|
    | Manager@bl1 | rules@555 |11038 | Test     | Reject                        |  Nil |