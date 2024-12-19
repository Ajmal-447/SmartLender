Feature: Personal Loan Application

Scenario Outline: Verify personal loan application detail with Additional Information
   Given I am Logging With the "<Username>" and "<Password>"
   When I need to verify the values
   Then I fill personal loan analyst feedback "<feedback>", "<Decision>"
   Examples:
    | Username   | Password  | feedback | Decision                      |
    | Manager@PL | rules@PL1 | Test     | Advance to Underwriting |

