angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv) {
    
    $scope.locationtest = "Test of Location controller"

    $scope.travelInfo = mainSrv.travelInfo;

});