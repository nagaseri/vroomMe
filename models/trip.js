module.exports = function(sequelize, DataTypes) {
  var Trip = sequelize.define("Trip", {
    driverName: DataTypes.STRING,
    driverCar: DataTypes.STRING,
    driverOrgin: DataTypes.STRING,
    driverOriginCity:Datatypes.STRING,
    driverDestination: DataTypes.STRING,
    driverDestiCity:Datatypes.STRING
    driverStartTime: DataTypes.STRING,
    driverEndTime: DataTypes.STRING,
    // placeholder for possible stretch goals
    driverStars: DataTypes.INTEGER,
    driverRuleEat: DataTypes.BOOLEAN,
    driverRuleNoise: DataTypes.BOOLEAN
  });
  return Trip;
};