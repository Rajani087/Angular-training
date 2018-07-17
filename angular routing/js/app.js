angular.module('route',["ngRoute"])
.config(route)
.controller('routeCtrl',routeCtrl)
function routeCtrl($scope)
{

}
function route($routeProvider){
    $routeProvider
    .when("/home", {
        templateUrl : "main.html"
    })
    .when("/red", {
        templateUrl : "red.html"
    })
    .when("/green", {
        templateUrl : "green.html"
    })
    .when("/blue", {
        templateUrl : "blue.html"
    })
    .otherwise({redirectTo:'/home'})
    
};