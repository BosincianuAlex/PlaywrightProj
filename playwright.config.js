// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
 

  projects: [
    {
      name: 'chromium',
      
    },
  ]
});

