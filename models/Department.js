const { DataTypes } = require("sequelize");
const sequelizeConnection = require("../utils/db-connection");

const Department = sequelizeConnection.define("Department", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Department;
