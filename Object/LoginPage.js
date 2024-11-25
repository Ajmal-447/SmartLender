class LoginPage{
    constructor(page)
    {
         this.page = page;
         this.UsernameValue = page.locator("#txtUserID");
         this.PasswordValue = page.locator("#txtPassword");
         this.LoginButton = page.locator("#sub");
    }

    async goto() 
    {
        await this.page.goto("https://116.203.194.160:8443/prweb/app/smart-lender", { ignoreHTTPSErrors: true });
    }

    async Validlogin(Username,Password)
    {
        await this.UsernameValue.fill(Username);
        await this.PasswordValue.fill(Password);
        await this.LoginButton.click();
    }
}

module.exports={LoginPage };