const Api = ($http, $q, $localStorage) => {
    const API_URL = __API_URL__;

    const login = (credentials) => {
        return $http.post(`${API_URL}/auth/login`, credentials)
            .then((res) => {
                return res.data;
            }, ()=> {
                return {success: false};
            });
    };

    const isAuth = ()=> {
        return !!$localStorage.user;
    };

    return {
        login,
        isAuth
    };
};

Api.$inject = ['$http', '$q', '$localStorage'];

export {Api};
