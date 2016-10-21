class AppController {
  constructor($scope, AuthService, $state, Notification, LoaderService) {
    this.$scope = $scope;
    this.AuthService = AuthService;
    this.$state = $state;
    this.user = AuthService.getUser();
    this.Notification = Notification;
    this.LoaderService = LoaderService;

    const redirectByRole = (toState) => {
      let redirectTo = toState.redirectTo;
      let defRedirect = 'app.home';
      let role = this.user.role;
      let hasRedirect = typeof redirectTo !== 'string';

      return hasRedirect ? (redirectTo[role] || defRedirect) : (redirectTo || defRedirect);
    };

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

      if (toState.exclude) {
        if (toState.exclude.indexOf(this.user.role) > -1) {
          event.preventDefault();
          this.Notification.error('Access denied');
          this.$state.transitionTo(redirectByRole(toState));
        }
      }
      if (toState.allow) {
        if (toState.allow.indexOf(this.user.role) < 0) {
          event.preventDefault();
          this.Notification.error('Access denied');
          this.$state.transitionTo(redirectByRole(toState));
        }
      }
    };

    const stateError = (event, toState) => {
      event.preventDefault();

      if (toState.onError) {
        this.$state.transitionTo(toState.onError);
      }

      this.Notification.error({
        message: 'Error while requesting some resources',
        delay: 3000
      });
    };

    const stateSuccess = (event, toState, toParams, fromState) => {
      'use strict';

      this.LoaderService.loaderStatus({
        status: false
      });

      if (fromState.abstract) {
        stateStart(event, toState, toParams, fromState);
      }

      this.layout = toState.layout || 'empty';
      document.getElementsByTagName('body')[0]
        .setAttribute('id', toState.name.replace(/\./g, '-'));
    };

    $scope.$on('$stateChangeStart', stateStart);
    $scope.$on('$stateChangeSuccess', stateSuccess);
    $scope.$on('$stateChangeError', stateError);
  }
}

AppController.$inject = [
  '$scope',
  'AuthService',
  '$state',
  'Notification',
  'LoaderService'
];

export {AppController};
