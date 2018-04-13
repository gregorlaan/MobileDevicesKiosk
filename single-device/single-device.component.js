angular.
  module('singleDevice').
  component('singleDevice', {
    templateUrl: 'single-device/single-device.template.html',
    controller: ['$routeParams',
      function SingleDeviceController($routeParams) {
        this.deviceId = $routeParams.deviceId;
      } 
    ]
  });
