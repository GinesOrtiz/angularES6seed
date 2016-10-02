import angular from 'angular';
import {homeComponent} from './home.component';

import langEN from './lang/en.json';

const homeConfig = ($stateProvider) => {
    'use strict';

    $stateProvider
        .state('app.home', {
            url: '/',
            layout: 'mainMenu',
            component: 'homeComponent',
            resolve: {
                resolveExample: ()=> {
                    return 'resolveExampleContent';
                }
            }
        });
};

const homeRun = (TranslationService) => {
    'use strict';

    TranslationService.addLang('home', {en: langEN});
};

homeConfig.$inject = ['$stateProvider'];
homeRun.$inject = ['TranslationService'];

const home = angular.module('home', [])
    .component('homeComponent', homeComponent)
    .config(homeConfig)
    .run(homeRun);

export {home};