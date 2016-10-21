const appConfig = ($locationProvider, $urlRouterProvider, $stateProvider, NotificationProvider)=> {
  'use strict';

  $urlRouterProvider.otherwise(function () {
    window.location.href = '/login';
  });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $stateProvider
    .state('app', {
      abstract: true,
      component: 'app'
    });

  NotificationProvider.options.startTop = 0;
  NotificationProvider.options.startRight = 0;
};
appConfig.$inject = [
  '$locationProvider',
  '$urlRouterProvider',
  '$stateProvider',
  'NotificationProvider'
];

const appRun = ($state)=> {
  'use strict';

  const convertName = (name) => {
    return name.replace(/([A-Z])/g, '-$1')
      .toLowerCase();
  };

  let states = $state.get();
  states.forEach((state)=> {
    if (state.name !== '') {
      let componentName = convertName(state.component);
      let template = '<' + componentName + ' %%RESOLVES%%></' + componentName + '>';
      let resolves = '';
      if (state.resolve) {
        let resolveKeys = Object.keys(state.resolve);
        resolveKeys.forEach((rk)=> {
          let attribute = convertName(rk);
          resolves += attribute + '=' + rk + ' ';
        });

        state.controller = ($scope) => {
          resolveKeys.forEach((rk)=> {
            $scope[rk] = $scope.$resolve[rk];
          });
        };
      }
      state.template = template.replace('%%RESOLVES%%', resolves);
    }
  });
};

appRun.$inject = [
  '$state'
];

export {appConfig, appRun};