// app/models/driver.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var driverSchema = new Schema({
    name: String,
    family: String,
    type: String,
    URI: [ {ip : String, port: Number} ],
    avatar: String,
    status: String,
    actions: {
        name: String
    }
});

driverSchema.set('collection', 'drivers');

var Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;