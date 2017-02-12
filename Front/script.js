var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http({
        method: 'GET',
        url: 'http://localhost:62801/api/products/get'
    }).then(function successCallback(response) {
        $scope.categories = response.data;
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
});
