class Filter{

    constructor(page){
        this.memoryFilter= page.locator(".filter:has-text(\"Capacitate\")")
    }

    
    async setFilter(filterValue){
       await this.memoryFilter.locator(`a[data-name=\"${filterValue}\"]`).click();
    }
}

module.exports = {Filter}