'use strict';

var { Bookshelf } = require('./db');

var User = Bookshelf.Model.extend({
    tableName: 'users'
  });

module.exports = {
    User
};