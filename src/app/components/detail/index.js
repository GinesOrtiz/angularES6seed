import angular from 'angular';
import {detailComponent} from './detail.component';

export const detail = angular
  .module('detail', [])
  .component('detail', detailComponent);