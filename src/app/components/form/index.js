import angular from 'angular';
import {formController as controller} from './form.controller';
import template from './form.html';

export const form = angular
  .module('form', [])
  .component('formComponent', {
    controller,
    controllerAs: 'vm',
    template
  });