const AuthService = ($http, $q, $localStorage) => {
    'use strict';
    const API_URL = __API_URL__;

    let user = {};

    const login = (credentials) => {
        return $http.post(`${API_URL}/auth/login`, credentials)
            .then((res) => {
                $localStorage.token = res.data.token;

                return res.data;
            }, ()=> {
                return {success: false};
            });
    };

    const isAuth = ()=> {
        return !!Object.keys(user).length;
    };

    const getUser = () => {
        return user;
    };

    const getToken = () => {
        return $localStorage.token;
    };

    return {
        login,
        isAuth,
        getUser,
        getToken
    };
};

AuthService.$inject = [
    '$http',
    '$q',
    '$localStorage'
];

export {AuthService};
