import angular from 'angular';
import {aboutComponent} from './about.component';

const aboutConfig = ($stateProvider) => {
    $stateProvider
        .state('billy.about', {
            url: '/about',
            auth: false,
            layout: 'mainMenu',
            component: 'about'
        });
};
aboutConfig.$inject = ['$stateProvider'];

export const about = angular.module('about', [])
    .config(aboutConfig)
    .component('about', aboutComponent);
