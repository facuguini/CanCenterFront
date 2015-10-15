var app = angular.module('cander', ['ngRoute']).config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'templates/main.html',
            controller: 'mainController'
        })
        .when('/matcher', {
            templateUrl: 'templates/match.html',
            controller: 'matchController'
        })
        .when('/finder', {
            templateUrl: 'templates/find.html',
            controller: 'findController'
        })
        .when('/servicer', {
            templateUrl: 'templates/service.html',
            controller: 'serviceController'
        })
});