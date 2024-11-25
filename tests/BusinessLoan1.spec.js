const { test } = require("@playwright/test");
const { LoginPage } = require("../Object/LoginPage");
const { LoanApplicationPage } = require("../Object/LoanApplicationPage");
const { RegistrationPage } = require("../Object/RegistrationPage");
const { EstablishmentPage } = require("../Object/EstablishmentPage");
const { Financialpage } = require("../Object/FinancialPage");
const { Acknowledgementpage } = require("../Object/AcknowledgementPage");

test("demo", async ({ browser }) => {
  const context = await browser.newContext({ ignoreHTTPSErrors: true });
  const page = await context.newPage();
  const loginpage = new LoginPage(page);
  const loanapplicationpage = new LoanApplicationPage(page);
  const registrationpage = new RegistrationPage(page);
  const establishmentPage = new EstablishmentPage(page);
  const financialdetailspage = new Financialpage(page);
  const acknowledgementpage = new Acknowledgementpage(page);

  const Username = "Tester@Dev";
  const Password = "Basha@999";
  const firstname = "Basha";
  const lastname = "Ajmal";
  const countrycode = "+91";
  const emailid = "bashaajmal@gmail.com";
  const country = "India";
  const address = "ryty";
  const address1 = "demo";
  const city = "chennai";
  const state = "Tamil Nadu";
  const zipcode = "786587";
  const amount = "200000";
  const percentage = "50";
  const option = "Working Capital";
  const phonenumber = "7539517598";
  const BusinessName = "qwe";
  const country1 = "India";
  const state1 = "Tamil Nadu";
  const address2 = "qwert";
  const address3 = "fgth";
  const city1 = "salem";
  const zipcoode1 = "789654";
  const countrycode1 = "+91";
  const contactnumber1 = "7896541595";
  const Businessemail = "ajmal@gmail.com";
  const Date = "27";
  const Month = "1";
  const Year = "2002";
  const TaxIDNumber = "458698745";
  const TypeofBusiness = "Partnership";
  const Name = "ajmal";
  const Title = "cftg";
  const Percentage = "80";
  const SSN = "75315985";
  const countrycode2 = "+91";
  const contactnumber2 = "7512585658";
  const Businessemail1 = "hafr@gmail.com";
  const AnnualRevenue = "8000";
  const NetProfit = "500";
  const TotalAssets = "753";
  const TotalLiabilities = "725";
  const BankName = "SBI";
  const AccountNumber = "75982";
  const country2 = "India";
  const state2 = "Tamil Nadu";
  const AddressLine1 = "fthyfy";
  const AddressLine2 = "tyuku";
  const City2 = "erode";
  const zipcode2 = "78698";

  await loginpage.goto();
  await loginpage.Validlogin(Username, Password);
  await loanapplicationpage.fillDetails(amount, percentage, option);
  await registrationpage.userdetails(
    countrycode,
    phonenumber,
    country,
    address,
    address1,
    city,
    state,
    zipcode,
    firstname,
    lastname,
    emailid
  );
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
  await financialdetailspage.Financialdetails(
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
  await acknowledgementpage.Acknowledgementinfo();
});
