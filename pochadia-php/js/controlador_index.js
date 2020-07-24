var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http, usuario) {
    $scope.juegosNuevos = [];
    $scope.juegosRol = [];
    $scope.juegosAccion = [];
    $scope.juegosCasual = [];
    $scope.juegosSimuladores = [];
    $scope.juegosEstrategia = [];
    $scope.juegosAventura = [];
    $scope.juegosCarreras = [];
    $scope.juegosIndie = [];
    $scope.juegosMultijugador = [];
    $scope.juegosDeportes = [];
    $scope.juegosBusqueda = [];
    $scope.busqueda;
    $scope.msg;

    $scope.slickParams = {
        centerMode: false,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 1
                }
            }
        ]
    };
    //var cont = -1;
    //var pegi = "";
    $scope.idUsuario = usuario.id();
    $http.get("http://localhost/servicios/get_pegi_edad.php").then(function (response4) {
        $scope.pegi = response4.data;
        
    });
    $http.get("http://localhost/servicios/get_cabecera.php?id_usuario=" + $scope.idUsuario).then(function (response3) {
        $scope.cabecera = response3.data;
    });
    $http.get("http://localhost/servicios/get_index.php")
        .then(function (response) {
            $scope.resultados = response.data;
            response.data.forEach(juego => {
                $http.get("http://localhost/servicios/get_generos.php?id_juego=" + juego.id_juego)
                    .then(function (response2) {
                        juego.genero = [];
                        response2.data.forEach(function (genero) {
                            juego.genero.push(genero.nombre_genero);
                        });
                        //cont += 1;
                        //console.log(pegi);
                        //console.log(cont);
                        //var pegi = $scope.pegi[cont].nombre_pegi;
                        
                        if (juego.fecha_subida.includes("2020") > 0) $scope.juegosNuevos.push(juego);
                        if (juego.genero.includes("Rol")) $scope.juegosRol.push(juego);
                        if (juego.genero.includes("Accion") ) $scope.juegosAccion.push(juego);
                        if (juego.genero.includes("Casual")) $scope.juegosCasual.push(juego);
                        if (juego.genero.includes("Simuladores")) $scope.juegosSimuladores.push(juego);
                        if (juego.genero.includes("Estrategia")) $scope.juegosEstrategia.push(juego);
                        if (juego.genero.includes("Aventuras")) $scope.juegosAventura.push(juego);
                        if (juego.genero.includes("Carreras")) $scope.juegosCarreras.push(juego);
                        if (juego.genero.includes("Indie")) $scope.juegosIndie.push(juego);
                        if (juego.genero.includes("Multijugador masivo")) $scope.juegosMultijugador.push(juego);
                        if (juego.genero.includes("Deportes")) $scope.juegosDeportes.push(juego);
                        $scope.juegosBusqueda.push(juego);
                        //console.log(juego);
                        //console.log(juego.genero);
                        //console.log($scope.pegi);
                    });
            });
        });
        $scope.logout = function () {
            usuario.logout();
            window.location.href = "principal.html";
        }
});

app.directive('slickSlider', function ($timeout) {
    return {
        restrict: 'A',
        scope: { 'data': '=' },
        link: function (scope, element, attrs) {
            var isInitialized = false;
            scope.$watch('data', function (newVal, oldVal) {
                if (newVal > 0 && !isInitialized) {
                    $timeout(function () {
                        $(element).slick(scope.$eval(attrs.slickSlider));
                    }, 0);
                    isInitialized = true;
                }
            });
        }
    }
});