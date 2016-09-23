class menuController {
    constructor() {
        this.menu = [
            {
                label: 'Home',
                state: 'billy.home'
            },
            {
                label: 'About [secured path]',
                state: 'billy.about'
            },
            {
                label: 'Login',
                state: 'billy.login',
                right: true
            }
        ];
    }
}

menuController.$inject = [];

export {menuController};