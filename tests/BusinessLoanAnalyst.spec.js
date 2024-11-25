const { test } =require('@playwright/test');

test('demo', async ({ browser }) => {
    const context = await browser.newContext({ ignoreHTTPSErrors: true });
    const page = await context.newPage();
    await page.goto("https://116.203.194.160:8443/prweb/app/smart-lender/");
    await page.locator("#txtUserID").fill("Manager@BL1");
    await page.locator("#txtPassword").fill("Rules@111");
    await page.locator("#sub").click();
    await page.getByRole('button', { name: 'Get next work' }).click();
    await page.locator('[data-testid="Analyst Feedback:text-area:control"]').fill("test")
    await page.getbylabel("Approval Decision").selectoption("Approve");
    await page.locator('[data-testid=":form-field:label"]').click();
    await page.getByRole('button', { name: 'submit' }).click();
});