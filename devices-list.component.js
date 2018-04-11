angular.
  module('MDK').
  component('devicesList', {
    template:
    '<ul>'+
        '<li ng-repeat="device in $ctrl.devices">'+
            '<p>{{device.Brand}} - {{device.DeviceName}}</p>'+
        '</li>'+
    '</ul>',
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
