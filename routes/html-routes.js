var passportObj = require('../config/passport.js')
var db = require('../models/')

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

  //index page
  router.get("/", function (req, res) {
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
      console.log(data)
      var trips = []; 
      data.forEach(function(v){
        trips.push({
          driverOrigin:v.dataValues.driverOriginCity,
          driverDestination:v.dataValues.driverDestiCity,
          driverName: "",
          riderName: "",
          startTime: v.dataValues.startTime,
          tripPrice: v.dataValues.price
        })
      })
      res.render('profile', {'trips': trips});
    });
  })

  //authenticate page
  router.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

  //after login, redirect 
  router.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/profile',
  	failureRedirect: '/auth/google' 
  }));

  //TODO: add log out page?  
  console.log('html-routes.js is loaded')
}