import angular from 'angular';
import {homeDirective} from './home.directive';

export const home = angular.module('home', [])
    .config(($stateProvider) => {
        $stateProvider
            .state('home', {
                url: '/',
                auth: true,
                template: '<home></home>'
            });
    })
    .directive('home', homeDirective);
