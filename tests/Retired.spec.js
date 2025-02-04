const { test } = require("@playwright/test");
const { LoginPage2 } = require("../Object/LoginPage2");
const {
  PersonalLoanApplicationPage,
} = require("../Object/PersonalLoanApplicationPage");

const { PersonalDetailsPage } = require("../Object/PersonalDetailsPage");
const { RetiredPage } = require("../Object/RetiredPage");
const { FinancialDetailsPagePL } = require("../Object/FinancialDetailsPagePL");
const {
  UnEmploymentSupportingDocumentPage,
} = require("../Object/UnEmploymentSupportingDocuments");
const { readExcel } = require("../Utils/readExcel");
const filePath =
  "C:\\Users\\AjmalbashaAllabasha\\Desktop\\Smart Lender\\tests\\TestData.xlsx";
const sheetName = "Sheet5";
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
        SSNnumber,
        EmploymentStatus,
        LastEmployerName,
        JobTitle,
        Durationofemployment,
        Mortgagepayments,
        PropertyTaxes,
        DependentsExpenses,
        ExistingLoanPayments,
        CreditCardPayments,
        OutstandingLoans,
        LoanAmount,
        LenderName,
        BankName,
        BankAccountNumber,
      } = data;

      console.log(`Executing Demo Test - Case ${index + 1}`);

      // Create new browser context
      const context = await browser.newContext({ ignoreHTTPSErrors: true });
      const page = await context.newPage();

      // Initialize page objects
      const loginpage = new LoginPage2(page);
      const personalloanpage = new PersonalLoanApplicationPage(page);
      const personaldetailspage = new PersonalDetailsPage(page);
      const retiredPage = new RetiredPage(page);
      const financialDetailsPagePL = new FinancialDetailsPagePL(page);
      const unEmploymentSupportingDocumentPage =
        new UnEmploymentSupportingDocumentPage(page);
      try {
        // Perform test steps
        await loginpage.goto();
        await loginpage.Validlogin(Username, Password);
        await personalloanpage.PersonalLoanInfo(amount, percentage, option);
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
        await retiredPage.RetiredInfo(
          EmploymentStatus,
          LastEmployerName,
          JobTitle,
          Durationofemployment
        );

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

        await unEmploymentSupportingDocumentPage.SupportingInfo();
      } catch (error) {
        console.error(`Error in Test Case ${index + 1}:`, error);
      } finally {
        // Close the context to ensure proper cleanup
        await context.close();
      }
    }
  });
});
