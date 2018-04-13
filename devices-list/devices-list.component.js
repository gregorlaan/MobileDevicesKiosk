angular.
  module('devicesList').
  component('devicesList', {
    templateUrl: 'devices-list/devices-list.template.html',
    controller: function DevicesListController() {
      this.devices = [
        {
          DeviceName: "Galaxy S7 Edge",
          Brand: "Samsung"
        },
        {
          DeviceName: "3310",
          Brand: "Nokia"
        },
        {
          DeviceName: "P9 lite mini",
          Brand: "Huawei"
        }
      ];
    }
  });
