import {searchComponent as controller} from './search.controller';
import template from './search.html';

export const searchComponent = {
  template,
  controller,
  controllerAs: 'vm',
  bindings: {
    movies: '='
  }
};