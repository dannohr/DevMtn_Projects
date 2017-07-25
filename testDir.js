angular.module('dirPrac').directive('testDir', function() {
    return {
        restrict: 'EA',
        templateUrl: './views/testTmpl.html',
        scope: {
            info: '=',
            otherParam: '@',
            greet: '&',
        },
        link: function(scope, elems, attrs) {
            scope.info.name = 'Frank';
            if (scope.otherParam === 'Hello, World')
                setTimeout(function() {
                    elems.css({'color': 'red'});
                }, 1000)
                console.log(attrs);
        },
        controller: function($scope, mainSrvc) {
            
        }
    }
});
