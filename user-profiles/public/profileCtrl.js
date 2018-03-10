angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {
	// $scope.currentUser = friendService.login
	friendService.getFriends().then(function(res) {
		console.log(res)
		$scope.currentUser = res.data.currentUser
		$scope.friends = res.data.friends
	})
});