import angular from 'angular';
import {login} from './login';

export const auth = angular.module('auth', [
    login.name
]);
    