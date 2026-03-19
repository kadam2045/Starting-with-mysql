const { DataTypes } = require("sequelize");
const sequelizeConnection = require("../utils/db-connection");

const Posts = sequelizeConnection.define("Posts", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Posts;
