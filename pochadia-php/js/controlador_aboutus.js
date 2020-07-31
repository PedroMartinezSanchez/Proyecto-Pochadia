var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http, usuario) {

    $scope.idUsuario = usuario.id();
    $http.get("http://localhost/servicios/get_cabecera.php?id_usuario=" + $scope.idUsuario).then(function (response3) {
        $scope.cabecera = response3.data;
    });
    $scope.logout = function () {
        usuario.logout();
        window.location.href = "principal.html";
    }
});
