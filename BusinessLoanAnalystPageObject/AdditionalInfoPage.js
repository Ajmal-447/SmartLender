class BusinessAdditionalinformation {
  constructor(page) {
    this.page = page;
    this.getnextwork = page.getByRole("button", { name: "Get next work" });
    this.LoanAmount = page.locator(
      '[data-testid="Loan Amount:number-input:control"]'
    );
    this.SearchButton = page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div/div/div[1]/div/div/article/div/div/div[1]/div/div/div/div/div[2]/div"
    );
    this.CaseIDValue = page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div/div/div[1]/div/div/article/div/div/div[1]/div/div/div/div/div[2]/div/div/div/input"
    );
    this.GoButton = page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/div/ul/li/div/div[4]/button"
    );
    this.TenurePeriod = page.locator(
      '[data-testid="Tenure Period:number-input:control"]'
    );
    this.AnalystFeedback = page.locator(
      '[data-testid="Analyst Comments:text-area:control"]'
    );
    this.Approval = page.locator(
      '[data-testid="Approval Decision:select:control"]'
    );
    this.ConformButton = page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/article/div/form/div[1]/div/div/fieldset/div/div/div/div[8]/fieldset/div/div/div/div[1]/div[8]/fieldset/div[1]/div/label/div"
    );
    this.AdditionalInsightNeeded = page.locator(
      '[data-testid="Additional Insights Needed:text-area:control"]'
    );
    this.NextButton = page.getByRole("button", { name: "Next   " });

    this.SubmitButton = page.getByRole("button", { name: "submit" });
    this.gobutton = page.getByRole("button", { name: "Go" });
  }

  async nextwork(CaseID) {
    ///await this.getnextwork.click();
    await this.SearchButton.click();
    await this.CaseIDValue.fill(CaseID);
    await this.CaseIDValue.press("Enter");
    const locator = this.page.locator(
      `div[aria-colindex="1"] a:has-text("${CaseID}")`
    );
    await locator.click();
    await this.GoButton.click();
  }

  async validate() {
    const loanAmount = await this.LoanAmount.inputValue();
    const tenurePeriod = await this.TenurePeriod.inputValue();
    return { loanAmount, tenurePeriod };
  }

  async AdditionalInsight() {
    const AdditionalInsightNeeded =
      await this.AdditionalInsightNeeded.inputValue();
    return { AdditionalInsightNeeded };
  }

  async ProceedCase() {
    await this.NextButton.click();
    //await this.gobutton.click();
    await this.page.waitForTimeout(3000);
    await this.NextButton.click();
    await this.page.waitForTimeout(3000);
    await this.NextButton.click();
    await this.page.waitForTimeout(3000);
    await this.NextButton.click();
    await this.page.waitForTimeout(3000);
    await this.SubmitButton.click();
  }

  async Approve(feedback, Decision) {
    await this.AnalystFeedback.fill(feedback);
    await this.Approval.selectOption(Decision);
    await this.ConformButton.click();
    await this.page.screenshot({ path: "screenshot1.png" });
    await this.SubmitButton.click();
  }
}

module.exports = { BusinessAdditionalinformation };
