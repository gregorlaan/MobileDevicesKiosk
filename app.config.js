angular.
  module('MDK').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
      when('/devices', {
        template: '<devices-list></devices-list>'
      }).
      when('/device/:deviceId', {
        template: '<single-device></single-device>'
      }).otherwise('/devices');
    }
  ]);
