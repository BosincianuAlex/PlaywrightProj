class Catalogue{

    constructor(page) {
        this.items = page.locator(".card-item")
    }

    async getItemsCount() {
        return await this.items.count()
    }
    async getItems() {
        const count = await this.getItemsCount()
        let items = []
        for(let i = 0 ; i < 5; i++){
            
            items.push( await this.items.nth(i).locator("h2 a").textContent())                    

        }
        return items
    }
}

module.exports = {Catalogue}