const {POManager} = require('../pageobjects/POManager.js')
const {test:base} = require('@playwright/test')

async function  userLoginState(browser) {
  // Simulate user login and save the storage state
  const context = await browser.newContext()
  const page = await context.newPage()
  await page.goto("https://auth.emag.ro/user/login");
  await page.locator("#user_login_email").fill("")
  await page.locator("#user_login_continue").click()
  await page.locator("#user_login_password").fill("")
  await page.locator("#user_login_continue").click()
  await page.waitForNavigation({ waitUntil: 'load' });

  await context.storageState({ path: '.utils/storageState.json' })
  
}

 const test = base.extend({

    mainPage:async({page}, use) =>{
        const {MainPage} = new POManager(page)
        await use(MainPage)
    },
        filter:async({page}, use) =>{
        const {Filter} = new POManager(page)
        await use(Filter)
    },
        catalogue:async({page}, use) =>{
        const {Catalogue} = new POManager(page)
        await use(Catalogue)
    }
})
module.exports = {userLoginState,test}


