const knex = require('knex')({
                client: 'mysql',
                connection: {
                    host     : '192.168.2.8',
                    user     : 'user',
                    password : 'mMGUL<&e3A%,E<is',
                    database : 'timetracker'
                }
            })

const Bookshelf= require('bookshelf')(knex)

Bookshelf.plugin('registry');

module.exports = {
    knex,
    Bookshelf
};