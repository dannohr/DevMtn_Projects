angular.module('myApp', []).controller('myCtrl', function($scope, service) {
  $scope.addTodo = function(todo) {
    service.addTodo(todo).then(todos => {
      $scope.todos = todos.data;
    });
  };

  service.getTodos().then(todos => {
    $scope.todos = todos.data;
  });

  $scope.removeTodo = function(todo) {
    service.removeTodo(todo).then(todos => {
      $scope.todos = todos.data;
    });
  };
});
