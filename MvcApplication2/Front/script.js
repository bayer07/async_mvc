var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http({
        method: 'GET',
        url: 'http://localhost:62801/api/products/categories'
    }).then(function successCallback(response) {
        $scope.categories = response.data;
        angular.forEach($scope.categories, function(category) {
            setTimeout(function() {
              $http({
                  method: 'GET',
                  url: 'http://localhost:62801/api/products/categories/' + category.CategoryID
              }).then(function successCallback(response) {

                  category.Products = response.data.Products;
              }, function errorCallback(response) {});
            }, 1000);

        });

    }, function errorCallback(response) {});
});
