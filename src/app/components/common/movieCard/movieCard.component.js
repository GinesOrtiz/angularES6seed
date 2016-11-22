import template from './movieCard.html';
import {movieCardController as controller} from './movieCard.controller';

export const movieCardComponent = {
  template,
  controller,
  controllerAs: 'vm',
  bindings: {
    movie: '='
  }
};

