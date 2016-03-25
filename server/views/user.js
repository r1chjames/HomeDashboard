// grab the user model
var User = require('../models/user');

// create a new user
var newUser = User({
  name: 'Richard James',
  username: 'r1chjames',
  password: 'Rich1234',
  email: 'richjames11@gmail.com',
  admin: true
});

// save the user
newUser.save(function(err) {
  if (err) throw err;
  console.log('User created!');
});