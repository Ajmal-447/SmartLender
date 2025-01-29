class NotificationPage {
  constructor(page) {
    this.page = page;
    this.NotificationSlide = this.page.locator(
      "xpath=/html/body/app-root/div/div[1]/div/nav/div[2]/ul/li[1]/button"
    );
  }

  // async Notification(CaseID) {
  //   console.log(`Waiting for CaseID: ${CaseID}`);
  //   await this.NotificationSlide.click();
  //   await this.page.waitForTimeout(90000); // Wait for 90 seconds before trying again

  //   const caseElement = await this.page.locator(
  //     `//ul[@data-testid=':meta-list:']//li[contains(text(), '${CaseID}')]/ancestor::*//div[@data-testid=':summary-item:primary']`
  //   );

  //    //`//ul[@data-testid=':meta-list:']//li[contains(text(), 'BL-11044')]/ancestor::*//div[@data-testid=':summary-item:primary']`

  //   const isVisible = await caseElement.isVisible();
  //   if (isVisible) {
  //     const statusUpdate = await caseElement.textContent();
  //     console.log(`Status Update for Case ${CaseID}: ${statusUpdate}`);
  //   } else {
  //     console.log(`The element for Case ${CaseID} is not visible.`);
  //   }

  //   // const caseElement = await this.page.locator(
  //   //   `//ul[@data-testid=':meta-list:']//li[contains(text(), '${CaseID}')]/ancestor::button//span[@class='sc-kIRMQU hAsCQt']`
  //   // );
  //   // await caseElement.waitFor({ state: "attached", timeout: 60000 });

  //   // // Extract the text content
  //   // const statusUpdate = await caseElement.textContent();
  //   // console.log(`Status Update for Case ${CaseID}: ${statusUpdate}`);
  // }
  //
  // async Notification(CaseID) {
  //   console.log(`Waiting for CaseID: ${CaseID}`);
  //   await this.NotificationSlide.click();

  //   // Modify waitForFunction approach
  //   await this.page.waitForFunction(
  //     (caseId) => {
  //       const caseElement = document.evaluate(
  //         `//ul[@data-testid=':meta-list:']//li[contains(text(), '${caseId}')]/ancestor::*//div[@data-testid=':summary-item:primary']`,
  //         document,
  //         null,
  //         XPathResult.FIRST_ORDERED_NODE_TYPE,
  //         null
  //       ).singleNodeValue;

  //       return caseElement !== null && caseElement.isVisible();
  //     },
  //     CaseID,
  //     { timeout: 60000 }
  //   );

  //   // Locate the element again to retrieve text
  //   const caseElement = await this.page.locator(
  //     `//ul[@data-testid=':meta-list:']//li[contains(text(), '${CaseID}')]/ancestor::*//div[@data-testid=':summary-item:primary']`
  //   );

  //   const statusUpdate = await caseElement.textContent();
  //   console.log(`Status Update for Case ${CaseID}: ${statusUpdate}`);
  // }
  //
  async Notification(CaseID) {
    console.log(`Waiting for CaseID: ${CaseID}`);
    await this.NotificationSlide.click();

    // Find the specific notification element containing the case ID
    const notificationElement = await this.page
      .getByRole("button", {
        name: new RegExp(`${CaseID}`),
      })
      .first();

    // Extract the text content of the notification
    const statusUpdate = await notificationElement.textContent();
    console.log(`Status Update for Case ${CaseID}: ${statusUpdate}`);
  }
}

module.exports = { NotificationPage };
