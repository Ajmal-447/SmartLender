const { Given, When, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("playwright");
const { LoginPage } = require("../../Object/LoginPage");
const {
  NotificationPage,
} = require("../../BusinessLoanAnalystPageObject/NotificationPage");
setDefaultTimeout(300 * 1000);
let page, context;
let loginPage;
let notificationPage;
Given(
  "Enter the credentials {string} and {string}",
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
When("Pass the values {string} and get Status", async (CaseID) => {
  console.log(`Passing the values for CaseID: ${CaseID}`);
  notificationPage = new NotificationPage(page);
  await notificationPage.Notification(CaseID);
  //console.log(`Status Update for Case ${CaseID}: ${statusUpdate}`);
});
