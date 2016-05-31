var mongoose = require('mongoose');
var schema = require('../models/driver.js');
var Driver = mongoose.model('Driver');

exports.findAll = function(req, res) {
  Driver.find({}, function(err, driver) {
    if (err) {
      throw new Error(err);
    }
    res.send(driver);
  });
};

exports.findOne = function(req, res) {
  Driver.findById(req.params.id, function(err, driver) {
    if (err) {
      throw new Error(err);
    }
    res.send(driver);
  });
};

exports.add = function(req, res) {
  var document = new Driver(req.body);
  document.save(function(err, driver) {
    if (err) {
      throw new Error(err);
    }
    res.send(driver);
  });
};

exports.update = function(req, res) {
  Driver.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, function(err, driver) {
    if (err) {
      throw new Error(err);
    }
    res.send(driver);
  });
};

exports.remove = function(req, res) {
  Driver.findByIdAndRemove(req.params.id, function(err, driver) {
    if (err) {
      throw new Error(err);
    }
    res.send(driver);
  });
};