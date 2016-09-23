import angular from 'angular';
import {homeComponent} from './home.component';

const homeConfig = ($stateProvider) => {
    $stateProvider
        .state('billy.home', {
            url: '/',
            auth: false,
            layout: 'mainMenu',
            component: 'home',
            resolve: {
                demo: ()=> {
                    return 'probandoaa'
                }
            }
        });
};
homeConfig.$inject = ['$stateProvider'];

export const home = angular.module('home', [])
    .config(homeConfig)
    .component('home', homeComponent);
