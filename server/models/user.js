// app/models/user.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: String,
    admin: Boolean,
    created: Date,
    updated: Date
});

userSchema.set('collection', 'users');

var User = mongoose.model('User', userSchema);

module.exports = User;