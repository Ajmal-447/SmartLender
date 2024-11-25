class UnEmployedPage {
  constructor(page) {
    this.page = page;
    this.EmploymentStatus = this.page.locator(
      '[data-testid="Employment Status:select:control"]'
    );
    this.ReasonforUnemployment = this.page.locator(
      '[data-testid="Reason for Unemployment:text-area:control"]'
    );
    this.DurationofUnemployment = this.page.locator(
      '[data-testid="Duration of Unemployment(in Months):number-input:control"]'
    );
    this.Incomesource = this.page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div[4]/fieldset/div/div/div/div[3]/div/fieldset/div/div/div/fieldset[5]/div[1]/div/label/div"
    );
    this.CoBorrower = this.page.locator(
      '[data-testid="Co-Borrower or Guarantor:select:control"]'
    );
    this.GuarantorName = this.page.locator(
      '[data-testid="Name:input:control"]'
    );
    this.ContactNumberCode = this.page.locator(
      '[data-testid="Mobile Number:phone-input:country-code"]'
    );
    this.GuarantorNumber = this.page.locator(
      '[data-testid="Mobile Number:phone-input:control"]'
    );
    this.LoanRepaymentPlan = this.page.locator(
      '[data-testid="Loan Repayment Plan:input:control"]'
    );
    this.submitButton = this.page.locator(".sc-bqWxrE.fKpSOq");
  }

  async UnEmployed(
    EmploymentStatus,
    ReasonforUnemployment,
    DurationofUnemployment,
    CoBorrower,
    GuarantorName,
    ContactNumberCode,
    GuarantorNumber,
    LoanRepaymentPlan
  ) {
    await this.EmploymentStatus.selectOption(String(EmploymentStatus));
    await this.ReasonforUnemployment.fill(String(ReasonforUnemployment));
    await this.DurationofUnemployment.fill(String(DurationofUnemployment));
    await this.Incomesource.click();
    await this.CoBorrower.selectOption(String(CoBorrower));
    await this.GuarantorName.fill(String(GuarantorName));
    await this.ContactNumberCode.selectOption(String(ContactNumberCode));
    await this.GuarantorNumber.fill(String(GuarantorNumber));
    await this.LoanRepaymentPlan.fill(String(LoanRepaymentPlan));
    await this.submitButton.click();
  }
}
module.exports = { UnEmployedPage };
