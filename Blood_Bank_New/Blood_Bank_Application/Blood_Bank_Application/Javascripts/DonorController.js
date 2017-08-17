// JavaScript source code
(function () {
    var app = angular.module("AngularProject");


    var DonorController = function ($scope, $location) {
        $scope.showTable = true;
        $scope.NameArray = ['Aninda', 'Susweta', 'Urvashi', 'Shouhardya', 'Somak', 'Moinak', 'Manas', 'Soumavo', 'Manash'];
        $scope.Address = ['Kolkata', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Delhi'];
        $scope.Contact = ['8577467364', '9896766483', '7899678576', '8877588123', '9535180915', '8697344171'];
        $scope.receiverArray = [];
        var receiverCount = localStorage.getItem('ReceiverCount');
        if (receiverCount != null || receiverCount != 0) {
            for (var i = 0; i < receiverCount; i++) {
                $scope.receiverObj = {};
                $scope.receiverObj.id = i;
                $scope.receiverObj.Name = $scope.NameArray[Math.floor(Math.random() * $scope.NameArray.length)];
                $scope.receiverObj.Address = $scope.Address[Math.floor(Math.random() * $scope.Address.length)];
                $scope.receiverObj.BloodGroup = 'AB+';
                $scope.receiverObj.Contact = $scope.Contact[Math.floor(Math.random() * $scope.Contact.length)];
                $scope.receiverArray.push($scope.receiverObj);
            }
        }

        $scope.Donate = function (id) {
            debugger
            var receiverUpdatedCount = receiverCount - 1;
            receiverCount = receiverUpdatedCount;
            localStorage.setItem("ReceiverCount", receiverUpdatedCount);
            for (var i = 0; i < $scope.receiverArray.length; i++) {
                if ($scope.receiverArray[i].id == id) {
                    alert("Donor approved request for " + $scope.receiverArray[i].Name)
                    $scope.receiverArray.splice(i, 1);
                    break;
                }
            }
        }

        $scope.Logout = function () {
            alert('Logged Out Successfully');
            $location.path("/home");
        }

    };
    app.controller("DonorController", DonorController);
}());