console.log('passport is being called')
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var db = require('../app/models/');
var configAuth = require('./auth');

module.exports = function(passport) {
	passport.serializeUser(function(user, done){
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done){
		db.Users.findById(id, function(err, user){
			done(err, user);
		});
	});

	passport.use(new GoogleStrategy({
	    clientID: configAuth.googleAuth.clientID,
	    clientSecret: configAuth.googleAuth.clientSecret,
	    callbackURL: configAuth.googleAuth.callbackURL
	  },
	  function(accessToken, refreshToken, profile, done) {
      console.log('before finding a user')

      db.Users.findOne({'userName': profile.id}, function(err, user){
        if(err)
          return done(err);
        if(user)
          return done(null, user);
        else {
          db.Users.create({
            ///TODO: check table column
            userName : profile.displayName,
            // newUser.google.email : profile.emails[0].value;
            // newUser.google.token : accessToken;
          }).then(function(data){
            console.log(profile);
            return done(null, data);
          })
        }
      });
    }
	));

};