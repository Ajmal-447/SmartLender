const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("playwright");
//import { expect } from "chai";
const {
  BusinessAnalystLogin,
} = require("../../BusinessLoanAnalystPageObject/BusinessLoanAnalystLoginPage");
const {
  BusinessAnalyst,
} = require("../../BusinessLoanAnalystPageObject/BusinessPage");

setDefaultTimeout(60 * 1000);

let browser, context, page;
let PersonalAnalystPage;
let AnalystPage;

Given(
  "I  given the username and password {string} and {string}",
  async (username, password) => {
    browser = await chromium.launch({ headless: false, slowMo: 50 });
    context = await browser.newContext({ ignoreHTTPSErrors: true });
    page = await context.newPage();
    PersonalAnalystPage = new BusinessAnalystLogin(page);
    await PersonalAnalystPage.goto();
    await PersonalAnalystPage.Validlogin(username, password);
    console.log("Login successful.");
  }
);

When("I verify the values", async () => {
  AnalystPage = new BusinessAnalyst(page);
  await AnalystPage.nextwork();
  const { loanAmount, tenurePeriod } = await AnalystPage.validate();

  console.log("Loan Amount (actual):", loanAmount);
  console.log("Tenure Period (actual):", tenurePeriod);

  const chai = await import("chai");
  const { expect } = chai;

  expect(loanAmount).to.equal(
    "10,000",
    `Expected loanAmount to be "10,000", but got "${loanAmount}"`
  );
  expect(tenurePeriod).to.equal(
    "50",
    `Expected tenurePeriod to be "50", but got "${tenurePeriod}"`
  );
});

Then(
  "I set the loan analyst feedback {string}, {string}",
  async (feedback, decision) => {
    AnalystPage = new BusinessAnalyst(page);
    await AnalystPage.Approve(feedback, decision);
    await context.close();
  }
);
