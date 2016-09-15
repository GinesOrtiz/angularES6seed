import angular from 'angular';
import {Api} from './api';
import {ApiInterceptor} from './apiInterceptor';

const sharedConfig = ($httpProvider) => {
    $httpProvider.interceptors.push('ApiInterceptor');
};
sharedConfig.$inject = ['$httpProvider'];

export const shared = angular.module('shared', [])
    .factory('Api', Api)
    .factory('ApiInterceptor', ApiInterceptor)
    .config(sharedConfig);

