// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/login', {
            templateUrl: 'components/login/login.html',
            controller: 'LoginCtrl',
            access: {
                requiredLogin: false
            }
        })
        
        // home page
        .when('/', {
            templateUrl: 'app/shared/dashboard/dashboard.html',
            controller: 'DashboardController'
        })
        
        .when('/dashboard', {
            templateUrl: 'app/shared/dashboard/dashboard.html',
            controller: 'DashboardController'
        })
        
        .when('/drivers', {
            templateUrl: 'app/components/drivers/drivers.html',
            controller: 'DriverController'
        })

        .when('/rules', {
            templateUrl: 'app/components/rules/rules.html',
            controller: 'RuleController'
        })
        
        //TODO un-comment to prevent access to api URIs
        // .otherwise({
        //     redirectTo: '/login'
        // })
        ;

    $locationProvider.html5Mode(true);

}])

    .run(function($rootScope, $window, $location, AuthenticationFactory) {
      // when the page refreshes, check if the user is already logged in
      AuthenticationFactory.check();
     
      $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
        if ((nextRoute.access && nextRoute.access.requiredLogin) && !AuthenticationFactory.isLogged) {
          $location.path("/login");
        } else {
          // check if user object exists else fetch it. This is incase of a page refresh
          if (!AuthenticationFactory.user) AuthenticationFactory.user = $window.sessionStorage.user;
          if (!AuthenticationFactory.userRole) AuthenticationFactory.userRole = $window.sessionStorage.userRole;
        }
      });
     
    $rootScope.$on('$routeChangeSuccess', function(event, nextRoute, currentRoute) {
        $rootScope.showMenu = AuthenticationFactory.isLogged;
        $rootScope.role = AuthenticationFactory.userRole;
        // if the user is already logged in, take him to the home page
        if (AuthenticationFactory.isLogged == true && $location.path() == '/login') {
            $location.path('/');
        }
    });
});