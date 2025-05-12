const {test,expect,request}= require ("@playwright/test")
const {POManager} = require('../pageobjects/POManager.js')
const {userLoginState} = require("../utils/utils.js")


 

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