class MainPage{
    constructor(page){    
        this.searchBar = page.locator("input[type=\"search\"]")
        this.searchButton = page.locator(".searchbox-submit-button")
    }
}

module.exports = {MainPage}