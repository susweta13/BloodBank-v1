// JavaScript source code
(function () {
    var app = angular.module("AngularProject");


    var TitleController = function ($scope, $location) {


        $scope.isRegisterDiv = false;
        $scope.isReceiverDashboard = true;
        $scope.isLogin = false;
        $scope.loggedInReceiver = false;
        $scope.donorDashboard = true;

        $scope.donor = function () {
            $scope.isDonorLogin = true;
            $scope.donorDashboard = false;
        }

        $scope.Login = function () {
            $scope.isLogin = true;
            $scope.isReceiverDashboard = false;
            $scope.isRegisterDiv = false;
        }

        $scope.DonorLoginPost = function (DonorLoginPost) {
            if (DonorLoginPost.Username == 'Donor' && DonorLoginPost.Password == 'Password') {
                $('.modal').modal('hide');
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
                $location.path("/donor/login");
            }
            else {
                alert("Invalid Credentials");
            }
            $('.modal').modal('hide');
        }

        $scope.Register = function () {
            $scope.isRegisterDiv = true;
            $scope.isReceiverDashboard = false;
            $scope.isLogin = false;
        }


        $scope.RegisterPost = function (Register) {
            alert("Registered");
            $scope.isRegisterDiv = false;
            $scope.isReceiverDashboard = true;
            $scope.isLogin = false;
        }

        $scope.LoginPost = function (LoginModel) {
            if (LoginModel.Username == 'User' && LoginModel.Password == 'Password') {
                $('.modal').modal('hide');
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
                $location.path("/receiver/login");
            }
            else {
                alert("Invalid Credentials");
            }
            $('.modal').modal('hide');
        }


        $scope.backToDashboardPage = function () {
            $scope.isRegisterDiv = false;
            $scope.isReceiverDashboard = true;
            $scope.isLogin = false;
            $scope.donorDashboard = true;
            $scope.isDonorLogin = false;
        }
    };
    app.controller("TitleController", TitleController);
}());