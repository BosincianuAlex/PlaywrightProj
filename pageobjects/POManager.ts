import { MainPage } from "./MainPage.js"
import { Filter } from "./Filter.js"
import { Catalogue } from "./Catalogue.js"
import { UserProfile } from "./UserProfile.js"
import { type Page } from "@playwright/test"

export class POManager{
    
    MainPage: MainPage
    Catalogue: Catalogue;
    Filter: Filter
    UserProfile: UserProfile

    constructor(page: Page){
        
        this.MainPage = new MainPage(page)
        this.Catalogue = new Catalogue(page)
        this.Filter = new Filter(page)
        this.UserProfile = new UserProfile(page)
    }
}
