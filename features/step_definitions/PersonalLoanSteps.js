const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("playwright");
const { LoginPage2 } = require("../../Object/LoginPage2");
const {
  PersonalLoanApplicationPage,
} = require("../../Object/PersonalLoanApplicationPage");
const { PersonalDetailsPage } = require("../../Object/PersonalDetailsPage");
const { IncomeDetailsPage } = require("../../Object/IncomeDetailsPage");
const {
  FinancialDetailsPagePL,
} = require("../../Object/FinancialDetailsPagePL");
const {
  SupportingDocumentPage,
} = require("../../Object/SupportingDocumentPage");

// Set default timeout to 60 seconds
setDefaultTimeout(60 * 1000);

let browser, context, page;
let loginpage,
  personalloanpage,
  personaldetailspage,
  incomeDetailsPage,
  financialDetailsPagePL,
  supportingDocumentPage;

// Step: Login
Given("I log in with {string} and {string}", async (username, password) => {
  console.log(`Logging in with username: ${username}`);
  browser = await chromium.launch({ headless: false, slowMo: 50 });

  context = await browser.newContext({ ignoreHTTPSErrors: true });
  page = await context.newPage();

  loginpage = new LoginPage2(page);
  await loginpage.goto();
  console.log("Navigated to login page.");
  await loginpage.Validlogin(username, password);
  console.log("Login successful.");
});

// Step: Enter personal loan details
When(
  "I enter personal loan details {string}, {string}, {string}",

  async (amount, percentage, option) => {
    console.log(
      `Entering personal loan details: amount=${amount}, percentage=${percentage}, option=${option}`
    );
    personalloanpage = new PersonalLoanApplicationPage(page);
    await personalloanpage.PersonalLoanInfo(amount, percentage, option);
    console.log("Personal loan details entered.");
  }
);

// Step: Fill personal details
When(
  "I fill personal details {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}",

  async (
    firstname,
    lastname,
    Gender,
    Date,
    Month,
    Year,
    email,
    countrycode,
    phonenumber,
    country,
    state,
    address,
    address1,
    city,
    zipcode,
    SSNnumber
  ) => {
    console.log(`Filling personal details for ${firstname} ${lastname}`);
    personaldetailspage = new PersonalDetailsPage(page);
    await personaldetailspage.PersonalInfo(
      firstname,
      lastname,
      Gender,
      Date,
      Month,
      Year,
      email,
      countrycode,
      phonenumber,
      country,
      state,
      address,
      address1,
      city,
      zipcode,
      SSNnumber
    );
    console.log("Personal details filled.");
  }
);

// Step: Provide income details
When(
  "I provide income details {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}",
  async (
    EmploymentStatus,
    LengthofEmployment,
    Designation,
    AnnualIncome,
    EmployerName,
    countryCode1,
    phonenumber1,
    country1,
    state1,
    address2,
    address3,
    city1,
    zipcode1
  ) => {
    console.log(
      `Providing income details: EmploymentStatus=${EmploymentStatus}, AnnualIncome=${AnnualIncome}`
    );
    incomeDetailsPage = new IncomeDetailsPage(page);
    await incomeDetailsPage.Incomedetails(
      EmploymentStatus,
      LengthofEmployment,
      Designation,
      AnnualIncome,
      EmployerName,
      countryCode1,
      phonenumber1,
      country1,
      state1,
      address2,
      address3,
      city1,
      zipcode1
    );
    console.log("Income details provided.");
  }
);


When(
  "I enter financial details {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}",
  async (
    Mortgagepayments,
    PropertyTaxes,
    DependentsExpenses,
    ExistingLoanPayments,
    CreditCardPayments,
    OutstandingLoans,
    LoanAmount,
    LenderName,
    BankName,
    BankAccountNumber
  ) => {
    console.log(`Entering financial details: LoanAmount=${LoanAmount}`);
    financialDetailsPagePL = new FinancialDetailsPagePL(page);
    await financialDetailsPagePL.FinancialInfo(
      Mortgagepayments,
      PropertyTaxes,
      DependentsExpenses,
      ExistingLoanPayments,
      CreditCardPayments,
      OutstandingLoans,
      LoanAmount,
      LenderName,
      BankName,
      BankAccountNumber
    );
    console.log("Financial details entered.");
  }
);

// Step: Submit supporting documents
Then("I submit the supporting documents", async () => {
  console.log("Submitting supporting documents.");
  supportingDocumentPage = new SupportingDocumentPage(page);
  await supportingDocumentPage.SupportingInfo();
  console.log("Supporting documents submitted. Closing browser.");
  await context.close();
});
