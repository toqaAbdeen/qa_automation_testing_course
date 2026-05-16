const { defineConfig } = require("cypress");
const fs = require("fs-extra");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",

    async setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  const bundler = createBundler({
    plugins: [createEsbuildPlugin(config)],
  });

  on("file:preprocessor", bundler);

  on("before:run", async () => {
    await fs.remove("qa_cypress/myReport");
  });

  return config;
},

    baseUrl: "https://www.saucedemo.com/",

    screenshotOnRunFailure: false,
    screenshotsFolder: "qa_cypress/screenshots",
    trashAssetsBeforeRuns: false,
    video: false,
    videosFolder: "qa_cypress/videos",

    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "qa_cypress/myReport",
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss",
    },
  },
});