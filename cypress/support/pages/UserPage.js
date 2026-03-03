import { usersLocators } from '../locators/users.locators';

class UserPage {
  visit() {
    cy.visit('/users');
    return this;
  }

  verifyPageLoaded() {
    cy.get(usersLocators.usersTitle).should('be.visible');
    cy.get(usersLocators.usersCount).should('be.visible');
    return this;
  }

  clickAddUser() {
    cy.get(usersLocators.addUserBtn).click();
    cy.get(usersLocators.userModal).should('be.visible');
    return this;
  }

  fillUserForm(userData) {
    if (userData.firstname) cy.get(usersLocators.inputFirstname).clear().type(userData.firstname);
    if (userData.lastname) cy.get(usersLocators.inputLastname).clear().type(userData.lastname);
    if (userData.email) cy.get(usersLocators.inputEmail).clear().type(userData.email);
    if (userData.password) cy.get(usersLocators.inputPassword).clear().type(userData.password);
    if (userData.phone) cy.get(usersLocators.inputPhone).clear().type(userData.phone);
    if (userData.role) cy.get(usersLocators.selectRole).select(userData.role);
    return this;
  }

  submitForm() {
    cy.get(usersLocators.submitBtn).click();
    return this;
  }

  verifySuccessMessage() {
    cy.get(usersLocators.successMessage).should('be.visible');
    return this;
  }

  searchUser(email) {
    cy.get(usersLocators.searchInput).clear().type(email);
    cy.wait(500);
    return this;
  }

  deleteUser(email) {
    this.searchUser(email);
    cy.get(usersLocators.deleteUserBtn).first().click();
    cy.get(usersLocators.confirmDialog).should('be.visible');
    cy.get(usersLocators.confirmYes).click();
    return this;
  }
}

export default new UserPage();