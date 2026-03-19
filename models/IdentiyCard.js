const { Sequelize, DataTypes } = require("sequelize");
const dbConnection = require("../utils/db-connection");

const IdentityCard = dbConnection.define("IdentityCard", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cardNo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = IdentityCard;
