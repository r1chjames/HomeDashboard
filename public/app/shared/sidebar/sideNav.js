var app = angular.module('sideNav', [])

.directive('sideNavDtv', function() {
  return {
      restrict: 'E',
      replace: 'true',
      templateUrl: 'views/sideNav.html',
      controller: 'SideNavController'
  };
});