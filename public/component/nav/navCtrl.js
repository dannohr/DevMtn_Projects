angular.module('fullstack').controller("navCtrl", function($scope, mainSrvc) {
   
    mainSrvc.getUser().then(function(user){
      $scope.user = (user.data);
      console.log('nav ctrl ran')  //except it doesn't when logging in locally
      console.log(($scope.user));
    });
  });