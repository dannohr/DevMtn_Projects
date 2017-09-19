'use strict';

angular.module('chattyApp')
  .service('messageService', function ( $http ) {
    
      this.getMessages = function () {
        return $http.get('/messages');
      }

      this.addMessage = function ( message, user ) {
        return $http.post('/messages', { message: message, user: user });
      }
    
  });
