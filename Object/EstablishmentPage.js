class EstablishmentPage {
  constructor(page) {
    this.page = page;
    this.BusinessName = this.page.locator(
      '[data-testid="Business Name:input:control"]'
    );
    this.country1 = this.page.locator(
      '[data-testid="Country :select:control"]'
    );
    this.state1 = this.page.getByLabel("State ");
    this.address2 = this.page.locator(
      '[data-testid="Address Line 1:input:control"]'
    );
    this.address3 = this.page.locator(
      '[data-testid="Address Line 2:input:control"]'
    );
    this.city1 = this.page.locator('[data-testid="City/Town:input:control"]');
    this.zipcoode1 = this.page.locator(
      '[data-testid="Zip Code:input:control"]'
    );
    this.countrycode1 = this.page.locator('[aria-label="Select country code"]');
    this.contactnumber1 = this.page.locator('[aria-label="Enter a number"]');
    this.Businessemail = this.page.locator(
      '[data-testid="Business Email:input:control"]'
    );
    this.Date = this.page.locator('[data-testid=":date-input:control-day"]');
    this.Month = this.page.locator('[data-testid=":date-input:control-month"]');
    this.Year = this.page.locator('[data-testid=":date-input:control-year"]');
    this.TaxIDNumber = this.page.locator(
      '[data-testid="Tax ID Number:number-input:control"]'
    );
    this.TypeofBusiness = this.page.getByLabel("Type of Business Entity");
    this.button1 = this.page.locator('[aria-label="Add a new record"]');
    this.Name = this.page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div[2]/div/div/div/article/div/div/div[3]/div/div[3]/div/div/div[2]/span/span/span/div/input"
    );
    this.Title = this.page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div[2]/div/div/div/article/div/div/div[3]/div/div[3]/div/div/div[3]/span/span/span/div/input"
    );
    this.Percentage = this.page.locator(
      '[data-testid="Ownership Percentage:number-input:control"]'
    );
    this.SSN = this.page.locator('[data-testid="SSN:number-input:control"]');
    this.countrycode2 = this.page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div[2]/div/div/div/article/div/div/div[3]/div/div[3]/div/div/div[6]/span/span/span/fieldset/div[1]/select"
    );
    this.contactnumber2 = this.page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div[2]/div/div/div/article/div/div/div[3]/div/div[3]/div/div/div[6]/span/span/span/fieldset/div[1]/input"
    );
    this.Businessemail1 = this.page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div[2]/div/div/div/article/div/div/div[3]/div/div[3]/div/div/div[7]/span/span/span/div/input"
    );
    this.submitButton = this.page.locator(".sc-bqWxrE.fKpSOq");
  }

  async establishmentdetails(
    BusinessName,
    country1,
    state1,
    address2,
    address3,
    city1,
    zipcoode1,
    countrycode1,
    contactnumber1,
    Businessemail,
    Date,
    Month,
    Year,
    TaxIDNumber,
    TypeofBusiness,
    Name,
    Title,
    Percentage,
    SSN,
    countrycode2,
    contactnumber2,
    Businessemail1
  ) {
    await this.BusinessName.fill(BusinessName);
    await this.country1.selectOption(country1);
    await this.state1.selectOption(state1);
    await this.address2.fill(address2);
    await this.address3.fill(address3);
    await this.city1.fill(city1);
    await this.zipcoode1.fill(zipcoode1.toString());
    await this.countrycode1.selectOption(countrycode1);
    await this.contactnumber1.fill(contactnumber1.toString());
    await this.Businessemail.fill(Businessemail);
    await this.Date.fill(Date.toString());
    await this.Month.fill(Month.toString());
    await this.Year.fill(Year.toString());
    await this.TaxIDNumber.fill(TaxIDNumber.toString());
    await this.TypeofBusiness.selectOption(TypeofBusiness);
    await this.button1.click();
    await this.Name.fill(Name);
    await this.Title.fill(Title);
    await this.Percentage.fill(Percentage.toString());
    await this.SSN.fill(SSN.toString());
    await this.countrycode2.selectOption(countrycode2);
    await this.contactnumber2.fill(contactnumber2.toString());
    await this.Businessemail1.fill(Businessemail1);
    await this.submitButton.click();
  }
}

module.exports = { EstablishmentPage };
