import template from './detail.html';
import {detailController as controller} from './detail.controller';

export const detailComponent = {
  template,
  controller,
  controllerAs: 'vm',
  bindings: {
    beer: '<'
  }
};