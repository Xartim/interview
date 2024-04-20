const { defineConfig } = require('cypress');

module.exports = defineConfig({
  env: {
    testing: '/testing/',
  },
  e2e: {
    baseUrl: 'https://automationpanda.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
