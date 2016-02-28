(function (angular) {
    'use strict';

// Declare app level module which depends on views, and components
    angular.module('matrixtrucking', [
        'ui.router',
        'ui.bootstrap',
        'matrixtrucking.truckingdetail',
        'matrixtrucking.services',
        'ui-notification'
    ]).config(moduleConfig);

    function moduleConfig($urlRouterProvider, $locationProvider, $stateProvider) {
        $locationProvider.hashPrefix();
        $urlRouterProvider.otherwise('/truckingdetail');
        $stateProvider
            .state('matrixtrucking', {
                url: '',
                templateUrl: 'index.html',
                abstract: true
            });
    }
}(angular));
