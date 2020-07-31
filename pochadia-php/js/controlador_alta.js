var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http, usuario) {

    $scope.correo= "";
    $scope.contrasenya = "" ;
    $scope.contrasenya2 = "" ;
    $scope.nombre = "" ;
    $scope.fecha_nacimiento = "" ;
    $scope.politicas = "" ;

    $scope.registro = function() {
        $http.get("http://localhost/servicios/comprobar_correonuevo.php?correo="+ $scope.correo).then(function (response4) {
        estadoCorreo = true;
        estado2Pwd = true;
        $scope.añosNoPermitidos = ['2020','2019','2018','2017','2016','2015','2014','2013','2012','2011'];
        $scope.estadoFecha = true;
        $scope.añosNoPermitidos.forEach(año => {
            console.log($scope.fecha_nacimiento.toISOString().substr(0,10));
            if ($scope.fecha_nacimiento.toISOString().substr(0,10).includes(año) == true) {
                $scope.estadoFecha = false;
            }
        });
        if ($scope.estadoFecha == false) {
            Swal.fire("La edad minima para registrarte es de 10 años.");
        }
        else if (/^\w+([.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail).(?:|com|es)+$/.test($scope.correo.toString()) == false) {
                Swal.fire("El correo no tiene un formato correcto.");
                estadoCorreo = false;
                console.log("entro en correo");
        }
        else if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test($scope.contrasenya.toString()) == false) {
            Swal.fire("La contraseña debe de tener al menos un digito, una letra minúscula, una letra mayúscula y minimo 8 caracteres.");
            estado2Pwd = false;
        }
        if (estadoCorreo == true && estado2Pwd == true && $scope.estadoFecha == true) {
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
        }
        });
        
    };
});