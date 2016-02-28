(function (angular) {
    'use strict';

    angular
        .module('matrixtrucking.truckingdetail')
        .controller('TrackingDetailController', TrackingDetailController);

    function TrackingDetailController($log, truckingService) {
        var vm = this;
        vm.isTruckCollapsed = false;
        vm.isExporter1Collapsed = false;
        vm.isExporter2Collapsed = false;
        vm.isImport1Collapsed = false;
        vm.isImporter2Collapsed = false;


        truckingService.getProductDetail().then(function(data) {
            var product = data;
            vm.productname = [];
            vm.productcode = [];
            for(var count=0;count<product.length;count++) {
                vm.productname.push(product[count].product_name);
                vm.productcode.push(product[count].can_hts_code);
            }
            console.log(vm.productname);
            console.log(vm.productcode);
        });


        truckingService.getCustomerManifestData().then(function(data) {
            var customerManifestData = data;
            vm.country = [];
            for(var count=0;count<customerManifestData.length;count++) {
                vm.country.push(customerManifestData[count].country_of_origin);
            }
        });


    }
}(angular));