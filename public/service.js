angular.module('myApp').service('service', function($http) {
  this.getTodos = function() {
    return $http.get('/api/todos');
  };
  this.addTodo = function(todo) {
    let promise = $http.post('/api/todos', { todo });
    return promise;
  };
  this.removeTodo = function(todo) {
    return $http.delete(`/api/todos/${todo.id}`);
  };
});
