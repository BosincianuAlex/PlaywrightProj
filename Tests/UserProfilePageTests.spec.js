const {test,expect}= require ("@playwright/test")
const {POManager} = require('../pageobjects/POManager.js')
const {userLoginState} = require("../utils/utils.js")


test.beforeAll(async({browser})=>{
    await userLoginState(browser)
})

test("Buttons test", async({browser})=>{

    const context = await browser.newContext({storageState: '.utils/storageState.json'})    
    const page = await context.newPage()

    const {UserProfile} = new POManager(page)

    await page.goto("https://www.emag.ro/user/myaccount")       
       
    expect(UserProfile.ordersButton.isVisible() && UserProfile.ordersButton.isEnabled() ).toBeTruthy()

})