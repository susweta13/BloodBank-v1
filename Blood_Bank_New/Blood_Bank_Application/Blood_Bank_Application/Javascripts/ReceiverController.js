// JavaScript source code
(function () {
    var app = angular.module("AngularProject");


    var ReceiverController = function ($scope, $location) {

        $scope.donorArray = [1, 2, 3, 4, 5, 6, 7, 17, 8, 22, 44, 56, 11, 22, 43, 9, 10];
        var count=localStorage.getItem("ReceiverCount");
        if (count==0||count==null) {
            $scope.receiverCount = 0;
        }
        else {
            $scope.receiverCount = count;
        }
        $scope.Logout = function () {
            alert('Logged Out Successfully');
            $location.path("/home");
        }

        $scope.Search = function (Receiver) {
            alert(Receiver.Name + "  " + Receiver.BlGroup)
            //Receiver searched data in the parameter
            //should be routed to a page or div where the google map should be shown
            //$scope.showTable = true;
            $scope.Receiver = null
            $scope.availableDonors = $scope.donorArray[Math.floor(Math.random() * $scope.donorArray.length)];
        }
        $scope.Clear = function () {
            localStorage.removeItem("ReceiverCount");
            alert("Cleared " + $scope.receiverCount + " number of previous requests");
            $scope.receiverCount = 0;
        }

        $scope.requestBlood = function () {
            //$scope.availableDonors = $scope.donorArray[Math.floor(Math.random() * $scope.donorArray.length)];
            $scope.receiverCount++;
            localStorage.setItem("ReceiverCount", $scope.receiverCount);
            $('.modal').modal('hide');
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
            alert("Submitted Request. Requested Number: " + $scope.receiverCount);
        }
    };
    app.controller("ReceiverController", ReceiverController);
}());