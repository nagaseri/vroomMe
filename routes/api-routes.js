var day = ''; 
var db = require('../models/')

module.exports = function (app) {

  app.get("/day", function (req, res) {
    console.log("You clicked on " + Object.keys(req.query)[0])
    day = Object.keys(req.query)[0];
  })

  app.get("/alltrips", function (req, res){
    db.trips.findAll({}).then(function(data){
      res.json(data);
    })
  })

  app.get("/allusers", function (req, res){
    db.users.findAll({}).then(function(data){
      res.json(data);
    })
  })


  //TODO: check route 
  app.get("/SQLresults", function(req, res) {
    console.log('getting a get request to show all SQL results')
    db.trips.findAll({
      //TODO: check with front end
      driverDestnation:  req.data.destination,
      driverOrigin: req.data.origin,
      startTime: req.data.time
    }).then(function(vroomMe) {
      res.json(vroomMe);
    });
  });

  app.post("/create", function(req, res) {
    db.trips.create({
      //TODO: update item to put in driver Name
      driverDestnation:  req.data.destination,
      driverOrigin: req.data.origin,
      startTime: req.data.time
    }).then(function(vroomMe) {
    //SAVE THIS TRIP somewhere
    //REMEMBER that user is a driver
      res.redirect("/auth/google");
    });
  });


  console.log('api-routes.js is loaded')
}