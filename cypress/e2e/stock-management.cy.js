import StockPage from '../support/pages/StockPage';

describe('Module Gestion Stock', () => {
  beforeEach(() => {
    cy.loginAsAdmin();
    StockPage.visit();
    StockPage.verifyPageLoaded();
  });

  it('TC_STOCK_001 - Page stock chargée', () => {
    cy.get('[data-cy="products-count"]').should('be.visible');
  });
});