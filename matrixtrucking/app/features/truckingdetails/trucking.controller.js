(function (angular) {
    'use strict';

    angular
        .module('matrixtrucking.truckingdetail')
        .controller('TrackingDetailController', TrackingDetailController);

    function TrackingDetailController($log, truckingService) {
        var vm = this;
        vm.data = {};
        vm.data.trucker = {};
        vm.data.Exporter = [];
        vm.data.Exporter[0] = {};
        vm.data.Exporter[1] = {};
        vm.data.Importer = [];
        vm.data.Importer[0] = {};
        vm.data.Importer[1] = {};
        
        vm.isTruckCollapsed = false;
        vm.isExporter1Collapsed = false;
        vm.isExporter2Collapsed = false;
        vm.isImport1Collapsed = false;
        vm.isImporter2Collapsed = false;
        vm.autoFillDetails = autoFillDetails;
        //vm.submitTuckInfo = submitTuckInfo(truckInfo);
    

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
        
        
        function autoFillDetails() {
            vm.data.trucker.dname = "Aaron";
            vm.data.trucker.dphno = 3124780873;
            vm.data.trucker.dorigin = "Chicago";
            vm.data.trucker.ddestination = "Toronto";
            vm.data.trucker.dlatitude = "45.80";
            vm.data.trucker.dlongitude = "-70.39";
            
            vm.data.Exporter[0].ename = "Jack";
            vm.data.Exporter[0].pname = "FOOTBALLS";
            vm.data.Exporter[0].pcode = "6679";
            vm.data.Exporter[0].pcost = "35";
            vm.data.Importer[0].ecountry = "US";
            vm.data.Exporter[0].ephno = "7865432345";
            
            vm.data.Exporter[1].ename = "Ilan";
            vm.data.Exporter[1].pname = "TELEVISIONS";
            vm.data.Exporter[1].pcode = "2995";
            vm.data.Exporter[1].pcost = "300";
            vm.data.Importer[1].ecountry = "US";
            vm.data.Exporter[1].ephno = "9087654352";
            
            vm.data.Importer[0].iname = "Mary";
            vm.data.Importer[0].pname = "TELEVISIONS";
            vm.data.Importer[0].paycode = "2995";
            vm.data.Importer[0].pcost = "300";
            vm.data.Importer[0].icountry = "Canada";
            vm.data.Importer[0].iphno = "6787654352";
            
            vm.data.Importer[1].ename = "Bilan";
            vm.data.Importer[1].pname = "TELEVISIONS";
            vm.data.Importer[1].paycode = "2995";
            vm.data.Importer[1].pcost = "300";
            vm.data.Importer[1].icountry = "Canada";
            vm.data.Importer[1].iphno = "8907654352";
        
        }


        truckingService.getCustomerManifestData().then(function(data) {
            var customerManifestData = data;
            vm.country = [];
            for(var count=0;count<customerManifestData.length;count++) {
                vm.country.push(customerManifestData[count].country_of_origin);
            }
        });


    }
}(angular));