module.exports = function(sequelize, DataTypes) {
  var Trip = sequelize.define("trips", {
    hasRider: DataTypes.BOOLEAN,
    driverOrigin: DataTypes.STRING,
    driverOriginCity: DataTypes.STRING,
    driverDestination: DataTypes.STRING,
    driverDestiCity: DataTypes.STRING,
    startTime: DataTypes.DATE,
    price: DataTypes.INTEGER
  });

  Trip.associate = function (models){
    Trip.belongsTo(models.users, {
      foreignKey: 'riderId'
    });
    Trip.belongsTo(models.users, {
      foreignKey: 'driverId'
    })

  }

  console.log('trips.js is loaded')
  return Trip;
};