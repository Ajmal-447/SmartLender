const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("playwright");
const { LoginPage } = require("../../Object/LoginPage");
const { LoanApplicationPage } = require("../../Object/LoanApplicationPage");
const { RegistrationPage } = require("../../Object/RegistrationPage");
const { EstablishmentPage } = require("../../Object/EstablishmentPage");
const { Financialpage } = require("../../Object/FinancialPage");
const { Acknowledgementpage } = require("../../Object/AcknowledgementPage");
// Set default timeout to 60 seconds
setDefaultTimeout(60 * 1000);

// Browser context and pages
let page, context;
let loginPage,
  loanApplicationPage,
  registrationPage,
  establishmentPage,
  financialPage,
  acknowledgementPage;

// Hook to set up the browser context and page
Given("I log in with the {string} and {string}", async (username, password) => {
  console.log(`Logging in with username: ${username}`);
  browser = await chromium.launch({ headless: false, slowMo: 50 });

  context = await browser.newContext({ ignoreHTTPSErrors: true });
  page = await context.newPage();

  loginPage = new LoginPage(page);
  await loginPage.goto();
  console.log("Navigated to login page.");
  await loginPage.Validlogin(username, password);
  console.log("Login successful.");
});

When(
  "I enter loan application details {string}, {string}, {string}",
  async (amount, percentage, option) => {
    console.log(
      `Entering personal loan details: amount=${amount}, percentage=${percentage}, option=${option}`
    );
    loanApplicationPage = new LoanApplicationPage(page);
    await loanApplicationPage.fillDetails(amount, percentage, option);
    console.log("Personal loan details entered.");
  }
);

When(
  "I fill user registration details {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}",
  async function (
    firstname,
    lastname,
    countrycode,
    phonenumber,
    emailid,
    country,
    state,
    address,
    address1,
    city,
    zipcode
  ) {
    console.log(`Filling registration details for ${firstname} ${lastname}`);

    registrationPage = new RegistrationPage(page); // Ensure `page` is properly initialized
    await registrationPage.userdetails(
      firstname,
      lastname,
      countrycode,
      phonenumber,
      emailid,
      country,
      state,
      address,
      address1,
      city,
      zipcode
    );
  }
);

When(
  "I fill establishment details {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}",
  async function (
    BusinessName,
    country1,
    state1,
    address2,
    address3,
    city1,
    zipcoode1,
    countrycode1,
    contactnumber1,
    Businessemail,
    Date,
    Month,
    Year,
    TaxIDNumber,
    TypeofBusiness,
    Name,
    Title,
    Percentage,
    SSN,
    countrycode2,
    contactnumber2,
    Businessemail1
  ) {
    console.log(`Filling estimation details for ${BusinessName}`);
    establishmentPage = new EstablishmentPage(page);
    await establishmentPage.establishmentdetails(
      BusinessName,
      country1,
      state1,
      address2,
      address3,
      city1,
      zipcoode1,
      countrycode1,
      contactnumber1,
      Businessemail,
      Date,
      Month,
      Year,
      TaxIDNumber,
      TypeofBusiness,
      Name,
      Title,
      Percentage,
      SSN,
      countrycode2,
      contactnumber2,
      Businessemail1
    );
  }
);

When(
  "I fill financial details {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}",
  async function (
    AnnualRevenue,
    NetProfit,
    TotalAssets,
    TotalLiabilities,
    BankName,
    AccountNumber,
    country2,
    state2,
    AddressLine1,
    AddressLine2,
    City2,
    zipcode2
  ) {
    console.log(`Filling financial details for ${AnnualRevenue}`);
    financialPage = new Financialpage(page);
    await financialPage.Financialdetails(
      AnnualRevenue,
      NetProfit,
      TotalAssets,
      TotalLiabilities,
      BankName,
      AccountNumber,
      country2,
      state2,
      AddressLine1,
      AddressLine2,
      City2,
      zipcode2
    );
  }
);

Then("I verify acknowledgement page", async () => {
  console.log("Submitting documents.");
  acknowledgementPage = new Acknowledgementpage(page);
  await acknowledgementPage.Acknowledgementinfo();
  console.log("Supporting documents submitted. Closing browser.");
  await context.close();
});
