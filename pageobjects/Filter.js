class Filter{

    constructor(page){
        this.memoryFilter= page.locator("div[data-filter-id=\"7886\"]")
    }

    
    async setFilter(filterValue){
       await this.memoryFilter.locator(`a[data-name=\"${filterValue}\"]`).click();
    }
}

module.exports = {Filter}