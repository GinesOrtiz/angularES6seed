class menuController {
    constructor() {
        this.menu = [
            {
                label: 'Home',
                state: 'billy.home'
            },
            {
                label: 'About us',
                state: 'billy.about'
            },
            {
                label: 'Login',
                state: 'billy.login',
                right: true
            }
        ]
    }
}

menuController.$inject = [];

export {menuController};