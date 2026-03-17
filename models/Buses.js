const { Sequelize, DataTypes } = require("sequelize");
const sequelizeConnection = require("../utils/db-connection");

const Buses = sequelizeConnection.define(
  "Buses",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    busNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalSeats: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    availableSeats: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  },
);
module.exports = Buses;
