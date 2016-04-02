// app/models/driver.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var driverSchema = new Schema({
    name: String,
    family: String,
    type: String,
    URI: String,
    avatar: String,
    status: String
});

driverSchema.set('collection', 'drivers');

var Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;