// cypress/e2e/user-crud.cy.js
import { usersLocators } from '../support/locators/users.locators';

describe('Module Gestion Utilisateurs', () => {
  beforeEach(() => {
    cy.loginAsAdmin();
    cy.visit('/users');
    // Vérifier que la page est chargée
    cy.get(usersLocators.title).should('be.visible');
  });

  it('TC_USER_001 - Créer un nouvel utilisateur', () => {
    cy.intercept('POST', '/api/users').as('createUser');
    
    cy.fixture('users.json').then((users) => {
      const newUser = users.newUser;
      
      // Cliquer sur le bouton d'ajout
      cy.get(usersLocators.addUserBtn).click();
      
      // Remplir le formulaire (à adapter selon votre modal)
      // Note: Je ne vois pas le modal dans votre HTML, mais il doit exister
      cy.get('[data-cy="user-modal"]').should('be.visible');
      cy.get('[data-cy="input-firstname"]').type(newUser.firstname);
      cy.get('[data-cy="input-lastname"]').type(newUser.lastname);
      cy.get('[data-cy="input-email"]').type(newUser.email);
      cy.get('[data-cy="input-password"]').type(newUser.password);
      cy.get('[data-cy="submit-btn"]').click();
      

      
      // ✅ VÉRIFICATION 1: Le modal est fermé
      cy.get('[data-cy="user-modal"]').should('not.exist');
      
      // ✅ VÉRIFICATION 2: L'utilisateur apparaît dans la liste
      // On cherche par email dans le tableau
      cy.get(usersLocators.table).should('contain', newUser.email);
      
      cy.log(`✅ Utilisateur ${newUser.email} créé avec succès`);
    });
  });

  it('TC_USER_002 - Rechercher un utilisateur', () => {
    cy.fixture('users.json').then((users) => {
      // Taper dans la recherche
      cy.get(usersLocators.searchInput).type(users.user.email);
      
      // Attendre les résultats
      cy.wait(500);
      
      // Vérifier que l'utilisateur est visible
      cy.get(usersLocators.table).should('contain', users.user.email);
      
      cy.log(`✅ Utilisateur ${users.user.email} trouvé`);
    });
  });

  it('TC_USER_003 - Vérifier les statistiques', () => {
    // Vérifier que toutes les stats sont visibles
    cy.get(usersLocators.statTotal).should('be.visible');
    cy.get(usersLocators.statAdmins).should('be.visible');
    cy.get(usersLocators.statUsers).should('be.visible');
    cy.get(usersLocators.statActive).should('be.visible');
    
    // Vérifier les valeurs (optionnel)
    cy.get(usersLocators.statTotal).should('contain', '4');
    cy.get(usersLocators.statAdmins).should('contain', '1');
    
    cy.log('✅ Statistiques visibles');
  });

  it('TC_USER_004 - Vérifier les en-têtes du tableau', () => {
    // Vérifier que tous les en-têtes sont présents
    cy.get(usersLocators.thUser).should('be.visible');
    cy.get(usersLocators.thContact).should('be.visible');
    cy.get(usersLocators.thRole).should('be.visible');
    cy.get(usersLocators.thStatus).should('be.visible');
    cy.get(usersLocators.thCreated).should('be.visible');
    cy.get(usersLocators.thActions).should('be.visible');
    
    cy.log('✅ En-têtes du tableau visibles');
  });

  it('TC_USER_005 - Vérifier que admin ne peut pas être désactivé', () => {
    // Chercher l'admin (email admin@smartstock.com)
    cy.get(usersLocators.table).contains('td', 'admin@smartstock.com')
      .parents('tr')
      .within(() => {
        // Vérifier que le bouton toggle est disabled
        cy.get('[data-cy^="toggle-status-"]').should('be.disabled');
      });
    
    cy.log('✅ Admin ne peut pas être désactivé');
  });
});