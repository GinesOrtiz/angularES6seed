import angular from 'angular';
import {movieCardComponent} from './movieCard.component';

import './movieCard.scss';

export const movieCard = angular
  .module('movieCard', [])
  .component('movieCard', movieCardComponent);