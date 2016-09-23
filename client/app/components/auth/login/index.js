import angular from 'angular';
import {loginComponent} from './login.component';

const loginConfig = ($stateProvider) => {
    'use strict';

    $stateProvider
        .state('billy.login', {
            url: '/login',
            auth: false,
            layout: 'empty',
            component: 'login'
        });
};
loginConfig.$inject = ['$stateProvider'];

const login = angular.module('login', [])
    .config(loginConfig)
    .component('login', loginComponent);

export {login};