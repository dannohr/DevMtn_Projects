const express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  port = 3000,
  app = express(),
  serverConfig = require('./server/config'),
  ctrl = require('./server/ctrl.js');

app.use(cors());
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/public'));

app.get('/api/todos', ctrl.getTodos);
app.post('/api/todos', ctrl.createTodo);
app.delete('/api/todos/:id', ctrl.deleteTodos);

app.listen(port, function() {
  console.log('Server listening on port', port);
});
