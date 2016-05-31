// public/js/services/driverSvc.js
angular.module('driverSvc')

.factory('DriverService', ['$http', function($http) {

        // call to get all drivers
        this.getAll = function() {
            return $http.get('/api/v1/driver');
            // .success(callback)
            // .error(function(data, status, headers, config) {
            //     // log error
            //     });
        };

        // // these will work when more API routes are defined on the Node side of things
        // // call to POST and create a new nerd
        // this.newDriver: function(driverData) {
        //     return $http.post('/api/v1/driver', driverData)
        //     .success(callback)
        //     .error(function(data, status, headers, config) {
        //         // log error
        //         });
        // },

        // // call to DELETE a driver
        // delete : function(id) {
        //     return $http.delete('/api/v1/driver/' + id)
        //     .success(callback)
        //     .error(function(data, status, headers, config) {
        //         // log error
        //         });
}]);