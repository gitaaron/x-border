(function (angular) {
    'use strict';
    angular.module('matrixtrucking.services')
        .service('truckingService', truckingService);

    function truckingService($http, $log, Notification) {
        var vm = this;
        vm.createtruckDetail = createtruckDetail;
        vm.getProductDetail = getProductDetail;
        vm.getCustomerManifestData = getCustomerManifestData;

        /**
         * Create User Contact
         * @param part
         * @returns {*}
         */
        function createtruckDetail(user) {
            return $http.post('/register', user)
                .success(function (result) {
                    $log.debug("User Successfully Created")
                    return result.data;
                })
                .error(function (err) {
                    Notification.error('Error occurred while saving. Please try again!');
                    $log.error(user);
                    $log.error(err.data);
                });
        }

        function getCustomerManifestData() {
            var url = 'https://api.namara.io/v0/data_sets/29b78414-1262-48ca-a44a-ec775a8a4502/data/en-0?api_key=77526b853af507e9e381bbe02549ca4d674284f9a073766d15697426fd9f594c';
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                })
                .catch(function (error) {
                    $log.error(error);
                });
        }

        /**
         * Gets the Product Related Data
         * @returns {HttpPromise}
         */
        function getProductDetail() {
            var url = 'https://api.namara.io/v0/data_sets/193b0135-a818-4ff2-a486-a4c9c6c73999/data/en-0?api_key=77526b853af507e9e381bbe02549ca4d674284f9a073766d15697426fd9f594c';
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                })
                .catch(function (error) {
                    $log.error(error);
                });
        }

    }
}(angular));
