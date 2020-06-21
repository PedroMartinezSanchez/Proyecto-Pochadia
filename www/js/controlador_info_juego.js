var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
    var url = new URL(window.location.href);
    $scope.idJuego = url.searchParams.get("id_juego");
    if (!$scope.idJuego) $scope.idJuego = 1;
    console.log($scope.idJuego);

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
    $http.get("json/info_juego_get_" + $scope.idJuego + ".json")
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