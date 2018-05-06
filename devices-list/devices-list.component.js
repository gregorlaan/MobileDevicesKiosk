angular.
  module('devicesList').
  component('devicesList', {
    templateUrl: 'devices-list/devices-list.template.html',
    controller: ['$http', '$scope',
      function DevicesListController($http, $scope) {
        var self = this;
        $scope.addToKioskAlert = false;
        $scope.noMatchesAlert = false;

        $scope.getDevicesList = function (searchTerm) {
          $http.get('https://fonoapi.freshpixl.com/v1/getdevice?token=19834276e1b0580fbcadd7533b296a662db5311b7aa110f2&device=' + searchTerm).then(function (response) {
            if (response.data.status == "error") {
              $scope.noMatchesAlert = true;
              self.devices = false;
            } else {
              self.devices = response.data;
              $scope.noMatchesAlert = false;
            }
          });
        }

        $scope.selectDevice = function (device) {
          $scope.addToKioskAlert = device.DeviceName;
          Storage.prototype.setObject = function (key, value) {
            this.setItem(key, JSON.stringify(value));
          }
          Storage.prototype.getObject = function (key) {
            var value = this.getItem(key);
            return value && JSON.parse(value);
          }
          localStorage.setObject('device', device);
        }
      }
    ]
  });
