var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
    $scope.juegosNuevos = [];
    $scope.juegosRol = [];
    $scope.juegosAccion = [];
    $scope.juegosRpg = [];

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
            response.data.resultados[1].juegos.forEach(juego => {
                if (juego.fecha_subida.indexOf("2020") > 0) $scope.juegosNuevos.push(juego);
                if (juego.genero.includes("rol")) $scope.juegosRol.push(juego);
                if (juego.genero.includes("accion")) $scope.juegosAccion.push(juego); 
                if (juego.genero.includes("rpg")) $scope.juegosRpg.push(juego);
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