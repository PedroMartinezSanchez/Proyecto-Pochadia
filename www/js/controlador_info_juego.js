var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
    var url = new URL(window.location.href);
    $scope.idJuego = url.searchParams.get("id_juego");
    if (!$scope.idJuego) $scope.idJuego = 1;
    console.log($scope.idJuego);
    $http.get("json/info_juego_get_"+$scope.idJuego+".json")
        .then(function (response) {
            $scope.resultados = response.data.resultados;
        });
});