import template from './menuBar.html';
import {menuController as controller} from './menuBar.controller';
import './menuBar.scss';

export const menuBarLayoutComponent = {
    template,
    controller,
    controllerAs: 'vm'
};
