import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngstorage from 'ngstorage';
import ngSanitize from 'angular-sanitize';

import 'normalize.css/normalize.css';
import './shared/general.scss';

import {home} from './components/home';

const appConfig = ($urlRouterProvider) => {
  'use strict';
  $urlRouterProvider.otherwise('/');
};

appConfig.$inject = ['$urlRouterProvider'];

const app = angular.module('app', [
    uiRouter,
    ngSanitize,
    ngstorage.name
])
  .config(appConfig);
  uiRouter,
  ngSanitize,
  ngstorage.name,

  home.name
]);

export {app};