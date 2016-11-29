import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngStorage from 'ngstorage';

import {home} from './components/home';
import {detail} from './components/detail';
import {shared} from './shared';
import {edit} from './components/edit';
import {common} from './components/common';
import {layouts} from './components/layouts';

import 'bootstrap/dist/css/bootstrap.min.css';

const appConfig = ($locationProvider) => {
  'use strict';
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
};

appConfig.$inject = ['$locationProvider'];

export const app = angular.module('app', [
  uiRouter,
  ngStorage.name,

  home.name,
  detail.name,
  edit.name,
  shared.name,
  common.name,
  layouts.name
])
  .config(appConfig);