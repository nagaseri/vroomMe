var express = require("express");
var bodyParser = require("body-parser");
var passport = require('passport');
var exphbs = require("express-handlebars");
var colors = require('colors/safe')
var session = require('express-session');

//express server
var app = express();
var port = process.env.PORT || 3000;

//server middle-wares
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// required for passport session
app.use(session({
  secret: 'vroom me is great',
  saveUninitialized: true,
  resave: false,
}));

//passport logic
var passportLogic = require('./config/passport.js');
passportLogic.func(passport);
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
// app.use(methodOverride("_method"));
//server logic
require("./routes/html-routes.js")(app, passport);
require("./routes/api-routes.js").func(app, passport);

//data base
var db = require('./models');
console.log('all models and route js files loaded correctly')
db.sequelize.sync({force: false}).then(function(){
  app.listen(port, function() {
    console.log(colors.green(`Server is running on port ${port}`))
  });
})
