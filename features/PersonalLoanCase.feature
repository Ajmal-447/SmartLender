Feature: Personal Loan Application

  Scenario Outline: Submit personal loan application with valid details
    Given I log in with "<Username>" and "<Password>"
    When I enter personal loan details "<amount>", "<percentage>", "<option>"
    And I fill personal details "<firstname>", "<lastname>", "<Gender>", "<Date>", "<Month>", "<Year>", "<email>", "<countrycode>", "<phonenumber>", "<country>", "<state>", "<address>", "<address1>", "<city>", "<zipcode>", "<SSNnumber>"
    And I provide income details "<EmploymentStatus>", "<LengthofEmployment>", "<Designation>", "<AnnualIncome>", "<EmployerName>", "<countryCode1>", "<phonenumber1>", "<country1>", "<state1>", "<address2>", "<address3>", "<city1>", "<zipcode1>"
    And I enter financial details "<Mortgagepayments>", "<PropertyTaxes>", "<DependentsExpenses>", "<ExistingLoanPayments>", "<CreditCardPayments>", "<OutstandingLoans>", "<LoanAmount>", "<LenderName>", "<BankName>", "<BankAccountNumber>"
    Then I submit the supporting documents

    Examples:
      | Username | Password | amount | percentage | option | firstname | lastname | Gender | Date | Month | Year | email | countrycode | phonenumber | country | state | address | address1 | city | zipcode | SSNnumber | EmploymentStatus | LengthofEmployment | Designation | AnnualIncome | EmployerName | countryCode1 | phonenumber1 | country1 | state1 | address2 | address3 | city1 | zipcode1 | Mortgagepayments | PropertyTaxes | DependentsExpenses | ExistingLoanPayments | CreditCardPayments | OutstandingLoans | LoanAmount | LenderName | BankName | BankAccountNumber |
      | Tester@pl | Basha@2002 | 50000  | 50          | Major Purchase  | Ajmal      | Basha      | Male   | 15   | 06    | 1990 | ajmal@example.com | +91         | 1234567890   | India    | Tamil Nadu    | Addr1   | Addr2   | Namakkal | 90210   | 17401 |Employed         | 5                  | Engineer    | 75000        | ExampleCorp  | +91           | 9876543210   | India      | Tamil Nadu      | Addr3    | Addr4    | City2 | 90211   | 2000              | 500           | 1000               | 500                 | 300               |Yes           | 25000      | ExampleBank | ABC Bank | 1234567   |
