const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("playwright");
//import { expect } from "chai";
const {
  PersonalAnalystLogin,
} = require("../../PersonalLoanAnalystPageObject/PersonalLoananalystLogin");
const {
  PersoanlAdditionalinformation,
} = require("../../PersonalLoanAnalystPageObject/AdditionalInfoSteps");

setDefaultTimeout(60 * 1000);

let browser, context, page;
let PersonalAnalystPage;
let AnalystPage;

Given(
  "I give the values with {string} and {string}",
  async (username, password) => {
    browser = await chromium.launch({ headless: false, slowMo: 50 });
    context = await browser.newContext({ ignoreHTTPSErrors: true });
    page = await context.newPage();
    PersonalAnalystPage = new PersonalAnalystLogin(page);
    await PersonalAnalystPage.goto();
    await PersonalAnalystPage.Validlogin(username, password);
    console.log("Login successful.");
  }
);

// When("I Validate the values", async () => {
//   AnalystPage = new PersonalAnalyst(page);
//   await AnalystPage.nextwork();
//   const { loanAmount, tenurePeriod } = await AnalystPage.validate();
//   expect(loanAmount).toBe("50000");
//   expect(tenurePeriod).toBe("36");
// });

When("I Validate the values", async () => {
  AnalystPage = new PersoanlAdditionalinformation(page);
  await AnalystPage.nextwork();
  const { loanAmount, tenurePeriod } = await AnalystPage.validate();

  console.log("Loan Amount (actual):", loanAmount);
  console.log("Tenure Period (actual):", tenurePeriod);

  // const chai = await import("chai");
  // const { expect } = chai;

  // expect(loanAmount).to.equal(
  //   "169,996",
  //   `Expected loanAmount to be "169,996", but got "${loanAmount}"`
  // );
  // expect(tenurePeriod).to.equal(
  //   "36",
  //   `Expected tenurePeriod to be "36", but got "${tenurePeriod}"`
  // );
});

Then(
  "I enter personal loan analyst feedback {string}, {string}, {string}",
  async (feedback, decision, info) => {
    // Assuming you are using a page object for handling actions
    const AnalystPage = new PersoanlAdditionalinformation(page);

    // Call the method that handles the logic for submitting the feedback
    await AnalystPage.Approve(feedback, decision, info);

    // Optionally close the context if required in your workflow
    await context.close();
  }
);
