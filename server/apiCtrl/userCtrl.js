
const { Users } = require('../db/model.js')
const getUsers = (req, res, next) => {

    
    if (req.query.id) {
        console.log('finding one')
        Users.forge()
        .fetch()
        .then(function (data) {
            res.json({error: false, data: data.toJSON()});
        })
        .catch(function (err) {
        res.status(500).json({error: true, data: {message: err.message}});
        });
    
    } else {
        console.log('finding all')
        Users.forge()
        .fetch()
        .then(function (data) {
            res.json({error: false, data: data.toJSON()});
        })
        .catch(function (err) {
        res.status(500).json({error: true, data: {message: err.message}});
        });}
        
  }


  module.exports = { 
    getUsers
}