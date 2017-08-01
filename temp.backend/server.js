// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override"); 
var exphbs = require("express-handlebars");


// Sets up the Express App
// =============================================================
var app = express();
// var passport   = require('passport');
// var session    = require('express-session');
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set handlebars to be the default for our views instead of html
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// For Passport
// session secret
// app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); 
// app.use(passport.initialize());
// persistent login sessions
// app.use(passport.session()); 

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function(err) {
    if (!err)
        console.log("App listening on PORT " + PORT);
    else console.log(err)
    
  });
});
