class UserProfile{
    constructor(page){
        this.userBar = page.locator(".account-sidebar-user-content")
        this.userMenu = page.locator(".user-account-menu-box")

        this.ordersButton = this.userBar.locator(".feature-icon-order_history")

    }
}

module.exports = {UserProfile}