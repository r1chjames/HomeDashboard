var Driver = require('../models/driver');

var drivers = {
 
  getAll: function(req, res) {
    // use mongoose to get all driver records from the database
    Driver.find(function(err, data) {
        //if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err);
        res.json(data);
    });
  },
 
  getOne: function(req, res) {
    var id = req.params.id;
    //var driver = data[0]; // Spoof a DB call
    //res.json(driver);
  },
 
  create: function(req, res) {
    var newdriver = req.body;
    // data.push(newdriver); // Spoof a DB call
    // res.json(newdriver);
  },
 
  update: function(req, res) {
    var updatedriver = req.body;
    // var id = req.params.id;
    // data[id] = updatedriver // Spoof a DB call
    // res.json(updatedriver);
  },
 
  delete: function(req, res) {
    var id = req.params.id;
    // data.splice(id, 1) // Spoof a DB call
    // res.json(true);
  }
};

module.exports = drivers;