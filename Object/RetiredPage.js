class RetiredPage {
  constructor(page) {
    this.page = page;
    this.EmploymentStatus = this.page.locator(
      '[data-testid="Employment Status:select:control"]'
    );
    this.LastEmployerName = this.page.locator(
      '[data-testid="Last Employer Name :input:control"]'
    );
    this.JobTitle = this.page.locator(
      '[data-testid="Job Title:input:control"]'
    );
    this.Durationofemployment = this.page.locator(
      '[data-testid="Duration of employment(in Months):input:control"]'
    );
    this.RetirementIncome = this.page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div[5]/fieldset/div/div/div/div[3]/div/fieldset/div/div/div/fieldset[1]/div[1]/div/label/div"
    );
    this.submitButton = this.page.locator(".sc-bqWxrE.fKpSOq");
  }

  async RetiredInfo(
    EmploymentStatus,
    LastEmployerName,
    JobTitle,
    Durationofemployment
  ) {
    await this.EmploymentStatus.selectOption(String(EmploymentStatus));
    await this.LastEmployerName.fill(String(LastEmployerName));
    await this.JobTitle.fill(String(JobTitle));
    await this.Durationofemployment.fill(String(Durationofemployment));
    await this.RetirementIncome.click();
    await this.submitButton.click();
  }
}

module.exports = { RetiredPage };
