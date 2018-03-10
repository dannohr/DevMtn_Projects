angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, mainSrv) {
    
    $scope.bookedtest = "Test of Booked controller"

     $scope.bookedInfo = mainSrv.packageInfo.find(function(cur){ 
        return cur.id == $stateParams.id
     })

    console.log($stateParams);
    console.log($scope.bookedInfo);

});