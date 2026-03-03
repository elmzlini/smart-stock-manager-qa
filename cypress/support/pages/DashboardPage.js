class DashboardPage {
  visit() {
    cy.visit('/dashboard');
    return this;
  }

  verifyPageLoaded() {
    cy.url().should('include', '/dashboard');
    cy.get('[data-cy="dashboard-title"]').should('be.visible');
    return this;
  }

  navigateToProducts() {
    cy.get('[data-cy="sidebar-link-produits"]').click();
    return this;
  }

  navigateToUsers() {
    cy.get('[data-cy="sidebar-link-utilisateurs"]').click();
    return this;
  }
}

export default new DashboardPage();