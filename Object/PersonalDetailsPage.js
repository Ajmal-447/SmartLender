class PersonalDetailsPage {
  constructor(page) {
    this.page = page;
    this.firstName = this.page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div[1]/fieldset/div/div/div/div[1]/div[1]/div/input"
    );
    this.lastName = this.page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div[1]/fieldset/div/div/div/div[1]/div[2]/div/input"
    );
    this.Gender = this.page.locator('[data-testid="Gender:select:control"]');
    this.Date = this.page.locator('[data-testid=":date-input:control-day"]');
    this.Month = this.page.locator('[data-testid=":date-input:control-month"]');
    this.Year = this.page.locator('[data-testid=":date-input:control-year"]');
    this.email = this.page.locator(
      '[data-testid="Email Address:input:control"]'
    );
    this.countrycode = this.page.locator(
      '[data-testid="Phone number:phone-input:country-code"]'
    );
    this.phonenumber = this.page.locator('[aria-label="Enter a number"]');
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
    this.SSNnumber = this.page.locator(
      '[data-testid="SSN:number-input:control"]'
    );
    this.SSNFile = this.page.locator('input[type="file"]').nth(0);
    this.Passport = this.page.locator('input[type="file"]').nth(1);
    this.submitButton = this.page.locator(".sc-bqWxrE.fKpSOq");
  }

  async PersonalInfo(
    firstname,
    lastname,
    Gender,
    Date,
    Month,
    Year,
    email,
    countrycode,
    phonenumber,
    country,
    state,
    address,
    address1,
    city,
    zipcode,
    SSNnumber
  ) {
    await this.firstName.fill(String(firstname));
    await this.lastName.fill(String(lastname));
    await this.Gender.selectOption(String(Gender));
    await this.Date.fill(String(Date));
    await this.Month.fill(String(Month));
    await this.Year.fill(String(Year));
    await this.email.fill(String(email));
    await this.countrycode.selectOption(String(countrycode));
    await this.phonenumber.fill(String(phonenumber));
    await this.country.selectOption(String(country));
    await this.state.selectOption(String(state));
    await this.address.fill(String(address));
    await this.address1.fill(String(address1));
    await this.city.fill(String(city));
    await this.zipcode.fill(String(zipcode));
    await this.SSNnumber.fill(String(SSNnumber));

    await this.SSNFile.setInputFiles(
      "C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/test image2.png"
    );
    await this.page.waitForTimeout(3000);
    await this.Passport.setInputFiles(
      "C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/test image2.png"
    );

    await this.submitButton.click();
  }
}

module.exports = { PersonalDetailsPage };
