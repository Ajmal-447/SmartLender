Feature: Business Loan Application Refer Back the Case to User

Scenario Outline: Analyst route the Case to the User,Then The User Compltes the Details and Submit the Case.
   Given Login to the User portal with valid crerdentials "<Username>" and "<Password>"
   When Pick the Case from the Case List and Validate the Comments "<CaseID>"
   Then Sumit the Case

   Examples:
    | Username    | Password   | CaseID |            
    | tester@bl   | rules@123  | 11044  |