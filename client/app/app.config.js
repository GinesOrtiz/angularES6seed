
const appConfig = ($locationProvider, $urlRouterProvider, $stateProvider)=> {
    $urlRouterProvider.otherwise(function () {
        window.location.href = '/login';
    });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $stateProvider
        .state('billy', {
            abstract: true,
            component: 'app'
        });
};
appConfig.$inject = [
    '$locationProvider',
    '$urlRouterProvider',
    '$stateProvider'
];

const appRun = ($state)=> {
    let states = $state.get();
    states.forEach((state)=> {
        if (state.name !== '') {
            let template = '<' + state.component + ' %%RESOLVES%%></' + state.component + '>';
            let resolves = '';
            if (state.resolve) {
                let resolveKeys = Object.keys(state.resolve);
                resolveKeys.forEach((rk)=> {
                    resolves += rk + '=' + rk + ' ';
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