
const { defineConfig, } = require('@playwright/test');

const PORT = process.env.PORT || 5173;
module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  
  use: {
    baseURL: `http://localhost:${PORT}`
  },

  

  /* Run your local dev server before starting the tests */
   webServer: {
    command: 'cd ./server && npm run dev',
    url: `http://127.0.0.1:${PORT}`,
    reuseExistingServer: !process.env.CI,
  },
});

