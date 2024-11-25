class UnEmploymentSupportingDocumentPage {
  constructor(page) {
    this.page = page;
    this.BankDetails = this.page.locator('input[type="file"]').nth(0);
    this.DocumentforAddressConfirmation = this.page
      .locator('input[type="file"]')
      .nth(1);
    this.IncomeProof = this.page.locator('input[type="file"]').nth(2);
    this.Checkbox = this.page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div[1]/div[2]/fieldset/div[1]/div/label/div"
    );
    this.submitButton = this.page.locator(".sc-bqWxrE.fKpSOq");
  }

  async SupportingInfo() {
    await this.BankDetails.setInputFiles(
      "C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/test image2.png"
    );
    await this.page.waitForTimeout(3000);
    await this.DocumentforAddressConfirmation.setInputFiles(
      "C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/test image2.png"
    );
    await this.page.waitForTimeout(3000);
    await this.IncomeProof.setInputFiles(
      "C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/test image2.png"
    );
    await this.Checkbox.click();
    await this.submitButton.click();
  }
}

module.exports = { UnEmploymentSupportingDocumentPage };
