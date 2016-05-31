var User = require('../models/user');

var users = {
 
    getAll: function(req, res) {
        //use mongoose to get all user records from the database
        User.find(function(err, user) {
            //if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err);
            res.json(user);
        });
    },
 
  getOne: function(req, res) {
    var id = req.params.id;
    // var user = data[0]; // Spoof a DB call
    // res.json(user);
  },
 
  create: function(req, res) {
    var newuser = req.body;
    // data.push(newuser); // Spoof a DB call
    // res.json(newuser);
  },
 
  update: function(req, res) {
    var updateuser = req.body;
    // var id = req.params.id;
    // data[id] = updateuser // Spoof a DB call
    // res.json(updateuser);
  },
 
  delete: function(req, res) {
    var id = req.params.id;
    // data.splice(id, 1) // Spoof a DB call
    // res.json(true);
  }
};

module.exports = users;