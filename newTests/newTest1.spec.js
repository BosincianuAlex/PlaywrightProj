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

        const items = await Catalogue.getItems()       
        console.log( items.length )   
        console.log( items )

        //await page.pause()

    })}