// server.js

    // set up ========================
    var express  = require('express');
    var app      = express();                        // create our app w/ express
    var mongoose = require('mongoose');              // mongoose for mongodb
    var morgan   = require('morgan');                // log requests to the console (express4)
    var bodyParser = require('body-parser');         // pull information from HTML POST (express4)
    var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
    var database = require('./server/config/database');
    var host     = process.env.IP;
    var port     = process.argv[2] || process.env.PORT;         // pass in the port from command line or automatically select the port
    var env      = process.argv[3] || 'DEV';        // TODO make config files for environments

    // configuration ===============================================================
    mongoose.connect(database.url);     // connect to mongoDB database
    var db = mongoose.connection;

    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());

    // routes ======================================================================
    require('./server/routes/routes.js')(app);
    
    // logging ======================================================================
    var logger = require('winston');
    require('winston-loggly');
 
    logger.add(logger.transports.Loggly, {
        token: "87c1dd30-d309-437e-bcce-0492a94bf316",
        subdomain: "r1chjames",
        tags: ["NodeJS-HomeAutomation"],
        json:true
    });

    // listen (start app with node server.js) ======================================
    app.listen(port);
    logger.log('info','================= App Starting =================');
    logger.log('info',"App listening at: " + host + ":" + port);
    
    db.once('open', function callback () {
        logger.log('info',"Connected to MongoDB at: " + database.url);
    });
    
    db.on('error', function callback () {
        logger.log('error',"Failed to connect to MongoDB at: " + database.url);
        process.exit();
    });
