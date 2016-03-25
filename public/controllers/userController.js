angular.module('HomeAutoApp')


.controller("UserController",function($scope, $http) {
  $http.get('/api/user').
    success(function(data, status, headers, config) {
      $scope.users = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
});