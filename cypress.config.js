const { defineConfig } = require("cypress");
const fs = require('fs-extra'); // Import the fs-extra module to handle file operations

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      on('before:run', async () => {
        await fs.remove('qa_cypress/myReport'); // Remove the existing report directory before each test run
      });
    },
    baseUrl: 'https://www.saucedemo.com/', // Set the base URL for all tests
    // viewportWidth: 550, // Set the viewport width for all tests -- show the mobile view
    // viewportHeight: 600, // Set the viewport height for all tests -- show the mobile view
    // watchForFileChanges: true, // Automatically re-run tests when files change, by default it is true, you can set it to false if you don't want to re-run the tests when files change

    screenshotOnRunFailure: false, // Automatically take a screenshot when a test fails, by default it is true, you can set it to false if you don't want to take a screenshot when a test fails
    screenshotsFolder: 'qa_cypress/screenshots', // Set the folder where screenshots will be saved, by default it is 'qa_cypress/screenshots'
    trashAssetsBeforeRuns: false, // Do not delete screenshots and videos before each run, by default it is true, you can set it to false if you don't want to delete screenshots and videos before each run
    video: false, // Automatically record a video of the test run, by default it is true, you can set it to false if you don't want to record a video of the test run
    videosFolder: 'qa_cypress/videos', // Set the folder where videos will be saved, by default it is 'qa_cypress/videos'
    videoCompression: 32, // Set the video compression level, by default it is 32, you can set it to a higher value for better quality or a lower value for smaller file size, between 0 and 51, where 0 is no compression and 51 is maximum compression, 0 very high quality and large file size, 51 very low quality and small file size, 32 is a good balance between quality and file size
    reporter: "mochawesome",
      reporterOptions: {
        reportDir: "qa_cypress/myReport", // where to save in directory
        overwrite: false,
        html: true,
        json: false,
        timestamp: "mmddyyyy_HHMMss"
    }

  },
});
