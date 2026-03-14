const express = require("express");
const app = express();
const db = require("./utils/db-connection");
const studentRoute = require("./routes/studentsRoute");

app.use(express.json());
app.use("/students", studentRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
