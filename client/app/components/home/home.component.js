import {homeController as controller} from './home.controller';
import template from './home.html';
import './home.scss';

export const homeComponent = {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {
        resolveExample: '<'
    }
};
