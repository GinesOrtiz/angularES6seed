import angular from 'angular';
import {aboutComponent} from './about.component';

const aboutConfig = ($stateProvider) => {
  'use strict';

  $stateProvider
    .state('app.about', {
      url: '/about',
      exclude: [
        'user'
      ],
      redirectTo: {
        'anon': 'app.home',
        'user': 'app.login'
      },
      layout: 'mainMenu',
      component: 'about',
      resolve: {
        errorResolve: ($q, $timeout) => {
          let dfd = $q.defer();
          $timeout(()=> {
            dfd.resolve();
          }, 1000);
          return dfd.promise;
        }
      }
    });
};
aboutConfig.$inject = ['$stateProvider'];

const about = angular.module('about', [])
  .config(aboutConfig)
  .component('about', aboutComponent);

export {about};