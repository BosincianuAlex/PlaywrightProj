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

module.exports = {userLoginState}

