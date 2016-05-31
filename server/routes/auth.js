var jwt = require('jwt-simple');
var User = require('../models/user');
 
var auth = {
 
  login: function(req, res) {
 
    var username = req.body.username || '';
    var password = req.body.password || '';
 
    if (username == '' || password == '') {
      res.status(401);
      res.json({
        "status": 401,
        "message": "Invalid credentials"
      });
      return;
    }
 
    // Fire a query to your DB and check if the credentials are valid
    var dbUserObj = auth.validate(username, password);
   
    if (!dbUserObj) { // If authentication fails, we send a 401 back
      res.status(401);
      res.json({
        "status": 401,
        "message": "Invalid credentials"
      });
      return;
    }
 
    if (dbUserObj) {
 
      // If authentication is success, we will generate a token
      // and dispatch it to the client
 
      res.json(genToken(dbUserObj));
    }
 
  },
 
  validate: function(username, password) {
    // spoofing the DB response for simplicity
    User.find({'username' : username, 'password' : password}, 'username password', function(err, data) {
            //if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err) res.send(err);
            return data;
        });
  },
 
  validateUser: function(username) {
    // spoofing the DB response for simplicity
      User.find({'username' : username}, 'username', function(err, data) {
            //if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err) res.send(err);
            return data;
        });
  },
}
 
// private method
function genToken(user) {
  var expires = expiresIn(7); // 7 days
  var token = jwt.encode({
    exp: expires
  }, require('../config/secret')());
 
  return {
    token: token,
    expires: expires,
    user: user
  };
}
 
function expiresIn(numDays) {
  var dateObj = new Date();
  return dateObj.setDate(dateObj.getDate() + numDays);
}
 
module.exports = auth;