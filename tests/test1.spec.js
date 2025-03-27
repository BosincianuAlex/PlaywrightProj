const {test,expect} = require('@playwright/test')

test('testA', async ({browser, page})=> {
    const list = ["Facebook", "Google", "Apple"]
    
    const window = await browser.newContext();
    //const page = await window.newPage()
    await page.goto("https://auth.emag.ro/user/login")

    await page.locator(".btn-primary.btn").click()
    await expect(page.locator(".help-block.text-left")).toHaveText("Câmp obligatoriu")

    const elements = await page.locator("form[name*=\"social_init_\"]").allTextContents();
    elements.forEach(element => console.log(element.trim()===list[elements.indexOf(element)]))    
    
});

test('testB', async({page})=>{
     await page.goto("https://www.pcgarage.ro/notebook-laptop/")
     await page.locator("li#filters_advanced_link").click();
     await page.locator("li#filters_adv_man61").click();
     //console.log(await page.locator("li#filters_adv_man61 input").isChecked());
     expect(page.locator("li#filters_adv_man61 input")).toBeChecked()

    const dropdown =await page.locator("#sortsel")
    dropdown.selectOption("wishlist_count")

    page.pause()
})



test.only('testC', async({page})=>{
    await page.goto("https://www.pcgarage.ro/ultrabook/filtre/procesor-frecventa-2500-pana-la-2999/memorie-capacitate-16/")  
 
    const products = page.locator("div[class=\"product_box_middle\"]")
    const count = await products.count()
    for (let i =0 ; i < count; i++){
           
        console.log(await products.nth(i).locator(" [class='product_box_name'] a").textContent())       
        //.product_box_specs_container ul:first-child
        console.log(await products.nth(i).locator(" [class=\"product_box_specs\"] li:nth-child(4)").textContent())
        //console.log(await products.nth(i).locator("li:has-text(\"Capacitate:\")").textContent()) 

        //elements.forEach(element => console.log(element.trim()===list[elements.indexOf(element)]))  

        expect(products.nth(i).locator("li:has-text(\"Capacitate:\")")).toHaveText(" Capacitate: 16 GB ")
        console.log("--------")


    }

})

// dinamyc search bar sugestion test, through .pressSequantilly() method
test('testD', async({page})=>{})