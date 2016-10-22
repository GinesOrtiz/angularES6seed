class appController {
  constructor($scope, LoaderService) {
    this.LoaderService = LoaderService;

    const stateStart = (event, toState, toParams, fromState) => {
      'use strict';

      if (!fromState.abstract) {
        this.LoaderService.loaderStatus({
          status: true,
          info: {
            text: 'Loading...'
          }
        });
      }
    };

    const stateError = (event) => {
      event.preventDefault();

      this.LoaderService.loaderStatus({status: false});
    };

    const stateSuccess = (event, toState, toParams, fromState) => {
      'use strict';

      this.LoaderService.loaderStatus({
        status: false
      });

      if (fromState.abstract) {
        stateStart(event, toState, toParams, fromState);
      }
    };

    $scope.$on('$stateChangeStart', stateStart);
    $scope.$on('$stateChangeSuccess', stateSuccess);
    $scope.$on('$stateChangeError', stateError);
  }
}

appController.$inject = ['$scope', 'LoaderService'];

export {appController};