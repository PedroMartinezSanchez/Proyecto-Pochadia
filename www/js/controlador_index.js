var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
    $http.get("json/index_get.json")
        .then(function (response) {
            $scope.resultados = response.data.resultados;
        });
});