import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngstorage from 'ngstorage';
import ngSanitize from 'angular-sanitize';

import 'normalize.css/normalize.css';
import './shared/general.scss';

import {appComponent} from './app.component';
import {home} from './components/home';
import {detail} from './components/detail';
import {loader} from './components/common/loader';

const appConfig = ($urlRouterProvider, $stateProvider) => {
  'use strict';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      abstract: true,
      template: '<app></app>'
    });
};

appConfig.$inject = [
  '$urlRouterProvider',
  '$stateProvider'
];

const app = angular.module('app', [
  uiRouter,
  ngSanitize,
  ngstorage.name,

  home.name,
  detail.name,
  loader.name
])
  .component('app', appComponent)
  .config(appConfig);

export {app};