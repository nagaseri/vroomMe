console.log('auth.js is being called!')
var path = require('path');

var URL = "";
if (process.env.PORT) URL = 'https://vroom-me.herokuapp.com/auth/google/callback';
else URL = "http://localhost:3000/auth/google/callback"

module.exports = {
	'googleAuth' : {
		'clientID': '509748148886-ujqarnj25qcnpk5u7btt9c3cul9dck8h.apps.googleusercontent.com',
		'clientSecret': 'wovNh24ed8X5DsNQIak1sryM',
		'callbackURL': URL
	}
}