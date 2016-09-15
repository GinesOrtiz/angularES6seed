import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngstorage from 'ngstorage';
import ngSanitize from 'angular-sanitize';

import './shared/general.scss';

import {appComponent} from './app.component';
import {auth} from './components/auth';
import {home} from './components/home';
import {shared} from './shared';
import {layouts} from './layouts';

const appConfig = ($locationProvider, $urlRouterProvider, $stateProvider)=> {
    $urlRouterProvider.otherwise(function () {
        window.location.href = '/login';
    });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $stateProvider
        .state('billy', {
            abstract: true,
            template: '<app></app>'
        });
};
appConfig.$inject = [
    '$locationProvider',
    '$urlRouterProvider',
    '$stateProvider'
];

export const billy = angular.module('billy', [
    uiRouter,
    ngSanitize,
    ngstorage.name,

    home.name,
    auth.name,
    shared.name,
    layouts.name
])
    .component('app', appComponent)
    .config(appConfig);
