const { Sequelize } = require("sequelize");

const sequelizeConnection = new Sequelize("testdb", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

(async () => {
  try {
    await sequelizeConnection.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelizeConnection;
