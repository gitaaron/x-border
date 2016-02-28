(function (angular) {
    'use strict';

    angular
        .module('matrixtrucking.truckingdetail', [
        ])
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('truckingdetail', {
                url: '/truckingdetail',
                templateUrl: 'features/truckingdetails/trucking.html',
                controller: 'TrackingDetailController',
                controllerAs: 'truckingDetailVm'
            });
    }
}(angular));