import angular from 'angular';
import {editComponent} from './edit.component';

const editConfig = ($stateProvider) => {
  'use strict';

  $stateProvider
    .state('edit', {
      url: '/detail/:id/edit',
      template: '<edit movie="$resolve.movie"></edit>',
      resolve: {
        movie: (SharedFactory, $stateParams) => {
          return SharedFactory.getDetail($stateParams.id)
            .then((data)=> {
              return data;
            });
        }
      }
    });
};

editConfig.$inject = ['$stateProvider'];

export const edit = angular
  .module('edit', [])
  .component('edit', editComponent)
  .config(editConfig);