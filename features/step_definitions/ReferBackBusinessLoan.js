const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("playwright");
//import { expect } from "chai";
const { LoginPage } = require("../../Object/LoginPage");
const {
  BusinessAdditionalinformation,
} = require("../../BusinessLoanAnalystPageObject/AdditionalInfoPage");

setDefaultTimeout(60 * 1000);
let page, context;
let loginPage;
let AnalystPage;
Given(
  "Login to the User portal with valid crerdentials {string} and {string}",
  async (username, password) => {
    console.log(`Logging in with username: ${username}`);
    browser = await chromium.launch({ headless: false, slowMo: 50 });

    context = await browser.newContext({ ignoreHTTPSErrors: true });
    page = await context.newPage();

    loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log("Navigated to login page.");
    await loginPage.Validlogin(username, password);
    console.log("Login successful.");
  }
);
//here i Used the Same Pageobject from BusinessAdditionalInformation
When(
  "Pick the Case from the Case List and Validate the Comments {string}",
  async (CaseID) => {
    AnalystPage = new BusinessAdditionalinformation(page);
    await AnalystPage.nextwork(CaseID);
  }
);
Then("Sumit the Case", async () => {
  AnalystPage = new BusinessAdditionalinformation(page);
  //await AnalystPage.AdditionalInsightNeeded();
  //AdditionalInsightNeeded;
  const { AdditionalInsightNeeded } = await AnalystPage.AdditionalInsight();

  console.log("AdditionalInsightNeeded:", AdditionalInsightNeeded);
  await AnalystPage.ProceedCase();
});
