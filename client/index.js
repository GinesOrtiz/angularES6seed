import angular from 'angular';
import {billy} from './app';

angular.element(document)
    .ready(() => {
        'use strict';

        angular.bootstrap(document, [billy.name]);
    });