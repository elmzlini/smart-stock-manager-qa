import LoginPage from './pages/LoginPage';

let users = null;
let usersLoaded = false;

before(() => {
  cy.fixture('users.json').then((data) => {
    users = data;
    usersLoaded = true;
    cy.log('✅ Fixtures utilisateurs chargés');
  });
});

Cypress.Commands.add('waitForFixtures', () => {
  cy.wrap(null).should(() => {
    expect(usersLoaded, 'Fixtures chargés').to.be.true;
  });
});

Cypress.Commands.add('loginAsAdmin', () => {
  cy.waitForFixtures();
  LoginPage.login(users.admin.email, users.admin.password);
  LoginPage.verifySuccessfulLogin();
  return cy.log(`✅ Connecté en tant que ${users.admin.displayName}`);
});

Cypress.Commands.add('loginAsUser', () => {
  cy.waitForFixtures();
  LoginPage.login(users.user.email, users.user.password);
  LoginPage.verifySuccessfulLogin();
  return cy.log(`✅ Connecté en tant que ${users.user.displayName}`);
});

Cypress.Commands.add('logout', () => {
  LoginPage.logout();
  cy.url().should('include', '/login');
  return cy.log('✅ Déconnexion réussie');
});