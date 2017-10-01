const { Bookshelf } = require('./db.js')

'use strict';

// let Bookshelf = require('./db');

var User = Bookshelf.Model.extend({
    tableName: 'users'
});

var Users = Bookshelf.Collection.extend({
    model: User
  });
            

//   module.exports = Bookshelf.model('User', User);
  
module.exports = {
               User,
               Users
            };