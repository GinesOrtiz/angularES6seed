import angular from 'angular';
import {homeComponent} from './home.component';

const homeConfig = ($stateProvider) => {
    'use strict';

    $stateProvider
        .state('billy.home', {
            url: '/',
            auth: false,
            layout: 'mainMenu',
            component: 'home',
            resolve: {
                resolveExample: ()=> {
                    return 'resolveExampleContent';
                }
            }
        });
};
homeConfig.$inject = ['$stateProvider'];

const home = angular.module('home', [])
    .config(homeConfig)
    .component('home', homeComponent);

export {home};