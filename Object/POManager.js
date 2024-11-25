const { LoginPage } = require("./LoginPage");
const { LoanApplicationPage } = require("./LoanApplicationPage");
const { RegistrationPage } = require("./RegistrationPage");
const { EstablishmentPage } = require("./EstablishmentPage");
const { Financialpage } = require("./FinancialPage");
const { Acknowledgementpage } = require("./AcknowledgementPage");

class POManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.loanApplicationPage = new LoanApplicationPage(this.page);
    this.registrationPage = new RegistrationPage(this.page);
    this.establishmentPage = new EstablishmentPage(this.page);
    this.financialpage = new Financialpage(this.page);
    this.acknowledgementpage = new Acknowledgementpage(this.page);
  }

  getLoginPage() {
    return this.loginPage;
  }

  getLoanApplicationPage() {
    return this.loanApplicationPage; 
  }

  getRegistrationPage() {
    return this.registrationPage; 
  }

  getEstablishmentPage() {
    return this.establishmentPage; 
  }

  getFinancialpage() {
    return this.financialpage;
  }

  getAcknowledgementpage() {
    return this.acknowledgementpage; 
  }
}

module.exports = { POManager };
