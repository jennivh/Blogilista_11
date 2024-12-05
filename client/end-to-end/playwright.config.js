import { defineConfig } from '@playwright/test'


export default defineConfig({
  testDir: './tests',
  webServer: {
    command: 'cd ../client && npm run dev',
    port: PORT,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: `http://localhost:5173`,
    browserName: 'chromium',
    headless: true,
  },
})