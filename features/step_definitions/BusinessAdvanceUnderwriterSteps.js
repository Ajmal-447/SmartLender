const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

const {
  BusinessAnalystLogin,
} = require("../../BusinessLoanAnalystPageObject/BusinessLoanAnalystLoginPage");
const {
  BusinessAnalystUnderWriting,
} = require("../../BusinessLoanAnalystPageObject/AdvanceUnderwriter");

setDefaultTimeout(60 * 1000);

let browser, context, page;
let BusinessAnalystPage;
let AnalystPage;

Given(
  "I want to sent the username and password {string} and {string}",
  async (username, password) => {
    browser = await chromium.launch({ headless: false, slowMo: 50 });
    context = await browser.newContext({ ignoreHTTPSErrors: true });
    page = await context.newPage();
    BusinessAnalystPage = new BusinessAnalystLogin(page);
    await BusinessAnalystPage.goto();
    await BusinessAnalystPage.Validlogin(username, password);
    console.log("Login successful.");
    // Write code here that turns the phrase above into concrete actions
  }
);

When("verify the values {string}", async (CaseID) => {
  AnalystPage = new BusinessAnalystUnderWriting(page);
  await AnalystPage.nextwork(CaseID);
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
  "set the loan analyst feedback {string}, {string}",
  async (feedback, decision) => {
    AnalystPage = new BusinessAnalystUnderWriting(page);
    await AnalystPage.Approve(feedback, decision);
    await context.close();
    await browser.close();
  }
);
