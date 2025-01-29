Feature: When the Case Status Update to Approve the User get Notification of the Status Approve

Scenario Outline: Approve Notification Visible to the User
  Given Enter the credentials "<Username>" and "<Password>"
  When Pass the values "<CaseID>" and get Status
  

Examples:

    | Username    | Password   | CaseID   |
    | tester@bl   | rules@123  | BL-11044 |


