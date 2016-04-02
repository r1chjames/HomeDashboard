angular.module('HomeAutoApp')

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
});