const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController");

router.post("/add", studentController.addEntries);
router.put("/update/:id", studentController.updateEntries);
router.delete("/delete/:id", studentController.deleteEntries);

module.exports = router;
