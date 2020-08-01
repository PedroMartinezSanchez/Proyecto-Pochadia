var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http, usuario) {
    var url = new URL(window.location.href);
    $scope.idUsuario = url.searchParams.get("id_usuario");
    $scope.correo = "";
    $scope.contrasenya = "";
    $scope.contrasenya2 = "";
    $scope.logout = function () {
        usuario.logout();
        window.location.href = "principal.html";
    }
    $scope.recuperar = function () {
        $http.get("http://localhost/servicios/get_email.php?correo=" + $scope.correo).then(function (response4) {

            $scope.correoUsuario = response4.data;
            console.log($scope.correoUsuario);

            if ($scope.correo == "") {
                Swal.fire("No pueden haber campos vacios.");
            } else {
                if ($scope.correoUsuario[0].correo == $scope.correo) {
                        usuario.recuperar($scope.correo, $scope.correoUsuario[0].nombre, $scope.correoUsuario[0].id_usuario);
                        Swal.fire({
                            title: 'Correo enviado',
                            text: 'revisa tu bandeja de correo electronico',
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'Confirmar'
                        }).then((result) => {
                            window.location.href = "principal.html";
                        });
                } else {
                    Swal.fire("¡Tienes que indicar tu correo!.");
                }
            }
        });
    };
    $scope.reestablecer = function () {
            estadoPwd = true;
            estado2Pwd = true;
            if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test($scope.contrasenya.toString()) == false) {
                Swal.fire("La contraseña antigua debe de tener al menos un digito, una letra minúscula, una letra mayúscula y minimo 8 caracteres.");
                estadoPwd = false;
            }
            if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test($scope.contrasenya2.toString()) == false) {
                Swal.fire("La contraseña nueva debe de tener al menos un digito, una letra minúscula, una letra mayúscula y minimo 8 caracteres.");
                estado2Pwd = false;
            }
            if ($scope.contrasenya == "" || $scope.contrasenya2 == "") {
                Swal.fire("No pueden haber campos vacios.");
            } else {
                if (estadoPwd == true && estado2Pwd == true) {
                            Swal.fire("Contraseña actualizada.");
                            usuario.reestablecer($scope.contrasenya, $scope.idUsuario);
                }
            }

    };
});