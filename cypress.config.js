const { defineConfig } = require("cypress");
// const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");
module.exports = defineConfig({
  e2e: {
    specPattern: [
      'cypress/e2e/spec1.cy.js',
      'cypress/e2e/spec.cy.js',

      // 'cypress/integration/second_spec.js',
      // 'cypress/integration/third_spec.js'
    ],
    setupNodeEvents(on, config) {
      allureCypress(on, {
        resultsDir: "./allure-results",
      });
      return config;
      // implement node event listeners here
    },
  },
});
