// CORRECTION: chemin correct vers les locators
import ProductPage from '../support/pages/ProductPage';
import { productsLocators } from '../support/locators/products.locators';

describe('Module Gestion Produits', () => {
  beforeEach(() => {
    cy.loginAsAdmin();
    ProductPage.visit();
    ProductPage.verifyPageLoaded();
  });

  it('TC_PRODUCT_001 - Créer un nouveau produit', () => {
    cy.intercept('POST', '/api/products').as('createProduct');
    
    const timestamp = Date.now();
    const uniqueName = `Produit Test ${timestamp}`;
    
    cy.fixture('products.json').then((products) => {
      const testProduct = {
        ...products.newProduct,
        name: uniqueName
      };
      
      ProductPage.clickAddProduct();
      ProductPage.fillProductForm(testProduct);
      ProductPage.submitForm();
      
      cy.wait('@createProduct').then((interception) => {
        expect(interception.response.statusCode).to.eq(201);
      });
      
      ProductPage.verifyProductInList(uniqueName);
    });
  });

  it('TC_PRODUCT_002 - Pagination', () => {
    cy.get(productsLocators.paginationContainer).should('be.visible');
  });
});