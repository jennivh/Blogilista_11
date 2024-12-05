
const { defineConfig, } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  
  use: {
    baseURL: `http://localhost:3001`
  },

  

  /* Run your local dev server before starting the tests */
   webServer: {
    url: `http://127.0.0.1:3001`,
    reuseExistingServer: !process.env.CI,
  },
});

