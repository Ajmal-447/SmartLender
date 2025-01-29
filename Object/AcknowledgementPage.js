class Acknowledgementpage {
  constructor(page) {
    this.page = page;
    this.bankruptcy = page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div/fieldset/div/div/div/div[1]/div[1]/fieldset/div[1]/div[1]/label"
    );
    this.pendinglawsuits = page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div/fieldset/div/div/div/div[1]/div[2]/fieldset/div[1]/div[1]/label"
    );
    this.taxescurrent = page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div/fieldset/div/div/div/div[1]/div[3]/fieldset/div[1]/div[1]/label"
    );
    this.EmailNotification = page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div/fieldset/div/div/div/div[1]/div[4]/fieldset/div[1]/div[1]/label"
    );
    this.checkbox = page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div/fieldset/div/div/div/div[1]/div[5]/fieldset/div[1]/div/label"
    );
    //this.fieldsetLocator = page.locator('fieldset[name="caseInfo.content.AcknowledgementInformation.NotificationType"]');
    this.CaseID = page.locator('[data-testid=":case-view:subheading"]');
    //this.submitButton = this.page.locator(".sc-bqWxrE.fKpSOq");
    this.submitButton = this.page.getByRole("button", { name: "Submit" });
    this.sidebutton = page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[3]/div[1]/button/svg"
    );
    this.Mail = this.page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[3]/article[1]/div/ul/li[1]"
    );
    this.locator = this.page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[3]/div/article[1]/div/ul/li[1]/div[2]"
    );
  }

  async Acknowledgementinfo() {
    await this.bankruptcy.click();
    await this.pendinglawsuits.click();
    await this.taxescurrent.click();
    await this.EmailNotification.click();
    await this.checkbox.click();
    await this.CaseID.textContent();
    await this.page.screenshot({ path: "screenshot.png" });
    //const CaseID = await this.CaseID.textContent();
    //const fieldsetLocator =
    //('fieldset[name="caseInfo.content.AcknowledgementInformation.NotificationType"]');
    //const selectedOption = await this.page.locator(
    //`${fieldsetLocator} input:checked`;
    //);
    //const value = await selectedOption.getAttribute("value");
    //console.log(`Selected value: ${value}`);
    //return { CaseID };
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

  // async validateEmail() {
  //   await this.page.waitForTimeout(50000);
  //   await this.sidebutton.click();
  //   // const MAil = await this.Mail.textContent();
  //   // return { MAil };
  //   const locator = this.page.locator(
  //     "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[3]/article[1]/div/ul/li[1]"
  //   );
  //   await locator.waitFor({ state: "visible", timeout: 60000 }); // Wait for the element to be visible
  //   const MAil = await locator.textContent();
  //   return MAil;
  // }

  async validateAcknowledgementPage() {
    //await this.page.waitForTimeout(90000);
    //await this.sidebutton.click();
    //const locator = this.page.locator(
    //"xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[3]/div/article[1]/div/ul/li[1]/div[2]"
    //);
    ///html/body/app-root/div/div[1]/div/main/div/div/div[3]/div/article[1]/div/ul/li[1]/div[2]

    // Wait for the page to load completely
    //await this.page.waitForLoadState("networkidle", { timeout: 50000 });

    // Ensure the element is visible
    //await locator.waitFor({ state: "visible", timeout: 50000 });

    // Extract text content
    const MAil = await this.locator.textContent();
    return { MAil };
  }
}

module.exports = { Acknowledgementpage };
