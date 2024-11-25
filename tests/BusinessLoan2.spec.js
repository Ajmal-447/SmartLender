const { test } = require("@playwright/test");
const { POManager } = require("../Object/POManager");
const dataset = JSON.parse(JSON.stringify(require("../Utils/TestData.json")));

test("demo", async ({ browser }) => {
  const context = await browser.newContext({ ignoreHTTPSErrors: true });
  const page = await context.newPage();
  const POMANAGER = new POManager(page);
  const loginpage = POMANAGER.getLoginPage();
  const loanapplicationpage = POMANAGER.getLoanApplicationPage();
  const registrationpage = POMANAGER.getRegistrationPage();
  const EstablishmentPage = POMANAGER.getEstablishmentPage();
  const Financialpage = POMANAGER.getFinancialpage();
  const Acknowledgementpage = POMANAGER.getAcknowledgementpage();

  await loginpage.goto();
  await loginpage.Validlogin(dataset.Username, dataset.Password);
  await loanapplicationpage.fillDetails(
    dataset.amount,
    dataset.percentage,
    dataset.option
  );
  await registrationpage.userdetails(
    dataset.firstname,
    dataset.lastname,
    dataset.countrycode,
    dataset.phonenumber,
    dataset.emailid,
    dataset.country,
    dataset.state,
    dataset.address,
    dataset.address1,
    dataset.city,
    dataset.zipcode
  );
  await EstablishmentPage.establishmentdetails(
    dataset.BusinessName,
    dataset.country1,
    dataset.state1,
    dataset.address2,
    dataset.address3,
    dataset.city1,
    dataset.zipcoode1,
    dataset.countrycode1,
    dataset.contactnumber1,
    dataset.Businessemail,
    dataset.Date,
    dataset.Month,
    dataset.Year,
    dataset.TaxIDNumber,
    dataset.TypeofBusiness,
    dataset.Name,
    dataset.Title,
    dataset.Percentage,
    dataset.SSN,
    dataset.countrycode2,
    dataset.contactnumber2,
    dataset.Businessemail1
  );
  await Financialpage.Financialdetails(
    dataset.AnnualRevenue,
    dataset.NetProfit,
    dataset.TotalAssets,
    dataset.TotalLiabilities,
    dataset.BankName,
    dataset.AccountNumber,
    dataset.country2,
    dataset.state2,
    dataset.AddressLine1,
    dataset.AddressLine2,
    dataset.City2,
    dataset.zipcode2
  );
  await Acknowledgementpage.Acknowledgementinfo();
});
