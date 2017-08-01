var passport = require('passport');
module.exports = function (router){

  //index page
  router.get("/", function (req, res) {
    console.log('rendering index page')  
    var daysOfWeek = {
      days:[
        {day:"M", rowOne: true},
        {day:"Tu", rowOne: true},
        {day:"W", rowOne: true},
        {day:"Th", rowOne: false},
        {day:"F", rowOne: false},
      ]}; 
    res.render("index", daysOfWeek);
  });

  //query page 
  router.get("/query", function (req, res) {
    
    res.render("query", {layout: 'main'});
  });


  //login page
  // router.get('/profile', function (req, res, next) {
  //   console.log('getting a GET request to show profile page!')
  //   if(req.isAuthenticated()) return next();
  //   res.redirect('/login');
  // }, function(req, res){
  //     res.render('profile', { user: req.body.user });
  //   });

  //authenticate logic
  // router.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

  // router.get('/auth/google/callback', passport.authenticate('google', {
  //   successRedirect: '/profile',
  // 	failureRedirect: '/login' 
  // }));

  //TODO: add log out page?  
  console.log('html-routes.js is done running')
}