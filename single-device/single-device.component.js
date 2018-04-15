angular.
  module('singleDevice').
  component('singleDevice', {
    templateUrl: 'single-device/single-device.template.html',
    controller: ['$scope',
      function SingleDeviceController($scope) {
        var self = this;
        self.device = null;

        $scope.showGeneralInformation = true;
        $scope.showHardware = true;
        $scope.showCamera = true;
        $scope.showFeatures = true;
        $scope.showDimensions = true;
        $scope.showConnectivity = true;

        Storage.prototype.getObject = function(key) {
            var value = this.getItem(key);
            return value && JSON.parse(value);
        }
        $scope.device = localStorage.getObject('device');
      }
    ]
  });
