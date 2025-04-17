class MainPage{

    constructor(page){
        this.products = page.locator("div[class=\"product_box_middle\"]")
        this.searchInput = page.locator("input[id=\"searchac\"]")

    }

}
module.exports = {MainPage}