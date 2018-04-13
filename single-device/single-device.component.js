angular.
  module('singleDevice').
  component('singleDevice', {
    templateUrl: 'single-device/single-device.template.html',
    controller: ['$scope',
      function SingleDeviceController($scope) {
        var self = this;
        self.device = null;

        Storage.prototype.getObject = function(key) {
            var value = this.getItem(key);
            return value && JSON.parse(value);
        }
        $scope.device = localStorage.getObject('device');
        } 
    ]
  });
