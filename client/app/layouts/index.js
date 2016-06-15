import angular from 'angular';
import {emptyLayoutDirective} from './empty';
import {securedLayoutDirective} from './secured';

export const layouts = angular.module('layouts', [])
    .directive('emptyLayout', emptyLayoutDirective)
    .directive('securedLayout', securedLayoutDirective);
    