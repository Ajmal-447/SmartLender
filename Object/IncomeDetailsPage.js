class IncomeDetailsPage {
  constructor(page) {
    this.page = page;
    this.EmploymentStatus = this.page.locator(
      '[data-testid="Employment Status:select:control"]'
    );
    this.LengthofEmployment = this.page.locator(
      '[data-testid="Length of Employment:number-input:control"]'
    );
    this.Designation = this.page.locator(
      '[data-testid="Designation:input:control"]'
    );
    this.AnnualIncome = this.page.locator(
      '[data-testid="Annual Income:currency-input:control"]'
    );
    this.EmployerName = this.page.locator(
      '[data-testid="Employer Name:input:control"]'
    );
    this.countryCode1 = this.page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div[2]/div/div[1]/div[2]/fieldset/div/div/div/div[1]/div[2]/fieldset/div[1]/select"
    );
    this.Contactnumber1 = this.page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div[2]/div/div[1]/div[2]/fieldset/div/div/div/div[1]/div[2]/fieldset/div[1]/input"
    );
    this.country = this.page.locator('[data-testid="Country:select:control"]');

    this.state = this.page.getByLabel("State ");
    this.address = this.page.locator(
      '[data-testid="AddressLine1:input:control"]'
    );
    this.address1 = this.page.locator(
      '[data-testid="AddressLine2:input:control"]'
    );
    this.city = this.page.locator('[data-testid="City/Town:input:control"]');
    this.zipcode = this.page.locator('[data-testid="Zip Code:input:control"]');
    this.PaySlip = this.page.locator('input[type="file"]').nth(0);
    this.EmploymentFile = this.page.locator('input[type="file"]').nth(1);
    this.submitButton = this.page.locator(".sc-bqWxrE.fKpSOq");
  }

  async Incomedetails(
    EmploymentStatus,
    LengthofEmployment,
    Designation,
    AnnualIncome,
    EmployerName,
    countryCode1,
    phonenumber1,
    country1,
    state1,
    address2,
    address3,
    city1,
    zipcode1
  ) {
    await this.EmploymentStatus.selectOption(EmploymentStatus);
    await this.LengthofEmployment.fill(String(LengthofEmployment));
    await this.Designation.fill(String(Designation));
    await this.AnnualIncome.fill(String(AnnualIncome));
    await this.EmployerName.fill(String(EmployerName));
    await this.countryCode1.selectOption(String(countryCode1));
    await this.Contactnumber1.fill(String(phonenumber1));
    await this.country.selectOption(String(country1));
    await this.state.selectOption(String(state1));
    await this.address.fill(String(address2));
    await this.address1.fill(String(address3));
    await this.city.fill(String(city1));
    await this.zipcode.fill(String(zipcode1));
    await this.PaySlip.setInputFiles(
      "C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/test image2.png"
    );
    await this.EmploymentFile.setInputFiles(
      "C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/test image2.png"
    );
    await this.submitButton.click();
  }
}

module.exports = { IncomeDetailsPage };
