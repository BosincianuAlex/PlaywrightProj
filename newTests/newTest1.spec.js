const {test,expect}= require ("@playwright/test")
const {POManager} = require('../pageobjects/POManager.js')
const dataset = JSON.parse(JSON.stringify(require("../utils/TestData.json")))

const url = "https:/www.emag.ro/";

for(const data of dataset){
    test(`test1 with ${data.product}`, async({page})=>{
        const {MainPage, Filter, Catalogue} = new POManager(page)
        await page.goto(url)
        
        await MainPage.searchBar.fill(`${data.product}`)
        await MainPage.searchButton.click()            

        await Filter.setFilter(data.memory)         
            
        await page.waitForTimeout(1000)        
          
        await MainPage.listGridButton.click()  
        
        await page.waitForTimeout(1000)
        
        const count = await Catalogue.getItemsCount()
        
        let items = []
        for(let i = 0 ; i < count; i++){            
                       
            let value= await Catalogue.items.nth(i).locator('p:has-text(\"memorie: \")').textContent()  
            value = value.replace("Capacitate memorie:  ", "")
            expect(value, "at: " + await Catalogue.items.nth(i).locator(".card-v2-title").textContent()).toBe(data.memory)

        }      

    })}