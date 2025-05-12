const {MainPage} = require("./MainPage.js")
const {Filter} = require("./Filter.js")
const {Catalogue} = require("./Catalogue.js")
const {UserProfile} = require("./UserProfile.js")

class POManager{
    constructor(page){
        this.page = page
        this.MainPage = new MainPage(page)
        this.Catalogue = new Catalogue(page)
        this.Filter = new Filter(page)
        this.UserProfile = new UserProfile(page)
    }
}
module.exports = {POManager}