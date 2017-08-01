

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
  console.log("You clicked on " + Object.keys(req.query)[0])
  var  hbsObject = {
    rides: [{
      rider: 'Chi',
      origin: 'oakland',
      destination: 'san francisco'
    }]
  };
  // console.log(hbsObject);
  // res.render("query", hbsObject);
});


//login page
router.get('/profile', function (req, res, next) {
	if(req.isAuthenticated()) return next();
	res.redirect('/login');
}, function(req, res){
		res.render('profile', { user: req.body.user });
	});

//authenticate logic
app.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

app.get('/auth/google/callback', passport.authenticate('google', {
  successRedirect: '/profile',
	failureRedirect: '/login' 
}));

//TODO: add log out page?  

}