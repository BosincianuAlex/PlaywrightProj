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

        await MainPage.listGridButton.click()
        //await page.waitForSelector("#card_grid") 
        await page.pause()
        
        await page.waitForLoadState('domcontentloaded')

        Filter.setFilter(data.memory) 

        console.log(await Catalogue.getItemsCount())
        console.log(await Catalogue.getItems())

        await page.pause()

    })}