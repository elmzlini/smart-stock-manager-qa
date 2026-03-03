// CORRECTION: chemin correct vers les locators
import LoginPage from '../support/pages/LoginPage';
import { loginLocators } from '../support/locators/login.locators';

describe('Module Authentification', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('TC_LOGIN_001 - La page de login doit se charger', () => {
    cy.url().should('include', '/login');
  });

  it('TC_LOGIN_002 - Tous les éléments doivent être présents', () => {
    LoginPage.verifyElements();
  });

  it('TC_LOGIN_003 - Connexion avec identifiants valides (admin)', () => {
    cy.loginAsAdmin();
  });

  it('TC_LOGIN_004 - Déconnexion', () => {
    cy.loginAsAdmin();
    cy.logout();
  });

  it('TC_LOGIN_005 - Connexion avec identifiants utilisateur normal', () => {
    cy.loginAsUser();
  });
  
});