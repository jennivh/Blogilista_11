
const { defineConfig, } = require('@playwright/test');


module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  
  use: {
    baseURL: 'http://localhost:5173'
  },

  

  /* Run your local dev server before starting the tests */
   webServer: {
    command: 'cd ./server && npm run dev',
    url: 'http://127.0.0.1:5173',
    reuseExistingServer: !process.env.CI,
  },
});

