import template from './home.html';
import {homeController as controller} from './home.controller';

export const homeComponent = {
  template,
  controller,
  controllerAs: 'vm',
  bindings: {
    beers: '<'
  }
};