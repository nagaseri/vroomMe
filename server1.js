const express = require("express");
const bodyParser = require("body-parser");
// const methodOverride = require("method-override");
const exphbs = require("express-handlebars");
//express server
var app = express();
var port = process.env.PORT || 3000;
//server middle-wares
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//server logic
require("./routes/html-routes.js")(app, passport);
require("./routes/api-routes.js")(app);
app.use("/", routes);
app.listen(port,() => (console.log(`Server is running on port ${port}`)));

//TODO: add passport