const { Sequelize, DataTypes } = require("sequelize");
const sequelizeConnection = require("../utils/db-connection");

const Students = sequelizeConnection.define("Students", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Students;
