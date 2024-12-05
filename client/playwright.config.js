import defineConfig from'@playwright/test'

const PORT = process.env.PORT || 3003
const BASE_URL = `http://localhost:${PORT}`

export default defineConfig({
  testDir: './tests',
  webServer: {
    command: 'cd ../server && npm run start',
    port: PORT,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: BASE_URL,
    browserName: 'chromium',
    headless: true,
  },
})