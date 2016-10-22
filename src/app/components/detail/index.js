import angular from 'angular';
import {detailComponent} from './detail.component';
import {DetailService} from './detail.service';

const detailConfig = ($stateProvider) => {
  'use strict';
  $stateProvider
    .state('app.detail', {
      url: '/:id',
      template: '<detail beer="beer"></detail>',
      resolve: {
        beer: (DetailService, $stateParams) => {
          return DetailService.getBeer($stateParams.id);
        }
      },
      controller: ($scope, beer) => {
        $scope.beer = beer;
      }
    });

};

detailConfig.$inject = ['$stateProvider'];

const detail = angular
  .module('detail', [])
  .config(detailConfig)
  .component('detail', detailComponent)
  .factory('DetailService', DetailService);

export {detail};