var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http, $timeout) {
    var url = new URL(window.location.href);
    $scope.idUsuario = url.searchParams.get("id_usuario");
    if (!$scope.idUsuario) $scope.idUsuario = 1;
    console.log($scope.idUsuario);

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
    $(".img-perfil").mouseover(function(){        
        $(".edit-icon").fadeIn();
    });
    $(".edit-icon").mouseover(function(){
        $(".edit-icon").fadeIn();
    });
    $(".img-perfil").mouseout(function(){
        $(".edit-icon").fadeOut();
    });
    $(".edit-icon2").hide();
    $(".img-banner").mouseover(function(){        
        $(".edit-icon2").fadeIn();
    });
    $(".edit-icon2").mouseover(function(){
        $(".edit-icon2").fadeIn();
    });
    $(".img-banner").mouseout(function(){
        $(".edit-icon2").fadeOut();
    });
    

    $scope.confirmar = function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();

        reader.onload = function () {

            Swal.fire({
                title: '¿Estas seguro?',
                html: "<img class='rounded-circle' src='" + reader.result + "' style='width:300px;'>",
                text: "Escoge una imagen que se ajuste bien a tu gusto",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirmar'
            }).then((result) => {

                console.log(result);
                if (result.isConfirmed) {
                    $timeout(function(){
                        
                    $scope.imagen = reader.result;
                    }, 0);

                    Swal.fire(
                        'Imagen actualizada',
                        '¡Ha quedado genial!',
                        'success'
                    )
                } else {
                    console.log("cancelado!");
                }
            });
        };
        reader.readAsDataURL(file);
    };
    $scope.confirmar2 = function (event2) {
        var file2 = event2.target.files[0];
        var reader2 = new FileReader();
        
        
        reader2.onload = function () {
            var image = new Image();
            image = reader2.result;
            image.onload = function() {
                console.log(image.width);
            if (image.width < 630 || image.height < 230) {
                
                Swal.fire({
                    title: '¡El tamaño de la imagen es muy pequeño!',
                    text: "Te recomendamos unas medidas de 630x230",
                    icon: 'warning',
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Confirmar'
                });
            } else {
                Swal.fire({
                    title: '¿Estas seguro?',
                    html: "<img src='" + reader2.result + "' style='width:300px;'>",
                    text: "Escoge una imagen que se ajuste bien a tu gusto",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Confirmar'
                }).then((result) => {
    
                    console.log(result);
                    if (result.isConfirmed) {
                        $timeout(function(){
                            
                        $scope.imagen2 = reader2.result;
                        }, 0);
    
                        Swal.fire(
                            'Imagen actualizada',
                            '¡Ha quedado genial!',
                            'success'
                        )
                    } else {
                        console.log("cancelado!");
                    }
                });
            }
            }
            
            
            
        };
        reader2.readAsDataURL(file2);
    };
    $http.get("json/perfil_get_" + $scope.idUsuario + ".json")
        .then(function (response) {
            $scope.resultados = response.data.resultados;
            $scope.imagen = response.data.resultados[0].img_perfil;
            $scope.imagen2 = response.data.resultados[0].img_banner;
        });
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
