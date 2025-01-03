class FinancialDetailsPagePL {
  constructor(page) {
    this.page = page;
    this.Mortgagepayments = this.page.locator(
      '[data-testid="Rent or Mortgage payments:number-input:control"]'
    );
    this.PropertyTaxes = this.page.locator(
      '[data-testid="Property Taxes and Insurance (For homeowners):number-input:control"]'
    );
    this.DependentsExpenses = this.page.locator(
      '[data-testid="Childcare/Dependents Expenses:number-input:control"]'
    );
    this.ExistingLoanPayments = this.page.locator(
      '[data-testid="Existing Loan Payments (Personal loans, Auto loans, Student loans, etc.):number-input:control"]'
    );
    this.CreditCardPayments = this.page.locator(
      '[data-testid="Credit Card Payments (Monthly minimum or Total payments):number-input:control"]'
    );
    this.OutstandingLoans = this.page.locator(
      '[data-testid="Outstanding Loans:select:control"]'
    );
    this.LoanAmount = this.page.locator(
      '[data-testid="Loan Amount:number-input:control"]'
    );
    this.LenderName = this.page.locator(
      '[data-testid="Lender Name:input:control"]'
    );
    this.BankName = this.page.locator(
      '[data-testid="Bank Name:input:control"]'
    );
    this.BankAccountNumber = this.page.locator(
      '[data-testid="Bank Account Number:number-input:control"]'
    );
    this.submitButton = this.page.locator(".sc-bqWxrE.fKpSOq");
  }

  async FinancialInfo(
    Mortgagepayments,
    PropertyTaxes,
    DependentsExpenses,
    ExistingLoanPayments,
    CreditCardPayments,
    OutstandingLoans,
    LoanAmount,
    LenderName,
    BankName,
    BankAccountNumber
  ) {
    await this.Mortgagepayments.fill(String(Mortgagepayments));
    await this.PropertyTaxes.fill(String(PropertyTaxes));
    await this.DependentsExpenses.fill(String(DependentsExpenses));
    await this.ExistingLoanPayments.fill(String(ExistingLoanPayments));
    await this.CreditCardPayments.fill(String(CreditCardPayments));
    await this.OutstandingLoans.selectOption(String(OutstandingLoans));
    await this.LoanAmount.fill(String(LoanAmount));
    await this.LenderName.fill(String(LenderName));
    await this.BankName.fill(String(BankName));
    await this.BankAccountNumber.fill(String(BankAccountNumber));
    await this.submitButton.click();
  }
}

module.exports = { FinancialDetailsPagePL };
