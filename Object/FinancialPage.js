class Financialpage {
  constructor(page) {
    this.page = page;
    this.AnnualRevenue = this.page.locator(
      '[data-testid="Annual Revenue:currency-input:control"]'
    );
    this.NetProfit = this.page.locator(
      '[data-testid="Net Profit:currency-input:control"]'
    );
    this.TotalAssets = this.page.locator(
      '[data-testid="Total Assets:currency-input:control"]'
    );
    this.Rent = this.page.locator('[data-testid="Rent:number-input:control"]');
    this.PropertyTax = this.page.locator(
      '[data-testid="Property Taxes and Insurance:number-input:control"]'
    );
    this.Expensense = this.page.locator(
      '[data-testid="Other Expenses:number-input:control"]'
    );
    this.ExestingLoan = this.page.locator(
      '[data-testid="Existing Loan Payments (Business Loan) :number-input:control"]'
    );
    this.OutstandingLoan = this.page.locator(
      '[data-testid="Outstanding Loans:select:control"]'
    );
    this.LoanAmount = this.page.locator(
      '[data-testid="Loan Amount:currency-input:control"]'
    );
    this.LenderName = this.page.locator(
      '[data-testid="Lender Name:input:control"]'
    );
    this.TotalLiabilities = this.page.locator(
      '[data-testid="Total Liabilities:currency-input:control"]'
    );
    this.BankName = this.page.locator(
      '[data-testid="Bank Name:input:control"]'
    );
    this.AccountNumber = this.page.locator(
      '[data-testid="Account Number:number-input:control"]'
    );
    this.country2 = this.page.locator(
      '[data-testid="Country :select:control"]'
    );
    this.state2 = this.page.locator('[data-testid="State :select:control"]');
    this.AddressLine1 = this.page.locator(
      '[data-testid="Address Line 1 :input:control"]'
    );
    this.AddressLine2 = this.page.locator(
      '[data-testid="Address Line 2:input:control"]'
    );
    this.City2 = this.page.locator('[data-testid="City/Town:input:control"]');
    this.zipcode2 = this.page.locator('[data-testid="Zip Code:input:control"]');
    this.fileinput = this.page.locator('input[type="file"]').nth(0);
    this.fileinput1 = this.page.locator('input[type="file"]').nth(1);
    this.fileinput2 = this.page.locator('input[type="file"]').nth(2);
    this.fileinput3 = this.page.locator('input[type="file"]').nth(3);
    this.fileinput4 = this.page.locator('input[type="file"]').nth(4);
    this.fileinput5 = this.page.locator('input[type="file"]').nth(5);
    this.fileinput6 = this.page.locator('input[type="file"]').nth(6);
    this.submitButton = this.page.getByRole("button", { name: "Next" });
  }

  async Financialdetails(
    AnnualRevenue,
    NetProfit,
    TotalAssets,
    TotalLiabilities,
    Rent,
    PropertyTax,
    Expensense,
    ExestingLoan,
    OutstandingLoan,
    LoanAmount,
    LenderName,
    BankName,
    AccountNumber
  ) {
    await this.AnnualRevenue.fill(AnnualRevenue.toString());
    await this.NetProfit.fill(NetProfit.toString());
    await this.TotalAssets.fill(TotalAssets.toString());
    await this.TotalLiabilities.fill(TotalLiabilities.toString());
    await this.Rent.fill(Rent.toString());
    await this.PropertyTax.fill(PropertyTax.toString());
    await this.Expensense.fill(Expensense.toString());
    await this.ExestingLoan.fill(ExestingLoan.toString());
    await this.OutstandingLoan.selectOption(OutstandingLoan.toString());
    await this.LoanAmount.fill(LoanAmount.toString());
    await this.LenderName.fill(LenderName.toString());
    await this.BankName.fill(BankName);
    await this.AccountNumber.fill(AccountNumber.toString());
    // await this.country2.selectOption(country2);
    // await this.state2.selectOption(state2);
    // await this.AddressLine1.fill(AddressLine1);
    // await this.AddressLine2.fill(AddressLine2);
    // await this.City2.fill(City2);
    // await this.zipcode2.fill(zipcode2.toString());
    await this.fileinput.setInputFiles(
      "C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/test image2.png"
    );
    await this.page.waitForTimeout(5000);
    await this.fileinput1.setInputFiles(
      "C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/test image2.png"
    );
    await this.page.waitForTimeout(5000);
    await this.fileinput2.setInputFiles(
      "C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/test image2.png"
    );
    await this.page.waitForTimeout(5000);
    await this.fileinput3.setInputFiles(
      "C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/test image2.png"
    );
    await this.page.waitForTimeout(5000);
    await this.fileinput4.setInputFiles(
      "C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/test image2.png"
    );
    await this.page.waitForTimeout(5000);
    await this.fileinput5.setInputFiles(
      "C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/test image2.png"
    );
    await this.page.waitForTimeout(5000);
    await this.fileinput6.setInputFiles(
      "C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/test image2.png"
    );
    await this.page.waitForTimeout(5000);
    await this.submitButton.click();
  }
}

module.exports = { Financialpage };
