const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController");

router.post("/add", studentController.addEntries);
router.put("/update/:id", studentController.updateEntries);
router.delete("/delete/:id", studentController.deleteEntries);
router.get("/get", studentController.getEntries);
router.get("/get/:id", studentController.getStudentsByID);
router.post(
  "/createStudentWithIdentityCard",
  studentController.createStudentWithIdentityCard,
);
router.post(
  "/createPostsWithStudent",
  studentController.createPostsWithStudent,
);

module.exports = router;
