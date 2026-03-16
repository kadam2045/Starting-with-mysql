const dbConnection = require("../utils/db-connection");

const addBus = (req, res) => {
  const { busNumber, totalSeats, availableSeats } = req.body;
  const addBusQuery = `INSERT INTO buses (busNumber,totalSeats,availableSeats) VALUES (?,?,?)`;

  dbConnection.execute(
    addBusQuery,
    [busNumber, totalSeats, availableSeats],
    (err, result) => {
      if (err) {
        console.log("error while adding", err);
        res.status(500).json({ message: "error while adding" });
        dbConnection.end();
        return;
      }
      res.status(200).json({ message: `bus added successfully` }, result);
    },
  );
};

const getBusesByAvilableSeats = (req, res) => {
  const { availableSeats } = req.params;
  const availableBusQuery = ` SELECT * FROM buses WHERE availableSeats > ?`;

  dbConnection.execute(availableBusQuery, [availableSeats], (err, result) => {
    if (err) {
      console.log("error while fetching", err);
      res.status(500).json({ message: "error while fetching" });

      return;
    }

    if (result.affectedRows === 0) {
      res.status(404).json({ message: "no bus found" });

      return;
    }

    res.status(200).json({ data: result });
  });
};

const deleteBus = (req, res) => {
  const { id } = req.params;
  const deleteQuery = `DELETE FROM buses WHERE id  = ?`;

  dbConnection.execute(deleteQuery, [id], (err, result) => {
    if (err) {
      console.log("error while deleting", err);
      res.status(500).json({ message: "error while deleting" });
      dbConnection.end();
      return;
    }

    if (result.affectedRows === 0) {
      res.status(404).json({ message: `no bus found with id ${id}` });
      dbConnection.end();
      return;
    }

    res.status(200).json({ message: `bus with id ${id} deleted successfully` });
  });
};

module.exports = { addBus, deleteBus, getBusesByAvilableSeats };
