import angular from 'angular';
import {detailComponent} from './detail.component';

const detailConfig = ($stateProvider) => {
  'use strict';

  $stateProvider
    .state('detail', {
      url: '/detail/:id',
      template: '<detail movie="$resolve.movie" similar="$resolve.similar"></detail>',
      resolve: {
        movie: (SharedFactory, $stateParams) => {
          return SharedFactory.getDetail($stateParams.id)
            .then((data)=> {
              return data;
            });
        },
        similar: (SharedFactory, $stateParams) => {
          return SharedFactory.getSimilarMovies($stateParams.id)
            .then((data)=> {
              return data;
            });
        }
      }
    });
};

detailConfig.$inject = ['$stateProvider'];

export const detail = angular
  .module('detail', [])
  .component('detail', detailComponent)
  .config(detailConfig);