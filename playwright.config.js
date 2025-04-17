// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './newTests',
 
  reporter :'html',

  use: 
    {
      name: 'chromium',
      //trace :'retain-on-failure'
    },
  
});

