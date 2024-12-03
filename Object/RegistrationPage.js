class RegistrationPage {
  constructor(page) {
    this.page = page;
    this.firstname = this.page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div/fieldset/div/div/div/div[1]/div[1]/div/input"
    );
    this.lastname = this.page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div/fieldset/div/div/div/div[1]/div[2]/div/input"
    );
    this.countrycode = this.page.locator(
      '[data-testid="Phone number:phone-input:country-code"]'
    );
    this.phonenumber = this.page.locator('[aria-label="Enter a number"]');
    this.emailid = this.page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div/fieldset/div/div/div/div[1]/div[4]/div/input"
    );
    this.country = this.page.locator('[data-testid="Country :select:control"]');
    this.address = this.page.locator(
      '[data-testid="Address Line 1 :input:control"]'
    );
    this.address1 = this.page.locator(
      '[data-testid="Address Line 2:input:control"]'
    );
    this.city = this.page.locator('[data-testid="City/Town:input:control"]');
    this.state = this.page.getByLabel("State ");
    this.zipcode = this.page.locator('[data-testid="Zip Code:input:control"]');
    this.submitButton = this.page.locator(".sc-bqWxrE.fKpSOq");
  }

  async userdetails(
    firstname,
    lastname,
    countrycode,
    phonenumber,
    emailid,
    country,
    state,
    address,
    address1,
    city,
    zipcode
  ) {
    await this.firstname.fill(firstname);
    await this.lastname.fill(lastname);
    await this.countrycode.selectOption(countrycode);
    await this.phonenumber.fill(phonenumber.toString());
    await this.emailid.fill(emailid.toString());
    await this.country.selectOption(country);
    await this.state.selectOption(state);
    await this.address.fill(address);
    await this.address1.fill(address1);
    await this.city.fill(city);
    await this.zipcode.fill(zipcode.toString());
    await this.submitButton.click();
  }
}

module.exports = { RegistrationPage };
