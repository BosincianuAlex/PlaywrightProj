class FilterPage{
    constructor(page){
        this.memoryFilter= page.locator("div[data-filter-id=\"7886\"]")
    }

    
    setFilter(filterValue){
        this.memoryFilter.locator(`a[data-name=\"${filterValue}\"]`).click();
    }
}

module.exports = {FilterPage}