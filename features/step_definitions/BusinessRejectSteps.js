const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("playwright");
//import { expect } from "chai";
const {
  BusinessAnalystLogin,
} = require("../../BusinessLoanAnalystPageObject/BusinessLoanAnalystLoginPage");
const {
  BusinessReject,
} = require("../../BusinessLoanAnalystPageObject/RejectPage");

setDefaultTimeout(60 * 1000);

let browser, context, page;
let BusinessAnalystPage;
let AnalystPage;

Given("I need to pass {string} and {string}", async (username, password) => {
  browser = await chromium.launch({ headless: false, slowMo: 50 });
  context = await browser.newContext({ ignoreHTTPSErrors: true });
  page = await context.newPage();
  BusinessAnalystPage = new BusinessAnalystLogin(page);
  await BusinessAnalystPage.goto();
  await BusinessAnalystPage.Validlogin(username, password);
  console.log("Login successful.");
});

When("I need to check their values", async () => {
  AnalystPage = new BusinessReject(page);
  await AnalystPage.nextwork();
  const { loanAmount, tenurePeriod } = await AnalystPage.validate();

  console.log("Loan Amount (actual):", loanAmount);
  console.log("Tenure Period (actual):", tenurePeriod);

  const chai = await import("chai");
  const { expect } = chai;

  // expect(loanAmount).to.equal(
  //   "50,000",
  //   `Expected loanAmount to be "50,000", but got "${loanAmount}"`
  // );
  // expect(tenurePeriod).to.equal(
  //   "32",
  //   `Expected tenurePeriod to be "32", but got "${tenurePeriod}"`
  // );
});

Then(
  "I need to give the personal loan analyst feedback {string}, {string}, {string}",
  async (feedback, decision, Reason) => {
    AnalystPage = new BusinessReject(page);
    await AnalystPage.Approve(feedback, decision, Reason);
    await context.close();
  }
);
