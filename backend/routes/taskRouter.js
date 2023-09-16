var express = require("express");
// const { isAuthenticated } = require("../middlewares/jwt");
const {
  createTask,
  getAllTask,
  getSingleTask,
  updateTask,
  deleteTask
} = require("../controllers/TaskController");

var router = express.Router();

router.get("/", getAllTask);
router.get("/:id", getSingleTask);
router.post("/create", createTask);
router.patch("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);

module.exports = router;
