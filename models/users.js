module.exports = function(sequelize, Sequelize) {
    var User = sequelize.define('users', { 
        userName: {
            type: Sequelize.TEXT
        },
        carModel: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });
    return User;
}