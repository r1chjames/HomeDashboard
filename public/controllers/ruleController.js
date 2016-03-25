angular.module('HomeAutoApp')


.controller("RuleController",function($scope, $http) {
  $http.get('/api/rules').
    success(function(data, status, headers, config) {
      $scope.rules = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
});