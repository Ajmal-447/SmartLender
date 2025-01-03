const { test, expect } = require('@playwright/test');

test('demo', async ({ browser }) => {
    // Create a context with ignoreHTTPSErrors: true
    const context = await browser.newContext({ ignoreHTTPSErrors: true });
    const page = await context.newPage();
    const button = page.locator('.sc-bqWxrE.fKpSOq');
    const dropdown = page.locator('[data-testid="Country :select:control"]');

    await page.goto("https://116.203.194.160:8443/prweb/app/smart-lender/");
    await page.locator("#txtUserID").fill("Tester@Dev");
    await page.locator("#txtPassword").fill("Ajmal@1234");
    await page.locator("#sub").click();
    await page.locator('path[d="m13.43 2.5-.001 9.069H22.5v1.861h-9.071v9.07h-1.906l-.001-9.07H2.5v-1.86l9.022-.001V2.5h1.907Z"]').click();
    await page.locator('xpath=/html/body/div/div[2]/div/fieldset/ul/li[3]/div/div').click();
    await page.locator('xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div/fieldset/div/div/div/div[1]/div[1]/div/div[1]/div[2]/input').fill("200000");
    await page.click('body');
    await page.locator('xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div/fieldset/div/div/div/div[1]/div[2]/div/div[1]/div[2]/input').fill("50");
    await page.click('body');
    await page.getByLabel('Purpose Of Loan').selectOption('Emergency Expenses');
    await button.waitFor({ state: 'visible', timeout: 3000 });
    await button.click();


    //2nd screen
    await page.locator('xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div[1]/fieldset/div/div/div/div[1]/div[1]/div/input').fill('Basha');
    await page.locator('xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div[1]/fieldset/div/div/div/div[1]/div[2]/div/input').fill('Ajmal');
    await page.fill('[data-testid=":date-input:control-day"]', '10');
    await page.fill('[data-testid=":date-input:control-month"]', '7');
    await page.fill('[data-testid=":date-input:control-year"]', '2002');
    await page.locator('[data-testid="Gender:select:control"]').selectOption('Male');
    await page.locator('[aria-label="Select country code"]').selectOption('+91');
    await page.locator('[aria-label="Enter a number"]').fill('9360286921');
    await page.locator('[data-testid="Email Address:input:control"]').fill('ajmal456@gmail.com');
    await dropdown.selectOption('India');
    await page.getByLabel('State ').selectOption("Tamil Nadu");
    await page.locator('[data-testid="Address Line 1:input:control"]').fill('test');
    await page.locator('[data-testid="Address Line 2:input:control"]').fill('test');
    await page.locator('[data-testid="City:input:control"]').fill('chennai');
    await page.locator('[data-testid="Zip Code:input:control"]').fill('785235');
    await page.locator('[data-testid="SSN:number-input:control"]').fill('1276543');
    const inputFile3 = page.locator('input[type="file"]').nth(0);
    await inputFile3.setInputFiles('C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/AJMAL BASHA A (AADHAR).pdf');
    await button.waitFor({ state: 'visible', timeout: 3000 });
    await button.click();



    //3rd screen
    await page.locator('[data-testid="Employment Status:select:control"]').selectOption("Employed");
    await page.locator('[data-testid="Length of Employment:number-input:control"]').fill('10');
    await page.locator('[data-testid="Employer Name:input:control"]').fill("Naveen");
    await page.locator('[data-testid="Designation:input:control"]').fill("test");
    await page.locator('[data-testid="Annual Income:currency-input:control"]').fill('500');
    await page.locator('[aria-label="Select country code"]').selectOption('+91');
    await page.locator('[aria-label="Enter a number"]').fill('9360286921');
    await dropdown.selectOption('India');
    await page.getByLabel('State ').selectOption("Tamil Nadu");
    await page.locator('[data-testid="Address Line 1:input:control"]').fill('test');
    await page.locator('[data-testid="Address Line 2:input:control"]').fill('test');
    await page.locator('[data-testid="City:input:control"]').fill('chennai');
    await page.locator('[data-testid="Zip Code:input:control"]').fill('785235');
    const inputFile4 = page.locator('input[type="file"]').nth(0);
    await inputFile4.setInputFiles('C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/AJMAL BASHA A (AADHAR).pdf');
    const inputFile5 = page.locator('input[type="file"]').nth(1);
    await inputFile5.setInputFiles('C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/AJMAL BASHA A (AADHAR).pdf');
    await button.waitFor({ state: 'visible', timeout: 3000 });
    await button.click();


    //4th screen
    await page.locator('[data-testid="Bank Name:input:control"]').fill('State Bank of India');
    await page.locator('[data-testid="Account Number:number-input:control"]').fill('7865414');
    await button.waitFor({ state: 'visible', timeout: 3000 });
    await button.click();


    //5th screen
    const fileInputs = page.locator('input[type="file"]').nth(0);
    await fileInputs.setInputFiles('C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/AJMAL BASHA A (AADHAR).pdf');
    const fileInputs1 = page.locator('input[type="file"]').nth(1);
    await fileInputs1.setInputFiles('C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/AJMAL BASHA A (AADHAR).pdf');
    const fileInputs2 = page.locator('input[type="file"]').nth(2);
    await fileInputs2.setInputFiles('C:/Users/AjmalbashaAllabasha/Desktop/Smart Lender/tests/AJMAL BASHA A (AADHAR).pdf');
    await page.locator('xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div[1]/div[2]/fieldset/div[1]/div/label').click();
    await button.waitFor({ state: 'visible', timeout: 3000 });
    await button.click();
    await page.pause();





});