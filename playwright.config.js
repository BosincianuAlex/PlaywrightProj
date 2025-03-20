// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  reporter: 'html',

  projects: [
    {
      name: 'chromium'
     
    },
  ]
});

