import angular from 'angular';
import {Api} from './api';
import {ApiInterceptor} from './apiInterceptor';

export const shared = angular.module('shared', [])
    .factory('Api', Api)
    .factory('ApiInterceptor', ApiInterceptor)
    .config(sharedConfig);

function sharedConfig($httpProvider) {
    $httpProvider.interceptors.push('ApiInterceptor');
}
