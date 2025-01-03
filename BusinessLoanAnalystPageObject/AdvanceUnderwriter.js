class BusinessAnalystUnderWriting {
  constructor(page) {
    this.page = page;
    this.getnextwork = page.getByRole("button", { name: "Get next work" });
    this.LoanAmount = page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/article/div/form/div[1]/div/div/fieldset/div/div/div/div[1]/fieldset/div/div/div/div[1]/div[1]/div/div/input"
    );
    this.TenurePeriod = page.locator(
      '[data-testid="Tenure Period:number-input:control"]'
    );
    this.AnalystFeedback = page.locator(
      '[data-testid="Analyst Feedback:text-area:control"]'
    );
    this.Approval = page.locator(
      '[data-testid="Approval Decision:select:control"]'
    );
    this.ConformButton = page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/article/div/form/div[1]/div/div/fieldset/div/div/div/div[8]/fieldset/div/div/div/div[1]/div[7]/fieldset/div[1]/div/label/div"
    );
    this.SubmitButton = page.getByRole("button", { name: "submit" });
  }

  async nextwork() {
    await this.getnextwork.click();
  }

  async validate() {
    const loanAmount = await this.LoanAmount.inputValue();
    const tenurePeriod = await this.TenurePeriod.inputValue();
    return { loanAmount, tenurePeriod };
  }

  async Approve(feedback, Decision) {
    await this.AnalystFeedback.fill(feedback);
    await this.Approval.selectOption(Decision);
    await this.ConformButton.click();
    await this.page.screenshot({ path: "screenshot.png" });
    await this.SubmitButton.click();
  }
}

module.exports = { BusinessAnalystUnderWriting };
