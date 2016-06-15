import angular from 'angular';
import {loginDirective} from './login.directive';

export const login = angular.module('login', [])
    .config(($stateProvider) => {
        $stateProvider
            .state('login', {
                url: '/login',
                auth: false,
                template: '<login></login>'
            });
    })
    .directive('login', loginDirective);
