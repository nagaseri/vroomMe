var LocalStrategy = require('passport-local').Strategy;
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
      //TODO: update it so it checks JAWSDB instead of local
      db.Users.findOne({'name': profile.id}, function(err, user){
        if(err)
          return done(err);
        if(user)
          return done(null, user);
        else {
          db.Users.create({
            ///TODO: check table column
            name : profile.displayName,
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