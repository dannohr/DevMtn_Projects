const express = require('express')
const bodyParser = require('body-parser')
const port = 3000

const app = express()

const usersCtrl = require('./usersCtrl.js');

app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log('REQ BODY', req.body);
    console.log('REQ QUERY', req.query);
    console.log('REQ PARAMS', req.params);
    next();
});

app.get('/api/users', usersCtrl.getUsers);

app.get('/api/users/:userId', usersCtrl.getUser)

app.get('/api/admins', usersCtrl.getAdmins)

app.get('/api/nonadmins', usersCtrl.getNonAdmins)

app.get('/api/user_type/:userType', usersCtrl.getUserType)

app.put('/api/users/:userID', usersCtrl.putUser)

app.post('/api/users', usersCtrl.postUser)

app.delete('/api/users/:userID', usersCtrl.deleteUser)






app.listen(port,() => {console.log(`Running on port: ${port}`)})