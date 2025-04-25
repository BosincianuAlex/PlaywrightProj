class Catalogue{

    constructor(page) {
        this.items = page.locator(".card-item:has(.row)")
    }

    async getItemsCount() {
        return await this.items.count()
    }
    async getItemsSpec() {
        const count = await this.getItemsCount()
        
        let items = []
        for(let i = 0 ; i < count; i++){            
                      
            let value= await this.items.nth(i).locator('p:has-text(\"Capacitate memorie: \")').textContent()  
            items.push(value.replace("Capacitate memorie:  ", ""))            
        }        
        return items
    }
}

module.exports = {Catalogue}