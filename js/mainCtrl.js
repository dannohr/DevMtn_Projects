angular.module('quoteBook').controller('mainCtrl', function($scope, dataService) {
 

    $scope.quotes = dataService.quotes
    
    $scope.deleteQuote = function(index) {
        dataService.deleteQuote (index);
        
    }

    $scope.addQuote = function (quoteObj) {
        
            dataService.addQuote (quoteObj);
            $scope.newQuote = {};
        
    }
    
  });