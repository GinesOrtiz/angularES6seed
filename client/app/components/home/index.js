import angular from 'angular';
import {homeComponent} from './home.component';

export const home = angular.module('home', [])
    .config(($stateProvider) => {
        $stateProvider
            .state('home', {
                url: '/',
                auth: false,
                template: '<home></home>'
            });
    })
    .component('home', homeComponent);
