import { defineConfig } from '@playwright/test'


export default defineConfig({
  testDir: './tests',
  webServer: {
    command: 'cd ../../server && npm run start',
    port: 3001,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: `http://localhost:3001`,
    browserName: 'chromium',
    headless: true,
  },
})