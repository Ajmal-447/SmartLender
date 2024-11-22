const { test, expect } = require("@playwright/test");

test("demo", async ({ browser }) => {
  // Create a context with ignoreHTTPSErrors: true
  const context = await browser.newContext({ ignoreHTTPSErrors: true });
  const page = await context.newPage();
  const slider = await page.locator(
    "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div/fieldset/div/div/div/div[1]/div[1]/div/div[1]/div[2]/input"
  );

  const button = page.locator(".sc-bqWxrE.fKpSOq");
  const dropdown = page.locator('[data-testid="Country :select:control"]');
  const phoneNumberField = page.locator('[aria-label="Enter a number"]');
  const dropdownOptions = page.locator(
    '[data-testid="Country:combo-box:control"]'
  );
  const cityField = page.locator('[data-testid="City / Town:input:control"]');
  const stateDropdown = page.getByLabel("State");
  const postalCodeField = page.locator(
    '[data-testid="Postal Code:input:control"]'
  );

  // Navigate to the URL
  await page.goto("https://116.203.194.160:8443/prweb/app/smart-lender/");
  await page.locator("#txtUserID").fill("Tester@Dev");
  await page.locator("#txtPassword").fill("Ajmal@1234");
  await page.locator("#sub").click();
  await page
    .locator(
      'path[d="m13.43 2.5-.001 9.069H22.5v1.861h-9.071v9.07h-1.906l-.001-9.07H2.5v-1.86l9.022-.001V2.5h1.907Z"]'
    )
    .click();
  await page
    .locator("xpath=/html/body/div/div[2]/div/fieldset/ul/li[1]")
    .click();
  await page
    .locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div/fieldset/div/div/div/div[1]/div[1]/div/div[1]/div[2]/input"
    )
    .fill("200000");
  await page.click("body");
  await page
    .locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div/fieldset/div/div/div/div[1]/div[2]/div/div[1]/div[2]/input"
    )
    .fill("50");
  await page.click("body");
  await page.getByLabel("Purpose Of Loan").selectOption("Working Capital");
  await button.waitFor({ state: "visible", timeout: 3000 });
  await button.click();

  //2nd page
  await page
    .locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div/fieldset/div/div/div/div[1]/div[1]/div/input"
    )
    .fill("Ajmal");
  await page
    .locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div/fieldset/div/div/div/div[1]/div[2]/div/input"
    )
    .fill("Basha");
  await page.locator('[aria-label="Select country code"]').selectOption("+91");
  await page.locator('[aria-label="Enter a number"]').fill("9360286921");
  await page
    .locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div/fieldset/div/div/div/div[1]/div[4]/div/input"
    )
    .fill("ajmalbasha447@gmail.com");
  await dropdown.selectOption("India");
  await page
    .locator('[data-testid="Address Line 1:input:control"]')
    .fill("test");
  await page
    .locator('[data-testid="Address Line 2:input:control"]')
    .fill("test");
  await page.locator('[data-testid="City/Town:input:control"]').fill("chennai");
  await page.getByLabel("State ").selectOption("Tamil Nadu");
  await page.locator('[data-testid="Zip Code:input:control"]').fill("785235");
  await button.waitFor({ state: "visible", timeout: 3000 });
  await button.click();

  //3rd page
  await page
    .locator('[data-testid="Business Name:input:control"]')
    .fill("demo");
  await dropdown.selectOption("India");
  await page.fill('[data-testid=":date-input:control-day"]', "12");
  await page.fill('[data-testid=":date-input:control-month"]', "8");
  await page.fill('[data-testid=":date-input:control-year"]', "2000");
  await page
    .locator('[data-testid="Address Line 1:input:control"]')
    .fill("Dummy");
  await page
    .locator('[data-testid="Address Line 2:input:control"]')
    .fill("Dummy");
  await page.locator('[data-testid="City/Town:input:control"]').fill("Erode");
  await page.getByLabel("State ").selectOption("Tamil Nadu");
  await page.locator('[data-testid="Zip Code:input:control"]').fill("785235");
  await page.locator('[aria-label="Select country code"]').selectOption("+91");
  await page.locator('[aria-label="Enter a number"]').fill("9360286921");
  await page
    .locator('[data-testid="Business Email:input:control"]')
    .fill("ajmalbasha447@gmail.com");
  await page
    .locator('[data-testid="Tax ID Number:number-input:control"]')
    .fill("123456789");
  await page.getByLabel("Type of Business Entity").selectOption("Partnership");
  await page.locator('[aria-label="Add a new record"]').click();
  await page
    .locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div[2]/div/div/div/article/div/div/div[3]/div/div[3]/div/div/div[2]/span/span/span/div/input"
    )
    .fill("ASDF");
  await page
    .locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div[2]/div/div/div/article/div/div/div[3]/div/div[3]/div/div/div[3]/span/span/span/div/input"
    )
    .fill("Demo");
  await page
    .locator('[data-testid="Ownership Percentage:number-input:control"]')
    .fill("10");
  await page
    .locator('[data-testid="SSN:number-input:control"]')
    .fill("485632587");
  await page
    .locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div[2]/div/div/div/article/div/div/div[3]/div/div[3]/div/div/div[6]/span/span/span/fieldset/div[1]/select"
    )
    .selectOption("+91");
  await page
    .locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div[2]/div/div/div/article/div/div/div[3]/div/div[3]/div/div/div[6]/span/span/span/fieldset/div[1]/input"
    )
    .fill("9360286921");
  await page
    .locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div[2]/div/div/div/article/div/div/div[3]/div/div[3]/div/div/div[7]/span/span/span/div/input"
    )
    .fill("ajmalbasha447@gmail.com");
  await button.waitFor({ state: "visible", timeout: 3000 });
  await button.click();

  //4th page
  await page
    .locator('[data-testid="Annual Revenue:currency-input:control"]')
    .fill("1000");
  await page
    .locator('[data-testid="Net Profit:currency-input:control"]')
    .fill("2000");
  await page
    .locator('[data-testid="Total Assets:currency-input:control"]')
    .fill("3000");
  await page
    .locator('[data-testid="Total Liabilities:currency-input:control"]')
    .fill("2000");
  await page
    .locator('[data-testid="Bank Name:input:control"]')
    .fill("State Banl of India");
  await page
    .locator('[data-testid="Account Number:number-input:control"]')
    .fill("76736");
  await dropdown.selectOption("India");
  await page
    .locator('[data-testid="Address Line 1:input:control"]')
    .fill("Demo");
  await page
    .locator('[data-testid="Address Line 2:input:control"]')
    .fill("Demo");
  await page.locator('[data-testid="City/Town:input:control"]').fill("Trichy");
  await page.locator('[data-testid="Zip Code:input:control"]').fill("785235");
  await page
    .locator('[data-testid="State :select:control"]')
    .selectOption("Tamil Nadu");
  await button.waitFor({ state: "visible", timeout: 3000 });
  const fileInputs = page.locator('input[type="file"]').nth(0);
  await fileInputs.setInputFiles(
    "C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/AJMAL BASHA A (AADHAR).pdf"
  );
  const fileInput1 = page.locator('input[type="file"]').nth(1);
  await fileInput1.setInputFiles([
    "C:\\Users\\AjmalbashaAllabasha\\Desktop\\Smart Lender\\tests\\AJMAL BASHA A (AADHAR).pdf",
    "C:\\Users\\AjmalbashaAllabasha\\Desktop\\Smart Lender\\tests\\pega-smart-investigate-for-payments-8.2-implementation-guide.pdf",
  ]);
  const fileInput2 = page.locator('input[type="file"]').nth(2);
  await fileInput2.setInputFiles([
    "C:\\Users\\AjmalbashaAllabasha\\Desktop\\Smart Lender\\tests\\AJMAL BASHA A (AADHAR).pdf",
    "C:\\Users\\AjmalbashaAllabasha\\Desktop\\Smart Lender\\tests\\pega-smart-investigate-for-payments-8.2-implementation-guide.pdf",
  ]);
  const fileInput3 = page.locator('input[type="file"]').nth(3);
  await fileInput3.setInputFiles(
    "C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/AJMAL BASHA A (AADHAR).pdf"
  );
  const fileInput4 = page.locator('input[type="file"]').nth(4);
  await fileInput4.setInputFiles(
    "C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/AJMAL BASHA A (AADHAR).pdf"
  );
  const fileInput5 = page.locator('input[type="file"]').nth(5);
  await fileInput5.setInputFiles([
    "C:\\Users\\AjmalbashaAllabasha\\Desktop\\Smart Lender\\tests\\AJMAL BASHA A (AADHAR).pdf",
    "C:\\Users\\AjmalbashaAllabasha\\Desktop\\Smart Lender\\tests\\pega-smart-investigate-for-payments-8.2-implementation-guide.pdf",
  ]);
  const fileInput6 = page.locator('input[type="file"]').nth(6);
  await fileInput6.setInputFiles(
    "C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/AJMAL BASHA A (AADHAR).pdf"
  );
  await button.waitFor({ state: "visible", timeout: 3000 });
  await button.click();

  //5th screen
  await page
    .locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div/fieldset/div/div/div/div[1]/div[1]/fieldset/div[1]/div[1]/label"
    )
    .click();
  await page
    .locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div/fieldset/div/div/div/div[1]/div[2]/fieldset/div[1]/div[1]/label"
    )
    .click();
  await page
    .locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div/fieldset/div/div/div/div[1]/div[3]/fieldset/div[1]/div[1]/label"
    )
    .click();
  await page
    .locator(
      "xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div/fieldset/div/div/div/div[1]/div[4]/fieldset/div[1]/div/label/div"
    )
    .click();
  await button.waitFor({ state: "visible", timeout: 3000 });
  await button.click();
  //await page.pause();

  //underwritter screen
  // await page.getByRole("button",{name: 'Go'}).click();
  // await page.pause();
});
