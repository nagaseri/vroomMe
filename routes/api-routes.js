var day = ''; 
var passportObj = require('../config/passport.js');
var db = require('../models/');
var api ={};

api.func = function (app, passport) {

  app.get("/day", function (req, res) {
    console.log("You clicked on " + Object.keys(req.query)[0])
    
    day = Object.keys(req.query)[0];
    day = day.slice(0, day.indexOf('T'));
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

  //for riders
  app.get("/SQLresults", function(req, res) {
    var that = this;
    console.log('getting a get request to show all SQL results')
    // console.log(req.user)
    // console.log(req)
    // console.log('===============')
    // console.log(req.query)
    var id = req.user.dataValues.id;
    var riderOrigin = req.query.originAddress;  
    var detailDay = day + " " + req.query.time
    console.log(`detailDay is ${detailDay}`)
    db.trips.findAll({
      where: {
        driverOrigin: req.query.originAddress,
        driverDestination:  req.query.destinationAddress,
        startTime: detailDay
      }
    }).then(function(driverTrip) {
      db.users.findById(id).then(function(riderTrip){
        var finalData = {}; 
        finalData['riderAddress'] = riderOrigin;
        finalData['driverTrips'] = driverTrip;
        api.data1 = finalData;  
        // console.log('apiObj.data in api is')
        // console.log(api.data1.driverTrips)
        res.end();
      })
    });
  });

  

  app.post("/create", function(req, res) {
    console.log('getting a post request to create a new trip')
    var id = req.user.dataValues.id;
    var detailDay = day + " " + startTime
    db.trips.create({
      driverDestnation:  req.body.destinationAddress,
      driverOrigin: req.body.originAddress,
      price: req.body.price,
      driverId: id,
      startTime: detailDay + " " + req.query.time +':00'
    }).then(function(data) {
      console.log(data)
      res.redirect("/driverConfirmation");
    });
  });


  console.log('api-routes.js is loaded')
}

api.data1 = {}

module.exports = api;  