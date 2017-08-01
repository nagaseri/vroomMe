// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.vroomMe.findAll({}).then(function(vroomMe) {
      // We have access to the todos as an argument inside of the callback function
      res.render('index',{trips: vroomMe});
    });
  });

  // POST route for saving a new driver.
  app.post("/api/vroomMe", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.vroomMe.create({
      driverName: req.body.driverName,
      hasRider: req.body.hasRider,
      driverOrigin: req.body.driverOrigin,
      driverOriginCity: req.body.driverOriginCity,
      driverDestination: req.body.driverDestination, 
      driverDestiCity: req.body.driverDestiCity, 
      startTime: req.body.startTime
    }).then(function(vroomMe) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(vroomMe);
    });
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/vroomMe/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.vroomMe.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(vroomMe) {
      res.json(vroomMe);
    });

  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/vroomMe", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.vroomMe.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(vroomMe) {
      res.json(vroomMe);
    });
  });

};
