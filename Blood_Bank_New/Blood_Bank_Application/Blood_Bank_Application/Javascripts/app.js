// JavaScript source code
(function () {
    var app = angular.module("AngularProject", ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
        .when("/home", {
            templateUrl: "TitlePage.html",
            controller: "TitleController"
        })
        .when("/receiver", {
            templateUrl: "ReceiverPage.html",
            controller: "ReceiverController"
        })
        .when("/receiver/login", {
            templateUrl: "ReceiverLoggedIn.html",
            controller: "ReceiverController"
        })
            .when("/donor/login", {
                templateUrl: "DonorLoggedIn.html",
                controller: "DonorController"
            })
        .otherwise({ redirectTo: "/home" });
    });

    app.controller('ReceiverLogged', function ($scope) {
        $scope.pageClass = 'page-home';
    });
}());