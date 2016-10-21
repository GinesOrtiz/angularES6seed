export const LoaderService = ($rootScope) => {
  'use strict';

  const loaderStatus = (config) => {
    $rootScope.$broadcast('loaderStatus', config);
  };

  return {
    loaderStatus
  };

};

LoaderService.$inject = ['$rootScope'];

export {LoaderService};