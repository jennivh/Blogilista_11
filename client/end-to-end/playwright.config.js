import { defineConfig } from '@playwright/test'


export default defineConfig({
  testDir: './tests',
  webServer: {
    command: 'cd .. && npm run dev',
    port: 5173,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: `http://localhost:5173`,
    browserName: 'chromium',
    headless: true,
  },
})