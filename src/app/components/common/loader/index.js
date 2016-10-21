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

const loaderRun = (TranslationService) => {
  'use strict';
  TranslationService.addLang('loader', {en: langEN});
};

loaderRun.$inject = ['TranslationService'];

export const loader = angular.module('loader', [])
  .component('loader', loaderComponent)
  .factory('LoaderService', LoaderService)
  .run(loaderRun);