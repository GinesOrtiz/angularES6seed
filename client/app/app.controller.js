import {Api} from './shared/api';

class AppController {
    constructor($scope, Api, $state) {
        this.$scope = $scope;
        this.Api = Api;
        this.isSecuredView = false;

        // We successfully changed the state
        this.$scope.$on('$stateChangeSuccess', (event, toState) => {
            // Set the isSecured depending on the state auth
            this.isSecuredView = toState.auth;
            // Add an id to the body depending of the state name (dots will be converted to dashes)
            document.getElementsByTagName("body")[0].setAttribute('id', 'billy-' + toState.name.replace(/\./g, '-'));
        });

        // We requested a new state but we are not yet in there
        this.$scope.$on('$stateChangeStart', (event, toState, toParams, fromState) => {
            // If we came from an abstract state we asign in the fly the isSecuredView from the state auth
            if (fromState.abstract) {
                this.isSecuredView = toState.auth;
            }
            
            // We are not authorised and trying to go into a secured state
            if (!this.Api.isAuth() && toState.auth === true) {
                // Prevent the state event change
                event.preventDefault();
                // Redirect the user to login
                $state.transitionTo('login');
            }
            // We are  authorised and trying to go into a non secured state
            else if (this.Api.isAuth() && toState.auth === false) {
                event.preventDefault();
                // Redirect to home
                $state.transitionTo('home');
            }
        });
    }
}

AppController.$inject = ['$scope', 'Api', '$state'];

export {AppController};
