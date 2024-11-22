class LoginPage2 {
  constructor(page) {
    this.page = page;
    this.UsernameValue = page.locator("#txtUserID");
    this.PasswordValue = page.locator("#txtPassword");
    this.LoginButton = page.locator("#sub");
  }

  async goto() {
    await this.page.goto(
      "https://128.140.100.5:8443/prweb/app/av-retail-loan/",
      { ignoreHTTPSErrors: true }
    );
  }

  async Validlogin(Username, Password) {
    await this.UsernameValue.fill(Username);
    await this.PasswordValue.fill(Password);
    await this.LoginButton.click();
  }
}

module.exports = { LoginPage2 };
