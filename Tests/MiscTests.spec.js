const {test,expect,request}= require ("@playwright/test")

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
    
    const json = JSON.parse(JSON.stringify(response.headers()))
    let token = json["set-cookie"].split(" ")
    let userID= (token[0].match(/=(.*?);/)[1])
    let ltuid= (token[10].match(/=(.*?);/)[1])
    let SSID= (token[20].match(/=(.*?);/)[1])
    console.log(userID+" " + ltuid + " " + SSID)

    
 })