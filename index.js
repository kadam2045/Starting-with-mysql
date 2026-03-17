const express = require("express");
const app = express();
const db = require("./utils/db-connection");
const studentRoute = require("./routes/studentsRoute");
const busRoute = require("./routes/busRoute");

//models
const studentModel = require("./models/student");

app.use(express.json());
app.use("/students", studentRoute);
app.use("/buses", busRoute);

db.sync({ force: true })
  .then(() => {
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
