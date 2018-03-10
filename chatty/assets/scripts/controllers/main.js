'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ( $scope, messageService ) {
    messageService.getMessages().then(function ( response ) {
      $scope.messages = response.data.messages;
    });


    $scope.addMessage = function ( message, user ) {
      if (message) {
        messageService.addMessage(message, user).then(function ( response ) {
          $scope.messages = response.data.messages;
          console.log(message)
        });
      }
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.userName = ''
  });
