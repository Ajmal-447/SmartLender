const { test } =require('@playwright/test');
test('demo', async ({ browser }) => {
    const context = await browser.newContext({ ignoreHTTPSErrors: true });
    const page = await context.newPage();
    await page.goto("https://116.203.194.160:8443/prweb/app/av-retail-loan");
    await page.locator("#txtUserID").fill("manager@pl");
    await page.locator("#txtPassword").fill("pega@123");
    await page.locator("#sub").click();
    await page.getByRole('button', { name: 'Get next work' }).click();
    await page.locator('[data-testid="Analyst Feedback:text-area:control"]').fill("test")
    await page.getbylabel("Approval Decision").selectoption("Approve");
    await page.locator('[data-testid=":form-field:label"]').click();
    await page.getByRole('button', { name: 'submit' }).click();
});