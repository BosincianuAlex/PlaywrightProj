import { Locator, Page } from "@playwright/test"


export class Catalogue{
    items: Locator

    constructor(page: Page ) {
        this.items = page.locator(".card-item:has(.row)")
        
    }

    async getItemsCount() {
        return await this.items.count()
    }

}

//module.exports = {Catalogue}