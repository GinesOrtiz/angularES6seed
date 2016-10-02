import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngstorage from 'ngstorage';
import ngSanitize from 'angular-sanitize';

import 'normalize.css/normalize.css';
import './shared/general.scss';

import {appComponent} from './app.component';
import {appConfig, appRun} from './app.config';

import {auth} from './components/auth';
import {home} from './components/home';
import {about} from './components/about';

import {shared} from './shared';
import {layouts} from './layouts';

const app = angular.module('app', [
    uiRouter,
    ngSanitize,
    ngstorage.name,

    home.name,
    auth.name,
    about.name,

    shared.name,
    layouts.name
])
    .component('app', appComponent)
    .config(appConfig)
    .run(appRun);

export {app};