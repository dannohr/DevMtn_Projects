angular.module('quoteBook').controller('mainCtrl', function($scope, dataService) {
 

    $scope.quotes = dataService.quotes
    
    $scope.deleteQuote = function(index) {
        dataService.deleteQuote (index);
        
    }

    $scope.addQuote = function (quoteObj) {
        
        // if (!quoteObj.text) {
        //     alert("Enter a Quote");
        //     return;
        // }

        // else if (!quoteObj.author) {
        //     alert("Missing Author");
        //     return;
        // }

        // else {
            dataService.addQuote (quoteObj);
            $scope.newQuote = {};
        // }
        
    }
    
  });