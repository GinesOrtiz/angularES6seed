class menuController {
    constructor() {
        this.menu = [
            {
                label: 'Home',
                state: 'app.home'
            },
            {
                label: 'About [secured path]',
                state: 'app.about'
            },
            {
                label: 'Login',
                state: 'app.login',
                right: true
            }
        ];
    }
}

menuController.$inject = [];

export {menuController};