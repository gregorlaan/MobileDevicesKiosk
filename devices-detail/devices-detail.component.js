angular.
  module('devicesDetail').
  component('devicesDetail', {
    template: 'Detail view for <span>{{$ctrl.deviceId}}</span>',
    controller: ['$routeParams',
      function DevicesDetailController($routeParams) {
        this.deviceId = $routeParams.deviceId;
      } 
    ]
  });
