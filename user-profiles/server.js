const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const port = 3000;
const config = require('./config')
const profileCtrl = require('./controllers/profileCtrl.js')
const userCtrl = require('./controllers/userCtrl.js')

var corsOptions = {
    origin: 'http://localhost:3000'
};

// app declaration
const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());


app.use(session({ secret: config.sessionSecret,
                  saveUninitialized: true,
                  resave: true }));

app.use((req, res, next) => {
    console.log('REQ BODY', req.body);
    console.log('REQ QUERY', req.query);
    console.log('REQ PARAMS', req.params);
    next();
});

app.use(express.static(__dirname + '/public'));

app.post('/api/login', userCtrl.login)
app.get('/api/profiles', profileCtrl.getFriendsProfiles)


// listen function
app.listen(port, function() {
    console.log(`Listening on port: ${port}`);
});