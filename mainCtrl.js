angular.module('dirPrac').controller('mainCtrl', function($scope, mainSrvc) {
    $scope.user1 = {
        name: 'Henry',
        age: 25
    };
    $scope.user2 = {
        name: 'Henrietta',
        age: 24
    }

    $scope.sayName = function(message) {
        alert('Hello, ' + message);
    }
});
