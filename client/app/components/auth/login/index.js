import angular from 'angular';
import {loginComponent} from './login.component';

export const login = angular.module('login', [])
    .config(($stateProvider) => {
        $stateProvider
            .state('login', {
                url: '/login',
                auth: false,
                template: '<login></login>'
            });
    })
    .component('login', loginComponent);
