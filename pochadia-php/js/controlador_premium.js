var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {

    $http.get("http://localhost/servicios/get_cabecera.php?id_usuario=" + 1).then(function (response3) {
               $scope.cabecera = response3.data; 
            });

    $http.get("json/premium_get.json")
        .then(function (response) {
            $scope.resultados = response.data.resultados;
            
        });
});

