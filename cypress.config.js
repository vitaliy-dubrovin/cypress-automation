const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  viewportWidth: 1000, // Set the viewport width to 1920 pixels
  viewportHeight: 660, // Set the viewport height to 1080 pixels
});