import angular from 'angular';
import {homeComponent} from './home.component';

const homeConfig = ($stateProvider) => {
  'use strict';

  $stateProvider
    .state('home', {
      url: '/',
      template: '<home movies="$resolve.movies"></home>',
      resolve: {
        movies: (SharedFactory)=> {
          return SharedFactory.getDiscover()
            .then((mv)=> {
              return mv.results;
            });
        }
      }
    });
};
homeConfig.$inject = ['$stateProvider'];

export const home = angular
  .module('home', [])
  .config(homeConfig)
  .component('home', homeComponent);