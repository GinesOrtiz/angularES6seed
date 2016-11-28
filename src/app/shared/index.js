import angular from 'angular';
import {SharedFactory} from './shared.factory';

import './theme.scss';

export const shared = angular
  .module('shared', [])
  .factory('SharedFactory', SharedFactory);