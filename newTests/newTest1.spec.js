const {test}= require ("@playwright/test")
const {POManager} = require('../pageobjects/POManager.js')
const dataset = JSON.parse(JSON.stringify(require("../utils/TestData.json")))

const url = "https:/www.emag.ro/";

for(const data of dataset){
    test(`test1 with ${data.product}`, async({page})=>{
        const {MainPage, FilterPage} = new POManager(page)
        await page.goto(url)
        
        await MainPage.searchBar.fill(`${data.product}`)
        await MainPage.searchButton.click()
        
        await FilterPage.setFilter(data.memory)

        await page.pause()

    })}