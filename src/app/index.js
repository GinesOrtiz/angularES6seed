import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngstorage from 'ngstorage';
import ngSanitize from 'angular-sanitize';
import Notification from 'angular-ui-notification';

import 'normalize.css/normalize.css';
import './shared/general.scss';
import 'angular-ui-notification/dist/angular-ui-notification.min.css';

import {appComponent} from './app.component';
import {appConfig, appRun} from './app.config';

import {auth} from './components/auth';
import {home} from './components/home';
import {about} from './components/about';

import {loader} from './components/common/loader';

import {shared} from './shared';
import {layouts} from './layouts';

const app = angular.module('app', [
  uiRouter,
  ngSanitize,
  ngstorage.name,
  Notification,

  home.name,
  auth.name,
  about.name,

  loader.name,

  shared.name,
  layouts.name
])
  .component('app', appComponent)
  .config(appConfig)
  .run(appRun);

export {app};