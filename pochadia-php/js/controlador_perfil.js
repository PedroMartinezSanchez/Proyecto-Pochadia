var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http, $timeout, usuario) {

    $scope.correoantiguo = "";
    $scope.correonuevo = "";
    $scope.contrasenyaantigua = "";
    $scope.contrasenyanueva = "";
    $scope.nick = "";
    $scope.slickParams = {
        arrows: true,
        centerMode: false,
        centerPadding: '60px',
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: '10px',
                    slidesToShow: 1
                }
            }
        ]
    };

    //Evento de cambio de imagen

    $(".edit-icon").hide();
    $(".img-perfil").mouseover(function () {
        $(".edit-icon").fadeIn();
    });
    $(".edit-icon").mouseover(function () {
        $(".edit-icon").fadeIn();
    });
    $(".img-perfil").mouseout(function () {
        $(".edit-icon").fadeOut();
    });
    $(".edit-icon2").hide();
    $(".img-banner").mouseover(function () {
        $(".edit-icon2").fadeIn();
    });
    $(".edit-icon2").mouseover(function () {
        $(".edit-icon2").fadeIn();
    });
    $(".img-banner").mouseout(function () {
        $(".edit-icon2").fadeOut();
    });
    $scope.idUsuario = usuario.id();
    $scope.confirmar = function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();

        reader.onload = function () {

            Swal.fire({
                title: 'Edita la imagen para que se ajuste bien a tu gusto',
                html: '<div style="height:75vh"><div id="tui-image-editor"></div></div>',
                width: '100vw',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirmar',
                onOpen: () => {
                    new tui.ImageEditor(document.querySelector('#tui-image-editor'), {
                        includeUI: {
                            loadImage: {
                                path: reader.result,
                                name: 'Imagen Perfil'
                            }
                        }
                    });
                },
                preConfirm: () => {
                    var canvas = document.getElementsByClassName("lower-canvas")[0];
                    console.log(canvas.type);
                    if (canvas.width > 512 && canvas.height > 512) {
                        $timeout(function () {
                            $scope.imagen = canvas.toDataURL('image/png',0);
                            usuario.actualizaPerfil($scope.imagen);
                            Swal.fire({
                                title: 'Imagen actualizada',
                                confirmButtonColor: '#3085d6',
                                confirmButtonText: 'Confirmar'
                            }).then((result) => {
                                window.location.href = "perfil.html";
                            });
                        }, 0);
                    }
                    else {
                        Swal.fire(
                            'Imagen no actualizada',
                            '¡Es muy pequeña!',
                            'warning'
                        )
                    }
                }
            });
        };
        reader.readAsDataURL(file);
    };
    $scope.confirmar2 = function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();

        reader.onload = function () {

            Swal.fire({
                title: 'Edita la imagen para que se ajuste bien a tu gusto',
                html: '<div style="height:75vh"><div id="tui-image-editor"></div></div>',
                width: '100vw',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirmar',
                onOpen: () => {
                    new tui.ImageEditor(document.querySelector('#tui-image-editor'), {
                        includeUI: {
                            loadImage: {
                                path: reader.result,
                                name: 'Imagen Banner'
                            }
                        }
                    });
                },
                preConfirm: () => {
                    var canvas = document.getElementsByClassName("lower-canvas")[0];
                    if (canvas.width > 698 && canvas.height > 235) {
                        $timeout(function () {
                            $scope.img_banner = canvas.toDataURL('image/png',0);
                            usuario.actualizaBanner($scope.img_banner);
                            Swal.fire({
                                title: 'Imagen actualizada',
                                confirmButtonColor: '#3085d6',
                                confirmButtonText: 'Confirmar'
                            }).then((result) => {
                                window.location.href = "perfil.html";
                            });
                        }, 0);
                    }
                    else {
                        Swal.fire(
                            'Imagen no actualizada',
                            '¡Es muy pequeña!',
                            'warning'
                        )
                    }
                }
            });
        };
        reader.readAsDataURL(file);
    };
    $http.get("http://localhost/servicios/get_cabecera.php?id_usuario=" + $scope.idUsuario).then(function (response3) {
        $scope.cabecera = response3.data;
    });
    $http.get("http://localhost/servicios/get_favoritos.php?id_usuario=" + $scope.idUsuario).then(function (response5) {
        $scope.favoritos = response5.data;
    });
    $scope.correo = function () {
        $http.get("http://localhost/servicios/comprobar_correo.php?id_usuario=" + $scope.idUsuario).then(function (response4) {
            $scope.oldemail = response4.data;

            estado = true;
            estado2 = true;

            if (/^\w+([.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail).(?:|com|es)+$/.test($scope.correoantiguo) == false) {
                Swal.fire("El correo antiguo no tiene un formato correcto.");
                estado = false;
            }
            if (/^\w+([.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail).(?:|com|es)+$/.test($scope.correonuevo) == false) {
                Swal.fire("El correo nuevo no tiene un formato correcto.");
                estado2 = false;
            }
            console.log(estado);
            console.log(estado2);
            if ($scope.correoantiguo == "" || $scope.correonuevo == "") {
                Swal.fire("No pueden haber campos vacios.");
            } else {
                if (estado == true && estado2 == true) {
                    $http.get("http://localhost/servicios/comprobar_correonuevo.php?correo=" + $scope.correonuevo).then(function (response7) {
                        $scope.nuevocorreo = response7.data;
                        if ($scope.nuevocorreo.length == 0) {
                            if ($scope.oldemail[0].correo == $scope.correoantiguo) {
                                usuario.actualizaCorreo($scope.correonuevo);
                                Swal.fire({
                                    title: 'Correo actualizado',
                                    confirmButtonColor: '#3085d6',
                                    confirmButtonText: 'Confirmar'
                                }).then((result) => {
                                    window.location.href = "perfil.html";
                                });
                            } else {
                                Swal.fire("Tienes que poner tu correo antiguo.");
                            }
                        } else {
                            Swal.fire("Este correo ya existe.");
                        }
                    });
                }
            }
        });
    };
    $scope.contrasenya = function () {
        $http.get("http://localhost/servicios/comprobar_contrasenya.php?id_usuario=" + $scope.idUsuario).then(function (response6) {
            $scope.antigua = response6.data;
            console.log($scope.antigua);

            estadoPwd = true;
            estado2Pwd = true;
            console.log($scope.contrasenyaantigua);
            console.log($scope.contrasenyanueva);
            if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test($scope.contrasenyaantigua.toString()) == false) {
                Swal.fire("La contraseña antigua debe de tener al menos un digito, una letra minúscula, una letra mayúscula y minimo 8 caracteres.");
                estadoPwd = false;
            }
            if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test($scope.contrasenyanueva.toString()) == false) {
                Swal.fire("La contraseña nueva debe de tener al menos un digito, una letra minúscula, una letra mayúscula y minimo 8 caracteres.");
                estado2Pwd = false;
            }
            console.log(estadoPwd);
            console.log(estado2Pwd);
            if ($scope.contrasenyaantigua == "" || $scope.contrasenyanueva == "") {
                Swal.fire("No pueden haber campos vacios.");
            } else {
                if (estadoPwd == true && estado2Pwd == true) {
                    if ($scope.antigua[0].contrasenya == CryptoJS.MD5($scope.contrasenyaantigua)) {
                        if ($scope.contrasenyaantigua == $scope.contrasenyanueva) {
                            Swal.fire("Las contraseñas no pueden ser iguales.");
                        } else {
                            Swal.fire("Contraseña actualizada.");
                            usuario.actualizaContrasenya($scope.contrasenyanueva);
                        }
                    } else {
                        Swal.fire("Contraseña antigua erronea.");
                    }
                }
            }
        });
    };
    $scope.cambiaNick = function () {
        $http.get("http://localhost/servicios/comprobar_nick.php?id_usuario=" + $scope.idUsuario).then(function (response8) {
            $scope.nickactual = response8.data;
            if ($scope.nickactual[0].nombre == $scope.nick) {
                Swal.fire("No puedes poner el mismo nick que ya tienes.");
            } else {
                if ($scope.nick.length <= 20) {
                    usuario.actualizaNick($scope.nick);
                    Swal.fire({
                        title: 'Nick actualizado',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Confirmar'
                    }).then((result) => {
                        window.location.href = "perfil.html";
                    });
                } else {
                    Swal.fire("Nick demasiado largo, solo se puede hasta 20 caracteres.");
                }
            }
        });
    }
    $scope.logout = function () {
        usuario.logout();
        window.location.href = "principal.html";
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
app.directive('cuandoCambie', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('change', scope.$eval(attrs.cuandoCambie));
        }
    }
});
