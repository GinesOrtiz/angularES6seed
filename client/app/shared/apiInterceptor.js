const ApiInterceptor = function ($q, $injector, $localStorage) {
    return {
        'request': function (config) {
            // Add header to request if there's a localStorage user
            if ($localStorage.user) {
                config.headers['Authorization'] = $localStorage.user.token;
            }

            config.timeout = 30000;
            return config;
        },

        'requestError': function (rejection) {
            return $q.reject(rejection);
        },

        'responseError': function (rejection) {
            var Api = $injector.get('Api');
            if (__DEV__) console.log('rejection::', rejection);

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

ApiInterceptor.$inject = ['$q', '$injector', '$localStorage'];

export {ApiInterceptor};
