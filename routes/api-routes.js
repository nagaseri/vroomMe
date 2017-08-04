var day = ''; 
var passportObj = require('../config/passport.js');
var db = require('../models/');
var colors = require('colors/safe')
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
    var riderDest = req.query.destinationAddress; 
    var detailDay = day + " " + req.query.time;
    console.log(`detailDay is ${detailDay}`)
    db.trips.findAll({
      where: {
        driverOriginCity: req.query.originAddress.slice(req.query.originAddress.indexOf(',') + 2),
        driverDestiCity:  req.query.destinationAddress.slice(req.query.destinationAddress.indexOf(',') + 2),
        startTime: detailDay
      }
    }).then(function(driverTrips) {
      var finalData = {}; 
      finalData['riderAddress'] = riderOrigin;
      console.log(`riderORigin is ${riderOrigin}`)
      finalData['riderDest'] = riderDest;
      finalData['driverTrips'] = driverTrips;
      api.data1 = finalData;  
      // console.log('apiObj.data in api is')
      // console.log(api.data1.driverTrips)
      res.end();
    });
  });

  app.put('/match', function(req,res){
    var driverTrip = api.data1['driverTrips'][Object.keys(req.body)]
    // console.log('driverTrips is')
    // console.log(driverTrips)
    var searchId = driverTrip['dataValues']['id'];
    // console.log(`looking for a trip where id = ${searchId}`)
    db.trips.update({
      riderId: req.user.dataValues.id
    },{
      where: {
        id: searchId
      }
    }).then(function(data){
      console.log('matched trip is')
      console.log(colors.green(data))
      api.data2.driverId = data;  
      api.data2.startTime = driverTrip['dataValues'].startTime;
      api.data2.price = driverTrip['dataValues'].price;
      api.data2.driverOrigin = driverTrip['dataValues'].driverOrigin;
      api.data2.riderOrigin = api.data1.riderAddress;
      api.data2.riderDest = api.data1.riderDest;
      res.end();
    })
  })

  app.post("/create", function(req, res) {
    console.log('getting a post request to create a new trip')
    var id = req.user.dataValues.id;
    var detailDay = day + " " + req.body.time
    db.trips.create({
      driverDestination:  req.body.destinationAddress,
      driverOrigin: req.body.originAddress,
      driverDestiCity:  req.body.destinationAddress.slice(req.body.destinationAddress.indexOf(',') + 2),
      driverOriginCity: req.body.originAddress.slice(req.body.originAddress.indexOf(',') + 2),
      price: req.body.price,
      driverId: id,
      startTime: detailDay
    }).then(function(data) {
      // console.log(data)
      res.end();
    });
  });

  app.put('/newcar', function(req,res){
    var id = req.user.dataValues.id;
    // console.log(req);
    db.users.update({
      carModel: Object.keys(req.body)[0]
    },{
      where: {
        id: id
      }
    }).then(function(data){
      res.end()
    })
  })

  console.log('api-routes.js is loaded')
}

api.data1 = {};
api.data2 = {};

module.exports = api;  