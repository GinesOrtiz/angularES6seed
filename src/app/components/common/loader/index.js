import {loaderController as controller} from './loader.controller';
import {LoaderService} from './loader.service';
import template from './loader.html';
import langEN from './lang/en.json';

import './loader.scss';

const loaderComponent = {
  template,
  controller,
  controllerAs: 'vm'
};

export const loader = angular.module('loader', [])
  .component('loader', loaderComponent)
  .factory('LoaderService', LoaderService);