var express = require("express");
var bodyParser = require("body-parser");
var passport = require('passport');
var exphbs = require("express-handlebars");
// const methodOverride = require("method-override");

//express server
var app = express();
var port = process.env.PORT || 3000;

//server middle-wares
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
// app.use(methodOverride("_method"));

//server logic
require("./routes/html-routes.js")(app, passport);
require("./routes/api-routes.js")(app);

//data base
var db = require('./models');
console.log('all models and route js files loaded correctly')
db.sequelize.sync({force: false}).then(function(){
  app.listen(port, function() {
    console.log(`Server is running on port ${port}`)
  });
})
