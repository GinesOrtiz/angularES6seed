import template from './app.html';
import {AppController as controller} from './app.controller';

export const appDirective = ()=> {
    return {
        template,
        controller,
        controllerAs: 'vm',
        restrict: 'E',
        scope: {},
        replace: true
    };
};
