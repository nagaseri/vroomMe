console.log('passport is being called')
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var db = require('../models/');
var configAuth = require('./auth');

module.exports = function(passport) {
	passport.serializeUser(function(user, done){
		console.log('serializeUser is being called!')
    console.log(`user is ${user}`)
    done(null, user.id);
	});

	passport.deserializeUser(function(id, done){
    console.log('deserializeUser is being called!')
    console.log(`id is ${id}`)
		db.users.findOne({ where: {id: id} }, function(err, user){
			done(err, user);
		});
	});

	passport.use(new GoogleStrategy({
	    clientID: configAuth.googleAuth.clientID,
	    clientSecret: configAuth.googleAuth.clientSecret,
	    callbackURL: configAuth.googleAuth.callbackURL
	  },
	  function(accessToken, refreshToken, profile, done) {

      process.nextTick(function(){
        console.log('trying to find user')
        db.users.findOne({where:{'userName': profile.displayName}}).then(function(user){
          if(user){
            console.log('user found!')
            console.log(user);
            return done(null, user);
          }
          else {
            console.log('creating a new user');
            db.Users.create({
              ///TODO: check table column
              'userName' : profile.displayName,
              // newUser.google.email : profile.emails[0].value;
              // newUser.google.token : accessToken;
            }).then(function(data){
              console.log('done creating a new user')
              console.log(profile);
              return done(null, data);
            })
          }
        });
      })
    }
	));

};