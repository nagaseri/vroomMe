module.exports = function(sequelize, DataTypes) {
  var Trip = sequelize.define("Trip", {
    driverName: DataTypes.STRING,
    hasRider: DataTypes.BOOLEAN,
    driverOrigin: DataTypes.STRING,
    driverOriginCity: DataTypes.STRING,
    driverDestination: DataTypes.STRING,
    driverDestiCity: DataTypes.STRING,
    startTime: DataTypes.STRING
  });
  return Trip;
};