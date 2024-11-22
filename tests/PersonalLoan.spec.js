const { test } = require("@playwright/test");
const { LoginPage2 } = require("../Object/LoginPage2");
const {
  PersonalLoanApplicationPage,
} = require("../Object/PersonalLoanApplicationPage");

const { PersonalDetailsPage } = require("../Object/PersonalDetailsPage");
const { IncomeDetailsPage } = require("../Object/IncomeDetailsPage");
const { FinancialDetailsPagePL } = require("../Object/FinancialDetailsPagePL");
const { SupportingDocumentPage } = require("../Object/SupportingDocumentPage");
const dataset = require("../Utils/TestData2.json");

test("demo", async ({ browser }) => {
  const context = await browser.newContext({ ignoreHTTPSErrors: true });
  const page = await context.newPage();
  const loginpage = new LoginPage2(page);
  const personalloanpage = new PersonalLoanApplicationPage(page);
  const personaldetailspage = new PersonalDetailsPage(page);
  const incomeDetailsPage = new IncomeDetailsPage(page);
  const financialDetailsPagePL = new FinancialDetailsPagePL(page);
  const supportingDocumentPage = new SupportingDocumentPage(page);

  console.log(dataset);

  await loginpage.goto();
  await loginpage.Validlogin(dataset.Username, dataset.Password);
  await personalloanpage.PersonalLoanInfo(
    dataset.amount,
    dataset.percentage,
    dataset.option
  );
  await personaldetailspage.PeronalDetailsInfo(
    dataset.firstName,
    dataset.lastName,
    dataset.Gender,
    dataset.Date,
    dataset.Month,
    dataset.Year,
    dataset.email,
    dataset.countrycode,
    dataset.phonenumber,
    dataset.country,
    dataset.state,
    dataset.address,
    dataset.address1,
    dataset.city,
    dataset.zipcode,
    dataset.SSNnumber
  );
  await incomeDetailsPage.Incomedetails(
    dataset.EmploymentStatus,
    dataset.LengthofEmployment,
    dataset.Designation,
    dataset.AnnualIncome,
    dataset.EmployerName,
    dataset.countryCode1,
    dataset.phonenumber1,
    dataset.country1,
    dataset.state1,
    dataset.address2,
    dataset.address3,
    dataset.city1,
    dataset.zipcode1
  );
  await financialDetailsPagePL.FinancialInfo(
    dataset.Mortgagepayments,
    dataset.PropertyTaxes,
    dataset.DependentsExpenses,
    dataset.ExistingLoanPayments,
    dataset.CreditCardPayments,
    dataset.OutstandingLoans,
    dataset.LoanAmount,
    dataset.LenderName,
    dataset.BankName,
    dataset.BankAccountNumber
  );

  await supportingDocumentPage.SupportingInfo();
});
