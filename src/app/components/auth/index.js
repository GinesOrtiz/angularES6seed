import angular from 'angular';
import {login} from './login';
import {AuthService} from './auth.service';
import {AuthInterceptor} from './auth.interceptor';

const AuthConfig = ($httpProvider) => {
    'use strict';
    $httpProvider.interceptors.push('AuthInterceptor');
};
AuthConfig.$inject = ['$httpProvider'];

const auth = angular
    .module('auth', [
        login.name
    ])
    .factory('AuthService', AuthService)
    .factory('AuthInterceptor', AuthInterceptor)
    .config(AuthConfig);

export {auth};