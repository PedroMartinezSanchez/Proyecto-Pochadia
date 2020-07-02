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
                    //console.log("confirmado!");
                    //console.log(reader.result);
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
        /*
        reader.onload = function () {
            Swal.fire({
                title: "¿Estas seguro?",
                html: "<img src='" + reader.result + "' style='width:250px;'>",
                showCancelButton: true,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            }).then(result => {
                if (result.isConfirmed) {
                    $timeout(function() {
                        $scope.imagen = reader.result;
                    }, 0);
                    
                } else {
                }
            });
            */
        };
        reader.readAsDataURL(file);
    };
    $http.get("json/perfil_get_" + $scope.idUsuario + ".json")
        .then(function (response) {
            $scope.resultados = response.data.resultados;
            $scope.imagen = response.data.resultados[0].img_perfil;
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
