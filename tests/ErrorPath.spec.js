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
    // await page.locator('xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div/fieldset/div/div/div/div[1]/div[6]/div/textarea').fill('Test');
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
    await page.locator('[aria-label="Enter a number"]').fill('936');
    await page.click('body');
    console.log(await page.locator('[data-testid="Phone number:phone-input:info"]').textContent());
    await expect(page.locator('[data-testid="Phone number:phone-input:info"]')).toContainText('Invalid Phone');
    await page.locator('[data-testid="Email Address:input:control"]').fill('ajmal456gmail.com');
    await page.click('body');
    console.log(await page.locator('[data-testid="Email Address:input:info"]').textContent());
    await expect(page.locator('[data-testid="Email Address:input:info"]')).toContainText('Invalid Email');
    
   

    await button.waitFor({ state: 'visible', timeout: 3000 });
    await button.click();
    //console.log(await page.locator('.sc-bjfHbI jlBwVv sc-fLcnxK dltLDA').textContent());
    console.log(await page.locator('.sc-bjfHbI.jlBwVv.sc-fLcnxK.dltLDA').textContent());
    await expect(page.locator('.sc-bjfHbI.jlBwVv.sc-fLcnxK.dltLDA')).toContainText("Phone number: Invalid PhoneEmail Address: Invalid Email");

    
    await page.pause();

    

});