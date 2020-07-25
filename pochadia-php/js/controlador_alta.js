var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http, usuario) {

    $scope.correo= "";
    $scope.contrasenya = "" ;
    $scope.contrasenya2 = "" ;
    $scope.nombre = "" ;
    $scope.fecha_nacimiento = "" ;
    $scope.politicas = "" ;

    $scope.registro = function() {
        $http.get("http://localhost/servicios/comprobar_correo.php?correo="+ $scope.correo).then(function (response4) {
        if(response4.data == "") {
            if ($scope.contrasenya == $scope.contrasenya2) {
                var fecha = $scope.fecha_nacimiento.toISOString().substr(0,10);
                usuario.registrar($scope.nombre, $scope.contrasenya, $scope.correo, fecha);
            } else{
                Swal.fire("Las contraseñas no coinciden.");
            }
        } else {
            Swal.fire("El correo ya existe.");
        }
        
        });
        
    };
});