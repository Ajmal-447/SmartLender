const { test } = require("@playwright/test");
const { LoginPage } = require("../Object/LoginPage");
const { LoanApplicationPage } = require("../Object/LoanApplicationPage");
const { RegistrationPage } = require("../Object/RegistrationPage");
const { EstablishmentPage } = require("../Object/EstablishmentPage");
const { Financialpage } = require("../Object/FinancialPage");
const { Acknowledgementpage } = require("../Object/AcknowledgementPage");
const { readExcel } = require("../Utils/readExcel");

const filePath =
  "C:\\Users\\AjmalbashaAllabasha\\Desktop\\Smart Lender\\tests\\TestData.xlsx";
const sheetName = "Sheet1";

async function loadTestData() {
  const testData = await readExcel(filePath, sheetName);
  if (!testData.length) {
    console.error("No data found or failed to read Excel data");
  } else {
    console.log(`Loaded ${testData.length} rows of test data`);
  }
  return testData;
}

test.describe("Smart Lender Test Suite", () => {
  let testData;

  test.beforeAll(async () => {
    testData = await loadTestData();
  });

  test("Basic Test Check", async () => {
    console.log("Test file is detected");
  });

  test("Execute Test Cases for Each Data Row", async ({ browser }) => {
    if (!testData || testData.length === 0) {
      console.error("Test data is empty or not loaded.");
      return;
    }

    // Using `for...of` loop for sequential execution
    for (const [index, data] of testData.entries()) {
      const {
        Username,
        Password,
        amount,
        percentage,
        option,
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
        zipcode,
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
        Businessemail1,
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
        zipcode2,
      } = data;

      console.log(`Executing Demo Test - Case ${index + 1}`);

      // Create new browser context
      const context = await browser.newContext({ ignoreHTTPSErrors: true });
      const page = await context.newPage();

      // Initialize page objects
      const loginpage = new LoginPage(page);
      const loanapplicationpage = new LoanApplicationPage(page);
      const registrationpage = new RegistrationPage(page);
      const establishmentPage = new EstablishmentPage(page);
      const financialdetailspage = new Financialpage(page);
      const acknowledgementpage = new Acknowledgementpage(page);

      try {
        // Perform test steps
        await loginpage.goto();
        await loginpage.Validlogin(Username, Password);
        await loanapplicationpage.fillDetails(amount, percentage, option);
        await registrationpage.userdetails(
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
      } catch (error) {
        console.error(`Error in Test Case ${index + 1}:`, error);
      } finally {
        // Close the context to ensure proper cleanup
        await context.close();
      }
    }
  });
});
