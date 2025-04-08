const {MainPage} = require("./MainPage.js")

class POManager{
    constructor(page){
        this.page = page
        this.MainPage = new MainPage(page)
    }

}
module.exports = {POManager}