angular.module('fullstack').controller('timesheetCtrl', function($scope, user, timesheetSrvc) {
    
    let weekStartDate = getMonday(new Date())
    $scope.startDate = weekStartDate.toDateString()
    console.log('staring day of week is: ', $scope.startDate);
    
    $scope.timesheetTest = "Test of Timesheet view"


    $scope.timesheet = function () {
        timesheetSrvc.getTimesheet().then(function (response) {
            console.log(response)
            $scope.timesheet = response
            });
    }
    
    $scope.timesheet()



    function getMonday( date ) {
        var day = date.getDay() || 7;  
        if( day !== 0 ) 
            date.setHours(-24 * (day - 1)); 
        return date;
    }
    
    
});