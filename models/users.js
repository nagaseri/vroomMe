module.exports = function(sequelize, Sequelize) {
  var User = sequelize.define('users', { 
    userName: Sequelize.STRING,
    carModel: Sequelize.STRING
  });
  
  

  console.log('users.js is loaded')
  return User;
}