// Requiring our models
var db = require("../models");

module.exports = function(app) {
	app.get("/", function(req, res) {
    
    db.Trip.findAll({}).then(function(result) {
       res.render('index', result);
    });
  });
};