// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './Tests',
 
  reporter :'html',

  use: 
    {
      name: 'chromium',
      //trace :'retain-on-failure'
    },
  
});

