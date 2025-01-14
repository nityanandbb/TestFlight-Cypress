const { defineConfig } = require("cypress");
//@tags handle
const grep = require('@cypress/grep'); // Ensure this is @cypress/grep, not cypress-grep

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      grep(config); // Enable cypress-grep
      return config;
    },
  },
});
