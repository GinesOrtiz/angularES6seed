import {Api} from './shared/api';

class AppController {
    constructor($scope, Api, $state, $timeout) {
        this.$scope = $scope;
        this.Api = Api;
        this.$state = $state;
        this.$timeout = $timeout;
        this.layout = this.$state.$current.layout;

        $scope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams)=> {

        });

        $scope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams)=> {
            this.layout = this.$state.$current.layout || 'empty';
            document.getElementsByTagName("body")[0].setAttribute('id',
                this.$state.$current.name.replace(/\./g, '-'));
        });
    }
}

AppController.$inject = [
    '$scope',
    'Api',
    '$state',
    '$timeout'
];

export {AppController};
