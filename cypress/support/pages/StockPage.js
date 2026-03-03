class StockPage {
  visit() {
    cy.visit('/products');
    return this;
  }

  verifyPageLoaded() {
    cy.get('[data-cy="products-count"]').should('be.visible');
    return this;
  }
}

export default new StockPage();