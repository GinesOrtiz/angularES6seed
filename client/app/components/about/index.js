import angular from 'angular';
import {aboutComponent} from './about.component';

const aboutConfig = ($stateProvider) => {
    'use strict';

    $stateProvider
        .state('billy.about', {
            url: '/about',
            auth: true,
            layout: 'mainMenu',
            component: 'about'
        });
};
aboutConfig.$inject = ['$stateProvider'];

const about = angular.module('about', [])
    .config(aboutConfig)
    .component('about', aboutComponent);

export {about};