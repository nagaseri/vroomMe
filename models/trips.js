module.exports = function(sequelize, DataTypes) {
  var Trip = sequelize.define("trips", {
    driverName: DataTypes.STRING,
    hasRider: DataTypes.BOOLEAN,
    driverOrigin: DataTypes.STRING,
    driverOriginCity: DataTypes.STRING,
    driverDestination: DataTypes.STRING,
    driverDestiCity: DataTypes.STRING,
    startTime: DataTypes.DATETIME
  });
  return Trip;
};