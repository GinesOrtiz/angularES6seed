class AppController {
    constructor($scope, AuthService, $state) {
        this.$scope = $scope;
        this.AuthService = AuthService;
        this.$state = $state;

        const stateStart = (event, toState) => {
            'use strict';

            if (toState.auth) {
                if (!this.AuthService.isAuth()) {
                    event.preventDefault();
                    this.$state.transitionTo('billy.home');
                }
            }
        };

        const stateSuccess = (event, toState, toParams, fromState) => {
            'use strict';

            if (fromState.abstract) {
                stateStart(event, toState);
            }

            this.layout = toState.layout || 'empty';
            document.getElementsByTagName('body')[0]
                .setAttribute('id', toState.name.replace(/\./g, '-'));
        };

        $scope.$on('$stateChangeStart', stateStart);
        $scope.$on('$stateChangeSuccess', stateSuccess);
    }
}

AppController.$inject = [
    '$scope',
    'AuthService',
    '$state'
];

export {AppController};
