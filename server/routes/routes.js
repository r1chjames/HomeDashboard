// app/routes.js
var path = require('path');
var bodyParser = require("body-parser");

var logger = require('winston');
require('winston-loggly');

var Activity = require('../models/activity');
var Driver = require('../models/driver');
var User = require('../models/user');
var Rule = require('../models/rule');
var WeMo = require('../controllers/drivers/wemo');

// expose the routes to our app with module.exports
module.exports = function(app) {
    
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

    // api ---------------------------------------------------------------------
    
    app.get('/login', function(req, res) {
            res.sendfile(path.join(__dirname, '../../public', '/login.html'));
    });
    
    app.get('/', function(req, res) {
            res.sendFile(path.join(__dirname, '../../public', '/dashboard.html'));
    });
    
    app.get('/dashboard', function(req, res) {
            res.sendFile(path.join(__dirname, '../../public', '/dashboard.html'));
    });
    
    app.get('/rules', function(req, res) {
            res.sendFile(path.join(__dirname, '../../public', '/rules.html'));
    });
    
    app.get('/drivers', function(req, res) {
            res.sendFile(path.join(__dirname, '../../public', '/drivers.html'));
    });
    
    app.get('/api/driver', function(req, res) {
        // use mongoose to get all driver records from the database
        Driver.find(function(err, driver) {
            //if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err);
            res.json(driver);
        });
    });
    
    app.get('/api/activity', function(req, res) {
        // use mongoose to get all activity records from the database
        Activity.find(function(err, activity) {
            //if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err);
            res.json(activity);
        });
    });

    app.get('/api/user', function(req, res) {
        // use mongoose to get all user records from the database
        User.find(function(err, user) {
            //if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err);
            res.json(user);
        });
    });

    app.get('/api/rules', function(req, res) {
        // use mongoose to get all user records from the database
        Rule.find(function(err, rule) {
            //if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err);
            res.json(rule);
        });
    });
    
    app.post('/api/trigger/', function(req, res) {
        // use mongoose to get all driver records from the database
        logger.log('info','Device trigger for driverID: ' + req.body.driverID + ' for action: ' + req.body.action);
        var driverID = req.body.driverID,
            action = req.body.action;

            // Driver.find({ _id : driverID }, 'URI', function(err, driver) {
            //  if (err)
            //     res.send(err);
            //     res.json(driver);
        //console.log(driverID);
        WeMo.setState('192.168.0.45', 49153, 1, function(err, driver) {
            console.log('hello');
            //if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err);
            //res.json(driver);
        });
    //});
    });

    app.post('/api/driver', function(req, res) {
        //create a todo, information comes from AJAX request from Angular
        Driver.create({
            text : req.body.text,
            done : false
        }, function(err, driver) {
            if (err)
                res.send(err);
            // get and return all the todos after you create another
            Driver.find(function(err, driver) {
                if (err)
                    res.send(err)
                res.json(driver);
            });
        });

    });
    
     app.post('/api/activity', function(req, res) {
        //create a todo, information comes from AJAX request from Angular
        Activity.create({
            text : req.body.text,
            done : false
        }, function(err, activity) {
            if (err)
                res.send(err);
            // get and return all the todos after you create another
            Activity.find(function(err, activity) {
                if (err)
                    res.send(err)
                res.json(activity);
            });
        });

    });
    
     app.post('/api/user', function(req, res) {
        //create a todo, information comes from AJAX request from Angular
        User.create({
            text : req.body.text,
            done : false
        }, function(err, user) {
            if (err)
                res.send(err);
            // get and return all the todos after you create another
            User.find(function(err, user) {
                if (err)
                    res.send(err)
                res.json(user);
            });
        });

    });

    // delete a todo
    app.delete('/api/todos/:todo_id', function(req, res) {
        // Todo.remove({
        //     _id : req.params.todo_id
        // }, function(err, todo) {
        //     if (err)
        //         res.send(err);

        //     // get and return all the todos after you create another
        //     Todo.find(function(err, todos) {
        //         if (err)
        //             res.send(err)
        //         res.json(todos);
        //     });
        // });
    });
};