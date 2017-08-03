console.log('passport is being called')
var colors = require('colors/safe')
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var db = require('../models/');
var configAuth = require('./auth');

var passport = {};

passport.func = function(passport) {
  var that = this;  
	passport.serializeUser(function(user, done){
		console.log('serializeUser is being called!')
    done(null, user.id);
	});

	passport.deserializeUser(function(id, done){
    console.log(colors.red('deserializeUser is being called!'))
		// console.log(`id is ${id}`)

    db.users.findById(id).then(function(user){
      // console.log('found user is')
      // console.log(user)
			done(null, user);
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
            // console.log(user);
            that.user = user
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
              console.log(data);
              that.user = data;  
              return done(null, data);
            })
          }
        });
      })
    }
	));

};

passport.user = {};

module.exports = passport; 