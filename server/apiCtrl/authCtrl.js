// const { Users } = require('../db/model.js')

const passport = require('passport');

const login = passport.authenticate('auth0', {scope: 'openid profile'})



  module.exports = { 
    login
}