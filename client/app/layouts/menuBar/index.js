import template from './menuBar.html';
import {menuController as controller} from './menuBar.controller';
import './menuBar.scss';

const menuBarLayoutComponent = {
    template,
    controller,
    controllerAs: 'vm'
};

export {menuBarLayoutComponent};