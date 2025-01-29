class SupportingDocumentPage {
  constructor(page) {
    this.page = page;
    this.BankDetails = this.page.locator('input[type="file"]').nth(0);
    this.DocumentforAddressConfirmation = this.page
      .locator('input[type="file"]')
      .nth(1);
    this.NotificationType = this.page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div[1]/div[2]/fieldset/div[1]/div[1]/label/div"
    );
    this.sidebutton = page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[3]/div[1]/button"
    );
    this.Checkbox = this.page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div[1]/div[3]/fieldset/div/div/fieldset/div/div/div/div[1]/div/fieldset/div[1]/div/label/div"
    );
    this.CaseID = page.locator('[data-testid=":case-view:subheading"]');
    this.submitButton = this.page.locator(".sc-bqWxrE.fKpSOq");
    this.locator = this.page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[3]/div/article[1]/div/ul/li[1]/div[2]"
    );
  }

  async SupportingInfo() {
    await this.page.waitForTimeout(3000);
    await this.BankDetails.setInputFiles(
      "C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/test image1.png"
    );
    await this.page.waitForTimeout(3000);
    await this.DocumentforAddressConfirmation.setInputFiles(
      "C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/test image2.png"
    );
    await this.page.waitForTimeout(3000);
    await this.NotificationType.click();
    await this.Checkbox.click();
    await this.page.screenshot({ path: "screenshot8.png" });
    //await this.submitButton.click();
  }

  async CaseIDValue() {
    const CaseID = await this.CaseID.textContent();
    return { CaseID };
  }

  async Submit() {
    await this.submitButton.click();
    await this.page.waitForTimeout(90000);
    await this.sidebutton.click();
  }

  async validateAcknowledgementPage() {
    const MAil = await this.locator.textContent();
    return { MAil };
  }
}

module.exports = { SupportingDocumentPage };
