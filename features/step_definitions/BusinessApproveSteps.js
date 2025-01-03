const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("playwright");
//import { expect } from "chai";
const {
  BusinessAnalystLogin,
} = require("../../BusinessLoanAnalystPageObject/BusinessLoanAnalystLoginPage");
const {
  BusinessApprove,
} = require("../../BusinessLoanAnalystPageObject/ApprovePage");

setDefaultTimeout(60 * 1000);

let browser, context, page;
let BusinessAnalystPage;
let AnalystPage;

Given("give the {string} and {string}", async (username, password) => {
  browser = await chromium.launch({ headless: false, slowMo: 50 });
  context = await browser.newContext({ ignoreHTTPSErrors: true });
  page = await context.newPage();
  BusinessAnalystPage = new BusinessAnalystLogin(page);
  await BusinessAnalystPage.goto();
  await BusinessAnalystPage.Validlogin(username, password);
  console.log("Login successful.");
});

When("I want to verify the values of the cases", async () => {
  AnalystPage = new BusinessApprove(page);
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
  "I give personal loan analyst feedback comments {string}, {string}",
  async (feedback, decision) => {
    AnalystPage = new BusinessApprove(page);
    await AnalystPage.Approve(feedback, decision);
    await context.close();
  }
);
