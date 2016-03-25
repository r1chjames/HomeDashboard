// app/models/rule.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ruleSchema = new Schema({
    name: String,
    description: String,
    type: String,
    trigger: [
        {
            driverId : String,
            action : String
        }],
    action1: [
        {
            driverId : String,
            action : String //toggle, on, off
        }],
    action2: [
        {
            driverId : String,
            action : String //toggle, on, off
        }],
    frequency: Number,
    dateCreated : Date,
    dateUpdated : Date,
    status: String
});

var Rule = mongoose.model('Rule', ruleSchema);

module.exports = Rule;