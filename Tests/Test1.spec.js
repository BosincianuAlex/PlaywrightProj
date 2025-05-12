const {test,expect}= require ("@playwright/test")
const {POManager} = require('../pageobjects/POManager.js')
const {userLoginState} = require("../utils/utils.js")
const dataset = JSON.parse(JSON.stringify(require("../utils/TestData.json")))

const url = "https:/www.emag.ro/";

test.beforeEach(async({page})=>{
    await page.goto(url)   
    
})

test.describe("Products catalogue filter test ", async() => {
    for(const data of dataset){
        test(`with ${data.product}`, async({page})=>{
            const {MainPage, Filter, Catalogue} = new POManager(page)            
            
            await MainPage.searchBar.fill(`${data.product}`)
            await MainPage.searchButton.click()         

            await Filter.setFilter(data.memory)       
            await page.waitForTimeout(1000)        
            await MainPage.listGridButton.click()   
            await page.waitForTimeout(1000)
            
            const count = await Catalogue.getItemsCount()
                        
            for(let i = 0 ; i < count; i++){            
                        
                let value= await Catalogue.items.nth(i).locator('p:has-text(\"Capacitate memorie: \")').textContent()  
                value = value.replace("Capacitate memorie:  ", "")
                expect(value, "at: " + await Catalogue.items.nth(i).locator(".card-v2-title").textContent()).toBe(data.memory)

            }    
        })
    }
})

test("User profile page test", async({browser})=>{
    
    //await userLoginState(browser)

    const context = await browser.newContext({storageState: '.utils/storageState.json'})    
    const page = await context.newPage()

    const {UserProfile} = new POManager(page)

    await page.goto("https://www.emag.ro/user/myaccount")       
       
    expect(UserProfile.orders.isVisible() && UserProfile.orders.isEnabled() ).toBeTruthy()
        
})

test("Block network request test", async({page}) => {
    //Block network request to check for pop up response
    await page.route ("https://www.emag.ro/favorites/lists/type/emag/product_ids?source=front",
        route => {route.abort()}
    )

    await page.goto("https://www.emag.ro")    
    expect(await page.locator(".ns-content").textContent()).toContain("Ceva nu a functionat. Te rugam sa incerci din nou.")
    
})


