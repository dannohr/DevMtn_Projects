module.exports = {
  getTodos(req, res) {
    req.app
      .get('db')
      .run('select * from todos;')
      .then(todos => res.json(todos));
  },
  createTodo(req, res) {
    req.app
      .get('db')
      .create_todo(req.body.todo)
      .then(todo => res.json(todo));
  },
  deleteTodos(req, res) {
    req.app
      .get('db')
      .delete_todo(req.params.id)
      .then(todos => res.json(todos))
      .catch(err => res.json(err));
  }
};
