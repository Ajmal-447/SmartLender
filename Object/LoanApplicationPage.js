class LoanApplicationPage {
  constructor(page) {
    this.page = page;
    this.addButton = this.page.locator(
      'path[d="m13.43 2.5-.001 9.069H22.5v1.861h-9.071v9.07h-1.906l-.001-9.07H2.5v-1.86l9.022-.001V2.5h1.907Z"]'
    );
    this.listItem = this.page.locator(
      "xpath=/html/body/div/div[2]/div/fieldset/ul/li[1]"
    );
    this.amountInput = this.page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div/fieldset/div/div/div/div[1]/div[1]/div/div[1]/div[2]/input"
    );
    this.percentageInput = this.page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div/fieldset/div/div/div/div[1]/div[2]/div/div[1]/div[2]/input"
    );
    this.purposeOfLoanDropdown = this.page.getByLabel("Purpose Of Loan");
    this.submitButton = this.page.getByRole("button", { name: "Next   " });
  }

  async fillDetails(amount, percentage, option) {
    await this.addButton.click();
    await this.listItem.click();
    await this.amountInput.fill(amount.toString());
    await this.page.click("body");
    await this.percentageInput.fill(percentage.toString());
    await this.page.click("body");
    await this.purposeOfLoanDropdown.selectOption(option);
    await this.submitButton.click();
  }
}

module.exports = { LoanApplicationPage };
