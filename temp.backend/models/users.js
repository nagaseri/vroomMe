module.exports = function(sequelize, Sequelize) {
    var User = sequelize.define('user', { 
        userName: {
            type: Sequelize.TEXT
        },
        firstName: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        lastName: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        carModel: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });
    return User;
}