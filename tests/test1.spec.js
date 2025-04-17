const {test,expect,request} = require('@playwright/test')
const {POManager} = require('./POManager.js')
const dataset = JSON.parse(JSON.stringify(require("../utils/TestData.json")))

const url = "https://www.pcgarage.ro/";
const userAgent =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36";

test.describe("with user agent", () => {    
    test.use({userAgent});

    for(const data of dataset){
        test(`testA with ${data.product}`, async({page})=>{
            const locators = new POManager(page)
            await page.goto(url)

            await locators.MainPage.searchInput.fill(data.product)
            await page.keyboard.press("Enter")
            

        })
    }    

    test('testB', async({page})=>{
        await page.goto("https://www.pcgarage.ro/notebook-laptop/")
        await page.locator("li#filters_advanced_link").click();
        await page.locator("li#filters_adv_man61").click();
        //console.log(await page.locator("li#filters_adv_man61 input").isChecked());
        expect(page.locator("li#filters_adv_man61 input")).toBeChecked()

        const dropdown = page.locator("#sortsel")
        dropdown.selectOption("wishlist_count")
        
    })
    for(const data of dataset){
        test(`testC with ${data.product}`, async({page})=>{
            const locators = new POManager(page)
            await page.goto(url)

            await locators.MainPage.searchInput.fill(data.product)
            page.getByRole("button", { name: "Cauta" }).click()          

            await page.pause

            const products = locators.MainPage.products
            const count = await products.count()
            for (let i =0 ; i < count; i++){
                
                console.log(await products.nth(i).locator(" [class='product_box_name'] a").textContent())       
                //.product_box_specs_container ul:first-child
                console.log(await products.nth(i).locator(" [class=\"product_box_specs\"] li:nth-child(4)").textContent())
                //console.log(await products.nth(i).locator("li:has-text(\"Capacitate:\")").textContent()) 

                //elements.forEach(element => console.log(element.trim()===list[elements.indexOf(element)]))  

                await expect(products.nth(i).locator("li:has-text(\"Capacitate:\")")).toHaveText(" Capafsefscitate: 16 GB ")
                console.log("--------")

                
                
            }
        })
    }
    // test pop up
    test("testE", async({page})=>{
        await page.goto(url)
        page.on("dialog", async dialog => {        
            expect(dialog.message()).toBe("Introdu in campul de cautare denumirea sau codul produsului cautat")
            dialog.accept();})
        await page.locator("button[id=\"sf2\"]").click()  
        
    })
    // hover pop up test
    test('testD', async({page})=>{
        await page.goto(url)
        const elements = page.locator("#top_menu li");
        const count = await elements.count()    
            
        for ( let i=0; i < count; i++){
            await elements.nth(i).hover()
            expect(await elements.nth(i).locator("[id*='subcats_']").isVisible()).toBeTruthy()        
            }   

    })
    
   
})

