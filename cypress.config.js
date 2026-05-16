const { defineConfig } = require("cypress");
const fs = require("fs-extra");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      on("before:run", async () => {
        await fs.remove("qa_cypress/myReport");
      });

      return config;
    },

    baseUrl: "https://www.saucedemo.com/",
    screenshotOnRunFailure: false,
    video: false,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "qa_cypress/myReport",
      overwrite: false,
      html: true,
      json: false,
    },
  },
});