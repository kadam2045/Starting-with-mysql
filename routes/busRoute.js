const express = require("express");
const busController = require("../controller/busController");
const router = express.Router();

router.post("/add", busController.addBus);
router.delete("/delete/:id", busController.deleteBus);
router.get("/get/:availableSeats", busController.getBusesByAvilableSeats);

module.exports = router;
