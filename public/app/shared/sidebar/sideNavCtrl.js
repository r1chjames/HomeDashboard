angular.module('sideNavCtrl', [])

.controller("SideNavController",function($scope) {
 	$scope.menu = [
    {
      link : '/dashboard',
      title: 'Dashboard',
      icon: 'dashboard'
    },
    {
      link : '/rules',
      title: 'Rules',
      icon: 'schedule'
    },
    {
      link : '/drivers',
      title: 'Drivers',
      icon: 'memory'
    },
    {
      link : '/notifications',
      title: 'Notifications',
      icon: 'message'
    }
  ];
  $scope.admin = [
    {
      link : '/trash',
      title: 'Trash',
      icon: 'delete'
    },
    {
      link : 'showListBottomSheet($event)',
      title: 'Settings',
      icon: 'settings'
    },
    {
      link: '/Account',
      title: 'Account',
      icon: 'security'
    }
  ];
})
.controller("UserController",function($scope, $http) {
  $http.get('/api/v1/user').
    success(function(data, status, headers, config) {
      $scope.users = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
});