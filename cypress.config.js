const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    video: true,
    screenshotOnRunFailure: true,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },
  },
  
  // Reporter Mochawesome
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: true,
    json: true,
    timestamp: 'yyyy-mm-dd-HH-MM-ss',
    charts: true,
    code: false,
    inline: true,
    saveAll: true,
    reportFilename: 'rapport-[status]-[datetime]',
    reportTitle: 'Rapport des Tests - Smart Stock Manager',
    reportPageTitle: 'Tests Automatisés'
  }
});