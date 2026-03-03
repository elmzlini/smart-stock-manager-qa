import { loginLocators } from '../locators/login.locators';

class LoginPage {
  visit() {
    cy.visit('/login');
    return this;
  }

  fillEmail(email) {
    cy.get(loginLocators.emailInput).clear().type(email);
    return this;
  }

  fillPassword(password) {
    cy.get(loginLocators.passwordInput).clear().type(password);
    return this;
  }

  clickSubmit() {
    cy.get(loginLocators.submitButton).click();
    return this;
  }

  login(email, password) {
    this.visit();
    this.fillEmail(email);
    this.fillPassword(password);
    this.clickSubmit();
    return this;
  }

  logout() {
    cy.get(loginLocators.userMenuToggle).click();
    cy.get(loginLocators.logoutBtn).click();
    return this;
  }

  verifySuccessfulLogin() {
    cy.url({ timeout: 10000 }).should('include', '/dashboard');
    return this;
  }

  verifyErrorMessage(message) {
    cy.get(loginLocators.errorMessage).should('be.visible').and('contain', message);
    return this;
  }

  verifyElements() {
    cy.get(loginLocators.loginTitle).should('be.visible');
    cy.get(loginLocators.emailInput).should('be.visible');
    cy.get(loginLocators.passwordInput).should('be.visible');
    cy.get(loginLocators.submitButton).should('be.visible');
    return this;
  }
}

export default new LoginPage();