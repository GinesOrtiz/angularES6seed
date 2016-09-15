import {Api} from './shared/api';

class AppController {
    constructor($scope, Api, $state) {
        this.$scope = $scope;
        this.Api = Api;
        //this.layout = 'empty';

        this.$scope.$on('$stateChangeSuccess', (event, toState) => {
            this.layout = toState.layout || 'empty';
            document.getElementsByTagName("body")[0].setAttribute('id',
                toState.name.replace(/\./g, '-'));
        });

        this.$scope.$on('$stateChangeStart', (event, toState, toParams, fromState) => {
            if (fromState.abstract) {
                this.layout = toState.layout || 'empty';
            }
            /*
             if (!this.Api.isAuth() && toState.auth === true) {
             event.preventDefault();
             $state.transitionTo('login');
             }
             else if (this.Api.isAuth() && toState.auth === false) {
             event.preventDefault();
             $state.transitionTo('home');
             }
             */
        });

        //this.$scope.$broadcast('$stateChangeSuccess', $state.current);
    }
}

AppController.$inject = [
    '$scope',
    'Api',
    '$state'
];

export {AppController};
