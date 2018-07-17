angular.module("pqr",[])
.controller('myCtrl', function($scope, $http) {
    $http.get("welcome.htm")
    .then(function(response) {
        $scope.mywelcome="hello";
        $scope.myWelcome = response.data;
    });
  });