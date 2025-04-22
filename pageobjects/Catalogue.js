class Catalogue{

    constructor(page) {
        this.items = page.locator(".card-item")
    }

    async getItemsCount() {
        return await this.items.count()
    }
    async getItems() {
        const count = await this.getItemsCount()
        for(let i = 0 ; i < count; i++){
            console.log(i)
            const item = await this.items.nth(i).locator(".product-specs-label:has-text(\"Capacitate memorie: \")").textContent()
            return item
            

    }
    }
}



module.exports = {Catalogue}