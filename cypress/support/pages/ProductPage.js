import { productsLocators } from '../locators/products.locators';

class ProductPage {
  visit() {
    cy.visit('/products');
    cy.wait(1000);
    return this;
  }

  verifyPageLoaded() {
    cy.url().should('include', '/products');
    cy.get(productsLocators.productsTitle).should('be.visible');
    cy.get(productsLocators.productsCount).should('be.visible');
    return this;
  }

  clickAddProduct() {
    cy.get(productsLocators.addProductBtn).click();
    return this;
  }

  fillProductForm(productData) {
    if (!productData) throw new Error('productData est requis');
    
    if (productData.name) {
      cy.get(productsLocators.inputName).clear().type(productData.name);
    }
    if (productData.description) {
      cy.get(productsLocators.inputDescription).clear().type(productData.description);
    }
    if (productData.price !== undefined) {
      cy.get(productsLocators.inputPrice).clear().type(productData.price.toString());
    }
    if (productData.quantity !== undefined) {
      cy.get(productsLocators.inputQuantity).clear().type(productData.quantity.toString());
    }
    if (productData.category) {
      cy.get(productsLocators.selectCategory).select(productData.category);
    }
    return this;
  }

  submitForm() {
    cy.get(productsLocators.submitBtn).click();
    cy.wait(1000);
    return this;
  }

  verifyProductInList(productName) {
    cy.get(productsLocators.productsTable).should('contain', productName);
    return this;
  }

  deleteProduct(productName) {
    cy.get(productsLocators.productsTable).contains('tr', productName)
      .find(productsLocators.deleteBtn).click();
    cy.get(productsLocators.confirmDialog).should('be.visible');
    cy.get(productsLocators.confirmYes).click();
    cy.wait(500);
    return this;
  }
}

export default new ProductPage();