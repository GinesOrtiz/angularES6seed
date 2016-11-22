import angular from 'angular';

import {home} from './components/home';
import {detail} from './components/detail';
import {shared} from './shared';

export const app = angular.module('app', [
  home.name,
  detail.name,
  shared.name
]);