const {test,expect,request}= require ("@playwright/test")
const {POManager} = require('../pageobjects/POManager.js')
const {userLoginState} = require("../utils/utils.js")

test("Block network request test", async({page}) => {
    //Block network request to check for pop up response
    await page.route ("https://www.emag.ro/favorites/lists/type/emag/product_ids?source=front",
        route => {route.abort()}
    )

    await page.goto("https://www.emag.ro")    
    expect(await page.locator(".ns-content").textContent()).toContain("Ceva nu a functionat. Te rugam sa incerci din nou.")
    
})
 

 test.only("Api test", async({request, browser}) => {
    const response = await request.post("https://auth.emag.ro/user/login", {
        data: {
            email: "",   
            password: ""
            }
    })
    
    const responseBody = await response.json()    
 })