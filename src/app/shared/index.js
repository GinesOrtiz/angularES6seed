import angular from 'angular';
import {TranslateService, TranslateFilter} from './translateService';

const sharedConfig = () => {
    'use strict';

};
sharedConfig.$inject = [];

const shared = angular.module('shared', [])
    .factory('TranslationService', TranslateService)

    .filter('translate', TranslateFilter)

    .config(sharedConfig);

export {shared};