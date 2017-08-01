module.exports = function(sequelize, DataTypes) {
  var Trip = sequelize.define("trips", {
    hasRider: DataTypes.BOOLEAN,
    driverOrigin: DataTypes.STRING,
    driverOriginCity: DataTypes.STRING,
    driverDestination: DataTypes.STRING,
    driverDestiCity: DataTypes.STRING,
    startTime: DataTypes.DATE
  });
  console.log('trips.js is done running')
  return Trip;
};