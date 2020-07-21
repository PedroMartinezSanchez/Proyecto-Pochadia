var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {

    $http.get("json/aboutus_get.json")
        .then(function (response) {
            $scope.resultados = response.data.resultados;
            $scope.imagen = response.data.resultados[0].img_perfil;
        });
});
