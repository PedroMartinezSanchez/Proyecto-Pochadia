var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http, usuario) {

    $scope.correo = "";
    $scope.nombre = "";
    $scope.texto = "";
    $scope.asunto = "";
    $scope.idUsuario = usuario.id();
    $http.get("http://localhost/servicios/get_cabecera.php?id_usuario=" + $scope.idUsuario).then(function (response3) {
        $scope.cabecera = response3.data;
    });
    $scope.logout = function () {
        usuario.logout();
        window.location.href = "principal.html";
    }
    $scope.contactar = function () {
        $http.get("http://localhost/servicios/comprobar_correo.php?id_usuario=" + $scope.idUsuario).then(function (response4) {
            $scope.correoUsuario = response4.data;
            console.log($scope.correoUsuario);

            if ($scope.correo == "" || $scope.nombre == "" || $scope.texto == "") {
                Swal.fire("No pueden haber campos vacios.");
            } else {
                if ($scope.correoUsuario[0].correo == $scope.correo) {
                    if ($scope.correoUsuario[0].nombre == $scope.nombre) {
                        usuario.contactar($scope.correo, $scope.nombre, $scope.texto);
                        Swal.fire({
                            title: 'Correo enviado',
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'Confirmar'
                        }).then((result) => {
                            window.location.href = "FAQ.html";
                        });
                    } else {
                        Swal.fire("¡Tienes que indicar tu nick!.");
                    }
                } else {
                    Swal.fire("¡Tienes que indicar tu correo!.");
                }
            }
        });
    };
    $scope.contactar2 = function () {

        if ($scope.correo == "" || $scope.asunto == "" || $scope.texto == "") {
            Swal.fire("No pueden haber campos vacios.");
        } else {
            usuario.contactar2($scope.correo, $scope.asunto, $scope.texto);
            Swal.fire({
                title: 'Correo enviado',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Confirmar'
            }).then((result) => {
                window.location.href = "aboutus.html";
            });
        }
    };
});