import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {home} from './components/home';
import {detail} from './components/detail';
import {shared} from './shared';
import {common} from './components/common';

export const app = angular.module('app', [
  uiRouter,

  home.name,
  detail.name,
  shared.name,
  common.name
]);