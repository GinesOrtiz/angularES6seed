import angular from 'angular';
import {SharedFactory} from './shared.factory';

export const shared = angular
  .module('shared', [])
  .factory('SharedFactory', SharedFactory);