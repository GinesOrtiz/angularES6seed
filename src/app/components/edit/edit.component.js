import {editController as controller} from './edit.controller';
import template from './edit.html';

export const editComponent = {
  template,
  controller,
  controllerAs: 'vm',
  bindings: {
    movie: '='
  }
};