const dbConnection = require("../utils/db-connection");
const Buses = require("../models/Buses");
const { Op, json } = require("sequelize");

const addBus = async (req, res) => {
  try {
    const { busNumber, totalSeats, availableSeats } = req.body;
    const buses = await Buses.create({
      busNumber: busNumber,
      totalSeats: totalSeats,
      availableSeats: availableSeats,
    });

    if (!buses) {
      res.status(404).json({ message: "Bus not found" });
      return;
    }

    res.status(200).json({ data: buses });
  } catch (error) {
    console.log("error while inserting", error);
    res.status(500).json({ message: "error while inserting" });
  }
};

const getBusesByAvilableSeats = async (req, res) => {
  try {
    const { availableSeats } = req.params;
    const buses = await Buses.findAll({
      where: {
        availableSeats: {
          [Op.gte]: availableSeats,
        },
      },
    });

    if (!buses) {
      (res.status(404), json({ message: "No bus found" }));
      return;
    }
    res
      .status(200)
      .json({ message: "buses fetched successfully", data: buses });
  } catch (error) {
    console.log("error while fetching", error);
    res.status(500).json({ message: "error while fetching" });
  }
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
