var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http, usuario) {

    $scope.correo= "";
    $scope.contra = "" ;

    $scope.login = function() {
        usuario.login($scope.correo,$scope.contra);
    };

    $scope.logout = function() {
        usuario.logout();
    };

    $scope.validado = function(){
        return usuario.validado();
    }
});