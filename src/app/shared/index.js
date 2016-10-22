import angular from 'angular';
import {TranslateService, TranslateFilter} from './translateService';

export const shared = angular
  .module('shared', [])
  .factory('TranslateService', TranslateService)
  .filter('translate', TranslateFilter);

export {shared};