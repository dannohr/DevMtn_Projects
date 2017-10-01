// Bring in our required modules
const express = require('express');
// const bodyParser = require('body-parser');
const { json } = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');


const { port } = require('../config').port;
const { secret } = require('../config').session;
const { myHost, myDB, myUser, myPass } = require('../config').mySQLdb;
const { domain, clientID, clientSecret } = require('../config').auth0;

const userCtrl = require('./apiCtrl/userCtrl.js')
const auth0Login = require('./apiCtrl/auth0Login.js')
const authCtrl = require('./apiCtrl/authCtrl.js')

const router = express.Router();

// App Declaration
const app = express();
app.use('/api', router);

// required middlewares
app.use(json());
app.use(cors());
app.use(express.static(`${__dirname}/../public`));

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

const { knex } = require('./db/db');

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


 app.use((req, res, next) => {
    console.log('REQ BODY', req.body);
    console.log('REQ QUERY', req.query);
    console.log('REQ PARAMS', req.params);
    next();
});


// General Endpoints
app.get('/api/users', userCtrl.getUsers)



// auth endpoints

// initial endpoint to fire off login
// app.get('/auth', passport.authenticate('auth0', {scope: 'openid profile'}));
app.get('/auth', authCtrl.login);



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
