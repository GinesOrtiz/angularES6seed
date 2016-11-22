import angular from 'angular';
import {homeComponent} from './home.component';

export const home = angular
  .module('home', [])
  .component('home', homeComponent);