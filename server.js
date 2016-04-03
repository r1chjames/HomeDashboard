// server.js

    // set up =====================================================================
    var express  = require('express');
    var Agenda = require('agenda');                         // import out agenda
    var app      = express();                               // create our app w/ express
    var mongoose = require('mongoose');                     // mongoose for mongodb
    var morgan   = require('morgan');                       // log requests to the console (express4)
    var bodyParser = require('body-parser');                // pull information from HTML POST (express4)
    var methodOverride = require('method-override');        // simulate DELETE and PUT (express4)
    var host     = process.env.IP;                          // listening address
    var port     = process.argv[2] || process.env.PORT;     // pass in the port from command line or automatically select the port
    var env      = process.argv[3] || 'DEV';                // TODO make config files for environments
    var environment = require('./server/config/' + env);     // import database config
    var loggly = require('./server/config/logger');         // configure loggly logging
    var logger = require('winston');                        // dependency for logging
    var agenda = new Agenda({db: {address: environment.database_url, collection: 'scheduler'}});     // configure agenda scheduler
    // configuration ===============================================================
    mongoose.connect(environment.database_url);     // connect to mongoDB database
    var db = mongoose.connection;

    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());

    // routes =======================================================================
    require('./server/routes/routes.js')(app);
    
    // logging ======================================================================


    // listen (start app and connect to db) =========================================
    logger.log('info','================= App Starting =================');
    logger.log('info','App listening at: ' + host + ':' + port);
    
    db.once('open', function callback () {
        logger.log('info',"Connected to MongoDB at: " + environment.database_url);
        app.listen(port);
    });
    
    db.on('error', function callback () {
        logger.log('error',"Failed to connect to MongoDB at: " + environment.database_url);
        process.exit();
    });
