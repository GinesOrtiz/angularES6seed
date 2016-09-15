import angular from 'angular';
import {emptyLayoutComponent} from './empty';
import {menuBarLayoutComponent} from './menuBar';

export const layouts = angular.module('layouts', [])
    .component('emptyLayout', emptyLayoutComponent)
    .component('menuBarLayout', menuBarLayoutComponent);
    