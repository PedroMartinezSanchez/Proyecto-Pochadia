var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http, usuario, $timeout) {
    var url = new URL(window.location.href);
    $scope.idJuego = url.searchParams.get("id_juego");
    if (!$scope.idJuego) $scope.idJuego = 1;
    //console.log($scope.idJuego);
    $scope.comentarios = [];
    $scope.cabecera_comentario = "";
    $scope.recomendado = 0;
    $scope.texto = "";
    $scope.favorito = 0;
    $scope.respuesta = "";
    $scope.respuestas = [];
    $scope.slickParams = {
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        fade: true,
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
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
    $scope.idUsuario = usuario.id();
    $http.get("http://localhost/servicios/get_cabecera.php?id_usuario=" + $scope.idUsuario).then(function (response3) {
        $scope.cabecera = response3.data;
    });
    $http.get("http://localhost/servicios/get_pegi.php?id_juego=" + $scope.idJuego).then(function (response4) {
        $scope.pegi = response4.data;

    });
    $http.get("http://localhost/servicios/get_imgcarousel.php?id_juego=" + $scope.idJuego).then(function (response5) {
        $scope.carousel = response5.data;
        $scope.imagenes = [$scope.carousel[0].img_1, $scope.carousel[0].img_2, $scope.carousel[0].img_3];
    });
    $http.get("http://localhost/servicios/get_comentarios.php?id_juego=" + $scope.idJuego).then(function (response6) {

        $timeout(function () {
            response6.data.forEach(comentario => {

                //console.log(comentario);
                if (comentario.cabecera != "") {
                    $scope.comentarios.push(comentario);
                    //console.log($scope.comentarios);
                } else {
                    $scope.respuestas.push(comentario);
                }
            });
        },0);
    });
    $http.get("http://localhost/servicios/get_generos.php?id_juego=" + $scope.idJuego)
        .then(function (response2) {
            $scope.generos = response2.data;
        });
    $http.get("http://localhost/servicios/get_infojuego.php?id_juego=" + $scope.idJuego)
        .then(function (response) {
            $scope.resultados = response.data;

        });
    $scope.logout = function () {
        usuario.logout();
        window.location.href = "principal.html";
    }
    $scope.comentar = function () {
        usuario.comentar($scope.cabecera_comentario, $scope.recomendado, $scope.texto, $scope.idJuego, $scope);
    }
    $scope.responder = function (id_comentario) {
        usuario.responder($scope.cabecera_comentario, $scope.texto, $scope.idJuego, $scope, id_comentario);
    }
    $scope.actualizafavorito = function () {
        $http.get("http://localhost/servicios/get_favorito.php?id_juego=" + $scope.idJuego + "&id_usuario=" + $scope.idUsuario)
        .then(function (response7) {
            $scope.Juegofavorito = response7.data;
            console.log($scope.Juegofavorito);
            
            if ($scope.Juegofavorito.length == 0 || $scope.Juegofavorito[0].favorito == 0) {
                console.log($scope.favorito);
                    $scope.favorito = 1;
                    console.log($scope.favorito);
                    usuario.favorito($scope.favorito, $scope.idJuego);
                    Swal.fire({
                        title: 'Juego añadido a favoritos',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Confirmar'
                    }).then((result) => {
                        window.location.href = "info_juego.html?id_juego="+ $scope.idJuego;
                    });
            }
            else {
                console.log($scope.favorito);
                usuario.favorito($scope.favorito, $scope.idJuego);
                Swal.fire({
                    title: 'Juego quitado de favoritos',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Confirmar'
                }).then((result) => {
                    window.location.href = "info_juego.html?id_juego="+ $scope.idJuego;
                });
            }
            
        });
        
    }
});
app.directive('slickSlider', function () {
    return {
        restrict: 'A',
        scope: { 'data': '=' },
        link: function (scope, element, attrs) {
            var isInitialized = false;
            scope.$watch('data', function (newVal, oldVal) {
                if (newVal > 0 && !isInitialized) {
                    $(element).slick(scope.$eval(attrs.slickSlider));
                    isInitialized = true;
                }
            });
        }
    }
});