var MDK = angular.module('MDK', []);

MDK.controller('DevicesListController', function DevicesListController($scope) {

    $scope.devices = [
        {
            DeviceName: "Galaxy S7 Edge",
            Brand: "Samsung"
        },
        {
            DeviceName: "3310",
            Brand: "Nokia"
        },
        {
            DeviceName: "P9 lite mini",
            Brand: "Huawei"
        }
    ]

});
