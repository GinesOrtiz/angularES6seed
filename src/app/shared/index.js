import angular from 'angular';
import {SharedFactory} from './shared.factory';
import {TranslateFactory, TranslateFilter} from './translate';

import './theme.scss';

export const shared = angular
  .module('shared', [])
  .factory('SharedFactory', SharedFactory)
  .factory('TranslateFactory', TranslateFactory)
  .filter('translate', TranslateFilter);