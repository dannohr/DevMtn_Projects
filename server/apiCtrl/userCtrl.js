
const { User } = require('../db/model.js')


const getUsers = function(req, res, next) {
    if (req.query.id) {
        User.where({id: req.query.id}).fetch()                         
        .then(function(user) {
            res.json({ error: false, data: user.toJSON() });
        })
        .catch(function(error) {
            res.status(500).json({ error: true, data: {message: err.message}} );
        });
    } else {
        User.fetchAll()
        .then(function (data) {
            res.json( {error: false, data: data.toJSON() });
        })
        .catch(function (err) {
        res.status(500).json( {error: true, data: {message: err.message}} );
        })
    }
}
   
module.exports = { 
    getUsers
}