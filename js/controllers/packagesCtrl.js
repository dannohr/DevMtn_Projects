angular.module('devmtnTravel').controller('packagesCtrl', function($scope, $stateParams, mainSrv) {
    
    $scope.packagetest = 'Test Package Controller';

    
          $scope.packageInfo = mainSrv.packageInfo.filter(function(cur){
              return cur.country === $stateParams.country
          })
              

          console.log($scope.packageInfo);
    

    
});