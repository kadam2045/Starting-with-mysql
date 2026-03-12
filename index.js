const express = require("express");
const app = express();
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "testDB",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connected to MySQL");

  const userTableQuery = `CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
  )`;

  const busesTableQuery = `CREATE TABLE IF NOT EXISTS buses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    busNumber INT NOT NULL,
    totalSeats INT NOT NULL,
    availableSeats INT NOT NULL,
  )`;

  const bookingTableQuery = `CREATE TABLE IF NOT EXISTS bookings (
    id INT PRIMARY KEY,
    seatNumber INT NOT NULL,  
  )`;

  const payementsTableQuery = `CREATE TABLE IF NOT EXISTS payements (
    id INT PRIMARY KEY,
    amountPaid INT NOT NULL,
    paymentStatus VARCHAR(255) NOT NULL,
    
  )`;

  const tables = [
    userTableQuery,
    busesTableQuery,
    bookingTableQuery,
    payementsTableQuery,
  ];

  tables.forEach((tables) => {
    connection.execute(tables, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(result);
    });
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
