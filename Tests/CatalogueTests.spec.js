const {expect}= require ("@playwright/test")
const dataset = JSON.parse(JSON.stringify(require("../utils/TestData.json")))
const { test } = require("../utils/utils").default

const url = "https:/www.emag.ro/";

test.beforeEach(async({page})=>{
    await page.goto(url)   
    
})

test.describe("Products catalogue filter test ", async() => {
    for(const data of dataset){
        test(`with ${data.product}`, async({mainPage,catalogue,filter,page})=>{                    
                        
            await mainPage.searchBar.fill(`${data.product}`)
            await mainPage.searchButton.click()         

            await filter.setFilter(data.memory)       
            await page.waitForTimeout(1000)        
            await mainPage.listGridButton.click()   
            await page.waitForTimeout(1000)
            
            const count = await catalogue.getItemsCount()
                        
            for(let i = 0 ; i < count; i++){            
                        
                let value= await catalogue.items.nth(i).locator('p:has-text(\"Capacitate memorie: \")').textContent()  
                value = value.replace("Capacitate memorie:  ", "")
                expect(value, "at: " + await catalogue.items.nth(i).locator(".card-v2-title").textContent()).toBe(data.memory)

            }  
              
        })
    }
})




