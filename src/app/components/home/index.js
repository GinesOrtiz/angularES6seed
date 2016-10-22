import angular from 'angular';
import {homeComponent} from './home.component';

const homeConfig = ($stateProvider) => {
  'use strict';
  $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>'
    });

};

homeConfig.$inject = ['$stateProvider'];

const home = angular
  .module('home', [])
  .config(homeConfig)
  .component('home', homeComponent);

export {home};