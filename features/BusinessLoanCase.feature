Feature: Smart Lender Application

  Scenario Outline: Execute Test Cases for Each Data Row
    Given I log in with the "<Username>" and "<Password>"
    When I enter loan application details "<amount>", "<percentage>", "<option>"
    And I fill user registration details "<firstname>", "<lastname>", "<countrycode>", "<phonenumber>", "<emailid>", "<country>", "<state>", "<address>", "<address1>", "<city>", "<zipcode>"
    And I fill establishment details "<BusinessName>", "<country1>", "<state1>", "<address2>", "<address3>", "<city1>", "<zipcoode1>", "<countrycode1>", "<contactnumber1>", "<Businessemail>", "<Date>", "<Month>", "<Year>", "<TaxIDNumber>", "<TypeofBusiness>", "<Name>", "<Title>", "<Percentage>", "<SSN>", "<countrycode2>", "<contactnumber2>", "<Businessemail1>"
    And I fill financial details "<AnnualRevenue>", "<NetProfit>", "<TotalAssets>", "<TotalLiabilities>", "<BankName>", "<AccountNumber>", "<country2>", "<state2>", "<AddressLine1>", "<AddressLine2>", "<City2>", "<zipcode2>"
    Then I verify acknowledgement page

    Examples:
      | Username  | Password   | amount | percentage | option           | firstname | lastname | countrycode | phonenumber | emailid        | country | state     | address       | address1 | city | zipcode | BusinessName | country1 | state1   | address2     | address3 | city1 | zipcoode1 | countrycode1 | contactnumber1 | Businessemail  | Date | Month | Year | TaxIDNumber | TypeofBusiness | Name  | Title | Percentage | SSN        | countrycode2 | contactnumber2 | Businessemail1  | AnnualRevenue | NetProfit | TotalAssets | TotalLiabilities | BankName  | AccountNumber | country2 | state2   | AddressLine1   | AddressLine2   | City2 | zipcode2 |
      | tester@bl  | rules@123   | 10000   | 50          | Working Capital  | John      | Doe      | +91          | 1234567890  | test@test.com  | India    | Tamil Nadu        | 123MainSt   | Apt1    | NYC  | 12345   | BizCorp     | India      | Tamil Nadu       | 456 Elm St   | Suite 2  | NYC   | 67890      | +91           | 0987654321     | biz@test.com   | 1    | 10   | 2000 | 123456789   | Partnership  | Jane  | CEO   | 50         | 987654311  | +91           | 1122334455     | biz1@test.com   | 1000000       | 200000    | 500000      | 300000           | Chase     | 1234   | India      | Tamil Nadu       | 789 Pine St    | Suite 5       | NYC   | 54321    |
