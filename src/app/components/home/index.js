import angular from 'angular';
import {homeComponent} from './home.component';

const homeConfig = ($stateProvider) => {
    'use strict';

    $stateProvider
        .state('app.home', {
            url: '/',
            auth: false,
            layout: 'mainMenu',
            component: 'homeComponent',
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
    .component('homeComponent', homeComponent);

export {home};