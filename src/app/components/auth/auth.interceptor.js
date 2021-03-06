const AuthInterceptor = ($q, $injector) => {
  'use strict';

  return {
    'request': (config) => {
      let AuthService = $injector.get('AuthService');

      if (AuthService.isAuth()) {
        config.headers.Authorization = AuthService.getToken();
      }

      config.timeout = 30000;
      return config;
    },

    'requestError': (rejection) => {
      return $q.reject(rejection);
    },

    'responseError': (rejection) => {
      switch (rejection.status) {
        case 401:
          break;
        case 403:
          break;
        case 409:
          break;
        case 500:
          break;
        case 504:
          break;
        default:

          break;
      }
      return $q.reject(rejection);
    }
  };
};

AuthInterceptor.$inject = [
  '$q',
  '$injector'
];

export {AuthInterceptor};
