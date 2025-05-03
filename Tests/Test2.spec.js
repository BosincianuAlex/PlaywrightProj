const {test,expect,request}= require ("@playwright/test")
const {POManager} = require('../pageobjects/POManager.js')
const {userLoginState} = require("../utils/utils.js")


test("Login test", async({browser}) => {     

    await userLoginState(browser)

    const context = await browser.newContext({storageState: '.utils/storageState.json'})    
    const page = await context.newPage()

    await page.goto("https://auth.emag.ro/user/login")      
 
 })
 test.only("Api test", async({request}) => {
    const response = await request.post("https://auth.emag.ro/user/login", {
        data: {
            email: "",   
            password: ""
            }
    })
    console.log(response.status())

 })