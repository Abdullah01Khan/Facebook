const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    baseUrl: "http://automationpractice.pl/index.php",
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*']
  },
});