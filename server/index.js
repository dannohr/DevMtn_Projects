// Bring in our required modules
const express = require('express');
// const bodyParser = require('body-parser');
const { json } = require('body-parser');
// const massive = require('massive');
const session = require('express-session');
const cors = require('cors');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

// const config = require('../config');
const { secret } = require('../config').session;
// const { dbUser, dbPass, database } = require('../config').db;
const { myHost, myDB, myUser, myPass } = require('../config').mySQLdb;
const { domain, clientID, clientSecret } = require('../config').auth0;

const router = express.Router();

// define port
const port = 3008;

var Model = require('./model');

// our database connection information
// const connectionString = `postgres://${dbUser}:${dbPass}@localhost/${database}`;

// App Declaration
const app = express();
app.use('/api', router);

// required middlewares
app.use(json());
app.use(cors());
app.use(express.static(`${__dirname}/../public`));

// connecting to our DB with massive
// massive(connectionString).then(db => app.set('db', db));
        
var knex = require('knex')({
    client: 'mysql',
    connection: {
        host     : '192.168.2.8',
        user     : 'user',
        password : 'mMGUL<&e3A%,E<is',
        database : 'timetracker'
    }
});
        

const Bookshelf = require('bookshelf')(knex);

var User = Bookshelf.Model.extend({
    tableName: 'users'
  });
  

var Users = Bookshelf.Collection.extend({
    model: User
  });



  app.get('/users', (req, res, next) => {
        Users.forge()
            .fetch()
            .then(function (collection) {
                console.log('Returned data: ', collection.toJSON())
                res.json({error: false, data: collection.toJSON()});
            })
            .catch(function (err) {
                console.log(err)
                console.log('No data')
            res.status(500).json({error: true, data: {message: err.message}});
            });
});

        
// setting up express sessions
// secret: config.session.secret;
app.use(session({
    secret,
    resave: true,
    saveUninitialized: true
}));

// setting up passport
app.use(passport.initialize());
app.use(passport.session());

// using passport to access auth0
passport.use(new Auth0Strategy({
    domain,
    clientID,
    clientSecret,
    callbackURL:  '/auth/callback'
   }, (accessToken, refreshToken, extraParams, profile, done) => {
        knex('users').where('authid', profile._json.sub)
        .then((user, err) => {
            if (!user[0]) { //if there isn't a user, we'll create one!
                console.log('CREATING USER');
                knex('users').insert({username: profile.nickname, authid: profile._json.sub})
                .then((res) => {
                    return knex('users').where('id',res) })
                    .then((res, err) => {
                    console.log('USER CREATED', res[0]);
                    return done(err, res[0]); // GOES TO SERIALIZE USER
                })
            } else { //when we find the user, return it
                console.log('FOUND USER', user[0]);
                return done(err, user[0]);
            }
        });
   }
 ) 
);

 // put user on session
 passport.serializeUser((user, done) => {
     done(null, user);
 });

 // pull user from session for manipulation
 passport.deserializeUser((user, done) => {
    //  console.log(user);
     done(null, user);
 });


 // General Endpoints
app.get('/api/test', (req, res, next) => {
    app.get('db').users.find({}).then(response => {
        res.json(response);
    });
});



// auth endpoints

// initial endpoint to fire off login
app.get('/auth', passport.authenticate('auth0', {scope: 'openid profile'}));

// redirect to home and use the resolve to catch the user
app.get('/auth/callback',
    passport.authenticate('auth0', { successRedirect: '/' }), (req, res) => {
        res.status(200).json(req.user);
});

// if not logged in, send error message and catch in resolve
// else send user
app.get('/auth/me', (req, res) => {
    if (!req.user) return res.status(401).json({err: 'User Not Authenticated'});
    res.status(200).json(req.user);
});

// remove user from session
app.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

// listen on port
app.listen(port, ()=> {
    console.log(`LISTENING ON PORT: ${port}`);
});
