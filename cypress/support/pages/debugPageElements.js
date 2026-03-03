import { productsLocators } from '../locators/products.locators';

class ProductPage {
  visit() {
    cy.visit('/products');
    cy.wait(1000);
    return this;
  }

  verifyPageLoaded() {
    cy.log('Vérification du chargement de la page produits');
    cy.url().should('include', '/products');
    
    // Vérifier que le titre est visible
    cy.get(productsLocators.productsTitle).should('be.visible');
    cy.get(productsLocators.productsCount).should('be.visible');
    
    return this;
  }

  // ✅ AJOUTER CETTE MÉTHODE
  debugPageElements() {
    cy.log('=== DÉBOGAGE - ÉLÉMENTS DE LA PAGE ===');
    
    // Lister tous les data-cy
    cy.get('[data-cy]').then(($elements) => {
      cy.log(`📋 ${$elements.length} éléments avec data-cy trouvés:`);
      $elements.each((i, el) => {
        cy.log(`  ${el.getAttribute('data-cy')}`);
      });
    });
    
    // Lister tous les boutons
    cy.get('button').then(($buttons) => {
      cy.log(`🔘 ${$buttons.length} boutons trouvés:`);
      $buttons.each((i, btn) => {
        const dataCy = btn.getAttribute('data-cy') || 'pas de data-cy';
        cy.log(`  ${i}: "${btn.textContent.trim()}" (data-cy: ${dataCy})`);
      });
    });
    
    return this;
  }

  clickAddProduct() {
    cy.log('Clic sur le bouton d\'ajout de produit');
    
    // Essayer différents sélecteurs
    const possibleSelectors = [
      '[data-cy="add-product-btn"]',
      '[data-cy="open-add-form"]',
      '[data-cy="new-product-btn"]',
      'button:contains("Ajouter")',
      'button:contains("Nouveau produit")',
      'button:contains("Créer")'
    ];
    
    // Note: puisque votre test TC_PRODUCT_001 réussit,
    // votre sélecteur actuel fonctionne déjà !
    cy.get(productsLocators.addProductBtn).click();
    return this;
  }

  fillProductForm(productData) {
    if (!productData) {
      throw new Error('productData est requis pour fillProductForm');
    }
    
    cy.log('Remplissage du formulaire produit');
    
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
    cy.log('Soumission du formulaire');
    cy.get(productsLocators.submitBtn).click();
    cy.wait(1000);
    return this;
  }

  verifyProductInList(productName) {
    cy.log(`Vérification que "${productName}" est dans la liste`);
    cy.get(productsLocators.productsTable).should('contain', productName);
    return this;
  }
}

export default new ProductPage();