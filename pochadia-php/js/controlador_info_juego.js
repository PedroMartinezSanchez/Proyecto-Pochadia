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
    $scope.estrella = 0;
    $scope.prueba = [];
    //console.log($scope.prueba[0]);
    $scope.puntosTotales = 0;
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
        speed: 2500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    fade: true,
                    autoplay: true,
                    dots: true,
                    infinite: true,
                    speed: 2500,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    fade: true,
                    autoplay: true,
                    dots: true,
                    infinite: true,
                    speed: 2500,
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
    $http.get("http://localhost/servicios/get_puntuacion.php?id_juego=" + $scope.idJuego).then(function (response9) {
        $scope.puntuaciones = response9.data;
        $scope.puntuacionMasAlta = 0;
        $scope.contador = 0;
        $scope.contador2 = 0;
        $scope.puntuacion = []
        $scope.puntuacion.push($scope.puntuaciones[0].puntuacion_1_S);
        $scope.puntuacion.push($scope.puntuaciones[0].puntuacion_2_S);
        $scope.puntuacion.push($scope.puntuaciones[0].puntuacion_3_S);
        $scope.puntuacion.push($scope.puntuaciones[0].puntuacion_4_S);
        $scope.puntuacion.push($scope.puntuaciones[0].puntuacion_5_S);
        //console.log($scope.puntuacion);
        $scope.puntuacion.forEach(punt => {
            if (parseInt(punt) >= $scope.puntuacionMasAlta) {
                $scope.puntuacionMasAlta = punt;
                $scope.contador2 = $scope.contador;
            }
            $scope.contador = $scope.contador + 1;
        });

        $scope.pintarEstrellas();

        $('#uno').mouseout(function () {
            $('#uno').css("color", "white");
            $('#dos').css("color", "white");
            $('#tres').css("color", "white");
            $('#cuatro').css("color", "white");
            $('#cinco').css("color", "white");
            $scope.pintarEstrellas();
        });
        $('#dos').mouseout(function () {
            $('#uno').css("color", "white");
            $('#dos').css("color", "white");
            $('#tres').css("color", "white");
            $('#cuatro').css("color", "white");
            $('#cinco').css("color", "white");
            $scope.pintarEstrellas();
        });
        $('#tres').mouseout(function () {
            $('#uno').css("color", "white");
            $('#dos').css("color", "white");
            $('#tres').css("color", "white");
            $('#cuatro').css("color", "white");
            $('#cinco').css("color", "white");
            $scope.pintarEstrellas();
        });
        $('#cuatro').mouseout(function () {
            $('#uno').css("color", "white");
            $('#dos').css("color", "white");
            $('#tres').css("color", "white");
            $('#cuatro').css("color", "white");
            $('#cinco').css("color", "white");
            $scope.pintarEstrellas();
        });
        $('#cinco').mouseout(function () {
            $('#uno').css("color", "white");
            $('#dos').css("color", "white");
            $('#tres').css("color", "white");
            $('#cuatro').css("color", "white");
            $('#cinco').css("color", "white");
            $scope.pintarEstrellas();
        });
    });
    $scope.pintarEstrellas = function () {
        if ($scope.puntuacionMasAlta != 0) {
            if ($scope.contador2 == 0) {
                $("#uno").css("color", "yellow");
            } else if ($scope.contador2 == 1) {
                $("#uno").css("color", "yellow");
                $("#dos").css("color", "yellow");
            } else if ($scope.contador2 == 2) {
                $("#uno").css("color", "yellow");
                $("#dos").css("color", "yellow");
                $("#tres").css("color", "yellow");
            } else if ($scope.contador2 == 3) {
                $("#uno").css("color", "yellow");
                $("#dos").css("color", "yellow");
                $("#tres").css("color", "yellow");
                $("#cuatro").css("color", "yellow");
            } else if ($scope.contador2 == 4) {
                $("#uno").css("color", "yellow");
                $("#dos").css("color", "yellow");
                $("#tres").css("color", "yellow");
                $("#cuatro").css("color", "yellow");
                $("#cinco").css("color", "yellow");
            }
        }
    }
    $scope.puntuar = function (puntos) {
        $http.get("http://localhost/servicios/get_punt.php?id_juego=" + $scope.idJuego + "&id_usuario=" + $scope.idUsuario).then(function (response8) {
            $scope.colPuntuada = response8.data;
            $scope.puntosAnteriores = 0;
            //console.log($scope.colPuntuada.puntuado);
            if ($scope.colPuntuada.length == 0) {
                $scope.nopuntuo = 0;
                $scope.puntosAnteriores = 0;
                //console.log("Paso por el if de columna puntuada de longitud 0");
            }
            else {
                //console.log("Paso por el if si ya ha puntuado");
                if ($scope.colPuntuada[0].puntuado > 0) {
                    $scope.nopuntuo = $scope.colPuntuada[0].puntuado;
                } else {
                    $scope.nopuntuo = 0;
                }
                $http.get("http://localhost/servicios/get_columnaPuntos.php?id_juego=" + $scope.idJuego + "&columna=" + $scope.colPuntuada[0].puntuado).then(function (response11) {
                    $scope.columna = response11.data;
                    $scope.variable = true;
                    $scope.puntosAnteriores = 0;
                    var numero = 0;
                    //console.log($scope.columna);
                    //console.log(puntos);
                    //console.log("Puntos anteriores" + $scope.puntosAnteriores);
                    //console.log($scope.colPuntuada[0].puntuado);
                    if (parseInt($scope.colPuntuada[0].puntuado) == parseInt(puntos)) {
                        console.log("Me cago en tus putos muertos");
                        Swal.fire({
                            title: 'Ya habias puntuado con ' + puntos + ' estrella/s',
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'Confirmar'
                        }).then((result) => {
                            window.location.href = "info_juego.html?id_juego=" + $scope.idJuego;
                        });
                    } else {
                        if ($scope.colPuntuada[0].puntuado != 0) {
                            if (parseInt($scope.colPuntuada[0].puntuado) == 1) {
                                numero = parseInt($scope.columna[0].puntuacion_1_S);
                                $scope.puntosAnteriores = parseInt(numero) - 1;
                            }
                            else if (parseInt($scope.colPuntuada[0].puntuado) == 2) {
                                numero = parseInt($scope.columna[0].puntuacion_2_S);
                                $scope.puntosAnteriores = parseInt(numero) - 1;
                            }
                            else if (parseInt($scope.colPuntuada[0].puntuado) == 3) {
                                numero = parseInt($scope.columna[0].puntuacion_3_S);
                                $scope.puntosAnteriores = parseInt(numero) - 1;
                            }
                            else if (parseInt($scope.colPuntuada[0].puntuado) == 4) {
                                numero = parseInt($scope.columna[0].puntuacion_4_S);
                                $scope.puntosAnteriores = parseInt(numero) - 1;
                            }
                            else if (parseInt($scope.colPuntuada[0].puntuado) == 5) {
                                numero = parseInt($scope.columna[0].puntuacion_5_S);
                                $scope.puntosAnteriores = parseInt(numero) - 1;
                            }
                        } else {
                            $scope.puntosAnteriores = 0;
                        }
                    }
                });
            }
            $http.get("http://localhost/servicios/get_columnaPuntos.php?id_juego=" + $scope.idJuego + "&columna=" + puntos).then(function (response14) {
                $scope.pActual = response14.data;
                if (parseInt(puntos) == 1) {
                    $scope.puntosTotales = parseInt($scope.pActual[0].puntuacion_1_S) + 1;
                    //console.log("Esto es lo anterior" + $scope.puntosTotales);
                    //console.log($scope.columna);
                }
                if (parseInt(puntos) == 2) {
                    $scope.puntosTotales = parseInt($scope.pActual[0].puntuacion_2_S) + 1;
                    //console.log("Esto es lo anterior" + $scope.puntosTotales);
                    //console.log($scope.columna);
                }
                if (parseInt(puntos) == 3) {
                    $scope.puntosTotales = parseInt($scope.pActual[0].puntuacion_3_S) + 1;
                    //console.log("Esto es lo anterior" + $scope.puntosTotales);
                    //console.log($scope.columna);
                }
                if (parseInt(puntos) == 4) {
                    $scope.puntosTotales = parseInt($scope.pActual[0].puntuacion_4_S) + 1;
                    //console.log("Esto es lo anterior" + $scope.puntosTotales);
                    //console.log($scope.columna);
                }
                if (parseInt(puntos) == 5) {
                    $scope.puntosTotales = parseInt($scope.pActual[0].puntuacion_5_S) + 1;
                    //console.log("Esto es lo anterior" + $scope.puntosTotales);
                    //console.log($scope.columna);
                }

                //console.log("Puntos anteriores" + $scope.puntosAnteriores);
                //console.log($scope.estrella);
                //console.log($scope.puntosTotales);
                //console.log($scope.puntosAnteriores);
                //console.log($scope.nopuntuo);
                $scope.estrella = puntos;
                usuario.puntuacion($scope.estrella, $scope.nopuntuo, $scope.puntosTotales, $scope.idJuego, $scope.puntosAnteriores);
                if ($scope.colPuntuada.length != 0) {
                    if (parseInt($scope.colPuntuada[0].puntuado) == parseInt(puntos)) {
                        Swal.fire({
                            title: 'Ya habias puntuado con ' + puntos + ' estrella/s',
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'Confirmar'
                        }).then((result) => {
                            window.location.href = "info_juego.html?id_juego=" + $scope.idJuego;
                        });
                    } else {
                        Swal.fire({
                            title: '¡Gracias por puntuar',
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'Confirmar'
                        }).then((result) => {
                            window.location.href = "info_juego.html?id_juego=" + $scope.idJuego;
                        });
                    }
                } else {
                    Swal.fire({
                        title: '¡Gracias por puntuar',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Confirmar'
                    }).then((result) => {
                        window.location.href = "info_juego.html?id_juego=" + $scope.idJuego;
                    });
                }
            });
        });
    }
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
        }, 0);
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
                //console.log($scope.Juegofavorito);

                if ($scope.Juegofavorito.length == 0 || $scope.Juegofavorito[0].favorito == 0) {
                    //console.log($scope.favorito);
                    $scope.favorito = 1;
                    //console.log($scope.favorito);
                    usuario.favorito($scope.favorito, $scope.idJuego);
                    Swal.fire({
                        title: 'Juego añadido a favoritos',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Confirmar'
                    }).then((result) => {
                        window.location.href = "info_juego.html?id_juego=" + $scope.idJuego;
                    });
                }
                else {
                    //console.log($scope.favorito);
                    usuario.favorito($scope.favorito, $scope.idJuego);
                    Swal.fire({
                        title: 'Juego quitado de favoritos',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Confirmar'
                    }).then((result) => {
                        window.location.href = "info_juego.html?id_juego=" + $scope.idJuego;
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