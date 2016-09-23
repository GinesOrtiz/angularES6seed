import angular from 'angular';
import {loginComponent} from './login.component';

const loginConfig = ($stateProvider) => {
    $stateProvider
        .state('billy.login', {
            url: '/login',
            auth: false,
            layout: 'empty',
            component: 'login'
        });
};
loginConfig.$inject = ['$stateProvider'];

export const login = angular.module('login', [])
    .config(loginConfig)
    .component('login', loginComponent);
