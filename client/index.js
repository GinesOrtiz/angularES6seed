import {billy} from './app';

angular.element(document)
    .ready(function () {
        angular.bootstrap(document, [billy.name]);
    });