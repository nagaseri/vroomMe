var passportObj = require('../config/passport.js')
var db = require('../models/')
var apiObj = require('./api-routes.js')
var colors = require('colors/safe')

function isLoggedIn(req, res, next) {
    console.log('getting a GET request to show profile page!');
    if (req.isAuthenticated()){
      console.log('----user is logged in----')
      return next();
    }
    console.log('----user is not logged in----')
    res.redirect('/auth/google');
}

module.exports = function (router, passport){

  router.get('/', function(req, res){
    res.redirect('/auth/google');
  })
  //index page
  router.get("/index", function (req, res) {
    console.log('rendering index page') 
    var daysOfWeek = {
      days:[
        {day:"M", rowOne: true},
        {day:"Tu", rowOne: true},
        {day:"W", rowOne: true},
        {day:"Th", rowOne: false},
        {day:"F", rowOne: false}
      ]
    }; 
    
    res.render("index", daysOfWeek);
  });

  //query page 
  router.get("/query", function (req, res) {
    console.log('rendering query page')
    res.render("query", {layout: 'main'});
  });


  //login page
  router.get('/profile', isLoggedIn, function(req, res){
    console.log('rendering profile page')
    var id = passportObj.user.dataValues.id;
    console.log(`this user id is ${id}`)
    db.trips.findAll({
      where: {
        $or: [
          {riderId:   id},
          {driverId:  id}
        ]
      }
    }).then(function(data){
      console.log('==============================')
      // console.log(data)
      var trips = []; 
      data.forEach(function(v){
        trips.push({
          driverOrigin:v.dataValues.driverOriginCity,
          driverDestination:v.dataValues.driverDestiCity,
          driverId: v.dataValues.driverId,
          riderId: v.dataValues.riderId,
          startTime: v.dataValues.startTime,
          tripPrice: v.dataValues.price
        })
      })
      db.users.findById(id).then(function(userData){
        // console.log('userData is')
        // console.log(userData)
        res.render('profile', {
          'trips': trips,
          'user': {
            'userName': userData.dataValues.userName,
            'carModel': userData.dataValues.carModel,
          }
        });
      })
    });
  })

  router.get('/results', function(req, res){
    console.log('rendering results page')
    // console.log('apiObj.data in html is')
    // console.log(apiObj.data1)
    res.render('results', {'trips': apiObj.data1})
  })

  //authenticate page
  router.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

  //after login, redirect 
  router.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/index',
  	failureRedirect: '/auth/google' 
  }));

  //rider confirmation page
  router.get('/riderConfirmation', function(req, res){
    //TODO: pass price & car model
    db.users.findOne({
      where: {
        id: apiObj.data2.driverId
      }
    }).then(function(data){
      console.log('found driver is');
      console.log(colors.cyan(data))
      apiObj.data2['foundDriver'] = data.userName;
      
      console.log(apiObj.data2)

      res.render('riderConfirmation', {'match': apiObj.data2})
    })
  })

  //driver confirmation page
  router.get('/driverConfirmation', function(req, res){
    res.render('driverConfirmation', null)
  })

  //TODO: add log out page?  
  console.log('html-routes.js is loaded')
}