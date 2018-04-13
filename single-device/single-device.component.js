angular.
  module('singleDevice').
  component('singleDevice', {
    template: 'Detail view for <span>{{$ctrl.deviceId}}</span>',
    controller: ['$routeParams',
      function SingleDeviceController($routeParams) {
        this.deviceId = $routeParams.deviceId;
      } 
    ]
  });
