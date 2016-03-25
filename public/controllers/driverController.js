angular.module('HomeAutoApp')

.controller("DriverController",function($scope, $http) {
  $http.get('/api/driver').
    success(function(data, status, headers, config) {
      $scope.drivers = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
});