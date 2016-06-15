import {HomeController as controller} from './home.controller';
import template from './home.html';
import './home.scss';

export const homeComponent = ()=> {
    return {
        template,
        controller,
        controllerAs: 'vm'
    };
};
