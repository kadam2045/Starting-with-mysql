const { Sequelize, DataTypes } = require("sequelize");
const sequelizeConnection = require("../utils/db-connection");

const Booking = sequelizeConnection.define("Booking", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  busId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  seatNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  bookingDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});
module.exports = Booking;
