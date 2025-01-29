const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("playwright");
//import { expect } from "chai";
const {
  PersonalAnalystLogin,
} = require("../../PersonalLoanAnalystPageObject/PersonalLoananalystLogin");
const {
  PersoanlApprove,
} = require("../../PersonalLoanAnalystPageObject/ApproveSteps");

setDefaultTimeout(60 * 1000);

let browser, context, page;
let PersonalAnalystPage;
let AnalystPage;

Given("I am sent {string} and {string}", async (username, password) => {
  browser = await chromium.launch({ headless: false, slowMo: 50 });
  context = await browser.newContext({ ignoreHTTPSErrors: true });
  page = await context.newPage();
  PersonalAnalystPage = new PersonalAnalystLogin(page);
  await PersonalAnalystPage.goto();
  await PersonalAnalystPage.Validlogin(username, password);
  console.log("Login successful.");
});

When("I want to verify the values {string}", async (CaseID) => {
  AnalystPage = new PersoanlApprove(page);
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
    "52",
    `Expected tenurePeriod to be "52", but got "${tenurePeriod}"`
  );
});

Then(
  "I give personal loan analyst feedback {string}, {string}",
  async (feedback, decision) => {
    AnalystPage = new PersoanlApprove(page);
    await AnalystPage.Approve(feedback, decision);
    await context.close();
  }
);
