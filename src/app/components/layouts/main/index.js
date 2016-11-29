import template from './main.html';
import {mainController as controller} from './main.controller';

import './main.scss';

export const mainLayout = {
  template,
  controller,
  controllerAs: 'vm'
};