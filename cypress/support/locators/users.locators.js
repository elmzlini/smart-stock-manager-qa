// cypress/support/locators/users.locators.js
export const usersLocators = {
  // Page
  page: '[data-cy="users-page"]',
  
  // Header
  header: '[data-cy="users-header"]',
  title: '[data-cy="users-title"]',
  subtitle: '[data-cy="users-subtitle"]',
  addUserBtn: '[data-cy="add-user-btn"]',
  
  // Stats
  statsContainer: '[data-cy="stats-container"]',
  statTotal: '[data-cy="stat-total"]',
  statAdmins: '[data-cy="stat-admins"]',
  statStaff: '[data-cy="stat-staff"]',
  statUsers: '[data-cy="stat-users"]',
  statActive: '[data-cy="stat-active"]',
  
  // Search
  searchSection: '[data-cy="search-section"]',
  searchInput: '[data-cy="search-section"] > .relative > [data-cy="search-input"]',
  
  // Table
  tableContainer: '[data-cy="users-table-container"]',
  table: '[data-cy="users-table"]',
  tableHeader: '[data-cy="table-header"]',
  tableBody: '[data-cy="table-body"]',
  
  // Table headers
  thUser: '[data-cy="th-user"]',
  thContact: '[data-cy="th-contact"]',
  thRole: '[data-cy="th-role"]',
  thStatus: '[data-cy="th-status"]',
  thCreated: '[data-cy="th-created"]',
  thActions: '[data-cy="th-actions"]',
  
  // User rows (dynamique, utiliser avec contains)
  userRow: (id) => `[data-cy="user-row-${id}"]`,
  userName: (id) => `[data-cy="user-name-${id}"]`,
  userEmail: (id) => `[data-cy="user-email-${id}"]`,
  userPhone: (id) => `[data-cy="user-phone-${id}"]`,
  userRole: (id) => `[data-cy="user-role-${id}"]`,
  userStatus: (id) => `[data-cy="user-status-${id}"]`,
  toggleStatus: (id) => `[data-cy="toggle-status-${id}"]`,
  userCreated: (id) => `[data-cy="user-created-${id}"]`,
  userActions: (id) => `[data-cy="user-actions-${id}"]`,
  editUser: (id) => `[data-cy="edit-user-${id}"]`,
  deleteUser: (id) => `[data-cy="delete-user-${id}"]`
};