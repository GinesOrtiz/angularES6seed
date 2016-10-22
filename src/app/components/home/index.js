import angular from 'angular';
import {homeComponent} from './home.component';
import {HomeService} from './home.service';

const homeConfig = ($stateProvider) => {
  'use strict';
  $stateProvider
    .state('app.home', {
      url: '/',
      template: '<home beers="beers"></home>',
      resolve: {
        beers: (HomeService) => {
          return HomeService.getAllBeers();
        }
      },
      controller: ($scope, beers) => {
        $scope.beers = beers;
      }
    });

};

homeConfig.$inject = ['$stateProvider'];

const home = angular
  .module('home', [])
  .config(homeConfig)
  .component('home', homeComponent)
  .factory('HomeService', HomeService);

export {home};