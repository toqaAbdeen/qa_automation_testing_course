const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com/', // Set the base URL for all tests
    // viewportWidth: 550, // Set the viewport width for all tests -- show the mobile view
    // viewportHeight: 600, // Set the viewport height for all tests -- show the mobile view
    // watchForFileChanges: true, // Automatically re-run tests when files change, by default it is true, you can set it to false if you don't want to re-run the tests when files change
  },
});
