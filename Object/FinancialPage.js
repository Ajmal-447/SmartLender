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
      '[data-testid="Address Line 1:input:control"]'
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
    this.submitButton = this.page.locator(".sc-bqWxrE.fKpSOq");
  }

  async Financialdetails(
    AnnualRevenue,
    NetProfit,
    TotalAssets,
    TotalLiabilities,
    BankName,
    AccountNumber,
    country2,
    state2,
    AddressLine1,
    AddressLine2,
    City2,
    zipcode2
  ) {
    await this.AnnualRevenue.fill(AnnualRevenue.toString());
    await this.NetProfit.fill(NetProfit.toString());
    await this.TotalAssets.fill(TotalAssets.toString());
    await this.TotalLiabilities.fill(TotalLiabilities.toString());
    await this.BankName.fill(BankName);
    await this.AccountNumber.fill(AccountNumber.toString());
    await this.country2.selectOption(country2);
    await this.state2.selectOption(state2);
    await this.AddressLine1.fill(AddressLine1);
    await this.AddressLine2.fill(AddressLine2);
    await this.City2.fill(City2);
    await this.zipcode2.fill(zipcode2.toString());
    await this.fileinput.setInputFiles(
      "C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/test image2.png"
    );
    await this.fileinput1.setInputFiles([
      "C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/test image2.png",
      "C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/test image1.png",
    ]);
    await this.fileinput2.setInputFiles([
      "C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/test image2.png",
      "C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/test image1.png",
    ]);
    await this.fileinput3.setInputFiles(
      "C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/test image2.png"
    );
    await this.fileinput4.setInputFiles(
      "C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/test image2.png"
    );
    await this.fileinput5.setInputFiles([
      "C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/test image2.png",
      "C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/test image1.png",
    ]);
    await this.fileinput6.setInputFiles(
      "C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/test image2.png"
    );
    await this.submitButton.click();
  }
}

module.exports = { Financialpage };
