class Locators{

    constructor(page){
        this.products = page.locator("div[class=\"product_box_middle\"]")


    }

}
module.exports = {Locators}