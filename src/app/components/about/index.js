import angular from 'angular';
import {aboutComponent} from './about.component';

const aboutConfig = ($stateProvider) => {
    'use strict';

    $stateProvider
        .state('app.about', {
            url: '/about',
            exclude: ['user', 'anon'],
            redirectTo: {
                'anon': 'app.home',
                'user': 'app.login'
            },
            layout: 'mainMenu',
            component: 'about'
        });
};
aboutConfig.$inject = ['$stateProvider'];

const about = angular.module('about', [])
    .config(aboutConfig)
    .component('about', aboutComponent);

export {about};