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

test.only('testB', async({page})=>{
     await page.goto("https://www.pcgarage.ro/notebook-laptop/")
     await page.locator("li#filters_advanced_link").click();
     await page.locator("li#filters_adv_man61").click();
     //console.log(await page.locator("li#filters_adv_man61 input").isChecked());
     expect(page.locator("li#filters_adv_man61 input")).toBeChecked()

    const dropdown =await page.locator("#sortsel")
    dropdown.selectOption("wishlist_count")

    page.pause()
})

