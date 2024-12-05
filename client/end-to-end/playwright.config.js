import { defineConfig } from '@playwright/test'

const PORT = process.env.PORT || 3003

export default defineConfig({
  testDir: './tests',
  webServer: {
    command: 'cd ../../server && npm run start:test',
    port: PORT,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: `http://localhost:${PORT}`,
    browserName: 'chromium',
    headless: true,
  },
})