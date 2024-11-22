class PersonalLoanApplicationPage {
  constructor(page) {
    this.page = page;

    this.addButtonSelector = this.page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/nav/div[1]/div[1]/ul/li/button"
    );

    this.listitemSelector = this.page.locator(
      "xpath=/html/body/div/div[2]/div/fieldset/ul/li"
    );
    this.amountInputSelector = this.page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div/fieldset/div/div/div/div[1]/div[1]/div/div[1]/div[2]/input"
    );
    this.percentageInputSelector = this.page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div/fieldset/div/div/div/div[1]/div[2]/div/div[1]/div[2]/input"
    );
    this.purposeOfLoanDropdown = this.page.getByLabel("Purpose Of Loan");

    this.submitButton = this.page.locator(".sc-bqWxrE.fKpSOq");
  }

  async PersonalLoanInfo(amount, percentage, option) {
    await this.addButtonSelector.click();
    await this.listitemSelector.click();
    await this.amountInputSelector.fill(amount.toString());
    await this.page.click("body");
    await this.percentageInputSelector.fill(percentage.toString());
    await this.page.click("body");
    await this.purposeOfLoanDropdown.selectOption(option);
    await this.submitButton.click();




    
  }
}

module.exports = { PersonalLoanApplicationPage };
