import angular from 'angular';
import {searchComponent} from './search.component';

const searchConfig = ($stateProvider) => {
  'use strict';

  $stateProvider
    .state('search', {
      url: '/search/:q/:page',
      template: '<search movies="$resolve.movies"></search>',
      resolve: {
        movies: (SharedFactory, $stateParams)=> {
          return SharedFactory.searchMovies($stateParams.q, $stateParams.page || 1)
            .then((mv)=> {
              return mv.results;
            });
        }
      }
    });
};
searchConfig.$inject = ['$stateProvider'];

export const search = angular
  .module('search', [])
  .config(searchConfig)
  .component('search', searchComponent);