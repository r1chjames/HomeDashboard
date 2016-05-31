angular.module('driverCtrl', [])

.controller("DriverController", function($scope, $http) {
  $scope.isLoading = true;
  $http.get('/api/v1/driver').
        success(function(data) {
  // DriverFactory.get(function(drivers) {
    $scope.drivers = data;
  });
  
  // $http.get('/api/v1/driver').
  //   success(function(data, status, headers, config) {
  //     $scope.drivers = data;
  //   }).
  //   error(function(data, status, headers, config) {
  //     // log error
  //   });
});