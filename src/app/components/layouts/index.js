import angular from 'angular';
import {mainLayout} from './main';

export const layouts = angular
  .module('layouts', [])
  .component('mainLayout', mainLayout);