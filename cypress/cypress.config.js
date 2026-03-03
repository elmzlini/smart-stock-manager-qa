const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: "w6a2xw",
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    video: true,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    
    setupNodeEvents(on, config) {
      config.env = {
        ...config.env,
        apiUrl: process.env.API_URL || 'http://localhost:3001/api',
      };
      return config;
    }
  },
  
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true
  }
});