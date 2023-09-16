var express = require("express");
const { isAuthenticated } = require("../middlewares/jwt");
const {
  createTask,
  getAllTask,
  getSingleTask,
  updateTask,
  deleteTask
} = require("../controllers/TaskController");

var router = express.Router();

router.get("/", isAuthenticated, getAllTask);
router.get("/:id", isAuthenticated, getSingleTask);
router.post("/create", isAuthenticated, createTask);
router.put("/update/:id", isAuthenticated, updateTask);
router.delete("/delete/:id", isAuthenticated, deleteTask);

module.exports = router;
