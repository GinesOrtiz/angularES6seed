import angular from 'angular';
import {emptyLayoutComponent} from './empty';
import {menuBarLayoutComponent} from './menuBar';

const layouts = angular.module('layouts', [])
    .component('emptyLayout', emptyLayoutComponent)
    .component('menuBarLayout', menuBarLayoutComponent);

export {layouts};