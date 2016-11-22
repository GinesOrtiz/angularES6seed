import angular from 'angular';
import {movieCard} from './movieCard';

export const common = angular
  .module('common', [
    movieCard.name
  ]);