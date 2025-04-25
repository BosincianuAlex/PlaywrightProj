class Catalogue{

    constructor(page) {
        this.items = page.locator(".card-item:has(.row)")
    }

    async getItemsCount() {
        return await this.items.count()
    }

}

module.exports = {Catalogue}