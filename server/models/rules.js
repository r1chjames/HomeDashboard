// app/models/activity.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var activitySchema = new Schema({
    driverID: String,
    title: String,
    body: String,
    level: Number,
    dateTime: String,
    status: String
});

var Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;