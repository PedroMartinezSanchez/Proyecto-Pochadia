var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
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

    $http.get("json/index_get.json")
        .then(function (response) {
            $scope.resultados = response.data.resultados;
            response.data.resultados[1].juegos.forEach(juego => {
                if (juego.fecha_subida.indexOf("2020") > 0 && response.data.resultados[0].edad >= juego.pegi) $scope.juegosNuevos.push(juego);
                if (juego.genero.includes("rol") && response.data.resultados[0].edad >= juego.pegi) $scope.juegosRol.push(juego);
                if (juego.genero.includes("accion") && response.data.resultados[0].edad >= juego.pegi) $scope.juegosAccion.push(juego); 
                if (juego.genero.includes("casual") && response.data.resultados[0].edad >= juego.pegi) $scope.juegosCasual.push(juego);
                if (juego.genero.includes("simuladores") && response.data.resultados[0].edad >= juego.pegi) $scope.juegosSimuladores.push(juego);
                if (juego.genero.includes("estrategia") && response.data.resultados[0].edad >= juego.pegi) $scope.juegosEstrategia.push(juego);
                if (juego.genero.includes("aventura") && response.data.resultados[0].edad >= juego.pegi) $scope.juegosAventura.push(juego);
                if (juego.genero.includes("carreras") && response.data.resultados[0].edad >= juego.pegi) $scope.juegosCarreras.push(juego);
                if (juego.genero.includes("indie") && response.data.resultados[0].edad >= juego.pegi) $scope.juegosIndie.push(juego);
                if (juego.genero.includes("multijugador masivo") && response.data.resultados[0].edad >= juego.pegi) $scope.juegosMultijugador.push(juego);
                if (juego.genero.includes("deportes") && response.data.resultados[0].edad >= juego.pegi) $scope.juegosDeportes.push(juego);
                if(response.data.resultados[0].edad >= juego.pegi) $scope.juegosBusqueda.push(juego);

                /*
                if(juego.titulo.includes(busqueda)){
                    $scope.juegosBusqueda.push(juego);
                }
                */
                
            });
        });
});

app.directive('slickSlider', function () {
    return {
        restrict: 'A',
        scope: {'data': '='},
        link: function (scope, element, attrs) {
            var isInitialized = false;
            scope.$watch('data', function(newVal, oldVal) {
                if (newVal > 0 && !isInitialized) {
                    $(element).slick(scope.$eval(attrs.slickSlider));
                    isInitialized = true;
                }
            });
        }
    }
});