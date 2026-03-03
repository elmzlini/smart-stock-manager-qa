// support/locators/login.locators.js
export const loginLocators = {
  // Page login
  emailInput: '[data-cy="email-input"]',
  passwordInput: '[data-cy="password-input"]',
  submitButton: '[data-cy="login-submit"]',
  loginTitle: '[data-cy="login-title"]',
  errorMessage: '[data-cy="error-message"]',
  
  // Menu utilisateur (post-login)
  userMenuToggle: '[data-cy="user-menu-toggle"]',
  logoutBtn: '[data-cy="logout-btn"]',
  
  // Navigation sidebar
  sidebarDashboard: '[data-cy="sidebar-link-dashboard"]',
  sidebarProduits: '[data-cy="sidebar-link-produits"]',
  sidebarUtilisateurs: '[data-cy="sidebar-link-utilisateurs"]'
};