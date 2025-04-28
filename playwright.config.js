const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests/e2e',
  timeout: 60000, 
  expect: {
    timeout: 10000  
  },
  use: {
    baseURL: 'https://stavmatityahu.github.io/Stav-DevOps-Project/',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    viewport: { width: 1280, height: 720 },
    navigationTimeout: 30000,
  },

  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    }
  ],
});