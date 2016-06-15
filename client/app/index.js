import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngstorage from 'ngstorage';
import ngSanitize from 'angular-sanitize';

import './shared/general.scss';

import {appDirective} from './app.directive';
import {auth} from './components/auth';
import {home} from './components/home';
import {shared} from './shared';
import {layouts} from './layouts';

export const billy = angular.module('billy', [
        uiRouter,
        ngSanitize,
        ngstorage.name,

        home.name,
        auth.name,
        shared.name,
        layouts.name
    ])
    .directive('app', appDirective)
    .config(($locationProvider, $urlRouterProvider)=> {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });
