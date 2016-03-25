angular.module('HomeAutoApp')


.controller("ActivityController",function($scope, $http) {
  $scope.isLoading = true;
  $http.get('/api/activity').
    success(function(data, status, headers, config) {
      $scope.activity = data;
      $scope.isLoading = false;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
});