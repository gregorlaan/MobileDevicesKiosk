angular.
  module('devicesList').
  component('devicesList', {
    templateUrl: 'devices-list/devices-list.template.html',
    controller: [ '$http','$scope',
      function DevicesListController($http, $scope) {
        var self = this;

        $http.get('devices/devices.json').then(function(response) {
          self.devices = response.data
        });

        $scope.selectDevice = function(device) {
          Storage.prototype.setObject = function(key, value) {
            this.setItem(key, JSON.stringify(value));
          }
          Storage.prototype.getObject = function(key) {
              var value = this.getItem(key);
              return value && JSON.parse(value);
          }
          localStorage.setObject('device', device);
        }
      }
    ]
  });
