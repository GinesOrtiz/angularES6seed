class AppController {
    constructor($scope, AuthService, $state) {
        this.$scope = $scope;
        this.AuthService = AuthService;
        this.$state = $state;
        this.user = AuthService.getUser();

        const stateStart = (event, toState) => {
            'use strict';

            if (toState.exclude) {
                if (toState.exclude.indexOf(this.user.role) > -1) {
                    event.preventDefault();
                    this.$state.transitionTo(toState.redirectTo || 'app.home');
                }
            }
            if (toState.allow) {
                if (toState.allow.indexOf(this.user.role) < 0) {
                    event.preventDefault();
                    this.$state.transitionTo(toState.redirectTo || 'app.home');
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
