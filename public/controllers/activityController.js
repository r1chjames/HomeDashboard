angular.module('HomeAutoApp')


.controller("ActivityController",function($scope, $http) {
  $http.get('/api/activity').
    success(function(data, status, headers, config) {
      $scope.activity = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
});