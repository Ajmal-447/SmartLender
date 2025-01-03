// @ts-check
const { devices } = require('@playwright/test');
 
 
const config = {
  testDir: './tests',
  
 
  timeout:200*1000,
  expect:{
 
    timeout:90000
  },
 
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
 
    browserName : 'chromium',
    headless : false,
    screenshot : 'on',
    trace : 'on'
   
  },
 
 
 
 
 
};
 
module.exports = config;
// playwright.config.js

