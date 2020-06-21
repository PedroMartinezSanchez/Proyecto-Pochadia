var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
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

    $http.get("json/perfil_get_" + $scope.idUsuario + ".json")
        .then(function (response) {
            $scope.resultados = response.data.resultados;

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