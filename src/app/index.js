import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngstorage from 'ngstorage';
import ngSanitize from 'angular-sanitize';

import 'normalize.css/normalize.css';
import './shared/general.scss';

const app = angular.module('app', [
    uiRouter,
    ngSanitize,
    ngstorage.name
]);

export {app};