angular.
  module('devicesList').
  component('devicesList', {
    templateUrl: 'devices-list/devices-list.template.html',
    controller: function DevicesListController($http) {
      var self = this;

      $http.get('devices/devices.json').then(function(response) {
        self.devices = response.data
      });
    }
  });
