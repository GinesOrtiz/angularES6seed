import angular from 'angular';

const sharedConfig = () => {
    'use strict';

};
sharedConfig.$inject = [];

const shared = angular.module('shared', [])
    .config(sharedConfig);

export {shared};