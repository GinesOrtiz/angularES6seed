import {LoginController as controller} from './login.controller';
import template from './login.html';
import './login.scss';

export const loginDirective = ()=> {
    return {
        template,
        controller,
        bindToController: true,
        controllerAs: 'vm',
        restrict: 'E',
        replace: true,
        scope: {
            
        }
    };
};
