const { Sequelize } = require("sequelize");

const sequelizeConnection = new Sequelize("testdb", "root", "root", {
  host: "localhost",
  dialect: "mysql",
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

// const mysql = require("mysql2");

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "testDB",
// });

// connection.connect((err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Connected to MySQL");

//   const studentsTableQuery = `CREATE TABLE IF NOT EXISTS students (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     email VARCHAR(255) NOT NULL,
//     password VARCHAR(255) NOT NULL
//   )`;

//   const busesTableQuery = `CREATE TABLE IF NOT EXISTS buses (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     busNumber INT NOT NULL,
//     totalSeats INT NOT NULL,
//     availableSeats INT NOT NULL
//   )`;

//   const bookingTableQuery = `CREATE TABLE IF NOT EXISTS bookings (
//     id INT PRIMARY KEY,
//     seatNumber INT NOT NULL
//   )`;

//   const payementsTableQuery = `CREATE TABLE IF NOT EXISTS payements (
//     id INT PRIMARY KEY,
//     amountPaid INT NOT NULL,
//     paymentStatus VARCHAR(255) NOT NULL
//   )`;

//   const tables = [
//     studentsTableQuery,
//     busesTableQuery,
//     bookingTableQuery,
//     payementsTableQuery,
//   ];

//   tables.forEach((table) => {
//     connection.query(table, (err, result) => {
//       if (err) {
//         console.log("error while creating table", err);
//         return;
//       }

//       console.log("table created successfully");
//     });
//   });
// });

// module.exports = connection;
