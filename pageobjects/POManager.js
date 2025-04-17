const {MainPage} = require("./MainPage.js")
const {FilterPage} = require("./FilterPage.js")

class POManager{
    constructor(page){
        this.page = page
        this.MainPage = new MainPage(page)
        this.FilterPage = new FilterPage(page)
    }
}
module.exports = {POManager}