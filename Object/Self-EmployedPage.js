class SelfEmployedPage {
  constructor(page) {
    this.page = page;
    this.EmploymentStatus = this.page.locator(
      '[data-testid="Employment Status:select:control"]'
    );
    this.Sector = this.page.locator('[data-testid="Sector:input:control"]');
    this.BusinessName = this.page.locator(
      '[data-testid="Business Name:input:control"]'
    );
    this.StructureoftheBusiness = this.page.locator(
      '[data-testid="Structure of the Business :select:control"]'
    );
    this.Date1 = this.page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div[3]/fieldset/div/div/div/div[1]/div[4]/fieldset/div[1]/div/input[1]"
    );
    this.Month1 = this.page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div[3]/fieldset/div/div/div/div[1]/div[4]/fieldset/div[1]/div/input[2]"
    );
    this.Year1 = this.page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div[3]/fieldset/div/div/div/div[1]/div[4]/fieldset/div[1]/div/input[3]"
    );
    this.AnnualRevenue = this.page.locator(
      '[data-testid="Annual Revenue:currency-input:control"]'
    );
    this.submitButton = this.page.locator(".sc-bqWxrE.fKpSOq");
  }

  async SelfEmployed(
    EmploymentStatus,
    Sector,
    BusinessName,
    StructureoftheBusiness,
    Date1,
    Month1,
    Year1,
    AnnualRevenue
  ) {
    await this.EmploymentStatus.selectOption(String(EmploymentStatus));
    await this.Sector.fill(String(Sector));
    await this.BusinessName.fill(String(BusinessName));
    await this.StructureoftheBusiness.selectOption(String(StructureoftheBusiness));
    await this.Date1.fill(String(Date1));
    await this.Month1.fill(String(Month1));
    await this.Year1.fill(String(Year1));
    await this.AnnualRevenue.fill(String(AnnualRevenue));
    await this.submitButton.click();
  }
}
module.exports = { SelfEmployedPage };
