import angular from 'angular';
import {loginComponent} from './login.component';

const loginConfig = ($stateProvider) => {
    'use strict';

    $stateProvider
        .state('app.login', {
            url: '/login',
            layout: 'empty',
            component: 'login'
        });
};
loginConfig.$inject = ['$stateProvider'];

const login = angular.module('login', [])
    .config(loginConfig)
    .component('login', loginComponent);

export {login};