var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  $http.get("prueba.json")
  .then(function(response) {
      $scope.myWelcome = response.data;
  });
});