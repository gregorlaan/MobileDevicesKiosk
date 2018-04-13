angular.
  module('MDK').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
      when('/devices', {
        template: '<devices-list></devices-list>'
      }).
      when('/devices/:deviceId', {
        template: '<devices-detail></devices-detail>'
      }).otherwise('/devices');
    }
  ]);
