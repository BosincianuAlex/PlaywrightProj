class MainPage{
    constructor(page){    
        this.searchBar = page.locator("input[type=\"search\"]")
        this.searchButton = page.locator(".searchbox-submit-button")
        this.listGridButton = page.locator(".btn-group .em-list")
    }
}

module.exports = {MainPage}